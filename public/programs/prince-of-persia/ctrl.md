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
description: "This file translates hardware input into game actions for Prince of Persia, showcasing ingenious use of 6502 assembly on the Apple II."

summary:
  - point: "Bank-switched memory techniques to fit within 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Rotoscoping animation traced from live-action footage"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Precise handling of player physics and collision detection"
    link: "https://en.wikipedia.org/wiki/Physics_engine"
    link_label: "Physics Engine"
  - point: "Solo development by Jordan Mechner over four years"
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"
  - point: "Innovative cinematic platformer design"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic Platformer"

enhancements:
  - id: "jump-table-for-routines"
    line_start: 8
    line_end: 17
    title: "Jump Table: Organizing Game Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_table"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/DarrowPage1.png/330px-DarrowPage1.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "DarrowPage1 (Public domain)"
    content: "This section defines a jump table, a common technique in assembly programming to organize and efficiently access subroutines. Each `jmp` instruction points to a key routine handling specific aspects of the game, such as player control (`PLAYERCTRL`), collision detection (`CHECKFLOOR`), and shadow behavior (`SHADCTRL`). In the constrained environment of the Apple II, where every byte of memory mattered, jump tables allowed Jordan Mechner to structure the game logic compactly and avoid repetitive code. By centralizing routine entry points, debugging and extending functionality became more manageable. In the mid-1980s, the Apple IIe and IIc were among the most popular home computers, but their hardware limitations were stark compared to modern systems. Programmers had to contend with a 1 MHz 6502 processor and 128K of memory, often split across bank-switched configurations. Mechner's use of jump tables reflects both the ingenuity required to work within these constraints and the influence of assembly programming practices of the era. This approach has enduring relevance. Jump tables are still used in modern programming, albeit in higher-level languages and more abstract forms, such as function pointers or virtual method tables. Mechner's meticulous organization here laid the groundwork for the game's responsive controls and cinematic feel, which became hallmarks of Prince of Persia and inspired countless platformers that followed."
  - id: "changeable-parameters-for-gameplay"
    line_start: 40
    line_end: 66
    title: "Adjustable Parameters: Fine-Tuning Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_design"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PhysicsEngine.ogv/330px--PhysicsEngine.ogv.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo"
    image_caption: "PhysicsEngine (CC BY-SA 3.0)"
    content: "This section defines a set of adjustable parameters that control critical aspects of gameplay, such as movement thresholds, collision tolerances, and timing. Constants like `DeathVelocity` and `OofVelocity` determine how hard a fall impacts the player, while `grabspeed` and `grablead` influence how easily the protagonist can grab ledges. These values allowed Jordan Mechner to tweak the game's feel and balance during development without rewriting large portions of code. In the late 1980s, game design was often a solitary endeavor, especially for independent developers like Mechner. Without modern debugging tools or iterative development environments, adjustments to gameplay mechanics had to be carefully planned and tested. The Apple II's limited hardware meant that every calculation and memory access had to be optimized, and these parameters provided a way to experiment with different settings while keeping the code efficient. The concept of adjustable parameters has become a cornerstone of game development, enabling designers to refine mechanics and tailor experiences. Mechner's work here exemplifies the meticulous attention to detail that made Prince of Persia feel so fluid and responsive, setting a standard for cinematic platformers and influencing the genre for decades."
  - id: "falling-routine"
    line_start: 76
    line_end: 99
    title: "Falling Routine: Physics in Assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Fighter_hitbox.svg/330px-Fighter_hitbox.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Fighter hitbox (CC BY 3.0)"
    content: "This routine handles the player's interaction with the floor during a fall, checking whether the character has passed through the floor plane and determining the consequences. It uses a combination of comparisons (`cmp`) and subroutine calls (`jsr`) to assess whether the floor is solid, whether the player should stop falling, or whether they should pass through to another level. The logic here is precise, ensuring that the game's physics feel consistent and believable despite the constraints of 6502 assembly. In the late 1980s, realistic physics in games was still a novelty. Most platformers relied on simple, grid-based movement, but Mechner aimed for something more dynamic and cinematic. Inspired by his background in filmmaking and his use of rotoscoping to animate the protagonist, he sought to make every movement feel natural. The Apple II's hardware posed significant challenges, as its limited processing power and memory required clever tricks to simulate physics without sacrificing performance. The falling routine is a testament to Mechner's ingenuity. By breaking down the problem into manageable steps and leveraging assembly's low-level control, he created a system that feels fluid and responsive. This focus on realism helped Prince of Persia stand out from its contemporaries and paved the way for more sophisticated physics engines in later games."
  - id: "check-floor-routine"
    line_start: 106
    line_end: 133
    title: "Check Floor: Collision Detection Simplified"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PhysicsEngine.ogv/330px--PhysicsEngine.ogv.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo"
    image_caption: "PhysicsEngine (CC BY-SA 3.0)"
    content: "The `CHECKFLOOR` routine determines whether the player is hanging, free-falling, or on the ground, and redirects control accordingly. It uses a series of comparisons to check the player's current action (`CharAction`) and position (`CharPosn`) against predefined states, ensuring that the game responds appropriately to each scenario. This logic is crucial for maintaining the game's immersive feel, as it governs how the character interacts with the environment. In 1989, collision detection was a challenging problem for game developers, especially on hardware as limited as the Apple II. Mechner's approach here reflects the constraints of the era: every decision had to be optimized for speed and memory usage. By structuring the routine as a series of conditional checks, he ensured that the game could quickly determine the player's state and proceed without unnecessary calculations. The principles demonstrated in `CHECKFLOOR` have influenced game development ever since. While modern collision detection systems are far more complex, they still rely on the same fundamental idea of comparing states and responding to changes. Mechner's work here showcases the ingenuity required to create responsive and believable interactions in a time when computational resources were scarce."
  - id: "hit-floor-routine"
    line_start: 140
    line_end: 200
    title: "Hit Floor: Landing Mechanics in Detail"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The `hitflr` routine handles the player's landing after a fall, aligning the character with the floor and determining the consequences based on velocity and the type of surface. If the player lands on spikes, the routine checks whether they are lethal. If the landing is hard, it reduces the player's life and triggers sound effects like a 'splat.' The code even accounts for edge cases, such as landing too close to the edge of a platform, and adjusts the player's position accordingly. When Mechner developed Prince of Persia, he aimed to create a game that felt cinematic and realistic, a departure from the grid-based mechanics of earlier platformers. This routine exemplifies that ambition, as it incorporates nuanced physics and detailed interactions with the environment. The Apple II's hardware limitations meant that every calculation had to be efficient, yet Mechner managed to simulate complex landing mechanics that added depth to the gameplay. The landing mechanics in Prince of Persia set a new standard for platformers, influencing how games handle player movement and interaction with the environment. Modern games have built upon these ideas, incorporating even more sophisticated physics engines, but the principles established here remain foundational. Mechner's attention to detail ensured that every fall and landing felt impactful, contributing to the game's enduring legacy."

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