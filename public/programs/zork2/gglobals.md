---
title: "gglobals.zil"
program: "Zork II"
program_slug: "zork2"
file_path: "gglobals.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork2/blob/master/gglobals.zil"
year: 1981
author: "Blank, Lebling, Daniels, Anderson"
slug: "gglobals"
order: 3
description: "Shared objects every Zork needs: the object-tree roots, pronouns, the 'not here' reply, the grue, the zorkmid and the player."

summary:
  - point: "A handful of special objects make the parser's special cases ordinary game objects"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"
  - point: "Objects shared by all three Zorks are defined once here with per-game conditionals"
    link: "https://en.wikipedia.org/wiki/Zork_II"
    link_label: "Zork II"
  - point: "The 'cretin' who is the player gets his own action routine for talking to himself and worse"
    link: "https://en.wikipedia.org/wiki/Zork_II"
    link_label: "Zork II"

enhancements:
  - id: "tree-roots"
    line_start: 7
    line_end: 29
    title: "The Roots of the Object Tree"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "In the Z-machine every thing is an object in a tree. GLOBAL-OBJECTS is a root whose FLAGS list names the attributes the game uses, which is how they come to be declared. LOCAL-GLOBALS holds things that exist in several rooms at once, such as the sky or a river, and each room lists which of them it has. ROOMS is the root under which every room sits. A comment notes that a nonsense synonym on LOCAL-GLOBALS 'needs to exist... sigh', without saying why."
  - id: "special-objects"
    line_start: 31
    line_end: 50
    title: "Pronouns and Numbers as Objects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "The parser needs to hand a noun to the game, and it can only do so with an object. So the number a player typed, the pronoun 'it', 'them', 'her' or 'him', and the case of an object that is not present are each represented by an ordinary object in GLOBAL-OBJECTS. INTNUM is the number the parser found in the input. IT lists four pronoun words as synonyms, which is why MAIN-LOOP can replace it afterward by looking for this one object. PSEUDO-OBJECT stands in for scenery words that a room defines only in a PSEUDO property, and NOT-HERE-OBJECT stands for something the player named that is not in scope. Treating these as objects keeps the parser and main loop free of special cases."
  - id: "not-here-object"
    line_start: 52
    line_end: 74
    title: "The Reply to an Absent Noun"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "When a player names something that is not nearby, the parser gives PRSO or PRSI the value NOT-HERE-OBJECT, and PERFORM calls this routine before any other handler. If both are absent it says that 'those things' are not here. Otherwise it works out which of the two is missing, clears any pending continuation of the command line, and prints that the player can not see any such thing, passing it through NOT-HERE-PRINT to echo the player's own words back. When the speaker is another character, the reply is turned into dialogue in which the character seems confused. The echo is why the game says 'You can't see any lantern here!' with exactly the word you used. A comment marks the cond as the game-independent part, with only the TELL strings to be changed for another game."
  - id: "find-not-here"
    line_start: 76
    line_end: 107
    title: "Code That Was Switched Off"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "Both of these routines are commented out with a leading semicolon. FIND-NOT-HERE was a hook for special cases: it would search the whole game for an object matching the typed words, called a moby search, and, if exactly one was found, quietly use it, so that a command about a faraway but unique object could proceed. GLOBAL-NOT-HERE-PRINT was a variant of the reply. They remain in the 'canonical' snapshot as the repository's note says, a reminder that the archive is a working directory with abandoned ideas still in it, not a clean release. Moby is old MIT slang for 'huge', here meaning 'the whole universe of objects'."
  - id: "sailor"
    line_start: 148
    line_end: 195
    title: "The Sailor and Conditional Compilation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The sailor is a global object that exists only so the player can say hello to him. In Zork II the routine answers 'There is no sailor to be seen' and, to hello, counts repeated greetings in the global HS and scolds the player once the count is a multiple of 10 or 20. The percent-sign forms are compile-time conditionals: only the Zork III version contains the scene in which a Viking ship appears and the sailor tosses the player a vial. The same routine therefore compiles to different code in each game. This is the shared-library approach in miniature, and it shows how an easter egg from one game could be preserved in the others as a harmless in-joke."
  - id: "grue"
    line_start: 217
    line_end: 239
    title: "The Grue Gets a Definition"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The grue is a monster that exists in the dark and eats adventurers, and it has never been seen. Its object lives in GLOBAL-OBJECTS, so the word works everywhere. Examining it gives a short natural-history entry; asking to find it advises against letting the light go out; listening gives a reply that it is always nearby. The grue was a Zork invention and a running joke of the series, a sign that the authors treated the fear of darkness as a rule of the game world. What happens to a player in the dark is decided elsewhere, using the lighting test in gparser, but the object here gives the creature a personality."
  - id: "cretin"
    line_start: 254
    line_end: 305
    title: "Talking to Yourself"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "ME is the player as an object the player can type, with the synonyms 'me', 'myself', 'self' and 'cretin'. CRETIN-FCN answers a long list of verbs: telling yourself something gets a remark about mental collapse, eating yourself is 'not the answer', attacking yourself with a weapon kills you through JIGS-UP, and merely examining yourself depends on the game, so that Zork I mentions a mirror and Zork III invisibility. Giving something to yourself is quietly turned into taking it. ADVENTURER, a separate invisible actor object, also has the description 'cretin'. The routine is a short course in Infocom's sense of humour: every unlikely verb gets a specific reply."
  - id: "path-zorkmid-hands"
    line_start: 307
    line_end: 342
    title: "Path, Zorkmid and Hands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The remaining objects are small. PATHOBJ lets the player refer to a trail and be told that a direction must be given. ZORKMID has an examine reply that names it as the currency of the Great Underground Empire, and a find reply that tells the player to go looking. HANDS is the 'pair of hands' that GWIM refers to when it announces that a command is being done with your hands, flagged as a tool so it satisfies commands asking for one. They show how the world model handled abstractions: turn them into objects with descriptions."
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
