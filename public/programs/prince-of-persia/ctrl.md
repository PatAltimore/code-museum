---
title: "CTRL.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/CTRL.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/CTRL.S"
year: 1989
author: "Jordan Mechner"
slug: "ctrl"
order: 5
description: "This file translates joystick and keyboard input into game actions for Prince of Persia, showcasing Jordan Mechner's mastery of 6502 assembly and cinematic game design."

summary:
  - point: "Bank-switched memory management for Apple IIe/IIc"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping animation technique traced from live-action footage"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Precision handling of player movement and collision detection"
    link: "https://en.wikipedia.org/wiki/Collision_detection"
    link_label: "Collision Detection"
  - point: "Cinematic platformer design principles in assembly language"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Innovative use of parameters for realistic character physics"
    link: "https://en.wikipedia.org/wiki/Physics_engine"
    link_label: "Physics Engine"

enhancements:
  - id: "jump-table-for-control-handling"
    line_start: 8
    line_end: 16
    title: "Jump Table: Efficient Control Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PhysicsEngine.ogv/330px--PhysicsEngine.ogv.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo"
    image_caption: "PhysicsEngine (CC BY-SA 3.0)"
    content: "These lines implement a jump table, a classic technique in assembly programming that allows rapid branching to specific subroutines based on input or state. Here, Mechner sets up jumps to routines like PLAYERCTRL, CHECKFLOOR, and SHADCTRL, each handling a distinct aspect of gameplay. In the mid-1980s, this approach was essential for squeezing performance out of the Apple II's 1 MHz 6502 processor. Mechner, working solo, had to optimize every byte of memory and every clock cycle to fit his ambitious vision of fluid animation and responsive controls into the constraints of the hardware. Jump tables were a common solution, borrowed from earlier assembly traditions, but their use here underscores the complexity of translating cinematic gameplay into raw machine code. This structure would later influence how game developers approached modular design in assembly and higher-level languages."
  - id: "misc-changeable-parameters"
    line_start: 40
    line_end: 68
    title: "Physics Parameters: Fine-Tuning Realism"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PhysicsEngine.ogv/330px--PhysicsEngine.ogv.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo"
    image_caption: "PhysicsEngine (CC BY-SA 3.0)"
    content: "This section defines key parameters for character physics, such as velocities, thresholds, and timing values. Mechner meticulously adjusts values like DeathVelocity (33) and OofVelocity (22) to create a sense of weight and danger in the protagonist's movements. These constants reflect Mechner's background in film and his desire to imbue the game with cinematic realism. The grabreach and grabspeed parameters, for instance, determine the hero's ability to catch ledges—a critical mechanic that adds tension and precision to gameplay. In the late 1980s, such attention to detail was rare in video games, especially on hardware as limited as the Apple II. Mechner's work here laid the groundwork for future physics engines, influencing how games simulate movement and interaction."
  - id: "falling-routine"
    line_start: 76
    line_end: 99
    title: "Falling: A Cinematic Descent"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "This routine handles the player's descent through the game world, checking whether the character has passed through the floor plane and determining the consequences. Mechner's code checks for solid blocks, adjusts the character's position, and decides whether to continue falling or stop. The logic is intricate, reflecting the game's emphasis on realistic movement and perilous environments. In 1989, collision detection was still a developing field, and Mechner's implementation on the Apple II was a technical marvel. He had to account for the machine's limited memory and processing power while delivering smooth, believable gameplay. This routine captures the essence of Prince of Persia's design: every fall feels consequential, every landing precise. The techniques here would influence platformer design for decades, from Super Mario Bros. to modern indie titles."
  - id: "check-floor-routine"
    line_start: 106
    line_end: 133
    title: "Check Floor: Grounding the Hero"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The CHECKFLOOR routine determines whether the protagonist is hanging, freefalling, or grounded. It uses a series of comparisons to evaluate the character's action and position, ensuring smooth transitions between states. Mechner's code reflects his cinematic ambitions: every movement is calculated to maintain immersion and drama. In the late 1980s, such detailed state management was rare, especially in assembly language. Mechner's work here demonstrates his ability to translate filmic principles into interactive mechanics. This routine ensures that the hero's movements feel grounded and believable, a hallmark of Prince of Persia's design. The logic here would inspire future developers to prioritize realism and fluidity in character animation."
  - id: "hit-floor-routine"
    line_start: 140
    line_end: 199
    title: "Hit Floor: Landing with Impact"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "This routine handles the consequences of landing, checking for spikes, edges, and impact severity. Mechner's code adjusts the character's position, triggers animations, and calculates damage based on velocity. The attention to detail here is remarkable, reflecting Mechner's desire to create a game that feels cinematic and visceral. In 1989, such nuanced handling of collisions and landings was groundbreaking, especially on the Apple II's limited hardware. Mechner's approach combines physics calculations with dramatic flair, ensuring that every landing feels significant. This routine exemplifies the game's commitment to realism and tension, influencing how platformers handle character-environment interactions."

