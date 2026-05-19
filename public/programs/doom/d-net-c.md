---
title: "d_net.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/d_net.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/d_net.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "d-net-c"
order: 20
description: "This file implements DOOM's networking protocol, enabling multiplayer functionality and synchronization across nodes."

summary:
  - point: "DOOM's networking protocol was designed to work across multiple operating systems."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "The file includes checksum-based packet validation to ensure data integrity."
    link: "https://en.wikipedia.org/wiki/Checksum"
    link_label: "Checksum"
  - point: "The networking code uses tic-based synchronization to maintain consistent gameplay across nodes."
    link: "https://doomwiki.org/wiki/Tic"
    link_label: "Tic in DOOM"
  - point: "DOOM's multiplayer design influenced future online gaming protocols."
    link: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    link_label: "Multiplayer video games"
  - point: "The code includes mechanisms for handling packet retransmission and missed tics."
    link: "https://en.wikipedia.org/wiki/Packet_loss"
    link_label: "Packet loss"

enhancements:
  - id: "networking-constants-and-structures"
    line_start: 37
    line_end: 75
    title: "Constants and structures for networking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Network_protocol"
    image_url: ""
    image_caption: ""
    content: "This section defines constants and data structures used throughout DOOM's networking code. The constants represent various commands and flags, such as `NCMD_EXIT` for exiting the game and `NCMD_RETRANSMIT` for requesting retransmission of missed packets. The `doomcom_t` and `doomdata_t` structures are central to the networking protocol, encapsulating shared data between nodes. At the time, multiplayer gaming was still in its infancy, and DOOM's approach to defining clear, reusable structures for network communication was groundbreaking. These constants and structures laid the groundwork for efficient data exchange in multiplayer games, influencing later titles like Quake and Unreal Tournament."
  - id: "netbuffer-checksum-validation"
    line_start: 95
    line_end: 115
    title: "Checksum validation for network packets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Checksum"
    image_url: ""
    image_caption: ""
    content: "The `NetbufferChecksum` function calculates a checksum for network packets to ensure data integrity during transmission. It uses a simple algorithm that multiplies packet data by its index and adds it to a running total. This method was chosen for its speed and simplicity, which were crucial given the limited processing power of 1993-era PCs. The function includes a conditional compilation directive to handle potential endian issues on UNIX systems, highlighting the challenges of cross-platform development. By incorporating checksum validation, DOOM minimized the risk of corrupted data disrupting gameplay, a technique that became standard in network protocols for games and other applications."
  - id: "expand-tics-for-synchronization"
    line_start: 117
    line_end: 135
    title: "Expanding tics for synchronization"
    wikipedia_url: "https://doomwiki.org/wiki/Tic"
    image_url: ""
    image_caption: ""
    content: "The `ExpandTics` function reconstructs full tic numbers from their truncated low-byte representation, ensuring proper synchronization across nodes. This approach saves bandwidth by transmitting only the least significant byte of tic numbers, which is sufficient for most scenarios. The function accounts for wraparound and out-of-range values, using the current tic (`maketic`) as a reference. In the early 1990s, bandwidth was a significant constraint, especially for dial-up connections. DOOM's efficient use of bandwidth through techniques like tic expansion allowed it to deliver smooth multiplayer experiences, influencing later games that adopted similar optimizations for network synchronization."
  - id: "sending-network-packets"
    line_start: 139
    line_end: 186
    title: "Sending network packets to nodes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Packet_switching"
    image_url: ""
    image_caption: ""
    content: "The `HSendPacket` function handles the transmission of network packets to other nodes. It calculates a checksum for the packet and sets various flags based on the packet's purpose, such as retransmission or setup. If the packet is intended for the local node, it stores the data in a rebound buffer instead of sending it over the network. The function also logs packet details to a debug file, aiding in troubleshooting. This modular approach to packet handling reflects the meticulous design philosophy of John Carmack and his team, who prioritized reliability and performance. The function's design influenced networking in later games, where packet management became increasingly sophisticated."
  - id: "receiving-network-packets"
    line_start: 192
    line_end: 253
    title: "Receiving and validating network packets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Packet_loss"
    image_url: ""
    image_caption: ""
    content: "The `HGetPacket` function receives packets from the network and validates them for integrity and correctness. It checks the packet's checksum, length, and flags, rejecting packets that fail validation. The function also handles special cases, such as setup packets and packets indicating game exit or kill commands. Debugging information is logged for invalid packets, providing insights into potential issues. This robust error-handling mechanism was essential for maintaining a stable multiplayer experience, especially in the face of unreliable network conditions. The principles demonstrated here—validation, error logging, and handling special cases—became foundational in the development of reliable multiplayer systems."
  - id: "processing-incoming-packets"
    line_start: 262
    line_end: 357
    title: "Processing incoming network packets"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    image_url: ""
    image_caption: ""
    content: "The `GetPackets` function processes incoming network packets, updating game state based on their contents. It handles various scenarios, such as players leaving the game, retransmission requests, and missed packets. The function uses the `ExpandTics` method to reconstruct tic numbers and updates the command store for each player. This comprehensive packet processing logic ensured that DOOM's multiplayer mode remained synchronized and responsive, even under challenging network conditions. The function's design reflects the team's deep understanding of multiplayer dynamics, paving the way for more complex systems in future games like Quake and Counter-Strike."
  - id: "network-game-initialization"
    line_start: 549
    line_end: 594
    title: "Initializing network game settings"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    image_url: ""
    image_caption: ""
    content: "The `D_CheckNetGame` function initializes settings for a network game, determining player numbers and configuring game parameters. It calls `I_InitNetwork` to set up the network environment and validates the `doomcom` buffer. The function also handles the arbitration of game settings among nodes, ensuring consistent gameplay across all participants. This initialization process was critical for DOOM's multiplayer mode, which allowed players to connect and compete seamlessly. The function's modular design and attention to detail influenced the development of network initialization routines in later multiplayer games, contributing to the evolution of online gaming."
  - id: "running-network-synchronized-tics"
    line_start: 626
    line_end: 766
    title: "Running synchronized tics across nodes"
    wikipedia_url: "https://doomwiki.org/wiki/Tic"
    image_url: ""
    image_caption: ""
    content: "The `TryRunTics` function ensures that all nodes in a multiplayer game run synchronized tics, maintaining consistent gameplay. It calculates the number of tics to run based on real-time and available tics, adapting to network conditions. The function also handles tic duplication for smoother gameplay and updates game state accordingly. This synchronization mechanism was a cornerstone of DOOM's multiplayer design, enabling fast-paced, lag-free action. The principles demonstrated here—adaptive synchronization, tic duplication, and state updates—became standard practices in multiplayer game development, influencing titles like Quake, Unreal Tournament, and modern online shooters."

