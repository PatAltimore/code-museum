---
title: "SOUND.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SOUND.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/SOUND.S"
year: 1989
author: "Jordan Mechner"
slug: "sound"
order: 1
description: "This file defines the sound system for Prince of Persia (1989), showcasing Jordan Mechner's ingenuity in crafting cinematic audio on the Apple II's limited hardware."

summary:
  - point: "Self-modifying code used to dynamically jump to sound routines"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Lookup table organizes sound routines by event type"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Direct interaction with Apple II speaker hardware via memory-mapped I/O"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Efficient sound playback loop minimizes CPU usage during gameplay"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts in computing"
  - point: "Rotoscoping-inspired sound effects add realism to cinematic platforming"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "sound-lookup-table"
    line_start: 30
    line_end: 55
    title: "Mapping Events to Sounds: Lookup Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a lookup table that maps game events to their corresponding sound routines. Each entry in the table points to a subroutine responsible for generating a specific sound effect, such as the clang of a gate or the crack of a mirror. In the mid-1980s, lookup tables were a common technique for efficiently organizing and accessing data, especially on memory-constrained systems like the Apple II. Jordan Mechner's use of this structure reflects his deep understanding of the hardware's limitations and his ability to optimize performance. The table ensures quick access to sound routines during gameplay, minimizing CPU cycles spent on audio processing. This design choice also allows for easy expansion or modification of sound effects, a crucial feature for iterative game development. The lookup table concept remains foundational in computing, influencing modern techniques like hash tables and database indexing."
  - id: "zero-sound-table"
    line_start: 64
    line_end: 67
    title: "Resetting the Sound Table: ZeroSound"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The ZeroSound routine clears the sound table by setting the number of sounds to zero. This simple yet essential function ensures that the sound system starts in a clean state, avoiding potential conflicts or errors during gameplay. In the constrained environment of the Apple II, memory management was critical, as the system had only 128KB of RAM to work with. By resetting the sound table, Mechner ensures that the game can dynamically adapt to new sound events without leftover data causing issues. This approach reflects the meticulous attention to detail required when programming for early home computers, where every byte of memory was precious."
  - id: "add-sound-to-table"
    line_start: 79
    line_end: 91
    title: "Dynamic Sound Management: AddSound"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The AddSound routine dynamically adds a sound to the sound table while preserving the current state of the registers. This functionality allows the game to queue up sound effects based on player actions or game events. The routine checks if the sound table is full before adding a new sound, ensuring that the system does not exceed its predefined limits. This design reflects the challenges of working within the Apple II's constrained memory and processing power. By carefully managing the sound table, Mechner ensures that the audio system remains responsive and efficient, even during complex gameplay scenarios. The preservation of register states highlights the importance of maintaining stability in low-level programming, where unintended side effects can easily disrupt the system."
  - id: "playback-sounds"
    line_start: 100
    line_end: 118
    title: "Orchestrating Audio: Playback Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The Playback routine iterates through the sound table and plays each sound listed, ensuring that queued audio effects are executed in sequence. This loop-based design minimizes CPU usage by efficiently handling multiple sound events without interrupting gameplay. In the Apple II era, sound processing was often a secondary concern due to limited hardware capabilities. Mechner's approach balances the need for immersive audio with the constraints of the system, allowing the game to deliver cinematic soundscapes without sacrificing performance. The routine's ability to check for empty sound tables or disabled sound settings reflects a thoughtful design that prioritizes stability and adaptability."
  - id: "self-modifying-code"
    line_start: 127
    line_end: 140
    title: "Self-Modifying Code: Makesound Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The Makesound routine employs self-modifying code to dynamically jump to the appropriate sound routine based on the sound number. This technique involves altering the instruction at runtime to point to the correct memory address, a clever workaround for the Apple II's limited resources. Self-modifying code was a controversial but effective strategy in early computing, often used to optimize performance or reduce memory usage. Mechner's implementation demonstrates his willingness to push the boundaries of conventional programming to achieve his vision for Prince of Persia. While self-modifying code is rarely used in modern software due to its complexity and potential for errors, it remains a fascinating example of the ingenuity required to work within the constraints of early home computers."
  - id: "tone-generation"
    line_start: 331
    line_end: 352
    title: "Generating Sound Waves: Tone Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_wave"
    image_url: ""
    image_caption: ""
    content: "The Tone routine generates sound waves by directly interacting with the Apple II's speaker hardware via memory-mapped I/O. By manipulating pitch and duration parameters, the routine creates the distinctive audio effects that define Prince of Persia's atmosphere. This low-level approach to sound generation reflects the limitations of the Apple II, which lacked dedicated audio hardware. Mechner's ability to craft immersive soundscapes using such primitive tools is a testament to his creativity and technical skill. The routine's reliance on precise timing and register manipulation highlights the challenges of programming for early home computers, where every instruction had to be carefully optimized."

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