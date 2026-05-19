---
title: "act2.27"
program: "Zork"
program_slug: "zork"
file_path: "zork/act2.27"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/act2.27"
year: 1977
author: "Anderson, Blank, Daniels, Lebling"
slug: "act2"
order: 7
description: "This file contains MDL code for Zork's intricate room interactions, showcasing the game's pioneering use of environmental storytelling and player-driven consequences."

summary:
  - point: "Dynamic room interactions based on player actions"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Use of MDL's advanced data structures for game logic"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL programming language"
  - point: "Integration of humor and narrative consequences in gameplay"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive fiction"
  - point: "Early example of environmental hazards in games"
    link: "https://en.wikipedia.org/wiki/History_of_video_games"
    link_label: "History of video games"
  - point: "Sophisticated object manipulation and state tracking"
    link: "https://en.wikipedia.org/wiki/DEC_PDP-10"
    link_label: "DEC PDP-10"

enhancements:
  - id: "boom-room-coal-gas-explosion"
    line_start: 5
    line_end: 26
    title: "Coal gas explosion: humor meets danger"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'BOOM-ROOM' subroutine is a masterful blend of humor and peril, where lighting a torch or candle in a room filled with coal gas leads to a fatal explosion. This code checks for the presence of specific objects (like a torch or candle) and their states (lit or unlit) before delivering a witty warning or triggering the player's demise. In 1977, Zork's developers—Anderson, Blank, Daniels, and Lebling—were crafting a game that combined narrative depth with interactive gameplay. The PDP-10's limited memory and processing power demanded efficient coding, and MDL's Lisp-like syntax allowed for complex logic within these constraints. This room exemplifies the team's ability to create memorable moments that stick with players, blending environmental storytelling with consequences for seemingly trivial actions. The humor in the warnings reflects the game's playful tone, while the explosion mechanic underscores the importance of player awareness and caution. This approach to environmental hazards influenced countless games that followed, embedding the idea that player actions should have meaningful, sometimes unexpected, consequences."
  - id: "bats-room-vampire-bat"
    line_start: 28
    line_end: 39
    title: "Deranged vampire bat: a nod to Wumpus"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hunt_the_Wumpus"
    image_url: ""
    image_caption: ""
    content: "The 'BATS-ROOM' subroutine introduces players to a room inhabited by a deranged vampire bat, humorously described as a reject from 'Hunt the Wumpus,' an earlier influential text-based game. The code checks whether the player is carrying garlic, a classic vampire deterrent, and adjusts the bat's behavior accordingly. This room showcases Zork's playful nods to gaming culture and its creators' deep knowledge of interactive fiction history. In the late 1970s, text-based games were the cutting edge of interactive entertainment, and Zork's developers were among the pioneers pushing the boundaries of what these games could achieve. By referencing Wumpus, they acknowledged their predecessors while demonstrating their ability to innovate. The bat's behavior adds depth to the game world, making players consider their inventory and surroundings more carefully. This mechanic, where specific items influence interactions, became a staple of adventure games, shaping the genre's evolution."
  - id: "fly-me-bat-abduction"
    line_start: 41
    line_end: 53
    title: "Bat abduction: randomness and relocation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'FLY-ME' subroutine is a whimsical mechanic where a deranged vampire bat abducts the player and relocates them to a random room. The code uses a predefined vector of possible destinations ('BAT-DROPS') and selects one at random, adding unpredictability to the gameplay. This feature highlights Zork's commitment to creating a dynamic and immersive experience, where players must adapt to unexpected events. In the late 1970s, randomness in games was a novel concept, adding replayability and surprise to otherwise deterministic experiences. The developers leveraged MDL's capabilities to implement this mechanic efficiently, ensuring that the game remained engaging despite the PDP-10's hardware limitations. The bat's abduction mechanic inspired similar random events in later games, emphasizing the importance of unpredictability in maintaining player interest."
  - id: "dumbwaiter-basket-mechanics"
    line_start: 76
    line_end: 105
    title: "Dumbwaiter: interactive basket mechanics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'DUMBWAITER' subroutine simulates a mechanical basket that players can raise or lower between two rooms. The code checks the basket's current state and the player's location to determine whether the action is valid, providing feedback accordingly. This mechanic exemplifies Zork's intricate object interactions, where environmental elements are not just static props but integral parts of the gameplay. In the late 1970s, such mechanics were groundbreaking, as most games offered limited interactivity. Zork's developers used MDL's advanced features to create a world where objects had states and could be manipulated in meaningful ways. This approach laid the groundwork for the interactive environments that became standard in adventure games, influencing titles like King's Quest and The Legend of Zelda."
  - id: "machine-room-air-conditioned-puzzle"
    line_start: 107
    line_end: 120
    title: "Machine room: air-conditioned mystery"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'MACHINE-ROOM' subroutine describes a room with an enigmatic machine resembling a clothes dryer, complete with a Swahili-labeled switch and a lid that can be opened or closed. This room is a puzzle in itself, inviting players to explore and experiment with the machine's features. The description is rich with detail, showcasing Zork's commitment to immersive storytelling. In 1977, such environmental storytelling was rare, as most games focused on simple mechanics rather than narrative depth. Zork's developers used MDL to craft detailed descriptions that drew players into the game world, making them feel like active participants in the story. The machine room's design influenced later games that emphasized exploration and discovery, cementing Zork's legacy as a pioneer of interactive fiction."
  - id: "grue-function-darkness-danger"
    line_start: 402
    line_end: 415
    title: "Grue: fear of the dark"
    wikipedia_url: "https://en.wikipedia.org/wiki/Grue_(monster)"
    image_url: ""
    image_caption: ""
    content: "The 'GRUE-FUNCTION' subroutine introduces players to the game's most iconic monster, the grue. The code provides detailed descriptions of the grue's sinister nature, emphasizing its fear of light and its appetite for adventurers. This mechanic warns players of the dangers of exploring dark areas without a light source, adding tension and urgency to the gameplay. The grue became a cultural touchstone, symbolizing the perils of the unknown in interactive fiction. In the late 1970s, Zork's developers were crafting a game that blended humor, horror, and strategy, and the grue was a perfect embodiment of these elements. Its introduction influenced countless games that followed, establishing the trope of darkness as a dangerous and mysterious force."

---





