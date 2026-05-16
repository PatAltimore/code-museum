---
title: "MASTER.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/MASTER.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/MASTER.S"
year: 1989
author: "Jordan Mechner"
slug: "master"
order: 4
description: "The foundational assembly code for Prince of Persia (1989), showcasing memory management, hardware interaction, and cinematic innovation on the Apple II."

summary:
  - point: "Bank-switched memory management to fit the game in 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Routines for loading game levels and assets dynamically"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II hardware"
  - point: "Hardcoded soft switches for Apple II graphics modes"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II graphics"
  - point: "Rotoscoping-inspired animation techniques encoded in assembly"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Drive interaction routines for RW18 disk controller"
    link: "https://en.wikipedia.org/wiki/Floppy_disk_controller"
    link_label: "Floppy disk controller"

enhancements:
  - id: "jump-table-master-control"
    line_start: 18
    line_end: 32
    title: "Jump Table: Master Control of Game States"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/IBM_PC_Original_5.25_Diskette_Drive_Adapter.jpg/330px-IBM_PC_Original_5.25_Diskette_Drive_Adapter.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Original 5 1/4 Diskette Drive Adapter found on the IBM PC (IBM 5150) (CC BY-SA 3.0)"
    content: "This section defines a jump table, a compact mechanism for routing control to various subroutines based on game state. Each `jmp` instruction points to a specific routine, such as `FIRSTBOOT`, `LOADLEVEL`, or `ATTRACTMODE`. In the late 1980s, jump tables were a common way to optimize control flow in assembly language, avoiding the overhead of conditional branching. Jordan Mechner, working solo on Prince of Persia, needed to ensure the game could handle complex transitions between states—booting, loading levels, saving games, and displaying cinematic sequences—all within the constraints of the Apple II's 128K memory. This jump table reflects the modularity of his design, allowing the game to pivot seamlessly between gameplay and storytelling. The approach survives in modern programming, though often abstracted into higher-level constructs like function pointers or event-driven frameworks."
  - id: "rw18-disk-controller-commands"
    line_start: 56
    line_end: 67
    title: "RW18 Disk Controller: Direct Hardware Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk_controller"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Apple_II_high-resolution_graphics_fringe_effects.png/330px-Apple_II_high-resolution_graphics_fringe_effects.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Apple II high-resolution graphics fringe effects (CC0)"
    content: "Here, Mechner defines commands for the RW18 disk controller, the hardware responsible for reading and writing data to the floppy disk. Each command, such as `DrvOn` or `Seek`, corresponds to a specific operation, encoded as a hexadecimal value. In the Apple II era, programmers often interacted directly with hardware, bypassing operating system abstractions to maximize performance. These commands enabled precise control over disk operations, crucial for loading game assets like levels and animations on demand. Mechner's use of the RW18 reflects the era's reliance on low-level programming, where developers needed intimate knowledge of hardware quirks. This direct interaction with the disk controller ensured that Prince of Persia could deliver its groundbreaking cinematic experience without excessive loading times—a critical factor in its success."
  - id: "soft-switches-graphics-modes"
    line_start: 135
    line_end: 162
    title: "Soft Switches: Toggling Apple II Graphics Modes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Prince_of_Persia_1_-_MS-DOS_-_Gameplay.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "Game play animation of the IBM PC version of Prince of Persia. (CC BY-SA 4.0)"
    content: "This section lists 'soft switches,' memory-mapped locations that control the Apple II's graphics and memory modes. For example, `HIRESon` enables high-resolution graphics, while `PAGE2on` switches to the second graphics page. These switches were a hallmark of Apple II programming, allowing developers to manipulate the hardware directly for visual effects. Mechner's use of these switches reflects his meticulous attention to detail, as he sought to push the Apple II's graphical capabilities to their limits. The cinematic platformer genre he pioneered demanded smooth transitions and visually striking scenes, which he achieved by toggling these modes dynamically during gameplay. This low-level control was essential for creating the immersive experience that defined Prince of Persia, influencing game design for decades."
  - id: "default-level-coordinates"
    line_start: 91
    line_end: 95
    title: "Default Level Coordinates: Setting the Stage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Apple_II-IMG_7064.jpg/330px-Apple_II-IMG_7064.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Apple II computer.  On display at the Musée Bolo, EPFL, Lausanne. (CC BY-SA 2.0 fr)"
    content: "These lines define the coordinates for the default levels loaded at the start of the game. `demolevel` and `firstlevel` specify the initial positions, ensuring a consistent entry point for players. In the late 1980s, games often relied on hardcoded values for level initialization, as dynamic loading systems were rare. Mechner's decision to encode these coordinates reflects the constraints of the Apple II, where memory was limited and every byte counted. By predefining these values, he ensured that the game could quickly load and display its opening scenes, minimizing delays and enhancing the cinematic flow. This technique, while simple, underscores the careful planning required to deliver a seamless experience on early hardware."
  - id: "firstboot-initialization"
    line_start: 186
    line_end: 199
    title: "FirstBoot: Initializing the Game Environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The `FIRSTBOOT` routine initializes the game environment, setting up graphics modes and loading essential assets. It begins by disabling mixed graphics mode (`MIXEDoff`) and configuring auxiliary memory (`setaux`). Mechner then sets the game's ID byte (`POPside1`), a unique identifier for the floppy disk, and loads high-resolution graphics tables. This sequence reflects the meticulous setup required to optimize the Apple II's limited resources. In 1989, developers often had to balance memory constraints with performance demands, carefully orchestrating initialization routines to avoid crashes or slowdowns. Mechner's approach ensured that Prince of Persia could deliver its ambitious visuals and gameplay without exceeding the hardware's capabilities. This routine exemplifies the ingenuity required to create complex games on early computers."

