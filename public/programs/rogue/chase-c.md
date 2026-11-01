---
title: "chase.c"
program: "Rogue"
program_slug: "rogue"
file_path: "chase.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/chase.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "chase-c"
order: 12
description: "How monsters move: choosing a goal, walking toward it one greedy step at a time, and breathing fire."

summary:
  - point: "Monsters chase by taking the neighbouring square that is nearest the goal, which is a greedy step"
    link: "https://en.wikipedia.org/wiki/Greedy_algorithm"
    link_label: "Greedy algorithm"
  - point: "Distances are squared, since only comparisons matter"
    link: "https://en.wikipedia.org/wiki/Euclidean_distance"
    link_label: "Euclidean distance"
  - point: "Each kind of monster has a quirk coded into the chase: bats flutter, phantoms stagger, dragons breathe fire"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "runners"
    line_start: 17
    line_end: 57
    title: "The Daemon That Moves Monsters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "runners is a daemon, started in main, that moves every monster once per turn. It walks the monster list, remembering the next link first in case the monster is removed. A monster that is running and not held takes a step with move_monst. A flying monster that is at least three squares squared from the hero gets a second step, which is why bats and griffins seem faster. If a monster that was the target of a fight-to-the-death command has moved, the target flag and the fight are cancelled. At the end, a pending hit message is flushed."
  - id: "move-monst-relocate"
    line_start: 59
    line_end: 108
    title: "Slow, Hasted and Relocating"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "move_monst takes one monster turn. A slowed monster acts only on alternate turns, tracked by the t_turn flag that is toggled each call, and a hasted one acts twice. relocate does the housekeeping of a move: it redraws what was under the monster, finds the new room, sets the new 'old character', clears the monster from the old map cell and puts it in the new one. If the monster has changed rooms, its destination is recomputed. Then the monster is drawn if the hero can see it, or as a standout letter if the hero can detect monsters."
  - id: "do-chase"
    line_start: 110
    line_end: 228
    title: "One Monster, One Step"
    wikipedia_url: "https://en.wikipedia.org/wiki/Greedy_algorithm"
    image_url: ""
    image_caption: ""
    content: "do_chase is the monster's brain. A greedy monster, an orc, runs after the hero once the gold in its room has gone. If the goal is in a different room, the monster heads for the nearest door of its room, and from a doorway for the nearest exit of the corridor. If the goal is in the same room, it heads straight for it. A dragon in a straight line from the hero and within shooting distance breathes flame one time in five. Otherwise chase finds the step. If the goal is the hero, the monster attacks; if it is an object, it picks it up and chooses a new goal; a flytrap never moves. relocate puts it in its new square."
  - id: "set-oldch-see-monst"
    line_start: 230
    line_end: 305
    title: "Memory of the Square, and Seeing Monsters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "set_oldch records what a monster is standing on, so that the display can restore it when the monster leaves; in a dark room it remembers a blank where the floor was, unless the square is within the reach of the hero's lamp. see_monst answers whether the hero can see a monster: not if blind, not if it is invisible and the hero cannot see invisible, yes if it is within the lamp's distance with a clear diagonal, otherwise only if it is in the same lit room. runto sets a monster after the hero: it marks it running, clears a hold and finds its destination."
  - id: "chase"
    line_start: 307
    line_end: 417
    title: "The Greedy Step and the Quirks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Greedy_algorithm"
    image_url: ""
    image_caption: ""
    content: "chase picks the monster's next square. A confused monster moves at random, with a one-in-twenty chance each time of recovering. Two kinds are always partly confused, as the comment says: an invisible stalker, the phantom, goes randomly one time in five, and a bat half the time, so bats seem to flutter. Otherwise the routine looks at the eight squares around the monster and takes the one nearest the goal by squared distance, choosing at random between ties. It refuses squares with a scare-monster scroll, which no monster will step on, and squares holding a xeroc, a monster that disguises itself as an object. It returns false when the monster has reached its goal or the hero."
  - id: "roomin-diag-cansee"
    line_start: 419
    line_end: 490
    title: "Which Room Is This?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "roomin returns the room that contains a coordinate. A passage square is found directly from its number. Otherwise the routine tests the nine rooms' rectangles in turn. If nothing matches it prints 'in some bizarre place' and, in a MASTER build, aborts the program. diag_ok forbids a diagonal step unless both of the squares at the corners are walkable, so nobody cuts a corner. cansee says whether the hero can see a coordinate: not if blind, yes if near, and otherwise only if it is in the same lit room as the hero."
  - id: "find-dest-dist"
    line_start: 492
    line_end: 541
    title: "What Does the Monster Want?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Euclidean_distance"
    image_url: ""
    image_caption: ""
    content: "find_dest gives a monster a goal. A monster that carries nothing, or is in the hero's room, or can see the hero, goes for the hero. Otherwise, for each object in the level that is in the monster's room and is not a scare scroll, there is a probability, the monster's carry value, that the monster wants it, as long as nobody else is already headed for it. So a nymph, which has the highest carry value, goes after treasure in its room. dist computes the squared distance between two points; a comment says it is not a true distance but it is good enough, since it is only compared. dist_cp does the same for pointers."
