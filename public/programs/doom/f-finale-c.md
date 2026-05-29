---
title: "f_finale.c"
program: "DOOM"
program_slug: "doom"
file_path: "linuxdoom-1.10/f_finale.c"
language: "C"
github_url: "https://github.com/id-Software/DOOM/blob/master/linuxdoom-1.10/f_finale.c"
year: 1993
author: "John Carmack, John Romero, Dave Taylor"
slug: "f-finale-c"
order: 21
description: "This file handles DOOM's finale animations, text displays, and character cast sequences, showcasing the game's innovative approach to immersive storytelling and visual presentation."

summary:
  - point: "Dynamic text rendering for endgame sequences"
    link: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    link_label: "DOOM (1993)"
  - point: "Character cast animation system with sound and state transitions"
    link: "https://en.wikipedia.org/wiki/State_machine"
    link_label: "State machine"
  - point: "Custom scrolling animation for the 'Bunny Scroll' ending"
    link: "https://doomwiki.org/wiki/Ending"
    link_label: "DOOM Ending"
  - point: "Efficient screen wipe and background rendering techniques"
    link: "https://doomwiki.org/wiki/Rendering_engine"
    link_label: "DOOM Rendering Engine"
  - point: "Integration of music and sound effects into finale sequences"
    link: "https://en.wikipedia.org/wiki/Sound_effect"
    link_label: "Sound Effects"

enhancements:
  - id: "start-finale-sequence"
    line_start: 92
    line_end: 190
    title: "How DOOM Decides Your Finale"
    wikipedia_url: "https://en.wikipedia.org/wiki/DOOM_(1993_video_game)"
    image_url: ""
    image_caption: ""
    content: "The `F_StartFinale` function initializes the game's finale sequence, determining the type of ending based on the game mode and episode. It sets up the background texture (`finaleflat`) and the text to display (`finaletext`) while also selecting appropriate music. This function reflects DOOM's modular design, where different game modes (e.g., DOOM I, DOOM II, shareware) and episodes dynamically influence the finale content. In 1993, this approach was groundbreaking, as it allowed developers to reuse assets and logic across multiple game versions, reducing development time while enhancing player experience. The finale sequence, with its tailored visuals and music, became a memorable part of DOOM's storytelling, influencing later games like Quake and Unreal in their use of dynamic endgame sequences."
  - id: "finale-event-responder"
    line_start: 194
    line_end: 200
    title: "Handling Player Input During Finales"
    wikipedia_url: "https://en.wikipedia.org/wiki/Event-driven_programming"
    image_url: ""
    image_caption: ""
    content: "The `F_Responder` function processes player input during the finale sequence. It checks if the finale stage is at the character cast sequence (`finalestage == 2`) and delegates input handling to `F_CastResponder`. This design ensures that the game's finale remains interactive, allowing players to influence the sequence even during scripted animations. In the early '90s, event-driven programming was becoming a standard for interactive applications, and DOOM's implementation demonstrated how it could be applied to enhance gameplay immersion. By allowing player input during the finale, DOOM set a precedent for interactive storytelling in games, paving the way for similar features in titles like Half-Life and Bioshock."
  - id: "finale-animation-ticker"
    line_start: 203
    line_end: 248
    title: "Ticking Through the Finale: Timer Logic and Letter-by-Letter Text"
    wikipedia_url: "https://en.wikipedia.org/wiki/Game_loop"
    image_url: ""
    image_caption: ""
    content: "The F_Ticker function advances the finale sequence by incrementing a counter (finalecount) and transitioning between stages, while also checking for player input to skip animations or proceed to the next level. Alongside it, F_TextWrite renders the finale text one character at a time using bitmap fonts from hu_font, calculating character positions dynamically so that letters appear gradually in a cinematic crawl. Together these two routines embody DOOM's state-driven game loop, where a central tick function updates state and a paired draw function renders the result. In the early 1990s, dynamically timed text was unusual in games, but DOOM's approach added narrative polish that influenced later titles from Final Fantasy VII to Half-Life. The counter-based stage transitions also became a template for scripted sequences in subsequent id Tech engines."
  - id: "character-cast-animation"
    line_start: 376
    line_end: 388
    title: "Meet the Monsters: DOOM's Cast Sequence"
    wikipedia_url: "https://doomwiki.org/wiki/Ending"
    image_url: ""
    image_caption: ""
    content: "The `F_StartCast` function initializes the character cast sequence, showcasing DOOM's enemies in action. It sets up the first monster's state and forces a screen wipe to transition into the cast animation. This sequence was a novel way to celebrate the game's characters, giving players a closer look at the enemies they had faced. The cast sequence became a hallmark of DOOM's presentation style, influencing other games like Mortal Kombat and Street Fighter, which adopted similar character showcases in their endings."
  - id: "bunny-scroll-animation"
    line_start: 640
    line_end: 693
    title: "The Bunny Scroll and the Finale Drawer: DOOM's Parting Shot"
    wikipedia_url: "https://doomwiki.org/wiki/Ending"
    image_url: ""
    image_caption: ""
    content: "F_BunnyScroll creates the scrolling rabbit-and-pig finale for Episode 3 by dynamically compositing two background patches column by column while timing the appearance of seven progressive END0-END6 frames accompanied by pistol sound cues. F_Drawer is the master dispatch that selects between text rendering, the bunny scroll, static art screens, or the character cast based on the current finalestage value, relying on W_CacheLumpName to pull cached resources efficiently. Together they represent DOOM's commitment to polished, stage-specific presentation using minimal code: a single function routes the entire finale pipeline without a heavyweight scripting layer. The bunny sequence itself was a deliberate moment of levity by id Software in an otherwise grim game, and the column-by-column scroll technique is a direct reuse of the same low-level graphics primitives driving the main renderer. This pattern of a lightweight director function delegating to specialized routines influenced how later engines structured cutscene and endgame systems."

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
//	Game completion, final screen animation.
//
//-----------------------------------------------------------------------------


