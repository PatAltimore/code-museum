---
title: "extern.c"
program: "Rogue"
program_slug: "rogue"
file_path: "extern.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/extern.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "extern-c"
order: 5
description: "All the global data: flags, tables of monsters and objects, experience levels and the help screen."

summary:
  - point: "The twenty-six monsters, indexed A to Z, are one array of records"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"
  - point: "Each kind of object has a table of names, relative probabilities and values"
    link: "https://en.wikipedia.org/wiki/Cumulative_distribution_function"
    link_label: "Cumulative distribution function"
  - point: "The default favourite fruit is slime-mold, a joke that survived in many later games"
    link: "https://en.wikipedia.org/wiki/Roguelike"
    link_label: "Roguelike"

enhancements:
  - id: "flags"
    line_start: 16
    line_end: 50
    title: "Flags as Plain Booleans"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The file begins with the game's global switches, each with a one-line comment. Some are modes the player sets, such as terse, jump, passgo, see_floor, inv_describe and tombstone. Others are state: whether the Amulet has been found, whether a command is being repeated, whether the player is running, whether a 'hit' message is waiting, whether a shell is open. 'kamikaze' means that fighting to death really is to death. wizard is declared only when the game is built with the MASTER option. pack_used has one entry per letter of the alphabet, true when a letter names an item in the pack. There is no game-state struct; these separate globals are the state."
  - id: "strings"
    line_start: 52
    line_end: 98
    title: "Names, Fruit and the Last Command"
    wikipedia_url: "https://en.wikipedia.org/wiki/Roguelike"
    image_url: ""
    image_caption: ""
    content: "Next come strings and small tables. The player's favourite fruit is a character array spelled out letter by letter as 'slime-mold', and the food messages use it ('my, that was a yummy slime-mold'). It is also an option the player can change. huh holds the last message printed, so it can be repeated, and last_comm and last_dir remember the last command so 'a' can repeat it. The array of trap names holds the eight traps, from a trapdoor to a mysterious trap, with their articles. Because they are initialized here, the 'a' and the 'an' are part of the data and the code never has to guess."
  - id: "armor-and-exp"
    line_start: 99
    line_end: 144
    title: "Armour Class and Experience Levels"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hit_point"
    image_url: ""
    image_caption: ""
    content: "a_class gives the armour class of each type, from 8 for leather armor down to 3 for plate mail; in this game a lower number is better protection. e_levels is the table of experience points needed for each level: 10, 20, 40, 80, 160, 320, 640, 1300, 2600, 5200, 13000, 26000, 50000, 100000, then on up to 8,000,000 and a final zero. The thresholds roughly double with each level, which keeps early levels quick and late ones very slow. The other counters here, such as hungry_state, no_food, no_move and no_command, track the player's conditions."
  - id: "map-and-lists"
    line_start: 146
    line_end: 166
    title: "The Map, the Lists and the Starting Stats"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The level map is one array of PLACE cells, MAXLINES by MAXCOLS. The monsters on the level are a linked list, mlist, and the objects lying about are another, lvl_obj. The player is one global THING, and pointers say which armor, weapon and two rings are in use. INIT_STATS is the starting character: strength 16, no experience, level 1, armour class 10, 12 hit points, a damage of '1x4' and 12 maximum hit points. max_stats keeps the maximum values, so a potion that restores strength has something to restore to."
  - id: "rooms-and-passages"
    line_start: 168
    line_end: 184
    title: "Nine Rooms and Twelve Passages"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "rooms is an array of the level's nine rooms. passages is a separate array, each entry initialized as a room that is both gone and dark. A corridor is treated as a very thin room so that the code that handles rooms, such as lighting, exits and monsters in a room, works unchanged in the passages. The flags ISGONE and ISDARK make the passage invisible in the sense that it has no walls to draw and is never lit. It is a typical economy of the game: when a special case can be a normal case with a flag, it is."
  - id: "monsters"
    line_start: 186
    line_end: 221
    title: "Twenty-Six Monsters, A to Z"
    wikipedia_url: "https://en.wikipedia.org/wiki/Roguelike"
    image_url: ""
    image_caption: ""
    content: "The monster table has exactly twenty-six entries, one for each letter, from aquator to zombie, and a monster is drawn as its capital letter: A, B, C and so on. Each entry gives a name, the probability of carrying treasure, flags and starting stats: strength, experience value, level, armour class, hit points and a damage string. Damage strings use the form 'number x sides' for each attack, separated by slashes, so the dragon's '1x8/1x8/3x10' is three attacks and the vampire's '1x10' is one. Flags make the aquator, dragon, griffin, troll and others mean; the bat, griffin and kestrel fly; the phantom is invisible; the orc is greedy. The venus flytrap's damage is the odd string '%%%x0', and a comment explains that it is written to at run time so that a tool called xstr must not merge it with other strings."
  - id: "things"
    line_start: 223
    line_end: 231
    title: "What the Dungeon Drops"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The things table gives the relative chance that a random item is each of the seven kinds. Potions are 26 percent, scrolls 36, food 16, weapons 7, armour 7, rings 4 and sticks 4, which add to exactly 100. The game's init_probs turns these into running totals so that one random number from 0 to 99 picks a kind. The weight of the table is a statement about the game: most things lying about are scrolls and potions, the stuff of identification, and rings and wands are rare."
  - id: "object-tables"
    line_start: 233
    line_end: 322
    title: "Names, Odds and Worth"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "Six tables describe each kind of object: armour, potions, rings, scrolls, weapons and sticks. Every row has a name, a probability, a worth in gold and two fields for what the player has called it and whether it is known. The probabilities in a table sum to 100, which a check in init.c verifies in the wizard build. Worth is the value used when treasure is added up: a potion of raise level is 250, a ring of regeneration 460, and a potion of poison only 5. The weapons table ends with a null entry marked DO NOT REMOVE, the fake slot for the dragon's breath. The tables are the encyclopaedia the identification game plays with."
  - id: "help"
    line_start: 324
    line_end: 391
    title: "The Command Keys"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "helpstr is the help screen. Each row has a key, a description and a flag saying whether the line prints in the short help. The movement keys are the vi cursor keys: h, j, k and l for the four directions and y, u, b and n for the diagonals, with the capital versions for running and control versions for running until something is adjacent. The rest is a list of one-letter verbs: q to quaff a potion, r to read a scroll, e to eat, w to wield, W to wear, T to take off, P and R to put on and remove a ring, d to drop, t to throw, z to zap a wand, s to search, and > and < for the stairs. The hjkl movement keys became a convention in later roguelikes."
