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
description: "This file implements line-of-sight and visibility checks, a critical component of DOOM's AI and rendering systems."

summary:
  - point: "Uses a REJECT table for efficient visibility checks"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Employs BSP trees for spatial partitioning"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Optimized for real-time performance on 1990s hardware"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"

enhancements:
  - id: "line-of-sight-checks"
    line_start: 37
    line_end: 47
    title: "Line-of-sight calculations: the groundwork"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines key variables used in DOOM's line-of-sight calculations, such as `sightzstart`, `topslope`, and `bottomslope`. These variables represent the eye level of the observer and the slopes to the top and bottom of the target, respectively. The groundwork laid here is essential for determining whether an object is visible from a given point in the game world. In the early 1990s, real-time visibility checks were computationally expensive, especially on hardware like the Intel 80486. John Carmack's approach, leveraging precomputed data structures and efficient mathematical operations, allowed DOOM to perform these checks rapidly, enabling its fast-paced gameplay. This foundational work influenced later games and engines, including Quake and Unreal Engine, which built upon similar principles for visibility and rendering optimization."
  - id: "divline-side-calculation"
    line_start: 51
    line_end: 99
    title: "Determining sides of a dividing line"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `P_DivlineSide` function determines whether a point lies on the front, back, or directly on a dividing line. This is a fundamental operation in DOOM's spatial partitioning system, which uses Binary Space Partitioning (BSP) trees to organize the game world into manageable segments. BSP trees were a revolutionary technique for real-time rendering and collision detection, enabling efficient traversal and visibility checks. Carmack adapted BSP trees from academic research into computational geometry, applying them to the constraints of consumer-grade PCs. This method became a cornerstone of game engine design, influencing titles like Half-Life and engines like Source and Unity."
  - id: "intercept-vector-calculation"
    line_start: 102
    line_end: 128
    title: "Finding intersection points between vectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_InterceptVector2` function calculates the fractional intercept point between two vectors. This is used to determine where lines intersect, a critical operation for visibility checks and collision detection. The function employs fixed-point arithmetic, a technique that was essential for performance on hardware lacking floating-point units. By avoiding floating-point calculations, Carmack ensured that DOOM could run smoothly on a wide range of systems, including those with limited computational power. This optimization was part of a broader trend in 1990s game development, where developers often used fixed-point math to achieve real-time performance. The technique influenced later games and engines, particularly those targeting embedded systems or mobile platforms."
  - id: "subsector-crossing-check"
    line_start: 130
    line_end: 247
    title: "Traversing subsectors for visibility checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `P_CrossSubsector` function determines whether a line crosses a given subsector successfully. Subsector traversal is a key part of DOOM's BSP-based visibility system, allowing the engine to efficiently check for obstructions between two points. This function accounts for walls, floors, and ceilings, ensuring that visibility checks respect the geometry of the game world. Carmack's implementation of BSP trees for spatial partitioning was groundbreaking, enabling DOOM to handle complex environments with high performance. This approach became a standard in game development, influencing engines like Quake, Unreal Engine, and Source, which all use spatial partitioning techniques for rendering and collision detection."
  - id: "bsp-node-crossing"
    line_start: 253
    line_end: 290
    title: "Traversing BSP nodes for visibility checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `P_CrossBSPNode` function checks whether a line crosses a BSP node successfully. BSP nodes are hierarchical partitions of the game world, allowing DOOM to perform efficient visibility and collision checks. This function recursively traverses the BSP tree, ensuring that all relevant nodes are checked for obstructions. The use of BSP trees was a significant innovation in DOOM, enabling the game to render complex environments in real time on 1990s hardware. Carmack's implementation of BSP trees influenced not only subsequent id Software titles like Quake but also other engines and games, including Unreal Engine and Half-Life, which adopted similar spatial partitioning techniques."
  - id: "final-line-of-sight-check"
    line_start: 294
    line_end: 347
    title: "Comprehensive line-of-sight determination"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_CheckSight` function performs the final line-of-sight check between two objects, using the REJECT table and BSP traversal. The REJECT table is a precomputed data structure that quickly eliminates impossible visibility scenarios, while BSP traversal handles more detailed checks. This combination of techniques allowed DOOM to perform visibility calculations efficiently, supporting its fast-paced gameplay and dynamic AI behavior. The REJECT table and BSP-based visibility system were part of Carmack's broader effort to optimize DOOM for real-time performance on consumer PCs. These techniques influenced later games and engines, particularly those requiring efficient visibility and collision detection, such as Quake, Unreal Engine, and Source."

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

