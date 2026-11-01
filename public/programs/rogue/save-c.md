---
title: "save.c"
program: "Rogue"
program_slug: "rogue"
file_path: "save.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/save.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "save-c"
order: 30
description: "Saving and restoring a game, with a home-made cipher and checks meant to stop a player cheating by reloading."

summary:
  - point: "A saved game can be loaded only once: the file is deleted as it is read"
    link: "https://en.wikipedia.org/wiki/Saved_game"
    link_label: "Saved game"
  - point: "The save file and the score table are scrambled with a simple XOR cipher, which hides them but is not secure"
    link: "https://en.wikipedia.org/wiki/XOR_cipher"
    link_label: "XOR cipher"
  - point: "A hang-up or crash signal triggers an automatic save"
    link: "https://en.wikipedia.org/wiki/Signal_(IPC)"
    link_label: "Signal"

enhancements:
  - id: "save-game"
    line_start: 29
    line_end: 113
    title: "The Save Command"
    wikipedia_url: "https://en.wikipedia.org/wiki/Saved_game"
    image_url: ""
    image_caption: ""
    content: "save_game is the command for saving. If a file name is already known, it offers it: 'save file (name)?'. A yes takes it. Otherwise it asks 'file name:' using get_str. If the file exists, the player is asked whether to overwrite it, and a no goes back to the start of the prompt. The previously named save file is deleted, the new name is stored, and the file is opened for writing; a failed open prints the system's error message and asks again. Then save_file writes the game, and never returns. The labels over, gotfile and quit_it are gotos used to share exits."
  - id: "auto-save"
    line_start: 115
    line_end: 155
    title: "Saving When the Terminal Hangs Up"
    wikipedia_url: "https://en.wikipedia.org/wiki/Signal_(IPC)"
    image_url: ""
    image_caption: ""
    content: "auto_save is a signal handler. In mdport.c, md_onsignal_autosave installs it for SIGHUP, the signal sent when a terminal connection drops, and for crash signals such as illegal instruction and floating-point error. It ignores all other signals, opens the known save file, and writes the game, so a dropped connection does not lose the game. If it cannot open the file it tries unlinking the name and opening it again. save_file prints a newline, closes curses, makes the file read-only with mode 0400, then writes the version string and the screen size as 'LINES x COLS', both through the cipher, followed by the game state through rs_save_file, and exits."
  - id: "restore"
    line_start: 157
    line_end: 267
    title: "Loading a Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Symbolic_link"
    image_url: ""
    image_caption: ""
    content: "restore takes a file name, or -r to use the remembered one. It opens the file, reads the version string back and refuses an old save: 'Sorry, saved game is out of date.' It reads the screen size and refuses to load on a smaller screen, as the map would not fit. It then loads the state with rs_restore_file. The next step is an anti-cheating measure: the file is unlinked at once, while still open, so a player cannot reload the same save again. It also refuses a file with more than one hard link or a symbolic link, 'Cannot restore from a linked file', since a link would leave a copy. A hero with no hit points prints \"He's dead, Jim\". A wizard skips the unlinking and link checks. The C library's random generator is reseeded from the process id and play resumes."
  - id: "cipher"
    line_start: 269
    line_end: 334
    title: "A Home-Made Cipher"
    wikipedia_url: "https://en.wikipedia.org/wiki/XOR_cipher"
    image_url: ""
    image_caption: ""
    content: "encwrite and encread scramble data with an exclusive-or against two key strings, encstr and statlist, declared in vers.c. For each byte, the data is XORed with the next character of each key and with a running feedback byte; the feedback adds the product of the two key bytes, and both keys wrap round when they end. Because XOR is its own inverse, encread does the same operation to undo it. This hides the save file and score table from casual editing; it would not stop a determined person, as the keys are in the source and in every copy of the program."
  - id: "score-file"
    line_start: 336
    line_end: 390
    title: "Reading and Writing the Score File"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "rd_score and wr_score move the score table between memory and the scoreboard file, which was opened elsewhere. Each entry takes up two records. The first is the player's name, a block of MAXSTR bytes through the cipher. The second is a 100-byte text line, 'uid score flags monster level time', with the time in hexadecimal, also through the cipher. Reading rewinds the file first and afterwards; writing does the same, so the file is always left at its start. If there is no scoreboard, both routines do nothing."
---

