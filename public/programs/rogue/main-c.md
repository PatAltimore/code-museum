---
title: "main.c"
program: "Rogue"
program_slug: "rogue"
file_path: "main.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/main.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "main-c"
order: 1
description: "The program's entry point: set up the user and the random seed, build the first level and start the daemons."

summary:
  - point: "A game starts with a seed from the clock and process number, so every dungeon is different"
    link: "https://en.wikipedia.org/wiki/Linear_congruential_generator"
    link_label: "Linear congruential generator"
  - point: "The scoreboard is opened before special privileges are dropped"
    link: "https://en.wikipedia.org/wiki/Setuid"
    link_label: "Setuid"
  - point: "Three daemons and a fuse run the world's clocks, then one loop reads commands until the player stops"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "wizard-and-seed"
    line_start: 28
    line_end: 66
    title: "A Password for the Wizard and a Seed for the Dungeon"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linear_congruential_generator"
    image_url: ""
    image_caption: ""
    content: "main begins by calling the machine-dependent initializer. If the program was built with MASTER and run with an empty first argument, it asks for a wizard's password, hashes the answer with crypt and compares it with the stored hash; on a match, the player becomes a wizard who can see monsters and use debugging commands. The home directory gives the name of the save file. The environment variable ROGUEOPTS supplies options, and the user's login name becomes the player's name unless the options give one. The seed for the dungeon is the time of day plus the process number, so no two games match, and a wizard may fix it with an environment variable called SEED to reproduce a particular dungeon exactly."
  - id: "scoreboard-and-flags"
    line_start: 67
    line_end: 101
    title: "Opening the Scoreboard, Then Dropping Privileges"
    wikipedia_url: "https://en.wikipedia.org/wiki/Setuid"
    image_url: ""
    image_caption: ""
    content: "The scoreboard has to be writable by every player and by nobody else, so on a shared Unix machine the game ran with special group privileges. main opens the score file first and only then calls md_normaluser to give those privileges up, and a comment says exactly that. The call is repeated a few lines later, probably a leftover from editing. Two command-line options exist before the game starts: -s prints the scoreboard and exits, and -d draws a random tombstone, to be used when testing the death screen. It throws away some random numbers first, 'to break patterns', and invents a gold total and a level."
  - id: "startup"
    line_start: 103
    line_end: 153
    title: "Digging the Dungeon"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "With the options handled, init_check makes sure the game may be played, and a single argument names a saved game to restore. Otherwise the greeting tells the player to wait while the dungeon is dug, and curses starts. A run of init routines sets up the object probabilities, the player, the random scroll names, the potion colours, the ring stones and the wand materials, each different in every game. The screen must be 24 lines by 80 columns or the game exits with an apology. A scratch window hw is made for help and inventory pages, new_level draws the first level, three daemons and one fuse are started, and playit begins the loop. The runners and doctor daemons, the stomach and the wandering-monster fuse are the world's clocks."
  - id: "endit-rnd-roll"
    line_start: 155
    line_end: 203
    title: "The Exit Routines, rnd and roll"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dice_notation"
    image_url: ""
    image_caption: ""
    content: "endit and fatal leave the game: the second prints a message on the bottom line, shuts curses down and exits. rnd is the random number everyone uses. It takes the RN macro's next value, makes it positive and reduces it modulo the range, and a range of zero returns zero rather than dividing by it. roll simulates dice, adding up a number of rolls of a die with the given number of sides, and the 'dmg' strings such as '1x8' are read as that many dice of that many sides. The two small routines are the base of all the game's chance."
  - id: "tstp"
    line_start: 205
    line_end: 243
    title: "Stopping and Starting a Full-Screen Program"
    wikipedia_url: "https://en.wikipedia.org/wiki/Job_control_(Unix)"
    image_url: ""
    image_caption: ""
    content: "tstp handles the terminal's stop signal, the one a user sends with control-Z. To leave nicely it remembers the cursor, moves it to the bottom corner, shuts curses down, restores the terminal's original settings and then suspends the process. When the user resumes it, the routine puts the terminal back into raw mode with no echo, restores the game's special characters, forces a full redraw and moves the cursor back to where it was. The final two lines write to curses' private cursor fields directly. A full-screen game on a time-sharing machine had to be a good citizen of the shell, and this is the code for it."
  - id: "playit"
    line_start: 245
    line_end: 282
    title: "The Main Loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "playit is the loop of the whole game. It first adjusts for slow connections: if the terminal's speed is 1200 baud or less, it turns on terse messages, jump-style running and hides the lit floor around the player, so there is less to send down a modem line. A terminal that can clear to end of line gets the clearing style of inventory. The ROGUEOPTS variable is read again, the starting position and room are noted, and then the loop is a single call: while the player is playing, run one command. All timing, monster movement and healing happen inside command."
  - id: "quit-leave-shell"
    line_start: 284
    line_end: 395
    title: "Quitting, Leaving and Shelling Out"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "quit asks 'really quit?' and, on yes, clears the screen, prints the gold the player had, records the score and exits; on no it restores the status line and cursor and resets the counters. leave is the quick exit: it discards pending output, closes curses and exits. shell lets a player run a shell command from inside the game, putting the terminal back to normal mode, calling the OS to start a shell and, on return, asking for a keypress and redrawing the screen. my_exit restores the terminal's special characters before ending the process. They are the exits a Unix user expects of any full-screen program."
