---
title: "STDDOS.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v1.25/source/STDDOS.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v1.25/source/STDDOS.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "stddos"
order: 10
description: "This file represents the foundational assembly code for MS-DOS 1.25, a pivotal operating system in personal computing history."

summary:
  - point: "Boolean flags control compilation for IBM or Microsoft versions."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "HIGHMEM flag determines memory relocation strategy."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Disk testing mode introduces re-entrant behavior for debugging."
    link: "https://en.wikipedia.org/wiki/Reentrant_code"
    link_label: "Reentrant Code"

enhancements:
  - id: "boolean-switches-for-customization"
    line_start: 3
    line_end: 19
    title: "Boolean switches for customization and debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The opening lines of STDDOS.ASM define several boolean flags that control how the operating system is compiled. These flags include `MSVER` and `IBM`, which allow the code to be tailored for either the standard Microsoft version or the IBM-specific variant of MS-DOS. Other flags, such as `HIGHMEM`, determine whether DOS relocates itself to the end of memory—a critical decision for optimizing memory usage on early PCs with limited RAM. The `DSKTEST` flag enables a debugging mode that sets up separate stacks for disk and character I/O, effectively making the DOS re-entrant during testing. In 1982, when this code was written, personal computers like the IBM PC were just beginning to gain traction. The IBM PC launched with 16 KB to 64 KB of RAM, meaning every byte of memory was precious. Tim Paterson, originally hired by Seattle Computer Products to write 86-DOS, had to design an operating system that could function efficiently within these constraints. The boolean switches reflect the flexibility needed to adapt MS-DOS for different hardware configurations and use cases, including debugging and OEM-specific versions. These flags are an early example of modular design in software, allowing the same codebase to be reused and customized for different purposes. The HIGHMEM flag, in particular, foreshadows the memory management techniques that would become increasingly important as PCs evolved. While the debugging features enabled by `DSKTEST` were likely intended for internal use, they hint at the challenges of developing reliable software for new hardware platforms. These decisions laid the groundwork for MS-DOS's widespread adoption and adaptability, influencing operating system design for decades to come."

---

	TITLE	MS-DOS version 1.25 by Tim Paterson     March 3, 1982
	PAGE	60,132
; Use the following booleans to set the switches 
FALSE	EQU	0
TRUE	EQU	NOT FALSE

; Use the switches below to produce the standard Microsoft version of the IBM
; version of the operating system
MSVER	EQU	TRUE
IBM	EQU	FALSE

; Set this switch to cause DOS to move itself to the end of memory
HIGHMEM	EQU	FALSE

; Turn on switch below to allow testing disk code with DEBUG. It sets
; up a different stack for disk I/O (functions > 11) than that used for
; character I/O which effectively makes the DOS re-entrant.

DSKTEST	EQU	FALSE

	INCLUDE	MSDOS.ASM

