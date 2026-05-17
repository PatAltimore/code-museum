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
description: "This file is a cornerstone of Zork's natural language parsing system, showcasing the ingenuity of early text-based game development."

summary:
  - point: "MDL's Lisp-like syntax enables complex data manipulation for Zork's text parsing"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL"
  - point: "Zork's parser uses object lists and prepositions to interpret player commands"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "The game ran on the DEC PDP-10, a mainframe pivotal to early computing"
    link: "https://en.wikipedia.org/wiki/PDP-10"
    link_label: "PDP-10"
  - point: "ARPANET allowed players to access Zork remotely during its development"
    link: "https://en.wikipedia.org/wiki/ARPANET"
    link_label: "ARPANET"
  - point: "MIT's ITS system provided the collaborative environment for Zork's creation"
    link: "https://en.wikipedia.org/wiki/Incompatible_Timesharing_System"
    link_label: "ITS"

enhancements:
  - id: "global-symbol-initialization"
    line_start: 2
    line_end: 8
    title: "Global symbols for parsing: the game's backbone"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Zork-map.jpg/330px-Zork-map.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Zork map (CC BY 4.0)"
    content: "The opening lines establish global variables that serve as the foundation for Zork's text parsing system. 'WORDS', 'OBJECT-OBL', 'ACTIONS', and 'ORPHANS' are initialized to hold lists of words, objects, actions, and orphaned commands respectively. These symbols are the scaffolding for interpreting player input, enabling the game to match typed commands to in-game entities and actions. In 1977, the challenge was to create a system that could understand natural language on hardware with limited memory and processing power. The DEC PDP-10, running ITS, was a mainframe with 36-bit words and a maximum of 256K words of memory—constraints that forced the authors to be resourceful. The use of 'MOBLIST' (a MDL construct for creating lists) reflects the Lisp-inspired nature of MDL, which was ideal for symbolic computation. These global lists would later be populated with game-specific data, allowing Zork to simulate a rich and interactive world. The decision to centralize these lists as global variables ensured efficiency and modularity, a design choice that influenced future text-based games and interactive fiction engines."
  - id: "conditional-preposition-handling"
    line_start: 10
    line_end: 17
    title: "Handling prepositions: parsing nuance in commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "This section introduces conditional logic to handle prepositions in player commands. The 'PREPVEC' and 'PREP2VEC' arrays are initialized with placeholders for phrases like 'WITH #####', where the game expects an object to follow the preposition. This anticipates the need to parse complex commands such as 'take the sword with the scabbard.' In the late 1970s, natural language processing was in its infancy, and Zork's authors were pioneering techniques to make text-based interaction feel intuitive. The use of placeholders ('#####') reflects the need for flexibility in parsing incomplete or ambiguous input. The conditional check for 'COMPILE' or 'GROUP-GLUE' suggests that these routines were part of a larger modular system, possibly enabling dynamic updates to the game's vocabulary or syntax during development. This approach laid the groundwork for more sophisticated parsers in later games, influencing the evolution of interactive fiction and even modern conversational AI."
  - id: "sparse-parsing-subroutine"
    line_start: 19
    line_end: 129
    title: "Sparse parsing: decoding player input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'SPARSE' subroutine is a centerpiece of Zork's text parser, responsible for breaking down player input into actionable components. It takes a string of words ('SV') and a verb ('VB') and attempts to match them to objects, actions, and prepositions stored in the game's global lists. The subroutine uses nested conditional statements to handle various cases, such as identifying actions, directions, and objects, and resolving ambiguities. In the late 1970s, the authors—Anderson, Blank, Daniels, and Lebling—were working on the PDP-10 under ITS, leveraging MDL's symbolic processing capabilities to create a parser that could interpret natural language commands. The complexity of this subroutine reflects the ambition to make Zork feel like a living world, where players could interact with objects and characters using plain English. The use of 'MAPF' (a MDL function for mapping over lists) and 'LOOKUP' showcases the Lisp-like elegance of MDL, enabling concise yet powerful operations on data structures. This parsing logic became a hallmark of interactive fiction, influencing not only Zork's successors but also modern text-based games and conversational interfaces."
  - id: "orphaned-command-handling"
    line_start: 133
    line_end: 142
    title: "Orphaned commands: resolving player ambiguity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The 'ORPHAN' subroutine is designed to handle 'orphaned' commands—situations where the player's input is incomplete or ambiguous. For example, if a player types 'take' without specifying an object, the game stores the verb and waits for additional context. This functionality reflects the authors' understanding of human interaction, anticipating that players might not always provide perfectly structured commands. In the late 1970s, this was a novel approach to making text-based games more forgiving and user-friendly. The subroutine uses 'PUT' to store the orphaned verb, preposition, and object in the global 'ORPHANS' list, allowing the parser to revisit them later. This design choice highlights the authors' commitment to creating an immersive experience, where the game feels responsive and intelligent. The concept of handling incomplete input has since become a standard feature in interactive fiction and conversational AI, demonstrating the lasting impact of Zork's innovations."
  - id: "syntax-matching-subroutine"
    line_start: 144
    line_end: 180
    title: "Syntax matching: bridging input and action"
    wikipedia_url: "https://en.wikipedia.org/wiki/Syntax_(programming_languages)"
    image_url: ""
    image_caption: ""
    content: "The 'SYN-MATCH' subroutine is a critical component of Zork's parser, tasked with matching player input to predefined syntactic patterns. It takes a parsed vector ('PV') and attempts to align it with known actions and objects, using auxiliary variables to track matches and resolve ambiguities. The subroutine employs 'MAPF' to iterate over syntax rules and 'SYN-EQUAL' to compare input against expected patterns. In the context of 1977 computing, this was a groundbreaking effort to simulate natural language understanding on a PDP-10 mainframe. The authors drew inspiration from linguistic theory and early AI research at MIT, where MDL was developed as a tool for symbolic computation. The ability to match syntax dynamically allowed Zork to interpret a wide range of player commands, contributing to its reputation as a sophisticated and engaging game. This subroutine exemplifies the intersection of computer science and linguistics, a field that has since evolved into modern natural language processing."
  - id: "get-object-subroutine"
    line_start: 363
    line_end: 390
    title: "Get-object: finding items in Zork's world"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'GET-OBJECT' subroutine is responsible for locating objects in Zork's virtual world based on player input. It takes an object name ('OBJNAM') and an optional adjective ('ADJ') to identify items in the current room, the player's inventory, or nearby containers. The subroutine uses 'SEARCH-LIST' to traverse object lists, checking visibility, accessibility, and containment. In 1977, the authors faced the challenge of simulating a rich, interactive environment on the PDP-10, a machine with limited resources. Their solution was to create a hierarchical system of object lists, allowing the game to efficiently manage and search through hundreds of items. The use of 'SEARCH-LIST' reflects the influence of Lisp-like programming paradigms, emphasizing recursion and symbolic computation. This subroutine was pivotal in making Zork's world feel alive, enabling players to interact with objects in a natural and intuitive way. The concept of object search and manipulation became a cornerstone of interactive fiction, influencing countless games and even modern virtual assistants."
  - id: "search-list-subroutine"
    line_start: 400
    line_end: 419
    title: "Search-list: recursive object lookup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Recursion_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The 'SEARCH-LIST' subroutine implements a recursive algorithm to locate objects within a list, including their contents if they are containers. It takes an object name ('OBJNAM'), a list of objects ('SLIST'), and an optional adjective ('ADJ') to refine the search. The subroutine uses 'MAPF' to iterate over the list and checks visibility, openness, and containment to determine if the object matches the criteria. In the late 1970s, recursion was a powerful tool for solving complex problems on limited hardware, and MDL's Lisp-like syntax made it particularly suited for such tasks. The authors leveraged recursion to simulate a hierarchical world, where objects could be nested within containers, creating a sense of depth and realism. This approach influenced not only Zork's successors but also the broader field of computer science, where recursive algorithms remain a fundamental concept. The ability to search and manipulate nested objects was a key innovation that set Zork apart from earlier text-based games."

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