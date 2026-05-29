---
title: "SOUNDNAMES.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SOUNDNAMES.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/SOUNDNAMES.S"
year: 1989
author: "Jordan Mechner"
slug: "soundnames"
order: 27
description: "Defines sound effect and music identifiers for Prince of Persia's Apple II version, enabling cinematic audio in a constrained environment."

summary:
  - point: "Sound effects and music identifiers are mapped to numeric constants for efficient reference in 6502 assembly."
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Audio played a key role in creating the game's cinematic atmosphere, complementing its groundbreaking rotoscoped animation."
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "The Apple II's limited audio capabilities required clever programming to achieve immersive sound effects and music."
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"

enhancements:
  - id: "sound-effect-identifiers"
    line_start: 4
    line_end: 25
    title: "How 19 Sound Effects Fit in 128KB"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II_series"
    image_url: ""
    image_caption: ""
    content: "This section defines numeric constants for 19 sound effects used in Prince of Persia, such as 'PlateDown' (0), 'Splat' (5), and 'Impaled' (14). These identifiers allow the game's code to reference sound effects efficiently, avoiding verbose descriptions and minimizing memory usage. At the time, the Apple II's audio capabilities were extremely limited, relying on simple square-wave tones and basic sound routines. Jordan Mechner had to carefully design sound effects that were recognizable and evocative within these constraints. The sound effects enhance the game's cinematic feel, reinforcing key moments like the cracking of the magic mirror or the ominous 'GateSlam' sound. This approach to sound effect management influenced later games, where similar numeric mappings became standard practice in resource-constrained environments. The identifiers also highlight Mechner's attention to detail, ensuring that audio cues aligned perfectly with the game's visual storytelling."
  - id: "game-music-identifiers"
    line_start: 27
    line_end: 45
    title: "The Melodies That Defined Cinematic Platforming"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This block assigns numeric constants to 16 pieces of game music, such as 's_Heroic' (2), 's_Shadow' (6), and 's_Heartbeat' (16). These identifiers are used to trigger specific musical themes during gameplay, creating an emotional resonance that was groundbreaking for the time. The Apple II's audio hardware lacked dedicated sound chips, so music had to be synthesized using CPU cycles, often competing with gameplay logic for resources. Mechner's choice of music titles reflects the game's narrative depth, with themes like 's_Danger' and 's_Tragic' underscoring its cinematic ambition. The music system laid the groundwork for dynamic audio in games, influencing titles like Another World (1991) and Flashback (1992), which also used music to heighten narrative tension. This section demonstrates how Mechner leveraged limited hardware to deliver an immersive experience that felt far ahead of its time."
  - id: "title-music-identifiers"
    line_start: 47
    line_end: 54
    title: "The Sounds of a Cinematic Opening"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "Here, numeric constants are assigned to six pieces of title music, such as 's_Princess' (7) and 's_Magic' (11). These identifiers are used during the game's opening sequence, setting the tone for its cinematic storytelling. The title music plays a crucial role in immersing players before they even begin gameplay, a technique that was rare in 1989 but has since become standard in video games. On the Apple II, generating music required precise timing and efficient use of the CPU, as the machine lacked dedicated audio hardware. Mechner's decision to include title music reflects his commitment to creating a film-like experience, even within the constraints of 6502 assembly. This approach influenced later games with cinematic aspirations, such as the Final Fantasy series, which used opening sequences to establish mood and narrative stakes. The title music identifiers also showcase Mechner's ability to balance technical limitations with artistic vision, a hallmark of Prince of Persia's design."

---

```asm
 tr on
 lst off

* sound names

PlateDown = 0
PlateUp = 1
GateDown = 2
SpecialKey1 = 3
SpecialKey2 = 4
Splat = 5
MirrorCrack = 6
LooseCrash = 7
GotKey = 8
Footstep = 9
RaisingExit = 10
RaisingGate = 11
LoweringGate = 12
SmackWall = 13
Impaled = 14
GateSlam = 15
FlashMsg = 16
SwordClash1 = 17
SwordClash2 = 18
JawsClash = 19

*-------------------------------
* game music

s_Accid = 1
s_Heroic = 2
s_Danger = 3
s_Sword = 4
s_Rejoin = 5
s_Shadow = 6
s_Vict = 7
s_Stairs = 8
s_Upstairs = 9
s_Jaffar = 10
s_Potion = 11
s_ShortPot = 12
s_Timer = 13
s_Tragic = 14
s_Embrace = 15
s_Heartbeat = 16

* title music

s_Princess = 7
s_Squeek = 8
s_Vizier = 9
s_Buildup = 10
s_Magic = 11
s_StTimer = 12

 lst off
```