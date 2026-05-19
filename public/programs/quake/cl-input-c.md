---
title: "cl_input.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/cl_input.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/cl_input.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "cl-input-c"
order: 18
description: "This file implements Quake's client-side input handling, showcasing innovations in real-time multiplayer gaming and player control."

summary:
  - point: "Innovative edge-triggered input tracking for multiplayer gaming"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Efficient encoding of movement commands for network transmission"
    link: "https://en.wikipedia.org/wiki/Client-server_model"
    link_label: "Client-server model"
  - point: "Support for multiple simultaneous input sources (keyboard, mouse)"
    link: "https://en.wikipedia.org/wiki/Input_device"
    link_label: "Input device"
  - point: "Angle adjustment and movement scaling based on player speed"
    link: "https://en.wikipedia.org/wiki/First-person_shooter"
    link_label: "First-person shooter"
  - point: "Command registration system for binding player actions"
    link: "https://en.wikipedia.org/wiki/Command_pattern"
    link_label: "Command pattern"

enhancements:
  - id: "key-button-state-tracking"
    line_start: 26
    line_end: 45
    title: "Tracking button states with edge triggers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input_device"
    image_url: ""
    image_caption: ""
    content: "This section introduces `kbutton_t` structures to track the state of input buttons, such as movement or attack commands. Each button's state is represented by three bits: current state, edge-triggered down transition, and edge-triggered up transition. This design allows Quake to handle complex input scenarios, such as multiple sources (keyboard and mouse) controlling the same button. In 1996, this was a groundbreaking approach to input handling in games, ensuring precise and responsive controls in multiplayer environments. By tracking transitions, Quake could differentiate between continuous presses and momentary impulses, which was critical for real-time gameplay. This technique influenced later games and engines, including Unreal Engine and Source Engine, which adopted similar mechanisms for input management."
  - id: "key-down-handler"
    line_start: 57
    line_end: 84
    title: "Handling key presses with impulse tracking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `KeyDown` function processes key press events, updating the `kbutton_t` structure to reflect the button's state. It ensures that repeated presses of the same key do not overwrite existing states and handles edge cases like simultaneous presses from multiple input sources. The function also sets the impulse down flag, signaling that the button was pressed during this frame. This approach was designed to handle the fast-paced input demands of Quake's multiplayer gameplay, where responsiveness and accuracy were paramount. John Carmack and Michael Abrash developed these systems to optimize player control under the constraints of 1990s hardware, such as 486 and Pentium processors. The concept of impulse tracking became a standard in game development, influencing input systems in modern engines like Unity and Unreal."
  - id: "key-up-handler"
    line_start: 86
    line_end: 114
    title: "Releasing keys and clearing impulses"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `KeyUp` function handles key release events, updating the `kbutton_t` structure to clear the button's state and set the impulse up flag. It accounts for scenarios where a key is released without a corresponding press, such as menu navigation or manual console input. This ensures that the game's input state remains consistent and avoids unintended behavior. The function also clears all states if the release event is manually typed, demonstrating the flexibility of Quake's input system. This level of detail in input handling was critical for the game's success in competitive multiplayer environments, where precise control could determine the outcome of matches. The techniques developed here influenced later games, such as Counter-Strike and Team Fortress, which required similarly robust input systems."
  - id: "movement-speed-and-angle-adjustments"
    line_start: 230
    line_end: 273
    title: "Adjusting angles and movement speed"
    wikipedia_url: "https://en.wikipedia.org/wiki/First-person_shooter"
    image_url: ""
    image_caption: ""
    content: "The `CL_AdjustAngles` function modifies the player's view angles based on input states and speed settings. It accounts for strafe movements, pitch adjustments, and speed scaling, ensuring smooth and responsive controls. This function also clamps the pitch and roll angles to prevent unnatural camera behavior, such as excessive tilting. By incorporating speed modifiers, Quake allowed players to perform actions like sprinting or precision aiming, enhancing the gameplay experience. In the mid-1990s, these features were rare in first-person shooters, making Quake a pioneer in player control mechanics. The angle adjustment system inspired similar implementations in later games, such as Half-Life and Call of Duty, which refined the concept to suit their gameplay styles."
  - id: "base-movement-command"
    line_start: 281
    line_end: 316
    title: "Building movement commands for the server"
    wikipedia_url: "https://en.wikipedia.org/wiki/Client-server_model"
    image_url: ""
    image_caption: ""
    content: "The `CL_BaseMove` function constructs a movement command (`usercmd_t`) based on the player's input states. It adjusts angles, calculates movement vectors, and applies speed modifiers, ensuring that the command accurately represents the player's intentions. This command is then sent to the server for processing, enabling real-time multiplayer gameplay. The function's design reflects the constraints of the client-server model, where minimizing data transmission while preserving gameplay accuracy was critical. Quake's efficient encoding of movement commands set a standard for multiplayer games, influencing titles like Unreal Tournament and Battlefield, which adopted similar techniques to optimize network performance."
  - id: "command-registration-system"
    line_start: 483
    line_end: 523
    title: "Binding player actions to commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command_pattern"
    image_url: ""
    image_caption: ""
    content: "The `CL_InitInput` function registers commands for player actions, such as movement, attack, and jump. Each command is bound to a corresponding function, allowing players to customize their controls through the console. This system demonstrates the flexibility of Quake's input handling, accommodating diverse playstyles and hardware configurations. The command registration approach reflects the influence of the command pattern, a software design principle that promotes modularity and reusability. By enabling players to bind actions to keys or buttons, Quake set a precedent for user-configurable controls, which became a standard feature in modern games and engines."

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
// cl.input.c  -- builds an intended movement command to send to the server

