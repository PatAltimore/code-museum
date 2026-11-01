---
title: "wizard.c"
program: "Rogue"
program_slug: "rogue"
file_path: "wizard.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/wizard.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "wizard-c"
order: 28
description: "Identification, teleportation, and the wizard's debugging commands: create any item, see the whole map."

summary:
  - point: "Identify scrolls insist that the player pick something, and mark the whole kind as known"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "Wizard mode, compiled in with MASTER, was the developers' debugger inside the game"
    link: "https://en.wikipedia.org/wiki/Debugging"
    link_label: "Debugging"
  - point: "Teleporting while held by a flytrap frees the hero"
    link: "https://en.wikipedia.org/wiki/Teleportation"
    link_label: "Teleportation"

enhancements:
  - id: "whatis"
    line_start: 20
    line_end: 73
    title: "Identifying an Item"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "whatis is what the identify scrolls call. With nothing in the pack it says so. Otherwise it asks for an item of the right type with get_item. If insist is true, as it is for a scroll, it keeps asking until the player picks an acceptable item: 'you must identify something' if they escape, or 'you must identify a potion' if the item is of the wrong type. If there is nothing of that type at all it returns. Then it sets the knowledge appropriate to the object: a scroll, potion, ring or stick through set_know, a weapon or armour by setting its ISKNOW flag. It prints the item's new name."
  - id: "set-know"
    line_start: 75
    line_end: 119
    title: "Knowing a Whole Kind"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "set_know does what the identify scrolls promise: it marks the kind of thing as known in its table, so every other potion of that colour in the game is now named, and marks this object as known. If the player had typed a guess for that kind, the string is freed and cleared. type_name is a small table from type letters to words such as 'potion', 'suit of armor' and 'ring, wand or staff', used by messages."
  - id: "create-obj"
    line_start: 121
    line_end: 192
    title: "The Wizard Makes Anything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "create_obj exists only in wizard builds. It asks for a type character and a number from 0 to f for the kind, then, for weapons and armour, whether to make it blessed, cursed or normal. A weapon is built with init_weapon and its bonus changed by one to three. An armour class is changed the other way, since lower is better. Rings of protection and the like are asked for a blessing. Rings of aggravate monster and teleportation are cursed as usual. A stick is charged with fix_stick, gold asks 'how much?' and the result goes into the pack."
  - id: "teleport"
    line_start: 194
    line_end: 231
    title: "Bamf"
    wikipedia_url: "https://en.wikipedia.org/wiki/Teleportation"
    image_url: ""
    image_caption: ""
    content: "teleport moves the hero to a random floor square, through find_floor. The map symbol under the hero is restored first. If the new place is in another room, the hero leaves one and enters the other, with the redraw that entering involves. If it is in the same room, the hero is simply moved and a look done. The comment explains the rest: the hold of a venus flytrap is broken, its hit counter is zeroed and the flytrap's damage string is reset. Finally any counted move or run is cancelled and typeahead is flushed, so the player does not keep walking into the new place."
  - id: "passwd"
    line_start: 233
    line_end: 258
    title: "The Wizard's Password"
    wikipedia_url: "https://en.wikipedia.org/wiki/Crypt_(C)"
    image_url: ""
    image_caption: ""
    content: "passwd asks for a password, one typed character at a time without echo, using the machine layer's erase and kill characters, and compares it with a stored string. The input is passed through md_crypt with the two-letter salt 'mT', the traditional Unix crypt call, and only a match with the encrypted password defined in rogue.h lets the user in. The password itself is therefore not in the code, only its hash."
  - id: "show-map"
    line_start: 260
    line_end: 284
    title: "The Level Map"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "show_map draws the whole level on the second window as the game knows it, including parts the hero has not seen. Squares that are not flagged as real, such as secret doors and hidden passages, are drawn in standout mode, so a developer can see which are hidden. The map is shown with a 'More (level map)' banner, and show_win waits for a key. The check for turning standout off tests the whole flag word rather than the single flag bit."
---

