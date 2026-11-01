---
title: "monsters.c"
program: "Rogue"
program_slug: "rogue"
file_path: "monsters.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/monsters.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "monsters-c"
order: 14
description: "Choosing which monster appears, building it from the master table, waking it, and the saving throw."

summary:
  - point: "A monster's letter is its type, and the deeper the level the later in the table the pick is made"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "Medusa's gaze and the saving throw are both d20 rolls against a number that depends on level"
    link: "https://en.wikipedia.org/wiki/Saving_throw"
    link_label: "Saving throw"

enhancements:
  - id: "monster-lists"
    line_start: 18
    line_end: 29
    title: "Monsters in Order of Difficulty"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Two arrays list the monster letters from weakest to strongest: kestrel K, emu E, bat B, snake S, hobgoblin H, ice monster I, rattlesnake R, orc O, zombie Z, leprechaun L, centaur C, quasit Q, aquator A, nymph N, yeti Y, venus flytrap F, troll T, wraith W, phantom P, xeroc X, urukhai U, medusa M, vampire V, gargoyle G, jabberwock J, dragon D. The second list is the same with zeroes in the places of monsters that never wander in, the ice monster, leprechaun, nymph, flytrap, xeroc and dragon, none of which is ever picked as a wanderer. The position in the array is the depth at which the monster becomes typical."
  - id: "randmonster"
    line_start: 31
    line_end: 52
    title: "The Meaner the Deeper"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "randmonster picks an index into the list. It starts from the current level and adds a random number from minus six to plus three, so on level 5 the pick falls between minus one and 8. A negative index is replaced by a random number below five. An index above 25 is replaced by a number between 21 and 25. For wandering monsters, a pick that lands on a zero is tried again. The result is that a player meets kestrels and emus early, an occasional monster from deeper down, and the full set of horrors only near the bottom."
  - id: "new-monster"
    line_start: 54
    line_end: 91
    title: "Making a Monster from the Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "new_monster builds a live monster from its entry in the master table. The monster is added to the list, placed on the map, and given the character that was on that square. Beyond the Amulet's level, level 26, each level adds one to the monster's own level, takes one off its armour class, and adds ten to its experience. Its hit points are the roll of one eight-sided die per level. From level 30 onwards every monster is hasted. A hero wearing a ring of aggravate monsters has it start running at once. A xeroc is given the look of a random object, so that it can lie in wait looking like treasure."
  - id: "exp-add"
    line_start: 93
    line_end: 111
    title: "The Worth of a Kill"
    wikipedia_url: "https://en.wikipedia.org/wiki/Experience_point"
    image_url: ""
    image_caption: ""
    content: "exp_add is the bonus experience given to a monster according to its toughness. A first-level monster is worth its hit points divided by eight, while others get hit points divided by six. Above level six the figure is multiplied by four, and above level nine by twenty. The calculation is added to the base experience in the table, so a monster with an unlucky high roll of hit points is worth more than one that is weak for its type."
  - id: "wanderer"
    line_start: 113
    line_end: 144
    title: "Something Arrives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "wanderer is called by a daemon in daemons.c to bring a new monster to the level. It picks a spot on the floor, not in the room the hero is in, creates a monster from the wandering list, and points it at the hero with runto. If the hero can sense monsters, a magic effect from a potion of monster detection, the new arrival's letter is drawn on the map in standout, or inverse, characters. In wizard mode a message names the monster. Wandering monsters are why staying on one level to rest is never safe."
  - id: "wake-monster"
    line_start: 146
    line_end: 210
    title: "Stepping Next to a Monster"
    wikipedia_url: "https://en.wikipedia.org/wiki/Saving_throw"
    image_url: ""
    image_caption: ""
    content: "wake_monster is called when the hero comes next to a monster. A mean monster that is not already chasing has a two-in-three chance of starting, unless it is held, the hero wears a ring of stealth or the hero is levitating. The medusa gets a special rule: if the hero can see, is not hallucinating, and the medusa is awake and has not yet gazed, a gaze is made once, in a lit room or within lamp distance. A saving throw against magic is then rolled, and if it fails the hero is confused, with a fuse set or lengthened. Last, greedy monsters wake and run to guard the room's gold, or if none, the hero."
  - id: "give-pack"
    line_start: 212
    line_end: 222
    title: "Monsters That Carry Things"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "give_pack gives a monster something to carry, which falls to the floor when it is killed. The chance is the monster's carry value in the table, a percentage, and it applies only when the hero has reached the deepest level so far. A hero who goes back up to an old level finds no new treasure carried by monsters there. The thing given is a full random item from new_thing."
  - id: "saving-throw"
    line_start: 224
    line_end: 252
    title: "Saving Throws"
    wikipedia_url: "https://en.wikipedia.org/wiki/Saving_throw"
    image_url: ""
    image_caption: ""
    content: "save_throw is the whole rule. Take a number, 14 plus the kind of save, minus half the creature's level, roll a twenty-sided die, and succeed if the roll reaches that number. A higher-level creature has an easier time. save is the hero's version: for a save against magic, each ring of protection worn lowers the number by its bonus. Kinds of save are small constants in rogue.h, with poison and the like, and magic, the hardest. The function is short because the table of rules fits in a single sum."
