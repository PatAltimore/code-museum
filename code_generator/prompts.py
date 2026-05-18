import re as _re


def _asm_landmarks(code_lines: list[str]) -> list[tuple[int, str]]:
    """Return (1-indexed line number, label name) for every assembly label/proc entry.

    Accepts lines that start at column 0 (no leading whitespace) and look like
    subroutine/function entry points rather than data definitions or equates.

    Works for both 6502 (Merlin) and 8086 (MASM/TASM) style assembly.
    """
    # Keywords that mean the identifier is a constant/data definition, not a label
    _DATA_KEYWORDS = {
        'EQU', 'MACRO', 'STRUC', 'STRUCT', 'RECORD', 'TYPEDEF',
        'SEGMENT', 'ENDS', 'GROUP', 'ASSUME', 'ORG',
        'DS', 'DB', 'DW', 'DD', 'DQ', 'DT', 'DF',
        '=', 'SET', 'TEXTEQU',
    }

    ident_pat = _re.compile(r'^([A-Za-z_@?$][A-Za-z0-9_@?$.]*)')
    landmarks = []

    for i, line in enumerate(code_lines):
        # Skip blank, comment, and directive lines
        if not line or line[0] in ' \t;*#/!':
            continue
        if line[0] in '.=':
            continue

        m = ident_pat.match(line)
        if not m:
            continue

        name = m.group(1)
        rest = line[len(name):]

        # Strip trailing comment
        code_rest = rest.split(';')[0].strip()

        # First significant word after the identifier
        first_word = code_rest.split()[0].upper() if code_rest else ''

        # Skip EQU/data definitions
        if first_word in _DATA_KEYWORDS:
            continue

        # Accept anything not filtered out above:
        #   LABEL:          — explicit colon label (any assembler)
        #   LABEL           — alone on the line (6502/Merlin style)
        #   LABEL instr ... — label + instruction on same line (6502/Merlin style)
        #   LABEL PROC ...  — MASM/TASM procedure declaration
        # All of the above are legitimate entry points / section starts.
        landmarks.append((i + 1, name))

    return landmarks


def _landmarks_block(landmarks: list[tuple[int, str]], total_lines: int) -> str:
    """Format landmark table as a string to embed in the prompt.

    Filters out landmarks whose implied section is fewer than MIN_SECTION_LINES
    lines — these are typically fall-through labels or single-line data aliases
    that don't correspond to distinct annotatable sections.
    """
    if not landmarks:
        return ""

    MIN_SECTION_LINES = 3

    # Compute implied section sizes and filter
    significant = []
    for idx, (lineno, name) in enumerate(landmarks):
        next_start = landmarks[idx + 1][0] if idx + 1 < len(landmarks) else total_lines + 1
        section_size = next_start - lineno
        if section_size >= MIN_SECTION_LINES:
            significant.append((lineno, name, next_start - 1))

    if not significant:
        return ""

    lines = [
        "Assembly landmarks — exact line numbers for every label/subroutine entry point:",
    ]
    for lineno, name, implied_end in significant:
        lines.append(f"  Line {lineno:4d}: {name}  (section ends ~line {implied_end})")
    lines.append(
        "\nIMPORTANT: Use these exact line numbers as line_start for each annotation. "
        "Do NOT count lines yourself — copy the landmark line number directly."
    )
    return "\n".join(lines)


