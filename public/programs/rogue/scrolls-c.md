---
title: "scrolls.c"
program: "Rogue"
program_slug: "rogue"
file_path: "scrolls.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/scrolls.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "scrolls-c"
order: 18
description: "Reading a scroll: one function with a case for each of the eighteen scrolls."

summary:
  - point: "A scroll is read once and used up, and most are learned only when their effect is seen"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "Create monster picks a random free square by sampling one at a time rather than building a list"
    link: "https://en.wikipedia.org/wiki/Reservoir_sampling"
    link_label: "Reservoir sampling"
  - point: "Magic mapping reveals secret doors, hidden passages and hidden traps"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "read-scroll-start"
    line_start: 17
    line_end: 58
    title: "Choosing and Consuming"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "read_scroll asks for a scroll with get_item, and answers 'there is nothing on it to read' to anything else. If the chosen item is the wielded weapon, the hero stops wielding it. The scroll is removed from the pack before its effect, and the routine records whether this was the last of a stack, so the object can be discarded at the end. Everything after this point is one switch on the scroll's kind. A scroll is a single use whose cost is paid even when it does nothing, as a scroll of enchant armour read without armour shows."
  - id: "confuse-armor"
    line_start: 60
    line_end: 72
    title: "Glowing Hands and Armour"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Monster confusion gives the hero the CANHUH flag and the message 'your hands begin to glow red'. The next monster the hero hits is confused, as fight.c shows. Enchant armour lowers the worn armour's armour class by one, which is an improvement, and removes a curse. With no armour it does nothing. The colour in the message comes from pick_color, which returns a random colour from the rainbow list if the hero is hallucinating."
  - id: "hold-monster"
    line_start: 73
    line_end: 102
    title: "Freezing Monsters Nearby"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Hold monster looks at the square of 5 by 5 centred on the hero, clipped to the screen. Each monster in it that is awake and running is made to stop and is set held, which keeps it from chasing the hero. The hold ends only when runto is next called on the monster, as it is when the hero attacks it. A count is kept, and the message is 'the monster freezes' or 'the monsters around you freeze'. The scroll is identified only if at least one monster was caught. Otherwise the hero feels 'a strange sense of loss'."
  - id: "sleep"
    line_start: 103
    line_end: 110
    title: "A Scroll You Wish You Hadn't Read"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The sleep scroll is always identified at once. It adds a few turns to no_command, the count of turns the hero cannot act: four to eight in all. The monsters carry on while the hero sleeps, and the only way to learn what the scroll does is to read it."
  - id: "create-monster"
    line_start: 111
    line_end: 145
    title: "Sampling a Square"
    wikipedia_url: "https://en.wikipedia.org/wiki/Reservoir_sampling"
    image_url: ""
    image_caption: ""
    content: "Create monster looks at the eight squares around the hero. It skips the hero's own square and any square a creature could not step onto, and also any square holding a scroll of scare monster. For the rest it uses a neat trick: counter i is increased for each candidate, and the candidate replaces the saved choice if rnd(i) is zero. That gives each candidate the same chance of being picked without storing a list. A monster appropriate for the level is then made at the chosen square. If nothing was free, 'you hear a faint cry of anguish in the distance'."
  - id: "identify"
    line_start: 146
    line_end: 160
    title: "Five Scrolls in One Case"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The five identify scrolls share a case. A small table maps the scroll's kind to the type of object it identifies: potion, scroll, weapon, armour, and ring or stick. The scroll marks itself as known, tells the player which kind it is, and calls whatis with that type to let the hero choose an item to identify. Using one table to drive five scrolls avoids five near-identical branches."
  - id: "magic-mapping"
    line_start: 161
    line_end: 229
    title: "Showing the Whole Level"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cartography"
    image_url: ""
    image_caption: ""
    content: "Magic mapping draws the level on the screen. For each cell it looks at the character and the flags that say whether the cell is real. A wall that is not marked real is a secret door, and becomes a door. A blank cell that is not marked real is a hidden passage, and becomes one. A floor cell that is not marked real is drawn as a trap. Ordinary floor is not shown, since a room's interior is not part of a map. Doors and stairs are drawn as they are, and passages are marked as seen. If the cell holds a monster, the character that will show when the monster leaves is updated, and the screen is left alone if the hero can sense monsters, so the monster letter stays."
  - id: "food-detect"
    line_start: 230
    line_end: 249
    title: "Smelling Food"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This scroll, labelled in a comment as a potion of gold detection, which it is not, scans the level's objects for food and draws each on the second window. If any is found, the scroll is identified and the window is shown with 'Your nose tingles and you smell food'. If not, the message is only 'your nose tingles'. Like the potions of detection, it teaches the player what it is only by finding something."
  - id: "teleport-enchant"
    line_start: 250
    line_end: 273
    title: "Teleporting and Enchanting a Weapon"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Teleportation calls teleport to move the hero to a random spot, and the scroll becomes known only if the hero ends in a different room, since a short jump could be missed. Enchant weapon needs a wielded weapon; with none it is 'a strange sense of loss'. The weapon loses its curse, and gains one point to hit or one to damage, chosen with a coin flip. The message names the weapon and says it glows blue."
  - id: "scare-remove"
    line_start: 274
    line_end: 286
    title: "Scare Monster and Remove Curse"
    wikipedia_url: "https://en.wikipedia.org/wiki/Curse"
    image_url: ""
    image_caption: ""
    content: "Scare monster, read, only produces maniacal laughter: the scroll's value lies in leaving it on the floor, where monsters will not step on it, as the code that picks it up shows. Remove curse calls uncurse on the worn armour, the wielded weapon and both rings. Uncurse simply clears a flag if the item exists. A hallucinating hero gets a different message from a sober one."
  - id: "aggravate-protect"
    line_start: 287
    line_end: 302
    title: "Aggravate and Protect Armour"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Aggravate monsters calls aggravate, which wakes every monster on the level and sets it running at the hero, and the message is 'a high pitched humming noise'. Protect armour sets the ISPROT flag on the worn armour, and is covered by a shimmering gold shield. The flag stops an aquator's rust: rust_armor checks it. If no armour is worn, it does nothing."
  - id: "epilogue"
    line_start: 303
    line_end: 329
    title: "Cleaning Up"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "After the switch the original object is restored, since the switch reused the variable for other things. look redraws the map around the hero so that any change shows, status redraws the status line, and call_it handles naming, as for potions. The scroll is discarded if it was the last. uncurse, at the end of the file, is a three-line helper. In wizard builds an unknown scroll gives 'what a puzzling scroll!'."
