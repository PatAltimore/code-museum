---
title: "p_floor.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/p_floor.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/p_floor.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "p-floor-c"
order: 27
description: "This file implements floor and staircase movement mechanics in DOOM, showcasing techniques that pushed the boundaries of level interactivity in 1993."

summary:
  - point: "Implements floor and ceiling movement mechanics for dynamic level design"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Introduces stair-building algorithms for vertical progression in levels"
    link: "https://doomwiki.org/wiki/Stairs"
    link_label: "Stairs in DOOM"
  - point: "Optimizes movement calculations for performance on 1990s hardware"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "Demonstrates modular design with reusable movement routines"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular programming"
  - point: "Pioneered techniques for dynamic level geometry in real-time games"
    link: "https://en.wikipedia.org/wiki/Level_design"
    link_label: "Level design"

enhancements:
  - id: "move-plane-crushing-check"
    line_start: 41
    line_end: 203
    title: "How DOOM Simulated Crushing Floors"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_MovePlane` function is responsible for moving floors and ceilings in DOOM, with additional logic to check for crushing objects or players. This routine adjusts the height of a sector's floor or ceiling based on the specified speed and destination, while ensuring that entities in the affected area are not crushed unless explicitly allowed. The function uses fixed-point arithmetic to perform calculations efficiently on the limited hardware of the early 1990s. At the time, consumer PCs lacked floating-point units, making fixed-point math a necessity for real-time applications like games. John Carmack, the lead programmer of DOOM, designed this routine to handle dynamic level geometry—a groundbreaking feature in 1993. The ability to move floors and ceilings in real-time added a layer of interactivity and immersion that was rare in games of the era. Carmack's approach drew inspiration from earlier games like Wolfenstein 3D but expanded on the concept by introducing vertical movement and environmental hazards. The crushing mechanic became a hallmark of DOOM's level design, allowing for creative traps and puzzles. This technique influenced later games, including Quake and Unreal, which adopted similar methods for dynamic environments. Today, the concept of moving level geometry is standard in game engines like Unity and Unreal Engine, showcasing the lasting impact of Carmack's innovations."
  - id: "move-floor-destination"
    line_start: 206
    line_end: 254
    title: "The Sound of Moving Floors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_effect"
    image_url: ""
    image_caption: ""
    content: "The `T_MoveFloor` function builds on `T_MovePlane` to handle floor movement specifically. It adds sound effects to enhance the player's experience, playing a movement sound (`sfx_stnmov`) periodically as the floor moves and a stopping sound (`sfx_pstop`) when the floor reaches its destination. This attention to auditory detail was part of DOOM's immersive design philosophy, ensuring that players received sensory feedback for environmental changes. In the early 1990s, sound cards were becoming more common in consumer PCs, and DOOM leveraged this hardware to create a richer gaming experience. Dave Taylor, one of DOOM's developers, worked on integrating sound effects into the game engine, ensuring that they synchronized with gameplay events like moving floors and crushing ceilings. The use of sound effects for environmental interactions influenced later games, establishing a standard for auditory feedback in dynamic environments. Games like Half-Life and System Shock expanded on this concept, using sound to convey information about the game world. Modern game engines now include built-in audio systems that automate these processes, but the principles laid out in DOOM remain foundational."
  - id: "floor-types-handler"
    line_start: 256
    line_end: 444
    title: "Dynamic Floors: A Toolbox of Movement Types"
    wikipedia_url: "https://doomwiki.org/wiki/Floor"
    image_url: ""
    image_caption: ""
    content: "The `EV_DoFloor` function handles various types of floor movements, from lowering floors to their lowest surrounding height to raising them at turbo speeds. This modular design allows level designers to create diverse gameplay scenarios, such as elevators, traps, and platforms. Each movement type is associated with specific parameters, like speed and destination height, enabling precise control over the game's dynamic geometry. DOOM's level design was revolutionary for its time, offering unprecedented interactivity and verticality. John Romero, the game's designer, envisioned levels that felt alive, with moving parts that responded to player actions. The modular approach in `EV_DoFloor` reflects this vision, providing a flexible framework for implementing complex level mechanics. This design philosophy influenced the development of later games and engines. Quake expanded on the concept with more advanced physics and collision detection, while modern engines like Unreal and Unity offer even greater flexibility for dynamic level design. The ability to script diverse floor movements remains a staple of game development, rooted in the innovations of DOOM."
  - id: "build-stairs-algorithm"
    line_start: 449
    line_end: 554
    title: "How DOOM Built Stairs in Real Time"
    wikipedia_url: "https://doomwiki.org/wiki/Stairs"
    image_url: ""
    image_caption: ""
    content: "The `EV_BuildStairs` function implements an algorithm for constructing staircases dynamically during gameplay. It identifies adjacent sectors, calculates the height of each step, and moves the floors incrementally to create a staircase. This feature allowed DOOM's levels to include vertical progression, adding depth and complexity to the gameplay. In the early 1990s, real-time construction of level geometry was a novel concept. Most games relied on static environments, with little to no dynamic interaction. DOOM's stair-building algorithm was a technical achievement, leveraging fixed-point arithmetic and efficient memory management to perform these calculations on limited hardware. The algorithm's modular design also made it reusable, enabling designers to implement stairs with varying speeds and step sizes. This technique influenced later games like Quake and Unreal, which expanded on the concept with more advanced physics and rendering capabilities. Today, dynamic level geometry is a standard feature in game engines, allowing developers to create interactive environments with ease. The stair-building algorithm in DOOM represents a key milestone in the evolution of level design."

---

```c
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
//	Floor animation: raising stairs.
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: p_floor.c,v 1.4 1997/02/03 16:47:54 b1 Exp $";