---

```c
/*
 * global variable initializaton
 *
 * @(#)extern.c	4.82 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <curses.h>
#include "rogue.h"

bool after;				/* True if we want after daemons */
bool again;				/* Repeating the last command */
int  noscore;				/* Was a wizard sometime */
bool seenstairs;			/* Have seen the stairs (for lsd) */
bool amulet = FALSE;			/* He found the amulet */
bool door_stop = FALSE;			/* Stop running when we pass a door */
bool fight_flush = FALSE;		/* True if toilet input */
bool firstmove = FALSE;			/* First move after setting door_stop */
bool got_ltc = FALSE;			/* We have gotten the local tty chars */
bool has_hit = FALSE;			/* Has a "hit" message pending in msg */
bool in_shell = FALSE;			/* True if executing a shell */
bool inv_describe = TRUE;		/* Say which way items are being used */
bool jump = FALSE;			/* Show running as series of jumps */
bool kamikaze = FALSE;			/* to_death really to DEATH */
bool lower_msg = FALSE;			/* Messages should start w/lower case */
bool move_on = FALSE;			/* Next move shouldn't pick up items */
bool msg_esc = FALSE;			/* Check for ESC from msg's --More-- */
bool passgo = FALSE;			/* Follow passages */
bool playing = TRUE;			/* True until he quits */
bool q_comm = FALSE;			/* Are we executing a 'Q' command? */
bool running = FALSE;			/* True if player is running */
bool save_msg = TRUE;			/* Remember last msg */
bool see_floor = TRUE;			/* Show the lamp illuminated floor */
bool stat_msg = FALSE;			/* Should status() print as a msg() */
bool terse = FALSE;			/* True if we should be short */
bool to_death = FALSE;			/* Fighting is to the death! */
bool tombstone = TRUE;			/* Print out tombstone at end */
#ifdef MASTER
int wizard = FALSE;			/* True if allows wizard commands */
#endif
bool pack_used[26] = {			/* Is the character used in the pack? */
    FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE,
    FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE,
    FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE, FALSE
};

char dir_ch;				/* Direction from last get_dir() call */
char file_name[MAXSTR];			/* Save file name */
char huh[MAXSTR];			/* The last message printed */
char *p_colors[MAXPOTIONS];		/* Colors of the potions */
char prbuf[2*MAXSTR];			/* buffer for sprintfs */
char *r_stones[MAXRINGS];		/* Stone settings of the rings */
char runch;				/* Direction player is running */
char *s_names[MAXSCROLLS];		/* Names of the scrolls */
char take;				/* Thing she is taking */
char whoami[MAXSTR];			/* Name of player */
char *ws_made[MAXSTICKS];		/* What sticks are made of */
char *ws_type[MAXSTICKS];		/* Is it a wand or a staff */
int  orig_dsusp;			/* Original dsusp char */
char fruit[MAXSTR] =			/* Favorite fruit */
		{ 's', 'l', 'i', 'm', 'e', '-', 'm', 'o', 'l', 'd', '\0' };
char home[MAXSTR] = { '\0' };		/* User's home directory */
char *inv_t_name[] = {
	"Overwrite",
	"Slow",
	"Clear"
};
char l_last_comm = '\0';		/* Last last_comm */
char l_last_dir = '\0';			/* Last last_dir */
char last_comm = '\0';			/* Last command typed */
char last_dir = '\0';			/* Last direction given */
char *tr_name[] = {			/* Names of the traps */
	"a trapdoor",
	"an arrow trap",
	"a sleeping gas trap",
	"a beartrap",
	"a teleport trap",
	"a poison dart trap",
	"a rust trap",
        "a mysterious trap"
};


int n_objs;				/* # items listed in inventory() call */
int ntraps;				/* Number of traps on this level */
int hungry_state = 0;			/* How hungry is he */
int inpack = 0;				/* Number of things in pack */
int inv_type = 0;			/* Type of inventory to use */
int level = 1;				/* What level she is on */
int max_hit;				/* Max damage done to her in to_death */
int max_level;				/* Deepest player has gone */
int mpos = 0;				/* Where cursor is on top line */
int no_food = 0;			/* Number of levels without food */
int a_class[MAXARMORS] = {		/* Armor class for each armor type */
	8,	/* LEATHER */
	7,	/* RING_MAIL */
	7,	/* STUDDED_LEATHER */
	6,	/* SCALE_MAIL */
	5,	/* CHAIN_MAIL */
	4,	/* SPLINT_MAIL */
	4,	/* BANDED_MAIL */
	3,	/* PLATE_MAIL */
};

int count = 0;				/* Number of times to repeat command */
FILE *scoreboard = NULL;	/* File descriptor for score file */
int food_left;				/* Amount of food in hero's stomach */
int lastscore = -1;			/* Score before this turn */
int no_command = 0;			/* Number of turns asleep */
int no_move = 0;			/* Number of turns held in place */
int purse = 0;				/* How much gold he has */
int quiet = 0;				/* Number of quiet turns */
int vf_hit = 0;				/* Number of time flytrap has hit */

int dnum;				/* Dungeon number */
int seed;				/* Random number seed */
int e_levels[] = {
        10L,
	20L,
	40L,
	80L,
       160L,
       320L,
       640L,
      1300L,
      2600L,
      5200L,
     13000L,
     26000L,
     50000L,
    100000L,
    200000L,
    400000L,
    800000L,
   2000000L,
   4000000L,
   8000000L,
	 0L
};

coord delta;				/* Change indicated to get_dir() */
coord oldpos;				/* Position before last look() call */
coord stairs;				/* Location of staircase */

PLACE places[MAXLINES*MAXCOLS];		/* level map */

THING *cur_armor;			/* What he is wearing */
THING *cur_ring[2];			/* Which rings are being worn */
THING *cur_weapon;			/* Which weapon he is weilding */
THING *l_last_pick = NULL;		/* Last last_pick */
THING *last_pick = NULL;		/* Last object picked in get_item() */
THING *lvl_obj = NULL;			/* List of objects on this level */
THING *mlist = NULL;			/* List of monsters on the level */
THING player;				/* His stats */
					/* restart of game */

WINDOW *hw = NULL;			/* used as a scratch window */

#define INIT_STATS { 16, 0, 1, 10, 12, "1x4", 12 }

struct stats max_stats = INIT_STATS;	/* The maximum for the player */

struct room *oldrp;			/* Roomin(&oldpos) */
struct room rooms[MAXROOMS];		/* One for each room -- A level */
struct room passages[MAXPASS] =		/* One for each passage */
{
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} },
    { {0, 0}, {0, 0}, {0, 0}, 0, ISGONE|ISDARK, 0, {{0,0}} }
};

#define ___ 1
#define XX 10
struct monster monsters[26] =
    {
/* Name		 CARRY	FLAG    str, exp, lvl, amr, hpt, dmg */
{ "aquator",	   0,	ISMEAN,	{ XX, 20,   5,   2, ___, "0x0/0x0" } },
{ "bat",	   0,	ISFLY,	{ XX,  1,   1,   3, ___, "1x2" } },
{ "centaur",	  15,	0,	{ XX, 17,   4,   4, ___, "1x2/1x5/1x5" } },
{ "dragon",	 100,	ISMEAN,	{ XX,5000, 10,  -1, ___, "1x8/1x8/3x10" } },
{ "emu",	   0,	ISMEAN,	{ XX,  2,   1,   7, ___, "1x2" } },
{ "venus flytrap", 0,	ISMEAN,	{ XX, 80,   8,   3, ___, "%%%x0" } },
	/* NOTE: the damage is %%% so that xstr won't merge this */
	/* string with others, since it is written on in the program */
{ "griffin",	  20,	ISMEAN|ISFLY|ISREGEN, { XX,2000, 13,   2, ___, "4x3/3x5" } },
{ "hobgoblin",	   0,	ISMEAN,	{ XX,  3,   1,   5, ___, "1x8" } },
{ "ice monster",   0,	0,	{ XX,  5,   1,   9, ___, "0x0" } },
{ "jabberwock",   70,	0,	{ XX,3000, 15,   6, ___, "2x12/2x4" } },
{ "kestrel",	   0,	ISMEAN|ISFLY,	{ XX,  1,   1,   7, ___, "1x4" } },
{ "leprechaun",	   0,	0,	{ XX, 10,   3,   8, ___, "1x1" } },
{ "medusa",	  40,	ISMEAN,	{ XX,200,   8,   2, ___, "3x4/3x4/2x5" } },
{ "nymph",	 100,	0,	{ XX, 37,   3,   9, ___, "0x0" } },
{ "orc",	  15,	ISGREED,{ XX,  5,   1,   6, ___, "1x8" } },
{ "phantom",	   0,	ISINVIS,{ XX,120,   8,   3, ___, "4x4" } },
{ "quagga",	   0,	ISMEAN,	{ XX, 15,   3,   3, ___, "1x5/1x5" } },
{ "rattlesnake",   0,	ISMEAN,	{ XX,  9,   2,   3, ___, "1x6" } },
{ "snake",	   0,	ISMEAN,	{ XX,  2,   1,   5, ___, "1x3" } },
{ "troll",	  50,	ISREGEN|ISMEAN,{ XX, 120, 6, 4, ___, "1x8/1x8/2x6" } },
{ "black unicorn", 0,	ISMEAN,	{ XX,190,   7,  -2, ___, "1x9/1x9/2x9" } },
{ "vampire",	  20,	ISREGEN|ISMEAN,{ XX,350,   8,   1, ___, "1x10" } },
{ "wraith",	   0,	0,	{ XX, 55,   5,   4, ___, "1x6" } },
{ "xeroc",	  30,	0,	{ XX,100,   7,   7, ___, "4x4" } },
{ "yeti",	  30,	0,	{ XX, 50,   4,   6, ___, "1x6/1x6" } },
{ "zombie",	   0,	ISMEAN,	{ XX,  6,   2,   8, ___, "1x8" } }
    };
#undef ___
#undef XX

struct obj_info things[NUMTHINGS] = {
    { 0,			26 },	/* potion */
    { 0,			36 },	/* scroll */
    { 0,			16 },	/* food */
    { 0,			 7 },	/* weapon */
    { 0,			 7 },	/* armor */
    { 0,			 4 },	/* ring */
    { 0,			 4 },	/* stick */
};

struct obj_info arm_info[MAXARMORS] = {
    { "leather armor",		 20,	 20, NULL, FALSE },
    { "ring mail",		 15,	 25, NULL, FALSE },
    { "studded leather armor",	 15,	 20, NULL, FALSE },
    { "scale mail",		 13,	 30, NULL, FALSE },
    { "chain mail",		 12,	 75, NULL, FALSE },
    { "splint mail",		 10,	 80, NULL, FALSE },
    { "banded mail",		 10,	 90, NULL, FALSE },
    { "plate mail",		  5,	150, NULL, FALSE },
};
struct obj_info pot_info[MAXPOTIONS] = {
    { "confusion",		 7,   5, NULL, FALSE },
    { "hallucination",		 8,   5, NULL, FALSE },
    { "poison",			 8,   5, NULL, FALSE },
    { "gain strength",		13, 150, NULL, FALSE },
    { "see invisible",		 3, 100, NULL, FALSE },
    { "healing",		13, 130, NULL, FALSE },
    { "monster detection",	 6, 130, NULL, FALSE },
    { "magic detection",	 6, 105, NULL, FALSE },
    { "raise level",		 2, 250, NULL, FALSE },
    { "extra healing",		 5, 200, NULL, FALSE },
    { "haste self",		 5, 190, NULL, FALSE },
    { "restore strength",	13, 130, NULL, FALSE },
    { "blindness",		 5,   5, NULL, FALSE },
    { "levitation",		 6,  75, NULL, FALSE },
};
struct obj_info ring_info[MAXRINGS] = {
    { "protection",		 9, 400, NULL, FALSE },
    { "add strength",		 9, 400, NULL, FALSE },
    { "sustain strength",	 5, 280, NULL, FALSE },
    { "searching",		10, 420, NULL, FALSE },
    { "see invisible",		10, 310, NULL, FALSE },
    { "adornment",		 1,  10, NULL, FALSE },
    { "aggravate monster",	10,  10, NULL, FALSE },
    { "dexterity",		 8, 440, NULL, FALSE },
    { "increase damage",	 8, 400, NULL, FALSE },
    { "regeneration",		 4, 460, NULL, FALSE },
    { "slow digestion",		 9, 240, NULL, FALSE },
    { "teleportation",		 5,  30, NULL, FALSE },
    { "stealth",		 7, 470, NULL, FALSE },
    { "maintain armor",		 5, 380, NULL, FALSE },
};
struct obj_info scr_info[MAXSCROLLS] = {
    { "monster confusion",		 7, 140, NULL, FALSE },
    { "magic mapping",			 4, 150, NULL, FALSE },
    { "hold monster",			 2, 180, NULL, FALSE },
    { "sleep",				 3,   5, NULL, FALSE },
    { "enchant armor",			 7, 160, NULL, FALSE },
    { "identify potion",		10,  80, NULL, FALSE },
    { "identify scroll",		10,  80, NULL, FALSE },
    { "identify weapon",		 6,  80, NULL, FALSE },
    { "identify armor",		 	 7, 100, NULL, FALSE },
    { "identify ring, wand or staff",	10, 115, NULL, FALSE },
    { "scare monster",			 3, 200, NULL, FALSE },
    { "food detection",			 2,  60, NULL, FALSE },
    { "teleportation",			 5, 165, NULL, FALSE },
    { "enchant weapon",			 8, 150, NULL, FALSE },
    { "create monster",			 4,  75, NULL, FALSE },
    { "remove curse",			 7, 105, NULL, FALSE },
    { "aggravate monsters",		 3,  20, NULL, FALSE },
    { "protect armor",			 2, 250, NULL, FALSE },
};
struct obj_info weap_info[MAXWEAPONS + 1] = {
    { "mace",				11,   8, NULL, FALSE },
    { "long sword",			11,  15, NULL, FALSE },
    { "short bow",			12,  15, NULL, FALSE },
    { "arrow",				12,   1, NULL, FALSE },
    { "dagger",				 8,   3, NULL, FALSE },
    { "two handed sword",		10,  75, NULL, FALSE },
    { "dart",				12,   2, NULL, FALSE },
    { "shuriken",			12,   5, NULL, FALSE },
    { "spear",				12,   5, NULL, FALSE },
    { NULL, 0 },	/* DO NOT REMOVE: fake entry for dragon's breath */
};
struct obj_info ws_info[MAXSTICKS] = {
    { "light",			12, 250, NULL, FALSE },
    { "invisibility",		 6,   5, NULL, FALSE },
    { "lightning",		 3, 330, NULL, FALSE },
    { "fire",			 3, 330, NULL, FALSE },
    { "cold",			 3, 330, NULL, FALSE },
    { "polymorph",		15, 310, NULL, FALSE },
    { "magic missile",		10, 170, NULL, FALSE },
    { "haste monster",		10,   5, NULL, FALSE },
    { "slow monster",		11, 350, NULL, FALSE },
    { "drain life",		 9, 300, NULL, FALSE },
    { "nothing",		 1,   5, NULL, FALSE },
    { "teleport away",		 6, 340, NULL, FALSE },
    { "teleport to",		 6,  50, NULL, FALSE },
    { "cancellation",		 5, 280, NULL, FALSE },
};

struct h_list helpstr[] = {
    {'?',	"	prints help",				TRUE},
    {'/',	"	identify object",			TRUE},
    {'h',	"	left",					TRUE},
    {'j',	"	down",					TRUE},
    {'k',	"	up",					TRUE},
    {'l',	"	right",					TRUE},
    {'y',	"	up & left",				TRUE},
    {'u',	"	up & right",				TRUE},
    {'b',	"	down & left",				TRUE},
    {'n',	"	down & right",				TRUE},
    {'H',	"	run left",				FALSE},
    {'J',	"	run down",				FALSE},
    {'K',	"	run up",				FALSE},
    {'L',	"	run right",				FALSE},
    {'Y',	"	run up & left",				FALSE},
    {'U',	"	run up & right",			FALSE},
    {'B',	"	run down & left",			FALSE},
    {'N',	"	run down & right",			FALSE},
    {CTRL('H'),	"	run left until adjacent",		FALSE},
    {CTRL('J'),	"	run down until adjacent",		FALSE},
    {CTRL('K'),	"	run up until adjacent",			FALSE},
    {CTRL('L'),	"	run right until adjacent",		FALSE},
    {CTRL('Y'),	"	run up & left until adjacent",		FALSE},
    {CTRL('U'),	"	run up & right until adjacent",		FALSE},
    {CTRL('B'),	"	run down & left until adjacent",	FALSE},
    {CTRL('N'),	"	run down & right until adjacent",	FALSE},
    {'\0',	"	<SHIFT><dir>: run that way",		TRUE},
    {'\0',	"	<CTRL><dir>: run till adjacent",	TRUE},
    {'f',	"<dir>	fight till death or near death",	TRUE},
    {'t',	"<dir>	throw something",			TRUE},
    {'m',	"<dir>	move onto without picking up",		TRUE},
    {'z',	"<dir>	zap a wand in a direction",		TRUE},
    {'^',	"<dir>	identify trap type",			TRUE},
    {'s',	"	search for trap/secret door",		TRUE},
    {'>',	"	go down a staircase",			TRUE},
    {'<',	"	go up a staircase",			TRUE},
    {'.',	"	rest for a turn",			TRUE},
    {',',	"	pick something up",			TRUE},
    {'i',	"	inventory",				TRUE},
    {'I',	"	inventory single item",			TRUE},
    {'q',	"	quaff potion",				TRUE},
    {'r',	"	read scroll",				TRUE},
    {'e',	"	eat food",				TRUE},
    {'w',	"	wield a weapon",			TRUE},
    {'W',	"	wear armor",				TRUE},
    {'T',	"	take armor off",			TRUE},
    {'P',	"	put on ring",				TRUE},
    {'R',	"	remove ring",				TRUE},
    {'d',	"	drop object",				TRUE},
    {'c',	"	call object",				TRUE},
    {'a',	"	repeat last command",			TRUE},
    {')',	"	print current weapon",			TRUE},
    {']',	"	print current armor",			TRUE},
    {'=',	"	print current rings",			TRUE},
    {'@',	"	print current stats",			TRUE},
    {'D',	"	recall what's been discovered",		TRUE},
    {'o',	"	examine/set options",			TRUE},
    {CTRL('R'),	"	redraw screen",				TRUE},
    {CTRL('P'),	"	repeat last message",			TRUE},
    {ESCAPE,	"	cancel command",			TRUE},
    {'S',	"	save game",				TRUE},
    {'Q',	"	quit",					TRUE},
    {'!',	"	shell escape",				TRUE},
    {'F',	"<dir>	fight till either of you dies",		TRUE},
    {'v',	"	print version number",			TRUE},
    {0,		NULL }
};
```
