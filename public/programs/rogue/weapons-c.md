---
title: "weapons.c"
program: "Rogue"
program_slug: "rogue"
file_path: "weapons.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/weapons.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "weapons-c"
order: 21
description: "Weapons: the table of damage dice, throwing and where things land, wielding, and stacks of missiles."

summary:
  - point: "Each weapon has one damage string for melee and another for throwing"
    link: "https://en.wikipedia.org/wiki/Dice_notation"
    link_label: "Dice notation"
  - point: "Arrows, darts and shuriken come in stacks sharing a group number, and arrows need a bow"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "An item that lands picks a random free neighbouring square, using the same trick as create monster"
    link: "https://en.wikipedia.org/wiki/Reservoir_sampling"
    link_label: "Reservoir sampling"

enhancements:
  - id: "init-dam"
    line_start: 18
    line_end: 37
    title: "The Weapon Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dice_notation"
    image_url: ""
    image_caption: ""
    content: "init_dam gives the starting statistics of each weapon: damage when wielded, damage when thrown, the launcher it needs, and flags. A mace does 2x4 and a long sword 3x4. A two-handed sword does 4x4, the most. A bow hits for 1x1 in melee. An arrow does 1x1 wielded and 2x3 fired from a bow, and has the flags for coming in numbers and for being a missile. Arrows, darts and shuriken carry the flag for coming in numbers. A dagger does 1x6 wielded and 1x4 thrown and is flagged only as a missile, though init_weapon still makes daggers in stacks. Darts and shuriken are thrown by hand, and a spear can be wielded for 2x3 or thrown for 1x6. The dagger's missile flag is written twice in the table, which does no harm. The global group starts at 2 and counts up."
  - id: "missile"
    line_start: 39
    line_end: 65
    title: "Throwing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "missile throws one item. get_item asks for a weapon, and dropcheck refuses a cursed weapon in hand and unwields an ordinary one. leave_pack takes a single copy from a stack. do_motion flies it along the line. If it reached a square with no monster, or hit_monster says it missed, fall puts it on the floor. A weapon that hits a monster is not put on the floor."
  - id: "do-motion"
    line_start: 67
    line_end: 114
    title: "Flying Through the Air"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "do_motion moves the object one square at a time along a direction. Each step it erases the symbol from the old square, if the hero can see it and the game is not in terse mode, advances, and checks the new square. If the square can be walked through and is not a door, the object is drawn there and the loop continues. Otherwise the flight ends, at a wall, a door, or a monster, which the caller examines through the object's position. In terse mode nothing is drawn along the way. There is no range limit; a thrown weapon stops only when something is in its way."
  - id: "fall"
    line_start: 116
    line_end: 153
    title: "Where It Lands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Reservoir_sampling"
    image_url: ""
    image_caption: ""
    content: "fall puts a thrown item on the floor. fallpos looks for a free place around where the object stopped. If one is found the item goes there, the map is updated, and if a monster is standing on that square the symbol is kept under it instead of drawn. The object is added to the level's list. If there is no room, a message says the weapon 'vanishes as it hits the ground', and the object is discarded. The pending hit message is finished first, so the order of the text makes sense."
  - id: "init-weapon"
    line_start: 155
    line_end: 189
    title: "Making a Weapon"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "init_weapon fills in a new weapon from the table: type, kind, both damage strings, the launcher and flags, with no bonuses. Daggers come in a stack of two to five; arrows, darts and shuriken come in a stack of eight to fifteen. Each stack is given its own group number, taken from the global counter that starts at 2, so that pack.c can tell two stacks of the same kind apart and keep them from merging. Other weapons are single. new_thing then applies a random curse or enchantment to the bonuses."
  - id: "hit-and-num"
    line_start: 191
    line_end: 218
    title: "Does It Hit? And Showing a Plus"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "hit_monster is a thin wrapper that puts the coordinates into a coord and passes them to fight with the thrown flag set, the same routine as a melee blow. num turns bonuses into text. A bonus of zero or more gets a plus sign, as in '+1' and a negative one keeps its minus. For a weapon the damage bonus is added after a comma, giving '+1,+2'. Armour and rings use only the first number."
  - id: "wield"
    line_start: 220
    line_end: 258
    title: "Taking a Weapon in Hand"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "wield first runs dropcheck on the current weapon, so a cursed weapon cannot be put away: the old value of cur_weapon is restored after the check, since dropcheck clears it. Then get_item asks for a weapon. Armour is refused with 'you can't wield armor', a weapon already wielded is refused by is_current, and in these cases after is set false so no turn passes. Otherwise cur_weapon is set and the game says 'you are now wielding' with the item and its letter."
  - id: "fallpos"
    line_start: 260
    line_end: 288
    title: "Choosing a Free Square"
    wikipedia_url: "https://en.wikipedia.org/wiki/Reservoir_sampling"
    image_url: ""
    image_caption: ""
    content: "fallpos tries the nine squares around a point. It skips the hero's own square, and counts those that are plain floor or passage. As in create monster, it increases a counter and picks each candidate if rnd(count) is zero, so each is equally likely without any list. It returns whether any was found. Nothing may land on a trap, stairs, door or another object."