---

// Emacs style mode select   -*- C++ -*- 
//-----------------------------------------------------------------------------
//
// $Id:$
//
// Copyright (C) 1993-1996 by id Software, Inc.
//
// This source is available for distribution and/or modification
// only under the terms of the DOOM Source Code License as
// published by id Software. All rights reserved.
//
// The source is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// FITNESS FOR A PARTICULAR PURPOSE. See the DOOM Source Code License
// for more details.
//
// $Log:$
//
// DESCRIPTION:
//	DOOM Network game communication and protocol,
//	all OS independend parts.
//
//-----------------------------------------------------------------------------


static const char rcsid[] = "$Id: d_net.c,v 1.3 1997/02/03 22:01:47 b1 Exp $";


#include "m_menu.h"
#include "i_system.h"
#include "i_video.h"
#include "i_net.h"
#include "g_game.h"
#include "doomdef.h"
#include "doomstat.h"

#define	NCMD_EXIT		0x80000000
#define	NCMD_RETRANSMIT		0x40000000
#define	NCMD_SETUP		0x20000000
#define	NCMD_KILL		0x10000000	// kill game
#define	NCMD_CHECKSUM	 	0x0fffffff

 
doomcom_t*	doomcom;	
doomdata_t*	netbuffer;		// points inside doomcom


