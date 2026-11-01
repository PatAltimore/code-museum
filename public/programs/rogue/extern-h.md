---
title: "extern.h"
program: "Rogue"
program_slug: "rogue"
file_path: "extern.h"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/extern.h"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "extern-h"
order: 3
description: "Platform switches, the random number generator and the machine-dependent function list."

summary:
  - point: "The same code builds for POSIX, Windows, Cygwin and DOS by setting HAVE_ macros per platform"
    link: "https://en.wikipedia.org/wiki/ASCII"
    link_label: "ASCII"
  - point: "The game's random numbers come from a two-line linear congruential generator"
    link: "https://en.wikipedia.org/wiki/Linear_congruential_generator"
    link_label: "Linear congruential generator"

enhancements:
  - id: "platforms"
    line_start: 14
    line_end: 94
    title: "One Source, Four Operating Systems"
    wikipedia_url: "https://en.wikipedia.org/wiki/Curses_(programming_library)"
    image_url: ""
    image_caption: ""
    content: "The top of the header picks the feature macros the code needs. If a configure script produced config.h it is used. Otherwise the file decides by compiler: the DJGPP build for DOS, a Windows build that needs curses and term headers, a Cygwin build with its own list, and a general POSIX build that assumes users and groups, password prompts, fork, load averages and an alarm clock. Each define says that a library function exists, and the portable layer in mdport.c compiles the matching code. This is how a program that began on a 1980 Unix workstation came to build on a 1999 Windows PC with the same sources."
  - id: "random"
    line_start: 96
    line_end: 113
    title: "Random Numbers Without a Library"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linear_congruential_generator"
    image_url: ""
    image_caption: ""
    content: "MAXSTR, MAXLINES and MAXCOLS are the sizes everything else relies on, with a warning that they are used in many places. RN is the game's whole random-number generator: it multiplies the seed by 11109, adds 13849, shifts right 16 bits and keeps the low 16. It is a linear congruential generator on the seed variable, whose value is set from the time and process number in main. Because it is the game's own, a given seed always produces the same dungeon on every platform, which is what wizard mode's SEED variable exploits. CTRL turns a letter into a control character."
  - id: "md-layer"
    line_start: 115
    line_end: 196
    title: "The Machine-Dependent Layer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Curses_(programming_library)"
    image_url: ""
    image_caption: ""
    content: "The rest of the header lists globals for terminal state and the user's name, game routines such as the daemons, and finally every function with an md_ prefix. These are the places where the game touches the operating system: find the home directory and user name, read a password, change a file's mode, encrypt a string, handle the suspend signal, escape to a shell, check for a symbolic link, and drop special privileges. Everything the game needs from the OS goes through this short list, so a port only has to rewrite one file, mdport.c."
---

