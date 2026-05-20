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
description: "Defines sound effect and music identifiers for Prince of Persia's Apple II version, enabling cinematic audio cues in a constrained environment."

summary:
  - point: "Sound identifiers map to in-game events and actions, enhancing immersion."
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Music identifiers categorize themes for gameplay and title sequences."
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II hardware"
  - point: "Audio cues were key to the game's cinematic storytelling approach."
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "sound-effect-identifiers"
    line_start: 4
    line_end: 25
    title: "How Sound Effects Tell a Story"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines identifiers for sound effects used throughout Prince of Persia. Each label, such as 'PlateDown' or 'MirrorCrack,' corresponds to a specific in-game event or action, like stepping on a pressure plate or breaking a magical mirror. By assigning numeric values to these events, the game can efficiently reference and trigger audio cues during gameplay. Jordan Mechner's design aimed to make the game feel cinematic, and sound effects played a crucial role in achieving this. For example, the 'Splat' sound effect underscores the consequences of a mistimed jump, while 'SwordClash1' and 'SwordClash2' dramatize combat sequences. In the late 1980s, Apple II hardware was limited in audio capabilities, relying on simple square wave synthesis or external sound cards. Mechner had to work within these constraints, ensuring that sound effects were both recognizable and evocative despite the technical limitations. The identifiers here reflect a deliberate effort to match audio cues to visual and narrative elements, a technique that would later become standard in cinematic platformers and adventure games. This approach influenced later games, such as Another World (1991) and Flashback (1992), which also used sound to heighten immersion and storytelling. The idea of mapping sound effects to specific events became a staple in game development, appearing in engines like SCUMM and Unity, where audio cues are integral to gameplay and narrative design."
  - id: "game-music-identifiers"
    line_start: 27
    line_end: 45
    title: "The Themes That Set the Mood"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This section assigns identifiers to musical themes used during gameplay. Each theme, such as 's_Heroic' or 's_Danger,' corresponds to a specific mood or scenario, helping to guide the player's emotional experience. For instance, 's_Heartbeat' might accompany tense moments, while 's_Vict' celebrates a triumph. These identifiers allow the game to dynamically switch between musical cues based on the player's actions and the unfolding narrative. In the Apple II era, dynamic music was a technical challenge. The hardware lacked advanced sound capabilities, and developers often had to compose music within strict memory and processing constraints. Mechner's decision to include varied musical themes reflects his commitment to creating a cinematic experience, even on limited hardware. By using identifiers, he could efficiently manage and trigger these themes without consuming excessive resources. This technique influenced future games that relied on dynamic music to enhance storytelling, such as The Legend of Zelda: Ocarina of Time (1998) and the Mass Effect series (2007–2017). The concept of associating musical themes with gameplay scenarios became a cornerstone of immersive game design, paving the way for adaptive soundtracks in modern engines like FMOD and Wwise."
  - id: "title-music-identifiers"
    line_start: 47
    line_end: 54
    title: "Setting the Stage with Title Music"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "Here, Mechner defines identifiers for musical themes used in the title sequence of Prince of Persia. These themes, such as 's_Princess' and 's_Vizier,' establish the game's narrative and tone before gameplay begins. The title music serves as an introduction to the game's cinematic storytelling, immersing players in its world from the outset. During the late 1980s, title sequences were becoming an important part of video game design, offering developers a chance to showcase their game's atmosphere and story. On the Apple II, creating engaging title music required ingenuity due to the hardware's limited sound capabilities. Mechner's use of identifiers allowed him to manage these themes efficiently, ensuring they complemented the game's visual and narrative elements. This approach influenced the use of title music in later games, such as Final Fantasy (1987–present) and Halo (2001–present), where opening themes became iconic representations of their respective franchises. The idea of using music to set the stage for a game is now a standard practice, with composers like Nobuo Uematsu and Martin O'Donnell building on the foundation laid by early developers like Mechner."

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
