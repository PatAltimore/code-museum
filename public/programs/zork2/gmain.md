---
title: "gmain.zil"
program: "Zork II"
program_slug: "zork2"
file_path: "gmain.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork2/blob/master/gmain.zil"
year: 1981
author: "Blank, Lebling, Daniels, Anderson"
slug: "gmain"
order: 7
description: "The game's heartbeat: read a command, run it against each object it names, then let the clock tick."

summary:
  - point: "MAIN-LOOP calls the parser, runs the action once per named object, then advances the clock"
    link: "https://en.wikipedia.org/wiki/Event_loop"
    link_label: "Event loop"
  - point: "PERFORM tries up to seven handlers in a fixed order and stops at the first that claims the action"
    link: "https://en.wikipedia.org/wiki/Zork_II"
    link_label: "Zork II"
  - point: "Compile-time conditionals let one library file serve all three Zork games"
    link: "https://en.wikipedia.org/wiki/Z-machine"
    link_label: "Z-machine"

enhancements:
  - id: "message-constants"
    line_start: 5
    line_end: 29
    title: "The Vocabulary of Room Messages"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "These constants are the message codes passed between the engine and a room's action routine. M-BEG runs before a verb is handled so a room can intercept it, M-ENTER runs on arrival, M-LOOK prints the room description, M-FLASH and M-OBJDESC cover other occasions in room and object description, and M-END runs after the turn. M-FATAL and M-HANDLED are return values: handled means the routine took care of the action, and fatal means the whole command line should stop, as when the player dies. The header says this generic MAIN file was started on 28 July 1983 by Marc Blank, which dates the work: the Zork games were by then several years old and Infocom was merging three code bases into one shared library for the trilogy. Using small numbers for protocol messages is typical of the era, since a Z-machine routine receives them as a single argument and a COND tests them cheaply."
  - id: "main-loop"
    line_start: 34
    line_end: 36
    title: "An Infinite Loop Is the Whole Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Event_loop"
    image_url: ""
    image_caption: ""
    content: "MAIN-LOOP is two lines: repeat forever, calling MAIN-LOOP-1 and ignoring its result. There is no explicit exit because the game ends elsewhere, through the QUIT and RESTART verbs, which hand control back to the interpreter. Everything the player experiences, from the prompt to the closing score, happens inside one turn of this loop. Keeping the loop trivial and the work in a named routine also made it easier to debug, since a single turn could be traced without untangling control flow. The structure is the same shape as the event loops that still drive graphical programs today, and it sat at the heart of every Infocom game."
  - id: "it-pronoun"
    line_start: 45
    line_end: 64
    title: "Resolving the Word 'It'"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parsing"
    image_url: ""
    image_caption: ""
    content: "After the parser succeeds, the loop replaces any occurrence of the placeholder object IT with the last thing the player referred to, stored in P-IT-OBJECT, but only if that object is still accessible. It checks the indirect-object table first and, if no substitution was made there, the direct-object table. This is why a player could type 'take the lamp' and then 'turn it on', a convenience that many earlier adventures did not offer. The check for accessibility prevents the pronoun from reaching across the map to an object the player walked away from. The substitution is done late, after parsing, so the parser itself only needs to recognize IT as a noun."
  - id: "object-counts"
    line_start: 65
    line_end: 90
    title: "How Many Things Did the Player Mention?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "NUM works out which table drives the repeat loop. If the direct object table holds more than one entry, such as 'take lamp and sword', that table drives it; if instead the indirect table holds several, the roles are swapped and PTBL records which table is which. If a command names no objects at all, the loop either performs the action with none, for a verb like LOOK, complains that it is too dark, or reports that the player's reference is unclear. The first test sends a directional move straight to PERFORM with the direction as the object. Treating a verb with zero, one or many objects through the same path avoided writing special cases for each verb, and is the reason a verb handler in gverbs only ever sees one object at a time."
  - id: "multiple-objects"
    line_start: 96
    line_end: 150
    title: "One Verb, Many Objects: The ALL Loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "For commands that name several objects, the loop runs PERFORM once for each. Before each run it sets PRSO and PRSI to the current pair and, when the player typed 'all', prints the object's name and a colon so the output reads as a list. The block between the 'multiple exceptions' comments skips objects that make no sense for the verb. A hidden or distant item is skipped, as are things the player can not take, and objects missing from the room are counted and reported once at the end with a message such as 'The other object that you mentioned isn't here'. If any handler returns M-FATAL the loop stops immediately. This is how 'take all' picks up only what is takeable instead of reporting an error for every fixture in the room, a small piece of polish that players noticed even when they did not know how it worked."
  - id: "end-of-turn"
    line_start: 151
    line_end: 172
    title: "End of Turn: Room Hook and Clock"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "When the command is finished the loop calls the room's action routine with M-END, letting the room react to what just happened. Then, if the parse succeeded and the verb is not one of the meta commands such as SAVE, RESTORE, SCORE, QUIT or VERBOSE, it calls CLOCKER so time passes. Commands that talk about the game rather than act in it cost no turn, a courtesy to the player. A compile-time conditional on ZORK-NUMBER, written with the MDL percent sign, inserts extra code only when building Zork III: it queues the I-CLEFT event the first time through. Because the test is evaluated when the ZIL source is compiled, the other two games contain none of that code. This is how one shared file could serve three different games without bloating any story file."
  - id: "perform-dispatch"
    line_start: 235
    line_end: 288
    title: "PERFORM: Who Gets the First Say?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "PERFORM is the dispatcher that every command goes through, including those the game issues on the player's behalf. It saves the previous values of PRSA, PRSO and PRSI, replaces IT, records the last direct object for later pronouns, and then offers the action to a fixed chain of handlers: the actor, the room's M-BEG hook, a table of pre-actions for the verb, the indirect object, the container of the direct object, the direct object itself and finally the default verb routine. The first one that returns non-false stops the chain. That precedence rule is the heart of Infocom's design, because an object-specific routine can override any default verb. A cursed sword can refuse to be dropped without touching the drop verb; a room can forbid all fighting. At the end PERFORM restores the saved variables so a nested call, such as an implicit take, does not corrupt the outer command. The debug version shown here prints each stage when DEBUG is set, which is how the authors traced who was handling what."
  - id: "d-apply"
    line_start: 290
    line_end: 311
    title: "D-APPLY: A Tracing Wrapper"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "D-APPLY calls a handler if one exists and, when the DEBUG global is on, prints the stage name and whether the handler reported 'Handled', 'Not handled' or 'Fatal'. DD-APPLY adds the owning object's name first. They are written with DEFINE, the MDL form, rather than ROUTINE. The other PERFORM variant, selected by the GASSIGNED? PREDGEN test at line 180, has its debug printing commented out and calls no tracing wrapper. Such a debug flag was a practical necessity: with dozens of objects each potentially claiming a verb, the only way to find the one that swallowed a command was to watch the chain run."