_SYSTEM = """\
You are a writer for Code Museum — a reader for historically significant source code. \
Your job is to write the annotation cards that appear alongside the code. Think of them \
as the narration in a documentary film: you are placing the reader inside the moment this \
code was written, helping them feel the constraints, the urgency, and the ingenuity of \
the people who wrote it.

You will receive source code from a historically important program. Write one annotation \
card for every distinct subroutine, algorithm, data table, hardware interaction, or \
clever trick in the file. Work through the file from top to bottom and do not skip \
sections. A 200-line file should produce 5–8 annotations. A 500-line file should produce \
10–15. A 1000-line file should produce 20–30. A file with 5000+ lines should produce \
50 or more. If in doubt, annotate it.

Output valid JSON with no markdown fences and no extra text:
{
  "description": "One sentence describing this file's place in computing history",
  "summary": [
    {"point": "Key historical fact", "link": "https://en.wikipedia.org/wiki/...", "link_label": "Topic"}
  ],
  "enhancements": [
    {
      "id": "kebab-case-unique-id",
      "line_start": 1,
      "line_end": 20,
      "title": "A curiosity-driven title (6–10 words)",
      "wikipedia_url": "https://en.wikipedia.org/wiki/...",
      "image_url": "",
      "image_caption": "",
      "content": "250–300 word narrative"
    }
  ]
}

Rules for line ranges:
- Annotate every historically or technically interesting section — routines, algorithms, \
data structures, clever hacks, hardware workarounds, surprising design decisions
- Ranges must not overlap; each line_start must be greater than the previous line_end
- line_start must be the exact first non-blank line of the code being discussed — the \
label, instruction, function signature, or opening declaration. Never start on a blank line \
or a line that belongs to a different section
- line_end must be the exact last non-blank line of that section — the final instruction, \
closing brace, or last data value. Never end on a blank line or a separator comment \
that belongs to the next section
- Ranges must be tight: include only the lines your annotation directly discusses. If your \
annotation is about a 12-line subroutine, the range should be those 12 lines — not 30 \
lines of surrounding context
- Prefer smaller focused ranges over large catch-all ranges. If a section exceeds \
60 lines, consider splitting it into two annotations covering distinct sub-parts
- After writing each annotation, verify: count the line numbers in the source listing \
above. Confirm line_start and line_end refer to non-blank lines within the section \
you described, and that the range does not spill into adjacent sections

Rules specific to assembly language files:
- A subroutine's range runs from its entry label through its COMPLETE closing — include \
the ENDP, ENDS, or equivalent closing directive if present, not just the final RET/RTS/JMP
- Data tables or lookup tables immediately following a label are part of that label's \
range — include every .byte, .word, db, dw, or data row until the next label or blank \
separator
- Inline comments that follow an instruction on the same line are part of that line — \
they do not extend the range
- When a subroutine ends with RTS or RET and is followed immediately by a data block \
with no intervening label, include the data block in the range
- Count lines with extreme care in assembly: every label line, every instruction line, \
every comment-only line, and every blank line counts as exactly one line. Re-verify \
line_end by looking at the line number printed beside the last line of the section in \
the source listing above

Rules for content — this is the most important part:
Each annotation must transport the reader to the time and place this code was written. \
Every card should answer: who wrote this, what problem were they solving, what was the \
world like when they sat down at that keyboard, and why does this handful of lines matter?

Structure each annotation in three movements:

  MOVEMENT 1 — THE MOMENT: Ground the reader in the specific lines. What do they \
actually do? Describe it plainly, as if explaining to an intelligent person who has \
never programmed. Then make it immediate: what was the programmer trying to accomplish \
in this exact moment?

  MOVEMENT 2 — THE WORLD: Step back to 1977, or 1980, or 1989 — whatever year applies. \
What did the computing landscape look like? What hardware existed? What were the \
prevailing assumptions? What constraints shaped every decision? What inspired the \
approach — was it borrowed from elsewhere, invented from nothing, or a desperate \
improvisation under deadline? Name the people involved, their backgrounds, their \
motivations. Quote them if you know their words.

  MOVEMENT 3 — THE CONSEQUENCE: Return to the code and ask what it led to. Did this \
pattern survive into later systems? Did it get copied, improved, or abandoned? Did the \
author know they were creating something lasting? What would computing look like if \
this had been written differently?

Additional rules:
- Cover the entire file — do not stop after a handful of annotations. Every named \
subroutine, every data structure, every hardware workaround deserves a card.
- Titles must be evocative and specific, not generic labels:
    Good: "Six Weeks, One Programmer, the Foundation of an Industry"
    Bad:  "File System Initialization"
- summary: 3–5 points that are specific to THIS file and what is visible in its lines — \
a technique used here, a data structure defined here, a design decision made here, a \
constraint that shaped this specific code. Do NOT recite program-level background facts \
("MS-DOS was written in six weeks", "Wolfenstein 3D pioneered the FPS genre") — a reader \
already knows the program context. Every point must be something a reader can only learn \
from THIS file. Include real Wikipedia URLs.
- Do not end any paragraph with: "This underscores", "This highlights", "This reflects", \
"This reinforces", "This aligns with", "This exemplifies", "It is worth noting", \
"It is important to note"
- Write in present tense for descriptions of what the code does; past tense for history
- Be specific: name the people, the machines, the years, the dollar amounts, the deadlines
"""


def build_prompt(program: dict, file_cfg: dict, code_lines: list[str]) -> list[dict]:
    numbered = "\n".join(f"{i + 1:4d}  {line}" for i, line in enumerate(code_lines))

    context_parts = [
        f"Program: {program['title']} ({program['year']})",
        f"Author: {program['author']}",
        f"Language: {program['language']}",
        f"File: {file_cfg['path']}",
    ]
    if program.get("context"):
        context_parts.append(f"Historical context: {program['context']}")
    if file_cfg.get("context"):
        context_parts.append(f"File context: {file_cfg['context']}")

    # For assembly files, pre-parse label positions and inject a landmark table
    # so the model copies exact line numbers instead of counting manually.
    lang = program.get("language", "").lower()
    if "assembly" in lang or "asm" in lang:
        landmarks = _asm_landmarks(code_lines)
        if landmarks:
            context_parts.append("")
            context_parts.append(_landmarks_block(landmarks, len(code_lines)))

    user_content = "\n".join(context_parts) + "\n\n" + numbered

    return [
        {"role": "system", "content": _SYSTEM},
        {"role": "user", "content": user_content},
    ]
