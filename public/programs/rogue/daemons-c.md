---
title: "daemons.c"
program: "Rogue"
program_slug: "rogue"
file_path: "daemons.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/daemons.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "daemons-c"
order: 24
description: "The functions that daemons and fuses call: healing, hunger, wandering monsters, and the end of each potion's effect."

summary:
  - point: "Hunger has three states and a long countdown, and the Amulet halts it"
    link: "https://en.wikipedia.org/wiki/Starvation"
    link_label: "Starvation"
  - point: "A hero heals faster at higher levels, and at a different rate for the first seven"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "Hallucination keeps replacing what the hero sees with random symbols until the potion wears off"
    link: "https://en.wikipedia.org/wiki/Hallucination"
    link_label: "Hallucination"

enhancements:
  - id: "doctor"
    line_start: 16
    line_end: 46
    title: "Healing by Resting"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "doctor is the healing daemon. It counts the turns since the hero last changed in hit points, in quiet. Below level 8 the hero gains a point of hit points when quiet plus twice the level is above 20, so a first-level hero heals once every 19 quiet turns and a seventh-level one once every 7. From level 8 up, after three quiet turns the hero gains a random one to the level minus seven. Each ring of regeneration worn adds one a turn. Hit points are capped at the maximum, and any change resets the count. Levelling up thus makes resting faster."
  - id: "wandering-monsters"
    line_start: 48
    line_end: 77
    title: "The Wandering Monster Clock"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "swander starts the daemon rollwand. Every fourth turn it rolls a six-sided die, and on a four, one chance in six, calls wanderer to make a monster, stops itself, and sets a fuse of about 70 turns, WANDERTIME, to start again. A hero who stays on a level is visited by a new monster roughly every hundred turns. The counter between is a file-level global, which state.c saves with the game."
  - id: "undo-effects"
    line_start: 79
    line_end: 132
    title: "Ending an Effect"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Several short functions are the fuses which end a potion's effect. unconfuse clears the confusion flag and says 'you feel less confused now', or 'trippy' to a hallucinating hero. unsee turns off seeing invisible and redraws monsters that were shown only because of it. sight ends blindness and redraws the room, 'the veil of darkness lifts'. nohaste ends speed."
  - id: "stomach"
    line_start: 134
    line_end: 187
    title: "Hunger"
    wikipedia_url: "https://en.wikipedia.org/wiki/Starvation"
    image_url: ""
    image_caption: ""
    content: "stomach runs every turn. While food_left is above zero it subtracts 1, plus the cost of any rings, minus one if the hero carries the Amulet, which halts normal hunger. The warnings come as food falls below 300, 'you are starting to get hungry', and below MORETIME, 150, 'you are starting to feel weak'. At zero the hero starts fainting: one turn in five, if not already helpless, the hero loses four to eleven turns. Below minus STARVETIME, 850, the hero dies of starvation, death('s'). A change in state stops running and cancels a repeat count so a warning is not missed."
  - id: "come-down"
    line_start: 189
    line_end: 235
    title: "Coming Down"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hallucination"
    image_url: ""
    image_caption: ""
    content: "come_down ends hallucination. It stops the visuals daemon and clears the flag. If the hero is blind there is nothing to redraw. Otherwise every object in view is shown as its real type again, every visible monster as its real disguise, or, for an invisible monster the hero cannot see, whatever is on the floor there, and monsters sensed by detection are shown in inverse. Then the message is 'Everything looks SO boring now.'"
  - id: "visuals"
    line_start: 237
    line_end: 283
    title: "The Hallucination Daemon"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hallucination"
    image_url: ""
    image_caption: ""
    content: "visuals is the daemon that creates the illusion. Each turn, unless the hero is running with jump set, it redraws every visible object as a random thing from rnd_thing, the stairs likewise if the hero has not yet seen them, and every visible monster as a random capital letter. A xeroc that is disguised keeps its fake as another random object. Monsters that are only sensed are drawn in inverse. Messages get a random monster name from set_mname in the same way."
  - id: "land"
    line_start: 285
    line_end: 295
    title: "Floating Down"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "land is the fuse that ends levitation. It clears the flag and says 'you float gently to the ground', or, hallucinating, 'bummer! You've hit the ground'. While levitating the hero cannot pick things up, since pick_up returns at once, and move.c and command.c test the flag too."
---

