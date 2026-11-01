---
title: "rip.c"
program: "Rogue"
program_slug: "rogue"
file_path: "rip.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/rip.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "rip-c"
order: 29
description: "The end of a game: the tombstone, the score table, the winner's tally of loot, and the names of killers."

summary:
  - point: "Death is permanent: the hero's gold is docked and the game ends with a tombstone drawn in text"
    link: "https://en.wikipedia.org/wiki/Permadeath"
    link_label: "Permadeath"
  - point: "The score table is a shared file of ten entries, locked while it is written"
    link: "https://en.wikipedia.org/wiki/High_score"
    link_label: "High score"
  - point: "A winner's score adds up the worth of everything in the pack"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "tombstone-art"
    line_start: 25
    line_end: 40
    title: "The Tombstone"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII_art"
    image_url: ""
    image_caption: ""
    content: "The tombstone is an array of strings ending in a zero: an outline of a gravestone with 'REST IN PEACE', a blank for the hero's name, the words 'killed by a', and the year 1980 as a placeholder. The last line of grass is a row of slashes, parentheses and underscores. death will write the real name, amount of gold, killer and year over it with curses calls. A picture made of keyboard characters was all that a text terminal could show."
  - id: "score-start"
    line_start: 42
    line_end: 111
    title: "Setting Up the Score Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/High_score"
    image_url: ""
    image_caption: ""
    content: "score takes an amount, a flag for how the game ended and the killer's letter. The flags are 0 killed, 1 quit, 2 total winner and 3 killed with the Amulet. It first prepares the table. For a finished game, it waits for return, closes curses, restores the terminal and frees the windows 'to guarantee' there is memory for the table. It then allocates room for the entries and fills each with random bytes and a score of zero, so unused entries are marked only by that zero score. In wizard builds, typing 'names' or 'edit' at the prompt chooses a mode for showing real names or deleting entries."
  - id: "score-insert"
    line_start: 112
    line_end: 156
    title: "Finding Her Place"
    wikipedia_url: "https://en.wikipedia.org/wiki/High_score"
    image_url: ""
    image_caption: ""
    content: "rd_score reads the saved table. Unless scoring is turned off, the new score is placed above the first entry that is lower. Unless the allscore option was compiled in, a player, identified by user id, may hold only one place in the table apart from winning scores: a score that would fall below the player's own earlier entry is not entered, and a higher one pushes the older entry out. The new entry gets the score, the player's name, the flag, the level reached, or the deepest level for a winner, the killer and the uid."
  - id: "score-print"
    line_start: 157
    line_end: 220
    title: "Printing and Saving the Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/High_score"
    image_url: ""
    image_caption: ""
    content: "The table is printed under a heading, 'Top Ten Rogueists' for the default build or 'Top Ten Scores' if all scores are kept. Each line has the rank, score, name, how it ended and the level, followed by 'by' and the killer's name for deaths. The hero's own entry is printed in standout. Entries with a score of zero end the list. In wizard builds, the real user name can be shown, or entries can be deleted one by one. Finally, if the table changed, lock_sc takes a lock on the file, wr_score writes it with interrupts ignored so a keystroke does not leave it half written, and the lock is released."
  - id: "death"
    line_start: 222
    line_end: 285
    title: "You Die"
    wikipedia_url: "https://en.wikipedia.org/wiki/Permadeath"
    image_url: ""
    image_caption: ""
    content: "death is called with the letter of the killer. It takes a tenth of the gold from the hero first, with interrupts ignored. With the tombstone option off, it prints a single line, 'Killed by a kestrel with 45 gold', where the article is left out for starvation and hypothermia. With it on, it draws the stone, then prints the killer at line 17, the name at line 14, 'N Au' for the gold on line 15 and the year taken from the clock on line 18. An 'n' written after the 'a' on the tombstone makes 'an' where needed. center, below it, returns the column that centres a string on the stone. Last the score is posted and the game exits."
  - id: "total-winner-banner"
    line_start: 287
    line_end: 319
    title: "Escaping Alive"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "total_winner is called when the hero climbs out of the dungeon with the Amulet. It clears the screen and draws, in inverse video, a banner in letters made of at-signs, followed by 'Congratulations, you have made it to the light of day!' and a short story: the hero sells the loot and is admitted to the Fighters' Guild. Then it waits for space. A winner does not lose any gold, unlike one who dies."
  - id: "total-winner-tally"
    line_start: 320
    line_end: 386
    title: "Counting the Loot"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The tally goes down the pack and prices each item. Food is two a ration. A weapon is its base worth times three times its bonuses plus its count. Armour is its base worth plus a hundred times 9 minus its armour class, plus ten for each point better than standard. Scrolls and potions are their worth times count, halved if the kind was not yet known, and then learned. Rings are worth their base plus a hundred per point of bonus, or ten instead if the bonus is not positive, and sticks their base plus twenty a charge. Rings and sticks that were not yet identified are worth half, and the tally identifies them. The Amulet is worth 1000. The totals are added to the gold, and the score posted as a winner."
  - id: "killname"
    line_start: 388
    line_end: 430
    title: "Naming the Killer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "killname turns the letter in the score table or on the tombstone into words. A capital letter is a monster, and its name comes from the monster table. A lower-case letter is a thing that is not a monster: arrow, bolt, dart, hypothermia or starvation. Any other character gives 'Wally the Wonder Badger'. The result is given an article, 'a' or 'an' by vowelstr, if the entry has the flag for it and the caller asks. Hypothermia is what the ice monster causes in fight.c, and the arrow and dart come from traps in move.c."
  - id: "death-monst"
    line_start: 432
    line_end: 449
    title: "A Random Killer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "death_monst picks a random killer, from all 26 monsters, the arrow, bolt, dart, hypothermia and starvation, or the blank that gives the badger. main.c uses it when the game is started with the -d flag, which shows a death for testing: it sets a random level and a random amount of gold and calls death directly."
