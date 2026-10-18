---
title: "gglobals.zil"
program: "Zork III"
program_slug: "zork3"
file_path: "gglobals.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork3/blob/master/gglobals.zil"
year: 1982
author: "Blank, Lebling, Daniels, Anderson"
slug: "gglobals"
order: 3
description: "Shared global objects, with the Zork III branches for the invisible player, the sailor and the Viking ship."

summary:
  - point: "The player object, IT, the grue and the zorkmid are defined once for all three games"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"
  - point: "Zork III's branches of the sailor and ME depend on the invisibility potion and the Viking ship"
    link: "https://en.wikipedia.org/wiki/Zork_III"
    link_label: "Zork III"

enhancements:
  - id: "tree-roots"
    line_start: 7
    line_end: 50
    title: "Roots and Stand-Ins"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "The first lines are the same object-tree roots as in Zork II: GLOBAL-OBJECTS, LOCAL-GLOBALS and ROOMS, plus INTNUM, PSEUDO-OBJECT and IT. INTNUM matters more here than in the earlier game, because Zork III's puzzles take numbers. The player types 'turn dial to 3' or 'set the machine to 776', the parser's NUMBER? routine stores the value in P-NUMBER and gives INTNUM as the object, and the dial and time machine routines read it back. IT and PSEUDO-OBJECT work as in the other games. The flags on GLOBAL-OBJECTS name the attributes, including WEARBIT, which the Shadow's hood and cloak use."
  - id: "not-here"
    line_start: 52
    line_end: 74
    title: "'You Can't See Any Hooded Figure Here'"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "NOT-HERE-OBJECT-F is the reply to a noun that is not in scope, and it is the same routine as in Zork II. The reply echoes the player's own words, so naming the hooded figure or the golden machine from the wrong room gets a specific, in-voice refusal. When another character is the speaker the line turns into dialogue."
  - id: "sailor"
    line_start: 148
    line_end: 195
    title: "The Sailor Who Finally Has a Scene"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "In the other two games the sailor object answers hello with 'Nothing happens here' and, if the player keeps trying, with a remark about repeating yourself. In Zork III the percent-sign conditionals keep a different branch. If the Viking ship is visible, 'hello' brings it to the shore and the sailor calls out that he has waited three ages for someone to say those words, hands over a vial and sails off singing a rude sailor song. The scene sets VIKING-SHIP invisible and moves the vial into the room. If the player says hello at the Flathead Ocean when no ship is in sight, the reply is 'Nothing happens yet', or 'Nothing happens anymore' once the ship has gone. The vial holds the invisibility potion that gets the player past the Guardians. A joke object in the shared library pays off in only one of the three games."
  - id: "ground"
    line_start: 197
    line_end: 215
    title: "The Ground Has No Sand Here"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "GROUND answers PUT and PUT-ON by turning them into DROP, and DIG with a refusal. In Zork I a branch adds the sand of the sandy cave; Zork III compiles the other branch, which does nothing, because its beach is scenery handled by pseudo-objects instead. The pattern of a shared object that is extended by a game-specific compile-time branch is how a single file kept three casts of rooms from stepping on one another."
  - id: "grue"
    line_start: 217
    line_end: 239
    title: "The Grue, Again, in Light"
    wikipedia_url: "https://en.wikipedia.org/wiki/Grue_(monster)"
    image_url: ""
    image_caption: ""
    content: "The grue's definition is shared, and its three replies are the same as in Zork II. Zork III gives the creature a lair. Two rooms on the way to the Key Room, DARK-1 and DARK-2, are named in the shared GOTO and V-WALK code as a grue lair, where the player who stumbles in is devoured by dozens of grues. The examine reply, which calls the grue a sinister, lurking presence that fears light, is one of the few places the player is told directly why a lamp matters. Elsewhere in the trilogy the rule is enforced by a die roll."
  - id: "cretin"
    line_start: 254
    line_end: 305
    title: "Talking to Yourself When You Cannot Be Seen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "CRETIN-FCN handles the verbs a player might try on themself. Examining yourself depends on the game: Zork I mentions a mirror, Zork II the unlikeliness of prehensile eyes, and Zork III two answers. If the global INVIS is true, the invisibility potion has been drunk, and the reply is 'A good trick, as you are currently invisible.' Otherwise the reply is 'What you can see looks pretty much as usual, sorry to say.' The global is set by drinking the contents of the vial and cleared a few turns later by I-VISIBLE, which is also what makes it dangerous to be seen by the Guardians. The routine is a small example of one shared object reading game-specific state."
---

