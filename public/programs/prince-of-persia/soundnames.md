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
description: "Defines sound effect and music identifiers for Prince of Persia's Apple II version, enabling cinematic audio cues."

summary:
  - point: "Sound identifiers mapped to numeric constants for efficient lookup"
    link: "https://en.wikipedia.org/wiki/Sound_effect"
    link_label: "Sound Effect"
  - point: "Music cues categorized for gameplay and title sequences"
    link: "https://en.wikipedia.org/wiki/Musical_cue"
    link_label: "Musical Cue"
  - point: "Optimized for 6502 assembly constraints on Apple II hardware"
    link: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    link_label: "6502 Assembly"

enhancements:
  - id: "sound-effect-names"
    line_start: 6
    line_end: 25
    title: "Mapping sound effects to numeric constants"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_effect"
    image_url: ""
    image_caption: ""
    content: "This section defines numeric constants for sound effects used throughout Prince of Persia. Each sound effect, such as 'PlateDown' or 'MirrorCrack,' is assigned a unique identifier, ranging from 0 to 19. These identifiers allow the game to reference sound effects efficiently during runtime, minimizing memory usage and simplifying code logic. Jordan Mechner, working solo on this project, needed to optimize every aspect of the game to fit within the Apple II's 128K memory constraints. By using numeric constants, the game could quickly trigger sounds without requiring complex lookup mechanisms. In 1989, the Apple II was nearing the end of its commercial life, but it remained a popular platform for independent developers due to its affordability and established user base. The 6502 assembly language, while powerful, imposed strict limitations on memory and processing power. Mechner's approach reflects the ingenuity required to produce cinematic experiences on such constrained hardware. The sound effects themselves were carefully chosen to enhance the game's immersive qualities, aligning with its groundbreaking rotoscoped animation and narrative-driven gameplay. This technique of mapping sound effects to constants became standard practice in game development, influencing later titles on platforms like the NES and Sega Genesis. Developers like Shigeru Miyamoto and Yu Suzuki adopted similar methods to manage audio assets efficiently. Today, this approach persists in modern game engines, where sound identifiers are often stored in resource files or databases, ensuring quick access and streamlined performance."
  - id: "game-music-identifiers"
    line_start: 30
    line_end: 45
    title: "Categorizing music cues for gameplay moments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Musical_cue"
    image_url: ""
    image_caption: ""
    content: "This section assigns numeric constants to music cues used during gameplay. Each cue, such as 's_Heroic' or 's_Shadow,' corresponds to a specific moment or mood in the game, enhancing the cinematic experience. These identifiers range from 1 to 16, allowing the game to trigger appropriate music tracks based on player actions or story progression. Jordan Mechner's focus on storytelling and atmosphere is evident in this meticulous organization of audio assets. In the late 1980s, game music was transitioning from simple loops to more dynamic compositions that reacted to gameplay. The Apple II's limited sound capabilities required creative solutions to achieve this effect. Mechner's use of numeric constants ensured that music cues could be referenced efficiently, avoiding unnecessary complexity in the game's code. The music itself was composed to evoke tension, triumph, and tragedy, aligning with the game's narrative arc. This approach influenced the development of dynamic music systems in later games, such as LucasArts' iMUSE system for adaptive audio. It also set a precedent for integrating music deeply into gameplay, a technique seen in modern titles like The Legend of Zelda and the Final Fantasy series. By categorizing music cues, Mechner laid the groundwork for immersive audio design in video games."
  - id: "title-music-identifiers"
    line_start: 47
    line_end: 54
    title: "Defining title music for cinematic introduction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Title_sequence"
    image_url: ""
    image_caption: ""
    content: "This section defines numeric constants for music cues used in Prince of Persia's title sequence. Tracks like 's_Princess' and 's_Vizier' are assigned identifiers ranging from 7 to 12, ensuring efficient reference during the game's opening moments. The title music sets the tone for the game's cinematic narrative, introducing players to its world and characters. In 1989, title sequences in games were becoming more elaborate, reflecting the influence of cinema on game design. The Apple II's hardware limitations required careful planning to achieve this effect. Mechner's decision to categorize title music separately highlights his commitment to creating a cohesive and immersive experience. The music cues were designed to evoke mystery and anticipation, drawing players into the story before gameplay began. This technique of using dedicated title music influenced later games with cinematic openings, such as Another World and Metal Gear Solid. It also contributed to the evolution of audio design in games, where title sequences became an opportunity to showcase narrative and artistic themes. Today, title music remains a critical element of game design, often serving as a memorable introduction to the player's journey."

---

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