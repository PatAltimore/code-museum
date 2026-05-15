---
title: "SOUND.S"
program: "Prince of Persia (Apple II)"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SOUND.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01%20POP%20Source/Source/SOUND.S"
year: 1989
author: "Jordan Mechner"
slug: "sound"
order: 1
description: "The entire sound system for Prince of Persia — twenty distinct sounds, built on a single toggling bit."

summary:
  - point: "The complete sound engine fits in under 150 lines of 6502 assembly"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II hardware"
  - point: "A dispatch table of 20 named sounds driven by self-modifying code"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Every sound reduces to a single primitive: a busy-loop toggling address $C030"
    link: "https://en.wikipedia.org/wiki/Apple_II_sound"
    link_label: "Apple II sound"

enhancements:
  - id: "speaker-hw"
    line_start: 1
    line_end: 15
    title: "One Bit of Sound"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Apple_II_typical_configuration_1977.png/440px-Apple_II_typical_configuration_1977.png"
    image_caption: "Apple II (1977). The only audio hardware: a single speaker wired to one memory address. Public domain."
    content: "The Apple II had no sound chip. Its only audio capability was a single-bit speaker that could be toggled by reading or writing to memory address $C030. Every time you touched that address, the speaker cone moved — in or out. Everything — pitch, duration, timbre — had to be synthesized entirely in software by precisely controlling how often that toggle happened. Prince of Persia's entire sound engine is built on this single primitive."

  - id: "dispatch-table"
    line_start: 22
    line_end: 47
    title: "The Sound Dispatch Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dispatch_table"
    image_url: ""
    image_caption: ""
    content: "This lookup table maps 20 named sound identifiers to the addresses of their handler routines. The names themselves — DoPlateDown, DoSplat, DoImpaled, DoSwordClash1, DoJawsClash — read like a storyboard for every way the prince can die or interact with the dungeon. Each entry is a 16-bit address stored as two bytes (low byte, high byte), the standard 6502 little-endian convention. The table is the entire interface between the game logic and the sound engine."

  - id: "self-modifying"
    line_start: 97
    line_end: 115
    title: "Self-Modifying Code: jmp $ffff"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "This is the heart of the dispatch mechanism. makesound receives a sound number in the accumulator, doubles it (asl) to get a byte offset into the lookup table, reads the two-byte address stored there, and writes those bytes directly into the operand of the jmp instruction at :sm. The CPU then executes jmp $ffff — except by the time it runs, the $ffff has been overwritten with the real destination. This was a common and accepted technique in 6502 programming: using RAM as its own instruction stream. Modern CPUs with instruction caches make this approach impossible on general hardware."

  - id: "tone-primitive"
    line_start: 194
    line_end: 225
    title: "The tone Primitive"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pulse-width_modulation"
    image_url: ""
    image_caption: ""
    content: "Every sound in the game ultimately calls this single subroutine. The Y and X registers carry a 16-bit pitch value; the accumulator carries duration. The outer loop (outloop) toggles the speaker by hitting the spkr address with bit, then runs two inner busy-loops (midloop, inloop) counting up to the pitch value. The tighter the loop, the higher the frequency. Duration counts down in the outer loop. There is no timer, no interrupt, no DMA — just the CPU counting cycles, hoping the game loop calls it at the right time. The result is surprisingly recognizable: the gate slam, the sword clash, the death splat all emerge from this same dozen lines."
---
* sound
org = $ea00
 lst off
*-------------------------------
*
*   S  O  U  N  D
*
*-------------------------------
 org org

 jmp PLAYBACK

*-------------------------------
savex ds 1

spkr = $c030

*-------------------------------
 put soundnames
 put gameeq
 put eq

*-------------------------------
*
*  L O O K U P
*
*  Sound routine lookup table
*
*-------------------------------
lookup

:0 dw DoPlateDown
:1 dw DoPlateUp
:2 dw DoGateDown
:3 dw DoSpecialKey1
:4 dw DoSpecialKey2
:5 dw DoSplat
:6 dw DoMirrorCrack
:7 dw DoLooseCrash
:8 dw DoGotKey
:9 dw DoFootstep
:10 dw DoRaisingExit
:11 dw DoRaisingGate
:12 dw DoLowerGate
:13 dw DoSmackWall
:14 dw DoImpaled
:15 dw DoGateSlam
:16 dw DoFlashMsg
:17 dw DoSwordClash1
:18 dw DoSwordClash2
:19 dw DoJawsClash

endlook

