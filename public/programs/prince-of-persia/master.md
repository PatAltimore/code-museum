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
description: "The foundational assembly code for Prince of Persia (1989), showcasing cinematic platformer innovation on the Apple II."

summary:
  - point: "Bank-switched memory management for Apple II's 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Rotoscoping animation technique traced from live-action footage"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Clever use of soft switches to control Apple II hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II hardware"
  - point: "Self-running attract mode showcasing cinematic storytelling"
    link: "https://en.wikipedia.org/wiki/Attract_mode"
    link_label: "Attract mode"
  - point: "Disk-based save/load system tailored to Apple II's limitations"
    link: "https://en.wikipedia.org/wiki/Floppy_disk"
    link_label: "Floppy disk"

enhancements:
  - id: "firstboot-initial-game-setup"
    line_start: 169
    line_end: 227
    title: "FirstBoot: Initial game setup routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The FIRSTBOOT routine initializes the game environment when the program starts. It sets up the memory configuration (auxiliary memory), loads essential high-resolution graphics tables, and prepares the system for attract mode. The programmer, Jordan Mechner, uses direct hardware manipulation via soft switches to configure the Apple II's memory banks and display modes. This section also includes a check for the Apple IIGS model, ensuring compatibility with newer hardware. In 1985–1989, Apple II computers were constrained by limited memory and processing power, requiring developers to optimize every aspect of their code. Mechner's approach reflects the ingenuity needed to create cinematic experiences on such hardware. The FIRSTBOOT routine's efficient setup allowed Prince of Persia to deliver smooth transitions and immersive gameplay, influencing later games to adopt similar initialization techniques for cross-platform compatibility."
  - id: "reload-development-helper"
    line_start: 229
    line_end: 243
    title: "RELOAD: Development helper routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Software_development"
    image_url: ""
    image_caption: ""
    content: "The RELOAD routine is a temporary function used during development to reload code and images. It activates the disk drive, loads permanent resources, and switches back to auxiliary memory. This routine exemplifies the iterative nature of game development in the 1980s, where developers often included debugging and testing utilities directly in the code. Mechner's solo development process required tools like RELOAD to quickly test changes and ensure stability. While this routine is not part of the final gameplay, it highlights the behind-the-scenes effort required to create a polished product. Modern game engines like Unity and Unreal provide similar debugging tools, but Mechner's approach was manual and tailored to the constraints of the Apple II."
  - id: "loadmusic-title-screen-music"
    line_start: 245
    line_end: 280
    title: "LoadMusic: Title screen and game music"
    wikipedia_url: "https://en.wikipedia.org/wiki/Chiptune"
    image_url: ""
    image_caption: ""
    content: "The LoadMusic routines load music data into memory, divided into three sets: title, game, and epilog. Music is loaded from specific disk tracks and moved to auxiliary memory for playback. Mechner uses direct disk access commands to fetch and organize music data, showcasing his deep understanding of Apple II hardware. In the late 1980s, music in games was limited by hardware constraints, often relying on simple tones and sequences. Prince of Persia's music, while modest by modern standards, added a cinematic layer to the gameplay experience. This approach influenced later developers to integrate music as a core element of storytelling, paving the way for iconic soundtracks in games like The Legend of Zelda and Final Fantasy."
  - id: "driveon-disk-drive-activation"
    line_start: 291
    line_end: 326
    title: "DriveOn: Disk drive activation and memory setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "The DriveOn routine activates the disk drive and configures memory for data access. It uses bank-switching techniques to enable reading and writing from specific memory banks. This routine is critical for managing the Apple II's limited memory and ensuring smooth transitions between game states. Mechner's use of direct hardware manipulation reflects the low-level programming required to optimize performance on 1980s hardware. The DriveOn routine's efficient handling of memory and disk operations allowed Prince of Persia to deliver seamless gameplay despite the Apple II's constraints. This technique influenced later developers working on disk-based systems like the Commodore 64 and early PCs."
  - id: "savegame-loadgame-disk-based-save-system"
    line_start: 386
    line_end: 433
    title: "SaveGame/LoadGame: Disk-based save system"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "The SaveGame and LoadGame routines implement a disk-based save system, writing and reading 256 bytes of game state data to a specific track and sector on the disk. This approach was tailored to the Apple II's floppy disk limitations, where storage space was scarce and data access was slow. Mechner's implementation ensures reliability by using error-checking mechanisms during read and write operations. In the late 1980s, save systems were a novel feature in games, allowing players to continue their progress later. Prince of Persia's save system set a precedent for future games, influencing the development of save mechanics in RPGs and adventure games like King's Quest and Ultima."
  - id: "loadlevel-dynamic-level-loading"
    line_start: 451
    line_end: 481
    title: "LoadLevel: Dynamic level loading from disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The LoadLevel routine dynamically loads level data into memory, including background graphics and character sets. It uses disk commands to fetch data from specific tracks and regions, ensuring the correct assets are loaded for each level. Mechner's approach reflects the challenges of managing large amounts of data on the Apple II, where memory was limited and disk access was slow. By dynamically loading levels, Prince of Persia could offer a rich and varied gameplay experience without exceeding hardware constraints. This technique influenced later games to adopt dynamic loading systems, enabling expansive worlds in titles like The Elder Scrolls and Grand Theft Auto."
  - id: "attractloop-self-running-demo"
    line_start: 679
    line_end: 709
    title: "AttractLoop: Self-running demo mode"
    wikipedia_url: "https://en.wikipedia.org/wiki/Attract_mode"
    image_url: ""
    image_caption: ""
    content: "The AttractLoop routine implements a self-running demo mode, showcasing the game's cinematic storytelling and gameplay mechanics. It cycles through title screens, prologue sequences, and gameplay demonstrations, using preloaded assets and scripted events. Attract modes were a common feature in arcade games, designed to entice players and demonstrate the game's capabilities. Mechner adapted this concept for the Apple II, using it as a way to highlight Prince of Persia's innovative animation and narrative. The attract mode's cinematic presentation influenced later games to include similar features, becoming a staple in console and PC gaming."
  - id: "superepilog-iigs-enhanced-ending"
    line_start: 921
    line_end: 950
    title: "SuperEpilog: Enhanced ending for Apple IIGS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_IIGS"
    image_url: ""
    image_caption: ""
    content: "The SuperEpilog routine provides an enhanced ending sequence for the Apple IIGS, utilizing its superior graphics and sound capabilities. It includes fade-in and fade-out effects, high-resolution images, and extended music playback. Mechner's decision to create a special ending for the IIGS reflects his commitment to leveraging the unique features of each platform. In the late 1980s, the IIGS was Apple's attempt to compete with more advanced systems like the Amiga and Atari ST, offering improved graphics and sound. The SuperEpilog routine showcases Mechner's ability to adapt his game to different hardware, influencing later developers to create platform-specific enhancements for their games."
  - id: "start-game-sequence"
    line_start: 1015
    line_end: 1060
    title: "Starting the game: loading essentials"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section initializes the game by loading essential routines and the first level. It begins by turning off the screen (via 'blackout'), loading Stage 3 routines, and setting up the first level. The code then checks whether the player wants to resume a saved game or start a new one. This decision-making process reflects the game's cinematic aspirations, offering a seamless experience for players. In 1989, memory constraints on the Apple II necessitated clever use of auxiliary and main memory banks, as seen here. Jordan Mechner, working solo, had to balance technical limitations with the artistic vision of a fluid, immersive platformer. The game's ability to resume saved progress was a forward-thinking feature that influenced later games with save systems, such as The Legend of Zelda and Final Fantasy."
  - id: "loading-permanent-data"
    line_start: 1062
    line_end: 1138
    title: "Loading permanent code and data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The 'loadperm' routine loads permanent code and data into memory, ensuring that essential assets are available throughout the game. This includes graphics and sequences stored on specific disk tracks. The Apple II's limited memory required frequent disk reads to access additional data, making efficient disk operations critical. Mechner's approach to loading permanent assets reflects the constraints of the era, where developers had to optimize every byte of memory and every disk operation. The reliance on auxiliary and main memory banks demonstrates the ingenuity required to fit a complex game like Prince of Persia into 128K. This technique influenced later developers working on memory-constrained systems, such as the NES and Commodore 64, where similar disk and memory management strategies were employed."
  - id: "stage-1-loading"
    line_start: 1140
    line_end: 1208
    title: "Static screens: loading Stage 1"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The routines 'LoadStage1A' and 'LoadStage1B' load static double high-resolution screens for Stage 1. Unlike later stages, Stage 1 does not feature animation, focusing instead on static visuals. This decision reflects the game's progressive complexity, with animations introduced in later stages. Mechner's use of rotoscoping for character animations was groundbreaking, but here, the focus is on loading background assets efficiently. The use of high-resolution graphics on the Apple II was a technical achievement, pushing the limits of what the hardware could display. This section laid the groundwork for the game's visual storytelling, influencing later cinematic platformers like Another World and Flashback."
  - id: "reload-auxiliary-memory"
    line_start: 1210
    line_end: 1238
    title: "Recovering auxiliary memory after titles"
    wikipedia_url: "https://en.wikipedia.org/wiki/Random-access_memory"
    image_url: ""
    image_caption: ""
    content: "The 'ReloadStuff' routine restores auxiliary memory that is overwritten by the game's title screens. This ensures that critical assets are available for gameplay after the titles are displayed. Auxiliary memory on the Apple II was a precious resource, and Mechner's careful management of it reflects the challenges of developing for such constrained systems. By reloading memory dynamically, the game maintains its cinematic flow without requiring excessive disk swaps. This technique of memory recovery influenced later developers working on systems with limited RAM, such as the Sega Genesis and SNES, where similar strategies were used to optimize performance."
  - id: "stage-2-loading"
    line_start: 1240
    line_end: 1315
    title: "Character animation: loading Stage 2"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The routines 'LoadStage2A' and 'LoadStage2B' load character animation data for Stage 2. This stage introduces dynamic animations, a hallmark of Prince of Persia's gameplay. Mechner's rotoscoping technique, where he traced filmed movements frame by frame, is evident here. The game's ability to display fluid animations on the Apple II was a technical marvel, achieved through efficient use of memory and disk operations. This section demonstrates Mechner's commitment to creating a cinematic experience, influencing later games like Tomb Raider and Uncharted, which prioritized realistic character movements."
  - id: "stage-3-loading"
    line_start: 1308
    line_end: 1378
    title: "Full animation: loading Stage 3"
    wikipedia_url: "https://en.wikipedia.org/wiki/Platform_game"
    image_url: ""
    image_caption: ""
    content: "The 'LoadStage3' routine loads full animation data for the game's most complex stage. This includes both background and character animations, showcasing the game's technical and artistic peak. Mechner's ability to fit such detailed animations into the Apple II's limited memory was a testament to his programming skill. Stage 3 represents the culmination of the game's cinematic platforming experience, influencing the genre for decades. Games like Limbo and Inside owe their atmospheric storytelling and fluid animations to the groundwork laid by Prince of Persia."
  - id: "music-playback-routines"
    line_start: 1369
    line_end: 1406
    title: "Interruptible and non-interruptible music playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_card"
    image_url: ""
    image_caption: ""
    content: "The 'PlaySongNI' and 'PlaySongI' routines handle music playback, with options for interruptible and non-interruptible modes. Music was an integral part of Prince of Persia's cinematic experience, enhancing the game's emotional impact. The ability to toggle between interruptible and non-interruptible playback reflects Mechner's attention to detail, ensuring that music did not interfere with gameplay. In the late 1980s, sound capabilities on the Apple II were limited, but Mechner's routines demonstrate how developers could maximize the hardware's potential. This approach influenced later games with dynamic soundtracks, such as the LucasArts adventure games and RPGs like Chrono Trigger."
  - id: "pause-and-error-handling"
    line_start: 1407
    line_end: 1441
    title: "Pausing and handling disk errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "The 'tpause' and 'error' routines handle pausing and disk error prompts, respectively. The pause routine allows for delays during gameplay, while the error routine prompts the user to insert the correct disk side and waits for a keypress. These features reflect the game's user-centric design, ensuring a smooth experience even in the face of technical issues. Disk errors were common on the Apple II, and Mechner's approach to handling them demonstrates his commitment to player satisfaction. This level of polish influenced later games with robust error handling and pause systems, such as the Sierra adventure games and early DOS titles."

---

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