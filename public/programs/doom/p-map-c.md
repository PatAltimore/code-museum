---
title: "p_map.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/p_map.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/p_map.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "p-map-c"
order: 3
description: "This file reveals the inner workings of DOOM's movement, collision, and aiming mechanics, showcasing the ingenuity required to create a fast-paced 3D game on 1993 hardware."

summary:
  - point: "DOOM's movement system uses bounding boxes for collision detection."
    link: "https://en.wikipedia.org/wiki/Bounding_volume"
    link_label: "Bounding Volume"
  - point: "Sliding mechanics allow players to navigate angled walls smoothly."
    link: "https://doomwiki.org/wiki/Movement"
    link_label: "DOOM Movement"
  - point: "Teleportation logic includes collision handling and object removal."
    link: "https://doomwiki.org/wiki/Teleport"
    link_label: "DOOM Teleportation"
  - point: "Special lines trigger effects when crossed during movement."
    link: "https://doomwiki.org/wiki/Linedef"
    link_label: "Linedef in DOOM"
  - point: "Height clipping ensures monsters adapt to changing sector heights."
    link: "https://doomwiki.org/wiki/Sector"
    link_label: "DOOM Sector"

enhancements:
  - id: "bounding-box-collision-detection"
    line_start: 73
    line_end: 107
    title: "How DOOM's bounding boxes avoid chaos"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bounding_volume"
    image_url: ""
    image_caption: ""
    content: "This section defines key variables for DOOM's collision detection system, including bounding boxes (`tmbbox`) and flags (`tmflags`). Bounding boxes are used to approximate the area occupied by objects, simplifying collision checks. In 1993, this approach was crucial for performance, as CPUs like the Intel 486 lacked the power to handle complex geometric calculations in real-time. John Carmack's use of bounding boxes was inspired by earlier 2D games, but he extended the concept to handle DOOM's pseudo-3D world. This technique influenced later games, including Quake and Unreal, which refined collision detection for fully 3D environments."
  - id: "teleportation-mechanics"
    line_start: 73
    line_end: 176
    title: "Teleportation: Killing and moving in one step"
    wikipedia_url: "https://doomwiki.org/wiki/Teleport"
    image_url: ""
    image_caption: ""
    content: "The `P_TeleportMove` function handles teleportation by first removing any objects occupying the destination, then updating the teleported object's position. Teleportation was a novel mechanic in 1993, adding a layer of strategy to DOOM's gameplay. The function ensures the teleported object doesn't clip through walls or other objects, maintaining the game's fast-paced flow. Carmack's implementation was a response to the game's need for dynamic level interactions, and it laid the groundwork for similar mechanics in later titles like Quake and Half-Life, which expanded on the concept with portals and scripted events."
  - id: "special-line-crossing-effects"
    line_start: 810
    line_end: 1258
    title: "Triggering effects by crossing lines"
    wikipedia_url: "https://doomwiki.org/wiki/Linedef"
    image_url: ""
    image_caption: ""
    content: "The `P_TryMove` function handles movement while checking for special lines that trigger effects. In DOOM, linedefs define walls and boundaries, some of which have special properties like opening doors or activating traps. This system allowed designers to create dynamic and interactive levels, a major innovation in 1993. The concept of triggering effects based on player movement became a staple in level design, influencing games like Half-Life and Portal, which used similar systems to create immersive and reactive environments."
  - id: "height-clipping-for-monsters"
    line_start: 1260
    line_end: 1264
    title: "How monsters adapt to changing floors"
    wikipedia_url: "https://doomwiki.org/wiki/Sector"
    image_url: ""
    image_caption: ""
    content: "The `P_ThingHeightClip` function ensures monsters adjust their position when the floor or ceiling height changes. This prevents them from becoming stranded or clipping through geometry. In DOOM, sectors define areas with unique floor and ceiling heights, creating the illusion of a 3D world. Height clipping was a clever workaround for the limitations of DOOM's engine, which relied on 2D maps with height data layered on top. This technique influenced later games with dynamic environments, such as Duke Nukem 3D and Half-Life, which expanded on the concept with fully destructible and interactive worlds."
  - id: "slide-movement-mechanics"
    line_start: 578
    line_end: 629
    title: "Sliding along walls: A kludgy masterpiece"
    wikipedia_url: "https://doomwiki.org/wiki/Movement"
    image_url: ""
    image_caption: ""
    content: "The sliding movement system allows players to navigate angled walls smoothly, a feature critical to DOOM's fluid gameplay. The `P_SlideMove` function calculates how a player or object should adjust its trajectory when colliding with a wall. Carmack described this code as a 'kludgy mess,' but it was a pragmatic solution to a complex problem. Sliding mechanics were essential for maintaining the game's speed and responsiveness, and they influenced movement systems in later games like Quake and Unreal Tournament, which refined the concept for more advanced physics engines."
  - id: "aiming-slopes-for-targeting"
    line_start: 810
    line_end: 892
    title: "Aiming Slopes: Precision in a 3D World"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `PTR_AimTraverse` function dynamically calculates slopes to determine if a target can be aimed at. It checks whether the player's line of sight crosses a two-sided line or intersects a shootable object, adjusting the slope for aiming precision. In 1993, this approach was groundbreaking for simulating realistic aiming in a pseudo-3D environment. John Carmack's innovative use of fixed-point arithmetic ensured fast calculations on hardware with limited floating-point capabilities. This technique influenced later FPS games like Quake, which refined aiming mechanics further."
  - id: "shooting-traverse-and-impact"
    line_start: 895
    line_end: 1015
    title: "Shooting Traverse: Impact and Feedback"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `PTR_ShootTraverse` function simulates a projectile's path, checking for collisions with lines or objects. It handles special interactions like shooting sky textures and spawning visual effects (bullet puffs or blood). This gave DOOM its visceral feedback, making gunplay feel impactful. The function's efficient traversal algorithm allowed for real-time calculations on 1993 PCs, paving the way for modern hit detection systems in FPS games like Half-Life and Counter-Strike."
  - id: "aim-line-attack"
    line_start: 1018
    line_end: 1053
    title: "Line Attack: Calculating Aim in Real-Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_AimLineAttack` function calculates the aiming slope for a projectile attack. It uses trigonometric lookups (finecosine and finesine arrays) to determine the endpoint of the attack based on the player's angle and distance. This function exemplifies Carmack's mastery of efficient algorithms, enabling smooth gameplay even on low-spec machines. The concept of line attacks influenced later games, including Unreal Tournament, which expanded aiming mechanics with advanced physics."
  - id: "use-lines-for-interaction"
    line_start: 1094
    line_end: 1122
    title: "Using Lines: Activating the World"
    wikipedia_url: "https://doomwiki.org/wiki/Line"
    image_url: ""
    image_caption: ""
    content: "The `P_UseLines` function allows players to interact with special lines in the environment, such as opening doors or triggering switches. It calculates the player's position and angle to identify nearby lines within a defined range. This system was crucial for DOOM's interactive level design, enabling puzzles and dynamic environments. The concept of 'use lines' became a staple in level design, influencing games like Duke Nukem 3D and later RPGs with interactive worlds."
  - id: "radius-attack-damage"
    line_start: 1158
    line_end: 1250
    title: "Radius Attack: Explosions with Spatial Awareness"
    wikipedia_url: "https://en.wikipedia.org/wiki/Explosion_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `P_RadiusAttack` function calculates damage from explosions based on distance and line of sight. It iterates over all objects within a defined radius, checking whether they are shootable and visible. This spatial awareness added realism to DOOM's gameplay, making explosions feel impactful and strategic. The radius-based damage mechanic influenced later games like Call of Duty, which refined area-of-effect calculations for grenades and other explosive weapons."
  - id: "sector-height-adjustments"
    line_start: 1253
    line_end: 1312
    title: "Sector Height: Dynamic Environmental Changes"
    wikipedia_url: "https://doomwiki.org/wiki/Sector"
    image_url: ""
    image_caption: ""
    content: "The `P_ChangeSector` function adjusts the floor or ceiling height of a sector, ensuring objects within the sector adapt to the new geometry. It handles edge cases like crushing objects or gibbing corpses, adding a layer of interactivity to DOOM's levels. This dynamic environment manipulation was ahead of its time, influencing games like Minecraft, which expanded on the idea of interactive terrain."

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
//	Movement, collision handling.
//	Shooting and aiming.
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: p_map.c,v 1.5 1997/02/03 22:45:11 b1 Exp $";

