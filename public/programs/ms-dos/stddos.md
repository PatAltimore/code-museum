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
description: "This file sets key configuration flags for MS-DOS 1.25, shaping its behavior and compatibility with IBM PCs and other systems."

summary:
  - point: "Configuration flags like MSVER and HIGHMEM controlled compatibility and memory management."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "The IBM flag reflects the dual-purpose nature of MS-DOS for both IBM and other OEMs."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "The DSKTEST flag hints at early debugging practices for disk I/O in DOS."
    link: "https://en.wikipedia.org/wiki/DOS"
    link_label: "DOS Debugging"

enhancements:
  - id: "configuration-flags-shape-dos-behavior"
    line_start: 3
    line_end: 19
    title: "Configuration flags shape DOS behavior"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines key configuration flags that control how MS-DOS behaves during compilation. Flags like `MSVER` and `IBM` determine whether the compiled version aligns with Microsoft's standard or the IBM-specific variant of DOS. The `HIGHMEM` flag, when enabled, instructs DOS to relocate itself to the end of memory, optimizing space for user programs—a critical consideration in an era of limited RAM. The `DSKTEST` flag introduces a debugging mechanism for disk I/O, allowing developers to test re-entrant code paths, a rare feature in early DOS versions. In 1982, MS-DOS was rapidly becoming the backbone of personal computing, driven by its adoption on the IBM PC. The IBM PC's architecture, with its 16-bit Intel 8088 processor and 64 KB to 640 KB of RAM, imposed tight constraints on operating system design. Tim Paterson, initially working at Seattle Computer Products, had designed 86-DOS (later MS-DOS) with simplicity and speed in mind, borrowing heavily from CP/M's structure but adapting it for the 8086 architecture. These flags reflect the dual-purpose strategy Microsoft pursued after acquiring DOS: tailoring it for IBM while retaining flexibility for other OEMs. The consequences of these decisions were profound. MS-DOS's configurability allowed Microsoft to license it to over 70 OEMs within a year, cementing its dominance in the PC market. The `HIGHMEM` optimization became a precursor to memory management techniques in later DOS versions, while debugging flags like `DSKTEST` foreshadowed the robust development tools that would emerge in the software industry. Without this configurability, MS-DOS might have struggled to adapt to the diverse hardware landscape of the early 1980s, potentially ceding ground to competitors like CP/M or UCSD Pascal."

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