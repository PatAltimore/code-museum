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
description: "This file contains the AI logic for enemies in DOOM, defining their behavior, movement, and interactions with players."

summary:
  - point: "Defines enemy movement directions and lookup tables for AI navigation"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Implements recursive sound propagation to alert monsters"
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    link_label: "AI in video games"
  - point: "Introduces melee and missile range checks for enemy attacks"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM gameplay mechanics"
  - point: "Optimizes enemy pathfinding with direction-based logic"
    link: "https://en.wikipedia.org/wiki/Pathfinding"
    link_label: "Pathfinding"
  - point: "Includes special routines for unique enemy behaviors (e.g., Commander Keen death sequence)"
    link: "https://doomwiki.org/wiki/Commander_Keen_(Doom_II)"
    link_label: "Commander Keen in DOOM II"

enhancements:
  - id: "enemy-direction-enum"
    line_start: 170
    line_end: 191
    title: "Eight-Direction Movement and Melee Range Check"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This region establishes two foundational pieces of DOOM's enemy AI. The `dirtype_t` enumeration gives every monster nine legal heading states: eight compass directions plus DI_NODIR for a stopped or blocked actor. Restricting movement to discrete angles matched the grid-aligned map geometry and kept pathfinding arithmetic cheap on 486-class hardware. Immediately downstream, `P_CheckMeleeRange` decides whether a melee attack is valid by computing an approximate distance with P_AproxDistance, subtracting the target's radius, and confirming line-of-sight. The MELEERANGE threshold of roughly 64 map units was tuned so melee-capable monsters like the Imp and Demon feel dangerous at close quarters without landing hits through walls or at implausible distances. These two pieces work together: the direction system drives an enemy toward the player, and the range check fires the claw once proximity is confirmed, creating the relentless up-close pressure that defined DOOM's combat feel."
  - id: "recursive-sound-propagation"
    line_start: 271
    line_end: 334
    title: "Sound Propagation, Monster Movement, and Enemy Navigation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    image_url: ""
    image_caption: ""
    content: "This region covers two complementary systems that give DOOM's monsters situational awareness and the ability to act on it. `P_RecursiveSound` floods alert information through the sector graph when a player fires: it walks two-sided lines outward from the noise source, stamping each reachable sector with the current soundtarget. Lines flagged ML_SOUNDBLOCK are treated as acoustic barriers; the traversal still crosses them but increments a soundblocks counter, so a monster two barriers away is harder to wake than one in the same room. This gave level designers a real tool for controlling alert radius without scripting. Below the sound code, `P_Move` drives a monster one step in its current movedir using the `xspeed` and `yspeed` tables and P_TryMove for collision. Floating monsters adjust their Z when blocked rather than stopping, and the function activates any special lines crossed, so enemies can open doors mid-chase. The pairing of a sector-flood alert with a table-driven step mover was an economical way to make monsters feel aware and persistent on hardware where frame budgets measured in milliseconds left little room for elaborate pathfinding."
  - id: "noise-alert-system"
    line_start: 337
    line_end: 357
    title: "The chain reaction that wakes the horde"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_NoiseAlert` function alerts monsters to a player's presence when noise is detected. It sets a global `soundtarget` and triggers `P_RecursiveSound` to propagate the alert through connected sectors. This system creates dynamic gameplay moments, where a single gunshot can lead to a cascade of enemies converging on the player's location. The idea of noise-based AI was groundbreaking in 1993, adding depth to enemy behavior. Later games like Half-Life expanded on this concept, using sound to trigger complex AI routines and environmental interactions."
  - id: "missile-range-check"
    line_start: 193
    line_end: 208
    title: "Pathfinding Lookup Tables and Missile Range Decision"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "This range opens with the `opposite` and `diags` lookup tables that power P_NewChaseDir. The `opposite` array maps each of the eight movement directions to its reverse, letting a monster quickly determine which heading it should avoid when retreating or re-routing. The `diags` array maps quadrant sign combinations to diagonal headings so the chasing code can pick the most direct angle toward a target in one table lookup instead of a branch tree. Both tables exemplify the era's preference for precomputed data over runtime arithmetic. The range closes with `P_CheckMissileRange`, which decides whether a ranged attack should fire. Beyond a simple distance test it factors in reaction time, a per-type bias (the Cyberdemon and Spider Mastermind back off at extreme range; the Revenant gets a range penalty so it stays mid-field), and a probabilistic roll so that monsters do not fire every legal frame, giving players a fighting chance to dodge. Together the LUTs and the missile gate illustrate how DOOM gave each monster a distinct tactical personality through layered, cheaply evaluated rules."
  - id: "look-for-players"
    line_start: 362
    line_end: 557
    title: "How DOOM's monsters find you"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `P_LookForPlayers` function allows enemies to scan for players within their field of view. It checks player health, visibility, and proximity, ensuring that monsters only target viable players. The function incorporates a 180-degree field-of-view check for non-'allaround' enemies, adding realism to their behavior. This mechanic contributed to DOOM's immersive gameplay, where enemies react dynamically to player actions. The idea of AI vision cones influenced later games, such as Metal Gear Solid and Far Cry, where enemy awareness became a critical gameplay element."
  - id: "keen-die-special"
    line_start: 560
    line_end: 592
    title: "The Easter egg that opens a door"
    wikipedia_url: "https://doomwiki.org/wiki/Commander_Keen_(Doom_II)"
    image_url: ""
    image_caption: ""
    content: "The `A_KeenDie` function is a special routine tied to DOOM II's secret level (Map 32). When all Commander Keen enemies are defeated, it triggers a door to open using tag 666. This Easter egg reflects id Software's playful approach to game design, incorporating references to their earlier games. The function scans all active 'thinkers' (game objects) to check if any Keen enemies remain alive, showcasing DOOM's flexible object management system. Easter eggs like this became a hallmark of id Software's games, inspiring developers to include hidden secrets and references in their own titles."
  - id: "chase-state-logic"
    line_start: 595
    line_end: 775
    title: "The relentless pursuit of DOOM's enemies"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_Chase` function defines the behavior of enemies in their chase state, where they pursue the player aggressively. It handles reaction times, target thresholds, and movement direction, ensuring that enemies adapt to changing circumstances. The function includes checks for melee and missile attacks, making combat dynamic and unpredictable. This relentless pursuit mechanic became a defining feature of DOOM, creating tension and excitement during gameplay. The chase state influenced AI design in later FPS games, where enemies exhibit similar persistence and adaptability."
  - id: "face-target"
    line_start: 778
    line_end: 795
    title: "How DOOM's monsters always face you"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_FaceTarget` function ensures that enemies always face their target during attacks. It calculates the angle between the enemy and the player, adjusting for shadow effects (e.g., invisibility). This mechanic adds realism to combat, as enemies visually track the player. The function reflects DOOM's attention to detail in creating immersive enemy behavior. Similar mechanics appeared in later games, where enemies use advanced targeting systems to enhance realism and challenge players."
  - id: "shotgun-attack-with-random-spread"
    line_start: 820
    line_end: 842
    title: "Shotgun Attack with Random Spread"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_SPosAttack` function simulates a shotgun attack by firing three projectiles with randomized angles and damage values. This randomness adds unpredictability to enemy attacks, making gameplay more dynamic. In 1993, DOOM's developers were working with hardware constraints like the Intel 80486 processor, which lacked modern physics engines. To achieve immersive combat, John Carmack and the team implemented simple yet effective techniques like this randomized spread. The shotgun mechanic became iconic, influencing countless FPS games, including Quake and Call of Duty."
  - id: "cyberdemon-missile-launch"
    line_start: 968
    line_end: 975
    title: "Cyberdemon Missile Launch"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cyberdemon"
    image_url: ""
    image_caption: ""
    content: "The `A_CyberAttack` function defines the Cyberdemon's missile attack, a signature move of one of DOOM's most memorable enemies. The function ensures the Cyberdemon faces its target before launching a missile. This straightforward implementation highlights the game's focus on clear, readable code while delivering impactful gameplay. The Cyberdemon's missile attack became a hallmark of boss design in FPS games, inspiring similar mechanics in later titles like Half-Life and Halo."
  - id: "tracer-smoke-and-direction-adjustment"
    line_start: 1020
    line_end: 1089
    title: "Tracer Smoke and Direction Adjustment"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_Tracer` function governs the behavior of homing projectiles, such as rockets. It spawns smoke puffs for visual feedback and adjusts the projectile's angle and slope to track its target. This mechanic was groundbreaking for its time, as homing projectiles added depth to combat and required players to employ evasive maneuvers. The technique influenced later games, including Unreal Tournament and Team Fortress, where homing mechanics became a staple of weapon design."
  - id: "vile-resurrection-mechanic"
    line_start: 1128
    line_end: 1158
    title: "Vile Resurrection Mechanic"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `PIT_VileCheck` function enables the Arch-Vile enemy to resurrect fallen monsters. It checks for nearby corpses that meet specific criteria, such as being stationary and having a defined 'raise state.' This mechanic added a strategic layer to gameplay, forcing players to prioritize killing the Arch-Vile to prevent it from reviving enemies. Resurrection mechanics like this influenced later games, including Diablo and Dark Souls, where similar systems are used to increase challenge and tension."
  - id: "mancubus-multi-directional-attack"
    line_start: 1357
    line_end: 1372
    title: "Mancubus Multi-Directional Attack"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The Mancubus's attack sequence (`A_FatAttack1`, `A_FatAttack2`, `A_FatAttack3`) involves firing projectiles in multiple directions using predefined angle offsets. This design creates a unique challenge for players, as dodging requires spatial awareness and timing. The multi-directional attack was a novel concept in 1993, showcasing DOOM's ability to create varied enemy behaviors. Similar mechanics appeared in later games like Borderlands and Overwatch, where enemy attacks often involve area-of-effect patterns."
  - id: "skull-missile-attack"
    line_start: 1412
    line_end: 1504
    title: "Skull Missile Attack"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_SkullAttack` function defines the behavior of Lost Souls, which fly directly at the player like missiles. The function calculates movement vectors based on the target's position, ensuring the enemy homes in accurately. This mechanic added intensity to encounters, as players had to react quickly to avoid damage. The homing attack concept influenced later games, including Metroid Prime and Destiny, where similar enemy behaviors are used to create high-stakes combat scenarios."
  - id: "pain-elemental-skull-spawning"
    line_start: 1507
    line_end: 1518
    title: "Pain Elemental Skull Spawning"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_PainAttack` function allows the Pain Elemental to spawn Lost Souls and launch them at the player. This mechanic increases the difficulty of encounters by introducing additional enemies mid-combat. The spawning behavior was innovative for its time, as it dynamically altered the battlefield and required players to adapt their strategies. Similar mechanics appeared in later games like StarCraft and XCOM, where enemy units can spawn reinforcements to shift the tide of battle."
  - id: "death-sound-randomization"
    line_start: 1534
    line_end: 1568
    title: "Death Sound Randomization"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_Scream` function randomizes the death sounds of certain enemies, adding variety to the audio experience. By selecting sounds based on the enemy type and applying randomness, the function ensures that repeated encounters feel less monotonous. This attention to detail in sound design contributed to DOOM's immersive atmosphere and influenced later games, including Half-Life and Bioshock, where audio plays a critical role in storytelling and player engagement."
  - id: "boss-death-triggers-level-events"
    line_start: 1603
    line_end: 1755
    title: "Boss Death: Unlocking Levels with Tags"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `A_BossDeath` function determines whether a boss enemy's death should trigger special level events, such as opening doors or lowering floors. This routine checks the game mode, episode, and map number to ensure the correct boss type is defeated before activating these events. The function uses 'tags' (numeric identifiers for level sectors) to manipulate level geometry, creating dramatic moments like floors lowering or doors opening. In the commercial version of DOOM, this is particularly notable in Map 7 ('Dead Simple'), where defeating specific enemies triggers changes in the level. This approach reflects the ingenuity required to create dynamic gameplay on hardware with limited memory and processing power. By tying boss deaths to level progression, DOOM introduced a sense of accomplishment and narrative flow that influenced countless games afterward, including titles like Quake and Half-Life."
  - id: "hoof-metal-babymetal-sound-effects"
    line_start: 1758
    line_end: 1768
    title: "Sound Effects: Giving Enemies Personality"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_effect"
    image_url: ""
    image_caption: ""
    content: "The `A_Hoof`, `A_Metal`, and `A_BabyMetal` functions play sound effects associated with specific enemy movements, such as hoofbeats or metallic clanking. These routines also call `A_Chase`, the AI function that drives enemy movement and behavior. By pairing distinct sounds with enemy actions, DOOM created a visceral and immersive experience, allowing players to identify threats by sound alone. This technique was groundbreaking in 1993, as sound design was often an afterthought in games of the era. The integration of sound effects into gameplay mechanics influenced later titles like Unreal Tournament and Halo, where audio cues became critical for situational awareness."
  - id: "shotgun-reloading-sound-effects"
    line_start: 1770
    line_end: 1810
    title: "Shotgun Reload: Audio Feedback for Tension"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_effect"
    image_url: ""
    image_caption: ""
    content: "The `A_OpenShotgun2`, `A_LoadShotgun2`, and `A_CloseShotgun2` functions handle the sound effects for the double-barrel shotgun's reloading sequence. These sounds—opening, loading, and closing—add a tactile feel to the weapon, emphasizing its power and the tension of reloading during combat. The shotgun became one of DOOM's most iconic weapons, partly due to this attention to detail. The use of audio to enhance weapon mechanics influenced later FPS games, including Call of Duty and Battlefield, where weapon handling and sound design are central to gameplay."
  - id: "brain-awake-targeting-system"
    line_start: 1812
    line_end: 1839
    title: "Brain Awake: Finding Targets for Chaos"
    wikipedia_url: "https://doomwiki.org/wiki/Icon_of_Sin"
    image_url: ""
    image_caption: ""
    content: "The `A_BrainAwake` function initializes the 'brain' enemy, known as the Icon of Sin, by locating all target spots in the level. These targets are stored in an array (`braintargets`), which the brain later uses to spawn enemies. This setup creates a dynamic battlefield where new monsters can appear unpredictably, keeping players on edge. The routine reflects DOOM's emphasis on procedural elements to enhance replayability. The Icon of Sin's mechanics inspired similar 'boss spawning' systems in games like Serious Sam and Destiny."
  - id: "brain-scream-explosion-effects"
    line_start: 1848
    line_end: 1870
    title: "Brain Scream: Rockets and Randomness"
    wikipedia_url: "https://doomwiki.org/wiki/Icon_of_Sin"
    image_url: ""
    image_caption: ""
    content: "The `A_BrainScream` function spawns rockets in a randomized pattern around the brain enemy, creating chaotic explosions. This visual and auditory spectacle serves as a dramatic signal of the brain's distress. The randomness ensures that each encounter feels unique, a hallmark of DOOM's design philosophy. This technique of combining randomness with scripted events influenced later games like Diablo II and Left 4 Dead, which use similar methods to create dynamic encounters."
  - id: "spawn-fly-randomized-monster-generation"
    line_start: 1935
    line_end: 1989
    title: "Spawn Fly: Procedural Monster Generation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Procedural_generation"
    image_url: ""
    image_caption: ""
    content: "The `A_SpawnFly` function handles the spawning of monsters from the brain's 'flying cubes.' It first creates a teleport fog effect, then selects a monster type based on a weighted random distribution. This ensures a mix of enemies, with tougher monsters appearing less frequently. The spawned monster telefrags anything in its spot, adding a layer of unpredictability. This procedural generation technique was ahead of its time, influencing modern games like Minecraft and Spelunky, where randomness is used to create varied gameplay experiences."
  - id: "player-scream-death-sound-variation"
    line_start: 1993
    line_end: 2006
    title: "Player Scream: Death Sounds with Impact"
    wikipedia_url: "https://doomwiki.org/wiki/Player_character"
    image_url: ""
    image_caption: ""
    content: "The `A_PlayerScream` function plays different death sounds depending on the player's health at the time of death. If the player dies with less than -50 health without gibbing, a special 'high-pitched' death sound is played. This detail adds emotional weight to player deaths, making them feel more impactful. The use of varied audio feedback for player actions and states influenced later games like Dark Souls and The Last of Us, where sound design plays a critical role in conveying the player's experience."

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