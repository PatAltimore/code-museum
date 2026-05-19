---
title: "WL_TEXT.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_TEXT.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_TEXT.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-text-c"
order: 18
description: "This file implements text formatting and layout commands for Wolfenstein 3D, showcasing early techniques for rendering text and graphics in a constrained environment."

summary:
  - point: "Text formatting commands include color changes and graphics placement"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Efficient word wrapping and page layout algorithms"
    link: "https://en.wikipedia.org/wiki/Word_wrap"
    link_label: "Word Wrap"
  - point: "Graphics caching for optimized rendering"
    link: "https://en.wikipedia.org/wiki/Double_buffering"
    link_label: "Double Buffering"
  - point: "Support for internationalization with Japanese-specific code"
    link: "https://en.wikipedia.org/wiki/Internationalization_and_localization"
    link_label: "Internationalization"
  - point: "Integration of text and graphics for immersive storytelling"
    link: "https://en.wikipedia.org/wiki/Video_game_storytelling"
    link_label: "Video Game Storytelling"

enhancements:
  - id: "text-formatting-commands"
    line_start: 9
    line_end: 49
    title: "Text formatting: Color, graphics, and layout"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section defines the text formatting commands used in Wolfenstein 3D, such as changing text color, drawing graphics, and managing page layouts. These commands are parsed and executed to render text and graphics dynamically during gameplay. In 1992, text rendering in games was a challenge due to hardware constraints like limited memory and processing power. The developers at id Software, led by John Carmack, created efficient routines to handle these tasks, ensuring smooth gameplay and immersive storytelling. These techniques influenced later games, particularly in how text and graphics were integrated into user interfaces and cutscenes. The modularity of these commands allowed for easy localization, as evidenced by the Japanese-specific code in this file."
  - id: "rip-to-eol"
    line_start: 71
    line_end: 84
    title: "RipToEOL: Scanning to end of line"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parsing"
    image_url: ""
    image_caption: ""
    content: "The RipToEOL function scans through the text buffer until it reaches the end of a line. This simple yet essential routine is used throughout the file to process text commands efficiently. In the early 1990s, parsing text in real-time was a critical task for games like Wolfenstein 3D, which relied on dynamic text rendering for menus and in-game messages. The function exemplifies Carmack's focus on performance and simplicity, ensuring minimal overhead during text processing. Techniques like this laid the groundwork for more complex text parsing systems in modern game engines, such as Unity and Unreal Engine."
  - id: "parse-number"
    line_start: 86
    line_end: 123
    title: "ParseNumber: Extracting numeric values"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parsing"
    image_url: ""
    image_caption: ""
    content: "ParseNumber extracts numeric values from the text buffer, converting them into integers for use in commands like positioning graphics or setting delays. This routine is a cornerstone of the text command system, enabling dynamic adjustments based on user input or predefined layouts. In the constrained environment of MS-DOS, efficient parsing was crucial to maintain performance. The function's design reflects Carmack's ability to balance simplicity with functionality, a hallmark of id Software's early work. Parsing techniques like this influenced scripting languages in later games, enabling more complex interactions and dynamic content generation."
  - id: "timed-pic-command"
    line_start: 155
    line_end: 184
    title: "TimedPicCommand: Graphics with delays"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "TimedPicCommand handles the rendering of graphics with a specified delay, allowing for timed visual effects. This function updates the screen, waits for a delay, and then draws the graphic at the specified position. In the early 1990s, creating smooth and visually appealing effects was challenging due to hardware limitations. This routine demonstrates id Software's ingenuity in optimizing rendering techniques for immersive gameplay. The use of timed graphics influenced later games, particularly in creating cinematic effects and transitions. Techniques like this are now standard in modern game engines, where timing and synchronization are critical for storytelling and user experience."
  - id: "handle-command"
    line_start: 186
    line_end: 287
    title: "HandleCommand: Parsing and executing text commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parsing"
    image_url: ""
    image_caption: ""
    content: "HandleCommand is the central routine for parsing and executing text commands, such as changing text color, starting a new page, or drawing graphics. It interprets the commands embedded in the text buffer and performs the corresponding actions. This modular approach to command processing was innovative for its time, enabling dynamic text and graphics rendering in a constrained environment. The routine reflects Carmack's emphasis on performance and modularity, allowing for easy expansion and localization. The command system influenced later games, particularly in how text and graphics were integrated into user interfaces and cutscenes. It also laid the groundwork for scripting systems in modern game engines."
  - id: "page-layout"
    line_start: 412
    line_end: 516
    title: "PageLayout: Word wrapping and text rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Word_wrap"
    image_url: ""
    image_caption: ""
    content: "PageLayout handles the rendering of text and graphics on a page, including word wrapping and margin adjustments. It clears the screen, sets up margins, and processes the text buffer to render content dynamically. This routine showcases id Software's ability to create efficient algorithms for constrained hardware, ensuring smooth and visually appealing text rendering. The word wrapping algorithm was particularly innovative, allowing for dynamic adjustments based on the content and layout. Techniques like this influenced later games and applications, particularly in how text was rendered in user interfaces and cutscenes. The modularity of the routine also made it easier to localize the game for different languages."
  - id: "cache-layout-graphics"
    line_start: 543
    line_end: 598
    title: "CacheLayoutGraphics: Optimizing graphic rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "CacheLayoutGraphics scans the entire layout file to mark and cache all graphics used, optimizing rendering performance. This routine ensures that only the necessary graphics are loaded into memory, reducing overhead and improving gameplay smoothness. In the early 1990s, memory management was a critical challenge for game developers, especially on MS-DOS systems with limited resources. This function reflects Carmack's focus on efficiency and performance, enabling Wolfenstein 3D to push the limits of hardware at the time. Techniques like this influenced later games, particularly in how graphics were managed and cached for optimized rendering. The approach is now standard in modern game engines, where efficient asset management is critical for performance."
  - id: "show-article"
    line_start: 601
    line_end: 729
    title: "ShowArticle: Rendering help and story screens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_storytelling"
    image_url: ""
    image_caption: ""
    content: "ShowArticle renders help and story screens, integrating text and graphics for immersive storytelling. The routine supports multiple pages and handles user input for navigation. This feature was essential for Wolfenstein 3D, providing players with context and instructions in an engaging format. The integration of text and graphics reflects id Software's focus on creating immersive experiences, even in a constrained environment. Techniques like this influenced later games, particularly in how help screens and story elements were presented. The routine also demonstrates the team's ability to balance functionality with performance, ensuring smooth navigation and rendering."

