---
title: "p_saveg.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/p_saveg.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/p_saveg.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "p-saveg-c"
order: 31
description: "This file implements the save and load functionality for DOOM's game state, a critical feature for preserving progress in a groundbreaking 3D shooter."

summary:
  - point: "Introduces savegame padding for cross-platform compatibility"
    link: "https://en.wikipedia.org/wiki/Save_game"
    link_label: "Save game"
  - point: "Archives and restores player states, world geometry, and active game objects"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993 video game)"
  - point: "Uses thinker objects to manage dynamic game elements"
    link: "https://doomwiki.org/wiki/Thinker"
    link_label: "Thinker"
  - point: "Optimizes memory handling for constrained hardware environments"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"

enhancements:
  - id: "savegame-padding-cross-platform"
    line_start: 38
    line_end: 40
    title: "Savegame padding for cross-platform compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "This macro, `PADSAVEP()`, ensures that the save pointer aligns to a 4-byte boundary, which is necessary for proper functioning on certain hardware platforms like SGI and Gecko systems. At the time, cross-platform compatibility was a significant challenge, as different architectures had varying requirements for memory alignment. By addressing this issue, id Software ensured that DOOM's savegame functionality worked reliably across multiple systems. This technique highlights the meticulous attention to detail required to develop software for diverse hardware environments in the early 1990s. The concept of memory alignment remains relevant today, especially in systems programming and embedded development."
  - id: "archive-players-preserve-game-state"
    line_start: 44
    line_end: 72
    title: "Archiving players to preserve game state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "The `P_ArchivePlayers` function serializes player data into a save buffer, including their position, state, and associated sprites. This ensures that when a game is saved, all player-specific information is preserved. The function also adjusts pointers to reference indices rather than memory addresses, a clever workaround for ensuring compatibility across sessions and platforms. In the early 1990s, savegame functionality was becoming a standard feature in games, and DOOM's implementation was particularly robust. This approach influenced later games, which adopted similar serialization techniques for saving complex game states. The idea of converting pointers to indices during serialization is still used in modern game engines to ensure portability and reliability."
  - id: "unarchive-players-restore-game-state"
    line_start: 76
    line_end: 108
    title: "Unarchiving players to restore game state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Save_game"
    image_url: ""
    image_caption: ""
    content: "The `P_UnArchivePlayers` function reverses the process of `P_ArchivePlayers`, loading player data from the save buffer and reconstructing their state. It also resets certain pointers to ensure proper initialization after loading. This function demonstrates the complexity of managing dynamic game states in an era when memory constraints were significant. By carefully reconstructing pointers and ensuring consistency, id Software created a system that allowed players to seamlessly resume their games. This technique laid the groundwork for savegame systems in later titles, influencing the design of serialization and deserialization processes in modern game engines like Unity and Unreal Engine."
  - id: "archive-world-save-level-data"
    line_start: 111
    line_end: 160
    title: "Archiving world data for level persistence"
    wikipedia_url: "https://en.wikipedia.org/wiki/Serialization"
    image_url: ""
    image_caption: ""
    content: "The `P_ArchiveWorld` function saves the state of the game's world, including sectors, lines, and their associated properties. By storing details like floor heights, textures, and light levels, the function ensures that the level's geometry and appearance can be restored accurately. This was crucial for DOOM's immersive gameplay, as players expected consistency when loading saved games. The use of bit-shifting (`>> FRACBITS`) to convert fixed-point numbers to integers reflects the hardware limitations of the time, where performance optimization was paramount. This approach influenced later games that required efficient serialization of complex world data, and it remains a foundational concept in game development."
  - id: "unarchive-world-restore-level-data"
    line_start: 164
    line_end: 211
    title: "Unarchiving world data for level restoration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Serialization"
    image_url: ""
    image_caption: ""
    content: "The `P_UnArchiveWorld` function reconstructs the game's world from saved data, restoring sectors, lines, and their properties. It carefully reinitializes pointers and resets dynamic elements like sound targets and special data. This function highlights the challenges of deserialization, particularly in ensuring that the restored state matches the original. In the early 1990s, such functionality was groundbreaking, as it allowed players to experience continuity in their gameplay. The techniques used here, such as pointer reconstruction and fixed-point arithmetic, influenced later game engines and serialization libraries, which adopted similar methods to handle complex game states efficiently."
  - id: "archive-thinkers-dynamic-game-elements"
    line_start: 229
    line_end: 258
    title: "Archiving thinkers: Managing dynamic game elements"
    wikipedia_url: "https://doomwiki.org/wiki/Thinker"
    image_url: ""
    image_caption: ""
    content: "The `P_ArchiveThinkers` function serializes 'thinker' objects, which represent dynamic elements in DOOM's game world, such as moving monsters and environmental effects. By saving their state, including position and behavior, the game ensures that these elements can be restored accurately. The use of a terminating marker (`tc_end`) in the save buffer is a simple yet effective way to denote the end of serialized data. Thinker objects were a key innovation in DOOM's engine, enabling complex interactions and behaviors. This concept influenced later game engines, which adopted similar systems for managing dynamic entities, such as Unity's component-based architecture."
  - id: "unarchive-thinkers-revive-dynamic-elements"
    line_start: 263
    line_end: 323
    title: "Unarchiving thinkers: Reviving dynamic elements"
    wikipedia_url: "https://doomwiki.org/wiki/Thinker"
    image_url: ""
    image_caption: ""
    content: "The `P_UnArchiveThinkers` function reconstructs thinker objects from saved data, restoring their state and behavior. It also removes existing thinkers to prevent conflicts, ensuring a clean slate before loading new data. This function demonstrates the complexity of managing dynamic game elements, particularly in ensuring that restored objects interact correctly with the game world. The thinker system was a cornerstone of DOOM's engine, enabling the game's fast-paced action and environmental dynamics. Its influence can be seen in modern game engines, which use similar systems to manage entities and their behaviors efficiently."
  - id: "archive-specials-save-environmental-effects"
    line_start: 326
    line_end: 467
    title: "Archiving specials: Saving environmental effects"
    wikipedia_url: "https://doomwiki.org/wiki/Specials"
    image_url: ""
    image_caption: ""
    content: "The `P_ArchiveSpecials` function serializes special environmental effects, such as moving platforms, glowing lights, and strobe effects. By saving their state, the game ensures that these dynamic elements can be restored accurately. This function uses a series of type codes (`tc_ceiling`, `tc_door`, etc.) to identify different types of specials, a technique that simplifies serialization. Environmental effects were a key part of DOOM's immersive gameplay, adding depth and interactivity to the levels. The serialization of these effects influenced later games, which adopted similar methods to manage dynamic level elements, such as Half-Life's scripted sequences and Unreal Engine's level blueprints."
  - id: "unarchive-specials-restore-environmental-effects"
    line_start: 472
    line_end: 585
    title: "Unarchiving specials: Restoring environmental effects"
    wikipedia_url: "https://doomwiki.org/wiki/Specials"
    image_url: ""
    image_caption: ""
    content: "The `P_UnArchiveSpecials` function reconstructs special environmental effects from saved data, restoring their state and behavior. It uses type codes to identify and initialize different types of specials, ensuring that they interact correctly with the game world. This function highlights the challenges of deserialization, particularly in managing dynamic elements that depend on the game's state. The serialization and deserialization of specials were innovative techniques that allowed DOOM to deliver a seamless gameplay experience. These methods influenced later games and engines, which adopted similar systems to handle dynamic level elements efficiently."

