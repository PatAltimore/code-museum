---
title: "p_sight.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/p_sight.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/p_sight.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "p-sight-c"
order: 32
description: "This file implements line-of-sight checks in DOOM, a foundational algorithm for enemy AI and player interaction in 3D environments."

summary:
  - point: "Uses BSP trees for efficient visibility checks"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Employs REJECT table for quick trivial rejection"
    link: "https://doomwiki.org/wiki/Reject_table"
    link_label: "Reject Table"
  - point: "Optimized for 1990s hardware constraints"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"

enhancements:
  - id: "line-of-sight-checks"
    line_start: 37
    line_end: 47
    title: "Line-of-sight calculations: DOOM's spatial awareness"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section sets up variables for DOOM's line-of-sight checks, including slopes and eye-level calculations. These values are critical for determining whether one object can 'see' another in the game's 3D space. In 1993, this was groundbreaking for real-time games, as it allowed enemies to react to the player's position dynamically. John Carmack, the lead programmer, was inspired by techniques used in earlier games like Wolfenstein 3D but pushed the boundaries by incorporating height differences and complex geometry into visibility calculations. The constraints of hardware at the time, such as the Intel 80486 processor, necessitated clever optimizations to ensure these checks could be performed quickly during gameplay. This foundational work influenced later games by demonstrating how spatial awareness could enhance AI behavior and player immersion."
  - id: "divline-side-calculation"
    line_start: 51
    line_end: 99
    title: "Determining sides of a dividing line"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `P_DivlineSide` function determines which side of a dividing line a point lies on. This is a core operation in DOOM's binary space partitioning (BSP) system, which organizes the game's geometry into a tree structure for efficient rendering and collision detection. In the early 1990s, BSP trees were cutting-edge technology, enabling DOOM to handle complex environments on modest hardware. Carmack's implementation here is both simple and effective, using fixed-point arithmetic to ensure precision and speed. This method was crucial for maintaining high frame rates while navigating intricate levels. The BSP approach became a standard in game development, influencing titles like Quake and Unreal."
  - id: "intercept-vector-calculation"
    line_start: 103
    line_end: 128
    title: "Calculating intersection points in 2D space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Line_intersection"
    image_url: ""
    image_caption: ""
    content: "The `P_InterceptVector2` function calculates the fractional intersection point between two lines. This is used to determine where visibility lines cross geometry in the game world. The use of fixed-point arithmetic reflects the constraints of 1990s hardware, where floating-point operations were expensive. Carmack's decision to use fixed-point math ensured that DOOM could perform these calculations rapidly, a necessity for real-time gameplay. This function is part of the game's traversal system, which checks whether sightlines are obstructed by walls or other objects. The algorithm's efficiency contributed to DOOM's reputation for smooth performance and responsiveness, even on lower-end PCs."
  - id: "cross-subsector-check"
    line_start: 130
    line_end: 247
    title: "Checking visibility across subsectors"
    wikipedia_url: "https://doomwiki.org/wiki/Subsector"
    image_url: ""
    image_caption: ""
    content: "The `P_CrossSubsector` function determines whether a line-of-sight crosses a given subsector in DOOM's BSP tree. Subsector traversal is a key part of the game's visibility checks, ensuring that objects are only rendered or considered if they are within the player's view. This function also accounts for occlusion caused by walls and height differences, making DOOM's environments feel more realistic. In 1993, this level of spatial detail was revolutionary, allowing for dynamic interactions between the player and the game world. Carmack's implementation is highly optimized, leveraging the BSP structure to minimize unnecessary calculations. This approach influenced later 3D engines, setting a precedent for efficient visibility determination in complex environments."
  - id: "cross-bsp-node-check"
    line_start: 253
    line_end: 290
    title: "Traversing BSP nodes for visibility checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `P_CrossBSPNode` function traverses nodes in the BSP tree to check visibility between two points. BSP trees divide the game world into hierarchical partitions, enabling efficient rendering and collision detection. This function ensures that visibility checks are performed only on relevant parts of the geometry, reducing computational overhead. Carmack's use of BSP trees was inspired by academic research and earlier applications in computer graphics. By integrating this technique into DOOM, he enabled the game to handle large, detailed environments on hardware with limited processing power. The BSP system became a cornerstone of 3D game engines, influencing titles like Quake and Unreal."
  - id: "check-sight-final-logic"
    line_start: 294
    line_end: 347
    title: "Final visibility checks using REJECT table"
    wikipedia_url: "https://doomwiki.org/wiki/Reject_table"
    image_url: ""
    image_caption: ""
    content: "The `P_CheckSight` function performs the final visibility check between two objects, using the REJECT table for quick trivial rejection. The REJECT table is a precomputed data structure that identifies pairs of sectors that cannot possibly have line-of-sight, saving significant computation time during gameplay. This optimization was critical for DOOM's performance, as it allowed the game to handle complex environments without slowing down. The function also incorporates BSP traversal and slope calculations to account for height differences and occlusion. Carmack's ability to combine precomputed data with real-time calculations exemplifies the ingenuity required to push the limits of 1990s hardware. The techniques used here laid the groundwork for efficient visibility determination in modern game engines."

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
//	LineOfSight/Visibility checks, uses REJECT Lookup Table.
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: p_sight.c,v 1.3 1997/01/28 22:08:28 b1 Exp $";


