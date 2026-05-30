---
title: "sys_win.c"
program: "Quake"
program_slug: "quake"
file_path: "QW/client/sys_win.c"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/Quake/blob/master/QW/client/sys_win.c"
year: 1996
author: "John Carmack, Michael Abrash, John Cash"
slug: "sys-win-c"
order: 5
description: "This file showcases how Quake interfaced with the Windows operating system, demonstrating techniques for system-level interaction and optimization in a groundbreaking 3D game."

summary:
  - point: "Introduced precise timing mechanisms using Windows APIs"
    link: "https://en.wikipedia.org/wiki/QueryPerformanceCounter"
    link_label: "QueryPerformanceCounter"
  - point: "Managed memory constraints with dynamic allocation strategies"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Handled Windows-specific quirks for seamless gameplay"
    link: "https://en.wikipedia.org/wiki/Win32"
    link_label: "Win32 API"
  - point: "Implemented custom error handling for debugging and user feedback"
    link: "https://en.wikipedia.org/wiki/MessageBox"
    link_label: "MessageBox"
  - point: "Optimized for multitasking and focus changes in Windows environments"
    link: "https://en.wikipedia.org/wiki/Multitasking"
    link_label: "Multitasking"

enhancements:
  - id: "debug-log-file-output"
    line_start: 57
    line_end: 69
    title: "Logging Errors to a File for Debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Log_file"
    image_url: ""
    image_caption: ""
    content: "The `Sys_DebugLog` function writes formatted debug messages to a specified file. This routine uses standard C library functions like `open`, `write`, and `close` to append logs to a file, ensuring that critical error information is preserved even if the program crashes. At the time, debugging tools were less sophisticated, and logging to a file was a common practice for diagnosing issues in complex systems like Quake. John Carmack and his team relied heavily on such mechanisms to track down performance bottlenecks and bugs during development. This approach influenced later game engines, which adopted similar logging systems for runtime diagnostics and crash analysis."
  - id: "file-length-calculation"
    line_start: 71
    line_end: 95
    title: "Determining File Length Without Metadata"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `filelength` function calculates the size of a file by seeking to its end and measuring the position. This method circumvents reliance on file metadata, which might not always be accurate or accessible. In the mid-1990s, file systems varied widely across platforms, and direct manipulation of file pointers was a reliable way to ensure compatibility. This technique reflects the pragmatic mindset of id Software's developers, who prioritized portability and robustness in their code. It influenced how game engines handled file I/O, laying groundwork for cross-platform compatibility in later projects."
  - id: "virtual-memory-protection"
    line_start: 127
    line_end: 147
    title: "Making Code Writeable in Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Virtual_memory"
    image_url: ""
    image_caption: ""
    content: "The `Sys_MakeCodeWriteable` function uses the Windows API's `VirtualProtect` to modify memory protection settings, allowing code segments to be writeable. This capability was crucial for dynamic code generation and patching, techniques often employed in performance-critical applications like Quake. At the time, hardware constraints necessitated creative solutions to optimize execution speed. This approach, while risky due to potential security vulnerabilities, demonstrated the lengths developers went to in achieving high performance. It influenced later practices in runtime optimization and just-in-time compilation."
  - id: "windows-timing-precision"
    line_start: 150
    line_end: 226
    title: "Ensuring High-Precision Timing on Windows"
    wikipedia_url: "https://en.wikipedia.org/wiki/QueryPerformanceCounter"
    image_url: ""
    image_caption: ""
    content: "The `Sys_Init` function initializes critical system parameters, including high-precision timing using Windows APIs like `timeBeginPeriod`. Precise timing was essential for Quake's gameplay, which relied on smooth frame updates and accurate physics calculations. At the time, Windows NT's default timer resolution was insufficient for such demands, prompting id Software to override it. This decision reflects the team's deep understanding of hardware and operating system limitations. The use of high-precision timers became standard practice in game development, influencing engines like Unreal Engine and Unity."
  - id: "error-handling-message-box"
    line_start: 229
    line_end: 248
    title: "Displaying Errors with Windows MessageBox"
    wikipedia_url: "https://en.wikipedia.org/wiki/MessageBox"
    image_url: ""
    image_caption: ""
    content: "The `Sys_Error` function displays critical error messages using the Windows `MessageBox` API. This approach ensures that users are informed of fatal issues in a clear and immediate manner, even if the program crashes. At the time, graphical error dialogs were a user-friendly alternative to cryptic console messages, aligning with the growing accessibility of PC gaming. This technique influenced how games and applications handled user-facing errors, contributing to better user experiences across software industries."
  - id: "windows-main-loop"
    line_start: 552
    line_end: 697
    title: "The Heartbeat of Quake: WinMain"
    wikipedia_url: "https://en.wikipedia.org/wiki/WinMain"
    image_url: ""
    image_caption: ""
    content: "The `WinMain` function serves as the entry point for Quake's Windows version, initializing system parameters, managing memory, and running the main game loop. It dynamically allocates memory based on system availability, ensuring the game could run on a wide range of hardware configurations. The loop incorporates multitasking-friendly features like sleep intervals when the application is minimized or paused, reflecting id Software's attention to user experience and system performance. This structure became a template for game initialization and main loops in later engines, influencing titles like Half-Life and Call of Duty."

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
// sys_win.h

