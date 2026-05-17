---
title: "COMMAND.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v1.25/source/COMMAND.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v1.25/source/COMMAND.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "command"
order: 2
description: "The COMMAND.ASM file for MS-DOS v1.25 represents the core command interpreter, a foundational piece of software that shaped personal computing in the early 1980s."
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Resident and transient memory model for efficient resource use"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Error messages and prompts tailored for user interaction"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Command table linking keywords to subroutine addresses"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Assembly flags for IBM and MS versions of COMMAND.COM"
    link: "https://en.wikipedia.org/wiki/IBM_PC_DOS"
    link_label: "IBM PC DOS"
  - point: "Segmented memory model reflecting 8086 architecture constraints"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "resident-transient-memory-model"
    line_start: 3
    line_end: 15
    title: "Resident and transient memory: a clever split"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Intel_C8086.jpg/330px-Intel_C8086.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "A processor Intel C8086, 5 MHz. (CC BY-SA 4.0)"
    content: "This section describes the division of COMMAND.COM into resident and transient portions. The resident portion handles critical tasks like interrupt processing and memory management, while the transient portion processes commands and can be overwritten by user programs. This design reflects the constraints of early PCs, which often had less than 64KB of RAM. Tim Paterson, the original author of 86-DOS, adapted this model to maximize memory availability for user applications while ensuring the command interpreter could reload itself efficiently. The transient portion's checksum mechanism is a clever optimization, saving reload time when memory hasn't been overwritten. This memory model became a hallmark of MS-DOS, influencing how operating systems managed limited resources in the early 1980s."
  - id: "assembly-flags-for-ibm-ms-versions"
    line_start: 21
    line_end: 38
    title: "Assembly flags for IBM and MS-DOS builds"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC_DOS"
    image_url: ""
    image_caption: ""
    content: "These lines define assembly flags that allow the same source code to compile into either the IBM version of COMMAND.COM or the MS-DOS version. The IBM version uses a '>' symbol for prompts and assumes drive A as the default, while the MS-DOS version uses ':' and allows for a configurable default drive. This dual-build capability reflects Microsoft's licensing strategy, which allowed them to sell MS-DOS to multiple OEMs while maintaining compatibility with IBM's PC DOS. The flags highlight the flexibility required to support different hardware configurations and branding requirements in the rapidly expanding PC market of the early 1980s."
  - id: "segmented-memory-model"
    line_start: 70
    line_end: 94
    title: "Segmented memory: a nod to the 8086"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8086"
    image_url: ""
    image_caption: ""
    content: "The memory segments defined here—CODERES, DATARES, INIT, TAIL, TRANCODE, TRANDATA, and TRANSPACE—reflect the segmented architecture of the Intel 8086 processor. Each segment serves a specific purpose, from resident code to transient data, optimizing memory usage in a system where every byte mattered. This segmentation was a direct response to the limitations of the 8086, which could only address 64KB at a time. By grouping related data and code into segments, the designers ensured efficient execution and easier debugging. This approach influenced not just MS-DOS but also other operating systems of the era, showcasing the ingenuity required to work within hardware constraints."
  - id: "error-messages-and-prompts"
    line_start: 98
    line_end: 133
    title: "Error messages: human-readable diagnostics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "This section defines error messages and user prompts displayed by COMMAND.COM. Messages like 'Write protect' and 'Abort, Retry, Ignore?' became iconic in the early PC era, reflecting the need for clear communication with non-technical users. The prompts are carefully crafted to guide users through common issues, such as disk errors or missing files, in an era when graphical interfaces were rare. Tim Paterson's work on 86-DOS laid the groundwork for these messages, which were later refined by Microsoft engineers. These user-facing strings helped establish MS-DOS as an accessible operating system for the masses, contributing to its widespread adoption."
  - id: "command-table-keyword-mapping"
    line_start: 181
    line_end: 200
    title: "Command table: mapping keywords to routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The command table maps user-entered keywords like 'DIR' and 'COPY' to their corresponding routines in the transient portion of COMMAND.COM. Each entry consists of the command name, its length, and the address of the associated subroutine. This design allows the command interpreter to quickly identify and execute commands, a critical feature for an operating system designed to run on hardware with limited processing power. The table reflects the simplicity and efficiency required in the early days of personal computing, where speed and resource conservation were paramount. This approach to command parsing became a standard in many subsequent operating systems, influencing the development of command-line interfaces for decades."

