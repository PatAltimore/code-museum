---
title: "MOVEDATA.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/MOVEDATA.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/MOVEDATA.S"
year: 1989
author: "Jordan Mechner"
slug: "movedata"
order: 25
description: "Defines object types and movement parameters for Prince of Persia's cinematic platforming on the Apple II."

summary:
  - point: "Object type constants streamline level design and gameplay logic"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Movement parameters reflect the game's focus on realistic physics and animation"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Bank-switched memory constraints shaped the game's data organization"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"

enhancements:
  - id: "object-type-constants"
    line_start: 4
    line_end: 37
    title: "How Object Types Simplified Level Design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines constants for the various object types in Prince of Persia, such as 'spikes', 'gate', and 'torch'. Each constant is assigned a unique numeric value, allowing the game to reference these objects efficiently in its logic and level data. For example, 'spikes' are represented by the value 2, while 'torch' is 19. By standardizing these identifiers, Jordan Mechner ensured that object-related operations—like collision detection or rendering—could be handled uniformly across the game's code. In 1989, the Apple IIe and IIc were constrained by limited memory and processing power. The use of numeric constants minimized the overhead of managing objects in a game that relied on cinematic realism and fluid animation. Mechner's approach reflects a broader trend in assembly programming at the time: using compact, efficient data structures to fit complex systems into tight hardware constraints. These constants became foundational to the game's level design. Designers could easily specify objects in a level by referencing their numeric IDs, streamlining the creation of intricate environments. This technique influenced later games, particularly those in the cinematic platformer genre, where object-oriented design became a staple. Games like Another World (1991) and Flashback (1992) adopted similar strategies to manage their environments and gameplay elements."
  - id: "misc-values-from-bgdata"
    line_start: 39
    line_end: 49
    title: "The Numbers Behind Spikes and Slicers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines key values for the behavior of specific objects, such as spikes and slicers. 'spikeExt' and 'spikeRet' represent the extended and retracted positions of spikes, while 'slicerExt' and 'slicerRet' define similar states for slicers. These values are likely used in animation routines to control the timing and movement of these hazards. In the late 1980s, creating realistic animations for environmental hazards was a novel challenge. Mechner's rotoscoping technique, where he traced filmed movements frame by frame, extended beyond character animation to include environmental elements like spikes and slicers. These values ensured that the hazards moved in a predictable and visually convincing manner, enhancing the game's cinematic feel. This attention to detail set Prince of Persia apart from other platformers of the era, which often relied on simpler, less dynamic hazards. The game's approach to environmental animation influenced later titles, such as Tomb Raider (1996), which emphasized realistic interactions between characters and their surroundings. Mechner's work demonstrated that even small details, like the movement of spikes, could contribute to a game's immersive experience."
  - id: "movement-parameters"
    line_start: 53
    line_end: 57
    title: "Gravity and Movement in a Cinematic World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rotoscoping"
    image_url: ""
    image_caption: ""
    content: "The 'moveparams' section defines key parameters for movement, including 'gmaxval' and 'gminval'. These values likely represent the maximum and minimum thresholds for gravity or movement speed, ensuring that the game's physics remain consistent. 'gmaxval' is calculated as 47*4, suggesting a deliberate scaling factor tied to the game's frame rate or animation system. In the Apple II era, realistic physics were rare in platformers due to hardware limitations. Mechner's decision to implement gravity parameters reflects his commitment to creating a believable, cinematic experience. By carefully tuning these values, he ensured that the Prince's movements felt natural and fluid, aligning with the rotoscoped animations derived from real-life footage. This focus on realistic movement influenced the development of later cinematic platformers, such as Oddworld: Abe's Oddysee (1997) and Limbo (2010). These games built on Mechner's legacy by emphasizing physics-driven gameplay and animation, proving that the principles established in Prince of Persia were timeless."

---

 tr on
 lst off

* movedata
*-------------------------------
* objnames

space = 0
floor = 1
spikes = 2
posts = 3
gate = 4
dpressplate = 5 ;down
pressplate = 6 ;up
panelwif = 7 ;w/floor
pillarbottom = 8
pillartop = 9
flask = 10
loose = 11
panelwof = 12 ;w/o floor
mirror = 13
rubble = 14
upressplate = 15
exit = 16
exit2 = 17
slicer = 18
torch = 19
block = 20
bones = 21
sword = 22
window = 23
window2 = 24
archbot = 25
archtop1 = 26
archtop2 = 27
archtop3 = 28
archtop4 = 29

*-------------------------------
* misc. values from BGDATA

torchLast = 17
bubbLast = 8

spikeExt = 5
spikeRet = 9

slicerExt = 2
slicerRet = 6

Ffalling = 10 ;1st "falling" frame

*-------------------------------
* moveparams

gmaxval = 47*4
gminval = 0

 lst off