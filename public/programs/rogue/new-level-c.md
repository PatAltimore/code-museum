---
title: "new_level.c"
program: "Rogue"
program_slug: "rogue"
file_path: "new_level.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/new_level.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "new-level-c"
order: 7
description: "Building a fresh level each time the stairs are taken: rooms, passages, objects, traps, stairs and the hero."

summary:
  - point: "A level is rebuilt from nothing on every descent, so there is no saved map to store"
    link: "https://en.wikipedia.org/wiki/Procedural_generation"
    link_label: "Procedural generation"
  - point: "Deeper levels get more traps, and a one-in-twenty chance of a treasure room guarded by tougher monsters"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "clear-level"
    line_start: 18
    line_end: 52
    title: "Wiping the Old World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Procedural_generation"
    image_url: ""
    image_caption: ""
    content: "new_level starts by letting go of the old level. It releases the hero if held, records the deepest level reached, and resets every cell of the map to a blank space with the 'real' flag. It then clears the screen and frees each monster's pack, the monsters themselves and the objects left lying on the floor. Nothing about a previous level is kept, so going down and coming back up produces a different level each time. Three constants at the top set the treasure room: one chance in twenty on a level, with between two and ten items in it."
  - id: "build-level"
    line_start: 53
    line_end: 82
    title: "Rooms, Passages, Objects and Traps"
    wikipedia_url: "https://en.wikipedia.org/wiki/Procedural_generation"
    image_url: ""
    image_caption: ""
    content: "Building is a short sequence of calls: do_rooms to dig the rooms, do_passages to connect them, put_things to scatter objects. The count of levels without food, no_food, goes up by one, which is what makes food appear when the player has gone too long without. Traps come next. On a level L there is a chance of L in 10 of any traps at all, then between one and about L/4 of them, capped at ten. Each is placed on an ordinary floor square, the 'real' flag is cleared so that it is hidden, and the trap's kind is stored in the low bits of the square's flags. A comment explains why mazes get no traps: the trap number sits where the passage number would be."
  - id: "stairs-and-hero"
    line_start: 83
    line_end: 100
    title: "The Stairs and the Hero"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The staircase down is placed on a random floor square and marked with '%', and the flag that records having seen it is cleared. Each monster is told which room it is in. The hero is put on a random spot, enter_room draws that room if it is lit, and the '@' is drawn. If the player has the ability to detect monsters, or is hallucinating, the corresponding display is refreshed. There is no staircase up because the game has no way to go back up except with the Amulet; the placement of the single staircase down is the destination of the whole level."
  - id: "rnd-room"
    line_start: 102
    line_end: 116
    title: "Picking a Room That Is Really There"
    wikipedia_url: "https://en.wikipedia.org/wiki/Procedural_generation"
    image_url: ""
    image_caption: ""
    content: "rnd_room picks one of the nine room slots at random, rejecting any marked as gone. A gone room has no walls and floor, only a point that corridors bend around, so nothing can be put in it. The routine loops until it finds a real one. It is the first example of a pattern used throughout level building: choose at random, test, and try again, instead of working out the valid choices in advance."
  - id: "put-things"
    line_start: 118
    line_end: 177
    title: "Scattering Objects, and the Amulet"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "put_things places the level's loot. Once the player has the Amulet, the levels above the deepest get no new items, since the only way to get new stuff is to go down. There is a one-in-twenty chance of a treasure room. Then the game makes nine attempts, each with a 36 percent chance of placing a new thing on a random floor square, so a level has about three objects on average. At level 26 or deeper, if the Amulet has not been found, it is placed on the ground as an item with no damage and drawn with a ','. The numbers are a quiet statement of economy: a few objects per level, and the most valuable thing in the game appears only when the player is deep enough."
  - id: "treasure-room"
    line_start: 179
    line_end: 231
    title: "A Treasure Room and Its Guards"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "treas_room picks a real room and fills it with between two and ten objects. It then fills the same room with monsters, enough to outnumber the treasure by at least two, and it raises the level by one while making them, so the monsters are the kind found one level deeper. Each is flagged mean, which lets it wake when the player enters the room, with a comment that there are 'no sloughers in this room'. The routine restores the level afterwards. It is a risk-and-reward room built from the same pieces as an ordinary one: the same item generator and the same monster generator, with the dials turned up."
---

