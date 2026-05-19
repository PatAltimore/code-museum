---
title: "WL_ACT1.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_ACT1.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_ACT1.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-act1-c"
order: 9
description: "The WL_ACT1.C file from Wolfenstein 3D reveals the mechanics behind static objects, doors, and pushable walls, showcasing the ingenuity of id Software in optimizing gameplay on limited hardware."

summary:
  - point: "Static object management using compact data structures"
    link: "https://en.wikipedia.org/wiki/Data_structure"
    link_label: "Data Structure"
  - point: "Efficient door mechanics for dynamic level interaction"
    link: "https://en.wikipedia.org/wiki/Door"
    link_label: "Door Mechanics"
  - point: "Pushable wall implementation for secret discovery"
    link: "https://en.wikipedia.org/wiki/Secret_(video_games)"
    link_label: "Secrets in Games"
  - point: "Recursive area connection algorithm for sound and visibility"
    link: "https://en.wikipedia.org/wiki/Recursion_(computer_science)"
    link_label: "Recursion"
  - point: "Optimized memory usage for MS-DOS constraints"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "static-object-management"
    line_start: 15
    line_end: 15
    title: "Static Object List: Compact and Efficient"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_structure"
    image_url: ""
    image_caption: ""
    content: "The `statobjlist` array is a compact data structure that holds all static objects in the game. Each object is represented by a `statobj_t` structure, which includes properties like position, shape, and visibility. At the time, memory was a precious resource, especially on MS-DOS systems with limited RAM. By using a fixed-size array, id Software ensured predictable memory usage and avoided dynamic allocation overhead. This decision reflects the team's deep understanding of hardware constraints and their ability to optimize gameplay mechanics within those limits. Static objects like barrels, tables, and treasure items were integral to Wolfenstein 3D's immersive environments, and this system allowed them to be efficiently managed and rendered."
  - id: "static-object-types"
    line_start: 18
    line_end: 122
    title: "Static Object Types: A Treasure Trove of Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Secret_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `statinfo` array defines the types of static objects in the game, including their sprite numbers and behaviors. Each entry corresponds to a specific object, such as a chandelier, food item, or treasure. This table-driven design allowed the developers to easily add or modify objects without altering the core logic. In 1992, this approach was both practical and innovative, enabling rapid iteration during development. The inclusion of special objects like keys and weapons highlights the game's emphasis on exploration and reward. By organizing this data in a single array, id Software streamlined the process of integrating diverse gameplay elements, contributing to Wolfenstein 3D's rich and varied levels."
  - id: "init-static-list"
    line_start: 124
    line_end: 137
    title: "Initializing Static Objects: A Clean Slate"
    wikipedia_url: "https://en.wikipedia.org/wiki/Initialization_(programming)"
    image_url: ""
    image_caption: ""
    content: "The `InitStaticList` function resets the static object list at the start of each level. By setting `laststatobj` to the beginning of the `statobjlist` array, the game ensures that all static objects are cleared and ready for new data. This simple yet effective initialization routine reflects the team's focus on reliability and performance. In the early 1990s, game developers often faced challenges with memory management and data corruption. By implementing a predictable reset mechanism, id Software minimized bugs and ensured smooth gameplay transitions between levels. This function exemplifies the team's meticulous attention to detail in crafting a robust game engine."
  - id: "spawn-static-object"
    line_start: 139
    line_end: 197
    title: "Spawning Static Objects: Building the World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_development"
    image_url: ""
    image_caption: ""
    content: "The `SpawnStatic` function places static objects in the game world based on their type and position. It assigns properties like sprite number, tile coordinates, and visibility spot, and handles special cases such as blocking tiles and bonus items. This function is a cornerstone of Wolfenstein 3D's level design, enabling the creation of interactive environments filled with obstacles, rewards, and decorations. In 1992, the concept of dynamically spawning objects was cutting-edge, allowing developers to craft intricate levels without hardcoding every detail. The function's ability to increment treasure totals and handle game state changes demonstrates id Software's commitment to integrating gameplay mechanics seamlessly into the engine."
  - id: "door-mechanics"
    line_start: 251
    line_end: 252
    title: "Door Mechanics: Connecting the World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Door"
    image_url: ""
    image_caption: ""
    content: "The `doorposition` array tracks the state of each door in the game, ranging from fully closed (0) to fully open (0xffff). This design allowed doors to be smoothly animated and dynamically interacted with during gameplay. Doors were a revolutionary feature in Wolfenstein 3D, enabling more complex level layouts and enhancing immersion. By using a fixed-size array, id Software ensured efficient memory usage while maintaining the flexibility to handle up to 64 doors per level. This system laid the groundwork for future games, where dynamic environments and interactive elements became standard."
  - id: "recursive-area-connection"
    line_start: 293
    line_end: 305
    title: "Recursive Area Connection: Sound and Sight"
    wikipedia_url: "https://en.wikipedia.org/wiki/Recursion_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `RecursiveConnect` function uses recursion to determine which areas of the map are connected to the player's current location. This algorithm ensures that sounds and visibility checks are only performed for relevant areas, optimizing performance on limited hardware. In the early 1990s, recursion was a powerful tool for solving complex problems with elegant code. The function's ability to dynamically update connections based on door states reflects id Software's innovative approach to gameplay mechanics. This system added depth to Wolfenstein 3D, making the game world feel alive and responsive to player actions."
  - id: "pushable-walls"
    line_start: 722
    line_end: 730
    title: "Pushable Walls: Secrets Await"
    wikipedia_url: "https://en.wikipedia.org/wiki/Secret_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `PushWall` function enables players to discover hidden areas by pushing certain walls. This mechanic added an element of mystery and reward to Wolfenstein 3D, encouraging exploration and experimentation. The function checks for obstacles and updates the game state to reflect the wall's new position. Pushable walls were a novel feature in 1992, showcasing id Software's creativity in designing interactive environments. This mechanic became a hallmark of the game's level design, inspiring similar features in countless titles that followed."
  - id: "move-pushable-walls"
    line_start: 809
    line_end: 899
    title: "Moving Pushable Walls: Dynamic Secrets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_mechanics"
    image_url: ""
    image_caption: ""
    content: "The `MovePWalls` function handles the animation and progression of pushable walls as they move across tiles. It ensures that walls are properly updated in the game's data structures, allowing players to interact with them seamlessly. This feature added a dynamic element to Wolfenstein 3D's levels, making secret discovery more engaging. The function's adaptive movement logic reflects id Software's commitment to creating a polished and immersive experience. By integrating this mechanic into the game engine, the team set a precedent for interactive environments in first-person shooters."

