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
description: "This file implements dynamic variable tracking for Quake, enabling runtime configuration and customization of game behavior."

summary:
  - point: "Introduced dynamic variables for runtime configuration"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimized for limited memory and x86 processors"
    link: "https://en.wikipedia.org/wiki/X86"
    link_label: "x86 architecture"
  - point: "Cvar system influenced later game engines and modding communities"
    link: "https://en.wikipedia.org/wiki/Quake_engine"
    link_label: "Quake engine"

enhancements:
  - id: "cvar-findvar-searching-linked-list"
    line_start: 31
    line_end: 45
    title: "Searching Linked Lists for Dynamic Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linked_list"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_FindVar` function searches through a linked list of variables to locate one by name. This approach reflects the memory constraints of the mid-1990s, where dynamic data structures like linked lists were preferred over more memory-intensive alternatives like hash tables. At the time, Quake was designed to run on hardware with as little as 8 MB of RAM, and every byte mattered. John Carmack and the team at id Software optimized for simplicity and speed, ensuring that variable lookups were efficient even on low-end systems. This linked-list traversal method, while straightforward, became a foundational technique for runtime configuration in game engines. Later engines, including Unreal Engine and Source, adopted similar dynamic variable systems, though they often replaced linked lists with more advanced data structures as hardware improved."
  - id: "cvar-variablevalue-converting-to-float"
    line_start: 47
    line_end: 60
    title: "Converting Strings to Floats for Gameplay Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floating_point"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_VariableValue` function retrieves a variable's value as a floating-point number, converting it from its stored string representation. This design choice highlights the flexibility of the cvar system, allowing variables to be stored and manipulated in a human-readable format while still supporting numerical operations. In the mid-90s, floating-point arithmetic was computationally expensive on many processors, but Quake's reliance on it for physics and gameplay calculations underscored its ambition to push hardware to its limits. Michael Abrash's expertise in optimizing assembly code ensured that these conversions were as efficient as possible. This technique influenced later game engines, which continued to use string-based configuration systems for modding and debugging purposes."
  - id: "cvar-completevariable-autocomplete-for-console"
    line_start: 79
    line_end: 105
    title: "Autocomplete for Console Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_completion"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_CompleteVariable` function implements autocomplete functionality for console commands, allowing players and developers to quickly find and use variables without needing to remember their exact names. This feature was a usability breakthrough for debugging and modding, making the console more accessible and efficient. Autocomplete was inspired by similar features in Unix shells, which were popular among programmers at the time. By integrating this into Quake, id Software empowered players to experiment with game settings and developers to iterate quickly during testing. This innovation became a staple in game development, influencing the design of developer consoles in engines like Unity and Unreal."
  - id: "cvar-set-runtime-variable-modification"
    line_start: 110
    line_end: 152
    title: "Runtime Modification of Game Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Runtime_system"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_Set` function enables runtime modification of game variables, allowing changes to take effect immediately without restarting the game. This capability was crucial for Quake's multiplayer environment, where players could adjust settings like sensitivity or network parameters on the fly. The function also integrates with server and client info strings, ensuring that changes propagate correctly in networked games. This design reflects id Software's focus on flexibility and responsiveness, which were key to Quake's success as a multiplayer game. The concept of runtime variable modification became standard practice in game engines, influencing the development of modding tools and live configuration systems in later titles."
  - id: "cvar-registervariable-preventing-conflicts"
    line_start: 168
    line_end: 203
    title: "Preventing Conflicts in Variable Registration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Namespace_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_RegisterVariable` function adds new variables to the cvar system while ensuring there are no conflicts with existing variables or commands. This safeguard reflects the meticulous attention to detail in Quake's design, where stability and predictability were paramount. By checking for duplicate names and command overlaps, id Software ensured that the system remained robust even as new features and mods were added. This approach influenced later engines, which adopted similar practices to manage namespaces and avoid conflicts in extensible systems. The function also highlights the collaborative nature of Quake's development, where programmers anticipated the needs of modders and third-party developers."
  - id: "cvar-command-console-inspection-and-modification"
    line_start: 205
    line_end: 230
    title: "Console Inspection and Modification of Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Console_application"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_Command` function handles variable inspection and modification directly from the console, bridging the gap between user input and game state. This feature was a cornerstone of Quake's developer-friendly design, allowing rapid testing and debugging during development. It also empowered players to customize their experience through the console, a feature that became synonymous with PC gaming. The function's design reflects the influence of Unix command-line tools, which inspired many of Quake's console features. This functionality laid the groundwork for developer consoles in modern engines, which continue to use similar mechanisms for debugging and runtime configuration."
  - id: "cvar-writevariables-persistent-configuration"
    line_start: 233
    line_end: 248
    title: "Saving Persistent Configuration to Disk"
    wikipedia_url: "https://en.wikipedia.org/wiki/Configuration_file"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_WriteVariables` function writes all variables with the archive flag set to a file, preserving their values across sessions. This feature was essential for Quake's customization capabilities, allowing players to save their preferences and developers to maintain consistent settings during testing. The use of plain text files for configuration was a pragmatic choice, ensuring compatibility and ease of editing. This approach influenced the design of configuration systems in later games, which continued to use text-based formats for their simplicity and flexibility. The ability to persist settings across sessions became a standard feature in game engines, contributing to the rise of modding and user-generated content."

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

```