#include <stdlib.h>

#include "m_bbox.h"
#include "m_random.h"
#include "i_system.h"

#include "doomdef.h"
#include "p_local.h"

#include "s_sound.h"

// State.
#include "doomstat.h"
#include "r_state.h"
// Data.
#include "sounds.h"


fixed_t		tmbbox[4];
mobj_t*		tmthing;
int		tmflags;
fixed_t		tmx;
fixed_t		tmy;


// If "floatok" true, move would be ok
// if within "tmfloorz - tmceilingz".
boolean		floatok;

fixed_t		tmfloorz;
fixed_t		tmceilingz;
fixed_t		tmdropoffz;

// keep track of the line that lowers the ceiling,
// so missiles don't explode against sky hack walls
line_t*		ceilingline;

// keep track of special lines as they are hit,
// but don't process them until the move is proven valid
#define MAXSPECIALCROSS		8

line_t*		spechit[MAXSPECIALCROSS];
int		numspechit;



//
// TELEPORT MOVE
// 

//
// PIT_StompThing
//
boolean PIT_StompThing (mobj_t* thing)
{
    fixed_t	blockdist;
		
    if (!(thing->flags & MF_SHOOTABLE) )
	return true;
		
    blockdist = thing->radius + tmthing->radius;
    
    if ( abs(thing->x - tmx) >= blockdist
	 || abs(thing->y - tmy) >= blockdist )
    {
	// didn't hit it
	return true;
    }
    
    // don't clip against self
    if (thing == tmthing)
	return true;
    
    // monsters don't stomp things except on boss level
    if ( !tmthing->player && gamemap != 30)
	return false;	
		
    P_DamageMobj (thing, tmthing, tmthing, 10000);
	
    return true;
}


