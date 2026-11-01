---
title: "passages.c"
program: "Rogue"
program_slug: "rogue"
file_path: "passages.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/passages.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "passages-c"
order: 9
description: "Connecting the nine rooms with corridors, hiding some of them, and numbering the passages."

summary:
  - point: "Rooms are joined by growing a random spanning tree over the grid, then adding a few extra links for loops"
    link: "https://en.wikipedia.org/wiki/Spanning_tree"
    link_label: "Spanning tree"
  - point: "Secret doors and passages appear more often as the player goes deeper"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "Passages are numbered by a flood fill so that each corridor can be treated as a room"
    link: "https://en.wikipedia.org/wiki/Flood_fill"
    link_label: "Flood fill"

enhancements:
  - id: "adjacency"
    line_start: 17
    line_end: 43
    title: "Which Rooms May Be Joined"
    wikipedia_url: "https://en.wikipedia.org/wiki/Spanning_tree"
    image_url: ""
    image_caption: ""
    content: "do_passages begins with a table, one row per room. Each row is two arrays of nine flags: which rooms this one may connect to, and which it has been connected to so far. The table encodes the three-by-three grid: room 0 may join rooms 1 and 3, room 4 in the middle may join 1, 3, 5 and 7, and so on, so only neighbours to the east, west, north and south are possible. A third field says whether the room is in the growing graph. Putting the shape of the map in a data table lets the connection algorithm be generic."
  - id: "spanning-tree"
    line_start: 45
    line_end: 95
    title: "Growing the Graph"
    wikipedia_url: "https://en.wikipedia.org/wiki/Prim%27s_algorithm"
    image_url: ""
    image_caption: ""
    content: "The first part builds a spanning tree. It starts with one random room in the graph. Each time round it looks at the neighbours of the current room that are not yet in the graph, picks one at random with the same count-and-replace trick as the maze, and joins them with conn. If the room has no outside neighbours, it picks a different room already in the graph to look from. It stops when all nine rooms are in. This guarantees that every room can be reached from every other, while the randomness means that no two levels have the same layout. It resembles a randomised version of Prim's algorithm for building a tree."
  - id: "extra-passages"
    line_start: 97
    line_end: 125
    title: "Loops So There Is More Than One Way"
    wikipedia_url: "https://en.wikipedia.org/wiki/Spanning_tree"
    image_url: ""
    image_caption: ""
    content: "A spanning tree has exactly one path between any two rooms, which would make the level feel like a corridor. So the second part tries, a random number of times from zero to four, to join a random room to an unconnected neighbour. When it finds one, it draws that passage and records both connections. Extra passages make loops, so the player and the monsters can go round. Finally passnum numbers all the passages. The result is the connected, slightly tangled graph that is the shape of a Rogue level."
  - id: "conn"
    line_start: 127
    line_end: 266
    title: "Drawing One Corridor"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "conn draws a corridor between two adjacent rooms. It decides whether the link runs right or down, and for each room picks a door position on the wall that faces the other: a random spot along the right or bottom edge of the first and the left or top edge of the second. For a gone room the 'door' is only a point. The corridor runs straight from the first door toward the second, with a turn at a random spot to line up with the target, and ends at the second door. If the drawn path does not end at the destination, the routine prints a warning about a connectivity problem. All the corridors are straight lines with at most one jog."
  - id: "putpass"
    line_start: 268
    line_end: 284
    title: "Secret Passages"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "putpass lays down one square of corridor and sets its passage flag. Normally it also draws the passage character. But on deeper levels, when a random number from 1 to 10 is less than the level and a one-in-forty chance succeeds, the 'real' flag is cleared and the character is left blank: the square exists but cannot be seen until the player searches. A gap in a corridor can therefore be crossed only by finding it. The odds are tiny on any one square, but a corridor is many squares, so a deep level often has a hidden gap."
  - id: "door"
    line_start: 286
    line_end: 313
    title: "Doors and Secret Doors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "door records an exit in the room's list of exits and then draws the door. A maze has no doors. In other rooms, on deeper levels, a one-in-five chance makes the door secret: it is drawn as a piece of wall, the horizontal or vertical character depending on which side it is on, with the real flag cleared. Otherwise it is a plus sign. A secret door looks like wall until the player finds it with the 's' search command."
  - id: "add-pass"
    line_start: 315
    line_end: 352
    title: "A Wizard's X-Ray"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "add_pass is available only to wizards. It walks the whole map and, for every passage square, door and secret door, marks the spot as seen and draws it, with secret doors and passages in standout so they can be told from real ones. It lets a tester see the full structure of a level, hidden parts included, which is how the generator's output could be checked by eye."
  - id: "passnum"
    line_start: 355
    line_end: 424
    title: "Numbering the Passages"
    wikipedia_url: "https://en.wikipedia.org/wiki/Flood_fill"
    image_url: ""
    image_caption: ""
    content: "passnum and numpass give each corridor an identity. For each exit of each room, numpass starts a flood fill: it marks the square with the current passage number, and if the square is a door, adds it to that passage's exit list, then calls itself on the four neighbours. The fill stops on anything that is not a passage. When a new door is reached from a different exit, the number goes up. The result is that every connected corridor has a number stored in the low bits of its squares' flags, and a corresponding entry in the passages array, which is why a passage can be treated as a room for lighting and for monsters."
