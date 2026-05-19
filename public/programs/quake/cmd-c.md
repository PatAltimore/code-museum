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
description: "This file implements Quake's command processing system, enabling script execution, aliases, and dynamic command registration, which were pivotal in shaping modding and multiplayer gaming."

summary:
  - point: "Dynamic command buffer management for script execution"
    link: "https://en.wikipedia.org/wiki/Command_buffer"
    link_label: "Command Buffer"
  - point: "Alias system enabling user-defined commands"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Integration of client-server command forwarding"
    link: "https://en.wikipedia.org/wiki/Client%E2%80%93server_model"
    link_label: "Client-Server Model"
  - point: "Command auto-completion for user convenience"
    link: "https://en.wikipedia.org/wiki/Command-line_completion"
    link_label: "Command-Line Completion"
  - point: "Modular design allowing extensibility via dynamic command registration"
    link: "https://en.wikipedia.org/wiki/Modding"
    link_label: "Modding"

enhancements:
  - id: "cmd-wait-function"
    line_start: 41
    line_end: 55
    title: "Delaying Commands for Scripted Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cmd_Wait_f` function introduces a mechanism to delay the execution of commands in the buffer until the next frame. This allows for precise scripting, such as chaining actions with pauses in between. For example, the command `bind g \"impulse 5 ; +attack ; wait ; -attack ; impulse 2\"` showcases how this feature enables complex sequences of actions. In 1996, scripting capabilities like this were groundbreaking, providing players and modders with tools to customize gameplay behavior. The idea of delaying commands influenced scripting systems in later games, including Half-Life and Unreal Tournament, where similar functionality became standard practice in modding and custom game configurations."
  - id: "cbuf-init-buffer"
    line_start: 68
    line_end: 77
    title: "Initializing the Command Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command_buffer"
    image_url: ""
    image_caption: ""
    content: "The `Cbuf_Init` function sets up the command buffer, allocating space for up to 8192 bytes of command text. This buffer is central to Quake's scripting system, storing commands that can be executed sequentially. At the time, memory management was a critical concern, as games had to operate within the constraints of limited RAM on consumer PCs. By preallocating a fixed-size buffer, the developers ensured predictable performance and avoided runtime memory fragmentation. This approach to command buffering laid the groundwork for similar systems in future engines, such as the Source Engine and id Tech 3, which continued to use command buffers for scripting and debugging."
  - id: "cbuf-add-text"
    line_start: 83
    line_end: 96
    title: "Adding Commands to the Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cbuf_AddText` function appends new commands to the end of the command buffer. It checks for buffer overflow and writes the command text using the `SZ_Write` function. This design ensures that commands can be dynamically added during gameplay or script execution, enabling features like configuration changes and scripted events. Overflow handling was particularly important in an era when hardware limitations could easily lead to crashes. The concept of dynamically adding commands influenced later engines, such as Unity and Unreal Engine, which adopted similar mechanisms for handling runtime commands and debugging."
  - id: "cmd-alias-system"
    line_start: 321
    line_end: 388
    title: "Creating Custom Command Aliases"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cmd_Alias_f` function allows players to define custom aliases—commands that execute a predefined string of actions. This feature was a major innovation in 1996, empowering players to personalize their gameplay experience and automate complex sequences. The alias system also became a cornerstone of Quake's modding community, enabling the creation of custom scripts and gameplay tweaks. The modular design, with aliases stored in a linked list, reflects the developers' focus on extensibility. This approach influenced scripting systems in later games, such as Counter-Strike and Team Fortress, where aliases and custom commands became integral to gameplay customization."
  - id: "cmd-add-command"
    line_start: 507
    line_end: 541
    title: "Dynamic Command Registration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Modding"
    image_url: ""
    image_caption: ""
    content: "The `Cmd_AddCommand` function registers new commands dynamically, linking them to their respective functions. This design allows developers and modders to extend the game's functionality without modifying the core engine. By checking for conflicts with existing commands and variables, the function ensures stability and avoids unintended behavior. In the mid-1990s, this level of modularity was rare, marking Quake as a pioneer in extensible game design. The concept of dynamic command registration influenced subsequent engines, such as id Tech 3 and Source, which adopted similar systems to support extensive modding and scripting capabilities."
  - id: "cmd-complete-command"
    line_start: 563
    line_end: 595
    title: "Auto-Completion for Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_completion"
    image_url: ""
    image_caption: ""
    content: "The `Cmd_CompleteCommand` function implements auto-completion for commands, searching for matches among registered commands and aliases. This feature enhances user experience by reducing typing errors and speeding up command entry. In 1996, command-line auto-completion was a novel addition to gaming, inspired by similar features in Unix shells. By integrating this functionality into Quake's console, id Software made scripting and debugging more accessible to players and developers. Auto-completion became a standard feature in game engines and development tools, influencing systems like the Unreal Engine console and modern IDEs."
  - id: "cmd-init-function"
    line_start: 729
    line_end: 747
    title: "Initializing the Command System"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cmd_Init` function initializes Quake's command processing system, registering built-in commands like `stuffcmds`, `exec`, `echo`, `alias`, and `wait`. This setup provides the foundation for scripting and customization, enabling players and modders to interact with the game engine dynamically. By modularizing command registration, id Software ensured that new commands could be added easily, supporting the game's extensibility. The initialization process reflects the team's focus on creating a robust and flexible system, which influenced the design of later engines like id Tech 3 and Source, where command systems became even more sophisticated."

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
