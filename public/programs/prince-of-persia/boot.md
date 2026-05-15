---
title: "BOOT.S"
program: "Prince of Persia (Apple II)"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/BOOT.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01%20POP%20Source/Source/BOOT.S"
year: 1989
author: "Jordan Mechner"
slug: "boot"
order: 2
description: "The two-stage disk boot loader — the first code the Apple II runs when you insert the Prince of Persia disk."

summary:
  - point: "Stage 1 loads from $800, using a hand-coded sector skew table to load disk sectors in optimal order"
    link: "https://en.wikipedia.org/wiki/Apple_DOS"
    link_label: "Apple DOS"
  - point: "Stage 2 checks for 128K RAM before anything else — Prince of Persia required the enhanced Apple IIe or IIc"
    link: "https://en.wikipedia.org/wiki/Apple_IIe"
    link_label: "Apple IIe"
  - point: "The RW18 custom disk driver is relocated to the language card at $D000, bypassing DOS entirely"
    link: "https://en.wikipedia.org/wiki/Apple_II_language_card"
    link_label: "Language card"

enhancements:
  - id: "boot-entry"
    line_start: 1
    line_end: 32
    title: "Cold Boot: Resetting the Apple II"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apple_II_tranparent_800.png/440px-Apple_II_tranparent_800.png"
    image_caption: "Apple IIe interior. The language card RAM bank sits at the top of the address space. Public domain."
    content: "The very first instruction in boot stage 1 is a self-disabling trap: lda #$60 / sta entry writes a RTS opcode over itself so the boot sector can't be accidentally re-entered. What follows is a meticulous hardware reset sequence — the code writes to eight soft-switch addresses in sequence, explicitly turning off auxiliary RAM, 80-column mode, and alternate character sets. This was necessary because the Apple II's state at power-on was undefined: previous programs might have left any combination of soft switches enabled. Prince of Persia needed a clean slate."

  - id: "skew-table"
    line_start: 49
    line_end: 70
    title: "Sector Skew: Outsmarting the Disk Controller"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector_interleaving"
    image_url: ""
    image_caption: ""
    content: "skewtbl is a sector interleave table — it maps logical sector numbers to physical sector positions on the disk. By the time the disk controller finishes processing one sector, the disk has rotated past the next sequential sector. If you read sectors in order 0,1,2,3... you'd wait almost a full disk revolution between each read. The skew table (00,0d,0b,09,07...) reorders reads so each one lands just as the right sector comes under the head. This was standard practice to maximize throughput from the Apple II's Disk II controller, which had no buffering. Mechner couldn't afford wasted revolutions."

  - id: "check128k"
    line_start: 96
    line_end: 135
    title: "Requiring 128K: The Hardware Check"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_IIe#Enhanced_Apple_IIe"
    image_url: ""
    image_caption: ""
    content: "Prince of Persia was one of the first Apple II games to require 128K of RAM as a hard minimum. The check128k routine verifies this in two steps: first it reads the Apple family ID byte at $FBB3 — value 6 means IIe or IIc (the GS family also passes). Then it copies a small memory-comparison routine (CHECKER) to $180 in zero page and runs it, testing whether the auxiliary 64K bank actually exists and differs from main memory. If the check fails, the drive motor is turned off, the screen clears, and a message is displayed: REQUIRES A //C OR //E WITH 128K. The game simply halts. In 1989, this locked out a significant portion of the installed base — a bold commercial decision."

  - id: "moverw18"
    line_start: 155
    line_end: 195
    title: "Moving the Custom Disk Driver to the Language Card"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_language_card"
    image_url: ""
    image_caption: ""
    content: "moverw18 copies Prince of Persia's custom RW18 disk driver from the disk image into the language card RAM at $D000. The language card was an add-on (later built into the IIe) that replaced the upper 16K of ROM with RAM, giving programs an extra bank of fast memory. By putting the disk driver here, POP bypassed Apple DOS entirely — RW18 was Mechner's own format that packed 18 sectors per track instead of the standard 16, giving 12.5% more storage on every disk. The movemem routine is a tight 3-register loop: A holds the destination page, X and Y hold source start and end pages, and it copies 256-byte pages until source reaches endsourc. No memcpy, no OS calls — just raw address arithmetic."
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
