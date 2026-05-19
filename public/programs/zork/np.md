---
title: "np.93"
program: "Zork"
program_slug: "zork"
file_path: "zork/lcf/np.93"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/lcf/np.93"
year: 1977
author: "Anderson, Blank, Daniels, Lebling"
slug: "np"
order: 2
description: "This file contains parsing and object manipulation routines for Zork, the seminal text-based adventure game."

summary:
  - point: "Uses MDL's list and vector manipulation capabilities to parse player input"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL programming language"
  - point: "Introduces 'GWIM' (Get What I Mean), an early attempt at intelligent input parsing"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Leverages PDP-10 hardware and ITS system features for efficient object lookup"
    link: "https://en.wikipedia.org/wiki/PDP-10"
    link_label: "DEC PDP-10"
  - point: "Innovative use of MDL's oblist data structure for managing game objects and actions"
    link: "https://en.wikipedia.org/wiki/Oblist"
    link_label: "Oblist"
  - point: "Early example of natural language processing in games"
    link: "https://en.wikipedia.org/wiki/Natural_language_processing"
    link_label: "Natural language processing"

enhancements:
  - id: "global-game-data-initialization"
    line_start: 2
    line_end: 8
    title: "Global game data initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Oblist"
    image_url: ""
    image_caption: ""
    content: "These lines initialize global variables used throughout the game, including 'WORDS', 'OBJECT-OBL', 'ACTIONS', and 'ORPHANS'. These variables are set using MDL's oblist and moblist constructs, which are specialized data structures for managing lists of symbols and objects. The oblist is a key feature of MDL, inherited from Lisp, and allows efficient symbol lookup and manipulation. In the context of Zork, these lists store the vocabulary of the game, the objects in the game world, and the actions players can perform. The initialization reflects the modular design philosophy of Zork's developers, enabling the game to handle complex interactions between objects and actions. This approach influenced later adventure games and interactive fiction engines, such as Infocom's Z-machine, which also relied on efficient data structures for parsing and gameplay logic."
  - id: "preposition-and-object-parsing"
    line_start: 10
    line_end: 17
    title: "Preposition and object parsing setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Natural_language_processing"
    image_url: ""
    image_caption: ""
    content: "This section sets up vectors for parsing prepositions and objects in player commands. The 'PREPVEC' and 'PREP2VEC' arrays store potential preposition-object pairs, enabling the game to interpret commands like 'take key with glove'. The use of MDL's vector and phrase types highlights the developers' focus on natural language processing, a cutting-edge concept in 1977. By predefining common patterns, Zork's parser could handle a wide range of inputs with minimal ambiguity. This technique laid the groundwork for more sophisticated parsing systems in later games and contributed to the development of text-based interfaces in software beyond gaming."
  - id: "sparse-parsing-routine"
    line_start: 19
    line_end: 129
    title: "Sparse parsing routine for player input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'SPARSE' routine is a central component of Zork's input parsing system. It processes player commands by analyzing words, objects, actions, and prepositions to determine the intended meaning. The routine uses MDL's powerful list and vector manipulation features to map input strings to game actions. It also handles errors gracefully, providing feedback when commands are ambiguous or invalid. This routine exemplifies the developers' innovative approach to creating an immersive text-based experience. By enabling players to interact with the game world using natural language, Zork set a new standard for interactivity in games. The techniques pioneered here influenced later adventure games, such as Infocom's titles, and contributed to the evolution of user-friendly interfaces in software design."
  - id: "gwim-get-what-i-mean"
    line_start: 253
    line_end: 282
    title: "GWIM: Get What I Mean"
    wikipedia_url: "https://en.wikipedia.org/wiki/Natural_language_processing"
    image_url: ""
    image_caption: ""
    content: "The 'GWIM' routine is an early attempt at intelligent input parsing, designed to interpret ambiguous player commands. It uses bit flags and object lists to identify visible and manipulable objects in the game world. The routine checks whether objects are accessible, takeable, or contained within other objects, and resolves ambiguities by selecting the most plausible interpretation. This innovative approach reflects the developers' commitment to creating a responsive and intuitive gameplay experience. The concept of 'Get What I Mean' influenced the development of more advanced natural language processing systems in games and software. It also inspired later efforts to create AI-driven interfaces capable of understanding user intent."
  - id: "object-search-and-retrieval"
    line_start: 358
    line_end: 388
    title: "Object search and retrieval routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'GET-OBJECT' routine is responsible for locating objects in the game world based on player input. It searches through various lists, including the player's inventory, the current room, and nearby containers, to find objects matching the specified name and adjective. The routine handles edge cases, such as objects that are out of reach or obscured, and provides feedback when objects cannot be found. This functionality is crucial for enabling complex interactions in Zork's richly detailed game world. The efficient search algorithm demonstrates the developers' deep understanding of the PDP-10's capabilities and MDL's strengths. Techniques from this routine influenced object management systems in later games and interactive fiction engines, ensuring that players could interact with virtual worlds in meaningful ways."
  - id: "fwim-find-what-i-mean"
    line_start: 421
    line_end: 443
    title: "FWIM: Find What I Mean"
    wikipedia_url: "https://en.wikipedia.org/wiki/Natural_language_processing"
    image_url: ""
    image_caption: ""
    content: "The 'FWIM' routine complements 'GWIM' by focusing on object manipulation. It identifies objects that are visible and either takeable or contained within accessible containers. The routine uses MDL's list processing capabilities to traverse object hierarchies and resolve ambiguities. This functionality is essential for interpreting player commands like 'take the sword from the chest', ensuring that the game responds correctly to complex inputs. The 'Find What I Mean' concept reflects the developers' pioneering efforts to create a natural and intuitive interface for interacting with the game world. The techniques developed here influenced later advancements in natural language processing and AI-driven interfaces, paving the way for more sophisticated systems in gaming and beyond."

