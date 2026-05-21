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
description: "This file handles the save and load functionality for DOOM's game state, including players, world geometry, and active game objects ('thinkers'). It showcases the ingenuity required to serialize complex game states on 1990s hardware."

summary:
  - point: "Introduces padding for cross-platform save compatibility"
    link: "https://en.wikipedia.org/wiki/Data_structure_alignment"
    link_label: "Data structure alignment"
  - point: "Efficiently serializes and deserializes player states"
    link: "https://en.wikipedia.org/wiki/Serialization"
    link_label: "Serialization"
  - point: "Handles dynamic game objects ('thinkers') in save files"
    link: "https://doomwiki.org/wiki/Thinker"
    link_label: "Thinker system in DOOM"
  - point: "Uses fixed-point arithmetic for world geometry serialization"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "Demonstrates modular save/load design for extensibility"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular programming"

enhancements:
  - id: "pad-save-pointer-for-cross-platform"
    line_start: 38
    line_end: 40
    title: "Why Save Files Needed Padding"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure_alignment"
    image_url: ""
    image_caption: ""
    content: "This macro ensures that the save pointer (`save_p`) aligns to a 4-byte boundary, a requirement for compatibility across different architectures such as SGI and Gecko systems. In the early 1990s, hardware differences often led to subtle bugs in data serialization, as some systems required strict alignment for memory access. By padding the pointer, id Software avoided potential crashes or corrupted save files when transferring game states between platforms. This technique reflects the careful attention to cross-platform compatibility that was necessary in an era when gaming PCs varied widely in architecture. The padding approach influenced later serialization practices, especially in engines like Quake and Unreal, which also had to handle diverse hardware environments."
  - id: "archive-players-game-state"
    line_start: 44
    line_end: 72
    title: "How DOOM Saved Its Players"
    wikipedia_url: "https://en.wikipedia.org/wiki/Serialization"
    image_url: ""
    image_caption: ""
    content: "The `P_ArchivePlayers` function serializes the state of all active players into the save file. It iterates through the `players` array, skipping inactive slots, and copies the player data into the save buffer (`save_p`). To ensure consistency, it adjusts pointers to sprite states by converting them into offsets relative to the global `states` array. This approach allowed DOOM to save complex player states, including their inventory, position, and animation frames, while maintaining portability across systems. At the time, saving such detailed game states was cutting-edge, as many games relied on simpler checkpoint systems. The technique laid the groundwork for more sophisticated save systems in later games, including RPGs and open-world titles."
  - id: "unarchive-players-game-state"
    line_start: 76
    line_end: 108
    title: "Rebuilding Players from Save Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Serialization"
    image_url: ""
    image_caption: ""
    content: "The `P_UnArchivePlayers` function reverses the serialization process, restoring player states from the save buffer. It carefully reconstructs pointers to sprite states and resets transient fields like `mo` (map object) and `message`. This meticulous restoration ensures that players resume their game exactly as they left it, including animations and interactions. The function also highlights the challenges of pointer-based data structures in save files, as pointers must be recalculated during deserialization. This technique influenced later game engines, which adopted similar methods for reconstructing complex game states, such as NPC behaviors and player inventories."
  - id: "archive-world-geometry"
    line_start: 111
    line_end: 159
    title: "Saving DOOM's World in Fixed-Point"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `P_ArchiveWorld` function serializes the game's world geometry, including sectors (rooms) and lines (walls). It uses fixed-point arithmetic to store heights and offsets, dividing by `FRACBITS` to convert from the internal representation to integers suitable for saving. Fixed-point arithmetic was a common choice in the 1990s, as floating-point operations were slow or unavailable on consumer CPUs. By saving only the essential attributes, such as floor textures and light levels, id Software optimized the save file size for the limited storage capacities of the era. This approach influenced later engines, which also prioritized efficient serialization of game worlds to minimize load times and disk usage."
  - id: "unarchive-world-geometry"
    line_start: 164
    line_end: 211
    title: "Reconstructing DOOM's World from Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `P_UnArchiveWorld` function restores the world geometry from a save file, reversing the fixed-point conversion to reconstruct heights and offsets. It also resets transient fields, such as `specialdata`, which are not saved but are required for gameplay. This function demonstrates the complexity of deserializing interconnected game elements, as sectors and lines must be restored in a way that preserves their relationships. The technique was essential for DOOM's fast-paced gameplay, allowing players to seamlessly reload their progress without noticeable delays. Similar methods were later adopted by engines like Quake and Source, which also needed to reconstruct dynamic worlds efficiently."
  - id: "archive-thinkers-game-objects"
    line_start: 229
    line_end: 259
    title: "Saving DOOM's Dynamic Game Objects"
    wikipedia_url: "https://doomwiki.org/wiki/Thinker"
    image_url: ""
    image_caption: ""
    content: "The `P_ArchiveThinkers` function serializes active game objects, known as 'thinkers,' into the save file. Thinkers include enemies, projectiles, and other dynamic entities that require ongoing updates. The function iterates through the thinker list, saving each object's state and converting pointers to offsets for portability. It also adds a terminating marker (`tc_end`) to signal the end of the thinker list. This modular approach allowed DOOM to handle a wide variety of game objects without hardcoding their behaviors into the save system. The thinker system became a hallmark of id Software's engines, influencing later games like Quake and even modern engines like Unity, which use similar component-based architectures."
  - id: "unarchive-thinkers-game-objects"
    line_start: 263
    line_end: 323
    title: "Reanimating DOOM's Thinkers from Save Files"
    wikipedia_url: "https://doomwiki.org/wiki/Thinker"
    image_url: ""
    image_caption: ""
    content: "The `P_UnArchiveThinkers` function reconstructs dynamic game objects ('thinkers') from the save file. It clears the current thinker list, initializes new thinkers based on the saved data, and recalculates pointers to ensure proper functionality. This process includes restoring connections between objects, such as a player's link to their map object (`mo`). The function highlights the challenges of deserializing complex systems, as it must handle various thinker types and ensure their interactions are preserved. The thinker system's flexibility influenced later engines, which adopted similar designs to manage dynamic entities in games ranging from first-person shooters to strategy titles."
  - id: "archive-specials-game-events"
    line_start: 326
    line_end: 467
    title: "How DOOM Saved Its Active Events"
    wikipedia_url: "https://doomwiki.org/wiki/Thinker"
    image_url: ""
    image_caption: ""
    content: "The `P_ArchiveSpecials` function serializes active game events, such as moving platforms, doors, and lighting effects, into the save file. It iterates through the thinker list, identifying special event types and saving their state. By converting sector pointers to offsets, it ensures portability across systems. This modular approach allowed DOOM to handle a wide variety of active events without hardcoding their behaviors into the save system. The ability to save and restore dynamic events was critical for maintaining gameplay continuity, especially in levels with complex interactions. This technique influenced later engines, which adopted similar methods to serialize dynamic game elements, enabling features like mid-mission saves in modern titles."
  - id: "unarchive-specials-game-events"
    line_start: 472
    line_end: 583
    title: "Reactivating DOOM's Special Events"
    wikipedia_url: "https://doomwiki.org/wiki/Thinker"
    image_url: ""
    image_caption: ""
    content: "The `P_UnArchiveSpecials` function restores active game events from the save file, including platforms, doors, and lighting effects. It reconstructs pointers to sectors and reinitializes thinker functions to ensure proper behavior. This process highlights the complexity of deserializing interconnected systems, as each event must be restored in a way that preserves its relationships with other game elements. The function's modular design allowed DOOM to handle a wide variety of special events, setting a precedent for extensible save systems in later engines. Games like Quake and Unreal adopted similar techniques to manage dynamic events, enabling features like scripted sequences and interactive environments."

---

```cpp
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
```
