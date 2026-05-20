---
title: "p_enemy.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/p_enemy.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/p_enemy.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "p-enemy-c"
order: 8
description: "This file implements enemy AI in DOOM, showcasing groundbreaking techniques for real-time decision-making in 3D environments."

summary:
  - point: "Introduces recursive sound propagation for alerting enemies"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Uses direction-based movement logic for enemy pathfinding"
    link: "https://en.wikipedia.org/wiki/Pathfinding"
    link_label: "Pathfinding"
  - point: "Implements state-based AI routines for enemy behavior"
    link: "https://en.wikipedia.org/wiki/Finite-state_machine"
    link_label: "Finite-state machine"
  - point: "Optimizes AI decisions based on player proximity and visibility"
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    link_label: "AI in video games"
  - point: "Defines lookup tables for directional movement and pathfinding"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"

enhancements:
  - id: "directional-movement-lookup-table"
    line_start: 51
    line_end: 79
    title: "The Lookup Table That Guides Enemy Movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lookup_table"
    image_url: ""
    image_caption: ""
    content: "This section defines two lookup tables: `opposite` and `diags`, which map directional movement for enemies. These tables allow enemies to calculate their next move based on their current direction and proximity to the player. The `opposite` table helps enemies reverse direction when blocked, while `diags` facilitates diagonal movement. In 1993, lookup tables were a common optimization technique, as they avoided computationally expensive calculations during runtime. John Carmack, known for his mastery of low-level optimization, likely included these tables to ensure smooth and responsive enemy behavior on the limited hardware of the era. This approach influenced later games, where lookup tables became standard for AI pathfinding and movement logic."
  - id: "recursive-sound-alert"
    line_start: 105
    line_end: 166
    title: "How Noise Wakes Up DOOM's Monsters"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_RecursiveSound` function propagates sound through connected sectors, alerting monsters to the player's presence. It uses recursion to traverse adjacent sectors, respecting sound-blocking lines that prevent sound from traveling through walls. This mechanic adds realism and tension to the game, as firing a weapon can wake up nearby enemies. In the early 1990s, such environmental interaction was rare in games, making DOOM's AI feel dynamic and responsive. This technique inspired similar sound-based AI systems in later games, such as Half-Life (1998), where enemies react to player actions in the environment."
  - id: "noise-alert-system"
    line_start: 153
    line_end: 166
    title: "The Function That Makes Monsters Communicate"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "`P_NoiseAlert` is called when a monster detects a player, triggering a chain reaction that alerts other monsters in nearby sectors. It uses the `P_RecursiveSound` function to propagate the alert. This system creates a sense of interconnectedness among enemies, making the game world feel alive. In the early 1990s, AI systems were often isolated, but DOOM's approach to shared awareness among monsters was groundbreaking. This concept influenced later games like Left 4 Dead (2008), where enemy AI coordinates attacks based on player actions."
  - id: "melee-range-check"
    line_start: 174
    line_end: 192
    title: "How DOOM Decides If You're Too Close"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "`P_CheckMeleeRange` determines whether an enemy is close enough to attack the player with a melee strike. It calculates the distance between the enemy and the player, factoring in the player's radius and checking line-of-sight. This ensures that melee attacks are realistic and only occur when the player is within reach. In 1993, such precise distance calculations were rare in games, as most relied on simple proximity checks. DOOM's implementation set a precedent for realistic enemy behavior, influencing later titles like Quake (1996) and Unreal (1998)."
  - id: "missile-range-check"
    line_start: 197
    line_end: 256
    title: "The Algorithm Behind DOOM's Missile Attacks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "`P_CheckMissileRange` evaluates whether an enemy should initiate a missile attack. It checks line-of-sight, reaction time, and distance to the player, adjusting the decision based on the enemy type. For example, certain enemies like the Cyberdemon have specific distance thresholds for missile attacks. This level of detail in AI decision-making was revolutionary in 1993, as most games used simpler attack logic. By tailoring behavior to enemy types, DOOM created a diverse and challenging gameplay experience, influencing AI systems in games like Halo (2001) and Call of Duty (2003)."
  - id: "enemy-movement-logic"
    line_start: 272
    line_end: 335
    title: "The Code That Makes DOOM's Monsters Move"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pathfinding"
    image_url: ""
    image_caption: ""
    content: "`P_Move` handles enemy movement in DOOM, calculating new positions based on direction and speed. It checks for obstacles, adjusts height for floating enemies, and opens doors if necessary. This function ensures that enemies navigate the environment effectively, creating dynamic encounters. In 1993, pathfinding algorithms were often simplistic, but DOOM's approach combined movement logic with environmental interaction, setting a new standard for AI behavior. This influenced later games like System Shock (1994) and Deus Ex (2000), which emphasized intelligent navigation in complex environments."
  - id: "new-chase-direction"
    line_start: 363
    line_end: 489
    title: "How DOOM's Monsters Find Their Way"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pathfinding"
    image_url: ""
    image_caption: ""
    content: "`P_NewChaseDir` calculates a new direction for enemies to pursue the player. It considers the player's position, avoids blocked paths, and uses randomness to add unpredictability. This function ensures that enemies remain persistent and challenging, even when direct paths are unavailable. In the early 1990s, such adaptive pathfinding was rare, as most games relied on static movement patterns. DOOM's implementation influenced later titles like StarCraft (1998) and Warcraft III (2002), which used similar techniques for unit navigation."
  - id: "look-for-players"
    line_start: 493
    line_end: 558
    title: "How DOOM's Monsters Spot You"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "`P_LookForPlayers` determines whether an enemy can target a player. It checks player visibility, health, and proximity, using angle calculations to limit detection to a 180-degree field of view unless specified otherwise. This function adds realism to enemy behavior, as monsters only react to players they can see. In 1993, such nuanced AI was rare, as most games used simple proximity checks. DOOM's implementation influenced later titles like Thief: The Dark Project (1998), which emphasized stealth and enemy awareness."
  - id: "keen-die-special-event"
    line_start: 561
    line_end: 593
    title: "The Easter Egg That Opens Doors"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_II"
    image_url: ""
    image_caption: ""
    content: "`A_KeenDie` is a special function tied to DOOM II's secret map 32. When all Commander Keens are defeated, it triggers a door with tag 666 to open. This Easter egg showcases id Software's playful approach to game design, adding hidden surprises for players to discover. Such scripted events became a hallmark of id Software's games, influencing later titles like Duke Nukem 3D (1996) and Half-Life (1998), which featured interactive environments and hidden secrets."
  - id: "chase-and-attack"
    line_start: 667
    line_end: 776
    title: "The Code That Keeps Monsters Aggressive"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "`A_Chase` governs enemy pursuit and attack behavior. It handles movement direction, melee attacks, missile attacks, and target acquisition. Enemies adapt their actions based on proximity, visibility, and player behavior, creating dynamic and challenging encounters. This function exemplifies DOOM's state-based AI system, which was revolutionary in 1993. By combining movement, attack logic, and environmental interaction, DOOM set a new standard for enemy behavior in games, influencing titles like Quake (1996) and Unreal Tournament (1999)."
  - id: "randomized-attack-angles"
    line_start: 799
    line_end: 819
    title: "Randomized Angles Make Enemies Unpredictable"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_PosAttack` function defines the attack behavior for certain enemies, introducing randomness to the angle of their attacks. By adding and subtracting random values to the base angle, the enemies' shots appear less predictable, creating a more dynamic and challenging experience for players. This randomness was a clever way to simulate human-like unpredictability in enemy behavior without requiring complex AI calculations. In 1993, this approach was particularly effective given the constraints of consumer hardware, where performance was a critical concern. The technique influenced later games by demonstrating how simple randomness could enhance gameplay realism and tension."
  - id: "shotgun-style-multi-attack"
    line_start: 821
    line_end: 843
    title: "Enemies Mimic Shotgun Spread Attacks"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_SPosAttack` function simulates a shotgun-like attack by firing multiple projectiles in slightly different directions. This is achieved by iterating three times and applying randomized offsets to the base angle for each shot. The result is a spread pattern that mimics the behavior of a shotgun blast, adding variety to enemy attacks. This design choice reflects DOOM's emphasis on creating diverse and memorable combat encounters. The shotgun spread attack became a staple in many FPS games, influencing weapon and enemy design in titles like Quake and Half-Life."
  - id: "corpse-resurrection-mechanic"
    line_start: 1120
    line_end: 1159
    title: "The Code That Raised the Dead"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `PIT_VileCheck` function is part of the Arch-Vile's resurrection mechanic, allowing it to bring fallen enemies back to life. This routine checks for nearby corpses that meet specific criteria, such as being stationary and having a defined 'raise state.' If a valid corpse is found, the function prepares it for resurrection by adjusting its position and flags. This mechanic added a strategic layer to gameplay, forcing players to prioritize the Arch-Vile as a high-threat target. The resurrection feature was groundbreaking for its time, influencing later games like Diablo II and Left 4 Dead, which incorporated similar mechanics to increase tension and challenge."
  - id: "hellfire-targeting-system"
    line_start: 1281
    line_end: 1302
    title: "Hellfire That Tracks Its Target"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_VileTarget` function spawns a 'hellfire' object that tracks the Arch-Vile's target. This routine ensures the fire remains dynamically linked to the target's position, creating a visually striking and mechanically impactful attack. The use of tracer objects to maintain positional updates was a clever solution to simulate tracking behavior on limited hardware. This technique influenced later games by demonstrating how to create visually compelling effects that also serve gameplay purposes, inspiring similar mechanics in titles like Unreal Tournament and World of Warcraft."
  - id: "skull-missile-attack"
    line_start: 1413
    line_end: 1442
    title: "Flying Skulls as Guided Missiles"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_SkullAttack` function turns enemies into flying projectiles that home in on the player. By setting the 'skull fly' flag and calculating trajectory based on the target's position, this routine creates a unique attack pattern that combines mobility and aggression. The use of fixed-point arithmetic for movement calculations reflects the technical limitations of the era, where floating-point operations were often too costly. This mechanic added variety to enemy behavior and inspired similar features in later games, such as the homing projectiles in Metroid Prime and Halo."
  - id: "lost-soul-spawning-limit"
    line_start: 1445
    line_end: 1505
    title: "Why DOOM Limits Lost Souls to 20"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_PainShootSkull` function spawns Lost Souls, but includes a hard limit of 20 on the number of these entities present in the level. This restriction was implemented to prevent performance degradation on the modest hardware of the early 1990s. By counting active Lost Souls and aborting spawning if the limit is exceeded, the developers ensured smooth gameplay even during chaotic encounters. This approach highlights the balance between creative design and technical constraints, a hallmark of DOOM's development. The concept of entity limits influenced later games, such as StarCraft and Age of Empires, which used similar techniques to manage performance in large-scale battles."
  - id: "explosion-radius-damage"
    line_start: 1595
    line_end: 1601
    title: "The Radius Attack That Shaped FPS Combat"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_Explode` function handles explosion effects, dealing damage to entities within a specified radius. This routine is central to the game's explosive weapons and enemy attacks, creating impactful moments of destruction. The use of radius-based damage calculations was a novel approach at the time, contributing to the visceral feel of combat in DOOM. This technique became a standard in FPS games, influencing titles like Call of Duty and Battlefield, where explosions play a key role in gameplay dynamics."
  - id: "boss-death-triggers-special-events"
    line_start: 1604
    line_end: 1756
    title: "Boss Death Triggers Special Events"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_BossDeath` function handles the logic for triggering special events when a boss enemy dies. Depending on the game mode, episode, and map, specific actions are performed, such as lowering floors or opening doors. This logic ensures that defeating a boss not only signifies victory but also progresses the game by altering the environment. Written by John Carmack and team, this approach reflects the careful integration of gameplay mechanics with level design. In 1993, games often relied on scripted sequences, but DOOM's dynamic event system was groundbreaking. It allowed players to experience unique outcomes based on their actions, enhancing replayability. The concept of tying environmental changes to enemy deaths influenced later games like Quake and Half-Life, where scripted events and dynamic environments became standard."
  - id: "hoof-metal-sounds-for-immersive-feedback"
    line_start: 1759
    line_end: 1775
    title: "Hoof and Metal Sounds for Immersive Feedback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_effect"
    image_url: ""
    image_caption: ""
    content: "The `A_Hoof`, `A_Metal`, and `A_BabyMetal` functions play specific sound effects when certain enemies move. These sounds—hoofbeats, metallic clanks, and baby spider footsteps—enhance the game's atmosphere and provide auditory cues to players. In the early 1990s, sound design in games was limited by hardware constraints, but DOOM leveraged its sound engine to create a rich and immersive experience. The use of sound effects as gameplay feedback became a hallmark of id Software's design philosophy, influencing countless games that followed. Modern titles like Dead Space and The Last of Us continue to use sound to heighten tension and immersion."
  - id: "shotgun-reloading-sounds"
    line_start: 1777
    line_end: 1805
    title: "Shotgun Reloading Sounds"
    wikipedia_url: "https://doomwiki.org/wiki/Weapons_in_Doom"
    image_url: ""
    image_caption: ""
    content: "The `A_OpenShotgun2`, `A_LoadShotgun2`, and `A_CloseShotgun2` functions manage the sound effects for the double-barrel shotgun's reloading sequence. These sounds—opening, loading, and closing—add realism and satisfaction to the weapon's use. The shotgun is one of DOOM's iconic weapons, and its auditory feedback contributes to its visceral appeal. This attention to detail in weapon design set a standard for first-person shooters, influencing games like Call of Duty and Battlefield, where weapon sounds are meticulously crafted to enhance player experience."
  - id: "brain-awake-targeting-mechanic"
    line_start: 1813
    line_end: 1840
    title: "Brain Awake: Targeting Mechanic"
    wikipedia_url: "https://doomwiki.org/wiki/Icon_of_Sin"
    image_url: ""
    image_caption: ""
    content: "The `A_BrainAwake` function initializes the targeting system for the final boss, the Icon of Sin. It scans the game world for specific target objects (`MT_BOSSTARGET`) and stores them in an array for later use. This mechanic ensures that the boss can dynamically interact with the environment by spawning projectiles aimed at these targets. In 1993, such dynamic behavior was rare in games, which often relied on static patterns. The Icon of Sin's targeting system added unpredictability and challenge to the final encounter, influencing boss design in later games like Dark Souls, where environmental interaction plays a key role."
  - id: "brain-explode-and-telefrag"
    line_start: 1875
    line_end: 1990
    title: "Brain Explode and Telefrag Mechanics"
    wikipedia_url: "https://doomwiki.org/wiki/Telefrag"
    image_url: ""
    image_caption: ""
    content: "The `A_BrainExplode` and `A_SpawnFly` functions handle the spawning of monsters and the telefrag mechanic, where a spawned monster instantly kills anything occupying its spawn location. This clever use of spatial logic creates tension and unpredictability, as players must constantly adapt to new threats. The telefrag mechanic became a signature feature of DOOM, influencing multiplayer games like Quake, where telefragging became a competitive tactic. The random monster spawning adds replayability, ensuring that each playthrough feels unique. This procedural approach to gameplay design laid the groundwork for modern roguelike and sandbox games."
  - id: "player-death-sounds"
    line_start: 1994
    line_end: 2008
    title: "Player Death Sounds: Health-Based Variation"
    wikipedia_url: "https://doomwiki.org/wiki/Player_sounds"
    image_url: ""
    image_caption: ""
    content: "The `A_PlayerScream` function plays different death sounds based on the player's health at the time of death. If the player's health drops below -50 without gibbing, a unique sound (`sfx_pdiehi`) is triggered. This subtle detail adds emotional weight to player deaths and enhances immersion. In 1993, such nuanced sound design was rare, as most games used generic sound effects for all death scenarios. DOOM's approach influenced later games, where sound effects became an integral part of storytelling and gameplay feedback. Titles like Halo and Half-Life adopted similar techniques to create memorable player experiences."

