"""Fetch Wikipedia Commons images for enhancement cards and program pages.

Image search priority per enhancement:
  1. Wikipedia pageimages API — curated lead image for the linked article.
  2. Commons search using the Wikipedia article title from the URL.
  3. Commons search using the enhancement card title (last resort).
  4. Return None if all fail.

Usage (standalone):
    python find_images.py                     # all programs
    python find_images.py --program zork      # one program
"""
import json
import pathlib
import re
import time

import requests

COMMONS_API   = "https://commons.wikimedia.org/w/api.php"
WIKIPEDIA_API = "https://en.wikipedia.org/w/api.php"
THUMB_WIDTH   = 330
DELAY         = 1.5   # seconds between API calls — be polite

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"}

_SESSION = requests.Session()
_SESSION.headers.update({"User-Agent": "CodeMuseum/1.0 (educational)"})


# ---------------------------------------------------------------------------
# Low-level helpers
# ---------------------------------------------------------------------------

def _post(api_url: str, params: dict) -> dict:
    params["format"] = "json"
    waits = [10, 30, 60]
    for wait in waits:
        try:
            r = _SESSION.post(api_url, data=params, timeout=12)
            r.raise_for_status()
            return r.json()
        except requests.HTTPError as e:
            if e.response is not None and e.response.status_code == 429:
                time.sleep(wait)
            else:
                raise
    r = _SESSION.post(api_url, data=params, timeout=12)
    r.raise_for_status()
    return r.json()


def _thumb_and_caption(file_title: str) -> tuple[str, str]:
    """Return (thumb_url, caption) for a Commons File: title, or ('', '')."""
    data = _post(COMMONS_API, {
        "action": "query",
        "titles": file_title,
        "prop": "imageinfo",
        "iiprop": "url|extmetadata",
        "iiurlwidth": str(THUMB_WIDTH),
    })
    for page in data.get("query", {}).get("pages", {}).values():
        for info in page.get("imageinfo", []):
            thumb = info.get("thumburl", "")
            if not thumb:
                continue
            meta     = info.get("extmetadata", {})
            desc     = re.sub(r"<[^>]+>", "", meta.get("ImageDescription", {}).get("value", "")).strip()
            license_ = meta.get("LicenseShortName", {}).get("value", "")
            if desc and len(desc) < 160:
                caption = desc
            else:
                name    = re.sub(r"\.\w+$", "", file_title.replace("File:", "")).replace("_", " ")
                caption = name
            if license_:
                caption += f" ({license_})"
            caption = caption.replace('"', '\\"').replace('\n', ' ').strip()[:200]
            return thumb, caption
    return "", ""


def _commons_search(query: str) -> tuple[str, str] | None:
    """Return (thumb_url, caption) for the best Commons match, or None."""
    data = _post(COMMONS_API, {
        "action": "query",
        "list": "search",
        "srsearch": query,
        "srnamespace": "6",
        "srlimit": "5",
    })
    for result in data.get("query", {}).get("search", []):
        title = result["title"]
        ext   = pathlib.Path(title.lower()).suffix
        if ext not in IMAGE_EXTS:
            continue
        thumb, caption = _thumb_and_caption(title)
        if thumb:
            return thumb, caption
    return None


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def find_image(wiki_url: str | None = None, query: str | None = None) -> tuple[str, str] | None:
    """4-tier fallback image search.

    1. Wikipedia pageimages API (if wiki_url given)
    2. Commons search using article title from wiki_url
    3. Commons search using query
    4. Return None
    """
    # Tier 1: Wikipedia pageimages
    if wiki_url:
        m = re.search(r"/wiki/(.+)$", wiki_url)
        if m:
            title = m.group(1)
            try:
                data = _post(WIKIPEDIA_API, {
                    "action": "query",
                    "titles": title,
                    "prop": "pageimages",
                    "pithumbsize": str(THUMB_WIDTH),
                    "piprop": "thumbnail|name",
                })
                for page in data.get("query", {}).get("pages", {}).values():
                    page_image = page.get("pageimage", "")
                    thumb_info = page.get("thumbnail", {})
                    if page_image and thumb_info.get("source"):
                        file_title = f"File:{page_image}"
                        time.sleep(DELAY)
                        thumb_url, caption = _thumb_and_caption(file_title)
                        if thumb_url:
                            return thumb_url, caption
                        caption = re.sub(r"\.\w+$", "", page_image.replace("_", " "))
                        caption = caption.replace('"', '\\"').replace('\n', ' ').strip()[:200]
                        return thumb_info["source"], caption
            except Exception:
                pass

            # Tier 2: Commons search using article title
            readable = title.replace("_", " ")
            time.sleep(DELAY)
            try:
                result = _commons_search(readable)
                if result:
                    return result
            except Exception:
                pass

    # Tier 3: Commons search using query
    if query:
        time.sleep(DELAY)
        try:
            result = _commons_search(query)
            if result:
                return result
        except Exception:
            pass

    return None


