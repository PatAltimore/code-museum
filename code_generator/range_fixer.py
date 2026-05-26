"""range_fixer.py — post-processing pass to correct enhancement line ranges.

Strategy: instead of asking the model to count and output line numbers (which
LLMs do poorly), ask for **text anchors** — the exact stripped content of the
first and last line of each range.  Python then:

  1. Pre-parses the source file into a structural boundary map: a list of
     (line_number, name) tuples for every top-level label / function / form.
  2. Sends the complete source + boundary list to the model.  The model may
     reference boundaries by name (start_boundary / next_boundary) instead of
     guessing anchor text; Python maps the name back to an exact line number.
  3. Falls back to text anchors (start_anchor / next_anchor / end_anchor) when
     the section boundary is not present in the pre-parsed list.
  4. Finds the anchor line by string search within a window (no counting).
  5. Walks backward deterministically to include any preceding doc-comment.
  6. Finds the end boundary deterministically:
       C/C++:    forward brace-depth scan to the matching closing }
       Lisp/MDL: forward angle-bracket depth scan (same idea, < / > delimiters)
       Assembly: forward scan to ENDP/ENDS/ENDM, then RTS/RTI/RET fallback
       Other:    end_anchor search within a window
  7. Runs a verification pass: the model reviews each resolved range in context
     and may request corrections before ranges are written.
  8. Resolves ALL ranges first, sorts by start line, then trims overlaps so
     that each range ends before the next one begins (no repeated code).

The model is shown the FULL source file so it can understand the overall
structure and correctly identify each annotated section.  All enhancements
for a file are sent in a single request.
"""

import json
import re
from pathlib import Path

import yaml

# Matches assembly closing-directive lines: ENDP, ENDS, ENDM (optionally
# preceded by a label such as "SaveVectors     ENDP").
_ASM_CLOSING_RE = re.compile(r'\bEND[PSM]\b', re.IGNORECASE)

# Return instructions for various assembly architectures:
#   6502/65C02:  RTS, RTI
#   68k:         RTS, RTD, RTR
#   x86:         RET, RETN, RETF, RETW, RETD, IRET, IRETD
#   Z80/8080:    RET (with optional condition)
# Handles both indented returns and labeled return stubs at column 0,
# e.g. "FFRTS:  RTS" or "CHRRTS: RTS" (common in Microsoft BASIC 6502 style).
_ASM_RETURN_RE = re.compile(
    r'^(?:[ \t]+|[A-Za-z_][A-Za-z0-9_]*:[ \t]*)(RTS|RTI|RTD|RTR|RET[NFWD]?|IRET[D]?)\b',
    re.IGNORECASE
)

# A top-level (non-local) assembly label at column 0.
# Local labels start with '.' or ':' and are branch targets within a routine.
_ASM_TOPLABEL_RE = re.compile(r'^[A-Za-z_][A-Za-z0-9_]*\s*:')

# How far (in lines) to search around the approximate position when hunting
# for an anchor string.
ANCHOR_RADIUS = 80

# Comment-start tokens recognised across common languages.
_COMMENT_PREFIXES = (
    "//", "/*", "(*", "--", ";;",
    ";", "*", "#", "!", "'",
)

_SYSTEM = """\
You are correcting line-range metadata for source code annotations.

You will be given the COMPLETE source file (all lines, numbered) followed by a
list of annotations.  Each annotation has:
  - id and title
  - The annotation text — read this carefully; it describes exactly what
    function, subroutine, data structure, or algorithm the range should cover
  - A hint: the approximate current line range (often WRONG — treat as a rough
    starting point only, not as the answer)

Your task: read the annotation text, study the full source, identify the correct
code section, and return anchors for its boundaries.

────────────────────────────────────────────────────────────
OUTPUT FIELDS (all text is stripped of leading/trailing whitespace)
────────────────────────────────────────────────────────────

"start_boundary"  (PREFERRED over start_anchor)
  The exact NAME from the STRUCTURAL BOUNDARIES list where this section begins.
  Python looks up the exact line number from the pre-parsed boundary map.
  Use this whenever the section starts at a listed boundary.

"next_boundary"  (PREFERRED over next_anchor)
  The NAME from the STRUCTURAL BOUNDARIES list of the FIRST boundary that
  comes AFTER the end of this section.  Python uses its line number to
  determine the end (last non-blank line before that boundary).
  This is the most reliable end-detection method.

Use start_boundary + next_boundary whenever possible.
Fall back to start_anchor / next_anchor / end_anchor only when the section
starts or ends at a point NOT present in the boundary list.

"start_anchor"  (fallback when start is not in boundary list)
  The FIRST SUBSTANTIVE line of the section, copied verbatim.
  "Substantive" means the function/procedure signature, label, or opening
  declaration — NOT a blank line, NOT a comment, NOT a separator (rows of
  = * - chars).  Leading doc-comments are included automatically; do not
  put them in the anchor.
  • C/C++:      return-type + name line:  "void R_DrawWall (void)"
  • Assembly:   label / PROC header:     "SaveVectors"  or  "DrawPlayer  PROC"
  • Lisp/MDL:   opening form:            "<DEFINE SPARSE"  or  "<SETG WINNER"
  • If the return type is on a line above the name (Doom/Quake style), copy
    the return-type line — it is the earliest substantive line.

"end_anchor"  (required as fallback)
  The LAST SUBSTANTIVE line of the section, copied verbatim.
  • C/C++:      closing brace:           "}"  or  "};"
  • Assembly (MASM/TASM):               the ENDP / ENDS / ENDM line
  • Assembly (6502/flat):               the last instruction before the next
                                        major label, e.g. "rts" or "]rts rts"
  • Lisp/MDL:   last closing form:      ">" or the line containing it
  • Data sections: last data byte/word line
  Do NOT include blank lines or the first line of the next section.

"next_anchor"  (optional but STRONGLY PREFERRED when end is ambiguous)
  The FIRST SUBSTANTIVE line of the FOLLOWING section — i.e. the line that
  immediately comes after the section you are annotating.
  When provided, the caller finds this line and uses the last non-blank line
  before it as the end.  This is more reliable than end_anchor for:
  • Assembly files where the end of one routine/table is defined by the
    start of the next label (e.g. "AUTOCTRL" follows the data tables)
  • Lisp/MDL forms where ">" is hard to locate uniquely
  • Any section whose last line is a common/ambiguous token
  Omit next_anchor only when the current section is the last in the file
  or when end_anchor is already unambiguous.

────────────────────────────────────────────────────────────
Do NOT output line numbers.  Do NOT explain.  Output valid JSON only:
[{"id": "...", "start_boundary": "...", "next_boundary": "...", "start_anchor": "...", "end_anchor": "...", "next_anchor": "..."}, ...]
"""

