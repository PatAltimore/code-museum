import json
from pathlib import Path


def sync(config: dict, output_dir: Path) -> None:
    catalog_path = Path(__file__).parent.parent / "public" / "catalog.json"

    if catalog_path.exists():
        catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
    else:
        catalog = {"programs": []}

    existing = {p["slug"]: p for p in catalog.get("programs", [])}

    for prog in config["programs"]:
        slug = prog["slug"]
        entry = existing.setdefault(slug, {
            "slug": slug,
            "title": prog["title"],
            "subtitle": prog.get("subtitle", ""),
            "author": prog["author"],
            "year": prog["year"],
            "language": prog["language"],
            "description": prog["description"],
            "github_url": prog.get("github_url", ""),
            "files": [],
        })

        # Always sync scalar metadata from yaml so changes propagate
        entry["title"] = prog["title"]
        entry["author"] = prog["author"]
        entry["year"] = prog["year"]
        entry["language"] = prog["language"]
        entry["description"] = prog["description"]
        entry["subtitle"] = prog.get("subtitle", "")
        entry["github_url"] = prog.get("github_url", "")

        existing_files = {f["slug"]: f for f in entry.get("files", [])}
        for f in prog.get("files", []):
            file_path = output_dir / slug / f"{f['slug']}.md"
            generated = file_path.exists()
            slug_key = f["slug"]
            if slug_key in existing_files:
                # Refresh fields that come from yaml; preserve nothing else
                existing_files[slug_key].update({
                    "order": f["order"],
                    "title": f["title"],
                    "description": f.get("description", ""),
                    "path": f.get("path", ""),
                    "generated": generated,
                })
            else:
                existing_files[slug_key] = {
                    "order": f["order"],
                    "slug": slug_key,
                    "title": f["title"],
                    "description": f.get("description", ""),
                    "path": f.get("path", ""),
                    "generated": generated,
                }

        entry["files"] = sorted(existing_files.values(), key=lambda x: x["order"])

    catalog["programs"] = list(existing.values())
    catalog_path.write_text(json.dumps(catalog, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
