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
description: "Configuration switches and assembly directives for MS-DOS 1.25, showcasing early design decisions in operating system development."

summary:
  - point: "Boolean switches control build variants for IBM and Microsoft versions."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "HIGHMEM switch reflects memory management constraints of early PCs."
    link: "https://en.wikipedia.org/wiki/Conventional_memory"
    link_label: "Conventional memory"
  - point: "Re-entrant DOS testing enabled by DSKTEST switch."
    link: "https://en.wikipedia.org/wiki/Reentrancy_(computing)"
    link_label: "Reentrancy"

enhancements:
  - id: "early-build-switches-ms-dos"
    line_start: 3
    line_end: 19
    title: "Why MS-DOS Had Multiple Build Variants"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines several boolean switches that control how MS-DOS is assembled. These include MSVER and IBM, which toggle between the Microsoft and IBM-specific builds of the operating system, HIGHMEM, which determines whether DOS relocates itself to the end of memory, and DSKTEST, a debugging mode that makes DOS re-entrant for disk I/O testing. At the time, the IBM PC had just launched, and MS-DOS needed to support both IBM's requirements and Microsoft's broader licensing strategy. The HIGHMEM option reflects the constraints of early PC memory management, where conventional memory was limited to 640KB and operating systems had to carefully manage their footprint. DSKTEST, meanwhile, hints at the challenges of debugging disk operations in an era when re-entrant code was rare and difficult to achieve. These switches reveal the flexibility baked into MS-DOS's design, allowing it to adapt to different hardware and licensing conditions. Tim Paterson, who originally wrote 86-DOS, carried forward this modular philosophy when adapting the code for Microsoft. The inclusion of debugging options like DSKTEST highlights the practical challenges of developing low-level software for new hardware. This modular approach influenced later operating systems, including MS-DOS 2.0, which introduced more sophisticated features like subdirectories and file handles. The HIGHMEM concept also foreshadowed memory management techniques that became critical as PCs evolved, such as extended and expanded memory. Debugging tools like DSKTEST paved the way for more robust testing environments in future software development. These switches represent an early example of how software could be tailored to meet diverse needs in a rapidly changing industry."

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


```