---

// WL_ACT1.C

#include "WL_DEF.H"
#pragma hdrstop

/*
=============================================================================

							STATICS

=============================================================================
*/


statobj_t	statobjlist[MAXSTATS],*laststatobj;


struct
{
	int		picnum;
	stat_t	type;
} statinfo[] =
{
{SPR_STAT_0},					// puddle          spr1v
{SPR_STAT_1,block},				// Green Barrel    "
{SPR_STAT_2,block},				// Table/chairs    "
{SPR_STAT_3,block},				// Floor lamp      "
{SPR_STAT_4},					// Chandelier      "
{SPR_STAT_5,block},				// Hanged man      "
{SPR_STAT_6,bo_alpo},			// Bad food        "
{SPR_STAT_7,block},				// Red pillar      "
//
// NEW PAGE
//
{SPR_STAT_8,block},				// Tree            spr2v
{SPR_STAT_9},					// Skeleton flat   "
{SPR_STAT_10,block},			// Sink            " (SOD:gibs)
{SPR_STAT_11,block},			// Potted plant    "
{SPR_STAT_12,block},			// Urn             "
{SPR_STAT_13,block},			// Bare table      "
{SPR_STAT_14},					// Ceiling light   "
#ifndef SPEAR
{SPR_STAT_15},					// Kitchen stuff   "
#else
{SPR_STAT_15,block},			// Gibs!
#endif
//
// NEW PAGE
//
{SPR_STAT_16,block},			// suit of armor   spr3v
{SPR_STAT_17,block},			// Hanging cage    "
{SPR_STAT_18,block},			// SkeletoninCage  "
{SPR_STAT_19},					// Skeleton relax  "
{SPR_STAT_20,bo_key1},			// Key 1           "
{SPR_STAT_21,bo_key2},			// Key 2           "
{SPR_STAT_22,block},			// stuff				(SOD:gibs)
{SPR_STAT_23},					// stuff
//
// NEW PAGE
//
{SPR_STAT_24,bo_food}, 			// Good food       spr4v
{SPR_STAT_25,bo_firstaid},		// First aid       "
{SPR_STAT_26,bo_clip},			// Clip            "
{SPR_STAT_27,bo_machinegun},	// Machine gun     "
{SPR_STAT_28,bo_chaingun},		// Gatling gun     "
{SPR_STAT_29,bo_cross},			// Cross           "
{SPR_STAT_30,bo_chalice},		// Chalice         "
{SPR_STAT_31,bo_bible},			// Bible           "
//
// NEW PAGE
//
{SPR_STAT_32,bo_crown},			// crown           spr5v
{SPR_STAT_33,bo_fullheal},		// one up          "
{SPR_STAT_34,bo_gibs},			// gibs            "
{SPR_STAT_35,block},			// barrel          "
{SPR_STAT_36,block},			// well            "
{SPR_STAT_37,block},			// Empty well      "
{SPR_STAT_38,bo_gibs},			// Gibs 2          "
{SPR_STAT_39,block},			// flag				"
//
// NEW PAGE
//
#ifndef SPEAR
{SPR_STAT_40,block},			// Call Apogee		spr7v
#else
{SPR_STAT_40},					// Red light
#endif
//
// NEW PAGE
//
{SPR_STAT_41},					// junk            "
{SPR_STAT_42},					// junk 		   "
{SPR_STAT_43},					// junk            "
#ifndef SPEAR
{SPR_STAT_44},					// pots            "
#else
{SPR_STAT_44,block},			// Gibs!
#endif
{SPR_STAT_45,block},			// stove           " (SOD:gibs)
{SPR_STAT_46,block},			// spears          " (SOD:gibs)
{SPR_STAT_47},					// vines			"
//
// NEW PAGE
//
#ifdef SPEAR
{SPR_STAT_48,block},			// marble pillar
{SPR_STAT_49,bo_25clip},		// bonus 25 clip
{SPR_STAT_50,block},			// truck
{SPR_STAT_51,bo_spear},			// SPEAR OF DESTINY!
#endif

{SPR_STAT_26,bo_clip2},			// Clip            "
{-1}							// terminator
};