---

; COMMAND version 1.17
;
; This version of COMMAND is divided into three distinct parts. First
; is the resident portion, which includes handlers for interrupts
; 22H (terminate), 23H (Cntrl-C), 24H (fatal error), and 27H (stay
; resident); it also has code to test and, if necessary, reload the
; transient portion. Following the resident is the init code, which is
; overwritten after use. Then comes the transient portion, which
; includes all command processing (whether internal or external).
; The transient portion loads at the end of physical memory, and it may
; be overlayed by programs that need as much memory as possible. When
; the resident portion of command regains control from a user program,
; a checksum is performed on the transient portion to see if it must be
; reloaded. Thus programs which do not need maximum memory will save
; the time required to reload COMMAND when they terminate.

;Use the following booleans to set assembly flags
FALSE   EQU     0
TRUE    EQU     NOT FALSE

IBMVER  EQU     FALSE   ;Switch to build IBM version of Command
MSVER   EQU     TRUE    ;Switch to build MS-DOS version of Command

HIGHMEM EQU     TRUE    ;Run resident part above transient (high memory)

LINPERPAG       EQU     23
NORMPERLIN      EQU     1
WIDEPERLIN      EQU     5

        IF      IBMVER
SYM     EQU     ">"
COMDRV  EQU     1
        ENDIF

        IF      MSVER
SYM     EQU     ":"
COMDRV  EQU     0
        ENDIF

FCB     EQU     5CH
DSKRESET EQU    13
SETBASE EQU     38
SRCHFRST EQU    17
SRCHNXT EQU     18
RENAM   EQU     23
INCHAR  EQU     1
GETFAT  EQU     27
OPEN    EQU     15
CLOSE   EQU     16
MAKE    EQU     22
DELETE  EQU     19
RDBLK   EQU     39
WRBLK   EQU     40
SETDMA  EQU     26
SELDRV  EQU     14
GETDRV  EQU     25
PRINTBUF EQU    9
OUTCH   EQU     2
INBUF   EQU     10
GETDATE EQU     2AH
SETDATE EQU     2BH
GETTIME EQU     2CH
SETTIME EQU     2DH
RR      EQU     33
RECLEN  EQU     14
FILLEN  EQU     16
OFFDATE EQU     20


;The following are all of the segments used in the load order

CODERES SEGMENT
CODERES ENDS

DATARES SEGMENT BYTE
DATARES ENDS

INIT    SEGMENT BYTE
INIT    ENDS

TAIL    SEGMENT PARA
TAIL    ENDS

TRANCODE        SEGMENT PARA
TRANCODE        ENDS

TRANDATA        SEGMENT BYTE
TRANDATA        ENDS

TRANSPACE       SEGMENT BYTE
TRANSPACE       ENDS

RESGROUP        GROUP   CODERES,DATARES,INIT,TAIL
TRANGROUP       GROUP   TRANCODE,TRANDATA,TRANSPACE

;Data for resident portion

DATARES SEGMENT BYTE
        ORG     0
ZERO    =       $
MESBAS  DW      OFFSET RESGROUP:ERR0
        DW      OFFSET RESGROUP:ERR2
        DW      OFFSET RESGROUP:ERR4
        DW      OFFSET RESGROUP:ERR6
        DW      OFFSET RESGROUP:ERR8
        DW      OFFSET RESGROUP:ERR10
        DW      OFFSET RESGROUP:ERR12
