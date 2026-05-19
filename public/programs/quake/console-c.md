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
description: "This file implements the console system in Quake, enabling text input, debugging, and notifications in the groundbreaking 3D game engine."

summary:
  - point: "Implements a scrolling console with text wrapping and notification features"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimized for limited hardware capabilities of the mid-1990s"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"
  - point: "Introduces developer-friendly debugging tools like Con_DPrintf"
    link: "https://en.wikipedia.org/wiki/Debugging"
    link_label: "Debugging"
  - point: "Supports multiplayer chat modes, reflecting Quake's focus on networked gameplay"
    link: "https://en.wikipedia.org/wiki/Multiplayer_video_game"
    link_label: "Multiplayer video games"
  - point: "Source code released under GPL in 1999, influencing open-source game development"
    link: "https://en.wikipedia.org/wiki/GNU_General_Public_License"
    link_label: "GNU GPL"

enhancements:
  - id: "key-clear-typing"
    line_start: 55
    line_end: 59
    title: "Clearing user input: simplicity in design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This function, `Key_ClearTyping`, resets the user's input line by clearing the text buffer and resetting the cursor position. It ensures that any residual user input is erased, providing a clean slate for new commands or text. In the mid-1990s, user input handling was often rudimentary, but Quake's implementation reflects a thoughtful approach to usability, ensuring smooth transitions between console states. This function is called frequently, such as when toggling the console or chat modes, demonstrating its centrality to the game's user interface. The simplicity of this design influenced later games by emphasizing clean and predictable user interactions."
  - id: "toggle-console-functionality"
    line_start: 61
    line_end: 79
    title: "Switching between game and console views"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `Con_ToggleConsole_f` function allows players to toggle the console on or off, switching between the game view and the text-based interface. This feature was essential for debugging, entering commands, and interacting with the game engine during development and gameplay. In the context of 1996, when Quake was released, this functionality showcased id Software's commitment to empowering players and developers alike. The toggle mechanism reflects a broader trend in game development toward integrating developer tools directly into the game environment, a practice that became standard in later engines like Unreal Engine and Source."
  - id: "console-resize-adaptation"
    line_start: 151
    line_end: 183
    title: "Dynamic resizing of the console buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Framebuffer"
    image_url: ""
    image_caption: ""
    content: "The `Con_Resize` function dynamically adjusts the console's dimensions based on the screen resolution. It recalculates the number of lines and characters that can fit within the console buffer, ensuring that the text display adapts to different video modes. This was particularly important in the mid-1990s, as Quake supported various resolutions and hardware configurations. The function also preserves existing text during resizing, a detail that highlights the developers' attention to user experience. Techniques like this influenced later game engines, which adopted similar adaptive designs for UI components to accommodate diverse hardware setups."
  - id: "developer-debugging-output"
    line_start: 396
    line_end: 410
    title: "Selective debugging for developers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The `Con_DPrintf` function provides a specialized debugging output that only appears when the 'developer' mode is enabled. This feature allows developers to include detailed technical messages without overwhelming regular players. In the mid-1990s, debugging tools were often external to the game environment, but Quake integrated them directly into the engine, reflecting id Software's innovative approach to development. This function influenced later engines by demonstrating the value of in-engine debugging tools, which became standard in environments like Unity and Unreal Engine."
  - id: "console-draw-notify"
    line_start: 467
    line_end: 531
    title: "Transparent notifications over gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Heads-up_display"
    image_url: ""
    image_caption: ""
    content: "The `Con_DrawNotify` function overlays recent console messages transparently over the game screen, ensuring players can see important notifications without disrupting gameplay. This feature was a novel approach to integrating text-based information into a graphical environment, balancing usability and immersion. In 1996, when Quake was released, such features were rare in games, but they became a staple in modern heads-up displays (HUDs). The technique influenced the design of notification systems in later games, including multiplayer titles like Counter-Strike and World of Warcraft, where real-time communication is critical."
  - id: "console-draw-console"
    line_start: 539
    line_end: 633
    title: "Rendering the console with solid background"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphical_user_interface"
    image_url: ""
    image_caption: ""
    content: "The `Con_DrawConsole` function renders the console with a solid background, ensuring text readability even during intense gameplay. It draws the console text from the bottom up, handles scrolling, and displays additional elements like download progress bars. This approach reflects id Software's focus on creating a functional and visually coherent interface. In the mid-1990s, graphical user interfaces in games were evolving rapidly, and Quake's console design influenced later engines by demonstrating how to seamlessly integrate text-based tools into a graphical environment."
  - id: "console-notify-box"
    line_start: 636
    line_end: 668
    title: "Interactive notification box for warnings"
    wikipedia_url: "https://en.wikipedia.org/wiki/Modal_window"
    image_url: ""
    image_caption: ""
    content: "The `Con_NotifyBox` function displays a modal notification box during startup or critical events, requiring user acknowledgment before proceeding. This feature ensures that players see important warnings, such as sound or CD issues, without missing them. In 1996, modal interfaces were common in software but less so in games, making this implementation noteworthy. It reflects id Software's attention to detail and user experience, influencing later games that adopted similar mechanisms for displaying critical information, such as error dialogs or system warnings."

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