//
// NETWORKING
//
// gametic is the tic about to (or currently being) run
// maketic is the tick that hasn't had control made for it yet
// nettics[] has the maketics for all players 
//
// a gametic cannot be run until nettics[] > gametic for all players
//
#define	RESENDCOUNT	10
#define	PL_DRONE	0x80	// bit flag in doomdata->player

ticcmd_t	localcmds[BACKUPTICS];

ticcmd_t        netcmds[MAXPLAYERS][BACKUPTICS];
int         	nettics[MAXNETNODES];
boolean		nodeingame[MAXNETNODES];		// set false as nodes leave game
boolean		remoteresend[MAXNETNODES];		// set when local needs tics
int		resendto[MAXNETNODES];			// set when remote needs tics
int		resendcount[MAXNETNODES];

int		nodeforplayer[MAXPLAYERS];

int             maketic;
int		lastnettic;
int		skiptics;
int		ticdup;		
int		maxsend;	// BACKUPTICS/(2*ticdup)-1


void D_ProcessEvents (void); 
void G_BuildTiccmd (ticcmd_t *cmd); 
void D_DoAdvanceDemo (void);
 
boolean		reboundpacket;
doomdata_t	reboundstore;



//
//
//
int NetbufferSize (void)
{
    return (int)&(((doomdata_t *)0)->cmds[netbuffer->numtics]); 
}

//
// Checksum 
//
unsigned NetbufferChecksum (void)
{
    unsigned		c;
    int		i,l;

    c = 0x1234567;

    // FIXME -endianess?
#ifdef NORMALUNIX
    return 0;			// byte order problems
#endif

    l = (NetbufferSize () - (int)&(((doomdata_t *)0)->retransmitfrom))/4;
    for (i=0 ; i<l ; i++)
	c += ((unsigned *)&netbuffer->retransmitfrom)[i] * (i+1);

    return c & NCMD_CHECKSUM;
}

//
//
//
int ExpandTics (int low)
{
    int	delta;
	
    delta = low - (maketic&0xff);
	
    if (delta >= -64 && delta <= 64)
	return (maketic&~0xff) + low;
    if (delta > 64)
	return (maketic&~0xff) - 256 + low;
    if (delta < -64)
	return (maketic&~0xff) + 256 + low;
		
    I_Error ("ExpandTics: strange value %i at maketic %i",low,maketic);
    return 0;
}



//
// HSendPacket
//
void
HSendPacket
 (int	node,
  int	flags )
{
    netbuffer->checksum = NetbufferChecksum () | flags;

    if (!node)
    {
	reboundstore = *netbuffer;
	reboundpacket = true;
	return;
    }

    if (demoplayback)
	return;

    if (!netgame)
	I_Error ("Tried to transmit to another node");
		
    doomcom->command = CMD_SEND;
    doomcom->remotenode = node;
    doomcom->datalength = NetbufferSize ();
	
    if (debugfile)
    {
	int		i;
	int		realretrans;
	if (netbuffer->checksum & NCMD_RETRANSMIT)
	    realretrans = ExpandTics (netbuffer->retransmitfrom);
	else
	    realretrans = -1;

	fprintf (debugfile,"send (%i + %i, R %i) [%i] ",
		 ExpandTics(netbuffer->starttic),
		 netbuffer->numtics, realretrans, doomcom->datalength);
	
	for (i=0 ; i<doomcom->datalength ; i++)
	    fprintf (debugfile,"%i ",((byte *)netbuffer)[i]);

	fprintf (debugfile,"\n");
    }

    I_NetCmd ();
}