---

; excerpt — first 200 lines of 01 POP Source/Source/MASTER.S

* master 3.5
DemoDisk = 0
FinalDisk = 1

org = $f880
 lst off
*-------------------------------
*
*  M  A  S  T  E  R
*
*  (3.5" version)
*
*  Sits in main l.c.
*
*-------------------------------
 org org

 jmp FIRSTBOOT
 jmp LOADLEVEL
 jmp RELOAD
 jmp LoadStage2
 jmp RELOAD

 jmp ATTRACTMODE
 jmp CUTPRINCESS
 jmp SAVEGAME
 jmp LOADGAME
 jmp DOSTARTGAME

 jmp EPILOG
 jmp LOADALTSET

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst off

Tmoveauxlc = moveauxlc-$b000

*-------------------------------
* RW18 ID bytes

POPside1 = $a9
POPside2 = $ad

* RW18 zero page vars

slot = $fd
track = $fe
lastrack = $ff

* RW18 commands

DrvOn = $00
DrvOff = $01
Seek = $02
RdSeqErr = $03
RdGrpErr = $04
WrtSeqErr = $05
WrtGrpErr = $06
ModID = $07
RdSeq = $83
RdGrp = $84
WrtSeq = $85
WrtGrp = $86
Inc = $40 ;.Inc to inc track

*-------------------------------
* Local vars

 dum locals

]dest ds 2
]source ds 2
]endsourc ds 2

newBGset1 ds 1
newBGset2 ds 1
newCHset ds 1

 dend

*-------------------------------
* Passed params

params = $3f0

*-------------------------------
* Coordinates of default load-in level

demolevel db 33,0
firstlevel db 33,1

*-------------------------------
* Hi bytes of crunch data
* Double hi-res (stage 1)

pacSplash = $40
delPresents = $70
delByline = $72
delTitle = $74
pacProlog = $7c
pacSumup = $60 ;mainmem
pacEpilog = $76 ;side B

* Single hires (stage 2)

pacProom = $84

*-------------------------------
* Music song #s
* Set 1 (title)

s_Presents = 1
s_Byline = 2
s_Title = 3
s_Prolog = 4
s_Sumup = 5
s_Princess = 7
s_Squeek = 8
s_Vizier = 9
s_Buildup = 10
s_Magic = 11

* Set 2 (epilog)

s_Epilog = 1
s_Curtain = 2

*-------------------------------
* Soft switches

IOUDISoff = $c07f
IOUDISon = $c07e
DHIRESoff = $c05f
DHIRESon = $c05e
HIRESon = $c057
HIRESoff = $c056
PAGE2on = $c055
PAGE2off = $c054
MIXEDon = $c053
MIXEDoff = $c052
TEXTon = $c051
TEXToff = $c050
ALTCHARon = $c00f
ALTCHARoff = $c00e
ADCOLon = $c00d
ADCOLoff = $c00c
ALTZPon = $c009
ALTZPoff = $c008
RAMWRTaux = $c005
RAMWRTmain = $c004
RAMRDaux = $c003
RAMRDmain = $c002
ADSTOREon = $c001
ADSTOREoff = $c000

RWBANK2 = $c083
RWBANK1 = $c08b

*-------------------------------
kprincess = "p"-$60 ;temp!
kdemo = "d"-$60 ;temp!
krestart = "r"-$60
kresume = "l"-$60

*-------------------------------
*
* Notes:
*
* Game code sits in auxmem & aux l.c. and uses aux z.p.
*
* Routines in main l.c. (including MASTER and HIRES)
* are called via intermediary routines in GRAFIX (in auxmem).
*
* RW18 sits in bank 1 of main language card;
* driveon switches it in, driveoff switches it out.
*
*-------------------------------
*
*  F I R S T B O O T
*
*-------------------------------
FIRSTBOOT
 lda MIXEDoff
 jsr setaux

* Set BBund ID byte

 lda #POPside1
 sta BBundID

* Load hires tables & add'l hires routines

 sta RAMWRTmain
 lda #2
 sta track
 jsr rw18