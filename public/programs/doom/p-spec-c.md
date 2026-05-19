---
title: "p_spec.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/p_spec.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/p_spec.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "p-spec-c"
order: 33
description: "This file implements special effects and utilities for DOOM's dynamic environments, showcasing techniques that pushed the boundaries of 3D gaming in 1993."

summary:
  - point: "Defines animation sequences for textures and flats"
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture Mapping"
  - point: "Implements utilities for sector and line manipulation"
    link: "https://en.wikipedia.org/wiki/DOOM_engine"
    link_label: "DOOM Engine"
  - point: "Handles triggers for environmental events like doors and platforms"
    link: "https://en.wikipedia.org/wiki/DOOM"
    link_label: "DOOM"
  - point: "Introduces algorithms for finding floor and ceiling heights"
    link: "https://en.wikipedia.org/wiki/3D_computer_graphics"
    link_label: "3D Graphics"
  - point: "Manages light levels dynamically based on surrounding sectors"
    link: "https://en.wikipedia.org/wiki/Lighting_(computer_graphics)"
    link_label: "Lighting in Computer Graphics"

enhancements:
  - id: "texture-animation-definitions"
    line_start: 56
    line_end: 132
    title: "Animating textures and environmental flats"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "This section defines the structures and data for animating textures and flats in DOOM. The `anim_t` and `animdef_t` structures specify whether the animation applies to textures or flats, the sequence of frames, and the speed of animation. The `animdefs` array lists predefined animations, such as flowing water or lava, by specifying the start and end textures or flats. These animations contribute to the game's immersive environments, making them feel alive and dynamic. In 1993, such environmental effects were rare in games, especially on consumer-grade hardware. John Carmack and his team leveraged the WAD file format to organize these animations efficiently, allowing the game to load and cycle through textures seamlessly. This technique influenced later games like Quake and Unreal, where texture animation became a staple for creating realistic environments. Developers studying DOOM's source code often cite this section as an example of efficient resource management and creative use of hardware constraints."
  - id: "pic-animation-initialization"
    line_start: 148
    line_end: 187
    title: "Initializing texture and flat animations"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_engine"
    image_url: ""
    image_caption: ""
    content: "The `P_InitPicAnims` function initializes the animation sequences defined earlier. It iterates through the `animdefs` array and sets up the `anims` array with the corresponding texture or flat indices, number of frames, and animation speed. The function checks whether the textures or flats exist in the WAD file before adding them to the animation list, ensuring robustness. This initialization process reflects the modular design of DOOM's engine, where assets are loaded dynamically based on the game's current state. In the early 1990s, this approach was groundbreaking, allowing developers to create large, detailed environments without overwhelming the limited memory and processing power of consumer PCs. The modularity and efficiency of this system influenced the design of later engines like the Source engine and Unity, which also prioritize dynamic asset management."
  - id: "sector-line-utilities"
    line_start: 198
    line_end: 262
    title: "Utilities for sector and line manipulation"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_engine"
    image_url: ""
    image_caption: ""
    content: "This section introduces utility functions for interacting with sectors and lines in DOOM's map data. Functions like `getSide`, `getSector`, and `twoSided` provide abstractions for accessing and evaluating map elements, such as determining whether a line is two-sided or retrieving the sector adjacent to a given line. These utilities simplify the implementation of gameplay mechanics, such as doors, platforms, and triggers. In the context of 1993, these abstractions were essential for managing the complexity of DOOM's maps, which featured interconnected rooms and dynamic elements. By encapsulating these operations in reusable functions, the developers ensured that the codebase remained maintainable and adaptable. This approach to modular design influenced later game engines, encouraging developers to create reusable components for common operations."
  - id: "floor-height-algorithms"
    line_start: 267
    line_end: 375
    title: "Finding floor heights in surrounding sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/3D_computer_graphics"
    image_url: ""
    image_caption: ""
    content: "The functions `P_FindLowestFloorSurrounding`, `P_FindHighestFloorSurrounding`, and `P_FindNextHighestFloor` implement algorithms for determining floor heights in adjacent sectors. These calculations are crucial for gameplay mechanics, such as raising or lowering platforms and ensuring smooth transitions between sectors. The algorithms iterate through the lines of a sector, checking the floor heights of adjacent sectors and storing the results. In 1993, these techniques were innovative, enabling DOOM to create dynamic environments that responded to player actions. The ability to manipulate floor heights in real-time contributed to the game's sense of immersion and interactivity. These algorithms influenced later games and engines, where dynamic terrain manipulation became a standard feature, particularly in level editors and procedural generation tools."
  - id: "ceiling-height-algorithms"
    line_start: 379
    line_end: 426
    title: "Finding ceiling heights in surrounding sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/3D_computer_graphics"
    image_url: ""
    image_caption: ""
    content: "Similar to the floor height functions, `P_FindLowestCeilingSurrounding` and `P_FindHighestCeilingSurrounding` calculate ceiling heights in adjacent sectors. These functions are used to create dynamic ceiling effects, such as crushing ceilings or raising ceilings to open up new areas. By iterating through the lines of a sector and checking the ceiling heights of neighboring sectors, the algorithms ensure that the game can respond dynamically to player actions and environmental triggers. In the early 1990s, such dynamic manipulation of ceilings and floors was rare, as most games featured static environments. DOOM's ability to create interactive and changing environments set a new standard for level design, influencing games like Half-Life and Portal, which also emphasized environmental interactivity."
  - id: "line-tag-mechanics"
    line_start: 431
    line_end: 445
    title: "Finding sectors by line tags"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_engine"
    image_url: ""
    image_caption: ""
    content: "The `P_FindSectorFromLineTag` function retrieves sectors associated with a specific line tag. Line tags are used to link lines and sectors, enabling complex interactions like doors opening when a switch is activated or platforms moving when a player crosses a line. This tagging system is a cornerstone of DOOM's level design, allowing designers to create intricate puzzles and dynamic environments. In 1993, this approach was revolutionary, as it provided a simple yet powerful mechanism for scripting interactions within levels. The concept of linking game elements through tags influenced later engines, such as Unreal Engine and Unity, where similar systems are used to manage interactions between objects and triggers."
  - id: "light-level-algorithms"
    line_start: 451
    line_end: 475
    title: "Adjusting light levels dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lighting_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `P_FindMinSurroundingLight` function calculates the minimum light level in surrounding sectors, allowing DOOM to adjust lighting dynamically based on the environment. This feature enhances the game's atmosphere, creating tension and immersion by simulating realistic lighting conditions. In 1993, dynamic lighting was a cutting-edge feature, as most games relied on static, pre-rendered lighting. DOOM's ability to adjust light levels in real-time contributed to its reputation as a technical marvel. This technique influenced later games and engines, where dynamic lighting became a standard feature, particularly in horror and action games that rely on atmospheric effects."
  - id: "cross-special-line-trigger"
    line_start: 487
    line_end: 800
    title: "Triggering events by crossing special lines"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM"
    image_url: ""
    image_caption: ""
    content: "The `P_CrossSpecialLine` function handles triggers activated when a player or object crosses a special line. These triggers include opening doors, activating platforms, teleporting, and changing light levels. The function checks the type of object crossing the line and the line's special property to determine the appropriate action. This system allows DOOM to create interactive environments where player actions directly influence the world. In 1993, such interactivity was groundbreaking, as most games featured static environments with limited player agency. DOOM's trigger system became a model for later games, influencing level design in titles like Quake, Unreal, and Half-Life, where interactive environments are a central feature."
  - id: "sector-special-effects"
    line_start: 1009
    line_end: 1071
    title: "Sector Effects: Damage, Secrets, and Exits"
    wikipedia_url: "https://doomwiki.org/wiki/Sector_special"
    image_url: ""
    image_caption: ""
    content: "This section defines the behavior of special sectors in DOOM, including damage zones, secret areas, and level exits. Sectors are regions of the map that can have unique properties, such as inflicting damage on players or triggering events. For example, 'HELLSLIME DAMAGE' sectors cause periodic damage unless the player has protective gear, while 'SECRET SECTOR' increments the player's secret count and marks the sector as discovered. These mechanics were revolutionary in 1993, adding depth and interactivity to the game world. At the time, most games featured static environments with limited player interaction. DOOM's dynamic sectors inspired future games to incorporate environmental storytelling and interactive elements. Titles like Quake and Half-Life built on these ideas, creating immersive worlds with complex interactions."
  - id: "animated-textures-and-global-effects"
    line_start: 1077
    line_end: 1156
    title: "Animating Textures and Global Effects"
    wikipedia_url: "https://doomwiki.org/wiki/Texture_animation"
    image_url: ""
    image_caption: ""
    content: "This section handles global animations and effects, such as scrolling textures, animated flats, and timed level exits. The code iterates through animations and updates texture mappings based on the current game time. It also manages line specials, such as scrolling walls, and button interactions that change textures dynamically. These features were groundbreaking for their time, creating a sense of a living, breathing world. The concept of animated textures and dynamic environments influenced later games, including Unreal and the Source engine, which expanded on these ideas with more sophisticated rendering techniques and physics-based interactions."
  - id: "donut-sector-effect"
    line_start: 1163
    line_end: 1221
    title: "The Donut Sector: A Rising Slime Effect"
    wikipedia_url: "https://doomwiki.org/wiki/Donut_sector"
    image_url: ""
    image_caption: ""
    content: "The 'donut' effect is a unique gameplay mechanic where a central sector lowers while an outer sector rises, creating a dynamic visual and gameplay element. This code spawns two floor movements: one for the central 'donut hole' and another for the surrounding slime. The effect adds variety to level design, showcasing the flexibility of DOOM's engine. John Carmack's innovative use of sector-based effects was a direct response to the limitations of hardware at the time, which required clever tricks to simulate complex environments. The donut effect inspired similar dynamic elements in games like Duke Nukem 3D and later level editors, where designers sought to create interactive and visually engaging spaces."
  - id: "special-spawning-and-map-initialization"
    line_start: 1230
    line_end: 1362
    title: "Spawning Specials: Flickering Lights and Timed Events"
    wikipedia_url: "https://doomwiki.org/wiki/Level_design"
    image_url: ""
    image_caption: ""
    content: "This section initializes special map elements after loading, including flickering lights, strobe effects, glowing lights, and timed door events. It also parses command-line parameters to enable features like level timers in deathmatch mode. By scanning sectors and lines for special properties, the code ensures that each map's unique elements are activated correctly. These dynamic features were a hallmark of DOOM's level design, allowing for varied gameplay experiences. The idea of special spawning influenced level editors and scripting systems in later games, such as Unreal Engine's Kismet and Unity's event-driven architecture, enabling developers to create intricate and reactive environments."

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
//	Implements special effects:
//	Texture animation, height or lighting changes
//	 according to adjacent sectors, respective
//	 utility functions, etc.
//	Line Tag handling. Line and Sector triggers.
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: p_spec.c,v 1.6 1997/02/03 22:45:12 b1 Exp $";

