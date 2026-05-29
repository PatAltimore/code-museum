import re as _re

CHUNK_THRESHOLD = 1000


def _asm_landmarks(code_lines: list[str]) -> list[tuple[int, str]]:
    """Return (1-indexed line number, label name) for every assembly label/proc entry.

    The returned line number is the label line itself — comments above the label
    are not included so the model gets an unambiguous anchor.

    Works for both 6502 (Merlin) and 8086 (MASM/TASM) style assembly.
    """
    # Keywords that mean the identifier is a constant/data definition, not a label.
    # Includes both MASM/TASM and MACRO-10 (PDP-10) assembler directives.
    _DATA_KEYWORDS = {
        # MASM / TASM
        'EQU', 'MACRO', 'STRUC', 'STRUCT', 'RECORD', 'TYPEDEF',
        'SEGMENT', 'ENDS', 'GROUP', 'ASSUME', 'ORG',
        'DS', 'DB', 'DW', 'DD', 'DQ', 'DT', 'DF', 'SET', 'TEXTEQU',
        # MACRO-10 / PDP-10
        'TITLE', 'SEARCH', 'SALL', 'RADIX', 'SUBTTL', 'PAGE',
        'LIST', 'XLIST', 'PURGE', 'DEFINE', 'IFE', 'IFN', 'IFG',
        'IFL', 'IFB', 'IFDEF', 'IFNDEF', 'IF', 'IF1', 'IF2',
        'ELSE', 'ENDIF', 'IRPC', 'IRP', 'REPT', 'END', 'UNIVERSAL',
        'COMMENT',
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

        # Skip if the identifier itself is a directive (e.g. IFE, DEFINE, TITLE)
        # or if what follows it is a data/definition keyword (e.g. LABEL EQU 5)
        # or if it uses = / == assignment syntax (e.g. REALIO=4, ADDPRC==1)
        if name.upper() in _DATA_KEYWORDS or first_word in _DATA_KEYWORDS or code_rest.startswith('='):
            continue

        # Accept anything not filtered out above:
        #   LABEL:          — explicit colon label (any assembler)
        #   LABEL           — alone on the line (6502/Merlin style)
        #   LABEL instr ... — label + instruction on same line (6502/Merlin style)
        #   LABEL PROC ...  — MASM/TASM procedure declaration
        landmarks.append((i + 1, name))  # convert to 1-indexed

    return landmarks


def _landmarks_block(
    landmarks: list[tuple[int, str]],
    total_lines: int,
    density_denominator: int = None,
) -> str:
    """Format landmark table as a string to embed in the prompt.

    Filters out landmarks whose implied section is fewer than MIN_SECTION_LINES
    lines — these are typically fall-through labels or single-line data aliases
    that don't correspond to distinct annotatable sections.

    density_denominator: if provided, use this value instead of total_lines for
    the density guard (len(significant) > X / 12). Useful for chunks where
    total_lines is the full-file line count but we only want to check density
    against the chunk size.
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

    # If landmarks are denser than 1 per 12 lines, the file structure is
    # too unusual (e.g. MACRO-10 with inline conditional blocks) for the
    # table to be reliable — omit it rather than mislead the model.
    denom = density_denominator if density_denominator is not None else total_lines
    if len(significant) > denom / 12:
        return ""

    lines = [
        "Assembly landmarks — exact line numbers for every label/subroutine entry point:",
    ]
    for lineno, name, implied_end in significant:
        lines.append(f"  Line {lineno:4d}: {name}  (section ends ~line {implied_end})")
    lines.append(
        "\nIMPORTANT: Use these exact line numbers as line_start for each annotation. "
        "Do NOT count lines yourself."
    )
    return "\n".join(lines)


_SYSTEM = """\
You are a writer for Code Museum — a reader for historically significant source code. \
Your job is to write the annotation cards that appear alongside the code. Each card \
explains what a section of code does, the technical and historical context in which it \
was written, and what it led to — what influence it had on the software and developers \
that came after it.

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

Rules for content:
Each annotation should cover who wrote this section, what problem they were solving, \
what the technical environment looked like at the time, and what came of it.

Structure each annotation in three movements:

  MOVEMENT 1 — THE MOMENT: Ground the reader in the specific lines. What do they \
actually do? Describe it plainly, as if explaining to an intelligent person who has \
never programmed. Then make it immediate: what was the programmer trying to accomplish \
in this exact moment?

  MOVEMENT 2 — THE WORLD: Step back to the year this was written. What did the \
computing landscape look like? What hardware existed? What were the prevailing \
assumptions and constraints? Where did the approach come from — was it borrowed, \
adapted from prior work, or developed to meet a specific deadline or limitation? \
Name the people involved, their backgrounds, and their motivations. Quote them if \
you know their words.

  MOVEMENT 3 — THE CONSEQUENCE: Describe what this led to. Name specific programs, \
operating systems, game engines, languages, or frameworks that used or built on this \
technique. Did this approach become standard practice — something that appeared in \
textbooks or spread across the industry? Who studied or built on this work, and what \
did they produce? Where possible, connect it to something the reader can recognize \
today.

Additional rules:
- Cover the entire file — do not stop after a handful of annotations. Every named \
subroutine, every data structure, every hardware workaround deserves a card.
- Titles must read like the best kind of clickbait — specific, curious, and impossible to \
ignore. They should make the reader lean forward and ask "wait, how?" or "why would \
anyone do that?". Use tension, surprise, constraint, or consequence:
    Good: "The Trick That Made 4KB Feel Like 64KB"
          "How One Programmer Beat the Hardware with Eight Lines"
          "The Bug That Shipped to Ten Million PCs"
          "What Happens When You Run Out of Stack at 3AM"
          "The Lookup Table That Replaced a Math Coprocessor"
    Bad:  "Memory Management Routine"
          "File System Initialization"
          "Sound Driver"
- Make each annotation feel like a discovery. Ask: what would surprise a working \
programmer today about how this was done? What constraint forced an unexpected solution? \
What did the author know that nobody else did? What decision here looks obvious now but \
was completely non-obvious at the time?
- Connect the code to the texture of the era: what did the hardware actually feel like to \
program? What were the other developers doing at the same time? What was the state of \
the art this code surpassed, ignored, or contradicted?
- When you know of a specific anecdote, quote, or war story tied to this code or \
technique, include it. A story about a bug, a deadline, a bet, or a complaint from a \
user is worth more than two sentences of context.
- summary: 3–5 points that are specific to THIS file and what is visible in its lines — \
a technique used here, a data structure defined here, a design decision made here, a \
constraint that shaped this specific code. Do NOT recite program-level background facts \
("MS-DOS was written in six weeks", "Wolfenstein 3D pioneered the FPS genre") — a reader \
already knows the program context. Every point must be something a reader can only learn \
from THIS file. Include real Wikipedia URLs.
- In MOVEMENT 3, always name at least one concrete successor: a specific product, engine, \
language, or system influenced by this technique. "It influenced later games" is not \
enough — name the games, the developers who built on this work, the techniques that \
became standard practice
- Do not end any paragraph with: "This underscores", "This highlights", "This reflects", \
"This reinforces", "This aligns with", "This exemplifies", "It is worth noting", \
"It is important to note"
- Write in present tense for descriptions of what the code does; past tense for history
- Be specific: name the people, the machines, the years, the dollar amounts, the deadlines
- FACTUAL ACCURACY: Avoid unsupported superlatives. Only assert that something was \
"the first" or "pioneered" something if you are certain of this from well-documented \
history. When in doubt, prefer "among the earliest", "one of the first", or "influential \
in popularizing" over absolute claims. Do not describe a program as "inventing" a genre \
or technique if notable predecessors existed.
"""


def _is_c_like(language: str) -> bool:
    """Return True for C, C++, and mixed C/assembly language strings.

    Matches the same logic as range_fixer._is_c_like so that files tagged
    "C, x86 Assembly" use the C landmark extractor rather than the noisier
    ASM extractor, which would treat type keywords like `unsigned` as labels.
    """
    lang = language.lower()
    return (
        any(t in lang for t in ("c++", "c/c++", " c ", "c,", "objective-c"))
        or lang in ("c", "c++")
    )


def _c_landmarks(code_lines: list[str]) -> list[tuple[int, int, str]]:
    """Return (1-indexed start_line, 1-indexed end_line, name) for every
    top-level block in a C/C++ file (functions, struct/class definitions).

    start_line: first non-blank, non-preprocessor line of the declaration
    end_line:   line containing the closing } that returns brace depth to 0
    """
    _ident_re = _re.compile(r'\b([A-Za-z_]\w*)\s*\(')

    depth = 0
    in_block_comment = False
    transitions: list[tuple[int, str]] = []   # (0-indexed line, 'open'|'close')

    for i, raw in enumerate(code_lines):
        j = 0
        while j < len(raw):
            if in_block_comment:
                if raw[j:j+2] == '*/':
                    in_block_comment = False
                    j += 2
                else:
                    j += 1
            elif raw[j:j+2] == '//':
                break
            elif raw[j:j+2] == '/*':
                in_block_comment = True
                j += 2
            elif raw[j] in ('"', "'"):
                q = raw[j]; j += 1
                while j < len(raw):
                    if raw[j] == '\\': j += 2
                    elif raw[j] == q:  j += 1; break
                    else:              j += 1
            elif raw[j] == '{':
                if depth == 0:
                    transitions.append((i, 'open'))
                depth += 1
                j += 1
            elif raw[j] == '}':
                depth -= 1
                if depth == 0:
                    transitions.append((i, 'close'))
                j += 1
            else:
                j += 1

    # Pair open/close transitions into blocks
    result = []
    opens = [t for t in transitions if t[1] == 'open']
    closes = [t for t in transitions if t[1] == 'close']
    for (open_i, _), (close_i, _) in zip(opens, closes):
        # Walk back from the { to find the start of the declaration
        sig_start = open_i
        for k in range(open_i - 1, max(-1, open_i - 8), -1):
            s = code_lines[k].strip()
            if not s or s.startswith('#') or s == '{':
                break
            sig_start = k

        # Extract the most plausible name: last identifier-before-( on sig lines
        name = "?"
        for k in range(sig_start, open_i + 1):
            for m in _ident_re.finditer(code_lines[k]):
                name = m.group(1)   # keep the last match on the last matching line

        result.append((sig_start + 1, close_i + 1, name))

    return result


def _c_landmarks_block(landmarks: list[tuple[int, int, str]], total_lines: int,
                       density_denominator: int = None) -> str:
    """Format C/C++ function boundary table for injection into the prompt."""
    if not landmarks:
        return ""

    denom = density_denominator if density_denominator is not None else total_lines
    if len(landmarks) > denom / 8:
        return ""   # too dense (e.g. heavily macro-expanded header)

    lines = ["C/C++ function and block boundaries — exact line numbers:"]
    for start, end, name in landmarks:
        lines.append(f"  Lines {start:4d}–{end:4d}: {name}")
    lines.append(
        "\nIMPORTANT: Use these exact line numbers as line_start and line_end. "
        "Do NOT count lines yourself."
    )
    return "\n".join(lines)


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

    # Pre-parse structural boundaries and inject a landmark table so the model
    # copies exact line numbers rather than counting manually.
    lang = program.get("language", "").lower()
    if _is_c_like(program.get("language", "")):
        c_lm = _c_landmarks(code_lines)
        if c_lm:
            block = _c_landmarks_block(c_lm, len(code_lines))
            if block:
                context_parts.append("")
                context_parts.append(block)
    elif "assembly" in lang or "asm" in lang:
        landmarks = _asm_landmarks(code_lines)
        if landmarks:
            context_parts.append("")
            context_parts.append(_landmarks_block(landmarks, len(code_lines)))

    user_content = "\n".join(context_parts) + "\n\n" + numbered

    return [
        {"role": "system", "content": _SYSTEM},
        {"role": "user", "content": user_content},
    ]


def build_chunk_prompt(
    program: dict,
    file_cfg: dict,
    code_lines: list[str],
    chunk_start: int,   # 1-indexed, inclusive
    chunk_end: int,     # 1-indexed, inclusive
    chunk_num: int,     # 1-indexed
    total_chunks: int,
) -> list[dict]:
    """Build a prompt for one chunk of a large file.

    Only the lines chunk_start..chunk_end are sent, but with their original
    (file-level) line numbers preserved so line_start/line_end in the response
    refer to the full file, not the chunk.
    """
    chunk_lines = code_lines[chunk_start - 1 : chunk_end]
    numbered = "\n".join(
        f"{chunk_start + i:4d}  {line}"
        for i, line in enumerate(chunk_lines)
    )

    context_parts = [
        f"Program: {program['title']} ({program['year']})",
        f"Author: {program['author']}",
        f"Language: {program['language']}",
        f"File: {file_cfg['path']}",
        f"Chunk: {chunk_num} of {total_chunks} "
        f"(lines {chunk_start}–{chunk_end} of {len(code_lines)} total). "
        f"Annotate every section within lines {chunk_start}–{chunk_end} only. "
        f"All line_start and line_end values must be within this range.",
    ]
    if program.get("context"):
        context_parts.append(f"Historical context: {program['context']}")
    if file_cfg.get("context"):
        context_parts.append(f"File context: {file_cfg['context']}")

    lang = program.get("language", "").lower()
    chunk_size = chunk_end - chunk_start + 1
    if _is_c_like(program.get("language", "")):
        c_lm = _c_landmarks(code_lines)
        chunk_c_lm = [(s, e, n) for s, e, n in c_lm
                      if s >= chunk_start and e <= chunk_end]
        if chunk_c_lm:
            block = _c_landmarks_block(chunk_c_lm, chunk_end,
                                       density_denominator=chunk_size)
            if block:
                context_parts.append("")
                context_parts.append(block)
    elif "assembly" in lang or "asm" in lang:
        landmarks = _asm_landmarks(code_lines)
        chunk_landmarks = [(ln, name) for ln, name in landmarks
                           if chunk_start <= ln <= chunk_end]
        if chunk_landmarks:
            block = _landmarks_block(
                chunk_landmarks,
                chunk_end,
                density_denominator=chunk_size,
            )
            if block:
                context_parts.append("")
                context_parts.append(block)

    user_content = "\n".join(context_parts) + "\n\n" + numbered
    return [
        {"role": "system", "content": _SYSTEM},
        {"role": "user", "content": user_content},
    ]
