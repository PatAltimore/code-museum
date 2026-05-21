---
title: "WL_STATE.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_STATE.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_STATE.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-state-c"
order: 16
description: "This file contains the state management and movement logic for actors in Wolfenstein 3D, showcasing techniques that shaped the first-person shooter genre."

summary:
  - point: "Innovative use of tile-based movement for AI"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Randomized direction selection for dodging"
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    link_label: "AI in games"
  - point: "Actor spawning and state transitions"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game engine"
  - point: "Efficient collision detection in tile-based maps"
    link: "https://en.wikipedia.org/wiki/Collision_detection"
    link_label: "Collision detection"
  - point: "Dynamic response to player actions"
    link: "https://en.wikipedia.org/wiki/Video_game_AI"
    link_label: "Video game AI"

enhancements:
  - id: "opposite-direction-table"
    line_start: 24
    line_end: 25
    title: "The Table That Knows Opposite Directions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Array_data_structure"
    image_url: ""
    image_caption: ""
    content: "This small table defines the opposite direction for each of the eight cardinal and diagonal directions used in the game. By precomputing these relationships, the code avoids recalculating them dynamically, saving precious CPU cycles on the limited hardware of 1992. At the time, MS-DOS systems often ran on processors like the Intel 386, which lacked the speed and memory of modern machines. This approach reflects the era's emphasis on efficiency and simplicity. The concept of precomputing values in lookup tables became a staple in game development, influencing later engines like DOOM and Quake, where similar techniques were used for lighting and texture calculations."
  - id: "diagonal-direction-table"
    line_start: 27
    line_end: 38
    title: "Diagonal Movement Made Predictable"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tile-based_video_game"
    image_url: ""
    image_caption: ""
    content: "This two-dimensional array maps combinations of cardinal directions to their diagonal equivalents. For example, moving north and east simultaneously results in northeast. This table ensures consistent behavior for diagonal movement, a crucial feature in Wolfenstein 3D's tile-based world. The design reflects the constraints of the time, where computational efficiency was paramount. Similar techniques were later adapted in pathfinding algorithms like A* and in games with grid-based movement, such as Civilization and Fire Emblem."
  - id: "spawn-new-actor"
    line_start: 68
    line_end: 111
    title: "How Wolfenstein Spawns New Enemies"
    wikipedia_url: "https://en.wikipedia.org/wiki/Spawn_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `SpawnNewObj` function initializes a new actor in the game world, setting its position, state, and other properties. It uses a combination of tile-based coordinates and global units to ensure precise placement. The function also assigns a random tic count to the actor's state, introducing variability to enemy behavior. This approach highlights the game's reliance on deterministic yet dynamic systems to create engaging gameplay. The spawning mechanism influenced later games like DOOM, where enemies could appear dynamically based on player actions."
  - id: "try-walk-movement-check"
    line_start: 181
    line_end: 332
    title: "The AI's Struggle to Walk Forward"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `TryWalk` function determines whether an actor can move in its current direction without hitting a wall, another actor, or a closed door. It uses macros like `CHECKDIAG` and `CHECKSIDE` to evaluate potential collisions efficiently. If a door blocks the way, the function initiates its opening. This logic showcases the game's tile-based collision system, which was groundbreaking for its time. The ability to handle dynamic obstacles influenced the design of later AI systems in games like Half-Life, where NPCs navigated complex environments."
  - id: "select-dodge-direction"
    line_start: 336
    line_end: 462
    title: "Dodging Bullets: AI Picks a Path"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "The `SelectDodgeDir` function allows enemies to choose a movement direction that avoids the player's attacks while still advancing toward them. It prioritizes cardinal and diagonal directions based on proximity to the player, randomizing choices to make behavior less predictable. This technique reflects early attempts at creating dynamic and reactive AI in games. The randomness added a layer of unpredictability, making encounters more engaging. This approach influenced later games like Unreal Tournament, where AI bots exhibited similar dodging behaviors."
  - id: "select-chase-direction"
    line_start: 465
    line_end: 583
    title: "Chasing the Player: AI's Single-Minded Pursuit"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pathfinding"
    image_url: ""
    image_caption: ""
    content: "The `SelectChaseDir` function directs enemies to pursue the player without attempting to dodge. It calculates the optimal path based on the player's position and adjusts direction accordingly. If the direct path is blocked, the function tries alternative directions, ensuring relentless pursuit. This straightforward chasing logic was a precursor to more advanced pathfinding algorithms like A*, which became standard in later games. The relentless AI in Wolfenstein 3D set the stage for the intense enemy behaviors seen in DOOM and Quake."
  - id: "move-object"
    line_start: 644
    line_end: 776
    title: "Moving Objects Without Breaking the Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `MoveObj` function moves an actor in its current direction by a specified distance. It ensures that actors do not overlap with the player, backing them up if necessary. This safeguard prevents gameplay-breaking collisions and maintains the integrity of the tile-based world. The function's design reflects the era's focus on stability and predictability in game mechanics. Similar movement systems were later refined in games like Diablo, where collision handling was critical to gameplay."
  - id: "kill-actor"
    line_start: 807
    line_end: 947
    title: "The Code That Makes Enemies Die"
    wikipedia_url: "https://en.wikipedia.org/wiki/Death_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `KillActor` function handles the death of an enemy, updating its state and dropping items based on its type. It also increments the player's kill count and awards points. The function's detailed handling of different enemy types adds variety to the game, rewarding players for defeating tougher foes. This approach influenced later games like DOOM, where enemy deaths were accompanied by dramatic animations and item drops, enhancing the player's sense of accomplishment."
  - id: "damage-actor"
    line_start: 951
    line_end: 1024
    title: "When Enemies Take Damage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hit_points"
    image_url: ""
    image_caption: ""
    content: "The `DamageActor` function applies damage to an enemy, potentially killing it or putting it into a stun state. It doubles damage if the enemy is not in attack mode, encouraging players to strike preemptively. This mechanic adds depth to combat, rewarding strategic play. The function's design reflects the game's emphasis on fast-paced, tactical encounters. Similar damage systems became standard in FPS games, influencing titles like Half-Life and Call of Duty."
  - id: "check-line-visibility-algorithm"
    line_start: 1027
    line_end: 1167
    title: "The Algorithm That Checks Line of Sight"
    wikipedia_url: "https://en.wikipedia.org/wiki/Line_of_sight"
    image_url: ""
    image_caption: ""
    content: "This function, `CheckLine`, determines whether a straight line between an object and the player is unobstructed by walls or closed doors. It uses tile-based precision (1/256th of a tile) to trace the path, checking for blocking tiles and door positions. The algorithm calculates distances, steps, and fractional increments to simulate a raycasting-like approach for visibility checks. In 1992, hardware constraints were severe, especially on MS-DOS systems with limited memory and processing power. Wolfenstein 3D's developers, led by John Carmack, needed a fast and efficient method to determine visibility in a tile-based map. This function reflects Carmack's mastery of optimization, leveraging integer math and bitwise operations to minimize computational overhead. The approach influenced later games, particularly those using raycasting or similar visibility algorithms. It laid groundwork for more advanced AI systems in first-person shooters, such as those seen in Doom and Quake. Developers studying this method learned how to balance precision and performance, a lesson that resonated in modern game engines like Unity and Unreal Engine."
  - id: "check-sight-ai-awareness"
    line_start: 1171
    line_end: 1238
    title: "How Enemies Decide If They See You"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "The `CheckSight` function determines whether an enemy can see the player based on proximity, direction, and line-of-sight checks. It first ensures the player and enemy are in connected areas, then checks if the player is close enough for automatic detection. If not, it considers the enemy's facing direction and calls `CheckLine` to verify visibility. This routine showcases Wolfenstein 3D's AI design, which was groundbreaking for its time. It introduced a basic yet effective model of awareness, combining spatial reasoning with directional checks. The simplicity of this approach reflects the constraints of early 1990s hardware, where CPU cycles were precious, and developers had to prioritize gameplay responsiveness over complex calculations. The concept of directional awareness influenced stealth mechanics in later games, such as Thief and Metal Gear Solid. It also inspired more sophisticated AI routines in first-person shooters, where enemies react dynamically to player actions. The function's reliance on tile-based maps and integer math remains a study in efficient game design, influencing AI development in modern engines."
  - id: "first-sighting-reaction-mechanism"
    line_start: 1242
    line_end: 1386
    title: "The Reaction That Starts the Chase"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "The `FirstSighting` function transitions an enemy into attack mode upon detecting the player. It adjusts the enemy's speed based on its type and plays a sound effect to signal the change. For certain enemies, it also reverses direction if the player is behind them, ensuring a realistic reaction. This mechanic highlights the game's emphasis on immersive AI behavior. By tailoring reactions to enemy types, id Software created a varied and engaging experience. The function also demonstrates the team's attention to detail, with sound effects and animations enhancing the player's sense of danger. The idea of dynamic enemy reactions influenced later games, such as Doom and Half-Life, where AI behaviors became more nuanced. The use of sound cues and speed adjustments remains a staple in modern game design, contributing to the realism and tension of encounters. This function exemplifies how Wolfenstein 3D balanced simplicity with depth, setting a standard for AI-driven gameplay."
  - id: "sight-player-detection-and-delay"
    line_start: 1390
    line_end: 1478
    title: "How Enemies Detect and React to You"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stealth_game"
    image_url: ""
    image_caption: ""
    content: "The `SightPlayer` function is called by enemies not already chasing the player. It checks for player detection based on noise, proximity, or visibility. If detected, the enemy enters combat mode after a randomized reaction delay. This delay varies by enemy type, adding unpredictability to encounters. This function reflects the game's innovative AI design, where detection isn't instantaneous but incorporates a sense of reaction time. The randomness adds realism, making enemies feel less robotic and more lifelike. The inclusion of ambush mechanics, where enemies remain hidden until sighting the player, further enhances the tension. Wolfenstein 3D's approach to detection and reaction influenced stealth mechanics in later games, such as Splinter Cell and Dishonored. The idea of reaction delays and ambush flags became standard in AI design, contributing to immersive gameplay. This function showcases id Software's ability to create engaging systems within the constraints of early 1990s hardware, a legacy that continues to inspire developers today."

