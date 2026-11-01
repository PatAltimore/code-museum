---
title: "daemon.c"
program: "Rogue"
program_slug: "rogue"
file_path: "daemon.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/daemon.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "daemon-c"
order: 23
description: "The game's scheduler: a table of twenty slots for things that happen every turn or after a delay."

summary:
  - point: "A daemon runs every turn; a fuse counts down and runs once"
    link: "https://en.wikipedia.org/wiki/Daemon_(computing)"
    link_label: "Daemon"
  - point: "One table of twenty slots holds all the timers in the game"
    link: "https://en.wikipedia.org/wiki/Scheduling_(computing)"
    link_label: "Scheduling"

enhancements:
  - id: "d-list"
    line_start: 17
    line_end: 59
    title: "Twenty Slots"
    wikipedia_url: "https://en.wikipedia.org/wiki/Daemon_(computing)"
    image_url: ""
    image_caption: ""
    content: "d_list is an array of twenty delayed_action records, all starting as EMPTY. d_slot returns the first empty one, and prints a debugging message in a wizard build if there is none. The record from rogue.h says when to run it (BEFORE or AFTER the hero's move), which function, what argument, and a time. find_slot searches for a slot by function pointer, which means a function can only be scheduled once at a time: later calls to lengthen or extinguish name the function, not a slot number. No memory is allocated for timers."
  - id: "daemons"
    line_start: 61
    line_end: 113
    title: "Things That Happen Every Turn"
    wikipedia_url: "https://en.wikipedia.org/wiki/Daemon_(computing)"
    image_url: ""
    image_caption: ""
    content: "A daemon is a slot with a time of minus one, called DAEMON, which means forever. start_daemon puts the function in a free slot with the type given, BEFORE or AFTER. kill_daemon marks the slot empty. do_daemons runs every active daemon of the given type, passing it its argument. The game calls it twice each turn, once for each type. In main.c the game starts three of them, runners, doctor and stomach, and one fuse, swander, which later starts the wandering-monster roll."
  - id: "fuses"
    line_start: 115
    line_end: 181
    title: "Things That Happen Once"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scheduling_(computing)"
    image_url: ""
    image_caption: ""
    content: "A fuse is a slot with a positive time. fuse sets one up. lengthen adds to the time of the fuse already set for a function, which is what do_pot does when a potion is drunk twice. extinguish puts it out early, as when a ring of see invisible is taken off. do_fuses runs each turn: for every fuse of the given type it counts down, and when the count reaches zero it clears the slot first and then calls the function, so the function is free to set the same fuse again. The two sorts of timer differ only in the value of one field."
---

```c
/*
 * Contains functions for dealing with things that happen in the
 * future.
 *
 * @(#)daemon.c	4.7 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <curses.h>
#include "rogue.h"

#define EMPTY 0
#define DAEMON -1
#define MAXDAEMONS 20

#define _X_ { EMPTY }

struct delayed_action d_list[MAXDAEMONS] = {
    _X_, _X_, _X_, _X_, _X_, _X_, _X_, _X_, _X_, _X_,
    _X_, _X_, _X_, _X_, _X_, _X_, _X_, _X_, _X_, _X_, 
};

/*
 * d_slot:
 *	Find an empty slot in the daemon/fuse list
 */
struct delayed_action *
d_slot()
{
    register struct delayed_action *dev;

    for (dev = d_list; dev <= &d_list[MAXDAEMONS-1]; dev++)
	if (dev->d_type == EMPTY)
	    return dev;
#ifdef MASTER
    debug("Ran out of fuse slots");
#endif
    return NULL;
}

/*
 * find_slot:
 *	Find a particular slot in the table
 */
struct delayed_action *
find_slot(void (*func)())
{
    register struct delayed_action *dev;

    for (dev = d_list; dev <= &d_list[MAXDAEMONS-1]; dev++)
	if (dev->d_type != EMPTY && func == dev->d_func)
	    return dev;
    return NULL;
}

/*
 * start_daemon:
 *	Start a daemon, takes a function.
 */
void
start_daemon(void (*func)(), int arg, int type)
{
    register struct delayed_action *dev;

    dev = d_slot();
    dev->d_type = type;
    dev->d_func = func;
    dev->d_arg = arg;
    dev->d_time = DAEMON;
}

/*
 * kill_daemon:
 *	Remove a daemon from the list
 */
void
kill_daemon(void (*func)())
{
    register struct delayed_action *dev;

    if ((dev = find_slot(func)) == NULL)
	return;
    /*
     * Take it out of the list
     */
    dev->d_type = EMPTY;
}

/*
 * do_daemons:
 *	Run all the daemons that are active with the current flag,
 *	passing the argument to the function.
 */
void
do_daemons(int flag)
{
    register struct delayed_action *dev;

    /*
     * Loop through the devil list
     */
    for (dev = d_list; dev <= &d_list[MAXDAEMONS-1]; dev++)
	/*
	 * Executing each one, giving it the proper arguments
	 */
	if (dev->d_type == flag && dev->d_time == DAEMON)
	    (*dev->d_func)(dev->d_arg);
}

/*
 * fuse:
 *	Start a fuse to go off in a certain number of turns
 */
void
fuse(void (*func)(), int arg, int time, int type)
{
    register struct delayed_action *wire;

    wire = d_slot();
    wire->d_type = type;
    wire->d_func = func;
    wire->d_arg = arg;
    wire->d_time = time;
}

/*
 * lengthen:
 *	Increase the time until a fuse goes off
 */
void
lengthen(void (*func)(), int xtime)
{
    register struct delayed_action *wire;

    if ((wire = find_slot(func)) == NULL)
	return;
    wire->d_time += xtime;
}

/*
 * extinguish:
 *	Put out a fuse
 */
void
extinguish(void (*func)())
{
    register struct delayed_action *wire;

    if ((wire = find_slot(func)) == NULL)
	return;
    wire->d_type = EMPTY;
}

/*
 * do_fuses:
 *	Decrement counters and start needed fuses
 */
void
do_fuses(int flag)
{
    register struct delayed_action *wire;

    /*
     * Step though the list
     */
    for (wire = d_list; wire <= &d_list[MAXDAEMONS-1]; wire++)
	/*
	 * Decrementing counters and starting things we want.  We also need
	 * to remove the fuse from the list once it has gone off.
	 */
	if (flag == wire->d_type && wire->d_time > 0 && --wire->d_time == 0)
	{
	    wire->d_type = EMPTY;
	    (*wire->d_func)(wire->d_arg);
	}
}
```
