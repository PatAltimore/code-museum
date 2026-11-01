---
title: "armor.c"
program: "Rogue"
program_slug: "rogue"
file_path: "armor.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/armor.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "armor-c"
order: 22
description: "Putting on and taking off armour, and the routine that lets a turn pass."

summary:
  - point: "Armour class is lower for better armour, and wearing armour identifies its bonus"
    link: "https://en.wikipedia.org/wiki/Armor_class"
    link_label: "Armor class"
  - point: "Putting on armour spends extra time, because it runs the daemons and fuses a second time"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "wear"
    line_start: 15
    line_end: 48
    title: "Putting On Armour"
    wikipedia_url: "https://en.wikipedia.org/wiki/Armor_class"
    image_url: ""
    image_caption: ""
    content: "wear asks for a piece of armour. Only one can be worn: with armour already on, the game says 'you are already wearing some. You'll have to take it off first', and no time passes. Anything not armour is refused. Otherwise waste_time makes the dressing slow, the armour is marked ISKNOW, which makes its bonus visible in its name, and cur_armor points to it. Wearing armour therefore identifies its bonus."
  - id: "take-off"
    line_start: 50
    line_end: 76
    title: "Taking It Off"
    wikipedia_url: "https://en.wikipedia.org/wiki/Armor_class"
    image_url: ""
    image_caption: ""
    content: "take_off says 'you aren't wearing any armor' if none is worn. Otherwise it calls dropcheck, which refuses for a cursed piece and, when it works, spends a turn through waste_time. The pointer is cleared and the message says 'you used to be wearing', with the letter and name. dropcheck is the same check used for weapons and rings."
  - id: "waste-time"
    line_start: 78
    line_end: 89
    title: "Letting Time Pass"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "waste_time runs the daemons and fuses for the turn, both the ones set to run before the hero's action and the ones set to run after. It is the game's way of saying that something took an extra turn: hunger advances, timers count down and monsters move, while the hero does nothing. Armour uses it because dressing and undressing are slow."
---

```c
/*
 * This file contains misc functions for dealing with armor
 * @(#)armor.c	4.14 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <curses.h>
#include "rogue.h"

/*
 * wear:
 *	The player wants to wear something, so let him/her put it on.
 */
void
wear()
{
    register THING *obj;
    register char *sp;

    if ((obj = get_item("wear", ARMOR)) == NULL)
	return;
    if (cur_armor != NULL)
    {
	addmsg("you are already wearing some");
	if (!terse)
	    addmsg(".  You'll have to take it off first");
	endmsg();
	after = FALSE;
	return;
    }
    if (obj->o_type != ARMOR)
    {
	msg("you can't wear that");
	return;
    }
    waste_time();
    obj->o_flags |= ISKNOW;
    sp = inv_name(obj, TRUE);
    cur_armor = obj;
    if (!terse)
	addmsg("you are now ");
    msg("wearing %s", sp);
}

/*
 * take_off:
 *	Get the armor off of the players back
 */
void
take_off()
{
    register THING *obj;

    if ((obj = cur_armor) == NULL)
    {
	after = FALSE;
	if (terse)
		msg("not wearing armor");
	else
		msg("you aren't wearing any armor");
	return;
    }
    if (!dropcheck(cur_armor))
	return;
    cur_armor = NULL;
    if (terse)
	addmsg("was");
    else
	addmsg("you used to be");
    msg(" wearing %c) %s", obj->o_packch, inv_name(obj, TRUE));
}

/*
 * waste_time:
 *	Do nothing but let other things happen
 */
void
waste_time()
{
    do_daemons(BEFORE);
    do_fuses(BEFORE);
    do_daemons(AFTER);
    do_fuses(AFTER);
}
```