---

```cpp
// WL_STATE.C

#include "WL_DEF.H"
#pragma hdrstop

/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/


/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/


dirtype opposite[9] =
	{west,southwest,south,southeast,east,northeast,north,northwest,nodir};

dirtype diagonal[9][9] =
{
/* east */	{nodir,nodir,northeast,nodir,nodir,nodir,southeast,nodir,nodir},
			{nodir,nodir,nodir,nodir,nodir,nodir,nodir,nodir,nodir},
/* north */ {northeast,nodir,nodir,nodir,northwest,nodir,nodir,nodir,nodir},
			{nodir,nodir,nodir,nodir,nodir,nodir,nodir,nodir,nodir},
/* west */  {nodir,nodir,northwest,nodir,nodir,nodir,southwest,nodir,nodir},
			{nodir,nodir,nodir,nodir,nodir,nodir,nodir,nodir,nodir},
/* south */ {southeast,nodir,nodir,nodir,southwest,nodir,nodir,nodir,nodir},
			{nodir,nodir,nodir,nodir,nodir,nodir,nodir,nodir,nodir},
			{nodir,nodir,nodir,nodir,nodir,nodir,nodir,nodir,nodir}
};



void	SpawnNewObj (unsigned tilex, unsigned tiley, statetype *state);
void	NewState (objtype *ob, statetype *state);

boolean TryWalk (objtype *ob);
void	MoveObj (objtype *ob, long move);

void	KillActor (objtype *ob);
void	DamageActor (objtype *ob, unsigned damage);

boolean CheckLine (objtype *ob);
void FirstSighting (objtype *ob);
boolean	CheckSight (objtype *ob);

/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/



//===========================================================================


/*
===================
=
= SpawnNewObj
=
= Spaws a new actor at the given TILE coordinates, with the given state, and
= the given size in GLOBAL units.
=
= new			= a pointer to an initialized new actor
=
===================
*/

void SpawnNewObj (unsigned tilex, unsigned tiley, statetype *state)
{
	GetNewActor ();
	new->state = state;
	if (state->tictime)
		new->ticcount = US_RndT () % state->tictime;
	else
		new->ticcount = 0;

	new->tilex = tilex;
	new->tiley = tiley;
	new->x = ((long)tilex<<TILESHIFT)+TILEGLOBAL/2;
	new->y = ((long)tiley<<TILESHIFT)+TILEGLOBAL/2;
	new->dir = nodir;

	actorat[tilex][tiley] = new;
	new->areanumber =
		*(mapsegs[0] + farmapylookup[new->tiley]+new->tilex) - AREATILE;
}



/*
===================
=
= NewState
=
= Changes ob to a new state, setting ticcount to the max for that state
=
===================
*/

void NewState (objtype *ob, statetype *state)
{
	ob->state = state;
	ob->ticcount = state->tictime;
}



/*
=============================================================================

				ENEMY TILE WORLD MOVEMENT CODE

=============================================================================
*/


/*
==================================
=
= TryWalk
=
= Attempts to move ob in its current (ob->dir) direction.
=
= If blocked by either a wall or an actor returns FALSE
=
= If move is either clear or blocked only by a door, returns TRUE and sets
=
= ob->tilex			= new destination
= ob->tiley
= ob->areanumber    = the floor tile number (0-(NUMAREAS-1)) of destination
= ob->distance  	= TILEGLOBAl, or -doornumber if a door is blocking the way
=
= If a door is in the way, an OpenDoor call is made to start it opening.
= The actor code should wait until
= 	doorobjlist[-ob->distance].action = dr_open, meaning the door has been
=	fully opened
=
==================================
*/

#define CHECKDIAG(x,y)								\
{                                                   \
	temp=(unsigned)actorat[x][y];                   \
	if (temp)                                       \
	{                                               \
		if (temp<256)                               \
			return false;                           \
		if (((objtype *)temp)->flags&FL_SHOOTABLE)  \
			return false;                           \
	}                                               \
}

#define CHECKSIDE(x,y)								\
{                                                   \
	temp=(unsigned)actorat[x][y];                   \
	if (temp)                                       \
	{                                               \
		if (temp<128)                               \
			return false;                           \
		if (temp<256)                               \
			doornum = temp&63;                      \
		else if (((objtype *)temp)->flags&FL_SHOOTABLE)\
			return false;                           \
	}                                               \
}


boolean TryWalk (objtype *ob)
{
	int			doornum;
	unsigned	temp;

	doornum = -1;

	if (ob->obclass == inertobj)
	{
		switch (ob->dir)
		{
		case north:
			ob->tiley--;
			break;

		case northeast:
			ob->tilex++;
			ob->tiley--;
			break;

		case east:
			ob->tilex++;
			break;

		case southeast:
			ob->tilex++;
			ob->tiley++;
			break;

		case south:
			ob->tiley++;
			break;

		case southwest:
			ob->tilex--;
			ob->tiley++;
			break;

		case west:
			ob->tilex--;
			break;

		case northwest:
			ob->tilex--;
			ob->tiley--;
			break;
		}
	}
	else
		switch (ob->dir)
		{
		case north:
			if (ob->obclass == dogobj || ob->obclass == fakeobj)
			{
				CHECKDIAG(ob->tilex,ob->tiley-1);
			}
			else
			{
				CHECKSIDE(ob->tilex,ob->tiley-1);
			}
			ob->tiley--;
			break;

		case northeast:
			CHECKDIAG(ob->tilex+1,ob->tiley-1);
			CHECKDIAG(ob->tilex+1,ob->tiley);
			CHECKDIAG(ob->tilex,ob->tiley-1);
			ob->tilex++;
			ob->tiley--;
			break;

		case east:
			if (ob->obclass == dogobj || ob->obclass == fakeobj)
			{
				CHECKDIAG(ob->tilex+1,ob->tiley);
			}
			else
			{
				CHECKSIDE(ob->tilex+1,ob->tiley);
			}
			ob->tilex++;
			break;

		case southeast:
			CHECKDIAG(ob->tilex+1,ob->tiley+1);
			CHECKDIAG(ob->tilex+1,ob->tiley);
			CHECKDIAG(ob->tilex,ob->tiley+1);
			ob->tilex++;
			ob->tiley++;
			break;

		case south:
			if (ob->obclass == dogobj || ob->obclass == fakeobj)
			{
				CHECKDIAG(ob->tilex,ob->tiley+1);
			}
			else
			{
				CHECKSIDE(ob->tilex,ob->tiley+1);
			}
			ob->tiley++;
			break;

		case southwest:
			CHECKDIAG(ob->tilex-1,ob->tiley+1);
			CHECKDIAG(ob->tilex-1,ob->tiley);
			CHECKDIAG(ob->tilex,ob->tiley+1);
			ob->tilex--;
			ob->tiley++;
			break;

		case west:
			if (ob->obclass == dogobj || ob->obclass == fakeobj)
			{
				CHECKDIAG(ob->tilex-1,ob->tiley);
			}
			else
			{
				CHECKSIDE(ob->tilex-1,ob->tiley);
			}
			ob->tilex--;
			break;

		case northwest:
			CHECKDIAG(ob->tilex-1,ob->tiley-1);
			CHECKDIAG(ob->tilex-1,ob->tiley);
			CHECKDIAG(ob->tilex,ob->tiley-1);
			ob->tilex--;
			ob->tiley--;
			break;

		case nodir:
			return false;

		default:
			Quit ("Walk: Bad dir");
		}

	if (doornum != -1)
	{
		OpenDoor (doornum);
		ob->distance = -doornum-1;
		return true;
	}


	ob->areanumber =
		*(mapsegs[0] + farmapylookup[ob->tiley]+ob->tilex) - AREATILE;

	ob->distance = TILEGLOBAL;
	return true;
}



/*
==================================
=
= SelectDodgeDir
=
= Attempts to choose and initiate a movement for ob that sends it towards
= the player while dodging
=
= If there is no possible move (ob is totally surrounded)
=
= ob->dir			=	nodir
=
= Otherwise
=
= ob->dir			= new direction to follow
= ob->distance		= TILEGLOBAL or -doornumber
= ob->tilex			= new destination
= ob->tiley
= ob->areanumber    = the floor tile number (0-(NUMAREAS-1)) of destination
=
==================================
*/

void SelectDodgeDir (objtype *ob)
{
	int 		deltax,deltay,i;
	unsigned	absdx,absdy;
	dirtype 	dirtry[5];
	dirtype 	turnaround,tdir;

	if (ob->flags & FL_FIRSTATTACK)
	{
	//
	// turning around is only ok the very first time after noticing the
	// player
	//
		turnaround = nodir;
		ob->flags &= ~FL_FIRSTATTACK;
	}
	else
		turnaround=opposite[ob->dir];

	deltax = player->tilex - ob->tilex;
	deltay = player->tiley - ob->tiley;

//
// arange 5 direction choices in order of preference
// the four cardinal directions plus the diagonal straight towards
// the player
//

	if (deltax>0)
	{
		dirtry[1]= east;
		dirtry[3]= west;
	}
	else
	{
		dirtry[1]= west;
		dirtry[3]= east;
	}

	if (deltay>0)
	{
		dirtry[2]= south;
		dirtry[4]= north;
	}
	else
	{
		dirtry[2]= north;
		dirtry[4]= south;
	}

//
// randomize a bit for dodging
//
	absdx = abs(deltax);
	absdy = abs(deltay);

	if (absdx > absdy)
	{
		tdir = dirtry[1];
		dirtry[1] = dirtry[2];
		dirtry[2] = tdir;
		tdir = dirtry[3];
		dirtry[3] = dirtry[4];
		dirtry[4] = tdir;
	}

	if (US_RndT() < 128)
	{
		tdir = dirtry[1];
		dirtry[1] = dirtry[2];
		dirtry[2] = tdir;
		tdir = dirtry[3];
		dirtry[3] = dirtry[4];
		dirtry[4] = tdir;
	}

	dirtry[0] = diagonal [ dirtry[1] ] [ dirtry[2] ];

//
// try the directions util one works
//
	for (i=0;i<5;i++)
	{
		if ( dirtry[i] == nodir || dirtry[i] == turnaround)
			continue;

		ob->dir = dirtry[i];
		if (TryWalk(ob))
			return;
	}

//
// turn around only as a last resort
//
	if (turnaround != nodir)
	{
		ob->dir = turnaround;

		if (TryWalk(ob))
			return;
	}

	ob->dir = nodir;
}


/*
============================
=
= SelectChaseDir
=
= As SelectDodgeDir, but doesn't try to dodge
=
============================
*/

void SelectChaseDir (objtype *ob)
{
	int deltax,deltay,i;
	dirtype d[3];
	dirtype tdir, olddir, turnaround;


	olddir=ob->dir;
	turnaround=opposite[olddir];

	deltax=player->tilex - ob->tilex;
	deltay=player->tiley - ob->tiley;

	d[1]=nodir;
	d[2]=nodir;

	if (deltax>0)
		d[1]= east;
	else if (deltax<0)
		d[1]= west;
	if (deltay>0)
		d[2]=south;
	else if (deltay<0)
		d[2]=north;

	if (abs(deltay)>abs(deltax))
	{
		tdir=d[1];
		d[1]=d[2];
		d[2]=tdir;
	}

	if (d[1]==turnaround)
		d[1]=nodir;
	if (d[2]==turnaround)
		d[2]=nodir;


	if (d[1]!=nodir)
	{
		ob->dir=d[1];
		if (TryWalk(ob))
			return;     /*either moved forward or attacked*/
	}

	if (d[2]!=nodir)
	{
		ob->dir=d[2];
		if (TryWalk(ob))
			return;
	}

/* there is no direct path to the player, so pick another direction */

	if (olddir!=nodir)
	{
		ob->dir=olddir;
		if (TryWalk(ob))
			return;
	}

	if (US_RndT()>128) 	/*randomly determine direction of search*/
	{
		for (tdir=north;tdir<=west;tdir++)
		{
			if (tdir!=turnaround)
			{
				ob->dir=tdir;
				if ( TryWalk(ob) )
					return;
			}
		}
	}
	else
	{
		for (tdir=west;tdir>=north;tdir--)
		{
			if (tdir!=turnaround)
			{
			  ob->dir=tdir;
			  if ( TryWalk(ob) )
				return;
			}
		}
	}

	if (turnaround !=  nodir)
	{
		ob->dir=turnaround;
		if (ob->dir != nodir)
		{
			if ( TryWalk(ob) )
				return;
		}
	}

	ob->dir = nodir;		// can't move
}


/*
============================
=
= SelectRunDir
=
= Run Away from player
=
============================
*/

void SelectRunDir (objtype *ob)
{
	int deltax,deltay,i;
	dirtype d[3];
	dirtype tdir, olddir, turnaround;


	deltax=player->tilex - ob->tilex;
	deltay=player->tiley - ob->tiley;

	if (deltax<0)
		d[1]= east;
	else
		d[1]= west;
	if (deltay<0)
		d[2]=south;
	else
		d[2]=north;

	if (abs(deltay)>abs(deltax))
	{
		tdir=d[1];
		d[1]=d[2];
		d[2]=tdir;
	}

	ob->dir=d[1];
	if (TryWalk(ob))
		return;     /*either moved forward or attacked*/

	ob->dir=d[2];
	if (TryWalk(ob))
		return;

/* there is no direct path to the player, so pick another direction */

	if (US_RndT()>128) 	/*randomly determine direction of search*/
	{
		for (tdir=north;tdir<=west;tdir++)
		{
			ob->dir=tdir;
			if ( TryWalk(ob) )
				return;
		}
	}
	else
	{
		for (tdir=west;tdir>=north;tdir--)
		{
			ob->dir=tdir;
			if ( TryWalk(ob) )
			  return;
		}
	}

	ob->dir = nodir;		// can't move
}


/*
=================
=
= MoveObj
=
= Moves ob be move global units in ob->dir direction
= Actors are not allowed to move inside the player
= Does NOT check to see if the move is tile map valid
=
= ob->x			= adjusted for new position
= ob->y
=
=================
*/

void MoveObj (objtype *ob, long move)
{
	long	deltax,deltay;

	switch (ob->dir)
	{
	case north:
		ob->y -= move;
		break;
	case northeast:
		ob->x += move;
		ob->y -= move;
		break;
	case east:
		ob->x += move;
		break;
	case southeast:
		ob->x += move;
		ob->y += move;
		break;
	case south:
		ob->y += move;
		break;
	case southwest:
		ob->x -= move;
		ob->y += move;
		break;
	case west:
		ob->x -= move;
		break;
	case northwest:
		ob->x -= move;
		ob->y -= move;
		break;

	case nodir:
		return;

	default:
		Quit ("MoveObj: bad dir!");
	}

//
// check to make sure it's not on top of player
//
	if (areabyplayer[ob->areanumber])
	{
		deltax = ob->x - player->x;
		if (deltax < -MINACTORDIST || deltax > MINACTORDIST)
			goto moveok;
		deltay = ob->y - player->y;
		if (deltay < -MINACTORDIST || deltay > MINACTORDIST)
			goto moveok;

		if (ob->obclass == ghostobj || ob->obclass == spectreobj)
			TakeDamage (tics*2,ob);

	//
	// back up
	//
		switch (ob->dir)
		{
		case north:
			ob->y += move;
			break;
		case northeast:
			ob->x -= move;
			ob->y += move;
			break;
		case east:
			ob->x -= move;
			break;
		case southeast:
			ob->x -= move;
			ob->y -= move;
			break;
		case south:
			ob->y -= move;
			break;
		case southwest:
			ob->x += move;
			ob->y -= move;
			break;
		case west:
			ob->x += move;
			break;
		case northwest:
			ob->x += move;
			ob->y += move;
			break;

		case nodir:
			return;
		}
		return;
	}
moveok:
	ob->distance -=move;
}

/*
=============================================================================

							STUFF

=============================================================================
*/

/*
===============
=
= DropItem
=
= Tries to drop a bonus item somewhere in the tiles surrounding the
= given tilex/tiley
=
===============
*/

void DropItem (stat_t itemtype, int tilex, int tiley)
{
	int	x,y,xl,xh,yl,yh;

//
// find a free spot to put it in
//
	if (!actorat[tilex][tiley])
	{
		PlaceItemType (itemtype, tilex,tiley);
		return;
	}

	xl = tilex-1;
	xh = tilex+1;
	yl = tiley-1;
	yh = tiley+1;

	for (x=xl ; x<= xh ; x++)
		for (y=yl ; y<= yh ; y++)
			if (!actorat[x][y])
			{
				PlaceItemType (itemtype, x,y);
				return;
			}
}



/*
===============
=
= KillActor
=
===============
*/

void KillActor (objtype *ob)
{
	int	tilex,tiley;

	tilex = ob->tilex = ob->x >> TILESHIFT;		// drop item on center
	tiley = ob->tiley = ob->y >> TILESHIFT;

	switch (ob->obclass)
	{
	case guardobj:
		GivePoints (100);
		NewState (ob,&s_grddie1);
		PlaceItemType (bo_clip2,tilex,tiley);
		break;

	case officerobj:
		GivePoints (400);
		NewState (ob,&s_ofcdie1);
		PlaceItemType (bo_clip2,tilex,tiley);
		break;

	case mutantobj:
		GivePoints (700);
		NewState (ob,&s_mutdie1);
		PlaceItemType (bo_clip2,tilex,tiley);
		break;

	case ssobj:
		GivePoints (500);
		NewState (ob,&s_ssdie1);
		if (gamestate.bestweapon < wp_machinegun)
			PlaceItemType (bo_machinegun,tilex,tiley);
		else
			PlaceItemType (bo_clip2,tilex,tiley);
		break;

	case dogobj:
		GivePoints (200);
		NewState (ob,&s_dogdie1);
		break;

#ifndef SPEAR
	case bossobj:
		GivePoints (5000);
		NewState (ob,&s_bossdie1);
		PlaceItemType (bo_key1,tilex,tiley);
		break;

	case gretelobj:
		GivePoints (5000);
		NewState (ob,&s_greteldie1);
		PlaceItemType (bo_key1,tilex,tiley);
		break;

	case giftobj:
		GivePoints (5000);
		gamestate.killx = player->x;
		gamestate.killy = player->y;
		NewState (ob,&s_giftdie1);
		break;

	case fatobj:
		GivePoints (5000);
		gamestate.killx = player->x;
		gamestate.killy = player->y;
		NewState (ob,&s_fatdie1);
		break;

	case schabbobj:
		GivePoints (5000);
		gamestate.killx = player->x;
		gamestate.killy = player->y;
		NewState (ob,&s_schabbdie1);
		A_DeathScream(ob);
		break;
	case fakeobj:
		GivePoints (2000);
		NewState (ob,&s_fakedie1);
		break;

	case mechahitlerobj:
		GivePoints (5000);
		NewState (ob,&s_mechadie1);
		break;
	case realhitlerobj:
		GivePoints (5000);
		gamestate.killx = player->x;
		gamestate.killy = player->y;
		NewState (ob,&s_hitlerdie1);
		A_DeathScream(ob);
		break;
#else
	case spectreobj:
		GivePoints (200);
		NewState (ob,&s_spectredie1);
		break;

	case angelobj:
		GivePoints (5000);
		NewState (ob,&s_angeldie1);
		break;

	case transobj:
		GivePoints (5000);
		NewState (ob,&s_transdie0);
		PlaceItemType (bo_key1,tilex,tiley);
		break;

	case uberobj:
		GivePoints (5000);
		NewState (ob,&s_uberdie0);
		PlaceItemType (bo_key1,tilex,tiley);
		break;

	case willobj:
		GivePoints (5000);
		NewState (ob,&s_willdie1);
		PlaceItemType (bo_key1,tilex,tiley);
		break;

	case deathobj:
		GivePoints (5000);
		NewState (ob,&s_deathdie1);
		PlaceItemType (bo_key1,tilex,tiley);
		break;
#endif
	}

	gamestate.killcount++;
	ob->flags &= ~FL_SHOOTABLE;
	actorat[ob->tilex][ob->tiley] = NULL;
	ob->flags |= FL_NONMARK;
}



/*
===================
=
= DamageActor
=
= Called when the player succesfully hits an enemy.
=
= Does damage points to enemy ob, either putting it into a stun frame or
= killing it.
=
===================
*/

void DamageActor (objtype *ob, unsigned damage)
{
	madenoise = true;

//
// do double damage if shooting a non attack mode actor
//
	if ( !(ob->flags & FL_ATTACKMODE) )
		damage <<= 1;

	ob->hitpoints -= damage;

	if (ob->hitpoints<=0)
		KillActor (ob);
	else
	{
		if (! (ob->flags & FL_ATTACKMODE) )
			FirstSighting (ob);		// put into combat mode

		switch (ob->obclass)		// dogs only have one hit point
		{
		case guardobj:
			if (ob->hitpoints&1)
				NewState (ob,&s_grdpain);
			else
				NewState (ob,&s_grdpain1);
			break;

		case officerobj:
			if (ob->hitpoints&1)
				NewState (ob,&s_ofcpain);
			else
				NewState (ob,&s_ofcpain1);
			break;

		case mutantobj:
			if (ob->hitpoints&1)
				NewState (ob,&s_mutpain);
			else
				NewState (ob,&s_mutpain1);
			break;

		case ssobj:
			if (ob->hitpoints&1)
				NewState (ob,&s_sspain);
			else
				NewState (ob,&s_sspain1);

			break;

		}
	}
}

/*
=============================================================================

							CHECKSIGHT

=============================================================================
*/


/*
=====================
=
= CheckLine
=
= Returns true if a straight line between the player and ob is unobstructed
=
=====================
*/

boolean CheckLine (objtype *ob)
{
	int	x1,y1,xt1,yt1,x2,y2,xt2,yt2;
	int	x,y;
	int	xdist,ydist,xstep,ystep;
	int	temp;
	int	partial,delta;
	long	ltemp;
	int	xfrac,yfrac,deltafrac;
	unsigned	value,intercept;

	x1 = ob->x >> UNSIGNEDSHIFT;		// 1/256 tile precision
	y1 = ob->y >> UNSIGNEDSHIFT;
	xt1 = x1 >> 8;
	yt1 = y1 >> 8;

	x2 = plux;
	y2 = pluy;
	xt2 = player->tilex;
	yt2 = player->tiley;


	xdist = abs(xt2-xt1);

	if (xdist > 0)
	{
		if (xt2 > xt1)
		{
			partial = 256-(x1&0xff);
			xstep = 1;
		}
		else
		{
			partial = x1&0xff;
			xstep = -1;
		}

		deltafrac = abs(x2-x1);
		delta = y2-y1;
		ltemp = ((long)delta<<8)/deltafrac;
		if (ltemp > 0x7fffl)
			ystep = 0x7fff;
		else if (ltemp < -0x7fffl)
			ystep = -0x7fff;
		else
			ystep = ltemp;
		yfrac = y1 + (((long)ystep*partial) >>8);

		x = xt1+xstep;
		xt2 += xstep;
		do
		{
			y = yfrac>>8;
			yfrac += ystep;

			value = (unsigned)tilemap[x][y];
			x += xstep;

			if (!value)
				continue;

			if (value<128 || value>256)
				return false;

			//
			// see if the door is open enough
			//
			value &= ~0x80;
			intercept = yfrac-ystep/2;

			if (intercept>doorposition[value])
				return false;

		} while (x != xt2);
	}

	ydist = abs(yt2-yt1);

	if (ydist > 0)
	{
		if (yt2 > yt1)
		{
			partial = 256-(y1&0xff);
			ystep = 1;
		}
		else
		{
			partial = y1&0xff;
			ystep = -1;
		}

		deltafrac = abs(y2-y1);
		delta = x2-x1;
		ltemp = ((long)delta<<8)/deltafrac;
		if (ltemp > 0x7fffl)
			xstep = 0x7fff;
		else if (ltemp < -0x7fffl)
			xstep = -0x7fff;
		else
			xstep = ltemp;
		xfrac = x1 + (((long)xstep*partial) >>8);

		y = yt1 + ystep;
		yt2 += ystep;
		do
		{
			x = xfrac>>8;
			xfrac += xstep;

			value = (unsigned)tilemap[x][y];
			y += ystep;

			if (!value)
				continue;

			if (value<128 || value>256)
				return false;

			//
			// see if the door is open enough
			//
			value &= ~0x80;
			intercept = xfrac-xstep/2;

			if (intercept>doorposition[value])
				return false;
		} while (y != yt2);
	}

	return true;
}



/*
================
=
= CheckSight
=
= Checks a straight line between player and current object
=
= If the sight is ok, check alertness and angle to see if they notice
=
= returns true if the player has been spoted
=
================
*/

#define MINSIGHT	0x18000l

boolean CheckSight (objtype *ob)
{
	long		deltax,deltay;

//
// don't bother tracing a line if the area isn't connected to the player's
//
	if (!areabyplayer[ob->areanumber])
		return false;

//
// if the player is real close, sight is automatic
//
	deltax = player->x - ob->x;
	deltay = player->y - ob->y;

	if (deltax > -MINSIGHT && deltax < MINSIGHT
	&& deltay > -MINSIGHT && deltay < MINSIGHT)
		return true;

//
// see if they are looking in the right direction
//
	switch (ob->dir)
	{
	case north:
		if (deltay > 0)
			return false;
		break;

	case east:
		if (deltax < 0)
			return false;
		break;

	case south:
		if (deltay < 0)
			return false;
		break;

	case west:
		if (deltax > 0)
			return false;
		break;
	}

//
// trace a line to check for blocking tiles (corners)
//
	return CheckLine (ob);

}



/*
===============
=
= FirstSighting
=
= Puts an actor into attack mode and possibly reverses the direction
= if the player is behind it
=
===============
*/

void FirstSighting (objtype *ob)
{
//
// react to the player
//
	switch (ob->obclass)
	{
	case guardobj:
		PlaySoundLocActor(HALTSND,ob);
		NewState (ob,&s_grdchase1);
		ob->speed *= 3;			// go faster when chasing player
		break;

	case officerobj:
		PlaySoundLocActor(SPIONSND,ob);
		NewState (ob,&s_ofcchase1);
		ob->speed *= 5;			// go faster when chasing player
		break;

	case mutantobj:
		NewState (ob,&s_mutchase1);
		ob->speed *= 3;			// go faster when chasing player
		break;

	case ssobj:
		PlaySoundLocActor(SCHUTZADSND,ob);
		NewState (ob,&s_sschase1);
		ob->speed *= 4;			// go faster when chasing player
		break;

	case dogobj:
		PlaySoundLocActor(DOGBARKSND,ob);
		NewState (ob,&s_dogchase1);
		ob->speed *= 2;			// go faster when chasing player
		break;

#ifndef SPEAR
	case bossobj:
		SD_PlaySound(GUTENTAGSND);
		NewState (ob,&s_bosschase1);
		ob->speed = SPDPATROL*3;	// go faster when chasing player
		break;

	case gretelobj:
		SD_PlaySound(KEINSND);
		NewState (ob,&s_gretelchase1);
		ob->speed *= 3;			// go faster when chasing player
		break;

	case giftobj:
		SD_PlaySound(EINESND);
		NewState (ob,&s_giftchase1);
		ob->speed *= 3;			// go faster when chasing player
		break;

	case fatobj:
		SD_PlaySound(ERLAUBENSND);
		NewState (ob,&s_fatchase1);
		ob->speed *= 3;			// go faster when chasing player
		break;

	case schabbobj:
		SD_PlaySound(SCHABBSHASND);
		NewState (ob,&s_schabbchase1);
		ob->speed *= 3;			// go faster when chasing player
		break;

	case fakeobj:
		SD_PlaySound(TOT_HUNDSND);
		NewState (ob,&s_fakechase1);
		ob->speed *= 3;			// go faster when chasing player
		break;

	case mechahitlerobj:
		SD_PlaySound(DIESND);
		NewState (ob,&s_mechachase1);
		ob->speed *= 3;			// go faster when chasing player
		break;

	case realhitlerobj:
		SD_PlaySound(DIESND);
		NewState (ob,&s_hitlerchase1);
		ob->speed *= 5;			// go faster when chasing player
		break;

	case ghostobj:
		NewState (ob,&s_blinkychase1);
		ob->speed *= 2;			// go faster when chasing player
		break;
#else

	case spectreobj:
		SD_PlaySound(GHOSTSIGHTSND);
		NewState (ob,&s_spectrechase1);
		ob->speed = 800;			// go faster when chasing player
		break;

	case angelobj:
		SD_PlaySound(ANGELSIGHTSND);
		NewState (ob,&s_angelchase1);
		ob->speed = 1536;			// go faster when chasing player
		break;

	case transobj:
		SD_PlaySound(TRANSSIGHTSND);
		NewState (ob,&s_transchase1);
		ob->speed = 1536;			// go faster when chasing player
		break;

	case uberobj:
		NewState (ob,&s_uberchase1);
		ob->speed = 3000;			// go faster when chasing player
		break;

	case willobj:
		SD_PlaySound(WILHELMSIGHTSND);
		NewState (ob,&s_willchase1);
		ob->speed = 2048;			// go faster when chasing player
		break;

	case deathobj:
		SD_PlaySound(KNIGHTSIGHTSND);
		NewState (ob,&s_deathchase1);
		ob->speed = 2048;			// go faster when chasing player
		break;

#endif
	}

	if (ob->distance < 0)
		ob->distance = 0;	// ignore the door opening command

	ob->flags |= FL_ATTACKMODE|FL_FIRSTATTACK;
}



/*
===============
=
= SightPlayer
=
= Called by actors that ARE NOT chasing the player.  If the player
= is detected (by sight, noise, or proximity), the actor is put into
= it's combat frame and true is returned.
=
= Incorporates a random reaction delay
=
===============
*/

boolean SightPlayer (objtype *ob)
{
	if (ob->flags & FL_ATTACKMODE)
		Quit ("An actor in ATTACKMODE called SightPlayer!");

	if (ob->temp2)
	{
	//
	// count down reaction time
	//
		ob->temp2 -= tics;
		if (ob->temp2 > 0)
			return false;
		ob->temp2 = 0;					// time to react
	}
	else
	{
		if (!areabyplayer[ob->areanumber])
			return false;

		if (ob->flags & FL_AMBUSH)
		{
			if (!CheckSight (ob))
				return false;
			ob->flags &= ~FL_AMBUSH;
		}
		else
		{
			if (!madenoise && !CheckSight (ob))
				return false;
		}


		switch (ob->obclass)
		{
		case guardobj:
			ob->temp2 = 1+US_RndT()/4;
			break;
		case officerobj:
			ob->temp2 = 2;
			break;
		case mutantobj:
			ob->temp2 = 1+US_RndT()/6;
			break;
		case ssobj:
			ob->temp2 = 1+US_RndT()/6;
			break;
		case dogobj:
			ob->temp2 = 1+US_RndT()/8;
			break;

		case bossobj:
		case schabbobj:
		case fakeobj:
		case mechahitlerobj:
		case realhitlerobj:
		case gretelobj:
		case giftobj:
		case fatobj:
		case spectreobj:
		case angelobj:
		case transobj:
		case uberobj:
		case willobj:
		case deathobj:
			ob->temp2 = 1;
			break;
		}
		return false;
	}

	FirstSighting (ob);

	return true;
}
```
