---
title: "cl_demo.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/cl_demo.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/cl_demo.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "cl-demo-c"
order: 20
description: "This file handles demo recording and playback in Quake, a groundbreaking 3D game from 1996."

summary:
  - point: "Introduces demo recording and playback for multiplayer analysis"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimizes data serialization for limited hardware"
    link: "https://en.wikipedia.org/wiki/1990s_in_video_games"
    link_label: "1990s gaming hardware"
  - point: "Uses byte-order conversions for cross-platform compatibility"
    link: "https://en.wikipedia.org/wiki/Endianness"
    link_label: "Endianness"

enhancements:
  - id: "cl-stop-playback"
    line_start: 45
    line_end: 57
    title: "Stopping playback: A clean disconnect"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `CL_StopPlayback`, ensures a clean termination of demo playback. It closes the demo file, resets the playback state, and disconnects the client. In 1996, multiplayer gaming was still in its infancy, and demo playback was a novel feature for analyzing matches or sharing gameplay. John Carmack and his team designed this functionality to be robust, ensuring no lingering connections or corrupted states. The inclusion of a timedemo check reflects the developers' focus on performance benchmarking, a critical aspect given the limited hardware of the era. This method laid the groundwork for future replay systems in games, influencing how developers approached multiplayer analysis and debugging."
  - id: "cl-write-demo-cmd"
    line_start: 70
    line_end: 103
    title: "Recording player commands efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CL_WriteDemoCmd` function serializes player commands into the demo file, ensuring that every action is recorded accurately. It converts data to a consistent byte order using functions like `LittleFloat` and `LittleShort`, addressing cross-platform compatibility—a forward-thinking move in an era dominated by x86 architecture. This meticulous attention to data integrity reflects the team's understanding of the importance of demos for debugging, performance analysis, and community sharing. The decision to flush the file after each write highlights the constraints of 1990s hardware, where crashes or interruptions could easily corrupt data. This approach influenced how modern games handle data serialization in replay systems."
  - id: "cl-write-demo-message"
    line_start: 112
    line_end: 134
    title: "Dumping net messages: Preserving gameplay state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CL_WriteDemoMessage` function captures the current network message, prefixed by metadata like length and view angles. This ensures that the demo file contains a complete record of gameplay state, enabling accurate playback. In the mid-1990s, network latency and packet loss were common issues, especially in multiplayer games. By recording these messages, id Software provided a tool for analyzing and troubleshooting network interactions. The use of byte-order conversions again underscores the team's foresight in ensuring compatibility across different systems. This method became a standard in multiplayer game development, influencing how developers approached network debugging and replay systems."
  - id: "cl-get-demo-message"
    line_start: 138
    line_end: 247
    title: "Reading demo messages: Synchronizing playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CL_GetDemoMessage` function reads messages from the demo file and synchronizes them with the current game state. It handles various message types, such as player commands and network updates, ensuring accurate playback. This functionality was crucial for timedemos, a feature used to benchmark performance on different hardware setups. In 1996, when Quake was released, hardware limitations and varying system configurations posed significant challenges for developers. By implementing a robust demo playback system, id Software provided a tool for both players and developers to analyze performance and gameplay. The complexity of this function reflects the team's deep understanding of multiplayer systems and their commitment to creating a polished experience."
  - id: "cl-record-demo"
    line_start: 376
    line_end: 662
    title: "Recording demos: Capturing the multiplayer experience"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CL_Record_f` function initiates demo recording, capturing every aspect of the multiplayer experience, from player actions to environmental states. It writes server data, sound lists, model lists, and other critical information to the demo file, ensuring a comprehensive record. In the mid-1990s, multiplayer gaming was rapidly evolving, and features like demo recording were cutting-edge. John Carmack and his team designed this system to be both functional and efficient, addressing the constraints of limited memory and processing power. The inclusion of features like skin downloads and light styles reflects the team's attention to detail and their commitment to creating a seamless experience. This functionality influenced the development of replay systems in later games, becoming a standard feature in competitive multiplayer titles."
  - id: "cl-play-demo"
    line_start: 717
    line_end: 754
    title: "Playing demos: Reliving the action"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CL_PlayDemo_f` function allows players to replay recorded demos, providing a way to analyze gameplay or relive memorable moments. It disconnects the client from the server and sets up the demo file for playback. This feature was revolutionary in 1996, offering players a tool for self-improvement and community sharing. The ability to replay demos also served as a debugging tool for developers, helping them identify and fix issues in multiplayer interactions. The simplicity and efficiency of this function reflect the team's focus on usability and performance. Demo playback became a staple feature in competitive gaming, influencing how players and developers approached skill analysis and game design."
  - id: "cl-timedemo"
    line_start: 781
    line_end: 804
    title: "Timedemo: Benchmarking performance in 3D gaming"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `CL_TimeDemo_f` function runs a demo in timedemo mode, measuring the game's performance in frames per second. This feature was crucial in 1996, when hardware limitations and varying system configurations made performance benchmarking essential. John Carmack and his team designed this functionality to help players and developers optimize their setups, ensuring the best possible experience. The timedemo feature also served as a marketing tool, showcasing Quake's advanced 3D rendering capabilities. By providing a standardized way to measure performance, id Software set a precedent for benchmarking in the gaming industry, influencing how developers and players approached hardware optimization."

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

