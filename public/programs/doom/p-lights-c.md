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
description: "This file implements dynamic lighting effects in DOOM, a groundbreaking feature that enhanced the game's atmosphere and realism."

summary:
  - point: "Dynamic lighting effects like flickering and strobing were implemented for immersive gameplay."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Sector-based lighting effects were tied to the game's map geometry."
    link: "https://en.wikipedia.org/wiki/Level_design"
    link_label: "Level Design"
  - point: "Efficient memory management was used to allocate light effect structures dynamically."
    link: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    link_label: "Dynamic Memory Allocation"

enhancements:
  - id: "firelight-flicker-effect"
    line_start: 46
    line_end: 61
    title: "Simulating firelight with flickering effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_lighting"
    image_url: ""
    image_caption: ""
    content: "The `T_FireFlicker` function simulates the flickering of firelight by periodically adjusting the light level of a sector in the game. This effect is achieved by decrementing a counter (`count`), calculating a random flicker amount, and ensuring the light level stays within a defined range (`minlight` and `maxlight`). In the early 1990s, dynamic lighting effects were rare in games, especially on consumer-grade hardware. John Carmack's approach here is both computationally efficient and visually impactful, leveraging randomization to create a natural, unpredictable flicker. This function reflects the team's commitment to creating an immersive environment despite hardware constraints. The flickering firelight became a hallmark of DOOM's atmospheric design, influencing how lighting effects were handled in later games."
  - id: "spawning-firelight-flicker"
    line_start: 68
    line_end: 85
    title: "Initializing firelight flicker in sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnFireFlicker` function sets up the firelight flicker effect for a given sector. It allocates memory for a `fireflicker_t` structure, initializes its properties, and links it to the game's thinker system for periodic updates. This modular design allows lighting effects to be tied directly to the game's map geometry, ensuring that the lighting interacts seamlessly with the environment. In 1993, such dynamic and localized lighting effects were groundbreaking, especially in a game running on modest hardware. The use of the `Z_Malloc` function reflects id Software's careful memory management practices, ensuring that resources were allocated efficiently. This initialization routine laid the groundwork for DOOM's dynamic lighting system, which became a defining feature of the game's visual style."
  - id: "broken-light-flashing"
    line_start: 98
    line_end: 114
    title: "Simulating broken lights with random flashing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_lighting"
    image_url: ""
    image_caption: ""
    content: "The `T_LightFlash` function simulates the erratic behavior of broken lights by alternating between maximum and minimum light levels at random intervals. The randomness is achieved using the `P_Random` function, which ensures that the flashing pattern is unpredictable and adds to the game's eerie atmosphere. In the early 1990s, such effects were rare in games, as they required careful programming to balance realism with performance. This function demonstrates id Software's innovative approach to creating immersive environments, using simple yet effective techniques to enhance the player's experience. The broken light effect contributed to DOOM's horror aesthetic, influencing the use of dynamic lighting in future games."
  - id: "spawning-light-flash"
    line_start: 124
    line_end: 143
    title: "Setting up flashing lights in sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnLightFlash` function initializes the flashing light effect for a sector. It allocates memory for a `lightflash_t` structure, sets its properties, and links it to the thinker system for periodic updates. This routine ensures that the flashing effect interacts seamlessly with the game's map geometry, enhancing the atmosphere of specific areas. The use of dynamic memory allocation (`Z_Malloc`) reflects id Software's efficient resource management practices, which were crucial for running complex effects on limited hardware. By tying lighting effects directly to sectors, the team created a system that was both flexible and performant, paving the way for more advanced lighting systems in later games."
  - id: "strobe-light-flashing"
    line_start: 155
    line_end: 171
    title: "Creating strobe light effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_lighting"
    image_url: ""
    image_caption: ""
    content: "The `T_StrobeFlash` function implements strobe lighting by alternating between bright and dark light levels at fixed intervals. This effect is commonly associated with high-energy or tense environments, such as industrial areas or enemy encounters. In 1993, strobe lighting was a novel feature in games, requiring precise timing and efficient computation to achieve a convincing effect. John Carmack's code here reflects his mastery of low-level programming, using simple logic to create a visually striking result. The strobe effect became a staple of DOOM's level design, adding to the game's intensity and influencing lighting techniques in later titles."
  - id: "spawning-strobe-light"
    line_start: 180
    line_end: 209
    title: "Initializing strobe light effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnStrobeFlash` function sets up strobe lighting for a sector, allowing the effect to be triggered dynamically during gameplay. It allocates memory for a `strobe_t` structure, initializes its properties, and links it to the thinker system for periodic updates. This modular approach ensures that strobe lighting can be applied flexibly across different sectors, enhancing the game's atmosphere. The inclusion of synchronization options (`inSync`) reflects id Software's attention to detail, allowing strobe effects to be coordinated across multiple sectors. This routine highlights the team's innovative use of dynamic lighting to create immersive and memorable environments in DOOM."
  - id: "turning-lights-off"
    line_start: 236
    line_end: 263
    title: "Turning off lights dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_lighting"
    image_url: ""
    image_caption: ""
    content: "The `EV_TurnTagLightsOff` function reduces the light level of sectors tagged with a specific line identifier to the minimum surrounding light level. This effect is used to create dramatic changes in lighting during gameplay, such as when entering a dark area or triggering an event. The function iterates through all sectors, identifying those with matching tags and calculating the minimum light level based on neighboring sectors. This approach reflects id Software's innovative use of sector-based lighting to enhance gameplay and atmosphere. By dynamically adjusting lighting, the team created environments that felt reactive and alive, setting a new standard for immersion in video games."
  - id: "glowing-light-effect"
    line_start: 314
    line_end: 356
    title: "Simulating glowing lights with gradual changes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_lighting"
    image_url: ""
    image_caption: ""
    content: "The `T_Glow` function creates a glowing light effect by gradually increasing and decreasing the light level of a sector. This effect is achieved by adjusting the light level in small increments (`GLOWSPEED`) and reversing direction when the maximum or minimum light level is reached. The glowing effect adds a sense of dynamism and realism to the game's environment, enhancing the atmosphere of specific areas. In the early 1990s, such effects were rare in games, as they required careful programming to balance visual impact with performance. John Carmack's implementation here reflects his ability to create visually striking effects with minimal computational overhead. The glowing light effect became a subtle yet impactful feature of DOOM's level design, influencing the use of dynamic lighting in future games."

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
