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
description: "This file defines the rooms and related mechanics for Zork, one of the earliest and most influential text-based adventure games."

summary:
  - point: "MDL language's flexibility for game logic"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL"
  - point: "Innovative use of ARPANET for multiplayer access"
    link: "https://en.wikipedia.org/wiki/ARPANET"
    link_label: "ARPANET"
  - point: "Room descriptions and mechanics foundational to interactive fiction"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive Fiction"
  - point: "Iterative development visible in version 99"
    link: "https://en.wikipedia.org/wiki/Software_versioning"
    link_label: "Software Versioning"
  - point: "Pioneering use of object-oriented principles in game design"
    link: "https://en.wikipedia.org/wiki/Object-oriented_programming"
    link_label: "Object-Oriented Programming"

enhancements:
  - id: "alt-flag-initialization"
    line_start: 4
    line_end: 4
    title: "Setting the ALT-FLAG: A Game State Control"
    wikipedia_url: "https://en.wikipedia.org/wiki/Flag_(computing)"
    image_url: ""
    image_caption: ""
    content: "The ALT-FLAG is initialized to true, signaling an alternative mode or state within the game logic. Flags like this are common in early computing to manage state transitions efficiently. In Zork, this likely controls a specific gameplay mechanic or debugging feature. At the time, memory constraints on the PDP-10 necessitated compact and efficient state management. This approach influenced later games that relied on flag-based state systems, such as Infocom's other titles and even modern game engines where state flags are used for debugging or alternate modes."
  - id: "save-it-subroutine"
    line_start: 8
    line_end: 60
    title: "Saving Progress: Early Game Persistence"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_(video_gaming)"
    image_url: ""
    image_caption: ""
    content: "The SAVE-IT subroutine handles saving the player's progress, including game state and metadata. It uses conditional logic to determine the save file's name and location based on the environment (e.g., TENEX or ITS). This reflects the challenges of early computing environments where file systems varied significantly. The PDP-10's ITS operating system was a pioneering timesharing system, and Zork's developers adapted their code to work seamlessly across these constraints. This subroutine laid the groundwork for save systems in games, influencing later adventure games and RPGs that relied on persistent state storage."
  - id: "divert-garbage-collection"
    line_start: 65
    line_end: 105
    title: "Diverting Garbage Collection: Memory Management in Zork"
    wikipedia_url: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section defines variables and routines for managing garbage collection, a critical aspect of memory management in MDL. The DIVERT-FCN subroutine tracks memory usage and triggers garbage collection when thresholds are exceeded. Memory was a scarce resource on the PDP-10, and efficient management was essential for a program as complex as Zork. The developers' approach to garbage collection reflects their ingenuity in working within these constraints. Techniques like these influenced later programming languages, including Lisp derivatives and modern garbage-collected languages like Java and Python."
  - id: "xuname-subroutine"
    line_start: 110
    line_end: 119
    title: "Extracting Usernames: Personalizing the Adventure"
    wikipedia_url: "https://en.wikipedia.org/wiki/Username"
    image_url: ""
    image_caption: ""
    content: "The XUNAME subroutine extracts and processes the username of the player, ensuring it conforms to specific criteria. This personalization added a layer of engagement to Zork, making the experience feel tailored to the individual. Usernames were an important aspect of early computing culture, especially in timesharing systems like ITS, where multiple users shared the same hardware. This feature foreshadows the personalized gaming experiences seen in modern multiplayer games and online platforms."
  - id: "room-description-mechanics"
    line_start: 458
    line_end: 552
    title: "Room Descriptions: Immersive Worldbuilding in Text"
    wikipedia_url: "https://en.wikipedia.org/wiki/Worldbuilding"
    image_url: ""
    image_caption: ""
    content: "The ROOM-INFO subroutine handles the display of room descriptions, including lighting conditions, objects present, and entry signals. This mechanic is central to Zork's immersive storytelling, allowing players to visualize the environment through text. The developers used conditional logic to adapt descriptions based on the player's state, a technique that became a hallmark of interactive fiction. Zork's approach to room descriptions influenced countless games, from Infocom's later titles to modern text-based and graphical adventures."
  - id: "score-calculation"
    line_start: 663
    line_end: 693
    title: "Scoring System: Measuring Player Success"
    wikipedia_url: "https://en.wikipedia.org/wiki/Score_(game)"
    image_url: ""
    image_caption: ""
    content: "The SCORE subroutine calculates and displays the player's score, including their rank based on performance metrics. This system provides feedback and motivation, encouraging players to improve their gameplay. The ranking system, with titles like 'Wizard' and 'Beginner,' adds a narrative layer to the scoring, making it more engaging. Scoring systems like this became standard in games, influencing genres from arcade games to RPGs and competitive multiplayer titles."
  - id: "record-logging"
    line_start: 709
    line_end: 790
    title: "Game Records: Logging Player History"
    wikipedia_url: "https://en.wikipedia.org/wiki/Log_file"
    image_url: ""
    image_caption: ""
    content: "The RECORD subroutine logs detailed information about the player's session, including their score, moves, deaths, and location. This feature reflects the developers' focus on preserving gameplay data for analysis and debugging. Logging player history was innovative at the time and has since become a standard practice in game development, used for analytics, leaderboards, and post-game summaries in modern titles."
  - id: "flag-names-state-tracking"
    line_start: 801
    line_end: 816
    title: "Flag-based state tracking for gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "This section defines a set of flags using the UVECTOR data structure, which is a specialized vector in MDL for storing fixed-length data. Each flag represents a specific state or interaction in the game, such as whether the troll is defeated or the kitchen window is open. The flags are essential for tracking the player's progress and ensuring the game responds dynamically to their actions. In the late 1970s, state management in games was a novel concept, as most games were simpler arcade-style experiences. The developers of Zork, leveraging MDL's Lisp-inspired capabilities, created a robust system for managing complex interactions. This approach influenced later adventure games, which adopted similar state-tracking mechanisms to handle branching narratives and player choices."
  - id: "short-names-abbreviation-system"
    line_start: 820
    line_end: 822
    title: "Abbreviation system for flags"
    wikipedia_url: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    image_url: ""
    image_caption: ""
    content: "The SHORT-NAMES vector provides abbreviated identifiers for the flags defined earlier. This system allows the developers to reference flags more efficiently in the code, reducing verbosity and improving readability. Abbreviations like 'KI' for 'KITCHEN-WINDOW' reflect the constraints of programming on the PDP-10, where memory and processing power were limited. By optimizing code readability and execution, the developers ensured Zork could run smoothly on the hardware of the time. This practice of using abbreviations for internal identifiers became common in game development, especially in environments with constrained resources."
  - id: "pds-date-formatting"
    line_start: 828
    line_end: 847
    title: "Date formatting routine for debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/DEC_PDP-10"
    image_url: ""
    image_caption: ""
    content: "The PDSKDATE subroutine formats a date and time for display, extracting bits from a word to determine the month, day, and time. This routine demonstrates the precision required when working with low-level data structures on the PDP-10. The developers used bit manipulation to efficiently store and retrieve information, a necessity given the limited memory available. Debugging tools like this were crucial for ensuring the game's stability during development. The approach influenced later debugging and logging practices in software engineering, emphasizing the importance of clear and concise system feedback."
  - id: "jigs-up-death-mechanic"
    line_start: 865
    line_end: 947
    title: "Death mechanic and player consequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Grue_(monster)"
    image_url: ""
    image_caption: ""
    content: "The JIGS-UP subroutine handles player death scenarios, including humorous messages and consequences for repeated failures. It introduces the iconic 'grue' monster, which became a hallmark of Zork and text-based adventure games. The routine resets the player's state, updates the score, and moves the player to a specific room, ensuring the game continues despite setbacks. This mechanic reflects the developers' creativity in balancing challenge and entertainment. The grue's legacy persists in gaming culture, symbolizing the dangers of exploring dark areas without preparation."
  - id: "file-to-tty-output"
    line_start: 955
    line_end: 980
    title: "File-to-TTY output for player help"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The FILE-TO-TTY subroutine reads a file and outputs its contents to the player's terminal, providing help or information. This feature highlights the developers' focus on user experience, ensuring players have access to guidance while navigating the game's challenges. The ability to dynamically load and display text files was advanced for its time, leveraging the PDP-10's capabilities. This approach influenced the design of help systems in later interactive fiction and text-based games, emphasizing accessibility and player support."
  - id: "lit-room-light-check"
    line_start: 1019
    line_end: 1029
    title: "Room light check for gameplay logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The LIT? subroutine determines whether a room is illuminated, checking for light sources among the room's objects and the player's inventory. This mechanic is central to Zork's gameplay, as navigating dark areas without light leads to encounters with the grue. The developers used logical operations to efficiently evaluate multiple conditions, showcasing MDL's strengths in handling complex interactions. The light mechanic added depth to the game's puzzles and influenced the design of environmental challenges in later adventure games."
  - id: "walk-directional-navigation"
    line_start: 1050
    line_end: 1092
    title: "Directional navigation and grue encounters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Grue_(monster)"
    image_url: ""
    image_caption: ""
    content: "The WALK subroutine handles player movement between rooms, checking for valid exits and light conditions. If the player attempts to move in darkness, they encounter a grue, resulting in death. This mechanic reinforces the importance of preparation and exploration, key themes in Zork. The developers' use of conditional logic and random actions adds unpredictability to the gameplay. The grue encounter became a defining feature of Zork, influencing the design of hazards in subsequent adventure games."
  - id: "everything-command"
    line_start: 1278
    line_end: 1324
    title: "Handling the 'everything' command"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The EVERYTHING subroutine processes commands like 'take everything' or 'drop everything,' iterating through objects in the room or player's inventory. It uses UVECTOR data structures to manage lists of objects, demonstrating MDL's capabilities for handling complex data. This feature simplifies gameplay by allowing players to interact with multiple objects simultaneously, a convenience that became standard in later text-based games. The developers' focus on usability and efficiency influenced the evolution of command parsers in interactive fiction."
  - id: "uppercase-string-conversion"
    line_start: 1608
    line_end: 1615
    title: "Converting strings to uppercase for consistency"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `UPPERCASE`, converts a string to uppercase by iterating through its characters and adjusting their ASCII values. It uses MDL's `MAPR` function to apply a transformation to each character in the string. The programmer's goal here was likely to ensure case-insensitive comparisons in gameplay, as user input could vary in capitalization. In the late 1970s, ASCII was the dominant character encoding standard, and manipulating ASCII values directly was a common practice. The approach reflects the constraints of the PDP-10, where memory and processing power were limited, and developers optimized for efficiency. Techniques like this laid the groundwork for modern string manipulation functions in languages like Python and JavaScript, which abstract away the low-level details."
  - id: "wait-time-passes"
    line_start: 1617
    line_end: 1624
    title: "Simulating the passage of time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The `WAIT` subroutine simulates the passage of time in the game by printing \"Time passes...\" and decrementing a counter. It optionally accepts a numeric argument to specify the duration. This mechanic adds a sense of realism and pacing to the gameplay, allowing players to experience events unfolding over time. In the context of Zork, where immersion and narrative were paramount, such features helped create a dynamic world. The PDP-10's ITS operating system supported time-sharing, enabling games like Zork to include these interactive elements. This technique influenced later games that incorporated real-time mechanics, such as Sierra's adventure games and modern RPGs with day-night cycles."
  - id: "clock-demon-event-handler"
    line_start: 1628
    line_end: 1651
    title: "Handling timed events with a demon"
    wikipedia_url: "https://en.wikipedia.org/wiki/Daemon_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `CLOCK-DEMON` subroutine manages timed events in the game world. It iterates through active events, checks their status, and triggers actions when their countdown reaches zero. The term 'demon' here refers to a background process, akin to modern daemons in Unix systems. This mechanism allowed Zork to simulate a living world where events could occur independently of player actions. The use of auxiliary variables and conditional logic reflects the ingenuity required to implement complex systems on the PDP-10. This approach influenced the development of event-driven programming paradigms, which are now foundational in software development, from GUIs to game engines like Unity."
  - id: "boarding-vehicles"
    line_start: 1667
    line_end: 1687
    title: "Boarding vehicles in the game world"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `BOARD` subroutine handles the logic for players boarding vehicles. It checks conditions like the vehicle's presence and whether the player is already aboard. If successful, it updates the game state to reflect the player's new location. This mechanic adds depth to Zork's world, allowing players to interact with objects in meaningful ways. The PDP-10's memory constraints required careful management of game state, as seen in the use of auxiliary variables and object properties. This feature inspired similar mechanics in later adventure games, such as LucasArts' point-and-click titles, where object interactions are central to gameplay."
  - id: "unboarding-vehicles"
    line_start: 1689
    line_end: 1704
    title: "Unboarding vehicles with safety checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The `UNBOARD` subroutine allows players to disembark from vehicles, with checks to ensure safety. If the location is hazardous, the game warns the player, preventing fatal mistakes. This reflects the developers' focus on creating a fair and immersive experience. The PDP-10's hardware limitations meant that such checks had to be implemented efficiently, using conditional logic and state updates. This mechanic influenced later games that incorporated environmental hazards and player safety, such as the Fallout series, where players must navigate dangerous terrains."
  - id: "room-transition-logic"
    line_start: 1706
    line_end: 1728
    title: "Navigating between rooms with constraints"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The `GOTO` subroutine manages transitions between rooms, checking conditions like vehicle requirements and terrain compatibility. If the transition is valid, it updates the player's location and scores the room. This mechanic is central to Zork's exploration-based gameplay, where players uncover new areas and progress through the story. The PDP-10's ITS environment supported dynamic updates to game state, enabling complex interactions like these. Room-based navigation became a staple of adventure games, influencing titles like Myst and The Legend of Zelda, where exploration drives the narrative."
  - id: "mung-room-description"
    line_start: 1738
    line_end: 1741
    title: "Changing room descriptions dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The `MUNG-ROOM` subroutine updates a room's description dynamically, allowing the game world to change based on player actions. This feature enhances immersion, making the environment feel responsive and alive. The term 'mung' originates from MIT slang, meaning to modify or corrupt data. On the PDP-10, such dynamic updates were innovative, as they required efficient memory management and state tracking. This technique influenced later games with evolving environments, such as BioShock, where player choices shape the world."
  - id: "command-processing"
    line_start: 1743
    line_end: 1753
    title: "Processing player commands with context"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The `COMMAND` subroutine processes player input, ensuring it aligns with the game's context. It checks whether the player is interacting with valid objects and updates the game state accordingly. This mechanic is crucial for Zork's text-based interface, where players type commands to interact with the world. The PDP-10's ITS system supported string manipulation and conditional logic, enabling such sophisticated input handling. Command parsing became a hallmark of interactive fiction, influencing modern text-based games and conversational AI systems like ChatGPT."

