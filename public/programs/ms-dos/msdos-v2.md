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
description: "The foundational source code for MS-DOS 2.0, a pivotal operating system that shaped the PC era."

summary:
  - point: "MS-DOS 2.0 introduced subdirectories and file handles, inspired by Unix."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Tim Paterson's original 86-DOS evolved into MS-DOS, licensed to IBM for the PC."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "The source code was released by the Computer History Museum in 2014."
    link: "https://www.computerhistory.org/press/ms-dos-source-code/"
    link_label: "Computer History Museum"
  - point: "MS-DOS 2.0 added Unix-inspired features like pipes and device drivers."
    link: "https://en.wikipedia.org/wiki/MS-DOS#Version_2.x"
    link_label: "MS-DOS 2.x"
  - point: "Microsoft's licensing strategy made MS-DOS the dominant OS of the 1980s."
    link: "https://en.wikipedia.org/wiki/MS-DOS#History"
    link_label: "MS-DOS History"

enhancements:
  - id: "msdos-name-declaration"
    line_start: 2
    line_end: 12
    title: "A NAME directive that defined an era"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The NAME directive at line 2 declares the program identifier as 'MSDOS_2,' marking this file as part of MS-DOS version 2.0. This simple declaration is the entry point for the assembler, linking the source code to its historical identity. At this moment, the programmer is establishing the foundational metadata for the operating system, ensuring that all subsequent modules and routines are correctly associated with the MS-DOS 2.0 build. In 1983, MS-DOS 2.0 represented a major leap forward from version 1.x, incorporating features inspired by Unix, such as hierarchical file systems (subdirectories), file handles, and pipes. These additions were critical to supporting more complex applications and workflows on the IBM PC and compatible systems. The computing landscape at the time was rapidly evolving, with IBM's PC architecture becoming the de facto standard for personal computing. Microsoft, under Bill Gates' leadership, was positioning itself as the software provider for this burgeoning ecosystem, leveraging its licensing rights to distribute MS-DOS to a wide array of OEMs. The NAME directive is a small but symbolic part of this transformation. It reflects the modular design philosophy of MS-DOS 2.0, where individual source files were organized into distinct components like STDSW.ASM, MSHEAD.ASM, and MSDATA.ASM (included in lines 6–8). This modularity facilitated easier updates and adaptations for different hardware configurations, a necessity given the diversity of PC clones entering the market. The modular approach and Unix-inspired features of MS-DOS 2.0 influenced later operating systems, including Windows and OS/2. The hierarchical file system and file handle concepts became standard practices in software development, shaping the way modern operating systems manage data and processes. Microsoft's decision to license MS-DOS widely ensured its dominance throughout the 1980s, setting the stage for the company's future success in the software industry."

---

TITLE   Standard MSDOS
NAME    MSDOS_2

; Number of disk I/O buffers

        INCLUDE STDSW.ASM
        INCLUDE MSHEAD.ASM
        INCLUDE MSDATA.ASM

        END

