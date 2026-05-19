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
description: "This file encapsulates the AI logic and state management for enemies in Wolfenstein 3D, a groundbreaking first-person shooter from 1992."

summary:
  - point: "Innovative enemy movement logic based on tile-based navigation"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Dynamic state transitions for AI behavior"
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    link_label: "AI in video games"
  - point: "Optimized algorithms for sight and pathfinding under hardware constraints"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Use of lookup tables for efficient direction calculations"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"
  - point: "Randomized elements for unpredictable enemy behavior"
    link: "https://en.wikipedia.org/wiki/Procedural_generation"
    link_label: "Procedural generation"

enhancements:
  - id: "opposite-direction-table"
    line_start: 24
    line_end: 25
    title: "Lookup table for opposite directions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This small lookup table defines the opposite direction for each of the eight cardinal and diagonal directions, plus a 'nodir' state. In the early 1990s, lookup tables were a common way to optimize calculations, avoiding expensive conditional logic or arithmetic. John Carmack, known for his obsession with performance, likely implemented this to ensure enemy AI could quickly reverse direction when needed. This decision reflects the constraints of the era: Wolfenstein 3D ran on MS-DOS systems with limited CPU power, often using 386 processors. The table-driven approach ensured that direction calculations were instantaneous, a necessity for maintaining the game's fast-paced action."
  - id: "diagonal-direction-table"
    line_start: 27
    line_end: 38
    title: "Diagonal movement lookup table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This two-dimensional array maps pairs of cardinal directions to their diagonal equivalents, enabling enemies to move diagonally when appropriate. The table is sparsely populated, reflecting the limited scenarios where diagonal movement is valid. This design choice highlights the developers' focus on efficiency, as unused entries are marked 'nodir' to avoid unnecessary calculations. In the early 1990s, memory and processing power were precious resources, and Carmack's use of precomputed tables minimized runtime overhead. The diagonal movement logic added a layer of realism to enemy behavior, making their navigation feel more dynamic and less predictable, a key factor in the game's immersive experience."
  - id: "spawn-new-actor"
    line_start: 81
    line_end: 111
    title: "Spawning new actors in the game world"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `SpawnNewObj` function initializes a new actor in the game world, setting its position, state, and initial direction. This routine is a cornerstone of Wolfenstein 3D's dynamic gameplay, enabling enemies to appear at specific locations and interact with the player. The function calculates the actor's global coordinates based on tile positions, a method well-suited to the game's grid-based level design. At the time, id Software was pioneering techniques to simulate real-time action on hardware designed for static, turn-based games. This function exemplifies their ingenuity, translating high-level game design into efficient, low-level code. The ability to spawn actors dynamically allowed for varied and unpredictable gameplay, a hallmark of Wolfenstein 3D's success."
  - id: "try-walk-movement"
    line_start: 181
    line_end: 357
    title: "Enemy movement logic: TryWalk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "The `TryWalk` function determines whether an enemy can move in its current direction, checking for obstacles like walls, actors, or doors. If the path is clear, the function updates the enemy's position and area number. This logic is critical for creating believable AI behavior, as enemies navigate the game's tile-based world. The function includes checks for diagonal movement and door interactions, showcasing the developers' attention to detail. In 1992, real-time pathfinding was a significant challenge due to hardware limitations. Carmack's implementation balances complexity and performance, ensuring smooth gameplay even on low-end systems. The ability to handle dynamic obstacles like doors added depth to the AI, making enemies feel more intelligent and responsive."
  - id: "select-dodge-direction"
    line_start: 359
    line_end: 473
    title: "Dodging behavior in enemy AI"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "The `SelectDodgeDir` function enables enemies to choose a movement direction that avoids obstacles while heading toward the player. This routine prioritizes cardinal directions and uses randomness to make enemy behavior less predictable. The function reflects id Software's innovative approach to AI, blending deterministic logic with procedural elements. In the early 1990s, game AI was often simplistic, relying on fixed patterns. Wolfenstein 3D's enemies, however, exhibited dynamic behavior, reacting to the player's actions and environment. This function contributed to the game's tension and replayability, as players faced enemies that felt alive and adaptive. The dodge logic also showcases Carmack's mastery of optimization, ensuring the AI remained performant on limited hardware."
  - id: "check-line-of-sight"
    line_start: 1037
    line_end: 1185
    title: "Line-of-sight calculation for AI"
    wikipedia_url: "https://en.wikipedia.org/wiki/Line_of_sight_(gaming)"
    image_url: ""
    image_caption: ""
    content: "The `CheckLine` function determines whether a straight line between the player and an enemy is unobstructed, accounting for walls and doors. This routine is a key component of Wolfenstein 3D's AI, enabling enemies to detect the player and engage in combat. The function uses integer math and precomputed values to optimize performance, a necessity given the game's real-time requirements. In 1992, line-of-sight calculations were a novel feature in first-person shooters, adding realism and strategy to gameplay. Carmack's implementation balances accuracy and efficiency, ensuring the AI could react quickly without slowing down the game. This logic laid the groundwork for more advanced visibility algorithms in later titles, influencing the development of modern game engines."
  - id: "first-sighting-reaction"
    line_start: 1253
    line_end: 1402
    title: "Enemy reaction upon spotting the player"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "The `FirstSighting` function transitions an enemy into attack mode upon detecting the player, adjusting its speed and state. This routine exemplifies id Software's focus on creating dynamic and engaging AI. Enemies react differently based on their type, with unique sounds and behaviors that enhance the game's atmosphere. In the early 1990s, such detailed AI interactions were rare, as most games relied on static, predictable patterns. Wolfenstein 3D's enemies felt alive, responding to the player's actions and environment. This function also highlights Tom Hall's influence on the game's design, as he pushed for immersive and varied gameplay experiences. The sighting logic added tension and excitement, making each encounter memorable."

---

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

