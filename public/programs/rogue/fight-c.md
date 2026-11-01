---
title: "fight.c"
program: "Rogue"
program_slug: "rogue"
file_path: "fight.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/fight.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "fight-c"
order: 13
description: "Combat for both sides: the to-hit roll, damage dice, each monster's special attack, and the messages."

summary:
  - point: "A hit is a twenty-sided roll against a target number built from level and armour class"
    link: "https://en.wikipedia.org/wiki/THAC0"
    link_label: "THAC0"
  - point: "Damage is read from a string like '1x8/1x8/3x10', one attack per slash-separated part"
    link: "https://en.wikipedia.org/wiki/Dice_notation"
    link_label: "Dice notation"
  - point: "Eight monsters have a special effect on a hit: rust, freezing, poison, level drain, holding, theft"
    link: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    link_label: "Rogue"

enhancements:
  - id: "message-tables"
    line_start: 19
    line_end: 57
    title: "Words for Hitting and Missing, and the Strength Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The file starts with the phrases the combat messages choose from. h_names lists four ways to say a hit for the player and four for a monster, such as 'scored an excellent hit on', 'have injured' and 'swing and hit'; m_names lists four misses in each person. Two strength tables follow. str_plus gives the bonus to hit for each strength from 0 to 31, and add_dam gives the bonus to damage. Both are negative for weak characters, zero across the middle range, and a few points for high strength. A table indexed by strength was the usual way in games of this age to turn an ability score into a modifier."
  - id: "fight"
    line_start: 59
    line_end: 133
    title: "The Hero Attacks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "fight handles the player's attack on a monster, in melee or thrown. It cancels any rest and calls runto, so a monster that is attacked starts chasing. If the monster is a xeroc still pretending to be an object, the disguise is dropped with the message 'wait! That's a xeroc!', or 'heavy! That's a nasty critter!' if the hero is hallucinating, and the attack is not made. Then roll_em decides whether the blow hits. A hit prints a message. If the hero's hands are glowing from a scroll of monster confusion, a state called CANHUH, the hit also confuses the monster and the glow fades. If the monster has no hit points left it is killed. A miss prints a miss, or a bounce for a missile."
  - id: "attack"
    line_start: 135
    line_end: 186
    title: "A Monster Attacks the Hero"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "attack is the monster's counterpart. It stops the hero's run and healing, drops a fight-to-the-death if this monster is not the target, and reveals a xeroc. Then it rolls the monster's attacks against the hero's armour. A hit prints a message, except for the ice monster whose effect is its own message. If the hero is dead, death is called with the monster's letter, which is what the tombstone shows. If not, the routine records the most damage taken in one blow, max_hit, and uses it so that a fight to the death stops when the hero's hit points fall to that amount, one more blow of that size being fatal. The special effects follow."
  - id: "effects-air"
    line_start: 187
    line_end: 231
    title: "Rust, Ice and Poison"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "If the monster's special qualities are not cancelled, the type of the monster selects an effect. An aquator, 'A', rusts the hero's armor. The ice monster, 'I', freezes the hero: the run is stopped, 'you are frozen by the ice monster' is printed and the hero loses two or three turns, added to any already owed. If the total goes over BORE_LEVEL, 50, the hero dies. The rattlesnake, 'R', bites; a saving throw against poison fails and strength drops by one, unless a ring of sustain strength is worn, in which case the bite 'momentarily weakens' the hero."
  - id: "effects-drain"
    line_start: 232
    line_end: 264
    title: "Wraiths and Vampires"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "A wraith, 'W', and a vampire, 'V', drain the hero instead. Each hit has a 15 percent chance for a wraith and 30 for a vampire of an extra effect. A wraith takes a level: the hero loses a level of experience, and experience points are reset to just past the lower level's threshold. A hero with no experience at all dies. Both reduce hit points and maximum hit points, by a d10 for the wraith and a d3 for the vampire. Hit points cannot fall below one this way, but a maximum that reaches zero is death. 'You suddenly feel weaker' is the only warning."
  - id: "effects-hold-steal"
    line_start: 265
    line_end: 318
    title: "The Flytrap, the Leprechaun and the Nymph"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The venus flytrap, 'F', holds the hero in place. Each hit raises a counter and rewrites the monster's damage string to 'Nx1' with N the counter, so every hit hurts more than the last, and the hero loses a point of health outright. The leprechaun, 'L', steals gold, one random amount, or five amounts if the hero fails a saving throw, and vanishes. The nymph, 'N', steals a magic item: it looks through the pack for one that is not worn or wielded and picks one at random, takes it and disappears with the message 'she stole' and the item's name. They are the monsters that cost the player things, not health."
  - id: "miss-and-flush"
    line_start: 319
    line_end: 342
    title: "When the Monster Misses"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "If the attack misses and the monster is not an ice monster, a miss message is printed. A flytrap is special here too: even a miss costs the hero hit points equal to the number of times it has hit. The routine then flushes any typed-ahead keys unless a fight to the death is on, so a player who has held down a key does not walk into something by mistake, resets the count, redraws the status line, and returns minus one if the monster vanished during the attack, as it does when a nymph or leprechaun steals."
  - id: "set-mname"
    line_start: 344
    line_end: 371
    title: "What to Call the Monster"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "set_mname chooses the name used in messages. If the hero cannot see the monster and cannot detect monsters, it is 'something', or 'it' in terse mode. If the hero is hallucinating the name of a random monster is used. Otherwise it is 'the' plus the monster's name from the table, in a buffer which starts with the four letters 'the ' so that the rest can simply be copied after them. The game never reveals the name of a monster that is not seen."
  - id: "swing"
    line_start: 373
    line_end: 384
    title: "The To-Hit Roll"
    wikipedia_url: "https://en.wikipedia.org/wiki/THAC0"
    image_url: ""
    image_caption: ""
    content: "swing is the whole to-hit rule, and it is three lines. Roll a twenty-sided die. The target number is twenty minus the attacker's level, minus the defender's armour class. The swing hits if the roll plus the weapon's bonus is at least the target. So a higher-level attacker needs a lower roll, and a lower armour class number means better protection, because it subtracts from the number needed. The same function is used by traps, arrows and darts."
  - id: "roll-em"
    line_start: 386
    line_end: 478
    title: "Rolling Several Attacks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dice_notation"
    image_url: ""
    image_caption: ""
    content: "roll_em resolves one combatant's whole turn. It picks the damage string: the creature's own for an unarmed attack, or the weapon's, or, for a thrown missile that matches the launcher being wielded, the special thrown damage. Rings of increase damage and dexterity add to the weapon. A defender that is not running, which means asleep or held, is hit with a plus four. The defender's armor comes from the armor worn, reduced by rings of protection. Then it loops over the string: read the number of dice, skip the 'x', read the sides, roll to hit using the strength bonus, roll the damage with the plus and strength bonus, and move to the next attack after a slash. A hit on any part counts as a hit."
  - id: "hit-miss-messages"
    line_start: 480
    line_end: 590
    title: "Building the Messages"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "prname gives the printed name of a combatant: 'you' if there is none, with an initial capital when asked. thunk and bounce describe a thrown weapon hitting or missing, with the weapon's name for a weapon and 'you hit' otherwise. hit and miss build the sentence in pieces with addmsg: the attacker, a random verb from the table, and the defender. In terse mode they are just 'hit' and 'miss'. Nothing is printed during a fight to the death, so the player sees one summary instead of dozens of lines. Sentences built from pieces are why the game's messages vary."
  - id: "remove-mon"
    line_start: 592
    line_end: 622
    title: "Taking a Monster Off the Map"
    wikipedia_url: "https://en.wikipedia.org/wiki/Rogue_(video_game)"
    image_url: ""
    image_caption: ""
    content: "remove_mon removes a monster from play. Whatever it was carrying is put down at its position: if it was killed, each item falls to a nearby square, and otherwise it is discarded. The map cell is cleared, the character that was under the monster is redrawn, the monster is unlinked from the list and its target flag, if any, ends the fight to the death. Finally the monster's memory is freed. The same routine serves a kill, a theft and a monster that disappears of its own accord."
  - id: "killed"
    line_start: 624
    line_end: 686
    title: "Killing a Monster"
    wikipedia_url: "https://en.wikipedia.org/wiki/Experience_point"
    image_url: ""
    image_caption: ""
    content: "killed adds the monster's experience value to the hero's. A dead flytrap releases its hold and has its damage string reset to '000x0'. A dead leprechaun gets a pile of gold in its pack, if the level is the deepest so far, which then falls where it died. The monster is removed and a message says 'you have defeated' the monster, or 'Defeated' if a hit message is pending. check_level then sees whether the experience is enough for a new level and raises the hero's level if so. Experience is the only reward for killing a monster, other than what it drops."