#include <stdlib.h>

#include "doomdef.h"
#include "doomstat.h"

#include "i_system.h"
#include "z_zone.h"
#include "m_argv.h"
#include "m_random.h"
#include "w_wad.h"

#include "r_local.h"
#include "p_local.h"

#include "g_game.h"

#include "s_sound.h"

// State.
#include "r_state.h"

// Data.
#include "sounds.h"


//
// Animating textures and planes
// There is another anim_t used in wi_stuff, unrelated.
//
typedef struct
{
    boolean	istexture;
    int		picnum;
    int		basepic;
    int		numpics;
    int		speed;
    
} anim_t;

//
//      source animation definition
//
typedef struct
{
    boolean	istexture;	// if false, it is a flat
    char	endname[9];
    char	startname[9];
    int		speed;
} animdef_t;



#define MAXANIMS                32

extern anim_t	anims[MAXANIMS];
extern anim_t*	lastanim;

//
// P_InitPicAnims
//

// Floor/ceiling animation sequences,
//  defined by first and last frame,
//  i.e. the flat (64x64 tile) name to
//  be used.
// The full animation sequence is given
//  using all the flats between the start
//  and end entry, in the order found in
//  the WAD file.
//
animdef_t		animdefs[] =
{
    {false,	"NUKAGE3",	"NUKAGE1",	8},
    {false,	"FWATER4",	"FWATER1",	8},
    {false,	"SWATER4",	"SWATER1", 	8},
    {false,	"LAVA4",	"LAVA1",	8},
    {false,	"BLOOD3",	"BLOOD1",	8},

    // DOOM II flat animations.
    {false,	"RROCK08",	"RROCK05",	8},		
    {false,	"SLIME04",	"SLIME01",	8},
    {false,	"SLIME08",	"SLIME05",	8},
    {false,	"SLIME12",	"SLIME09",	8},

    {true,	"BLODGR4",	"BLODGR1",	8},
    {true,	"SLADRIP3",	"SLADRIP1",	8},

    {true,	"BLODRIP4",	"BLODRIP1",	8},
    {true,	"FIREWALL",	"FIREWALA",	8},
    {true,	"GSTFONT3",	"GSTFONT1",	8},
    {true,	"FIRELAVA",	"FIRELAV3",	8},
    {true,	"FIREMAG3",	"FIREMAG1",	8},
    {true,	"FIREBLU2",	"FIREBLU1",	8},
    {true,	"ROCKRED3",	"ROCKRED1",	8},

    {true,	"BFALL4",	"BFALL1",	8},
    {true,	"SFALL4",	"SFALL1",	8},
    {true,	"WFALL4",	"WFALL1",	8},
    {true,	"DBRAIN4",	"DBRAIN1",	8},
	
    {-1}
};