---


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
	     <PRINC ", ">>
	<COND (<G? <SET MINS <MOD </ .TIME 60> 60>> 0>
	       <PRIN1 .MINS>
	       <PRINC " minute">
	       <COND (<NOT <1? .MINS>> <PRINC "s">)>
	       <PRINC ", and ">)>
	<PRIN1 <SET MINS <MOD .TIME 60>>>
	<PRINC " second">
	<OR <1? .MINS> <PRINC "s">>
	<COND (.LOSER? <PRINC ".
">)
	      (<PRINC ".">)>
	.TIME> 

<DEFINE PC () T>

<DEFINE HANDLE (FRM "TUPLE" ZORK "AUX" ZF) 
	#DECL ((ZF) ANY)
	<PUT ,OUTCHAN 13 80>
	<PUT <1 <BACK ,INCHAN>> 6 #LOSE 27>
	<COND (<AND <OR <NOT <GASSIGNED? XUNM>>
			<MEMBER ,XUNM ,WINNERS>>
		    <PC>>
	       <AND <GASSIGNED? SAVEREP> <SETG REP ,SAVEREP>>
	       <AND <ASSIGNED? BH> <OFF .BH>>
	       <INT-LEVEL 0>
	       <SETG DBG T>
	       <SETG ALT-FLAG T>)
	      (T
	       <COND (<AND <NOT <EMPTY? .ZORK>>
			   <==? <1 .ZORK> CONTROL-G?!-ERRORS>>
		      <INT-LEVEL 0>
		      <FINISH>
		      <PUT <1 <BACK ,INCHAN>> 6 <COND (<G? ,MUDDLE 100>
						       <COND (,TENEX? #LOSE *37*)
							     (T #LOSE *000000000012*)>)
						      (T #LOSE *000000000015*)>>
		      <ERRET T .FRM>)
		     (<AND <==? <LENGTH .ZORK> 3>
			   <==? <1 .ZORK> FILE-SYSTEM-ERROR!-ERRORS>
			   <NOT <SET ZF <3 .ZORK>>>
			   <==? <LENGTH .ZF> 3>
			   <=? <1 .ZF>
			       "ILLEGAL CHR AFTER CNTRL P ON TTY DISPLAY">>
		      ; "HACK FOR ILLEGAL CHR AFTER CTRL-P"
		      <PUT <1 <BACK ,INCHAN>> 6 #LOSE *000000000015*>
		      <INT-LEVEL 0>
		      <ERRET T .FRM>)
		     (<TELL 
"I'm sorry, you seem to have encountered an error in the program.
Send mail to DUNGEON@MIT-DMS describing what it was you tried to do.">
		      <TELL ,VERS>
		      <MAPF <> <FUNCTION (X) <PRINT .X>> .ZORK>
		      <FINISH #FALSE (". Error.")>)>)>>

<PSETG WINNERS '["BKD" "TAA" "MARC" "PDL" "MDL"]>

<GDECL (WINNERS) <VECTOR [REST STRING]>>

<OR <LOOKUP "COMPILE" <ROOT>>
    <LOOKUP "GLUE" <GET PACKAGE OBLIST>>
    <SETG ERRH
	  <HANDLER <OR <GET ERROR!-INTERRUPTS INTERRUPT> <EVENT "ERROR" 8>>
		   ,HANDLE>>>

<GDECL (MOVES) FIX (SCRIPT-CHANNEL) <OR CHANNEL FALSE>>

<DEFINE START (RM "OPTIONAL" (ST "") "AUX" FN (MUDDLE ,MUDDLE) (XUNM <XUNAME>)) 
	#DECL ((ST RM) STRING (MUDDLE) FIX (XUNM) STRING (FN) <OR FALSE STRING>)
	<SETG XUNM .XUNM>
	<SETG PTEMP <CHTYPE [<CHTYPE WITH!-WORDS PREP> <FIND-OBJ "!!!!!">] PHRASE>>
	<SETG INTIME <DSKDATE>>
	<COND (<L? .MUDDLE 100>
	       <AND <G? <LENGTH .XUNM> 2> <=? <SUBSTRUC .XUNM 0 3> "___"> <QUIT>>
	       <SET FN <ITS-GET-NAME .XUNM>>)
	      (<SET FN <GET-NAME>>)>
	<COND (.FN
	       <SETG USER-NAME .FN>)
	      (<SETG USER-NAME .XUNM>)>
	<SETG DEATHS 0>
	<SETG MOVES 0>
	<SETG WINNER ,PLAYER>
	<PUT ,WINNER ,AROOM <SETG HERE <FIND-ROOM .RM>>>
	<TELL "Welcome to Dungeon.
" 1 .ST>
	<RANDOM <CHTYPE <DSKDATE> FIX>>
	<INT-LEVEL 0>
	<CONTIN>>

<DEFINE CONTIN () 
	<SETG ALT-FLAG <>>
	<PUT <1 <BACK ,INCHAN>> 6 <COND (<G? ,MUDDLE 100>
					 <COND (,TENEX? #LOSE *37*)
					       (T #LOSE *000000000012*)>)
					(T #LOSE *000000000015*)>>
	<SETG SAVEREP ,REP>
	<SETG REP ,RDCOM>
	<RESET ,INCHAN>
	<SETG WINNER ,PLAYER>
	<PUT ,PRSVEC 2 <>>
	,NULL>

<SETG MY-SCRIPT <>>

<GDECL (MY-SCRIPT) <OR ATOM FALSE>>

<DEFINE MAKE-SCRIPT ("AUX" CH)
  #DECL ((CH) <OR CHANNEL FALSE>)
  <COND (,SCRIPT-CHANNEL
	 <>)
	(<SET CH <OPEN "PRINT" <STRING "MARC;%Z" ,XUNM " >">>>
	 <PUT <TOP ,INCHAN> 1 (.CH)>
	 <PUT <TOP ,OUTCHAN> 1 (.CH)>
	 <SETG SCRIPT-CHANNEL .CH>
	 <SETG MY-SCRIPT T>)>>

<DEFINE FLUSH-ME ()
  <UNWIND
   <PROG ()
	 <TELL
"Suddenly, a sinister, wraithlike figure appears before you, seeming
to float in the air.  He glows with an eldritch light.  In a barely
audible voice he says, \"Begone, defiler!  Your presence upsets the
very balance of the System itself!\"  With a sinister chuckle, he
raises his oaken staff, taps you on the head, and fades into the
gloom.  In his place appears a tastefully lettered sign reading:

			DUNGEON CLOSED

At that instant, you disappear, and all your belongings clatter to
the ground.
">
	 <FINISH <>>>
   <FINISH <>>>>

<DEFINE DO-SCRIPT ("AUX" CH (UNM ,XUNM) (MUDDLE ,MUDDLE))
  #DECL ((CH) <OR CHANNEL FALSE> (UNM) STRING (MUDDLE) FIX)
  <COND (,MY-SCRIPT
	 <DO-UNSCRIPT <>>)>
  <COND (,SCRIPT-CHANNEL
	 <TELL "You are already scripting.">)
	(<AND
	  <OR <G? .MUDDLE 100>
	      <AND <NOT <MEMBER "GUEST" .UNM>>
		   <SET CH <OPEN "READ" ".FILE." "(DIR)" "DSK" .UNM>>
		   <CLOSE .CH>
		   <SET CH <OPEN "READ" "_MSGS_" .UNM "DSK" .UNM>>
		   <CLOSE .CH>>>
	  <SET CH <OPEN "PRINT" "ZORK" "SCRIPT" "DSK" .UNM>>>
	 <PUT <TOP ,INCHAN> 1 (.CH)>
	 <PUT <TOP ,OUTCHAN> 1 (.CH)>
	 <SETG SCRIPT-CHANNEL .CH>
	 <COND (<L? ,MUDDLE 100>
		<TELL "Scripting to " 1 ,XUNM ";ZORK SCRIPT">)
	       (T
		<TELL "Scripting to <" 1 ,XUNM ">ZORK.SCRIPT">)>)
	(T
	 <TELL "I can't open the script channel.">)>>

<DEFINE DO-UNSCRIPT ("OPTIONAL" (VERBOSE T))
  #DECL ((VERBOSE) <OR ATOM FALSE>)
  <COND (,SCRIPT-CHANNEL
	 <PUT <TOP ,INCHAN> 1 ()>
	 <PUT <TOP ,OUTCHAN> 1 ()>
	 <CLOSE ,SCRIPT-CHANNEL>
	 <SETG SCRIPT-CHANNEL <>>
	 <AND .VERBOSE <TELL "Scripting off.">>)
	(<AND .VERBOSE <TELL "Scripting wasn't on.">>)>>

<GDECL (THEN) FIX>

<DEFINE DO-SAVE ("AUX" (MUDDLE ,MUDDLE) CH (UNM ,XUNM))
  #DECL ((CH) <OR CHANNEL FALSE> (MUDDLE) FIX (UNM) STRING)
  <COND (<OR <G? .MUDDLE 100>
	     <AND <NOT <MEMBER "GUEST" .UNM>>
		  <SET CH <OPEN "READ" ".FILE." "(DIR)" "DSK" .UNM>>
		  <CLOSE .CH>>>
	 <COND (<OR <G? .MUDDLE 100>
		    <AND <SET CH <OPEN "READ" "_MSGS_" .UNM "DSK" .UNM>>
			 <CLOSE .CH>>>
		<AND ,SCRIPT-CHANNEL <DO-UNSCRIPT>>
		<TELL "Saving.">
		<INT-LEVEL 100000>
		<OFF "CHAR" ,INCHAN>
		<SETG THEN <CHTYPE <DSKDATE> FIX>>
		<SETG PLAYED-TIME <GET-TIME>>
		<COND (<SET CH <OPEN "PRINTB"
				     <COND (<L? .MUDDLE 100>
					    <STRING "DSK:" .UNM ";ZORK SAVE">)
					   (T
					    <STRING "DSK:<" .UNM ">ZORK.SAVE">)>>>
		       <SAVE-GAME .CH>
		       <FINISH <CHTYPE '(". Saved.") FALSE>>)
		      (<TELL "Save failed.">
		       <TELL <1 .CH> 1 " " <2 .CH>>)>)
	       (<TELL "Can't open channel for save.">)>)
	(T <TELL "Can't open channel for save.">)>>

<DEFINE DO-RESTORE ("AUX" CH STR (MUDDLE ,MUDDLE) NOWD NOW THEND)
  #DECL ((CH) <OR CHANNEL FALSE> (STR) STRING (NOWD NOW THEND MUDDLE) FIX)
   <COND (<L? .MUDDLE 100>
	  <SET STR <STRING "DSK:" ,XUNM ";ZORK SAVE">>)
	 (T
	  <SET STR <STRING "DSK:<" ,XUNM ">ZORK.SAVE">>)>
   <PROG ((FOO T) (SNM <SNAME>))
	 #DECL ((FOO) <OR ATOM FALSE> (SNM) <SPECIAL STRING>)
	 <COND (<SET CH <OPEN "READB" .STR>>
		<COND (<RESTORE-GAME .CH>
		       <COND (<MEMBER ,XUNM ,WINNERS>)
			     (<==? <SET NOWD
					<CHTYPE <GETBITS <SET NOW
							      <CHTYPE <DSKDATE> FIX>>
							 <BITS 18 18>>
						FIX>>
				   <SET THEND
					<CHTYPE <GETBITS ,THEN <BITS 18 18>> FIX>>>
			      <COND (<G=? <- .NOW ,THEN> 2400>)
				    (<TELL "It's too soon.">
				     <COND (<G? ,MUDDLE 100>
					    <OFF "CHAR" ,INCHAN>
					    <INT-LEVEL 10000>
					    <QUIT>)>
				     <QUIT>)>)
			     (<1? <- .NOWD .THEND>>
			      <COND (<G=? <- <+ <CHTYPE <GETBITS .NOW <BITS 18 0>> FIX>
						<* 24 7200>>
					     <CHTYPE <GETBITS .NOW <BITS 18 0>> FIX>>
					  2400>)
				    (<TELL "It's too soon.">
				     <QUIT>)>)>
		       <SETG INTIME .NOW>
		       <TELL "Restored.">)
		      (<TELL "Restore failed.">)>
		<ROOM-DESC>)
	       (<AND .FOO <G? .MUDDLE 100>>
		<SET STR <STRING <SNAME> "ZORK.SAVE">>
		<SET FOO <>>
		<AGAIN>)
	       (<TELL <2 .CH> 1 " " <1 .CH>>)>>>

<DEFINE PROB (NUM) #DECL ((NUM) FIX) <L=? <MOD <RANDOM> 100> .NUM>>

"GET-ATOM TAKES A VALUE AND SEARCHES INITIAL FOR FIRST ATOM
SETG'ED TO THAT."

<DEFINE GET-ATOM ACT (VAL "AUX" (O <GET INITIAL OBLIST>))
  #DECL ((O) OBLIST)
  <MAPF <>
    <FUNCTION (X) #DECL ((X) <LIST [REST ATOM]>)
      <MAPF <>
        <FUNCTION (X) #DECL ((X) ATOM)
	  <COND (<AND <GASSIGNED? .X>
		      <==? ,.X .VAL>>
		 <RETURN .X .ACT>)>>
	.X>>
    .O>>

;
"ROOM-INFO --
	PRINT SOMETHING ABOUT THIS PLACE
	1. CHECK FOR LIGHT --> ELSE WARN LOSER
	2. GIVE A DESCRIPTION OF THE ROOM
	3. TELL WHAT'S ON THE FLOOR IN THE WAY OF OBJECTS
	4. SIGNAL ENTRY INTO THE ROOM
"
<SETG BRIEF!-FLAG <>>
<SETG SUPER-BRIEF!-FLAG <>>

<GDECL (SUPER-BRIEF!-FLAG BRIEF!-FLAG) <OR ATOM FALSE>>

<DEFINE BRIEF ()
	<SETG BRIEF!-FLAG T>
	<TELL "Brief descriptions.">>

<DEFINE SUPER-BRIEF ()
	<SETG SUPER-BRIEF!-FLAG T>
	<TELL "No long descriptions.">>

<DEFINE UN-BRIEF ()
	<SETG BRIEF!-FLAG <>>
	<SETG SUPER-BRIEF!-FLAG <>>
	<TELL "Long descriptions.">>

<DEFINE UN-SUPER-BRIEF ()
	<SETG SUPER-BRIEF!-FLAG <>>
	<TELL "Some long descriptions.">>

<DEFINE ROOM-DESC () <ROOM-INFO T>>

<DEFINE ROOM-INFO ("OPTIONAL" (FULL <>)
		   "AUX" (AV <AVEHICLE ,WINNER>) (RM ,HERE) (PRSO <2 ,PRSVEC>)
			 (WINOBJ <FIND-OBJ "#####">) (OUTCHAN ,OUTCHAN) RA)
   #DECL ((RM) ROOM (WINOBJ) OBJECT (AV) <OR FALSE OBJECT> (OUTCHAN) CHANNEL
	  (PRSO) <OR DIRECTION FALSE OBJECT> (FULL) <OR ATOM FALSE>)
   <SETG TELL-FLAG T>
   <AND <TYPE? .PRSO DIRECTION> <PUT ,PRSVEC 2 <>>>
   <PROG ()
     <COND (<N==? ,HERE <AROOM ,PLAYER>>
	    <PUT ,PRSVEC 1 ,WALK-IN!-WORDS>
	    <TELL "Done.">
	    <RETURN>)
	   (<AND .PRSO
		 <TYPE? .PRSO OBJECT>>
	    <COND (<OBJECT-ACTION>)
		  (<OREAD .PRSO>
		   <TELL <OREAD .PRSO>>)
		  (<TELL "I see nothing special about the "
			 1
			 <ODESC2 .PRSO>
			 ".">)>
	    <RETURN>)
	   (<NOT <LIT? .RM>>
	    <TELL 
"It is pitch black.  You are likely to be eaten by a grue.">
	    <RETURN <>>)
	   (<OR <AND <NOT .FULL> ,SUPER-BRIEF!-FLAG>
		<AND <RSEEN? .RM>
		 <OR ,BRIEF!-FLAG <PROB 80>>
		 <NOT .FULL>>>
	    <TELL <RDESC2 .RM>>)
	   (<AND <EMPTY? <RDESC1 .RM>> <SET RA <RACTION .RM>>>
	    <PUT ,PRSVEC 1 ,LOOK!-WORDS>
	    <APPLY-RANDOM .RA>
	    <PUT ,PRSVEC 1 ,FOO!-WORDS> ; "Something innocuous")
	   (<TELL <RDESC1 .RM>>)>
     <PUT .RM ,RSEEN? T>
     <AND .AV <TELL "You are in the " 1 <ODESC2 .AV> ".">>
     <MAPF <>
      <FUNCTION (X) 
	 #DECL ((X) OBJECT)
	 <COND
	  (<AND <OVIS? .X> <DESCRIBABLE? .X>>
	   <COND (<==? .X .AV>)
		 (T
		  <COND (<LONG-DESC-OBJ .X>
		  	 <AND .AV <TELL " [in the room]" 0>>
		  	 <CRLF>)>)>
	   <COND (<TRNN .X ,ACTORBIT>
	   	  <INVENT <ORAND .X>>)
		 (<SEE-INSIDE? .X>
		  <PRINT-CONT
		   .X .AV .WINOBJ ,INDENTSTR <COND (.FULL)
						   (,SUPER-BRIEF!-FLAG <>)
						   (,BRIEF!-FLAG <>)
						   (T)>>)>)>>
      <ROBJS .RM>>
     <COND (<AND <SET RA <RACTION .RM>>
		 <NOT .FULL>>
	    <PUT ,PRSVEC 1 ,WALK-IN!-WORDS>
	    <APPLY-RANDOM .RA>
	    <PUT ,PRSVEC 1 ,FOO!-WORDS>)>
     T>>

<PSETG INDENTSTR <REST <ISTRING 8> 8>>

<DEFINE PRINT-CONT PRINT-C (OBJ AV WINOBJ INDENT "OPTIONAL" (CASE? T)
			    "AUX" (CONT <OCONTENTS .OBJ>))
    #DECL ((AV) <OR FALSE OBJECT> (OBJ WINOBJ) OBJECT (INDENT) STRING
	   (CONT) <LIST [REST OBJECT]> (CASE?) <OR ATOM FALSE>)
    <COND (<NOT <EMPTY? .CONT>>
	   <COND (<==? .OBJ <FIND-OBJ "TCASE">>
		  <COND (<NOT .CASE?> <RETURN T .PRINT-C>)>
		  <TELL "Your collection of treasures consists of:">)
		 (<NOT <AND <==? <LENGTH .CONT> 1>
			    <==? <1 .CONT> <FIND-OBJ "#####">>>>
		  <TELL .INDENT 0>
		  <TELL "The " 1 <ODESC2 .OBJ> " contains:">)
		 (<RETURN T .PRINT-C>)>
	   <MAPF <>
	     <FUNCTION (Y) 
	       #DECL ((Y) OBJECT)
	       <COND (<AND .AV <==? .Y .WINOBJ>>)
		     (<AND <OVIS? .Y> <DESCRIBABLE? .Y> <NOT <EMPTY? <ODESC2 .Y>>>>
		      <TELL .INDENT 1 " A " <ODESC2 .Y>>)>
	       <COND (<SEE-INSIDE? .Y>
		      <PRINT-CONT .Y .AV .WINOBJ <BACK .INDENT>>)>>
	     <OCONTENTS .OBJ>>)>>

"GIVE LONG DESCRIPTION OF OBJECT"

<DEFINE LONG-DESC-OBJ (OBJ "AUX" STR) 
	#DECL ((OBJ) OBJECT)
	<COND (<OR <OTOUCH? .OBJ> <NOT <ODESCO .OBJ>>>
	       <SET STR <ODESC1 .OBJ>>)
	      (<SET STR <ODESCO .OBJ>>)>
	<COND (<EMPTY? .STR> <>)
	      (<TELL .STR 0>)>>

"TRUE IF PARSER WON:  OTHERWISE INHIBITS OBJECT ACTIONS, CLOCKS (BUT NOT THIEF)."

<GDECL (PARSE-WON) <OR ATOM FALSE>>

<PSETG READER-STRING <STRING <ASCII 27> <ASCII 13> <ASCII 10>>>

<DEFINE RDCOM ("OPTIONAL" (IVEC <>)
	       "AUX" (STR ,READER-STRING) VC RVEC RM (INPLEN 1) (INBUF ,INBUF)
		     (WINNER ,WINNER) AV (OUTCHAN ,OUTCHAN) RANDOM-ACTION)
   #DECL ((RVEC) <OR FALSE VECTOR> (RM) ROOM (INPLEN) FIX (INBUF) STRING
	  (WINNER) ADV (AV) <OR FALSE OBJECT> (OUTCHAN) CHANNEL
	  (IVEC) <OR FALSE VECTOR> (VC) VECTOR)
   <OR .IVEC <PROG ()
		   <PUT .OUTCHAN 13 1000>
		   <ROOM-INFO T>>>
   <REPEAT (VVAL CV)
	   #DECL ((CV) <OR FALSE VERB>)
	   <SET VVAL T>
	   <COND (<NOT .IVEC>
		  <SET RM ,HERE>
		  <PRINC ">">
		  <SETG TELL-FLAG <>>
		  <SET INPLEN <READSTRING .INBUF ,INCHAN .STR>>
		  <READCHR ,INCHAN>
		  <OR ,ALT-FLAG <READCHR ,INCHAN>>
		  <SET VC <LEX .INBUF <REST .INBUF .INPLEN> T>>)>
	   <COND (<G? .INPLEN 0>
		  <SETG MOVES <+ ,MOVES 1>>
		  <COND (<SETG PARSE-WON
			       <AND <EPARSE <OR .IVEC .VC> <>>
				    <TYPE? <SET CV <1 <SET RVEC ,PRSVEC>>> VERB>>>
			 <COND (<NOT <SET RANDOM-ACTION <AACTION .WINNER>>>)
			       (<APPLY-RANDOM .RANDOM-ACTION>
				<RETURN>)>
			 <AND <SET AV <AVEHICLE .WINNER>>
			      <SET RANDOM-ACTION <OACTION .AV>>
			      <SET VVAL <NOT <APPLY-RANDOM .RANDOM-ACTION READ-IN>>>>
			 <COND (<AND .VVAL <SET RANDOM-ACTION <VFCN .CV>>
				     <APPLY-RANDOM .RANDOM-ACTION>>
				<COND (<AND <SET RANDOM-ACTION <RACTION <SET RM ,HERE>>>
					    <APPLY-RANDOM .RANDOM-ACTION>>)>)>)
			(.IVEC
			 <COND (,TELL-FLAG
				<TELL "Please input entire command again.">)
			       (<TELL "Nothing happens.">)>
			 <RETURN>)>
		  <OR ,TELL-FLAG <TELL "Nothing happens.">>)
		 (T <SETG PARSE-WON <>> <TELL "Beg pardon?">)>
	   <MAPF <>
		 <FUNCTION (X) 
			 #DECL ((X) HACK)
			 <COND (<SET RANDOM-ACTION <HACTION .X>>
				<APPLY-RANDOM .RANDOM-ACTION .X>)>>
		 ,DEMONS>
	   <AND ,PARSE-WON
		<SET AV <AVEHICLE .WINNER>>
		<SET RANDOM-ACTION <OACTION .AV>>
		<APPLY-RANDOM .RANDOM-ACTION READ-OUT>>
	   <AND .IVEC <RETURN>>>>

<DEFINE SCORE-OBJ (OBJ "AUX" TEMP) #DECL ((OBJ) OBJECT)
	<COND (<G? <SET TEMP <OFVAL .OBJ>> 0>
	       <SCORE-UPD .TEMP>
	       <PUT .OBJ ,OFVAL 0>)>>

<DEFINE SCORE-ROOM (RM "AUX" TEMP) #DECL ((RM) ROOM)
	<COND (<G? <SET TEMP <RVAL .RM>> 0>
	       <SCORE-UPD .TEMP>
	       <PUT .RM ,RVAL 0>)>>

<DEFINE SCORE-UPD (NUM "AUX" (WINNER ,WINNER)) #DECL ((NUM) FIX)
	<PUT .WINNER ,ASCORE <+ <ASCORE .WINNER> .NUM>>
	<SETG RAW-SCORE <+ ,RAW-SCORE .NUM>>>

<DEFINE SCORE ("OPTIONAL" (ASK? T) "AUX" SCOR (OUTCHAN .OUTCHAN) PCT) 
	#DECL ((ASK?) <OR ATOM FALSE> (SCOR) FIX (OUTCHAN) CHANNEL (PCT) FLOAT)
	<SETG TELL-FLAG T>
	<CRLF>
	<COND (.ASK? <PRINC 
"Your score would be ">)
	      (<PRINC "Your score is ">)>
	<PRIN1 <SET SCOR
		    <ASCORE ,WINNER>>>
	<PRINC " [total of ">
	<PRIN1 ,SCORE-MAX>
	<PRINC " points], in ">
	<PRIN1 ,MOVES>
	<COND (<1? ,MOVES> <PRINC " move.">)
	      (<PRINC " moves.">)>
	<CRLF>
	<PRINC "This score gives you the rank of ">
	<SET PCT </ <FLOAT .SCOR> <FLOAT ,SCORE-MAX>>>
	<PRINC <COND (<1? .PCT> "Cheater")
		     (<G? .PCT 0.95000000> "Wizard")
		     (<G? .PCT 0.89999999> "Master")
		     (<G? .PCT 0.79999999> "Winner")
		     (<G? .PCT 0.60000000> "Hacker")
		     (<G? .PCT 0.39999999> "Adventurer")
		     (<G? .PCT 0.19999999> "Junior Adventurer")
		     (<G? .PCT 0.09999999> "Novice Adventurer")
		     (<G? .PCT 0.04999999> "Amateur Adventurer")
		     ("Beginner")>>
	<PRINC ".">
	<CRLF>
	.SCOR>

<DEFINE FINISH ("OPTIONAL" (ASK? T) "AUX" SCOR) 
	#DECL ((ASK?) <OR ATOM FALSE> (SCOR) FIX)
	<UNWIND
	 <PROG ()
	  <SET SCOR <SCORE .ASK?>>
	  <COND (<OR <AND .ASK?
			  <TELL 
"Do you wish to leave the game? (Y is affirmative): ">
			  <YES/NO <>>>
		     <NOT .ASK?>>
	         <RECORD .SCOR ,MOVES ,DEATHS .ASK? ,HERE>
	         <QUIT>)>>
	 <QUIT>>>

"PRINT OUT DESCRIPTION OF LOSSAGE:  WHEN PLAYED, SCORE, # MOVES, ETC."

<SETG RECORD-STRING <ISTRING 5>>

<GDECL (RECORD-STRING) STRING>

<PSETG RECORDER-STRING <STRING <ASCII 26> <ASCII 3> <ASCII 0>>>

<DEFINE RECORD RECORD (SCORE MOVES DEATHS QUIT? LOC
		"AUX" (CH <>) (STR ,RECORD-STRING) FL (CT 0) (MUDDLE ,MUDDLE)
		(DEV <VALUE DEV>) (SNM <VALUE SNM>))
	#DECL ((MUDDLE SCORE MOVES DEATHS) FIX (QUIT?) <OR ATOM FALSE> (LOC) ROOM
	       (CH) <OR <CHANNEL FIX> FALSE> (STR) STRING (CT FL) FIX
	       (DEV SNM) STRING)
	<UNWIND
	 <PROG ()
	  <PROG ()
		<COND (<SET CH <OPEN "READB" "ZORK" "LOG" .DEV .SNM>>
		       <COND (<G=? <SET FL <FILE-LENGTH .CH>> 1>
			      <ACCESS .CH <- .FL 1>>
			      <SET CT <READSTRING .STR .CH ,RECORDER-STRING>>)>
		       <CLOSE .CH>
		       <COND (<SET CH <OPEN "PRINTO" "ZORK" "LOG" .DEV .SNM>>)
			     (<AND <G? .MUDDLE 100> <==? <3 .CH> *600123*>>
			      ; "Can't win--no write access"
			      <RETURN T .RECORD>)
			     (T <SLEEP 1> <AGAIN>)>
		       <ACCESS .CH <MAX 0 <- .FL 1>>>
		       <PRINTSTRING .STR .CH .CT>)
		      (<OR <AND <L? .MUDDLE 100> <N==? <3 .CH> *4000000*>>
			   <AND <G? .MUDDLE 100> <==? <3 .CH> *600130*>>>
		       ;"on 10x, must get FILE BUSY to try again"
		       <SLEEP 1>
		       <AGAIN>)
		      (<SET CH <OPEN "PRINT" "ZORK" "LOG" .DEV .SNM>>)
		      (<AND <G? .MUDDLE 100> <==? <3 .CH> *600117*>>
		       ; "No write access"
		       <RETURN T .RECORD>)
		      (<RETURN T .RECORD>)>>
	  <CRLF .CH>
	  <PRINC "	" .CH>
	  <PRINC ,USER-NAME .CH>
	  <COND (<N=? ,USER-NAME ,XUNM>
		 <PRINC "  (" .CH>
		 <PRINC ,XUNM .CH>
		 <PRINC !\) .CH>)>
	  <PRINC "	" .CH>
	  <PDSKDATE <DSKDATE> .CH>
	  <CRLF .CH>
	  <PLAY-TIME .CH <>>
	  <CRLF .CH>
	  <PRIN1 .SCORE .CH>
	  <PRINC !\/ .CH>
	  <PRIN1 ,SCORE-MAX .CH>
	  <PRINC " points, " .CH>
	  <PRIN1 .MOVES .CH>
	  <PRINC " moves, " .CH>
	  <PRIN1 .DEATHS .CH>
	  <PRINC " death" .CH>
	  <COND (<1? .DEATHS> <PRINC "." .CH>)
		(T <PRINC "s." .CH>)>
	  <PRINC "  In " .CH>
	  <PRINC <RDESC2 .LOC> .CH>
	  <COND (.QUIT? <PRINC ". Quit." .CH>)
		(<EMPTY? .QUIT?> <PRINC ". Died." .CH>)
		(<PRINC <1 .QUIT?> .CH>)>
	  <CRLF .CH>
	  <MAPF <>
		<FUNCTION (X Y) 
			  #DECL ((X) ATOM (Y) STRING)
			  <COND (,.X <PRINC "/" .CH> <PRINC .Y .CH>)>>
		,FLAG-NAMES
		,SHORT-NAMES>
	  <MAPF <>
		<FUNCTION (X Y)
			  #DECL ((X) ATOM (Y) STRING)
			  <COND (<0? ,.X> <PRINC "/" .CH> <PRINC .Y .CH>)>>
		,VAL-NAMES
		,SHORT-VAL-NAMES>
	  <CRLF .CH>
	  <CLOSE .CH>>
	 <AND .CH <NOT <0? <1 .CH>>> <CLOSE .CH>>>>

FLAG-NAMES 

<GDECL (FLAG-NAMES VAL-NAMES)
       <UVECTOR [REST ATOM]>
       (SHORT-NAMES SHORT-VAL-NAMES)
       <VECTOR [REST STRING]>>

<BLOCK (<OR <GET FLAG OBLIST> <MOBLIST FLAG>> <GET INITIAL OBLIST> <ROOT>)>

<PSETG FLAG-NAMES
      <UVECTOR KITCHEN-WINDOW
	       TROLL-FLAG
	       KEY-FLAG
	       LOW-TIDE
	       DOME-FLAG
	       GLACIER-FLAG
	       ECHO-FLAG
	       RIDDLE-FLAG
	       LLD-FLAG
	       CYCLOPS-FLAG
	       MAGIC-FLAG
	       RAINBOW
	       GNOME-DOOR
	       CAROUSEL-FLIP
	       CAGE-SOLVE>>

<ENDBLOCK>

<PSETG SHORT-NAMES
      <VECTOR "KI" "TR" "KE" "LO" "DO" "GL" "EC"
	      "RI" "LL" "CY" "MA" "RA" "GN" "CA" "CG">>

<PSETG VAL-NAMES <UVECTOR LIGHT-SHAFT>>

<PSETG SHORT-VAL-NAMES <VECTOR "LI">>

<DEFINE PDSKDATE (WD CH
		  "AUX" (TIM <CHTYPE <GETBITS .WD <BITS 18 0>> FIX>) (A/P " AM")
			HR)
	#DECL ((WD) <PRIMTYPE WORD> (TIM HR) FIX (A/P) STRING (CH) CHANNEL)
	<PRINC " " .CH>
	<COND (<0? <CHTYPE .WD FIX>> <PRINC "unknown " .CH>)
	      (T
	       <PRINC <NTH ,MONTHS <CHTYPE <GETBITS .WD <BITS 4 23>> FIX>> .CH>
	       <PRINC " " .CH>
	       <PRIN1 <CHTYPE <GETBITS .WD <BITS 5 18>> FIX> .CH>
	       <PRINC " at " .CH>
	       <SET HR </ .TIM 7200>>
	       <COND (<G=? .HR 12> <SET HR <- .HR 12>> <SET A/P " PM">)>
	       <COND (<0? .HR> <SET HR 12>)>
	       <PRIN1 .HR .CH>
	       <PRINC ":" .CH>
	       <SET HR </ <MOD .TIM 7200> 120>>
	       <COND (<L? .HR 10> <PRINC "0" .CH>)>
	       <PRIN1 .HR .CH>
	       <PRINC .A/P .CH>)>>

<PSETG MONTHS
      ["January"
       "February"
       "March"
       "April"
       "May"
       "June"
       "July"
       "August"
       "September"
       "October"
       "November"
       "December"]>

<GDECL (MONTHS) <VECTOR [12 STRING]>>

<DEFINE JIGS-UP (DESC
		 "AUX" (WINNER ,WINNER) (DEATHS ,DEATHS) (AOBJS <AOBJS .WINNER>)
		       (RANDOM-LIST ,RANDOM-LIST) (LAMP <FIND-OBJ "LAMP">)
		       LAMP-LOCATION (VAL-LIST ()) LC)
	#DECL ((DESC) STRING (DEATHS) FIX (AOBJS) <LIST [REST OBJECT]>
	       (VAL-LIST) <LIST [REST OBJECT]> (LAMP-LOCATION) <OR FALSE ROOM>
	       (WINNER) ADV (RANDOM-LIST) <LIST [REST ROOM]> (LAMP) OBJECT)
  <COND
   (,DBG
    <TELL .DESC>)
   (<UNWIND
     <PROG ()
        <COND (<N==? .WINNER ,PLAYER>
	       <TELL .DESC>
	       <TELL "The " 1 <ODESC2 <AOBJ .WINNER>> " has died.">
	       <REMOVE-OBJECT <AOBJ .WINNER>>
	       <PUT .WINNER ,AROOM <FIND-ROOM "FCHMP">>
	       <RETURN>)>
	<RESET ,INCHAN>
	<SCORE-UPD -10>
	<PUT .WINNER ,AVEHICLE <>>
	<COND (<G=? .DEATHS 2>
	       <TELL .DESC>
	       <TELL 
"You clearly are a suicidal maniac.  We don't allow psychotics in the
cave, since they may harm other adventurers.  Your remains will
installed in the Land of the Living Dead, where your fellow adventurers 
may gloat over them.">
	       <FINISH <>>)
	      (<SETG DEATHS <+ .DEATHS 1>>
	       <TELL .DESC>
	       <TELL "Do you want me to try to patch you?" 0>
	       <COND (<NOT <YES/NO T>>
		      <TELL 
"What?  You don't trust me?  Why, only last week I patched a running ITS
and it survived for over 30 seconds.  Oh, well." 2>
		      <FINISH <>>)
		     (T
		      <TELL 
"Now, let me see...
Well, we weren't quite able to restore your state.  You can't have
everything.">
		      <COND (<SET LAMP-LOCATION <OROOM .LAMP>>
			     <PUT .WINNER ,AOBJS (.LAMP !.AOBJS)>
			     <COND (<MEMQ .LAMP <ROBJS .LAMP-LOCATION>>
				    <REMOVE-OBJECT .LAMP>)
				   (<SET LC <OCAN .LAMP>>
				    <PUT .LC
					 ,OCONTENTS
					 <SPLICE-OUT .LAMP <OCONTENTS .LC>>>
				    <PUT .LAMP ,OROOM <>>
				    <PUT .LAMP ,OCAN <>>)>)
			    (<MEMQ .LAMP .AOBJS>
			     <PUT .WINNER ,AOBJS (.LAMP !<SPLICE-OUT .LAMP .AOBJS>)>)>
		      <PUT <FIND-OBJ "DOOR"> ,OTOUCH? <>>
		      <GOTO <FIND-ROOM "FORE1">>
		      <SETG EGYPT-FLAG!-FLAG T>
		      <SET VAL-LIST <ROB-ADV .WINNER .VAL-LIST>>
		      <MAPF <>
			    <FUNCTION (X Y) 
				    #DECL ((X) OBJECT (Y) ROOM)
				    <INSERT-OBJECT .X .Y>>
			    <SET AOBJS <AOBJS .WINNER>>
			    .RANDOM-LIST>
		      <COND (<G=? <LENGTH .RANDOM-LIST> <LENGTH .AOBJS>>
			     <SET AOBJS .VAL-LIST>)
			    (<EMPTY? .VAL-LIST>
			     <SET AOBJS <REST .AOBJS <LENGTH .RANDOM-LIST>>>)
			    (T
			     <PUTREST <REST .VAL-LIST <- <LENGTH .VAL-LIST> 1>>
				      <REST .AOBJS <LENGTH .RANDOM-LIST>>>
			     <SET AOBJS .VAL-LIST>)>
		      <MAPF <>
			    <FUNCTION (X Y) 
				      #DECL ((X) OBJECT (Y) ROOM)
				      <INSERT-OBJECT .X .Y>>
			    .AOBJS
			    ,ROOMS>
		      <PUT .WINNER ,AOBJS ()>
		      T)>)>>
     <PROG ()
       <RECORD <SCORE <>> ,MOVES ,DEATHS <> ,HERE>
       <QUIT>>>)>>

<DEFINE INFO () <FILE-TO-TTY "MADADV" "INFO">>

<DEFINE HELP () <FILE-TO-TTY "MADADV" "HELP">>

<PSETG BREAKS <STRING <ASCII 3> <ASCII 0>>>

<DEFINE FILE-TO-TTY (FILE1 FILE2 "OPTIONAL" (DEV <VALUE DEV>) (SNM <VALUE SNM>)
		     "AUX" (CH <OPEN "READ" .FILE1 .FILE2 .DEV .SNM>)
		     	   LEN
			   (BUF ,INBUF) (BUFLEN <LENGTH .BUF>)
			   ITER)
	#DECL ((BUF FILE1 FILE2 DEV SNM) STRING (CH) <OR CHANNEL FALSE> 
	       (ITER LEN BUFLEN) FIX)
	<COND (.CH
	       <UNWIND
		<PROG ()
		      <SET LEN <FILE-LENGTH .CH>>
		      <SET ITER </ .LEN .BUFLEN>>
		      <OR <0? <MOD .LEN .BUFLEN>> <SET ITER <+ .ITER 1>>>
		      <CRLF ,OUTCHAN>
		      <SETG TELL-FLAG T>
		      <REPEAT (SLEN)
			      #DECL ((SLEN) FIX)
			      <COND (<1? .ITER>
				     <SET SLEN <READSTRING .BUF .CH ,BREAKS>>)
				    (<SET SLEN <READSTRING .BUF .CH .BUFLEN>>)>
			      <PRINTSTRING .BUF ,OUTCHAN .SLEN>
			      <COND (<0? <SET ITER <- .ITER 1>>>
				     <CRLF ,OUTCHAN>
				     <RETURN <CLOSE .CH>>)>>>
		<CLOSE .CH>>)
	      (<TELL "File not found.">)>>

<DEFINE INVENT ("OPTIONAL" (WIN ,WINNER) "AUX" (ANY <>) (OUTCHAN ,OUTCHAN)) 
   #DECL ((ANY) <OR ATOM FALSE> (OUTCHAN) CHANNEL (WIN) ADV)
   <MAPF <>
    <FUNCTION (X) 
	    #DECL ((X) OBJECT)
	    <COND (<OVIS? .X>
		   <OR .ANY <PROG ()
				  <COND (<==? .WIN ,PLAYER>
					 <TELL "You are carrying:">)
					(<TELL "The "
					       1
					       <ODESC2 <AOBJ .WIN>>
					       " is carrying:">)>
				  <SET ANY T>>>
		   <TELL "A " 0 <ODESC2 .X>>
		   <COND (<OR <EMPTY? <OCONTENTS .X>> <NOT <SEE-INSIDE? .X>>>)
			 (<TELL " with " 0>
			  <PRINT-CONTENTS <OCONTENTS .X>>)>
		   <CRLF>)>>
    <AOBJS .WIN>>
   <OR .ANY <N==? .WIN ,PLAYER> <TELL "You are empty handed.">>>

<DEFINE PRINT-CONTENTS (OLST "AUX" (OUTCHAN ,OUTCHAN))
    #DECL ((OLST) <LIST [REST OBJECT]> (OUTCHAN) CHANNEL)
    <MAPR <>
	<FUNCTION (Y) 
		#DECL ((Y) <LIST [REST OBJECT]>)
		<PRINC "a ">
		<PRINC <ODESC2 <1 .Y>>>
		<COND (<G? <LENGTH .Y> 2>
		       <PRINC ", ">)
		      (<==? <LENGTH .Y> 2>
		       <PRINC ", and ">)>>
	.OLST>>



;"LIT? --
	IS THERE ANY LIGHT SOURCE IN THIS ROOM"

<DEFINE LIT? (RM "AUX" (WIN ,WINNER))
	#DECL ((RM) ROOM (WIN) ADV)
	<OR <RLIGHT? .RM>
	    <LFCN <ROBJS .RM>>
	    <LFCN <AOBJS .WIN>>
	    <AND <N==? .WIN ,PLAYER>
		 <==? ,HERE <AROOM ,PLAYER>>
		 <LFCN <AOBJS ,PLAYER>>>>>

<DEFINE LFCN LFCN (L "AUX" Y) 
	#DECL ((L) <LIST [REST OBJECT]> (Y) ADV)
	<MAPF <>
	      <FUNCTION (X) 
		      #DECL ((X) OBJECT)
		      <AND <G? <OLIGHT? .X> 0> <MAPLEAVE T>>
		      <COND (<AND <OVIS? .X>
				  <OR <OOPEN? .X>
				      <TRANSPARENT? .X>>>
			     <MAPF <>
			       <FUNCTION (X) #DECL ((X) OBJECT)
				 <COND (<G? <OLIGHT? .X> 0>
					<RETURN T .LFCN>)>>
			       <OCONTENTS .X>>)>
		      <COND (<AND <TRNN .X ,ACTORBIT>
				  <LFCN <AOBJS <SET Y <ORAND .X>>>>>
			     <MAPLEAVE T>)>>
	      .L>>

;"WALK --
	GIVEN A DIRECTION, WILL ATTEMPT TO WALK THERE"

<DEFINE WALK ("AUX" LEAVINGS NRM (WHERE <CHTYPE <2 ,PRSVEC> ATOM>) (ME ,WINNER)
		    (RM <1 .ME>) NL RANDOM-ACTION CXS)
	#DECL ((WHERE) ATOM (ME) ADV (RM) ROOM (LEAVINGS) <OR ATOM ROOM CEXIT NEXIT>
	       (NRM) <OR FALSE
			 <<PRIMTYPE VECTOR> [REST ATOM <OR ROOM NEXIT CEXIT>]>>
	       (NL) <OR ATOM ROOM FALSE>)
	<COND (<AND <==? .ME ,PLAYER> <NOT <LIT? .RM>> <PROB 75>>
	       <COND (<SET NRM <MEMQ .WHERE <REXITS .RM>>>
		      <SET LEAVINGS <2 .NRM>>
		      <COND (<AND <TYPE? .LEAVINGS ROOM> <LIT? .LEAVINGS>>
			     <AND <GOTO .LEAVINGS> <ROOM-INFO <>>>)
			    (<AND <TYPE? .LEAVINGS CEXIT>
				  <SET LEAVINGS
				       <COND (<AND <SET RANDOM-ACTION
							<CXACTION .LEAVINGS>>
						   <APPLY-RANDOM .RANDOM-ACTION>>)
					     (,<CXFLAG .LEAVINGS>
					      <CXROOM .LEAVINGS>)>>
				  <LIT? .LEAVINGS>>
			     <OR <TYPE? .LEAVINGS ATOM>
				 <AND <GOTO .LEAVINGS> <ROOM-INFO <>>>>)
			    (<JIGS-UP 
"Oh, no!  A fearsome grue slithered into the room and devoured you.">)>)
		     (<JIGS-UP 
"Oh, no!  You walked into the slavering fangs of a lurking grue.">)>)
	      (<SET NRM <MEMQ .WHERE <REXITS .RM>>>
	       <SET LEAVINGS <2 .NRM>>
	       <COND (<TYPE? .LEAVINGS ROOM> <AND <GOTO .LEAVINGS> <ROOM-INFO <>>>)
		     (<TYPE? .LEAVINGS CEXIT>
		      <COND (<OR <AND <SET RANDOM-ACTION <CXACTION .LEAVINGS>>
				      <SET NL <APPLY-RANDOM .RANDOM-ACTION>>>
				 <AND ,<CXFLAG .LEAVINGS>
				      <SET NL <CXROOM .LEAVINGS>>>>
			     <OR <TYPE? .NL ATOM> <AND <GOTO .NL> <ROOM-INFO <>>>>)
			    (<SET CXS <CXSTR .LEAVINGS>>
			     <OR <EMPTY? .CXS>
				 <TELL .CXS>>)
			    (<TELL "There is no way to go in that direction.">)>)
		     (T <TELL .LEAVINGS>)>)
	      (<TELL "There is no way to go in that direction.">)>>

<DEFINE TAKE ("OPTIONAL" (TAKE? T)
	      "AUX" (WIN ,WINNER) (VEC ,PRSVEC) (RM <AROOM .WIN>) NOBJ
		    (OBJ <2 .VEC>) (GETTER? <>) (ROBJS <ROBJS .RM>)
		    (AOBJS <AOBJS .WIN>) (LOAD-MAX ,LOAD-MAX))
   #DECL ((WIN) ADV (VEC) VECTOR (OBJ NOBJ) OBJECT (RM) ROOM
	  (GETTER? TAKE?) <OR ATOM FALSE> (LOAD-MAX) FIX 
	  (ROBJS AOBJS) <LIST [REST OBJECT]>)
   <PROG ()
	 <COND (<TRNN .OBJ ,NO-CHECK-BIT>
		<RETURN <OBJECT-ACTION>>)>
	 <COND (<OCAN .OBJ>
		<SET NOBJ <OCAN .OBJ>>
		<COND (<SEE-INSIDE? .NOBJ>
		       <COND (<OOPEN? .NOBJ> <SET GETTER? T>)
			     (<TELL "I can't reach that."> <RETURN <>>)>)
		      (<TELL "I can't see one here."> <RETURN <>>)>)>
	 <COND
	  (<==? .OBJ <AVEHICLE .WIN>>
	   <TELL "You are in it, loser!">
	   <RETURN <>>)
	  (<NOT <CAN-TAKE? .OBJ>>
	   <OR <APPLY-OBJECT .OBJ> <TELL <PICK-ONE ,YUKS>>>
	   <RETURN <>>)
	  (<OR .GETTER? <MEMQ .OBJ .ROBJS>>
	   <SET LOAD-MAX <+ .LOAD-MAX <FIX <* </ 1.0 .LOAD-MAX> <ASTRENGTH .WIN>>>>>
	   <COND (<AND .GETTER? <MEMQ .NOBJ .AOBJS>>)
		 (<G? <+ <WEIGHT .AOBJS> <WEIGHT <OCONTENTS .OBJ>> <OSIZE .OBJ>>
		      .LOAD-MAX>
		  <TELL 
"Your load is too heavy.  You will have to leave something behind.">
		  <RETURN <>>)>
	   <COND (<NOT <APPLY-OBJECT .OBJ>>
		  <COND (.GETTER?
			 <PUT .NOBJ
			      ,OCONTENTS
			      <SPLICE-OUT .OBJ <OCONTENTS .NOBJ>>>
			 <PUT .OBJ ,OROOM <>>
			 <PUT .OBJ ,OCAN <>>)
			(<REMOVE-OBJECT .OBJ>)>
		  <PUT .WIN ,AOBJS (.OBJ !.AOBJS)>
		  <PUT .OBJ ,OTOUCH? T>
		  <SCORE-OBJ .OBJ>
		  <COND (.TAKE? <TELL "Taken.">) (T)>)
		 (T)>)
	  (<MEMQ .OBJ .AOBJS> <TELL "You already have it.">)
	  (<TELL "I can't see one here."> <>)>>>

<DEFINE PUTTER ("OPTIONAL" (OBJACT T) 
		"AUX" (PV ,PRSVEC) (OBJO <2 .PV>) (OBJI <3 .PV>) (WIN ,WINNER)
		(AOBJS <AOBJS .WIN>) CROCK CAN (ROBJS <ROBJS ,HERE>)
		(OCAN <>))
	#DECL ((PV) <VECTOR [3 ANY]> (OBJO OBJI) OBJECT (WIN) ADV
	       (AOBJS ROBJS) <LIST [REST OBJECT]> (CROCK CAN) OBJECT
	       (OCAN) <OR FALSE OBJECT> (OBJACT) <OR ATOM FALSE>)
	<PROG ()
	      <COND (<TRNN .OBJO ,NO-CHECK-BIT>
		     <RETURN <OBJECT-ACTION>>)>
	      <COND (<OR <MEMQ .OBJO ,STARS>
			 <MEMQ .OBJI ,STARS>>
		     <TELL "Nice try.">
		     <RETURN <>>)>
	      <COND (<OR <OOPEN? .OBJI>
			 <OPENABLE? .OBJI>
			 <TRNN .OBJI ,VEHBIT>>
		     <SET CAN .OBJI>
		     <SET CROCK .OBJO>)
		    (<TELL "I can't do that."> <RETURN <>>)>
	      <COND (<NOT <OOPEN? .CAN>>
		     <TELL "I can't reach inside.">
		     <RETURN <>>)
		    (<==? .CAN .CROCK>
		     <TELL "How can you do that?">
		     <RETURN <>>)
		    (<G? <+ <WEIGHT <OCONTENTS .CAN>> <OSIZE .CROCK>>
			 <OCAPAC .CAN>>
		     <TELL "It won't fit.">
		     <RETURN <>>)>
	      <COND (<OR <MEMQ .CROCK .ROBJS>
			 <AND <SET OCAN <OCAN .CROCK>>
			      <MEMQ .OCAN .ROBJS>>
			 <AND .OCAN
			      <SET OCAN <OCAN .OCAN>>
			      <MEMQ .OCAN .ROBJS>>>
		     <PUT .PV 1 ,TAKE!-WORDS>
		     <PUT .PV 2 .CROCK>
		     <PUT .PV 3 <>>
		     <COND (<NOT <TAKE <>>> <RETURN <>>)
			   (<SET AOBJS <AOBJS .WIN>>)>)
		    (<SET OCAN <OCAN .CROCK>>
		     <COND (<OOPEN? .OCAN>
			    <PUT .WIN ,AOBJS <SET AOBJS (.CROCK !.AOBJS)>>
			    <PUT .OCAN
				 ,OCONTENTS
				 <SPLICE-OUT .CROCK <OCONTENTS .OCAN>>>
			    <PUT .CROCK ,OCAN <>>)
			   (<TELL "I can't reach the " 1 <ODESC2 .CROCK>>
			    <RETURN <>>)>)>
	      <PUT .PV 1 ,PUT!-WORDS>
	      <PUT .PV 2 .CROCK>
	      <PUT .PV 3 .CAN>
	      <COND (<AND .OBJACT <OBJECT-ACTION>> <RETURN>)
		    (<PUT .WIN ,AOBJS <SPLICE-OUT .CROCK .AOBJS>>
		     <PUT .CAN ,OCONTENTS (.CROCK !<OCONTENTS .CAN>)>
		     <PUT .CROCK ,OCAN .CAN>
		     <PUT .CROCK ,OROOM ,HERE>
		     <TELL "Done.">)>>>
 
<DEFINE DROPPER ("AUX" (WINNER ,WINNER) (AV <AVEHICLE .WINNER>)
		    (AOBJS <AOBJS .WINNER>) (GETTER? <>) (VEC ,PRSVEC)
		    (RM <AROOM .WINNER>) (OBJ <2 .VEC>) (PI <3 .VEC>)  NOBJ)
	#DECL ((VEC) <VECTOR VERB OBJECT <OR FALSE OBJECT>>
	       (OBJ NOBJ) OBJECT (PI AV) <OR FALSE OBJECT>
	       (RM) ROOM (GETTER?) <OR ATOM FALSE>)
	<PROG ()
	      <COND (<AND <MEMQ <VNAME <1 .VEC>> '[DROP!-WORDS POUR!-WORDS]>
			  .PI>
		     <PUT .VEC 1 ,PUT!-WORDS>
		     <RETURN <PUTTER>>)
		    (<AND .PI
			  <NOT <OR <MEMQ .OBJ .AOBJS>
				   <MEMQ <OCAN .OBJ> .AOBJS>>>>
		     <PUT .VEC 2 .PI>
		     <PUT .VEC 3 .OBJ>
		     <SET OBJ <2 .VEC>>)>
	      <COND (<TRNN .OBJ ,NO-CHECK-BIT>
		     <RETURN <OBJECT-ACTION>>)>
	      <COND (<AND <OCAN .OBJ> <SET NOBJ <OCAN .OBJ>> <MEMQ .NOBJ .AOBJS>>
		     <COND (<OOPEN? .NOBJ> <SET GETTER? T>)
			   (<TRANSPARENT? .NOBJ>
			    <TELL "I can't reach that.">
			    <RETURN>)
			   (<TELL "I can't see that here.">)>)>
	      <COND (<OR .GETTER? <MEMQ .OBJ .AOBJS>>
		     <COND (.AV)
			   (.GETTER?
			    <PUT .NOBJ
				 ,OCONTENTS
				 <SPLICE-OUT .OBJ <OCONTENTS .NOBJ>>>
			    <PUT .OBJ ,OCAN <>>)
			   (<PUT .WINNER ,AOBJS <SPLICE-OUT .OBJ .AOBJS>>)>
		     <COND (.AV <PUT .VEC 2 .OBJ> <PUT .VEC 3 .AV> <PUTTER <>>)
			   (<INSERT-OBJECT .OBJ .RM>)>
		     <COND (<OBJECT-ACTION>)
			   (<==? <VNAME <1 .VEC>> DROP!-WORDS>
			    <TELL "Dropped.">)
			   (<==? <VNAME <1 .VEC>> THROW!-WORDS>
			    <TELL "Thrown.">)>)
		    (<TELL "You are not carrying that.">)>>>



"STUFF FOR 'EVERYTHING' AND 'VALUABLES'"
<SETG OBJ-UV <CHUTYPE <REST <IUVECTOR 20> 20> OBJECT>>
<GDECL (OBJ-UV) <UVECTOR [REST OBJECT]>>

<DEFINE FROB-LOTS (UV "AUX" (PRSVEC ,PRSVEC) (PA <1 .PRSVEC>) (RA <VFCN .PA>) PI
		   (WINNER ,WINNER) (HERE ,HERE))
  #DECL ((UV) <UVECTOR [REST OBJECT]> (PRSVEC) <VECTOR VERB [2 ANY]>
	 (PA) VERB (RA) RAPPLIC (PI) <OR OBJECT FALSE> (WINNER) ADV (HERE) ROOM)
  <COND (<==? .PA ,TAKE!-WORDS>
	 <MAPF <>
	   <FUNCTION (X) #DECL ((X) OBJECT)
	     <COND (<OR <CAN-TAKE? .X>
			<TRNN .X ,TRYTAKEBIT>>
		    <PUT .PRSVEC 2 .X>
		    <TELL <ODESC2 .X> 0 ":
  ">
		    <APPLY-RANDOM .RA>
		    <COND (<N==? .HERE <AROOM .WINNER>>
			   <MAPLEAVE>)>)>>
	   .UV>)
	(<OR <==? .PA ,DROP!-WORDS>
	     <==? .PA ,PUT!-WORDS>>
	 <MAPF <>
	   <FUNCTION (X) #DECL ((X) OBJECT)
	     <PUT .PRSVEC 2 .X>
	     <TELL <ODESC2 .X> 0 ":
  ">
	     <APPLY-RANDOM .RA>
	     <COND (<N==? .HERE <AROOM .WINNER>>
		    <MAPLEAVE>)>>
	   .UV>)>
  T>

