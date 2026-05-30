---
title: "VERSION.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/VERSION.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/VERSION.S"
year: 1989
author: "Jordan Mechner"
slug: "version"
order: 29
description: "This file contains version metadata for Prince of Persia, one of the first cinematic platformers, written in 6502 assembly for the Apple II."

summary:
  - point: "Version string embedded directly in assembly code"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Demonstrates the use of ASCII directives in 6502 assembly"
    link: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    link_label: "MOS Technology 6502"
  - point: "Highlights the importance of version tracking in solo-developed software"
    link: "https://en.wikipedia.org/wiki/Software_versioning"
    link_label: "Software versioning"

enhancements:
  - id: "version-string-in-assembly"
    line_start: 7
    line_end: 11
    title: "Why Embed a Version String in Assembly?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Software_versioning"
    image_url: ""
    image_caption: ""
    content: "This section embeds the version string 'Prince of Persia 1.0 9/7/89' directly into the assembly code using the `asc` directive. This string serves as metadata, identifying the software version and its release date. The '@' character following the version string likely acts as a terminator or separator for parsing purposes. In 1989, version tracking was critical but often informal, especially for solo developers like Jordan Mechner. Embedding the version directly in the code ensured that anyone examining the binary could immediately identify its provenance. This was particularly useful for debugging, distribution, and archival purposes, as physical media like floppy disks could easily lose external labels or documentation. The use of ASCII directives (`asc`) reflects the constraints of programming on the Apple II, where memory was limited and every byte mattered. Including human-readable metadata in the binary was a deliberate choice, balancing utility with resource constraints. Mechner's decision to embed this information directly in the code highlights his meticulous approach to development, ensuring clarity and traceability even in a solo project. This practice of embedding version strings became standard in software development, influencing later practices in version control systems like Git, where commit hashes and tags serve a similar purpose. In the gaming industry, version strings are still embedded in executables and used for debugging and patch management. Mechner's attention to detail in Prince of Persia set a precedent for thoughtful software craftsmanship, inspiring generations of developers to prioritize maintainability and clarity in their code."

---

```asm
* version
org = $dfd8
 lst off

 org org

*-------------------------------

TextLine asc "Prince of Persia 1.0  9/7/89"
 lst
 asc "@"
*-------------------------------
 usr $a9,19,$11d8,*-org
 lst off
```