---
title: "defs.63"
program: "Zork"
program_slug: "zork"
file_path: "zork/lcf/defs.63"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/lcf/defs.63"
year: 1977
author: "Anderson, Blank, Daniels, Lebling"
slug: "defs"
order: 1
description: "This file defines key data structures, macros, and utility functions for Zork's gameplay mechanics, written in MDL (Muddle) for the PDP-10."

summary:
  - point: "Defines ROOM structure to model game locations"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Introduces object manipulation macros for inventory and environment"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL"
  - point: "Implements flag-based object and room properties"
    link: "https://en.wikipedia.org/wiki/DEC_PDP-10"
    link_label: "PDP-10"
  - point: "Uses macros for efficient bit manipulation"
    link: "https://en.wikipedia.org/wiki/Bitwise_operation"
    link_label: "Bitwise operations"
  - point: "Defines verbs and syntax for text-based interaction"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive fiction"

enhancements:
  - id: "applicables-data-type-definition"
    line_start: 4
    line_end: 5
    title: "A flexible type for room actions"
    wikipedia_url: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Zork-map.jpg/330px-Zork-map.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Zork map (CC BY 4.0)"
    content: "The RAPPLIC type is defined here as a flexible data structure combining atoms, false values, and offsets. This abstraction allows programmers to associate complex behaviors with rooms, objects, and other game elements. In the late 1970s, MDL was a powerful tool for creating interactive fiction, and its Lisp-like syntax enabled rapid prototyping of ideas. The RAPPLIC type reflects the team's focus on modularity and extensibility, ensuring that Zork's world could be expanded or modified without rewriting core systems. This design choice influenced later game engines, which adopted similar approaches to encapsulating behaviors."
  - id: "generalized-oflags-tester-macros"
    line_start: 19
    line_end: 32
    title: "Efficient flag manipulation with macros"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "These macros, such as TRNN, TRC, and TRO, provide efficient ways to test, set, clear, and toggle flags associated with objects and rooms. Flags are stored as bits in a word, allowing compact representation and fast manipulation. In the PDP-10 era, memory and processing power were limited, so this approach balanced performance with resource constraints. The macros encapsulate common operations, reducing code duplication and improving readability. This technique of bitwise flag manipulation became a staple in game development, influencing systems like the object flags in the Unreal Engine decades later."
  - id: "room-structure-definition"
    line_start: 39
    line_end: 52
    title: "Modeling Zork's world with ROOM structure"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The ROOM structure defines the attributes of locations in Zork, including descriptions, exits, objects, and flags like RSEEN? (visited) and RLIGHT? (light source). This design captures the essence of interactive fiction, where each room is a self-contained narrative unit. The PDP-10's memory constraints required careful planning; each attribute serves a specific purpose, ensuring that the game world is both immersive and computationally efficient. The ROOM structure laid the groundwork for modern game level design, where environments are represented as collections of interconnected objects and properties."
  - id: "flagword-room-properties"
    line_start: 57
    line_end: 64
    title: "Defining room-specific flags"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The FLAGWORD directive defines bit-based flags for rooms, such as RLANDBIT (on land) and RWATERBIT (water room). These flags enable dynamic interactions, such as determining whether a bottle can be filled in a specific room. In the late 1970s, this approach was innovative, allowing game designers to add complexity without increasing memory usage. The flags also reflect the team's attention to detail, ensuring that every room could have unique properties. This system influenced later games, where environmental attributes became central to gameplay mechanics."
  - id: "object-structure-definition"
    line_start: 186
    line_end: 207
    title: "Objects as dynamic entities in Zork"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The OBJECT structure encapsulates the properties of items in Zork, including descriptions, actions, flags, and relationships to other objects. This design allows objects to interact with players and the environment dynamically. For example, the OFLAGS field stores attributes like visibility and flammability, enabling complex behaviors without excessive code. In the PDP-10 era, such modularity was crucial for managing limited resources while maintaining gameplay depth. The OBJECT structure inspired future game engines, where objects became the building blocks of interactive worlds."
  - id: "utility-functions-for-object-manipulation"
    line_start: 319
    line_end: 358
    title: "Managing objects in inventory and environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "These utility functions, such as REMOVE-OBJECT and INSERT-OBJECT, handle the movement of objects between rooms and inventories. They ensure that the game's state remains consistent, whether a player picks up an item or drops it. In the late 1970s, this level of detail was groundbreaking, allowing Zork to simulate a living world where every action had consequences. The functions also highlight the team's focus on modularity, making it easier to expand or modify the game. This approach influenced later RPGs, where inventory management became a core mechanic."
  - id: "rob-room-and-rob-adv-functions"
    line_start: 371
    line_end: 397
    title: "Simulating theft in Zork's world"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The ROB-ROOM and ROB-ADV functions simulate theft, allowing hackers or NPCs to steal valuables from rooms and players. These functions incorporate probabilistic logic and flag checks to determine which items can be taken. In the PDP-10 era, such mechanics added depth to gameplay, creating tension and unpredictability. The functions also demonstrate the team's creativity, using simple algorithms to evoke complex narratives. This mechanic influenced later games, where theft and item loss became integral to storytelling and strategy."
  - id: "find-room-and-find-obj-functions"
    line_start: 478
    line_end: 509
    title: "Dynamic creation of rooms and objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The FIND-ROOM and FIND-OBJ functions dynamically create rooms and objects if they do not already exist. This ensures that the game world can expand as players explore, without requiring all elements to be predefined. In the late 1970s, this approach was innovative, allowing Zork to simulate a vast and evolving world within the PDP-10's constraints. The functions also highlight the team's focus on efficiency, using lookup tables and default values to minimize memory usage. This technique influenced procedural generation in later games, where worlds are created on-the-fly."

