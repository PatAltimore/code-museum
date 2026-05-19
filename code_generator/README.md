# Code Museum — Content Generator

Generates annotated source code files for the Code Museum reader. Given a GitHub repository and a list of source files, it fetches the code, calls an AI model to identify historically significant line ranges, and writes the annotated `.md` files that the reader displays.

## How it works

1. **Add** — `add_program.py` fetches a GitHub repo's file tree and asks the model to identify every historically significant source file, producing a complete `programs.yaml` entry. It then immediately syncs `catalog.json` so the program's source tree is visible as stubs before any content is generated.
2. **Fetch** — downloads source files from GitHub and caches them locally in `source_code/`
3. **Annotate** — sends numbered source lines plus historical context to the model; receives enhancements anchored to specific line ranges
4. **Introduce** — generates a multi-paragraph historical narrative for the program page
5. **Images** — searches Wikipedia Commons for images for each enhancement and the program introduction; a model-based relevance check rejects images that don't directly illustrate the topic
6. **Format** — parses the model's JSON and writes `.md` files with YAML frontmatter and raw source as the body
7. **Range-fix** — sends each enhancement back to the model with a focused code excerpt to verify and correct `line_start`/`line_end`, including any leading comment block that belongs to the section
8. **Sync** — updates `public/catalog.json` with all files (generated and not yet generated), recording each file's repo `path` and `generated` status for the source tree browser

Files already present in `public/programs/` are skipped by default, so the generator is safe to interrupt and re-run.

## Setup

**Requirements:** Python 3.11+

```bash
cd code_generator
pip install -r requirements.txt
cp .env.example .env
```

Edit `.env` and fill in at least one model endpoint. Set `GITHUB_TOKEN` to avoid GitHub API rate limits when using `add_program.py`.

## Environment variables

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
| `GITHUB_TOKEN` | GitHub personal access token (optional, raises rate limit from 60 to 5000 req/hr) |

Only the variables for models you actually want to use need to be set. The generator skips any model whose endpoint or key is missing.

## add_program.py

Add a new GitHub repository to the catalog in one command.

```
python add_program.py URL [OPTIONS]
```

| Option | Description |
|---|---|
| `--dry-run` | Show the generated entry without writing to `programs.yaml` |
| `--config PATH` | Use a different config file (default: `config/programs.yaml`) |

**Example**

```bash
python add_program.py https://github.com/microsoft/BASIC-M6502
```

The script:
1. Fetches repository metadata and the full file tree from GitHub
2. Filters to source files by extension (`.asm`, `.c`, `.bas`, `.lisp`, etc.)
3. Asks the model to identify every historically significant file and write a complete `programs.yaml` entry — slug, title, author, year, language, description, historical context, and a list of files with per-file descriptions and repo paths
4. Prints the generated YAML for review
5. Appends it to `config/programs.yaml`
6. Immediately syncs `catalog.json` so the program's source tree is visible as stubs (all files with `generated: false`) before any content is generated

After adding a program, generate its content:

```bash
python generator.py --program basic-m6502
```

## generator.py

The main entry point for content generation.

```
python generator.py [OPTIONS]
```

| Option | Description |
|---|---|
| `--program SLUG` | Only process this program (e.g. `prince-of-persia`) |
| `--file SLUG` | Only process this file within a program (e.g. `sound`). Requires `--program` |
| `--force` | Regenerate files and introductions even if they already exist on disk |
| `--intro-only` | Only generate program introductions; skip file annotation generation |
| `--find-images` | Backfill Wikipedia Commons images in all existing files and exit |
| `--replace-images` | Clear and re-fetch all enhancement images (replaces bad ones); implies `--find-images` |
| `--program-image` | Fetch or replace the program intro image only; skip file images |
| `--no-images` | Skip all Wikipedia Commons image fetching during generation |
| `--file-images` | Also fetch per-enhancement images during generation (off by default) |
| `--fix-ranges` | Post-process existing .md files to correct enhancement line ranges and exit (also runs automatically after each generated file) |
| `--dry-run` | Fetch source and build prompts, but do not call the model |
| `--sync-catalog` | Update `public/catalog.json` from disk and exit without generating |
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

Regenerate a file and its introduction (overwrite existing):
```bash
python generator.py --program zork --force
```

Generate only the program introduction:
```bash
python generator.py --program prince-of-persia --intro-only
```

Regenerate an existing introduction:
```bash
python generator.py --program prince-of-persia --intro-only --force
```

Generate annotations without fetching any images (faster):
```bash
python generator.py --program ms-dos --no-images
```

Generate annotations and also fetch per-enhancement images:
```bash
python generator.py --program ms-dos --file-images
```

Check what prompts would be sent without calling the model:
```bash
python generator.py --dry-run
```

Correct line ranges in all existing files (run once after generation):
```bash
python generator.py --fix-ranges
```

Fix ranges for one program only:
```bash
python generator.py --fix-ranges --program prince-of-persia
```

Rebuild `catalog.json` after manually editing or adding `.md` files:
```bash
python generator.py --sync-catalog
```

## find_images.py

Fetches Wikipedia Commons images for program pages and enhancement cards. During generation the program-level image is always fetched; per-enhancement images are only fetched when `--file-images` is passed. Can also be run standalone to backfill images in existing files.

```bash
# Backfill images across all programs (via generator)
python generator.py --find-images

# Backfill images for one program
python generator.py --find-images --program prince-of-persia

# Run standalone
python find_images.py
python find_images.py --program zork
```