#include "quakedef.h"

cvar_t	cl_nodelta = {"cl_nodelta","0"};

/*
===============================================================================

KEY BUTTONS

Continuous button event tracking is complicated by the fact that two different
input sources (say, mouse button 1 and the control key) can both press the
same button, but the button should only be released when both of the
pressing key have been released.

When a key event issues a button command (+forward, +attack, etc), it appends
its key number as a parameter to the command so it can be matched up with
the release.

state bit 0 is the current state of the key
state bit 1 is edge triggered on the up to down transition
state bit 2 is edge triggered on the down to up transition

===============================================================================
*/


kbutton_t	in_mlook, in_klook;
kbutton_t	in_left, in_right, in_forward, in_back;
kbutton_t	in_lookup, in_lookdown, in_moveleft, in_moveright;
kbutton_t	in_strafe, in_speed, in_use, in_jump, in_attack;
kbutton_t	in_up, in_down;

int			in_impulse;


void KeyDown (kbutton_t *b)
{
	int		k;
	char	*c;
	
	c = Cmd_Argv(1);
	if (c[0])
		k = atoi(c);
	else
		k = -1;		// typed manually at the console for continuous down

	if (k == b->down[0] || k == b->down[1])
		return;		// repeating key
	
	if (!b->down[0])
		b->down[0] = k;
	else if (!b->down[1])
		b->down[1] = k;
	else
	{
		Con_Printf ("Three keys down for a button!\n");
		return;
	}
	
	if (b->state & 1)
		return;		// still down
	b->state |= 1 + 2;	// down + impulse down
}

void KeyUp (kbutton_t *b)
{
	int		k;
	char	*c;
	
	c = Cmd_Argv(1);
	if (c[0])
		k = atoi(c);
	else
	{ // typed manually at the console, assume for unsticking, so clear all
		b->down[0] = b->down[1] = 0;
		b->state = 4;	// impulse up
		return;
	}

	if (b->down[0] == k)
		b->down[0] = 0;
	else if (b->down[1] == k)
		b->down[1] = 0;
	else
		return;		// key up without coresponding down (menu pass through)
	if (b->down[0] || b->down[1])
		return;		// some other key is still holding it down

	if (!(b->state & 1))
		return;		// still up (this should not happen)
	b->state &= ~1;		// now up
	b->state |= 4; 		// impulse up
}

void IN_KLookDown (void) {KeyDown(&in_klook);}
void IN_KLookUp (void) {KeyUp(&in_klook);}
void IN_MLookDown (void) {KeyDown(&in_mlook);}
void IN_MLookUp (void) {
KeyUp(&in_mlook);
if ( !(in_mlook.state&1) &&  lookspring.value)
	V_StartPitchDrift();
}
void IN_UpDown(void) {KeyDown(&in_up);}
void IN_UpUp(void) {KeyUp(&in_up);}
void IN_DownDown(void) {KeyDown(&in_down);}
void IN_DownUp(void) {KeyUp(&in_down);}
void IN_LeftDown(void) {KeyDown(&in_left);}
void IN_LeftUp(void) {KeyUp(&in_left);}
void IN_RightDown(void) {KeyDown(&in_right);}
void IN_RightUp(void) {KeyUp(&in_right);}
void IN_ForwardDown(void) {KeyDown(&in_forward);}
void IN_ForwardUp(void) {KeyUp(&in_forward);}
void IN_BackDown(void) {KeyDown(&in_back);}
void IN_BackUp(void) {KeyUp(&in_back);}
void IN_LookupDown(void) {KeyDown(&in_lookup);}
void IN_LookupUp(void) {KeyUp(&in_lookup);}
void IN_LookdownDown(void) {KeyDown(&in_lookdown);}
void IN_LookdownUp(void) {KeyUp(&in_lookdown);}
void IN_MoveleftDown(void) {KeyDown(&in_moveleft);}
void IN_MoveleftUp(void) {KeyUp(&in_moveleft);}
void IN_MoverightDown(void) {KeyDown(&in_moveright);}
void IN_MoverightUp(void) {KeyUp(&in_moveright);}

