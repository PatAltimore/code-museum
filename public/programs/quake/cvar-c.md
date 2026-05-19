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
description: "This file implements dynamic variable tracking in Quake, enabling runtime configuration and customization, a groundbreaking feature for games of its era."

summary:
  - point: "Dynamic variable tracking allows runtime configuration"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Efficient linked list traversal for variable management"
    link: "https://en.wikipedia.org/wiki/Linked_list"
    link_label: "Linked List"
  - point: "Integration of server and client variable handling"
    link: "https://en.wikipedia.org/wiki/Client%E2%80%93server_model"
    link_label: "Client-Server Model"

enhancements:
  - id: "foundation-dynamic-variable-tracking"
    line_start: 17
    line_end: 26
    title: "Foundation: Dynamic Variable Tracking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "At the heart of Quake's configuration system lies the `cvar_vars` linked list, a structure that tracks all dynamic variables in the game. This foundational mechanism enables runtime customization, allowing players and server administrators to tweak settings without recompiling the code. In 1996, this flexibility was revolutionary, as most games relied on static configuration files or hardcoded values. John Carmack and his team designed this system to support Quake's multiplayer and modding capabilities, anticipating the community-driven evolution of the game. The linked list approach was chosen for its simplicity and efficiency in iterating over variables, a crucial consideration given the hardware constraints of the era. This design became a staple in game development, influencing not only id Software's future titles but also the broader industry."
  - id: "cvar-findvar-linked-list-search"
    line_start: 33
    line_end: 35
    title: "Cvar_FindVar: Linked List Search"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linked_list"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_FindVar` function exemplifies the use of linked lists to manage dynamic variables. It searches for a variable by name, traversing the `cvar_vars` list node by node. In the mid-1990s, this approach was a pragmatic choice for systems with limited memory and processing power, as linked lists avoided the overhead of resizing arrays. The function's reliance on `Q_strcmp` for string comparison reflects the team's focus on performance, using their custom utility functions rather than standard library calls. This method highlights id Software's engineering philosophy: balance simplicity with efficiency, ensuring the game could run smoothly on a wide range of hardware."
  - id: "cvar-variablevalue-converting-string-to-float"
    line_start: 49
    line_end: 51
    title: "Cvar_VariableValue: Converting String to Float"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floating_point"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_VariableValue` function retrieves a variable's value and converts it from a string to a floating-point number using `Q_atof`. This conversion is essential for handling numeric configuration options, such as sensitivity or volume levels. In 1996, floating-point arithmetic was computationally expensive, but id Software prioritized it for precision in gameplay mechanics. The function's design reflects the team's meticulous attention to detail, ensuring that variables could be seamlessly integrated into the game's logic. This approach laid the groundwork for modern game engines, where dynamic configuration and precise numerical calculations are standard."
  - id: "cvar-completevariable-autocomplete-functionality"
    line_start: 81
    line_end: 83
    title: "Cvar_CompleteVariable: Autocomplete Functionality"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_CompleteVariable` function introduces autocomplete functionality for console commands, a feature inspired by Unix command-line interfaces. By checking both exact and partial matches in the `cvar_vars` list, it streamlines user interaction, allowing players to quickly access and modify variables. This innovation reflects id Software's commitment to usability, enhancing the game's appeal to both casual players and advanced users. The function's implementation demonstrates the team's ability to adapt concepts from other domains, integrating them into a real-time gaming environment. Autocomplete has since become a standard feature in game consoles and development tools, underscoring its enduring impact."
  - id: "cvar-set-runtime-variable-modification"
    line_start: 114
    line_end: 116
    title: "Cvar_Set: Runtime Variable Modification"
    wikipedia_url: "https://en.wikipedia.org/wiki/Runtime_(program_lifecycle_phase)"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_Set` function allows variables to be modified at runtime, a capability that was groundbreaking in 1996. By integrating server and client handling, the function ensures that changes propagate across the network, maintaining synchronization in multiplayer sessions. This design reflects the team's foresight in addressing the challenges of real-time communication and customization. The use of memory allocation (`Z_Malloc`) for variable strings highlights the team's focus on efficient resource management, a critical consideration given the hardware limitations of the era. This function embodies the dynamic nature of Quake, enabling players to experiment and adapt their gameplay experience in real time."
  - id: "cvar-registervariable-preventing-conflicts"
    line_start: 172
    line_end: 174
    title: "Cvar_RegisterVariable: Preventing Conflicts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Software_bug"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_RegisterVariable` function ensures that new variables do not conflict with existing ones or commands. By checking for duplicates and command overlaps, it safeguards the integrity of the configuration system. This meticulous approach reflects id Software's commitment to robustness, minimizing the risk of bugs in a complex, multiplayer environment. The function's design also highlights the team's awareness of modding and extensibility, anticipating the community's desire to add custom variables. This proactive mindset contributed to Quake's longevity, as its flexible architecture enabled countless mods and adaptations."
  - id: "cvar-command-console-integration"
    line_start: 209
    line_end: 211
    title: "Cvar_Command: Console Integration"
    wikipedia_url: "https://en.wikipedia.org/wiki/Console_application"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_Command` function bridges the gap between the game's internal configuration system and the player-facing console. It enables players to inspect and modify variables directly from the console, providing a powerful tool for customization and debugging. This integration reflects id Software's focus on empowering users, making advanced features accessible without requiring programming knowledge. The function's reliance on `Cmd_Argv` and `Cmd_Argc` showcases the team's modular design philosophy, leveraging shared utilities to streamline development. Console commands have since become a staple in game development, underscoring the enduring influence of this approach."
  - id: "cvar-writevariables-saving-configurations"
    line_start: 238
    line_end: 240
    title: "Cvar_WriteVariables: Saving Configurations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Configuration_file"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_WriteVariables` function writes all variables with the archive flag to a file, preserving configurations across sessions. This feature was a significant advancement in 1996, enabling players to save their preferences without manually editing configuration files. By iterating over the `cvar_vars` list, the function ensures that only relevant variables are saved, optimizing file size and readability. This design reflects id Software's attention to user experience, prioritizing convenience and accessibility. The ability to save configurations has since become a standard feature in games, highlighting the lasting impact of this innovation."

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