ERR0    DB      "Write protect$"
ERR2    DB      "Not ready$"
ERR4    DB      "Data$"
ERR6    DB      "Seek$"
ERR8    DB      "Sector not found$"
ERR10   DB      "Write fault$"
ERR12   DB      "Disk$"
READ    DB      "read$"
WRITE   DB      "writ$"
ERRMES  DB      " error "
IOTYP   DB      "writing"
DRVNUM  DB      " drive "
DRVLET  DB      "A"
NEWLIN  DB      13,10,"$"
REQUEST DB      "Abort, Retry, Ignore? $"
BADFAT  DB      13,10,"File allocation table bad,$"
COMBAD  DB      13,10,"Invalid COMMAND.COM"
NEEDCOM DB      13,10,"Insert DOS disk in "
        IF      IBMVER
        DB      "drive A"
        ELSE
        DB      "default drive"
        ENDIF
PROMPT  DB      13,10,"and strike any key when ready",13,10,"$"
NEEDBAT DB      13,10,"Insert disk with batch file$"
ENDBATMES DB    13,10,"Terminate batch job (Y/N)? $"
LOADING DB      0
BATFCB  DB      1,"AUTOEXECBAT"
        DB      21 DUP(?)
        DW      0
        DW      0               ;Initialize RR field to zero
PARMTAB DW      10 DUP(-1)      ;No parameters initially
BATCH   DB      1               ;Assume batch mode initially
COMFCB  DB      COMDRV,"COMMAND COM"
        DB      25 DUP(?)
TRANS   DW      OFFSET TRANGROUP:COMMAND
TRNSEG  DW      ?
BATBYT  DB      ?
MEMSIZ  DW      ?
SUM     DW      ?
INITADD DB      4 DUP(?)
RESDATASIZE     EQU     $-ZERO
DATARES ENDS

;Data for transient portion

TRANDATA        SEGMENT BYTE
        ORG     0
ZERO    EQU     $
BADNAM  DB      "Bad command or file name",13,10,"$"
MISNAM  DB      "Missing file name$"
RENERR  DB      "Duplicate file name or "
NOTFND  DB      "File not found$"
EXEBAD  DB      "Error in EXE file$"
NOSPACE DB      "Insufficient disk space",13,10,"$"
FULDIR  DB      "File creation error",13,10,"$"
OVERWR  DB      "File cannot be copied onto itself",13,10,"$"
LOSTERR DB      "Content of destination lost before copy",13,10,"$"
COPIED  DB      " File(s) copied$"
DIRMES  DB      " File(s)$"
TOOBIG  DB      "Program too big to fit in memory$"
BADDRV  DB      "Invalid drive specification$"
PAUSMES DB      "Strike a key when ready . . . $"
BADSWT  DB      "Illegal switch",13,10,"$"
WEEKTAB DB      "SunMonTueWedThuFriSat"
BADDAT  DB      13,10,"Invalid date$"
CURDAT  DB      "Current date is $"
NEWDAT  DB      13,10,"Enter new date: $"
BADTIM  DB      13,10,"Invalid time$"
CURTIM  DB      "Current time is $"
NEWTIM  DB      13,10,"Enter new time: $"
SUREMES DB      "Are you sure (Y/N)? $"

COMTAB  DB      4,"DIR",1
        DW      OFFSET TRANGROUP:CATALOG
        DB      7,"RENAME",1
        DW      OFFSET TRANGROUP:RENAME
        DB      4,"REN",1
        DW      OFFSET TRANGROUP:RENAME
        DB      6,"ERASE",1
        DW      OFFSET TRANGROUP:ERASE
        DB      4,"DEL",1
        DW      OFFSET TRANGROUP:ERASE
        DB      5,"TYPE",1
        DW      OFFSET TRANGROUP:TYPEFIL
        DB      4,"REM",1
        DW      OFFSET TRANGROUP:COMMAND
        DB      5,"COPY",1
        DW      OFFSET TRANGROUP:COPY
        DB      6,"PAUSE",1
        DW      OFFSET TRANGROUP:PAUSE
        DB      5,"DATE",0
        DW      OFFSET TRANGROUP:DATE