//
// P_TeleportMove
//
boolean
P_TeleportMove
( mobj_t*	thing,
  fixed_t	x,
  fixed_t	y )
{
    int			xl;
    int			xh;
    int			yl;
    int			yh;
    int			bx;
    int			by;
    
    subsector_t*	newsubsec;
    
    // kill anything occupying the position
    tmthing = thing;
    tmflags = thing->flags;
	
    tmx = x;
    tmy = y;
	
    tmbbox[BOXTOP] = y + tmthing->radius;
    tmbbox[BOXBOTTOM] = y - tmthing->radius;
    tmbbox[BOXRIGHT] = x + tmthing->radius;
    tmbbox[BOXLEFT] = x - tmthing->radius;

    newsubsec = R_PointInSubsector (x,y);
    ceilingline = NULL;
    
    // The base floor/ceiling is from the subsector
    // that contains the point.
    // Any contacted lines the step closer together
    // will adjust them.
    tmfloorz = tmdropoffz = newsubsec->sector->floorheight;
    tmceilingz = newsubsec->sector->ceilingheight;
			
    validcount++;
    numspechit = 0;
    
    // stomp on any things contacted
    xl = (tmbbox[BOXLEFT] - bmaporgx - MAXRADIUS)>>MAPBLOCKSHIFT;
    xh = (tmbbox[BOXRIGHT] - bmaporgx + MAXRADIUS)>>MAPBLOCKSHIFT;
    yl = (tmbbox[BOXBOTTOM] - bmaporgy - MAXRADIUS)>>MAPBLOCKSHIFT;
    yh = (tmbbox[BOXTOP] - bmaporgy + MAXRADIUS)>>MAPBLOCKSHIFT;

    for (bx=xl ; bx<=xh ; bx++)
	for (by=yl ; by<=yh ; by++)
	    if (!P_BlockThingsIterator(bx,by,PIT_StompThing))
		return false;
    
    // the move is ok,
    // so link the thing into its new position
    P_UnsetThingPosition (thing);

    thing->floorz = tmfloorz;
    thing->ceilingz = tmceilingz;	
    thing->x = x;
    thing->y = y;

    P_SetThingPosition (thing);
	
    return true;
}


//
// MOVEMENT ITERATOR FUNCTIONS
//


//
// PIT_CheckLine
// Adjusts tmfloorz and tmceilingz as lines are contacted
//
boolean PIT_CheckLine (line_t* ld)
{
    if (tmbbox[BOXRIGHT] <= ld->bbox[BOXLEFT]
	|| tmbbox[BOXLEFT] >= ld->bbox[BOXRIGHT]
	|| tmbbox[BOXTOP] <= ld->bbox[BOXBOTTOM]
	|| tmbbox[BOXBOTTOM] >= ld->bbox[BOXTOP] )
	return true;

    if (P_BoxOnLineSide (tmbbox, ld) != -1)
	return true;
		
    // A line has been hit
    
    // The moving thing's destination position will cross
    // the given line.
    // If this should not be allowed, return false.
    // If the line is special, keep track of it
    // to process later if the move is proven ok.
    // NOTE: specials are NOT sorted by order,
    // so two special lines that are only 8 pixels apart
    // could be crossed in either order.
    
    if (!ld->backsector)
	return false;		// one sided line
		
    if (!(tmthing->flags & MF_MISSILE) )
    {
	if ( ld->flags & ML_BLOCKING )
	    return false;	// explicitly blocking everything

	if ( !tmthing->player && ld->flags & ML_BLOCKMONSTERS )
	    return false;	// block monsters only
    }

    // set openrange, opentop, openbottom
    P_LineOpening (ld);	
	
    // adjust floor / ceiling heights
    if (opentop < tmceilingz)
    {
	tmceilingz = opentop;
	ceilingline = ld;
    }

    if (openbottom > tmfloorz)
	tmfloorz = openbottom;	

    if (lowfloor < tmdropoffz)
	tmdropoffz = lowfloor;
		
    // if contacted a special line, add it to the list
    if (ld->special)
    {
	spechit[numspechit] = ld;
	numspechit++;
    }

    return true;
}

//
// PIT_CheckThing
//
boolean PIT_CheckThing (mobj_t* thing)
{
    fixed_t		blockdist;
    boolean		solid;
    int			damage;
		
    if (!(thing->flags & (MF_SOLID|MF_SPECIAL|MF_SHOOTABLE) ))
	return true;
    
    blockdist = thing->radius + tmthing->radius;

    if ( abs(thing->x - tmx) >= blockdist
	 || abs(thing->y - tmy) >= blockdist )
    {
	// didn't hit it
	return true;	
    }
    
    // don't clip against self
    if (thing == tmthing)
	return true;
    
    // check for skulls slamming into things
    if (tmthing->flags & MF_SKULLFLY)
    {
	damage = ((P_Random()%8)+1)*tmthing->info->damage;
	
	P_DamageMobj (thing, tmthing, tmthing, damage);
	
	tmthing->flags &= ~MF_SKULLFLY;
	tmthing->momx = tmthing->momy = tmthing->momz = 0;
	
	P_SetMobjState (tmthing, tmthing->info->spawnstate);
	
	return false;		// stop moving
    }

    
    // missiles can hit other things
    if (tmthing->flags & MF_MISSILE)
    {
	// see if it went over / under
	if (tmthing->z > thing->z + thing->height)
	    return true;		// overhead
	if (tmthing->z+tmthing->height < thing->z)
	    return true;		// underneath
		
	if (tmthing->target && (
	    tmthing->target->type == thing->type || 
	    (tmthing->target->type == MT_KNIGHT && thing->type == MT_BRUISER)||
	    (tmthing->target->type == MT_BRUISER && thing->type == MT_KNIGHT) ) )
	{
	    // Don't hit same species as originator.
	    if (thing == tmthing->target)
		return true;

	    if (thing->type != MT_PLAYER)
	    {
		// Explode, but do no damage.
		// Let players missile other players.
		return false;
	    }
	}
	
	if (! (thing->flags & MF_SHOOTABLE) )
	{
	    // didn't do any damage
	    return !(thing->flags & MF_SOLID);	
	}
	
	// damage / explode
	damage = ((P_Random()%8)+1)*tmthing->info->damage;
	P_DamageMobj (thing, tmthing, tmthing->target, damage);

	// don't traverse any more
	return false;				
    }
    
    // check for special pickup
    if (thing->flags & MF_SPECIAL)
    {
	solid = thing->flags&MF_SOLID;
	if (tmflags&MF_PICKUP)
	{
	    // can remove thing
	    P_TouchSpecialThing (thing, tmthing);
	}
	return !solid;
    }
	
    return !(thing->flags & MF_SOLID);
}


