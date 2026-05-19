---
title: "TOPCTRL.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/TOPCTRL.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/TOPCTRL.S"
year: 1989
author: "Jordan Mechner"
slug: "topctrl"
order: 11
description: "The foundational control routines for Prince of Persia's cinematic gameplay on the Apple II."

summary:
  - point: "Bank-switched memory techniques for Apple II"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Rotoscoping animation system pioneered here"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Collision detection optimized for 6502 assembly"
    link: "https://en.wikipedia.org/wiki/Collision_detection"
    link_label: "Collision detection"
  - point: "Disk-swapping logic for multi-level gameplay"
    link: "https://en.wikipedia.org/wiki/Floppy_disk"
    link_label: "Floppy disk"
  - point: "Dynamic frame rendering for cinematic platforming"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "start-game-sequence"
    line_start: 99
    line_end: 108
    title: "Starting a new game: cinematic beginnings"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This subroutine initializes the game by setting the memory bank for auxiliary zero-page access (ALTZPon) and calling the `StartGame` routine. The programmer, Jordan Mechner, designed this entry point to handle the transition from the title screen to gameplay seamlessly. At the time, games often had abrupt transitions, but Mechner's cinematic vision required a smooth and immersive start. The auxiliary memory setup reflects the Apple II's constrained hardware environment, where bank-switching was necessary to fit the game's complex animations and logic into the limited 128K memory. This approach laid the groundwork for cinematic platformers, influencing later titles like Another World and Flashback."
  - id: "resume-game-sequence"
    line_start: 109
    line_end: 119
    title: "Resuming saved games: persistence in 1989"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "The `STARTRESUME` routine enables players to resume saved games, a feature that was still relatively novel in 1989. It sets up the auxiliary zero-page memory and calls the `StartGame` routine with a specific flag indicating a resumed game. Mechner's inclusion of this functionality reflects his understanding of player needs and the increasing complexity of games, where longer play sessions necessitated saving progress. This feature influenced the design of save systems in later games, becoming a standard in the industry. The use of auxiliary memory highlights the technical ingenuity required to implement such features on the Apple II's limited hardware."
  - id: "initialize-system"
    line_start: 120
    line_end: 148
    title: "Booting the game: system initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The `INITSYSTEM` routine is called upon bootup to prepare the Apple II environment for gameplay. It centers the joystick, sets auxiliary memory for background tables, initializes game variables, and clears memory. This sequence demonstrates Mechner's meticulous attention to hardware constraints, ensuring the game could run smoothly on the Apple II's limited resources. The zeroing of memory reflects the need to avoid residual data corruption, a common issue on early computers. This routine showcases the careful planning required to optimize performance and stability, influencing best practices in game initialization routines for years to come."
  - id: "start-game-routine"
    line_start: 149
    line_end: 169
    title: "Starting gameplay: dynamic level setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The `StartGame` routine sets up the initial conditions for gameplay, including the player's strength and the level's background music. It uses conditional logic to cue the 'Danger' theme for the first level, adding a cinematic touch to the game's opening moments. Mechner's use of music cues and dynamic initialization reflects his focus on creating an immersive experience. This approach influenced the use of adaptive audio and dynamic level initialization in later games, such as the Legend of Zelda series. The routine's efficient use of memory and conditional branching showcases the ingenuity required to create complex gameplay on the Apple II."
  - id: "resume-game-routine"
    line_start: 170
    line_end: 225
    title: "Resuming gameplay: restoring player state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_state"
    image_url: ""
    image_caption: ""
    content: "The `ResumeGame` routine restores the player's saved state, including level, strength, and timer values. It also handles disk-swapping logic, asking players to flip the disk if necessary. This feature reflects Mechner's commitment to creating a seamless and immersive experience, even within the technical limitations of the Apple II. The routine's ability to restore gameplay state influenced the design of save systems in later games, such as Final Fantasy and other RPGs. The disk-swapping logic highlights the challenges of working with floppy disks, a constraint that shaped the design of many early games."
  - id: "initialize-game-variables"
    line_start: 226
    line_end: 255
    title: "Setting the stage: game variable initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Variable_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `initgame` routine initializes key game variables, such as flags for menu states, redraw requests, and timers. It also sets default values for strength and time remaining. This routine demonstrates Mechner's attention to detail, ensuring the game starts with consistent and predictable conditions. The use of zeroing and default values reflects best practices in programming, minimizing the risk of bugs caused by uninitialized variables. This approach influenced the design of initialization routines in later games, contributing to the development of robust and reliable game engines."
  - id: "restart-level"
    line_start: 256
    line_end: 365
    title: "Restarting levels: dynamic reinitialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The `RESTART` routine reinitializes the current level, resetting variables and loading level-specific data from disk. It includes logic for handling editor disks and ensures the game state is consistent. This routine highlights Mechner's focus on creating a seamless experience, allowing players to restart levels without encountering residual data issues. The use of disk-swapping logic and dynamic reinitialization reflects the technical challenges of working with floppy disks and limited memory. This approach influenced the design of level restart mechanics in later games, such as Super Mario Bros. and other platformers."
  - id: "main-game-loop"
    line_start: 366
    line_end: 412
    title: "The heartbeat of gameplay: main loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The `MainLoop` routine is the central loop of the game, handling input, updating the game state, and rendering frames. It includes logic for detecting level changes and enforcing copy protection. This loop reflects the core structure of the game engine, showcasing Mechner's ability to balance performance and complexity. The inclusion of copy protection highlights the challenges of piracy in the 1980s, while the dynamic frame rendering demonstrates the game's cinematic ambitions. This structure influenced the design of game loops in later engines, such as Unity and Unreal Engine."
  - id: "load-next-level"
    line_start: 413
    line_end: 418
    title: "Transitioning levels: seamless progression"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The `LoadNextLevel` routine handles transitions between levels, ensuring the game state is updated and the next level is loaded correctly. It includes logic for handling disk-swapping and copy protection, reflecting the technical constraints of the Apple II. Mechner's focus on seamless transitions influenced the design of level progression systems in later games, such as Sonic the Hedgehog and other platformers. The routine's efficient use of memory and conditional branching showcases the ingenuity required to create complex gameplay on limited hardware."
  - id: "next-frame-calculation"
    line_start: 503
    line_end: 605
    title: "Calculating the next frame: dynamic animation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The `NextFrame` routine determines the appearance of the next frame by updating mobile objects, transitional objects, and character states. It includes logic for handling collisions, sword strikes, and offscreen transitions. This routine reflects Mechner's focus on creating fluid and dynamic animations, a hallmark of Prince of Persia's cinematic gameplay. The use of rotoscoping and frame-by-frame updates influenced the design of animation systems in later games, such as Mortal Kombat and other visually rich titles. The routine's efficient use of memory and processing power showcases the technical ingenuity required to achieve cinematic quality on the Apple II."
  - id: "prep-cut-screen-transition"
    line_start: 1039
    line_end: 1070
    title: "Screen transitions and cinematic logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `PrepCut` routine handles transitions between screens, a core feature of the cinematic platformer genre. It checks whether the current screen (`cutscrn`) differs from the visible screen (`VisScrn`), and if so, updates the visible screen and prepares the next scene. Notably, it includes logic to detect the princess's room (level 14, screen 5), triggering the game's victory sequence. This reflects Jordan Mechner's focus on storytelling and immersion, leveraging the Apple II's limited hardware to create a seamless experience. The cinematic transitions pioneered here influenced later games like Another World and Flashback, which adopted similar techniques to blend gameplay and narrative."
  - id: "you-lose-sequence"
    line_start: 1071
    line_end: 1082
    title: "Game over: cinematic defeat"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `YouLose` routine triggers the 'game over' sequence, cutting to the princess's room and playing a specific cutscene (#6) before returning to the title screen. This cinematic approach to failure emphasizes the game's narrative, making the loss feel consequential rather than abrupt. Mechner's design philosophy aimed to evoke emotion and maintain immersion, even in defeat. This approach to storytelling through gameplay loss became a hallmark of cinematic games, influencing titles like Tomb Raider and Uncharted."
  - id: "player-death-handling"
    line_start: 1095
    line_end: 1199
    title: "Handling player death and resurrection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `ctrlplayer` routine manages player control and death logic. It checks if the player is alive (`CharLife`), and if not, initiates a sequence to incrementally display the death message or restart the level. The code includes a temporary development patch (`raise`) for resurrecting the player, reflecting the iterative nature of game development. This routine highlights Mechner's meticulous attention to gameplay flow, ensuring that death sequences are dramatic and impactful. The concept of dramatic player death influenced later games like Dark Souls, where death is integral to the experience."
  - id: "death-song-selection"
    line_start: 1200
    line_end: 1219
    title: "Dynamic death music selection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_music"
    image_url: ""
    image_caption: ""
    content: "The `deathsong` routine dynamically selects music based on the circumstances of the player's death. If the opponent was the shadowman (`ShadID`), a specific track (`s_Shadow`) is played; otherwise, the music varies between 'heroic death' (`s_Heroic`) and 'accidental death' (`s_Accid`). This nuanced use of sound cues enhances the emotional impact of gameplay events, a technique that became standard in cinematic games. Mechner's integration of music as a storytelling device influenced the use of dynamic soundtracks in later titles like The Legend of Zelda: Ocarina of Time."
  - id: "copy-protection-flip-disk"
    line_start: 1546
    line_end: 1593
    title: "Embedded copy protection logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "The `flipdisk` routine incorporates copy protection checks into gameplay. It verifies disk integrity (`redherring` and `redherring2`) and prompts the player to flip the disk if necessary. This approach reflects the challenges of protecting software in the 1980s, where piracy was rampant. By embedding copy protection into the game's logic, Mechner ensured that unauthorized copies would fail gracefully, maintaining immersion. This technique influenced later games and systems, including the use of hardware dongles and encrypted cartridges in consoles like the NES and SNES."
  - id: "yellow-copy-protection-check"
    line_start: 1707
    line_end: 1720
    title: "Yellow flag: early copy protection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "The `yellowcheck` routine is an additional copy protection mechanism, triggered before the first princess cutscene. It checks the next level value and sets a flag (`yellowflag`) if conditions are met. This subtle integration of copy protection into gameplay reflects Mechner's ingenuity in safeguarding his work while maintaining player immersion. Such techniques were common in the era, as developers sought creative ways to combat piracy without disrupting the user experience. The legacy of these methods can be seen in modern DRM systems like Steam and Denuvo."
  - id: "temp-development-patch"
    line_start: 1721
    line_end: 1740
    title: "Iterative development: debugging patches"
    wikipedia_url: "https://en.wikipedia.org/wiki/Software_development"
    image_url: ""
    image_caption: ""
    content: "The `develpatch` routine is a temporary development patch used for debugging screen redraws and inverting Y-coordinates. This reflects the iterative nature of game development, where temporary fixes and debugging tools are often embedded directly into the code. Mechner's solo development process required a balance between rapid iteration and careful optimization, given the Apple II's hardware constraints. These practices laid the groundwork for modern debugging techniques and tools, such as breakpoints and profiling, which are now integral to software development."