---

; excerpt — first 200 lines of 01 POP Source/Source/CTRL.S

* ctrl
org = $3a00
 tr on
 lst off
*-------------------------------
 org org

 jmp PLAYERCTRL
 jmp CHECKFLOOR
 jmp SHADCTRL
 jmp REREADBLOCKS
 jmp CHECKPRESS

 jmp DOIMPALE
 jmp GENCTRL
 jmp CHECKIMPALE

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst
 put seqdata
 lst
 put soundnames
 lst
 put movedata
 lst off

 dum $f0
ztemp ds 1
jxtemp ds 1
jytemp ds 1
jbtemp ds 1
atemp ds 1
 dend

*-------------------------------
*  Misc. changeable parameters

DeathVelocity = 33
OofVelocity = 22

grabreach = -8
grabspeed = 32 ;max Y-vel to grab ledge
grablead = 25 ;increase to grab ledge earlier
stuntime = 12

jumpupreach = 0
jumpupangle = -6

JumpBackThres = 6
StepOffFwd = 3
StepOffBack = 8

swordthres = 90 ;to go en garde (facing fwd)
swordthresN = -10 ;" " (behind you)
blockthres = 32
graceperiod = 9
gdpatience = 15

gclimbthres = 6

stairthres = 30

plus1 db -1,1
minus1 db 1,-1

*-------------------------------
*
*  If he's passed thru floor plane, change CharBlockY
*  If floor is solid, stop him
*
*-------------------------------
falling
 lda CharY

 ldx CharBlockY
 inx
 cmp FloorY,x
 bcs :1

 jmp fallon ;Hasn't reached floor yet

* Character is passing thru floor plane

:1 jsr getunderft ;Check if there's
 ;solid floor underfoot
 cmp #block
 bne :2 ;Solid block is special case--
 jsr InsideBlock ;reset him to either side of block

:2 jsr cmpspace
 bne hitflr

 inc CharBlockY ;Fall thru floor plane

]rts rts
*-------------------------------
*
*  C H E C K  F L O O R
*
*-------------------------------

CHECKFLOOR
 lda CharAction
 cmp #6 ;hanging?
 beq ]rts

 cmp #5 ;bumped?
 bne :2
 lda CharPosn
 cmp #109 ;crouched (e.g. on loose floor)
 beq :ong
 cmp #185 ;dead
 bne ]rts
:ong jmp onground

:2 cmp #4 ;freefall
 beq falling
 cmp #3
 bne :1
 lda CharPosn
 cmp #102
 bcc ]rts
 cmp #106
 bcs ]rts
 jmp fallon

:1 cmp #2 ;hanging
 beq ]rts
 jmp onground ;7, 0, or 1: on the ground

*-------------------------------
*
*  Floor stops him -- Choose appropriate landing
*
*-------------------------------
hitflr
 ldx CharBlockY
 inx
 lda FloorY,x
 sta CharY ;align char w/floor

 jsr getunderft
 cmp #spikes
 beq :hitspikes

* Has he landed too close to edge?

 jsr getinfront
 jsr cmpspace
 bne :cont ;no

 jsr getdist ;# pixels to edge
 cmp #4 ;was 2
 bcs :cont
;Yes--move him back a little
 lda #-3
 jsr addcharx
 sta CharX

:cont jsr addslicers ;trigger slicers on this level

 lda CharLife
 bpl :hardland ;dead before he hits the ground

 jsr getdist
 cmp #12
 bcc :nc
 jsr getbehind
 cmp #spikes
 beq :hitspikes ;check block behind if dist>=12

:nc jsr getunderft ;what has he landed on?
 cmp #spikes
 bne :notspikes

:hitspikes
 jsr getspikes ;are spikes lethal?
 bne :impale ;yes

:notspikes
 lda CharYVel
 cmp #OofVelocity
 bcc :softland

 cmp #DeathVelocity
 bcc :medland

:hardland
 lda #100
 jsr decstr
:hdland1
 lda #Splat
 jsr addsound

 lda #hardland
 bne :doland