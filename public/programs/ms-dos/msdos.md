---
title: "MSDOS.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v1.25/source/MSDOS.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v1.25/source/MSDOS.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "msdos"
order: 1
description: "The foundational assembly code for MS-DOS 1.25, a pivotal operating system in personal computing history."

summary:
  - point: "Revision history meticulously documents every change to the OS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Interrupt entry points define key system functions"
    link: "https://en.wikipedia.org/wiki/Interrupt_handler"
    link_label: "Interrupt handler"
  - point: "File Control Block (FCB) structure reflects CP/M heritage"
    link: "https://en.wikipedia.org/wiki/CP/M"
    link_label: "CP/M"
  - point: "File Allocation Table (FAT) algorithm introduced efficient disk management"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Drive Parameter Block (DPB) defines hardware-specific disk parameters"
    link: "https://en.wikipedia.org/wiki/Disk_partitioning"
    link_label: "Disk partitioning"

enhancements:
  - id: "revision-history-msdos"
    line_start: 5
    line_end: 31
    title: "Every Change, Every Bug Fix, Every Step Forward"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "The revision history section is a time capsule of MS-DOS's evolution. Each entry documents changes made to the operating system, from adding 32-byte directory entries to introducing hidden files and fatal error trapping. Tim Paterson, the original author, likely began this practice during his six-week sprint to create 86-DOS at Seattle Computer Products in 1980. By the time Microsoft acquired the code in 1981, the revision history had become a vital tool for tracking improvements and debugging. This meticulous record-keeping reflects the constraints of early computing: every byte mattered, and every bug fix could mean the difference between success and failure. The entries also hint at the rapid pace of development, with updates sometimes only days apart. Today, this section offers a rare glimpse into the iterative process that shaped one of the most influential operating systems in history."
  - id: "interrupt-entry-points"
    line_start: 36
    line_end: 45
    title: "Interrupts: The Backbone of MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/CPM-86.png/330px-CPM-86.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "CP/M-86 screenshot (Public domain)"
    content: "This block defines the interrupt entry points for MS-DOS, mapping critical system functions to specific memory addresses. Interrupts are the glue that binds hardware and software, allowing the operating system to respond to events like disk reads, writes, and fatal errors. In the early 1980s, the IBM PC's 8086 processor relied heavily on interrupts for efficient operation, and MS-DOS needed to make the most of this feature to compete with CP/M and other contemporaries. Tim Paterson's design reflects his deep understanding of the hardware, gained during his time at Seattle Computer Products. These entry points became a standard interface for software developers, ensuring compatibility across a growing ecosystem of applications. The interrupt-driven design remains a cornerstone of modern operating systems, though its implementation has evolved significantly."
  - id: "file-control-block"
    line_start: 76
    line_end: 97
    title: "The Legacy of CP/M in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/CP/M"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png/330px-FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "FAT 12 et 16 - Entrée d'un fichier (CC BY-SA 4.0)"
    content: "The File Control Block (FCB) structure is a direct inheritance from CP/M, the dominant operating system for 8-bit microcomputers in the late 1970s. The FCB defines metadata for files, including their name, size, and creation date, as well as pointers to their location on disk. When Tim Paterson designed 86-DOS, he borrowed heavily from CP/M to ensure familiarity for developers and users transitioning to the 16-bit 8086 architecture. This decision was both practical and strategic: CP/M's widespread adoption meant that compatibility could accelerate MS-DOS's acceptance. However, the FCB's limitations—such as fixed-length filenames—would eventually lead to its replacement in MS-DOS 2.0 by a more flexible file handle system inspired by Unix. The FCB remains a fascinating artifact of early personal computing, a bridge between two eras."
  - id: "file-allocation-table"
    line_start: 112
    line_end: 123
    title: "FAT: A Simple Yet Revolutionary Disk System"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/GParted_1.3.1_screenshot.png/330px-GParted_1.3.1_screenshot.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Screenshot of GParted 1.3.1 (GPL)"
    content: "The File Allocation Table (FAT) algorithm is one of MS-DOS's most enduring contributions to computing. This section describes how FAT organizes disk storage into clusters and tracks file locations using a 12-bit entry system. The simplicity of FAT made it ideal for the limited memory and processing power of early PCs, while its efficiency ensured fast file access. Tim Paterson likely drew inspiration from earlier disk management techniques but adapted them to the constraints of the 8086 processor and IBM PC hardware. FAT's design proved so effective that it became the foundation for subsequent versions of MS-DOS, Windows, and even removable storage formats like USB drives. Its longevity is a testament to the brilliance of its design, though modern systems have largely moved on to more advanced file systems like NTFS and ext4."
  - id: "drive-parameter-block"
    line_start: 126
    line_end: 142
    title: "Hardware-Specific Disk Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_partitioning"
    image_url: ""
    image_caption: ""
    content: "The Drive Parameter Block (DPB) is a data structure that defines the physical characteristics of a disk drive, including sector size, cluster size, and the location of the File Allocation Table (FAT). This level of abstraction allowed MS-DOS to support a variety of storage devices, from floppy disks to hard drives. In the early 1980s, storage technology was rapidly evolving, and operating systems had to adapt to new hardware without sacrificing compatibility. Tim Paterson's design ensured that MS-DOS could scale with the IBM PC's expanding ecosystem, a critical factor in its success. The DPB's modular approach influenced later operating systems, which adopted similar strategies to manage diverse hardware configurations. While the specifics of disk management have changed, the DPB represents a foundational step in the evolution of storage abstraction."

---

; excerpt — first 200 lines of v1.25/source/MSDOS.ASM

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

; Field definition for FCBs

FCBLOCK STRUC
        DB      12 DUP (?)              ;Drive code and name
