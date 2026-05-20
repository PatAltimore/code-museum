---
title: "MOVER.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/MOVER.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/MOVER.S"
year: 1989
author: "Jordan Mechner"
slug: "mover"
order: 6
description: "Implements the physics and object animation model for Prince of Persia, creating the game's signature realism and cinematic feel."

summary:
  - point: "Bank-switched memory techniques to fit within 128KB"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Object transition lists for dynamic animations"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Rotoscoping-inspired animation logic for lifelike movement"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Innovative use of timers for object state transitions"
    link: "https://en.wikipedia.org/wiki/Real-time_computing"
    link_label: "Real-time computing"
  - point: "Influence on cinematic platformers and modern game physics"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "search-object-in-transition-list"
    line_start: 97
    line_end: 119
    title: "How Objects Were Found in Motion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linked_list"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `searchtrob`, scans the transition list for an object based on its location and screen coordinates. The programmer, Jordan Mechner, needed a way to efficiently determine whether an object was already in motion or required new animation. The Apple II's limited memory and processing power demanded such optimizations. In 1989, most platformers used simpler, grid-based systems for object interactions, but Mechner's approach allowed for dynamic, lifelike animations. This technique influenced later games with complex object management systems, such as Another World (1991), which also emphasized cinematic realism."
  - id: "add-object-to-transition-list"
    line_start: 129
    line_end: 162
    title: "Adding Objects to the Animation Pipeline"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "The `addtrob` subroutine adds new objects to the transition list or updates their direction if already listed. This was crucial for handling animations like gates opening or spikes retracting. Mechner's design ensured that objects could dynamically change states without duplicating logic. At the time, this level of interactivity was groundbreaking, as most games relied on static animations. The ability to modify object states mid-animation paved the way for dynamic environments in games like Tomb Raider (1996), which featured similarly responsive objects."
  - id: "save-and-load-mob-data"
    line_start: 175
    line_end: 208
    title: "Saving and Loading Moving Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Serialization"
    image_url: ""
    image_caption: ""
    content: "The `savemob` and `loadmob` routines manage the storage and retrieval of moving object (MOB) data, including position, velocity, and type. This serialization-like approach allowed the game to track multiple objects across screens, a necessity given the Apple II's limited memory. Mechner's implementation ensured smooth transitions without losing object states, enabling seamless gameplay. This technique influenced later games with persistent object states, such as Diablo (1996), which relied heavily on saving and restoring dynamic entities."
  - id: "trigger-slicer-animation"
    line_start: 217
    line_end: 245
    title: "The Blade That Reacts to Timing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The `TRIGSLICER` subroutine initializes the slicer animation based on its current state. If the slicer is between slices, it triggers a new animation cycle. Mechner's use of state-based logic ensured that animations were context-sensitive, a departure from the rigid cycles seen in earlier games. This approach allowed for dramatic tension, as players had to time their movements carefully. The slicer's design influenced later games with reactive hazards, such as the moving saws in Super Meat Boy (2010)."
  - id: "dynamic-gate-animation"
    line_start: 832
    line_end: 896
    title: "How Gates Opened and Slammed Shut"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_physics"
    image_url: ""
    image_caption: ""
    content: "The `animgate` routine handles the animation of gates, including opening, closing, and jamming states. Mechner implemented velocity-based transitions, making gates feel weighted and realistic. This was a significant departure from the instant state changes seen in earlier platformers. Gates could pause, jam, or slam shut, adding a layer of unpredictability. This technique influenced modern game physics engines, such as those used in Half-Life 2 (2004), where objects interact dynamically with the environment."
  - id: "animate-pressplate-mechanics"
    line_start: 922
    line_end: 948
    title: "The Pressure Plate That Reacted"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mechanics_(game_design)"
    image_url: ""
    image_caption: ""
    content: "The `animplate` subroutine animates pressplates, ensuring they respond to player interaction. Mechner used timers to control how long a plate stayed depressed, adding tension to puzzles and traps. This mechanic was inspired by real-world physics and contributed to the game's immersive feel. Pressplates became a staple in puzzle-platformers, influencing games like Portal (2007), where player-triggered mechanisms are central to gameplay."
  - id: "animate-slicer-mechanics"
    line_start: 955
    line_end: 1015
    title: "The Deadly Rhythm of the Slicer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Timing_(game_design)"
    image_url: ""
    image_caption: ""
    content: "The `animslicer` routine animates the slicer hazard, advancing its frame based on a timer. Mechner's design ensured that slicers could react to player proximity, adding a layer of strategy. The slicer's rhythmic motion created a sense of danger and urgency, a hallmark of Prince of Persia's gameplay. This approach influenced later games with timing-based hazards, such as Celeste (2018), which uses similar mechanics to challenge players."
  - id: "animflask-frame-update"
    line_start: 1016
    line_end: 1041
    title: "How a Flask Gets Its Glow"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This routine animates the glowing flask, a collectible object in the game. It checks if the object is visible on the current screen and updates its animation frame based on its state. The programmer, Jordan Mechner, used bitwise operations to isolate potion and frame numbers, a clever optimization given the limited memory and processing power of the Apple IIe. In 1989, animating objects with such precision was rare in platformers, which often relied on simpler sprite cycling. Mechner's approach ensured the flask's glow felt dynamic and alive, adding to the game's cinematic realism. This technique influenced later games that sought to create immersive environments with animated collectibles."
  - id: "animsword-frame-update"
    line_start: 1037
    line_end: 1056
    title: "Randomizing a Sword's Gleam"
    wikipedia_url: "https://en.wikipedia.org/wiki/Random_number_generation"
    image_url: ""
    image_caption: ""
    content: "The animsword routine animates the gleaming sword by decrementing its state and introducing randomness to its frame transitions. Mechner uses a pseudo-random number generator to vary the sword's gleam, ensuring it doesn't feel mechanical or repetitive. This randomness was a subtle but effective way to make the game's world feel more organic. In the late 1980s, randomization in animations was uncommon in platformers, which often used fixed patterns. This technique later became a staple in games aiming for dynamic environments, influencing titles like Diablo and other games with procedurally generated elements."
  - id: "animtorch-flame-frame"
    line_start: 1063
    line_end: 1083
    title: "Animating a Torch's Flicker"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "This routine animates the flickering flame of a torch. It checks the torch's visibility on the screen and updates its state using the GETFLAMEFRAME subroutine. The flicker effect was achieved by cycling through predefined frames, giving the flame a lifelike quality. In the constrained environment of the Apple IIe, such attention to detail was rare. Mechner's use of frame cycling for dynamic effects influenced later games that sought to create atmospheric environments, such as the eerie lighting in Alone in the Dark."
  - id: "getflameframe-wraparound"
    line_start: 1084
    line_end: 1110
    title: "The Flame That Never Stops Burning"
    wikipedia_url: "https://en.wikipedia.org/wiki/Modulo_operation"
    image_url: ""
    image_caption: ""
    content: "GETFLAMEFRAME calculates the next frame for a torch's flame animation, ensuring it wraps around when reaching the last frame. The routine uses modulo-like logic to cycle through frames, a technique that avoids errors and keeps the animation seamless. In the era of 6502 assembly, implementing such logic efficiently was critical due to hardware constraints. Mechner's approach demonstrated how to achieve smooth animations without consuming excessive processing power. This method became a standard in games with looping animations, influencing titles like The Legend of Zelda."
  - id: "animspikes-timer-loop"
    line_start: 1119
    line_end: 1169
    title: "The Deadly Precision of Spikes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Timer"
    image_url: ""
    image_caption: ""
    content: "The animspikes routine controls the animation and timing of spikes, a key hazard in Prince of Persia. It transitions between states (extension, retraction, and ready) and uses a timer loop to manage delays. Mechner's design ensures the spikes feel predictable yet threatening, a hallmark of good platformer design. The use of timers to control hazards influenced later games, such as Super Mario Bros., where timing-based obstacles became a staple."
  - id: "animfloor-detach-and-fall"
    line_start: 1171
    line_end: 1236
    title: "When Floors Decide to Fall"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "This routine animates loose floors, which detach and fall when their timer reaches a maximum value. It transitions the object from 'loose floor' to 'empty space' and creates a new MOB (mobile object) to simulate the falling floor. Mechner's implementation of object transformation and dynamic creation was groundbreaking for its time, adding a sense of physical realism to the game. This technique influenced the development of physics engines in later games, such as Half-Life's use of dynamic objects."
  - id: "checkleft-piece-visibility"
    line_start: 1369
    line_end: 1410
    title: "Checking the Left Edge of the Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Visibility_(computing)"
    image_url: ""
    image_caption: ""
    content: "The checkleft routine determines whether a piece to the left of the current screen is visible. It uses comparisons and conditional logic to decide visibility, a crucial optimization in a game with limited memory. By only processing visible objects, Mechner reduced the computational load, ensuring smooth gameplay. This visibility-checking technique influenced later games with large, scrolling environments, such as Sonic the Hedgehog."
  - id: "animmobs-update-all-mobs"
    line_start: 1583
    line_end: 1635
    title: "Animating Every Falling Object"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "ANIMMOBS updates all mobile objects (MOBs), such as falling floors, by iterating through them and animating each one. It also checks for collisions, such as crushing the player character. Mechner's use of a loop to manage multiple objects was innovative in the constrained environment of the Apple IIe. This routine laid the groundwork for modern physics engines, where objects interact dynamically with the environment, influencing games like Portal."
  - id: "mobfloor-collision-detection"
    line_start: 1652
    line_end: 1751
    title: "The Floor That Falls and Collides"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The mobfloor routine animates falling floors and detects collisions with other objects or the ground. It handles scenarios such as landing on loose floors or crashing onto solid ground. Mechner's implementation of collision detection was ahead of its time, adding realism to the game's physics. This technique influenced later games with destructible environments, such as Red Faction."
  - id: "makerubble-transform-floor"
    line_start: 1830
    line_end: 1870
    title: "Turning Floors Into Rubble"
    wikipedia_url: "https://en.wikipedia.org/wiki/Destructible_environment"
    image_url: ""
    image_caption: ""
    content: "The makerubble routine transforms a floor piece into rubble after a collision. It checks the type of floor and handles special cases like pressplates. This ability to dynamically alter the environment was groundbreaking in 1989, adding depth to gameplay. Mechner's approach influenced games with destructible environments, such as Minecraft, where players can alter the world dynamically."
  - id: "floorpiece-visibility-check"
    line_start: 2001
    line_end: 2077
    title: "How to Check If a Floorpiece Is Visible"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section begins with a routine (ATM) that determines whether a floorpiece is visible on-screen. The code checks the vertical position (`moby`) and screen boundaries (`mobscrn`, `VisScrn`) to decide if the object is within the visible area. If the object is off-screen, it exits early (`RTS`). If visible, it calculates the block index (`getblocky`, `indexblock`) and marks affected buffers (`markfloor`, `markfred`) to update the game state. Finally, it sets the object's frame (`mobframe`) and jumps to `addmobobj` to add the object to the active table. In the mid-1980s, Apple II developers faced severe memory constraints, with only 128KB available and no dedicated graphics hardware. Jordan Mechner's solution was to use bank-switched memory and tightly optimized routines like this one to manage dynamic objects efficiently. The decision to trace rotoscoped animations onto blocks added realism but required precise handling of objects like falling floors. This approach influenced later games by demonstrating how cinematic realism could be achieved with limited resources. The concept of marking affected buffers and dynamically updating object tables became standard practice in physics engines, appearing in games like Another World and Flashback. Mechner's work directly inspired the cinematic platformer genre, which prioritized realistic movement and environmental interaction over arcade-style gameplay."
  - id: "add-object-to-table"
    line_start: 2079
    line_end: 2112
    title: "Adding Dynamic Objects to the Game Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The `addmobobj` routine inserts a dynamic object (MOB) into the game's object table. It increments the object index (`objX`), sets the object's type (`mobtype`), position (`mobx`, `moby`), and frame (`mobframe`), and initializes collision boundaries (`objCU`, `objCL`, `objCR`). This routine ensures that objects like falling floors are tracked and interact properly with the player and environment. In the late 1980s, object tables were a common way to manage dynamic entities in games. They allowed developers to track multiple objects efficiently, even on hardware with limited processing power like the Apple II. Mechner's implementation is notable for its simplicity and effectiveness, using minimal instructions to handle complex interactions. This technique laid the groundwork for modern object-oriented programming in games, where entities are managed as discrete objects with properties and behaviors. It influenced the design of physics engines in later games, including the Unreal Engine and Unity, which use similar principles to manage dynamic objects in 3D environments."
  - id: "shake-floors-dynamically"
    line_start: 2113
    line_end: 2147
    title: "Shaking Floors: A Dynamic Environmental Effect"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The `SHAKEM` and `SHAKEM1` routines implement dynamic floor shaking, triggered by environmental conditions. The code checks the level (`level`) and screen visibility (`VisScrn`) before iterating through blocks (`tempblockx`) to identify loose ones (`rdblock1`). If a loose block is found, it calls `shakeit` to initiate the shaking effect. Environmental effects like shaking floors were rare in platformers of the era, which typically relied on static levels. Mechner's decision to include dynamic interactions added a sense of realism and urgency to the gameplay. This was part of his broader goal to create a cinematic experience, inspired by films like Raiders of the Lost Ark. The concept of dynamic environmental effects influenced later games, particularly in the cinematic platformer genre. Games like Another World and Flashback expanded on this idea, incorporating dynamic lighting, weather, and destructible environments. Today, these effects are standard in AAA titles, where physics engines like Havok and PhysX handle complex interactions seamlessly."
  - id: "shake-loose-floor"
    line_start: 2149
    line_end: 2168
    title: "The Routine That Makes Floors Wiggle"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    image_url: ""
    image_caption: ""
    content: "The `shakeit` routine handles the animation and state change for loose floors. It checks the block's current state (`BlueSpec`) and exits if the block is already active or wiggling. Otherwise, it sets the block to a wiggling state (`$80`) and updates its screen position (`trscrn`) and direction (`trdirec`) before adding it to the transition list (`addtrob`). This routine exemplifies Mechner's attention to detail in creating a realistic game world. By adding subtle animations like wiggling floors, he enhanced the player's sense of immersion and anticipation. These effects were achieved despite the Apple II's limited graphical capabilities, showcasing Mechner's ingenuity in squeezing cinematic realism out of constrained hardware. The idea of animating environmental objects influenced later games, particularly in the cinematic platformer genre. Developers like Éric Chahi (Another World) and Delphine Software (Flashback) adopted similar techniques to create interactive and visually engaging worlds. Today, dynamic environmental animations are a staple of game design, appearing in titles like The Last of Us and Red Dead Redemption 2."

