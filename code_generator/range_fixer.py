"""range_fixer.py — post-processing pass to correct enhancement line ranges.

For each enhancement in a generated .md file, sends a small code-context
window to the model and asks it to return corrected line_start / line_end
values.  Only the two integer fields are ever rewritten; annotation text,
images, and all other metadata are left untouched.
"""

import json
import re
from pathlib import Path

import yaml

# Lines of source shown above and below the current annotated range.
CONTEXT_LINES = 30

# Enhancements sent per API call
BATCH_SIZE = 6

# Comment-start tokens recognised across common languages.
# Order matters: longer prefixes first so startswith matches correctly.
_COMMENT_PREFIXES = (
    "//", "/*", "(*", "--", ";;",
    ";", "*", "#", "!", "'",
)

_SYSTEM = """\
You are correcting line-range metadata for source code annotations.

For each annotation in the batch you will see:
  - id, title, and a brief description of what the section does
  - If comment lines were found immediately above the current range, they are
    shown in a "Candidate leading comments" block with their exact line numbers
  - A numbered source excerpt; lines inside the current annotated range are
    prefixed with >> and context lines are prefixed with two spaces

Your task: return the exact line_start and line_end for the code section
each annotation describes.

Rules for line_start:
- If a "Candidate leading comments" block is shown, READ its content carefully.
  If those comments serve as documentation for THIS section — describing what
  the subroutine does, explaining its algorithm, or naming its purpose — set
  line_start to the first line of that block.
- Do NOT include the comment block if it is a file header, a copyright notice,
  a visual separator (rows of asterisks, dashes, or equal signs with no prose),
  or a comment that clearly belongs to or closes the previous section.
- When in doubt, include the comment block — err on the side of inclusion.
- If no candidate comment block is shown, or the block does not belong here,
  set line_start to the first non-blank code line (label, function signature,
  or opening declaration).

Rules for line_end:
- The last non-blank line of the section (final instruction, closing brace,
  RTS/RET, or last data value).

General rules:
- Do not include blank lines at either boundary
- Do not place either boundary outside the lines shown in the excerpt
- If the current range already looks correct, return the same values

Output valid JSON only — no markdown fences, no explanation:
[{"id": "...", "line_start": N, "line_end": N}, ...]
"""


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------

def _read_md(path: Path):
    """Parse a generated .md file into (meta dict, code_lines list)."""
    text = path.read_text(encoding="utf-8")
    start = text.index("---")
    end   = text.index("---", start + 3)
    meta  = yaml.safe_load(text[start + 3 : end])
    body  = text[end + 3:]
    # The formatter writes exactly one blank line after the closing "---",
    # producing "\n\n<code>".  Mirror app.js splice(0, 2): skip the first
    # two elements after splitting on "\n".
    code_lines = body.split("\n")[2:]
    if code_lines and code_lines[-1] == "":
        code_lines.pop()
    return meta, code_lines


def _is_comment_line(line: str) -> bool:
    """Return True if the line looks like a comment in any common language."""
    s = line.strip()
    return bool(s) and any(s.startswith(p) for p in _COMMENT_PREFIXES)


def _preceding_comment_block(
    code_lines: list[str], line_start: int, context_start: int
) -> list[tuple[int, str]]:
    """Return the comment block immediately above line_start.

    Walks backward from line_start-1 to context_start, collecting consecutive
    comment lines.  A single blank line is allowed within a block (common in
    multi-paragraph doc comments); two or more consecutive blanks, or any
    non-comment non-blank line, ends the walk.

    Returns a list of (1-indexed lineno, raw_line) in ascending line order,
    with leading and trailing blank entries stripped.  Empty list if nothing
    found.
    """
    collected: list[tuple[int, str]] = []
    blank_streak = 0
    i = line_start - 2          # 0-indexed: line just before line_start
    floor = max(0, context_start - 1)   # 0-indexed lower bound

    while i >= floor:
        line = code_lines[i]
        if not line.strip():
            blank_streak += 1
            if blank_streak > 1:
                break
            collected.insert(0, (i + 1, line))
        elif _is_comment_line(line):
            blank_streak = 0
            collected.insert(0, (i + 1, line))
        else:
            break   # hit non-comment code — stop
        i -= 1

    # Strip leading/trailing blank entries
    while collected and not collected[0][1].strip():
        collected.pop(0)
    while collected and not collected[-1][1].strip():
        collected.pop()

    return collected


