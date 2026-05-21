---
title: "net_chan.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/net_chan.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/net_chan.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "net-chan-c"
order: 19
description: "This file implements Quake's network channel system, a foundational component for multiplayer gaming that manages packet transmission, reliability, and bandwidth constraints."

summary:
  - point: "Introduces reliable and unreliable packet handling for multiplayer games"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Uses a workaround for router port remapping issues with the 'qport' field"
    link: "https://en.wikipedia.org/wiki/Network_address_translation"
    link_label: "Network Address Translation"
  - point: "Implements bandwidth throttling to prevent network congestion"
    link: "https://en.wikipedia.org/wiki/Rate_limiting"
    link_label: "Rate Limiting"
  - point: "Handles retransmission of dropped reliable packets"
    link: "https://en.wikipedia.org/wiki/Transmission_Control_Protocol"
    link_label: "TCP"
  - point: "Optimized for 1990s hardware constraints, such as limited memory and processing power"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"

enhancements:
  - id: "packet-header-design"
    line_start: 27
    line_end: 76
    title: "How Quake Solved Multiplayer Packet Reliability"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section defines the structure of the packet header used in Quake's multiplayer networking system. The header includes fields for sequence numbers, reliability flags, acknowledgment numbers, and a 'qport' field to address issues caused by routers remapping client source ports. At the time, multiplayer gaming faced significant challenges due to unreliable network conditions and hardware limitations. John Carmack and Michael Abrash designed this system to ensure reliable delivery of critical game data while allowing non-critical data to be sent without acknowledgment. The inclusion of the 'qport' field was a clever workaround for NAT issues, ensuring that connections remained stable even when IP ports were dynamically altered. This approach influenced later multiplayer systems, including those in Half-Life and Unreal Tournament, and laid the groundwork for modern game networking protocols."
  - id: "netchan-init-random-port"
    line_start: 83
    line_end: 104
    title: "Random Ports: A Security and Stability Hack"
    wikipedia_url: "https://en.wikipedia.org/wiki/Random_number_generation"
    image_url: ""
    image_caption: ""
    content: "The `Netchan_Init` function initializes the network channel system and assigns a random port value to the `qport` variable. On Windows, this randomness is derived from the system time, while on Unix-like systems, it combines the process ID and user ID with the current time. This randomness helps mitigate issues with port remapping by routers and adds a layer of security against spoofing attacks. In the mid-1990s, network security and stability were critical concerns for multiplayer games, as malicious actors could exploit predictable port assignments. By introducing randomness, id Software ensured that Quake's multiplayer connections were more robust and less prone to interference. This technique became a common practice in networking systems, influencing later games and even broader network security protocols."
  - id: "out-of-band-datagram"
    line_start: 106
    line_end: 132
    title: "Sending Messages Outside the Game Loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
    image_url: ""
    image_caption: ""
    content: "The `Netchan_OutOfBand` function sends out-of-band datagrams, which are packets not tied to the main game loop. These packets are marked with a sequence number of -1, signaling their special status. Out-of-band messages are used for tasks like server discovery, error reporting, or administrative commands, ensuring they bypass the regular packet handling logic. This design reflects the constraints of the era, where UDP was preferred for its low latency but lacked built-in reliability. By implementing custom handling for out-of-band messages, Quake could efficiently manage critical network operations without disrupting gameplay. This technique influenced later multiplayer engines, including Source and Unreal Engine, which adopted similar out-of-band messaging systems for server communication and matchmaking."
  - id: "reliable-unreliable-packet-combo"
    line_start: 211
    line_end: 314
    title: "Combining Reliable and Unreliable Packets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Transmission_Control_Protocol"
    image_url: ""
    image_caption: ""
    content: "The `Netchan_Transmit` function is the heart of Quake's network channel system, handling the transmission of both reliable and unreliable packets. Reliable packets are guaranteed to be delivered and acknowledged, while unreliable packets are sent without confirmation. This hybrid approach balances the need for reliability in critical game data (e.g., player actions) with the speed required for non-critical updates (e.g., visual effects). The function also manages retransmission of dropped reliable packets and ensures that the packet header includes all necessary metadata for proper sequencing and acknowledgment. This design was groundbreaking in 1996, as it provided a robust solution for multiplayer gaming over unreliable networks. The concept of combining reliable and unreliable data streams influenced many subsequent multiplayer engines, including those used in Counter-Strike and World of Warcraft."
  - id: "packet-processing-and-statistics"
    line_start: 316
    line_end: 451
    title: "How Quake Tracks Network Performance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Network_performance"
    image_url: ""
    image_caption: ""
    content: "The `Netchan_Process` function processes incoming packets, updating network statistics and handling dropped or out-of-order packets. It calculates latency and frame rate using a weighted average, ensuring smooth gameplay even under varying network conditions. The function also updates reliability flags and sequence numbers, allowing the system to detect and recover from packet loss. In the mid-1990s, network performance was a major challenge for multiplayer games, as players often connected via dial-up modems with high latency and frequent packet loss. By implementing detailed tracking and adaptive retransmission, id Software ensured that Quake's multiplayer experience remained playable even under suboptimal conditions. This approach influenced later games, which adopted similar techniques for network performance monitoring and optimization."

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