anim_t		anims[MAXANIMS];
anim_t*		lastanim;


//
//      Animating line specials
//
#define MAXLINEANIMS            64

extern  short	numlinespecials;
extern  line_t*	linespeciallist[MAXLINEANIMS];



void P_InitPicAnims (void)
{
    int		i;

    
    //	Init animation
    lastanim = anims;
    for (i=0 ; animdefs[i].istexture != -1 ; i++)
    {
	if (animdefs[i].istexture)
	{
	    // different episode ?
	    if (R_CheckTextureNumForName(animdefs[i].startname) == -1)
		continue;	

	    lastanim->picnum = R_TextureNumForName (animdefs[i].endname);
	    lastanim->basepic = R_TextureNumForName (animdefs[i].startname);
	}
	else
	{
	    if (W_CheckNumForName(animdefs[i].startname) == -1)
		continue;

	    lastanim->picnum = R_FlatNumForName (animdefs[i].endname);
	    lastanim->basepic = R_FlatNumForName (animdefs[i].startname);
	}

	lastanim->istexture = animdefs[i].istexture;
	lastanim->numpics = lastanim->picnum - lastanim->basepic + 1;

	if (lastanim->numpics < 2)
	    I_Error ("P_InitPicAnims: bad cycle from %s to %s",
		     animdefs[i].startname,
		     animdefs[i].endname);
	
	lastanim->speed = animdefs[i].speed;
	lastanim++;
    }
	
}



//
// UTILITIES
//



//
// getSide()
// Will return a side_t*
//  given the number of the current sector,
//  the line number, and the side (0/1) that you want.
//
side_t*
getSide
( int		currentSector,
  int		line,
  int		side )
{
    return &sides[ (sectors[currentSector].lines[line])->sidenum[side] ];
}


//
// getSector()
// Will return a sector_t*
//  given the number of the current sector,
//  the line number and the side (0/1) that you want.
//
sector_t*
getSector
( int		currentSector,
  int		line,
  int		side )
{
    return sides[ (sectors[currentSector].lines[line])->sidenum[side] ].sector;
}