---

// Emacs style mode select   -*- C++ -*- 
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
//	Archiving: SaveGame I/O.
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: p_tick.c,v 1.4 1997/02/03 16:47:55 b1 Exp $";

#include "i_system.h"
#include "z_zone.h"
#include "p_local.h"

// State.
#include "doomstat.h"
#include "r_state.h"

byte*		save_p;


// Pads save_p to a 4-byte boundary
//  so that the load/save works on SGI&Gecko.
#define PADSAVEP()	save_p += (4 - ((int) save_p & 3)) & 3



//
// P_ArchivePlayers
//
void P_ArchivePlayers (void)
{
    int		i;
    int		j;
    player_t*	dest;
		
    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	if (!playeringame[i])
	    continue;
	
	PADSAVEP();

	dest = (player_t *)save_p;
	memcpy (dest,&players[i],sizeof(player_t));
	save_p += sizeof(player_t);
	for (j=0 ; j<NUMPSPRITES ; j++)
	{
	    if (dest->psprites[j].state)
	    {
		dest->psprites[j].state 
		    = (state_t *)(dest->psprites[j].state-states);
	    }
	}
    }
}



//
// P_UnArchivePlayers
//
void P_UnArchivePlayers (void)
{
    int		i;
    int		j;
	
    for (i=0 ; i<MAXPLAYERS ; i++)
    {
	if (!playeringame[i])
	    continue;
	
	PADSAVEP();

	memcpy (&players[i],save_p, sizeof(player_t));
	save_p += sizeof(player_t);
	
	// will be set when unarc thinker
	players[i].mo = NULL;	
	players[i].message = NULL;
	players[i].attacker = NULL;

	for (j=0 ; j<NUMPSPRITES ; j++)
	{
	    if (players[i]. psprites[j].state)
	    {
		players[i]. psprites[j].state 
		    = &states[ (int)players[i].psprites[j].state ];
	    }
	}
    }
}


