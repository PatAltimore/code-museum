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
description: "The foundational assembly code for MS-DOS v1.25, a pivotal operating system in personal computing history."

summary:
  - point: "Conditional assembly switches reveal customization for IBM and Microsoft versions."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "HIGHMEM flag hints at early memory management strategies."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Re-entrant DOS testing enabled by DSKTEST switch."
    link: "https://en.wikipedia.org/wiki/Reentrant_(computing)"
    link_label: "Reentrant Computing"

enhancements:
  - id: "conditional-assembly-switches"
    line_start: 3
    line_end: 19
    title: "Conditional switches: tailoring DOS for IBM or Microsoft"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines define key assembly-time switches that allow the MS-DOS source code to be tailored for different environments. The MSVER and IBM flags determine whether the code compiles as the standard Microsoft version or the IBM-specific variant. This flexibility was crucial in 1981, as Microsoft sought to license MS-DOS to multiple OEMs, including IBM. The HIGHMEM flag reflects early efforts to optimize memory usage by relocating DOS to the end of memory, a strategy that would become increasingly important as personal computers evolved. Meanwhile, the DSKTEST flag introduces a mechanism for testing disk code with DEBUG, setting up separate stacks for disk and character I/O. This approach effectively makes DOS re-entrant, a concept borrowed from larger, multi-user systems but adapted here for debugging purposes. These switches highlight the dual pressures faced by Tim Paterson and Microsoft: delivering a functional operating system for IBM's imminent PC launch while ensuring the codebase could be adapted for other hardware vendors. The modularity and foresight embedded in these switches laid the groundwork for MS-DOS's dominance in the early PC era, enabling rapid customization and widespread adoption."

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