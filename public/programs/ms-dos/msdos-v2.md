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
description: "The foundational source code for MS-DOS v2.0, a pivotal rewrite that shaped personal computing in the 1980s."

summary:
  - point: "MS-DOS v2.0 introduced Unix-inspired features like subdirectories and file handles."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Tim Paterson's original 86-DOS served as the basis for MS-DOS."
    link: "https://en.wikipedia.org/wiki/86-DOS"
    link_label: "86-DOS"
  - point: "Microsoft's licensing strategy made MS-DOS ubiquitous across OEMs."
    link: "https://en.wikipedia.org/wiki/MS-DOS#History"
    link_label: "MS-DOS History"

enhancements:
  - id: "msdos-name-section"
    line_start: 2
    line_end: 12
    title: "A name that defined an era: MSDOS_2"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The NAME directive at line 2 formally identifies this assembly file as 'MSDOS_2,' marking its role in the second major version of MS-DOS. This simple declaration belies the sweeping changes introduced in v2.0, which transformed MS-DOS from a basic single-tasking operating system into something far more versatile and Unix-inspired. By 1983, personal computing was evolving rapidly, and Microsoft needed to adapt to meet the demands of new hardware and software paradigms. Subdirectories, file handles, and device drivers were among the features added in this version, enabling more complex and organized file management. Tim Paterson, who had originally developed 86-DOS at Seattle Computer Products, was now working at Microsoft after the company acquired his creation in 1981. The rewrite for v2.0 was heavily influenced by Unix and XENIX, reflecting Microsoft's growing interest in multi-user and multitasking systems. This was a strategic move to align MS-DOS with emerging standards and to make it more appealing to IBM and other OEMs. The NAME directive also underscores the modularity of the MS-DOS source code. By including external files like STDSW.ASM, MSHEAD.ASM, and MSDATA.ASM, the codebase achieves a level of organization that was critical for maintainability and scalability. These files encapsulate standard switches, header definitions, and data structures, respectively, ensuring that the core logic of MS-DOS remains clean and focused. This section is a quiet but essential starting point for a file that would go on to influence the trajectory of personal computing. The modular design and Unix-inspired enhancements introduced in v2.0 would become foundational for countless operating systems that followed."

---

TITLE   Standard MSDOS
NAME    MSDOS_2

; Number of disk I/O buffers

        INCLUDE STDSW.ASM
        INCLUDE MSHEAD.ASM
        INCLUDE MSDATA.ASM

        END

