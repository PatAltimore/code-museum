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
description: "This file defines key data structures and functions for Zork's object and room management, vocabulary handling, and game mechanics."

summary:
  - point: "Defines the CEVENT structure for timed events in the game"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Implements vocabulary handling for player commands and synonyms"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive Fiction"
  - point: "Introduces object and room definitions central to Zork's gameplay"
    link: "https://en.wikipedia.org/wiki/DEC_PDP-10"
    link_label: "DEC PDP-10"
  - point: "Uses MDL's Lisp-like syntax for complex game logic"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL Programming Language"
  - point: "Pioneers techniques for dynamic vocabulary and object interaction"
    link: "https://en.wikipedia.org/wiki/Z-machine"
    link_label: "Z-machine"

enhancements:
  - id: "cevent-structure-for-timed-events"
    line_start: 1
    line_end: 8
    title: "CEVENT: Structure for Timed Events"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The CEVENT structure is defined to manage timed events in the game. It combines a tick counter, an application-specific function, a flag, and a name into a single entity. This allows the game to schedule and execute events dynamically, such as triggering actions after a certain number of turns. In 1977, the concept of timed events in interactive fiction was groundbreaking, enabling richer storytelling and gameplay mechanics. The developers, Anderson, Blank, Daniels, and Lebling, were exploring ways to make Zork feel alive and responsive to player actions. The CEVENT structure laid the groundwork for dynamic event handling in later games, influencing systems like the Z-machine used in Infocom's commercial releases. Today, timed events are a staple in game design, seen in everything from quest timers in RPGs to cooldowns in strategy games."
  - id: "cons-obj-object-construction"
    line_start: 10
    line_end: 17
    title: "CONS-OBJ: Object Construction Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "CONS-OBJ is a function that constructs objects in the game world and associates them with the player character (referred to as WINNER). It iterates over a list of object names, finds their corresponding game objects, and either adds them to the player's inventory or interacts with them. This routine reflects the game's emphasis on object manipulation and interaction, a core mechanic of Zork. In the late 1970s, interactive fiction was still in its infancy, and Zork's object system was a major innovation. The developers leveraged MDL's tuple and mapping capabilities to build a flexible system for handling objects. This approach influenced the design of object-oriented systems in later text-based games and even modern engines like Unity, where objects and their properties are central."
  - id: "cexit-room-exit-definition"
    line_start: 19
    line_end: 27
    title: "CEXIT: Room Exit Definition"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The CEXIT function defines exits between rooms, including optional descriptions, flags, and associated functions. It ensures that exits are properly linked to room identifiers and stored in the game's data structures. This mechanism allows players to navigate the game's world seamlessly, a critical feature for Zork's immersive exploration. At the time, creating a dynamic and interconnected world was a significant challenge, especially on the PDP-10's limited resources. The developers used MDL's vector and conditional logic to implement this system efficiently. The concept of room exits became a standard in adventure games, influencing titles like King's Quest and The Legend of Zelda. Zork's approach to room navigation also inspired modern game engines' pathfinding and world-building tools."
  - id: "exit-mapping-room-connections"
    line_start: 29
    line_end: 48
    title: "EXIT: Mapping Room Connections"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The EXIT function maps connections between rooms based on player-defined pairs of directions and destinations. It validates the input, ensures the directions are legal, and stores the connections in a vector. This function is essential for creating Zork's interconnected world, allowing players to move between rooms logically. In the 1970s, designing a coherent game world required careful planning and efficient data structures. The developers used MDL's tuple and vector capabilities to manage room connections dynamically. This technique influenced the design of game worlds in later interactive fiction and graphical adventures, where room connections are often stored in similar data structures. The EXIT function's logic can be seen in modern game engines' handling of node-based navigation."
  - id: "room-definition-and-properties"
    line_start: 50
    line_end: 69
    title: "ROOM: Definition and Properties"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The ROOM function defines the properties of a room, including its ID, descriptions, lighting status, exits, objects, and associated actions. It updates global variables like SCORE-MAX and sets room-specific attributes in the game's data structures. This function is central to Zork's world-building, allowing the developers to create diverse and interactive environments. In 1977, the concept of defining rooms with detailed properties was innovative, enabling richer gameplay and storytelling. The developers used MDL's conditional logic and mapping functions to handle room attributes efficiently. This approach influenced the design of room-based systems in later games, from text adventures to 3D RPGs like Skyrim. Zork's room definitions also inspired the modular design of modern game levels."
  - id: "object-definition-and-interaction"
    line_start: 79
    line_end: 123
    title: "OBJECT: Definition and Interaction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The OBJECT function defines game objects, including their descriptions, actions, contents, and flags. It updates global variables like SCORE-MAX and sets object-specific attributes in the game's data structures. This function is crucial for Zork's gameplay, enabling players to interact with objects dynamically. In the late 1970s, object interaction was a key innovation in interactive fiction, allowing players to manipulate the game world in meaningful ways. The developers used MDL's conditional logic and data manipulation capabilities to implement this system. Zork's object definitions influenced the design of object-oriented systems in later games, from text adventures to modern RPGs. The concept of objects with properties and actions became a standard in game development, seen in engines like Unreal and Unity."
  - id: "vocabulary-handling-and-synonyms"
    line_start: 125
    line_end: 163
    title: "Vocabulary Handling and Synonyms"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "This section defines functions for handling vocabulary, including adding words, actions, directions, and synonyms. It ensures that player commands are recognized and mapped to game actions or objects. Vocabulary handling was a critical aspect of Zork, enabling players to interact with the game using natural language. In the 1970s, parsing player input was a significant challenge, requiring innovative techniques to handle synonyms and ambiguous commands. The developers used MDL's mapping functions and conditional logic to build a robust vocabulary system. This approach influenced the design of text parsers in later interactive fiction and even modern voice-controlled systems. Zork's vocabulary handling set a standard for player interaction, inspiring games like Adventure and systems like Siri."
  - id: "adding-objects-and-adjectives"
    line_start: 187
    line_end: 198
    title: "Adding Objects and Adjectives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The ADD-OBJECT function associates objects with names and adjectives, enabling dynamic interaction and description in the game. It updates the object's attributes and links them to vocabulary entries. This function reflects Zork's emphasis on detailed object interaction, a hallmark of interactive fiction. In the late 1970s, creating objects with rich descriptions and interactions was a major innovation, enhancing player immersion. The developers used MDL's mapping and conditional logic to implement this system efficiently. The concept of associating objects with vocabulary entries influenced the design of text parsers and object-oriented systems in later games. Zork's approach to object interaction inspired the development of systems like Inform and TADS, which are used to create modern interactive fiction."

---

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