#include "z_zone.h"
#include "doomdef.h"
#include "p_local.h"

#include "s_sound.h"

// State.
#include "doomstat.h"
#include "r_state.h"
// Data.
#include "sounds.h"


//
// FLOORS
//

//
// Move a plane (floor or ceiling) and check for crushing
//
result_e
T_MovePlane
( sector_t*	sector,
  fixed_t	speed,
  fixed_t	dest,
  boolean	crush,
  int		floorOrCeiling,
  int		direction )
{
    boolean	flag;
    fixed_t	lastpos;
	
    switch(floorOrCeiling)
    {
      case 0:
	// FLOOR
	switch(direction)
	{
	  case -1:
	    // DOWN
	    if (sector->floorheight - speed < dest)
	    {
		lastpos = sector->floorheight;
		sector->floorheight = dest;
		flag = P_ChangeSector(sector,crush);
		if (flag == true)
		{
		    sector->floorheight =lastpos;
		    P_ChangeSector(sector,crush);
		    //return crushed;
		}
		return pastdest;
	    }
	    else
	    {
		lastpos = sector->floorheight;
		sector->floorheight -= speed;
		flag = P_ChangeSector(sector,crush);
		if (flag == true)
		{
		    sector->floorheight = lastpos;
		    P_ChangeSector(sector,crush);
		    return crushed;
		}
	    }
	    break;
						
	  case 1:
	    // UP
	    if (sector->floorheight + speed > dest)
	    {
		lastpos = sector->floorheight;
		sector->floorheight = dest;
		flag = P_ChangeSector(sector,crush);
		if (flag == true)
		{
		    sector->floorheight = lastpos;
		    P_ChangeSector(sector,crush);
		    //return crushed;
		}
		return pastdest;
	    }
	    else
	    {
		// COULD GET CRUSHED
		lastpos = sector->floorheight;
		sector->floorheight += speed;
		flag = P_ChangeSector(sector,crush);
		if (flag == true)
		{
		    if (crush == true)
			return crushed;
		    sector->floorheight = lastpos;
		    P_ChangeSector(sector,crush);
		    return crushed;
		}
	    }
	    break;
	}
	break;
									
      case 1:
	// CEILING
	switch(direction)
	{
	  case -1:
	    // DOWN
	    if (sector->ceilingheight - speed < dest)
	    {
		lastpos = sector->ceilingheight;
		sector->ceilingheight = dest;
		flag = P_ChangeSector(sector,crush);

		if (flag == true)
		{
		    sector->ceilingheight = lastpos;
		    P_ChangeSector(sector,crush);
		    //return crushed;
		}
		return pastdest;
	    }
	    else
	    {
		// COULD GET CRUSHED
		lastpos = sector->ceilingheight;
		sector->ceilingheight -= speed;
		flag = P_ChangeSector(sector,crush);

		if (flag == true)
		{
		    if (crush == true)
			return crushed;
		    sector->ceilingheight = lastpos;
		    P_ChangeSector(sector,crush);
		    return crushed;
		}
	    }
	    break;
						
	  case 1:
	    // UP
	    if (sector->ceilingheight + speed > dest)
	    {
		lastpos = sector->ceilingheight;
		sector->ceilingheight = dest;
		flag = P_ChangeSector(sector,crush);
		if (flag == true)
		{
		    sector->ceilingheight = lastpos;
		    P_ChangeSector(sector,crush);
		    //return crushed;
		}
		return pastdest;
	    }
	    else
	    {
		lastpos = sector->ceilingheight;
		sector->ceilingheight += speed;
		flag = P_ChangeSector(sector,crush);
// UNUSED
#if 0
		if (flag == true)
		{
		    sector->ceilingheight = lastpos;
		    P_ChangeSector(sector,crush);
		    return crushed;
		}
#endif
	    }
	    break;
	}
	break;
		
    }
    return ok;
}