---


<SETG WORDS <OR <GET WORDS OBLIST> <MOBLIST WORDS 23>>>

<SETG OBJECT-OBL <OR <GET OBJECTS OBLIST> <MOBLIST OBJECTS 23>>>

<SETG ACTIONS <MOBLIST ACTIONS 17>>

<SETG ORPHANS [<> <> <> <> <>]>

<COND (<OR <LOOKUP "COMPILE" <ROOT>>
	   <GASSIGNED? GROUP-GLUE>>)
      (<SETG PREPVEC
	     [<CHTYPE [<FIND-PREP "WITH"> <FIND-OBJ "#####">] PHRASE>
	      <CHTYPE [<FIND-PREP "WITH"> <FIND-OBJ "#####">] PHRASE>]>
       <SETG PREP2VEC
	     [<CHTYPE [<FIND-PREP "WITH"> <FIND-OBJ "#####">] PHRASE>
	      <CHTYPE [<FIND-PREP "WITH"> <FIND-OBJ "#####">] PHRASE>]>)>

<DEFINE SPARSE SPAROUT (SV VB
			"AUX" (WORDS ,WORDS) (OBJOB ,OBJECT-OBL) (PV ,PRSVEC)
			      (PVR <PUT <PUT <REST .PV> 1 <>> 2 <>>)
			      (ACTIONS ,ACTIONS) (DIRS ,DIRECTIONS) (ORPH ,ORPHANS)
			      (ORFL <OFLAG .ORPH>) (PRV ,PREPVEC) (HERE ,HERE)
			      (ACTION <>) (PREP <>) NPREP (ADJ <>) ATM AVAL OBJ
			      PPREP LOBJ VAL)
   #DECL ((SV) <VECTOR [REST STRING]> (VB ORFL) <OR ATOM FALSE>
	  (ACTIONS WORDS OBJOB DIRS) OBLIST (PV ORPH PRV PVR) VECTOR
	  (ATM) <OR ATOM FALSE> (HERE) ROOM (ACTION) <OR FALSE ACTION>
	  (NPREP PREP) <OR FALSE PREP> (ADJ) <OR FALSE ADJECTIVE> (AVAL) ANY
	  (LOBJ) ANY (OBJ) <OR FALSE OBJECT> (PPREP) PHRASE)
   <SET VAL
    <MAPF <>
     <FUNCTION (X) 
	#DECL ((X) STRING)
	<COND
	 (<EMPTY? .X> <MAPLEAVE T>)
	 (<AND <NOT .ACTION>
	       <SET ATM <LOOKUP .X .ACTIONS>>>
	  <SET ACTION ,.ATM>)
	 (<AND <NOT .ACTION>
	       <SET ATM <LOOKUP .X .DIRS>>>
	  <PUT .PV 1 ,WALK!-WORDS>
	  <PUT .PV 2 ,.ATM>
	  <RETURN WIN .SPAROUT>)
	 (<AND <SET ATM <LOOKUP .X .WORDS>>
	       <COND (<TYPE? <SET AVAL ,.ATM> PREP>
		      <COND (.PREP
			     <OR .VB <TELL "Double preposition?" 0>>
			     <MAPLEAVE <>>)
			    (<SET PREP .AVAL>)>)
		     (<TYPE? .AVAL ADJECTIVE>
		      <SET ADJ .AVAL>
		      <NOT <AND .ORFL
				<SET ATM <ONAME .ORPH>>
				<SET X <SPNAME .ATM>>>>)
		     (T)>>)
	 (<SET ATM <LOOKUP .X .OBJOB>>
	  <COND
	   (<SET OBJ <GET-OBJECT .ATM .ADJ>>
	    <AND <EMPTY? .PVR>
		 <OR .VB <TELL "Too many objects specified?" 0>>
		 <MAPLEAVE <>>>
	    <PUT .PVR
		 1
		 <COND (.PREP
			<SET PPREP <1 .PRV>>
			<SET PRV <REST .PRV>>
			<PUT .PPREP 1 .PREP>
			<SET PREP <>>
			<PUT .PPREP 2 .OBJ>)
		       (.OBJ)>>
	    <SET PVR <REST .PVR>>)
	   (T
	    <COND (<EMPTY? .OBJ>
		   <OR .VB
		       <COND (<LIT? .HERE>
			      <TELL "I can't see a" 0>
			      <COND (.ADJ
				     <TELL " " 0 <PRSTR <CHTYPE .ADJ ATOM>>>)>
			      <TELL " " 0 <PRSTR .ATM> " here.">)
			     (<TELL "It is too dark in here to see." 0>)>>)
		  (<==? .OBJ ,NEFALS2>
		   <OR .VB
		       <TELL "I can't reach that from inside the "
			     0
			     <ODESC2 <AVEHICLE ,WINNER>>
			     ".">>)
		  (<OR .VB <TELL "Which " 0 <PRSTR .ATM> "?">>
		   <ORPHAN T
			   <OR .ACTION <AND .ORFL <OVERB .ORPH>>>
			   <2 .PV>
			   .PREP
			   .ATM>)>
	    <MAPLEAVE <>>)>
	  <SET ADJ <>>
	  T)
	 (<OR .VB <TELL "I don't know the word " 0 .X>> <MAPLEAVE <>>)>>
     .SV>>
   <COND (.VAL
	  <COND (<AND <NOT .ACTION>
		      <NOT <SET ACTION <AND .ORFL <OVERB .ORPH>>>>>
		 <OR .VB
		     <COND (<TYPE? <2 .PV> OBJECT>
			    <TELL "What should I do with the "
				  0
				  <ODESC2 <2 .PV>>
				  "?">)
			   (<TELL "Huh?" 0>)>>
		 <ORPHAN T <> <2 .PV>>
		 <>)
		(<AND <PUT .PV 1 .ACTION> .ADJ>
		 <OR .VB <TELL "Dangling adjective?" 0>>
		 <>)
		(<AND .ORFL
		      <SET NPREP <OPREP .ORPH>>
		      <SET OBJ <2 .PV>>
		      <PUT <SET PPREP <1 .PRV>> 1 .NPREP>
		      <PUT .PPREP 2 .OBJ>
		      <COND (<SET OBJ <OSLOT1 .ORPH>>
			     <PUT .PV 2 .OBJ>
			     <PUT .PV 3 .PPREP>)
			    (<PUT .PV 2 .PPREP>)>
		      <>>)
		(.PREP
		 <AND <TYPE? <SET LOBJ <1 <BACK .PVR>>> OBJECT>
		      <TOP <PUT <BACK .PVR>
				1
				<PUT <PUT <1 .PRV> 1 .PREP> 2 .LOBJ>>>>)
		(.PV)>)>>

