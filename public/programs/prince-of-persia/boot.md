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
  - point: "Bank-switched memory techniques to fit within 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Hardware-specific routines for Apple IIe/IIc compatibility"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II Series"
  - point: "Clever use of assembly to initialize and verify system requirements"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "boot-sector-initialization"
    line_start: 23
    line_end: 64
    title: "Boot Sector: Setting the Stage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "This section initializes the boot process, setting up the Apple II hardware for the game. It begins by disabling auxiliary features like 80-column mode and alternate character sets, ensuring the system is in a predictable state. The programmer, Jordan Mechner, carefully manipulates memory and hardware registers to prepare the environment for loading further stages of the game. In the mid-1980s, booting a program on the Apple II required intimate knowledge of the machine's architecture, including its memory-mapped I/O and bank-switching mechanisms. Mechner's solo effort on Prince of Persia meant he had to master these intricacies himself, balancing the constraints of 128K memory and the demands of cinematic animation. This initialization routine reflects the meticulous planning required to make the game run seamlessly on a wide range of Apple II models. The techniques here laid the groundwork for the game's innovative gameplay and graphics, ensuring the system could handle the complex routines that followed."
  - id: "skew-table-lookup"
    line_start: 66
    line_end: 67
    title: "Skew Table: Optimizing Disk Access"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "The skew table defines a sequence of sector offsets for optimized disk access. Disk drives of the era often had physical limitations that required careful planning of sector reads to avoid delays caused by rotational latency. By precomputing these offsets, Mechner ensured that the boot process could load data efficiently, minimizing the time spent waiting for the disk to spin into position. This optimization was crucial for a game like Prince of Persia, where smooth transitions and quick loading were vital to maintaining its cinematic feel. The skew table reflects the deep understanding of hardware constraints that programmers of the time had to possess, especially when working with the Apple II's notoriously slow floppy drives."
  - id: "sector-address-lookup"
    line_start: 69
    line_end: 89
    title: "Sector Address Table: Navigating the Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "This table maps logical sector numbers to physical disk addresses, enabling the boot routine to locate and load specific data blocks. Disk organization was a critical part of game development in the 1980s, as developers had to manually manage file systems and ensure efficient data retrieval. Mechner's approach here demonstrates his attention to detail, ensuring that the game could load its assets quickly and reliably. The sector address table is a testament to the era's hands-on approach to programming, where developers had to think about every byte and cycle to make their software work within the limitations of the hardware."
  - id: "boot-stage-2"
    line_start: 91
    line_end: 120
    title: "Stage 2 Boot: Preparing for Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "Stage 2 of the boot process begins by checking for 128K memory, a requirement for Prince of Persia's advanced graphics and gameplay. It then initializes the RW18 routine, which handles disk operations, and sets up the system for loading the next stage. This section highlights the challenges of developing for the Apple II, where memory and hardware constraints were ever-present. Mechner's careful orchestration of these routines ensured that the game could run smoothly on compatible systems, providing players with a seamless experience. The inclusion of checks for system requirements reflects the meticulous planning that went into making the game accessible to a wide audience while maintaining its technical ambitions."
  - id: "aux-memory-check"
    line_start: 122
    line_end: 145
    title: "Checker Routine: Verifying Memory Banks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The CHECKER routine verifies the presence and functionality of auxiliary memory banks, a critical step for ensuring the game can utilize the full 128K required for its advanced features. By writing and reading specific values to memory locations, the routine confirms that the system meets the game's requirements. This technique reflects the ingenuity of 1980s programmers, who often had to devise clever ways to test hardware capabilities without dedicated diagnostic tools. Mechner's approach here is both efficient and robust, ensuring that the game can gracefully handle incompatible systems by displaying an error message instead of crashing."
  - id: "memory-requirement-check"
    line_start: 146
    line_end: 168
    title: "Checking for 128K: Ensuring Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This routine checks whether the system is an Apple IIe or IIc with 128K of memory, a prerequisite for running Prince of Persia. It uses the Apple II's family ID byte and auxiliary memory flags to determine compatibility. If the system fails the check, the routine redirects to NOT128K, which displays a message informing the user of the requirements. This compatibility check was essential for ensuring the game could run on the intended hardware while gracefully handling unsupported configurations. Mechner's attention to detail here reflects the challenges of developing software for a fragmented hardware ecosystem, where not all Apple II models offered the same capabilities."
  - id: "error-message-display"
    line_start: 170
    line_end: 187
    title: "NOT128K: Communicating System Requirements"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "When the system fails the memory check, the NOT128K routine displays a message informing the user that the game requires an Apple IIe or IIc with 128K of memory. This graceful handling of incompatibility reflects Mechner's commitment to user experience, ensuring that players are informed rather than frustrated. The routine uses the Apple II's text output functions to display the message, a straightforward yet effective way to communicate with the user. This approach highlights the importance of clear communication in software design, even in the constrained environment of 6502 assembly programming."
  - id: "memory-move-routine"
    line_start: 197
    line_end: 207
    title: "MoverW18: Shuffling Memory Banks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The moverw18 routine moves data between memory banks, a key operation for managing the Apple II's limited RAM. By carefully manipulating memory addresses and ensuring data integrity during the transfer, Mechner enables the game to utilize the full 128K of available memory. This routine reflects the ingenuity required to work within the constraints of the Apple II, where every byte of memory was precious. The warning about wiping out 64K if the routine is misused underscores the delicate nature of such operations, highlighting the precision required in 6502 assembly programming."
  - id: "memory-copy-loop"
    line_start: 209
    line_end: 234
    title: "MoveMem: Copying Data Across Banks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The movemem routine copies data from one memory bank to another, using indexed addressing to iterate through the source and destination addresses. This operation is fundamental to the game's ability to manage its assets within the constraints of the Apple II's memory architecture. Mechner's implementation here is both efficient and reliable, ensuring that data is transferred correctly without corruption. The routine's design reflects the careful planning required to make the most of the Apple II's limited resources, a hallmark of 1980s programming."

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