---

```c
/*
 * File with various monster functions in it
 *
 * @(#)monsters.c	4.46 (Berkeley) 02/05/99
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
#include <ctype.h>

/*
 * List of monsters in rough order of vorpalness
 */
static char lvl_mons[] =  {
    'K', 'E', 'B', 'S', 'H', 'I', 'R', 'O', 'Z', 'L', 'C', 'Q', 'A',
    'N', 'Y', 'F', 'T', 'W', 'P', 'X', 'U', 'M', 'V', 'G', 'J', 'D'
};

static char wand_mons[] = {
    'K', 'E', 'B', 'S', 'H',   0, 'R', 'O', 'Z',   0, 'C', 'Q', 'A',
      0, 'Y',   0, 'T', 'W', 'P',   0, 'U', 'M', 'V', 'G', 'J',   0
};

/*
 * randmonster:
 *	Pick a monster to show up.  The lower the level,
 *	the meaner the monster.
 */
char
randmonster(bool wander)
{
    int d;
    char *mons;

    mons = (wander ? wand_mons : lvl_mons);
    do
    {
	d = level + (rnd(10) - 6);
	if (d < 0)
	    d = rnd(5);
	if (d > 25)
	    d = rnd(5) + 21;
    } while (mons[d] == 0);
    return mons[d];
}

/*
 * new_monster:
 *	Pick a new monster and add it to the list
 */

void
new_monster(THING *tp, char type, coord *cp)
{
    struct monster *mp;
    int lev_add;

    if ((lev_add = level - AMULETLEVEL) < 0)
	lev_add = 0;
    attach(mlist, tp);
    tp->t_type = type;
    tp->t_disguise = type;
    tp->t_pos = *cp;
    move(cp->y, cp->x);
    tp->t_oldch = CCHAR( inch() );
    tp->t_room = roomin(cp);
    moat(cp->y, cp->x) = tp;
    mp = &monsters[tp->t_type-'A'];
    tp->t_stats.s_lvl = mp->m_stats.s_lvl + lev_add;
    tp->t_stats.s_maxhp = tp->t_stats.s_hpt = roll(tp->t_stats.s_lvl, 8);
    tp->t_stats.s_arm = mp->m_stats.s_arm - lev_add;
    strcpy(tp->t_stats.s_dmg,mp->m_stats.s_dmg);
    tp->t_stats.s_str = mp->m_stats.s_str;
    tp->t_stats.s_exp = mp->m_stats.s_exp + lev_add * 10 + exp_add(tp);
    tp->t_flags = mp->m_flags;
    if (level > 29)
	tp->t_flags |= ISHASTE;
    tp->t_turn = TRUE;
    tp->t_pack = NULL;
    if (ISWEARING(R_AGGR))
	runto(cp);
    if (type == 'X')
	tp->t_disguise = rnd_thing();
}

/*
 * expadd:
 *	Experience to add for this monster's level/hit points
 */
int
exp_add(THING *tp)
{
    int mod;

    if (tp->t_stats.s_lvl == 1)
	mod = tp->t_stats.s_maxhp / 8;
    else
	mod = tp->t_stats.s_maxhp / 6;
    if (tp->t_stats.s_lvl > 9)
	mod *= 20;
    else if (tp->t_stats.s_lvl > 6)
	mod *= 4;
    return mod;
}

/*
 * wanderer:
 *	Create a new wandering monster and aim it at the player
 */

void
wanderer()
{
    THING *tp;
    static coord cp;

    tp = new_item();
    do
    {
	find_floor((struct room *) NULL, &cp, FALSE, TRUE);
    } while (roomin(&cp) == proom);
    new_monster(tp, randmonster(TRUE), &cp);
    if (on(player, SEEMONST))
    {
	standout();
	if (!on(player, ISHALU))
	    addch(tp->t_type);
	else
	    addch(rnd(26) + 'A');
	standend();
    }
    runto(&tp->t_pos);
#ifdef MASTER
    if (wizard)
	msg("started a wandering %s", monsters[tp->t_type-'A'].m_name);
#endif
}

/*
 * wake_monster:
 *	What to do when the hero steps next to a monster
 */
THING *
wake_monster(int y, int x)
{
    THING *tp;
    struct room *rp;
    char ch, *mname;

#ifdef MASTER
    if ((tp = moat(y, x)) == NULL)
	msg("can't find monster in wake_monster");
#else
    tp = moat(y, x);
    if (tp == NULL) 	 	 
	endwin(), abort(); 
#endif
    ch = tp->t_type;
    /*
     * Every time he sees mean monster, it might start chasing him
     */
    if (!on(*tp, ISRUN) && rnd(3) != 0 && on(*tp, ISMEAN) && !on(*tp, ISHELD)
	&& !ISWEARING(R_STEALTH) && !on(player, ISLEVIT))
    {
	tp->t_dest = &hero;
	tp->t_flags |= ISRUN;
    }
    if (ch == 'M' && !on(player, ISBLIND) && !on(player, ISHALU)
	&& !on(*tp, ISFOUND) && !on(*tp, ISCANC) && on(*tp, ISRUN))
    {
        rp = proom;
	if ((rp != NULL && !(rp->r_flags & ISDARK))
	    || dist(y, x, hero.y, hero.x) < LAMPDIST)
	{
	    tp->t_flags |= ISFOUND;
	    if (!save(VS_MAGIC))
	    {
		if (on(player, ISHUH))
		    lengthen(unconfuse, spread(HUHDURATION));
		else
		    fuse(unconfuse, 0, spread(HUHDURATION), AFTER);
		player.t_flags |= ISHUH;
		mname = set_mname(tp);
		addmsg("%s", mname);
		if (strcmp(mname, "it") != 0)
		    addmsg("'");
		msg("s gaze has confused you");
	    }
	}
    }
    /*
     * Let greedy ones guard gold
     */
    if (on(*tp, ISGREED) && !on(*tp, ISRUN))
    {
	tp->t_flags |= ISRUN;
	if (proom->r_goldval)
	    tp->t_dest = &proom->r_gold;
	else
	    tp->t_dest = &hero;
    }
    return tp;
}

/*
 * give_pack:
 *	Give a pack to a monster if it deserves one
 */

void
give_pack(THING *tp)
{
    if (level >= max_level && rnd(100) < monsters[tp->t_type-'A'].m_carry)
	attach(tp->t_pack, new_thing());
}

/*
 * save_throw:
 *	See if a creature save against something
 */
int
save_throw(int which, THING *tp)
{
    int need;

    need = 14 + which - tp->t_stats.s_lvl / 2;
    return (roll(1, 20) >= need);
}

/*
 * save:
 *	See if he saves against various nasty things
 */
int
save(int which)
{
    if (which == VS_MAGIC)
    {
	if (ISRING(LEFT, R_PROTECT))
	    which -= cur_ring[LEFT]->o_arm;
	if (ISRING(RIGHT, R_PROTECT))
	    which -= cur_ring[RIGHT]->o_arm;
    }
    return save_throw(which, &player);
}
```