---

* topctrl
org = $2000
EditorDisk = 0
FinalDisk = 1
DemoDisk = 0
ThreeFive = 1 ;3.5" disk?
 tr on
 lst off
*-------------------------------
*
*  PRINCE OF PERSIA
*  Copyright 1989 Jordan Mechner
*
*-------------------------------
 org org

 jmp START
 jmp RESTART
 jmp STARTRESUME
 jmp INITSYSTEM
 jmp showpage

 jmp showpage
 jmp GOATTRACT

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst
 put seqdata
 lst
 put movedata
 lst
 put soundnames
 lst off

*-------------------------------
* 18-sector ID bytes

POPside1 = $a9
POPside2 = $ad

FirstSideB = 3 ;1st level on Side B
LastSideB = 14 ;& last

*-------------------------------
* Soft switches

ALTZPon = $c009
ALTZPoff = $c008
RAMWRTaux = $c005
RAMWRTmain = $c004
RAMRDaux = $c003
RAMRDmain = $c002
TEXTon = $c051
PAGE2off = $c054

kresurrect = "R"

*-------------------------------
* Misc. changeable parameters

initmaxstr = 3

BTLtimer = 20 ;back to life
wtlflash = 15 ;weightless

mousetimer = 150

*-------------------------------
* message #s

