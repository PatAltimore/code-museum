---
title: "cvar.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/cvar.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/cvar.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "cvar-c"
order: 25
description: "Dynamic variable tracking in Quake's client code, enabling runtime configuration and flexibility."

summary:
  - point: "Dynamic variable system for runtime configuration"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Efficient linked list traversal for variable lookup"
    link: "https://en.wikipedia.org/wiki/Linked_list"
    link_label: "Linked List"
  - point: "Integration with console commands for debugging and customization"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line Interface"
  - point: "Memory management techniques for variable storage"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Influence on modern game engines and configuration systems"
    link: "https://en.wikipedia.org/wiki/Game_engine"
    link_label: "Game Engine"

enhancements:
  - id: "cvar-find-variable"
    line_start: 31
    line_end: 45
    title: "Linked list traversal for variable lookup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linked_list"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_FindVar` function performs a linear search through a linked list of dynamic variables (`cvar_t`) to locate a variable by name. This approach reflects the constraints of the time, where simplicity and direct memory access were prioritized over more complex data structures like hash tables. In 1996, the hardware environment included processors like the Intel Pentium, with limited memory and no hardware acceleration for advanced data structures. John Carmack and Michael Abrash, known for their optimization expertise, likely chose this method for its straightforward implementation and predictable performance. This technique influenced later game engines, where dynamic configuration systems became standard practice for runtime adjustments. Modern engines like Unity and Unreal use more sophisticated systems but retain the core idea of dynamic variable tracking for flexibility."
  - id: "cvar-variable-value"
    line_start: 47
    line_end: 60
    title: "Converting variable strings to numeric values"
    wikipedia_url: "https://en.wikipedia.org/wiki/Type_conversion"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_VariableValue` function retrieves the numeric value of a variable by first finding it with `Cvar_FindVar` and then converting its string representation to a float using `Q_atof`. This demonstrates an early implementation of type conversion in game engines, allowing developers to store variables as strings for flexibility while enabling numeric computations. During the mid-1990s, game development often involved balancing human-readable formats with machine efficiency. The use of string storage for variables reflects id Software's focus on debugging and customization, as strings are easier to inspect and modify during development. This approach laid the groundwork for modern scripting systems, where variables are often dynamically typed and stored in formats that facilitate both human interaction and computational use."
  - id: "cvar-complete-variable"
    line_start: 79
    line_end: 105
    title: "Partial matching for console autocompletion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Autocompletion"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_CompleteVariable` function implements autocompletion for console commands by checking both exact and partial matches against the list of dynamic variables. This feature enhances usability, allowing players and developers to quickly find and set variables without needing to remember their full names. Autocompletion was a novel addition to game engines in the 1990s, reflecting id Software's commitment to user experience and developer efficiency. At the time, consoles were a primary interface for debugging and configuration, and features like autocompletion helped streamline workflows. This technique influenced later engines and tools, where autocompletion became a standard feature in command-line interfaces and integrated development environments (IDEs)."
  - id: "cvar-set-variable"
    line_start: 110
    line_end: 152
    title: "Dynamic variable modification with network integration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Networking"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_Set` function updates the value of a dynamic variable and integrates with network systems to propagate changes. For server-side variables, it uses `Info_SetValueForKey` and sends updates to clients, ensuring consistency across multiplayer sessions. For client-side variables, it interacts with the networking layer to send updates to the server when connected. This dual-purpose design reflects the challenges of developing a multiplayer game in the mid-1990s, where synchronization and efficiency were critical. Quake's networking innovations, including this variable propagation system, influenced later multiplayer games and engines, such as Valve's Source engine, which expanded on these ideas to support large-scale multiplayer environments."
  - id: "cvar-register-variable"
    line_start: 170
    line_end: 203
    title: "Registering freestanding variables with safety checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Software_testing"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_RegisterVariable` function adds new variables to the dynamic variable list while performing safety checks to prevent duplicate names or conflicts with existing commands. This demonstrates id Software's emphasis on robustness and error handling, ensuring that the system remains stable even as new variables are introduced. The function also uses memory management techniques, such as copying and freeing strings, to maintain consistency. These practices reflect the team's deep understanding of low-level programming and the constraints of the era, where memory leaks and undefined behavior could easily crash a game. The careful design of this system influenced later engines, where variable registration and error handling became standard features in scripting and configuration systems."
  - id: "cvar-command"
    line_start: 205
    line_end: 230
    title: "Console command integration for variable inspection"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_Command` function allows variables to be inspected and modified directly from the console, bridging the gap between runtime configuration and user interaction. If a variable exists, the function either prints its current value or updates it based on the provided arguments. This integration highlights id Software's focus on developer and player empowerment, enabling quick adjustments and debugging during gameplay. Console commands were a hallmark of id's engines, providing a flexible interface for interacting with the game. This approach influenced later engines and tools, where command-line interfaces became essential for debugging, scripting, and automation in game development."
  - id: "cvar-write-variables"
    line_start: 233
    line_end: 247
    title: "Persisting variable states across sessions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Serialization"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_WriteVariables` function writes all variables with the archive flag set to a file, enabling their values to persist across game sessions. This feature reflects id Software's understanding of user experience, allowing players to retain their preferences and configurations without manual re-entry. Serialization techniques like this were becoming increasingly important in the 1990s as games grew more complex and user expectations evolved. By providing a mechanism for saving and loading variable states, id Software set a precedent for modern game engines, where persistence systems are integral to user profiles, settings, and save data management."

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
// cvar.c -- dynamic variable tracking

#ifdef SERVERONLY 
#include "qwsvdef.h"
#else
#include "quakedef.h"
#endif

cvar_t	*cvar_vars;
char	*cvar_null_string = "";

/*
============
Cvar_FindVar
============
*/
cvar_t *Cvar_FindVar (char *var_name)
{
	cvar_t	*var;
	
	for (var=cvar_vars ; var ; var=var->next)
		if (!Q_strcmp (var_name, var->name))
			return var;

	return NULL;
}

/*
============
Cvar_VariableValue
============
*/
float	Cvar_VariableValue (char *var_name)
{
	cvar_t	*var;
	
	var = Cvar_FindVar (var_name);
	if (!var)
		return 0;
	return Q_atof (var->string);
}


/*
============
Cvar_VariableString
============
*/
char *Cvar_VariableString (char *var_name)
{
	cvar_t *var;
	
	var = Cvar_FindVar (var_name);
	if (!var)
		return cvar_null_string;
	return var->string;
}


/*
============
Cvar_CompleteVariable
============
*/
char *Cvar_CompleteVariable (char *partial)
{
	cvar_t		*cvar;
	int			len;
	
	len = Q_strlen(partial);
	
	if (!len)
		return NULL;
		
	// check exact match
	for (cvar=cvar_vars ; cvar ; cvar=cvar->next)
		if (!strcmp (partial,cvar->name))
			return cvar->name;

	// check partial match
	for (cvar=cvar_vars ; cvar ; cvar=cvar->next)
		if (!Q_strncmp (partial,cvar->name, len))
			return cvar->name;

	return NULL;
}


#ifdef SERVERONLY
void SV_SendServerInfoChange(char *key, char *value);
#endif

/*
============
Cvar_Set
============
*/
void Cvar_Set (char *var_name, char *value)
{
	cvar_t	*var;
	
	var = Cvar_FindVar (var_name);
	if (!var)
	{	// there is an error in C code if this happens
		Con_Printf ("Cvar_Set: variable %s not found\n", var_name);
		return;
	}

#ifdef SERVERONLY
	if (var->info)
	{
		Info_SetValueForKey (svs.info, var_name, value, MAX_SERVERINFO_STRING);
		SV_SendServerInfoChange(var_name, value);
//		SV_BroadcastCommand ("fullserverinfo \"%s\"\n", svs.info);
	}
#else
	if (var->info)
	{
		Info_SetValueForKey (cls.userinfo, var_name, value, MAX_INFO_STRING);
		if (cls.state >= ca_connected)
		{
			MSG_WriteByte (&cls.netchan.message, clc_stringcmd);
			SZ_Print (&cls.netchan.message, va("setinfo \"%s\" \"%s\"\n", var_name, value));
		}
	}
#endif
	
	Z_Free (var->string);	// free the old value string
	
	var->string = Z_Malloc (Q_strlen(value)+1);
	Q_strcpy (var->string, value);
	var->value = Q_atof (var->string);
}

/*
============
Cvar_SetValue
============
*/
void Cvar_SetValue (char *var_name, float value)
{
	char	val[32];
	
	sprintf (val, "%f",value);
	Cvar_Set (var_name, val);
}


/*
============
Cvar_RegisterVariable

Adds a freestanding variable to the variable list.
============
*/
void Cvar_RegisterVariable (cvar_t *variable)
{
	char	value[512];

// first check to see if it has allready been defined
	if (Cvar_FindVar (variable->name))
	{
		Con_Printf ("Can't register variable %s, allready defined\n", variable->name);
		return;
	}
	
// check for overlap with a command
	if (Cmd_Exists (variable->name))
	{
		Con_Printf ("Cvar_RegisterVariable: %s is a command\n", variable->name);
		return;
	}
		
// link the variable in
	variable->next = cvar_vars;
	cvar_vars = variable;

// copy the value off, because future sets will Z_Free it
	strcpy (value, variable->string);
	variable->string = Z_Malloc (1);	
	
// set it through the function to be consistant
	Cvar_Set (variable->name, value);
}

/*
============
Cvar_Command

Handles variable inspection and changing from the console
============
*/
qboolean	Cvar_Command (void)
{
	cvar_t			*v;

// check variables
	v = Cvar_FindVar (Cmd_Argv(0));
	if (!v)
		return false;
		
// perform a variable print or set
	if (Cmd_Argc() == 1)
	{
		Con_Printf ("\"%s\" is \"%s\"\n", v->name, v->string);
		return true;
	}

	Cvar_Set (v->name, Cmd_Argv(1));
	return true;
}


/*
============
Cvar_WriteVariables

Writes lines containing "set variable value" for all variables
with the archive flag set to true.
============
*/
void Cvar_WriteVariables (FILE *f)
{
	cvar_t	*var;
	
	for (var = cvar_vars ; var ; var = var->next)
		if (var->archive)
			fprintf (f, "%s \"%s\"\n", var->name, var->string);
}
