---
title: "p_inter.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/p_inter.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/p_inter.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "p-inter-c"
order: 10
description: "This file handles player interactions, collisions, and damage mechanics in DOOM, showcasing the game's innovative approach to gameplay mechanics."

summary:
  - point: "Defines ammo and weapon pickup logic"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "Implements player health and armor systems"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "Introduces power-up mechanics like invulnerability"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "Handles monster death and item drops"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "Manages damage calculations and player reactions"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"

enhancements:
  - id: "ammo-pickup-mechanics"
    line_start: 61
    line_end: 159
    title: "Why DOOM's ammo pickups feel so rewarding"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_GiveAmmo` function governs how players acquire ammunition in DOOM. It calculates the amount of ammo added based on the game's difficulty level and ensures players never exceed their maximum ammo capacity. If a player is out of ammo, the function automatically selects a new weapon, prioritizing the most powerful available. This design ensures smooth gameplay flow, preventing players from being stuck without a viable weapon. In 1993, this was a crucial innovation, as many games of the era lacked dynamic weapon-switching mechanics. John Carmack and the team at id Software aimed to create a fast-paced experience where players could focus on action rather than inventory management. This approach influenced later FPS games like Quake and Half-Life, which adopted similar systems for seamless weapon and ammo management."
  - id: "weapon-pickup-logic"
    line_start: 162
    line_end: 219
    title: "The logic behind DOOM's weapon pickups"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_GiveWeapon` function handles the acquisition of weapons, ensuring players receive appropriate ammo when picking up a weapon. It differentiates between dropped weapons and those placed in the environment, granting fewer resources for dropped items. This subtle distinction reflects the game's emphasis on resource management and strategic gameplay. In multiplayer deathmatches, weapons remain available for all players, encouraging competitive play. The function also triggers sound effects and visual feedback, enhancing the player's sense of accomplishment. This system was groundbreaking in 1993, as it combined immersive feedback with practical gameplay mechanics. The influence of this design can be seen in modern FPS games like Call of Duty and Destiny, where weapon pickups are integral to gameplay."
  - id: "health-and-armor-systems"
    line_start: 223
    line_end: 265
    title: "How DOOM balanced health and armor mechanics"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_GiveBody` and `P_GiveArmor` functions manage player health and armor acquisition. These systems ensure players can't exceed predefined limits, maintaining balance and challenge. Health items like medikits and stimpacks restore health, while armor types provide varying levels of protection. The design reflects id Software's focus on creating a challenging yet fair gameplay experience. In the early 1990s, health and armor systems were relatively simple in games, but DOOM's implementation added depth by introducing limits and strategic choices. This approach influenced later games like Halo, which expanded on the concept with regenerating shields and health packs."
  - id: "power-up-mechanics"
    line_start: 285
    line_end: 330
    title: "The power-ups that defined DOOM's gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_GivePower` function governs the acquisition of power-ups, such as invulnerability, invisibility, and berserk strength. Each power-up provides a unique advantage, encouraging players to adapt their strategies. For example, invulnerability allows players to survive intense combat, while berserk strength enhances melee attacks. The function also prevents redundant pickups, ensuring players don't waste resources. In 1993, power-ups were a staple of arcade games, but DOOM elevated their importance by integrating them into its fast-paced gameplay. This innovation influenced countless FPS titles, including Unreal Tournament and Overwatch, where power-ups play a central role in competitive play."
  - id: "special-item-interactions"
    line_start: 334
    line_end: 660
    title: "How DOOM made item pickups satisfying"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_TouchSpecialThing` function handles interactions with special items, such as keys, health bonuses, and weapons. It ensures items are within reach and provides feedback through sound effects and messages. This function also manages multiplayer scenarios, allowing all players to access critical items like keys. The design reflects id Software's commitment to creating an immersive experience, where every pickup feels impactful. In the early 1990s, item interactions were often simplistic, but DOOM's approach added depth and polish. This system influenced modern games like Borderlands, where item pickups are accompanied by satisfying audio-visual effects."
  - id: "monster-death-and-item-drops"
    line_start: 663
    line_end: 757
    title: "The mechanics behind DOOM's monster deaths"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_KillMobj` function governs monster deaths and item drops. When a monster dies, it spawns items like ammo or weapons, depending on its type. This mechanic rewards players for defeating enemies, encouraging aggressive gameplay. The function also handles player deaths, ensuring a smooth transition to the post-death state. In 1993, this level of detail was rare in games, as most titles featured static death animations. DOOM's dynamic system added replayability and depth, influencing later games like Diablo, where enemies drop loot upon defeat."
  - id: "damage-calculation-and-reactions"
    line_start: 762
    line_end: 916
    title: "How DOOM calculated damage and reactions"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_DamageMobj` function calculates damage and manages reactions for both players and monsters. It considers factors like armor, invulnerability, and environmental hazards, ensuring a balanced experience. The function also handles player-specific mechanics, such as tactile feedback for the console player. In 1993, damage systems were often simplistic, but DOOM's implementation added complexity and nuance. This innovation influenced later FPS games like Counter-Strike, where damage calculations and player reactions are central to gameplay."

---

```cpp
//-----------------------------------------------------------------------------
//
// $Id:$
//
// Copyright (C) 1993-1996 by id Software, Inc.
//
// This source is available for distribution and/or modification
// only under the terms of the DOOM Source Code License as
// published by id Software. All rights reserved.
//
// The source is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// FITNESS FOR A PARTICULAR PURPOSE. See the DOOM Source Code License
// for more details.
//
// $Log:$
//
// DESCRIPTION:
//	Handling interactions (i.e., collisions).
//
//-----------------------------------------------------------------------------


