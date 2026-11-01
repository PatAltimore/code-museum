---
title: "io.c"
program: "Rogue"
program_slug: "rogue"
file_path: "io.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/io.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "io-c"
order: 26
description: "Messages at the top of the screen, the status line at the bottom, and reading a key."

summary:
  - point: "A message that does not fit, or follows another, waits behind a --More-- prompt"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "The status line is redrawn only when one of the numbers on it has changed"
    link: "https://en.wikipedia.org/wiki/Head-up_display_(video_games)"
    link_label: "HUD"

enhancements:
  - id: "msg-and-addmsg"
    line_start: 13
    line_end: 60
    title: "Writing a Message"
    wikipedia_url: "https://en.wikipedia.org/wiki/Variadic_function"
    image_url: ""
    image_caption: ""
    content: "msg is a printf for the top line of the screen. It takes a format and any number of arguments, using the C variable-argument macros. An empty string only clears the line. Otherwise the text is added to the message buffer by doadd and flushed with endmsg. addmsg adds to the buffer without flushing, which is why the code elsewhere builds sentences in pieces, one addmsg for each clause, and ends with msg. The limit, MAXMSG, is the screen width less room for the --More-- prompt."
  - id: "endmsg"
    line_start: 62
    line_end: 107
    title: "Showing It, After the Previous One"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "endmsg puts the buffer on the screen. If a message is still on the top line, mpos says how long it is, it first calls look, then writes '--More--' after it and waits for the player to press space. If msg_esc is set, as when a list is being shown, the player can press escape instead, which cancels the rest and returns ESCAPE. A message that starts with a lower case letter is capitalised, unless it begins with a pack letter and a bracket, so a line like 'a) a mace' stays as it is. The text is copied to huh, the buffer for the last message, if save_msg is set."
  - id: "doadd"
    line_start: 109
    line_end: 126
    title: "Adding to the Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Variadic_function"
    image_url: ""
    image_caption: ""
    content: "doadd formats text with vsprintf into a static buffer. If the text added would take the message past the line width, endmsg is called first, which shows what is already collected followed by --More--, then the new text starts a fresh message. Then the text is appended and the position updated. A long sentence thus breaks across screens at a clause boundary rather than being cut off."
  - id: "step-ok"
    line_start: 128
    line_end: 144
    title: "Can I Stand There?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "step_ok says whether a thing can be walked on, judging only by the character on the screen. A blank, a vertical wall and a horizontal wall cannot be. Nor can any letter, since a letter is a monster. Everything else, floors, doors, passages, stairs, traps and objects, can. The game draws every monster as a letter and nothing else as one, so this one test serves for thrown weapons and bolts, among others."
  - id: "readchar"
    line_start: 146
    line_end: 164
    title: "Reading a Key"
    wikipedia_url: "https://en.wikipedia.org/wiki/Curses_(programming_library)"
    image_url: ""
    image_caption: ""
    content: "readchar gets a character from the portable layer's md_readchar. If the character is control-C, which is code 3, the game calls quit and does not carry on. All input in the game goes through this one function, so every prompt can be interrupted the same way. If quit comes back, readchar returns the escape code instead."
  - id: "status"
    line_start: 166
    line_end: 240
    title: "The Status Line"
    wikipedia_url: "https://en.wikipedia.org/wiki/Head-up_display_(video_games)"
    image_url: ""
    image_caption: ""
    content: "status draws the line at the bottom: level, gold, hit points and maximum, strength and its maximum, armour, experience level and points, and a word for the hunger state: Hungry, Weak or Faint. It remembers the values it printed last time in static variables and returns at once if none of them has changed, so calling it after every action costs almost nothing. The width of the hit points field is the number of digits in the maximum, so the bracket stays lined up. Armour shows as 10 minus its class, so a higher figure is better, the reverse of the code's own scale. With the stat_msg option the line goes to the message line instead. The cursor is put back where it was."
  - id: "wait-and-show"
    line_start: 242
    line_end: 277
    title: "Waiting for a Key"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "wait_for reads characters, throwing away any which are not the one expected. For a newline it accepts a carriage return as well. show_win puts a message at the top of the second window, hw, which has been filled with a picture, such as the positions of magic or food, shows it, waits for a space, and then makes curses redraw the real screen. It is how the detection potions and scrolls show their results."
---