<DEFINE SP (STR) <PARSE <LEX .STR> <>>>

<DEFINE ORPHAN ("OPTIONAL" (FLAG <>) (ACTION <>) (SLOT1 <>) (PREP <>) (NAME
								       <>)) 
	#DECL ((FLAG) <OR ATOM FALSE> (NAME) <OR ATOM FALSE>)
	<PUT <PUT <PUT <PUT <PUT ,ORPHANS ,ONAME .NAME> ,OPREP .PREP>
		       ,OSLOT1
		       .SLOT1>
		  ,OVERB
		  .ACTION>
	     ,OFLAG
	     .FLAG>>

<DEFINE SYN-MATCH (PV
		   "AUX" (ACTION <1 .PV>) (OBJS <REST .PV>) (O1 <1 .OBJS>)
			 (O2 <2 .OBJS>) (DFORCE <>) (DRIVE <>) (GWIM <>) SYNN)
   #DECL ((ACTION) ACTION (PV OBJS) VECTOR (DRIVE DFORCE) <OR FALSE SYNTAX>
	  (O1 O2) <OR FALSE OBJECT PHRASE> (SYNN) VARG (GWIM) <OR FALSE OBJECT>)
   <COND
    (<MAPF <>
      <FUNCTION (SYN) 
	 #DECL ((SYN) SYNTAX)
	 <COND
	  (<SYN-EQUAL <SYN1 .SYN> .O1>
	   <COND (<SYN-EQUAL <SYN2 .SYN> .O2>
		  <AND <SFLIP .SYN> <PUT .OBJS 1 .O2> <PUT .OBJS 2 .O1>>
		  <MAPLEAVE <TAKE-IT-OR-LEAVE-IT .SYN <PUT .PV 1 <SFCN .SYN>>>>)
		 (<NOT .O2>
		  <COND (<SDRIVER .SYN> <SET DFORCE .SYN>) (<SET DRIVE .SYN>)>
		  <>)>)
	  (<NOT .O1>
	   <COND (<SDRIVER .SYN> <SET DFORCE .SYN>) (<SET DRIVE .SYN>)>
	   <>)>>
      <VDECL .ACTION>>)
    (<SET DRIVE <OR .DFORCE .DRIVE>>
     <COND (<AND <SET SYNN <SYN1 .DRIVE>>
		 <NOT .O1>
		 <NOT <0? <VBIT .SYNN>>>
		 <NOT <ORFEO .SYNN .OBJS>>
		 <NOT <SET O1 <SET GWIM <GWIM-SLOT 1 .SYNN .ACTION .OBJS>>>>>
	    <ORPHAN T .ACTION <> <VPREP .SYNN>>
	    <ORTELL .SYNN .ACTION .GWIM>)
	   (<AND <SET SYNN <SYN2 .DRIVE>>
		 <NOT .O2>
		 <NOT <0? <VBIT .SYNN>>>
		 <NOT <GWIM-SLOT 2 .SYNN .ACTION .OBJS>>>
	    <ORPHAN T .ACTION .O1 <VPREP .SYNN>>
	    <ORTELL .SYNN .ACTION .GWIM>)
	   (<TAKE-IT-OR-LEAVE-IT .DRIVE <PUT .PV 1 <SFCN .DRIVE>>>)>)
    (<TELL "I can't make sense out of that." 0> <>)>>

