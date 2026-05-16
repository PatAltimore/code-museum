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
description: "The sound system for Prince of Persia (1989), showcasing Jordan Mechner's ingenuity in crafting cinematic audio on the Apple II's limited hardware."

summary:
  - point: "Self-modifying code used for sound playback"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Lookup table for sound routines demonstrates efficient memory use"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Direct interaction with Apple II speaker hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II hardware"
  - point: "Routines for cinematic sound effects tied to gameplay events"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Tone generation algorithm tailored to Apple II constraints"
    link: "https://en.wikipedia.org/wiki/Sound_synthesis"
    link_label: "Sound synthesis"

enhancements:
  - id: "sound-routine-lookup-table"
    line_start: 30
    line_end: 55
    title: "Efficient sound routine lookup table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a lookup table mapping sound IDs to their corresponding subroutines. Each entry in the table points to a specific sound effect routine, such as 'DoPlateDown' or 'DoGateSlam.' The programmer's goal here was to efficiently organize and reference sound routines without wasting precious memory. In 1989, the Apple II's 128K memory was a tight constraint, and every byte mattered. Jordan Mechner, working solo, had to balance cinematic ambitions with technical limitations. Lookup tables like this were a common technique in assembly programming, allowing rapid access to routines without complex branching logic. This approach not only saved memory but also made the code modular and easier to expand. The lookup table reflects the game's cinematic nature, with sound effects tied closely to gameplay events, enhancing immersion. This pattern of organizing sound routines persisted in later games, though modern systems use higher-level abstractions."
  - id: "zero-sound-initialization"
    line_start: 64
    line_end: 67
    title: "Zero sound table initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The 'ZEROSOUND' routine clears the sound table, setting the number of sounds to zero. This initialization step ensures that no residual data corrupts gameplay. In the late 1980s, memory management was a critical concern for programmers working on systems like the Apple II. Unlike modern systems with dynamic memory allocation, programmers had to manually manage every byte. Jordan Mechner's careful attention to initialization reflects his understanding of these constraints. The Apple II's hardware was unforgiving; uninitialized memory could lead to unpredictable behavior. This routine exemplifies the meticulousness required to create stable software on such limited hardware. The practice of initializing data structures remains a cornerstone of programming today, though modern languages often automate this process."
  - id: "add-sound-to-table"
    line_start: 79
    line_end: 91
    title: "Adding sounds dynamically to the table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The 'ADDSOUND' routine dynamically adds a sound to the sound table while preserving registers. This allows the game to queue up sound effects for playback later. In 1989, dynamic sound management was an advanced feature for a game running on the Apple II. Mechner's approach reflects his desire to create a cinematic experience, where sound effects respond to gameplay events in real-time. The routine checks if the table is full before adding a sound, demonstrating careful memory management. This dynamic system contrasts with simpler games of the era, which often used static sound effects triggered directly by events. By queuing sounds, Mechner enabled layered audio effects, enhancing the game's immersive quality. This technique laid groundwork for more sophisticated audio systems in later games."
  - id: "playback-sound-table"
    line_start: 100
    line_end: 118
    title: "Playback queued sounds from the table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The 'PLAYBACK' routine iterates through the sound table and plays each queued sound. It checks if sound is enabled and whether the table is empty before proceeding. This routine exemplifies Mechner's focus on creating a responsive and immersive audio experience. In the late 1980s, real-time sound playback on the Apple II was a technical challenge due to limited processing power and memory. Mechner's solution was elegant: a loop that calls the 'makesound' routine for each sound in the table. This modular design allowed him to manage audio playback efficiently while leaving room for expansion. The playback system reflects the game's cinematic ambitions, with sound effects synchronized to gameplay events. This approach influenced later games, which adopted similar systems for dynamic audio playback."
  - id: "self-modifying-code-for-sound"
    line_start: 127
    line_end: 140
    title: "Self-modifying code for sound playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The 'makesound' routine uses self-modifying code to jump to the appropriate sound routine. It calculates the address of the sound routine from the lookup table and modifies the jump instruction at runtime. Self-modifying code was a controversial but powerful technique in assembly programming, especially on constrained systems like the Apple II. Mechner employed it here to optimize performance, bypassing the need for complex branching logic. In 1989, this approach was both ingenious and risky; it required deep understanding of the hardware and careful debugging. Mechner's use of self-modifying code reflects his mastery of the Apple II's architecture and his commitment to squeezing every ounce of performance from the machine. While this technique fell out of favor in later years due to its complexity and potential for bugs, it remains a fascinating example of the lengths programmers went to in the early days of gaming."
  - id: "tone-generation-algorithm"
    line_start: 331
    line_end: 352
    title: "Tone generation tailored to Apple II"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The 'tone' routine generates sound by toggling the Apple II's speaker hardware. It uses nested loops to control pitch and duration based on input parameters. This low-level approach was necessary on the Apple II, which lacked dedicated sound hardware. Mechner's algorithm manipulates the speaker directly, producing tones by rapidly toggling its state. In 1989, sound synthesis on home computers was still in its infancy, and programmers had to innovate within severe constraints. Mechner's tone generation reflects his resourcefulness, creating a variety of sound effects with minimal hardware support. The routine's simplicity belies its importance; it forms the foundation for all sound effects in the game. While modern systems use sophisticated audio engines, this algorithm is a reminder of the ingenuity required to create immersive experiences on early computers."

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