_VERIFY_SYSTEM = """\
You are verifying code range extractions for source code annotations.
For each extraction you will see the annotation description and the extracted
code (lines marked with >>>) with a few lines of context above and below.

Check ONLY for clearly obvious errors — the kind visible without the full file:
- Starts several lines TOO LATE: the annotation label or opening comment is in
  the context ABOVE the >>> lines
- Ends TOO EARLY: the last >>> line is in the middle of an instruction sequence
  with more related instructions immediately below it in the context
- Ends TOO LATE: clearly includes the opening label of a completely different,
  unrelated section that is visible in the context BELOW the >>> lines
- Is the completely wrong section (description does not match the code at all)

IMPORTANT CONSERVATIVE RULES:
- If you are not certain, output {"id": "...", "ok": true} — do NOT guess.
- For large ranges shown as head+tail, only flag if both the start AND end
  are clearly wrong. Never flag based on the omitted middle section.
- A range that looks "a bit off" is NOT a reason to flag it — only flag
  obvious, unambiguous errors that would make the annotation misleading.
- Assembly routines often span many lines; do NOT trim end lines unless
  you can clearly see the routine has ended inside the >>> block.

Output a JSON array:
  Correct:  {"id": "...", "ok": true}
  Wrong:    {"id": "...", "ok": false,
             "start_boundary": "name-from-boundary-list-or-omit",
             "next_boundary":  "name-from-boundary-list-or-omit",
             "start_anchor":   "first substantive line verbatim, or omit",
             "next_anchor":    "first line of following section verbatim, or omit"}

Only include fields that differ from the current extraction.
Do NOT output line numbers.
"""


# ---------------------------------------------------------------------------
# File I/O
# ---------------------------------------------------------------------------

def _read_md(path: Path):
    """Parse a generated .md file into (meta dict, code_lines list)."""
    text = path.read_text(encoding="utf-8")
    start = text.index("---")
    end   = text.index("---", start + 3)
    meta  = yaml.safe_load(text[start + 3 : end])
    body  = text[end + 3:]
    code_lines = body.split("\n")[2:]
    if code_lines and code_lines[-1] == "":
        code_lines.pop()
    if code_lines and code_lines[0].startswith("```"):
        code_lines = code_lines[1:]
    if code_lines and code_lines[-1] == "```":
        code_lines = code_lines[:-1]
    return meta, code_lines


# ---------------------------------------------------------------------------
# Language helpers
# ---------------------------------------------------------------------------

def _is_c_like(language: str) -> bool:
    lang = (language or "").lower()
    return any(t in lang for t in ("c++", "c/c++", " c ", "c,", "objective-c")) \
        or lang in ("c", "c++")


def _is_lisp_like(language: str) -> bool:
    lang = (language or "").lower()
    return any(t in lang for t in ("lisp", "mdl", "muddle", "scheme", "clojure", "racket"))


def _is_asm_like(language: str) -> bool:
    lang = (language or "").lower()
    return any(t in lang for t in ("assembly", "asm", "6502", "x86", "68k", "mips", "z80"))


# ---------------------------------------------------------------------------
# Structural boundary extraction  (pre-parse step)
# ---------------------------------------------------------------------------

def _extract_boundaries_asm(code_lines: list[str]) -> list[tuple[int, str]]:
    """Extract top-level assembly label boundaries.

    Matches lines starting at column 0 with an identifier character
    ([A-Za-z_][A-Za-z0-9_.]), NOT preceded by a comment character
    (;, *, #, !).  Captures both label: style and Merlin 8 label hex style.

    The pattern allows the identifier to be the ENTIRE line (no trailing
    character required).  In Merlin 8 / 6502 assembly many labels appear on
    their own line:
        SkelProg          ← standalone label, nothing after it
         lda #2           ← instruction on next line
    The old regex required [\\s:] after the name, which silently dropped all
    of these.  The fix uses (?:[\\s:]|$) so end-of-line is also a valid stop.
    """
    result: list[tuple[int, str]] = []
    ident_re = re.compile(r'^([A-Za-z_][A-Za-z0-9_.]*)(?:[\s:]|$)')
    skip_chars = frozenset(';*#!')

    for i, line in enumerate(code_lines):
        if not line:
            continue
        first = line[0]
        if first in skip_chars or first.isspace():
            continue
        m = ident_re.match(line)
        if m:
            result.append((i + 1, m.group(1)))

    return result


def _extract_boundaries_c(code_lines: list[str]) -> list[tuple[int, str]]:
    """Extract C/C++ function boundaries at brace depth 0.

    Detects lines containing '(' that end with '{' (or are followed by '{'),
    skipping preprocessor lines, comment lines, and control-flow keywords.
    """
    result: list[tuple[int, str]] = []
    total = len(code_lines)

    # Control-flow keywords that should not be treated as function definitions
    _ctrl = frozenset(('if', 'else', 'for', 'while', 'do', 'switch',
                        'try', 'catch', 'finally'))

    # Track brace depth globally so we only pick up top-level definitions
    brace_depth = 0
    in_block_comment = False

    # Regex to extract a function name from a C declaration line
    _fname_re = re.compile(r'\b([A-Za-z_][A-Za-z0-9_]*)\s*\(')

    for i, line in enumerate(code_lines):
        stripped = line.strip()

        # Track block comment state
        if in_block_comment:
            if '*/' in line:
                in_block_comment = False
            continue
        if '/*' in line and '*/' not in line[line.index('/*'):]:
            in_block_comment = True

        # Update brace depth from this line (before deciding)
        brace_depth += line.count('{') - line.count('}')

        # Skip comments, preprocessor, blank lines
        if not stripped or stripped.startswith('//') or stripped.startswith('#'):
            continue
        if stripped.startswith('/*') or stripped.startswith('*'):
            continue

        # Must contain '(' (parameter list) and be at depth 0 AFTER counting
        # the braces on this line — function opener brings depth from 0 to 1
        if '(' not in line:
            continue

        # We want lines that open a brace block (end with '{' or next non-blank
        # line is '{') when the resulting depth is 1 (was 0 before)
        opens_block = stripped.endswith('{')
        if not opens_block and i + 1 < total:
            # Look ahead for the opening brace on its own line
            for j in range(i + 1, min(i + 5, total)):
                ns = code_lines[j].strip()
                if ns == '{':
                    opens_block = True
                    break
                if ns:
                    break

        if not opens_block:
            continue

        # At depth 1 now means it was a top-level opener
        if brace_depth != 1:
            continue

        # Extract function name — last identifier before '('
        # Skip control-flow keywords
        m = None
        for fm in _fname_re.finditer(line):
            candidate = fm.group(1)
            if candidate not in _ctrl:
                m = fm
        if not m:
            continue

        result.append((i + 1, m.group(1)))

    return result