/*
===============
=
= InitStaticList
=
===============
*/

void InitStaticList (void)
{
	laststatobj = &statobjlist[0];
}



/*
===============
=
= SpawnStatic
=
===============
*/

void SpawnStatic (int tilex, int tiley, int type)
{
	laststatobj->shapenum = statinfo[type].picnum;
	laststatobj->tilex = tilex;
	laststatobj->tiley = tiley;
	laststatobj->visspot = &spotvis[tilex][tiley];

	switch (statinfo[type].type)
	{
	case block:
		(unsigned)actorat[tilex][tiley] = 1;		// consider it a blocking tile
	case dressing:
		laststatobj->flags = 0;
		break;

	case	bo_cross:
	case	bo_chalice:
	case	bo_bible:
	case	bo_crown:
	case	bo_fullheal:
		if (!loadedgame)
		  gamestate.treasuretotal++;

	case	bo_firstaid:
	case	bo_key1:
	case	bo_key2:
	case	bo_key3:
	case	bo_key4:
	case	bo_clip:
	case	bo_25clip:
	case	bo_machinegun:
	case	bo_chaingun:
	case	bo_food:
	case	bo_alpo:
	case	bo_gibs:
	case	bo_spear:
		laststatobj->flags = FL_BONUS;
		laststatobj->itemnumber = statinfo[type].type;
		break;
	}

	laststatobj++;

	if (laststatobj == &statobjlist[MAXSTATS])
		Quit ("Too many static objects!\n");
}