//
// P_ArchiveWorld
//
void P_ArchiveWorld (void)
{
    int			i;
    int			j;
    sector_t*		sec;
    line_t*		li;
    side_t*		si;
    short*		put;
	
    put = (short *)save_p;
    
    // do sectors
    for (i=0, sec = sectors ; i<numsectors ; i++,sec++)
    {
	*put++ = sec->floorheight >> FRACBITS;
	*put++ = sec->ceilingheight >> FRACBITS;
	*put++ = sec->floorpic;
	*put++ = sec->ceilingpic;
	*put++ = sec->lightlevel;
	*put++ = sec->special;		// needed?
	*put++ = sec->tag;		// needed?
    }

    
    // do lines
    for (i=0, li = lines ; i<numlines ; i++,li++)
    {
	*put++ = li->flags;
	*put++ = li->special;
	*put++ = li->tag;
	for (j=0 ; j<2 ; j++)
	{
	    if (li->sidenum[j] == -1)
		continue;
	    
	    si = &sides[li->sidenum[j]];

	    *put++ = si->textureoffset >> FRACBITS;
	    *put++ = si->rowoffset >> FRACBITS;
	    *put++ = si->toptexture;
	    *put++ = si->bottomtexture;
	    *put++ = si->midtexture;	
	}
    }
	
    save_p = (byte *)put;
}



//
// P_UnArchiveWorld
//
void P_UnArchiveWorld (void)
{
    int			i;
    int			j;
    sector_t*		sec;
    line_t*		li;
    side_t*		si;
    short*		get;
	
    get = (short *)save_p;
    
    // do sectors
    for (i=0, sec = sectors ; i<numsectors ; i++,sec++)
    {
	sec->floorheight = *get++ << FRACBITS;
	sec->ceilingheight = *get++ << FRACBITS;
	sec->floorpic = *get++;
	sec->ceilingpic = *get++;
	sec->lightlevel = *get++;
	sec->special = *get++;		// needed?
	sec->tag = *get++;		// needed?
	sec->specialdata = 0;
	sec->soundtarget = 0;
    }
    
    // do lines
    for (i=0, li = lines ; i<numlines ; i++,li++)
    {
	li->flags = *get++;
	li->special = *get++;
	li->tag = *get++;
	for (j=0 ; j<2 ; j++)
	{
	    if (li->sidenum[j] == -1)
		continue;
	    si = &sides[li->sidenum[j]];
	    si->textureoffset = *get++ << FRACBITS;
	    si->rowoffset = *get++ << FRACBITS;
	    si->toptexture = *get++;
	    si->bottomtexture = *get++;
	    si->midtexture = *get++;
	}
    }
    save_p = (byte *)get;	
}