def _extract_boundaries_lisp(code_lines: list[str]) -> list[tuple[int, str]]:
    """Extract Lisp/MDL top-level form boundaries.

    Matches lines at column 0 starting with '<' or '(' and extracts the
    form type and name (e.g. "DEFINE SPARSE" from "<DEFINE SPARSE ...>").
    """
    result: list[tuple[int, str]] = []
    # Match opening token and up to two words after it
    _form_re = re.compile(r'^[<(]\s*(\S+)(?:\s+(\S+))?')

    for i, line in enumerate(code_lines):
        if not line or line[0] not in '<(':
            continue
        m = _form_re.match(line)
        if m:
            form_type = m.group(1)
            form_name = m.group(2)
            if form_name:
                name = f"{form_type} {form_name}"
            else:
                name = form_type
            result.append((i + 1, name))

    return result


def _extract_boundaries(
    code_lines: list[str], language: str
) -> list[tuple[int, str]]:
    """Dispatch boundary extraction based on language.

    Returns a list of (line_number, name) tuples for each structural unit.
    """
    if _is_asm_like(language):
        return _extract_boundaries_asm(code_lines)
    elif _is_c_like(language):
        return _extract_boundaries_c(code_lines)
    elif _is_lisp_like(language):
        return _extract_boundaries_lisp(code_lines)
    else:
        return []


_BOUNDARY_ENTRY_RE = re.compile(r'[Ll]ine\s+(\d+)\s+(\S.*)', re.IGNORECASE)

def _lookup_boundary(name: str, boundaries: list[tuple[int, str]]) -> int | None:
    """Look up a boundary by name, returning its 1-based line number.

    Accepts two formats:
      - Plain name:               "$Z"  or  "RADIX"
      - Full boundary entry:      "Line   204  RADIX"   (as the LLM sometimes echoes)

    In the full-entry form we first try the embedded line number directly (fast
    path), then fall back to a name search in case the LLM slightly garbled the
    number.
    """
    raw = (name or "").strip()
    if not raw:
        return None

    # Try to parse a full boundary-entry string like "Line   204  RADIX"
    m = _BOUNDARY_ENTRY_RE.match(raw)
    if m:
        lineno_hint = int(m.group(1))
        bname_hint  = m.group(2).strip().lower()
        # Fast path: line number AND name both match (most reliable)
        for lineno, bname in boundaries:
            if lineno == lineno_hint and bname.lower() == bname_hint:
                return lineno
        # Fallback 1: match by name alone, choosing the entry CLOSEST to
        # lineno_hint.  Many assembly directives like SUBTTL appear multiple
        # times; picking the nearest avoids returning a far-away occurrence
        # that would fail the START_DRIFT guard.
        name_matches = [(lineno, bname) for lineno, bname in boundaries
                        if bname.lower() == bname_hint]
        if name_matches:
            best = min(name_matches, key=lambda x: abs(x[0] - lineno_hint))
            return best[0]
        # Fallback 2: match by line number alone — the LLM gave an unrecognised
        # name but the line number is correct
        for lineno, bname in boundaries:
            if lineno == lineno_hint:
                return lineno

    # Plain name lookup (case-insensitive)
    name_lower = raw.lower()
    for lineno, bname in boundaries:
        if bname.lower() == name_lower:
            return lineno
    return None


# ---------------------------------------------------------------------------
# Anchor search  (replaces line-number counting)
# ---------------------------------------------------------------------------

def _find_anchor_line(
    anchor: str,
    code_lines: list[str],
    approx: int,
    radius: int = ANCHOR_RADIUS,
) -> int | None:
    """Return the 1-based line number of anchor text near approx.

    Tries three strategies in decreasing strictness:
      1. Exact stripped match
      2. Line strip starts with the first 40 characters of anchor
      3. Anchor is a substring of the line

    Searches within [approx - radius, approx + radius].  Returns None if
    no match is found.
    """
    if not anchor:
        return None
    anchor = anchor.strip()
    lo = max(0, approx - 1 - radius)
    hi = min(len(code_lines), approx - 1 + radius)

    # Strategy 1: exact stripped match
    for i in range(lo, hi):
        if code_lines[i].strip() == anchor:
            return i + 1

    # Strategy 2: stripped line starts with anchor prefix (robust to minor
    # trailing differences like parameter lists cut off)
    prefix = anchor[:40]
    if prefix:
        for i in range(lo, hi):
            if code_lines[i].strip().startswith(prefix):
                return i + 1

    # Strategy 3: anchor is a substring of the line
    for i in range(lo, hi):
        if anchor in code_lines[i]:
            return i + 1

    return None


def _find_anchor_forward(
    anchor: str,
    code_lines: list[str],
    from_line: int,
    max_lines: int = 2000,
) -> int | None:
    """Search forward from from_line for anchor text.

    Unlike _find_anchor_line (which searches ±radius around an approximate
    position that may be wrong), this starts at a known-good position and
    scans forward.  Used for end_anchor lookup so a badly-off approx_end
    cannot cause the search to miss the true end.

    Tries the same three strategies as _find_anchor_line (exact, prefix,
    substring) but in a single forward pass.
    """
    if not anchor:
        return None
    anchor = anchor.strip()
    prefix = anchor[:40]
    limit  = min(len(code_lines), from_line - 1 + max_lines)

    for i in range(from_line - 1, limit):
        stripped = code_lines[i].strip()
        if stripped == anchor:
            return i + 1
        if prefix and stripped.startswith(prefix):
            return i + 1
        if len(anchor) >= 15 and anchor in code_lines[i]:
            return i + 1

    return None


# Short / high-frequency tokens that appear so often they are useless as
# search targets.  For these we rely on structural scanning instead.
_GENERIC_CLOSERS = frozenset({
    "}", "};", "})", ">", "))>", ">)", ")", "]",
    "rts", "rti", "rte", "ret", "retf", "retw", "retd", "iret", "iretd",
    "end", "endp", "ends", "endm",
})


def _anchor_is_generic(anchor: str) -> bool:
    """Return True when anchor is too short or too common to search for reliably."""
    s = (anchor or "").strip().lower()
    return not s or len(s) <= 4 or s in _GENERIC_CLOSERS


# ---------------------------------------------------------------------------
# Deterministic end detection
# ---------------------------------------------------------------------------