#ifdef _WIN32
#include "winquake.h"
#endif

#define	PACKET_HEADER	8

/*

packet header
-------------
31	sequence
1	does this message contain a reliable payload
31	acknowledge sequence
1	acknowledge receipt of even/odd message
16  qport

The remote connection never knows if it missed a reliable message, the
local side detects that it has been dropped by seeing a sequence acknowledge
higher thatn the last reliable sequence, but without the correct evon/odd
bit for the reliable set.

If the sender notices that a reliable message has been dropped, it will be
retransmitted.  It will not be retransmitted again until a message after
the retransmit has been acknowledged and the reliable still failed to get there.

if the sequence number is -1, the packet should be handled without a netcon

The reliable message can be added to at any time by doing
MSG_Write* (&netchan->message, <data>).

If the message buffer is overflowed, either by a single message, or by
multiple frames worth piling up while the last reliable transmit goes
unacknowledged, the netchan signals a fatal error.

Reliable messages are allways placed first in a packet, then the unreliable
message is included if there is sufficient room.

To the receiver, there is no distinction between the reliable and unreliable
parts of the message, they are just processed out as a single larger message.

Illogical packet sequence numbers cause the packet to be dropped, but do
not kill the connection.  This, combined with the tight window of valid
reliable acknowledgement numbers provides protection against malicious
address spoofing.

The qport field is a workaround for bad address translating routers that
sometimes remap the client's source port on a packet during gameplay.

If the base part of the net address matches and the qport matches, then the
channel matches even if the IP port differs.  The IP port should be updated
to the new value before sending out any replies.


*/

int		net_drop;
cvar_t	showpackets = {"showpackets", "0"};
cvar_t	showdrop = {"showdrop", "0"};
cvar_t	qport = {"qport", "0"};

/*
===============
Netchan_Init

===============
*/
void Netchan_Init (void)
{
	int		port;

	// pick a port value that should be nice and random
#ifdef _WIN32
	port = ((int)(timeGetTime()*1000) * time(NULL)) & 0xffff;
#else
	port = ((int)(getpid()+getuid()*1000) * time(NULL)) & 0xffff;
#endif

	Cvar_RegisterVariable (&showpackets);
	Cvar_RegisterVariable (&showdrop);
	Cvar_RegisterVariable (&qport);
	Cvar_SetValue("qport", port);
}

/*
===============
Netchan_OutOfBand

Sends an out-of-band datagram
================
*/
void Netchan_OutOfBand (netadr_t adr, int length, byte *data)
{
	sizebuf_t	send;
	byte		send_buf[MAX_MSGLEN + PACKET_HEADER];

// write the packet header
	send.data = send_buf;
	send.maxsize = sizeof(send_buf);
	send.cursize = 0;
	
	MSG_WriteLong (&send, -1);	// -1 sequence means out of band
	SZ_Write (&send, data, length);

// send the datagram
	//zoid, no input in demo playback mode
#ifndef SERVERONLY
	if (!cls.demoplayback)
#endif
		NET_SendPacket (send.cursize, send.data, adr);
}

