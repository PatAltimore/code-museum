---
title: "MISC.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/MISC.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/MISC.S"
year: 1989
author: "Jordan Mechner"
slug: "misc"
order: 15
description: "This file contains key routines for memory management, character interactions, and cinematic effects in Prince of Persia, showcasing Jordan Mechner's ingenuity in 6502 assembly for the Apple II."

summary:
  - point: "Memory bank-switching techniques to fit within 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Routines for cinematic character animations using rotoscoping"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Dynamic character interactions, including reflection and potion effects"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Efficient memory manipulation routines critical for performance"
    link: "https://en.wikipedia.org/wiki/6502"
    link_label: "6502 Assembly"
  - point: "Innovative use of hardware-specific features of the Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II"

enhancements:
  - id: "vanish-character-routine"
    line_start: 67
    line_end: 81
    title: "The Routine That Erases a Character"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The VANISHCHAR routine is responsible for removing a character from the game world. It sets the character's face, action, and life attributes to zero, effectively 'vanishing' them. This routine also adjusts the opponent's strength, ensuring the game state reflects the character's disappearance. In the context of Prince of Persia, this was likely used for scenarios where characters are defeated or removed from the screen. In 1989, memory and processing constraints on the Apple II required such operations to be efficient and minimal. Mechner's approach here reflects the broader challenge of managing dynamic game states within tight hardware limits. The concept of dynamically removing entities from a game world became foundational in later game engines, influencing titles like Another World and Flashback, which also emphasized cinematic storytelling."
  - id: "move-memory-block"
    line_start: 83
    line_end: 118
    title: "How to Move Memory Without Breaking Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "The MOVEMEM routine transfers blocks of memory from one location to another. It uses indexed addressing to copy data byte-by-byte, looping until the entire block is moved. A warning in the comments highlights the risk of overwriting 64K if the source and destination overlap incorrectly—a reminder of the low-level precision required in assembly programming. This routine was essential for managing the game's data, including animations and level information, within the Apple II's constrained memory architecture. Memory manipulation techniques like this were common in the era but required careful attention to avoid catastrophic bugs. Mechner's implementation here laid groundwork for efficient memory handling in games, influencing later systems like the SNES and Sega Genesis, which relied on similar techniques for sprite and level management."
  - id: "move-music-data"
    line_start: 120
    line_end: 136
    title: "Transferring Music Between Memory Banks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "MOVEMUSIC transfers 1K of music data from the main memory bank to the auxiliary language card. This routine uses the MOVEMEM subroutine to perform the transfer, ensuring the game's music data is accessible in the correct memory bank. The use of bank-switching here reflects the Apple II's hardware limitations, where only a fraction of memory could be accessed at a time. Mechner's careful orchestration of memory banks allowed him to fit the game's cinematic elements, including music and animations, into the Apple II's 128K memory. This approach influenced later games that had to manage large assets within constrained environments, such as LucasArts' SCUMM engine for adventure games."
  - id: "move-to-auxiliary-language-card"
    line_start: 138
    line_end: 184
    title: "Switching Memory Banks for Interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "MOVEAUXLC transfers a large block of memory to the auxiliary language card and sets interrupt vectors in both language cards. This routine is loaded into main memory by a master routine and becomes useless once transferred to the auxiliary card—a clever workaround for the Apple II's memory constraints. By setting up vertical blank interrupts, Mechner ensured smooth animations and gameplay responsiveness. This technique highlights the ingenuity required to work within the Apple II's hardware limitations. The use of interrupt vectors for timing and synchronization became standard practice in game development, influencing systems like the NES and early PC games."
  - id: "first-guard-interaction"
    line_start: 186
    line_end: 218
    title: "Why Guards Block Your Path"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The FIRSTGUARD routine prevents the player from running or jumping past an en-garde guard. It checks various conditions, including the guard's alertness, sword status, and proximity to the player. If the player is close enough, the routine triggers a 'bump' animation to push the player back. This mechanic added tension and realism to the game's sword-fighting sequences, emphasizing the cinematic nature of Prince of Persia. Mechner's focus on character interactions and spatial dynamics influenced later games with complex AI behaviors, such as Thief and Assassin's Creed."
  - id: "mark-strength-meters"
    line_start: 220
    line_end: 247
    title: "Visualizing Strength with Meters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The MARKMETERS routine updates the strength meters for the player and opponent. It calls subroutines to mark individual blocks representing health, ensuring the visual representation matches the underlying game state. This visual feedback was crucial for the game's cinematic experience, allowing players to gauge their progress and strategy at a glance. Mechner's use of visual meters influenced later games with health bars and status indicators, such as Mortal Kombat and Street Fighter."
  - id: "potion-effects"
    line_start: 249
    line_end: 345
    title: "Potions That Change Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The POTIONEFFECT routine handles the effects of various potions, including boosting strength, making the player weightless, inverting controls, and more. Each potion triggers unique animations, sounds, and gameplay changes, enhancing the game's cinematic and interactive qualities. Mechner's implementation of diverse potion effects added depth to the gameplay and influenced later games with power-up mechanics, such as The Legend of Zelda and Diablo."
  - id: "mouse-rescue"
    line_start: 347
    line_end: 373
    title: "When a Mouse Saves the Day"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The MOUSERESCUE routine introduces a memorable cinematic moment where a mouse rescues the player. It sets the mouse's attributes and triggers animations to depict the rescue. This sequence exemplifies Mechner's focus on storytelling and character-driven gameplay, a hallmark of Prince of Persia. The idea of using non-human characters for pivotal moments influenced later games like Ico and Shadow of the Colossus."
  - id: "stab-character"
    line_start: 380
    line_end: 449
    title: "The Brutality of Sword Combat"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The STABCHAR routine handles the mechanics of stabbing a character, checking their life points, sword status, and position. It includes special cases for skeletons and edge-of-platform scenarios, ensuring the game's combat feels dynamic and responsive. Mechner's attention to detail in combat interactions influenced later games with complex fighting mechanics, such as Dark Souls and Sekiro."
  - id: "reflection-and-shadow"
    line_start: 475
    line_end: 523
    title: "Creating Reflections and Shadows"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The REFLECTION routine draws the player's reflection in a mirror, using pseudo-character data to simulate the effect. If a special flag is set, the reflection comes to life as the shadowman, a pivotal moment in the game's story. This technique showcases Mechner's cinematic approach to gameplay, blending visual effects with narrative. The use of reflections and shadows influenced later games with similar mechanics, such as Silent Hill and Max Payne."
  - id: "display-version-on-screen"
    line_start: 980
    line_end: 1016
    title: "How Text Was Written to Apple II Screens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This section begins with the label `DISPVERSION`, which is responsible for displaying the version text of the game on the Apple II screen. The routine starts by clearing the screen using a subroutine (`lrcls`) and then prepares the memory bank for writing (`RAMWRTmain`). The text is stored in a predefined memory location (`textline`), and the loop iterates through each character, checking for the end marker (`@`). Each character is directly written to the top line of the screen at memory address `$400,x`. This approach leverages the Apple II's memory-mapped video display, where specific memory addresses correspond to screen positions. In the mid-1980s, the Apple II was a popular platform for games, but its hardware was constrained by limited memory and rudimentary graphics capabilities. Developers like Jordan Mechner had to work directly with hardware registers and memory banks to achieve the desired visual effects. This technique of manually writing text to screen memory was common among Apple II developers, as it avoided the overhead of higher-level abstractions. This routine demonstrates the low-level control programmers had over hardware during the era, a skill that has largely been abstracted away in modern programming environments. The direct manipulation of screen memory influenced later techniques in retro-style game development and remains a point of fascination for enthusiasts recreating the feel of early computing."
  - id: "keypress-wait-loop"
    line_start: 1003
    line_end: 1007
    title: "The Loop That Waited for You"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "This section implements a simple keypress wait loop, a common technique in 1980s assembly programming. The loop (`:wloop`) continuously reads the Apple II keyboard register at `$c000`, checking if a key has been pressed. If no key is detected, the loop repeats. Once a keypress is registered (indicated by the sign bit of the accumulator), the routine writes to `$c010`, which clears the keyboard strobe. In the Apple II ecosystem, hardware interaction was performed through memory-mapped I/O. The keyboard register `$c000` was a direct interface to the hardware, and polling it was the simplest way to detect user input. While this approach is straightforward, it ties up the CPU, preventing other tasks from running—a limitation that would later be addressed by interrupt-driven programming. This technique reflects the constraints of the era, where hardware simplicity demanded direct control. It also highlights the trade-offs developers faced: simplicity versus efficiency. While modern systems use event-driven input handling, this polling method remains a foundational concept in understanding early computing. The approach influenced subsequent game development, where input synchronization was critical for gameplay responsiveness."
  - id: "switching-between-text-and-hires-modes"
    line_start: 1009
    line_end: 1016
    title: "Flipping Between Text and Graphics Modes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "This section demonstrates the transition between text and high-resolution (HIRES) graphics modes on the Apple II. The routine manipulates several hardware registers: `$c057` turns HIRES mode on, `$c050` disables text mode, and `$c055` enables the second graphics page (`PAGE2`). These registers are part of the Apple II's memory-mapped I/O system, allowing direct control over the display hardware. The Apple II's graphics capabilities were limited by its 128KB memory and reliance on bank-switched memory. Developers had to carefully manage these modes to optimize performance and fit their programs into the available space. Jordan Mechner's use of these techniques reflects his deep understanding of the Apple II hardware, gained through years of experimentation and development. Switching between text and graphics modes was a common requirement for games and applications that needed to display both information and visuals. Mechner's implementation here is notable for its efficiency and clarity, setting a standard for other developers working on the platform. The technique influenced later games that sought to balance cinematic storytelling with gameplay, as seen in titles like Another World and Flashback."
  - id: "final-memory-directives"
    line_start: 1018
    line_end: 1022
    title: "The Closing Lines: Memory and Assembly Directives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The final lines of the file contain assembly directives (`lst`, `ds`, and `usr`) that manage memory and program organization. These directives allocate memory (`ds 1`), define user routines (`usr $a9,21,$b00,*-org`), and turn off the listing (`lst off`). While these lines do not directly contribute to gameplay, they are essential for structuring the program and ensuring it fits within the Apple II's constraints. Assembly directives were a critical part of programming during the 1980s, as they allowed developers to control memory layout and optimize performance. On the Apple II, every byte of memory was precious, and directives like these helped developers manage the limited resources effectively. Jordan Mechner's meticulous use of assembly directives reflects his attention to detail and understanding of the Apple II's architecture. These closing lines mark the end of a highly optimized and carefully crafted program that pushed the limits of the hardware. The techniques used here influenced later assembly programmers and remain a point of study for those interested in retro computing and game development."

