---
title: "cmd.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/cmd.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/cmd.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "cmd-c"
order: 14
description: "This file implements the command processing module for Quake's scripting system, enabling dynamic execution of commands and scripts within the game engine."

summary:
  - point: "Introduced a flexible scripting system for in-game commands and aliases"
    link: "https://en.wikipedia.org/wiki/Quake"
    link_label: "Quake"
  - point: "Optimized for hardware constraints of the mid-1990s, such as limited memory and x86 processors"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"
  - point: "Enabled dynamic multiplayer interactions and server-side command forwarding"
    link: "https://en.wikipedia.org/wiki/QuakeWorld"
    link_label: "QuakeWorld"

enhancements:
  - id: "cmd-wait-frame-delay"
    line_start: 41
    line_end: 55
    title: "The Trick That Delayed Commands by a Frame"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake"
    image_url: ""
    image_caption: ""
    content: "Cmd_Wait_f introduces a mechanism to delay the execution of commands until the next frame. This allowed for complex command sequences like 'bind g \"impulse 5 ; +attack ; wait ; -attack ; impulse 2\"', enabling players to create macros for nuanced gameplay actions. At the time, scripting systems in games were rudimentary, and this feature showcased id Software's focus on empowering players with customization. The idea of frame-delayed commands influenced scripting in later games, such as Half-Life and Unreal Tournament, where similar functionality became standard for user-defined macros."
  - id: "command-buffer-initialization"
    line_start: 68
    line_end: 77
    title: "How Quake Managed Its Command Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command_buffer"
    image_url: ""
    image_caption: ""
    content: "Cbuf_Init initializes the command buffer, allocating a fixed-size memory block to store commands. This design reflects the hardware constraints of the era, where memory was limited, and dynamic allocation was avoided for performance reasons. The use of a preallocated buffer ensured predictable behavior and avoided fragmentation. This approach was common in game engines of the time and influenced later engines like Source and Unreal Engine, which also used fixed-size buffers for critical systems."
  - id: "command-buffer-overflow-handling"
    line_start: 79
    line_end: 98
    title: "Preventing Buffer Overflow in Quake Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_overflow"
    image_url: ""
    image_caption: ""
    content: "Cbuf_AddText appends text to the command buffer, but includes a critical overflow check to ensure the buffer size isn't exceeded. If the buffer is full, it prints an error message and discards the input. This defensive programming technique was essential in an era when buffer overflows were a common source of bugs and security vulnerabilities. By handling overflow explicitly, id Software ensured the stability of the game engine, setting a precedent for robust input handling in later game development."
  - id: "command-buffer-reordering"
    line_start: 101
    line_end: 135
    title: "Reordering Commands in Quake's Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command_buffer"
    image_url: ""
    image_caption: ""
    content: "Cbuf_InsertText allows commands to be inserted immediately after the current command, enabling dynamic reordering of the command buffer. This feature was particularly useful for executing scripts that modified gameplay behavior on the fly. The implementation involves copying the existing buffer, inserting the new command, and appending the old data back. While this approach was computationally expensive, it provided the flexibility needed for advanced scripting. Later engines optimized this process by reducing memory copying, but the concept of command reordering remains foundational in scripting systems."
  - id: "command-execution-loop"
    line_start: 137
    line_end: 192
    title: "The Loop That Executes Quake Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command_pattern"
    image_url: ""
    image_caption: ""
    content: "Cbuf_Execute processes commands in the buffer, breaking them into individual lines and executing them sequentially. It handles quoted strings and supports multi-command lines separated by semicolons. The loop ensures that commands are executed in the correct order, even if new commands are inserted during execution. This design was influenced by command processing in operating systems and scripting languages, and it laid the groundwork for more sophisticated scripting systems in later games, such as Lua integration in World of Warcraft."
  - id: "command-line-parameter-parsing"
    line_start: 194
    line_end: 268
    title: "Parsing Command Line Parameters for Scripts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "Cmd_StuffCmds_f parses command-line parameters provided when launching Quake and converts them into script commands. This feature allowed players to customize their gameplay experience by specifying scripts to run at startup. The implementation builds a combined string of parameters, identifies commands prefixed with '+', and inserts them into the command buffer. This approach was innovative for its time, enabling dynamic configuration without modifying game files. It influenced the design of command-line options in later games and tools, such as Steam's launch options."
  - id: "script-file-execution"
    line_start: 271
    line_end: 300
    title: "Executing Script Files in Quake"
    wikipedia_url: "https://en.wikipedia.org/wiki/Scripting_language"
    image_url: ""
    image_caption: ""
    content: "Cmd_Exec_f loads and executes script files specified by the player. It reads the file into memory, inserts its contents into the command buffer, and frees the memory after execution. This feature allowed players to create and share custom scripts, enhancing the game's replayability and fostering a community of modders. The ability to execute external scripts became a standard feature in game engines, influencing the development of scripting systems in games like Skyrim and Minecraft."
  - id: "alias-command-creation"
    line_start: 336
    line_end: 420
    title: "Creating Custom Commands with Aliases"
    wikipedia_url: "https://en.wikipedia.org/wiki/Alias_(command)"
    image_url: ""
    image_caption: ""
    content: "Cmd_Alias_f allows players to define custom commands that execute a sequence of other commands. This feature was inspired by alias functionality in Unix shells, providing a familiar scripting tool for advanced users. The implementation involves storing aliases in a linked list and resolving them during command execution. Aliases enabled players to simplify complex actions, such as weapon switching or movement macros, and became a staple of game scripting systems. Similar functionality appeared in later games like Counter-Strike and Team Fortress 2."
  - id: "command-tokenization"
    line_start: 454
    line_end: 504
    title: "Breaking Down Commands into Tokens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lexical_analysis"
    image_url: ""
    image_caption: ""
    content: "Cmd_TokenizeString parses a string into individual tokens, separating arguments for command execution. This process involves skipping whitespace, handling newlines, and storing tokens in a fixed-size array. Tokenization is a fundamental step in interpreting commands, and its implementation in Quake reflects the constraints of the era, such as limited memory and processing power. The technique influenced the design of scripting systems in later engines, where tokenization became more sophisticated to support complex syntax."
  - id: "command-autocompletion"
    line_start: 563
    line_end: 596
    title: "Autocompleting Commands in Quake"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_completion"
    image_url: ""
    image_caption: ""
    content: "Cmd_CompleteCommand provides autocompletion for commands and aliases, helping players find valid options quickly. The implementation checks for exact and partial matches against registered commands and aliases. Autocompletion was a user-friendly feature that reduced frustration and encouraged exploration of the game's scripting capabilities. It became a standard feature in game consoles and development tools, influencing the design of IDEs and command-line interfaces."

