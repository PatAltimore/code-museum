---
title: "command.c"
program: "Rogue"
program_slug: "rogue"
file_path: "command.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/command.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "command-c"
order: 10
description: "One turn of the game: read a key, run the command it names, then let the daemons act."

summary:
  - point: "A single large switch maps each key to an action, with macros that make it read as a list of cases"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "Movement uses the vi cursor keys, with capital letters to run and control keys to run until something is adjacent"
    link: "https://en.wikipedia.org/wiki/Vi_(text_editor)"
    link_label: "Vi"
  - point: "After every turn that costs time, daemons and fuses run and rings may act"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "turn-start"
    line_start: 19
    line_end: 63
    title: "Starting a Turn"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "command is called once per turn from the main loop. A hasted hero gets two actions per call, so ntimes starts at 2. The before-daemons and fuses run first. For each action the routine ends any pending hit message, then does an odd check: if the hero has any of the flags that only monsters should have, such as slow, greedy, invisible, regenerating or targeted, someone has been poking in memory, and the program exits. Then look redraws what the hero can see, status updates the bottom line, the cursor is placed on the hero and the screen is refreshed, unless the player is running or repeating a counted command in jump mode, in which case the redraw is skipped to save time on a slow terminal."
  - id: "reading-key"
    line_start: 64
    line_end: 95
    title: "Where the Next Key Comes From"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The next command comes from one of four places. If the hero is running or fighting to the death, the run character is used again. If a repeat count is active, the counted character is. Otherwise the game waits for a key and erases any message line. If the hero is asleep or held, no_command is above zero and the command is forced to be a rest, and each turn counts it down until 'you can move again'. Running, repeating and fighting to the death are all implemented by the same trick: store the command to be repeated, and the loop will find it next time round."
  - id: "count-prefix"
    line_start: 96
    line_end: 149
    title: "Counts and the Last Command"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "A command may be preceded by a number, which repeats it. The routine reads digits into count, up to 255, and then remembers the command that followed. A switch turns the count off again for commands that make no sense repeated, so a count is allowed for resting, searching, throwing, zapping, quaffing, reading and the direction keys, and for the wizard's level-change keys, and discarded for the rest. Unless the command is itself 'repeat the last command' or escape, the previous command and direction are saved in l_last_comm and l_last_dir before the new ones are stored, so that 'a' always repeats the last real command."
  - id: "movement-keys"
    line_start: 150
    line_end: 213
    title: "The vi Keys and Running"
    wikipedia_url: "https://en.wikipedia.org/wiki/Vi_(text_editor)"
    image_url: ""
    image_caption: ""
    content: "The big switch begins with the comma, the pick-up command, which looks for an object under the hero. The eight movement keys follow, as plain do_move calls: h left, j down, k up, l right, and y, u, b and n for the diagonals, the vi cursor keys that nearly every later roguelike adopted. The capital letters start a run with do_run. A control-direction key means 'run until something interesting appears': it turns on door_stop and firstmove, converts the control character to the matching capital letter, and jumps back to the top of the switch with goto. A repeated count uses the remembered direction."
  - id: "fight-throw-again"
    line_start: 214
    line_end: 257
    title: "Fighting to the Death, Throwing and Repeating"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The 'f' command fights in a direction until one side is dead or the hero is nearly dead; 'F' sets kamikaze so that it really is to the death. It asks for a direction, checks that a visible monster stands there and that a diagonal move is legal, marks the monster as the target, sets to_death and turns the command into a run in that direction, which makes the main loop keep attacking. 't' throws an item with missile. 'a' repeats the last command by loading it into ch, setting the again flag and jumping back to the top of the switch, so a repeated command goes through exactly the same code as the original."
  - id: "simple-commands"
    line_start: 258
    line_end: 316
    title: "One Letter, One Verb"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Most commands are one line each. q quaffs, r reads, e eats, w wields, W wears, T takes armor off, P puts a ring on, R removes it, d drops, i and I show the inventory, o sets options, c calls an object, > and < use the stairs, ? and / give help and identify a symbol, s searches, z zaps, D lists discoveries, S saves, and Q quits. Each sets the after flag to false if it should not use up a turn, such as looking at the inventory. The version message includes the words 'mctesq was here', a signature. The caret asks about a trap in a direction, naming it only if the hero has found it."
  - id: "wizard-and-escape"
    line_start: 317
    line_end: 366
    title: "Becoming a Wizard, and Doing Nothing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "In a MASTER build the plus key toggles wizard mode: the hero is asked for the password, and a correct answer gives the message 'you are suddenly as smart as Ken Arnold in dungeon', followed by the dungeon number. Using it also marks the game as ineligible for the scoreboard. Escape cancels any count or run. The 'm' command moves onto an object without picking it up. The commands ), ], = and @ show the weapon, armor, rings and stats. A full stop is the rest command, which spends a turn doing nothing, and a space is a harmless 'legal' illegal command."
  - id: "wizard-commands"
    line_start: 368
    line_end: 427
    title: "The Debug Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "If the game was built with MASTER and the hero is a wizard, the default branch of the switch runs a second switch of debug commands. They show the hero's coordinates and pack size, create an object, list the objects on the level, identify an item, move up or down a level at will, draw the whole map, teleport, show the food left, add the passages to the display, toggle monster detection and recharge a stick to ten thousand charges. Control-I raises the hero nine levels and gives a two-handed sword and plate mail. In every other case the unknown key is reported as an illegal command. The game's testers had a full set of cheats built into the program."
  - id: "turn-end"
    line_start: 428
    line_end: 467
    title: "Ending a Turn"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "After the command, the routine turns off the door-stop flag if the hero is no longer running, and if the hero ran over something to take, it picks it up. If the command did not take time, ntimes goes up so the loop gives the player another go. Once all the actions are done, the after-daemons and fuses run, and then the rings take effect: a ring of searching searches every turn and a ring of teleportation gives a one-in-fifty chance of teleporting. illcom, the routine for an illegal key, prints 'illegal command' with the key, using save_msg to keep it out of the message history."
  - id: "search"
    line_start: 469
    line_end: 531
    title: "Searching for Hidden Things"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "search looks at the eight squares around the hero. For each hidden thing it rolls a die. A secret door has a one-in-five chance of being found, a hidden trap on a floor square one in two, and a hidden passage one in three; being blind adds two to the die size, and hallucinating adds three, making finding harder. On success the thing is revealed with a message such as 'a secret door', the real flag is set, and any run or count is cancelled. A ring of searching calls the same routine every turn, so it is, in effect, a free search."
  - id: "help-identify"
    line_start: 533
    line_end: 656
    title: "Help and the Identify Command"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "help prompts for a character and, for '*', prints every line of the help table in two columns on the scratch window, then waits for a space. For any other key it prints that line only. identify answers the '/' command: asked what to identify, it looks at a table of map symbols and reports 'wall of a room', 'gold', 'a staircase', 'door', 'the Amulet of Yendor' and so on, and for an uppercase letter returns the monster's name from the monsters table indexed by the letter. This is the player's legend for the screen, built from the same tables the rest of the game uses."
  - id: "stairs"
    line_start: 658
    line_end: 713
    title: "Going Down, Going Up, and Floating"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "d_level handles '>': if the hero is levitating the stairs are unreachable, if they are not on a staircase the reply is 'I see no way down', and otherwise the level number goes up and a new level is built. u_level handles '<' and is stricter. With the Amulet in the pack, the hero goes up one level, a feeling of a 'wrenching sensation in your gut' is reported, and going up from level 1 ends the game in victory by calling total_winner. Without the Amulet the way is 'magically blocked'. levit_check supplies the message when a levitating hero tries something that needs the floor."
  - id: "call"
    line_start: 715
    line_end: 790
    title: "Naming Things You Cannot Identify"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "call lets the player label an unidentified potion, scroll, ring or stick. It chooses the right table by type and finds the hero's current guess for it. If the item is already identified, it says so. If a guess exists, it shows it as the default; then it reads a new string from the player and stores a copy in the table, freeing the old one. An item that is not one of those kinds has a label of its own, stored in the object. Food cannot be named. The guess is stored by kind, so naming one 'plaid potion' as 'healing?' labels every plaid potion in the game, which is how the identification puzzle gets solved."
  - id: "current"
    line_start: 792
    line_end: 820
    title: "What Am I Holding?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "current prints what the hero is using: a weapon, armor or a ring on a given hand. If there is something, it prints the pack letter and the item's name, and where it is worn. If there is not, it says the hero is wielding or wearing nothing. It sets inv_describe off while building the text so that the name is not followed by a note such as '(weapon in hand)'. Terse mode shortens the phrases. A ring is shown with '(L)' or '(R)' in terse mode and 'on left hand' otherwise."
