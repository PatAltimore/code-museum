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
description: "This file contains the physics and object management routines that gave Prince of Persia its groundbreaking realism, written in 6502 assembly for the Apple II."
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Innovative use of rotoscoping for animation realism"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory techniques to fit within 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Object transition list management for dynamic interactions"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Physics parameters for falling floors and timed traps"
    link: "https://en.wikipedia.org/wiki/Physics_engine"
    link_label: "Physics Engine"
  - point: "Efficient MOB (mobile object) handling in constrained memory"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"

enhancements:
  - id: "physics-parameters-for-traps"
    line_start: 59
    line_end: 79
    title: "Physics parameters for timed traps and falling floors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "This section defines key parameters for the game's physics engine, controlling the behavior of traps and falling floors. Values like `spiketimer` and `pptimer` determine how long spikes stay retracted or how quickly pressure plates reset, while `FFaccel` and `FFtermvel` govern the acceleration and terminal velocity of falling floors. In 1989, such detailed physics modeling was rare in platformers, most of which relied on simple, predictable mechanics. Jordan Mechner's decision to include these nuanced parameters reflects his commitment to creating a cinematic experience where the environment feels alive and reactive. The constraints of the Apple II hardware—128K of memory and a 1 MHz processor—meant every calculation had to be efficient, yet Mechner managed to imbue the game with a sense of weight and realism that set it apart. These parameters laid the groundwork for the game's immersive feel, influencing later titles that sought to replicate its sense of physicality."
  - id: "object-transition-list-management"
    line_start: 105
    line_end: 119
    title: "Managing object transitions in dynamic environments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `searchtrob` subroutine searches a transition list to determine if an object (e.g., a trap or a moving platform) is already listed. This routine is a cornerstone of Prince of Persia's dynamic environment, where objects interact with the player and each other in real-time. In the mid-1980s, most games had static environments with pre-defined behaviors, but Mechner's approach allowed for a more fluid and responsive world. The transition list was a clever way to manage these interactions within the limited memory of the Apple II, ensuring that only active objects consumed resources. This innovation contributed to the game's sense of unpredictability and realism, influencing future game design by demonstrating how dynamic systems could enhance immersion."
  - id: "adding-new-transitions"
    line_start: 129
    line_end: 156
    title: "Adding new transitions to the object list"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The `addtrob` subroutine adds new objects to the transition list or updates their direction if they already exist. This routine showcases Mechner's ingenuity in managing dynamic interactions within the constraints of 6502 assembly and bank-switched memory. By checking if an object is already listed before adding it, the code avoids redundancy and ensures efficient use of memory—a critical concern on the Apple II. The ability to update an object's direction dynamically reflects the game's emphasis on responsive environments, where traps and platforms react to the player's actions. This approach was ahead of its time, paving the way for more sophisticated object management systems in later games."
  - id: "mob-management-and-saving"
    line_start: 163
    line_end: 193
    title: "Efficient MOB management in constrained memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The `addamob` and `savemob` routines handle mobile objects (MOBs) like enemies and moving platforms. These routines ensure that MOBs are efficiently added to a list and their state is saved for later use. On the Apple II, memory constraints meant that every byte had to be carefully managed, and Mechner's code reflects this necessity. By separating the addition and saving processes, the routines maintain clarity and modularity, making it easier to debug and extend the code. The MOB management system was crucial for creating the game's dynamic and unpredictable environments, where objects could move, interact, and change state based on the player's actions. This system influenced later games by demonstrating how constrained hardware could still support complex interactions."

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