---

* mover
org = $ee00
PalaceEditor = 0
 tr on
 lst off
*-------------------------------
 org org

 jmp ANIMTRANS
 jmp TRIGSPIKES
 jmp PUSHPP
 jmp BREAKLOOSE1
 jmp BREAKLOOSE

 jmp ANIMMOBS
 jmp ADDMOBS
 jmp CLOSEEXIT
 jmp GETSPIKES
 jmp SHAKEM

 jmp TRIGSLICER
 jmp TRIGTORCH
 jmp GETFLAMEFRAME
 jmp SMASHMIRROR
 jmp JAMSPIKES

 jmp TRIGFLASK
 jmp GETFLASKFRAME
 jmp TRIGSWORD
 jmp JAMPP

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

 dum locals
state ds 1
temp1 ds 2
linkindex ds 1
pptype ds 1
mobframe ds 1
underFF ds 1
 dend

*-------------------------------
gatevel db 0,0,0,20,40,60,80,100,120

maxgatevel = *-gatevel-1

*-------------------------------
pptimer = 5 ;pressplate timer setting (min=3, max=30)
;(# cycles till plate pops up)

spiketimer = 15+128 ;spike timer setting (2-127) +128
;(# cycles till spikes retract)

slicetimer = 15 ;# cycles between slices

gatetimer = gmaxval+50 ;# cycles gate stays open

loosetimer = Ffalling ;# cycles till floor detaches

* falling floor params

wiggletime = 4 ;# wiggling frames
FFaccel = 3
FFtermvel = 29
crumbletime = 2 ;# crumbling frames
crumbletime2 = 10
disappeartime = 2
FFheight = 17
CrushDist = 30

* wipe heights

loosewipe = 31 ;[might erase spikes]
spikewipe = 31
slicerwipe = 63
platewipe = 16

gateinc db -1,4,4 ;for trdirec = 0,1,2 (down,up,upjam)

exitinc = 4
emaxval = 43*4

maxtr = trobspace-1
maxmob = mobspace-1

*-------------------------------
*
* Search trans list for object (trloc,trscrn)
*
* In: numtrans, trloc, trscrn
* Out: X = index, 0 if not listed
*
*-------------------------------
searchtrob
 ldx numtrans
 beq :rts

:loop lda trloc,x
 cmp trloc
 bne :next
 lda trscrn,x
 cmp trscrn
 beq :rts ;found it

:next dex
 bne :loop

:rts rts

*-------------------------------
*
*  Add a new object to transition list
*  If it's already listed, just change trdirec to new value
*
*  In: trdirec, trloc, trscrn
*
*-------------------------------
addtrob
 jsr searchtrob ;Is object already listed?

 cpx #0
 bne :chdir ;Yes--just change direc

* It's not on the list - add it

 ldx numtrans
 cpx #maxtr
 beq :rts ;too many objects--trigger fails

 inx
 stx numtrans

 lda trdirec
 sta trdirec,x
 lda trloc
 sta trloc,x
 lda trscrn
 sta trscrn,x
 rts

*  Object already listed - change direction

:chdir lda trdirec
 sta trdirec,x
:rts rts

*-------------------------------
*
*  Add a MOB to MOB list
*
*-------------------------------
addamob
 ldx nummob
 cpx #maxmob
 beq :rts

 inx
 stx nummob

 jmp savemob

:rts rts

*-------------------------------
*
*  S A V E / L O A D   M O B
*
*-------------------------------
savemob
 lda mobx
 sta mobx,x
 lda moby
 sta moby,x
 lda mobscrn
 sta mobscrn,x
 lda mobvel
 sta mobvel,x
 lda mobtype
 sta mobtype,x
 lda moblevel
 sta moblevel,x
 rts

loadmob
 lda mobx,x
 sta mobx
 lda moby,x
 sta moby
 lda mobscrn,x
 sta mobscrn
 lda mobvel,x
 sta mobvel
 lda mobtype,x
 sta mobtype
 lda moblevel,x
 sta moblevel
]rts rts

*-------------------------------
*
*  Trigger slicer
*
*  In: A = initial state
*
*-------------------------------
TRIGSLICER
 sta state ;temp

 lda (BlueSpec),y
 beq :ok
 cmp #slicerRet
 bcc ]rts ;in mid-slice--don't interfere