/*
===============
Netchan_OutOfBandPrint

Sends a text message in an out-of-band datagram
================
*/
void Netchan_OutOfBandPrint (netadr_t adr, char *format, ...)
{
	va_list		argptr;
	static char		string[8192];		// ??? why static?
	
	va_start (argptr, format);
	vsprintf (string, format,argptr);
	va_end (argptr);


	Netchan_OutOfBand (adr, strlen(string), (byte *)string);
}


/*
==============
Netchan_Setup

called to open a channel to a remote system
==============
*/
void Netchan_Setup (netchan_t *chan, netadr_t adr, int qport)
{
	memset (chan, 0, sizeof(*chan));
	
	chan->remote_address = adr;
	chan->last_received = realtime;
	
	chan->message.data = chan->message_buf;
	chan->message.allowoverflow = true;
	chan->message.maxsize = sizeof(chan->message_buf);

	chan->qport = qport;
	
	chan->rate = 1.0/2500;
}


/*
===============
Netchan_CanPacket

Returns true if the bandwidth choke isn't active
================
*/
#define	MAX_BACKUP	200
qboolean Netchan_CanPacket (netchan_t *chan)
{
	if (chan->cleartime < realtime + MAX_BACKUP*chan->rate)
		return true;
	return false;
}


/*
===============
Netchan_CanReliable

Returns true if the bandwidth choke isn't 
================
*/
qboolean Netchan_CanReliable (netchan_t *chan)
{
	if (chan->reliable_length)
		return false;			// waiting for ack
	return Netchan_CanPacket (chan);
}

#ifdef SERVERONLY
qboolean ServerPaused(void);
#endif

/*
===============
Netchan_Transmit

tries to send an unreliable message to a connection, and handles the
transmition / retransmition of the reliable messages.

A 0 length will still generate a packet and deal with the reliable messages.
================
*/
void Netchan_Transmit (netchan_t *chan, int length, byte *data)
{
	sizebuf_t	send;
	byte		send_buf[MAX_MSGLEN + PACKET_HEADER];
	qboolean	send_reliable;
	unsigned	w1, w2;
	int			i;

// check for message overflow
	if (chan->message.overflowed)
	{
		chan->fatal_error = true;
		Con_Printf ("%s:Outgoing message overflow\n"
			, NET_AdrToString (chan->remote_address));
		return;
	}

// if the remote side dropped the last reliable message, resend it
	send_reliable = false;

	if (chan->incoming_acknowledged > chan->last_reliable_sequence
	&& chan->incoming_reliable_acknowledged != chan->reliable_sequence)
		send_reliable = true;

// if the reliable transmit buffer is empty, copy the current message out
	if (!chan->reliable_length && chan->message.cursize)
	{
		memcpy (chan->reliable_buf, chan->message_buf, chan->message.cursize);
		chan->reliable_length = chan->message.cursize;
		chan->message.cursize = 0;
		chan->reliable_sequence ^= 1;
		send_reliable = true;
	}

// write the packet header
	send.data = send_buf;
	send.maxsize = sizeof(send_buf);
	send.cursize = 0;

	w1 = chan->outgoing_sequence | (send_reliable<<31);
	w2 = chan->incoming_sequence | (chan->incoming_reliable_sequence<<31);

	chan->outgoing_sequence++;

	MSG_WriteLong (&send, w1);
	MSG_WriteLong (&send, w2);

	// send the qport if we are a client
#ifndef SERVERONLY
	MSG_WriteShort (&send, cls.qport);
#endif

// copy the reliable message to the packet first
	if (send_reliable)
	{
		SZ_Write (&send, chan->reliable_buf, chan->reliable_length);
		chan->last_reliable_sequence = chan->outgoing_sequence;
	}
	
// add the unreliable part if space is available
	if (send.maxsize - send.cursize >= length)
		SZ_Write (&send, data, length);

// send the datagram
	i = chan->outgoing_sequence & (MAX_LATENT-1);
	chan->outgoing_size[i] = send.cursize;
	chan->outgoing_time[i] = realtime;

	//zoid, no input in demo playback mode
#ifndef SERVERONLY
	if (!cls.demoplayback)
#endif
		NET_SendPacket (send.cursize, send.data, chan->remote_address);

	if (chan->cleartime < realtime)
		chan->cleartime = realtime + send.cursize*chan->rate;
	else
		chan->cleartime += send.cursize*chan->rate;
#ifdef SERVERONLY
	if (ServerPaused())
		chan->cleartime = realtime;
#endif

	if (showpackets.value)
		Con_Printf ("--> s=%i(%i) a=%i(%i) %i\n"
			, chan->outgoing_sequence
			, send_reliable
			, chan->incoming_sequence
			, chan->incoming_reliable_sequence
			, send.cursize);

}

