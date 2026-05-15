---
title: "COMMAND.ASM (v1.25)"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v1.25/source/COMMAND.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v1.25/source/COMMAND.ASM"
year: 1982
author: "Tim Paterson"
slug: "command"
order: 2
description: "The command interpreter — including the prompt, the error messages, and the IBM/MS-DOS split visible in a single character"

summary:
  - point: "COMMAND.COM is split into three parts: resident (always in memory), init (discarded after boot), and transient (reloadable)"
    link: "https://en.wikipedia.org/wiki/COMMAND.COM"
    link_label: "COMMAND.COM"
  - point: "The IBM version used '>' as the prompt; MS-DOS used ':' — identical code, one character apart"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "'Abort, Retry, Ignore?' — one of the most recognizable phrases in computing history, here in its original form"
    link: "https://en.wikipedia.org/wiki/Abort,_Retry,_Fail%3F"
    link_label: "Abort, Retry, Ignore"

enhancements:
  - id: "architecture"
    line_start: 1
    line_end: 17
    title: "The Three-Part Architecture"
    wikipedia_url: "https://en.wikipedia.org/wiki/COMMAND.COM"
    image_url: ""
    image_caption: ""
    content: "The opening comment describes an architectural decision that shaped how DOS handled memory for the next decade. COMMAND.COM is divided into three distinct segments. The resident portion — always present in memory — handles the four critical interrupts: INT 22H (program terminate), INT 23H (Ctrl-C), INT 24H (fatal disk error), and INT 27H (stay-resident). The init portion runs once at boot and is then overwritten — that memory is reclaimed for programs. The transient portion, which contains all the actual command processing (DIR, COPY, TYPE, and so on), loads at the highest available memory address. Programs that need maximum memory can overwrite the transient portion entirely. When they terminate, the resident portion checksums the transient area to detect if it was overwritten, and reloads it from disk if necessary. This design meant that even a 64K machine could run large programs and still have COMMAND.COM available — at the cost of a brief disk read after each program exited."

  - id: "ibm-prompt"
    line_start: 20
    line_end: 34
    title: "One Character Apart: '>' vs ':'"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The IBM and MS-DOS versions of COMMAND.COM were built from the same source file, distinguished only by two boolean constants at the top: IBMVER EQU FALSE and MSVER EQU TRUE. The most visible consequence is the command prompt character. SYM EQU '>' for IBMVER — the familiar IBM PC prompt that millions of users would type beside for years. SYM EQU ':' for MSVER — the generic MS-DOS prompt used on non-IBM machines. COMDRV EQU 1 for IBM (look for COMMAND.COM on drive B by default) versus COMDRV EQU 0 for MS-DOS (use the default drive). These two lines represent the entire product differentiation between IBM PC DOS and the MS-DOS that shipped on Compaq, Tandy, and dozens of other machines. The '>' prompt became so associated with personal computing that it entered popular culture — it is still the default shell prompt symbol on Windows systems today."

  - id: "error-messages"
    line_start: 89
    line_end: 107
    title: "Abort, Retry, Ignore?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Abort,_Retry,_Fail%3F"
    image_url: ""
    image_caption: ""
    content: "The error message table in DATARES is a catalog of everything that could go wrong with a floppy disk in 1982 — and the vocabulary is instantly recognizable to anyone who used a PC in that era. ERR0: 'Write protect' — the little tab on the floppy was covered. ERR2: 'Not ready' — no disk in the drive. ERR4: 'Data' — a sector was unreadable. ERR8: 'Sector not found' — the disk format was wrong or damaged. ERR12: 'Disk' — a catch-all. Then the message that defined a generation's relationship with computers: REQUEST DB 'Abort, Retry, Ignore? $'. Three words that presented three options and implied a fourth — the situation was already bad enough that all three options were reasonable. The question mark at the end was grammatically odd and practically perfect. When IBM changed this to 'Abort, Retry, Fail?' in a later version, it felt like a loss. The original Paterson phrasing had personality: Ignore acknowledged that sometimes the right answer was to lie to the computer and continue anyway."

  - id: "checksum"
    line_start: 10
    line_end: 16
    title: "The Transient Checksum: Self-Healing COMMAND.COM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Checksum"
    image_url: ""
    image_caption: ""
    content: "The variable SUM DW ? in the resident data area is the transient portion checksum — the mechanism that makes COMMAND.COM self-healing. When a program terminates and returns control to the resident portion, the resident code checksums the entire transient segment (which lives at the top of memory) and compares it against the stored SUM value. If they differ, the transient portion was overwritten by the program that just ran. The resident then displays the NEEDCOM message — 'Insert DOS disk in drive A' or 'Insert DOS disk in default drive' — waits for a keypress, and reloads COMMAND.COM from disk. This design meant you could run a program that used every byte of available memory, and DOS would still recover cleanly. The cost was an occasional floppy disk seek and a brief pause. The mechanism was elegant: no memory protection hardware existed on the 8086, so COMMAND.COM used arithmetic to detect interference after the fact."

---

; COMMAND version 1.17
;
; This version of COMMAND is divided into three distinct parts. First
; is the resident portion, which includes handlers for interrupts
; 22H (terminate), 23H (Cntrl-C), 24H (fatal error), and 27H (stay
; resident); it also has code to test and, if necessary, reload the
; transient portion. Following the resident is the init code, which
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
