---
title: "dung.56"
program: "Zork"
program_slug: "zork"
file_path: "zork/dung.56"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/dung.56"
year: 1977
author: "Anderson, Blank, Daniels, Lebling"
slug: "dung"
order: 3
description: "This file defines key vocabulary, global variables, and room structures for Zork, one of the earliest text-based adventure games."

summary:
  - point: "MDL's Lisp-like syntax allowed complex data structures for game state management."
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL Programming Language"
  - point: "Zork's room definitions demonstrate early procedural generation techniques."
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Global flags tracked dynamic game states, enabling intricate puzzles and interactions."
    link: "https://en.wikipedia.org/wiki/Text-based_game"
    link_label: "Text-Based Games"
  - point: "Vocabulary parsing was critical for Zork's natural language interface."
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive Fiction"
  - point: "Room definitions showcase early attempts at spatial representation in games."
    link: "https://en.wikipedia.org/wiki/Adventure_game"
    link_label: "Adventure Games"

enhancements:
  - id: "global-flags-for-dynamic-game-state"
    line_start: 13
    line_end: 53
    title: "Global Flags for Dynamic Game State"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Zork-map.jpg/330px-Zork-map.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Zork map (CC BY 4.0)"
    content: "This section defines global flags, each representing a dynamic state in the game world. Flags like `TROLL-FLAG!-FLAG` and `CAGE-SOLVE!-FLAG` track whether specific puzzles or events have been triggered. In the late 1970s, game developers were exploring ways to create immersive, interactive worlds. The DEC PDP-10, with its limited memory and processing power, demanded efficient state management. These flags allowed Zork to simulate a living world where player actions had lasting consequences. The authors—Anderson, Blank, Daniels, and Lebling—were MIT graduates inspired by earlier text adventures like Colossal Cave Adventure. Their work on Zork pushed the boundaries of what interactive fiction could achieve, laying the groundwork for modern game design. Today, similar state-tracking mechanisms are ubiquitous in games, from RPGs to open-world adventures."
  - id: "vocabulary-parsing-and-synonyms"
    line_start: 69
    line_end: 88
    title: "Vocabulary Parsing and Synonyms"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "This block defines the game's vocabulary, including directions, prepositions, and synonyms. Commands like 'NORTH' and 'N' are linked, enabling players to use natural language to navigate and interact with Zork's world. In 1977, natural language processing was in its infancy, and Zork's approach was groundbreaking. The game's parser allowed players to type commands in plain English, a feature that distinguished it from earlier games with rigid input formats. The authors leveraged MDL's list-processing capabilities to create a flexible and extensible system. This innovation made Zork feel more intuitive and immersive, setting a standard for text-based games and influencing the development of interactive fiction for decades."
  - id: "room-definitions-and-spatial-representation"
    line_start: 152
    line_end: 194
    title: "Room Definitions and Spatial Representation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "This section defines several rooms in Zork, including 'West of House' and 'Kitchen,' along with their descriptions and connections to other rooms. Each room is represented as a structured object, with properties for exits, objects, and textual descriptions. In the late 1970s, representing a game world as interconnected spaces was a novel concept. The authors used MDL's list-based syntax to encode spatial relationships and environmental details, creating a sense of place and exploration. The DEC PDP-10's limited memory required careful optimization, so each room's data was compactly stored and dynamically referenced during gameplay. Zork's room system became a blueprint for countless adventure games, influencing titles like King's Quest and The Secret of Monkey Island."

---

; excerpt — first 200 lines of zork/dung.56

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