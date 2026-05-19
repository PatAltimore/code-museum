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
description: "This file implements Quake's network channel logic, enabling reliable and efficient multiplayer communication in a groundbreaking 3D game."

summary:
  - point: "Introduces a hybrid reliable/unreliable packet system for multiplayer communication."
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Uses clever workarounds for unreliable network conditions, such as qport for NAT traversal."
    link: "https://en.wikipedia.org/wiki/Network_address_translation"
    link_label: "NAT Traversal"
  - point: "Optimized for low-latency communication on 1990s hardware."
    link: "https://en.wikipedia.org/wiki/1990s_in_computing"
    link_label: "1990s Computing"
  - point: "Demonstrates modular design for handling packet transmission and reception."
    link: "https://en.wikipedia.org/wiki/Software_design"
    link_label: "Software Design"
  - point: "Reflects id Software's pioneering approach to multiplayer gaming."
    link: "https://en.wikipedia.org/wiki/Id_Software"
    link_label: "id Software"

enhancements:
  - id: "foundation-initial-setup"
    line_start: 17
    line_end: 29
    title: "Foundation: Initial Setup for Networking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section lays the groundwork for Quake's network communication system, defining constants and variables critical to packet handling. The 'PACKET_HEADER' constant specifies the size of the packet header, a key component for organizing data transmission. The comments provide an overview of the packet structure, including sequence numbers, acknowledgment mechanisms, and the qport field—a workaround for NAT traversal issues caused by routers remapping source ports. In 1996, multiplayer gaming was still in its infancy, with most games relying on direct IP connections or LAN setups. John Carmack and his team faced the challenge of creating a robust system that could handle unreliable networks while maintaining low latency. Their solution combined reliability for critical data with the flexibility to drop less important packets, ensuring smooth gameplay even under adverse conditions. This foundational design influenced future multiplayer systems, setting a precedent for handling packet loss and NAT traversal in online gaming."
  - id: "packet-header-details"
    line_start: 31
    line_end: 37
    title: "Packet Header: A Compact Data Blueprint"
    wikipedia_url: "https://en.wikipedia.org/wiki/Packet_(information_technology)"
    image_url: ""
    image_caption: ""
    content: "The packet header is the blueprint for data transmission in Quake's networking system. It includes fields for sequence numbers, acknowledgment, reliable payload indicators, and the qport field. This design ensures that both reliable and unreliable data can coexist within the same packet, optimizing bandwidth usage. In the mid-1990s, network reliability was a significant concern, especially for consumer-grade internet connections. Carmack and Abrash devised this header format to balance efficiency and reliability, allowing the game to detect dropped packets and retransmit them only when necessary. The qport field was particularly innovative, addressing issues with routers that altered source ports during gameplay. By matching the qport alongside the base network address, Quake could maintain connections even in challenging network environments. This approach was ahead of its time, anticipating problems that would become more prevalent as online gaming grew in popularity."
  - id: "cvar-initialization"
    line_start: 81
    line_end: 84
    title: "Cvar Initialization: Configurable Networking Parameters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Variable_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section initializes key cvars (console variables) used for debugging and configuration of the networking system. The 'showpackets' and 'showdrop' variables allow developers and players to monitor packet transmission and loss, while 'qport' holds the port value used for NAT traversal. Cvars were a hallmark of id Software's games, providing a flexible way to tweak settings without modifying the code. In the 1990s, this approach empowered both developers and advanced users to optimize performance and troubleshoot issues. By exposing these variables, Carmack and his team ensured that Quake's networking system could adapt to diverse environments, from LAN parties to dial-up internet connections. This modular design philosophy influenced many subsequent games, establishing cvars as a standard feature in PC gaming."
  - id: "netchan-init-random-port"
    line_start: 85
    line_end: 88
    title: "Netchan_Init: Randomized Port Selection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Port_(computer_networking)"
    image_url: ""
    image_caption: ""
    content: "The Netchan_Init function initializes the network channel, including the selection of a randomized port value. On Windows, this is derived from the system time, while on Unix-like systems, it combines process ID and user ID with the current time. This randomness helps avoid port conflicts and enhances security by making it harder for malicious actors to predict the port in use. In 1996, security concerns in multiplayer gaming were emerging, with issues like packet spoofing and denial-of-service attacks becoming more common. By incorporating randomness into port selection, id Software took a proactive step to mitigate these risks. This method also ensured compatibility across different operating systems, reflecting the team's commitment to cross-platform support. The randomized port selection remains a relevant technique in modern networking, demonstrating the foresight of Quake's developers."
  - id: "out-of-band-transmission"
    line_start: 110
    line_end: 112
    title: "Out-of-Band Transmission: Special Case Messaging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Out-of-band_data"
    image_url: ""
    image_caption: ""
    content: "Out-of-band transmission allows Quake to send special messages outside the normal sequence of gameplay packets. These messages are marked with a sequence number of -1, signaling their unique status. This mechanism is used for tasks like server queries and connection setup, where immediate delivery is more important than reliability. In the mid-1990s, multiplayer games often struggled with the balance between reliability and responsiveness. By introducing out-of-band messaging, Carmack and his team ensured that critical information could bypass the usual packet handling logic, reducing latency for specific operations. This feature was particularly useful for server browsers, which needed to query multiple servers quickly to display their status. The concept of out-of-band messaging has since become a standard in network protocols, highlighting Quake's role as a pioneer in multiplayer gaming technology."
  - id: "reliable-unreliable-transmission"
    line_start: 223
    line_end: 317
    title: "Reliable and Unreliable Transmission: Balancing Efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Transmission_Control_Protocol"
    image_url: ""
    image_caption: ""
    content: "The Netchan_Transmit function is the heart of Quake's networking system, handling the transmission of both reliable and unreliable messages. Reliable messages are retransmitted until acknowledged, while unreliable messages are sent only once. This hybrid approach balances the need for reliability with the constraints of limited bandwidth and processing power. In 1996, most consumer internet connections were slow and prone to packet loss, making it challenging to maintain smooth multiplayer gameplay. Carmack and Abrash designed this system to prioritize critical data, such as player actions, while allowing less important information, like chat messages, to be dropped if necessary. The function also includes mechanisms for detecting dropped packets and adjusting transmission rates based on network conditions. This adaptive approach was groundbreaking, enabling Quake to deliver a responsive multiplayer experience on hardware that would struggle with modern games. The principles established here continue to influence network protocols and game design, demonstrating the lasting impact of Quake's innovations."
  - id: "packet-processing"
    line_start: 324
    line_end: 451
    title: "Packet Processing: Ensuring Data Integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "The Netchan_Process function handles incoming packets, verifying their sequence numbers and updating the network channel's state. It discards duplicate or out-of-order packets, calculates latency and frame rate, and updates statistics counters. This meticulous processing ensures data integrity and smooth gameplay, even under challenging network conditions. In the mid-1990s, error detection and correction were critical for multiplayer games, as packet loss and corruption were common on consumer internet connections. Carmack and his team implemented a robust system that could tolerate these issues without disrupting gameplay. The function also includes logic for handling dropped packets, ensuring that reliable messages are retransmitted as needed. This attention to detail reflects id Software's commitment to delivering a high-quality multiplayer experience. The techniques used here have influenced countless games and network protocols, cementing Quake's legacy as a pioneer in online gaming."

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
