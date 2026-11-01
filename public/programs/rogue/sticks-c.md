---
title: "sticks.c"
program: "Rogue"
program_slug: "rogue"
file_path: "sticks.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/sticks.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "sticks-c"
order: 19
description: "Wands and staffs: their charges, the zap command, life drain, and bolts that bounce off walls."

summary:
  - point: "A wand or staff has a fixed number of charges and one effect, and its kind is hidden until it is used"
    link: "https://en.wikipedia.org/wiki/Wand"
    link_label: "Wand"
  - point: "Fire, ice and lightning bolts bounce off walls and can hit the hero who fired them"
    link: "https://en.wikipedia.org/wiki/Ray_(optics)"
    link_label: "Ray"
  - point: "A monster can be polymorphed into any of the 26 letters, keeping its place and its pack"
    link: "https://en.wikipedia.org/wiki/Polymorph_(role-playing_games)"
    link_label: "Polymorph"

enhancements:
  - id: "fix-stick"
    line_start: 19
    line_end: 40
    title: "Charging a New Stick"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wand"
    image_url: ""
    image_caption: ""
    content: "fix_stick finishes a newly made wand or staff. The kind is chosen by new_thing, and the material name says whether it is a 'staff' or a 'wand'. A staff is given a melee damage of 2x3, so it can be used as a poor club, and any other stick 1x1. Thrown damage is 1x1 for all. A wand of light is given between 10 and 19 charges, and every other kind has between 3 and 7. The number of charges is hidden until the stick is identified, when charge_str adds it to the name."
  - id: "zap-start"
    line_start: 42
    line_end: 70
    title: "Zapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wand"
    image_url: ""
    image_caption: ""
    content: "do_zap asks for a stick with get_item. Anything else is refused with 'you can't zap with that!' and no turn is used. A stick without charges only prints 'nothing happens', and the charge count is left at zero. Otherwise one switch handles the kind. Each charge is used only at the end of the function, after the effect, so a case that returns early, like the drain wand with too few hit points, costs nothing."
  - id: "light-and-drain"
    line_start: 71
    line_end: 102
    title: "Light and Drain Life"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The wand of light, whose comment calls it a 'Reddy Kilowat' wand, is always identified. In a passage the corridor 'glows and then fades'. In a room it clears the dark flag and calls enter_room to redraw the hero's surroundings, with a shimmering blue light, unless hallucinating. Drain life needs the hero to have at least two hit points, and calls drain, shown further down."
  - id: "direction-wands"
    line_start: 103
    line_end: 144
    title: "Wands That Go in a Direction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Polymorph_(role-playing_games)"
    image_url: ""
    image_caption: ""
    content: "Five wands act on the first monster in a line: invisibility, polymorph, teleport away, teleport to and cancellation. The code walks from the hero in the direction of the zap, using the delta set when the player gave a direction, until it hits something that can't be walked through, and takes the monster there if any. If it is a venus flytrap, the hero's hold is broken, whatever the wand. Invisibility sets ISINVIS. Polymorph detaches the monster, builds a new one with a random letter at the same spot with the same pack and the character that was beneath it, and is identified only if the hero could see it."
  - id: "cancel-and-teleport"
    line_start: 145
    line_end: 174
    title: "Cancellation and Teleportation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Cancellation sets ISCANC, which turns off a monster's special attacks, as fight.c tests, and clears invisibility and confusion. It also resets the disguise, so a xeroc stops looking like an object. Teleport away moves the monster to a random floor position that is not the hero's. Teleport to puts it at the square next to the hero in the direction zapped. In both cases the monster is set running at the hero and moved with relocate. Nothing in this function marks these wands as known."
  - id: "missile"
    line_start: 175
    line_end: 191
    title: "Magic Missile"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dice_notation"
    image_url: ""
    image_caption: ""
    content: "A magic missile is a pretend object, a bolt, built on the spot: type '*', thrown damage 1x4, a to-hit bonus of 100 so that it cannot miss, and one extra point of damage. It is launched by do_motion, the same routine as a thrown weapon. If it reaches a monster that fails a saving throw against magic, hit_monster works out the damage. If not, the player sees that 'the missle vanishes with a puff of smoke', the source spelling."
  - id: "haste-slow-bolts"
    line_start: 192
    line_end: 241
    title: "Haste, Slow, and the Three Bolts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Haste monster and slow monster find the monster in line the same way. Haste on a slowed monster only cancels the slow, and on any other makes it hasted. Slow on a hasted monster cancels the haste, and on any other makes it slow. In both cases the monster then runs at the hero. Lightning, fire and ice share a case and differ only by the name, 'bolt', 'flame' or 'ice', passed to fire_bolt; all three are always identified. The nothing wand does nothing. Last of all comes the line that spends a charge."
  - id: "drain"
    line_start: 243
    line_end: 292
    title: "Draining Life"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "drain makes a list of the monsters in the hero's room, or, if the hero is in a doorway, in the passage it opens onto, or, if in a passage, at the doors that lead to it. It holds up to forty. If there are none, 'you have a tingling feeling'. Otherwise the hero's hit points are halved and the new total is divided among the monsters, so each loses an equal share. Any that fall to zero are killed, and the rest start chasing the hero."
  - id: "bolt-setup"
    line_start: 294
    line_end: 325
    title: "A Bolt Made of a Fake Weapon"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ray_(optics)"
    image_url: ""
    image_caption: ""
    content: "fire_bolt is used by the hero's wands and by a dragon's breath. It makes a bolt object of type weapon, using the entry FLAME, the fake weapon at the end of the weapon table. Its thrown damage is 6x6 and it always hits. The name in the weapon table is overwritten with 'bolt', 'flame' or 'ice', so the ordinary hit and miss messages say the right thing. The picture of the ray depends on the direction: a slash, a backslash, a dash or a bar. hit_hero starts true when a monster fires, so the bolt first aims at the hero, and false when the hero fires."
  - id: "bolt-flight"
    line_start: 326
    line_end: 353
    title: "Bouncing Off Walls"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ray_(optics)"
    image_url: ""
    image_caption: ""
    content: "The bolt moves one square at a time for up to BOLT_LENGTH squares, recording each position so it can be erased. When it meets a wall, a door or blank space, it reverses direction, the loop counter is stepped back, the message 'the bolt bounces' is printed, and the question of who it can hurt flips. A comment explains an odd case: if the hero is standing in a doorway and fires at the wall holding it, the bolt would otherwise loop forever. A bolt therefore can come back and hit the one who sent it."
  - id: "bolt-hits-monster"
    line_start: 354
    line_end: 384
    title: "When It Hits a Monster"
    wikipedia_url: "https://en.wikipedia.org/wiki/Saving_throw"
    image_url: ""
    image_caption: ""
    content: "If the bolt is allowed to hit monsters and one stands on the square, the monster gets a saving throw against magic. A monster that fails is hit for the 6x6 damage, and the bolt is used up. A dragon is immune to flame: the message is 'the flame bounces off the dragon', and it takes no harm. If it saves, the bolt flies on, so it can pass several monsters in a line, and the message is that it 'whizzes past'. If the hero fired it, the monster that saved starts chasing."
  - id: "bolt-hits-hero"
    line_start: 385
    line_end: 413
    title: "When It Hits the Hero"
    wikipedia_url: "https://en.wikipedia.org/wiki/Saving_throw"
    image_url: ""
    image_caption: ""
    content: "If the bolt is now allowed to hurt the hero and reaches the hero's square, the hero too gets a saving throw. A failed one costs a roll of six six-sided dice in hit points. If that takes the hero to zero, the death is credited to the bolt, with the letter b, if the hero fired it, or to the monster that did. A passed save gives 'the bolt whizzes by you'. After the loop, every square that the bolt crossed is restored from the map so the picture of the ray disappears."
  - id: "charge-str"
    line_start: 415
    line_end: 431
    title: "Showing the Charges"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "charge_str is the function that nameit calls for a stick. If the stick has not been identified it returns an empty string, so the player cannot see the number of charges. Once it is, the text is ' [3 charges]', or ' [3]' in terse mode. It returns a pointer into a static buffer of 20 characters, a common idiom in this code, where the string must be used before the next call."