def find_program_image(program: dict) -> tuple[str, str] | None:
    """Find a representative image for the whole program by title search."""
    title = program.get("title", "")
    year  = program.get("year", "")
    try:
        result = _commons_search(f"{title} {year}".strip())
        if result:
            return result
        time.sleep(DELAY)
        result = _commons_search(title)
        return result
    except Exception:
        return None


# Regex to match an enhancement block where image_url and image_caption are empty.
# The enhancement fields use 4-space indentation.
_EMPTY_IMG_RE = re.compile(
    r'(    image_url: ""\n    image_caption: "")',
    re.MULTILINE,
)

# Regex to extract wikipedia_url and title from nearby preceding lines
_WIKI_URL_RE = re.compile(r'    wikipedia_url: "([^"]*)"')
_TITLE_RE    = re.compile(r'    title: "([^"]*)"')


def fill_file_images(md_path: pathlib.Path, console=None) -> int:
    """Patch empty image_url/image_caption fields in a .md frontmatter file.

    Returns the number of images found and written.
    """
    text = md_path.read_text(encoding="utf-8").replace("\r\n", "\n")
    new_text = text
    patches  = 0

    for match in _EMPTY_IMG_RE.finditer(text):
        pos = match.start()

        # Scan backwards from this match to find title and wikipedia_url
        preceding = text[:pos]
        wiki_url  = ""
        enh_title = ""
        for m in _WIKI_URL_RE.finditer(preceding):
            wiki_url = m.group(1)
        for m in _TITLE_RE.finditer(preceding):
            enh_title = m.group(1)

        if console:
            console.print(f"    [dim]searching image for: {enh_title or '?'}[/dim]")

        result = None
        try:
            result = find_image(wiki_url=wiki_url or None, query=enh_title or None)
        except Exception as e:
            if console:
                console.print(f"    [red]image search error: {e}[/red]")
            continue

        if not result:
            if console:
                console.print(f"    [dim]no image found for: {enh_title}[/dim]")
            continue

        thumb_url, caption = result
        # YAML-safe: escape quotes, strip newlines
        safe_url     = thumb_url.replace('"', '\\"').replace('\n', ' ').strip()
        safe_caption = caption.replace('"', '\\"').replace('\n', ' ').strip()

        old_block = match.group(1)
        new_block = f'    image_url: "{safe_url}"\n    image_caption: "{safe_caption}"'
        new_text  = new_text.replace(old_block, new_block, 1)
        patches  += 1

        if console:
            console.print(f"    [green]image found: {safe_url[:60]}...[/green]")

        time.sleep(DELAY)

    if patches:
        md_path.write_text(new_text, encoding="utf-8")

    return patches


# ---------------------------------------------------------------------------
# Standalone entry point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    import sys
    from rich.console import Console

    PROGRAMS_ROOT = pathlib.Path(__file__).parent.parent / "public" / "programs"
    _console = Console()

    program_filter = None
    if "--program" in sys.argv:
        idx = sys.argv.index("--program")
        program_filter = sys.argv[idx + 1]

    dirs = sorted(d for d in PROGRAMS_ROOT.iterdir() if d.is_dir())
    if program_filter:
        dirs = [d for d in dirs if d.name == program_filter]
        if not dirs:
            _console.print(f"[red]Program '{program_filter}' not found under {PROGRAMS_ROOT}[/red]")
            sys.exit(1)

    total = 0
    for prog_dir in dirs:
        for md in sorted(prog_dir.glob("*.md")):
            _console.print(f"\n  {prog_dir.name}/{md.name}")
            n = fill_file_images(md, console=_console)
            if n:
                _console.print(f"  [green]>> {n} image(s) added[/green]")
            total += n

    _console.print(f"\n[green]Done — {total} image(s) added across all files.[/green]")
