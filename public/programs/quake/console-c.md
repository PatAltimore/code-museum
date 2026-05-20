---
title: "console.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/console.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/console.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "console-c"
order: 24
description: "This file implements the console system for Quake, enabling in-game text input, debugging, and notifications."

summary:
  - point: "Innovative use of a console system for debugging and player interaction"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimized for low-memory environments and x86 hardware constraints"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Introduced techniques for real-time text rendering in 3D games"
    link: "https://en.wikipedia.org/wiki/Real-time_computing"
    link_label: "Real-time computing"

enhancements:
  - id: "key-clear-typing"
    line_start: 55
    line_end: 59
    title: "Clearing Typing: A Simple Reset Mechanism"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This function clears the player's current typing input by resetting the relevant buffer and cursor position. At the time, Quake's console system was a groundbreaking feature that allowed players to interact with the game engine directly, executing commands and debugging in real-time. The simplicity of this function reflects the era's focus on efficiency and minimalism, as memory and processing power were limited on mid-1990s hardware like the Intel 80386. The ability to reset typing ensured smooth user experience during gameplay. This approach influenced later game engines, such as Unreal Engine and Source, which expanded on console functionality for debugging and scripting."
  - id: "toggle-console-function"
    line_start: 61
    line_end: 79
    title: "Switching Between Console and Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Con_ToggleConsole_f` function toggles the visibility of the console, switching between gameplay and console interaction. This feature was essential for debugging and executing commands during development and gameplay. In the mid-1990s, such functionality was rare, as most games lacked real-time debugging tools. John Carmack and his team at id Software prioritized developer efficiency and player empowerment, allowing users to modify game settings and troubleshoot issues without restarting. This design philosophy influenced later games like Half-Life and Counter-Strike, which incorporated similar console systems for advanced user control."
  - id: "console-resize"
    line_start: 149
    line_end: 171
    title: "Dynamic Console Resizing for Changing Displays"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Con_Resize` function dynamically adjusts the console's dimensions based on the screen resolution. This was crucial for adapting to different hardware configurations, as Quake was designed to run on a variety of systems, from high-end PCs to less powerful machines. The function recalculates line width and total lines, ensuring the console remains functional regardless of display size. This adaptability was forward-thinking, as it anticipated the diverse hardware landscape of PC gaming. The technique of dynamic resizing became standard in game engines, influencing titles like Doom 3 and modern engines like Unity and Unreal."
  - id: "console-print"
    line_start: 267
    line_end: 341
    title: "Real-Time Text Rendering in a 3D World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Real-time_computing"
    image_url: ""
    image_caption: ""
    content: "The `Con_Print` function handles text rendering for the console, including cursor positioning, line wrapping, and word wrapping. This was a technical challenge in the mid-1990s, as rendering text in real-time within a 3D environment required careful optimization. The function ensures that text is displayed correctly even when the console is not visible, popping up notifications when necessary. This approach reflects the team's deep understanding of hardware constraints and their ability to innovate within them. Techniques like these paved the way for advanced text rendering systems in later engines, influencing games like World of Warcraft and Skyrim."
  - id: "console-drawing"
    line_start: 533
    line_end: 633
    title: "Rendering the Console with a Solid Background"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Con_DrawConsole` function draws the console with a solid background, ensuring readability in a visually complex 3D environment. It includes features like backscroll indicators and a download progress bar, showcasing id Software's attention to detail and user experience. This function highlights the team's ability to balance functionality and aesthetics, making the console an integral part of the game rather than an afterthought. The design influenced later games and engines, where console systems became more visually integrated and user-friendly, such as in the Source engine used for Half-Life 2."
  - id: "notify-box"
    line_start: 636
    line_end: 668
    title: "Displaying Critical Messages During Startup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Con_NotifyBox` function displays critical messages during startup, such as warnings about sound or CD issues. This ensures that players are informed of potential problems before gameplay begins. In the mid-1990s, such features were uncommon, as most games relied on static error screens or cryptic messages. By integrating this functionality into the console system, id Software demonstrated their commitment to user experience and debugging efficiency. This approach influenced later games and engines, where startup diagnostics became more sophisticated and user-friendly, such as in Blizzard's Battle.net launcher."

---