static const char
rcsid[] = "$Id: p_inter.c,v 1.4 1997/02/03 22:45:11 b1 Exp $";


// Data.
#include "doomdef.h"
#include "dstrings.h"
#include "sounds.h"

#include "doomstat.h"

#include "m_random.h"
#include "i_system.h"

#include "am_map.h"

#include "p_local.h"

#include "s_sound.h"

#ifdef __GNUG__
#pragma implementation "p_inter.h"
#endif
#include "p_inter.h"


#define BONUSADD	6




// a weapon is found with two clip loads,
// a big item has five clip loads
int	maxammo[NUMAMMO] = {200, 50, 300, 50};
int	clipammo[NUMAMMO] = {10, 4, 20, 1};


//
// GET STUFF
//

//
// P_GiveAmmo
// Num is the number of clip loads,
// not the individual count (0= 1/2 clip).
// Returns false if the ammo can't be picked up at all
//

boolean
P_GiveAmmo
( player_t*	player,
  ammotype_t	ammo,
  int		num )
{
    int		oldammo;
	
    if (ammo == am_noammo)
	return false;
		
    if (ammo < 0 || ammo > NUMAMMO)
	I_Error ("P_GiveAmmo: bad type %i", ammo);
		
    if ( player->ammo[ammo] == player->maxammo[ammo]  )
	return false;
		
    if (num)
	num *= clipammo[ammo];
    else
	num = clipammo[ammo]/2;
    
    if (gameskill == sk_baby
	|| gameskill == sk_nightmare)
    {
	// give double ammo in trainer mode,
	// you'll need in nightmare
	num <<= 1;
    }
    
		
    oldammo = player->ammo[ammo];
    player->ammo[ammo] += num;

    if (player->ammo[ammo] > player->maxammo[ammo])
	player->ammo[ammo] = player->maxammo[ammo];

    // If non zero ammo, 
    // don't change up weapons,
    // player was lower on purpose.
    if (oldammo)
	return true;	

    // We were down to zero,
    // so select a new weapon.
    // Preferences are not user selectable.
    switch (ammo)
    {
      case am_clip:
	if (player->readyweapon == wp_fist)
	{
	    if (player->weaponowned[wp_chaingun])
		player->pendingweapon = wp_chaingun;
	    else
		player->pendingweapon = wp_pistol;
	}
	break;
	
      case am_shell:
	if (player->readyweapon == wp_fist
	    || player->readyweapon == wp_pistol)
	{
	    if (player->weaponowned[wp_shotgun])
		player->pendingweapon = wp_shotgun;
	}
	break;
	
      case am_cell:
	if (player->readyweapon == wp_fist
	    || player->readyweapon == wp_pistol)
	{
	    if (player->weaponowned[wp_plasma])
		player->pendingweapon = wp_plasma;
	}
	break;
	
      case am_misl:
	if (player->readyweapon == wp_fist)
	{
	    if (player->weaponowned[wp_missile])
		player->pendingweapon = wp_missile;
	}
      default:
	break;
    }
	
    return true;
}