---

```c
/*
 * Code for one creature to chase another
 *
 * @(#)chase.c	4.57 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <stdlib.h>
#include <curses.h>
#include "rogue.h"

#define DRAGONSHOT  5	/* one chance in DRAGONSHOT that a dragon will flame */

static coord ch_ret;				/* Where chasing takes you */

/*
 * runners:
 *	Make all the running monsters move.
 */
void
runners()
{
    register THING *tp;
    THING *next;
    bool wastarget;
    static coord orig_pos;

    for (tp = mlist; tp != NULL; tp = next)
    {
        /* remember this in case the monster's "next" is changed */
        next = next(tp);
	if (!on(*tp, ISHELD) && on(*tp, ISRUN))
	{
	    orig_pos = tp->t_pos;
	    wastarget = on(*tp, ISTARGET);
	    if (move_monst(tp) == -1)
                continue;
	    if (on(*tp, ISFLY) && dist_cp(&hero, &tp->t_pos) >= 3)
		move_monst(tp);
	    if (wastarget && !ce(orig_pos, tp->t_pos))
	    {
		tp->t_flags &= ~ISTARGET;
		to_death = FALSE;
	    }
	}
    }
    if (has_hit)
    {
	endmsg();
	has_hit = FALSE;
    }
}

/*
 * move_monst:
 *	Execute a single turn of running for a monster
 */
int
move_monst(THING *tp)
{
    if (!on(*tp, ISSLOW) || tp->t_turn)
	if (do_chase(tp) == -1)
            return(-1);
    if (on(*tp, ISHASTE))
	if (do_chase(tp) == -1)
            return(-1);
    tp->t_turn ^= TRUE;
    return(0);
}

/*
 * relocate:
 *	Make the monster's new location be the specified one, updating
 *	all the relevant state.
 */
void
relocate(THING *th, coord *new_loc)
{
    struct room *oroom;

    if (!ce(*new_loc, th->t_pos))
    {
	mvaddch(th->t_pos.y, th->t_pos.x, th->t_oldch);
	th->t_room = roomin(new_loc);
	set_oldch(th, new_loc);
	oroom = th->t_room;
	moat(th->t_pos.y, th->t_pos.x) = NULL;

	if (oroom != th->t_room)
	    th->t_dest = find_dest(th);
	th->t_pos = *new_loc;
	moat(new_loc->y, new_loc->x) = th;
    }
    move(new_loc->y, new_loc->x);
    if (see_monst(th))
	addch(th->t_disguise);
    else if (on(player, SEEMONST))
    {
	standout();
	addch(th->t_type);
	standend();
    }
}

/*
 * do_chase:
 *	Make one thing chase another.
 */
int
do_chase(THING *th)
{
    register coord *cp;
    register struct room *rer, *ree;	/* room of chaser, room of chasee */
    register int mindist = 32767, curdist;
    register bool stoprun = FALSE;	/* TRUE means we are there */
    register bool door;
    register THING *obj;
    static coord this;			/* Temporary destination for chaser */

    rer = th->t_room;		/* Find room of chaser */
    if (on(*th, ISGREED) && rer->r_goldval == 0)
	th->t_dest = &hero;	/* If gold has been taken, run after hero */
    if (th->t_dest == &hero)	/* Find room of chasee */
	ree = proom;
    else
	ree = roomin(th->t_dest);
    /*
     * We don't count doors as inside rooms for this routine
     */
    door = (chat(th->t_pos.y, th->t_pos.x) == DOOR);
    /*
     * If the object of our desire is in a different room,
     * and we are not in a corridor, run to the door nearest to
     * our goal.
     */
over:
    if (rer != ree)
    {
	for (cp = rer->r_exit; cp < &rer->r_exit[rer->r_nexits]; cp++)
	{
	    curdist = dist_cp(th->t_dest, cp);
	    if (curdist < mindist)
	    {
		this = *cp;
		mindist = curdist;
	    }
	}
	if (door)
	{
	    rer = &passages[flat(th->t_pos.y, th->t_pos.x) & F_PNUM];
	    door = FALSE;
	    goto over;
	}
    }
    else
    {
	this = *th->t_dest;
	/*
	 * For dragons check and see if (a) the hero is on a straight
	 * line from it, and (b) that it is within shooting distance,
	 * but outside of striking range.
	 */
	if (th->t_type == 'D' && (th->t_pos.y == hero.y || th->t_pos.x == hero.x
	    || abs(th->t_pos.y - hero.y) == abs(th->t_pos.x - hero.x))
	    && dist_cp(&th->t_pos, &hero) <= BOLT_LENGTH * BOLT_LENGTH
	    && !on(*th, ISCANC) && rnd(DRAGONSHOT) == 0)
	{
	    delta.y = sign(hero.y - th->t_pos.y);
	    delta.x = sign(hero.x - th->t_pos.x);
	    if (has_hit)
		endmsg();
	    fire_bolt(&th->t_pos, &delta, "flame");
	    running = FALSE;
	    count = 0;
	    quiet = 0;
	    if (to_death && !on(*th, ISTARGET))
	    {
		to_death = FALSE;
		kamikaze = FALSE;
	    }
	    return(0);
	}
    }
    /*
     * This now contains what we want to run to this time
     * so we run to it.  If we hit it we either want to fight it
     * or stop running
     */
    if (!chase(th, &this))
    {
	if (ce(this, hero))
	{
	    return( attack(th) );
	}
	else if (ce(this, *th->t_dest))
	{
	    for (obj = lvl_obj; obj != NULL; obj = next(obj))
		if (th->t_dest == &obj->o_pos)
		{
		    detach(lvl_obj, obj);
		    attach(th->t_pack, obj);
		    chat(obj->o_pos.y, obj->o_pos.x) =
			(th->t_room->r_flags & ISGONE) ? PASSAGE : FLOOR;
		    th->t_dest = find_dest(th);
		    break;
		}
	    if (th->t_type != 'F')
		stoprun = TRUE;
	}
    }
    else
    {
	if (th->t_type == 'F')
	    return(0);
    }
    relocate(th, &ch_ret);
    /*
     * And stop running if need be
     */
    if (stoprun && ce(th->t_pos, *(th->t_dest)))
	th->t_flags &= ~ISRUN;
    return(0);
}

/*
 * set_oldch:
 *	Set the oldch character for the monster
 */
void
set_oldch(THING *tp, coord *cp)
{
    char sch;

    if (ce(tp->t_pos, *cp))
        return;

    sch = tp->t_oldch;
    tp->t_oldch = CCHAR( mvinch(cp->y,cp->x) );
    if (!on(player, ISBLIND))
    {
	    if ((sch == FLOOR || tp->t_oldch == FLOOR) &&
		(tp->t_room->r_flags & ISDARK))
		    tp->t_oldch = ' ';
	    else if (dist_cp(cp, &hero) <= LAMPDIST && see_floor)
		tp->t_oldch = chat(cp->y, cp->x);
    }
}

/*
 * see_monst:
 *	Return TRUE if the hero can see the monster
 */
bool
see_monst(THING *mp)
{
    int y, x;

    if (on(player, ISBLIND))
	return FALSE;
    if (on(*mp, ISINVIS) && !on(player, CANSEE))
	return FALSE;
    y = mp->t_pos.y;
    x = mp->t_pos.x;
    if (dist(y, x, hero.y, hero.x) < LAMPDIST)
    {
	if (y != hero.y && x != hero.x &&
	    !step_ok(chat(y, hero.x)) && !step_ok(chat(hero.y, x)))
		return FALSE;
	return TRUE;
    }
    if (mp->t_room != proom)
	return FALSE;
    return ((bool)!(mp->t_room->r_flags & ISDARK));
}

/*
 * runto:
 *	Set a monster running after the hero.
 */
void
runto(coord *runner)
{
    register THING *tp;

    /*
     * If we couldn't find him, something is funny
     */
#ifdef MASTER
    if ((tp = moat(runner->y, runner->x)) == NULL)
	msg("couldn't find monster in runto at (%d,%d)", runner->y, runner->x);
#else
    tp = moat(runner->y, runner->x);
#endif
    /*
     * Start the beastie running
     */
    tp->t_flags |= ISRUN;
    tp->t_flags &= ~ISHELD;
    tp->t_dest = find_dest(tp);
}

/*
 * chase:
 *	Find the spot for the chaser(er) to move closer to the
 *	chasee(ee).  Returns TRUE if we want to keep on chasing later
 *	FALSE if we reach the goal.
 */
bool
chase(THING *tp, coord *ee)
{
    register THING *obj;
    register int x, y;
    register int curdist, thisdist;
    register coord *er = &tp->t_pos;
    register char ch;
    register int plcnt = 1;
    static coord tryp;

    /*
     * If the thing is confused, let it move randomly. Invisible
     * Stalkers are slightly confused all of the time, and bats are
     * quite confused all the time
     */
    if ((on(*tp, ISHUH) && rnd(5) != 0) || (tp->t_type == 'P' && rnd(5) == 0)
	|| (tp->t_type == 'B' && rnd(2) == 0))
    {
	/*
	 * get a valid random move
	 */
	ch_ret = *rndmove(tp);
	curdist = dist_cp(&ch_ret, ee);
	/*
	 * Small chance that it will become un-confused 
	 */
	if (rnd(20) == 0)
	    tp->t_flags &= ~ISHUH;
    }
    /*
     * Otherwise, find the empty spot next to the chaser that is
     * closest to the chasee.
     */
    else
    {
	register int ey, ex;
	/*
	 * This will eventually hold where we move to get closer
	 * If we can't find an empty spot, we stay where we are.
	 */
	curdist = dist_cp(er, ee);
	ch_ret = *er;

	ey = er->y + 1;
	if (ey >= NUMLINES - 1)
	    ey = NUMLINES - 2;
	ex = er->x + 1;
	if (ex >= NUMCOLS)
	    ex = NUMCOLS - 1;

	for (x = er->x - 1; x <= ex; x++)
	{
	    if (x < 0)
		continue;
	    tryp.x = x;
	    for (y = er->y - 1; y <= ey; y++)
	    {
		tryp.y = y;
		if (!diag_ok(er, &tryp))
		    continue;
		ch = winat(y, x);
		if (step_ok(ch))
		{
		    /*
		     * If it is a scroll, it might be a scare monster scroll
		     * so we need to look it up to see what type it is.
		     */
		    if (ch == SCROLL)
		    {
			for (obj = lvl_obj; obj != NULL; obj = next(obj))
			{
			    if (y == obj->o_pos.y && x == obj->o_pos.x)
				break;
			}
			if (obj != NULL && obj->o_which == S_SCARE)
			    continue;
		    }
		    /*
		     * It can also be a Xeroc, which we shouldn't step on
		     */
		    if ((obj = moat(y, x)) != NULL && obj->t_type == 'X')
			continue;
		    /*
		     * If we didn't find any scrolls at this place or it
		     * wasn't a scare scroll, then this place counts
		     */
		    thisdist = dist(y, x, ee->y, ee->x);
		    if (thisdist < curdist)
		    {
			plcnt = 1;
			ch_ret = tryp;
			curdist = thisdist;
		    }
		    else if (thisdist == curdist && rnd(++plcnt) == 0)
		    {
			ch_ret = tryp;
			curdist = thisdist;
		    }
		}
	    }
	}
    }
    return (bool)(curdist != 0 && !ce(ch_ret, hero));
}

/*
 * roomin:
 *	Find what room some coordinates are in. NULL means they aren't
 *	in any room.
 */
struct room *
roomin(coord *cp)
{
    register struct room *rp;
    register char *fp;


    fp = &flat(cp->y, cp->x);
    if (*fp & F_PASS)
	return &passages[*fp & F_PNUM];

    for (rp = rooms; rp < &rooms[MAXROOMS]; rp++)
	if (cp->x <= rp->r_pos.x + rp->r_max.x && rp->r_pos.x <= cp->x
	 && cp->y <= rp->r_pos.y + rp->r_max.y && rp->r_pos.y <= cp->y)
	    return rp;

    msg("in some bizarre place (%d, %d)", unc(*cp));
#ifdef MASTER
    abort();
    return NULL;
#else
    return NULL;
#endif
}

/*
 * diag_ok:
 *	Check to see if the move is legal if it is diagonal
 */
bool
diag_ok(coord *sp, coord *ep)
{
    if (ep->x < 0 || ep->x >= NUMCOLS || ep->y <= 0 || ep->y >= NUMLINES - 1)
	return FALSE;
    if (ep->x == sp->x || ep->y == sp->y)
	return TRUE;
    return (bool)(step_ok(chat(ep->y, sp->x)) && step_ok(chat(sp->y, ep->x)));
}

/*
 * cansee:
 *	Returns true if the hero can see a certain coordinate.
 */
bool
cansee(int y, int x)
{
    register struct room *rer;
    static coord tp;

    if (on(player, ISBLIND))
	return FALSE;
    if (dist(y, x, hero.y, hero.x) < LAMPDIST)
    {
	if (flat(y, x) & F_PASS)
	    if (y != hero.y && x != hero.x &&
		!step_ok(chat(y, hero.x)) && !step_ok(chat(hero.y, x)))
		    return FALSE;
	return TRUE;
    }
    /*
     * We can only see if the hero in the same room as
     * the coordinate and the room is lit or if it is close.
     */
    tp.y = y;
    tp.x = x;
    return (bool)((rer = roomin(&tp)) == proom && !(rer->r_flags & ISDARK));
}

/*
 * find_dest:
 *	find the proper destination for the monster
 */
coord *
find_dest(THING *tp)
{
    register THING *obj;
    register int prob;

    if ((prob = monsters[tp->t_type - 'A'].m_carry) <= 0 || tp->t_room == proom
	|| see_monst(tp))
	    return &hero;
    for (obj = lvl_obj; obj != NULL; obj = next(obj))
    {
	if (obj->o_type == SCROLL && obj->o_which == S_SCARE)
	    continue;
	if (roomin(&obj->o_pos) == tp->t_room && rnd(100) < prob)
	{
	    for (tp = mlist; tp != NULL; tp = next(tp))
		if (tp->t_dest == &obj->o_pos)
		    break;
	    if (tp == NULL)
		return &obj->o_pos;
	}
    }
    return &hero;
}

/*
 * dist:
 *	Calculate the "distance" between to points.  Actually,
 *	this calculates d^2, not d, but that's good enough for
 *	our purposes, since it's only used comparitively.
 */
int
dist(int y1, int x1, int y2, int x2)
{
    return ((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

/*
 * dist_cp:
 *	Call dist() with appropriate arguments for coord pointers
 */
int
dist_cp(coord *c1, coord *c2)
{
    return dist(c1->y, c1->x, c2->y, c2->x);
}
```
