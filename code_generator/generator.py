#!/usr/bin/env python3
import argparse
import json
import re
import sys
from pathlib import Path

import yaml
from dotenv import load_dotenv
from rich.console import Console

from client import ModelClient, ContentFilterError
from checkpointer import Checkpointer
from fetch_code import fetch_source
from prompts import build_prompt, build_chunk_prompt, CHUNK_THRESHOLD, _asm_landmarks
from intro_prompts import build_intro_prompt
from formatter import format_file, format_file_from_dict, parse_response_json
from find_images import fill_file_images, find_program_image
from range_fixer import fix_ranges
import catalog_sync

load_dotenv()
console = Console()

_CATALOG_PATH = Path(__file__).parent.parent / "public" / "catalog.json"


def save_introduction(slug: str, intro_text: str) -> None:
    if _CATALOG_PATH.exists():
        catalog = json.loads(_CATALOG_PATH.read_text(encoding="utf-8"))
    else:
        catalog = {"programs": []}

    existing = {p["slug"]: p for p in catalog.get("programs", [])}
    entry = existing.setdefault(slug, {"slug": slug})
    entry["introduction"] = intro_text

    catalog["programs"] = list(existing.values())
    _CATALOG_PATH.write_text(json.dumps(catalog, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def save_program_image(slug: str, image_url: str, image_caption: str) -> None:
    if _CATALOG_PATH.exists():
        catalog = json.loads(_CATALOG_PATH.read_text(encoding="utf-8"))
    else:
        catalog = {"programs": []}

    existing = {p["slug"]: p for p in catalog.get("programs", [])}
    entry = existing.setdefault(slug, {"slug": slug})
    entry["image_url"] = image_url
    entry["image_caption"] = image_caption

    catalog["programs"] = list(existing.values())
    _CATALOG_PATH.write_text(json.dumps(catalog, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def _split_into_chunks(
    total_lines: int,
    landmarks: list[tuple[int, str]],
    chunk_size: int = 800,
) -> list[tuple[int, int]]:
    """Split a file into chunks of ~chunk_size lines, snapping to landmark boundaries.

    Returns a list of (start, end) 1-indexed inclusive tuples covering the
    entire file with no gaps and no overlaps.
    """
    landmark_lines = {ln for ln, _name in landmarks}
    chunks = []
    start = 1

    while start <= total_lines:
        nominal_end = start + chunk_size - 1

        if nominal_end >= total_lines:
            # Last chunk — take everything remaining
            chunks.append((start, total_lines))
            break

        # Search for a landmark boundary in the window
        # [start + chunk_size//2, start + chunk_size*1.3]
        window_lo = start + chunk_size // 2
        window_hi = min(total_lines, int(start + chunk_size * 1.3))

        # Find the last landmark whose line is inside the window; cut just
        # before it so the landmark opens the next chunk cleanly.
        best_cut = None
        for ln in sorted(landmark_lines):
            if window_lo <= ln <= window_hi:
                best_cut = ln - 1  # end this chunk one line before the landmark

        if best_cut is None:
            # No landmark in window — use the nominal cut point
            best_cut = nominal_end

        chunks.append((start, best_cut))
        start = best_cut + 1

    return chunks


def _merge_chunk_responses(parsed_chunks: list[dict]) -> dict:
    """Merge multiple per-chunk parsed JSON dicts into one.

    Uses description and summary from the first chunk only.
    Enhancements are concatenated from all chunks, sorted by line_start,
    and deduplicated by id (appending -2, -3, etc. for collisions).
    """
    if not parsed_chunks:
        return {"description": "", "summary": [], "enhancements": []}

    merged = {
        "description": parsed_chunks[0].get("description", ""),
        "summary": parsed_chunks[0].get("summary", []),
        "enhancements": [],
    }

    all_enhancements = []
    for chunk in parsed_chunks:
        all_enhancements.extend(chunk.get("enhancements", []))

    # Sort by line_start
    all_enhancements.sort(key=lambda e: int(e.get("line_start", 0)))

    # Deduplicate IDs
    seen_ids: dict[str, int] = {}
    for enh in all_enhancements:
        original_id = enh.get("id", "")
        if original_id not in seen_ids:
            seen_ids[original_id] = 1
        else:
            seen_ids[original_id] += 1
            enh = dict(enh)
            enh["id"] = f"{original_id}-{seen_ids[original_id]}"
        merged["enhancements"].append(enh)

    return merged


def generate_intro(program: dict, client, gen_cfg: dict, force: bool, fetch_images: bool = True) -> bool:
    slug = program["slug"]

    if _CATALOG_PATH.exists():
        catalog = json.loads(_CATALOG_PATH.read_text(encoding="utf-8"))
        existing = {p["slug"]: p for p in catalog.get("programs", [])}
        entry = existing.get(slug, {})
        if entry.get("introduction") and not force:
            console.print(f"[dim]skip  {slug}/introduction[/dim]")
            return False

    console.print(f"[cyan]gen   {slug}/introduction[/cyan]")

    messages = build_intro_prompt(program)

    console.print("  calling model (intro)…")
    try:
        raw = client.complete(messages, temperature=0.3, max_tokens=2048)
    except ContentFilterError as e:
        console.print(f"  [red]content filter: {e}[/red]")
        return False
    except RuntimeError as e:
        console.print(f"  [red]{e}[/red]")
        return False

    # Strip markdown fences if present
    text = raw.strip()
    text = re.sub(r'^```(?:json)?\s*', '', text)
    text = re.sub(r'\s*```$', '', text)
    text = text.strip()

    # Try a standard parse first; fall back to regex extraction which handles
    # models that emit literal newlines inside the JSON string (invalid JSON)
    intro_text = None
    try:
        if not text.endswith('}'):
            last_quote = text.rfind('"')
            text = text[:last_quote + 1] + '"}' if last_quote != -1 else text + '"}'
        intro_text = json.loads(text)["introduction"]
    except (json.JSONDecodeError, KeyError):
        # Extract the value with a DOTALL regex, then unescape manually
        m = re.search(r'"introduction"\s*:\s*"(.*?)(?<!\\)"', text, re.DOTALL)
        if m:
            intro_text = m.group(1).replace('\\"', '"')
        else:
            console.print("  [red]could not parse intro response[/red]")
            return False
    save_introduction(slug, intro_text)
    console.print(f"  [green]-> saved {slug}/introduction[/green]")

    if fetch_images:
        console.print(f"  searching for program image…")
        try:
            img = find_program_image(program, client=client)
            if img:
                save_program_image(slug, img[0], img[1])
                console.print(f"  [green]-> program image saved[/green]")
            else:
                console.print(f"  [dim]no program image found[/dim]")
        except Exception as e:
            console.print(f"  [yellow]program image search failed: {e}[/yellow]")

    return True


def main() -> None:
    parser = argparse.ArgumentParser(description="Code Museum content generator")
    parser.add_argument("--program", help="Only process this program slug")
    parser.add_argument("--file", help="Only process this file slug (requires --program)")
    parser.add_argument("--force", action="store_true", help="Regenerate existing files and introductions")
    parser.add_argument("--intro-only", action="store_true", help="Only generate missing introductions; skip file annotations")
    parser.add_argument("--dry-run", action="store_true", help="Build prompts without calling the API")
    parser.add_argument("--sync-catalog", action="store_true", help="Update catalog.json from disk and exit")
    parser.add_argument("--no-catalog-sync", action="store_true", help="Skip catalog.json sync after generation")
    parser.add_argument("--no-images", action="store_true", help="Skip all Wikipedia Commons image fetching (program and enhancement images)")
    parser.add_argument("--file-images", action="store_true", help="Also fetch per-enhancement images (program-level image is always fetched)")
    parser.add_argument("--find-images", action="store_true", help="Fill missing images in all existing files and exit")
    parser.add_argument("--replace-images", action="store_true", help="Clear and re-fetch all images (replaces bad ones); implies --find-images")
    parser.add_argument("--program-image", action="store_true", help="Fetch (or replace) the program intro image only; skip file images")
    parser.add_argument("--fix-ranges", action="store_true", help="Post-process existing .md files to correct enhancement line ranges and exit")
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

    if args.program_image:
        programs = config["programs"]
        if args.program:
            programs = [p for p in programs if p["slug"] == args.program]
        for program in programs:
            prog_slug = program["slug"]
            console.print(f"[cyan]prog-image  {prog_slug}[/cyan]")
            try:
                img = find_program_image(program, client=client)
                if img:
                    save_program_image(prog_slug, img[0], img[1])
                    console.print(f"  [green]-> program image saved[/green]")
                else:
                    console.print(f"  [dim]no program image found[/dim]")
            except Exception as e:
                console.print(f"  [yellow]program image search failed: {e}[/yellow]")
        return

    if args.fix_ranges:
        programs = config["programs"]
        if args.program:
            programs = [p for p in programs if p["slug"] == args.program]
        total_fixed = 0
        for program in programs:
            prog_slug = program["slug"]
            prog_dir = output_dir / prog_slug
            if not prog_dir.is_dir():
                continue
            md_files = sorted(prog_dir.glob("*.md"))
            if args.file:
                md_files = [f for f in md_files if f.stem == args.file]
            for md in md_files:
                console.print(f"[cyan]fix-ranges  {prog_slug}/{md.stem}[/cyan]")
                try:
                    changed = fix_ranges(md, client, gen_cfg=gen_cfg, console=console)
                    if changed:
                        console.print(f"  [green]-> {changed} range(s) corrected[/green]")
                    else:
                        console.print(f"  [dim]no changes[/dim]")
                    total_fixed += changed
                except Exception as e:
                    console.print(f"  [yellow]fix-ranges failed: {e}[/yellow]")
        console.print(f"[green]Done — {total_fixed} range(s) corrected.[/green]")
        return

    if args.find_images or args.replace_images:
        replace = args.replace_images
        programs = config["programs"]
        if args.program:
            programs = [p for p in programs if p["slug"] == args.program]
        total_imgs = 0
        for program in programs:
            prog_slug = program["slug"]
            prog_dir = output_dir / prog_slug
            if prog_dir.is_dir():
                for md in sorted(prog_dir.glob("*.md")):
                    console.print(f"[cyan]images  {prog_slug}/{md.stem}[/cyan]")
                    count = fill_file_images(md, console=console, client=client, replace=replace)
                    if count:
                        console.print(f"  [green]-> {count} image(s) added[/green]")
                    total_imgs += count
            # Check if program is missing image_url in catalog
            if _CATALOG_PATH.exists():
                catalog = json.loads(_CATALOG_PATH.read_text(encoding="utf-8"))
                existing = {p["slug"]: p for p in catalog.get("programs", [])}
                entry = existing.get(prog_slug, {})
                if entry.get("image_url") is None:
                    console.print(f"[cyan]prog-image  {prog_slug}[/cyan]")
                    try:
                        img = find_program_image(program, client=client)
                        if img:
                            save_program_image(prog_slug, img[0], img[1])
                            console.print(f"  [green]-> program image saved[/green]")
                        else:
                            console.print(f"  [dim]no program image found[/dim]")
                    except Exception as e:
                        console.print(f"  [yellow]program image search failed: {e}[/yellow]")
        console.print(f"[green]Done — {total_imgs} file image(s) added.[/green]")
        return
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
        # Generate introduction unless targeting a specific file
        if not args.file:
            if args.dry_run:
                console.print(f"[dim]dry-run: intro prompt ready[/dim]")
            else:
                generate_intro(program, client, gen_cfg, args.force, fetch_images=not args.no_images)

        # Skip file annotation loop when --intro-only is set
        if args.intro_only:
            continue

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

            max_lines = file_cfg.get("max_lines") or gen_cfg.get("default_max_lines") or None
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

            if len(code_lines) > CHUNK_THRESHOLD:
                # --- Chunked path for large files ---
                lang = program.get("language", "").lower()
                if "assembly" in lang or "asm" in lang:
                    landmarks = _asm_landmarks(code_lines)
                else:
                    landmarks = []

                chunks = _split_into_chunks(len(code_lines), landmarks)
                total_chunks = len(chunks)

                if args.dry_run:
                    console.print(
                        f"  [dim]dry-run: {len(code_lines)} lines, "
                        f"{total_chunks} chunks: "
                        + ", ".join(f"{s}-{e}" for s, e in chunks)
                        + "[/dim]"
                    )
                    continue

                console.print(
                    f"  large file: {len(code_lines)} lines split into "
                    f"{total_chunks} chunks"
                )

                parsed_chunks = []
                for chunk_num, (chunk_start, chunk_end) in enumerate(chunks, 1):
                    console.print(
                        f"  chunk {chunk_num}/{total_chunks} "
                        f"(lines {chunk_start}–{chunk_end})…"
                    )
                    messages = build_chunk_prompt(
                        program, file_cfg, code_lines,
                        chunk_start, chunk_end, chunk_num, total_chunks,
                    )
                    try:
                        raw = client.complete(
                            messages,
                            temperature=gen_cfg.get("temperature", 0.3),
                            max_tokens=gen_cfg.get("max_tokens", 4096),
                        )
                    except ContentFilterError as e:
                        console.print(f"  [yellow]chunk {chunk_num} content filter — skipping: {e}[/yellow]")
                        continue
                    except RuntimeError as e:
                        console.print(f"  [yellow]chunk {chunk_num} error — skipping: {e}[/yellow]")
                        continue

                    try:
                        parsed = parse_response_json(raw)
                    except Exception as e:
                        console.print(f"  [yellow]chunk {chunk_num} JSON parse failed — skipping: {e}[/yellow]")
                        continue

                    parsed_chunks.append(parsed)

                if not parsed_chunks:
                    console.print(f"  [red]all chunks failed — skipping {prog_slug}/{file_slug}[/red]")
                    continue

                merged = _merge_chunk_responses(parsed_chunks)
                content = format_file_from_dict(program, file_cfg, code_lines, merged, is_excerpt)

            else:
                # --- Standard path for small files ---
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
            console.print(f"  [green]-> {path}[/green]")
            generated.append((prog_slug, file_slug))

            if not args.no_images and args.file_images:
                count = fill_file_images(path, console=console, client=client)
                if count:
                    console.print(f"  [green]-> {count} image(s) added[/green]")

    if generated and not args.no_catalog_sync:
        catalog_sync.sync(config, output_dir)
        console.print(f"[green]catalog.json updated ({len(generated)} file(s) added)[/green]")


if __name__ == "__main__":
    main()
