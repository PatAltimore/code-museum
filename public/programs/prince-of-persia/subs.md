---
title: "SUBS.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SUBS.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/SUBS.S"
year: 1989
author: "Jordan Mechner"
slug: "subs"
order: 10
description: "This file contains subroutines for Prince of Persia's cinematic platforming mechanics, showcasing innovative techniques for animation, memory management, and gameplay on the Apple II."

summary:
  - point: "Rotoscoping animation techniques implemented in assembly"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory management for Apple II hardware"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Complex subroutines for cinematic storytelling"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"
  - point: "Use of pseudo-random number generation for gameplay effects"
    link: "https://en.wikipedia.org/wiki/Random_number_generation"
    link_label: "Random number generation"
  - point: "Direct manipulation of Apple II hardware for visual effects"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"

enhancements:
  - id: "crumble-trigger-loose-floors"
    line_start: 103
    line_end: 140
    title: "Triggering loose floors dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The CRUMBLE subroutine dynamically triggers loose floor tiles when the player enters specific screens in Level 13. It checks the current level and screen number, then iterates through blocks on the screen above to identify and trigger loose tiles. This mechanic adds tension and unpredictability to gameplay. Written in 6502 assembly, it reflects Jordan Mechner's attention to detail in creating immersive environments. At the time, the Apple II's hardware constraints required creative solutions like this to simulate dynamic interactions without real-time physics engines. This approach influenced later games by demonstrating how simple checks and iterations could create engaging gameplay moments, laying groundwork for environmental interactivity in platformers."
  - id: "addtorches-flasks-swords"
    line_start: 142
    line_end: 184
    title: "Adding torches, flasks, and swords to scenes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The ADDTORCHES subroutine scans the visible screen for torches, flasks, and swords, adding them to the game's transition list. Using indexed addressing, it iterates through screen objects and triggers specific routines for each item type. This technique exemplifies efficient object management on limited hardware. Mechner's design philosophy prioritized cinematic detail, and this subroutine ensured key objects were dynamically integrated into gameplay. The method influenced object handling in later games, particularly in how items were dynamically added to scenes based on player interaction or visibility."
  - id: "pause-loop-timing"
    line_start: 186
    line_end: 200
    title: "Precise timing with nested loops"
    wikipedia_url: "https://en.wikipedia.org/wiki/6502"
    image_url: ""
    image_caption: ""
    content: "The PAUSE subroutine implements a delay mechanism using nested loops. The outer loop decrements a counter, while the inner loop provides fine-grained timing control. This approach compensates for the lack of built-in timing functions on the 6502 processor. Mechner used this technique to synchronize animations and gameplay events, ensuring smooth transitions and cinematic pacing. Precise timing was critical for creating the game's immersive atmosphere, and similar techniques were adopted in other assembly-based games to manage delays and frame rates."
  - id: "doflashon-lightning-effect"
    line_start: 202
    line_end: 217
    title: "Lightning flash effect implementation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "DOFLASHON creates a lightning flash effect by interacting directly with Apple II hardware registers. It toggles between lo-res and hi-res modes to simulate the flash, adding dramatic visual impact during traumatic gameplay moments. This subroutine exemplifies Mechner's ability to leverage hardware quirks for cinematic storytelling. The technique of manipulating video modes directly influenced later games on similar platforms, showcasing how hardware constraints could be turned into creative opportunities."
  - id: "add-slicers-to-trans-list"
    line_start: 245
    line_end: 288
    title: "Dynamic slicer object management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "ADDSLICERS identifies slicer objects on the current screen and adds them to the transition list. It checks object states to determine whether they should be triggered, ensuring smooth integration of these hazards into gameplay. This subroutine demonstrates Mechner's meticulous approach to object management, ensuring dynamic and responsive environments. Later games adopted similar techniques for managing interactive objects, contributing to the evolution of dynamic level design in platformers."
  - id: "pburn-princess-room-torches"
    line_start: 314
    line_end: 337
    title: "Animating torches in the princess's room"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The PBURN subroutine animates torches in the princess's room by cycling through their states and updating their positions. It uses indexed addressing to manage multiple torches efficiently, ensuring they burn dynamically during gameplay. This detail adds to the game's cinematic atmosphere, showcasing Mechner's dedication to creating a visually rich experience. The technique of animating environmental objects influenced later games, particularly in how they handled dynamic lighting and effects in static scenes."
  - id: "playcut-cinematic-scenes"
    line_start: 422
    line_end: 452
    title: "Playing pre-recorded cinematic scenes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    image_url: ""
    image_caption: ""
    content: "The PLAYCUT subroutine plays pre-recorded cinematic scenes by jumping to specific routines based on the scene number. It uses self-modifying code to dynamically determine the address of the scene routine, a clever workaround for the Apple II's memory limitations. This approach allowed Mechner to integrate cinematic storytelling seamlessly into gameplay, setting a precedent for narrative-driven platformers. The technique influenced later games that sought to blend gameplay with pre-rendered or scripted sequences."
  - id: "playloop-frame-sequence"
    line_start: 870
    line_end: 915
    title: "Simplified playback loop for animations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The PLAYLOOP subroutine processes frame sequences for animations, incorporating random delays, strobe effects, and sound playback. It checks for user input to interrupt the sequence, ensuring responsive gameplay. This loop is a simplified version of the main gameplay loop, optimized for cinematic sequences. Mechner's use of modular loops influenced game design by demonstrating how to balance scripted events with player control, a key feature of cinematic platformers."
  - id: "pjumpseq-princess-animation"
    line_start: 1012
    line_end: 1024
    title: "Jump sequence for princess animations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "PJUMPSEQ handles jump animations for the princess character, loading her data, executing the sequence, and saving the updated state. This modular approach to character animation allowed Mechner to create fluid, lifelike movements despite hardware constraints. The technique influenced animation systems in later games, particularly those that sought to replicate realistic character motion on limited platforms."
  - id: "vjumpseq-character-animation-sequence"
    line_start: 1028
    line_end: 1033
    title: "Character animation sequence initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `vjumpseq`, initializes a character's animation sequence by calling `LoadKid` to load the character's data, followed by `jumpseq` to set the animation state, and finally `SaveKid` to store the updated state. Jordan Mechner uses this routine to ensure smooth transitions between animation states, a critical feature for the game's cinematic feel. In 1989, animation in games was often rudimentary, but Mechner's use of rotoscoping and precise control over animation states set a new standard. This approach influenced later games like Another World (1991) and Flashback (1992), which also emphasized fluid character movements and cinematic storytelling."
  - id: "startm8-mouse-runs-to-princess"
    line_start: 1042
    line_end: 1050
    title: "Mouse runs to princess: a scripted moment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scripting_language"
    image_url: ""
    image_caption: ""
    content: "The `startM8` routine positions the mouse character and initiates its movement toward the princess. It sets the mouse's coordinates and animation state (`Mstop`) before jumping to `animchar` for rendering. This scripted interaction is part of the game's storytelling, showcasing Mechner's focus on creating moments of emotional connection. In the mid-1980s, scripting such interactions was uncommon in platformers, which typically relied on repetitive gameplay loops. Mechner's work here prefigures the rise of scripting languages in games, enabling dynamic and narrative-driven interactions seen in later titles like Half-Life (1998)."
  - id: "demo-self-running-sequence"
    line_start: 1224
    line_end: 1236
    title: "Self-running demo playback system"
    wikipedia_url: "https://en.wikipedia.org/wiki/Demo_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The `DEMO` routine initiates a self-running sequence by loading the `DemoProg1` data and jumping to `AutoPlayback`. This feature allows the game to showcase its gameplay without player input, a common practice in the era to attract players in retail environments or arcade settings. Mechner's implementation is notable for its precision, as the demo mimics actual gameplay mechanics, including jumps and combat. This technique influenced later games like Sonic the Hedgehog (1991), which used similar self-running demos to highlight gameplay features."
  - id: "gravity-and-freefall-mechanics"
    line_start: 1610
    line_end: 1644
    title: "Gravity and freefall mechanics in assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The `GRAVITY` routine calculates the vertical velocity of the player character based on whether they are weightless or subject to normal gravity. It uses constants like `TermVelocity` and `AccelGravity` to simulate realistic falling behavior. This subroutine exemplifies Mechner's attention to detail, as the physics of falling were integral to the game's platforming challenges. In the late 1980s, physics engines were rudimentary, but Mechner's work laid the groundwork for more advanced implementations in games like Tomb Raider (1996) and Portal (2007), where physics became a core gameplay element."
  - id: "initialguards-level-setup"
    line_start: 1669
    line_end: 1690
    title: "Setting initial guard positions for levels"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_design"
    image_url: ""
    image_caption: ""
    content: "The `INITIALGUARDS` routine initializes the positions of guards for a given level. It iterates through screen data, calculates positions using `unindex` and `getblockej`, and sets guard attributes like `GdStartX`. This routine reflects Mechner's meticulous level design, ensuring that enemy placement aligns with the game's pacing and difficulty curve. By automating guard initialization, Mechner could focus on crafting engaging encounters. This approach influenced later games with dynamic enemy placement systems, such as the AI director in Left 4 Dead (2008)."
  - id: "mirappear-mirror-appearance"
    line_start: 1740
    line_end: 1758
    title: "Mirror appears: a cinematic moment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cutscene"
    image_url: ""
    image_caption: ""
    content: "The `MIRAPPEAR` routine triggers the appearance of the mirror when the player opens the exit. It calculates the mirror's position and updates the game state to display it. This cinematic moment is a hallmark of Prince of Persia's storytelling, emphasizing visual drama and narrative progression. Mechner's use of scripted events like this influenced the development of cutscenes in games, paving the way for titles like Final Fantasy VII (1997), where cinematic storytelling became a central feature."