#include "quakedef.h"
#include "winquake.h"
#include "resource.h"
#include "errno.h"
#include "fcntl.h"
#include <limits.h>

#define MINIMUM_WIN_MEMORY	0x0c00000
#define MAXIMUM_WIN_MEMORY	0x1000000

#define PAUSE_SLEEP		50				// sleep time on pause or minimization
#define NOT_FOCUS_SLEEP	20				// sleep time when not focus

int		starttime;
qboolean ActiveApp, Minimized;
qboolean	WinNT;

HWND	hwnd_dialog;		// startup dialog box

static double		pfreq;
static double		curtime = 0.0;
static double		lastcurtime = 0.0;
static int			lowshift;
static HANDLE		hinput, houtput;

HANDLE		qwclsemaphore;

static HANDLE	tevent;

void Sys_InitFloatTime (void);

void MaskExceptions (void);
void Sys_PopFPCW (void);
void Sys_PushFPCW_SetHigh (void);

void Sys_DebugLog(char *file, char *fmt, ...)
{
    va_list argptr; 
    static char data[1024];
    int fd;
    
    va_start(argptr, fmt);
    vsprintf(data, fmt, argptr);
    va_end(argptr);
    fd = open(file, O_WRONLY | O_CREAT | O_APPEND, 0666);
    write(fd, data, strlen(data));
    close(fd);
};

/*
===============================================================================

FILE IO

===============================================================================
*/

/*
================
filelength
================
*/
int filelength (FILE *f)
{
	int		pos;
	int		end;

	pos = ftell (f);
	fseek (f, 0, SEEK_END);
	end = ftell (f);
	fseek (f, pos, SEEK_SET);

	return end;
}


int	Sys_FileTime (char *path)
{
	FILE	*f;
	int		t, retval;

	t = VID_ForceUnlockedAndReturnState ();
	
	f = fopen(path, "rb");

	if (f)
	{
		fclose(f);
		retval = 1;
	}
	else
	{
		retval = -1;
	}
	
	VID_ForceLockState (t);
	return retval;
}

void Sys_mkdir (char *path)
{
	_mkdir (path);
}


/*
===============================================================================

SYSTEM IO

===============================================================================
*/

/*
================
Sys_MakeCodeWriteable
================
*/
void Sys_MakeCodeWriteable (unsigned long startaddr, unsigned long length)
{
	DWORD  flOldProtect;

//@@@ copy on write or just read-write?
	if (!VirtualProtect((LPVOID)startaddr, length, PAGE_READWRITE, &flOldProtect))
   		Sys_Error("Protection change failed\n");
}


