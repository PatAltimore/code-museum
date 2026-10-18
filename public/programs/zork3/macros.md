---
title: "macros.zil"
program: "Zork III"
program_slug: "zork3"
file_path: "macros.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork3/blob/master/macros.zil"
year: 1982
author: "Blank, Lebling, Daniels, Anderson"
slug: "macros"
order: 11
description: "An earlier macro file for Zork III alone, before the trilogy shared one generic library."

summary:
  - point: "This 1982 file is a smaller ancestor of the generic gmacros"
    link: "https://en.wikipedia.org/wiki/Z-machine"
    link_label: "Z-machine"
  - point: "Its VERB? macro handles only verbs, with none of the PRSO? and ROOM? siblings"
    link: "https://en.wikipedia.org/wiki/Parsing"
    link_label: "Parsing"

enhancements:
  - id: "old-tell"
    line_start: 11
    line_end: 49
    title: "TELL Before PRINTA"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "This is the first form of the TELL macro that the generic file later extended. It handles the same keywords, D or DESC or OBJ to print an object's name, N for a number, C for a character, CR for a line break, and any other atom as a property to print, and it prints strings with PRINTI. What it lacks is the A or AN keyword that prints an object with its article, and it does not accept the newer ZSTRING type. Everything else is the same, down to the error raised when a keyword has no value. The header calls the game 'The Great Underground Empire (Part 3)', so this copy was labelled for Zork III alone."
  - id: "old-verb"
    line_start: 51
    line_end: 65
    title: "VERB? With Three Alternatives per Test"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parsing"
    image_url: ""
    image_caption: ""
    content: "VERB? turns a list of verb names into tests of PRSA. It gathers the alternatives in threes, because the Z-machine's equality test takes a value and up to three candidates, and joins the groups with OR. The generic macro file later generalized this into a shared helper, MULTIFROB, that also serves PRSO?, PRSI? and ROOM?; here only VERB? exists. The macro builds each name by adding the prefix V? to the atom, so VERB? OPEN means a test against the constant V?OPEN. Because the verb constants are generated from the syntax table, a misspelled verb fails when the game is built, not when it is played."
  - id: "old-helpers"
    line_start: 67
    line_end: 96
    title: "RFATAL, PROB and a Simpler PICK-ONE"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "RFATAL returns the fatal code 2 from a routine, PROB turns a percentage into a random test, and ENABLE and DISABLE set or clear a clock record's flag. ZPROB is the same luck-dependent roll as in the generic file: with LUCKY set the dice are out of 100, and without it out of 300. The notable difference is PICK-ONE. Here it is one line that picks a random element of a table, so the same message can appear twice in a row, whereas the generic version shuffles its table so that every message is used before any repeats."
---

```lisp
"MACROS for
		     Zork III: The Dungeon Master 
		 The Great Underground Empire (Part 3)
	(c) Copyright 1982 Infocom, Inc.  All Rights Reserved.
"

<SETG C-ENABLED? 0>
<SETG C-ENABLED 1>
<SETG C-DISABLED 0>

<DEFMAC TELL ("ARGS" A)
	<FORM PROG ()
	      !<MAPF ,LIST
		     <FUNCTION ("AUX" E P O)
			  <COND (<EMPTY? .A> <MAPSTOP>)
				(<SET E <NTH .A 1>>
				 <SET A <REST .A>>)>
			  <COND (<TYPE? .E ATOM>
				 <COND (<OR <=? <SET P <SPNAME .E>>
						"CRLF">
					    <=? .P "CR">>
					<MAPRET '<CRLF>>)
				       (<EMPTY? .A>
					<ERROR INDICATOR-AT-END? .E>)
				       (ELSE
					<SET O <NTH .A 1>>
					<SET A <REST .A>>
					<COND (<OR <=? <SET P <SPNAME .E>>
						       "DESC">
						   <=? .P "D">
						   <=? .P "OBJ">
						   <=? .P "O">>
					       <MAPRET <FORM PRINTD .O>>)
					      (<OR <=? .P "NUM">
						   <=? .P "N">>
					       <MAPRET <FORM PRINTN .O>>)
					      (<OR <=? .P "CHAR">
						   <=? .P "CHR">
						   <=? .P "C">>
					       <MAPRET <FORM PRINTC .O>>)
					      (ELSE
					       <MAPRET
						 <FORM PRINT
						       <FORM GETP .O .E>>>)>)>)
				(<TYPE? .E STRING>
				 <MAPRET <FORM PRINTI .E>>)
				(<TYPE? .E FORM>
				 <MAPRET <FORM PRINT .E>>)
				(ELSE <ERROR UNKNOWN-TYPE .E>)>>>>>

<DEFMAC VERB? ("TUPLE" ATMS "AUX" (O ()) (L ())) 
	<REPEAT ()
		<COND (<EMPTY? .ATMS>
		       <RETURN!- <COND (<LENGTH? .O 1> <NTH .O 1>)
				     (ELSE <FORM OR !.O>)>>)>
		<REPEAT ()
			<COND (<EMPTY? .ATMS> <RETURN!->)>
			<SET ATM <NTH .ATMS 1>>
			<SET L
			     (<FORM GVAL <PARSE <STRING "V?" <SPNAME .ATM>>>>
			      !.L)>
			<SET ATMS <REST .ATMS>>
			<COND (<==? <LENGTH .L> 3> <RETURN!->)>>
		<SET O (<FORM EQUAL? ',PRSA !.L> !.O)>
		<SET L ()>>>

<DEFMAC RFATAL ()
	'<PROG () <PUSH 2> <RSTACK>>>

<DEFMAC PROB ('BASE? "OPTIONAL" 'LOSER?)
	<COND (<ASSIGNED? LOSER?> <FORM ZPROB .BASE?>)
	      (ELSE <FORM G? .BASE? '<RANDOM 100>>)>>

<ROUTINE ZPROB
	 (BASE)
	 <COND (,LUCKY <G? .BASE <RANDOM 100>>)
	       (ELSE <G? .BASE <RANDOM 300>>)>>

<ROUTINE PICK-ONE (FROB)
	 <GET .FROB <RANDOM <GET .FROB 0>>>>

<DEFMAC ENABLE ('INT) <FORM PUT .INT ,C-ENABLED? 1>>

<DEFMAC DISABLE ('INT) <FORM PUT .INT ,C-ENABLED? 0>>

<DEFMAC FLAMING? ('OBJ)
	<FORM AND <FORM FSET? .OBJ ',FLAMEBIT>
	          <FORM FSET? .OBJ ',ONBIT>>>

<DEFMAC OPENABLE? ('OBJ)
	<FORM OR <FORM FSET? .OBJ ',DOORBIT>
	         <FORM FSET? .OBJ ',CONTBIT>>> 

<DEFMAC ABS ('NUM)
	<FORM COND (<FORM L? .NUM 0> <FORM - 0 .NUM>)
	           (T .NUM)>>
```
