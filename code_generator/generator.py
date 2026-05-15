#!/usr/bin/env python3
import argparse
import sys
from pathlib import Path

import yaml
from dotenv import load_dotenv
from rich.console import Console

from client import ModelClient, ContentFilterError
from checkpointer import Checkpointer
from fetch_code import fetch_source
from prompts import build_prompt
from formatter import format_file
import catalog_sync

load_dotenv()
console = Console()


def main() -> None:
    parser = argparse.ArgumentParser(description="Code Museum content generator")
    parser.add_argument("--program", help="Only process this program slug")
    parser.add_argument("--file", help="Only process this file slug (requires --program)")
    parser.add_argument("--force", action="store_true", help="Regenerate existing files")
    parser.add_argument("--dry-run", action="store_true", help="Build prompts without calling the API")
    parser.add_argument("--sync-catalog", action="store_true", help="Update catalog.json from disk and exit")
    parser.add_argument("--no-catalog-sync", action="store_true", help="Skip catalog.json sync after generation")
    parser.add_argument("--config", default="config/programs.yaml", help="Path to programs.yaml")
    args = parser.parse_args()

    config_path = Path(__file__).parent / args.config
    config = yaml.safe_load(config_path.read_text(encoding="utf-8"))

    output_dir = (Path(__file__).parent / config["output_dir"]).resolve()
    ckpt = Checkpointer(str(output_dir))

    if args.sync_catalog:
        catalog_sync.sync(config, output_dir)
        console.print("[green]catalog.json updated[/green]")
        return

    gen_cfg = config.get("generation", {})
    client = ModelClient(config["models"]) if not args.dry_run else None
    generated = []

    programs = config["programs"]
    if args.program:
        programs = [p for p in programs if p["slug"] == args.program]
        if not programs:
            console.print(f"[red]Program '{args.program}' not found in config.[/red]")
            sys.exit(1)

    if args.file and not args.program:
        console.print("[red]--file requires --program[/red]")
        sys.exit(1)

    for program in programs:
        files = program.get("files", [])
        if args.file:
            files = [f for f in files if f["slug"] == args.file]
            if not files:
                console.print(f"[red]File '{args.file}' not found in '{program['slug']}'.[/red]")
                sys.exit(1)

        for file_cfg in files:
            prog_slug = program["slug"]
            file_slug = file_cfg["slug"]

            if not args.force and ckpt.is_done(prog_slug, file_slug):
                console.print(f"[dim]skip  {prog_slug}/{file_slug}[/dim]")
                continue

            console.print(f"[cyan]gen   {prog_slug}/{file_slug}[/cyan]")

            max_lines = file_cfg.get("max_lines", gen_cfg.get("default_max_lines", 200))
            try:
                code_lines, is_excerpt = fetch_source(
                    program["github_repo"],
                    program.get("github_branch", "main"),
                    file_cfg["path"],
                    max_lines=max_lines,
                )
            except Exception as e:
                console.print(f"  [red]fetch failed: {e}[/red]")
                continue

            messages = build_prompt(program, file_cfg, code_lines)

            if args.dry_run:
                console.print(f"  [dim]dry-run: {len(code_lines)} lines, prompt ready[/dim]")
                continue

            console.print(f"  calling model ({len(code_lines)} lines)…")
            try:
                raw = client.complete(
                    messages,
                    temperature=gen_cfg.get("temperature", 0.3),
                    max_tokens=gen_cfg.get("max_tokens", 4096),
                )
            except ContentFilterError as e:
                console.print(f"  [red]content filter: {e}[/red]")
                continue
            except RuntimeError as e:
                console.print(f"  [red]{e}[/red]")
                continue

            content = format_file(program, file_cfg, code_lines, raw, is_excerpt)
            path = ckpt.save(prog_slug, file_slug, content)
            console.print(f"  [green]→ {path}[/green]")
            generated.append((prog_slug, file_slug))

    if generated and not args.no_catalog_sync:
        catalog_sync.sync(config, output_dir)
        console.print(f"[green]catalog.json updated ({len(generated)} file(s) added)[/green]")


if __name__ == "__main__":
    main()
