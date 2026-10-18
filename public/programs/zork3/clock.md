---
title: "clock.zil"
program: "Zork III"
program_slug: "zork3"
file_path: "clock.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork3/blob/master/clock.zil"
year: 1982
author: "Blank, Lebling, Daniels, Anderson"
slug: "clock"
order: 12
description: "An earlier clock with separate DEMON and QUEUE entry points and a move counter kept in the main loop."

summary:
  - point: "DEMON and QUEUE both register an event, but only DEMON also marks it to run every turn"
    link: "https://en.wikipedia.org/wiki/Z-machine"
    link_label: "Z-machine"
  - point: "CLOCKER does not count moves; the main loop does"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"

enhancements:
  - id: "old-clock-table"
    line_start: 7
    line_end: 46
    title: "DEMON, QUEUE and INT"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "The table is the same 180 words of six-word records as in the generic file, and the constants name the same offsets. What is different is the front door. DEMON and QUEUE are two thin routines that both call INT, and DEMON passes true as a second argument, which tells INT to move the demon marker as well as the interrupt marker. In the later generic file the DEMON routine is gone: demons are made with INT directly, and QUEUE is the only wrapper. Either way, registering an event meant claiming one more record from the end of the table."
  - id: "old-clocker"
    line_start: 48
    line_end: 65
    title: "A CLOCKER That Does Not Count"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "CLOCKER walks the table from the interrupt region when the player's command parsed, or from the demon region when it did not, decrements each enabled record and calls the routine that reaches its last tick. It is nearly the generic routine. The difference sits at the end of the walk: the generic CLOCKER adds one to the move counter there, but this version simply returns the flag. In this earlier design the main loop increments MOVES itself, as the old main file shows, so the counter advanced whenever a command was executed, and the clock had no say in it. Moving the counter into the clock tied the number of moves to the number of ticks."
---

```lisp
"CLOCK for
		     Zork III: The Dungeon Master 
		 The Great Underground Empire (Part 3)
	(c) Copyright 1982 Infocom, Inc.  All Rights Reserved.
"

<CONSTANT C-TABLELEN 180>

<GLOBAL C-TABLE <ITABLE NONE 180>>

<GLOBAL C-DEMONS 180>

<GLOBAL C-INTS 180>

<CONSTANT C-INTLEN 6>

<CONSTANT C-ENABLED? 0>

<CONSTANT C-TICK 1>

<CONSTANT C-RTN 2>

<ROUTINE DEMON (RTN TICK "AUX" CINT)
	 #DECL ((RTN) ATOM (TICK) FIX (CINT) <PRIMTYPE VECTOR>)
	 <PUT <SET CINT <INT .RTN T>> ,C-TICK .TICK>
	 .CINT>

<ROUTINE QUEUE (RTN TICK "AUX" CINT)
	 #DECL ((RTN) ATOM (TICK) FIX (CINT) <PRIMTYPE VECTOR>)
	 <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>
	 .CINT>

<ROUTINE INT (RTN "OPTIONAL" (DEMON <>) E C INT)
	 #DECL ((RTN) ATOM (DEMON) <OR ATOM FALSE> (E C INT) <PRIMTYPE
							      VECTOR>)
	 <SET E <REST ,C-TABLE ,C-TABLELEN>>
	 <SET C <REST ,C-TABLE ,C-INTS>>
	 <REPEAT ()
		 <COND (<==? .C .E>
			<SETG C-INTS <- ,C-INTS ,C-INTLEN>>
			<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>
			<SET INT <REST ,C-TABLE ,C-INTS>>
			<PUT .INT ,C-RTN .RTN>
			<RETURN .INT>)
		       (<==? <GET .C ,C-RTN> .RTN> <RETURN .C>)>
		 <SET C <REST .C ,C-INTLEN>>>>

<GLOBAL CLOCK-WAIT <>>

<ROUTINE CLOCKER ("AUX" C E TICK (FLG <>))
	 #DECL ((C E) <PRIMTYPE VECTOR> (TICK) FIX (FLG) <OR FALSE ATOM>)
	 <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>
	 <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>
	 <SET E <REST ,C-TABLE ,C-TABLELEN>>
	 <REPEAT ()
		 <COND (<==? .C .E> <RETURN .FLG>)
		       (<NOT <0? <GET .C ,C-ENABLED?>>>
			<SET TICK <GET .C ,C-TICK>>
			<COND (<0? .TICK>)
			      (T
			       <PUT .C ,C-TICK <- .TICK 1>>
			       <COND (<AND <NOT <G? .TICK 1>>
					   <APPLY <GET .C ,C-RTN>>>
				      <SET FLG T>)>)>)>
		 <SET C <REST .C ,C-INTLEN>>>>
```
