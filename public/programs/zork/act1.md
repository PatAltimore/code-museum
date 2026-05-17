---
title: "act1.38"
program: "Zork"
program_slug: "zork"
file_path: "zork/lcf/act1.38"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/lcf/act1.38"
year: 1977
author: "Anderson, Blank, Daniels, Lebling"
slug: "act1"
order: 4
description: "This file defines key interactive elements and room descriptions for Zork, showcasing the ingenuity of early text-based adventure game design."

summary:
  - point: "MDL's Lisp-like syntax enabled complex game logic"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL Programming Language"
  - point: "Zork's modular design allowed for rapid iteration"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Interactive storytelling through dynamic room descriptions"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive Fiction"

enhancements:
  - id: "define-blo-read-table-setup"
    line_start: 3
    line_end: 10
    title: "Setting up the read table for parsing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parsing"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Zork-map.jpg/330px-Zork-map.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Zork map (CC BY 4.0)"
    content: "The `BLO` function appears to initialize a read table for parsing input, a critical step in enabling the game's text-based interaction. This setup involves defining ASCII character types and configuring evaluation types, ensuring the game can interpret player commands effectively. In the late 1970s, text parsing was a cornerstone of interactive fiction, as graphical interfaces were not yet mainstream. The authors, working on the DEC PDP-10 under the ITS system, were pushing the boundaries of what text-based computing could achieve. This foundational work in parsing laid the groundwork for the rich, interactive storytelling that Zork pioneered. The techniques used here influenced future text-based games and even modern command-line interfaces."
  - id: "define-ilo-body-parsing"
    line_start: 13
    line_end: 21
    title: "Parsing and evaluating game actions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The `ILO` function handles parsing and evaluating specific game actions based on the player's input. It checks conditions such as membership in predefined lists and evaluates the body of the action accordingly. In the late 1970s, this kind of dynamic evaluation was groundbreaking, allowing for nuanced player interactions in text-based games. The authors, all MIT graduates, were leveraging their expertise in artificial intelligence and programming languages to create a system that felt responsive and immersive. This approach to parsing and conditional evaluation became a hallmark of interactive fiction, influencing countless games that followed."
  - id: "define-east-house-room-description"
    line_start: 25
    line_end: 33
    title: "Dynamic room descriptions behind the white house"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `EAST-HOUSE` function provides a dynamic description of the area behind the white house, including the state of the kitchen window. This kind of detailed environmental storytelling was a key innovation of Zork, allowing players to visualize and interact with the game world in a meaningful way. In 1977, games were typically limited to simple text prompts or static screens, but Zork's use of dynamic descriptions set a new standard for immersion. The authors drew on their backgrounds in computer science and storytelling to create a game that felt alive, paving the way for the genre of interactive fiction."
  - id: "define-window-function-interaction"
    line_start: 39
    line_end: 44
    title: "Opening and closing the kitchen window"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The `WINDOW-FUNCTION` allows players to interact with the kitchen window, providing feedback based on their actions. The function uses auxiliary variables to determine the state of the window and outputs descriptive text for the player. This kind of interaction was a hallmark of Zork, where seemingly mundane objects could become key elements in the game's puzzles. In the late 1970s, this level of interactivity was rare, and Zork's ability to make the environment feel responsive was a major factor in its success. The game's authors were pioneering a new way of storytelling, blending narrative and gameplay in a way that would inspire future game designers."
  - id: "define-leaf-pile-environmental-interaction"
    line_start: 77
    line_end: 91
    title: "Burning or moving the leaf pile"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `LEAF-PILE` function allows players to interact with a pile of leaves, either by burning or moving them. The function includes dynamic responses based on the player's actions, such as neighbors complaining about the smoke or intervening if the player carries burning leaves. This kind of environmental interaction was revolutionary in 1977, showcasing Zork's ability to create a living, reactive world. The authors were drawing on their expertise in artificial intelligence to simulate cause-and-effect relationships, making the game feel more immersive. These techniques became foundational for interactive fiction and influenced later adventure games."
  - id: "define-glacier-room-description"
    line_start: 101
    line_end: 107
    title: "A room transformed by player actions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The `GLACIER-ROOM` function provides a description of a room with giant icicles, dynamically changing based on the state of the `GLACIER-FLAG!-FLAG`. This showcases Zork's ability to alter the environment based on player actions, a feature that was groundbreaking in the late 1970s. The authors were experimenting with ways to make the game world feel dynamic and responsive, a stark contrast to the static environments of earlier text-based games. This approach to environmental storytelling has influenced countless games, from text adventures to modern open-world RPGs."
  - id: "define-glacier-destruction"
    line_start: 116
    line_end: 135
    title: "Destroying the glacier with a torch"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `GLACIER` function allows players to destroy a glacier using a torch, triggering a series of dynamic changes in the game world. This includes altering room descriptions, removing objects, and creating new pathways. In 1977, this kind of environmental transformation was a major innovation, showcasing Zork's ability to create a reactive and immersive game world. The authors were leveraging the power of MDL to simulate complex cause-and-effect relationships, pushing the boundaries of what text-based games could achieve. This technique influenced later games, demonstrating the potential of interactive storytelling."
  - id: "define-living-room-description"
    line_start: 178
    line_end: 200
    title: "Entering the dungeon from the living room"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `LIVING-ROOM` function provides a detailed description of the living room, including dynamic elements like a trap door and gothic lettering on a wooden door. This room serves as a gateway to the game's dungeon, a pivotal moment in the player's journey. In 1977, creating such richly detailed environments was a significant challenge, requiring careful planning and programming. The authors were drawing on their backgrounds in storytelling and computer science to create a world that felt alive and immersive. This room exemplifies Zork's ability to blend narrative and gameplay, a technique that influenced the design of countless adventure games."

