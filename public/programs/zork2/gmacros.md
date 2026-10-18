---
title: "gmacros.zil"
program: "Zork II"
program_slug: "zork2"
file_path: "gmacros.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork2/blob/master/gmacros.zil"
year: 1981
author: "Blank, Lebling, Daniels, Anderson"
slug: "gmacros"
order: 2
description: "The macro layer: TELL, VERB? and friends, which expand at compile time into Z-machine operations."

summary:
  - point: "DEFMAC defines macros that run in the compiler and return the code to compile"
    link: "https://en.wikipedia.org/wiki/Macro_(computer_science)"
    link_label: "Macro"
  - point: "TELL turns a readable list of strings and keywords into a series of print instructions"
    link: "https://en.wikipedia.org/wiki/Z-machine"
    link_label: "Z-machine"
  - point: "PICK-ONE shuffles a list of messages so none repeats until all have been used"
    link: "https://en.wikipedia.org/wiki/Zork_II"
    link_label: "Zork II"

enhancements:
  - id: "tell-macro"
    line_start: 9
    line_end: 50
    title: "TELL: A Small Language for Printing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Macro_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "TELL is the macro behind nearly every line of game text. It runs inside the compiler and walks its arguments, producing one print instruction for each. A string becomes PRINTI, which prints text stored inline in the code. CR or CRLF becomes a line break. A keyword followed by a value chooses a printer: D or DESC prints an object's short name with PRINTD, A or AN prints it with an article, N prints a number, and C prints a character. Any other atom is treated as a property name, so the property is read from the object and printed. A variable or expression is simply printed. The macro raises an error at compile time if a keyword has no value, which catches typos before they reach a player. Because the expansion happens at build time, the shipped game contains only the plain print instructions, and writers could produce hundreds of messages without paying for a general formatter at run time."
  - id: "verb-macros"
    line_start: 55
    line_end: 89
    title: "VERB? and PRSO?: Readable Tests"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "VERB?, PRSO?, PRSI? and ROOM? all share MULTIFROB. A call such as VERB? TAKE DROP expands into a test that PRSA equals the verb constants V?TAKE or V?DROP; for PRSA it adds the V? prefix automatically. The Z-machine equality instruction takes at most four operands, a value and three candidates, so MULTIFROB groups the alternatives in threes and joins several tests with OR. Hundreds of action routines in 2actions start with a COND of such tests, so this macro is what makes them short and readable. The verb names here are the same ones defined in gsyntax and implemented in gverbs, which is why a typo in a verb name fails the build instead of failing in play."
  - id: "bit-macros"
    line_start: 91
    line_end: 113
    title: "BSET, BCLEAR and BSET?: Flags in Bulk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "Z-machine objects carry a set of single-bit attributes such as OPENBIT or TAKEBIT, and the instructions FSET, FCLEAR and FSET? handle one at a time. These three macros accept any number and expand into the sequence, with FSET? joined by OR. Setting an object to be an open, touchable container becomes a single readable line. MULTIBITS builds the code with the attribute names turned into global values with GVAL. As with the rest of the file, none of this exists at run time; it saves the programmer typing and spares the story file any helper routine."
  - id: "rfatal-and-prob"
    line_start: 115
    line_end: 125
    title: "RFATAL and PROB"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "RFATAL pushes the value 2 and returns it. That value is M-FATAL from the main loop, the signal that stops the rest of a command line. PROB turns a percentage into a random test: PROB 25 compiles to a comparison of 25 against a random number from 1 to 100. If the optional second argument is given, the macro calls ZPROB instead, which uses the global LUCKY to choose the scale. With luck set, the roll is out of 100; without it, out of 300, so the same nominal chance becomes much smaller. It shows how small a mechanism it takes to give a game 'luck'."
  - id: "random-and-pick-one"
    line_start: 127
    line_end: 142
    title: "PICK-ONE: Shuffling Without Repeats"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_II"
    image_url: ""
    image_caption: ""
    content: "RANDOM-ELEMENT picks any entry from a table. PICK-ONE is more careful. The table stores its length and a counter in the first two words, followed by the messages. Each call picks randomly among the messages not yet used, swaps the chosen one into the used region at the front, advances the counter, and wraps to zero when every message has been shown. The effect is a shuffled deck: the game will not repeat a jibe or a description until it has cycled through all of them. That suits pools of flavour text, where the same line twice in a row would make the game feel mechanical. It is the same trick that card shufflers use, in a dozen instructions."
  - id: "small-helpers"
    line_start: 144
    line_end: 157
    title: "ENABLE, DISABLE, FLAMING? and ABS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "ENABLE and DISABLE set or clear the enabled word of a clock record, the first word described in gclock, so a queued event can be switched on or off without removing it. FLAMING? tests whether an object has both the flame and on attributes, which is what makes a lit candle or torch count as a light and a fire source. OPENABLE? is true for doors and containers. ABS expands to an inline comparison and negation. Each is a one-line macro for an idiom used many times."
