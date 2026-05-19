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
description: "This file defines key data structures, macros, and utility functions for Zork's game engine, showcasing the ingenuity of early text adventure programming in the MDL language."

summary:
  - point: "Defines ROOM structure with properties like descriptions and exits"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Introduces macros for manipulating object and room flags"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL language"
  - point: "Implements parsing-related types for verbs and syntax"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive fiction"
  - point: "Utility functions for object and room manipulation"
    link: "https://en.wikipedia.org/wiki/DEC_PDP-10"
    link_label: "DEC PDP-10"
  - point: "Defines adventurer and object structures central to gameplay"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"

enhancements:
  - id: "applicables-and-offset-word"
    line_start: 4
    line_end: 5
    title: "Defining 'applicables' for game logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    image_url: ""
    image_caption: ""
    content: "These lines introduce the RAPPLIC type, which is a composite structure combining atoms, offsets, and booleans. This abstraction allows the game engine to associate specific behaviors or actions with objects or rooms dynamically. In 1977, the concept of 'applicables' was groundbreaking for interactive fiction, enabling flexible and reusable logic. The authors, working on the PDP-10 under ITS, were pushing the boundaries of what text-based games could achieve. This design would influence later adventure games, setting the stage for more complex object-oriented programming paradigms."
  - id: "parser-newtypes"
    line_start: 9
    line_end: 12
    title: "New types for parsing player input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "These definitions establish specialized types like BUZZ (strings), DIRECTION, ADJECTIVE, and PREP (atoms). These are foundational for parsing player input and interpreting commands like 'go north' or 'take red key.' In the late 1970s, parsing natural language was a novel challenge. The Zork team leveraged MDL's Lisp-like flexibility to create these types, enabling the game to understand and respond to complex player instructions. This approach would become a hallmark of interactive fiction, influencing games like Infocom's later titles and even modern text parsers."
  - id: "generalized-oflags-tester"
    line_start: 19
    line_end: 30
    title: "Macros for manipulating object and room flags"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The TRNN, RTRNN, TRC, TRZ, and TRO macros provide a compact way to test, set, clear, and toggle flags on objects and rooms. These bitwise operations are essential for tracking states like whether a room has been visited or an object is visible. In the constrained environment of the PDP-10, efficient memory usage was critical, and bitwise flags offered a way to store multiple states in a single word. The Zork team’s use of these macros reflects their deep understanding of hardware limitations and their ability to innovate within them."
  - id: "room-definition"
    line_start: 39
    line_end: 52
    title: "Defining rooms as structured data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The ROOM structure encapsulates everything about a game location, from its descriptions to its exits and objects. Each room is a VECTOR with slots for properties like RSEEN? (visited?) and RLIGHT? (light source?). This modular design allowed Zork's world to be expansive and richly interactive. In 1977, this level of detail was unprecedented in gaming. The authors were inspired by their experiences with early mainframe games like Adventure and sought to create a more sophisticated and immersive environment. The ROOM structure became a template for countless adventure games that followed."
  - id: "flagword-for-room-bits"
    line_start: 57
    line_end: 64
    title: "Categorizing room properties with flags"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bit_field"
    image_url: ""
    image_caption: ""
    content: "These FLAGWORD definitions assign specific meanings to bits in the RBITS field of a ROOM. For example, RWATERBIT indicates a water room, while RSACREDBIT prevents the thief character from entering. By encoding room properties as flags, the Zork team could efficiently manage complex interactions without consuming excessive memory. This approach reflects the constraints of the PDP-10, where every byte counted. The use of flags for room categorization would influence later game engines, particularly those designed for resource-limited platforms."
  - id: "adventurer-structure"
    line_start: 168
    line_end: 177
    title: "Defining the adventurer's state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The ADV structure represents the player character, tracking their location (AROOM), inventory (AOBJS), score (ASCORE), and more. This design encapsulates the adventurer's state in a single VECTOR, making it easy to update and query during gameplay. In the late 1970s, this abstraction was a clever way to manage the complexities of interactive storytelling. The Zork team’s decision to treat the player as an object within the game world was a precursor to modern game design, where player state is central to the engine."
  - id: "object-structure"
    line_start: 187
    line_end: 207
    title: "Objects as dynamic entities in the game world"
    wikipedia_url: "https://en.wikipedia.org/wiki/Object-oriented_programming"
    image_url: ""
    image_caption: ""
    content: "The OBJECT structure defines items in the game, including their descriptions, actions, and flags. Each object is a VECTOR with slots for properties like ODESC1 (long description) and OFLAGS (state flags). This modular approach allowed Zork to feature a wide variety of interactive items, from treasures to tools. The authors were pioneering a form of object-oriented programming, treating game entities as discrete objects with their own behaviors. This innovation would influence not only adventure games but also the broader field of software development."
  - id: "utility-functions"
    line_start: 307
    line_end: 379
    title: "Manipulating objects and rooms dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    image_url: ""
    image_caption: ""
    content: "This section includes utility functions for opening doors, applying object actions, and removing or inserting objects into rooms. These functions demonstrate the flexibility of MDL and the ingenuity of the Zork team in creating a dynamic game world. For example, REMOVE-OBJECT ensures that an item is properly removed from its container or location, while ROB-ADV allows a hacker character to steal valuables from the player. These utilities were essential for managing the complex interactions that defined Zork's gameplay, setting a standard for future adventure games."
  - id: "find-room-find-object"
    line_start: 478
    line_end: 509
    title: "Dynamic creation and lookup of rooms and objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The FIND-ROOM and FIND-OBJ functions dynamically create or retrieve rooms and objects based on their IDs. If an ID is not found, the functions insert it into the appropriate table and initialize it with default values. This design allowed Zork to handle a vast and evolving game world without predefining every entity. In the late 1970s, this level of flexibility was rare in games. The Zork team’s approach reflects their understanding of Lisp-like dynamic programming and their commitment to creating a rich, immersive experience for players."
  - id: "function-print"
    line_start: 511
    line_end: 522
    title: "Printing function details for debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "FUNCTION-PRINT provides a way to display information about functions, offsets, and atoms, aiding in debugging and development. Debugging tools were crucial for the Zork team, who were working on complex systems with limited resources. This function reflects their pragmatic approach to development, ensuring they could quickly identify and resolve issues. Debugging remains a cornerstone of software development, and tools like FUNCTION-PRINT are a reminder of the challenges faced by early programmers."

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