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
description: "The foundational 6502 assembly code for Prince of Persia, showcasing innovative memory management and cinematic techniques on constrained Apple II hardware."

summary:
  - point: "Bank-switched memory to fit 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping animation technique traced from film"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Self-running attract mode for demo purposes"
    link: "https://en.wikipedia.org/wiki/Attract_mode"
    link_label: "Attract Mode"
  - point: "Custom disk routines for saving/loading game state"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II Disk Access"
  - point: "Double hi-res graphics for cinematic visuals"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II Graphics"

enhancements:
  - id: "firstboot-initialization-sequence"
    line_start: 169
    line_end: 227
    title: "The Boot Sequence That Sets the Stage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The FIRSTBOOT subroutine initializes the game environment, setting up memory, loading essential graphics and sound routines, and preparing the attract mode. It begins by disabling mixed graphics mode, a feature of the Apple IIe, and switches to auxiliary memory. The subroutine then loads high-resolution graphics tables and additional routines, ensuring that the visual fidelity required for Prince of Persia's cinematic experience is available. Jordan Mechner meticulously crafted this sequence to optimize the limited 128K memory, leveraging bank-switched memory to load as much data as possible while keeping the drive off to reduce wear. In 1989, the Apple IIe was nearing the end of its commercial life, but Mechner's innovative use of its hardware extended its capabilities. This boot sequence laid the groundwork for cinematic platformers, influencing later games like Another World and Flashback, which also prioritized immersive visuals and storytelling."
  - id: "reload-development-helper"
    line_start: 229
    line_end: 243
    title: "A Developer's Shortcut for Reloading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The RELOAD subroutine is a temporary routine designed for game development, allowing Jordan Mechner to quickly reload code and images during testing. It switches the drive on, loads permanent data and stage-specific assets, and then turns the drive off. This routine highlights the iterative nature of game development in the 1980s, where debugging and testing often required manual intervention and custom tools. By including such a shortcut, Mechner could efficiently test changes without restarting the entire system, saving valuable development time. This approach reflects the constraints of the era, where debugging tools were rudimentary, and developers often had to create their own solutions. While this routine was likely removed or modified in the final release, its presence in the source code offers a glimpse into the practical challenges of solo game development on the Apple II."
  - id: "loadmusic-disk-based-music-loading"
    line_start: 245
    line_end: 280
    title: "How Music Loaded from Disk in 1989"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The loadmusic1, loadmusic2, and loadmusic3 subroutines handle loading music data from disk into memory. Music is loaded into main memory at $5000 and then moved to auxiliary memory for playback. Each set corresponds to a different part of the game: title, gameplay, and epilog. This design reflects the constraints of the Apple IIe, where memory was limited and music had to be dynamically loaded to avoid occupying space needed for graphics and gameplay logic. Mechner's approach ensured that the game's soundtrack could be as rich and varied as its visuals, contributing to the cinematic feel of Prince of Persia. Disk-based music loading was common in the era, but Mechner's implementation stands out for its seamless integration into the game's flow. This technique influenced later games on similar hardware, demonstrating how to balance memory constraints with artistic ambition."
  - id: "driveon-disk-access-initialization"
    line_start: 291
    line_end: 326
    title: "Switching Disk Banks for Game Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The driveon1 subroutine initializes disk access by setting auxiliary memory, switching to bank 1, and activating the drive. It uses the RW18 disk controller commands to set the BBund ID byte and turn on the drive. This routine is essential for loading game data stored on the disk, a necessity given the Apple IIe's limited memory. The use of bank switching allowed Mechner to maximize the available storage, dividing data across multiple banks and accessing them as needed. This technique was a hallmark of advanced Apple II programming, enabling games like Prince of Persia to deliver complex worlds and rich visuals despite hardware limitations. The routine's careful handling of disk operations ensured reliability, reducing the risk of errors during gameplay. Bank switching became a standard approach for memory management in later systems, influencing the design of cartridges and disk-based games on platforms like the NES and SNES."
  - id: "savegame-loadgame-disk-based-state-management"
    line_start: 386
    line_end: 413
    title: "Saving Progress on a 5.25\" Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The SAVEGAME and LOADGAME subroutines manage game state by writing and reading 256 bytes of data to and from the disk. They use track 23 on side 2, ensuring that the saved data does not interfere with other game assets. This approach reflects the constraints of the Apple IIe, where memory was limited and persistent storage required careful allocation. By dedicating an entire track to save data, Mechner ensured reliability and simplicity, avoiding the complexities of fragmented storage. These routines highlight the ingenuity required to implement features that are taken for granted today, such as save systems. Disk-based state management was common in the era, but Mechner's implementation stands out for its robustness and integration into the game's flow. This technique influenced later games, demonstrating how to balance memory constraints with user-friendly features."
  - id: "loadlevel-dynamic-level-loading"
    line_start: 451
    line_end: 481
    title: "Dynamic Level Loading for Cinematic Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The LOADLEVEL subroutine dynamically loads level data into the 'working blueprint' buffer in auxiliary memory. It checks if the background and character sets in memory match the required ones for the level; if not, it loads them from disk. This design reflects the constraints of the Apple IIe, where memory was limited and data had to be loaded on demand to fit within the available space. Mechner's approach ensured that each level could have unique visuals and gameplay elements, contributing to the cinematic feel of Prince of Persia. Dynamic level loading was an advanced technique for the era, enabling games to deliver rich experiences despite hardware limitations. This technique influenced later games, demonstrating how to balance memory constraints with artistic ambition."
  - id: "attractloop-self-running-demo"
    line_start: 679
    line_end: 709
    title: "The Self-Running Demo That Sold the Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Attract_mode"
    image_url: ""
    image_caption: ""
    content: "The AttractLoop subroutine implements the game's attract mode, a self-running demo designed to showcase its visuals and gameplay to potential players. It cycles through various scenes, including the title screen, prologue, and gameplay segments, playing music and displaying high-resolution graphics. This feature was common in arcade games but less so in home computer games, making Prince of Persia stand out. Mechner's implementation reflects his cinematic vision, using the attract mode to draw players into the game's world. The attract mode was a marketing tool, demonstrating the game's capabilities and enticing players to purchase it. This technique influenced later games, showing how to use self-running demos to create excitement and anticipation."
  - id: "super-epilog-iigs-enhanced-ending"
    line_start: 921
    line_end: 950
    title: "The Enhanced Ending for Apple IIGS Owners"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_IIGS"
    image_url: ""
    image_caption: ""
    content: "The SuperEpilog subroutine provides an enhanced ending for players using the Apple IIGS, taking advantage of its superior graphics and sound capabilities. It fades between screens, plays music, and uses super hi-res graphics to deliver a more cinematic experience. This subroutine reflects Mechner's commitment to pushing the limits of available hardware, ensuring that players with the latest Apple II model could enjoy a richer experience. The Apple IIGS was introduced in 1986 as a more powerful successor to the Apple IIe, and Mechner's use of its features demonstrates his adaptability and technical skill. The enhanced ending was a reward for players who invested in the latest technology, showcasing the game's capabilities and encouraging upgrades. This approach influenced later games, showing how to tailor experiences to different hardware configurations."
  - id: "start-game-logic"
    line_start: 1015
    line_end: 1060
    title: "How the Game Decides to Resume or Restart"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section begins with the DOSTARTGAME routine, which determines whether the player resumes a saved game or starts fresh. It toggles the drive, loads essential routines, and sets the first level. The logic checks for a specific keypress (kresume) to decide between resuming or starting anew. This decision-making process reflects the constraints of the Apple II hardware, where memory and storage were limited, requiring efficient handling of game states. In the late 1980s, saving game progress was still a novel feature in many games, and Mechner's implementation here ensured a seamless user experience. This approach influenced later games that adopted similar methods for managing saved states, particularly on systems with limited memory."
  - id: "load-permanent-data"
    line_start: 1062
    line_end: 1166
    title: "Permanent Data Loading: A One-Time Efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The loadperm routine loads code and data that remain constant throughout the game. It uses bank-switched memory to optimize storage, loading data into auxiliary memory and then switching back to the main memory. This technique was crucial for fitting the game's cinematic animations and complex logic into the Apple II's 128KB limit. Mechner's use of bank-switching was inspired by earlier Apple II programs but pushed the technique further to accommodate the game's ambitious scope. This efficient memory management influenced later developers working on constrained systems, such as the NES and Commodore 64, where similar techniques became standard practice."
  - id: "stage-1-loading"
    line_start: 1168
    line_end: 1188
    title: "Static Screens: Loading Stage 1"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_hi-res_graphics"
    image_url: ""
    image_caption: ""
    content: "The routines LoadStage1A and LoadStage1B handle the loading of static double hi-res screens for Stage 1. These screens lack animation, allowing Mechner to allocate memory primarily for detailed graphics. The code dynamically loads data from the disk and sets up auxiliary memory for background graphics. This approach was tailored to the Apple II's graphics capabilities, which included a unique double hi-res mode. By focusing on static screens for the initial stage, Mechner could introduce players to the game's visual style while conserving resources for later stages with full animation. This technique influenced other developers seeking to balance graphical fidelity and performance on limited hardware."
  - id: "reload-aux-memory"
    line_start: 1210
    line_end: 1238
    title: "Recovering Memory After Title Screens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The ReloadStuff routine reloads auxiliary memory wiped out by the display of double hi-res title screens. It ensures that critical data for gameplay is restored before proceeding. This recovery process highlights the challenges of working with constrained memory systems, where even temporary displays could disrupt the game's state. Mechner's careful management of memory allowed him to include cinematic elements without compromising gameplay. This technique influenced later developers working on systems with similar constraints, such as the Sega Master System and early PC games."
  - id: "stage-2-loading"
    line_start: 1240
    line_end: 1279
    title: "Dynamic Animation: Loading Stage 2"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "Stage 2 introduces character animations, loaded dynamically by routines like LoadStage2A and loadch7. These routines manage the disk operations required to load animation data into memory, using techniques like error checking and retry loops to ensure reliability. The animations were created using rotoscoping, a labor-intensive process where Mechner traced filmed movements frame by frame. This cinematic approach to animation set Prince of Persia apart from other games of the era and influenced the development of later platformers, such as Another World and Flashback, which adopted similar techniques."
  - id: "stage-3-loading"
    line_start: 1308
    line_end: 1367
    title: "Full Animation: Loading Stage 3"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The LoadStage3 routine handles the loading of full game animations, including both background and character data. It uses auxiliary and main memory to store large amounts of data, employing bank-switching and dynamic loading to fit within the Apple II's constraints. This stage represents the culmination of Mechner's efforts to create a cinematic experience, with smooth animations and detailed environments. The techniques used here influenced the design of later cinematic platformers, as well as games on more advanced systems like the Amiga and SNES."
  - id: "music-playback"
    line_start: 1369
    line_end: 1406
    title: "Interruptible and Non-Interruptible Music Playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "The PlaySongNI and PlaySongI routines manage music playback, with one allowing interruptions and the other playing continuously. These routines check sound and music toggles, ensuring that playback aligns with user preferences. Music was an important part of Prince of Persia's cinematic atmosphere, and Mechner's implementation here demonstrates his attention to detail. The ability to interrupt or continue playback influenced later games with dynamic soundtracks, such as The Legend of Zelda series, which adapted music based on gameplay context."
  - id: "disk-error-handling"
    line_start: 1429
    line_end: 1444
    title: "What Happens When the Wrong Disk Is Inserted"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "The error routine prompts the user to insert the correct disk side and waits for a keypress. This simple yet effective error handling mechanism reflects the realities of floppy disk-based systems, where users often needed to swap disks during gameplay. Mechner's approach ensured that players could recover from errors without losing progress, contributing to the game's user-friendly design. This technique influenced other disk-based games of the era, which adopted similar methods to handle disk swapping and errors gracefully."

