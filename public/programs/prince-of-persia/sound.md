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
description: "The sound system for Prince of Persia (1989) demonstrates clever use of 6502 assembly to produce cinematic audio effects on the Apple IIe/IIc hardware."

summary:
  - point: "Self-modifying code used for sound routine dispatch"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Lookup table maps sound effects to routines"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Efficient sound playback using minimal memory"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Direct interaction with Apple II speaker hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II_series#Sound"
    link_label: "Apple II sound system"
  - point: "Cinematic sound design tailored to gameplay events"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"

enhancements:
  - id: "lookup-table-for-sound-routines"
    line_start: 23
    line_end: 55
    title: "The Lookup Table That Made Sound Cinematic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a lookup table that maps sound effect identifiers to their corresponding routines. Each entry in the table is a two-byte address pointing to a specific sound routine, such as `DoPlateDown` or `DoSwordClash2`. The programmer's goal here was to efficiently manage sound effects in a memory-constrained environment. By centralizing the mapping in a table, the code avoids hardcoding sound routine calls and allows dynamic dispatch based on gameplay events. In 1989, memory constraints were a major challenge for game developers. The Apple IIe/IIc had limited RAM, and developers often used techniques like lookup tables to save space and improve performance. Jordan Mechner, working solo, had to balance cinematic ambitions with the hardware's limitations. Lookup tables were a common technique in assembly programming, borrowed from earlier practices in computer science and adapted for real-time applications like games. This approach influenced later game development, particularly in sound design. The idea of mapping events to sound routines became standard practice in game engines. Modern engines like Unity and Unreal use similar concepts, albeit with far more sophisticated tools and abstractions. Mechner's work here demonstrates how early developers pushed the boundaries of hardware to create immersive experiences."
  - id: "zero-sound-table-initialization"
    line_start: 57
    line_end: 67
    title: "How Silence Prepares for Sound"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The `ZEROSOUND` routine initializes the sound table by setting the number of sounds to zero. This ensures that no residual data from previous gameplay sessions interferes with sound playback. The routine uses simple instructions to clear the sound table and return control to the main program. In the late 1980s, game developers often had to manage memory manually, as systems like the Apple IIe/IIc lacked advanced memory management features. Mechner's decision to explicitly zero out the sound table reflects the meticulous attention to detail required to avoid bugs on such constrained hardware. It also highlights the importance of initialization routines in assembly programming. This technique of clearing data structures before use became a staple in programming, influencing practices in languages like C and later object-oriented languages. While modern systems automate much of this process, the principle of ensuring clean state initialization remains relevant, especially in embedded systems and real-time applications."
  - id: "add-sound-to-table"
    line_start: 69
    line_end: 91
    title: "The Routine That Packed Sounds Into Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `ADDSOUND` routine adds a sound identifier to the sound table, preserving registers to avoid disrupting other parts of the program. It checks if the table is full before adding a new sound, ensuring that memory constraints are respected. The routine uses indexed addressing to efficiently manage sound entries. Memory management was a critical skill for developers in the 1980s, especially on systems like the Apple IIe/IIc, which had limited RAM and no virtual memory. Mechner's careful handling of the sound table reflects the broader challenges of programming for constrained hardware. The use of indexed addressing and boundary checks demonstrates an understanding of the hardware's capabilities and limitations. This approach influenced later game development, particularly in resource management. Techniques for dynamically managing assets within constraints became foundational in game programming. The principles seen here are echoed in modern systems, where efficient memory use is still a priority, albeit with far greater resources available."
  - id: "playback-sound-table"
    line_start: 100
    line_end: 126
    title: "How Prince of Persia Played Its Sounds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series#Sound"
    image_url: ""
    image_caption: ""
    content: "The `PLAYBACK` routine iterates through the sound table and plays each sound listed. It checks whether sound is enabled and whether the table is empty before proceeding. Using a loop, it calls the `makesound` routine for each sound identifier, ensuring that all sounds queued during gameplay are played. Sound playback on the Apple IIe/IIc was a challenge due to the hardware's simplicity. The speaker was controlled directly via memory-mapped I/O, requiring precise timing and manual toggling of bits. Mechner's implementation reflects the ingenuity required to produce complex audio effects on such limited hardware. The routine's design prioritizes efficiency and reliability, ensuring smooth playback even during intense gameplay. This routine laid the groundwork for sound systems in later games. The concept of queuing and iterating through sound effects influenced the design of audio engines in modern game development. While today's systems handle sound playback with advanced APIs and hardware acceleration, the principles of efficient sound management seen here remain relevant."
  - id: "self-modifying-code-for-sound-dispatch"
    line_start: 127
    line_end: 147
    title: "The Self-Modifying Code That Made Sound Dynamic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The `makesound` routine uses self-modifying code to dynamically dispatch sound routines based on the sound identifier. It calculates the address of the routine from the lookup table and modifies the jump instruction to point to the correct routine. This technique allows sound effects to be played without hardcoding routine calls. Self-modifying code was a controversial but effective technique in assembly programming, especially on constrained systems like the Apple IIe/IIc. It allowed developers to save memory and improve performance by dynamically altering code during execution. Mechner's use of this technique reflects the creativity required to achieve cinematic sound effects on limited hardware. While self-modifying code is rarely used today due to security concerns and the availability of better alternatives, its principles influenced the design of dynamic dispatch mechanisms in modern programming. Concepts like function pointers and virtual tables in object-oriented languages can trace their roots to techniques like this. Mechner's work here demonstrates how early developers pushed boundaries to create immersive experiences."
  - id: "tone-generation-for-sound-effects"
    line_start: 323
    line_end: 352
    title: "The Routine That Gave Prince of Persia Its Voice"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series#Sound"
    image_url: ""
    image_caption: ""
    content: "The `tone` routine generates sound effects by directly interacting with the Apple II speaker hardware. It uses the Y and X registers to set the pitch and the accumulator to set the duration. The routine toggles the speaker bit in a loop, producing the desired tone. Sound generation on the Apple IIe/IIc was a low-level process, requiring direct manipulation of hardware registers. Mechner's routine demonstrates a deep understanding of the system's capabilities, using precise timing to produce varied audio effects. The routine's design is optimized for performance, ensuring that sound effects enhance the game's cinematic experience without slowing down gameplay. This approach influenced sound design in later games, particularly on systems with limited audio capabilities. The principles of direct hardware interaction seen here are echoed in modern embedded systems and low-level programming. Mechner's work on sound generation contributed to the game's immersive atmosphere, setting a standard for cinematic sound design in games."

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