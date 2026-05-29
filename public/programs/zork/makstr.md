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
description: "This file defines key structures and routines for Zork's object management and vocabulary system, showcasing early innovations in interactive fiction programming."

summary:
  - point: "Defines object creation and manipulation routines central to Zork's gameplay."
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Implements vocabulary management for player commands and game responses."
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive Fiction"
  - point: "Uses MDL, a Lisp dialect, to handle complex data structures and logic."
    link: "https://en.wikipedia.org/wiki/Muddle_(programming_language)"
    link_label: "MDL Language"
  - point: "Optimizes memory usage on the PDP-10, a machine with limited resources."
    link: "https://en.wikipedia.org/wiki/PDP-10"
    link_label: "PDP-10"
  - point: "Introduces techniques for dynamic vocabulary expansion and synonym handling."
    link: "https://en.wikipedia.org/wiki/Parser_(interactive_fiction)"
    link_label: "Interactive Fiction Parsers"

enhancements:
  - id: "define-cevent-event-management"
    line_start: 1
    line_end: 8
    title: "How Zork Managed Timed Events"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `CEVENT` routine defines a structure for timed events in Zork, such as object movements or environmental changes triggered after a certain number of game ticks. It initializes an event with attributes like a tick counter, an associated function, and flags for conditional behavior. This was crucial for creating dynamic and immersive gameplay in Zork, where the world seemed alive and responsive to player actions. In 1977, the PDP-10's limited processing power required efficient event handling. The developers, including Tim Anderson and Marc Blank, leveraged MDL's ability to manage lists and associative arrays to track events without consuming excessive memory. By using oblists (object lists) for lookup and insertion, they ensured quick access to event data. This approach influenced later interactive fiction games, which adopted similar event-driven architectures. Games like Infocom's Enchanter series expanded on these ideas, adding more complex event chains and dependencies. Today, event systems are ubiquitous in game engines like Unity and Unreal, where they underpin everything from AI behavior to scripted sequences."
  - id: "define-cons-obj-object-ownership"
    line_start: 10
    line_end: 17
    title: "The Code Behind Zork's Object Ownership"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `CONS-OBJ` routine manages the ownership of objects by players or entities in the game. It iterates over a list of object identifiers, checks if they are already owned by the player (or 'winner'), and assigns them if not. This ensures that objects are correctly tracked and interactable within the game world. In the late 1970s, object-oriented programming was still in its infancy, but Zork's developers used MDL's tuple and list structures to simulate object ownership and inventory management. This allowed for dynamic interactions, such as picking up items or transferring them between characters, which were groundbreaking for text-based games. The concept of object ownership became a cornerstone of interactive fiction and RPGs. Games like Ultima and Baldur's Gate expanded on these mechanics, introducing complex inventories and trade systems. Modern game engines use similar principles, with object ownership tied to entities in the game world, enabling features like multiplayer item sharing and persistent inventories."
  - id: "define-room-room-definition"
    line_start: 50
    line_end: 69
    title: "How Zork Built Its World One Room at a Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `ROOM` routine defines the structure and properties of a room in Zork's game world. Each room is assigned an identifier, descriptions, lighting conditions, exits, and objects it contains. It also updates global variables like the maximum score achievable in the game, reflecting the room's contribution to gameplay. In the PDP-10 era, memory constraints meant that every room had to be carefully defined and optimized. Zork's developers used MDL's associative arrays and vector structures to store room attributes efficiently. This modular approach allowed them to expand the game world incrementally, testing each room's interactions before adding more. Room-based design became a staple of adventure games, influencing titles like King's Quest and The Legend of Zelda. The modularity seen here also foreshadows modern level design practices, where environments are constructed as discrete units with defined properties and behaviors. Today, tools like Unity's prefabs and Unreal's blueprints continue this tradition, enabling developers to create complex worlds with reusable components."
  - id: "define-add-directions-vocabulary-expansion"
    line_start: 139
    line_end: 143
    title: "Expanding Zork's Vocabulary Dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parser_(interactive_fiction)"
    image_url: ""
    image_caption: ""
    content: "The `ADD-DIRECTIONS` routine dynamically adds new directional words to Zork's vocabulary, associating them with predefined oblist entries. This allows the game to recognize synonyms or alternative terms for navigation commands, enhancing the parser's flexibility and player experience. In the 1970s, parsers for text-based games were rudimentary, often limited to a fixed vocabulary. Zork's developers innovated by making the vocabulary expandable, enabling players to use natural language variations without encountering errors. This was achieved using MDL's oblist and mapping functions, which allowed efficient lookup and insertion of new words. This technique influenced the development of more sophisticated parsers in later interactive fiction games, such as Infocom's Hitchhiker's Guide to the Galaxy. Modern NLP (Natural Language Processing) systems in AI assistants like Siri and Alexa can trace their lineage to these early efforts in handling dynamic vocabularies and synonyms."
  - id: "define-add-object-object-naming"
    line_start: 187
    line_end: 198
    title: "How Zork Gave Names to Its Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `ADD-OBJECT` routine assigns names and adjectives to objects in Zork, enabling the parser to recognize and interact with them. It maps object names and descriptors to oblist entries, ensuring that players can refer to objects using multiple terms or descriptive phrases. This was a significant step forward in interactive fiction, where player immersion depended on the game's ability to understand varied inputs. By leveraging MDL's oblist and mapping features, Zork's developers created a flexible naming system that could accommodate synonyms and adjectives, making interactions more natural. The concept of object naming and descriptive parsing influenced the design of later adventure games and RPGs, where players could interact with objects using detailed commands. Modern games like Skyrim and The Witcher 3 continue to use similar systems, allowing players to refer to items and characters in diverse ways."

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
    <ADD-ACTION .STR1 .STR2 [(-1 AOBJS NO-TAKE) [.STR1 .ATM]]>>
```