/*
===============
=
= PlaceItemType
=
= Called during game play to drop actors' items.  It finds the proper
= item number based on the item type (bo_???).  If there are no free item
= spots, nothing is done.
=
===============
*/

void PlaceItemType (int itemtype, int tilex, int tiley)
{
	int			type;
	statobj_t	*spot;

//
// find the item number
//
	for (type=0 ;  ; type++)
	{
		if (statinfo[type].picnum == -1)		// end of list
			Quit ("PlaceItemType: couldn't find type!");
		if (statinfo[type].type == itemtype)
			break;
	}

//
// find a spot in statobjlist to put it in
//
	for (spot=&statobjlist[0] ; ; spot++)
	{
		if (spot==laststatobj)
		{
			if (spot == &statobjlist[MAXSTATS])
				return;							// no free spots
			laststatobj++;						// space at end
			break;
		}

		if (spot->shapenum == -1)				// -1 is a free spot
			break;
	}
//
// place it
//
	spot->shapenum = statinfo[type].picnum;
	spot->tilex = tilex;
	spot->tiley = tiley;
	spot->visspot = &spotvis[tilex][tiley];
	spot->flags = FL_BONUS;
	spot->itemnumber = statinfo[type].type;
}



/*
=============================================================================

							DOORS

doorobjlist[] holds most of the information for the doors

doorposition[] holds the amount the door is open, ranging from 0 to 0xffff
	this is directly accessed by AsmRefresh during rendering

The number of doors is limited to 64 because a spot in tilemap holds the
	door number in the low 6 bits, with the high bit meaning a door center
	and bit 6 meaning a door side tile

Open doors conect two areas, so sounds will travel between them and sight
	will be checked when the player is in a connected area.

Areaconnect is incremented/decremented by each door. If >0 they connect

Every time a door opens or closes the areabyplayer matrix gets recalculated.
	An area is true if it connects with the player's current spor.

=============================================================================
*/

#define DOORWIDTH	0x7800
#define OPENTICS	300

doorobj_t	doorobjlist[MAXDOORS],*lastdoorobj;
int			doornum;

unsigned	doorposition[MAXDOORS];		// leading edge of door 0=closed
										// 0xffff = fully open

byte		far areaconnect[NUMAREAS][NUMAREAS];

boolean		areabyplayer[NUMAREAS];


/*
==============
=
= ConnectAreas
=
= Scans outward from playerarea, marking all connected areas
=
==============
*/

void RecursiveConnect (int areanumber)
{
	int	i;

	for (i=0;i<NUMAREAS;i++)
	{
		if (areaconnect[areanumber][i] && !areabyplayer[i])
		{
			areabyplayer[i] = true;
			RecursiveConnect (i);
		}
	}
}


void ConnectAreas (void)
{
	memset (areabyplayer,0,sizeof(areabyplayer));
	areabyplayer[player->areanumber] = true;
	RecursiveConnect (player->areanumber);
}


void InitAreas (void)
{
	memset (areabyplayer,0,sizeof(areabyplayer));
	areabyplayer[player->areanumber] = true;
}



/*
===============
=
= InitDoorList
=
===============
*/

void InitDoorList (void)
{
	memset (areabyplayer,0,sizeof(areabyplayer));
	_fmemset (areaconnect,0,sizeof(areaconnect));

	lastdoorobj = &doorobjlist[0];
	doornum = 0;
}


/*
===============
=
= SpawnDoor
=
===============
*/