static const char
rcsid[] = "$Id: f_finale.c,v 1.5 1997/02/03 21:26:34 b1 Exp $";

#include <ctype.h>

// Functions.
#include "i_system.h"
#include "m_swap.h"
#include "z_zone.h"
#include "v_video.h"
#include "w_wad.h"
#include "s_sound.h"

// Data.
#include "dstrings.h"
#include "sounds.h"

#include "doomstat.h"
#include "r_state.h"

// ?
//#include "doomstat.h"
//#include "r_local.h"
//#include "f_finale.h"

// Stage of animation:
//  0 = text, 1 = art screen, 2 = character cast
int		finalestage;

int		finalecount;

#define	TEXTSPEED	3
#define	TEXTWAIT	250

char*	e1text = E1TEXT;
char*	e2text = E2TEXT;
char*	e3text = E3TEXT;
char*	e4text = E4TEXT;

char*	c1text = C1TEXT;
char*	c2text = C2TEXT;
char*	c3text = C3TEXT;
char*	c4text = C4TEXT;
char*	c5text = C5TEXT;
char*	c6text = C6TEXT;

char*	p1text = P1TEXT;
char*	p2text = P2TEXT;
char*	p3text = P3TEXT;
char*	p4text = P4TEXT;
char*	p5text = P5TEXT;
char*	p6text = P6TEXT;

char*	t1text = T1TEXT;
char*	t2text = T2TEXT;
char*	t3text = T3TEXT;
char*	t4text = T4TEXT;
char*	t5text = T5TEXT;
char*	t6text = T6TEXT;

char*	finaletext;
char*	finaleflat;

void	F_StartCast (void);
void	F_CastTicker (void);
boolean F_CastResponder (event_t *ev);
void	F_CastDrawer (void);

