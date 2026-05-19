---
title: "ID_US_1.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/ID_US_1.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/ID_US_1.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "id-us-1-c"
order: 22
description: "This file contains user interface routines for Wolfenstein 3D, showcasing foundational techniques in game UI design and interaction."

summary:
  - point: "Implements text-based user input routines for MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduces error handling for hardware-level issues"
    link: "https://en.wikipedia.org/wiki/Interrupt_handler"
    link_label: "Interrupt handler"
  - point: "Contains routines for window management and text rendering"
    link: "https://en.wikipedia.org/wiki/Graphics_library"
    link_label: "Graphics library"
  - point: "Demonstrates early use of XOR-based cursor rendering"
    link: "https://en.wikipedia.org/wiki/XOR_gate"
    link_label: "XOR gate"
  - point: "Highlights modular design for UI components"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular programming"

enhancements:
  - id: "static-global-variables"
    line_start: 47
    line_end: 79
    title: "Global variables for user interface state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Global_variable"
    image_url: ""
    image_caption: ""
    content: "This section defines global variables used throughout the user interface routines, such as flags for game state (`US_Started`) and pointers for error handling (`abortprogram`). These variables are critical for managing the state of the program and enabling communication between different parts of the code. In the early 1990s, global variables were a common practice for simplifying state management in games, especially on resource-constrained systems like MS-DOS. While this approach is less favored today due to concerns about maintainability and side effects, it was instrumental in enabling rapid development and debugging during the tight development cycles of games like Wolfenstein 3D. The modular design seen here influenced later game engines, including id Software's own Doom engine."
  - id: "usl-harderror-handler"
    line_start: 81
    line_end: 85
    title: "Handling DOS-level errors gracefully"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The `USL_HardError` function is designed to handle critical errors passed from DOS, such as device errors or write protection issues. It provides a user-friendly interface for retrying or aborting operations, displaying error messages in a centered window. This approach reflects the constraints of the time, where direct interaction with hardware and operating system interrupts was necessary for robust error handling. The use of inline assembly (`asm sti`) to enable keyboard interrupts demonstrates the low-level programming techniques required to work effectively on MS-DOS. This function highlights id Software's commitment to creating a polished user experience, even in the face of technical limitations. The error handling mechanisms here influenced later game engines and contributed to the industry's understanding of integrating user feedback into error management."
  - id: "us-startup-initialization"
    line_start: 169
    line_end: 219
    title: "Initializing the user manager"
    wikipedia_url: "https://en.wikipedia.org/wiki/Initialization_(programming)"
    image_url: ""
    image_caption: ""
    content: "The `US_Startup` function initializes the user manager, setting up critical components like the error handler (`harderr`) and random number generator (`US_InitRndT`). It also parses command-line arguments to configure compatibility modes and detect special launch conditions, such as the use of TED (a level editor). This initialization routine demonstrates the modular design philosophy of id Software, where components are set up independently and only when needed. In the early 1990s, this approach was vital for optimizing performance on limited hardware. The ability to detect and adapt to different runtime environments laid the groundwork for more sophisticated game engines, including those used in Doom and Quake, which further refined initialization processes to support diverse hardware configurations."
  - id: "us-draw-window"
    line_start: 453
    line_end: 487
    title: "Drawing graphical windows in text mode"
    wikipedia_url: "https://en.wikipedia.org/wiki/Graphics_library"
    image_url: ""
    image_caption: ""
    content: "The `US_DrawWindow` function creates graphical windows by drawing frames and setting up the dimensions for text rendering. It uses tile-based drawing (`VWB_DrawTile8`) to construct the window borders, a technique optimized for the low-resolution graphics of MS-DOS. This function exemplifies the ingenuity required to simulate graphical interfaces in an environment primarily designed for text-based applications. By abstracting window creation into a reusable routine, id Software enabled consistent UI elements across the game. This approach influenced the design of later game engines, which adopted similar abstractions for managing graphical elements. The tile-based rendering seen here is a precursor to techniques used in modern 2D game engines, such as Unity and GameMaker Studio."
  - id: "us-line-input"
    line_start: 574
    line_end: 755
    title: "Capturing user input with real-time feedback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input/output"
    image_url: ""
    image_caption: ""
    content: "The `US_LineInput` function captures a line of user input, providing real-time feedback through a blinking cursor rendered with XOR operations (`USL_XORICursor`). It supports features like default values, input length restrictions, and escape key handling. This routine demonstrates the challenges of implementing text input on MS-DOS, where developers had to manually manage cursor visibility and screen updates. The use of XOR-based rendering for the cursor is a clever workaround for the lack of hardware support for text cursors in VGA mode. This function showcases id Software's attention to detail in creating responsive and intuitive user interfaces, a hallmark of their design philosophy. The techniques developed here influenced later games and engines, which adopted similar approaches for handling user input in constrained environments."