//
// MOVEMENT CLIPPING
//

//
// P_CheckPosition
// This is purely informative, nothing is modified
// (except things picked up).
// 
// in:
//  a mobj_t (can be valid or invalid)
//  a position to be checked
//   (doesn't need to be related to the mobj_t->x,y)
//
// during:
//  special things are touched if MF_PICKUP
//  early out on solid lines?
//
// out:
//  newsubsec
//  floorz
//  ceilingz
//  tmdropoffz
//   the lowest point contacted
//   (monsters won't move to a dropoff)
//  speciallines[]
//  numspeciallines
//
boolean
P_CheckPosition
( mobj_t*	thing,
  fixed_t	x,
  fixed_t	y )
{
    int			xl;
    int			xh;
    int			yl;
    int			yh;
    int			bx;
    int			by;
    subsector_t*	newsubsec;

    tmthing = thing;
    tmflags = thing->flags;
	
    tmx = x;
    tmy = y;
	
    tmbbox[BOXTOP] = y + tmthing->radius;
    tmbbox[BOXBOTTOM] = y - tmthing->radius;
    tmbbox[BOXRIGHT] = x + tmthing->radius;
    tmbbox[BOXLEFT] = x - tmthing->radius;

    newsubsec = R_PointInSubsector (x,y);
    ceilingline = NULL;
    
    // The base floor / ceiling is from the subsector
    // that contains the point.
    // Any contacted lines the step closer together
    // will adjust them.
    tmfloorz = tmdropoffz = newsubsec->sector->floorheight;
    tmceilingz = newsubsec->sector->ceilingheight;
			
    validcount++;
    numspechit = 0;

    if ( tmflags & MF_NOCLIP )
	return true;
    
    // Check things first, possibly picking things up.
    // The bounding box is extended by MAXRADIUS
    // because mobj_ts are grouped into mapblocks
    // based on their origin point, and can overlap
    // into adjacent blocks by up to MAXRADIUS units.
    xl = (tmbbox[BOXLEFT] - bmaporgx - MAXRADIUS)>>MAPBLOCKSHIFT;
    xh = (tmbbox[BOXRIGHT] - bmaporgx + MAXRADIUS)>>MAPBLOCKSHIFT;
    yl = (tmbbox[BOXBOTTOM] - bmaporgy - MAXRADIUS)>>MAPBLOCKSHIFT;
    yh = (tmbbox[BOXTOP] - bmaporgy + MAXRADIUS)>>MAPBLOCKSHIFT;

    for (bx=xl ; bx<=xh ; bx++)
	for (by=yl ; by<=yh ; by++)
	    if (!P_BlockThingsIterator(bx,by,PIT_CheckThing))
		return false;
    
    // check lines
    xl = (tmbbox[BOXLEFT] - bmaporgx)>>MAPBLOCKSHIFT;
    xh = (tmbbox[BOXRIGHT] - bmaporgx)>>MAPBLOCKSHIFT;
    yl = (tmbbox[BOXBOTTOM] - bmaporgy)>>MAPBLOCKSHIFT;
    yh = (tmbbox[BOXTOP] - bmaporgy)>>MAPBLOCKSHIFT;

    for (bx=xl ; bx<=xh ; bx++)
	for (by=yl ; by<=yh ; by++)
	    if (!P_BlockLinesIterator (bx,by,PIT_CheckLine))
		return false;

    return true;
}


//
// P_TryMove
// Attempt to move to a new position,
// crossing special lines unless MF_TELEPORT is set.
//
boolean
P_TryMove
( mobj_t*	thing,
  fixed_t	x,
  fixed_t	y )
{
    fixed_t	oldx;
    fixed_t	oldy;
    int		side;
    int		oldside;
    line_t*	ld;

    floatok = false;
    if (!P_CheckPosition (thing, x, y))
	return false;		// solid wall or thing
    
    if ( !(thing->flags & MF_NOCLIP) )
    {
	if (tmceilingz - tmfloorz < thing->height)
	    return false;	// doesn't fit

	floatok = true;
	
	if ( !(thing->flags&MF_TELEPORT) 
	     &&tmceilingz - thing->z < thing->height)
	    return false;	// mobj must lower itself to fit

	if ( !(thing->flags&MF_TELEPORT)
	     && tmfloorz - thing->z > 24*FRACUNIT )
	    return false;	// too big a step up

	if ( !(thing->flags&(MF_DROPOFF|MF_FLOAT))
	     && tmfloorz - tmdropoffz > 24*FRACUNIT )
	    return false;	// don't stand over a dropoff
    }
    
    // the move is ok,
    // so link the thing into its new position
    P_UnsetThingPosition (thing);

    oldx = thing->x;
    oldy = thing->y;
    thing->floorz = tmfloorz;
    thing->ceilingz = tmceilingz;	
    thing->x = x;
    thing->y = y;

    P_SetThingPosition (thing);
    
    // if any special lines were hit, do the effect
    if (! (thing->flags&(MF_TELEPORT|MF_NOCLIP)) )
    {
	while (numspechit--)
	{
	    // see if the line was crossed
	    ld = spechit[numspechit];
	    side = P_PointOnLineSide (thing->x, thing->y, ld);
	    oldside = P_PointOnLineSide (oldx, oldy, ld);
	    if (side != oldside)
	    {
		if (ld->special)
		    P_CrossSpecialLine (ld-lines, oldside, thing);
	    }
	}
    }

    return true;
}


