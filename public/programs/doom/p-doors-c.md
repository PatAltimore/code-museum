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
description: "This file contains the code responsible for handling door animations and mechanics in DOOM, showcasing techniques that pushed the limits of 1990s hardware."

summary:
  - point: "Introduces vertical and sliding door mechanics, a key part of DOOM's immersive level design."
    link: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Optimizes door animations for real-time gameplay on limited hardware."
    link: "https://en.wikipedia.org/wiki/Real-time_computing"
    link_label: "Real-time computing"
  - point: "Demonstrates modular programming with reusable door types and behaviors."
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular programming"

enhancements:
  - id: "sliding-door-frame-data"
    line_start: 42
    line_end: 51
    title: "Why Sliding Doors Were Abandoned"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines sliding door frame data, including texture names for front and back frames of sliding doors. Sliding doors were intended for DOOM II but were ultimately abandoned, as noted in the comments. The decision likely stemmed from technical constraints or time pressures during development. Sliding doors would have added complexity to the rendering engine, which was already optimized for vertical movement and limited texture animations. While the sliding door concept was shelved, the modular approach to defining door types and animations influenced later games, including Quake, where more advanced door mechanics were implemented."
  - id: "vertical-door-mechanics"
    line_start: 55
    line_end: 197
    title: "The Code Behind DOOM's Vertical Doors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_VerticalDoor` function handles the behavior of vertical doors, including their opening, closing, and waiting states. Each door type—such as `blazeRaise` or `close30ThenOpen`—is defined with unique properties, including speed and sound effects. This modular design allowed DOOM's levels to feature varied door behaviors without duplicating code. In 1993, hardware constraints meant developers had to carefully balance functionality with performance. John Carmack's focus on efficiency ensured that even complex mechanics like doors ran smoothly on consumer PCs. The vertical door system inspired similar mechanics in later games, such as Half-Life, which expanded on interactive environments."
  - id: "locked-door-checks"
    line_start: 200
    line_end: 259
    title: "How DOOM Checked for Keycards"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `EV_DoLockedDoor` function checks whether a player has the required keycard or skull to open a locked door. If the player lacks the necessary item, a message is displayed, and a sound effect (`sfx_oof`) is played to indicate failure. This mechanic added an element of progression and exploration to DOOM's levels, encouraging players to search for keys to advance. The use of keycards became a staple in first-person shooters, appearing in games like Duke Nukem 3D and System Shock. The implementation here is straightforward but effective, leveraging DOOM's modular design to integrate seamlessly with the game's other mechanics."
  - id: "door-spawning-in-30-seconds"
    line_start: 501
    line_end: 563
    title: "The Countdown to Closing Doors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_SpawnDoorCloseIn30` function spawns a door that automatically closes after 30 seconds. This mechanic added dynamic elements to DOOM's levels, creating time-sensitive challenges for players. The countdown is implemented using a `topcountdown` variable, which decrements every game tick. Such time-based mechanics were innovative for 1993, as they required precise synchronization with the game's real-time engine. The concept of timed events influenced later games, including Unreal Tournament, which used similar techniques for dynamic level interactions."
  - id: "sliding-door-initialization"
    line_start: 565
    line_end: 602
    title: "The Sliding Door Textures That Never Were"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_InitSlidingDoorFrames` function initializes texture data for sliding doors, mapping texture names to numerical IDs. This system was designed for DOOM II but ultimately abandoned, as noted in the comments. The function highlights the modular approach id Software took, allowing new mechanics to be added without disrupting existing systems. While sliding doors never appeared in DOOM II, the groundwork laid here influenced later games, such as Quake, which featured more advanced door animations and interactions."
  - id: "sliding-door-animation"
    line_start: 624
    line_end: 707
    title: "Animating Sliding Doors Frame by Frame"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `T_SlidingDoor` function animates sliding doors frame by frame, updating textures and handling transitions between opening, waiting, and closing states. This detailed animation system was ahead of its time, showcasing id Software's ambition to push the limits of level interactivity. However, sliding doors were ultimately abandoned for DOOM II, likely due to technical or time constraints. The frame-by-frame approach influenced later games, such as Quake and Unreal, which used similar techniques for animating complex objects in 3D environments."

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