def _find_end_c(
    code_lines: list[str],
    line_start: int,
    search_limit: int = 500,
) -> int | None:
    """Scan forward from line_start and return the 1-based line number of
    the closing } that brings the brace depth back to 0.

    Handles strings and both // and /* */ comments so inner braces are ignored.
    """
    depth = 0
    opened = False
    in_block_comment = False

    for i in range(line_start - 1, min(len(code_lines), line_start - 1 + search_limit)):
        line = code_lines[i]
        j = 0
        while j < len(line):
            if in_block_comment:
                if line[j:j+2] == "*/":
                    in_block_comment = False
                    j += 2
                else:
                    j += 1
            elif line[j:j+2] == "//":
                break
            elif line[j:j+2] == "/*":
                in_block_comment = True
                j += 2
            elif line[j] in ('"', "'"):
                q = line[j]
                j += 1
                while j < len(line):
                    if line[j] == "\\":
                        j += 2
                    elif line[j] == q:
                        j += 1
                        break
                    else:
                        j += 1
            elif line[j] == "{":
                depth += 1
                opened = True
                j += 1
            elif line[j] == "}":
                depth -= 1
                j += 1
            else:
                j += 1

        if opened and depth == 0:
            return i + 1  # 1-based

    return None


def _find_end_lisp(
    code_lines: list[str],
    line_start: int,
    search_limit: int = 500,
) -> int | None:
    """Scan forward from line_start and return the 1-based line where the
    top-level MDL/Lisp form closes (angle-bracket depth returns to 0).

    Handles string literals (double-quoted) and MDL line comments (;).
    """
    depth  = 0
    opened = False

    for i in range(line_start - 1, min(len(code_lines), line_start - 1 + search_limit)):
        line = code_lines[i]
        in_str = False
        j = 0
        while j < len(line):
            c = line[j]
            if in_str:
                if c == "\\" and j + 1 < len(line):
                    j += 2
                    continue
                if c == '"':
                    in_str = False
            elif c == '"':
                in_str = True
            elif c == ";":
                break          # rest of line is a comment
            elif c == "<":
                depth += 1
                opened = True
            elif c == ">":
                depth -= 1
            j += 1

        if opened and depth == 0:
            return i + 1   # 1-based

    return None


def _find_end_asm(
    code_lines: list[str],
    line_start: int,
    search_limit: int = 300,
) -> int | None:
    """Scan forward from line_start for the end of an assembly routine.

    Pass 1 — definitive: ENDP / ENDS / ENDM (MASM/TASM structured macros).
    Pass 2 — fallback:   RTS / RTI / RET / etc.  Returns the last such
      instruction before the next top-level (column-0, non-local) label,
      which signals the start of the next routine.
    """
    limit = min(len(code_lines), line_start - 1 + search_limit)

    # Pass 1: structured-macro end directive — always wins
    for i in range(line_start - 1, limit):
        if _ASM_CLOSING_RE.search(code_lines[i]):
            return i + 1

    # Pass 2: return instruction scan.
    # Keep track of the last RTS/RET/etc. seen.  Stop collecting when a new
    # top-level label appears (start of the next routine) — but only after we
    # have already found at least one return instruction, so we don't bail out
    # at the label that opens the current routine.
    #
    # IMPORTANT: check _ASM_RETURN_RE BEFORE the break condition.
    # Labeled return stubs such as "FFRTS:  RTS" are simultaneously a
    # top-level label (triggering the break) AND a return instruction.
    # We must record them first, then stop — not stop before recording.
    last_return: int | None = None
    for i in range(line_start - 1, limit):
        line = code_lines[i]
        is_return  = bool(_ASM_RETURN_RE.match(line))
        is_new_label = (
            i > line_start - 1          # skip the routine's own opening label
            and _ASM_TOPLABEL_RE.match(line)
        )

        if is_return:
            last_return = i + 1         # record BEFORE deciding to break

        # Stop at the next routine's top-level label, but only once we've
        # seen at least one return (avoids stopping at the current routine's
        # own opening label).  If this line is both a label and a return stub
        # we already recorded it above, so breaking here is correct.
        if is_new_label and last_return is not None:
            break

    return last_return


# ---------------------------------------------------------------------------
# Comment-block detection  (unchanged from original)
# ---------------------------------------------------------------------------

def _is_comment_line(line: str) -> bool:
    s = line.strip()
    return bool(s) and any(s.startswith(p) for p in _COMMENT_PREFIXES)


_NOT_RETURN_TYPE = frozenset("(){};=[]")


def _is_orphaned_return_type(line: str) -> bool:
    s = line.strip()
    if not s:
        return False
    if _is_comment_line(line):
        return False
    return not any(ch in s for ch in _NOT_RETURN_TYPE)


def _preceding_comment_block(
    code_lines: list[str], line_start: int, context_start: int
) -> list[tuple[int, str]]:
    """Return the comment block immediately above line_start (ascending order).

    Walks backward collecting consecutive comment lines; allows one blank line
    inside a block.  Handles /* ... */ blocks (including Quake-style banners
    with plain interior lines).  Returns [] if nothing found.
    """
    collected: list[tuple[int, str]] = []
    blank_streak = 0
    in_block_comment = False
    floor = max(0, context_start - 1)

    i = line_start - 2
    preamble: list[tuple[int, str]] = []
    while i >= floor and _is_orphaned_return_type(code_lines[i]):
        preamble.insert(0, (i + 1, code_lines[i]))
        i -= 1
    collected.extend(preamble)

    if line_start <= len(code_lines):
        _ls = code_lines[line_start - 1].strip()
        if _ls.endswith("*/") and "/*" not in _ls:
            in_block_comment = True
            collected.append((line_start, code_lines[line_start - 1]))

    while i >= floor:
        line = code_lines[i]
        stripped = line.strip()

        if in_block_comment:
            collected.insert(0, (i + 1, line))
            if "/*" in line:
                in_block_comment = False
                blank_streak = 0
        elif not stripped:
            blank_streak += 1
            if blank_streak > 1:
                break
            collected.insert(0, (i + 1, line))
        elif stripped.endswith("*/") and "/*" not in line:
            in_block_comment = True
            blank_streak = 0
            collected.insert(0, (i + 1, line))
        elif _is_comment_line(line):
            blank_streak = 0
            collected.insert(0, (i + 1, line))
        else:
            break
        i -= 1

    while collected and not collected[0][1].strip():
        collected.pop(0)
    while collected and not collected[-1][1].strip():
        collected.pop()

    return collected


# ---------------------------------------------------------------------------
# Message builder  — full file shown once, all enhancements in one request
# ---------------------------------------------------------------------------

