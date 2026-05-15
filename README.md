# Code Museum

A code reader for historically significant open-source programs. Each featured file is presented with inline annotations that explain what the code does, why it matters, and the story behind it — a documentary in source code form.

## Featured programs

### Prince of Persia (Apple II, 1989)
Jordan Mechner's solo four-year project, written in 6502 assembly for a machine with 128K of RAM. The source code was recovered in 2012 from 22-year-old floppy disks. Featured files: the one-bit sound engine, the two-stage boot loader, the rotoscoping-encoded animation state machine, and the top-level game controller.

### Zork (PDP-10 / ITS, 1977–1979)
Built organically at MIT by four collaborators in MDL (Muddle), a Lisp dialect. Played live on ARPANET during development. Its natural language parser went through 93 iterations; its sarcastic error messages set a template for conversational interfaces still in use today. Released open-source by MIT in 2025. Featured files: the type system, the parser, the dungeon world definition, and the action handlers.

### MS-DOS (IBM PC, 1981–1983)
Written in roughly six weeks by Tim Paterson at Seattle Computer Products in 1980, acquired by Microsoft for $25,000, and licensed to IBM for the August 1981 PC launch — then to every IBM clone maker on earth. Within a year Microsoft had licensed it to over 70 manufacturers. This single non-exclusive deal transformed Microsoft from a $7M/year languages company into the dominant force in personal computing. Featured files: the MSDOS.ASM kernel with its complete revision history, COMMAND.ASM with "Abort, Retry, Ignore?" in its original form, XENIX.ASM (the Unix layer that gave DOS subdirectories and pipes), and MSCODE.ASM (the v2.0 dispatcher containing the comment "Here comes multitasking!!!"). Source first released to the Computer History Museum in March 2014; currently MIT licensed.

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

The body of each file is the raw source code. The reader splits the code into sections at enhancement boundaries, highlights the annotated lines, and inserts expandable panels inline.

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
├── index.html          # Single-page app shell (PWA)
├── catalog.json        # Index of programs and files
├── js/app.js           # Hash-routed SPA, YAML parser, code renderer
├── css/style.css       # Dark code-editor theme
├── sw.js               # Service worker for offline use
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
├── client.py           # Azure AI Foundry client with fallback chain
├── fetch_code.py       # Downloads source files from GitHub (cached)
├── prompts.py          # Prompt construction for code analysis
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

### Usage

```bash
# Generate all files not yet on disk
python generator.py

# Generate a specific program
python generator.py --program prince-of-persia

# Generate a specific file
python generator.py --program ms-dos --file sysinit

# Regenerate an existing file
python generator.py --program zork --file rooms --force

# Preview prompts without calling the API
python generator.py --dry-run

# Sync catalog.json without generating anything
python generator.py --sync-catalog
```

Files already present in `public/programs/` are skipped unless `--force` is passed. After generation, `catalog.json` is updated automatically.

### Adding a program

1. Add an entry to `config/programs.yaml` with `github_repo`, `github_branch`, and a `files` list
2. Run `python generator.py --program your-slug`
3. The generator fetches the source from GitHub, calls the model, and writes the `.md` files
