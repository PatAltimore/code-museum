---
title: "mach_dep.c"
program: "Rogue"
program_slug: "rogue"
file_path: "mach_dep.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/mach_dep.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "mach-dep-c"
order: 33
description: "Machine-dependent set-up: the score file and its lock, the terminal modes, and a limit on playing when a shared computer is busy."

summary:
  - point: "A game on a shared machine could be refused, warned about and finally ended when the system load was too high"
    link: "https://en.wikipedia.org/wiki/Load_(computing)"
    link_label: "Load"
  - point: "The score file is protected by a lock file, which is broken if it is more than ten seconds old"
    link: "https://en.wikipedia.org/wiki/File_locking"
    link_label: "File locking"
  - point: "The binary can run with special group privileges only to open the score file, then drops them"
    link: "https://en.wikipedia.org/wiki/Setuid"
    link_label: "Setuid"

enhancements:
  - id: "tuneables"
    line_start: 13
    line_end: 39
    title: "The Knobs an Administrator Could Turn"
    wikipedia_url: "https://en.wikipedia.org/wiki/Time-sharing"
    image_url: ""
    image_caption: ""
    content: "The comment at the start lists the compile-time settings of a game installed on a shared computer: where the score file lives, whether it holds the top ten scores or the top ten players, how many entries it has, and a maximum load average or user count at which the game stops being playable, with the way to measure each. CHECKTIME says how often the game should check the load while it is being played. Settings like these only make sense on a time-sharing machine, where one player's game could slow down everyone else's work."
  - id: "globals"
    line_start: 52
    line_end: 70
    title: "Score Table Defaults"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "NUMSCORES is 10 and NUMNAME is 'Ten' unless a build says otherwise, and the two are held in numscores and Numname for rip.c to print 'Top Ten'. allscore is true only when ALLSCORES is defined, in which case the table holds the best ten scores, not the best score of each of ten players. num_checks counts how many warnings the load checker has given."
  - id: "init-check"
    line_start: 72
    line_end: 92
    title: "Is It a Good Time to Play?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Load_(computing)"
    image_url: ""
    image_caption: ""
    content: "init_check runs at start-up, and only in builds that define MAXLOAD or MAXUSERS. If the system is too busy it prints 'Sorry, name, but the system is too loaded now. Try again later. Meanwhile, why not enjoy a mango?', using the player's own chosen fruit, and exits, unless the player is an author. Otherwise it does nothing."
  - id: "open-score"
    line_start: 94
    line_end: 129
    title: "Opening the Score File"
    wikipedia_url: "https://en.wikipedia.org/wiki/Setuid"
    image_url: ""
    image_caption: ""
    content: "open_score opens the score file when SCOREFILE is defined. A comment explains the reason for the odd first lines: the program gives up its setgid privilege after opening the score file, so any later open would fail, and instead the saved file handle is reused after a rewind. A missing file is created with mode 0664. If it still cannot be opened, a message is printed to standard error. Without SCOREFILE the scoreboard is simply null and nothing is saved."
  - id: "setup"
    line_start: 131
    line_end: 158
    title: "Starting the Terminal"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminal_mode"
    image_url: ""
    image_caption: ""
    content: "setup is called when a game starts or is restored. It chooses the signal handling: in builds that define DUMP, a hang-up or crash causes an automatic save, and otherwise the defaults. With CHECKTIME it starts the load-check timer. It puts the terminal in raw mode, so keys arrive one at a time with no line editing, turns echo off so typed letters are not printed, and enables the keypad, so arrow keys are understood. getltchars is called last."
  - id: "tty-chars"
    line_start: 160
    line_end: 195
    title: "The Suspend Key"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminal_mode"
    image_url: ""
    image_caption: ""
    content: "getltchars saves the terminal's delayed-suspend character and replaces it with the ordinary suspend character, and records that it has done so. resetltchars puts the original back, and playltchars sets the playing value again, each only if the first has been done. save_file and score call resetltchars, so that the terminal is left as the player found it."
  - id: "score-and-symlink"
    line_start: 197
    line_end: 228
    title: "Stopping the Timer, Spotting a Link"
    wikipedia_url: "https://en.wikipedia.org/wiki/Symbolic_link"
    image_url: ""
    image_caption: ""
    content: "start_score stops the load-check timer, so a player in the middle of the score display is not interrupted. is_symlink uses lstat to see whether a name is anything other than a plain file, and so catches a symbolic link, and answers false if the platform has none. It is used by restore to refuse a save file that is a link."
  - id: "too-much"
    line_start: 230
    line_end: 275
    title: "Too Many Users, Too Much Load"
    wikipedia_url: "https://en.wikipedia.org/wiki/Load_(computing)"
    image_url: ""
    image_caption: ""
    content: "too_much is true if the load average over five minutes is above MAXLOAD divided by ten, or if the number of users is more than MAXUSERS. author tells the game whether to exempt the player. In wizard mode the answer is yes. Otherwise it checks the user id against minus one, which no real user id matches, so in this version only a wizard is exempt."
  - id: "checkout"
    line_start: 277
    line_end: 335
    title: "Warnings, Then Death"
    wikipedia_url: "https://en.wikipedia.org/wiki/Load_(computing)"
    image_url: ""
    image_caption: ""
    content: "checkout runs on a timer every CHECKTIME minutes. If the load is too high, the first time the player is told 'The load is too high to be playing. Please leave in so many minutes'. The next period is shorter, divided by the number of warnings, and the second message tells the player to save. A third gives a last warning. A fourth stops the game with 'Sorry. You took too long. You are dead'. If the load falls, the count goes back to zero and the message is 'You have a reprieve'. chmsg prints with printf instead of msg when the player is in a shell."
  - id: "ucount"
    line_start: 337
    line_end: 365
    title: "Counting Users"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "ucount, compiled only if UCOUNT is defined, opens the system's login record file and counts the entries with a name. It is the user-count measure that too_much compares with MAXUSERS."
  - id: "lock-sc"
    line_start: 367
    line_end: 430
    title: "Locking the Score File"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_locking"
    image_url: ""
    image_caption: ""
    content: "lock_sc takes a lock before the score table is written. It tries to create a lock file, retries once a second for five seconds, and if the lock is still held decides what to do from its age. A lock older than ten seconds is assumed left by a dead process and removed. If it is younger, the player is told that the score file is very busy and asked whether to wait; a yes waits and tries again, breaking an old lock when one is found, and anything else gives up and the score is not posted. Without SCOREFILE and LOCKFILE it just returns true."
  - id: "unlock-and-flush"
    line_start: 432
    line_end: 457
    title: "Unlocking, and Throwing Away Keys"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "unlock_sc closes and deletes the lock file. flush_type throws away any keys the player has typed ahead, using curses' flushinp. It is called after a trap or a teleport so a player who was pressing keys does not walk on into danger."
