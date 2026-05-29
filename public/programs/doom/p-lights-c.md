---
title: "p_lights.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/p_lights.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/p_lights.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "p-lights-c"
order: 28
description: "This file implements dynamic lighting effects in DOOM, a groundbreaking feature for immersive gameplay in 1993."

summary:
  - point: "Introduced dynamic lighting effects for realism and atmosphere"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Used efficient algorithms to simulate lighting on limited hardware"
    link: "https://en.wikipedia.org/wiki/Real-time_computing"
    link_label: "Real-time computing"
  - point: "Pioneered modular 'thinker' system for game logic"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game engine"

enhancements:
  - id: "firelight-flicker-algorithm"
    line_start: 35
    line_end: 60
    title: "Why Firelight Flickers in DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_FireFlicker` function simulates the flickering effect of firelight by periodically adjusting the light level of a sector. The algorithm uses a random number generator (`P_Random`) to calculate the intensity of the flicker, ensuring that the light level stays within defined bounds (`minlight` and `maxlight`). This creates an atmospheric effect that enhances the realism of DOOM's environments. In 1993, dynamic lighting was rare in games, especially on consumer hardware like the 386 and 486 PCs DOOM targeted. John Carmack's approach balanced visual fidelity with performance, leveraging efficient calculations to avoid taxing the CPU. This technique inspired later games to incorporate dynamic lighting, eventually becoming a staple of modern game engines like Unreal Engine and Unity."
  - id: "spawn-firelight-flicker"
    line_start: 64
    line_end: 84
    title: "How DOOM Spawns Flickering Firelight"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnFireFlicker` function initializes the firelight flicker effect for a given sector. It allocates memory for a `fireflicker_t` structure, sets the sector's light level bounds, and registers the flicker as a 'thinker'—a modular unit of game logic that DOOM's engine processes during each frame. This modular design allowed DOOM to handle complex behaviors like lighting, enemy AI, and environmental effects efficiently. By resetting the sector's special attributes (`sector->special = 0`), the function ensures that the flicker effect does not interfere with other gameplay mechanics. This approach to modular game logic influenced the design of later engines, including Quake and Half-Life."
  - id: "light-flash-effect"
    line_start: 93
    line_end: 113
    title: "The Algorithm Behind Flashing Lights"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_LightFlash` function creates a flashing light effect by toggling a sector's light level between `maxlight` and `minlight`. The timing of the flashes is randomized using `P_Random`, adding unpredictability to the effect. This feature was used to simulate broken or malfunctioning lights in DOOM's levels, contributing to the game's eerie atmosphere. In the early 1990s, such effects were groundbreaking, as most games relied on static lighting. Carmack's implementation demonstrated how simple algorithms could produce visually striking results. This technique influenced the development of horror games like Resident Evil, where lighting plays a critical role in creating tension."
  - id: "spawn-light-flash"
    line_start: 118
    line_end: 142
    title: "How DOOM Spawns Flashing Light Effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnLightFlash` function initializes the flashing light effect for a sector. It allocates memory for a `lightflash_t` structure, sets the light level bounds, and registers the flash as a 'thinker' for periodic updates. This modular approach allowed DOOM to manage dynamic lighting effects efficiently without hardcoding behaviors into the engine. By scanning the map for sectors with special attributes, the function ensured that lighting effects were applied only where intended. This design philosophy—separating data from logic—became a cornerstone of modern game development, influencing engines like Source and CryEngine."
  - id: "strobe-light-effect"
    line_start: 151
    line_end: 208
    title: "The Strobe Light Algorithm That Defined DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_StrobeFlash` function simulates strobe lighting by alternating a sector's light level between `maxlight` and `minlight` at regular intervals. The timing is controlled by `brighttime` and `darktime`, allowing for customization of the strobe's speed. This effect was used to create dramatic lighting in DOOM's levels, enhancing the game's visual impact. In the early 1990s, strobe lighting was rarely seen in games due to hardware limitations. Carmack's efficient implementation demonstrated how clever programming could overcome these constraints. The strobe effect later influenced the design of dynamic lighting in games like System Shock and Deus Ex."
  - id: "start-light-strobing"
    line_start: 211
    line_end: 228
    title: "Triggering Strobe Lights in DOOM"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `EV_StartLightStrobing` function activates strobe lighting in sectors tagged by a specific line. It iterates through all sectors in the map, checking for matching tags, and spawns strobe effects using `P_SpawnStrobeFlash`. This feature allowed level designers to create dynamic lighting effects triggered by player actions, such as entering a room or activating a switch. In 1993, this level of interactivity was rare, as most games featured static environments. DOOM's ability to dynamically alter lighting based on gameplay events set a new standard for immersion, influencing titles like Half-Life and BioShock."
  - id: "turn-tag-lights-off"
    line_start: 232
    line_end: 306
    title: "How DOOM Turns Lights Off by Tag"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `EV_TurnTagLightsOff` function reduces the light level of all sectors tagged by a specific line to the minimum surrounding light level. It scans each sector's lines to find adjacent sectors and determines the lowest light level among them. This effect was used to create dramatic transitions, such as plunging a room into darkness after a switch is activated. In the early 1990s, such dynamic lighting effects were uncommon, as most games relied on static environments. DOOM's ability to manipulate lighting in real-time influenced the design of games like Thief, where light and shadow are integral to gameplay."
  - id: "glowing-light-effect"
    line_start: 309
    line_end: 337
    title: "The Glow Effect That Brought DOOM to Life"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_Glow` function creates a glowing light effect by gradually increasing or decreasing a sector's light level. The direction of the glow alternates when the light level reaches its bounds (`minlight` or `maxlight`). This effect added a sense of dynamism to DOOM's environments, making them feel alive. In 1993, glowing lights were a novel feature, as most games featured static lighting. Carmack's implementation demonstrated how simple algorithms could produce visually compelling results. The glow effect influenced the design of lighting systems in later games, including Unreal Tournament and Quake II."
  - id: "spawn-glowing-light"
    line_start: 340
    line_end: 355
    title: "How DOOM Spawns Glowing Lights"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnGlowingLight` function initializes the glowing light effect for a sector. It allocates memory for a `glow_t` structure, sets the light level bounds, and registers the glow as a 'thinker' for periodic updates. By scanning the map for sectors with special attributes, the function ensured that glowing lights were applied only where intended. This modular approach allowed DOOM to manage dynamic lighting effects efficiently without hardcoding behaviors into the engine. The glowing light effect became a hallmark of atmospheric level design, influencing games like Quake and Unreal."

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
//	Handle Sector base lighting effects.
//	Muzzle flash?
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: p_lights.c,v 1.5 1997/02/03 22:45:11 b1 Exp $";