//
// Thinkers
//
typedef enum
{
    tc_end,
    tc_mobj

} thinkerclass_t;



//
// P_ArchiveThinkers
//
void P_ArchiveThinkers (void)
{
    thinker_t*		th;
    mobj_t*		mobj;
	
    // save off the current thinkers
    for (th = thinkercap.next ; th != &thinkercap ; th=th->next)
    {
	if (th->function.acp1 == (actionf_p1)P_MobjThinker)
	{
	    *save_p++ = tc_mobj;
	    PADSAVEP();
	    mobj = (mobj_t *)save_p;
	    memcpy (mobj, th, sizeof(*mobj));
	    save_p += sizeof(*mobj);
	    mobj->state = (state_t *)(mobj->state - states);
	    
	    if (mobj->player)
		mobj->player = (player_t *)((mobj->player-players) + 1);
	    continue;
	}
		
	// I_Error ("P_ArchiveThinkers: Unknown thinker function");
    }

    // add a terminating marker
    *save_p++ = tc_end;	
}



//
// P_UnArchiveThinkers
//
void P_UnArchiveThinkers (void)
{
    byte		tclass;
    thinker_t*		currentthinker;
    thinker_t*		next;
    mobj_t*		mobj;
    
    // remove all the current thinkers
    currentthinker = thinkercap.next;
    while (currentthinker != &thinkercap)
    {
	next = currentthinker->next;
	
	if (currentthinker->function.acp1 == (actionf_p1)P_MobjThinker)
	    P_RemoveMobj ((mobj_t *)currentthinker);
	else
	    Z_Free (currentthinker);

	currentthinker = next;
    }
    P_InitThinkers ();
	
    // read in saved thinkers
    while (1)
    {
	tclass = *save_p++;
	switch (tclass)
	{
	  case tc_end:
	    return; 	// end of list
			
	  case tc_mobj:
	    PADSAVEP();
	    mobj = Z_Malloc (sizeof(*mobj), PU_LEVEL, NULL);
	    memcpy (mobj, save_p, sizeof(*mobj));
	    save_p += sizeof(*mobj);
	    mobj->state = &states[(int)mobj->state];
	    mobj->target = NULL;
	    if (mobj->player)
	    {
		mobj->player = &players[(int)mobj->player-1];
		mobj->player->mo = mobj;
	    }
	    P_SetThingPosition (mobj);
	    mobj->info = &mobjinfo[mobj->type];
	    mobj->floorz = mobj->subsector->sector->floorheight;
	    mobj->ceilingz = mobj->subsector->sector->ceilingheight;
	    mobj->thinker.function.acp1 = (actionf_p1)P_MobjThinker;
	    P_AddThinker (&mobj->thinker);
	    break;
			
	  default:
	    I_Error ("Unknown tclass %i in savegame",tclass);
	}
	
    }

}


//
// P_ArchiveSpecials
//
enum
{
    tc_ceiling,
    tc_door,
    tc_floor,
    tc_plat,
    tc_flash,
    tc_strobe,
    tc_glow,
    tc_endspecials

} specials_e;	



