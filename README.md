# Code Museum

A code reader for historically significant open-source programs. Each featured file is presented with inline annotations that explain what the code does, why it matters, and the story behind it — a documentary in source code form.

## Featured programs

### Prince of Persia (Apple II, 1989)
Jordan Mechner's solo four-year project, written in 6502 assembly for a machine with 128K of RAM. The source code was recovered in 2012 from 22-year-old floppy disks. Featured files: the one-bit sound engine, the two-stage boot loader, the rotoscoping-encoded animation state machine, and the top-level game controller.

### Zork (PDP-10 / ITS, 1977–1979)
Built organically at MIT by four collaborators in MDL (Muddle), a Lisp dialect. Played live on ARPANET during development. Its natural language parser went through 93 iterations; its sarcastic error messages set a template for conversational interfaces still in use today. Released open-source by MIT in 2025.

### MS-DOS (IBM PC, 1981–1983)
Written in roughly six weeks by Tim Paterson at Seattle Computer Products in 1980, acquired by Microsoft for $25,000, and licensed to IBM for the August 1981 PC launch — then to every IBM clone maker on earth. Within a year Microsoft had licensed it to over 70 manufacturers. Source first released to the Computer History Museum in March 2014; currently MIT licensed.

### Microsoft BASIC for 6502 (1977)
Written by Bill Gates and Paul Allen for the MOS Technology 6502 processor, fitting a complete BASIC interpreter into 4KB of ROM. Licensed to dozens of manufacturers and shipped in the Apple II, Commodore PET, and OSI machines — the software layer that made the microcomputer revolution possible.

### Wolfenstein 3D (MS-DOS, 1992)
id Software's landmark first-person shooter, written in C and x86 assembly by John Carmack, John Romero, and Tom Hall. The raycasting engine, the sound driver, and the memory manager became the blueprint for every DOS-era game that followed.

### DOOM (PC, 1993)
id Software's follow-up redefined what a PC could do. John Carmack's BSP renderer, fixed-point math engine, and peer-to-peer network code shipped on a $5 million budget and were played by an estimated 10 million people within two years. Released open-source in 1997.

### Quake (PC, 1996)
The first id Software game with true 3D environments. Michael Abrash's span-based edge rasterizer, John Carmack's BSP/PVS system, and the first mainstream OpenGL game renderer. Released under the GPL in 1999 and the foundation of every id Tech engine since.

## How it works

Each program lives in `public/programs/{slug}/` as a set of Markdown files. The YAML frontmatter carries metadata and a list of enhancements — annotations anchored to specific line ranges in the source code:

```yaml
enhancements:
  - id: "speaker-hw"
    line_start: 1
    line_end: 15
    title: "One Bit of Sound"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: "https://upload.wikimedia.org/..."
    image_caption: "..."
    content: "The Apple II had no sound chip..."
```

The body of each file is the raw source code. The reader splits the code into sections at enhancement boundaries, highlights the annotated lines, and inserts expandable panels inline. Each enhancement panel can include a Wikipedia Commons image with attribution. Program pages display a historical introduction with a hero image.

## Reader features

- **Source tree browser** — program pages show files in the repo's actual directory structure. Generated files with annotations are stylized links; files not yet annotated appear as plain stubs in the tree
- **Font size controls** — A− / A+ buttons in the header

## Running locally

Serve the `public/` directory with any static file server:

```bash
npx serve public
```

## Deployment

### Azure Developer CLI (azd)

Provision and deploy to Azure Static Web Apps:

```bash
azd auth login
azd up
```

`azd up` creates a resource group, provisions the Static Web App via `infra/main.bicep`, and deploys the `public/` directory. The deployed URL is printed at the end.

To reprovision infrastructure without redeploying content:

```bash
azd provision
```

To redeploy content without reprovisioning:

```bash
azd deploy
```

### GitHub Actions

The workflow in `.github/workflows/azure-static-web-apps.yml` deploys on every push to `main` and manages preview environments for pull requests.

Add the deployment token as a repository secret:

1. In the Azure portal, open the Static Web App → **Manage deployment token**
2. In GitHub, go to **Settings → Secrets → Actions** and add `AZURE_STATIC_WEB_APPS_API_TOKEN`

## Project structure

