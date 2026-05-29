---
title: "net_udp.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/net_udp.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/net_udp.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "net-udp-c"
order: 33
description: "This file implements UDP networking for Quake's multiplayer mode, showcasing groundbreaking techniques for real-time communication in games."

summary:
  - point: "Introduced efficient UDP-based networking for multiplayer gaming"
    link: "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
    link_label: "UDP"
  - point: "Optimized for low-latency communication on 1990s hardware"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Included robust error handling for unreliable connections"
    link: "https://en.wikipedia.org/wiki/Network_socket"
    link_label: "Network socket"

enhancements:
  - id: "foundation-networking-setup"
    line_start: 1
    line_end: 49
    title: "Foundation: Networking Setup and Definitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section establishes the groundwork for Quake's networking functionality by defining key variables and including necessary system headers. The variables `net_local_adr`, `net_from`, and `net_message` represent the local network address, incoming packets, and the message buffer, respectively. The inclusion of headers like `<sys/socket.h>` and `<arpa/inet.h>` reflects the reliance on low-level Unix networking APIs. At the time, real-time multiplayer gaming was still in its infancy, and developers like John Carmack and Michael Abrash were pioneering techniques to leverage the limited capabilities of 1990s hardware. These definitions set the stage for the UDP-based networking system that would enable Quake's groundbreaking multiplayer mode. The approach influenced later engines, such as Unreal Engine and Source Engine, which adopted similar low-level networking practices for performance-critical applications."
  - id: "convert-address-structures"
    line_start: 59
    line_end: 68
    title: "Converting Between Address Structures"
    wikipedia_url: "https://en.wikipedia.org/wiki/IPv4"
    image_url: ""
    image_caption: ""
    content: "The `NetadrToSockadr` and `SockadrToNetadr` functions convert between Quake's internal `netadr_t` structure and the standard `sockaddr_in` structure used by the operating system. This translation is essential for interfacing with the underlying network stack. In 1996, the choice to use IPv4 (`AF_INET`) reflected the dominance of this protocol in networking. The functions use direct memory manipulation (`memset` and pointer casting) for efficiency, a hallmark of Carmack's programming style. These conversions allowed Quake to abstract network addresses in a way that was portable across platforms, a necessity given the game's release on multiple operating systems. The technique influenced later game engines, which adopted similar abstractions to manage network communication."
  - id: "compare-network-addresses"
    line_start: 76
    line_end: 89
    title: "Comparing Network Addresses: Base and Full"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_network"
    image_url: ""
    image_caption: ""
    content: "The `NET_CompareBaseAdr` and `NET_CompareAdr` functions provide mechanisms to compare network addresses, either by their base IP or including the port number. These functions are critical for determining whether two addresses represent the same client or server, enabling efficient handling of multiplayer connections. The decision to separate base address comparison from full address comparison reflects the need for flexibility in networking logic, such as distinguishing between clients on the same IP but different ports. In the mid-1990s, this level of granularity was uncommon in gaming but necessary for Quake's advanced multiplayer capabilities. The approach influenced later multiplayer frameworks, such as Valve's Steamworks, which adopted similar address comparison techniques for matchmaking and server management."
  - id: "string-address-conversions"
    line_start: 91
    line_end: 107
    title: "String Representations of Network Addresses"
    wikipedia_url: "https://en.wikipedia.org/wiki/IPv4_address"
    image_url: ""
    image_caption: ""
    content: "The `NET_AdrToString` and `NET_BaseAdrToString` functions convert network addresses into human-readable strings. These functions are used for debugging and logging, making it easier for developers to understand the state of the network during runtime. The use of `sprintf` to format IPv4 addresses into the familiar `x.x.x.x` notation reflects the conventions of the era. This feature was particularly useful for diagnosing connectivity issues in multiplayer games, where understanding the network state was critical. The technique influenced debugging tools in later engines, such as Unity and Unreal Engine, which provide similar functionality for network diagnostics."
  - id: "parse-string-to-address"
    line_start: 109
    line_end: 155
    title: "Parsing Strings into Network Addresses"
    wikipedia_url: "https://en.wikipedia.org/wiki/Domain_Name_System"
    image_url: ""
    image_caption: ""
    content: "The `NET_StringToAdr` function parses strings into `netadr_t` structures, supporting both domain names and IP addresses. It handles edge cases like trailing port numbers and invalid inputs, using system calls like `gethostbyname` and `inet_addr` for resolution. This functionality was crucial for enabling players to connect to servers using domain names, a feature that was not standard in games at the time. The function's robustness reflects the team's commitment to usability and reliability in multiplayer gaming. The approach influenced later games and engines, which adopted similar parsing techniques to simplify server connections for players."
  - id: "validate-client-legality"
    line_start: 157
    line_end: 186
    title: "Validating Client Legality"
    wikipedia_url: "https://en.wikipedia.org/wiki/Localhost"
    image_url: ""
    image_caption: ""
    content: "The `NET_IsClientLegal` function determines whether a client address is valid for connection. It includes checks for local addresses (`127.0.0.1`) and attempts to bind the address locally to verify its legitimacy. This level of validation was uncommon in 1996 but necessary for Quake's multiplayer mode, where security and stability were paramount. The inclusion of a conditional compilation block (`#if 0`) reflects the team's iterative approach to development, allowing them to toggle features for testing. The technique influenced later multiplayer games, which implemented more sophisticated validation mechanisms to prevent spoofing and unauthorized connections."
  - id: "receive-network-packets"
    line_start: 189
    line_end: 212
    title: "Receiving Network Packets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Packet_(networking)"
    image_url: ""
    image_caption: ""
    content: "The `NET_GetPacket` function handles incoming UDP packets, storing them in a buffer and converting their source address into a `netadr_t` structure. It includes error handling for common issues like blocked connections (`EWOULDBLOCK`) and refused connections (`ECONNREFUSED`). This function was critical for Quake's real-time multiplayer mode, where low-latency communication was essential. The use of `recvfrom` reflects the reliance on Unix networking APIs, which were state-of-the-art at the time. The approach influenced later engines, which adopted similar packet handling techniques for multiplayer games, including Valve's Source Engine and Epic's Unreal Engine."
  - id: "send-network-packets"
    line_start: 214
    line_end: 231
    title: "Sending Network Packets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Packet_(networking)"
    image_url: ""
    image_caption: ""
    content: "The `NET_SendPacket` function sends UDP packets to a specified address. It uses `sendto` for transmission and includes error handling for blocked and refused connections. This function was essential for enabling real-time communication in Quake's multiplayer mode. The decision to use UDP, rather than TCP, reflects the team's focus on minimizing latency, as UDP does not require the overhead of connection management. The approach influenced later multiplayer frameworks, which adopted UDP for performance-critical applications, including online shooters and real-time strategy games."
  - id: "open-udp-socket"
    line_start: 233
    line_end: 262
    title: "Opening a UDP Socket"
    wikipedia_url: "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
    image_url: ""
    image_caption: ""
    content: "The `UDP_OpenSocket` function creates and configures a UDP socket for communication. It includes support for binding to specific IP interfaces, a feature added by Zoid Kirsch, who contributed to Quake's networking code. The use of `ioctl` to enable non-blocking mode reflects the team's focus on real-time performance. This function was critical for initializing Quake's multiplayer mode, allowing the game to handle multiple connections efficiently. The approach influenced later engines, which adopted similar socket management techniques for multiplayer games, including Blizzard's Battle.net and Valve's Steamworks."
  - id: "initialize-networking"
    line_start: 283
    line_end: 307
    title: "Initializing Networking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `NET_Init` function initializes Quake's networking system, opening a UDP socket and setting up the message buffer. It also determines the local machine's network address, enabling the game to identify itself on the network. This function was the entry point for Quake's multiplayer mode, laying the foundation for real-time communication. The approach influenced later engines, which adopted similar initialization routines for networking, including Unreal Engine and Source Engine."
  - id: "shutdown-networking"
    line_start: 309
    line_end: 317
    title: "Shutting Down Networking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `NET_Shutdown` function closes the UDP socket, cleaning up resources used by Quake's networking system. This function was critical for ensuring stability and preventing resource leaks, particularly in long-running multiplayer sessions. The approach influenced later engines, which adopted similar shutdown routines to manage networking resources efficiently."

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
// net_main.c