---

// WL_TEXT.C

#include "WL_DEF.H"
#pragma	hdrstop

/*
=============================================================================

TEXT FORMATTING COMMANDS
------------------------
^C<hex digit>  			Change text color
^E[enter]				End of layout (all pages)
^G<y>,<x>,<pic>[enter]	Draw a graphic and push margins
^P[enter]				start new page, must be the first chars in a layout
^L<x>,<y>[ENTER]		Locate to a specific spot, x in pixels, y in lines

=============================================================================
*/

/*
=============================================================================

						 LOCAL CONSTANTS

=============================================================================
*/

#define BACKCOLOR		0x11


#define WORDLIMIT		80
#define FONTHEIGHT		10
#define	TOPMARGIN		16
#define BOTTOMMARGIN	32
#define LEFTMARGIN		16
#define RIGHTMARGIN		16
#define PICMARGIN		8
#define TEXTROWS		((200-TOPMARGIN-BOTTOMMARGIN)/FONTHEIGHT)
#define	SPACEWIDTH		7
#define SCREENPIXWIDTH	320
#define SCREENMID		(SCREENPIXWIDTH/2)

/*
=============================================================================

						 LOCAL VARIABLES

=============================================================================
*/

int			pagenum,numpages;

unsigned	leftmargin[TEXTROWS],rightmargin[TEXTROWS];
char		far *text;
unsigned	rowon;

int			picx,picy,picnum,picdelay;
boolean		layoutdone;

//===========================================================================

#ifndef JAPAN
/*
=====================
=
= RipToEOL
=
=====================
*/