```c
/*
 * new_level:
 *	Dig and draw a new level
 *
 * @(#)new_level.c	4.38 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <curses.h>
#include <string.h>
#include "rogue.h"

#define TREAS_ROOM 20	/* one chance in TREAS_ROOM for a treasure room */
#define MAXTREAS 10	/* maximum number of treasures in a treasure room */
#define MINTREAS 2	/* minimum number of treasures in a treasure room */

void
new_level()
{
    THING *tp;
    PLACE *pp;
    char *sp;
    int i;

    player.t_flags &= ~ISHELD;	/* unhold when you go down just in case */
    if (level > max_level)
	max_level = level;
    /*
     * Clean things off from last level
     */
    for (pp = places; pp < &places[MAXCOLS*MAXLINES]; pp++)
    {
	pp->p_ch = ' ';
	pp->p_flags = F_REAL;
	pp->p_monst = NULL;
    }
    clear();
    /*
     * Free up the monsters on the last level
     */
    for (tp = mlist; tp != NULL; tp = next(tp))
	free_list(tp->t_pack);
    free_list(mlist);
    /*
     * Throw away stuff left on the previous level (if anything)
     */
    free_list(lvl_obj);
    do_rooms();				/* Draw rooms */
    do_passages();			/* Draw passages */
    no_food++;
    put_things();			/* Place objects (if any) */
    /*
     * Place the traps
     */
    if (rnd(10) < level)
    {
	ntraps = rnd(level / 4) + 1;
	if (ntraps > MAXTRAPS)
	    ntraps = MAXTRAPS;
	i = ntraps;
	while (i--)
	{
	    /*
	     * not only wouldn't it be NICE to have traps in mazes
	     * (not that we care about being nice), since the trap
	     * number is stored where the passage number is, we
	     * can't actually do it.
	     */
	    do
	    {
		find_floor((struct room *) NULL, &stairs, FALSE, FALSE);
	    } while (chat(stairs.y, stairs.x) != FLOOR);
	    sp = &flat(stairs.y, stairs.x);
	    *sp &= ~F_REAL;
	    *sp |= rnd(NTRAPS);
	}
    }
    /*
     * Place the staircase down.
     */
    find_floor((struct room *) NULL, &stairs, FALSE, FALSE);
    chat(stairs.y, stairs.x) = STAIRS;
    seenstairs = FALSE;

    for (tp = mlist; tp != NULL; tp = next(tp))
	tp->t_room = roomin(&tp->t_pos);

    find_floor((struct room *) NULL, &hero, FALSE, TRUE);
    enter_room(&hero);
    mvaddch(hero.y, hero.x, PLAYER);
    if (on(player, SEEMONST))
	turn_see(FALSE);
    if (on(player, ISHALU))
	visuals();
}

/*
 * rnd_room:
 *	Pick a room that is really there
 */
int
rnd_room()
{
    int rm;

    do
    {
	rm = rnd(MAXROOMS);
    } while (rooms[rm].r_flags & ISGONE);
    return rm;
}

/*
 * put_things:
 *	Put potions and scrolls on this level
 */

void
put_things()
{
    int i;
    THING *obj;

    /*
     * Once you have found the amulet, the only way to get new stuff is
     * go down into the dungeon.
     */
    if (amulet && level < max_level)
	return;
    /*
     * check for treasure rooms, and if so, put it in.
     */
    if (rnd(TREAS_ROOM) == 0)
	treas_room();
    /*
     * Do MAXOBJ attempts to put things on a level
     */
    for (i = 0; i < MAXOBJ; i++)
	if (rnd(100) < 36)
	{
	    /*
	     * Pick a new object and link it in the list
	     */
	    obj = new_thing();
	    attach(lvl_obj, obj);
	    /*
	     * Put it somewhere
	     */
	    find_floor((struct room *) NULL, &obj->o_pos, FALSE, FALSE);
	    chat(obj->o_pos.y, obj->o_pos.x) = (char) obj->o_type;
	}
    /*
     * If he is really deep in the dungeon and he hasn't found the
     * amulet yet, put it somewhere on the ground
     */
    if (level >= AMULETLEVEL && !amulet)
    {
	obj = new_item();
	attach(lvl_obj, obj);
	obj->o_hplus = 0;
	obj->o_dplus = 0;
	strncpy(obj->o_damage,"0x0",sizeof(obj->o_damage));
        strncpy(obj->o_hurldmg,"0x0",sizeof(obj->o_hurldmg));
	obj->o_arm = 11;
	obj->o_type = AMULET;
	/*
	 * Put it somewhere
	 */
	find_floor((struct room *) NULL, &obj->o_pos, FALSE, FALSE);
	chat(obj->o_pos.y, obj->o_pos.x) = AMULET;
    }
}

/*
 * treas_room:
 *	Add a treasure room
 */
#define MAXTRIES 10	/* max number of tries to put down a monster */


void
treas_room()
{
    int nm;
    THING *tp;
    struct room *rp;
    int spots, num_monst;
    static coord mp;

    rp = &rooms[rnd_room()];
    spots = (rp->r_max.y - 2) * (rp->r_max.x - 2) - MINTREAS;
    if (spots > (MAXTREAS - MINTREAS))
	spots = (MAXTREAS - MINTREAS);
    num_monst = nm = rnd(spots) + MINTREAS;
    while (nm--)
    {
	find_floor(rp, &mp, 2 * MAXTRIES, FALSE);
	tp = new_thing();
	tp->o_pos = mp;
	attach(lvl_obj, tp);
	chat(mp.y, mp.x) = (char) tp->o_type;
    }

    /*
     * fill up room with monsters from the next level down
     */

    if ((nm = rnd(spots) + MINTREAS) < num_monst + 2)
	nm = num_monst + 2;
    spots = (rp->r_max.y - 2) * (rp->r_max.x - 2);
    if (nm > spots)
	nm = spots;
    level++;
    while (nm--)
    {
	spots = 0;
	if (find_floor(rp, &mp, MAXTRIES, TRUE))
	{
	    tp = new_item();
	    new_monster(tp, randmonster(FALSE), &mp);
	    tp->t_flags |= ISMEAN;	/* no sloughers in THIS room */
	    give_pack(tp);
	}
    }
    level--;
}
```