def _excerpt(code_lines: list[str], line_start: int, line_end: int) -> str:
    """Numbered excerpt around the range; annotated lines prefixed with >>."""
    total     = len(code_lines)
    win_start = max(0, line_start - 1 - CONTEXT_LINES)
    win_end   = min(total, line_end + CONTEXT_LINES)
    out = []
    for i in range(win_start, win_end):
        lineno = i + 1
        marker = ">>" if line_start <= lineno <= line_end else "  "
        out.append(f"{marker}{lineno:4d}  {code_lines[i]}")
    return "\n".join(out)


def _build_batch_messages(batch: list[dict], code_lines: list[str],
                          file_info: str) -> list[dict]:
    parts = [f"File: {file_info}\n"]
    for idx, enh in enumerate(batch, 1):
        s = int(enh.get("line_start", 1))
        e = int(enh.get("line_end", s))
        snippet = (enh.get("content") or "")[:150].replace("\n", " ")

        # Compute the context window start so _preceding_comment_block stays
        # within the lines we actually show in the excerpt.
        context_start = max(1, s - CONTEXT_LINES)

        # Pre-extract any comment block immediately above the current range.
        comment_block = _preceding_comment_block(code_lines, s, context_start)
        if comment_block:
            cb_text = "\n".join(
                f"  {lineno:4d}  {text}" for lineno, text in comment_block
            )
            candidate_section = (
                f"Candidate leading comments "
                f"(lines {comment_block[0][0]}–{comment_block[-1][0]}):\n"
                f"{cb_text}\n"
                f"→ If these comments document this section, "
                f"set line_start = {comment_block[0][0]}.\n\n"
            )
        else:
            candidate_section = ""

        parts.append(
            f"--- Annotation {idx}/{len(batch)} ---\n"
            f'id: {enh["id"]}\n'
            f'title: "{enh.get("title", "")}"\n'
            f"Describes: {snippet}...\n\n"
            f"Current range: lines {s}–{e}\n"
            f"{candidate_section}"
            f"Source:\n{_excerpt(code_lines, s, e)}\n"
        )
    return [
        {"role": "system", "content": _SYSTEM},
        {"role": "user",   "content": "\n".join(parts)},
    ]


def _parse_response(raw: str, valid_ids: set) -> list[dict]:
    """Parse model response into validated correction dicts."""
    raw = raw.strip()
    raw = re.sub(r"^```[a-z]*\n?", "", raw)
    raw = re.sub(r"\n?```$",       "", raw)
    corrections = json.loads(raw.strip())
    return [c for c in corrections if c.get("id") in valid_ids]


def _apply_corrections(path: Path, corrections: list[dict],
                       code_lines: list[str]) -> int:
    """Rewrite line_start / line_end in the YAML frontmatter by id.

    Uses targeted regex replacement so nothing else in the file is touched.
    Returns the number of enhancements actually changed.
    """
    if not corrections:
        return 0

    total = len(code_lines)
    text  = path.read_text(encoding="utf-8")
    changed = 0

    for c in corrections:
        eid   = c.get("id", "")
        new_s = int(c.get("line_start", 0))
        new_e = int(c.get("line_end",   0))

        # Basic sanity checks — reject anything suspicious
        if not eid:
            continue
        if not (1 <= new_s <= new_e <= total):
            continue
        if not code_lines[new_s - 1].strip():   # line_start must not be blank
            continue
        if not code_lines[new_e - 1].strip():   # line_end must not be blank
            continue

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

    Sends each enhancement (in batches of BATCH_SIZE) to the model with a
    context window of source code around its current range, asks for
    corrected boundaries, validates the response, and rewrites only the
    line_start / line_end fields in the YAML frontmatter.

    Returns the number of enhancements whose ranges were updated.
    """
    path = Path(path)
    meta, code_lines = _read_md(path)
    enhancements = meta.get("enhancements") or []
    if not enhancements:
        return 0

    file_info = (
        f"{meta.get('title', path.stem)} "
        f"({meta.get('language', '')}, {meta.get('year', '')})"
    )
    temperature = (gen_cfg or {}).get("temperature", 0)

    all_corrections: list[dict] = []

    for batch_num, i in enumerate(range(0, len(enhancements), BATCH_SIZE), 1):
        batch     = enhancements[i : i + BATCH_SIZE]
        valid_ids = {e["id"] for e in batch}
        messages  = _build_batch_messages(batch, code_lines, file_info)

        try:
            raw = client.complete(messages, temperature=temperature, max_tokens=512)
            corrections = _parse_response(raw, valid_ids)
            all_corrections.extend(corrections)
        except Exception as exc:
            if console:
                console.print(
                    f"  [yellow]range-fix batch {batch_num} failed: {exc}[/yellow]"
                )

    return _apply_corrections(path, all_corrections, code_lines)