#include "quakedef.h"

#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>
#include <sys/param.h>
#include <sys/ioctl.h>
#include <sys/uio.h>
#include <arpa/inet.h>
#include <errno.h>

#if defined(sun)
#include <unistd.h>
#endif

#ifdef sun
#include <sys/filio.h>
#endif

#ifdef NeXT
#include <libc.h>
#endif

netadr_t	net_local_adr;

netadr_t	net_from;
sizebuf_t	net_message;
int			net_socket;			// non blocking, for receives
int			net_send_socket;	// blocking, for sends

#define	MAX_UDP_PACKET	8192
byte		net_message_buffer[MAX_UDP_PACKET];

int gethostname (char *, int);
int close (int);

//=============================================================================

void NetadrToSockadr (netadr_t *a, struct sockaddr_in *s)
{
	memset (s, 0, sizeof(*s));
	s->sin_family = AF_INET;

	*(int *)&s->sin_addr = *(int *)&a->ip;
	s->sin_port = a->port;
}

void SockadrToNetadr (struct sockaddr_in *s, netadr_t *a)
{
	*(int *)&a->ip = *(int *)&s->sin_addr;
	a->port = s->sin_port;
}

qboolean	NET_CompareBaseAdr (netadr_t a, netadr_t b)
{
	if (a.ip[0] == b.ip[0] && a.ip[1] == b.ip[1] && a.ip[2] == b.ip[2] && a.ip[3] == b.ip[3])
		return true;
	return false;
}


