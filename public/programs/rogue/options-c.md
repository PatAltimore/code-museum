---
title: "options.c"
program: "Rogue"
program_slug: "rogue"
file_path: "options.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/options.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "options-c"
order: 27
description: "The player's settings: a table of ten options, the screen to change them, and a parser for the environment string."

summary:
  - point: "Each option is a table row holding a pointer to its variable and two functions, one to show it and one to read it"
    link: "https://en.wikipedia.org/wiki/Function_pointer"
    link_label: "Function pointer"
  - point: "Options can be set before the game starts from a comma-separated string in an environment variable"
    link: "https://en.wikipedia.org/wiki/Environment_variable"
    link_label: "Environment variable"

enhancements:
  - id: "optlist"
    line_start: 21
    line_end: 63
    title: "A Table of Ten Options"
    wikipedia_url: "https://en.wikipedia.org/wiki/Function_pointer"
    image_url: ""
    image_caption: ""
    content: "optlist is an array of OPTION records. Each has a name used in the environment string, a prompt for the options screen, a pointer to the variable that holds the value, a function to print it and a function to read a new one. The ten options are terse, flush typeahead during battle, jump, seefloor, passgo, tombstone, inven for the inventory style, name, fruit and file, the save file. The pointer is void and the functions know the real type, so each row works a little like an object with two methods. Adding an option takes one row."
  - id: "option"
    line_start: 65
    line_end: 120
    title: "The Options Screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "option clears the second window and prints every option with its current value. It then goes back to the top and walks the table a second time. For each row it calls the row's read function, which lets the player change the value. If the function returns a request to go back, signalled by typing a minus, the loop steps back a row, unless it is already at the top, when it rings the bell. Escape quits the loop. When it ends the function waits for a space and redraws the real screen. It sets after to false, since looking at options takes no game time."
  - id: "print-values"
    line_start: 122
    line_end: 164
    title: "Printing Each Kind of Value"
    wikipedia_url: "https://en.wikipedia.org/wiki/Function_pointer"
    image_url: ""
    image_caption: ""
    content: "pr_optname prints a row's prompt and name, as in 'Terse output (\"terse\"): '. The three put functions print a value of each type. put_bool writes 'True' or 'False', put_str writes a string, and put_inv_t looks up the name of the inventory style in an array indexed by the number. They are the first function in each row of the table."
  - id: "get-bool"
    line_start: 166
    line_end: 241
    title: "Changing a Boolean"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "get_bool shows the current value and waits for a key: T or t for true, F or f for false, return to keep it, escape to quit, minus to go back. Any other key makes it show the hint '(T or F)' and ask again. get_sf is a wrapper for the seefloor option, because turning the lamp-lit floor off needs the room redrawn. If it changed from on to off, it briefly sets the option on and calls erase_lamp to blank the floor squares that were visible, then restores it. If it changed from off to on, it calls look to draw them."
  - id: "get-str"
    line_start: 243
    line_end: 318
    title: "Reading a String"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "get_str reads a line from the player into a buffer, with a small line editor of its own. It supports the terminal's erase character to delete a letter and its kill character to start again. A tilde at the beginning stands for the home directory. A minus at the beginning of an options-screen field means go back. Non-printing characters and anything past 50 characters, MAXINP, ring the bell. Nothing is changed unless the player typed something, so pressing return keeps the old value. The same routine reads the answer to 'what do you want to call it?' and other prompts, with stdscr as the window."
  - id: "get-inv-t"
    line_start: 320
    line_end: 371
    title: "Choosing an Inventory Style"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "get_inv_t is the read function for the inventory style. O chooses overwrite, S slow, C clear. These are the three styles that add_line draws: overwrite puts the list over the right side of the map, slow shows one line at a time as messages, and clear fills the whole screen. A wrong key shows the hint '(O, S, or C)'."
  - id: "get-num"
    line_start: 373
    line_end: 389
    title: "A Numeric Option for Wizards"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "get_num is compiled only in wizard builds. It reads a string with get_str, and if the player entered something, converts it with atoi to a short. No row of the options table uses it. Its caller is the wizard's object-creation command in wizard.c, which asks for the size of a pile of gold."
  - id: "parse-opts"
    line_start: 391
    line_end: 482
    title: "Options From a String"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "parse_opts reads a comma-separated list such as 'terse,nojump,name=Pat,fruit=mango'. It takes the letters of a name, looks the name up in the table, and handles it by type. A boolean named alone is set to true, and a boolean with 'no' in front of its name is set to false. For a string, it skips the equals signs, expands a leading tilde to the home directory, finds the comma or the end, and copies the text. For the inventory option, it capitalises the first letter and compares it with the names Overwrite, Slow and Clear. The name need only be as long as is needed to match, so a short form works. main.c passes it the environment variable ROGUEOPTS, which is how a player keeps settings between games."
  - id: "strucpy"
    line_start: 484
    line_end: 501
    title: "A Safe String Copy"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "strucpy copies at most 50 characters from one string to another and drops any character that is not printable, a space apart. Both get_str and parse_opts use it, so that a name or a fruit typed or taken from the environment cannot carry control codes onto the screen or into the save file."
