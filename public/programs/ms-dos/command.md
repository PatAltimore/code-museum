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
description: "The COMMAND.ASM file is the source code for the MS-DOS command interpreter, a foundational piece of software that shaped personal computing in the 1980s."

summary:
  - point: "Resident and transient portions divide memory use for efficiency"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Error messages and prompts reflect constraints of early user interfaces"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Boolean flags toggle between IBM and Microsoft builds"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS versions"
  - point: "Hardcoded command table defines internal commands"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line commands"
  - point: "Memory segments reflect early 8086 assembly practices"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "resident-and-transient-memory-management"
    line_start: 3
    line_end: 15
    title: "Resident vs transient: memory management innovation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "These lines describe the division of the MS-DOS COMMAND interpreter into resident and transient portions. The resident portion remains in memory at all times, handling critical interrupts and ensuring the transient portion can be reloaded if overwritten. The transient portion, which handles command processing, is loaded at the end of physical memory and may be overwritten by programs requiring maximum memory. This design reflects the constraints of early personal computers like the IBM PC, which typically had only 16 KB to 64 KB of RAM. Tim Paterson, the original author of 86-DOS, likely borrowed this approach from CP/M, which used a similar transient command processor. By dividing the interpreter, MS-DOS maximized available memory for user programs—a critical feature in an era when memory was scarce and expensive. This memory management strategy influenced later operating systems and demonstrated how software could adapt to hardware limitations."
  - id: "boolean-flags-for-build-variants"
    line_start: 21
    line_end: 38
    title: "Boolean flags: tailoring builds for IBM and Microsoft"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "These lines define boolean flags that toggle between building the IBM version of COMMAND and the Microsoft version. The IBM version uses '>' as the command prompt symbol, while the Microsoft version uses ':'. This distinction reflects the dual licensing strategy Microsoft adopted after acquiring 86-DOS. IBM's PC DOS was tailored for the IBM PC, while MS-DOS was licensed to other OEMs. This flexibility was critical to Microsoft's success, as it allowed them to dominate the emerging personal computer market. The flags also highlight the modularity of the code, enabling rapid adaptation to different hardware and branding requirements. This approach became a hallmark of Microsoft's software development, allowing them to scale their products across diverse platforms."
  - id: "error-messages-and-user-prompts"
    line_start: 98
    line_end: 133
    title: "Error messages: human-readable simplicity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png/330px-Linux_command-line._Bash._GNOME_Terminal._screenshot.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Sample of Bash in GNOME Terminal. Screenshot taken in Fedora. Outputs of ping, pwd, cd, yum and ls command. (GPL)"
    content: "This section defines error messages and user prompts for the resident portion of COMMAND. Messages like 'Write protect' and 'Abort, Retry, Ignore?' reflect the simplicity and directness required in early command-line interfaces. In the early 1980s, most users were unfamiliar with computers, and clear, concise messages were essential for usability. These messages also reveal the constraints of the era: limited screen space, no graphical interface, and the need to fit functionality into a few kilobytes of memory. Tim Paterson's work on 86-DOS, and later MS-DOS, was influenced by CP/M, which used similar error handling conventions. These messages became iconic, shaping user expectations for decades and influencing the design of later operating systems."
  - id: "memory-segments-and-grouping"
    line_start: 70
    line_end: 95
    title: "Memory segments: organizing the interpreter"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8086"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Intel_C8086.jpg/330px-Intel_C8086.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "A processor Intel C8086, 5 MHz. (CC BY-SA 4.0)"
    content: "This section defines memory segments for the resident and transient portions of COMMAND. Segments like CODERES, DATARES, and TRANCODE reflect the practices of 8086 assembly programming, where memory was divided into discrete blocks for code, data, and stack. The grouping of segments into RESGROUP and TRANGROUP further organizes the interpreter, ensuring efficient memory use and simplifying relocation. In the early 1980s, the Intel 8086 processor's segmented memory model was both a constraint and an opportunity. Programmers had to carefully manage memory to avoid fragmentation and ensure compatibility with hardware. Tim Paterson's design demonstrates a deep understanding of these constraints, creating a flexible and efficient interpreter that could run on a wide range of systems."
  - id: "hardcoded-command-table"
    line_start: 181
    line_end: 200
    title: "Command table: defining internal commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png/330px-Linux_command-line._Bash._GNOME_Terminal._screenshot.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Sample of Bash in GNOME Terminal. Screenshot taken in Fedora. Outputs of ping, pwd, cd, yum and ls command. (GPL)"
    content: "This section defines a hardcoded table of internal commands, including 'DIR,' 'RENAME,' and 'COPY.' Each command is associated with a string and a pointer to its corresponding routine in the transient portion. This design reflects the simplicity of early command-line interfaces, where commands were limited and hardcoded for efficiency. In 1981, personal computers were just beginning to reach mainstream users, and the command-line interface was the primary way to interact with the system. Tim Paterson's choice to hardcode commands ensured fast execution and minimized memory use, crucial in an era of limited resources. This approach influenced the design of later operating systems, where internal commands remained a core feature of the command-line interface."

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