LevelMsg = 1
ContMsg = 2
TimeMsg = 3

leveltimer = 20 ;level message timer
contflash = 95
contoff = 15
deadenough = 4

*-------------------------------
* Mirror location

mirlevel = 4
mirscrn = 4
mirx = 4
miry = 0

*-------------------------------
*
*  Start a new game
*
*  In: A = level # (0 for demo, 1 for game)
*
*-------------------------------
START
 sta ALTZPon
 jsr StartGame
 jmp RESTART

*-------------------------------
*
*  Resume saved game
*
*-------------------------------
STARTRESUME
 sta ALTZPon
 lda #4 ;arbitrary value >1
 jsr StartGame
 jmp ResumeGame

*-------------------------------
*
*  Initialize system (Called from MASTER upon bootup)
*
*-------------------------------
INITSYSTEM
 sta ALTZPon

 jsr setcenter ;Center joystick

 jsr setfastaux ;bgtable in auxmem

 lda #FinalDisk!1
 sta develment

 jsr initgame

 ldx #0
 txa
:loop sta $0,x
 inx
 bne :loop

 sta ALTZPoff
 rts

*-------------------------------
*
*  Start a game
*
*  In: A = level # (0 for demo, 1 for new game, >1 for
*      resumed game)
*
*-------------------------------
StartGame
 sta level
 sta NextLevel

 cmp #1
 bne :notfirst
 lda #s_Danger
 ldx #25
 jsr cuesong ;Cue "Danger" theme if level 1
:notfirst

 lda #initmaxstr
 sta origstrength ;set initial strength

 jmp initgame

*-------------------------------
*
*  Resume saved game
*
*-------------------------------
ResumeGame
 do DemoDisk
 rts
 else

 jsr flipdisk ;Ask player to flip disk
 lda #POPside2
 sta BBundID ;& expect side 2 from now on

:cont jsr loadgame ;Load saved-game info from disk

 lda SavLevel ;Has a game been saved?
 bpl :ok ;Yes

* No game saved--start new game instead

 jsr flipdisk
 lda #POPside1
 sta BBundID

 lda #1
 sta level
 sta NextLevel
 jmp RESTART

* Restore strength & timer

:ok lda SavStrength
 sta origstrength

 lda SavTimer+1
 sta FrameCount+1
 lda SavTimer
 sta FrameCount

 lda SavNextMsg
 sta NextTimeMsg

* & resume from beginning of level

 lda #1
 sta timerequest ;show time remaining
 lda #$80
 sta yellowflag ;pass copy prot. test
 lda SavLevel
 sta level
 sta NextLevel
 jmp RESTART

 fin

*-------------------------------
*
* Initialize vars before starting game
*
*-------------------------------
initgame
 lda #0
 sta blackflag
 sta redrawflg
 sta inmenu
 sta inbuilder
 sta recheck0
 sta SINGSTEP
 sta ManCtrl
 sta vibes
 sta invert
 sta milestone
 sta timerequest
 sta FrameCount
 sta FrameCount+1
 sta NextTimeMsg

 lda #$ff
 sta MinLeft
 sta SecLeft

 lda #1 ;no delay
 sta SPEED
 rts

*-------------------------------
*
*  Restart current level
*
*-------------------------------
RESTART
 sta ALTZPon
 sta $c010 ;clr kbd strobe

 do EditorDisk
 jsr reloadblue
 else

 lda #" "
 jsr lrcls
 jsr vblank
 lda PAGE2off
 lda TEXTon

 ldx level
 jsr LoadLevelX ;load blueprint & image sets from disk
 fin

 jsr setinitials ;Set initial states as specified in blueprint

 jsr initialguards ;& guards

* Zero a lot of vars & tables

 lda #0
 sta SINGSTEP
 sta vibes
 sta AMtimer
 sta VisScrn
 sta exitopen
 sta lightning
 sta mergetimer
 sta numtrans
 sta nummob
 sta EnemyAlert
 sta createshad
 sta stunned
 sta heroic
 sta ChgKidStr
 sta OppStrength ;no opponent
 sta msgtimer
 sta PreRecPtr
 sta PlayCount

 ldx SongCue
 cpx #s_Danger
 beq :1st
 sta SongCue