<DEFINE TAKE-IT-OR-LEAVE-IT (SYN PV "AUX" (PV1 <2 .PV>) (PV2 <3 .PV>) OBJ VARG) 
	#DECL ((SYN) SYNTAX (PV) VECTOR (PV1 PV2) <OR FALSE OBJECT PHRASE>
	       (OBJ) <OR FALSE OBJECT> (VARG) VARG)
	<PUT .PV
	     2
	     <SET OBJ
		  <COND (<TYPE? .PV1 OBJECT> .PV1)
			(<TYPE? .PV1 PHRASE> <2 .PV1>)>>>
	<COND (<VTRNN <SET VARG <SYN1 .SYN>> ,VRBIT>
	       <TAKE-IT .OBJ .PV .VARG>)>
	<PUT .PV
	     3
	     <SET OBJ
		  <COND (<TYPE? .PV2 OBJECT> .PV2)
			(<TYPE? .PV2 PHRASE> <2 .PV2>)>>>
	<COND (<VTRNN <SET VARG <SYN2 .SYN>> ,VRBIT>
	       <TAKE-IT .OBJ .PV .VARG>)>
	T>

<DEFINE TAKE-IT (OBJ VEC VRB "AUX" (SAV1 <1 .VEC>) (SAV2 <2 .VEC>)) 
	#DECL ((OBJ) OBJECT (VEC) VECTOR (SAV1) VERB (SAV2) <OR FALSE OBJECT>
	       (VRB) VARG)
	<COND (<AND <SEARCH-LIST <OID .OBJ> <ROBJS ,HERE> <>>
		    <OR <CAN-TAKE? .OBJ> <NOT <VTRNN .VRB ,VTBIT>>>>
	       <PUT .VEC 1 ,TAKE!-WORDS>
	       <PUT .VEC 2 .OBJ>
	       <TAKE T>
	       <PUT .VEC 1 .SAV1>
	       <PUT .VEC 2 .SAV2>)>>

