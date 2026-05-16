---
title: "SYSINIT.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/SYSINIT.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/SYSINIT.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "sysinit"
order: 5
description: "This file initializes MS-DOS v2.0, laying the foundation for personal computing in the 1980s."

summary:
  - point: "MS-DOS was pivotal in the success of the IBM PC and the rise of Microsoft."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Version 2.0 introduced Unix-inspired features like subdirectories and file handles."
    link: "https://en.wikipedia.org/wiki/MS-DOS#Version_2.x"
    link_label: "MS-DOS v2.x"
  - point: "Tim Paterson's original 86-DOS was the basis for MS-DOS, written in six weeks."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "IBM PC launched in 1981, marking the beginning of the PC revolution."
    link: "https://en.wikipedia.org/wiki/IBM_Personal_Computer"
    link_label: "IBM PC"

enhancements:
  - id: "conditional-build-flags"
    line_start: 11
    line_end: 35
    title: "Conditional Flags for OEM Customization"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines define conditional flags that allow the MS-DOS system to be customized for different OEMs, such as IBM or Japanese versions. In 1983, Microsoft was navigating a rapidly expanding market for personal computers, where hardware manufacturers demanded tailored operating systems. The IBM PC had already established itself as a dominant force, but Microsoft retained the rights to license MS-DOS to other OEMs, creating versions that could adapt to regional needs or hardware variations. This flexibility was crucial for Microsoft's strategy to dominate the operating system market. The flags here, like `IBMVER` and `KANJI`, reflect the modularity of MS-DOS, enabling it to support different hardware configurations and languages. This approach was inspired by Unix's portability but tailored for the constraints of early PCs, which had limited memory and processing power. By embedding these conditional flags, Microsoft ensured that MS-DOS could be quickly adapted without rewriting the entire codebase. This modularity became a hallmark of MS-DOS, influencing software development practices for decades. Had Microsoft not embraced this flexibility, its dominance in the operating system market might have been far less assured."
  - id: "sysinit-structure"
    line_start: 55
    line_end: 79
    title: "SYSINITVAR: Mapping the Core of MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS#Version_2.x"
    image_url: ""
    image_caption: ""
    content: "This section defines the `SYSINITVAR` structure, a critical component that organizes internal data used during system initialization. It includes pointers to essential system components like the FAT (File Allocation Table), device headers, and buffer queues. In 1983, the computing world was transitioning from single-tasking systems to more sophisticated environments inspired by Unix. MS-DOS v2.0 was a near-complete rewrite, incorporating features like subdirectories and file handles to support more complex applications. The `SYSINITVAR` structure reflects this shift, as it centralizes system data to streamline operations and improve performance. Tim Paterson and the Microsoft team were working under the constraints of 16-bit architecture and limited memory, which required meticulous attention to efficiency. The design of `SYSINITVAR` allowed MS-DOS to manage resources effectively, ensuring compatibility with a wide range of hardware. This structure laid the groundwork for future operating systems, influencing how system-level data is organized and accessed. Its legacy can be seen in modern OS kernels, which still rely on centralized data structures for initialization and resource management."
  - id: "memory-and-defaults"
    line_start: 179
    line_end: 199
    title: "Sizing Memory and Setting Defaults"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines handle memory sizing and set default parameters for the operating system, including the number of buffers and files. At power-on, MS-DOS calculates available memory and configures itself accordingly, a process critical for early PCs with varying hardware specifications. In the early 1980s, personal computers were far from standardized. The IBM PC, launched in 1981, came with options for 16 KB to 640 KB of RAM, and MS-DOS had to adapt to these configurations dynamically. Tim Paterson's original 86-DOS laid the groundwork for this flexibility, but MS-DOS v2.0 expanded it significantly, inspired by Unix's dynamic resource management. The defaults set here, like `BUFFERS` and `FILES`, reflect the constraints of the era. Disk I/O was slow, and memory was scarce, so these values had to balance performance with resource limitations. This initialization process ensured that MS-DOS could run efficiently on a wide range of systems, contributing to its widespread adoption. The ability to dynamically size memory and configure defaults became a standard feature in operating systems, influencing how software interacts with hardware to this day."