qboolean	NET_CompareAdr (netadr_t a, netadr_t b)
{
	if (a.ip[0] == b.ip[0] && a.ip[1] == b.ip[1] && a.ip[2] == b.ip[2] && a.ip[3] == b.ip[3] && a.port == b.port)
		return true;
	return false;
}

char	*NET_AdrToString (netadr_t a)
{
	static	char	s[64];
	
	sprintf (s, "%i.%i.%i.%i:%i", a.ip[0], a.ip[1], a.ip[2], a.ip[3], ntohs(a.port));

	return s;
}

char	*NET_BaseAdrToString (netadr_t a)
{
	static	char	s[64];
	
	sprintf (s, "%i.%i.%i.%i", a.ip[0], a.ip[1], a.ip[2], a.ip[3]);

	return s;
}

/*
=============
NET_StringToAdr

idnewt
idnewt:28000
192.246.40.70
192.246.40.70:28000
=============
*/
qboolean	NET_StringToAdr (char *s, netadr_t *a)
{
	struct hostent	*h;
	struct sockaddr_in sadr;
	char	*colon;
	char	copy[128];
	
	
	memset (&sadr, 0, sizeof(sadr));
	sadr.sin_family = AF_INET;
	
	sadr.sin_port = 0;

	strcpy (copy, s);
	// strip off a trailing :port if present
	for (colon = copy ; *colon ; colon++)
		if (*colon == ':')
		{
			*colon = 0;
			sadr.sin_port = htons(atoi(colon+1));	
		}
	
	if (copy[0] >= '0' && copy[0] <= '9')
	{
		*(int *)&sadr.sin_addr = inet_addr(copy);
	}
	else
	{
		if (! (h = gethostbyname(copy)) )
			return 0;
		*(int *)&sadr.sin_addr = *(int *)h->h_addr_list[0];
	}
	
	SockadrToNetadr (&sadr, a);

	return true;
}

// Returns true if we can't bind the address locally--in other words, 
// the IP is NOT one of our interfaces.
qboolean NET_IsClientLegal(netadr_t *adr)
{
	struct sockaddr_in sadr;
	int newsocket;

#if 0
	if (adr->ip[0] == 127)
		return false; // no local connections period

	NetadrToSockadr (adr, &sadr);

	if ((newsocket = socket (PF_INET, SOCK_DGRAM, IPPROTO_UDP)) == -1)
		Sys_Error ("NET_IsClientLegal: socket:", strerror(errno));

	sadr.sin_port = 0;

	if( bind (newsocket, (void *)&sadr, sizeof(sadr)) == -1) 
	{
		// It is not a local address
		close(newsocket);
		return true;
	}
	close(newsocket);
	return false;
#else
	return true;
#endif
}


