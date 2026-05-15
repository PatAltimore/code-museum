---
title: "defs.63"
program: "Zork"
program_slug: "zork"
file_path: "zork/lcf/defs.63"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/lcf/defs.63"
year: 1977
author: "Tim Anderson, Marc Blank, Bruce Daniels, Dave Lebling"
slug: "defs"
order: 1
description: "The complete type system — every room, object, verb, and parser construct defined as an MDL structure"

summary:
  - point: "Every room, object, and parser construct is declared here as a typed MDL vector"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL (Muddle) language"
  - point: "PDP-10 bit-manipulation instructions become Lisp macros: TRNN, TRO, TRZ"
    link: "https://en.wikipedia.org/wiki/PDP-10"
    link_label: "DEC PDP-10"
  - point: "The OBJECT type alone carries 20 named fields, including two bit-flag words"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"

enhancements:
  - id: "room-struct"
    line_start: 37
    line_end: 62
    title: "The ROOM Structure"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Zork_I_box_art.jpg/440px-Zork_I_box_art.jpg"
    image_caption: "Zork I box art (Infocom, 1980). The entire game world was first expressed as MDL type declarations like this one. Public domain."
    content: "NEWSTRUC ROOM VECTOR is the blueprint for every location in the dungeon. It declares twelve fields: RID (the room's atom identifier), two description strings for long and short views, a visited flag, a light flag, an EXIT vector (the map), a list of objects currently in the room, an optional action function, a variable scratch slot, a point value for first visit, a bit-flag word for room properties, and a random slot for miscellaneous state. Below the structure, FLAGWORD assigns named bits to the RBITS field — RLANDBIT, RWATERBIT, RAIRBIT, RSACREDBIT (where the thief can't go), and RHOUSEBIT. Every room in the game is a runtime instance of this structure, populated by the #ROOM reader macros in dung.56."

  - id: "object-struct"
    line_start: 182
    line_end: 236
    title: "The OBJECT Structure and Its 28 Flags"
    wikipedia_url: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    image_url: ""
    image_caption: ""
    content: "The OBJECT structure carries 20 fields covering every property an in-game item might have: its atom ID, a vector of synonyms, two description strings, an untouched description, an action function, its contents list, what container it is in, a bit-flag word, touch/light/value fields, a size, a capacity, an adjective list, its current room, and optional reading material. Below the structure, FLAGWORD assigns 28 named bits to the OFLAGS field. These bits — TAKEBIT, DOORBIT, TRANSBIT, FOODBIT, DRINKBIT, CONTBIT, LIGHTBIT, BURNBIT, FLAMEBIT, ACTORBIT, WEAPONBIT, VILLAIN, and more — are the entire vocabulary of object behavior. A sword is a WEAPON; the thief is a VILLAIN; the lantern has LIGHTBIT set. The comment explicitly notes that OFLAGS and AFLAGS must sit at the same offset in their respective structures, allowing the combat code to treat the adventurer and objects uniformly."

  - id: "parser-types"
    line_start: 86
    line_end: 128
    title: "The Parser Type Hierarchy: ACTION, VSPEC, SYNTAX, VARG"
    wikipedia_url: "https://en.wikipedia.org/wiki/Natural_language_processing"
    image_url: ""
    image_caption: ""
    content: "Four nested types implement the entire grammar engine. ACTION holds a verb atom and its string description. VSPEC is a typed uvector of SYNTAX entries — the list of all legal sentence patterns for that verb. SYNTAX holds two VARG slots (direct and indirect object specifications), a VERB function to call on match, and two flags for edge cases. VARG is the most interesting: it carries a VBIT (an integer bitmask specifying what kinds of objects qualify), a required preposition, and a VWORD bitmask indicating where to search — VABIT (in the adventurer's inventory), VRBIT (in the current room), VTBIT (no-take restriction). The parser in np.93 walks these structures to validate and dispatch every command the player types. The types are declared here so that the rest of the system can reason about grammar statically, not just at runtime."

  - id: "trnn-macros"
    line_start: 18
    line_end: 31
    title: "PDP-10 Bit Operations as Lisp Macros"
    wikipedia_url: "https://en.wikipedia.org/wiki/PDP-10"
    image_url: ""
    image_caption: ""
    content: "The PDP-10 instruction set included a family of bit-test-and-modify instructions with names like TRNN (Test Right half, No skip if Not), TRO (Test Right half, Or bits in), TRZ (Test Right half, Zero bits in), and TRC (Test Right half, Complement bits). Zork's team lifted this naming directly into MDL macros. TRNN expands to a boolean test using ANDB; TRO expands to an ORB mutation; TRZ uses ANDB with a bitwise complement (XORB with -1). These macros appear hundreds of times throughout the codebase — they are the primitive operations for reading and writing OFLAGS and RBITS. Writing them as DEFMAC lets the MDL compiler inline them at every call site, generating efficient code while keeping the source readable to anyone who knew the PDP-10 instruction set."

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
