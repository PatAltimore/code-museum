---
title: "main.zil"
program: "Zork III"
program_slug: "zork3"
file_path: "main.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork3/blob/master/main.zil"
year: 1982
author: "Blank, Lebling, Daniels, Anderson"
slug: "main"
order: 14
description: "An earlier main loop and PERFORM, with six handlers, no container hook and the move counter kept in the loop."

summary:
  - point: "The loop increments MOVES itself and remembers the last command for AGAIN"
    link: "https://en.wikipedia.org/wiki/Interactive_fiction"
    link_label: "Interactive fiction"
  - point: "PERFORM tries six handlers in order; the shipped version has seven and a not-here object"
    link: "https://en.wikipedia.org/wiki/Zork_III"
    link_label: "Zork III"

enhancements:
  - id: "old-constants"
    line_start: 6
    line_end: 26
    title: "Message Codes Before M-END Had a Number"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "The constants are the protocol between the engine and room routines, as in the generic file. A few values differ. M-END, the message sent to a room after a turn, is false here, where the generic file gives it the number 6. M-FLASH and M-OBJDESC are present and have the same numbers. The shipped design numbered the message so a room routine can tell it from an ordinary false return."
  - id: "old-main-loop"
    line_start: 29
    line_end: 93
    title: "A Single Loop With the Counter Inside"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "MAIN-LOOP calls the parser and works out how many objects the command names, like the generic loop, but it is one long REPEAT instead of a loop that calls a helper routine each turn. For a command with several objects it prints each object's name and a colon and runs PERFORM for every pair. It then saves the verb and objects into L-PRSA, L-PRSO and L-PRSI, unless the verb is one of AGAIN, WALK, SAVE, RESTORE, SCORE, VERSION or WAIT, so that AGAIN can repeat the last real command. And it adds one to MOVES itself. In the shipped version the clock does the counting, AGAIN is handled in the parser, and the save of the last command is commented out of the generic loop. The CLOCKER call at the end skips the same meta verbs, such as SAVE and QUIT."
  - id: "old-perform"
    line_start: 101
    line_end: 134
    title: "PERFORM With Six Handlers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "The old PERFORM remembers the last object and the room it was in, P-IT-LOC, so that 'it' fails with 'I don't see what you are referring to' once the player has moved away. It then offers the command to the actor, the room's M-BEG hook, the pre-action for the verb, the indirect object, the direct object and finally the default verb. The generic version adds a container handler between the indirect and direct objects, and a NOT-HERE-OBJECT check before everything. At the end the old routine calls the room again with M-END, after clearing PRSO if the player is inside the object it named. Six steps in a fixed order gave Zork III its object-first design: a puzzle object can intercept any verb without the verb routine knowing."
---