---

//
//	ID Engine
//	ID_US_1.c - User Manager - General routines
//	v1.1d1
//	By Jason Blochowiak
//	Hacked up for Catacomb 3D
//

//
//	This module handles dealing with user input & feedback
//
//	Depends on: Input Mgr, View Mgr, some variables from the Sound, Caching,
//		and Refresh Mgrs, Memory Mgr for background save/restore
//
//	Globals:
//		ingame - Flag set by game indicating if a game is in progress
//      abortgame - Flag set if the current game should be aborted (if a load
//			game fails)
//		loadedgame - Flag set if a game was loaded
//		abortprogram - Normally nil, this points to a terminal error message
//			if the program needs to abort
//		restartgame - Normally set to gd_Continue, this is set to one of the
//			difficulty levels if a new game should be started
//		PrintX, PrintY - Where the User Mgr will print (global coords)
//		WindowX,WindowY,WindowW,WindowH - The dimensions of the current
//			window
//

#include "ID_HEADS.H"

#pragma	hdrstop

#pragma	warn	-pia


//	Global variables
		char		*abortprogram;
		boolean		NoWait;
		word		PrintX,PrintY;
		word		WindowX,WindowY,WindowW,WindowH;

//	Internal variables
#define	ConfigVersion	1

static	char		*ParmStrings[] = {"TEDLEVEL","NOWAIT"},
					*ParmStrings2[] = {"COMP","NOCOMP"};
static	boolean		US_Started;

		boolean		Button0,Button1,
					CursorBad;
		int			CursorX,CursorY;

		void		(*USL_MeasureString)(char far *,word *,word *) = VW_MeasurePropString,
					(*USL_DrawString)(char far *) = VWB_DrawPropString;

		SaveGame	Games[MaxSaveGames];
		HighScore	Scores[MaxScores] =
					{
						{"id software-'92",10000,1},
						{"Adrian Carmack",10000,1},
						{"John Carmack",10000,1},
						{"Kevin Cloud",10000,1},
						{"Tom Hall",10000,1},
						{"John Romero",10000,1},
						{"Jay Wilbur",10000,1},
					};

//	Internal routines

//	Public routines

///////////////////////////////////////////////////////////////////////////
//
//	USL_HardError() - Handles the Abort/Retry/Fail sort of errors passed
//			from DOS.
//
///////////////////////////////////////////////////////////////////////////
#pragma	warn	-par
#pragma	warn	-rch
int
USL_HardError(word errval,int ax,int bp,int si)
{
#define IGNORE  0
#define RETRY   1
#define	ABORT   2
extern	void	ShutdownId(void);

static	char		buf[32];
static	WindowRec	wr;
		int			di;
		char		c,*s,*t;


	di = _DI;

	if (ax < 0)
		s = "Device Error";
	else
	{
		if ((di & 0x00ff) == 0)
			s = "Drive ~ is Write Protected";
		else
			s = "Error on Drive ~";
		for (t = buf;*s;s++,t++)	// Can't use sprintf()
			if ((*t = *s) == '~')
				*t = (ax & 0x00ff) + 'A';
		*t = '\0';
		s = buf;
	}

	c = peekb(0x40,0x49);	// Get the current screen mode
	if ((c < 4) || (c == 7))
		goto oh_kill_me;

	// DEBUG - handle screen cleanup

	US_SaveWindow(&wr);
	US_CenterWindow(30,3);
	US_CPrint(s);
	US_CPrint("(R)etry or (A)bort?");
	VW_UpdateScreen();
	IN_ClearKeysDown();

asm	sti	// Let the keyboard interrupts come through

	while (true)
	{
		switch (IN_WaitForASCII())
		{
		case key_Escape:
		case 'a':
		case 'A':
			goto oh_kill_me;
			break;
		case key_Return:
		case key_Space:
		case 'r':
		case 'R':
			US_ClearWindow();
			VW_UpdateScreen();
			US_RestoreWindow(&wr);
			return(RETRY);
			break;
		}
	}

oh_kill_me:
	abortprogram = s;
	ShutdownId();
	fprintf(stderr,"Terminal Error: %s\n",s);
	if (tedlevel)
		fprintf(stderr,"You launched from TED. I suggest that you reboot...\n");

	return(ABORT);
#undef	IGNORE
#undef	RETRY
#undef	ABORT
}
#pragma	warn	+par
#pragma	warn	+rch


