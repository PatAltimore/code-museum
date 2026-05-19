---
title: "MSDOS.ASM (v2.0)"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/MSDOS.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/MSDOS.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "msdos-v2"
order: 18
description: "The foundational source code for MS-DOS 2.0, a pivotal operating system that shaped personal computing history."

summary:
  - point: "MS-DOS 2.0 introduced subdirectories, file handles, and pipes, marking a major evolution from version 1.x."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Tim Paterson's original 86-DOS code served as the basis for Microsoft's acquisition and eventual rewrite into MS-DOS."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "The modular structure of MS-DOS 2.0, evident in its use of INCLUDE directives, reflects its Unix-inspired design."
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "msdos-2-name-section"
    line_start: 2
    line_end: 12
    title: "A name that defined personal computing"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The NAME directive at line 2 establishes the identity of this source file: MSDOS_2. This simple declaration belies the significance of what follows. MS-DOS 2.0 was not merely an incremental update; it was a near-complete rewrite of the operating system, inspired by Unix and XENIX. By 1983, personal computing was exploding, driven by the success of the IBM PC and its clones. Microsoft, having secured the rights to license MS-DOS to any OEM, was rapidly becoming the dominant software provider for these machines. The NAME directive is a quiet nod to this transformation — the operating system that would soon be synonymous with the personal computer revolution. In the early 1980s, Microsoft and Tim Paterson faced a unique challenge: how to evolve MS-DOS into a system that could support more advanced features like hierarchical file systems and multitasking-like capabilities. The modular structure of this file, evident in the INCLUDE directives that follow, reflects the influence of Unix — a system admired for its flexibility and power. MS-DOS 2.0 borrowed concepts like subdirectories and file handles, adapting them for the constraints of the IBM PC's hardware. The consequences of this rewrite were profound. MS-DOS 2.0 became the standard operating system for IBM PCs and their clones, solidifying Microsoft's dominance in the software industry. Its modular design principles influenced countless successors, including Windows, which would eventually supplant MS-DOS. Developers who studied this code learned techniques for managing limited resources and structuring software for extensibility — lessons that shaped the industry for decades. Without MS-DOS 2.0, the trajectory of personal computing might have been very different."

---

TITLE   Standard MSDOS
NAME    MSDOS_2

; Number of disk I/O buffers

        INCLUDE STDSW.ASM
        INCLUDE MSHEAD.ASM
        INCLUDE MSDATA.ASM

        END

