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
description: "The foundational assembly file for MS-DOS 2.0, showcasing the evolution of early PC operating systems."

summary:
  - point: "MS-DOS 2.0 marked a major shift toward Unix-inspired features like subdirectories and file handles."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Tim Paterson's original 86-DOS design was rapidly adapted by Microsoft for the IBM PC."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "The modular structure of MS-DOS 2.0, seen in the INCLUDE directives, reflects its extensibility for OEMs."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "name-declaration-msdos-2"
    line_start: 1
    line_end: 10
    title: "Why MS-DOS 2.0 Declared Its Name Early"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section begins with the declaration of the program name, 'MSDOS_2', using the NAME directive. In assembly language, NAME serves as a marker for the program's identity, often used by linkers and debuggers to associate the code with its intended purpose. Tim Paterson's original 86-DOS design was minimalistic, but by the time MS-DOS 2.0 was developed, the operating system had grown to accommodate features inspired by Unix, such as hierarchical file systems and device independence. Declaring the program name early reflects the structured approach Microsoft adopted as MS-DOS evolved from a quick-and-dirty solution into a robust, modular operating system. In 1983, the computing landscape was shifting rapidly. IBM's dominance in the PC market meant that MS-DOS had to be adaptable for a wide range of hardware configurations. The modularity seen here, with the inclusion of external files like 'STDSW.ASM', 'MSHEAD.ASM', and 'MSDATA.ASM', highlights Microsoft's strategy to make MS-DOS extensible for OEMs. These included hardware manufacturers who could tailor the operating system to their specific needs, a key factor in MS-DOS's widespread adoption. This approach influenced future operating systems, including Windows, which retained modularity and extensibility as core principles. The modular design also inspired other software ecosystems, such as Linux, which embraced similar principles of adaptability and open architecture. Microsoft's decision to license MS-DOS to multiple OEMs, combined with its modular structure, laid the groundwork for the company's dominance in the PC software market for decades."

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