---

```cpp
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
// cmd.c -- Quake script command processing module

#include "quakedef.h"

void Cmd_ForwardToServer (void);

#define	MAX_ALIAS_NAME	32

typedef struct cmdalias_s
{
	struct cmdalias_s	*next;
	char	name[MAX_ALIAS_NAME];
	char	*value;
} cmdalias_t;

cmdalias_t	*cmd_alias;

qboolean	cmd_wait;

cvar_t cl_warncmd = {"cl_warncmd", "0"};

//=============================================================================

/*
============
Cmd_Wait_f

Causes execution of the remainder of the command buffer to be delayed until
next frame.  This allows commands like:
bind g "impulse 5 ; +attack ; wait ; -attack ; impulse 2"
============
*/
void Cmd_Wait_f (void)
{
	cmd_wait = true;
}

/*
=============================================================================

						COMMAND BUFFER

=============================================================================
*/

sizebuf_t	cmd_text;
byte		cmd_text_buf[8192];

/*
============
Cbuf_Init
============
*/
void Cbuf_Init (void)
{
	cmd_text.data = cmd_text_buf;
	cmd_text.maxsize = sizeof(cmd_text_buf);
}

/*
============
Cbuf_AddText

Adds command text at the end of the buffer
============
*/
void Cbuf_AddText (char *text)
{
	int		l;
	
	l = Q_strlen (text);

	if (cmd_text.cursize + l >= cmd_text.maxsize)
	{
		Con_Printf ("Cbuf_AddText: overflow\n");
		return;
	}
	SZ_Write (&cmd_text, text, Q_strlen (text));
}


/*
============
Cbuf_InsertText

Adds command text immediately after the current command
Adds a \n to the text
FIXME: actually change the command buffer to do less copying
============
*/
void Cbuf_InsertText (char *text)
{
	char	*temp;
	int		templen;

// copy off any commands still remaining in the exec buffer
	templen = cmd_text.cursize;
	if (templen)
	{
		temp = Z_Malloc (templen);
		Q_memcpy (temp, cmd_text.data, templen);
		SZ_Clear (&cmd_text);
	}
	else
		temp = NULL;	// shut up compiler
		
// add the entire text of the file
	Cbuf_AddText (text);
	SZ_Write (&cmd_text, "\n", 1);
// add the copied off data
	if (templen)
	{
		SZ_Write (&cmd_text, temp, templen);
		Z_Free (temp);
	}
}

/*
============
Cbuf_Execute
============
*/
void Cbuf_Execute (void)
{
	int		i;
	char	*text;
	char	line[1024];
	int		quotes;
	
	while (cmd_text.cursize)
	{
// find a \n or ; line break
		text = (char *)cmd_text.data;

		quotes = 0;
		for (i=0 ; i< cmd_text.cursize ; i++)
		{
			if (text[i] == '"')
				quotes++;
			if ( !(quotes&1) &&  text[i] == ';')
				break;	// don't break if inside a quoted string
			if (text[i] == '\n')
				break;
		}
			
				
		memcpy (line, text, i);
		line[i] = 0;
		
// delete the text from the command buffer and move remaining commands down
// this is necessary because commands (exec, alias) can insert data at the
// beginning of the text buffer

		if (i == cmd_text.cursize)
			cmd_text.cursize = 0;
		else
		{
			i++;
			cmd_text.cursize -= i;
			Q_memcpy (text, text+i, cmd_text.cursize);
		}

// execute the command line
		Cmd_ExecuteString (line);
		
		if (cmd_wait)
		{	// skip out while text still remains in buffer, leaving it
			// for next frame
			cmd_wait = false;
			break;
		}
	}
}

/*
==============================================================================

						SCRIPT COMMANDS

==============================================================================
*/

/*
===============
Cmd_StuffCmds_f

Adds command line parameters as script statements
Commands lead with a +, and continue until a - or another +
quake +prog jctest.qp +cmd amlev1
quake -nosound +cmd amlev1
===============
*/
void Cmd_StuffCmds_f (void)
{
	int		i, j;
	int		s;
	char	*text, *build, c;
		
// build the combined string to parse from
	s = 0;
	for (i=1 ; i<com_argc ; i++)
	{
		if (!com_argv[i])
			continue;		// NEXTSTEP nulls out -NXHost
		s += Q_strlen (com_argv[i]) + 1;
	}
	if (!s)
		return;
		
	text = Z_Malloc (s+1);
	text[0] = 0;
	for (i=1 ; i<com_argc ; i++)
	{
		if (!com_argv[i])
			continue;		// NEXTSTEP nulls out -NXHost
		Q_strcat (text,com_argv[i]);
		if (i != com_argc-1)
			Q_strcat (text, " ");
	}
	
// pull out the commands
	build = Z_Malloc (s+1);
	build[0] = 0;
	
	for (i=0 ; i<s-1 ; i++)
	{
		if (text[i] == '+')
		{
			i++;

			for (j=i ; (text[j] != '+') && (text[j] != '-') && (text[j] != 0) ; j++)
				;

			c = text[j];
			text[j] = 0;
			
			Q_strcat (build, text+i);
			Q_strcat (build, "\n");
			text[j] = c;
			i = j-1;
		}
	}
	
	if (build[0])
		Cbuf_InsertText (build);
	
	Z_Free (text);
	Z_Free (build);
}


/*
===============
Cmd_Exec_f
===============
*/
void Cmd_Exec_f (void)
{
	char	*f;
	int		mark;

	if (Cmd_Argc () != 2)
	{
		Con_Printf ("exec <filename> : execute a script file\n");
		return;
	}

	// FIXME: is this safe freeing the hunk here???
	mark = Hunk_LowMark ();
	f = (char *)COM_LoadHunkFile (Cmd_Argv(1));
	if (!f)
	{
		Con_Printf ("couldn't exec %s\n",Cmd_Argv(1));
		return;
	}
	if (!Cvar_Command () && (cl_warncmd.value || developer.value))
		Con_Printf ("execing %s\n",Cmd_Argv(1));
	
	Cbuf_InsertText (f);
	Hunk_FreeToLowMark (mark);
}


/*
===============
Cmd_Echo_f

Just prints the rest of the line to the console
===============
*/
void Cmd_Echo_f (void)
{
	int		i;
	
	for (i=1 ; i<Cmd_Argc() ; i++)
		Con_Printf ("%s ",Cmd_Argv(i));
	Con_Printf ("\n");
}

/*
===============
Cmd_Alias_f

Creates a new command that executes a command string (possibly ; seperated)
===============
*/

char *CopyString (char *in)
{
	char	*out;
	
	out = Z_Malloc (strlen(in)+1);
	strcpy (out, in);
	return out;
}

void Cmd_Alias_f (void)
{
	cmdalias_t	*a;
	char		cmd[1024];
	int			i, c;
	char		*s;

	if (Cmd_Argc() == 1)
	{
		Con_Printf ("Current alias commands:\n");
		for (a = cmd_alias ; a ; a=a->next)
			Con_Printf ("%s : %s\n", a->name, a->value);
		return;
	}

	s = Cmd_Argv(1);
	if (strlen(s) >= MAX_ALIAS_NAME)
	{
		Con_Printf ("Alias name is too long\n");
		return;
	}

	// if the alias allready exists, reuse it
	for (a = cmd_alias ; a ; a=a->next)
	{
		if (!strcmp(s, a->name))
		{
			Z_Free (a->value);
			break;
		}
	}

	if (!a)
	{
		a = Z_Malloc (sizeof(cmdalias_t));
		a->next = cmd_alias;
		cmd_alias = a;
	}
	strcpy (a->name, s);	

// copy the rest of the command line
	cmd[0] = 0;		// start out with a null string
	c = Cmd_Argc();
	for (i=2 ; i< c ; i++)
	{
		strcat (cmd, Cmd_Argv(i));
		if (i != c)
			strcat (cmd, " ");
	}
	strcat (cmd, "\n");
	
	a->value = CopyString (cmd);
}

/*
=============================================================================

					COMMAND EXECUTION

=============================================================================
*/

typedef struct cmd_function_s
{
	struct cmd_function_s	*next;
	char					*name;
	xcommand_t				function;
} cmd_function_t;


#define	MAX_ARGS		80

static	int			cmd_argc;
static	char		*cmd_argv[MAX_ARGS];
static	char		*cmd_null_string = "";
static	char		*cmd_args = NULL;



static	cmd_function_t	*cmd_functions;		// possible commands to execute

/*
============
Cmd_Argc
============
*/
int		Cmd_Argc (void)
{
	return cmd_argc;
}

/*
============
Cmd_Argv
============
*/
char	*Cmd_Argv (int arg)
{
	if ( arg >= cmd_argc )
		return cmd_null_string;
	return cmd_argv[arg];	
}

/*
============
Cmd_Args

Returns a single string containing argv(1) to argv(argc()-1)
============
*/
char		*Cmd_Args (void)
{
	if (!cmd_args)
		return "";
	return cmd_args;
}


/*
============
Cmd_TokenizeString

Parses the given string into command line tokens.
============
*/
void Cmd_TokenizeString (char *text)
{
	int		i;
	
// clear the args from the last string
	for (i=0 ; i<cmd_argc ; i++)
		Z_Free (cmd_argv[i]);
		
	cmd_argc = 0;
	cmd_args = NULL;
	
	while (1)
	{
// skip whitespace up to a /n
		while (*text && *text <= ' ' && *text != '\n')
		{
			text++;
		}
		
		if (*text == '\n')
		{	// a newline seperates commands in the buffer
			text++;
			break;
		}

		if (!*text)
			return;
	
		if (cmd_argc == 1)
			 cmd_args = text;
			
		text = COM_Parse (text);
		if (!text)
			return;

		if (cmd_argc < MAX_ARGS)
		{
			cmd_argv[cmd_argc] = Z_Malloc (Q_strlen(com_token)+1);
			Q_strcpy (cmd_argv[cmd_argc], com_token);
			cmd_argc++;
		}
	}
	
}


/*
============
Cmd_AddCommand
============
*/
void	Cmd_AddCommand (char *cmd_name, xcommand_t function)
{
	cmd_function_t	*cmd;
	
	if (host_initialized)	// because hunk allocation would get stomped
		Sys_Error ("Cmd_AddCommand after host_initialized");
		
// fail if the command is a variable name
	if (Cvar_VariableString(cmd_name)[0])
	{
		Con_Printf ("Cmd_AddCommand: %s already defined as a var\n", cmd_name);
		return;
	}
	
// fail if the command already exists
	for (cmd=cmd_functions ; cmd ; cmd=cmd->next)
	{
		if (!Q_strcmp (cmd_name, cmd->name))
		{
			Con_Printf ("Cmd_AddCommand: %s already defined\n", cmd_name);
			return;
		}
	}

	cmd = Hunk_Alloc (sizeof(cmd_function_t));
	cmd->name = cmd_name;
	cmd->function = function;
	cmd->next = cmd_functions;
	cmd_functions = cmd;
}

/*
============
Cmd_Exists
============
*/
qboolean	Cmd_Exists (char *cmd_name)
{
	cmd_function_t	*cmd;

	for (cmd=cmd_functions ; cmd ; cmd=cmd->next)
	{
		if (!Q_strcmp (cmd_name,cmd->name))
			return true;
	}

	return false;
}



/*
============
Cmd_CompleteCommand
============
*/
char *Cmd_CompleteCommand (char *partial)
{
	cmd_function_t	*cmd;
	int				len;
	cmdalias_t		*a;
	
	len = Q_strlen(partial);
	
	if (!len)
		return NULL;
		
// check for exact match
	for (cmd=cmd_functions ; cmd ; cmd=cmd->next)
		if (!strcmp (partial,cmd->name))
			return cmd->name;
	for (a=cmd_alias ; a ; a=a->next)
		if (!strcmp (partial, a->name))
			return a->name;

// check for partial match
	for (cmd=cmd_functions ; cmd ; cmd=cmd->next)
		if (!strncmp (partial,cmd->name, len))
			return cmd->name;
	for (a=cmd_alias ; a ; a=a->next)
		if (!strncmp (partial, a->name, len))
			return a->name;

	return NULL;
}

#ifndef SERVERONLY		// FIXME
/*
===================
Cmd_ForwardToServer

adds the current command line as a clc_stringcmd to the client message.
things like godmode, noclip, etc, are commands directed to the server,
so when they are typed in at the console, they will need to be forwarded.
===================
*/
void Cmd_ForwardToServer (void)
{
	if (cls.state == ca_disconnected)
	{
		Con_Printf ("Can't \"%s\", not connected\n", Cmd_Argv(0));
		return;
	}
	
	if (cls.demoplayback)
		return;		// not really connected

	MSG_WriteByte (&cls.netchan.message, clc_stringcmd);
	SZ_Print (&cls.netchan.message, Cmd_Argv(0));
	if (Cmd_Argc() > 1)
	{
		SZ_Print (&cls.netchan.message, " ");
		SZ_Print (&cls.netchan.message, Cmd_Args());
	}
}

// don't forward the first argument
void Cmd_ForwardToServer_f (void)
{
	if (cls.state == ca_disconnected)
	{
		Con_Printf ("Can't \"%s\", not connected\n", Cmd_Argv(0));
		return;
	}

	if (Q_strcasecmp(Cmd_Argv(1), "snap") == 0) {
		Cbuf_InsertText ("snap\n");
		return;
	}
	
	if (cls.demoplayback)
		return;		// not really connected

	if (Cmd_Argc() > 1)
	{
		MSG_WriteByte (&cls.netchan.message, clc_stringcmd);
		SZ_Print (&cls.netchan.message, Cmd_Args());
	}
}
#else
void Cmd_ForwardToServer (void)
{
}
#endif

/*
============
Cmd_ExecuteString

A complete command line has been parsed, so try to execute it
FIXME: lookupnoadd the token to speed search?
============
*/
void	Cmd_ExecuteString (char *text)
{	
	cmd_function_t	*cmd;
	cmdalias_t		*a;

	Cmd_TokenizeString (text);
			
// execute the command line
	if (!Cmd_Argc())
		return;		// no tokens

// check functions
	for (cmd=cmd_functions ; cmd ; cmd=cmd->next)
	{
		if (!Q_strcasecmp (cmd_argv[0],cmd->name))
		{
			if (!cmd->function)
				Cmd_ForwardToServer ();
			else
				cmd->function ();
			return;
		}
	}

// check alias
	for (a=cmd_alias ; a ; a=a->next)
	{
		if (!Q_strcasecmp (cmd_argv[0], a->name))
		{
			Cbuf_InsertText (a->value);
			return;
		}
	}
	
// check cvars
	if (!Cvar_Command () && (cl_warncmd.value || developer.value))
		Con_Printf ("Unknown command \"%s\"\n", Cmd_Argv(0));
	
}



/*
================
Cmd_CheckParm

Returns the position (1 to argc-1) in the command's argument list
where the given parameter apears, or 0 if not present
================
*/
int Cmd_CheckParm (char *parm)
{
	int i;
	
	if (!parm)
		Sys_Error ("Cmd_CheckParm: NULL");

	for (i = 1; i < Cmd_Argc (); i++)
		if (! Q_strcasecmp (parm, Cmd_Argv (i)))
			return i;
			
	return 0;
}

/*
============
Cmd_Init
============
*/
void Cmd_Init (void)
{
//
// register our commands
//
	Cmd_AddCommand ("stuffcmds",Cmd_StuffCmds_f);
	Cmd_AddCommand ("exec",Cmd_Exec_f);
	Cmd_AddCommand ("echo",Cmd_Echo_f);
	Cmd_AddCommand ("alias",Cmd_Alias_f);
	Cmd_AddCommand ("wait", Cmd_Wait_f);
#ifndef SERVERONLY
	Cmd_AddCommand ("cmd", Cmd_ForwardToServer_f);
#endif
}

```