//
// HGetPacket
// Returns false if no packet is waiting
//
boolean HGetPacket (void)
{	
    if (reboundpacket)
    {
	*netbuffer = reboundstore;
	doomcom->remotenode = 0;
	reboundpacket = false;
	return true;
    }

    if (!netgame)
	return false;

    if (demoplayback)
	return false;
		
    doomcom->command = CMD_GET;
    I_NetCmd ();
    
    if (doomcom->remotenode == -1)
	return false;

    if (doomcom->datalength != NetbufferSize ())
    {
	if (debugfile)
	    fprintf (debugfile,"bad packet length %i\n",doomcom->datalength);
	return false;
    }
	
    if (NetbufferChecksum () != (netbuffer->checksum&NCMD_CHECKSUM) )
    {
	if (debugfile)
	    fprintf (debugfile,"bad packet checksum\n");
	return false;
    }

    if (debugfile)
    {
	int		realretrans;
	int	i;
			
	if (netbuffer->checksum & NCMD_SETUP)
	    fprintf (debugfile,"setup packet\n");
	else
	{
	    if (netbuffer->checksum & NCMD_RETRANSMIT)
		realretrans = ExpandTics (netbuffer->retransmitfrom);
	    else
		realretrans = -1;
	    
	    fprintf (debugfile,"get %i = (%i + %i, R %i)[%i] ",
		     doomcom->remotenode,
		     ExpandTics(netbuffer->starttic),
		     netbuffer->numtics, realretrans, doomcom->datalength);

	    for (i=0 ; i<doomcom->datalength ; i++)
		fprintf (debugfile,"%i ",((byte *)netbuffer)[i]);
	    fprintf (debugfile,"\n");
	}
    }
    return true;	
}


//
// GetPackets
//
char    exitmsg[80];

void GetPackets (void)
{
    int		netconsole;
    int		netnode;
    ticcmd_t	*src, *dest;
    int		realend;
    int		realstart;
				 
    while ( HGetPacket() )
    {
	if (netbuffer->checksum & NCMD_SETUP)
	    continue;		// extra setup packet
			
	netconsole = netbuffer->player & ~PL_DRONE;
	netnode = doomcom->remotenode;
	
	// to save bytes, only the low byte of tic numbers are sent
	// Figure out what the rest of the bytes are
	realstart = ExpandTics (netbuffer->starttic);		
	realend = (realstart+netbuffer->numtics);
	
	// check for exiting the game
	if (netbuffer->checksum & NCMD_EXIT)
	{
	    if (!nodeingame[netnode])
		continue;
	    nodeingame[netnode] = false;
	    playeringame[netconsole] = false;
	    strcpy (exitmsg, "Player 1 left the game");
	    exitmsg[7] += netconsole;
	    players[consoleplayer].message = exitmsg;
	    if (demorecording)
		G_CheckDemoStatus ();
	    continue;
	}
	
	// check for a remote game kill
	if (netbuffer->checksum & NCMD_KILL)
	    I_Error ("Killed by network driver");

	nodeforplayer[netconsole] = netnode;
	
	// check for retransmit request
	if ( resendcount[netnode] <= 0 
	     && (netbuffer->checksum & NCMD_RETRANSMIT) )
	{
	    resendto[netnode] = ExpandTics(netbuffer->retransmitfrom);
	    if (debugfile)
		fprintf (debugfile,"retransmit from %i\n", resendto[netnode]);
	    resendcount[netnode] = RESENDCOUNT;
	}
	else
	    resendcount[netnode]--;
	
	// check for out of order / duplicated packet		
	if (realend == nettics[netnode])
	    continue;
			
	if (realend < nettics[netnode])
	{
	    if (debugfile)
		fprintf (debugfile,
			 "out of order packet (%i + %i)\n" ,
			 realstart,netbuffer->numtics);
	    continue;
	}
	
	// check for a missed packet
	if (realstart > nettics[netnode])
	{
	    // stop processing until the other system resends the missed tics
	    if (debugfile)
		fprintf (debugfile,
			 "missed tics from %i (%i - %i)\n",
			 netnode, realstart, nettics[netnode]);
	    remoteresend[netnode] = true;
	    continue;
	}

	// update command store from the packet
        {
	    int		start;

	    remoteresend[netnode] = false;
		
	    start = nettics[netnode] - realstart;		
	    src = &netbuffer->cmds[start];

	    while (nettics[netnode] < realend)
	    {
		dest = &netcmds[netconsole][nettics[netnode]%BACKUPTICS];
		nettics[netnode]++;
		*dest = *src;
		src++;
	    }
	}
    }
}