void RipToEOL (void)
{
	while (*text++ != '\n')		// scan to end of line
	;
}


/*
=====================
=
= ParseNumber
=
=====================
*/

int	ParseNumber (void)
{
	char	ch;
	char	num[80],*numptr;

//
// scan until a number is found
//
	ch = *text;
	while (ch < '0' || ch >'9')
		ch = *++text;

//
// copy the number out
//
	numptr = num;
	do
	{
		*numptr++ = ch;
		ch = *++text;
	} while (ch >= '0' && ch <= '9');
	*numptr = 0;

	return atoi (num);
}



/*
=====================
=
= ParsePicCommand
=
= Call with text pointing just after a ^P
= Upon exit text points to the start of next line
=
=====================
*/

void	ParsePicCommand (void)
{
	picy=ParseNumber();
	picx=ParseNumber();
	picnum=ParseNumber();
	RipToEOL ();
}


void	ParseTimedCommand (void)
{
	picy=ParseNumber();
	picx=ParseNumber();
	picnum=ParseNumber();
	picdelay=ParseNumber();
	RipToEOL ();
}


/*
=====================
=
= TimedPicCommand
=
= Call with text pointing just after a ^P
= Upon exit text points to the start of next line
=
=====================
*/

void	TimedPicCommand (void)
{
	ParseTimedCommand ();

//
// update the screen, and wait for time delay
//
	VW_UpdateScreen ();

//
// wait for time
//
	TimeCount = 0;
	while (TimeCount < picdelay)
	;

//
// draw pic
//
	VWB_DrawPic (picx&~7,picy,picnum);
}


/*
=====================
=
= HandleCommand
=
=====================
*/

void HandleCommand (void)
{
	int	i,margin,top,bottom;
	int	picwidth,picheight,picmid;

	switch (toupper(*++text))
	{
	case 'B':
		picy=ParseNumber();
		picx=ParseNumber();
		picwidth=ParseNumber();
		picheight=ParseNumber();
		VWB_Bar(picx,picy,picwidth,picheight,BACKCOLOR);
		RipToEOL();
		break;
	case ';':		// comment
		RipToEOL();
		break;
	case 'P':		// ^P is start of next page, ^E is end of file
	case 'E':
		layoutdone = true;
		text--;    	// back up to the '^'
		break;

	case 'C':		// ^c<hex digit> changes text color
		i = toupper(*++text);
		if (i>='0' && i<='9')
			fontcolor = i-'0';
		else if (i>='A' && i<='F')
			fontcolor = i-'A'+10;

		fontcolor *= 16;
		i = toupper(*++text);
		if (i>='0' && i<='9')
			fontcolor += i-'0';
		else if (i>='A' && i<='F')
			fontcolor += i-'A'+10;
		text++;
		break;

	case '>':
		px = 160;
		text++;
		break;

	case 'L':
		py=ParseNumber();
		rowon = (py-TOPMARGIN)/FONTHEIGHT;
		py = TOPMARGIN+rowon*FONTHEIGHT;
		px=ParseNumber();
		while (*text++ != '\n')		// scan to end of line
		;
		break;

	case 'T':		// ^Tyyy,xxx,ppp,ttt waits ttt tics, then draws pic
		TimedPicCommand ();
		break;

	case 'G':		// ^Gyyy,xxx,ppp draws graphic
		ParsePicCommand ();
		VWB_DrawPic (picx&~7,picy,picnum);
		picwidth = pictable[picnum-STARTPICS].width;
		picheight = pictable[picnum-STARTPICS].height;
		//
		// adjust margins
		//
		picmid = picx + picwidth/2;
		if (picmid > SCREENMID)
			margin = picx-PICMARGIN;			// new right margin
		else
			margin = picx+picwidth+PICMARGIN;	// new left margin

		top = (picy-TOPMARGIN)/FONTHEIGHT;
		if (top<0)
			top = 0;
		bottom = (picy+picheight-TOPMARGIN)/FONTHEIGHT;
		if (bottom>=TEXTROWS)
			bottom = TEXTROWS-1;

		for (i=top;i<=bottom;i++)
			if (picmid > SCREENMID)
				rightmargin[i] = margin;
			else
				leftmargin[i] = margin;

		//
		// adjust this line if needed
		//
		if (px < leftmargin[rowon])
			px = leftmargin[rowon];
		break;
	}
}


