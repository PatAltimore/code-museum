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
description: "This file contains key subroutines from Prince of Persia's Apple II assembly code, showcasing clever memory management, cinematic gameplay mechanics, and hardware-specific optimizations."

summary:
  - point: "Bank-switched memory techniques to fit within 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Rotoscoping animation implemented in assembly for fluid character motion"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Innovative gameplay mechanics like reflection and shadow interaction"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Hardware-specific routines for Apple IIe/IIc memory and interrupts"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Cinematic platformer genre foundations in assembly code"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "vanish-character-subroutine"
    line_start: 67
    line_end: 81
    title: "Vanish character: cinematic death mechanic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The VANISHCHAR subroutine is responsible for removing a character from the game world. It sets the character's face, action, and life attributes to predefined values, effectively marking them as 'vanished.' This routine also adjusts the opponent's strength, ensuring gameplay balance. In the moment, Mechner was solving the problem of how to visually and mechanically remove a defeated character while maintaining fluid gameplay. The computing world of 1989 was constrained by limited memory and processing power, especially on the Apple II series. Mechner's solo development effort required him to optimize every aspect of the game, including character interactions. This subroutine reflects his attention to detail and his ability to create cinematic effects within tight constraints. The concept of removing characters dynamically influenced later games, particularly in the cinematic platformer genre. Developers of games like Another World and Flashback studied Prince of Persia's mechanics, incorporating similar ideas into their own titles."
  - id: "move-memory-block"
    line_start: 83
    line_end: 118
    title: "Move memory block: hardware-level optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The MOVEMEM subroutine transfers a block of memory from one location to another. It uses indexed addressing to copy data byte-by-byte, looping until the entire block is moved. This routine includes a warning about overwriting 64K if the source and destination overlap incorrectly, showcasing the risks of low-level programming. At the time, memory management was a critical skill for developers working on hardware like the Apple II, which had limited RAM and relied on bank-switching. Mechner's approach demonstrates his mastery of the 6502 assembly language and his ability to work within these constraints. This technique influenced memory management practices in other games and systems, as developers sought efficient ways to handle data movement. It also highlights the importance of error-checking in assembly programming, a lesson that resonates in modern software development."
  - id: "move-music-data"
    line_start: 120
    line_end: 136
    title: "Move music data: syncing sound and gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "MOVEMUSIC transfers 1K of music data from main memory to auxiliary memory. It uses the MOVEMEM subroutine to perform the transfer, ensuring that music data is correctly positioned for playback. This routine interacts with hardware-specific registers to switch between memory banks, a common technique on the Apple II. Mechner's goal was to synchronize music with gameplay, creating a cohesive experience for players. In 1989, sound design was an emerging field in game development, and Mechner's work helped establish its importance. By integrating music data management directly into the game's assembly code, he ensured that sound effects and background music enhanced the cinematic feel of Prince of Persia. This approach influenced later games, encouraging developers to prioritize audio as a key component of the gaming experience."
  - id: "move-auxiliary-language-card"
    line_start: 138
    line_end: 184
    title: "Auxiliary language card: memory bank switching"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank-switching"
    image_url: ""
    image_caption: ""
    content: "MOVEAUXLC transfers memory blocks to the auxiliary language card and sets interrupt vectors in both language card banks. This routine is loaded into main memory by the MASTER program and becomes useless once transferred to auxiliary memory. It demonstrates Mechner's deep understanding of the Apple II's hardware, particularly its bank-switching capabilities. In the moment, Mechner was solving the problem of fitting a complex game into the Apple II's limited memory. By leveraging auxiliary memory, he expanded the game's capabilities without requiring additional hardware. This technique was common in the era but rarely executed with such precision. The use of auxiliary memory influenced other developers working on the Apple II, encouraging them to push the limits of the hardware. It also laid the groundwork for memory management techniques in later systems, such as the Super Nintendo and Sega Genesis."
  - id: "first-guard-mechanic"
    line_start: 186
    line_end: 218
    title: "First guard: blocking player progression"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The FIRSTGUARD subroutine prevents the player from running or jumping past an en-garde guard. It checks various conditions, such as the guard's alertness, sword status, and proximity to the player, before deciding whether to block the player's movement. If the guard is defeated, the routine triggers a cinematic sequence where the guard is bumped off. Mechner was addressing the challenge of creating dynamic interactions between characters, a hallmark of the cinematic platformer genre. In 1989, such mechanics were groundbreaking, as most games relied on static enemy behaviors. Mechner's approach added depth to the gameplay, making each encounter feel unique. This mechanic influenced later games, such as the Tomb Raider series, which incorporated dynamic enemy interactions and cinematic sequences. It also showcased the potential of assembly language to create complex gameplay systems."
  - id: "mark-strength-meters"
    line_start: 221
    line_end: 247
    title: "Mark strength meters: visualizing health"
    wikipedia_url: "https://en.wikipedia.org/wiki/Health_(gaming)"
    image_url: ""
    image_caption: ""
    content: "The MARKMETERS subroutine updates the visual representation of the player's and opponent's strength meters. It uses nested calls to mark individual blocks on the screen, ensuring that the meters accurately reflect the characters' health. Mechner was solving the problem of how to convey health information to players in a visually intuitive way. In 1989, health meters were becoming a standard feature in games, but their implementation varied widely. Mechner's approach was both efficient and visually appealing, aligning with the cinematic style of Prince of Persia. This technique influenced the design of health meters in later games, such as Street Fighter II and Mortal Kombat, which used similar visual cues to represent player health. It also highlighted the importance of user interface design in gaming, a lesson that remains relevant today."
  - id: "potion-effects"
    line_start: 249
    line_end: 345
    title: "Potion effects: gameplay modifiers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Power-up"
    image_url: ""
    image_caption: ""
    content: "The POTIONEFFECT subroutine handles the effects of different potions, such as granting a sword, boosting health, or making the player weightless. Each potion type triggers specific actions, including visual effects and sound cues. Mechner was enhancing the gameplay by adding variety and strategic elements through potion mechanics. In 1989, power-ups were a popular feature in games, but their implementation often lacked depth. Mechner's approach added narrative and gameplay significance to each potion, making them integral to the player's experience. This mechanic influenced the design of power-ups in later games, such as The Legend of Zelda and Final Fantasy, which used similar systems to enhance gameplay. It also demonstrated the potential of assembly language to create complex, interactive features within tight constraints."
  - id: "mouse-rescue"
    line_start: 347
    line_end: 373
    title: "Mouse rescue: cinematic storytelling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The MOUSERESCUE subroutine introduces a unique gameplay moment where a mouse saves the player. It sets the mouse's attributes, triggers animations, and updates game variables to reflect the rescue. Mechner was creating a memorable, story-driven moment that added depth to the game. In 1989, such cinematic storytelling was rare in video games, which often focused on gameplay mechanics over narrative. Mechner's approach helped establish the cinematic platformer genre, influencing games like Another World and Limbo. This subroutine showcases the potential of assembly language to create emotionally engaging gameplay moments, a lesson that continues to inspire game developers today."
  - id: "stab-character"
    line_start: 375
    line_end: 443
    title: "Stab character: dynamic combat mechanics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The STABCHAR subroutine handles the mechanics of stabbing a character, including checking their life status, sword attributes, and position. It triggers animations and sound effects based on the outcome, such as killing or wounding the character. Mechner was solving the problem of how to create dynamic combat interactions that felt fluid and responsive. In 1989, combat mechanics in games were often simplistic, relying on basic collision detection. Mechner's approach added depth and realism, making each encounter feel unique. This mechanic influenced the design of combat systems in later games, such as Assassin's Creed and Dark Souls, which emphasized dynamic interactions and cinematic effects. It also demonstrated the potential of assembly language to create complex gameplay systems within tight constraints."
  - id: "unholy-shadow-link"
    line_start: 445
    line_end: 473
    title: "Unholy link: shadow and player connection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The UNHOLY subroutine establishes a connection between the player and their shadow, ensuring that if one dies, the other dies as well. It checks various conditions, such as life status and level number, before triggering the effect. Mechner was exploring the theme of duality and creating a unique gameplay mechanic that tied the player's fate to their shadow. In 1989, such mechanics were groundbreaking, adding narrative depth to the gameplay. This concept influenced later games, such as Ico and Shadow of the Colossus, which explored similar themes of interconnectedness. It also showcased the potential of assembly language to create innovative gameplay features that resonate with players emotionally."
  - id: "display-version-text-rendering"
    line_start: 980
    line_end: 997
    title: "Rendering text directly to screen memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_graphics"
    image_url: ""
    image_caption: ""
    content: "This section begins with the `DISPVERSION` label and handles rendering a text string to the top line of the Apple II screen. The routine uses a loop to copy characters from the `textline` array into the screen memory at address `$400`, which corresponds to the top line in Apple II text mode. The loop terminates when it encounters the '@' character, which acts as a sentinel value. This approach is typical for text rendering on systems like the Apple II, where direct memory manipulation is required to display content. In 1989, the Apple IIe/IIc were still widely used in schools and homes, but their graphical capabilities were limited compared to emerging platforms like the Commodore Amiga or IBM PC. Developers like Jordan Mechner had to work within the constraints of 40-column text mode and limited screen memory. The choice to write directly to memory, rather than relying on higher-level abstractions, reflects the need for speed and efficiency in a game environment. This technique of direct memory manipulation influenced later games on the Apple II and other 8-bit platforms. It demonstrates how developers optimized for hardware constraints, laying the groundwork for techniques used in early PC games and even embedded systems programming. The use of sentinel values for loop termination is a pattern that persists in modern programming, particularly in low-level languages like C."
  - id: "keypress-detection-memory-mapped-io"
    line_start: 1003
    line_end: 1007
    title: "Detecting keypresses via memory-mapped I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory-mapped_I/O"
    image_url: ""
    image_caption: ""
    content: "This section waits for a keypress by polling the Apple II's memory-mapped I/O address `$c000`, which corresponds to the keyboard input register. The loop (`:wloop`) repeatedly checks the register until a key is pressed, indicated by the high bit being set. Once detected, the routine clears the keyboard strobe by writing to `$c010`, resetting the input state. Polling for input was a common technique in the 1980s, especially on systems like the Apple II that lacked interrupt-driven input handling for peripherals. This approach is simple but can be inefficient, as the CPU remains occupied with the polling loop rather than performing other tasks. However, in the context of a game like Prince of Persia, where the input is critical to gameplay, this trade-off is acceptable. Jordan Mechner's use of memory-mapped I/O showcases his deep understanding of the Apple II hardware. This technique influenced other developers working on similar systems, as it provided a straightforward method for handling user input. While polling has largely been replaced by event-driven programming in modern systems, it remains relevant in certain real-time applications, such as embedded systems and retro-style game development."
  - id: "bank-switching-hires-mode"
    line_start: 1009
    line_end: 1016
    title: "Switching memory banks and enabling HIRES mode"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bank_switching"
    image_url: ""
    image_caption: ""
    content: "This section transitions the Apple II from text mode to high-resolution (HIRES) graphics mode. It begins by enabling HIRES mode via the memory-mapped address `$c057` and disabling text mode via `$c050`. The routine then checks the `PAGE` variable to determine which memory bank to activate, toggling between `$c055` (PAGE2 on) and the default bank. Finally, it clears the screen by jumping to the `lrcls` subroutine. Bank-switching was a critical technique for managing the Apple II's limited memory. With only 128KB available, developers had to carefully partition memory between text, graphics, and program code. The Apple II's HIRES mode allowed for detailed visuals but required precise control over memory banks to avoid conflicts. Mechner's use of these techniques reflects his mastery of the Apple II hardware, enabling the cinematic visuals that define Prince of Persia. The transition between text and graphics modes is emblematic of the era's programming challenges, where developers had to balance functionality and performance within tight constraints. This approach influenced later games on the Apple II and similar platforms, inspiring techniques for efficient memory management and graphical rendering. The cinematic platformer genre, pioneered by Prince of Persia, owes much to these innovations, which laid the groundwork for visually rich games on limited hardware."

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