def _build_messages(
    enhancements: list[dict],
    code_lines: list[str],
    file_info: str,
    language: str = "",
    boundaries: list[tuple[int, str]] | None = None,
) -> list[dict]:
    """Build the single API request for all enhancements in a file.

    The complete source is shown (all lines, numbered) so the model has full
    structural context rather than a narrow excerpt centred on the (possibly
    wrong) approximate range.  Each annotation lists its approximate range as
    a rough hint only.

    When boundaries is provided, a STRUCTURAL BOUNDARIES section is included
    between the file listing and the annotation blocks.
    """
    # Full file listing — plain line numbers, no >> markers (the approximate
    # ranges are wrong by definition, so marking them would anchor the model
    # on incorrect locations)
    listing_parts = []
    for i, line in enumerate(code_lines):
        listing_parts.append(f"{i + 1:4d}  {line}")
    listing = "\n".join(listing_parts)

    # Structural boundaries section
    boundaries_section = ""
    if boundaries:
        blines = [
            "STRUCTURAL BOUNDARIES (use names for start_boundary / next_boundary):"
        ]
        for lineno, name in boundaries:
            blines.append(f"  Line {lineno:5d}  {name}")
        boundaries_section = "\n".join(blines) + "\n\n"

    # Annotation blocks
    annotation_parts = []
    for idx, enh in enumerate(enhancements, 1):
        s       = int(enh.get("line_start", 1))
        e       = int(enh.get("line_end", s))
        content = (enh.get("content") or "").strip()
        annotation_parts.append(
            f"--- Annotation {idx}/{len(enhancements)} ---\n"
            f'id: {enh["id"]}\n'
            f'title: "{enh.get("title", "")}"\n'
            f"Annotation text:\n{content}\n\n"
            f"Approximate location hint (may be wrong): lines {s}–{e}\n"
        )

    user_content = (
        f"File: {file_info}\n\n"
        f"Complete source ({len(code_lines)} lines):\n"
        f"{listing}\n\n"
        + boundaries_section
        + "\n".join(annotation_parts)
    )

    return [
        {"role": "system", "content": _SYSTEM},
        {"role": "user",   "content": user_content},
    ]


def _build_verify_messages(
    verifications: list[dict],
    code_lines: list[str],
    boundaries: list[tuple[int, str]],
    file_info: str,
) -> list[dict]:
    """Build the verification request message.

    verifications is a list of dicts: {id, title, content, new_s, new_e}

    For each verification item shows ±CONTEXT_RADIUS lines around the range.
    For large ranges (> MAX_INLINE_LINES) only the first and last CONTEXT_RADIUS
    lines of the range are shown with a "[... N lines omitted ...]" banner, to
    keep the prompt from ballooning on wrongly-expanded ranges.

    The boundary map is *not* included here — it was already given in the main
    prompt, and repeating 1000+ boundaries in every verify call wastes tokens.
    """
    CONTEXT_RADIUS  = 5
    MAX_INLINE_LINES = 60   # show full range only when it's ≤ this many lines
    total = len(code_lines)

    # Build each verification block
    blocks: list[str] = []
    for v in verifications:
        eid     = v["id"]
        title   = v.get("title", "")
        content = (v.get("content") or "")[:400].strip()
        new_s   = v["new_s"]
        new_e   = v["new_e"]

        range_len = new_e - new_s + 1

        if range_len <= MAX_INLINE_LINES:
            # Show the full range with surrounding context
            ctx_start = max(1, new_s - CONTEXT_RADIUS)
            ctx_end   = min(total, new_e + CONTEXT_RADIUS)
            lines_block: list[str] = []
            for i in range(ctx_start - 1, ctx_end):
                lineno = i + 1
                raw    = code_lines[i]
                if new_s <= lineno <= new_e:
                    lines_block.append(f">>> {lineno:4d}  {raw}")
                else:
                    lines_block.append(f"    {lineno:4d}  {raw}")
            code_section = "\n".join(lines_block)
        else:
            # Range is too large to show in full — show head + tail only
            head_start = max(1, new_s - CONTEXT_RADIUS)
            head_end   = min(total, new_s + CONTEXT_RADIUS)
            tail_start = max(1, new_e - CONTEXT_RADIUS)
            tail_end   = min(total, new_e + CONTEXT_RADIUS)

            head_lines: list[str] = []
            for i in range(head_start - 1, head_end):
                lineno = i + 1
                raw    = code_lines[i]
                prefix = ">>>" if new_s <= lineno <= new_e else "   "
                head_lines.append(f"{prefix} {lineno:4d}  {raw}")

            tail_lines: list[str] = []
            for i in range(tail_start - 1, tail_end):
                lineno = i + 1
                raw    = code_lines[i]
                prefix = ">>>" if new_s <= lineno <= new_e else "   "
                tail_lines.append(f"{prefix} {lineno:4d}  {raw}")

            omitted = tail_start - head_end - 1
            code_section = (
                "\n".join(head_lines)
                + f"\n    [... {omitted} lines omitted — range too large ...]\n"
                + "\n".join(tail_lines)
            )

        blocks.append(
            f"--- Verification item ---\n"
            f"id: {eid}\n"
            f'title: "{title}"\n'
            f"Description (truncated to 400 chars):\n{content}\n\n"
            f"Extracted range: lines {new_s}–{new_e} ({range_len} lines)\n"
            + code_section
        )

    user_content = (
        f"File: {file_info}\n\n"
        + "\n\n".join(blocks)
    )

    return [
        {"role": "system", "content": _VERIFY_SYSTEM},
        {"role": "user",   "content": user_content},
    ]


# ---------------------------------------------------------------------------
# Response parsing and application
# ---------------------------------------------------------------------------

def _sanitize_json_strings(s: str) -> str:
    """Replace bare control characters inside JSON string literals with spaces.

    LLMs occasionally emit literal newlines or other control characters inside
    string values, which is invalid JSON.  This walks the raw text character by
    character, tracking whether we are inside a quoted string, and substitutes
    any control character (0x00–0x1f) found there with a space.
    """
    out: list[str] = []
    in_str = False
    i = 0
    while i < len(s):
        c = s[i]
        if in_str:
            if c == "\\" and i + 1 < len(s):   # escape sequence — keep as-is
                out.append(c)
                out.append(s[i + 1])
                i += 2
                continue
            elif c == '"':
                in_str = False
                out.append(c)
            elif ord(c) < 0x20:                 # bare control char — replace
                out.append(" ")
            else:
                out.append(c)
        else:
            if c == '"':
                in_str = True
                out.append(c)
            else:
                out.append(c)
        i += 1
    return "".join(out)


