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
description: "This file handles text formatting, layout, and rendering for Wolfenstein 3D's in-game articles and help screens."

summary:
  - point: "Implements text formatting commands for dynamic layouts"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Introduces a system for handling text and graphics together"
    link: "https://en.wikipedia.org/wiki/Computer_graphics"
    link_label: "Computer Graphics"
  - point: "Optimizes rendering for constrained MS-DOS hardware"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Pioneers techniques for interactive help screens in games"
    link: "https://en.wikipedia.org/wiki/Video_game_design"
    link_label: "Video Game Design"

enhancements:
  - id: "text-formatting-commands"
    line_start: 6
    line_end: 49
    title: "Text Commands That Controlled Layouts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section defines the text formatting commands used throughout Wolfenstein 3D's article and help screens. Commands like '^C' for changing text color and '^G' for drawing graphics allowed developers to dynamically control how text and images were displayed. At the time, MS-DOS systems lacked sophisticated graphical interfaces, so developers had to create their own systems for rendering text and graphics together. These commands were a clever abstraction, enabling layouts to be defined in a simple text-based format. The approach influenced later games, which adopted similar systems for in-game text rendering and layout management."
  - id: "rip-to-eol"
    line_start: 69
    line_end: 75
    title: "The Routine That Skipped Lines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "The `RipToEOL` function scans text until it reaches the end of a line, effectively skipping over irrelevant data. This was a simple yet essential utility for parsing text commands. In the early 1990s, text parsing was a common challenge due to limited memory and processing power. By efficiently handling line breaks, this function ensured smooth operation of the game's text rendering system. Techniques like this became standard in text processing libraries, influencing how developers approached parsing in constrained environments."
  - id: "parse-number"
    line_start: 84
    line_end: 110
    title: "Extracting Numbers from Text Streams"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parsing"
    image_url: ""
    image_caption: ""
    content: "The `ParseNumber` function extracts numeric values from a text stream. It scans for digits, assembles them into a string, and converts the result into an integer. This was crucial for interpreting commands like '^Gyyy,xxx,ppp', where numbers specified coordinates and graphics IDs. Parsing numbers efficiently was a key requirement in early game engines, where performance and memory constraints dictated every decision. This technique laid the groundwork for more sophisticated parsers in later engines, such as those used in Quake and Unreal."
  - id: "timed-pic-command"
    line_start: 153
    line_end: 175
    title: "Graphics with Built-In Delays"
    wikipedia_url: "https://en.wikipedia.org/wiki/Double_buffering"
    image_url: ""
    image_caption: ""
    content: "The `TimedPicCommand` function draws a graphic on the screen after a specified delay. It uses the `VW_UpdateScreen` function to refresh the display and waits for a timer to elapse before rendering the image. This technique allowed Wolfenstein 3D to create dynamic visual effects, such as timed animations or transitions. The use of delays and screen updates was a precursor to double buffering and other advanced rendering techniques that became standard in later games. Developers studying this code learned how to synchronize graphics with gameplay events, a skill that shaped the evolution of real-time rendering."
  - id: "handle-command"
    line_start: 184
    line_end: 278
    title: "Interpreting Text Commands for Layouts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `HandleCommand` function interprets text commands embedded in the layout stream. Commands like '^P' for starting a new page and '^C' for changing text color are parsed and executed. This modular approach allowed designers to define complex layouts without modifying the underlying code. In the early 1990s, embedding commands within text files was a common technique for separating content from logic. This function exemplifies how Wolfenstein 3D's developers balanced flexibility and performance, influencing later engines that adopted similar scripting systems for content management."
  - id: "page-layout"
    line_start: 410
    line_end: 504
    title: "Rendering Pages with Word Wrapping"
    wikipedia_url: "https://en.wikipedia.org/wiki/Word_wrap"
    image_url: ""
    image_caption: ""
    content: "The `PageLayout` function clears the screen, draws graphics, and wraps text to fit within defined margins. It ensures that text does not overflow the page, dynamically adjusting margins and starting new lines as needed. This was a significant challenge on MS-DOS systems, where developers had to manually calculate text positions and handle overflow. The word wrapping algorithm here influenced later text rendering systems, including those in modern game engines. By solving the problem of dynamic text layout, Wolfenstein 3D set a precedent for how games could present readable, visually appealing text."
  - id: "cache-layout-graphics"
    line_start: 533
    line_end: 586
    title: "Preloading Graphics for Faster Rendering"
    wikipedia_url: "https://en.wikipedia.org/wiki/Texture_caching"
    image_url: ""
    image_caption: ""
    content: "The `CacheLayoutGraphics` function scans the layout file for all graphics commands and preloads the necessary assets into memory. By caching graphics ahead of time, the game minimized delays during rendering, ensuring smooth transitions between pages. This technique was critical on MS-DOS systems, where disk access was slow and memory was limited. Preloading assets became a standard practice in game development, influencing how modern engines handle texture and model caching. The efficiency achieved here contributed to Wolfenstein 3D's reputation for fast, fluid gameplay."
  - id: "show-article"
    line_start: 590
    line_end: 723
    title: "Interactive Help Screens with Page Navigation"
    wikipedia_url: "https://en.wikipedia.org/wiki/User_interface_design"
    image_url: ""
    image_caption: ""
    content: "The `ShowArticle` function displays in-game articles and help screens, allowing players to navigate between pages using keyboard inputs. It integrates text rendering, graphics, and user interaction into a cohesive system. This was a novel feature in 1992, providing players with detailed instructions and lore within the game itself. The interactive nature of these screens influenced later games, which adopted similar systems for tutorials and story exposition. By combining usability with performance, Wolfenstein 3D demonstrated how thoughtful design could enhance the player experience."
  - id: "help-screens"
    line_start: 745
    line_end: 794
    title: "Dynamic Help Screens for Player Guidance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Help_system"
    image_url: ""
    image_caption: ""
    content: "The `HelpScreens` function loads and displays help content, providing players with guidance on game mechanics and controls. It uses the `ShowArticle` function to render text and graphics, ensuring a consistent presentation across all help screens. This feature was an early example of in-game documentation, reducing the need for external manuals. By embedding help systems directly into the game, Wolfenstein 3D set a precedent for accessible design, influencing how developers approached player onboarding in later titles."
  - id: "end-text"
    line_start: 800
    line_end: 859
    title: "Ending the Game with Story Text"
    wikipedia_url: "https://en.wikipedia.org/wiki/Video_game_endings"
    image_url: ""
    image_caption: ""
    content: "The `EndText` function displays the game's ending text, providing players with a sense of closure and accomplishment. It loads the appropriate content based on the player's progress and renders it using the same layout system as the help screens. This feature highlights the importance of narrative in games, even in action-oriented titles like Wolfenstein 3D. By delivering a memorable ending, the developers ensured that players left the game with a lasting impression. The use of text-based endings influenced later games, which adopted similar techniques to conclude their stories."

---

```asm
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
```