//
// twoSided()
// Given the sector number and the line number,
//  it will tell you whether the line is two-sided or not.
//
int
twoSided
( int	sector,
  int	line )
{
    return (sectors[sector].lines[line])->flags & ML_TWOSIDED;
}




//
// getNextSector()
// Return sector_t * of sector next to current.
// NULL if not two-sided line
//
sector_t*
getNextSector
( line_t*	line,
  sector_t*	sec )
{
    if (!(line->flags & ML_TWOSIDED))
	return NULL;
		
    if (line->frontsector == sec)
	return line->backsector;
	
    return line->frontsector;
}



//
// P_FindLowestFloorSurrounding()
// FIND LOWEST FLOOR HEIGHT IN SURROUNDING SECTORS
//
fixed_t	P_FindLowestFloorSurrounding(sector_t* sec)
{
    int			i;
    line_t*		check;
    sector_t*		other;
    fixed_t		floor = sec->floorheight;
	
    for (i=0 ;i < sec->linecount ; i++)
    {
	check = sec->lines[i];
	other = getNextSector(check,sec);

	if (!other)
	    continue;
	
	if (other->floorheight < floor)
	    floor = other->floorheight;
    }
    return floor;
}



//
// P_FindHighestFloorSurrounding()
// FIND HIGHEST FLOOR HEIGHT IN SURROUNDING SECTORS
//
fixed_t	P_FindHighestFloorSurrounding(sector_t *sec)
{
    int			i;
    line_t*		check;
    sector_t*		other;
    fixed_t		floor = -500*FRACUNIT;
	
    for (i=0 ;i < sec->linecount ; i++)
    {
	check = sec->lines[i];
	other = getNextSector(check,sec);
	
	if (!other)
	    continue;
	
	if (other->floorheight > floor)
	    floor = other->floorheight;
    }
    return floor;
}



//
// P_FindNextHighestFloor
// FIND NEXT HIGHEST FLOOR IN SURROUNDING SECTORS
// Note: this should be doable w/o a fixed array.

// 20 adjoining sectors max!
#define MAX_ADJOINING_SECTORS    	20

fixed_t
P_FindNextHighestFloor
( sector_t*	sec,
  int		currentheight )
{
    int			i;
    int			h;
    int			min;
    line_t*		check;
    sector_t*		other;
    fixed_t		height = currentheight;

    
    fixed_t		heightlist[MAX_ADJOINING_SECTORS];		

    for (i=0, h=0 ;i < sec->linecount ; i++)
    {
	check = sec->lines[i];
	other = getNextSector(check,sec);

	if (!other)
	    continue;
	
	if (other->floorheight > height)
	    heightlist[h++] = other->floorheight;

	// Check for overflow. Exit.
	if ( h >= MAX_ADJOINING_SECTORS )
	{
	    fprintf( stderr,
		     "Sector with more than 20 adjoining sectors\n" );
	    break;
	}
    }
    
    // Find lowest height in list
    if (!h)
	return currentheight;
		
    min = heightlist[0];
    
    // Range checking? 
    for (i = 1;i < h;i++)
	if (heightlist[i] < min)
	    min = heightlist[i];
			
    return min;
}


//
// FIND LOWEST CEILING IN THE SURROUNDING SECTORS
//
fixed_t
P_FindLowestCeilingSurrounding(sector_t* sec)
{
    int			i;
    line_t*		check;
    sector_t*		other;
    fixed_t		height = MAXINT;
	
    for (i=0 ;i < sec->linecount ; i++)
    {
	check = sec->lines[i];
	other = getNextSector(check,sec);

	if (!other)
	    continue;

	if (other->ceilingheight < height)
	    height = other->ceilingheight;
    }
    return height;
}


//
// FIND HIGHEST CEILING IN THE SURROUNDING SECTORS
//
fixed_t	P_FindHighestCeilingSurrounding(sector_t* sec)
{
    int		i;
    line_t*	check;
    sector_t*	other;
    fixed_t	height = 0;
	
    for (i=0 ;i < sec->linecount ; i++)
    {
	check = sec->lines[i];
	other = getNextSector(check,sec);

	if (!other)
	    continue;

	if (other->ceilingheight > height)
	    height = other->ceilingheight;
    }
    return height;
}



//
// RETURN NEXT SECTOR # THAT LINE TAG REFERS TO
//
int
P_FindSectorFromLineTag
( line_t*	line,
  int		start )
{
    int	i;
	
    for (i=start+1;i<numsectors;i++)
	if (sectors[i].tag == line->tag)
	    return i;
    
    return -1;
}




//
// Find minimum light from an adjacent sector
//
int
P_FindMinSurroundingLight
( sector_t*	sector,
  int		max )
{
    int		i;
    int		min;
    line_t*	line;
    sector_t*	check;
	
    min = max;
    for (i=0 ; i < sector->linecount ; i++)
    {
	line = sector->lines[i];
	check = getNextSector(line,sector);

	if (!check)
	    continue;

	if (check->lightlevel < min)
	    min = check->lightlevel;
    }
    return min;
}



//
// EVENTS
// Events are operations triggered by using, crossing,
// or shooting special lines, or by timed thinkers.
//

