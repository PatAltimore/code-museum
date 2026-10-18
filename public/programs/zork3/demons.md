---
title: "demons.zil"
program: "Zork III"
program_slug: "zork3"
file_path: "demons.zil"
language: "ZIL (Zork Implementation Language)"
github_url: "https://github.com/historicalsource/zork3/blob/master/demons.zil"
year: 1982
author: "Blank, Lebling, Daniels, Anderson"
slug: "demons"
order: 13
description: "The sword demon in its earlier standalone form, before it moved into 3actions.zil."

summary:
  - point: "The elvish sword glows when danger is near"
    link: "https://en.wikipedia.org/wiki/Zork_III"
    link_label: "Zork III"
  - point: "This version already knows about the cliff and the cliff ledge, which the Zork II version could not"
    link: "https://en.wikipedia.org/wiki/Infocom"
    link_label: "Infocom"

enhancements:
  - id: "old-sword-demon"
    line_start: 7
    line_end: 45
    title: "A Sword That Knows the Cliff"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zork_III"
    image_url: ""
    image_caption: ""
    content: "I-SWORD checks the player's surroundings every turn and sets a glow level of 0, 1 or 2. Level 2, a bright glow, means a visible creature is in the room, as INFESTED? reports; level 1, a faint blue glow, means one is in an adjacent room, which the routine finds by walking the room's exits and examining only ordinary, conditional and door exits. Zork III adds two special cases at the top. At the cliff, the sword glows faintly while the stranger has not left, and on the cliff ledge it glows while he is still waiting above. That makes the sword a hint about the man who will ask for the chest. This copy has no mirror test, which the shipped version later added for the Hall of Guardians. The routine disables itself when the player drops the sword."
---

```lisp
"DEMONS for
		     Zork III: The Dungeon Master 
		 The Great Underground Empire (Part 3)
	(c) Copyright 1982 Infocom, Inc.  All Rights Reserved.
"

"SWORD demon"

<ROUTINE I-SWORD ("AUX" (DEM <INT I-SWORD>) (NG 0) P T L)
	 <COND (<IN? ,SWORD ,ADVENTURER>
		<COND (<AND <==? ,HERE ,CLIFF> <NOT ,MAN-GONE>> <SET NG 1>)
		      (<AND <==? ,HERE ,CLIFF-LEDGE> ,MAN-FLAG> <SET NG 1>)
		      (<INFESTED? ,HERE> <SET NG 2>)
		      (ELSE
		       <SET P 0>
		       <REPEAT ()
			       <COND (<0? <SET P <NEXTP ,HERE .P>>>
				      <RETURN>)
				     (<NOT <L? .P ,LOW-DIRECTION>>
				      <SET T <GETPT ,HERE .P>>
				      <SET L <PTSIZE .T>>
				      <COND (<EQUAL? .L ,UEXIT ,CEXIT ,DEXIT>
					     <COND (<INFESTED? <GETB .T 0>>
						    <SET NG 1>
						    <RETURN>)>)>)>>)>
		<COND (<==? .NG ,SWORD-STATE> <RFALSE>)
		      (<==? .NG 2>
		       <TELL "Your sword has begun to glow very brightly." CR>)
		      (<1? .NG>
		       <TELL "Your sword is glowing with a faint blue glow."
			     CR>)
		      (<0? .NG>
		       <TELL "Your sword is no longer glowing." CR>)>
		<SETG SWORD-STATE .NG>
		<RTRUE>)
	       (ELSE <DISABLE .DEM> <RFALSE>)>>

<GLOBAL SWORD-STATE 0>

<ROUTINE INFESTED? (R "AUX" (F <FIRST? .R>)) 
	 <REPEAT ()
		 <COND (<NOT .F> <RETURN <>>)
		       (<AND <FSET? .F ,ACTORBIT> <NOT <FSET? .F ,INVISIBLE>>>
			<RETURN .F>)
		       (<NOT <SET F <NEXT? .F>>> <RETURN <>>)>>>
```