void SpawnDoor (int tilex, int tiley, boolean vertical, int lock)
{
	int	areanumber;
	unsigned	far *map;

	if (doornum==64)
		Quit ("64+ doors on level!");

	doorposition[doornum] = 0;		// doors start out fully closed
	lastdoorobj->tilex = tilex;
	lastdoorobj->tiley = tiley;
	lastdoorobj->vertical = vertical;
	lastdoorobj->lock = lock;
	lastdoorobj->action = dr_closed;

	(unsigned)actorat[tilex][tiley] = doornum | 0x80;	// consider it a solid wall

//
// make the door tile a special tile, and mark the adjacent tiles
// for door sides
//
	tilemap[tilex][tiley] = doornum | 0x80;
	map = mapsegs[0] + farmapylookup[tiley]+tilex;
	if (vertical)
	{
		*map = *(map-1);                        // set area number
		tilemap[tilex][tiley-1] |= 0x40;
		tilemap[tilex][tiley+1] |= 0x40;
	}
	else
	{
		*map = *(map-mapwidth);					// set area number
		tilemap[tilex-1][tiley] |= 0x40;
		tilemap[tilex+1][tiley] |= 0x40;
	}

	doornum++;
	lastdoorobj++;
}

//===========================================================================

/*
=====================
=
= OpenDoor
=
=====================
*/

void OpenDoor (int door)
{
	if (doorobjlist[door].action == dr_open)
		doorobjlist[door].ticcount = 0;			// reset open time
	else
		doorobjlist[door].action = dr_opening;	// start it opening
}


/*
=====================
=
= CloseDoor
=
=====================
*/

void CloseDoor (int door)
{
	int	tilex,tiley,area;
	objtype *check;

//
// don't close on anything solid
//
	tilex = doorobjlist[door].tilex;
	tiley = doorobjlist[door].tiley;

	if (actorat[tilex][tiley])
		return;

	if (player->tilex == tilex && player->tiley == tiley)
		return;

	if (doorobjlist[door].vertical)
	{
		if ( player->tiley == tiley )
		{
			if ( ((player->x+MINDIST) >>TILESHIFT) == tilex )
				return;
			if ( ((player->x-MINDIST) >>TILESHIFT) == tilex )
				return;
		}
		check = actorat[tilex-1][tiley];
		if (check && ((check->x+MINDIST) >> TILESHIFT) == tilex )
			return;
		check = actorat[tilex+1][tiley];
		if (check && ((check->x-MINDIST) >> TILESHIFT) == tilex )
			return;
	}
	else if (!doorobjlist[door].vertical)
	{
		if (player->tilex == tilex)
		{
			if ( ((player->y+MINDIST) >>TILESHIFT) == tiley )
				return;
			if ( ((player->y-MINDIST) >>TILESHIFT) == tiley )
				return;
		}
		check = actorat[tilex][tiley-1];
		if (check && ((check->y+MINDIST) >> TILESHIFT) == tiley )
			return;
		check = actorat[tilex][tiley+1];
		if (check && ((check->y-MINDIST) >> TILESHIFT) == tiley )
			return;
	}


//
// play door sound if in a connected area
//
	area = *(mapsegs[0] + farmapylookup[doorobjlist[door].tiley]
			+doorobjlist[door].tilex)-AREATILE;
	if (areabyplayer[area])
	{
		PlaySoundLocTile(CLOSEDOORSND,doorobjlist[door].tilex,doorobjlist[door].tiley);	// JAB
	}

	doorobjlist[door].action = dr_closing;
//
// make the door space solid
//
	(unsigned)actorat[tilex][tiley]
		= door | 0x80;
}



/*
=====================
=
= OperateDoor
=
= The player wants to change the door's direction
=
=====================
*/

