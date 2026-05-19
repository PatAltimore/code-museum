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
description: "This file implements the UDP networking layer for Quake, enabling its groundbreaking multiplayer capabilities."

summary:
  - point: "Efficient use of UDP for real-time gaming"
    link: "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
    link_label: "UDP"
  - point: "Dynamic handling of IP addresses and ports"
    link: "https://en.wikipedia.org/wiki/IP_address"
    link_label: "IP Address"
  - point: "Socket programming techniques for non-blocking communication"
    link: "https://en.wikipedia.org/wiki/Network_socket"
    link_label: "Socket Programming"
  - point: "Optimization for 1990s hardware constraints"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "GPL licensing of the code in 1999"
    link: "https://en.wikipedia.org/wiki/GNU_General_Public_License"
    link_label: "GPL"

enhancements:
  - id: "foundation-network-setup"
    line_start: 17
    line_end: 44
    title: "Foundation: Network Setup and Definitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Socket_programming"
    image_url: ""
    image_caption: ""
    content: "These lines establish the foundational elements of Quake's UDP networking layer. The variables `net_local_adr`, `net_from`, and `net_message` define the local network address, incoming packet source, and the message buffer, respectively. The inclusion of headers like `<sys/socket.h>` and `<arpa/inet.h>` signals the use of low-level socket programming, a necessity for real-time multiplayer gaming in the 1990s. At the time, developers like John Carmack were pushing the boundaries of what was possible in networked gaming, constrained by hardware with limited processing power and memory. This setup reflects the careful planning needed to handle network communication efficiently while minimizing latency. The decision to use UDP over TCP was deliberate: UDP's lack of connection overhead made it ideal for fast-paced games like Quake. This foundational setup would become a template for many multiplayer games that followed."
  - id: "convert-address-structures"
    line_start: 61
    line_end: 68
    title: "Converting Between Address Structures"
    wikipedia_url: "https://en.wikipedia.org/wiki/IPv4"
    image_url: ""
    image_caption: ""
    content: "The `NetadrToSockadr` and `SockadrToNetadr` functions handle conversions between Quake's internal `netadr_t` structure and the system's `sockaddr_in` structure. This translation is critical for interfacing with the operating system's networking APIs. In 1996, IPv4 was the dominant protocol, and these conversions ensured compatibility with the underlying hardware and network stack. John Carmack and his team were known for their meticulous attention to efficiency, and these functions reflect that ethos. By directly manipulating memory with techniques like `memset` and pointer casting, they avoided unnecessary overhead. These conversions were foundational for sending and receiving packets, enabling Quake's multiplayer experience to function seamlessly across different platforms and network configurations."
  - id: "compare-network-addresses"
    line_start: 76
    line_end: 89
    title: "Comparing Network Addresses: Base and Full"
    wikipedia_url: "https://en.wikipedia.org/wiki/Network_address"
    image_url: ""
    image_caption: ""
    content: "The functions `NET_CompareBaseAdr` and `NET_CompareAdr` provide mechanisms to compare network addresses, either by their base IP or by both IP and port. This distinction was vital for Quake's multiplayer logic, where differentiating between players and servers often required precise address matching. In the mid-1990s, multiplayer gaming was still in its infancy, and handling network addresses efficiently was a technical challenge. These functions reflect the team's pragmatic approach: simple comparisons using direct array indexing and logical operators. Such techniques were not only fast but also easy to debug, a crucial consideration given the tight development timelines id Software faced. These address comparison functions laid the groundwork for features like server discovery and player authentication."
  - id: "string-address-conversion"
    line_start: 91
    line_end: 110
    title: "String Conversion for Network Addresses"
    wikipedia_url: "https://en.wikipedia.org/wiki/IPv4_address"
    image_url: ""
    image_caption: ""
    content: "The functions `NET_AdrToString` and `NET_BaseAdrToString` convert network addresses into human-readable strings. This capability was essential for debugging and user-facing features like server lists. In the mid-1990s, graphical interfaces for multiplayer games were rudimentary, and textual representations of IP addresses were often the primary means of interacting with networked systems. The use of `sprintf` to format strings reflects the team's focus on simplicity and portability. These functions highlight the dual role of networking code in Quake: it had to be both performant for real-time gameplay and accessible for players and developers alike. This approach to string conversion became a standard practice in networking libraries and tools."
  - id: "parse-string-to-address"
    line_start: 119
    line_end: 158
    title: "Parsing Strings into Network Addresses"
    wikipedia_url: "https://en.wikipedia.org/wiki/Domain_Name_System"
    image_url: ""
    image_caption: ""
    content: "The `NET_StringToAdr` function parses strings into `netadr_t` structures, supporting both IP addresses and domain names. This flexibility was crucial for Quake's multiplayer system, allowing players to connect using either direct IPs or DNS-resolved hostnames. The function's logic, including handling port numbers and resolving domain names via `gethostbyname`, reflects the team's deep understanding of networking protocols. In the mid-1990s, DNS resolution was less reliable than today, and fallback mechanisms like direct IP parsing were necessary. This function embodies the team's commitment to robustness, ensuring that Quake could operate in diverse network environments. The parsing logic here influenced similar features in later multiplayer games and networking libraries."
  - id: "udp-socket-initialization"
    line_start: 235
    line_end: 262
    title: "Opening UDP Sockets for Communication"
    wikipedia_url: "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
    image_url: ""
    image_caption: ""
    content: "The `UDP_OpenSocket` function initializes a UDP socket for network communication. This is a cornerstone of Quake's multiplayer system, enabling the game to send and receive packets with minimal latency. The function includes error handling for socket creation, binding, and configuration, reflecting the team's focus on reliability. The use of `ioctl` to set non-blocking mode was a deliberate choice to ensure smooth gameplay, avoiding delays caused by blocking calls. In the mid-1990s, socket programming was a complex and error-prone task, but id Software's engineers were adept at navigating these challenges. This function exemplifies their ability to balance performance and stability, laying the groundwork for Quake's revolutionary multiplayer experience."
  - id: "network-initialization"
    line_start: 288
    line_end: 310
    title: "Initializing the Networking System"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `NET_Init` function sets up the networking system for Quake, opening a UDP socket, initializing the message buffer, and determining the local network address. This initialization process was critical for enabling multiplayer functionality, a defining feature of Quake. At the time, real-time multiplayer gaming was a technical frontier, and efficient network initialization was a prerequisite for success. The function's simplicity belies its importance: by encapsulating socket creation and address determination, it provided a reliable foundation for the game's networking layer. This approach to initialization influenced the design of networking systems in later games, highlighting id Software's role as a pioneer in multiplayer gaming."
  - id: "network-shutdown"
    line_start: 311
    line_end: 313
    title: "Gracefully Shutting Down Networking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Socket_programming"
    image_url: ""
    image_caption: ""
    content: "The `NET_Shutdown` function closes the UDP socket, ensuring a clean shutdown of the networking system. While simple, this function reflects the team's attention to detail, preventing resource leaks and ensuring stability. In the mid-1990s, proper resource management was essential, especially in games like Quake that pushed hardware to its limits. This graceful shutdown process became a standard practice in networking code, influencing the design of similar functions in later games and libraries. It underscores id Software's commitment to robust and reliable software engineering."

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
