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
description: "This file implements player movement prediction in QuakeWorld, a groundbreaking feature for multiplayer gaming."

summary:
  - point: "Introduces predictive movement to compensate for network latency"
    link: "https://en.wikipedia.org/wiki/QuakeWorld"
    link_label: "QuakeWorld"
  - point: "Uses interpolation and extrapolation techniques for smooth gameplay"
    link: "https://en.wikipedia.org/wiki/Interpolation"
    link_label: "Interpolation"
  - point: "Optimized for 1990s hardware constraints like limited CPU power"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"
  - point: "Inspired future multiplayer engines with predictive systems"
    link: "https://en.wikipedia.org/wiki/Source_engine"
    link_label: "Source Engine"

enhancements:
  - id: "foundation-cvars-and-initialization"
    line_start: 23
    line_end: 24
    title: "Foundation: Cvars and Initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/C_variable"
    image_url: ""
    image_caption: ""
    content: "This section defines two configuration variables (cvars), `cl_nopred` and `cl_pushlatency`, which control aspects of the game's prediction system. Cvars were a common feature in id Software games, allowing players and developers to tweak game behavior without recompiling the code. At the time, this approach was innovative, providing a flexible way to adapt to different hardware and network conditions. These variables are registered later in the file, enabling their use in debugging and optimization. This modular design influenced later engines like the Source Engine, which adopted similar systems for user-configurable settings."
  - id: "extern-view-frame"
    line_start: 26
    line_end: 26
    title: "Extern Declaration: Linking View Frame"
    wikipedia_url: "https://en.wikipedia.org/wiki/External_variable"
    image_url: ""
    image_caption: ""
    content: "The `extern` keyword declares a global variable `view_frame`, which links to the game's rendering system. This variable represents the current frame being rendered, connecting the prediction logic to the visual output. In the mid-1990s, managing global state across modules was a common practice due to the limited memory and processing power of hardware like the Intel 486. While this approach is less favored today due to maintainability concerns, it was crucial for performance in QuakeWorld, ensuring tight integration between gameplay and rendering."
  - id: "cl-nudge-position"
    line_start: 28
    line_end: 36
    title: "CL_NudgePosition: Handling Precision Errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floating_point"
    image_url: ""
    image_caption: ""
    content: "This function addresses precision errors caused by network transmission of player positions. If a player's position is detected as being inside a solid object, the function attempts to 'nudge' the position slightly along the X and Y axes to find a valid location. This workaround reflects the challenges of transmitting floating-point data over networks with limited precision. John Carmack and the id Software team were pioneers in solving such problems, ensuring smooth gameplay even under constrained conditions. This technique influenced later games that needed to handle similar precision issues in multiplayer environments."
  - id: "cl-predict-usercmd"
    line_start: 59
    line_end: 63
    title: "CL_PredictUsercmd: Splitting Long Moves"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dead_reckoning_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This function predicts player movement based on user commands (`usercmd_t`). It splits long moves into smaller segments to ensure accurate prediction and avoid errors caused by large time steps. The function uses dead reckoning principles to extrapolate player positions, a technique borrowed from military simulations and adapted for real-time gaming. By breaking down movement into manageable steps, the code ensures smooth transitions and minimizes discrepancies between client and server states. This approach became a cornerstone of multiplayer game design, influencing engines like Unreal Engine and Source."
  - id: "cl-predict-move"
    line_start: 107
    line_end: 111
    title: "CL_PredictMove: Interpolation and Extrapolation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interpolation"
    image_url: ""
    image_caption: ""
    content: "This function predicts player movement across multiple frames, interpolating between known states to provide smooth gameplay. It accounts for latency by rendering frames ahead of server updates, a technique that compensates for network delays. The interpolation logic ensures that even under high latency, players experience fluid motion. This innovation was critical for QuakeWorld's success in competitive multiplayer gaming, setting a standard for predictive systems in later engines. Developers like Valve and Epic Games studied these techniques, incorporating similar systems into their own multiplayer frameworks."
  - id: "cl-init-prediction"
    line_start: 215
    line_end: 219
    title: "CL_InitPrediction: Registering Prediction Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Configuration_file"
    image_url: ""
    image_caption: ""
    content: "This function registers the prediction-related cvars (`cl_pushlatency` and `cl_nopred`) with the game's configuration system. By doing so, it enables players and developers to modify prediction behavior dynamically. The modular design reflects id Software's commitment to flexibility and user control, a philosophy that resonated with the modding community. The ability to tweak prediction settings became a valuable tool for optimizing gameplay across diverse hardware and network conditions. This approach influenced later engines, which adopted similar systems for user-configurable settings and debugging."

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