---

* subs
DemoDisk = 0
EditorDisk = 0
CheckTimer = 0
org = $e000
 tr on
 lst off
*-------------------------------
*
*   S  U  B  S
*
*-------------------------------
 org org

 jmp ADDTORCHES
 jmp DOFLASHON
 jmp PAGEFLIP
 jmp DEMO
 jmp SHOWTIME

 jmp DOFLASHOFF
 jmp LRCLSE
 jmp potioneffect
 jmp checkalert
 jmp reflection

 jmp ADDSLICERS
 jmp PAUSE
 jmp bonesrise
 jmp DEADENEMY
 jmp PLAYCUT

 jmp ADDLOWERSOUND
 jmp REMOVEOBJ
 jmp ADDFALL
 jmp SETINITIALS
 jmp STARTKID

 jmp STARTKID1
 jmp GRAVITY
 jmp INITIALGUARDS
 jmp MIRAPPEAR
 jmp CRUMBLE

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
 dum $f0
]Xcount ds 1
]Xend ds 1
tempstate ds 1
 dend


POPside1 = $a9
POPside2 = $ad

* Message #s

LevelMsg = 1
ContMsg = 2
TimeMsg = 3

timemsgtimer = 20

mirscrn = 4
mirx = 4
miry = 0 ;also in topctrl, auto