<PSETG LOSSTR "I can't do everything, because I ran out of room.">

<DEFINE EVERYTHING ("AUX" (PRSVEC ,PRSVEC)
		    (PA <1 .PRSVEC>) PI (SUV ,OBJ-UV) (TUV <TOP .SUV>)
		    (LU <LENGTH .TUV>) (HERE ,HERE) (WINNER ,WINNER))
  #DECL ((PA) VERB (SUV TUV) <UVECTOR [REST OBJECT]> (LU) FIX (HERE) ROOM
	 (WINNER) ADV (PI) OBJECT)
  <COND (<==? .PA ,TAKE!-WORDS>
	 <MAPF <>
	   <FUNCTION (X) #DECL ((X) OBJECT)
	     <COND (<AND <OVIS? .X> <NOT <TRNN .X ,ACTORBIT>>>
		    <COND (<==? .SUV .TUV>
			   <TELL ,LOSSTR>
			   <MAPLEAVE>)>
		    <SET SUV <BACK .SUV>>
		    <PUT .SUV 1 .X>)>>
	   <ROBJS .HERE>>)
	(<==? .PA ,DROP!-WORDS>
	 <MAPF <>
	   <FUNCTION (X) #DECL ((X) OBJECT)
	     <SET SUV <BACK .SUV>>
	     <PUT .SUV 1 .X>>
	   <AOBJS .WINNER>>)
	(<==? .PA ,PUT!-WORDS>
	 <SET PI <3 .PRSVEC>>
	 <PROG RP ()
	   <MAPF <>
	     <FUNCTION (X) #DECL ((X) OBJECT)
	       <COND (<AND <OVIS? .X> <N==? .X .PI> <NOT <TRNN .X ,ACTORBIT>>>
		      <COND (<==? .SUV .TUV>
			     <TELL ,LOSSTR>
			     <RETURN T .RP>)>
		      <SET SUV <BACK .SUV>>
		      <PUT .SUV 1 .X>)>>
	     <ROBJS .HERE>>
	   <MAPF <>
	     <FUNCTION (X) #DECL ((X) OBJECT)
	       <COND (<AND <==? .SUV .TUV>
			   <N==? .X .PI>>
		      <TELL ,LOSSTR>
		      <RETURN T .RP>)>
	       <SET SUV <BACK .SUV>>
	       <PUT .SUV 1 .X>>
	     <AOBJS .WINNER>>>)>
  <COND (<EMPTY? .SUV>
	 <TELL "I couldn't find anything.">)
	(<FROB-LOTS .SUV>)>>

