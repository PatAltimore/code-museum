---
title: "makstr.7"
program: "Zork"
program_slug: "zork"
file_path: "zork/lcf/makstr.7"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/lcf/makstr.7"
year: 1977
author: "Anderson, Blank, Daniels, Lebling"
slug: "makstr"
order: 8
description: "This file defines key vocabulary, objects, and actions for Zork's interactive world, showcasing the innovative use of MDL for text-based adventure games."

summary:
  - point: "Introduces vocabulary management routines for dynamic word associations"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Defines object creation and manipulation mechanisms central to gameplay"
    link: "https://en.wikipedia.org/wiki/Adventure_game"
    link_label: "Adventure game"
  - point: "Implements room and exit structures for navigating the game world"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive fiction"
  - point: "Showcases MDL's flexibility in handling complex data structures"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL (programming language)"
  - point: "Pioneered techniques later adopted in game engines and scripting languages"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game engine"

enhancements:
  - id: "cevent-event-handler-definition"
    line_start: 1
    line_end: 8
    title: "How Zork Handles Timed Events"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The CEVENT routine defines an event handler that associates a timer (TICK), application context (APP), and flags (FLG) with a named event (NAME). This mechanism allows Zork to manage timed events dynamically, such as triggering actions after a delay or checking conditions periodically. The code uses MDL's oblist (symbol table) to store and retrieve event-related data efficiently. At the time, managing timed events in games was a novel concept, as most games were either turn-based or relied on fixed sequences. The authors of Zork, leveraging the PDP-10's ITS environment, implemented this to create a more immersive and responsive experience. This approach influenced later games, including Infocom's text adventures, and laid groundwork for event-driven programming in modern game engines like Unity and Unreal."
  - id: "cons-obj-object-association"
    line_start: 10
    line_end: 17
    title: "Assigning Objects to Players Dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Adventure_game"
    image_url: ""
    image_caption: ""
    content: "The CONS-OBJ routine dynamically associates objects with players (or 'adventurers') in the game world. It iterates over a list of object names, finds their corresponding object instances, and assigns them to the current player (WINNER). This mechanism allows players to interact with objects, pick them up, and use them in puzzles. In 1977, this kind of dynamic object management was groundbreaking, as most games had static inventories or predefined interactions. The authors of Zork used MDL's tuple and mapping functions to implement this efficiently. This technique influenced inventory systems in later adventure games, including Sierra's graphical adventures and RPGs like Ultima."
  - id: "cexit-room-exit-definition"
    line_start: 19
    line_end: 27
    title: "Defining Exits for Zork's Rooms"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The CEXIT routine defines exits between rooms in Zork's world. Each exit is associated with a unique identifier (FLID), a destination room (RMID), optional descriptive text (STR), and flags or functions for special behaviors. This modular approach allowed the authors to create a richly interconnected game world with conditional navigation, such as locked doors or hidden passages. The use of oblists and vectors to store exit data reflects MDL's strengths in handling complex data structures. This design influenced the creation of room navigation systems in later text adventures and even graphical games like The Legend of Zelda."
  - id: "exit-direction-parsing"
    line_start: 29
    line_end: 48
    title: "Parsing Directions for Room Navigation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Text-based_user_interface"
    image_url: ""
    image_caption: ""
    content: "The EXIT routine parses directional commands (e.g., 'north', 'south') and maps them to room exits. It validates the input, checks for errors (e.g., illegal directions), and updates the player's navigation state. This routine showcases Zork's ability to interpret natural language input, a key innovation for interactive fiction. At the time, most games relied on rigid command syntax, but Zork's flexible parser set a new standard. The authors leveraged MDL's list and vector operations to implement this efficiently. This approach influenced natural language processing in games and contributed to the development of more sophisticated parsers in later titles like King's Quest and The Secret of Monkey Island."
  - id: "room-structure-definition"
    line_start: 50
    line_end: 69
    title: "Building Zork's World: Room Definitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The ROOM routine defines the structure of individual rooms in Zork's world. Each room has an identifier (ID), descriptions (D1, D2), lighting conditions (LIT?), exits (EX), and optional attributes like objects (OBJS) or application-specific data (APP). This modular design allowed the authors to create a richly detailed game world with dynamic interactions. The use of MDL's PUT operation to associate properties with rooms reflects the language's flexibility in handling complex data. This approach influenced the design of room systems in later text adventures and RPGs, including the use of modular world-building tools in modern game engines."
  - id: "object-creation-and-properties"
    line_start: 79
    line_end: 123
    title: "Dynamic Object Creation in Zork"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The OBJECT routine defines the creation and properties of objects in Zork's world. Each object has identifiers, descriptions, attributes (e.g., size, capacity), and flags for special behaviors (e.g., emitting light). The routine uses MDL's PUT operation to associate these properties with the object, enabling dynamic interactions like picking up, examining, or using objects. This modular approach to object creation was revolutionary in 1977, as most games had static, predefined objects. The authors of Zork leveraged MDL's flexibility to implement this efficiently. This technique influenced object systems in later adventure games and RPGs, including the inventory mechanics in The Elder Scrolls series."
  - id: "add-word-vocabulary-management"
    line_start: 165
    line_end: 169
    title: "Adding Words to Zork's Vocabulary"
    wikipedia_url: "https://en.wikipedia.org/wiki/Natural_language_processing"
    image_url: ""
    image_caption: ""
    content: "The ADD-WORD routine adds new words to Zork's vocabulary, enabling the game to recognize and respond to player input. This routine uses MDL's oblist operations to store and retrieve words efficiently. At the time, dynamic vocabulary management was a novel concept, as most games relied on fixed command lists. The authors of Zork used this technique to create a more immersive and flexible parser, allowing players to experiment with different commands. This approach influenced natural language processing in games and contributed to the development of more sophisticated parsers in later titles like Planetfall and Hitchhiker's Guide to the Galaxy."
  - id: "add-object-name-association"
    line_start: 187
    line_end: 198
    title: "Associating Names and Adjectives with Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The ADD-OBJECT routine associates names and adjectives with objects in Zork's world, enabling players to refer to objects using natural language. This routine uses MDL's MAPF and PUT operations to store these associations dynamically. At the time, this kind of flexible object referencing was groundbreaking, as most games relied on rigid identifiers. The authors of Zork used this technique to create a more immersive experience, allowing players to interact with objects using descriptive commands. This approach influenced object referencing systems in later adventure games and RPGs, including the use of dynamic naming in games like Fallout and Skyrim."