```lisp
			"Generic GLOBALS file for
			    The ZORK Trilogy
		       started on 7/28/83 by MARC"

"SUBTITLE GLOBAL OBJECTS"

<OBJECT GLOBAL-OBJECTS
	(FLAGS RMUNGBIT INVISIBLE TOUCHBIT SURFACEBIT TRYTAKEBIT
	       OPENBIT SEARCHBIT TRANSBIT ONBIT RLANDBIT FIGHTBIT
	       STAGGERED WEARBIT)>

<OBJECT LOCAL-GLOBALS
	(IN GLOBAL-OBJECTS)
	(SYNONYM ZZMGCK)
	(DESCFCN PATH-OBJECT)
        (GLOBAL GLOBAL-OBJECTS)
	(ADVFCN 0)
	(FDESC "F")
	(LDESC "F")
	(PSEUDO "FOOBAR" V-WALK)
	(CONTFCN 0)
	(VTYPE 1)
	(SIZE 0)
	(CAPACITY 0)>

;"Yes, this synonym for LOCAL-GLOBALS needs to exist... sigh"

<OBJECT ROOMS
	(IN TO ROOMS)>

<OBJECT INTNUM
	(IN GLOBAL-OBJECTS)
	(SYNONYM INTNUM)
	(FLAGS TOOLBIT)
	(DESC "number")>

<OBJECT PSEUDO-OBJECT
	(IN LOCAL-GLOBALS)
	(DESC "pseudo")
	(ACTION CRETIN-FCN)>

<OBJECT IT
	(IN GLOBAL-OBJECTS)
	(SYNONYM IT THEM HER HIM)
	(DESC "random object")
	(FLAGS NDESCBIT TOUCHBIT)>

<OBJECT NOT-HERE-OBJECT
	(DESC "such thing" ;"[not here]")
	(ACTION NOT-HERE-OBJECT-F)>

<ROUTINE NOT-HERE-OBJECT-F ("AUX" TBL (PRSO? T) OBJ)
	 ;"This COND is game independent (except the TELL)"
	 <COND (<AND <EQUAL? ,PRSO ,NOT-HERE-OBJECT>
		     <EQUAL? ,PRSI ,NOT-HERE-OBJECT>>
		<TELL "Those things aren't here!" CR>
		<RTRUE>)
	       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>
		<SET TBL ,P-PRSO>)
	       (T
		<SET TBL ,P-PRSI>
		<SET PRSO? <>>)>
	 ;"Here is the default 'cant see any' printer"
	 <SETG P-CONT <>>
	 <SETG QUOTE-FLAG <>>
	 <COND (<EQUAL? ,WINNER ,PLAYER>
		<TELL "You can't see any ">
		<NOT-HERE-PRINT .PRSO?>
		<TELL " here!" CR>)
	       (T
		<TELL "The " D ,WINNER " seems confused. \"I don't see any ">
		<NOT-HERE-PRINT .PRSO?>
		<TELL " here!\"" CR>)>
	 <RTRUE>>

;<ROUTINE FIND-NOT-HERE (TBL PRSO? "AUX" M-F OBJ)
	;"Here is where special-case code goes. <MOBY-FIND .TBL> returns
	   number of matches. If 1, then P-MOBY-FOUND is it. One may treat
	   the 0 and >1 cases alike or different. It doesn't matter. Always
	   return RFALSE (not handled) if you have resolved the problem."
	<SET M-F <MOBY-FIND .TBL>>
	;<COND (,DEBUG
	       <TELL "[Moby-found " N .M-F " objects" "]" CR>)>
	<COND (<AND <G? .M-F 1>
		    <SET OBJ <GETP <GET .TBL 1> ,P?GLOBAL>>>
	       <SET M-F 1>
	       <SETG P-MOBY-FOUND .OBJ>)>
	<COND (<==? 1 .M-F>
	       ;<COND (,DEBUG <TELL "[Namely: " D ,P-MOBY-FOUND "]" CR>)>
	       <COND (.PRSO? <SETG PRSO ,P-MOBY-FOUND>)
		     (T <SETG PRSI ,P-MOBY-FOUND>)>
	       <RFALSE>)
	      (<NOT .PRSO?>
	       <TELL "You wouldn't find any ">
	       <NOT-HERE-PRINT .PRSO?>
	       <TELL " there." CR>
	       <RTRUE>)
	      (T ,NOT-HERE-OBJECT)>>

;<ROUTINE GLOBAL-NOT-HERE-PRINT (OBJ)
	 ;<COND (,P-MULT <SETG P-NOT-HERE <+ ,P-NOT-HERE 1>>)>
	 <SETG P-CONT <>>
	 <SETG QUOTE-FLAG <>>
	 <TELL "You can't see any">
	 <COND (<EQUAL? .OBJ ,PRSO> <PRSO-PRINT>)
	       (T <PRSI-PRINT>)>
	 <TELL " here." CR>>

<ROUTINE NOT-HERE-PRINT (PRSO?)
 <COND (,P-OFLAG
	<COND (,P-XADJ <PRINTB ,P-XADJN>)>
	<COND (,P-XNAM <PRINTB ,P-XNAM>)>)
       (.PRSO?
	<BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)
       (T
	<BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>>

<ROUTINE NULL-F ("OPTIONAL" A1 A2)
	 <RFALSE>>

/^L

"Objects shared by all three Zorks go here"

<GLOBAL LOAD-MAX 100>

<GLOBAL LOAD-ALLOWED 100>

<OBJECT BLESSINGS
	(IN GLOBAL-OBJECTS)
	(SYNONYM BLESSINGS GRACES)
	(DESC "blessings")
	(FLAGS NDESCBIT)>

<OBJECT STAIRS
	(IN LOCAL-GLOBALS)
	(SYNONYM STAIRS STEPS STAIRCASE STAIRWAY)
	(ADJECTIVE STONE DARK MARBLE FORBIDDING STEEP)
	(DESC "stairs")
	(FLAGS NDESCBIT CLIMBBIT)
	(ACTION STAIRS-F)>

<ROUTINE STAIRS-F ()
	 <COND (<VERB? THROUGH>
		<TELL
"You should say whether you want to go up or down." CR>)>>

<OBJECT SAILOR
	(IN GLOBAL-OBJECTS)
	(SYNONYM SAILOR FOOTPAD AVIATOR)
	(DESC "sailor")
	(FLAGS NDESCBIT)
	(ACTION SAILOR-FCN)>

<ROUTINE SAILOR-FCN ()
	  <COND (<VERB? TELL>
		 <SETG P-CONT <>>
		 <SETG QUOTE-FLAG <>>
		 <TELL "You can't talk to the sailor that way." CR>)
		(<VERB? EXAMINE>
		 %<COND (<==? ,ZORK-NUMBER 3>
			 '<COND (<NOT <FSET? ,VIKING-SHIP ,INVISIBLE>>
				 <TELL
"He looks like a sailor." CR>
				 <RTRUE>)>)
			(ELSE T)>
		 <TELL
"There is no sailor to be seen." CR>)
		(<VERB? HELLO>
		 <SETG HS <+ ,HS 1>>
		 %<COND (<==? ,ZORK-NUMBER 3>
			 '<COND (<NOT <FSET? ,VIKING-SHIP ,INVISIBLE>>
		                 <TELL
"The seaman looks up and maneuvers the boat toward shore. He cries out \"I
have waited three ages for someone to say those words and save me from
sailing this endless ocean. Please accept this gift. You may find it
useful!\" He throws something which falls near you in the sand, then sails
off toward the west, singing a lively, but somewhat uncouth, sailor song." CR>
		                 <FSET ,VIKING-SHIP ,INVISIBLE>
		                 <MOVE ,VIAL ,HERE>)
		                (<==? ,HERE ,FLATHEAD-OCEAN>
		                 <COND (,SHIP-GONE
			                <TELL "Nothing happens anymore." CR>)
			               (T
				        <TELL "Nothing happens yet." CR>)>)
				(T <TELL "Nothing happens here." CR>)>)
			(T
			 '<COND (<0? <MOD ,HS 20>>
				 <TELL
"You seem to be repeating yourself." CR>)
				(<0? <MOD ,HS 10>>
				 <TELL
"I think that phrase is getting a bit worn out." CR>)
				(T
				 <TELL "Nothing happens here." CR>)>)>)>>

<OBJECT GROUND
	(IN GLOBAL-OBJECTS)
	(SYNONYM GROUND SAND DIRT FLOOR)
	(DESC "ground")
	(ACTION GROUND-FUNCTION)>

<ROUTINE GROUND-FUNCTION ()
	 <COND (<AND <VERB? PUT PUT-ON>
		     <EQUAL? ,PRSI ,GROUND>>
		<PERFORM ,V?DROP ,PRSO>
		<RTRUE>)
	       %<COND (<==? ,ZORK-NUMBER 1>
		       '(<EQUAL? ,HERE ,SANDY-CAVE>
			 <SAND-FUNCTION>))
		      (T
		       '(<NULL-F>
			 <RFALSE>))>
	       (<VERB? DIG>
		<TELL "The ground is too hard for digging here." CR>)>>

<OBJECT GRUE
	(IN GLOBAL-OBJECTS)
	(SYNONYM GRUE)
	(ADJECTIVE LURKING SINISTER HUNGRY SILENT)
	(DESC "lurking grue")
	(ACTION GRUE-FUNCTION)>

<ROUTINE GRUE-FUNCTION ()
    <COND (<VERB? EXAMINE>
	   <TELL
"The grue is a sinister, lurking presence in the dark places of the
earth. Its favorite diet is adventurers, but its insatiable
appetite is tempered by its fear of light. No grue has ever been
seen by the light of day, and few have survived its fearsome jaws
to tell the tale." CR>)
	  (<VERB? FIND>
	   <TELL
"There is no grue here, but I'm sure there is at least one lurking
in the darkness nearby. I wouldn't let my light go out if I were
you!" CR>)
	  (<VERB? LISTEN>
	   <TELL
"It makes no sound but is always lurking in the darkness nearby." CR>)>>

<OBJECT LUNGS
	(IN GLOBAL-OBJECTS)
	(SYNONYM LUNGS AIR MOUTH BREATH)
	(DESC "blast of air")
	(FLAGS NDESCBIT)>

<OBJECT ME
	(IN GLOBAL-OBJECTS)
	(SYNONYM ME MYSELF SELF CRETIN)
	(DESC "you")
	(FLAGS ACTORBIT)
	(ACTION CRETIN-FCN)>

<ROUTINE CRETIN-FCN ()
	 <COND (<VERB? TELL>
		<SETG P-CONT <>>
		<SETG QUOTE-FLAG <>>
		<TELL
"Talking to yourself is said to be a sign of impending mental collapse." CR>)
	       (<AND <VERB? GIVE>
		     <EQUAL? ,PRSI ,ME>>
		<PERFORM ,V?TAKE ,PRSO>
		<RTRUE>)
	       (<VERB? MAKE>
		<TELL "Only you can do that." CR>)
	       (<VERB? DISEMBARK>
		<TELL "You'll have to do that on your own." CR>)
	       (<VERB? EAT>
		<TELL "Auto-cannibalism is not the answer." CR>)
	       (<VERB? ATTACK MUNG>
		<COND (<AND ,PRSI <FSET? ,PRSI ,WEAPONBIT>>
		       <JIGS-UP "If you insist.... Poof, you're dead!">)
		      (T
		       <TELL "Suicide is not the answer." CR>)>)
	       (<VERB? THROW>
		<COND (<==? ,PRSO ,ME>
		       <TELL
"Why don't you just walk like normal people?" CR>)>)
	       (<VERB? TAKE>
		<TELL "How romantic!" CR>)
	       (<VERB? EXAMINE>
		<COND %<COND (<==? ,ZORK-NUMBER 1>
			      '(<EQUAL? ,HERE <LOC ,MIRROR-1> <LOC ,MIRROR-2>>
		                <TELL
"Your image in the mirror looks tired." CR>))
			     (<==? ,ZORK-NUMBER 3>
			      '(,INVIS
				<TELL
"A good trick, as you are currently invisible." CR>))
			     (T
			      '(<NULL-F> <RTRUE>))>
		      (T
		       %<COND (<==? ,ZORK-NUMBER 3>
			       '<TELL
"What you can see looks pretty much as usual, sorry to say." CR>)
			      (ELSE
			       '<TELL
"That's difficult unless your eyes are prehensile." CR>)>)>)>>

<OBJECT ADVENTURER
	(SYNONYM ADVENTURER)
	(DESC "cretin")
	(FLAGS NDESCBIT INVISIBLE SACREDBIT ACTORBIT)
	(STRENGTH 0)
	(ACTION 0)>

<OBJECT PATHOBJ
	(IN GLOBAL-OBJECTS)
	(SYNONYM TRAIL PATH)
        (ADJECTIVE FOREST NARROW LONG WINDING)
	(DESC "passage")
	(FLAGS NDESCBIT)
	(ACTION PATH-OBJECT)>

<ROUTINE PATH-OBJECT ()
	 <COND (<VERB? TAKE FOLLOW>
		<TELL "You must specify a direction to go." CR>)
	       (<VERB? FIND>
		<TELL "I can't help you there...." CR>)
	       (<VERB? DIG>
		<TELL "Not a chance." CR>)>>

<OBJECT ZORKMID
	(IN GLOBAL-OBJECTS)
	(SYNONYM ZORKMID)
	(DESC "zorkmid")
	(ACTION ZORKMID-FUNCTION)>

<ROUTINE ZORKMID-FUNCTION ()
    <COND (<VERB? EXAMINE>
	   <TELL
"The zorkmid is the unit of currency of the Great Underground Empire." CR>)
	  (<VERB? FIND>
	   <TELL
"The best way to find zorkmids is to go out and look for them." CR>)>>

<OBJECT HANDS
	(IN GLOBAL-OBJECTS)
	(SYNONYM PAIR HANDS HAND)
	(ADJECTIVE BARE)
	(DESC "pair of hands")
	(FLAGS NDESCBIT TOOLBIT)>
```
