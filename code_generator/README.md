# Code Museum — Content Generator

Generates annotated source code files for the Code Museum reader. Given a GitHub repository and a list of source files, it fetches the code, calls an AI model to identify historically significant line ranges, and writes the annotated `.md` files that the reader displays.

## How it works

1. **Fetch** — downloads the source file from GitHub and caches it locally in `source_code/`
2. **Prompt** — sends the numbered source lines plus historical context to the model
3. **Format** — parses the model's JSON response and writes a `.md` file with YAML frontmatter and the raw source as the body
4. **Sync** — updates `public/catalog.json` with any newly generated files

Files already present in `public/programs/` are skipped by default, so the generator is safe to interrupt and re-run.

## Setup

**Requirements:** Python 3.11+

```bash
cd code_generator
pip install -r requirements.txt
cp .env.example .env
```

Edit `.env` and fill in at least one model endpoint. The generator tries models in priority order and falls back automatically if one fails or is unavailable.

## Environment variables

Defined in `.env` (loaded automatically at runtime):

| Variable | Description |
|---|---|
| `AZURE_OPENAI_ENDPOINT` | Azure OpenAI endpoint URL |
| `AZURE_OPENAI_KEY` | Azure OpenAI API key |
| `AZURE_OPENAI_API_VERSION` | API version (optional, defaults to `2024-12-01-preview`) |
| `AZURE_LLAMA_ENDPOINT` | Azure AI Foundry endpoint for Llama 3.3 70B |
| `AZURE_LLAMA_KEY` | API key for Llama |
| `AZURE_MISTRAL_ENDPOINT` | Azure AI Foundry endpoint for Mistral Large 3 |
| `AZURE_MISTRAL_KEY` | API key for Mistral |
| `AZURE_PHI4_ENDPOINT` | Azure AI Foundry endpoint for Phi-4 (optional) |
| `AZURE_PHI4_KEY` | API key for Phi-4 (optional) |

Only the variables for models you actually want to use need to be set. The generator skips any model whose endpoint or key is missing.

## generator.py

The main entry point.

```
python generator.py [OPTIONS]
```

| Option | Description |
|---|---|
| `--program SLUG` | Only process this program (e.g. `prince-of-persia`) |
| `--file SLUG` | Only process this file within a program (e.g. `sound`). Requires `--program` |
| `--force` | Regenerate a file even if it already exists on disk |
| `--dry-run` | Fetch the source and build the prompt, but do not call the model |
| `--sync-catalog` | Update `public/catalog.json` from disk and exit without generating anything |
| `--no-catalog-sync` | Skip the automatic catalog update after generation |
| `--config PATH` | Use a different config file (default: `config/programs.yaml`) |

**Examples**

Generate everything not yet on disk:
```bash
python generator.py
```

Generate all files for a single program:
```bash
python generator.py --program ms-dos
```

Generate one specific file:
```bash
python generator.py --program ms-dos --file sysinit
```

Regenerate a file that already exists:
```bash
python generator.py --program zork --file rooms --force
```

Check what prompts would be sent without calling the model:
```bash
python generator.py --dry-run
```

Rebuild `catalog.json` after manually editing or adding `.md` files:
```bash
python generator.py --sync-catalog
```

## config/programs.yaml

Defines every program and source file the generator knows about. The generator reads this file at startup.

**Top-level keys:**

```yaml
output_dir: ../public/programs   # where .md files are written

models:
  primary: gpt-4o                # tried first
  fallback:
    - Llama-3.3-70B-Instruct     # tried if primary fails
    - Mistral-Large-3

generation:
  temperature: 0.3
  max_tokens: 4096
  default_max_lines: 200         # lines of source included per file
```

**Program entry:**

```yaml
- slug: prince-of-persia         # used in URLs and file paths
  title: "Prince of Persia"
  subtitle: "Apple II, 1989"
  author: "Jordan Mechner"
  year: 1989
  language: "6502 Assembly"
  description: "..."             # shown on the program page
  github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II"
  github_repo: "jmechner/Prince-of-Persia-Apple-II"
  github_branch: "master"
  context: >                     # historical context passed to the model
    6502 assembly for the Apple IIe/IIc...
  files:
    - order: 1                   # display order in the file list
      slug: sound                # used in URLs and file paths
      title: "SOUND.S"           # displayed in the reader
      path: "01 POP Source/Source/SOUND.S"   # path within the GitHub repo
      description: "..."
      max_lines: 200             # optional, overrides default_max_lines
      context: "..."             # optional, file-specific context for the model
```

**Adding a new program:** add an entry to `programs.yaml`, then run `python generator.py --program your-slug`.

**Adding files to an existing program:** add entries to the program's `files` list, then run `python generator.py --program your-slug`.

## Other scripts

### catalog_sync.py

Reads `programs.yaml` and updates `public/catalog.json` to reflect which `.md` files are present on disk. Called automatically after generation. Run directly via `generator.py --sync-catalog`.

### fetch_code.py

Downloads source files from GitHub raw URLs and caches them in `source_code/` to avoid repeated network requests. If a file is already cached it is read from disk. Delete the cache directory to force a fresh fetch.

### prompts.py

Builds the system and user messages sent to the model. The system prompt instructs the model to write in a documentary style — grounding each annotation in the historical moment the code was written, the constraints the programmer faced, and the significance of what they produced. Modify this file to adjust the tone or structure of generated content.

### formatter.py

Parses the model's JSON response (tolerating truncation and markdown fences) and assembles the final `.md` file: YAML frontmatter followed by the raw source code as the body. The YAML parser in the reader requires all string values to be double-quoted and single-line, which this module enforces.

### client.py

Wraps the Azure OpenAI and Azure AI Foundry APIs into a single `ModelClient` with automatic fallback and retry. Tries models in the order defined in `programs.yaml`. Handles rate limits (429) with exponential backoff, server errors (5xx) with linear backoff, and content filter rejections (400) by aborting the chain immediately.

### checkpointer.py

Checks whether a `.md` file already exists before generating it. A file is considered done if it exists on disk regardless of content. Pass `--force` to override.

## Output format

Each generated file is written to `public/programs/{program-slug}/{file-slug}.md` and contains:

```
---
title: "SOUND.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SOUND.S"
language: "6502 Assembly"
github_url: "https://github.com/..."
year: 1989
author: "Jordan Mechner"
slug: "sound"
order: 1
description: "..."

summary:
  - point: "..."
    link: "https://en.wikipedia.org/wiki/..."
    link_label: "..."

enhancements:
  - id: "unique-id"
    line_start: 1
    line_end: 20
    title: "..."
    wikipedia_url: "https://en.wikipedia.org/wiki/..."
    image_url: ""
    image_caption: ""
    content: "250–300 word narrative"
---

; raw source code follows
```

`line_start` and `line_end` are 1-indexed line numbers in the source code body. The reader highlights those lines and displays the enhancement panel immediately after them.