---

; excerpt — first 200 lines of zork/lcf/act1.38

"VOCABULARY, ACTION FUNCTIONS, MAZE (NORMALLY ENCODED)"

<DEFINE BLO (Y)
	<COND (<TYPE? ,REP SUBR FSUBR>
	       <SET READ-TABLE <PUT <IVECTOR 256 0> <CHTYPE <ASCII !\<> FIX> !\>>
	       <EVALTYPE FORM SEGMENT>
	       <APPLYTYPE SUBR FIX>
	       <PUT <ALLTYPES> 6 <7 <ALLTYPES>>>
	       <SUBSTITUTE 2 1>
	       <OFF .BH>)>>

<GDECL (FF) STRING>
<DEFINE ILO (BODY TYPE NM1 NM2 "OPTIONAL" M1 M2)
	#DECL ((BODY NM1 NM2 M1 M2) STRING (TYPE) FIX)
	<COND (<==? .TYPE *400000000000*>
	       <COND (<OR <AND <MEMBER "<FLUSH-ME>" .BODY>
			       <NOT <MEMBER ,XUNM ,WINNERS>>>
			  <AND <MEMBER .NM1 ,WINNERS>
			       <MEMBER ,FF .BODY>>>
		      <EVAL <PARSE .BODY>>)>)>
	<DISMISS T>>

;"ROOM FUNCTIONS"

<DEFINE EAST-HOUSE ("AUX" (WIN ,WINNER) (PRSVEC ,PRSVEC)
		    	  (PRSACT <1 .PRSVEC>))
    #DECL ((PRSVEC) VECTOR (WIN) ADV (PRSACT) VERB)
    <COND (<==? .PRSACT ,LOOK!-WORDS>
	   <TELL 
"You are behind the white house.  In one corner of the house there
is a small window which is " 1 <COND (,KITCHEN-WINDOW!-FLAG
		  		      "open.")
		 		     ("slightly ajar.")>>)>>
	   
; "HACK THE KITCHEN WINDOW"

<SETG GRUNLOCK!-FLAG <>>

