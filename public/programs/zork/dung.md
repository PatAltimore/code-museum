---
title: "dung.56"
program: "Zork"
program_slug: "zork"
file_path: "zork/dung.56"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/dung.56"
year: 1979
author: "Tim Anderson, Marc Blank, Bruce Daniels, Dave Lebling"
slug: "dung"
order: 3
description: "The world itself — every room, every object, every exit. The first 200 lines of 91KB that defined interactive fiction."

summary:
  - point: "MGVALS is the game's entire persistent state — 39 boolean flags for every puzzle and mechanic"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "CEVENT entries are the dungeon's hidden clock — timed events that fire after N player moves"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive fiction"
  - point: "The WHOUS room definition, lines 158-165, is the exact source of 'West of House' — the game's opening screen"
    link: "https://en.wikipedia.org/wiki/Zork#Gameplay"
    link_label: "Zork gameplay"

enhancements:
  - id: "mgvals"
    line_start: 13
    line_end: 53
    title: "MGVALS: The Game's Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_state"
    image_url: ""
    image_caption: ""
    content: "MGVALS is a vector of 39 atom names — the complete list of boolean game-state flags that track every puzzle, mode, and condition in Zork. Each atom is initialized to false and can be set to T (true) by game code. KITCHEN-WINDOW!-FLAG records whether the kitchen window is open. TROLL-FLAG tracks the troll's state. TRAP-DOOR!-FLAG records whether the living room trap door is open. RAINBOW!-FLAG gates the rainbow bridge puzzle. CAROUSEL-FLIP and CAROUSEL-ZOOM track the spinning room. MOVES and RAW-SCORE are integers, not booleans, embedded in the same vector. The `!` suffix on most names is MDL's way of separating package namespaces — the flag atom lives in its own oblist to avoid collisions. Together these 39 flags represent the entire mutable state of the game world. Save and restore means serializing this vector."

  - id: "cevent"
    line_start: 95
    line_end: 137
    title: "CEVENT: Zork's Hidden Clock"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_clock"
    image_url: ""
    image_caption: ""
    content: "Zork's world is not static between player commands. The CEVENT (clock-event) system schedules functions to fire after a set number of player moves. Each CEVENT declaration names a function, a tick count (initially 0, set later), a flag (whether active), and a string ID. The lantern runs down via the LNTIN event. The candles burn via CNDIN. The troll wanders via a demon. Matches go out via MATIN. The fuse on the bomb counts down via FUSIN. The ledge collapses via LEDIN. Each of these is a timer, and the dungeon master is running all of them simultaneously. The player experiences the dungeon as a spatial puzzle, but internally it is a priority queue of scheduled events firing against a global move counter. This architecture — separate from the command loop — is what made Zork feel alive."

  - id: "whous"
    line_start: 158
    line_end: 165
    title: "WHOUS: West of House"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork#Gameplay"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Zork_-_video_game.jpg/440px-Zork_-_video_game.jpg"
    image_caption: "Zork running on a PDP-10 terminal. The opening screen begins 'West of House.' This is the source. Public domain."
    content: "The most famous room in interactive fiction history is defined in eight lines of MDL. Room ID WHOUS, long description 'You are in an open field west of a big white house, with a boarded front door.', short description 'West of House', visited flag T (you start here so you've already seen it). The exit list is compact: NORTH goes to NHOUS, SOUTH to SHOUS, WEST to FORE1 (the forest), and EAST is a #NEXIT — an unusable exit with the message 'The door is locked, and there is evidently no key.' That locked door, blocking the obvious path, is the game's first puzzle. The two objects in the room — FDOOR (the front door) and MAILB (the mailbox) — are listed inline. Every room in the dungeon follows this exact structure, defined as a #ROOM reader macro that constructs a typed ROOM vector at load time."

  - id: "nexit-cexit"
    line_start: 148
    line_end: 200
    title: "#NEXIT and #CEXIT: Puzzle Gates in Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Adventure_game#Puzzle_design"
    image_url: ""
    image_caption: ""
    content: "Two special exit types let the world data encode puzzles directly, without writing handler code. #NEXIT takes a string — a message to display when the player tries this direction, like 'The door is locked' or 'The windows are all barred.' It is a dead end with an explanation baked into the map. #CEXIT takes a flag atom and a destination room. The exit is passable only if the named flag is true. KITCHEN-WINDOW in EHOUS (Behind House) is a CEXIT guarded by KITCHEN-WINDOW!-FLAG — it only opens after the player has opened the window. This means the puzzle state lives in the world data, not in a separate action handler. The COND-OPEN and COND-CLOSE macros in defs.63 simply flip the CXFLAG atom that the exit checks. The entire kitchen-window puzzle is a few lines of data and two macro calls."

