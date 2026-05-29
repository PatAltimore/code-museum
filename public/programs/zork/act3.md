---
title: "act3.13"
program: "Zork"
program_slug: "zork"
file_path: "zork/lcf/act3.13"
language: "MDL (Muddle)"
github_url: "https://github.com/MITDDC/zork/blob/master/zork/lcf/act3.13"
year: 1977
author: "Anderson, Blank, Daniels, Lebling"
slug: "act3"
order: 6
description: "Puzzle and interaction logic from Zork, a foundational text adventure game that shaped interactive fiction."

summary:
  - point: "Implements object-specific interactions like breaking bottles or eating cakes"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Showcases MDL's Lisp-like syntax and object-oriented features"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL programming language"
  - point: "Includes humorous and punishing responses to player actions"
    link: "https://en.wikipedia.org/wiki/Text-based_game"
    link_label: "Text-based games"
  - point: "Demonstrates early game design principles for puzzles and environmental storytelling"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive fiction"
  - point: "Reflects the constraints of PDP-10 hardware and ARPANET access"
    link: "https://en.wikipedia.org/wiki/DEC_PDP-10"
    link_label: "DEC PDP-10"

enhancements:
  - id: "breaking-magic-bottles"
    line_start: 7
    line_end: 17
    title: "Why Magic Bottles Disappear Instantly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "This subroutine handles the interaction when a player attempts to break bottles in the game. It checks the verb used (e.g., 'throw' or 'mung') and provides a humorous response: the bottles break but vanish immediately, sparing the player from stepping on shards. The code modifies the bottle object to remove its visibility and size, effectively 'destroying' it in the game world. Written in MDL, this routine exemplifies the playful tone of Zork, where even mundane actions are met with creative consequences. In the late 1970s, text adventures like Zork were pioneering ways to make virtual worlds feel alive and responsive, often with humor and surprise. The approach here—using object properties to track state—became a staple in interactive fiction and influenced later games like Infocom's Enchanter series and Sierra's graphical adventures. The humor and responsiveness of Zork's puzzles helped establish the genre's reputation for wit and cleverness."
  - id: "tampering-with-remains"
    line_start: 19
    line_end: 37
    title: "The Punishment for Tampering with the Dead"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "This subroutine handles the player's attempt to read or interact with remains. If the verb matches 'read,' the game delivers a darkly humorous message about the foresight of the game's creators, who anticipated such tampering and implemented a punishment. The code then removes valuables from the player and ends their game session ('JIGS-UP'). This reflects Zork's penchant for blending humor with harsh consequences, a hallmark of early interactive fiction. In 1977, games were often unforgiving, and Zork's developers used this to create memorable moments that stuck with players. The idea of punishing curiosity with a narrative twist influenced later games, including Infocom titles and LucasArts adventures, where player actions could lead to unexpected outcomes. The use of object manipulation and room transitions here showcases MDL's capabilities for dynamic storytelling."
  - id: "bucket-puzzle-mechanics"
    line_start: 43
    line_end: 64
    title: "How a Bucket Became a Puzzle"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "This routine manages interactions with a bucket, a common puzzle element in Zork. Depending on the player's actions, the bucket can rise or descend, with flags tracking its state. The code uses object properties and global variables to simulate the bucket's movement and its effects on the game world. In the late 1970s, puzzles like this were designed to challenge players' logical thinking and spatial awareness, often requiring experimentation to solve. The bucket puzzle exemplifies Zork's environmental storytelling, where objects and their states are integral to gameplay. Techniques like these influenced later adventure games, from Infocom's text-based titles to graphical adventures like King's Quest, which expanded on the idea of interactive objects and state-based puzzles."
  - id: "alice-in-wonderland-cake"
    line_start: 76
    line_end: 91
    title: "The Cake That Changed Your Size"
    wikipedia_url: "https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland"
    image_url: ""
    image_caption: ""
    content: "This subroutine handles the 'Eat Me' cake, a direct reference to Lewis Carroll's Alice's Adventures in Wonderland. When the player eats the cake in the 'Alice' room, the game simulates a size change by modifying object sizes and moving the player to a new room ('ALISM'). The code uses MDL's object manipulation features to create this effect, scaling object sizes by a factor of 64. In the 1970s, such literary references added depth and whimsy to games, appealing to players' imaginations. Zork's developers, steeped in MIT's culture of intellectual playfulness, often incorporated literary and cultural nods. This approach influenced later games like The Hitchhiker's Guide to the Galaxy, which blended narrative and puzzles in similarly inventive ways."
  - id: "high-voltage-button-room"
    line_start: 196
    line_end: 208
    title: "Danger: High Voltage and EBCDIC"
    wikipedia_url: "https://en.wikipedia.org/wiki/EBCDIC"
    image_url: ""
    image_caption: ""
    content: "This section describes a room filled with machinery and buttons labeled in EBCDIC, an IBM character encoding standard. The room's description includes humorous warnings about high voltage and the difficulty of reading EBCDIC. This reflects Zork's playful tone and its creators' technical backgrounds, as EBCDIC was an obscure encoding even in the 1970s. The inclusion of such details added texture to the game world, making it feel both whimsical and grounded in real-world computing. Zork's detailed room descriptions influenced later games, encouraging developers to use environmental storytelling to immerse players. The humor and specificity here are hallmarks of Infocom's style, which became a defining feature of interactive fiction."

