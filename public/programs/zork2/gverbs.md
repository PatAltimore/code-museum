---
title: "gverbs.zil"
program: "Zork II"
program_slug: "zork2"
file_path: "gverbs.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork2/blob/master/gverbs.zil"
year: 1981
author: "Blank, Lebling, Daniels, Anderson"
slug: "gverbs"
order: 6
description: "The default verb routines: what taking, opening, putting, walking and looking actually do, plus room descriptions, scoring and carrying."

summary:
  - point: "Each verb routine is a default that objects and rooms can override before it runs"
    link: "https://en.wikipedia.org/wiki/Zork_II"
    link_label: "Zork II"
  - point: "Zork II's spell system lives in a few conditional branches of the shared verbs"
    link: "https://en.wikipedia.org/wiki/Zork_II"
    link_label: "Zork II"
  - point: "Walking, lighting and room description are built from the object tree and a few flag bits"
    link: "https://en.wikipedia.org/wiki/Grue_(monster)"
    link_label: "Grue"

enhancements:
  - id: "header-and-modes"
    line_start: 1
    line_end: 31
    title: "Brief, Verbose and Inventory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The header dates the generic verbs file to 25 July 1983 and credits the initials SEM. Two global switches decide how much a room description repeats: VERBOSE always prints the full text and SUPER-BRIEF prints only the room name. The three tiny verbs that set them confirm with a reply, and BRIEF, the usual default, prints the full text only on a first visit. GDECL tells the MDL type checker that the globals are either atoms or false. V-INVENTORY is two lines: if the player's object has a first child it hands the player to PRINT-CONT, the same routine that lists a room's contents, and otherwise says that you are empty-handed. Reusing one listing routine for rooms, containers and the inventory is why all three read alike."
  - id: "end-of-game"
    line_start: 33
    line_end: 82
    title: "FINISH, QUIT, RESTART, RESTORE and SAVE"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "FINISH is the prompt shown after the player dies: it prints the score, then loops asking whether to RESTART, RESTORE or QUIT, reading a line directly with READ and testing only the first word. RESTART and RESTORE are Z-machine instructions, and the code after each prints 'Failed.' because control only returns if the instruction did not work. V-QUIT and V-RESTART ask for a yes with the YES? helper before acting, so a mistyped command can not end the session. V-SAVE and V-RESTORE call the interpreter's save and restore, so the mechanics of writing a saved position were each platform's own business. Handing these jobs to the Z-machine is why the same story file could save its state on dozens of different computers."
  - id: "script-and-version"
    line_start: 86
    line_end: 121
    title: "Transcripts and the Version Banner"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "SCRIPT turns on the transcript by setting the low bit of a flags word in the story file's header; the interpreter notices and copies output to the printer. UNSCRIPT clears it. V-VERSION prints a banner whose text is chosen at compile time by ZORK-NUMBER, so each game carries its own title and copyright years; for Zork II the banner runs from 1981 to 1986. The release number is read from the header word and masked to its low eleven bits, and the six-character serial number is printed byte by byte from header offsets 18 to 23. The serial number is a date stamp that records when the story file was built, which is how players and later archivists distinguish one release of the same game from another."
  - id: "testing-verbs"
    line_start: 123
    line_end: 147
    title: "Verifying the Disk and Recording a Session"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "V-VERIFY calls the interpreter's VERIFY instruction, which checks the story file against a checksum, and prints 'The disk is correct' or a failure message. It was a tool for finding corrupted floppies. V-COMMAND-FILE, V-RECORD and V-UNRECORD switch the interpreter's input and output streams: DIRIN 1 reads commands from a file, and DIROUT 4 starts a record of the player's commands. With the repository's zork2.record file, these verbs suggest how testers replayed whole playthroughs against a new build. V-RANDOM takes a number and calls RANDOM with its negative, which seeds the random generator so that a test run can be repeated exactly. Together they are a small testing harness shipped inside the game."
  - id: "attack"
    line_start: 195
    line_end: 212
    title: "V-ATTACK: Layers of Refusal"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "V-ATTACK works through a sequence of reasons the attack can not happen, each with its own sarcastic reply. If the target is not a creature, the reply is the sort of remark an exasperated friend would make. With no weapon, or with HANDS, bare-handed fighting is declared suicidal. A weapon the player is not holding draws a correction, and one without WEAPONBIT is declared a poor choice. Only if everything checks out does the final branch run, and in Zork I that calls the combat engine; in this game it just says that the player can not. Whatever fighting Zork II has is not handled here, so this verb mostly exists to produce good refusals."
  - id: "disenchant"
    line_start: 453
    line_end: 486
    title: "Undoing a Spell"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "The branch for Zork II tests SPELL-USED, the last spell word cast, against three groups of F-words. Each group has its own recovery message: the creature is stronger after FEEBLE, no longer clumsy after FUMBLE, no longer afraid after FEAR, and moves again after FREEZE, stops swaying after FERMENT and appears more peaceful after FIERCE. FLOAT lowers the object to the ground and FUDGE ends the sweet smell. The routine returns early if the target is not in the room. The spells belong to the wand. The other two games do not have spells, so they compile the plain reply 'Nothing happens.'"
  - id: "eat-and-drink"
    line_start: 502
    line_end: 535
    title: "V-EAT: Food, Drink and Their Preconditions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "EAT and DRINK share one routine because both consume something. A FOODBIT object must be held by the player or in something the player holds; eating it removes it, and a request to DRINK a solid is refused. A DRINKBIT object is handled in a longer chain: the water must be reachable, the container must be held, and a closed container must be opened first. Water in the global environment counts as available if the room provides it, and the routine HIT-SPOT handles the reply. The ordering of the checks gives each failure a specific message, so the player is told exactly what to fix rather than just that the command failed. The final test catches things that are neither food nor drink with a quip."
  - id: "enchant"
    line_start: 569
    line_end: 637
    title: "ENCHANT: What a Spell Does"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "In Zork II this routine is the effect table for the wand's spells. If the wand was waiting on an object, that object becomes the SPELL-VICTIM. Without a named spell the game asks for more specificity. Then each spell word has its own result. The first group of F-words produces only a vague message here. FUDGE fills the room with the smell of chocolate. FLUORESCE makes the object glow, setting both LIGHTBIT and ONBIT and updating LIT so a dark room becomes lit. FILCH moves a takeable object into the player's hands from a distance. FLOAT raises it into the air, with a special case that treats Cerberus's collar as Cerberus himself, and FRY burns it up. Anything else dissolves the spell. REMOVE-CAREFULLY at the end does the removal safely: it clears the pronoun if the object was the last one mentioned, and recomputes the light so the player is told 'You are left in the dark' if the object was the room's lamp."
  - id: "incant"
    line_start: 769
    line_end: 788
    title: "INCANT: Casting by Word"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "INCANT is how the player speaks a spell, and its behaviour depends on the game. In Zork II, if a spell is already active, nothing happens. If the player holds the wand pointed at something, the routine records the target, copies the word that followed INCANT out of the lexical table, announces that the wand glows very brightly and queues the I-SPELL event for 11 to 20 turns later, presumably the point at which the spell wears off. It then performs ENCHANT on the victim so the effect begins immediately. The line that reads the next word from P-LEXV at the continuation pointer is a reminder that the parser stops at the verb, leaving the spell word for the verb's own routine to pick up. The other two games echo faintly and do nothing."
  - id: "lamp-switches"
    line_start: 815
    line_end: 846
    title: "Lamp On, Lamp Off"
    wikipedia_url: "https://en.wikipedia.org/wiki/Grue_(monster)"
    image_url: ""
    image_caption: ""
    content: "V-LAMP-ON and V-LAMP-OFF toggle ONBIT on anything with LIGHTBIT. After either, they recompute the global LIT with LIT?, and turning a lamp off in an otherwise dark room prints 'It is now pitch black.' Turning one on so that a dark room becomes lit runs V-LOOK at once, so the player sees what the light reveals. An object that burns but is not a lamp draws a hint that the player should say 'burn'. The small amount of code that these two routines hold is what makes light a resource in the game: every action the player takes in the dark depends on what happens here, and in GOTO and V-WALK below."
  - id: "odysseus"
    line_start: 989
    line_end: 1005
    title: "ODYSSEUS in a Game with No Cyclops"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "In Zork I, saying the name Odysseus in the cyclops room makes the cyclops flee, knocking down the wall; this routine holds that code behind a compile-time test for game number one. In Zork II the test fails and the fallback answers 'Wasn't he a sailor?' The code is a snapshot of how the trilogy was merged: a joke or solution from one game is kept in the shared library, harmless in the others. It also demonstrates how conditional compilation works in practice, since the Zork I branch exists as source in this file but not in the compiled Zork II story file."
  - id: "open"
    line_start: 1010
    line_end: 1038
    title: "V-OPEN: Doors, Containers and First Reveals"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "V-OPEN handles two kinds of thing. A container with non-zero capacity is opened by setting OPENBIT and TOUCHBIT. The reply depends on the contents: an empty or transparent container just says 'Opened.' A container holding exactly one untouched object whose FDESC property is set uses that object's first-description text, so the opening reveals the item in prose, and in every other case the reply is 'Opening the box reveals' followed by a list from PRINT-CONTENTS. A door only needs OPENBIT. Anything else gets 'You must tell me how to do that to' the object, which is a default for things that nobody gave an open action. The three-way reply is why opening a chest sometimes produces a paragraph and sometimes a list."
  - id: "put"
    line_start: 1119
    line_end: 1158
    title: "PRE-PUT and V-PUT: The Container Rules"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "PRE-PUT first lets a game-specific exception through, then falls through to PRE-GIVE, which makes sure the player holds the object. V-PUT then checks the target in order: it must be open or openable or a vehicle, and it must be open now; it can not be put into itself or into the thing it is already in; and the total weight of the contents plus the new object, minus the container's own size, must not exceed its capacity, or the reply is 'There's no room.' If the player does not hold the object, the routine tries to pick it up first. When all of that passes, MOVE puts the object in the container, TOUCHBIT is set, and SCORE-OBJ awards any treasure points for the placement. The reply is simply 'Done.' The arithmetic makes the trophy case and the sack behave as real containers rather than as labels."
  - id: "shake"
    line_start: 1257
    line_end: 1311
    title: "SHAKE and Spilling Contents"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "Shaking something that is alive has no effect, and shaking something that can not be taken fails with a rule of logic. A closed container yields a rattle if it has contents and 'sounds empty' otherwise. An open container empties: SHAKE-LOOP moves each item out and marks it touched. Where it lands depends on the game. In Zork II water goes to the pseudo-object and so does everything if the room has no solid floor, so the objects fall away; otherwise the contents drop to the floor. The text then says they 'spill out and disappear' or 'to the ground'. The loop is a good example of the engine's tree operations: FIRST? returns a child, MOVE reparents it, and the loop stops when there are no children left."
  - id: "take"
    line_start: 1397
    line_end: 1431
    title: "PRE-TAKE and V-TAKE"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "PRE-TAKE catches the cases where taking makes no sense before the real work starts: the player already holds it or is wearing it, it sits inside a closed container, it is in a container other than the one named in 'take x from y', or the player is inside it. A special case waives the 'from' check for the Zork II door keeper. When the pre-action returns false, V-TAKE calls ITAKE and prints 'Taken.' or, for wearable items, that you are now wearing the object. The split between a pre-action that screens bad requests and a main routine that acts is the pattern for most verbs in the file, and it keeps each routine short enough to read."
  - id: "wait"
    line_start: 1558
    line_end: 1563
    title: "V-WAIT: Passing Time on Purpose"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "WAIT is the one verb whose whole job is to let the clock run. It prints 'Time passes...' and calls CLOCKER up to three times, stopping early if any event printed something, since a monster's arrival should interrupt a nap. At the end it sets CLOCK-WAIT so the main loop's own call to CLOCKER is skipped for this turn, which keeps the player from getting a fourth tick for free. The optional argument NUM defaults to three; other callers can wait for a different number of turns. It is the reason CLOCKER returns whether anything happened, as described in gclock."
  - id: "walk"
    line_start: 1565
    line_end: 1625
    title: "V-WALK: Reading an Exit"
    wikipedia_url: "https://en.wikipedia.org/wiki/Grue_(monster)"
    image_url: ""
    image_caption: ""
    content: "Every room property for a direction is an exit, and V-WALK tells its kind by the length of the property: PTSIZE of one means an unconditional exit to a room, two a blocked exit with a message, three a function exit that decides at run time, four a conditional exit tied to a global flag, and five a door exit that requires an object to be open. The constants at the end of the file name the sizes. If there is no exit at all and the player is in the dark, there is an 80 percent chance of a grue: with a repellent sprayed the player merely hears odd noises, and without it the player is eaten. Otherwise the player is told they can not go that way. The first test hands a non-direction target to WALK-TO. The use of property length as a type tag is the sort of compact encoding the Z-machine's limited data model encourages."
  - id: "describe-room"
    line_start: 1679
    line_end: 1723
    title: "DESCRIBE-ROOM: What You See When You Arrive"
    wikipedia_url: "https://en.wikipedia.org/wiki/Grue_(monster)"
    image_url: ""
    image_caption: ""
    content: "DESCRIBE-ROOM decides how much to say. In the dark it prints 'It is pitch black.' and, unless the player has sprayed a repellent, 'You are likely to be eaten by a grue.' Otherwise a first visit forces the full text by setting TOUCHBIT and making the description verbose. It prints the room's name, with the vehicle if the player is in one. Then it asks the room's action routine to handle M-LOOK; if that returns true the room has printed its own description. If not, a verbose description prints the room's LDESC property and a brief one runs M-FLASH. In Zork II a special case prints the description even in superbrief mode in the room ZORK3. A vehicle's own M-LOOK is called last. The design lets rooms override everything with code while the common rooms need only a string."
  - id: "describe-object"
    line_start: 1737
    line_end: 1772
    title: "DESCRIBE-OBJECT: Listing Things in the Room"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "Top-level objects first offer their DESCFCN property the M-OBJDESC message. If the function declines, an untouched object uses its first-description FDESC, an object that has been moved uses its LDESC, and a default prints 'There is a lamp here', with '(providing light)' if it is on. Nested objects use the INDENTS table to indent each level, and say '(being worn)' for clothing. The Zork II branch adds '(floating in midair)' for something under the FLOAT spell. A final test appends '(outside the boat)' when the player is in a vehicle, and then, if the object is a container whose contents can be seen, the routine recurses through PRINT-CONT. FDESC lets an object announce itself in prose until the player first moves it."
  - id: "scoring"
    line_start: 1887
    line_end: 1914
    title: "Scoring by Touching Things"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "SCORE-UPD adds to both SCORE and BASE-SCORE, and in Zork I announces the final secret when the score reaches 350. SCORE-OBJ reads an object's VALUE property, adds it to the score and then zeroes the property so that the same treasure can not be scored twice. This is called whenever the player takes or places something and, as GOTO shows, when the player first enters a room, because rooms can have a VALUE too. Because the points live in the objects, a designer sets the score of a treasure by editing its definition and the total score emerges from the dungeon."
  - id: "itake"
    line_start: 1944
    line_end: 2008
    title: "ITAKE: Everything That Can Stop You Taking Something"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "ITAKE is the single place where taking is decided, and the checks run in a careful order. A thing without TAKEBIT draws a random reply from the YUKS table, chosen by PICK-ONE so that it does not repeat. In Zork II an object under the FLOAT or FREEZE spell can not be reached. An object in a closed container fails silently, a kludge the comment says exists because the parser also calls this routine. A weight check compares the object plus the player's current load against LOAD-ALLOWED and adds 'especially in light of your condition' when the limit has been lowered by injury. Then comes the fumble rule: when the player already holds more than seven items, each take fails with a probability of eight percent times the number held, which is 64 percent at eight items. If all is well, the object moves to the player, loses NDESCBIT, gains TOUCHBIT, and may be spirited away by the FILCH spell before SCORE-OBJ credits any points. The fumble rule is the game's way of enforcing a soft inventory limit without a visible number."
  - id: "weight"
    line_start: 2023
    line_end: 2041
    title: "CCOUNT and WEIGHT"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "CCOUNT counts the children of an object that are not worn, which is the number used in the fumble rule. WEIGHT adds an object's SIZE property to the weight of everything inside it, recursing through containers, with one twist: worn items count as a single unit when the owner is the player, so wearing a heavy cloak does not slow the player down. Together they define the economy of carrying in the game: heavy things matter, many small things also matter, and wearing something is nearly free. Both are written as loops over FIRST? and NEXT?, the same tree-walking pattern as everywhere else."
  - id: "exit-constants"
    line_start: 2045
    line_end: 2066
    title: "Exit Kinds and Indentation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "These constants give names to the exit-property layouts used by V-WALK. The numbers 0 to 5 are offsets and sizes: REXIT is where the destination room is stored, and UEXIT, NEXIT, FEXIT, CEXIT and DEXIT are the sizes of the five kinds of exit property. The following constants give the position of the message, function, flag or door object within each. INDENTS is a table of strings of increasing width, used by DESCRIBE-OBJECT to indent nested contents. Making it a pure table puts it in read-only memory, which in the Z-machine means it need not be saved with a game."
  - id: "goto"
    line_start: 2089
    line_end: 2181
    title: "GOTO: Moving the Player"
    wikipedia_url: "https://en.wikipedia.org/wiki/Grue_(monster)"
    image_url: ""
    image_caption: ""
    content: "GOTO is where the player actually changes rooms. It first checks that the destination is reachable: a land room is fine on foot, but a vehicle must be allowed in the destination, and a room marked RMUNGBIT instead prints its own description and refuses. If the player was in a vehicle that enters dry land, the vehicle announces that it comes to a rest. The player, or the vehicle with the player in it, is moved, HERE is updated and light is recomputed. Moving from one dark place into another has an 80 percent chance of a grue eating the player, with a different message if a repellent has been sprayed. Then the room gets M-ENTER, the room's VALUE is scored for a first visit, and V-FIRST-LOOK describes the room. If another actor rather than the player has moved, the message that they left the room appears. Because the grue test needs the player to have been in the dark already, one step into darkness is survivable but the second is not."