//
// P_GiveWeapon
// The weapon name may have a MF_DROPPED flag ored in.
//
boolean
P_GiveWeapon
( player_t*	player,
  weapontype_t	weapon,
  boolean	dropped )
{
    boolean	gaveammo;
    boolean	gaveweapon;
	
    if (netgame
	&& (deathmatch!=2)
	 && !dropped )
    {
	// leave placed weapons forever on net games
	if (player->weaponowned[weapon])
	    return false;

	player->bonuscount += BONUSADD;
	player->weaponowned[weapon] = true;

	if (deathmatch)
	    P_GiveAmmo (player, weaponinfo[weapon].ammo, 5);
	else
	    P_GiveAmmo (player, weaponinfo[weapon].ammo, 2);
	player->pendingweapon = weapon;

	if (player == &players[consoleplayer])
	    S_StartSound (NULL, sfx_wpnup);
	return false;
    }
	
    if (weaponinfo[weapon].ammo != am_noammo)
    {
	// give one clip with a dropped weapon,
	// two clips with a found weapon
	if (dropped)
	    gaveammo = P_GiveAmmo (player, weaponinfo[weapon].ammo, 1);
	else
	    gaveammo = P_GiveAmmo (player, weaponinfo[weapon].ammo, 2);
    }
    else
	gaveammo = false;
	
    if (player->weaponowned[weapon])
	gaveweapon = false;
    else
    {
	gaveweapon = true;
	player->weaponowned[weapon] = true;
	player->pendingweapon = weapon;
    }
	
    return (gaveweapon || gaveammo);
}

 

//
// P_GiveBody
// Returns false if the body isn't needed at all
//
boolean
P_GiveBody
( player_t*	player,
  int		num )
{
    if (player->health >= MAXHEALTH)
	return false;
		
    player->health += num;
    if (player->health > MAXHEALTH)
	player->health = MAXHEALTH;
    player->mo->health = player->health;
	
    return true;
}



//
// P_GiveArmor
// Returns false if the armor is worse
// than the current armor.
//
boolean
P_GiveArmor
( player_t*	player,
  int		armortype )
{
    int		hits;
	
    hits = armortype*100;
    if (player->armorpoints >= hits)
	return false;	// don't pick up
		
    player->armortype = armortype;
    player->armorpoints = hits;
	
    return true;
}



//
// P_GiveCard
//
void
P_GiveCard
( player_t*	player,
  card_t	card )
{
    if (player->cards[card])
	return;
    
    player->bonuscount = BONUSADD;
    player->cards[card] = 1;
}


//
// P_GivePower
//
boolean
P_GivePower
( player_t*	player,
  int /*powertype_t*/	power )
{
    if (power == pw_invulnerability)
    {
	player->powers[power] = INVULNTICS;
	return true;
    }
    
    if (power == pw_invisibility)
    {
	player->powers[power] = INVISTICS;
	player->mo->flags |= MF_SHADOW;
	return true;
    }
    
    if (power == pw_infrared)
    {
	player->powers[power] = INFRATICS;
	return true;
    }
    
    if (power == pw_ironfeet)
    {
	player->powers[power] = IRONTICS;
	return true;
    }
    
    if (power == pw_strength)
    {
	P_GiveBody (player, 100);
	player->powers[power] = 1;
	return true;
    }
	
    if (player->powers[power])
	return false;	// already got it
		
    player->powers[power] = 1;
    return true;
}