<DEFINE VALUABLES ("AUX" (PRSVEC ,PRSVEC)
		    (PA <1 .PRSVEC>) (SUV ,OBJ-UV) (TUV <TOP .SUV>) PI
		    (LU <LENGTH .TUV>) (HERE ,HERE) (WINNER ,WINNER))
  #DECL ((PA) VERB (SUV TUV) <UVECTOR [REST OBJECT]> (LU) FIX (HERE) ROOM
	 (WINNER) ADV (PI) OBJECT)
  <COND (<==? .PA ,TAKE!-WORDS>
	 <MAPF <>
	   <FUNCTION (X) #DECL ((X) OBJECT)
	     <COND (<AND <OVIS? .X>
			 <NOT <TRNN .X ,ACTORBIT>>
			 <NOT <0? <OTVAL .X>>>>
		    <COND (<==? .SUV .TUV>
			   <TELL ,LOSSTR>
			   <MAPLEAVE>)>
		    <SET SUV <BACK .SUV>>
		    <PUT .SUV 1 .X>)>>
	   <ROBJS .HERE>>)
	(<==? .PA ,DROP!-WORDS>
	 <MAPF <>
	   <FUNCTION (X) #DECL ((X) OBJECT)
	     <COND (<NOT <0? <OTVAL .X>>>
		    <SET SUV <BACK .SUV>>
		    <PUT .SUV 1 .X>)>>
	   <AOBJS .WINNER>>)
	(<==? .PA ,PUT!-WORDS>
	 <SET PI <3 .PRSVEC>>
	 <PROG RP ()
	   <MAPF <>
	     <FUNCTION (X) #DECL ((X) OBJECT)
	       <COND (<AND <==? .SUV .TUV>
			   <N==? .X .PI>>
		      <TELL ,LOSSTR>
		      <RETURN T .RP>)>
	       <COND (<AND <OVIS? .X>
			   <NOT <0? <OTVAL .X>>>>
		      <SET SUV <BACK .SUV>>
		      <PUT .SUV 1 .X>)>>
	     <ROBJS .HERE>>
	   <MAPF <>
	     <FUNCTION (X) #DECL ((X) OBJECT)
	       <COND (<AND <==? .SUV .TUV>
			   <N==? .X .PI>>
		      <TELL ,LOSSTR>
		      <RETURN T .RP>)>
	       <COND (<NOT <0? <OTVAL .X>>>
		      <SET SUV <BACK .SUV>>
		      <PUT .SUV 1 .X>)>>
	     <AOBJS .WINNER>>>)>
  <COND (<EMPTY? .SUV>
	 <TELL "I couldn't find any valuables.">)
	(<FROB-LOTS .SUV>)>>