---

```lisp
<DEFINE CEVENT (TICK APP FLG NAME "AUX" (OBL <GET INITIAL OBLIST>) ATM)
	#DECL ((TICK) FIX (APP) <OR APPLICABLE OFFSET> (FLG) <OR ATOM FALSE>
	       (NAME) <OR ATOM STRING> (ATM) <OR ATOM FALSE>)
	<COND (<TYPE? .NAME STRING>
	       <COND (<SET ATM <LOOKUP .NAME .OBL>>)
		     (T <SET ATM <INSERT .NAME .OBL>>)>)
	      (<SET ATM .NAME>)>
	<SETG .ATM <CHTYPE [.TICK .APP .FLG .ATM] CEVENT>>>

<DEFINE CONS-OBJ ("TUPLE" OBJS "AUX" (WINNER ,WINNER))
  #DECL ((OBJS) <TUPLE [REST STRING]> (WINNER) ADV)
  <MAPF <>
	<FUNCTION (X "AUX" (Y <FIND-OBJ .X>))
	  #DECL ((Y) OBJECT)
	  <OR <MEMQ .Y <AOBJS .WINNER>>
	      <TAKE-OBJECT <FIND-OBJ .X> .WINNER>>>
	.OBJS>>

<DEFINE CEXIT (FLID RMID "OPTIONAL" (STR <>) (FLAG <>) (FUNCT <>) "AUX" (FVAL <>) ATM)
	#DECL ((STR) <OR FALSE STRING> (FLID RMID) <OR ATOM STRING>
	       (ATM FUNCT) <OR ATOM FALSE> (FVAL) <OR APPLICABLE FALSE>
	       (FLAG) <OR ATOM FALSE>)
	<COND (<TYPE? .FLID ATOM> <SET FLID <SPNAME .FLID>>)>
	<SET ATM <OR <LOOKUP .FLID <GET FLAG OBLIST>>
		     <INSERT .FLID <GET FLAG OBLIST>>>>
	<SETG .ATM .FLAG>
	<CHTYPE <VECTOR .ATM <FIND-ROOM .RMID> .STR .FUNCT> CEXIT>>

<DEFINE EXIT ("TUPLE" PAIRS "AUX" (DOBL ,DIRECTIONS)
	      (FROB <IVECTOR <LENGTH .PAIRS>>))
	#DECL ((PAIRS) <TUPLE [REST STRING <OR NEXIT CEXIT STRING ATOM>]>
	       (DIR) <LIST [REST ATOM]> (FROB) VECTOR (DOBL) OBLIST)
	<REPEAT (ATM RM (F .FROB))
	  #DECL ((ATM) <OR ATOM FALSE> (RM) <OR ROOM FALSE> (F) VECTOR)
	  <COND (<OR
		  <AND <SET ATM <LOOKUP <1 .PAIRS> .DOBL>>
		       <GASSIGNED? .ATM>
		       <TYPE? ,.ATM DIRECTION>>>
		 <PUT .F 1 .ATM>
		 <COND (<TYPE? <2 .PAIRS> STRING>
			<PUT .F 2 <FIND-ROOM <2 .PAIRS>>>)
		       (<PUT .F 2 <2 .PAIRS>>)>
		 <SET F <REST .F 2>>)
		(T
		 <PUT .PAIRS 1 <ERROR ILLEGAL-DIRECTION <1 .PAIRS>>>)>
	  <COND (<EMPTY? <SET PAIRS <REST .PAIRS 2>>>
		 <RETURN>)>>
	<CHTYPE .FROB EXIT>>

<DEFINE ROOM (ID D1 D2 LIT? EX "OPTIONAL" (OBJS ()) (APP <>) (VAL 0) (BIT ,RLANDBIT)
	      "AUX" (RM <FIND-ROOM .ID>))
	#DECL ((ID) <OR STRING ATOM> (D1 D2) STRING (LIT?) <OR ATOM FORM FALSE>
	       (EX) EXIT (APP) <OR FORM FALSE ATOM> (VAL BIT) FIX (RM) ROOM)
        <SETG SCORE-MAX <+ ,SCORE-MAX .VAL>>
	<PUT .RM ,RBITS .BIT>
	<PUT .RM ,RVAL .VAL>
	<PUT .RM ,ROBJS .OBJS>
	<PUT .RM ,RDESC1 .D1>
	<PUT .RM ,RDESC2 .D2>
	<PUT .RM ,REXITS .EX>
	<PUT .RM ,RACTION <COND (<TYPE? .APP FALSE FORM> <>)
				(.APP)>>
	<PUT .RM ,RLIGHT? <COND (<TYPE? .LIT? FORM> <>)
				(T .LIT?)>>
	<MAPF <>
	      <FUNCTION (X) #DECL ((X) OBJECT)
			<PUT .X ,OROOM .RM>>
	      <ROBJS .RM>>
	.RM>

<DEFINE SOBJECT (ID STR "TUPLE" TUP) 
	#DECL ((ID) STRING (TUP) TUPLE)
	<OBJECT .ID "" .STR %<> <> () <> <+ !.TUP>>>

<DEFINE AOBJECT (ID STR APP "TUPLE" TUP) 
	#DECL ((ID) STRING (TUP) TUPLE (APP) ATOM)
	<OBJECT .ID "" .STR %<> .APP () <> <+ !.TUP>>>

<DEFINE OBJECT (ID DESC1 DESC2 DESCO APP CONTS CAN FLAGS
		"OPTIONAL" (LIGHT? 0) (S1 0) (S2 0) (SIZE 5) (CAPAC 0))
	#DECL ((ID) <OR ATOM STRING> (DESC1 DESC2) STRING (APP) <OR FALSE FORM ATOM>
	       (CONTS) <LIST [REST OBJECT]> (CAN) <OR FALSE OBJECT>
	       (FLAGS) <PRIMTYPE WORD> (SIZE CAPAC) FIX 
	       (LIGHT? S1 S2) FIX (DESCO) <OR STRING FALSE>)
	<SETG SCORE-MAX <+ ,SCORE-MAX .S1 .S2>>
	<OR <0? .LIGHT?> <SET FLAGS <+ .FLAGS ,LIGHTBIT>>>
	<PUT
	 <PUT
	  <PUT
	   <PUT
	    <PUT
	     <PUT
	      <PUT
	       <PUT
	        <PUT
		 <PUT
		  <PUT
		   <PUT <FIND-OBJ .ID>
		        ,ODESC1
		        .DESC1>
		   ,OCAPAC
		   .CAPAC>
		  ,OSIZE
		  .SIZE>
		 ,ODESCO
		 .DESCO>
		,OLIGHT?
		.LIGHT?>
	       ,OFLAGS
	       .FLAGS>
	      ,OFVAL
	      .S1>
	     ,OTVAL
	     .S2>
	    ,OCAN
	    .CAN>
	   ,OCONTENTS
	   .CONTS>
	  ,ODESC2
	  .DESC2>
	 ,OACTION
	 <COND (<TYPE? .APP FALSE FORM> <>)
	       (.APP)>>>

<DEFINE FIND-PREP (STR "AUX" (ATM <ADD-WORD .STR>))
    #DECL ((STR) STRING (ATM) <OR FALSE ATOM>)
    <COND (<GASSIGNED? .ATM>
    	   <COND (<TYPE? ,.ATM PREP> ,.ATM)
		 (<ERROR NO-PREP!-ERRORS>)>)
	  (<SETG .ATM <CHTYPE .ATM PREP>>)>>

<DEFINE ADD-ACTION (NAM STR "TUPLE" DECL
		    	    "AUX" (ATM <OR <LOOKUP .NAM ,ACTIONS>
					   <INSERT .NAM ,ACTIONS>>))
    #DECL ((NAM STR) STRING (DECL) <TUPLE [REST VECTOR]> (ATM) ATOM)
    <SETG .ATM <CHTYPE [.ATM <MAKE-ACTION !.DECL> .STR] ACTION>>
    .ATM>

<DEFINE ADD-DIRECTIONS ("TUPLE" NMS "AUX" (DIR ,DIRECTIONS) ATM)
    #DECL ((NMS) <TUPLE [REST STRING]> (DIR) OBLIST (ATM) ATOM)
    <MAPF <> <FUNCTION (X) <SETG <SET ATM <OR <LOOKUP .X .DIR> <INSERT .X .DIR>>>
				 <CHTYPE .ATM DIRECTION>>>
	  .NMS>>

<DEFINE DSYNONYM (STR "TUPLE" NMS "AUX" VAL (DIR ,DIRECTIONS) ATM)
    #DECL ((ATM) ATOM (STR) STRING (NMS) <TUPLE [REST STRING]>
	   (VAL) DIRECTION (DIR) OBLIST)
    <SET VAL <ADD-DIRECTIONS .STR>>
    <MAPF <> <FUNCTION (X) <SETG <SET ATM <OR <LOOKUP .X .DIR> <INSERT .X .DIR>>>
				 .VAL>>
	  .NMS>>

<DEFINE VSYNONYM (N1 "TUPLE" N2 "AUX" ATM VAL) 
	#DECL ((N1) STRING (N2) <TUPLE [REST STRING]> (ATM) <OR FALSE ATOM>
	       (VAL) ANY)
	<COND (<SET ATM <LOOKUP .N1 ,WORDS>>
	       <SET VAL ,.ATM>
	       <MAPF <> <FUNCTION (X) <SETG <ADD-WORD .X> .VAL>> .N2>)>
	<COND (<SET ATM <LOOKUP .N1 ,ACTIONS>>
	       <SET VAL ,.ATM>
	       <MAPF <> <FUNCTION (X) <SETG <OR <LOOKUP .X ,ACTIONS>
						<INSERT .X ,ACTIONS>>
					    .VAL>> .N2>)>>

"STUFF FOR ADDING TO VOCABULARY, ADDING TO LISTS (OF DEMONS, FOR EXAMPLE)."

<DEFINE ADD-WORD (W) 
	#DECL ((W) STRING)
	<OR <LOOKUP .W ,WORDS> <INSERT .W ,WORDS>>>

<DEFINE ADD-BUZZ ("TUPLE" W) 
	#DECL ((W) <TUPLE [REST STRING]>)
	<MAPF <>
	      <FUNCTION (X) 
		      #DECL ((X) STRING)
		      <SETG <ADD-WORD .X> <CHTYPE .X BUZZ>>>
	      .W>>

<DEFINE ADD-ZORK (NM "TUPLE" W) 
	#DECL ((NM) ATOM (W) <TUPLE [REST STRING]>)
	<MAPF <>
	      <FUNCTION (X "AUX" ATM) 
		      #DECL ((X) STRING (ATM) ATOM)
		      <SETG <SET ATM <ADD-WORD .X>> <CHTYPE .ATM .NM>>>
	      .W>>

<DEFINE ADD-OBJECT (OBJ NAMES "OPTIONAL" (ADJ '[]) "AUX" (OBJS ,OBJECT-OBL)) 
	#DECL ((OBJ) OBJECT (NAMES ADJ) <VECTOR [REST STRING]> (OBJS) OBLIST)
	<PUT .OBJ
	     ,ONAMES
	     <MAPF ,UVECTOR
		   <FUNCTION (X) 
			   #DECL ((X) STRING)
			   <OR <LOOKUP .X .OBJS> <INSERT .X .OBJS>>>
		   .NAMES>>
	<PUT .OBJ ,OADJS <MAPF ,UVECTOR <FUNCTION (W) <ADD-ZORK ADJECTIVE .W>> .ADJ>>
	<CHUTYPE <OADJS .OBJ> ADJECTIVE>
	.OBJ>

<DEFINE SYNONYM (N1 "TUPLE" N2 "AUX" ATM VAL) 
	#DECL ((N1) STRING (N2) <TUPLE [REST STRING]> (ATM) <OR FALSE ATOM>
	       (VAL) ANY)
	<COND (<SET ATM <LOOKUP .N1 ,WORDS>>
	       <SET VAL ,.ATM>
	       <MAPF <> <FUNCTION (X) <SETG <ADD-WORD .X> .VAL>> .N2>)>>

<DEFINE ADD-ABBREV (X Y "AUX") 
	#DECL ((X Y) STRING)
	<SETG <ADD-WORD .X> <OR <LOOKUP .Y ,WORDS> <INSERT .Y ,WORDS>>>>

<DEFINE ADD-DEMON (X) #DECL ((X) HACK)
  <COND (<MAPR <>
	  <FUNCTION (Y) #DECL ((Y) <LIST [REST HACK]>)
	    <COND (<==? <HACTION <1 .Y>> <HACTION .X>>
		   <PUT .Y 1 .X>
		   <MAPLEAVE T>)>>
	  ,DEMONS>)
	(<SETG DEMONS (.X !,DEMONS)>)>>

<DEFINE ADD-STAR (OBJ) <SETG STARS (.OBJ !,STARS)>>

<DEFINE ADD-ACTOR (ADV "AUX" (ACTORS ,ACTORS))
  #DECL ((ADV) ADV (ACTORS) <LIST [REST ADV]>)
  <COND (<MAPF <>
	       <FUNCTION (X) #DECL ((X) ADV)
	         <COND (<==? <AOBJ .X> <AOBJ .ADV>>
			<MAPLEAVE T>)>>
	       .ACTORS>)
	(<SETG ACTORS (.ADV !.ACTORS)>)>
  .ADV>

<DEFINE ADD-DESC (OBJ STR)
    #DECL ((OBJ) OBJECT (STR) STRING)
    <PUT .OBJ ,OREAD .STR>>

<DEFINE SADD-ACTION (STR1 ATM)
    <ADD-ACTION .STR1 "" [[.STR1 .ATM]]>>

<DEFINE 1ADD-ACTION (STR1 STR2 ATM)
    <ADD-ACTION .STR1 .STR2 [OBJ [.STR1 .ATM]]>>

<DEFINE AADD-ACTION (STR1 STR2 ATM)
    <ADD-ACTION .STR1 .STR2 [(-1 AOBJS NO-TAKE) [.STR1 .ATM]]>>   
```
