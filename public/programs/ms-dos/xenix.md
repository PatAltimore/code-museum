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
description: "This file bridges MS-DOS with Unix-like functionality, showcasing Microsoft's attempt to incorporate XENIX-inspired features into DOS v2.0."

summary:
  - point: "Inclusion of XENIX-inspired IO system routines"
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"
  - point: "KANJI flag reveals early internationalization considerations"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "Validate_path routine handles path validation with meta-character checks"
    link: "https://en.wikipedia.org/wiki/Path_(computing)"
    link_label: "Path validation"
  - point: "Data segment structures for file handling and renaming"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Use of assembly macros for modularity and readability"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"

enhancements:
  - id: "kanji-flag-internationalization"
    line_start: 13
    line_end: 17
    title: "KANJI flag: Early internationalization in DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kanji_furigana.svg/330px-Kanji_furigana.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Kanji with Furigana (CC BY-SA 3.0)"
    content: "These lines define the KANJI flag, which is set to false by default. This flag hints at early considerations for supporting Japanese Kanji characters in MS-DOS. By 1983, the computing world was becoming increasingly global, and Microsoft was aware of the need to adapt its software for international markets. Japan, with its burgeoning tech industry, was a key target. Supporting Kanji required handling double-byte character sets, a significant challenge in an era dominated by single-byte ASCII. While this flag is not actively used in the file, its presence reflects Microsoft's foresight in addressing internationalization, a trend that would grow in importance as personal computing spread worldwide. This decision laid the groundwork for later DOS versions and Windows adaptations that supported non-English languages more robustly."
  - id: "xenix-inspired-io-system"
    line_start: 41
    line_end: 43
    title: "XENIX-inspired IO system for MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Xenix"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "The title and name directives explicitly frame this file as an effort to mimic UNIX's IO system within MS-DOS. By 1983, UNIX was widely regarded as a powerful, flexible operating system, and Microsoft's XENIX (a UNIX variant) was their attempt to enter the enterprise computing market. MS-DOS v2.0 incorporated several XENIX-inspired features, such as hierarchical directories and file handles, to make DOS more competitive and capable. These changes marked a significant departure from the simpler, CP/M-inspired design of DOS v1.0. The decision to integrate UNIX-like features was driven by the growing demand for more sophisticated file management capabilities, especially as personal computers began to be used for business applications. This effort helped MS-DOS maintain its dominance in the rapidly evolving PC market."
  - id: "data-segment-file-handling"
    line_start: 95
    line_end: 125
    title: "Data segment: Structures for file handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines the data structures used for file handling operations, such as opening, renaming, and accessing files. Each variable, like `open_name`, `rename_source`, and `rename_dest`, represents a critical piece of information required for managing files in MS-DOS. By 1983, file management was becoming increasingly complex as users demanded features like subdirectories and larger storage capacities. These structures reflect the evolution of DOS from a simple operating system to one capable of handling more sophisticated tasks. The inclusion of these variables also highlights the influence of XENIX, which emphasized robust file handling. These foundational elements would persist in later DOS versions and influence file management practices in subsequent operating systems."
  - id: "validate-path-meta-character-check"
    line_start: 131
    line_end: 199
    title: "Validate_path: Meta-character checks in file paths"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `Validate_path` procedure checks file paths for meta-characters and malformed inputs. It uses assembly instructions to iterate through the path string, validating its structure and ensuring compatibility with DOS's file system. By 1983, path validation was essential for maintaining system stability, especially as DOS introduced subdirectories and more complex file structures. This routine reflects the growing importance of error handling in software design, a practice that would become standard in modern operating systems. The inclusion of conditional code for Kanji characters further demonstrates Microsoft's awareness of international markets. Path validation routines like this one remain a cornerstone of file system design, ensuring that user inputs do not compromise system integrity."

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