---
"VOCABULARY"

;"GLOBAL VARIABLES WHICH ARE ROOMS MUST BE HERE!"

<PSETG RMGVALS '![BLOC HERE!]>

;"GLOBAL VARIABLES WHICH ARE OBJECTS MUST BE HERE!"

<PSETG OBJGVALS '![!]>

;"GLOBAL VARIABLES WHICH ARE MONADS MUST BE HERE!"

<PSETG MGVALS
      '![KITCHEN-WINDOW!-FLAG
	 TROLL-FLAG!-FLAG
	 CAGE-SOLVE!-FLAG
	 KEY-FLAG!-FLAG
	 BUCKET-TOP!-FLAG
	 CAROUSEL-FLIP!-FLAG
	 CAROUSEL-ZOOM!-FLAG
	 LOW-TIDE!-FLAG
	 DOME-FLAG!-FLAG
	 GLACIER-FLAG!-FLAG
	 ECHO-FLAG!-FLAG
	 RIDDLE-FLAG!-FLAG
	 LLD-FLAG!-FLAG
	 CYCLOPS-FLAG!-FLAG
	 MAGIC-FLAG!-FLAG
	 TRAP-DOOR!-FLAG
	 LIGHT-LOAD!-FLAG
	 SAFE-FLAG!-FLAG
	 GNOME-FLAG!-FLAG
	 GNOME-DOOR!-FLAG
	 MIRROR-MUNG!-FLAG
	 EGYPT-FLAG!-FLAG
	 ON-POLE!-FLAG
	 BLAB!-FLAG
	 BINF!-FLAG
	 BTIE!-FLAG
	 BUOY-FLAG!-FLAG
	 GRUNLOCK!-FLAG
	 GATE-FLAG!-FLAG
	 RAINBOW!-FLAG
	 CAGE-TOP!-FLAG
	 EMPTY-HANDED!-FLAG
	 DEFLATE!-FLAG
	 LIGHT-SHAFT
	 PLAYED-TIME
	 MOVES
	 BRIEF!-FLAG
	 THEN
	 SUPER-BRIEF!-FLAG
	 RAW-SCORE!]>

<PSETG CNTUSE "You can't use that!">

<SETG BIGFIX </ <CHTYPE <MIN> FIX> 2>>

<SETG WORDS <OR <GET WORDS OBLIST> <MOBLIST WORDS 23>>>

<SETG OBJECT-OBL <OR <GET OBJECTS OBLIST> <MOBLIST OBJECTS>>>

<SETG ROOM-OBL <OR <GET ROOMS OBLIST> <MOBLIST ROOMS>>>

<SETG ACTORS ()>

<SETG STARS ()>

<ADD-BUZZ "BY" "IS" "ONE" "IT" "A" "THE" "AN" "THIS" "OVER">

<ADD-DIRECTIONS "#!#!#" "NORTH" "SOUTH" "EAST" "WEST" "LAUNC" "LAND"
	"SE" "SW" "NE" "NW" "UP" "DOWN" "ENTER" "EXIT" "CROSS" "CLIMB">

