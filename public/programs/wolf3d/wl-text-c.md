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
description: "This file handles text formatting and layout for Wolfenstein 3D, showcasing the ingenuity required to create immersive in-game storytelling on constrained hardware."

summary:
  - point: "Custom text formatting commands for in-game layouts"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"
  - point: "Efficient word wrapping and margin adjustments for 320x200 resolution"
    link: "https://en.wikipedia.org/wiki/Graphics_display_resolution"
    link_label: "Graphics display resolution"
  - point: "Integration of graphics and text for seamless storytelling"
    link: "https://en.wikipedia.org/wiki/Video_game_graphics"
    link_label: "Video game graphics"

enhancements:
  - id: "text-formatting-commands"
    line_start: 9
    line_end: 49
    title: "Custom text formatting commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    image_url: ""
    image_caption: ""
    content: "This section defines the text formatting commands used to control the appearance and layout of text in Wolfenstein 3D. Commands like '^C' for changing text color and '^P' for starting a new page allowed developers to create dynamic and visually engaging in-game storytelling. In 1992, text formatting was a critical part of game design, especially for games running on MS-DOS with limited graphical capabilities. The developers had to ensure that text could be displayed clearly and consistently on a 320x200 screen resolution. These commands reflect the team's focus on optimizing user experience within the constraints of the hardware. The approach laid the groundwork for future games that integrated text and graphics seamlessly."
  - id: "rip-to-eol-subroutine"
    line_start: 71
    line_end: 75
    title: "Scanning to end of line"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_character"
    image_url: ""
    image_caption: ""
    content: "The RipToEOL subroutine scans through the text buffer until it encounters a newline character. This simple yet essential function is part of the game's text parsing system, enabling commands and text to be processed line by line. In the early 1990s, parsing text efficiently was critical for games like Wolfenstein 3D, which relied on real-time processing to maintain smooth gameplay. The developers optimized every aspect of the code to ensure minimal overhead, even for seemingly trivial operations like this one. This approach reflects the team's deep understanding of MS-DOS programming and their commitment to performance."
  - id: "parse-number-subroutine"
    line_start: 86
    line_end: 110
    title: "Extracting numbers from text"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "The ParseNumber function extracts numeric values from the text buffer, converting them from ASCII characters into integers. This is crucial for interpreting commands that include coordinates or other numeric parameters. In 1992, parsing text efficiently was a common challenge for game developers, as it directly impacted performance. The function's design reflects the team's focus on minimizing processing time while ensuring accuracy. This method of parsing numbers became a standard practice in many games of the era, demonstrating id Software's influence on programming techniques."
  - id: "handle-command-subroutine"
    line_start: 186
    line_end: 287
    title: "Processing text commands dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "HandleCommand interprets and executes text commands embedded in the game's layout files. Commands like '^B' for drawing a bar or '^G' for placing graphics allowed the developers to create dynamic and visually engaging pages. This subroutine showcases the team's ingenuity in designing a flexible system for combining text and graphics. In the early 1990s, such systems were rare and required careful planning to ensure compatibility with limited hardware. The approach used here influenced later games that sought to integrate text and graphics seamlessly."
  - id: "page-layout-subroutine"
    line_start: 412
    line_end: 516
    title: "Rendering pages with text and graphics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Page_layout"
    image_url: ""
    image_caption: ""
    content: "PageLayout is the core function for rendering text and graphics on a single page. It clears the screen, sets up margins, processes commands, and handles word wrapping. This subroutine reflects the team's meticulous attention to detail in creating an immersive experience within the constraints of MS-DOS. By combining text and graphics dynamically, the developers pushed the boundaries of what was possible on a 320x200 resolution. The techniques used here influenced later games that sought to integrate storytelling and gameplay seamlessly."
  - id: "cache-layout-graphics"
    line_start: 543
    line_end: 598
    title: "Caching graphics for layout efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Cache_(computing)"
    image_url: ""
    image_caption: ""
    content: "CacheLayoutGraphics scans the layout file to identify and cache all graphics used in the text pages. This ensures that graphics are loaded into memory before rendering, minimizing delays during gameplay. In 1992, memory management was a critical aspect of game development, especially for MS-DOS systems with limited RAM. The caching system here reflects the team's expertise in optimizing performance and resource usage. This approach became a standard practice in later games, highlighting id Software's influence on the industry."
  - id: "show-article-subroutine"
    line_start: 601
    line_end: 729
    title: "Displaying articles with interactive navigation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interactive_storytelling"
    image_url: ""
    image_caption: ""
    content: "ShowArticle displays multi-page articles with interactive navigation, allowing players to move between pages using keyboard inputs. This feature highlights the team's focus on creating an engaging user experience. In the early 1990s, interactive storytelling was still in its infancy, and features like this helped set Wolfenstein 3D apart from other games. The subroutine's design reflects the team's commitment to innovation and their understanding of player needs. This approach influenced later games that sought to combine storytelling with interactivity."

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