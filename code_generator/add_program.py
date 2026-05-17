#!/usr/bin/env python3
"""Add a new program to Code Museum from a GitHub URL.

Fetches the repository's file tree from GitHub, asks the AI model to pick
historically significant source files and write a complete programs.yaml entry,
then appends it to config/programs.yaml.

Usage:
    python add_program.py https://github.com/microsoft/BASIC-M6502
    python add_program.py https://github.com/microsoft/BASIC-M6502 --dry-run
"""
import argparse
import json
import os
import re
import sys
from pathlib import Path

import requests
import yaml
from dotenv import load_dotenv
from rich.console import Console
from rich.syntax import Syntax

from client import ModelClient, ContentFilterError
import catalog_sync

load_dotenv()
console = Console()

GITHUB_API = "https://api.github.com"

SOURCE_EXTS = {
    ".asm", ".s", ".s65", ".s86",
    ".c", ".h", ".cpp", ".hpp", ".cc",
    ".bas", ".bak",
    ".for", ".f", ".f77", ".f90",
    ".pas",
    ".pl", ".pm",
    ".lisp", ".lsp", ".cl",
    ".scm", ".ss",
    ".mdl", ".mud",
    ".forth", ".fth", ".4th",
    ".ada", ".adb", ".ads",
    ".cob", ".cbl",
    ".rb", ".py", ".js", ".ts",
    ".java", ".go", ".rs", ".swift", ".kt",
    ".m", ".r",
}

_SYSTEM = """\
You are a curator for Code Museum — a reader for historically significant open-source programs. \
Given a GitHub repository's metadata and file listing, write a complete programs.yaml entry.

Output valid JSON with no markdown fences and no extra text:
{
  "slug": "kebab-case-unique-id",
  "title": "Human-readable program title",
  "subtitle": "Platform/hardware, year(s)",
  "author": "Real person name(s) — e.g. Bill Gates, Paul Allen (not Microsoft)",
  "year": 1975,
  "language": "Primary programming language — for assembly always include the processor: '6502 Assembly', '8086 Assembly', 'Z80 Assembly', etc.",
  "description": "One compelling sentence for the catalog card",
  "context": "2–3 sentences of historical context for the AI annotators — hardware constraints, motivation, significance",
  "files": [
    {
      "order": 1,
      "slug": "kebab-case-file-id",
      "title": "FILENAME.EXT",
      "path": "exact/path/in/repo/FILENAME.EXT",
      "description": "One sentence about why this file matters historically",
      "context": "One sentence of file-specific context for the annotator (omit if nothing extra to add)"
    }
  ]
}

Rules:
- Include every source file that someone interested in computing history might want to read — err on the side of more, not fewer
- year: the year the code was originally written, not when it was open-sourced
- slug: derived from the repo name — all lowercase, hyphens only, no underscores
- files[].path must exactly match one of the paths in the file listing provided
- description: punchy, specific, like a museum placard — mention the historical moment
- context: background the annotator needs; name the hardware, the deadline, the constraints
- Do not include test files, build scripts, or README files in the files list
"""


def parse_github_url(url: str) -> tuple[str, str]:
    m = re.match(r"https?://github\.com/([^/]+)/([^/?#]+?)(?:\.git)?/?$", url.strip())
    if not m:
        raise ValueError(f"Not a valid GitHub repository URL: {url}")
    return m.group(1), m.group(2)


