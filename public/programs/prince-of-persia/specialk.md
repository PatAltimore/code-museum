---
title: "SPECIALK.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SPECIALK.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/SPECIALK.S"
year: 1989
author: "Jordan Mechner"
slug: "specialk"
order: 17
description: "The foundational input handling and cheat system for Prince of Persia (1989), showcasing Jordan Mechner's ingenuity in 6502 assembly."

summary:
  - point: "Implements cinematic platformer controls in 6502 assembly"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Uses bank-switched memory to fit within Apple II constraints"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Rotoscoping-inspired animation influenced gameplay design"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Cheat keys and debug tools reflect solo development process"
    link: "https://en.wikipedia.org/wiki/Video_game_development"
    link_label: "Video game development"
  - point: "Optimized for 11 fps gameplay on limited hardware"
    link: "https://en.wikipedia.org/wiki/6502"
    link_label: "6502 microprocessor"

enhancements:
  - id: "keys-detect-keypresses"
    line_start: 138
    line_end: 140
    title: "Detecting keypresses in real-time gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Keyboard_(computing)"
    image_url: ""
    image_caption: ""
    content: "This short routine initializes the detection of keypresses, a fundamental aspect of gameplay input. The code checks the SINGSTEP flag to determine whether a single-step mode is active, which is likely used for debugging or precise control during development. In 1989, the Apple II's hardware constraints meant that input handling had to be efficient and tightly integrated with the rest of the system. Jordan Mechner, working solo, had to ensure that every byte of memory and every cycle of processing was used effectively. This routine is the entry point for processing player input, laying the groundwork for the game's responsive controls. Without such efficient input handling, the fluid and cinematic movement of the Prince would not have been possible."
  - id: "freeze-keypress-handling"
    line_start: 142
    line_end: 158
    title: "Handling the freeze key for debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The 'freeze' routine is a clever mechanism to pause gameplay, likely intended for debugging or testing purposes. It checks for the ESC key and sets flags to halt the game's progression temporarily. This feature reflects Mechner's dual role as both developer and tester, requiring tools to analyze and refine the game's behavior. In the late 1980s, debugging tools were often rudimentary, especially on home computers like the Apple II. Developers frequently embedded such features directly into their code. The freeze functionality also hints at the iterative process of creating Prince of Persia's groundbreaking animations and gameplay mechanics, allowing Mechner to pause and examine specific moments during development."
  - id: "keys2-keyboard-buffer"
    line_start: 162
    line_end: 264
    title: "Storing keypresses in a buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The KEYS2 routine processes and stores keypresses in a buffer, ensuring that player input is registered and acted upon in subsequent gameplay routines. This approach was essential for maintaining responsive controls on the Apple II, where hardware limitations made real-time input handling challenging. Mechner's implementation reflects the careful balance required to achieve fluid gameplay on a machine with only 128K of memory and a 1 MHz processor. By storing keypresses in a buffer, the game could prioritize processing and animation without losing track of player input. This technique is a precursor to modern input handling systems, which rely on similar buffering mechanisms to ensure smooth interaction between players and games."
  - id: "legitkeys-special-keys"
    line_start: 265
    line_end: 359
    title: "Mapping special keys for gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Keyboard_layout"
    image_url: ""
    image_caption: ""
    content: "The LegitKeys routine maps special keys to specific gameplay actions, such as restarting the level or toggling sound. These mappings were critical for creating a user-friendly interface on the Apple II, where players relied on the keyboard for input. Mechner's choice of key mappings reflects his understanding of intuitive design, ensuring that players could quickly access essential functions during gameplay. The inclusion of editor-specific keys, such as 'return,' highlights the dual-purpose nature of the code, serving both as a game and a development tool. This routine underscores the challenges of designing controls for early computers, where keyboards were the primary input device, and gamepads were not yet standard."
  - id: "temp-devel-debugging-tools"
    line_start: 379
    line_end: 546
    title: "Temporary development keys for testing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Software_testing"
    image_url: ""
    image_caption: ""
    content: "The TempDevel section includes a set of development-only keys, allowing Mechner to test and debug various aspects of the game during development. These keys provide shortcuts for actions like skipping levels, toggling blackout mode, and adjusting game speed. Such tools were invaluable for a solo developer working under tight constraints, enabling rapid iteration and refinement of gameplay mechanics. The presence of these keys also offers a glimpse into the development process of Prince of Persia, where Mechner had to balance creativity with technical limitations. While these keys were removed in the final version, they played a crucial role in shaping the game's polished experience."
  - id: "addkey-buffer-management"
    line_start: 567
    line_end: 584
    title: "Managing the keyboard buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Circular_buffer"
    image_url: ""
    image_caption: ""
    content: "The addkey routine manages the keyboard buffer, ensuring that keypresses are stored efficiently and do not overflow. By using a circular buffer, Mechner optimized memory usage and maintained consistent input handling, even under the constraints of the Apple II's limited resources. This technique allowed the game to process player input seamlessly, contributing to the fluid controls that became a hallmark of Prince of Persia. The use of a circular buffer reflects Mechner's deep understanding of low-level programming and his ability to adapt to the challenges of developing on early home computers. This routine is a testament to the ingenuity required to create responsive gameplay on hardware with minimal processing power."
  - id: "checkcode-cheat-sequences"
    line_start: 647
    line_end: 681
    title: "Validating cheat code sequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cheat_code"
    image_url: ""
    image_caption: ""
    content: "The checkcode routine validates cheat code sequences entered by the player, enabling special features or debugging tools. This functionality reflects the dual-purpose nature of the code, serving both gameplay and development needs. Cheat codes were a common feature in games of the era, providing players with hidden shortcuts and developers with testing tools. Mechner's implementation ensures that cheat codes are recognized accurately, even when entered in lowercase. This attention to detail highlights his commitment to creating a polished experience, both for players and for himself as the developer. The inclusion of cheat codes also adds a layer of interactivity and discovery to the game, enhancing its replayability."
  - id: "kread-keyboard-control"
    line_start: 718
    line_end: 787
    title: "Keyboard control for player movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_control"
    image_url: ""
    image_caption: ""
    content: "The KREAD routine translates keyboard input into player movement, mapping keypresses to directional controls. This functionality is at the heart of Prince of Persia's gameplay, enabling the precise and fluid movement that defined the cinematic platformer genre. Mechner's implementation accounts for both fresh and stale keypresses, ensuring responsive controls even under the Apple II's hardware constraints. The routine's design reflects the importance of intuitive input handling in creating an immersive gaming experience. By prioritizing smooth and accurate movement, Mechner laid the groundwork for the game's innovative animation system, which relied on rotoscoping to bring the Prince's actions to life."