void OperateDoor (int door)
{
	int	lock;

	lock = doorobjlist[door].lock;
	if (lock >= dr_lock1 && lock <= dr_lock4)
	{
		if ( ! (gamestate.keys & (1 << (lock-dr_lock1) ) ) )
		{
			SD_PlaySound (NOWAYSND);		// locked
			return;
		}
	}

	switch (doorobjlist[door].action)
	{
	case dr_closed:
	case dr_closing:
		OpenDoor (door);
		break;
	case dr_open:
	case dr_opening:
		CloseDoor (door);
		break;
	}
}


//===========================================================================

/*
===============
=
= DoorOpen
=
= Close the door after three seconds
=
===============
*/

void DoorOpen (int door)
{
	if ( (doorobjlist[door].ticcount += tics) >= OPENTICS)
		CloseDoor (door);
}



/*
===============
=
= DoorOpening
=
===============
*/

void DoorOpening (int door)
{
	int		area1,area2;
	unsigned	far	*map;
	long	position;

	position = doorposition[door];
	if (!position)
	{
	//
	// door is just starting to open, so connect the areas
	//
		map = mapsegs[0] + farmapylookup[doorobjlist[door].tiley]
			+doorobjlist[door].tilex;

		if (doorobjlist[door].vertical)
		{
			area1 =	*(map+1);
			area2 =	*(map-1);
		}
		else
		{
			area1 =	*(map-mapwidth);
			area2 =	*(map+mapwidth);
		}
		area1 -= AREATILE;
		area2 -= AREATILE;
		areaconnect[area1][area2]++;
		areaconnect[area2][area1]++;
		ConnectAreas ();
		if (areabyplayer[area1])
		{
			PlaySoundLocTile(OPENDOORSND,doorobjlist[door].tilex,doorobjlist[door].tiley);	// JAB
		}
	}

//
// slide the door by an adaptive amount
//
	position += tics<<10;
	if (position >= 0xffff)
	{
	//
	// door is all the way open
	//
		position = 0xffff;
		doorobjlist[door].ticcount = 0;
		doorobjlist[door].action = dr_open;
		actorat[doorobjlist[door].tilex][doorobjlist[door].tiley] = 0;
	}

	doorposition[door] = position;
}


/*
===============
=
= DoorClosing
=
===============
*/

void DoorClosing (int door)
{
	int		area1,area2,move;
	unsigned	far	*map;
	long	position;
	int		tilex,tiley;

	tilex = doorobjlist[door].tilex;
	tiley = doorobjlist[door].tiley;

	if ( ((unsigned)actorat[tilex][tiley] != (door | 0x80))
	|| (player->tilex == tilex && player->tiley == tiley) )
	{			// something got inside the door
		OpenDoor (door);
		return;
	};

	position = doorposition[door];

//
// slide the door by an adaptive amount
//
	position -= tics<<10;
	if (position <= 0)
	{
	//
	// door is closed all the way, so disconnect the areas
	//
		position = 0;

		doorobjlist[door].action = dr_closed;

		map = mapsegs[0] + farmapylookup[doorobjlist[door].tiley]
			+doorobjlist[door].tilex;

		if (doorobjlist[door].vertical)
		{
			area1 =	*(map+1);
			area2 =	*(map-1);
		}
		else
		{
			area1 =	*(map-mapwidth);
			area2 =	*(map+mapwidth);
		}
		area1 -= AREATILE;
		area2 -= AREATILE;
		areaconnect[area1][area2]--;
		areaconnect[area2][area1]--;

		ConnectAreas ();
	}

	doorposition[door] = position;
}




/*
=====================
=
= MoveDoors
=
= Called from PlayLoop
=
=====================
*/

void MoveDoors (void)
{
	int		door;

	if (gamestate.victoryflag)		// don't move door during victory sequence
		return;

	for (door = 0 ; door < doornum ; door++)
		switch (doorobjlist[door].action)
		{
		case dr_open:
			DoorOpen (door);
			break;

		case dr_opening:
			DoorOpening(door);
			break;

		case dr_closing:
			DoorClosing(door);
			break;
		}
}


/*
=============================================================================

						PUSHABLE WALLS

=============================================================================
*/