<DSYNONYM "NORTH" "N">
<DSYNONYM "SOUTH" "S">
<DSYNONYM "EAST" "E">
<DSYNONYM "WEST" "W">
<DSYNONYM "UP" "U">
<DSYNONYM "DOWN" "D">
<DSYNONYM "ENTER" "IN">
<DSYNONYM "EXIT" "OUT" "LEAVE">
<DSYNONYM "CROSS" "TRAVE">

<ADD-ZORK PREP "WITH" "AT" "TO" "IN" "DOWN" "UP" "UNDER">

<SYNONYM "WITH" "USING" "THROU">

<SYNONYM "IN" "INSID" "INTO">

<SETG ROOMS ()>

<SETG OBJECTS ()>


"CEVENT DEFINITIONS"
<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,CURE-CLOCK <> "CURIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,MAINT-ROOM T "MNTIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,LANTERN T "LNTIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,MATCH-FUNCTION T MATIN>>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,CANDLES T "CNDIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,BALLOON T "BINT">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,BURNUP T "BRNIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,FUSE-FUNCTION T "FUSIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,LEDGE-MUNG T "LEDIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,SAFE-MUNG T "SAFIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,VOLGNOME T "VLGIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,GNOME-FUNCTION T "GNOIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,BUCKET T "BCKIN">>

<OR <LOOKUP "COMPILE" <ROOT>>
    <CEVENT 0 ,SPHERE-FUNCTION T "SPHIN">>


; "KLUDGE"

#OBJECT {"#####"
	 "You are here" "cretin" %<> %<> () %<> %,OVISON} 

"MAZE"

<PSETG FOREST "Forest">

<PSETG CURRENT #NEXIT "You cannot go upstream due to strong currents.">

#ROOM {"PASS1"
"You are in a narrow east-west passageway.  There is a narrow stairway
leading down at the north end of the room."
       "East-West Passage"
       %<>
       #EXIT {"EAST" "CAROU" "WEST" "MTROL" "DOWN" "RAVI1" "NORTH" "RAVI1"} 
       () %<> 5}

#ROOM {"WHOUS"
"You are in an open field west of a big white house, with a boarded
front door."
       "West of House"
       T
       #EXIT {"NORTH" "NHOUS" "SOUTH" "SHOUS" "WEST" "FORE1"
	      "EAST" #NEXIT "The door is locked, and there is evidently no key."}
       (#FIND-OBJ {"FDOOR"} #FIND-OBJ {"MAILB"})}

#ROOM {"NHOUS"
       "You are facing the north side of a white house.  There is no door here,
and all the windows are barred."
       "North of House"
       T
       #EXIT {"WEST" "WHOUS" "EAST" "EHOUS" "NORTH" "FORE3"
	      "SOUTH" #NEXIT "The windows are all barred."}}

#ROOM {"SHOUS"
"You are facing the south side of a white house. There is no door here,
and all the windows are barred."
       "South of House"
       T
       #EXIT {"WEST" "WHOUS" "EAST" "EHOUS" "SOUTH" "FORE2"
	      "NORTH" #NEXIT "The windows are all barred."}
       ()}

#ROOM {"EHOUS"
       ""
       "Behind House"
       T
       #EXIT {"NORTH" "NHOUS" "SOUTH" "SHOUS" "EAST" "CLEAR"
	      "WEST" #CEXIT {"KITCHEN-WINDOW" "KITCH"}
	      "ENTER" #CEXIT {"KITCHEN-WINDOW" "KITCH"}}
       (#FIND-OBJ {"WIND1"})
       EAST-HOUSE}

#ROOM {"KITCH"
       ""
       "Kitchen"
       T
       #EXIT {"EAST" #CEXIT {"KITCHEN-WINDOW" "EHOUS"} "WEST" "LROOM"
	      "EXIT" #CEXIT {"KITCHEN-WINDOW" "EHOUS"} "UP" "ATTIC"
	      "DOWN" #NEXIT "Only Santa Claus climbs down chimneys."}}