---

* misc
org = $f900
DemoDisk = 0
 tr on
 lst off
*-------------------------------
 org org

 jmp VANISHCHAR
 jmp MOVEMUSIC
 clc
 bcc MOVEAUXLC ;relocatable
 jmp FIRSTGUARD
 jmp MARKMETERS

 jmp POTIONEFFECT
 jmp MOUSERESCUE
 jmp STABCHAR
 jmp UNHOLY
 jmp REFLECTION

 jmp MARKKIDMETER
 jmp MARKOPPMETER
 jmp BONESRISE
 jmp DECSTR
 jmp DOSAVEGAME

 jmp LOADLEVELX
 jmp CHECKALERT
 jmp DISPVERSION

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

 dum $f0
]Xcount ds 1
]Xend ds 1
 dend

*-------------------------------
ALTZPon = $c009
ALTZPoff = $c008
RAMWRTaux = $c005
RAMWRTmain = $c004
RAMRDaux = $c003
RAMRDmain = $c002
ADSTOREon = $c001
ADSTOREoff = $c000
RWBANK2 = $c083
RWBANK1 = $c08b

POPside1 = $a9
POPside2 = $ad

FirstSideB = 3

*-------------------------------
*
* Vanish character
*
*-------------------------------
VANISHCHAR
 lda #86
 sta CharFace
 lda #0
 sta CharAction
 sta CharLife
 sec
 sbc OppStrength
 sta ChgOppStr
]rts rts

