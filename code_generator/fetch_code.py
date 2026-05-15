import urllib.parse
from pathlib import Path

import requests

CACHE_DIR = Path(__file__).parent / "source_code"


def fetch_source(repo: str, branch: str, path: str, max_lines: int | None = None) -> tuple[list[str], bool]:
    """Fetch a source file from GitHub, caching locally.

    Returns (lines, is_excerpt) where is_excerpt is True if the file was truncated.
    """
    cache_path = CACHE_DIR / repo.replace("/", "_") / urllib.parse.quote(path, safe="")
    if not cache_path.exists():
        url = f"https://raw.githubusercontent.com/{repo}/{branch}/{urllib.parse.quote(path)}"
        resp = requests.get(url, timeout=30)
        resp.raise_for_status()
        cache_path.parent.mkdir(parents=True, exist_ok=True)
        cache_path.write_text(resp.text, encoding="utf-8")

    text = cache_path.read_text(encoding="utf-8")
    lines = text.splitlines()

    if max_lines and len(lines) > max_lines:
        return lines[:max_lines], True
    return lines, False
