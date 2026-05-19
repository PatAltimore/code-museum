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

# Lines of source shown above and below the current annotated range
CONTEXT_LINES = 20

# Enhancements sent per API call
BATCH_SIZE = 6

_SYSTEM = """\
You are correcting line-range metadata for source code annotations.

For each annotation in the batch you will see:
  - id, title, and a brief description of what the section does
  - A numbered source excerpt; lines inside the current annotated range are
    prefixed with >> and context lines are prefixed with two spaces

Your task: return the exact line_start and line_end for the code section
each annotation describes.

Rules:
- line_start: the first non-blank line of the section (label, function
  signature, or opening instruction/declaration)
- line_end: the last non-blank line of the section (final instruction,
  closing brace, RTS/RET, or last data value)
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
        parts.append(
            f"--- Annotation {idx}/{len(batch)} ---\n"
            f'id: {enh["id"]}\n'
            f'title: "{enh.get("title", "")}"\n'
            f"Describes: {snippet}...\n\n"
            f"Current range: lines {s}–{e}\n"
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