//
// P_ThingHeightClip
// Takes a valid thing and adjusts the thing->floorz,
// thing->ceilingz, and possibly thing->z.
// This is called for all nearby monsters
// whenever a sector changes height.
// If the thing doesn't fit,
// the z will be set to the lowest value
// and false will be returned.
//
boolean P_ThingHeightClip (mobj_t* thing)
{
    boolean		onfloor;
	
    onfloor = (thing->z == thing->floorz);
	
    P_CheckPosition (thing, thing->x, thing->y);	
    // what about stranding a monster partially off an edge?
	
    thing->floorz = tmfloorz;
    thing->ceilingz = tmceilingz;
	
    if (onfloor)
    {
	// walking monsters rise and fall with the floor
	thing->z = thing->floorz;
    }
    else
    {
	// don't adjust a floating monster unless forced to
	if (thing->z+thing->height > thing->ceilingz)
	    thing->z = thing->ceilingz - thing->height;
    }
	
    if (thing->ceilingz - thing->floorz < thing->height)
	return false;
		
    return true;
}



//
// SLIDE MOVE
// Allows the player to slide along any angled walls.
//
fixed_t		bestslidefrac;
fixed_t		secondslidefrac;

line_t*		bestslideline;
line_t*		secondslideline;

mobj_t*		slidemo;

fixed_t		tmxmove;
fixed_t		tmymove;



//
// P_HitSlideLine
// Adjusts the xmove / ymove
// so that the next move will slide along the wall.
//
void P_HitSlideLine (line_t* ld)
{
    int			side;

    angle_t		lineangle;
    angle_t		moveangle;
    angle_t		deltaangle;
    
    fixed_t		movelen;
    fixed_t		newlen;
	
	
    if (ld->slopetype == ST_HORIZONTAL)
    {
	tmymove = 0;
	return;
    }
    
    if (ld->slopetype == ST_VERTICAL)
    {
	tmxmove = 0;
	return;
    }
	
    side = P_PointOnLineSide (slidemo->x, slidemo->y, ld);
	
    lineangle = R_PointToAngle2 (0,0, ld->dx, ld->dy);

    if (side == 1)
	lineangle += ANG180;

    moveangle = R_PointToAngle2 (0,0, tmxmove, tmymove);
    deltaangle = moveangle-lineangle;

    if (deltaangle > ANG180)
	deltaangle += ANG180;
    //	I_Error ("SlideLine: ang>ANG180");

    lineangle >>= ANGLETOFINESHIFT;
    deltaangle >>= ANGLETOFINESHIFT;
	
    movelen = P_AproxDistance (tmxmove, tmymove);
    newlen = FixedMul (movelen, finecosine[deltaangle]);

    tmxmove = FixedMul (newlen, finecosine[lineangle]);	
    tmymove = FixedMul (newlen, finesine[lineangle]);	
}


//
// PTR_SlideTraverse
//
boolean PTR_SlideTraverse (intercept_t* in)
{
    line_t*	li;
	
    if (!in->isaline)
	I_Error ("PTR_SlideTraverse: not a line?");
		
    li = in->d.line;
    
    if ( ! (li->flags & ML_TWOSIDED) )
    {
	if (P_PointOnLineSide (slidemo->x, slidemo->y, li))
	{
	    // don't hit the back side
	    return true;		
	}
	goto isblocking;
    }

    // set openrange, opentop, openbottom
    P_LineOpening (li);
    
    if (openrange < slidemo->height)
	goto isblocking;		// doesn't fit
		
    if (opentop - slidemo->z < slidemo->height)
	goto isblocking;		// mobj is too high

    if (openbottom - slidemo->z > 24*FRACUNIT )
	goto isblocking;		// too big a step up

    // this line doesn't block movement
    return true;		
	
    // the line does block movement,
    // see if it is closer than best so far
  isblocking:		
    if (in->frac < bestslidefrac)
    {
	secondslidefrac = bestslidefrac;
	secondslideline = bestslideline;
	bestslidefrac = in->frac;
	bestslideline = li;
    }
	
    return false;	// stop
}