/*
=====================
=
= NewLine
=
=====================
*/

void NewLine (void)
{
	char	ch;

	if (++rowon == TEXTROWS)
	{
	//
	// overflowed the page, so skip until next page break
	//
		layoutdone = true;
		do
		{
			if (*text == '^')
			{
				ch = toupper(*(text+1));
				if (ch == 'E' || ch == 'P')
				{
					layoutdone = true;
					return;
				}
			}
			text++;

		} while (1);

	}
	px = leftmargin[rowon];
	py+= FONTHEIGHT;
}



/*
=====================
=
= HandleCtrls
=
=====================
*/

void HandleCtrls (void)
{
	char	ch;

	ch = *text++;			// get the character and advance

	if (ch == '\n')
	{
		NewLine ();
		return;
	}

}


/*
=====================
=
= HandleWord
=
=====================
*/

void HandleWord (void)
{
	char		word[WORDLIMIT];
	int			i,wordindex;
	unsigned	wwidth,wheight,newpos;


	//
	// copy the next word into [word]
	//
	word[0] = *text++;
	wordindex = 1;
	while (*text>32)
	{
		word[wordindex] = *text++;
		if (++wordindex == WORDLIMIT)
			Quit ("PageLayout: Word limit exceeded");
	}
	word[wordindex] = 0;		// stick a null at end for C

	//
	// see if it fits on this line
	//
	VW_MeasurePropString (word,&wwidth,&wheight);

	while (px+wwidth > rightmargin[rowon])
	{
		NewLine ();
		if (layoutdone)
			return;		// overflowed page
	}

	//
	// print it
	//
	newpos = px+wwidth;
	VWB_DrawPropString (word);
	px = newpos;

	//
	// suck up any extra spaces
	//
	while (*text == ' ')
	{
		px += SPACEWIDTH;
		text++;
	}
}

/*
=====================
=
= PageLayout
=
= Clears the screen, draws the pics on the page, and word wraps the text.
= Returns a pointer to the terminating command
=
=====================
*/

void PageLayout (boolean shownumber)
{
	int		i,oldfontcolor;
	char	ch;

	oldfontcolor = fontcolor;

	fontcolor = 0;

//
// clear the screen
//
	VWB_Bar (0,0,320,200,BACKCOLOR);
	VWB_DrawPic (0,0,H_TOPWINDOWPIC);
	VWB_DrawPic (0,8,H_LEFTWINDOWPIC);
	VWB_DrawPic (312,8,H_RIGHTWINDOWPIC);
	VWB_DrawPic (8,176,H_BOTTOMINFOPIC);


	for (i=0;i<TEXTROWS;i++)
	{
		leftmargin[i] = LEFTMARGIN;
		rightmargin[i] = SCREENPIXWIDTH-RIGHTMARGIN;
	}

	px = LEFTMARGIN;
	py = TOPMARGIN;
	rowon = 0;
	layoutdone = false;

//
// make sure we are starting layout text (^P first command)
//
	while (*text <= 32)
		text++;

	if (*text != '^' || toupper(*++text) != 'P')
		Quit ("PageLayout: Text not headed with ^P");

	while (*text++ != '\n')
	;


//
// process text stream
//
	do
	{
		ch = *text;

		if (ch == '^')
			HandleCommand ();
		else
		if (ch == 9)
		{
		 px = (px+8)&0xf8;
		 text++;
		}
		else if (ch <= 32)
			HandleCtrls ();
		else
			HandleWord ();

	} while (!layoutdone);

	pagenum++;

	if (shownumber)
	{
		#ifdef SPANISH
		strcpy (str,"Hoja ");
		itoa (pagenum,str2,10);
		strcat (str,str2);
		strcat (str," de ");
		py = 183;
		px = 208;
		#else
		strcpy (str,"pg ");
		itoa (pagenum,str2,10);
		strcat (str,str2);
		strcat (str," of ");
		py = 183;
		px = 213;
		#endif
		itoa (numpages,str2,10);
		strcat (str,str2);
		fontcolor = 0x4f; 			   //12^BACKCOLOR;

		VWB_DrawPropString (str);
	}

	fontcolor = oldfontcolor;
}