*-------------------------------
*
*  Move a block of memory
*
*  In: A < X.Y
*
*  20 < 40.60 means 2000 < 4000.5fffm
*  WARNING: If x >= y, routine will wipe out 64k
*
*-------------------------------
 dum locals
]dest ds 2
]source ds 2
]endsourc ds 2
 dend

MOVEMEM sta ]dest+1
 stx ]source+1
 sty ]endsourc+1

 ldy #0
 sty ]dest
 sty ]source
 sty ]endsourc

:loop lda (]source),y
 sta (]dest),y
 iny
 bne :loop

 inc ]source+1
 inc ]dest+1
 lda ]source+1
 cmp ]endsourc+1
 bne :loop
 rts

*-------------------------------
*
* Move 1K of music data from $5000 mainmem to aux l.c.
*
*-------------------------------
MOVEMUSIC
 bit RWBANK1
 bit RWBANK1
 sta RAMRDmain

 lda #$d0
 ldx #$50
 ldy #$54
 jsr MOVEMEM

 sta RAMRDaux
]rts rts

*-------------------------------
*
*  Move $2000.5FFF mainmem to auxiliary language card
*  Also sets interrupt vector ($FFFE.FFFF) in both l.c.'s
*
*  NOTE: This code is loaded into mainmem by MASTER
*  and called while still in mainmem.  Once in aux l.c.
*  this routine is useless!
*
*  Returns control to main l.c. bank 1
*
*-------------------------------
Tmovemem = MOVEMEM-$b000

