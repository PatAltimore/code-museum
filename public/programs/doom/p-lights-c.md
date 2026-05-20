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
description: "This file handles dynamic lighting effects in DOOM, a key feature that enhanced the game's immersive atmosphere."

summary:
  - point: "Dynamic lighting effects like flickering and strobing are implemented here"
    link: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Sector-based lighting manipulation enabled environmental storytelling"
    link: "https://en.wikipedia.org/wiki/Level_design"
    link_label: "Level Design"
  - point: "Efficient algorithms for light transitions optimized for 1990s hardware"
    link: "https://en.wikipedia.org/wiki/Computer_hardware"
    link_label: "1990s Hardware"

enhancements:
  - id: "firelight-flicker-effect"
    line_start: 36
    line_end: 61
    title: "Simulating firelight flicker dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `T_FireFlicker`, dynamically simulates the flickering of firelight by periodically adjusting the light level of a sector. The flicker effect is achieved by reducing the light level randomly within a specified range, creating an illusion of fluctuating brightness. This was part of DOOM's effort to create more immersive environments, where lighting played a significant role in setting mood and tension. In the early 1990s, dynamic lighting effects were rare in games due to hardware limitations. John Carmack and the id Software team developed these techniques to push the boundaries of what was possible on consumer PCs of the era, such as the Intel 386 and 486 processors. The flicker effect contributed to DOOM's atmospheric design, influencing later games like Quake and Unreal, which expanded on dynamic lighting to create even more realistic environments."
  - id: "spawn-firelight-flicker"
    line_start: 65
    line_end: 85
    title: "Initializing firelight flicker in sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnFireFlicker` function initializes the firelight flicker effect for a specific sector. It allocates memory for the flicker structure, sets its parameters, and registers it as a thinker—a dynamic entity in DOOM's game loop. This approach reflects id Software's efficient use of memory and processing power, ensuring that lighting effects could be dynamically updated without overwhelming the hardware. By resetting sector attributes and dynamically calculating minimum light levels, the function ensures the flicker effect adapts to the surrounding environment. This modularity in lighting effects paved the way for more sophisticated environmental interactions in later games, influencing titles like Half-Life and Deus Ex, which used lighting to enhance narrative and gameplay."
  - id: "broken-light-flash"
    line_start: 94
    line_end: 114
    title: "Simulating broken light flashing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_LightFlash` subroutine simulates the effect of a broken or malfunctioning light by alternating the light level between maximum and minimum values at random intervals. This effect adds realism and tension to the game environment, particularly in areas designed to feel eerie or abandoned. The randomization of intervals ensures that the flashing pattern feels natural rather than predictable. In the context of 1993, such dynamic lighting effects were groundbreaking, as most games relied on static lighting. The technique demonstrated id Software's ability to innovate within the constraints of limited hardware, influencing the development of dynamic lighting systems in later engines like Unreal Engine and Source Engine."
  - id: "spawn-light-flash"
    line_start: 119
    line_end: 143
    title: "Initializing broken light flashing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnLightFlash` function sets up the broken light flashing effect for a sector. It allocates memory for the light flash structure, calculates light levels, and registers it as a thinker. This modular approach allows the game to dynamically apply lighting effects to specific sectors during gameplay, enhancing the player's experience. By scanning sectors after the map is loaded, the function ensures that lighting effects are seamlessly integrated into the environment. This technique influenced the development of dynamic environmental effects in later games, such as the atmospheric lighting in Thief and the scripted light changes in Resident Evil."
  - id: "strobe-light-flash"
    line_start: 152
    line_end: 171
    title: "Creating strobe light effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_StrobeFlash` subroutine implements strobe light effects by alternating the light level between bright and dark states at fixed intervals. This effect is often used in DOOM to create dramatic or disorienting environments, such as in areas with high enemy activity or near traps. The strobe effect is a testament to DOOM's innovative use of lighting to influence gameplay and atmosphere. In the 1990s, such effects were rare in games due to hardware limitations, but id Software's efficient algorithms allowed them to include these features without sacrificing performance. The strobe light effect became a staple in horror and action games, influencing titles like Silent Hill and Dead Space."
  - id: "spawn-strobe-light"
    line_start: 175
    line_end: 209
    title: "Initializing strobe light effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnStrobeFlash` function initializes strobe light effects for a sector, setting parameters like bright and dark times and registering the effect as a thinker. By allowing synchronization or randomization of the strobe pattern, the function provides flexibility in how the effect is applied, enabling designers to create varied and engaging environments. This modular approach to lighting effects reflects id Software's emphasis on efficient and reusable code. The strobe light initialization technique influenced the design of dynamic lighting systems in later engines, such as the advanced lighting in Unreal Engine and CryEngine."
  - id: "turn-tag-lights-off"
    line_start: 233
    line_end: 263
    title: "Turning off tagged sector lights"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `EV_TurnTagLightsOff` function reduces the light level of sectors with a specific tag to the minimum surrounding light level. This effect is often used in DOOM to create dramatic transitions, such as plunging a room into darkness after a player activates a switch. By iterating through sectors and calculating minimum light levels, the function ensures that the effect is consistent and impactful. This technique demonstrates id Software's attention to detail in environmental design, influencing later games that used lighting to enhance storytelling, such as Bioshock and The Last of Us."
  - id: "spawn-glowing-light"
    line_start: 314
    line_end: 356
    title: "Simulating glowing light transitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_Glow` subroutine creates a glowing light effect by smoothly transitioning the light level of a sector between minimum and maximum values. This effect adds a dynamic and atmospheric element to DOOM's environments, enhancing immersion. The glowing light effect is particularly effective in areas designed to feel mysterious or otherworldly. By implementing smooth transitions, id Software demonstrated their ability to create visually appealing effects within the constraints of 1990s hardware. The glowing light technique influenced the development of dynamic lighting systems in later games, such as the ambient lighting in Skyrim and the real-time lighting in modern engines like Unity."

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