unsigned	pwallstate;
unsigned	pwallpos;			// amount a pushable wall has been moved (0-63)
unsigned	pwallx,pwally;
int			pwalldir;

/*
===============
=
= PushWall
=
===============
*/

void PushWall (int checkx, int checky, int dir)
{
	int		oldtile;

	if (pwallstate)
	  return;


	oldtile = tilemap[checkx][checky];
	if (!oldtile)
		return;

	switch (dir)
	{
	case di_north:
		if (actorat[checkx][checky-1])
		{
			SD_PlaySound (NOWAYSND);
			return;
		}
		(unsigned)actorat[checkx][checky-1] =
		tilemap[checkx][checky-1] = oldtile;
		break;

	case di_east:
		if (actorat[checkx+1][checky])
		{
			SD_PlaySound (NOWAYSND);
			return;
		}
		(unsigned)actorat[checkx+1][checky] =
		tilemap[checkx+1][checky] = oldtile;
		break;

	case di_south:
		if (actorat[checkx][checky+1])
		{
			SD_PlaySound (NOWAYSND);
			return;
		}
		(unsigned)actorat[checkx][checky+1] =
		tilemap[checkx][checky+1] = oldtile;
		break;

	case di_west:
		if (actorat[checkx-1][checky])
		{
			SD_PlaySound (NOWAYSND);
			return;
		}
		(unsigned)actorat[checkx-1][checky] =
		tilemap[checkx-1][checky] = oldtile;
		break;
	}

	gamestate.secretcount++;
	pwallx = checkx;
	pwally = checky;
	pwalldir = dir;
	pwallstate = 1;
	pwallpos = 0;
	tilemap[pwallx][pwally] |= 0xc0;
	*(mapsegs[1]+farmapylookup[pwally]+pwallx) = 0;	// remove P tile info

	SD_PlaySound (PUSHWALLSND);
}



/*
=================
=
= MovePWalls
=
=================
*/

void MovePWalls (void)
{
	int		oldblock,oldtile;

	if (!pwallstate)
		return;

	oldblock = pwallstate/128;

	pwallstate += tics;

	if (pwallstate/128 != oldblock)
	{
	// block crossed into a new block
		oldtile = tilemap[pwallx][pwally] & 63;

		//
		// the tile can now be walked into
		//
		tilemap[pwallx][pwally] = 0;
		(unsigned)actorat[pwallx][pwally] = 0;
		*(mapsegs[0]+farmapylookup[pwally]+pwallx) = player->areanumber+AREATILE;

		//
		// see if it should be pushed farther
		//
		if (pwallstate>256)
		{
		//
		// the block has been pushed two tiles
		//
			pwallstate = 0;
			return;
		}
		else
		{
			switch (pwalldir)
			{
			case di_north:
				pwally--;
				if (actorat[pwallx][pwally-1])
				{
					pwallstate = 0;
					return;
				}
				(unsigned)actorat[pwallx][pwally-1] =
				tilemap[pwallx][pwally-1] = oldtile;
				break;

			case di_east:
				pwallx++;
				if (actorat[pwallx+1][pwally])
				{
					pwallstate = 0;
					return;
				}
				(unsigned)actorat[pwallx+1][pwally] =
				tilemap[pwallx+1][pwally] = oldtile;
				break;

			case di_south:
				pwally++;
				if (actorat[pwallx][pwally+1])
				{
					pwallstate = 0;
					return;
				}
				(unsigned)actorat[pwallx][pwally+1] =
				tilemap[pwallx][pwally+1] = oldtile;
				break;

			case di_west:
				pwallx--;
				if (actorat[pwallx-1][pwally])
				{
					pwallstate = 0;
					return;
				}
				(unsigned)actorat[pwallx-1][pwally] =
				tilemap[pwallx-1][pwally] = oldtile;
				break;
			}

			tilemap[pwallx][pwally] = oldtile | 0xc0;
		}
	}


	pwallpos = (pwallstate/2)&63;

}