def github_get(path: str, token: str | None = None) -> dict:
    headers = {"Accept": "application/vnd.github+json"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    r = requests.get(f"{GITHUB_API}{path}", headers=headers, timeout=15)
    r.raise_for_status()
    return r.json()


def get_source_files(owner: str, repo: str, branch: str, token: str | None) -> tuple[list[str], bool]:
    data = github_get(f"/repos/{owner}/{repo}/git/trees/{branch}?recursive=1", token)
    truncated = data.get("truncated", False)
    files = []
    for item in data.get("tree", []):
        if item["type"] == "blob":
            ext = Path(item["path"]).suffix.lower()
            if ext in SOURCE_EXTS:
                files.append(item["path"])
    return files, truncated


def insert_into_programs_yaml(config_path: Path, entry: dict, config: dict) -> None:
    """Insert entry into the programs list sorted by year, then rewrite the file."""
    programs = list(config.get("programs", []) or [])
    year = entry.get("year", 9999)

    # Find the first existing program whose year exceeds the new entry's year
    idx = len(programs)
    for i, p in enumerate(programs):
        if p.get("year", 0) > year:
            idx = i
            break

    programs.insert(idx, entry)
    config["programs"] = programs

    with open(config_path, "w", encoding="utf-8") as f:
        yaml.dump(
            config,
            f,
            allow_unicode=True,
            default_flow_style=False,
            sort_keys=False,
            width=120,
        )


def main() -> None:
    parser = argparse.ArgumentParser(description="Add a new program to Code Museum")
    parser.add_argument("url", help="GitHub repository URL")
    parser.add_argument("--dry-run", action="store_true", help="Show generated entry without writing")
    parser.add_argument("--config", default="config/programs.yaml", help="Path to programs.yaml")
    args = parser.parse_args()

    token = os.environ.get("GITHUB_TOKEN")

    try:
        owner, repo = parse_github_url(args.url)
    except ValueError as e:
        console.print(f"[red]{e}[/red]")
        sys.exit(1)

    console.print(f"[cyan]Fetching {owner}/{repo}…[/cyan]")

    try:
        meta = github_get(f"/repos/{owner}/{repo}", token)
    except requests.HTTPError as e:
        console.print(f"[red]GitHub API error: {e}[/red]")
        sys.exit(1)

    branch = meta.get("default_branch", "main")
    repo_desc = meta.get("description") or ""
    repo_lang = meta.get("language") or ""
    console.print(f"  branch: {branch}  language: {repo_lang or '(unknown)'}")

    console.print("  fetching file tree…")
    try:
        source_files, truncated = get_source_files(owner, repo, branch, token)
    except requests.HTTPError as e:
        console.print(f"[red]Could not fetch file tree: {e}[/red]")
        sys.exit(1)

    if truncated:
        console.print("[yellow]  warning: file tree was truncated by GitHub (>100k items)[/yellow]")
    console.print(f"  found {len(source_files)} source file(s)")

    if not source_files:
        console.print("[yellow]  no source files found with recognised extensions[/yellow]")

    config_path = Path(__file__).parent / args.config
    config = yaml.safe_load(config_path.read_text(encoding="utf-8"))

    existing_slugs = {p["slug"] for p in config.get("programs", [])}

    user_content = "\n".join([
        f"Repository: {owner}/{repo}",
        f"GitHub URL: {args.url}",
        f"Default branch: {branch}",
        f"GitHub description: {repo_desc}",
        f"Primary language detected by GitHub: {repo_lang}",
        "",
        "Source files in repository:",
        *[f"  {f}" for f in source_files],
    ])

    console.print("[cyan]Asking model to generate programs.yaml entry…[/cyan]")
    client = ModelClient(config["models"])
    messages = [
        {"role": "system", "content": _SYSTEM},
        {"role": "user", "content": user_content},
    ]
    try:
        raw = client.complete(messages, temperature=0.2, max_tokens=2048)
    except (ContentFilterError, RuntimeError) as e:
        console.print(f"[red]Model error: {e}[/red]")
        sys.exit(1)

    text = raw.strip()
    text = re.sub(r"^```(?:json)?\s*", "", text)
    text = re.sub(r"\s*```$", "", text)
    text = text.strip()

    try:
        entry = json.loads(text)
    except json.JSONDecodeError as e:
        console.print(f"[red]Could not parse model response: {e}[/red]")
        console.print(f"[dim]{text[:400]}[/dim]")
        sys.exit(1)

    entry["github_url"] = args.url
    entry["github_repo"] = f"{owner}/{repo}"
    entry["github_branch"] = branch

    # Ensure files have no stray `context` key if the model left it empty
    for f in entry.get("files", []):
        if "context" in f and not f["context"]:
            del f["context"]

    yaml_preview = yaml.dump(
        [entry], allow_unicode=True, default_flow_style=False, sort_keys=False, width=120
    )
    console.print()
    console.print(Syntax(yaml_preview, "yaml", theme="github-dark", word_wrap=True))

    if entry["slug"] in existing_slugs:
        console.print(f"[yellow]Warning: slug '{entry['slug']}' already exists in programs.yaml[/yellow]")

    if args.dry_run:
        console.print("[dim]Dry run — nothing written.[/dim]")
        return

    insert_into_programs_yaml(config_path, entry, config)
    console.print(f"\n[green]Added '{entry['slug']}' to {config_path.name}[/green]")

    # Sync catalog.json immediately so the new program and its source tree
    # (all files listed as stubs with generated=false) are visible before
    # any content has been generated.
    updated_config = yaml.safe_load(config_path.read_text(encoding="utf-8"))
    output_dir = (Path(__file__).parent / updated_config["output_dir"]).resolve()
    catalog_sync.sync(updated_config, output_dir)
    console.print(f"[green]catalog.json updated — '{entry['slug']}' now visible as a stub[/green]")

    console.print(f"\nNext steps:")
    console.print(f"  python generator.py --program {entry['slug']} --no-images")
    console.print(f"  python generator.py --program {entry['slug']} --intro-only")
    console.print(f"  python generator.py --find-images --program {entry['slug']}")


if __name__ == "__main__":
    main()
