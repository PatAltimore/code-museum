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
description: "Defines animation sequences and their instruction codes for Prince of Persia's cinematic gameplay."

summary:
  - point: "Sequence table maps animations to numeric identifiers."
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Instruction codes control animation transitions and game logic."
    link: "https://en.wikipedia.org/wiki/Apple_II"
    link_label: "Apple II"
  - point: "Rotoscoping influenced the animation design."
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"

enhancements:
  - id: "animation-sequence-table"
    line_start: 6
    line_end: 112
    title: "Mapping animations to gameplay sequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines a sequence table that maps animation sequences to numeric identifiers, enabling the game's cinematic platformer mechanics. Each identifier corresponds to a specific animation, such as running, jumping, fighting, or interacting with objects. These animations are central to the game's fluid and lifelike movement, achieved through rotoscoping—a technique where Jordan Mechner filmed his brother performing actions and traced the frames to create realistic sprite animations. In the mid-1980s, the Apple IIe/IIc was a popular home computer with limited graphical and memory capabilities. Developers often had to work within tight constraints, such as 128K of memory and 6502 assembly language. Mechner designed this sequence table to efficiently reference animations, allowing the game to dynamically transition between states based on player input and environmental conditions. This approach to animation sequencing was innovative for its time, as most games relied on simpler, less fluid sprite transitions. The cinematic quality of Prince of Persia's animations set a new standard for platformers and influenced later titles like Flashback and Another World, which adopted similar techniques. The sequence table's design also demonstrates how Mechner optimized memory usage by encoding animations as numeric identifiers, a practice that remains relevant in modern game development for managing assets efficiently. The legacy of this sequence table extends beyond Prince of Persia, as its emphasis on fluid animation and cinematic storytelling helped define the cinematic platformer genre. Developers continue to study Mechner's work for insights into creating immersive and visually compelling gameplay experiences."
  - id: "instruction-codes-for-animation"
    line_start: 114
    line_end: 130
    title: "Instruction codes for animation transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines instruction codes used to control animation transitions and game logic in Prince of Persia. Each code represents a specific action or condition, such as 'goto' for jumping to another sequence, 'aboutface' for turning around, 'up' and 'down' for vertical movement, and 'die' for triggering the player's death animation. These codes are integral to the game's ability to dynamically respond to player input and environmental changes. During the late 1980s, game developers faced significant challenges in creating responsive and immersive gameplay on hardware like the Apple IIe/IIc. The 6502 assembly language offered direct control over the machine but required meticulous optimization due to limited processing power and memory. Mechner's use of instruction codes allowed him to encapsulate complex behaviors in a compact and reusable format, reducing the game's memory footprint while maintaining its cinematic quality. The concept of using instruction codes to manage animation transitions has influenced game development practices for decades. Modern game engines, such as Unity and Unreal Engine, use similar principles to define state machines and animation controllers, enabling developers to create fluid and responsive character movements. Mechner's work on Prince of Persia demonstrated the potential of these techniques in a constrained environment, inspiring other developers to adopt and refine them. The instruction codes in this section highlight Mechner's ingenuity in overcoming technical limitations to deliver a groundbreaking gaming experience. By abstracting animation transitions into reusable codes, he laid the groundwork for future advancements in game design and programming."

---

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