---

* specialk
EditorDisk = 0
FinalDisk = 0 ;removes all cheat keys
DebugKeys = 0
 tr on
 lst off
org = $d900
*-------------------------------
*
*  PRINCE OF PERSIA
*  Copyright 1989 Jordan Mechner
*
*-------------------------------
 org org

 jmp KEYS
 jmp CLRJSTK
 jmp ZEROSOUND
 jmp ADDSOUND
 jmp FACEJSTK

 jmp SAVESELECT
 jmp LOADSELECT
 jmp SAVEDESEL
 jmp LOADDESEL
 jmp INITINPUT

 jmp DEMOKEYS
 jmp LISTTORCHES
 jmp BURN
 jmp GETMINLEFT
 jmp KEEPTIME

 jmp SHORTENTIME
 jmp CUESONG
 jmp DoSaveGame
 jmp LoadLevelX
 jmp decstr

 jmp DLOOP
 jmp STROBE

*-------------------------------
 lst
 put eq
 lst
 put gameeq
 lst
 put soundnames
 lst
 put movedata
 lst off

*-------------------------------
initAMtimer = 10 ;antimatter cheat key timer

 dum locals
]temp ds 1
]count ds 2
 dend

POPside1 = $a9
POPside2 = $ad

FirstSideB = 3

