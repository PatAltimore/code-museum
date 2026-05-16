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
description: "The physics engine of Prince of Persia, a groundbreaking cinematic platformer, written in 6502 assembly for the Apple II."

summary:
  - point: "Implements object transitions and interactions in the game world"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Uses memory-efficient techniques to fit within 128K constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Defines timers and parameters for dynamic elements like spikes and falling floors"
    link: "https://en.wikipedia.org/wiki/Physics_engine"
    link_label: "Physics engine"
  - point: "Introduces rotoscoped animation techniques for realistic movement"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Demonstrates clever use of lookup tables for game physics"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"

enhancements:
  - id: "jump-table-for-game-interactions"
    line_start: 9
    line_end: 31
    title: "Jump Table for Game Interactions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PhysicsEngine.ogv/330px--PhysicsEngine.ogv.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo"
    image_caption: "PhysicsEngine (CC BY-SA 3.0)"
    content: "This section of the code sets up a jump table, a common technique in assembly programming to efficiently handle multiple subroutine calls. Each `jmp` instruction points to a specific routine responsible for handling game interactions, such as triggering spikes (`TRIGSPIKES`), animating mobs (`ANIMMOBS`), or smashing mirrors (`SMASHMIRROR`). At this moment, Jordan Mechner is organizing the game's logic into discrete, callable pieces, ensuring the physics and interactions feel responsive and fluid. In 1989, the Apple IIe/IIc was nearing the end of its dominance, but it remained a popular platform for games due to its affordability and accessibility. With only 128K of memory available, Mechner had to use every trick in the book to fit the game's cinematic ambitions into the hardware constraints. Jump tables were a natural choice for this era, minimizing the overhead of conditional branching and keeping the code compact. This approach laid the groundwork for modular game design, where interactions are abstracted into reusable components. While jump tables are less common in modern high-level languages, the principle of organizing functionality into discrete units persists in object-oriented programming and event-driven architectures. Mechner's work here reflects the ingenuity required to push the limits of the Apple II hardware while delivering a groundbreaking experience."
  - id: "game-physics-parameters"
    line_start: 54
    line_end: 93
    title: "Game Physics Parameters: Timers and Velocities"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/330px-Hash_table_3_1_1_0_1_0_0_SP.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Hash table 3 1 1 0 1 0 0 SP (CC BY-SA 3.0)"
    content: "This section defines the parameters that control the game's physics, including timers for retracting spikes (`spiketimer`), falling floors (`loosetimer`), and gates (`gatetimer`). It also specifies acceleration and terminal velocity for falling floors (`FFaccel`, `FFtermvel`) and the incremental movement of gates (`gateinc`). These values are meticulously tuned to create the game's signature sense of weight and realism. In the mid-1980s, most platformers relied on simplistic physics models, often limited to basic gravity and collision detection. Mechner's decision to include nuanced parameters for elements like crumbling floors and retracting spikes was inspired by his desire to make Prince of Persia feel cinematic and immersive. He famously rotoscoped his brother's movements to ensure the animations matched the physics, a technique that added realism but demanded precise control over timing and motion. These parameters became a hallmark of the game's design, influencing how players perceived the environment as dynamic and alive. The attention to detail in this section foreshadows the complexity of modern physics engines, which now handle far more sophisticated simulations but still rely on foundational principles like those seen here. Mechner's work demonstrates how thoughtful parameterization can transform a game from functional to unforgettable."
  - id: "search-and-add-object-transitions"
    line_start: 105
    line_end: 156
    title: "Search and Add Object Transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/ECS_Simple_Layout.svg/330px-ECS_Simple_Layout.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "ECS Simple Layout (CC0)"
    content: "The `searchtrob` and `addtrob` routines manage the game's transition list, which tracks objects like gates, spikes, and pressure plates as they change state. `searchtrob` scans the list to find an object based on its location and screen coordinates, while `addtrob` either updates an existing object's direction or adds a new object to the list. This ensures the game can dynamically respond to player actions and environmental changes. In the late 1980s, dynamic object management was a relatively novel concept in platformers, which often relied on static level designs. Mechner's implementation reflects his background in film and storytelling, where dynamic environments are essential for creating tension and drama. The Apple II's limited memory forced him to optimize these routines for speed and efficiency, using direct memory access and compact data structures. This approach to object transitions influenced later games, which increasingly relied on dynamic environments to enhance gameplay. While modern engines automate much of this functionality, the principles of efficient object management remain relevant, especially in resource-constrained systems like mobile devices or embedded platforms. Mechner's work here showcases the creativity required to bring cinematic storytelling to life within the constraints of 6502 assembly."
  - id: "add-and-save-mob-data"
    line_start: 163
    line_end: 193
    title: "Add and Save MOB Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Entity_component_system"
    image_url: ""
    image_caption: ""
    content: "The `addamob` and `savemob` routines handle the game's MOB (mobile object) list, which tracks dynamic entities like enemies and moving platforms. `addamob` adds a new MOB to the list, while `savemob` stores its properties, including position (`mobx`, `moby`), velocity (`mobvel`), and type (`mobtype`). These routines enable the game to manage multiple active entities simultaneously. In 1989, managing dynamic entities was a significant challenge for game developers, especially on hardware as limited as the Apple II. Mechner's solution reflects his deep understanding of the platform's capabilities, using indexed memory access to keep the MOB list compact and efficient. This approach was likely inspired by techniques used in earlier arcade games, which also had to manage multiple entities within strict resource constraints. The concept of a MOB list is an early precursor to modern entity-component systems, which are now standard in game development. By abstracting entity management into discrete routines, Mechner laid the groundwork for scalable and modular game design. His work here highlights the ingenuity required to create complex, dynamic worlds on hardware that was never designed for such ambitious projects."

---

; excerpt — first 200 lines of 01 POP Source/Source/MOVER.S

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