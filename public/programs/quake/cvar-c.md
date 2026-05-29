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
description: "Dynamic variable tracking in Quake's codebase enabled flexible configuration and gameplay customization, influencing future game engines."

summary:
  - point: "Introduced dynamic variables for runtime configuration"
    link: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    link_label: "Quake"
  - point: "Optimized for low-memory environments of 1996 hardware"
    link: "https://en.wikipedia.org/wiki/Intel_80486"
    link_label: "Intel 80486"
  - point: "Pioneered techniques later adopted by other game engines"
    link: "https://en.wikipedia.org/wiki/Source_engine"
    link_label: "Source Engine"

enhancements:
  - id: "cvar-find-variable"
    line_start: 31
    line_end: 45
    title: "How Quake Found Its Dynamic Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "This function, `Cvar_FindVar`, searches for a dynamic variable by name within a linked list of variables. Dynamic variables, or 'cvars', were a cornerstone of Quake's configuration system, allowing players and developers to tweak settings like graphics, physics, and gameplay parameters without recompiling the code. At the time, linked lists were a common choice for such tasks due to their simplicity and adaptability in low-memory environments. In 1996, hardware constraints like the Intel 486 processor's limited memory meant developers had to prioritize efficiency and simplicity. John Carmack and his team designed this system to allow real-time adjustments, a feature that became standard in game engines like Unreal Engine and Source Engine. The concept of dynamic variables influenced not only game development but also broader software practices, as runtime configurability became a hallmark of modern systems."
  - id: "cvar-variable-value"
    line_start: 47
    line_end: 60
    title: "Turning Strings into Numbers for Gameplay"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_VariableValue` function retrieves a variable's value as a floating-point number. This conversion, using the `Q_atof` function, was essential for numerical settings like gravity or movement speed. In the mid-1990s, floating-point arithmetic was computationally expensive, but it was necessary for the precision required in Quake's groundbreaking 3D physics engine. The reliance on runtime string-to-number conversion highlights the trade-offs developers faced: flexibility versus performance. This approach influenced later engines, where similar systems allowed developers to balance gameplay mechanics dynamically. The technique also demonstrated the importance of abstraction in game development, paving the way for scripting languages like Lua and Python in modern engines."
  - id: "cvar-variable-string"
    line_start: 63
    line_end: 76
    title: "Fallbacks and Defaults: A Null String Solution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_VariableString` function retrieves a variable's string value, returning a default empty string if the variable is not found. This design ensured stability in cases where a variable might be referenced before being defined, a common issue in dynamic systems. The use of a null string as a fallback reflects the team's focus on robustness in a multiplayer environment, where unpredictable user input could lead to crashes. This approach influenced error-handling practices in later engines, emphasizing the importance of graceful degradation. It also highlights the meticulous attention to detail that characterized id Software's development process, ensuring their games were both innovative and reliable."
  - id: "cvar-complete-variable"
    line_start: 79
    line_end: 105
    title: "Autocomplete in the Console: A User-Friendly Touch"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_CompleteVariable` function implements autocomplete for variable names in the console, checking both exact and partial matches. This feature enhanced usability, allowing players and developers to quickly find and modify settings without memorizing exact names. In the mid-1990s, such user-friendly features were rare in games, reflecting id Software's commitment to empowering users. The autocomplete system also demonstrated the team's understanding of player needs, as Quake's multiplayer environment demanded quick adjustments during gameplay. This innovation influenced later game engines and tools, where console commands and autocomplete became standard, improving accessibility for both casual players and modders."
  - id: "cvar-set-variable"
    line_start: 110
    line_end: 152
    title: "Setting Variables Across Multiplayer Boundaries"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_Set` function updates the value of a dynamic variable, with additional logic for multiplayer scenarios. When a variable marked as 'info' is changed, the function propagates the update to connected clients or servers, ensuring consistency across the network. This design was crucial for Quake's multiplayer experience, where settings like player names or server configurations needed to synchronize seamlessly. The function also frees and reallocates memory for the variable's string, reflecting the team's careful memory management practices. In an era of limited hardware resources, such optimizations were vital. This approach influenced later multiplayer games, where dynamic configuration became a key feature, and laid the groundwork for modern networked systems like Steam and Xbox Live."
  - id: "cvar-register-variable"
    line_start: 168
    line_end: 203
    title: "Registering Variables: A Modular Approach"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_RegisterVariable` function adds a new variable to the linked list, ensuring no conflicts with existing variables or commands. This modular approach allowed developers to extend Quake's functionality without altering core systems, a key advantage in a rapidly evolving project. The function also checks for overlap with console commands, preventing ambiguities that could confuse users. By copying and managing the variable's value string, the team ensured consistency and memory safety, critical in an era where crashes were common. This registration system influenced the design of extensible engines like Unreal Engine, where modularity and safety became defining features."
  - id: "cvar-command-console"
    line_start: 205
    line_end: 230
    title: "Console Commands: Bridging Players and Code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_Command` function handles variable inspection and modification from the console, bridging the gap between players and the underlying code. By allowing users to query and set variables directly, id Software empowered players to customize their experience and troubleshoot issues. This feature was particularly valuable in Quake's multiplayer environment, where quick adjustments could mean the difference between victory and defeat. The console system influenced later games, where developer consoles became essential tools for debugging and modding. It also demonstrated the team's commitment to transparency and user empowerment, principles that shaped the open-source movement in gaming."
  - id: "cvar-write-variables"
    line_start: 233
    line_end: 248
    title: "Saving Settings: Archiving for the Future"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quake_(video_game)"
    image_url: ""
    image_caption: ""
    content: "The `Cvar_WriteVariables` function writes all variables with the 'archive' flag to a file, preserving settings across sessions. This feature ensured that players' preferences were saved, enhancing the user experience and encouraging long-term engagement. In the mid-1990s, persistent settings were a novel feature in games, reflecting id Software's forward-thinking approach. The function also highlights the team's focus on modularity, as archived variables could be easily added or removed without affecting other systems. This approach influenced the design of configuration systems in later engines, where saving and loading settings became standard practice."

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
