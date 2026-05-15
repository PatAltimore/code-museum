---
title: "MSDOS.ASM (v1.25)"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v1.25/source/MSDOS.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v1.25/source/MSDOS.ASM"
year: 1982
author: "Tim Paterson"
slug: "msdos"
order: 1
description: "The original 86-DOS kernel — six weeks of work by one programmer that became the foundation of PC computing"

summary:
  - point: "Tim Paterson wrote 86-DOS in roughly six weeks at Seattle Computer Products in 1980"
    link: "https://en.wikipedia.org/wiki/86-DOS"
    link_label: "86-DOS history"
  - point: "Microsoft bought the full rights for $25,000 in July 1981, then licensed it to IBM and every clone maker"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "The revision history in lines 6–27 is the complete provenance of PC-era computing, in Paterson's own comments"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "revision-history"
    line_start: 1
    line_end: 27
    title: "The Revision History: A Biography of the OS"
    wikipedia_url: "https://en.wikipedia.org/wiki/86-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Seattle_Computer_Products_86-DOS.jpg/440px-Seattle_Computer_Products_86-DOS.jpg"
    image_caption: "Seattle Computer Products 86-DOS, the direct predecessor of MS-DOS. Tim Paterson wrote it in roughly six weeks in 1980. Public domain."
    content: "The file opens with a version history that is also a timeline of the PC industry's birth. Version 0.34, released December 29, 1980, was the first general release — Paterson had written the entire operating system in roughly six weeks earlier that year. The entries march through 1981: 32-byte directory entries in February, variable record sizes in March, device file names in April. Version 1.00 on April 28, 1981 was the first general release renumbering. Then, on July 21, 1981 — three weeks before the IBM PC launched — version 1.10 added fatal error trapping and hidden files. The IBM PC shipped August 12, 1981 with PC DOS 1.0, which was essentially this code. Version 1.25, dated March 3, 1982, is the first general OEM release beyond IBM — the version that would go to the 70-plus manufacturers Microsoft had licensed within a year. Every line of this comment block is a chapter in the story of how one programmer's six-week project became the software foundation of a trillion-dollar industry."

  - id: "ibm-conditional"
    line_start: 44
    line_end: 57
    title: "The IBM Switch: One Source, Two Products"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_Personal_Computer"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IBM_PC_5150.jpg/440px-IBM_PC_5150.jpg"
    image_caption: "IBM PC 5150, launched August 12, 1981. The IBM and MS-DOS variants differed only in a compile-time flag. Public domain."
    content: "A single conditional assembly flag — IF IBM — controlled whether you were building IBM PC DOS or generic MS-DOS. The differences are telling: ESCCH (the escape character) is 0 for IBM and 1BH for everyone else. CANCEL uses ESC for IBM and Ctrl-X for generic DOS. TOGLINS and TOGLPRN are TRUE for IBM (single-key toggling) and FALSE otherwise (separate keys). NUMDEV is 6 for IBM (including COM1 as a device name) and 5 for everyone else. ZEROEXT is TRUE for IBM, which meant the extent field in FCBs was zeroed on open — a compatibility detail that affected how programs stored state across file operations. The same assembly file, the same programmer, one compile-time boolean: that was the entire technical distinction between the two products that defined the PC industry's bifurcation. Microsoft retained the right to license MS-DOS to any OEM manufacturer — not just IBM. That single business decision, enforced by this single flag, built Microsoft."

  - id: "fcb-structure"
    line_start: 58
    line_end: 75
    title: "MAXCALL and the System Call Interface"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "MAXCALL EQU 36 defines the highest-numbered INT 21h function that DOS will accept through the standard entry point. MAXCOM EQU 46 is the higher limit for the CALL 5 compatibility entry point inherited from CP/M. These two constants define the entire documented API surface of MS-DOS 1.25 — everything from function 0 (terminate) through function 36 (set relative record position). The FCB (File Control Block) structure inherited from CP/M was intentional: Paterson designed 86-DOS to be CP/M compatible at the source level, so that the enormous existing catalog of CP/M software could be recompiled for the 8086 with minimal changes. INTBASE EQU 80H establishes the interrupt vector table base — the fixed address where DOS patched in its own handlers, replacing whatever the BIOS had installed. ENTRYPOINT EQU INTBASE+40H at address C0H is the long-jump stub that gave CP/M programs their familiar CALL 5 entry point."

  - id: "int21-dispatch"
    line_start: 58
    line_end: 75
    title: "The INT 21h Contract: MAXCALL EQU 36"
    wikipedia_url: "https://en.wikipedia.org/wiki/INT_21H"
    image_url: ""
    image_caption: ""
    content: "MAXCALL EQU 36 is one of the most consequential lines in PC software history. It defines the upper bound of the INT 21h dispatch table — the complete list of operating system services that any DOS program could call. For the next decade, every word processor, spreadsheet, game, database, and utility written for the IBM PC and its clones invoked one of these 37 functions (0 through 36) to read files, write to the console, allocate memory, and terminate. The number 36 is the entire API contract between an operating system and an industry. When MS-DOS 2.0 arrived in 1983, MAXCALL grew — but the original 37 functions remained unchanged, backward-compatible, called billions of times on hundreds of millions of machines. This single EQU statement created the software compatibility guarantee that made the IBM PC clone market possible."

