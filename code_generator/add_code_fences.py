#!/usr/bin/env python3
"""add_code_fences.py — one-time migration to wrap source code in fenced code blocks.

Walks every .md file under public/programs/, reads the language from the YAML
frontmatter, and wraps the code body in ``` fences with an appropriate language
identifier so the file renders correctly on GitHub.

Safe to re-run: files that already have a fence are skipped.
"""

import re
import sys
from pathlib import Path

# Map from lowercase language field values to GitHub-flavoured Markdown fence
# identifiers.  Partial-match order matters: longer / more specific first.
_LANG_FENCE: list[tuple[str, str]] = [
    ("6502 assembly",    "asm"),
    ("8086 assembly",    "asm"),
    ("x86 assembly",     "asm"),
    ("assembly",         "asm"),
    ("c, x86 assembly",  "c"),
    ("c and x86",        "c"),
    ("c/c++",            "c"),
    ("c++",              "cpp"),
    ("mdl",              "lisp"),   # MDL (Muddle) is a Lisp dialect
    ("basic",            "basic"),
    ("pascal",           "pascal"),
    ("c",                "c"),      # must come after c++/c/c++
]

_LANG_RE = re.compile(r'^language:\s*"([^"]*)"', re.MULTILINE)

# Control characters to strip from source code: everything below 0x20 except
# tab (0x09), and DEL (0x7f).  These appear as null-byte sector padding in
# DOS-era source files and cause GitHub to treat the file as binary.
_CTRL_CHARS = "".join(
    chr(b) for b in range(32) if b not in (9, 10, 13)
) + chr(127)
_CTRL_TABLE = str.maketrans("", "", _CTRL_CHARS)


def _strip_control_chars(text: str) -> str:
    return text.translate(_CTRL_TABLE)


def _fence_id(language: str) -> str:
    """Return the fenced-code-block language identifier for a language string."""
    lang_lower = language.lower()
    for key, fence in _LANG_FENCE:
        if key in lang_lower:
            return fence
    return ""   # unknown — bare ``` still beats nothing


def _convert(path: Path, dry_run: bool = False, strip_control: bool = False) -> bool:
    """Add code fences to a single .md file.  Returns True if a change was made.

    If strip_control is True, also remove embedded control characters from the
    code body (null bytes, Ctrl-Z, etc. from DOS-era source files).
    """
    text = path.read_text(encoding="utf-8", errors="surrogateescape")

    # Locate the closing --- of the frontmatter
    try:
        fm_start = text.index("---")
        fm_end   = text.index("---", fm_start + 3)
    except ValueError:
        print(f"  SKIP  {path.name} — could not find frontmatter")
        return False

    frontmatter = text[fm_start : fm_end + 3]
    body        = text[fm_end + 3:]   # everything after closing ---

    # Optionally strip embedded control characters.
    original_body = body
    if strip_control:
        body = _strip_control_chars(body)
    body_was_cleaned = body != original_body

    # Determine what work needs to be done.
    already_has_fence = "```" in body

    if already_has_fence and not body_was_cleaned:
        return False   # nothing to do

    if already_has_fence:
        # Only the control-char strip changed things — write back as-is.
        if not dry_run:
            path.write_text(frontmatter + body, encoding="utf-8",
                            errors="surrogateescape")
        return True

    # Need to add the fence wrapper (body may or may not have been cleaned).
    m = _LANG_RE.search(frontmatter)
    language = m.group(1) if m else ""
    fence_id = _fence_id(language)

    # body starts with "\n\n<code>" — keep the blank separator line,
    # insert the opening fence before the first code line.
    #
    # Structure before:  "---\n\n<code lines>\n"
    # Structure after:   "---\n\n```lang\n<code lines>\n```\n"
    body_stripped = body.rstrip("\n")
    after_separator = body_stripped[2:]   # skip the leading "\n\n"

    new_body = f"\n\n```{fence_id}\n{after_separator}\n```\n"
    new_text = frontmatter + new_body

    if not dry_run:
        path.write_text(new_text, encoding="utf-8", errors="surrogateescape")
    return True


def main() -> None:
    import argparse
    parser = argparse.ArgumentParser(description="Add code fences to .md program files")
    parser.add_argument("--dry-run", action="store_true", help="Report changes without writing")
    parser.add_argument("--strip-control", action="store_true",
                        help="Also strip embedded control characters (null bytes, Ctrl-Z, etc.) "
                             "from the code body.  Fixes GitHub binary-file detection on DOS-era sources.")
    parser.add_argument(
        "root",
        nargs="?",
        default=str(Path(__file__).parent.parent / "public" / "programs"),
        help="Root directory to scan (default: public/programs)",
    )
    args = parser.parse_args()

    root = Path(args.root)
    if not root.is_dir():
        print(f"Error: {root} is not a directory", file=sys.stderr)
        sys.exit(1)

    md_files = sorted(root.rglob("*.md"))
    changed = skipped = 0

    for path in md_files:
        result = _convert(path, dry_run=args.dry_run, strip_control=args.strip_control)
        if result:
            verb = "would update" if args.dry_run else "updated"
            print(f"  {verb}  {path.relative_to(root)}")
            changed += 1
        else:
            skipped += 1

    label = "[dry-run] " if args.dry_run else ""
    action = "cleaned" if args.strip_control else "updated"
    print(f"\n{label}{changed} file(s) {action}, {skipped} skipped.")


if __name__ == "__main__":
    main()
