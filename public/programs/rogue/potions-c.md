---
title: "potions.c"
program: "Rogue"
program_slug: "rogue"
file_path: "potions.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/potions.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "potions-c"
order: 17
description: "Quaffing: what each of the fourteen potions does, and the helper routines for sight, stairs and levels."

summary:
  - point: "Potions that last use a flag plus a fuse that clears the flag later"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "Hallucination changes how monsters and objects look, and the hero can be tricked about what is real"
    link: "https://en.wikipedia.org/wiki/Hallucination"
    link_label: "Hallucination"
  - point: "Drinking is how the player learns what a potion is: the game marks it known when the effect is plain"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "p-actions"
    line_start: 17
    line_end: 51
    title: "A Table of Timed Potions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "PACT describes a potion whose effect lasts a while: the flag it sets on the hero, the function that undoes it, how long it lasts, and two messages, one for a player who is hallucinating and one for a straight mind. The table has an entry for every potion, in the same order as the constants. Confusion, hallucination, see invisible, blindness and levitation have real entries. Confusion lasts HUHDURATION, 20 turns, hallucination, see invisible and blindness SEEDURATION, 850 turns, and levitation HEALTIME, 30 turns. The other nine take effect at once and have zeroes. The messages are chosen by choose_str, which picks the hallucinating wording if the hero is tripping."
  - id: "quaff"
    line_start: 53
    line_end: 89
    title: "Drinking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "quaff asks for a potion with get_item. If the thing is not a potion, it answers 'yuk! Why would you want to drink that?' or 'that's undrinkable' in terse mode. If the potion chosen is the weapon in hand, the hero stops wielding it. The function notes whether the hero is hallucinating, because that changes what is learned, takes one potion out of the pack and leaves the switch to do the work. Whether the potion is discarded afterwards depends on whether it was the last in the stack, decided here before anything changes."
  - id: "basic-potions"
    line_start: 90
    line_end: 111
    title: "Poison, Healing and Strength"
    wikipedia_url: "https://en.wikipedia.org/wiki/Ability_score"
    image_url: ""
    image_caption: ""
    content: "Confusion hands over to do_pot. Poison is always recognised. A ring of sustain strength turns the effect into 'you feel momentarily sick', and without one, strength drops by one to three points, using a random number below three plus one. Healing is also recognised on drinking. It adds a roll of d4 per level of the hero to hit points, and if that goes past the maximum it raises the maximum by one and sets the hit points to it. It cures blindness. Strength adds a point at once through chg_str."
  - id: "detection"
    line_start: 112
    line_end: 156
    title: "Sensing Monsters and Magic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "A potion of monster detection sets the SEEMONST flag and a fuse with HUHDURATION, 20 turns, to turn it off again. turn_see draws every monster on the level, and if none is shown, which is to say all already visible, the message is 'you have a normal feeling for a moment', or a strange one if hallucinating. Magic detection draws a magic marker at the position of every magic object on the level, and those carried by monsters. Magic detection is identified only if something was found. show_win displays the result on the second window and waits for the player."
  - id: "lsd-and-see-invisible"
    line_start: 157
    line_end: 172
    title: "Hallucination and Sight"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hallucination"
    image_url: ""
    image_caption: ""
    content: "The hallucination potion first switches off monster detection if it is on, because it would reveal the true letters. Then it starts the visuals daemon, which scrambles the appearance of visible objects and monsters, and it records whether the stairs have been seen, so that the daemon leaves them alone if the hero already knew where they were. See invisible builds the 'tastes like fruit juice' message from the player's fruit option, sets CANSEE through do_pot, and if the hero could not see invisible before, calls invis_on to draw any invisible monsters now in view. The hallucination potion is always identified by drinking it; see invisible is not marked known by this code, so the player has to name it."
  - id: "level-heal-haste"
    line_start: 173
    line_end: 204
    title: "Experience, Extra Healing, Haste and Restore"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Raise level sets the experience to the point one past the current level's threshold and lets check_level do the rest, so the hero gains exactly one level. Extra healing adds a roll of d8 per level, raises the maximum hit points by one if the total passes it, and by two if the total passes it by more than level plus one. It cures blindness and hallucination. Haste calls add_haste, which sets the hasted flag with a fuse of four to seven turns; a hero who is already hasted instead faints from exhaustion. Quaffing it also sets after to false, so the monsters do not get a move that turn. Restore strength takes off the bonus from any ring of add strength, sets strength to the maximum, and puts the ring bonus back, so the ring does not get counted into the maximum."
  - id: "blind-levit-end"
    line_start: 205
    line_end: 225
    title: "Blindness, Levitation and the Epilogue"
    wikipedia_url: "https://en.wikipedia.org/wiki/Levitation"
    image_url: ""
    image_caption: ""
    content: "Blindness and levitation are handled by do_pot. After the switch, status redraws the bottom line and call_it is passed the potion's table entry: if the potion is now known, any name the player had typed is dropped; if not, the player is asked 'what do you want to call it?' so that a guess can be stored. A single remaining potion is discarded at the end. In wizard builds an unknown potion gives 'what an odd tasting potion!'."
  - id: "is-magic"
    line_start: 227
    line_end: 248
    title: "What Glows"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "is_magic is the test used by magic detection. Armour is magic if it is protected from rust or its class differs from the standard for its type. A weapon is magic if it has a bonus to hit or to damage. Potions, scrolls, sticks, rings and the Amulet always are. Food, gold and anything else are not. A cursed weapon with a negative bonus therefore glows in the same way as a good one, so a detection potion warns of both."
  - id: "see-monsters"
    line_start: 250
    line_end: 306
    title: "Seeing Invisible and Monsters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "invis_on turns on the ability to see invisible monsters and draws any that are in view. turn_see shows or hides every monster on the level. In show mode it walks the monster list: a monster the hero cannot ordinarily see is drawn in standout mode, and a hallucinating hero is shown random letters. In hide mode it restores whatever was on the map under any monster that cannot really be seen. It returns how many new monsters were revealed, which quaff uses to choose a message."
  - id: "seen-stairs"
    line_start: 308
    line_end: 336
    title: "Have I Seen the Stairs?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "seen_stairs answers a question that hallucination creates: has the player seen the stairs? If the screen shows a staircase at the stairs' position, or the hero is standing on them, the answer is yes. If a monster stands there, the answer is yes only if the hero can see the monster and it is awake, since then it must have moved there, or if the hero senses monsters and the square under it was once stairs. The comment in the source describes the situation as 'hairy'. The visuals daemon reads the stored answer so that it does not disguise stairs the hero already knew."
  - id: "raise-level"
    line_start: 338
    line_end: 348
    title: "A Level in a Bottle"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "raise_level sets the experience points to one more than the entry in the e_levels table for the current level, the amount needed for the next level, then calls check_level, which sees that the new total is enough and raises the level. The hit points come from the usual level-up code in check_level."
  - id: "do-pot"
    line_start: 350
    line_end: 375
    title: "The Standard Pattern for a Timed Potion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "do_pot is the routine most of the timed potions share. It marks the potion known if the caller says to. It spreads the duration, which varies it by about five percent either way. If the hero does not have the flag already, it sets it, starts a fuse that will call the undo function, and redraws the view. If the hero already has it, the existing fuse is lengthened instead, so drinking two potions in a row does not give two timers. Last it prints the message that matches the hero's state. A table plus one function stand in for what would otherwise be five cases."
