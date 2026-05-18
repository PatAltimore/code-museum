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
description: "This file defines specific object interactions and puzzle mechanics in Zork, showcasing the ingenuity of early text-based adventure game design."

summary:
  - point: "MDL language used for complex object interactions"
    link: "https://en.wikipedia.org/wiki/MDL_(programming_language)"
    link_label: "MDL programming language"
  - point: "Creative use of humor and narrative in puzzles"
    link: "https://en.wikipedia.org/wiki/Zork"
    link_label: "Zork"
  - point: "Early ARPANET gaming access shaped user experience"
    link: "https://en.wikipedia.org/wiki/ARPANET"
    link_label: "ARPANET"
  - point: "Pioneering dynamic object manipulation in game worlds"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive fiction"
  - point: "MIT's open-source release preserves computing history"
    link: "https://en.wikipedia.org/wiki/MIT_License"
    link_label: "MIT License"

enhancements:
  - id: "coke-bottles-magic-glass"
    line_start: 7
    line_end: 17
    title: "Magic glass bottles and playful destruction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "This subroutine handles interactions with 'magic glass' bottles in the game. If the player throws or otherwise attempts to break the bottles, the game humorously informs them that the bottles disappear immediately upon breaking, sparing their feet from harm. This moment exemplifies Zork's blend of humor and player-friendly design. In the late 1970s, text-based games like Zork were pioneering interactive storytelling, often constrained by the limited memory and processing power of the DEC PDP-10. The authors—Anderson, Blank, Daniels, and Lebling—were MIT graduates who brought their technical expertise and creativity to the project. Their use of MDL allowed for complex object interactions that were ahead of their time. The playful tone of this interaction reflects the team's approach to making the game engaging and memorable. This mechanic, while simple, set a precedent for dynamic object behaviors in future games, influencing the design of interactive fiction and adventure games for decades."
  - id: "head-function-implementers-foresight"
    line_start: 19
    line_end: 37
    title: "Implementers’ foresight and player punishment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'HEAD-FUNCTION' subroutine delivers a humorous and ominous message when players attempt to tamper with the remains of the game's creators. The implementers foresaw such an action and programmed a punishment scenario, depriving the player of their valuables and life. This interaction showcases Zork's unique narrative style, blending humor with a sense of consequence. In the late 1970s, the computing landscape was dominated by mainframes like the DEC PDP-10, and games like Zork were pushing the boundaries of what interactive storytelling could achieve. The authors infused their own personalities into the game, creating a connection between the player and the creators. This subroutine reflects the team's playful yet challenging approach to game design, where curiosity could lead to unexpected (and often humorous) outcomes. The concept of punishing players for their actions would later evolve into more nuanced morality systems in modern games."
  - id: "bucket-mechanics-and-dynamic-world"
    line_start: 43
    line_end: 64
    title: "Bucket mechanics and dynamic world interactions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "This subroutine governs the behavior of a bucket in the game, allowing it to rise or descend based on player actions. It also introduces a flag system to track the bucket's state, ensuring consistent interactions. The bucket's movement is tied to specific rooms, adding a layer of spatial logic to the puzzle. In the late 1970s, designing dynamic object interactions was a significant challenge due to hardware limitations. The DEC PDP-10 had limited memory and processing power, requiring programmers to optimize their code meticulously. The authors of Zork leveraged MDL's capabilities to create a world where objects responded intelligently to player input. This mechanic highlights the team's focus on creating a believable and interactive game world. The use of flags to track object states became a common technique in game development, influencing the design of adventure games and RPGs for years to come."
  - id: "eatme-function-alice-in-wonderland"
    line_start: 76
    line_end: 91
    title: "EatMe cake and Alice in Wonderland homage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'EATME-FUNCTION' subroutine is a direct nod to Lewis Carroll's 'Alice in Wonderland.' When players consume the 'EatMe' cake in the 'Alice' room, the game humorously describes the room as appearing very large, simulating the shrinking effect from the story. This interaction demonstrates Zork's literary influences and the team's ability to weave cultural references into gameplay. In the late 1970s, text-based games were often inspired by literature and mythology, as these themes resonated with the highly educated audience accessing games over ARPANET. The authors of Zork, all MIT graduates, drew from their own love of storytelling and cultural touchstones to enrich the game world. This homage to 'Alice in Wonderland' adds depth and charm to the game, making it memorable for players. The use of literary references in games has since become a staple, influencing titles across genres and generations."
  - id: "buttons-carousel-mechanics"
    line_start: 214
    line_end: 236
    title: "Buttons and carousel room mechanics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "This subroutine handles interactions with buttons in a room filled with heavy machinery. Depending on which button the player presses, the intensity of the machinery's whirring changes, or the magnetic carousel flips its orientation. The game warns players about the dangers of high voltage, adding a sense of risk to their actions. In the late 1970s, interactive environments like this were groundbreaking, as they created a sense of immersion and consequence. The authors of Zork used MDL to simulate complex mechanical systems within the constraints of the DEC PDP-10. This puzzle reflects the team's ingenuity in designing challenges that required players to experiment and think critically. The concept of interactive environments has since evolved into fully realized physics systems in modern games, but the foundation laid by Zork remains influential."
  - id: "sphere-function-poisonous-gas"
    line_start: 245
    line_end: 282
    title: "Sphere puzzle and poisonous gas trap"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork"
    image_url: ""
    image_caption: ""
    content: "The 'SPHERE-FUNCTION' subroutine presents players with a high-stakes puzzle involving an iron cage and poisonous gas. If the player attempts to take the sphere, they are trapped, and the room fills with gas. The game uses flags and object manipulation to simulate the trap and its consequences. In the late 1970s, creating such dynamic puzzles required careful planning and optimization due to hardware constraints. The authors of Zork used MDL to implement complex scenarios that challenged players' problem-solving skills. This puzzle exemplifies the team's ability to create tension and drama within a text-based environment. The use of traps and environmental hazards in games has since become a staple, influencing genres like survival horror and adventure games."

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