//
// F_StartFinale
//
void F_StartFinale (void)
{
    gameaction = ga_nothing;
    gamestate = GS_FINALE;
    viewactive = false;
    automapactive = false;

    // Okay - IWAD dependend stuff.
    // This has been changed severly, and
    //  some stuff might have changed in the process.
    switch ( gamemode )
    {

      // DOOM 1 - E1, E3 or E4, but each nine missions
      case shareware:
      case registered:
      case retail:
      {
	S_ChangeMusic(mus_victor, true);
	
	switch (gameepisode)
	{
	  case 1:
	    finaleflat = "FLOOR4_8";
	    finaletext = e1text;
	    break;
	  case 2:
	    finaleflat = "SFLR6_1";
	    finaletext = e2text;
	    break;
	  case 3:
	    finaleflat = "MFLR8_4";
	    finaletext = e3text;
	    break;
	  case 4:
	    finaleflat = "MFLR8_3";
	    finaletext = e4text;
	    break;
	  default:
	    // Ouch.
	    break;
	}
	break;
      }
      
      // DOOM II and missions packs with E1, M34
      case commercial:
      {
	  S_ChangeMusic(mus_read_m, true);

	  switch (gamemap)
	  {
	    case 6:
	      finaleflat = "SLIME16";
	      finaletext = c1text;
	      break;
	    case 11:
	      finaleflat = "RROCK14";
	      finaletext = c2text;
	      break;
	    case 20:
	      finaleflat = "RROCK07";
	      finaletext = c3text;
	      break;
	    case 30:
	      finaleflat = "RROCK17";
	      finaletext = c4text;
	      break;
	    case 15:
	      finaleflat = "RROCK13";
	      finaletext = c5text;
	      break;
	    case 31:
	      finaleflat = "RROCK19";
	      finaletext = c6text;
	      break;
	    default:
	      // Ouch.
	      break;
	  }
	  break;
      }	

   
      // Indeterminate.
      default:
	S_ChangeMusic(mus_read_m, true);
	finaleflat = "F_SKY1"; // Not used anywhere else.
	finaletext = c1text;  // FIXME - other text, music?
	break;
    }
    
    finalestage = 0;
    finalecount = 0;
	
}



boolean F_Responder (event_t *event)
{
    if (finalestage == 2)
	return F_CastResponder (event);
	
    return false;
}


//
// F_Ticker
//
void F_Ticker (void)
{
    int		i;
    
    // check for skipping
    if ( (gamemode == commercial)
      && ( finalecount > 50) )
    {
      // go on to the next level
      for (i=0 ; i<MAXPLAYERS ; i++)
	if (players[i].cmd.buttons)
	  break;
				
      if (i < MAXPLAYERS)
      {	
	if (gamemap == 30)
	  F_StartCast ();
	else
	  gameaction = ga_worlddone;
      }
    }
    
    // advance animation
    finalecount++;
	
    if (finalestage == 2)
    {
	F_CastTicker ();
	return;
    }
	
    if ( gamemode == commercial)
	return;
		
    if (!finalestage && finalecount>strlen (finaletext)*TEXTSPEED + TEXTWAIT)
    {
	finalecount = 0;
	finalestage = 1;
	wipegamestate = -1;		// force a wipe
	if (gameepisode == 3)
	    S_StartMusic (mus_bunny);
    }
}



//
// F_TextWrite
//

#include "hu_stuff.h"
extern	patch_t *hu_font[HU_FONTSIZE];


void F_TextWrite (void)
{
    byte*	src;
    byte*	dest;
    
    int		x,y,w;
    int		count;
    char*	ch;
    int		c;
    int		cx;
    int		cy;
    
    // erase the entire screen to a tiled background
    src = W_CacheLumpName ( finaleflat , PU_CACHE);
    dest = screens[0];
	
    for (y=0 ; y<SCREENHEIGHT ; y++)
    {
	for (x=0 ; x<SCREENWIDTH/64 ; x++)
	{
	    memcpy (dest, src+((y&63)<<6), 64);
	    dest += 64;
	}
	if (SCREENWIDTH&63)
	{
	    memcpy (dest, src+((y&63)<<6), SCREENWIDTH&63);
	    dest += (SCREENWIDTH&63);
	}
    }

    V_MarkRect (0, 0, SCREENWIDTH, SCREENHEIGHT);
    
    // draw some of the text onto the screen
    cx = 10;
    cy = 10;
    ch = finaletext;
	
    count = (finalecount - 10)/TEXTSPEED;
    if (count < 0)
	count = 0;
    for ( ; count ; count-- )
    {
	c = *ch++;
	if (!c)
	    break;
	if (c == '\n')
	{
	    cx = 10;
	    cy += 11;
	    continue;
	}
		
	c = toupper(c) - HU_FONTSTART;
	if (c < 0 || c> HU_FONTSIZE)
	{
	    cx += 4;
	    continue;
	}
		
	w = SHORT (hu_font[c]->width);
	if (cx+w > SCREENWIDTH)
	    break;
	V_DrawPatch(cx, cy, 0, hu_font[c]);
	cx+=w;
    }
	
}