*-------------------------------
min = 725 ;# frames per "minute"
  ;(actual frame rate approx. 11 fps)
sec = min/60
t = 60 ;game time limit

*-------------------------------
*  Key equates

CTRL = $60
ESC = $9b
DELETE = $7f
SHIFT = $20

*  Player control keys

kleft = "j"
kdown = "k"
kright = "l"
kupleft = "u"
kup = "i"
kupright = "o"

*  Special keys (legit)

kfreeze = ESC
krestart = "r"-CTRL
kabort = "a"-CTRL
ksound = "s"-CTRL
kmusic = "n"-CTRL
ksetkbd = "k"-CTRL
ksetjstk = "j"-CTRL
ksavegame = "g"-CTRL
kversion = "v"-CTRL
kreturn = "m"-CTRL ;editor disk only
kshowtime = " "
kflipx = "x"-CTRL
kflipy = "y"-CTRL

*  Special keys (development)

knextlevel = ")"
kclean = "m"-CTRL
kscreendump = "@"
kreload = "c"-CTRL
kreboot = "z"-CTRL
kforceredraw = "f"-CTRL
kblackout = "B"
kspeedup = "]"
kslowdown = "["
kantimatter = "q"-CTRL
kupone = "e"-CTRL
kautoman = "A"
kincstr = "S"
kdecstr = "D"
kincmax = "F"
kzapgard = "Z"
kplayback = "p"-CTRL
kskip5 = "+"
ktimeback = "<"
ktimefwd = ">"
ktimeup = "M"
kerasegame = "*"

*-------------------------------
*
*  K E Y S
*
*  Detect & respond to keypresses
*
*-------------------------------
KEYS
 lda SINGSTEP
 beq KEYS1

freeze lda $C000
 bpl freeze

 cmp #kfreeze
 beq :fradv

 ldx #0
 stx SINGSTEP

 lda #0 ;ignore the keypress that breaks ESC
 beq KEYS2

:fradv lda #1
 sta SINGSTEP
 sta $C010
 sta keypress
]rts rts

KEYS1 lda $C000 ;ASCII value of last keypress
 ;(Hibit is keyboard strobe)
KEYS2 sta keypress

 lda $C010 ;Hibit is any-key-down flag
 ;(Clears keyboard strobe)
 sta keydown

 jsr KREAD ;Keyboard control

 lda keypress
 bpl ]rts

 do DebugKeys

 ldx develment
 beq :nogo ;GO codes work only in cheat mode
 cmp #"0"
 bcc :nogo
 cmp #"9"+1
 bcs :nogo

* We have a keypress 0-9
* Check if it follows a "GO" key sequence

 lda #C_go0
 ldx #>C_go0
 jsr checkcode
 bne :nogo0
 lda #0 ;1st digit
:golevel clc
 adc keypress
 sec
 sbc #"0" ;2-key value

 cmp #4 ;only levels 4-12 accessible
 bcc ]rts
 cmp #13
 bcs ]rts
 sta NextLevel
 jsr shortentime
]rts rts

:nogo0 lda #C_go1
 ldx #>C_go1
 jsr checkcode
 bne :nogo
 lda #10
 bne :golevel

 fin

* Normal key handling

:nogo lda keypress
 jsr addkey ;Add key to kbd buffer

 do FinalDisk
 else

* Set development flag?

 lda #C_devel
 ldx #>C_devel
 jsr checkcode
 bne :1
 lda #1
 sta develment
 jmp gtone
:1
 fin

* Skip to next level?

 lda #C_skip
 ldx #>C_skip
 jsr checkcode
 bne :2
 lda #3 ;up to level 4
 ldx develment
 beq :limit
 lda #11 ;or level 12 in cheat mode
:limit cmp level
 bcc :2
 inc NextLevel

 jsr shortentime
:2
 fin

* Special keys

 jsr LegitKeys

 jsr DevelKeys

 jsr TempDevel

]rts rts