---

```c
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
//	Enemy thinking, AI.
//	Action Pointer Functions
//	that are associated with states/frames. 
//
//-----------------------------------------------------------------------------

static const char
rcsid[] = "$Id: p_enemy.c,v 1.5 1997/02/03 22:45:11 b1 Exp $";

#include <stdlib.h>

#include "m_random.h"
#include "i_system.h"

#include "doomdef.h"
#include "p_local.h"

#include "s_sound.h"

#include "g_game.h"

// State.
#include "doomstat.h"
#include "r_state.h"

// Data.
#include "sounds.h"




typedef enum
{
    DI_EAST,
    DI_NORTHEAST,
    DI_NORTH,
    DI_NORTHWEST,
    DI_WEST,
    DI_SOUTHWEST,
    DI_SOUTH,
    DI_SOUTHEAST,
    DI_NODIR,
    NUMDIRS
    
} dirtype_t;


//
// P_NewChaseDir related LUT.
//
dirtype_t opposite[] =
{
  DI_WEST, DI_SOUTHWEST, DI_SOUTH, DI_SOUTHEAST,
  DI_EAST, DI_NORTHEAST, DI_NORTH, DI_NORTHWEST, DI_NODIR
};

dirtype_t diags[] =
{
    DI_NORTHWEST, DI_NORTHEAST, DI_SOUTHWEST, DI_SOUTHEAST
};





void A_Fall (mobj_t *actor);


//
// ENEMY THINKING
// Enemies are allways spawned
// with targetplayer = -1, threshold = 0
// Most monsters are spawned unaware of all players,
// but some can be made preaware
//


//
// Called by P_NoiseAlert.
// Recursively traverse adjacent sectors,
// sound blocking lines cut off traversal.
//

mobj_t*		soundtarget;

void
P_RecursiveSound
( sector_t*	sec,
  int		soundblocks )
{
    int		i;
    line_t*	check;
    sector_t*	other;
	
    // wake up all monsters in this sector
    if (sec->validcount == validcount
	&& sec->soundtraversed <= soundblocks+1)
    {
	return;		// already flooded
    }
    
    sec->validcount = validcount;
    sec->soundtraversed = soundblocks+1;
    sec->soundtarget = soundtarget;
	
    for (i=0 ;i<sec->linecount ; i++)
    {
	check = sec->lines[i];
	if (! (check->flags & ML_TWOSIDED) )
	    continue;
	
	P_LineOpening (check);

	if (openrange <= 0)
	    continue;	// closed door
	
	if ( sides[ check->sidenum[0] ].sector == sec)
	    other = sides[ check->sidenum[1] ] .sector;
	else
	    other = sides[ check->sidenum[0] ].sector;
	
	if (check->flags & ML_SOUNDBLOCK)
	{
	    if (!soundblocks)
		P_RecursiveSound (other, 1);
	}
	else
	    P_RecursiveSound (other, soundblocks);
    }
}



//
// P_NoiseAlert
// If a monster yells at a player,
// it will alert other monsters to the player.
//
void
P_NoiseAlert
( mobj_t*	target,
  mobj_t*	emmiter )
{
    soundtarget = target;
    validcount++;
    P_RecursiveSound (emmiter->subsector->sector, 0);
}




//
// P_CheckMeleeRange
//
boolean P_CheckMeleeRange (mobj_t*	actor)
{
    mobj_t*	pl;
    fixed_t	dist;
	
    if (!actor->target)
	return false;
		
    pl = actor->target;
    dist = P_AproxDistance (pl->x-actor->x, pl->y-actor->y);

    if (dist >= MELEERANGE-20*FRACUNIT+pl->info->radius)
	return false;
	
    if (! P_CheckSight (actor, actor->target) )
	return false;
							
    return true;		
}

//
// P_CheckMissileRange
//
boolean P_CheckMissileRange (mobj_t* actor)
{
    fixed_t	dist;
	
    if (! P_CheckSight (actor, actor->target) )
	return false;
	
    if ( actor->flags & MF_JUSTHIT )
    {
	// the target just hit the enemy,
	// so fight back!
	actor->flags &= ~MF_JUSTHIT;
	return true;
    }
	
    if (actor->reactiontime)
	return false;	// do not attack yet
		
    // OPTIMIZE: get this from a global checksight
    dist = P_AproxDistance ( actor->x-actor->target->x,
			     actor->y-actor->target->y) - 64*FRACUNIT;
    
    if (!actor->info->meleestate)
	dist -= 128*FRACUNIT;	// no melee attack, so fire more

    dist >>= 16;

    if (actor->type == MT_VILE)
    {
	if (dist > 14*64)	
	    return false;	// too far away
    }
	

    if (actor->type == MT_UNDEAD)
    {
	if (dist < 196)	
	    return false;	// close for fist attack
	dist >>= 1;
    }
	

    if (actor->type == MT_CYBORG
	|| actor->type == MT_SPIDER
	|| actor->type == MT_SKULL)
    {
	dist >>= 1;
    }
    
    if (dist > 200)
	dist = 200;
		
    if (actor->type == MT_CYBORG && dist > 160)
	dist = 160;
		
    if (P_Random () < dist)
	return false;
		
    return true;
}


//
// P_Move
// Move in the current direction,
// returns false if the move is blocked.
//
fixed_t	xspeed[8] = {FRACUNIT,47000,0,-47000,-FRACUNIT,-47000,0,47000};
fixed_t yspeed[8] = {0,47000,FRACUNIT,47000,0,-47000,-FRACUNIT,-47000};

#define MAXSPECIALCROSS	8

extern	line_t*	spechit[MAXSPECIALCROSS];
extern	int	numspechit;

boolean P_Move (mobj_t*	actor)
{
    fixed_t	tryx;
    fixed_t	tryy;
    
    line_t*	ld;
    
    // warning: 'catch', 'throw', and 'try'
    // are all C++ reserved words
    boolean	try_ok;
    boolean	good;
		
    if (actor->movedir == DI_NODIR)
	return false;
		
    if ((unsigned)actor->movedir >= 8)
	I_Error ("Weird actor->movedir!");
		
    tryx = actor->x + actor->info->speed*xspeed[actor->movedir];
    tryy = actor->y + actor->info->speed*yspeed[actor->movedir];

    try_ok = P_TryMove (actor, tryx, tryy);

    if (!try_ok)
    {
	// open any specials
	if (actor->flags & MF_FLOAT && floatok)
	{
	    // must adjust height
	    if (actor->z < tmfloorz)
		actor->z += FLOATSPEED;
	    else
		actor->z -= FLOATSPEED;

	    actor->flags |= MF_INFLOAT;
	    return true;
	}
		
	if (!numspechit)
	    return false;
			
	actor->movedir = DI_NODIR;
	good = false;
	while (numspechit--)
	{
	    ld = spechit[numspechit];
	    // if the special is not a door
	    // that can be opened,
	    // return false
	    if (P_UseSpecialLine (actor, ld,0))
		good = true;
	}
	return good;
    }
    else
    {
	actor->flags &= ~MF_INFLOAT;
    }
	
	
    if (! (actor->flags & MF_FLOAT) )	
	actor->z = actor->floorz;
    return true; 
}


//
// TryWalk
// Attempts to move actor on
// in its current (ob->moveangle) direction.
// If blocked by either a wall or an actor
// returns FALSE
// If move is either clear or blocked only by a door,
// returns TRUE and sets...
// If a door is in the way,
// an OpenDoor call is made to start it opening.
//
boolean P_TryWalk (mobj_t* actor)
{	
    if (!P_Move (actor))
    {
	return false;
    }

    actor->movecount = P_Random()&15;
    return true;
}




void P_NewChaseDir (mobj_t*	actor)
{
    fixed_t	deltax;
    fixed_t	deltay;
    
    dirtype_t	d[3];
    
    int		tdir;
    dirtype_t	olddir;
    
    dirtype_t	turnaround;

    if (!actor->target)
	I_Error ("P_NewChaseDir: called with no target");
		
    olddir = actor->movedir;
    turnaround=opposite[olddir];

    deltax = actor->target->x - actor->x;
    deltay = actor->target->y - actor->y;

    if (deltax>10*FRACUNIT)
	d[1]= DI_EAST;
    else if (deltax<-10*FRACUNIT)
	d[1]= DI_WEST;
    else
	d[1]=DI_NODIR;

    if (deltay<-10*FRACUNIT)
	d[2]= DI_SOUTH;
    else if (deltay>10*FRACUNIT)
	d[2]= DI_NORTH;
    else
	d[2]=DI_NODIR;

    // try direct route
    if (d[1] != DI_NODIR
	&& d[2] != DI_NODIR)
    {
	actor->movedir = diags[((deltay<0)<<1)+(deltax>0)];
	if (actor->movedir != turnaround && P_TryWalk(actor))
	    return;
    }

    // try other directions
    if (P_Random() > 200
	||  abs(deltay)>abs(deltax))
    {
	tdir=d[1];
	d[1]=d[2];
	d[2]=tdir;
    }

    if (d[1]==turnaround)
	d[1]=DI_NODIR;
    if (d[2]==turnaround)
	d[2]=DI_NODIR;
	
    if (d[1]!=DI_NODIR)
    {
	actor->movedir = d[1];
	if (P_TryWalk(actor))
	{
	    // either moved forward or attacked
	    return;
	}
    }

    if (d[2]!=DI_NODIR)
    {
	actor->movedir =d[2];

	if (P_TryWalk(actor))
	    return;
    }

    // there is no direct path to the player,
    // so pick another direction.
    if (olddir!=DI_NODIR)
    {
	actor->movedir =olddir;

	if (P_TryWalk(actor))
	    return;
    }

    // randomly determine direction of search
    if (P_Random()&1) 	
    {
	for ( tdir=DI_EAST;
	      tdir<=DI_SOUTHEAST;
	      tdir++ )
	{
	    if (tdir!=turnaround)
	    {
		actor->movedir =tdir;
		
		if ( P_TryWalk(actor) )
		    return;
	    }
	}
    }
    else
    {
	for ( tdir=DI_SOUTHEAST;
	      tdir != (DI_EAST-1);
	      tdir-- )
	{
	    if (tdir!=turnaround)
	    {
		actor->movedir =tdir;
		
		if ( P_TryWalk(actor) )
		    return;
	    }
	}
    }

    if (turnaround !=  DI_NODIR)
    {
	actor->movedir =turnaround;
	if ( P_TryWalk(actor) )
	    return;
    }

    actor->movedir = DI_NODIR;	// can not move
}



//
// P_LookForPlayers
// If allaround is false, only look 180 degrees in front.
// Returns true if a player is targeted.
//
boolean
P_LookForPlayers
( mobj_t*	actor,
  boolean	allaround )
{
    int		c;
    int		stop;
    player_t*	player;
    sector_t*	sector;
    angle_t	an;
    fixed_t	dist;
		
    sector = actor->subsector->sector;
	
    c = 0;
    stop = (actor->lastlook-1)&3;
	
    for ( ; ; actor->lastlook = (actor->lastlook+1)&3 )
    {
	if (!playeringame[actor->lastlook])
	    continue;
			
	if (c++ == 2
	    || actor->lastlook == stop)
	{
	    // done looking
	    return false;	
	}
	
	player = &players[actor->lastlook];

	if (player->health <= 0)
	    continue;		// dead

	if (!P_CheckSight (actor, player->mo))
	    continue;		// out of sight
			
	if (!allaround)
	{
	    an = R_PointToAngle2 (actor->x,
				  actor->y, 
				  player->mo->x,
				  player->mo->y)
		- actor->angle;
	    
	    if (an > ANG90 && an < ANG270)
	    {
		dist = P_AproxDistance (player->mo->x - actor->x,
					player->mo->y - actor->y);
		// if real close, react anyway
		if (dist > MELEERANGE)
		    continue;	// behind back
	    }
	}
		
	actor->target = player->mo;
	return true;
    }

    return false;
}


//
// A_KeenDie
// DOOM II special, map 32.
// Uses special tag 666.
//
void A_KeenDie (mobj_t* mo)
{
    thinker_t*	th;
    mobj_t*	mo2;
    line_t	junk;

    A_Fall (mo);
    
    // scan the remaining thinkers
    // to see if all Keens are dead
    for (th = thinkercap.next ; th != &thinkercap ; th=th->next)
    {
	if (th->function.acp1 != (actionf_p1)P_MobjThinker)
	    continue;

	mo2 = (mobj_t *)th;
	if (mo2 != mo
	    && mo2->type == mo->type
	    && mo2->health > 0)
	{
	    // other Keen not dead
	    return;		
	}
    }

    junk.tag = 666;
    EV_DoDoor(&junk,open);
}


//
// ACTION ROUTINES
//

//
// A_Look
// Stay in state until a player is sighted.
//
void A_Look (mobj_t* actor)
{
    mobj_t*	targ;
	
    actor->threshold = 0;	// any shot will wake up
    targ = actor->subsector->sector->soundtarget;

    if (targ
	&& (targ->flags & MF_SHOOTABLE) )
    {
	actor->target = targ;

	if ( actor->flags & MF_AMBUSH )
	{
	    if (P_CheckSight (actor, actor->target))
		goto seeyou;
	}
	else
	    goto seeyou;
    }
	
	
    if (!P_LookForPlayers (actor, false) )
	return;
		
    // go into chase state
  seeyou:
    if (actor->info->seesound)
    {
	int		sound;
		
	switch (actor->info->seesound)
	{
	  case sfx_posit1:
	  case sfx_posit2:
	  case sfx_posit3:
	    sound = sfx_posit1+P_Random()%3;
	    break;

	  case sfx_bgsit1:
	  case sfx_bgsit2:
	    sound = sfx_bgsit1+P_Random()%2;
	    break;

	  default:
	    sound = actor->info->seesound;
	    break;
	}

	if (actor->type==MT_SPIDER
	    || actor->type == MT_CYBORG)
	{
	    // full volume
	    S_StartSound (NULL, sound);
	}
	else
	    S_StartSound (actor, sound);
    }

    P_SetMobjState (actor, actor->info->seestate);
}


//
// A_Chase
// Actor has a melee attack,
// so it tries to close as fast as possible
//
void A_Chase (mobj_t*	actor)
{
    int		delta;

    if (actor->reactiontime)
	actor->reactiontime--;
				

    // modify target threshold
    if  (actor->threshold)
    {
	if (!actor->target
	    || actor->target->health <= 0)
	{
	    actor->threshold = 0;
	}
	else
	    actor->threshold--;
    }
    
    // turn towards movement direction if not there yet
    if (actor->movedir < 8)
    {
	actor->angle &= (7<<29);
	delta = actor->angle - (actor->movedir << 29);
	
	if (delta > 0)
	    actor->angle -= ANG90/2;
	else if (delta < 0)
	    actor->angle += ANG90/2;
    }

    if (!actor->target
	|| !(actor->target->flags&MF_SHOOTABLE))
    {
	// look for a new target
	if (P_LookForPlayers(actor,true))
	    return; 	// got a new target
	
	P_SetMobjState (actor, actor->info->spawnstate);
	return;
    }
    
    // do not attack twice in a row
    if (actor->flags & MF_JUSTATTACKED)
    {
	actor->flags &= ~MF_JUSTATTACKED;
	if (gameskill != sk_nightmare && !fastparm)
	    P_NewChaseDir (actor);
	return;
    }
    
    // check for melee attack
    if (actor->info->meleestate
	&& P_CheckMeleeRange (actor))
    {
	if (actor->info->attacksound)
	    S_StartSound (actor, actor->info->attacksound);

	P_SetMobjState (actor, actor->info->meleestate);
	return;
    }
    
    // check for missile attack
    if (actor->info->missilestate)
    {
	if (gameskill < sk_nightmare
	    && !fastparm && actor->movecount)
	{
	    goto nomissile;
	}
	
	if (!P_CheckMissileRange (actor))
	    goto nomissile;
	
	P_SetMobjState (actor, actor->info->missilestate);
	actor->flags |= MF_JUSTATTACKED;
	return;
    }

    // ?
  nomissile:
    // possibly choose another target
    if (netgame
	&& !actor->threshold
	&& !P_CheckSight (actor, actor->target) )
    {
	if (P_LookForPlayers(actor,true))
	    return;	// got a new target
    }
    
    // chase towards player
    if (--actor->movecount<0
	|| !P_Move (actor))
    {
	P_NewChaseDir (actor);
    }
    
    // make active sound
    if (actor->info->activesound
	&& P_Random () < 3)
    {
	S_StartSound (actor, actor->info->activesound);
    }
}


//
// A_FaceTarget
//
void A_FaceTarget (mobj_t* actor)
{	
    if (!actor->target)
	return;
    
    actor->flags &= ~MF_AMBUSH;
	
    actor->angle = R_PointToAngle2 (actor->x,
				    actor->y,
				    actor->target->x,
				    actor->target->y);
    
    if (actor->target->flags & MF_SHADOW)
	actor->angle += (P_Random()-P_Random())<<21;
}


//
// A_PosAttack
//
void A_PosAttack (mobj_t* actor)
{
    int		angle;
    int		damage;
    int		slope;
	
    if (!actor->target)
	return;
		
    A_FaceTarget (actor);
    angle = actor->angle;
    slope = P_AimLineAttack (actor, angle, MISSILERANGE);

    S_StartSound (actor, sfx_pistol);
    angle += (P_Random()-P_Random())<<20;
    damage = ((P_Random()%5)+1)*3;
    P_LineAttack (actor, angle, MISSILERANGE, slope, damage);
}

void A_SPosAttack (mobj_t* actor)
{
    int		i;
    int		angle;
    int		bangle;
    int		damage;
    int		slope;
	
    if (!actor->target)
	return;

    S_StartSound (actor, sfx_shotgn);
    A_FaceTarget (actor);
    bangle = actor->angle;
    slope = P_AimLineAttack (actor, bangle, MISSILERANGE);

    for (i=0 ; i<3 ; i++)
    {
	angle = bangle + ((P_Random()-P_Random())<<20);
	damage = ((P_Random()%5)+1)*3;
	P_LineAttack (actor, angle, MISSILERANGE, slope, damage);
    }
}

void A_CPosAttack (mobj_t* actor)
{
    int		angle;
    int		bangle;
    int		damage;
    int		slope;
	
    if (!actor->target)
	return;

    S_StartSound (actor, sfx_shotgn);
    A_FaceTarget (actor);
    bangle = actor->angle;
    slope = P_AimLineAttack (actor, bangle, MISSILERANGE);

    angle = bangle + ((P_Random()-P_Random())<<20);
    damage = ((P_Random()%5)+1)*3;
    P_LineAttack (actor, angle, MISSILERANGE, slope, damage);
}

void A_CPosRefire (mobj_t* actor)
{	
    // keep firing unless target got out of sight
    A_FaceTarget (actor);

    if (P_Random () < 40)
	return;

    if (!actor->target
	|| actor->target->health <= 0
	|| !P_CheckSight (actor, actor->target) )
    {
	P_SetMobjState (actor, actor->info->seestate);
    }
}


void A_SpidRefire (mobj_t* actor)
{	
    // keep firing unless target got out of sight
    A_FaceTarget (actor);

    if (P_Random () < 10)
	return;

    if (!actor->target
	|| actor->target->health <= 0
	|| !P_CheckSight (actor, actor->target) )
    {
	P_SetMobjState (actor, actor->info->seestate);
    }
}

void A_BspiAttack (mobj_t *actor)
{	
    if (!actor->target)
	return;
		
    A_FaceTarget (actor);

    // launch a missile
    P_SpawnMissile (actor, actor->target, MT_ARACHPLAZ);
}


//
// A_TroopAttack
//
void A_TroopAttack (mobj_t* actor)
{
    int		damage;
	
    if (!actor->target)
	return;
		
    A_FaceTarget (actor);
    if (P_CheckMeleeRange (actor))
    {
	S_StartSound (actor, sfx_claw);
	damage = (P_Random()%8+1)*3;
	P_DamageMobj (actor->target, actor, actor, damage);
	return;
    }

    
    // launch a missile
    P_SpawnMissile (actor, actor->target, MT_TROOPSHOT);
}


void A_SargAttack (mobj_t* actor)
{
    int		damage;

    if (!actor->target)
	return;
		
    A_FaceTarget (actor);
    if (P_CheckMeleeRange (actor))
    {
	damage = ((P_Random()%10)+1)*4;
	P_DamageMobj (actor->target, actor, actor, damage);
    }
}

void A_HeadAttack (mobj_t* actor)
{
    int		damage;
	
    if (!actor->target)
	return;
		
    A_FaceTarget (actor);
    if (P_CheckMeleeRange (actor))
    {
	damage = (P_Random()%6+1)*10;
	P_DamageMobj (actor->target, actor, actor, damage);
	return;
    }
    
    // launch a missile
    P_SpawnMissile (actor, actor->target, MT_HEADSHOT);
}

void A_CyberAttack (mobj_t* actor)
{	
    if (!actor->target)
	return;
		
    A_FaceTarget (actor);
    P_SpawnMissile (actor, actor->target, MT_ROCKET);
}


void A_BruisAttack (mobj_t* actor)
{
    int		damage;
	
    if (!actor->target)
	return;
		
    if (P_CheckMeleeRange (actor))
    {
	S_StartSound (actor, sfx_claw);
	damage = (P_Random()%8+1)*10;
	P_DamageMobj (actor->target, actor, actor, damage);
	return;
    }
    
    // launch a missile
    P_SpawnMissile (actor, actor->target, MT_BRUISERSHOT);
}


//
// A_SkelMissile
//
void A_SkelMissile (mobj_t* actor)
{	
    mobj_t*	mo;
	
    if (!actor->target)
	return;
		
    A_FaceTarget (actor);
    actor->z += 16*FRACUNIT;	// so missile spawns higher
    mo = P_SpawnMissile (actor, actor->target, MT_TRACER);
    actor->z -= 16*FRACUNIT;	// back to normal

    mo->x += mo->momx;
    mo->y += mo->momy;
    mo->tracer = actor->target;
}

int	TRACEANGLE = 0xc000000;

void A_Tracer (mobj_t* actor)
{
    angle_t	exact;
    fixed_t	dist;
    fixed_t	slope;
    mobj_t*	dest;
    mobj_t*	th;
		
    if (gametic & 3)
	return;
    
    // spawn a puff of smoke behind the rocket		
    P_SpawnPuff (actor->x, actor->y, actor->z);
	
    th = P_SpawnMobj (actor->x-actor->momx,
		      actor->y-actor->momy,
		      actor->z, MT_SMOKE);
    
    th->momz = FRACUNIT;
    th->tics -= P_Random()&3;
    if (th->tics < 1)
	th->tics = 1;
    
    // adjust direction
    dest = actor->tracer;
	
    if (!dest || dest->health <= 0)
	return;
    
    // change angle	
    exact = R_PointToAngle2 (actor->x,
			     actor->y,
			     dest->x,
			     dest->y);

    if (exact != actor->angle)
    {
	if (exact - actor->angle > 0x80000000)
	{
	    actor->angle -= TRACEANGLE;
	    if (exact - actor->angle < 0x80000000)
		actor->angle = exact;
	}
	else
	{
	    actor->angle += TRACEANGLE;
	    if (exact - actor->angle > 0x80000000)
		actor->angle = exact;
	}
    }
	
    exact = actor->angle>>ANGLETOFINESHIFT;
    actor->momx = FixedMul (actor->info->speed, finecosine[exact]);
    actor->momy = FixedMul (actor->info->speed, finesine[exact]);
    
    // change slope
    dist = P_AproxDistance (dest->x - actor->x,
			    dest->y - actor->y);
    
    dist = dist / actor->info->speed;

    if (dist < 1)
	dist = 1;
    slope = (dest->z+40*FRACUNIT - actor->z) / dist;

    if (slope < actor->momz)
	actor->momz -= FRACUNIT/8;
    else
	actor->momz += FRACUNIT/8;
}


void A_SkelWhoosh (mobj_t*	actor)
{
    if (!actor->target)
	return;
    A_FaceTarget (actor);
    S_StartSound (actor,sfx_skeswg);
}

void A_SkelFist (mobj_t*	actor)
{
    int		damage;

    if (!actor->target)
	return;
		
    A_FaceTarget (actor);
	
    if (P_CheckMeleeRange (actor))
    {
	damage = ((P_Random()%10)+1)*6;
	S_StartSound (actor, sfx_skepch);
	P_DamageMobj (actor->target, actor, actor, damage);
    }
}



//
// PIT_VileCheck
// Detect a corpse that could be raised.
//
mobj_t*		corpsehit;
mobj_t*		vileobj;
fixed_t		viletryx;
fixed_t		viletryy;

boolean PIT_VileCheck (mobj_t*	thing)
{
    int		maxdist;
    boolean	check;
	
    if (!(thing->flags & MF_CORPSE) )
	return true;	// not a monster
    
    if (thing->tics != -1)
	return true;	// not lying still yet
    
    if (thing->info->raisestate == S_NULL)
	return true;	// monster doesn't have a raise state
    
    maxdist = thing->info->radius + mobjinfo[MT_VILE].radius;
	
    if ( abs(thing->x - viletryx) > maxdist
	 || abs(thing->y - viletryy) > maxdist )
	return true;		// not actually touching
		
    corpsehit = thing;
    corpsehit->momx = corpsehit->momy = 0;
    corpsehit->height <<= 2;
    check = P_CheckPosition (corpsehit, corpsehit->x, corpsehit->y);
    corpsehit->height >>= 2;

    if (!check)
	return true;		// doesn't fit here
		
    return false;		// got one, so stop checking
}



//
// A_VileChase
// Check for ressurecting a body
//
void A_VileChase (mobj_t* actor)
{
    int			xl;
    int			xh;
    int			yl;
    int			yh;
    
    int			bx;
    int			by;

    mobjinfo_t*		info;
    mobj_t*		temp;
	
    if (actor->movedir != DI_NODIR)
    {
	// check for corpses to raise
	viletryx =
	    actor->x + actor->info->speed*xspeed[actor->movedir];
	viletryy =
	    actor->y + actor->info->speed*yspeed[actor->movedir];

	xl = (viletryx - bmaporgx - MAXRADIUS*2)>>MAPBLOCKSHIFT;
	xh = (viletryx - bmaporgx + MAXRADIUS*2)>>MAPBLOCKSHIFT;
	yl = (viletryy - bmaporgy - MAXRADIUS*2)>>MAPBLOCKSHIFT;
	yh = (viletryy - bmaporgy + MAXRADIUS*2)>>MAPBLOCKSHIFT;
	
	vileobj = actor;
	for (bx=xl ; bx<=xh ; bx++)
	{
	    for (by=yl ; by<=yh ; by++)
	    {
		// Call PIT_VileCheck to check
		// whether object is a corpse
		// that canbe raised.
		if (!P_BlockThingsIterator(bx,by,PIT_VileCheck))
		{
		    // got one!
		    temp = actor->target;
		    actor->target = corpsehit;
		    A_FaceTarget (actor);
		    actor->target = temp;
					
		    P_SetMobjState (actor, S_VILE_HEAL1);
		    S_StartSound (corpsehit, sfx_slop);
		    info = corpsehit->info;
		    
		    P_SetMobjState (corpsehit,info->raisestate);
		    corpsehit->height <<= 2;
		    corpsehit->flags = info->flags;
		    corpsehit->health = info->spawnhealth;
		    corpsehit->target = NULL;

		    return;
		}
	    }
	}
    }

    // Return to normal attack.
    A_Chase (actor);
}


//
// A_VileStart
//
void A_VileStart (mobj_t* actor)
{
    S_StartSound (actor, sfx_vilatk);
}


//
// A_Fire
// Keep fire in front of player unless out of sight
//
void A_Fire (mobj_t* actor);

void A_StartFire (mobj_t* actor)
{
    S_StartSound(actor,sfx_flamst);
    A_Fire(actor);
}

void A_FireCrackle (mobj_t* actor)
{
    S_StartSound(actor,sfx_flame);
    A_Fire(actor);
}

void A_Fire (mobj_t* actor)
{
    mobj_t*	dest;
    unsigned	an;
		
    dest = actor->tracer;
    if (!dest)
	return;
		
    // don't move it if the vile lost sight
    if (!P_CheckSight (actor->target, dest) )
	return;

    an = dest->angle >> ANGLETOFINESHIFT;

    P_UnsetThingPosition (actor);
    actor->x = dest->x + FixedMul (24*FRACUNIT, finecosine[an]);
    actor->y = dest->y + FixedMul (24*FRACUNIT, finesine[an]);
    actor->z = dest->z;
    P_SetThingPosition (actor);
}



//
// A_VileTarget
// Spawn the hellfire
//
void A_VileTarget (mobj_t*	actor)
{
    mobj_t*	fog;
	
    if (!actor->target)
	return;

    A_FaceTarget (actor);

    fog = P_SpawnMobj (actor->target->x,
		       actor->target->x,
		       actor->target->z, MT_FIRE);
    
    actor->tracer = fog;
    fog->target = actor;
    fog->tracer = actor->target;
    A_Fire (fog);
}




//
// A_VileAttack
//
void A_VileAttack (mobj_t* actor)
{	
    mobj_t*	fire;
    int		an;
	
    if (!actor->target)
	return;
    
    A_FaceTarget (actor);

    if (!P_CheckSight (actor, actor->target) )
	return;

    S_StartSound (actor, sfx_barexp);
    P_DamageMobj (actor->target, actor, actor, 20);
    actor->target->momz = 1000*FRACUNIT/actor->target->info->mass;
	
    an = actor->angle >> ANGLETOFINESHIFT;

    fire = actor->tracer;

    if (!fire)
	return;
		
    // move the fire between the vile and the player
    fire->x = actor->target->x - FixedMul (24*FRACUNIT, finecosine[an]);
    fire->y = actor->target->y - FixedMul (24*FRACUNIT, finesine[an]);	
    P_RadiusAttack (fire, actor, 70 );
}




//
// Mancubus attack,
// firing three missiles (bruisers)
// in three different directions?
// Doesn't look like it. 
//
#define	FATSPREAD	(ANG90/8)

void A_FatRaise (mobj_t *actor)
{
    A_FaceTarget (actor);
    S_StartSound (actor, sfx_manatk);
}


void A_FatAttack1 (mobj_t* actor)
{
    mobj_t*	mo;
    int		an;
	
    A_FaceTarget (actor);
    // Change direction  to ...
    actor->angle += FATSPREAD;
    P_SpawnMissile (actor, actor->target, MT_FATSHOT);

    mo = P_SpawnMissile (actor, actor->target, MT_FATSHOT);
    mo->angle += FATSPREAD;
    an = mo->angle >> ANGLETOFINESHIFT;
    mo->momx = FixedMul (mo->info->speed, finecosine[an]);
    mo->momy = FixedMul (mo->info->speed, finesine[an]);
}

void A_FatAttack2 (mobj_t* actor)
{
    mobj_t*	mo;
    int		an;

    A_FaceTarget (actor);
    // Now here choose opposite deviation.
    actor->angle -= FATSPREAD;
    P_SpawnMissile (actor, actor->target, MT_FATSHOT);

    mo = P_SpawnMissile (actor, actor->target, MT_FATSHOT);
    mo->angle -= FATSPREAD*2;
    an = mo->angle >> ANGLETOFINESHIFT;
    mo->momx = FixedMul (mo->info->speed, finecosine[an]);
    mo->momy = FixedMul (mo->info->speed, finesine[an]);
}

void A_FatAttack3 (mobj_t*	actor)
{
    mobj_t*	mo;
    int		an;

    A_FaceTarget (actor);
    
    mo = P_SpawnMissile (actor, actor->target, MT_FATSHOT);
    mo->angle -= FATSPREAD/2;
    an = mo->angle >> ANGLETOFINESHIFT;
    mo->momx = FixedMul (mo->info->speed, finecosine[an]);
    mo->momy = FixedMul (mo->info->speed, finesine[an]);

    mo = P_SpawnMissile (actor, actor->target, MT_FATSHOT);
    mo->angle += FATSPREAD/2;
    an = mo->angle >> ANGLETOFINESHIFT;
    mo->momx = FixedMul (mo->info->speed, finecosine[an]);
    mo->momy = FixedMul (mo->info->speed, finesine[an]);
}


//
// SkullAttack
// Fly at the player like a missile.
//
#define	SKULLSPEED		(20*FRACUNIT)

void A_SkullAttack (mobj_t* actor)
{
    mobj_t*		dest;
    angle_t		an;
    int			dist;

    if (!actor->target)
	return;
		
    dest = actor->target;	
    actor->flags |= MF_SKULLFLY;

    S_StartSound (actor, actor->info->attacksound);
    A_FaceTarget (actor);
    an = actor->angle >> ANGLETOFINESHIFT;
    actor->momx = FixedMul (SKULLSPEED, finecosine[an]);
    actor->momy = FixedMul (SKULLSPEED, finesine[an]);
    dist = P_AproxDistance (dest->x - actor->x, dest->y - actor->y);
    dist = dist / SKULLSPEED;
    
    if (dist < 1)
	dist = 1;
    actor->momz = (dest->z+(dest->height>>1) - actor->z) / dist;
}


//
// A_PainShootSkull
// Spawn a lost soul and launch it at the target
//
void
A_PainShootSkull
( mobj_t*	actor,
  angle_t	angle )
{
    fixed_t	x;
    fixed_t	y;
    fixed_t	z;
    
    mobj_t*	newmobj;
    angle_t	an;
    int		prestep;
    int		count;
    thinker_t*	currentthinker;

    // count total number of skull currently on the level
    count = 0;

    currentthinker = thinkercap.next;
    while (currentthinker != &thinkercap)
    {
	if (   (currentthinker->function.acp1 == (actionf_p1)P_MobjThinker)
	    && ((mobj_t *)currentthinker)->type == MT_SKULL)
	    count++;
	currentthinker = currentthinker->next;
    }

    // if there are allready 20 skulls on the level,
    // don't spit another one
    if (count > 20)
	return;


    // okay, there's playe for another one
    an = angle >> ANGLETOFINESHIFT;
    
    prestep =
	4*FRACUNIT
	+ 3*(actor->info->radius + mobjinfo[MT_SKULL].radius)/2;
    
    x = actor->x + FixedMul (prestep, finecosine[an]);
    y = actor->y + FixedMul (prestep, finesine[an]);
    z = actor->z + 8*FRACUNIT;
		
    newmobj = P_SpawnMobj (x , y, z, MT_SKULL);

    // Check for movements.
    if (!P_TryMove (newmobj, newmobj->x, newmobj->y))
    {
	// kill it immediately
	P_DamageMobj (newmobj,actor,actor,10000);	
	return;
    }
		
    newmobj->target = actor->target;
    A_SkullAttack (newmobj);
}


//
// A_PainAttack
// Spawn a lost soul and launch it at the target
// 
void A_PainAttack (mobj_t* actor)
{
    if (!actor->target)
	return;

    A_FaceTarget (actor);
    A_PainShootSkull (actor, actor->angle);
}


void A_PainDie (mobj_t* actor)
{
    A_Fall (actor);
    A_PainShootSkull (actor, actor->angle+ANG90);
    A_PainShootSkull (actor, actor->angle+ANG180);
    A_PainShootSkull (actor, actor->angle+ANG270);
}






void A_Scream (mobj_t* actor)
{
    int		sound;
	
    switch (actor->info->deathsound)
    {
      case 0:
	return;
		
      case sfx_podth1:
      case sfx_podth2:
      case sfx_podth3:
	sound = sfx_podth1 + P_Random ()%3;
	break;
		
      case sfx_bgdth1:
      case sfx_bgdth2:
	sound = sfx_bgdth1 + P_Random ()%2;
	break;
	
      default:
	sound = actor->info->deathsound;
	break;
    }

    // Check for bosses.
    if (actor->type==MT_SPIDER
	|| actor->type == MT_CYBORG)
    {
	// full volume
	S_StartSound (NULL, sound);
    }
    else
	S_StartSound (actor, sound);
}


void A_XScream (mobj_t* actor)
{
    S_StartSound (actor, sfx_slop);	
}

void A_Pain (mobj_t* actor)
{
    if (actor->info->painsound)
	S_StartSound (actor, actor->info->painsound);	
}



void A_Fall (mobj_t *actor)
{
    // actor is on ground, it can be walked over
    actor->flags &= ~MF_SOLID;

    // So change this if corpse objects
    // are meant to be obstacles.
}


//
// A_Explode
//
void A_Explode (mobj_t* thingy)
{
    P_RadiusAttack ( thingy, thingy->target, 128 );
}


//
// A_BossDeath
// Possibly trigger special effects
// if on first boss level
//
void A_BossDeath (mobj_t* mo)
{
    thinker_t*	th;
    mobj_t*	mo2;
    line_t	junk;
    int		i;
		
    if ( gamemode == commercial)
    {
	if (gamemap != 7)
	    return;
		
	if ((mo->type != MT_FATSO)
	    && (mo->type != MT_BABY))
	    return;
    }
    else
    {
	switch(gameepisode)
	{
	  case 1:
	    if (gamemap != 8)
		return;

	    if (mo->type != MT_BRUISER)
		return;
	    break;
	    
	  case 2:
	    if (gamemap != 8)
		return;

	    if (mo->type != MT_CYBORG)
		return;
	    break;
	    
	  case 3:
	    if (gamemap != 8)
		return;
	    
	    if (mo->type != MT_SPIDER)
		return;
	    
	    break;
	    
	  case 4:
	    switch(gamemap)
	    {
	      case 6:
		if (mo->type != MT_CYBORG)
		    return;
		break;
		
	      case 8: 
		if (mo->type != MT_SPIDER)
		    return;
		break;
		
	      default:
		return;
		break;
	    }
	    break;
	    
	  default:
	    if (gamemap != 8)
		return;
	    break;
	}
		
    }

    
    // make sure there is a player alive for victory
    for (i=0 ; i<MAXPLAYERS ; i++)
	if (playeringame[i] && players[i].health > 0)
	    break;
    
    if (i==MAXPLAYERS)
	return;	// no one left alive, so do not end game
    
    // scan the remaining thinkers to see
    // if all bosses are dead
    for (th = thinkercap.next ; th != &thinkercap ; th=th->next)
    {
	if (th->function.acp1 != (actionf_p1)P_MobjThinker)
	    continue;
	
	mo2 = (mobj_t *)th;
	if (mo2 != mo
	    && mo2->type == mo->type
	    && mo2->health > 0)
	{
	    // other boss not dead
	    return;
	}
    }
	
    // victory!
    if ( gamemode == commercial)
    {
	if (gamemap == 7)
	{
	    if (mo->type == MT_FATSO)
	    {
		junk.tag = 666;
		EV_DoFloor(&junk,lowerFloorToLowest);
		return;
	    }
	    
	    if (mo->type == MT_BABY)
	    {
		junk.tag = 667;
		EV_DoFloor(&junk,raiseToTexture);
		return;
	    }
	}
    }
    else
    {
	switch(gameepisode)
	{
	  case 1:
	    junk.tag = 666;
	    EV_DoFloor (&junk, lowerFloorToLowest);
	    return;
	    break;
	    
	  case 4:
	    switch(gamemap)
	    {
	      case 6:
		junk.tag = 666;
		EV_DoDoor (&junk, blazeOpen);
		return;
		break;
		
	      case 8:
		junk.tag = 666;
		EV_DoFloor (&junk, lowerFloorToLowest);
		return;
		break;
	    }
	}
    }
	
    G_ExitLevel ();
}


void A_Hoof (mobj_t* mo)
{
    S_StartSound (mo, sfx_hoof);
    A_Chase (mo);
}

void A_Metal (mobj_t* mo)
{
    S_StartSound (mo, sfx_metal);
    A_Chase (mo);
}

void A_BabyMetal (mobj_t* mo)
{
    S_StartSound (mo, sfx_bspwlk);
    A_Chase (mo);
}

void
A_OpenShotgun2
( player_t*	player,
  pspdef_t*	psp )
{
    S_StartSound (player->mo, sfx_dbopn);
}

void
A_LoadShotgun2
( player_t*	player,
  pspdef_t*	psp )
{
    S_StartSound (player->mo, sfx_dbload);
}

void
A_ReFire
( player_t*	player,
  pspdef_t*	psp );

void
A_CloseShotgun2
( player_t*	player,
  pspdef_t*	psp )
{
    S_StartSound (player->mo, sfx_dbcls);
    A_ReFire(player,psp);
}



mobj_t*		braintargets[32];
int		numbraintargets;
int		braintargeton;

void A_BrainAwake (mobj_t* mo)
{
    thinker_t*	thinker;
    mobj_t*	m;
	
    // find all the target spots
    numbraintargets = 0;
    braintargeton = 0;
	
    thinker = thinkercap.next;
    for (thinker = thinkercap.next ;
	 thinker != &thinkercap ;
	 thinker = thinker->next)
    {
	if (thinker->function.acp1 != (actionf_p1)P_MobjThinker)
	    continue;	// not a mobj

	m = (mobj_t *)thinker;

	if (m->type == MT_BOSSTARGET )
	{
	    braintargets[numbraintargets] = m;
	    numbraintargets++;
	}
    }
	
    S_StartSound (NULL,sfx_bossit);
}


void A_BrainPain (mobj_t*	mo)
{
    S_StartSound (NULL,sfx_bospn);
}


void A_BrainScream (mobj_t*	mo)
{
    int		x;
    int		y;
    int		z;
    mobj_t*	th;
	
    for (x=mo->x - 196*FRACUNIT ; x< mo->x + 320*FRACUNIT ; x+= FRACUNIT*8)
    {
	y = mo->y - 320*FRACUNIT;
	z = 128 + P_Random()*2*FRACUNIT;
	th = P_SpawnMobj (x,y,z, MT_ROCKET);
	th->momz = P_Random()*512;

	P_SetMobjState (th, S_BRAINEXPLODE1);

	th->tics -= P_Random()&7;
	if (th->tics < 1)
	    th->tics = 1;
    }
	
    S_StartSound (NULL,sfx_bosdth);
}



void A_BrainExplode (mobj_t* mo)
{
    int		x;
    int		y;
    int		z;
    mobj_t*	th;
	
    x = mo->x + (P_Random () - P_Random ())*2048;
    y = mo->y;
    z = 128 + P_Random()*2*FRACUNIT;
    th = P_SpawnMobj (x,y,z, MT_ROCKET);
    th->momz = P_Random()*512;

    P_SetMobjState (th, S_BRAINEXPLODE1);

    th->tics -= P_Random()&7;
    if (th->tics < 1)
	th->tics = 1;
}


void A_BrainDie (mobj_t*	mo)
{
    G_ExitLevel ();
}

void A_BrainSpit (mobj_t*	mo)
{
    mobj_t*	targ;
    mobj_t*	newmobj;
    
    static int	easy = 0;
	
    easy ^= 1;
    if (gameskill <= sk_easy && (!easy))
	return;
		
    // shoot a cube at current target
    targ = braintargets[braintargeton];
    braintargeton = (braintargeton+1)%numbraintargets;

    // spawn brain missile
    newmobj = P_SpawnMissile (mo, targ, MT_SPAWNSHOT);
    newmobj->target = targ;
    newmobj->reactiontime =
	((targ->y - mo->y)/newmobj->momy) / newmobj->state->tics;

    S_StartSound(NULL, sfx_bospit);
}



void A_SpawnFly (mobj_t* mo);

// travelling cube sound
void A_SpawnSound (mobj_t* mo)	
{
    S_StartSound (mo,sfx_boscub);
    A_SpawnFly(mo);
}

void A_SpawnFly (mobj_t* mo)
{
    mobj_t*	newmobj;
    mobj_t*	fog;
    mobj_t*	targ;
    int		r;
    mobjtype_t	type;
	
    if (--mo->reactiontime)
	return;	// still flying
	
    targ = mo->target;

    // First spawn teleport fog.
    fog = P_SpawnMobj (targ->x, targ->y, targ->z, MT_SPAWNFIRE);
    S_StartSound (fog, sfx_telept);

    // Randomly select monster to spawn.
    r = P_Random ();

    // Probability distribution (kind of :),
    // decreasing likelihood.
    if ( r<50 )
	type = MT_TROOP;
    else if (r<90)
	type = MT_SERGEANT;
    else if (r<120)
	type = MT_SHADOWS;
    else if (r<130)
	type = MT_PAIN;
    else if (r<160)
	type = MT_HEAD;
    else if (r<162)
	type = MT_VILE;
    else if (r<172)
	type = MT_UNDEAD;
    else if (r<192)
	type = MT_BABY;
    else if (r<222)
	type = MT_FATSO;
    else if (r<246)
	type = MT_KNIGHT;
    else
	type = MT_BRUISER;		

    newmobj	= P_SpawnMobj (targ->x, targ->y, targ->z, type);
    if (P_LookForPlayers (newmobj, true) )
	P_SetMobjState (newmobj, newmobj->info->seestate);
	
    // telefrag anything in this spot
    P_TeleportMove (newmobj, newmobj->x, newmobj->y);

    // remove self (i.e., cube).
    P_RemoveMobj (mo);
}



void A_PlayerScream (mobj_t* mo)
{
    // Default death sound.
    int		sound = sfx_pldeth;
	
    if ( (gamemode == commercial)
	&& 	(mo->health < -50))
    {
	// IF THE PLAYER DIES
	// LESS THAN -50% WITHOUT GIBBING
	sound = sfx_pdiehi;
    }
    
    S_StartSound (mo, sound);
}
```