<DEFINE WINDOW-FUNCTION ("AUX" (PRSACT <1 ,PRSVEC>))
    #DECL ((PRSACT) VERB)
    <OPEN-CLOSE .PRSACT
		KITCHEN-WINDOW!-FLAG
"With great effort, you open the window far enough to allow entry."
"The window closes (more easily than it opened).">>

<DEFINE OPEN-CLOSE (VERB ATM STROPN STRCLS)
    #DECL ((VERB) VERB (ATM) ATOM (STROPN STRCLS) STRING)
    <COND (<==? .VERB ,OPEN!-WORDS>
	   <COND (,.ATM
		  <TELL <PICK-ONE ,DUMMY>>)
		 (<TELL .STROPN>
		  <SETG .ATM T>)>)
	  (<==? .VERB ,CLOSE!-WORDS>
	   <COND (,.ATM
		  <TELL .STRCLS>
		  <SETG .ATM <>>
		  T)
		 (<TELL <PICK-ONE ,DUMMY>>)>)>>

; "KITCHEN -- CHECK THE WINDOW"

<DEFINE KITCHEN ("AUX" (WIN ,WINNER) (PRSVEC ,PRSVEC)
		    	  (PRSACT <1 .PRSVEC>))
    #DECL ((PRSVEC) VECTOR (WIN) ADV (PRSACT) VERB)
    <COND (<==? .PRSACT ,LOOK!-WORDS>
	   <TELL

"You are in the kitchen of the white house.  A table seems to have
been used recently for the preparation of food.  A passage leads to
the west and a dark staircase can be seen leading upward.  To the
east is a small window which is " 0>
	   <COND (,KITCHEN-WINDOW!-FLAG
		  <TELL "open." 1>)
		 (<TELL "slightly ajar." 1>)>)
	  (T)>>

