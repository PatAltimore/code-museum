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
description: "This file implements floor movement and stair-building logic in DOOM, showcasing techniques that pushed the limits of 3D environments on early PCs."

summary:
  - point: "Implements floor movement with crushing mechanics"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Introduces staircase-building algorithms for dynamic level design"
    link: "https://en.wikipedia.org/wiki/Level_design"
    link_label: "Level Design"
  - point: "Optimized for hardware constraints of early 1990s PCs"
    link: "https://en.wikipedia.org/wiki/History_of_personal_computers"
    link_label: "History of Personal Computers"

enhancements:
  - id: "move-plane-crushing-mechanics"
    line_start: 40
    line_end: 202
    title: "The Crushing Logic Behind Moving Floors"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines the `T_MovePlane` function, which handles the movement of floors and ceilings in DOOM's levels. The function checks whether the movement of a plane (floor or ceiling) would crush objects or players and adjusts accordingly. The logic accounts for direction (up or down), speed, and destination height, ensuring smooth transitions while preventing unintended gameplay consequences like players being trapped or crushed. In the early 1990s, consumer PCs were limited in processing power and memory, requiring developers to implement efficient algorithms to simulate dynamic environments. John Carmack, DOOM's lead programmer, was renowned for his ability to optimize code for these constraints. The crushing mechanics here reflect a careful balance between realism and performance, ensuring the game felt immersive without overwhelming the hardware. This approach influenced later games that incorporated dynamic environmental changes, such as Quake and Unreal. The concept of handling collisions and crush mechanics became a staple in game engines, forming the basis for more advanced physics simulations seen in modern titles like Half-Life 2 and Portal. Carmack's work here exemplifies how clever programming can overcome hardware limitations to deliver groundbreaking experiences."
  - id: "move-floor-dynamic-levels"
    line_start: 205
    line_end: 253
    title: "Dynamic Floors: Moving the World in Real-Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_MoveFloor` function animates floor movements, either raising or lowering them to a specified destination height. It integrates sound effects to enhance the player's experience, such as the grinding noise of moving floors (`sfx_stnmov`) and the stop sound (`sfx_pstop`). The function also updates the floor's texture and special properties when the movement completes, ensuring that the visual and gameplay elements remain consistent. In 1993, DOOM's ability to dynamically alter the environment in real-time was revolutionary. Most games of the era relied on static level designs, but DOOM introduced dynamic elements that could change during gameplay. This feature added a layer of unpredictability and immersion, making levels feel alive. Dynamic environmental changes became a hallmark of modern game design, influencing titles like Duke Nukem 3D and Half-Life. The ability to modify levels in real-time also laid the groundwork for procedural generation techniques used in games like Minecraft and No Man's Sky. DOOM's implementation of dynamic floors showcased the potential of interactive environments, a concept that continues to evolve in today's gaming industry."
  - id: "ev-do-floor-flexible-movement"
    line_start: 255
    line_end: 443
    title: "Flexible Floor Movement: A Toolbox for Level Designers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Level_design"
    image_url: ""
    image_caption: ""
    content: "The `EV_DoFloor` function provides a versatile mechanism for handling various types of floor movements, such as lowering to the lowest surrounding floor, raising to the nearest ceiling, or turbo-lowering for faster transitions. It uses a thinker structure (`floormove_t`) to manage ongoing floor movements and ensures that each sector's properties are updated dynamically during gameplay. DOOM's level design philosophy emphasized flexibility and creativity. By providing developers with tools like `EV_DoFloor`, the game enabled intricate level designs that could adapt to player actions. This was a significant departure from the static environments of earlier games, allowing for puzzles, traps, and dynamic challenges. The modularity of this approach influenced the development of level editors and game engines, such as the Build engine used in Duke Nukem 3D and the Source engine used in Half-Life. The ability to script and control environmental changes became a standard feature in game development, empowering designers to create more engaging and interactive worlds. DOOM's legacy in this area is evident in the widespread adoption of dynamic level mechanics across the gaming industry."
  - id: "ev-build-stairs-procedural-design"
    line_start: 448
    line_end: 553
    title: "Building Stairs: Procedural Level Design in Action"
    wikipedia_url: "https://en.wikipedia.org/wiki/Procedural_generation"
    image_url: ""
    image_caption: ""
    content: "The `EV_BuildStairs` function automates the creation of staircases in DOOM's levels. It calculates the height and texture of each step, ensuring consistency while allowing for variations like turbo stairs (`turbo16`) or standard stairs (`build8`). The function iterates through sectors to find adjacent areas and raises their floors incrementally, creating a staircase that connects different parts of the level. Procedural generation was not a common concept in 1993, but DOOM's stair-building logic foreshadowed its potential. By automating repetitive tasks, the function saved developers time and enabled more complex level designs. This approach also allowed for dynamic changes during gameplay, adding to the game's sense of immersion. Modern games like Spelunky and No Man's Sky have embraced procedural generation to create vast, unpredictable worlds. While DOOM's stair-building function was limited in scope, it demonstrated the power of procedural techniques in game design. The idea of automating level elements has since evolved into sophisticated algorithms capable of generating entire worlds, a testament to the enduring influence of DOOM's innovative programming."

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