* Between slices--OK to trigger

:ok sty trloc

 lda state
 sta (BlueSpec),y

 lda VisScrn
 sta trscrn

 lda #1
 sta trdirec

 jmp addtrob ;add slicer to trans list

*-------------------------------
*
* Close exit
* (Open it all the way & let it slam shut)
*
*-------------------------------
CLOSEEXIT
 sty trloc
 sta trscrn

 lda #emaxval ;all the way open
 sta (BlueSpec),y

 lda #3 ;coming down fast
 sta trdirec

 jmp addtrob ;add to trans list

*-------------------------------
SMASHMIRROR
 lda #86
 sta (BlueSpec),y
]rts rts

*-------------------------------
*
* Trigger flask
*
*-------------------------------
TRIGFLASK
 sty trloc
 sta trscrn

 lda #1
 sta trdirec

* Get rnd starting frame

 jsr rnd
 and #7
 ora (BlueSpec),y
 sta (BlueSpec),y
 jmp addtrob

*-------------------------------
*
* Trigger sword
*
*-------------------------------
TRIGSWORD
 sty trloc
 sta trscrn
 lda #1
 sta trdirec
 jsr rnd
 and #$1f
 sta (BlueSpec),y
 jmp addtrob

*-------------------------------
*
* Trigger torch
*
*-------------------------------
TRIGTORCH
 sty trloc
 sta trscrn

 lda #1
 sta trdirec

