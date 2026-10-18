---
title: "gclock.zil"
program: "Zork III"
program_slug: "zork3"
file_path: "gclock.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork3/blob/master/gclock.zil"
year: 1982
author: "Blank, Lebling, Daniels, Anderson"
slug: "gclock"
order: 8
description: "The shared clock, which every timed event in Zork III's collapsing dungeon hangs from."

summary:
  - point: "Zork III hangs many of its scenes on timers: earthquakes, a visitor on a cliff, a lake that drowns the slow and a time machine that snaps back"
    link: "https://en.wikipedia.org/wiki/Zork_III"
    link_label: "Zork III"
  - point: "This file is the same as Zork II's: only the events that are queued differ"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"

enhancements:
  - id: "zork3-event-table"
    line_start: 5
    line_end: 39
    title: "The Same Table, Many More Events"
    wikipedia_url: "https://en.wikipedia.org/wiki/Infocom"
    image_url: ""
    image_caption: ""
    content: "The 180-word table of six-word records is unchanged from Zork II, byte for byte, but Zork III fills it with a different cast. Counting only the routines that this game queues, there is I-CLEFT for the earthquakes, I-LANTERN for the lamp, the I-MAN events for the stranger at the cliff, I-ON-LAKE, I-IN-LAKE and I-ROC for the swimmer's hazards, I-VIEW-CHANGE and I-VIEW-SNAP for the viewing table, I-SNAP for the time machine, I-FOLIN for the Dungeon Master following the player, and the shadow's I-CURE and I-SHADOW-REPLY. Each is registered with QUEUE and INT, and each is found again later by the routine's name. The record layout carries all of that unchanged."
  - id: "zork3-clocker"
    line_start: 41
    line_end: 60
    title: "One Tick per Turn, Including the Dying Days of a Dungeon"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "CLOCKER runs once per turn from the main loop. The countdown that matters most in Zork III is I-CLEFT: it is queued after the player's first command and fires roughly 70 to 140 turns later, which is how the earthquake that cracks the museum wall arrives without the player doing anything. A -1 tick count, used by the sword demon and the wandering man, means 'every turn', and a zero means 'never again'. CLOCK-WAIT, set by the WAIT verb, makes the next call a free one. The routine returns true if any event printed something, so that WAIT stops early when something happens. Much of Zork III's atmosphere comes from this clock: things happen whether or not the player acts."
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
