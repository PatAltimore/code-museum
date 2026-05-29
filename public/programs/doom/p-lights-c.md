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
description: "This file implements dynamic lighting effects in DOOM, a feature that contributed to the game's immersive atmosphere and technical innovation."

summary:
  - point: "Dynamic lighting effects like flickering and strobing were implemented to enhance realism."
    link: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Sector-based lighting allowed for efficient rendering on limited hardware."
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "The 'Thinker' system enabled modular and reusable game logic."
    link: "https://doomwiki.org/wiki/Thinker"
    link_label: "Thinker system in DOOM"

enhancements:
  - id: "firelight-flicker-effect"
    line_start: 35
    line_end: 60
    title: "The Trick Behind Flickering Firelight"
    wikipedia_url: "https://doomwiki.org/wiki/Doom_rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `T_FireFlicker` function simulates the flickering effect of firelight by periodically adjusting the light level of a sector. The code uses a random number generator to introduce variability, creating a convincing illusion of natural firelight. At the time, DOOM's developers were working with hardware constraints that limited graphical fidelity, so dynamic lighting effects like this were a clever way to enhance immersion without taxing the CPU. John Carmack's focus on efficient algorithms ensured that even these atmospheric touches could run smoothly on consumer-grade PCs. This technique influenced later games, including Quake and Unreal, which expanded on dynamic lighting to create even more realistic environments."
  - id: "spawn-firelight-flicker"
    line_start: 64
    line_end: 84
    title: "How DOOM Made Firelight Feel Alive"
    wikipedia_url: "https://doomwiki.org/wiki/Sector"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnFireFlicker` function initializes the firelight flickering effect for a given sector. It allocates memory for a `fireflicker_t` structure, sets up the 'Thinker' system to manage periodic updates, and calculates minimum and maximum light levels. This modular approach allowed DOOM's developers to reuse the flickering logic across multiple levels without duplicating code. At the time, memory management was a critical concern, and the use of the `Z_Malloc` function reflects id Software's careful handling of resources. The idea of associating dynamic effects with game sectors became a standard practice in level design, influencing engines like Source and Unity."
  - id: "broken-light-flash-effect"
    line_start: 93
    line_end: 113
    title: "Simulating Broken Lights with Random Timing"
    wikipedia_url: "https://doomwiki.org/wiki/Lighting"
    image_url: ""
    image_caption: ""
    content: "The `T_LightFlash` function creates the effect of broken or malfunctioning lights by alternating between maximum and minimum light levels with random timing. This randomness adds unpredictability, enhancing the eerie atmosphere of DOOM's levels. The use of pseudo-random numbers (`P_Random`) was a common technique in games of the era to simulate natural or chaotic phenomena. This effect, though simple, contributed to DOOM's reputation for immersive environments and was later refined in games like Half-Life, where lighting played a critical role in storytelling and mood."
  - id: "spawn-light-flash"
    line_start: 118
    line_end: 142
    title: "Automating Broken Light Effects in Levels"
    wikipedia_url: "https://doomwiki.org/wiki/Sector_specials"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnLightFlash` function automates the creation of broken light effects for sectors in a level. It sets up the 'Thinker' system to periodically update the light level, ensuring the effect persists throughout gameplay. By scanning sectors for special attributes after a map is loaded, DOOM's engine could dynamically apply effects without hardcoding them into the level design. This flexibility allowed level designers to focus on creativity while the engine handled technical implementation. The modularity of this system influenced later engines like Unreal Engine, which adopted similar approaches for dynamic environment effects."
  - id: "strobe-light-effect"
    line_start: 151
    line_end: 208
    title: "The Algorithm Behind Strobe Lighting"
    wikipedia_url: "https://doomwiki.org/wiki/Doom_rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `T_StrobeFlash` function implements strobe lighting by alternating between bright and dark light levels at fixed intervals. This effect was used to create dramatic and unsettling environments, particularly in DOOM's more intense levels. The function's simplicity reflects id Software's philosophy of building efficient, reusable code. Strobe lighting became a staple in horror and action games, influencing level design in titles like Resident Evil and Dead Space, where lighting is used to heighten tension and direct player focus."
  - id: "spawn-strobe-light"
    line_start: 211
    line_end: 228
    title: "Synchronizing Strobe Lights Across Levels"
    wikipedia_url: "https://doomwiki.org/wiki/Sector_specials"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnStrobeFlash` function initializes strobe lighting for a sector, with options for synchronization and speed. By allowing strobe lights to operate in sync or independently, DOOM's engine provided level designers with greater creative control. This function also demonstrates the modularity of DOOM's 'Thinker' system, which was designed to handle diverse game logic efficiently. The ability to synchronize effects across sectors influenced later engines, enabling complex environmental interactions in games like Bioshock and Portal."
  - id: "turn-tag-lights-off"
    line_start: 232
    line_end: 306
    title: "How DOOM Turned Lights Off Dynamically"
    wikipedia_url: "https://doomwiki.org/wiki/Lighting"
    image_url: ""
    image_caption: ""
    content: "The `EV_TurnTagLightsOff` function dynamically adjusts the light levels of sectors tagged with a specific line identifier, setting them to the minimum surrounding light level. This feature allowed for scripted events, such as lights going out when a player triggers a trap. At the time, dynamic lighting adjustments were rare in games, as most relied on static pre-rendered lighting. DOOM's ability to manipulate light levels in real-time contributed to its immersive gameplay and inspired similar mechanics in games like System Shock and Thief."
  - id: "glowing-light-effect"
    line_start: 309
    line_end: 337
    title: "The Glow That Made DOOM Feel Alive"
    wikipedia_url: "https://doomwiki.org/wiki/Doom_rendering_engine"
    image_url: ""
    image_caption: ""
    content: "The `T_Glow` function creates a glowing light effect by gradually increasing and decreasing the light level of a sector. This smooth transition between brightness levels added a sense of dynamism to DOOM's environments, making them feel more alive. The function uses a simple state machine to alternate between 'up' and 'down' directions, ensuring the glow effect loops seamlessly. This technique was groundbreaking for its time and laid the groundwork for more sophisticated lighting systems in modern engines like Unity and Unreal Engine, where dynamic lighting is a core feature."

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
