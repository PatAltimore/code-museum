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
description: "This file encapsulates the intricate puzzle mechanics and object interactions in Zork, showcasing the ingenuity of early text-based adventure game programming."

summary:
  - point: "MDL's Lisp-like syntax enabled complex object and verb handling"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL programming language"
  - point: "Puzzle design reflects the era's emphasis on player experimentation"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Creative use of ARPANET for multiplayer testing during development"
    link: "https://en.wikipedia.org/wiki/ARPANET"
    link_label: "ARPANET"
  - point: "DEC PDP-10 hardware constraints influenced game design"
    link: "https://en.wikipedia.org/wiki/PDP-10"
    link_label: "DEC PDP-10"
  - point: "Magic glass bottles and other whimsical elements define Zork's charm"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive fiction"

enhancements:
  - id: "magic-glass-bottles"
    line_start: 7
    line_end: 17
    title: "Magic glass bottles: whimsy meets programming"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "This subroutine handles the interaction with 'magic glass bottles,' a quintessential example of Zork's playful design. When the player attempts to throw or otherwise 'mung' the bottles, the game congratulates them for breaking them, only to reveal they vanish harmlessly due to their magical nature. In 1977, the Zork team—Marc Blank, Dave Lebling, Tim Anderson, and Bruce Daniels—crafted puzzles that encouraged experimentation. The DEC PDP-10 hardware they worked on had limited memory and processing power, requiring careful optimization. The use of MDL, a Lisp dialect, allowed for sophisticated handling of objects and verbs, enabling nuanced responses like this one. This playful interaction reflects the team's goal of creating a game that felt alive and reactive, a hallmark of interactive fiction. The magic glass bottles are a small but memorable detail that contributed to Zork's lasting legacy as a pioneer in the genre."
  - id: "tampering-with-remains"
    line_start: 19
    line_end: 37
    title: "Tampering with remains: foresight and punishment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "This subroutine is a humorous and dark example of Zork's narrative style. If the player attempts to 'read' the remains of the game's creators, they are met with a witty response about the creators' foresight in preventing tampering. The game then punishes the player with a dramatic death sequence. In the late 1970s, text-based games were a new frontier, and Zork's creators were among the first to explore the potential of interactive storytelling. The humor and creativity in this sequence reflect their backgrounds in computer science and their love for fantasy literature. The playful tone and imaginative scenarios set Zork apart from other games of its time, establishing it as a classic in the genre. This subroutine is a testament to the team's ability to blend technical innovation with engaging storytelling."
  - id: "bucket-puzzle-mechanics"
    line_start: 43
    line_end: 64
    title: "The bucket puzzle: dynamic object interactions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'BUCKET' subroutine is a prime example of Zork's dynamic puzzle mechanics. It manages interactions with a bucket, water, and a well, allowing the player to manipulate these objects in various ways. The optional argument 'ARG' determines whether the bucket rises or descends, introducing a sense of physicality and cause-and-effect to the game world. In the context of 1977, this level of interaction was groundbreaking. The DEC PDP-10's limited resources required the team to innovate with efficient coding practices, and MDL's object-oriented capabilities provided the flexibility needed to create complex puzzles. The bucket puzzle exemplifies the team's ability to simulate a living world within the constraints of text-based gameplay. This approach influenced future adventure games, setting a standard for interactive environments that react to player actions."
  - id: "alice-in-wonderland"
    line_start: 76
    line_end: 91
    title: "Alice in Wonderland: a shrinking room"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'EATME-FUNCTION' subroutine is a direct nod to Lewis Carroll's 'Alice's Adventures in Wonderland.' When the player eats a magical cake in the 'Alice' room, the entire environment changes, with objects and the room itself appearing to grow larger. In reality, the player's character shrinks, a clever illusion achieved by scaling the sizes of objects and transferring them to a new room. This sequence showcases the Zork team's ability to integrate literary references into their game design, creating a richer and more immersive experience. The use of MDL allowed for complex transformations and object manipulations, pushing the boundaries of what text-based games could achieve. This puzzle is a reminder of Zork's influence on interactive fiction, inspiring future games to blend narrative and gameplay in innovative ways."
  - id: "exploding-icing"
    line_start: 93
    line_end: 142
    title: "Exploding icing: puzzles with consequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'CAKE-FUNCTION' subroutine is a masterclass in designing puzzles with multiple solutions and consequences. Depending on the player's actions, the icing on the cake can explode, evaporate, or shrink objects, each triggering unique outcomes and altering the game world. This level of interactivity was rare in 1977, when most games were linear and lacked dynamic responses to player choices. The Zork team leveraged MDL's flexibility to create a system where objects could interact in surprising and meaningful ways. The exploding icing is a perfect example of Zork's blend of humor, creativity, and technical ingenuity. It challenged players to think critically and experiment, laying the groundwork for the rich puzzle mechanics that would become a hallmark of the genre."
  - id: "buttons-and-carousel"
    line_start: 214
    line_end: 236
    title: "Buttons and carousel: magnetic chaos"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'BUTTONS' subroutine introduces a puzzle involving three buttons that control a carousel-like mechanism. Depending on the button pressed, the carousel's behavior changes, affecting the player's ability to navigate the room. The puzzle is further complicated by the presence of magnetic fields that disorient the player's compass. This sequence reflects the Zork team's creativity in designing puzzles that blend narrative elements with gameplay mechanics. In the late 1970s, text-based games were still in their infancy, and Zork's innovative use of MDL allowed for complex interactions and environmental effects. The buttons and carousel puzzle is a prime example of how Zork pushed the boundaries of what was possible in interactive fiction, setting a precedent for future games to create immersive and challenging experiences."
  - id: "robot-and-sphere-puzzle"
    line_start: 245
    line_end: 282
    title: "Robot and sphere: gas, cages, and consequences"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'SPHERE-FUNCTION' subroutine is a dramatic puzzle involving a robot, an iron cage, and poisonous gas. If the player or the robot attempts to take the sphere, an iron cage traps them, and gas fills the room, leading to death unless specific conditions are met. This puzzle showcases Zork's ability to create tension and stakes within a text-based environment. In 1977, the Zork team faced the challenge of making their game engaging despite the limitations of the DEC PDP-10 hardware and text-only interface. They achieved this through imaginative scenarios and clever programming. The robot's actions and the player's choices dynamically influence the outcome, demonstrating the game's advanced object-oriented design. This puzzle is a testament to Zork's legacy as a pioneer in interactive storytelling, inspiring generations of game developers."
  - id: "frobozz-corporation"
    line_start: 344
    line_end: 345
    title: "Frobozz Corporation: world-building through humor"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'FROBOZZ' subroutine humorously declares that the Frobozz Corporation owns and operates the dungeon. This fictional company is a recurring element in Zork and other Infocom games, serving as a satirical nod to corporate culture. In the 1970s, the Zork team at MIT infused their game with humor and wit, creating a rich and memorable world that stood out in the nascent field of interactive fiction. The Frobozz Corporation became a symbol of Zork's unique charm and its creators' playful approach to storytelling. This small detail is a reminder of how world-building can elevate a game, making it more than just a series of puzzles and interactions."

---







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
  