/*
================
Sys_Init
================
*/
void Sys_Init (void)
{
	LARGE_INTEGER	PerformanceFreq;
	unsigned int	lowpart, highpart;
	OSVERSIONINFO	vinfo;

#ifndef SERVERONLY
	// allocate a named semaphore on the client so the
	// front end can tell if it is alive

	// mutex will fail if semephore allready exists
    qwclsemaphore = CreateMutex(
        NULL,         /* Security attributes */
        0,            /* owner       */
        "qwcl"); /* Semaphore name      */
	if (!qwclsemaphore)
		Sys_Error ("QWCL is already running on this system");
	CloseHandle (qwclsemaphore);

    qwclsemaphore = CreateSemaphore(
        NULL,         /* Security attributes */
        0,            /* Initial count       */
        1,            /* Maximum count       */
        "qwcl"); /* Semaphore name      */
#endif

	MaskExceptions ();
	Sys_SetFPCW ();

#if 0
	if (!QueryPerformanceFrequency (&PerformanceFreq))
		Sys_Error ("No hardware timer available");

// get 32 out of the 64 time bits such that we have around
// 1 microsecond resolution
	lowpart = (unsigned int)PerformanceFreq.LowPart;
	highpart = (unsigned int)PerformanceFreq.HighPart;
	lowshift = 0;

	while (highpart || (lowpart > 2000000.0))
	{
		lowshift++;
		lowpart >>= 1;
		lowpart |= (highpart & 1) << 31;
		highpart >>= 1;
	}

	pfreq = 1.0 / (double)lowpart;

	Sys_InitFloatTime ();
#endif

	// make sure the timer is high precision, otherwise
	// NT gets 18ms resolution
	timeBeginPeriod( 1 );

	vinfo.dwOSVersionInfoSize = sizeof(vinfo);

	if (!GetVersionEx (&vinfo))
		Sys_Error ("Couldn't get OS info");

	if ((vinfo.dwMajorVersion < 4) ||
		(vinfo.dwPlatformId == VER_PLATFORM_WIN32s))
	{
		Sys_Error ("QuakeWorld requires at least Win95 or NT 4.0");
	}
	
	if (vinfo.dwPlatformId == VER_PLATFORM_WIN32_NT)
		WinNT = true;
	else
		WinNT = false;
}


void Sys_Error (char *error, ...)
{
	va_list		argptr;
	char		text[1024], text2[1024];
	DWORD		dummy;

	Host_Shutdown ();

	va_start (argptr, error);
	vsprintf (text, error, argptr);
	va_end (argptr);

	MessageBox(NULL, text, "Error", 0 /* MB_OK */ );

#ifndef SERVERONLY
	CloseHandle (qwclsemaphore);
#endif

	exit (1);
}

void Sys_Printf (char *fmt, ...)
{
	va_list		argptr;
	char		text[1024];
	DWORD		dummy;
	
	va_start (argptr,fmt);
	vprintf (fmt, argptr);
	va_end (argptr);
}

void Sys_Quit (void)
{
	VID_ForceUnlockedAndReturnState ();

	Host_Shutdown();
#ifndef SERVERONLY
	if (tevent)
		CloseHandle (tevent);

	if (qwclsemaphore)
		CloseHandle (qwclsemaphore);
#endif

	exit (0);
}


#if 0
/*
================
Sys_DoubleTime
================
*/
double Sys_DoubleTime (void)
{
	static int			sametimecount;
	static unsigned int	oldtime;
	static int			first = 1;
	LARGE_INTEGER		PerformanceCount;
	unsigned int		temp, t2;
	double				time;

	Sys_PushFPCW_SetHigh ();

	QueryPerformanceCounter (&PerformanceCount);

	temp = ((unsigned int)PerformanceCount.LowPart >> lowshift) |
		   ((unsigned int)PerformanceCount.HighPart << (32 - lowshift));

	if (first)
	{
		oldtime = temp;
		first = 0;
	}
	else
	{
	// check for turnover or backward time
		if ((temp <= oldtime) && ((oldtime - temp) < 0x10000000))
		{
			oldtime = temp;	// so we can't get stuck
		}
		else
		{
			t2 = temp - oldtime;

			time = (double)t2 * pfreq;
			oldtime = temp;

			curtime += time;

			if (curtime == lastcurtime)
			{
				sametimecount++;

				if (sametimecount > 100000)
				{
					curtime += 1.0;
					sametimecount = 0;
				}
			}
			else
			{
				sametimecount = 0;
			}

			lastcurtime = curtime;
		}
	}

	Sys_PopFPCW ();

    return curtime;
}

/*
================
Sys_InitFloatTime
================
*/
void Sys_InitFloatTime (void)
{
	int		j;

	Sys_DoubleTime ();

	j = COM_CheckParm("-starttime");

	if (j)
	{
		curtime = (double) (Q_atof(com_argv[j+1]));
	}
	else
	{
		curtime = 0.0;
	}

	lastcurtime = curtime;
}

#endif

