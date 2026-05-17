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
description: "The SYSINIT.ASM file is the starting point for MS-DOS v2.0, initializing the system at boot and laying the groundwork for the operating system's functionality."
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Defines key system constants and conditional compilation flags"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduces the SYSINITVAR structure for internal DOS data"
    link: "https://en.wikipedia.org/wiki/Structure_(computer_science)"
    link_label: "Data Structure"
  - point: "Handles memory relocation and prepares system variables"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Parses CONFIG.SYS and prepares for COMMAND.COM execution"
    link: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    link_label: "CONFIG.SYS"
  - point: "Reflects the transition from single-tasking to Unix-inspired multitasking"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "conditional-compilation-flags"
    line_start: 5
    line_end: 35
    title: "Conditional compilation flags: tailoring MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Conditional_compilation"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flow-diagram-computer-booting-sequences.svg/330px-Flow-diagram-computer-booting-sequences.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Describes the process from power button to OS load, from File:Flow-diagram-computer-booting-sequences.jpg (CC BY-SA 4.0)"
    content: "This section defines a series of conditional compilation flags that allow the assembly code to be tailored for different environments and versions. For example, `IBMVER` and `IBMJAPVER` determine whether the code is compiled for IBM systems or Japanese IBM systems, while `MSVER` ensures compatibility with Microsoft's version of DOS. These flags reflect the modularity and adaptability of MS-DOS, which was designed to run on a wide variety of hardware platforms. In 1983, MS-DOS v2.0 was a major rewrite inspired by Unix, and these flags demonstrate the effort to maintain flexibility while expanding functionality. The modular approach allowed Microsoft to license MS-DOS to over 70 OEMs within a year, cementing its dominance in the PC market. This adaptability would become a hallmark of Microsoft's software strategy, influencing later products like Windows."
  - id: "sysinitvar-structure"
    line_start: 55
    line_end: 79
    title: "SYSINITVAR: A snapshot of DOS internals"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: ""
    image_caption: ""
    content: "The `SYSINITVAR` structure encapsulates key internal data used during system initialization. It includes pointers to the DPB-FAT list, device headers, and buffer queues, as well as variables like `NUMIO` and `MAXSEC` that define disk table counts and maximum sector sizes. This structure is a window into the low-level workings of MS-DOS, showing how the operating system manages devices, buffers, and file systems. In the early 1980s, operating systems were tightly coupled to hardware constraints, and every byte mattered. Tim Paterson's original 86-DOS was written in six weeks, and its simplicity carried over into MS-DOS. However, by v2.0, the system had evolved to support more complex features like subdirectories and device drivers. The `SYSINITVAR` structure is a testament to this transition, balancing legacy simplicity with new capabilities."
  - id: "public-symbols-declaration"
    line_start: 119
    line_end: 141
    title: "Public symbols: exposing system variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Symbol_table"
    image_url: ""
    image_caption: ""
    content: "This section declares public symbols such as `CURRENT_DOS_LOCATION`, `FINAL_DOS_LOCATION`, and `DEVICE_LIST`, making them accessible to other parts of the operating system. These symbols represent critical system variables, including memory locations and device lists, that are essential for DOS's operation. In the early 1980s, software development was often a collaborative effort, with different teams working on separate modules. By exposing these symbols, the SYSINIT.ASM file ensures that other components of MS-DOS can interact seamlessly with the system initialization code. This approach reflects the growing complexity of software systems at the time, as operating systems transitioned from monolithic designs to modular architectures inspired by Unix. The public symbols also highlight the importance of interoperability, a principle that would become increasingly important as MS-DOS expanded to support a wide range of hardware and software."
  - id: "sysinit-entry-point"
    line_start: 145
    line_end: 199
    title: "SYSINIT: The heartbeat of system startup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The `SYSINIT` entry point is the core of the system initialization process. It begins with a jump to `GOINIT`, setting the stage for memory relocation, system variable setup, and the eventual execution of COMMAND.COM. This sequence is the first step in transforming a powered-on machine into a functional operating system. In 1983, MS-DOS v2.0 introduced significant enhancements inspired by Unix, including support for subdirectories and pipes. The initialization code reflects this evolution, preparing the system to handle these new features while maintaining backward compatibility. The inclusion of default values for variables like `BUFFERS` and `FILES` demonstrates the careful balance between flexibility and resource constraints. At the time, PCs typically had limited RAM and storage, so every decision in this code was shaped by the need to optimize performance within tight hardware limits. The `SYSINIT` routine is a reminder of the ingenuity required to build an operating system that could run on a wide variety of machines, from IBM PCs to clones."

---

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