:1st

 jsr zerosound

 jsr zeropeels

 jsr initCDbuf ;initialize collision detection buffers

 jsr initinput

 lda #1
 sta gotsword

 lda #-1
 sta cutorder

 lda #2
 sta ShadID ;default opponent is guard
 lda #86
 sta ShadFace

 jsr startkid

 do EditorDisk
 else

 lda level
 cmp #1
 bne :gotswd
 lda #0
 sta gotsword ;Start Level 1 w/o sword
:gotswd
 fin

 lda level
 beq :nomsg
 cmp #14
 beq :nomsg ;don't announce level 0 or 14
 cmp #13
 bne :1
 lda skipmessage
 beq :1
 lda #0
 sta skipmessage
 beq :nomsg ;skip level 13 message 1st time
:1 lda #LevelMsg
 sta message
 lda #leveltimer
 sta msgtimer
:nomsg

 jsr entrance ;entrance slams shut

 jsr FirstFrame ;Generate & display first frame

 jmp MainLoop

*-------------------------------
*
*  Main loop
*
*-------------------------------
MainLoop
 jsr rnd

 lda #0
 sta ChgKidStr
 sta ChgOppStr

 jsr strobe ;Strobe kbd & jstk

 jsr demokeys
 bpl :4
 lda #1
 jmp START ;During demo, press any key to play
:4
 jsr misctimers

 jsr NextFrame ;Determine what next frame should look like

 jsr flashon

 jsr FrameAdv ;Draw next frame & show it

 jsr playback ;Play sounds
 jsr zerosound ;& zero sound table

 jsr flashoff

 jsr songcues ;Play music

 lda NextLevel
 cmp level
 beq MainLoop ;Continue until we change levels

 jsr yellowcheck ;copy protect!

 jmp LoadNextLevel

*-------------------------------
*
* Load next level
*
* In: NextLevel = # of next level
*     level = # of current level
*
* Out: level = NextLevel
*
*-------------------------------
LoadNextLevel
 lda NextLevel
 cmp #14
 beq LoadNext1
 lda #1
 sta timerequest ;show time remaining

LoadNext1
 lda MaxKidStr
 sta origstrength ;save new strength level
 lda #0
 sta milestone

 do EditorDisk
 lda level
 sta NextLevel
 jmp RESTART
 fin

* NextLevel must be in range 1 - LastSideB

 lda NextLevel
 cmp #LastSideB+1
 bcs :illegal
 cmp #1
 bcs :2
:illegal lda level ;Illegal value--restart current level
 sta NextLevel
 jmp RESTART

* Load from correct side of disk

:2 ldx #POPside2
 cmp #FirstSideB
 bcs :1
 ldx #POPside1
:1 cpx BBundID ;do we need to flip disk?
 beq :ok ;no
 stx BBundID ;yes
 jsr flipdisk

:ok lda NextLevel
 sta level ;set new level
 cmp #2
 beq :cut1
 cmp #4
 beq :cut2
 cmp #6
 beq :cut3
 cmp #8
 beq :cut8
 cmp #9
 beq :cut4
 cmp #12
 beq :cut5 ;Princess cuts before certain levels

:cont jmp RESTART ;Start new level

* Princess cuts before certain levels

:cut1 lda #1
]pcut pha
:repeat jsr cutprincess ;cut to princess's room...
 jsr setrecheck0
 jsr recheckyel ;if wrong-disk error, recheck track 0
 bne :repeat ;& repeat
 pla
 jsr playcut ;& play cut #1
 jmp :cont

:cut2 lda #2
 bne ]pcut
:cut3 lda #3
 bne ]pcut
:cut4 lda #4
 bne ]pcut
:cut5 lda #5
 bne ]pcut
:cut8 lda #8
 bne ]pcut

*-------------------------------
*
*  N E X T   F R A M E
*
*  Determine what next frame should look like
*
*  In: All data reflects last (currently displayed) frame.
*
*-------------------------------
NextFrame
 jsr animmobs ;Update mobile objects (MOBs)

 jsr animtrans ;Update transitional objects (TROBs)

 jsr bonesrise ;Bring skeleton to life?

 jsr checkalert ;Determine EnemyAlert value

 jsr DoKid ;Update kid

 jsr DoShad ;Update shadowman (or other opponent)

 jsr checkstrike
 jsr checkstab ;Check for sword strikes
:1
 jsr addsfx ;Add additional sound fx

 jsr chgmeters ;Change strength meters

 jsr cutcheck ;Has kid moved offscreen?
  jsr PrepCut ;If so, prepare to cut to new screen

 jsr cutguard ;If guard has fallen offscreen, vanish him

 do EditorDisk
 rts
 fin

* Level 0 (Demo): When kid exits screen 24, end demo

 lda level
 bne :no0
 lda KidScrn
 cmp #24
 bne :cont
 jmp GOATTRACT

* Level 6: When kid falls off screen 1, cut to next level

:no0 do DemoDisk
 else

 lda level
 cmp #6
 bne :no6
 lda KidScrn
 cmp #1
 bne :cont
 lda KidY
 cmp #20
 bcs :cont
 lda #-1
 sta KidY
 inc NextLevel
 jmp :cont

* Level 12: When kid exits screen 23, cut to next level

:no6 cmp #12
 bne :cont
 lda KidScrn
 cmp #23
 bne :cont
 inc NextLevel
 lda #1
 sta skipmessage ;but don't announce level #
 jmp LoadNext1 ;or show time

 fin

* Continue...

:cont lda level
 cmp #14
 bcs :stopped
 cmp #13
 bcc :ticking
 lda exitopen
 bne :stopped ;Timer stops when you kill Vizier on level 13

:ticking jsr keeptime