void IN_SpeedDown(void) {KeyDown(&in_speed);}
void IN_SpeedUp(void) {KeyUp(&in_speed);}
void IN_StrafeDown(void) {KeyDown(&in_strafe);}
void IN_StrafeUp(void) {KeyUp(&in_strafe);}

void IN_AttackDown(void) {KeyDown(&in_attack);}
void IN_AttackUp(void) {KeyUp(&in_attack);}

void IN_UseDown (void) {KeyDown(&in_use);}
void IN_UseUp (void) {KeyUp(&in_use);}
void IN_JumpDown (void) {KeyDown(&in_jump);}
void IN_JumpUp (void) {KeyUp(&in_jump);}

void IN_Impulse (void) {in_impulse=Q_atoi(Cmd_Argv(1));}

/*
===============
CL_KeyState

Returns 0.25 if a key was pressed and released during the frame,
0.5 if it was pressed and held
0 if held then released, and
1.0 if held for the entire time
===============
*/
float CL_KeyState (kbutton_t *key)
{
	float		val;
	qboolean	impulsedown, impulseup, down;
	
	impulsedown = key->state & 2;
	impulseup = key->state & 4;
	down = key->state & 1;
	val = 0;
	
	if (impulsedown && !impulseup)
		if (down)
			val = 0.5;	// pressed and held this frame
		else
			val = 0;	//	I_Error ();
	if (impulseup && !impulsedown)
		if (down)
			val = 0;	//	I_Error ();
		else
			val = 0;	// released this frame
	if (!impulsedown && !impulseup)
		if (down)
			val = 1.0;	// held the entire frame
		else
			val = 0;	// up the entire frame
	if (impulsedown && impulseup)
		if (down)
			val = 0.75;	// released and re-pressed this frame
		else
			val = 0.25;	// pressed and released this frame

	key->state &= 1;		// clear impulses
	
	return val;
}




//==========================================================================

cvar_t	cl_upspeed = {"cl_upspeed","200"};
cvar_t	cl_forwardspeed = {"cl_forwardspeed","200", true};
cvar_t	cl_backspeed = {"cl_backspeed","200", true};
cvar_t	cl_sidespeed = {"cl_sidespeed","350"};

cvar_t	cl_movespeedkey = {"cl_movespeedkey","2.0"};

cvar_t	cl_yawspeed = {"cl_yawspeed","140"};
cvar_t	cl_pitchspeed = {"cl_pitchspeed","150"};

cvar_t	cl_anglespeedkey = {"cl_anglespeedkey","1.5"};


/*
================
CL_AdjustAngles

Moves the local angle positions
================
*/
void CL_AdjustAngles (void)
{
	float	speed;
	float	up, down;
	
	if (in_speed.state & 1)
		speed = host_frametime * cl_anglespeedkey.value;
	else
		speed = host_frametime;

	if (!(in_strafe.state & 1))
	{
		cl.viewangles[YAW] -= speed*cl_yawspeed.value*CL_KeyState (&in_right);
		cl.viewangles[YAW] += speed*cl_yawspeed.value*CL_KeyState (&in_left);
		cl.viewangles[YAW] = anglemod(cl.viewangles[YAW]);
	}
	if (in_klook.state & 1)
	{
		V_StopPitchDrift ();
		cl.viewangles[PITCH] -= speed*cl_pitchspeed.value * CL_KeyState (&in_forward);
		cl.viewangles[PITCH] += speed*cl_pitchspeed.value * CL_KeyState (&in_back);
	}
	
	up = CL_KeyState (&in_lookup);
	down = CL_KeyState(&in_lookdown);
	
	cl.viewangles[PITCH] -= speed*cl_pitchspeed.value * up;
	cl.viewangles[PITCH] += speed*cl_pitchspeed.value * down;

	if (up || down)
		V_StopPitchDrift ();
		
	if (cl.viewangles[PITCH] > 80)
		cl.viewangles[PITCH] = 80;
	if (cl.viewangles[PITCH] < -70)
		cl.viewangles[PITCH] = -70;

	if (cl.viewangles[ROLL] > 50)
		cl.viewangles[ROLL] = 50;
	if (cl.viewangles[ROLL] < -50)
		cl.viewangles[ROLL] = -50;
		
}