EXTENT  DW      ?
RECSIZ  DW      ?       ;Size of record (user settable)
FILSIZ  DW      ?       ;Size of file in bytes
DRVBP   DW      ?       ;BP for SEARCH FIRST and SEARCH NEXT
FDATE   DW      ?       ;Date of last writing
FTIME   DW      ?       ;Time of last writing
DEVID   DB      ?       ;Device ID number, bits 0-5
                        ;bit 7=0 for file, bit 7=1 for I/O device
                        ;If file, bit 6=0 if dirty
                        ;If I/O device, bit 6=0 if EOF (input)
FIRCLUS DW      ?       ;First cluster of file
LSTCLUS DW      ?       ;Last cluster accessed
CLUSPOS DW      ?       ;Position of last cluster accessed
        DB      ?       ;Forces NR to offset 32
NR      DB      ?       ;Next record
RR      DB      3 DUP (?)               ;Random record
FCBLOCK ENDS
FILDIRENT       = FILSIZ                ;Used only by SEARCH FIRST and SEARCH NEXT

; Description of 32-byte directory entry (same as returned by SEARCH FIRST
; and SEARCH NEXT, functions 17 and 18).
;
; Location      bytes   Description
;
;    0          11      File name and extension ( 0E5H if empty)
;   11           1      Attributes. Bits 1 or 2 make file hidden
;   12          10      Zero field (for expansion)
;   22           2      Time. Bits 0-4=seconds/2, bits 5-10=minute, 11-15=hour
;   24           2      Date. Bits 0-4=day, bits 5-8=month, bits 9-15=year-1980
;   26           2      First allocation unit ( < 4080 )
;   28           4      File size, in bytes (LSB first, 30 bits max.)
;
; The File Allocation Table uses a 12-bit entry for each allocation unit on
; the disk. These entries are packed, two for every three bytes. The contents
; of entry number N is found by 1) multiplying N by 1.5; 2) adding the result
; to the base address of the Allocation Table; 3) fetching the 16-bit word at
; this address; 4) If N was odd (so that N*1.5 was not an integer), shift the
; word right four bits; 5) mask to 12 bits (AND with 0FFF hex). Entry number
; zero is used as an end-of-file trap in the OS and as a flag for directory
; entry size (if SMALLDIR selected). Entry 1 is reserved for future use. The
; first available allocation unit is assigned entry number two, and even
; though it is the first, is called cluster 2. Entries greater than 0FF8H are
; end of file marks; entries of zero are unallocated. Otherwise, the contents
; of a FAT entry is the number of the next cluster in the file.


; Field definition for Drive Parameter Block

DPBLOCK STRUC
DEVNUM  DB      ?       ;I/O driver number
DRVNUM  DB      ?       ;Physical Unit number
SECSIZ  DW      ?       ;Size of physical sector in bytes
CLUSMSK DB      ?       ;Sectors/cluster - 1
CLUSSHFT DB     ?       ;Log2 of sectors/cluster
FIRFAT  DW      ?       ;Starting record of FATs
FATCNT  DB      ?       ;Number of FATs for this drive
MAXENT  DW      ?       ;Number of directory entries
FIRREC  DW      ?       ;First sector of first cluster
MAXCLUS DW      ?       ;Number of clusters on drive + 1
FATSIZ  DB      ?       ;Number of records occupied by FAT
FIRDIR  DW      ?       ;Starting record of directory
FAT     DW      ?       ;Pointer to start of FAT
DPBLOCK ENDS

DPBSIZ  EQU     20      ;Size of the structure in bytes
DIRSEC  =       FIRREC  ;Number of dir. sectors (init temporary)
DSKSIZ  =       MAXCLUS ;Size of disk (temp used during init only)

;The following are all of the segments used
;They are declared in the order that they should be placed in the executable

CODE    SEGMENT
CODE    ENDS

CONSTANTS       SEGMENT BYTE
CONSTANTS       ENDS

DATA    SEGMENT WORD
DATA    ENDS

DOSGROUP        GROUP   CODE,CONSTANTS,DATA

SEGBIOS SEGMENT
SEGBIOS ENDS


; BOIS entry point definitions

        IF      IBM
BIOSSEG EQU     60H
        ENDIF
        IF      NOT IBM
BIOSSEG EQU     40H
        ENDIF

SEGBIOS         SEGMENT AT BIOSSEG
                ORG     0
                DB      3 DUP (?)       ;Reserve room for jump to init code
BIOSSTAT        DB      3 DUP (?)       ;Console input status check
BIOSIN          DB      3 DUP (?)       ;Get console character
BIOSOUT         DB      3 DUP (?)       ;Output console character
BIOSPRINT       DB      3 DUP (?)       ;Output to printer
BIOSAUXIN       DB      3 DUP (?)       ;Get byte from auxilliary
BIOSAUXOUT      DB      3 DUP (?)       ;Output byte to auxilliary
BIOSREAD        DB      3 DUP (?)       ;Disk read
BIOSWRITE       DB      3 DUP (?)       ;Disk write
BIOSDSKCHG      DB      3 DUP (?)       ;Dsik-change status
BIOSSETDATE     DB      3 DUP (?)       ;Set date
BIOSSETTIME     DB      3 DUP (?)       ;Set time
BIOSGETTIME     DB      3 DUP (?)       ;Get time and date
BIOSFLUSH       DB      3 DUP (?)       ;Clear console input buffer
BIOSMAPDEV      DB      3 DUP (?)       ;Dynamic disk table mapper

SEGBIOS ENDS
; Location of user registers relative user stack pointer

STKPTRS STRUC
AXSAVE  DW      ?
BXSAVE  DW      ?
CXSAVE  DW      ?
DXSAVE  DW      ?