//===========================================================================

/*
=====================
=
= BackPage
=
= Scans for a previous ^P
=
=====================
*/

void BackPage (void)
{
	pagenum--;
	do
	{
		text--;
		if (*text == '^' && toupper(*(text+1)) == 'P')
			return;
	} while (1);
}


//===========================================================================


/*
=====================
=
= CacheLayoutGraphics
=
= Scans an entire layout file (until a ^E) marking all graphics used, and
= counting pages, then caches the graphics in
=
=====================
*/
void CacheLayoutGraphics (void)
{
	char	far *bombpoint, far *textstart;
	char	ch;

	textstart = text;
	bombpoint = text+30000;
	numpages = pagenum = 0;

	do
	{
		if (*text == '^')
		{
			ch = toupper(*++text);
			if (ch == 'P')		// start of a page
				numpages++;
			if (ch == 'E')		// end of file, so load graphics and return
			{
				CA_MarkGrChunk(H_TOPWINDOWPIC);
				CA_MarkGrChunk(H_LEFTWINDOWPIC);
				CA_MarkGrChunk(H_RIGHTWINDOWPIC);
				CA_MarkGrChunk(H_BOTTOMINFOPIC);
				CA_CacheMarks ();
				text = textstart;
				return;
			}
			if (ch == 'G')		// draw graphic command, so mark graphics
			{
				ParsePicCommand ();
				CA_MarkGrChunk (picnum);
			}
			if (ch == 'T')		// timed draw graphic command, so mark graphics
			{
				ParseTimedCommand ();
				CA_MarkGrChunk (picnum);
			}
		}
		else
			text++;

	} while (text<bombpoint);

	Quit ("CacheLayoutGraphics: No ^E to terminate file!");
}
#endif


/*
=====================
=
= ShowArticle
=
=====================
*/

#ifdef JAPAN
void ShowArticle (int which)
#else
void ShowArticle (char far *article)
#endif
{
	#ifdef JAPAN
	int		snames[10] = {	H_HELP1PIC,
							H_HELP2PIC,
							H_HELP3PIC,
							H_HELP4PIC,
							H_HELP5PIC,
							H_HELP6PIC,
							H_HELP7PIC,
							H_HELP8PIC,
							H_HELP9PIC,
							H_HELP10PIC};
	int		enames[14] = {
							0,0,
							#ifndef JAPDEMO
							C_ENDGAME1APIC,
							C_ENDGAME1BPIC,
							C_ENDGAME2APIC,
							C_ENDGAME2BPIC,
							C_ENDGAME3APIC,
							C_ENDGAME3BPIC,
							C_ENDGAME4APIC,
							C_ENDGAME4BPIC,
							C_ENDGAME5APIC,
							C_ENDGAME5BPIC,
							C_ENDGAME6APIC,
							C_ENDGAME6BPIC
							#endif
							};
	#endif
	unsigned	oldfontnumber;
	unsigned	temp;
	boolean 	newpage,firstpage;

	#ifdef JAPAN
	pagenum = 1;
	if (!which)
		numpages = 10;
	else
		numpages = 2;

	#else

	text = article;
	oldfontnumber = fontnumber;
	fontnumber = 0;
	CA_MarkGrChunk(STARTFONT);
	VWB_Bar (0,0,320,200,BACKCOLOR);
	CacheLayoutGraphics ();
	#endif

	newpage = true;
	firstpage = true;

	do
	{
		if (newpage)
		{
			newpage = false;
			#ifdef JAPAN
			if (!which)
				CA_CacheScreen(snames[pagenum - 1]);
			else
				CA_CacheScreen(enames[which*2 + pagenum - 1]);
			#else
			PageLayout (true);
			#endif
			VW_UpdateScreen ();
			if (firstpage)
			{
				VL_FadeIn(0,255,&gamepal,10);
				// VW_FadeIn ()
				firstpage = false;
			}
		}

		LastScan = 0;
		while (!LastScan)
		;

		switch (LastScan)
		{
		case sc_UpArrow:
		case sc_PgUp:
		case sc_LeftArrow:
			if (pagenum>1)
			{
				#ifndef JAPAN
				BackPage ();
				BackPage ();
				#else
				pagenum--;
				#endif
				newpage = true;
			}
			break;

		case sc_Enter:
		case sc_DownArrow:
		case sc_PgDn:
		case sc_RightArrow:		// the text allready points at next page
			if (pagenum<numpages)
			{
				newpage = true;
				#ifdef JAPAN
				pagenum++;
				#endif
			}
			break;
		}

		#ifndef SPEAR
		if (Keyboard[sc_Tab] && Keyboard[sc_P] && MS_CheckParm("goobers"))
			PicturePause();
		#endif

	} while (LastScan != sc_Escape);

	IN_ClearKeysDown ();
	fontnumber = oldfontnumber;
}


