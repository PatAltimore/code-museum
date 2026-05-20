---
title: "p_doors.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/p_doors.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/p_doors.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "p-doors-c"
order: 26
description: "This file contains the door animation logic for DOOM, a groundbreaking 1993 game that defined the FPS genre and pushed the limits of consumer hardware."

summary:
  - point: "Introduces vertical door mechanics central to DOOM's level design"
    link: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Implements locked door logic tied to collectible keys"
    link: "https://doomwiki.org/wiki/Keys"
    link_label: "DOOM Keys"
  - point: "Includes abandoned sliding door code, hinting at unused features"
    link: "https://doomwiki.org/wiki/Sliding_doors"
    link_label: "Sliding Doors in DOOM"
  - point: "Optimized for real-time gameplay on 1993 hardware"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"
  - point: "Demonstrates modular 'thinker' system for game object behaviors"
    link: "https://doomwiki.org/wiki/Thinker"
    link_label: "Thinker System"

enhancements:
  - id: "vertical-door-mechanics"
    line_start: 56
    line_end: 198
    title: "How DOOM Made Doors Feel Alive"
    wikipedia_url: "https://doomwiki.org/wiki/Door"
    image_url: ""
    image_caption: ""
    content: "The `T_VerticalDoor` function is the heart of DOOM's door mechanics, handling the opening, closing, and waiting states of vertical doors. It uses a state machine approach, where the door's behavior changes based on its current state (`direction`) and type (`normal`, `blazeRaise`, etc.). The function also integrates sound effects to enhance the player's experience, such as the distinct 'door open' and 'door close' sounds. At the time, real-time animation and interaction with the environment were rare, and this implementation helped make DOOM's world feel dynamic and immersive. In 1993, DOOM was designed to run on consumer PCs equipped with Intel 80486 processors, which had limited computational power. John Carmack's programming expertise ensured that even complex mechanics like doors were optimized for performance. The modular 'thinker' system allowed objects like doors to have their own behavior routines, making the codebase extensible and easier to manage. The vertical door mechanics became a staple in level design for FPS games, influencing titles like Quake and Half-Life. The state machine approach and modular object behavior inspired game developers to adopt similar systems for interactive environments. Today, this technique is foundational in game engines like Unity and Unreal Engine, where state-driven animations are ubiquitous."
  - id: "locked-door-logic"
    line_start: 201
    line_end: 260
    title: "The Keys That Locked DOOM's Levels"
    wikipedia_url: "https://doomwiki.org/wiki/Keys"
    image_url: ""
    image_caption: ""
    content: "The `EV_DoLockedDoor` function implements the logic for locked doors in DOOM, requiring players to collect specific keys (blue, red, or yellow) to progress. If the player lacks the necessary key, the game provides feedback through a message and a sound effect ('oof'). This mechanic added a layer of strategy and exploration to DOOM's fast-paced gameplay, encouraging players to thoroughly explore levels. In the early '90s, key-based progression was a common design choice in adventure games, but DOOM adapted it to the FPS genre, integrating it seamlessly into its labyrinthine level design. The locked door mechanic was a collaborative effort by id Software's team, including John Romero, who focused on level design and player experience. This approach influenced countless games, from Duke Nukem 3D to modern titles like DOOM Eternal. The concept of collectible items unlocking new areas became a staple in game design, appearing in genres ranging from RPGs to platformers. The feedback system—providing both visual and auditory cues—set a precedent for clear player communication that remains standard in game design today."
  - id: "spawn-door-close-in-30"
    line_start: 502
    line_end: 522
    title: "The Door That Waited 30 Seconds"
    wikipedia_url: "https://doomwiki.org/wiki/Door"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnDoorCloseIn30` function creates a door that automatically closes after 30 seconds. This mechanic added tension and urgency to DOOM's gameplay, forcing players to act quickly or risk being trapped. The countdown is implemented using the game's 'thinker' system, which schedules behaviors for objects in the game world. Timed events like this were innovative in 1993, as most games relied on static environments. The ability to dynamically alter the game world based on time was a testament to John Carmack's programming ingenuity. It showcased how DOOM's engine could handle complex interactions efficiently, even on limited hardware. Timed mechanics like these became a hallmark of interactive level design, influencing games like Portal and Half-Life. The concept of environmental changes tied to player actions or time constraints is now a common feature in modern game design, demonstrating DOOM's lasting impact on the industry."
  - id: "abandoned-sliding-door-code"
    line_start: 554
    line_end: 763
    title: "The Sliding Doors That Never Opened"
    wikipedia_url: "https://doomwiki.org/wiki/Sliding_doors"
    image_url: ""
    image_caption: ""
    content: "The sliding door code, marked as abandoned, reveals an intriguing glimpse into DOOM's development process. The `EV_SlidingDoor` function and related routines were intended to implement horizontally sliding doors, complete with animated textures. However, these features were ultimately unused in the final game, possibly due to time constraints or hardware limitations. Sliding doors were a novel idea in 1993, as most games featured simple vertical or static doors. The code includes logic for animating textures frame by frame and removing blocking properties from the door once fully opened. This level of detail highlights id Software's ambition to push the boundaries of environmental interactivity. Although unused in DOOM, sliding doors appeared in later games like Quake and Unreal, where more advanced engines could support such features. The concept of animated environmental objects influenced modern game engines, where dynamic textures and object states are standard. This abandoned code serves as a reminder of the iterative nature of game development and the trade-offs developers must make to meet deadlines."

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
// DESCRIPTION: Door animation code (opening/closing)
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: p_doors.c,v 1.4 1997/02/03 16:47:53 b1 Exp $";


#include "z_zone.h"
#include "doomdef.h"
#include "p_local.h"

#include "s_sound.h"


// State.
#include "doomstat.h"
#include "r_state.h"

// Data.
#include "dstrings.h"
#include "sounds.h"

#if 0
//
// Sliding door frame information
//
slidename_t	slideFrameNames[MAXSLIDEDOORS] =
{
    {"GDOORF1","GDOORF2","GDOORF3","GDOORF4",	// front
     "GDOORB1","GDOORB2","GDOORB3","GDOORB4"},	// back
	 
    {"\0","\0","\0","\0"}
};
#endif


//
// VERTICAL DOORS
//

//
// T_VerticalDoor
//
void T_VerticalDoor (vldoor_t* door)
{
    result_e	res;
	
    switch(door->direction)
    {
      case 0:
	// WAITING
	if (!--door->topcountdown)
	{
	    switch(door->type)
	    {
	      case blazeRaise:
		door->direction = -1; // time to go back down
		S_StartSound((mobj_t *)&door->sector->soundorg,
			     sfx_bdcls);
		break;
		
	      case normal:
		door->direction = -1; // time to go back down
		S_StartSound((mobj_t *)&door->sector->soundorg,
			     sfx_dorcls);
		break;
		
	      case close30ThenOpen:
		door->direction = 1;
		S_StartSound((mobj_t *)&door->sector->soundorg,
			     sfx_doropn);
		break;
		
	      default:
		break;
	    }
	}
	break;
	
      case 2:
	//  INITIAL WAIT
	if (!--door->topcountdown)
	{
	    switch(door->type)
	    {
	      case raiseIn5Mins:
		door->direction = 1;
		door->type = normal;
		S_StartSound((mobj_t *)&door->sector->soundorg,
			     sfx_doropn);
		break;
		
	      default:
		break;
	    }
	}
	break;
	
      case -1:
	// DOWN
	res = T_MovePlane(door->sector,
			  door->speed,
			  door->sector->floorheight,
			  false,1,door->direction);
	if (res == pastdest)
	{
	    switch(door->type)
	    {
	      case blazeRaise:
	      case blazeClose:
		door->sector->specialdata = NULL;
		P_RemoveThinker (&door->thinker);  // unlink and free
		S_StartSound((mobj_t *)&door->sector->soundorg,
			     sfx_bdcls);
		break;
		
	      case normal:
	      case close:
		door->sector->specialdata = NULL;
		P_RemoveThinker (&door->thinker);  // unlink and free
		break;
		
	      case close30ThenOpen:
		door->direction = 0;
		door->topcountdown = 35*30;
		break;
		
	      default:
		break;
	    }
	}
	else if (res == crushed)
	{
	    switch(door->type)
	    {
	      case blazeClose:
	      case close:		// DO NOT GO BACK UP!
		break;
		
	      default:
		door->direction = 1;
		S_StartSound((mobj_t *)&door->sector->soundorg,
			     sfx_doropn);
		break;
	    }
	}
	break;
	
      case 1:
	// UP
	res = T_MovePlane(door->sector,
			  door->speed,
			  door->topheight,
			  false,1,door->direction);
	
	if (res == pastdest)
	{
	    switch(door->type)
	    {
	      case blazeRaise:
	      case normal:
		door->direction = 0; // wait at top
		door->topcountdown = door->topwait;
		break;
		
	      case close30ThenOpen:
	      case blazeOpen:
	      case open:
		door->sector->specialdata = NULL;
		P_RemoveThinker (&door->thinker);  // unlink and free
		break;
		
	      default:
		break;
	    }
	}
	break;
    }
}


//
// EV_DoLockedDoor
// Move a locked door up/down
//

int
EV_DoLockedDoor
( line_t*	line,
  vldoor_e	type,
  mobj_t*	thing )
{
    player_t*	p;
	
    p = thing->player;
	
    if (!p)
	return 0;
		
    switch(line->special)
    {
      case 99:	// Blue Lock
      case 133:
	if ( !p )
	    return 0;
	if (!p->cards[it_bluecard] && !p->cards[it_blueskull])
	{
	    p->message = PD_BLUEO;
	    S_StartSound(NULL,sfx_oof);
	    return 0;
	}
	break;
	
      case 134: // Red Lock
      case 135:
	if ( !p )
	    return 0;
	if (!p->cards[it_redcard] && !p->cards[it_redskull])
	{
	    p->message = PD_REDO;
	    S_StartSound(NULL,sfx_oof);
	    return 0;
	}
	break;
	
      case 136:	// Yellow Lock
      case 137:
	if ( !p )
	    return 0;
	if (!p->cards[it_yellowcard] &&
	    !p->cards[it_yellowskull])
	{
	    p->message = PD_YELLOWO;
	    S_StartSound(NULL,sfx_oof);
	    return 0;
	}
	break;	
    }

    return EV_DoDoor(line,type);
}


int
EV_DoDoor
( line_t*	line,
  vldoor_e	type )
{
    int		secnum,rtn;
    sector_t*	sec;
    vldoor_t*	door;
	
    secnum = -1;
    rtn = 0;
    
    while ((secnum = P_FindSectorFromLineTag(line,secnum)) >= 0)
    {
	sec = &sectors[secnum];
	if (sec->specialdata)
	    continue;
		
	
	// new door thinker
	rtn = 1;
	door = Z_Malloc (sizeof(*door), PU_LEVSPEC, 0);
	P_AddThinker (&door->thinker);
	sec->specialdata = door;

	door->thinker.function.acp1 = (actionf_p1) T_VerticalDoor;
	door->sector = sec;
	door->type = type;
	door->topwait = VDOORWAIT;
	door->speed = VDOORSPEED;
		
	switch(type)
	{
	  case blazeClose:
	    door->topheight = P_FindLowestCeilingSurrounding(sec);
	    door->topheight -= 4*FRACUNIT;
	    door->direction = -1;
	    door->speed = VDOORSPEED * 4;
	    S_StartSound((mobj_t *)&door->sector->soundorg,
			 sfx_bdcls);
	    break;
	    
	  case close:
	    door->topheight = P_FindLowestCeilingSurrounding(sec);
	    door->topheight -= 4*FRACUNIT;
	    door->direction = -1;
	    S_StartSound((mobj_t *)&door->sector->soundorg,
			 sfx_dorcls);
	    break;
	    
	  case close30ThenOpen:
	    door->topheight = sec->ceilingheight;
	    door->direction = -1;
	    S_StartSound((mobj_t *)&door->sector->soundorg,
			 sfx_dorcls);
	    break;
	    
	  case blazeRaise:
	  case blazeOpen:
	    door->direction = 1;
	    door->topheight = P_FindLowestCeilingSurrounding(sec);
	    door->topheight -= 4*FRACUNIT;
	    door->speed = VDOORSPEED * 4;
	    if (door->topheight != sec->ceilingheight)
		S_StartSound((mobj_t *)&door->sector->soundorg,
			     sfx_bdopn);
	    break;
	    
	  case normal:
	  case open:
	    door->direction = 1;
	    door->topheight = P_FindLowestCeilingSurrounding(sec);
	    door->topheight -= 4*FRACUNIT;
	    if (door->topheight != sec->ceilingheight)
		S_StartSound((mobj_t *)&door->sector->soundorg,
			     sfx_doropn);
	    break;
	    
	  default:
	    break;
	}
		
    }
    return rtn;
}


//
// EV_VerticalDoor : open a door manually, no tag value
//
void
EV_VerticalDoor
( line_t*	line,
  mobj_t*	thing )
{
    player_t*	player;
    int		secnum;
    sector_t*	sec;
    vldoor_t*	door;
    int		side;
	
    side = 0;	// only front sides can be used

    //	Check for locks
    player = thing->player;
		
    switch(line->special)
    {
      case 26: // Blue Lock
      case 32:
	if ( !player )
	    return;
	
	if (!player->cards[it_bluecard] && !player->cards[it_blueskull])
	{
	    player->message = PD_BLUEK;
	    S_StartSound(NULL,sfx_oof);
	    return;
	}
	break;
	
      case 27: // Yellow Lock
      case 34:
	if ( !player )
	    return;
	
	if (!player->cards[it_yellowcard] &&
	    !player->cards[it_yellowskull])
	{
	    player->message = PD_YELLOWK;
	    S_StartSound(NULL,sfx_oof);
	    return;
	}
	break;
	
      case 28: // Red Lock
      case 33:
	if ( !player )
	    return;
	
	if (!player->cards[it_redcard] && !player->cards[it_redskull])
	{
	    player->message = PD_REDK;
	    S_StartSound(NULL,sfx_oof);
	    return;
	}
	break;
    }
	
    // if the sector has an active thinker, use it
    sec = sides[ line->sidenum[side^1]] .sector;
    secnum = sec-sectors;

    if (sec->specialdata)
    {
	door = sec->specialdata;
	switch(line->special)
	{
	  case	1: // ONLY FOR "RAISE" DOORS, NOT "OPEN"s
	  case	26:
	  case	27:
	  case	28:
	  case	117:
	    if (door->direction == -1)
		door->direction = 1;	// go back up
	    else
	    {
		if (!thing->player)
		    return;		// JDC: bad guys never close doors
		
		door->direction = -1;	// start going down immediately
	    }
	    return;
	}
    }
	
    // for proper sound
    switch(line->special)
    {
      case 117:	// BLAZING DOOR RAISE
      case 118:	// BLAZING DOOR OPEN
	S_StartSound((mobj_t *)&sec->soundorg,sfx_bdopn);
	break;
	
      case 1:	// NORMAL DOOR SOUND
      case 31:
	S_StartSound((mobj_t *)&sec->soundorg,sfx_doropn);
	break;
	
      default:	// LOCKED DOOR SOUND
	S_StartSound((mobj_t *)&sec->soundorg,sfx_doropn);
	break;
    }
	
    
    // new door thinker
    door = Z_Malloc (sizeof(*door), PU_LEVSPEC, 0);
    P_AddThinker (&door->thinker);
    sec->specialdata = door;
    door->thinker.function.acp1 = (actionf_p1) T_VerticalDoor;
    door->sector = sec;
    door->direction = 1;
    door->speed = VDOORSPEED;
    door->topwait = VDOORWAIT;

    switch(line->special)
    {
      case 1:
      case 26:
      case 27:
      case 28:
	door->type = normal;
	break;
	
      case 31:
      case 32:
      case 33:
      case 34:
	door->type = open;
	line->special = 0;
	break;
	
      case 117:	// blazing door raise
	door->type = blazeRaise;
	door->speed = VDOORSPEED*4;
	break;
      case 118:	// blazing door open
	door->type = blazeOpen;
	line->special = 0;
	door->speed = VDOORSPEED*4;
	break;
    }
    
    // find the top and bottom of the movement range
    door->topheight = P_FindLowestCeilingSurrounding(sec);
    door->topheight -= 4*FRACUNIT;
}


//
// Spawn a door that closes after 30 seconds
//
void P_SpawnDoorCloseIn30 (sector_t* sec)
{
    vldoor_t*	door;
	
    door = Z_Malloc ( sizeof(*door), PU_LEVSPEC, 0);

    P_AddThinker (&door->thinker);

    sec->specialdata = door;
    sec->special = 0;

    door->thinker.function.acp1 = (actionf_p1)T_VerticalDoor;
    door->sector = sec;
    door->direction = 0;
    door->type = normal;
    door->speed = VDOORSPEED;
    door->topcountdown = 30 * 35;
}

//
// Spawn a door that opens after 5 minutes
//
void
P_SpawnDoorRaiseIn5Mins
( sector_t*	sec,
  int		secnum )
{
    vldoor_t*	door;
	
    door = Z_Malloc ( sizeof(*door), PU_LEVSPEC, 0);
    
    P_AddThinker (&door->thinker);

    sec->specialdata = door;
    sec->special = 0;

    door->thinker.function.acp1 = (actionf_p1)T_VerticalDoor;
    door->sector = sec;
    door->direction = 2;
    door->type = raiseIn5Mins;
    door->speed = VDOORSPEED;
    door->topheight = P_FindLowestCeilingSurrounding(sec);
    door->topheight -= 4*FRACUNIT;
    door->topwait = VDOORWAIT;
    door->topcountdown = 5 * 60 * 35;
}



// UNUSED
// Separate into p_slidoor.c?

#if 0		// ABANDONED TO THE MISTS OF TIME!!!
//
// EV_SlidingDoor : slide a door horizontally
// (animate midtexture, then set noblocking line)
//


slideframe_t slideFrames[MAXSLIDEDOORS];

void P_InitSlidingDoorFrames(void)
{
    int		i;
    int		f1;
    int		f2;
    int		f3;
    int		f4;
	
    // DOOM II ONLY...
    if ( gamemode != commercial)
	return;
	
    for (i = 0;i < MAXSLIDEDOORS; i++)
    {
	if (!slideFrameNames[i].frontFrame1[0])
	    break;
			
	f1 = R_TextureNumForName(slideFrameNames[i].frontFrame1);
	f2 = R_TextureNumForName(slideFrameNames[i].frontFrame2);
	f3 = R_TextureNumForName(slideFrameNames[i].frontFrame3);
	f4 = R_TextureNumForName(slideFrameNames[i].frontFrame4);

	slideFrames[i].frontFrames[0] = f1;
	slideFrames[i].frontFrames[1] = f2;
	slideFrames[i].frontFrames[2] = f3;
	slideFrames[i].frontFrames[3] = f4;
		
	f1 = R_TextureNumForName(slideFrameNames[i].backFrame1);
	f2 = R_TextureNumForName(slideFrameNames[i].backFrame2);
	f3 = R_TextureNumForName(slideFrameNames[i].backFrame3);
	f4 = R_TextureNumForName(slideFrameNames[i].backFrame4);

	slideFrames[i].backFrames[0] = f1;
	slideFrames[i].backFrames[1] = f2;
	slideFrames[i].backFrames[2] = f3;
	slideFrames[i].backFrames[3] = f4;
    }
}


//
// Return index into "slideFrames" array
// for which door type to use
//
int P_FindSlidingDoorType(line_t*	line)
{
    int		i;
    int		val;
	
    for (i = 0;i < MAXSLIDEDOORS;i++)
    {
	val = sides[line->sidenum[0]].midtexture;
	if (val == slideFrames[i].frontFrames[0])
	    return i;
    }
	
    return -1;
}

void T_SlidingDoor (slidedoor_t*	door)
{
    switch(door->status)
    {
      case sd_opening:
	if (!door->timer--)
	{
	    if (++door->frame == SNUMFRAMES)
	    {
		// IF DOOR IS DONE OPENING...
		sides[door->line->sidenum[0]].midtexture = 0;
		sides[door->line->sidenum[1]].midtexture = 0;
		door->line->flags &= ML_BLOCKING^0xff;
					
		if (door->type == sdt_openOnly)
		{
		    door->frontsector->specialdata = NULL;
		    P_RemoveThinker (&door->thinker);
		    break;
		}
					
		door->timer = SDOORWAIT;
		door->status = sd_waiting;
	    }
	    else
	    {
		// IF DOOR NEEDS TO ANIMATE TO NEXT FRAME...
		door->timer = SWAITTICS;
					
		sides[door->line->sidenum[0]].midtexture =
		    slideFrames[door->whichDoorIndex].
		    frontFrames[door->frame];
		sides[door->line->sidenum[1]].midtexture =
		    slideFrames[door->whichDoorIndex].
		    backFrames[door->frame];
	    }
	}
	break;
			
      case sd_waiting:
	// IF DOOR IS DONE WAITING...
	if (!door->timer--)
	{
	    // CAN DOOR CLOSE?
	    if (door->frontsector->thinglist != NULL ||
		door->backsector->thinglist != NULL)
	    {
		door->timer = SDOORWAIT;
		break;
	    }

	    //door->frame = SNUMFRAMES-1;
	    door->status = sd_closing;
	    door->timer = SWAITTICS;
	}
	break;
			
      case sd_closing:
	if (!door->timer--)
	{
	    if (--door->frame < 0)
	    {
		// IF DOOR IS DONE CLOSING...
		door->line->flags |= ML_BLOCKING;
		door->frontsector->specialdata = NULL;
		P_RemoveThinker (&door->thinker);
		break;
	    }
	    else
	    {
		// IF DOOR NEEDS TO ANIMATE TO NEXT FRAME...
		door->timer = SWAITTICS;
					
		sides[door->line->sidenum[0]].midtexture =
		    slideFrames[door->whichDoorIndex].
		    frontFrames[door->frame];
		sides[door->line->sidenum[1]].midtexture =
		    slideFrames[door->whichDoorIndex].
		    backFrames[door->frame];
	    }
	}
	break;
    }
}



void
EV_SlidingDoor
( line_t*	line,
  mobj_t*	thing )
{
    sector_t*		sec;
    slidedoor_t*	door;
	
    // DOOM II ONLY...
    if (gamemode != commercial)
	return;
    
    // Make sure door isn't already being animated
    sec = line->frontsector;
    door = NULL;
    if (sec->specialdata)
    {
	if (!thing->player)
	    return;
			
	door = sec->specialdata;
	if (door->type == sdt_openAndClose)
	{
	    if (door->status == sd_waiting)
		door->status = sd_closing;
	}
	else
	    return;
    }
    
    // Init sliding door vars
    if (!door)
    {
	door = Z_Malloc (sizeof(*door), PU_LEVSPEC, 0);
	P_AddThinker (&door->thinker);
	sec->specialdata = door;
		
	door->type = sdt_openAndClose;
	door->status = sd_opening;
	door->whichDoorIndex = P_FindSlidingDoorType(line);

	if (door->whichDoorIndex < 0)
	    I_Error("EV_SlidingDoor: Can't use texture for sliding door!");
			
	door->frontsector = sec;
	door->backsector = line->backsector;
	door->thinker.function = T_SlidingDoor;
	door->timer = SWAITTICS;
	door->frame = 0;
	door->line = line;
    }
}
#endif
```
