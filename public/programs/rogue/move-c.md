---
title: "move.c"
program: "Rogue"
program_slug: "rogue"
file_path: "move.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/move.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "move-c"
order: 11
description: "Moving the hero: legality, running, secret traps and what each kind of trap does."

summary:
  - point: "Moving into a monster attacks it, so one routine handles both walking and fighting"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "Eight kinds of trap are one switch, one case each"
    link: "https://en.wikipedia.org/wiki/Booby_trap"
    link_label: "Booby trap"

enhancements:
  - id: "do-run-do-move"
    line_start: 17
    line_end: 103
    title: "Checks Before a Step"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "do_run starts a run by setting a flag and remembering the direction. do_move is the heart of walking. If the hero is stuck in a bear trap, the counter goes down and the move is refused. If confused, four times in five the target square is picked randomly by rndmove. Otherwise the new position is the old one plus the direction. The move is refused if it would leave the map or cut a corner diagonally. Then a rule gives traps a second life: if the square is a hidden trap shown as floor and the hero is not levitating, stepping on it reveals it. A held hero cannot move, unless the thing to attack is the venus flytrap, the monster that holds."
  - id: "terrain-switch"
    line_start: 104
    line_end: 200
    title: "What Is on the Square"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The move continues with a switch on the character at the new position. A wall or empty space stops a run, but with the passgo option a runner in a corridor turns the corner on its own: the routine tests the two squares at right angles and, if exactly one is open, changes direction and starts again. A door enters the room. A trap springs. A passage recalculates the hero's room, for the reason given in a comment: in a maze there is no way to tell when you have left the room. A staircase is marked as seen. Anything else is either a monster, which is attacked with the current weapon, or an object, which is noted so the hero will pick it up. A successful step erases the old '@' and moves the hero."
  - id: "turn-ok-door-open"
    line_start: 203
    line_end: 256
    title: "Turning Corners and Waking the Room"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "turn_ok says whether a square is a legal place to turn onto when following a corridor: a door, or a real passage. turnref refreshes the screen at a corner when jump mode is on, once per square, so running looks like a series of hops. door_open is called when a room is lit or entered, and it wakes every monster in the room by calling wake_monster for each uppercase letter on the map. Entering a room is therefore never quiet."
  - id: "be-trapped"
    line_start: 258
    line_end: 354
    title: "Eight Traps"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booby_trap"
    image_url: ""
    image_caption: ""
    content: "be_trapped is a switch with a case for each trap. A trapdoor drops the hero to the next level. A bear trap holds for about three turns. A mysterious trap picks one of eleven odd messages, including a parallel dimension, a sting in the neck, and the pack turning a colour, none of which does anything. A sleeping-gas trap puts the hero to sleep. An arrow trap makes a to-hit roll and does a d6, killing if the hero has no hit points left; a miss leaves an arrow on the floor. A teleport trap moves the hero. A dart trap does a d4 and may weaken strength unless it is protected or saved against. A rust trap rusts the armor. A levitating hero triggers nothing."
  - id: "rndmove"
    line_start: 356
    line_end: 397
    title: "A Drunkard's Step"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "rndmove returns a random neighbouring square for anything confused, hero or monster. It adds a random offset of -1, 0 or 1 to each coordinate and then checks that the move is legal: it must not be diagonal around a corner, the square must be walkable, and it must not hold a scroll of scare monster. If any test fails, the creature stays where it is. A confused creature therefore stumbles about, bumping into walls and doing nothing useful, but never walks onto the one scroll it fears."
  - id: "rust-armor"
    line_start: 399
    line_end: 425
    title: "Rusting Armor"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "rust_armor weakens a suit of armor by raising its armor class by one, making it worse. Leather armor never rusts, and armor already at class 9 or worse is left alone. If the armor is permanently protected, or the hero wears a ring of maintain armor, the rust vanishes instantly, with a message unless a fight to the death is in progress. Otherwise the message says the armor is weaker, and with terse mode, that it weakens. The same function serves the rust trap and the aquator monster's touch."
---