<DEFINE BOOM-ROOM ("AUX" (DUMMY? <>) (PRSACT <1 ,PRSVEC>) (WIN ,WINNER) O)
    #DECL ((DUMMY?) <OR ATOM FALSE> (PRSACT) VERB (WIN) ADV (O) OBJECT)
    <COND (<OR <==? <VNAME .PRSACT> WALK-IN!-WORDS>
	       <AND <==? <VNAME .PRSACT> ON!-WORDS>
		    <SET DUMMY? T>>>
	   <COND (<OR <AND <MEMQ <SET O <FIND-OBJ "CANDL">> <AOBJS .WIN>>
			   <1? <OLIGHT? .O>>>
		      <AND <MEMQ <SET O <FIND-OBJ "TORCH">> <AOBJS .WIN>>
			   <1? <OLIGHT? .O>>>>
		  <UNWIND
		   <PROG ()
		    <COND (.DUMMY?
			   <TELL
"I didn't realize that adventurers are stupid enough to light a 
" 1 <ODESC2 .O> " in a room which reeks of coal gas.
Fortunately, there is justice in the world.">)
			  (<TELL
"Oh dear.  It appears that the smell coming from this room was coal
gas.  I would have thought twice about carrying a " 1 <ODESC2 .O> "in here.">)>
		    <FWEEP 7>
		    <JIGS-UP "   BOOOOOOOOOOOM      ">>
		   <JIGS-UP "   BOOOOOOOOOOOM      ">>)>)>>    

<DEFINE BATS-ROOM ("AUX" (PRSACT <1 ,PRSVEC>))
    #DECL ((PRSACT) VERB)
    <COND (<AND <==? <VNAME .PRSACT> WALK-IN!-WORDS>
		<NOT <MEMQ <FIND-OBJ "GARLI"> <AOBJS ,WINNER>>>>
	   <FLY-ME>)
	  (<==? .PRSACT ,LOOK!-WORDS>
	   <TELL 
 "You are in a small room which has only one door, to the east.">
	   <AND <MEMQ <FIND-OBJ "GARLI"> <AOBJS ,WINNER>>
		<TELL 
"In the corner of the room on the ceiling is a large vampire bat who
is obviously deranged and holding his nose.">>)>>

<DEFINE FLY-ME ("AUX" (BAT-DROPS ,BAT-DROPS))
      #DECL ((BAT-DROPS) <VECTOR [REST STRING]>)
      <UNWIND
        <PROG ()
	      <FWEEP 4 1>
	      <TELL
  "A deranged giant vampire bat (a reject from WUMPUS) swoops down
from his belfry and lifts you away....">
	      <GOTO <FIND-ROOM <PICK-ONE .BAT-DROPS>>>>
	<GOTO <FIND-ROOM <PICK-ONE .BAT-DROPS>>>>
      <PUT ,PRSVEC 2 <>>
      <ROOM-DESC>
      T>

<DEFINE FWEEP (NUM "OPTIONAL" (SLP 0))
    #DECL ((NUM SLP) FIX)
    <REPEAT ((N .NUM))
	<AND <0? <SET N <- .N 1>>> <RETURN>>
	<IMAGE 7>
	<OR <0? .SLP> <SLEEP .SLP>>>>

<PSETG BAT-DROPS
      '["MINE1"
	"MINE2"
	"MINE3"
	"MINE4"
	"MINE5"
	"MINE6"
	"MINE7"
	"TLADD"
	"BLADD"]>
<GDECL (BAT-DROPS) <VECTOR [REST STRING]>>

<SETG CAGE-TOP!-FLAG T>

<DEFINE DUMBWAITER ("AUX" (PRSACT <1 ,PRSVEC>) (TB <FIND-OBJ "TBASK">)
			  (TOP <FIND-ROOM "TSHAF">) (BOT <FIND-ROOM "BSHAF">)
			  (FB <FIND-OBJ "FBASK">) (CT ,CAGE-TOP!-FLAG)
			  (HERE ,HERE) (DUMMY ,DUMMY))
    #DECL ((PRSACT) VERB (FB TB) OBJECT (TOP BOT) ROOM (CT) <OR ATOM FALSE>
	   (HERE) ROOM (DUMMY) <VECTOR [REST STRING]>)
    <COND (<==? .PRSACT ,RAISE!-WORDS>
	   <COND (.CT
		  <TELL <PICK-ONE ,DUMMY>>)
		 (<REMOVE-OBJECT .TB>
		  <REMOVE-OBJECT .FB>
		  <INSERT-OBJECT .TB .TOP>
		  <INSERT-OBJECT .FB .BOT>
		  <TELL "The basket is raised to the top of the shaft.">
		  <SETG CAGE-TOP!-FLAG T>)>)
	  (<==? .PRSACT ,LOWER!-WORDS>
	   <COND (<NOT .CT>
		  <TELL <PICK-ONE .DUMMY>>)
		 (<REMOVE-OBJECT .TB>
		  <REMOVE-OBJECT .FB>
		  <INSERT-OBJECT .TB .BOT>
		  <INSERT-OBJECT .FB .TOP>
		  <TELL "The basket is lowered to the bottom of the shaft.">
		  <SETG CAGE-TOP!-FLAG <>>
		  T)>)
	  (<==? .PRSACT ,TAKE!-WORDS>
	   <COND (<OR <AND .CT <==? .HERE .TOP>>
		      <AND <NOT .CT> <==? .HERE .BOT>>>
		  <TELL "The cage is securely fastened to the iron chain.">)
		 (<TELL "I can't see that here.">)>)>>

<DEFINE MACHINE-ROOM ("AUX" (PRSACT <1 ,PRSVEC>))
    #DECL ((PRSACT) VERB)
    <COND (<==? .PRSACT ,LOOK!-WORDS>
	   <TELL
"You are in a large room which seems to be air-conditioned.  In one
corner there is a machine (?) which is shaped somewhat like a clothes
dryer.  On the 'panel' there is a switch which is labelled in a
dialect of Swahili.  Fortunately, I know this dialect and the label
translates to START.  The switch does not appear to be manipulable by
any human hand (unless the fingers are about 1/16 by 1/4 inch).  On
the front of the machine is a large lid.">
	   <COND (<OOPEN? <FIND-OBJ "MACHI">>
		  <TELL "The lid on the machine is open.">)
		 (<TELL "The lid on the machine is closed.">)>)>>

<DEFINE MACHINE-FUNCTION ("AUX" (DUMMY ,DUMMY)
			  (PRSACT <1 ,PRSVEC>) (MACH <FIND-OBJ "MACHI">))
   #DECL ((PRSACT) VERB (MACH) OBJECT (DUMMY) <VECTOR [REST STRING]>)
   <COND
    (<==? ,HERE <FIND-ROOM "MACHI">>
     <COND
      (<==? <VNAME .PRSACT> OPEN!-WORDS>
       <COND (<OOPEN? .MACH>
	      <TELL <PICK-ONE .DUMMY>>)
	     (<TELL "The lid opens.">
	      <PUT .MACH ,OOPEN? T>)>)
      (<==? <VNAME .PRSACT> CLOSE!-WORDS>
       <COND (<OOPEN? .MACH>
	      <TELL "The lid closes.">
	      <PUT .MACH ,OOPEN? <>>
	      T)
	     (<TELL <PICK-ONE .DUMMY>>)>)
      (<==? .PRSACT ,TAKE!-WORDS>)>)>>

<DEFINE MSWITCH-FUNCTION ("AUX" (PRSACT <1 ,PRSVEC>) (C <FIND-OBJ "COAL">)
			  	(IMP <3 ,PRSVEC>) D (MACH <FIND-OBJ "MACHI">)
				(SCREW <FIND-OBJ "SCREW">))
    #DECL ((PRSACT) VERB (IMP) OBJECT (MACH SCREW C D) OBJECT)
    <COND (<==? .PRSACT ,TURN!-WORDS>
	   <COND (<==? .IMP .SCREW>
		  <COND (<OOPEN? .MACH>
			 <TELL
			  "The machine doesn't seem to want to do anything.">)
			(<TELL 

"The machine comes to life (figuratively) with a dazzling display of
colored lights and bizarre noises.  After a few moments, the
excitement abates.">
		         <COND (<MEMQ .C <OCONTENTS .MACH>>
				<PUT .MACH
				     ,OCONTENTS
				     <SPLICE-OUT .C <OCONTENTS .MACH>>>
				<PUT .MACH
				     ,OCONTENTS
				     (<SET D <FIND-OBJ "DIAMO">>
				      !<OCONTENTS .MACH>)>
				<PUT .D ,OCAN .MACH>)
			       (<NOT <EMPTY? <OCONTENTS .MACH>>>
				<PUT .MACH ,OCONTENTS (<SET D <FIND-OBJ "GUNK">>)>)
			       (T)>)>)
		 (<TELL "It seems that a " 1 <ODESC2 .IMP> " won't do.">)>)>>

<DEFINE GUNK-FUNCTION ("AUX" (G <FIND-OBJ "GUNK">) (M <OCAN .G>))
  #DECL ((G) OBJECT (M) <OR OBJECT FALSE>)
  <COND (.M
	 <PUT .M ,OCONTENTS <SPLICE-OUT .G <OCONTENTS .M>>>
	 <PUT .G ,OCAN <>>
	 <TELL
"The slag turns out to be rather insubstantial, and crumbles into dust
at your touch.  It must not have been very valuable.">)>>

<SETG SCORE-MAX <+ ,SCORE-MAX <SETG LIGHT-SHAFT 10>>>

<DEFINE NO-OBJS ()
    <COND (<EMPTY? <AOBJS ,WINNER>>
	   <SETG EMPTY-HANDED!-FLAG T>)
	  (<SETG EMPTY-HANDED!-FLAG <>>)>
    <COND (<AND <==? ,HERE <FIND-ROOM "BSHAF">>
	   <LIT? ,HERE>>
	   <SCORE-UPD ,LIGHT-SHAFT>
	   <SETG LIGHT-SHAFT 0>)>>
<GDECL (LIGHT-SHAFT) FIX>

<DEFINE CLIFF-FUNCTION ()
    <COND (<MEMQ <FIND-OBJ "RBOAT"> <AOBJS ,WINNER>>
	   <SETG DEFLATE!-FLAG <>>)
	  (<SETG DEFLATE!-FLAG T>)>>

<DEFINE STICK-FUNCTION ("AUX" (PRSACT <1 ,PRSVEC>))
    #DECL ((PRSACT) VERB)
    <COND (<==? <VNAME .PRSACT> WAVE!-WORDS>
	   <COND (<OR <==? ,HERE <FIND-ROOM "FALLS">>
		      <==? ,HERE <FIND-ROOM "POG">>>
		  <COND (<NOT ,RAINBOW!-FLAG>
			 <TRO <FIND-OBJ "POT"> ,OVISON>
			 <TELL

"Suddenly, the rainbow appears to become solid and, I venture,
walkable (I think the giveaway was the stairs and bannister).">
			 <SETG RAINBOW!-FLAG T>)
			(<TELL
"The rainbow seems to have become somewhat run-of-the-mill.">
			 <SETG RAINBOW!-FLAG <>>)>)
		 (<==? ,HERE <FIND-ROOM "RAINB">>
		  <SETG RAINBOW!-FLAG <>>
		  <JIGS-UP

"The structural integrity of the rainbow seems to have left it,
leaving you about 450 feet in the air, supported by water vapor.">)
		 (<TELL
"Very good.">)>)>>

<DEFINE FALLS-ROOM ("AUX" (PRSACT <1 ,PRSVEC>))
    #DECL ((PRSACT) VERB)
    <COND (<==? .PRSACT ,LOOK!-WORDS>
	   <TELL
"You are at the top of Aragain Falls, an enormous waterfall with a
drop of about 450 feet.  The only path here is on the north end.
There is a man-sized barrel here which you could fit into.">
	   <COND (,RAINBOW!-FLAG
		  <TELL
"A solid rainbow spans the falls.">)
		 (<TELL
"A beautiful rainbow can be seen over the falls and to the east.">)>)>>

<DEFINE DIGGER ("AUX" (PRSO <2 ,PRSVEC>))
    #DECL ((PRSO) OBJECT)
    <COND (<==? .PRSO <FIND-OBJ "SHOVE">>)
	  (<TRNN .PRSO ,TOOLBIT>
	   <TELL
"Digging with the " 1 <ODESC2 .PRSO> " is slow and tedious.">)
	  (<TELL
"Digging with a " 1 <ODESC2 .PRSO> " is silly.">)>>

<DEFINE DBOAT-FUNCTION ("AUX" (PRSACT <1 ,PRSVEC>) (HERE ,HERE) (PRSI <3 ,PRSVEC>)
			(DBOAT <FIND-OBJ "DBOAT">))
    #DECL ((DBOAT) OBJECT (PRSACT) VERB (HERE) ROOM (PRSI) <OR FALSE OBJECT>)
    <COND (<==? <VNAME .PRSACT> INFLA!-WORDS>
	   <TELL 
"This boat will not inflate since some moron put a hole in it.">)
	  (<==? <VNAME .PRSACT> PLUG!-WORDS>
	   <COND (<==? .PRSI <FIND-OBJ "PUTTY">>
		  <TELL
"Well done.  The boat is repaired.">
		  <COND (<NOT <OROOM .DBOAT>>
			 <DROP-OBJECT .DBOAT>
			 <TAKE-OBJECT <FIND-OBJ "IBOAT">>)
			(<REMOVE-OBJECT <FIND-OBJ "DBOAT">>
			 <INSERT-OBJECT <FIND-OBJ "IBOAT"> .HERE>)>)
		 (<WITH-TELL .PRSI>)>)>>

<DEFINE RBOAT-FUNCTION ("OPTIONAL" (ARG <>)
			"AUX" (PRSACT <1 ,PRSVEC>) (RBOAT <FIND-OBJ "RBOAT">)
			      (IBOAT <FIND-OBJ "IBOAT">) (HERE ,HERE))
    #DECL ((ARG) <OR FALSE ATOM> (PRSACT) VERB (IBOAT RBOAT) OBJECT (HERE) ROOM)
    <COND (.ARG <>)
	  (<==? .PRSACT ,BOARD!-WORDS>
	   <COND (<MEMQ <FIND-OBJ "STICK"> <AOBJS ,WINNER>>
		  <TELL
"There is a hissing sound and the boat deflates.">
		  <REMOVE-OBJECT .RBOAT>
		  <INSERT-OBJECT <FIND-OBJ "DBOAT"> .HERE>
		  T)>)
	  (<==? .PRSACT ,DISEM!-WORDS>
	   <AND <MEMBER "RIVR" <SPNAME <RID .HERE>>>
		<JIGS-UP
"Unfortunately, that leaves you in the water, where you drown.">>)
	  (<==? <VNAME .PRSACT> DEFLA!-WORDS>
	   <COND (<==? <AVEHICLE ,WINNER> .RBOAT>
		  <TELL
"You can't deflate the boat while you're in it.">)
		 (<NOT <MEMQ .RBOAT <ROBJS .HERE>>>
		  <TELL
"The boat must be on the ground to be deflated.">)
		 (<TELL
"The boat deflates.">
		  <SETG DEFLATE!-FLAG T>
		  <REMOVE-OBJECT .RBOAT>
		  <INSERT-OBJECT .IBOAT .HERE>)>)>>

<DEFINE IBOAT-FUNCTION ("AUX" (PRSACT <1 ,PRSVEC>) (IBOAT <FIND-OBJ "IBOAT">)
			      (RBOAT <FIND-OBJ "RBOAT">) (HERE ,HERE))
    #DECL ((PRSACT) VERB (IBOAT RBOAT) OBJECT (HERE) ROOM)
    <COND (<==? <VNAME .PRSACT> INFLA!-WORDS>
	   <COND (<NOT <MEMQ .IBOAT <ROBJS .HERE>>>
		  <TELL
"The boat must be on the ground to be inflated.">)
		 (<MEMQ <FIND-OBJ "PUMP"> <AOBJS ,WINNER>>
		  <TELL
"The boat inflates and appears seaworthy.">
		  <SETG DEFLATE!-FLAG <>>
		  <REMOVE-OBJECT .IBOAT>
	    	  <INSERT-OBJECT .RBOAT .HERE>)
		 (<TELL
"I don't think you have enough lung-power to inflate this boat.">)>)>>

<DEFINE OVER-FALLS ()
    <COND (<==? <1 ,PRSVEC> ,LOOK!-WORDS>)
	  (<JIGS-UP
"Oh dear, you seem to have gone over Aragain Falls.  Not a very smart
thing to do, apparently.">)>>

<SETG BUOY-FLAG!-FLAG T>

<DEFINE SHAKE ("AUX" (PRSOBJ <2 ,PRSVEC>) (HERE ,HERE))
    #DECL ((PRSOBJ) OBJECT (HERE) ROOM)
    <COND (<OBJECT-ACTION>)
	  (<AND <NOT <OOPEN? .PRSOBJ>>
		<NOT <EMPTY? <OCONTENTS .PRSOBJ>>>
		<TELL
"It sounds like there is something inside the " 1 <ODESC2 .PRSOBJ> ".">>)
	  (<AND <OOPEN? .PRSOBJ>
		<NOT <EMPTY? <OCONTENTS .PRSOBJ>>>>
	   <MAPF <>
		 <FUNCTION (X)
		       #DECL ((X) OBJECT)
		       <PUT .X ,OCAN <>>
		       <INSERT-OBJECT .X .HERE>>
		 <OCONTENTS .PRSOBJ>>
	   <PUT .PRSOBJ ,OCONTENTS ()>
	   <TELL
"All of the objects spill onto the floor.">)>>

<DEFINE RIVR4-ROOM ()
    <AND <MEMQ <FIND-OBJ "BUOY"> <AOBJS ,WINNER>>
	 ,BUOY-FLAG!-FLAG
	 <TELL
	  "Something seems funny about the feel of the buoy.">
	 <SETG BUOY-FLAG!-FLAG <>>>> 

<DEFINE BEACH-ROOM ("AUX" (PRSACT <1 ,PRSVEC>) (SHOV <FIND-OBJ "SHOVE">)
			      (HERE ,HERE) CNT)
    #DECL ((PRSACT) VERB (SHOV) OBJECT (HERE) ROOM (CNT) FIX)
    <COND (<AND <==? <VNAME .PRSACT> DIG!-WORDS>
	        <==? .SHOV <2 ,PRSVEC>>>
	   <PUT .HERE ,RVARS <SET CNT <+ 1 <RVARS .HERE>>>>
	   <COND (<G? .CNT 4>
		  <PUT .HERE ,RVARS 0>
		  <JIGS-UP "The hole collapses, smothering you.">)
		 (<==? .CNT 4>
		  <TELL "You can see a small statue here in the sand.">
		  <TRO <FIND-OBJ "STATU"> ,OVISON>
		  <PUT .HERE ,RVARS .CNT>)
		 (<L? .CNT 0>)
		 (<TELL <NTH ,BDIGS .CNT>>)>)>>

<DEFINE TCAVE-ROOM ("AUX" (PRSACT <1 ,PRSVEC>) (SHOV <FIND-OBJ "SHOVE">)
			      (HERE ,HERE) CNT)
    #DECL ((PRSACT) VERB (SHOV) OBJECT (HERE) ROOM (CNT) FIX)
    <COND (<AND <==? <VNAME .PRSACT> DIG!-WORDS>
	        <==? <2 ,PRSVEC> .SHOV>>
	   <COND (<MEMQ <FIND-OBJ "GUANO"> <ROBJS .HERE>>
		  <PUT .HERE ,RVARS <SET CNT <+ 1 <RVARS .HERE>>>>
		  <COND (<G? .CNT 3>
		  	 <TELL "This is getting you nowhere.">)
		 	(<TELL <NTH ,CDIGS .CNT>>)>)
		 (<TELL
"There's nothing to dig into here.">)>)>>
	   
<PSETG CDIGS
   '["You are digging into a pile of bat guano."
     "You seem to be getting knee deep in guano."
     "You are covered with bat turds, cretin."]>

<PSETG BDIGS
   '["You seem to be digging a hole here."
     "The hole is getting deeper, but that's about it."
     "You are surrounded by a wall of sand on all sides."]>
<GDECL (BDIGS CDIGS) <VECTOR [REST STRING]>>

<DEFINE GERONIMO ()
    <COND (<==? ,HERE <FIND-ROOM "BARRE">>
	   <JIGS-UP

"I didn't think you would REALLY try to go over the falls in a
barrel. It seems that some 450 feet below, you were met by a number
of  unfriendly rocks and boulders, causing your immediate demise.  Is
this what 'over a barrel' means?">)
	  (<TELL
"Wasn't he an Indian?">)>>

<PSETG SWIMYUKS
   '["I don't really see how."
     "I think that swimming is best performed in water."
     "Perhaps it is your head that is swimming."]>
<GDECL (SWIMYUKS) <VECTOR [REST STRING]>>

<DEFINE SWIMMER ("AUX" (SWIMYUKS ,SWIMYUKS))
    #DECL ((SWIMYUKS) <VECTOR [REST STRING]>)
    <COND (<RTRNN ,HERE ,RFILLBIT>
	   <TELL 
"Swimming is not allowed in this dungeon.">)
	  (<TELL <PICK-ONE .SWIMYUKS>>)>>


<DEFINE GRUE-FUNCTION ("AUX" (PRSA <1 ,PRSVEC>))
    #DECL ((PRSA) VERB)
    <COND (<==? .PRSA ,EXAMI!-WORDS>
	   <TELL
"The grue is a sinister, lurking presence in the dark places of the
earth.  Its favorite diet is adventurers, but its insatiable
appetite is tempered by its fear of light.  No grue has ever been
seen by the light of day, and few have survived its fearsome jaws
to tell the tale.">)
	  (<==? .PRSA ,FIND!-WORDS>
	   <TELL
"There is no grue here, but I'm sure there is at least one lurking
in the darkness nearby.  I wouldn't let my light go out if I were
you!">)>>

<SETG BTIE!-FLAG <>>

<SETG BINF!-FLAG <>>

<DEFINE BALLOON BALLACT ("OPTIONAL" (ARG <>)
			 "AUX" (PRSVEC ,PRSVEC)
			       (BALL <FIND-OBJ "BALLO">) (PRSA <1 .PRSVEC>)
			       (PRSO <2 .PRSVEC>) (CONT <FIND-OBJ "RECEP">) M
			       (BINF ,BINF!-FLAG) BLABE)
	#DECL ((ARG) <OR ATOM FALSE> (BLABE BALL CONT RECEP) OBJECT (PRSA) VERB
	       (PRSO) <OR OBJECT DIRECTION> (M) <OR FALSE <PRIMTYPE VECTOR>>
	       (PRSVEC) <VECTOR [3 ANY]> (BINF) <OR FALSE ROOM>
	       (M) <OR FALSE <<PRIMTYPE VECTOR> ANY ROOM>>)
	<COND (<==? .ARG READ-OUT>
	       <COND (<==? .PRSA ,LOOK!-WORDS>
		      <COND (.BINF
		    	     <TELL 
				  "The cloth bag is inflated and there is a "
			   	   1
			  	   <ODESC2 .BINF>
			  	   " burning in the receptacle.">)
			    (<TELL "The cloth bag is draped over the the basket.">)>
		      <COND (,BTIE!-FLAG
			     <TELL "The balloon is tied to the hook.">)>)>    
	       <RETURN <> .BALLACT>)>
	<COND (<==? .ARG READ-IN>
	       <COND (<==? .PRSA ,WALK!-WORDS>
		      <COND (<SET M
				  <MEMQ <CHTYPE <2 .PRSVEC> ATOM>
					<REXITS ,HERE>>>
			     <COND (,BTIE!-FLAG
				    <TELL "You are tied to the ledge.">
				    <RETURN T .BALLACT>)
				   (ELSE
				    <AND <NOT <RTRNN <2 .M> ,RMUNGBIT>>
					 <SETG BLOC <2 .M>>>
				    <RETURN <> .BALLACT>)>)
			    (<TELL 
"I'm afraid you can't control the balloon in this way.">
			     <RETURN T .BALLACT>)>)
		     (<AND <==? .PRSA ,TAKE!-WORDS>
			   <==? ,BINF!-FLAG .PRSO>>
	       	      <TELL "You don't really want to hold a burning "
		     	    1
		            <ODESC2 .PRSO>
		            ".">
		      <RETURN T .BALLACT>)
		     (<AND <==? .PRSA ,PUT!-WORDS>
			   <==? <3 .PRSVEC> .CONT>
			   <NOT <EMPTY? <OCONTENTS .CONT>>>>
		      <TELL "The receptacle is already occupied.">
		      <RETURN T .BALLACT>)
		     (<RETURN <> .BALLACT>)>)>
	<COND (<==? .PRSA ,BURN!-WORDS>
	       <COND (<MEMQ .PRSO <OCONTENTS .CONT>>
		      <TELL "The "
			    1
			    <ODESC2 .PRSO>
			    " burns inside the receptacle.">
		      <SETG BURNUP-INT <CLOCK-INT ,BRNIN <* <OSIZE .PRSO> 20>>>
		      <TRO .PRSO ,FLAMEBIT>
		      <TRZ .PRSO <+ ,TAKEBIT ,READBIT>>
		      <PUT .PRSO ,OLIGHT? 1>
		      <COND (,BINF!-FLAG)
			    (<TELL 
"The cloth bag inflates as it fills with hot air.">
			     <COND (<NOT ,BLAB!-FLAG>
				    <PUT .BALL
					 ,OCONTENTS
					 (<SET BLABE <FIND-OBJ "BLABE">>
					  !<OCONTENTS .BALL>)>
				    <PUT .BLABE ,OCAN .BALL>)>
			     <SETG BLAB!-FLAG T>
			     <SETG BINF!-FLAG .PRSO>
			     <CLOCK-INT ,BINT 3>)>)>)
	      (<AND <==? .PRSA ,DISEM!-WORDS>
		    <RTRNN ,HERE ,RLANDBIT>>
	       <COND (,BINF!-FLAG
		      <CLOCK-INT ,BINT 3>)>
	       <>)
	      (<==? .PRSA ,C-INT!-WORDS>
	       <COND (<OR <AND <OOPEN? .CONT> ,BINF!-FLAG>
			  <MEMBER "LEDG" <SPNAME <RID ,HERE>>>>
		      <RISE-AND-SHINE .BALL ,HERE>)
		     (<DECLINE-AND-FALL .BALL ,HERE>)>)>>

<SETG BLAB!-FLAG <>>

<GDECL (BURNUP-INT BINT) CEVENT>
<DEFINE RISE-AND-SHINE (BALL HERE
			"AUX" (S <TOP ,SCRSTR>) M
			      (IN? <==? <AVEHICLE ,WINNER> .BALL>) (BL ,BLOC)
			      FOO)
	#DECL ((BALL) OBJECT (HERE BL) ROOM (M) <OR FALSE STRING> (S) STRING
	       (IN?) <OR ATOM FALSE> (FOO) CEVENT)
	<CLOCK-INT ,BINT 3>
	<COND (<SET M <MEMBER "VAIR" <SPNAME <RID .BL>>>>
	       <COND (<=? <REST .M 4> "4">
		      <CLOCK-DISABLE ,BURNUP-INT>
		      <CLOCK-DISABLE ,BINT>
		      <REMOVE-OBJECT .BALL>
		      <INSERT-OBJECT <FIND-OBJ "DBALL"> <FIND-ROOM "VLBOT">>
		      <COND (.IN?
			     <JIGS-UP 

"Your balloon has hit the rim of the volcano, ripping the cloth and
causing you a 500 foot drop.  Did you get your flight insurance?">)
			    (<TELL 
"You hear a boom and notice that the balloon is falling to the ground.">)>
		      <SETG BLOC <FIND-ROOM "VLBOT">>)
		     (<SUBSTRUC <SPNAME <RID .BL>> 0 4 .S>
		      <PUT .S 5 <CHTYPE <+ <CHTYPE <5 .M> FIX> 1> CHARACTER>>
		      <COND (.IN?
			     <GOTO <SETG BLOC <FIND-ROOM .S>>>
			     <TELL "The balloon ascends.">
			     <ROOM-INFO T>)
			    (<PUT-BALLOON .BALL .BL .S "ascends.">)>)>)
	      (<SET M <MEMBER "LEDG" <SPNAME <RID .BL>>>>
	       <SUBSTRUC "VAIR" 0 4 .S>
	       <PUT .S 5 <5 .M>>
	       <COND (.IN?
		      <GOTO <SETG BLOC <FIND-ROOM .S>>>
		      <TELL "The balloon leaves the ledge.">
		      <ROOM-INFO T>)
		     (<CLOCK-INT ,VLGIN 10>
		      <PUT-BALLOON .BALL .BL .S "floats away.  It seems to be ascending,
due to its light load.">)>)
	      (.IN?
	       <GOTO <SETG BLOC <FIND-ROOM "VAIR1">>>
	       <TELL "The balloon rises slowly from the ground.">
	       <ROOM-INFO T>)
	      (<PUT-BALLOON .BALL .BL "VAIR1" "lifts off.">)>>

<DEFINE PUT-BALLOON (BALL HERE THERE STR) 
	#DECL ((BALL) OBJECT (HERE) ROOM (THERE STR) STRING)
	<AND <MEMBER "LEDG" <SPNAME <RID ,HERE>>>
	     <TELL "You watch as the balloon slowly " 1 .STR>>
	<REMOVE-OBJECT .BALL>
	<INSERT-OBJECT .BALL <SETG BLOC <FIND-ROOM .THERE>>>>

<GDECL (BLOC) ROOM>

<DEFINE DECLINE-AND-FALL (BALL HERE "AUX" (S <TOP ,SCRSTR>) M (BL ,BLOC)
			    (IN? <==? <AVEHICLE ,WINNER> .BALL>) FOO)
    #DECL ((BALL) OBJECT (HERE BL) ROOM (M) <OR FALSE STRING> (S) STRING
	   (IN?) <OR ATOM FALSE> (FOO) CEVENT)
    <CLOCK-INT ,BINT 3>
    <COND (<SET M <MEMBER "VAIR" <SPNAME <RID .BL>>>>
	   <COND (<=? <REST .M 4> "1">
		  <COND (.IN?
			 <GOTO <SETG BLOC <FIND-ROOM "VLBOT">>>
			 <COND (,BINF!-FLAG
				<TELL "The balloon has landed.">
				<ROOM-INFO T>)
			       (T
				<REMOVE-OBJECT .BALL>
				<INSERT-OBJECT <FIND-OBJ "DBALL"> ,BLOC>
				<PUT ,WINNER ,AVEHICLE <>>
				<CLOCK-DISABLE <SET FOO <CLOCK-INT ,BINT 0>>>
				<TELL 
"You have landed, but the balloon did not survive.">)>)
			(<PUT-BALLOON .BALL .BL "VLBOT" "lands.">)>)
		 (<SUBSTRUC <SPNAME <RID .BL>> 0 4 .S>
		  <PUT .S 5 <CHTYPE <- <CHTYPE <5 .M> FIX> 1> CHARACTER>>
		  <COND (.IN?
			 <GOTO <SETG BLOC <FIND-ROOM .S>>>
			 <TELL "The balloon descends.">
			 <ROOM-INFO T>)
			(<PUT-BALLOON .BALL .BL .S "descends.">)>)>)>>

<DEFINE WIRE-FUNCTION ("AUX" (PV ,PRSVEC) (PRSA <1 .PV>) (PRSO <2 .PV>)
			     (PRSI <3 .PV>) (BINT ,BINT))
        #DECL ((BINT) CEVENT (PV) VECTOR (PRSA) VERB (PRSO PRSI) PRSOBJ)
        <COND (<==? .PRSA ,TIE!-WORDS>
	       <COND (<AND <==? .PRSO <FIND-OBJ "BROPE">>
			   <OR <==? .PRSI <FIND-OBJ "HOOK1">>
			       <==? .PRSI <FIND-OBJ "HOOK2">>>>
		      <SETG BTIE!-FLAG T>
		      <CLOCK-DISABLE .BINT>
		      <TELL "The balloon is fastened to the hook.">)>)
	      (<AND <==? .PRSA ,UNTIE!-WORDS>
	            <==? .PRSO <FIND-OBJ "BROPE">>>
	       <COND (,BTIE!-FLAG
		      <CLOCK-ENABLE <SET BINT <CLOCK-INT ,BINT 3>>>
	       	      <SETG BTIE!-FLAG <>>
	              <TELL "The wire falls off of the hook.">)
		     (<TELL "The wire is not tied to anything.">)>)>>

<DEFINE BURNUP ("AUX" (R <FIND-OBJ "RECEP">) (OBJ <1 <OCONTENTS .R>>))
    #DECL ((R OBJ) OBJECT)
    <PUT .R ,OCONTENTS <SPLICE-OUT .OBJ <OCONTENTS .R>>>
    <TELL 
"It seems that the " 1 <ODESC2 .OBJ> " has burned out, and the cloth
bag starts to collapse.">
    <SETG BINF!-FLAG <>>
    T>

<SETG SAFE-FLAG!-FLAG <>>

<DEFINE SAFE-ROOM ("AUX" (PRSA <1 ,PRSVEC>))
    #DECL ((PRSA) VERB)
    <COND (<==? .PRSA ,LOOK!-WORDS>
	   <TELL 
"You are in a dusty old room which is virtually featureless, except
for an exit on the north side."
	         1
		 <COND (<NOT ,SAFE-FLAG!-FLAG>
			"
Imbedded in the far wall, there is a rusty old box.  It appears that
the box is somewhat damaged, since an oblong hole has been chipped
out of the front of it.")
		       ("
On the far wall is a rusty box, whose door has been blown off.")>>)>>

<DEFINE SAFE-FUNCTION ("AUX" (PRSA <1 ,PRSVEC>)) 
	#DECL ((PRSA) VERB)
	<COND (<==? .PRSA ,TAKE!-WORDS>
	       <TELL "The box is imbedded in the wall.">)
	      (<==? .PRSA ,OPEN!-WORDS>
	       <COND (,SAFE-FLAG!-FLAG <TELL "The box has no door!">)
		     (<TELL "The box is rusted and will not open.">)>)
	      (<==? .PRSA ,CLOSE!-WORDS>
	       <COND (,SAFE-FLAG!-FLAG <TELL "The box has no door!">)
		     (<TELL "The box is not open, chomper!">)>)
	      (<==? .PRSA ,BLAST!-WORDS> <TELL "What do you expect, BOOM?">)>>

<PSETG BRICK-BOOM 
"Now you've done it.  It seems that the brick has other properties
than weight, namely the ability to blow you to smithereens.">

<DEFINE BRICK-FUNCTION ("AUX" (PRSA <1 ,PRSVEC>))
    #DECL ((PRSA) VERB)
    <COND (<==? .PRSA ,BURN!-WORDS> <JIGS-UP ,BRICK-BOOM>)>>

<DEFINE FUSE-FUNCTION ("AUX" (PRSA <1 ,PRSVEC>) (FUSE <FIND-OBJ "FUSE">)
			     (BRICK <FIND-OBJ "BRICK">) BRICK-ROOM OC)
	#DECL ((PRSA) VERB (FUSE BRICK) OBJECT (BRICK-ROOM) <OR ROOM FALSE>
	       (OC) <OR OBJECT FALSE>)
	<COND (<==? .PRSA ,BURN!-WORDS>
	       <TELL "The wire starts to burn.">
	       <PUT .FUSE ,ORAND [0 <CLOCK-INT ,FUSIN 2>]>)
	      (<==? .PRSA ,C-INT!-WORDS>
	       <TRZ .FUSE ,OVISON>
	       <COND (<==? <OCAN .FUSE> .BRICK>
		      <TRZ .BRICK ,OVISON>
		      <COND (<SET OC <OCAN .BRICK>>
			     <SET BRICK-ROOM <OROOM .OC>>)
			    (<SET BRICK-ROOM <OROOM .BRICK>>)>
		      <OR .BRICK-ROOM <SET BRICK-ROOM ,HERE>>
		      <COND (<==? .BRICK-ROOM ,HERE>
			     <MUNG-ROOM .BRICK-ROOM
				"The way is blocked by debris from an explosion.">
			     <JIGS-UP ,BRICK-BOOM>)
			    (<==? .BRICK-ROOM <FIND-ROOM "SAFE">>
			     <CLOCK-INT ,SAFIN 5>
			     <SETG MUNGED-ROOM <OROOM .BRICK>>
			     <TELL "There is an explosion nearby.">
			     <COND (<MEMQ .BRICK <OCONTENTS <FIND-OBJ "SSLOT">>>
				    <TRZ <FIND-OBJ "SSLOT"> ,OVISON>
				    <PUT <FIND-OBJ "SAFE"> ,OOPEN? T>
				    <SETG SAFE-FLAG!-FLAG T>)>)
			    (<TELL "There is an explosion nearby.">
			     <CLOCK-INT ,SAFIN 5>
			     <SETG MUNGED-ROOM .BRICK-ROOM>
			     <MAPF <>
				   <FUNCTION (X)
				     <COND (<CAN-TAKE? .X>
					    <TRZ .X ,OVISON>)>>
				   <ROBJS .BRICK-ROOM>>
			     <COND (<==? .BRICK-ROOM <FIND-ROOM "LROOM">>
				    <MAPF <>
					  <FUNCTION (X) #DECL ((X) OBJECT)
					    <PUT .X ,OCAN <>>>
					  <OCONTENTS <FIND-OBJ "TCASE">>>
				    <PUT <FIND-OBJ "TCASE"> ,OCONTENTS ()>)>)>)
		     (<OR <NOT <OROOM .FUSE>> <==? ,HERE <OROOM .FUSE>>>
		      <TELL "The wire rapidly burns into nothingness.">)>)>>

<DEFINE SAFE-MUNG ("AUX" (RM ,MUNGED-ROOM)) 
	#DECL ((RM) ROOM)
	<COND (<==? ,HERE .RM>
	       <JIGS-UP
		<COND (<RTRNN .RM ,RHOUSEBIT>
"The house shakes, and the ceiling of the room you're in collapses,
turning you into a pancake.") 
("The room trembles and 50,000 pounds of rock fall on you, turning you
into a pancake.")>>)
	      (<TELL
"You may recall your recent explosion.  Well, probably as a result of
that, you hear an ominous rumbling, as if one of the rooms in the
dungeon had collapsed.">
	       <AND <==? .RM <FIND-ROOM "SAFE">>
		    <CLOCK-INT ,LEDIN 8>>)>
	<MUNG-ROOM <OR <OROOM <FIND-OBJ "BRICK">> ,HERE>
		   "The way is blocked by debris from an explosion.">>

<DEFINE LEDGE-MUNG ("AUX" (RM <FIND-ROOM "LEDG4">))
    #DECL ((RM) ROOM)
    <COND (<==? ,HERE .RM>
	   <COND (<AVEHICLE ,WINNER>
		  <COND (,BTIE!-FLAG
			 <SET RM <FIND-ROOM "VLBOT">>
			 <SETG BLOC .RM>
			 <REMOVE-OBJECT <FIND-OBJ "BALLO">>
			 <INSERT-OBJECT <FIND-OBJ "DBALL"> .RM>
			 <SETG BTIE!-FLAG <>>
			 <SETG BINF!-FLAG <>>
			 <CLOCK-DISABLE ,BINT>
			 <CLOCK-DISABLE ,BRNIN>
			 <JIGS-UP
"The ledge collapses, probably as a result of the explosion.  A large
chunk of it, which is attached to the hook, drags you down to the
ground.  Fatally.">)
			(<TELL "The ledge collapses, leaving you with no place to land.">)>)
		 (T
		  <JIGS-UP
"The force of the explosion has caused the ledge to collapse
belatedly.">)>)
	  (<TELL "The ledge collapses, giving you a narrow escape.">)>
    <MUNG-ROOM .RM "The ledge has collapsed and cannot be landed on.">>

<DEFINE LEDGE-FUNCTION ("AUX" (PRSA <1 ,PRSVEC>))
    #DECL ((PRSA) VERB)
    <COND (<==? .PRSA ,WALK-IN!-WORDS>
	   <AND ,SAFE-FLAG!-FLAG
		<TELL
"Behind you, the walls of the safe room collapse into rubble.">
		<SETG SAFE-FLAG!-FLAG <>>>)
	  (<==? .PRSA ,LOOK!-WORDS>
	   <TELL 
"You are on a wide ledge high into the volcano.  The rim of the
volcano is about 200 feet above and there is a precipitous drop below
to the bottom." 1
		<COND (<RTRNN <FIND-ROOM "SAFE"> ,RMUNGBIT>
		       " The way to the south is blocked by rubble.")
		      (" There is a small door to the south.")>>)>>

<DEFINE BLAST ()
    <COND (<==? ,HERE <FIND-ROOM "SAFE">>)
	  (<TELL "I don't really know how to do that.">)>>

<DEFINE VOLGNOME ()
    <COND (<MEMBER "LEDG" <SPNAME <RID ,HERE>>>
	   <TELL 
"A volcano gnome seems to walk straight out of the wall and says
'I have a very busy appointment schedule and little time to waste on
tresspassers, but for a small fee, I'll show you the way out.'  You
notice the gnome nervously glancing at his watch.">
	   <INSERT-OBJECT <FIND-OBJ "GNOME"> ,HERE>)
	  (<CLOCK-INT ,VLGIN 1>)>>

<SETG GNOME-DOOR!-FLAG <SETG GNOME-FLAG!-FLAG <>>>

<DEFINE GNOME-FUNCTION ("AUX" (PV ,PRSVEC) (PRSA <1 .PV>) (PRSO <2 .PV>))
    #DECL ((PV) VECTOR (PRSA) VERB (PRSO) PRSOBJ)
    <COND (<AND <OR <==? .PRSA ,GIVE!-WORDS>
		    <==? .PRSA ,THROW!-WORDS>>
		<TYPE? .PRSO OBJECT>
		<COND (<N==? <OTVAL .PRSO> 0>
		       <TELL 
"Thank you very much for the " 1 <ODESC2 .PRSO> ".  I don't believe 
I've ever seen one as beautiful. 'Follow me', he says, and a door 
appears on the west end of the ledge.  Through the door, you can see
a narrow chimney sloping steeply downward.">
		       <SETG GNOME-DOOR!-FLAG T>)
		      (<TELL
"'That wasn't quite what I had in mind', he says, crunching the
" 1 <ODESC2 .PRSO> " in his rock-hard hands.">
		       <REMOVE-OBJECT .PRSO>)>>)
	  (<==? .PRSA ,C-INT!-WORDS>
	   <TELL
"The gnome glances at his watch.  'Oops.  I'm late for an
appointment!' He disappears, leaving you alone on the ledge.">
	   <REMOVE-OBJECT <FIND-OBJ "GNOME">>)
	  (<TELL 
"The gnome appears increasingly nervous.">
	   <OR ,GNOME-FLAG!-FLAG <CLOCK-INT ,GNOIN 5>>
	   <SETG GNOME-FLAG!-FLAG T>)>>

