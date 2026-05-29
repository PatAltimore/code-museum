---
title: "SEQDATA.S"
program: "Prince of Persia"
program_slug: "prince-of-persia"
file_path: "01 POP Source/Source/SEQDATA.S"
language: "6502 Assembly"
github_url: "https://github.com/jmechner/Prince-of-Persia-Apple-II/blob/master/01 POP Source/Source/SEQDATA.S"
year: 1989
author: "Jordan Mechner"
slug: "seqdata"
order: 26
description: "This file defines the sequence data and instruction codes for Prince of Persia's cinematic animations, a groundbreaking approach in 1989."

summary:
  - point: "Sequence table maps animations to gameplay states"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Rotoscoping inspired realistic character movement"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Memory constraints shaped compact data structures"
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"

enhancements:
  - id: "animation-sequence-table"
    line_start: 9
    line_end: 112
    title: "How 112 Animations Fit in 128KB"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines the sequence table for Prince of Persia, mapping 112 distinct animations to gameplay states. Each entry corresponds to a specific movement or action, such as running, jumping, fighting, or interacting with the environment. The table uses integer identifiers to reference animations, allowing the game engine to quickly switch between them based on player input or game events. In 1989, memory constraints were a significant challenge for developers working on the Apple II. The machine had only 128KB of RAM, split into bank-switched memory. Jordan Mechner, working solo, had to design a system that could handle complex animations while fitting within these limits. The sequence table is a compact solution, storing references rather than full animation data. This approach was influenced by earlier techniques in arcade games and computer graphics, where efficiency was paramount. The animations themselves were created using rotoscoping, a labor-intensive process where Mechner filmed his brother performing actions, then traced each frame to create realistic movement. This technique gave Prince of Persia its cinematic feel, setting it apart from other platformers of the era. The sequence table became a template for future games that required detailed character animations. Its influence can be seen in later cinematic platformers like Another World (1991) and Flashback (1992), which also emphasized fluid, lifelike movement. The idea of mapping animations to states persists in modern game engines, where state machines and animation controllers are standard tools for developers. Mechner's work demonstrated how thoughtful data structures could overcome hardware limitations, a lesson that continues to resonate in game development."
  - id: "instruction-code-definitions"
    line_start: 114
    line_end: 130
    title: "The Commands Behind Cinematic Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines instruction codes used by the sequence table to control animations and gameplay logic. Each code represents a specific action or condition, such as 'goto' for changing sequences, 'up' and 'down' for vertical movement, or 'die' for triggering the player's death animation. These codes act as a scripting language for the game engine, enabling complex behaviors to be encoded in a compact format. In the mid-1980s, scripting systems were still a novel concept in game development. Mechner's use of instruction codes reflects his background in filmmaking, where storyboards and scripts guide the flow of a scene. By abstracting gameplay logic into a set of reusable commands, he created a flexible system that could handle the game's cinematic demands without requiring extensive hardcoding. This approach influenced later game engines, which adopted similar scripting mechanisms to manage animations and events. The idea of separating logic from data became a cornerstone of game design, appearing in engines like Unreal Engine and Unity. Mechner's work on Prince of Persia demonstrated the power of scripting to create dynamic, immersive experiences, paving the way for the complex narratives and gameplay systems seen in modern games."

---

```asm
 tr on
 lst off

* seqdata

fcheckmark = %01000000
fcentermark = %00011111

*  Sequence table entry points

startrun = 1
stand = 2
standjump = 3
runjump = 4
turn = 5
runturn = 6
stepfall = 7
jumphangMed = 8
hang = 9
climbup = 10
hangdrop = 11
freefall = 12
runstop = 13
jumpup = 14
fallhang = 15
jumpbackhang = 16
softland = 17
jumpfall = 18
stepfall2 = 19
medland = 20
rjumpfall = 21
hardland = 22
hangfall = 23
jumphangLong = 24
hangstraight = 25
rdiveroll = 26
sdiveroll = 27
highjump = 28
stepfwd1 = 29
;stepfwd 1 thru 14 = 29 thru 42
turnrun = 43
testfoot = 44
bumpfall = 45
hardbump = 46
bump = 47
superhijump = 48
standup = 49
stoop = 50
impale = 51
crush = 52
deadfall = 53
halve = 54
engarde = 55
advance = 56
retreat = 57
strike = 58
flee = 59
turnengarde = 60
strikeblock = 61
readyblock = 62
landengarde = 63
bumpengfwd = 64
bumpengback = 65
blocktostrike = 66
strikeadv = 67
climbdown = 68
blockedstrike = 69
climbstairs = 70
dropdead = 71
stepback = 72
climbfail = 73
stabbed = 74
faststrike = 75
strikeret = 76
alertstand = 77
drinkpotion = 78
crawl = 79
alertturn = 80
fightfall = 81
efightfall = 82
efightfallfwd = 83
running = 84
stabkill = 85
fastadvance = 86
goalertstand = 87
arise = 88
turndraw = 89
guardengarde = 90
pickupsword = 91
resheathe = 92
fastsheathe = 93
Pstand = 94
Vstand = 95
Vapproach = 96
Vstop = 97
Palert = 98
Pback = 99
Vexit = 100
Mclimb = 101
Vraise = 102
Plie = 103
patchfall = 104
Mscurry = 105
Mstop = 106
Mleave = 107
Pembrace = 108
Pwaiting = 109
Pstroke = 110
Prise = 111
Pcrouch = 112
Pslump = 113
Mraise = 114

* Sequence table instruction codes

goto = -1
aboutface = -2
up = -3
down = -4
chx = -5
chy = -6
act = -7
setfall = -8
ifwtless = -9
die = -10
jaru = -11
jard = -12
effect = -13
tap = -14
nextlevel = -15

 lst off
```