double Sys_DoubleTime (void)
{
	static DWORD starttime;
	static qboolean first = true;
	DWORD now;
	double t;

	now = timeGetTime();

	if (first) {
		first = false;
		starttime = now;
		return 0.0;
	}
	
	if (now < starttime) // wrapped?
		return (now / 1000.0) + (LONG_MAX - starttime / 1000.0);

	if (now - starttime == 0)
		return 0.0;

	return (now - starttime) / 1000.0;
}

char *Sys_ConsoleInput (void)
{
	static char	text[256];
	static int		len;
	INPUT_RECORD	recs[1024];
	int		count;
	int		i, dummy;
	int		ch, numread, numevents;
	HANDLE	th;
	char	*clipText, *textCopied;

	for ( ;; )
	{
		if (!GetNumberOfConsoleInputEvents (hinput, &numevents))
			Sys_Error ("Error getting # of console events");

		if (numevents <= 0)
			break;

		if (!ReadConsoleInput(hinput, recs, 1, &numread))
			Sys_Error ("Error reading console input");

		if (numread != 1)
			Sys_Error ("Couldn't read console input");

		if (recs[0].EventType == KEY_EVENT)
		{
			if (!recs[0].Event.KeyEvent.bKeyDown)
			{
				ch = recs[0].Event.KeyEvent.uChar.AsciiChar;

				switch (ch)
				{
					case '\r':
						WriteFile(houtput, "\r\n", 2, &dummy, NULL);	

						if (len)
						{
							text[len] = 0;
							len = 0;
							return text;
						}
						break;

					case '\b':
						WriteFile(houtput, "\b \b", 3, &dummy, NULL);	
						if (len)
						{
							len--;
							putch('\b');
						}
						break;

					default:
						Con_Printf("Stupid: %d\n", recs[0].Event.KeyEvent.dwControlKeyState);
						if (((ch=='V' || ch=='v') && (recs[0].Event.KeyEvent.dwControlKeyState & 
							(LEFT_CTRL_PRESSED | RIGHT_CTRL_PRESSED))) || ((recs[0].Event.KeyEvent.dwControlKeyState 
							& SHIFT_PRESSED) && (recs[0].Event.KeyEvent.wVirtualKeyCode
							==VK_INSERT))) {
							if (OpenClipboard(NULL)) {
								th = GetClipboardData(CF_TEXT);
								if (th) {
									clipText = GlobalLock(th);
									if (clipText) {
										textCopied = malloc(GlobalSize(th)+1);
										strcpy(textCopied, clipText);
/* Substitutes a NULL for every token */strtok(textCopied, "\n\r\b");
										i = strlen(textCopied);
										if (i+len>=256)
											i=256-len;
										if (i>0) {
											textCopied[i]=0;
											text[len]=0;
											strcat(text, textCopied);
											len+=dummy;
											WriteFile(houtput, textCopied, i, &dummy, NULL);
										}
										free(textCopied);
									}
									GlobalUnlock(th);
								}
								CloseClipboard();
							}
						} else if (ch >= ' ')
						{
							WriteFile(houtput, &ch, 1, &dummy, NULL);	
							text[len] = ch;
							len = (len + 1) & 0xff;
						}

						break;

				}
			}
		}
	}

	return NULL;
}

void Sys_Sleep (void)
{
}


void Sys_SendKeyEvents (void)
{
    MSG        msg;

	while (PeekMessage (&msg, NULL, 0, 0, PM_NOREMOVE))
	{
	// we always update if there are any event, even if we're paused
		scr_skipupdate = 0;

		if (!GetMessage (&msg, NULL, 0, 0))
			Sys_Quit ();
      	TranslateMessage (&msg);
      	DispatchMessage (&msg);
	}
}



/*
==============================================================================

 WINDOWS CRAP

==============================================================================
*/

/*
==================
WinMain
==================
*/
void SleepUntilInput (int time)
{

	MsgWaitForMultipleObjects(1, &tevent, FALSE, time, QS_ALLINPUT);
}



/*
==================
WinMain
==================
*/
HINSTANCE	global_hInstance;
int			global_nCmdShow;
char		*argv[MAX_NUM_ARGVS];
static char	*empty_string = "";
HWND		hwnd_dialog;