MOVEAUXLC
 sta ALTZPon
 bit RWBANK2
 bit RWBANK2

 lda #$d0
 ldx #$20
 ldy #$50
 jsr Tmovemem

 bit RWBANK1
 bit RWBANK1

 lda #$d0
 ldx #$50
 ldy #$60
 jsr Tmovemem

* & set VBL interrupts

 lda #vbli ;routine in GRAFIX
 sta $FFFE
 lda #>vbli
 sta $FFFF

 sta ALTZPoff

 lda #vbli
 sta $FFFE
 lda #>vbli
 sta $FFFF ;set in main l.c. too

 rts

*-------------------------------
*
* Player can't run or jump past en-garde guard
*
*-------------------------------
FIRSTGUARD
 lda EnemyAlert
 cmp #2
 bcc ]rts
 lda CharSword
 bne ]rts
 lda OpSword
 beq ]rts
 lda OpAction
 cmp #2
 bcs ]rts

 lda CharFace
 cmp OpFace
 beq ]rts

 jsr getopdist
 cmp #-15
 bcc ]rts

* Bump off guard

 ldx CharBlockY
 lda FloorY+1,x
 sta CharY
 lda #bump
 jsr jumpseq
 jmp animchar

*-------------------------------
*
* Mark strength meters
*
*-------------------------------
Mark3 jsr Mark1 ;mark 3 blocks
 iny
Mark2 jsr Mark1 ;mark 2 blocks
 iny
Mark1 lda #4
 sta height
 clc
 lda #2
 jsr markwipe
 jmp markred

MARKMETERS
 jsr MARKKIDMETER
 jmp MARKOPPMETER

MARKKIDMETER
 ldy #20
 bne Mark3

MARKOPPMETER
 ldy #28
 bne Mark2
]rts rts

*-------------------------------
*
* Potion takes effect
*
*-------------------------------
wtlesstimer = 200
vibetimer = 3

POTIONEFFECT
 lda CharID
 bne ]rts

 ldx lastpotion
 beq ]rts
 bpl :notswd

* Sword (-1)

 lda #1
 sta gotsword
 lda #s_Sword
 ldx #25
 jsr cuesong
 lda #$ff
 sta lightcolor
 lda #3
 sta lightning ;3 white flashes
 rts

* Recharge meter (1)

:notswd cpx #1
 bne :2

 lda KidStrength
 cmp MaxKidStr
 beq ]rts ;already at full strength

 lda #$99
 sta lightcolor
 lda #2
 sta lightning ;2 orange flashes
 lda #s_ShortPot
 ldx #25
 jsr cuesong
 lda #1
 sta ChgKidStr
 rts

* Boost meter (2)

:2 cpx #2
 bne :3
 lda #$99
 sta lightcolor
 lda #5
 sta lightning ;5 orange flashes
 lda #s_Potion
 ldx #25
 jsr cuesong
 jmp boostmeter

* Weightless (3)

:3 cpx #3
 bne :4
 lda #s_ShortPot
 ldx #25
 jsr cuesong
 lda #wtlesstimer
 sta weightless
 lda #vibetimer
 sta vibes
 rts

* Upside down (4)

:4 cpx #4
 bne :5
 lda invert
 eor #$ff
 sta invert
 lda #2
 sta redrawflg
 jmp inverty

* Yecch (5)

