---
title: "rooms.99"
program: "Zork"
program_slug: "zork"
file_path: "zork/lcf/rooms.99"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/lcf/rooms.99"
year: 1977
author: "Anderson, Blank, Daniels, Lebling"
slug: "rooms"
order: 5
description: "The room definitions in Zork's source code reveal the ingenuity and constraints of early text-based adventure game development on the PDP-10."

summary:
  - point: "MDL language used for Zork, a Lisp dialect developed at MIT"
    link: "https://en.wikipedia.org/wiki/MIT_Dynamic_Modeling_Group"
    link_label: "MIT Dynamic Modeling Group"
  - point: "Game ran on DEC PDP-10 under ITS, accessed via ARPANET"
    link: "https://en.wikipedia.org/wiki/PDP-10"
    link_label: "DEC PDP-10"
  - point: "File versioning system (rooms.99) shows iterative development"
    link: "https://en.wikipedia.org/wiki/Revision_control"
    link_label: "Revision Control"
  - point: "Innovative memory management techniques for garbage collection"
    link: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
    link_label: "Garbage Collection"
  - point: "Dynamic user interaction and storytelling through text-based parsing"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive Fiction"

enhancements:
  - id: "alt-flag-initialization"
    line_start: 4
    line_end: 4
    title: "Setting the ALT-FLAG for game state control"
    wikipedia_url: "https://en.wikipedia.org/wiki/Flag_(computing)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/2023-03-30_Concept-art-for-a-fictive-video-game-Save-Point_by-David-Revoy.jpg/330px-2023-03-30_Concept-art-for-a-fictive-video-game-Save-Point_by-David-Revoy.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "\\"Concept art for a fictive video game Save Point\\" by David Revoy (CC BY 4.0)"
    content: "The line `<SETG ALT-FLAG T>` initializes a global flag used to control alternate behaviors or states within the game. Flags like this were a common technique in early programming to manage state transitions in a system with limited computational resources. In the context of Zork, this flag likely toggles between different modes or conditions in the game logic. The PDP-10, with its limited memory and processing power, required developers to use such efficient mechanisms to manage the game's complexity. This decision reflects the ingenuity of the Zork team in designing a flexible and extensible game engine that could handle dynamic storytelling and user interaction."
  - id: "save-it-subroutine"
    line_start: 8
    line_end: 60
    title: "Saving game state: A lifeline for players"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_(video_gaming)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Structure_and_Interpretation_of_Computer_Programs_p.764a.gif/330px-Structure_and_Interpretation_of_Computer_Programs_p.764a.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Structure and Interpretation of Computer Programs p.764a (CC BY-SA 4.0)"
    content: "The `SAVE-IT` subroutine is a critical component of Zork, allowing players to save their progress. This feature was revolutionary for its time, providing players with the ability to pause their adventure and resume later. The code dynamically determines the save file location based on the system environment, reflecting the adaptability required for running on various PDP-10 configurations under ITS. The subroutine also includes checks for system compatibility and player status, ensuring robustness in a resource-constrained environment. In 1977, the concept of saving game state was still novel, and Zork's implementation set a precedent for future games. The developers, Anderson, Blank, Daniels, and Lebling, were pioneering interactive fiction, and this feature underscored their commitment to creating a user-friendly experience."
  - id: "diverting-garbage-collection"
    line_start: 65
    line_end: 91
    title: "Memory management: Diverting garbage collection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Arpanet_logical_map%2C_march_1977.png/330px-Arpanet_logical_map%2C_march_1977.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "ARPANET logical map circa 1977 (Public domain)"
    content: "The section titled 'Stuff for diverting gc's' introduces a clever mechanism for handling memory allocation and garbage collection in the constrained environment of the PDP-10. The `DIVERT-FCN` subroutine tracks memory usage and dynamically adjusts allocation based on thresholds. When diversion limits are exceeded, garbage collection is triggered to free up memory. This approach reflects the challenges of programming on early hardware, where memory was a scarce resource. The Zork developers had to innovate to ensure the game could run smoothly without exhausting system resources. This technique highlights the team's deep understanding of the PDP-10 architecture and their ability to optimize performance within its limitations."
  - id: "xuname-function"
    line_start: 110
    line_end: 119
    title: "Extracting usernames in a shared environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/ARPANET"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dragon_trees.jpg/330px-Dragon_trees.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Dragon trees (Public domain)"
    content: "The `XUNAME` function extracts the username of the current player from the system environment. This was a critical feature for Zork, which was accessed by multiple users over ARPANET during its development. By identifying players, the game could personalize experiences and track progress. In the late 1970s, ARPANET was a groundbreaking network, connecting researchers and institutions across the United States. Zork's ability to identify players and maintain individual game states showcases the foresight of its developers in leveraging the capabilities of networked computing. This function also reflects the collaborative nature of computing at MIT, where shared resources and user identification were integral to the development process."
  - id: "unspeakable-code-function"
    line_start: 148
    line_end: 158
    title: "Dynamic storytelling: Generating in-game text"
    wikipedia_url: "https://en.wikipedia.org/wiki/Procedural_generation"
    image_url: ""
    image_caption: ""
    content: "The `UNSPEAKABLE-CODE` function dynamically generates descriptive text based on in-game objects. In this case, it constructs a message about a fictional issue of 'US NEWS & DUNGEON REPORT.' This technique exemplifies procedural generation, a method of creating content algorithmically rather than manually. For Zork, procedural text generation allowed for richer storytelling within the constraints of the PDP-10's limited memory. The developers used this approach to enhance immersion, giving players the impression of a living, breathing world. This innovation laid the groundwork for future games that relied heavily on procedural generation to create expansive and varied environments."
  - id: "get-time-function"
    line_start: 176
    line_end: 187
    title: "Tracking playtime: A glimpse into player behavior"
    wikipedia_url: "https://en.wikipedia.org/wiki/Gameplay"
    image_url: ""
    image_caption: ""
    content: "The `GET-TIME` function calculates the total time a player has spent in the game. By comparing the current system time to the initial time recorded when the game started, it provides an accurate measure of play duration. This feature reflects the developers' interest in understanding player behavior and engagement. In the late 1970s, tracking gameplay metrics was uncommon, but Zork's implementation demonstrates the team's forward-thinking approach to game design. Knowing how long players interacted with the game could inform future improvements and expansions. Today, such metrics are standard in the gaming industry, but Zork was among the pioneers in leveraging this data."
  - id: "play-time-function"
    line_start: 189
    line_end: 200
    title: "Displaying playtime: Enhancing player experience"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_design"
    image_url: ""
    image_caption: ""
    content: "The `PLAY-TIME` function builds on `GET-TIME` by displaying the total playtime to the player. It formats the time into hours and minutes, providing a tangible sense of progress and immersion. This feature is a testament to the Zork team's commitment to enhancing the player experience. By showing how long players have been engaged, the game fosters a sense of accomplishment and encourages continued exploration. In the context of 1977, when text-based games were still in their infancy, this level of attention to detail was remarkable. It reflects the team's dedication to creating a game that was not only technically impressive but also deeply engaging for players."