```c
/*
 * hero movement commands
 *
 * @(#)move.c	4.49 (Berkeley) 02/05/99
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

/*
 * used to hold the new hero position
 */

coord nh;

/*
 * do_run:
 *	Start the hero running
 */

void
do_run(char ch)
{
    running = TRUE;
    after = FALSE;
    runch = ch;
}

/*
 * do_move:
 *	Check to see that a move is legal.  If it is handle the
 * consequences (fighting, picking up, etc.)
 */

void
do_move(int dy, int dx)
{
    char ch, fl;

    firstmove = FALSE;
    if (no_move)
    {
	no_move--;
	msg("you are still stuck in the bear trap");
	return;
    }
    /*
     * Do a confused move (maybe)
     */
    if (on(player, ISHUH) && rnd(5) != 0)
    {
	nh = *rndmove(&player);
	if (ce(nh, hero))
	{
	    after = FALSE;
	    running = FALSE;
	    to_death = FALSE;
	    return;
	}
    }
    else
    {
over:
	nh.y = hero.y + dy;
	nh.x = hero.x + dx;
    }

    /*
     * Check if he tried to move off the screen or make an illegal
     * diagonal move, and stop him if he did.
     */
    if (nh.x < 0 || nh.x >= NUMCOLS || nh.y <= 0 || nh.y >= NUMLINES - 1)
	goto hit_bound;
    if (!diag_ok(&hero, &nh))
    {
	after = FALSE;
	running = FALSE;
	return;
    }
    if (running && ce(hero, nh))
	after = running = FALSE;
    fl = flat(nh.y, nh.x);
    ch = winat(nh.y, nh.x);
    if (!(fl & F_REAL) && ch == FLOOR)
    {
	if (!on(player, ISLEVIT))
	{
	    chat(nh.y, nh.x) = ch = TRAP;
	    flat(nh.y, nh.x) |= F_REAL;
	}
    }
    else if (on(player, ISHELD) && ch != 'F')
    {
	msg("you are being held");
	return;
    }
    switch (ch)
    {
	case ' ':
	case '|':
	case '-':
hit_bound:
	    if (passgo && running && (proom->r_flags & ISGONE)
		&& !on(player, ISBLIND))
	    {
		bool	b1, b2;

		switch (runch)
		{
		    case 'h':
		    case 'l':
			b1 = (bool)(hero.y != 1 && turn_ok(hero.y - 1, hero.x));
			b2 = (bool)(hero.y != NUMLINES - 2 && turn_ok(hero.y + 1, hero.x));
			if (!(b1 ^ b2))
			    break;
			if (b1)
			{
			    runch = 'k';
			    dy = -1;
			}
			else
			{
			    runch = 'j';
			    dy = 1;
			}
			dx = 0;
			turnref();
			goto over;
		    case 'j':
		    case 'k':
			b1 = (bool)(hero.x != 0 && turn_ok(hero.y, hero.x - 1));
			b2 = (bool)(hero.x != NUMCOLS - 1 && turn_ok(hero.y, hero.x + 1));
			if (!(b1 ^ b2))
			    break;
			if (b1)
			{
			    runch = 'h';
			    dx = -1;
			}
			else
			{
			    runch = 'l';
			    dx = 1;
			}
			dy = 0;
			turnref();
			goto over;
		}
	    }
	    running = FALSE;
	    after = FALSE;
	    break;
	case DOOR:
	    running = FALSE;
	    if (flat(hero.y, hero.x) & F_PASS)
		enter_room(&nh);
	    goto move_stuff;
	case TRAP:
	    ch = be_trapped(&nh);
	    if (ch == T_DOOR || ch == T_TELEP)
		return;
	    goto move_stuff;
	case PASSAGE:
	    /*
	     * when you're in a corridor, you don't know if you're in
	     * a maze room or not, and there ain't no way to find out
	     * if you're leaving a maze room, so it is necessary to
	     * always recalculate proom.
	     */
	    proom = roomin(&hero);
	    goto move_stuff;
	case FLOOR:
	    if (!(fl & F_REAL))
		be_trapped(&hero);
	    goto move_stuff;
	case STAIRS:
	    seenstairs = TRUE;
	    /* FALLTHROUGH */
	default:
	    running = FALSE;
	    if (isupper(ch) || moat(nh.y, nh.x))
		fight(&nh, cur_weapon, FALSE);
	    else
	    {
		if (ch != STAIRS)
		    take = ch;
move_stuff:
		mvaddch(hero.y, hero.x, floor_at());
		if ((fl & F_PASS) && chat(oldpos.y, oldpos.x) == DOOR)
		    leave_room(&nh);
		hero = nh;
	    }
    }
}

/*
 * turn_ok:
 *	Decide whether it is legal to turn onto the given space
 */
bool
turn_ok(int y, int x)
{
    PLACE *pp;

    pp = INDEX(y, x);
    return (pp->p_ch == DOOR
	|| (pp->p_flags & (F_REAL|F_PASS)) == (F_REAL|F_PASS));
}

/*
 * turnref:
 *	Decide whether to refresh at a passage turning or not
 */

void
turnref()
{
    PLACE *pp;

    pp = INDEX(hero.y, hero.x);
    if (!(pp->p_flags & F_SEEN))
    {
	if (jump)
	{
	    leaveok(stdscr, TRUE);
	    refresh();
	    leaveok(stdscr, FALSE);
	}
	pp->p_flags |= F_SEEN;
    }
}

/*
 * door_open:
 *	Called to illuminate a room.  If it is dark, remove anything
 *	that might move.
 */

void
door_open(struct room *rp)
{
    int y, x;

    if (!(rp->r_flags & ISGONE))
	for (y = rp->r_pos.y; y < rp->r_pos.y + rp->r_max.y; y++)
	    for (x = rp->r_pos.x; x < rp->r_pos.x + rp->r_max.x; x++)
		if (isupper(winat(y, x)))
		    wake_monster(y, x);
}

/*
 * be_trapped:
 *	The guy stepped on a trap.... Make him pay.
 */
char
be_trapped(coord *tc)
{
    PLACE *pp;
    THING *arrow;
    char tr;

    if (on(player, ISLEVIT))
	return T_RUST;	/* anything that's not a door or teleport */
    running = FALSE;
    count = FALSE;
    pp = INDEX(tc->y, tc->x);
    pp->p_ch = TRAP;
    tr = pp->p_flags & F_TMASK;
    pp->p_flags |= F_SEEN;
    switch (tr)
    {
	case T_DOOR:
	    level++;
	    new_level();
	    msg("you fell into a trap!");
	when T_BEAR:
	    no_move += BEARTIME;
	    msg("you are caught in a bear trap");
        when T_MYST:
            switch(rnd(11))
            {
                case 0: msg("you are suddenly in a parallel dimension");
                when 1: msg("the light in here suddenly seems %s", rainbow[rnd(cNCOLORS)]);
                when 2: msg("you feel a sting in the side of your neck");
                when 3: msg("multi-colored lines swirl around you, then fade");
                when 4: msg("a %s light flashes in your eyes", rainbow[rnd(cNCOLORS)]);
                when 5: msg("a spike shoots past your ear!");
                when 6: msg("%s sparks dance across your armor", rainbow[rnd(cNCOLORS)]);
                when 7: msg("you suddenly feel very thirsty");
                when 8: msg("you feel time speed up suddenly");
                when 9: msg("time now seems to be going slower");
                when 10: msg("you pack turns %s!", rainbow[rnd(cNCOLORS)]);
            }
	when T_SLEEP:
	    no_command += SLEEPTIME;
	    player.t_flags &= ~ISRUN;
	    msg("a strange white mist envelops you and you fall asleep");
	when T_ARROW:
	    if (swing(pstats.s_lvl - 1, pstats.s_arm, 1))
	    {
		pstats.s_hpt -= roll(1, 6);
		if (pstats.s_hpt <= 0)
		{
		    msg("an arrow killed you");
		    death('a');
		}
		else
		    msg("oh no! An arrow shot you");
	    }
	    else
	    {
		arrow = new_item();
		init_weapon(arrow, ARROW);
		arrow->o_count = 1;
		arrow->o_pos = hero;
		fall(arrow, FALSE);
		msg("an arrow shoots past you");
	    }
	when T_TELEP:
	    /*
	     * since the hero's leaving, look() won't put a TRAP
	     * down for us, so we have to do it ourself
	     */
	    teleport();
	    mvaddch(tc->y, tc->x, TRAP);
	when T_DART:
	    if (!swing(pstats.s_lvl+1, pstats.s_arm, 1))
		msg("a small dart whizzes by your ear and vanishes");
	    else
	    {
		pstats.s_hpt -= roll(1, 4);
		if (pstats.s_hpt <= 0)
		{
		    msg("a poisoned dart killed you");
		    death('d');
		}
		if (!ISWEARING(R_SUSTSTR) && !save(VS_POISON))
		    chg_str(-1);
		msg("a small dart just hit you in the shoulder");
	    }
	when T_RUST:
	    msg("a gush of water hits you on the head");
	    rust_armor(cur_armor);
    }
    flush_type();
    return tr;
}

/*
 * rndmove:
 *	Move in a random direction if the monster/person is confused
 */
coord *
rndmove(THING *who)
{
    THING *obj;
    int x, y;
    char ch;
    static coord ret;  /* what we will be returning */

    y = ret.y = who->t_pos.y + rnd(3) - 1;
    x = ret.x = who->t_pos.x + rnd(3) - 1;
    /*
     * Now check to see if that's a legal move.  If not, don't move.
     * (I.e., bump into the wall or whatever)
     */
    if (y == who->t_pos.y && x == who->t_pos.x)
	return &ret;
    if (!diag_ok(&who->t_pos, &ret))
	goto bad;
    else
    {
	ch = winat(y, x);
	if (!step_ok(ch))
	    goto bad;
	if (ch == SCROLL)
	{
	    for (obj = lvl_obj; obj != NULL; obj = next(obj))
		if (y == obj->o_pos.y && x == obj->o_pos.x)
		    break;
	    if (obj != NULL && obj->o_which == S_SCARE)
		goto bad;
	}
    }
    return &ret;

bad:
    ret = who->t_pos;
    return &ret;
}

/*
 * rust_armor:
 *	Rust the given armor, if it is a legal kind to rust, and we
 *	aren't wearing a magic ring.
 */

void
rust_armor(THING *arm)
{
    if (arm == NULL || arm->o_type != ARMOR || arm->o_which == LEATHER ||
	arm->o_arm >= 9)
	    return;

    if ((arm->o_flags & ISPROT) || ISWEARING(R_SUSTARM))
    {
	if (!to_death)
	    msg("the rust vanishes instantly");
    }
    else
    {
	arm->o_arm++;
	if (!terse)
	    msg("your armor appears to be weaker now. Oh my!");
	else
	    msg("your armor weakens");
    }
}
```
