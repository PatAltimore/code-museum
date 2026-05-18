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
description: "Defines sound effects and music cues for Prince of Persia (1989), a groundbreaking cinematic platformer for the Apple II."

summary:
  - point: "Sound effects and music cues are mapped to numeric constants for efficient reference in assembly code."
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "The Apple II's limited audio capabilities required creative sound design and prioritization of key effects."
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Jordan Mechner's solo development process included meticulous attention to cinematic details, including sound."
    link: "https://en.wikipedia.org/wiki/Jordan_Mechner"
    link_label: "Jordan Mechner"

enhancements:
  - id: "sound-effects-numeric-constants"
    line_start: 6
    line_end: 25
    title: "Mapping sound effects to numeric constants"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This section of code defines numeric constants for the game's sound effects, such as 'PlateDown' (0), 'GateDown' (2), and 'Impaled' (14). These constants allow the assembly code to reference sound effects efficiently, avoiding hardcoded values and improving readability. In 1989, the Apple IIe and IIc had extremely limited audio capabilities, relying on simple square wave synthesis or external hardware like the Mockingboard for more advanced sound. Jordan Mechner had to carefully prioritize which sound effects were essential to the game's cinematic experience. Each sound effect was chosen to enhance the immersion of the player, from the ominous 'MirrorCrack' to the visceral 'Splat' when the protagonist meets an untimely end. The constraints of the Apple II hardware meant that every byte of memory and every cycle of CPU time was precious, and Mechner's decision to include these sound effects reflects his commitment to storytelling and atmosphere. These constants would later be referenced throughout the game's code to trigger sounds at key moments, such as stepping on a pressure plate or engaging in sword combat. The approach of mapping sound effects to constants is still common in modern game development, though today's systems allow for far more complex audio design."
  - id: "game-music-cues"
    line_start: 30
    line_end: 45
    title: "Defining music cues for gameplay moments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section assigns numeric constants to music cues that correspond to specific gameplay moments, such as 's_Heroic' (2) and 's_Shadow' (6). These cues were integral to the game's cinematic feel, underscoring dramatic events and transitions. In the late 1980s, music in games was typically limited to simple melodies due to hardware constraints. The Apple II's audio capabilities were no exception, but Mechner's use of music cues demonstrates his commitment to creating an emotionally engaging experience. By associating specific music tracks with key moments, he elevated the storytelling in Prince of Persia beyond what was typical for platformers of the era. The music cues were likely composed with the Apple II's limitations in mind, ensuring they could be played back effectively without overwhelming the system's resources. This technique of linking music to gameplay events would become a hallmark of cinematic games, influencing titles across genres in the decades to come."
  - id: "title-music-selection"
    line_start: 47
    line_end: 54
    title: "Selecting title music for thematic resonance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The final section of this file defines constants for title music tracks, such as 's_Princess' (7) and 's_Vizier' (9). These tracks set the tone for the game's opening moments, introducing players to the world of Prince of Persia with a sense of drama and intrigue. Title music was a critical element in establishing the mood of a game, especially on systems like the Apple II where graphical fidelity was limited. Mechner's choice of evocative track names reflects his focus on storytelling and character development. The music had to convey the stakes of the narrative while working within the constraints of the Apple II's audio hardware. This section highlights Mechner's attention to detail, ensuring that even the game's opening moments were carefully crafted to draw players into its world. The use of title music to create atmosphere and set expectations would become a standard practice in game design, influencing countless titles in the years that followed."

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