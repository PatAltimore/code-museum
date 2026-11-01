---
title: "rings.c"
program: "Rogue"
program_slug: "rogue"
file_path: "rings.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/rings.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "rings-c"
order: 20
description: "Putting rings on and taking them off, and the food that wearing a ring costs."

summary:
  - point: "Two rings can be worn, one on each hand, and each has its own cost in food"
    link: "https://en.wikipedia.org/wiki/Ring_(jewellery)"
    link_label: "Ring"
  - point: "Rings with a bonus show it only after they are identified"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "ring-on"
    line_start: 16
    line_end: 86
    title: "Putting a Ring On"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ring_(jewellery)"
    image_url: ""
    image_caption: ""
    content: "ring_on asks for a ring with get_item and rejects anything else: 'it would be difficult to wrap that around a finger'. A ring that is already worn is turned down by is_current. If both hands are free the player chooses which; if one is free it is used; if neither, the game says 'you already have a ring on each hand'. Only three kinds of ring act at the moment they are put on: add strength changes the hero's strength by the ring's bonus, see invisible calls invis_on, and aggravate monsters calls aggravate. The others have no code here, because the rest of the game tests whether they are worn when it needs them, with ISWEARING."
  - id: "ring-off"
    line_start: 88
    line_end: 123
    title: "Taking a Ring Off"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ring_(jewellery)"
    image_url: ""
    image_caption: ""
    content: "ring_off is similar. With no rings it says so; with one it removes that one; with two it asks which hand. The removal itself is dropcheck, which refuses if the ring is cursed and otherwise undoes any effect, as things.c shows, and prints 'was wearing' with the ring's name. A cursed ring of teleportation or aggravate monster, which are always cursed, therefore cannot be removed until a scroll of remove curse is read."
  - id: "gethand"
    line_start: 125
    line_end: 152
    title: "Left or Right?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "gethand loops until it gets an answer. Escape cancels and returns minus one, which callers treat as no choice. Either case of L or R is accepted, and anything else is met with 'please type L or R'. The two hands are the constants LEFT and RIGHT, which index the cur_ring array, so a ring is just a pointer in one of two slots."
  - id: "ring-eat"
    line_start: 154
    line_end: 180
    title: "What a Ring Costs in Food"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ring_(jewellery)"
    image_url: ""
    image_caption: ""
    content: "ring_eat gives the extra food a worn ring uses each turn, on top of the base of one that daemons.c charges, read from a table in the order of the ring constants. Protection, add strength, sustain strength, stealth and sustain armour cost one unit. Regeneration costs two. Search, see invisible, add damage, add hit and slow digestion have a negative number, which is used as a chance: a value of minus five means one chance in five of costing one unit. Aggravate monsters, teleportation and the plain ring cost nothing. Slow digestion's result is negated, so it is the only ring that saves food."
  - id: "ring-num"
    line_start: 182
    line_end: 204
    title: "Showing a Ring's Bonus"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "ring_num is the function nameit calls for a ring. If the ring has not been identified it returns an empty string. Otherwise, for the four kinds that have a bonus, protection, add strength, add damage and add hit, it prints the bonus in brackets, signed, through the num helper. Every other kind prints nothing, since the ring either works or it doesn't. The text goes in a static buffer."
---