---

; excerpt — first 200 lines of zork/lcf/rooms.99


"GUTS OF FROB:  BASIC VERBS, COMMAND READER, PARSER, VOCABULARY HACKERS."

<SETG ALT-FLAG T>

<GDECL (MUDDLE) FIX (TENEX?) <OR ATOM FALSE> (VERS DEV SNM SCRATCH-STR) STRING>

<DEFINE SAVE-IT ("OPTIONAL" (FN <COND (<L? ,MUDDLE 100>"MADMAN;MADADV SAVE")
				      (T "<MDL>MADADV.SAVE")>)
		 "AUX" (MUDDLE ,MUDDLE) STV (ST <REMARKABLY-DISGUSTING-CODE>))
	#DECL ((FN) STRING (MUDDLE) FIX (STV) <OR STRING FIX>) 
	<PUT <FIND-OBJ "PAPER"> ,ODESC1 <UNSPEAKABLE-CODE>>
	<SETG VERS .ST>
	<SETG SCRIPT-CHANNEL <>>
	<SETG RAW-SCORE 0>
	<SET IH <ON "IPC" ,ILO 1>>
	<HANDLER ,DIVERT-INT ,DIVERT-HAND>
	<COND (<G? .MUDDLE 100>
	       <SETG SCRATCH-STR <ISTRING 32>>
	       <SETG DEV "DSK">
	       <SETG SNM "MDL">)
	      (<SNAME "">
	       <SETG DEV "DSK">
	       <SETG SNM "MADMAN">)>
	<INT-LEVEL 100000>
	<COND (<=? <SAVE .FN> "SAVED"> <INT-LEVEL 0> T)
	      (T
	       ; "STARTER on 10x sets up tty correctly, setg's DEV to \"MDL\"
		  if that device exists; if not, (sort of) returns directory muddle
		  came from.  On its it returns # zorkers currently in existence."
	       <COND (<AND <TYPE? <SET STV <STARTER>> FIX>
			   <G? .STV 3>>
		      <OR <MEMBER <SETG XUNM <XUNAME>> ,WINNERS>
			  <=? ,XUNM "SEC">
			  <=? ,XUNM "ELBOW">
			  <AND <OFF "CHAR" ,INCHAN>
			       <TELL 
"There appears before you a threatening figure clad all over
in heavy black armor.  His legs seem like the massive trunk
of the oak tree.  His broad shoulders and helmeted head loom
high over your own puny frame and you realize that his powerful
arms could easily crush the very life from your body.  There
hangs from his belt a veritable arsenal of deadly weapons:
sword, mace, ball and chain, dagger, lance, and trident.
He speaks with a commanding voice:

		\"YOU SHALL NOT PASS \"

As he grabs you by the neck all grows dim about you.">
			       <QUIT>>>)
		     (<TYPE? .STV STRING>
		      <SETG SNM <SUBSTRUC ,SCRATCH-STR
					  0
					  <- <LENGTH ,SCRATCH-STR>
					     <LENGTH <MEMQ !\  .STV>>>>>)>
	       <COND (<G? ,MUDDLE 100> <SETG TENEX? <GETSYS>>)
		     (<APPLY ,IPC-OFF>
		      <APPLY ,IPC-ON <UNAME> "ZORK">)>
	       <SET BH <ON "BLOCKED" ,BLO 100>>
	       <START "WHOUS" .ST>)>>