//
// Things to handle:
//
// T_MoveCeiling, (ceiling_t: sector_t * swizzle), - active list
// T_VerticalDoor, (vldoor_t: sector_t * swizzle),
// T_MoveFloor, (floormove_t: sector_t * swizzle),
// T_LightFlash, (lightflash_t: sector_t * swizzle),
// T_StrobeFlash, (strobe_t: sector_t *),
// T_Glow, (glow_t: sector_t *),
// T_PlatRaise, (plat_t: sector_t *), - active list
//
void P_ArchiveSpecials (void)
{
    thinker_t*		th;
    ceiling_t*		ceiling;
    vldoor_t*		door;
    floormove_t*	floor;
    plat_t*		plat;
    lightflash_t*	flash;
    strobe_t*		strobe;
    glow_t*		glow;
    int			i;
	
    // save off the current thinkers
    for (th = thinkercap.next ; th != &thinkercap ; th=th->next)
    {
	if (th->function.acv == (actionf_v)NULL)
	{
	    for (i = 0; i < MAXCEILINGS;i++)
		if (activeceilings[i] == (ceiling_t *)th)
		    break;
	    
	    if (i<MAXCEILINGS)
	    {
		*save_p++ = tc_ceiling;
		PADSAVEP();
		ceiling = (ceiling_t *)save_p;
		memcpy (ceiling, th, sizeof(*ceiling));
		save_p += sizeof(*ceiling);
		ceiling->sector = (sector_t *)(ceiling->sector - sectors);
	    }
	    continue;
	}
			
	if (th->function.acp1 == (actionf_p1)T_MoveCeiling)
	{
	    *save_p++ = tc_ceiling;
	    PADSAVEP();
	    ceiling = (ceiling_t *)save_p;
	    memcpy (ceiling, th, sizeof(*ceiling));
	    save_p += sizeof(*ceiling);
	    ceiling->sector = (sector_t *)(ceiling->sector - sectors);
	    continue;
	}
			
	if (th->function.acp1 == (actionf_p1)T_VerticalDoor)
	{
	    *save_p++ = tc_door;
	    PADSAVEP();
	    door = (vldoor_t *)save_p;
	    memcpy (door, th, sizeof(*door));
	    save_p += sizeof(*door);
	    door->sector = (sector_t *)(door->sector - sectors);
	    continue;
	}
			
	if (th->function.acp1 == (actionf_p1)T_MoveFloor)
	{
	    *save_p++ = tc_floor;
	    PADSAVEP();
	    floor = (floormove_t *)save_p;
	    memcpy (floor, th, sizeof(*floor));
	    save_p += sizeof(*floor);
	    floor->sector = (sector_t *)(floor->sector - sectors);
	    continue;
	}
			
	if (th->function.acp1 == (actionf_p1)T_PlatRaise)
	{
	    *save_p++ = tc_plat;
	    PADSAVEP();
	    plat = (plat_t *)save_p;
	    memcpy (plat, th, sizeof(*plat));
	    save_p += sizeof(*plat);
	    plat->sector = (sector_t *)(plat->sector - sectors);
	    continue;
	}
			
	if (th->function.acp1 == (actionf_p1)T_LightFlash)
	{
	    *save_p++ = tc_flash;
	    PADSAVEP();
	    flash = (lightflash_t *)save_p;
	    memcpy (flash, th, sizeof(*flash));
	    save_p += sizeof(*flash);
	    flash->sector = (sector_t *)(flash->sector - sectors);
	    continue;
	}
			
	if (th->function.acp1 == (actionf_p1)T_StrobeFlash)
	{
	    *save_p++ = tc_strobe;
	    PADSAVEP();
	    strobe = (strobe_t *)save_p;
	    memcpy (strobe, th, sizeof(*strobe));
	    save_p += sizeof(*strobe);
	    strobe->sector = (sector_t *)(strobe->sector - sectors);
	    continue;
	}
			
	if (th->function.acp1 == (actionf_p1)T_Glow)
	{
	    *save_p++ = tc_glow;
	    PADSAVEP();
	    glow = (glow_t *)save_p;
	    memcpy (glow, th, sizeof(*glow));
	    save_p += sizeof(*glow);
	    glow->sector = (sector_t *)(glow->sector - sectors);
	    continue;
	}
    }
	
    // add a terminating marker
    *save_p++ = tc_endspecials;	

}