//
// NetUpdate
// Builds ticcmds for console player,
// sends out a packet
//
int      gametime;

void NetUpdate (void)
{
    int             nowtime;
    int             newtics;
    int				i,j;
    int				realstart;
    int				gameticdiv;
    
    // check time
    nowtime = I_GetTime ()/ticdup;
    newtics = nowtime - gametime;
    gametime = nowtime;
	
    if (newtics <= 0) 	// nothing new to update
	goto listen; 

    if (skiptics <= newtics)
    {
	newtics -= skiptics;
	skiptics = 0;
    }
    else
    {
	skiptics -= newtics;
	newtics = 0;
    }
	
		
    netbuffer->player = consoleplayer;
    
    // build new ticcmds for console player
    gameticdiv = gametic/ticdup;
    for (i=0 ; i<newtics ; i++)
    {
	I_StartTic ();
	D_ProcessEvents ();
	if (maketic - gameticdiv >= BACKUPTICS/2-1)
	    break;          // can't hold any more
	
	//printf ("mk:%i ",maketic);
	G_BuildTiccmd (&localcmds[maketic%BACKUPTICS]);
	maketic++;
    }


    if (singletics)
	return;         // singletic update is syncronous
    
    // send the packet to the other nodes
    for (i=0 ; i<doomcom->numnodes ; i++)
	if (nodeingame[i])
	{
	    netbuffer->starttic = realstart = resendto[i];
	    netbuffer->numtics = maketic - realstart;
	    if (netbuffer->numtics > BACKUPTICS)
		I_Error ("NetUpdate: netbuffer->numtics > BACKUPTICS");

	    resendto[i] = maketic - doomcom->extratics;

	    for (j=0 ; j< netbuffer->numtics ; j++)
		netbuffer->cmds[j] = 
		    localcmds[(realstart+j)%BACKUPTICS];
					
	    if (remoteresend[i])
	    {
		netbuffer->retransmitfrom = nettics[i];
		HSendPacket (i, NCMD_RETRANSMIT);
	    }
	    else
	    {
		netbuffer->retransmitfrom = 0;
		HSendPacket (i, 0);
	    }
	}
    
    // listen for other packets
  listen:
    GetPackets ();
}



//
// CheckAbort
//
void CheckAbort (void)
{
    event_t *ev;
    int		stoptic;
	
    stoptic = I_GetTime () + 2; 
    while (I_GetTime() < stoptic) 
	I_StartTic (); 
	
    I_StartTic ();
    for ( ; eventtail != eventhead 
	      ; eventtail = (++eventtail)&(MAXEVENTS-1) ) 
    { 
	ev = &events[eventtail]; 
	if (ev->type == ev_keydown && ev->data1 == KEY_ESCAPE)
	    I_Error ("Network game synchronization aborted.");
    } 
}


