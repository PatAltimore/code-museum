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
description: "Defines object identifiers and movement parameters for Prince of Persia's cinematic gameplay."

summary:
  - point: "Object identifiers map gameplay elements to numeric codes."
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Movement parameters control animations and interactions."
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II hardware"
  - point: "Rotoscoping inspired realistic animations."
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "object-identifiers-for-gameplay-elements"
    line_start: 8
    line_end: 37
    title: "Object Identifiers for Gameplay Elements"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines numeric codes for the various objects and elements that populate Prince of Persia's levels. From 'space' (0) to 'archtop4' (29), each identifier corresponds to a specific visual or interactive element in the game. These codes are used throughout the game's logic to reference objects efficiently, a necessity given the constraints of the Apple II's limited memory and processing power. Jordan Mechner, working solo on this project, had to balance creativity with technical limitations. The Apple IIe/IIc's 6502 processor offered only 8-bit registers and a maximum of 64KB addressable memory per bank. To fit the game's cinematic platforming experience into these constraints, Mechner relied on techniques like bank-switched memory and compact data representations. The object identifiers are a prime example of this efficiency, allowing the game to quickly reference and manipulate elements during gameplay. These identifiers also reflect the game's cinematic ambition. Objects like 'mirror,' 'flask,' and 'sword' are not just functional—they contribute to the game's narrative and atmosphere. Mechner's use of rotoscoping to animate the protagonist's movements further emphasized realism, making these objects feel like part of a cohesive world. The approach taken here influenced future games, especially in the cinematic platformer genre. By abstracting objects into numeric codes, Mechner laid the groundwork for efficient game design practices that persist in modern development. This section is a snapshot of the ingenuity required to create an immersive experience on hardware with severe limitations."
  - id: "misc-values-for-animation-and-interaction"
    line_start: 42
    line_end: 51
    title: "Miscellaneous Values for Animation and Interaction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Apple_II"
    image_url: ""
    image_caption: ""
    content: "This block defines constants related to animations and object interactions, such as 'spikeExt' and 'slicerRet.' These values determine the timing and behavior of dynamic elements like spikes and slicers, which are key to the game's challenge and cinematic feel. For example, 'spikeExt' and 'spikeRet' control the extension and retraction frames of the spike traps, ensuring they operate smoothly and predictably. In the mid-1980s, animation in games was often rudimentary due to hardware constraints. The Apple II's graphics capabilities were limited to 280x192 resolution with 6 colors, making fluid animations a significant technical challenge. Mechner's solution involved predefining movement parameters and carefully choreographing animations frame by frame. This approach allowed him to create lifelike traps and hazards that added tension and immersion to the gameplay. These constants also highlight the game's reliance on precision. Every frame and timing value had to be meticulously calculated to ensure the traps felt fair yet challenging. Mechner's background in film influenced this attention to detail; he treated each trap and hazard as part of the game's cinematic storytelling. The legacy of this design is evident in modern games, where animation timing and interaction parameters remain critical to gameplay. By defining these values explicitly, Mechner ensured that Prince of Persia's traps and hazards were not just functional but also contributed to the game's dramatic pacing."
  - id: "movement-parameters-for-gameplay-physics"
    line_start: 56
    line_end: 57
    title: "Movement Parameters for Gameplay Physics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'moveparams' section defines key parameters for the game's physics, such as 'gmaxval' and 'gminval,' which set the bounds for gravity calculations. These values are critical to the game's platforming mechanics, ensuring that the protagonist's movements feel natural and responsive. In the 1980s, realistic physics in games was rare due to hardware limitations. The Apple II's 6502 processor lacked floating-point arithmetic, so developers had to rely on integer math and clever approximations. Mechner's implementation of gravity and movement parameters reflects this ingenuity, using simple calculations to simulate complex behaviors. The result is a game where jumps, falls, and landings feel intuitive despite the constraints. Mechner's focus on realism was inspired by his background in film and animation. He famously used rotoscoping to capture lifelike movements, filming his brother performing stunts and tracing each frame. This attention to detail extended to the game's physics, which had to complement the realistic animations. The movement parameters defined here influenced not only Prince of Persia but also the broader genre of cinematic platformers. Games like Another World and Flashback built on Mechner's innovations, using similar techniques to create immersive worlds. This section is a testament to how thoughtful design can overcome technical limitations and set new standards for realism in gaming."

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