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
description: "This file contains key subroutines for Prince of Persia's gameplay and cinematic sequences, showcasing Jordan Mechner's mastery of 6502 assembly and memory-efficient programming for the Apple II."

summary:
  - point: "Bank-switched memory techniques to fit 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping animation traced from live-action footage"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Innovative cinematic storytelling in a platformer"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic Platformer"
  - point: "Efficient use of hardware-specific graphics routines"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Subroutines for gameplay mechanics like crumbling floors and torch animations"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"

enhancements:
  - id: "crumbling-floors-triggered-by-level-logic"
    line_start: 108
    line_end: 140
    title: "Crumbling Floors Triggered by Level Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The CRUMBLE subroutine handles a unique gameplay mechanic where floors crumble in specific levels and screens. The code checks if the player is in level 13 and on certain screens, then triggers blocks on the bottom row of the screen above to 'loosen.' This mechanic adds tension and urgency to the gameplay, forcing players to navigate carefully. The subroutine uses a loop to iterate through blocks and calls another routine, :trigloose, to determine if a block should break based on its state and a random number generator. In the late 1980s, the Apple II's limited memory and processing power demanded clever programming tricks to achieve dynamic gameplay. Mechner's use of level-specific logic and randomization was an efficient way to create variability without consuming excessive resources. The mechanic itself was inspired by platformers of the era but elevated by Mechner's cinematic approach to storytelling and gameplay. This technique influenced later games by demonstrating how environmental hazards could be tied to level-specific conditions, adding depth to platformers. Games like Another World and Flashback adopted similar ideas, using environmental storytelling and dynamic hazards to immerse players. The crumbling floor mechanic remains a staple in modern platformers, from indie titles to AAA productions."
  - id: "adding-torches-flasks-and-swords-to-list"
    line_start: 142
    line_end: 184
    title: "Adding Torches, Flasks, and Swords to List"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The ADDTORCHES subroutine scans the visible screen for specific objects—torches, flasks, and swords—and adds them to a 'trans list' for further processing. It uses indexed addressing to iterate through object types and calls separate routines (trigtorch, trigflask, trigsword) to handle each object. This modular approach simplifies the addition of new object types and ensures efficient processing. In 1989, object-oriented programming was still in its infancy, especially in assembly language. Mechner's approach to handling objects on the Apple II demonstrates a proto-object-oriented design, where specific routines are responsible for distinct object behaviors. This design philosophy allowed for extensibility and reusability, critical in a game with diverse interactive elements. The modular handling of objects influenced game development practices, particularly in the transition to higher-level languages like C and C++. Modern game engines, such as Unity and Unreal Engine, use similar principles to manage game objects and their interactions. Mechner's work laid the groundwork for these systems by showing how to organize and process game elements efficiently."
  - id: "pause-loop-for-timed-delays"
    line_start: 186
    line_end: 200
    title: "Pause Loop for Timed Delays"
    wikipedia_url: "https://en.wikipedia.org/wiki/6502"
    image_url: ""
    image_caption: ""
    content: "The PAUSE subroutine implements a simple delay mechanism by decrementing a counter in a nested loop. The input parameter specifies the length of the pause, and the routine uses the 6502's efficient decrement and branch instructions to create the delay. This technique was commonly used in assembly programming to synchronize events or create timed effects. On the Apple II, hardware timers were not always accessible or practical for game development, so software-based timing loops were a common solution. Mechner's implementation is straightforward but effective, leveraging the 6502's instruction set to minimize overhead. This approach influenced early game development, where precise timing was critical for animations and gameplay mechanics. While modern systems use hardware timers and high-level abstractions, the principles of synchronization and timing loops remain relevant, especially in embedded systems and retro game development."
  - id: "flash-effects-for-traumatic-incidents"
    line_start: 202
    line_end: 217
    title: "Flash Effects for Traumatic Incidents"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "DOFLASHON and DOFLASHOFF handle visual effects for traumatic incidents, such as lightning flashes. These routines interact with Apple II memory-mapped hardware registers to toggle between lo-res and hi-res graphics modes. The flash effect adds dramatic flair to gameplay moments, enhancing the cinematic experience. In the 1980s, hardware limitations required developers to exploit every available feature to create engaging visuals. Mechner's use of graphics mode switching demonstrates his deep understanding of the Apple II's capabilities. The effect is simple but impactful, aligning with the game's cinematic storytelling. This technique influenced later games by showcasing how hardware-specific tricks could enhance visual storytelling. Developers of games like Another World and Flashback adopted similar approaches, using hardware effects to heighten drama and immersion. The concept of tying visual effects to narrative events persists in modern games, where shaders and particle systems achieve similar results."
  - id: "adding-slicers-to-trans-list"
    line_start: 250
    line_end: 288
    title: "Adding Slicers to Trans List"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The ADDSLICERS subroutine identifies slicers (trap objects) on the current screen and adds them to a 'trans list' for processing. It uses indexed addressing to scan object data and checks the slicer's state before triggering it. The routine ensures that slicers in mid-slice are left untouched, maintaining gameplay consistency. Trap objects like slicers were a hallmark of Prince of Persia, adding tension and challenge to the platforming experience. Mechner's implementation balances efficiency and complexity, using state checks and modular routines to handle slicers dynamically. This approach influenced the design of interactive traps in later games, such as Tomb Raider and Uncharted. The concept of state-based object interaction became a standard practice, enabling developers to create dynamic and responsive environments."
  - id: "burning-torches-in-princess-room"
    line_start: 314
    line_end: 337
    title: "Burning Torches in Princess's Room"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The PBURN subroutine animates torches in the princess's room by cycling through their states and updating their positions. The routine uses indexed addressing to manage torch data and calls a separate routine, getflameframe, to determine the current animation frame. The torches contribute to the game's atmospheric visuals, enhancing the cinematic feel. Mechner's use of rotoscoping for character animation extended to environmental details like torches, creating a cohesive visual style. The Apple II's limited graphics capabilities required careful optimization, and PBURN demonstrates how Mechner maximized visual impact within these constraints. This technique influenced environmental animation in later games, where dynamic lighting and particle effects became standard. Games like Diablo and Skyrim use similar principles to create immersive environments, building on the foundation laid by Mechner's work."
  - id: "twinkling-stars-and-randomized-effects"
    line_start: 355
    line_end: 390
    title: "Twinkling Stars and Randomized Effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Random_number_generation"
    image_url: ""
    image_caption: ""
    content: "The PSTARS subroutine animates twinkling stars by decrementing counters for active stars and randomly generating new twinkles. The routine uses a random number generator to determine the duration and position of new twinkles, adding variability to the game's visuals. Randomized effects were a common technique in 1980s game development, used to create dynamic and unpredictable environments. Mechner's implementation is a simple yet effective way to enhance the game's atmosphere without taxing the Apple II's limited resources. This approach influenced the use of procedural generation in later games, such as Minecraft and No Man's Sky. Randomized effects remain a powerful tool for creating engaging and immersive experiences, building on the principles demonstrated in Prince of Persia."
  - id: "page-flipping-for-hires-graphics"
    line_start: 392
    line_end: 418
    title: "Page Flipping for Hi-Res Graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The PAGEFLIP subroutine toggles between two graphics pages to create smooth animations. It interacts with Apple II memory-mapped hardware registers to switch pages and enable hi-res graphics mode. This technique minimizes flickering and ensures seamless transitions between frames. Double buffering, as implemented here, was a critical technique for achieving smooth animations on hardware with limited processing power. Mechner's understanding of the Apple II's graphics capabilities allowed him to create a visually impressive game despite the constraints. This technique influenced the development of animation systems in later games, where double buffering became standard practice. Modern graphics engines use similar principles to manage frame rendering, ensuring smooth and responsive visuals."
  - id: "princess-scenes-and-self-modifying-code"
    line_start: 434
    line_end: 455
    title: "Princess Scenes and Self-Modifying Code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The PLAYCUT subroutine handles pre-recorded princess scenes, using self-modifying code to dynamically jump to the appropriate scene routine. It stores the low and high addresses of scene routines in separate tables and modifies the jump instruction at runtime based on the input parameter. Self-modifying code was a clever way to optimize performance on the Apple II, where memory and processing power were limited. Mechner's use of this technique demonstrates his ingenuity and deep understanding of assembly programming. This approach influenced the use of dynamic code generation in later systems, such as JIT compilers and runtime optimization techniques. While self-modifying code is less common today, its principles continue to inform modern programming practices."
  - id: "vjumpseq-character-jump-sequence"
    line_start: 1026
    line_end: 1033
    title: "The Jump Sequence That Saves State"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The `vjumpseq` subroutine handles character jump sequences by saving and restoring state using the stack (`PHA` and `PLA` instructions). It calls `LoadKid` to initialize the character, executes the jump sequence via `jumpseq`, and then saves the updated state with `SaveKid`. This approach ensures continuity in animation and gameplay, a critical feature for cinematic platformers. In the late 1980s, memory constraints on the Apple II required programmers to use the stack creatively, as direct memory access was limited. Mechner's use of stack manipulation reflects the ingenuity needed to create fluid gameplay on hardware with only 128KB of memory. This technique influenced later games that relied on state-saving mechanisms for complex animations and gameplay loops, such as Another World (1991)."
  - id: "startm8-character-initialization"
    line_start: 1042
    line_end: 1050
    title: "Positioning the Mouse for Cinematic Effect"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    image_url: ""
    image_caption: ""
    content: "The `startM8` subroutine initializes the mouse character's position and animation state. It sets the X-coordinate to 144 and calls `jumpseq` to start the animation. This is part of a broader effort to create a cinematic experience, where even minor characters like the mouse contribute to the game's storytelling. In the 1980s, cinematic platformers were a novel genre, and Mechner's attention to detail in character placement and animation helped define its aesthetic. The mouse's movements add realism and narrative depth, showcasing Mechner's commitment to storytelling through gameplay. This approach influenced later cinematic platformers, including Flashback (1992), which similarly emphasized environmental storytelling."
  - id: "demoprog1-self-running-demo"
    line_start: 1193
    line_end: 1201
    title: "The Self-Running Demo That Sold Games"
    wikipedia_url: "https://en.wikipedia.org/wiki/Demo_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The `DemoProg1` routine defines a sequence of movements for the game's self-running demo, including running, jumping pits, and grabbing ledges. These demos were crucial for attracting players in stores, where games were often displayed running on demo loops. Mechner's implementation uses a series of timed commands (`db` directives) to control the character's actions, showcasing gameplay mechanics and cinematic sequences. In the late 1980s, demos were a key marketing tool, especially for games like Prince of Persia that relied on visual appeal. This technique became standard in the industry, influencing demo systems in games like Doom (1993) and later console titles."
  - id: "showtime-final-minute-countdown"
    line_start: 1295
    line_end: 1367
    title: "The Countdown That Builds Tension"
    wikipedia_url: "https://en.wikipedia.org/wiki/Countdown"
    image_url: ""
    image_caption: ""
    content: "The `SHOWTIME` subroutine manages the display of time remaining, especially during the final minute of gameplay. It dynamically adjusts the display based on the player's actions and the game's state, creating a sense of urgency. This feature reflects Mechner's cinematic approach to game design, where tension is built through both narrative and mechanics. In the late 1980s, real-time countdowns were rare in games, as they required precise timing and state management. Mechner's implementation influenced later games that used countdowns to heighten drama, such as Resident Evil (1996)."
  - id: "gravity-physics-simulation"
    line_start: 1618
    line_end: 1644
    title: "Gravity on a 6502: Falling with Style"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The `GRAVITY` subroutine simulates the effects of gravity on the character's vertical velocity (`CharYVel`). It accounts for normal and weightless states, adjusting acceleration and terminal velocity accordingly. This routine is a cornerstone of Prince of Persia's realistic movement system, which was groundbreaking for its time. In 1989, physics simulation in games was still in its infancy, and Mechner's implementation on the limited 6502 processor was a technical feat. This approach influenced the development of physics engines in later games, including Tomb Raider (1996) and Half-Life (1998)."
  - id: "initialguards-dynamic-guard-placement"
    line_start: 1669
    line_end: 1690
    title: "Dynamic Guard Placement for Replayability"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "The `INITIALGUARDS` subroutine sets the initial positions of guards for each level. It dynamically calculates their positions based on predefined blocks and adjusts their states. This routine adds variability to gameplay, ensuring that encounters feel fresh and challenging. In the late 1980s, dynamic enemy placement was uncommon, as most games relied on fixed patterns. Mechner's approach added depth to Prince of Persia's gameplay, influencing AI and level design in later games like Metal Gear Solid (1998)."
  - id: "mirappear-mirror-appearance"
    line_start: 1740
    line_end: 1758
    title: "The Mirror That Reflects Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `MIRAPPEAR` subroutine handles the appearance of the mirror in level 4, a pivotal moment in the game's narrative. It sets the mirror's position and type, creating a dramatic visual effect. This sequence exemplifies Mechner's cinematic storytelling, where gameplay elements are tightly integrated with the narrative. The mirror's appearance is a memorable moment that has been cited as an inspiration for narrative-driven games like Ico (2001) and Shadow of the Colossus (2005)."

---

```asm
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
```