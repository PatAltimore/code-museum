---
title: "np.93"
program: "Zork"
program_slug: "zork"
file_path: "zork/lcf/np.93"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/lcf/np.93"
year: 1978
author: "Marc Blank"
slug: "np"
order: 2
description: "The natural language parser — 93 versions of the system that taught computers to understand English commands"

summary:
  - point: "Version 93 of the parser — the file suffix is the literal revision count"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork history"
  - point: "SPARSE is the main parse loop: it classifies each word as action, direction, preposition, adjective, or object"
    link: "https://en.wikipedia.org/wiki/Natural_language_processing"
    link_label: "Natural language processing"
  - point: "GWIM (Get What I Mean) silently resolves unambiguous objects so the player never has to repeat themselves"
    link: "https://en.wikipedia.org/wiki/DWIM"
    link_label: "DWIM — Do What I Mean"

enhancements:
  - id: "sparse"
    line_start: 19
    line_end: 98
    title: "SPARSE: The Main Parse Loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parsing"
    image_url: ""
    image_caption: ""
    content: "SPARSE is the function that turns a vector of word strings into a structured parse result. It walks the input word by word, checking each against four different lookup tables in order: the ACTIONS oblist (verbs), the DIRECTIONS oblist (go north), the WORDS oblist (prepositions, adjectives), and the OBJECT-OBL oblist (nouns). When a word matches a noun, it calls GET-OBJECT to search the player's inventory and the current room. If GET-OBJECT returns false, SPARSE either emits an error — 'I can't see a X here' or 'It is too dark in here to see' — or falls through to the iconic fallback on line 97: 'I don't know the word X.' This single error message, generated for any unrecognized input, set a template for conversational interface design that persists to the present day. Other adventure games of the era replied with 'WHAT?' or crashed; Zork replied like a patient but slightly exasperated human."

  - id: "error-messages"
    line_start: 74
    line_end: 97
    title: "The Error Messages That Became Canonical"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "Three error conditions in SPARSE became part of computing culture. 'I can't see a X here' (line 77) is reported when the parser recognizes a noun but can't find the object in scope — a distinction between vocabulary and world state that previous parsers conflated. 'It is too dark in here to see' (line 81) is reported when the player is in an unlit room — the parser is aware of lighting. 'I don't know the word X' (line 97) covers everything the vocabulary doesn't recognize, and the phrasing is deliberate: it is the game admitting its own ignorance rather than blaming the player. Marc Blank later noted that the parser's personality — polite, slightly pedantic, occasionally sarcastic — was as much a design choice as the puzzles themselves. The error messages are the voice of the dungeon."

  - id: "gwim"
    line_start: 253
    line_end: 282
    title: "GWIM: Get What I Mean"
    wikipedia_url: "https://en.wikipedia.org/wiki/DWIM"
    image_url: ""
    image_caption: ""
    content: "GWIM is Zork's implementation of the AI principle 'Do What I Mean.' When the player types a verb without specifying an object — 'TAKE' with no argument — GWIM scans the player's inventory and the current room looking for a single unambiguous candidate that satisfies the verb's requirements (expressed as a VBIT mask from the SYNTAX definition). If it finds exactly one match, it silently supplies the object and the command proceeds. FWIM (Find What I Mean), called internally, handles one level of container transparency: it will look inside open containers in the room. If GWIM finds more than one candidate, it returns NEFALS (a special false value) and the parser asks 'Which X?' The variable name GWIM is a conscious tribute to the MIT AI Lab tradition of DWIM — 'Do What I Mean' — a concept that influenced everything from Emacs to modern autocomplete."

  - id: "orphan"
    line_start: 133
    line_end: 142
    title: "The Orphan System: Remembering Incomplete Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dialogue_system"
    image_url: ""
    image_caption: ""
    content: "The ORPHAN vector is a five-slot global that stores the state of an incomplete or ambiguous command between turns. When the parser can't resolve a command — because it needs a missing object, a clarifying adjective, or a preposition — it calls ORPHAN to save the partial parse: the verb, the slot that needs filling, the preposition, and the noun name being disambiguated. On the next input, SPARSE checks OFLAG (the orphan flag) and tries to use the saved context to complete the previous command. This is the mechanism behind 'What should I do with the X?' and 'Which Y?' — the game is in a suspended parse state, waiting for the player to supply the missing piece. The ORPHANS vector is described in a comment as 'mysterious,' which suggests even the authors found this part of the code subtle."

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
