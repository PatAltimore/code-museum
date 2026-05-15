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

        existing_files = {f["slug"]: f for f in entry.get("files", [])}
        for f in prog.get("files", []):
            file_path = output_dir / slug / f"{f['slug']}.md"
            if file_path.exists() and f["slug"] not in existing_files:
                existing_files[f["slug"]] = {
                    "order": f["order"],
                    "slug": f["slug"],
                    "title": f["title"],
                    "description": f.get("description", ""),
                }

        entry["files"] = sorted(existing_files.values(), key=lambda x: x["order"])

    catalog["programs"] = list(existing.values())
    catalog_path.write_text(json.dumps(catalog, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
