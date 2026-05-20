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
description: "The boot sequence for Prince of Persia on the Apple II, showcasing memory management and hardware initialization in 6502 assembly."

summary:
  - point: "Bank-switched memory initialization for Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Routines for hardware compatibility checks"
    link: "https://en.wikipedia.org/wiki/Apple_II_series#Models"
    link_label: "Apple II models"
  - point: "Efficient memory copying via 6502 assembly"
    link: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    link_label: "MOS Technology 6502"

enhancements:
  - id: "boot-sector-initialization"
    line_start: 23
    line_end: 64
    title: "Boot sector initialization and memory setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This section initializes the boot sector and sets up memory configurations for the Apple II. It begins by disabling certain features like 80-column mode and alternate character sets, ensuring compatibility with the hardware. The programmer, Jordan Mechner, is preparing the system to load the game by configuring the memory banks and setting up the slot and sector addresses for disk access. In 1989, the Apple IIe and IIc were popular machines, but their limited memory (128K) and reliance on bank-switching required careful programming. Mechner's approach reflects the constraints of the time, where every byte of memory and every cycle of CPU time was precious. This initialization routine ensures the game can run smoothly on the target hardware. The techniques used here influenced later Apple II software, as developers learned to optimize memory and hardware interactions for cinematic and complex games."
  - id: "skew-table-and-sector-address"
    line_start: 66
    line_end: 89
    title: "Skew table and sector address mapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "The skew table and sector address mappings define how disk sectors are accessed. The skew table rearranges sector numbers to optimize read performance, compensating for the physical layout of the disk and the speed of the Apple II's floppy drive. The sector address table provides the actual memory locations for each sector. This technique was common in the era of floppy disks, where hardware limitations required software solutions to improve data throughput. Mechner's implementation ensures the game loads efficiently, minimizing delays during gameplay. These tables reflect the ingenuity of programmers working within the constraints of early personal computers, and similar techniques were used in other Apple II games and utilities to enhance disk access performance."
  - id: "stage-2-boot-loading"
    line_start: 91
    line_end: 117
    title: "Stage 2 boot loading and drive control"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "This section handles the second stage of the boot process, including drive control and loading the next stage of the game. It initializes the disk drive, seeks the appropriate track, and prepares to load the main game code. Mechner's use of direct hardware manipulation showcases the low-level programming required to interface with the Apple II's peripherals. In the late 1980s, boot sequences like this were critical for games to run efficiently, as they had to manage hardware directly without modern operating systems or drivers. This stage ensures the game can transition smoothly from the boot sector to the main gameplay code, a technique that influenced later boot loaders and game engines on similar hardware."
  - id: "aux-memory-check"
    line_start: 120
    line_end: 138
    title: "Auxiliary memory check for compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series#Models"
    image_url: ""
    image_caption: ""
    content: "The CHECKER routine verifies the presence of auxiliary memory, a requirement for running Prince of Persia on the Apple II. It writes and reads test values to specific memory locations to confirm the presence of 128K RAM. This check ensures the game won't attempt to run on incompatible hardware, avoiding crashes or undefined behavior. In the late 1980s, Apple II models varied widely in their capabilities, and developers often included routines like this to ensure compatibility. Mechner's approach reflects the meticulous attention to hardware constraints that defined programming for early personal computers. This technique influenced other developers, who adopted similar checks in their software to handle diverse hardware configurations."
  - id: "memory-check-and-error-handling"
    line_start: 142
    line_end: 165
    title: "Memory check and error handling routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The check128k routine verifies the system has 128K memory and is an Apple IIe or IIc model. It uses specific memory locations and flags to identify the hardware and ensure it meets the game's requirements. If the check fails, the program jumps to an error handling routine. This kind of hardware verification was essential in the era of diverse Apple II models, as developers had to account for differences in memory and features. Mechner's implementation ensures the game won't attempt to run on incompatible systems, preserving the user experience. Similar memory checks became standard practice in software development for early personal computers, influencing diagnostic routines in later operating systems and games."
  - id: "error-message-display"
    line_start: 168
    line_end: 187
    title: "Error message display for unsupported systems"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The NOT128K routine displays an error message if the system fails the memory check. It uses the Apple II's text output routines to inform the user that the game requires an Apple IIe or IIc with 128K memory. This routine reflects the user-centric design of early software, where developers provided clear feedback to users about compatibility issues. Mechner's implementation ensures users understand why the game won't run, avoiding frustration. Error handling routines like this influenced later software, where clear and informative error messages became a standard practice in user interface design."
  - id: "rw18-memory-transfer"
    line_start: 193
    line_end: 231
    title: "RW18 memory transfer routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    image_url: ""
    image_caption: ""
    content: "The moverw18 routine transfers memory from one location to another, preparing the RW18 region for use. It uses the 6502's indirect addressing mode to copy data efficiently, a technique that showcases the power of assembly language for low-level memory manipulation. Mechner's implementation reflects the constraints of the Apple II, where memory management was critical due to limited resources. This routine ensures the game can access necessary data during gameplay, a technique that influenced memory handling in other Apple II programs and games. The efficient use of indirect addressing became a hallmark of 6502 assembly programming, inspiring developers working on similar hardware."
  - id: "general-memory-copy-routine"
    line_start: 205
    line_end: 231
    title: "General memory copy routine for data transfer"
    wikipedia_url: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    image_url: ""
    image_caption: ""
    content: "The movemem routine is a general-purpose memory copy function that transfers data from a source to a destination. It uses the 6502's indexed addressing mode to iterate through memory locations, copying data byte by byte. Mechner's implementation is efficient and avoids overwriting critical memory regions, reflecting the careful programming required for the Apple II's limited resources. This routine is a foundational technique in assembly programming, influencing memory handling in other software for the Apple II and similar systems. The movemem routine demonstrates the versatility of the 6502 processor and the skill of programmers working within its constraints."

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