//
// P_TouchSpecialThing
//
void
P_TouchSpecialThing
( mobj_t*	special,
  mobj_t*	toucher )
{
    player_t*	player;
    int		i;
    fixed_t	delta;
    int		sound;
		
    delta = special->z - toucher->z;

    if (delta > toucher->height
	|| delta < -8*FRACUNIT)
    {
	// out of reach
	return;
    }
    
	
    sound = sfx_itemup;	
    player = toucher->player;

    // Dead thing touching.
    // Can happen with a sliding player corpse.
    if (toucher->health <= 0)
	return;

    // Identify by sprite.
    switch (special->sprite)
    {
	// armor
      case SPR_ARM1:
	if (!P_GiveArmor (player, 1))
	    return;
	player->message = GOTARMOR;
	break;
		
      case SPR_ARM2:
	if (!P_GiveArmor (player, 2))
	    return;
	player->message = GOTMEGA;
	break;
	
	// bonus items
      case SPR_BON1:
	player->health++;		// can go over 100%
	if (player->health > 200)
	    player->health = 200;
	player->mo->health = player->health;
	player->message = GOTHTHBONUS;
	break;
	
      case SPR_BON2:
	player->armorpoints++;		// can go over 100%
	if (player->armorpoints > 200)
	    player->armorpoints = 200;
	if (!player->armortype)
	    player->armortype = 1;
	player->message = GOTARMBONUS;
	break;
	
      case SPR_SOUL:
	player->health += 100;
	if (player->health > 200)
	    player->health = 200;
	player->mo->health = player->health;
	player->message = GOTSUPER;
	sound = sfx_getpow;
	break;
	
      case SPR_MEGA:
	if (gamemode != commercial)
	    return;
	player->health = 200;
	player->mo->health = player->health;
	P_GiveArmor (player,2);
	player->message = GOTMSPHERE;
	sound = sfx_getpow;
	break;
	
	// cards
	// leave cards for everyone
      case SPR_BKEY:
	if (!player->cards[it_bluecard])
	    player->message = GOTBLUECARD;
	P_GiveCard (player, it_bluecard);
	if (!netgame)
	    break;
	return;
	
      case SPR_YKEY:
	if (!player->cards[it_yellowcard])
	    player->message = GOTYELWCARD;
	P_GiveCard (player, it_yellowcard);
	if (!netgame)
	    break;
	return;
	
      case SPR_RKEY:
	if (!player->cards[it_redcard])
	    player->message = GOTREDCARD;
	P_GiveCard (player, it_redcard);
	if (!netgame)
	    break;
	return;
	
      case SPR_BSKU:
	if (!player->cards[it_blueskull])
	    player->message = GOTBLUESKUL;
	P_GiveCard (player, it_blueskull);
	if (!netgame)
	    break;
	return;
	
      case SPR_YSKU:
	if (!player->cards[it_yellowskull])
	    player->message = GOTYELWSKUL;
	P_GiveCard (player, it_yellowskull);
	if (!netgame)
	    break;
	return;
	
      case SPR_RSKU:
	if (!player->cards[it_redskull])
	    player->message = GOTREDSKULL;
	P_GiveCard (player, it_redskull);
	if (!netgame)
	    break;
	return;
	
	// medikits, heals
      case SPR_STIM:
	if (!P_GiveBody (player, 10))
	    return;
	player->message = GOTSTIM;
	break;
	
      case SPR_MEDI:
	if (!P_GiveBody (player, 25))
	    return;

	if (player->health < 25)
	    player->message = GOTMEDINEED;
	else
	    player->message = GOTMEDIKIT;
	break;

	
	// power ups
      case SPR_PINV:
	if (!P_GivePower (player, pw_invulnerability))
	    return;
	player->message = GOTINVUL;
	sound = sfx_getpow;
	break;
	
      case SPR_PSTR:
	if (!P_GivePower (player, pw_strength))
	    return;
	player->message = GOTBERSERK;
	if (player->readyweapon != wp_fist)
	    player->pendingweapon = wp_fist;
	sound = sfx_getpow;
	break;
	
      case SPR_PINS:
	if (!P_GivePower (player, pw_invisibility))
	    return;
	player->message = GOTINVIS;
	sound = sfx_getpow;
	break;
	
      case SPR_SUIT:
	if (!P_GivePower (player, pw_ironfeet))
	    return;
	player->message = GOTSUIT;
	sound = sfx_getpow;
	break;
	
      case SPR_PMAP:
	if (!P_GivePower (player, pw_allmap))
	    return;
	player->message = GOTMAP;
	sound = sfx_getpow;
	break;
	
      case SPR_PVIS:
	if (!P_GivePower (player, pw_infrared))
	    return;
	player->message = GOTVISOR;
	sound = sfx_getpow;
	break;
	
	// ammo
      case SPR_CLIP:
	if (special->flags & MF_DROPPED)
	{
	    if (!P_GiveAmmo (player,am_clip,0))
		return;
	}
	else
	{
	    if (!P_GiveAmmo (player,am_clip,1))
		return;
	}
	player->message = GOTCLIP;
	break;
	
      case SPR_AMMO:
	if (!P_GiveAmmo (player, am_clip,5))
	    return;
	player->message = GOTCLIPBOX;
	break;
	
      case SPR_ROCK:
	if (!P_GiveAmmo (player, am_misl,1))
	    return;
	player->message = GOTROCKET;
	break;
	
      case SPR_BROK:
	if (!P_GiveAmmo (player, am_misl,5))
	    return;
	player->message = GOTROCKBOX;
	break;
	
      case SPR_CELL:
	if (!P_GiveAmmo (player, am_cell,1))
	    return;
	player->message = GOTCELL;
	break;
	
      case SPR_CELP:
	if (!P_GiveAmmo (player, am_cell,5))
	    return;
	player->message = GOTCELLBOX;
	break;
	
      case SPR_SHEL:
	if (!P_GiveAmmo (player, am_shell,1))
	    return;
	player->message = GOTSHELLS;
	break;
	
      case SPR_SBOX:
	if (!P_GiveAmmo (player, am_shell,5))
	    return;
	player->message = GOTSHELLBOX;
	break;
	
      case SPR_BPAK:
	if (!player->backpack)
	{
	    for (i=0 ; i<NUMAMMO ; i++)
		player->maxammo[i] *= 2;
	    player->backpack = true;
	}
	for (i=0 ; i<NUMAMMO ; i++)
	    P_GiveAmmo (player, i, 1);
	player->message = GOTBACKPACK;
	break;
	
	// weapons
      case SPR_BFUG:
	if (!P_GiveWeapon (player, wp_bfg, false) )
	    return;
	player->message = GOTBFG9000;
	sound = sfx_wpnup;	
	break;
	
      case SPR_MGUN:
	if (!P_GiveWeapon (player, wp_chaingun, special->flags&MF_DROPPED) )
	    return;
	player->message = GOTCHAINGUN;
	sound = sfx_wpnup;	
	break;
	
      case SPR_CSAW:
	if (!P_GiveWeapon (player, wp_chainsaw, false) )
	    return;
	player->message = GOTCHAINSAW;
	sound = sfx_wpnup;	
	break;
	
      case SPR_LAUN:
	if (!P_GiveWeapon (player, wp_missile, false) )
	    return;
	player->message = GOTLAUNCHER;
	sound = sfx_wpnup;	
	break;
	
      case SPR_PLAS:
	if (!P_GiveWeapon (player, wp_plasma, false) )
	    return;
	player->message = GOTPLASMA;
	sound = sfx_wpnup;	
	break;
	
      case SPR_SHOT:
	if (!P_GiveWeapon (player, wp_shotgun, special->flags&MF_DROPPED ) )
	    return;
	player->message = GOTSHOTGUN;
	sound = sfx_wpnup;	
	break;
		
      case SPR_SGN2:
	if (!P_GiveWeapon (player, wp_supershotgun, special->flags&MF_DROPPED ) )
	    return;
	player->message = GOTSHOTGUN2;
	sound = sfx_wpnup;	
	break;
		
      default:
	I_Error ("P_SpecialThing: Unknown gettable thing");
    }
	
    if (special->flags & MF_COUNTITEM)
	player->itemcount++;
    P_RemoveMobj (special);
    player->bonuscount += BONUSADD;
    if (player == &players[consoleplayer])
	S_StartSound (NULL, sound);
}