```c
/*
 * Routines dealing specifically with rings
 *
 * @(#)rings.c	4.19 (Berkeley) 05/29/83
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
 * ring_on:
 *	Put a ring on a hand
 */

void
ring_on()
{
    THING *obj;
    int ring;

    obj = get_item("put on", RING);
    /*
     * Make certain that it is somethings that we want to wear
     */
    if (obj == NULL)
	return;
    if (obj->o_type != RING)
    {
	if (!terse)
	    msg("it would be difficult to wrap that around a finger");
	else
	    msg("not a ring");
	return;
    }

    /*
     * find out which hand to put it on
     */
    if (is_current(obj))
	return;

    if (cur_ring[LEFT] == NULL && cur_ring[RIGHT] == NULL)
    {
	if ((ring = gethand()) < 0)
	    return;
    }
    else if (cur_ring[LEFT] == NULL)
	ring = LEFT;
    else if (cur_ring[RIGHT] == NULL)
	ring = RIGHT;
    else
    {
	if (!terse)
	    msg("you already have a ring on each hand");
	else
	    msg("wearing two");
	return;
    }
    cur_ring[ring] = obj;

    /*
     * Calculate the effect it has on the poor guy.
     */
    switch (obj->o_which)
    {
	case R_ADDSTR:
	    chg_str(obj->o_arm);
	    break;
	case R_SEEINVIS:
	    invis_on();
	    break;
	case R_AGGR:
	    aggravate();
	    break;
    }

    if (!terse)
	addmsg("you are now wearing ");
    msg("%s (%c)", inv_name(obj, TRUE), obj->o_packch);
}

/*
 * ring_off:
 *	take off a ring
 */

void
ring_off()
{
    int ring;
    THING *obj;

    if (cur_ring[LEFT] == NULL && cur_ring[RIGHT] == NULL)
    {
	if (terse)
	    msg("no rings");
	else
	    msg("you aren't wearing any rings");
	return;
    }
    else if (cur_ring[LEFT] == NULL)
	ring = RIGHT;
    else if (cur_ring[RIGHT] == NULL)
	ring = LEFT;
    else
	if ((ring = gethand()) < 0)
	    return;
    mpos = 0;
    obj = cur_ring[ring];
    if (obj == NULL)
    {
	msg("not wearing such a ring");
	return;
    }
    if (dropcheck(obj))
	msg("was wearing %s(%c)", inv_name(obj, TRUE), obj->o_packch);
}

/*
 * gethand:
 *	Which hand is the hero interested in?
 */
int
gethand()
{
    int c;

    for (;;)
    {
	if (terse)
	    msg("left or right ring? ");
	else
	    msg("left hand or right hand? ");
	if ((c = readchar()) == ESCAPE)
	    return -1;
	mpos = 0;
	if (c == 'l' || c == 'L')
	    return LEFT;
	else if (c == 'r' || c == 'R')
	    return RIGHT;
	if (terse)
	    msg("L or R");
	else
	    msg("please type L or R");
    }
}

/*
 * ring_eat:
 *	How much food does this ring use up?
 */
int
ring_eat(int hand)
{
    THING *ring;
    int eat;
    static int uses[] = {
	 1,	/* R_PROTECT */		 1,	/* R_ADDSTR */
	 1,	/* R_SUSTSTR */		-3,	/* R_SEARCH */
	-5,	/* R_SEEINVIS */	 0,	/* R_NOP */
	 0,	/* R_AGGR */		-3,	/* R_ADDHIT */
	-3,	/* R_ADDDAM */		 2,	/* R_REGEN */
	-2,	/* R_DIGEST */		 0,	/* R_TELEPORT */
	 1,	/* R_STEALTH */		 1	/* R_SUSTARM */
    };

    if ((ring = cur_ring[hand]) == NULL)
	return 0;
    if ((eat = uses[ring->o_which]) < 0)
	eat = (rnd(-eat) == 0);
    if (ring->o_which == R_DIGEST)
	eat = -eat;
    return eat;
}

/*
 * ring_num:
 *	Print ring bonuses
 */
char *
ring_num(THING *obj)
{
    static char buf[10];

    if (!(obj->o_flags & ISKNOW))
	return "";
    switch (obj->o_which)
    {
	case R_PROTECT:
	case R_ADDSTR:
	case R_ADDDAM:
	case R_ADDHIT:
	    sprintf(buf, " [%s]", num(obj->o_arm, 0, RING));
	otherwise:
	    return "";
    }
    return buf;
}
```