*-------------------------------
 do CheckTimer
min = 180
 else
min = 1090 ;# frames per "minute"
 fin ;actual frame rate approx. 11 fps)

sec = min/60
t = 60 ;game time limit

*-------------------------------
ALTZPon = $c009
ALTZPoff = $c008
RAMWRTaux = $c005
RAMWRTmain = $c004
RAMRDaux = $c003
RAMRDmain = $c002

*-------------------------------
SceneCount ds 2

*-------------------------------
* Level 13 only:  When you enter, trigger loose floors on
* screen above
*-------------------------------
]rts rts

CRUMBLE
 lda level
 cmp #13
 bne ]rts
 lda VisScrn
 cmp #23
 beq :1
 cmp #16
 bne ]rts
;Trigger blocks 2-7 on bottom row of scrn above
:1 lda scrnAbove
 sta tempscrn
 lda #2
 sta tempblocky
 ldx #7
:loop stx tempblockx
 jsr :trigloose
 ldx tempblockx
 dex
 cpx #2
 bcs :loop
]rts rts

:trigloose
 jsr rdblock1
 cmp #loose
 bne ]rts
 jsr rnd
 and #$0f
 eor #$ff
 clc
 adc #1
 jmp breakloose1

*-------------------------------
* Add all flasks & torches on VisScrn to trans list
* & swords
*-------------------------------
ADDTORCHES
 lda VisScrn
 jsr calcblue

 ldy #29
:loop lda (BlueType),y
 and #idmask
 cmp #torch
 bne :c1
 tya
 pha
 lda VisScrn
 jsr trigtorch
 pla
 tay
 bpl :cont

:c1 cmp #flask
 bne :c2
 tya
 pha
 lda VisScrn
 jsr trigflask
 pla
 tay
 bpl :cont

:c2 cmp #sword
 bne :cont
 tya
 pha
 lda VisScrn
 jsr trigsword
 pla
 tay
:cont dey
 bpl :loop

]rts rts

*-------------------------------
*
* In: A = length of pause (1-256)
*
*-------------------------------
PAUSE
:outer pha
 ldx #0
:loop dex
 bne :loop
 pla
 sec
 sbc #1
 bne :outer
]rts rts

*-------------------------------
*
*  F L A S H
*
*  Has a traumatic incident occured this frame?
*  If so, do lightning flash
*
*-------------------------------
DOFLASHON
 jsr lrclse

 jsr vblank

 lda $c054
 lda $c056 ;show lores
 rts

*-------------------------------
DOFLASHOFF
 jsr vblank

 lda PAGE
 bne :1

 lda $c055
:1 lda $c057 ;show hires

 rts

*-------------------------------
*
* Clear lo-res screen only if we need to
*
* In: A = byte value
*
*------------------------------
LRCLSE
 cmp scrncolor ;last scrncolor
 beq ]rts

 jmp lrcls

*-------------------------------
* Add all slicers on CharBlockY to trans list
*-------------------------------
slicetimer = 15 ;from mover
slicersync = 3 ;# frames out of sync

ADDSLICERS
 lda #slicetimer
 sta tempstate

 lda CharScrn
 jsr calcblue

 ldy CharBlockY
 cpy #3
 bcs ]rts

 lda Mult10,y
 tay
 clc
 adc #10
 sta :sm+1
:loop
 lda (BlueType),y
 and #idmask
 cmp #slicer
 bne :cont

 lda (BlueSpec),y
 tax
 and #$7f
 beq :ok
 cmp #slicerRet
 bcc :cont ;in mid-slice--leave it alone
:ok txa
 and #$80 ;get hibit
 ora tempstate
 jsr trigslicer ;trigger slicer
 jsr getnextstate

:cont iny
:sm cpy #0
 bcc :loop

]rts rts

getnextstate
 lda tempstate
 sec
 sbc #slicersync
 cmp #slicerRet
 bcs :ok
 clc
 adc #slicetimer+1-slicerRet
:ok sta tempstate
]rts rts

*-------------------------------
*
*  Special animation lists for princess's room
*
*-------------------------------
ptorchx db 13,25,-1
ptorchoff db 0,6
ptorchy db 113,113
ptorchstate db 1,6
ptorchcount ds 1
psandcount ds 1
pstarcount ds 4

