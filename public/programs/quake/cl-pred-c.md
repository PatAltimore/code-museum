---
title: "cl_pred.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/cl_pred.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/cl_pred.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "cl-pred-c"
order: 23
description: "This file implements player movement prediction in QuakeWorld, a groundbreaking multiplayer extension of Quake."

summary:
  - point: "Introduces predictive movement to compensate for network latency."
    link: "https://en.wikipedia.org/wiki/QuakeWorld"
    link_label: "QuakeWorld"
  - point: "Uses interpolation and extrapolation techniques for smooth gameplay."
    link: "https://en.wikipedia.org/wiki/Interpolation"
    link_label: "Interpolation"
  - point: "Optimized for the hardware constraints of 1996, including x86 processors."
    link: "https://en.wikipedia.org/wiki/X86"
    link_label: "x86 architecture"
  - point: "Demonstrates early solutions to multiplayer synchronization challenges."
    link: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    link_label: "Multiplayer video games"
  - point: "Laid groundwork for predictive systems in modern online games."
    link: "https://en.wikipedia.org/wiki/Latency_(engineering)"
    link_label: "Latency"

enhancements:
  - id: "cl-nudge-position-solid-position-fix"
    line_start: 28
    line_end: 57
    title: "The Trick That Unstuck Players in Walls"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake"
    image_url: ""
    image_caption: ""
    content: "The `CL_NudgePosition` function addresses a subtle but critical problem: ensuring player positions don't end up inside solid objects due to precision errors in networked coordinates. It attempts to 'nudge' the player's position slightly along all axes to find a valid, non-solid location. This was necessary because QuakeWorld's multiplayer relied on transmitting player positions over networks with limited precision, leading to occasional inaccuracies. At the time, network latency and packet loss were common issues, and this function reflects id Software's commitment to maintaining gameplay fluidity despite these constraints. In 1996, multiplayer gaming was still in its infancy, and QuakeWorld was pioneering techniques to make online play feasible. John Carmack and Michael Abrash, both renowned for their optimization skills, were deeply involved in solving these technical challenges. The idea of nudging positions was likely inspired by similar techniques used in collision detection algorithms, but its application to network precision errors was innovative. This approach influenced later games that faced similar challenges in synchronizing player states across unreliable networks. The concept of 'nudging' or adjusting positions to account for inaccuracies became a standard practice in multiplayer engines, including those used in Unreal Tournament and Counter-Strike. Today, this principle underlies many modern game engines' handling of networked player states, ensuring smooth and immersive experiences even in high-latency environments."
  - id: "cl-predict-usercmd-splitting-long-moves"
    line_start: 59
    line_end: 103
    title: "How Quake Predicted Your Next Move"
    wikipedia_url: "https://en.wikipedia.org/wiki/QuakeWorld"
    image_url: ""
    image_caption: ""
    content: "`CL_PredictUsercmd` is the heart of QuakeWorld's movement prediction system. It takes the player's current state, a user command (such as movement or turning), and simulates the resulting state. If the command's duration exceeds a threshold, the function splits it into smaller segments to ensure precision. This technique was crucial for handling network latency, which could cause delays between player input and server acknowledgment. In the mid-1990s, online multiplayer games were grappling with the limitations of dial-up internet connections. Latency often exceeded 200 milliseconds, making real-time gameplay challenging. John Carmack and his team devised predictive algorithms to simulate player actions locally, allowing for smoother gameplay even when network conditions were poor. This function reflects their innovative approach to solving latency issues. The predictive movement system introduced in QuakeWorld became a cornerstone of multiplayer game design. It inspired similar systems in games like Half-Life and its multiplayer mod Counter-Strike, which relied on prediction to maintain responsiveness. Today, predictive algorithms are ubiquitous in online gaming, from first-person shooters to racing games, ensuring that players experience seamless interactions despite varying network conditions."
  - id: "cl-predict-move-interpolation-and-latency"
    line_start: 107
    line_end: 212
    title: "The Algorithm That Smoothed Online Play"
    wikipedia_url: "https://en.wikipedia.org/wiki/QuakeWorld"
    image_url: ""
    image_caption: ""
    content: "`CL_PredictMove` is a sophisticated function that combines prediction and interpolation to render smooth player movement in QuakeWorld. It calculates the current game time based on latency and extrapolates player states forward until the predicted time matches the server's last known state. If discrepancies arise, it interpolates between the last two valid states to avoid sudden jumps or 'teleportation.' In 1996, multiplayer games were plagued by jittery movement and synchronization issues due to high latency and packet loss. QuakeWorld's predictive system was a groundbreaking solution, allowing players to experience fluid motion even when network conditions were less than ideal. Carmack and Abrash's work on this system demonstrated their deep understanding of both hardware limitations and player psychology; smooth gameplay was essential to immersion. This interpolation technique influenced countless multiplayer games that followed. Titles like Unreal Tournament and Battlefield adopted similar methods to handle latency gracefully. The concept of blending states to avoid abrupt changes is now standard in game engines, ensuring that players perceive consistent and realistic motion in online environments."
  - id: "cl-init-prediction-registering-variables"
    line_start: 215
    line_end: 224
    title: "The Setup Behind Predictive Movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/QuakeWorld"
    image_url: ""
    image_caption: ""
    content: "`CL_InitPrediction` initializes the variables necessary for QuakeWorld's predictive movement system. It registers `cl_pushlatency` and `cl_nopred`, which control latency compensation and enable or disable prediction, respectively. These variables give players and developers fine-grained control over the prediction system, allowing adjustments based on network conditions. In the mid-1990s, customization was a hallmark of PC gaming. id Software embraced this ethos by exposing internal mechanics like prediction to players through console commands and variables. This openness not only empowered players to optimize their experience but also fostered a culture of modding and experimentation. The ability to tweak prediction settings influenced later games that offered similar customization options. Developers of games like Team Fortress and Quake III Arena built on this idea, providing players with tools to adapt gameplay to their preferences. Today, exposing internal mechanics through developer consoles or configuration files remains a staple of PC gaming, a legacy of id Software's pioneering work."

