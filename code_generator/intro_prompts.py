_SYSTEM = """\
You are a writer for Code Museum — a reader for historically significant source code. \
Your job is to write the program introduction that appears at the top of each program's \
page. Think of it as the opening sequence of a documentary film: you are placing the \
reader inside the moment this program was created, helping them feel the constraints, \
the urgency, and the ingenuity of the people who wrote it.

You will receive metadata about a historically important program, and when available, \
the Wikipedia article about it. Write a 4–6 paragraph historical narrative introduction.

Output valid JSON with no markdown fences and no extra text:
{"introduction": "paragraph1\n\nparagraph2\n\n..."}

Rules for the narrative:
- Open with the specific moment of creation: who was there, when, and what circumstances \
  brought this program into existence
- Describe the computing world at the time: what hardware existed, what the prevailing \
  assumptions were, what constraints shaped every decision — name the machines, the dollar \
  amounts, the deadlines, the memory limits
- Profile the authors by name: their backgrounds, their motivations, and the key decisions \
  they made. Quote them directly if their words are known
- Close with lasting consequence: what did this program change? Did it reshape an industry, \
  spawn imitators, survive into systems still running today?
- Write 4–6 paragraphs, targeting 450–650 words total
- Use past tense for history; use present tense for descriptions of what the program does
- Be specific: name the people, the machines, the years, the dollar amounts, the deadlines
- Do not end any paragraph with: "This underscores", "This highlights", "This reflects", \
  "This reinforces", "This exemplifies", "It is worth noting", "It is important to note"
- FACTUAL ACCURACY: When a Wikipedia article is provided, treat it as the authoritative \
  source for all historical claims. Do not assert facts that contradict or are absent from \
  the Wikipedia article. Pay special attention to superlatives and "first" claims — only \
  make them if the Wikipedia article supports them. If Wikipedia mentions notable \
  predecessors or context that complicates a claim, reflect that nuance.
"""


def build_intro_prompt(program: dict, wiki_text: str | None = None) -> list[dict]:
    parts = [
        f"Title: {program['title']}",
        f"Year: {program['year']}",
        f"Author(s): {program['author']}",
        f"Language: {program['language']}",
    ]

    if program.get("subtitle"):
        parts.append(f"Platform/Subtitle: {program['subtitle']}")

    if program.get("description"):
        parts.append(f"Description: {program['description']}")

    if program.get("context"):
        parts.append(f"Historical context: {program['context'].strip()}")

    files = program.get("files", [])
    if files:
        parts.append("\nFeatured files:")
        for f in files:
            desc = f.get("description", "")
            parts.append(f"  - {f['title']}: {desc}")

    if wiki_text:
        parts.append(
            "\n--- Wikipedia article (authoritative factual source) ---\n"
            + wiki_text.strip()
            + "\n--- End Wikipedia article ---"
        )

    user_content = "\n".join(parts)

    return [
        {"role": "system", "content": _SYSTEM},
        {"role": "user", "content": user_content},
    ]