:stopped jsr showtime ;if timerequest <> 0

 lda level
 cmp #13
 bcs :safe ;You have one chance to finish Level 13
;after time runs out
 lda MinLeft
 ora SecLeft
 bne :safe
 jmp YouLose ;time's up--you lose
:safe
]rts rts

*-------------------------------
*
*  F R A M E   A D V A N C E
*
*  Draw new frame (on hidden hi-res page) & show it
*
*-------------------------------
FrameAdv
 lda cutplan ;set by PrepCut
 bne :cut

 jsr DoFast
 jmp PageFlip ;Update current screen...

:cut jmp DoCleanCut ;or draw new screen from scratch

*-------------------------------
*
*  F I R S T   F R A M E
*
*  Generate & display first frame
*
*-------------------------------
FirstFrame
 lda KidScrn
 sta cutscrn

 jsr PrepCut

 jmp DoCleanCut

*-------------------------------
*
*  D O   K I D
*
*  Update kid
*
*-------------------------------
DoKid
 jsr LoadKidwOp ;Load kid as character (w/opponent)

 jsr rereadblocks

 jsr unholy ;If shadowman dies, kid dies

 jsr ctrlplayer ;Detect & act on commands from player

 lda invert
 beq :3
 lda CharLife
 bmi :3
 lda #2
 sta redrawflg
 lda #0
 sta invert
 jmp inverty ;Screen flips back rightside up when you're dead
:3
 jsr wtlessflash

 lda CharScrn
 beq :skip ;Skip all this if kid is on null screen:

 jsr animchar ;Get next frame from sequence table

 jsr gravity ;Adjust Y-velocity
 jsr addfall ;Add falling velocity

 jsr setupchar
 jsr rereadblocks
 jsr getedges

 jsr firstguard ;Check for collision w/guard

 jsr checkbarr ;Check for collisions w/vertical barriers

 jsr collisions ;React to collisions detected above

 jsr checkgate ;Knocked to side by closing gate?

 jsr  checkfloor ;Is there floor underfoot?  If not, fall

 jsr  checkpress ;Is kid stepping on a pressure plate?
;If so, add pressplate (& whatever it
;triggers) to trans list.

 jsr checkspikes  ;Trigger spikes?

 jsr checkimpale ;impaled by spikes?
 jsr checkslice ;sliced by slicer?
:1
 jsr shakeloose ;shake loose floors

:skip jsr SaveKid ;Save all changes to char data
]rts rts

*-------------------------------
*
*  D O   S H A D
*
*  Update shadowman (or other opponent)
*
*-------------------------------
DoShad
 lda ShadFace
 cmp #86
 beq ]rts ;"no character" code

 jsr LoadShadwOp
 jsr rereadblocks

 jsr unholy

 jsr ShadCtrl ;Opponent control module

 lda CharScrn
 cmp VisScrn
 bne :os

 jsr animchar

 lda CharX
 cmp #ScrnLeft-14
 bcc :os
 cmp #ScrnRight+14
 bcs :os ;Skip all this if char is offscreen

 jsr gravity
 jsr addfall

 jsr setupchar
 jsr rereadblocks
 jsr getedges

 jsr enemycoll

 jsr  checkfloor
 jsr  checkpress
 jsr checkspikes
 jsr checkimpale
  jsr checkslice2

:os jmp SaveShad

*-------------------------------
*
*  Add all visible characters to object table
*
*-------------------------------
addchars
 jsr :reflection
 jsr :shadowman
 jsr :kid

 jsr checkmeters

]rts rts

*-------------------------------
* Draw kid's reflection in mirror

:reflection
 jmp reflection

*-------------------------------
* Draw shadowman or other opponent

:shadowman
 lda ShadFace
 cmp #86 ;Is there a shadowman?
 beq ]rts ;no
 lda ShadScrn
 cmp VisScrn ;Is he visible?
 bne ]rts ;no

 jsr setupshad ;Add shadowman to object table

 lda ChgOppStr
 bpl :s1
 jsr setupcomix ;Add impact star if he's been hurt
:s1 jmp setupsword ;Add sword

*-------------------------------
* Draw kid

:kid lda KidScrn
 beq ]rts
 cmp VisScrn
 bne ]rts

 jsr setupkid ;Add kid to obj table

 lda ChgKidStr
 bpl :s2
 jsr setupcomix ;Add impact star
:s2 jmp setupsword ;Add sword

*-------------------------------
*
*  S E T   U P   K I D
*
*  Add kid to object table
*  Crop edges, index char, mark fredbuf/floorbuf
*
*-------------------------------
setupkid
 jsr LoadKid
 jsr rereadblocks

 lda CharPosn
 bne :cont ;Delay loop if CharPosn = 0
 lda #25
 jmp pause

:cont jsr setupchar
 jsr unevenfloor

 jsr getedges
 jsr indexchar
 jsr quickfg
 jsr quickfloor
 jsr cropchar

 jmp addkidobj ;add kid to obj table

*-------------------------------
*
*  S E T   U P   S H A D
*
*  Add shadowman to obj table
*
*-------------------------------
setupshad
 jsr LoadShad
 jsr rereadblocks

 jsr setupchar
 jsr unevenfloor

 jsr getedges
 jsr indexchar
 jsr quickfg
 jsr quickfloor
 jsr cropchar

 lda CharID
 cmp #1 ;Shadowman?
 bne :1 ;no
 lda level
 cmp #mirlevel
 bne :2
 lda CharScrn
 cmp #mirscrn
 bne :2
 lda #mirx ;Clip shadman at L as he jumps out of mirror
 asl
 asl
 clc
 adc #1
 sta FCharCL