```c
/*
 * Various input/output functions
 *
 * @(#)io.c	4.32 (Berkeley) 02/05/99
 */

#include <stdarg.h>
#include <curses.h>
#include <ctype.h>
#include <string.h>
#include "rogue.h"

/*
 * msg:
 *	Display a message at the top of the screen.
 */
#define MAXMSG	(NUMCOLS - sizeof "--More--")

static char msgbuf[2*MAXMSG+1];
static int newpos = 0;

/* VARARGS1 */
int
msg(char *fmt, ...)
{
    va_list args;

    /*
     * if the string is "", just clear the line
     */
    if (*fmt == '\0')
    {
	move(0, 0);
	clrtoeol();
	mpos = 0;
	return ~ESCAPE;
    }
    /*
     * otherwise add to the message and flush it out
     */
    va_start(args, fmt);
    doadd(fmt, args);
    va_end(args);
    return endmsg();
}

/*
 * addmsg:
 *	Add things to the current message
 */
/* VARARGS1 */
void
addmsg(char *fmt, ...)
{
    va_list args;

    va_start(args, fmt);
    doadd(fmt, args);
    va_end(args);
}

/*
 * endmsg:
 *	Display a new msg (giving him a chance to see the previous one
 *	if it is up there with the --More--)
 */
int
endmsg()
{
    char ch;

    if (save_msg)
	strcpy(huh, msgbuf);
    if (mpos)
    {
	look(FALSE);
	mvaddstr(0, mpos, "--More--");
	refresh();
	if (!msg_esc)
	    wait_for(' ');
	else
	{
	    while ((ch = readchar()) != ' ')
		if (ch == ESCAPE)
		{
		    msgbuf[0] = '\0';
		    mpos = 0;
		    newpos = 0;
		    msgbuf[0] = '\0';
		    return ESCAPE;
		}
	}
    }
    /*
     * All messages should start with uppercase, except ones that
     * start with a pack addressing character
     */
    if (islower(msgbuf[0]) && !lower_msg && msgbuf[1] != ')')
	msgbuf[0] = (char) toupper(msgbuf[0]);
    mvaddstr(0, 0, msgbuf);
    clrtoeol();
    mpos = newpos;
    newpos = 0;
    msgbuf[0] = '\0';
    refresh();
    return ~ESCAPE;
}

/*
 * doadd:
 *	Perform an add onto the message buffer
 */
void
doadd(char *fmt, va_list args)
{
    static char buf[MAXSTR];

    /*
     * Do the printf into buf
     */
    vsprintf(buf, fmt, args);
    if (strlen(buf) + newpos >= MAXMSG)
        endmsg(); 
    strcat(msgbuf, buf);
    newpos = (int) strlen(msgbuf);
}

/*
 * step_ok:
 *	Returns true if it is ok to step on ch
 */
int
step_ok(int ch)
{
    switch (ch)
    {
	case ' ':
	case '|':
	case '-':
	    return FALSE;
	default:
	    return (!isalpha(ch));
    }
}

/*
 * readchar:
 *	Reads and returns a character, checking for gross input errors
 */
char
readchar()
{
    char ch;

    ch = (char) md_readchar();

    if (ch == 3)
    {
	quit(0);
        return(27);
    }

    return(ch);
}

/*
 * status:
 *	Display the important stats line.  Keep the cursor where it was.
 */
void
status()
{
    register int oy, ox, temp;
    static int hpwidth = 0;
    static int s_hungry = 0;
    static int s_lvl = 0;
    static int s_pur = -1;
    static int s_hp = 0;
    static int s_arm = 0;
    static str_t s_str = 0;
    static int s_exp = 0;
    static char *state_name[] =
    {
	"", "Hungry", "Weak", "Faint"
    };

    /*
     * If nothing has changed since the last status, don't
     * bother.
     */
    temp = (cur_armor != NULL ? cur_armor->o_arm : pstats.s_arm);
    if (s_hp == pstats.s_hpt && s_exp == pstats.s_exp && s_pur == purse
	&& s_arm == temp && s_str == pstats.s_str && s_lvl == level
	&& s_hungry == hungry_state
	&& !stat_msg
	)
	    return;

    s_arm = temp;

    getyx(stdscr, oy, ox);
    if (s_hp != max_hp)
    {
	temp = max_hp;
	s_hp = max_hp;
	for (hpwidth = 0; temp; hpwidth++)
	    temp /= 10;
    }

    /*
     * Save current status
     */
    s_lvl = level;
    s_pur = purse;
    s_hp = pstats.s_hpt;
    s_str = pstats.s_str;
    s_exp = pstats.s_exp; 
    s_hungry = hungry_state;

    if (stat_msg)
    {
	move(0, 0);
        msg("Level: %d  Gold: %-5d  Hp: %*d(%*d)  Str: %2d(%d)  Arm: %-2d  Exp: %d/%ld  %s",
	    level, purse, hpwidth, pstats.s_hpt, hpwidth, max_hp, pstats.s_str,
	    max_stats.s_str, 10 - s_arm, pstats.s_lvl, pstats.s_exp,
	    state_name[hungry_state]);
    }
    else
    {
	move(STATLINE, 0);
                
        printw("Level: %d  Gold: %-5d  Hp: %*d(%*d)  Str: %2d(%d)  Arm: %-2d  Exp: %d/%d  %s",
	    level, purse, hpwidth, pstats.s_hpt, hpwidth, max_hp, pstats.s_str,
	    max_stats.s_str, 10 - s_arm, pstats.s_lvl, pstats.s_exp,
	    state_name[hungry_state]);
    }

    clrtoeol();
    move(oy, ox);
}

/*
 * wait_for
 *	Sit around until the guy types the right key
 */
void
wait_for(int ch)
{
    register char c;

    if (ch == '\n')
        while ((c = readchar()) != '\n' && c != '\r')
	    continue;
    else
        while (readchar() != ch)
	    continue;
}

/*
 * show_win:
 *	Function used to display a window and wait before returning
 */
void
show_win(char *message)
{
    WINDOW *win;

    win = hw;
    wmove(win, 0, 0);
    waddstr(win, message);
    touchwin(win);
    wmove(win, hero.y, hero.x);
    wrefresh(win);
    wait_for(' ');
    clearok(curscr, TRUE);
    touchwin(stdscr);
}
```
