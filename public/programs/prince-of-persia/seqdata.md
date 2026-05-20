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
description: "Sequence table definitions for Prince of Persia's cinematic animations"

summary:
  - point: "Defines animation sequences for Prince's movements"
    link: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    link_label: "Prince of Persia (1989)"
  - point: "Uses rotoscoping to achieve fluid animations"
    link: "https://en.wikipedia.org/wiki/Rotoscoping"
    link_label: "Rotoscoping"
  - point: "Optimized for Apple II's 6502 assembly constraints"
    link: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    link_label: "6502 microprocessor"

enhancements:
  - id: "animation-sequence-table"
    line_start: 4
    line_end: 112
    title: "The 112 Moves That Defined a Genre"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines the sequence table for Prince of Persia's animations, mapping each movement or action to a unique identifier. These identifiers correspond to the cinematic animations that Jordan Mechner meticulously crafted using rotoscoping techniques. By filming his brother performing various moves and tracing the frames, Mechner achieved an unprecedented level of realism for the time. In the mid-1980s, the Apple IIe/IIc was a popular home computer, but its hardware was limited. The MOS 6502 processor lacked advanced graphical capabilities, and memory constraints were severe. To overcome these limitations, Mechner used bank-switched memory to fit the game's data into 128KB. Each animation sequence had to be carefully optimized to ensure smooth transitions and minimal memory usage. The sequence table reflects the game's cinematic ambition. Actions like 'startrun,' 'jumphangMed,' and 'impale' showcase the variety of movements Mechner envisioned, while sequences like 'stabbed' and 'deadfall' emphasize the game's dramatic stakes. The table also includes instructions for combat, such as 'strike,' 'blocktostrike,' and 'retreat,' which added depth to the gameplay. Prince of Persia's animation system influenced countless games that followed. Its fluidity set a new standard for platformers and inspired developers to prioritize character movement and realism. Games like Another World (1991) and Flashback (1992) adopted similar cinematic approaches, and the techniques pioneered here became foundational for modern game animation. Mechner's work demonstrated that storytelling and gameplay could be seamlessly integrated, a principle that continues to shape the industry today."
  - id: "instruction-code-definitions"
    line_start: 114
    line_end: 130
    title: "How 15 Codes Controlled the Prince"
    wikipedia_url: "https://en.wikipedia.org/wiki/MOS_Technology_6502"
    image_url: ""
    image_caption: ""
    content: "This section defines instruction codes used to control the Prince's behavior within animation sequences. Each code represents a specific action or condition, such as 'goto' for jumping to another sequence, 'up' and 'down' for vertical movement, or 'die' for triggering a death animation. These codes act as the building blocks for the game's logic, enabling complex interactions and transitions between animations. In the 1980s, programming for the Apple II required ingenuity due to hardware constraints. The 6502 processor's limited instruction set and lack of built-in graphics demanded creative solutions. Mechner's use of instruction codes allowed him to abstract high-level behaviors into compact, reusable commands, optimizing memory usage and simplifying the animation system. The instruction codes also highlight Mechner's attention to detail. For example, 'ifwtless' checks a weight threshold, enabling dynamic responses to environmental conditions. 'nextlevel' transitions the game to a new stage, ensuring seamless progression. These codes reflect the game's cinematic design philosophy, where every movement and interaction contributes to the narrative. This approach influenced subsequent game development, particularly in the realm of scripting languages and event-driven programming. Modern engines like Unity and Unreal use similar abstractions to manage character behavior and game logic. Mechner's work laid the groundwork for these systems, demonstrating how compact, efficient code could enable rich, immersive experiences. The instruction codes in Prince of Persia remain a testament to the ingenuity required to push the boundaries of early computing."

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