//
// D_ArbitrateNetStart
//
void D_ArbitrateNetStart (void)
{
    int		i;
    boolean	gotinfo[MAXNETNODES];
	
    autostart = true;
    memset (gotinfo,0,sizeof(gotinfo));
	
    if (doomcom->consoleplayer)
    {
	// listen for setup info from key player
	printf ("listening for network start info...\n");
	while (1)
	{
	    CheckAbort ();
	    if (!HGetPacket ())
		continue;
	    if (netbuffer->checksum & NCMD_SETUP)
	    {
		if (netbuffer->player != VERSION)
		    I_Error ("Different DOOM versions cannot play a net game!");
		startskill = netbuffer->retransmitfrom & 15;
		deathmatch = (netbuffer->retransmitfrom & 0xc0) >> 6;
		nomonsters = (netbuffer->retransmitfrom & 0x20) > 0;
		respawnparm = (netbuffer->retransmitfrom & 0x10) > 0;
		startmap = netbuffer->starttic & 0x3f;
		startepisode = netbuffer->starttic >> 6;
		return;
	    }
	}
    }
    else
    {
	// key player, send the setup info
	printf ("sending network start info...\n");
	do
	{
	    CheckAbort ();
	    for (i=0 ; i<doomcom->numnodes ; i++)
	    {
		netbuffer->retransmitfrom = startskill;
		if (deathmatch)
		    netbuffer->retransmitfrom |= (deathmatch<<6);
		if (nomonsters)
		    netbuffer->retransmitfrom |= 0x20;
		if (respawnparm)
		    netbuffer->retransmitfrom |= 0x10;
		netbuffer->starttic = startepisode * 64 + startmap;
		netbuffer->player = VERSION;
		netbuffer->numtics = 0;
		HSendPacket (i, NCMD_SETUP);
	    }

#if 1
	    for(i = 10 ; i  &&  HGetPacket(); --i)
	    {
		if((netbuffer->player&0x7f) < MAXNETNODES)
		    gotinfo[netbuffer->player&0x7f] = true;
	    }
#else
	    while (HGetPacket ())
	    {
		gotinfo[netbuffer->player&0x7f] = true;
	    }
#endif

	    for (i=1 ; i<doomcom->numnodes ; i++)
		if (!gotinfo[i])
		    break;
	} while (i < doomcom->numnodes);
    }
}

//
// D_CheckNetGame
// Works out player numbers among the net participants
//
extern	int			viewangleoffset;

void D_CheckNetGame (void)
{
    int             i;
	
    for (i=0 ; i<MAXNETNODES ; i++)
    {
	nodeingame[i] = false;
       	nettics[i] = 0;
	remoteresend[i] = false;	// set when local needs tics
	resendto[i] = 0;		// which tic to start sending
    }
	
    // I_InitNetwork sets doomcom and netgame
    I_InitNetwork ();
    if (doomcom->id != DOOMCOM_ID)
	I_Error ("Doomcom buffer invalid!");
    
    netbuffer = &doomcom->data;
    consoleplayer = displayplayer = doomcom->consoleplayer;
    if (netgame)
	D_ArbitrateNetStart ();

    printf ("startskill %i  deathmatch: %i  startmap: %i  startepisode: %i\n",
	    startskill, deathmatch, startmap, startepisode);
	
    // read values out of doomcom
    ticdup = doomcom->ticdup;
    maxsend = BACKUPTICS/(2*ticdup)-1;
    if (maxsend<1)
	maxsend = 1;
			
    for (i=0 ; i<doomcom->numplayers ; i++)
	playeringame[i] = true;
    for (i=0 ; i<doomcom->numnodes ; i++)
	nodeingame[i] = true;
	
    printf ("player %i of %i (%i nodes)\n",
	    consoleplayer+1, doomcom->numplayers, doomcom->numnodes);

}


//
// D_QuitNetGame
// Called before quitting to leave a net game
// without hanging the other players
//
void D_QuitNetGame (void)
{
    int             i, j;
	
    if (debugfile)
	fclose (debugfile);
		
    if (!netgame || !usergame || consoleplayer == -1 || demoplayback)
	return;
	
    // send a bunch of packets for security
    netbuffer->player = consoleplayer;
    netbuffer->numtics = 0;
    for (i=0 ; i<4 ; i++)
    {
	for (j=1 ; j<doomcom->numnodes ; j++)
	    if (nodeingame[j])
		HSendPacket (j, NCMD_EXIT);
	I_WaitVBL (1);
    }
}