*-------------------------------
*
*  L E G I T   K E Y S
*
*-------------------------------
LegitKeys
 lda keypress
 cmp #kfreeze
 bne :1
 jmp freeze

:1 cmp #krestart
 bne :1a
 jmp goattract ;in topctrl

:1a cmp #kabort
 bne :1b
 jmp restart

:1b do EditorDisk
 cmp #kreturn
 bne :2
 jmp gobuild
 fin

* Keyboard/joystick

:2 cmp #ksetkbd
 bne :30
 lda #0
 sta joyon
]sk1 jmp gtone

:30 cmp #ksetjstk
 bne :31
 jsr setcenter
 jmp ]sk1

:31 cmp #kflipx
 bne :32
 lda jhoriz
 eor #1
 sta jhoriz
 bpl ]sk1

:32 cmp #kflipy
 bne :3
 lda jvert
 eor #1
 sta jvert
 bpl ]sk1

* Sound on/off

:3 cmp #ksound
 bne :16
]togsound
 jsr zerosound
 lda soundon
 eor #1
 sta soundon
 bne ]sk1
 rts

:16 cmp #kmusic
 bne :26
 lda musicon
 eor #1
 sta musicon
 bne ]sk1
 rts

:26 cmp #kversion
 bne :17
 jmp dispversion ;display version #

* Save/load game

:17 cmp #ksavegame
 bne :18
 lda level
 sta SavLevel
 jmp DoSaveGame

* Show time left

:18 cmp #kshowtime
 bne :19
 lda #3
 sta timerequest
 rts

:19
]rts rts

*-------------------------------
*
*  D E V E L O P M E N T - O N L Y   K E Y S
*
*-------------------------------
DevelKeys
 lda develment ;development flag
 beq ]rts

 jsr checkcodes ;secret codes

 lda keypress
 cmp #kclean
 bne :1
 lda #0
 sta develment
 rts
:1
]rts rts

*-------------------------------
* Temp development keys
* (remove for final version)
*-------------------------------
TempDevel
 do DebugKeys

 lda develment ;development flag
 beq ]rts

 lda keypress
 cmp #kforceredraw
 bne :10
 lda #2
 sta redrawflg
 lda #0
 sta blackflag
 rts

:10 cmp #kblackout
 bne :9
 lda blackflag
 eor #$ff
 sta blackflag
]rts rts

:9 cmp #kantimatter
 bne :17
 lda #initAMtimer
 sta AMtimer
 rts

:17 cmp #kincstr
 bne :20
 inc ChgKidStr
 inc ChgOppStr
 rts

:20 cmp #kincmax
 bne :36
 jmp boostmeter

:36 cmp #knextlevel
 bne :28
 inc NextLevel
 rts

:28 cmp #kskip5
 bne :30
 lda level
 clc
 adc #5
 sta NextLevel
 rts
:30

* keys 0-9

 lda keypress
 cmp #"0"
 bcc :non
 cmp #"9"+1
 bcs :non
 sec
 sbc #"0"
 sta guardprog
]sk1 jmp gtone

* non-numeric keys

:non cmp #kreload
 bne :8
 jsr preload
 lda #2
 sta redrawflg
 jsr reload
 jmp postload

* speed up/slow down delay loop

:8 cmp #kspeedup
 bne :13
 lda SPEED
 cmp #5
 bcc :12
 sec
 sbc #4
 sta SPEED
 jmp ]sk1
:12 lda #1 ;fastest
 sta SPEED
]rts rts

:13 cmp #kslowdown
 bne :14
 jsr gtone
 lda SPEED
 clc
 adc #4
 sta SPEED
 rts

* Screen dump

:14 cmp #kscreendump
 bne :15
 lda PAGE
 jmp screendump

:15 cmp #kupone
 bne :19
 lda KidY
 sec
 sbc #63 ;BlockHeight
 sta KidY
 dec KidBlockY
 rts

:19 cmp #kdecstr
 bne :21
 dec ChgKidStr
]rts rts

:21 cmp #kautoman
 bne :23
 lda ManCtrl
 eor #$ff
 sta ManCtrl
 rts