---

```c
/*
 * Various installation dependent routines
 *
 * @(#)mach_dep.c	4.37 (Berkeley) 05/23/83
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

/*
 * The various tuneable defines are:
 *
 *	SCOREFILE	Where/if the score file should live.
 *	ALLSCORES	Score file is top ten scores, not top ten
 *			players.  This is only useful when only a few
 *			people will be playing; otherwise the score file
 *			gets hogged by just a few people.
 *	NUMSCORES	Number of scores in the score file (default 10).
 *	NUMNAME		String version of NUMSCORES (first character
 *			should be capitalized) (default "Ten").
 *	MAXLOAD		What (if any) the maximum load average should be
 *			when people are playing.  Since it is divided
 *			by 10, to specify a load limit of 4.0, MAXLOAD
 *			should be "40".	 If defined, then
 *      LOADAV		Should it use it's own routine to get
 *		        the load average?
 *      NAMELIST	If so, where does the system namelist
 *		        hide?
 *	MAXUSERS	What (if any) the maximum user count should be
 *	                when people are playing.  If defined, then
 *      UCOUNT		Should it use it's own routine to count
 *		        users?
 *      UTMP		If so, where does the user list hide?
 *	CHECKTIME	How often/if it should check during the game
 *			for high load average.
 */

#include <signal.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <limits.h>
#include <string.h>
#include <fcntl.h>
#include <errno.h>
#include <time.h>
#include <curses.h>
#include "extern.h"

#define NOOP(x) (x += 0)

# ifndef NUMSCORES
#	define	NUMSCORES	10
#	define	NUMNAME		"Ten"
# endif

unsigned int numscores = NUMSCORES;
char *Numname = NUMNAME;

# ifdef ALLSCORES
bool allscore = TRUE;
# else  /* ALLSCORES */
bool allscore = FALSE;
# endif /* ALLSCORES */

#ifdef CHECKTIME
static int num_checks;		/* times we've gone over in checkout() */
#endif /* CHECKTIME */

/*
 * init_check:
 *	Check out too see if it is proper to play the game now
 */

void
init_check()
{
#if defined(MAXLOAD) || defined(MAXUSERS)
    if (too_much())
    {
	printf("Sorry, %s, but the system is too loaded now.\n", whoami);
	printf("Try again later.  Meanwhile, why not enjoy a%s %s?\n",
	    vowelstr(fruit), fruit);
	if (author())
	    printf("However, since you're a good guy, it's up to you\n");
	else
	    exit(1);
    }
#endif
}

/*
 * open_score:
 *	Open up the score file for future use
 */

void
open_score()
{
#ifdef SCOREFILE
    char *scorefile = SCOREFILE;
     /* 
      * We drop setgid privileges after opening the score file, so subsequent 
      * open()'s will fail.  Just reuse the earlier filehandle. 
      */

    if (scoreboard != NULL) { 
        rewind(scoreboard); 
        return; 
    } 

    scoreboard = fopen(scorefile, "r+");

    if ((scoreboard == NULL) && (errno == ENOENT))
    {
    	scoreboard = fopen(scorefile, "w+");
        md_chmod(scorefile,0664);
    }

    if (scoreboard == NULL) { 
         fprintf(stderr, "Could not open %s for writing: %s\n", scorefile, strerror(errno)); 
         fflush(stderr); 
    } 
#else
    scoreboard = NULL;
#endif
}

/*
 * setup:
 *	Get starting setup for all games
 */

void
setup()
{
#ifdef CHECKTIME
    int  checkout();
#endif

#ifdef DUMP
    md_onsignal_autosave();
#else
    md_onsignal_default();
#endif

#ifdef CHECKTIME
    md_start_checkout_timer(CHECKTIME*60);
    num_checks = 0;
#endif

    raw();				/* Raw mode */
    noecho();				/* Echo off */
    keypad(stdscr,1);
    getltchars();			/* get the local tty chars */
}

/*
 * getltchars:
 *	Get the local tty chars for later use
 */

void
getltchars()
{
    got_ltc = TRUE;
    orig_dsusp = md_dsuspchar();
    md_setdsuspchar( md_suspchar() );
}

/* 
 * resetltchars: 
 *      Reset the local tty chars to original values. 
 */ 
void 
resetltchars(void) 
{ 
    if (got_ltc) {
        md_setdsuspchar(orig_dsusp);
    } 
} 
  
/* 
 * playltchars: 
 *      Set local tty chars to the values we use when playing. 
 */ 
void 
playltchars(void) 
{ 
    if (got_ltc) { 
        md_setdsuspchar( md_suspchar() );
    } 
} 

/*
 * start_score:
 *	Start the scoring sequence
 */

void
start_score()
{
#ifdef CHECKTIME
    md_stop_checkout_timer();
#endif
}

/* 	 	 
 * is_symlink: 	 	 
 *      See if the file has a symbolic link 	 	 
  */ 	 	 
bool 	 	 
is_symlink(char *sp) 	 	 
{ 	 	 
#ifdef S_IFLNK 	 	 
    struct stat sbuf2; 	 	 
 	 	 
    if (lstat(sp, &sbuf2) < 0) 	 	 
        return FALSE; 	 	 
    else 	 	 
        return ((sbuf2.st_mode & S_IFMT) != S_IFREG); 	 	 
#else
	NOOP(sp);
    return FALSE; 	 	 
#endif 
} 

#if defined(MAXLOAD) || defined(MAXUSERS)
/*
 * too_much:
 *	See if the system is being used too much for this game
 */
bool
too_much()
{
#ifdef MAXLOAD
    double avec[3];
#else
    int cnt;
#endif

#ifdef MAXLOAD
    md_loadav(avec);
    if (avec[1] > (MAXLOAD / 10.0))
	return TRUE;
#endif
#ifdef MAXUSERS
    if (ucount() > MAXUSERS)
	return TRUE;
#endif
    return FALSE;
}

/*
 * author:
 *	See if a user is an author of the program
 */
bool
author()
{
#ifdef MASTER
    if (wizard)
	return TRUE;
#endif
    switch (md_getuid())
    {
	case -1:
	    return TRUE;
	default:
	    return FALSE;
    }
}
#endif

#ifdef CHECKTIME
/*
 * checkout:
 *	Check each CHECKTIME seconds to see if the load is too high
 */

checkout(int sig)
{
    static char *msgs[] = {
	"The load is too high to be playing.  Please leave in %0.1f minutes",
	"Please save your game.  You have %0.1f minutes",
	"Last warning.  You have %0.1f minutes to leave",
    };
    int checktime;

    if (too_much())
    {
	if (author())
	{
	    num_checks = 1;
	    chmsg("The load is rather high, O exaulted one");
	}
	else if (num_checks++ == 3)
	    fatal("Sorry.  You took too long.  You are dead\n");
	checktime = (CHECKTIME * 60) / num_checks;
	chmsg(msgs[num_checks - 1], ((double) checktime / 60.0));
    }
    else
    {
	if (num_checks)
	{
	    num_checks = 0;
	    chmsg("The load has dropped back down.  You have a reprieve");
	}
	checktime = (CHECKTIME * 60);
    }

	md_start_checkout_timer(checktime);
}

/*
 * chmsg:
 *	checkout()'s version of msg.  If we are in the middle of a
 *	shell, do a printf instead of a msg to a the refresh.
 */
/* VARARGS1 */

chmsg(char *fmt, int arg)
{
    if (!in_shell)
	msg(fmt, arg);
    else
    {
	printf(fmt, arg);
	putchar('\n');
	fflush(stdout);
    }
}
#endif

#ifdef UCOUNT
/*
 * ucount:
 *	count number of users on the system
 */
#include <utmp.h>

struct utmp buf;

int
ucount()
{
    struct utmp *up;
    FILE *utmp;
    int count;

    if ((utmp = fopen(UTMP, "r")) == NULL)
	return 0;

    up = &buf;
    count = 0;

    while (fread(up, 1, sizeof (*up), utmp) > 0)
	if (buf.ut_name[0] != '\0')
	    count++;
    fclose(utmp);
    return count;
}
#endif

/*
 * lock_sc:
 *	lock the score file.  If it takes too long, ask the user if
 *	they care to wait.  Return TRUE if the lock is successful.
 */
static FILE *lfd = NULL;
bool
lock_sc()
{
#if defined(SCOREFILE) && defined(LOCKFILE)
    int cnt;
    static struct stat sbuf;
    char *lockfile = LOCKFILE;

over:
    if ((lfd=fopen(lockfile, "w+")) != NULL)
	return TRUE;
    for (cnt = 0; cnt < 5; cnt++)
    {
	md_sleep(1);
	if ((lfd=fopen(lockfile, "w+")) != NULL)
	    return TRUE;
    }
    if (stat(lockfile, &sbuf) < 0)
    {
	lfd=fopen(lockfile, "w+");
	return TRUE;
    }
    if (time(NULL) - sbuf.st_mtime > 10)
    {
	if (md_unlink(lockfile) < 0)
	    return FALSE;
	goto over;
    }
    else
    {
	printf("The score file is very busy.  Do you want to wait longer\n");
	printf("for it to become free so your score can get posted?\n");
	printf("If so, type \"y\"\n");
	(void) fgets(prbuf, MAXSTR, stdin);
	if (prbuf[0] == 'y')
	    for (;;)
	    {
		if ((lfd=fopen(lockfile, "w+")) != 0)
		    return TRUE;
		if (stat(lockfile, &sbuf) < 0)
		{
		    lfd=fopen(lockfile, "w+");
		    return TRUE;
		}
		if (time(NULL) - sbuf.st_mtime > 10)
		{
		    if (md_unlink(lockfile) < 0)
			return FALSE;
		}
		md_sleep(1);
	    }
	else
	    return FALSE;
    }
#else
    return TRUE;
#endif
}

/*
 * unlock_sc:
 *	Unlock the score file
 */

void
unlock_sc()
{
#if defined(SCOREFILE) && defined(LOCKFILE)
    if (lfd != NULL)
        fclose(lfd);
    lfd = NULL;
    md_unlink(LOCKFILE);
#endif
}

/*
 * flush_type:
 *	Flush typeahead for traps, etc.
 */

void
flush_type()
{
    flushinp();
}
```