//===========================================================================

#ifndef JAPAN
#ifdef ARTSEXTERN
int 	endextern = T_ENDART1;
#ifndef SPEAR
int		helpextern = T_HELPART;
#endif
#endif
char helpfilename[13] = "HELPART.",
	 endfilename[13] = "ENDART1.";
#endif

/*
=================
=
= HelpScreens
=
=================
*/
#ifndef SPEAR
void HelpScreens (void)
{
	int			artnum;
	char far 	*text;
	memptr		layout;


	CA_UpLevel ();
	MM_SortMem ();
#ifdef JAPAN
	ShowArticle (0);
	VW_FadeOut();
	FreeMusic ();
	CA_DownLevel ();
	MM_SortMem ();
#else




#ifdef ARTSEXTERN
	artnum = helpextern;
	CA_CacheGrChunk (artnum);
	text = (char _seg *)grsegs[artnum];
	MM_SetLock (&grsegs[artnum], true);
#else
	CA_LoadFile (helpfilename,&layout);
	text = (char _seg *)layout;
	MM_SetLock (&layout, true);
#endif

	ShowArticle (text);

#ifdef ARTSEXTERN
	MM_FreePtr (&grsegs[artnum]);
#else
	MM_FreePtr (&layout);
#endif



	VW_FadeOut();

	FreeMusic ();
	CA_DownLevel ();
	MM_SortMem ();
#endif
}
#endif

//
// END ARTICLES
//
void EndText (void)
{
	int			artnum;
	char far 	*text;
	memptr		layout;


	ClearMemory ();

	CA_UpLevel ();
	MM_SortMem ();
#ifdef JAPAN
	ShowArticle(gamestate.episode + 1);

	VW_FadeOut();

	SETFONTCOLOR(0,15);
	IN_ClearKeysDown();
	if (MousePresent)
		Mouse(MDelta);	// Clear accumulated mouse movement

	FreeMusic ();
	CA_DownLevel ();
	MM_SortMem ();
#else



#ifdef ARTSEXTERN
	artnum = endextern+gamestate.episode;
	CA_CacheGrChunk (artnum);
	text = (char _seg *)grsegs[artnum];
	MM_SetLock (&grsegs[artnum], true);
#else
	endfilename[6] = '1'+gamestate.episode;
	CA_LoadFile (endfilename,&layout);
	text = (char _seg *)layout;
	MM_SetLock (&layout, true);
#endif

	ShowArticle (text);

#ifdef ARTSEXTERN
	MM_FreePtr (&grsegs[artnum]);
#else
	MM_FreePtr (&layout);
#endif


	VW_FadeOut();
	SETFONTCOLOR(0,15);
	IN_ClearKeysDown();
	if (MousePresent)
		Mouse(MDelta);	// Clear accumulated mouse movement

	FreeMusic ();
	CA_DownLevel ();
	MM_SortMem ();
#endif
}