#include "z_zone.h"
#include "m_random.h"

#include "doomdef.h"
#include "p_local.h"


// State.
#include "r_state.h"

//
// FIRELIGHT FLICKER
//

//
// T_FireFlicker
//
void T_FireFlicker (fireflicker_t* flick)
{
    int	amount;
	
    if (--flick->count)
	return;
	
    amount = (P_Random()&3)*16;
    
    if (flick->sector->lightlevel - amount < flick->minlight)
	flick->sector->lightlevel = flick->minlight;
    else
	flick->sector->lightlevel = flick->maxlight - amount;

    flick->count = 4;
}



//
// P_SpawnFireFlicker
//
void P_SpawnFireFlicker (sector_t*	sector)
{
    fireflicker_t*	flick;
	
    // Note that we are resetting sector attributes.
    // Nothing special about it during gameplay.
    sector->special = 0; 
	
    flick = Z_Malloc ( sizeof(*flick), PU_LEVSPEC, 0);

    P_AddThinker (&flick->thinker);

    flick->thinker.function.acp1 = (actionf_p1) T_FireFlicker;
    flick->sector = sector;
    flick->maxlight = sector->lightlevel;
    flick->minlight = P_FindMinSurroundingLight(sector,sector->lightlevel)+16;
    flick->count = 4;
}



//
// BROKEN LIGHT FLASHING
//


//
// T_LightFlash
// Do flashing lights.
//
void T_LightFlash (lightflash_t* flash)
{
    if (--flash->count)
	return;
	
    if (flash->sector->lightlevel == flash->maxlight)
    {
	flash-> sector->lightlevel = flash->minlight;
	flash->count = (P_Random()&flash->mintime)+1;
    }
    else
    {
	flash-> sector->lightlevel = flash->maxlight;
	flash->count = (P_Random()&flash->maxtime)+1;
    }

}




//
// P_SpawnLightFlash
// After the map has been loaded, scan each sector
// for specials that spawn thinkers
//
void P_SpawnLightFlash (sector_t*	sector)
{
    lightflash_t*	flash;

    // nothing special about it during gameplay
    sector->special = 0;	
	
    flash = Z_Malloc ( sizeof(*flash), PU_LEVSPEC, 0);

    P_AddThinker (&flash->thinker);

    flash->thinker.function.acp1 = (actionf_p1) T_LightFlash;
    flash->sector = sector;
    flash->maxlight = sector->lightlevel;

    flash->minlight = P_FindMinSurroundingLight(sector,sector->lightlevel);
    flash->maxtime = 64;
    flash->mintime = 7;
    flash->count = (P_Random()&flash->maxtime)+1;
}