/*
================
CL_BaseMove

Send the intended movement message to the server
================
*/
void CL_BaseMove (usercmd_t *cmd)
{	
	CL_AdjustAngles ();
	
	memset (cmd, 0, sizeof(*cmd));
	
	VectorCopy (cl.viewangles, cmd->angles);
	if (in_strafe.state & 1)
	{
		cmd->sidemove += cl_sidespeed.value * CL_KeyState (&in_right);
		cmd->sidemove -= cl_sidespeed.value * CL_KeyState (&in_left);
	}

	cmd->sidemove += cl_sidespeed.value * CL_KeyState (&in_moveright);
	cmd->sidemove -= cl_sidespeed.value * CL_KeyState (&in_moveleft);

	cmd->upmove += cl_upspeed.value * CL_KeyState (&in_up);
	cmd->upmove -= cl_upspeed.value * CL_KeyState (&in_down);

	if (! (in_klook.state & 1) )
	{	
		cmd->forwardmove += cl_forwardspeed.value * CL_KeyState (&in_forward);
		cmd->forwardmove -= cl_backspeed.value * CL_KeyState (&in_back);
	}	

//
// adjust for speed key
//
	if (in_speed.state & 1)
	{
		cmd->forwardmove *= cl_movespeedkey.value;
		cmd->sidemove *= cl_movespeedkey.value;
		cmd->upmove *= cl_movespeedkey.value;
	}	
}

int MakeChar (int i)
{
	i &= ~3;
	if (i < -127*4)
		i = -127*4;
	if (i > 127*4)
		i = 127*4;
	return i;
}

/*
==============
CL_FinishMove
==============
*/
void CL_FinishMove (usercmd_t *cmd)
{
	int		i;
	int		ms;

//
// allways dump the first two message, because it may contain leftover inputs
// from the last level
//
	if (++cl.movemessages <= 2)
		return;
//
// figure button bits
//	
	if ( in_attack.state & 3 )
		cmd->buttons |= 1;
	in_attack.state &= ~2;
	
	if (in_jump.state & 3)
		cmd->buttons |= 2;
	in_jump.state &= ~2;

	// send milliseconds of time to apply the move
	ms = host_frametime * 1000;
	if (ms > 250)
		ms = 100;		// time was unreasonable
	cmd->msec = ms;

	VectorCopy (cl.viewangles, cmd->angles);

	cmd->impulse = in_impulse;
	in_impulse = 0;


//
// chop down so no extra bits are kept that the server wouldn't get
//
	cmd->forwardmove = MakeChar (cmd->forwardmove);
	cmd->sidemove = MakeChar (cmd->sidemove);
	cmd->upmove = MakeChar (cmd->upmove);

	for (i=0 ; i<3 ; i++)
		cmd->angles[i] = ((int)(cmd->angles[i]*65536.0/360)&65535) * (360.0/65536.0);
}