<DEFINE OPENER OPEN-ACT ("AUX" (PV ,PRSVEC) (PRSO <2 .PV>) (OUTCHAN ,OUTCHAN)) 
	#DECL ((PRSO) OBJECT (PV) <VECTOR [3 ANY]> (OUTCHAN) CHANNEL)
	<COND (<OBJECT-ACTION>)
	      (<NOT <TRNN .PRSO ,CONTBIT>>
	       <TELL "You must tell me how to do that to a " 1 <ODESC2 .PRSO> ".">)
	      (<N==? <OCAPAC .PRSO> 0>
	       <COND (<OOPEN? .PRSO> <TELL "It is already open.">)
		     (T
		      <PUT .PRSO ,OOPEN? T>
		      <COND (<OR <EMPTY? <OCONTENTS .PRSO>>
				 <TRANSPARENT? .PRSO>>
			     <TELL "Opened.">)
			    (<SETG TELL-FLAG T>
			     <TELL "Opening the " 0 <ODESC2 .PRSO> " reveals ">
			     <PRINT-CONTENTS <OCONTENTS .PRSO>>
			     <PRINC !\.>
			     <CRLF>)>)>)
	      (<TELL "The " 1 <ODESC2 .PRSO> " cannot be opened.">)>>

<DEFINE CLOSER CLOSE-ACT ("AUX" (PV ,PRSVEC) (PRSO <2 .PV>)) 
	#DECL ((PV) <VECTOR [3 ANY]> (PRSO) OBJECT)
	<COND (<OBJECT-ACTION>)
	      (<NOT <TRNN .PRSO ,CONTBIT>>
	       <TELL "You must tell me how to do that to a " 1 <ODESC2 .PRSO> ".">)
	      (<N==? <OCAPAC .PRSO> 0>
	       <COND (<OOPEN? .PRSO> <PUT .PRSO ,OOPEN? <>> <TELL "Closed.">)
		     (T <TELL "It is already closed.">)>)
	      (<TELL "You cannot close that.">)>>