//
// KillMobj
//
void
P_KillMobj
( mobj_t*	source,
  mobj_t*	target )
{
    mobjtype_t	item;
    mobj_t*	mo;
	
    target->flags &= ~(MF_SHOOTABLE|MF_FLOAT|MF_SKULLFLY);

    if (target->type != MT_SKULL)
	target->flags &= ~MF_NOGRAVITY;

    target->flags |= MF_CORPSE|MF_DROPOFF;
    target->height >>= 2;

    if (source && source->player)
    {
	// count for intermission
	if (target->flags & MF_COUNTKILL)
	    source->player->killcount++;	

	if (target->player)
	    source->player->frags[target->player-players]++;
    }
    else if (!netgame && (target->flags & MF_COUNTKILL) )
    {
	// count all monster deaths,
	// even those caused by other monsters
	players[0].killcount++;
    }
    
    if (target->player)
    {
	// count environment kills against you
	if (!source)	
	    target->player->frags[target->player-players]++;
			
	target->flags &= ~MF_SOLID;
	target->player->playerstate = PST_DEAD;
	P_DropWeapon (target->player);

	if (target->player == &players[consoleplayer]
	    && automapactive)
	{
	    // don't die in auto map,
	    // switch view prior to dying
	    AM_Stop ();
	}
	
    }

    if (target->health < -target->info->spawnhealth 
	&& target->info->xdeathstate)
    {
	P_SetMobjState (target, target->info->xdeathstate);
    }
    else
	P_SetMobjState (target, target->info->deathstate);
    target->tics -= P_Random()&3;

    if (target->tics < 1)
	target->tics = 1;
		
    //	I_StartSound (&actor->r, actor->info->deathsound);


    // Drop stuff.
    // This determines the kind of object spawned
    // during the death frame of a thing.
    switch (target->type)
    {
      case MT_WOLFSS:
      case MT_POSSESSED:
	item = MT_CLIP;
	break;
	
      case MT_SHOTGUY:
	item = MT_SHOTGUN;
	break;
	
      case MT_CHAINGUY:
	item = MT_CHAINGUN;
	break;
	
      default:
	return;
    }

    mo = P_SpawnMobj (target->x,target->y,ONFLOORZ, item);
    mo->flags |= MF_DROPPED;	// special versions of items
}