//
// MOVE A FLOOR TO IT'S DESTINATION (UP OR DOWN)
//
void T_MoveFloor(floormove_t* floor)
{
    result_e	res;
	
    res = T_MovePlane(floor->sector,
		      floor->speed,
		      floor->floordestheight,
		      floor->crush,0,floor->direction);
    
    if (!(leveltime&7))
	S_StartSound((mobj_t *)&floor->sector->soundorg,
		     sfx_stnmov);
    
    if (res == pastdest)
    {
	floor->sector->specialdata = NULL;

	if (floor->direction == 1)
	{
	    switch(floor->type)
	    {
	      case donutRaise:
		floor->sector->special = floor->newspecial;
		floor->sector->floorpic = floor->texture;
	      default:
		break;
	    }
	}
	else if (floor->direction == -1)
	{
	    switch(floor->type)
	    {
	      case lowerAndChange:
		floor->sector->special = floor->newspecial;
		floor->sector->floorpic = floor->texture;
	      default:
		break;
	    }
	}
	P_RemoveThinker(&floor->thinker);

	S_StartSound((mobj_t *)&floor->sector->soundorg,
		     sfx_pstop);
    }

}

//
// HANDLE FLOOR TYPES
//
int
EV_DoFloor
( line_t*	line,
  floor_e	floortype )
{
    int			secnum;
    int			rtn;
    int			i;
    sector_t*		sec;
    floormove_t*	floor;

    secnum = -1;
    rtn = 0;
    while ((secnum = P_FindSectorFromLineTag(line,secnum)) >= 0)
    {
	sec = &sectors[secnum];
		
	// ALREADY MOVING?  IF SO, KEEP GOING...
	if (sec->specialdata)
	    continue;
	
	// new floor thinker
	rtn = 1;
	floor = Z_Malloc (sizeof(*floor), PU_LEVSPEC, 0);
	P_AddThinker (&floor->thinker);
	sec->specialdata = floor;
	floor->thinker.function.acp1 = (actionf_p1) T_MoveFloor;
	floor->type = floortype;
	floor->crush = false;

	switch(floortype)
	{
	  case lowerFloor:
	    floor->direction = -1;
	    floor->sector = sec;
	    floor->speed = FLOORSPEED;
	    floor->floordestheight = 
		P_FindHighestFloorSurrounding(sec);
	    break;

	  case lowerFloorToLowest:
	    floor->direction = -1;
	    floor->sector = sec;
	    floor->speed = FLOORSPEED;
	    floor->floordestheight = 
		P_FindLowestFloorSurrounding(sec);
	    break;

	  case turboLower:
	    floor->direction = -1;
	    floor->sector = sec;
	    floor->speed = FLOORSPEED * 4;
	    floor->floordestheight = 
		P_FindHighestFloorSurrounding(sec);
	    if (floor->floordestheight != sec->floorheight)
		floor->floordestheight += 8*FRACUNIT;
	    break;

	  case raiseFloorCrush:
	    floor->crush = true;
	  case raiseFloor:
	    floor->direction = 1;
	    floor->sector = sec;
	    floor->speed = FLOORSPEED;
	    floor->floordestheight = 
		P_FindLowestCeilingSurrounding(sec);
	    if (floor->floordestheight > sec->ceilingheight)
		floor->floordestheight = sec->ceilingheight;
	    floor->floordestheight -= (8*FRACUNIT)*
		(floortype == raiseFloorCrush);
	    break;

	  case raiseFloorTurbo:
	    floor->direction = 1;
	    floor->sector = sec;
	    floor->speed = FLOORSPEED*4;
	    floor->floordestheight = 
		P_FindNextHighestFloor(sec,sec->floorheight);
	    break;

	  case raiseFloorToNearest:
	    floor->direction = 1;
	    floor->sector = sec;
	    floor->speed = FLOORSPEED;
	    floor->floordestheight = 
		P_FindNextHighestFloor(sec,sec->floorheight);
	    break;

	  case raiseFloor24:
	    floor->direction = 1;
	    floor->sector = sec;
	    floor->speed = FLOORSPEED;
	    floor->floordestheight = floor->sector->floorheight +
		24 * FRACUNIT;
	    break;
	  case raiseFloor512:
	    floor->direction = 1;
	    floor->sector = sec;
	    floor->speed = FLOORSPEED;
	    floor->floordestheight = floor->sector->floorheight +
		512 * FRACUNIT;
	    break;

	  case raiseFloor24AndChange:
	    floor->direction = 1;
	    floor->sector = sec;
	    floor->speed = FLOORSPEED;
	    floor->floordestheight = floor->sector->floorheight +
		24 * FRACUNIT;
	    sec->floorpic = line->frontsector->floorpic;
	    sec->special = line->frontsector->special;
	    break;

	  case raiseToTexture:
	  {
	      int	minsize = MAXINT;
	      side_t*	side;
				
	      floor->direction = 1;
	      floor->sector = sec;
	      floor->speed = FLOORSPEED;
	      for (i = 0; i < sec->linecount; i++)
	      {
		  if (twoSided (secnum, i) )
		  {
		      side = getSide(secnum,i,0);
		      if (side->bottomtexture >= 0)
			  if (textureheight[side->bottomtexture] < 
			      minsize)
			      minsize = 
				  textureheight[side->bottomtexture];
		      side = getSide(secnum,i,1);
		      if (side->bottomtexture >= 0)
			  if (textureheight[side->bottomtexture] < 
			      minsize)
			      minsize = 
				  textureheight[side->bottomtexture];
		  }
	      }
	      floor->floordestheight =
		  floor->sector->floorheight + minsize;
	  }
	  break;
	  
	  case lowerAndChange:
	    floor->direction = -1;
	    floor->sector = sec;
	    floor->speed = FLOORSPEED;
	    floor->floordestheight = 
		P_FindLowestFloorSurrounding(sec);
	    floor->texture = sec->floorpic;

	    for (i = 0; i < sec->linecount; i++)
	    {
		if ( twoSided(secnum, i) )
		{
		    if (getSide(secnum,i,0)->sector-sectors == secnum)
		    {
			sec = getSector(secnum,i,1);

			if (sec->floorheight == floor->floordestheight)
			{
			    floor->texture = sec->floorpic;
			    floor->newspecial = sec->special;
			    break;
			}
		    }
		    else
		    {
			sec = getSector(secnum,i,0);

			if (sec->floorheight == floor->floordestheight)
			{
			    floor->texture = sec->floorpic;
			    floor->newspecial = sec->special;
			    break;
			}
		    }
		}
	    }
	  default:
	    break;
	}
    }
    return rtn;
}