* Change levels

:23
 cmp #kplayback
 bne :24
 lda #1
 sta level
 lda #2
 sta NextLevel
 rts

:24 cmp #ktimeback
 bne :31
 lda #-2
:chgtime clc
 adc FrameCount+1
 sta FrameCount+1
 rts

:31 cmp #ktimefwd
 bne :32
 lda #2
 bne :chgtime

:32 cmp #kerasegame
 bne :33
 lda #$ff
 sta SavLevel
 jmp DoSaveGame

:33 cmp #ktimeup
 bne :34
 lda #$ff
 sta FrameCount+1
 rts

:34
 fin
]rts rts

*-------------------------------
* Temporarily change BBundID to reload code & data from side 1

postload
]sm lda #$a9
 sta BBundID
 rts

preload
 lda BBundID
 sta ]sm+1
 lda #POPside1
 sta BBundID
 rts

*-------------------------------
*
* A D D K E Y
*
* In: A = key value
*
*-------------------------------
addkey
 ldx keybufptr ;index to last key entry
 inx
 cpx #keybuflen
 bcc :ok
 ldx #0 ;wrap around
:ok stx keybufptr

 sta keybuf,x
]rts rts

*-------------------------------
*
*  C H E C K   C O D E S
*
*  Only work in devel mode
*
*-------------------------------
checkcodes
 do FinalDisk
 rts
 else

 lda #C_boost
 ldx #>C_boost
 jsr checkcode
 bne :1
 jsr boostmeter
 lda MaxKidStr
 sta origstrength
 rts

:1 lda #C_restore
 ldx #>C_restore
 jsr checkcode
 bne :2
 jmp rechargemeter

:2 lda #C_zap2
 ldx #>C_zap2
 jsr checkcode
 bne :3
;zap guard down to 0
 lda #0
 sec
 sbc OppStrength
 sta ChgOppStr
 rts

:3 lda #C_zap1
 ldx #>C_zap1
 jsr checkcode
 bne :4
 ;zap guard down to 1
 lda #1
 sec
 sbc OppStrength
 sta ChgOppStr
 rts

:4 lda #C_tina
 ldx #>C_tina
 jsr checkcode
 bmi :5
 lda #14
 sta NextLevel
 jsr shortentime
 rts
:5
]rts rts
 fin

*-------------------------------
*
* Compare keybuf sequence against code sequence
*
* In: A-X = code sequence address lo-hi
* Return A = 0 if it matches, else ff
*
*-------------------------------
checkcode
 sta :smod+1
 stx :smod+2

 ldx keybufptr ;last key entry
 ldy #0 ;last char of code seq
:loop
:smod lda $ffff,y ;smod
 beq ]rts ;0 = code seq delimiter
 cmp keybuf,x
 beq :match
 cmp #"A" ;alpha?
 bcc :fail
 cmp #"Z"+1
 bcs :fail
 ora #$20 ;yes--try LC too
 cmp keybuf,x
 bne :fail

:match iny
 dex
 bpl :loop
 ldx #keybuflen-1 ;wrap around
 bpl :loop

:fail lda #$ff
]rts rts

*-------------------------------
*
* Key sequence codes
*
* Use all caps; LC will be accepted too
*
*-------------------------------
C_skip rev "SKIP"
 db 0

 do FinalDisk
 else

C_devel rev "POP"
 db 0
C_go0 rev "GO0"
 db 0
C_go1 rev "GO1"
 db 0
C_zap2 rev "ZAP"
 db 0
C_boost rev "BOOST"
 db 0
C_restore rev "R"
 db 0
C_zap1 rev "Z"
 db 0
C_tina rev "TINA"
 db 0

 fin

*-------------------------------
*
*  K R E A D
*
*  Keyboard player control
*
*  (Register a keypress for as long as key is held down)
*
*  Out: kbdX, kbdY
*
*-------------------------------
KREAD
 lda #0
 sta kbdX
 sta kbdY

 lda keypress
 bmi :cont ;fresh press

 ldx keydown
 bpl ]rts ;No fresh press & no key down

 ora #$80 ;stale press, key still down
