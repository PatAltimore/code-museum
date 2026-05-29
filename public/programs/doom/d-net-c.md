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
description: "This file implements DOOM's networking logic, enabling multiplayer gameplay over modest hardware."

summary:
  - point: "DOOM's multiplayer networking was designed to work on 1993-era PCs with limited resources."
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM"
  - point: "The file contains routines for packet handling, synchronization, and tic-based gameplay updates."
    link: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    link_label: "Multiplayer video games"
  - point: "Checksum and tic expansion techniques ensured reliable communication despite hardware constraints."
    link: "https://en.wikipedia.org/wiki/Checksum"
    link_label: "Checksum"
  - point: "DOOM's network protocol influenced later multiplayer games and engines like Quake."
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "The source code release allowed developers to study and adapt its networking techniques."
    link: "https://en.wikipedia.org/wiki/Source_code"
    link_label: "Source code"

enhancements:
  - id: "netbuffer-size-calculation"
    line_start: 86
    line_end: 92
    title: "How DOOM Calculated Packet Sizes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Packet_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `NetbufferSize` function calculates the size of the network buffer by determining the offset of the `cmds` array within the `doomdata_t` structure. This approach relies on pointer arithmetic and assumes a specific memory layout. At the time, memory efficiency was critical, as DOOM needed to run on hardware with limited RAM and processing power. By directly calculating offsets, the developers avoided the overhead of dynamic memory management. This function reflects the low-level programming practices of the era, where developers often manipulated memory directly to optimize performance. The technique was widely studied after DOOM's source code release, influencing how later games handled network buffers in resource-constrained environments."
  - id: "checksum-validation"
    line_start: 94
    line_end: 114
    title: "The Checksum That Kept Multiplayer Honest"
    wikipedia_url: "https://en.wikipedia.org/wiki/Checksum"
    image_url: ""
    image_caption: ""
    content: "The `NetbufferChecksum` function generates a checksum for the network buffer to ensure data integrity during transmission. It uses a simple algorithm that multiplies buffer values by their indices and sums the results, masking the final value with a predefined constant. This lightweight approach was chosen to minimize computational overhead on the 386 and 486 processors common in 1993. The developers even included a conditional to disable checksums on UNIX systems due to endian issues, highlighting the challenges of cross-platform compatibility. This checksum mechanism was crucial for maintaining reliable multiplayer gameplay, preventing corrupted packets from disrupting the experience. The concept of using checksums in network protocols became standard practice, influencing later multiplayer engines like Quake and Unreal."
  - id: "expand-tics-algorithm"
    line_start: 116
    line_end: 185
    title: "Expanding Tic Numbers for Multiplayer Sync"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    image_url: ""
    image_caption: ""
    content: "The `ExpandTics` function reconstructs full tic numbers from their low-byte representations, ensuring synchronization between players. In DOOM's network protocol, only the least significant byte of tic numbers was transmitted to save bandwidth. This function uses the current tic (`maketic`) and calculates the full tic number by accounting for potential wraparounds. The algorithm was designed to handle edge cases, such as negative deltas, and raises an error if an unexpected value is encountered. This technique reflects the constraints of early networking, where minimizing packet size was essential for performance. The approach influenced later games that used tic-based synchronization, demonstrating how clever algorithms could overcome hardware limitations."
  - id: "hgetpacket-rebound-mechanism"
    line_start: 187
    line_end: 252
    title: "Rebounding Packets for Local Testing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Packet_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `HGetPacket` function handles incoming network packets and includes a mechanism for 'rebounding' packets locally. If the packet is intended for the local node, it is stored in a rebound buffer and marked as received without transmitting it over the network. This feature was likely added to simplify testing and debugging during development, allowing the developers to simulate network conditions without requiring multiple machines. The function also validates packet checksums and lengths, ensuring data integrity. This rebound mechanism highlights the practical considerations of game development, where debugging tools and shortcuts are essential for meeting tight deadlines. The concept of local packet handling influenced debugging practices in later multiplayer engines."
  - id: "getpackets-error-handling"
    line_start: 260
    line_end: 357
    title: "Error Handling in Multiplayer Packet Processing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "The `GetPackets` function processes incoming network packets, handling various error conditions such as out-of-order packets, missed tics, and checksum mismatches. It updates the command store for each player and ensures that the game state remains consistent across nodes. The function also detects when players leave the game and broadcasts this information to others. These error-handling routines were critical for maintaining a smooth multiplayer experience, especially on unreliable network connections of the early 1990s. The robust design influenced later multiplayer engines, which adopted similar techniques to handle packet loss and synchronization issues. The function's ability to gracefully handle errors contributed to DOOM's reputation for stable multiplayer gameplay."
  - id: "netupdate-tic-management"
    line_start: 367
    line_end: 445
    title: "Synchronizing Tics Across Multiplayer Nodes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    image_url: ""
    image_caption: ""
    content: "The `NetUpdate` function builds tic commands for the local player and sends them to other nodes, ensuring synchronization across the network. It calculates the number of new tics based on the elapsed time and updates the network buffer with the latest commands. The function also handles retransmit requests and missed packets, ensuring that all players remain in sync. This tic-based approach was a cornerstone of DOOM's multiplayer design, allowing fast-paced gameplay to remain consistent across machines with varying performance. The technique influenced later games like Quake, which refined tic-based synchronization for more complex multiplayer environments."
  - id: "tryruntics-game-loop"
    line_start: 635
    line_end: 766
    title: "The Game Loop That Kept DOOM in Sync"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_engine"
    image_url: ""
    image_caption: ""
    content: "The `TryRunTics` function is the heart of DOOM's multiplayer game loop, determining how many tics to run based on available and real tics. It ensures that all players remain synchronized by waiting for new tics if necessary and processing incoming commands. The function also adapts to slower nodes by adjusting the game time, preventing desynchronization. This adaptive game loop was a critical innovation, allowing DOOM to deliver smooth multiplayer gameplay on hardware with varying capabilities. The technique influenced the design of later game engines, which adopted similar adaptive loops to handle multiplayer synchronization. The function's ability to balance real-time gameplay with network constraints remains a hallmark of DOOM's engineering excellence."

---

```cpp
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
```