#include "doomdef.h"

#include "i_system.h"
#include "p_local.h"

// State.
#include "r_state.h"

//
// P_CheckSight
//
fixed_t		sightzstart;		// eye z of looker
fixed_t		topslope;
fixed_t		bottomslope;		// slopes to top and bottom of target

divline_t	strace;			// from t1 to t2
fixed_t		t2x;
fixed_t		t2y;

int		sightcounts[2];


//
// P_DivlineSide
// Returns side 0 (front), 1 (back), or 2 (on).
//
int
P_DivlineSide
( fixed_t	x,
  fixed_t	y,
  divline_t*	node )
{
    fixed_t	dx;
    fixed_t	dy;
    fixed_t	left;
    fixed_t	right;

    if (!node->dx)
    {
	if (x==node->x)
	    return 2;
	
	if (x <= node->x)
	    return node->dy > 0;

	return node->dy < 0;
    }
    
    if (!node->dy)
    {
	if (x==node->y)
	    return 2;

	if (y <= node->y)
	    return node->dx < 0;

	return node->dx > 0;
    }
	
    dx = (x - node->x);
    dy = (y - node->y);

    left =  (node->dy>>FRACBITS) * (dx>>FRACBITS);
    right = (dy>>FRACBITS) * (node->dx>>FRACBITS);
	
    if (right < left)
	return 0;	// front side
    
    if (left == right)
	return 2;
    return 1;		// back side
}


//
// P_InterceptVector2
// Returns the fractional intercept point
// along the first divline.
// This is only called by the addthings and addlines traversers.
//
fixed_t
P_InterceptVector2
( divline_t*	v2,
  divline_t*	v1 )
{
    fixed_t	frac;
    fixed_t	num;
    fixed_t	den;
	
    den = FixedMul (v1->dy>>8,v2->dx) - FixedMul(v1->dx>>8,v2->dy);

    if (den == 0)
	return 0;
    //	I_Error ("P_InterceptVector: parallel");
    
    num = FixedMul ( (v1->x - v2->x)>>8 ,v1->dy) + 
	FixedMul ( (v2->y - v1->y)>>8 , v1->dx);
    frac = FixedDiv (num , den);

    return frac;
}