* Get rnd starting frame

 jsr rnd
 and #$f
 sta (BlueSpec),y
 jmp addtrob

*-------------------------------
*
*  Trigger spikes
*
*-------------------------------
TRIGSPIKES
 lda (BlueSpec),y
 beq :ready ;State = 0: spikes are fully retracted--
;spring 'em
 bpl ]rts ;Nonzero, hibit clear: spikes are in motion
 cmp #$ff
 beq ]rts ;jammed
 lda #spiketimer ;Nonzero, hibit set: spikes are fully
 sta (BlueSpec),y ;extended--reset timer to max value
]rts rts
;Spring spikes
:ready ldx #1
]cont stx trdirec
 sty trloc

 lda tempscrn ;from rdblock
 sta trscrn

 jsr addtrob ;add spikes to trans list
 jsr redspikes

 lda #GateDown ;TEMP
 jmp addsound

*-------------------------------
*
* Jam spikes (& remove from trans list)
*
* In: Same as TRIGSPIKES
*
*-------------------------------
JAMSPIKES
 lda #$ff
 sta (BlueSpec),y
 ldx #-1 ;stop object
 bmi ]cont

*-------------------------------
*
* Get spike status: 0 = safe, 1 = sprung, 2 = springing
*
*-------------------------------
GETSPIKES
 lda (BlueSpec),y
 bmi :sprung
 beq :safe ;fully retracted

 cmp #spikeExt
 bcc :springing

:safe lda #0 ;safe: retracted or retracting
 rts

:sprung cmp #$ff ;jammed (body impaled on them)?
 beq :safe
 lda #1
 rts

:springing lda #2
]rts rts

*-------------------------------
*
*  Break off section of loose floor
*
*-------------------------------
BREAKLOOSE
 lda #1

BREAKLOOSE1 ;in: A = initial state
 sta state

 lda (BlueType),y
 and #reqmask ;required floorpiece?
 bne ]rts ;yes--blocked below

 lda (BlueSpec),y
 bmi :ok ;wiggling
 bne ]rts ;already triggered

:ok lda state
 sta (BlueSpec),y

 sty trloc

 lda tempscrn ;from rdblock
 sta trscrn

 lda #0 ;down
 sta trdirec

 jsr addtrob ;add floor to trans list
 jmp redloose

*-------------------------------
*
*  Depress pressplate
*
*  In: results of RDBLOCK
*     (tempblockx-y, tempscrn refer to pressplate)
*
*-------------------------------
PUSHPP
 lda (BlueType),y
 and #idmask
 sta pptype ;pressplate/upressplate/rubble
pushpp1
 lda (BlueSpec),y ;LINKLOC index
 sta linkindex
 tax
 jsr gettimer

 cmp #31
 beq ]rts ;plate is permanently down

 cmp #2
 bcs :starttimer ;plate is temporarily down--
;just restart timer

*  Fresh plate has been stepped on--reset timer

 lda #pptimer ;put plate down for the count
 jsr chgtimer

 sty trloc

 lda tempscrn ;from rdblock1
 sta trscrn

 lda #1
 sta trdirec

 jsr addtrob ;add to trans list

 jsr redplate ;add plate to redraw list

 lda #1
 sta alertguard
 lda #PlateDown
 jsr addsound

:trig jmp trigger ;trigger something?

* plate is already down--just restart timer
* (& retrigger gates)

:starttimer lda #pptimer
 jsr chgtimer
 jmp :trig

*-------------------------------
*
* Jam pressplate (dead weight)
*
* In: Same as PUSHPP
*
*-------------------------------
JAMPP
 lda (BlueType),y
 and #idmask
 sta pptype
 cmp #pressplate
 beq :1

 lda #floor
 sta (BlueType),y
 lda #0
 sta (BlueSpec),y
 lda #rubble
 sta pptype
 bne pushpp1

:1 lda #dpressplate
 sta (BlueType),y
 bne pushpp1

*-------------------------------
*
*  We just pushed a pressplate -- did we trigger something?
*
*  In: linkindex, pptype
*
*-------------------------------
trigger
:loop ldx linkindex

 lda LINKLOC,x
 cmp #$ff
 beq :rts ;linked to nothing

 jsr getloc
 sta trloc

 jsr getscrn ;get block # and screen # of
 sta trscrn ;gadget to trigger

 jsr calcblue
 ldy trloc
 lda (BlueType),y
 and #idmask ;get objid into A

 jsr trigobj ;call appropriate trigger routine

 lda trdirec
 bmi :skip ;trigger fails

 jsr addtrob ;add gadget to transition list

:skip ldx linkindex
 inc linkindex

 jsr getlastflag
 beq :loop

:rts rts

*-------------------------------
*
*  Trigger object
*
*  Out: trdirec (-1 if trigger fails)
*
*-------------------------------
trigobj
 cmp #gate
 bne :1
 jmp triggate
:1
 cmp #exit
 bne :2
 jmp openexit
:2
]rts rts

*-------------------------------
*
* Open exit
*
*-------------------------------
openexit
 lda (BlueSpec),y
 bne :fail ;Exit can only open, not close

 lda #1
 bpl :1

:fail lda #-1
:1 sta trdirec
 rts

*-------------------------------
*
*  Trigger gate
*
*  In: BlueSpec, Y, pptype
*  Out: trdirec
*
*-------------------------------
triggate
 lda (BlueSpec),y ;current gate position

 ldx pptype
 cpx #upressplate
 beq :raise
 cpx #rubble
 beq :jam

* Lower gate

:lower cmp #gminval ;at bottom?
 bne :yeslower ;no--lower it
;yes--trigger fails
:fail jmp stopobj

:yeslower
 lda #3 ;down fast
 sta trdirec
 rts

:jam ldx #2 ;open & jam
 stx trdirec
 cmp #gmaxval
 bcc :1
 lda #$ff ;"jammed open" state
 bmi :3

:raise ldx #1 ;open
 stx trdirec
 cmp #$ff
 beq :fail ;jammed
 cmp #gmaxval
 bcc :1
 lda #gatetimer