//
// P_SlideMove
// The momx / momy move is bad, so try to slide
// along a wall.
// Find the first line hit, move flush to it,
// and slide along it
//
// This is a kludgy mess.
//
void P_SlideMove (mobj_t* mo)
{
    fixed_t		leadx;
    fixed_t		leady;
    fixed_t		trailx;
    fixed_t		traily;
    fixed_t		newx;
    fixed_t		newy;
    int			hitcount;
		
    slidemo = mo;
    hitcount = 0;
    
  retry:
    if (++hitcount == 3)
	goto stairstep;		// don't loop forever

    
    // trace along the three leading corners
    if (mo->momx > 0)
    {
	leadx = mo->x + mo->radius;
	trailx = mo->x - mo->radius;
    }
    else
    {
	leadx = mo->x - mo->radius;
	trailx = mo->x + mo->radius;
    }
	
    if (mo->momy > 0)
    {
	leady = mo->y + mo->radius;
	traily = mo->y - mo->radius;
    }
    else
    {
	leady = mo->y - mo->radius;
	traily = mo->y + mo->radius;
    }
		
    bestslidefrac = FRACUNIT+1;
	
    P_PathTraverse ( leadx, leady, leadx+mo->momx, leady+mo->momy,
		     PT_ADDLINES, PTR_SlideTraverse );
    P_PathTraverse ( trailx, leady, trailx+mo->momx, leady+mo->momy,
		     PT_ADDLINES, PTR_SlideTraverse );
    P_PathTraverse ( leadx, traily, leadx+mo->momx, traily+mo->momy,
		     PT_ADDLINES, PTR_SlideTraverse );
    
    // move up to the wall
    if (bestslidefrac == FRACUNIT+1)
    {
	// the move most have hit the middle, so stairstep
      stairstep:
	if (!P_TryMove (mo, mo->x, mo->y + mo->momy))
	    P_TryMove (mo, mo->x + mo->momx, mo->y);
	return;
    }

    // fudge a bit to make sure it doesn't hit
    bestslidefrac -= 0x800;	
    if (bestslidefrac > 0)
    {
	newx = FixedMul (mo->momx, bestslidefrac);
	newy = FixedMul (mo->momy, bestslidefrac);
	
	if (!P_TryMove (mo, mo->x+newx, mo->y+newy))
	    goto stairstep;
    }
    
    // Now continue along the wall.
    // First calculate remainder.
    bestslidefrac = FRACUNIT-(bestslidefrac+0x800);
    
    if (bestslidefrac > FRACUNIT)
	bestslidefrac = FRACUNIT;
    
    if (bestslidefrac <= 0)
	return;
    
    tmxmove = FixedMul (mo->momx, bestslidefrac);
    tmymove = FixedMul (mo->momy, bestslidefrac);

    P_HitSlideLine (bestslideline);	// clip the moves

    mo->momx = tmxmove;
    mo->momy = tmymove;
		
    if (!P_TryMove (mo, mo->x+tmxmove, mo->y+tmymove))
    {
	goto retry;
    }
}


//
// P_LineAttack
//
mobj_t*		linetarget;	// who got hit (or NULL)
mobj_t*		shootthing;

// Height if not aiming up or down
// ???: use slope for monsters?
fixed_t		shootz;	

int		la_damage;
fixed_t		attackrange;

fixed_t		aimslope;

// slopes to top and bottom of target
extern fixed_t	topslope;
extern fixed_t	bottomslope;	


//
// PTR_AimTraverse
// Sets linetaget and aimslope when a target is aimed at.
//
boolean
PTR_AimTraverse (intercept_t* in)
{
    line_t*		li;
    mobj_t*		th;
    fixed_t		slope;
    fixed_t		thingtopslope;
    fixed_t		thingbottomslope;
    fixed_t		dist;
		
    if (in->isaline)
    {
	li = in->d.line;
	
	if ( !(li->flags & ML_TWOSIDED) )
	    return false;		// stop
	
	// Crosses a two sided line.
	// A two sided line will restrict
	// the possible target ranges.
	P_LineOpening (li);
	
	if (openbottom >= opentop)
	    return false;		// stop
	
	dist = FixedMul (attackrange, in->frac);

	if (li->frontsector->floorheight != li->backsector->floorheight)
	{
	    slope = FixedDiv (openbottom - shootz , dist);
	    if (slope > bottomslope)
		bottomslope = slope;
	}
		
	if (li->frontsector->ceilingheight != li->backsector->ceilingheight)
	{
	    slope = FixedDiv (opentop - shootz , dist);
	    if (slope < topslope)
		topslope = slope;
	}
		
	if (topslope <= bottomslope)
	    return false;		// stop
			
	return true;			// shot continues
    }
    
    // shoot a thing
    th = in->d.thing;
    if (th == shootthing)
	return true;			// can't shoot self
    
    if (!(th->flags&MF_SHOOTABLE))
	return true;			// corpse or something

    // check angles to see if the thing can be aimed at
    dist = FixedMul (attackrange, in->frac);
    thingtopslope = FixedDiv (th->z+th->height - shootz , dist);

    if (thingtopslope < bottomslope)
	return true;			// shot over the thing

    thingbottomslope = FixedDiv (th->z - shootz, dist);

    if (thingbottomslope > topslope)
	return true;			// shot under the thing
    
    // this thing can be hit!
    if (thingtopslope > topslope)
	thingtopslope = topslope;
    
    if (thingbottomslope < bottomslope)
	thingbottomslope = bottomslope;

    aimslope = (thingtopslope+thingbottomslope)/2;
    linetarget = th;

    return false;			// don't go any farther
}