//
// Final DOOM 2 animation
// Casting by id Software.
//   in order of appearance
//
typedef struct
{
    char		*name;
    mobjtype_t	type;
} castinfo_t;

castinfo_t	castorder[] = {
    {CC_ZOMBIE, MT_POSSESSED},
    {CC_SHOTGUN, MT_SHOTGUY},
    {CC_HEAVY, MT_CHAINGUY},
    {CC_IMP, MT_TROOP},
    {CC_DEMON, MT_SERGEANT},
    {CC_LOST, MT_SKULL},
    {CC_CACO, MT_HEAD},
    {CC_HELL, MT_KNIGHT},
    {CC_BARON, MT_BRUISER},
    {CC_ARACH, MT_BABY},
    {CC_PAIN, MT_PAIN},
    {CC_REVEN, MT_UNDEAD},
    {CC_MANCU, MT_FATSO},
    {CC_ARCH, MT_VILE},
    {CC_SPIDER, MT_SPIDER},
    {CC_CYBER, MT_CYBORG},
    {CC_HERO, MT_PLAYER},

    {NULL,0}
};

int		castnum;
int		casttics;
state_t*	caststate;
boolean		castdeath;
int		castframes;
int		castonmelee;
boolean		castattacking;


//
// F_StartCast
//
extern	gamestate_t     wipegamestate;


void F_StartCast (void)
{
    wipegamestate = -1;		// force a screen wipe
    castnum = 0;
    caststate = &states[mobjinfo[castorder[castnum].type].seestate];
    casttics = caststate->tics;
    castdeath = false;
    finalestage = 2;	
    castframes = 0;
    castonmelee = 0;
    castattacking = false;
    S_ChangeMusic(mus_evil, true);
}


