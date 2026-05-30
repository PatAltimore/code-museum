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
description: "This file contains assembly code for MS-DOS 1.25, a pivotal operating system that shaped the PC era."

summary:
  - point: "Defines key configuration switches for MS-DOS behavior"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduces re-entrant testing mode for disk I/O"
    link: "https://en.wikipedia.org/wiki/Reentrancy_(computing)"
    link_label: "Reentrancy"
  - point: "Demonstrates early use of conditional assembly directives"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"

enhancements:
  - id: "configuration-switches-ms-dos"
    line_start: 7
    line_end: 13
    title: "The Switches That Defined MS-DOS Behavior"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines several key configuration switches that control the behavior of MS-DOS during assembly. These include `MSVER` to distinguish between the Microsoft and IBM versions, `HIGHMEM` to determine whether DOS relocates itself to the end of memory, and `DSKTEST` for enabling a testing mode that makes disk I/O re-entrant. Conditional assembly directives (`EQU`) are used to toggle these features on or off, allowing flexibility in building different variants of the operating system. In 1982, these switches were vital for adapting MS-DOS to various hardware configurations and OEM requirements. The IBM PC, which launched in 1981, had limited memory and relied on MS-DOS as its operating system. Tim Paterson, who originally wrote 86-DOS (the precursor to MS-DOS), designed these switches to simplify customization and testing. The inclusion of a re-entrant mode (`DSKTEST`) reflects the growing complexity of disk operations and the need for robust debugging tools. This approach to modular configuration influenced later operating systems and development practices. Conditional assembly became a standard technique for tailoring software to specific environments, especially in embedded systems. The idea of relocating the OS (`HIGHMEM`) foreshadowed memory management innovations in later versions of MS-DOS and other operating systems. Re-entrant code, while not fully realized in MS-DOS 1.x, became a cornerstone of modern multitasking systems. Developers studying this file would have seen how early design decisions in MS-DOS laid the groundwork for the software flexibility we take for granted today."

---

```asm
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


```