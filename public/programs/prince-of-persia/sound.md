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
description: "Sound routines for Prince of Persia (1989), showcasing early techniques for dynamic audio playback on the Apple II."

summary:
  - point: "Self-modifying code for sound playback"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Lookup table for sound routines"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Efficient memory use in 128K Apple II"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Direct hardware interaction with Apple II speaker"
    link: "https://en.wikipedia.org/wiki/Apple_II_series#Sound"
    link_label: "Apple II sound"
  - point: "Cinematic sound design in a platformer"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "lookup-table-for-sound-routines"
    line_start: 23
    line_end: 51
    title: "Lookup table for sound routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a lookup table mapping sound effect identifiers to their corresponding subroutine addresses. Each entry in the table uses the `dw` directive to store the memory address of a sound routine, such as `DoPlateDown` or `DoGateDown`. By indexing into this table, the program can dynamically select and execute sound routines based on gameplay events. In 1989, memory constraints on the Apple II required clever techniques for managing resources. Jordan Mechner implemented this table to streamline sound playback without hardcoding individual calls. The lookup table allows the program to reference sound routines efficiently, saving both memory and processing time. This approach reflects the influence of earlier assembly programming practices, where lookup tables were a common optimization for limited hardware. The concept of using lookup tables for dynamic behavior became widespread in game development, influencing later systems like the NES and SNES. Developers studying Mechner's work would adapt similar techniques for sprite animations, AI routines, and sound effects in their own games. Today, lookup tables remain a fundamental programming tool, appearing in modern applications ranging from graphics rendering to cryptography."
  - id: "zero-sound-table-initialization"
    line_start: 57
    line_end: 67
    title: "Zero sound table initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `ZEROSOUND` subroutine initializes the sound table by setting the number of sounds to zero. It writes the value `0` to the `soundtable` memory location, ensuring that the table starts empty. This routine is called at the beginning of gameplay or after clearing sound effects. During the late 1980s, initializing memory was a critical step in programming for systems like the Apple II, which lacked modern memory management features. Mechner's careful attention to initialization reflects the meticulous programming required to avoid undefined behavior on constrained hardware. By explicitly resetting the sound table, he ensures predictable operation of subsequent routines. This method of memory initialization influenced later game development practices, where zeroing out data structures became standard for ensuring stability. The technique persists in modern programming, particularly in embedded systems and low-level software development."
  - id: "add-sound-to-table"
    line_start: 69
    line_end: 91
    title: "Adding sound effects dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The `ADDSOUND` subroutine adds a sound effect to the sound table. It first saves the current value of the `X` register to preserve state. Then, it checks if the sound table is full by comparing the current count (`soundtable`) against the maximum allowed (`maxsfx`). If space is available, the routine increments the count and stores the sound effect identifier in the table. In the Apple II era, dynamic memory management was rare, and developers often implemented their own systems for managing resources like sound effects. Mechner's design allows the game to queue multiple sound effects for playback, accommodating the cinematic nature of Prince of Persia. This approach highlights his focus on creating an immersive experience despite hardware limitations. Dynamic sound management became a hallmark of later games, influencing titles on the NES and Sega Genesis. Developers studying Mechner's work would adopt similar techniques for handling audio queues, enabling richer soundscapes in platformers and RPGs."
  - id: "playback-sound-effects"
    line_start: 93
    line_end: 118
    title: "Playback queued sound effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_effect"
    image_url: ""
    image_caption: ""
    content: "The `PLAYBACK` subroutine iterates through the sound table and plays each queued sound effect. It first checks if sound is enabled (`soundon`) and whether the table is empty. If not, it loops through the table, retrieving each sound identifier and calling the `makesound` subroutine to play it. The routine preserves register values to ensure stability during playback. In the late 1980s, real-time sound playback on systems like the Apple II was a technical challenge. Mechner's implementation demonstrates his ability to manage limited resources while delivering a cinematic experience. By queuing and playing sounds dynamically, he enhances the game's atmosphere, aligning audio with visual events. This technique influenced later games that relied on dynamic sound systems, such as LucasArts' adventure titles and early FPS games like Doom. The concept of queuing and iterating through sound effects remains relevant in modern game engines, including Unity and Unreal Engine."
  - id: "self-modifying-code-for-sound"
    line_start: 120
    line_end: 140
    title: "Self-modifying code for sound playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The `makesound` subroutine uses self-modifying code to dynamically jump to the appropriate sound routine. It calculates the address of the sound routine from the lookup table and writes it into the `jmp` instruction at `:sm`. When the instruction executes, it jumps to the desired routine. Self-modifying code was a common technique in assembly programming for constrained systems like the Apple II. By altering instructions at runtime, Mechner avoids the overhead of indirect jumps, optimizing performance. This approach reflects the ingenuity required to maximize the capabilities of 8-bit processors. While self-modifying code fell out of favor in modern programming due to security concerns, it remains a fascinating example of early optimization techniques. Developers studying Mechner's work would adapt similar methods for other constrained platforms, such as the Commodore 64 and Atari 2600."
  - id: "tone-generation-for-sound-effects"
    line_start: 323
    line_end: 352
    title: "Tone generation for sound effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Square_wave"
    image_url: ""
    image_caption: ""
    content: "The `tone` subroutine generates sound effects by toggling the Apple II speaker at a frequency determined by the pitch and duration parameters. It uses nested loops to control the timing of the toggling, creating square wave tones. The pitch is set using the `Y` and `X` registers, while the duration is specified in the `A` register. In the Apple II era, sound generation was achieved by directly interacting with hardware. The speaker was toggled via memory-mapped I/O at address `$c030`. Mechner's implementation demonstrates his understanding of low-level hardware control, a skill essential for game development on early computers. This method of sound generation influenced later games on similar hardware, such as the Commodore 64 and ZX Spectrum. While modern systems use advanced audio libraries, the principles of tone generation remain foundational in digital audio processing."

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