```c
/*
 * All the daemon and fuse functions are in here
 *
 * @(#)daemons.c	4.24 (Berkeley) 02/05/99
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
 * doctor:
 *	A healing daemon that restors hit points after rest
 */
void
doctor()
{
    register int lv, ohp;

    lv = pstats.s_lvl;
    ohp = pstats.s_hpt;
    quiet++;
    if (lv < 8)
    {
	if (quiet + (lv << 1) > 20)
	    pstats.s_hpt++;
    }
    else
	if (quiet >= 3)
	    pstats.s_hpt += rnd(lv - 7) + 1;
    if (ISRING(LEFT, R_REGEN))
	pstats.s_hpt++;
    if (ISRING(RIGHT, R_REGEN))
	pstats.s_hpt++;
    if (ohp != pstats.s_hpt)
    {
	if (pstats.s_hpt > max_hp)
	    pstats.s_hpt = max_hp;
	quiet = 0;
    }
}

/*
 * Swander:
 *	Called when it is time to start rolling for wandering monsters
 */
void
swander()
{
    start_daemon(rollwand, 0, BEFORE);
}

/*
 * rollwand:
 *	Called to roll to see if a wandering monster starts up
 */
int between = 0;
void
rollwand()
{

    if (++between >= 4)
    {
	if (roll(1, 6) == 4)
	{
	    wanderer();
	    kill_daemon(rollwand);
	    fuse(swander, 0, WANDERTIME, BEFORE);
	}
	between = 0;
    }
}

/*
 * unconfuse:
 *	Release the poor player from his confusion
 */
void
unconfuse()
{
    player.t_flags &= ~ISHUH;
    msg("you feel less %s now", choose_str("trippy", "confused"));
}

/*
 * unsee:
 *	Turn off the ability to see invisible
 */
void
unsee()
{
    register THING *th;

    for (th = mlist; th != NULL; th = next(th))
	if (on(*th, ISINVIS) && see_monst(th))
	    mvaddch(th->t_pos.y, th->t_pos.x, th->t_oldch);
    player.t_flags &= ~CANSEE;
}

/*
 * sight:
 *	He gets his sight back
 */
void
sight()
{
    if (on(player, ISBLIND))
    {
	extinguish(sight);
	player.t_flags &= ~ISBLIND;
	if (!(proom->r_flags & ISGONE))
	    enter_room(&hero);
	msg(choose_str("far out!  Everything is all cosmic again",
		       "the veil of darkness lifts"));
    }
}

/*
 * nohaste:
 *	End the hasting
 */
void
nohaste()
{
    player.t_flags &= ~ISHASTE;
    msg("you feel yourself slowing down");
}

/*
 * stomach:
 *	Digest the hero's food
 */
void
stomach()
{
    register int oldfood;
    int orig_hungry = hungry_state;

    if (food_left <= 0)
    {
	if (food_left-- < -STARVETIME)
	    death('s');
	/*
	 * the hero is fainting
	 */
	if (no_command || rnd(5) != 0)
	    return;
	no_command += rnd(8) + 4;
	hungry_state = 3;
	if (!terse)
	    addmsg(choose_str("the munchies overpower your motor capabilities.  ",
			      "you feel too weak from lack of food.  "));
	msg(choose_str("You freak out", "You faint"));
    }
    else
    {
	oldfood = food_left;
	food_left -= ring_eat(LEFT) + ring_eat(RIGHT) + 1 - amulet;

	if (food_left < MORETIME && oldfood >= MORETIME)
	{
	    hungry_state = 2;
	    msg(choose_str("the munchies are interfering with your motor capabilites",
			   "you are starting to feel weak"));
	}
	else if (food_left < 2 * MORETIME && oldfood >= 2 * MORETIME)
	{
	    hungry_state = 1;
	    if (terse)
		msg(choose_str("getting the munchies", "getting hungry"));
	    else
		msg(choose_str("you are getting the munchies",
			       "you are starting to get hungry"));
	}
    }
    if (hungry_state != orig_hungry) { 
        player.t_flags &= ~ISRUN; 
        running = FALSE; 
        to_death = FALSE; 
        count = 0; 
    } 
}

/*
 * come_down:
 *	Take the hero down off her acid trip.
 */
void
come_down()
{
    register THING *tp;
    register bool seemonst;

    if (!on(player, ISHALU))
	return;

    kill_daemon(visuals);
    player.t_flags &= ~ISHALU;

    if (on(player, ISBLIND))
	return;

    /*
     * undo the things
     */
    for (tp = lvl_obj; tp != NULL; tp = next(tp))
	if (cansee(tp->o_pos.y, tp->o_pos.x))
	    mvaddch(tp->o_pos.y, tp->o_pos.x, tp->o_type);

    /*
     * undo the monsters
     */
    seemonst = on(player, SEEMONST);
    for (tp = mlist; tp != NULL; tp = next(tp))
    {
	move(tp->t_pos.y, tp->t_pos.x);
	if (cansee(tp->t_pos.y, tp->t_pos.x))
	    if (!on(*tp, ISINVIS) || on(player, CANSEE))
		addch(tp->t_disguise);
	    else
		addch(chat(tp->t_pos.y, tp->t_pos.x));
	else if (seemonst)
	{
	    standout();
	    addch(tp->t_type);
	    standend();
	}
    }
    msg("Everything looks SO boring now.");
}

/*
 * visuals:
 *	change the characters for the player
 */
void
visuals()
{
    register THING *tp;
    register bool seemonst;

    if (!after || (running && jump))
	return;
    /*
     * change the things
     */
    for (tp = lvl_obj; tp != NULL; tp = next(tp))
	if (cansee(tp->o_pos.y, tp->o_pos.x))
	    mvaddch(tp->o_pos.y, tp->o_pos.x, rnd_thing());

    /*
     * change the stairs
     */
    if (!seenstairs && cansee(stairs.y, stairs.x))
	mvaddch(stairs.y, stairs.x, rnd_thing());

    /*
     * change the monsters
     */
    seemonst = on(player, SEEMONST);
    for (tp = mlist; tp != NULL; tp = next(tp))
    {
	move(tp->t_pos.y, tp->t_pos.x);
	if (see_monst(tp))
	{
	    if (tp->t_type == 'X' && tp->t_disguise != 'X')
		addch(rnd_thing());
	    else
		addch(rnd(26) + 'A');
	}
	else if (seemonst)
	{
	    standout();
	    addch(rnd(26) + 'A');
	    standend();
	}
    }
}

/*
 * land:
 *	Land from a levitation potion
 */
void
land()
{
    player.t_flags &= ~ISLEVIT;
    msg(choose_str("bummer!  You've hit the ground",
		   "you float gently to the ground"));
}
```