*-------------------------------
*
*  Burn torches (Princess's room)
*
*-------------------------------
pburn
 ldx ptorchcount ;last torch burned
 inx
 lda ptorchx,x
 bpl :ok
 ldx #0
:ok stx ptorchcount
 lda ptorchx,x
 sta XCO
 lda ptorchoff,x
 sta OFFSET
 lda ptorchy,x
 sta YCO
 lda ptorchstate,x
 jsr getflameframe
 sta ptorchstate,x
 tax
 jsr psetupflame
 jmp lay  ;<---DIRECT HIRES CALL

*-------------------------------
*
* Flow sand
*
*-------------------------------
pflow
 ldx psandcount
 bmi ]rts ;no hourglass yet
 inx
 cpx #3
 bcc :ok
 ldx #0
:ok stx psandcount
 ldy GlassState
 jmp flow ;<---Contains direct hires call

*-------------------------------
*
* Twinkle stars
*
*-------------------------------
pstars
 ldx #3
:loop lda pstarcount,x
 beq :ok
 dec pstarcount,x
 bne :ok
 txa
 pha
 jsr twinkle ;turn it off
 pla
 tax
:ok dex
 bpl :loop

* New twinkle?

 jsr rnd
 cmp #10
 bcs ]rts
 jsr rnd
 and #3
 clc
 adc #5 ;A = rnd length of twinkle (5-8)
 pha
 jsr rnd
 jsr rnd
 and #3
 tax ;X = rnd star # (0-3)
 pla
 sta pstarcount,x
 jmp twinkle ;<---Contains direct hires call

*-------------------------------
*
*  P A G E F L I P
*
*-------------------------------
PAGEFLIP
 jsr normspeed ;IIGS
 lda PAGE
 bne :1

 lda #$20
 sta PAGE
 lda $C054 ;show page 1

:3 lda $C057 ;hires on
 lda $C050 ;text off
 lda vibes
 beq :rts
 lda $c05e
]rts rts
:rts lda $c05f
 rts

:1 lda #0
 sta PAGE
 lda $C055 ;show page 2
 jmp :3

*-------------------------------
*
*  Play pre-recorded "princess" scenes
*
*  In: A = scene #
*
*-------------------------------
AddrL db #PlayCut0,#PlayCut1,#PlayCut2,#PlayCut3
 db #PlayCut4,#PlayCut5,#PlayCut6,#PlayCut7
 db #PlayCut8
AddrH db #>PlayCut0,#>PlayCut1,#>PlayCut2,#>PlayCut3
 db #>PlayCut4,#>PlayCut5,#>PlayCut6,#>PlayCut7
 db #>PlayCut8

PLAYCUT
 pha
 jsr initit
 pla
 tax

 do 0 ;temp
 jmp PlayCut4
 fin

 lda AddrL,x
 sta :sm+1
 lda AddrH,x
 sta :sm+2
:sm jsr $FFFF ;self-mod

 lda #1
 sta SPEED
]rts rts

*-------------------------------
 do DemoDisk
PlayCut8
PlayCut4
PlayCut7
 brk
 else
*-------------------------------
* Cut #8: Princess sends out mouse
*-------------------------------
PlayCut8
 jsr getglass
 jsr addglass

 jsr startP8
 jsr SaveShad
 jsr startM8
 jsr SaveKid

 lda #20
 jsr play

 lda #Mleave
 jsr mjumpseq
 lda #20
 jsr play

 lda #Prise
 jsr pjumpseq

 lda #20
 jsr play

 lda #0
 sta KidPosn ;mouse disappears
 ldx #50
 lda #s_Heartbeat
 jmp PlaySongX

*-------------------------------
* Cut #4: Mouse returns to princess
*-------------------------------
PlayCut4
 jsr getglass
 jsr addglass

 jsr startP4
 jsr SaveShad
 jsr startM4
 jsr SaveKid
 lda #5
 jsr play

 lda #Pcrouch
 jsr pjumpseq
 lda #9
 jsr play

 lda #Mraise
 jsr mjumpseq

 lda #58
 jmp play

*-------------------------------
* Happy ending
*-------------------------------
PlayCut7
 lda #8
 sta SPEED

 lda #1
 sta soundon
 sta musicon ;they must listen!!

 jsr startP7
 jsr SaveShad
 lda #8
 jsr play

 jsr startK7
 jsr SaveKid
 lda #8
 jsr play

 lda #Pembrace
 jsr pjumpseq
 lda #5
 jsr play

 lda #runstop
 jsr vjumpseq
 lda #2
 jsr play

 lda #0
 sta KidPosn ;kid disappears on frame 8 of embrace

 lda #9
 jsr play

 lda  #s_Embrace
 jsr  PlaySong

 jsr startM7
 jsr SaveKid ;mouse runs in

 lda #12
 jsr play

 lda #Mclimb
 jsr mjumpseq

 lda #30
 jmp play

 fin

*-------------------------------
* Tragic ending
*-------------------------------
PlayCut6
 lda #22
 sta SPEED
 ldx #8 ;empty hourglass
 jsr addglass
 lda #2
 jsr play
 lda #s_Tragic
 jsr PlaySong
 lda #100
 jmp play

*-------------------------------
* Princess cut #5
*-------------------------------
PlayCut5
 jsr getglass
 cpx #7
 bcs Ominous ;sand is almost out--go for it
 jmp PlayCut1