<DEFINE LEAF-PILE ("AUX" (PV ,PRSVEC) (L <2 .PV>))
	#DECL ((PV) <VECTOR [3 ANY]> (L) OBJECT)
	<COND (<==? <1 .PV> ,BURN!-WORDS>
	       <PUT .L ,ORAND 1>
	       <COND (<OROOM .L>
		      <TELL "The leaves burn and the neighbors start to complain.">
		      <REMOVE-OBJECT .L>)
		     (T
		      <DROP-OBJECT .L>
		      <JIGS-UP
"The sight of someone carrying a pile of burning leaves so offends
the neighbors that they come over and put you out.">)>)
	      (<==? <1 .PV> ,MOVE!-WORDS>
	       <PUT .L ,ORAND 1>
	       <TELL "Done.">)>>

<PSETG RESDESC
"However, with the water level lowered, there is merely a wide stream
running through the center of the room.">

<PSETG GLADESC
"You are in a large room, with giant icicles hanging from the walls
and ceiling.  There are passages to the north and east.">

<DEFINE GLACIER-ROOM ("AUX" (PRSACT <1 ,PRSVEC>))
    #DECL ((PRSACT) VERB)
    <COND (<==? .PRSACT ,LOOK!-WORDS>
	   <COND (,GLACIER-FLAG!-FLAG
		  <TELL ,GLADESC>
		  <TELL "There is a large passageway leading westward." 1>)
		 (<TELL ,GLADESC>)>)>>

<DEFINE TROPHY-CASE ("AUX" (PRSACT <1 ,PRSVEC>))
    #DECL #DECL ((PRSACT) VERB)
    <COND (<==? .PRSACT ,TAKE!-WORDS>
	   <TELL
"The trophy case is securely fastened to the wall (perhaps to foil any
attempt by robbers to remove it).">)>>
	  
<DEFINE GLACIER ("AUX" (PRSVEC ,PRSVEC) (PRSACT <1 .PRSVEC>) T)
    #DECL ((PRSVEC) <VECTOR VERB [2 ANY]> (PRSACT) VERB (T) OBJECT)
    <COND (<==? <VNAME .PRSACT> THROW!-WORDS>
	   <COND (<==? <2 .PRSVEC> <SET T <FIND-OBJ "TORCH">>>
		  <TELL 
"The torch hits the glacier and explodes into a great ball of flame,
devouring the glacier.  The water from the melting glacier rushes
downstream, carrying the torch with it.  In the place of the glacier,
there is a passageway leading west.">
		  <REMOVE-OBJECT <FIND-OBJ "ICE">>
		  <REMOVE-OBJECT .T>
		  <INSERT-OBJECT .T <FIND-ROOM "STREA">>
		  <PUT .T ,ODESC2 "burned out ivory torch">
		  <PUT .T ,ODESC1 "There is a burned out ivory torch here.">
		  <PUT .T ,OLIGHT? 0>
		  <TRZ .T ,FLAMEBIT>
		  <OR <LIT? ,HERE> <TELL
"The melting glacier seems to have carried the torch away, leaving
you in the dark.">>
		  <SETG GLACIER-FLAG!-FLAG T>)
		 (<TELL
"The glacier is unmoved by your ridiculous attempt.">
		  <>)>)
	  (<==? <VNAME .PRSACT> MELT!-WORDS>
	   <TELL
"How exactly are you going to melt this glacier?">)>>

<PSETG YUKS
      '["Nice try."
	"You can't be serious."
	"Chomp, Chomp."
	"Not a prayer."
	"I don't think so."]>

<DEFINE RESERVOIR-SOUTH ("AUX" (PRSACT <1 ,PRSVEC>)) 
	#DECL ((PRSACT) VERB)
	<COND (<==? .PRSACT ,LOOK!-WORDS>
	       <COND (,LOW-TIDE!-FLAG
		      <TELL 
"You are in the south end of a large cavernous room which was formerly
a reservoir."
>
		      <TELL ,RESDESC 1>)
		     (<TELL "You are at the south end of a large reservoir.">)>
	       <TELL 
"There is a western exit, a passageway south, and a steep pathway
climbing up along the edge of a cliff." 1>)>>

<DEFINE RESERVOIR-NORTH ("AUX" (PRSACT <1 ,PRSVEC>)) 
	#DECL ((PRSACT) VERB)
	<COND (<==? .PRSACT ,LOOK!-WORDS>
	       <COND (,LOW-TIDE!-FLAG
		      <TELL 
"You are in the north end of a large cavernous room which was formerly
a reservoir."
>
		      <TELL ,RESDESC 1>)
		     (<TELL "You are at the north end of a large reservoir.">)>
	       <TELL "There is a tunnel leaving the room to the north." 1>)>>

;"LIVING-ROOM -- FUNCTION TO ENTER THE DUNGEON FROM THE HOUSE"

<DEFINE LIVING-ROOM ("AUX" (WIN ,WINNER) (PRSVEC ,PRSVEC) RUG?
			   (PRSACT <1 .PRSVEC>) TC)
	#DECL ((PRSVEC) VECTOR (WIN) ADV (RUG?) <OR ATOM FALSE>
	       (PRSACT) VERB (TC) OBJECT)
	<COND (<==? .PRSACT ,LOOK!-WORDS>
	       <COND (,MAGIC-FLAG!-FLAG
		      <TELL 
"You are in the living room.  There is a door to the east.  To the
west is a cyclops-shaped hole in an old wooden door, above which is
some strange gothic lettering " 0>)
		     (<TELL 
"You are in the living room.  There is a door to the east, a wooden
door with strange gothic lettering to the west, which appears to be
nailed shut, " 0>)>
	       <SET RUG? <ORAND <FIND-OBJ "RUG">>>
	       <COND (<AND .RUG? ,TRAP-DOOR!-FLAG>
		      <TELL 
"and a rug lying beside an open trap-door." 1>)
		     (.RUG?
		      <TELL 
"and a closed trap-door at your feet." 1>)
		     (,TRAP-DOOR!-FLAG
		      <TELL "and an open trap-door at your feet." 1>)