<DEFINE FIND ("AUX" (PRSO <2 ,PRSVEC>))
  #DECL ((PRSO) <OR FALSE OBJECT>)
  <COND (<OBJECT-ACTION>)
	(.PRSO
	 <FIND-FROB .PRSO
		    <ROBJS ,HERE>
		    ", which is in the room."
		    "There is a "
		    " here.">
	 <FIND-FROB .PRSO
		    <AOBJS ,WINNER>
		    ", which you are carrying."
		    "You are carrying a "
		    ".">
	 <COND (<NOT ,TELL-FLAG>
		<TELL "I can't see that here.">)>)
	(<TELL "I don't know what that is.">)>>

<DEFINE FIND-FROB (PRSO OBJL STR1 STR2 STR3)
  #DECL ((OBJ) OBJECT (OBJL) <LIST [REST OBJECT]> (STR1 STR2 STR3) STRING)
  <MAPF <>
	<FUNCTION (X) #DECL ((X) OBJECT)
		  <COND (<==? .X .PRSO>
			 <TELL .STR2 1 <ODESC2 .X> .STR3>)
			(<OR <TRANSPARENT? .X>
			     <AND <OPENABLE? .X> <OOPEN? .X>>>
			 <MAPF <>
			       <FUNCTION (Y) #DECL ((Y) OBJECT)
					 <COND (<==? .Y .PRSO>
						<TELL .STR2 1 <ODESC2 .Y> .STR3>
						<TELL "It is in the "
						      1
						      <ODESC2 .X>
						      .STR1>)>>
			       <OCONTENTS .X>>)>>
	 .OBJL>>