---

```c
/*
 * This file has all the code for the option command.  I would rather
 * this command were not necessary, but it is the only way to keep the
 * wolves off of my back.
 *
 * @(#)options.c	4.24 (Berkeley) 05/10/83
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <stdlib.h>
#include <curses.h>
#include <ctype.h>
#include <string.h>
#include "rogue.h"

#define	EQSTR(a, b, c)	(strncmp(a, b, c) == 0)

#define	NUM_OPTS	(sizeof optlist / sizeof (OPTION))

/*
 * description of an option and what to do with it
 */
struct optstruct {
    char	*o_name;	/* option name */
    char	*o_prompt;	/* prompt for interactive entry */
    void 	*o_opt;		/* pointer to thing to set */
				/* function to print value */
    void 	(*o_putfunc)(void *opt);
				/* function to get value interactively */
    int		(*o_getfunc)(void *opt, WINDOW *win);
};

typedef struct optstruct	OPTION;

void	pr_optname(OPTION *op);

OPTION	optlist[] = {
    {"terse",	 "Terse output",
		 &terse,	put_bool,	get_bool	},
    {"flush",	 "Flush typeahead during battle",
		 &fight_flush,	put_bool,	get_bool	},
    {"jump",	 "Show position only at end of run",
		 &jump,		put_bool,	get_bool	},
    {"seefloor", "Show the lamp-illuminated floor",
		 &see_floor,	put_bool,	get_sf		},
    {"passgo",	"Follow turnings in passageways",
		 &passgo,	put_bool,	get_bool	},
    {"tombstone", "Print out tombstone when killed",
		 &tombstone,	put_bool,	get_bool	},
    {"inven",	"Inventory style",
		 &inv_type,	put_inv_t,	get_inv_t	},
    {"name",	 "Name",
		 whoami,	put_str,	get_str		},
    {"fruit",	 "Fruit",
		 fruit,		put_str,	get_str		},
    {"file",	 "Save file",
		 file_name,	put_str,	get_str		}
};

/*
 * option:
 *	Print and then set options from the terminal
 */

void
option()
{
    OPTION	*op;
    int		retval;

    wclear(hw);
    /*
     * Display current values of options
     */
    for (op = optlist; op <= &optlist[NUM_OPTS-1]; op++)
    {
	pr_optname(op);
	(*op->o_putfunc)(op->o_opt);
	waddch(hw, '\n');
    }
    /*
     * Set values
     */
    wmove(hw, 0, 0);
    for (op = optlist; op <= &optlist[NUM_OPTS-1]; op++)
    {
	pr_optname(op);
	retval = (*op->o_getfunc)(op->o_opt, hw);
	if (retval)
	{
	    if (retval == QUIT)
		break;
	    else if (op > optlist) {	/* MINUS */
		wmove(hw, (int)(op - optlist) - 1, 0);
		op -= 2;
	    }
	    else	/* trying to back up beyond the top */
	    {
		putchar('\007');
		wmove(hw, 0, 0);
		op--;
	    }
	}
    }
    /*
     * Switch back to original screen
     */
    wmove(hw, LINES - 1, 0);
    waddstr(hw, "--Press space to continue--");
    wrefresh(hw);
    wait_for(' ');
    clearok(curscr, TRUE);
    touchwin(stdscr);
    after = FALSE;
}

/*
 * pr_optname:
 *	Print out the option name prompt
 */

void
pr_optname(OPTION *op)
{
    wprintw(hw, "%s (\"%s\"): ", op->o_prompt, op->o_name);
}

/*
 * put_bool
 *	Put out a boolean
 */

void
put_bool(void *b)
{
    waddstr(hw, *(bool *) b ? "True" : "False");
}

/*
 * put_str:
 *	Put out a string
 */

void
put_str(void *str)
{
    waddstr(hw, (char *) str);
}

/*
 * put_inv_t:
 *	Put out an inventory type
 */

void
put_inv_t(void *ip)
{
    waddstr(hw, inv_t_name[*(int *) ip]);
}

/*
 * get_bool:
 *	Allow changing a boolean option and print it out
 */
int
get_bool(void *vp, WINDOW *win)
{
    bool *bp = (bool *) vp;
    int oy, ox;
    bool op_bad;

    op_bad = TRUE;
    getyx(win, oy, ox);
    waddstr(win, *bp ? "True" : "False");
    while (op_bad)	
    {
	wmove(win, oy, ox);
	wrefresh(win);
	switch (readchar())
	{
	    case 't':
	    case 'T':
		*bp = TRUE;
		op_bad = FALSE;
		break;
	    case 'f':
	    case 'F':
		*bp = FALSE;
		op_bad = FALSE;
		break;
	    case '\n':
	    case '\r':
		op_bad = FALSE;
		break;
	    case ESCAPE:
		return QUIT;
	    case '-':
		return MINUS;
	    default:
		wmove(win, oy, ox + 10);
		waddstr(win, "(T or F)");
	}
    }
    wmove(win, oy, ox);
    waddstr(win, *bp ? "True" : "False");
    waddch(win, '\n');
    return NORM;
}

/*
 * get_sf:
 *	Change value and handle transition problems from see_floor to
 *	!see_floor.
 */
int
get_sf(void *vp, WINDOW *win)
{
    bool	*bp = (bool *) vp;
    bool	was_sf;
    int		retval;

    was_sf = see_floor;
    retval = get_bool(bp, win);
    if (retval == QUIT) return(QUIT);
    if (was_sf != see_floor)
    {
	if (!see_floor) {
	    see_floor = TRUE;
	    erase_lamp(&hero, proom);
	    see_floor = FALSE;
	}
	else
	    look(FALSE);
    }
    return(NORM);
}

/*
 * get_str:
 *	Set a string option
 */
#define MAXINP	50	/* max string to read from terminal or environment */

int
get_str(void *vopt, WINDOW *win)
{
    char *opt = (char *) vopt;
    char *sp;
    int oy, ox;
    int i;
    signed char c;
    static char buf[MAXSTR];

    getyx(win, oy, ox);
    wrefresh(win);
    /*
     * loop reading in the string, and put it in a temporary buffer
     */
    for (sp = buf; (c = readchar()) != '\n' && c != '\r' && c != ESCAPE;
	wclrtoeol(win), wrefresh(win))
    {
	if (c == -1)
	    continue;
	else if (c == erasechar())	/* process erase character */
	{
	    if (sp > buf)
	    {
		sp--;
		for (i = (int) strlen(unctrl(*sp)); i; i--)
		    waddch(win, '\b');
	    }
	    continue;
	}
	else if (c == killchar())	/* process kill character */
	{
	    sp = buf;
	    wmove(win, oy, ox);
	    continue;
	}
	else if (sp == buf)
	{
	    if (c == '-' && win != stdscr)
		break;
	    else if (c == '~')
	    {
		strcpy(buf, home);
		waddstr(win, home);
		sp += strlen(home);
		continue;
	    }
	}
	if (sp >= &buf[MAXINP] || !(isprint(c) || c == ' '))
	    putchar(CTRL('G'));
	else
	{
	    *sp++ = c;
	    waddstr(win, unctrl(c));
	}
    }
    *sp = '\0';
    if (sp > buf)	/* only change option if something has been typed */
	strucpy(opt, buf, (int) strlen(buf));
    mvwprintw(win, oy, ox, "%s\n", opt);
    wrefresh(win);
    if (win == stdscr)
	mpos += (int)(sp - buf);
    if (c == '-')
	return MINUS;
    else if (c == ESCAPE)
	return QUIT;
    else
	return NORM;
}

/*
 * get_inv_t
 *	Get an inventory type name
 */
int
get_inv_t(void *vp, WINDOW *win)
{
    int *ip = (int *) vp;
    int oy, ox;
    bool op_bad;

    op_bad = TRUE;
    getyx(win, oy, ox);
    waddstr(win, inv_t_name[*ip]);
    while (op_bad)	
    {
	wmove(win, oy, ox);
	wrefresh(win);
	switch (readchar())
	{
	    case 'o':
	    case 'O':
		*ip = INV_OVER;
		op_bad = FALSE;
		break;
	    case 's':
	    case 'S':
		*ip = INV_SLOW;
		op_bad = FALSE;
		break;
	    case 'c':
	    case 'C':
		*ip = INV_CLEAR;
		op_bad = FALSE;
		break;
	    case '\n':
	    case '\r':
		op_bad = FALSE;
		break;
	    case ESCAPE:
		return QUIT;
	    case '-':
		return MINUS;
	    default:
		wmove(win, oy, ox + 15);
		waddstr(win, "(O, S, or C)");
	}
    }
    mvwprintw(win, oy, ox, "%s\n", inv_t_name[*ip]);
    return NORM;
}
	

#ifdef MASTER
/*
 * get_num:
 *	Get a numeric option
 */
int
get_num(void *vp, WINDOW *win)
{
    short *opt = (short *) vp;
    int i;
    static char buf[MAXSTR];

    if ((i = get_str(buf, win)) == NORM)
	*opt = (short) atoi(buf);
    return i;
}
#endif

/*
 * parse_opts:
 *	Parse options from string, usually taken from the environment.
 *	The string is a series of comma seperated values, with booleans
 *	being stated as "name" (true) or "noname" (false), and strings
 *	being "name=....", with the string being defined up to a comma
 *	or the end of the entire option string.
 */

void
parse_opts(char *str)
{
    char *sp;
    OPTION *op;
    int len;
    char **i;
    char *start;

    while (*str)
    {
	/*
	 * Get option name
	 */
	for (sp = str; isalpha(*sp); sp++)
	    continue;
	len = (int)(sp - str);
	/*
	 * Look it up and deal with it
	 */
	for (op = optlist; op <= &optlist[NUM_OPTS-1]; op++)
	    if (EQSTR(str, op->o_name, len))
	    {
		if (op->o_putfunc == put_bool)	/* if option is a boolean */
		    *(bool *)op->o_opt = TRUE;	/* NOSTRICT */
		else				/* string option */
		{
		    /*
		     * Skip to start of string value
		     */
		    for (str = sp + 1; *str == '='; str++)
			continue;
		    if (*str == '~')
		    {
			strcpy((char *) op->o_opt, home);	  /* NOSTRICT */
			start = (char *) op->o_opt + strlen(home);/* NOSTRICT */
			while (*++str == '/')
			    continue;
		    }
		    else
			start = (char *) op->o_opt;	/* NOSTRICT */
		    /*
		     * Skip to end of string value
		     */
		    for (sp = str + 1; *sp && *sp != ','; sp++)
			continue;
		    /*
		     * check for type of inventory
		     */
		    if (op->o_putfunc == put_inv_t)
		    {
			if (islower(*str))
			    *str = (char) toupper(*str);
			for (i = inv_t_name; i <= &inv_t_name[INV_CLEAR]; i++)
			    if (strncmp(str, *i, sp - str) == 0)
			    {
				inv_type = (int)(i - inv_t_name);
				break;
			    }
		    }
		    else
			strucpy(start, str, (int)(sp - str));
		}
		break;
	    }
	    /*
	     * check for "noname" for booleans
	     */
	    else if (op->o_putfunc == put_bool
	      && EQSTR(str, "no", 2) && EQSTR(str + 2, op->o_name, len - 2))
	    {
		*(bool *)op->o_opt = FALSE;	/* NOSTRICT */
		break;
	    }

	/*
	 * skip to start of next option name
	 */
	while (*sp && !isalpha(*sp))
	    sp++;
	str = sp;
    }
}

/*
 * strucpy:
 *	Copy string using unctrl for things
 */

void
strucpy(char *s1, char *s2, int len)
{
    if (len > MAXINP)
	len = MAXINP;
    while (len--)
    {
	if (isprint(*s2) || *s2 == ' ')
	    *s1++ = *s2;
	s2++;
    }
    *s1 = '\0';
}
```
