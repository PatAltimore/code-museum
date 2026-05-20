---
title: "pmove.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/pmove.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/pmove.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "pmove-c"
order: 11
description: "The player movement logic in Quake revolutionized 3D gaming physics, setting the standard for fluid and responsive movement in first-person shooters."

summary:
  - point: "Introduced advanced player movement physics in 3D environments"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimized for hardware constraints of mid-1990s PCs"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"
  - point: "Inspired movement mechanics in later FPS games like Half-Life and Counter-Strike"
    link: "https://en.wikipedia.org/wiki/Half-Life_(video_game)"
    link_label: "Half-Life"

enhancements:
  - id: "foundation-player-movement-variables"
    line_start: 24
    line_end: 36
    title: "Foundation: Player Movement Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section initializes key variables for player movement, such as `movevars` and `pmove`. These structures hold essential data like velocity, position, and environmental factors (e.g., water level). In the mid-1990s, game developers faced significant constraints in memory and processing power, requiring efficient data structures to handle complex physics calculations. By centralizing movement-related data, id Software created a flexible system that could adapt to different movement scenarios, such as walking, jumping, and swimming. This modular approach influenced later game engines, including Valve's Source Engine, which expanded on Quake's movement logic to create immersive gameplay experiences."
  - id: "player-bounding-box-dimensions"
    line_start: 37
    line_end: 47
    title: "Defining the Player's Bounding Box Dimensions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `player_mins` and `player_maxs` variables define the dimensions of the player's bounding box, which is used for collision detection. This was a critical innovation for 3D games in the 1990s, as it allowed precise interactions between the player and the environment. At the time, collision detection was a challenging problem due to limited computational resources. By using a simple axis-aligned bounding box (AABB), id Software optimized collision checks, ensuring smooth gameplay without overloading the CPU. This technique became a standard in game development, influencing titles like Unreal Tournament and Halo."
  - id: "pm-clipvelocity-sliding-physics"
    line_start: 69
    line_end: 95
    title: "Sliding Physics: PM_ClipVelocity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Physics_engine"
    image_url: ""
    image_caption: ""
    content: "The `PM_ClipVelocity` function calculates how the player slides off surfaces during collisions. It adjusts the player's velocity based on the normal of the surface they impact, simulating realistic sliding behavior. This approach was groundbreaking for its time, as it introduced nuanced physics to 3D environments. The function also accounts for overbounce, a parameter that adds a slight rebound effect. John Carmack and Michael Abrash, known for their expertise in optimization, implemented this to ensure smooth gameplay even on hardware like the Intel 486. The sliding mechanics inspired similar systems in later games, such as Counter-Strike's movement physics."
  - id: "pm-flymove-multi-plane-collision"
    line_start: 104
    line_end: 225
    title: "Multi-Plane Collision Handling in PM_FlyMove"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `PM_FlyMove` function handles complex collision scenarios where the player interacts with multiple surfaces simultaneously. It uses a series of clip planes to adjust the player's velocity, ensuring they slide smoothly along walls and floors. This was a major innovation in 3D game physics, as it allowed for realistic movement in environments with intricate geometry. The function also includes safeguards against edge cases, such as being trapped in solid objects. This level of detail set Quake apart from earlier games, like Doom, which relied on simpler 2D collision models. The technique influenced later engines, including Unreal Engine, which expanded on multi-plane collision handling for more immersive worlds."
  - id: "pm-groundmove-stair-navigation"
    line_start: 233
    line_end: 313
    title: "Navigating Stairs with PM_GroundMove"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stair_climbing"
    image_url: ""
    image_caption: ""
    content: "The `PM_GroundMove` function enables players to navigate stairs and uneven terrain seamlessly. It calculates the best path forward by comparing movement distances on flat ground and elevated steps, choosing the option that allows the player to move farther. This was a critical feature for Quake's 3D levels, which often included complex architecture. The stair-climbing logic was optimized to prevent players from getting stuck on small ledges, a common issue in earlier games. This innovation influenced level design in subsequent titles, encouraging developers to create more vertical and dynamic environments."
  - id: "pm-friction-environmental-resistance"
    line_start: 323
    line_end: 382
    title: "Environmental Resistance: PM_Friction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Friction"
    image_url: ""
    image_caption: ""
    content: "The `PM_Friction` function simulates the resistance players experience when moving across different surfaces, such as water or solid ground. It dynamically adjusts the player's velocity based on environmental factors, ensuring realistic deceleration. This was a significant advancement in game physics, as it added depth to player movement. The function also includes a feature to increase friction near drop-offs, preventing players from sliding uncontrollably. This attention to detail enhanced immersion and set a new standard for realism in 3D games. The concept of dynamic friction was later adopted by engines like Unity and Unreal."
  - id: "pm-airmove-gravity-and-air-control"
    line_start: 503
    line_end: 565
    title: "Gravity and Air Control in PM_AirMove"
    wikipedia_url: "https://en.wikipedia.org/wiki/Gravity_(physics)"
    image_url: ""
    image_caption: ""
    content: "The `PM_AirMove` function governs player movement while airborne, incorporating gravity and limited air control. It calculates the player's velocity based on input and environmental factors, ensuring realistic trajectories. This was a key feature for Quake, as it allowed players to perform precise maneuvers in mid-air, a hallmark of advanced gameplay. The function also clamps movement speed to prevent exploits, such as excessive acceleration. This innovation influenced later games, including Team Fortress Classic, which expanded on air control mechanics for competitive play."
  - id: "jumpbutton-context-sensitive-jumping"
    line_start: 642
    line_end: 684
    title: "Context-Sensitive Jumping: JumpButton"
    wikipedia_url: "https://en.wikipedia.org/wiki/Jump_(game_mechanics)"
    image_url: ""
    image_caption: ""
    content: "The `JumpButton` function handles player jumping, adapting behavior based on the environment. For instance, it adjusts jump velocity when underwater and prevents jumping while the player is dead or already airborne. This level of context sensitivity was a significant innovation, as it ensured intuitive and responsive controls. The function also includes a cooldown mechanism to prevent repeated jumps, adding a layer of realism. This approach influenced later games, such as Portal, which relied on precise jumping mechanics for puzzle-solving."
  - id: "spectatormove-freeform-camera-movement"
    line_start: 773
    line_end: 850
    title: "Freeform Camera Movement in Spectator Mode"
    wikipedia_url: "https://en.wikipedia.org/wiki/Spectator_mode"
    image_url: ""
    image_caption: ""
    content: "The `SpectatorMove` function provides freeform movement for players in spectator mode, allowing them to navigate the environment without physical constraints. It includes friction and acceleration calculations to ensure smooth camera control. This feature was a groundbreaking addition to Quake, as it enhanced multiplayer gameplay by enabling players to observe matches from any angle. The spectator mode became a staple in competitive gaming, influencing titles like Counter-Strike and Overwatch, which refined the concept for esports."
  - id: "player-move-centralized-movement-logic"
    line_start: 861
    line_end: 903
    title: "Centralized Movement Logic in PlayerMove"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The `PlayerMove` function serves as the central hub for player movement logic, coordinating various subroutines like `PM_Friction`, `PM_AirMove`, and `JumpButton`. It processes input, updates player state, and resolves collisions, ensuring fluid and responsive gameplay. This modular design was a hallmark of Quake's engine, allowing developers to easily extend or modify movement mechanics. The centralized approach influenced later engines, such as Source and Unreal, which adopted similar architectures for handling complex gameplay systems."

