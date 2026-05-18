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
description: "Sound routines for Prince of Persia (1989), showcasing Jordan Mechner's ingenuity in crafting cinematic audio on the Apple II."

summary:
  - point: "Self-modifying code used for dynamic sound routine invocation"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Lookup table maps sound effects to their routines efficiently"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Tone generation directly interacts with Apple II speaker hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II hardware"
  - point: "Memory constraints shaped the compact design of sound routines"
    link: "https://en.wikipedia.org/wiki/Bank-switching"
    link_label: "Bank-switching"
  - point: "Routines reflect cinematic design, enhancing immersion through sound"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"

enhancements:
  - id: "sound-lookup-table"
    line_start: 30
    line_end: 55
    title: "Mapping sound effects to routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a lookup table that maps sound effect identifiers to their corresponding routines. Each entry in the table is a memory address pointing to a subroutine that generates a specific sound effect, such as 'DoPlateDown' or 'DoGateSlam.' This design allows the program to efficiently select and execute the correct sound routine based on the game's events. In 1989, memory was scarce on the Apple II, with only 128K available, so this compact and efficient approach was essential. Jordan Mechner, working solo on Prince of Persia, had to balance the constraints of the Apple II hardware with his vision for a cinematic gaming experience. The lookup table reflects his ingenuity in managing limited resources while ensuring the game could deliver a rich auditory experience. By leveraging the table, Mechner avoided duplicating code and kept the program modular, making it easier to add or modify sound effects. This technique remains relevant in modern programming, where lookup tables are used for tasks ranging from graphics rendering to AI decision-making. While today's systems have vastly more memory, the principle of organizing data for efficient access persists. Mechner's work on Prince of Persia demonstrates how creative problem-solving can overcome technical limitations to deliver groundbreaking results."
  - id: "zero-sound-initialization"
    line_start: 64
    line_end: 67
    title: "Resetting the sound table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The 'ZEROSOUND' routine initializes the sound table by setting its size to zero. This ensures that no sounds are queued for playback when the game starts or when sound needs to be reset. The routine is simple but crucial for maintaining the integrity of the sound system. In the late 1980s, game developers often had to write their own sound systems from scratch, as there were no standardized audio libraries for platforms like the Apple II. Mechner's approach reflects the need for precise control over every aspect of the game's behavior, including sound. By resetting the table, he ensured that the game would not attempt to play invalid or leftover sounds, which could disrupt the player's experience. This kind of initialization routine is a staple in programming, ensuring that systems start in a known state. While modern programming languages often provide built-in mechanisms for initialization, the principle remains the same: clear out old data to prevent errors and ensure predictable behavior. Mechner's attention to detail in crafting such routines contributed to the polished feel of Prince of Persia, a game that set new standards for immersion and cinematic storytelling."
  - id: "add-sound-to-table"
    line_start: 79
    line_end: 91
    title: "Queuing sounds for playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The 'ADDSOUND' routine adds a sound effect to the sound table, preserving the registers to avoid disrupting other parts of the program. It checks whether the table is full, and if not, it increments the table size and stores the sound effect identifier. This routine is a key part of the game's sound system, allowing multiple sound effects to be queued for playback. In the constrained environment of the Apple II, every byte of memory mattered. Mechner had to design a sound system that could handle multiple effects without consuming excessive resources. The 'ADDSOUND' routine exemplifies his ability to balance functionality with efficiency. By preserving registers, he ensured that the routine could be called from various parts of the program without causing unintended side effects. This queuing mechanism is a precursor to modern audio systems, where sounds are often queued and mixed dynamically. While today's systems can handle far more complexity, the underlying principle of managing sound effects efficiently remains the same. Mechner's work on Prince of Persia laid the groundwork for future innovations in game audio, demonstrating how thoughtful design can overcome technical limitations."
  - id: "playback-sound-table"
    line_start: 100
    line_end: 118
    title: "Playing queued sound effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The 'PLAYBACK' routine iterates through the sound table and plays each queued sound effect. It checks whether sound is enabled and whether the table is empty before proceeding. For each sound effect, it calls the 'makesound' routine to generate the appropriate audio signal. In the late 1980s, real-time audio playback was a challenging task on platforms like the Apple II. The computer's limited processing power and memory meant that developers had to optimize every aspect of their code. Mechner's 'PLAYBACK' routine is a testament to his ability to work within these constraints. By designing a system that could queue and play multiple sound effects efficiently, he enhanced the game's immersive quality. This routine highlights the importance of sound in creating a cinematic experience. Prince of Persia was one of the first games to use audio not just as a background element but as a storytelling tool. The 'PLAYBACK' routine ensured that sound effects were synchronized with the game's events, adding to the tension and drama. Mechner's work on this system influenced the development of audio in games, paving the way for more sophisticated sound engines in the years to come."
  - id: "self-modifying-code-for-sound"
    line_start: 127
    line_end: 140
    title: "Dynamic invocation with self-modifying code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The 'makesound' routine uses self-modifying code to dynamically invoke the correct sound routine based on the sound effect identifier. It calculates the address of the routine from the lookup table, then modifies a 'jmp' instruction to jump to that address. This technique allows the program to efficiently handle a wide range of sound effects without hardcoding each routine. Self-modifying code was a common technique in the era of the Apple II, where memory and processing power were extremely limited. By altering the program's instructions at runtime, developers could achieve functionality that would otherwise require more memory or complex logic. Mechner's use of this technique reflects his deep understanding of the Apple II's architecture and his ability to push its limits. While self-modifying code is rarely used in modern programming due to security concerns and the availability of more powerful hardware, it remains an important part of computing history. Mechner's implementation in Prince of Persia demonstrates how creative solutions can overcome technical constraints. This approach contributed to the game's ability to deliver a rich auditory experience, enhancing its status as a groundbreaking title in the history of video games."
  - id: "tone-generation"
    line_start: 331
    line_end: 352
    title: "Direct control of Apple II speaker"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The 'tone' routine generates sound by directly interacting with the Apple II's speaker hardware at memory address $C030. It uses nested loops to produce a tone of a specific pitch and duration, based on the input parameters. This low-level approach was necessary to produce audio on the Apple II, which lacked dedicated sound hardware. In the mid-1980s, sound generation on home computers was often achieved through direct manipulation of hardware registers. The Apple II's speaker was essentially a toggleable bit, requiring developers to manually control its state to produce sound. Mechner's 'tone' routine exemplifies this hands-on approach, using precise timing loops to create audible tones. This routine is a reminder of the ingenuity required to produce sound effects in early games. While modern systems have dedicated audio processors and libraries, developers like Mechner had to work directly with hardware, crafting routines that balanced functionality with performance. The 'tone' routine is a foundational piece of Prince of Persia's sound system, enabling the game to deliver its cinematic audio experience despite the limitations of the Apple II."

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