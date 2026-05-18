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
description: "The boot sequence for Prince of Persia (1989) on the Apple II, showcasing memory management, hardware checks, and clever assembly techniques."

summary:
  - point: "Bank-switched memory management for 128K Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Hardware checks for compatibility with Apple IIe/IIc"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Efficient memory copying routine to move data between banks"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"
  - point: "Boot sector initialization for cinematic platformer gameplay"
    link: "https://en.wikipedia.org/wiki/Booting"
    link_label: "Booting"
  - point: "Routines for displaying error messages and system requirements"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"

enhancements:
  - id: "boot-sector-initialization"
    line_start: 1
    line_end: 64
    title: "Boot sector initialization for gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flow-diagram-computer-booting-sequences.svg/330px-Flow-diagram-computer-booting-sequences.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Describes the process from power button to OS load, from File:Flow-diagram-computer-booting-sequences.jpg (CC BY-SA 4.0)"
    content: "The first section of the code initializes the boot sector, setting up the environment for the game to run. It begins by defining key memory locations and hardware registers, such as `SLOT` and `sector`, which are used to interact with the disk drive and memory. The programmer, Jordan Mechner, uses direct memory manipulation to configure the Apple II hardware, including disabling auxiliary memory and setting up the main memory bank. This was necessary to ensure the game could run smoothly on the limited hardware of the Apple IIe/IIc, which featured only 128K of memory and relied on bank-switching to manage it. The skew table (`skewtbl`) and sector address table (`sectaddr`) are clever optimizations for reading disk sectors efficiently, a critical task given the slow disk access speeds of the time. This section reflects the meticulous attention to detail required to make the game boot reliably on a variety of Apple II systems."
  - id: "stage-2-boot"
    line_start: 73
    line_end: 117
    title: "Stage 2 boot: Preparing for execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The second stage of the boot process focuses on preparing the system for the game's execution. This includes checking for the presence of 128K memory, which was a requirement for Prince of Persia to run. Mechner uses routines like `check128k` to verify the system's compatibility, ensuring the game doesn't attempt to run on unsupported hardware. The code also initializes the disk drive and seeks the appropriate track to load the next stage of the boot process. The use of direct hardware manipulation, such as writing to memory-mapped registers, showcases the low-level programming required to interact with the Apple II's hardware. This stage highlights the challenges of developing software for a fragmented hardware ecosystem, where ensuring compatibility across different models was a constant concern."
  - id: "aux-memory-check"
    line_start: 120
    line_end: 136
    title: "Checking auxiliary memory availability"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This routine checks for the presence of auxiliary memory, a feature introduced in later Apple II models to expand the available RAM. By writing specific values to memory and comparing them, Mechner ensures that the system has the required hardware capabilities to run the game. Auxiliary memory was critical for enabling advanced features like smooth animations and larger game worlds, which were hallmarks of Prince of Persia's cinematic platformer design. This check reflects the careful consideration given to hardware constraints and the need to gracefully handle unsupported configurations. It also underscores the ingenuity required to push the limits of the Apple II's capabilities."
  - id: "system-compatibility-check"
    line_start: 146
    line_end: 165
    title: "Ensuring system compatibility for Apple IIe/IIc"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The `check128k` routine verifies that the system is an Apple IIe or IIc with 128K of memory. It checks specific memory locations and hardware flags to identify the system type and ensure compatibility. This was essential for games like Prince of Persia, which relied on the expanded memory and enhanced graphics capabilities of these models. The routine also includes a fallback mechanism to display an error message if the system doesn't meet the requirements. This reflects the challenges of developing software for a diverse hardware ecosystem, where ensuring a smooth user experience across different configurations was a priority. Mechner's attention to detail in handling these checks demonstrates his commitment to delivering a polished and reliable gaming experience."
  - id: "error-message-display"
    line_start: 168
    line_end: 191
    title: "Displaying error messages for unsupported systems"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "When the system fails the compatibility check, the `NOT128K` routine displays an error message informing the user that the game requires an Apple IIe or IIc with 128K of memory. This message is stored as ASCII text in the `MEMTEXT` table and is displayed using low-level routines to interact with the Apple II's screen. The inclusion of such a message reflects the challenges of developing software for a fragmented hardware ecosystem and the need to communicate clearly with users about system requirements. Mechner's decision to include this routine demonstrates his foresight in handling edge cases and ensuring a smooth user experience, even when the game couldn't run."
  - id: "memory-copy-routine"
    line_start: 197
    line_end: 231
    title: "Efficient memory copying between banks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `moverw18` routine is a memory copy operation that moves data between memory banks. This was a common task on the Apple II, which used bank-switched memory to expand beyond the base 64K limit. The routine carefully iterates through memory, copying data byte by byte, and includes safeguards to prevent overwriting critical areas. This level of precision was necessary to manage the limited memory resources effectively and ensure the game's stability. The comments in the code warn about potential risks, such as wiping out 64K of memory if the source and destination ranges overlap. This routine exemplifies the low-level programming techniques required to work within the constraints of the Apple II's hardware and reflects the ingenuity of developers like Mechner in optimizing performance and reliability."

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