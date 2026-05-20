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
description: "The foundational assembly code for Prince of Persia (1989), showcasing innovative memory management, cinematic techniques, and hardware interaction on the Apple II."

summary:
  - point: "Bank-switched memory to fit in 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping animation traced from film footage"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Self-running attract mode to entice players"
    link: "https://en.wikipedia.org/wiki/Attract_mode"
    link_label: "Attract Mode"
  - point: "Custom disk routines for loading levels and music"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II Disk Access"
  - point: "Double hi-res graphics mode for cinematic visuals"
    link: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    link_label: "Apple II Graphics"

enhancements:
  - id: "firstboot-initial-game-setup"
    line_start: 169
    line_end: 227
    title: "FirstBoot: Initial Game Setup Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This subroutine initializes the game environment when the program first boots. It sets up memory banks, loads essential graphics and routines, and prepares the attract mode. The programmer, Jordan Mechner, needed to optimize memory usage due to the constraints of the Apple II's 128K RAM. By leveraging bank-switched memory and auxiliary memory, Mechner ensured that the game could load high-resolution graphics and complex animations. At the time, the Apple II was a popular but aging platform, and developers often had to push its limits to create visually impressive games. This routine laid the groundwork for the game's cinematic presentation, which was a major innovation in 1989. The attract mode, triggered at the end of this routine, became a standard feature in arcade and console games, enticing players with a preview of gameplay."
  - id: "reload-development-disk-loading"
    line_start: 229
    line_end: 243
    title: "Reload: Temporary Development Disk Loading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The RELOAD routine was a temporary feature used during development to load game code and images from disk. It highlights the iterative nature of game development, where programmers often create tools and shortcuts to test and refine their work. Mechner used this routine to quickly reload assets while debugging and optimizing the game. Disk access on the Apple II was notoriously slow, and developers had to carefully manage disk I/O to avoid frustrating players. This routine reflects the behind-the-scenes work required to create a polished game. While it was removed or repurposed in the final version, similar development tools are still used today in game engines like Unity and Unreal."
  - id: "loadmusic1-title-music-loading"
    line_start: 245
    line_end: 261
    title: "LoadMusic1: Title Music Loading Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_sound"
    image_url: ""
    image_caption: ""
    content: "This subroutine loads the title music into memory, preparing it for playback. Music was stored on disk and loaded into the Apple II's main memory before being moved to auxiliary memory. The routine uses the RW18 disk command set to read sequential data from the disk. Music was an important part of Prince of Persia's cinematic experience, enhancing the game's atmosphere and storytelling. Mechner's choice to include distinct music tracks for different scenes was influenced by his background in film and his desire to create a 'movie-like' experience. This approach to integrating music into gameplay became a hallmark of cinematic games, influencing titles like Another World and the Tomb Raider series."
  - id: "driveon-disk-access-initialization"
    line_start: 292
    line_end: 326
    title: "DriveOn: Disk Access Initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_disk_drive"
    image_url: ""
    image_caption: ""
    content: "The DriveOn routine initializes the disk drive and sets up memory for reading and writing data. It switches the Apple II's language card to bank 1, enabling access to the RW18 disk routines. This low-level control of the hardware was necessary to manage the game's extensive disk I/O operations, including loading levels, graphics, and music. Mechner's direct manipulation of the disk drive showcases the technical skill required to develop games on the Apple II. Disk access routines like this were common in the era, but Mechner's implementation was particularly efficient, minimizing load times and ensuring smooth transitions between scenes. This routine exemplifies the tight integration of hardware and software in early game development."
  - id: "savegame-saving-progress-to-disk"
    line_start: 386
    line_end: 413
    title: "SaveGame: Saving Player Progress to Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "The SaveGame routine writes player progress to disk, allowing players to resume their game later. It uses the RW18 disk commands to write 256 bytes of data to a specific track and sector. Saving progress was a relatively new feature in games at the time, as most arcade-style games relied on high scores rather than persistent progress. Mechner's inclusion of a save feature reflects his focus on creating a narrative-driven experience, where players could immerse themselves in the story over multiple sessions. This approach influenced later adventure and RPG games, which adopted save systems as a standard feature. The routine also demonstrates the challenges of implementing save functionality on limited hardware, requiring careful management of disk space and memory."
  - id: "loadlevel-loading-level-data"
    line_start: 451
    line_end: 481
    title: "LoadLevel: Loading Level Data into Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The LoadLevel routine loads level data, including background graphics and character sets, into memory. It uses multiple subroutines to read data from the disk and store it in auxiliary memory. Levels in Prince of Persia were designed as 'blueprints,' which the game engine used to construct the playable environment. Mechner's use of auxiliary memory allowed him to include detailed graphics and animations despite the Apple II's limitations. This routine showcases the game's modular design, where levels and assets could be loaded dynamically to create a seamless experience. The concept of loading levels from disk became a standard practice in gaming, influencing titles like Doom and Quake, which used similar techniques to manage large game worlds."
  - id: "attractloop-self-running-preview"
    line_start: 683
    line_end: 709
    title: "AttractLoop: Self-Running Preview Mode"
    wikipedia_url: "https://en.wikipedia.org/wiki/Attract_mode"
    image_url: ""
    image_caption: ""
    content: "The AttractLoop routine creates a self-running preview of the game, cycling through scenes and gameplay elements to entice players. It plays music, displays graphics, and showcases the game's cinematic style. Attract modes were common in arcade games, where they served to draw in players and demonstrate gameplay. Mechner adapted this concept for Prince of Persia, using it to highlight the game's unique features, such as rotoscoped animations and double hi-res graphics. The attract mode reflects Mechner's understanding of marketing and player psychology, creating anticipation and excitement for the game. This feature influenced later console and PC games, which often included attract modes or demo sequences to engage players."
  - id: "pubcredit-broderbund-presents-screen"
    line_start: 726
    line_end: 757
    title: "PubCredit: 'Broderbund Presents' Splash Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Broderbund"
    image_url: ""
    image_caption: ""
    content: "The PubCredit routine displays the 'Broderbund Software Presents' splash screen, unpacking graphics into memory and playing music to set the tone for the game. Broderbund was the publisher of Prince of Persia, and this screen served as both branding and an introduction to the game's cinematic style. Mechner's use of double hi-res graphics and custom music tracks demonstrates his commitment to creating a polished and immersive experience. The splash screen was an important part of the game's presentation, establishing its identity and setting expectations for players. Similar splash screens became a standard feature in games, used to showcase publishers and developers while enhancing the game's atmosphere."
  - id: "start-game-disk-and-memory-setup"
    line_start: 1020
    line_end: 1067
    title: "How Prince of Persia Starts a New Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section initializes the game by loading essential routines and the first level from disk, setting up auxiliary memory, and preparing the game state. The code begins with a call to blackout the screen, followed by loading the routines for Stage 3 and the first level. It then toggles the drive off and sets auxiliary memory for gameplay. The programmer, Jordan Mechner, was working with the Apple II's limited memory and relied on bank-switching to fit the game into 128K. This setup ensures that the game is ready to transition into the main gameplay loop. The decision to load only essential routines at startup reflects the constraints of the Apple II hardware, where disk access was slow and memory was scarce. This approach influenced later games that optimized their initialization routines for constrained environments, such as early DOS games."
  - id: "load-permanent-code-and-data"
    line_start: 1062
    line_end: 1138
    title: "Permanent Code: Loading Once to Save Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_Disk_II"
    image_url: ""
    image_caption: ""
    content: "This section loads permanent code and data into memory, ensuring it only happens once during the game's runtime. The routine uses the Apple II's disk drive to read specific tracks and sectors, transferring data into memory. Mechner carefully orchestrates the loading process to minimize disk access during gameplay, a critical optimization given the slow speed of the Apple Disk II. The hex data blocks represent precompiled sequences and graphics groups, which are essential for the game's cinematic presentation. This technique of preloading static assets influenced later developers working on systems with slow storage media, such as floppy disks and early CD-ROMs. By front-loading essential data, Mechner ensured smooth transitions between gameplay and cutscenes, setting a precedent for cinematic games like Another World and Flashback."
  - id: "stage-1-loading-static-screens"
    line_start: 1140
    line_end: 1208
    title: "Why Stage 1 Has No Animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "Stage 1 data is loaded in two parts: side A and side B. The static double hi-res screens are loaded first, followed by music and epilog data. This section highlights Mechner's decision to prioritize static screens for Stage 1, likely to simplify memory management and disk access during the early parts of the game. The routine includes conditional logic for handling the Apple IIGS's super hi-res capabilities, showcasing Mechner's attention to hardware variations. This approach allowed the game to run efficiently on both the Apple IIe and the more advanced IIGS, demonstrating adaptability in an era where hardware fragmentation was common. The static screens set the tone for the game's cinematic style, influencing later platformers that used static backgrounds to frame dynamic character animations."
  - id: "reload-auxiliary-memory"
    line_start: 1210
    line_end: 1238
    title: "Recovering Data Overwritten by Titles"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This routine reloads auxiliary memory that was wiped out by the double hi-res title screens. It uses a test-and-retry mechanism to ensure successful disk reads, prompting the user for intervention if errors occur. Mechner's use of auxiliary memory reflects the Apple II's reliance on bank-switching to extend its capabilities beyond the base 64K. The routine's error handling is a testament to the challenges of working with unreliable floppy disk drives, where read errors were common. This technique of recovering overwritten data influenced later developers working on systems with limited memory and storage reliability, such as the Commodore 64 and early IBM PCs. The careful management of auxiliary memory ensured that the game could maintain its cinematic quality without sacrificing performance."
  - id: "stage-2-loading-character-animation"
    line_start: 1240
    line_end: 1301
    title: "How Stage 2 Brings Characters to Life"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "Stage 2 focuses on loading character animations, with background data unpacked separately. The routine includes logic for loading specific tracks and sequences, as well as setting up character and background sets. Mechner's use of rotoscoping to create lifelike animations is evident in this section, where the game's cinematic platformer style begins to shine. The decision to separate character animations from background data reflects the constraints of the Apple II's memory architecture, where efficient use of resources was paramount. This approach influenced later games that prioritized character animation, such as Another World and Flashback, both of which drew inspiration from Prince of Persia's lifelike movement and cinematic storytelling."
  - id: "play-song-interruptible-vs-non-interruptible"
    line_start: 1369
    line_end: 1411
    title: "The Soundtrack: Interruptible vs. Non-Interruptible"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_sound"
    image_url: ""
    image_caption: ""
    content: "These routines handle music playback, offering both interruptible and non-interruptible options. The non-interruptible routine ignores sound toggles, ensuring uninterrupted playback, while the interruptible routine checks for user input and sound settings. Mechner's attention to sound design reflects the cinematic ambitions of Prince of Persia, where music plays a crucial role in setting the mood. The interruptible playback allows for dynamic transitions between gameplay and cutscenes, a feature that became standard in later games with adaptive soundtracks. The use of auxiliary memory for sound routines showcases the Apple II's limitations and Mechner's ingenuity in overcoming them. This approach influenced sound handling in early DOS games and consoles like the NES, where memory constraints required similar trade-offs."
  - id: "disk-error-handling"
    line_start: 1429
    line_end: 1441
    title: "What Happens When the Disk Fails?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_Disk_II"
    image_url: ""
    image_caption: ""
    content: "The error routine handles disk read failures by prompting the user to insert the correct disk side and waiting for a keypress. This section highlights the challenges of working with floppy disk drives, where read errors were a common occurrence. Mechner's decision to include user intervention reflects the realities of the Apple II's hardware, where automated error recovery was not always feasible. The routine's simplicity ensures that the game can recover gracefully from disk errors, maintaining its cinematic flow. This approach influenced error handling in later games, where user prompts became a standard way to address hardware issues. The routine also underscores the importance of reliability in game design, a lesson that resonated with developers working on early CD-ROM and cartridge-based systems."

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