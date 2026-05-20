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


def _fence_id(language: str) -> str:
    """Return the fenced-code-block language identifier for a language string."""
    lang_lower = language.lower()
    for key, fence in _LANG_FENCE:
        if key in lang_lower:
            return fence
    return ""   # unknown — bare ``` still beats nothing


def _convert(path: Path, dry_run: bool = False) -> bool:
    """Add code fences to a single .md file.  Returns True if a change was made."""
    text = path.read_text(encoding="utf-8")

    # Locate the closing --- of the frontmatter
    try:
        fm_start = text.index("---")
        fm_end   = text.index("---", fm_start + 3)
    except ValueError:
        print(f"  SKIP  {path.name} — could not find frontmatter")
        return False

    frontmatter = text[fm_start : fm_end + 3]
    body        = text[fm_end + 3:]   # everything after closing ---

    # Idempotency: skip if the body already contains a code fence
    if "```" in body:
        return False

    # Extract language for the fence identifier
    m = _LANG_RE.search(frontmatter)
    language = m.group(1) if m else ""
    fence_id = _fence_id(language)

    # body currently starts with "\n\n<code>" — keep the blank separator line,
    # then insert the opening fence before the first code line.
    #
    # Structure before:  "---\n\n<code lines>\n"
    # Structure after:   "---\n\n```lang\n<code lines>\n```\n"
    #
    # Strip a single trailing newline from the body so we control the ending.
    body_stripped = body.rstrip("\n")

    # The body begins with exactly "\n\n" — preserve that blank separator
    after_separator = body_stripped[2:]   # the actual code text

    new_body = f"\n\n```{fence_id}\n{after_separator}\n```\n"
    new_text = frontmatter + new_body

    if not dry_run:
        path.write_text(new_text, encoding="utf-8")
    return True


def main() -> None:
    import argparse
    parser = argparse.ArgumentParser(description="Add code fences to .md program files")
    parser.add_argument("--dry-run", action="store_true", help="Report changes without writing")
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
        result = _convert(path, dry_run=args.dry_run)
        if result:
            verb = "would update" if args.dry_run else "updated"
            print(f"  {verb}  {path.relative_to(root)}")
            changed += 1
        else:
            skipped += 1

    print(f"\n{'[dry-run] ' if args.dry_run else ''}{changed} file(s) updated, {skipped} already had fences or were skipped.")


if __name__ == "__main__":
    main()