---

```lisp
			"Generic MAIN file for
			    The ZORK Trilogy
		       started on 7/28/83 by MARC"

<CONSTANT SERIAL 0>

<GLOBAL PLAYER <>>

<GLOBAL P-WON <>>

<CONSTANT M-FATAL 2>
 
<CONSTANT M-HANDLED 1>   
 
<CONSTANT M-NOT-HANDLED <>>   
 
<CONSTANT M-OBJECT <>>

<CONSTANT M-BEG 1>  
 
<CONSTANT M-END 6> 
 
<CONSTANT M-ENTER 2>
 
<CONSTANT M-LOOK 3> 
 
<CONSTANT M-FLASH 4>

<CONSTANT M-OBJDESC 5>

;"GO now lives in SPECIAL.ZIL"    


<ROUTINE MAIN-LOOP ("AUX" TRASH)
	 <REPEAT ()
		 <SET TRASH <MAIN-LOOP-1>>>>

<ROUTINE MAIN-LOOP-1 ("AUX" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP O I) 
     <SET CNT 0>
     <SET OBJ <>>
     <SET PTBL T>
     <COND (<SETG P-WON <PARSER>>
	    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>
	    <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>
	    <COND (<AND ,P-IT-OBJECT <ACCESSIBLE? ,P-IT-OBJECT>>
		   <SET TMP <>>
		   <REPEAT ()
			   <COND (<G? <SET CNT <+ .CNT 1>> .ICNT>
				  <RETURN>)
				 (T
				  <COND (<EQUAL? <GET ,P-PRSI .CNT> ,IT>
					 <PUT ,P-PRSI .CNT ,P-IT-OBJECT>
					 <SET TMP T>
					 <RETURN>)>)>>
		   <COND (<NOT .TMP>
			  <SET CNT 0>
			  <REPEAT ()
			   <COND (<G? <SET CNT <+ .CNT 1>> .OCNT>
				  <RETURN>)
				 (T
				  <COND (<EQUAL? <GET ,P-PRSO .CNT> ,IT>
					 <PUT ,P-PRSO .CNT ,P-IT-OBJECT>
					 <RETURN>)>)>>)>
		   <SET CNT 0>)>
	    <SET NUM
		 <COND (<0? .OCNT> .OCNT)
		       (<G? .OCNT 1>
			<SET TBL ,P-PRSO>
			<COND (<0? .ICNT> <SET OBJ <>>)
			      (T <SET OBJ <GET ,P-PRSI 1>>)>
			.OCNT)
		       (<G? .ICNT 1>
			<SET PTBL <>>
			<SET TBL ,P-PRSI>
			<SET OBJ <GET ,P-PRSO 1>>
			.ICNT)
		       (T 1)>>
	    <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>
	    <COND (<AND <==? ,PRSA ,V?WALK>
			<NOT <ZERO? ,P-WALK-DIR>>>
		   <SET V <PERFORM ,PRSA ,PRSO>>)
		  (<0? .NUM>
		   <COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>
			  <SET V <PERFORM ,PRSA>>
			  <SETG PRSO <>>)
			 (<NOT ,LIT>
			  <TELL "It's too dark to see." CR>)
			 (T
			  <TELL "It's not clear what you're referring to." CR>
			  <SET V <>>)>)
		  (T
		   <SETG P-NOT-HERE 0>
		   <SETG P-MULT <>>
		   <COND (<G? .NUM 1> <SETG P-MULT T>)>
		   <SET TMP <>>
		   <REPEAT ()
			   <COND (<G? <SET CNT <+ .CNT 1>> .NUM>
				  <COND (<G? ,P-NOT-HERE 0>
					 <TELL "The ">
					 <COND (<NOT <EQUAL? ,P-NOT-HERE .NUM>>
						<TELL "other ">)>
					 <TELL "object">
					 <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>
						<TELL "s">)>
					 <TELL " that you mentioned ">
					 <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>
						<TELL "are">)
					       (T <TELL "is">)>
					 <TELL "n't here." CR>)
					(<NOT .TMP>
					 <TELL
"There's nothing here you can take." CR>)>
				  <RETURN>)
				 (T
				  <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)
					(T <SET OBJ1 <GET ,P-PRSI .CNT>>)>
				  <SET O <COND (.PTBL .OBJ1) (T .OBJ)>>
				  <SET I <COND (.PTBL .OBJ) (T .OBJ1)>>

;"multiple exceptions"
<COND (<OR <G? .NUM 1>
	   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0> ,W?ALL>>
       <SET V <LOC ,WINNER>>
       <COND (<EQUAL? .O ,NOT-HERE-OBJECT>
	      <SETG P-NOT-HERE <+ ,P-NOT-HERE 1>>
	      <AGAIN>)
	     (<AND <VERB? TAKE>
		   .I
		   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0> ,W?ALL>
		   <NOT <IN? .O .I>>>
	      <AGAIN>)
	     (<AND <EQUAL? ,P-GETFLAGS ,P-ALL>
		   <VERB? TAKE>
		   <OR <AND <NOT <EQUAL? <LOC .O> ,WINNER ,HERE .V>>
			    <NOT <EQUAL? <LOC .O> .I>>
			    <NOT <FSET? <LOC .O> ,SURFACEBIT>>>
		       <NOT <OR <FSET? .O ,TAKEBIT>
				<FSET? .O ,TRYTAKEBIT>>>>>
	      <AGAIN>)
	     (ELSE
	      <COND (<EQUAL? .OBJ1 ,IT>
		     <PRINTD ,P-IT-OBJECT>)
		    (T <PRINTD .OBJ1>)>
	      <TELL ": ">)>)>
;"end multiple exceptions"
				  <SETG PRSO .O>
				  <SETG PRSI .I>
				  <SET TMP T>
				  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>
				  <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>
	    <COND (<NOT <==? .V ,M-FATAL>>
		   ;<COND (<==? <LOC ,WINNER> ,PRSO>
			  <SETG PRSO <>>)>
		   <SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>
	    ;<COND (<VERB? ;AGAIN ;"WALK -- why was this here?"
			  SAVE RESTORE ;SCORE ;VERSION ;WAIT> T)
		  (T
		   <SETG L-PRSA ,PRSA>
		   <SETG L-PRSO ,PRSO>
		   <SETG L-PRSI ,PRSI>)>
	    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)
	   (T
	    <SETG P-CONT <>>)>
     %<COND (<==? ,ZORK-NUMBER 3>
	     '<COND (<NOT ,CLEFT-QUEUED?>
		     <ENABLE <QUEUE I-CLEFT <+ 70 <RANDOM 70>>>>
		     <SETG CLEFT-QUEUED? T>)>)
	    (ELSE '<NULL-F>)>
     <COND (,P-WON
	    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE SAVE VERSION
			  QUIT RESTART SCORE SCRIPT UNSCRIPT RESTORE> T)
		  (T <SET V <CLOCKER>>)>)>>
 
<GLOBAL P-MULT <>>

<GLOBAL P-NOT-HERE 0>



%<COND (<GASSIGNED? PREDGEN>

'<ROUTINE PERFORM (A "OPTIONAL" (O <>) (I <>) "AUX" V OA OO OI) 
	;<COND (,DEBUG
	       <TELL "[Perform: ">
	       %<COND (<GASSIGNED? PREDGEN> '<TELL N .A>)
		      (T '<PRINC <NTH ,ACTIONS <+ <* .A 2> 1>>>)>
	       <COND (<AND .O <NOT <==? .A ,V?WALK>>>
		      <TELL "/" D .O>)>
	       <COND (.I <TELL "/" D .I>)>
	       <TELL "]" CR>)>
	<SET OA ,PRSA>
	<SET OO ,PRSO>
	<SET OI ,PRSI>
	<COND (<AND <EQUAL? ,IT .I .O>
		    <NOT <ACCESSIBLE? ,P-IT-OBJECT>>>
	       <TELL "I don't see what you are referring to." CR>
	       <RFATAL>)>
	<COND (<==? .O ,IT> <SET O ,P-IT-OBJECT>)>
	<COND (<==? .I ,IT> <SET I ,P-IT-OBJECT>)>
	<SETG PRSA .A>
	<SETG PRSO .O>
	<COND (<AND ,PRSO <NOT <EQUAL? ,PRSI ,IT>> <NOT <VERB? WALK>>>
	       <SETG P-IT-OBJECT ,PRSO>)>
	<SETG PRSI .I>
	<COND (<AND <EQUAL? ,NOT-HERE-OBJECT ,PRSO ,PRSI>
		    <SET V <NOT-HERE-OBJECT-F>>> .V)
	      (T
	       <SET O ,PRSO>
	       <SET I ,PRSI>
	       <COND
		(<SET V <APPLY <GETP ,WINNER ,P?ACTION>>> .V)
		(<SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-BEG>> .V)
		(<SET V <APPLY <GET ,PREACTIONS .A>>> .V)
		(<AND .I <SET V <APPLY <GETP .I ,P?ACTION>>>> .V)
		(<AND .O
		      <NOT <==? .A ,V?WALK>>
		      <LOC .O>
		      <SET V <APPLY <GETP <LOC .O> ,P?CONTFCN>>>>
		 .V)
		(<AND .O
		      <NOT <==? .A ,V?WALK>>
		      <SET V <APPLY <GETP .O ,P?ACTION>>>>
		 .V)
		(<SET V <APPLY <GET ,ACTIONS .A>>> .V)>)>
	<SETG PRSA .OA>
	<SETG PRSO .OO>
	<SETG PRSI .OI>
	.V>)
       (T
	
'<PROG ()

<SETG DEBUG <>>

<ROUTINE PERFORM (A "OPTIONAL" (O <>) (I <>) "AUX" V OA OO OI) 
	#DECL ((A) FIX (O) <OR FALSE OBJECT FIX> (I) <OR FALSE OBJECT> (V) ANY)
	<COND (,DEBUG
	       <TELL "** PERFORM: PRSA = ">
	       <PRINC <NTH ,ACTIONS <+ <* .A 2> 1>>>
	       <COND (<AND .O <NOT <==? .A ,V?WALK>>>
		      <TELL " | PRSO = " D .O>)>
	       <COND (.I <TELL " | PRSI = " D .I>)>)>
	<SET OA ,PRSA>
	<SET OO ,PRSO>
	<SET OI ,PRSI>
	<COND (<AND <EQUAL? ,IT .I .O>
		    <NOT <ACCESSIBLE? ,P-IT-OBJECT>>>
	       <TELL "I don't see what you are referring to." CR>
	       <RFATAL>)>
	<COND (<==? .O ,IT> <SET O ,P-IT-OBJECT>)>
	<COND (<==? .I ,IT> <SET I ,P-IT-OBJECT>)>
	<SETG PRSA .A>
	<SETG PRSO .O>
	<COND (<AND ,PRSO <NOT <VERB? WALK>>>
	       <SETG P-IT-OBJECT ,PRSO>)>
	<SETG PRSI .I>
	<COND (<AND <EQUAL? ,NOT-HERE-OBJECT ,PRSO ,PRSI>
		    <SET V <D-APPLY "Not Here" ,NOT-HERE-OBJECT-F>>> .V)
	      (T
	       <SET O ,PRSO>
	       <SET I ,PRSI>
	       <COND (<SET V <DD-APPLY "Actor" ,WINNER
				      <GETP ,WINNER ,P?ACTION>>> .V)
		     (<SET V <D-APPLY "Room (M-BEG)"
				      <GETP <LOC ,WINNER> ,P?ACTION>
				      ,M-BEG>> .V)
		     (<SET V <D-APPLY "Preaction"
				      <GET ,PREACTIONS .A>>> .V)
		     (<AND .I <SET V <D-APPLY "PRSI"
					      <GETP .I ,P?ACTION>>>> .V)
		     (<AND .O
			   <NOT <==? .A ,V?WALK>>
			   <LOC .O>
			   <GETP <LOC .O> ,P?CONTFCN>
			   <SET V <DD-APPLY "Container" <LOC .O>
					   <GETP <LOC .O> ,P?CONTFCN>>>>
		      .V)
		     (<AND .O
			   <NOT <==? .A ,V?WALK>>
			   <SET V <D-APPLY "PRSO"
					   <GETP .O ,P?ACTION>>>>
		      .V)
		     (<SET V <D-APPLY <>
				      <GET ,ACTIONS .A>>> .V)>)>
	<SETG PRSA .OA>
	<SETG PRSO .OO>
	<SETG PRSI .OI>
	.V>

<DEFINE D-APPLY (STR FCN "OPTIONAL" FOO "AUX" RES)
	<COND (<NOT .FCN> <>)
	      (T
	       <COND (,DEBUG
		      <COND (<NOT .STR>
			     <TELL CR "  Default ->" CR>)
			    (T <TELL CR "  " .STR " -> ">)>)>
	       <SET RES
		    <COND (<ASSIGNED? FOO>
			   <APPLY .FCN .FOO>)
			  (T <APPLY .FCN>)>>
	       <COND (<AND ,DEBUG .STR>
		      <COND (<==? .RES 2>
			     <TELL "Fatal" CR>)
			    (<NOT .RES>
			     <TELL "Not handled">)
			    (T <TELL "Handled" CR>)>)>
	       .RES)>>

<ROUTINE DD-APPLY (STR OBJ FCN "OPTIONAL" (FOO <>))
	<COND (,DEBUG <TELL "[" D .OBJ "=]">)>
	<D-APPLY .STR .FCN .FOO>>
>)>
```
