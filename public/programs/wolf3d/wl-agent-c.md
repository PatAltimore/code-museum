---
title: "WL_AGENT.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_AGENT.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_AGENT.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-agent-c"
order: 11
description: "This file implements player actions and movement logic in Wolfenstein 3D, showcasing techniques that defined early FPS gameplay."

summary:
  - point: "Innovative use of fixed-point arithmetic for movement calculations"
    link: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    link_label: "Fixed-point arithmetic"
  - point: "Efficient handling of player state and interactions with game objects"
    link: "https://en.wikipedia.org/wiki/Game_programming"
    link_label: "Game programming"
  - point: "Introduction of strafing mechanics in early FPS games"
    link: "https://en.wikipedia.org/wiki/Strafing_(gaming)"
    link_label: "Strafing"
  - point: "Dynamic status updates for health, ammo, and score"
    link: "https://en.wikipedia.org/wiki/Heads-up_display_(video_games)"
    link_label: "HUD in video games"
  - point: "Use of lookup tables for trigonometric calculations"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup table"

enhancements:
  - id: "check-weapon-change"
    line_start: 99
    line_end: 131
    title: "The Subroutine That Made Knives Mandatory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This function, `CheckWeaponChange`, handles weapon selection based on player input. If the player has no ammo, the game forces them to use the knife, a design decision that emphasizes resource management and survival. In 1992, FPS games were still defining their mechanics, and this approach underscored the tension of limited resources in Wolfenstein 3D. The logic prioritizes the best available weapon but ensures fallback to the knife when necessary. This mechanic influenced later survival-oriented games, where players had to adapt to dwindling resources, such as Resident Evil and Doom."
  - id: "control-movement"
    line_start: 134
    line_end: 225
    title: "How Strafing Became a Staple of FPS Games"
    wikipedia_url: "https://en.wikipedia.org/wiki/Strafing_(gaming)"
    image_url: ""
    image_caption: ""
    content: "The `ControlMovement` function processes player movement and angle changes based on input. It introduces strafing, allowing players to move sideways while maintaining their aim—a mechanic that became fundamental in FPS games. The function also compensates for rounding errors at high frame rates, a clever workaround for the hardware limitations of the era. This innovation set the stage for more fluid and tactical movement in later FPS titles, such as Quake and Counter-Strike. John Carmack's focus on precision and responsiveness in player controls was pivotal in making Wolfenstein 3D's gameplay feel immersive and dynamic."
  - id: "status-draw-pic"
    line_start: 236
    line_end: 259
    title: "The HUD That Kept Players Informed"
    wikipedia_url: "https://en.wikipedia.org/wiki/Heads-up_display_(video_games)"
    image_url: ""
    image_caption: ""
    content: "The `StatusDrawPic` function updates the game's heads-up display (HUD), drawing status icons for health, ammo, and other indicators. By directly manipulating the screen buffer, it ensures fast updates despite the limited graphical capabilities of early PCs. This approach to HUD design influenced countless games, creating a standard for real-time feedback that persists in modern titles. The function's efficiency and clarity were essential in maintaining the player's situational awareness during intense gameplay."
  - id: "take-damage"
    line_start: 378
    line_end: 423
    title: "Making Damage Feel Personal"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `TakeDamage` function processes damage to the player and updates their health. It also triggers visual feedback, such as BJ Blazkowicz's face showing pain or shock, enhancing immersion. The function adjusts damage based on difficulty level and includes a dramatic death sequence when health drops to zero. This emphasis on visceral feedback was groundbreaking in 1992, adding emotional weight to gameplay. The mechanic influenced later games like Doom, where player damage was similarly tied to visual and auditory cues."
  - id: "give-points"
    line_start: 515
    line_end: 532
    title: "The Points System That Rewarded Exploration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Score_(game)"
    image_url: ""
    image_caption: ""
    content: "The `GivePoints` function adds points to the player's score and awards extra lives upon reaching specific thresholds. This incentivized exploration and treasure collection, a hallmark of Wolfenstein 3D's gameplay. The function's design reflects the arcade roots of early video games, where high scores were a primary motivator. This scoring system influenced later FPS games, encouraging players to engage with the environment and seek hidden rewards."
  - id: "get-bonus"
    line_start: 660
    line_end: 788
    title: "Treasure Hunting in a Nazi Stronghold"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `GetBonus` function handles interactions with collectible items, such as health packs, ammo, and treasure. Each item triggers specific effects, from healing to score increases, reinforcing the game's reward system. This mechanic added depth to Wolfenstein 3D, encouraging players to explore every corner of the map. The function's modular design allowed for easy expansion, as seen in later id Software titles like Doom, which featured similar collectible systems."
  - id: "clip-move"
    line_start: 858
    line_end: 898
    title: "Walking Through Walls (Sometimes)"
    wikipedia_url: "https://en.wikipedia.org/wiki/Clipping_(computer_graphics)"
    image_url: ""
    image_caption: ""
    content: "The `ClipMove` function checks whether the player can move to a new position, accounting for walls and obstacles. It includes a 'noclip' mode, allowing players to bypass collisions—a feature often used for debugging or cheats. This function showcases the challenges of collision detection in early 3D environments. The concept of clipping became a cornerstone of game development, influencing level design and player movement in later titles like Half-Life and Unreal."
  - id: "thrust"
    line_start: 920
    line_end: 963
    title: "Fixed-Point Math for Smooth Movement"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fixed-point_arithmetic"
    image_url: ""
    image_caption: ""
    content: "The `Thrust` function calculates player movement based on angle and speed, using fixed-point arithmetic to optimize performance on limited hardware. It updates the player's position and checks for victory conditions, such as reaching the exit tile. This technique was crucial in achieving smooth and responsive movement in Wolfenstein 3D, setting a precedent for efficient calculations in FPS games. The use of fixed-point math influenced later engines, including the Doom engine, which expanded on these principles."
  - id: "cmd-fire"
    line_start: 975
    line_end: 996
    title: "The Code Behind BJ's Trigger Finger"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "The `Cmd_Fire` function initiates the player's attack, setting up weapon frames and animation sequences. It ties player input directly to the game's visual and auditory feedback, creating a satisfying loop of action and response. This function exemplifies the tight integration of gameplay mechanics and player interaction in Wolfenstein 3D. Its design influenced the development of weapon systems in later FPS games, including Doom and Quake, where similar principles were applied to create engaging combat experiences."
  - id: "cmd-use-interactions"
    line_start: 998
    line_end: 1080
    title: "How Wolfenstein Doors Became Interactive"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "Cmd_Use handles player interactions with the environment, such as opening doors, activating elevators, and pushing walls. The function determines the player's facing direction and checks the tilemap for interactive objects. If the player is facing a pushable wall, it triggers the PushWall function, moving the wall in the specified direction. For elevators, it flips a tile switch and updates the game state to indicate level completion or entry into a secret level. This mechanic was groundbreaking in 1992, as it allowed players to interact dynamically with their surroundings, creating a sense of agency and immersion. At the time, most games relied on static environments, but Wolfenstein 3D introduced interactive elements that became staples of the FPS genre. This approach influenced later titles like Doom and Half-Life, where environmental interaction became a core gameplay feature."
  - id: "spawnplayer-initialization"
    line_start: 1092
    line_end: 1118
    title: "The Code That Spawns a Hero"
    wikipedia_url: "https://en.wikipedia.org/wiki/First-person_shooter"
    image_url: ""
    image_caption: ""
    content: "SpawnPlayer initializes the player’s position, direction, and state when entering a level. It sets up the player’s coordinates, area number, and angle based on the provided tile and direction. The function also calls Thrust to set additional variables and InitAreas to prepare the map. This initialization was crucial for ensuring smooth transitions between levels and maintaining gameplay consistency. In 1992, the concept of a player object with dynamic attributes was still evolving, and Wolfenstein 3D's implementation laid the groundwork for modern game engines. The idea of spawning a player with predefined attributes influenced later FPS games, including Doom and Quake, where player initialization became more complex with additional stats and equipment."
  - id: "knifeattack-close-combat"
    line_start: 1121
    line_end: 1164
    title: "The Algorithm Behind Knife Combat"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_combat"
    image_url: ""
    image_caption: ""
    content: "KnifeAttack defines the mechanics of close-range combat. It checks for shootable and visible objects within the player’s view and calculates the closest target. If a target is within range, the function calls DamageActor to apply damage. This simple yet effective algorithm allowed Wolfenstein 3D to simulate melee combat without requiring complex physics or collision detection. At the time, most games relied on ranged attacks, but Wolfenstein 3D's inclusion of melee combat added variety to gameplay. This approach influenced later FPS games, where melee attacks became a standard feature, often with more sophisticated animations and effects."
  - id: "gunattack-ranged-combat"
    line_start: 1168
    line_end: 1243
    title: "How Wolfenstein Simulated Gunfire"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_combat"
    image_url: ""
    image_caption: ""
    content: "GunAttack handles ranged combat by identifying targets within the player’s view and simulating a line of sight check. The function iterates through potential targets, calculates their distance, and determines whether the player hits or misses based on random values and distance thresholds. If a hit occurs, it applies damage proportional to the distance. This algorithm was a clever workaround for the lack of true 3D collision detection, relying instead on 2D calculations and approximations. In 1992, this approach was innovative, as it allowed Wolfenstein 3D to deliver fast-paced gunplay on limited hardware. The technique influenced later games like Doom, which expanded on these mechanics with more advanced hit detection and weapon systems."
  - id: "victoryspin-animation"
    line_start: 1245
    line_end: 1280
    title: "The Celebration Code: VictorySpin"
    wikipedia_url: "https://en.wikipedia.org/wiki/Animation"
    image_url: ""
    image_caption: ""
    content: "VictorySpin creates a celebratory animation when the player completes a level. It adjusts the player’s angle and position to simulate a spinning motion and moves the player toward a destination tile. This simple yet effective animation added a sense of accomplishment and flair to the end of each level. In 1992, animations like these were rare in FPS games, which often focused solely on gameplay mechanics. VictorySpin demonstrated id Software’s attention to detail and their desire to enhance player experience. This approach influenced later games, where end-of-level animations became more elaborate, often incorporating cinematic sequences or dynamic camera movements."
  - id: "t-attack-gameplay-loop"
    line_start: 1283
    line_end: 1379
    title: "The Attack Loop That Defined FPS Combat"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_loop"
    image_url: ""
    image_caption: ""
    content: "T_Attack orchestrates the player’s attack actions, including weapon handling and frame updates. It checks the player’s current weapon and ammo, updates the attack frame, and calls KnifeAttack or GunAttack based on the weapon type. The function also handles weapon switching and ammo display. This gameplay loop was a key innovation in Wolfenstein 3D, enabling fluid and responsive combat mechanics. In 1992, such loops were groundbreaking, as they allowed for real-time action without sacrificing performance. T_Attack influenced the design of combat systems in later FPS games, including Doom and Quake, where similar loops were used to manage complex weapon and attack mechanics."
  - id: "t-player-game-loop"
    line_start: 1383
    line_end: 1419
    title: "The Code That Runs the Player"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_loop"
    image_url: ""
    image_caption: ""
    content: "T_Player serves as the main gameplay loop for player actions and movement. It checks for victory conditions, updates the player’s face and weapon state, handles interactions through Cmd_Use and Cmd_Fire, and calculates the player’s position on the map. This loop was essential for maintaining the game’s real-time responsiveness and ensuring smooth gameplay. In 1992, the concept of a centralized player loop was still evolving, and Wolfenstein 3D’s implementation set a precedent for FPS game design. The approach influenced later titles like Doom and Half-Life, where similar loops were used to manage player actions and interactions in increasingly complex environments."

