import json
import re


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


def format_file(
    program: dict,
    file_cfg: dict,
    code_lines: list[str],
    raw_json: str,
    is_excerpt: bool,
) -> str:
    data = _parse_json(raw_json)

    description = data.get("description", file_cfg.get("description", ""))
    summary = data.get("summary", [])
    enhancements = data.get("enhancements", [])

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

    if is_excerpt:
        lines.append(f"; excerpt — first {len(code_lines)} lines of {file_cfg['path']}")
        lines.append("")

    lines.append("\n".join(code_lines))

    return "\n".join(lines)
