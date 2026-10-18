---
title: "3dungeon.zil"
program: "Zork III"
program_slug: "zork3"
file_path: "3dungeon.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork3/blob/master/3dungeon.zil"
year: 1982
author: "Blank, Lebling, Daniels, Anderson"
slug: "3dungeon"
order: 9
description: "The Royal Puzzle entrance, the Hall of Guardians, the mirror box and the Dungeon Master's prison as ZIL data."

summary:
  - point: "Despite its name, this file holds the end-game map and the Royal Puzzle's rooms, not the main dungeon"
    link: "https://en.wikipedia.org/wiki/Zork_III"
    link_label: "Zork III"
  - point: "Rooms are written as data with function exits, and the puzzles that move through them are in 3actions"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"

enhancements:
  - id: "go-and-directions"
    line_start: 1
    line_end: 7
    title: "Header and Directions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "The header names the game 'Zork III: The Dungeon Master' and 'The Great Underground Empire (Part 3)' with a 1982 copyright, and the first form declares the direction words. DIRECTIONS defines the eight compass points, UP, DOWN, IN and OUT, and the two unusual ones, LAND and CROSS, which Zork II declares as well. Zork III has no balloon to land, but the shared word list keeps the games compatible. Everything after this line is the data of the game's map and its objects."
  - id: "scenery"
    line_start: 9
    line_end: 76
    title: "Rubble, Walls and Chasms"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "The first objects are scenery shared by many rooms. RUBBLE, DEBRIS and TUNNEL stand for the clutter of a collapsing dungeon, and CHASM has an action routine in 3actions that answers 'leap' with a refusal ('You look before leaping...') and 'cross' with advice to find a bridge. Four wall objects, east, south, west and north, share one routine, RANDOM-WALL, which only has to answer PUSH, and two comments note that only the first six letters of a word count, so SOUTHE and NORTHE are listed as adjectives to keep them separate from SOUTHEAST and NORTHEAST. That small constraint shaped the dictionary: the parser keeps six characters of each word."
  - id: "water-lamp-sword"
    line_start: 78
    line_end: 111
    title: "Water, a Lamp and a Sword in a Stone"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "WATER is a separate takeable object with four synonyms, including LIQUID and H2O, added in this version of the file. The older dungeon.zil lacks it. The brass lantern has the description 'Your old friend, the brass lantern, is at your feet', a line aimed at players of the first two games, and its action routine tracks the burning time. A BROKEN-LAMP waits in reserve. The sword is declared inside the STONE object, so it begins the game stuck in a great rock at the junction, and its VALUE is zero; the first game's treasure points have no place here. The player cannot pull it out: SWORD-FCN answers a try with a joke about Arthur, and the sword reaches the player's hand on its own when the hooded figure first appears."
  - id: "royal-puzzle-rooms"
    line_start: 113
    line_end: 150
    title: "The Royal Puzzle's Three Rooms"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sliding_puzzle"
    image_url: ""
    image_caption: ""
    content: "Three rooms frame the Royal Puzzle. CP-ANTE is the Royal Puzzle Entrance, with exits west to a side room and north or up to the museum, and a DOWN exit that is a function, CPENTER, which refuses entry when the hole is blocked. CP-OUT is a side room whose east exit to the puzzle is conditional on CP-FLAG, with the message 'The steel door is closed' otherwise. CP, the room in the puzzle itself, has nine exit properties and every one calls the same function, CPEXIT. A single room object stands for thirty-six cells: the puzzle code changes a variable and moves objects in and out, so the map never grows. One room object stands for the whole maze."
  - id: "puzzle-objects"
    line_start: 154
    line_end: 240
    title: "The Warning Note, the Slot and the Book"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sliding_puzzle"
    image_url: ""
    image_caption: ""
    content: "The Royal Puzzle comes with its props. A warning note in the antechamber says the puzzle is dangerous and warns visitors not to enter after hours, a nice piece of museum-label comedy. The small slot has OPENBIT and a capacity of four, and its routine accepts one specific thing, the lore book, as the exit fee. The steel door and the wall objects for each compass direction are declared as local globals, and the ladder as a global object, because they are visible from many cells. The very ancient book is a readable object with a text that mentions strange, wondrous pictures and words that change colour as you read. These are the pieces of a sliding-block puzzle built from ordinary objects."
  - id: "end-game-objects"
    line_start: 242
    line_end: 312
    title: "The Old End-Game Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "A comment introduces 'Objects/rooms for old end-game', and the objects that follow are the Guardians, the compass rose, the Dungeon Master, the mirror, the panels and the channel. INTDIR is a stand-in object so that a direction can be the object of a verb, which the parser's direction-as-noun case relies on. There are two Dungeon Master objects, a global one that answers from anywhere and the one that sits in the room behind the door, in the same pairing that Zork II uses for its unicorn and Cerberus. The final room MRD, a hallway, begins the hall of the Guardians, and its exits south, southeast and southwest all call the same function, MRGO. The comment 'old' is the repository's own label for this section."
  - id: "mirror-box-rooms"
    line_start: 314
    line_end: 507
    title: "The Hall of Guardians and the Box"
    wikipedia_url: "https://en.wikipedia.org/wiki/Mirror"
    image_url: ""
    image_caption: ""
    content: "A dozen rooms make up the corridor of the Guardians and the mirror box. The hallway rooms, MRA to MRD, and the pairs of 'Narrow Room' side rooms to their east and west are almost identical, with LDESC set to a single space, meaning that the long description is printed by their action routines. Their exits are functions, so the box's position decides where a move leads. IN-MIRROR, the room inside the mirror box, has nine exit directions that all call MIROUT, and its objects are the panels, bars and poles that the player pushes. The geometry is a one-dimensional hall with a rotating box in it, expressed as data and a few routines."
  - id: "button-and-stairs"
    line_start: 509
    line_end: 571
    title: "The Button Room, the Beam and the Secret Stairs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "MR-ANTE, the Button Room, is described in full in the room itself and has a red button on the wall and torches out of reach, with a PSEUDO entry for them. Its south and up exits lead to the stairs only if SECRET-DOOR is open. MREYE, the Beam Room, has a red beam of light crossing the north end. MSTAIRS, the Engravings Room, leads on to a dead end and to the damp passage, which is blocked by rubble on the north and by a steep, mossy channel on the south. The text mentions the channel that crosses the room. Together these rooms hold the beam puzzle that opens the mirror."
  - id: "corridors-and-door"
    line_start: 573
    line_end: 631
    title: "Marble Corridors and the Dungeon Door"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "The east, west, north and south corridors form a ring of polished marble halls, their exits tied together by plain rooms. The south corridor leads on to BEHIND-DOOR, a narrow corridor whose south exit is conditional on DUNGEON-DOOR being open, and FRONT-DOOR, the Dungeon Entrance, has the same condition on its north exit. WOODEN-WALL is declared here as a local global for the box. This is the place where the Dungeon Master appears, and the layout, a door that opens in both directions, is the geometry of his last test."
  - id: "cells-and-nirvana"
    line_start: 633
    line_end: 706
    title: "The Parapet, the Cells and the Treasury"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "The North Corridor opens south into a cell and north onto a Parapet overlooking a flaming pit. CELL, PRISON-CELL and GOOD-CELL are three versions of a prison cell: a cell the player enters, a cell that is permanently locked, and a cell with a bronze door that leads to NIRVANA. The Treasury of Zork, described as the ultimate storehouse of the Empire's wealth, is the last room, and its action routine ends the game. The exits of GOOD-CELL are conditional on BRONZE-DOOR being open. The separate cell rooms are how eight identical cells are made without eight rooms."
  - id: "final-objects"
    line_start: 710
    line_end: 919
    title: "Panels, Doors, Pole and Dial"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "A long run of objects completes the final puzzles. IN-MIRROR holds the red, yellow, white, black, mahogany and pine panels, the T-bar, the wooden bar and the long and short poles, with the short pole declared a hand grip. In the Beam Room the red beam is a container with a capacity of 100. The parapet has a sundial with TURNBIT, a large button, and a flaming pit. There are three versions of the cell door and a hidden bronze door. DUNGEON-DOOR, DUNGEON-PANEL and SECRET-DOOR belong to the Dungeon Master's door, and the OLD-MAN and CP-HOLE finish the list. Each is a few lines of data with an ACTION property that points at a routine in 3actions."
  - id: "go"
    line_start: 921
    line_end: 958
    title: "GO: The Dream That Starts the Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "GO is the start-up routine. It queues the lantern's burnout for 200 turns, makes the brass lamp the current lamp, and then does the 'junk the compiler can't do': it fills two entries of the Royal Puzzle's object table, putting the lore book in one cell and the slot in another. It sets the winner, the player and the box's starting position, and places the player in ZORK2-STAIR, the Endless Stair. It queues the viewing table's changing view for four turns later. The I-CLEFT queue that the older dungeon.zil had here is commented out, because the main loop now does it after the first command. On the first run it prints the dream: the player tumbles down a great dark staircase and sees an oddly youthful old man promise a final test. Then it prints the version and the first look."
  - id: "cleft-queued"
    line_start: 960
    line_end: 960
    title: "CLEFT-QUEUED?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "The last line declares the flag that the main loop reads to start the earthquake clock once. It sits alone after GO, in the file's closing position, because the shared loop in gmain.zil refers to it by name and the global has to exist in some game file. Zork I and Zork II do not define it, since their conditionals never mention it. A single global at the end of the dungeon file is the whole of Zork III's contribution to the shared loop."