:cont
 cmp #kleft
 beq :left
 cmp #kleft-SHIFT
 bne :1

:left lda #-1
:setx sta kbdX
 rts

:1 cmp #kright
 beq :right
 cmp #kright-SHIFT
 bne :2

:right lda #1
 bne :setx

:2 cmp #kup
 beq :up
 cmp #kup-SHIFT
 bne :3

:up lda #-1
:sety sta kbdY
 rts

:3 cmp #kdown
 beq :down
 cmp #kdown-SHIFT
 bne :4

:down lda #1
 bne :sety

:4 cmp #kupleft
 beq :ul
 cmp #kupleft-SHIFT
 bne :5

:ul lda #-1
 sta kbdX
 bne :sety

:5 cmp #kupright
 beq :ur
 cmp #kupright-SHIFT
 bne :6

:ur lda #1
 sta kbdX
 lda #-1
 sta kbdY
 bne :sety
:6

]rts rts
*-------------------------------
FACEJSTK
 lda #0
 sec
 sbc JSTKX
 sta JSTKX ;reverse jstk x

 ldx clrF
 lda clrB
 sta clrF
 stx clrB ;& switch clrF/clrB

]rts rts

*-------------------------------
*
*  Note: Jstk-push flags are saved as if back = R, fwd = L
*  (i.e., char is facing L)
*
*-------------------------------
SAVESELECT
 ldx #4
:loop lda clrF,x
 sta clrSEL,x
 dex
 bpl :loop
 rts

*-------------------------------
LOADSELECT
 ldx #4
:loop lda clrSEL,x
 sta clrF,x
 dex
 bpl :loop
 rts

*-------------------------------
SAVEDESEL
 ldx #4
:loop lda clrF,x
 sta clrDESEL,x
 dex
 bpl :loop
 rts

*-------------------------------
LOADDESEL
 ldx #4
:loop lda clrDESEL,x
 sta clrF,x
 dex
 bpl :loop
 rts

*-------------------------------
INITINPUT
 lda #0

 ldx #4
:loop sta clrDESEL,x
 sta clrSEL,x
 dex
 bpl :loop
]rts rts

*-------------------------------
*
*  C L E A R   J O Y S T I C K
*
*  In/out: JSTKX, JSTKY, btn
*          clrF-B-U-D-btn
*
*  clr = 0: no press
*  clr = 1: used press
*  clr = -1: unused press
*
*  Assume char is facing L
*
*-------------------------------
*
*  Input consists of 5 "buttons": forward, back, up, down,
*  and the real button.  Each button has its own "clr" flag:
*  clrF,B,U,D & btn.
*
*  When ClrJstk sees a button down:
*    If clr = 1 or -1... leave it alone
*    If clr = 0... set clr = -1
*
*  When ClrJstk sees a button up:
*    If clr = 0 or -1... leave it alone
*    If clr = 1... set clr = 0
*
*  When GenCtrl acts on a button press, it sets clr = 1.
*
*-------------------------------
CLRJSTK
 lda clrF
 bmi :1 ;leave it set at -1

 ldx JSTKX ;jstk fwd?
 bmi :yesF ;yes--if clr = 0, set clr = -1
;no--set clr = 0
 lda #0
 beq :staF

:yesF cmp #0
 bne :1

 lda #-1
:staF sta clrF

*-------------------------------
:1 lda clrB
 bmi :2

 ldx JSTKX
 cpx #1
 beq :yesB

 lda #0
 beq :staB

:yesB cmp #0
 bne :2

 lda #-1
:staB sta clrB

*-------------------------------
:2 lda clrU
 bmi :3

 ldx JSTKY
 bmi :yesU

 lda #0
 beq :staU

:yesU cmp #0
 bne :3

 lda #-1
:staU sta clrU

*-------------------------------
:3 lda clrD
 bmi :4

 ldx JSTKY
 cpx #1
 beq :yesD

 lda #0
 beq :staD