---

```lisp
"GMACROS for
			    The Zork Trilogy
	 (c) Copyright 1983 Infocom, Inc.  All Rights Reserved"

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
					      (<OR <=? .P "A">
						   <=? .P "AN">>
					       <MAPRET <FORM PRINTA .O>>)
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
				(<TYPE? .E STRING ZSTRING>
				 <MAPRET <FORM PRINTI .E>>)
				(<TYPE? .E FORM LVAL GVAL>
				 <MAPRET <FORM PRINT .E>>)
				(ELSE <ERROR UNKNOWN-TYPE .E>)>>>>>

;<ROUTINE PRINTA (O)
	 <TELL "a " D .O>>

<DEFMAC VERB? ("ARGS" ATMS)
	<MULTIFROB PRSA .ATMS>>

<DEFMAC PRSO? ("ARGS" ATMS)
	<MULTIFROB PRSO .ATMS>>

<DEFMAC PRSI? ("ARGS" ATMS)
	<MULTIFROB PRSI .ATMS>>

<DEFMAC ROOM? ("ARGS" ATMS)
	<MULTIFROB HERE .ATMS>>

<DEFINE MULTIFROB (X ATMS "AUX" (OO (OR)) (O .OO) (L ()) ATM) 
	<REPEAT ()
		<COND (<EMPTY? .ATMS>
		       <RETURN!- <COND (<LENGTH? .OO 1> <ERROR .X>)
				       (<LENGTH? .OO 2> <NTH .OO 2>)
				       (ELSE <CHTYPE .OO FORM>)>>)>
		<REPEAT ()
			<COND (<EMPTY? .ATMS> <RETURN!->)>
			<SET ATM <NTH .ATMS 1>>
			<SET L
			     (<COND (<TYPE? .ATM ATOM>
				     <FORM GVAL
					   <COND (<==? .X PRSA>
						  <PARSE
						    <STRING "V?"
							    <SPNAME .ATM>>>)
						 (ELSE .ATM)>>)
				    (ELSE .ATM)>
			      !.L)>
			<SET ATMS <REST .ATMS>>
			<COND (<==? <LENGTH .L> 3> <RETURN!->)>>
		<SET O <REST <PUTREST .O (<FORM EQUAL? <FORM GVAL .X> !.L>)>>>
		<SET L ()>>>

<DEFMAC BSET ('OBJ "ARGS" BITS)
	<MULTIBITS FSET .OBJ .BITS>>

<DEFMAC BCLEAR ('OBJ "ARGS" BITS)
	<MULTIBITS FCLEAR .OBJ .BITS>>

<DEFMAC BSET? ('OBJ "ARGS" BITS)
	<MULTIBITS FSET? .OBJ .BITS>>

<DEFINE MULTIBITS (X OBJ ATMS "AUX" (O ()) ATM) 
	<REPEAT ()
		<COND (<EMPTY? .ATMS>
		       <RETURN!- <COND (<LENGTH? .O 1> <NTH .O 1>)
				       (<==? .X FSET?> <FORM OR !.O>)
				       (ELSE <FORM PROG () !.O>)>>)>
		<SET ATM <NTH .ATMS 1>>
		<SET ATMS <REST .ATMS>>
		<SET O
		     (<FORM .X
			    .OBJ
			    <COND (<TYPE? .ATM FORM> .ATM)
				  (ELSE <FORM GVAL .ATM>)>>
		      !.O)>>>

<DEFMAC RFATAL ()
	'<PROG () <PUSH 2> <RSTACK>>>

<DEFMAC PROB ('BASE? "OPTIONAL" 'LOSER?)
	<COND (<ASSIGNED? LOSER?> <FORM ZPROB .BASE?>)
	      (ELSE <FORM G? .BASE? '<RANDOM 100>>)>>

<ROUTINE ZPROB
	 (BASE)
	 <COND (,LUCKY <G? .BASE <RANDOM 100>>)
	       (ELSE <G? .BASE <RANDOM 300>>)>>

<ROUTINE RANDOM-ELEMENT (FROB)
	 <GET .FROB <RANDOM <GET .FROB 0>>>>

<ROUTINE PICK-ONE (FROB
		   "AUX" (L <GET .FROB 0>) (CNT <GET .FROB 1>) RND MSG RFROB)
	 <SET L <- .L 1>>
	 <SET FROB <REST .FROB 2>>
	 <SET RFROB <REST .FROB <* .CNT 2>>>
	 <SET RND <RANDOM <- .L .CNT>>>
	 <SET MSG <GET .RFROB .RND>>
	 <PUT .RFROB .RND <GET .RFROB 1>>
	 <PUT .RFROB 1 .MSG>
	 <SET CNT <+ .CNT 1>>
	 <COND (<==? .CNT .L> <SET CNT 0>)>
	 <PUT .FROB 0 .CNT>
	 .MSG>

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
