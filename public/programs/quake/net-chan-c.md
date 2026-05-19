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
description: "This file implements Quake's network channel logic, a cornerstone of its groundbreaking multiplayer capabilities."

summary:
  - point: "Reliable and unreliable packet handling logic"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Bandwidth throttling and packet retransmission mechanisms"
    link: "https://en.wikipedia.org/wiki/Computer_network"
    link_label: "Computer network"
  - point: "Workarounds for router port remapping issues"
    link: "https://en.wikipedia.org/wiki/Network_address_translation"
    link_label: "NAT"
  - point: "Integration of out-of-band messaging for server-client communication"
    link: "https://en.wikipedia.org/wiki/Client%E2%80%93server_model"
    link_label: "Client-server model"
  - point: "Dropped packet detection and recovery"
    link: "https://en.wikipedia.org/wiki/Packet_loss"
    link_label: "Packet loss"

enhancements:
  - id: "foundation-of-reliable-packet-handling"
    line_start: 17
    line_end: 29
    title: "Foundation of Reliable Packet Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section introduces the foundational logic for handling reliable and unreliable packets in Quake's networking system. The code outlines how packets are structured, including sequence numbers, acknowledgment bits, and a workaround for router port remapping issues using the 'qport' field. At the time, multiplayer gaming faced significant challenges due to unreliable network connections and limited bandwidth. John Carmack and Michael Abrash designed this system to ensure robust communication between clients and servers, even under adverse conditions. The inclusion of reliable packet retransmission and acknowledgment mechanisms was a direct response to the unpredictability of internet connections in the mid-1990s. This approach influenced later multiplayer games, including Unreal Tournament and Half-Life, which adopted similar strategies for packet handling and reliable communication."
  - id: "randomized-port-initialization"
    line_start: 83
    line_end: 104
    title: "Randomized Port Initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Random_number_generation"
    image_url: ""
    image_caption: ""
    content: "The Netchan_Init function initializes the network channel and assigns a randomized port value to ensure uniqueness. On Windows, it uses the timeGetTime function, while on Unix-like systems, it combines process ID and user ID with the current time. This randomness mitigates potential conflicts in multiplayer scenarios where multiple clients might connect from the same machine. In 1996, ensuring unique identifiers for network communication was critical due to the lack of sophisticated NAT traversal techniques. This method reflects id Software's pragmatic approach to solving real-world networking issues with the tools available at the time. The technique inspired similar initialization strategies in later multiplayer frameworks, such as Valve's Source engine."
  - id: "out-of-band-message-transmission"
    line_start: 106
    line_end: 132
    title: "Out-of-Band Message Transmission"
    wikipedia_url: "https://en.wikipedia.org/wiki/Out-of-band_data"
    image_url: ""
    image_caption: ""
    content: "The Netchan_OutOfBand function sends out-of-band messages, which are special packets marked with a sequence number of -1. These packets bypass the normal reliable/unreliable packet handling logic and are used for critical communication, such as server status updates or connection requests. Out-of-band messaging was a novel solution to ensure certain types of data could be transmitted immediately without waiting for standard packet sequencing. This technique became a standard feature in networked games, influencing later engines like Unreal Engine and Source, which implemented similar mechanisms for server-client communication."
  - id: "handling-reliable-message-retransmission"
    line_start: 222
    line_end: 314
    title: "Handling Reliable Message Retransmission"
    wikipedia_url: "https://en.wikipedia.org/wiki/Reliability_(computer_networking)"
    image_url: ""
    image_caption: ""
    content: "The Netchan_Transmit function is responsible for sending packets and managing reliable message retransmission. It checks if the last reliable message was acknowledged by the receiver and resends it if necessary. Reliable messages are prioritized and transmitted first, followed by any available unreliable data. This ensures critical data is delivered even in the face of packet loss or network instability. In 1996, this approach was groundbreaking for multiplayer gaming, where packet loss was common on dial-up connections. The retransmission logic laid the groundwork for reliable communication in online games, influencing networking libraries like RakNet and ENet used in modern game development."
  - id: "processing-incoming-packets"
    line_start: 323
    line_end: 451
    title: "Processing Incoming Packets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Packet_switching"
    image_url: ""
    image_caption: ""
    content: "The Netchan_Process function handles incoming packets, verifying their sequence numbers and extracting payload data. It discards stale or duplicate packets and updates statistics like latency and frame rate. This robust packet validation and processing logic was essential for maintaining smooth gameplay in Quake's multiplayer mode. At the time, packet loss and duplication were significant challenges due to the unreliable nature of internet connections. By implementing these checks, id Software ensured a more stable and responsive multiplayer experience. This approach influenced later multiplayer games and engines, which adopted similar techniques for packet validation and network performance monitoring."

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