//
// STROBE LIGHT FLASHING
//


//
// T_StrobeFlash
//
void T_StrobeFlash (strobe_t*		flash)
{
    if (--flash->count)
	return;
	
    if (flash->sector->lightlevel == flash->minlight)
    {
	flash-> sector->lightlevel = flash->maxlight;
	flash->count = flash->brighttime;
    }
    else
    {
	flash-> sector->lightlevel = flash->minlight;
	flash->count =flash->darktime;
    }

}



//
// P_SpawnStrobeFlash
// After the map has been loaded, scan each sector
// for specials that spawn thinkers
//
void
P_SpawnStrobeFlash
( sector_t*	sector,
  int		fastOrSlow,
  int		inSync )
{
    strobe_t*	flash;
	
    flash = Z_Malloc ( sizeof(*flash), PU_LEVSPEC, 0);

    P_AddThinker (&flash->thinker);

    flash->sector = sector;
    flash->darktime = fastOrSlow;
    flash->brighttime = STROBEBRIGHT;
    flash->thinker.function.acp1 = (actionf_p1) T_StrobeFlash;
    flash->maxlight = sector->lightlevel;
    flash->minlight = P_FindMinSurroundingLight(sector, sector->lightlevel);
		
    if (flash->minlight == flash->maxlight)
	flash->minlight = 0;

    // nothing special about it during gameplay
    sector->special = 0;	

    if (!inSync)
	flash->count = (P_Random()&7)+1;
    else
	flash->count = 1;
}


//
// Start strobing lights (usually from a trigger)
//
void EV_StartLightStrobing(line_t*	line)
{
    int		secnum;
    sector_t*	sec;
	
    secnum = -1;
    while ((secnum = P_FindSectorFromLineTag(line,secnum)) >= 0)
    {
	sec = &sectors[secnum];
	if (sec->specialdata)
	    continue;
	
	P_SpawnStrobeFlash (sec,SLOWDARK, 0);
    }
}



//
// TURN LINE'S TAG LIGHTS OFF
//
void EV_TurnTagLightsOff(line_t* line)
{
    int			i;
    int			j;
    int			min;
    sector_t*		sector;
    sector_t*		tsec;
    line_t*		templine;
	
    sector = sectors;
    
    for (j = 0;j < numsectors; j++, sector++)
    {
	if (sector->tag == line->tag)
	{
	    min = sector->lightlevel;
	    for (i = 0;i < sector->linecount; i++)
	    {
		templine = sector->lines[i];
		tsec = getNextSector(templine,sector);
		if (!tsec)
		    continue;
		if (tsec->lightlevel < min)
		    min = tsec->lightlevel;
	    }
	    sector->lightlevel = min;
	}
    }
}


//
// TURN LINE'S TAG LIGHTS ON
//
void
EV_LightTurnOn
( line_t*	line,
  int		bright )
{
    int		i;
    int		j;
    sector_t*	sector;
    sector_t*	temp;
    line_t*	templine;
	
    sector = sectors;
	
    for (i=0;i<numsectors;i++, sector++)
    {
	if (sector->tag == line->tag)
	{
	    // bright = 0 means to search
	    // for highest light level
	    // surrounding sector
	    if (!bright)
	    {
		for (j = 0;j < sector->linecount; j++)
		{
		    templine = sector->lines[j];
		    temp = getNextSector(templine,sector);

		    if (!temp)
			continue;

		    if (temp->lightlevel > bright)
			bright = temp->lightlevel;
		}
	    }
	    sector-> lightlevel = bright;
	}
    }
}

    
//
// Spawn glowing light
//

void T_Glow(glow_t*	g)
{
    switch(g->direction)
    {
      case -1:
	// DOWN
	g->sector->lightlevel -= GLOWSPEED;
	if (g->sector->lightlevel <= g->minlight)
	{
	    g->sector->lightlevel += GLOWSPEED;
	    g->direction = 1;
	}
	break;
	
      case 1:
	// UP
	g->sector->lightlevel += GLOWSPEED;
	if (g->sector->lightlevel >= g->maxlight)
	{
	    g->sector->lightlevel -= GLOWSPEED;
	    g->direction = -1;
	}
	break;
    }
}


void P_SpawnGlowingLight(sector_t*	sector)
{
    glow_t*	g;
	
    g = Z_Malloc( sizeof(*g), PU_LEVSPEC, 0);

    P_AddThinker(&g->thinker);

    g->sector = sector;
    g->minlight = P_FindMinSurroundingLight(sector,sector->lightlevel);
    g->maxlight = sector->lightlevel;
    g->thinker.function.acp1 = (actionf_p1) T_Glow;
    g->direction = -1;

    sector->special = 0;
}

```