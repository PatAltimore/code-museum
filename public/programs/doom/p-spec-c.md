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
description: "This file implements special effects and utilities for DOOM's interactive environments, showcasing techniques that pushed the boundaries of 1990s game design."

summary:
  - point: "Texture animation and environmental effects are handled here."
    link: "https://en.wikipedia.org/wiki/Texture_mapping"
    link_label: "Texture Mapping"
  - point: "Sector-based utilities enable dynamic level interactions."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "Line triggers allow scripted events like doors and teleportation."
    link: "https://en.wikipedia.org/wiki/Trigger_(game_design)"
    link_label: "Trigger Design"
  - point: "Efficient algorithms for finding adjacent sector properties."
    link: "https://en.wikipedia.org/wiki/Algorithm"
    link_label: "Algorithm"
  - point: "Event handling for player and monster interactions with the environment."
    link: "https://en.wikipedia.org/wiki/Event-driven_programming"
    link_label: "Event-driven Programming"

enhancements:
  - id: "texture-animation-structures"
    line_start: 56
    line_end: 132
    title: "Animating Textures: A Simple Yet Effective Trick"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_mapping"
    image_url: ""
    image_caption: ""
    content: "This section defines structures and data for animating textures and planes in DOOM. The `anim_t` and `animdef_t` structures specify the animation properties, such as whether the animation applies to textures or flats, the sequence of frames, and the speed of the animation. The `animdefs` array lists predefined animations, including iconic effects like flowing lava and dripping blood. In 1993, texture animation was a novel way to make environments feel alive and dynamic, especially on hardware with limited graphical capabilities. John Carmack's approach leveraged the WAD file format to define animations using sequential frames found in the game's resource files. This technique inspired later games to use similar methods for environmental effects, and it remains a fundamental concept in modern game engines like Unity and Unreal Engine."
  - id: "initialize-texture-animations"
    line_start: 148
    line_end: 187
    title: "Initializing Texture Animations: A WAD-driven Method"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_WAD"
    image_url: ""
    image_caption: ""
    content: "The `P_InitPicAnims` function initializes texture animations by processing the `animdefs` array. It checks whether the start and end frames exist in the WAD file, calculates the number of frames in the animation, and assigns the animation properties to the global `anims` array. This function demonstrates how DOOM's modular design allowed developers to define animations externally via WAD files, making it easy to add or modify content. The reliance on WAD files for resource management became a hallmark of DOOM's extensibility, enabling the creation of user-generated mods and levels. This approach influenced the design of later games, including Quake and Half-Life, which adopted similar modular resource systems."
  - id: "sector-utilities"
    line_start: 197
    line_end: 262
    title: "Sector Utilities: Navigating DOOM's Level Geometry"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_design"
    image_url: ""
    image_caption: ""
    content: "Functions like `getSide`, `getSector`, `twoSided`, and `getNextSector` provide essential utilities for navigating and querying DOOM's sector-based level geometry. These functions allow the game to determine properties of adjacent sectors, such as whether a line is two-sided or which sector lies on the other side of a line. In the early 1990s, sector-based level design was a practical solution for creating complex environments on limited hardware. DOOM's efficient handling of sector relationships enabled dynamic interactions like doors, lifts, and teleportation. This approach influenced the design of other games that used similar geometry systems, including Duke Nukem 3D and Build Engine games."
  - id: "floor-and-ceiling-height-algorithms"
    line_start: 266
    line_end: 426
    title: "Finding Heights: Algorithms for Dynamic Levels"
    wikipedia_url: "https://en.wikipedia.org/wiki/Algorithm"
    image_url: ""
    image_caption: ""
    content: "The functions `P_FindLowestFloorSurrounding`, `P_FindHighestFloorSurrounding`, `P_FindLowestCeilingSurrounding`, and `P_FindHighestCeilingSurrounding` calculate floor and ceiling heights in adjacent sectors. These algorithms enable dynamic level interactions, such as raising or lowering floors and ceilings based on surrounding geometry. In DOOM, these calculations were crucial for creating realistic and responsive environments. The use of fixed-point arithmetic reflects the constraints of 1990s hardware, where floating-point operations were often too slow. These techniques laid the groundwork for more advanced geometry manipulation in later games, influencing engines like Quake's BSP-based system and Unreal Engine's dynamic level editing."
  - id: "line-tag-triggers"
    line_start: 430
    line_end: 445
    title: "Line Tags: The Key to Scripted Events"
    wikipedia_url: "https://en.wikipedia.org/wiki/Trigger_(game_design)"
    image_url: ""
    image_caption: ""
    content: "The `P_FindSectorFromLineTag` function retrieves the next sector associated with a line tag, enabling scripted events like opening doors or triggering teleportation. Line tags were a simple yet powerful mechanism for defining interactions in DOOM's levels. By associating tags with sectors and lines, designers could create complex behaviors without hardcoding them into the game logic. This approach was a precursor to modern event-driven programming in games, where triggers and actions are defined declaratively. Line tags influenced the scripting systems of later games, including Quake's entity-based triggers and Half-Life's input-output system."
  - id: "light-level-calculations"
    line_start: 450
    line_end: 475
    title: "Dynamic Lighting: Calculating Surrounding Light Levels"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lighting_(rendering)"
    image_url: ""
    image_caption: ""
    content: "The `P_FindMinSurroundingLight` function calculates the minimum light level in adjacent sectors, enabling dynamic lighting effects like dimming or brightening areas based on player movement. Dynamic lighting was a significant innovation in DOOM, creating a sense of atmosphere and tension in its levels. This function showcases how Carmack's code optimized lighting calculations for performance, using integer arithmetic and efficient loops. Dynamic lighting became a staple of game design, influencing later engines like Quake and Unreal, which expanded on these techniques with real-time lighting and shadow systems."
  - id: "cross-special-line-trigger"
    line_start: 480
    line_end: 535
    title: "Crossing the Line: Activating Special Events"
    wikipedia_url: "https://en.wikipedia.org/wiki/Event-driven_programming"
    image_url: ""
    image_caption: ""
    content: "The `P_CrossSpecialLine` function handles events triggered when a player or object crosses a line with a special property. These events include opening doors, activating lifts, and teleporting. The function checks the type of object crossing the line and the line's special property, ensuring that only valid triggers are activated. This system allowed DOOM's levels to feel interactive and responsive, with scripted events seamlessly integrated into the gameplay. The concept of line-based triggers influenced the design of later games, including Quake and Unreal, which expanded on this idea with more sophisticated event systems and scripting languages."
  - id: "case-statement-special-actions"
    line_start: 802
    line_end: 949
    title: "How DOOM's case statements control the world"
    wikipedia_url: "https://doomwiki.org/wiki/Line_special"
    image_url: ""
    image_caption: ""
    content: "This section contains a large switch-case structure that maps specific line specials (triggered by player actions or map events) to their corresponding effects in the game world. Each case corresponds to an action, such as opening doors, raising floors, or teleporting objects. For example, case 97 triggers a teleportation event, while case 94 raises a floor and crushes anything above it. At the time, such direct mappings were a practical way to implement complex interactions in a resource-constrained environment. This approach allowed DOOM to offer a wide variety of dynamic effects without requiring extensive computational overhead. The technique influenced later games by demonstrating how simple structures could yield complex behaviors, especially in level design. Games like Quake and Unreal adopted similar methods for handling environmental interactions."
  - id: "impact-specials-shooting-lines"
    line_start: 954
    line_end: 1000
    title: "What happens when you shoot a wall?"
    wikipedia_url: "https://doomwiki.org/wiki/Line_special"
    image_url: ""
    image_caption: ""
    content: "The `P_ShootSpecialLine` function handles the impact of projectiles on special lines in the game world. When a projectile hits a line with a special property, this function determines whether the line should activate an effect, such as opening a door or raising a floor. The function checks if the shooter is a player or another entity, ensuring that only valid interactions occur. This mechanic added depth to DOOM's gameplay by allowing players to interact with the environment in unexpected ways, such as shooting switches to trigger events. The idea of environmental interaction through shooting influenced later games like Half-Life, where players could manipulate objects and solve puzzles with their weapons."
  - id: "player-in-special-sector"
    line_start: 1004
    line_end: 1071
    title: "Walking through slime and secrets"
    wikipedia_url: "https://doomwiki.org/wiki/Sector_special"
    image_url: ""
    image_caption: ""
    content: "The `P_PlayerInSpecialSector` function checks whether the player is in a special sector and applies the corresponding effects. Special sectors include damage zones like 'hellslime' and 'nukage,' secret areas that increase the player's secret count, and finale zones that trigger level exits. This function also handles unique mechanics, such as disabling god mode in the E1M8 finale. By tying environmental hazards and rewards to specific sectors, DOOM created a more immersive and strategic gameplay experience. Players had to navigate carefully, avoiding damage zones while seeking out secrets. This sector-based system became a staple in level design for future games, influencing titles like Duke Nukem 3D and System Shock."
  - id: "update-specials-animation-and-effects"
    line_start: 1083
    line_end: 1156
    title: "Animating textures and scrolling walls"
    wikipedia_url: "https://doomwiki.org/wiki/Texture_animation"
    image_url: ""
    image_caption: ""
    content: "The `P_UpdateSpecials` function handles global animations and special effects, including texture animations, scrolling walls, and timed events. It updates animated textures by cycling through frames based on the game's level time and manages line specials like scrolling offsets. The function also processes button timers, resetting textures when a button's effect expires. These dynamic elements added visual variety and interactivity to DOOM's levels, making the game world feel alive. The concept of animated textures and environmental effects was groundbreaking at the time and influenced later games like Quake and Unreal, which expanded on these ideas with more advanced rendering techniques."
  - id: "ev-do-donut"
    line_start: 1160
    line_end: 1221
    title: "The donut sector: rising slime and lowering floors"
    wikipedia_url: "https://doomwiki.org/wiki/Donut_sector"
    image_url: ""
    image_caption: ""
    content: "The `EV_DoDonut` function creates a unique environmental effect known as the 'donut sector.' It spawns a rising slime floor in one sector while lowering the floor in an adjacent sector, creating a dynamic visual and gameplay element. This effect is achieved by iterating through sectors connected to the triggering line and initializing floor movement objects. The donut sector showcases DOOM's ability to create complex environmental interactions with relatively simple code structures. This technique inspired creative level designs in later games, encouraging developers to experiment with dynamic environments and interconnected sector mechanics."
  - id: "p-spawn-specials"
    line_start: 1225
    line_end: 1362
    title: "Initializing flickering lights and secret areas"
    wikipedia_url: "https://doomwiki.org/wiki/Sector_special"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnSpecials` function initializes special effects and environmental interactions after a map is loaded. It sets up flickering lights, strobe effects, glowing sectors, and secret areas, as well as timed events like doors closing after 30 seconds. This function also prepares line effects, such as scrolling textures, and resets active objects like platforms and buttons. By organizing these elements during map initialization, DOOM ensured that each level felt unique and dynamic. This approach influenced the design of scripting systems in later games, such as Unreal Engine's Kismet and Unity's event systems, which allow developers to define complex interactions during level setup."

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
```