---

```c
/*
 * File for the fun ends
 * Death or a total win
 *
 * @(#)rip.c	4.57 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <signal.h>
#include <sys/types.h>
#include <ctype.h>
#include <fcntl.h>
#include <curses.h>
#include "rogue.h"
#include "score.h"

static char *rip[] = {
"                       __________\n",
"                      /          \\\n",
"                     /    REST    \\\n",
"                    /      IN      \\\n",
"                   /     PEACE      \\\n",
"                  /                  \\\n",
"                  |                  |\n",
"                  |                  |\n",
"                  |   killed by a    |\n",
"                  |                  |\n",
"                  |       1980       |\n",
"                 *|     *  *  *      | *\n",
"         ________)/\\\\_//(\\/(/\\)/\\//\\/|_)_______\n",
    0
};

/*
 * score:
 *	Figure score and post it.
 */
/* VARARGS2 */

void
score(int amount, int flags, char monst)
{
    SCORE *scp;
    int i;
    SCORE *sc2;
    SCORE *top_ten, *endp;
# ifdef MASTER
    int prflags = 0;
# endif
    void (*fp)(int);
    unsigned int uid;
    static char *reason[] = {
	"killed",
	"quit",
	"A total winner",
	"killed with Amulet"
    };

    start_score();

 if (flags >= 0
#ifdef MASTER
            || wizard
#endif
        )
    {
	mvaddstr(LINES - 1, 0 , "[Press return to continue]");
        refresh();
        wgetnstr(stdscr,prbuf,80);
 	endwin();
        printf("\n");
        resetltchars();
	/*
	 * free up space to "guarantee" there is space for the top_ten
	 */
	delwin(stdscr);
	delwin(curscr);
	if (hw != NULL)
	    delwin(hw);
    }

    top_ten = (SCORE *) malloc(numscores * sizeof (SCORE));
    endp = &top_ten[numscores];
    for (scp = top_ten; scp < endp; scp++)
    {
	scp->sc_score = 0;
	for (i = 0; i < MAXSTR; i++)
	    scp->sc_name[i] = (unsigned char) rnd(255);
	scp->sc_flags = RN;
	scp->sc_level = RN;
	scp->sc_monster = (unsigned short) RN;
	scp->sc_uid = RN;
    }

    signal(SIGINT, SIG_DFL);

#ifdef MASTER
    if (wizard)
	if (strcmp(prbuf, "names") == 0)
	    prflags = 1;
	else if (strcmp(prbuf, "edit") == 0)
	    prflags = 2;
#endif
    rd_score(top_ten);
    /*
     * Insert her in list if need be
     */
    sc2 = NULL;
    if (!noscore)
    {
	uid = md_getuid();
	for (scp = top_ten; scp < endp; scp++)
	    if (amount > scp->sc_score)
		break;
	    else if (!allscore &&	/* only one score per nowin uid */
		flags != 2 && scp->sc_uid == uid && scp->sc_flags != 2)
		    scp = endp;
	if (scp < endp)
	{
	    if (flags != 2 && !allscore)
	    {
		for (sc2 = scp; sc2 < endp; sc2++)
		{
		    if (sc2->sc_uid == uid && sc2->sc_flags != 2)
			break;
		}
		if (sc2 >= endp)
		    sc2 = endp - 1;
	    }
	    else
		sc2 = endp - 1;
	    while (sc2 > scp)
	    {
		*sc2 = sc2[-1];
		sc2--;
	    }
	    scp->sc_score = amount;
	    strncpy(scp->sc_name, whoami, MAXSTR);
	    scp->sc_flags = flags;
	    if (flags == 2)
		scp->sc_level = max_level;
	    else
		scp->sc_level = level;
	    scp->sc_monster = monst;
	    scp->sc_uid = uid;
	    sc2 = scp;
	}
    }
    /*
     * Print the list
     */
    if (flags != -1)
	putchar('\n');
    printf("Top %s %s:\n", Numname, allscore ? "Scores" : "Rogueists");
    printf("   Score Name\n");
    for (scp = top_ten; scp < endp; scp++)
    {
	if (scp->sc_score) {
	    if (sc2 == scp)
            md_raw_standout();
	    printf("%2d %5d %s: %s on level %d", (int) (scp - top_ten + 1),
		scp->sc_score, scp->sc_name, reason[scp->sc_flags],
		scp->sc_level);
	    if (scp->sc_flags == 0 || scp->sc_flags == 3)
		printf(" by %s", killname((char) scp->sc_monster, TRUE));
#ifdef MASTER
	    if (prflags == 1)
	    {
	    printf(" (%s)", md_getrealname(scp->sc_uid));
	    }
	    else if (prflags == 2)
	    {
		fflush(stdout);
		(void) fgets(prbuf,10,stdin);
		if (prbuf[0] == 'd')
		{
		    for (sc2 = scp; sc2 < endp - 1; sc2++)
			*sc2 = *(sc2 + 1);
		    sc2 = endp - 1;
		    sc2->sc_score = 0;
		    for (i = 0; i < MAXSTR; i++)
			sc2->sc_name[i] = (char) rnd(255);
		    sc2->sc_flags = RN;
		    sc2->sc_level = RN;
		    sc2->sc_monster = (unsigned short) RN;
		    scp--;
		}
	    }
	    else
#endif /* MASTER */
                printf(".");
	    if (sc2 == scp)
		    md_raw_standend();
            putchar('\n');
	}
	else
	    break;
    }
    /*
     * Update the list file
     */
    if (sc2 != NULL)
    {
	if (lock_sc())
	{
	    fp = signal(SIGINT, SIG_IGN);
	    wr_score(top_ten);
	    unlock_sc();
	    signal(SIGINT, fp);
	}
    }
}

/*
 * death:
 *	Do something really fun when he dies
 */

void
death(char monst)
{
    char **dp, *killer;
    struct tm *lt;
    static time_t date;
    struct tm *localtime();

    signal(SIGINT, SIG_IGN);
    purse -= purse / 10;
    signal(SIGINT, leave);
    clear();
    killer = killname(monst, FALSE);
    if (!tombstone)
    {
	mvprintw(LINES - 2, 0, "Killed by ");
	killer = killname(monst, FALSE);
	if (monst != 's' && monst != 'h')
	    printw("a%s ", vowelstr(killer));
	printw("%s with %d gold", killer, purse);
    }
    else
    {
	time(&date);
	lt = localtime(&date);
	move(8, 0);
	dp = rip;
	while (*dp)
	    addstr(*dp++);
	mvaddstr(17, center(killer), killer);
	if (monst == 's' || monst == 'h')
	    mvaddch(16, 32, ' ');
	else
	    mvaddstr(16, 33, vowelstr(killer));
	mvaddstr(14, center(whoami), whoami);
	sprintf(prbuf, "%d Au", purse);
	move(15, center(prbuf));
	addstr(prbuf);
	sprintf(prbuf, "%4d", 1900+lt->tm_year);
	mvaddstr(18, 26, prbuf);
    }
    move(LINES - 1, 0);
    refresh();
    score(purse, amulet ? 3 : 0, monst);
    printf("[Press return to continue]");
    fflush(stdout);
    (void) fgets(prbuf,10,stdin);
    my_exit(0);
}

/*
 * center:
 *	Return the index to center the given string
 */
int
center(char *str)
{
    return 28 - (((int)strlen(str) + 1) / 2);
}

/*
 * total_winner:
 *	Code for a winner
 */

void
total_winner()
{
    THING *obj;
    struct obj_info *op;
    int worth = 0;
    int oldpurse;

    clear();
    standout();
    addstr("                                                               \n");
    addstr("  @   @               @   @           @          @@@  @     @  \n");
    addstr("  @   @               @@ @@           @           @   @     @  \n");
    addstr("  @   @  @@@  @   @   @ @ @  @@@   @@@@  @@@      @  @@@    @  \n");
    addstr("   @@@@ @   @ @   @   @   @     @ @   @ @   @     @   @     @  \n");
    addstr("      @ @   @ @   @   @   @  @@@@ @   @ @@@@@     @   @     @  \n");
    addstr("  @   @ @   @ @  @@   @   @ @   @ @   @ @         @   @  @     \n");
    addstr("   @@@   @@@   @@ @   @   @  @@@@  @@@@  @@@     @@@   @@   @  \n");
    addstr("                                                               \n");
    addstr("     Congratulations, you have made it to the light of day!    \n");
    standend();
    addstr("\nYou have joined the elite ranks of those who have escaped the\n");
    addstr("Dungeons of Doom alive.  You journey home and sell all your loot at\n");
    addstr("a great profit and are admitted to the Fighters' Guild.\n");
    mvaddstr(LINES - 1, 0, "--Press space to continue--");
    refresh();
    wait_for(' ');
    clear();
    mvaddstr(0, 0, "   Worth  Item\n");
    oldpurse = purse;
    for (obj = pack; obj != NULL; obj = next(obj))
    {
	switch (obj->o_type)
	{
	    case FOOD:
		worth = 2 * obj->o_count;
	    when WEAPON:
		worth = weap_info[obj->o_which].oi_worth;
		worth *= 3 * (obj->o_hplus + obj->o_dplus) + obj->o_count;
		obj->o_flags |= ISKNOW;
	    when ARMOR:
		worth = arm_info[obj->o_which].oi_worth;
		worth += (9 - obj->o_arm) * 100;
		worth += (10 * (a_class[obj->o_which] - obj->o_arm));
		obj->o_flags |= ISKNOW;
	    when SCROLL:
		worth = scr_info[obj->o_which].oi_worth;
		worth *= obj->o_count;
		op = &scr_info[obj->o_which];
		if (!op->oi_know)
		    worth /= 2;
		op->oi_know = TRUE;
	    when POTION:
		worth = pot_info[obj->o_which].oi_worth;
		worth *= obj->o_count;
		op = &pot_info[obj->o_which];
		if (!op->oi_know)
		    worth /= 2;
		op->oi_know = TRUE;
	    when RING:
		op = &ring_info[obj->o_which];
		worth = op->oi_worth;
		if (obj->o_which == R_ADDSTR || obj->o_which == R_ADDDAM ||
		    obj->o_which == R_PROTECT || obj->o_which == R_ADDHIT)
		{
			if (obj->o_arm > 0)
			    worth += obj->o_arm * 100;
			else
			    worth = 10;
		}
		if (!(obj->o_flags & ISKNOW))
		    worth /= 2;
		obj->o_flags |= ISKNOW;
		op->oi_know = TRUE;
	    when STICK:
		op = &ws_info[obj->o_which];
		worth = op->oi_worth;
		worth += 20 * obj->o_charges;
		if (!(obj->o_flags & ISKNOW))
		    worth /= 2;
		obj->o_flags |= ISKNOW;
		op->oi_know = TRUE;
	    when AMULET:
		worth = 1000;
	}
	if (worth < 0)
	    worth = 0;
	printw("%c) %5d  %s\n", obj->o_packch, worth, inv_name(obj, FALSE));
	purse += worth;
    }
    printw("   %5d  Gold Pieces          ", oldpurse);
    refresh();
    score(purse, 2, ' ');
    my_exit(0);
}

/*
 * killname:
 *	Convert a code to a monster name
 */
char *
killname(char monst, bool doart)
{
    struct h_list *hp;
    char *sp;
    bool article;
    static struct h_list nlist[] = {
	{'a',	"arrow",		TRUE},
	{'b',	"bolt",			TRUE},
	{'d',	"dart",			TRUE},
	{'h',	"hypothermia",		FALSE},
	{'s',	"starvation",		FALSE},
	{'\0'}
    };

    if (isupper(monst))
    {
	sp = monsters[monst-'A'].m_name;
	article = TRUE;
    }
    else
    {
	sp = "Wally the Wonder Badger";
	article = FALSE;
	for (hp = nlist; hp->h_ch; hp++)
	    if (hp->h_ch == monst)
	    {
		sp = hp->h_desc;
		article = hp->h_print;
		break;
	    }
    }
    if (doart && article)
	sprintf(prbuf, "a%s ", vowelstr(sp));
    else
	prbuf[0] = '\0';
    strcat(prbuf, sp);
    return prbuf;
}

/*
 * death_monst:
 *	Return a monster appropriate for a random death.
 */
char
death_monst()
{
    static char poss[] =
    {
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
	'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
	'Y', 'Z', 'a', 'b', 'h', 'd', 's',
	' '	/* This is provided to generate the "Wally the Wonder Badger"
		   message for killer */
    };

    return poss[rnd(sizeof poss / sizeof (char))];
}
```
