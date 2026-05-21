"""range_fixer.py — post-processing pass to correct enhancement line ranges.

Strategy: instead of asking the model to count and output line numbers (which
LLMs do poorly), ask for **text anchors** — the exact stripped content of the
first and last line of each range.  Python then:

  1. Finds the anchor line by string search within a window (no counting).
  2. Walks backward deterministically to include any preceding doc-comment.
  3. Finds the end boundary deterministically:
       C/C++:    forward brace-depth scan to the matching closing }
       Lisp/MDL: forward angle-bracket depth scan (same idea, < / > delimiters)
       Assembly: forward scan to ENDP/ENDS/ENDM, then RTS/RTI/RET fallback
       Other:    end_anchor search within a window
  4. Resolves ALL ranges first, sorts by start line, then trims overlaps so
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
# Must be indented (not at column 0) to avoid matching labels named e.g. RTSUB.
_ASM_RETURN_RE = re.compile(
    r'^\s+(RTS|RTI|RTD|RTR|RET[NFWD]?|IRET[D]?)\b', re.IGNORECASE
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

"start_anchor"  (required)
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

"end_anchor"  (required)
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
[{"id": "...", "start_anchor": "...", "end_anchor": "...", "next_anchor": "..."}, ...]
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
    last_return: int | None = None
    for i in range(line_start - 1, limit):
        line = code_lines[i]
        if (
            i > line_start - 1          # skip the routine's own opening label
            and last_return is not None  # only stop once we've seen a return
            and _ASM_TOPLABEL_RE.match(line)
        ):
            break
        if _ASM_RETURN_RE.match(line):
            last_return = i + 1

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
) -> list[dict]:
    """Build the single API request for all enhancements in a file.

    The complete source is shown (all lines, numbered) so the model has full
    structural context rather than a narrow excerpt centred on the (possibly
    wrong) approximate range.  Each annotation lists its approximate range as
    a rough hint only.
    """
    # Full file listing — plain line numbers, no >> markers (the approximate
    # ranges are wrong by definition, so marking them would anchor the model
    # on incorrect locations)
    listing_parts = []
    for i, line in enumerate(code_lines):
        listing_parts.append(f"{i + 1:4d}  {line}")
    listing = "\n".join(listing_parts)

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
        + "\n".join(annotation_parts)
    )

    return [
        {"role": "system", "content": _SYSTEM},
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


def _apply_corrections(
    path: Path,
    corrections: list[dict],
    code_lines: list[str],
    enhancements: list[dict],
    language: str,
) -> int:
    """Resolve anchor strings to line numbers and rewrite the YAML frontmatter.

    Phase 1 — resolve: for each correction find start/end line numbers.
    Phase 2 — sort:    order resolved ranges by start line.
    Phase 3 — trim:    where adjacent ranges overlap, trim the earlier one so
                       it ends just before the later one starts (no repeated
                       code in the viewer).
    Phase 4 — write:   rewrite only the line_start / line_end YAML fields.

    Returns the number of enhancements actually changed.
    """
    if not corrections:
        return 0

    total     = len(code_lines)
    enh_by_id = {e["id"]: e for e in enhancements}

    # ── Phase 1: resolve every correction to (new_s, new_e, eid) ─────────────
    resolved: list[tuple[int, int, str]] = []
    seen_eids: set[str] = set()

    for c in corrections:
        eid          = c.get("id", "")
        start_anchor = (c.get("start_anchor") or "").strip()
        end_anchor   = (c.get("end_anchor")   or "").strip()
        next_anchor  = (c.get("next_anchor")  or "").strip()

        if not eid or not start_anchor or eid in seen_eids:
            continue
        enh = enh_by_id.get(eid)
        if not enh:
            continue

        approx_start = int(enh.get("line_start", 1))
        approx_end   = int(enh.get("line_end", approx_start))

        # Step 1a: locate the first substantive line
        found_start = _find_anchor_line(start_anchor, code_lines, approx_start)
        if found_start is None:
            continue

        # Step 1b: walk backward to include any preceding doc-comment
        comment_block = _preceding_comment_block(
            code_lines, found_start, max(1, found_start - 60)
        )
        new_s = comment_block[0][0] if comment_block else found_start

        # Step 1c: find end boundary.
        #
        # Priority order:
        #   1. next_anchor  — the start of the FOLLOWING section.  The end is
        #      the last non-blank line before it.  Most reliable because the
        #      next label / form opener is typically unique and easy to locate.
        #   2. Specific end_anchor (long / unique text) — trust the model;
        #      searched forward from found_start, not around approx_end.
        #   3. Structural scan for generic closers (}, >, RTS …) — these
        #      tokens repeat too often to search for directly.
        #   4. Forward anchor search for generic tokens — last resort when
        #      structural scan comes up empty.
        new_e = None

        # ── 1. next_anchor: find the following section, back up one line ──────
        if next_anchor:
            next_start = _find_anchor_forward(next_anchor, code_lines, found_start + 1)
            if next_start is not None:
                candidate = next_start - 1
                # Skip any blank lines that sit between sections
                while candidate > found_start and not code_lines[candidate - 1].strip():
                    candidate -= 1
                if candidate >= found_start:
                    new_e = candidate

        # ── 2. Specific end_anchor ────────────────────────────────────────────
        if new_e is None and end_anchor and not _anchor_is_generic(end_anchor):
            new_e = _find_anchor_forward(end_anchor, code_lines, found_start)

        # ── 3. Structural / language-aware scan ───────────────────────────────
        if new_e is None:
            if _is_c_like(language):
                new_e = _find_end_c(code_lines, found_start)
            elif _is_lisp_like(language):
                new_e = _find_end_lisp(code_lines, found_start)
            elif _is_asm_like(language):
                new_e = _find_end_asm(code_lines, found_start)

        # ── 4. Generic end_anchor forward search (last resort) ────────────────
        if new_e is None and end_anchor:
            new_e = _find_anchor_forward(end_anchor, code_lines, found_start)

        if new_e is None:
            new_e = approx_end   # absolute last resort: keep original end

        # Trim trailing blank lines
        while new_e > new_s and not code_lines[new_e - 1].strip():
            new_e -= 1

        # Basic sanity check
        if not (1 <= new_s <= new_e <= total):
            continue
        if not code_lines[new_s - 1].strip() or not code_lines[new_e - 1].strip():
            continue

        resolved.append((new_s, new_e, eid))
        seen_eids.add(eid)

    if not resolved:
        return 0

    # ── Phase 2: sort by start line ───────────────────────────────────────────
    resolved.sort(key=lambda x: x[0])

    # ── Phase 3: trim overlaps ────────────────────────────────────────────────
    # Each range must end strictly before the next one starts.  When two
    # resolved ranges overlap we try two strategies in order:
    #
    #   A) Trim the earlier range's end to just before the later range starts.
    #      Works whenever the two ranges have different start lines.
    #
    #   B) Same start line (fix-ranges returned the same anchor for both, or
    #      the generator produced duplicate starts):  push the later range's
    #      start forward to just after the earlier range ends.
    #
    # Both strategies skip blank lines at the new boundary.
    for i in range(len(resolved) - 1):
        ns,  ne,  eid       = resolved[i]
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

    # ── Phase 4: apply to file text ───────────────────────────────────────────
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
# Public API
# ---------------------------------------------------------------------------

def fix_ranges(path, client, gen_cfg: dict = None, console=None) -> int:
    """Run the range-alignment pass on a single .md file.

    Sends the complete source file plus all enhancements to the model in a
    single request.  The model returns text anchors (not line numbers); Python
    resolves those to exact line numbers via string search and deterministic
    end detection, then rewrites only the line_start / line_end fields.

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

    valid_ids = {e["id"] for e in enhancements}
    messages  = _build_messages(enhancements, code_lines, file_info, language=language)

    try:
        raw         = client.complete(messages, temperature=temperature, max_tokens=8192)
        corrections = _parse_response(raw, valid_ids)
    except Exception as exc:
        if console:
            console.print(f"  [yellow]range-fix failed: {exc}[/yellow]")
        return 0

    return _apply_corrections(
        path, corrections, code_lines, enhancements, language
    )