---

; excerpt — first 200 lines of v2.0/source/SYSINIT.ASM

TITLE   BIOS SYSTEM INITIALIZATION



FALSE   EQU     0

TRUE    EQU     NOT FALSE



IBMVER     EQU     FALSE

IBM        EQU     IBMVER

IBMJAPVER  EQU     FALSE                ; If TRUE set KANJI true also

MSVER      EQU     TRUE 

ALTVECT    EQU     FALSE                ; Switch to build ALTVECT version

HIGHMEM    EQU     FALSE

KANJI      EQU     FALSE



        IF      IBMVER OR IBMJAPVER

NOEXEC  EQU     TRUE

        ELSE

NOEXEC  EQU     FALSE

        ENDIF



; Set to agree with those in DOST:MSHEAD.ASM, ALTVECT version only

MAJOR_VERSION   EQU      2

MINOR_VERSION   EQU     0B	;2.11



DOSSIZE EQU     5000H



; Internal DOS data returned by DOSINIT



SYSINITVAR  STRUC

DPBHEAD     DD      ?                   ; Pointer to head of DPB-FAT list

sft_addr    DD      ?                   ; Pointer to first FCB table

; The following address points to the CLOCK device

BCLOCK      DD      ?

; The following address is used by DISKSTATCHK it is always

; points to the console input device header

BCON        DD      ?                   ; Console device entry points

NUMIO       DB      0                   ; Number of disk tables

MAXSEC      DW      0                   ; Maximum allowed sector size

BUFFHEAD    DD      ?                   ; Head of buffer queue

DEVHEAD     DD      ?

SYSINITVAR  ENDS



        INCLUDE DOSSYM.ASM

        INCLUDE DEVSYM.ASM



        IF      NOT IBM

        IF      NOT IBMJAPVER

        EXTRN   RE_INIT:FAR

        ENDIF

        ENDIF



SYSINITSEG      SEGMENT PUBLIC 'SYSTEM_INIT'



ASSUME  CS:SYSINITSEG,DS:NOTHING,ES:NOTHING,SS:NOTHING



        EXTRN   BADOPM:BYTE,CRLFM:BYTE,BADCOM:BYTE

        EXTRN   BADSIZ_PRE:BYTE,BADLD_PRE:BYTE

        EXTRN   BADSIZ_POST:BYTE,BADLD_POST:BYTE

        EXTRN   SYSSIZE:BYTE,BADCOUNTRY:BYTE



        PUBLIC  CURRENT_DOS_LOCATION

        PUBLIC  FINAL_DOS_LOCATION

        PUBLIC  DEVICE_LIST

        PUBLIC  MEMORY_SIZE

        PUBLIC  DEFAULT_DRIVE

        PUBLIC  BUFFERS

        PUBLIC  FILES

        PUBLIC  SYSINIT



        IF      HIGHMEM

        PUBLIC  DPBBUF_SIZ

        ENDIF



SYSINIT:

        JMP     GOINIT



DOSINFO                 LABEL   DWORD

                        DW      0000

CURRENT_DOS_LOCATION    DW      0000



MSDOS                   LABEL   DWORD

ENTRY_POINT             LABEL   DWORD

                        DW      0000

FINAL_DOS_LOCATION      DW      0000

DEVICE_LIST             DD      00000000



        IF      HIGHMEM

DPBBUF_SIZ              DW      (4472  + 15) / 16

        ENDIF



MEMORY_SIZE             DW      0001

DEFAULT_DRIVE           DB      00

BUFFERS                 DB      2

FILES                   DB      8

COMMAND_LINE            DB      2,0,"P" ; Default Command.com Args

                        DB      29 DUP (0)

ZERO                    DB      0



        IF      NOT NOEXEC

COMEXE  EXEC0 <0,COMMAND_LINE,DEFAULT_DRIVE,ZERO>

        ENDIF