Ominous
 jsr getglass
 jsr addglass

 jsr startP5
 jsr SaveShad

 lda #2
 jsr play

 ldx #50
 lda #s_Heartbeat
 jsr PlaySongX

 lda #Palert
 jsr pjumpseq ;princess hears something...
 lda #12
 jsr play

 ldx #20
 lda #s_Danger
 jmp PlaySongX

*-------------------------------
* Princess cut #2 (lying down)
*-------------------------------
PlayCut2
 jsr getglass
 jsr addglass

 jsr startP2
 jsr SaveShad

 lda #2
 jsr play

 ldx #50
 lda #s_Heartbeat
 jsr PlaySongX
]rts rts

*-------------------------------
* Princess cut #1 (standing)
*-------------------------------
PlayCut1
PlayCut3
 jsr getglass
 jsr addglass

 jsr startP1
 jsr SaveShad

 lda #2
 jsr play

 ldx #50
 lda #s_Timer
 jmp PlaySongX

*-------------------------------
* Opening titles scene
*-------------------------------
PlayCut0
 jsr startV0
 jsr SaveKid
 jsr startP0 ;put chars in starting posn
 jsr SaveShad

 lda #2
 jsr play ;animate 2 frames

 lda #s_Princess
 ldx #8
 jsr PlaySongI

 lda #5
 jsr play

 lda #Palert
 jsr pjumpseq ;princess hears something...
 lda #9
 jsr play
 lda #s_Squeek
 ldx #0
 jsr PlaySongI ;door squeaks...

 lda #7
 sta SPEED

 lda #5
 jsr play
 lda #Vapproach
 jsr vjumpseq
 lda #6
 jsr play
 lda #Vstop
 jsr vjumpseq
 lda #4
 jsr play ;vizier enters
 lda #s_Vizier
 ldx #12
 jsr PlaySongI
 lda #4
 jsr play

 lda #Vapproach
 jsr vjumpseq
 lda #30
 jsr play
 lda #Vstop
 jsr vjumpseq
 lda #4
 jsr play ;stops in front of princess
 lda #s_Buildup
 ldx #25
 jsr PlaySongI

 lda #Vraise ;raises arms
 jsr vjumpseq
 lda #1
 jsr play
 lda #Pback
 jsr pjumpseq
 lda #13
 jsr play
 ldx #0
 jsr addglass1 ;hourglass appears
 lda #5
 sta lightning
 lda #$ff
 sta lightcolor

 lda #12
 sta SPEED
 lda #5
 jsr play
 lda #0
 sta psandcount ;sand starts flowing
 lda #s_Magic
 ldx #8
 jsr PlaySongI

 lda #7
 sta SPEED
 lda #Vexit
 jsr vjumpseq
 lda #17
 jsr play
 ldx #1
 jsr addglass1 ;glass starts to fill
 lda #12
 jsr play
 lda #Pslump
 jsr pjumpseq
 lda #28
 jsr play

 lda #12
 sta SPEED
 lda #s_StTimer
 ldx #20
 jmp PlaySongI

*-------------------------------
* Add hourglass to scene
* In: X = state
*-------------------------------
addglass
 lda #0
 sta psandcount ;start sand flowing
addglass1
 stx GlassState
 lda #2
 sta redrawglass
]rts rts

*-------------------------------
* In: A = song #
*     X = # cycles to play if sound is off
*-------------------------------
PlaySongX
 tay
 lda soundon
 and musicon
 bne :1
 txa
 jmp play
:1 tya ;falls thru to PlaySong

*-------------------------------
*
* Play Song (Princess's room)
*
* Button press ends song
*
* In: A = song #
*
*-------------------------------
PlaySong
 jsr minit
 jsr swpage
:loop lda #1
 jsr strobe
 lda $c061
 ora $c062
 ora keypress
 bmi :interrupt
 jsr pburn
 jsr pstars
 jsr pflow
 jsr mplay
 cmp #0
 bne :loop
:interrupt
 jmp swpage

*-------------------------------
*
* Play Song (Princess's room--Interruptible)
*
* Key or button press starts a new game
*
* In: A = song #
*     X = # cycles to play if sound is off
*
*-------------------------------
PlaySongI
 tay
 lda soundon
 and musicon
 bne :1
 txa
 beq ]rts
 jmp play
:1 tya

 jsr minit
 jsr swpage
:loop jsr musickeys
 cmp #$80
 bcs :interrupt
 jsr pburn
 jsr pstars
 jsr pflow
 jsr mplay
 cmp #0
 bne :loop
 jmp swpage
:interrupt
 jmp dostartgame

*-------------------------------
*  Switch hires pages for duration of song

swpage
 lda PAGE
 eor #$20
 sta PAGE
]rts rts

*-------------------------------
flashon
 lda lightning
 beq ]rts
 lda lightcolor
 jmp doflashon

flashoff
 lda lightning
 beq ]rts
 dec lightning
 jmp doflashoff

*-------------------------------
*
*  Playback loop (simplified version of main loop in TOPCTRL)
*
*  In: A = sequence length (# of frames)
*
*-------------------------------
play
 sta SceneCount
playloop
 jsr rnd

 lda SPEED
 jsr pause

 jsr strobe ;strobe kbd & jstk

 lda level
 bne :notdemo
 jsr demokeys
 bpl :cont
 lda #1
 jmp dostartgame ;interrupted--start a new game

:notdemo lda $c061
 ora $c062
 ora keypress
 bmi ]rts ;key or button to end scene