:2 jmp addshadobj

:1 jmp addguardobj

*-------------------------------
*
*  Cut to new screen
*
*  DoQuickCut: Show bg before adding characters
*  DoCleanCut: Show frame only when complete
*
*-------------------------------
UseQuick = 0

 do UseQuick

DoQuickCut
 jsr fastspeed ;IIGS

 lda #0
 sta PAGE
 jsr drawbg ;draw bg on p1

 jsr PageFlip

 jsr copyscrn ;copy bg to p2
 jsr DoFast ;add chars

 jsr PageFlip ;show complete frame
 jmp normspeed

 else

DoCleanCut
 jsr fastspeed ;IIGS

 lda #$20
 sta PAGE
 jsr drawbg ;draw bg on p2

 lda #0
 sta PAGE
 jsr copyscrn ;copy bg to p1

 jsr DoFast ;add chars

;jsr vblank2
 jsr PageFlip
 jmp normspeed

 fin

*-------------------------------
*
*  D R A W   B G
*
*  Clear screen & draw background (on hidden hi-res page)
*  Show black lo-res screen to cover transition
*
*-------------------------------
drawbg
 lda #0
 sta cutplan

 lda #2
 sta CUTTIMER ;min # of frames between cuts

 lda #" "
 jsr lrclse
 jsr vblank
 lda PAGE2off
 lda TEXTon

 jsr DoSure ;draw b.g. w/o chars

 jmp markmeters ;mark strength meters

*-------------------------------
*
*  D O   S U R E
*
*  Clear screen and redraw entire b.g. from scratch
*
*-------------------------------
DoSure
 lda VisScrn
 sta SCRNUM

 jsr zerolsts ;zero image lists

 jsr sure ;Assemble image lists

 jsr zeropeels ;Zero peel buffers
 jsr zerored ;and redraw buffers
;(for next DoFast call)

 jmp drawall ;Dump contents of image lists to screen

*-------------------------------
*
*  D O  F A S T
*
*  Do a fast screen update
*  (Redraw objects and as little of b.g. as possible)
*
*-------------------------------
DoFast
 jsr zerolsts ;zero image lists

 lda VisScrn
 sta SCRNUM

 jsr develpatch

 jsr addmobs ;Add MOBS to object list

 jsr addchars ;Add characters to object list
;(incl. strength meters)

 jsr fast ;Assemble image lists (including objects
;from obj list and necessary portions of bg)

 jsr dispmsg ;Superimpose message (if any)
:1
 jmp drawall ;Dump contents of image lists to screen
]rts rts

*-------------------------------
*
*  Lightning flashes
*
*-------------------------------
flashon
 lda lightning
 beq :1
 lda lightcolor
 bne :2
:1 lda ChgKidStr
 bpl ]rts
 lda #$11 ;Flash red if kid's been hurt
:2 jmp doflashon

flashoff
 lda lightning
 beq :1
 dec lightning
 bpl :2

:1 lda ChgKidStr
 bpl ]rts
:2 jmp doflashoff

*-------------------------------
*
*  Initialize collision detection buffers
*
*-------------------------------
initCDbuf
 ldx #9
 lda #$ff
:zloop sta SNlastframe,x
 sta SNthisframe,x
 sta SNbelow,x
 sta SNabove,x
 dex
 bpl :zloop

 sta BlockYlast
]rts rts

*-------------------------------
*
*  Prepare to cut?
*
*  In: VisScrn = current screen
*      cutscrn = screen we want to be on
*
*  If cutscrn <> VisScrn, make necessary preparations
*  & return cutplan = 1
*
*-------------------------------
PrepCut
 lda cutscrn
 beq ]rts ;never cut to screen 0
 cmp VisScrn
 beq ]rts ;If cutscrn = VisScrn, we don't need to cut

 lda cutscrn
 sta VisScrn
 cmp #5
 bne :1
 lda level
 cmp #14
 bne :1
 jmp YouWin ;Level 14, screen 5 is princess's room--you win!

:1 lda #1
 sta cutplan

 jsr getscrns ;Get neighboring screen #s

 jsr LoadKid
 jsr addslicers
 jsr addtorches
 jsr crumble ;Activate slicers, torches, etc.

 jmp addguard ;Add guard (if any)

*-------------------------------
*
*  Time's up--you lose
*
*-------------------------------
YouLose
 jsr cutprincess ;cut to princess's room...
 lda #6
 jsr playcut ;& play cut #6

 jmp GOATTRACT ;go to title sequence

*-------------------------------
*
*  You win
*
*-------------------------------
YouWin jsr cutprincess
 lda #7
 jsr playcut ;Play cut #7
 jmp epilog ;Play epilog (& hang)

*-------------------------------
*
*  Control player
*
*  In/out: Char vars
*
*-------------------------------
ctrlplayer
 jsr kill0 ;If char is on screen 0, kill him off

 jsr PlayerCtrl ;Control player

 lda CharLife
 bmi ]rts ;If char is still alive, return

* When player dies, CharLife is set to 0.
* Inc CharLife until = #deadenough; then put up message

:dead lda CharPosn
 jsr cold?
 bne ]rts ;wait till char has stopped moving

 lda CharLife
 bne :inc
 jsr deathsong ;cue death music

:inc lda CharLife
 cmp #deadenough
 bcs :deadenough
 inc CharLife
]rts rts

:deadenough
 lda level
 beq :gameover ;Your death ends demo

 lda SongCue
 bne ]rts ;wait for song to finish before putting up msg

 lda MinLeft
 ora SecLeft
 bne :timeleft
 jmp YouLose ;if you die with time = 0, you lose