<DEFINE ORFEO (SYN OBJS "AUX" (ORPH ,ORPHANS) (ORFL <OFLAG .ORPH>) SLOT1) 
	#DECL ((SYN) VARG (OBJS ORPH) VECTOR (ORFL) <OR ATOM FALSE>
	       (SLOT1) <OR FALSE PHRASE OBJECT>)
	<COND (<NOT .ORFL> <>)
	      (<SET SLOT1 <OSLOT1 .ORPH>>
	       <AND <SYN-EQUAL .SYN .SLOT1> <PUT .OBJS 1 .SLOT1>>)>>

<DEFINE ORTELL (VARG ACTION GWIM "AUX" (PREP <VPREP .VARG>) SP) 
	#DECL ((VARG) VARG (ACTION) ACTION (PREP) <OR FALSE PREP> (SP) STRING
	       (GWIM) <OR FALSE OBJECT>)
	<COND (.PREP
	       <AND .GWIM
		    <TELL <VSTR .ACTION> 0 " ">
		    <TELL <ODESC2 .GWIM> 0 " ">>
	       <TELL <PRSTR <CHTYPE .PREP ATOM>> 0 " what?">)
	      (<TELL <VSTR .ACTION> 0 " what?">)>
	<>>

<DEFINE PRSTR (ATM "AUX" SP) 
	#DECL ((ATM) ATOM (SP) STRING)
	<FOOSTR <SET SP <SPNAME .ATM>> <BACK ,SCRSTR <LENGTH .SP>> <>>>

<DEFINE FOOSTR (NAM STR "OPTIONAL" (1ST T))
    #DECL ((STR NAM) STRING (1ST) <OR ATOM FALSE>)
    <MAPR <>
	<FUNCTION (X Y)
	    #DECL ((X Y) STRING)
	    <COND (<AND .1ST <==? .X .NAM>>
		   <PUT .Y 1 <1 .X>>)
		  (<PUT .Y 1 <CHTYPE <+ 32 <ASCII <1 .X>>> CHARACTER>>)>>
	.NAM
	.STR>
    .STR>

<DEFINE GWIM-SLOT (FX VARG ACTION OBJS "AUX" OBJ) 
	#DECL ((FX) FIX (VARG) VARG (ACTION) ACTION (OBJS) VECTOR
	       (OBJ) <OR FALSE OBJECT>)
	<COND (<SET OBJ <GWIM <VBIT .VARG> .VARG .ACTION>>
	       <PUT .OBJS .FX .OBJ>
	       .OBJ)>>

