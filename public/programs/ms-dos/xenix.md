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
description: "This file bridges MS-DOS with Unix-like functionality, reflecting the influence of XENIX on MS-DOS v2.0."
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Introduces Unix-inspired file handling in MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Defines data structures for file operations"
    link: "https://en.wikipedia.org/wiki/File_system"
    link_label: "File system"
  - point: "Implements path validation with meta-character checks"
    link: "https://en.wikipedia.org/wiki/Path_(computing)"
    link_label: "Path validation"

enhancements:
  - id: "include-dosseg-kanji-check"
    line_start: 9
    line_end: 17
    title: "Handling Kanji in a Western OS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "These lines define a conditional flag for Kanji support, setting it to false by default. Kanji, a system of Japanese writing, posed unique challenges for Western operating systems like MS-DOS, which were primarily designed for ASCII-based languages. By 1983, Japan was emerging as a major player in the computing industry, and software compatibility with Japanese character sets was becoming a necessity. This flag reflects the early steps toward accommodating non-Western languages in MS-DOS, though full support would come later. The decision to include this flag hints at Microsoft's awareness of global markets, even as the primary focus of MS-DOS remained the IBM PC and its Western user base."
  - id: "segment-code-public"
    line_start: 21
    line_end: 93
    title: "Segmenting Code for Modular Design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "The 'CODE' segment declaration organizes executable instructions into a distinct memory region. This modular approach was critical in the era of segmented memory architecture, where the Intel 8086 processor could only address 64 KB at a time. By separating code, data, and stack segments, MS-DOS ensured efficient memory usage and simplified debugging. Tim Paterson, the original author of 86-DOS, had designed the system to be lightweight and modular, and this philosophy carried forward into MS-DOS v2.0. The inclusion of public segments also facilitated interaction with external modules, reflecting the growing complexity of software ecosystems in the early 1980s."
  - id: "data-segment-file-operations"
    line_start: 95
    line_end: 125
    title: "Data Structures for File Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_descriptor"
    image_url: ""
    image_caption: ""
    content: "This segment defines key data structures for file operations, including variables for file names, access modes, and device IDs. These structures are the backbone of MS-DOS's file handling system, enabling operations like opening, renaming, and accessing files. The design reflects the influence of Unix, which introduced file descriptors and structured file management. By adopting similar concepts, MS-DOS v2.0 bridged the gap between the simplicity of earlier versions and the advanced capabilities required by professional users. The decision to include these structures highlights Microsoft's intent to position MS-DOS as a versatile operating system capable of competing with Unix-based systems like XENIX."
  - id: "validate-path-meta-check"
    line_start: 131
    line_end: 199
    title: "Validating File Paths for Robustness"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "The 'Validate_path' procedure checks file paths for meta-characters and malformed structures. This is a critical function in ensuring the reliability of file operations, as improper paths could lead to errors or security vulnerabilities. The code uses a combination of conditional jumps and character comparisons to verify path integrity, reflecting the low-level programming techniques common in assembly language. In the early 1980s, file path validation was a relatively novel concept, inspired by Unix's robust handling of hierarchical file systems. By incorporating this feature, MS-DOS v2.0 demonstrated its evolution from a simple disk operating system to a more sophisticated platform capable of supporting professional workloads."

---

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