---

```cpp
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
#include "winquake.h"

cvar_t	cl_nopred = {"cl_nopred","0"};
cvar_t	cl_pushlatency = {"pushlatency","-999"};

extern	frame_t		*view_frame;

/*
=================
CL_NudgePosition

If pmove.origin is in a solid position,
try nudging slightly on all axis to
allow for the cut precision of the net coordinates
=================
*/
void CL_NudgePosition (void)
{
	vec3_t	base;
	int		x, y;

	if (PM_HullPointContents (&cl.model_precache[1]->hulls[1], 0, pmove.origin) == CONTENTS_EMPTY)
		return;

	VectorCopy (pmove.origin, base);
	for (x=-1 ; x<=1 ; x++)
	{
		for (y=-1 ; y<=1 ; y++)
		{
			pmove.origin[0] = base[0] + x * 1.0/8;
			pmove.origin[1] = base[1] + y * 1.0/8;
			if (PM_HullPointContents (&cl.model_precache[1]->hulls[1], 0, pmove.origin) == CONTENTS_EMPTY)
				return;
		}
	}
	Con_DPrintf ("CL_NudgePosition: stuck\n");
}

/*
==============
CL_PredictUsercmd
==============
*/
void CL_PredictUsercmd (player_state_t *from, player_state_t *to, usercmd_t *u, qboolean spectator)
{
	// split up very long moves
	if (u->msec > 50)
	{
		player_state_t	temp;
		usercmd_t	split;

		split = *u;
		split.msec /= 2;

		CL_PredictUsercmd (from, &temp, &split, spectator);
		CL_PredictUsercmd (&temp, to, &split, spectator);
		return;
	}

	VectorCopy (from->origin, pmove.origin);
//	VectorCopy (from->viewangles, pmove.angles);
	VectorCopy (u->angles, pmove.angles);
	VectorCopy (from->velocity, pmove.velocity);

	pmove.oldbuttons = from->oldbuttons;
	pmove.waterjumptime = from->waterjumptime;
	pmove.dead = cl.stats[STAT_HEALTH] <= 0;
	pmove.spectator = spectator;

	pmove.cmd = *u;

	PlayerMove ();
//for (i=0 ; i<3 ; i++)
//pmove.origin[i] = ((int)(pmove.origin[i]*8))*0.125;
	to->waterjumptime = pmove.waterjumptime;
	to->oldbuttons = pmove.cmd.buttons;
	VectorCopy (pmove.origin, to->origin);
	VectorCopy (pmove.angles, to->viewangles);
	VectorCopy (pmove.velocity, to->velocity);
	to->onground = onground;

	to->weaponframe = from->weaponframe;
}



/*
==============
CL_PredictMove
==============
*/
void CL_PredictMove (void)
{
	int			i;
	float		f;
	frame_t		*from, *to = NULL;
	int			oldphysent;

	if (cl_pushlatency.value > 0)
		Cvar_Set ("pushlatency", "0");

	if (cl.paused)
		return;

	cl.time = realtime - cls.latency - cl_pushlatency.value*0.001;
	if (cl.time > realtime)
		cl.time = realtime;

	if (cl.intermission)
		return;

	if (!cl.validsequence)
		return;

	if (cls.netchan.outgoing_sequence - cls.netchan.incoming_sequence >= UPDATE_BACKUP-1)
		return;

	VectorCopy (cl.viewangles, cl.simangles);

	// this is the last frame received from the server
	from = &cl.frames[cls.netchan.incoming_sequence & UPDATE_MASK];

	// we can now render a frame
	if (cls.state == ca_onserver)
	{	// first update is the final signon stage
		char		text[1024];

		cls.state = ca_active;
		sprintf (text, "QuakeWorld: %s", cls.servername);
#ifdef _WIN32
		SetWindowText (mainwindow, text);
#endif
	}

	if (cl_nopred.value)
	{
		VectorCopy (from->playerstate[cl.playernum].velocity, cl.simvel);
		VectorCopy (from->playerstate[cl.playernum].origin, cl.simorg);
		return;
	}

	// predict forward until cl.time <= to->senttime
	oldphysent = pmove.numphysent;
	CL_SetSolidPlayers (cl.playernum);

//	to = &cl.frames[cls.netchan.incoming_sequence & UPDATE_MASK];

	for (i=1 ; i<UPDATE_BACKUP-1 && cls.netchan.incoming_sequence+i <
			cls.netchan.outgoing_sequence; i++)
	{
		to = &cl.frames[(cls.netchan.incoming_sequence+i) & UPDATE_MASK];
		CL_PredictUsercmd (&from->playerstate[cl.playernum]
			, &to->playerstate[cl.playernum], &to->cmd, cl.spectator);
		if (to->senttime >= cl.time)
			break;
		from = to;
	}

	pmove.numphysent = oldphysent;

	if (i == UPDATE_BACKUP-1 || !to)
		return;		// net hasn't deliver packets in a long time...

	// now interpolate some fraction of the final frame
	if (to->senttime == from->senttime)
		f = 0;
	else
	{
		f = (cl.time - from->senttime) / (to->senttime - from->senttime);

		if (f < 0)
			f = 0;
		if (f > 1)
			f = 1;
	}

	for (i=0 ; i<3 ; i++)
		if ( fabs(from->playerstate[cl.playernum].origin[i] - to->playerstate[cl.playernum].origin[i]) > 128)
		{	// teleported, so don't lerp
			VectorCopy (to->playerstate[cl.playernum].velocity, cl.simvel);
			VectorCopy (to->playerstate[cl.playernum].origin, cl.simorg);
			return;
		}
		
	for (i=0 ; i<3 ; i++)
	{
		cl.simorg[i] = from->playerstate[cl.playernum].origin[i] 
			+ f*(to->playerstate[cl.playernum].origin[i] - from->playerstate[cl.playernum].origin[i]);
		cl.simvel[i] = from->playerstate[cl.playernum].velocity[i] 
			+ f*(to->playerstate[cl.playernum].velocity[i] - from->playerstate[cl.playernum].velocity[i]);
	}		
}


/*
==============
CL_InitPrediction
==============
*/
void CL_InitPrediction (void)
{
	Cvar_RegisterVariable (&cl_pushlatency);
	Cvar_RegisterVariable (&cl_nopred);
}

```