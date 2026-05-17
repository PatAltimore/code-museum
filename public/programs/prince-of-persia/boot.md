---
title: "BOOT.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/BOOT.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/BOOT.S"
year: 1989
author: "Jordan Mechner"
slug: "boot"
order: 2
description: "The boot sequence for Prince of Persia on the Apple II, showcasing ingenious memory management and hardware interaction in 6502 assembly."

summary:
  - point: "Bank-switched memory initialization for Apple II hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Sector skew table for optimized disk reads"
    link: "https://en.wikipedia.org/wiki/Disk_sector"
    link_label: "Disk sector"
  - point: "Routine to check for 128K memory compatibility"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Memory copy routine with potential for catastrophic overwrites"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"
  - point: "Routines for displaying error messages on Apple II hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"

enhancements:
  - id: "boot-sector-initialization"
    line_start: 1
    line_end: 40
    title: "Boot sector: Preparing the Apple II hardware"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Apple_II-IMG_7064.jpg/330px-Apple_II-IMG_7064.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Apple II computer.  On display at the Musée Bolo, EPFL, Lausanne. (CC BY-SA 2.0 fr)"
    content: "The opening lines of this file set the stage for Prince of Persia's boot process on the Apple II. Here, Jordan Mechner initializes key hardware registers and memory locations, ensuring the system is ready to load the game. The Apple II's architecture required careful management of its limited resources, including bank-switched memory and hardware-specific registers. Mechner's code disables features like 80-column mode and alternate character sets, which were unnecessary for the game's cinematic visuals. This section also includes calls to ROM routines for text display and cursor positioning, leveraging built-in Apple II functionality to simplify early setup tasks. In 1989, the Apple II was nearing the end of its commercial lifespan, but its 6502 processor remained a favorite among developers for its simplicity and efficiency. Mechner's work here reflects the meticulous attention to detail required to make complex games run on such constrained hardware. The decisions made in this section laid the groundwork for the game's smooth operation, ensuring that every byte of memory was accounted for and every hardware feature was configured correctly."
  - id: "sector-skew-table"
    line_start: 53
    line_end: 70
    title: "Optimizing disk reads with sector skew"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Disk-structure2.svg/330px-Disk-structure2.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Disk-structure2 (Public domain)"
    content: "This section introduces a clever optimization: the sector skew table. Disk drives of the era often had mechanical delays when switching between sectors, so reading sectors in sequential order could result in wasted time waiting for the disk to spin into position. By reordering the sector access pattern, Mechner minimizes these delays, ensuring faster data retrieval. The skew table maps logical sector numbers to physical addresses, allowing the game to load data efficiently despite the Apple II's slow disk I/O. This technique was common among skilled developers working with floppy disks, as it could significantly improve performance without requiring hardware modifications. Mechner's implementation reflects his deep understanding of the Apple II's quirks and his ability to exploit them for maximum efficiency. This optimization was critical for a game like Prince of Persia, which relied on smooth animations and quick transitions to maintain its cinematic feel."
  - id: "stage-2-boot"
    line_start: 73
    line_end: 117
    title: "Stage 2 boot: Preparing for the next phase"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flow-diagram-computer-booting-sequences.svg/330px-Flow-diagram-computer-booting-sequences.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Describes the process from power button to OS load, from File:Flow-diagram-computer-booting-sequences.jpg (CC BY-SA 4.0)"
    content: "The second stage of the boot process begins here, with routines to check for 128K memory and initialize the system for loading the next segment of the game. Mechner's code includes a check for the Apple IIe and IIc models, ensuring compatibility with systems that have the required memory. This was a critical step, as the game relied on the expanded memory to store its detailed animations and game logic. The routine also prepares the RW18 memory area, which is used for disk operations, and seeks to the first track of the floppy disk to load the next stage of the boot sequence. By breaking the boot process into stages, Mechner was able to manage the limited memory of the Apple II effectively, loading only the necessary code and data at each step. This modular approach to bootstrapping was a hallmark of skilled 6502 programming, allowing complex applications to run on hardware with severe constraints."
  - id: "memory-check-routine"
    line_start: 120
    line_end: 135
    title: "Checking for auxiliary memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Apple_II-IMG_7064.jpg/330px-Apple_II-IMG_7064.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Apple II computer.  On display at the Musée Bolo, EPFL, Lausanne. (CC BY-SA 2.0 fr)"
    content: "This routine checks for the presence of auxiliary memory, a feature of the Apple IIe and IIc that expanded the system's capabilities. By writing and reading specific values to memory locations, Mechner's code verifies that the system has the required 128K of RAM. This was a crucial step for Prince of Persia, as the game's detailed animations and complex gameplay logic depended on the extra memory. The Apple II's memory architecture was unique, with separate banks for main and auxiliary memory, and developers had to navigate these quirks to make their programs work. Mechner's routine reflects the ingenuity required to create software for this platform, ensuring compatibility while maximizing performance. This check also highlights the game's technical sophistication, as it pushed the limits of what the Apple II could achieve."
  - id: "error-message-display"
    line_start: 168
    line_end: 191
    title: "Displaying error messages on Apple II hardware"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/330px-Operating_system_placement.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Graph of Operating System placement on computer usage (CC BY-SA 3.0)"
    content: "When the system fails the memory check, this routine displays an error message informing the user that the game requires an Apple IIe or IIc with 128K of RAM. The message is displayed using ROM routines for text output, ensuring compatibility across different Apple II models. Mechner's choice to include this user-friendly feature reflects his attention to detail and commitment to creating a polished experience. The Apple II's text display capabilities were limited, but skilled developers like Mechner used them effectively to communicate with users. This routine also serves as a reminder of the game's technical requirements, which were ambitious for the time. By clearly informing users of the hardware limitations, Mechner ensured that players would understand why the game might not run on older systems, avoiding frustration and confusion."
  - id: "memory-copy-routine"
    line_start: 197
    line_end: 231
    title: "Copying memory with precision—and risk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This routine copies data from one memory location to another, a common task in 6502 assembly programming. Mechner's implementation uses indexed addressing to iterate through memory, copying byte by byte until the entire block is transferred. However, the comments include a stark warning: if the source and destination ranges overlap, the routine could overwrite critical data, potentially causing the program to crash. This highlights the challenges of working with low-level assembly language, where every instruction must be carefully planned to avoid unintended consequences. In the constrained environment of the Apple II, routines like this were essential for managing memory efficiently, but they also required a deep understanding of the system's architecture. Mechner's code reflects both the power and the peril of programming at this level, showcasing the skill and precision required to create a game as complex as Prince of Persia."