;"OBJECT-ACTION --
	CALL OBJECT FUNCTIONS FOR DIRECT AND INDIRECT OBJECTS"

<DEFINE OBJECT-ACTION ("AUX" (VEC ,PRSVEC) (PRSO <2 .VEC>) (PRSI <3 .VEC>)) 
	#DECL ((PRSO PRSI) <OR OBJECT FALSE> (VEC) VECTOR)
	<PROG ()
	      <COND (.PRSI <AND <APPLY-OBJECT .PRSI> <RETURN T>>)>
	      <COND (.PRSO <APPLY-OBJECT .PRSO>)>>>

"SIMPLE OBJ-HERE:  IS IT IN THE ROOM OR IN THE GUY'S HAND.  TO DO FULL
SEARCH, USE GET-OBJECT"

<DEFINE OBJ-HERE? (OBJ "AUX" NOBJ (RM ,HERE) (WIN ,WINNER)) 
	#DECL ((OBJ) OBJECT (RM) ROOM (WIN) ADV (NOBJ) <OR FALSE OBJECT>)
	<PROG ()
	      <COND (<NOT <OVIS? .OBJ>> <RETURN <>>)
		    (<SET NOBJ <OCAN .OBJ>>
		     <COND (<OOPEN? .NOBJ> <SET OBJ .NOBJ>) (<RETURN <>>)>)>
	      <OR <MEMQ .OBJ <ROBJS .RM>> <MEMQ .OBJ <AOBJS .WIN>>>>>

<DEFINE SPLICE-OUT (OBJ AL) 
	#DECL ((AL) LIST)
	<COND (<==? <1 .AL> .OBJ> <REST .AL>)
	      (T
	       <REPEAT ((NL <REST .AL>) (OL .AL))
		       #DECL ((NL OL) LIST)
		       <COND (<==? <1 .NL> .OBJ>
			      <PUTREST .OL <REST .NL>>
			      <RETURN .AL>)
			     (<SET OL .NL> <SET NL <REST .NL>>)>>)>>

"WEIGHT:  Get sum of OSIZEs of supplied list, recursing to the nth level."

<DEFINE WEIGHT (OBJL "AUX" (BIGFIX ,BIGFIX)) 
	#DECL ((OBJL) <LIST [REST OBJECT]> (BIGFIX) FIX (VALUE) FIX)
	<MAPF ,+
	      <FUNCTION (OBJ) 
		      #DECL ((OBJ) OBJECT)
		      <+ <COND (<==? <OSIZE .OBJ> ,BIGFIX> 0)
			       (<OSIZE .OBJ>)>
			 <WEIGHT <OCONTENTS .OBJ>>>>
	      .OBJL>>

<DEFINE POUR () T>

<DEFINE MOVE ("AUX" (VEC ,PRSVEC) (RM <AROOM ,WINNER>) (OBJ <2 .VEC>)) 
	#DECL ((VEC) VECTOR (RM) ROOM (OBJ) <OR ATOM OBJECT>)
	<COND (<MEMQ .OBJ <ROBJS .RM>> <OBJECT-ACTION>)
	      (.OBJ
	       <TELL "I can't get to that to move it.">)>>

<DEFINE VICTIMS? (RM) 
	#DECL ((RM) ROOM)
	<MAPF <>
	      <FUNCTION (X) 
		      #DECL ((X) OBJECT)
		      <COND (<TRNN .X ,VICBIT> <MAPLEAVE .X>)>>
	      <ROBJS .RM>>>

<DEFINE LAMP-ON LAMPO ("AUX" (PRSVEC ,PRSVEC) (ME ,WINNER) (OBJ <2 .PRSVEC>) (LIT?
							     <LIT? ,HERE>)) 
	#DECL ((ME) ADV (OBJ) OBJECT (LAMPO) ACTIVATION)
	<COND (<AND <TRNN .OBJ ,BURNBIT>
		    <3 .PRSVEC>
		    <PUT .PRSVEC 1 ,BURN!-WORDS>>
	       <BURNER>)
	      (<OBJECT-ACTION>)
	      (<COND (<AND <N==? <OLIGHT? .OBJ> 0>
			   <MEMQ .OBJ <AOBJS .ME>>>)
		     (T <TELL "You can't turn that on."> <RETURN T .LAMPO>)>
	       <COND (<G? <OLIGHT? .OBJ> 0> <TELL "It is already on.">)
		     (<PUT .OBJ ,OLIGHT? 1>
		      <TELL "The " 1 <ODESC2 .OBJ> " is now on.">
		      <COND (<NOT .LIT?>
			     <PUT ,PRSVEC 2 <>>
			     <ROOM-INFO <>>)>)>)>>

