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
description: "The foundational assembly code for MS-DOS 2.0, marking a pivotal moment in personal computing history."

summary:
  - point: "MS-DOS 2.0 introduced subdirectories, file handles, and pipes, inspired by Unix."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Tim Paterson's original 86-DOS served as the basis for MS-DOS."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "Microsoft's licensing strategy turned MS-DOS into a de facto standard for PCs."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS Licensing"
  - point: "Source code for MS-DOS was released by the Computer History Museum in 2014."
    link: "https://www.computerhistory.org/press/ms-dos-source-code/"
    link_label: "Computer History Museum"
  - point: "MS-DOS 2.0 was a near-complete rewrite, adding Unix-inspired features."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "Unix Influence"

enhancements:
  - id: "msdos-2-name-section"
    line_start: 2
    line_end: 12
    title: "A Name That Defined an Era"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The NAME directive at line 2 establishes the program as 'MSDOS_2,' signaling the second major version of the operating system. This small but significant declaration encapsulates the evolution of MS-DOS from its humble beginnings as 86-DOS, written by Tim Paterson in 1980. By 1983, MS-DOS had become the backbone of the IBM PC ecosystem, and version 2.0 marked a turning point. Inspired by Unix, this rewrite introduced advanced features like hierarchical directories, file handles, and pipes, which were groundbreaking for personal computers at the time. The computing landscape in 1983 was rapidly expanding. IBM's PC had set the standard for hardware, and MS-DOS was becoming the software platform of choice. Microsoft, under Bill Gates, had negotiated a licensing deal that allowed them to sell MS-DOS to other manufacturers, ensuring its dominance. The decision to rewrite MS-DOS for version 2.0 was driven by the need to support more complex applications and hardware, as well as to compete with emerging operating systems like CP/M-86 and Unix variants. This NAME directive is more than a technical label; it represents the ambitions of Microsoft and the growing importance of software ecosystems. MS-DOS 2.0's innovations laid the groundwork for decades of PC software development. The hierarchical directory structure, for instance, became a standard feature in operating systems, influencing everything from Windows to Linux. While the code itself may seem simple, its implications were profound, shaping the future of personal computing."

---

TITLE   Standard MSDOS
NAME    MSDOS_2

; Number of disk I/O buffers

        INCLUDE STDSW.ASM
        INCLUDE MSHEAD.ASM
        INCLUDE MSDATA.ASM

        END