---

```c
/*
 * Function(s) for dealing with potions
 *
 * @(#)potions.c	4.46 (Berkeley) 06/07/83
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <curses.h>
#include <ctype.h>
#include "rogue.h"

typedef struct
{
    int pa_flags;
    void (*pa_daemon)();
    int pa_time;
    char *pa_high, *pa_straight;
} PACT;

static PACT p_actions[] =
{
	{ ISHUH,	unconfuse,	HUHDURATION,	/* P_CONFUSE */
		"what a tripy feeling!",
		"wait, what's going on here. Huh? What? Who?" },
	{ ISHALU,	come_down,	SEEDURATION,	/* P_LSD */
		"Oh, wow!  Everything seems so cosmic!",
		"Oh, wow!  Everything seems so cosmic!" },
	{ 0,		NULL,	0 },			/* P_POISON */
	{ 0,		NULL,	0 },			/* P_STRENGTH */
	{ CANSEE,	unsee,	SEEDURATION,		/* P_SEEINVIS */
		prbuf,
		prbuf },
	{ 0,		NULL,	0 },			/* P_HEALING */
	{ 0,		NULL,	0 },			/* P_MFIND */
	{ 0,		NULL,	0 },			/* P_TFIND  */
	{ 0,		NULL,	0 },			/* P_RAISE */
	{ 0,		NULL,	0 },			/* P_XHEAL */
	{ 0,		NULL,	0 },			/* P_HASTE */
	{ 0,		NULL,	0 },			/* P_RESTORE */
	{ ISBLIND,	sight,	SEEDURATION,		/* P_BLIND */
		"oh, bummer!  Everything is dark!  Help!",
		"a cloak of darkness falls around you" },
	{ ISLEVIT,	land,	HEALTIME,		/* P_LEVIT */
		"oh, wow!  You're floating in the air!",
		"you start to float in the air" }
};

/*
 * quaff:
 *	Quaff a potion from the pack
 */

void
quaff()
{
    THING *obj, *tp, *mp;
    bool discardit = FALSE;
    bool show, trip;

    obj = get_item("quaff", POTION);
    /*
     * Make certain that it is somethings that we want to drink
     */
    if (obj == NULL)
	return;
    if (obj->o_type != POTION)
    {
	if (!terse)
	    msg("yuk! Why would you want to drink that?");
	else
	    msg("that's undrinkable");
	return;
    }
    if (obj == cur_weapon)
	cur_weapon = NULL;

    /*
     * Calculate the effect it has on the poor guy.
     */
    trip = on(player, ISHALU);
    discardit = (bool)(obj->o_count == 1);
    leave_pack(obj, FALSE, FALSE);
    switch (obj->o_which)
    {
	case P_CONFUSE:
	    do_pot(P_CONFUSE, !trip);
	when P_POISON:
	    pot_info[P_POISON].oi_know = TRUE;
	    if (ISWEARING(R_SUSTSTR))
		msg("you feel momentarily sick");
	    else
	    {
		chg_str(-(rnd(3) + 1));
		msg("you feel very sick now");
		come_down();
	    }
	when P_HEALING:
	    pot_info[P_HEALING].oi_know = TRUE;
	    if ((pstats.s_hpt += roll(pstats.s_lvl, 4)) > max_hp)
		pstats.s_hpt = ++max_hp;
	    sight();
	    msg("you begin to feel better");
	when P_STRENGTH:
	    pot_info[P_STRENGTH].oi_know = TRUE;
	    chg_str(1);
	    msg("you feel stronger, now.  What bulging muscles!");
	when P_MFIND:
	    player.t_flags |= SEEMONST;
	    fuse((void(*)())turn_see, TRUE, HUHDURATION, AFTER);
	    if (!turn_see(FALSE))
		msg("you have a %s feeling for a moment, then it passes",
		    choose_str("normal", "strange"));
	when P_TFIND:
	    /*
	     * Potion of magic detection.  Show the potions and scrolls
	     */
	    show = FALSE;
	    if (lvl_obj != NULL)
	    {
		wclear(hw);
		for (tp = lvl_obj; tp != NULL; tp = next(tp))
		{
		    if (is_magic(tp))
		    {
			show = TRUE;
			wmove(hw, tp->o_pos.y, tp->o_pos.x);
			waddch(hw, MAGIC);
			pot_info[P_TFIND].oi_know = TRUE;
		    }
		}
		for (mp = mlist; mp != NULL; mp = next(mp))
		{
		    for (tp = mp->t_pack; tp != NULL; tp = next(tp))
		    {
			if (is_magic(tp))
			{
			    show = TRUE;
			    wmove(hw, mp->t_pos.y, mp->t_pos.x);
			    waddch(hw, MAGIC);
			}
		    }
		}
	    }
	    if (show)
	    {
		pot_info[P_TFIND].oi_know = TRUE;
		show_win("You sense the presence of magic on this level.--More--");
	    }
	    else
		msg("you have a %s feeling for a moment, then it passes",
		    choose_str("normal", "strange"));
	when P_LSD:
	    if (!trip)
	    {
		if (on(player, SEEMONST))
		    turn_see(FALSE);
		start_daemon(visuals, 0, BEFORE);
		seenstairs = seen_stairs();
	    }
	    do_pot(P_LSD, TRUE);
	when P_SEEINVIS:
	    sprintf(prbuf, "this potion tastes like %s juice", fruit);
	    show = on(player, CANSEE);
	    do_pot(P_SEEINVIS, FALSE);
	    if (!show)
		invis_on();
	    sight();
	when P_RAISE:
	    pot_info[P_RAISE].oi_know = TRUE;
	    msg("you suddenly feel much more skillful");
	    raise_level();
	when P_XHEAL:
	    pot_info[P_XHEAL].oi_know = TRUE;
	    if ((pstats.s_hpt += roll(pstats.s_lvl, 8)) > max_hp)
	    {
		if (pstats.s_hpt > max_hp + pstats.s_lvl + 1)
		    ++max_hp;
		pstats.s_hpt = ++max_hp;
	    }
	    sight();
	    come_down();
	    msg("you begin to feel much better");
	when P_HASTE:
	    pot_info[P_HASTE].oi_know = TRUE;
	    after = FALSE;
	    if (add_haste(TRUE))
		msg("you feel yourself moving much faster");
	when P_RESTORE:
	    if (ISRING(LEFT, R_ADDSTR))
		add_str(&pstats.s_str, -cur_ring[LEFT]->o_arm);
	    if (ISRING(RIGHT, R_ADDSTR))
		add_str(&pstats.s_str, -cur_ring[RIGHT]->o_arm);
	    if (pstats.s_str < max_stats.s_str)
		pstats.s_str = max_stats.s_str;
	    if (ISRING(LEFT, R_ADDSTR))
		add_str(&pstats.s_str, cur_ring[LEFT]->o_arm);
	    if (ISRING(RIGHT, R_ADDSTR))
		add_str(&pstats.s_str, cur_ring[RIGHT]->o_arm);
	    msg("hey, this tastes great.  It make you feel warm all over");
	when P_BLIND:
	    do_pot(P_BLIND, TRUE);
	when P_LEVIT:
	    do_pot(P_LEVIT, TRUE);
#ifdef MASTER
	otherwise:
	    msg("what an odd tasting potion!");
	    return;
#endif
    }
    status();
    /*
     * Throw the item away
     */

    call_it(&pot_info[obj->o_which]);

    if (discardit)
	discard(obj);
    return;
}

/*
 * is_magic:
 *	Returns true if an object radiates magic
 */
bool
is_magic(THING *obj)
{
    switch (obj->o_type)
    {
	case ARMOR:
	    return (bool)((obj->o_flags&ISPROT) || obj->o_arm != a_class[obj->o_which]);
	case WEAPON:
	    return (bool)(obj->o_hplus != 0 || obj->o_dplus != 0);
	case POTION:
	case SCROLL:
	case STICK:
	case RING:
	case AMULET:
	    return TRUE;
    }
    return FALSE;
}

/*
 * invis_on:
 *	Turn on the ability to see invisible
 */

void
invis_on()
{
    THING *mp;

    player.t_flags |= CANSEE;
    for (mp = mlist; mp != NULL; mp = next(mp))
	if (on(*mp, ISINVIS) && see_monst(mp) && !on(player, ISHALU))
	    mvaddch(mp->t_pos.y, mp->t_pos.x, mp->t_disguise);
}

/*
 * turn_see:
 *	Put on or off seeing monsters on this level
 */
bool
turn_see(bool turn_off)
{
    THING *mp;
    bool can_see, add_new;

    add_new = FALSE;
    for (mp = mlist; mp != NULL; mp = next(mp))
    {
	move(mp->t_pos.y, mp->t_pos.x);
	can_see = see_monst(mp);
	if (turn_off)
	{
	    if (!can_see)
		addch(mp->t_oldch);
	}
	else
	{
	    if (!can_see)
		standout();
	    if (!on(player, ISHALU))
		addch(mp->t_type);
	    else
		addch(rnd(26) + 'A');
	    if (!can_see)
	    {
		standend();
		add_new++;
	    }
	}
    }
    if (turn_off)
	player.t_flags &= ~SEEMONST;
    else
	player.t_flags |= SEEMONST;
    return add_new;
}

/*
 * seen_stairs:
 *	Return TRUE if the player has seen the stairs
 */
bool
seen_stairs()
{
    THING	*tp;

    move(stairs.y, stairs.x);
    if (inch() == STAIRS)			/* it's on the map */
	return TRUE;
    if (ce(hero, stairs))			/* It's under him */
	return TRUE;

    /*
     * if a monster is on the stairs, this gets hairy
     */
    if ((tp = moat(stairs.y, stairs.x)) != NULL)
    {
	if (see_monst(tp) && on(*tp, ISRUN))	/* if it's visible and awake */
	    return TRUE;			/* it must have moved there */

	if (on(player, SEEMONST)		/* if she can detect monster */
	    && tp->t_oldch == STAIRS)		/* and there once were stairs */
		return TRUE;			/* it must have moved there */
    }
    return FALSE;
}

/*
 * raise_level:
 *	The guy just magically went up a level.
 */

void
raise_level()
{
    pstats.s_exp = e_levels[pstats.s_lvl-1] + 1L;
    check_level();
}

/*
 * do_pot:
 *	Do a potion with standard setup.  This means it uses a fuse and
 *	turns on a flag
 */

void
do_pot(int type, bool knowit)
{
    PACT *pp;
    int t;

    pp = &p_actions[type];
    if (!pot_info[type].oi_know)
	pot_info[type].oi_know = knowit;
    t = spread(pp->pa_time);
    if (!on(player, pp->pa_flags))
    {
	player.t_flags |= pp->pa_flags;
	fuse(pp->pa_daemon, 0, t, AFTER);
	look(FALSE);
    }
    else
	lengthen(pp->pa_daemon, t);
    msg(choose_str(pp->pa_high, pp->pa_straight));
}
```