:3 sta (BlueSpec),y ;reset timer
 bne :fail
:1
]rts rts

*-------------------------------
*
*  Animate transitional objects
*  (Advance each object to next frame in animation table)
*
*-------------------------------
]cleanflag ds 1

ANIMTRANS
 lda #0
 sta trobcount

 ldx numtrans ;# objs in trans (0-maxtr)
 beq ]rts

 lda #0
 sta ]cleanflag

:loop stx tempnt

 jsr animobj ;animate obj #x

 ldx tempnt

 lda trdirec ;has object stopped?
 bpl :1 ;no

 lda #-1 ;yes--mark it for deletion
 sta ]cleanflag ;& set cleanup flag

:1 sta trdirec,x ;save direction change if any

 dex
 bne :loop

 lda ]cleanflag
 beq ]rts

*  Delete all stopped objects (trdirec = ff)
*  (i.e., copy entire list back onto
*  itself, omitting stopped objects)

 ldx #1 ;source index (assume numtrans > 0)
 ldy #0 ;dest index

:dloop lda trdirec,x
 cmp #$ff
 beq :next

 iny
 sta trdirec,y
 lda trloc,x
 sta trloc,y
 lda trscrn,x ;source
 sta trscrn,y ;dest

:next inx

 cpx numtrans
 bcc :dloop
 beq :dloop

 sty numtrans
 rts

*-------------------------------
*
*  Animate TROB #x
*
*-------------------------------
animobj lda trloc,x
 sta trloc
 lda trscrn,x
 sta trscrn
 lda trdirec,x
 sta trdirec

* Find out what kind of object it is

 lda trscrn
 jsr calcblue

 ldy trloc
 lda (BlueSpec),y
 sta state ;original state

 lda (BlueType),y
 and #idmask ;objid

* and branch to appropriate subroutine

 cmp #torch
 bne :1
 jsr animtorch
 jmp :done

:1 cmp #upressplate
 beq :plate
 cmp #pressplate
 bne :2
:plate jsr animplate
 jmp :done

:2 cmp #spikes
 bne :3
 jsr animspikes
 jmp :done

:3 cmp #loose
 bne :31
 jsr animfloor
 jmp :done

:31 cmp #space ;(loose floor turns into space)
 bne :4
 jsr animspace
 jmp :done

:4 cmp #slicer
 bne :5
 jsr animslicer
 jmp :done

:5 cmp #gate
 bne :6
 jsr animgate
 jmp :done

:6 cmp #exit
 bne :7
 jsr animexit
 jmp :done

:7 cmp #flask
 bne :8
 jsr animflask
 jmp :done

:8 cmp #sword
 bne :9
 jsr animsword
 jmp :done

:9 jsr stopobj ;obj is none of these--purge it from trans list!

:done lda state
 ldy trloc
 sta (BlueSpec),y

:rts rts

*-------------------------------
*
* Animate exit
*
*-------------------------------
animexit
 ldx trdirec
 bmi :cont
 cpx #3
 bcs :downfast ;>= 3: coming down fast

 lda #RaisingExit
 jsr addsound

 lda state
 clc
 adc #exitinc
 sta state

 cmp #emaxval
 bcs :stop

:cont jmp redexit

:stop jsr stopobj

 lda #GateDown
 jsr addsound
 lda #s_Stairs
 ldx #15
 jsr cuesong
 lda #1
 sta exitopen
 jsr mirappear
 jmp :cont

* Exit coming down fast

:downfast
 cpx #maxgatevel
 bcs :2
 inx
 stx trdirec
:2 lda state
 sec
 sbc gatevel,x
 sta state
 beq :cont
 bcs :cont

 jsr stopobj

 lda #0
 sta state

 lda #GateSlam
 jsr addsound

 jmp :cont

*-------------------------------
*
*  Animate gate
*
*-------------------------------
animgate
 ldx trdirec
 bmi :cont ;gate has stopped

 cpx #3 ;trdirec >= 3: coming down fast
 bcs :downfast

 lda state
 cmp #$ff
 beq :stop ;jammed open
 clc
 adc gateinc,x
 sta state

 cpx #0
 beq :goingdown

 cmp #gmaxval
 bcs :attop ;stop at top

 lda #RaisingGate
 jsr addsound

 jmp :cont

:goingdown
 cmp #gminval
 beq :stop
 bcc :stop

 cmp #gmaxval
 bcs :cont ;at top
 jsr addlowersound

:cont jmp redgate ;mark gate for redrawing

:stop jsr stopobj

 lda #GateDown
 jsr addsound

 jmp :cont

* Gate has reached top
* trdirec = 1: pause, then start to close again
* trdirec = 2: jam at top

:attop
 cpx #2
 bcc :tr1
 lda #$ff ;jammed-open value
 sta state
 jmp :stop

:tr1 lda #gatetimer
 sta state

 lda #0 ;down
 sta trdirec
]rts rts

* Down fast

:downfast
 cpx #maxgatevel
 bcs :2

 inx
 stx trdirec ;trdirec is velocity index
:2
 lda state
 sec
 sbc gatevel,x
 sta state
 beq :cont
 bcs :cont

 lda #0
 sta state
 jsr stopobj

 lda #GateSlam
 jsr addsound
 jmp :cont

*-------------------------------
*
*  Animate pressplate
*
*-------------------------------
animplate
 ldx trdirec
 bmi ]rts

 lda state
 tax
 jsr gettimer
 sec
 sbc #1
 pha
 jsr chgtimer
 pla
 cmp #2
 bcs ]rts ;timer stops at t=1

 lda #PlateUp
 jsr addsound

 jsr stopobj

 jmp redplate ;add obj to redraw buffer
]rts rts

*-------------------------------
*
*  Animate slicer
*
*-------------------------------
animslicer
 ldx trdirec
 bmi :done

 lda state
 tax
 and #$80
 sta state ;preserve hibit
 txa
 and #$7f
 clc
 adc #1
 cmp #slicetimer+1
 bcc :1
 lda #1 ;wrap around
:1 ora state
 sta state
 and #$7f ;next frame #
 cmp #slicerExt
 bne :2

 lda #JawsClash
 jsr addsound

:2 lda trscrn
 cmp VisScrn ;is slicer on visible screen?
 bne :os ;no

 lda trloc
 jsr unindex
 cpx KidBlockY ;on same level as kid?
 bne :os ;no

 lda KidLife
 bmi :done
 ;If kid is dead, stop all unbloodied slicers
 lda state
 and #$80
 bne :done

* As soon as slicer is retracted, purge it from trans list

