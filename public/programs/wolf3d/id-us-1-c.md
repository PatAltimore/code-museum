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
description: "This file contains user interface routines for Wolfenstein 3D, showcasing innovative techniques in handling user input and feedback in early 1990s game development."

summary:
  - point: "The file demonstrates efficient handling of user input and feedback in a constrained MS-DOS environment."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "It includes routines for drawing and managing windows, a precursor to modern UI frameworks."
    link: "https://en.wikipedia.org/wiki/Graphical_user_interface"
    link_label: "Graphical User Interface"
  - point: "The code reflects the ingenuity required to create immersive experiences on limited hardware."
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "The file includes error handling routines tailored for the MS-DOS environment."
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "The use of assembly language for critical routines highlights performance optimization strategies."
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "static-initialization"
    line_start: 47
    line_end: 79
    title: "Static Initialization: Setting the Stage"
    wikipedia_url: "https://en.wikipedia.org/wiki/Static_variable"
    image_url: ""
    image_caption: ""
    content: "This section initializes static variables and defines key data structures used throughout the file. The inclusion of high scores, featuring names of id Software's developers, serves as a playful nod to the team behind the game. In 1992, static variables were a common way to manage persistent state in C programs, especially in environments like MS-DOS where memory management was manual and constrained. These variables allowed developers to maintain state across function calls without the overhead of dynamic allocation. The high scores array, with its hardcoded values, reflects the era's simplicity and the developers' personal touch in embedding themselves into their creation. This initialization laid the groundwork for the user manager's functionality, ensuring consistent behavior across the game's runtime."
  - id: "usl-harderror"
    line_start: 81
    line_end: 85
    title: "USL_HardError: Handling DOS Errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This routine is designed to handle critical errors passed from DOS, such as device errors or write protection issues. In the early 1990s, robust error handling was crucial for software running on MS-DOS, as hardware failures and user errors could easily crash a program. The function's design reflects the need for graceful recovery or termination, offering options to retry or abort operations. The use of assembly language for certain operations, such as enabling keyboard interrupts, highlights the performance optimization strategies employed by the developers. This routine showcases the meticulous attention to detail required to create reliable software in an era of unpredictable hardware behavior."
  - id: "us-startup"
    line_start: 169
    line_end: 219
    title: "US_Startup: Initializing the User Manager"
    wikipedia_url: "https://en.wikipedia.org/wiki/Initialization_(programming)"
    image_url: ""
    image_caption: ""
    content: "US_Startup initializes the user manager, setting up critical routines like error handling and random number generation. This function checks for command-line parameters, allowing for customization of game behavior, such as compatibility modes or level selection. In the early 1990s, command-line arguments were a common way to configure software, as graphical interfaces were still in their infancy. The routine's design reflects the developers' focus on flexibility and adaptability, enabling the game to cater to different user needs and hardware configurations. By centralizing initialization, this function ensured a consistent starting state, reducing the risk of errors and improving the game's reliability."
  - id: "us-checkparm"
    line_start: 237
    line_end: 273
    title: "US_CheckParm: Parsing Command-Line Arguments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "US_CheckParm is a utility function that checks if a given string matches any of a predefined set of command-line arguments. It performs a case-insensitive comparison, returning the index of the matching string or -1 if no match is found. This routine exemplifies the importance of user configurability in early software, where command-line interfaces were the primary means of interaction. By enabling flexible configuration, the developers ensured that Wolfenstein 3D could adapt to various user preferences and system constraints. This approach reflects the era's emphasis on efficiency and user empowerment, laying the groundwork for more sophisticated configuration systems in later software."
  - id: "us-print"
    line_start: 288
    line_end: 323
    title: "US_Print: Rendering Text in Windows"
    wikipedia_url: "https://en.wikipedia.org/wiki/Text_rendering"
    image_url: ""
    image_caption: ""
    content: "US_Print is responsible for rendering text within the current window, supporting features like newlines and dynamic positioning. This routine leverages the user manager's print and measure functions to ensure accurate text placement. In the constrained environment of MS-DOS, efficient text rendering was essential for creating immersive user interfaces. The developers' decision to separate measurement and drawing routines reflects a modular design philosophy, enabling flexibility and reuse. This function highlights the ingenuity required to implement graphical interfaces on limited hardware, paving the way for more advanced UI frameworks in modern software."
  - id: "us-draw-window"
    line_start: 453
    line_end: 487
    title: "US_DrawWindow: Framing the Interface"
    wikipedia_url: "https://en.wikipedia.org/wiki/Window_(computing)"
    image_url: ""
    image_caption: ""
    content: "US_DrawWindow creates a framed window on the screen, setting its dimensions and initializing the print cursor. This routine demonstrates the developers' focus on user interface design, providing a structured way to display information. The use of tiled graphics for the frame reflects the limitations of MS-DOS graphics, where developers often relied on creative solutions to achieve visual effects. By encapsulating window creation in a single function, the developers ensured consistency and ease of use, contributing to the game's polished appearance. This approach influenced later UI frameworks, emphasizing the importance of modular design in software development."
  - id: "us-line-input"
    line_start: 574
    line_end: 755
    title: "US_LineInput: Capturing User Input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Input_(computing)"
    image_url: ""
    image_caption: ""
    content: "US_LineInput handles user input, allowing the player to enter text within predefined constraints. It supports features like cursor movement, character deletion, and escape handling, providing a responsive and intuitive interface. In the early 1990s, text input routines were a critical component of software, enabling interaction in a predominantly command-line-driven environment. The developers' decision to implement features like cursor visibility and redraw optimization reflects their commitment to usability and performance. This routine showcases the challenges of creating interactive systems on limited hardware, highlighting the developers' ingenuity in overcoming constraints. Its design principles continue to influence modern input handling, emphasizing the importance of user-centric development."

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