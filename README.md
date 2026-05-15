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

## Adding a program

1. Add an entry to `public/catalog.json`
2. Create a folder at `public/programs/{slug}/`
3. Add `.md` files — YAML frontmatter with enhancements, raw source code as the body