:os lda state
 and #$7f
 cmp #slicerRet
 bcc :done

:purge jsr stopobj

:done lda state
 and #$7f
 cmp #slicerRet ;retracted?
 bcs ]rts ;yes--don't bother to redraw

 jmp redslicer

*-------------------------------
*
* Animate flask
*
*-------------------------------
animflask
 ldx trdirec
 bmi ]rts

 lda trscrn
 cmp VisScrn
 bne :purge

 lda state
 and #%11100000 ;potion #
 sta temp1
 lda state
 and #%00011111 ;frame #
 jsr GETFLASKFRAME
 ora temp1
 sta state

 jmp redflask
]purge
:purge jmp stopobj

*-------------------------------
*
* Animate gleaming sword
*
*-------------------------------
animsword
 lda trscrn
 cmp VisScrn
 bne ]purge

 dec state
 bne :1
 jsr rnd
 and #$3f
 clc
 adc #40
 sta state

:1 jmp redsword
]rts rts

*-------------------------------
*
* Animate torch
*
*-------------------------------
animtorch
 ldx trdirec
 bmi ]rts

 lda trscrn
 cmp VisScrn
 bne ]purge

 lda state
 jsr GETFLAMEFRAME
 sta state

 jmp redtorch

*-------------------------------
*
* Get flame frame
*
* In/out: A = state
*
*-------------------------------
GETFLAMEFRAME
 sta state

 jsr rnd

 cmp state
 beq :2
 cmp #torchLast+1
 bcc :1

 lda state
:2 clc
 adc #1
 cmp #torchLast+1
 bcc :1

 lda #0 ;wrap around
:1
]rts rts

*-------------------------------
*
* Get flask frame
*
* In/out: A = state (low 5 bits)
*
*-------------------------------
GETFLASKFRAME
 clc
 adc #1
 cmp #bubbLast+1
 bcc ]rts
 lda #1
]rts rts

*-------------------------------
*
* Animate spikes
*
*-------------------------------
animspikes
 ldx trdirec
 bmi :done

 lda state
 bmi :timerloop ;Hibit set: remaining 7 bits
 ;represent timer value

* Hibit clear: remaining 7 bits represent BGDATA frame #

 inc state

 cmp #spikeExt ;is extension complete?
 beq :starttimer ;yes--start timer

 cmp #spikeRet ;is retraction complete?
 bne :done ;not yet

 lda #0
 sta state ;yes--reset to "ready" state

 jsr stopobj

:done jmp redspikes

* Spike timer loop

:starttimer
 lda #spiketimer
 sta state

 bne :done

:timerloop
 dec state

 lda state
 and #$7f
 bne :rts
;Time's up
 lda #spikeExt+1 ;First "retracting" frame
 sta state

 bne :done
:rts
]rts rts

*-------------------------------
*
* Animate loose floor
*
*-------------------------------
animfloor
 ldx trdirec
 bmi :red

* When timer reaches max value & loose floor detaches:
*  (1)  Change objid from "loose floor" to "empty space"
*  (2)  Create a MOB to take over where TROB stopped

 inc state

 lda state
 bmi :wiggle ;floor is only wiggling

 cmp #loosetimer
 bcc :red

* Timer has reached max value--detach floor

 jsr makespace
 sta state

 jsr stopobj

* and create new MOB

 lda trloc
 jsr unindex

 asl
 asl  ;x4
 sta mobx
 stx moblevel

 lda BlockBot+1,x
 sta moby

 lda trscrn
 sta mobscrn

 lda #0
 sta mobvel
 sta mobtype

 jsr addamob

:red jmp redloose

* Floor is only wiggling

:wiggle ldx level
 cpx #13
 beq ]rts

 cmp #wiggletime+$80
 bcc :red

 lda #0
 sta state
 jsr stopobj ;stop wiggling

 jmp :red

animspace jsr stopobj
 jmp redloose

*-------------------------------
*
*  Stop object (set trdirec = -1)
*
*-------------------------------
stopobj lda #-1
 sta trdirec
 rts

*-------------------------------
* General redraw-object routine
*-------------------------------
redtrobj
 jsr check
 lda #2
 jsr markred
 jsr markwipe
 jsr checkright
 lda #2
 jsr markred
 jmp markwipe

*-------------------------------
* redraw torch/exit
*-------------------------------
redexit
redtorch
 jsr checkright
 lda #2
 jmp markmove

*-------------------------------
* redraw flask/sword
*-------------------------------
redsword
redflask
 jsr check
 lda #2
 jmp markmove

*-------------------------------
* redraw loose floor
*-------------------------------
redloose
 inc trobcount
 lda #loosewipe
 sta height
 jmp redtrobj

*-------------------------------
* redraw gate
*-------------------------------
redgate
 jsr checkright ;mark piece to right of gate
 lda #2
 jsr markmove
 jsr markfred
 jsr checkabover ;& piece to right of gate panel
 lda #2
 jmp markmove

*-------------------------------
* redraw spikes
*-------------------------------
redspikes
 inc trobcount
 lda #spikewipe
 sta height
 jmp redtrobj

*-------------------------------
* redraw slicer
*-------------------------------
redslicer
 inc trobcount
 lda #slicerwipe
 sta height
 jsr check
 lda #2
 jsr markred
 jmp markwipe

*-------------------------------
* redraw pressplate
*-------------------------------
redplate
 lda #platewipe
 sta height
 jmp redtrobj

*-------------------------------
*
*  Before marking a piece in redraw buffer,
*  check whether it's visible.
*
*  If piece is visible onscreen:
*    return with carry clear, y = redbuf index
*  If piece is not visible:
*    return with carry set
*
*-------------------------------
]no ldy #30
 sec
]rts rts

]above cmp scrnAbove
 bne ]rts

 lda trloc
 sec
 sbc #20 ;if on top row, return 0-9 and cs
 tay

 sec
 rts

*-------------------------------
*  Check (trscrn, trloc)
*-------------------------------
check
 lda trscrn
 cmp VisScrn
 bne ]above

 ldy trloc
 cpy #30 ;i.e., "clc"
 rts

*-------------------------------
*  Check piece to left of (trscrn,trloc)
*-------------------------------
checkleft
 lda trscrn
 cmp VisScrn
 bne :notonscrn
;piece is on this screen
 cpy #0
 beq ]no
 cpy #10
 beq ]no
 cpy #20
 beq ]no
;yes--piece is visible
 dey
 clc
 rts

:notonscrn
 cmp scrnRight
 bne ]above
;piece is on screen to right
 ldy trloc
 cpy #0
 beq :yesr
 cpy #10
 beq :yesr
 cpy #20
 bne :yesr