//
// P_CrossSubsector
// Returns true
//  if strace crosses the given subsector successfully.
//
boolean P_CrossSubsector (int num)
{
    seg_t*		seg;
    line_t*		line;
    int			s1;
    int			s2;
    int			count;
    subsector_t*	sub;
    sector_t*		front;
    sector_t*		back;
    fixed_t		opentop;
    fixed_t		openbottom;
    divline_t		divl;
    vertex_t*		v1;
    vertex_t*		v2;
    fixed_t		frac;
    fixed_t		slope;
	
#ifdef RANGECHECK
    if (num>=numsubsectors)
	I_Error ("P_CrossSubsector: ss %i with numss = %i",
		 num,
		 numsubsectors);
#endif

    sub = &subsectors[num];
    
    // check lines
    count = sub->numlines;
    seg = &segs[sub->firstline];

    for ( ; count ; seg++, count--)
    {
	line = seg->linedef;

	// allready checked other side?
	if (line->validcount == validcount)
	    continue;
	
	line->validcount = validcount;
		
	v1 = line->v1;
	v2 = line->v2;
	s1 = P_DivlineSide (v1->x,v1->y, &strace);
	s2 = P_DivlineSide (v2->x, v2->y, &strace);

	// line isn't crossed?
	if (s1 == s2)
	    continue;
	
	divl.x = v1->x;
	divl.y = v1->y;
	divl.dx = v2->x - v1->x;
	divl.dy = v2->y - v1->y;
	s1 = P_DivlineSide (strace.x, strace.y, &divl);
	s2 = P_DivlineSide (t2x, t2y, &divl);

	// line isn't crossed?
	if (s1 == s2)
	    continue;	

	// stop because it is not two sided anyway
	// might do this after updating validcount?
	if ( !(line->flags & ML_TWOSIDED) )
	    return false;
	
	// crosses a two sided line
	front = seg->frontsector;
	back = seg->backsector;

	// no wall to block sight with?
	if (front->floorheight == back->floorheight
	    && front->ceilingheight == back->ceilingheight)
	    continue;	

	// possible occluder
	// because of ceiling height differences
	if (front->ceilingheight < back->ceilingheight)
	    opentop = front->ceilingheight;
	else
	    opentop = back->ceilingheight;

	// because of ceiling height differences
	if (front->floorheight > back->floorheight)
	    openbottom = front->floorheight;
	else
	    openbottom = back->floorheight;
		
	// quick test for totally closed doors
	if (openbottom >= opentop)	
	    return false;		// stop
	
	frac = P_InterceptVector2 (&strace, &divl);
		
	if (front->floorheight != back->floorheight)
	{
	    slope = FixedDiv (openbottom - sightzstart , frac);
	    if (slope > bottomslope)
		bottomslope = slope;
	}
		
	if (front->ceilingheight != back->ceilingheight)
	{
	    slope = FixedDiv (opentop - sightzstart , frac);
	    if (slope < topslope)
		topslope = slope;
	}
		
	if (topslope <= bottomslope)
	    return false;		// stop				
    }
    // passed the subsector ok
    return true;		
}



//
// P_CrossBSPNode
// Returns true
//  if strace crosses the given node successfully.
//
boolean P_CrossBSPNode (int bspnum)
{
    node_t*	bsp;
    int		side;

    if (bspnum & NF_SUBSECTOR)
    {
	if (bspnum == -1)
	    return P_CrossSubsector (0);
	else
	    return P_CrossSubsector (bspnum&(~NF_SUBSECTOR));
    }
		
    bsp = &nodes[bspnum];
    
    // decide which side the start point is on
    side = P_DivlineSide (strace.x, strace.y, (divline_t *)bsp);
    if (side == 2)
	side = 0;	// an "on" should cross both sides

    // cross the starting side
    if (!P_CrossBSPNode (bsp->children[side]) )
	return false;
	
    // the partition plane is crossed here
    if (side == P_DivlineSide (t2x, t2y,(divline_t *)bsp))
    {
	// the line doesn't touch the other side
	return true;
    }
    
    // cross the ending side		
    return P_CrossBSPNode (bsp->children[side^1]);
}


//
// P_CheckSight
// Returns true
//  if a straight line between t1 and t2 is unobstructed.
// Uses REJECT.
//
boolean
P_CheckSight
( mobj_t*	t1,
  mobj_t*	t2 )
{
    int		s1;
    int		s2;
    int		pnum;
    int		bytenum;
    int		bitnum;
    
    // First check for trivial rejection.

    // Determine subsector entries in REJECT table.
    s1 = (t1->subsector->sector - sectors);
    s2 = (t2->subsector->sector - sectors);
    pnum = s1*numsectors + s2;
    bytenum = pnum>>3;
    bitnum = 1 << (pnum&7);

    // Check in REJECT table.
    if (rejectmatrix[bytenum]&bitnum)
    {
	sightcounts[0]++;

	// can't possibly be connected
	return false;	
    }

    // An unobstructed LOS is possible.
    // Now look from eyes of t1 to any part of t2.
    sightcounts[1]++;

    validcount++;
	
    sightzstart = t1->z + t1->height - (t1->height>>2);
    topslope = (t2->z+t2->height) - sightzstart;
    bottomslope = (t2->z) - sightzstart;
	
    strace.x = t1->x;
    strace.y = t1->y;
    t2x = t2->x;
    t2y = t2->y;
    strace.dx = t2->x - t1->x;
    strace.dy = t2->y - t1->y;

    // the head node is the last node output
    return P_CrossBSPNode (numnodes-1);	
}