---

<AND <L? ,MUDDLE 100> <USE "LSRTNS">>

; "applicables"
<NEWTYPE OFFSET WORD>
<PUT RAPPLIC DECL '<OR ATOM FALSE OFFSET>>

; "newtypes for parser"

<NEWTYPE BUZZ STRING>
<NEWTYPE DIRECTION ATOM>
<NEWTYPE ADJECTIVE ATOM>
<NEWTYPE PREP ATOM>

\


;"generalized oflags tester"

<DEFMAC TRNN ('OBJ 'BIT)
  <FORM N==? <FORM CHTYPE <FORM ANDB .BIT <FORM OFLAGS .OBJ>> FIX> 0>>
<DEFMAC RTRNN ('RM 'BIT)
  <FORM N==? <FORM CHTYPE <FORM ANDB .BIT <FORM RBITS .RM>> FIX> 0>>
<DEFMAC RTRZ ('RM 'BIT)
  <FORM PUT .RM ,RBITS <FORM ANDB <FORM RBITS .RM> <FORM XORB .BIT -1>>>>
<DEFMAC TRC ('OBJ 'BIT)
  <FORM PUT .OBJ ,OFLAGS <FORM XORB <FORM OFLAGS .OBJ> .BIT>>>
<DEFMAC TRZ ('OBJ 'BIT)
  <FORM PUT .OBJ ,OFLAGS <FORM ANDB <FORM OFLAGS .OBJ> <FORM XORB .BIT -1>>>>
<DEFMAC TRO ('OBJ 'BIT)
  <FORM PUT .OBJ ,OFLAGS <FORM ORB <FORM OFLAGS .OBJ> .BIT>>>
<DEFMAC RTRO ('RM 'BIT)
  <FORM PUT .RM ,RBITS <FORM ORB <FORM RBITS .RM> .BIT>>>

\


; "room definition"

<NEWSTRUC
 ROOM VECTOR
  RID     ATOM			;"room id"
  RDESC1  STRING		;"long description"
  RDESC2  STRING		;"short description"
  RSEEN?  <OR ATOM FALSE>	;"visited?"
  RLIGHT? <OR ATOM FALSE>	;"endogenous light source?"
  REXITS  EXIT			;"list of exits"
  ROBJS   <LIST [REST OBJECT]>	;"objects in room"
  RACTION RAPPLIC		;"room-action"
  RVARS   <PRIMTYPE WORD>	;"slot for use of room function"
  RVAL    FIX			;"value for visiting"
  RBITS   <PRIMTYPE WORD>	;"random flags"
  RRAND   ANY			;"random slot">

;"flagword for <RBITS room>:
	  bit-name   bit-tester"

<FLAGWORD RLANDBIT   <>		;"on land"
	  RWATERBIT  <>		;"water room"
	  RAIRBIT    <>		;"mid-air room"
	  RSACREDBIT <>		;"thief not allowed"
	  RFILLBIT   <>		;"can fill bottle here"
	  RMUNGBIT   <>		;"room has been munged"
	  RBUCKBIT   <>		;"this room is a bucket"
	  RHOUSEBIT  <>		;"This room is part of the house">