"Stuff for diverting gc's"

<SETG DIVERT-CNT 0>

<SETG DIVERT-MAX 99>

<SETG DIVERT-INC 4000>

<SETG DIVERT-AMT 0>

<SETG DIVERT-LMT 100000>

<GDECL (DIVERT-CNT DIVERT-MAX DIVERT-INC DIVERT-AMT DIVERT-LMT) FIX>

<DEFINE DIVERT-FCN  (AMT REASON)
	<SETG DIVERT-CNT <+ ,DIVERT-CNT 1>>
	<SETG DIVERT-AMT <+ ,DIVERT-AMT ,DIVERT-INC .AMT>>
	<COND (<OR <G? ,DIVERT-CNT ,DIVERT-MAX>
		   <G? ,DIVERT-AMT ,DIVERT-LMT>>	;"Too much diversion ?"
		<SETG DIVERT-AMT <SETG DIVERT-CNT 0>>
		<GC-FCN>
		<GC>)
	      (ELSE	;"Divert this request for storage"
		<COND (<1? ,DIVERT-CNT>		;"First diversion ?"
		       <HANDLER ,GC-INT ,GC-HAND>)>
		<BLOAT <+ .AMT ,DIVERT-INC>>
				;"Get storage desired plus extra increment")>>

<SETG DIVERT-HAND <HANDLER <SETG DIVERT-INT <EVENT "DIVERT-AGC" 1000>>
			,DIVERT-FCN>>

<OFF ,DIVERT-HAND>

<DEFINE GC-FCN  ("TUPLE" T)
	<OFF ,GC-HAND>
	<SETG DIVERT-AMT <SETG DIVERT-CNT 0>>>

<SETG GC-HAND <HANDLER <SETG GC-INT <EVENT "GC" 11>>
			,GC-FCN>>

<OFF ,GC-HAND>




<DEFINE XUNAME ()
  #DECL ((VALUE) STRING)
  <MAPF ,STRING
	<FUNCTION (X)
	   #DECL ((X) CHARACTER)
	   <COND (<OR <0? <ASCII .X>>
		      <==? <ASCII .X> 32>>
		  <MAPSTOP>)
		 (T .X)>>
	<GXUNAME>>>