"GET WHAT I MEAN - GWIM
 TAKES BIT TO CHECK AND WHERE TO CHECK AND WINS TOTALLY"

<DEFINE GWIM (BIT FWORD ACTION
	      "AUX" (AOBJ <VTRNN .FWORD ,VABIT>) (NTAKE <VTRNN .FWORD ,VTBIT>)
		    (ROBJ <VTRNN .FWORD ,VRBIT>) (OBJ <>) NOBJ (PV ,PRSVEC)
		    SAVOBJ (AV <AVEHICLE ,WINNER>) SF)
	#DECL ((BIT) FIX (NTAKE ROBJ AOBJ) <OR ATOM FALSE>
	       (OBJ NOBJ AV) <OR OBJECT FALSE> (PV) VECTOR
	       (SAVOBJ) <OR FALSE OBJECT PHRASE> (FWORD) VARG (ACTION) ACTION)
	<AND .AOBJ <SET OBJ <FWIM .BIT <AOBJS ,WINNER> .NTAKE>>>
	<COND (.ROBJ
	       <COND (<AND <SET NOBJ <FWIM .BIT <ROBJS ,HERE> .NTAKE>>
			   <OR <NOT .AV>
			       <==? .AV .NOBJ>
			       <MEMQ .NOBJ <OCONTENTS .AV>>
			       <TRNN .NOBJ ,FINDMEBIT>>>
		      <COND (<AND <OR <SET SAVOBJ <2 .PV>> T>
				  <NOT .OBJ>
				  <OR <SET SF <1 .PV>> T>
				  <PUT .PV 1 ,TAKE!-WORDS>
				  <PUT .PV 2 .NOBJ>
				  <OR <==? .ACTION <1 .PV>> .NTAKE <TAKE>>
				  <PUT .PV 2 .SAVOBJ>
				  <PUT .PV 1 .SF>
				  .NOBJ>)
			    (<PUT .PV 2 .SAVOBJ> <>)>)
		     (<OR .NOBJ <NOT <EMPTY? .NOBJ>>> ,NEFALS)
		     (.OBJ)>)
	      (.OBJ)>>

;" [ON (,BIT ,BIT ,BIT ROBJS NO-TAKE ...) [ATOM!-WORDS <FCN>] DRIVER]"

<DEFINE MAKE-ACTION ("TUPLE" SPECS "AUX" VV SUM (PREP <>) ATM) 
   <CHTYPE
    <MAPF ,UVECTOR
     <FUNCTION (SP "AUX" (SYN <IVECTOR 5 <>>) (WHR 1)) 
	     #DECL ((SP) VECTOR (SYN) VECTOR (WHR) FIX)
	     <MAPF <>
		   <FUNCTION (ITM) 
			   <COND (<TYPE? .ITM STRING>
				  <SET PREP <FIND-PREP .ITM>>)
				 (<AND <==? .ITM OBJ>
				       <SET ITM '(-1)>
				       <>>)
				 (<TYPE? .ITM LIST>
				  <SET VV <IVECTOR 3>>
				  <PUT .VV 1 <1 .ITM>>
				  <PUT .VV 2 .PREP>
				  <SET SUM 0>
				  <SET PREP <>>
				  <AND <MEMQ AOBJS .ITM>
				       <SET SUM <+ .SUM ,VABIT>>>
				  <AND <MEMQ ROBJS .ITM>
				       <SET SUM <+ .SUM ,VRBIT>>>
				  <AND <MEMQ NO-TAKE .ITM>
				       <SET SUM <+ .SUM ,VTBIT>>>
				  <AND <MEMQ = .ITM>
				       <SET SUM <+ .SUM ,VXBIT>>>
				  <PUT .VV 3 .SUM>
				  <PUT .SYN .WHR <CHTYPE .VV VARG>>
				  <SET WHR <+ .WHR 1>>)
				 (<TYPE? .ITM VECTOR>
				  <COND (<GASSIGNED? <SET ATM <ADD-WORD <1 .ITM>>>>
					 <PUT .SYN ,SFCN ,.ATM>)
					(<PUT .SYN
					      ,SFCN
					      <SETG <SET ATM <ADD-WORD <1 .ITM>>>
						    <CHTYPE [.ATM <2 .ITM>] VERB>>>)>)
				 (<==? .ITM DRIVER> <PUT .SYN ,SDRIVER T>)
				 (<==? .ITM FLIP> <PUT .SYN ,SFLIP T>)>>
		   .SP>
	     <OR <SYN1 .SYN> <PUT .SYN ,SYN1 ,EVARG>>
	     <OR <SYN2 .SYN> <PUT .SYN ,SYN2 ,EVARG>>
	     <CHTYPE .SYN SYNTAX>>
     .SPECS>
    VSPEC>>