; "exit"

<NEWTYPE EXIT 
	 VECTOR
	 '<<PRIMTYPE VECTOR> [REST ATOM <OR ROOM CEXIT NEXIT>]>>

; "conditional exit"
   
<NEWSTRUC
 CEXIT VECTOR
  CXFLAG   ATOM			;"condition flag"
  CXROOM   ROOM			;"room it protects"
  CXSTR    <OR FALSE STRING>	;"description"
  CXACTION RAPPLIC		;"exit function">

<NEWTYPE NEXIT STRING>		;"unusable exit description"

\


; "PARSER related types"

; "ACTION -- top level type for verbs"

<NEWSTRUC
 ACTION VECTOR
  VNAME ATOM	;"atom associated with this action"
  VDECL VSPEC	;"syntaxes for this verb (any number)"
  VSTR STRING	;"string to print when talking about this verb">

; "VSPEC -- uvector of syntaxes for a verb"

<NEWTYPE
 VSPEC UVECTOR
  '<<PRIMTYPE UVECTOR> [REST SYNTAX]>>

; "SYNTAX -- a legal syntax for a sentence involving this verb"

<NEWSTRUC
 SYNTAX VECTOR
  SYN1    VARG	;"direct object, more or less"
  SYN2    VARG	;"indirect object, more or less"
  SFCN    VERB	;"function to handle this action"
  SFLIP   <OR ATOM FALSE>	;"(?)"
  SDRIVER <OR ATOM FALSE>	;"(?)">

; "VARG -- types and locations of objects acceptable as args to verbs,
   these go in the SYN1 and SYN2 slots of a SYNTAX."

<NEWSTRUC
 VARG VECTOR
  VBIT	FIX		;"acceptable object characteristics"
  VPREP <OR PREP FALSE>	;"preposition that must precede(?) object"
  VWORD FIX		;"locations object may be looked for in">

; "flagbit definitions for VWORD of a VARG"

<FLAGWORD VABIT <>	;"look in AOBJS"
	  VRBIT <>	;"look in ROBJS"
	  VTBIT <>	;"no-take"
	  VXBIT <>	;"(?) turned on by '=' in VARG spec">

; "VTRNN -- test a bit in the VWORD slot of a VARG"

<DEFMAC VTRNN ('V 'BIT) 
	<FORM N==? <FORM CHTYPE <FORM ANDB .BIT <FORM VWORD .V>> FIX> 0>>

; "VERB -- name and function to apply to handle verb"

<NEWSTRUC
 VERB VECTOR
  VNAME ATOM
  VFCN RAPPLIC>

; "ORPHANS -- mysterious vector of orphan data"

<GDECL (ORPHANS)
       <VECTOR <OR FALSE ATOM>
	       <OR FALSE VERB>
	       <OR FALSE OBJECT>
	       <OR FALSE PREP>
	       <OR FALSE ATOM>>>

<AND? <MSETG OFLAG 1>
      <MSETG OVERB 2>
      <MSETG OSLOT1 3>
      <MSETG OPREP 4>
      <MSETG ONAME 5>>

; "prepositional phrases"

<NEWSTRUC
 PHRASE VECTOR
  PPREP PREP
  POBJ  OBJECT>

\


; "adventurer"

<NEWSTRUC
 ADV VECTOR
  AROOM     ROOM			;"where he is"
  AOBJS     <LIST [REST OBJECT]>	;"what he's carrying"
  ASCORE    FIX				;"score"
  AVEHICLE  <OR FALSE OBJECT>		;"what he's riding in"
  AOBJ      OBJECT			;"what he is"
  AACTION   RAPPLIC			;"special action for robot, etc."
  ASTRENGTH FIX				;"fighting strength"
  ARAND     ANY				;" ** reserved for future expansion ** "
  AFLAGS    <PRIMTYPE WORD>		;"flags THIS MUST BE SAME OFFSET AS OFLAGS!">

"bits in <AFLAGS adv>:
	  bit-name  bit-tester"

<FLAGWORD ASTAGGERED STAGGERED?		;"staggered?">

; "object"