:yesD cmp #0
 bne :4

 lda #-1
:staD sta clrD

*-------------------------------
:4 lda clrbtn
 bmi :5

 ldx btn
 bmi :yesbtn

 lda #0
 beq :stabtn

:yesbtn cmp #0
 bne :5

 lda #-1
:stabtn sta clrbtn

:5
]rts rts

*-------------------------------
*
*  Z E R O S O U N D
*
*  Zero sound table
*
*-------------------------------
ZEROSOUND
 lda #0 ;# sounds in table
 sta soundtable
 rts

*-------------------------------
*
*  A D D S O U N D
*
*  Add sound to sound table
*  (preserve registers)
*
*  In: A = sound #
*
*-------------------------------
]temp1 ds 1

ADDSOUND
 stx ]temp1

 ldx soundtable
 cpx #maxsfx
 bcs :rts ;sound table full

 inx
 sta soundtable,x
 stx soundtable ;# sounds in table

:rts ldx ]temp1
 rts

*-------------------------------
*
*  Demo keys (Call immediately after regular KEYS routine)
*
*  All keys interrupt demo except ESC and CTRL-S
*
*  Out: FF if interrupt, else 00
*
*-------------------------------
DEMOKEYS
 lda level
 bne :cont ;not in demo

 lda $c061
 ora $c062 ;button?
 bmi :interrupt
 lda keypress
 bpl :cont
 cmp #ESC
 beq :cont
 cmp #ksound
 beq :cont
:interrupt
 lda #$ff
 rts
:cont lda #0
 rts

*-------------------------------
*
* Special routine for use by BURN
*
* Make a list of visible torches--don't disturb trans list
*
*-------------------------------
maxtorches = 8

torchx ds maxtorches+1
torchy ds maxtorches+1
torchstate ds maxtorches+1
torchclip ds maxtorches+1

]numtorches = locals

torchcount ds 1

LISTTORCHES
 lda #0
 sta ]numtorches

 lda VisScrn
 jsr calcblue

 ldy #29

:loop jsr :sub

 ldx ]numtorches
 cpx #maxtorches
 bcs :max

 dey
 bpl :loop

 ldx ]numtorches
:max lda #$ff
 sta torchx,x
 sta torchcount ;start BURNing with torch #0
]rts rts

:sub lda (BlueType),y
 and #idmask
 cmp #torch
 bne ]rts
 lda fredbuf+1,y
 sta BOTCUT ;temp

 tya
 pha
 jsr unindex
;Out: A = tempblockx, X = tempblocky
 pha
 txa
 ldx ]numtorches
 tay
 lda BlockBot+1,y
 sec
 sbc #3
 sta torchy,x
 lda BOTCUT ;0 or non0
 sta torchclip,x
 pla
 clc
 adc #1
 cmp #10
 bcs ]rts
 asl
 asl
 sta torchx,x

 pla
 tay
 lda (BlueSpec),y
 sta torchstate,x

 inc ]numtorches
]rts rts

*-------------------------------
*
* B U R N
*
* Animate torch flames (for use while music is playing)
*
* NOTE--this routine bypasses normal graphics system
* and draws directly on the displayed page
* Leaves trans list, redraw buffers, etc. undisturbed
*
*-------------------------------
BURN
 lda torchx
 bmi ]rts ;no torches on this screen

 ldx torchcount ;last torch burned
 inx
 lda torchx,x
 bpl :ok ;torchx = $ff means "end of torch list"
 ldx #0 ;start again at beginning of list
:ok stx torchcount
 lda torchx,x
 sta XCO
 lda torchy,x
 sta YCO
 lda torchclip,x
 sta BOTCUT
 lda torchstate,x
 jsr getflameframe
 sta torchstate,x
 tax
 jsr setupflame
 lda BOTCUT
 bne :partial
:whole jmp fastlay  ;<---DIRECT HIRES CALL
]rts rts

* If bottom portion of flame would overlap with someone's
* head, clip it (use LAY)

