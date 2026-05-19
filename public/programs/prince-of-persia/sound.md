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
description: "Sound routines for Prince of Persia (1989), showcasing Jordan Mechner's ingenuity in crafting cinematic audio effects on the Apple II."

summary:
  - point: "Self-modifying code used for dynamic sound playback"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Lookup table organizes sound routines efficiently"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Direct hardware interaction with the Apple II speaker"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II hardware"
  - point: "Optimized memory usage for sound effects in 128K constraints"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Cinematic sound design tailored for a platformer"
    link: "https://en.wikipedia.org/wiki/Cinematic_platformer"
    link_label: "Cinematic platformer"

enhancements:
  - id: "lookup-table-for-sound-routines"
    line_start: 30
    line_end: 51
    title: "Lookup table for sound routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a lookup table that maps sound routine labels to specific sound effects. Each entry in the table corresponds to a sound routine, such as 'DoPlateDown' or 'DoGateSlam,' which are later invoked dynamically during gameplay. The table is implemented using the 'dw' directive, which stores the addresses of the routines. In the mid-1980s, memory was a precious resource, especially on the Apple II, which operated within tight constraints of 128K. Jordan Mechner, working solo, had to ensure every byte was used efficiently. Lookup tables like this allowed for quick access to routines without the overhead of complex logic or branching. This approach reflects the broader programming practices of the era, where simplicity and directness were paramount. The lookup table is a precursor to modern techniques like function pointers and dispatch tables used in higher-level programming languages. The consequence of this design is a streamlined system where sound effects can be triggered with minimal computational overhead. This efficiency was crucial for maintaining the game's fluidity and responsiveness, especially given the cinematic aspirations of Prince of Persia. The lookup table concept persists in modern programming, albeit in more abstract forms, highlighting its enduring utility."
  - id: "zero-sound-table-initialization"
    line_start: 64
    line_end: 78
    title: "Zero sound table initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Initialization_(programming)"
    image_url: ""
    image_caption: ""
    content: "The 'ZEROSOUND' routine initializes the sound table by setting the number of sounds to zero. This ensures a clean slate for sound playback, preventing any residual data from interfering with the game's audio. The routine uses simple instructions to load and store a zero value, followed by a return from subroutine (RTS). In the late 1980s, initialization routines were a critical part of programming, especially on systems with limited memory and no built-in garbage collection. Mechner's careful attention to initialization reflects the meticulousness required to avoid bugs in assembly language, where even a single uninitialized byte could lead to unpredictable behavior. This routine exemplifies the foundational programming practices of the era, where explicit control over memory and state was necessary. While modern systems often abstract these details, the principles remain relevant, particularly in embedded systems and performance-critical applications. By ensuring the sound table starts empty, Mechner laid the groundwork for reliable audio playback throughout the game."
  - id: "add-sound-to-table"
    line_start: 79
    line_end: 99
    title: "Adding sound to the table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The 'ADDSOUND' routine adds a sound effect to the sound table, preserving the current state of the registers. It checks if the table is full, increments the sound count, and stores the sound number in the table. This routine is a critical part of the game's sound system, enabling dynamic audio effects based on gameplay events. In the context of 1980s programming, managing state and preserving registers were essential techniques for maintaining system stability. The Apple II's 6502 processor had limited registers, so routines like this had to carefully juggle their contents. Mechner's use of the 'savex' variable to temporarily store the X register demonstrates his skill in optimizing for these constraints. The ability to dynamically add sounds was a significant feature for a game like Prince of Persia, where audio played a key role in creating a cinematic experience. This routine reflects the broader trend of incorporating dynamic and responsive elements into games, a hallmark of Mechner's design philosophy. The technique of preserving state and managing tables remains relevant in modern programming, particularly in low-level and embedded systems."
  - id: "playback-sound-table"
    line_start: 100
    line_end: 126
    title: "Playback all sounds in the table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Audio_signal_processing"
    image_url: ""
    image_caption: ""
    content: "The 'PLAYBACK' routine iterates through the sound table and plays each sound listed. It checks if sound is enabled and if the table is empty, then loops through the table, calling the 'makesound' routine for each entry. This ensures all queued sounds are played in sequence. In the late 1980s, audio processing on the Apple II was a challenge due to the hardware's limitations. The speaker was controlled directly via memory-mapped I/O, requiring precise timing and efficient code. Mechner's implementation reflects his deep understanding of the hardware, as well as his ability to create a responsive and immersive audio experience within these constraints. This routine highlights the importance of sequencing in sound design, a principle that remains central to modern audio systems. By ensuring sounds are played in order, Mechner created a cohesive auditory experience that complemented the game's visuals and gameplay. The concept of sound tables and playback loops has evolved but remains foundational in game audio programming."
  - id: "self-modifying-code-for-sound"
    line_start: 127
    line_end: 147
    title: "Self-modifying code for dynamic sound"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The 'makesound' routine uses self-modifying code to dynamically jump to the appropriate sound routine based on the sound number. It calculates the address of the routine from the lookup table, modifies the jump instruction, and executes it. This technique allows for efficient and flexible sound playback. Self-modifying code was a common practice in assembly programming during the 1980s, particularly on systems like the Apple II, where memory and processing power were limited. By altering the code at runtime, programmers could achieve functionality that would otherwise require more complex and resource-intensive solutions. Mechner's use of this technique demonstrates his ingenuity and mastery of the 6502 assembly language. While self-modifying code is rarely used in modern programming due to its complexity and potential for errors, it remains an important historical technique that showcases the creativity and resourcefulness of early programmers. In the context of Prince of Persia, this approach enabled a rich and varied soundscape that enhanced the game's cinematic quality."
  - id: "tone-generation-for-sound-effects"
    line_start: 331
    line_end: 360
    title: "Tone generation for sound effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The 'tone' routine generates sound effects by directly interacting with the Apple II speaker. It uses the Y and X registers to set the pitch and the accumulator to set the duration. The routine loops to produce the desired tone, toggling the speaker via memory-mapped I/O. Sound synthesis on the Apple II was a low-level process, requiring direct control of hardware. The speaker was accessed through a specific memory address ($C030), and programmers had to manually toggle it to produce sound waves. Mechner's implementation is a testament to his technical skill, as he crafted a variety of sound effects using this rudimentary method. The 'tone' routine is the foundation of the game's sound system, enabling the creation of diverse audio effects that enhance the gameplay experience. While modern systems use sophisticated audio libraries and hardware, the principles of sound synthesis remain rooted in techniques like this. Mechner's work on Prince of Persia showcases the ingenuity required to push the boundaries of what was possible on early computers."

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