See the included (GNU.txt) GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

*/

#include "quakedef.h"

void CL_FinishTimeDemo (void);

/*
==============================================================================

DEMO CODE

When a demo is playing back, all NET_SendMessages are skipped, and
NET_GetMessages are read from the demo file.

Whenever cl.time gets past the last received message, another message is
read from the demo file.
==============================================================================
*/

/*
==============
CL_StopPlayback

Called when a demo file runs out, or the user starts a game
==============
*/
void CL_StopPlayback (void)
{
	if (!cls.demoplayback)
		return;

	fclose (cls.demofile);
	cls.demofile = NULL;
	cls.state = ca_disconnected;
	cls.demoplayback = 0;

	if (cls.timedemo)
		CL_FinishTimeDemo ();
}

#define dem_cmd		0
#define dem_read	1
#define dem_set		2

/*
====================
CL_WriteDemoCmd

Writes the current user cmd
====================
*/
void CL_WriteDemoCmd (usercmd_t *pcmd)
{
	int		i;
	float	fl;
	byte	c;
	usercmd_t cmd;

//Con_Printf("write: %ld bytes, %4.4f\n", msg->cursize, realtime);

	fl = LittleFloat((float)realtime);
	fwrite (&fl, sizeof(fl), 1, cls.demofile);

	c = dem_cmd;
	fwrite (&c, sizeof(c), 1, cls.demofile);

	// correct for byte order, bytes don't matter
	cmd = *pcmd;

	for (i = 0; i < 3; i++)
		cmd.angles[i] = LittleFloat(cmd.angles[i]);
	cmd.forwardmove = LittleShort(cmd.forwardmove);
	cmd.sidemove    = LittleShort(cmd.sidemove);
	cmd.upmove      = LittleShort(cmd.upmove);

	fwrite(&cmd, sizeof(cmd), 1, cls.demofile);

	for (i=0 ; i<3 ; i++)
	{
		fl = LittleFloat (cl.viewangles[i]);
		fwrite (&fl, 4, 1, cls.demofile);
	}

	fflush (cls.demofile);
}

/*
====================
CL_WriteDemoMessage

Dumps the current net message, prefixed by the length and view angles
====================
*/
void CL_WriteDemoMessage (sizebuf_t *msg)
{
	int		len;
	float	fl;
	byte	c;

//Con_Printf("write: %ld bytes, %4.4f\n", msg->cursize, realtime);

	if (!cls.demorecording)
		return;

	fl = LittleFloat((float)realtime);
	fwrite (&fl, sizeof(fl), 1, cls.demofile);

	c = dem_read;
	fwrite (&c, sizeof(c), 1, cls.demofile);

	len = LittleLong (msg->cursize);
	fwrite (&len, 4, 1, cls.demofile);
	fwrite (msg->data, msg->cursize, 1, cls.demofile);

	fflush (cls.demofile);
}