**Image search priority per enhancement:**
1. Wikipedia pageimages API — the curated lead image for the linked article (trusted unconditionally)
2. Wikimedia Commons search using the Wikipedia article title — relevance-checked
3. Wikimedia Commons search using the enhancement card title — relevance-checked
4. Skip if all fail or none pass the relevance check

**Relevance filtering:** Tiers 2 and 3 results are passed to the model with a YES/NO prompt before being saved. Images that don't directly illustrate the enhancement topic (e.g. a photo of a beehive turning up for a "honeycomb data structure" annotation) are rejected. Tier 1 results are trusted without checking — Wikipedia's curated lead images are reliable. The check fails open: if the model call errors, the image is accepted rather than silently dropped.

Program-level images (shown on the program introduction page) are searched by program title and are also relevance-checked.

## config/programs.yaml

Defines every program and source file the generator knows about.

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
  max_tokens: 16384
```

**Program entry:**

```yaml
- slug: prince-of-persia         # used in URLs and file paths
  title: "Prince of Persia"
  subtitle: "Apple II, 1989"
  author: "Jordan Mechner"
  year: 1989
  language: "6502 Assembly"
  description: "..."             # one-sentence catalog card
  github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II"
  github_repo: "jmechner/Prince-of-Persia-Apple-II"
  github_branch: "master"
  context: >                     # historical context passed to the model
    6502 assembly for the Apple IIe/IIc...
  files:
    - order: 1                   # display order in the source tree
      slug: sound                # used in URLs and file paths
      title: "SOUND.S"           # displayed in the reader
      path: "01 POP Source/Source/SOUND.S"   # exact path within the GitHub repo
      description: "..."
      context: "..."             # optional, file-specific context for the model
```

The `path` field drives the source tree browser in the reader — files are grouped into their repo directory hierarchy automatically. Files whose `.md` has not yet been generated appear as plain stubs in the tree; generated files appear as annotated links.

**Adding a new program:** run `add_program.py` with the GitHub URL — it writes the entry automatically and syncs the catalog immediately. Or add an entry manually to `programs.yaml`, then run `python generator.py --sync-catalog` followed by `python generator.py --program your-slug`.

## Other scripts

### catalog_sync.py

Reads `programs.yaml` and updates `public/catalog.json` to reflect the current state of every file. Unlike previous versions that only tracked generated files, catalog_sync now includes **all** files from `programs.yaml` — both generated and not yet generated. Each file entry carries:

- `path` — the file's path within the GitHub repo (drives the source tree browser)
- `generated` — `true` if the `.md` file exists on disk, `false` otherwise

Scalar metadata (title, author, year, language, description, subtitle, github_url) is always synced from yaml. Generated fields (`introduction`, `image_url`, `image_caption`) are preserved and never overwritten by sync. Called automatically after generation; run directly via `generator.py --sync-catalog`.

### fetch_code.py

Downloads source files from GitHub raw URLs and caches them in `source_code/` to avoid repeated network requests. If a file is already cached it is read from disk. Delete the cache directory to force a fresh fetch.

### prompts.py

Builds the system and user messages for file annotation. The system prompt instructs the model to cover the file comprehensively — one annotation per distinct subroutine, algorithm, data structure, or hardware interaction, working top to bottom. Annotation density scales with file size: 5–8 annotations for a 200-line file, up to 50+ for files exceeding 5,000 lines.

For assembly language files, `build_prompt` pre-parses the source in Python to extract every label and procedure entry point with their exact line numbers, and injects a landmark table into the prompt. This eliminates line-counting errors — the model copies pre-computed line numbers from the table rather than counting manually across hundreds of lines.

The `summary` field is explicitly required to contain only facts visible in the specific file being annotated — no program-level background that repeats across every file in the program. Each point must be something a reader learns from these particular lines.

Each annotation follows three movements: the moment (what the code does), the world (hardware, constraints, people, motivations), and the consequence (what it led to). Modify this file to adjust the tone, structure, or annotation density.

### intro_prompts.py

Builds the system and user messages for program introductions. The prompt instructs the model to write a 4–6 paragraph historical narrative covering the moment of creation, the computing landscape at the time, the authors by name, and lasting consequence.

### formatter.py

Parses the model's JSON response (tolerating truncation and markdown fences) and assembles the final `.md` file: YAML frontmatter followed by the raw source code as the body. The YAML parser in the reader requires all string values to be double-quoted and single-line, which this module enforces.

### client.py

Wraps the Azure OpenAI and Azure AI Foundry APIs into a single `ModelClient` with automatic fallback and retry. Tries models in the order defined in `programs.yaml`. Handles rate limits (429) with exponential backoff, server errors (5xx) with linear backoff, and content filter rejections (400) by aborting the chain immediately.

### range_fixer.py

Post-processing pass that corrects `line_start` and `line_end` for every enhancement in a `.md` file. For each enhancement it sends the model a focused excerpt — 30 context lines above and below the current range — along with any comment block found immediately above the range start. The model reads the comment content and decides whether it belongs to the section, then returns corrected boundaries. Only the two integer fields are rewritten; all other metadata is untouched.

Runs automatically after each file is generated. Also available as a standalone pass via `--fix-ranges` to backfill existing files.

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
    image_url: "https://upload.wikimedia.org/..."
    image_caption: "..."
    content: "250–300 word narrative"
---

; raw source code follows
```

`line_start` and `line_end` are 1-indexed line numbers in the source code body. The reader highlights those lines and displays the enhancement panel immediately after them.

Program introductions and images are stored in `public/catalog.json` alongside the file index:

```json
{
  "slug": "prince-of-persia",
  "introduction": "paragraph 1\n\nparagraph 2\n\n...",
  "image_url": "https://upload.wikimedia.org/...",
  "image_caption": "..."
}
```