```lisp
"MAIN3 for
		 Zork III: The Dungeon Master
	Copyright 1982 Infocom, Inc.  All Rights Reserved.
"

<GLOBAL PLAYER <>>

<GLOBAL P-WON <>>

<CONSTANT M-FATAL 2>
 
<CONSTANT M-HANDLED 1>   
 
<CONSTANT M-NOT-HANDLED <>>   
 
<CONSTANT M-BEG 1>  
 
<CONSTANT M-END <>> 
 
<CONSTANT M-ENTER 2>
 
<CONSTANT M-LOOK 3> 
 
<CONSTANT M-FLASH 4>

<CONSTANT M-OBJDESC 5>    


<ROUTINE MAIN-LOOP ("AUX" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP) 
   #DECL ((CNT OCNT ICNT NUM) FIX (V) <OR 'T FIX FALSE> (OBJ) <OR FALSE OBJECT>
	  (OBJ1) OBJECT (TBL) TABLE (PTBL) <OR FALSE ATOM>)
   <REPEAT ()
     <SET CNT 0>
     <SET OBJ <>>
     <SET PTBL T>
     <COND (<SETG P-WON <PARSER>>
	    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>
	    <SET NUM
		 <COND (<0? <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>> .OCNT)
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
	    <COND (<==? ,PRSA ,V?WALK> <SET V <PERFORM ,PRSA ,PRSO>>)
		  (<0? .NUM>
		   <COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>
			  <SET V <PERFORM ,PRSA>>
			  <SETG PRSO <>>)
			 (<NOT ,LIT>
			  <TELL "It's too dark to see." CR>)
			 (T
			  <TELL "There isn't anything to ">
			  <SET TMP <GET ,P-ITBL ,P-VERBN>>
			  <COND (,P-OFLAG
				 <PRINTB <GET .TMP 0>>)
				(T
				 <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>
			  <TELL "!" CR>
			  <SET V <>>)>)
		  (T
		   <REPEAT ()
			   <COND (<G? <SET CNT <+ .CNT 1>> .NUM> <RETURN>)
				 (T
				  <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)
					(T <SET OBJ1 <GET ,P-PRSI .CNT>>)>
				  <COND (<G? .NUM 1>
					 <PRINTD .OBJ1>
					 <TELL ": ">)>
				  <SETG PRSO <COND (.PTBL .OBJ1) (T .OBJ)>>
				  <SETG PRSI <COND (.PTBL .OBJ) (T .OBJ1)>>
				  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>
				  <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>
	    <COND (<VERB? AGAIN WALK SAVE RESTORE SCORE VERSION WAIT> T)
		  (T
		   <SETG L-PRSA ,PRSA>
		   <SETG L-PRSO ,PRSO>
		   <SETG L-PRSI ,PRSI>)>
	    <SETG MOVES <+ ,MOVES 1>>
	    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)
	   (T
	    <SETG P-CONT <>>)>
     <COND (,P-WON
	    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE SAVE VERSION
			  QUIT RESTART SCORE SCRIPT UNSCRIPT RESTORE> T)
		  (T <SET V <CLOCKER>>)>)>>>
 
<GLOBAL L-PRSA <>>  
 
<GLOBAL L-PRSO <>>  
 
<GLOBAL L-PRSI <>>  

<ROUTINE PERFORM (A "OPTIONAL" (O <>) (I <>) "AUX" V OA OO OI) 
	#DECL ((A) FIX (O) <OR FALSE OBJECT FIX> (I) <OR FALSE OBJECT> (V) ANY)
	<SET OA ,PRSA>
	<SET OO ,PRSO>
	<SET OI ,PRSI>
	<COND (<AND <EQUAL? ,IT .I .O>
		    <NOT <EQUAL? ,P-IT-LOC ,HERE>>>
	       <TELL "I don't see what you are referring to." CR>
	       <RFATAL>)>
	<COND (<==? .O ,IT> <SET O ,P-IT-OBJECT>)>
	<COND (<==? .I ,IT> <SET I ,P-IT-OBJECT>)>
	<SETG PRSA .A>
	<SETG PRSO .O>
	<COND (<AND ,PRSO <NOT <VERB? WALK>>>
	       <SETG P-IT-OBJECT ,PRSO>
	       <SETG P-IT-LOC ,HERE>)>
	<SETG PRSI .I>
	<COND (<SET V <APPLY <GETP ,WINNER ,P?ACTION>>> .V)
	      (<SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-BEG>> .V)
	      (<SET V <APPLY <GET ,PREACTIONS .A>>> .V)
	      (<AND .I <SET V <APPLY <GETP .I ,P?ACTION>>>> .V)
	      (<AND .O
		    <NOT <==? .A ,V?WALK>>
		    <SET V <APPLY <GETP .O ,P?ACTION>>>>
	       .V)
	      (<SET V <APPLY <GET ,ACTIONS .A>>> .V)>
	<COND (<NOT <==? .V ,M-FATAL>>
	       <COND (<==? <LOC ,WINNER> ,PRSO>
		      <SETG PRSO <>>)>
	       <SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>
	<SETG PRSA .OA>
	<SETG PRSO .OO>
	<SETG PRSI .OI>
	.V>  
 
```