//
// PTR_ShootTraverse
//
boolean PTR_ShootTraverse (intercept_t* in)
{
    fixed_t		x;
    fixed_t		y;
    fixed_t		z;
    fixed_t		frac;
    
    line_t*		li;
    
    mobj_t*		th;

    fixed_t		slope;
    fixed_t		dist;
    fixed_t		thingtopslope;
    fixed_t		thingbottomslope;
		
    if (in->isaline)
    {
	li = in->d.line;
	
	if (li->special)
	    P_ShootSpecialLine (shootthing, li);

	if ( !(li->flags & ML_TWOSIDED) )
	    goto hitline;
	
	// crosses a two sided line
	P_LineOpening (li);
		
	dist = FixedMul (attackrange, in->frac);

	if (li->frontsector->floorheight != li->backsector->floorheight)
	{
	    slope = FixedDiv (openbottom - shootz , dist);
	    if (slope > aimslope)
		goto hitline;
	}
		
	if (li->frontsector->ceilingheight != li->backsector->ceilingheight)
	{
	    slope = FixedDiv (opentop - shootz , dist);
	    if (slope < aimslope)
		goto hitline;
	}

	// shot continues
	return true;
	
	
	// hit line
      hitline:
	// position a bit closer
	frac = in->frac - FixedDiv (4*FRACUNIT,attackrange);
	x = trace.x + FixedMul (trace.dx, frac);
	y = trace.y + FixedMul (trace.dy, frac);
	z = shootz + FixedMul (aimslope, FixedMul(frac, attackrange));

	if (li->frontsector->ceilingpic == skyflatnum)
	{
	    // don't shoot the sky!
	    if (z > li->frontsector->ceilingheight)
		return false;
	    
	    // it's a sky hack wall
	    if	(li->backsector && li->backsector->ceilingpic == skyflatnum)
		return false;		
	}

	// Spawn bullet puffs.
	P_SpawnPuff (x,y,z);
	
	// don't go any farther
	return false;	
    }
    
    // shoot a thing
    th = in->d.thing;
    if (th == shootthing)
	return true;		// can't shoot self
    
    if (!(th->flags&MF_SHOOTABLE))
	return true;		// corpse or something
		
    // check angles to see if the thing can be aimed at
    dist = FixedMul (attackrange, in->frac);
    thingtopslope = FixedDiv (th->z+th->height - shootz , dist);

    if (thingtopslope < aimslope)
	return true;		// shot over the thing

    thingbottomslope = FixedDiv (th->z - shootz, dist);

    if (thingbottomslope > aimslope)
	return true;		// shot under the thing

    
    // hit thing
    // position a bit closer
    frac = in->frac - FixedDiv (10*FRACUNIT,attackrange);

    x = trace.x + FixedMul (trace.dx, frac);
    y = trace.y + FixedMul (trace.dy, frac);
    z = shootz + FixedMul (aimslope, FixedMul(frac, attackrange));

    // Spawn bullet puffs or blod spots,
    // depending on target type.
    if (in->d.thing->flags & MF_NOBLOOD)
	P_SpawnPuff (x,y,z);
    else
	P_SpawnBlood (x,y,z, la_damage);

    if (la_damage)
	P_DamageMobj (th, shootthing, shootthing, la_damage);

    // don't go any farther
    return false;
	
}


//
// P_AimLineAttack
//
fixed_t
P_AimLineAttack
( mobj_t*	t1,
  angle_t	angle,
  fixed_t	distance )
{
    fixed_t	x2;
    fixed_t	y2;
	
    angle >>= ANGLETOFINESHIFT;
    shootthing = t1;
    
    x2 = t1->x + (distance>>FRACBITS)*finecosine[angle];
    y2 = t1->y + (distance>>FRACBITS)*finesine[angle];
    shootz = t1->z + (t1->height>>1) + 8*FRACUNIT;

    // can't shoot outside view angles
    topslope = 100*FRACUNIT/160;	
    bottomslope = -100*FRACUNIT/160;
    
    attackrange = distance;
    linetarget = NULL;
	
    P_PathTraverse ( t1->x, t1->y,
		     x2, y2,
		     PT_ADDLINES|PT_ADDTHINGS,
		     PTR_AimTraverse );
		
    if (linetarget)
	return aimslope;

    return 0;
}
 

//
// P_LineAttack
// If damage == 0, it is just a test trace
// that will leave linetarget set.
//
void
P_LineAttack
( mobj_t*	t1,
  angle_t	angle,
  fixed_t	distance,
  fixed_t	slope,
  int		damage )
{
    fixed_t	x2;
    fixed_t	y2;
	
    angle >>= ANGLETOFINESHIFT;
    shootthing = t1;
    la_damage = damage;
    x2 = t1->x + (distance>>FRACBITS)*finecosine[angle];
    y2 = t1->y + (distance>>FRACBITS)*finesine[angle];
    shootz = t1->z + (t1->height>>1) + 8*FRACUNIT;
    attackrange = distance;
    aimslope = slope;
		
    P_PathTraverse ( t1->x, t1->y,
		     x2, y2,
		     PT_ADDLINES|PT_ADDTHINGS,
		     PTR_ShootTraverse );
}
 


//
// USE LINES
//
mobj_t*		usething;

boolean	PTR_UseTraverse (intercept_t* in)
{
    int		side;
	
    if (!in->d.line->special)
    {
	P_LineOpening (in->d.line);
	if (openrange <= 0)
	{
	    S_StartSound (usething, sfx_noway);
	    
	    // can't use through a wall
	    return false;	
	}
	// not a special line, but keep checking
	return true ;		
    }
	
    side = 0;
    if (P_PointOnLineSide (usething->x, usething->y, in->d.line) == 1)
	side = 1;
    
    //	return false;		// don't use back side
	
    P_UseSpecialLine (usething, in->d.line, side);

    // can't use for than one special line in a row
    return false;
}


