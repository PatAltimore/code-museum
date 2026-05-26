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
description: "This file defines the sound system for Prince of Persia (1989), implementing sound effects in 6502 assembly for the Apple II."

summary:
  - point: "Self-modifying code used for sound playback"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Lookup table maps sound effects to routines"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Efficient sound generation using Apple II speaker hardware"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Bank-switched memory constraints shaped design"
    link: "https://en.wikipedia.org/wiki/Bank_switching"
    link_label: "Bank switching"
  - point: "Cinematic sound effects aligned with game events"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"

enhancements:
  - id: "lookup-table-for-sound-routines"
    line_start: 23
    line_end: 51
    title: "The Lookup Table That Made Sound Cinematic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines a lookup table that maps sound effect numbers to their corresponding routines. Each entry in the table is a two-byte pointer to a subroutine that generates the sound effect. This design allows the game to efficiently select and play sound effects based on game events, such as stepping on a pressure plate or clashing swords. In 1989, lookup tables were a common technique for optimizing performance on constrained hardware like the Apple II, which had limited memory and processing power. Jordan Mechner used this approach to ensure that sound effects could be dynamically triggered without excessive overhead. The cinematic nature of Prince of Persia's sound design, with effects tightly synchronized to gameplay, set a precedent for immersive audio in games. Later developers adopted similar techniques for sound management in resource-constrained environments, influencing games like Another World and Flashback."
  - id: "zeroing-sound-table"
    line_start: 57
    line_end: 67
    title: "How Zeroing a Table Keeps Sounds in Sync"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The ZEROSOUND routine clears the sound table by setting its size to zero. This ensures that no residual sound effects are played after a new scene or event begins. On the Apple II, memory management was a manual process, and routines like this were critical to maintaining the integrity of gameplay. By resetting the sound table, Mechner avoided potential bugs where old sound effects might interfere with new ones. This kind of meticulous memory handling was a hallmark of programming for early home computers, where every byte of RAM was precious. The technique of zeroing tables or buffers before reuse became standard practice in game development, influencing later systems with more sophisticated sound engines."
  - id: "adding-sounds-to-the-table"
    line_start: 69
    line_end: 91
    title: "The Routine That Packed Sounds into RAM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Random-access_memory"
    image_url: ""
    image_caption: ""
    content: "ADDSOUND adds a new sound effect to the sound table, preserving registers to avoid disrupting other processes. The routine checks if the table is full, and if not, increments the table size and stores the sound effect number. This careful management of sound effects reflects the constraints of the Apple II, which had limited RAM and could only handle a small number of simultaneous sounds. Mechner's approach ensured that sound effects were queued efficiently without exceeding memory limits. This routine exemplifies the kind of low-level optimization required to make complex games like Prince of Persia run smoothly on early hardware. The concept of queuing sound effects influenced later sound engines, including those used in arcade machines and early consoles like the NES."
  - id: "self-modifying-code-for-sound-playback"
    line_start: 120
    line_end: 140
    title: "Why Prince of Persia's Sound Code Writes Itself"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The makesound routine uses self-modifying code to dynamically jump to the correct sound routine based on the sound number. It calculates the address of the routine in the lookup table, then overwrites the jump instruction to point to that address. Self-modifying code was a controversial but effective technique for optimizing performance on systems like the Apple II, where memory and processing power were extremely limited. By avoiding the overhead of a traditional function call, Mechner was able to make sound playback faster and more responsive. This technique was rarely used in later systems due to its complexity and potential for bugs, but it remains a fascinating example of the ingenuity required to push early hardware to its limits."
  - id: "tone-generation-for-apple-ii-speaker"
    line_start: 316
    line_end: 357
    title: "The Algorithm That Made the Apple II Sing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Speaker_(audio)"
    image_url: ""
    image_caption: ""
    content: "The tone routine generates sound by toggling the Apple II's speaker at precise intervals. It calculates the pitch and duration of the tone based on input parameters, then loops to produce the desired sound. The Apple II's speaker was a simple device that could only produce square waves, so programmers had to carefully control timing to create recognizable sound effects. Mechner's implementation is a testament to the creativity required to work within such constraints. By varying pitch and duration, he was able to create a wide range of effects that added to the game's cinematic feel. This approach to sound generation influenced later games on similar hardware, including many titles for the Commodore 64 and Atari 8-bit computers."

---

```asm
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
```
