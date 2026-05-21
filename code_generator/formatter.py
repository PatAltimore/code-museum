import json
import re


_LANG_FENCE: list[tuple[str, str]] = [
    ("6502 assembly",    "asm"),
    ("8086 assembly",    "asm"),
    ("x86 assembly",     "asm"),
    ("assembly",         "asm"),
    ("c, x86 assembly",  "cpp"),
    ("c and x86",        "cpp"),
    ("c/c++",            "cpp"),
    ("c++",              "cpp"),
    ("mdl",              "lisp"),
    ("basic",            "basic"),
    ("pascal",           "pascal"),
    ("c",                "cpp"),
]


def _fence_id(language: str) -> str:
    lang_lower = (language or "").lower()
    for key, fence in _LANG_FENCE:
        if key in lang_lower:
            return fence
    return ""


def _q(s: str) -> str:
    """Quote a string value for YAML: double-quoted, single-line."""
    s = str(s).replace("\\", "\\\\").replace('"', '\\"')
    s = re.sub(r"\s+", " ", s).strip()
    return f'"{s}"'


def _parse_json(raw: str) -> dict:
    raw = raw.strip()
    raw = re.sub(r"^```[a-z]*\n?", "", raw)
    raw = re.sub(r"\n?```$", "", raw)
    raw = raw.strip()
    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        for closing in ("}", "]}", "]\n}"):
            idx = raw.rfind("}")
            if idx == -1:
                break
            candidate = raw[: idx + 1]
            try:
                return json.loads(candidate)
            except json.JSONDecodeError:
                raw = raw[:idx]
        raise


# Public alias for use in generator.py
parse_response_json = _parse_json


def _clean_enhancements(enhancements: list, code_lines: list[str]) -> list:
    """Clamp ranges to file bounds, trim blank boundary lines, resolve overlaps."""
    total = len(code_lines)
    cleaned = []
    cursor = 0  # 1-indexed exclusive end of the last accepted range

    for enh in sorted(enhancements, key=lambda e: int(e.get("line_start", 1))):
        s = max(1, int(enh.get("line_start", 1)))
        e = min(total, int(enh.get("line_end", s)))

        # Trim leading blank lines from the range start
        while s <= e and not code_lines[s - 1].strip():
            s += 1
        # Trim trailing blank lines from the range end
        while e >= s and not code_lines[e - 1].strip():
            e -= 1

        # Drop empty or out-of-bounds ranges
        if s > e or s > total:
            continue

        # Resolve overlap with the previous range by pushing start forward
        if s <= cursor:
            s = cursor + 1
            while s <= e and not code_lines[s - 1].strip():
                s += 1
            if s > e:
                continue

        enh = dict(enh)
        enh["line_start"] = s
        enh["line_end"] = e
        cleaned.append(enh)
        cursor = e

    return cleaned


def _format_from_data(
    program: dict,
    file_cfg: dict,
    code_lines: list[str],
    data: dict,
    is_excerpt: bool,
) -> str:
    """Write YAML front matter + fenced code block from an already-parsed data dict."""
    description = data.get("description", file_cfg.get("description", ""))
    summary = data.get("summary", [])
    enhancements = _clean_enhancements(data.get("enhancements", []), code_lines)

    # Build a mapping from original 1-based line numbers to filtered 1-based line
    # numbers, removing lines that would break GitHub's markdown renderer (e.g.
    # Emacs file-mode comments like "// Emacs style mode select   -*- C++ -*-"
    # which contain *-* patterns that GitHub incorrectly treats as emphasis).
    _BROKEN_LINE_PATTERNS = ("Emacs style mode select",)
    _removed_before = []  # removed[i] = count of removed lines with orig index <= i
    _removed_count = 0
    for orig_line in code_lines:
        if any(p in orig_line for p in _BROKEN_LINE_PATTERNS):
            _removed_count += 1
        _removed_before.append(_removed_count)

    def _adjust_line(n: int) -> int:
        """Adjust a 1-based line number for removed lines."""
        if n <= 0:
            return n
        idx = min(n - 1, len(_removed_before) - 1)
        return n - _removed_before[idx]

    if _removed_count:
        enhancements = [
            dict(enh,
                 line_start=_adjust_line(int(enh.get("line_start", 1))),
                 line_end=_adjust_line(int(enh.get("line_end", 1))))
            for enh in enhancements
        ]

    lines = ["---"]
    lines.append(f"title: {_q(file_cfg['title'])}")
    lines.append(f"program: {_q(program['title'])}")
    lines.append(f"program_slug: {_q(program['slug'])}")
    lines.append(f"file_path: {_q(file_cfg['path'])}")
    lines.append(f"language: {_q(program['language'])}")
    lines.append(f"github_url: {_q(program['github_url'] + '/blob/' + program.get('github_branch', 'main') + '/' + file_cfg['path'])}")
    lines.append(f"year: {program['year']}")
    lines.append(f"author: {_q(program['author'])}")
    lines.append(f"slug: {_q(file_cfg['slug'])}")
    lines.append(f"order: {file_cfg['order']}")
    lines.append(f"description: {_q(description)}")
    if is_excerpt:
        lines.append(f"is_excerpt: true")
        lines.append(f"excerpt_lines: {len(code_lines)}")
    lines.append("")

    if summary:
        lines.append("summary:")
        for pt in summary:
            lines.append(f"  - point: {_q(pt.get('point', ''))}")
            lines.append(f"    link: {_q(pt.get('link', ''))}")
            lines.append(f"    link_label: {_q(pt.get('link_label', ''))}")
        lines.append("")

    if enhancements:
        lines.append("enhancements:")
        for enh in enhancements:
            lines.append(f"  - id: {_q(enh.get('id', ''))}")
            lines.append(f"    line_start: {int(enh.get('line_start', 1))}")
            lines.append(f"    line_end: {int(enh.get('line_end', 1))}")
            lines.append(f"    title: {_q(enh.get('title', ''))}")
            lines.append(f"    wikipedia_url: {_q(enh.get('wikipedia_url', ''))}")
            lines.append(f"    image_url: {_q(enh.get('image_url', ''))}")
            lines.append(f"    image_caption: {_q(enh.get('image_caption', ''))}")
            lines.append(f"    content: {_q(enh.get('content', ''))}")
        lines.append("")

    lines.append("---")
    lines.append("")

    fence = _fence_id(program.get("language", ""))
    lines.append(f"```{fence}")
    # Strip Emacs file-mode comment lines (e.g. "// Emacs style mode select -*- C++ -*-")
    # which contain *-* emphasis spans that break GitHub's fenced-code-block renderer.
    filtered_code_lines = [
        l for l in code_lines
        if "Emacs style mode select" not in l
    ]
    lines.append("\n".join(filtered_code_lines))
    lines.append("```")

    return "\n".join(lines)


def format_file(
    program: dict,
    file_cfg: dict,
    code_lines: list[str],
    raw_json: str,
    is_excerpt: bool,
) -> str:
    data = _parse_json(raw_json)
    return _format_from_data(program, file_cfg, code_lines, data, is_excerpt)


def format_file_from_dict(
    program: dict,
    file_cfg: dict,
    code_lines: list[str],
    data: dict,
    is_excerpt: bool,
) -> str:
    """Format a file from an already-parsed data dict (skips JSON parsing)."""
    return _format_from_data(program, file_cfg, code_lines, data, is_excerpt)