//
// BUILD A STAIRCASE!
//
int
EV_BuildStairs
( line_t*	line,
  stair_e	type )
{
    int			secnum;
    int			height;
    int			i;
    int			newsecnum;
    int			texture;
    int			ok;
    int			rtn;
    
    sector_t*		sec;
    sector_t*		tsec;

    floormove_t*	floor;
    
    fixed_t		stairsize;
    fixed_t		speed;

    secnum = -1;
    rtn = 0;
    while ((secnum = P_FindSectorFromLineTag(line,secnum)) >= 0)
    {
	sec = &sectors[secnum];
		
	// ALREADY MOVING?  IF SO, KEEP GOING...
	if (sec->specialdata)
	    continue;
	
	// new floor thinker
	rtn = 1;
	floor = Z_Malloc (sizeof(*floor), PU_LEVSPEC, 0);
	P_AddThinker (&floor->thinker);
	sec->specialdata = floor;
	floor->thinker.function.acp1 = (actionf_p1) T_MoveFloor;
	floor->direction = 1;
	floor->sector = sec;
	switch(type)
	{
	  case build8:
	    speed = FLOORSPEED/4;
	    stairsize = 8*FRACUNIT;
	    break;
	  case turbo16:
	    speed = FLOORSPEED*4;
	    stairsize = 16*FRACUNIT;
	    break;
	}
	floor->speed = speed;
	height = sec->floorheight + stairsize;
	floor->floordestheight = height;
		
	texture = sec->floorpic;
	
	// Find next sector to raise
	// 1.	Find 2-sided line with same sector side[0]
	// 2.	Other side is the next sector to raise
	do
	{
	    ok = 0;
	    for (i = 0;i < sec->linecount;i++)
	    {
		if ( !((sec->lines[i])->flags & ML_TWOSIDED) )
		    continue;
					
		tsec = (sec->lines[i])->frontsector;
		newsecnum = tsec-sectors;
		
		if (secnum != newsecnum)
		    continue;

		tsec = (sec->lines[i])->backsector;
		newsecnum = tsec - sectors;

		if (tsec->floorpic != texture)
		    continue;
					
		height += stairsize;

		if (tsec->specialdata)
		    continue;
					
		sec = tsec;
		secnum = newsecnum;
		floor = Z_Malloc (sizeof(*floor), PU_LEVSPEC, 0);

		P_AddThinker (&floor->thinker);

		sec->specialdata = floor;
		floor->thinker.function.acp1 = (actionf_p1) T_MoveFloor;
		floor->direction = 1;
		floor->sector = sec;
		floor->speed = speed;
		floor->floordestheight = height;
		ok = 1;
		break;
	    }
	} while(ok);
    }
    return rtn;
}
```