---

```cpp
// WL_AGENT.C

#include "WL_DEF.H"
#pragma hdrstop


/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/

#define MAXMOUSETURN	10


#define MOVESCALE		150l
#define BACKMOVESCALE	100l
#define ANGLESCALE		20

/*
=============================================================================

						 GLOBAL VARIABLES

=============================================================================
*/



//
// player state info
//
boolean		running;
long		thrustspeed;

unsigned	plux,pluy;			// player coordinates scaled to unsigned

int			anglefrac;
int			gotgatgun;	// JR

objtype		*LastAttacker;

/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/


void	T_Player (objtype *ob);
void	T_Attack (objtype *ob);

statetype s_player = {false,0,0,T_Player,NULL,NULL};
statetype s_attack = {false,0,0,T_Attack,NULL,NULL};


long	playerxmove,playerymove;

struct atkinf
{
	char	tics,attack,frame;		// attack is 1 for gun, 2 for knife
} attackinfo[4][14] =

{
{ {6,0,1},{6,2,2},{6,0,3},{6,-1,4} },
{ {6,0,1},{6,1,2},{6,0,3},{6,-1,4} },
{ {6,0,1},{6,1,2},{6,3,3},{6,-1,4} },
{ {6,0,1},{6,1,2},{6,4,3},{6,-1,4} },
};


int	strafeangle[9] = {0,90,180,270,45,135,225,315,0};

void DrawWeapon (void);
void GiveWeapon (int weapon);
void	GiveAmmo (int ammo);

//===========================================================================

//----------

void Attack (void);
void Use (void);
void Search (objtype *ob);
void SelectWeapon (void);
void SelectItem (void);

//----------

boolean TryMove (objtype *ob);
void T_Player (objtype *ob);

void ClipMove (objtype *ob, long xmove, long ymove);

/*
=============================================================================

						CONTROL STUFF

=============================================================================
*/

/*
======================
=
= CheckWeaponChange
=
= Keys 1-4 change weapons
=
======================
*/

void CheckWeaponChange (void)
{
	int	i,buttons;

	if (!gamestate.ammo)		// must use knife with no ammo
		return;

	for (i=wp_knife ; i<=gamestate.bestweapon ; i++)
		if (buttonstate[bt_readyknife+i-wp_knife])
		{
			gamestate.weapon = gamestate.chosenweapon = i;
			DrawWeapon ();
			return;
		}
}


/*
=======================
=
= ControlMovement
=
= Takes controlx,controly, and buttonstate[bt_strafe]
=
= Changes the player's angle and position
=
= There is an angle hack because when going 70 fps, the roundoff becomes
= significant
=
=======================
*/

void ControlMovement (objtype *ob)
{
	long	oldx,oldy;
	int		angle,maxxmove;
	int		angleunits;
	long	speed;

	thrustspeed = 0;

	oldx = player->x;
	oldy = player->y;

//
// side to side move
//
	if (buttonstate[bt_strafe])
	{
	//
	// strafing
	//
	//
		if (controlx > 0)
		{
			angle = ob->angle - ANGLES/4;
			if (angle < 0)
				angle += ANGLES;
			Thrust (angle,controlx*MOVESCALE);	// move to left
		}
		else if (controlx < 0)
		{
			angle = ob->angle + ANGLES/4;
			if (angle >= ANGLES)
				angle -= ANGLES;
			Thrust (angle,-controlx*MOVESCALE);	// move to right
		}
	}
	else
	{
	//
	// not strafing
	//
		anglefrac += controlx;
		angleunits = anglefrac/ANGLESCALE;
		anglefrac -= angleunits*ANGLESCALE;
		ob->angle -= angleunits;

		if (ob->angle >= ANGLES)
			ob->angle -= ANGLES;
		if (ob->angle < 0)
			ob->angle += ANGLES;

	}

//
// forward/backwards move
//
	if (controly < 0)
	{
		Thrust (ob->angle,-controly*MOVESCALE);	// move forwards
	}
	else if (controly > 0)
	{
		angle = ob->angle + ANGLES/2;
		if (angle >= ANGLES)
			angle -= ANGLES;
		Thrust (angle,controly*BACKMOVESCALE);		// move backwards
	}

	if (gamestate.victoryflag)		// watching the BJ actor
		return;

//
// calculate total move
//
	playerxmove = player->x - oldx;
	playerymove = player->y - oldy;
}

/*
=============================================================================

					STATUS WINDOW STUFF

=============================================================================
*/


/*
==================
=
= StatusDrawPic
=
==================
*/

void StatusDrawPic (unsigned x, unsigned y, unsigned picnum)
{
	unsigned	temp;

	temp = bufferofs;
	bufferofs = 0;

	bufferofs = PAGE1START+(200-STATUSLINES)*SCREENWIDTH;
	LatchDrawPic (x,y,picnum);
	bufferofs = PAGE2START+(200-STATUSLINES)*SCREENWIDTH;
	LatchDrawPic (x,y,picnum);
	bufferofs = PAGE3START+(200-STATUSLINES)*SCREENWIDTH;
	LatchDrawPic (x,y,picnum);

	bufferofs = temp;
}


/*
==================
=
= DrawFace
=
==================
*/

void DrawFace (void)
{
	if (gamestate.health)
	{
		#ifdef SPEAR
		if (godmode)
			StatusDrawPic (17,4,GODMODEFACE1PIC+gamestate.faceframe);
		else
		#endif
		StatusDrawPic (17,4,FACE1APIC+3*((100-gamestate.health)/16)+gamestate.faceframe);
	}
	else
	{
#ifndef SPEAR
	 if (LastAttacker->obclass == needleobj)
	   StatusDrawPic (17,4,MUTANTBJPIC);
	 else
#endif
	   StatusDrawPic (17,4,FACE8APIC);
	}
}


/*
===============
=
= UpdateFace
=
= Calls draw face if time to change
=
===============
*/

#define FACETICS	70

int	facecount;

void	UpdateFace (void)
{

	if (SD_SoundPlaying() == GETGATLINGSND)
	  return;

	facecount += tics;
	if (facecount > US_RndT())
	{
		gamestate.faceframe = (US_RndT()>>6);
		if (gamestate.faceframe==3)
			gamestate.faceframe = 1;

		facecount = 0;
		DrawFace ();
	}
}



/*
===============
=
= LatchNumber
=
= right justifies and pads with blanks
=
===============
*/

void	LatchNumber (int x, int y, int width, long number)
{
	unsigned	length,c;
	char	str[20];

	ltoa (number,str,10);

	length = strlen (str);

	while (length<width)
	{
		StatusDrawPic (x,y,N_BLANKPIC);
		x++;
		width--;
	}

	c= length <= width ? 0 : length-width;

	while (c<length)
	{
		StatusDrawPic (x,y,str[c]-'0'+ N_0PIC);
		x++;
		c++;
	}
}


/*
===============
=
= DrawHealth
=
===============
*/

void	DrawHealth (void)
{
	LatchNumber (21,16,3,gamestate.health);
}


/*
===============
=
= TakeDamage
=
===============
*/

void	TakeDamage (int points,objtype *attacker)
{
	LastAttacker = attacker;

	if (gamestate.victoryflag)
		return;
	if (gamestate.difficulty==gd_baby)
	  points>>=2;

	if (!godmode)
		gamestate.health -= points;

	if (gamestate.health<=0)
	{
		gamestate.health = 0;
		playstate = ex_died;
		killerobj = attacker;
	}

	StartDamageFlash (points);

	gotgatgun=0;

	DrawHealth ();
	DrawFace ();

	//
	// MAKE BJ'S EYES BUG IF MAJOR DAMAGE!
	//
	#ifdef SPEAR
	if (points > 30 && gamestate.health!=0 && !godmode)
	{
		StatusDrawPic (17,4,BJOUCHPIC);
		facecount = 0;
	}
	#endif

}


/*
===============
=
= HealSelf
=
===============
*/

void	HealSelf (int points)
{
	gamestate.health += points;
	if (gamestate.health>100)
		gamestate.health = 100;

	DrawHealth ();
	gotgatgun = 0;	// JR
	DrawFace ();
}


//===========================================================================


/*
===============
=
= DrawLevel
=
===============
*/

void	DrawLevel (void)
{
#ifdef SPEAR
	if (gamestate.mapon == 20)
		LatchNumber (2,16,2,18);
	else
#endif
	LatchNumber (2,16,2,gamestate.mapon+1);
}

//===========================================================================


/*
===============
=
= DrawLives
=
===============
*/

void	DrawLives (void)
{
	LatchNumber (14,16,1,gamestate.lives);
}


/*
===============
=
= GiveExtraMan
=
===============
*/

void	GiveExtraMan (void)
{
	if (gamestate.lives<9)
		gamestate.lives++;
	DrawLives ();
	SD_PlaySound (BONUS1UPSND);
}

//===========================================================================

/*
===============
=
= DrawScore
=
===============
*/

void	DrawScore (void)
{
	LatchNumber (6,16,6,gamestate.score);
}

/*
===============
=
= GivePoints
=
===============
*/

void	GivePoints (long points)
{
	gamestate.score += points;
	while (gamestate.score >= gamestate.nextextra)
	{
		gamestate.nextextra += EXTRAPOINTS;
		GiveExtraMan ();
	}
	DrawScore ();
}

//===========================================================================

/*
==================
=
= DrawWeapon
=
==================
*/

void DrawWeapon (void)
{
	StatusDrawPic (32,8,KNIFEPIC+gamestate.weapon);
}


/*
==================
=
= DrawKeys
=
==================
*/

void DrawKeys (void)
{
	if (gamestate.keys & 1)
		StatusDrawPic (30,4,GOLDKEYPIC);
	else
		StatusDrawPic (30,4,NOKEYPIC);

	if (gamestate.keys & 2)
		StatusDrawPic (30,20,SILVERKEYPIC);
	else
		StatusDrawPic (30,20,NOKEYPIC);
}



/*
==================
=
= GiveWeapon
=
==================
*/

void GiveWeapon (int weapon)
{
	GiveAmmo (6);

	if (gamestate.bestweapon<weapon)
		gamestate.bestweapon = gamestate.weapon
		= gamestate.chosenweapon = weapon;

	DrawWeapon ();
}


//===========================================================================

/*
===============
=
= DrawAmmo
=
===============
*/

void	DrawAmmo (void)
{
	LatchNumber (27,16,2,gamestate.ammo);
}


/*
===============
=
= GiveAmmo
=
===============
*/

void	GiveAmmo (int ammo)
{
	if (!gamestate.ammo)				// knife was out
	{
		if (!gamestate.attackframe)
		{
			gamestate.weapon = gamestate.chosenweapon;
			DrawWeapon ();
		}
	}
	gamestate.ammo += ammo;
	if (gamestate.ammo > 99)
		gamestate.ammo = 99;
	DrawAmmo ();
}

//===========================================================================

/*
==================
=
= GiveKey
=
==================
*/

void GiveKey (int key)
{
	gamestate.keys |= (1<<key);
	DrawKeys ();
}



/*
=============================================================================

							MOVEMENT

=============================================================================
*/


/*
===================
=
= GetBonus
=
===================
*/
void GetBonus (statobj_t *check)
{
	switch (check->itemnumber)
	{
	case	bo_firstaid:
		if (gamestate.health == 100)
			return;

		SD_PlaySound (HEALTH2SND);
		HealSelf (25);
		break;

	case	bo_key1:
	case	bo_key2:
	case	bo_key3:
	case	bo_key4:
		GiveKey (check->itemnumber - bo_key1);
		SD_PlaySound (GETKEYSND);
		break;

	case	bo_cross:
		SD_PlaySound (BONUS1SND);
		GivePoints (100);
		gamestate.treasurecount++;
		break;
	case	bo_chalice:
		SD_PlaySound (BONUS2SND);
		GivePoints (500);
		gamestate.treasurecount++;
		break;
	case	bo_bible:
		SD_PlaySound (BONUS3SND);
		GivePoints (1000);
		gamestate.treasurecount++;
		break;
	case	bo_crown:
		SD_PlaySound (BONUS4SND);
		GivePoints (5000);
		gamestate.treasurecount++;
		break;

	case	bo_clip:
		if (gamestate.ammo == 99)
			return;

		SD_PlaySound (GETAMMOSND);
		GiveAmmo (8);
		break;
	case	bo_clip2:
		if (gamestate.ammo == 99)
			return;

		SD_PlaySound (GETAMMOSND);
		GiveAmmo (4);
		break;

#ifdef SPEAR
	case	bo_25clip:
		if (gamestate.ammo == 99)
		  return;

		SD_PlaySound (GETAMMOBOXSND);
		GiveAmmo (25);
		break;
#endif

	case	bo_machinegun:
		SD_PlaySound (GETMACHINESND);
		GiveWeapon (wp_machinegun);
		break;
	case	bo_chaingun:
		SD_PlaySound (GETGATLINGSND);
		GiveWeapon (wp_chaingun);

		StatusDrawPic (17,4,GOTGATLINGPIC);
		facecount = 0;
		gotgatgun = 1;
		break;

	case	bo_fullheal:
		SD_PlaySound (BONUS1UPSND);
		HealSelf (99);
		GiveAmmo (25);
		GiveExtraMan ();
		gamestate.treasurecount++;
		break;

	case	bo_food:
		if (gamestate.health == 100)
			return;

		SD_PlaySound (HEALTH1SND);
		HealSelf (10);
		break;

	case	bo_alpo:
		if (gamestate.health == 100)
			return;

		SD_PlaySound (HEALTH1SND);
		HealSelf (4);
		break;

	case	bo_gibs:
		if (gamestate.health >10)
			return;

		SD_PlaySound (SLURPIESND);
		HealSelf (1);
		break;

	case	bo_spear:
		spearflag = true;
		spearx = player->x;
		speary = player->y;
		spearangle = player->angle;
		playstate = ex_completed;
	}

	StartBonusFlash ();
	check->shapenum = -1;			// remove from list
}


/*
===================
=
= TryMove
=
= returns true if move ok
= debug: use pointers to optimize
===================
*/

boolean TryMove (objtype *ob)
{
	int			xl,yl,xh,yh,x,y;
	objtype		*check;
	long		deltax,deltay;

	xl = (ob->x-PLAYERSIZE) >>TILESHIFT;
	yl = (ob->y-PLAYERSIZE) >>TILESHIFT;

	xh = (ob->x+PLAYERSIZE) >>TILESHIFT;
	yh = (ob->y+PLAYERSIZE) >>TILESHIFT;

//
// check for solid walls
//
	for (y=yl;y<=yh;y++)
		for (x=xl;x<=xh;x++)
		{
			check = actorat[x][y];
			if (check && check<objlist)
				return false;
		}

//
// check for actors
//
	if (yl>0)
		yl--;
	if (yh<MAPSIZE-1)
		yh++;
	if (xl>0)
		xl--;
	if (xh<MAPSIZE-1)
		xh++;

	for (y=yl;y<=yh;y++)
		for (x=xl;x<=xh;x++)
		{
			check = actorat[x][y];
			if (check > objlist
			&& (check->flags & FL_SHOOTABLE) )
			{
				deltax = ob->x - check->x;
				if (deltax < -MINACTORDIST || deltax > MINACTORDIST)
					continue;
				deltay = ob->y - check->y;
				if (deltay < -MINACTORDIST || deltay > MINACTORDIST)
					continue;

				return false;
			}
		}

	return true;
}


/*
===================
=
= ClipMove
=
===================
*/

void ClipMove (objtype *ob, long xmove, long ymove)
{
	long	basex,basey;

	basex = ob->x;
	basey = ob->y;

	ob->x = basex+xmove;
	ob->y = basey+ymove;
	if (TryMove (ob))
		return;

	if (noclip && ob->x > 2*TILEGLOBAL && ob->y > 2*TILEGLOBAL &&
	ob->x < (((long)(mapwidth-1))<<TILESHIFT)
	&& ob->y < (((long)(mapheight-1))<<TILESHIFT) )
		return;		// walk through walls

	if (!SD_SoundPlaying())
		SD_PlaySound (HITWALLSND);

	ob->x = basex+xmove;
	ob->y = basey;
	if (TryMove (ob))
		return;

	ob->x = basex;
	ob->y = basey+ymove;
	if (TryMove (ob))
		return;

	ob->x = basex;
	ob->y = basey;
}

//==========================================================================

/*
===================
=
= VictoryTile
=
===================
*/

void VictoryTile (void)
{
#ifndef SPEAR
	SpawnBJVictory ();
#endif

	gamestate.victoryflag = true;
}


/*
===================
=
= Thrust
=
===================
*/

void Thrust (int angle, long speed)
{
	long xmove,ymove;
	long	slowmax;
	unsigned	offset;


	//
	// ZERO FUNNY COUNTER IF MOVED!
	//
	#ifdef SPEAR
	if (speed)
		funnyticount = 0;
	#endif

	thrustspeed += speed;
//
// moving bounds speed
//
	if (speed >= MINDIST*2)
		speed = MINDIST*2-1;

	xmove = FixedByFrac(speed,costable[angle]);
	ymove = -FixedByFrac(speed,sintable[angle]);

	ClipMove(player,xmove,ymove);

	player->tilex = player->x >> TILESHIFT;		// scale to tile values
	player->tiley = player->y >> TILESHIFT;

	offset = farmapylookup[player->tiley]+player->tilex;
	player->areanumber = *(mapsegs[0] + offset) -AREATILE;

	if (*(mapsegs[1] + offset) == EXITTILE)
		VictoryTile ();
}


/*
=============================================================================

								ACTIONS

=============================================================================
*/


/*
===============
=
= Cmd_Fire
=
===============
*/

void Cmd_Fire (void)
{
	buttonheld[bt_attack] = true;

	gamestate.weaponframe = 0;

	player->state = &s_attack;

	gamestate.attackframe = 0;
	gamestate.attackcount =
		attackinfo[gamestate.weapon][gamestate.attackframe].tics;
	gamestate.weaponframe =
		attackinfo[gamestate.weapon][gamestate.attackframe].frame;
}

//===========================================================================

/*
===============
=
= Cmd_Use
=
===============
*/

void Cmd_Use (void)
{
	objtype 	*check;
	int			checkx,checky,doornum,dir;
	boolean		elevatorok;


//
// find which cardinal direction the player is facing
//
	if (player->angle < ANGLES/8 || player->angle > 7*ANGLES/8)
	{
		checkx = player->tilex + 1;
		checky = player->tiley;
		dir = di_east;
		elevatorok = true;
	}
	else if (player->angle < 3*ANGLES/8)
	{
		checkx = player->tilex;
		checky = player->tiley-1;
		dir = di_north;
		elevatorok = false;
	}
	else if (player->angle < 5*ANGLES/8)
	{
		checkx = player->tilex - 1;
		checky = player->tiley;
		dir = di_west;
		elevatorok = true;
	}
	else
	{
		checkx = player->tilex;
		checky = player->tiley + 1;
		dir = di_south;
		elevatorok = false;
	}

	doornum = tilemap[checkx][checky];
	if (*(mapsegs[1]+farmapylookup[checky]+checkx) == PUSHABLETILE)
	{
	//
	// pushable wall
	//

		PushWall (checkx,checky,dir);
		return;
	}
	if (!buttonheld[bt_use] && doornum == ELEVATORTILE && elevatorok)
	{
	//
	// use elevator
	//
		buttonheld[bt_use] = true;

		tilemap[checkx][checky]++;		// flip switch
		if (*(mapsegs[0]+farmapylookup[player->tiley]+player->tilex) == ALTELEVATORTILE)
			playstate = ex_secretlevel;
		else
			playstate = ex_completed;
		SD_PlaySound (LEVELDONESND);
		SD_WaitSoundDone();
	}
	else if (!buttonheld[bt_use] && doornum & 0x80)
	{
		buttonheld[bt_use] = true;
		OperateDoor (doornum & ~0x80);
	}
	else
		SD_PlaySound (DONOTHINGSND);

}

/*
=============================================================================

						   PLAYER CONTROL

=============================================================================
*/



/*
===============
=
= SpawnPlayer
=
===============
*/

void SpawnPlayer (int tilex, int tiley, int dir)
{
	player->obclass = playerobj;
	player->active = true;
	player->tilex = tilex;
	player->tiley = tiley;
	player->areanumber =
		*(mapsegs[0] + farmapylookup[player->tiley]+player->tilex);
	player->x = ((long)tilex<<TILESHIFT)+TILEGLOBAL/2;
	player->y = ((long)tiley<<TILESHIFT)+TILEGLOBAL/2;
	player->state = &s_player;
	player->angle = (1-dir)*90;
	if (player->angle<0)
		player->angle += ANGLES;
	player->flags = FL_NEVERMARK;
	Thrust (0,0);				// set some variables

	InitAreas ();
}


//===========================================================================

/*
===============
=
= T_KnifeAttack
=
= Update player hands, and try to do damage when the proper frame is reached
=
===============
*/

void	KnifeAttack (objtype *ob)
{
	objtype *check,*closest;
	long	dist;

	SD_PlaySound (ATKKNIFESND);
// actually fire
	dist = 0x7fffffff;
	closest = NULL;
	for (check=ob->next ; check ; check=check->next)
		if ( (check->flags & FL_SHOOTABLE)
		&& (check->flags & FL_VISABLE)
		&& abs (check->viewx-centerx) < shootdelta
		)
		{
			if (check->transx < dist)
			{
				dist = check->transx;
				closest = check;
			}
		}

	if (!closest || dist> 0x18000l)
	{
	// missed

		return;
	}

// hit something
	DamageActor (closest,US_RndT() >> 4);
}



void	GunAttack (objtype *ob)
{
	objtype *check,*closest,*oldclosest;
	int		damage;
	int		dx,dy,dist;
	long	viewdist;

	switch (gamestate.weapon)
	{
	case wp_pistol:
		SD_PlaySound (ATKPISTOLSND);
		break;
	case wp_machinegun:
		SD_PlaySound (ATKMACHINEGUNSND);
		break;
	case wp_chaingun:
		SD_PlaySound (ATKGATLINGSND);
		break;
	}

	madenoise = true;

//
// find potential targets
//
	viewdist = 0x7fffffffl;
	closest = NULL;

	while (1)
	{
		oldclosest = closest;

		for (check=ob->next ; check ; check=check->next)
			if ( (check->flags & FL_SHOOTABLE)
			&& (check->flags & FL_VISABLE)
			&& abs (check->viewx-centerx) < shootdelta
			)
			{
				if (check->transx < viewdist)
				{
					viewdist = check->transx;
					closest = check;
				}
			}

		if (closest == oldclosest)
			return;						// no more targets, all missed

	//
	// trace a line from player to enemey
	//
		if (CheckLine(closest))
			break;

	}

//
// hit something
//
	dx = abs(closest->tilex - player->tilex);
	dy = abs(closest->tiley - player->tiley);
	dist = dx>dy ? dx:dy;

	if (dist<2)
		damage = US_RndT() / 4;
	else if (dist<4)
		damage = US_RndT() / 6;
	else
	{
		if ( (US_RndT() / 12) < dist)		// missed
			return;
		damage = US_RndT() / 6;
	}

	DamageActor (closest,damage);
}

//===========================================================================

/*
===============
=
= VictorySpin
=
===============
*/

void VictorySpin (void)
{
	long	desty;

	if (player->angle > 270)
	{
		player->angle -= tics * 3;
		if (player->angle < 270)
			player->angle = 270;
	}
	else if (player->angle < 270)
	{
		player->angle += tics * 3;
		if (player->angle > 270)
			player->angle = 270;
	}

	desty = (((long)player->tiley-5)<<TILESHIFT)-0x3000;

	if (player->y > desty)
	{
		player->y -= tics*4096;
		if (player->y < desty)
			player->y = desty;
	}
}


//===========================================================================

/*
===============
=
= T_Attack
=
===============
*/

void	T_Attack (objtype *ob)
{
	struct	atkinf	*cur;

	UpdateFace ();

	if (gamestate.victoryflag)		// watching the BJ actor
	{
		VictorySpin ();
		return;
	}

	if ( buttonstate[bt_use] && !buttonheld[bt_use] )
		buttonstate[bt_use] = false;

	if ( buttonstate[bt_attack] && !buttonheld[bt_attack])
		buttonstate[bt_attack] = false;

	ControlMovement (ob);
	if (gamestate.victoryflag)		// watching the BJ actor
		return;

	plux = player->x >> UNSIGNEDSHIFT;			// scale to fit in unsigned
	pluy = player->y >> UNSIGNEDSHIFT;
	player->tilex = player->x >> TILESHIFT;		// scale to tile values
	player->tiley = player->y >> TILESHIFT;

//
// change frame and fire
//
	gamestate.attackcount -= tics;
	while (gamestate.attackcount <= 0)
	{
		cur = &attackinfo[gamestate.weapon][gamestate.attackframe];
		switch (cur->attack)
		{
		case -1:
			ob->state = &s_player;
			if (!gamestate.ammo)
			{
				gamestate.weapon = wp_knife;
				DrawWeapon ();
			}
			else
			{
				if (gamestate.weapon != gamestate.chosenweapon)
				{
					gamestate.weapon = gamestate.chosenweapon;
					DrawWeapon ();
				}
			};
			gamestate.attackframe = gamestate.weaponframe = 0;
			return;

		case 4:
			if (!gamestate.ammo)
				break;
			if (buttonstate[bt_attack])
				gamestate.attackframe -= 2;
		case 1:
			if (!gamestate.ammo)
			{	// can only happen with chain gun
				gamestate.attackframe++;
				break;
			}
			GunAttack (ob);
			gamestate.ammo--;
			DrawAmmo ();
			break;

		case 2:
			KnifeAttack (ob);
			break;

		case 3:
			if (gamestate.ammo && buttonstate[bt_attack])
				gamestate.attackframe -= 2;
			break;
		}

		gamestate.attackcount += cur->tics;
		gamestate.attackframe++;
		gamestate.weaponframe =
			attackinfo[gamestate.weapon][gamestate.attackframe].frame;
	}

}



//===========================================================================

/*
===============
=
= T_Player
=
===============
*/

void	T_Player (objtype *ob)
{
	if (gamestate.victoryflag)		// watching the BJ actor
	{
		VictorySpin ();
		return;
	}

	UpdateFace ();
	CheckWeaponChange ();

	if ( buttonstate[bt_use] )
		Cmd_Use ();

	if ( buttonstate[bt_attack] && !buttonheld[bt_attack])
		Cmd_Fire ();

	ControlMovement (ob);
	if (gamestate.victoryflag)		// watching the BJ actor
		return;


	plux = player->x >> UNSIGNEDSHIFT;			// scale to fit in unsigned
	pluy = player->y >> UNSIGNEDSHIFT;
	player->tilex = player->x >> TILESHIFT;		// scale to tile values
	player->tiley = player->y >> TILESHIFT;
}


```