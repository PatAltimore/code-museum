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
description: "The COMMAND.ASM file from MS-DOS v1.25 is a foundational piece of computing history, showcasing the early design of a command-line interface that shaped personal computing for decades."

summary:
  - point: "Resident-transient memory model for efficient command execution"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Assembly flags for IBM and Microsoft versions"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Error message table for user feedback"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Command table mapping keywords to routines"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS commands"

enhancements:
  - id: "resident-transient-memory-model"
    line_start: 3
    line_end: 15
    title: "Resident-transient memory model innovation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "These lines describe the dual memory model used in COMMAND.COM, dividing the program into resident and transient portions. The resident portion handles essential interrupts and remains in memory, while the transient portion, responsible for command processing, can be overwritten by user programs needing maximum memory. This design reflects the constraints of early PCs, which often had only 64KB or 128KB of RAM. Tim Paterson, who originally developed 86-DOS, likely borrowed this approach from CP/M, which had a similar transient-resident structure. The checksum mechanism ensures that the transient portion is reloaded only when necessary, optimizing performance. This model was crucial for enabling multitasking-like behavior on hardware that lacked native support for it, and it influenced later operating systems that sought to balance memory usage with functionality."
  - id: "assembly-flags-for-versioning"
    line_start: 17
    line_end: 38
    title: "Assembly flags for IBM and MS versions"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png/330px-Linux_command-line._Bash._GNOME_Terminal._screenshot.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Sample of Bash in GNOME Terminal. Screenshot taken in Fedora. Outputs of ping, pwd, cd, yum and ls command. (GPL)"
    content: "These lines define assembly flags to differentiate between the IBM and Microsoft versions of COMMAND.COM. The IBM version uses '>' as the command prompt symbol, while the MS-DOS version uses ':'. This distinction reflects the licensing agreement between Microsoft and IBM, where Microsoft retained the rights to sell MS-DOS to other OEMs. The flags also set parameters like the default drive and memory configuration. In 1981, the IBM PC was a groundbreaking machine, and its success depended heavily on the software ecosystem, including PC DOS (a rebranded MS-DOS). These flags allowed Microsoft to maintain a single codebase while tailoring builds for different partners, a strategy that contributed to MS-DOS's widespread adoption."
  - id: "error-message-table"
    line_start: 98
    line_end: 149
    title: "Error message table for user feedback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This section defines error messages and prompts displayed to users during command execution. Each message is stored as a string in memory, with placeholders for dynamic content like drive letters. In the early 1980s, user interfaces were predominantly text-based, and clear error messages were vital for usability. Tim Paterson's design ensured that even novice users could understand and respond to errors, a significant improvement over the cryptic messages of earlier systems. The inclusion of prompts like 'Abort, Retry, Ignore?' became iconic, symbolizing the era of command-line computing. These messages also highlight the importance of user interaction in the design of early operating systems, laying the groundwork for more sophisticated interfaces in later years."
  - id: "command-table-keyword-mapping"
    line_start: 181
    line_end: 200
    title: "Command table mapping keywords to routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines a table mapping command keywords like 'DIR' and 'COPY' to their corresponding routines in memory. Each entry includes the command name, its length, and a pointer to the routine. This design allows COMMAND.COM to efficiently parse and execute user input. In 1981, MS-DOS was competing with CP/M, which had a similar command structure. By organizing commands in a table, Tim Paterson ensured extensibility and maintainability, enabling new commands to be added with minimal disruption. This approach influenced the design of command interpreters in later operating systems, including Windows and Unix shells. The table also reflects the constraints of early PCs, where memory and processing power were limited, necessitating compact and efficient code."

---

; excerpt — first 200 lines of v1.25/source/COMMAND.ASM

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