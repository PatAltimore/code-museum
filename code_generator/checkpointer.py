import re
from pathlib import Path

# Slugs are used to build filesystem paths and originate from config that may be
# LLM-generated from an untrusted GitHub repo tree, so restrict them to a safe
# character set to prevent path traversal (e.g. a "../" slug escaping the root).
_SLUG_RE = re.compile(r"^[a-z0-9][a-z0-9-]*$")


def _validate_slug(slug: str) -> str:
    if not isinstance(slug, str) or not _SLUG_RE.match(slug):
        raise ValueError(f"Unsafe slug: {slug!r}")
    return slug


class Checkpointer:
    def __init__(self, output_dir: str):
        self.root = Path(output_dir).resolve()

    def path_for(self, program_slug: str, file_slug: str) -> Path:
        path = (self.root / _validate_slug(program_slug) / f"{_validate_slug(file_slug)}.md").resolve()
        # Defense in depth: ensure the resolved path stays within the root.
        if self.root not in path.parents:
            raise ValueError(f"Path escapes output root: {path}")
        return path

    def is_done(self, program_slug: str, file_slug: str) -> bool:
        return self.path_for(program_slug, file_slug).exists()

    def save(self, program_slug: str, file_slug: str, content: str) -> Path:
        path = self.path_for(program_slug, file_slug)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        return path
