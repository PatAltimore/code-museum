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
description: "The foundational control logic for Prince of Persia's cinematic platforming on the Apple II, showcasing clever memory management and animation techniques."

summary:
  - point: "Bank-switched memory enables 128K on Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Rotoscoping animation traced from live-action film"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Soft switches control hardware directly"
    link: "https://en.wikipedia.org/wiki/Soft_switch"
    link_label: "Soft switch"
  - point: "Game logic integrates cinematic storytelling"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"
  - point: "Collision detection optimized for limited hardware"
    link: "https://en.wikipedia.org/wiki/Collision_detection"
    link_label: "Collision detection"

enhancements:
  - id: "start-game-initialization"
    line_start: 92
    line_end: 102
    title: "How a Game Starts in 1989"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The `START` subroutine kicks off a new game by enabling the alternate zero page (`ALTZPon`), initializing the game logic via `StartGame`, and jumping to the `RESTART` routine. This sequence reflects the constraints of the Apple II, where memory was tightly controlled and hardware-specific soft switches were used to manage resources. Jordan Mechner designed this entry point to ensure the game could reliably reset and begin anew, even after interruptions. In the late 1980s, the Apple II's 6502 processor was a staple of home computing, but its limitations required programmers to be resourceful. Mechner's approach to game initialization influenced later developers working on constrained systems, particularly in how they managed memory and hardware state transitions."
  - id: "resume-saved-game"
    line_start: 104
    line_end: 113
    title: "Resuming Saved Games: A Hardware Dance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "The `STARTRESUME` subroutine resumes a saved game, re-enabling the alternate zero page (`ALTZPon`) and loading saved game data. This routine uses an arbitrary value to differentiate resumed games from new ones. In the era of floppy disks, saving and resuming games was a delicate process, requiring careful handling of disk I/O and memory state. Mechner's implementation ensured that players could pick up where they left off, a feature that became standard in gaming. The reliance on hardware-specific operations like `ALTZPon` highlights the ingenuity required to work within the Apple II's constraints. This approach laid groundwork for save systems in later games, influencing titles like Monkey Island and other adventure games of the early 1990s."
  - id: "initialize-system-on-boot"
    line_start: 115
    line_end: 139
    title: "Booting Up: System Initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The `INITSYSTEM` routine initializes the game system upon boot. It enables the alternate zero page (`ALTZPon`), centers the joystick, sets auxiliary memory for background tables, and clears memory. This subroutine reflects the meticulous setup required for Apple II games, where every byte of memory had to be accounted for. Mechner's approach ensured the game was ready to run smoothly, even on hardware with only 128K of memory. This kind of initialization routine became a model for other developers working on constrained systems, influencing practices in early console games and embedded systems."
  - id: "start-game-subroutine"
    line_start: 141
    line_end: 163
    title: "Starting a Game: Strength and Danger"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    image_url: ""
    image_caption: ""
    content: "The `StartGame` subroutine sets up the initial conditions for a new or resumed game. It assigns the level number, cues the \"Danger\" theme for level 1, and initializes the player's strength. This routine embodies the cinematic nature of Prince of Persia, where music and gameplay are tightly integrated to create an immersive experience. Mechner's use of music cues and strength initialization reflects his focus on storytelling and player experience, a hallmark of cinematic platformers. This technique influenced later games like Another World and Flashback, which also blended gameplay with narrative elements."
  - id: "resume-game-subroutine"
    line_start: 165
    line_end: 219
    title: "Resuming a Game: Disk Swapping Drama"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "The `ResumeGame` subroutine handles the complex process of resuming a saved game, including disk swapping and restoring player state. It checks for saved game data, restores strength and timer values, and resumes from the beginning of the saved level. Disk swapping was a common challenge for Apple II games, requiring players to physically flip disks to access different parts of the game. Mechner's implementation ensured a seamless transition, preserving the cinematic flow of the game. This approach influenced save systems in later games, particularly those on floppy disk-based platforms like the Amiga and early PCs."
  - id: "initialize-game-variables"
    line_start: 221
    line_end: 249
    title: "Zeroing Out: Game Variable Initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The `initgame` subroutine initializes game variables before starting a new game. It clears flags, timers, and counters, ensuring a clean slate for gameplay. This routine highlights the importance of memory management on the Apple II, where every byte was precious. Mechner's careful initialization ensured that the game could run reliably, even after repeated resets. This technique became standard practice in game development, influencing how variables were managed in later games and systems."
  - id: "restart-level"
    line_start: 251
    line_end: 359
    title: "Restarting Levels: A Fresh Start"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    image_url: ""
    image_caption: ""
    content: "The `RESTART` subroutine resets the current level, reloading blueprints and image sets, zeroing variables, and initializing collision detection buffers. This routine ensures that players can restart levels without encountering glitches or inconsistencies. Mechner's approach reflects his commitment to a seamless player experience, even under the constraints of the Apple II. This technique influenced level restart mechanics in later games, particularly those with cinematic elements like Tomb Raider and Uncharted."
  - id: "main-game-loop"
    line_start: 361
    line_end: 401
    title: "The Heartbeat of Prince of Persia"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_loop"
    image_url: ""
    image_caption: ""
    content: "The `MainLoop` subroutine is the central game loop, handling input, timers, frame updates, and sound playback. It ensures the game runs smoothly, updating the screen and responding to player actions. This loop reflects the real-time nature of Prince of Persia, where gameplay and storytelling are tightly integrated. Mechner's design influenced game loops in later titles, particularly those with real-time elements like platformers and action-adventure games. The use of a central loop became a standard in game development, appearing in engines like Unity and Unreal."
  - id: "load-next-level"
    line_start: 403
    line_end: 418
    title: "Loading Levels: Disk-Side Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The `LoadNextLevel` subroutine prepares the game to transition to the next level, managing strength levels and disk-side logic. This routine reflects the constraints of floppy disk-based systems, where levels were often stored on different sides of the disk. Mechner's implementation ensured a smooth transition, preserving the cinematic flow of the game. This approach influenced level loading mechanics in later games, particularly those on disk-based platforms."
  - id: "next-frame-determination"
    line_start: 494
    line_end: 597
    title: "What Happens in the Next Frame?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Frame_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `NextFrame` subroutine determines the appearance of the next frame, updating mobile objects, transitional objects, and the player character. This routine reflects the real-time nature of Prince of Persia, where gameplay is tightly integrated with animation and storytelling. Mechner's approach influenced frame update mechanics in later games, particularly those with cinematic elements like Another World and Flashback."
  - id: "prep-cut-screen-transition"
    line_start: 1028
    line_end: 1064
    title: "The Screen Transition That Wins the Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'PrepCut' routine determines whether to transition to a new screen and handles the special case of reaching the princess's room, which triggers the game's victory sequence. This routine checks if the current screen matches the target screen, updates the visible screen, and invokes subroutines to load the necessary elements like guards, torches, and crumble animations. The victory condition is hardcoded: level 14, screen 5 marks the end of the player's journey. In 1989, cinematic transitions like this were groundbreaking, creating a sense of narrative progression. Mechner's approach to embedding story moments directly into gameplay influenced later cinematic platformers like Another World and Flashback."
  - id: "you-lose-cutscene"
    line_start: 1066
    line_end: 1076
    title: "The Cutscene That Ends It All"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_over"
    image_url: ""
    image_caption: ""
    content: "The 'YouLose' routine triggers the 'game over' sequence when the player runs out of time. It cuts to the princess's room and plays a specific cutscene before returning to the title screen. This cinematic approach to failure was uncommon in 1989, as most games simply displayed a static 'game over' message. By incorporating narrative elements into failure states, Mechner added emotional weight to losing, a technique that would later be adopted by games like Dark Souls to deepen player engagement."
  - id: "player-death-handling"
    line_start: 1088
    line_end: 1193
    title: "What Happens When the Player Dies?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Death_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The 'ctrlplayer' routine handles player control and death mechanics. When the player's character dies, the routine increments a death timer and displays a 'Press Button to Continue' message after a delay. It also includes a temporary resurrection feature for debugging or development purposes. This level of detail in handling player death reflects Mechner's focus on creating a seamless and immersive experience. The idea of giving players a chance to continue after dying became a staple in platformers and action games, influencing titles like Super Mario Bros. and Sonic the Hedgehog."
  - id: "death-song-selection"
    line_start: 1195
    line_end: 1213
    title: "The Music That Marks Your Demise"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_music"
    image_url: ""
    image_caption: ""
    content: "The 'deathsong' routine selects and cues music based on the circumstances of the player's death. If the player dies heroically in battle, a 'heroic death' song is played; otherwise, an 'accidental death' song is triggered. This dynamic use of music to reflect gameplay events was innovative for its time, enhancing the emotional impact of the player's actions. Mechner's approach to integrating music into gameplay influenced later games like The Legend of Zelda and Final Fantasy, where music became a key storytelling tool."
  - id: "copy-protection-flip-disk"
    line_start: 1541
    line_end: 1591
    title: "The Copy Protection Hidden in Disk Flipping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "The 'flipdisk' routine includes a copy protection mechanism that checks for specific disk identifiers before allowing the game to proceed. If the check fails, the player is redirected to the attract mode. This was a common technique in the 1980s to prevent piracy, as games were often distributed on floppy disks. Mechner's implementation ensured that even if the game was copied, it wouldn't function correctly without the original disk. This approach was part of a broader industry effort to combat software piracy, which included measures like code wheels and manual-based puzzles."
  - id: "weightlessness-screen-flash"
    line_start: 1680
    line_end: 1700
    title: "The Flash That Ends Weightlessness"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The 'wtlessflash' routine creates a visual effect as the player's weightlessness period ends. It decrements the weightless timer and toggles the screen's 'vibes' value to produce a flashing effect. This small but impactful detail adds to the game's cinematic feel, emphasizing the transition back to normal physics. Mechner's attention to such details helped establish Prince of Persia as a pioneer in realistic animation and environmental storytelling, influencing later games with advanced physics engines like Half-Life and Portal."
  - id: "yellow-copy-protection-check"
    line_start: 1702
    line_end: 1712
    title: "The Yellow Flag That Guards the Princess"
    wikipedia_url: "https://en.wikipedia.org/wiki/Copy_protection"
    image_url: ""
    image_caption: ""
    content: "The 'yellowcheck' routine is a copy protection mechanism tied to the game's final sequence. It checks the next level identifier and sets a flag if the conditions are met, ensuring the player has a legitimate copy of the game before proceeding to the princess cutscene. This level of integration between gameplay and copy protection was rare, showcasing Mechner's ingenuity in safeguarding his work while maintaining immersion. Similar techniques were later used in games like EarthBound, which featured anti-piracy measures embedded in gameplay."
  - id: "development-patch-redraw"
    line_start: 1713
    line_end: 1734
    title: "The Debugging Patch That Fixed the Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The 'develpatch' routine is a temporary development patch used for forced screen redraws and other debugging tasks. It checks flags for blackout and redraw conditions, then invokes subroutines to update the screen. This type of debugging code was essential for solo developers like Mechner, who had to test and refine their work without the support of a large team. The practice of embedding debugging tools directly into the game code influenced later development environments and debugging frameworks, such as those found in Unity and Unreal Engine."

---

```asm
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
```
