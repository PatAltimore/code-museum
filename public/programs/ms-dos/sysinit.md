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
description: "This file initializes the MS-DOS operating system at power-on, setting up memory, devices, and loading the command interpreter."

summary:
  - point: "Defines conditional assembly flags for different OEM versions"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Structures memory and device pointers for system initialization"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Introduces subdirectory and file handle concepts inspired by Unix"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Uses assembly macros to handle hardware-specific variations"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Executes COMMAND.COM as the final step of initialization"
    link: "https://en.wikipedia.org/wiki/COMMAND.COM"
    link_label: "COMMAND.COM"

enhancements:
  - id: "conditional-flags-for-oem-versions"
    line_start: 11
    line_end: 35
    title: "Conditional Flags for OEM Versions"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This section defines conditional assembly flags that control the behavior of the system initialization code based on the OEM version being built. For example, `IBMVER` and `IBMJAPVER` toggle features specific to IBM and Japanese versions of DOS, while `MSVER` ensures compatibility with Microsoft's standard release. In 1983, MS-DOS was rapidly expanding its reach, with over 70 OEMs licensing the software. Each OEM often required slight modifications to accommodate their hardware or regional needs. Tim Paterson and Microsoft's engineers had to ensure the codebase was flexible enough to support these variations without duplicating effort. These flags reflect the modularity and foresight needed to scale MS-DOS across a fragmented hardware landscape. The approach of using conditional assembly remains a common practice in embedded systems and cross-platform development."
  - id: "sysinitvar-memory-and-device-structure"
    line_start: 55
    line_end: 79
    title: "SYSINITVAR: Memory and Device Structure"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/330px-Motorola_6800_Assembly_Language.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Motorola 6800 Assembly Language (Public domain)"
    content: "The `SYSINITVAR` structure organizes critical pointers and variables for system initialization. It includes entries for the disk parameter block (DPB), file control block (FCB), and device headers for the console and clock. In the early 1980s, memory was scarce, with the IBM PC shipping with as little as 16 KB of RAM. Efficient memory management was paramount, and structures like this allowed MS-DOS to allocate resources dynamically and interact with hardware devices seamlessly. Tim Paterson's experience with CP/M influenced this design, as CP/M also relied on structured memory layouts for device and file management. This structure laid the groundwork for MS-DOS's ability to support multiple devices and file systems, a feature that became increasingly important as PCs evolved."
  - id: "public-symbols-for-system-integration"
    line_start: 119
    line_end: 135
    title: "Public Symbols for System Integration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Command.com_Win10.png/330px-Command.com_Win10.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Screenshot of Command.com in Windows 10 Pro, 32-bit edition. (Public domain)"
    content: "This block declares public symbols like `CURRENT_DOS_LOCATION`, `DEVICE_LIST`, and `MEMORY_SIZE`, which are accessible to other parts of the operating system. These symbols act as shared variables, enabling different modules of MS-DOS to communicate and coordinate. In the early 1980s, modular programming was still emerging as a best practice, and assembly language offered limited tools for abstraction. By exposing key variables as public symbols, the developers ensured that the system could be extended or debugged without rewriting core components. This approach reflects the pragmatic engineering mindset of the time, balancing simplicity with the need for flexibility in a rapidly evolving software ecosystem."
  - id: "sysinit-entry-point"
    line_start: 145
    line_end: 199
    title: "SYSINIT: The Entry Point to MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/COMMAND.COM"
    image_url: ""
    image_caption: ""
    content: "The `SYSINIT` routine is the heart of the initialization process. It begins by jumping to `GOINIT`, which handles hardware setup and memory relocation. The routine then sets up key variables like `MEMORY_SIZE` and `DEFAULT_DRIVE`, ensuring the system is ready to load and execute `COMMAND.COM`. In 1983, MS-DOS 2.0 introduced major features inspired by Unix, such as hierarchical directories and file handles. These innovations required a robust initialization sequence to prepare the system for more complex operations. The final step, executing `COMMAND.COM`, reflects the user-centric design philosophy of MS-DOS: the operating system's primary role was to provide a simple and accessible interface for running programs. This entry point became iconic, as millions of users worldwide booted their PCs into MS-DOS using this very sequence."

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