/*
=================
CL_SendCmd
=================
*/
void CL_SendCmd (void)
{
	sizebuf_t	buf;
	byte		data[128];
	int			i;
	usercmd_t	*cmd, *oldcmd;
	int			checksumIndex;
	int			lost;
	int			seq_hash;

	if (cls.demoplayback)
		return; // sendcmds come from the demo

	// save this command off for prediction
	i = cls.netchan.outgoing_sequence & UPDATE_MASK;
	cmd = &cl.frames[i].cmd;
	cl.frames[i].senttime = realtime;
	cl.frames[i].receivedtime = -1;		// we haven't gotten a reply yet

//	seq_hash = (cls.netchan.outgoing_sequence & 0xffff) ; // ^ QW_CHECK_HASH;
	seq_hash = cls.netchan.outgoing_sequence;

	// get basic movement from keyboard
	CL_BaseMove (cmd);

	// allow mice or other external controllers to add to the move
	IN_Move (cmd);

	// if we are spectator, try autocam
	if (cl.spectator)
		Cam_Track(cmd);

	CL_FinishMove(cmd);

	Cam_FinishMove(cmd);

// send this and the previous cmds in the message, so
// if the last packet was dropped, it can be recovered
	buf.maxsize = 128;
	buf.cursize = 0;
	buf.data = data;

	MSG_WriteByte (&buf, clc_move);

	// save the position for a checksum byte
	checksumIndex = buf.cursize;
	MSG_WriteByte (&buf, 0);

	// write our lossage percentage
	lost = CL_CalcNet();
	MSG_WriteByte (&buf, (byte)lost);

	i = (cls.netchan.outgoing_sequence-2) & UPDATE_MASK;
	cmd = &cl.frames[i].cmd;
	MSG_WriteDeltaUsercmd (&buf, &nullcmd, cmd);
	oldcmd = cmd;

	i = (cls.netchan.outgoing_sequence-1) & UPDATE_MASK;
	cmd = &cl.frames[i].cmd;
	MSG_WriteDeltaUsercmd (&buf, oldcmd, cmd);
	oldcmd = cmd;

	i = (cls.netchan.outgoing_sequence) & UPDATE_MASK;
	cmd = &cl.frames[i].cmd;
	MSG_WriteDeltaUsercmd (&buf, oldcmd, cmd);

	// calculate a checksum over the move commands
	buf.data[checksumIndex] = COM_BlockSequenceCRCByte(
		buf.data + checksumIndex + 1, buf.cursize - checksumIndex - 1,
		seq_hash);

	// request delta compression of entities
	if (cls.netchan.outgoing_sequence - cl.validsequence >= UPDATE_BACKUP-1)
		cl.validsequence = 0;

	if (cl.validsequence && !cl_nodelta.value && cls.state == ca_active &&
		!cls.demorecording)
	{
		cl.frames[cls.netchan.outgoing_sequence&UPDATE_MASK].delta_sequence = cl.validsequence;
		MSG_WriteByte (&buf, clc_delta);
		MSG_WriteByte (&buf, cl.validsequence&255);
	}
	else
		cl.frames[cls.netchan.outgoing_sequence&UPDATE_MASK].delta_sequence = -1;

	if (cls.demorecording)
		CL_WriteDemoCmd(cmd);

//
// deliver the message
//
	Netchan_Transmit (&cls.netchan, buf.cursize, buf.data);	
}



/*
============
CL_InitInput
============
*/
void CL_InitInput (void)
{
	Cmd_AddCommand ("+moveup",IN_UpDown);
	Cmd_AddCommand ("-moveup",IN_UpUp);
	Cmd_AddCommand ("+movedown",IN_DownDown);
	Cmd_AddCommand ("-movedown",IN_DownUp);
	Cmd_AddCommand ("+left",IN_LeftDown);
	Cmd_AddCommand ("-left",IN_LeftUp);
	Cmd_AddCommand ("+right",IN_RightDown);
	Cmd_AddCommand ("-right",IN_RightUp);
	Cmd_AddCommand ("+forward",IN_ForwardDown);
	Cmd_AddCommand ("-forward",IN_ForwardUp);
	Cmd_AddCommand ("+back",IN_BackDown);
	Cmd_AddCommand ("-back",IN_BackUp);
	Cmd_AddCommand ("+lookup", IN_LookupDown);
	Cmd_AddCommand ("-lookup", IN_LookupUp);
	Cmd_AddCommand ("+lookdown", IN_LookdownDown);
	Cmd_AddCommand ("-lookdown", IN_LookdownUp);
	Cmd_AddCommand ("+strafe", IN_StrafeDown);
	Cmd_AddCommand ("-strafe", IN_StrafeUp);
	Cmd_AddCommand ("+moveleft", IN_MoveleftDown);
	Cmd_AddCommand ("-moveleft", IN_MoveleftUp);
	Cmd_AddCommand ("+moveright", IN_MoverightDown);
	Cmd_AddCommand ("-moveright", IN_MoverightUp);
	Cmd_AddCommand ("+speed", IN_SpeedDown);
	Cmd_AddCommand ("-speed", IN_SpeedUp);
	Cmd_AddCommand ("+attack", IN_AttackDown);
	Cmd_AddCommand ("-attack", IN_AttackUp);
	Cmd_AddCommand ("+use", IN_UseDown);
	Cmd_AddCommand ("-use", IN_UseUp);
	Cmd_AddCommand ("+jump", IN_JumpDown);
	Cmd_AddCommand ("-jump", IN_JumpUp);
	Cmd_AddCommand ("impulse", IN_Impulse);
	Cmd_AddCommand ("+klook", IN_KLookDown);
	Cmd_AddCommand ("-klook", IN_KLookUp);
	Cmd_AddCommand ("+mlook", IN_MLookDown);
	Cmd_AddCommand ("-mlook", IN_MLookUp);

	Cvar_RegisterVariable (&cl_nodelta);
}

/*
============
CL_ClearStates
============
*/
void CL_ClearStates (void)
{
}