//
// P_CrossSpecialLine - TRIGGER
// Called every time a thing origin is about
//  to cross a line with a non 0 special.
//
void
P_CrossSpecialLine
( int		linenum,
  int		side,
  mobj_t*	thing )
{
    line_t*	line;
    int		ok;

    line = &lines[linenum];
    
    //	Triggers that other things can activate
    if (!thing->player)
    {
	// Things that should NOT trigger specials...
	switch(thing->type)
	{
	  case MT_ROCKET:
	  case MT_PLASMA:
	  case MT_BFG:
	  case MT_TROOPSHOT:
	  case MT_HEADSHOT:
	  case MT_BRUISERSHOT:
	    return;
	    break;
	    
	  default: break;
	}
		
	ok = 0;
	switch(line->special)
	{
	  case 39:	// TELEPORT TRIGGER
	  case 97:	// TELEPORT RETRIGGER
	  case 125:	// TELEPORT MONSTERONLY TRIGGER
	  case 126:	// TELEPORT MONSTERONLY RETRIGGER
	  case 4:	// RAISE DOOR
	  case 10:	// PLAT DOWN-WAIT-UP-STAY TRIGGER
	  case 88:	// PLAT DOWN-WAIT-UP-STAY RETRIGGER
	    ok = 1;
	    break;
	}
	if (!ok)
	    return;
    }

    
    // Note: could use some const's here.
    switch (line->special)
    {
	// TRIGGERS.
	// All from here to RETRIGGERS.
      case 2:
	// Open Door
	EV_DoDoor(line,open);
	line->special = 0;
	break;

      case 3:
	// Close Door
	EV_DoDoor(line,close);
	line->special = 0;
	break;

      case 4:
	// Raise Door
	EV_DoDoor(line,normal);
	line->special = 0;
	break;
	
      case 5:
	// Raise Floor
	EV_DoFloor(line,raiseFloor);
	line->special = 0;
	break;
	
      case 6:
	// Fast Ceiling Crush & Raise
	EV_DoCeiling(line,fastCrushAndRaise);
	line->special = 0;
	break;
	
      case 8:
	// Build Stairs
	EV_BuildStairs(line,build8);
	line->special = 0;
	break;
	
      case 10:
	// PlatDownWaitUp
	EV_DoPlat(line,downWaitUpStay,0);
	line->special = 0;
	break;
	
      case 12:
	// Light Turn On - brightest near
	EV_LightTurnOn(line,0);
	line->special = 0;
	break;
	
      case 13:
	// Light Turn On 255
	EV_LightTurnOn(line,255);
	line->special = 0;
	break;
	
      case 16:
	// Close Door 30
	EV_DoDoor(line,close30ThenOpen);
	line->special = 0;
	break;
	
      case 17:
	// Start Light Strobing
	EV_StartLightStrobing(line);
	line->special = 0;
	break;
	
      case 19:
	// Lower Floor
	EV_DoFloor(line,lowerFloor);
	line->special = 0;
	break;
	
      case 22:
	// Raise floor to nearest height and change texture
	EV_DoPlat(line,raiseToNearestAndChange,0);
	line->special = 0;
	break;
	
      case 25:
	// Ceiling Crush and Raise
	EV_DoCeiling(line,crushAndRaise);
	line->special = 0;
	break;
	
      case 30:
	// Raise floor to shortest texture height
	//  on either side of lines.
	EV_DoFloor(line,raiseToTexture);
	line->special = 0;
	break;
	
      case 35:
	// Lights Very Dark
	EV_LightTurnOn(line,35);
	line->special = 0;
	break;
	
      case 36:
	// Lower Floor (TURBO)
	EV_DoFloor(line,turboLower);
	line->special = 0;
	break;
	
      case 37:
	// LowerAndChange
	EV_DoFloor(line,lowerAndChange);
	line->special = 0;
	break;
	
      case 38:
	// Lower Floor To Lowest
	EV_DoFloor( line, lowerFloorToLowest );
	line->special = 0;
	break;
	
      case 39:
	// TELEPORT!
	EV_Teleport( line, side, thing );
	line->special = 0;
	break;

      case 40:
	// RaiseCeilingLowerFloor
	EV_DoCeiling( line, raiseToHighest );
	EV_DoFloor( line, lowerFloorToLowest );
	line->special = 0;
	break;
	
      case 44:
	// Ceiling Crush
	EV_DoCeiling( line, lowerAndCrush );
	line->special = 0;
	break;
	
      case 52:
	// EXIT!
	G_ExitLevel ();
	break;
	
      case 53:
	// Perpetual Platform Raise
	EV_DoPlat(line,perpetualRaise,0);
	line->special = 0;
	break;
	
      case 54:
	// Platform Stop
	EV_StopPlat(line);
	line->special = 0;
	break;

      case 56:
	// Raise Floor Crush
	EV_DoFloor(line,raiseFloorCrush);
	line->special = 0;
	break;

      case 57:
	// Ceiling Crush Stop
	EV_CeilingCrushStop(line);
	line->special = 0;
	break;
	
      case 58:
	// Raise Floor 24
	EV_DoFloor(line,raiseFloor24);
	line->special = 0;
	break;

      case 59:
	// Raise Floor 24 And Change
	EV_DoFloor(line,raiseFloor24AndChange);
	line->special = 0;
	break;
	
      case 104:
	// Turn lights off in sector(tag)
	EV_TurnTagLightsOff(line);
	line->special = 0;
	break;
	
      case 108:
	// Blazing Door Raise (faster than TURBO!)
	EV_DoDoor (line,blazeRaise);
	line->special = 0;
	break;
	
      case 109:
	// Blazing Door Open (faster than TURBO!)
	EV_DoDoor (line,blazeOpen);
	line->special = 0;
	break;
	
      case 100:
	// Build Stairs Turbo 16
	EV_BuildStairs(line,turbo16);
	line->special = 0;
	break;
	
      case 110:
	// Blazing Door Close (faster than TURBO!)
	EV_DoDoor (line,blazeClose);
	line->special = 0;
	break;

      case 119:
	// Raise floor to nearest surr. floor
	EV_DoFloor(line,raiseFloorToNearest);
	line->special = 0;
	break;
	
      case 121:
	// Blazing PlatDownWaitUpStay
	EV_DoPlat(line,blazeDWUS,0);
	line->special = 0;
	break;
	
      case 124:
	// Secret EXIT
	G_SecretExitLevel ();
	break;
		
      case 125:
	// TELEPORT MonsterONLY
	if (!thing->player)
	{
	    EV_Teleport( line, side, thing );
	    line->special = 0;
	}
	break;
	
      case 130:
	// Raise Floor Turbo
	EV_DoFloor(line,raiseFloorTurbo);
	line->special = 0;
	break;
	
      case 141:
	// Silent Ceiling Crush & Raise
	EV_DoCeiling(line,silentCrushAndRaise);
	line->special = 0;
	break;
	
	// RETRIGGERS.  All from here till end.
      case 72:
	// Ceiling Crush
	EV_DoCeiling( line, lowerAndCrush );
	break;

      case 73:
	// Ceiling Crush and Raise
	EV_DoCeiling(line,crushAndRaise);
	break;

      case 74:
	// Ceiling Crush Stop
	EV_CeilingCrushStop(line);
	break;
	
      case 75:
	// Close Door
	EV_DoDoor(line,close);
	break;
	
      case 76:
	// Close Door 30
	EV_DoDoor(line,close30ThenOpen);
	break;
	
      case 77:
	// Fast Ceiling Crush & Raise
	EV_DoCeiling(line,fastCrushAndRaise);
	break;
	
      case 79:
	// Lights Very Dark
	EV_LightTurnOn(line,35);
	break;
	
      case 80:
	// Light Turn On - brightest near
	EV_LightTurnOn(line,0);
	break;
	
      case 81:
	// Light Turn On 255
	EV_LightTurnOn(line,255);
	break;
	
      case 82:
	// Lower Floor To Lowest
	EV_DoFloor( line, lowerFloorToLowest );
	break;
	
      case 83:
	// Lower Floor
	EV_DoFloor(line,lowerFloor);
	break;

      case 84:
	// LowerAndChange
	EV_DoFloor(line,lowerAndChange);
	break;

      case 86:
	// Open Door
	EV_DoDoor(line,open);
	break;
	
      case 87:
	// Perpetual Platform Raise
	EV_DoPlat(line,perpetualRaise,0);
	break;
	
      case 88:
	// PlatDownWaitUp
	EV_DoPlat(line,downWaitUpStay,0);
	break;
	
      case 89:
	// Platform Stop
	EV_StopPlat(line);
	break;
	
      case 90:
	// Raise Door
	EV_DoDoor(line,normal);
	break;
	
      case 91:
	// Raise Floor
	EV_DoFloor(line,raiseFloor);
	break;
	
      case 92:
	// Raise Floor 24
	EV_DoFloor(line,raiseFloor24);
	break;
	
      case 93:
	// Raise Floor 24 And Change
	EV_DoFloor(line,raiseFloor24AndChange);
	break;
	
      case 94:
	// Raise Floor Crush
	EV_DoFloor(line,raiseFloorCrush);
	break;
	
      case 95:
	// Raise floor to nearest height
	// and change texture.
	EV_DoPlat(line,raiseToNearestAndChange,0);
	break;
	
      case 96:
	// Raise floor to shortest texture height
	// on either side of lines.
	EV_DoFloor(line,raiseToTexture);
	break;
	
      case 97:
	// TELEPORT!
	EV_Teleport( line, side, thing );
	break;
	
      case 98:
	// Lower Floor (TURBO)
	EV_DoFloor(line,turboLower);
	break;

      case 105:
	// Blazing Door Raise (faster than TURBO!)
	EV_DoDoor (line,blazeRaise);
	break;
	
      case 106:
	// Blazing Door Open (faster than TURBO!)
	EV_DoDoor (line,blazeOpen);
	break;

      case 107:
	// Blazing Door Close (faster than TURBO!)
	EV_DoDoor (line,blazeClose);
	break;

      case 120:
	// Blazing PlatDownWaitUpStay.
	EV_DoPlat(line,blazeDWUS,0);
	break;
	
      case 126:
	// TELEPORT MonsterONLY.
	if (!thing->player)
	    EV_Teleport( line, side, thing );
	break;
	
      case 128:
	// Raise To Nearest Floor
	EV_DoFloor(line,raiseFloorToNearest);
	break;
	
      case 129:
	// Raise Floor Turbo
	EV_DoFloor(line,raiseFloorTurbo);
	break;
    }
}