<DEFINE ITS-GET-NAME (UNAME "AUX" (NM <FIELD .UNAME ,$NAME>) CMA JR LFST LLST
		      TLEN TSTR STR)
	#DECL ((STR TSTR UNAME) STRING (NM CMA JR) <OR STRING FALSE>
	       (TLEN LLST LFST) FIX)
	<COND (.NM
	       <COND (<SET CMA <MEMQ !\, .NM>>
		      <SET LLST <- <LENGTH .NM> <LENGTH .CMA>>>
		      <SET CMA <REST .CMA>>
		      <SET LFST <LENGTH .CMA>>
		      <COND (<SET JR <MEMQ !\, .CMA>>
			     <SET LFST <- .LFST <LENGTH .JR>>>)>
		      <REPEAT ()
			      <COND (<EMPTY? .CMA> <RETURN>)
				    (<MEMQ <1 .CMA> %<STRING <ASCII 32> <ASCII 9>>>
				     <SET CMA <REST .CMA>>
				     <SET LFST <- .LFST 1>>)
				    (ELSE <RETURN>)>>
		      <SET TLEN <+ .LFST 1 .LLST <LENGTH .JR>>>
		      <SET STR <ISTRING .TLEN !\ >>
		      <SET TSTR .STR>
		      <SUBSTRUC .CMA 0 .LFST .TSTR>
		      <SET TSTR <REST .TSTR <+ .LFST 1>>>
		      <SUBSTRUC .NM 0 .LLST .TSTR>
		      <AND .JR <SUBSTRUC .JR 0 <LENGTH .JR> <REST .TSTR .LLST>>>
		      <SETG USER-NAME .STR>)
		     (ELSE <SETG USER-NAME .NM>)>)>>

<DEFINE UNSPEAKABLE-CODE ("AUX" STR NSTR (LEN-I 0) (O <FIND-OBJ "PAPER">))
    #DECL ((O) OBJECT (NSTR STR) STRING (LEN-I) FIX)
    <SET STR <MEMQ !\/ <OREAD .O>>>
    <COND (<==? <1 <BACK .STR 2>> !\1>
	   <SET STR <BACK .STR 2>>
	   <SET LEN-I 1>)
	  (<SET STR <BACK .STR 1>>)>
    <SET NSTR <REST <MEMQ !\/ <REST <MEMQ !\/ .STR>>> 3>>
    <STRING "There is an issue of US NEWS & DUNGEON REPORT dated "
	    <SUBSTRUC .STR 0 <- <LENGTH .STR> <LENGTH .NSTR>>>
	    " here.">>

<DEFINE REMARKABLY-DISGUSTING-CODE ("AUX" (N <DSKDATE>))
	#DECL ((N) <PRIMTYPE WORD>)
	<STRING
	 "This version created "
	 <NTH ,MONTHS <CHTYPE <GETBITS .N <BITS 4 23>> FIX>>
	 !\ 
	 <UNPARSE <CHTYPE <GETBITS .N <BITS 5 18>> FIX>>
	 !\.>>

<DEFINE VERSION ()
  <TELL ,VERS>>

<SETG PLAYED-TIME 0>

<GDECL (PLAYED-TIME) FIX>

<DEFINE GET-TIME ("AUX" (NOW <DSKDATE>) (THEN ,INTIME))
	#DECL ((NOW THEN) <PRIMTYPE WORD>)
	<+ <COND (<N==? <CHTYPE <GETBITS .NOW <BITS 18 18>> FIX>
			<CHTYPE <GETBITS .THEN <BITS 18 18>> FIX>>
		  </ <- <+ <CHTYPE <GETBITS .NOW <BITS 18 0>> FIX>
			   <* 24 7200>>
			<CHTYPE <GETBITS .THEN <BITS 18 0>> FIX>>
		     2>)
		 (</ <- <CHTYPE <GETBITS .NOW <BITS 18 0>> FIX>
			<CHTYPE <GETBITS .THEN <BITS 18 0>> FIX>>
		     2>)>
	   ,PLAYED-TIME>>

<DEFINE PLAY-TIME ("OPTIONAL" (OUTCHAN ,OUTCHAN) (LOSER? T)
		   "AUX" TIME MINS)
	#DECL ((MINS TIME) FIX (OUTCHAN) <SPECIAL CHANNEL> (LOSER?) <OR ATOM FALSE>)
	<SET TIME <GET-TIME>>
	<SETG TELL-FLAG T>
	<COND (.LOSER? <PRINC "You have been playing DUNGEON for ">)
	      (T
	       <PRINC "Played for ">)>
	<AND <G? <SET MINS </ .TIME 3600>> 0>
	     <PRIN1 .MINS>
	     <PRINC " hour">
	     <OR <1? .MINS> <PRINC "s">>