---

```c
/*
 * Read and execute the user commands
 *
 * @(#)command.c	4.73 (Berkeley) 08/06/83
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <stdlib.h>
#include <string.h>
#include <curses.h>
#include <ctype.h>
#include "rogue.h"

/*
 * command:
 *	Process the user commands
 */
void
command()
{
    register char ch;
    register int ntimes = 1;			/* Number of player moves */
    char *fp;
    THING *mp;
    static char countch, direction, newcount = FALSE;

    if (on(player, ISHASTE))
	ntimes++;
    /*
     * Let the daemons start up
     */
    do_daemons(BEFORE);
    do_fuses(BEFORE);
    while (ntimes--)
    {
	again = FALSE;
	if (has_hit)
	{
	    endmsg();
	    has_hit = FALSE;
	}
	/*
	 * these are illegal things for the player to be, so if any are
	 * set, someone's been poking in memeory
	 */
	if (on(player, ISSLOW|ISGREED|ISINVIS|ISREGEN|ISTARGET))
	    exit(1);

	look(TRUE);
	if (!running)
	    door_stop = FALSE;
	status();
	lastscore = purse;
	move(hero.y, hero.x);
	if (!((running || count) && jump))
	    refresh();			/* Draw screen */
	take = 0;
	after = TRUE;
	/*
	 * Read command or continue run
	 */
#ifdef MASTER
	if (wizard)
	    noscore = TRUE;
#endif
	if (!no_command)
	{
	    if (running || to_death)
		ch = runch;
	    else if (count)
		ch = countch;
	    else
	    {
		ch = readchar();
		move_on = FALSE;
		if (mpos != 0)		/* Erase message if its there */
		    msg("");
	    }
	}
	else
	    ch = '.';
	if (no_command)
	{
	    if (--no_command == 0)
	    {
		player.t_flags |= ISRUN;
		msg("you can move again");
	    }
	}
	else
	{
	    /*
	     * check for prefixes
	     */
	    newcount = FALSE;
	    if (isdigit(ch))
	    {
		count = 0;
		newcount = TRUE;
		while (isdigit(ch))
		{
		    count = count * 10 + (ch - '0');
		    if (count > 255)
			count = 255;
		    ch = readchar();
		}
		countch = ch;
		/*
		 * turn off count for commands which don't make sense
		 * to repeat
		 */
		switch (ch)
		{
		    case CTRL('B'): case CTRL('H'): case CTRL('J'):
		    case CTRL('K'): case CTRL('L'): case CTRL('N'):
		    case CTRL('U'): case CTRL('Y'):
		    case '.': case 'a': case 'b': case 'h': case 'j':
		    case 'k': case 'l': case 'm': case 'n': case 'q':
		    case 'r': case 's': case 't': case 'u': case 'y':
		    case 'z': case 'B': case 'C': case 'H': case 'I':
		    case 'J': case 'K': case 'L': case 'N': case 'U':
		    case 'Y':
#ifdef MASTER
		    case CTRL('D'): case CTRL('A'):
#endif
			break;
		    default:
			count = 0;
		}
	    }
	    /*
	     * execute a command
	     */
	    if (count && !running)
		count--;
	    if (ch != 'a' && ch != ESCAPE && !(running || count || to_death))
	    {
		l_last_comm = last_comm;
		l_last_dir = last_dir;
		l_last_pick = last_pick;
		last_comm = ch;
		last_dir = '\0';
		last_pick = NULL;
	    }
over:
	    switch (ch)
	    {
		case ',': {
		    THING *obj = NULL;
		    int found = 0;
		    for (obj = lvl_obj; obj != NULL; obj = next(obj))
    			{
			    if (obj->o_pos.y == hero.y && obj->o_pos.x == hero.x)
			    {
				found=1;
				break;
			    }
    			}

		    if (found) {
			if (levit_check())
			    ;
			else
			    pick_up((char)obj->o_type);
		    }
		    else {
			if (!terse)
			    addmsg("there is ");
			addmsg("nothing here");
                        if (!terse)
                            addmsg(" to pick up");
                        endmsg();
		    }
		}
		when '!': shell();
		when 'h': do_move(0, -1);
		when 'j': do_move(1, 0);
		when 'k': do_move(-1, 0);
		when 'l': do_move(0, 1);
		when 'y': do_move(-1, -1);
		when 'u': do_move(-1, 1);
		when 'b': do_move(1, -1);
		when 'n': do_move(1, 1);
		when 'H': do_run('h');
		when 'J': do_run('j');
		when 'K': do_run('k');
		when 'L': do_run('l');
		when 'Y': do_run('y');
		when 'U': do_run('u');
		when 'B': do_run('b');
		when 'N': do_run('n');
		when CTRL('H'): case CTRL('J'): case CTRL('K'): case CTRL('L'):
		case CTRL('Y'): case CTRL('U'): case CTRL('B'): case CTRL('N'):
		{
		    if (!on(player, ISBLIND))
		    {
			door_stop = TRUE;
			firstmove = TRUE;
		    }
		    if (count && !newcount)
			ch = direction;
		    else
		    {
			ch += ('A' - CTRL('A'));
			direction = ch;
		    }
		    goto over;
		}
		when 'F':
		    kamikaze = TRUE;
		    /* FALLTHROUGH */
		case 'f':
		    if (!get_dir())
		    {
			after = FALSE;
			break;
		    }
		    delta.y += hero.y;
		    delta.x += hero.x;
		    if ( ((mp = moat(delta.y, delta.x)) == NULL)
			|| ((!see_monst(mp)) && !on(player, SEEMONST)))
		    {
			if (!terse)
			    addmsg("I see ");
			msg("no monster there");
			after = FALSE;
		    }
		    else if (diag_ok(&hero, &delta))
		    {
			to_death = TRUE;
			max_hit = 0;
			mp->t_flags |= ISTARGET;
			runch = ch = dir_ch;
			goto over;
		    }
		when 't':
		    if (!get_dir())
			after = FALSE;
		    else
			missile(delta.y, delta.x);
		when 'a':
		    if (last_comm == '\0')
		    {
			msg("you haven't typed a command yet");
			after = FALSE;
		    }
		    else
		    {
			ch = last_comm;
			again = TRUE;
			goto over;
		    }
		when 'q': quaff();
		when 'Q':
		    after = FALSE;
		    q_comm = TRUE;
		    quit(0);
		    q_comm = FALSE;
		when 'i': after = FALSE; inventory(pack, 0);
		when 'I': after = FALSE; picky_inven();
		when 'd': drop();
		when 'r': read_scroll();
		when 'e': eat();
		when 'w': wield();
		when 'W': wear();
		when 'T': take_off();
		when 'P': ring_on();
		when 'R': ring_off();
		when 'o': option(); after = FALSE;
		when 'c': call(); after = FALSE;
		when '>': after = FALSE; d_level();
		when '<': after = FALSE; u_level();
		when '?': after = FALSE; help();
		when '/': after = FALSE; identify();
		when 's': search();
		when 'z':
		    if (get_dir())
			do_zap();
		    else
			after = FALSE;
		when 'D': after = FALSE; discovered();
		when CTRL('P'): after = FALSE; msg(huh);
		when CTRL('R'):
		    after = FALSE;
		    clearok(curscr,TRUE);
		    wrefresh(curscr);
		when 'v':
		    after = FALSE;
		    msg("version %s. (mctesq was here)", release);
		when 'S': 
		    after = FALSE;
		    save_game();
		when '.': ;			/* Rest command */
		when ' ': after = FALSE;	/* "Legal" illegal command */
		when '^':
		    after = FALSE;
		    if (get_dir()) {
			delta.y += hero.y;
			delta.x += hero.x;
			fp = &flat(delta.y, delta.x);
                        if (!terse)
                            addmsg("You have found ");
			if (chat(delta.y, delta.x) != TRAP)
			    msg("no trap there");
			else if (on(player, ISHALU))
			    msg(tr_name[rnd(NTRAPS)]);
			else {
			    msg(tr_name[*fp & F_TMASK]);
			    *fp |= F_SEEN;
			}
		    }
#ifdef MASTER
		when '+':
		    after = FALSE;
		    if (wizard)
		    {
			wizard = FALSE;
			turn_see(TRUE);
			msg("not wizard any more");
		    }
		    else
		    {
			wizard = passwd();
			if (wizard) 
			{
			    noscore = TRUE;
			    turn_see(FALSE);
			    msg("you are suddenly as smart as Ken Arnold in dungeon #%d", dnum);
			}
			else
			    msg("sorry");
		    }
#endif
		when ESCAPE:	/* Escape */
		    door_stop = FALSE;
		    count = 0;
		    after = FALSE;
		    again = FALSE;
		when 'm':
		    move_on = TRUE;
		    if (!get_dir())
			after = FALSE;
		    else
		    {
			ch = dir_ch;
			countch = dir_ch;
			goto over;
		    }
		when ')': current(cur_weapon, "wielding", NULL);
		when ']': current(cur_armor, "wearing", NULL);
		when '=':
		    current(cur_ring[LEFT], "wearing",
					    terse ? "(L)" : "on left hand");
		    current(cur_ring[RIGHT], "wearing",
					    terse ? "(R)" : "on right hand");
		when '@':
		    stat_msg = TRUE;
		    status();
		    stat_msg = FALSE;
		    after = FALSE;
		otherwise:
		    after = FALSE;
#ifdef MASTER
		    if (wizard) switch (ch)
		    {
			case '|': msg("@ %d,%d", hero.y, hero.x);
			when 'C': create_obj();
			when '$': msg("inpack = %d", inpack);
			when CTRL('G'): inventory(lvl_obj, 0);
			when CTRL('W'): whatis(FALSE, 0);
			when CTRL('D'): level++; new_level();
			when CTRL('A'): level--; new_level();
			when CTRL('F'): show_map();
			when CTRL('T'): teleport();
			when CTRL('E'): msg("food left: %d", food_left);
			when CTRL('C'): add_pass();
			when CTRL('X'): turn_see(on(player, SEEMONST));
			when CTRL('~'):
			{
			    THING *item;

			    if ((item = get_item("charge", STICK)) != NULL)
				item->o_charges = 10000;
			}
			when CTRL('I'):
			{
			    int i;
			    THING *obj;

			    for (i = 0; i < 9; i++)
				raise_level();
			    /*
			     * Give him a sword (+1,+1)
			     */
			    obj = new_item();
			    init_weapon(obj, TWOSWORD);
			    obj->o_hplus = 1;
			    obj->o_dplus = 1;
			    add_pack(obj, TRUE);
			    cur_weapon = obj;
			    /*
			     * And his suit of armor
			     */
			    obj = new_item();
			    obj->o_type = ARMOR;
			    obj->o_which = PLATE_MAIL;
			    obj->o_arm = -5;
			    obj->o_flags |= ISKNOW;
			    obj->o_count = 1;
			    obj->o_group = 0;
			    cur_armor = obj;
			    add_pack(obj, TRUE);
			}
			when '*' :
			    pr_list();
			otherwise:
			    illcom(ch);
		    }
		    else
#endif
			illcom(ch);
	    }
	    /*
	     * turn off flags if no longer needed
	     */
	    if (!running)
		door_stop = FALSE;
	}
	/*
	 * If he ran into something to take, let him pick it up.
	 */
	if (take != 0)
	    pick_up(take);
	if (!running)
	    door_stop = FALSE;
	if (!after)
	    ntimes++;
    }
    do_daemons(AFTER);
    do_fuses(AFTER);
    if (ISRING(LEFT, R_SEARCH))
	search();
    else if (ISRING(LEFT, R_TELEPORT) && rnd(50) == 0)
	teleport();
    if (ISRING(RIGHT, R_SEARCH))
	search();
    else if (ISRING(RIGHT, R_TELEPORT) && rnd(50) == 0)
	teleport();
}

/*
 * illcom:
 *	What to do with an illegal command
 */
void
illcom(int ch)
{
    save_msg = FALSE;
    count = 0;
    msg("illegal command '%s'", unctrl(ch));
    save_msg = TRUE;
}

/*
 * search:
 *	player gropes about him to find hidden things.
 */
void
search()
{
    register int y, x;
    register char *fp;
    register int ey, ex;
    int probinc;
    bool found;

    ey = hero.y + 1;
    ex = hero.x + 1;
    probinc = (on(player, ISHALU) ? 3 : 0);
    probinc += (on(player, ISBLIND) ? 2 : 0);
    found = FALSE;
    for (y = hero.y - 1; y <= ey; y++) 
	for (x = hero.x - 1; x <= ex; x++)
	{
	    if (y == hero.y && x == hero.x)
		continue;
	    fp = &flat(y, x);
	    if (!(*fp & F_REAL))
		switch (chat(y, x))
		{
		    case '|':
		    case '-':
			if (rnd(5 + probinc) != 0)
			    break;
			chat(y, x) = DOOR;
                        msg("a secret door");
foundone:
			found = TRUE;
			*fp |= F_REAL;
			count = FALSE;
			running = FALSE;
			break;
		    case FLOOR:
			if (rnd(2 + probinc) != 0)
			    break;
			chat(y, x) = TRAP;
			if (!terse)
			    addmsg("you found ");
			if (on(player, ISHALU))
			    msg(tr_name[rnd(NTRAPS)]);
			else {
			    msg(tr_name[*fp & F_TMASK]);
			    *fp |= F_SEEN;
			}
			goto foundone;
			break;
		    case ' ':
			if (rnd(3 + probinc) != 0)
			    break;
			chat(y, x) = PASSAGE;
			goto foundone;
		}
	}
    if (found)
	look(FALSE);
}

/*
 * help:
 *	Give single character help, or the whole mess if he wants it
 */
void
help()
{
    register struct h_list *strp;
    register char helpch;
    register int numprint, cnt;
    msg("character you want help for (* for all): ");
    helpch = readchar();
    mpos = 0;
    /*
     * If its not a *, print the right help string
     * or an error if he typed a funny character.
     */
    if (helpch != '*')
    {
	move(0, 0);
	for (strp = helpstr; strp->h_desc != NULL; strp++)
	    if (strp->h_ch == helpch)
	    {
		lower_msg = TRUE;
		msg("%s%s", unctrl(strp->h_ch), strp->h_desc);
		lower_msg = FALSE;
		return;
	    }
	msg("unknown character '%s'", unctrl(helpch));
	return;
    }
    /*
     * Here we print help for everything.
     * Then wait before we return to command mode
     */
    numprint = 0;
    for (strp = helpstr; strp->h_desc != NULL; strp++)
	if (strp->h_print)
	    numprint++;
    if (numprint & 01)		/* round odd numbers up */
	numprint++;
    numprint /= 2;
    if (numprint > LINES - 1)
	numprint = LINES - 1;

    wclear(hw);
    cnt = 0;
    for (strp = helpstr; strp->h_desc != NULL; strp++)
	if (strp->h_print)
	{
	    wmove(hw, cnt % numprint, cnt >= numprint ? COLS / 2 : 0);
	    if (strp->h_ch)
		waddstr(hw, unctrl(strp->h_ch));
	    waddstr(hw, strp->h_desc);
	    if (++cnt >= numprint * 2)
		break;
	}
    wmove(hw, LINES - 1, 0);
    waddstr(hw, "--Press space to continue--");
    wrefresh(hw);
    wait_for(' ');
    clearok(stdscr, TRUE);
/*
    refresh();
*/
    msg("");
    touchwin(stdscr);
    wrefresh(stdscr);
}

/*
 * identify:
 *	Tell the player what a certain thing is.
 */
void
identify()
{
    register int ch;
    register struct h_list *hp;
    register char *str;
    static struct h_list ident_list[] = {
	{'|',		"wall of a room",		FALSE},
	{'-',		"wall of a room",		FALSE},
	{GOLD,		"gold",				FALSE},
	{STAIRS,	"a staircase",			FALSE},
	{DOOR,		"door",				FALSE},
	{FLOOR,		"room floor",			FALSE},
	{PLAYER,	"you",				FALSE},
	{PASSAGE,	"passage",			FALSE},
	{TRAP,		"trap",				FALSE},
	{POTION,	"potion",			FALSE},
	{SCROLL,	"scroll",			FALSE},
	{FOOD,		"food",				FALSE},
	{WEAPON,	"weapon",			FALSE},
	{' ',		"solid rock",			FALSE},
	{ARMOR,		"armor",			FALSE},
	{AMULET,	"the Amulet of Yendor",		FALSE},
	{RING,		"ring",				FALSE},
	{STICK,		"wand or staff",		FALSE},
	{'\0'}
    };

    msg("what do you want identified? ");
    ch = readchar();
    mpos = 0;
    if (ch == ESCAPE)
    {
	msg("");
	return;
    }
    if (isupper(ch))
	str = monsters[ch-'A'].m_name;
    else
    {
	str = "unknown character";
	for (hp = ident_list; hp->h_ch != '\0'; hp++)
	    if (hp->h_ch == ch)
	    {
		str = hp->h_desc;
		break;
	    }
    }
    msg("'%s': %s", unctrl(ch), str);
}

/*
 * d_level:
 *	He wants to go down a level
 */
void
d_level()
{
    if (levit_check())
	return;
    if (chat(hero.y, hero.x) != STAIRS)
	msg("I see no way down");
    else
    {
	level++;
	seenstairs = FALSE;
	new_level();
    }
}

/*
 * u_level:
 *	He wants to go up a level
 */
void
u_level()
{
    if (levit_check())
	return;
    if (chat(hero.y, hero.x) == STAIRS)
	if (amulet)
	{
	    level--;
	    if (level == 0)
		total_winner();
	    new_level();
	    msg("you feel a wrenching sensation in your gut");
	}
	else
	    msg("your way is magically blocked");
    else
	msg("I see no way up");
}

/*
 * levit_check:
 *	Check to see if she's levitating, and if she is, print an
 *	appropriate message.
 */
bool
levit_check()
{
    if (!on(player, ISLEVIT))
	return FALSE;
    msg("You can't.  You're floating off the ground!");
    return TRUE;
}

/*
 * call:
 *	Allow a user to call a potion, scroll, or ring something
 */
void
call()
{
    register THING *obj;
    register struct obj_info *op = NULL;
    register char **guess, *elsewise = NULL;
    register bool *know;

    obj = get_item("call", CALLABLE);
    /*
     * Make certain that it is somethings that we want to wear
     */
    if (obj == NULL)
	return;
    switch (obj->o_type)
    {
	case RING:
	    op = &ring_info[obj->o_which];
	    elsewise = r_stones[obj->o_which];
	    goto norm;
	when POTION:
	    op = &pot_info[obj->o_which];
	    elsewise = p_colors[obj->o_which];
	    goto norm;
	when SCROLL:
	    op = &scr_info[obj->o_which];
	    elsewise = s_names[obj->o_which];
	    goto norm;
	when STICK:
	    op = &ws_info[obj->o_which];
	    elsewise = ws_made[obj->o_which];
norm:
	    know = &op->oi_know;
	    guess = &op->oi_guess;
	    if (*guess != NULL)
		elsewise = *guess;
	when FOOD:
	    msg("you can't call that anything");
	    return;
	otherwise:
	    guess = &obj->o_label;
	    know = NULL;
	    elsewise = obj->o_label;
    }
    if (know != NULL && *know)
    {
	msg("that has already been identified");
	return;
    }
    if (elsewise != NULL && elsewise == *guess)
    {
	if (!terse)
	    addmsg("Was ");
	msg("called \"%s\"", elsewise);
    }
    if (terse)
	msg("call it: ");
    else
	msg("what do you want to call it? ");

    if (elsewise == NULL)
	strcpy(prbuf, "");
    else
	strcpy(prbuf, elsewise);
    if (get_str(prbuf, stdscr) == NORM)
    {
	if (*guess != NULL)
	    free(*guess);
	*guess = malloc((unsigned int) strlen(prbuf) + 1);
	strcpy(*guess, prbuf);
    }
}

/*
 * current:
 *	Print the current weapon/armor
 */
void
current(THING *cur, char *how, char *where)
{
    after = FALSE;
    if (cur != NULL)
    {
	if (!terse)
	    addmsg("you are %s (", how);
	inv_describe = FALSE;
	addmsg("%c) %s", cur->o_packch, inv_name(cur, TRUE));
	inv_describe = TRUE;
	if (where)
	    addmsg(" %s", where);
	endmsg();
    }
    else
    {
	if (!terse)
	    addmsg("you are ");
	addmsg("%s nothing", how);
	if (where)
	    addmsg(" %s", where);
	endmsg();
    }
}
```