```c
/*
 * save and restore routines
 *
 * @(#)save.c	4.33 (Berkeley) 06/01/83
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <errno.h>
#include <signal.h>
#include <string.h>
#include <curses.h>
#include "rogue.h"
#include "score.h"

typedef struct stat STAT;

extern char version[], encstr[];

static STAT sbuf;

/*
 * save_game:
 *	Implement the "save game" command
 */

void
save_game()
{
    FILE *savef;
    int c;
    auto char buf[MAXSTR];

    /*
     * get file name
     */
    mpos = 0;
over:
    if (file_name[0] != '\0')
    {
	for (;;)
	{
	    msg("save file (%s)? ", file_name);
	    c = readchar();
	    mpos = 0;
	    if (c == ESCAPE)
	    {
		msg("");
		return;
	    }
	    else if (c == 'n' || c == 'N' || c == 'y' || c == 'Y')
		break;
	    else
		msg("please answer Y or N");
	}
	if (c == 'y' || c == 'Y')
	{
	    addstr("Yes\n");
	    refresh();
	    strcpy(buf, file_name);
	    goto gotfile;
	}
    }

    do
    {
	mpos = 0;
	msg("file name: ");
	buf[0] = '\0';
	if (get_str(buf, stdscr) == QUIT)
	{
quit_it:
	    msg("");
	    return;
	}
	mpos = 0;
gotfile:
	/*
	 * test to see if the file exists
	 */
	if (stat(buf, &sbuf) >= 0)
	{
	    for (;;)
	    {
		msg("File exists.  Do you wish to overwrite it?");
		mpos = 0;
		if ((c = readchar()) == ESCAPE)
		    goto quit_it;
		if (c == 'y' || c == 'Y')
		    break;
		else if (c == 'n' || c == 'N')
		    goto over;
		else
		    msg("Please answer Y or N");
	    }
	    msg("file name: %s", buf);
	    md_unlink(file_name);
	}
	strcpy(file_name, buf);
	if ((savef = fopen(file_name, "w")) == NULL)
	    msg(strerror(errno));
    } while (savef == NULL);

    save_file(savef);
    /* NOTREACHED */
}

/*
 * auto_save:
 *	Automatically save a file.  This is used if a HUP signal is
 *	recieved
 */

void
auto_save(int sig)
{
    FILE *savef;
    NOOP(sig);

    md_ignoreallsignals();
    if (file_name[0] != '\0' && ((savef = fopen(file_name, "w")) != NULL ||
	(md_unlink_open_file(file_name, savef) >= 0 && (savef = fopen(file_name, "w")) != NULL)))
	    save_file(savef);
    exit(0);
}

/*
 * save_file:
 *	Write the saved game on the file
 */

void
save_file(FILE *savef)
{
    char buf[80];
    mvcur(0, COLS - 1, LINES - 1, 0); 
    putchar('\n');
    endwin();
    resetltchars();
    md_chmod(file_name, 0400);
    encwrite(version, strlen(version)+1, savef);
    sprintf(buf,"%d x %d\n", LINES, COLS);
    encwrite(buf,80,savef);
    rs_save_file(savef);
    fflush(savef);
    fclose(savef);
    exit(0);
}

/*
 * restore:
 *	Restore a saved game from a file with elaborate checks for file
 *	integrity from cheaters
 */
bool
restore(char *file, char **envp)
{
    FILE *inf;
    int syml;
    extern char **environ;
    auto char buf[MAXSTR];
    auto STAT sbuf2;
    int lines, cols;

    if (strcmp(file, "-r") == 0)
	file = file_name;

	md_tstphold();

	if ((inf = fopen(file,"r")) == NULL)
    {
	perror(file);
	return FALSE;
    }
    stat(file, &sbuf2);
    syml = is_symlink(file);

    fflush(stdout);
    encread(buf, (unsigned) strlen(version) + 1, inf);
    if (strcmp(buf, version) != 0)
    {
	printf("Sorry, saved game is out of date.\n");
	return FALSE;
    }
    encread(buf,80,inf);
    sscanf(buf,"%d x %d\n", &lines, &cols);

    initscr();                          /* Start up cursor package */
    keypad(stdscr, 1);

    if (lines > LINES)
    {
        endwin();
        printf("Sorry, original game was played on a screen with %d lines.\n",lines);
        printf("Current screen only has %d lines. Unable to restore game\n",LINES);
        return(FALSE);
    }
    if (cols > COLS)
    {
        endwin();
        printf("Sorry, original game was played on a screen with %d columns.\n",cols);
        printf("Current screen only has %d columns. Unable to restore game\n",COLS);
        return(FALSE);
    }

    hw = newwin(LINES, COLS, 0, 0);
    setup();

    rs_restore_file(inf);
    /*
     * we do not close the file so that we will have a hold of the
     * inode for as long as possible
     */

    if (
#ifdef MASTER
	!wizard &&
#endif
        md_unlink_open_file(file, inf) < 0)
    {
	printf("Cannot unlink file\n");
	return FALSE;
    }
    mpos = 0;
/*    printw(0, 0, "%s: %s", file, ctime(&sbuf2.st_mtime)); */
/*
    printw("%s: %s", file, ctime(&sbuf2.st_mtime));
*/
    clearok(stdscr,TRUE);
    /*
     * defeat multiple restarting from the same place
     */
#ifdef MASTER
    if (!wizard)
#endif
	if (sbuf2.st_nlink != 1 || syml)
	{
	    endwin();
	    printf("\nCannot restore from a linked file\n");
	    return FALSE;
	}

    if (pstats.s_hpt <= 0)
    {
	endwin();
	printf("\n\"He's dead, Jim\"\n");
	return FALSE;
    }

	md_tstpresume();

    environ = envp;
    strcpy(file_name, file);
    clearok(curscr, TRUE);
    srand(md_getpid());
    msg("file name: %s", file);
    playit();
    /*NOTREACHED*/
    return(0);
}

/*
 * encwrite:
 *	Perform an encrypted write
 */

size_t
encwrite(char *start, size_t size, FILE *outf)
{
    char *e1, *e2, fb;
    int temp;
    extern char statlist[];
    size_t o_size = size;
    e1 = encstr;
    e2 = statlist;
    fb = 0;

    while(size)
    {
	if (putc(*start++ ^ *e1 ^ *e2 ^ fb, outf) == EOF)
            break;

	temp = *e1++;
	fb = fb + ((char) (temp * *e2++));
	if (*e1 == '\0')
	    e1 = encstr;
	if (*e2 == '\0')
	    e2 = statlist;
	size--;
    }

    return(o_size - size);
}

/*
 * encread:
 *	Perform an encrypted read
 */
size_t
encread(char *start, size_t size, FILE *inf)
{
    char *e1, *e2, fb;
    int temp;
    size_t read_size;
    extern char statlist[];

    fb = 0;

    if ((read_size = fread(start,1,size,inf)) == 0 || read_size == -1)
	return(read_size);

    e1 = encstr;
    e2 = statlist;

    while (size--)
    {
	*start++ ^= *e1 ^ *e2 ^ fb;
	temp = *e1++;
	fb = fb + (char)(temp * *e2++);
	if (*e1 == '\0')
	    e1 = encstr;
	if (*e2 == '\0')
	    e2 = statlist;
    }

    return(read_size);
}

static char scoreline[100];
/*
 * read_scrore
 *	Read in the score file
 */
void
rd_score(SCORE *top_ten)
{
    unsigned int i;

	if (scoreboard == NULL)
		return;

	rewind(scoreboard); 

	for(i = 0; i < numscores; i++)
    {
        encread(top_ten[i].sc_name, MAXSTR, scoreboard);
        encread(scoreline, 100, scoreboard);
        sscanf(scoreline, " %u %d %u %hu %d %x \n",
            &top_ten[i].sc_uid, &top_ten[i].sc_score,
            &top_ten[i].sc_flags, &top_ten[i].sc_monster,
            &top_ten[i].sc_level, &top_ten[i].sc_time);
    }

	rewind(scoreboard); 
}

/*
 * write_scrore
 *	Read in the score file
 */
void
wr_score(SCORE *top_ten)
{
    unsigned int i;

	if (scoreboard == NULL)
		return;

	rewind(scoreboard);

    for(i = 0; i < numscores; i++)
    {
          memset(scoreline,0,100);
          encwrite(top_ten[i].sc_name, MAXSTR, scoreboard);
          sprintf(scoreline, " %u %d %u %hu %d %x \n",
              top_ten[i].sc_uid, top_ten[i].sc_score,
              top_ten[i].sc_flags, top_ten[i].sc_monster,
              top_ten[i].sc_level, top_ten[i].sc_time);
          encwrite(scoreline,100,scoreboard);
    }

	rewind(scoreboard); 
}
```