/*
====================
CL_GetDemoMessage

  FIXME...
====================
*/
qboolean CL_GetDemoMessage (void)
{
	int		r, i, j;
	float	f;
	float	demotime;
	byte	c;
	usercmd_t *pcmd;

	// read the time from the packet
	fread(&demotime, sizeof(demotime), 1, cls.demofile);
	demotime = LittleFloat(demotime);

// decide if it is time to grab the next message		
	if (cls.timedemo) {
		if (cls.td_lastframe < 0)
			cls.td_lastframe = demotime;
		else if (demotime > cls.td_lastframe) {
			cls.td_lastframe = demotime;
			// rewind back to time
			fseek(cls.demofile, ftell(cls.demofile) - sizeof(demotime),
					SEEK_SET);
			return 0;		// allready read this frame's message
		}
		if (!cls.td_starttime && cls.state == ca_active) {
			cls.td_starttime = Sys_DoubleTime();
			cls.td_startframe = host_framecount;
		}
		realtime = demotime; // warp
	} else if (!cl.paused && cls.state >= ca_onserver) {	// allways grab until fully connected
		if (realtime + 1.0 < demotime) {
			// too far back
			realtime = demotime - 1.0;
			// rewind back to time
			fseek(cls.demofile, ftell(cls.demofile) - sizeof(demotime),
					SEEK_SET);
			return 0;
		} else if (realtime < demotime) {
			// rewind back to time
			fseek(cls.demofile, ftell(cls.demofile) - sizeof(demotime),
					SEEK_SET);
			return 0;		// don't need another message yet
		}
	} else
		realtime = demotime; // we're warping

	if (cls.state < ca_demostart)
		Host_Error ("CL_GetDemoMessage: cls.state != ca_active");
	
	// get the msg type
	fread (&c, sizeof(c), 1, cls.demofile);
	
	switch (c) {
	case dem_cmd :
		// user sent input
		i = cls.netchan.outgoing_sequence & UPDATE_MASK;
		pcmd = &cl.frames[i].cmd;
		r = fread (pcmd, sizeof(*pcmd), 1, cls.demofile);
		if (r != 1)
		{
			CL_StopPlayback ();
			return 0;
		}
		// byte order stuff
		for (j = 0; j < 3; j++)
			pcmd->angles[j] = LittleFloat(pcmd->angles[j]);
		pcmd->forwardmove = LittleShort(pcmd->forwardmove);
		pcmd->sidemove    = LittleShort(pcmd->sidemove);
		pcmd->upmove      = LittleShort(pcmd->upmove);
		cl.frames[i].senttime = demotime;
		cl.frames[i].receivedtime = -1;		// we haven't gotten a reply yet
		cls.netchan.outgoing_sequence++;
		for (i=0 ; i<3 ; i++)
		{
			r = fread (&f, 4, 1, cls.demofile);
			cl.viewangles[i] = LittleFloat (f);
		}
		break;

	case dem_read:
		// get the next message
		fread (&net_message.cursize, 4, 1, cls.demofile);
		net_message.cursize = LittleLong (net_message.cursize);
	//Con_Printf("read: %ld bytes\n", net_message.cursize);
		if (net_message.cursize > MAX_MSGLEN)
			Sys_Error ("Demo message > MAX_MSGLEN");
		r = fread (net_message.data, net_message.cursize, 1, cls.demofile);
		if (r != 1)
		{
			CL_StopPlayback ();
			return 0;
		}
		break;

	case dem_set :
		fread (&i, 4, 1, cls.demofile);
		cls.netchan.outgoing_sequence = LittleLong(i);
		fread (&i, 4, 1, cls.demofile);
		cls.netchan.incoming_sequence = LittleLong(i);
		break;

	default :
		Con_Printf("Corrupted demo.\n");
		CL_StopPlayback ();
		return 0;
	}

	return 1;
}