:5 cpx #5
 bne :6
 lda #Splat ;yecch
 jsr addsound
 lda #-1
 sta ChgKidStr
 rts
:6
]rts rts

*-------------------------------
*
* Mouse rescues you
*
*-------------------------------
MOUSERESCUE
 jsr LoadKid

 lda #24 ;mouse
 sta CharID
 lda #200
 sta CharX
 ldx #0
 stx CharBlockY
 lda FloorY+1,x
 sta CharY
 lda #-1
 sta CharFace
 sta CharLife
 lda #1
 sta OppStrength

 lda #Mscurry
 jsr jumpseq
 jsr animchar

 jmp SaveShad

*-------------------------------
*
* Stab character
*
*-------------------------------
STABCHAR
 lda CharLife
 bpl ]rts ;already dead
 lda CharSword
 cmp #2
 bne :DL ;defenseless
 lda CharID
 cmp #4
 beq :wounded ;skel has no life points

 lda #1
 jsr decstr
 bne :wounded

 ldx CharID
 beq :killed

 ldx CharID
 cpx #4 ;skeleton
 bne :killed
 lda #0
 sta ChgOppStr ;skel is invincible
]rts rts

:killed jsr getbehind
 cmp #space
 bne :onground
 jsr getdist ;to EOB
 cmp #4
 bcc :onground
;if char is killed at edge, knock him off
 sec
 sbc #14
 jsr addcharx
 sta CharX
 inc CharBlockY
 lda #fightfall
 jsr jumpseq
 jmp :3

:onground lda #stabkill
 bne :2

:wounded lda #stabbed
:2 jsr jumpseq

:1 ldx CharBlockY
 lda FloorY+1,x
 sta CharY
 lda #0
 sta CharYVel

:3 lda #Splat
 jsr addsound

 jmp animchar

* stabbed when defenseless

:DL lda #100
 jsr decstr

 lda #stabkill ;dropdead?
 jmp :killed

*-------------------------------
*
* If shadow dies, you die (& vice versa)
*
*-------------------------------
UNHOLY
 lda level
 cmp #12
 bne ]rts

 lda OpID
 ora CharID
 cmp #1 ;kid & shadow?
 bne ]rts

 lda CharLife
 bpl ]rts
 lda OpLife
 bmi ]rts
;live char, dead opponent
 lda #$ff
 sta lightcolor
 lda #5
 sta lightning
 lda #Splat
 jsr addsound
 lda #100
 jmp decstr
]rts rts

*-------------------------------
*
*  R E F L E C T I O N
*
*-------------------------------
 do DemoDisk
REFLECTION
BONESRISE
 brk
 else

REFLECTION
 jsr LoadKid
 jsr GetFrameInfo

 lda createshad ;flag set?
 cmp #$ff
 beq CreateShad ;yes--reflection comes to life

 jsr getunderft
 cmp #mirror ;is kid standing before mirror?
  bne ]rts ;no

 jsr getreflect ;get char data for reflection

 lda dmirr ;if kid is on wrong side of mirror,
 bmi ]rts ;don't draw reflection

*  Draw kid's reflection (as a pseudo-character)

 jsr setupchar

*  Crop edges

 ldx CharBlockY
 inx
 lda BlockTop,x
 cmp FCharY
 bcs ]rts
 sta FCharCU

 lda CharBlockX ;of mirror
 asl
 asl ;x 4
 clc
 adc #1
 sta FCharCL

 jmp addreflobj ;normal reflection

*-------------------------------
* Get char data for kid's reflection

getreflect
 lda CharBlockX
 jsr getblockej
 clc
 adc #angle+3 ;fudge factor
 sta mirrx ;mirror x-coord (0-139)

 jsr getdist

 ldx CharFace
 bmi :left

 eor #$ff ;facing right--
 clc
 adc #14 ;get dist to back of block

:left sec
 sbc #2 ;another fudge factor
 sta dmirr ;distance from mirror

 lda mirrx
 asl
 sec
 sbc CharX
 sta CharX ;reflection x-coord

 lda CharFace
 eor #$ff
 sta CharFace

]rts rts

*-------------------------------
* Bring reflection to life as shadowman

CreateShad
 jsr getreflect ;get char data for reflection

 lda #0
 sta createshad

 lda #1 ;shadman
 sta CharID

 lda #MirrorCrack
 jsr addsound

 jsr SaveShad

 lda MaxKidStr
 sta MaxOppStr
 sta OppStrength
 lda #1
 sta KidStrength
 jmp markmeters