//
// P_UnArchiveSpecials
//
void P_UnArchiveSpecials (void)
{
    byte		tclass;
    ceiling_t*		ceiling;
    vldoor_t*		door;
    floormove_t*	floor;
    plat_t*		plat;
    lightflash_t*	flash;
    strobe_t*		strobe;
    glow_t*		glow;
	
	
    // read in saved thinkers
    while (1)
    {
	tclass = *save_p++;
	switch (tclass)
	{
	  case tc_endspecials:
	    return;	// end of list
			
	  case tc_ceiling:
	    PADSAVEP();
	    ceiling = Z_Malloc (sizeof(*ceiling), PU_LEVEL, NULL);
	    memcpy (ceiling, save_p, sizeof(*ceiling));
	    save_p += sizeof(*ceiling);
	    ceiling->sector = &sectors[(int)ceiling->sector];
	    ceiling->sector->specialdata = ceiling;

	    if (ceiling->thinker.function.acp1)
		ceiling->thinker.function.acp1 = (actionf_p1)T_MoveCeiling;

	    P_AddThinker (&ceiling->thinker);
	    P_AddActiveCeiling(ceiling);
	    break;
				
	  case tc_door:
	    PADSAVEP();
	    door = Z_Malloc (sizeof(*door), PU_LEVEL, NULL);
	    memcpy (door, save_p, sizeof(*door));
	    save_p += sizeof(*door);
	    door->sector = &sectors[(int)door->sector];
	    door->sector->specialdata = door;
	    door->thinker.function.acp1 = (actionf_p1)T_VerticalDoor;
	    P_AddThinker (&door->thinker);
	    break;
				
	  case tc_floor:
	    PADSAVEP();
	    floor = Z_Malloc (sizeof(*floor), PU_LEVEL, NULL);
	    memcpy (floor, save_p, sizeof(*floor));
	    save_p += sizeof(*floor);
	    floor->sector = &sectors[(int)floor->sector];
	    floor->sector->specialdata = floor;
	    floor->thinker.function.acp1 = (actionf_p1)T_MoveFloor;
	    P_AddThinker (&floor->thinker);
	    break;
				
	  case tc_plat:
	    PADSAVEP();
	    plat = Z_Malloc (sizeof(*plat), PU_LEVEL, NULL);
	    memcpy (plat, save_p, sizeof(*plat));
	    save_p += sizeof(*plat);
	    plat->sector = &sectors[(int)plat->sector];
	    plat->sector->specialdata = plat;

	    if (plat->thinker.function.acp1)
		plat->thinker.function.acp1 = (actionf_p1)T_PlatRaise;

	    P_AddThinker (&plat->thinker);
	    P_AddActivePlat(plat);
	    break;
				
	  case tc_flash:
	    PADSAVEP();
	    flash = Z_Malloc (sizeof(*flash), PU_LEVEL, NULL);
	    memcpy (flash, save_p, sizeof(*flash));
	    save_p += sizeof(*flash);
	    flash->sector = &sectors[(int)flash->sector];
	    flash->thinker.function.acp1 = (actionf_p1)T_LightFlash;
	    P_AddThinker (&flash->thinker);
	    break;
				
	  case tc_strobe:
	    PADSAVEP();
	    strobe = Z_Malloc (sizeof(*strobe), PU_LEVEL, NULL);
	    memcpy (strobe, save_p, sizeof(*strobe));
	    save_p += sizeof(*strobe);
	    strobe->sector = &sectors[(int)strobe->sector];
	    strobe->thinker.function.acp1 = (actionf_p1)T_StrobeFlash;
	    P_AddThinker (&strobe->thinker);
	    break;
				
	  case tc_glow:
	    PADSAVEP();
	    glow = Z_Malloc (sizeof(*glow), PU_LEVEL, NULL);
	    memcpy (glow, save_p, sizeof(*glow));
	    save_p += sizeof(*glow);
	    glow->sector = &sectors[(int)glow->sector];
	    glow->thinker.function.acp1 = (actionf_p1)T_Glow;
	    P_AddThinker (&glow->thinker);
	    break;
				
	  default:
	    I_Error ("P_UnarchiveSpecials:Unknown tclass %i "
		     "in savegame",tclass);
	}
	
    }

}