/*
====================
CL_GetMessage

Handles recording and playback of demos, on top of NET_ code
====================
*/
qboolean CL_GetMessage (void)
{
	if	(cls.demoplayback)
		return CL_GetDemoMessage ();

	if (!NET_GetPacket ())
		return false;

	CL_WriteDemoMessage (&net_message);
	
	return true;
}


/*
====================
CL_Stop_f

stop recording a demo
====================
*/
void CL_Stop_f (void)
{
	if (!cls.demorecording)
	{
		Con_Printf ("Not recording a demo.\n");
		return;
	}

// write a disconnect message to the demo file
	SZ_Clear (&net_message);
	MSG_WriteLong (&net_message, -1);	// -1 sequence means out of band
	MSG_WriteByte (&net_message, svc_disconnect);
	MSG_WriteString (&net_message, "EndOfDemo");
	CL_WriteDemoMessage (&net_message);

// finish up
	fclose (cls.demofile);
	cls.demofile = NULL;
	cls.demorecording = false;
	Con_Printf ("Completed demo\n");
}


/*
====================
CL_WriteDemoMessage

Dumps the current net message, prefixed by the length and view angles
====================
*/
void CL_WriteRecordDemoMessage (sizebuf_t *msg, int seq)
{
	int		len;
	int		i;
	float	fl;
	byte	c;

//Con_Printf("write: %ld bytes, %4.4f\n", msg->cursize, realtime);

	if (!cls.demorecording)
		return;

	fl = LittleFloat((float)realtime);
	fwrite (&fl, sizeof(fl), 1, cls.demofile);

	c = dem_read;
	fwrite (&c, sizeof(c), 1, cls.demofile);

	len = LittleLong (msg->cursize + 8);
	fwrite (&len, 4, 1, cls.demofile);

	i = LittleLong(seq);
	fwrite (&i, 4, 1, cls.demofile);
	fwrite (&i, 4, 1, cls.demofile);

	fwrite (msg->data, msg->cursize, 1, cls.demofile);

	fflush (cls.demofile);
}


void CL_WriteSetDemoMessage (void)
{
	int		len;
	float	fl;
	byte	c;

//Con_Printf("write: %ld bytes, %4.4f\n", msg->cursize, realtime);

	if (!cls.demorecording)
		return;

	fl = LittleFloat((float)realtime);
	fwrite (&fl, sizeof(fl), 1, cls.demofile);

	c = dem_set;
	fwrite (&c, sizeof(c), 1, cls.demofile);

	len = LittleLong(cls.netchan.outgoing_sequence);
	fwrite (&len, 4, 1, cls.demofile);
	len = LittleLong(cls.netchan.incoming_sequence);
	fwrite (&len, 4, 1, cls.demofile);

	fflush (cls.demofile);
}




