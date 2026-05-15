from pathlib import Path


class Checkpointer:
    def __init__(self, output_dir: str):
        self.root = Path(output_dir)

    def path_for(self, program_slug: str, file_slug: str) -> Path:
        return self.root / program_slug / f"{file_slug}.md"

    def is_done(self, program_slug: str, file_slug: str) -> bool:
        return self.path_for(program_slug, file_slug).exists()

    def save(self, program_slug: str, file_slug: str, content: str) -> Path:
        path = self.path_for(program_slug, file_slug)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        return path
