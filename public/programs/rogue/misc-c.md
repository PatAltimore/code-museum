---
title: "misc.c"
program: "Rogue"
program_slug: "rogue"
file_path: "misc.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/misc.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "misc-c"
order: 25
description: "Odds and ends that nothing else owns: looking around, eating, levelling up, strength, direction prompts."

summary:
  - point: "look draws only the nine squares around the hero, and the rest of the map is memory"
    link: "https://en.wikipedia.org/wiki/Field_of_view_in_video_games"
    link_label: "Field of view"
  - point: "Running stops at doors, junctions and anything interesting, by rules in look"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "Eating is the only way to refill the stomach, and it never overfills"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "look-setup"
    line_start: 19
    line_end: 65
    title: "A Quick Glance Around"
    wikipedia_url: "https://en.wikipedia.org/wiki/Field_of_view_in_video_games"
    image_url: ""
    image_caption: ""
    content: "look is called after almost every move. It is passed a flag, wakeup, which says whether monsters beside the hero should be given a chance to notice. It first erases the glow of a lamp around the hero's last position, if the hero has moved, then fixes the three-by-three block of squares around the hero. When the game is running the hero along a corridor, it records the sum and the difference of the hero's coordinates, which turn out later to be measures along the two diagonals. A debugging switch, compiled out, would stop the function being re-entered."
  - id: "look-scan"
    line_start: 66
    line_end: 123
    title: "What Can the Hero See?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Line_of_sight_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The loop visits each square of the block, and skips squares with nothing to show. A hero in a passage sees only passage squares, apart from doors, and one in a room only sees the room's squares. For diagonal moves between passages or doors, if both squares beside the diagonal are blocked, the square is hidden, so a hero cannot see round a corner. A monster on the square is skipped if it is invisible and only sensed, otherwise it wakes if the flag is set, and is shown as its disguise, or as a random letter if the hero is hallucinating. A blind hero sees only the square underfoot. In a dark room, floor is shown as blank unless the see_floor option is on. The character is only drawn if it has changed."
  - id: "look-running"
    line_start: 124
    line_end: 182
    title: "When to Stop Running"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The last half of look decides whether a run should end. With the door_stop option on, and a run in progress after the first step, it ignores squares behind the hero, using the run direction and the sums and differences recorded earlier. For the squares left, a door in line with the hero stops the run, a passage square in line is counted, floor and walls are ignored, and anything else, an object or a monster, stops it. If more than one passage leads on, the hero is at a junction and the run ends. Last of all the hero's own symbol is drawn, unless the hero is running and jump is on."
  - id: "trip-and-lamp"
    line_start: 184
    line_end: 250
    title: "Hallucination, Lamp Light and Dark Rooms"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hallucination"
    image_url: ""
    image_caption: ""
    content: "trip_ch returns a random thing's symbol in place of an object when the hero is hallucinating, but leaves floor, walls, doors, passages and traps alone, and also the stairs once they have been seen. erase_lamp, when the see_floor option is on, blanks out the floor squares around the hero's old position in a dark room. show_floor answers whether floor should be drawn in the current room: in a dark room it depends on the see_floor option, and a blind hero or a lit room always shows it."
  - id: "find-obj"
    line_start: 252
    line_end: 274
    title: "Finding an Object by Place"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "find_obj walks the level's object list for the one at a given position and returns it. The list has no index by position, so this is a linear search, and the lists are short. If nothing is there, a wizard build prints 'Non-object' with the coordinates, and in normal builds the comment says the end cannot be reached. pick_up and add_pack both use it."
  - id: "eat"
    line_start: 276
    line_end: 315
    title: "Eating"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "eat asks for food with get_item, and refuses other items: 'ugh, you would get ill if you ate that'. A hero with a negative stomach count, for one who has been fainting, starts again from zero. A meal adds HUNGERTIME, 1300, minus 200 plus a random number up to 400, so 1100 to 1499, capped at STOMACHSIZE, 2000, and the hunger state is reset. A fruit is 'yummy'. A ration is 'tasted good', but about three times in ten it 'tastes awful' and gives a single point of experience, which may even bring a level."
  - id: "check-level"
    line_start: 317
    line_end: 340
    title: "Gaining a Level"
    wikipedia_url: "https://en.wikipedia.org/wiki/Experience_point"
    image_url: ""
    image_caption: ""
    content: "check_level finds the hero's level from experience points by walking the e_levels table, a list of thresholds that ends in a zero, and taking the first entry above the current points. If the level rose, it rolls one ten-sided die for each level gained, adds the result to both maximum and current hit points, and prints 'welcome to level' with the number. The level is set to the computed value whichever way it points, but hit points are added only when it rises."
  - id: "strength"
    line_start: 342
    line_end: 376
    title: "Strength and Its Limits"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "chg_str changes strength by an amount, through add_str, which keeps the result between 3 and 31. It also keeps max_stats.s_str, the highest strength reached, which a potion of restore strength uses. The highest is worked out without any bonus from rings of add strength, by taking the ring bonuses off a copy first, so that wearing a ring does not raise the level that restoring will return to."
  - id: "haste-and-aggravate"
    line_start: 378
    line_end: 414
    title: "Speeding Up and Stirring Up"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "add_haste gives the hero speed. A hero who is already hasted instead 'faints from exhaustion', loses up to seven turns, and loses the haste along with the timer. Otherwise the flag is set, with a four to seven turn fuse if from a potion. aggravate calls runto on every monster on the level, which is what the scroll and a ring of aggravate monster do."
  - id: "vowel-and-current"
    line_start: 416
    line_end: 455
    title: "Small Helpers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "vowelstr returns 'n' if a string begins with a vowel, so that code can write 'a%s' and get 'a' or 'an'. is_current checks whether an object is the worn armour, the wielded weapon or either ring, and if so says 'That's already in use' and returns true. It is called before putting on, wielding or throwing, to stop an item being used twice."
  - id: "get-dir"
    line_start: 457
    line_end: 515
    title: "Asking for a Direction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "get_dir prompts 'which direction?' for any command that needs one. The eight keys are the vi movement keys, h j k l y u b n, in either case, each setting the global delta to a step of minus one, zero or one in each axis. Escape cancels. The 'again' command can repeat the last direction and does so without asking. A confused hero has a one in five chance that the direction is replaced by a random one, never staying still. These are the same keys that vi uses for moving the cursor."
  - id: "sign-spread"
    line_start: 517
    line_end: 538
    title: "A Comment That Disagrees With Its Code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "sign gives the sign of a number as minus one, zero or one. spread varies a number a little. Its comment says 'plus or minus 20%', but the code subtracts a twentieth and adds a random amount below a tenth, so the result is within five percent either way. It is how potion durations and wandering monster times are randomised."
  - id: "call-it"
    line_start: 540
    line_end: 567
    title: "Naming What You Used"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "call_it is called after a potion or scroll is used. If the kind is now known, any name the player had given it is freed. If not, and no name has been given, the game asks 'what do you want to call it?' and stores the answer with malloc. The player's guess then appears in the inventory as 'called' plus the name. This is how a player keeps notes in the game."
  - id: "rnd-thing"
    line_start: 569
    line_end: 597
    title: "Random Symbols"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hallucination"
    image_url: ""
    image_caption: ""
    content: "rnd_thing picks a random symbol for hallucination from a list of ten: potion, scroll, ring, stick, food, weapon, armour, stairs, gold, Amulet. The Amulet is on the list only from level 26 down. choose_str picks one of two strings depending on whether the hero is hallucinating, and is how nearly every message has a trippy version. The comment heading above it in the source is garbled."