---

```lisp






<DEFINE COKE-BOTTLES ("AUX" (PV ,PRSVEC) (BOTTL <2 .PV>) (VB <1 .PV>))
  #DECL ((PV) <VECTOR VERB> (VB) VERB (BOTTL) OBJECT)
  <COND (<OR <==? .VB ,THROW!-WORDS>
	     <==? <VNAME .VB> MUNG!-WORDS>>
	 <TELL 
"Congratulations!  You've managed to break all those bottles.
Fortunately for your feet, they were made of magic glass and disappear
immediately.">
	 <TRZ .BOTTL ,OVISON>
	 <PUT .BOTTL ,OSIZE 0>
	 T)>>

<DEFINE HEAD-FUNCTION ("AUX" (PV ,PRSVEC) (VB <1 .PV>) (NL ())
		       (LCASE <FIND-OBJ "LCASE">))
  #DECL ((PV) <VECTOR VERB> (VB) VERB (NL) <LIST [REST OBJECT]>
	 (LCASE) OBJECT)
  <COND (<N==? .VB ,READ!-WORDS>
	 <TELL
"Although the implementers are dead, they foresaw that some cretin
would tamper with their remains.  Therefore, they took steps to
prevent this.">
	 <SET NL <ROB-ADV ,WINNER .NL>>
	 <SET NL <ROB-ROOM ,HERE .NL 100>>
	 <COND (<NOT <EMPTY? .NL>>
		<OR <OROOM .LCASE> <INSERT-OBJECT .LCASE <FIND-ROOM "LROOM">>>
		<PUT .LCASE ,OCONTENTS (!<OCONTENTS .LCASE> !.NL)>)>
	 <JIGS-UP
"Unfortunately, we've run out of poles.  Therefore, in punishment for
your most grievous sin, we shall deprive you of all your valuables,
and of your life.">
	 T)>>

<SETG THEN 0>

<SETG BUCKET-TOP!-FLAG <>>

<DEFINE BUCKET ("OPTIONAL" (ARG <>)
		"AUX" (PV ,PRSVEC) (PA <1 .PV>) (PO <2 .PV>)
		      (W <FIND-OBJ "WATER">) (BUCK <FIND-OBJ "BUCKE">))
	#DECL ((ARG) <OR FALSE ATOM> (PV) VECTOR (PA) VERB
	       (PO) <OR DIRECTION FALSE OBJECT> (W BUCK) OBJECT)
	<COND (<==? .ARG READ-IN> <>)
	      (<AND <==? .PA ,C-INT!-WORDS>
		    <COND (<MEMQ .W <OCONTENTS .BUCK>>
			   <REMOVE-OBJECT .W>
			   <>)
			  (T)>>)
	      (<==? .ARG READ-OUT>
	       <COND (<AND <==? <OCAN .W> .BUCK> <NOT ,BUCKET-TOP!-FLAG>>
		      <TELL "The bucket rises and comes to a stop.">
		      <SETG BUCKET-TOP!-FLAG T>
		      <PASS-THE-BUCKET <FIND-ROOM "TWELL"> .PV .BUCK>
		      <CLOCK-INT ,BCKIN 100>
		      <>)
		     (<AND ,BUCKET-TOP!-FLAG <N==? <OCAN .W> .BUCK>>
		      <TELL "The bucket descends and comes to a stop.">
		      <SETG BUCKET-TOP!-FLAG <>>
		      <PASS-THE-BUCKET <FIND-ROOM "BWELL"> .PV .BUCK>)>)>>

<DEFINE PASS-THE-BUCKET (R PV B "AUX" (PVS <2 .PV>))
    #DECL ((R) ROOM (B) OBJECT (PV) VECTOR (PVS) <OR FALSE OBJECT DIRECTION>)
    <PUT .PV 2 <>>
    <REMOVE-OBJECT .B>
    <INSERT-OBJECT .B .R>
    <COND (<==? <AVEHICLE ,WINNER> .B>
	   <GOTO .R>
    	   <ROOM-INFO T>)>
    <PUT .PV 2 .PVS>>

<DEFINE EATME-FUNCTION ("AUX" R C (PV ,PRSVEC) (HERE ,HERE))
    #DECL ((PV) VECTOR (C) OBJECT (PA) VERB (HERE R) ROOM)
    <COND (<AND <==? <1 .PV> ,EAT!-WORDS>
		<==? <2 .PV> <SET C <FIND-OBJ "ECAKE">>>
		<==? .HERE <FIND-ROOM "ALICE">>>
	   <TELL 
"Suddenly, the room appears to have become very large.">
	   <KILL-OBJ .C ,WINNER>
	   <SET R <FIND-ROOM "ALISM">>
	   <PUT .R ,ROBJS <ROBJS .HERE>>
	   <MAPF <>
		 <FUNCTION (X) #DECL ((X) OBJECT)
			    <PUT .X ,OSIZE <* 64 <OSIZE .X>>>
			    <PUT .X ,OROOM .R>>
		 <ROBJS .HERE>>
	   <GOTO .R>)>>

<DEFINE CAKE-FUNCTION ("AUX" (PV ,PRSVEC) (PA <1 .PV>) (PO <2 .PV>) (PI <3 .PV>)
			     (RICE <FIND-OBJ "RDICE">) (OICE <FIND-OBJ "ORICE">)
			     (BICE <FIND-OBJ "BLICE">) (HERE ,HERE) R)
	#DECL ((PV) VECTOR (PA) VERB (PI PO) <OR FALSE OBJECT>
	       (RICE OICE BICE) OBJECT (HERE R) ROOM)
	<COND (<==? .PA ,READ!-WORDS>
	       <COND (.PI
		      <COND (<==? .PI <FIND-OBJ "BOTTL">>
			     <TELL 
"The letters appear larger, but still are too small to be read.">)
			    (<==? .PI <FIND-OBJ "FLASK">>
			     <TELL "The icing, now visible, says '"
				   1
				   <COND (<==? .PO .RICE> "Evaporate")
					 (<==? .PO .OICE> "Explode")
					 ("Enlarge")>
				   "'.">)
			    (<TELL "You can't see through that!">)>)
		     (<TELL 
"The only writing legible is a capital E.  The rest is too small to
be clearly visible.">)>)
	      (<AND <==? .PA ,EAT!-WORDS> <MEMBER "ALI" <SPNAME <RID .HERE>>>>
	       <COND (<==? .PO .OICE>
		      <KILL-OBJ .PO ,WINNER>
		      <ICEBOOM>)
		     (<==? .PO .BICE>
		      <KILL-OBJ .PO ,WINNER>
		      <TELL "The room around you seems to be getting smaller.">
		      <COND (<==? .HERE <FIND-ROOM "ALISM">>
			     <SET R <FIND-ROOM "ALICE">>
			     <PUT .R ,ROBJS <ROBJS .HERE>>
			     <MAPF <>
				   <FUNCTION (X) #DECL ((X) OBJECT)
					     <PUT .X ,OROOM .R>
					     <PUT .X ,OSIZE </ <OSIZE .X> 64>>>
				   <ROBJS .HERE>>
			     <GOTO .R>)
			    (<JIGS-UP ,CRUSHED>)>)>)
	      (<AND <==? .PA ,THROW!-WORDS>
		    <==? .PO .OICE>
		    <MEMBER "ALI" <SPNAME <RID .HERE>>>>
	       <KILL-OBJ .PO ,WINNER>
	       <ICEBOOM>)
	      (<AND <==? .PA ,THROW!-WORDS>
		    <==? .PO .RICE>
		    <==? .PI <FIND-OBJ "POOL">>>
	       <REMOVE-OBJECT .PI>
	       <TELL 
"The pool of water evaporates, revealing a tin of rare spices.">
	       <TRO <FIND-OBJ "SAFFR"> ,OVISON>)>>

<DEFINE FLASK-FUNCTION ("AUX" F (PV ,PRSVEC) (PA <1 .PV>))
    #DECL ((PV) <VECTOR VERB OBJECT> (PA) VERB)
    <COND (<==? .PA ,OPEN!-WORDS>
	   <MUNG-ROOM ,HERE "Noxious vapors prevent your entry.">
	   <JIGS-UP ,VAPORS>)
	  (<OR <==? .PA ,MUNG!-WORDS>
	       <==? .PA ,THROW!-WORDS>>
	   <TELL "The flask breaks into pieces.">
	   <SET F <2 .PV>>
	   <TRZ .F ,OVISON>
	   <JIGS-UP ,VAPORS>)>>

<PSETG VAPORS
"Just before you pass out, you notice that the vapors from the
flask's contents are fatal.">

<PSETG CRUSHED
"The room seems to have become too small to hold you.  It seems that
the  walls are not as compressible as your body, which is somewhat
demolished.">

<DEFINE ICEBOOM () 
    <MUNG-ROOM ,HERE
"The door to the room seems to be blocked by sticky orange rubble
from an explosion.  Probably some careless adventurer was playing
with blasting cakes.">
    <JIGS-UP ,ICEBLAST>>

<PSETG ICEBLAST "You have been blasted to smithereens (wherever they are).">

<DEFINE MAGNET-ROOM ("AUX" FOO (PV ,PRSVEC) (PA <1 .PV>) (PO <2 .PV>) (HERE ,HERE) M)
	#DECL ((PV) VECTOR (PA) VERB (PO) <OR FALSE OBJECT DIRECTION> (HERE) ROOM
	       (M) <OR FALSE <PRIMTYPE VECTOR>> (FOO) CEXIT)
	<COND (<==? .PA ,LOOK!-WORDS>
	       <TELL 
"You are in a room with a low ceiling which is circular in shape. 
There are exits to the east and the southeast.">)
	      (<AND <==? .PA ,WALK-IN!-WORDS> ,CAROUSEL-FLIP!-FLAG>
	       <COND (,CAROUSEL-ZOOM!-FLAG <JIGS-UP ,SPINDIZZY>)
		     (<TELL 
"As you enter, your compass starts spinning wildly.">
		      <>)>)
	      (<==? .PA ,WALK!-WORDS>
	       <COND (<AND ,CAROUSEL-FLIP!-FLAG <==? ,WINNER ,PLAYER>>
	       	      <TELL "You cannot get your bearings...">
	       	      <GOTO <CXROOM <SET FOO
				    <NTH <REXITS .HERE> <* 2 <+ 1 <MOD <RANDOM> 8>>>>>>>
		      <ROOM-INFO>)
		     (<SET M <MEMQ <CHTYPE .PO ATOM> <REST <REXITS .HERE> 12>>>
		      <GOTO <CXROOM <SET FOO <2 .M>>>>
		      <ROOM-INFO>)>)>>

<DEFINE CMACH-ROOM ("AUX" (PV ,PRSVEC) (PA <1 .PV>))
    #DECL ((PV) VECTOR (PA) VERB)
    <COND (<==? .PA ,LOOK!-WORDS>
	   <TELL 

"You are in a large room full of assorted heavy machinery.  The room
smells of burned resistors. The room is noisy from the whirring
sounds of the machines. Along one wall of the room are three buttons
which are, respectively, round, triangular, and square.  Naturally,
above these buttons are instructions written in EBCDIC.  A large sign
in English above all the buttons says
		'DANGER -- HIGH VOLTAGE '.
There are exits to the west and the south.">)>>
	  
<SETG CAROUSEL-ZOOM!-FLAG <>>

<SETG CAROUSEL-FLIP!-FLAG <>>

<DEFINE BUTTONS ("AUX" I (PV ,PRSVEC) (PO <2 .PV>) (PA <1 .PV>)) 
	#DECL ((I) OBJECT (PV) VECTOR (PA) VERB)
	<COND (<==? .PA ,PUSH!-WORDS>
	       <COND (<==? ,WINNER ,PLAYER>
		      <JIGS-UP 
"There is a giant spark and you are fried to a crisp.">)
		     (<==? .PO <FIND-OBJ "SQBUT">>
		      <COND (,CAROUSEL-ZOOM!-FLAG
			     <TELL "Nothing seems to happen.">)
			    (<SETG CAROUSEL-ZOOM!-FLAG T>
		      	     <TELL "The whirring increases in intensity slightly.">)>)
		     (<==? .PO <FIND-OBJ "RNBUT">>
		      <COND (,CAROUSEL-ZOOM!-FLAG
			     <SETG CAROUSEL-ZOOM!-FLAG <>>
		      	     <TELL "The whirring decreases in intensity slightly.">)
			    (<TELL "Nothing seems to happen.">)>)
		     (<==? .PO <FIND-OBJ "TRBUT">>
		      <SETG CAROUSEL-FLIP!-FLAG <NOT ,CAROUSEL-FLIP!-FLAG>>
		      <COND (<MEMQ <SET I <FIND-OBJ "IRBOX">>
				   <ROBJS <FIND-ROOM "CAROU">>>
			     <TELL
"A dull thump is heard in the distance.">
			     <TRC .I ,OVISON>)>)>)>>

<PSETG SPINDIZZY
"According to Prof. TAA of MIT Tech, the rapidly changing magnetic
fields in the room are so intense as to cause you to be electrocuted. 
I really don't know, but in any event, something just killed you.">

<SETG CAGE-SOLVE!-FLAG <>>

<DEFINE SPHERE-FUNCTION ("AUX" (PV ,PRSVEC) (PA <1 .PV>)
			 (R <FIND-OBJ "ROBOT">) C FL RACT)
	#DECL ((PV) <VECTOR VERB OBJECT>
	       (PA) VERB (C) ROOM (R) OBJECT (FL) <OR ATOM FALSE> (RACT) ADV)
	<SET FL <AND <NOT ,CAGE-SOLVE!-FLAG> <==? .PA ,TAKE!-WORDS>>>
	<COND (<AND .FL <==? ,PLAYER ,WINNER>>
	       <TELL 
"As you reach for the sphere, an iron cage falls from the ceiling
to entrap you.  To make matters worse, poisonous gas starts coming
into the room.">
	       <COND (<==? <OROOM .R> ,HERE>
		      <GOTO <SET C <FIND-ROOM "CAGED">>>
		      <REMOVE-OBJECT .R>
		      <INSERT-OBJECT .R .C>
		      <PUT <SET RACT <ORAND .R>> ,AROOM .C>
		      <TRO .R ,NDESCBIT>
		      <SETG SPHERE-CLOCK <CLOCK-INT ,SPHIN 10>>
		      T)
		     (ELSE
		      <TRZ <FIND-OBJ "SPHER"> ,OVISON>
		      <MUNG-ROOM <FIND-ROOM "CAGER">
				 "You are stopped by a cloud of poisonous gas.">
		      <JIGS-UP ,POISON>)>)
	      (.FL
	       <TRZ <FIND-OBJ "SPHER"> ,OVISON>
	       <JIGS-UP
"As the robot reaches for the sphere, an iron cage falls from the
ceiling.  The robot attempts to fend it off, but is trapped below it.
Alas, the robot short-circuits in his vain attempt to escape, and
crushes the sphere beneath him as he falls to the floor.">
	       <REMOVE-OBJECT .R>
	       <TRZ <2 .PV> ,OVISON>
	       <INSERT-OBJECT <FIND-OBJ "RCAGE"> ,HERE>
	       T)
	      (<==? .PA ,C-INT!-WORDS>
	       <MUNG-ROOM <FIND-ROOM "CAGER">
			  "You are stopped by a cloud of poisonous gas.">
	       <JIGS-UP ,POISON>)>>

<PSETG POISON "Time passes...and you die from some obscure poisoning.">

<DEFINE CAGED-ROOM ()
    <COND (,CAGE-SOLVE!-FLAG <SETG HERE <FIND-ROOM "CAGER">>)>>

<GDECL (SPHERE-CLOCK) CEVENT (ROBOT-ACTIONS) <UVECTOR [REST VERB]>>
<DEFINE ROBOT-ACTOR ("AUX" (PV ,PRSVEC) (PA <1 .PV>) (PO <2 .PV>) C CAGE
		     (R <FIND-OBJ "ROBOT">) RACT) 
	#DECL ((C) ROOM (PA) VERB (PV) VECTOR (PO) <OR FALSE OBJECT DIRECTION>
	       (CAGE) OBJECT (R) OBJECT (RACT) ADV)
	<COND (<AND <==? .PA ,RAISE!-WORDS> <==? .PO <FIND-OBJ "CAGE">>>
	       <TELL "The cage shakes and is hurled across the room.">
	       <CLOCK-DISABLE ,SPHERE-CLOCK>
	       <SETG WINNER ,PLAYER>
	       <GOTO <SET C <FIND-ROOM "CAGER">>>
	       <INSERT-OBJECT <SET CAGE <FIND-OBJ "CAGE">> .C>
	       <TRO .CAGE ,TAKEBIT>
	       <TRZ .CAGE ,NDESCBIT>
	       <TRZ .R ,NDESCBIT>
	       <TRO <FIND-OBJ "SPHER"> ,TAKEBIT>
	       <REMOVE-OBJECT .R>
	       <INSERT-OBJECT .R .C>
	       <PUT <SET RACT <ORAND .R>> ,AROOM .C>
	       <SETG CAGE-SOLVE!-FLAG T>)
	      (<OR <==? .PA ,EAT!-WORDS> <==? .PA ,DRINK!-WORDS>>
	       <TELL
"\"I am sorry but that action is difficult in the absence of a mouth.\"">)
	      (<==? .PA ,READ!-WORDS>
	       <TELL
"\"My vision is not that good without eyes.\"">)
	      (<MEMQ .PA ,ROBOT-ACTIONS> <>)
	      (<TELL 
"\"I am only a stupid robot and cannot perform that command.\"">)>>

<DEFINE ROBOT-FUNCTION ("AUX" (PV ,PRSVEC) (PA <1 .PV>) (PO <2 .PV>)
			      (PI <3 .PV>) PP AA)
	#DECL ((AA) ADV (PV) VECTOR (PA) VERB (PP PO) OBJECT (PI) <OR FALSE OBJECT>)
	<COND (<==? .PA ,GIVE!-WORDS>
	       <SET AA <ORAND <SET PP .PI>>>
	       <REMOVE-OBJECT .PO>
	       <PUT .AA ,AOBJS (.PO !<AOBJS .AA>)>
	       <TELL "The robot gladly takes the "
		     1
		     <ODESC2 .PO>
		     "
and nods his head-like appendage in thanks.">)
	      (<OR <==? .PA ,THROW!-WORDS> <==? .PA ,MUNG!-WORDS>>
	       <TELL 
"The robot is injured (being of shoddy construction) and falls to the
floor in a pile of garbage, which disintegrates before your eyes.">
	       <REMOVE-OBJECT <COND (<==? .PA ,THROW!-WORDS> .PI) (.PO)>>)>> 

<DEFINE KNOCK ("AUX" (PRSO <2 ,PRSVEC>))
    <COND (<MEMQ DOOR!-OBJECTS <ONAMES .PRSO>>
	   <TELL "I don't think that anybody's home.">)
	  (<TELL "Why knock on a " 0 <ODESC2 .PRSO> "?">)>>

<DEFINE CHOMP ()
    <TELL "I don't know how to do that.  I win in all cases!">>

<DEFINE FROBOZZ ()
    <TELL "The FROBOZZ Corporation created, owns, and operates this dungeon.">>

<DEFINE WIN ()
    <TELL "Naturally!">>

<DEFINE YELL ()
    <TELL "Aaaarrrrrrrrgggggggggggggghhhhhhhhhhhhhh!">>

```