maxaddr = endlook-lookup

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
ADDSOUND
 stx savex

 ldx soundtable
 cpx #maxsfx
 bcs :rts ;sound table full

 inx
 sta soundtable,x
 stx soundtable ;# sounds in table

:rts ldx savex
 rts

*-------------------------------
*
*  P L A Y B A C K
*
*  Playback all sounds listed in sound table
*
*-------------------------------
PLAYBACK
 lda soundon
 beq :rts ;sound switched off?

 ldx soundtable
 beq :rts ;sound table empty?

:loop lda soundtable,x

 stx savex

 jsr makesound ;make sound #A
;(may destroy registers)
 ldx savex

 dex
 bne :loop

:rts rts

*-------------------------------
*
*  M A K E S O U N D
*
*  In: A = sound # (0-127)
*
*-------------------------------
makesound
 asl
 cmp #maxaddr
 bcs :rts ;don't exceed lookup table

 tax
 lda lookup,x
 sta :sm+1
 lda lookup+1,x
 sta :sm+2

:sm jmp $ffff ;self-modifying code

:rts rts

*-------------------------------
*
*  S O U N D   R O U T I N E S
*
*-------------------------------
* Kid steps on pressplate

DoPlateDown
 ldy #70
 ldx #0
 lda #4
 jmp tone

*-------------------------------
* Pressplate pops back up

DoPlateUp
 ldy #90
 ldx #0
 lda #4
 jmp tone

*-------------------------------
* Gate hits stone floor with an ominous CLANG

DoGateDown
 ldy #70
 ldx #0
 lda #4
 jmp tone

*-------------------------------
* Jaws clash

DoJawsClash
 ldy #10
 ldx #0
 lda #50
 jmp tone

*-------------------------------
* Acknowledge special keypress

SK1Pitch = 15
SK1Dur = 50

SK2Pitch = 40
SK2Dur = 50

DoSpecialKey1
DoSwordClash1
DoSwordClash2
 ldy #SK1Pitch
 ldx #>SK1Pitch
 lda #SK1Dur
 jmp tone

DoSpecialKey2
 ldy #SK2Pitch
 ldx #>SK2Pitch
 lda #SK2Dur
 jmp tone

*-------------------------------
* Splat

SplatPitch = 1000
SplatDur = 3

DoSplat
 ldy #SplatPitch
 ldx #>SplatPitch
 lda #SplatDur
 jmp tone

*-------------------------------
* Mirror Crack

DoMirrorCrack
 jmp DoSplat
 rts

*-------------------------------
* Loose Floor Crash

DoLooseCrash
 jmp DoSplat

*-------------------------------
* Flash message

]HiPitch = 100
]HiDur = 25
]LoPitch = 500
]LoDur = 15

DoGotKey
DoFlashMsg
 lda #2
:loop pha

 ldy #]LoPitch
 ldx #>]LoPitch
 lda #]LoDur
 jsr tone

 ldy #]HiPitch
 ldx #>]HiPitch
 lda #]HiDur
 jsr tone

 pla
 sec
 sbc #1
 bne :loop

 rts

*-------------------------------
* Footstep

DoFootstep
 ldy #35
 ldx #0
 lda #3
 jmp tone

*-------------------------------
* Raising Exit

DoRaisingExit
 ldy #40
 ldx #0
 lda #6
 jmp tone

*-------------------------------
* Raising Gate

DoRaisingGate
 ldy #20
 ldx #0
 lda #2
 jmp tone

*-------------------------------
* Lowering Gate

DoLowerGate
 ldy #7
 ldx #0
 lda #8
 jmp tone

*-------------------------------
* Smack Wall

SWPitch = 1000
SWDur = 3

DoSmackWall
 ldy #SWPitch
 ldx #>SWPitch
 lda #SWDur
 jmp tone

]rts rts

*-------------------------------
* Impaled

DoImpaled
 jmp DoSmackWall

*-------------------------------
* Gate Slam

DoGateSlam
 jmp DoSmackWall


*-------------------------------
*
*  T O N E
*
*  In: y-x = pitch lo-hi
*      a = duration
*
*-------------------------------
tone
 sty :pitch
 stx :pitch+1

:outloop bit spkr

 ldx #0
:midloop ldy #0

:inloop iny
 cpy :pitch
 bcc :inloop

 inx
 cpx :pitch+1
 bcc :midloop

 sec
 sbc #1
 bne :outloop

 rts

:pitch ds 2

*-------------------------------
 lst
eof ds 1
 usr $a9,20,$e00,*-org
 lst off