//
// F_CastTicker
//
void F_CastTicker (void)
{
    int		st;
    int		sfx;
	
    if (--casttics > 0)
	return;			// not time to change state yet
		
    if (caststate->tics == -1 || caststate->nextstate == S_NULL)
    {
	// switch from deathstate to next monster
	castnum++;
	castdeath = false;
	if (castorder[castnum].name == NULL)
	    castnum = 0;
	if (mobjinfo[castorder[castnum].type].seesound)
	    S_StartSound (NULL, mobjinfo[castorder[castnum].type].seesound);
	caststate = &states[mobjinfo[castorder[castnum].type].seestate];
	castframes = 0;
    }
    else
    {
	// just advance to next state in animation
	if (caststate == &states[S_PLAY_ATK1])
	    goto stopattack;	// Oh, gross hack!
	st = caststate->nextstate;
	caststate = &states[st];
	castframes++;
	
	// sound hacks....
	switch (st)
	{
	  case S_PLAY_ATK1:	sfx = sfx_dshtgn; break;
	  case S_POSS_ATK2:	sfx = sfx_pistol; break;
	  case S_SPOS_ATK2:	sfx = sfx_shotgn; break;
	  case S_VILE_ATK2:	sfx = sfx_vilatk; break;
	  case S_SKEL_FIST2:	sfx = sfx_skeswg; break;
	  case S_SKEL_FIST4:	sfx = sfx_skepch; break;
	  case S_SKEL_MISS2:	sfx = sfx_skeatk; break;
	  case S_FATT_ATK8:
	  case S_FATT_ATK5:
	  case S_FATT_ATK2:	sfx = sfx_firsht; break;
	  case S_CPOS_ATK2:
	  case S_CPOS_ATK3:
	  case S_CPOS_ATK4:	sfx = sfx_shotgn; break;
	  case S_TROO_ATK3:	sfx = sfx_claw; break;
	  case S_SARG_ATK2:	sfx = sfx_sgtatk; break;
	  case S_BOSS_ATK2:
	  case S_BOS2_ATK2:
	  case S_HEAD_ATK2:	sfx = sfx_firsht; break;
	  case S_SKULL_ATK2:	sfx = sfx_sklatk; break;
	  case S_SPID_ATK2:
	  case S_SPID_ATK3:	sfx = sfx_shotgn; break;
	  case S_BSPI_ATK2:	sfx = sfx_plasma; break;
	  case S_CYBER_ATK2:
	  case S_CYBER_ATK4:
	  case S_CYBER_ATK6:	sfx = sfx_rlaunc; break;
	  case S_PAIN_ATK3:	sfx = sfx_sklatk; break;
	  default: sfx = 0; break;
	}
		
	if (sfx)
	    S_StartSound (NULL, sfx);
    }
	
    if (castframes == 12)
    {
	// go into attack frame
	castattacking = true;
	if (castonmelee)
	    caststate=&states[mobjinfo[castorder[castnum].type].meleestate];
	else
	    caststate=&states[mobjinfo[castorder[castnum].type].missilestate];
	castonmelee ^= 1;
	if (caststate == &states[S_NULL])
	{
	    if (castonmelee)
		caststate=
		    &states[mobjinfo[castorder[castnum].type].meleestate];
	    else
		caststate=
		    &states[mobjinfo[castorder[castnum].type].missilestate];
	}
    }
	
    if (castattacking)
    {
	if (castframes == 24
	    ||	caststate == &states[mobjinfo[castorder[castnum].type].seestate] )
	{
	  stopattack:
	    castattacking = false;
	    castframes = 0;
	    caststate = &states[mobjinfo[castorder[castnum].type].seestate];
	}
    }
	
    casttics = caststate->tics;
    if (casttics == -1)
	casttics = 15;
}


//
// F_CastResponder
//

boolean F_CastResponder (event_t* ev)
{
    if (ev->type != ev_keydown)
	return false;
		
    if (castdeath)
	return true;			// already in dying frames
		
    // go into death frame
    castdeath = true;
    caststate = &states[mobjinfo[castorder[castnum].type].deathstate];
    casttics = caststate->tics;
    castframes = 0;
    castattacking = false;
    if (mobjinfo[castorder[castnum].type].deathsound)
	S_StartSound (NULL, mobjinfo[castorder[castnum].type].deathsound);
	
    return true;
}


void F_CastPrint (char* text)
{
    char*	ch;
    int		c;
    int		cx;
    int		w;
    int		width;
    
    // find width
    ch = text;
    width = 0;
	
    while (ch)
    {
	c = *ch++;
	if (!c)
	    break;
	c = toupper(c) - HU_FONTSTART;
	if (c < 0 || c> HU_FONTSIZE)
	{
	    width += 4;
	    continue;
	}
		
	w = SHORT (hu_font[c]->width);
	width += w;
    }
    
    // draw it
    cx = 160-width/2;
    ch = text;
    while (ch)
    {
	c = *ch++;
	if (!c)
	    break;
	c = toupper(c) - HU_FONTSTART;
	if (c < 0 || c> HU_FONTSIZE)
	{
	    cx += 4;
	    continue;
	}
		
	w = SHORT (hu_font[c]->width);
	V_DrawPatch(cx, 180, 0, hu_font[c]);
	cx+=w;
    }
	
}


//
// F_CastDrawer
//
void V_DrawPatchFlipped (int x, int y, int scrn, patch_t *patch);