<DEFINE LAMP-OFF LAMPO ("AUX" (ME ,WINNER) (OBJ <2 ,PRSVEC>)) 
	#DECL ((ME) ADV (OBJ) OBJECT (LAMPO) ACTIVATION)
	<COND (<OBJECT-ACTION>)
	      (<COND (<AND <N==? <OLIGHT? .OBJ> 0>
			   <MEMQ .OBJ <AOBJS .ME>>>)
		     (<TELL "You can't turn that off."> <RETURN T .LAMPO>)>
	       <COND (<L? <OLIGHT? .OBJ> 0> <TELL "It is already off.">)
		     (<PUT .OBJ ,OLIGHT? -1>
		      <TELL "The " 1 <ODESC2 .OBJ> " is now off.">
		      <OR <LIT? ,HERE> <TELL "It is now pitch black.">>)>)>>

"PARSER & AUXILIARIES"

<SETG INBUF <ISTRING 100>>

;"SET UP INPUT ERROR HANDLER TO CAUSE EPARSE TO FALSE OUT"

<PSETG CNTPRS "I can't parse that.">

<SETG PRSVEC <IVECTOR 3 #FALSE ()>>

<DEFINE WORD? (W) <LOOKUP .W ,WORDS>>

<DEFINE THIS-IT? (OBJNAM OBJ ADJ) 
	#DECL ((OBJNAM) ATOM (OBJ) OBJECT (ADJ) <OR FALSE ADJECTIVE>)
	<COND (<AND <OVIS? .OBJ>
		    <OR <==? .OBJNAM <OID .OBJ>> <MEMQ .OBJNAM <ONAMES .OBJ>>>>
	       <COND (<NOT .ADJ>) (<MEMQ .ADJ <OADJS .OBJ>>)>)>>

<SETG LEXV <IVECTOR 10 '<REST <ISTRING 5> 5>>>

<GDECL (LEXV) <VECTOR [REST STRING]> (BRKS) STRING>

<DEFINE LEX (S
	     "OPTIONAL" (SX <REST .S <LENGTH .S>>) (SILENT? <>)
	     "AUX" (BRKS ,BRKS) (V ,LEXV) (S1 .S) (QUOT <>))
   #DECL ((S S1 SX BRKS) STRING
	  (SILENT? QUOT) <OR ATOM FALSE> (VALUE) <OR FALSE VECTOR>
	  (V) <VECTOR [REST STRING]>)
   <MAPR <>
	 <FUNCTION (X "AUX" (STR <1 .X>)) 
		 #DECL ((X) <VECTOR [REST STRING]> (STR) STRING)
		 <PUT .X 1 <REST .STR <LENGTH .STR>>>>
	 .V>
   <COND
    (<==? <1 .S> !\?> <PUT .V 1 <SUBSTRUC "HELP" 0 4 <BACK <1 .V> 4>>>)
    (<REPEAT (SLEN)
       #DECL ((SLEN) FIX)
       <COND
	(<OR <==? <LENGTH .S1> <LENGTH .SX>> <MEMQ <1 .S1> .BRKS>>
	 <AND <G? <LENGTH .S1> <LENGTH .SX>>
	      <OR <==? <1 .S1> !\'> <==? <1 .S1> !\">>
	      <NOT .QUOT>
	      <SET QUOT T>
	      <SET V <REST .V>>>
	 <COND
	  (<N==? .S .S1>
	   <COND
	    (<EMPTY? .V> <OR .SILENT? <TELL "I'm too simple-minded for that.">>)
	    (<PUT .V
		  1
		  <UPPERCASE <SUBSTRUC .S
				       0
				       <SET SLEN
					    <MIN <- <LENGTH .S> <LENGTH .S1>>
						 5>>
				       <BACK <1 .V> .SLEN>>>>
	     <SET V <REST .V>>)>)>
	 <COND (<==? <LENGTH .S1> <LENGTH .SX>> <RETURN .V>)>
	 <SET S <REST .S1>>)>
       <SET S1 <REST .S1>>>)>
   ,LEXV>

<PSETG BRKS "\"' 	:;.,?!
">

<DEFINE ANYTHING (S SX) 
	#DECL ((S SX) STRING)
	<MAPR <>
	      <FUNCTION (X) 
		      <COND (<==? .X .SX> <MAPLEAVE <>>)
			    (<NOT <MEMQ <1 .X> ,BRKS>> <MAPLEAVE .X>)>>
	      .S>>

<DEFINE UPPERCASE (STR) 
	#DECL ((STR) STRING)
	<MAPR <>
	      <FUNCTION (S "AUX" (C <ASCII <1 .S>>)) 
		      <COND (<AND <G? .C 96> <L=? .C 122>>
			     <PUT .S 1 <ASCII <- .C 32>>>)>>
	      .STR>
	.STR>

<DEFINE WAIT ("OPTIONAL" (NUM 3))
    #DECL ((NUM) FIX)
    <TELL "Time passes...">
    <REPEAT ((N .NUM))
	#DECL ((N) FIX)
	<COND (<OR <L? <SET N <- .N 1>> 0>
		   <CLOCK-DEMON ,CLOCKER>>
	       <RETURN>)>>>

"RUNS ONLY IF PARSE WON, TO PREVENT SCREWS FROM TYPOS."

<DEFINE CLOCK-DEMON (HACK "AUX" CA (FLG <>))
    #DECL ((HACK) HACK (FLG) <OR ATOM FALSE>)
    <COND (,PARSE-WON
	   <PUT ,PRSVEC 2 <>>
	   <PUT ,PRSVEC 3 <>>
	   <MAPF <>
		 <FUNCTION (EV "AUX" (TICK <CTICK .EV>))
			   #DECL ((EV) CEVENT (TICK) FIX)
			   <COND (<NOT <CFLAG .EV>>)
				 (<0? .TICK>)
				 (<L? .TICK 0>
				  <PUT ,PRSVEC 1 ,C-INT!-WORDS>
				  <COND (<TYPE? <SET CA <CACTION .EV>> OFFSET>
					 <DISPATCH .CA>)
					(<APPLY .CA>)>)
				 (<PUT .EV ,CTICK <SET TICK <- .TICK 1>>>
				  <AND <0? .TICK>
				       <SET FLG T>
				       <PUT ,PRSVEC 1 ,C-INT!-WORDS>
				       <COND (<TYPE? <SET CA <CACTION .EV>> OFFSET>
					      <DISPATCH .CA>)
					     (<APPLY .CA>)>>)>>
		 <HOBJS .HACK>>)>
    .FLG>

<GDECL (CLOCKER) HACK>

<DEFINE CLOCK-INT (CEV "OPTIONAL" (NUM <>) (CLOCKER ,CLOCKER))
    #DECL ((CEV) CEVENT (NUM) <OR FIX FALSE> (CLOCKER) HACK)
    <COND (<NOT <MEMQ .CEV <HOBJS .CLOCKER>>>
	   <PUT .CLOCKER ,HOBJS (.CEV !<HOBJS .CLOCKER>)>)>
    <COND (.NUM <PUT .CEV ,CTICK .NUM>)>>

<SETG DEMONS ()>

<OR <LOOKUP "COMPILE" <ROOT>>
    <GASSIGNED? GROUP-GLUE>
    <ADD-DEMON <SETG CLOCKER <CHTYPE [CLOCK-DEMON ()] HACK>>>>

<DEFINE BOARD ("AUX" (OBJ <2 ,PRSVEC>) (WIN ,WINNER) (AV <AVEHICLE .WIN>)) 
	#DECL ((OBJ) OBJECT (WIN) ADV (AV) <OR FALSE OBJECT>)
	<COND (<NOT <MEMQ .OBJ <ROBJS ,HERE>>>
	       <TELL "The " 1 <ODESC2 .OBJ> " must be on the ground to be boarded.">)
	      (<TRNN .OBJ ,VEHBIT>
	       <COND (.AV
		      <TELL "You are already in a "
			    1
			    <ODESC2 .OBJ>
			    ", cretin!">)
		     (T
		      <COND (<OBJECT-ACTION>)
			    (<TELL "You are in the " 1 <ODESC2 .OBJ> ".">
		      	     <PUT .WIN ,AVEHICLE .OBJ>
		             <PUT .OBJ
			          ,OCONTENTS
			          (<FIND-OBJ "#####"> !<OCONTENTS .OBJ>)>)>)>)
	      (<TELL "I suppose you have a theory on boarding "
		     1
		     <ODESC2 .OBJ>
		     "s.">)>>

<DEFINE UNBOARD ("AUX" (OBJ <2 ,PRSVEC>) (WIN ,WINNER) (AV <AVEHICLE .WIN>))
  	#DECL ((OBJ) OBJECT (WIN) ADV (AV) <OR FALSE OBJECT>)
	<COND (<==? .AV .OBJ>
	       <COND (<OBJECT-ACTION>)
		     (<RTRNN ,HERE ,RLANDBIT>
		      <TELL
"You are on your own feet again.">
		      <PUT .WIN ,AVEHICLE <>>
		      <PUT .OBJ
			   ,OCONTENTS
			   <SPLICE-OUT <FIND-OBJ "#####"> <OCONTENTS .OBJ>>>)
		     (<TELL
"You realize, just in time, that disembarking here would probably be
fatal.">)>)
	      (<TELL
"You aren't in that!">)>>

<DEFINE GOTO (RM
	      "AUX" (WIN ,WINNER) (AV <AVEHICLE ,WINNER>) (HERE ,HERE)
		    (LB <RTRNN .RM ,RLANDBIT>))
	#DECL ((HERE RM) ROOM (WIN) ADV (AV) <OR FALSE OBJECT>
	       (LB) <OR ATOM FALSE>)
	<COND (<OR <AND <NOT .LB> <OR <NOT .AV> <NOT <RTRNN .RM <ORAND .AV>>>>>
		   <AND <RTRNN .HERE ,RLANDBIT>
			.LB
			.AV
			<N==? <ORAND .AV> ,RLANDBIT>
			<NOT <RTRNN .RM <ORAND .AV>>>>>
	       <COND (.AV <TELL "You can't go there in a " 1 <ODESC2 .AV> ".">)
		     (<TELL "You can't go there without a vehicle.">)>
	       <>)
	      (<RTRNN .RM ,RMUNGBIT> <TELL <RRAND .RM>>)
	      (T
	       <COND (<N==? .WIN ,PLAYER>
		      <REMOVE-OBJECT <AOBJ .WIN>>
		      <INSERT-OBJECT <AOBJ .WIN> .RM>)>
	       <COND (.AV <REMOVE-OBJECT .AV> <INSERT-OBJECT .AV .RM>)>
	       <PUT ,WINNER ,AROOM <SETG HERE .RM>>
	       <SCORE-ROOM .RM>
	       T)>>

<DEFINE BACKER ()
	<TELL
"He who puts his hand to the plow and looks back is not fit for the
kingdom of winners.  In any case, \"back\" doesn't work.">>

<DEFINE ACT-HACK ()
	<OR <OBJECT-ACTION> T>>

<DEFINE MUNG-ROOM (RM STR)
    #DECL ((RM) ROOM (STR) STRING)
    <RTRO .RM ,RMUNGBIT>
    <PUT .RM ,RRAND .STR>>

<DEFINE COMMAND ("AUX" (PV ,PRSVEC) (PO <2 .PV>) (V <REST <MEMBER "" ,LEXV>>) (HS ,HERE)
		    (WIN ,WINNER) (PLAY ,PLAYER))
    #DECL ((PO) OBJECT (PV V) VECTOR (HS) ROOM (WIN PLAY) ADV)
    <COND (<N==? .WIN .PLAY>
	   <TELL "You cannot talk through another person!">)
	  (<TRNN .PO ,ACTORBIT>
	   <SETG WINNER <ORAND .PO>>
	   <RDCOM .V>
	   <SETG WINNER .PLAY>
	   <SETG HERE .HS>)
	  (<TELL "You cannot talk to that!">)>>

 