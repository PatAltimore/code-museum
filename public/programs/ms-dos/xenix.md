---
title: "XENIX.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/XENIX.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/XENIX.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "xenix"
order: 3
description: "This file represents MS-DOS 2.0's attempt to integrate Unix-like features, bridging the gap between early personal computing and professional-grade operating systems."

summary:
  - point: "Introduces Unix-inspired file system calls to MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Includes support for hierarchical directories, a major advancement"
    link: "https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard"
    link_label: "Filesystem Hierarchy"
  - point: "Demonstrates the influence of XENIX, Microsoft's Unix variant"
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"
  - point: "Shows early compatibility considerations for Japanese Kanji characters"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "Highlights the use of assembly macros for modularity and readability"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "xenix-file-call-integration"
    line_start: 9
    line_end: 21
    title: "Unix-inspired file calls in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "The inclusion of `DOSSEG.ASM` and the declaration of the `CODE SEGMENT` signal the beginning of MS-DOS's integration of Unix-like features. The programmer is setting up the groundwork for file system operations that mimic Unix's hierarchical directory structure and file handling capabilities. This reflects Microsoft's strategic decision to align MS-DOS 2.0 with the professional-grade operating systems of the time, particularly XENIX, its Unix variant. In 1983, Unix was considered the gold standard for multi-user, multitasking systems, and its influence is evident here. The decision to incorporate these features was not just technical but also strategic, as Microsoft aimed to position MS-DOS as a versatile operating system for both personal and business use. These foundational lines paved the way for features like subdirectories and file handles, which became standard in later versions of MS-DOS and influenced countless operating systems that followed."
  - id: "xenix-io-system-title"
    line_start: 41
    line_end: 43
    title: "XENIX IO system: Unix roots in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Xenix"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Xenix_Screensnap.png/330px-Xenix_Screensnap.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Xenix Screensnap (Public domain)"
    content: "The title and name declaration, `XENIX - IO system to mimic UNIX`, explicitly tie this file to Microsoft's Unix variant, XENIX. By 1983, Unix was widely regarded as a robust and flexible operating system, and Microsoft sought to bring some of its strengths to MS-DOS. This file encapsulates the effort to emulate Unix's input/output system, including features like pipes and hierarchical directories. The decision to borrow from Unix was both practical and ambitious, as it allowed MS-DOS to appeal to developers and businesses familiar with Unix environments. While MS-DOS never achieved the multitasking capabilities of Unix, the influence of XENIX in MS-DOS 2.0 laid the groundwork for future operating systems, including Windows NT."
  - id: "modular-data-references"
    line_start: 47
    line_end: 85
    title: "Modular data references for IO operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/330px-Motorola_6800_Assembly_Language.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Motorola 6800 Assembly Language (Public domain)"
    content: "The `i_need` directives in this section define a series of variables and pointers essential for IO operations, such as `CURDRV`, `DMAADD`, and `sft_addr`. These modular references highlight the programmer's effort to organize and streamline the codebase, making it easier to maintain and extend. In the early 1980s, assembly language programming was notoriously challenging due to its low-level nature and lack of abstraction. By using macros and modular definitions, Tim Paterson and the Microsoft team were pushing the boundaries of assembly language readability and maintainability. This approach influenced later programming practices, where modularity became a cornerstone of software development."
  - id: "validate-path-meta-characters"
    line_start: 131
    line_end: 199
    title: "Checking for meta-characters in file paths"
    wikipedia_url: "https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard"
    image_url: ""
    image_caption: ""
    content: "The `Validate_path` procedure is an essential routine for ensuring the integrity of file paths in MS-DOS. It checks for meta-characters and malformed paths, setting flags accordingly. This routine reflects the challenges of implementing a hierarchical file system in an operating system originally designed for flat file structures. By 1983, hierarchical directories were a hallmark of Unix systems, and Microsoft recognized their importance for organizing files in a more scalable way. The procedure also includes conditional logic for handling Kanji characters, further demonstrating the team's effort to address internationalization. The concepts introduced here—path validation and error handling—became standard practices in file system design, influencing not only subsequent versions of MS-DOS but also other operating systems."

---

; excerpt — first 200 lines of v2.0/source/XENIX.ASM

;

; xenix file calls for MSDOS

;



INCLUDE DOSSEG.ASM



IFNDEF  KANJI

KANJI   EQU     0       ;FALSE

ENDIF



CODE    SEGMENT BYTE PUBLIC  'CODE'

        ASSUME  SS:DOSGROUP,CS:DOSGROUP



.xlist

.xcref

INCLUDE DOSSYM.ASM

INCLUDE DEVSYM.ASM

.cref

.list



TITLE   XENIX - IO system to mimic UNIX

NAME    XENIX



        i_need  NoSetDir,BYTE

        i_need  CURDRV,BYTE

        i_need  IOCALL,BYTE

        i_need  IOMED,BYTE

        i_need  IOSCNT,WORD

        i_need  IOXAD,DWORD

        i_need  DIRSTART,WORD

        i_need  ATTRIB,BYTE

        i_need  THISFCB,DWORD

        i_need  AuxStack,BYTE

        i_need  Creating,BYTE

        i_need  ThisDRV,BYTE

        i_need  NAME1,BYTE

        i_need  LastEnt,WORD

        i_need  ThisDPB,DWORD

        i_need  EntLast,WORD

        i_need  CurrentPDB,WORD

        i_need  sft_addr,DWORD              ; pointer to head of table

        i_need  CURBUF,DWORD                ; pointer to current buffer

        i_need  DMAADD,DWORD                ; pointer to current dma address



BREAK <Local data>



CODE        ENDS

DATA        SEGMENT BYTE PUBLIC 'DATA'



open_name   DW  ?

            DW  ?

open_access DB  ?

open_jfn    DW  ?                       ; accessed as DD

open_jfn_b  DW  ?                       ; accessed as DD with above

open_sfn    DW  ?

open_sfoff  DW  ?                       ; accessed as DD

open_sfn_b  DW  ?                       ; accessed as DD with above

open_devid  DB  ?

Cr_read_only    DB  ?

rename_source   DD  ?

rename_dest     DD  ?



DATA        ENDS

CODE        SEGMENT BYTE PUBLIC 'CODE'



BREAK <Validate_path - check to see if there are meta characters in path>



;

; Input: DS:DX is an ASCIZ path

; Output: Carry set if meta-characters present or path malformed and

;           Zero is set if the only problem is that meta-characters

;               are present in the last element of the path

procedure Validate_path,near

        ASSUME  DS:NOTHING,ES:NOTHING

        PUSH    AX

        PUSH    CX

        PUSH    SI

        MOV     SI,DX

        MOV     CX,0FFH                 ;No path seps yet

        MOV     AX,[SI]                 ; Get first two bytes

        OR      AL,AL

        JZ      validate_malformed      ; NUL path

        CMP     AH,':'

        JNZ     validate_loop           ; OK so far

        CMP     BYTE PTR [SI+2],0

        JZ      validate_malformed      ; NUL path (just d:)

validate_loop:

        LODSB

validate_loop1:



        IF      KANJI

        invoke  TESTKANJ

        JZ      NOTKANJ6

        INC     SI

        JMP     validate_loop



NOTKANJ6:

        ENDIF



        OR      AL,AL
