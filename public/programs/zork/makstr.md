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
description: "This file defines vocabulary, objects, and actions for Zork's interactive text-based world."

summary:
  - point: "MDL's Lisp-like syntax enabled complex data structures and recursion."
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL"
  - point: "Zork pioneered dynamic object creation and manipulation in text adventures."
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "The PDP-10's memory constraints shaped every design decision."
    link: "https://en.wikipedia.org/wiki/PDP-10"
    link_label: "PDP-10"

enhancements:
  - id: "define-cevent-event-management"
    line_start: 1
    line_end: 8
    title: "Event Management in a Text Adventure"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `CEVENT` definition creates a structure for managing events in Zork's world. Events are tied to a 'tick' (time interval), an application, a flag, and a name. The code dynamically checks if the name exists in the game's global object list (`OBLIST`) and either retrieves or inserts it. This flexibility allowed Zork to handle complex interactions, such as timed events or state changes. In 1977, the PDP-10's limited memory meant every data structure had to be compact and efficient. The authors—Anderson, Blank, Daniels, and Lebling—were leveraging MDL's powerful list manipulation capabilities to create a dynamic and immersive world. The concept of event-driven programming seen here would later influence game design in genres far beyond text adventures."
  - id: "define-cons-obj-object-ownership"
    line_start: 10
    line_end: 17
    title: "Assigning Ownership of Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `CONS-OBJ` function assigns objects to a specific 'winner'—typically the player character or another actor in the game. It iterates over a list of object names, finds each object, and either verifies ownership or transfers it. This mechanism underpins Zork's inventory system, where players could pick up, drop, or interact with items. In the late 1970s, this kind of dynamic object handling was groundbreaking. The PDP-10's ITS operating system enabled rapid development and iteration, allowing the team to experiment with complex game mechanics. Object ownership and manipulation became a staple of adventure games, influencing titles like King's Quest and Ultima."
  - id: "define-cexit-room-exits"
    line_start: 19
    line_end: 27
    title: "Defining Room Exits Dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `CEXIT` function defines exits between rooms in Zork's world. Each exit is tied to a flag, a room ID, optional descriptive text, and a function for additional logic. The code dynamically retrieves or creates an exit identifier in the game's global object list. This approach allowed the authors to create a richly interconnected world where rooms could have conditional exits based on player actions or game state. In 1977, the idea of dynamically generating game elements was innovative, especially given the PDP-10's constraints. This modular design influenced later games, enabling more complex and interactive environments."
  - id: "define-room-room-creation"
    line_start: 50
    line_end: 69
    title: "Creating Rooms with Dynamic Properties"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `ROOM` function defines a room in Zork's world, including its ID, descriptions, lighting, exits, and objects. It updates global game variables like the maximum score and assigns properties to the room object. The authors used MDL's powerful list and vector manipulation capabilities to create rooms dynamically, allowing for a flexible and expandable game world. In the late 1970s, this approach was cutting-edge, enabling Zork to offer a level of detail and interactivity unmatched by earlier text-based games. The modular design of rooms influenced the development of game engines and level editors in later decades."
  - id: "define-object-dynamic-object-properties"
    line_start: 79
    line_end: 123
    title: "Dynamic Object Properties and Interactions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `OBJECT` function defines objects in Zork's world, including their descriptions, contents, flags, and capacities. It dynamically assigns properties to each object, such as whether it emits light or can be contained within another object. This flexibility allowed Zork to feature a wide variety of interactive items, from treasures to tools. In 1977, dynamic object handling was a novel concept, made possible by MDL's expressive syntax and the PDP-10's processing power. The authors were pioneering techniques that would become standard in game development, influencing the design of RPGs and adventure games for decades."
  - id: "define-add-word-vocabulary-expansion"
    line_start: 167
    line_end: 169
    title: "Expanding the Game's Vocabulary"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `ADD-WORD` function adds new words to Zork's vocabulary, either by retrieving them from the global word list or inserting them if they don't exist. This mechanism allowed the authors to expand the game's lexicon dynamically, enabling players to interact with the world using a rich set of commands. In the late 1970s, text-based games relied heavily on natural language processing, and Zork's vocabulary system was a significant innovation. The ability to add words on the fly made the game more immersive and adaptable, setting a standard for text-based interactions in gaming."
  - id: "define-add-object-object-naming"
    line_start: 187
    line_end: 198
    title: "Naming and Describing Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `ADD-OBJECT` function assigns names and adjectives to objects in Zork's world, linking them to the global object list. This mechanism allowed the authors to create richly described items that players could interact with using natural language. In 1977, this level of detail was groundbreaking, enabling a more immersive and intuitive gameplay experience. The dynamic naming system influenced the design of text parsers in later games, paving the way for more sophisticated natural language interfaces."

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