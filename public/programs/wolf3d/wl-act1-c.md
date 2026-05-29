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
description: "This file contains the implementation of static objects, doors, and pushable walls in Wolfenstein 3D, showcasing innovative techniques for interactive environments in early FPS games."

summary:
  - point: "Static object management with compact data structures"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Door mechanics connecting areas dynamically"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Pushable walls as a secret mechanic"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Efficient use of memory for object and area tracking"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Dynamic area connectivity recalculated on-the-fly"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"

enhancements:
  - id: "statics-object-management"
    line_start: 116
    line_end: 127
    title: "How Static Objects Were Packed Into Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section defines the data structures and initialization routines for static objects in Wolfenstein 3D. The `statobjlist` array holds all static objects, while `statinfo` maps object types to their respective properties, such as sprite numbers and behaviors. Static objects include environmental decorations, pickups, and obstacles. The compact design reflects the constraints of early 1990s hardware, where memory was limited and every byte mattered. By using arrays and type mappings, the developers could efficiently manage hundreds of objects without excessive overhead. This approach influenced later games by demonstrating how to handle diverse objects in a unified system, paving the way for modern entity-component systems."
  - id: "init-static-list"
    line_start: 116
    line_end: 127
    title: "The Initialization That Prevented Crashes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `InitStaticList` function initializes the static object list by setting `laststatobj` to the beginning of the array. This simple yet crucial step ensures that the game starts with a clean slate for static objects. Without it, uninitialized pointers could lead to crashes or undefined behavior. In the early 1990s, such bugs were common due to the lack of modern debugging tools. This function exemplifies the meticulous attention to detail required to create stable software in an era of limited resources. The technique of initializing object lists became standard practice in game development, influencing countless titles that followed."
  - id: "spawn-static-object"
    line_start: 131
    line_end: 184
    title: "Spawning Objects That Blocked or Rewarded Players"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `SpawnStatic` function places static objects in the game world, assigning properties based on their type. Objects can block movement, provide bonuses, or serve as decorations. The function increments the treasure count for collectible items, ensuring accurate tracking of player progress. This routine highlights the game's interactive environment, where objects are not just visual elements but integral to gameplay. The concept of dynamic object spawning influenced later games, enabling developers to create rich, interactive worlds. It also showcases the balance between performance and functionality, as the routine avoids excessive computation while maintaining flexibility."
  - id: "door-mechanics"
    line_start: 283
    line_end: 305
    title: "Doors That Connected the Game World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section introduces the mechanics of doors in Wolfenstein 3D. Doors connect areas, allowing sound and sight to pass through when open. The `doorposition` array tracks the state of each door, ranging from fully closed to fully open. The limited number of doors (64) reflects the constraints of the tile-based system and the need to optimize memory usage. By dynamically recalculating area connectivity, the game creates a sense of immersion and realism. This technique influenced later games by demonstrating how to handle dynamic environments efficiently. It also laid the groundwork for more complex systems, such as pathfinding and AI navigation."
  - id: "recursive-area-connectivity"
    line_start: 283
    line_end: 305
    title: "Recursive Algorithm for Dynamic Area Connectivity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `RecursiveConnect` function scans outward from the player's current area, marking all connected areas. This recursive algorithm ensures that the game world remains dynamically connected, allowing for realistic sound propagation and AI behavior. The use of recursion reflects the developers' ingenuity in solving complex problems with simple techniques. In the early 1990s, recursion was a powerful tool for tasks like connectivity and pathfinding, despite the risks of stack overflow on limited hardware. This approach influenced later games by demonstrating the potential of dynamic systems to enhance immersion and gameplay."
  - id: "spawn-door"
    line_start: 342
    line_end: 388
    title: "Spawning Doors That Blocked and Opened Worlds"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `SpawnDoor` function creates doors in the game world, assigning properties such as position, orientation, and lock status. Doors start fully closed and are marked as solid walls in the `actorat` array. The function also updates adjacent tiles to indicate door sides, ensuring accurate collision detection. This routine exemplifies the game's tile-based architecture, where every element is carefully managed to optimize performance. The concept of dynamic door spawning influenced later games, enabling developers to create interactive environments with minimal overhead. It also highlights the balance between simplicity and functionality, a hallmark of id Software's design philosophy."
  - id: "pushable-walls"
    line_start: 275
    line_end: 290
    title: "The Secret Mechanic: Pushable Walls"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `PushWall` function implements one of Wolfenstein 3D's most iconic mechanics: pushable walls. Players can uncover hidden areas by pushing certain walls, adding an element of exploration and discovery. The function checks for obstacles before allowing a wall to move, ensuring that the mechanic integrates seamlessly with the game's collision system. Pushable walls were a novel feature at the time, showcasing the developers' creativity in enhancing gameplay. This mechanic influenced later games by introducing the concept of environmental puzzles, where players interact with the world to uncover secrets and progress."
  - id: "move-pushable-walls"
    line_start: 131
    line_end: 136
    title: "Animating Walls That Moved and Revealed Secrets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `MovePWalls` function animates pushable walls, gradually moving them to reveal hidden areas. The function updates the tilemap and `actorat` array to reflect the wall's new position, ensuring accurate collision detection. By using adaptive movement, the routine creates a smooth animation that enhances the player's experience. Pushable walls were a groundbreaking feature in 1992, demonstrating how simple mechanics could add depth to gameplay. This technique influenced later games by inspiring developers to create interactive environments that reward exploration and curiosity."

---

```cpp
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
```
