---
title: "gclock.zil"
program: "Zork II"
program_slug: "zork2"
file_path: "gclock.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork2/blob/master/gclock.zil"
year: 1981
author: "Blank, Lebling, Daniels, Anderson"
slug: "gclock"
order: 8
description: "The clock: a tiny scheduler that lets rooms, lamps and monsters act on a timer, one tick per player turn."

summary:
  - point: "Time in the game is counted in turns, not seconds; every timed event hangs off one table"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupt"
  - point: "A single 180-word table holds every scheduled event as a six-word record"
    link: "https://en.wikipedia.org/wiki/Z-machine"
    link_label: "Z-machine"
  - point: "Events fire when their countdown runs out, and report back whether they printed anything"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"

enhancements:
  - id: "event-table-layout"
    line_start: 5
    line_end: 19
    title: "A Scheduler in 180 Words"
    wikipedia_url: "https://en.wikipedia.org/wiki/Z-machine"
    image_url: ""
    image_caption: ""
    content: "These declarations carve one flat table of 180 words into six-word records: an enabled flag, a tick counter and the routine to call. The constants C-ENABLED?, C-TICK and C-RTN are simply offsets into a record, so the whole scheduler is index arithmetic over a vector. That suited the Z-machine, Infocom's virtual machine, which had no structs and very little memory to spare, so every table was sized by hand. A record is appended by moving C-INTS down from the end of the table, so the live region grows backward from word 180. C-DEMONS is a second marker into the same table. As CLOCKER shows, the split lets the clock be run over every event, or over the demons alone when the last parse failed; a demon being an event meant to run every turn. The layout only works if demons are registered before ordinary interrupts, because both markers move for a demon but only one for the rest. Everything the dungeon does on its own, from lamp batteries dying to a monster wandering in, is built on this table. The same file was shared by all three Zork games, as its 1983 header says."
  - id: "queue-and-int"
    line_start: 21
    line_end: 39
    title: "QUEUE and INT: Registering an Event"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "INT finds or creates the record for a routine. It first scans the table for an existing record with the same routine and returns it if found, so queueing the same event twice does not create two copies. Otherwise it claims a new record at the free end, stores the routine name, and, if the caller said the event is a demon, moves the demon marker too. QUEUE wraps INT and then writes the tick count, so queueing a routine with a delay of N means 'run this routine in N player turns'. The DECL declarations are MDL type hints that the ZIL compiler used to check the code before it was turned into Z-machine instructions. The routine is stored by name as an atom and is invoked later with APPLY, which gives ZIL a form of first-class function that most contemporary adventure engines lacked. Designers working on a new game could schedule a flood, a collapse or a wandering thief with one line of code, which let the small team keep adding timed events as the Zork games grew."
  - id: "clocker-tick"
    line_start: 41
    line_end: 60
    title: "CLOCKER: One Tick per Turn"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "CLOCKER is called once per turn from the main loop. If CLOCK-WAIT is set it clears the flag and returns, which lets a routine make the next tick a free one. Otherwise it walks the table from the start of the live region when the player's input parsed (P-WON), which covers every interrupt and demon, or from the demon marker when it did not, which covers demons only. For each enabled record it decrements the countdown, and when the count reaches its last tick it calls the routine. Routines return true if they printed text, and CLOCKER passes that back so the caller can tell whether the turn produced output. When the walk reaches the end of the table it increments MOVES, the turn counter, and returns. So the move counter advances only when the clock runs. The design is a classic discrete-event loop: no wall clock, no real-time threads, only the player's own commands advancing the world, which is the property that made these games feel fair."
---

```lisp
"GCLOCK for
			    The Zork Trilogy
	 (c) Copyright 1983 Infocom, Inc.  All Rights Reserved"

<CONSTANT C-TABLELEN 180>

<GLOBAL C-TABLE <ITABLE NONE 180>>

<GLOBAL C-DEMONS 180>

<GLOBAL C-INTS 180>

<CONSTANT C-INTLEN 6>

<CONSTANT C-ENABLED? 0>

<CONSTANT C-TICK 1>

<CONSTANT C-RTN 2>

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
		       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>
		 <SET C <REST .C ,C-INTLEN>>>>

<GLOBAL CLOCK-WAIT <>>

<ROUTINE CLOCKER ("AUX" C E TICK (FLG <>))
	 #DECL ((C E) <PRIMTYPE VECTOR> (TICK) FIX (FLG) <OR FALSE ATOM>)
	 <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>
	 <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>
	 <SET E <REST ,C-TABLE ,C-TABLELEN>>
	 <REPEAT ()
		 <COND (<==? .C .E>
			<SETG MOVES <+ ,MOVES 1>>
			<RETURN .FLG>)
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