/*
====================
CL_Record_f

record <demoname> <server>
====================
*/
void CL_Record_f (void)
{
	int		c;
	char	name[MAX_OSPATH];
	sizebuf_t	buf;
	char	buf_data[MAX_MSGLEN];
	int n, i, j;
	char *s;
	entity_t *ent;
	entity_state_t *es, blankes;
	player_info_t *player;
	extern	char gamedirfile[];
	int seq = 1;

	c = Cmd_Argc();
	if (c != 2)
	{
		Con_Printf ("record <demoname>\n");
		return;
	}

	if (cls.state != ca_active) {
		Con_Printf ("You must be connected to record.\n");
		return;
	}

	if (cls.demorecording)
		CL_Stop_f();
  
	sprintf (name, "%s/%s", com_gamedir, Cmd_Argv(1));

//
// open the demo file
//
	COM_DefaultExtension (name, ".qwd");

	cls.demofile = fopen (name, "wb");
	if (!cls.demofile)
	{
		Con_Printf ("ERROR: couldn't open.\n");
		return;
	}

	Con_Printf ("recording to %s.\n", name);
	cls.demorecording = true;

/*-------------------------------------------------*/

// serverdata
	// send the info about the new client to all connected clients
	memset(&buf, 0, sizeof(buf));
	buf.data = buf_data;
	buf.maxsize = sizeof(buf_data);

// send the serverdata
	MSG_WriteByte (&buf, svc_serverdata);
	MSG_WriteLong (&buf, PROTOCOL_VERSION);
	MSG_WriteLong (&buf, cl.servercount);
	MSG_WriteString (&buf, gamedirfile);

	if (cl.spectator)
		MSG_WriteByte (&buf, cl.playernum | 128);
	else
		MSG_WriteByte (&buf, cl.playernum);

	// send full levelname
	MSG_WriteString (&buf, cl.levelname);

	// send the movevars
	MSG_WriteFloat(&buf, movevars.gravity);
	MSG_WriteFloat(&buf, movevars.stopspeed);
	MSG_WriteFloat(&buf, movevars.maxspeed);
	MSG_WriteFloat(&buf, movevars.spectatormaxspeed);
	MSG_WriteFloat(&buf, movevars.accelerate);
	MSG_WriteFloat(&buf, movevars.airaccelerate);
	MSG_WriteFloat(&buf, movevars.wateraccelerate);
	MSG_WriteFloat(&buf, movevars.friction);
	MSG_WriteFloat(&buf, movevars.waterfriction);
	MSG_WriteFloat(&buf, movevars.entgravity);

	// send music
	MSG_WriteByte (&buf, svc_cdtrack);
	MSG_WriteByte (&buf, 0); // none in demos

	// send server info string
	MSG_WriteByte (&buf, svc_stufftext);
	MSG_WriteString (&buf, va("fullserverinfo \"%s\"\n", cl.serverinfo) );

	// flush packet
	CL_WriteRecordDemoMessage (&buf, seq++);
	SZ_Clear (&buf); 

// soundlist
	MSG_WriteByte (&buf, svc_soundlist);
	MSG_WriteByte (&buf, 0);

	n = 0;
	s = cl.sound_name[n+1];
	while (*s) {
		MSG_WriteString (&buf, s);
		if (buf.cursize > MAX_MSGLEN/2) {
			MSG_WriteByte (&buf, 0);
			MSG_WriteByte (&buf, n);
			CL_WriteRecordDemoMessage (&buf, seq++);
			SZ_Clear (&buf); 
			MSG_WriteByte (&buf, svc_soundlist);
			MSG_WriteByte (&buf, n + 1);
		}
		n++;
		s = cl.sound_name[n+1];
	}
	if (buf.cursize) {
		MSG_WriteByte (&buf, 0);
		MSG_WriteByte (&buf, 0);
		CL_WriteRecordDemoMessage (&buf, seq++);
		SZ_Clear (&buf); 
	}

// modellist
	MSG_WriteByte (&buf, svc_modellist);
	MSG_WriteByte (&buf, 0);

	n = 0;
	s = cl.model_name[n+1];
	while (*s) {
		MSG_WriteString (&buf, s);
		if (buf.cursize > MAX_MSGLEN/2) {
			MSG_WriteByte (&buf, 0);
			MSG_WriteByte (&buf, n);
			CL_WriteRecordDemoMessage (&buf, seq++);
			SZ_Clear (&buf); 
			MSG_WriteByte (&buf, svc_modellist);
			MSG_WriteByte (&buf, n + 1);
		}
		n++;
		s = cl.model_name[n+1];
	}
	if (buf.cursize) {
		MSG_WriteByte (&buf, 0);
		MSG_WriteByte (&buf, 0);
		CL_WriteRecordDemoMessage (&buf, seq++);
		SZ_Clear (&buf); 
	}

// spawnstatic

	for (i = 0; i < cl.num_statics; i++) {
		ent = cl_static_entities + i;

		MSG_WriteByte (&buf, svc_spawnstatic);

		for (j = 1; j < MAX_MODELS; j++)
			if (ent->model == cl.model_precache[j])
				break;
		if (j == MAX_MODELS)
			MSG_WriteByte (&buf, 0);
		else
			MSG_WriteByte (&buf, j);

		MSG_WriteByte (&buf, ent->frame);
		MSG_WriteByte (&buf, 0);
		MSG_WriteByte (&buf, ent->skinnum);
		for (j=0 ; j<3 ; j++)
		{
			MSG_WriteCoord (&buf, ent->origin[j]);
			MSG_WriteAngle (&buf, ent->angles[j]);
		}

		if (buf.cursize > MAX_MSGLEN/2) {
			CL_WriteRecordDemoMessage (&buf, seq++);
			SZ_Clear (&buf); 
		}
	}

// spawnstaticsound
	// static sounds are skipped in demos, life is hard

// baselines

	memset(&blankes, 0, sizeof(blankes));
	for (i = 0; i < MAX_EDICTS; i++) {
		es = cl_baselines + i;

		if (memcmp(es, &blankes, sizeof(blankes))) {
			MSG_WriteByte (&buf,svc_spawnbaseline);		
			MSG_WriteShort (&buf, i);

			MSG_WriteByte (&buf, es->modelindex);
			MSG_WriteByte (&buf, es->frame);
			MSG_WriteByte (&buf, es->colormap);
			MSG_WriteByte (&buf, es->skinnum);
			for (j=0 ; j<3 ; j++)
			{
				MSG_WriteCoord(&buf, es->origin[j]);
				MSG_WriteAngle(&buf, es->angles[j]);
			}

			if (buf.cursize > MAX_MSGLEN/2) {
				CL_WriteRecordDemoMessage (&buf, seq++);
				SZ_Clear (&buf); 
			}
		}
	}

	MSG_WriteByte (&buf, svc_stufftext);
	MSG_WriteString (&buf, va("cmd spawn %i 0\n", cl.servercount) );

	if (buf.cursize) {
		CL_WriteRecordDemoMessage (&buf, seq++);
		SZ_Clear (&buf); 
	}

// send current status of all other players

	for (i = 0; i < MAX_CLIENTS; i++) {
		player = cl.players + i;

		MSG_WriteByte (&buf, svc_updatefrags);
		MSG_WriteByte (&buf, i);
		MSG_WriteShort (&buf, player->frags);
		
		MSG_WriteByte (&buf, svc_updateping);
		MSG_WriteByte (&buf, i);
		MSG_WriteShort (&buf, player->ping);
		
		MSG_WriteByte (&buf, svc_updatepl);
		MSG_WriteByte (&buf, i);
		MSG_WriteByte (&buf, player->pl);
		
		MSG_WriteByte (&buf, svc_updateentertime);
		MSG_WriteByte (&buf, i);
		MSG_WriteFloat (&buf, player->entertime);

		MSG_WriteByte (&buf, svc_updateuserinfo);
		MSG_WriteByte (&buf, i);
		MSG_WriteLong (&buf, player->userid);
		MSG_WriteString (&buf, player->userinfo);

		if (buf.cursize > MAX_MSGLEN/2) {
			CL_WriteRecordDemoMessage (&buf, seq++);
			SZ_Clear (&buf); 
		}
	}
	
// send all current light styles
	for (i=0 ; i<MAX_LIGHTSTYLES ; i++)
	{
		MSG_WriteByte (&buf, svc_lightstyle);
		MSG_WriteByte (&buf, (char)i);
		MSG_WriteString (&buf, cl_lightstyle[i].map);
	}

	for (i = 0; i < MAX_CL_STATS; i++) {
		MSG_WriteByte (&buf, svc_updatestatlong);
		MSG_WriteByte (&buf, i);
		MSG_WriteLong (&buf, cl.stats[i]);
		if (buf.cursize > MAX_MSGLEN/2) {
			CL_WriteRecordDemoMessage (&buf, seq++);
			SZ_Clear (&buf); 
		}
	}

#if 0
	MSG_WriteByte (&buf, svc_updatestatlong);
	MSG_WriteByte (&buf, STAT_TOTALMONSTERS);
	MSG_WriteLong (&buf, cl.stats[STAT_TOTALMONSTERS]);

	MSG_WriteByte (&buf, svc_updatestatlong);
	MSG_WriteByte (&buf, STAT_SECRETS);
	MSG_WriteLong (&buf, cl.stats[STAT_SECRETS]);

	MSG_WriteByte (&buf, svc_updatestatlong);
	MSG_WriteByte (&buf, STAT_MONSTERS);
	MSG_WriteLong (&buf, cl.stats[STAT_MONSTERS]);
#endif

	// get the client to check and download skins
	// when that is completed, a begin command will be issued
	MSG_WriteByte (&buf, svc_stufftext);
	MSG_WriteString (&buf, va("skins\n") );

	CL_WriteRecordDemoMessage (&buf, seq++);

	CL_WriteSetDemoMessage();

	// done
}