---

```asm
/*
Copyright (C) 1996-1997 Id Software, Inc.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  

See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

*/

#include "quakedef.h"


movevars_t		movevars;

playermove_t	pmove;

int			onground;
int			waterlevel;
int			watertype;

float		frametime;

vec3_t		forward, right, up;

vec3_t	player_mins = {-16, -16, -24};
vec3_t	player_maxs = {16, 16, 32};

// #define	PM_GRAVITY			800
// #define	PM_STOPSPEED		100
// #define	PM_MAXSPEED			320
// #define	PM_SPECTATORMAXSPEED	500
// #define	PM_ACCELERATE		10
// #define	PM_AIRACCELERATE	0.7
// #define	PM_WATERACCELERATE	10
// #define	PM_FRICTION			6
// #define	PM_WATERFRICTION	1

void PM_InitBoxHull (void);

void Pmove_Init (void)
{
	PM_InitBoxHull ();
}

#define	STEPSIZE	18


#define	BUTTON_JUMP	2


/*
==================
PM_ClipVelocity

Slide off of the impacting object
returns the blocked flags (1 = floor, 2 = step / wall)
==================
*/
#define	STOP_EPSILON	0.1

int PM_ClipVelocity (vec3_t in, vec3_t normal, vec3_t out, float overbounce)
{
	float	backoff;
	float	change;
	int		i, blocked;
	
	blocked = 0;
	if (normal[2] > 0)
		blocked |= 1;		// floor
	if (!normal[2])
		blocked |= 2;		// step
	
	backoff = DotProduct (in, normal) * overbounce;

	for (i=0 ; i<3 ; i++)
	{
		change = normal[i]*backoff;
		out[i] = in[i] - change;
		if (out[i] > -STOP_EPSILON && out[i] < STOP_EPSILON)
			out[i] = 0;
	}
	
	return blocked;
}


/*
============
PM_FlyMove

The basic solid body movement clip that slides along multiple planes
============
*/
#define	MAX_CLIP_PLANES	5

int PM_FlyMove (void)
{
	int			bumpcount, numbumps;
	vec3_t		dir;
	float		d;
	int			numplanes;
	vec3_t		planes[MAX_CLIP_PLANES];
	vec3_t		primal_velocity, original_velocity;
	int			i, j;
	pmtrace_t		trace;
	vec3_t		end;
	float		time_left;
	int			blocked;
	
	numbumps = 4;
	
	blocked = 0;
	VectorCopy (pmove.velocity, original_velocity);
	VectorCopy (pmove.velocity, primal_velocity);
	numplanes = 0;
	
	time_left = frametime;

	for (bumpcount=0 ; bumpcount<numbumps ; bumpcount++)
	{
		for (i=0 ; i<3 ; i++)
			end[i] = pmove.origin[i] + time_left * pmove.velocity[i];

		trace = PM_PlayerMove (pmove.origin, end);

		if (trace.startsolid || trace.allsolid)
		{	// entity is trapped in another solid
			VectorCopy (vec3_origin, pmove.velocity);
			return 3;
		}

		if (trace.fraction > 0)
		{	// actually covered some distance
			VectorCopy (trace.endpos, pmove.origin);
			numplanes = 0;
		}

		if (trace.fraction == 1)
			 break;		// moved the entire distance

		// save entity for contact
		pmove.touchindex[pmove.numtouch] = trace.ent;
		pmove.numtouch++;

		if (trace.plane.normal[2] > 0.7)
		{
			blocked |= 1;		// floor
		}
		if (!trace.plane.normal[2])
		{
			blocked |= 2;		// step
		}

		time_left -= time_left * trace.fraction;
		
	// cliped to another plane
		if (numplanes >= MAX_CLIP_PLANES)
		{	// this shouldn't really happen
			VectorCopy (vec3_origin, pmove.velocity);
			break;
		}

		VectorCopy (trace.plane.normal, planes[numplanes]);
		numplanes++;

//
// modify original_velocity so it parallels all of the clip planes
//
		for (i=0 ; i<numplanes ; i++)
		{
			PM_ClipVelocity (original_velocity, planes[i], pmove.velocity, 1);
			for (j=0 ; j<numplanes ; j++)
				if (j != i)
				{
					if (DotProduct (pmove.velocity, planes[j]) < 0)
						break;	// not ok
				}
			if (j == numplanes)
				break;
		}
		
		if (i != numplanes)
		{	// go along this plane
		}
		else
		{	// go along the crease
			if (numplanes != 2)
			{
//				Con_Printf ("clip velocity, numplanes == %i\n",numplanes);
				VectorCopy (vec3_origin, pmove.velocity);
				break;
			}
			CrossProduct (planes[0], planes[1], dir);
			d = DotProduct (dir, pmove.velocity);
			VectorScale (dir, d, pmove.velocity);
		}

//
// if original velocity is against the original velocity, stop dead
// to avoid tiny occilations in sloping corners
//
		if (DotProduct (pmove.velocity, primal_velocity) <= 0)
		{
			VectorCopy (vec3_origin, pmove.velocity);
			break;
		}
	}

	if (pmove.waterjumptime)
	{
		VectorCopy (primal_velocity, pmove.velocity);
	}
	return blocked;
}

/*
=============
PM_GroundMove

Player is on ground, with no upwards velocity
=============
*/
void PM_GroundMove (void)
{
	vec3_t	start, dest;
	pmtrace_t	trace;
	vec3_t	original, originalvel, down, up, downvel;
	float	downdist, updist;

	pmove.velocity[2] = 0;
	if (!pmove.velocity[0] && !pmove.velocity[1] && !pmove.velocity[2])
		return;

	// first try just moving to the destination	
	dest[0] = pmove.origin[0] + pmove.velocity[0]*frametime;
	dest[1] = pmove.origin[1] + pmove.velocity[1]*frametime;	
	dest[2] = pmove.origin[2];

	// first try moving directly to the next spot
	VectorCopy (dest, start);
	trace = PM_PlayerMove (pmove.origin, dest);
	if (trace.fraction == 1)
	{
		VectorCopy (trace.endpos, pmove.origin);
		return;
	}

	// try sliding forward both on ground and up 16 pixels
	// take the move that goes farthest
	VectorCopy (pmove.origin, original);
	VectorCopy (pmove.velocity, originalvel);

	// slide move
	PM_FlyMove ();

	VectorCopy (pmove.origin, down);
	VectorCopy (pmove.velocity, downvel);

	VectorCopy (original, pmove.origin);
	VectorCopy (originalvel, pmove.velocity);

// move up a stair height
	VectorCopy (pmove.origin, dest);
	dest[2] += STEPSIZE;
	trace = PM_PlayerMove (pmove.origin, dest);
	if (!trace.startsolid && !trace.allsolid)
	{
		VectorCopy (trace.endpos, pmove.origin);
	}

// slide move
	PM_FlyMove ();

// press down the stepheight
	VectorCopy (pmove.origin, dest);
	dest[2] -= STEPSIZE;
	trace = PM_PlayerMove (pmove.origin, dest);
	if ( trace.plane.normal[2] < 0.7)
		goto usedown;
	if (!trace.startsolid && !trace.allsolid)
	{
		VectorCopy (trace.endpos, pmove.origin);
	}
	VectorCopy (pmove.origin, up);

	// decide which one went farther
	downdist = (down[0] - original[0])*(down[0] - original[0])
		+ (down[1] - original[1])*(down[1] - original[1]);
	updist = (up[0] - original[0])*(up[0] - original[0])
		+ (up[1] - original[1])*(up[1] - original[1]);

	if (downdist > updist)
	{
usedown:
		VectorCopy (down, pmove.origin);
		VectorCopy (downvel, pmove.velocity);
	} else // copy z value from slide move
		pmove.velocity[2] = downvel[2];

// if at a dead stop, retry the move with nudges to get around lips

}



/*
==================
PM_Friction

Handles both ground friction and water friction
==================
*/
void PM_Friction (void)
{
	float	*vel;
	float	speed, newspeed, control;
	float	friction;
	float	drop;
	vec3_t	start, stop;
	pmtrace_t		trace;
	
	if (pmove.waterjumptime)
		return;

	vel = pmove.velocity;
	
	speed = sqrt(vel[0]*vel[0] +vel[1]*vel[1] + vel[2]*vel[2]);
	if (speed < 1)
	{
		vel[0] = 0;
		vel[1] = 0;
		return;
	}

	friction = movevars.friction;

// if the leading edge is over a dropoff, increase friction
	if (onground != -1) {
		start[0] = stop[0] = pmove.origin[0] + vel[0]/speed*16;
		start[1] = stop[1] = pmove.origin[1] + vel[1]/speed*16;
		start[2] = pmove.origin[2] + player_mins[2];
		stop[2] = start[2] - 34;

		trace = PM_PlayerMove (start, stop);

		if (trace.fraction == 1) {
			friction *= 2;
		}
	}

	drop = 0;

	if (waterlevel >= 2) // apply water friction
		drop += speed*movevars.waterfriction*waterlevel*frametime;
	else if (onground != -1) // apply ground friction
	{
		control = speed < movevars.stopspeed ? movevars.stopspeed : speed;
		drop += control*friction*frametime;
	}


// scale the velocity
	newspeed = speed - drop;
	if (newspeed < 0)
		newspeed = 0;
	newspeed /= speed;

	vel[0] = vel[0] * newspeed;
	vel[1] = vel[1] * newspeed;
	vel[2] = vel[2] * newspeed;
}


/*
==============
PM_Accelerate
==============
*/
void PM_Accelerate (vec3_t wishdir, float wishspeed, float accel)
{
	int			i;
	float		addspeed, accelspeed, currentspeed;

	if (pmove.dead)
		return;
	if (pmove.waterjumptime)
		return;

	currentspeed = DotProduct (pmove.velocity, wishdir);
	addspeed = wishspeed - currentspeed;
	if (addspeed <= 0)
		return;
	accelspeed = accel*frametime*wishspeed;
	if (accelspeed > addspeed)
		accelspeed = addspeed;
	
	for (i=0 ; i<3 ; i++)
		pmove.velocity[i] += accelspeed*wishdir[i];	
}

void PM_AirAccelerate (vec3_t wishdir, float wishspeed, float accel)
{
	int			i;
	float		addspeed, accelspeed, currentspeed, wishspd = wishspeed;
		
	if (pmove.dead)
		return;
	if (pmove.waterjumptime)
		return;

	if (wishspd > 30)
		wishspd = 30;
	currentspeed = DotProduct (pmove.velocity, wishdir);
	addspeed = wishspd - currentspeed;
	if (addspeed <= 0)
		return;
	accelspeed = accel * wishspeed * frametime;
	if (accelspeed > addspeed)
		accelspeed = addspeed;
	
	for (i=0 ; i<3 ; i++)
		pmove.velocity[i] += accelspeed*wishdir[i];	
}



/*
===================
PM_WaterMove

===================
*/
void PM_WaterMove (void)
{
	int		i;
	vec3_t	wishvel;
	float	wishspeed;
	vec3_t	wishdir;
	vec3_t	start, dest;
	pmtrace_t	trace;

//
// user intentions
//
	for (i=0 ; i<3 ; i++)
		wishvel[i] = forward[i]*pmove.cmd.forwardmove + right[i]*pmove.cmd.sidemove;

	if (!pmove.cmd.forwardmove && !pmove.cmd.sidemove && !pmove.cmd.upmove)
		wishvel[2] -= 60;		// drift towards bottom
	else
		wishvel[2] += pmove.cmd.upmove;

	VectorCopy (wishvel, wishdir);
	wishspeed = VectorNormalize(wishdir);

	if (wishspeed > movevars.maxspeed)
	{
		VectorScale (wishvel, movevars.maxspeed/wishspeed, wishvel);
		wishspeed = movevars.maxspeed;
	}
	wishspeed *= 0.7;

//
// water acceleration
//
//	if (pmove.waterjumptime)
//		Con_Printf ("wm->%f, %f, %f\n", pmove.velocity[0], pmove.velocity[1], pmove.velocity[2]);
	PM_Accelerate (wishdir, wishspeed, movevars.wateraccelerate);

// assume it is a stair or a slope, so press down from stepheight above
	VectorMA (pmove.origin, frametime, pmove.velocity, dest);
	VectorCopy (dest, start);
	start[2] += STEPSIZE + 1;
	trace = PM_PlayerMove (start, dest);
	if (!trace.startsolid && !trace.allsolid)	// FIXME: check steep slope?
	{	// walked up the step
		VectorCopy (trace.endpos, pmove.origin);
		return;
	}
	
	PM_FlyMove ();
//	if (pmove.waterjumptime)
//		Con_Printf ("<-wm%f, %f, %f\n", pmove.velocity[0], pmove.velocity[1], pmove.velocity[2]);
}


/*
===================
PM_AirMove

===================
*/
void PM_AirMove (void)
{
	int			i;
	vec3_t		wishvel;
	float		fmove, smove;
	vec3_t		wishdir;
	float		wishspeed;

	fmove = pmove.cmd.forwardmove;
	smove = pmove.cmd.sidemove;
	
	forward[2] = 0;
	right[2] = 0;
	VectorNormalize (forward);
	VectorNormalize (right);

	for (i=0 ; i<2 ; i++)
		wishvel[i] = forward[i]*fmove + right[i]*smove;
	wishvel[2] = 0;

	VectorCopy (wishvel, wishdir);
	wishspeed = VectorNormalize(wishdir);

//
// clamp to server defined max speed
//
	if (wishspeed > movevars.maxspeed)
	{
		VectorScale (wishvel, movevars.maxspeed/wishspeed, wishvel);
		wishspeed = movevars.maxspeed;
	}
	
//	if (pmove.waterjumptime)
//		Con_Printf ("am->%f, %f, %f\n", pmove.velocity[0], pmove.velocity[1], pmove.velocity[2]);

	if ( onground != -1)
	{
		pmove.velocity[2] = 0;
		PM_Accelerate (wishdir, wishspeed, movevars.accelerate);
		pmove.velocity[2] -= movevars.entgravity * movevars.gravity * frametime;
		PM_GroundMove ();
	}
	else
	{	// not on ground, so little effect on velocity
		PM_AirAccelerate (wishdir, wishspeed, movevars.accelerate);

		// add gravity
		pmove.velocity[2] -= movevars.entgravity * movevars.gravity * frametime;

		PM_FlyMove ();

	}

//Con_Printf("airmove:vec: %4.2f %4.2f %4.2f\n",
//			pmove.velocity[0],
//			pmove.velocity[1],
//			pmove.velocity[2]);
//

//	if (pmove.waterjumptime)
//		Con_Printf ("<-am%f, %f, %f\n", pmove.velocity[0], pmove.velocity[1], pmove.velocity[2]);
}



/*
=============
PM_CatagorizePosition
=============
*/
void PM_CatagorizePosition (void)
{
	vec3_t		point;
	int			cont;
	pmtrace_t		tr;

// if the player hull point one unit down is solid, the player
// is on ground

// see if standing on something solid	
	point[0] = pmove.origin[0];
	point[1] = pmove.origin[1];
	point[2] = pmove.origin[2] - 1;
	if (pmove.velocity[2] > 180)
	{
		onground = -1;
	}
	else
	{
		tr = PM_PlayerMove (pmove.origin, point);
		if ( tr.plane.normal[2] < 0.7)
			onground = -1;	// too steep
		else
			onground = tr.ent;
		if (onground != -1)
		{
			pmove.waterjumptime = 0;
			if (!tr.startsolid && !tr.allsolid)
				VectorCopy (tr.endpos, pmove.origin);
		}

		// standing on an entity other than the world
		if (tr.ent > 0)
		{
			pmove.touchindex[pmove.numtouch] = tr.ent;
			pmove.numtouch++;
		}
	}

//
// get waterlevel
//
	waterlevel = 0;
	watertype = CONTENTS_EMPTY;

	point[2] = pmove.origin[2] + player_mins[2] + 1;	
	cont = PM_PointContents (point);

	if (cont <= CONTENTS_WATER)
	{
		watertype = cont;
		waterlevel = 1;
		point[2] = pmove.origin[2] + (player_mins[2] + player_maxs[2])*0.5;
		cont = PM_PointContents (point);
		if (cont <= CONTENTS_WATER)
		{
			waterlevel = 2;
			point[2] = pmove.origin[2] + 22;
			cont = PM_PointContents (point);
			if (cont <= CONTENTS_WATER)
				waterlevel = 3;
		}
	}
}


/*
=============
JumpButton
=============
*/
void JumpButton (void)
{
	if (pmove.dead)
	{
		pmove.oldbuttons |= BUTTON_JUMP;	// don't jump again until released
		return;
	}

	if (pmove.waterjumptime)
	{
		pmove.waterjumptime -= frametime;
		if (pmove.waterjumptime < 0)
			pmove.waterjumptime = 0;
		return;
	}

	if (waterlevel >= 2)
	{	// swimming, not jumping
		onground = -1;

		if (watertype == CONTENTS_WATER)
			pmove.velocity[2] = 100;
		else if (watertype == CONTENTS_SLIME)
			pmove.velocity[2] = 80;
		else
			pmove.velocity[2] = 50;
		return;
	}

	if (onground == -1)
		return;		// in air, so no effect

	if ( pmove.oldbuttons & BUTTON_JUMP )
		return;		// don't pogo stick

	onground = -1;
	pmove.velocity[2] += 270;

	pmove.oldbuttons |= BUTTON_JUMP;	// don't jump again until released
}

/*
=============
CheckWaterJump
=============
*/
void CheckWaterJump (void)
{
	vec3_t	spot;
	int		cont;
	vec3_t	flatforward;

	if (pmove.waterjumptime)
		return;

	// ZOID, don't hop out if we just jumped in
	if (pmove.velocity[2] < -180)
		return; // only hop out if we are moving up

	// see if near an edge
	flatforward[0] = forward[0];
	flatforward[1] = forward[1];
	flatforward[2] = 0;
	VectorNormalize (flatforward);

	VectorMA (pmove.origin, 24, flatforward, spot);
	spot[2] += 8;
	cont = PM_PointContents (spot);
	if (cont != CONTENTS_SOLID)
		return;
	spot[2] += 24;
	cont = PM_PointContents (spot);
	if (cont != CONTENTS_EMPTY)
		return;
	// jump out of water
	VectorScale (flatforward, 50, pmove.velocity);
	pmove.velocity[2] = 310;
	pmove.waterjumptime = 2;	// safety net
	pmove.oldbuttons |= BUTTON_JUMP;	// don't jump again until released
}

/*
=================
NudgePosition

If pmove.origin is in a solid position,
try nudging slightly on all axis to
allow for the cut precision of the net coordinates
=================
*/
void NudgePosition (void)
{
	vec3_t	base;
	int		x, y, z;
	int		i;
	static int		sign[3] = {0, -1, 1};

	VectorCopy (pmove.origin, base);

	for (i=0 ; i<3 ; i++)
		pmove.origin[i] = ((int)(pmove.origin[i]*8)) * 0.125;
//	pmove.origin[2] += 0.124;

//	if (pmove.dead)
//		return;		// might be a squished point, so don'y bother
//	if (PM_TestPlayerPosition (pmove.origin) )
//		return;

	for (z=0 ; z<=2 ; z++)
	{
		for (x=0 ; x<=2 ; x++)
		{
			for (y=0 ; y<=2 ; y++)
			{
				pmove.origin[0] = base[0] + (sign[x] * 1.0/8);
				pmove.origin[1] = base[1] + (sign[y] * 1.0/8);
				pmove.origin[2] = base[2] + (sign[z] * 1.0/8);
				if (PM_TestPlayerPosition (pmove.origin))
					return;
			}
		}
	}
	VectorCopy (base, pmove.origin);
//	Con_DPrintf ("NudgePosition: stuck\n");
}

/*
===============
SpectatorMove
===============
*/
void SpectatorMove (void)
{
	float	speed, drop, friction, control, newspeed, accel;
	float	currentspeed, addspeed, accelspeed;
	int			i;
	vec3_t		wishvel;
	float		fmove, smove;
	vec3_t		wishdir;
	float		wishspeed;
#ifndef SERVERONLY
	extern float	server_version;	// version of server we connected to
#endif

	// friction

	speed = Length (pmove.velocity);
	if (speed < 1)
	{
		VectorCopy (vec3_origin, pmove.velocity)
	}
	else
	{
		drop = 0;

		friction = movevars.friction*1.5;	// extra friction
		control = speed < movevars.stopspeed ? movevars.stopspeed : speed;
		drop += control*friction*frametime;

		// scale the velocity
		newspeed = speed - drop;
		if (newspeed < 0)
			newspeed = 0;
		newspeed /= speed;

		VectorScale (pmove.velocity, newspeed, pmove.velocity);
	}

	// accelerate
	fmove = pmove.cmd.forwardmove;
	smove = pmove.cmd.sidemove;
	
	VectorNormalize (forward);
	VectorNormalize (right);

	for (i=0 ; i<3 ; i++)
		wishvel[i] = forward[i]*fmove + right[i]*smove;
	wishvel[2] += pmove.cmd.upmove;

	VectorCopy (wishvel, wishdir);
	wishspeed = VectorNormalize(wishdir);

	//
	// clamp to server defined max speed
	//
	if (wishspeed > movevars.spectatormaxspeed)
	{
		VectorScale (wishvel, movevars.spectatormaxspeed/wishspeed, wishvel);
		wishspeed = movevars.spectatormaxspeed;
	}

	currentspeed = DotProduct(pmove.velocity, wishdir);
	addspeed = wishspeed - currentspeed;
	if (addspeed <= 0)
		return;
	accelspeed = movevars.accelerate*frametime*wishspeed;
	if (accelspeed > addspeed)
		accelspeed = addspeed;
	
	for (i=0 ; i<3 ; i++)
		pmove.velocity[i] += accelspeed*wishdir[i];	


	// move
	VectorMA (pmove.origin, frametime, pmove.velocity, pmove.origin);
}

/*
=============
PlayerMove

Returns with origin, angles, and velocity modified in place.

Numtouch and touchindex[] will be set if any of the physents
were contacted during the move.
=============
*/
void PlayerMove (void)
{
	frametime = pmove.cmd.msec * 0.001;
	pmove.numtouch = 0;

	AngleVectors (pmove.angles, forward, right, up);

	if (pmove.spectator)
	{
		SpectatorMove ();
		return;
	}

	NudgePosition ();

	// take angles directly from command
	VectorCopy (pmove.cmd.angles, pmove.angles);

	// set onground, watertype, and waterlevel
	PM_CatagorizePosition ();

	if (waterlevel == 2)
		CheckWaterJump ();

	if (pmove.velocity[2] < 0)
		pmove.waterjumptime = 0;

	if (pmove.cmd.buttons & BUTTON_JUMP)
		JumpButton ();
	else
		pmove.oldbuttons &= ~BUTTON_JUMP;

	PM_Friction ();

	if (waterlevel >= 2)
		PM_WaterMove ();
	else
		PM_AirMove ();

	// set onground, watertype, and waterlevel for final spot
	PM_CatagorizePosition ();
}
```