//
// P_DamageMobj
// Damages both enemies and players
// "inflictor" is the thing that caused the damage
//  creature or missile, can be NULL (slime, etc)
// "source" is the thing to target after taking damage
//  creature or NULL
// Source and inflictor are the same for melee attacks.
// Source can be NULL for slime, barrel explosions
// and other environmental stuff.
//
void
P_DamageMobj
( mobj_t*	target,
  mobj_t*	inflictor,
  mobj_t*	source,
  int 		damage )
{
    unsigned	ang;
    int		saved;
    player_t*	player;
    fixed_t	thrust;
    int		temp;
	
    if ( !(target->flags & MF_SHOOTABLE) )
	return;	// shouldn't happen...
		
    if (target->health <= 0)
	return;

    if ( target->flags & MF_SKULLFLY )
    {
	target->momx = target->momy = target->momz = 0;
    }
	
    player = target->player;
    if (player && gameskill == sk_baby)
	damage >>= 1; 	// take half damage in trainer mode
		

    // Some close combat weapons should not
    // inflict thrust and push the victim out of reach,
    // thus kick away unless using the chainsaw.
    if (inflictor
	&& !(target->flags & MF_NOCLIP)
	&& (!source
	    || !source->player
	    || source->player->readyweapon != wp_chainsaw))
    {
	ang = R_PointToAngle2 ( inflictor->x,
				inflictor->y,
				target->x,
				target->y);
		
	thrust = damage*(FRACUNIT>>3)*100/target->info->mass;

	// make fall forwards sometimes
	if ( damage < 40
	     && damage > target->health
	     && target->z - inflictor->z > 64*FRACUNIT
	     && (P_Random ()&1) )
	{
	    ang += ANG180;
	    thrust *= 4;
	}
		
	ang >>= ANGLETOFINESHIFT;
	target->momx += FixedMul (thrust, finecosine[ang]);
	target->momy += FixedMul (thrust, finesine[ang]);
    }
    
    // player specific
    if (player)
    {
	// end of game hell hack
	if (target->subsector->sector->special == 11
	    && damage >= target->health)
	{
	    damage = target->health - 1;
	}
	

	// Below certain threshold,
	// ignore damage in GOD mode, or with INVUL power.
	if ( damage < 1000
	     && ( (player->cheats&CF_GODMODE)
		  || player->powers[pw_invulnerability] ) )
	{
	    return;
	}
	
	if (player->armortype)
	{
	    if (player->armortype == 1)
		saved = damage/3;
	    else
		saved = damage/2;
	    
	    if (player->armorpoints <= saved)
	    {
		// armor is used up
		saved = player->armorpoints;
		player->armortype = 0;
	    }
	    player->armorpoints -= saved;
	    damage -= saved;
	}
	player->health -= damage; 	// mirror mobj health here for Dave
	if (player->health < 0)
	    player->health = 0;
	
	player->attacker = source;
	player->damagecount += damage;	// add damage after armor / invuln

	if (player->damagecount > 100)
	    player->damagecount = 100;	// teleport stomp does 10k points...
	
	temp = damage < 100 ? damage : 100;

	if (player == &players[consoleplayer])
	    I_Tactile (40,10,40+temp*2);
    }
    
    // do the damage	
    target->health -= damage;	
    if (target->health <= 0)
    {
	P_KillMobj (source, target);
	return;
    }

    if ( (P_Random () < target->info->painchance)
	 && !(target->flags&MF_SKULLFLY) )
    {
	target->flags |= MF_JUSTHIT;	// fight back!
	
	P_SetMobjState (target, target->info->painstate);
    }
			
    target->reactiontime = 0;		// we're awake now...	

    if ( (!target->threshold || target->type == MT_VILE)
	 && source && source != target
	 && source->type != MT_VILE)
    {
	// if not intent on another player,
	// chase after this one
	target->target = source;
	target->threshold = BASETHRESHOLD;
	if (target->state == &states[target->info->spawnstate]
	    && target->info->seestate != S_NULL)
	    P_SetMobjState (target, target->info->seestate);
    }
			
}
```