```
public/
├── index.html          # Single-page app shell
├── catalog.json        # Index of programs and files
├── js/app.js           # Hash-routed SPA, YAML parser, code renderer
├── css/style.css       # Dark code-editor theme
└── programs/
    ├── prince-of-persia/
    │   ├── sound.md
    │   ├── boot.md
    │   ├── seqtable.md
    │   └── master.md
    ├── zork/
    │   ├── defs.md
    │   ├── np.md
    │   ├── dung.md
    │   └── act1.md
    └── ms-dos/
        ├── msdos.md
        ├── command.md
        ├── xenix.md
        └── mscode.md
```

## Generator

`code_generator/` is a Python pipeline that uses Azure AI Foundry to generate annotated content files from GitHub source code.

```
code_generator/
├── generator.py        # Main CLI
├── add_program.py      # Add a new GitHub repo to the catalog
├── find_images.py      # Fetch Wikipedia Commons images with relevance filtering
├── client.py           # Azure AI Foundry client with fallback chain
├── fetch_code.py       # Downloads source files from GitHub (cached)
├── prompts.py          # Prompt construction for file annotations
├── intro_prompts.py    # Prompt construction for program introductions
├── formatter.py        # Assembles YAML frontmatter + source body
├── catalog_sync.py     # Keeps catalog.json in sync with generated files
├── checkpointer.py     # Skips files that already exist on disk
├── requirements.txt
├── .env.example        # Copy to .env and fill in your keys
└── config/
    └── programs.yaml   # All programs and files — existing + to generate
```

### Setup

```bash
cd code_generator
pip install -r requirements.txt
cp .env.example .env
# fill in AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_KEY (and optionally Llama/Mistral)
```

Set `GITHUB_TOKEN` in `.env` to avoid GitHub API rate limits when using `add_program.py`.

### Adding a program

```bash
python add_program.py https://github.com/microsoft/BASIC-M6502
```

Fetches the repository's file tree from GitHub, asks the model to identify every historically significant source file and write a complete `programs.yaml` entry, then appends it to `config/programs.yaml` and immediately syncs `catalog.json` — so the new program's source tree is visible as stubs before any content is generated. Use `--dry-run` to preview without writing.

After adding, generate content:

```bash
python generator.py --program basic-m6502
```

### Generating content

```bash
# Generate all missing file annotations and introductions
python generator.py

# Generate a specific program
python generator.py --program prince-of-persia

# Generate a specific file
python generator.py --program ms-dos --file sysinit

# Regenerate everything for a program (overwrites existing files and introduction)
python generator.py --program zork --force

# Generate only the program introduction
python generator.py --program prince-of-persia --intro-only

# Regenerate an existing introduction
python generator.py --program prince-of-persia --intro-only --force

# Preview prompts without calling the API
python generator.py --dry-run

# Sync catalog.json without generating anything
python generator.py --sync-catalog
```

### Finding images

The program-level image (shown on the program introduction page) is fetched automatically during generation. Per-enhancement images are skipped by default and must be opted into with `--file-images`. All images are sourced from Wikipedia Commons and filtered for relevance — images the model judges unrelated to the topic are rejected before being saved.

To backfill images for existing files:

```bash
# Fill images across all files
python generator.py --find-images

# Fill images for one program
python generator.py --find-images --program prince-of-persia

# Skip all image fetching during generation
python generator.py --no-images

# Also fetch per-enhancement images during generation
python generator.py --file-images
```

### Generator options

| Option | Description |
|---|---|
| `--program SLUG` | Only process this program |
| `--file SLUG` | Only process this file (requires `--program`) |
| `--force` | Regenerate files and introductions even if they already exist |
| `--intro-only` | Only generate program introductions; skip file annotations |
| `--find-images` | Backfill Wikipedia Commons images in existing files and exit |
| `--replace-images` | Clear and re-fetch all enhancement images (replaces bad ones) |
| `--program-image` | Fetch or replace the program intro image only; skip file images |
| `--no-images` | Skip all image fetching during generation |
| `--file-images` | Also fetch per-enhancement images during generation |
| `--dry-run` | Build prompts without calling the model |
| `--sync-catalog` | Update `catalog.json` from disk and exit |
| `--no-catalog-sync` | Skip the automatic catalog update after generation |
| `--config PATH` | Use a different config file (default: `config/programs.yaml`) |