///////////////////////////////////////////////////////////////////////////
//
//	US_Startup() - Starts the User Mgr
//
///////////////////////////////////////////////////////////////////////////
void
US_Startup(void)
{
	int	i,n;

	if (US_Started)
		return;

	harderr(USL_HardError);	// Install the fatal error handler

	US_InitRndT(true);		// Initialize the random number generator

	for (i = 1;i < _argc;i++)
	{
		switch (US_CheckParm(_argv[i],ParmStrings2))
		{
		case 0:
			compatability = true;
			break;
		case 1:
			compatability = false;
			break;
		}
	}

	// Check for TED launching here
	for (i = 1;i < _argc;i++)
	{
		n = US_CheckParm(_argv[i],ParmStrings);
		switch(n)
		{
		 case 0:
		   tedlevelnum = atoi(_argv[i + 1]);
		   if (tedlevelnum >= 0)
		     tedlevel = true;
		   break;

		 case 1:
		   NoWait = true;
		   break;
		}
	}

	US_Started = true;
}


///////////////////////////////////////////////////////////////////////////
//
//	US_Shutdown() - Shuts down the User Mgr
//
///////////////////////////////////////////////////////////////////////////
void
US_Shutdown(void)
{
	if (!US_Started)
		return;

	US_Started = false;
}

///////////////////////////////////////////////////////////////////////////
//
//	US_CheckParm() - checks to see if a string matches one of a set of
//		strings. The check is case insensitive. The routine returns the
//		index of the string that matched, or -1 if no matches were found
//
///////////////////////////////////////////////////////////////////////////
int
US_CheckParm(char *parm,char **strings)
{
	char	cp,cs,
			*p,*s;
	int		i;

	while (!isalpha(*parm))	// Skip non-alphas
		parm++;

	for (i = 0;*strings && **strings;i++)
	{
		for (s = *strings++,p = parm,cs = cp = 0;cs == cp;)
		{
			cs = *s++;
			if (!cs)
				return(i);
			cp = *p++;

			if (isupper(cs))
				cs = tolower(cs);
			if (isupper(cp))
				cp = tolower(cp);
		}
	}
	return(-1);
}


//	Window/Printing routines

///////////////////////////////////////////////////////////////////////////
//
//	US_SetPrintRoutines() - Sets the routines used to measure and print
//		from within the User Mgr. Primarily provided to allow switching
//		between masked and non-masked fonts
//
///////////////////////////////////////////////////////////////////////////
void
US_SetPrintRoutines(void (*measure)(char far *,word *,word *),void (*print)(char far *))
{
	USL_MeasureString = measure;
	USL_DrawString = print;
}

///////////////////////////////////////////////////////////////////////////
//
//	US_Print() - Prints a string in the current window. Newlines are
//		supported.
//
///////////////////////////////////////////////////////////////////////////
void
US_Print(char far *s)
{
	char	c,far *se;
	word	w,h;

	while (*s)
	{
		se = s;
		while ((c = *se) && (c != '\n'))
			se++;
		*se = '\0';

		USL_MeasureString(s,&w,&h);
		px = PrintX;
		py = PrintY;
		USL_DrawString(s);

		s = se;
		if (c)
		{
			*se = c;
			s++;

			PrintX = WindowX;
			PrintY += h;
		}
		else
			PrintX += w;
	}
}

///////////////////////////////////////////////////////////////////////////
//
//	US_PrintUnsigned() - Prints an unsigned long
//
///////////////////////////////////////////////////////////////////////////
void
US_PrintUnsigned(longword n)
{
	char	buffer[32];

	US_Print(ultoa(n,buffer,10));
}

///////////////////////////////////////////////////////////////////////////
//
//	US_PrintSigned() - Prints a signed long
//
///////////////////////////////////////////////////////////////////////////
void
US_PrintSigned(long n)
{
	char	buffer[32];

	US_Print(ltoa(n,buffer,10));
}

///////////////////////////////////////////////////////////////////////////
//
//	USL_PrintInCenter() - Prints a string in the center of the given rect
//
///////////////////////////////////////////////////////////////////////////
void
USL_PrintInCenter(char far *s,Rect r)
{
	word	w,h,
			rw,rh;

	USL_MeasureString(s,&w,&h);
	rw = r.lr.x - r.ul.x;
	rh = r.lr.y - r.ul.y;

	px = r.ul.x + ((rw - w) / 2);
	py = r.ul.y + ((rh - h) / 2);
	USL_DrawString(s);
}