:yesr tya
 clc
 adc #9 ;mark corresponding right-edge piece
 tay ;on this screen

 clc
 rts

*-------------------------------
*  Check piece to right of (trscrn,trloc)
*-------------------------------
checkright
 lda trscrn
 cmp VisScrn
 bne :notonscrn
;piece is on this screen
 ldy trloc
 cpy #9
 beq ]no

 cpy #19
 beq ]no

 cpy #29
 beq ]no
;yes
 iny
 clc
 rts

:notonscrn
 cmp scrnLeft
 bne ]above
;piece is on screen to left
 ldy trloc
 cpy #9
 beq :yesl

 cpy #19
 beq :yesl

 cpy #29
 bne ]no

:yesl tya
 sec
 sbc #9 ;mark corresponding left-edge piece
 tay ;on this screen

 clc
 rts

]no ldy #30
 sec
]rts rts

*-------------------------------
*  Check piece above & to right of (trscrn,trloc)
*-------------------------------
checkabover
 lda trscrn
 cmp VisScrn
 bne :notonscrn
;piece is on this screen
 ldy trloc
 cpy #10
 bcc :above ;piece is on top row

 cpy #19
 beq ]no

 cpy #29
 beq ]no
;yes
 tya
 sec
 sbc #9
 tay

 clc
 rts

:above
 iny
 sec
 rts

:notonscrn
 cmp scrnLeft
 bne :notonleft
;piece is on screen to left
 ldy trloc
 cpy #9
 beq :yes0

 cpy #19
 beq :yesl

 cpy #29
 bne ]no

:yesl tya
 sec
 sbc #19 ;mark corresponding left-edge piece
 tay ;on this screen

 clc
 rts

:yes0 ldy #0
 sec
 rts

:notonleft
 cmp scrnBelow
 bne :notbelow
;piece is on screen below
 ldy trloc
 cpy #9
 bcs ]no
;yes--piece is on top row
 tya
 clc
 adc #21
 tay

 clc
 rts

:notbelow
 cmp scrnBelowL
 bne ]rts
 ;piece is on scrn below & to left
 ldy trloc
 cpy #9
 bne ]no
;yes--piece is in u.r.
 ldy #20
 clc
 rts

*-------------------------------
*
*  Extract information from LINKLOC/LINKMAP
*
*  In: X = linkindex
*  Out: A = info
*
*-------------------------------
gettimer
 lda LINKMAP,x
 and #%00011111 ;pressplate timer (0-31)
 rts
chgtimer ;In: A = new timer setting
 and #%00011111
 sta temp1
 lda LINKMAP,x
 and #%11100000
 ora temp1
 sta LINKMAP,x
 rts
getloc
 lda LINKLOC,x
 and #%00011111 ;screen posn (0-29)
 rts
getlastflag
 lda LINKLOC,x
 and #%10000000 ;last-entry flag (0-1)
 rts
getscrn
 lda LINKLOC,x
 and #%01100000 ;low 2 bits
 lsr
 lsr
 sta temp1
 lda LINKMAP,x
 and #%11100000 ;high 3 bits
 adc temp1
 lsr
 lsr
 lsr ;Result: screen # (0-31)
]rts rts

*-------------------------------
*
*  Update all MOBs (falling floors)
*
*-------------------------------
ANIMMOBS
 ldx nummob ;# MOBs in motion (0-maxmob)
 beq ]rts

:loop stx tempnt
 jsr loadmob

 jsr animmob ;animate MOB #x

 jsr checkcrush ;did we just crush a character?

 ldx tempnt
 jsr savemob

 dex
 bne :loop

* Delete MOBs that have ceased to exist

 ldx #1 ;source index (assume nummob > 0)
 ldy #0 ;dest index

:dloop lda mobvel,x
 cmp #$ff
 beq :next

 iny
 sta mobvel,y
 lda mobx,x ;source
 sta mobx,y ;dest
 lda moby,x
 sta moby,y
 lda mobscrn,x
 sta mobscrn,y
 lda mobtype,x
 sta mobtype,y
 lda moblevel,x
 sta moblevel,y

:next inx

 cpx nummob
 bcc :dloop
 beq :dloop

 sty nummob

]rts rts

*-------------------------------
*
*   Animate MOB #x
*
*-------------------------------
animmob
 lda mobtype
 bne :done
 jsr mobfloor
:done
 lda mobvel
 bpl ]rts ;is object stopping?
 inc mobvel ;yes
]rts rts

*-------------------------------
*
*  Animate falling floor
*
*-------------------------------
mobfloor
 lda mobvel
 bmi ]rts
:ok1
 cmp #FFtermvel
 bcs :tv
 clc
 adc #FFaccel
 sta mobvel

:tv clc
 adc moby
 sta moby

* check for collision w/floor

 ldx mobscrn ;on null screen?
 beq :null ;yes--fall on

 cmp #-30 ;negative?
 bcs :fallon ;yes--fall on

 ldx moblevel
 cmp BlockAy+1,x
 bcc :fallon

* Passing thru floor plane--what to do?
* First see what's there

 ldx moblevel
 stx tempblocky

 lda mobx
 lsr
 lsr
 sta tempblockx

 lda mobscrn
 sta tempscrn

 jsr rdblock1 ;A = objid
 sta underFF ;under falling floor

 cmp #space
 beq :passthru

 cmp #loose
 bne :crash

* Lands on loose floor
* Knock out loose floor & continue

 jsr knockloose

 jmp :passthru

* Lands on solid floor

:crash
 lda #LooseCrash
 jsr addsound

 lda mobscrn
 sta tempscrn
 lda moblevel
 sta tempblocky
 jsr SHAKEM1 ;shake loose floors

 ldx moblevel
 lda BlockAy+1,x
 sta moby

 lda #-crumbletime
 sta mobvel

 jmp makerubble

* Passes thru floor plane

:passthru
 jsr passthru
:fallon
]rts rts

* Falling on null screen

:null
 lda moby
 cmp #192+17
 bcc ]rts
;MOB has fallen off null screen--delete it
 lda #-disappeartime
 sta mobvel

]rts rts

*-------------------------------
* Knock out loose floor
*-------------------------------
knockloose
 jsr makespace
 sta (BlueSpec),y

 lda mobvel
 lsr
 sta mobvel

 ldx tempnt
 jsr savemob ;save this MOB

* Create new MOB (add'l falling floor)

 lda moby
 clc
 adc #6
 sta moby

 jsr passthru

 jsr addamob

* Retrieve old MOB

 ldx tempnt
 jsr loadmob

 jmp markmob

*-------------------------------
* Make space
* Return A = BlueSpec
*-------------------------------
makespace lda #space ;change objid to empty space
 sta (BlueType),y

 do PalaceEditor
 lda #1
 rts
 fin

 lda #0
 ldx BGset1
 cpx #1 ;pal?
 bne ]rts
 lda #1 ;stripe
]rts rts