:partial
 jsr initlay
 lda #0
 sta OFFSET
 lda YCO
 sec
 sbc #4
 sta BOTCUT
 jmp lay ;<---DIRECT HIRES CALL

*-------------------------------
*
* Get # of minutes (or seconds) left
*
* In: FrameCount (0-65535)
* Out: MinLeft (BCD byte: $00-99) = # of minutes left
*      SecLeft = # of seconds left (during final minute)
*
*-------------------------------
GETMINLEFT
 lda #0
 sta ]count
 sta ]count+1

 lda #min
 sta :sm1+1
 lda #>min
 sta :sm2+1
 jsr :sub ;get MinLeft
 sty MinLeft
 cpy #2
 bcs ]rts

* Final minute only: count seconds

 lda #59*min
 sta ]count
 lda #>59*min
 sta ]count+1

 lda #sec
 sta :sm1+1
 lda #>sec
 sta :sm2+1
 jsr :sub ;get SecLeft
 sty SecLeft
 rts

* Sub returns min/sec left

:sub ldy #$61 ;counter

:loop lda ]count+1
 cmp FrameCount+1
 bcc :1
 bne ]rts
 lda ]count
 cmp FrameCount
 bcs ]rts
:1
 lda ]count
 clc
:sm1 adc #min
 sta ]count
 lda ]count+1
:sm2 adc #>min
 sta ]count+1

 sed
 tya
 sec
 sbc #1
 cld
 tay
 bpl :loop
 ldy #0
]rts rts

*-------------------------------
timetable
:0 dw t-60*min
 dw t-55*min
 dw t-50*min
 dw t-45*min
 dw t-40*min
 dw t-35*min
 dw t-30*min
 dw t-25*min
 dw t-20*min
 dw t-15*min
:20 dw t-10*min
 dw t-5*min
 dw t-4*min
 dw t-3*min
 dw t-2*min
 dw t-1*min+1
 dw t*min+5 ;5 frames after t=0: game over
 dw 65535

nummsg = *-timetable

*-------------------------------
*
* Keep track of time remaining
*
*-------------------------------
]rts rts
KEEPTIME
; lda autopilot
; bne ]rts
 lda level
 beq ]rts ;not in demo or during playback

 lda KidLife
 bpl ]rts ;clock stops when kid is dead

* Inc frame counter

 inc FrameCount
 bne :1
 inc FrameCount+1
:1 bne :2
 lda #$ff
 sta FrameCount
 sta FrameCount+1 ;don't wrap around

* time for next message yet?

:2 ldy NextTimeMsg ;0-2-4 for 1st, 2nd, 3rd msgs
 cpy #nummsg
 bcs ]rts ;no more msgs
 lda FrameCount+1
 cmp timetable+1,y
 bcc ]rts ;not yet
 lda FrameCount
 cmp timetable,y
 bcc ]rts

* Yes--is this a convenient time to show msg?

 lda msgtimer
 bne ]rts ;wait till other msgs are gone

* Yes--show msg (& inc NextTimeMsg)

 inc NextTimeMsg
 inc NextTimeMsg

 lda #2
 sta timerequest
]rts rts

*-------------------------------
*
* Shorten remaining time to 15 minutes
* (e.g., 1st time player cheats by skipping a level)
*
*-------------------------------
SHORTENTIME
 ldy NextTimeMsg
 cpy #20
 bcs ]rts ;time is already short enough
 ldy #18
 sty NextTimeMsg
 lda timetable,y
 sta FrameCount
 lda timetable+1,y
 sta FrameCount+1
]rts rts

*-------------------------------
*
* Cue song
*
* In: A = song #
*     X = # of cycles within which song must be played
*
*-------------------------------
CUESONG
 sta SongCue
 stx SongCount
 rts

*-------------------------------
*
*  Strobe keyboard
*
*-------------------------------
DLOOP
STROBE jsr keys ;Detect & respond to keypresses
 jsr controller
]rts rts


*-------------------------------
 lst
eof ds 1
  usr $a9,19,$b00,*-org
 lst off