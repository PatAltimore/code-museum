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
description: "Defines sound effect and music identifiers for Prince of Persia's Apple II version."

summary:
  - point: "Sound effects and music identifiers are mapped to numeric constants for efficient reference."
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "The Apple II's limited memory required careful organization of assets, including sound and music."
    link: "https://en.wikipedia.org/wiki/Apple_II_series"
    link_label: "Apple II series"
  - point: "Jordan Mechner wrote this code solo, balancing technical constraints with cinematic ambitions."
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "sound-effect-identifiers"
    line_start: 6
    line_end: 25
    title: "Mapping sound effects to numeric constants"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_effect"
    image_url: ""
    image_caption: ""
    content: "This section defines numeric constants for the game's sound effects, such as 'PlateDown' (0), 'GateDown' (2), and 'MirrorCrack' (6). By assigning each sound effect a number, the code can reference these sounds efficiently during gameplay. In the late 1980s, memory and processing power were scarce resources on the Apple II, which had only 128KB of RAM in its enhanced models. Every byte mattered, and using numeric identifiers allowed for compact and fast sound handling. Jordan Mechner, working solo on Prince of Persia, faced the challenge of creating a cinematic experience on hardware designed for text-based applications and simple games. The Apple II lacked dedicated sound hardware, relying instead on software-driven sound synthesis. Mechner's approach here reflects the ingenuity required to make the most of the machine's capabilities. These sound effects contribute to the game's immersive atmosphere, reinforcing its storytelling and gameplay. For example, the 'Impaled' sound (14) underscores the game's brutal stakes, while 'Footstep' (9) adds realism to the protagonist's movements. Mechner's focus on sound design was ahead of its time, laying the groundwork for the rich audio experiences in modern games."
  - id: "game-music-identifiers"
    line_start: 30
    line_end: 45
    title: "Categorizing game music themes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_music"
    image_url: ""
    image_caption: ""
    content: "This block assigns numeric constants to various music themes used during gameplay, such as 's_Heroic' (2), 's_Danger' (3), and 's_Shadow' (6). These identifiers allow the game to dynamically switch between music tracks based on the player's progress or the narrative's mood. Music was a critical component of Prince of Persia's cinematic ambition, enhancing the emotional resonance of key moments. In the late 1980s, video game music was evolving from simple loops to more sophisticated compositions. The Apple II's sound capabilities were limited, but Mechner leveraged them to create memorable themes that complemented the game's visuals and story. The music had to be compact enough to fit within the constraints of the system's memory while still delivering a dramatic impact. The game's music themes, such as 's_Heartbeat' (16) and 's_Tragic' (14), reflect Mechner's commitment to storytelling. These tracks help convey tension, triumph, and tragedy, making the game feel like an interactive movie. This approach influenced later cinematic platformers and demonstrated the potential of music as a storytelling tool in games."
  - id: "title-music-identifiers"
    line_start: 47
    line_end: 54
    title: "Defining title screen music tracks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Title_screen"
    image_url: ""
    image_caption: ""
    content: "Here, numeric constants are assigned to music tracks specifically used during the game's title screen, such as 's_Princess' (7) and 's_Vizier' (9). These tracks set the tone for the game before the player even begins, establishing the narrative's stakes and atmosphere. The title screen music was an important part of the player's first impression, drawing them into the world of Prince of Persia. In the Apple II era, title screens were often static and accompanied by simple sound effects or brief musical loops. Mechner's decision to include multiple title music tracks reflects his ambition to create a cinematic experience. These tracks had to be carefully composed to fit within the Apple II's memory constraints while still delivering emotional impact. The title music helps establish the game's themes, such as the conflict between the protagonist and the villainous Vizier. By investing in this level of detail, Mechner elevated the game's presentation, setting a standard for narrative-driven games. The use of title music tracks influenced later games, which increasingly used music to enhance storytelling and immersion."

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