* Otherwise: "Press Button to Continue"

:timeleft
 lda message
 cmp #ContMsg
 bne :1
 lda msgtimer
 bne :ok

:1 lda #ContMsg
 sta message
 lda #255
 sta msgtimer ;Put up continue message

:ok cmp #1
 beq :gameover ;End game when msgtimer = 1

 do FinalDisk
 else

 lda develment
 beq :nodevel
 lda keypress
 cmp #kresurrect
 beq :raise ;TEMP!
:nodevel
 fin

 lda BTN0
 ora BTN1
 bpl ]rts
 jmp RESTART ;Button press restarts level

:gameover
 do EditorDisk
 jmp RESTART
 else
 jmp GOATTRACT
 fin

* Raise kid from the dead (TEMP!)

 do FinalDisk
 else
:raise
 lda #0
 sta msgtimer
 sta SongCue

 lda #BTLtimer
 sta backtolife

 jsr LoadKid

 lda MaxKidStr
 sta ChgKidStr

 lda #stand
 jsr jumpseq
 jmp startkid1

 fin

*-------------------------------
*
* Play death song
*
*-------------------------------
deathsong
 lda ShadID
 cmp #1
 beq :shad ;if opponent was shadowman
 lda heroic ;was kid engaged in battle at time of death?
 bne :1 ;yes--"heroic death" music
 lda #s_Accid ;no--"accidental death" music
 bne :2
:shad lda #s_Shadow
 bne :2
:1 lda #s_Heroic
:2 ldx #255
 jmp cuesong
]rts rts

*-------------------------------
*
* If char is on screen 0, kill him off
*
*-------------------------------
kill0
 lda CharLife
 bpl ]rts
 lda CharScrn
 bne ]rts
 lda #Splat
 jsr addsound
 lda #100
 jsr decstr
 lda #0
 sta msgtimer
 sta CharLife
 lda #185
 sta CharPosn
]rts rts

*-------------------------------
*
* Go to attract mode
*
*-------------------------------
GOATTRACT
 do DemoDisk
 else

 lda BBundID
 cmp #POPside1 ;does he need to flip disk?
 beq :ok ;no

 do ThreeFive
 else
 lda BGset1
 bpl :flip
 ldx #4
 jsr LoadLevelX ;get "FLIP DISK" msg into memory
 fin

:flip jsr flipdisk ;ask him to flip disk

 fin

 lda #POPside1
 sta BBundID

:ok jmp attractmode

*-------------------------------
*
*  Shake loose floors when character jumps
*
*-------------------------------
shakeloose
 lda jarabove
 bmi :jarbelow
 bne :jarabove
]rts rts

:jarbelow
 lda #0
 sta jarabove

 lda CharBlockY
 jmp shakem ;shake every loose floorboard on level

:jarabove
 lda #0
 sta jarabove

 lda CharBlockY
 sec
 sbc #1
 jmp shakem

*-------------------------------
*
* If strength meters have changed, mark affected
* blocks for redraw
*
*-------------------------------
checkmeters
 lda ChgKidStr
 beq :1
 jsr MarkKidMeter

:1 lda ChgOppStr
 beq ]rts
 jmp MarkOppMeter

*-------------------------------
*
* Change strength meters as specified
*
*-------------------------------
chgmeters
 lda level
 cmp #12
 bne :cont
 lda OpID
 ora CharID
 cmp #1 ;kid vs. shadowman?
 bne :cont
 ;yes
 lda ChgKidStr
 bpl :1
 sta ChgOppStr
 bne :cont

:1 lda ChgOppStr
 bpl :cont
 sta ChgKidStr

* Kid's meter

:cont lda KidStrength
 clc
 adc ChgKidStr

 cmp MaxKidStr
 beq :ok1
 bcs :opp

:ok1 sta KidStrength

* Opponent's meter

:opp lda OppStrength
 clc
 adc ChgOppStr

 cmp MaxOppStr
 beq :ok2
 bcs ]rts

:ok2 sta OppStrength
]rts rts

*-------------------------------
*
* Slam player's entrance shut (add it to trans list)
*
*-------------------------------
entrance
 lda KidScrn
 jsr calcblue

 ldy #29

:loop lda (BlueType),y
 and #idmask
 cmp #exit
 bne :cont ;find player's entrance

 lda KidScrn
 jmp closeexit ;& return

:cont dey
 bpl :loop

]rts rts

*-------------------------------
*
* Play song cues
*
* In: SongCue (0 = none, non0 = song #)
*     SongCount
*
*-------------------------------
songcues
 do EditorDisk
 rts
 fin

 ldx SongCue
 beq ]rts
 lda level
 beq ]rts ;no music in demo

 lda SongCount
 bne :cont
 lda #0
 sta SongCue ;when SongCount reaches 0, forget it
]rts rts
:cont dec SongCount

 lda KidPosn
 bne :1
 lda NextLevel
 cmp level
 beq ]rts ;Play only one song once kid has reached stairs

:1 lda KidPosn
 jsr static?
 bne ]rts

 lda ShadFace
 cmp #86
 beq :ok
 lda ShadScrn
 cmp VisScrn
 bne :ok
 lda ShadPosn
 jsr static?
 bne ]rts
:ok
 lda trobcount ;(set by animtrans if there are any
 bne ]rts ;slicers or other fast-moving objects
;that it wouldn't look good to freeze)
 lda nummob
 bne ]rts
 lda lightning
 bne ]rts ;wait for no MOBs and no lightning
 lda mergetimer
 bmi :ok2
 bne ]rts
 lda ChgKidStr
 ora ChgOppStr
 bne ]rts ;& no impact stars