/*
====================
CL_ReRecord_f

record <demoname>
====================
*/
void CL_ReRecord_f (void)
{
	int		c;
	char	name[MAX_OSPATH];

	c = Cmd_Argc();
	if (c != 2)
	{
		Con_Printf ("rerecord <demoname>\n");
		return;
	}

	if (!*cls.servername) {
		Con_Printf("No server to reconnect to...\n");
		return;
	}

	if (cls.demorecording)
		CL_Stop_f();
  
	sprintf (name, "%s/%s", com_gamedir, Cmd_Argv(1));

//
// open the demo file
//
	COM_DefaultExtension (name, ".qwd");

	cls.demofile = fopen (name, "wb");
	if (!cls.demofile)
	{
		Con_Printf ("ERROR: couldn't open.\n");
		return;
	}

	Con_Printf ("recording to %s.\n", name);
	cls.demorecording = true;

	CL_Disconnect();
	CL_BeginServerConnect();
}


/*
====================
CL_PlayDemo_f

play [demoname]
====================
*/
void CL_PlayDemo_f (void)
{
	char	name[256];

	if (Cmd_Argc() != 2)
	{
		Con_Printf ("play <demoname> : plays a demo\n");
		return;
	}

//
// disconnect from server
//
	CL_Disconnect ();
	
//
// open the demo file
//
	strcpy (name, Cmd_Argv(1));
	COM_DefaultExtension (name, ".qwd");

	Con_Printf ("Playing demo from %s.\n", name);
	COM_FOpenFile (name, &cls.demofile);
	if (!cls.demofile)
	{
		Con_Printf ("ERROR: couldn't open.\n");
		cls.demonum = -1;		// stop demo loop
		return;
	}

	cls.demoplayback = true;
	cls.state = ca_demostart;
	Netchan_Setup (&cls.netchan, net_from, 0);
	realtime = 0;
}

/*
====================
CL_FinishTimeDemo

====================
*/
void CL_FinishTimeDemo (void)
{
	int		frames;
	float	time;
	
	cls.timedemo = false;
	
// the first frame didn't count
	frames = (host_framecount - cls.td_startframe) - 1;
	time = Sys_DoubleTime() - cls.td_starttime;
	if (!time)
		time = 1;
	Con_Printf ("%i frames %5.1f seconds %5.1f fps\n", frames, time, frames/time);
}

/*
====================
CL_TimeDemo_f

timedemo [demoname]
====================
*/
void CL_TimeDemo_f (void)
{
	if (Cmd_Argc() != 2)
	{
		Con_Printf ("timedemo <demoname> : gets demo speeds\n");
		return;
	}

	CL_PlayDemo_f ();
	
	if (cls.state != ca_demostart)
		return;

// cls.td_starttime will be grabbed at the second frame of the demo, so
// all the loading time doesn't get counted
	
	cls.timedemo = true;
	cls.td_starttime = 0;
	cls.td_startframe = host_framecount;
	cls.td_lastframe = -1;		// get a new message this frame
}