//
// TryRunTics
//
int	frametics[4];
int	frameon;
int	frameskip[4];
int	oldnettics;

extern	boolean	advancedemo;

void TryRunTics (void)
{
    int		i;
    int		lowtic;
    int		entertic;
    static int	oldentertics;
    int		realtics;
    int		availabletics;
    int		counts;
    int		numplaying;
    
    // get real tics		
    entertic = I_GetTime ()/ticdup;
    realtics = entertic - oldentertics;
    oldentertics = entertic;
    
    // get available tics
    NetUpdate ();
	
    lowtic = MAXINT;
    numplaying = 0;
    for (i=0 ; i<doomcom->numnodes ; i++)
    {
	if (nodeingame[i])
	{
	    numplaying++;
	    if (nettics[i] < lowtic)
		lowtic = nettics[i];
	}
    }
    availabletics = lowtic - gametic/ticdup;
    
    // decide how many tics to run
    if (realtics < availabletics-1)
	counts = realtics+1;
    else if (realtics < availabletics)
	counts = realtics;
    else
	counts = availabletics;
    
    if (counts < 1)
	counts = 1;
		
    frameon++;

    if (debugfile)
	fprintf (debugfile,
		 "=======real: %i  avail: %i  game: %i\n",
		 realtics, availabletics,counts);

    if (!demoplayback)
    {	
	// ideally nettics[0] should be 1 - 3 tics above lowtic
	// if we are consistantly slower, speed up time
	for (i=0 ; i<MAXPLAYERS ; i++)
	    if (playeringame[i])
		break;
	if (consoleplayer == i)
	{
	    // the key player does not adapt
	}
	else
	{
	    if (nettics[0] <= nettics[nodeforplayer[i]])
	    {
		gametime--;
		// printf ("-");
	    }
	    frameskip[frameon&3] = (oldnettics > nettics[nodeforplayer[i]]);
	    oldnettics = nettics[0];
	    if (frameskip[0] && frameskip[1] && frameskip[2] && frameskip[3])
	    {
		skiptics = 1;
		// printf ("+");
	    }
	}
    }// demoplayback
	
    // wait for new tics if needed
    while (lowtic < gametic/ticdup + counts)	
    {
	NetUpdate ();   
	lowtic = MAXINT;
	
	for (i=0 ; i<doomcom->numnodes ; i++)
	    if (nodeingame[i] && nettics[i] < lowtic)
		lowtic = nettics[i];
	
	if (lowtic < gametic/ticdup)
	    I_Error ("TryRunTics: lowtic < gametic");
				
	// don't stay in here forever -- give the menu a chance to work
	if (I_GetTime ()/ticdup - entertic >= 20)
	{
	    M_Ticker ();
	    return;
	} 
    }
    
    // run the count * ticdup dics
    while (counts--)
    {
	for (i=0 ; i<ticdup ; i++)
	{
	    if (gametic/ticdup > lowtic)
		I_Error ("gametic>lowtic");
	    if (advancedemo)
		D_DoAdvanceDemo ();
	    M_Ticker ();
	    G_Ticker ();
	    gametic++;
	    
	    // modify command for duplicated tics
	    if (i != ticdup-1)
	    {
		ticcmd_t	*cmd;
		int			buf;
		int			j;
				
		buf = (gametic/ticdup)%BACKUPTICS; 
		for (j=0 ; j<MAXPLAYERS ; j++)
		{
		    cmd = &netcmds[j][buf];
		    cmd->chatchar = 0;
		    if (cmd->buttons & BT_SPECIAL)
			cmd->buttons = 0;
		}
	    }
	}
	NetUpdate ();	// check for new console commands
    }
}