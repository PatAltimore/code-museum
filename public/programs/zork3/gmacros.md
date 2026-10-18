---
title: "gmacros.zil"
program: "Zork III"
program_slug: "zork3"
file_path: "gmacros.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork3/blob/master/gmacros.zil"
year: 1982
author: "Blank, Lebling, Daniels, Anderson"
slug: "gmacros"
order: 2
description: "The shared macro layer, byte-identical to Zork II's, as it expands in Zork III."

summary:
  - point: "The same TELL, VERB? and bit macros serve every game, and Zork III uses them heavily in its long puzzle descriptions"
    link: "https://en.wikipedia.org/wiki/Z-machine"
    link_label: "Z-machine"
  - point: "PICK-ONE shuffles Zork III's pools of replies, from the Viking sailor's greetings to the duelling hits and misses"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"

enhancements:
  - id: "tell"
    line_start: 9
    line_end: 50
    title: "TELL and the Longest Description in the Trilogy"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "This file is the same macro layer as the one in Zork II, and TELL is still the macro that turns readable text into print instructions. Zork III is the game that stretches it most. Room descriptions such as the mirror box run to a dozen lines of prose, and cut-scenes such as the death in the Royal Museum or the last words of the Dungeon Master are single TELL calls with embedded line breaks. The keyword forms save the most work in the dynamic descriptions: the time machine's year display, the dial on the parapet and the move count in the score line are written with N, the number keyword, so a changing value drops into a sentence. Because the macro expands at build time, none of this costs the story file more than the plain print instructions."
  - id: "verb-and-bits"
    line_start: 55
    line_end: 113
    title: "VERB? in the Mirror Box and the Time Machine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "VERB?, PRSO? and ROOM? expand into the Z-machine's equality test, three alternatives at a time. Zork III reaches for them constantly because so many of its objects answer verbs with long COND chains: the mirror box lists PUSH, OPEN and MOVE; the time machine lists BOARD, TAKE, RAISE, PUSH and MOVE. The BSET family does the same for attributes. None of it exists at run time, so the dense, readable source costs the player nothing, which was worth a great deal on a game with this many puzzle objects."
  - id: "probabilities"
    line_start: 115
    line_end: 125
    title: "RFATAL and PROB"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "RFATAL pushes the value 2 and returns it, the M-FATAL code that ends a command line, and Zork III uses it wherever a move or command fails outright. PROB is the macro behind the game's chance events. PROB 30 in the Shadow rooms decides whether the hooded figure steps out of the dark, and PROB 80 decides whether a grue catches a player who walks from one dark room into another. With an optional second argument it calls ZPROB, which rolls out of 100 when the global LUCKY is set and out of 300 when it is not. The macro keeps every die roll in the game down to a single readable expression."
  - id: "pick-one"
    line_start: 127
    line_end: 142
    title: "PICK-ONE: A Deck of Replies"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_fiction"
    image_url: ""
    image_caption: ""
    content: "PICK-ONE shuffles a table of messages so that none repeats until all have been shown. Zork III keeps several such decks: the stranger's impatient calls from the cliff top, the hooded figure's hits and misses in the duel, the jibes the game gives for taking something that cannot be taken, and the five descriptions of the shifting key. The tables begin with a zero entry because the routine keeps its counter in the first slot after the length. A duel that said the same thing twice in a row would read as a loop, and a patient stranger who repeated himself would sound like a recording. Shuffling gives each scene a longer life than its length."
  - id: "clock-helpers"
    line_start: 144
    line_end: 157
    title: "ENABLE, DISABLE, FLAMING? and ABS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "ENABLE and DISABLE set or clear the first word of a clock record, which is how Zork III turns its timers on and off. The pattern ENABLE <QUEUE I-MAN-RETURNS 10> appears throughout the file, and KILL-INTERRUPTS uses DISABLE to cancel the cliff, view and Dungeon Master events when the player dies. FLAMING? is true for an object that has both the flame and the on attributes, which is what makes a lit torch count as fire, and OPENABLE? and ABS are one-liners. ABS is used in the Royal Puzzle's CPEXIT routine to test the size of a move."
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