---

```lisp
 			"Generic VERBS file for
			    The ZORK Trilogy
		       started on 7/25/83 by SEM"

^L

"Verb Functions for Game Commands"

<GLOBAL VERBOSE <>>
<GLOBAL SUPER-BRIEF <>>
<GDECL (VERBOSE SUPER-BRIEF) <OR ATOM FALSE>>

<ROUTINE V-VERBOSE ()
	 <SETG VERBOSE T>
	 <SETG SUPER-BRIEF <>>
	 <TELL "Maximum verbosity." CR>>

<ROUTINE V-BRIEF ()
	 <SETG VERBOSE <>>
	 <SETG SUPER-BRIEF <>>
	 <TELL "Brief descriptions." CR>>

<ROUTINE V-SUPER-BRIEF ()
	 <SETG SUPER-BRIEF T>
	 <TELL "Superbrief descriptions." CR>>

;"V-DIAGNOSE is in ACTIONS.ZIL"

<ROUTINE V-INVENTORY ()
	 <COND (<FIRST? ,WINNER> <PRINT-CONT ,WINNER>)
	       (T <TELL "You are empty-handed." CR>)>>

<ROUTINE FINISH ("AUX" WRD)
	 <V-SCORE>
	 <REPEAT ()
		 <CRLF>
		 <TELL
"Would you like to restart the game from the beginning, restore a saved
game position, or end this session of the game?|
(Type RESTART, RESTORE, or QUIT):|
>">
		 <READ ,P-INBUF ,P-LEXV>
		 <SET WRD <GET ,P-LEXV 1>>
		 <COND (<EQUAL? .WRD ,W?RESTART>
			<RESTART>
			<TELL "Failed." CR>)
		       (<EQUAL? .WRD ,W?RESTORE>
			<COND (<RESTORE>
			       <TELL "Ok." CR>)
			      (T
			       <TELL "Failed." CR>)>)
		       (<EQUAL? .WRD ,W?QUIT ,W?Q>
			<QUIT>)>>>

<ROUTINE V-QUIT ("AUX" SCOR)
	 <V-SCORE>
	 <TELL 
"Do you wish to leave the game? (Y is affirmative): ">
	 <COND (<YES?>
		<QUIT>)
	       (ELSE <TELL "Ok." CR>)>>

<ROUTINE V-RESTART ()
	 <V-SCORE T>
	 <TELL "Do you wish to restart? (Y is affirmative): ">
	 <COND (<YES?>
		<TELL "Restarting." CR>
		<RESTART>
		<TELL "Failed." CR>)>>

<ROUTINE V-RESTORE ()
	 <COND (<RESTORE>
		<TELL "Ok." CR>
		<V-FIRST-LOOK>)
	       (T
		<TELL "Failed." CR>)>>

<ROUTINE V-SAVE ()
	 <COND (<SAVE>
	        <TELL "Ok." CR>)
	       (T
		<TELL "Failed." CR>)>>

;"V-SCORE is in ACTIONS.ZIL"

<ROUTINE V-SCRIPT ()
	<PUT 0 8 <BOR <GET 0 8> 1>>
	<TELL "Here begins a transcript of interaction with" CR>
	<V-VERSION>
	<RTRUE>>

<ROUTINE V-UNSCRIPT ()
	<TELL "Here ends a transcript of interaction with" CR>
	<V-VERSION>
	<PUT 0 8 <BAND <GET 0 8> -2>>
	<RTRUE>>

<ROUTINE V-VERSION ("AUX" (CNT 17))
	%<COND (<==? ,ZORK-NUMBER 1>
		'<TELL "ZORK I: The Great Underground Empire|
Infocom interactive fiction - a fantasy story|
Copyright (c) 1981, 1982, 1983, 1984, 1985, 1986">)
	       (<==? ,ZORK-NUMBER 2>
		'<TELL "ZORK II: The Wizard of Frobozz|
Infocom interactive fiction - a fantasy story|
Copyright (c) 1981, 1982, 1983, 1986">)
	       (<==? ,ZORK-NUMBER 3>
		'<TELL "ZORK III: The Dungeon Master|
Infocom interactive fiction - a fantasy story|
Copyright 1982, 1983, 1984, 1986">)>
	<TELL " Infocom, Inc. All rights reserved." CR>
	<TELL "ZORK is a registered trademark of Infocom, Inc.|
Release ">
	<PRINTN <BAND <GET 0 1> *3777*>>
	<TELL " / Serial number ">
	<REPEAT ()
		<COND (<G? <SET CNT <+ .CNT 1>> 23>
		       <RETURN>)
		      (T
		       <PRINTC <GETB 0 .CNT>>)>>
	<CRLF>>

<ROUTINE V-VERIFY ()
	 <TELL "Verifying disk..." CR>
	 <COND (<VERIFY>
		<TELL "The disk is correct." CR>)
	       (T
		<TELL CR "** Disk Failure **" CR>)>>

<ROUTINE V-COMMAND-FILE ()
	 <DIRIN 1>
	 <RTRUE>>

<ROUTINE V-RANDOM ()
	 <COND (<NOT <EQUAL? ,PRSO ,INTNUM>>
		<TELL "Illegal call to #RND." CR>)
	       (T
		<RANDOM <- 0 ,P-NUMBER>>
		<RTRUE>)>>

<ROUTINE V-RECORD ()
	 <DIROUT 4>
	 <RTRUE>>

<ROUTINE V-UNRECORD ()
	 <DIROUT -4>
	 <RTRUE>>

^L

"Real Verb Functions"

<ROUTINE V-ADVENT ()
	 <TELL "A hollow voice says \"Fool.\"" CR>>

;<ROUTINE V-AGAIN ("AUX" (OBJ <>))
	 <COND (<EQUAL? ,L-PRSA ,V?WALK>
		<DO-WALK ,L-PRSO>)
	       (T
		<COND (,L-PRSO
		       <COND (<OR <NOT <LOC ,L-PRSO>>
				  <FSET? ,L-PRSO ,INVISIBLE>>
			      <SET OBJ ,L-PRSO>)>)>
		<COND (,L-PRSI
		       <COND (<OR <NOT <LOC ,L-PRSI>>
				  <FSET? ,L-PRSI ,INVISIBLE>>
			      <SET OBJ ,L-PRSI>)>)>
		<COND (<AND .OBJ 
			    <NOT <EQUAL? .OBJ ,PSEUDO-OBJECT ,ROOMS>>>
		       <TELL "You can't see the " D .OBJ " anymore." CR>
		       <RFATAL>)
		      (T
		       <PERFORM ,L-PRSA ,L-PRSO ,L-PRSI>)>)>>

<ROUTINE V-ALARM ()
	 <COND (<FSET? ,PRSO ,ACTORBIT>
		<COND %<COND (<==? ,ZORK-NUMBER 1>
			      '(<L? <GETP ,PRSO ,P?STRENGTH> 0>
		                <TELL "The " D ,PRSO " is rudely awakened." CR>
		                <AWAKEN ,PRSO>))
			     (T
			      '(<NULL-F> <RTRUE>))>
		      (T
		       <TELL
"He's wide awake, or haven't you noticed..." CR>)>)
	       (T
		<TELL "The " D ,PRSO " isn't sleeping." CR>)>>

<ROUTINE V-ANSWER ()
	 <TELL "Nobody seems to be awaiting your answer." CR>
	 <SETG P-CONT <>>
	 <SETG QUOTE-FLAG <>>
	 <RTRUE>>

<ROUTINE V-ATTACK ()
	 <COND (<NOT <FSET? ,PRSO ,ACTORBIT>>
		<TELL
"I've known strange people, but fighting a " D ,PRSO "?" CR>)
	       (<OR <NOT ,PRSI>
		    <EQUAL? ,PRSI ,HANDS>>
		<TELL
"Trying to attack a " D ,PRSO " with your bare hands is suicidal." CR>)
	       (<NOT <IN? ,PRSI ,WINNER>>
		<TELL "You aren't even holding the " D ,PRSI "." CR>)
	       (<NOT <FSET? ,PRSI ,WEAPONBIT>>
		<TELL
"Trying to attack the " D ,PRSO " with a " D ,PRSI " is suicidal." CR>)
	       (T
	        %<COND (<==? ,ZORK-NUMBER 1>
			'<HERO-BLOW>)
		       (T
			'<TELL "You can't." CR>)>)>>

<ROUTINE V-BACK ()
	 <TELL "Sorry, my memory is poor. Please give a direction." CR>>

<ROUTINE V-BLAST ()
	 <TELL "You can't blast anything by using words." CR>>

<ROUTINE PRE-BOARD ("AUX" AV)
	 <SET AV <LOC ,WINNER>>
	 <COND %<COND (<==? ,ZORK-NUMBER 3>
		       '(<EQUAL? ,PRSO ,WATER-CHANNEL ,TM-SEAT ,LAKE>
		         <RFALSE>))
		      (T
		       '(<NULL-F> <RTRUE>))>
	       (<FSET? ,PRSO ,VEHBIT>
		<COND (<NOT <IN? ,PRSO ,HERE>>
		       <TELL
"The " D ,PRSO " must be on the ground to be boarded." CR>)
		      (<FSET? .AV ,VEHBIT>
		       <TELL "You are already in the " D .AV "!" CR>)
		      (T
		       <RFALSE>)>)
	       (<EQUAL? ,PRSO ,WATER ,GLOBAL-WATER>
		<PERFORM ,V?SWIM ,PRSO>
		<RTRUE>)
	       (T
		<TELL
"You have a theory on how to board a " D ,PRSO ", perhaps?" CR>)>
	 <RFATAL>>

<ROUTINE V-BOARD ("AUX" AV)
	 <TELL "You are now in the " D ,PRSO "." CR>
	 <MOVE ,WINNER ,PRSO>
	 <APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>
	 <RTRUE>>

<ROUTINE V-BREATHE ()
	 <PERFORM ,V?INFLATE ,PRSO ,LUNGS>>

<ROUTINE V-BRUSH ()
	 <TELL "If you wish, but heaven only knows why." CR>>

<ROUTINE V-BUG ()
	 <TELL
"Bug? Not in a flawless program like this! (Cough, cough)." CR>>

<ROUTINE TELL-NO-PRSI ()
	 <TELL "You didn't say with what!" CR>>

<ROUTINE PRE-BURN ()
	 <COND (<NOT ,PRSI>
		<TELL-NO-PRSI>)
	       (<FLAMING? ,PRSI>
	        <RFALSE>)
	       (T
	        <TELL "With a " D ,PRSI "??!?" CR>)>>

<ROUTINE V-BURN ()
	 <COND %<COND (<==? ,ZORK-NUMBER 2>
		       '(<EQUAL? <LOC ,PRSO> ,RECEPTACLE>
		         <BALLOON-BURN>
		         <RTRUE>))
		      (T
		       '(<NULL-F> <RFALSE>))>
	       (<FSET? ,PRSO ,BURNBIT>
		<COND (<OR <IN? ,PRSO ,WINNER>
			   <IN? ,WINNER ,PRSO>>
		       <REMOVE-CAREFULLY ,PRSO>
		       <TELL "The " D ,PRSO>
		       <TELL
" catches fire. Unfortunately, you were ">
		       <COND (<IN? ,WINNER ,PRSO>
			      <TELL "in">)
			     (T <TELL "holding">)>
		       <JIGS-UP " it at the time.">)
		      (T
		       <REMOVE-CAREFULLY ,PRSO>
		       <TELL
"The " D ,PRSO " catches fire and is consumed." CR>)>)
	       (T
		<TELL "You can't burn a " D ,PRSO "." CR>)>>

<ROUTINE V-CHOMP ()
	 <TELL "Preposterous!" CR>>

<ROUTINE V-CLIMB-DOWN () <V-CLIMB-UP ,P?DOWN ,PRSO>>

<ROUTINE V-CLIMB-FOO ()
	 %<COND (<==? ,ZORK-NUMBER 3>
		 '<V-CLIMB-UP <COND (<EQUAL? ,PRSO ,ROPE ,GLOBAL-ROPE>
				     ,P?DOWN)
				    (T ,P?UP)>
			      T>)
		(ELSE
		 '<V-CLIMB-UP ,P?UP ,PRSO>)>>

<ROUTINE V-CLIMB-ON ()
	 <COND (<FSET? ,PRSO ,VEHBIT>
		%<COND (<==? ,ZORK-NUMBER 3>
			'<V-CLIMB-UP ,P?UP T>)
		       (ELSE
			'<PERFORM ,V?BOARD ,PRSO>)>
		<RTRUE>)
	       (T
		<TELL "You can't climb onto the " D ,PRSO "." CR>)>>

<ROUTINE V-CLIMB-UP ("OPTIONAL" (DIR ,P?UP) (OBJ <>) "AUX" X TX)
	 <COND (<AND .OBJ <NOT <EQUAL? ,PRSO ,ROOMS>>>
		<SET OBJ ,PRSO>)>
	 <COND (<SET TX <GETPT ,HERE .DIR>>
		<COND (.OBJ
		       <SET X <PTSIZE .TX>>
		       <COND (<OR <EQUAL? .X ,NEXIT>
				  <AND <EQUAL? .X ,CEXIT ,DEXIT ,UEXIT>
				       <NOT <GLOBAL-IN? ,PRSO <GETB .TX 0>>>>>
			      <TELL "The " D .OBJ " do">
			      <COND (<NOT <EQUAL? .OBJ ,STAIRS>>
				     <TELL "es">)>
			      <TELL "n't lead ">
			      <COND (<==? .DIR ,P?UP>
				     <TELL "up">)
				    (T <TELL "down">)>
			      <TELL "ward." CR>
			      <RTRUE>)>)>
		<DO-WALK .DIR>
		<RTRUE>)
	       (<AND .OBJ
		     <ZMEMQ ,W?WALL
			    <SET X <GETPT ,PRSO ,P?SYNONYM>> <PTSIZE .X>>>
		<TELL "Climbing the walls is to no avail." CR>)
	       (%<COND (<==? ,ZORK-NUMBER 1>
			'<AND <NOT <EQUAL? ,HERE ,PATH>>
			      <EQUAL? .OBJ <> ,TREE>
			      <GLOBAL-IN? ,TREE ,HERE>>)
		       (ELSE '<NULL-F>)>
		<TELL "There are no climbable trees here." CR>
		<RTRUE>)
	       (<EQUAL? .OBJ <> ,ROOMS>
		<TELL "You can't go that way." CR>)
	       (T
	        <TELL "You can't do that!" CR>)>>

<ROUTINE V-CLOSE ()
	 <COND (<AND <NOT <FSET? ,PRSO ,CONTBIT>>
		     <NOT <FSET? ,PRSO ,DOORBIT>>>
		<TELL "You must tell me how to do that to a " D ,PRSO "." CR>)
	       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>
		     <NOT <EQUAL? <GETP ,PRSO ,P?CAPACITY> 0>>>
		<COND (<FSET? ,PRSO ,OPENBIT>
		       <FCLEAR ,PRSO ,OPENBIT>
		       <TELL "Closed." CR>
		       <COND (<AND ,LIT <NOT <SETG LIT <LIT? ,HERE>>>>
			      <TELL "It is now pitch black." CR>)>
		       <RTRUE>)
		      (T
	 	       <TELL "It is already closed." CR>)>)
	       (<FSET? ,PRSO ,DOORBIT>
		<COND (<FSET? ,PRSO ,OPENBIT>
		       <FCLEAR ,PRSO ,OPENBIT>
		       <TELL "The " D ,PRSO " is now closed." CR>)
		      (T
	 	       <TELL "It is already closed." CR>)>)
	       (T
		<TELL "You cannot close that." CR>)>>

<ROUTINE V-COMMAND ()
	 <COND (<FSET? ,PRSO ,ACTORBIT>
		<TELL "The " D ,PRSO " pays no attention." CR>)
	       (T
		<TELL "You cannot talk to that!" CR>)>>

<ROUTINE V-COUNT ()
	 <COND (<EQUAL? ,PRSO ,BLESSINGS>
	 	<TELL "Well, for one, you are playing Zork..." CR>)
	       (T
		<TELL "You have lost your mind." CR>)>>

<ROUTINE V-CROSS ()
	 <TELL "You can't cross that!" CR>>

<ROUTINE V-CURSES ()
	 <COND (,PRSO
		<COND (<FSET? ,PRSO ,ACTORBIT>
		       <TELL "Insults of this nature won't help you." CR>)
		      (T
		       <TELL "What a loony!" CR>)>)
	       (T
		<TELL
"Such language in a high-class establishment like this!" CR>)>>

<ROUTINE V-CUT ()
	 <COND (<FSET? ,PRSO ,ACTORBIT>
		<PERFORM ,V?ATTACK ,PRSO ,PRSI>)
	       (<AND <FSET? ,PRSO ,BURNBIT>
		     <FSET? ,PRSI ,WEAPONBIT>>
		<COND (<IN? ,WINNER ,PRSO>
		       <TELL
"Not a bright idea, especially since you're in it." CR>
		       <RTRUE>)>
		<REMOVE-CAREFULLY ,PRSO>
		<TELL "Your skillful " D ,PRSI "smanship slices the " D ,PRSO
" into innumerable slivers which blow away." CR>)
	       (<NOT <FSET? ,PRSI ,WEAPONBIT>>
		<TELL
"The \"cutting edge\" of a " D ,PRSI " is hardly adequate." CR>)
	       (T
		<TELL "Strange concept, cutting the " D ,PRSO "...." CR>)>>

<ROUTINE V-DEFLATE ()
	 <TELL "Come on, now!" CR>>

<ROUTINE V-DIG ()
	 <COND (<NOT ,PRSI>
		<SETG PRSI ,HANDS>)>
	 %<COND (<==? ,ZORK-NUMBER 1>
		 '<COND (<EQUAL? ,PRSI ,SHOVEL>
			 <TELL "There's no reason to be digging here." CR>
			 <RTRUE>)>)
		(ELSE T)>
	 <COND (<FSET? ,PRSI ,TOOLBIT>
		<TELL "Digging with the " D ,PRSI " is slow and tedious." CR>)
	       (T
		<TELL "Digging with a " D ,PRSI " is silly." CR>)>>

<ROUTINE V-DISEMBARK ()
	 <COND (<AND <EQUAL? ,PRSO ,ROOMS>
		     <FSET? <LOC ,WINNER> ,VEHBIT>>
		<PERFORM ,V?DISEMBARK <LOC ,WINNER>>
		<RTRUE>)
	       (<NOT <EQUAL? <LOC ,WINNER> ,PRSO>>
		<TELL "You're not in that!" CR>
		<RFATAL>)
	       (<FSET? ,HERE ,RLANDBIT>
		<TELL "You are on your own feet again." CR>
		<MOVE ,WINNER ,HERE>)
	       (T
		<TELL
"You realize that getting out here would be fatal." CR>
		<RFATAL>)>>

<ROUTINE V-DISENCHANT ()
	 %<COND (<==? ,ZORK-NUMBER 2>
		 '<COND (<NOT <IN? ,PRSO ,HERE>>
		         <RTRUE>)
	                (<OR <EQUAL? ,SPELL-USED ,W?FEEBLE ,W?FUMBLE ,W?FEAR>
		          <EQUAL? ,SPELL-USED ,W?FREEZE ,W?FALL ,W?FERMENT>
		          <EQUAL? ,SPELL-USED ,W?FIERCE ,W?FENCE ,W?FANTASIZE>>
		          <COND (<FSET? ,PRSO ,ACTORBIT>
		                 <COND (<EQUAL? ,SPELL-USED ,W?FEEBLE>
			                <TELL
"The " D ,PRSO " seems stronger now." CR>)
			               (<EQUAL? ,SPELL-USED ,W?FUMBLE>
			                <TELL
"The " D ,PRSO " no longer appears clumsy." CR>)
			               (<EQUAL? ,SPELL-USED ,W?FEAR>
			                <TELL
"The " D ,PRSO " no longer appears afraid." CR>)
			               (<EQUAL? ,SPELL-USED ,W?FREEZE>
			                <TELL
"The " D ,PRSO " moves again." CR>)
			               (<EQUAL? ,SPELL-USED ,W?FERMENT>
			                <TELL
"The " D ,PRSO " stops swaying." CR>)
			               (<EQUAL? ,SPELL-USED ,W?FIERCE>
			                <TELL
"The " D ,PRSO " appears more peaceful." CR>)>)>)
	                        (<EQUAL? ,SPELL-USED ,W?FLOAT>
		                 <TELL
"The " D ,PRSO " sinks to the ground." CR>)
	                        (<EQUAL? ,SPELL-USED ,W?FUDGE>
		                 <TELL "The sweet smell has dispersed." CR>)>)
		(T
		 '<TELL "Nothing happens." CR>)>>

<ROUTINE V-DRINK ()
	 <V-EAT>>

<ROUTINE V-DRINK-FROM ()
	 <TELL "How peculiar!" CR>>

<ROUTINE PRE-DROP ()
	 <COND (<EQUAL? ,PRSO <LOC ,WINNER>>
		<PERFORM ,V?DISEMBARK ,PRSO>
		<RTRUE>)>>

<ROUTINE V-DROP ()
	 <COND (<IDROP>
		<TELL "Dropped." CR>)>>

<ROUTINE V-EAT ("AUX" (EAT? <>) (DRINK? <>) (NOBJ <>))
	 <COND (<SET EAT? <FSET? ,PRSO ,FOODBIT>>
		<COND (<AND <NOT <IN? ,PRSO ,WINNER>>
			    <NOT <IN? <LOC ,PRSO> ,WINNER>>>
		       <TELL "You're not holding that." CR>)
		      (<VERB? DRINK>
		       <TELL "How can you drink that?">)
		      (T
		       <TELL "Thank you very much. It really hit the spot.">
		       <REMOVE-CAREFULLY ,PRSO>)>
		<CRLF>)
	       (<FSET? ,PRSO ,DRINKBIT>
		<SET DRINK? T>
		<SET NOBJ <LOC ,PRSO>>
		<COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>
			   <GLOBAL-IN? ,GLOBAL-WATER ,HERE>
			   <EQUAL? ,PRSO ,PSEUDO-OBJECT>>
		       <HIT-SPOT>)
		      (<OR <NOT .NOBJ>
			   <NOT <ACCESSIBLE? .NOBJ>>>
		       <TELL
"There isn't any water here." CR>)
		      (<AND <ACCESSIBLE? .NOBJ>
			    <NOT <IN? .NOBJ ,WINNER>>>
		       <TELL
"You have to be holding the " D .NOBJ " first." CR>)
		      (<NOT <FSET? .NOBJ ,OPENBIT>>
		       <TELL
"You'll have to open the " D .NOBJ " first." CR>)
		      (T
		       <HIT-SPOT>)>)
	       (<NOT <OR .EAT? .DRINK?>>
		<TELL
"I don't think that the " D ,PRSO " would agree with you." CR>)>>

<ROUTINE HIT-SPOT ()
	 <COND (<AND <EQUAL? ,PRSO ,WATER>
		     <NOT <GLOBAL-IN? ,GLOBAL-WATER ,HERE>>>
		<REMOVE-CAREFULLY ,PRSO>)>
	 <TELL
"Thank you very much. I was rather thirsty (from all this talking,
probably)." CR>>

<ROUTINE V-ECHO ("AUX" LST MAX (ECH 0) CNT) 
	 #DECL ((LST) <PRIMTYPE VECTOR> (MAX CNT ECH) FIX)
	 %<COND (<==? ,ZORK-NUMBER 1>
		 '<COND (<G? <GETB ,P-LEXV ,P-LEXWORDS> 0>
	                 <SET LST <REST 
				   ,P-LEXV
				   <* <GETB ,P-LEXV ,P-LEXWORDS> ,P-WORDLEN>>>
	                 <SET MAX <- <+ <GETB .LST 0> <GETB .LST 1>> 1>>
	                 <REPEAT ()
		            <COND (<G? <SET ECH <+ .ECH 1>> 2>
			           <TELL "..." CR>
				   <RETURN>)
			          (T
			           <SET CNT <- <GETB .LST 1> 1>>
			           <REPEAT ()
				      <COND (<G? <SET CNT <+ .CNT 1>> .MAX>
					     <RETURN>)
					    (T
					     <PRINTC <GETB ,P-INBUF .CNT>>)>>
			           <TELL " ">)>>)
			(T <TELL "echo echo ..." CR>)>)
		(T
		 '<TELL "echo echo ..." CR>)>>

<ROUTINE V-ENCHANT ()
%<COND (<==? ,ZORK-NUMBER 2>
	'<COND (,WAND-ON <SETG SPELL-VICTIM ,WAND-ON>)>)
       (T
	'<NULL-F>)>
%<COND (<==? ,ZORK-NUMBER 2>
	'<COND (,SPELL-VICTIM
		<COND (<NOT ,SPELL-USED>
		       <TELL "You must be more specific." CR>
		       <RTRUE>)>
		<COND (<OR <EQUAL? ,SPELL-USED ,W?FEEBLE ,W?FUMBLE ,W?FEAR>
			   <EQUAL? ,SPELL-USED ,W?FREEZE ,W?FALL ,W?FERMENT>
			   <EQUAL? ,SPELL-USED ,W?FIERCE ,W?FENCE ,W?FANTASIZE>>
		       <COND (<FSET? ,PRSO ,ACTORBIT>
			      <TELL
"The wand stops glowing, but there is no other obvious effect." CR>)
			     (T
			      <TELL
"That might have done something, but it's hard to tell with a " D ,PRSO "." CR>)>)
		      ;(<EQUAL? ,SPELL-USED ,W?FIREPROOF>
		       <RTRUE>)
		      (<EQUAL? ,SPELL-USED ,W?FUDGE>
		       <TELL
"A strong odor of chocolate permeates the room." CR>)
		      (<EQUAL? ,SPELL-USED ,W?FLUORESCE>
		       <FSET ,PRSO ,LIGHTBIT>
		       <FSET ,PRSO ,ONBIT>
		       <SETG LIT T>
		       <TELL
"The " D ,PRSO " begins to glow." CR>)
		      (<EQUAL? ,SPELL-USED ,W?FILCH>
		       <SETG SPELL-HANDLED? T>
		       <COND (<FSET? ,PRSO ,TAKEBIT>
			      <MOVE ,PRSO ,WINNER>
			      <SCORE-OBJ ,PRSO>
			      <TELL "Filched!" CR>)
			     (ELSE
			      <TELL "You can't filch the " D ,PRSO "!" CR>)>)
		      (<AND <EQUAL? ,SPELL-USED ,W?FLOAT>
			    <FSET? ,PRSO ,TAKEBIT>>
		       <COND (<AND <EQUAL? ,SPELL-VICTIM ,COLLAR>
				   <IN? ,COLLAR ,CERBERUS>>
			      <SETG SPELL-VICTIM ,CERBERUS>)>
		       <TELL
"The " D ,PRSO " floats serenely in midair." CR>)
		      (<AND <EQUAL? ,SPELL-USED ,W?FRY>
			    <FSET? ,PRSO ,TAKEBIT>>
		       <SETG SPELL-HANDLED? T>
		       <REMOVE-CAREFULLY ,PRSO>
		       <TELL "The " D ,PRSO " goes up in a puff of smoke." CR>)
		      (ELSE
		       <SETG SPELL-VICTIM <>>
		       <TELL
"The wand stops glowing, but there is no other apparent effect." CR>)>)
	       (ELSE
		<SETG SPELL-VICTIM <>>
		<TELL "Nothing happens." CR>)>)
       (T
	'<V-DISENCHANT>)>>

<ROUTINE REMOVE-CAREFULLY (OBJ "AUX" OLIT)
	 <COND (<EQUAL? .OBJ ,P-IT-OBJECT>
		<SETG P-IT-OBJECT <>>)>
	 <SET OLIT ,LIT>
	 <REMOVE .OBJ>
	 <SETG LIT <LIT? ,HERE>>
	 <COND (<AND .OLIT <NOT <EQUAL? .OLIT ,LIT>>>
		<TELL "You are left in the dark..." CR>)>
	 T>

<ROUTINE V-ENTER ()
	<DO-WALK ,P?IN>>

<ROUTINE V-EXAMINE ()
	 <COND (<GETP ,PRSO ,P?TEXT>
		<TELL <GETP ,PRSO ,P?TEXT> CR>)
	       (<OR <FSET? ,PRSO ,CONTBIT>
		    <FSET? ,PRSO ,DOORBIT>>
		<V-LOOK-INSIDE>)
	       (T
		<TELL "There's nothing special about the " D ,PRSO "." CR>)>>

<ROUTINE V-EXIT ()
	 <COND (<AND <EQUAL? ,PRSO <> ,ROOMS>
		     <FSET? <LOC ,WINNER> ,VEHBIT>>
		<PERFORM ,V?DISEMBARK <LOC ,WINNER>>
		<RTRUE>)
	       (<AND ,PRSO <IN? ,WINNER ,PRSO>>
		<PERFORM ,V?DISEMBARK ,PRSO>
		<RTRUE>)
	       (ELSE
		<DO-WALK ,P?OUT>)>>

<ROUTINE V-EXORCISE ()
	 <TELL "What a bizarre concept!" CR>>

<ROUTINE PRE-FILL ("AUX" TX)
	 <COND (<NOT ,PRSI>
		<SET TX <GETPT ,HERE ,P?GLOBAL>>
		<COND (<AND .TX <ZMEMQB ,GLOBAL-WATER .TX <- <PTSIZE .TX> 1>>>
		       <PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>
		       <RTRUE>)
		      (<IN? ,WATER <LOC ,WINNER>>
		       <PERFORM ,V?FILL ,PRSO ,WATER>
		       <RTRUE>)
		      (T
		       <TELL "There is nothing to fill it with." CR>
		       <RTRUE>)>)>
	 <COND (<EQUAL? ,PRSI ,WATER>
		<RFALSE>)
	       (<NOT <EQUAL? ,PRSI ,GLOBAL-WATER>>
		<PERFORM ,V?PUT ,PRSI ,PRSO>
		<RTRUE>)>>

;"OLD ZORK1 PRE-FILL"
;<ROUTINE PRE-FILL ("AUX" TX) 
	 <COND (<NOT ,PRSI>
		<COND (<AND <SET TX <GETPT ,HERE ,P?GLOBAL>>
			    <ZMEMQB ,GLOBAL-WATER .TX <- <PTSIZE .TX> 1>>>
		       <SETG PRSI ,GLOBAL-WATER>
		       <RFALSE>)
		      (T
		       <TELL "There is nothing to fill it with." CR>
		       <RTRUE>)>)
	       (<NOT <EQUAL? ,PRSI ,GLOBAL-WATER>>
		<PERFORM ,V?PUT ,PRSI ,PRSO>
		<RTRUE>)>>

<ROUTINE V-FILL ()
	 <COND (<NOT ,PRSI>
		<COND (<GLOBAL-IN? ,GLOBAL-WATER ,HERE>
		       <PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>
		       <RTRUE>)
		      (<IN? ,WATER <LOC ,WINNER>>
		       <PERFORM ,V?FILL ,PRSO ,WATER>
		       <RTRUE>)
		      (T
		       <TELL "There's nothing to fill it with." CR>)>)
	       (T
		<TELL "You may know how to do that, but I don't." CR>)>>

<ROUTINE V-FIND ("AUX" (L <LOC ,PRSO>))
	 <COND (<EQUAL? ,PRSO ,HANDS ,LUNGS>
		<TELL
"Within six feet of your head, assuming you haven't left that
somewhere." CR>)
	       (<EQUAL? ,PRSO ,ME>
		<TELL "You're around here somewhere..." CR>)
	       (<EQUAL? .L ,GLOBAL-OBJECTS>
		<TELL "You find it." CR>)
	       (<IN? ,PRSO ,WINNER>
		<TELL "You have it." CR>)
	       (<OR <IN? ,PRSO ,HERE>
		    <GLOBAL-IN? ,PRSO ,HERE>
		    <EQUAL? ,PRSO ,PSEUDO-OBJECT>>
		<TELL "It's right here." CR>)
	       (<FSET? .L ,ACTORBIT>
		<TELL "The " D .L " has it." CR>)
	       (<FSET? .L ,SURFACEBIT>
		<TELL "It's on the " D .L "." CR>)
	       (<FSET? .L ,CONTBIT>
		<TELL "It's in the " D .L "." CR>)
	       (T
		<TELL "Beats me." CR>)>>

<ROUTINE V-FOLLOW ()
	 <TELL "You're nuts!" CR>>

<ROUTINE V-FROBOZZ ()
	 <TELL
"The FROBOZZ Corporation created, owns, and operates this dungeon." CR>>

<ROUTINE PRE-GIVE ()
	 <COND (<NOT <HELD? ,PRSO>>
		<TELL 
"That's easy for you to say since you don't even have the " D ,PRSO "." CR>)>>

<ROUTINE V-GIVE ()
	 <COND (<NOT <FSET? ,PRSI ,ACTORBIT>>
		<TELL "You can't give a " D ,PRSO " to a " D ,PRSI "!" CR>)
	       (T
		<TELL "The " D ,PRSI " refuses it politely." CR>)>>

<ROUTINE V-HATCH ()
	 <TELL "Bizarre!" CR>>

<GLOBAL HS 0> ;"counts occurences of HELLO, SAILOR"

<ROUTINE V-HELLO ()
	 <COND (,PRSO
		<COND (<FSET? ,PRSO ,ACTORBIT>
		       <TELL
"The " D ,PRSO " bows his head to you in greeting." CR>)
		      (T
		       <TELL
"It's a well known fact that only schizophrenics say \"Hello\" to a "
D ,PRSO "." CR>)>)
	       (T
		<TELL <PICK-ONE ,HELLOS> CR>)>>

<ROUTINE V-INCANT ()
%<COND (<==? ,ZORK-NUMBER 2>
	'<COND (,SPELL-USED
		<TELL "Nothing happens." CR>)
	       (,WAND-ON
		<SETG SPELL-VICTIM ,WAND-ON>
		<SETG SPELL-USED <GET ,P-LEXV ,P-CONT>>
		<TELL "The wand glows very brightly for a moment." CR>
		<ENABLE <QUEUE I-SPELL <+ 10 <RANDOM 10>>>>
		<SETG WAND-ON <>>
		<PERFORM ,V?ENCHANT ,SPELL-VICTIM>)
	       (T
		<TELL
"The incantation echoes back faintly, but nothing else happens." CR>)>)
       (T
	'<TELL
"The incantation echoes back faintly, but nothing else happens." CR>)>
	 <SETG QUOTE-FLAG <>>
	 <SETG P-CONT <>>
	 <RTRUE>>

<ROUTINE V-INFLATE ()
	 <TELL "How can you inflate that?" CR>>

;<ROUTINE V-IS-IN ()
	 <COND (<IN? ,PRSO ,PRSI>
		<TELL "Yes, it is ">
		<COND (<FSET? ,PRSI ,SURFACEBIT>
		       <TELL "on">)
		      (T
		       <TELL "in">)>
		<TELL " the " D ,PRSI "." CR>)
	       (T
		<TELL "No, it isn't." CR>)>>

<ROUTINE V-KICK () <HACK-HACK "Kicking the ">>

<ROUTINE V-KISS ()
	 <TELL "I'd sooner kiss a pig." CR>>

<ROUTINE V-KNOCK ()
	 <COND (<FSET? ,PRSO ,DOORBIT>
		<TELL "Nobody's home." CR>)
	       (T
		<TELL "Why knock on a " D ,PRSO "?" CR>)>>

<ROUTINE V-LAMP-OFF ()
	 <COND (<FSET? ,PRSO ,LIGHTBIT>
		<COND (<NOT <FSET? ,PRSO ,ONBIT>>
		       <TELL "It is already off." CR>)
		      (T
		       <FCLEAR ,PRSO ,ONBIT>
		       <COND (,LIT
			      <SETG LIT <LIT? ,HERE>>)>
		       <TELL "The " D ,PRSO " is now off." CR>
		       <COND (<NOT ,LIT>
			      <TELL "It is now pitch black." CR>)>)>)
	       (T
		<TELL "You can't turn that off." CR>)>
	 <RTRUE>>

<ROUTINE V-LAMP-ON ()
	 <COND (<FSET? ,PRSO ,LIGHTBIT>
		<COND (<FSET? ,PRSO ,ONBIT>
		       <TELL "It is already on." CR>)
		      (T
		       <FSET ,PRSO ,ONBIT>
		       <TELL "The " D ,PRSO " is now on." CR>
		       <COND (<NOT ,LIT>
			      <SETG LIT <LIT? ,HERE>>
			      <CRLF>
			      <V-LOOK>)>)>)
	       (<FSET? ,PRSO ,BURNBIT>
		<TELL
"If you wish to burn the " D ,PRSO ", you should say so." CR>)
	       (T
		<TELL "You can't turn that on." CR>)>
	 <RTRUE>>

<ROUTINE V-LAUNCH ()
	 <COND (<FSET? ,PRSO ,VEHBIT>
		<TELL "You can't launch that by saying \"launch\"!" CR>)
	       (T
		<TELL "That's pretty weird." CR>)>>

<ROUTINE V-LEAN-ON ()
	 <TELL "Getting tired?" CR>>

<ROUTINE V-LEAP ("AUX" TX S)
	 <COND (,PRSO
		<COND (<IN? ,PRSO ,HERE>
		       <COND (<FSET? ,PRSO ,ACTORBIT>
			      <TELL
"The " D ,PRSO " is too big to jump over." CR>)
			     (T
			      <V-SKIP>)>)
		      (T
		       <TELL "That would be a good trick." CR>)>)
	       (<SET TX <GETPT ,HERE ,P?DOWN>>
		<SET S <PTSIZE .TX>>
		<COND (<OR <EQUAL? .S 2> ;NEXIT
       			   <AND <EQUAL? .S 4> ;CEXIT
				<NOT <VALUE <GETB .TX 1>>>>>
		       <TELL
"This was not a very safe place to try jumping." CR>
		       <JIGS-UP <PICK-ONE ,JUMPLOSS>>)
		      %<COND (<==? ,ZORK-NUMBER 1>
			      '(<EQUAL? ,HERE ,UP-A-TREE>
		                <TELL
"In a feat of unaccustomed daring, you manage to land on your feet without
killing yourself." CR CR>
		                <DO-WALK ,P?DOWN>
		                <RTRUE>))
			     (T '(<NULL-F> T))>
		      (T
		       <V-SKIP>)>)
	       (T
		<V-SKIP>)>>

<GLOBAL JUMPLOSS
	<LTABLE 0
	       "You should have looked before you leaped."
	       "In the movies, your life would be passing before your eyes."
	       "Geronimo...">>

<ROUTINE V-LEAVE () <DO-WALK ,P?OUT>>

<ROUTINE V-LISTEN ()
	 <TELL "The " D ,PRSO " makes no sound." CR>>

<ROUTINE V-LOCK ()
	 <TELL "It doesn't seem to work." CR>>

<ROUTINE V-LOOK ()
	 <COND (<DESCRIBE-ROOM T>
		<DESCRIBE-OBJECTS T>)>>

<ROUTINE V-LOOK-BEHIND ()
	 <TELL "There is nothing behind the " D ,PRSO "." CR>>

<ROUTINE V-LOOK-INSIDE ()
	 <COND (<FSET? ,PRSO ,DOORBIT>
		<COND (<FSET? ,PRSO ,OPENBIT>
		       <TELL
"The " D ,PRSO " is open, but I can't tell what's beyond it.">)
		      (T
		       <TELL "The " D ,PRSO " is closed.">)>
		<CRLF>)
	       (<FSET? ,PRSO ,CONTBIT>
		<COND (<FSET? ,PRSO ,ACTORBIT>
		       <TELL "There is nothing special to be seen." CR>)
		      (<SEE-INSIDE? ,PRSO>
		       <COND (<AND <FIRST? ,PRSO>
				   <PRINT-CONT ,PRSO>>
			      <RTRUE>)
			     %<COND (<==? ,ZORK-NUMBER 3>
				     '(<FSET? ,PRSO ,SURFACEBIT>
				       <TELL
"There is nothing on the " D ,PRSO "." CR>))
				    (ELSE '(<NULL-F> <RTRUE>))>
			     (T
			      <TELL "The " D ,PRSO " is empty." CR>)>)
		      (T
		       <TELL "The " D ,PRSO " is closed." CR>)>)
	       (T
		<TELL "You can't look inside a " D ,PRSO "." CR>)>>

<ROUTINE V-LOOK-ON ()
	 <COND (<FSET? ,PRSO ,SURFACEBIT>
		<PERFORM ,V?LOOK-INSIDE ,PRSO>
		<RTRUE>)
	       (T
		<TELL "Look on a " D ,PRSO "???" CR>)>>

<ROUTINE V-LOOK-UNDER ()
	 <TELL "There is nothing but dust there." CR>>

<ROUTINE V-LOWER () <HACK-HACK "Playing in this way with the ">>

<ROUTINE V-MAKE ()
    	<TELL "You can't do that." CR>>

<ROUTINE V-MELT ()
	 <TELL "It's not clear that a " D ,PRSO " can be melted." CR>>

<ROUTINE PRE-MOVE ()
	 <COND (<HELD? ,PRSO>
		<TELL "You aren't an accomplished enough juggler." CR>)>>

<ROUTINE V-MOVE ()
	 <COND (<FSET? ,PRSO ,TAKEBIT>
		<TELL "Moving the " D ,PRSO " reveals nothing." CR>)
	       (T
		<TELL "You can't move the " D ,PRSO "." CR>)>>

<ROUTINE V-MUMBLE ()
	 <TELL "You'll have to speak up if you expect me to hear you!" CR>>

<ROUTINE PRE-MUNG ()
	 <COND %<COND (<==? ,ZORK-NUMBER 3>
		       '(<EQUAL? ,PRSO ,BEAM>
		         <RFALSE>))
		      (T
		       '(<NULL-F> <RTRUE>))>
	       (<OR <NOT ,PRSI>
		    <NOT <FSET? ,PRSI ,WEAPONBIT>>>
		<TELL "Trying to destroy the " D ,PRSO " with ">
		<COND (<NOT ,PRSI>
		       <TELL "your bare hands">)
		      (T
		       <TELL "a " D ,PRSI>)>
		<TELL " is futile." CR>)>>

<ROUTINE V-MUNG ()
	 <COND (<FSET? ,PRSO ,ACTORBIT>
		<PERFORM ,V?ATTACK ,PRSO>
		<RTRUE>)
	       (T
		<TELL "Nice try." CR>)>>

<ROUTINE V-ODYSSEUS ()
	 <COND %<COND (<==? ,ZORK-NUMBER 1>
		       '(<AND <EQUAL? ,HERE ,CYCLOPS-ROOM>
			      <IN? ,CYCLOPS ,HERE>
			      <NOT ,CYCLOPS-FLAG>>
		         <DISABLE <INT I-CYCLOPS>>
		         <SETG CYCLOPS-FLAG T>
		         <TELL 
"The cyclops, hearing the name of his father's deadly nemesis, flees the room
by knocking down the wall on the east of the room." CR>
		        <SETG MAGIC-FLAG T>
		        <FCLEAR ,CYCLOPS ,FIGHTBIT>
		        <REMOVE-CAREFULLY ,CYCLOPS>))
		      (T
		       '(<NULL-F> T))>
	       (T
		<TELL "Wasn't he a sailor?" CR>)>>

<ROUTINE V-OIL ()
	 <TELL "You probably put spinach in your gas tank, too." CR>>

<ROUTINE V-OPEN ("AUX" F STR)
	 <COND (<AND <FSET? ,PRSO ,CONTBIT>
		     <NOT <EQUAL? <GETP ,PRSO ,P?CAPACITY> 0>>>
		<COND (<FSET? ,PRSO ,OPENBIT>
		       <TELL "It is already open." CR>)
		      (T
		       <FSET ,PRSO ,OPENBIT>
		       <FSET ,PRSO ,TOUCHBIT>
		       <COND (<OR <NOT <FIRST? ,PRSO>> <FSET? ,PRSO ,TRANSBIT>>
			      <TELL "Opened." CR>)
			     (<AND <SET F <FIRST? ,PRSO>>
				   <NOT <NEXT? .F>>
				   <NOT <FSET? .F ,TOUCHBIT>>
				   <SET STR <GETP .F ,P?FDESC>>>
			      <TELL "The " D ,PRSO " opens." CR>
			      <TELL .STR CR>)
			     (T
			      <TELL "Opening the " D ,PRSO " reveals ">
			      <PRINT-CONTENTS ,PRSO>
			      <TELL "." CR>)>)>)
	       (<FSET? ,PRSO ,DOORBIT>
		<COND (<FSET? ,PRSO ,OPENBIT>
		       <TELL "It is already open." CR>)
		      (T
		       <TELL "The " D ,PRSO " opens." CR>
		       <FSET ,PRSO ,OPENBIT>)>)
	       (T
		<TELL
"You must tell me how to do that to a " D ,PRSO "." CR>)>>

<ROUTINE V-OVERBOARD ("AUX" LOCN)
	 <COND %<COND (<==? ,ZORK-NUMBER 1>
		       '(<EQUAL? ,PRSI ,TEETH>
			 <COND (<FSET? <SET LOCN <LOC ,WINNER>> ,VEHBIT>
				<MOVE ,PRSO <LOC .LOCN>>
				<TELL "Ahoy -- " D ,PRSO " overboard!" CR>)
			       (T
				<TELL "You're not in anything!" CR>)>))
		      (T '(<NULL-F> T))>
	       (<FSET? <LOC ,WINNER> ,VEHBIT>
		<PERFORM ,V?THROW ,PRSO>
		<RTRUE>)
	       (T
		<TELL "Huh?" CR>)>>

<ROUTINE V-PICK () <TELL "You can't pick that." CR>>

<ROUTINE V-PLAY ()
    <COND (<FSET? ,PRSO ,ACTORBIT>
	   <TELL
"You become so engrossed in the role of the " D ,PRSO " that
you kill yourself, just as he might have done!" CR>
	   <JIGS-UP "">)
	  (ELSE <TELL "That's silly!" CR>)>>

<ROUTINE V-PLUG ()
	 <TELL "This has no effect." CR>>

<ROUTINE V-POUR-ON ()
	 <COND (<EQUAL? ,PRSO ,WATER>
		<REMOVE-CAREFULLY ,PRSO>
	        <COND (<FLAMING? ,PRSI>
		       <TELL "The " D ,PRSI " is extinguished." CR>
		       %<COND (<==? ,ZORK-NUMBER 2>
			       '<COND (<EQUAL? ,PRSI ,BINF-FLAG>
				       <SETG BINF-FLAG <>>)>)
			      (ELSE '<NULL-F>)>
		       <FCLEAR ,PRSI ,ONBIT>
		       <FCLEAR ,PRSI ,FLAMEBIT>)
	              (T
		       <TELL
"The water spills over the " D ,PRSI ", to the floor, and evaporates." CR>)>)
	       %<COND (<==? ,ZORK-NUMBER 1>
		       '(<EQUAL? ,PRSO ,PUTTY>
			 <PERFORM ,V?PUT ,PUTTY ,PRSI>))
		      (T
		       '(<NULL-F> <RTRUE>))>
	       (T
		<TELL "You can't pour that." CR>)>>

<ROUTINE V-PRAY ()
	 <COND %<COND (<==? ,ZORK-NUMBER 1>
		       '(<EQUAL? ,HERE ,SOUTH-TEMPLE>
		         <GOTO ,FOREST-1>))
		      (T
		       '(<NULL-F> <RTRUE>))>
	       (T
		<TELL
"If you pray enough, your prayers may be answered." CR>)>>

<ROUTINE V-PUMP ()
	 <COND %<COND (<==? ,ZORK-NUMBER 1>
		       '(<AND ,PRSI <NOT <EQUAL? ,PRSI ,PUMP>>>
		         <TELL "Pump it up with a " D ,PRSI "?" CR>))
		      (T
		       '(<NULL-F> <RTRUE>))>
	       %<COND (<==? ,ZORK-NUMBER 1>
		       '(<IN? ,PUMP ,WINNER>
		         <PERFORM ,V?INFLATE ,PRSO ,PUMP>))
		      (T
		       '(<NULL-F> <RTRUE>))>
	       (T
		<TELL "It's really not clear how." CR>)>>

<ROUTINE V-PUSH () <HACK-HACK "Pushing the ">>

<ROUTINE V-PUSH-TO ()
	 <TELL "You can't push things to that." CR>>

<ROUTINE PRE-PUT ()
	 <COND %<COND (<==? ,ZORK-NUMBER 3>
		       '(<EQUAL? ,PRSO ,SHORT-POLE>
		         <RFALSE>))
		      (T
		       '(<NULL-F>
			 <RFALSE>))>
	       (T
		<PRE-GIVE>)>> ;"That's easy for you to say..."

<ROUTINE V-PUT ()
	 <COND (<OR <FSET? ,PRSI ,OPENBIT>
		    <OPENABLE? ,PRSI>
		    <FSET? ,PRSI ,VEHBIT>>)
	       (T
		<TELL "You can't do that." CR>
		<RTRUE>)>
	 <COND (<NOT <FSET? ,PRSI ,OPENBIT>>
		<TELL "The " D ,PRSI " isn't open." CR>
		<THIS-IS-IT ,PRSI>)
	       (<EQUAL? ,PRSI ,PRSO>
		<TELL "How can you do that?" CR>)
	       (<IN? ,PRSO ,PRSI>
		<TELL "The " D ,PRSO " is already in the " D ,PRSI "." CR>)
	       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>
		       <GETP ,PRSI ,P?SIZE>>
		    <GETP ,PRSI ,P?CAPACITY>>
		<TELL "There's no room." CR>)
	       (<AND <NOT <HELD? ,PRSO>>
		     <FSET? ,PRSO ,TRYTAKEBIT>>
		<TELL "You don't have the " D ,PRSO "." CR>
		<RTRUE>)
	       (<AND <NOT <HELD? ,PRSO>>
		     <NOT <ITAKE>>>
		<RTRUE>)
	       (T
		<MOVE ,PRSO ,PRSI>
		<FSET ,PRSO ,TOUCHBIT>
		<SCORE-OBJ ,PRSO>
		<TELL "Done." CR>)>>

<ROUTINE V-PUT-BEHIND ()
	 <TELL "That hiding place is too obvious." CR>>

<ROUTINE V-PUT-ON ()
	 <COND (<EQUAL? ,PRSI ,GROUND>
		<PERFORM ,V?DROP ,PRSO>
		<RTRUE>)
	       (<FSET? ,PRSI ,SURFACEBIT>
		<V-PUT>)
	       (T
		<TELL "There's no good surface on the " D ,PRSI "." CR>)>>

<ROUTINE V-PUT-UNDER ()
	 <TELL "You can't do that." CR>>

<ROUTINE V-RAISE ()
	 <V-LOWER>>

<ROUTINE V-RAPE ()
	 <TELL "What a (ahem!) strange idea." CR>>

<ROUTINE PRE-READ ()
	 <COND (<NOT ,LIT>
		<TELL "It is impossible to read in the dark." CR>)
	       (<AND ,PRSI <NOT <FSET? ,PRSI ,TRANSBIT>>>
		<TELL "How does one look through a " D ,PRSI "?" CR>)>>

<ROUTINE V-READ ()
	 <COND (<NOT <FSET? ,PRSO ,READBIT>>
		<TELL "How does one read a " D ,PRSO "?" CR>)
	       (T
		<TELL <GETP ,PRSO ,P?TEXT> CR>)>>

<ROUTINE V-READ-PAGE ()
	 <PERFORM ,V?READ ,PRSO>
	 <RTRUE>>

<ROUTINE V-REPENT ()
	 <TELL "It could very well be too late!" CR>>

<ROUTINE V-REPLY ()
	 <TELL "It is hardly likely that the " D ,PRSO " is interested." CR>
	 <SETG P-CONT <>>
	 <SETG QUOTE-FLAG <>>
	 <RTRUE>>

<ROUTINE V-RING ()
	 <TELL "How, exactly, can you ring that?" CR>>

<ROUTINE V-RUB () <HACK-HACK "Fiddling with the ">>

<ROUTINE V-SAY ("AUX" V)
	 %<COND (<==? ,ZORK-NUMBER 2>
		 '<COND (<OR ,SPELL-USED ,WAND-ON>
		         <PERFORM ,V?INCANT>
		         <RTRUE>)>)
		(<==? ,ZORK-NUMBER 3>
		 '<COND (<AND <FSET? ,FRONT-DOOR ,TOUCHBIT>
		              <EQUAL? <GET ,P-LEXV ,P-CONT> ,W?FROTZ>
		              <EQUAL? <GET ,P-LEXV <+ ,P-CONT 2>> ,W?OZMOO>>
		         <SETG P-CONT <>>
		         <COND (<EQUAL? ,HERE ,MSTAIRS>
		                <CRLF>
		                <GOTO ,FRONT-DOOR>)
		               (T
		                <TELL "Nothing happens." CR>)>
		                <RTRUE>)>)
		(T
		 '<COND (<NOT ,P-CONT>
			 <TELL "Say what?" CR>
			 <RTRUE>)>)>
	 <SETG QUOTE-FLAG <>>
	 <COND (<SET V <FIND-IN ,HERE ,ACTORBIT>>
		<TELL "You must address the " D .V " directly." CR>
		<SETG P-CONT <>>)
	       (<NOT <EQUAL? <GET ,P-LEXV ,P-CONT> ,W?HELLO>>
	        <SETG P-CONT <>>
		<TELL
"Talking to yourself is a sign of impending mental collapse." CR>)>
	 <RTRUE>>

<ROUTINE V-SEARCH ()
	 <TELL "You find nothing unusual." CR>>

<ROUTINE V-SEND ()
	 <COND (<FSET? ,PRSO ,ACTORBIT>
		<TELL "Why would you send for the " D ,PRSO "?" CR>)
	       (T
		<TELL "That doesn't make sends." CR>)>>

<ROUTINE PRE-SGIVE ()
	 <PERFORM ,V?GIVE ,PRSI ,PRSO>
	 <RTRUE>>

<ROUTINE V-SGIVE ()
	 <TELL "Foo!" CR>>

<ROUTINE V-SHAKE ()
	 <COND (<FSET? ,PRSO ,ACTORBIT>
		<TELL "This seems to have no effect." CR>)
	       (<NOT <FSET? ,PRSO ,TAKEBIT>>
		<TELL "You can't take it; thus, you can't shake it!" CR>)
	       (<FSET? ,PRSO ,CONTBIT>
		<COND (<FSET? ,PRSO ,OPENBIT>
		       <COND (<FIRST? ,PRSO>
			      <SHAKE-LOOP>
			      <TELL "The contents of the " D, PRSO " spill ">
	                      <COND (%<COND (<==? ,ZORK-NUMBER 3>
					     '<FSET? ,HERE ,NONLANDBIT>)
					    (ELSE
					     '<NOT <FSET? ,HERE ,RLANDBIT>>)>
		                     <TELL "out and disappears">)
	                            (T
		                     <TELL "to the ground">)>
	                      <TELL "." CR>)
			     (T
			      <TELL "Shaken." CR>)>)
		      (T
		       <COND (<FIRST? ,PRSO>
			      <TELL
"It sounds like there is something inside the " D ,PRSO "." CR>)
			     (T
			      <TELL "The " D, PRSO " sounds empty." CR>)>)>)
	       (T
		<TELL "Shaken." CR>)>>

<ROUTINE SHAKE-LOOP ("AUX" X)
	 <REPEAT ()
		 <COND (<SET X <FIRST? ,PRSO>>
			<FSET .X ,TOUCHBIT>
			<MOVE .X
			      %<COND (<==? ,ZORK-NUMBER 1>
				      '<COND (<EQUAL? ,HERE ,UP-A-TREE>
				              ,PATH)
				             (<NOT <FSET? ,HERE ,RLANDBIT>>
				              ,PSEUDO-OBJECT)
				             (T
				              ,HERE)>)
				     (<==? ,ZORK-NUMBER 2>
				      '<COND (<EQUAL? .X ,WATER>
				              ,PSEUDO-OBJECT)
				             (<NOT <FSET? ,HERE ,RLANDBIT>>
				              ,PSEUDO-OBJECT)
				             (T
				              ,HERE)>)
				     (T
				      '<COND (<EQUAL? ,HERE ,ON-LAKE>
					      ,IN-LAKE)
					     (T
					      ,HERE)>)>>)
		       (T
			<RETURN>)>>>

<ROUTINE V-SKIP ()
	 <TELL <PICK-ONE ,WHEEEEE> CR>>

<GLOBAL WHEEEEE
	<LTABLE 0 "Very good. Now you can go to the second grade."
	       "Are you enjoying yourself?"
	       "Wheeeeeeeeee!!!!!"
	       "Do you expect me to applaud?">>

<ROUTINE V-SMELL ()
	 <TELL "It smells like a " D ,PRSO "." CR>>

<ROUTINE V-SPIN ()
	 <TELL "You can't spin that!" CR>>

<ROUTINE V-SPRAY ()
	 <V-SQUEEZE>>

<ROUTINE V-SQUEEZE ()
	 <COND (<FSET? ,PRSO ,ACTORBIT>
		<TELL "The " D ,PRSO " does not understand this.">)
	       (T
		<TELL "How singularly useless.">)>
	 <CRLF>>

<ROUTINE V-SSPRAY ()
	 <PERFORM ,V?SPRAY ,PRSI ,PRSO>>

<ROUTINE V-STAB ("AUX" W)
	 <COND (<SET W <FIND-WEAPON ,WINNER>>
		<PERFORM ,V?ATTACK ,PRSO .W>
		<RTRUE>)
	       (T
		<TELL
"No doubt you propose to stab the " D ,PRSO " with your pinky?" CR>)>>

<ROUTINE V-STAND ()
	 <COND (<FSET? <LOC ,WINNER> ,VEHBIT>
		<PERFORM ,V?DISEMBARK <LOC ,WINNER>>
		<RTRUE>)
	       (T
		<TELL "You are already standing, I think." CR>)>>

<ROUTINE V-STAY ()
	 <TELL "You will be lost without me!" CR>>

<ROUTINE V-STRIKE ()
	 <COND (<FSET? ,PRSO ,ACTORBIT>
		<TELL
"Since you aren't versed in hand-to-hand combat, you'd better attack the "
D ,PRSO " with a weapon." CR>)
	       (T
		<PERFORM ,V?LAMP-ON ,PRSO>
		<RTRUE>)>>

<ROUTINE V-SWIM ()
	 <COND %<COND (<OR <==? ,ZORK-NUMBER 1>
			   <==? ,ZORK-NUMBER 2>>
		       '(<GLOBAL-IN? ,GLOBAL-WATER ,HERE>
		         <TELL "Swimming isn't usually allowed in the ">
		         <COND (<NOT <EQUAL? ,PRSO ,WATER ,GLOBAL-WATER>>
	                        <TELL D ,PRSO ".">)
		               (T
		                <TELL "dungeon.">)>
		         <CRLF>))
		      (T
		       '(<EQUAL? ,HERE ,ON-LAKE ,IN-LAKE>
		         <TELL "What do you think you're doing?" CR>))>
	       %<COND (<==? ,ZORK-NUMBER 3>
		       '(<EQUAL? ,HERE ,FLATHEAD-OCEAN>
		         <TELL
"Between the rocks and waves, you wouldn't last a minute!" CR>))
		      (T
		       '(<NULL-F>
			 <RFALSE>))>
	       (T
		<TELL "Go jump in a lake!" CR>)>>

<ROUTINE V-SWING ()
	 <COND (<NOT ,PRSI>
		<TELL "Whoosh!" CR>)
	       (T
		<PERFORM ,V?ATTACK ,PRSI ,PRSO>)>>

<ROUTINE PRE-TAKE ()
	 <COND (<IN? ,PRSO ,WINNER>
		<COND (<FSET? ,PRSO ,WEARBIT>
		       <TELL "You are already wearing it." CR>)
		      (T
		       <TELL "You already have that!" CR>)>)
	       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>
		     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>
		<TELL
"You can't reach something that's inside a closed container." CR>
		<RTRUE>)
	       (,PRSI
		<COND (<EQUAL? ,PRSI ,GROUND>
		       <SETG PRSI <>>
		       <RFALSE>)>
		%<COND (<==? ,ZORK-NUMBER 2>
			'<COND (<EQUAL? ,PRSO ,DOOR-KEEPER>
				<SETG PRSI <>>
				<RFALSE>)>)
		       (ELSE
			'<NULL-F>)>
		<COND (<NOT <EQUAL? ,PRSI <LOC ,PRSO>>>
		       <TELL "The " D ,PRSO " isn't in the " D ,PRSI "." CR>)
		      (T
		       <SETG PRSI <>>
		       <RFALSE>)>)
	       (<EQUAL? ,PRSO <LOC ,WINNER>>
		<TELL "You're inside of it!" CR>)>>

<ROUTINE V-TAKE ()
	 <COND (<EQUAL? <ITAKE> T>
		<COND (<FSET? ,PRSO ,WEARBIT>
		       <TELL "You are now wearing the " D ,PRSO "." CR>)
		      (T
		       <TELL "Taken." CR>)>)>>

<ROUTINE V-TELL ()
	 <COND (<FSET? ,PRSO ,ACTORBIT>
		<COND (,P-CONT
		       <SETG WINNER ,PRSO>
		       <SETG HERE <LOC ,WINNER>>)
		      (T
		       <TELL "The " D ,PRSO
" pauses for a moment, perhaps thinking that you should reread
the manual." CR>)>)
	       (T
		<TELL "You can't talk to the " D ,PRSO "!" CR>
		<SETG QUOTE-FLAG <>>
		<SETG P-CONT <>>
		<RFATAL>)>>

<ROUTINE V-THROUGH ("OPTIONAL" (OBJ <>) "AUX" M)
	#DECL ((OBJ) <OR OBJECT FALSE> (M) <PRIMTYPE VECTOR>)
	<COND (<AND <FSET? ,PRSO ,DOORBIT>
		    <SET M <OTHER-SIDE ,PRSO>>>
	       <DO-WALK .M>
	       <RTRUE>)
	      (<AND <NOT .OBJ> <FSET? ,PRSO ,VEHBIT>>
	       <PERFORM ,V?BOARD ,PRSO>
	       <RTRUE>)
	      (<OR .OBJ <NOT <FSET? ,PRSO ,TAKEBIT>>>
	       %<COND (<==? ,ZORK-NUMBER 2>
		       '<COND (<AND ,SCOL-ROOM
				   <OR .OBJ <EQUAL? ,PRSO ,CURTAIN>>>
			      <SCOL-GO .OBJ>
			      <RTRUE>)
			     (<AND <EQUAL? ,HERE ,DEPOSITORY>
				   <EQUAL? ,PRSO ,SNWL>
				   ,SCOL-ROOM>
			      <SCOL-GO .OBJ>
			      <RTRUE>)
			     (<AND <EQUAL? ,HERE ,SCOL-ACTIVE>
				   <EQUAL? ,PRSO 
					   <GET <SET M <GET-WALL ,HERE>> 1>>>
			      <SETG SCOL-ROOM <GET .M 2>>
			      <SETG PRSO <GETP ,PRSO ,P?SIZE>>
			      <COND (.OBJ <SCOL-OBJ .OBJ 0 ,DEPOSITORY>)
				    (T
				     <SCOL-THROUGH 0 ,DEPOSITORY>)>
			      <RTRUE>)
			     (<EQUAL? ,PRSO ,CURTAIN>
			      <TELL
"You can't go more than part way through the curtain." CR>
			      <RTRUE>)>)
		      (ELSE '<NULL-F>)>
	       <TELL
"You hit your head against the " D ,PRSO " as you attempt this feat." CR>)
	      (<IN? ,PRSO ,WINNER>
	       <TELL "That would involve quite a contortion!" CR>)
	      (T
	       <TELL <PICK-ONE ,YUKS> CR>)>>

<ROUTINE V-THROW ()
	 <COND (<IDROP>
		<COND (<EQUAL? ,PRSI ,ME>
		       <TELL
"A terrific throw! The " D ,PRSO>
		       <SETG WINNER ,PLAYER>
		       <JIGS-UP " hits you squarely in the head. Normally,
this wouldn't do much damage, but by incredible mischance, you fall over
backwards trying to duck, and break your neck, justice being swift and
merciful in the Great Underground Empire.">)
		      (<AND ,PRSI <FSET? ,PRSI ,ACTORBIT>>
		       <TELL
"The " D ,PRSI " ducks as the " D ,PRSO " flies by and crashes to the ground."
CR>)
		      (T <TELL "Thrown." CR>)>)
	       (ELSE <TELL "Huh?" CR>)>>

<ROUTINE V-THROW-OFF ()
	 <TELL "You can't throw anything off of that!" CR>>

<ROUTINE V-TIE ()
	 <COND (<EQUAL? ,PRSI ,WINNER>
		<TELL "You can't tie anything to yourself." CR>)
	       (T
		<TELL "You can't tie the " D ,PRSO " to that." CR>)>>

<ROUTINE V-TIE-UP ()
	 <TELL "You could certainly never tie it with that!" CR>>

<ROUTINE V-TREASURE ()
	 <COND %<COND (<==? ,ZORK-NUMBER 1>
		       '(<EQUAL? ,HERE ,NORTH-TEMPLE>
		         <GOTO ,TREASURE-ROOM>))
		      (T
		       '(<NULL-F> <RTRUE>))>
	       %<COND (<==? ,ZORK-NUMBER 1>
		       '(<EQUAL? ,HERE ,TREASURE-ROOM>
		         <GOTO ,NORTH-TEMPLE>))
		      (T
		       '(<NULL-F> <RTRUE>))>
	       (T
		<TELL "Nothing happens." CR>)>>

<ROUTINE PRE-TURN ()
	 %<COND (<==? ,ZORK-NUMBER 3>
		 '<COND (<AND <EQUAL? ,PRSI <> ,ROOMS>
			      <EQUAL? ,PRSO ,DIAL ,TM-DIAL ,T-BAR>>
			 <TELL
"You should turn the " D ,PRSO " to something." CR>
			 <RTRUE>)>)
		(ELSE T)>
	 <COND (%<COND (<==? ,ZORK-NUMBER 1>
			'<AND <EQUAL? ,PRSI <> ,ROOMS>
			      <NOT <EQUAL? ,PRSO ,BOOK>>>)
		       (ELSE
			'<EQUAL? ,PRSI <> ,ROOMS>)>
		<TELL "Your bare hands don't appear to be enough." CR>)
	       (<NOT <FSET? ,PRSO ,TURNBIT>>
		<TELL "You can't turn that!" CR>)>>

<ROUTINE V-TURN ()
	 <TELL "This has no effect." CR>>

<ROUTINE V-UNLOCK ()
	 <V-LOCK>>

<ROUTINE V-UNTIE ()
	 <TELL "This cannot be tied, so it cannot be untied!" CR>>

<ROUTINE V-WAIT ("OPTIONAL" (NUM 3))
	 <TELL "Time passes..." CR>
	 <REPEAT ()
		 <COND (<L? <SET NUM <- .NUM 1>> 0> <RETURN>)
		       (<CLOCKER> <RETURN>)>>
	 <SETG CLOCK-WAIT T>>

<ROUTINE V-WALK ("AUX" PT PTS STR OBJ RM)
	 <COND (<NOT ,P-WALK-DIR>
		<PERFORM ,V?WALK-TO ,PRSO>
		<RTRUE>)
	       (<SET PT <GETPT ,HERE ,PRSO>>
		<COND (<EQUAL? <SET PTS <PTSIZE .PT>> ,UEXIT>
		       <GOTO <GETB .PT ,REXIT>>)
		      (<EQUAL? .PTS ,NEXIT>
		       <TELL <GET .PT ,NEXITSTR> CR>
		       <RFATAL>)
		      (<EQUAL? .PTS ,FEXIT>
		       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>
			      <GOTO .RM>)
			     %<COND (<==? ,ZORK-NUMBER 3>
				     '(<AND <EQUAL? ,HERE ,CP> ,CP-MOVED>
		                       <RTRUE>))
				    (T
				     '(<NULL-F> <RFALSE>))>
			     (T
			      <RFATAL>)>)
		      (<EQUAL? .PTS ,CEXIT>
		       <COND (<VALUE <GETB .PT ,CEXITFLAG>>
			      <GOTO <GETB .PT ,REXIT>>)
			     (<SET STR <GET .PT ,CEXITSTR>>
			      <TELL .STR CR>
			      <RFATAL>)
			     (T
			      <TELL "You can't go that way." CR>
			      <RFATAL>)>)
		      (<EQUAL? .PTS ,DEXIT>
		       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>
			      <GOTO <GETB .PT ,REXIT>>)
			     (<SET STR <GET .PT ,DEXITSTR>>
			      <TELL .STR CR>
			      <RFATAL>)
			     (T
			      <TELL "The " D .OBJ " is closed." CR>
			      <THIS-IS-IT .OBJ>
			      <RFATAL>)>)>)
	       (<AND <NOT ,LIT>
		     <PROB 80>
		     <EQUAL? ,WINNER ,ADVENTURER>
		     <NOT <FSET? ,HERE ,NONLANDBIT>>>
		<COND (,SPRAYED?
		       <TELL
"There are odd noises in the darkness, and there is no exit in that
direction." CR>
		       <RFATAL>)
		      %<COND (<==? ,ZORK-NUMBER 3>
			      '(<EQUAL? ,HERE ,DARK-1 ,DARK-2>
		                <JIGS-UP
"Oh, no! You have walked into a den of hungry grues and it's dinner time!">))
			     (T
			      '(<NULL-F>
				<RFALSE>))>
		      (T
		       <JIGS-UP
"Oh, no! You have walked into the slavering fangs of a lurking grue!">)>)
	       (T
		<TELL "You can't go that way." CR>
		<RFATAL>)>>

<ROUTINE V-WALK-AROUND ()
	 <TELL "Use compass directions for movement." CR>>

<ROUTINE V-WALK-TO ()
	 <COND (<AND ,PRSO
		     <OR <IN? ,PRSO ,HERE>
			 <GLOBAL-IN? ,PRSO ,HERE>>>
		<TELL "It's here!" CR>)
	       (T
		<TELL "You should supply a direction!" CR>)>>

<ROUTINE V-WAVE ()
	 <HACK-HACK "Waving the ">>

<ROUTINE V-WEAR ()
	 <COND (<NOT <FSET? ,PRSO ,WEARBIT>>
		<TELL "You can't wear the " D ,PRSO "." CR>)
	       (T
		<PERFORM ,V?TAKE ,PRSO>
		<RTRUE>)>>

<ROUTINE V-WIN ()
	 <TELL "Naturally!" CR>>

<ROUTINE V-WIND ()
	 <TELL "You cannot wind up a " D ,PRSO "." CR>>

<ROUTINE V-WISH ()
	 %<COND (<==? ,ZORK-NUMBER 2>
		 '<PERFORM ,V?MAKE ,WISH>)
		(T
		 '<TELL "With luck, your wish will come true." CR>)>>

<ROUTINE V-YELL () <TELL "Aaaarrrrgggghhhh!" CR>>

<ROUTINE V-ZORK () <TELL "At your service!" CR>>

^L

"Verb-Associated Routines"

"Descriptions"

<GLOBAL LIT <>>

<GLOBAL SPRAYED? <>>

<ROUTINE V-FIRST-LOOK ()
	 <COND (<DESCRIBE-ROOM>
		<COND (<NOT ,SUPER-BRIEF>
		       <DESCRIBE-OBJECTS>)>)>>

<ROUTINE DESCRIBE-ROOM ("OPTIONAL" (LOOK? <>) "AUX" V? STR AV)
	 <SET V? <OR .LOOK? ,VERBOSE>>
	 <COND (<NOT ,LIT>
		<TELL "It is pitch black.">
		<COND (<NOT ,SPRAYED?>
		       <TELL " You are likely to be eaten by a grue.">)>
		<CRLF>
		%<COND (<==? ,ZORK-NUMBER 3>
			'<COND (<EQUAL? ,HERE ,DARK-2>
		                <TELL
"The ground continues to slope upwards away from the lake. You can barely
detect a dim light from the east." CR>)>)
		       (T
			'<NULL-F>)>
		<RFALSE>)>
	 <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>
		<FSET ,HERE ,TOUCHBIT>
		<SET V? T>)>
	 %<COND (<==? ,ZORK-NUMBER 1>
		 '<COND (<FSET? ,HERE ,MAZEBIT>
		         <FCLEAR ,HERE ,TOUCHBIT>)>)
		(T
		 '<NULL-F>)>
	 <COND (<IN? ,HERE ,ROOMS>
		;"Was <TELL D ,HERE CR>"
		<TELL D ,HERE>
		<COND (<FSET? <SET AV <LOC ,WINNER>> ,VEHBIT>
		       <TELL ", in the " D .AV>)>
		<CRLF>)>
	 <COND (%<COND (<==? ,ZORK-NUMBER 2>
			'<OR .LOOK? <NOT ,SUPER-BRIEF> <EQUAL? ,HERE ,ZORK3>>)
		       (ELSE
			'<OR .LOOK? <NOT ,SUPER-BRIEF>>)>
		<SET AV <LOC ,WINNER>>
		;<COND (<FSET? .AV ,VEHBIT>
		       <TELL "(You are in the " D .AV ".)" CR>)>
		<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>
		       <RTRUE>)
		      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>
		       <TELL .STR CR>)
		      (T
		       <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>
		<COND (<AND <NOT <EQUAL? ,HERE .AV>> <FSET? .AV ,VEHBIT>>
		       <APPLY <GETP .AV ,P?ACTION> ,M-LOOK>)>)>
	 T>

<ROUTINE DESCRIBE-OBJECTS ("OPTIONAL" (V? <>))
	 <COND (,LIT
		<COND (<FIRST? ,HERE>
		       <PRINT-CONT ,HERE <SET V? <OR .V? ,VERBOSE>> -1>)>)
	       (T
		<TELL "Only bats can see in the dark. And you're not one." CR>)>>

"DESCRIBE-OBJECT -- takes object and flag.  if flag is true will print a
long description (fdesc or ldesc), otherwise will print short."

<GLOBAL DESC-OBJECT <>>

<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL "AUX" (STR <>) AV)
	 <SETG DESC-OBJECT .OBJ>
	 <COND (<AND <0? .LEVEL>
		     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>
		<RTRUE>)
	       (<AND <0? .LEVEL>
		     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>
			      <SET STR <GETP .OBJ ,P?FDESC>>>
			 <SET STR <GETP .OBJ ,P?LDESC>>>>
		<TELL .STR>)
	       (<0? .LEVEL>
		<TELL "There is a " D .OBJ " here">
		<COND (<FSET? .OBJ ,ONBIT>
		       <TELL " (providing light)">)>
		<TELL ".">)
	       (T
		<TELL <GET ,INDENTS .LEVEL>>
		<TELL "A " D .OBJ>
		<COND (<FSET? .OBJ ,ONBIT>
		       <TELL " (providing light)">)
		      (<AND <FSET? .OBJ ,WEARBIT>
			    <IN? .OBJ ,WINNER>>
		       <TELL " (being worn)">)>)>
	 %<COND (<==? ,ZORK-NUMBER 2>
		 '<COND (<AND <EQUAL? .OBJ ,SPELL-VICTIM>
		              <EQUAL? ,SPELL-USED ,W?FLOAT>>
		         <TELL " (floating in midair)">)>)
		(T
		 '<NULL-F>)>
	 <COND (<AND <0? .LEVEL>
		     <SET AV <LOC ,WINNER>>
		     <FSET? .AV ,VEHBIT>>
		<TELL " (outside the " D .AV ")">)>
	 <CRLF>
	 <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>
		<PRINT-CONT .OBJ .V? .LEVEL>)>>

<ROUTINE PRINT-CONTENTS (OBJ "AUX" F N (1ST? T) (IT? <>) (TWO? <>))
	 <COND (<SET F <FIRST? .OBJ>>
		<REPEAT ()
			<SET N <NEXT? .F>>
			<COND (.1ST? <SET 1ST? <>>)
			      (ELSE
			       <TELL ", ">
			       <COND (<NOT .N> <TELL "and ">)>)>
			<TELL "a " D .F>
			<COND (<AND <NOT .IT?> <NOT .TWO?>>
			       <SET IT? .F>)
			      (ELSE
			       <SET TWO? T>
			       <SET IT? <>>)>
			<SET F .N>
			<COND (<NOT .F>
			       <COND (<AND .IT? <NOT .TWO?>>
				      <THIS-IS-IT .IT?>)>
			       <RTRUE>)>>)>>

<ROUTINE PRINT-CONT (OBJ "OPTIONAL" (V? <>) (LEVEL 0)
		     "AUX" Y 1ST? SHIT AV STR (PV? <>) (INV? <>))
	 <COND (<NOT <SET Y <FIRST? .OBJ>>> <RTRUE>)>
	 <COND (<AND <SET AV <LOC ,WINNER>> <FSET? .AV ,VEHBIT>>
		T)
	       (ELSE <SET AV <>>)>
	 <SET 1ST? T>
	 <SET SHIT T>
	 <COND (<EQUAL? ,WINNER .OBJ <LOC .OBJ>>
		<SET INV? T>)
	       (ELSE
		<REPEAT ()
			<COND %<COND (<==? ,ZORK-NUMBER 2>
				      '(<NOT .Y>
					<COND (<AND <0? .LEVEL>
						    <==? ,SPELL? ,S-FANTASIZE>
						    <PROB 20>>
					       <TELL "There is a "
						     <PICK-ONE ,FANTASIES>
						     " here." CR>
					       <SET 1ST? <>>)>
					<RETURN>))
				     (ELSE
				      '(<NOT .Y>
					<RETURN>))>
			      (<EQUAL? .Y .AV> <SET PV? T>)
			      (<EQUAL? .Y ,WINNER>)
			      (<AND <NOT <FSET? .Y ,INVISIBLE>>
				    <NOT <FSET? .Y ,TOUCHBIT>>
				    <SET STR <GETP .Y ,P?FDESC>>>
			       <COND (<NOT <FSET? .Y ,NDESCBIT>>
				      <TELL .STR CR>
				      <SET SHIT <>>
				      ;<SET 1ST? <>>)>
			       <COND (<AND <SEE-INSIDE? .Y>
					   <NOT <GETP <LOC .Y> ,P?DESCFCN>>
					   <FIRST? .Y>>
				      <COND (<PRINT-CONT .Y .V? 0>
					     <SET 1ST? <>>)>)>)>
			<SET Y <NEXT? .Y>>>)>
	 <SET Y <FIRST? .OBJ>>
	 <REPEAT ()
		 <COND (<NOT .Y>
			<COND (<AND .PV? .AV <FIRST? .AV>>
			       <SET LEVEL <+ .LEVEL 1>> ;"not in Zork III"
			       <PRINT-CONT .AV .V? .LEVEL>)>
			<RETURN>)
		       (<EQUAL? .Y .AV ,ADVENTURER>)
		       (<AND <NOT <FSET? .Y ,INVISIBLE>>
			     <OR .INV?
				 <FSET? .Y ,TOUCHBIT>
				 <NOT <GETP .Y ,P?FDESC>>>>
			<COND (<NOT <FSET? .Y ,NDESCBIT>>
			       <COND (.1ST?
				      <COND (<FIRSTER .OBJ .LEVEL>
					     <COND (<L? .LEVEL 0>
						    <SET LEVEL 0>)>)>
				      <SET LEVEL <+ 1 .LEVEL>>
				      <SET 1ST? <>>)>
			       <COND (<L? .LEVEL 0> <SET LEVEL 0>)>
			       <DESCRIBE-OBJECT .Y .V? .LEVEL>)
			      (<AND <FIRST? .Y> <SEE-INSIDE? .Y>>
			       <SET LEVEL <+ .LEVEL 1>> ;"not in Zork III"
			       <PRINT-CONT .Y .V? .LEVEL>
			       <SET LEVEL <- .LEVEL 1>> ;"not in Zork III")>)>
		 <SET Y <NEXT? .Y>>>
	 <COND (<AND .1ST? .SHIT> <RFALSE>) (T <RTRUE>)>>

<ROUTINE FIRSTER (OBJ LEVEL)
	 <COND %<COND (<==? ,ZORK-NUMBER 1>
		       '(<EQUAL? .OBJ ,TROPHY-CASE>
		         <TELL
"Your collection of treasures consists of:" CR>))
		      (T
		       '(<NULL-F> <RTRUE>))>
	       (<EQUAL? .OBJ ,WINNER>
		<TELL "You are carrying:" CR>)
	       (<NOT <IN? .OBJ ,ROOMS>>
		<COND (<G? .LEVEL 0>
		       <TELL <GET ,INDENTS .LEVEL>>)>
		<COND (<FSET? .OBJ ,SURFACEBIT>
		       <TELL "Sitting on the " D .OBJ " is: " CR>)
		      (<FSET? .OBJ ,ACTORBIT>
		       <TELL "The " D .OBJ " is holding: " CR>)
		      (T
		       <TELL "The " D .OBJ " contains:" CR>)>)>>

<ROUTINE SEE-INSIDE? (OBJ)
	 <AND <NOT <FSET? .OBJ ,INVISIBLE>>
	      <OR <FSET? .OBJ ,TRANSBIT> <FSET? .OBJ ,OPENBIT>>>>

"Scoring"

<GLOBAL MOVES 0>

<GLOBAL SCORE 0>

<GLOBAL BASE-SCORE 0>

<GLOBAL WON-FLAG <>>

<ROUTINE SCORE-UPD (NUM)
	 <SETG BASE-SCORE <+ ,BASE-SCORE .NUM>>
	 <SETG SCORE <+ ,SCORE .NUM>>
	 %<COND (<==? ,ZORK-NUMBER 1>
		 '<COND (<AND <EQUAL? ,SCORE 350>
		              <NOT ,WON-FLAG>>
		         <SETG WON-FLAG T>
		         <FCLEAR ,MAP ,INVISIBLE>
		         <FCLEAR ,WEST-OF-HOUSE ,TOUCHBIT>
		         <TELL
"An almost inaudible voice whispers in your ear, \"Look to your treasures
for the final secret.\"" CR>)>)
		(T
		 '<NULL-F>)>
	 T>

<ROUTINE SCORE-OBJ (OBJ "AUX" TEMP)
	 <COND (<G? <SET TEMP <GETP .OBJ ,P?VALUE>> 0>
		<SCORE-UPD .TEMP>
		<PUTP .OBJ ,P?VALUE 0>)>>

<ROUTINE YES? ()
	 <PRINTI ">">
	 <READ ,P-INBUF ,P-LEXV>
	 <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>
		<RTRUE>)
	       (T
		<RFALSE>)>>

"Death"

<GLOBAL DEAD <>>

<GLOBAL DEATHS 0>

<GLOBAL LUCKY 1>

;"JIGS-UP is in ACTIONS.ZIL"

;"RANDOMIZE-OBJECTS is in ACTIONS.ZIL"

;"KILL-INTERRUPTS is in ACTIONS.ZIL"

"Object Manipulation"

<GLOBAL FUMBLE-NUMBER 7>

<GLOBAL FUMBLE-PROB 8>

<ROUTINE ITAKE ("OPTIONAL" (VB T) "AUX" CNT OBJ)
	 #DECL ((VB) <OR ATOM FALSE> (CNT) FIX (OBJ) OBJECT)
	 <COND %<COND (<==? ,ZORK-NUMBER 1>
		       '(,DEAD
		         <COND (.VB
				<TELL
"Your hand passes through its object." CR>)>
		         <RFALSE>))
		      (T
		       '(<NULL-F>
			 <RFALSE>))>
	       (<NOT <FSET? ,PRSO ,TAKEBIT>>
		<COND (.VB
		       <TELL <PICK-ONE ,YUKS> CR>)>
		<RFALSE>)
	       %<COND (<==? ,ZORK-NUMBER 2>
		       '(<AND <EQUAL? ,PRSO ,SPELL-VICTIM>
		              <EQUAL? ,SPELL-USED ,W?FLOAT ,W?FREEZE>>
		         <COND (<EQUAL? ,SPELL-USED ,W?FLOAT>
		                <TELL
"You can't reach that. It's floating above your head." CR>)
		               (T
		                <TELL "It seems rooted to the spot." CR>)>
		         <RFALSE>))
		      (T
		       '(<NULL-F>
			 <RFALSE>))>
	       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>
		     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>
		;"Kludge for parser calling itake"
		<RFALSE>)
	       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>
		     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> ,LOAD-ALLOWED>>
		<COND (.VB
		       <TELL "Your load is too heavy">
		       <COND (<L? ,LOAD-ALLOWED ,LOAD-MAX>
			      <TELL", especially in light of your condition.">)
			     (T
			      <TELL ".">)>
		       <CRLF>)>
		<RFATAL>)
	       (<AND <VERB? TAKE>
		     <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>
		     <PROB <* .CNT ,FUMBLE-PROB>>>
		<TELL
"You're holding too many things already!" CR>
		<RFALSE>)
	       (T
		<MOVE ,PRSO ,WINNER>
		<FCLEAR ,PRSO ,NDESCBIT>
		<FSET ,PRSO ,TOUCHBIT>
		%<COND (<==? ,ZORK-NUMBER 2>
			'<COND (<EQUAL? ,SPELL? ,S-FILCH>
		                <COND (<RIPOFF ,PRSO ,WIZARD-CASE>
			               <TELL
"When you touch the " D ,PRSO " it immediately disappears!" CR>
			               <RFALSE>)>)>)
		       (T
			'<NULL-F>)>
		%<COND (<OR <==? ,ZORK-NUMBER 1>
			    <==? ,ZORK-NUMBER 2>>
			'<SCORE-OBJ ,PRSO>)
		       (T
			'<NULL-F>)>
		<RTRUE>)>>

<ROUTINE IDROP ()
	 <COND (<AND <NOT <IN? ,PRSO ,WINNER>>
		     <NOT <IN? <LOC ,PRSO> ,WINNER>>>
		<TELL "You're not carrying the " D ,PRSO "." CR>
		<RFALSE>)
	       (<AND <NOT <IN? ,PRSO ,WINNER>>
		     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>
		<TELL "The " D ,PRSO " is closed." CR>
		<RFALSE>)
	       (T
		<MOVE ,PRSO <LOC ,WINNER>>
		<RTRUE>)>>

<ROUTINE CCOUNT (OBJ "AUX" (CNT 0) X)
	 <COND (<SET X <FIRST? .OBJ>>
		<REPEAT ()
			<COND (<NOT <FSET? .X ,WEARBIT>>
			       <SET CNT <+ .CNT 1>>)>
			<COND (<NOT <SET X <NEXT? .X>>>
			       <RETURN>)>>)>
	 .CNT>

<ROUTINE WEIGHT (OBJ "AUX" CONT (WT 0))
	 <COND (<SET CONT <FIRST? .OBJ>>
		<REPEAT ()
			<COND (<AND <EQUAL? .OBJ ,PLAYER>
				    <FSET? .CONT ,WEARBIT>>
			       <SET WT <+ .WT 1>>)
			      (T
			       <SET WT <+ .WT <WEIGHT .CONT>>>)>
			<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>
	 <+ .WT <GETP .OBJ ,P?SIZE>>>

"Miscellaneous"

<CONSTANT REXIT 0>
<CONSTANT UEXIT 1>
<CONSTANT NEXIT 2>
<CONSTANT FEXIT 3>
<CONSTANT CEXIT 4>
<CONSTANT DEXIT 5>

<CONSTANT NEXITSTR 0>
<CONSTANT FEXITFCN 0>
<CONSTANT CEXITFLAG 1>
<CONSTANT CEXITSTR 1>
<CONSTANT DEXITOBJ 1>
<CONSTANT DEXITSTR 1>

<GLOBAL INDENTS
	<TABLE (PURE)
	       ""
	       "  "
	       "    "
	       "      "
	       "        "
	       "          ">>

<ROUTINE HACK-HACK (STR)
	 <COND (<AND <IN? ,PRSO ,GLOBAL-OBJECTS>
		     <VERB? WAVE RAISE LOWER>>
		<TELL "The " D ,PRSO " isn't here!" CR>)
	       (T
		<TELL .STR D ,PRSO <PICK-ONE ,HO-HUM> CR>)>>

<GLOBAL HO-HUM
	<LTABLE
	 0
	 " doesn't seem to work."
	 " isn't notably helpful."
	 " has no effect.">>

<ROUTINE NO-GO-TELL (AV WLOC)
	 <COND (.AV
		<TELL "You can't go there in a " D .WLOC ".">)
	       (T
		<TELL "You can't go there without a vehicle.">)>
	 <CRLF>>

<ROUTINE GOTO (RM "OPTIONAL" (V? T)
	       "AUX" (LB <FSET? .RM ,RLANDBIT>) (WLOC <LOC ,WINNER>)
	             (AV <>) OLIT OHERE)
	 <SET OLIT ,LIT>
	 <SET OHERE ,HERE>
	 <COND (<FSET? .WLOC ,VEHBIT>
		<SET AV <GETP .WLOC ,P?VTYPE>>)>
	 <COND (<AND <NOT .LB>
		     <NOT .AV>>
		<NO-GO-TELL .AV .WLOC>
		<RFALSE>)
	       (<AND <NOT .LB>
		     <NOT <FSET? .RM .AV>>>
		<NO-GO-TELL .AV .WLOC>
		<RFALSE>)
	       (<AND <FSET? ,HERE ,RLANDBIT>
		     .LB
		     .AV
		     <NOT <EQUAL? .AV ,RLANDBIT>>
		     <NOT <FSET? .RM .AV>>>
		<NO-GO-TELL .AV .WLOC>
		<RFALSE>)
	       (<FSET? .RM ,RMUNGBIT>
		<TELL <GETP .RM ,P?LDESC> CR>
		<RFALSE>)
	       (T
		<COND (<AND .LB
			    <NOT <FSET? ,HERE ,RLANDBIT>>
			    <NOT ,DEAD>
			    <FSET? .WLOC ,VEHBIT>>
		       %<COND (<==? ,ZORK-NUMBER 1>
			       '<TELL
"The " D .WLOC " comes to a rest on the shore." CR CR>)
			      (<==? ,ZORK-NUMBER 2>
			       '<COND (<EQUAL? .WLOC ,BALLOON>
				       <TELL
"The balloon lands." CR>)
				      (<FSET? .WLOC ,VEHBIT>
				       <TELL
"The " D .WLOC " comes to a stop." CR CR>)>)
			      (<==? ,ZORK-NUMBER 3>
			       '<COND (<FSET? .WLOC ,VEHBIT>
				       <TELL
"The " D .WLOC " comes to a stop." CR CR>)>)>)>
		<COND (.AV
		       <MOVE .WLOC .RM>)
		      (T
		       <MOVE ,WINNER .RM>)>
		<SETG HERE .RM>
		<SETG LIT <LIT? ,HERE>>
		<COND (<AND <NOT .OLIT>
			    <NOT ,LIT>
			    <PROB 80>>
		       <COND (,SPRAYED?
			      <TELL
"There are sinister gurgling noises in the darkness all around you!" CR>)
			     %<COND (<==? ,ZORK-NUMBER 3>
				     '(<EQUAL? ,HERE ,DARK-1 ,DARK-2>
		                       <JIGS-UP
"Oh, no! Dozen of lurking grues attack and devour you! You must have
stumbled into an authentic grue lair!">))
				    (T
				     '(<NULL-F>
				       <RFALSE>))>
			     (T
			      <TELL
"Oh, no! A lurking grue slithered into the ">
			      <COND (<FSET? <LOC ,WINNER> ,VEHBIT>
				     <TELL D <LOC ,WINNER>>)
				    (T <TELL "room">)>
			      <JIGS-UP " and devoured you!">
			      <RTRUE>)>)>
		<COND (<AND <NOT ,LIT>
			    <EQUAL? ,WINNER ,ADVENTURER>>
		       <TELL "You have moved into a dark place." CR>
		       <SETG P-CONT <>>)>
		<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>
		<SCORE-OBJ .RM>
		<COND (<NOT <EQUAL? ,HERE .RM>> <RTRUE>)
		      (<AND <NOT <EQUAL? ,ADVENTURER ,WINNER>>
			    <IN? ,ADVENTURER .OHERE>>
		       <TELL "The " D ,WINNER " leaves the room." CR>)
		      %<COND (<==? ,ZORK-NUMBER 1>
			      '(<AND <EQUAL? ,HERE .OHERE>
				      ;"no double description"
				     <EQUAL? ,HERE ,ENTRANCE-TO-HADES>>
				<RTRUE>))
			     (ELSE
			      '(<NULL-F> <RTRUE>))>
		      (<AND .V?
			    <EQUAL? ,WINNER ,ADVENTURER>>
		       <V-FIRST-LOOK>)>
		<RTRUE>)>>

<ROUTINE LKP (ITM TBL "AUX" (CNT 0) (LEN <GET .TBL 0>))
	 <REPEAT ()
		 <COND (<G? <SET CNT <+ .CNT 1>> .LEN>
			<RFALSE>)
		       (<EQUAL? <GET .TBL .CNT> .ITM>
			<COND (<EQUAL? .CNT .LEN> <RFALSE>)
			      (T
			       <RETURN <GET .TBL <+ .CNT 1>>>)>)>>>

<ROUTINE DO-WALK (DIR)
	 <SETG P-WALK-DIR .DIR>
	 <PERFORM ,V?WALK .DIR>>

;<ROUTINE WORD-TYPE (OBJ WORD "AUX" SYNS)
	 <ZMEMQ .WORD
		<SET SYNS <GETPT .OBJ ,P?SYNONYM>>
		<- </ <PTSIZE .SYNS> 2> 1>>>

<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 "AUX" TX)
	 <COND (<SET TX <GETPT .OBJ2 ,P?GLOBAL>>
		<ZMEMQB .OBJ1 .TX <- <PTSIZE .TX> 1>>)>> 

<ROUTINE FIND-IN (WHERE WHAT "AUX" W)
	 <SET W <FIRST? .WHERE>>
	 <COND (<NOT .W>
		<RFALSE>)>
	 <REPEAT ()
		 <COND (<AND <FSET? .W .WHAT>
			     <NOT <EQUAL? .W ,ADVENTURER>>>
			<RETURN .W>)
		       (<NOT <SET W <NEXT? .W>>>
			<RETURN <>>)>>>


;<ROUTINE IN-HERE? (OBJ)
	 <OR <IN? .OBJ ,HERE>
	     <GLOBAL-IN? .OBJ ,HERE>>>

<ROUTINE HELD? (CAN)
	 <REPEAT ()
		 <SET CAN <LOC .CAN>>
		 <COND (<NOT .CAN> <RFALSE>)
		       (<EQUAL? .CAN ,WINNER> <RTRUE>)>>>

<ROUTINE OTHER-SIDE (DOBJ "AUX" (P 0) TX) ;"finds room beyond given door"
	 <REPEAT ()
		 <COND (<L? <SET P <NEXTP ,HERE .P>> ,LOW-DIRECTION>
			<RETURN <>>)
		       (ELSE
			<SET TX <GETPT ,HERE .P>>
			<COND (<AND <EQUAL? <PTSIZE .TX> ,DEXIT>
				    <EQUAL? <GETB .TX ,DEXITOBJ> .DOBJ>>
			       <RETURN .P>)>)>>>

<ROUTINE MUNG-ROOM (RM STR)
	 %<COND (<==? ,ZORK-NUMBER 2>
		 '<COND (<EQUAL? .RM ,INSIDE-BARROW>
			 <RFALSE>)>)
		(ELSE T)>
	 <FSET .RM ,RMUNGBIT>
	 <PUTP .RM ,P?LDESC .STR>>

<ROUTINE THIS-IS-IT (OBJ)
	 <SETG P-IT-OBJECT .OBJ>>

<COND (<N==? ,ZORK-NUMBER 3>
       <GLOBAL SWIMYUKS
	       <LTABLE 0 "You can't swim in the dungeon.">>)>

<GLOBAL HELLOS
	<LTABLE 0 "Hello."
	       "Good day."
	       "Nice weather we've been having lately."
	       "Goodbye.">>

<GLOBAL YUKS
	<LTABLE
	 0
	 "A valiant attempt."
	 "You can't be serious."
	 ;"Not bloody likely."
	 "An interesting idea..."
	 "What a concept!">>

<GLOBAL DUMMY
	<LTABLE 0 
		"Look around."
	        "Too late for that."
	        "Have your eyes checked.">>
```
