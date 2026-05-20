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
description: "The boot sequence for Prince of Persia on the Apple II, showcasing clever memory management and hardware interactions to fit a cinematic platformer into 128K."

summary:
  - point: "Bank-switched memory initialization for Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Routines for hardware compatibility checks"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Efficient memory copying techniques"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"

enhancements:
  - id: "entry-point-memory-initialization"
    line_start: 23
    line_end: 64
    title: "How Prince of Persia Boots on Apple II"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This section initializes the Apple II hardware and prepares the memory for the game. The code sets key memory locations and disables auxiliary features like 80-column mode and alternate character sets to ensure compatibility with the game’s requirements. The programmer, Jordan Mechner, uses direct writes to memory-mapped registers ($C000–$C00E) to configure the system. This approach reflects the low-level control required to run software on the Apple II, where developers often manipulated hardware directly. In 1989, the Apple IIe and IIc were aging but still widely used, and developers had to work within their constraints, such as limited RAM and slow disk access. By carefully managing memory banks and hardware settings, Mechner ensured the game could run smoothly on machines with just 128K of RAM. This initialization routine laid the groundwork for the cinematic platformer genre, demonstrating how to push hardware limits to deliver a visually rich experience. Techniques like these influenced later games on constrained systems, such as Another World and Flashback."
  - id: "skewed-sector-table"
    line_start: 66
    line_end: 67
    title: "The Skewed Sector Table Trick"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "The skewtbl defines a skewed sector table, which helps optimize disk reads by accounting for the physical layout of sectors on the Apple II’s floppy disk. In the 1980s, disk drives were slow, and reading sequential sectors often required waiting for the disk to rotate into position. By skewing the sector order, Mechner reduced the wait time, speeding up data access. This technique was common among Apple II developers, as it allowed faster loading times without requiring hardware upgrades. The skew table here is tailored to the game’s specific disk layout, ensuring efficient access to boot data. This optimization reflects the ingenuity required to work within the constraints of floppy disk technology, and similar techniques were later adapted for other storage media, including hard drives and optical disks."
  - id: "sector-address-table"
    line_start: 69
    line_end: 89
    title: "Mapping Disk Sectors to Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory-mapped_I/O"
    image_url: ""
    image_caption: ""
    content: "The sectaddr table maps disk sectors to memory addresses, allowing the boot routine to load data directly into the correct locations. This mapping is essential for the Apple II’s limited memory, as it ensures that each sector’s data is placed where the game expects it. The table includes zero entries for unused sectors, reflecting the need to conserve space and avoid unnecessary reads. In the 1980s, memory-mapped I/O was a common technique for interfacing with hardware, and this table exemplifies how developers optimized disk access for specific applications. By predefining these mappings, Mechner streamlined the boot process, reducing load times and ensuring reliability. This approach influenced later systems, where efficient memory and disk management became critical for performance."
  - id: "stage-two-boot"
    line_start: 91
    line_end: 117
    title: "Stage Two: Preparing for the Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "Stage2 handles the second phase of the boot process, including checks for sufficient memory and preparing the RW18 routine to interact with the disk drive. The code zeroes out critical memory locations, sets up the reset vector, and performs disk operations to load the next stage of the game. This phase reflects the complexity of booting on the Apple II, where developers had to manage hardware directly and ensure compatibility with various configurations. Mechner’s careful handling of memory and disk operations highlights his deep understanding of the Apple II’s architecture. This stage ensures the game can proceed smoothly, paving the way for the cinematic experience that Prince of Persia is known for. Techniques like these influenced later developers working on constrained systems, demonstrating how to optimize boot processes for performance and reliability."
  - id: "aux-memory-checker"
    line_start: 119
    line_end: 136
    title: "The Routine That Checks for AUX Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The CHECKER routine verifies the presence of auxiliary memory, a requirement for running Prince of Persia. It writes and reads test values to specific memory locations, ensuring that the system has the necessary 128K of RAM. This check reflects the challenges of developing for the Apple II, where hardware configurations varied widely. Mechner’s routine ensures the game can detect incompatible systems early, preventing crashes or unpredictable behavior. In the late 1980s, auxiliary memory was becoming more common, but developers still had to account for older systems with less RAM. This routine exemplifies the careful planning required to support a broad range of hardware while delivering a high-quality experience. Similar memory checks became standard practice in software development, influencing compatibility testing in modern systems."
  - id: "memory-requirement-warning"
    line_start: 167
    line_end: 187
    title: "The Warning That Saved Players Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The NOT128K routine displays a warning message if the system lacks the required 128K of RAM. It interacts with the Apple II’s text and video routines to print the message: \"REQUIRES A //C OR //E WITH 128K.\" This feature reflects Mechner’s commitment to user experience, ensuring players know immediately if their system is incompatible. In the 1980s, developers often included such checks to prevent frustration, as hardware limitations were a common source of issues. The routine also turns off the disk drive, conserving power and reducing wear. This attention to detail highlights the care taken to optimize the game for the Apple II while accommodating its limitations. Similar warnings became standard in software, influencing how developers communicate system requirements to users today."
  - id: "rw18-memory-move"
    line_start: 193
    line_end: 207
    title: "The Routine That Moves Memory Safely"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The moverw18 routine moves memory from one location to another, preparing the RW18 routine for disk operations. It uses indexed addressing to copy data byte by byte, ensuring accuracy and avoiding corruption. The code includes warnings about potential issues if the source and destination overlap, reflecting the challenges of memory management on the Apple II. In the 1980s, developers often wrote their own memory manipulation routines, as standard libraries were rare. Mechner’s implementation is efficient and reliable, demonstrating his expertise in low-level programming. This routine influenced later developers, who adapted similar techniques for constrained systems. Memory copying remains a fundamental operation in computing, and routines like this laid the groundwork for modern practices."
  - id: "block-memory-copying"
    line_start: 209
    line_end: 231
    title: "How Prince of Persia Handles Bulk Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The movemem routine performs block memory copying, transferring data from a source to a destination. It uses indexed addressing and loops to copy each byte, ensuring efficiency and accuracy. The routine handles large memory blocks, reflecting the need to manage the Apple II’s limited RAM effectively. In the 1980s, developers often wrote their own memory manipulation routines, as standard libraries were rare. Mechner’s implementation is robust and optimized, demonstrating his deep understanding of the Apple II’s architecture. This routine influenced later developers, who adapted similar techniques for constrained systems. Memory copying remains a fundamental operation in computing, and routines like this laid the groundwork for modern practices."

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