//
// P_ShootSpecialLine - IMPACT SPECIALS
// Called when a thing shoots a special line.
//
void
P_ShootSpecialLine
( mobj_t*	thing,
  line_t*	line )
{
    int		ok;
    
    //	Impacts that other things can activate.
    if (!thing->player)
    {
	ok = 0;
	switch(line->special)
	{
	  case 46:
	    // OPEN DOOR IMPACT
	    ok = 1;
	    break;
	}
	if (!ok)
	    return;
    }

    switch(line->special)
    {
      case 24:
	// RAISE FLOOR
	EV_DoFloor(line,raiseFloor);
	P_ChangeSwitchTexture(line,0);
	break;
	
      case 46:
	// OPEN DOOR
	EV_DoDoor(line,open);
	P_ChangeSwitchTexture(line,1);
	break;
	
      case 47:
	// RAISE FLOOR NEAR AND CHANGE
	EV_DoPlat(line,raiseToNearestAndChange,0);
	P_ChangeSwitchTexture(line,0);
	break;
    }
}



//
// P_PlayerInSpecialSector
// Called every tic frame
//  that the player origin is in a special sector
//
void P_PlayerInSpecialSector (player_t* player)
{
    sector_t*	sector;
	
    sector = player->mo->subsector->sector;

    // Falling, not all the way down yet?
    if (player->mo->z != sector->floorheight)
	return;	

    // Has hitten ground.
    switch (sector->special)
    {
      case 5:
	// HELLSLIME DAMAGE
	if (!player->powers[pw_ironfeet])
	    if (!(leveltime&0x1f))
		P_DamageMobj (player->mo, NULL, NULL, 10);
	break;
	
      case 7:
	// NUKAGE DAMAGE
	if (!player->powers[pw_ironfeet])
	    if (!(leveltime&0x1f))
		P_DamageMobj (player->mo, NULL, NULL, 5);
	break;
	
      case 16:
	// SUPER HELLSLIME DAMAGE
      case 4:
	// STROBE HURT
	if (!player->powers[pw_ironfeet]
	    || (P_Random()<5) )
	{
	    if (!(leveltime&0x1f))
		P_DamageMobj (player->mo, NULL, NULL, 20);
	}
	break;
			
      case 9:
	// SECRET SECTOR
	player->secretcount++;
	sector->special = 0;
	break;
			
      case 11:
	// EXIT SUPER DAMAGE! (for E1M8 finale)
	player->cheats &= ~CF_GODMODE;

	if (!(leveltime&0x1f))
	    P_DamageMobj (player->mo, NULL, NULL, 20);

	if (player->health <= 10)
	    G_ExitLevel();
	break;
			
      default:
	I_Error ("P_PlayerInSpecialSector: "
		 "unknown special %i",
		 sector->special);
	break;
    };
}