---

; 86-DOS  High-performance operating system for the 8086  version 1.25
;       by Tim Paterson


; ****************** Revision History *************************
;          >> EVERY change must noted below!! <<
;
; 0.34 12/29/80 General release, updating all past customers
; 0.42 02/25/81 32-byte directory entries added
; 0.56 03/23/81 Variable record and sector sizes
; 0.60 03/27/81 Ctrl-C exit changes, including register save on user stack
; 0.74 04/15/81 Recognize I/O devices with file names
; 0.75 04/17/81 Improve and correct buffer handling
; 0.76 04/23/81 Correct directory size when not 2^N entries
; 0.80 04/27/81 Add console input without echo, Functions 7 & 8
; 1.00 04/28/81 Renumber for general release
; 1.01 05/12/81 Fix bug in `STORE'
; 1.10 07/21/81 Fatal error trapping, NUL device, hidden files, date & time,
;               RENAME fix, general cleanup
; 1.11 09/03/81 Don't set CURRENT BLOCK to 0 on open; fix SET FILE SIZE
; 1.12 10/09/81 Zero high half of CURRENT BLOCK after all (CP/M programs don't)
; 1.13 10/29/81 Fix classic "no write-through" error in buffer handling
; 1.20 12/31/81 Add time to FCB; separate FAT from DPT; Kill SMALLDIR;
;               Add FLUSH and MAPDEV calls; allow disk mapping in DSKCHG;
;               Lots of smaller improvements
; 1.21 01/06/82 HIGHMEM switch to run DOS in high memory
; 1.22 01/12/82 Add VERIFY system call to enable/disable verify after write
; 1.23 02/11/82 Add defaulting to parser; use variable escape character
;               Don't zero extent field in IBM version (back to 1.01!)
; 1.24 03/01/82 Restore fcn. 27 to 1.0 level; add fcn. 28
; 1.25 03/03/82 Put marker (00) at end of directory to speed searches
;
; *************************************************************


; Interrupt Entry Points:

; INTBASE:      ABORT
; INTBASE+4:    COMMAND
; INTBASE+8:    BASE EXIT ADDRESS
; INTBASE+C:    CONTROL-C ABORT
; INTBASE+10H:  FATAL ERROR ABORT
; INTBASE+14H:  BIOS DISK READ
; INTBASE+18H:  BIOS DISK WRITE
; INTBASE+40H:  Long jump to CALL entry point

        IF      IBM
ESCCH   EQU     0
CANCEL  EQU     1BH             ;Cancel with ESC
TOGLINS EQU     TRUE            ;One key toggles insert mode
TOGLPRN EQU     TRUE            ;One key toggles printer echo
NUMDEV  EQU     6               ;Include "COM1" as I/O device name
ZEROEXT EQU     TRUE
        ELSE
ESCCH   EQU     1BH
CANCEL  EQU     "X"-"@"         ;Cancel with Ctrl-X
TOGLINS EQU     FALSE           ;Separate keys for insert mode on and off
TOGLPRN EQU     FALSE           ;Separate keys for printer echo on and off
NUMDEV  EQU     5               ;Number of I/O device names
ZEROEXT EQU     FALSE
        ENDIF

MAXCALL EQU     36
MAXCOM  EQU     46
INTBASE EQU     80H
INTTAB  EQU     20H
ENTRYPOINTSEG   EQU     0CH
ENTRYPOINT      EQU     INTBASE+40H
CONTC   EQU     INTTAB+3
EXIT    EQU     INTBASE+8
LONGJUMP EQU    0EAH
LONGCALL EQU    9AH
MAXDIF  EQU     0FFFH
SAVEXIT EQU     10
