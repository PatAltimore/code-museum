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
description: "The foundational file for MS-DOS 2.0, marking a pivotal moment in personal computing history."

summary:
  - point: "MS-DOS 2.0 introduced Unix-inspired features like subdirectories and file handles."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Tim Paterson's original 86-DOS formed the basis for Microsoft's operating system."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "The source code was publicly released by the Computer History Museum in 2014."
    link: "https://computerhistory.org/blog/ms-dos-source-code/"
    link_label: "Computer History Museum"

enhancements:
  - id: "msdos-2-name-section"
    line_start: 2
    line_end: 2
    title: "Why 'NAME MSDOS_2' Changed Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'NAME MSDOS_2' directive at line 2 sets the symbolic name for this module, marking it as part of MS-DOS 2.0. This simple declaration ties the file to a historic rewrite of the operating system that transformed personal computing. MS-DOS 2.0 was a major departure from its predecessor, incorporating features inspired by Unix, such as hierarchical directories, file handles, and device drivers. These additions made the system far more versatile and capable, paving the way for widespread adoption by businesses and OEMs. In 1983, the computing landscape was rapidly evolving. IBM's PC had established itself as a dominant force, and Microsoft was positioning MS-DOS as the standard operating system for the burgeoning personal computer market. The rewrite was driven by the need to support more complex applications and hardware configurations. Paterson's original 86-DOS had been a quick solution for Seattle Computer Products, but MS-DOS 2.0 was a deliberate effort to create a robust, scalable system. The inclusion of Unix-like features reflected Microsoft's growing ambition to compete in the enterprise space, where Unix was already a respected standard. The consequences of this rewrite were profound. MS-DOS 2.0 became the foundation for countless software applications and hardware systems, influencing the design of later operating systems like Windows. Its hierarchical file system and device driver model became industry standards, shaping the expectations of developers and users alike. The decision to license MS-DOS to multiple OEMs ensured its dominance, making it the most widely used operating system of its time. Today, the legacy of MS-DOS 2.0 lives on in the structure and conventions of modern computing systems."

---

```asm
TITLE   Standard MSDOS
NAME    MSDOS_2

; Number of disk I/O buffers

        INCLUDE STDSW.ASM
        INCLUDE MSHEAD.ASM
        INCLUDE MSDATA.ASM

        END


```