//
// P_UpdateSpecials
// Animate planes, scroll walls, etc.
//
boolean		levelTimer;
int		levelTimeCount;

void P_UpdateSpecials (void)
{
    anim_t*	anim;
    int		pic;
    int		i;
    line_t*	line;

    
    //	LEVEL TIMER
    if (levelTimer == true)
    {
	levelTimeCount--;
	if (!levelTimeCount)
	    G_ExitLevel();
    }
    
    //	ANIMATE FLATS AND TEXTURES GLOBALLY
    for (anim = anims ; anim < lastanim ; anim++)
    {
	for (i=anim->basepic ; i<anim->basepic+anim->numpics ; i++)
	{
	    pic = anim->basepic + ( (leveltime/anim->speed + i)%anim->numpics );
	    if (anim->istexture)
		texturetranslation[i] = pic;
	    else
		flattranslation[i] = pic;
	}
    }

    
    //	ANIMATE LINE SPECIALS
    for (i = 0; i < numlinespecials; i++)
    {
	line = linespeciallist[i];
	switch(line->special)
	{
	  case 48:
	    // EFFECT FIRSTCOL SCROLL +
	    sides[line->sidenum[0]].textureoffset += FRACUNIT;
	    break;
	}
    }

    
    //	DO BUTTONS
    for (i = 0; i < MAXBUTTONS; i++)
	if (buttonlist[i].btimer)
	{
	    buttonlist[i].btimer--;
	    if (!buttonlist[i].btimer)
	    {
		switch(buttonlist[i].where)
		{
		  case top:
		    sides[buttonlist[i].line->sidenum[0]].toptexture =
			buttonlist[i].btexture;
		    break;
		    
		  case middle:
		    sides[buttonlist[i].line->sidenum[0]].midtexture =
			buttonlist[i].btexture;
		    break;
		    
		  case bottom:
		    sides[buttonlist[i].line->sidenum[0]].bottomtexture =
			buttonlist[i].btexture;
		    break;
		}
		S_StartSound((mobj_t *)&buttonlist[i].soundorg,sfx_swtchn);
		memset(&buttonlist[i],0,sizeof(button_t));
	    }
	}
	
}