///////////////////////////////////////////////////////////////////////////
//
//	US_PrintCentered() - Prints a string centered in the current window.
//
///////////////////////////////////////////////////////////////////////////
void
US_PrintCentered(char far *s)
{
	Rect	r;

	r.ul.x = WindowX;
	r.ul.y = WindowY;
	r.lr.x = r.ul.x + WindowW;
	r.lr.y = r.ul.y + WindowH;

	USL_PrintInCenter(s,r);
}

///////////////////////////////////////////////////////////////////////////
//
//	US_CPrintLine() - Prints a string centered on the current line and
//		advances to the next line. Newlines are not supported.
//
///////////////////////////////////////////////////////////////////////////
void
US_CPrintLine(char far *s)
{
	word	w,h;

	USL_MeasureString(s,&w,&h);

	if (w > WindowW)
		Quit("US_CPrintLine() - String exceeds width");
	px = WindowX + ((WindowW - w) / 2);
	py = PrintY;
	USL_DrawString(s);
	PrintY += h;
}

///////////////////////////////////////////////////////////////////////////
//
//	US_CPrint() - Prints a string in the current window. Newlines are
//		supported.
//
///////////////////////////////////////////////////////////////////////////
void
US_CPrint(char far *s)
{
	char	c,far *se;

	while (*s)
	{
		se = s;
		while ((c = *se) && (c != '\n'))
			se++;
		*se = '\0';

		US_CPrintLine(s);

		s = se;
		if (c)
		{
			*se = c;
			s++;
		}
	}
}

///////////////////////////////////////////////////////////////////////////
//
//	US_ClearWindow() - Clears the current window to white and homes the
//		cursor
//
///////////////////////////////////////////////////////////////////////////
void
US_ClearWindow(void)
{
	VWB_Bar(WindowX,WindowY,WindowW,WindowH,WHITE);
	PrintX = WindowX;
	PrintY = WindowY;
}

///////////////////////////////////////////////////////////////////////////
//
//	US_DrawWindow() - Draws a frame and sets the current window parms
//
///////////////////////////////////////////////////////////////////////////
void
US_DrawWindow(word x,word y,word w,word h)
{
	word	i,
			sx,sy,sw,sh;

	WindowX = x * 8;
	WindowY = y * 8;
	WindowW = w * 8;
	WindowH = h * 8;

	PrintX = WindowX;
	PrintY = WindowY;

	sx = (x - 1) * 8;
	sy = (y - 1) * 8;
	sw = (w + 1) * 8;
	sh = (h + 1) * 8;

	US_ClearWindow();

	VWB_DrawTile8(sx,sy,0),VWB_DrawTile8(sx,sy + sh,5);
	for (i = sx + 8;i <= sx + sw - 8;i += 8)
		VWB_DrawTile8(i,sy,1),VWB_DrawTile8(i,sy + sh,6);
	VWB_DrawTile8(i,sy,2),VWB_DrawTile8(i,sy + sh,7);

	for (i = sy + 8;i <= sy + sh - 8;i += 8)
		VWB_DrawTile8(sx,i,3),VWB_DrawTile8(sx + sw,i,4);
}

///////////////////////////////////////////////////////////////////////////
//
//	US_CenterWindow() - Generates a window of a given width & height in the
//		middle of the screen
//
///////////////////////////////////////////////////////////////////////////
void
US_CenterWindow(word w,word h)
{
	US_DrawWindow(((MaxX / 8) - w) / 2,((MaxY / 8) - h) / 2,w,h);
}

///////////////////////////////////////////////////////////////////////////
//
//	US_SaveWindow() - Saves the current window parms into a record for
//		later restoration
//
///////////////////////////////////////////////////////////////////////////
void
US_SaveWindow(WindowRec *win)
{
	win->x = WindowX;
	win->y = WindowY;
	win->w = WindowW;
	win->h = WindowH;

	win->px = PrintX;
	win->py = PrintY;
}

///////////////////////////////////////////////////////////////////////////
//
//	US_RestoreWindow() - Sets the current window parms to those held in the
//		record
//
///////////////////////////////////////////////////////////////////////////
void
US_RestoreWindow(WindowRec *win)
{
	WindowX = win->x;
	WindowY = win->y;
	WindowW = win->w;
	WindowH = win->h;

	PrintX = win->px;
	PrintY = win->py;
}

//	Input routines