---

```c
/*
 * Read a scroll and let it happen
 *
 * @(#)scrolls.c	4.44 (Berkeley) 02/05/99
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
 * read_scroll:
 *	Read a scroll from the pack and do the appropriate thing
 */

void
read_scroll()
{
    THING *obj;
    PLACE *pp;
    int y, x;
    char ch;
    int i;
    bool discardit = FALSE;
    struct room *cur_room;
    THING *orig_obj;
    static coord mp;

    obj = get_item("read", SCROLL);
    if (obj == NULL)
	return;
    if (obj->o_type != SCROLL)
    {
	if (!terse)
	    msg("there is nothing on it to read");
	else
	    msg("nothing to read");
	return;
    }
    /*
     * Calculate the effect it has on the poor guy.
     */
    if (obj == cur_weapon)
	cur_weapon = NULL;
    /*
     * Get rid of the thing
     */
    discardit = (bool)(obj->o_count == 1);
    leave_pack(obj, FALSE, FALSE);
    orig_obj = obj;

    switch (obj->o_which)
    {
	case S_CONFUSE:
	    /*
	     * Scroll of monster confusion.  Give him that power.
	     */
	    player.t_flags |= CANHUH;
	    msg("your hands begin to glow %s", pick_color("red"));
	when S_ARMOR:
	    if (cur_armor != NULL)
	    {
		cur_armor->o_arm--;
		cur_armor->o_flags &= ~ISCURSED;
		msg("your armor glows %s for a moment", pick_color("silver"));
	    }
	when S_HOLD:
	    /*
	     * Hold monster scroll.  Stop all monsters within two spaces
	     * from chasing after the hero.
	     */

	    ch = 0;
	    for (x = hero.x - 2; x <= hero.x + 2; x++)
		if (x >= 0 && x < NUMCOLS)
		    for (y = hero.y - 2; y <= hero.y + 2; y++)
			if (y >= 0 && y <= NUMLINES - 1)
			    if ((obj = moat(y, x)) != NULL && on(*obj, ISRUN))
			    {
				obj->t_flags &= ~ISRUN;
				obj->t_flags |= ISHELD;
				ch++;
			    }
	    if (ch)
	    {
		addmsg("the monster");
		if (ch > 1)
		    addmsg("s around you");
		addmsg(" freeze");
		if (ch == 1)
		    addmsg("s");
		endmsg();
		scr_info[S_HOLD].oi_know = TRUE;
	    }
	    else
		msg("you feel a strange sense of loss");
	when S_SLEEP:
	    /*
	     * Scroll which makes you fall asleep
	     */
	    scr_info[S_SLEEP].oi_know = TRUE;
	    no_command += rnd(SLEEPTIME) + 4;
	    player.t_flags &= ~ISRUN;
	    msg("you fall asleep");
	when S_CREATE:
	    /*
	     * Create a monster:
	     * First look in a circle around him, next try his room
	     * otherwise give up
	     */
	    i = 0;
	    for (y = hero.y - 1; y <= hero.y + 1; y++)
		for (x = hero.x - 1; x <= hero.x + 1; x++)
		    /*
		     * Don't put a monster in top of the player.
		     */
		    if (y == hero.y && x == hero.x)
			continue;
		    /*
		     * Or anything else nasty
		     */
		    else if (step_ok(ch = winat(y, x)))
		    {
			if (ch == SCROLL
			    && find_obj(y, x)->o_which == S_SCARE)
				continue;
			else if (rnd(++i) == 0)
			{
			    mp.y = y;
			    mp.x = x;
			}
		    }
	    if (i == 0)
		msg("you hear a faint cry of anguish in the distance");
	    else
	    {
		obj = new_item();
		new_monster(obj, randmonster(FALSE), &mp);
	    }
	when S_ID_POTION:
	case S_ID_SCROLL:
	case S_ID_WEAPON:
	case S_ID_ARMOR:
	case S_ID_R_OR_S:
	{
	    static char id_type[S_ID_R_OR_S + 1] =
		{ 0, 0, 0, 0, 0, POTION, SCROLL, WEAPON, ARMOR, R_OR_S };
	    /*
	     * Identify, let him figure something out
	     */
	    scr_info[obj->o_which].oi_know = TRUE;
	    msg("this scroll is an %s scroll", scr_info[obj->o_which].oi_name);
	    whatis(TRUE, id_type[obj->o_which]);
	}
	when S_MAP:
	    /*
	     * Scroll of magic mapping.
	     */
	    scr_info[S_MAP].oi_know = TRUE;
	    msg("oh, now this scroll has a map on it");
	    /*
	     * take all the things we want to keep hidden out of the window
	     */
	    for (y = 1; y < NUMLINES - 1; y++)
		for (x = 0; x < NUMCOLS; x++)
		{
		    pp = INDEX(y, x);
		    switch (ch = pp->p_ch)
		    {
			case DOOR:
			case STAIRS:
			    break;

			case '-':
			case '|':
			    if (!(pp->p_flags & F_REAL))
			    {
				ch = pp->p_ch = DOOR;
				pp->p_flags |= F_REAL;
			    }
			    break;

			case ' ':
			    if (pp->p_flags & F_REAL)
				goto def;
			    pp->p_flags |= F_REAL;
			    ch = pp->p_ch = PASSAGE;
			    /* FALLTHROUGH */

			case PASSAGE:
pass:
			    if (!(pp->p_flags & F_REAL))
				pp->p_ch = PASSAGE;
			    pp->p_flags |= (F_SEEN|F_REAL);
			    ch = PASSAGE;
			    break;

			case FLOOR:
			    if (pp->p_flags & F_REAL)
				ch = ' ';
			    else
			    {
				ch = TRAP;
				pp->p_ch = TRAP;
				pp->p_flags |= (F_SEEN|F_REAL);
			    }
			    break;

			default:
def:
			    if (pp->p_flags & F_PASS)
				goto pass;
			    ch = ' ';
			    break;
		    }
		    if (ch != ' ')
		    {
			if ((obj = pp->p_monst) != NULL)
			    obj->t_oldch = ch;
			if (obj == NULL || !on(player, SEEMONST))
			    mvaddch(y, x, ch);
		    }
		}
	when S_FDET:
	    /*
	     * Potion of gold detection
	     */
	    ch = FALSE;
	    wclear(hw);
	    for (obj = lvl_obj; obj != NULL; obj = next(obj))
		if (obj->o_type == FOOD)
		{
		    ch = TRUE;
		    wmove(hw, obj->o_pos.y, obj->o_pos.x);
		    waddch(hw, FOOD);
		}
	    if (ch)
	    {
		scr_info[S_FDET].oi_know = TRUE;
		show_win("Your nose tingles and you smell food.--More--");
	    }
	    else
		msg("your nose tingles");
	when S_TELEP:
	    /*
	     * Scroll of teleportation:
	     * Make him dissapear and reappear
	     */
	    {
		cur_room = proom;
		teleport();
		if (cur_room != proom)
		    scr_info[S_TELEP].oi_know = TRUE;
	    }
	when S_ENCH:
	    if (cur_weapon == NULL || cur_weapon->o_type != WEAPON)
		msg("you feel a strange sense of loss");
	    else
	    {
		cur_weapon->o_flags &= ~ISCURSED;
		if (rnd(2) == 0)
		    cur_weapon->o_hplus++;
		else
		    cur_weapon->o_dplus++;
		msg("your %s glows %s for a moment",
		    weap_info[cur_weapon->o_which].oi_name, pick_color("blue"));
	    }
	when S_SCARE:
	    /*
	     * Reading it is a mistake and produces laughter at her
	     * poor boo boo.
	     */
	    msg("you hear maniacal laughter in the distance");
	when S_REMOVE:
	    uncurse(cur_armor);
	    uncurse(cur_weapon);
	    uncurse(cur_ring[LEFT]);
	    uncurse(cur_ring[RIGHT]);
	    msg(choose_str("you feel in touch with the Universal Onenes",
			   "you feel as if somebody is watching over you"));
	when S_AGGR:
	    /*
	     * This scroll aggravates all the monsters on the current
	     * level and sets them running towards the hero
	     */
	    aggravate();
	    msg("you hear a high pitched humming noise");
	when S_PROTECT:
	    if (cur_armor != NULL)
	    {
		cur_armor->o_flags |= ISPROT;
		msg("your armor is covered by a shimmering %s shield",
		    pick_color("gold"));
	    }
	    else
		msg("you feel a strange sense of loss");
#ifdef MASTER
	otherwise:
	    msg("what a puzzling scroll!");
	    return;
#endif
    }
    obj = orig_obj;
    look(TRUE);	/* put the result of the scroll on the screen */
    status();

    call_it(&scr_info[obj->o_which]);

    if (discardit)
	discard(obj);
}

/*
 * uncurse:
 *	Uncurse an item
 */

void
uncurse(THING *obj)
{
    if (obj != NULL)
	obj->o_flags &= ~ISCURSED;
}
```
