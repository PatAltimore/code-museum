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
description: "The SYSINIT.ASM file is the foundational system initialization code for MS-DOS v2.0, a pivotal operating system that shaped the PC era."

summary:
  - point: "Conditional assembly directives for OEM customization"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Memory sizing and relocation routines"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Integration of CONFIG.SYS and COMMAND.COM"
    link: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    link_label: "CONFIG.SYS"
  - point: "Structuring internal DOS data for device management"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device driver"
  - point: "Support for international versions like IBM Japan"
    link: "https://en.wikipedia.org/wiki/IBM"
    link_label: "IBM"

enhancements:
  - id: "conditional-assembly-for-oem-customization"
    line_start: 5
    line_end: 35
    title: "Conditional Assembly: Tailoring MS-DOS for OEMs"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines define a series of conditional assembly directives that enable MS-DOS to be customized for different OEMs. By setting flags like `IBMVER`, `MSVER`, and `KANJI`, the assembler could generate tailored versions of the operating system for IBM, Microsoft, or Japanese markets. In 1983, this flexibility was critical; MS-DOS was licensed to over 70 OEMs, each with unique hardware configurations and market needs. Tim Paterson and Microsoft's engineers designed this mechanism to accommodate those variations without rewriting the codebase for each customer. This approach reflects the modular philosophy inspired by Unix, which MS-DOS v2.0 increasingly emulated. The consequence was a scalable licensing model that helped Microsoft dominate the PC software market. Today, conditional compilation remains a standard practice in software development, a testament to its utility and foresight."
  - id: "internal-dos-data-structure"
    line_start: 55
    line_end: 79
    title: "SYSINITVAR: Structuring DOS for Device Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The `SYSINITVAR` structure defines key internal data used by DOS during initialization. It includes pointers to device lists, buffer queues, and disk tables, as well as sector size limits. In 1983, managing hardware devices was a complex task, as PCs lacked standardized interfaces. MS-DOS v2.0 introduced a more sophisticated device driver model, allowing developers to write software that interacted seamlessly with hardware. This structure encapsulates the data necessary for those interactions, ensuring that devices like consoles, clocks, and disk drives could be initialized and accessed efficiently. The design was influenced by Unix's device abstraction, which Microsoft had studied while developing XENIX. This innovation laid the groundwork for the modular hardware support seen in later operating systems, including Windows."
  - id: "memory-sizing-and-relocation"
    line_start: 101
    line_end: 145
    title: "Memory Sizing: Maximizing Limited Resources"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "The `SYSINITSEG` segment begins the process of sizing and relocating memory. Early PCs typically had between 16 KB and 640 KB of RAM, and MS-DOS needed to determine the available memory at startup. This code writes and reads bit patterns to test memory boundaries, ensuring the operating system could utilize the full extent of installed RAM. Once sized, MS-DOS relocates itself into high memory, freeing up lower memory for user applications. In 1983, memory was a scarce and expensive resource, so efficient management was paramount. Tim Paterson's original 86-DOS had been designed for the Intel 8086, a processor with a segmented memory model that made such operations necessary. The techniques developed here influenced memory management strategies in later DOS versions and other operating systems, including Windows."
  - id: "config-sys-and-command-com-integration"
    line_start: 195
    line_end: 199
    title: "Boot Sequence: Parsing CONFIG.SYS and EXECing COMMAND.COM"
    wikipedia_url: "https://en.wikipedia.org/wiki/CONFIG.SYS"
    image_url: ""
    image_caption: ""
    content: "The final lines of the file execute the boot sequence, parsing `CONFIG.SYS` and launching `COMMAND.COM`. `CONFIG.SYS` allowed users to configure device drivers and system settings, while `COMMAND.COM` provided the command-line interface. This integration marked a significant evolution from earlier versions of MS-DOS, which lacked such configurability. Inspired by Unix's initialization scripts, these features gave users greater control over their systems, enabling customization for specific hardware or software environments. In 1983, this was a groundbreaking step toward making PCs more versatile and user-friendly. The boot sequence became a defining characteristic of MS-DOS, influencing the design of subsequent operating systems, including Windows and Linux."

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
