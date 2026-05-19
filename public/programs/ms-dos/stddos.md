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
description: "This file defines key configuration switches for MS-DOS v1.25, setting the groundwork for its adaptability across hardware platforms and debugging environments."

summary:
  - point: "Defines configuration switches for MS-DOS behavior"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduces conditional assembly for platform-specific builds"
    link: "https://en.wikipedia.org/wiki/Conditional_assembly"
    link_label: "Conditional Assembly"
  - point: "Includes debugging options for disk I/O testing"
    link: "https://en.wikipedia.org/wiki/Debugging"
    link_label: "Debugging"

enhancements:
  - id: "configuration-switches-ms-dos"
    line_start: 3
    line_end: 19
    title: "Configuration switches: adaptability meets simplicity"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines several configuration switches that control the behavior and build options of MS-DOS v1.25. These switches include `MSVER` and `IBM`, which toggle between the standard Microsoft version and the IBM-specific version of the operating system, and `HIGHMEM`, which determines whether DOS relocates itself to the end of memory. Another notable switch, `DSKTEST`, enables debugging for disk I/O routines by setting up a separate stack for disk operations, effectively making DOS reentrant for testing purposes. In 1982, the computing landscape was dominated by hardware-specific software. MS-DOS's ability to adapt to different platforms through conditional assembly was groundbreaking. Tim Paterson, the original author of 86-DOS, designed the system to be lightweight and modular, allowing Microsoft to quickly tailor it for IBM's PC and other OEMs. The inclusion of debugging options like `DSKTEST` reflects the practical challenges of developing reliable software for diverse hardware configurations. This approach to configuration and adaptability influenced the design of later operating systems, including MS-DOS 2.0 and beyond, which expanded on modularity and hardware abstraction. The concept of conditional assembly became a standard practice in software development, enabling developers to create versatile software that could run on multiple platforms with minimal changes. Debugging enhancements like `DSKTEST` foreshadowed the importance of testing tools in modern software engineering. These techniques laid the foundation for Microsoft's dominance in the PC operating system market and influenced the design of subsequent systems like Windows and Linux."

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