*-------------------------------
* Pass thru floor plane
*-------------------------------
passthru
 inc moblevel

 lda moblevel
 cmp #3
 bcc ]rts

* ... and onto next screen
* (NOTE: moby may be negative)

 lda moby
 sec
 sbc #192
 sta moby

 lda #0
 sta moblevel

 lda mobscrn
 jsr getdown
 sta mobscrn
]rts rts

*-------------------------------
* Delete MOB & change objid of floorpiece it landed on
* If pressplate, trigger before reducing it to rubble
*-------------------------------
makerubble
 lda moblevel
 sta tempblocky

 lda mobx
 lsr
 lsr
 sta tempblockx

 lda mobscrn
 sta tempscrn

 jsr rdblock1

 cmp #pressplate
 beq :pp
 cmp #upressplate
 beq :jampp
 cmp #floor
 beq :notpp
 cmp #spikes
 beq :notpp
 cmp #flask
 beq :notpp
 cmp #torch
 beq :notpp
 bne ]rts ;can't transform this piece into rubble

:jampp lda #rubble
 sta (BlueType),y

:pp jsr PUSHPP ;block lands on pressplate--
 jsr rdblock1 ;crush pp & jam open all gates

:notpp lda #rubble
 sta (BlueType),y
 jmp markmob

*-------------------------------
* Mark MOB
*-------------------------------
markmob
 lda mobscrn
 cmp VisScrn
 bne ]rts

 lda #loosewipe
 sta height

 jsr indexblock
 lda #2
 jsr markred
 jsr markwipe

 inc tempblockx

 jsr indexblock
 lda #2
 jsr markred
 jsr markfred
 jmp markwipe

]rts rts

*-------------------------------
*
*  Did falling floor crush anybody?
*
*-------------------------------
checkcrush
 jsr LoadKid
 jsr chcrush1 ;return cs if crush
 bcc ]rts
 jsr crushchar
 jmp SaveKid

chcrush1
 lda mobscrn
 cmp CharScrn ;on same screen as char?
 bne :no

 lda mobx
 lsr
 lsr
 cmp CharBlockX ;same blockx?
 bne :no

 lda moby
 cmp CharY
 bcs :no ;mob is below char altogether

 lda CharY
 sec
 sbc #CrushDist
 cmp moby
 bcs :no
 sec ;crush!
 rts

:no clc
]rts rts

*-------------------------------
*
*  Crush char with falling block
*  (Ordered by ANIMMOB)
*
*-------------------------------
crushchar
 lda level
 cmp #13
 beq :1
 lda CharPosn
 cmp #5
 bcc :1
 cmp #15
 bcc ]rts ;running-->escape

:1 lda CharAction
 cmp #2
 bcc :ground
 cmp #7
 bne ]rts

* Action code 0,1,7 -- on ground

:ground
 ldx CharBlockY
 inx
 lda FloorY,x
 sta CharY ;align w/floor

 lda #1
 jsr decstr
 beq :kill

 lda CharPosn
 cmp #109
 beq ]rts
 lda #crush
 jmp jumpseq

:kill lda #hardland ;temp
 jmp jumpseq

*-------------------------------
*
*  Add all visible MOBs to object table (to be drawn later)
*
*-------------------------------
ADDMOBS
 ldx nummob ;# objs in motion (0-maxmob)
 beq :rts

:loop stx tempnt
 jsr loadmob

 lda mobtype
 bne :1
 jsr ATM ;Add this MOB
:1
 ldx tempnt
 dex
 bne :loop
:rts
]rts rts

*-------------------------------
*
*  Add this MOB to obj table (if visible)
*
*-------------------------------
ATM

* Is floorpiece visible onscreen?

 lda mobscrn
 cmp VisScrn
 bne :ok2

 lda moby
 cmp #192+17 ;17 is generous estimate of image height
 bcc :ok
 rts
:ok2
 cmp scrnBelow
 bne ]rts ;not on screen below

 lda moby
 cmp #-17
 bcs :ok1
 cmp #17
 bcs ]rts
:ok1
 clc
 adc #192
 sta moby ;(this change won't be saved)
:ok

* Get block #; index char

 lda moby
 jsr getblocky ;return blocky (0-3)
 sta tempblocky

 lda mobx
 lsr
 lsr
 sta tempblockx

 jsr indexblock
 sty FCharIndex

* Mark floorbuf & fredbuf of affected blocks to R

:cont1
 inc tempblockx
 jsr indexblock  ;block to R

 lda #2
 jsr markfloor
 jsr markfred

 lda moby
 sec
 sbc #FFheight
 jsr getblocky ;highest affected blocky
 cmp tempblocky
 beq :same

 sta tempblocky
 jsr indexblock ;block to U.R.

 lda #2
 jsr markfloor
 jsr markfred
:same

* Get frame #

 lda #Ffalling
 sta mobframe

 jmp addmobobj ;add MOB to object table

*-------------------------------
*
*  Add MOB to object table
*
*  In: mob data
*
*-------------------------------
addmobobj
 inc objX
 ldx objX

 lda mobtype ;0 = falling floor
 ora #$80
 sta objTYP,x

 lda mobx
 sta objX,x
 lda #0
 sta objOFF,x

 lda moby
 sta objY,x

 lda mobframe
 sta objIMG,x

 lda #0
 sta objCU,x
 sta objCL,x
 lda #40
 sta objCR,x

 jmp setobjindx
]rts rts
*-------------------------------
*
* Shake floors
*
* In: A = CharBlockY
*
*-------------------------------
SHAKEM
 ldx level
 cpx #13
 beq ]rts

 sta tempblocky

 lda VisScrn
 sta tempscrn

SHAKEM1
 ldx #9
:loop txa
 pha
 sta tempblockx

 jsr rdblock1
 cmp #loose
 bne :cont

 jsr shakeit

:cont pla
 tax
 dex
 bpl :loop

]rts rts

*-------------------------------
* Shake loose floor
*-------------------------------
shakeit
 lda (BlueSpec),y
 bmi ]rts ;already wiggling
 bne ]rts ;active

 lda #$80
 sta (BlueSpec),y

 sty trloc

 lda tempscrn ;from rdblock
 sta trscrn

 lda #1
 sta trdirec

 jmp addtrob ;add floor to trans list

*-------------------------------
 lst
 ds 1
 usr $a9,21,$00,*-org
 lst off