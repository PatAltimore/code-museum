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
description: "Line-of-sight and visibility checks in DOOM's engine, enabling efficient enemy AI and player interaction."

summary:
  - point: "Uses a REJECT table to optimize visibility checks"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)#Technology"
    link_label: "DOOM Technology"
  - point: "Implements BSP traversal for spatial calculations"
    link: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    link_label: "Binary Space Partitioning"
  - point: "Introduces efficient slope-based occlusion testing"
    link: "https://en.wikipedia.org/wiki/Visibility_(geometry)"
    link_label: "Visibility in Geometry"

enhancements:
  - id: "divline-side-classification"
    line_start: 50
    line_end: 99
    title: "Classifying Points: Front, Back, or On?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Line_(geometry)"
    image_url: ""
    image_caption: ""
    content: "The `P_DivlineSide` function classifies a point relative to a dividing line, returning whether the point is on the front side, back side, or directly on the line. This geometric classification is foundational for DOOM's spatial calculations, including visibility checks and BSP traversal. The function uses fixed-point arithmetic to perform comparisons efficiently, a necessity given the hardware constraints of the era. By determining the relative position of points, the engine can decide which subsectors to process, avoiding unnecessary calculations. This technique was inspired by computational geometry methods used in CAD software and adapted for real-time applications in gaming. The concept of dividing space into regions influenced later engines, including Quake's 3D BSP system, which extended these principles into true 3D environments."
  - id: "intercept-point-calculation"
    line_start: 102
    line_end: 128
    title: "Finding Intercept Points in Fixed-Point Math"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `P_InterceptVector2` function calculates the fractional intercept point between two lines, a critical operation for determining whether a line crosses a subsector. This function uses fixed-point arithmetic, a method that avoids the performance penalties of floating-point calculations on early CPUs like the Intel 486. Fixed-point math was a hallmark of DOOM's engine, enabling precise calculations with minimal computational overhead. The intercept calculation is used in visibility checks and collision detection, ensuring that DOOM's fast-paced gameplay remains smooth even in complex environments. This reliance on fixed-point arithmetic influenced later engines, such as Build (used in Duke Nukem 3D), which also prioritized performance on limited hardware. Modern engines have largely transitioned to floating-point math, but DOOM's efficient techniques remain a benchmark in game optimization history."
  - id: "slope-based-occlusion-testing"
    line_start: 130
    line_end: 248
    title: "Slope Calculations: DOOM's Clever Occlusion Test"
    wikipedia_url: "https://en.wikipedia.org/wiki/Visibility_(geometry)"
    image_url: ""
    image_caption: ""
    content: "The `P_CrossSubsector` function performs detailed visibility checks by calculating slopes to determine whether an object is occluded. It examines the geometry of subsectors, comparing floor and ceiling heights to detect potential blockers. If the slopes of the top and bottom edges of a target overlap, the line of sight is considered obstructed. This slope-based approach was a clever solution to the problem of occlusion in a 2.5D engine, where true 3D calculations were infeasible on consumer hardware. By using fixed-point arithmetic and precomputed geometry data, DOOM achieved fast and accurate visibility checks, enabling realistic enemy AI and player interactions. This technique was a precursor to more advanced occlusion culling methods used in modern engines, such as Umbra's visibility solutions in Unity and Unreal."
  - id: "bsp-traversal-for-visibility"
    line_start: 252
    line_end: 290
    title: "BSP Traversal: The Backbone of DOOM's World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_space_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `P_CrossBSPNode` function traverses DOOM's binary space partitioning (BSP) tree to determine whether a line crosses a given node. BSP trees were a groundbreaking spatial representation technique in the early 1990s, allowing efficient partitioning of 2D and 3D spaces. In DOOM, the BSP tree organizes the game world into convex subsectors, enabling rapid visibility checks and collision detection. The traversal algorithm recursively checks which side of a partition plane the line starts and ends on, ensuring that only relevant subsectors are processed. This approach minimized the computational overhead of rendering and AI calculations, crucial for achieving DOOM's smooth performance on 486-class CPUs. BSP trees became a standard in game development, influencing titles like Quake and Half-Life. Even modern engines like Source and Unreal incorporate similar spatial partitioning techniques for efficient scene management."
  - id: "reject-table-optimization"
    line_start: 293
    line_end: 347
    title: "How DOOM's REJECT Table Saved CPU Cycles"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)#Technology"
    image_url: ""
    image_caption: ""
    content: "The `P_CheckSight` function is the centerpiece of DOOM's visibility system, determining whether one object can 'see' another. It begins by consulting the REJECT table, a precomputed matrix that flags pairs of sectors as potentially unconnected. This avoids expensive geometric calculations for objects that are trivially blocked by walls or other structures. The REJECT table was generated during map compilation, leveraging the binary space partitioning (BSP) structure to precompute relationships between sectors. In the early 1990s, CPUs like the Intel 486 were limited in processing power, making such optimizations essential for maintaining DOOM's fast-paced gameplay. By skipping unnecessary checks, the REJECT table allowed DOOM to handle complex environments with dozens of enemies without overwhelming the hardware. This technique influenced later games, including Quake, which further refined spatial optimization methods. Today, similar precomputed visibility techniques are used in engines like Unreal and Unity to optimize rendering and AI."

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
```