---

```c
/*
 * Draw the connecting passages
 *
 * @(#)passages.c	4.22 (Berkeley) 02/05/99
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

/*
 * do_passages:
 *	Draw all the passages on a level.
 */

void
do_passages()
{
    struct rdes *r1, *r2 = NULL;
    int i, j;
    int roomcount;
    static struct rdes
    {
	bool	conn[MAXROOMS];		/* possible to connect to room i? */
	bool	isconn[MAXROOMS];	/* connection been made to room i? */
	bool	ingraph;		/* this room in graph already? */
    } rdes[MAXROOMS] = {
	{ { 0, 1, 0, 1, 0, 0, 0, 0, 0 }, { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, 0 },
	{ { 1, 0, 1, 0, 1, 0, 0, 0, 0 }, { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, 0 },
	{ { 0, 1, 0, 0, 0, 1, 0, 0, 0 }, { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, 0 },
	{ { 1, 0, 0, 0, 1, 0, 1, 0, 0 }, { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, 0 },
	{ { 0, 1, 0, 1, 0, 1, 0, 1, 0 }, { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, 0 },
	{ { 0, 0, 1, 0, 1, 0, 0, 0, 1 }, { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, 0 },
	{ { 0, 0, 0, 1, 0, 0, 0, 1, 0 }, { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, 0 },
	{ { 0, 0, 0, 0, 1, 0, 1, 0, 1 }, { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, 0 },
	{ { 0, 0, 0, 0, 0, 1, 0, 1, 0 }, { 0, 0, 0, 0, 0, 0, 0, 0, 0 }, 0 },
    };

    /*
     * reinitialize room graph description
     */
    for (r1 = rdes; r1 <= &rdes[MAXROOMS-1]; r1++)
    {
	for (j = 0; j < MAXROOMS; j++)
	    r1->isconn[j] = FALSE;
	r1->ingraph = FALSE;
    }

    /*
     * starting with one room, connect it to a random adjacent room and
     * then pick a new room to start with.
     */
    roomcount = 1;
    r1 = &rdes[rnd(MAXROOMS)];
    r1->ingraph = TRUE;
    do
    {
	/*
	 * find a room to connect with
	 */
	j = 0;
	for (i = 0; i < MAXROOMS; i++)
	    if (r1->conn[i] && !rdes[i].ingraph && rnd(++j) == 0)
		r2 = &rdes[i];
	/*
	 * if no adjacent rooms are outside the graph, pick a new room
	 * to look from
	 */
	if (j == 0)
	{
	    do
		r1 = &rdes[rnd(MAXROOMS)];
	    until (r1->ingraph);
	}
	/*
	 * otherwise, connect new room to the graph, and draw a tunnel
	 * to it
	 */
	else
	{
	    r2->ingraph = TRUE;
	    i = (int)(r1 - rdes);
	    j = (int)(r2 - rdes);
	    conn(i, j);
	    r1->isconn[j] = TRUE;
	    r2->isconn[i] = TRUE;
	    roomcount++;
	}
    } while (roomcount < MAXROOMS);

    /*
     * attempt to add passages to the graph a random number of times so
     * that there isn't always just one unique passage through it.
     */
    for (roomcount = rnd(5); roomcount > 0; roomcount--)
    {
	r1 = &rdes[rnd(MAXROOMS)];	/* a random room to look from */
	/*
	 * find an adjacent room not already connected
	 */
	j = 0;
	for (i = 0; i < MAXROOMS; i++)
	    if (r1->conn[i] && !r1->isconn[i] && rnd(++j) == 0)
		r2 = &rdes[i];
	/*
	 * if there is one, connect it and look for the next added
	 * passage
	 */
	if (j != 0)
	{
	    i = (int)(r1 - rdes);
	    j = (int)(r2 - rdes);
	    conn(i, j);
	    r1->isconn[j] = TRUE;
	    r2->isconn[i] = TRUE;
	}
    }
    passnum();
}

/*
 * conn:
 *	Draw a corridor from a room in a certain direction.
 */

void
conn(int r1, int r2)
{
    struct room *rpf, *rpt = NULL;
    int rmt;
    int distance = 0, turn_spot, turn_distance = 0;
    int rm;
    char direc;
    static coord del, curr, turn_delta, spos, epos;

    if (r1 < r2)
    {
	rm = r1;
	if (r1 + 1 == r2)
	    direc = 'r';
	else
	    direc = 'd';
    }
    else
    {
	rm = r2;
	if (r2 + 1 == r1)
	    direc = 'r';
	else
	    direc = 'd';
    }
    rpf = &rooms[rm];
    /*
     * Set up the movement variables, in two cases:
     * first drawing one down.
     */
    if (direc == 'd')
    {
	rmt = rm + 3;				/* room # of dest */
	rpt = &rooms[rmt];			/* room pointer of dest */
	del.x = 0;				/* direction of move */
	del.y = 1;
	spos.x = rpf->r_pos.x;			/* start of move */
	spos.y = rpf->r_pos.y;
	epos.x = rpt->r_pos.x;			/* end of move */
	epos.y = rpt->r_pos.y;
	if (!(rpf->r_flags & ISGONE))		/* if not gone pick door pos */
	    do
	    {
		spos.x = rpf->r_pos.x + rnd(rpf->r_max.x - 2) + 1;
		spos.y = rpf->r_pos.y + rpf->r_max.y - 1;
	    } while ((rpf->r_flags&ISMAZE) && !(flat(spos.y, spos.x)&F_PASS));
	if (!(rpt->r_flags & ISGONE))
	    do
	    {
		epos.x = rpt->r_pos.x + rnd(rpt->r_max.x - 2) + 1;
	    } while ((rpt->r_flags&ISMAZE) && !(flat(epos.y, epos.x)&F_PASS));
	distance = abs(spos.y - epos.y) - 1;	/* distance to move */
	turn_delta.y = 0;			/* direction to turn */
	turn_delta.x = (spos.x < epos.x ? 1 : -1);
	turn_distance = abs(spos.x - epos.x);	/* how far to turn */
    }
    else if (direc == 'r')			/* setup for moving right */
    {
	rmt = rm + 1;
	rpt = &rooms[rmt];
	del.x = 1;
	del.y = 0;
	spos.x = rpf->r_pos.x;
	spos.y = rpf->r_pos.y;
	epos.x = rpt->r_pos.x;
	epos.y = rpt->r_pos.y;
	if (!(rpf->r_flags & ISGONE))
	    do
	    {
		spos.x = rpf->r_pos.x + rpf->r_max.x - 1;
		spos.y = rpf->r_pos.y + rnd(rpf->r_max.y - 2) + 1;
	    } while ((rpf->r_flags&ISMAZE) && !(flat(spos.y, spos.x)&F_PASS));
	if (!(rpt->r_flags & ISGONE))
	    do
	    {
		epos.y = rpt->r_pos.y + rnd(rpt->r_max.y - 2) + 1;
	    } while ((rpt->r_flags&ISMAZE) && !(flat(epos.y, epos.x)&F_PASS));
	distance = abs(spos.x - epos.x) - 1;
	turn_delta.y = (spos.y < epos.y ? 1 : -1);
	turn_delta.x = 0;
	turn_distance = abs(spos.y - epos.y);
    }
#ifdef MASTER
    else
	debug("error in connection tables");
#endif

    turn_spot = rnd(distance - 1) + 1;		/* where turn starts */

    /*
     * Draw in the doors on either side of the passage or just put #'s
     * if the rooms are gone.
     */
    if (!(rpf->r_flags & ISGONE))
	door(rpf, &spos);
    else
	putpass(&spos);
    if (!(rpt->r_flags & ISGONE))
	door(rpt, &epos);
    else
	putpass(&epos);
    /*
     * Get ready to move...
     */
    curr.x = spos.x;
    curr.y = spos.y;
    while (distance > 0)
    {
	/*
	 * Move to new position
	 */
	curr.x += del.x;
	curr.y += del.y;
	/*
	 * Check if we are at the turn place, if so do the turn
	 */
	if (distance == turn_spot)
	    while (turn_distance--)
	    {
		putpass(&curr);
		curr.x += turn_delta.x;
		curr.y += turn_delta.y;
	    }
	/*
	 * Continue digging along
	 */
	putpass(&curr);
	distance--;
    }
    curr.x += del.x;
    curr.y += del.y;
    if (!ce(curr, epos))
	msg("warning, connectivity problem on this level");
}

/*
 * putpass:
 *	add a passage character or secret passage here
 */

void
putpass(coord *cp)
{
    PLACE *pp;

    pp = INDEX(cp->y, cp->x);
    pp->p_flags |= F_PASS;
    if (rnd(10) + 1 < level && rnd(40) == 0)
	pp->p_flags &= ~F_REAL;
    else
	pp->p_ch = PASSAGE;
}

/*
 * door:
 *	Add a door or possibly a secret door.  Also enters the door in
 *	the exits array of the room.
 */

void
door(struct room *rm, coord *cp)
{
    PLACE *pp;

    rm->r_exit[rm->r_nexits++] = *cp;

    if (rm->r_flags & ISMAZE)
	return;

    pp = INDEX(cp->y, cp->x);
    if (rnd(10) + 1 < level && rnd(5) == 0)
    {
	if (cp->y == rm->r_pos.y || cp->y == rm->r_pos.y + rm->r_max.y - 1)
		pp->p_ch = '-';
	else
		pp->p_ch = '|';
	pp->p_flags &= ~F_REAL;
    }
    else
	pp->p_ch = DOOR;
}

#ifdef MASTER
/*
 * add_pass:
 *	Add the passages to the current window (wizard command)
 */

void
add_pass()
{
    PLACE *pp;
    int y, x;
    char ch;

    for (y = 1; y < NUMLINES - 1; y++)
	for (x = 0; x < NUMCOLS; x++)
	{
	    pp = INDEX(y, x);
	    if ((pp->p_flags & F_PASS) || pp->p_ch == DOOR ||
		(!(pp->p_flags&F_REAL) && (pp->p_ch == '|' || pp->p_ch == '-')))
	    {
		ch = pp->p_ch;
		if (pp->p_flags & F_PASS)
		    ch = PASSAGE;
		pp->p_flags |= F_SEEN;
		move(y, x);
		if (pp->p_monst != NULL)
		    pp->p_monst->t_oldch = pp->p_ch;
		else if (pp->p_flags & F_REAL)
		    addch(ch);
		else
		{
		    standout();
		    addch((pp->p_flags & F_PASS) ? PASSAGE : DOOR);
		    standend();
		}
	    }
	}
}
#endif

/*
 * passnum:
 *	Assign a number to each passageway
 */
static int pnum;
static bool newpnum;


void
passnum()
{
    struct room *rp;
    int i;

    pnum = 0;
    newpnum = FALSE;
    for (rp = passages; rp < &passages[MAXPASS]; rp++)
	rp->r_nexits = 0;
    for (rp = rooms; rp < &rooms[MAXROOMS]; rp++)
	for (i = 0; i < rp->r_nexits; i++)
	{
	    newpnum++;
	    numpass(rp->r_exit[i].y, rp->r_exit[i].x);
	}
}

/*
 * numpass:
 *	Number a passageway square and its brethren
 */

void
numpass(int y, int x)
{
    char *fp;
    struct room *rp;
    char ch;

    if (x >= NUMCOLS || x < 0 || y >= NUMLINES || y <= 0)
	return;
    fp = &flat(y, x);
    if (*fp & F_PNUM)
	return;
    if (newpnum)
    {
	pnum++;
	newpnum = FALSE;
    }
    /*
     * check to see if it is a door or secret door, i.e., a new exit,
     * or a numerable type of place
     */
    if ((ch = chat(y, x)) == DOOR ||
	(!(*fp & F_REAL) && (ch == '|' || ch == '-')))
    {
	rp = &passages[pnum];
	rp->r_exit[rp->r_nexits].y = y;
	rp->r_exit[rp->r_nexits++].x = x;
    }
    else if (!(*fp & F_PASS))
	return;
    *fp |= pnum;
    /*
     * recurse on the surrounding places
     */
    numpass(y + 1, x);
    numpass(y - 1, x);
    numpass(y, x + 1);
    numpass(y, x - 1);
}
```