---

```asm
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
 db RdGrp.Inc
 hex e0,e1,e2,e3,e4,e5,e6,e7,e8
 hex e9,ea,eb,ec,ed,00,00,00,00

* Load as much of Stage 3 as we can keep

 jsr loadperm

* Turn off drive

 jsr driveoff

* Check for IIGS

 jsr checkIIGS ;returns IIGS

* Start attract loop

 jsr initsystem ;in topctrl

 lda #0
 sta invert ;rightside up Y tables

 lda #1
 sta soundon ;Sound on

 jmp AttractLoop

*-------------------------------
*
*   Reload code & images
*   (Temp routine for game development)
*
*-------------------------------
RELOAD
 do 0
 jsr driveon

 jsr loadperm
 jsr LoadStage3

 jmp driveoff
 fin

*-------------------------------
*
* Load music (1K)
*
* Load at $5000 mainmem & move to aux l.c.
*
*-------------------------------
* Load music set 1 (title)

loadmusic1
 jsr setmain
 lda #34
 sta track
 jsr rw18
 db RdSeq,$4e ;we only want $50-53
]mm jsr setaux
 jmp xmovemusic

*-------------------------------
* Load music set 2 (game)

loadmusic2
 jsr setmain
 lda #20
 sta track
 jsr rw18
 db RdGrp.Inc
 hex 50,51,52,53,00,00,00,00,00
 hex 00,00,00,00,00,00,00,00,00
 jmp ]mm

*-------------------------------
* Load music set 3 (epilog)

loadmusic3
 jmp loadmusic1

*-------------------------------
setaux sta RAMRDaux
 sta RAMWRTaux
 rts

setmain sta RAMRDmain
 sta RAMWRTmain
 rts

*-------------------------------
*
*  D R I V E   O N
*
*  In: A = delay
*      BBundID
*
*  Sets auxmem
*
*-------------------------------
driveon lda #0
driveon1 sta :delay

 jsr setaux ;set auxmem

* switch in bank 1 (RW18)

 bit RWBANK1
 bit RWBANK1 ;1st 4k bank

* set Bbund ID

 lda BBundID
 sta :IDbyte

 jsr rw18
 db ModID
:IDbyte hex a9 ;Bbund ID byte

* turn on drive 1

 jsr rw18
 db DrvOn
:drive hex 01
:delay hex 00
 rts

*-------------------------------
*
*  D R I V E   O F F
*
*-------------------------------
driveoff jsr rw18
 db DrvOff

* switch in bank 2

 bit RWBANK2
 bit RWBANK2 ;2nd 4k bank

 sta $c010 ;clr kbd

 jmp setaux ;& set auxmem

*-------------------------------
*
*  Set first level/demo level
*
*-------------------------------
set1stlevel
 lda firstlevel
 ldx firstlevel+1
SetLevel sta params
 stx params+1
]rts rts

setdemolevel
 lda demolevel
 ldx demolevel+1
 jmp SetLevel

*-------------------------------
*
* Check track 22 to make sure it's the right disk
*
* (Scratch page 2 mainmem--return w/mainmem set)
*
*-------------------------------
checkdisk
 jsr setaux
 ldx #POPside2
 stx BBundID

 jsr driveon
:loop jsr setmain
 lda #22
 sta track
 jsr rw18
 db RdGrpErr.Inc
 hex 02,00,00,00,00,00,00,00,00
 hex 00,00,00,00,00,00,00,00,00
 bcc ]rts
 jsr error
 jmp :loop

*-------------------------------
*
* Save/load game
*
* Write/read 256 bytes of data: sector 0, track 23, side 2
* We scorch an entire track, but on side 2 we can afford it
*
*-------------------------------
SAVEGAME
 jsr checkdisk ;sets main

 sta RAMRDaux
 ldx #15
:loop lda savedgame,x ;aux
 sta $200,x ;main
 dex
 bpl :loop
 sta RAMRDmain

 lda #23
 sta track
 jsr rw18
 db WrtGrpErr
 hex 02,00,00,00,00,00,00,00,00
 hex 00,00,00,00,00,00,00,00,00
 bcc :ok
 jsr whoop
:ok jmp driveoff

*-------------------------------
LOADGAME
 jsr checkdisk ;sets main

 lda #23
 sta track
 jsr rw18
 db RdGrp
 hex 02,00,00,00,00,00,00,00,00
 hex 00,00,00,00,00,00,00,00,00

 sta RAMWRTaux
 ldx #15
:loop lda $200,x ;main
 sta savedgame,x ;aux
 dex
 bpl :loop

 jmp driveoff

*-------------------------------
*
* Load alt. character set (chtable4)
*
* In: Y = CHset4
*
*-------------------------------
LOADALTSET
 sty newCHset

 jsr driveon

 jsr rdch4

 jmp driveoff

*-------------------------------
*
* L O A D   L E V E L
*
* In: bluepTRK, bluepREG
*       TRK = track # (1-33)
*       REG = region on track (0-1)
*     A = BGset1; X = BGset2; Y = CHset4
*
* Load level into "working blueprint" buffer in auxmem;
* game code will make a "backup copy" into aux l.c.
* (which we can't reach from here).
*
* If bg & char sets in memory aren't right, load them in
*
*-------------------------------
LOADLEVEL
 sta newBGset1
 stx newBGset2
 sty newCHset

 jsr driveon

 jsr rdbluep ;blueprint
 jsr rdbg1 ;bg set 1
 jsr rdbg2 ;bg set 2
 jsr rdch4 ;char set 4

 jsr vidstuff

 jmp driveoff

*-------------------------------
setbluep
 lda bluepTRK
 sta track
 lda bluepREG
]rts rts

*-------------------------------
vidstuff
 lda BBundID
 cmp #POPside2
 bne ]rts
 lda $c000
 cmp #"^"
 bne ]rts

 jsr setmain
 lda #12
 sta track
 jsr rw18
 db RdGrp.Inc
 hex 00,00,00,00,00,00,00,00,00
 hex 00,00,00,0c,0d,0e,0f,10,11
:loop jsr rw18
 db RdSeq.Inc
:sm hex 12
 lda :sm
 clc
 adc #$12
 sta :sm
 cmp #$6c
 bcc :loop
 jsr driveoff
 jsr setmain
 jmp $c00

*-------------------------------
* Track data for alt bg/char sets
*
* Set #:        0  1  2  3  4  5  6

bg1trk hex 05,00,07
bg2trk hex 12,02,09
ch4trk hex 0d,03,04,05,0a,0b
ch4off hex 0c,00,06,0c,00,06

*-------------------------------
rdbg1 ldx newBGset1
 cpx BGset1 ;already in memory?
 beq :rts ;yes--no need to load
 stx BGset1
 lda bg1trk,x
 sta track
 jsr rw18
 db RdSeq.Inc,$60
 jsr rw18
 db RdSeq.Inc,$72
]rts
:rts rts

rdbg2 ldx newBGset2
 cpx BGset2
 beq ]rts
 stx BGset2
 lda bg2trk,x
 sta track
 jsr rw18
 db RdSeq.Inc,$84
 rts

rdch4 ldx newCHset
 cpx CHset
 beq ]rts
 stx CHset
 lda ch4trk,x
 sta track
 lda ch4off,x
 beq :off0
 cmp #6
 beq :off6
 cmp #12
 beq :off12
 rts

:off12 jsr rw18
 db RdGrp.Inc
 hex 00,00,00,00,00,00,00,00,00
 hex 00,00,00,96,97,98,99,9a,9b
 jsr rw18
 db RdSeq.Inc,$9c
 rts

:off6 jsr rw18
 db RdGrp.Inc
 hex 00,00,00,00,00,00,96,97,98
 hex 99,9a,9b,9c,9d,9e,9f,a0,a1
 jsr rw18
 db RdGrp.Inc
 hex a2,a3,a4,a5,a6,a7,a8,a9,aa
 hex ab,ac,ad,00,00,00,00,00,00
 rts

:off0 jsr rw18
 db RdSeq.Inc,$96
 jsr rw18
 db RdGrp.Inc
 hex a8,a9,aa,ab,ac,ad,00,00,00
 hex 00,00,00,00,00,00,00,00,00
]rts rts

*-------------------------------
*
* read blueprint
*
*-------------------------------
rdbluep
 jsr setbluep
 bne :reg1

:reg0 jsr rw18
 db RdGrpErr
 hex b7,b8,b9,ba,bb,bc,bd,be,bf
 hex 00,00,00,00,00,00,00,00,00
 bcc ]rts
 jsr error
 jmp :reg0

:reg1 jsr rw18
 db RdGrpErr
 hex 00,00,00,00,00,00,00,00,00
 hex b7,b8,b9,ba,bb,bc,bd,be,bf
 bcc ]rts
 jsr error
 jmp :reg1

*-------------------------------
*
* Copy one DHires page to another
*
*-------------------------------
copy1to2
 lda #$40 ;dest
 ldx #$20 ;org
 bne copydhires

copy2to1
 lda #$20
 ldx #$40

copydhires
 sta IMAGE+1 ;dest
 stx IMAGE ;org

 jsr _copy2000aux
 jmp _copy2000 ;in hires

*-------------------------------
*
*  Cut to princess screen
*
*-------------------------------
CUTPRINCESS
 jsr blackout
 lda #1 ;seek track 0
cutprincess1
 jsr LoadStage2 ;displaces bgtab1-2, chtab4

 lda #pacProom
 jsr SngExpand

 lda #$40
 sta IMAGE+1
 lda #$20
 sta IMAGE ;copy page 1 to page 2
 jmp _copy2000 ;in HIRES

*-------------------------------
*
*  Epilog (You Win)
*
*-------------------------------
EPILOG
 lda #1
 sta soundon
 sta musicon
 jsr blackout
 jsr LoadStage1B

 jsr Epilog

 lda #POPside1
 sta BBundID
 sta $c010
:loop lda $c000
 bpl :loop ;fall thru

*-------------------------------
*
*  A  T  T  R  A  C  T
*
*  Self-running "attract mode"
*
*-------------------------------
ATTRACTMODE
AttractLoop
 lda #1
 sta musicon

 jsr SetupDHires

 jsr PubCredit

 jsr AuthorCredit

 jsr TitleScreen

 jsr Prolog1
]princess
 jsr PrincessScene

 jsr SetupDHires

 jsr Prolog2

 jsr SilentTitle

 jmp Demo

*-------------------------------
*
* Set up double hi-res
*
*-------------------------------
SetupDHires

* Show black lo-res scrn

 jsr blackout

* Load in Stage 1 data

 jmp LoadStage1A

*-------------------------------
*
* "Broderbund Software Presents"
*
*-------------------------------
PubCredit

* Unpack splash screen into DHires page 1

 jsr unpacksplash

* Show DHires page 1

 jsr setdhires

* Copy to DHires page 2

 jsr copy1to2

 lda #44
 jsr tpause

* Unpack "Broderbund Presents" onto page 1

 lda #delPresents
 jsr DeltaExpPop

 ldx #80
 lda #s_Presents
 jsr PlaySongI

 jmp CleanScreen

*-------------------------------
*
* Credit line disappears
*
*-------------------------------
CleanScreen

* Switch to DHires page 2
* (credit line disappears)

 lda PAGE2on

* Copy DHires page 2 back to hidden page 1

 jsr copy2to1

* Display page 1

 lda PAGE2off
]rts rts

*-------------------------------
*
* "A Game by Jordan Mechner"
*
*-------------------------------
AuthorCredit

 lda #42
 jsr tpause

* Unpack byline onto page 1

 lda #delByline
 jsr DeltaExpPop

 ldx #80
 lda #s_Byline
 jsr PlaySongI

* Credit line disappears

 jmp CleanScreen

*-------------------------------
*
* "Prince of Persia"
*
*-------------------------------
SilentTitle
 jsr unpacksplash

 jsr copy1to2

 lda #20
 jsr tpause

 lda #delTitle
 jsr DeltaExpPop

 lda #160
 jmp tpause

*-------------------------------
TitleScreen
 lda #38
 jsr tpause

* Unpack title onto page 1

 lda #delTitle
 jsr DeltaExpPop

 ldx #140
 lda #s_Title
 jsr PlaySongI

* Credit line disappears

 jmp CleanScreen

*-------------------------------
*
*  Prologue, part 1
*
*-------------------------------
Prolog1
 lda #pacProlog
 sta RAMRDaux
 jsr DblExpand

 ldx #250
 lda #s_Prolog
 jmp PlaySongI

*-------------------------------
*
*  Princess's room: Vizier starts hourglass
*
*-------------------------------
PrincessScene
 jsr blackout

 jsr ReloadStuff ;wiped out by dhires titles

 lda #0 ;don't seek track 0
 jsr cutprincess1

 lda #0 ;cut #0 (intro)
 jmp xplaycut ;aux l.c. via grafix

*-------------------------------
*
*  Prologue, part 2
*
*-------------------------------
Prolog2
 lda #pacSumup
 sta RAMRDmain
 jsr DblExpand

 jsr setdhires

 ldx #250
 lda #s_Sumup
 jmp PlaySongI

*-------------------------------
*
* Epilog
*
*-------------------------------
Epilog
 lda IIGS
 bne SuperEpilog ;super hi-res ending if IIGS

 lda #pacEpilog
 sta RAMRDaux
 jsr DblExpand

 jsr setdhires

 lda #s_Epilog
 jsr PlaySongNI
 lda #15
 jsr pauseNI
 jsr unpacksplash
 lda #75
 jsr pauseNI

 lda #s_Curtain
 jsr PlaySongNI
 lda #60
 jsr pauseNI

 jmp blackout

unpacksplash
 lda #pacSplash
 sta RAMRDaux
 jmp DblExpand

*-------------------------------
*
* Super hi-res epilog (IIGS only)
*
*-------------------------------
SuperEpilog
 lda #1 ;aux
 jsr fadein ;fade in epilog screen
 jsr setaux

 lda #s_Epilog
 jsr PlaySongNI

 jsr fadeout
 lda #0 ;main
 jsr fadein ;fade to palace screen
 jsr setaux

 lda #80
 jsr pauseNI

 lda #s_Curtain
 jsr PlaySongNI

 lda #255
 jsr pauseNI

 jsr fadeout ;...and fade to black

 jmp * ;and hang (because it's too much
;trouble to restart)

*-------------------------------
*
*  Demo sequence
*
*-------------------------------
Demo
 jsr blackout

 jsr LoadStage3

 jsr setdemolevel
 jsr rdbluep

 jsr driveoff

* Go to TOPCTRL

 lda #0
 jmp start

*-------------------------------
* non-interruptible pause

pauseNI
:loop sta pausetemp
 ldy #20
:loop1 ldx #0
:loop2 dex
 bne :loop2
 dey
 bne :loop1

 lda pausetemp
 sec
 sbc #1
 bne :loop
]rts rts

*-------------------------------
*
*  Start game? (if key or button pressed)
*
*-------------------------------
StartGame?
 jsr musickeys
 cmp #$80 ;key or button press?
 bcc ]rts ;no

 do FinalDisk
 else
 cmp #kdemo ;temp!
 bne :1
 jmp Demo
:1 cmp #kprincess ;temp!
 bne :2
 jmp ]princess
 fin

:2 cmp #krestart
 bne :3
 jmp AttractLoop
:3 ;fall thru to DOSTARTGAME
*-------------------------------
*
*  Start a game
*
*-------------------------------
DOSTARTGAME
 jsr blackout

* Turn on drive & load Stage 3 routines

:1 jsr LoadStage3

* Load 1st level

 jsr set1stlevel

 jsr rdbluep

* Turn off drive & set aux

 jsr driveoff

* Go to TOPCTRL

 lda #1
 sta musicon

 do DemoDisk
 else

 lda keypress
 cmp #kresume
 bne :newgame

* Resume old game

 lda #4 ;arbitrary
 jmp startresume

 fin

* Start new game

:newgame
 lda #1
 jmp start

*-------------------------------
*
* Load permanent code & data
* (only once)
*
*-------------------------------
loadperm
 lda #3
 sta track

 jsr setaux

 jsr rw18
 db RdSeq.Inc,$0e

 jsr rw18
 db RdGrp.Inc
 hex 04,05,06,07,08,09,0a,0b,0c
 hex 0d,20,21,22,23,24,25,26,27

 jsr setmain
 lda #9
 sta track
 jsr rw18
 db RdSeq.Inc,$84
 jsr rw18
 db RdSeq.Inc,$96

 jsr rw18
 db RdSeq.Inc,$08

 jsr rw18
 db RdGrp.Inc
 hex 1a,1b,1c,1d,1e,1f,a8,a9,aa
 hex ab,ac,ad,ae,af,b0,b1,b2,b3

 jsr rw18
 db RdGrp.Inc
 hex b4,b5,b6,b7,b8,b9,ba,bb,bc
 hex bd,be,bf,00,00,00,00,00,00

*-------------------------------
*
* Load aux l.c. stuff (tracks 19-21 & 34)
* (includes music set 1)
*
* Load into main hires area & move to aux l.c.
*
*-------------------------------
 lda #19
 sta track

 jsr rw18
 db RdGrp.Inc
 hex 00,00,20,21,22,23,24,25,26
 hex 27,28,29,2a,2b,2c,2d,2e,2f

 jsr rw18
 db RdGrp.Inc
 hex 00,00,00,00,30,31,32,33,34
 hex 35,36,37,38,39,3a,3b,3c,3d
 jsr rw18
 db RdSeq.Inc,$3e

 lda #34
 sta track
 jsr rw18
 db RdGrp.Inc
 hex 00,00,50,51,52,53,54,55,56
 hex 57,58,59,5a,5b,5c,5d,5e,5f

 jsr setaux
 lda #1
 sta MSset

 jsr setmain
 jmp Tmoveauxlc

*-------------------------------
*
*  Stage 1: static dbl hires screens -- no animation
*  Stage 2: character animation only (bg is unpacked)
*  Stage 3: full game animation
*
*-------------------------------
*
* Load Stage 1 data (sida A)
*
*-------------------------------
]lsub sta track
:test jsr rw18
 db RdSeqErr.Inc,$40
 bcc :ok
 jsr error
 jmp :test
:ok
 jsr rw18
 db RdSeq.Inc,$52
 jsr rw18
 db RdSeq.Inc,$64
 jsr rw18
 db RdSeq.Inc,$76
 jsr rw18
 db RdSeq.Inc,$88
 rts

LoadStage1A
 jsr driveon

 lda #22
 jsr ]lsub

 jsr setmain
 jsr rw18
 db RdSeq.Inc,$60
 jsr rw18
 db RdSeq.Inc,$72

 jsr loadmusic1

 jsr setaux
 lda #$ff
 sta BGset1
 sta BGset2
 sta CHset

 jmp driveoff

*-------------------------------
*
*  Load stage 1 (side B)
*
*-------------------------------
LoadStage1B
 jsr driveon

 jsr loadmusic3 ;epilog

 lda IIGS
 bne :shires ;Super hi-res ending only if IIGS

 lda #18
 jsr ]lsub
 jmp driveoff

:shires jsr loadsuper ;in unpack
 jmp driveoff

*-------------------------------
*
* Reload 2000-6000 auxmem
* (wiped out by dhires titles)
*
*-------------------------------
ReloadStuff
 jsr driveon

:test lda #4
 sta track
 jsr rw18
 db RdGrpErr
 hex 00,00,00,00,00,00,00,00,00
 hex 00,20,21,22,23,24,25,26,27
 bcc :ok
 jsr error
 jmp :test
:ok
 lda #15
 sta track
 jsr rw18
 db RdSeq.Inc,$28
 jsr rw18
 db RdSeq.Inc,$3a
 jsr rw18
 db RdSeq.Inc,$4c

 jmp driveoff

*-------------------------------
*
*  Load stage 2 data (6000-a800)
*
*-------------------------------
LoadStage2
 ldx BBundID
 cpx #POPside2
 beq LoadStage2B

LoadStage2A
 jsr driveon

 lda #0
 jsr loadch7 ;side A only

 lda #29
]ls2 sta track

:test jsr rw18
 db RdSeqErr.Inc,$60
 bcc :ok
 jsr error
 jmp :test
:ok
 jsr rw18
 db RdSeq.Inc,$72
 jsr rw18
 db RdSeq.Inc,$84
 jsr rw18
 db RdGrp.Inc
 hex 96,97,98,99,9a,9b,9c,9d,9e
 hex 00,00,00,00,00,00,00,00,00

 lda #$ff
 sta BGset1
 sta BGset2
 sta CHset

 jmp driveoff

* Load chtable7 (side A only)

loadch7
 sta recheck0
:test lda #28
 sta track
 jsr rw18
 db RdGrpErr.Inc
 hex 00,00,00,00,00,00,00,00,00
 hex 00,00,00,00,9f,a0,a1,a2,a3
 bcc :ok
 jsr error
 jmp :test
:ok
]rts rts

*-------------------------------
*
*  Load stage 2 routines (side B)
*
*-------------------------------
LoadStage2B
 jsr driveon

 lda #24
 bne ]ls2

*-------------------------------
*
*  Load stage 3
*  Full version (from stage 1)
*
*  Reload 2000-AC00 auxmem, 6000-7200 mainmem
*
*-------------------------------
LoadStage3
 jsr driveon

 lda #4
 sta track

:loop jsr rw18
 db RdGrpErr.Inc
 hex 00,00,00,00,00,00,00,00,00
 hex 00,20,21,22,23,24,25,26,27
 bcc :ok
 jsr error
 jmp :loop
:ok
 jsr rw18
 db RdSeq.Inc,$60
 jsr rw18
 db RdSeq.Inc,$72 ;bgtable1

 jsr setmain
 jsr rw18
 db RdSeq.Inc,$60
 jsr rw18
 db RdSeq.Inc,$72

 jsr setaux

 lda #13
 sta track
 jsr rw18
 db RdGrp.Inc
 hex 00,00,00,00,00,00,00,00,00
 hex 00,00,00,96,97,98,99,9a,9b
 jsr rw18
 db RdSeq.Inc,$9c ;chtable4
 jsr rw18
 db RdSeq.Inc,$28
 jsr rw18
 db RdSeq.Inc,$3a
 jsr rw18
 db RdSeq.Inc,$4c
 jsr rw18
 db RdSeq.Inc,$84 ;bgtable2

 lda #0
 sta BGset1
 sta BGset2
 sta CHset

 jsr loadmusic2

 jmp setaux

*-------------------------------
*
* Play song--interruptible & non-interruptible
*
* (Enter & exit w/ bank 2 switched in)
*
* In: A = song #
*     X = length to pause if sound is turned off
*
*-------------------------------
PlaySongNI ;non-interruptible
;(& ignores sound/music toggles)
 jsr setaux
 jsr xminit
:loop jsr xmplay
 cmp #0
 bne :loop
]rts rts

*-------------------------------
PlaySongI ;interruptible
 jsr setaux
 beq ]rts

 tay
 lda musicon
 and soundon
 beq :pause

 tya
 jsr xminit
:loop jsr StartGame?
 jsr xmplay
 cmp #0
 bne :loop
]rts rts

:pause txa ;falls thru to tpause
*-------------------------------
*
*  In: A = delay (max = 255)
*
*-------------------------------
tpause
:loop sta pausetemp

 ldy #2
:loop1 ldx #0
:loop2 jsr StartGame?
 dex
 bne :loop2
 dey
 bne :loop1

 lda pausetemp
 sec
 sbc #1
 bne :loop
]rts rts

*-------------------------------
*
* Disk error
*
* Prompt user for correct disk side & wait for keypress
*
*-------------------------------
error
 jsr driveoff

 jsr prompt

 jmp driveon

*-------------------------------
 lst
eof ds 1
 usr $a9,1,$a80,*-org
 lst off
```