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
description: "The physics engine for Prince of Persia, a groundbreaking cinematic platformer, written in 6502 assembly for the Apple II."

summary:
  - point: "Implements bank-switched memory techniques to fit within 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Defines physics parameters for falling floors, gates, and spikes"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Uses rotoscoping-inspired animation transitions for realistic movement"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Optimizes object management with transition and MOB lists"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Pushes the limits of 6502 assembly for cinematic realism"
    link: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    link_label: "6502 Assembly"

enhancements:
  - id: "jump-table-for-animation-and-events"
    line_start: 9
    line_end: 30
    title: "Jump Table: Animation and Event Routing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PhysicsEngine.ogv/330px--PhysicsEngine.ogv.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo"
    image_caption: "PhysicsEngine (CC BY-SA 3.0)"
    content: "This section begins with a jump table, a classic technique in assembly programming to route execution to different subroutines based on specific conditions or events. Here, Jordan Mechner defines jumps to routines handling animations, spikes, slicers, torches, and other interactive elements in the game world. The jump table is a compact way to organize the game's logic, allowing rapid branching without complex conditional checks. In the mid-1980s, the Apple IIe and IIc were constrained by limited memory and processing power. The 6502 processor had no native support for high-level constructs like switch statements, so programmers relied on jump tables for efficiency. Mechner, working alone on Prince of Persia, had to make every byte count while ensuring the game felt fluid and responsive. This design choice reflects Mechner's focus on creating a cinematic experience. By centralizing event routing, he could ensure consistent behavior across the game's various interactive elements, such as falling floors and retracting spikes. This modularity also made it easier to debug and expand the game's mechanics. Jump tables remain a foundational technique in low-level programming, though they are less visible in modern high-level languages. Mechner's use of this method exemplifies the ingenuity required to deliver complex gameplay on limited hardware. Without this efficient routing mechanism, the game's responsiveness and realism might have suffered."
  - id: "physics-parameters-for-interactive-elements"
    line_start: 54
    line_end: 92
    title: "Physics Parameters: Falling Floors, Spikes, and Gates"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/330px-Hash_table_3_1_1_0_1_0_0_SP.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Hash table 3 1 1 0 1 0 0 SP (CC BY-SA 3.0)"
    content: "This block defines the physics parameters for key interactive elements in Prince of Persia, such as gates, spikes, and falling floors. Each parameter controls timing, acceleration, terminal velocity, and other behaviors, ensuring the game world feels consistent and believable. In 1989, most platformers relied on simple physics models, often limited to basic gravity and collision detection. Mechner's approach was revolutionary: he aimed to simulate realistic movement and interactions. Inspired by rotoscoping techniques, he filmed his brother performing stunts and traced the frames to create lifelike animations. These parameters translate that realism into gameplay, dictating how objects like gates open and close, how spikes retract, and how floors crumble under the player's weight. The Apple II's hardware limitations meant Mechner had to optimize every calculation. For example, the falling floor parameters include acceleration and terminal velocity values, ensuring the floor's movement feels natural despite the system's low processing power. The crumble and disappear times add visual feedback, enhancing the player's immersion. These physics parameters laid the groundwork for modern cinematic platformers. By prioritizing realism and detail, Mechner set a new standard for game design. Today, advanced physics engines like Unity and Unreal build on these principles, but the seeds of their sophistication can be traced back to Mechner's meticulous work on the Apple II."
  - id: "search-and-add-transition-objects"
    line_start: 105
    line_end: 156
    title: "Managing Transition Objects: Search and Add"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/ECS_Simple_Layout.svg/330px-ECS_Simple_Layout.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "ECS Simple Layout (CC0)"
    content: "This section implements routines to manage transition objects in the game world. The `searchtrob` subroutine searches for an object in the transition list, while `addtrob` adds a new object or updates an existing one. These routines are essential for handling dynamic interactions, such as gates opening or spikes retracting. In the late 1980s, memory management was a critical challenge for game developers. The Apple II's 128K memory was divided into bank-switched segments, requiring careful organization of data. Mechner's transition list is a compact data structure that tracks the state and location of interactive objects. By limiting the number of objects and using efficient search and update algorithms, he maximized performance while minimizing memory usage. The logic here is straightforward but effective. `searchtrob` iterates through the list, comparing each object's location and screen position to the input values. If a match is found, the routine returns the object's index; otherwise, it returns zero. `addtrob` builds on this by either updating the object's direction or adding a new entry if the list isn't full. This approach reflects Mechner's ability to balance technical constraints with gameplay needs. The transition list ensures the game can handle complex interactions without sacrificing speed or responsiveness. Similar data structures are still used in modern games, though they benefit from vastly greater memory and processing power. Mechner's work demonstrates how ingenuity can overcome even the most daunting limitations."
  - id: "mob-management-save-and-load"
    line_start: 163
    line_end: 200
    title: "MOB Management: Save and Load"
    wikipedia_url: "https://en.wikipedia.org/wiki/Entity_component_system"
    image_url: ""
    image_caption: ""
    content: "The `addamob` and `savemob` routines manage MOBs (mobile objects) in the game world. MOBs include characters, enemies, and other moving entities. These routines handle adding new MOBs to the list and saving their state, including position, velocity, type, and level. In the era of the Apple II, dynamic object management was a complex task. The 6502 processor had no native support for advanced data structures, so programmers had to implement their own systems from scratch. Mechner's MOB list is a simple but effective solution, allowing the game to track and update multiple moving objects in real time. The `addamob` routine checks if the MOB list has reached its maximum capacity before adding a new entry. If there's space, it increments the MOB count and jumps to `savemob`, which stores the object's attributes in the list. This modular design makes it easy to expand or modify the game's behavior. The MOB management system is a precursor to modern entity-component systems used in game development. These systems allow developers to manage complex interactions between numerous objects efficiently. Mechner's work on Prince of Persia demonstrates the power of well-designed data structures, even on hardware with severe limitations. His approach to MOB management contributed to the game's fluid and dynamic feel, setting a benchmark for future platformers."

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