*-------------------------------
*
* Bones rise
*
*-------------------------------
skelscrn = 1
skelx = 5
skely = 1
skeltrig = 2
skelprog = 2

BONESRISE
 lda level
 cmp #3
 bne ]rts

 lda ShadFace
 cmp #86
 bne ]rts
 lda VisScrn
 cmp #skelscrn
 bne ]rts
 lda exitopen
 beq ]rts
 lda KidBlockX
 cmp #skeltrig
 beq :trig
 cmp #skeltrig+1
 bne ]rts

* Remove dead skeleton

:trig lda VisScrn
 ldx #skelx
 ldy #skely
 jsr rdblock
 pha
 lda #floor
 sta (BlueType),y
 lda #24
 sta height
 lda #2
 jsr markred
 jsr markwipe
 iny
 jsr markred
 jsr markwipe
 pla
 cmp #bones
 bne ]rts

* Create live skeleton

 lda VisScrn
 sta CharScrn

 ldx #skely
 stx CharBlockY
 lda FloorY+1,x
 sta CharY

 lda #skelx
 sta CharBlockX
 jsr getblockej
 clc
 adc #angle+7
 sta CharX

 lda #-1 ;left
 sta CharFace

 lda #arise
 jsr jumpseq
 jsr animchar

 lda #skelprog
 sta guardprog

 lda #-1
 sta CharLife
 lda #3
 sta OppStrength

 lda #0
 sta alertguard
 sta refract
 sta CharXVel
 sta CharYVel

 lda #2
 sta CharSword

 lda #4 ;skeleton
 sta CharID

 jmp SaveShad ;save ShadVars

 fin

*-------------------------------
*
* Decrease strength by A (non-0)
*
* Out: non-0 if char lives, 0 if he dies
*      ChgStrength
*
*-------------------------------
DECSTR
 ldx CharID
 bne :enemy

 cmp KidStrength
 bcs killkid

 eor #$ff
 clc
 adc #1 ;negate
 sta ChgKidStr
 rts

:enemy
 cmp OppStrength
 bcs killopp

 eor #$ff
 clc
 adc #1
 sta ChgOppStr
 rts

*-------------------------------
* Kill character (or opponent)
* Return A = 0
*-------------------------------
killkid
 lda #0
 sec
 sbc KidStrength
 sta ChgKidStr

 lda #0
]rts rts

*-------------------------------
killopp
 lda #0
 sec
 sbc OppStrength
 sta ChgOppStr

 lda #0
]rts rts


*-------------------------------
* Save current game to disk
*
* In: SavLevel = level ($ff to erase saved game)
*-------------------------------
DOSAVEGAME
 lda level
 cmp #FirstSideB
 bcs :doit ;must have reached side B
 lda #Splat
 jmp addsound
:doit

* Put data into save-game data area

 lda origstrength
 sta SavStrength

 lda FrameCount
 sta SavTimer
 lda FrameCount+1
 sta SavTimer+1

 lda NextTimeMsg
 sta SavNextMsg

* Write to disk

 jmp savegame

*-------------------------------
* alt bg & char set list
* Level #:      0  1  2  3  4  5  6  7  8  9 10 11 12 13 14

bgset1 db 00,00,00,00,01,01,01,02,02,02,01,01,02,02,01
bgset2 db 00,00,00,00,01,01,01,02,02,02,01,01,02,02,01
chset db 00,00,00,01,02,02,03,02,02,02,02,02,04,05,05

* blueprint track & region lists (indexed by level #)
* NOTE--make sure these match lists in DIALOGER

bluepTRKlst
 db 33,33,32         ;3 levels on side A
 db 33,33,32,32,31,31   ;12 levels on side B
 db 30,30,29,29,28,28

bluepREGlst
 db 0,1,1
 db 0,1,0,1,0,1
 db 0,1,0,1,0,1

*-------------------------------
*
* Load level from disk
* In: X = level # (0-14)
*
*-------------------------------
LOADLEVELX
 lda bluepTRKlst,x
 sta bluepTRK
 lda bluepREGlst,x
 sta bluepREG

 lda bgset1,x ;A
 pha
 lda bgset2,x ;X
 ldy chset,x ;Y
 tax
 pla

 jmp loadlevel ;in MASTER
]rts rts