:cont jsr NextFrame ;Determine what next frame should look like

 jsr flashon

 jsr FrameAdv ;Update hidden page to reflect new reality
;& show it
 jsr flashoff

 lda soundon
 beq :1
 jsr playback ;play back sound fx
 jsr zerosound
:1
; jsr songcues

 dec SceneCount
 bne playloop
 rts

*-------------------------------
NextFrame
 jsr DoKid ;kid/vizier/mouse

 jsr DoShad ;always princess

]rts rts

*-------------------------------
FrameAdv
 jsr DoFast

 jsr vblank

 jmp PageFlip

*-------------------------------
DoKid
 jsr LoadKid
 lda CharPosn
 beq ]rts

 jsr ctrlkidchar

 jsr animchar ;Get next frame from sequence table

 jsr SaveKid ;Save all changes to char data

]rts rts

*-------------------------------
DoShad
 jsr LoadShadwOp
 lda CharPosn
 beq ]rts

 jsr ctrlshadchar

 jsr animchar

 jmp SaveShad

*-------------------------------
ctrlkidchar
 rts

ctrlshadchar
 rts

*-------------------------------
DoFast

* Set up image lists

 jsr zerolsts

 lda redrawglass
 beq :3
 dec redrawglass
 ldx GlassState
 jsr drawglass ;hourglass
:3
 jsr LoadKid ;can be kid or vizier
 lda CharPosn
 beq :1
 jsr setupchar
 lda #30
 sta FCharIndex
 jsr addkidobj
:1
 jsr LoadShad ;always princess
 lda CharPosn
 beq :2
 jsr setupchar
 lda #30
 sta FCharIndex
 jsr addkidobj
 jsr pmask ;kludge to mask face & hair
:2
 jsr fast ;get char/objs into mid table

 jsr drawpost ;big white post

* Draw to screen

 jsr pburn
 jsr pburn ;first put down 2 torch flames
 jsr pstars ;& twinkle stars

 jsr drawall ;...then draw the rest

 jmp pflow ;& flow sand

]rts rts

*-------------------------------
*
* Jumpseq for princess & vizier
*
* In: A = sequence #
*
*-------------------------------
pjumpseq
 pha
 jsr LoadShad
 pla
 jsr jumpseq
 jmp SaveShad

kjumpseq
mjumpseq
vjumpseq
 pha
 jsr LoadKid
 pla
 jsr jumpseq
 jmp SaveKid

*-------------------------------
*
* Put characters in starting position for scene
*
*-------------------------------
floorY = 151

* mouse runs to princess

startM8
 jsr startM4
 lda #144
 sta CharX
 lda #Mstop
 jsr jumpseq
 jmp animchar

startM4
 lda #24
 sta CharID
 lda #199
 sta CharX
 lda #floorY+1
 sta CharY
 lda #-1
 sta CharFace

 lda #Mscurry
 jsr jumpseq
 jmp animchar

* princess w/mouse

startP8
 jsr startP0
 lda #130
 sta CharX
 lda #floorY+3
 sta CharY
 lda #Pstroke
 jsr jumpseq
 jmp animchar

startP4
 jsr startP1
 lda #142
 sta CharX
 lda #floorY+3
 sta CharY
 lda #Pstand
 jsr jumpseq
 jmp animchar

startP5
 jsr startP0
 lda #160
 sta CharX
 rts

startP2
 jsr startP0
 lda #89
 sta CharX
 lda #floorY
 sta CharY

 lda #Plie
 jsr jumpseq
 jmp animchar

startP1
 jsr startP0
 lda #0
 sta CharFace
 rts

startP7
 jsr startP0
 lda #136
 sta CharX
 lda #floorY-2
 sta CharY
 lda #Pwaiting
 ldx #1
 cpx purpleflag
 beq :ok
 lda #120 ;crash (copy protect)
:ok jsr jumpseq
 jmp animchar

startM7
 jsr startM4
 lda #floorY-2
 sta CharY
 rts

startP0
 lda #5
 sta CharID

 lda #120
 sta CharX
 lda #floorY
 sta CharY

 lda #-1
 sta CharFace

 lda #Pstand
 jsr jumpseq
 jmp animchar

startV0
 lda #6
 sta CharID

 lda #197
 sta CharX
 lda #floorY
 sta CharY

 lda #-1
 sta CharFace

 lda #Vstand
 jsr jumpseq
 jmp animchar

startK7
 lda #0
 sta CharID

 lda #198
 sta CharX
 lda #floorY-2
 sta CharY

 lda #-1
 sta CharFace

 lda #startrun
 jsr jumpseq
 jmp animchar

*-------------------------------
* Demo commands
*-------------------------------
EndProg = -2
EndDemo = -1
Ctr = 0
Fwd = 1
Back = 2
Up = 3
Down = 4
Upfwd = 5
Press = 6
Release = 7

*-------------------------------
DemoProg1 ;up to fight w/1st guard
 db 0,Ctr
 db 1,Fwd
 db 13,Ctr
 db 30,Fwd ;start running...
 db 37,Upfwd ;jump 1st pit
 db 47,Ctr
 db 48,Fwd ;& keep running
