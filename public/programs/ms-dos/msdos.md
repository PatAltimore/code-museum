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
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Revision history documents rapid iteration over two years"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Interrupt vector table defines key system entry points"
    link: "https://en.wikipedia.org/wiki/Interrupt_vector_table"
    link_label: "Interrupt Vector Table"
  - point: "File Control Block (FCB) structure reflects CP/M heritage"
    link: "https://en.wikipedia.org/wiki/CP/M"
    link_label: "CP/M"
  - point: "File Allocation Table (FAT) algorithm introduced efficient disk management"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Drive Parameter Block (DPB) defines hardware abstraction for storage devices"
    link: "https://en.wikipedia.org/wiki/DOS"
    link_label: "DOS"

enhancements:
  - id: "revision-history-rapid-iteration"
    line_start: 5
    line_end: 31
    title: "Two Years of Rapid Iteration"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png/330px-FAT_12_et_16_-_Entr%C3%A9e_d%27un_fichier.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "FAT 12 et 16 - Entrée d'un fichier (CC BY-SA 4.0)"
    content: "The revision history section provides a fascinating glimpse into the development process of MS-DOS, originally 86-DOS. Each entry documents incremental improvements and bug fixes over a two-year period, from late 1980 to early 1982. Tim Paterson, initially working at Seattle Computer Products, wrote the first version in just six weeks. After Microsoft acquired the system in July 1981, the pace of development accelerated, driven by the looming IBM PC launch. The entries reveal how the team adapted to hardware constraints, added features like hidden files and device mapping, and fixed critical bugs like the 'no write-through' error. This iterative approach, common in early software development, highlights the urgency and experimental nature of the era. The revision history also reflects the influence of CP/M, the dominant OS for microcomputers at the time, and the team's efforts to improve upon it."
  - id: "interrupt-vector-table"
    line_start: 36
    line_end: 45
    title: "Mapping the System's Nervous System"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector_table"
    image_url: ""
    image_caption: ""
    content: "This section defines the interrupt vector table, a critical mechanism for handling system-level events and hardware interactions. Each entry corresponds to a specific function, such as disk reads, fatal error handling, or Control-C aborts. In the early 1980s, interrupt-driven programming was essential for efficient operation on resource-constrained hardware like the Intel 8086. Tim Paterson's design reflects the influence of CP/M, which also used interrupts to manage I/O devices. By standardizing these entry points, MS-DOS provided a consistent interface for hardware and software developers, enabling the rapid proliferation of compatible applications and peripherals. This design choice was crucial for the success of the IBM PC and its clones, as it allowed third-party developers to create software that could run on a wide range of hardware."
  - id: "file-control-block-structure"
    line_start: 76
    line_end: 97
    title: "File Control Blocks: A Nod to CP/M"
    wikipedia_url: "https://en.wikipedia.org/wiki/CP/M"
    image_url: ""
    image_caption: ""
    content: "The File Control Block (FCB) structure is a direct inheritance from CP/M, the operating system that inspired MS-DOS. FCBs were used to manage file metadata, including file names, sizes, dates, and cluster locations. This structure was central to file management in MS-DOS 1.x, though it was later replaced by file handles in version 2.0. The design reflects the constraints of the era, such as the need to minimize memory usage and optimize disk access. Paterson's decision to retain the FCB model ensured compatibility with existing CP/M software, easing the transition for users and developers. However, the limitations of FCBs—such as their fixed size and lack of support for hierarchical directories—highlight the growing pains of early personal computing. These constraints were addressed in later versions of MS-DOS, which moved toward a more Unix-like file system."
  - id: "file-allocation-table-algorithm"
    line_start: 99
    line_end: 123
    title: "The Birth of the File Allocation Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "This section describes the File Allocation Table (FAT) algorithm, a groundbreaking approach to disk management. FAT uses a 12-bit entry for each allocation unit, packed into three bytes for every two entries. The algorithm efficiently tracks file clusters, marking unused clusters with zeros and end-of-file clusters with values greater than 0FF8H. This design was revolutionary for its simplicity and adaptability, making it ideal for the limited storage capacities and processing power of early PCs. Tim Paterson's implementation of FAT in MS-DOS laid the foundation for its widespread adoption in later operating systems, including Windows. The FAT file system became a standard for floppy disks, hard drives, and even flash storage, demonstrating the enduring impact of this early innovation."
  - id: "drive-parameter-block"
    line_start: 126
    line_end: 142
    title: "Abstracting Hardware with Drive Parameter Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOS"
    image_url: ""
    image_caption: ""
    content: "The Drive Parameter Block (DPB) structure abstracts the physical characteristics of storage devices, such as sector size, cluster size, and the layout of the File Allocation Table (FAT). This abstraction was crucial for MS-DOS's ability to support a wide variety of hardware, from floppy drives to hard disks. By encapsulating device-specific details in a standardized structure, DPBs enabled the operating system to interact with storage devices in a consistent manner. This design reflects the modular philosophy of MS-DOS, which prioritized compatibility and extensibility. The DPB concept influenced later operating systems, which adopted similar abstractions to manage diverse hardware environments. In the context of 1981, this approach was a forward-thinking solution to the challenges of a rapidly evolving computing landscape."

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