```c
/*
 * Special wizard commands (some of which are also non-wizard commands
 * under strange circumstances)
 *
 * @(#)wizard.c	4.30 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <stdlib.h>
#include <curses.h>
#include <string.h>
#include <ctype.h>
#include "rogue.h"

/*
 * whatis:
 *	What a certin object is
 */

void
whatis(bool insist, int type)
{
    THING *obj;

    if (pack == NULL)
    {
	msg("you don't have anything in your pack to identify");
	return;
    }

    for (;;)
    {
	obj = get_item("identify", type);
	if (insist)
	{
	    if (n_objs == 0)
		return;
	    else if (obj == NULL)
		msg("you must identify something");
	    else if (type && obj->o_type != type &&
	       !(type == R_OR_S && (obj->o_type == RING || obj->o_type == STICK)) )
		    msg("you must identify a %s", type_name(type));
	    else
		break;
	}
	else
	    break;
    }

    if (obj == NULL)
	return;

    switch (obj->o_type)
    {
        case SCROLL:
	    set_know(obj, scr_info);
        when POTION:
	    set_know(obj, pot_info);
	when STICK:
	    set_know(obj, ws_info);
        when WEAPON:
        case ARMOR:
	    obj->o_flags |= ISKNOW;
        when RING:
	    set_know(obj, ring_info);
    }
    msg(inv_name(obj, FALSE));
}

/*
 * set_know:
 *	Set things up when we really know what a thing is
 */

void
set_know(THING *obj, struct obj_info *info)
{
    char **guess;

    info[obj->o_which].oi_know = TRUE;
    obj->o_flags |= ISKNOW;
    guess = &info[obj->o_which].oi_guess;
    if (*guess)
    {
	free(*guess);
	*guess = NULL;
    }
}

/*
 * type_name:
 *	Return a pointer to the name of the type
 */
char *
type_name(int type)
{
    struct h_list *hp;
    static struct h_list tlist[] = {
	{POTION, "potion",		FALSE},
	{SCROLL, "scroll",		FALSE},
	{FOOD,	 "food",		FALSE},
	{R_OR_S, "ring, wand or staff",	FALSE},
	{RING,	 "ring",		FALSE},
	{STICK,	 "wand or staff",	FALSE},
	{WEAPON, "weapon",		FALSE},
	{ARMOR,	 "suit of armor",	FALSE},
    };

    for (hp = tlist; hp->h_ch; hp++)
	if (type == hp->h_ch)
	    return hp->h_desc;
    /* NOTREACHED */
    return(0);
}

#ifdef MASTER
/*
 * create_obj:
 *	wizard command for getting anything he wants
 */

void
create_obj()
{
    THING *obj;
    char ch, bless;

    obj = new_item();
    msg("type of item: ");
    obj->o_type = readchar();
    mpos = 0;
    msg("which %c do you want? (0-f)", obj->o_type);
    obj->o_which = (isdigit((ch = readchar())) ? ch - '0' : ch - 'a' + 10);
    obj->o_group = 0;
    obj->o_count = 1;
    mpos = 0;
    if (obj->o_type == WEAPON || obj->o_type == ARMOR)
    {
	msg("blessing? (+,-,n)");
	bless = readchar();
	mpos = 0;
	if (bless == '-')
	    obj->o_flags |= ISCURSED;
	if (obj->o_type == WEAPON)
	{
	    init_weapon(obj, obj->o_which);
	    if (bless == '-')
		obj->o_hplus -= rnd(3)+1;
	    if (bless == '+')
		obj->o_hplus += rnd(3)+1;
	}
	else
	{
	    obj->o_arm = a_class[obj->o_which];
	    if (bless == '-')
		obj->o_arm += rnd(3)+1;
	    if (bless == '+')
		obj->o_arm -= rnd(3)+1;
	}
    }
    else if (obj->o_type == RING)
	switch (obj->o_which)
	{
	    case R_PROTECT:
	    case R_ADDSTR:
	    case R_ADDHIT:
	    case R_ADDDAM:
		msg("blessing? (+,-,n)");
		bless = readchar();
		mpos = 0;
		if (bless == '-')
		    obj->o_flags |= ISCURSED;
		obj->o_arm = (bless == '-' ? -1 : rnd(2) + 1);
	    when R_AGGR:
	    case R_TELEPORT:
		obj->o_flags |= ISCURSED;
	}
    else if (obj->o_type == STICK)
	fix_stick(obj);
    else if (obj->o_type == GOLD)
    {
	msg("how much?");
	get_num(&obj->o_goldval, stdscr);
    }
    add_pack(obj, FALSE);
}
#endif

/*
 * telport:
 *	Bamf the hero someplace else
 */

void
teleport()
{
    static coord c;

    mvaddch(hero.y, hero.x, floor_at());
    find_floor((struct room *) NULL, &c, FALSE, TRUE);
    if (roomin(&c) != proom)
    {
	leave_room(&hero);
	hero = c;
	enter_room(&hero);
    }
    else
    {
	hero = c;
	look(TRUE);
    }
    mvaddch(hero.y, hero.x, PLAYER);
    /*
     * turn off ISHELD in case teleportation was done while fighting
     * a Flytrap
     */
    if (on(player, ISHELD)) {
	player.t_flags &= ~ISHELD;
	vf_hit = 0;
	strcpy(monsters['F'-'A'].m_stats.s_dmg, "000x0");
    }
    no_move = 0;
    count = 0;
    running = FALSE;
    flush_type();
}

#ifdef MASTER
/*
 * passwd:
 *	See if user knows password
 */
int
passwd()
{
    char *sp, c;
    static char buf[MAXSTR];

    msg("wizard's Password:");
    mpos = 0;
    sp = buf;
    while ((c = readchar()) != '\n' && c != '\r' && c != ESCAPE)
	if (c == md_killchar())
	    sp = buf;
	else if (c == md_erasechar() && sp > buf)
	    sp--;
	else
	    *sp++ = c;
    if (sp == buf)
	return FALSE;
    *sp = '\0';
    return (strcmp(PASSWD, md_crypt(buf, "mT")) == 0);
}

/*
 * show_map:
 *	Print out the map for the wizard
 */

void
show_map()
{
    int y, x, real;

    wclear(hw);
    for (y = 1; y < NUMLINES - 1; y++)
	for (x = 0; x < NUMCOLS; x++)
	{
	    real = flat(y, x);
	    if (!(real & F_REAL))
		wstandout(hw);
	    wmove(hw, y, x);
	    waddch(hw, chat(y, x));
	    if (!real)
		wstandend(hw);
	}
    show_win("---More (level map)---");
}
#endif
```