//
// Special Stuff that can not be categorized
//
int EV_DoDonut(line_t*	line)
{
    sector_t*		s1;
    sector_t*		s2;
    sector_t*		s3;
    int			secnum;
    int			rtn;
    int			i;
    floormove_t*	floor;
	
    secnum = -1;
    rtn = 0;
    while ((secnum = P_FindSectorFromLineTag(line,secnum)) >= 0)
    {
	s1 = &sectors[secnum];
		
	// ALREADY MOVING?  IF SO, KEEP GOING...
	if (s1->specialdata)
	    continue;
			
	rtn = 1;
	s2 = getNextSector(s1->lines[0],s1);
	for (i = 0;i < s2->linecount;i++)
	{
	    if ((!s2->lines[i]->flags & ML_TWOSIDED) ||
		(s2->lines[i]->backsector == s1))
		continue;
	    s3 = s2->lines[i]->backsector;
	    
	    //	Spawn rising slime
	    floor = Z_Malloc (sizeof(*floor), PU_LEVSPEC, 0);
	    P_AddThinker (&floor->thinker);
	    s2->specialdata = floor;
	    floor->thinker.function.acp1 = (actionf_p1) T_MoveFloor;
	    floor->type = donutRaise;
	    floor->crush = false;
	    floor->direction = 1;
	    floor->sector = s2;
	    floor->speed = FLOORSPEED / 2;
	    floor->texture = s3->floorpic;
	    floor->newspecial = 0;
	    floor->floordestheight = s3->floorheight;
	    
	    //	Spawn lowering donut-hole
	    floor = Z_Malloc (sizeof(*floor), PU_LEVSPEC, 0);
	    P_AddThinker (&floor->thinker);
	    s1->specialdata = floor;
	    floor->thinker.function.acp1 = (actionf_p1) T_MoveFloor;
	    floor->type = lowerFloor;
	    floor->crush = false;
	    floor->direction = -1;
	    floor->sector = s1;
	    floor->speed = FLOORSPEED / 2;
	    floor->floordestheight = s3->floorheight;
	    break;
	}
    }
    return rtn;
}



//
// SPECIAL SPAWNING
//

//
// P_SpawnSpecials
// After the map has been loaded, scan for specials
//  that spawn thinkers
//
short		numlinespecials;
line_t*		linespeciallist[MAXLINEANIMS];


// Parses command line parameters.
void P_SpawnSpecials (void)
{
    sector_t*	sector;
    int		i;
    int		episode;

    episode = 1;
    if (W_CheckNumForName("texture2") >= 0)
	episode = 2;

    
    // See if -TIMER needs to be used.
    levelTimer = false;
	
    i = M_CheckParm("-avg");
    if (i && deathmatch)
    {
	levelTimer = true;
	levelTimeCount = 20 * 60 * 35;
    }
	
    i = M_CheckParm("-timer");
    if (i && deathmatch)
    {
	int	time;
	time = atoi(myargv[i+1]) * 60 * 35;
	levelTimer = true;
	levelTimeCount = time;
    }
    
    //	Init special SECTORs.
    sector = sectors;
    for (i=0 ; i<numsectors ; i++, sector++)
    {
	if (!sector->special)
	    continue;
	
	switch (sector->special)
	{
	  case 1:
	    // FLICKERING LIGHTS
	    P_SpawnLightFlash (sector);
	    break;

	  case 2:
	    // STROBE FAST
	    P_SpawnStrobeFlash(sector,FASTDARK,0);
	    break;
	    
	  case 3:
	    // STROBE SLOW
	    P_SpawnStrobeFlash(sector,SLOWDARK,0);
	    break;
	    
	  case 4:
	    // STROBE FAST/DEATH SLIME
	    P_SpawnStrobeFlash(sector,FASTDARK,0);
	    sector->special = 4;
	    break;
	    
	  case 8:
	    // GLOWING LIGHT
	    P_SpawnGlowingLight(sector);
	    break;
	  case 9:
	    // SECRET SECTOR
	    totalsecret++;
	    break;
	    
	  case 10:
	    // DOOR CLOSE IN 30 SECONDS
	    P_SpawnDoorCloseIn30 (sector);
	    break;
	    
	  case 12:
	    // SYNC STROBE SLOW
	    P_SpawnStrobeFlash (sector, SLOWDARK, 1);
	    break;

	  case 13:
	    // SYNC STROBE FAST
	    P_SpawnStrobeFlash (sector, FASTDARK, 1);
	    break;

	  case 14:
	    // DOOR RAISE IN 5 MINUTES
	    P_SpawnDoorRaiseIn5Mins (sector, i);
	    break;
	    
	  case 17:
	    P_SpawnFireFlicker(sector);
	    break;
	}
    }

    
    //	Init line EFFECTs
    numlinespecials = 0;
    for (i = 0;i < numlines; i++)
    {
	switch(lines[i].special)
	{
	  case 48:
	    // EFFECT FIRSTCOL SCROLL+
	    linespeciallist[numlinespecials] = &lines[i];
	    numlinespecials++;
	    break;
	}
    }

    
    //	Init other misc stuff
    for (i = 0;i < MAXCEILINGS;i++)
	activeceilings[i] = NULL;

    for (i = 0;i < MAXPLATS;i++)
	activeplats[i] = NULL;
    
    for (i = 0;i < MAXBUTTONS;i++)
	memset(&buttonlist[i],0,sizeof(button_t));

    // UNUSED: no horizonal sliders.
    //	P_InitSlidingDoorFrames();
}