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
description: "This file implements player movement prediction in QuakeWorld, a groundbreaking feature for multiplayer gaming in the mid-1990s."

summary:
  - point: "Introduces client-side prediction to reduce latency effects in multiplayer gaming"
    link: "https://en.wikipedia.org/wiki/Client-side_prediction"
    link_label: "Client-side prediction"
  - point: "Handles movement interpolation for smoother gameplay"
    link: "https://en.wikipedia.org/wiki/Interpolation"
    link_label: "Interpolation"
  - point: "Optimizes for limited network bandwidth and high latency environments"
    link: "https://en.wikipedia.org/wiki/Latency_(engineering)"
    link_label: "Latency"
  - point: "Demonstrates advanced use of physics and networking concepts in game design"
    link: "https://en.wikipedia.org/wiki/Physics_engine"
    link_label: "Physics engine"
  - point: "Part of Quake's legacy as a pioneer in multiplayer FPS games"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"

enhancements:
  - id: "foundation-variables-for-prediction"
    line_start: 1
    line_end: 23
    title: "The Variables That Define Prediction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Variable_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section defines two key variables: `cl_nopred` and `cl_pushlatency`. These variables control whether prediction is enabled and adjust latency compensation, respectively. In 1996, multiplayer gaming faced significant challenges due to high latency and limited bandwidth. By allowing players to tweak these settings, id Software gave users some control over how their game handled network-induced delays. This was a novel approach at the time, as most games relied entirely on server-side calculations. These variables laid the groundwork for client-side prediction, a technique that would become standard in online gaming. Developers of later games like Counter-Strike and World of Warcraft borrowed heavily from these ideas to improve the responsiveness of their multiplayer experiences."
  - id: "cl-nudge-position-solid-check"
    line_start: 26
    line_end: 29
    title: "How Quake Handles Stuck Players"
    wikipedia_url: "https://en.wikipedia.org/wiki/Collision_detection"
    image_url: ""
    image_caption: ""
    content: "The `CL_NudgePosition` function attempts to resolve situations where a player's position ends up inside a solid object due to network precision errors. By nudging the player's position slightly along the X and Y axes, the function tries to find a valid, non-solid location. This was crucial for maintaining gameplay continuity in QuakeWorld, where network latency and packet loss could cause desynchronization between the server and client. At the time, collision detection was a challenging problem, especially in 3D environments. The solution here reflects id Software's pragmatic approach to game development: prioritize playability over perfect accuracy. This technique influenced later games that needed to handle similar edge cases in multiplayer scenarios, such as Unreal Tournament and Halo."
  - id: "split-long-moves-for-prediction"
    line_start: 30
    line_end: 57
    title: "Breaking Long Moves for Accuracy"
    wikipedia_url: "https://en.wikipedia.org/wiki/Client-side_prediction"
    image_url: ""
    image_caption: ""
    content: "The `CL_PredictUsercmd` function splits long movement commands into smaller segments to improve prediction accuracy. This ensures that even if a player issues a command with a long duration (e.g., holding a movement key for an extended period), the game can process it in smaller increments, reducing the risk of errors caused by network latency. This technique was essential for QuakeWorld's fast-paced gameplay, where precise movement was critical. By breaking commands into smaller pieces, id Software effectively mitigated the impact of latency on player actions. This approach became a cornerstone of client-side prediction, influencing games like Team Fortress and Overwatch, which rely on similar techniques to maintain smooth gameplay in high-latency environments."
  - id: "predict-move-interpolation"
    line_start: 61
    line_end: 103
    title: "Interpolating Movement for Smooth Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interpolation"
    image_url: ""
    image_caption: ""
    content: "The `CL_PredictMove` function interpolates player movement between frames to create a smoother gameplay experience. By calculating intermediate positions based on the player's velocity and the time elapsed, the function reduces the visual impact of latency and packet loss. This was a groundbreaking feature in 1996, as most games relied on server-side calculations that often resulted in jittery or delayed movement. The interpolation technique used here reflects id Software's commitment to delivering a seamless multiplayer experience, even on the limited hardware and networks of the era. This approach influenced the development of physics engines and networking code in later games, such as Half-Life and Battlefield, which built on these ideas to enhance their own multiplayer systems."
  - id: "init-prediction-variables"
    line_start: 109
    line_end: 212
    title: "Initializing Prediction Settings"
    wikipedia_url: "https://en.wikipedia.org/wiki/Initialization_(programming)"
    image_url: ""
    image_caption: ""
    content: "The `CL_InitPrediction` function registers the prediction-related variables (`cl_pushlatency` and `cl_nopred`) with the game's configuration system. This ensures that players can modify these settings through console commands or configuration files, giving them control over how the game handles latency and prediction. In the mid-1990s, this level of customization was rare in multiplayer games, which often provided little to no control over network-related settings. By exposing these variables, id Software empowered players to optimize their experience based on their specific hardware and network conditions. This philosophy of user empowerment influenced later games like Quake III Arena and Counter-Strike, which also provided extensive configuration options for advanced users."

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
