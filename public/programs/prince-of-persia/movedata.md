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
description: "Defines object types and movement parameters for Prince of Persia's Apple II implementation."

summary:
  - point: "Object type definitions link gameplay elements to memory values."
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia"
  - point: "Movement parameters reflect the game's physics and animation system."
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Rotoscoping influenced the precise movement values seen here."
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "object-type-definitions"
    line_start: 4
    line_end: 37
    title: "Why Each Object Gets Its Own ID"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section assigns numeric IDs to the various objects in Prince of Persia, such as 'spikes', 'gate', and 'torch'. These IDs are used throughout the game's code to reference specific gameplay elements. For example, 'spikes' are assigned the value 2, and 'torch' is assigned 19. The programmer, Jordan Mechner, needed a way to efficiently manage and identify objects in the limited memory space of the Apple II. By using numeric IDs, the game could quickly access and manipulate objects without requiring verbose descriptions or complex lookups. In 1989, the Apple II was nearing the end of its commercial life, but it remained a popular platform for games. Its hardware constraints—128KB of memory and a 1MHz processor—forced developers to optimize every aspect of their code. Mechner's decision to use numeric IDs reflects this necessity. Each ID corresponds to an object that plays a role in the game's cinematic platformer experience, from environmental hazards like 'spikes' to interactive elements like 'pressplates'. This approach influenced later games by demonstrating how to organize game data efficiently. Numeric IDs became standard practice in game development, appearing in engines like id Software's Doom engine and later in Unity's prefab system. Mechner's work showed that even on constrained hardware, careful planning and abstraction could create immersive worlds. Today, object IDs are ubiquitous in game development, a testament to the lasting impact of early pioneers like Mechner."
  - id: "misc-values-bgdata"
    line_start: 45
    line_end: 49
    title: "The Numbers Behind Spikes and Slicers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines movement-related constants for specific game elements, such as 'spikeExt' and 'slicerExt'. These values determine how far spikes extend or slicers move during their animations. For example, 'spikeExt' is set to 5, representing the number of frames a spike takes to fully extend. Similarly, 'slicerExt' is set to 2, indicating the slicer's initial movement frame. In the late 1980s, animation in games was often achieved through frame-by-frame manipulation of sprites. Mechner's rotoscoping technique—tracing filmed movements—allowed him to create lifelike animations for Prince of Persia. These constants reflect the precision required to translate real-world motion into game mechanics. By defining exact values for movement, Mechner ensured that the game's hazards felt consistent and believable. This level of detail influenced future games that sought to combine realism with gameplay. Developers of titles like Another World (1991) and Flashback (1992) adopted similar techniques to create fluid animations and responsive environments. The use of constants for movement parameters also became a standard in game engines, enabling developers to tweak gameplay mechanics without altering core code. Mechner's meticulous approach to animation and movement remains a cornerstone of game design, inspiring generations of developers to prioritize realism and precision."
  - id: "moveparams-gravity"
    line_start: 53
    line_end: 57
    title: "How Gravity Was Encoded in 1989"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines gravity-related parameters for the game, specifically 'gmaxval' and 'gminval'. 'gmaxval' is set to 47*4, representing the maximum velocity during a fall, while 'gminval' is set to 0, indicating no movement. These values are used to control the player's falling speed and ensure realistic physics during gameplay. The Apple II's hardware lacked advanced physics engines, so developers had to simulate gravity using simple arithmetic. Mechner's choice of values reflects his focus on creating a cinematic experience. By carefully tuning these parameters, he ensured that the protagonist's movements felt natural, enhancing the game's immersion. This attention to detail was crucial for Prince of Persia, which relied on fluid animation and precise controls to stand out. Mechner's approach to gravity influenced later games that sought to incorporate realistic physics. Titles like Tomb Raider (1996) and Uncharted (2007) built on this foundation, using increasingly sophisticated physics engines to simulate movement and interaction. Today, physics-based gameplay is a staple of the industry, but it owes much to the early efforts of developers like Mechner, who proved that even simple systems could create compelling experiences."

---

```asm
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
```