def _parse_response(raw: str, valid_ids: set) -> list[dict]:
    raw = raw.strip()
    raw = re.sub(r"^```[a-z]*\n?", "", raw)
    raw = re.sub(r"\n?```$",       "", raw)
    raw = raw.strip()

    def _load(s: str) -> list[dict] | None:
        try:
            out = json.loads(s)
            return [c for c in out if c.get("id") in valid_ids]
        except json.JSONDecodeError:
            return None

    # Pass 1: direct parse (fast path — no modification)
    result = _load(raw)
    if result is not None:
        return result

    # Pass 2: sanitize bare control characters inside string values
    result = _load(_sanitize_json_strings(raw))
    if result is not None:
        return result

    # Pass 3: extract individual { … } objects (handles missing commas between
    # objects, truncated arrays, or other structural defects)
    found: list[dict] = []
    seen: set = set()
    for m in re.finditer(r"\{[^{}]+\}", raw, re.DOTALL):
        blob = _sanitize_json_strings(m.group())
        try:
            obj = json.loads(blob)
        except json.JSONDecodeError:
            continue
        eid = obj.get("id")
        if eid in valid_ids and eid not in seen:
            found.append(obj)
            seen.add(eid)
    return found


def _parse_verify_response(raw: str, valid_ids: set) -> list[dict]:
    """Parse the verification response JSON with the same robustness as _parse_response.

    Expects items with an 'ok' field.  Filters to valid_ids.
    """
    raw = raw.strip()
    raw = re.sub(r"^```[a-z]*\n?", "", raw)
    raw = re.sub(r"\n?```$",       "", raw)
    raw = raw.strip()

    def _load(s: str) -> list[dict] | None:
        try:
            out = json.loads(s)
            if not isinstance(out, list):
                return None
            return [c for c in out if c.get("id") in valid_ids and "ok" in c]
        except json.JSONDecodeError:
            return None

    # Pass 1: direct parse
    result = _load(raw)
    if result is not None:
        return result

    # Pass 2: sanitize
    result = _load(_sanitize_json_strings(raw))
    if result is not None:
        return result

    # Pass 3: extract individual objects
    found: list[dict] = []
    seen: set = set()
    for m in re.finditer(r"\{[^{}]+\}", raw, re.DOTALL):
        blob = _sanitize_json_strings(m.group())
        try:
            obj = json.loads(blob)
        except json.JSONDecodeError:
            continue
        eid = obj.get("id")
        if eid in valid_ids and eid not in seen and "ok" in obj:
            found.append(obj)
            seen.add(eid)
    return found


# ---------------------------------------------------------------------------
# Range resolution
# ---------------------------------------------------------------------------

def _resolve_single(
    c: dict,
    code_lines: list[str],
    enhancements: list[dict],
    language: str,
    boundaries: list[tuple[int, str]],
) -> tuple[int, int, str] | None:
    """Resolve ONE correction dict to (new_s, new_e, eid).

    Priority for start:
      1. start_boundary → look up name in boundaries list → exact line →
         walk back for preceding comment block
      2. start_anchor → existing _find_anchor_line logic → walk back for
         preceding comment block

    Priority for end:
      1. next_boundary → look up name in boundaries list → line number →
         back up past blanks
      2. next_anchor → existing _find_anchor_forward logic → back up past blanks
      3. Specific end_anchor (non-generic) → _find_anchor_forward
      4. Structural scan (_find_end_c / _find_end_lisp / _find_end_asm)
      5. Generic end_anchor → _find_anchor_forward as last resort
      6. Fallback to approx_end
    """
    eid              = c.get("id", "")
    start_boundary   = (c.get("start_boundary") or "").strip()
    next_boundary    = (c.get("next_boundary")  or "").strip()
    start_anchor     = (c.get("start_anchor")   or "").strip()
    end_anchor       = (c.get("end_anchor")     or "").strip()
    next_anchor      = (c.get("next_anchor")    or "").strip()

    if not eid:
        return None

    enh_by_id = {e["id"]: e for e in enhancements}
    enh = enh_by_id.get(eid)
    if not enh:
        return None

    total        = len(code_lines)
    approx_start = int(enh.get("line_start", 1))
    approx_end   = int(enh.get("line_end", approx_start))

    # ── Resolve start ─────────────────────────────────────────────────────────
    found_start: int | None = None

    # Priority 1: start_boundary
    # Guard: reject the resolved line if it is more than START_DRIFT lines away
    # from approx_start.  LLMs occasionally pick a file-header boundary
    # (e.g. "TITLE" at line 6) for sections that start thousands of lines later.
    START_DRIFT = 300
    if start_boundary:
        candidate_start = _lookup_boundary(start_boundary, boundaries)
        if candidate_start is not None and abs(candidate_start - approx_start) <= START_DRIFT:
            found_start = candidate_start
        # else: too far from expected position — fall through to anchor

    # Priority 2: start_anchor
    if found_start is None and start_anchor:
        found_start = _find_anchor_line(start_anchor, code_lines, approx_start)

    if found_start is None:
        return None

    # Walk backward to include any preceding doc-comment
    comment_block = _preceding_comment_block(
        code_lines, found_start, max(1, found_start - 60)
    )
    new_s = comment_block[0][0] if comment_block else found_start

    # ── Resolve end ───────────────────────────────────────────────────────────
    new_e: int | None = None

    # Priority 1: next_boundary
    if next_boundary:
        nb_line = _lookup_boundary(next_boundary, boundaries)
        if nb_line is not None:
            candidate = nb_line - 1
            while candidate > found_start and (
                not code_lines[candidate - 1].strip()
                or _is_comment_line(code_lines[candidate - 1])
            ):
                candidate -= 1
            if candidate >= found_start:
                new_e = candidate

    # Priority 2: next_anchor
    if new_e is None and next_anchor:
        next_start = _find_anchor_forward(next_anchor, code_lines, found_start + 1)
        if next_start is not None:
            candidate = next_start - 1
            while candidate > found_start and (
                not code_lines[candidate - 1].strip()
                or _is_comment_line(code_lines[candidate - 1])
            ):
                candidate -= 1
            if candidate >= found_start:
                new_e = candidate

    # Priority 3: Specific end_anchor (non-generic)
    if new_e is None and end_anchor and not _anchor_is_generic(end_anchor):
        new_e = _find_anchor_forward(end_anchor, code_lines, found_start)

    # Priority 4: Structural / language-aware scan
    if new_e is None:
        if _is_c_like(language):
            new_e = _find_end_c(code_lines, found_start)
        elif _is_lisp_like(language):
            new_e = _find_end_lisp(code_lines, found_start)
        elif _is_asm_like(language):
            new_e = _find_end_asm(code_lines, found_start)

    # Priority 5: Generic end_anchor forward search (last resort anchor)
    if new_e is None and end_anchor:
        new_e = _find_anchor_forward(end_anchor, code_lines, found_start)

    # Priority 6: Fallback to approx_end
    if new_e is None:
        new_e = approx_end

    # ASM extension: if the boundary/anchor resolved a non-None end but the
    # structural scan would extend it by a small amount (≤ RTS_EXTEND_LINES),
    # prefer the structural result.  This captures labeled return stubs like
    # "CHRRTS: RTS" that appear 1–4 lines past the LLM-resolved next_boundary.
    RTS_EXTEND_LINES = 15
    if _is_asm_like(language) and new_e is not None:
        struct_end = _find_end_asm(code_lines, found_start)
        if (
            struct_end is not None
            and struct_end > new_e
            and struct_end - new_e <= RTS_EXTEND_LINES
        ):
            new_e = struct_end

    # Sanity: if the anchor/boundary resolution produced a suspiciously short
    # range (< 5 lines), the LLM gave a bad next_boundary/next_anchor that
    # happens to be right after the start.  In that case, try the structural
    # scan as a better fallback.  This prevents "1671-1671" single-line ranges.
    MIN_RANGE = 5
    if new_e - new_s + 1 < MIN_RANGE:
        structural_end: int | None = None
        if _is_c_like(language):
            structural_end = _find_end_c(code_lines, found_start)
        elif _is_lisp_like(language):
            structural_end = _find_end_lisp(code_lines, found_start)
        elif _is_asm_like(language):
            structural_end = _find_end_asm(code_lines, found_start)
        if structural_end is not None and structural_end > new_e:
            new_e = structural_end
        elif new_e - new_s + 1 < MIN_RANGE:
            new_e = approx_end   # last resort: keep original approx

    # Clamp to valid range before any index access.
    new_s = max(1, min(new_s, total))
    new_e = max(new_s, min(new_e, total))

    # Trim trailing blank lines and inter-section comment banners/headers.
    # Pure comment lines at the end of a range belong to the next section, not
    # this one.  Lines with actual code content (even with trailing comments)
    # are not pure comment lines and are left alone.
    while new_e > new_s and (
        not code_lines[new_e - 1].strip()
        or _is_comment_line(code_lines[new_e - 1])
    ):
        new_e -= 1

    # Basic sanity check
    if not (1 <= new_s <= new_e <= total):
        return None
    if not code_lines[new_s - 1].strip() or not code_lines[new_e - 1].strip():
        return None

    return (new_s, new_e, eid)