---

```c
/*
 * All the fighting gets done here
 *
 * @(#)fight.c	4.67 (Berkeley) 09/06/83
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

#define	EQSTR(a, b)	(strcmp(a, b) == 0)

char *h_names[] = {		/* strings for hitting */
	" scored an excellent hit on ",
	" hit ",
	" have injured ",
	" swing and hit ",
	" scored an excellent hit on ",
	" hit ",
	" has injured ",
	" swings and hits "
};

char *m_names[] = {		/* strings for missing */
	" miss",
	" swing and miss",
	" barely miss",
	" don't hit",
	" misses",
	" swings and misses",
	" barely misses",
	" doesn't hit",
};

/*
 * adjustments to hit probabilities due to strength
 */
static int str_plus[] = {
    -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,
};

/*
 * adjustments to damage done due to strength
 */
static int add_dam[] = {
    -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3,
    3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6
};

/*
 * fight:
 *	The player attacks the monster.
 */
int
fight(coord *mp, THING *weap, bool thrown)
{
    register THING *tp;
    register bool did_hit = TRUE;
    register char *mname, ch;

    /*
     * Find the monster we want to fight
     */
#ifdef MASTER
    if ((tp = moat(mp->y, mp->x)) == NULL)
	debug("Fight what @ %d,%d", mp->y, mp->x);
#else
    tp = moat(mp->y, mp->x);
#endif
    /*
     * Since we are fighting, things are not quiet so no healing takes
     * place.
     */
    count = 0;
    quiet = 0;
    runto(mp);
    /*
     * Let him know it was really a xeroc (if it was one).
     */
    ch = '\0';
    if (tp->t_type == 'X' && tp->t_disguise != 'X' && !on(player, ISBLIND))
    {
	tp->t_disguise = 'X';
	if (on(player, ISHALU)) {
	    ch = (char)(rnd(26) + 'A');
	    mvaddch(tp->t_pos.y, tp->t_pos.x, ch);
	}
	msg(choose_str("heavy!  That's a nasty critter!",
		       "wait!  That's a xeroc!"));
	if (!thrown)
	    return FALSE;
    }
    mname = set_mname(tp);
    did_hit = FALSE;
    has_hit = (terse && !to_death);
    if (roll_em(&player, tp, weap, thrown))
    {
	did_hit = FALSE;
	if (thrown)
	    thunk(weap, mname, terse);
	else
	    hit((char *) NULL, mname, terse);
	if (on(player, CANHUH))
	{
	    did_hit = TRUE;
	    tp->t_flags |= ISHUH;
	    player.t_flags &= ~CANHUH;
	    endmsg();
	    has_hit = FALSE;
	    msg("your hands stop glowing %s", pick_color("red"));
	}
	if (tp->t_stats.s_hpt <= 0)
	    killed(tp, TRUE);
	else if (did_hit && !on(player, ISBLIND))
	    msg("%s appears confused", mname);
	did_hit = TRUE;
    }
    else
	if (thrown)
	    bounce(weap, mname, terse);
	else
	    miss((char *) NULL, mname, terse);
    return did_hit;
}

/*
 * attack:
 *	The monster attacks the player
 */
int
attack(THING *mp)
{
    register char *mname;
    register int oldhp;

    /*
     * Since this is an attack, stop running and any healing that was
     * going on at the time.
     */
    running = FALSE;
    count = 0;
    quiet = 0;
    if (to_death && !on(*mp, ISTARGET))
    {
	to_death = FALSE;
	kamikaze = FALSE;
    }
    if (mp->t_type == 'X' && mp->t_disguise != 'X' && !on(player, ISBLIND))
    {
	mp->t_disguise = 'X';
	if (on(player, ISHALU))
	    mvaddch(mp->t_pos.y, mp->t_pos.x, rnd(26) + 'A');
    }
    mname = set_mname(mp);
    oldhp = pstats.s_hpt;
    if (roll_em(mp, &player, (THING *) NULL, FALSE))
    {
	if (mp->t_type != 'I')
	{
	    if (has_hit)
		addmsg(".  ");
	    hit(mname, (char *) NULL, FALSE);
	}
	else
	    if (has_hit)
		endmsg();
	has_hit = FALSE;
	if (pstats.s_hpt <= 0)
	    death(mp->t_type);	/* Bye bye life ... */
	else if (!kamikaze)
	{
	    oldhp -= pstats.s_hpt;
	    if (oldhp > max_hit)
		max_hit = oldhp;
	    if (pstats.s_hpt <= max_hit)
		to_death = FALSE;
	}
	if (!on(*mp, ISCANC))
	    switch (mp->t_type)
	    {
		case 'A':
		    /*
		     * If an aquator hits, you can lose armor class.
		     */
		    rust_armor(cur_armor);
		when 'I':
		    /*
		     * The ice monster freezes you
		     */
		    player.t_flags &= ~ISRUN;
		    if (!no_command)
		    {
			addmsg("you are frozen");
			if (!terse)
			    addmsg(" by the %s", mname);
			endmsg();
		    }
		    no_command += rnd(2) + 2;
		    if (no_command > BORE_LEVEL)
			death('h');
		when 'R':
		    /*
		     * Rattlesnakes have poisonous bites
		     */
		    if (!save(VS_POISON))
		    {
			if (!ISWEARING(R_SUSTSTR))
			{
			    chg_str(-1);
			    if (!terse)
				msg("you feel a bite in your leg and now feel weaker");
			    else
				msg("a bite has weakened you");
			}
			else if (!to_death)
			{
			    if (!terse)
				msg("a bite momentarily weakens you");
			    else
				msg("bite has no effect");
			}
		    }
		when 'W':
		case 'V':
		    /*
		     * Wraiths might drain energy levels, and Vampires
		     * can steal max_hp
		     */
		    if (rnd(100) < (mp->t_type == 'W' ? 15 : 30))
		    {
			register int fewer;

			if (mp->t_type == 'W')
			{
			    if (pstats.s_exp == 0)
				death('W');		/* All levels gone */
			    if (--pstats.s_lvl == 0)
			    {
				pstats.s_exp = 0;
				pstats.s_lvl = 1;
			    }
			    else
				pstats.s_exp = e_levels[pstats.s_lvl-1]+1;
			    fewer = roll(1, 10);
			}
			else
			    fewer = roll(1, 3);
			pstats.s_hpt -= fewer;
			max_hp -= fewer;
			if (pstats.s_hpt <= 0)
			    pstats.s_hpt = 1;
			if (max_hp <= 0)
			    death(mp->t_type);
			msg("you suddenly feel weaker");
		    }
		when 'F':
		    /*
		     * Venus Flytrap stops the poor guy from moving
		     */
		    player.t_flags |= ISHELD;
		    sprintf(monsters['F'-'A'].m_stats.s_dmg,"%dx1", ++vf_hit);
		    if (--pstats.s_hpt <= 0)
			death('F');
		when 'L':
		{
		    /*
		     * Leperachaun steals some gold
		     */
		    register int lastpurse;

		    lastpurse = purse;
		    purse -= GOLDCALC;
		    if (!save(VS_MAGIC))
			purse -= GOLDCALC + GOLDCALC + GOLDCALC + GOLDCALC;
		    if (purse < 0)
			purse = 0;
		    remove_mon(&mp->t_pos, mp, FALSE);
                    mp=NULL;
		    if (purse != lastpurse)
			msg("your purse feels lighter");
		}
		when 'N':
		{
		    register THING *obj, *steal;
		    register int nobj;

		    /*
		     * Nymph's steal a magic item, look through the pack
		     * and pick out one we like.
		     */
		    steal = NULL;
		    for (nobj = 0, obj = pack; obj != NULL; obj = next(obj))
			if (obj != cur_armor && obj != cur_weapon
			    && obj != cur_ring[LEFT] && obj != cur_ring[RIGHT]
			    && is_magic(obj) && rnd(++nobj) == 0)
				steal = obj;
		    if (steal != NULL)
		    {
			remove_mon(&mp->t_pos, moat(mp->t_pos.y, mp->t_pos.x), FALSE);
                        mp=NULL;
			leave_pack(steal, FALSE, FALSE);
			msg("she stole %s!", inv_name(steal, TRUE));
			discard(steal);
		    }
		}
		otherwise:
		    break;
	    }
    }
    else if (mp->t_type != 'I')
    {
	if (has_hit)
	{
	    addmsg(".  ");
	    has_hit = FALSE;
	}
	if (mp->t_type == 'F')
	{
	    pstats.s_hpt -= vf_hit;
	    if (pstats.s_hpt <= 0)
		death(mp->t_type);	/* Bye bye life ... */
	}
	miss(mname, (char *) NULL, FALSE);
    }
    if (fight_flush && !to_death)
	flush_type();
    count = 0;
    status();
    if (mp == NULL)
        return(-1);
    else
        return(0);
}

/*
 * set_mname:
 *	return the monster name for the given monster
 */
char *
set_mname(THING *tp)
{
    int ch;
    char *mname;
    static char tbuf[MAXSTR] = { 't', 'h', 'e', ' ' };

    if (!see_monst(tp) && !on(player, SEEMONST))
	return (terse ? "it" : "something");
    else if (on(player, ISHALU))
    {
	move(tp->t_pos.y, tp->t_pos.x);
	ch = toascii(inch());
	if (!isupper(ch))
	    ch = rnd(26);
	else
	    ch -= 'A';
	mname = monsters[ch].m_name;
    }
    else
	mname = monsters[tp->t_type - 'A'].m_name;
    strcpy(&tbuf[4], mname);
    return tbuf;
}

/*
 * swing:
 *	Returns true if the swing hits
 */
int
swing(int at_lvl, int op_arm, int wplus)
{
    int res = rnd(20);
    int need = (20 - at_lvl) - op_arm;

    return (res + wplus >= need);
}

/*
 * roll_em:
 *	Roll several attacks
 */
bool
roll_em(THING *thatt, THING *thdef, THING *weap, bool hurl)
{
    register struct stats *att, *def;
    register char *cp;
    register int ndice, nsides, def_arm;
    register bool did_hit = FALSE;
    register int hplus;
    register int dplus;
    register int damage;

    att = &thatt->t_stats;
    def = &thdef->t_stats;
    if (weap == NULL)
    {
	cp = att->s_dmg;
	dplus = 0;
	hplus = 0;
    }
    else
    {
	hplus = (weap == NULL ? 0 : weap->o_hplus);
	dplus = (weap == NULL ? 0 : weap->o_dplus);
	if (weap == cur_weapon)
	{
	    if (ISRING(LEFT, R_ADDDAM))
		dplus += cur_ring[LEFT]->o_arm;
	    else if (ISRING(LEFT, R_ADDHIT))
		hplus += cur_ring[LEFT]->o_arm;
	    if (ISRING(RIGHT, R_ADDDAM))
		dplus += cur_ring[RIGHT]->o_arm;
	    else if (ISRING(RIGHT, R_ADDHIT))
		hplus += cur_ring[RIGHT]->o_arm;
	}
	cp = weap->o_damage;
	if (hurl)
	{
	    if ((weap->o_flags&ISMISL) && cur_weapon != NULL &&
	      cur_weapon->o_which == weap->o_launch)
	    {
		cp = weap->o_hurldmg;
		hplus += cur_weapon->o_hplus;
		dplus += cur_weapon->o_dplus;
	    }
	    else if (weap->o_launch < 0)
		cp = weap->o_hurldmg;
	}
    }
    /*
     * If the creature being attacked is not running (alseep or held)
     * then the attacker gets a plus four bonus to hit.
     */
    if (!on(*thdef, ISRUN))
	hplus += 4;
    def_arm = def->s_arm;
    if (def == &pstats)
    {
	if (cur_armor != NULL)
	    def_arm = cur_armor->o_arm;
	if (ISRING(LEFT, R_PROTECT))
	    def_arm -= cur_ring[LEFT]->o_arm;
	if (ISRING(RIGHT, R_PROTECT))
	    def_arm -= cur_ring[RIGHT]->o_arm;
    }
    while(cp != NULL && *cp != '\0')
    {
	ndice = atoi(cp);
	if ((cp = strchr(cp, 'x')) == NULL)
	    break;
	nsides = atoi(++cp);
	if (swing(att->s_lvl, def_arm, hplus + str_plus[att->s_str]))
	{
	    int proll;

	    proll = roll(ndice, nsides);
#ifdef MASTER
	    if (ndice + nsides > 0 && proll <= 0)
		debug("Damage for %dx%d came out %d, dplus = %d, add_dam = %d, def_arm = %d", ndice, nsides, proll, dplus, add_dam[att->s_str], def_arm);
#endif
	    damage = dplus + proll + add_dam[att->s_str];
	    def->s_hpt -= max(0, damage);
	    did_hit = TRUE;
	}
	if ((cp = strchr(cp, '/')) == NULL)
	    break;
	cp++;
    }
    return did_hit;
}

/*
 * prname:
 *	The print name of a combatant
 */
char *
prname(char *mname, bool upper)
{
    static char tbuf[MAXSTR];

    *tbuf = '\0';
    if (mname == 0)
	strcpy(tbuf, "you"); 
    else
	strcpy(tbuf, mname);
    if (upper)
	*tbuf = (char) toupper(*tbuf);
    return tbuf;
}

/*
 * thunk:
 *	A missile hits a monster
 */
void
thunk(THING *weap, char *mname, bool noend)
{
    if (to_death)
	return;
    if (weap->o_type == WEAPON)
	addmsg("the %s hits ", weap_info[weap->o_which].oi_name);
    else
	addmsg("you hit ");
    addmsg("%s", mname);
    if (!noend)
	endmsg();
}

/*
 * hit:
 *	Print a message to indicate a succesful hit
 */

void
hit(char *er, char *ee, bool noend)
{
    int i;
    char *s;
    extern char *h_names[];

    if (to_death)
	return;
    addmsg(prname(er, TRUE));
    if (terse)
	s = " hit";
    else
    {
	i = rnd(4);
	if (er != NULL)
	    i += 4;
	s = h_names[i];
    }
    addmsg(s);
    if (!terse)
	addmsg(prname(ee, FALSE));
    if (!noend)
	endmsg();
}

/*
 * miss:
 *	Print a message to indicate a poor swing
 */
void
miss(char *er, char *ee, bool noend)
{
    int i;
    extern char *m_names[];

    if (to_death)
	return;
    addmsg(prname(er, TRUE));
    if (terse)
	i = 0;
    else
	i = rnd(4);
    if (er != NULL)
	i += 4;
    addmsg(m_names[i]);
    if (!terse)
	addmsg(" %s", prname(ee, FALSE));
    if (!noend)
	endmsg();
}

/*
 * bounce:
 *	A missile misses a monster
 */
void
bounce(THING *weap, char *mname, bool noend)
{
    if (to_death)
	return;
    if (weap->o_type == WEAPON)
	addmsg("the %s misses ", weap_info[weap->o_which].oi_name);
    else
	addmsg("you missed ");
    addmsg(mname);
    if (!noend)
	endmsg();
}

/*
 * remove_mon:
 *	Remove a monster from the screen
 */
void
remove_mon(coord *mp, THING *tp, bool waskill)
{
    register THING *obj, *nexti;

    for (obj = tp->t_pack; obj != NULL; obj = nexti)
    {
	nexti = next(obj);
	obj->o_pos = tp->t_pos;
	detach(tp->t_pack, obj);
	if (waskill)
	    fall(obj, FALSE);
	else
	    discard(obj);
    }
    moat(mp->y, mp->x) = NULL;
    mvaddch(mp->y, mp->x, tp->t_oldch);
    detach(mlist, tp);
    if (on(*tp, ISTARGET))
    {
	kamikaze = FALSE;
	to_death = FALSE;
	if (fight_flush)
	    flush_type();
    }
    discard(tp);
}

/*
 * killed:
 *	Called to put a monster to death
 */
void
killed(THING *tp, bool pr)
{
    char *mname;

    pstats.s_exp += tp->t_stats.s_exp;

    /*
     * If the monster was a venus flytrap, un-hold him
     */
    switch (tp->t_type)
    {
	case 'F':
	    player.t_flags &= ~ISHELD;
	    vf_hit = 0;
	    strcpy(monsters['F'-'A'].m_stats.s_dmg, "000x0");
	when 'L':
	{
	    THING *gold;

	    if (fallpos(&tp->t_pos, &tp->t_room->r_gold) && level >= max_level)
	    {
		gold = new_item();
		gold->o_type = GOLD;
		gold->o_goldval = GOLDCALC;
		if (save(VS_MAGIC))
		    gold->o_goldval += GOLDCALC + GOLDCALC
				     + GOLDCALC + GOLDCALC;
		attach(tp->t_pack, gold);
	    }
	}
    }
    /*
     * Get rid of the monster.
     */
    mname = set_mname(tp);
    remove_mon(&tp->t_pos, tp, TRUE);
    if (pr)
    {
	if (has_hit)
	{
	    addmsg(".  Defeated ");
	    has_hit = FALSE;
	}
	else
	{
	    if (!terse)
		addmsg("you have ");
	    addmsg("defeated ");
	}
	msg(mname);
    }
    /*
     * Do adjustments if he went up a level
     */
    check_level();
    if (fight_flush)
	flush_type();
}
```
