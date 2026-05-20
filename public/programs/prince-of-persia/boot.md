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
description: "The boot sequence for Prince of Persia on the Apple IIe/IIc, showcasing memory management, hardware checks, and clever assembly techniques to fit a cinematic platformer into 128K."

summary:
  - point: "Bank-switched memory setup to fit 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Hardware-specific checks for Apple II compatibility"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Efficient memory copying routine for large data blocks"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"
  - point: "Custom skew table for disk sector reading optimization"
    link: "https://en.wikipedia.org/wiki/Disk_sector"
    link_label: "Disk sector"
  - point: "Fallback messaging for unsupported hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"

enhancements:
  - id: "boot-sector-initialization"
    line_start: 18
    line_end: 64
    title: "How the Boot Sector Wakes the Apple II"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This section initializes the boot process for Prince of Persia on the Apple IIe/IIc. It begins by setting key hardware registers to prepare the system for execution. The programmer, Jordan Mechner, carefully configures memory and display settings, including disabling auxiliary memory and alternate character sets. This ensures the game operates correctly within the Apple II's constrained environment. The code also sets up disk sector reading by calculating the correct skew table and sector addresses, a technique optimized for the Apple II's floppy disk controller. In 1989, this level of hardware-specific programming was common for games, as developers had to account for the quirks of each platform. Mechner's attention to detail here enabled the game to load efficiently, paving the way for the cinematic experience that followed. This approach influenced later developers who worked on tightly constrained systems, teaching them the importance of understanding hardware intimately."
  - id: "skew-table-for-disk-reading"
    line_start: 66
    line_end: 67
    title: "The Skew Table That Speeds Up Disk Reads"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "The skew table defines the order in which disk sectors are read, optimizing for the rotational latency of the Apple II's floppy disk drive. By rearranging the sector read order, Mechner ensures that data is retrieved as quickly as possible, minimizing the time the CPU spends waiting for the disk to spin into position. This was a critical optimization for games of the era, where loading times could make or break the user experience. The skew table reflects a deep understanding of the hardware's mechanical limitations and was likely informed by experimentation or existing best practices in Apple II development. This technique became a standard approach for disk-based games on similar hardware, influencing other developers working in constrained environments."
  - id: "stage-2-memory-check"
    line_start: 91
    line_end: 117
    title: "Checking Memory Before the Game Begins"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This subroutine checks for the presence of 128K of memory, a requirement for Prince of Persia to run on the Apple IIe/IIc. The code uses specific memory addresses and hardware flags to determine compatibility. If the system passes the check, it proceeds to load the next stage of the boot process; otherwise, it halts execution. In the late 1980s, developers often had to write custom routines to detect hardware configurations, as there was no standardized way to query system capabilities. Mechner's approach here reflects the ingenuity required to ensure his game could run on the intended machines. This memory check routine influenced other developers working on multi-platform games, teaching them how to gracefully handle hardware limitations."
  - id: "unsupported-hardware-message"
    line_start: 167
    line_end: 187
    title: "What Happens When Your Apple II Isn’t Enough"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This section displays a message if the system does not meet the game's requirements. It gracefully informs the user that the game requires an Apple IIe or IIc with 128K of memory. The message is stored as an ASCII string and printed character by character to the screen. This fallback mechanism reflects Mechner's commitment to user experience, ensuring that players on unsupported hardware receive clear feedback rather than a cryptic crash. In the late 1980s, such messages were rare, as many games simply failed silently or displayed garbled output. Mechner's approach here set a precedent for better error handling in games, influencing later developers to prioritize clear communication with users."
  - id: "memory-copy-routine"
    line_start: 205
    line_end: 231
    title: "The Routine That Moves Memory Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This subroutine copies blocks of memory from one location to another, a fundamental operation in the game's boot process. The code uses indexed addressing to iterate through source and destination addresses, copying each byte sequentially. Mechner includes a warning in the comments about the potential for catastrophic memory corruption if the source and destination overlap incorrectly. In 1989, efficient memory manipulation was crucial for games running on constrained systems like the Apple II. This routine reflects the careful balance between performance and safety that developers had to achieve. Memory copying routines like this one became standard practice in assembly programming, influencing later systems and languages that built abstractions around such operations."

---

```asm
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
```