```asm
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
// console.c

#include "quakedef.h"

int			con_ormask;
console_t	con_main;
console_t	con_chat;
console_t	*con;			// point to either con_main or con_chat

int 		con_linewidth;	// characters across screen
int			con_totallines;		// total lines in console scrollback

float		con_cursorspeed = 4;


cvar_t		con_notifytime = {"con_notifytime","3"};		//seconds

#define	NUM_CON_TIMES 4
float		con_times[NUM_CON_TIMES];	// realtime time the line was generated
								// for transparent notify lines

int			con_vislines;
int			con_notifylines;		// scan lines to clear for notify lines

qboolean	con_debuglog;

#define		MAXCMDLINE	256
extern	char	key_lines[32][MAXCMDLINE];
extern	int		edit_line;
extern	int		key_linepos;
		

qboolean	con_initialized;


void Key_ClearTyping (void)
{
	key_lines[edit_line][1] = 0;	// clear any typing
	key_linepos = 1;
}

/*
================
Con_ToggleConsole_f
================
*/
void Con_ToggleConsole_f (void)
{
	Key_ClearTyping ();

	if (key_dest == key_console)
	{
		if (cls.state == ca_active)
			key_dest = key_game;
	}
	else
		key_dest = key_console;
	
	Con_ClearNotify ();
}

/*
================
Con_ToggleChat_f
================
*/
void Con_ToggleChat_f (void)
{
	Key_ClearTyping ();

	if (key_dest == key_console)
	{
		if (cls.state == ca_active)
			key_dest = key_game;
	}
	else
		key_dest = key_console;
	
	Con_ClearNotify ();
}

/*
================
Con_Clear_f
================
*/
void Con_Clear_f (void)
{
	Q_memset (con_main.text, ' ', CON_TEXTSIZE);
	Q_memset (con_chat.text, ' ', CON_TEXTSIZE);
}

						
/*
================
Con_ClearNotify
================
*/
void Con_ClearNotify (void)
{
	int		i;
	
	for (i=0 ; i<NUM_CON_TIMES ; i++)
		con_times[i] = 0;
}

						
/*
================
Con_MessageMode_f
================
*/
void Con_MessageMode_f (void)
{
	chat_team = false;
	key_dest = key_message;
}

/*
================
Con_MessageMode2_f
================
*/
void Con_MessageMode2_f (void)
{
	chat_team = true;
	key_dest = key_message;
}

/*
================
Con_Resize

================
*/
void Con_Resize (console_t *con)
{
	int		i, j, width, oldwidth, oldtotallines, numlines, numchars;
	char	tbuf[CON_TEXTSIZE];

	width = (vid.width >> 3) - 2;

	if (width == con_linewidth)
		return;

	if (width < 1)			// video hasn't been initialized yet
	{
		width = 38;
		con_linewidth = width;
		con_totallines = CON_TEXTSIZE / con_linewidth;
		Q_memset (con->text, ' ', CON_TEXTSIZE);
	}
	else
	{
		oldwidth = con_linewidth;
		con_linewidth = width;
		oldtotallines = con_totallines;
		con_totallines = CON_TEXTSIZE / con_linewidth;
		numlines = oldtotallines;

		if (con_totallines < numlines)
			numlines = con_totallines;

		numchars = oldwidth;
	
		if (con_linewidth < numchars)
			numchars = con_linewidth;

		Q_memcpy (tbuf, con->text, CON_TEXTSIZE);
		Q_memset (con->text, ' ', CON_TEXTSIZE);

		for (i=0 ; i<numlines ; i++)
		{
			for (j=0 ; j<numchars ; j++)
			{
				con->text[(con_totallines - 1 - i) * con_linewidth + j] =
						tbuf[((con->current - i + oldtotallines) %
							  oldtotallines) * oldwidth + j];
			}
		}

		Con_ClearNotify ();
	}

	con->current = con_totallines - 1;
	con->display = con->current;
}

					
/*
================
Con_CheckResize

If the line width has changed, reformat the buffer.
================
*/
void Con_CheckResize (void)
{
	Con_Resize (&con_main);
	Con_Resize (&con_chat);
}


/*
================
Con_Init
================
*/
void Con_Init (void)
{
	con_debuglog = COM_CheckParm("-condebug");

	con = &con_main;
	con_linewidth = -1;
	Con_CheckResize ();
	
	Con_Printf ("Console initialized.\n");

//
// register our commands
//
	Cvar_RegisterVariable (&con_notifytime);

	Cmd_AddCommand ("toggleconsole", Con_ToggleConsole_f);
	Cmd_AddCommand ("togglechat", Con_ToggleChat_f);
	Cmd_AddCommand ("messagemode", Con_MessageMode_f);
	Cmd_AddCommand ("messagemode2", Con_MessageMode2_f);
	Cmd_AddCommand ("clear", Con_Clear_f);
	con_initialized = true;
}


/*
===============
Con_Linefeed
===============
*/
void Con_Linefeed (void)
{
	con->x = 0;
	if (con->display == con->current)
		con->display++;
	con->current++;
	Q_memset (&con->text[(con->current%con_totallines)*con_linewidth]
	, ' ', con_linewidth);
}

/*
================
Con_Print

Handles cursor positioning, line wrapping, etc
All console printing must go through this in order to be logged to disk
If no console is visible, the notify window will pop up.
================
*/
void Con_Print (char *txt)
{
	int		y;
	int		c, l;
	static int	cr;
	int		mask;

	if (txt[0] == 1 || txt[0] == 2)
	{
		mask = 128;		// go to colored text
		txt++;
	}
	else
		mask = 0;


	while ( (c = *txt) )
	{
	// count word length
		for (l=0 ; l< con_linewidth ; l++)
			if ( txt[l] <= ' ')
				break;

	// word wrap
		if (l != con_linewidth && (con->x + l > con_linewidth) )
			con->x = 0;

		txt++;

		if (cr)
		{
			con->current--;
			cr = false;
		}

		
		if (!con->x)
		{
			Con_Linefeed ();
		// mark time for transparent overlay
			if (con->current >= 0)
				con_times[con->current % NUM_CON_TIMES] = realtime;
		}

		switch (c)
		{
		case '\n':
			con->x = 0;
			break;

		case '\r':
			con->x = 0;
			cr = 1;
			break;

		default:	// display character and advance
			y = con->current % con_totallines;
			con->text[y*con_linewidth+con->x] = c | mask | con_ormask;
			con->x++;
			if (con->x >= con_linewidth)
				con->x = 0;
			break;
		}
		
	}
}


/*
================
Con_Printf

Handles cursor positioning, line wrapping, etc
================
*/
#define	MAXPRINTMSG	4096
// FIXME: make a buffer size safe vsprintf?
void Con_Printf (char *fmt, ...)
{
	va_list		argptr;
	char		msg[MAXPRINTMSG];
	static qboolean	inupdate;
	
	va_start (argptr,fmt);
	vsprintf (msg,fmt,argptr);
	va_end (argptr);
	
// also echo to debugging console
	Sys_Printf ("%s", msg);	// also echo to debugging console

// log all messages to file
	if (con_debuglog)
		Sys_DebugLog(va("%s/qconsole.log",com_gamedir), "%s", msg);
		
	if (!con_initialized)
		return;
		
// write it to the scrollable buffer
	Con_Print (msg);
	
// update the screen immediately if the console is displayed
	if (cls.state != ca_active)
	{
	// protect against infinite loop if something in SCR_UpdateScreen calls
	// Con_Printd
		if (!inupdate)
		{
			inupdate = true;
			SCR_UpdateScreen ();
			inupdate = false;
		}
	}
}

/*
================
Con_DPrintf

A Con_Printf that only shows up if the "developer" cvar is set
================
*/
void Con_DPrintf (char *fmt, ...)
{
	va_list		argptr;
	char		msg[MAXPRINTMSG];
		
	if (!developer.value)
		return;			// don't confuse non-developers with techie stuff...

	va_start (argptr,fmt);
	vsprintf (msg,fmt,argptr);
	va_end (argptr);
	
	Con_Printf ("%s", msg);
}

/*
==============================================================================

DRAWING

==============================================================================
*/


/*
================
Con_DrawInput

The input line scrolls horizontally if typing goes beyond the right edge
================
*/
void Con_DrawInput (void)
{
	int		y;
	int		i;
	char	*text;

	if (key_dest != key_console && cls.state == ca_active)
		return;		// don't draw anything (allways draw if not active)

	text = key_lines[edit_line];
	
// add the cursor frame
	text[key_linepos] = 10+((int)(realtime*con_cursorspeed)&1);
	
// fill out remainder with spaces
	for (i=key_linepos+1 ; i< con_linewidth ; i++)
		text[i] = ' ';
		
//	prestep if horizontally scrolling
	if (key_linepos >= con_linewidth)
		text += 1 + key_linepos - con_linewidth;
		
// draw it
	y = con_vislines-22;

	for (i=0 ; i<con_linewidth ; i++)
		Draw_Character ( (i+1)<<3, con_vislines - 22, text[i]);

// remove cursor
	key_lines[edit_line][key_linepos] = 0;
}


/*
================
Con_DrawNotify

Draws the last few lines of output transparently over the game top
================
*/
void Con_DrawNotify (void)
{
	int		x, v;
	char	*text;
	int		i;
	float	time;
	char	*s;
	int		skip;

	v = 0;
	for (i= con->current-NUM_CON_TIMES+1 ; i<=con->current ; i++)
	{
		if (i < 0)
			continue;
		time = con_times[i % NUM_CON_TIMES];
		if (time == 0)
			continue;
		time = realtime - time;
		if (time > con_notifytime.value)
			continue;
		text = con->text + (i % con_totallines)*con_linewidth;
		
		clearnotify = 0;
		scr_copytop = 1;

		for (x = 0 ; x < con_linewidth ; x++)
			Draw_Character ( (x+1)<<3, v, text[x]);

		v += 8;
	}


	if (key_dest == key_message)
	{
		clearnotify = 0;
		scr_copytop = 1;
	
		if (chat_team)
		{
			Draw_String (8, v, "say_team:");
			skip = 11;
		}
		else
		{
			Draw_String (8, v, "say:");
			skip = 5;
		}

		s = chat_buffer;
		if (chat_bufferlen > (vid.width>>3)-(skip+1))
			s += chat_bufferlen - ((vid.width>>3)-(skip+1));
		x = 0;
		while(s[x])
		{
			Draw_Character ( (x+skip)<<3, v, s[x]);
			x++;
		}
		Draw_Character ( (x+skip)<<3, v, 10+((int)(realtime*con_cursorspeed)&1));
		v += 8;
	}
	
	if (v > con_notifylines)
		con_notifylines = v;
}

/*
================
Con_DrawConsole

Draws the console with the solid background
================
*/
void Con_DrawConsole (int lines)
{
	int				i, j, x, y, n;
	int				rows;
	char			*text;
	int				row;
	char			dlbar[1024];
	
	if (lines <= 0)
		return;

// draw the background
	Draw_ConsoleBackground (lines);

// draw the text
	con_vislines = lines;
	
// changed to line things up better
	rows = (lines-22)>>3;		// rows of text to draw

	y = lines - 30;

// draw from the bottom up
	if (con->display != con->current)
	{
	// draw arrows to show the buffer is backscrolled
		for (x=0 ; x<con_linewidth ; x+=4)
			Draw_Character ( (x+1)<<3, y, '^');
	
		y -= 8;
		rows--;
	}
	
	row = con->display;
	for (i=0 ; i<rows ; i++, y-=8, row--)
	{
		if (row < 0)
			break;
		if (con->current - row >= con_totallines)
			break;		// past scrollback wrap point
			
		text = con->text + (row % con_totallines)*con_linewidth;

		for (x=0 ; x<con_linewidth ; x++)
			Draw_Character ( (x+1)<<3, y, text[x]);
	}

	// draw the download bar
	// figure out width
	if (cls.download) {
		if ((text = strrchr(cls.downloadname, '/')) != NULL)
			text++;
		else
			text = cls.downloadname;

		x = con_linewidth - ((con_linewidth * 7) / 40);
		y = x - strlen(text) - 8;
		i = con_linewidth/3;
		if (strlen(text) > i) {
			y = x - i - 11;
			strncpy(dlbar, text, i);
			dlbar[i] = 0;
			strcat(dlbar, "...");
		} else
			strcpy(dlbar, text);
		strcat(dlbar, ": ");
		i = strlen(dlbar);
		dlbar[i++] = '\x80';
		// where's the dot go?
		if (cls.downloadpercent == 0)
			n = 0;
		else
			n = y * cls.downloadpercent / 100;
			
		for (j = 0; j < y; j++)
			if (j == n)
				dlbar[i++] = '\x83';
			else
				dlbar[i++] = '\x81';
		dlbar[i++] = '\x82';
		dlbar[i] = 0;

		sprintf(dlbar + strlen(dlbar), " %02d%%", cls.downloadpercent);

		// draw it
		y = con_vislines-22 + 8;
		for (i = 0; i < strlen(dlbar); i++)
			Draw_Character ( (i+1)<<3, y, dlbar[i]);
	}


// draw the input prompt, user text, and cursor if desired
	Con_DrawInput ();
}


/*
==================
Con_NotifyBox
==================
*/
void Con_NotifyBox (char *text)
{
	double		t1, t2;

// during startup for sound / cd warnings
	Con_Printf("\n\n\35\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\37\n");

	Con_Printf (text);

	Con_Printf ("Press a key.\n");
	Con_Printf("\35\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\36\37\n");

	key_count = -2;		// wait for a key down and up
	key_dest = key_console;

	do
	{
		t1 = Sys_DoubleTime ();
		SCR_UpdateScreen ();
		Sys_SendKeyEvents ();
		t2 = Sys_DoubleTime ();
		realtime += t2-t1;		// make the cursor blink
	} while (key_count < 0);

	Con_Printf ("\n");
	key_dest = key_game;
	realtime = 0;				// put the cursor back to invisible
}


/*
==================
Con_SafePrintf

Okay to call even when the screen can't be updated
==================
*/
void Con_SafePrintf (char *fmt, ...)
{
	va_list		argptr;
	char		msg[1024];
	int			temp;
		
	va_start (argptr,fmt);
	vsprintf (msg,fmt,argptr);
	va_end (argptr);
	
	temp = scr_disabled_for_loading;
	scr_disabled_for_loading = true;
	Con_Printf ("%s", msg);
	scr_disabled_for_loading = temp;
}
```