<NEWSTRUC
 OBJECT VECTOR
  OID       ATOM			;"unique name, SETG'd to this"
  ONAMES    <UVECTOR [REST ATOM]>	;"synonyms"
  ODESC1    STRING			;"description when not carried"
  ODESC2    STRING			;"short description"
  ODESCO    <OR STRING FALSE>		;"description when untouched"
  OACTION   RAPPLIC			;"object-action"
  OCONTENTS <LIST [REST OBJECT]>	;"list of contents"
  OCAN      <OR FALSE OBJECT>		;"what contains this"
  OFLAGS    <PRIMTYPE WORD>		;"flags THIS MUST BE SAME OFFSET AS AFLAGS!"
  OTOUCH?   <OR ATOM FALSE>		;"has this been touched?"
  OLIGHT?   FIX				;"light producer?"
  OFVAL     FIX				;"value for finding"
  OTVAL     FIX				;"value for putting in trophy case"
  ORAND     ANY				;"random slot"
  OOPEN?    <OR ATOM FALSE>		;"is this open?"
  OSIZE     FIX				;"how big is it?"
  OCAPAC    FIX				;"how much can it hold?"
  OADJS     <UVECTOR [REST ADJECTIVE]>	;"adjectives for this"
  OROOM     <OR FALSE ROOM>		;"what room its in"
  OREAD     <OR FALSE STRING>		;"reading material">

"bits in <OFLAGS object>:
	  bit-name  bit-tester"

<FLAGWORD OVISON    OVIS?		;"visible?"
	  READBIT   READABLE?		;"readable?"
	  TAKEBIT   CAN-TAKE?		;"takeable?"
	  DOORBIT   DOOR?		;"object is door"
	  TRANSBIT  TRANSPARENT?	;"object is transparent"
	  FOODBIT   EDIBLE?		;"object is food"
	  NDESCBIT  <>			;"object not describable"
	  DRINKBIT  DRINKABLE?		;"object is drinkable"
	  CONTBIT   <>			;"object can be opened/closed"
	  LIGHTBIT  <>			;"object can provide light"
	  VICBIT    <>			;"object is victim"
	  BURNBIT   BURNABLE?		;"object is flammable"
	  FLAMEBIT  <>			;"object is on fire"
	  TOOLBIT   <>			;"object is a tool"
	  TURNBIT   <>			;"object can be turned"
	  VEHBIT    <>			;"object is a vehicle"
	  FINDMEBIT <>			;"can be reached from a vehicle"
	  SLEEPBIT  <>			;"object is asleep"
	  SEARCHBIT <>			;"allow multi-level access into this"
	  SACREDBIT <>			;"thief can't take this"
	  TIEBIT    <>			;"object can be tied"
	  ECHO-ROOM-BIT <>		;"nothing can be taken in echo room"
	  ACTORBIT  <>			;"object is an actor"
	  WEAPONBIT <>			;"object is a weapon"
	  FIGHTBIT  FIGHTING?		;"object is in melee"
	  VILLAIN   <>			;"object is a bad guy"
	  STAGGERED <>			;"object can't fight this turn"
	  TRYTAKEBIT <>			;"object wants to handle not being taken"
	  NO-CHECK-BIT <>		;"ignore checks (in put & drop):  for EVERY and VALUA">

"extra stuff for flagword for objects"

"complement of the visible bit"
<MSETG OVISOFF *777777777776*>