def _resolve_corrections(
    corrections: list[dict],
    code_lines: list[str],
    enhancements: list[dict],
    language: str,
    boundaries: list[tuple[int, str]],
) -> list[tuple[int, int, str]]:
    """Resolve all corrections to (new_s, new_e, eid) tuples.

    Calls _resolve_single for each correction, deduplicates by eid,
    and returns the list sorted by start line.
    """
    resolved: list[tuple[int, int, str]] = []
    seen_eids: set[str] = set()

    for c in corrections:
        eid = c.get("id", "")
        if not eid or eid in seen_eids:
            continue
        # Require either start_boundary or start_anchor
        if not (c.get("start_boundary") or "").strip() and \
           not (c.get("start_anchor") or "").strip():
            continue
        result = _resolve_single(c, code_lines, enhancements, language, boundaries)
        if result is not None:
            resolved.append(result)
            seen_eids.add(eid)

    resolved.sort(key=lambda x: x[0])
    return resolved


def _trim_overlaps(
    resolved: list[tuple[int, int, str]],
    code_lines: list[str],
) -> list[tuple[int, int, str]]:
    """Trim overlapping ranges so each ends before the next one begins.

    Strategy A: Trim the earlier range's end to just before the later range starts.
    Strategy B: Same start line — push the later range's start forward to just
                after the earlier range ends.

    Both strategies skip blank lines at the new boundary.
    """
    total = len(code_lines)
    resolved = list(resolved)  # make a mutable copy

    for i in range(len(resolved) - 1):
        ns,  ne,  eid            = resolved[i]
        next_ns, next_ne, next_eid = resolved[i + 1]

        if ne < next_ns:
            continue  # no overlap, nothing to do

        # Strategy A: trim the earlier range's end
        trimmed = next_ns - 1
        while trimmed > ns and not code_lines[trimmed - 1].strip():
            trimmed -= 1
        if trimmed >= ns:
            resolved[i] = (ns, trimmed, eid)
            continue

        # Strategy B: same start (trimmed < ns) — push the later range forward
        new_ns = ne + 1
        while new_ns <= next_ne and new_ns <= total and not code_lines[new_ns - 1].strip():
            new_ns += 1
        if new_ns <= next_ne:
            resolved[i + 1] = (new_ns, next_ne, next_eid)

    return resolved


def _write_ranges(
    path: Path,
    resolved: list[tuple[int, int, str]],
    enhancements: list[dict],
) -> int:
    """Rewrite line_start / line_end YAML fields in path for each resolved range.

    Returns the number of enhancements actually changed.
    """
    text    = path.read_text(encoding="utf-8")
    changed = 0

    for new_s, new_e, eid in resolved:
        before = text
        text = re.sub(
            rf'(  - id: "{re.escape(eid)}"\n    line_start: )\d+(\n    line_end: )\d+',
            rf'\g<1>{new_s}\g<2>{new_e}',
            text,
        )
        if text != before:
            changed += 1

    if changed:
        path.write_text(text, encoding="utf-8")

    return changed


# ---------------------------------------------------------------------------
# Verification pass
# ---------------------------------------------------------------------------

