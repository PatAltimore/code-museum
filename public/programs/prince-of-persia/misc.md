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
description: "This file contains the miscellaneous routines for Prince of Persia (1989), showcasing clever 6502 assembly techniques that enabled cinematic gameplay on constrained Apple II hardware."

summary:
  - point: "Bank-switched memory management to fit within 128K"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank Switching"
  - point: "Routines for character interaction and animation"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Innovative use of hardware interrupts for smooth gameplay"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Reflection and shadow mechanics as gameplay elements"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Disk save/load routines for persistent game state"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"

enhancements:
  - id: "vanish-character-routine"
    line_start: 67
    line_end: 97
    title: "The Routine That Makes Characters Disappear"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The VANISHCHAR routine is responsible for removing a character from the game world. It sets the character's face, action, and life values to zero, effectively erasing their presence. This routine also adjusts the opponent's strength, ensuring gameplay balance after the character vanishes. In the context of Prince of Persia, this was likely used for scenarios where enemies or the protagonist needed to disappear due to gameplay events, such as falling off a ledge or being defeated. In 1989, programming for the Apple II required meticulous optimization due to its limited memory and processing power. Jordan Mechner, working solo, had to ensure every routine was compact and efficient. VANISHCHAR exemplifies this approach, performing multiple operations in just a few lines of code. The use of direct memory manipulation and arithmetic reflects the constraints of the 6502 assembly language. This routine influenced later games by demonstrating how to handle character removal efficiently. The concept of vanishing characters became a staple in platformers and action games, often tied to animations or sound effects for dramatic effect. Developers studying Prince of Persia would have noted the importance of such routines in maintaining gameplay fluidity and narrative immersion."
  - id: "move-memory-block"
    line_start: 99
    line_end: 118
    title: "How to Move Memory Without Breaking Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "MOVEMEM is a general-purpose routine for copying blocks of memory from one location to another. It uses indexed addressing to iterate through the source and destination addresses, transferring data byte by byte. The inline warning about wiping out 64K if the source and destination overlap highlights the precarious nature of direct memory manipulation in 6502 assembly. In the late 1980s, memory management was a critical skill for programmers working on systems like the Apple II. With only 128K of memory available, Jordan Mechner had to implement bank-switching techniques to access auxiliary memory. MOVEMEM was a foundational routine for these operations, enabling the transfer of data between memory banks efficiently. This approach influenced subsequent games and software that relied on similar constrained hardware. The technique of carefully managing memory blocks became standard practice in assembly programming, particularly for systems with bank-switched memory. MOVEMEM's simplicity and effectiveness serve as a reminder of the ingenuity required to work within the limitations of early computing."
  - id: "move-music-data"
    line_start: 120
    line_end: 136
    title: "Transferring Music Between Memory Banks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "MOVEMUSIC is a specialized routine for transferring 1K of music data from main memory to auxiliary memory. It leverages the MOVEMEM routine to perform the actual data transfer, but adds specific setup instructions to switch memory banks appropriately. This ensures that the music data is accessible to the game's audio subsystem. Music was an essential part of the cinematic experience in Prince of Persia, and managing it on the Apple II required careful planning. The auxiliary memory, often used for less time-sensitive data, allowed Mechner to free up main memory for critical gameplay routines. By dedicating a routine to music data transfer, he ensured that the game's soundtrack could be loaded and played without disrupting other processes. The technique of separating music data into auxiliary memory influenced later games that needed to optimize memory usage for audio. It also highlighted the importance of modular routines in assembly programming, where reusability and clarity were key to managing complex systems. MOVEMUSIC's integration with MOVEMEM showcases how foundational routines can be adapted for specific tasks."
  - id: "move-to-auxiliary-language-card"
    line_start: 152
    line_end: 184
    title: "Switching Memory Banks for Gameplay Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "MOVEAUXLC is a routine for transferring a large block of memory from the main memory to the auxiliary language card. It also sets up interrupt vectors in both memory banks, ensuring that the game can continue to function seamlessly after the transfer. The routine is loaded into main memory by a master program and becomes useless once transferred to auxiliary memory, a clever workaround for the Apple II's memory constraints. Bank-switching was a common technique on the Apple II, allowing developers to access more memory than the system's base configuration provided. Mechner's use of this technique demonstrates his deep understanding of the hardware and his ability to optimize for its limitations. By setting up interrupt vectors, he ensured that the game could handle asynchronous events like screen redraws or input processing even after switching memory banks. This routine influenced later games and software that relied on bank-switched memory for complex operations. It also showcased the importance of planning and foresight in assembly programming, where every byte of memory and every clock cycle mattered. MOVEAUXLC's integration of memory transfer and interrupt setup is a testament to Mechner's skill as a programmer."
  - id: "first-guard-behavior"
    line_start: 186
    line_end: 218
    title: "Why Guards Block Your Path"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "FIRSTGUARD is a routine that prevents the player from running or jumping past an en-garde guard. It checks various conditions, such as the guard's alertness, the player's sword status, and the relative positions of the player and guard. If the player is too close to the guard, the routine triggers a bump animation, forcing the player back. The behavior of guards in Prince of Persia was a key part of the game's challenge and realism. Mechner's implementation of this routine reflects his focus on creating believable interactions between characters. By incorporating checks for distance, facing direction, and actions, he ensured that guards felt like intelligent adversaries rather than static obstacles. This approach to enemy behavior influenced later games that sought to create dynamic and engaging AI. The concept of using proximity and action checks to determine interactions became a standard in platformers and action games. FIRSTGUARD's blend of gameplay mechanics and narrative immersion set a precedent for how enemies could enhance the player's experience."
  - id: "mark-strength-meters"
    line_start: 236
    line_end: 247
    title: "Drawing Strength Meters on the Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "The routines Mark1, MARKMETERS, MARKKIDMETER, and MARKOPPMETER are responsible for drawing strength meters on the screen. These meters visually represent the health or strength of the player and opponents, providing crucial feedback during gameplay. The routines use loops and direct memory manipulation to update the screen efficiently. On the Apple II, drawing graphics required precise control of memory and timing. Mechner's implementation of strength meters showcases his ability to optimize visual updates within the constraints of the hardware. By breaking the task into modular routines, he ensured that the meters could be updated independently and efficiently. This technique influenced later games that used health bars or similar visual indicators. The idea of providing real-time feedback to players became a standard in game design, enhancing the player's ability to strategize and react. The modular approach to screen updates also highlighted the importance of code organization in assembly programming."
  - id: "potion-effects"
    line_start: 257
    line_end: 345
    title: "What Happens When You Drink a Potion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "POTIONEFFECT handles the various effects of potions in the game. Depending on the potion type, it can grant the player a sword, recharge or boost their strength meter, make them weightless, invert the screen, or cause a negative effect. Each effect is implemented as a separate branch within the routine, with specific actions like adjusting strength values, triggering animations, or playing sound effects. Potions were a key gameplay mechanic in Prince of Persia, adding an element of unpredictability and strategy. Mechner's implementation of this routine reflects his focus on creating diverse and impactful gameplay elements. The use of sound effects and visual cues for each potion effect enhances the player's immersion and understanding of the game's mechanics. This approach to item effects influenced later games that used consumables to alter gameplay. The idea of branching logic for item effects became a standard in RPGs and action games, allowing developers to create complex interactions with simple routines. POTIONEFFECT's integration of sound, visuals, and gameplay mechanics set a high bar for item design in video games."
  - id: "mouse-rescue-routine"
    line_start: 347
    line_end: 373
    title: "How a Mouse Saves Your Life"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "MOUSERESCUE is a routine that triggers the mouse rescue sequence in the game. It sets the mouse's character ID and position, adjusts its attributes, and initiates its animation sequence. This routine is a narrative-driven event, showcasing the game's cinematic approach to storytelling. The mouse rescue is one of the memorable moments in Prince of Persia, reflecting Mechner's focus on creating a cohesive and engaging narrative. By integrating gameplay mechanics with story elements, he ensured that the rescue felt impactful and meaningful to the player. This routine influenced later games that sought to blend gameplay and narrative seamlessly. The concept of using scripted events to advance the story became a standard in cinematic games, paving the way for titles like Another World and the modern Uncharted series. MOUSERESCUE's blend of animation, sound, and gameplay mechanics exemplifies the game's innovative approach to storytelling."

---

```asm
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
```