"can i be opened?"
<DEFMAC OPENABLE? ('OBJ) <FORM TRNN .OBJ <FORM + ,DOORBIT ,CONTBIT>>>

"complement of the bit state" 
<DEFMAC DESCRIBABLE? ('OBJ) <FORM NOT <FORM TRNN .OBJ ,NDESCBIT>>>

"if object is a light or aflame, then flaming"
<DEFMAC FLAMING? ('OBJ)
    <FORM AND <FORM TRNN .OBJ ,FLAMEBIT> <FORM 1? <FORM OLIGHT? .OBJ>>>>

"if object visible and open or transparent, can see inside it"
<DEFMAC SEE-INSIDE? ('OBJ)
    <FORM AND <FORM OVIS? .OBJ>
	  <FORM OR <FORM TRANSPARENT? .OBJ> <FORM OOPEN? .OBJ>>>>

\


; "demons"

<NEWSTRUC HACK VECTOR
	  HACTION RAPPLIC
	  HOBJS   <LIST [REST ANY]>
	  "REST"
	  HROOMS  <LIST [REST ROOM]>
	  HROOM   ROOM
	  HOBJ    OBJECT
	  HFLAG   ANY>

; "Clock interrupts"

<NEWSTRUC CEVENT VECTOR
	  CTICK   FIX
	  CACTION <OR APPLICABLE OFFSET>
	  CFLAG   <OR ATOM FALSE>
	  CID ATOM>

\



<SETG LOAD-MAX 100>
<SETG SCORE-MAX 0>

<GDECL (RAW-SCORE LOAD-MAX SCORE-MAX) FIX
       (RANDOM-LIST ROOMS SACRED-PLACES) <LIST [REST ROOM]>
       (STARS OBJECTS WEAPONS NASTIES) <LIST [REST OBJECT]>
       (PRSVEC) <VECTOR <OR FALSE VERB> <OR FALSE OBJECT DIRECTION>
					<OR FALSE OBJECT>>
       (WINNER PLAYER) ADV (HERE) ROOM (INCHAN OUTCHAN) CHANNEL (DEMONS) LIST
       (MOVES DEATHS) FIX (DUMMY YUKS) <VECTOR [REST STRING]>
       (SWORD-DEMON) HACK>

\


"UTILITY FUNCTIONS"

"TO OPEN DOORS"

<DEFMAC COND-OPEN ('DIR 'RM)
  <FORM PROG <LIST <LIST EL <FORM MEMQ .DIR <FORM REXITS .RM>>>>
	#DECL ((EL) <<PRIMTYPE VECTOR> ATOM CEXIT>)
	<FORM SETG <FORM CXFLAG <FORM 2 <FORM LVAL EL>>> T>>>

<DEFMAC COND-CLOSE ('DIR 'RM)
  <FORM PROG <LIST <LIST EL <FORM MEMQ .DIR <FORM REXITS .RM>>>>
	#DECL ((EL) <<PRIMTYPE VECTOR> ATOM CEXIT>)
	<FORM SETG <FORM CXFLAG <FORM 2 <FORM LVAL EL>>> <>>>>

"APPLY AN OBJECT FUNCTION"

<DEFMAC APPLY-OBJECT ('OBJ)
    <FORM PROG ((FOO <FORM OACTION .OBJ>))
	  <FORM COND (<FORM NOT <FORM LVAL FOO>> <>)
		(<FORM TYPE? <FORM LVAL FOO> ATOM>
		 <FORM APPLY <FORM GVAL <FORM LVAL FOO>>>)
		(<FORM DISPATCH <FORM LVAL FOO>>)>>>

"FLUSH AN OBJECT FROM A ROOM"

<DEFINE REMOVE-OBJECT (OBJ "AUX" OCAN OROOM)
	#DECL ((OBJ) OBJECT (OCAN) <OR OBJECT FALSE> (OROOM) <OR FALSE ROOM>)
	<COND (<SET OCAN <OCAN .OBJ>>
	       <PUT .OCAN ,OCONTENTS <SPLICE-OUT .OBJ <OCONTENTS .OCAN>>>)
	      (<SET OROOM <OROOM .OBJ>>
	       <PUT .OROOM ,ROBJS <SPLICE-OUT .OBJ <ROBJS .OROOM>>>)
	      (<MEMQ .OBJ <ROBJS ,HERE>>
	       <PUT ,HERE ,ROBJS <SPLICE-OUT .OBJ <ROBJS ,HERE>>>)>
	<PUT .OBJ ,OROOM <>>
	<PUT .OBJ ,OCAN <>>>

<DEFMAC INSERT-OBJECT ('OBJ 'ROOM)
	<FORM PUT
	      .ROOM
	      ,ROBJS
	      (<FORM PUT .OBJ ,OROOM .ROOM> <CHTYPE <FORM ROBJS .ROOM> SEGMENT>)>>

<DEFMAC TAKE-OBJECT ('OBJ "OPTIONAL" ('WINNER ',WINNER))
	<FORM PUT
	      .WINNER
	      ,AOBJS
	      (<FORM PUT .OBJ ,OROOM <>> <CHTYPE <FORM AOBJS .WINNER> SEGMENT>)>>

<DEFMAC DROP-OBJECT ('OBJ "OPTIONAL" ('WINNER ',WINNER))
	<FORM PUT .WINNER ,AOBJS <FORM SPLICE-OUT .OBJ <FORM AOBJS .WINNER>>>>

<DEFINE KILL-OBJ (OBJ WINNER)
	#DECL ((OBJ) OBJECT (WINNER) ADV)
	<COND (<MEMQ .OBJ <AOBJS .WINNER>>
	       <PUT .WINNER ,AOBJS <SPLICE-OUT .OBJ <AOBJS .WINNER>>>)
	      (<REMOVE-OBJECT .OBJ>)>>

<DEFINE FLUSH-OBJ ("TUPLE" OBJS "AUX" (WINNER ,WINNER))
  #DECL ((OBJS) <TUPLE [REST STRING]> (WINNER) ADV)
  <MAPF <>
	<FUNCTION (X "AUX" (Y <FIND-OBJ .X>))
	  #DECL ((Y) OBJECT)
	  <AND <MEMQ .Y <AOBJS .WINNER>>
	       <DROP-OBJECT <FIND-OBJ .X> .WINNER>>>
	.OBJS>>

"ROB-ADV:  TAKE ALL OF THE VALUABLES A HACKER IS CARRYING"

<DEFINE ROB-ADV (WIN NEWLIST)
  #DECL ((WIN) ADV (NEWLIST) <LIST [REST OBJECT]>)
  <MAPF <>
    <FUNCTION (X) #DECL ((X) OBJECT)
      <COND (<AND <G? <OTVAL .X> 0> <NOT <TRNN .X ,SACREDBIT>>>
	     <PUT .WIN ,AOBJS <SPLICE-OUT .X <AOBJS .WIN>>>
	     <SET NEWLIST (.X !.NEWLIST)>)>>
    <AOBJS .WIN>>
  .NEWLIST>

"ROB-ROOM:  TAKE VALUABLES FROM A ROOM, PROBABILISTICALLY"

<DEFINE ROB-ROOM (RM NEWLIST PROB)
  #DECL ((RM) ROOM (NEWLIST) <LIST [REST OBJECT]> (PROB) FIX)
  <MAPF <>
    <FUNCTION (X) #DECL ((X) OBJECT)
      <COND (<AND <G? <OTVAL .X> 0>
		  <NOT <TRNN .X ,SACREDBIT>>
		  <OVIS? .X>
		  <PROB .PROB>>
	     <REMOVE-OBJECT .X>
	     <PUT .X ,OTOUCH? T>
	     <SET NEWLIST (.X !.NEWLIST)>)
	    (<TYPE? <ORAND .X> ADV>
	     <SET NEWLIST <ROB-ADV <ORAND .X> .NEWLIST>>)>>
    <ROBJS .RM>>
  .NEWLIST>

<DEFINE VALUABLES? (ADV)
  #DECL ((ADV) ADV)
  <MAPF <>
    <FUNCTION (X) #DECL ((X) OBJECT)
      <COND (<G? <OTVAL .X> 0> <MAPLEAVE T>)>>
    <AOBJS .ADV>>>

<DEFINE ARMED? (ADV "AUX" (WEAPONS ,WEAPONS))
  #DECL ((ADV) ADV)
  <MAPF <>
    <FUNCTION (X) #DECL ((X) OBJECT)
      <COND (<MEMQ .X .WEAPONS>
	     <MAPLEAVE T>)>>
    <AOBJS .ADV>>>

<DEFINE LIGHT-SOURCE (ME)
	#DECL ((ME) ADV)
	<MAPF <>
	      <FUNCTION (X)
	         <COND (<NOT <0? <OLIGHT? .X>>>
			<MAPLEAVE .X>)>>
	      <AOBJS .ME>>>

<DEFINE GET-DEMON (ID "AUX" (OBJ <FIND-OBJ .ID>) (DEMS ,DEMONS))
  #DECL ((ID) STRING (OBJ) OBJECT (DEMS) <LIST [REST HACK]>)
  <MAPF <>
    <FUNCTION (X) #DECL ((X) HACK)
      <COND (<==? <HOBJ .X> .OBJ> <MAPLEAVE .X>)>>
    .DEMS>>

<DEFMAC PICK-ONE ('VEC) 
	<FORM NTH .VEC <FORM + 1 <FORM MOD <FORM RANDOM> <FORM LENGTH .VEC>>>>>

<DEFMAC CLOCK-DISABLE ('EV)
    <FORM PUT .EV ,CFLAG <>>>

<DEFMAC CLOCK-ENABLE ('EV)
    <FORM PUT .EV ,CFLAG T>>

<DEFINE YES/NO (NO-IS-BAD? "AUX" (INBUF ,INBUF) (INCHAN ,INCHAN)) 
	#DECL ((INBUF) STRING (NO-IS-BAD?) <OR ATOM FALSE>)
	<RESET .INCHAN>
	<READSTRING .INBUF .INCHAN ,READER-STRING>
	<COND (.NO-IS-BAD?
	       <NOT <MEMQ <1 .INBUF> "NnfF">>)
	      (T
	       <MEMQ <1 .INBUF> "TtYy">)>>

<DEFMAC APPLY-RANDOM ('FROB "OPTIONAL" ('MUMBLE <>))
	<FORM COND
	      (<FORM TYPE? .FROB ATOM>
	       <COND (.MUMBLE
		      <FORM APPLY <FORM GVAL .FROB> .MUMBLE>)
		     (<FORM APPLY <FORM GVAL .FROB>>)>)
	      (T <FORM DISPATCH .FROB .MUMBLE>)>>

<DEFINE DA (FN "OPTIONAL" (FOO <>)) #DECL ((FN) <OR APPLICABLE ATOM FIX>)
  <PROG ()
    <COND (<TYPE? .FN FIX> <DISPATCH .FN .FOO>)
	  (<APPLICABLE? .FN>
	   <COND (.FOO
		  <APPLY .FN .FOO>)
		 (<APPLY .FN>)>)
	  (<GASSIGNED? .FN>
	   <SET FN ,.FN>
	   <AGAIN>)
	  (<ERROR UNASSIGNED-VARIABLE!-ERRORS .FN DA>)>>>


"OLD MAZER"

<MOBLIST FLAG 17>

<PSETG NULL-DESC "">

<PSETG NULL-EXIT <CHTYPE [] EXIT>>

<PSETG NULL-SYN ![]>

<DEFINE FIND-ROOM (ID "AUX" ATM ROOM)
	#DECL ((ID) <OR ATOM STRING> (VALUE) ROOM
	       (ROOM) ROOM (ATM) <OR ATOM FALSE>)
	<COND (<TYPE? .ID ATOM> <SET ID <SPNAME .ID>>)>
	<COND (<AND <SET ATM <LOOKUP .ID ,ROOM-OBL>>
		    <GASSIGNED? .ATM>>
		    ,.ATM)
	      (<OR .ATM
		   <SET ATM <INSERT .ID ,ROOM-OBL>>>
	       <SETG .ATM
		     <SET ROOM
			  <CHTYPE <VECTOR .ATM ,NULL-DESC ,NULL-DESC
					  <> <> ,NULL-EXIT () <> 0 0 0 T>
				 ROOM>>>
	       <SETG ROOMS (.ROOM !,ROOMS)>
	       .ROOM)>>

<DEFINE FIND-OBJ (ID "AUX" OBJ ATM)
	#DECL ((ID) <OR ATOM STRING> (OBJ) OBJECT (ATM) <OR ATOM FALSE> (VALUE) OBJECT)
	<COND (<TYPE? .ID ATOM> <SET ID <SPNAME .ID>>)>
	<COND (<AND <SET ATM <LOOKUP .ID ,OBJECT-OBL>>
		    <GASSIGNED? .ATM>>
	       ,.ATM)
	      (<OR .ATM
		   <SET ATM <INSERT .ID ,OBJECT-OBL>>>
	       <SETG .ATM
		     <SET OBJ
			  <CHTYPE [.ATM ,NULL-SYN ,NULL-DESC ,NULL-DESC <>
				   <> () <> 0 <> 0 0 0 <> <> 5 0 ,NULL-SYN <> <>]
				  OBJECT>>>
	       <SETG OBJECTS (.OBJ !,OBJECTS)>
	       .OBJ)>>

<DEFINE FUNCTION-PRINT (FROB)
  #DECL ((FROB) <OR ATOM OFFSET APPLICABLE FALSE>)
  <COND (<NOT .FROB> <PRINC "<>">)
	(<TYPE? .FROB RSUBR RSUBR-ENTRY>
	 <PRIN1 <2 .FROB>>)
	(<TYPE? .FROB ATOM>
	 <PRIN1 .FROB>)
	(<TYPE? .FROB OFFSET>
	 <PRINC "#OFFSET ">
	 <PRIN1 <GET-ATOM .FROB>>)
	(<PRINC "#FUNCTION ">
	 <PRIN1 <GET-ATOM .FROB>>)>>


    