---

```c
/*
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 *
 * @(#)main.c	4.22 (Berkeley) 02/05/99
 */

#include <stdlib.h>
#include <string.h>
#include <signal.h>
#include <time.h>
#include <curses.h>
#include "rogue.h"

/*
 * main:
 *	The main program, of course
 */
int
main(int argc, char **argv, char **envp)
{
    char *env;
    int lowtime;

    md_init();

#ifdef MASTER
    /*
     * Check to see if he is a wizard
     */
    if (argc >= 2 && argv[1][0] == '\0')
	if (strcmp(PASSWD, md_crypt(md_getpass("wizard's password: "), "mT")) == 0)
	{
	    wizard = TRUE;
	    player.t_flags |= SEEMONST;
	    argv++;
	    argc--;
	}

#endif

    /*
     * get home and options from environment
     */

    strncpy(home, md_gethomedir(), MAXSTR);

    strcpy(file_name, home);
    strcat(file_name, "rogue.save");

    if ((env = getenv("ROGUEOPTS")) != NULL)
	parse_opts(env);
    if (env == NULL || whoami[0] == '\0')
        strucpy(whoami, md_getusername(), (int) strlen(md_getusername()));
    lowtime = (int) time(NULL);
#ifdef MASTER
    if (wizard && getenv("SEED") != NULL)
	dnum = atoi(getenv("SEED"));
    else
#endif
	dnum = lowtime + md_getpid();
    seed = dnum;

    open_score();

	/* 
     * Drop setuid/setgid after opening the scoreboard file. 
     */ 

    md_normaluser();

    /*
     * check for print-score option
     */

	md_normaluser(); /* we drop any setgid/setuid priveldges here */

    if (argc == 2)
    {
	if (strcmp(argv[1], "-s") == 0)
	{
	    noscore = TRUE;
	    score(0, -1, 0);
	    exit(0);
	}
	else if (strcmp(argv[1], "-d") == 0)
	{
	    dnum = rnd(100);	/* throw away some rnd()s to break patterns */
	    while (--dnum)
		rnd(100);
	    purse = rnd(100) + 1;
	    level = rnd(100) + 1;
	    initscr();
	    getltchars();
	    death(death_monst());
	    exit(0);
	}
    }

    init_check();			/* check for legal startup */
    if (argc == 2)
	if (!restore(argv[1], envp))	/* Note: restore will never return */
	    my_exit(1);
#ifdef MASTER
    if (wizard)
	printf("Hello %s, welcome to dungeon #%d", whoami, dnum);
    else
#endif
	printf("Hello %s, just a moment while I dig the dungeon...", whoami);
    fflush(stdout);

    initscr();				/* Start up cursor package */
    init_probs();			/* Set up prob tables for objects */
    init_player();			/* Set up initial player stats */
    init_names();			/* Set up names of scrolls */
    init_colors();			/* Set up colors of potions */
    init_stones();			/* Set up stone settings of rings */
    init_materials();			/* Set up materials of wands */
    setup();

    /*
     * The screen must be at least NUMLINES x NUMCOLS
     */
    if (LINES < NUMLINES || COLS < NUMCOLS)
    {
	printf("\nSorry, the screen must be at least %dx%d\n", NUMLINES, NUMCOLS);
	endwin();
	my_exit(1);
    }

    /*
     * Set up windows
     */
    hw = newwin(LINES, COLS, 0, 0);
    idlok(stdscr, TRUE);
    idlok(hw, TRUE);
#ifdef MASTER
    noscore = wizard;
#endif
    new_level();			/* Draw current level */
    /*
     * Start up daemons and fuses
     */
    start_daemon(runners, 0, AFTER);
    start_daemon(doctor, 0, AFTER);
    fuse(swander, 0, WANDERTIME, AFTER);
    start_daemon(stomach, 0, AFTER);
    playit();
    return(0);
}

/*
 * endit:
 *	Exit the program abnormally.
 */

void
endit(int sig)
{
    NOOP(sig);
    fatal("Okay, bye bye!\n");
}

/*
 * fatal:
 *	Exit the program, printing a message.
 */

void
fatal(char *s)
{
    mvaddstr(LINES - 2, 0, s);
    refresh();
    endwin();
    my_exit(0);
}

/*
 * rnd:
 *	Pick a very random number.
 */
int
rnd(int range)
{
    return range == 0 ? 0 : abs((int) RN) % range;
}

/*
 * roll:
 *	Roll a number of dice
 */
int 
roll(int number, int sides)
{
    int dtotal = 0;

    while (number--)
	dtotal += rnd(sides)+1;
    return dtotal;
}

/*
 * tstp:
 *	Handle stop and start signals
 */

void
tstp(int ignored)
{
    int y, x;
    int oy, ox;

	NOOP(ignored);

    /*
     * leave nicely
     */
    getyx(curscr, oy, ox);
    mvcur(0, COLS - 1, LINES - 1, 0);
    endwin();
    resetltchars();
    fflush(stdout);
	md_tstpsignal();

    /*
     * start back up again
     */
	md_tstpresume();
    raw();
    noecho();
    keypad(stdscr,1);
    playltchars();
    clearok(curscr, TRUE);
    wrefresh(curscr);
    getyx(curscr, y, x);
    mvcur(y, x, oy, ox);
    fflush(stdout);
    curscr->_cury = oy;
    curscr->_curx = ox;
}

/*
 * playit:
 *	The main loop of the program.  Loop until the game is over,
 *	refreshing things and looking at the proper times.
 */

void
playit()
{
    char *opts;

    /*
     * set up defaults for slow terminals
     */

    if (baudrate() <= 1200)
    {
	terse = TRUE;
	jump = TRUE;
	see_floor = FALSE;
    }

    if (md_hasclreol())
	inv_type = INV_CLEAR;

    /*
     * parse environment declaration of options
     */
    if ((opts = getenv("ROGUEOPTS")) != NULL)
	parse_opts(opts);


    oldpos = hero;
    oldrp = roomin(&hero);
    while (playing)
	command();			/* Command execution */
    endit(0);
}

/*
 * quit:
 *	Have player make certain, then exit.
 */

void
quit(int sig)
{
    int oy, ox;

    NOOP(sig);

    /*
     * Reset the signal in case we got here via an interrupt
     */
    if (!q_comm)
	mpos = 0;
    getyx(curscr, oy, ox);
    msg("really quit?");
    if (readchar() == 'y')
    {
	signal(SIGINT, leave);
	clear();
	mvprintw(LINES - 2, 0, "You quit with %d gold pieces", purse);
	move(LINES - 1, 0);
	refresh();
	score(purse, 1, 0);
	my_exit(0);
    }
    else
    {
	move(0, 0);
	clrtoeol();
	status();
	move(oy, ox);
	refresh();
	mpos = 0;
	count = 0;
	to_death = FALSE;
    }
}

/*
 * leave:
 *	Leave quickly, but curteously
 */

void
leave(int sig)
{
    static char buf[BUFSIZ];

    NOOP(sig);

    setbuf(stdout, buf);	/* throw away pending output */

    if (!isendwin())
    {
	mvcur(0, COLS - 1, LINES - 1, 0);
	endwin();
    }

    putchar('\n');
    my_exit(0);
}

/*
 * shell:
 *	Let them escape for a while
 */

void
shell()
{
    /*
     * Set the terminal back to original mode
     */
    move(LINES-1, 0);
    refresh();
    endwin();
    resetltchars();
    putchar('\n');
    in_shell = TRUE;
    after = FALSE;
    fflush(stdout);
    /*
     * Fork and do a shell
     */
    md_shellescape();

    printf("\n[Press return to continue]");
    fflush(stdout);
    noecho();
    raw();
    keypad(stdscr,1);
    playltchars();
    in_shell = FALSE;
    wait_for('\n');
    clearok(stdscr, TRUE);
}

/*
 * my_exit:
 *	Leave the process properly
 */

void
my_exit(int st)
{
    resetltchars();
    exit(st);
}
```