/*
=================
Netchan_Process

called when the current net_message is from remote_address
modifies net_message so that it points to the packet payload
=================
*/
qboolean Netchan_Process (netchan_t *chan)
{
	unsigned		sequence, sequence_ack;
	unsigned		reliable_ack, reliable_message;
#ifdef SERVERONLY
	int			qport;
#endif
	int i;

	if (
#ifndef SERVERONLY
			!cls.demoplayback && 
#endif
			!NET_CompareAdr (net_from, chan->remote_address))
		return false;
	
// get sequence numbers		
	MSG_BeginReading ();
	sequence = MSG_ReadLong ();
	sequence_ack = MSG_ReadLong ();

	// read the qport if we are a server
#ifdef SERVERONLY
	qport = MSG_ReadShort ();
#endif

	reliable_message = sequence >> 31;
	reliable_ack = sequence_ack >> 31;

	sequence &= ~(1<<31);	
	sequence_ack &= ~(1<<31);	

	if (showpackets.value)
		Con_Printf ("<-- s=%i(%i) a=%i(%i) %i\n"
			, sequence
			, reliable_message
			, sequence_ack
			, reliable_ack
			, net_message.cursize);

// get a rate estimation
#if 0
	if (chan->outgoing_sequence - sequence_ack < MAX_LATENT)
	{
		int				i;
		double			time, rate;
	
		i = sequence_ack & (MAX_LATENT - 1);
		time = realtime - chan->outgoing_time[i];
		time -= 0.1;	// subtract 100 ms
		if (time <= 0)
		{	// gotta be a digital link for <100 ms ping
			if (chan->rate > 1.0/5000)
				chan->rate = 1.0/5000;
		}
		else
		{
			if (chan->outgoing_size[i] < 512)
			{	// only deal with small messages
				rate = chan->outgoing_size[i]/time;
				if (rate > 5000)
					rate = 5000;
				rate = 1.0/rate;
				if (chan->rate > rate)
					chan->rate = rate;
			}
		}
	}
#endif

//
// discard stale or duplicated packets
//
	if (sequence <= (unsigned)chan->incoming_sequence)
	{
		if (showdrop.value)
			Con_Printf ("%s:Out of order packet %i at %i\n"
				, NET_AdrToString (chan->remote_address)
				,  sequence
				, chan->incoming_sequence);
		return false;
	}

//
// dropped packets don't keep the message from being used
//
	net_drop = sequence - (chan->incoming_sequence+1);
	if (net_drop > 0)
	{
		chan->drop_count += 1;

		if (showdrop.value)
			Con_Printf ("%s:Dropped %i packets at %i\n"
			, NET_AdrToString (chan->remote_address)
			, sequence-(chan->incoming_sequence+1)
			, sequence);
	}

//
// if the current outgoing reliable message has been acknowledged
// clear the buffer to make way for the next
//
	if (reliable_ack == (unsigned)chan->reliable_sequence)
		chan->reliable_length = 0;	// it has been received
	
//
// if this message contains a reliable message, bump incoming_reliable_sequence 
//
	chan->incoming_sequence = sequence;
	chan->incoming_acknowledged = sequence_ack;
	chan->incoming_reliable_acknowledged = reliable_ack;
	if (reliable_message)
		chan->incoming_reliable_sequence ^= 1;

//
// the message can now be read from the current message pointer
// update statistics counters
//
	chan->frame_latency = chan->frame_latency*OLD_AVG
		+ (chan->outgoing_sequence-sequence_ack)*(1.0-OLD_AVG);
	chan->frame_rate = chan->frame_rate*OLD_AVG
		+ (realtime-chan->last_received)*(1.0-OLD_AVG);		
	chan->good_count += 1;

	chan->last_received = realtime;

	return true;
}
```
