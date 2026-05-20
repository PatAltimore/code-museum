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
description: "This file manages UDP networking for Quake's multiplayer functionality, showcasing early techniques for real-time communication in games."

summary:
  - point: "Implements UDP-based networking for multiplayer"
    link: "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
    link_label: "UDP Protocol"
  - point: "Handles IP address conversion and validation"
    link: "https://en.wikipedia.org/wiki/IP_address"
    link_label: "IP Address"
  - point: "Introduces socket-based communication in games"
    link: "https://en.wikipedia.org/wiki/Berkeley_sockets"
    link_label: "Berkeley Sockets"
  - point: "Optimized for low-latency real-time gameplay"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake Multiplayer"
  - point: "Influenced modern multiplayer game networking"
    link: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    link_label: "Multiplayer Gaming"

enhancements:
  - id: "foundation-networking-setup"
    line_start: 19
    line_end: 57
    title: "Foundation: Networking Setup for Quake"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This section initializes fundamental networking variables and includes necessary headers for socket-based communication. The variables `net_local_adr`, `net_from`, and `net_message` are used to store local and remote network addresses and message buffers, while `net_socket` and `net_send_socket` manage non-blocking and blocking socket operations. By defining `MAX_UDP_PACKET` as 8192 bytes, the code accommodates large UDP packets, which are crucial for transmitting game state updates efficiently. In 1996, multiplayer gaming was still in its infancy, and Quake's reliance on UDP was a deliberate choice to minimize latency compared to TCP. This setup laid the groundwork for Quake's revolutionary multiplayer capabilities, influencing countless games and engines that followed, including Unreal Engine and Source Engine."
  - id: "convert-network-addresses"
    line_start: 59
    line_end: 74
    title: "Converting Network Addresses: Sockadr and Netadr"
    wikipedia_url: "https://en.wikipedia.org/wiki/Socket_address"
    image_url: ""
    image_caption: ""
    content: "The `NetadrToSockadr` and `SockadrToNetadr` functions convert between Quake's internal `netadr_t` structure and the standard `sockaddr_in` used by the socket API. This conversion ensures compatibility between the game's networking code and the underlying operating system's socket implementation. In the mid-1990s, game developers often had to bridge custom data structures with system-level APIs, a challenge exacerbated by platform-specific differences. These functions reflect id Software's pragmatic approach to cross-platform development, enabling Quake to run on multiple operating systems. This technique became a standard practice in game networking, influencing later engines like Unity and Unreal."
  - id: "compare-network-addresses"
    line_start: 76
    line_end: 89
    title: "Comparing Network Addresses for Multiplayer"
    wikipedia_url: "https://en.wikipedia.org/wiki/IP_address"
    image_url: ""
    image_caption: ""
    content: "The `NET_CompareBaseAdr` and `NET_CompareAdr` functions check whether two network addresses match, either by IP alone or by IP and port. These comparisons are essential for identifying players and servers in a multiplayer environment. In the 1990s, multiplayer games like Quake had to handle IP-based identification manually, as higher-level abstractions like NAT traversal or matchmaking services were not yet common. These functions exemplify the low-level control developers exercised over networking, a necessity for ensuring reliable connections in an era of dial-up internet. The logic here influenced later multiplayer frameworks, including Steamworks and Xbox Live."
  - id: "string-to-address-conversion"
    line_start: 109
    line_end: 155
    title: "String to Address Conversion: Parsing IPs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hostname"
    image_url: ""
    image_caption: ""
    content: "The `NET_StringToAdr` function converts a string representation of an IP address into the `netadr_t` structure, handling both numeric IPs and hostnames. It also supports optional port numbers, making it versatile for parsing server addresses. This function relies on system calls like `gethostbyname` and `inet_addr`, bridging human-readable inputs with machine-level networking. In 1996, this feature was crucial for enabling players to connect to servers via command-line inputs or configuration files. The ability to parse and resolve hostnames influenced later game engines and networking libraries, including SDL_net and RakNet, which adopted similar approaches for user-friendly server connections."
  - id: "udp-packet-reception"
    line_start: 189
    line_end: 212
    title: "Receiving UDP Packets: Real-Time Communication"
    wikipedia_url: "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
    image_url: ""
    image_caption: ""
    content: "The `NET_GetPacket` function handles incoming UDP packets, storing their contents in `net_message_buffer` and converting the sender's address into Quake's internal format. It uses the `recvfrom` system call, checking for errors like `EWOULDBLOCK` and `ECONNREFUSED` to ensure robust handling of network conditions. UDP was chosen for its low overhead and speed, critical for real-time multiplayer games where latency directly impacts gameplay. This function exemplifies the meticulous error handling required to maintain stable connections in an era of unreliable internet. Techniques like these influenced modern multiplayer engines, including Valve's Source Engine and Blizzard's Battle.net."
  - id: "udp-packet-sending"
    line_start: 214
    line_end: 233
    title: "Sending UDP Packets: Efficient Data Transmission"
    wikipedia_url: "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
    image_url: ""
    image_caption: ""
    content: "The `NET_SendPacket` function transmits data to a specified network address using the `sendto` system call. It converts the destination address into the `sockaddr_in` format and handles errors like `EWOULDBLOCK` and `ECONNREFUSED`. This function is a counterpart to `NET_GetPacket`, enabling bidirectional communication essential for multiplayer gameplay. By leveraging UDP, Quake achieves low-latency data transmission, a critical factor for its fast-paced action. This approach influenced countless multiplayer games and engines, from Counter-Strike to Fortnite, which adopted similar techniques for efficient network communication."
  - id: "udp-socket-initialization"
    line_start: 233
    line_end: 262
    title: "UDP Socket Initialization: Binding and Configuration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Berkeley_sockets"
    image_url: ""
    image_caption: ""
    content: "The `UDP_OpenSocket` function creates and configures a UDP socket for communication. It sets the socket to non-blocking mode using `ioctl` and binds it to a specified port or the default interface. This function also supports binding to specific IP addresses via command-line arguments, showcasing id Software's attention to flexibility and user control. In 1996, socket programming was a complex but essential skill for multiplayer game development, and this function reflects the team's expertise in low-level networking. The techniques here influenced later engines and libraries, including DirectPlay and ENet, which built on similar socket initialization strategies."
  - id: "network-initialization"
    line_start: 283
    line_end: 307
    title: "Network Initialization: Setting Up Multiplayer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    image_url: ""
    image_caption: ""
    content: "The `NET_Init` function initializes Quake's networking subsystem, opening a UDP socket, setting up the message buffer, and determining the local machine's IP address. This setup is crucial for enabling multiplayer functionality, allowing the game to send and receive data over the network. In 1996, this level of networking sophistication was groundbreaking, enabling Quake to support real-time multiplayer gameplay over the internet. The techniques here influenced the development of multiplayer frameworks like Steamworks and Xbox Live, which built on the foundational concepts introduced by Quake."
  - id: "network-shutdown"
    line_start: 309
    line_end: 317
    title: "Network Shutdown: Closing Connections Gracefully"
    wikipedia_url: "https://en.wikipedia.org/wiki/Berkeley_sockets"
    image_url: ""
    image_caption: ""
    content: "The `NET_Shutdown` function closes the UDP socket, ensuring that resources are released when the networking subsystem is no longer needed. This simple yet essential step prevents resource leaks and maintains system stability. In the mid-1990s, proper shutdown procedures were a hallmark of robust software design, reflecting id Software's commitment to quality. This approach influenced later game engines and networking libraries, which adopted similar practices for managing network resources."

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
