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
description: "This file translates hardware input into game actions for Prince of Persia, a groundbreaking cinematic platformer."
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Memory bank switching to fit within 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping animation technique traced from live-action footage"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Complex handling of player states like freefall, hanging, and impalement"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Apple II hardware constraints shaped game design decisions"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II"
  - point: "Solo development by Jordan Mechner over four years"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "jump-table-for-subroutine-dispatch"
    line_start: 8
    line_end: 16
    title: "Jump Table: Efficient Subroutine Dispatch"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: ""
    image_caption: ""
    content: "The code begins with a jump table—a compact mechanism for dispatching execution to various subroutines. Each `jmp` instruction points to a specific routine responsible for handling a distinct aspect of gameplay, such as player control (`PLAYERCTRL`), floor collision (`CHECKFLOOR`), or shadow behavior (`SHADCTRL`). This design reflects the constraints of the 6502 processor, which lacked advanced branching instructions or indirect function calls. By centralizing these jumps, Jordan Mechner streamlined the game's logic flow while conserving memory—a critical consideration for the Apple II's 128K limit. In the mid-1980s, jump tables were a common solution for managing state transitions in games and operating systems. They allowed developers to bypass the overhead of conditional branching, which could slow down performance on hardware like the Apple IIe. Mechner's use of this technique demonstrates his deep understanding of the platform's limitations and his ability to optimize for speed and clarity. This structure influenced later game development, where similar dispatch mechanisms became standard in state-driven systems. While modern languages abstract away such details, the jump table remains a testament to the ingenuity required to make complex games run on early hardware. Mechner's work here laid the groundwork for the fluid gameplay that made Prince of Persia a classic."
  - id: "game-parameters-for-character-behavior"
    line_start: 40
    line_end: 65
    title: "Game Parameters: Tuning Character Physics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_mechanics"
    image_url: ""
    image_caption: ""
    content: "This section defines key parameters governing the player's movement and interactions, such as `DeathVelocity`, `grabreach`, and `swordthres`. These values control how the character reacts to falling, grabbing ledges, and engaging in combat, encapsulating the game's physics and mechanics in a series of constants. In the 1980s, game physics were often hardcoded into assembly, as there were no high-level physics engines or libraries. Mechner had to manually tweak these values to achieve the precise, cinematic feel he envisioned. For example, `grabspeed` and `grablead` determine the timing and conditions for ledge grabs—a critical feature in a platformer where precision is paramount. The iterative process of adjusting these parameters likely involved extensive playtesting. These constants highlight the balance between realism and playability. Mechner's background in filmmaking influenced his approach, as he sought to create animations and interactions that felt natural yet responsive. The success of Prince of Persia's fluid gameplay owes much to the careful calibration seen here. Modern games often use similar parameter-driven systems, albeit implemented with more sophisticated tools. Mechner's work reminds us that even the simplest constants can shape the player's experience profoundly."
  - id: "falling-subroutine-handling-freefall"
    line_start: 76
    line_end: 99
    title: "Falling: Handling Freefall and Floor Collisions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `falling` subroutine handles the player's descent during freefall, checking whether they have passed through the floor plane and determining the consequences. It begins by comparing the character's vertical position (`CharY`) with the floor's height (`FloorY`). If the player is above the floor, the routine jumps to `fallon`, allowing the fall to continue. If the player has reached or passed the floor, the code checks whether the floor is solid or contains special elements like spikes. In the mid-1980s, collision detection was a challenging problem for game developers. The Apple II lacked hardware support for such calculations, so Mechner had to implement them manually in assembly. His approach here is both efficient and adaptable, using subroutines like `getunderft` and `InsideBlock` to handle specific scenarios. This modularity allowed him to account for edge cases, such as falling through loose floors or landing on spikes. The falling mechanics are central to Prince of Persia's gameplay, emphasizing the perilous nature of the environment. Mechner's cinematic vision required precise control over these interactions, ensuring that every fall felt dramatic yet fair. The techniques seen here influenced later platformers, where collision detection and physics became increasingly sophisticated. Mechner's work remains a masterclass in achieving complex behavior within severe hardware constraints."
  - id: "checkfloor-subroutine-player-state"
    line_start: 106
    line_end: 133
    title: "CHECKFLOOR: Decoding Player State"
    wikipedia_url: "https://en.wikipedia.org/wiki/Finite-state_machine"
    image_url: ""
    image_caption: ""
    content: "The `CHECKFLOOR` subroutine evaluates the player's current state, determining whether they are hanging, freefalling, or on the ground. By examining the `CharAction` and `CharPosn` variables, the routine decides the appropriate course of action, such as jumping to `falling` for freefall or `onground` for stable footing. This logic is a classic example of a finite-state machine, a common design pattern in game development. In the constrained environment of the Apple II, state machines were a practical way to manage complex interactions without consuming excessive memory or processing power. Mechner's implementation is notable for its clarity and efficiency, with each state transition clearly defined. The ability to accurately track and respond to the player's state was crucial for Prince of Persia's immersive gameplay. Mechner's cinematic aspirations required seamless transitions between actions, ensuring that the character's movements felt fluid and natural. This subroutine exemplifies the meticulous attention to detail that made the game a landmark achievement. The principles seen here continue to underpin modern game design, where state machines remain a foundational tool."
  - id: "hitflr-handling-floor-collisions"
    line_start: 140
    line_end: 199
    title: "Hit Floor: Handling Collisions and Consequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The `hitflr` subroutine manages the player's interactions upon hitting the floor, aligning their position with the surface and determining the outcome based on factors like velocity and the type of floor. If the player lands on spikes, the routine checks whether they are lethal, potentially triggering the `impale` sequence. For non-lethal landings, it assesses the player's velocity to decide between soft, medium, or hard landings, each with its own consequences. This section showcases Mechner's attention to detail in simulating realistic physics and interactions. The Apple II's hardware lacked support for complex physics calculations, so Mechner had to implement them manually in assembly. The use of subroutines like `getunderft` and `getdist` demonstrates his modular approach, allowing him to handle diverse scenarios within the game's constraints. The handling of floor collisions is a defining feature of Prince of Persia, contributing to its sense of danger and realism. Mechner's cinematic vision required precise control over these interactions, ensuring that every landing felt impactful. This subroutine reflects the game's broader emphasis on fluid, lifelike animations and interactions. Its influence can be seen in later platformers, where physics engines and collision detection became increasingly sophisticated. Mechner's work here remains a benchmark for achieving complex behavior on limited hardware."

---

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