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
description: "The sound system of Prince of Persia (1989) for the Apple II, showcasing Jordan Mechner's ingenuity in crafting cinematic audio on constrained hardware."

summary:
  - point: "Self-modifying code used for sound playback"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Lookup table organizes sound routines by event"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Direct manipulation of the Apple II speaker hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Efficient pitch and duration encoding for tones"
    link: "https://en.wikipedia.org/wiki/Sound_synthesis"
    link_label: "Sound synthesis"
  - point: "Bank-switched memory constraints shaped design"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"

enhancements:
  - id: "sound-lookup-table"
    line_start: 30
    line_end: 55
    title: "Mapping events to sound routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a lookup table that maps game events to their corresponding sound routines. Each entry in the table points to a subroutine responsible for generating a specific sound effect, such as the clang of a gate or the crack of a mirror. In the late 1980s, lookup tables were a common technique for efficiently organizing and accessing data, especially on hardware with limited memory and processing power like the Apple II. Jordan Mechner, working solo on Prince of Persia, had to carefully allocate every byte of memory in the 128K system. This table allowed the game to dynamically trigger sound effects based on gameplay events without hardcoding each sound's logic repeatedly. The use of a lookup table also made it easier to expand or modify the sound system during development. This approach remains foundational in game development, influencing how modern engines handle event-driven sound playback."
  - id: "zero-sound-table"
    line_start: 64
    line_end: 67
    title: "Resetting the sound table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The ZEROSOUND routine clears the sound table by setting the number of sounds to zero. This ensures that no residual sound effects from previous gameplay sessions interfere with the current state. On the Apple II, memory management was manual and unforgiving, requiring programmers to explicitly reset data structures to avoid unpredictable behavior. Mechner's decision to include this routine reflects his meticulous approach to stability and user experience. By resetting the sound table, he ensured that the audio system started fresh each time it was initialized, a practice that became standard in later game development."
  - id: "add-sound-to-table"
    line_start: 79
    line_end: 91
    title: "Adding sounds dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The ADDSOUND routine dynamically adds a sound effect to the sound table, preserving the current registers to avoid disrupting other processes. This routine checks if the table is full before adding a new sound, ensuring efficient use of memory. In the 1980s, dynamic data structures like this were rare in assembly programming due to the complexity of implementation and the constraints of hardware. Mechner's use of such a system highlights his innovative approach to game design, allowing Prince of Persia to manage sound effects flexibly based on gameplay events. This dynamic handling of sound effects foreshadows modern game audio systems, where sounds are queued and played based on real-time events."
  - id: "playback-sound-table"
    line_start: 100
    line_end: 118
    title: "Sequential sound playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_synthesis"
    image_url: ""
    image_caption: ""
    content: "The PLAYBACK routine iterates through the sound table and plays each sound listed. It checks if sound is enabled and if the table contains any sounds before proceeding. This sequential playback mechanism was a clever way to handle multiple sound effects on the Apple II, which lacked advanced audio hardware. Mechner had to rely on direct manipulation of the speaker hardware to produce sound, making routines like this essential for creating the game's cinematic atmosphere. The use of a sound table allowed for efficient management of audio, ensuring that sounds were played in the correct order without overlapping or skipping. This approach laid the groundwork for more sophisticated audio systems in later games."
  - id: "self-modifying-code-for-sound"
    line_start: 127
    line_end: 140
    title: "Self-modifying code for sound playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The MAKESOUND routine employs self-modifying code to dynamically jump to the appropriate sound routine based on the sound number. It calculates the address of the routine using the lookup table and inserts it into the instruction at runtime. Self-modifying code was a controversial but powerful technique, particularly on constrained systems like the Apple II, where every byte of memory mattered. Mechner's use of this technique allowed him to efficiently manage sound playback without hardcoding jumps to each routine. While self-modifying code is rarely used today due to its complexity and potential for bugs, it was a hallmark of ingenuity in early game development, enabling programmers to push the limits of their hardware."
  - id: "tone-generation"
    line_start: 331
    line_end: 352
    title: "Direct tone generation via speaker hardware"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "The TONE routine directly manipulates the Apple II's speaker hardware to generate sound. It uses the pitch and duration parameters to produce tones by toggling the speaker's state in a loop. This low-level approach was necessary on the Apple II, which lacked dedicated sound hardware. Mechner's implementation is a testament to the ingenuity required to create audio effects on early computers. By carefully timing the toggling of the speaker, he was able to produce a variety of sounds that contributed to the game's immersive experience. This method of sound generation is a reminder of the challenges faced by early game developers and the creative solutions they devised to overcome hardware limitations."

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