---

```lisp
"DUNGEON3 for
		     ZORK III: The Dungeon Master
		 The Great Underground Empire (Part 3)
	(c) Copyright 1982 Infocom, Inc.  All Rights Reserved.
"

<DIRECTIONS NORTH EAST WEST SOUTH NE NW SE SW UP DOWN IN OUT LAND CROSS>

"SUBTITLE GLOBAL OBJECTS"

<OBJECT RUBBLE
	(IN LOCAL-GLOBALS)
	(SYNONYM ROCK ROCKS BOULDER RUBBLE)
	(DESC "rubble")
	(FLAGS NDESCBIT)>

<OBJECT DEBRIS
	(IN GLOBAL-OBJECTS)
	(SYNONYM DUST DEBRIS)
	(DESC "dust and debris")
	(FLAGS NDESCBIT)>

<OBJECT CHASM
	(IN LOCAL-GLOBALS)
	(SYNONYM CHASM GORGE RAVINE)
	(ADJECTIVE ROCKY DEEP)
	(DESC "chasm")
	(ACTION CHASM-FCN)
	(FLAGS NDESCBIT)>

<OBJECT TUNNEL
	(IN GLOBAL-OBJECTS)
	(SYNONYM PASSAGE CRAWLWAY)
        (ADJECTIVE DARK SMOKY)
	(DESC "tunnel")
	(FLAGS NDESCBIT)
	(ACTION TUNNEL-OBJECT)>

<OBJECT EAST-WALL	;"was EAST-WALL"
	(IN GLOBAL-OBJECTS)
	(SYNONYM WALL)
	(ADJECTIVE EAST EASTERN)
	(DESC "eastern wall")
	(FLAGS NDESCBIT)
	(ACTION RANDOM-WALL)>

<OBJECT SOUTH-WALL	;"was SOUTH-WALL"
	(IN GLOBAL-OBJECTS)
	(SYNONYM WALL)
	(ADJECTIVE SOUTH SOUTHE) ;"only 6 chars count and southeast exists"
	(DESC "southern wall")
	(FLAGS NDESCBIT)
	(ACTION RANDOM-WALL)>

<OBJECT WEST-WALL	;"was WEST-WALL"
	(IN GLOBAL-OBJECTS)
	(SYNONYM WALL)
	(ADJECTIVE WEST WESTERN)
	(DESC "western wall")
	(FLAGS NDESCBIT)
	(ACTION RANDOM-WALL)>

<OBJECT NORTH-WALL	;"was NORTH-WALL"
	(IN GLOBAL-OBJECTS)
	(SYNONYM WALL)
	(ADJECTIVE NORTH NORTHE)	;"only six chars used..."
	(DESC "northern wall")
	(FLAGS NDESCBIT)
	(ACTION RANDOM-WALL)>

<OBJECT GLOBAL-WATER	;"was GLOBAL-WATER"
	(IN LOCAL-GLOBALS)
	(SYNONYM WATER QUANTITY)
	(DESC "water")
	(FLAGS DRINKBIT)
	(ACTION WATER-FCN)>

<OBJECT WATER
	(SYNONYM WATER QUANTITY LIQUID H2O)
	(DESC "quantity of water")
	(FLAGS TAKEBIT DRINKBIT)
	(ACTION WATER-FCN)
	(LDESC "There is some water here.")
	(SIZE 4)>

<OBJECT BROKEN-LAMP	;"was BLAMP"
	(SYNONYM LAMP LANTERN)
	(ADJECTIVE BROKEN BRASS)
	(DESC "broken lantern")
	(FLAGS TAKEBIT)
	(SIZE 15)>

<OBJECT LAMP	;"was LAMP"
	(IN CP-ANTE)
	(SYNONYM LAMP LANTERN)
	(ADJECTIVE BRASS)
	(DESC "lamp")
	(FLAGS TAKEBIT LIGHTBIT)
	(FDESC "Your old friend, the brass lantern, is at your feet.")
	(ACTION LANTERN)
	(SIZE 15)>

<OBJECT SWORD	;"was SWORD"
	(IN STONE)
	(SYNONYM SWORD ORCRIST GLAMDRING BLADE)
	(ADJECTIVE ELVISH OLD ANTIQUE)
	(DESC "sword")
	(FLAGS TAKEBIT WEAPONBIT TRYTAKEBIT)
	(ACTION SWORD-FCN)
	(SIZE 25)
	(VALUE 0)>

"CHINESE PUZZLE ROOMS/OBJECTS"

<ROOM CP-ANTE
      (IN ROOMS)
      (DESC "Royal Puzzle Entrance")
      (WEST TO CP-OUT)
      (NORTH TO MUSEUM-ENTRANCE)
      (UP TO MUSEUM-ENTRANCE)
      (DOWN PER CPENTER)
      (FLAGS RLANDBIT ONBIT)
      (ACTION CPANT-ROOM)
      (GLOBAL STAIRS)>

<ROOM CP-OUT
      (IN ROOMS)
      (DESC "Side Room")
      (NORTH TO CP-ANTE)
      (UP TO CP-ANTE)
      (EAST TO CP IF CP-FLAG ELSE "The steel door is closed.")
      (FLAGS RLANDBIT ONBIT)
      (ACTION CPOUT-ROOM)
      (GLOBAL CPDOOR STAIRS)>

<ROOM CP
      (IN ROOMS)
      (DESC "Room in a Puzzle")
      (NORTH PER CPEXIT)
      (SOUTH PER CPEXIT)
      (EAST PER CPEXIT)
      (WEST PER CPEXIT)
      (NE PER CPEXIT)
      (NW PER CPEXIT)
      (SE PER CPEXIT)
      (UP PER CPEXIT)
      (SW PER CPEXIT)
      (ACTION CP-ROOM)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL CPLADDER CPDOOR CPEWL CPWWL CPNWL CPSWL)>

;"SUBTITLE CHINESE PUZZLE OBJECTS"

<OBJECT WARNING-NOTE
	(IN CP-ANTE)
	(DESC "warning note")
	(SYNONYM NOTE WARNING TEXT)
	(ADJECTIVE WARNING SMALL)
	(FDESC "Lying on the ground is a small note of some kind.")
	(FLAGS TAKEBIT READBIT BURNBIT)
	(SIZE 2)
	(TEXT
"Warning:|
    The Royal Puzzle is dangerous and it is possible to become
trapped within its confines. Please do not enter the puzzle after hours
when museum personnel are not present.|
              The Management")>

<OBJECT CP-SLOT
	(SYNONYM CPSLT SLIT SLOT)
	(ADJECTIVE SMALL)
	(DESC "small slot")
	(FLAGS NDESCBIT OPENBIT)
	(ACTION CP-SLOT-FCN)
	(CAPACITY 4)>

<OBJECT CPDOOR
	(IN LOCAL-GLOBALS)
	(SYNONYM DOOR)
	(ADJECTIVE STEEL METAL)
	(DESC "steel door")
	(FLAGS NDESCBIT)
	(ACTION CPDOOR-F)>

<OBJECT LORE-BOOK
	(SYNONYM BOOK LORE TEXT)
	(ADJECTIVE LORE OLD STRANGE)
	(DESC "very ancient book")
	(FLAGS TAKEBIT READBIT)
	(LDESC
	 "There is an old book here.")
	(FDESC
	 "Nestled inside the niche is an old and dusty book.")
	(TEXT
"The book is written in a strong and elegant hand and is full of strange,
wondrous pictures. The text, penned in many colours, is in a tongue unknown
to you. The words seem to change colour as you read them.
The book itself is very old and the pages dry and brittle.")
	(SIZE 4)
	(ACTION LORE-BOOK-F)>

<GLOBAL CP-FLAG <>>

<OBJECT CPEWL		;"defined CPWALL"
        (IN LOCAL-GLOBALS)
	(SYNONYM WALL)
	(ADJECTIVE EAST EASTERN)
	(DESC "eastern wall")
	(FLAGS NDESCBIT)
	(ACTION CPWALL-OBJECT)>

<OBJECT CPWWL		;"defined CPWALL"
        (IN LOCAL-GLOBALS)
	(SYNONYM WALL)
	(ADJECTIVE WEST WESTERN)
	(DESC "western wall")
	(FLAGS NDESCBIT)
	(ACTION CPWALL-OBJECT)>

<OBJECT CPSWL		;"defined CPWALL"
        (IN LOCAL-GLOBALS)
	(SYNONYM WALL)
	(ADJECTIVE SOUTH)
	(DESC "southern wall")
	(FLAGS NDESCBIT)
	(ACTION CPWALL-OBJECT)>

<OBJECT CPNWL		;"defined CPWALL"
        (IN LOCAL-GLOBALS)
	(SYNONYM WALL)
	(ADJECTIVE NORTH)
	(DESC "northern wall")
	(FLAGS NDESCBIT)
	(ACTION CPWALL-OBJECT)>

<OBJECT CPLADDER		;"defined CPLADDER"
        (IN GLOBAL-OBJECTS)
	(SYNONYM LADDER)
	(DESC "ladder")
	(ACTION CPLADDER-OBJECT)>

;"Objects/rooms for old end-game"

<OBJECT INTDIR
	(IN GLOBAL-OBJECTS)
	(SYNONYM INTDIR)
	(FLAGS TOOLBIT)
	(DESC "direction")>

<OBJECT GUARDIAN
	(IN LOCAL-GLOBALS)
	(DESC "Guardians of Zork")
	(SYNONYM STATUE GUARDIAN GUARD GUARDS)
	(FLAGS ACTORBIT)
	(ACTION GUARDIANS)>

<OBJECT ROSE
	(IN LOCAL-GLOBALS)
	(DESC "compass rose")
	(SYNONYM ROSE)
	(ADJECTIVE COMPASS)
	(ACTION ROSE-F)>

<OBJECT MASTER
	(IN LOCAL-GLOBALS)
	(DESC "dungeon master")
	(SYNONYM MASTER MAN)
	(ADJECTIVE DUNGEON)
	(FLAGS ACTORBIT)
	(ACTION MASTER-F)>

<OBJECT DUNGEON-MASTER
	(IN BEHIND-DOOR)
	(DESC "dungeon master")
	(LDESC
"The dungeon master is quietly leaning on his staff here.")
	(SYNONYM MASTER DUNGEON MAN)
	(ADJECTIVE DUNGEON)
	(FLAGS ACTORBIT)
	(ACTION DUNGEON-MASTER-F)>

<OBJECT MIRROR
	(IN LOCAL-GLOBALS)
	(DESC "mirror")
	(SYNONYM MIRROR STRUCTURE)
	(ACTION MIRROR-FUNCTION)>

<OBJECT PANEL
	(IN LOCAL-GLOBALS)
	(DESC "panel")
	(SYNONYM PANEL)
	(ACTION PANEL-FUNCTION)>

<OBJECT CHANNEL
	(IN LOCAL-GLOBALS)
	(DESC "stone channel")
	(SYNONYM CHANNEL HOLE)
	(ADJECTIVE STONE)>

<ROOM MRD
      (IN ROOMS)
      (DESC "Hallway")
      (LDESC " ")
      (NORTH TO FRONT-DOOR)
      (NE TO FRONT-DOOR)
      (NW TO FRONT-DOOR)
      (SOUTH PER MRGO)
      (SE PER MRGO)
      (SW PER MRGO)
      (ACTION MRDF)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL ROSE CHANNEL GUARDIAN WOODEN-WALL)>

<ROOM MRG
      (IN ROOMS)
      (DESC "Hallway")
      (LDESC " ")
      (NORTH PER MRGO)
      (NW PER MRGO)
      (NE PER MRGO)
      (ENTER PER MIRIN)
      (SOUTH PER MRGO)
      (SW PER MRGO)
      (SE PER MRGO)
      (ACTION GUARDIANS)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL GUARDIAN)>

<ROOM MRC
      (IN ROOMS)
      (DESC "Hallway")
      (LDESC " ")
      (NORTH PER MRGO)
      (NW PER MRGO)
      (NE PER MRGO)
      (ENTER PER MIRIN)
      (SOUTH PER MRGO)
      (SW PER MRGO)
      (SE PER MRGO)
      (ACTION MRCF)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL ROSE CHANNEL GUARDIAN WOODEN-WALL)>

<ROOM MRB
      (IN ROOMS)
      (DESC "Hallway")
      (LDESC " ")
      (NORTH PER MRGO)
      (NW PER MRGO)
      (NE PER MRGO)
      (ENTER PER MIRIN)
      (SOUTH PER MRGO)
      (SW PER MRGO)
      (SE PER MRGO)
      (ACTION MRBF)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL ROSE CHANNEL WOODEN-WALL)>

<ROOM MRA
      (IN ROOMS)
      (DESC "Hallway")
      (LDESC " ")
      (NORTH PER MRGO)
      (NW PER MRGO)
      (NE PER MRGO)
      (ENTER PER MIRIN)
      (SOUTH TO MREYE)
      (ACTION MRAF)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL ROSE CHANNEL WOODEN-WALL)>

<ROOM MRDE
      (IN ROOMS)
      (DESC "Narrow Room")
      (LDESC " ")
      (ENTER PER MIRIN)
      (WEST PER MIRIN)
      (NORTH TO FRONT-DOOR)
      (SOUTH TO MRG)
      (ACTION MRDEW)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL GUARDIAN)>

<ROOM MRDW
      (IN ROOMS)
      (DESC "Narrow Room")
      (LDESC " ")
      (ENTER PER MIRIN)
      (WEST PER MIRIN)
      (NORTH TO FRONT-DOOR)
      (SOUTH TO MRG)
      (ACTION MRDEW)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL GUARDIAN)>

<ROOM MRGE
      (IN ROOMS)
      (DESC "Narrow Room")
      (LDESC " ")
      (ENTER PER MIRIN)
      (WEST PER MIRIN)
      (NORTH TO MRD)
      (SOUTH TO MRC)
      (ACTION GUARDIANS)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL GUARDIAN)>

<ROOM MRGW
      (IN ROOMS)
      (DESC "Narrow Room")
      (LDESC " ")
      (ENTER PER MIRIN)
      (EAST PER MIRIN)
      (NORTH TO MRD)
      (SOUTH TO MRC)
      (ACTION GUARDIANS)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL GUARDIAN)>

<ROOM MRCE
      (IN ROOMS)
      (DESC "Narrow Room")
      (LDESC " ")
      (ENTER PER MIRIN)
      (WEST PER MIRIN)
      (NORTH TO MRG)
      (SOUTH TO MRB)
      (ACTION MRCEW)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL GUARDIAN)>

<ROOM MRCW
      (IN ROOMS)
      (DESC "Narrow Room")
      (LDESC " ")
      (ENTER PER MIRIN)
      (EAST PER MIRIN)
      (NORTH TO MRG)
      (SOUTH TO MRB)
      (ACTION MRCEW)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL GUARDIAN)>

<ROOM MRBE
      (IN ROOMS)
      (DESC "Narrow Room")
      (LDESC " ")
      (ENTER PER MIRIN)
      (WEST PER MIRIN)
      (NORTH TO MRC)
      (SOUTH TO MRA)
      (ACTION MRBEW)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL GUARDIAN)>

<ROOM MRBW
      (IN ROOMS)
      (DESC "Narrow Room")
      (LDESC " ")
      (ENTER PER MIRIN)
      (EAST PER MIRIN)
      (NORTH TO MRC)
      (SOUTH TO MRA)
      (ACTION MRBEW)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL GUARDIAN)>

<ROOM MRAE
      (IN ROOMS)
      (DESC "Narrow Room")
      (LDESC " ")
      (ENTER PER MIRIN)
      (WEST PER MIRIN)
      (NORTH TO MRB)
      (SOUTH TO MREYE)
      (ACTION MRAEW)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL GUARDIAN)>

<ROOM MRAW
      (IN ROOMS)
      (DESC "Narrow Room")
      (LDESC " ")
      (ENTER PER MIRIN)
      (EAST PER MIRIN)
      (NORTH TO MRB)
      (SOUTH TO MREYE)
      (ACTION MRAEW)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MIRROR PANEL GUARDIAN)>

<ROOM IN-MIRROR
      (IN ROOMS)
      (DESC "Inside Mirror")
      (LDESC " ")
      (OUT PER MIROUT)
      (NORTH PER MIROUT)
      (SOUTH PER MIROUT)
      (NW PER MIROUT)
      (NE PER MIROUT)
      (SE PER MIROUT)
      (SW PER MIROUT)
      (WEST PER MIROUT)
      (EAST PER MIROUT)
      (ACTION MAGIC-MIRROR)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL ROSE CHANNEL GUARDIAN)>

<ROOM MR-ANTE
      (IN ROOMS)
      (DESC "Button Room")
      (LDESC
"You are at the southern end of a long hall. To the south, stairs ascend
into darkness. To the north the corridor is illuminated by torches set
high in the walls, out of reach. On one wall is a red button.")
       (SOUTH TO MSTAIRS IF SECRET-DOOR IS OPEN)
       (UP TO MSTAIRS IF SECRET-DOOR IS OPEN)
       (NORTH TO MREYE)
       (FLAGS RLANDBIT ONBIT)
       (GLOBAL SECRET-DOOR STAIRS)
       (PSEUDO "TORCH" TORCH-PSEUDO "TORCHE" TORCH-PSEUDO)>

<ROOM MREYE
      (IN ROOMS)
      (DESC "Beam Room")
      (LDESC " ")
      (NORTH PER MRGO)
      (NW PER MRGO)
      (NE PER MRGO)
      (SOUTH TO MR-ANTE)
      (ACTION MREYE-ROOM)
      (FLAGS RLANDBIT ONBIT)>

<ROOM MSTAIRS
      (IN ROOMS)
      (DESC "Engravings Room")
      (NORTH TO MR-ANTE IF SECRET-DOOR IS OPEN ELSE "You can't go that way.")
      (DOWN TO MR-ANTE IF SECRET-DOOR IS OPEN ELSE "You can't go that way.")
      (SW TO DAMP-PASSAGE)
      (SE TO DEAD-END)
      (FLAGS RLANDBIT)
      (ACTION MSTAIRS-F)
      (GLOBAL SECRET-DOOR STAIRS)>

<ROOM DEAD-END
      (IN ROOMS)
      (DESC "Dead End")
      (LDESC
"You have come to the end of two adjoining passages to the west and the
northwest.")
      (WEST TO DAMP-PASSAGE)
      (NW TO MSTAIRS)
      (FLAGS RLANDBIT)>

<ROOM DAMP-PASSAGE
      (IN ROOMS)
      (DESC "Damp Passage")
      (LDESC
"This is a particularly damp spot even by dungeon standards. You can see
the junction to the west, and two similar passages to the east and northeast.
A wide stone channel steeply descends into the room from the south. It is
covered with slippery moss and lichen. The channel crosses the room, but the
opening where it once continued north is now blocked by rubble.")
      (WEST TO JUNCTION)
      (EAST TO DEAD-END)
      (NE TO MSTAIRS)
      (NORTH "The opening is blocked by tons of debris.")
      (UP "The channel is too steep and the moss too slippery.")
      (SOUTH "The channel is too steep and the moss too slippery.")
      (FLAGS RLANDBIT)
      (GLOBAL MOSS RUBBLE WATER-CHANNEL)>

<ROOM EAST-CORRIDOR
      (IN ROOMS)
      (DESC "East Corridor")
      (LDESC
"This is a hall with polished marble walls. It widens slightly as it turns
west at its northern and southern ends.")
      (NORTH TO NORTH-CORRIDOR)
      (SOUTH TO SOUTH-CORRIDOR)
      (FLAGS RLANDBIT ONBIT)>

<ROOM WEST-CORRIDOR
      (IN ROOMS)
      (DESC "West Corridor")
      (LDESC
"This is a hall with polished marble walls. It widens slightly as it turns
east at its northern and southern ends.")
      (NORTH TO NORTH-CORRIDOR)
      (SOUTH TO SOUTH-CORRIDOR)
      (FLAGS RLANDBIT ONBIT)>

<ROOM SOUTH-CORRIDOR
      (IN ROOMS)
      (DESC "South Corridor")
      (EAST TO EAST-CORRIDOR)
      (WEST TO WEST-CORRIDOR)
      (NORTH PER BRONZE-DOOR-EXIT)
      (SOUTH TO BEHIND-DOOR)
      (ACTION SOUTH-CORRIDOR-F)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL BRONZE-DOOR)>

<ROOM BEHIND-DOOR
      (IN ROOMS)
      (DESC "Narrow Corridor")
      (NORTH TO SOUTH-CORRIDOR)
      (SOUTH TO FRONT-DOOR IF DUNGEON-DOOR IS OPEN)
      (ACTION BEHIND-DOOR-F)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL DUNGEON-DOOR DUNGEON-PANEL)>

<ROOM FRONT-DOOR
      (IN ROOMS)
      (DESC "Dungeon Entrance")
      (LDESC " ")
      (NORTH TO BEHIND-DOOR IF DUNGEON-DOOR IS OPEN)
      (ENTER TO BEHIND-DOOR IF DUNGEON-DOOR IS OPEN)
      (SOUTH PER MRGO)
      (SE TO MRDE)
      (SW TO MRDW)
      (ACTION FRONT-DOOR-F)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MASTER DUNGEON-DOOR DUNGEON-PANEL WOODEN-WALL)>

<OBJECT WOODEN-WALL
	(IN LOCAL-GLOBALS)
	(DESC "wooden wall")
	(SYNONYM WALL)
	(ADJECTIVE WOOD WOODEN)
	(ACTION WOODEN-WALL-F)>

<ROOM NORTH-CORRIDOR
      (IN ROOMS)
      (DESC "North Corridor")
      (LDESC " ")
      (EAST TO EAST-CORRIDOR)
      (WEST TO WEST-CORRIDOR)
      (NORTH TO PARAPET)
      (SOUTH TO CELL IF CELL-DOOR IS OPEN)
      (ENTER TO CELL IF CELL-DOOR IS OPEN)
      (ACTION NORTH-CORRIDOR-F)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MASTER CELL-DOOR PARAPET-OBJ FLAMING-PIT)>

<ROOM PARAPET
      (IN ROOMS)
      (DESC "Parapet")
      (LDESC " ")
      (SOUTH TO NORTH-CORRIDOR)
      (NORTH "You would be burned to a crisp in no time.")
      (ACTION PARAPET-F)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MASTER PARAPET-OBJ FLAMING-PIT)>

<ROOM CELL
      (IN ROOMS)
      (DESC "Prison Cell")
      (LDESC " ")
      (OUT TO NORTH-CORRIDOR IF CELL-DOOR IS OPEN)
      (NORTH TO NORTH-CORRIDOR IF CELL-DOOR IS OPEN)
      (ACTION CELL-ROOM)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL MASTER BRONZE-DOOR CELL-DOOR PARAPET-OBJ FLAMING-PIT)>

<ROOM PRISON-CELL
      (IN ROOMS)
      (DESC "Prison Cell")
      (LDESC
"You are in a bare prison cell. Its wooden door is securely fastened, and
you can see only flames and smoke through its small window.")
      (OUT "The door is securely fastened.")
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL LOCKED-DOOR MASTER FLAMING-PIT)>

<ROOM GOOD-CELL
      (IN ROOMS)
      (DESC "Prison Cell")
      (LDESC " ")
      (OUT TO NIRVANA IF BRONZE-DOOR IS OPEN)
      (SOUTH TO NIRVANA IF BRONZE-DOOR IS OPEN)
      (ACTION NCELL-ROOM)
      (FLAGS RLANDBIT ONBIT)
      (GLOBAL GOOD-LOCKED-DOOR MASTER BRONZE-DOOR FLAMING-PIT)>

<ROOM NIRVANA
      (IN ROOMS)
      (DESC "Treasury of Zork")
      (LDESC
"This is a large room, richly appointed in a style that bespeaks exquisite
taste. To judge from its contents, it is the ultimate storehouse of the
wealth of the Great Underground Empire.|
|
There are chests containing precious jewels, mountains of
zorkmids, rare paintings, ancient statuary, and beguiling curios.|
|
On one wall is an annotated map of the Empire, showing the locations of
various troves of treasure, and of many superior scenic views.|
|
On a desk at the far end of the room are stock certificates
representing a controlling interest in FrobozzCo International, the
multinational conglomerate and parent company of
the Frobozz Magic Boat Co., etc.|
")
      (ACTION NIRVANA-F)
      (FLAGS RLANDBIT ONBIT)>

\

<OBJECT RUNES
	(IN MSTAIRS)
	(DESC "runes")
	(SYNONYM ENGRAV TEXT WALL RUNES)
	(ADJECTIVE CARVED)
	(FLAGS NDESCBIT READBIT)
	(ACTION RUNES-F)>

<OBJECT T-BAR
	(IN IN-MIRROR)
	(DESC "T-bar")
	(SYNONYM T-BAR BAR)
	(FLAGS NDESCBIT)
	(ACTION T-BAR-F)>

<OBJECT BLACK-PANEL
	(IN IN-MIRROR)
	(DESC "black panel")
	(SYNONYM WALL PANEL)
	(ADJECTIVE BLACK)
	(FLAGS NDESCBIT)
	(ACTION MPANELS)>

<OBJECT BRONZE-DOOR
	(IN LOCAL-GLOBALS)
	(DESC "bronze door")
	(SYNONYM DOOR)
	(ADJECTIVE BRONZE)
	(FLAGS CONTBIT DOORBIT INVISIBLE)
	(ACTION BRONZE-DOOR-F)>

<OBJECT CELL-DOOR
	(IN LOCAL-GLOBALS)
	(DESC "cell door")
	(SYNONYM DOOR)
	(ADJECTIVE WOOD WOODEN CELL)
	(FLAGS CONTBIT DOORBIT)
	(ACTION CELL-DOOR-F)>

<OBJECT COMPASS-ARROW
	(IN IN-MIRROR)
	(DESC "compass arrow")
	(SYNONYM ARROW)
	(ADJECTIVE COMPASS)
	(FLAGS NDESCBIT)>

<OBJECT DIAL-BUTTON
	(IN PARAPET)
	(DESC "large button")
	(SYNONYM BUTTON)
	(ADJECTIVE LARGE)
	(FLAGS NDESCBIT)
	(ACTION DIALBUTTON)>

<OBJECT GOOD-LOCKED-DOOR
	(IN LOCAL-GLOBALS)
	(DESC "cell door")
	(SYNONYM DOOR)
	(ADJECTIVE LOCKED WOOD WOODEN CELL)
	(FLAGS NDESCBIT)
	(ACTION LOCKED-DOOR-F)>

<OBJECT LOCKED-DOOR
	(IN LOCAL-GLOBALS)
	(DESC "cell door")
	(SYNONYM DOOR)
	(ADJECTIVE LOCKED WOOD WOODEN CELL)
	(FLAGS NDESCBIT)
	(ACTION LOCKED-DOOR-F)>

<OBJECT LONG-POLE
	(IN IN-MIRROR)
	(DESC "long pole")
	(SYNONYM POLE)
	(ADJECTIVE LONG CENTER)
	(FLAGS NDESCBIT)>

<OBJECT MAHOGANY-PANEL
	(IN IN-MIRROR)
	(DESC "mahogany panel")
	(SYNONYM WALL PANEL)
	(ADJECTIVE MAHOGANY)
	(FLAGS NDESCBIT)
	(ACTION MENDS)>

<OBJECT FLAMING-PIT
	(IN LOCAL-GLOBALS)
	(DESC "flaming pit")
	(SYNONYM PIT ABYSS)
	(ADJECTIVE FIERY FLAMING)
	(FLAGS NDESCBIT)
	(ACTION FLAMING-PIT-F)>

<OBJECT PARAPET-OBJ
	(IN LOCAL-GLOBALS)
	(DESC "parapet")
	(SYNONYM PARAPET)
	(FLAGS NDESCBIT)
	(ACTION PARAPET-OBJ-F)>

<OBJECT PINE-PANEL
	(IN IN-MIRROR)
	(DESC "pine panel")
	(SYNONYM PANEL WALL)
	(ADJECTIVE PINE)
	(FLAGS NDESCBIT)
	(ACTION MENDS)>

<OBJECT BEAM
	(IN MREYE)
	(DESC "red beam of light")
	(SYNONYM BEAM LIGHT)
	(ADJECTIVE RED)
	(FLAGS NDESCBIT OPENBIT CONTBIT)
	(CAPACITY 100)
	(ACTION BEAM-FUNCTION)>

<OBJECT RED-BUTTON
	(IN MR-ANTE)
	(DESC "red button")
	(SYNONYM BUTTON)
	(ADJECTIVE RED)
	(FLAGS NDESCBIT)
	(ACTION MRSWITCH)>

<OBJECT RED-PANEL
	(IN IN-MIRROR)
	(DESC "red panel")
	(SYNONYM PANEL WALL)
	(ADJECTIVE RED)
	(FLAGS NDESCBIT)
	(ACTION MPANELS)>

<OBJECT SHORT-POLE
	(IN IN-MIRROR)
	(DESC "short pole")
	(SYNONYM POLE POST HANDGRIP GRIP)
	(ADJECTIVE SHORT SMALL HAND)
	(FLAGS NDESCBIT)
	(ACTION SHORT-POLE-F)>

<OBJECT SUNDIAL
	(IN PARAPET)
	(DESC "sundial")
	(SYNONYM DIAL INDICATOR ARROW SUNDIAL)
	(ADJECTIVE INDICATOR SUN)
	(FLAGS NDESCBIT TURNBIT)
	(ACTION DIAL)>

<OBJECT YELLOW-PANEL
	(IN IN-MIRROR)
	(DESC "yellow panel")
	(SYNONYM PANEL WALL)
	(ADJECTIVE YELLOW)
	(FLAGS NDESCBIT)
	(ACTION MPANELS)>

<OBJECT WHITE-PANEL
	(IN IN-MIRROR)
	(DESC "white panel")
	(SYNONYM PANEL WALL)
	(ADJECTIVE WHITE)
	(FLAGS NDESCBIT)
	(ACTION MPANELS)>

<OBJECT WOODEN-BAR
	(IN IN-MIRROR)
	(DESC "wooden bar")
	(SYNONYM BAR)
	(ADJECTIVE WOOD WOODEN)
	(FLAGS NDESCBIT)>

<OBJECT DUNGEON-PANEL
	(IN LOCAL-GLOBALS)
	(DESC "panel")
	(SYNONYM PANEL)
	(FLAGS NDESCBIT)
	(ACTION DUNGEON-PANEL-F)>

<OBJECT DUNGEON-DOOR
	(IN LOCAL-GLOBALS)
	(DESC "wooden door")
	(SYNONYM DOOR)
	(ADJECTIVE WOOD WOODEN)
	(FLAGS NDESCBIT DOORBIT CONTBIT)
	(ACTION DUNGEON-DOOR-F)>

<OBJECT SECRET-DOOR
	(IN LOCAL-GLOBALS)
	(DESC "secret door")
	(SYNONYM DOOR)
	(ADJECTIVE SECRET)
	(FLAGS DOORBIT CONTBIT INVISIBLE)
	(ACTION SECRET-DOOR-F)>

<OBJECT OLD-MAN
	(DESC "old man")
	(SYNONYM MAN)
	(ADJECTIVE OLD)
	(FLAGS ACTORBIT)
	(ACTION OLD-MAN-F)
	(DESCFCN OLD-MAN-F)>

<OBJECT CP-HOLE
	(IN CP-ANTE)
	(DESC "hole")
	(SYNONYM HOLE)
	(ADJECTIVE ROUND)
	(FLAGS NDESCBIT)
	(ACTION CP-HOLE-F)>

<ROUTINE GO () 
	 ;"put interrupts on clock chain"
	 <QUEUE I-LANTERN 200>
;"clean up junk compiler can't do"
	 <SETG CURRENT-LAMP ,LAMP>
	 <PUT ,CPOBJS <* 8 21> 1>
	 <PUT ,CPOBJS <+ <* 8 21> 1> ,LORE-BOOK>
	 <PUT ,CPOBJS <* 8 32> 1>
	 <PUT ,CPOBJS <+ <* 8 32> 1> ,CP-SLOT>
 ;"set up and go"
	 <SETG LIT T>
	 <SETG WINNER ,ADVENTURER>
	 <SETG PLAYER ,WINNER>
	 <SETG MLOC ,MRB>
	 <SETG HERE ,ZORK2-STAIR>
	 <MOVE ,WINNER ,HERE>
	 ;<ENABLE <QUEUE I-CLEFT <+ 70 <RANDOM 70>>>>
	 <ENABLE <QUEUE I-VIEW-CHANGE 4>>
	 <SETG P-IT-OBJECT <>>
	 <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>
		<TELL
"As in a dream, you see yourself tumbling down a great, dark staircase.
All about you are shadowy images of struggles against fierce opponents
and diabolical traps. These give way to another round of images: of
imposing stone figures, a cool, clear lake, and, now, of an old, yet
oddly youthful man. He turns toward you slowly, his long, silver hair
dancing about him in a fresh breeze. \"You have reached the final test,
my friend! You are proved clever and powerful, but this is not yet
enough! Seek me when you feel yourself worthy!\" The dream dissolves
around you as his last words echo through the void...." CR>
		<CRLF>
		<V-VERSION>
		<CRLF>)>
	 <MOVE ,WINNER ,HERE>
	 <MOVE ,LAMP ,HERE>
	 <V-LOOK>
	 <MAIN-LOOP>
	 <AGAIN>>

<GLOBAL CLEFT-QUEUED? <>>
```