def _verify_ranges(
    resolved: list[tuple[int, int, str]],
    code_lines: list[str],
    enhancements: list[dict],
    boundaries: list[tuple[int, str]],
    language: str,
    client,
    temperature: float,
    file_info: str,
    console,
) -> list[tuple[int, int, str]]:
    """Run a verification pass over all resolved ranges.

    1. Builds verification messages for ALL resolved ranges.
    2. Calls client.complete() with _VERIFY_SYSTEM.
    3. Parses response using _parse_verify_response.
    4. For any {"ok": false, ...} items, calls _resolve_single with the
       corrected anchors/boundaries to get a new range, replacing the old one.
    5. Returns the (possibly corrected) resolved list.
    """
    if not resolved:
        return resolved

    enh_by_id = {e["id"]: e for e in enhancements}

    # Build verification dicts for all resolved items
    verifications: list[dict] = []
    for new_s, new_e, eid in resolved:
        enh = enh_by_id.get(eid, {})
        verifications.append({
            "id":      eid,
            "title":   enh.get("title", ""),
            "content": enh.get("content", ""),
            "new_s":   new_s,
            "new_e":   new_e,
        })

    messages = _build_verify_messages(verifications, code_lines, boundaries, file_info)

    try:
        raw = client.complete(messages, temperature=temperature, max_tokens=4096)
    except Exception as exc:
        if console:
            console.print(f"  [yellow]verify pass failed: {exc}[/yellow]")
        return resolved

    valid_ids = {eid for _, _, eid in resolved}
    verify_results = _parse_verify_response(raw, valid_ids)

    if not verify_results:
        return resolved

    # Build a map from eid to current resolved entry for fast lookup/update
    resolved_map: dict[str, tuple[int, int, str]] = {eid: (s, e, eid) for s, e, eid in resolved}

    corrections_count = 0
    for vr in verify_results:
        eid = vr.get("id", "")
        if vr.get("ok", True):
            continue  # correct, no change needed

        # Build a correction dict from the verify result fields
        correction: dict = {"id": eid}
        for field in ("start_boundary", "next_boundary", "start_anchor",
                      "end_anchor", "next_anchor"):
            val = vr.get(field)
            if val:
                correction[field] = val

        # If no actionable fields, skip
        has_start = correction.get("start_boundary") or correction.get("start_anchor")
        if not has_start:
            # Try to re-resolve with just end corrections by merging with original
            # correction that must have had a start.  We can't fix end without start.
            continue

        new_result = _resolve_single(
            correction, code_lines, enhancements, language, boundaries
        )
        if new_result is None:
            continue

        new_s, new_e, _ = new_result
        old_s, old_e, _ = resolved_map.get(eid, (new_s, new_e, eid))

        # Sanity guards: reject corrections that produce nonsensical ranges.
        #   1. Range is tiny (< 3 lines) — very rarely correct, usually a
        #      sign the LLM latched onto a wrong anchor.
        #   2. Start drifted more than START_DRIFT lines from the original —
        #      same heuristic applied in the primary resolution pass.
        #   3. The new range is more than 4× smaller than the original — the
        #      verify LLM is almost certainly trimming too aggressively.
        START_DRIFT = 300
        if new_e - new_s + 1 < 3:
            continue
        if abs(new_s - old_s) > START_DRIFT:
            continue
        orig_len = max(old_e - old_s + 1, 1)
        new_len  = new_e - new_s + 1
        if new_len < orig_len // 4:
            continue

        resolved_map[eid] = new_result
        corrections_count += 1
        if console:
            console.print(
                f"  [cyan]verify corrected {eid}: "
                f"{new_result[0]}–{new_result[1]}[/cyan]"
            )

    if corrections_count and console:
        console.print(f"  [green]verification corrected {corrections_count} range(s)[/green]")

    # Rebuild sorted resolved list from map
    updated = list(resolved_map.values())
    updated.sort(key=lambda x: x[0])
    return updated


# ---------------------------------------------------------------------------
# Legacy compatibility shim
# ---------------------------------------------------------------------------

def _apply_corrections(
    path: Path,
    corrections: list[dict],
    code_lines: list[str],
    enhancements: list[dict],
    language: str,
) -> int:
    """Resolve anchor strings to line numbers and rewrite the YAML frontmatter.

    This is the legacy single-function implementation kept for compatibility.
    The new fix_ranges() uses the refactored _resolve_corrections / _trim_overlaps
    / _write_ranges pipeline with boundary support.

    Phase 1 — resolve: for each correction find start/end line numbers.
    Phase 2 — sort:    order resolved ranges by start line.
    Phase 3 — trim:    where adjacent ranges overlap, trim the earlier one so
                       it ends just before the later one begins (no repeated
                       code in the viewer).
    Phase 4 — write:   rewrite only the line_start / line_end YAML fields.

    Returns the number of enhancements actually changed.
    """
    resolved = _resolve_corrections(corrections, code_lines, enhancements, language, [])
    if not resolved:
        return 0
    resolved = _trim_overlaps(resolved, code_lines)
    return _write_ranges(path, resolved, enhancements)


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def fix_ranges(path, client, gen_cfg: dict = None, console=None) -> int:
    """Run the range-alignment pass on a single .md file.

    Phases:
      1. Pre-parse the source into a structural boundary map (labels/functions/forms).
      2. Send the complete source + boundary map + all enhancements to the model.
         The model returns named boundaries or text anchors (not line numbers).
      3. Resolve corrections to exact line numbers using boundary lookup first,
         then anchor search and deterministic end detection as fallbacks.
      4. Run a verification pass: the model reviews each resolved range in context
         and may request corrections.
      5. Trim overlapping ranges.
      6. Rewrite only the line_start / line_end YAML fields.

    Returns the number of enhancements whose ranges were updated.
    """
    path = Path(path)
    meta, code_lines = _read_md(path)
    enhancements = meta.get("enhancements") or []
    if not enhancements:
        return 0

    language = meta.get("language", "")
    file_info = (
        f"{meta.get('title', path.stem)} "
        f"({language}, {meta.get('year', '')})"
    )
    temperature = (gen_cfg or {}).get("temperature", 0)

    # Phase 1: pre-parse structural boundaries
    boundaries = _extract_boundaries(code_lines, language)
    if console and boundaries:
        console.print(f"  [dim]found {len(boundaries)} structural boundaries[/dim]")

    valid_ids = {e["id"] for e in enhancements}
    messages  = _build_messages(
        enhancements, code_lines, file_info,
        language=language, boundaries=boundaries,
    )

    try:
        raw         = client.complete(messages, temperature=temperature, max_tokens=8192)
        corrections = _parse_response(raw, valid_ids)
    except Exception as exc:
        if console:
            console.print(f"  [yellow]range-fix failed: {exc}[/yellow]")
        return 0

    if console:
        console.print(f"  [dim]LLM returned {len(corrections)} correction(s)[/dim]")

    # Phase 3: resolve corrections to line numbers
    resolved = _resolve_corrections(
        corrections, code_lines, enhancements, language, boundaries
    )

    if console:
        console.print(f"  [dim]resolved {len(resolved)} range(s)[/dim]")

    # Phase 4: verification pass
    if resolved:
        resolved = _verify_ranges(
            resolved, code_lines, enhancements, boundaries,
            language, client, temperature, file_info, console,
        )

    # Phase 5: trim overlaps
    resolved = _trim_overlaps(resolved, code_lines)

    # Phase 6: write to file
    return _write_ranges(path, resolved, enhancements)