<SETG EVARG <CHTYPE [0 <> 0] VARG>>

<DEFINE SYN-EQUAL (VARG POBJ "AUX" (VBIT <VBIT .VARG>))
    #DECL ((VARG) VARG (POBJ) <OR FALSE PHRASE OBJECT> (VBIT) FIX)
    <COND (<TYPE? .POBJ PHRASE>
	   <AND <==? <VPREP .VARG> <1 .POBJ>>
	        <OR <NOT <VTRNN .VARG ,VXBIT>>
	            <TRNN <2 .POBJ> .VBIT>>>)
	  (<TYPE? .POBJ OBJECT>
	   <AND <NOT <VPREP .VARG>>
		<OR <NOT <VTRNN .VARG ,VXBIT>>
		    <TRNN .POBJ .VBIT>>>)
	  (<AND <NOT .POBJ> <0? .VBIT>>)>>

<SETG DIRECTIONS <MOBLIST DIRECTIONS>>

<DEFINE EPARSE (PV VB "AUX" VAL) 
	#DECL ((VAL) ANY (PV) <VECTOR [REST STRING]> (VB) <OR ATOM FALSE>)
	<COND (<SET VAL <SPARSE .PV .VB>>
	       <COND (<OR <==? .VAL WIN> <SYN-MATCH .VAL>> <ORPHAN <>>)
		     (<OR .VB <TELL "">> <>)>)
	      (<OR .VB <TELL "">> <>)>>

<SETG SCRSTR <REST <ISTRING 5> 5>>

<SETG SSV <IVECTOR 10 <>>>

"GET-OBJECT:  TAKES ATOM (FROM OBJECTS OBLIST), VERBOSITY FLAG.  GROVELS
OVER: ,STARS; ,HERE; ,WINNER LOOKING FOR OBJECT (LOOKS DOWN TO ONE LEVEL
OF CONTAINMENT).  RETURNS <> IF NOT FOUND OR FOUND MORE THAN ONE, THE
OBJECT OTHERWISE."

<DEFINE GET-OBJECT GET-OBJ (OBJNAM ADJ
			    "AUX" OBJ (OOBJ <>) (HERE ,HERE)
				  (AV <AVEHICLE ,WINNER>) (CHOMP <>))
	#DECL ((OOBJ OBJ AV) <OR OBJECT FALSE> (OBJNAM) ATOM (HERE) ROOM
	       (ADJ) <OR ADJECTIVE FALSE> (CHOMP) <OR ATOM FALSE>
	       (OBJL) <OR FALSE <LIST [REST OBJECT]>>)
	<COND (<SET OBJ <SEARCH-LIST .OBJNAM ,STARS .ADJ>> <SET OOBJ .OBJ>)
	      (<NOT <EMPTY? .OBJ>> <RETURN ,NEFALS .GET-OBJ>)>
	<COND (<AND <LIT? .HERE>
		    <SET OBJ <SEARCH-LIST .OBJNAM <ROBJS ,HERE> .ADJ>>>
	       <COND (<AND .AV
			   <N==? .OBJ .AV>
			   <NOT <MEMQ .OBJ <OCONTENTS .AV>>>
			   <NOT <TRNN .OBJ ,FINDMEBIT>>>
		      <SET CHOMP T>)
		     (.OOBJ <RETURN ,NEFALS .GET-OBJ>)
		     (<SET OOBJ .OBJ>)>)
	      (<AND <NOT .OBJ> <NOT <EMPTY? .OBJ>>> <RETURN ,NEFALS .GET-OBJ>)>
	<COND (.AV
	       <COND (<SET OBJ <SEARCH-LIST .OBJNAM <OCONTENTS .AV> .ADJ>>
		      <SET CHOMP <>>
		      <SET OOBJ .OBJ>)
		     (<NOT <EMPTY? .OBJ>> <RETURN ,NEFALS .GET-OBJ>)>)>
	<COND (<SET OBJ <SEARCH-LIST .OBJNAM <AOBJS ,WINNER> .ADJ>>
	       <COND (.OOBJ ,NEFALS) (.OBJ)>)
	      (<NOT <EMPTY? .OBJ>> ,NEFALS)
	      (.CHOMP ,NEFALS2)
	      (.OOBJ)>>