---

```c
/*
 * Functions to implement the various sticks one might find
 * while wandering around the dungeon.
 *
 * @(#)sticks.c	4.39 (Berkeley) 02/05/99
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

/*
 * fix_stick:
 *	Set up a new stick
 */

void
fix_stick(THING *cur)
{
    if (strcmp(ws_type[cur->o_which], "staff") == 0)
	strncpy(cur->o_damage,"2x3",sizeof(cur->o_damage));
    else
	strncpy(cur->o_damage,"1x1",sizeof(cur->o_damage));
    strncpy(cur->o_hurldmg,"1x1",sizeof(cur->o_hurldmg));

    switch (cur->o_which)
    {
	case WS_LIGHT:
	    cur->o_charges = rnd(10) + 10;
	otherwise:
	    cur->o_charges = rnd(5) + 3;
    }
}

/*
 * do_zap:
 *	Perform a zap with a wand
 */

void
do_zap()
{
    THING *obj, *tp;
    int y, x;
    char *name;
    char monster, oldch;
    static THING bolt;

    if ((obj = get_item("zap with", STICK)) == NULL)
	return;
    if (obj->o_type != STICK)
    {
	after = FALSE;
	msg("you can't zap with that!");
	return;
    }
    if (obj->o_charges == 0)
    {
	msg("nothing happens");
	return;
    }
    switch (obj->o_which)
    {
	case WS_LIGHT:
	    /*
	     * Reddy Kilowat wand.  Light up the room
	     */
	    ws_info[WS_LIGHT].oi_know = TRUE;
	    if (proom->r_flags & ISGONE)
		msg("the corridor glows and then fades");
	    else
	    {
		proom->r_flags &= ~ISDARK;
		/*
		 * Light the room and put the player back up
		 */
		enter_room(&hero);
		addmsg("the room is lit");
		if (!terse)
		    addmsg(" by a shimmering %s light", pick_color("blue"));
		endmsg();
	    }
	when WS_DRAIN:
	    /*
	     * take away 1/2 of hero's hit points, then take it away
	     * evenly from the monsters in the room (or next to hero
	     * if he is in a passage)
	     */
	    if (pstats.s_hpt < 2)
	    {
		msg("you are too weak to use it");
		return;
	    }
	    else
		drain();
	when WS_INVIS:
	case WS_POLYMORPH:
	case WS_TELAWAY:
	case WS_TELTO:
	case WS_CANCEL:
	    y = hero.y;
	    x = hero.x;
	    while (step_ok(winat(y, x)))
	    {
		y += delta.y;
		x += delta.x;
	    }
	    if ((tp = moat(y, x)) != NULL)
	    {
		monster = tp->t_type;
		if (monster == 'F')
		    player.t_flags &= ~ISHELD;
		switch (obj->o_which) {
		    case WS_INVIS:
			tp->t_flags |= ISINVIS;
			if (cansee(y, x))
			    mvaddch(y, x, tp->t_oldch);
			break;
		    case WS_POLYMORPH:
		    {
			THING *pp;

			pp = tp->t_pack;
			detach(mlist, tp);
			if (see_monst(tp))
			    mvaddch(y, x, chat(y, x));
			oldch = tp->t_oldch;
			delta.y = y;
			delta.x = x;
			new_monster(tp, monster = (char)(rnd(26) + 'A'), &delta);
			if (see_monst(tp))
			    mvaddch(y, x, monster);
			tp->t_oldch = oldch;
			tp->t_pack = pp;
			ws_info[WS_POLYMORPH].oi_know |= see_monst(tp);
			break;
		    }
		    case WS_CANCEL:
			tp->t_flags |= ISCANC;
			tp->t_flags &= ~(ISINVIS|CANHUH);
			tp->t_disguise = tp->t_type;
			if (see_monst(tp))
			    mvaddch(y, x, tp->t_disguise);
			break;
		    case WS_TELAWAY:
		    case WS_TELTO:
                    {
			coord new_pos;

			if (obj->o_which == WS_TELAWAY)
			{
			    do
			    {
				find_floor(NULL, &new_pos, FALSE, TRUE);
			    } while (ce(new_pos, hero));
			}
			else
			{
			    new_pos.y = hero.y + delta.y;
			    new_pos.x = hero.x + delta.x;
			}
			tp->t_dest = &hero;
			tp->t_flags |= ISRUN;
			relocate(tp, &new_pos);
		    }
		}
	    }
	when WS_MISSILE:
	    ws_info[WS_MISSILE].oi_know = TRUE;
	    bolt.o_type = '*';
	    strncpy(bolt.o_hurldmg,"1x4",sizeof(bolt.o_hurldmg));
	    bolt.o_hplus = 100;
	    bolt.o_dplus = 1;
	    bolt.o_flags = ISMISL;
	    if (cur_weapon != NULL)
		bolt.o_launch = cur_weapon->o_which;
	    do_motion(&bolt, delta.y, delta.x);
	    if ((tp = moat(bolt.o_pos.y, bolt.o_pos.x)) != NULL
		&& !save_throw(VS_MAGIC, tp))
		    hit_monster(unc(bolt.o_pos), &bolt);
	    else if (terse)
		msg("missle vanishes");
	    else
		msg("the missle vanishes with a puff of smoke");
	when WS_HASTE_M:
	case WS_SLOW_M:
	    y = hero.y;
	    x = hero.x;
	    while (step_ok(winat(y, x)))
	    {
		y += delta.y;
		x += delta.x;
	    }
	    if ((tp = moat(y, x)) != NULL)
	    {
		if (obj->o_which == WS_HASTE_M)
		{
		    if (on(*tp, ISSLOW))
			tp->t_flags &= ~ISSLOW;
		    else
			tp->t_flags |= ISHASTE;
		}
		else
		{
		    if (on(*tp, ISHASTE))
			tp->t_flags &= ~ISHASTE;
		    else
			tp->t_flags |= ISSLOW;
		    tp->t_turn = TRUE;
		}
		delta.y = y;
		delta.x = x;
		runto(&delta);
	    }
	when WS_ELECT:
	case WS_FIRE:
	case WS_COLD:
	    if (obj->o_which == WS_ELECT)
		name = "bolt";
	    else if (obj->o_which == WS_FIRE)
		name = "flame";
	    else
		name = "ice";
	    fire_bolt(&hero, &delta, name);
	    ws_info[obj->o_which].oi_know = TRUE;
	when WS_NOP:
	    break;
#ifdef MASTER
	otherwise:
	    msg("what a bizarre schtick!");
#endif
    }
    obj->o_charges--;
}

/*
 * drain:
 *	Do drain hit points from player shtick
 */

void
drain()
{
    THING *mp;
    struct room *corp;
    THING **dp;
    int cnt;
    bool inpass;
    static THING *drainee[40];

    /*
     * First cnt how many things we need to spread the hit points among
     */
    cnt = 0;
    if (chat(hero.y, hero.x) == DOOR)
	corp = &passages[flat(hero.y, hero.x) & F_PNUM];
    else
	corp = NULL;
    inpass = (bool)(proom->r_flags & ISGONE);
    dp = drainee;
    for (mp = mlist; mp != NULL; mp = next(mp))
	if (mp->t_room == proom || mp->t_room == corp ||
	    (inpass && chat(mp->t_pos.y, mp->t_pos.x) == DOOR &&
	    &passages[flat(mp->t_pos.y, mp->t_pos.x) & F_PNUM] == proom))
		*dp++ = mp;
    if ((cnt = (int)(dp - drainee)) == 0)
    {
	msg("you have a tingling feeling");
	return;
    }
    *dp = NULL;
    pstats.s_hpt /= 2;
    cnt = pstats.s_hpt / cnt;
    /*
     * Now zot all of the monsters
     */
    for (dp = drainee; *dp; dp++)
    {
	mp = *dp;
	if ((mp->t_stats.s_hpt -= cnt) <= 0)
	    killed(mp, see_monst(mp));
	else
	    runto(&mp->t_pos);
    }
}

/*
 * fire_bolt:
 *	Fire a bolt in a given direction from a specific starting place
 */

void
fire_bolt(coord *start, coord *dir, char *name)
{
    coord *c1, *c2;
    THING *tp;
    char dirch = 0, ch;
    bool hit_hero, used, changed;
    static coord pos;
    static coord spotpos[BOLT_LENGTH];
    THING bolt;

    bolt.o_type = WEAPON;
    bolt.o_which = FLAME;
    strncpy(bolt.o_hurldmg,"6x6",sizeof(bolt.o_hurldmg));
    bolt.o_hplus = 100;
    bolt.o_dplus = 0;
    weap_info[FLAME].oi_name = name;
    switch (dir->y + dir->x)
    {
	case 0: dirch = '/';
	when 1: case -1: dirch = (dir->y == 0 ? '-' : '|');
	when 2: case -2: dirch = '\\';
    }
    pos = *start;
    hit_hero = (bool)(start != &hero);
    used = FALSE;
    changed = FALSE;
    for (c1 = spotpos; c1 <= &spotpos[BOLT_LENGTH-1] && !used; c1++)
    {
	pos.y += dir->y;
	pos.x += dir->x;
	*c1 = pos;
	ch = winat(pos.y, pos.x);
	switch (ch)
	{
	    case DOOR:
		/*
		 * this code is necessary if the hero is on a door
		 * and he fires at the wall the door is in, it would
		 * otherwise loop infinitely
		 */
		if (ce(hero, pos))
		    goto def;
		/* FALLTHROUGH */
	    case '|':
	    case '-':
	    case ' ':
		if (!changed)
		    hit_hero = !hit_hero;
		changed = FALSE;
		dir->y = -dir->y;
		dir->x = -dir->x;
		c1--;
		msg("the %s bounces", name);
		break;
	    default:
def:
		if (!hit_hero && (tp = moat(pos.y, pos.x)) != NULL)
		{
		    hit_hero = TRUE;
		    changed = !changed;
		    tp->t_oldch = chat(pos.y, pos.x);
		    if (!save_throw(VS_MAGIC, tp))
		    {
			bolt.o_pos = pos;
			used = TRUE;
			if (tp->t_type == 'D' && strcmp(name, "flame") == 0)
			{
			    addmsg("the flame bounces");
			    if (!terse)
				addmsg(" off the dragon");
			    endmsg();
			}
			else
			    hit_monster(unc(pos), &bolt);
		    }
		    else if (ch != 'M' || tp->t_disguise == 'M')
		    {
			if (start == &hero)
			    runto(&pos);
			if (terse)
			    msg("%s misses", name);
			else
			    msg("the %s whizzes past %s", name, set_mname(tp));
		    }
		}
		else if (hit_hero && ce(pos, hero))
		{
		    hit_hero = FALSE;
		    changed = !changed;
		    if (!save(VS_MAGIC))
		    {
			if ((pstats.s_hpt -= roll(6, 6)) <= 0)
			{
			    if (start == &hero)
				death('b');
			    else
				death(moat(start->y, start->x)->t_type);
			}
			used = TRUE;
			if (terse)
			    msg("the %s hits", name);
			else
			    msg("you are hit by the %s", name);
		    }
		    else
			msg("the %s whizzes by you", name);
		}
		mvaddch(pos.y, pos.x, dirch);
		refresh();
	}
    }
    for (c2 = spotpos; c2 < c1; c2++)
	mvaddch(c2->y, c2->x, chat(c2->y, c2->x));
}

/*
 * charge_str:
 *	Return an appropriate string for a wand charge
 */
char *
charge_str(THING *obj)
{
    static char buf[20];

    if (!(obj->o_flags & ISKNOW))
	buf[0] = '\0';
    else if (terse)
	sprintf(buf, " [%d]", obj->o_charges);
    else
	sprintf(buf, " [%d charges]", obj->o_charges);
    return buf;
}
```
