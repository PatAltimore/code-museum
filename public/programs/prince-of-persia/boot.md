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
description: "The bootloader for Prince of Persia (1989), a groundbreaking cinematic platformer, written in 6502 assembly for the Apple IIe/IIc."

summary:
  - point: "Implements bank-switched memory to fit within 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Includes routines to verify hardware compatibility (Apple IIe/IIc with 128K)"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II Series"
  - point: "Bootloader initializes memory and prepares the system for game execution"
    link: "https://en.wikipedia.org/wiki/Booting"
    link_label: "Booting"
  - point: "Uses skew tables for disk sector reading optimization"
    link: "https://en.wikipedia.org/wiki/Disk_sector"
    link_label: "Disk Sector"
  - point: "Routines for memory manipulation and hardware interaction reflect the constraints of 1980s computing"
    link: "https://en.wikipedia.org/wiki/6502"
    link_label: "6502 Microprocessor"

enhancements:
  - id: "boot-sector-initialization"
    line_start: 1
    line_end: 41
    title: "Boot Sector Initialization: Setting the Stage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flow-diagram-computer-booting-sequences.svg/330px-Flow-diagram-computer-booting-sequences.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Describes the process from power button to OS load, from File:Flow-diagram-computer-booting-sequences.jpg (CC BY-SA 4.0)"
    content: "The first lines of this file establish the boot sector routine for Prince of Persia on the Apple IIe/IIc. This code initializes key memory locations and hardware settings, preparing the system to load the game. The programmer, Jordan Mechner, sets up the environment by disabling auxiliary memory, configuring the display mode, and ensuring the system is ready to execute the next stages of the boot process. In the mid-1980s, bootloaders were critical for games, as they had to work within the constraints of limited memory and hardware capabilities. The Apple IIe/IIc systems had only 128K of memory, and developers often relied on techniques like bank switching to maximize usable space. Mechner's solo effort on this project reflects the ingenuity required to create complex software within these constraints. This boot sector routine lays the foundation for the cinematic platformer experience that would captivate players and influence game design for decades."
  - id: "disk-sector-reading-skew-tables"
    line_start: 42
    line_end: 71
    title: "Optimizing Disk Reads with Skew Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Disk-structure2.svg/330px-Disk-structure2.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Disk-structure2 (Public domain)"
    content: "This section of the code handles disk sector reading, a crucial operation for loading game data. Mechner uses skew tables to optimize the process, ensuring sectors are read in the correct order despite the physical layout of the disk. In the 1980s, disk drives were slow, and reading data sequentially was often impractical due to rotational latency. Skew tables allowed developers to map logical sector orders to physical ones, minimizing delays. This technique was common in Apple II software, where disk I/O performance could make or break the user experience. Mechner's implementation here is a testament to his attention to detail and understanding of hardware limitations. The skew table approach would later be refined in other systems, but its presence in Prince of Persia highlights the challenges of developing for early personal computers."
  - id: "stage-2-bootloader"
    line_start: 73
    line_end: 117
    title: "Stage 2 Bootloader: Preparing for Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flow-diagram-computer-booting-sequences.svg/330px-Flow-diagram-computer-booting-sequences.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Describes the process from power button to OS load, from File:Flow-diagram-computer-booting-sequences.jpg (CC BY-SA 4.0)"
    content: "The stage 2 bootloader continues the process of initializing the system for Prince of Persia. This section checks for the presence of 128K memory, moves critical routines into accessible memory locations, and prepares to load the next stage of the game. The Apple IIe/IIc required careful memory management due to its limited resources, and Mechner's code reflects the meticulous planning needed to ensure compatibility and performance. By verifying hardware capabilities and setting up memory, this routine ensures the game can run smoothly on supported systems. In the broader context of 1980s computing, bootloaders like this were essential for bridging the gap between hardware and software, enabling developers to create immersive experiences despite technical constraints."
  - id: "hardware-compatibility-check"
    line_start: 120
    line_end: 166
    title: "Ensuring Hardware Compatibility: Apple IIe/IIc"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This routine checks the system's hardware to ensure it is an Apple IIe or IIc with 128K of memory. Mechner's code verifies the family ID byte and tests auxiliary memory functionality, rejecting systems that do not meet the game's requirements. In the mid-1980s, Apple II computers came in various configurations, and software developers had to account for these differences to avoid crashes or incompatibility. By including this check, Mechner ensures that Prince of Persia only runs on systems capable of supporting its advanced graphics and gameplay. This approach reflects the careful balance developers had to strike between innovation and practicality, as they pushed the limits of what early personal computers could achieve."
  - id: "memory-transfer-routine"
    line_start: 197
    line_end: 231
    title: "Memory Transfer: Moving Data with Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/6502"
    image_url: ""
    image_caption: ""
    content: "This routine moves data between memory locations, a critical operation for managing the limited resources of the Apple IIe/IIc. Mechner's code carefully handles source and destination pointers, ensuring data is copied efficiently without overwriting essential areas. Memory manipulation was a cornerstone of 6502 assembly programming, as developers had to work within the constraints of small address spaces and limited RAM. This routine highlights the precision and attention to detail required to create complex software on early personal computers. The techniques used here would influence later generations of programmers, as they adapted similar approaches for more advanced systems."

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