---

*  boot
org = $800
 lst off
*-------------------------------
* $800 TS (0,0) boot sector

SLOT = $2b
sector = $50

text = $fb2f
home = $fc58
vtab = $FB5B
cout = $FDF0
normal = $fe84
pr0 = $fe93
in0 = $fe89

*-------------------------------
 org org

 hex 01

entry lda #$60
 sta entry

 lda #$ff
 sta $4fb
 sta $3f3
 sta $3f4
 sta $c000 ;80store off
 sta $c002 ;RAMRD main
 sta $c004 ;RAMWRT main
 sta $c00c ;80col off
 sta $c00e ;Altcharset off
 sta $c081 ;write RAM, read ROM (2nd 4k bank)
 jsr text
 jsr home
 jsr normal
 jsr pr0
 jsr in0

 ldx SLOT
 txa
 lsr
 lsr
 lsr
 lsr
 ora #$c0
 sta :rdsect+2
 lda #$0f
 sta sector

:0 ldy sector
 lda skewtbl,y
 sta $3d
 lda sectaddr,y
 beq :1
 sta $27
:rdsect jsr $005c
:1 dec sector
 bne :0

 lda SLOT
 jmp $900

skewtbl hex 00,0d,0b,09,07,05,03,01
 hex 0e,0c,0a,08,06,04,02,0f

sectaddr hex 00,09,00,00,00,00,00,00
 hex 30,31,32,33,34,00,00,00

*===============================
*  boot stage 2

rw18 = $d000

slot = $fd
track = $fe
lastrack = $ff

 dum $00

dest ds 2
source ds 2
endsourc ds 2

 dend
*-------------------------------
 ds $900-*

stage2 stx slot

 jsr check128k ;check for 128K memory

 jsr moverw18 ;& move RW18 to D000

 lda #0
 sta lastrack
 sta $3f3
 sta $3f4 ;zero reset vector

 jsr rw18
 hex 07,a9 ;Bbund ID byte

 jsr rw18
 hex 00,01,00 ;drive 1 on

 jsr rw18 ;seek track 1
 hex 02,00,01

* load & run stage 3 boot
* from drive 1

 jsr rw18
 hex c3,ee

 jmp $ee00

*-------------------------------------------------
* Check for AUX memory routine

CHECKER lda #$EE
 sta $C005
 sta $C003
 sta $0800
 lda $0C00
 cmp #$EE
 bne :0
 asl $0C00
 lda $0800
 cmp $0C00
 beq :1
:0 clc
:1 sta $C004
 sta $C002
 rts

CHECKEND = *-CHECKER

*-------------------------------------------------
*
* Check to make sure //c or //e
* with 128k
*
*-------------------------------
check128k
 sta $c081

 lda $FBB3 ;Apple // family ID byte
 cmp #6
 bne NOT128K ;Must be e/c/GS

 bit $C017
 bmi NOT128K

 ldx #CHECKEND
:0 lda CHECKER,X
 sta $180,X
 dex
 bpl :0

 jsr $180
 bcs NOT128K

 rts

*-------------------------------
* Turn off drive and display message

NOT128K ldx SLOT
 lda $C088,X

 jsr text
 jsr home
 lda #8
 jsr vtab

 ldy #0
:0 lda MEMTEXT,Y
 beq *
 jsr cout
 cmp #$8D
 bne :1
 lda #4
 sta $24
:1 iny
 bne :0

MEMTEXT hex 8D
 asc "REQUIRES A //C OR //E WITH 128K"
 hex 00

*-------------------------------
* Move RW18
* d0 < 30.40
*-------------------------------
moverw18
 bit $c08b
 bit $c08b ;rd/wrt RAM, 1st 4k bank

 lda #$d0
 ldx #$30
 ldy #$40

* a < x.y
* 20 < 40.60 means 2000 < 4000.5fffm
* WARNING: If x >= y, routine will wipe out 64k

movemem sta dest+1
 stx source+1
 sty endsourc+1

 ldy #0
 sty dest
 sty source
 sty endsourc

:loop lda (source),y
 sta (dest),y

 iny
 bne :loop

 inc source+1
 inc dest+1

 lda source+1
 cmp endsourc+1
 bne :loop

 rts

*-------------------------------
 sav boot