:ok2

* Prepare for minimal animation

 lda PAGE
 eor #$20
 sta PAGE

 jsr listtorches

* Play song

 lda SongCue
 jsr minit

 sta $c010 ;clr kbd

:loop jsr burn
 jsr musickeys

 jsr mplay
 cmp #0
 bne :loop

:done lda #0
 sta SongCue

:rtn lda PAGE
 eor #$20
 sta PAGE

 jmp clearjoy

*-------------------------------
*
* Add additional sound fx
*
*-------------------------------
addsfx
 lda #167 ;blocked strike
 cmp KidPosn ;if char is striking...
 bne :1
 lda #SwordClash1
 bne :clash
:1 cmp ShadPosn
 bne :2
 lda #SwordClash2
:clash jmp addsound
:2
]rts rts

*-------------------------------
*
* Display message ("Press button to continue" or "Level #"
* or "# minutes left")
*
*-------------------------------
dispmsg
 lda msgtimer
 beq ]rts
 dec msgtimer

 lda KidLife
 bmi :alive

* Kid is dead -- message is "Press button to continue"

 lda msgtimer
 cmp #contoff
 bcc ]rts

 cmp #contflash
 bcs :steady

 and #7
 cmp #3
 bcs ]rts
 cmp #2
 bne :steady

 lda soundon
 bne :2
 jsr gtone ;if sound off
:2 lda #FlashMsg
 jsr addsound

:steady jmp continuemsg ;Kid is dead--superimpose continue msg

* Kid is alive -- message is "Level #" or "# Minutes"

:alive lda msgtimer
 cmp #leveltimer-2
 bcs ]rts

 lda message
 cmp #LevelMsg
 bne :1
 jmp printlevel

:1 cmp #TimeMsg
 bne ]rts
 jmp timeleftmsg

*-------------------------------
*
* Display "Turn disk over" and wait for button press
*
*-------------------------------
flipdisk
 do ThreeFive
 lda #1
 sta purpleflag ;pass copy-protect!
 rts
 fin

 do DemoDisk
 jmp GOATTRACT
 else

* 1st copy protection check

 lda redherring
 eor redherring2
 cmp #POPside1 ;passed 1st check?
 beq :1
 lda #POPside1
 sta BBundID
  jmp attractmode

* Passed copy protection--continue

:1 lda #" "
 jsr lrcls

 jsr zerolsts
 jsr zeropeels
 lda #1
 sta genCLS

 jsr flipdiskmsg

 jsr drawall

 jsr vblank
 jsr PageFlip

 lda $c010 ;clr kbd strobe
:loop
 lda $c061
 ora $c062
 ora $c000
 bpl :loop

 fin

* Flip to clr text scrn

showtext jsr vblank
 lda PAGE2off
 lda TEXTon
]rts rts

*-------------------------------
*
* Is character moving?
*
* In: A = CharPosn
* Out: 0 if static, 1 if moving
*
*-------------------------------
static?
 cmp #0
 beq ]ok
 cmp #15 ;stand
 beq ]ok
 cmp #229 ;brandish sword
 beq ]ok
 cmp #109 ;crouching
 beq ]ok
 cmp #171 ;en garde
 beq ]ok
 cmp #166 ;alert stand (for gd.)
 beq ]ok
cold?
 cmp #185 ;dead
 beq ]ok
 cmp #177 ;impaled
 beq ]ok
 cmp #178 ;halves
 beq ]ok
 lda #1
 rts
]ok lda #0
]rts rts

*-------------------------------
*
* Clear all jstk flags
*
*-------------------------------
clearjoy
 jsr LoadSelect
 lda #0
 sta clrF
 sta clrB
 sta clrU
 sta clrD
 jmp SaveSelect

*-------------------------------
*
*  Misc. timers (Call every cycle)
*
*-------------------------------
misctimers
 lda mergetimer
 beq :3
 bmi :3
 dec mergetimer
 bne :3
 dec mergetimer ;goes from 1 to -1
:3

* Level 8: When you've spent a certain amount of time on
* screen 16 once exit is open, mouse rescues you

 lda level
 cmp #8 ;mouse level
 bne :12
 lda CharScrn
 cmp #16
 bne :12
 lda exitopen
 beq :12
 cmp #mousetimer
 bcc :11
 bne :12
:10 jsr mouserescue
:11 inc exitopen
:12
]rts rts

*-------------------------------
*
*  Screen flashes towards end of weightlessness period
*
*-------------------------------
wtlessflash
 lda weightless
 beq ]rts
 ldx #0
 sec
 sbc #1
 sta weightless
 beq :3
 ldx #$ff
 cmp #wtlflash
 bcs :3
 lda vibes
 eor #$ff
 tax
:3 stx vibes ;Screen flashes as weightlessness ends
]rts rts

*-------------------------------
* yellow copy protection
* (call right before 1st princess cut)
* In: A = next level
*-------------------------------
yellowcheck
 cmp #2
 bne ]rts
 jsr showtext
 ldx #10
 jmp yellow ;in gamebg
 ;sets yellowflag ($7c) hibit

*-------------------------------
*
*  Temp development patch for screen redraw
*  (also used for invert Y)
*
*-------------------------------
develpatch
 do 0
 lda blackflag ;blackout?
 beq :1
 lda #1
 sta genCLS
 fin

:1 lda redrawflg ;forced redraw?
 beq ]rts
 dec redrawflg

 jsr markmeters
 jmp sure

*-------------------------------
 lst
 ds 1
 usr $a9,4,$a00,*-org
 lst off