int WINAPI WinMain (HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow)
{
    MSG				msg;
	quakeparms_t	parms;
	double			time, oldtime, newtime;
	MEMORYSTATUS	lpBuffer;
	static	char	cwd[1024];
	int				t;
	RECT			rect;

    /* previous instances do not exist in Win32 */
    if (hPrevInstance)
        return 0;

	global_hInstance = hInstance;
	global_nCmdShow = nCmdShow;

	lpBuffer.dwLength = sizeof(MEMORYSTATUS);
	GlobalMemoryStatus (&lpBuffer);

	if (!GetCurrentDirectory (sizeof(cwd), cwd))
		Sys_Error ("Couldn't determine current directory");

	if (cwd[Q_strlen(cwd)-1] == '/')
		cwd[Q_strlen(cwd)-1] = 0;

	parms.basedir = cwd;
	parms.cachedir = NULL;

	parms.argc = 1;
	argv[0] = empty_string;

	while (*lpCmdLine && (parms.argc < MAX_NUM_ARGVS))
	{
		while (*lpCmdLine && ((*lpCmdLine <= 32) || (*lpCmdLine > 126)))
			lpCmdLine++;

		if (*lpCmdLine)
		{
			argv[parms.argc] = lpCmdLine;
			parms.argc++;

			while (*lpCmdLine && ((*lpCmdLine > 32) && (*lpCmdLine <= 126)))
				lpCmdLine++;

			if (*lpCmdLine)
			{
				*lpCmdLine = 0;
				lpCmdLine++;
			}
			
		}
	}

	parms.argv = argv;

	COM_InitArgv (parms.argc, parms.argv);

	parms.argc = com_argc;
	parms.argv = com_argv;

	hwnd_dialog = CreateDialog(hInstance, MAKEINTRESOURCE(IDD_DIALOG1), NULL, NULL);

	if (hwnd_dialog)
	{
		if (GetWindowRect (hwnd_dialog, &rect))
		{
			if (rect.left > (rect.top * 2))
			{
				SetWindowPos (hwnd_dialog, 0,
					(rect.left / 2) - ((rect.right - rect.left) / 2),
					rect.top, 0, 0,
					SWP_NOZORDER | SWP_NOSIZE);
			}
		}

		ShowWindow (hwnd_dialog, SW_SHOWDEFAULT);
		UpdateWindow (hwnd_dialog);
		SetForegroundWindow (hwnd_dialog);
	}

// take the greater of all the available memory or half the total memory,
// but at least 8 Mb and no more than 16 Mb, unless they explicitly
// request otherwise
	parms.memsize = lpBuffer.dwAvailPhys;

	if (parms.memsize < MINIMUM_WIN_MEMORY)
		parms.memsize = MINIMUM_WIN_MEMORY;

	if (parms.memsize < (lpBuffer.dwTotalPhys >> 1))
		parms.memsize = lpBuffer.dwTotalPhys >> 1;

	if (parms.memsize > MAXIMUM_WIN_MEMORY)
		parms.memsize = MAXIMUM_WIN_MEMORY;

	if (COM_CheckParm ("-heapsize"))
	{
		t = COM_CheckParm("-heapsize") + 1;

		if (t < com_argc)
			parms.memsize = Q_atoi (com_argv[t]) * 1024;
	}

	parms.membase = malloc (parms.memsize);

	if (!parms.membase)
		Sys_Error ("Not enough memory free; check disk space\n");

	tevent = CreateEvent(NULL, FALSE, FALSE, NULL);

	if (!tevent)
		Sys_Error ("Couldn't create event");

	Sys_Init ();

// because sound is off until we become active
	S_BlockSound ();

	Sys_Printf ("Host_Init\n");
	Host_Init (&parms);

	oldtime = Sys_DoubleTime ();

    /* main window message loop */
	while (1)
	{
	// yield the CPU for a little while when paused, minimized, or not the focus
		if ((cl.paused && (!ActiveApp && !DDActive)) || Minimized || block_drawing)
		{
			SleepUntilInput (PAUSE_SLEEP);
			scr_skipupdate = 1;		// no point in bothering to draw
		}
		else if (!ActiveApp && !DDActive)
		{
			SleepUntilInput (NOT_FOCUS_SLEEP);
		}

		newtime = Sys_DoubleTime ();
		time = newtime - oldtime;
		Host_Frame (time);
		oldtime = newtime;
	}

    /* return success of application */
    return TRUE;
}

```