"SEARCH-LIST:  TAKES OBJECT NAME, LIST OF OBJECTS, AND VERBOSITY.
IF FINDS ONE FROB UNDER THAT NAME ON LIST, RETURNS IT.  SEARCH IS TO
ONE LEVEL OF CONTAINMENT."

<SETG NEFALS #FALSE (1)>

<SETG NEFALS2 #FALSE (2)>

<DEFINE SEARCH-LIST SL (OBJNAM SLIST ADJ "OPTIONAL" (FIRST? T) "AUX" (OOBJ <>)
			(NEFALS ,NEFALS) NOBJ) 
   #DECL ((OBJNAM) ATOM (SLIST) <LIST [REST OBJECT]>
	  (OOBJ NOBJ) <OR FALSE OBJECT> (ADJ) <OR FALSE ADJECTIVE>
	  (FIRST?) <OR ATOM FALSE> (NEFALS) FALSE)
   <MAPF <>
    <FUNCTION (OBJ) 
	    #DECL ((OBJ) OBJECT)
	    <COND (<THIS-IT? .OBJNAM .OBJ .ADJ>
		   <COND (.OOBJ <RETURN .NEFALS .SL>) (<SET OOBJ .OBJ>)>)>
	    <COND
	     (<AND <OVIS? .OBJ>
		   <OR <OOPEN? .OBJ> <TRANSPARENT? .OBJ>>
		   <OR .FIRST? <TRNN .OBJ ,SEARCHBIT>>>
	      <COND (<SET NOBJ <SEARCH-LIST .OBJNAM <OCONTENTS .OBJ> .ADJ <>>>
		     <COND (.OOBJ <RETURN .NEFALS .SL>)
			   (<SET OOBJ .NOBJ>)>)
		    (<==? .NOBJ .NEFALS> <RETURN .NEFALS .SL>)>)>>
    .SLIST>
   .OOBJ>

"FWIM:  TAKE LIST OF FROBS, FIND ONE THAT CAN BE MANIPULATED (VISIBLE
AND TAKEABLE, OR VISIBLE AND IN SOMETHING THAT'S VISIBLE AND OPEN)"

<DEFINE FWIM DWIM (BIT OBJS NO-TAKE "AUX" (NOBJ <>)) 
   #DECL ((NO-TAKE) <OR ATOM FALSE> (BIT) FIX (OBJS) <LIST [REST OBJECT]>
	  (NOBJ) <OR FALSE OBJECT>)
   <MAPF <>
    <FUNCTION (X) 
	    #DECL ((X) OBJECT)
	    <COND (<AND <OVIS? .X> <OR .NO-TAKE <CAN-TAKE? .X>> <TRNN .X .BIT>>
		   <COND (.NOBJ <RETURN ,NEFALS .DWIM>)>
		   <SET NOBJ .X>)>
	    <COND
	     (<AND <OVIS? .X> <OOPEN? .X>>
	      <MAPF <>
		    <FUNCTION (X) 
			    #DECL ((X) OBJECT)
			    <COND (<AND <OVIS? .X> <TRNN .X .BIT>>
				   <COND (.NOBJ <RETURN ,NEFALS .DWIM>)
					 (<SET NOBJ .X>)>)>>
		    <OCONTENTS .X>>)>>
    .OBJS>
   .NOBJ>

 