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
description: "This file from Quake's codebase showcases the groundbreaking player prediction system that enabled smooth multiplayer experiences in an era of high latency and limited hardware."

summary:
  - point: "Introduces player movement prediction to counteract network latency."
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Uses interpolation and extrapolation techniques for seamless gameplay."
    link: "https://en.wikipedia.org/wiki/Interpolation"
    link_label: "Interpolation"
  - point: "Demonstrates the constraints of 1990s networking and hardware."
    link: "https://en.wikipedia.org/wiki/History_of_the_Internet"
    link_label: "History of the Internet"

enhancements:
  - id: "foundation-initialization"
    line_start: 17
    line_end: 21
    title: "Setting the stage for prediction logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "These lines initialize key variables and include headers that define the foundational structures for Quake's prediction system. In 1996, multiplayer gaming was still in its infancy, and network latency posed significant challenges for real-time gameplay. By laying out these variables, the developers prepared the groundwork for a system that would predict player movements and actions, ensuring smoother gameplay even under adverse network conditions. This approach was revolutionary at the time and would influence the design of multiplayer systems for decades."
  - id: "extern-frame-pointer"
    line_start: 26
    line_end: 29
    title: "Connecting to the game's state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `extern` declaration connects this file to the broader game state, specifically the `view_frame` pointer. This linkage is crucial for accessing and manipulating the player's perspective and movement data. In the mid-1990s, modular programming was a key strategy for managing the complexity of large codebases like Quake's. By using external references, the developers ensured that prediction logic could seamlessly integrate with other parts of the game engine, such as rendering and physics."
  - id: "cl-nudge-position"
    line_start: 34
    line_end: 36
    title: "Handling precision issues in movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CL_NudgePosition` function addresses a subtle but critical issue: the precision of network coordinates. Multiplayer games often suffer from inaccuracies due to rounding or truncation during data transmission. This function attempts to 'nudge' the player's position slightly to avoid getting stuck in solid geometry. In the 1990s, such problems were common due to limited bandwidth and the lack of floating-point precision in network protocols. This workaround reflects the ingenuity required to deliver a playable experience despite technical constraints."
  - id: "predict-user-command"
    line_start: 61
    line_end: 63
    title: "Predicting player actions in real time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CL_PredictUsercmd` function is the heart of Quake's prediction system. It takes the player's current state, input commands, and other parameters to simulate their next state. This technique was groundbreaking in 1996, as it allowed the game to compensate for network latency by predicting where players would be and what they would do. John Carmack and Michael Abrash, the architects of Quake's engine, were deeply influenced by their backgrounds in graphics programming and optimization, leading to this innovative solution. The concept of client-side prediction would become a standard in multiplayer game design."
  - id: "predict-move"
    line_start: 109
    line_end: 111
    title: "Simulating movement across frames"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CL_PredictMove` function builds upon the user command prediction by simulating movement across multiple frames. This ensures that the player's position and velocity are accurately represented, even when network updates are delayed. In the mid-1990s, the average internet connection was slow and unreliable, making such predictive techniques essential for maintaining gameplay fluidity. The developers at id Software were pioneers in addressing these challenges, setting a precedent for future multiplayer games."
  - id: "init-prediction"
    line_start: 217
    line_end: 219
    title: "Initializing prediction variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CL_InitPrediction` function registers key variables like `cl_pushlatency` and `cl_nopred`, which control the behavior of the prediction system. This initialization step is crucial for ensuring that the system operates correctly and can be adjusted based on network conditions. In 1996, such configurability was a hallmark of id Software's approach to game development, allowing players and server administrators to tweak settings for optimal performance. This flexibility contributed to Quake's enduring popularity and its status as a benchmark for multiplayer gaming."

---

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