//=============================================================================

qboolean NET_GetPacket (void)
{
	int 	ret;
	struct sockaddr_in	from;
	int		fromlen;

	fromlen = sizeof(from);
	ret = recvfrom (net_socket, net_message_buffer, sizeof(net_message_buffer), 0, (struct sockaddr *)&from, &fromlen);
	if (ret == -1) {
		if (errno == EWOULDBLOCK)
			return false;
		if (errno == ECONNREFUSED)
			return false;
		Sys_Printf ("NET_GetPacket: %s\n", strerror(errno));
		return false;
	}

	net_message.cursize = ret;
	SockadrToNetadr (&from, &net_from);

	return ret;
}

//=============================================================================

void NET_SendPacket (int length, void *data, netadr_t to)
{
	int ret;
	struct sockaddr_in	addr;

	NetadrToSockadr (&to, &addr);

	ret = sendto (net_socket, data, length, 0, (struct sockaddr *)&addr, sizeof(addr) );
	if (ret == -1) {
		if (errno == EWOULDBLOCK)
			return;
		if (errno == ECONNREFUSED)
			return;
		Sys_Printf ("NET_SendPacket: %s\n", strerror(errno));
	}
}

//=============================================================================

int UDP_OpenSocket (int port)
{
	int newsocket;
	struct sockaddr_in address;
	qboolean _true = true;
	int i;

	if ((newsocket = socket (PF_INET, SOCK_DGRAM, IPPROTO_UDP)) == -1)
		Sys_Error ("UDP_OpenSocket: socket:", strerror(errno));
	if (ioctl (newsocket, FIONBIO, (char *)&_true) == -1)
		Sys_Error ("UDP_OpenSocket: ioctl FIONBIO:", strerror(errno));
	address.sin_family = AF_INET;
//ZOID -- check for interface binding option
	if ((i = COM_CheckParm("-ip")) != 0 && i < com_argc) {
		address.sin_addr.s_addr = inet_addr(com_argv[i+1]);
		Con_Printf("Binding to IP Interface Address of %s\n",
				inet_ntoa(address.sin_addr));
	} else
		address.sin_addr.s_addr = INADDR_ANY;
	if (port == PORT_ANY)
		address.sin_port = 0;
	else
		address.sin_port = htons((short)port);
	if( bind (newsocket, (void *)&address, sizeof(address)) == -1)
		Sys_Error ("UDP_OpenSocket: bind: %s", strerror(errno));

	return newsocket;
}

void NET_GetLocalAddress (void)
{
	char	buff[MAXHOSTNAMELEN];
	struct sockaddr_in	address;
	int		namelen;

	gethostname(buff, MAXHOSTNAMELEN);
	buff[MAXHOSTNAMELEN-1] = 0;

	NET_StringToAdr (buff, &net_local_adr);

	namelen = sizeof(address);
	if (getsockname (net_socket, (struct sockaddr *)&address, &namelen) == -1)
		Sys_Error ("NET_Init: getsockname:", strerror(errno));
	net_local_adr.port = address.sin_port;

	Con_Printf("IP address %s\n", NET_AdrToString (net_local_adr) );
}

/*
====================
NET_Init
====================
*/
void NET_Init (int port)
{
	//
	// open the single socket to be used for all communications
	//
	net_socket = UDP_OpenSocket (port);

	//
	// init the message buffer
	//
	net_message.maxsize = sizeof(net_message_buffer);
	net_message.data = net_message_buffer;

	//
	// determine my name & address
	//
	NET_GetLocalAddress ();

	Con_Printf("UDP Initialized\n");
}

/*
====================
NET_Shutdown
====================
*/
void	NET_Shutdown (void)
{
	close (net_socket);
}
```