d1 = 65
 db d1,Ctr ;stop
 db d1+8,Back ;look back...
 db d1+10,Ctr
 db d1+34,Back
 db d1+35,Ctr
d2 = 115
 db d2,Upfwd ;jump 2nd pit
 db d2+13,Press ;& grab ledge
 db d2+21,Up
 db d2+42,Release
 db d2+43,Ctr
 db d2+44,Fwd
 db d2+58,Down
 db d2+62,Ctr
 db d2+63,Fwd
 db d2+73,Ctr
d3 = 193
 db d3,Fwd
 db d3+12,Ctr
 db d3+40,EndDemo

*-------------------------------
*
*  D  E  M  O
*
*  Controls kid's movements during self-running demo
*
*  (Called from PLAYERCTRL)
*
*-------------------------------
DEMO
 lda #DemoProg1
 ldx #>DemoProg1
 jmp AutoPlayback

*-------------------------------
*
* Init princess cut
*
*-------------------------------
initit
 lda #" "
 sta scrncolor ;?
 lda #0
 sta vibes
 sta redrawglass
 sta KidPosn
 sta ShadPosn
 sta ptorchcount
 ldx #3
:loop sta pstarcount,x
 dex
 bpl :loop

 lda #-1 ;no hourglass yet
 sta psandcount

 lda #12
 sta SPEED

 jsr zeropeels
 jsr zerored
 jsr zerosound
]rts rts

*-------------------------------
*
* Get hourglass state (based on time left)
*
* In: FrameCount
* Out: X = glass state
*
*-------------------------------
getglass
 jsr getminleft
 ldx #7
 lda MinLeft
 cmp #6
 bcc :got
 dex
 cmp #$11
 bcc :got
 dex
 cmp #$21
 bcc :got
 dex
 cmp #$41
 bcc :got
 dex
:got
]rts rts

*-------------------------------
*
* Show time if requested
* (& constant time display during final minute)
*
* In: timerequest (0 = no, 1-2 = auto, 3 = from kbd,)
*     4 = Vizier dead)
*
*-------------------------------
SHOWTIME
 lda timerequest
 beq ]rts
 lda KidLife
 bpl ]rts

 jsr getminleft

 lda MinLeft
 cmp #2
 bcs :normal
 lda SecLeft
 beq :timeup

* Countdown during final minute

 lda level
 cmp #14
 bcs :normal
 bcc :showsec ;stop countdown when clock stops

:timeup
 lda timerequest
 cmp #3
 bcc ]rts ;Once t=0, show time only on kbd request

:normal
 lda msgtimer
 bne ]rts ;wait till other msgs are gone

 lda #TimeMsg
 sta message
 lda #timemsgtimer
 ldx timerequest
 cpx #4
 bcc :norm
:delay lda #timemsgtimer+5 ;delay 5 cycles
:norm sta msgtimer

 lda #0
 sta timerequest
]rts rts

:showsec
 lda SecLeft
 cmp #2
 bcc :nomsg

 lda message
 cmp #TimeMsg
 beq :2
 lda msgtimer
 bne ]rts
 lda #TimeMsg
 sta message
:2 lda #1
 sta timerequest
 lda #1
 sta msgtimer
 rts
:nomsg lda #0
 sta timerequest
 sta msgtimer
 rts

*-------------------------------
* Add lowering-gate sound (only when gate is visible)
* In: A = state
*-------------------------------
ADDLOWERSOUND
 lsr
 bcc ]rts ;alt frames

 lda level
 cmp #3
 bne :n
 lda trscrn
 cmp #2 ;Exception: Level 3, screen 2
 beq :y
:n lda trscrn
 cmp scrnLeft
 bne :1
 ldy trloc
 cpy #9
 beq :y
 cpy #19
 beq :y
 cpy #29
 beq :y ;visible to left
]rts rts

:1 cmp VisScrn
 bne ]rts
 ldy trloc
 cpy #9
 beq ]rts
 cpy #19
 beq ]rts
 cpy #29
 beq ]rts

:y lda #LoweringGate
 jmp addsound

*-------------------------------
*
* Remove object
*
* In: A = lastpotion
*
*-------------------------------
REMOVEOBJ
 sta lastpotion

 ldx #1
 stx clrbtn

 lda #floor
 sta (BlueType),y ;remove object
 lda #0
 sta (BlueSpec),y

 lda #35 ;TEMP
 sta height

 lda #2
 clc
 jsr markwipe
 jmp markred

*-------------------------------
*
*  S E T  I N I T I A L S
*
*  Set initial states of gadgets
*
*-------------------------------
SETINITIALS
 lda INFO ;number of screens +1
 sec
 sbc #1
 sta SCRNUM

:loop jsr DoScrn ;for every screen

 dec SCRNUM
 bne :loop
 rts

*-------------------------------
DoScrn
 lda SCRNUM
 jsr calcblue

 ldy #29

:loop jsr getinitobj
 bcc :skip
 sta (BlueSpec),y

:skip dey
 bpl :loop

 rts

*-------------------------------
*
*  S T A R T   K I D
*
*  Put kid in his starting position for this level
*
*-------------------------------
STARTKID
 lda level
 cmp #3
 bne :nomile