```c
/*
 * Defines for things used in mach_dep.c
 *
 * @(#)extern.h	4.35 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */


#ifdef HAVE_CONFIG_H
#ifdef PDCURSES
#undef HAVE_UNISTD_H
#undef HAVE_LIMITS_H
#undef HAVE_MEMORY_H
#undef HAVE_STRING_H
#endif
#include "config.h"
#elif defined(__DJGPP__)
#define HAVE_SYS_TYPES_H 1
#define HAVE_PROCESS_H 1
#define HAVE_PWD_H 1
#define HAVE_TERMIOS_H 1
#define HAVE_SETGID 1
#define HAVE_GETGID 1
#define HAVE_SETUID 1
#define HAVE_GETUID 1
#define HAVE_GETPASS 1
#define HAVE_SPAWNL 1
#define HAVE_ALARM 1
#define HAVE_ERASECHAR 1
#define HAVE_KILLCHAR 1
#elif defined(_WIN32)
#define HAVE_CURSES_H
#define HAVE_TERM_H
#define HAVE__SPAWNL
#define HAVE_SYS_TYPES_H
#define HAVE_PROCESS_H
#define HAVE_ERASECHAR 1
#define HAVE_KILLCHAR 1
#elif defined(__CYGWIN__)
#define HAVE_SYS_TYPES_H 1
#define HAVE_PWD_H 1
#define HAVE_PWD_H 1
#define HAVE_SYS_UTSNAME_H 1
#define HAVE_ARPA_INET_H 1
#define HAVE_UNISTD_H 1
#define HAVE_TERMIOS_H 1
#define HAVE_NCURSES_TERM_H 1
#define HAVE_ESCDELAY
#define HAVE_SETGID 1
#define HAVE_GETGID 1
#define HAVE_SETUID 1
#define HAVE_GETUID 1
#define HAVE_GETPASS 1
#define HAVE_GETPWUID 1
#define HAVE_WORKING_FORK 1
#define HAVE_ALARM 1
#define HAVE_SPAWNL 1
#define HAVE__SPAWNL 1
#define HAVE_ERASECHAR 1
#define HAVE_KILLCHAR 1
#else /* POSIX */
#define HAVE_SYS_TYPES_H 1
#define HAVE_PWD_H 1
#define HAVE_PWD_H 1
#define HAVE_SYS_UTSNAME_H 1
#define HAVE_ARPA_INET_H 1
#define HAVE_UNISTD_H 1
#define HAVE_TERMIOS_H 1
#define HAVE_TERM_H 1
#define HAVE_SETGID 1
#define HAVE_GETGID 1
#define HAVE_SETUID 1
#define HAVE_GETUID 1
#define HAVE_SETREUID 1
#define HAVE_SETREGID 1
#define HAVE_GETPASS 1
#define HAVE_GETPWUID 1
#define HAVE_WORKING_FORK 1
#define HAVE_ERASECHAR 1
#define HAVE_KILLCHAR 1
#ifndef _AIX
#define HAVE_GETLOADAVG 1
#endif
#define HAVE_ALARM 1
#endif

#ifdef __DJGPP__
#undef HAVE_GETPWUID /* DJGPP's limited version doesn't even work as documented */
#endif

/*
 * Don't change the constants, since they are used for sizes in many
 * places in the program.
 */

#include <stdlib.h>

#undef SIGTSTP

#define MAXSTR		1024	/* maximum length of strings */
#define MAXLINES	32	/* maximum number of screen lines used */
#define MAXCOLS		80	/* maximum number of screen columns used */

#define RN		(((seed = seed*11109+13849) >> 16) & 0xffff)
#ifdef CTRL
#undef CTRL
#endif
#define CTRL(c)		(c & 037)

/*
 * Now all the global variables
 */

extern bool	got_ltc, in_shell;
extern int	wizard;
extern char	fruit[], prbuf[], whoami[];
extern int orig_dsusp;
extern FILE	*scoreboard;

/*
 * Function types
 */

void    auto_save(int);
void	come_down();
void	doctor();
void	end_line();
void    endit(int sig);
void	fatal();
void	getltchars();
void	land();
void    leave(int);
void	my_exit();
void	nohaste();
void	playit();
void    playltchars(void);
void	print_disc(char);
void    quit(int);
void    resetltchars(void);
void	rollwand();
void	runners();
void	set_order();
void	sight();
void	stomach();
void	swander();
void	tstp(int ignored);
void	unconfuse();
void	unsee();
void	visuals();

char	add_line(char *fmt, char *arg);

char	*killname(char monst, bool doart);
char	*nothing(char type);
char	*type_name(int type);

#ifdef CHECKTIME
int	checkout();
#endif

int	md_chmod(char *filename, int mode);
char	*md_crypt(char *key, char *salt);
int	md_dsuspchar();
int	md_erasechar();
char	*md_gethomedir();
char	*md_getusername();
int	md_getuid();
char	*md_getpass(char *prompt);
int	md_getpid();
char	*md_getrealname(int uid);
void	md_init();
int	md_killchar();
void	md_normaluser();
void	md_raw_standout();
void	md_raw_standend();
int	md_readchar();
int	md_setdsuspchar(int c);
int	md_shellescape();
void	md_sleep(int s);
int	md_suspchar();
int	md_hasclreol();
int	md_unlink(char *file);
int	md_unlink_open_file(char *file, FILE *inf);
void md_tstpsignal();
void md_tstphold();
void md_tstpresume();
void md_ignoreallsignals();
void md_onsignal_autosave();
void md_onsignal_exit();
void md_onsignal_default();
int md_issymlink(char *sp);
```
