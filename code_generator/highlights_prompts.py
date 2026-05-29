_SYSTEM = """\
You are writing highlight cards for Code Museum — a reader for historically significant source code.

Highlights are the most memorable, technically fascinating, and influential features of a program. \
They are the things that made it legendary: the innovations that changed how software or games were built, \
the tricks that made developers' jaws drop, the moments that defined a genre or an industry.

You will receive a program's metadata, a list of its annotated source files with their section titles, \
and when available, the Wikipedia article about the program. \
Use this to identify which files contain the code behind each highlight.

Output valid JSON only — no markdown fences and no extra text:
{
  "highlights": [
    {
      "id": "kebab-case-unique-id",
      "title": "Evocative 5-8 word title",
      "description": "150-200 word narrative",
      "links": [
        {"label": "Short description of what this file shows", "file": "file-slug", "enhancement": "enhancement-id"}
      ]
    }
  ]
}

Rules:
- Generate 3-6 highlights — pick the most celebrated, copied, or surprising features
- Pick concrete things: a specific algorithm, visual trick, hardware hack, or design decision — \
  not broad categories
- Titles must be specific and evocative, not generic labels:
    Good: "The One-Bit Sound Engine", "Rendering a World With No GPU"
    Bad:  "Sound System", "Graphics Engine"
- Each description covers three things:
    1. What the feature does, in plain language a non-programmer can follow
    2. The constraint or problem it solved — hardware limits, memory, deadline, competition
    3. What it led to — name the specific games, engines, developers, or techniques that built on it
- Links must only reference file slugs provided in the input
- Each link must include an "enhancement" field set to the id of the most relevant \
  annotated section within that file (shown as "id:" in the file listing below). \
  Pick the single section that best shows the highlighted feature.
- A highlight may link to multiple files if the feature spans them
- Write past tense for history; present tense for what the code does
- Do not end any paragraph with: "This underscores", "This highlights", "This reflects", \
  "This reinforces", "This exemplifies", "It is worth noting", "It is important to note"
- FACTUAL ACCURACY: When a Wikipedia article is provided, treat it as the authoritative \
  source for all historical claims. Do not assert facts that contradict or are absent from \
  the Wikipedia article. Only use "first" or superlative claims if the Wikipedia article \
  supports them explicitly.
"""


def build_highlights_prompt(
    program: dict,
    files_with_enhancements: list[dict],
    wiki_text: str | None = None,
) -> list[dict]:
    """Build a prompt for generating program highlights.

    files_with_enhancements: list of dicts with:
        slug         — the file slug (used in links)
        title        — the file display title
        enhancements — list of {title} dicts
    """
    parts = [
        f"Program: {program['title']} ({program['year']})",
        f"Author(s): {program['author']}",
        f"Language: {program['language']}",
    ]
    if program.get("subtitle"):
        parts.append(f"Platform: {program['subtitle']}")
    if program.get("context"):
        parts.append(f"Historical context: {program['context'].strip()}")

    if wiki_text:
        parts.append(
            "\n--- Wikipedia article (authoritative factual source) ---\n"
            + wiki_text.strip()
            + "\n--- End Wikipedia article ---"
        )

    parts.append("\nAnnotated source files (slug — title):")
    for f in files_with_enhancements:
        parts.append(f"\n  slug: \"{f['slug']}\"  —  {f['title']}")
        for enh in f.get("enhancements", []):
            parts.append(f"    · id: \"{enh['id']}\"  —  {enh['title']}")

    return [
        {"role": "system", "content": _SYSTEM},
        {"role": "user", "content": "\n".join(parts)},
    ]
