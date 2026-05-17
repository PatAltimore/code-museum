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
description: "The SYSINIT.ASM file is the entry point for MS-DOS v2.0, initializing the system at power-on and setting the stage for the operating system's functionality."

summary:
  - point: "Defines key constants and flags for system configuration"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduces a structure for internal DOS data management"
    link: "https://en.wikipedia.org/wiki/Data_structure"
    link_label: "Data Structure"
  - point: "Handles memory relocation and system initialization"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Parses configuration files and launches COMMAND.COM"
    link: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    link_label: "CONFIG.SYS"
  - point: "Reflects the shift from single-tasking to Unix-inspired multitasking in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "initialization-flags-and-constants"
    line_start: 5
    line_end: 35
    title: "Initialization Flags: A System's Identity"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "These lines define key constants and flags that determine the behavior of the operating system during initialization. The `TRUE` and `FALSE` constants provide a basic mechanism for conditional assembly, while the `IBMVER`, `MSVER`, and `IBMJAPVER` flags indicate which version of the system is being built — whether for IBM PCs, Japanese IBM PCs, or other MS-DOS-compatible systems. This section reflects the fragmented hardware landscape of the early 1980s, when operating systems had to be tailored for specific hardware configurations. Tim Paterson and Microsoft's engineers were navigating a world where IBM's dominance was emerging, but compatibility with other OEMs was crucial for MS-DOS's success. These flags allowed the same codebase to be adapted for different hardware platforms, a key factor in MS-DOS's widespread adoption. The conditional assembly techniques seen here are a precursor to modern software practices like feature toggles and platform-specific builds."
  - id: "internal-dos-data-structure"
    line_start: 55
    line_end: 79
    title: "SYSINITVAR: The Operating System's Internal Map"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/330px-Hash_table_3_1_1_0_1_0_0_SP.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Hash table 3 1 1 0 1 0 0 SP (CC BY-SA 3.0)"
    content: "The `SYSINITVAR` structure defines key pointers and variables that MS-DOS uses internally during initialization. It includes entries for device pointers, buffer queues, and sector size limits. This structure serves as a centralized repository for critical system data, enabling efficient access and manipulation during runtime. In the early 1980s, memory was a scarce resource; the IBM PC shipped with as little as 16KB of RAM, and MS-DOS had to fit within these constraints while still providing robust functionality. The design of `SYSINITVAR` reflects the careful planning required to manage limited resources effectively. Tim Paterson's original 86-DOS laid the groundwork for this approach, but Microsoft's engineers expanded it significantly for MS-DOS v2.0, inspired by Unix's emphasis on structured data management. This structure would evolve in later versions of MS-DOS, influencing the design of system-level data management in operating systems for decades."
  - id: "memory-relocation-and-segment-assumptions"
    line_start: 101
    line_end: 105
    title: "Memory Relocation: Making Room for DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/330px-Operating_system_placement.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Graph of Operating System placement on computer usage (CC BY-SA 3.0)"
    content: "The `SYSINITSEG` segment declaration and `ASSUME` directive set up the memory environment for MS-DOS initialization. By relocating itself into high memory, the system frees up lower memory for application programs, a critical feature for the memory-constrained IBM PC. In the early 1980s, the 8086 processor's segmented memory model was both a limitation and an opportunity; programmers had to work within its constraints while finding creative ways to maximize usable memory. Microsoft's engineers were acutely aware of these challenges, as the IBM PC's design prioritized cost over performance, resulting in limited memory and computational power. The decision to use high memory for the operating system reflects the influence of Unix, which also emphasized efficient memory management. This approach became a hallmark of MS-DOS and influenced memory management strategies in later operating systems."
  - id: "system-variables-and-defaults"
    line_start: 145
    line_end: 189
    title: "Default Settings: Building a Usable System"
    wikipedia_url: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Command.com_Win10.png/330px-Command.com_Win10.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Screenshot of Command.com in Windows 10 Pro, 32-bit edition. (Public domain)"
    content: "This section initializes key system variables and default settings, including memory size, default drive, buffer count, and file handles. It also defines the default command-line arguments for `COMMAND.COM`, the MS-DOS command interpreter. These defaults were carefully chosen to balance usability and performance on the limited hardware of the IBM PC. In 1983, the concept of user-configurable system settings was still in its infancy, but MS-DOS v2.0 introduced the `CONFIG.SYS` file to allow users to customize these parameters. This innovation was inspired by Unix's configuration flexibility and marked a significant step toward making personal computers more adaptable to individual needs. The default values seen here reflect the assumptions of the time: small memory sizes, single floppy drives, and limited multitasking capabilities. As hardware evolved, these defaults would change, but the underlying mechanism for system configuration remained a cornerstone of MS-DOS and its successors."
  - id: "command-com-execution"
    line_start: 195
    line_end: 199
    title: "Launching COMMAND.COM: The User's Gateway"
    wikipedia_url: "https://en.wikipedia.org/wiki/COMMAND.COM"
    image_url: ""
    image_caption: ""
    content: "The final lines of this file execute `COMMAND.COM`, the MS-DOS command interpreter, using the `COMEXE` macro. This step is the culmination of the initialization process, handing control from the system to the user. In 1983, `COMMAND.COM` was the user's primary interface with the operating system, providing a simple yet powerful way to interact with files, directories, and devices. The decision to include this step directly in the initialization code reflects the importance of usability in MS-DOS's design. Tim Paterson and Microsoft's engineers were keenly aware that the success of MS-DOS depended not just on technical excellence but also on its ability to empower users. By launching `COMMAND.COM` as the final step, they ensured that the system was ready for immediate use, a design philosophy that would influence operating systems for decades to come."

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