* Level 3 milestone?

:special3
 lda milestone ;set to 1 when he gets past 1st gate
 beq :nomile
 lda #-1
 sta KidStartFace
 lda #2
 sta KidStartScrn
 lda #6
 sta KidStartBlock ;put him just inside 1st gate...

 lda #7
 ldx #4
 ldy #0
 jsr rdblock
 lda #space
 sta (BlueType),y ;remove loose floor...
;& continue
:nomile
 lda KidStartScrn ;in INFO
 sta CharScrn

 lda KidStartBlock
 jsr unindex ;return A = blockx, X = blocky

 sta CharBlockX
 stx CharBlockY

 lda CharBlockX
 jsr getblockej
 clc
 adc #angle+7
 sta CharX ;put kid on starting block

 lda KidStartFace
 eor #$ff
 sta CharFace

 lda origstrength
 ldx level
 bne :notdemo
 lda #4
:notdemo sta MaxKidStr
 sta KidStrength

 do EditorDisk
 jmp :normal
 fin

 lda level
 cmp #1
 beq :special1
 cmp #13
 beq :special13
 bne :normal

* Special start for Level 1

:special1
 lda #5 ;scrn
 ldx #2 ;blockx
 ldy #0 ;blocky
 jsr rdblock
 jsr pushpp ;slam gate shut

 lda #stepfall
 jsr jumpseq
 jmp STARTKID1

* & for level 13

:special13
 lda #running
 jsr jumpseq
 jmp STARTKID1

* Normal start

:normal lda #turn
 jsr jumpseq ;start in standing posn

STARTKID1
 ldx CharBlockY
 lda FloorY+1,x
 sta CharY

 lda #-1
 sta CharLife ;ff = alive

 lda #0 ;kid
 sta CharID

 lda #0
 sta CharXVel
 sta CharYVel
 sta waitingtojump
 sta weightless
 sta invert
 sta jarabove
 sta droppedout
 sta CharSword
 sta offguard

:done jsr animchar ;get next frame

* WTLESS level only--kid falls into screen

 lda level
 cmp #7 ;WTLESS level
 bne :notsp

 lda yellowflag ;should be -
 bmi :yelok
 lda #$40
 sta timebomb ;2nd level copy protection
:yelok
 lda CharScrn
 cmp #17
 bne :notsp
 lda #3 ;down
 jsr cut
:notsp
 jmp SaveKid ;save KidVars

]rts rts

*-------------------------------
*
*  G R A V I T Y
*
*-------------------------------
TermVelocity = 33
AccelGravity = 3
WtlessTermVel = 4
WtlessGravity = 1

GRAVITY
 lda CharAction
 cmp #4
 bne ]rts

 lda weightless
 bne :wtless

 lda CharYVel
 clc
 adc #AccelGravity

 cmp #TermVelocity
 bcc :ok
 lda #TermVelocity

:ok sta CharYVel
]rts rts

:wtless lda CharYVel
 clc
 adc #WtlessGravity

 cmp #WtlessTermVel
 bcc :ok
 lda #WtlessTermVel
 bcs :ok

*-------------------------------
*
*  Add falling velocity
*
*-------------------------------
ADDFALL
 lda CharYVel
 clc
 adc CharY
 sta CharY

* X-vel

 lda CharAction
 cmp #4 ;freefall?
 bne ]rts

 lda CharXVel
 jsr addcharx
 sta CharX

 jmp rereadblocks

*-------------------------------
*
* Set initial guard posns for entire level (call once)
*
*-------------------------------
INITIALGUARDS
 ldy #24 ;screen #
:loop
 lda GdStartBlock-1,y
 cmp #30
 bcs :nogd
 jsr unindex ;A = blockx
 jsr getblockej
 clc
 adc #angle+7
 sta GdStartX-1,y
 lda #0
 sta GdStartSeqH-1,y

:nogd dey
 bne :loop
]rts rts

*-------------------------------
*
* Newly dead enemy--play music (or whatever)
*
* In: Char vars
*
*-------------------------------
DEADENEMY
 lda level
 beq :demo
 cmp #13
 beq :wingame

 lda CharID
 cmp #1
 beq ]rts ;shadow
 lda #s_Vict
 ldx #25
 jsr cuesong
]rts rts

:demo lda #1
 sta milestone ;start demo, part 2
 lda #0
 sta PreRecPtr
 sta PlayCount
 rts

:wingame lda #s_Upstairs
 ldx #25
 jsr cuesong

 lda #$ff ;white
 sta lightcolor
 lda #10
 sta lightning

 lda #1
 sta exitopen
 lda #4
 sta timerequest

 lda #24
 ldx #0
 ldy #0
 jsr rdblock
 jmp pushpp ;open exit

*-------------------------------
*  Mirror appears (called by MOVER when exit opened)
*-------------------------------
MIRAPPEAR
 do DemoDisk
 rts
 else

 lda level
 cmp #4
 bne ]rts

 lda #mirscrn
 ldx #mirx
 ldy #miry
 jsr rdblock
 lda #mirror
 sta (BlueType),y
 rts

 fin

*-------------------------------
 lst
 ds 1
 usr $a9,20,$400,*-org
 lst off