---

```c
/*
 * Functions for dealing with problems brought about by weapons
 *
 * @(#)weapons.c	4.34 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <curses.h>
#include <string.h>
#include <ctype.h>
#include "rogue.h"

#define NO_WEAPON -1

int group = 2;

static struct init_weaps {
    char *iw_dam;	/* Damage when wielded */
    char *iw_hrl;	/* Damage when thrown */
    char iw_launch;	/* Launching weapon */
    int iw_flags;	/* Miscellaneous flags */
} init_dam[MAXWEAPONS] = {
    { "2x4",	"1x3",	NO_WEAPON,	0,		},	/* Mace */
    { "3x4",	"1x2",	NO_WEAPON,	0,		},	/* Long sword */
    { "1x1",	"1x1",	NO_WEAPON,	0,		},	/* Bow */
    { "1x1",	"2x3",	BOW,		ISMANY|ISMISL,	},	/* Arrow */
    { "1x6",	"1x4",	NO_WEAPON,	ISMISL|ISMISL,	},	/* Dagger */
    { "4x4",	"1x2",	NO_WEAPON,	0,		},	/* 2h sword */
    { "1x1",	"1x3",	NO_WEAPON,	ISMANY|ISMISL,	},	/* Dart */
    { "1x2",	"2x4",	NO_WEAPON,	ISMANY|ISMISL,	},	/* Shuriken */
    { "2x3",	"1x6",	NO_WEAPON,	ISMISL,		},	/* Spear */
};

/*
 * missile:
 *	Fire a missile in a given direction
 */

void
missile(int ydelta, int xdelta)
{
    THING *obj;

    /*
     * Get which thing we are hurling
     */
    if ((obj = get_item("throw", WEAPON)) == NULL)
	return;
    if (!dropcheck(obj) || is_current(obj))
	return;
    obj = leave_pack(obj, TRUE, FALSE);
    do_motion(obj, ydelta, xdelta);
    /*
     * AHA! Here it has hit something.  If it is a wall or a door,
     * or if it misses (combat) the monster, put it on the floor
     */
    if (moat(obj->o_pos.y, obj->o_pos.x) == NULL ||
	!hit_monster(unc(obj->o_pos), obj))
	    fall(obj, TRUE);
}

/*
 * do_motion:
 *	Do the actual motion on the screen done by an object traveling
 *	across the room
 */

void
do_motion(THING *obj, int ydelta, int xdelta)
{
    int ch;

    /*
     * Come fly with us ...
     */
    obj->o_pos = hero;
    for (;;)
    {
	/*
	 * Erase the old one
	 */
	if (!ce(obj->o_pos, hero) && cansee(unc(obj->o_pos)) && !terse)
	{
	    ch = chat(obj->o_pos.y, obj->o_pos.x);
	    if (ch == FLOOR && !show_floor())
		ch = ' ';
	    mvaddch(obj->o_pos.y, obj->o_pos.x, ch);
	}
	/*
	 * Get the new position
	 */
	obj->o_pos.y += ydelta;
	obj->o_pos.x += xdelta;
	if (step_ok(ch = winat(obj->o_pos.y, obj->o_pos.x)) && ch != DOOR)
	{
	    /*
	     * It hasn't hit anything yet, so display it
	     * If it alright.
	     */
	    if (cansee(unc(obj->o_pos)) && !terse)
	    {
		mvaddch(obj->o_pos.y, obj->o_pos.x, obj->o_type);
		refresh();
	    }
	    continue;
	}
	break;
    }
}

/*
 * fall:
 *	Drop an item someplace around here.
 */

void
fall(THING *obj, bool pr)
{
    PLACE *pp;
    static coord fpos;

    if (fallpos(&obj->o_pos, &fpos))
    {
	pp = INDEX(fpos.y, fpos.x);
	pp->p_ch = (char) obj->o_type;
	obj->o_pos = fpos;
	if (cansee(fpos.y, fpos.x))
	{
	    if (pp->p_monst != NULL)
		pp->p_monst->t_oldch = (char) obj->o_type;
	    else
		mvaddch(fpos.y, fpos.x, obj->o_type);
	}
	attach(lvl_obj, obj);
	return;
    }
    if (pr)
    {
	if (has_hit)
	{
	    endmsg();
	    has_hit = FALSE;
	}
	msg("the %s vanishes as it hits the ground",
	    weap_info[obj->o_which].oi_name);
    }
    discard(obj);
}

/*
 * init_weapon:
 *	Set up the initial goodies for a weapon
 */

void
init_weapon(THING *weap, int which)
{
    struct init_weaps *iwp;

    weap->o_type = WEAPON;
    weap->o_which = which;
    iwp = &init_dam[which];
    strncpy(weap->o_damage, iwp->iw_dam, sizeof(weap->o_damage));
    strncpy(weap->o_hurldmg,iwp->iw_hrl, sizeof(weap->o_hurldmg));
    weap->o_launch = iwp->iw_launch;
    weap->o_flags = iwp->iw_flags;
    weap->o_hplus = 0;
    weap->o_dplus = 0;
    if (which == DAGGER)
    {
	weap->o_count = rnd(4) + 2;
	weap->o_group = group++;
    }
    else if (weap->o_flags & ISMANY)
    {
	weap->o_count = rnd(8) + 8;
	weap->o_group = group++;
    }
    else
    {
	weap->o_count = 1;
	weap->o_group = 0;
    }
}

/*
 * hit_monster:
 *	Does the missile hit the monster?
 */
int
hit_monster(int y, int x, THING *obj)
{
    static coord mp;

    mp.y = y;
    mp.x = x;
    return fight(&mp, obj, TRUE);
}

/*
 * num:
 *	Figure out the plus number for armor/weapons
 */
char *
num(int n1, int n2, char type)
{
    static char numbuf[10];

    sprintf(numbuf, n1 < 0 ? "%d" : "+%d", n1);
    if (type == WEAPON)
	sprintf(&numbuf[strlen(numbuf)], n2 < 0 ? ",%d" : ",+%d", n2);
    return numbuf;
}

/*
 * wield:
 *	Pull out a certain weapon
 */

void
wield()
{
    THING *obj, *oweapon;
    char *sp;

    oweapon = cur_weapon;
    if (!dropcheck(cur_weapon))
    {
	cur_weapon = oweapon;
	return;
    }
    cur_weapon = oweapon;
    if ((obj = get_item("wield", WEAPON)) == NULL)
    {
bad:
	after = FALSE;
	return;
    }

    if (obj->o_type == ARMOR)
    {
	msg("you can't wield armor");
	goto bad;
    }
    if (is_current(obj))
        goto bad;

    sp = inv_name(obj, TRUE);
    cur_weapon = obj;
    if (!terse)
	addmsg("you are now ");
    msg("wielding %s (%c)", sp, obj->o_packch);
}

/*
 * fallpos:
 *	Pick a random position around the give (y, x) coordinates
 */
bool
fallpos(coord *pos, coord *newpos)
{
    int y, x, cnt, ch;

    cnt = 0;
    for (y = pos->y - 1; y <= pos->y + 1; y++)
	for (x = pos->x - 1; x <= pos->x + 1; x++)
	{
	    /*
	     * check to make certain the spot is empty, if it is,
	     * put the object there, set it in the level list
	     * and re-draw the room if he can see it
	     */
	    if (y == hero.y && x == hero.x)
		continue;
	    if (((ch = chat(y, x)) == FLOOR || ch == PASSAGE)
					&& rnd(++cnt) == 0)
	    {
		newpos->y = y;
		newpos->x = x;
	    }
	}
    return (bool)(cnt != 0);
}
```
