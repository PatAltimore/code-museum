---
title: "act1.38"
program: "Zork"
program_slug: "zork"
file_path: "zork/lcf/act1.38"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/lcf/act1.38"
year: 1978
author: "Tim Anderson, Marc Blank, Dave Lebling"
slug: "act1"
order: 4
description: "The game loop, action handlers, and save system — including a real access-control guard that blocked too many simultaneous players"

summary:
  - point: "The file opens with ILO/BLO — the multi-user decryption and access guard for shared ITS play"
    link: "https://en.wikipedia.org/wiki/Incompatible_Timesharing_System"
    link_label: "ITS (Incompatible Timesharing System)"
  - point: "Room functions like EAST-HOUSE, KITCHEN, and LIVING-ROOM are the complete text adventure engine"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive fiction"
  - point: "The sarcasm is embedded directly in source: YUKS is a vector of dismissive one-liners the dungeon cycles through"
    link: "https://en.wikipedia.org/wiki/Zork#Gameplay"
    link_label: "Zork gameplay"

enhancements:
  - id: "blo-ilo"
    line_start: 2
    line_end: 21
    title: "BLO and ILO: The Multi-User Access Guard"
    wikipedia_url: "https://en.wikipedia.org/wiki/Incompatible_Timesharing_System"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pdp10_panel.jpg/440px-Pdp10_panel.jpg"
    image_caption: "A DEC PDP-10 front panel. Zork ran on machines like this at MIT. Multiple users shared the same hardware simultaneously. Public domain."
    content: "The file opens with two intertwined functions that implement the multi-user decryption and access control system for the ITS (Incompatible Timesharing System) environment. BLO manipulates the MDL read table and type system to decode encrypted sections of the game — the maze and certain puzzles were stored encoded to prevent casual spoiling by people reading the source. ILO is the interrupt handler called as each encrypted block is loaded: it checks whether the string '<FLUSH-ME>' is present in the body and whether the current user (XUNM) is in the WINNERS list. The WINNERS list was the real access control mechanism: only users on the list could load and play the full game. When the PDP-10 was under heavy load, new players were denied entry to reduce system impact. This was not a joke — it was functional access control embedded in the game loader, enforcing a cap on simultaneous players."

  - id: "room-functions"
    line_start: 25
    line_end: 75
    title: "Room Functions: The Action Layer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "Each room with special behavior has a corresponding function that is invoked by the RACTION field in its ROOM structure. EAST-HOUSE fires when the player looks around, printing a conditional description of the window — open or 'slightly ajar' — depending on KITCHEN-WINDOW!-FLAG. KITCHEN does the same for the kitchen view. These functions follow a strict pattern: check the PRSVEC (parse vector) for the current verb, and handle only the actions that require special behavior; everything else returns false and falls through to the default room description code. The OPEN-CLOSE utility function, used by WINDOW-FUNCTION, abstracts the repeated pattern of toggling a boolean flag with an appropriate message in each direction. This is the entire text-adventure engine: a type dispatch table, a COND on the current verb, and a TELL to print text."

  - id: "yuks"
    line_start: 143
    line_end: 148
    title: "The YUKS Vector: Programmatic Sarcasm"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork#Gameplay"
    image_url: ""
    image_caption: ""
    content: "YUKS is a literal vector of five dismissive responses that the game cycles through when the player attempts something impossible or pointless. 'Nice try.' 'You can't be serious.' 'Chomp, Chomp.' 'Not a prayer.' 'I don't think so.' These are selected by PICK-ONE, a macro that picks a random element from any vector using the MDL RANDOM function. The same pattern appears throughout act1 — DUMMY holds the generic 'already done that' responses, YUKS holds the mockery. The authors were deliberately giving the game a personality: not the neutral acknowledgment of most software, but an opinionated narrator who found the player's attempts amusing. This decision — to give the dungeon a voice — is what made Zork's writing memorable and influenced every text adventure that followed."

  - id: "glacier-puzzle"
    line_start: 116
    line_end: 141
    title: "The Glacier Puzzle: Object State in Actions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork#Gameplay"
    image_url: ""
    image_caption: ""
    content: "The GLACIER function shows how Zork's action handlers modify world state directly. When the player throws the torch at the glacier, the handler removes the ice object from the room, moves the torch to the stream room downstream, updates the torch's description strings from 'ivory torch' to 'burned out ivory torch', zeros its OLIGHT? field, clears its FLAMEBIT, sets GLACIER-FLAG!-FLAG to T (which unlocks the westward passage via a CEXIT in the rooms data), and checks whether the room is now dark. If the player is in the dark after the glacier melts, it prints an additional message. Seven separate world-state mutations from a single player action, all expressed as direct slot assignments on MDL objects. The puzzle design and the implementation are the same thing."

---
"VOCABULARY, ACTION FUNCTIONS, MAZE (NORMALLY ENCODED)"

<DEFINE BLO (Y)
	<COND (<TYPE? ,REP SUBR FSUBR>
	       <SET READ-TABLE <PUT <IVECTOR 256 0> <CHTYPE <ASCII !\<> FIX> !\>>
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