//
// P_UseLines
// Looks for special lines in front of the player to activate.
//
void P_UseLines (player_t*	player) 
{
    int		angle;
    fixed_t	x1;
    fixed_t	y1;
    fixed_t	x2;
    fixed_t	y2;
	
    usething = player->mo;
		
    angle = player->mo->angle >> ANGLETOFINESHIFT;

    x1 = player->mo->x;
    y1 = player->mo->y;
    x2 = x1 + (USERANGE>>FRACBITS)*finecosine[angle];
    y2 = y1 + (USERANGE>>FRACBITS)*finesine[angle];
	
    P_PathTraverse ( x1, y1, x2, y2, PT_ADDLINES, PTR_UseTraverse );
}


//
// RADIUS ATTACK
//
mobj_t*		bombsource;
mobj_t*		bombspot;
int		bombdamage;


//
// PIT_RadiusAttack
// "bombsource" is the creature
// that caused the explosion at "bombspot".
//
boolean PIT_RadiusAttack (mobj_t* thing)
{
    fixed_t	dx;
    fixed_t	dy;
    fixed_t	dist;
	
    if (!(thing->flags & MF_SHOOTABLE) )
	return true;

    // Boss spider and cyborg
    // take no damage from concussion.
    if (thing->type == MT_CYBORG
	|| thing->type == MT_SPIDER)
	return true;	
		
    dx = abs(thing->x - bombspot->x);
    dy = abs(thing->y - bombspot->y);
    
    dist = dx>dy ? dx : dy;
    dist = (dist - thing->radius) >> FRACBITS;

    if (dist < 0)
	dist = 0;

    if (dist >= bombdamage)
	return true;	// out of range

    if ( P_CheckSight (thing, bombspot) )
    {
	// must be in direct path
	P_DamageMobj (thing, bombspot, bombsource, bombdamage - dist);
    }
    
    return true;
}


//
// P_RadiusAttack
// Source is the creature that caused the explosion at spot.
//
void
P_RadiusAttack
( mobj_t*	spot,
  mobj_t*	source,
  int		damage )
{
    int		x;
    int		y;
    
    int		xl;
    int		xh;
    int		yl;
    int		yh;
    
    fixed_t	dist;
	
    dist = (damage+MAXRADIUS)<<FRACBITS;
    yh = (spot->y + dist - bmaporgy)>>MAPBLOCKSHIFT;
    yl = (spot->y - dist - bmaporgy)>>MAPBLOCKSHIFT;
    xh = (spot->x + dist - bmaporgx)>>MAPBLOCKSHIFT;
    xl = (spot->x - dist - bmaporgx)>>MAPBLOCKSHIFT;
    bombspot = spot;
    bombsource = source;
    bombdamage = damage;
	
    for (y=yl ; y<=yh ; y++)
	for (x=xl ; x<=xh ; x++)
	    P_BlockThingsIterator (x, y, PIT_RadiusAttack );
}



//
// SECTOR HEIGHT CHANGING
// After modifying a sectors floor or ceiling height,
// call this routine to adjust the positions
// of all things that touch the sector.
//
// If anything doesn't fit anymore, true will be returned.
// If crunch is true, they will take damage
//  as they are being crushed.
// If Crunch is false, you should set the sector height back
//  the way it was and call P_ChangeSector again
//  to undo the changes.
//
boolean		crushchange;
boolean		nofit;


//
// PIT_ChangeSector
//
boolean PIT_ChangeSector (mobj_t*	thing)
{
    mobj_t*	mo;
	
    if (P_ThingHeightClip (thing))
    {
	// keep checking
	return true;
    }
    

    // crunch bodies to giblets
    if (thing->health <= 0)
    {
	P_SetMobjState (thing, S_GIBS);

	thing->flags &= ~MF_SOLID;
	thing->height = 0;
	thing->radius = 0;

	// keep checking
	return true;		
    }

    // crunch dropped items
    if (thing->flags & MF_DROPPED)
    {
	P_RemoveMobj (thing);
	
	// keep checking
	return true;		
    }

    if (! (thing->flags & MF_SHOOTABLE) )
    {
	// assume it is bloody gibs or something
	return true;			
    }
    
    nofit = true;

    if (crushchange && !(leveltime&3) )
    {
	P_DamageMobj(thing,NULL,NULL,10);

	// spray blood in a random direction
	mo = P_SpawnMobj (thing->x,
			  thing->y,
			  thing->z + thing->height/2, MT_BLOOD);
	
	mo->momx = (P_Random() - P_Random ())<<12;
	mo->momy = (P_Random() - P_Random ())<<12;
    }

    // keep checking (crush other things)	
    return true;	
}



//
// P_ChangeSector
//
boolean
P_ChangeSector
( sector_t*	sector,
  boolean	crunch )
{
    int		x;
    int		y;
	
    nofit = false;
    crushchange = crunch;
	
    // re-check heights for all things near the moving sector
    for (x=sector->blockbox[BOXLEFT] ; x<= sector->blockbox[BOXRIGHT] ; x++)
	for (y=sector->blockbox[BOXBOTTOM];y<= sector->blockbox[BOXTOP] ; y++)
	    P_BlockThingsIterator (x, y, PIT_ChangeSector);
	
	
    return nofit;
}
```