void F_CastDrawer (void)
{
    spritedef_t*	sprdef;
    spriteframe_t*	sprframe;
    int			lump;
    boolean		flip;
    patch_t*		patch;
    
    // erase the entire screen to a background
    V_DrawPatch (0,0,0, W_CacheLumpName ("BOSSBACK", PU_CACHE));

    F_CastPrint (castorder[castnum].name);
    
    // draw the current frame in the middle of the screen
    sprdef = &sprites[caststate->sprite];
    sprframe = &sprdef->spriteframes[ caststate->frame & FF_FRAMEMASK];
    lump = sprframe->lump[0];
    flip = (boolean)sprframe->flip[0];
			
    patch = W_CacheLumpNum (lump+firstspritelump, PU_CACHE);
    if (flip)
	V_DrawPatchFlipped (160,170,0,patch);
    else
	V_DrawPatch (160,170,0,patch);
}


//
// F_DrawPatchCol
//
void
F_DrawPatchCol
( int		x,
  patch_t*	patch,
  int		col )
{
    column_t*	column;
    byte*	source;
    byte*	dest;
    byte*	desttop;
    int		count;
	
    column = (column_t *)((byte *)patch + LONG(patch->columnofs[col]));
    desttop = screens[0]+x;

    // step through the posts in a column
    while (column->topdelta != 0xff )
    {
	source = (byte *)column + 3;
	dest = desttop + column->topdelta*SCREENWIDTH;
	count = column->length;
		
	while (count--)
	{
	    *dest = *source++;
	    dest += SCREENWIDTH;
	}
	column = (column_t *)(  (byte *)column + column->length + 4 );
    }
}


//
// F_BunnyScroll
//
void F_BunnyScroll (void)
{
    int		scrolled;
    int		x;
    patch_t*	p1;
    patch_t*	p2;
    char	name[10];
    int		stage;
    static int	laststage;
		
    p1 = W_CacheLumpName ("PFUB2", PU_LEVEL);
    p2 = W_CacheLumpName ("PFUB1", PU_LEVEL);

    V_MarkRect (0, 0, SCREENWIDTH, SCREENHEIGHT);
	
    scrolled = 320 - (finalecount-230)/2;
    if (scrolled > 320)
	scrolled = 320;
    if (scrolled < 0)
	scrolled = 0;
		
    for ( x=0 ; x<SCREENWIDTH ; x++)
    {
	if (x+scrolled < 320)
	    F_DrawPatchCol (x, p1, x+scrolled);
	else
	    F_DrawPatchCol (x, p2, x+scrolled - 320);		
    }
	
    if (finalecount < 1130)
	return;
    if (finalecount < 1180)
    {
	V_DrawPatch ((SCREENWIDTH-13*8)/2,
		     (SCREENHEIGHT-8*8)/2,0, W_CacheLumpName ("END0",PU_CACHE));
	laststage = 0;
	return;
    }
	
    stage = (finalecount-1180) / 5;
    if (stage > 6)
	stage = 6;
    if (stage > laststage)
    {
	S_StartSound (NULL, sfx_pistol);
	laststage = stage;
    }
	
    sprintf (name,"END%i",stage);
    V_DrawPatch ((SCREENWIDTH-13*8)/2, (SCREENHEIGHT-8*8)/2,0, W_CacheLumpName (name,PU_CACHE));
}


//
// F_Drawer
//
void F_Drawer (void)
{
    if (finalestage == 2)
    {
	F_CastDrawer ();
	return;
    }

    if (!finalestage)
	F_TextWrite ();
    else
    {
	switch (gameepisode)
	{
	  case 1:
	    if ( gamemode == retail )
	      V_DrawPatch (0,0,0,
			 W_CacheLumpName("CREDIT",PU_CACHE));
	    else
	      V_DrawPatch (0,0,0,
			 W_CacheLumpName("HELP2",PU_CACHE));
	    break;
	  case 2:
	    V_DrawPatch(0,0,0,
			W_CacheLumpName("VICTORY2",PU_CACHE));
	    break;
	  case 3:
	    F_BunnyScroll ();
	    break;
	  case 4:
	    V_DrawPatch (0,0,0,
			 W_CacheLumpName("ENDPIC",PU_CACHE));
	    break;
	}
    }
			
}


```