///////////////////////////////////////////////////////////////////////////
//
//	USL_XORICursor() - XORs the I-bar text cursor. Used by US_LineInput()
//
///////////////////////////////////////////////////////////////////////////
static void
USL_XORICursor(int x,int y,char *s,word cursor)
{
	static	boolean	status;		// VGA doesn't XOR...
	char	buf[MaxString];
	int		temp;
	word	w,h;

	strcpy(buf,s);
	buf[cursor] = '\0';
	USL_MeasureString(buf,&w,&h);

	px = x + w - 1;
	py = y;
	if (status^=1)
		USL_DrawString("\x80");
	else
	{
		temp = fontcolor;
		fontcolor = backcolor;
		USL_DrawString("\x80");
		fontcolor = temp;
	}

}

///////////////////////////////////////////////////////////////////////////
//
//	US_LineInput() - Gets a line of user input at (x,y), the string defaults
//		to whatever is pointed at by def. Input is restricted to maxchars
//		chars or maxwidth pixels wide. If the user hits escape (and escok is
//		true), nothing is copied into buf, and false is returned. If the
//		user hits return, the current string is copied into buf, and true is
//		returned
//
///////////////////////////////////////////////////////////////////////////
boolean
US_LineInput(int x,int y,char *buf,char *def,boolean escok,
				int maxchars,int maxwidth)
{
	boolean		redraw,
				cursorvis,cursormoved,
				done,result;
	ScanCode	sc;
	char		c,
				s[MaxString],olds[MaxString];
	word		i,
				cursor,
				w,h,
				len,temp;
	longword	lasttime;

	if (def)
		strcpy(s,def);
	else
		*s = '\0';
	*olds = '\0';
	cursor = strlen(s);
	cursormoved = redraw = true;

	cursorvis = done = false;
	lasttime = TimeCount;
	LastASCII = key_None;
	LastScan = sc_None;

	while (!done)
	{
		if (cursorvis)
			USL_XORICursor(x,y,s,cursor);

	asm	pushf
	asm	cli

		sc = LastScan;
		LastScan = sc_None;
		c = LastASCII;
		LastASCII = key_None;

	asm	popf

		switch (sc)
		{
		case sc_LeftArrow:
			if (cursor)
				cursor--;
			c = key_None;
			cursormoved = true;
			break;
		case sc_RightArrow:
			if (s[cursor])
				cursor++;
			c = key_None;
			cursormoved = true;
			break;
		case sc_Home:
			cursor = 0;
			c = key_None;
			cursormoved = true;
			break;
		case sc_End:
			cursor = strlen(s);
			c = key_None;
			cursormoved = true;
			break;

		case sc_Return:
			strcpy(buf,s);
			done = true;
			result = true;
			c = key_None;
			break;
		case sc_Escape:
			if (escok)
			{
				done = true;
				result = false;
			}
			c = key_None;
			break;

		case sc_BackSpace:
			if (cursor)
			{
				strcpy(s + cursor - 1,s + cursor);
				cursor--;
				redraw = true;
			}
			c = key_None;
			cursormoved = true;
			break;
		case sc_Delete:
			if (s[cursor])
			{
				strcpy(s + cursor,s + cursor + 1);
				redraw = true;
			}
			c = key_None;
			cursormoved = true;
			break;

		case 0x4c:	// Keypad 5
		case sc_UpArrow:
		case sc_DownArrow:
		case sc_PgUp:
		case sc_PgDn:
		case sc_Insert:
			c = key_None;
			break;
		}

		if (c)
		{
			len = strlen(s);
			USL_MeasureString(s,&w,&h);

			if
			(
				isprint(c)
			&&	(len < MaxString - 1)
			&&	((!maxchars) || (len < maxchars))
			&&	((!maxwidth) || (w < maxwidth))
			)
			{
				for (i = len + 1;i > cursor;i--)
					s[i] = s[i - 1];
				s[cursor++] = c;
				redraw = true;
			}
		}

		if (redraw)
		{
			px = x;
			py = y;
			temp = fontcolor;
			fontcolor = backcolor;
			USL_DrawString(olds);
			fontcolor = temp;
			strcpy(olds,s);

			px = x;
			py = y;
			USL_DrawString(s);

			redraw = false;
		}

		if (cursormoved)
		{
			cursorvis = false;
			lasttime = TimeCount - TickBase;

			cursormoved = false;
		}
		if (TimeCount - lasttime > TickBase / 2)
		{
			lasttime = TimeCount;

			cursorvis ^= true;
		}
		if (cursorvis)
			USL_XORICursor(x,y,s,cursor);

		VW_UpdateScreen();
	}

	if (cursorvis)
		USL_XORICursor(x,y,s,cursor);
	if (!result)
	{
		px = x;
		py = y;
		USL_DrawString(olds);
	}
	VW_UpdateScreen();

	IN_ClearKeysDown();
	return(result);
}