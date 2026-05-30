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
description: "This file implements UDP networking for Quake's multiplayer system, showcasing techniques for socket management and IP address handling in the mid-1990s."

summary:
  - point: "Introduces efficient UDP-based networking for multiplayer gaming"
    link: "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
    link_label: "UDP Protocol"
  - point: "Demonstrates low-level socket programming in C"
    link: "https://en.wikipedia.org/wiki/Berkeley_sockets"
    link_label: "Berkeley Sockets"
  - point: "Handles IP address conversion and validation"
    link: "https://en.wikipedia.org/wiki/IP_address"
    link_label: "IP Address"
  - point: "Optimized for hardware constraints of the 1990s"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Influenced future multiplayer game engines"
    link: "https://en.wikipedia.org/wiki/Source_engine"
    link_label: "Source Engine"

enhancements:
  - id: "convert-ip-to-socket-address"
    line_start: 59
    line_end: 68
    title: "How Quake Translates IP to Socket Addresses"
    wikipedia_url: "https://en.wikipedia.org/wiki/Socket_(networking)"
    image_url: ""
    image_caption: ""
    content: "This function, `NetadrToSockadr`, converts Quake's internal representation of an IP address (`netadr_t`) into a `sockaddr_in` structure used by the Berkeley socket API. The function sets the socket family to `AF_INET` (IPv4) and directly copies the IP and port values. At the time, this kind of direct manipulation of memory was common in C programming, especially for performance-critical applications like games. John Carmack and Michael Abrash were known for their focus on optimization, and this function exemplifies their approach to minimizing overhead in networking code. By tightly integrating network address translation into the game's engine, Quake was able to achieve seamless multiplayer connectivity. This technique influenced later game engines, such as Unreal Engine and Source, which adopted similar low-level networking practices."
  - id: "compare-ip-addresses"
    line_start: 76
    line_end: 81
    title: "The Simple Trick to Compare IPs"
    wikipedia_url: "https://en.wikipedia.org/wiki/IP_address"
    image_url: ""
    image_caption: ""
    content: "The `NET_CompareBaseAdr` function compares two IP addresses by checking each byte individually. This straightforward approach avoids the complexity of higher-level abstractions and ensures compatibility across different platforms. In the mid-1990s, networking code had to be highly efficient due to limited CPU and memory resources. By focusing on raw byte comparisons, id Software ensured that Quake's multiplayer system could handle real-time communication without introducing latency. This method of comparing IP addresses became a standard practice in many game engines and networking libraries, as it balances simplicity with performance."
  - id: "string-to-ip-conversion"
    line_start: 109
    line_end: 155
    title: "Turning Strings into IP Addresses"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hostname"
    image_url: ""
    image_caption: ""
    content: "The `NET_StringToAdr` function parses a string representation of an IP address or hostname and converts it into a `netadr_t` structure. It handles both numeric IPs (e.g., `192.168.1.1`) and hostnames (e.g., `example.com`), resolving the latter using the `gethostbyname` function. This flexibility was crucial for Quake's multiplayer system, allowing players to connect using either direct IPs or domain names. In 1996, DNS resolution was less reliable than today, and many players relied on direct IP connections. The function also supports port numbers appended to the address, a feature that became standard in multiplayer gaming. This approach influenced later games and engines, including those built on Quake's successor, the id Tech series."
  - id: "udp-socket-initialization"
    line_start: 233
    line_end: 262
    title: "Opening UDP Sockets for Multiplayer Gaming"
    wikipedia_url: "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
    image_url: ""
    image_caption: ""
    content: "The `UDP_OpenSocket` function initializes a UDP socket for communication. It sets the socket to non-blocking mode using the `ioctl` function and binds it to a specified port or interface. This design reflects the challenges of real-time multiplayer gaming in the 1990s, where low latency was critical. UDP was chosen over TCP due to its minimal overhead and suitability for fast-paced games like Quake. The function also includes an option to bind to a specific IP interface, a feature added by programmer Zoid Kirsch to support advanced networking setups. This socket initialization routine became a template for many game engines, influencing networking code in titles like Half-Life and Counter-Strike."
  - id: "initialize-networking"
    line_start: 283
    line_end: 307
    title: "How Quake Sets Up Its Networking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `NET_Init` function is the entry point for setting up Quake's networking system. It opens a UDP socket, initializes the message buffer, and determines the local machine's IP address and port. This sequence ensures that the game is ready to send and receive packets for multiplayer communication. In 1996, setting up networking was a complex task, requiring direct interaction with system APIs and careful handling of edge cases. John Carmack's expertise in low-level programming is evident in this function, which balances simplicity with robustness. The networking initialization in Quake laid the groundwork for future multiplayer systems, influencing engines like Unreal Engine and Source. It also demonstrated the viability of UDP for real-time gaming, a choice that remains relevant in modern game development."

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