---

```c
/*
 * All sorts of miscellaneous routines
 *
 * @(#)misc.c	4.66 (Berkeley) 08/06/83
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <stdlib.h>
#include <curses.h>
#include <string.h>
#include <ctype.h>
#include "rogue.h"

/*
 * look:
 *	A quick glance all around the player
 */
#undef DEBUG


void
look(bool wakeup)
{
    int x, y;
    int ch;
    THING *tp;
    PLACE *pp;
    struct room *rp;
    int ey, ex;
    int passcount;
    char pfl, *fp, pch;
    int sy, sx, sumhero = 0, diffhero = 0;
# ifdef DEBUG
    static bool done = FALSE;

    if (done)
	return;
    done = TRUE;
# endif /* DEBUG */
    passcount = 0;
    rp = proom;
    if (!ce(oldpos, hero))
    {
	erase_lamp(&oldpos, oldrp);
	oldpos = hero;
	oldrp = rp;
    }
    ey = hero.y + 1;
    ex = hero.x + 1;
    sx = hero.x - 1;
    sy = hero.y - 1;
    if (door_stop && !firstmove && running)
    {
	sumhero = hero.y + hero.x;
	diffhero = hero.y - hero.x;
    }
    pp = INDEX(hero.y, hero.x);
    pch = pp->p_ch;
    pfl = pp->p_flags;

    for (y = sy; y <= ey; y++)
	if (y > 0 && y < NUMLINES - 1) for (x = sx; x <= ex; x++)
	{
	    if (x < 0 || x >= NUMCOLS)
		continue;
	    if (!on(player, ISBLIND))
	    {
		if (y == hero.y && x == hero.x)
		    continue;
	    }

	    pp = INDEX(y, x);
	    ch = pp->p_ch;
	    if (ch == ' ')		/* nothing need be done with a ' ' */
		    continue;
	    fp = &pp->p_flags;
	    if (pch != DOOR && ch != DOOR)
		if ((pfl & F_PASS) != (*fp & F_PASS))
		    continue;
	    if (((*fp & F_PASS) || ch == DOOR) && 
		 ((pfl & F_PASS) || pch == DOOR))
	    {
		if (hero.x != x && hero.y != y &&
		    !step_ok(chat(y, hero.x)) && !step_ok(chat(hero.y, x)))
			continue;
	    }

	    if ((tp = pp->p_monst) == NULL)
		ch = trip_ch(y, x, ch);
	    else
		if (on(player, SEEMONST) && on(*tp, ISINVIS))
		{
		    if (door_stop && !firstmove)
			running = FALSE;
		    continue;
		}
		else
		{
		    if (wakeup)
			wake_monster(y, x);
		    if (see_monst(tp))
		    {
			if (on(player, ISHALU))
			    ch = rnd(26) + 'A';
			else
			    ch = tp->t_disguise;
		    }
		}
	    if (on(player, ISBLIND) && (y != hero.y || x != hero.x))
		continue;

	    move(y, x);

	    if ((proom->r_flags & ISDARK) && !see_floor && ch == FLOOR)
		ch = ' ';

	    if (tp != NULL || ch != CCHAR( inch() ))
		addch(ch);

	    if (door_stop && !firstmove && running)
	    {
		switch (runch)
		{
		    case 'h':
			if (x == ex)
			    continue;
		    when 'j':
			if (y == sy)
			    continue;
		    when 'k':
			if (y == ey)
			    continue;
		    when 'l':
			if (x == sx)
			    continue;
		    when 'y':
			if ((y + x) - sumhero >= 1)
			    continue;
		    when 'u':
			if ((y - x) - diffhero >= 1)
			    continue;
		    when 'n':
			if ((y + x) - sumhero <= -1)
			    continue;
		    when 'b':
			if ((y - x) - diffhero <= -1)
			    continue;
		}
		switch (ch)
		{
		    case DOOR:
			if (x == hero.x || y == hero.y)
			    running = FALSE;
			break;
		    case PASSAGE:
			if (x == hero.x || y == hero.y)
			    passcount++;
			break;
		    case FLOOR:
		    case '|':
		    case '-':
		    case ' ':
			break;
		    default:
			running = FALSE;
			break;
		}
	    }
	}
    if (door_stop && !firstmove && passcount > 1)
	running = FALSE;
    if (!running || !jump)
	mvaddch(hero.y, hero.x, PLAYER);
# ifdef DEBUG
    done = FALSE;
# endif /* DEBUG */
}

/*
 * trip_ch:
 *	Return the character appropriate for this space, taking into
 *	account whether or not the player is tripping.
 */
int
trip_ch(int y, int x, int ch)
{
    if (on(player, ISHALU) && after)
	switch (ch)
	{
	    case FLOOR:
	    case ' ':
	    case PASSAGE:
	    case '-':
	    case '|':
	    case DOOR:
	    case TRAP:
		break;
	    default:
		if (y != stairs.y || x != stairs.x || !seenstairs)
		    ch = rnd_thing();
		break;
	}
    return ch;
}

/*
 * erase_lamp:
 *	Erase the area shown by a lamp in a dark room.
 */

void
erase_lamp(coord *pos, struct room *rp)
{
    int y, x, ey, sy, ex;

    if (!(see_floor && (rp->r_flags & (ISGONE|ISDARK)) == ISDARK
	&& !on(player,ISBLIND)))
	    return;

    ey = pos->y + 1;
    ex = pos->x + 1;
    sy = pos->y - 1;
    for (x = pos->x - 1; x <= ex; x++)
	for (y = sy; y <= ey; y++)
	{
	    if (y == hero.y && x == hero.x)
		continue;
	    move(y, x);
	    if (inch() == FLOOR)
		addch(' ');
	}
}

/*
 * show_floor:
 *	Should we show the floor in her room at this time?
 */
bool
show_floor()
{
    if ((proom->r_flags & (ISGONE|ISDARK)) == ISDARK && !on(player, ISBLIND))
	return see_floor;
    else
	return TRUE;
}

/*
 * find_obj:
 *	Find the unclaimed object at y, x
 */
THING *
find_obj(int y, int x)
{
    THING *obj;

    for (obj = lvl_obj; obj != NULL; obj = next(obj))
    {
	if (obj->o_pos.y == y && obj->o_pos.x == x)
		return obj;
    }
#ifdef MASTER
    sprintf(prbuf, "Non-object %d,%d", y, x);
    msg(prbuf);
    return NULL;
#else
    /* NOTREACHED */
    return NULL;
#endif
}

/*
 * eat:
 *	She wants to eat something, so let her try
 */

void
eat()
{
    THING *obj;

    if ((obj = get_item("eat", FOOD)) == NULL)
	return;
    if (obj->o_type != FOOD)
    {
	if (!terse)
	    msg("ugh, you would get ill if you ate that");
	else
	    msg("that's Inedible!");
	return;
    }
    if (food_left < 0)
	food_left = 0;
    if ((food_left += HUNGERTIME - 200 + rnd(400)) > STOMACHSIZE)
	food_left = STOMACHSIZE;
    hungry_state = 0;
    if (obj == cur_weapon)
	cur_weapon = NULL;
    if (obj->o_which == 1)
	msg("my, that was a yummy %s", fruit);
    else
	if (rnd(100) > 70)
	{
	    pstats.s_exp++;
	    msg("%s, this food tastes awful", choose_str("bummer", "yuk"));
	    check_level();
	}
	else
	    msg("%s, that tasted good", choose_str("oh, wow", "yum"));
    leave_pack(obj, FALSE, FALSE);
}

/*
 * check_level:
 *	Check to see if the guy has gone up a level.
 */

void
check_level()
{
    int i, add, olevel;

    for (i = 0; e_levels[i] != 0; i++)
	if (e_levels[i] > pstats.s_exp)
	    break;
    i++;
    olevel = pstats.s_lvl;
    pstats.s_lvl = i;
    if (i > olevel)
    {
	add = roll(i - olevel, 10);
	max_hp += add;
	pstats.s_hpt += add;
	msg("welcome to level %d", i);
    }
}

/*
 * chg_str:
 *	used to modify the playes strength.  It keeps track of the
 *	highest it has been, just in case
 */

void
chg_str(int amt)
{
    auto str_t comp;

    if (amt == 0)
	return;
    add_str(&pstats.s_str, amt);
    comp = pstats.s_str;
    if (ISRING(LEFT, R_ADDSTR))
	add_str(&comp, -cur_ring[LEFT]->o_arm);
    if (ISRING(RIGHT, R_ADDSTR))
	add_str(&comp, -cur_ring[RIGHT]->o_arm);
    if (comp > max_stats.s_str)
	max_stats.s_str = comp;
}

/*
 * add_str:
 *	Perform the actual add, checking upper and lower bound limits
 */
void
add_str(str_t *sp, int amt)
{
    if ((*sp += amt) < 3)
	*sp = 3;
    else if (*sp > 31)
	*sp = 31;
}

/*
 * add_haste:
 *	Add a haste to the player
 */
bool
add_haste(bool potion)
{
    if (on(player, ISHASTE))
    {
	no_command += rnd(8);
	player.t_flags &= ~(ISRUN|ISHASTE);
	extinguish(nohaste);
	msg("you faint from exhaustion");
	return FALSE;
    }
    else
    {
	player.t_flags |= ISHASTE;
	if (potion)
	    fuse(nohaste, 0, rnd(4)+4, AFTER);
	return TRUE;
    }
}

/*
 * aggravate:
 *	Aggravate all the monsters on this level
 */

void
aggravate()
{
    THING *mp;

    for (mp = mlist; mp != NULL; mp = next(mp))
	runto(&mp->t_pos);
}

/*
 * vowelstr:
 *      For printfs: if string starts with a vowel, return "n" for an
 *	"an".
 */
char *
vowelstr(char *str)
{
    switch (*str)
    {
	case 'a': case 'A':
	case 'e': case 'E':
	case 'i': case 'I':
	case 'o': case 'O':
	case 'u': case 'U':
	    return "n";
	default:
	    return "";
    }
}

/* 
 * is_current:
 *	See if the object is one of the currently used items
 */
bool
is_current(THING *obj)
{
    if (obj == NULL)
	return FALSE;
    if (obj == cur_armor || obj == cur_weapon || obj == cur_ring[LEFT]
	|| obj == cur_ring[RIGHT])
    {
	if (!terse)
	    addmsg("That's already ");
	msg("in use");
	return TRUE;
    }
    return FALSE;
}

/*
 * get_dir:
 *      Set up the direction co_ordinate for use in varios "prefix"
 *	commands
 */
bool
get_dir()
{
    char *prompt;
    bool gotit;
    static coord last_delt= {0,0};

    if (again && last_dir != '\0')
    {
	delta.y = last_delt.y;
	delta.x = last_delt.x;
	dir_ch = last_dir;
    }
    else
    {
	if (!terse)
	    msg(prompt = "which direction? ");
	else
	    prompt = "direction: ";
	do
	{
	    gotit = TRUE;
	    switch (dir_ch = readchar())
	    {
		case 'h': case'H': delta.y =  0; delta.x = -1;
		when 'j': case'J': delta.y =  1; delta.x =  0;
		when 'k': case'K': delta.y = -1; delta.x =  0;
		when 'l': case'L': delta.y =  0; delta.x =  1;
		when 'y': case'Y': delta.y = -1; delta.x = -1;
		when 'u': case'U': delta.y = -1; delta.x =  1;
		when 'b': case'B': delta.y =  1; delta.x = -1;
		when 'n': case'N': delta.y =  1; delta.x =  1;
		when ESCAPE: last_dir = '\0'; reset_last(); return FALSE;
		otherwise:
		    mpos = 0;
		    msg(prompt);
		    gotit = FALSE;
	    }
	} until (gotit);
	if (isupper(dir_ch))
	    dir_ch = (char) tolower(dir_ch);
	last_dir = dir_ch;
	last_delt.y = delta.y;
	last_delt.x = delta.x;
    }
    if (on(player, ISHUH) && rnd(5) == 0)
	do
	{
	    delta.y = rnd(3) - 1;
	    delta.x = rnd(3) - 1;
	} while (delta.y == 0 && delta.x == 0);
    mpos = 0;
    return TRUE;
}

/*
 * sign:
 *	Return the sign of the number
 */
int
sign(int nm)
{
    if (nm < 0)
	return -1;
    else
	return (nm > 0);
}

/*
 * spread:
 *	Give a spread around a given number (+/- 20%)
 */
int
spread(int nm)
{
    return nm - nm / 20 + rnd(nm / 10);
}

/*
 * call_it:
 *	Call an object something after use.
 */

void
call_it(struct obj_info *info)
{
    if (info->oi_know)
    {
	if (info->oi_guess)
	{
	    free(info->oi_guess);
	    info->oi_guess = NULL;
	}
    }
    else if (!info->oi_guess)
    {
	msg(terse ? "call it: " : "what do you want to call it? ");
	if (get_str(prbuf, stdscr) == NORM)
	{
	    if (info->oi_guess != NULL)
		free(info->oi_guess);
	    info->oi_guess = malloc((unsigned int) strlen(prbuf) + 1);
	    strcpy(info->oi_guess, prbuf);
	}
    }
}

/*
 * rnd_thing:
 *	Pick a random thing appropriate for this level
 */
char
rnd_thing()
{
    int i;
    static char thing_list[] = {
	POTION, SCROLL, RING, STICK, FOOD, WEAPON, ARMOR, STAIRS, GOLD, AMULET
    };

    if (level >= AMULETLEVEL)
        i = rnd(sizeof thing_list / sizeof (char));
    else
        i = rnd(sizeof thing_list / sizeof (char) - 1);
    return thing_list[i];
}

/*
 str str:
 *	Choose the first or second string depending on whether it the
 *	player is tripping
 */
char *
choose_str(char *ts, char *ns)
{
	return (on(player, ISHALU) ? ts : ns);
}
```