*-------------------------------
*
* In: Kid & Shad data
* Out: EnemyAlert
*   2: kid & shad are on same stretch of floor
*   1: slicer, gaps in floor, or other obstacles, but
*      line of sight is clear
*   0: can't see each other
*
*-------------------------------
gfightthres = 28*4

]safe lda #0
 sta EnemyAlert
]rts rts

CHECKALERT
 lda ShadID
 cmp #24 ;mouse?
 beq ]rts
 cmp #1 ;shadowman?
 bne :notshad
 lda level
 cmp #12
 bne ]safe ;fight shadow only on level 12

:notshad
 lda KidPosn
 beq ]safe
 cmp #219
 bcc :noclimb
 cmp #229
 bcc ]safe ;on staircase
:noclimb
 lda ShadFace
 cmp #86
 beq ]safe

 lda KidLife
 and ShadLife
 bpl ]safe ;one is dead

 lda KidScrn
 cmp ShadScrn
 bne ]safe

 lda KidBlockY
 cmp ShadBlockY
 bne ]safe

 lda #2 ;clear path
 sta EnemyAlert

* Get range of blocks to scan (]Xcount --> ]Xend)

 lda KidBlockX
 jsr getblockej
 clc
 adc #7 ;middle of block
 sta ]Xcount

 lda ShadBlockX
 jsr getblockej
 clc
 adc #7
 sta ]Xend

 do 0
 lda ]Xcount
 jsr getblockxp
 ldx #1
 jsr showpage
 lda ]Xend
 jsr getblockxp
 ldx #2
 jsr showpage
 fin

 lda ]Xend
 cmp ]Xcount
 bcs :cont
 tax
 lda ]Xcount
 sta ]Xend
 stx ]Xcount
:cont

* If leftmost block is a slicer, skip it

 lda ]Xcount
 jsr :rdblock
 cmp #slicer
 bne :1
 lda #14
 clc
 adc ]Xcount
 sta ]Xcount

* If rightmost block is a gate, skip it

:1 lda ]Xend
 jsr :rdblock
 cmp #gate
 bne :20
 lda ]Xend
 sec
 sbc #14
 sta ]Xend

:20 lda ]Xend
 cmp ]Xcount
 bcc :rts

* Scan from ]Xcount to ]Xend (left to right)

 lda ]Xcount
:loop cmp ]Xend
 beq :9
 bcs :rts

:9 jsr :rdblock

 cmp #block
 beq :safe
 cmp #panelwif
 beq :safe
 cmp #panelwof
 beq :safe ;solid barrier blocks view

 cmp #loose
 beq :view
 cmp #gate
 bne :2
 lda (BlueSpec),y
 cmp #gfightthres
 bcs :clear
 bcc :view

:2 cmp #slicer
 beq :view

 jsr cmpspace
 bne :clear ;closed gate, slicer, gap in floor, etc.
;are obstacles but don't block view
:view lda #1
 sta EnemyAlert

:clear lda ]Xcount
 clc
 adc #14
 sta ]Xcount
 bne :loop
:rts
]rts rts

:safe lda #0
 sta EnemyAlert
]rts rts

*-------------------------------
* In: A = X-coord
* Out: rdblock results
*-------------------------------
:rdblock jsr getblockxp
 tax
 ldy KidBlockY
 lda KidScrn
 jmp rdblock

*-------------------------------
*
*  Display version # on text page 1 (& wait for keypress)
*
*-------------------------------
DISPVERSION
 lda #" "
 jsr lrcls

 sta RAMWRTmain

 ldx #0
:loop lda textline,x
 cmp #"@"
 beq :done
 sta $400,x ;top line of screen
 inx
 bpl :loop
:done
 lda RAMWRTaux
 sta $c054 ;PAGE2 off
 sta $c051 ;TEXT on

* Wait for keypress

:wloop lda $c000
 bpl :wloop
 sta $c010

 lda $c057 ;HIRES on
 lda $c050 ;TEXT off
 lda PAGE
 bne :1
 lda $c055 ;PAGE2 on
:1
 lda #" "
 jmp lrcls

*-------------------------------
 lst
 ds 1
 usr $a9,21,$b00,*-org
 lst off