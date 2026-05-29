---
title: "ID_SD.C"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/ID_SD.C"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/ID_SD.C"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "id-sd-c"
order: 4
description: "This file showcases the sound management system for Wolfenstein 3D, a groundbreaking title that pushed the limits of MS-DOS hardware in 1992."

summary:
  - point: "Introduced efficient sound handling for multiple hardware devices"
    link: "https://en.wikipedia.org/wiki/Sound_Blaster"
    link_label: "Sound Blaster"
  - point: "Used assembly and C for low-level hardware interaction"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Optimized audio playback for AdLib, SoundBlaster, and PC speaker"
    link: "https://en.wikipedia.org/wiki/AdLib"
    link_label: "AdLib"
  - point: "Implemented interrupt-driven sound playback"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Demonstrated clever DMA programming for audio streaming"
    link: "https://en.wikipedia.org/wiki/Direct_memory_access"
    link_label: "DMA"

enhancements:
  - id: "sound-finished-macro"
    line_start: 173
    line_end: 199
    title: "The Macro That Silences Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Macro_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `SDL_SoundFinished` macro resets the sound system by clearing the `SoundNumber` and `SoundPriority` variables. This simple one-liner encapsulates the idea of quickly halting audio playback without additional overhead. In the context of 1992, when Wolfenstein 3D was developed, efficient sound management was crucial due to the limited processing power of MS-DOS systems running on Intel 386 processors. By using macros, the developers avoided function call overhead and ensured that sound-related operations were fast and predictable. This approach reflects the era's emphasis on squeezing maximum performance from hardware. The macro's simplicity and effectiveness influenced later game engines, where similar mechanisms were used to manage audio states efficiently."
  - id: "soundblaster-dma-programming"
    line_start: 288
    line_end: 338
    title: "DMA Programming for Seamless Audio Playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Direct_memory_access"
    image_url: ""
    image_caption: ""
    content: "The `SDL_SBPlaySeg` function programs the SoundBlaster's DMA controller to play a chunk of sampled sound. It ensures that the sound data does not cross a memory bank boundary, a critical consideration for hardware of the time. The function calculates the data's page and offset, configures the DMA controller, and initiates playback by sending commands to the SoundBlaster DSP. This low-level manipulation of the DMA controller highlights the ingenuity required to achieve smooth audio playback on MS-DOS systems. In 1992, sound cards like the SoundBlaster were becoming standard, but programming them required intimate knowledge of their hardware registers and quirks. This function exemplifies how id Software leveraged hardware capabilities to deliver immersive audio experiences. Techniques like these laid the groundwork for modern audio APIs, abstracting such complexities from developers."
  - id: "interrupt-driven-audio-service"
    line_start: 340
    line_end: 370
    title: "Interrupts: The Backbone of Real-Time Audio"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `SDL_SBService` function handles SoundBlaster DMA interrupts, ensuring continuous audio playback. When an interrupt occurs, the function acknowledges it and processes the next segment of audio data. If no data remains, it stops the sample and signals that playback is complete. Interrupt-driven audio was a necessity in the early 1990s, as it allowed the CPU to perform other tasks while audio played in the background. This approach reflects the constraints of MS-DOS systems, where multitasking was limited and every cycle counted. By using interrupts, id Software achieved smooth audio playback without monopolizing the CPU. This technique influenced later sound systems, including those in Windows and Linux, where interrupt-driven architectures remain foundational for real-time audio processing."
  - id: "soundblaster-detection"
    line_start: 490
    line_end: 525
    title: "Finding the SoundBlaster in a Sea of Ports"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_Blaster"
    image_url: ""
    image_caption: ""
    content: "The `SDL_DetectSoundBlaster` function scans for a SoundBlaster card by probing various I/O ports. If the user specifies a port, it checks that directly; otherwise, it scans through all possible locations. This function demonstrates the challenges of hardware detection in the early PC era, where devices lacked standardized plug-and-play interfaces. Developers had to manually query hardware registers and interpret responses to determine device presence. The SoundBlaster was a dominant sound card in the early 1990s, and ensuring compatibility with it was vital for games like Wolfenstein 3D. This detection logic reflects the meticulous attention to detail required to support a wide range of hardware configurations. The approach influenced later systems, eventually leading to the development of standardized detection protocols like PCI and USB."
  - id: "pc-speaker-sample-playback"
    line_start: 829
    line_end: 841
    title: "Making the PC Speaker Sing"
    wikipedia_url: "https://en.wikipedia.org/wiki/PC_speaker"
    image_url: ""
    image_caption: ""
    content: "The `SDL_PCPlaySample` function plays a sampled sound on the PC speaker, a primitive audio device built into early IBM-compatible PCs. It sets up the sample data and length, then enables the speaker for playback. The PC speaker was limited to simple beeps and tones, but clever programming techniques allowed developers to simulate more complex sounds. By rapidly toggling the speaker's state, games like Wolfenstein 3D could produce rudimentary sound effects, enhancing the player's experience. This function highlights id Software's resourcefulness in using every available hardware feature to its fullest. While the PC speaker was eventually replaced by dedicated sound cards, the techniques developed for it influenced early audio programming and demonstrated the potential of software-driven sound synthesis."
  - id: "digitized-sound-loading"
    line_start: 991
    line_end: 1025
    title: "Loading Digitized Sounds into Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Digital_audio"
    image_url: ""
    image_caption: ""
    content: "The `SDL_LoadDigiSegment` function loads a segment of digitized sound into memory, locking the page to prevent it from being swapped out. This ensures that the sound data remains accessible during playback. Digitized sound was a major advancement in gaming audio, allowing developers to include realistic sound effects and voice clips. In 1992, memory management was a critical concern, as most PCs had limited RAM and no virtual memory. By locking sound pages, id Software avoided playback interruptions caused by memory paging. This function reflects the era's emphasis on optimizing memory usage and ensuring reliability. The ability to play digitized sounds contributed to Wolfenstein 3D's immersive atmosphere and influenced the adoption of similar techniques in later games, including Doom and Quake."
  - id: "stop-digitized-sound"
    line_start: 1044
    line_end: 1081
    title: "How Wolfenstein 3D Stopped Sounds Mid-Game"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_Blaster"
    image_url: ""
    image_caption: ""
    content: "The `SD_StopDigitized` function halts playback of digitized sound effects, ensuring that no lingering audio disrupts gameplay. It clears various state variables, such as `DigiPlaying` and `DigiMissed`, and invokes device-specific stop routines depending on the active sound mode (`sds_PC`, `sds_SoundSource`, or `sds_SoundBlaster`). The use of inline assembly (`asm pushf` and `asm cli`) disables interrupts temporarily, preventing timing issues during the cleanup process. In the early 1990s, sound hardware like the SoundBlaster was becoming a standard, but programming it required careful handling of registers and memory. This function reflects the meticulous attention to detail required to manage sound hardware directly. By ensuring clean transitions between sound effects, this routine contributed to the immersive experience of Wolfenstein 3D. Techniques like these influenced later game engines, including id Software's Doom engine, which also prioritized seamless audio integration."
  - id: "polling-digitized-sound"
    line_start: 1083
    line_end: 1106
    title: "Polling for Smooth Sound Playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Digital_audio"
    image_url: ""
    image_caption: ""
    content: "The `SD_Poll` function manages the playback of digitized sound by checking if additional sound data needs to be loaded and played. It ensures that sound segments are loaded into memory (`SDL_LoadDigiSegment`) and played (`SDL_PlayDigiSegment`) in a timely manner. This polling mechanism was crucial for maintaining smooth audio playback on hardware with limited processing power and memory. In the early 1990s, games often relied on polling loops to manage hardware interactions, as interrupt-driven approaches were less common due to complexity. This function exemplifies how Wolfenstein 3D balanced performance and simplicity in its audio subsystem. The polling approach influenced other games of the era, particularly those running on MS-DOS, where direct hardware control was necessary."
  - id: "set-sound-position"
    line_start: 1108
    line_end: 1127
    title: "Positioning Sounds in a 3D Space"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stereo_sound"
    image_url: ""
    image_caption: ""
    content: "The `SD_SetPosition` function adjusts the left and right audio channels to simulate sound positioning within the game world. It validates the input positions and calls `SDL_PositionSBP` for SoundBlaster-specific adjustments. This feature added a layer of immersion by allowing sounds to appear as though they were coming from specific directions relative to the player. In the early 1990s, stereo sound was a novel feature in games, and Wolfenstein 3D's implementation showcased how directional audio could enhance gameplay. This technique laid the groundwork for more advanced spatial audio systems in later games, including Quake and Unreal."
  - id: "play-digitized-sound"
    line_start: 1129
    line_end: 1162
    title: "Playing Digitized Sounds on Demand"
    wikipedia_url: "https://en.wikipedia.org/wiki/Digital_audio"
    image_url: ""
    image_caption: ""
    content: "The `SD_PlayDigitized` function initiates playback of a specific digitized sound effect, setting its position and loading the necessary data into memory. It uses the `DigiList` array to determine the sound's memory page and length, ensuring efficient handling of large audio files. This function highlights the challenges of working with limited memory and storage in the early 1990s, where sound data often had to be paged in and out of memory dynamically. By prioritizing performance and responsiveness, this routine contributed to Wolfenstein 3D's fast-paced gameplay. The approach influenced other games and engines, particularly those that needed to manage audio efficiently on constrained hardware."
  - id: "setup-digitized-sound"
    line_start: 1234
    line_end: 1262
    title: "Preparing Digitized Sound for Playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Digital_audio"
    image_url: ""
    image_caption: ""
    content: "The `SDL_SetupDigi` function initializes the digitized sound system by loading sound data into memory and preparing lookup tables (`DigiList` and `DigiMap`). It uses low-level memory management functions like `PM_UnlockMainMem` and `MM_GetPtr` to allocate and copy sound data. This setup process reflects the constraints of early MS-DOS systems, where memory management was a critical aspect of game development. By organizing sound data efficiently, this function enabled Wolfenstein 3D to deliver high-quality audio without compromising performance. The techniques used here influenced later games that relied on digitized sound, including Doom and Duke Nukem 3D."
  - id: "adlib-register-output"
    line_start: 1264
    line_end: 1331
    title: "Directly Programming the AdLib Card"
    wikipedia_url: "https://en.wikipedia.org/wiki/AdLib"
    image_url: ""
    image_caption: ""
    content: "The `alOut` function writes values directly to the AdLib sound card's registers, controlling its FM synthesis capabilities. It disables interrupts temporarily (`asm cli`) to ensure precise timing during register manipulation. This low-level approach was necessary in the early 1990s, as developers often had to program hardware directly to achieve desired effects. The AdLib card was one of the first widely adopted sound cards for PC gaming, and its FM synthesis capabilities were a major step forward in audio quality. By mastering the intricacies of AdLib programming, id Software set a precedent for other developers, paving the way for more sophisticated audio systems in games like Doom and Quake."
  - id: "detect-adlib-card"
    line_start: 1578
    line_end: 1621
    title: "How Wolfenstein 3D Found the AdLib Card"
    wikipedia_url: "https://en.wikipedia.org/wiki/AdLib"
    image_url: ""
    image_caption: ""
    content: "The `SDL_DetectAdLib` function checks for the presence of an AdLib sound card by writing and reading specific registers. It uses a combination of direct register manipulation and timing loops to verify the card's response. This detection routine ensured that Wolfenstein 3D could adapt to the player's hardware configuration, enabling or disabling features as needed. In the early 1990s, hardware detection was a common challenge for game developers, as PCs lacked standardized APIs for sound devices. By implementing robust detection routines, id Software ensured compatibility with a wide range of systems, contributing to the game's commercial success. This approach influenced later games and engines, which continued to prioritize hardware compatibility."
  - id: "startup-sound-manager"
    line_start: 1861
    line_end: 2003
    title: "Bootstrapping Audio for Wolfenstein 3D"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_Blaster"
    image_url: ""
    image_caption: ""
    content: "The `SD_Startup` function initializes the sound manager, detecting available hardware and setting up the necessary subsystems. It checks for AdLib, SoundBlaster, and Sound Source devices, configuring them based on environment variables and command-line parameters. This comprehensive startup routine reflects the complexity of audio management in the early 1990s, where developers had to account for a wide variety of hardware configurations. By ensuring robust detection and initialization, id Software maximized compatibility and delivered a seamless audio experience to players. The techniques used here influenced later games and engines, which continued to prioritize flexible hardware support."
  - id: "shutdown-audio-subsystem"
    line_start: 2056
    line_end: 2089
    title: "How Wolfenstein 3D Shut Down Audio"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_request_(IRQ)"
    image_url: ""
    image_caption: ""
    content: "This section of code handles the shutdown of the audio subsystem when the game exits or transitions to a state where sound is no longer needed. It disables sound playback, cleans up device resources, and restores the system timer interrupt vector to its original state. The use of assembly instructions (`pushf`, `cli`, `popf`) reflects the need for precise control over hardware interrupts, ensuring that the game does not leave the system in an unstable state. In 1992, managing hardware directly was common practice due to the lack of standardized APIs for sound devices. This approach allowed id Software to support multiple sound hardware configurations, including Sound Blaster and AdLib cards, which were popular among gamers at the time. The shutdown routine exemplifies the meticulous attention to system stability required in DOS programming, where improper cleanup could crash the user's machine. Techniques like these influenced later game engines, including id's own Doom engine, which also featured robust hardware management."
  - id: "set-user-hook-timer"
    line_start: 2091
    line_end: 2101
    title: "A Timer Hook for Real-Time Audio"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "This function allows the programmer to set a custom routine that the sound manager will call every 1/70th of a second, leveraging the timer interrupt. This capability was critical for real-time audio processing in Wolfenstein 3D, enabling precise synchronization of sound effects with gameplay events. At the time, games relied heavily on hardware interrupts to achieve real-time responsiveness, as CPUs lacked multitasking capabilities and dedicated sound processors were rare. By providing this hook, id Software gave developers flexibility to extend or modify the audio behavior without altering the core sound manager. This technique influenced later game engines, where similar hooks became standard practice for handling real-time events, including audio, physics, and AI."
  - id: "stereo-sound-positioning"
    line_start: 2103
    line_end: 2115
    title: "Stereo Sound in a 2D World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stereophonic_sound"
    image_url: ""
    image_caption: ""
    content: "This function sets up stereo positioning for sound effects, allowing sounds to be perceived as coming from specific directions. It adjusts the volume for the left and right audio channels, creating a rudimentary spatial audio effect. In the early 1990s, stereo sound was a novel feature for games, as most PC speakers were monophonic. By implementing stereo positioning, id Software enhanced the immersion of Wolfenstein 3D, making players feel more connected to the game's environment. This technique paved the way for more sophisticated spatial audio systems in later games, such as those found in 3D engines like Unreal Engine."
  - id: "play-sound-effects"
    line_start: 2117
    line_end: 2202
    title: "Playing Sounds Across Multiple Devices"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_Blaster"
    image_url: ""
    image_caption: ""
    content: "This function handles the playback of sound effects, supporting multiple hardware configurations, including PC speaker, AdLib, and Sound Blaster. It prioritizes sounds based on their importance, ensuring critical effects are heard even under resource constraints. The code includes assembly-level optimizations to manage hardware interrupts and prevent conflicts during playback. In the early 1990s, supporting diverse sound hardware was essential, as gamers had a wide range of setups. This flexibility contributed to Wolfenstein 3D's broad appeal and set a precedent for cross-hardware compatibility in games. Techniques like sound prioritization and hardware-specific optimizations influenced later engines, including the Doom engine, which further refined audio handling."
  - id: "check-sound-playing"
    line_start: 2204
    line_end: 2229
    title: "Is a Sound Still Playing?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Real-time_computing"
    image_url: ""
    image_caption: ""
    content: "This function checks whether a sound is currently playing and returns its identifier if so. It uses hardware-specific flags to determine the playback state, reflecting the low-level nature of audio programming in the DOS era. Real-time checks like these were crucial for synchronizing sound effects with gameplay, ensuring that overlapping sounds did not disrupt the player's experience. This approach influenced later game engines, where real-time audio state management became a standard feature."
  - id: "stop-sound-effects"
    line_start: 2231
    line_end: 2255
    title: "Stopping Sounds Without Crashing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "This function stops any currently playing sound, ensuring that resources are freed and the audio subsystem remains stable. It includes checks for digitized sound playback and hardware-specific routines for PC speaker and AdLib cards. Properly stopping sounds was critical in the DOS era, as failing to do so could leave hardware in an unstable state or cause crashes. The robust handling of sound termination in Wolfenstein 3D influenced later engines, where similar safeguards became standard practice."
  - id: "music-on-off"
    line_start: 2269
    line_end: 2278
    title: "Turning Music On and Off"
    wikipedia_url: "https://en.wikipedia.org/wiki/MIDI"
    image_url: ""
    image_caption: ""
    content: "These functions manage the music sequencer, turning it on and off as needed. The code interacts directly with AdLib hardware, sending commands to stop playback and reset registers. Music was an essential part of Wolfenstein 3D's atmosphere, and the ability to control it dynamically allowed the game to adapt its audio to different gameplay scenarios. This direct hardware interaction reflects the low-level programming required in the early 1990s, where APIs for music playback were virtually nonexistent. The techniques used here influenced later engines, which built on these foundations to implement more sophisticated music systems."
  - id: "fade-out-music"
    line_start: 2327
    line_end: 2343
    title: "Fading Out Music with a Quick Hack"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fade_(audio_engineering)"
    image_url: ""
    image_caption: ""
    content: "This function initiates a fade-out effect for the music, reducing its volume gradually until it stops. The implementation includes a quick hack for immediate music termination, reflecting the constraints of the development timeline. Fade-out effects were rare in games of this era, as they required additional processing and careful timing. By implementing this feature, id Software added a layer of polish to Wolfenstein 3D's audio experience, enhancing its overall immersion. This technique influenced later games, where dynamic audio transitions became a hallmark of high-quality sound design."
  - id: "music-playing-check"
    line_start: 2345
    line_end: 2367
    title: "Is Music Still Playing?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Real-time_computing"
    image_url: ""
    image_caption: ""
    content: "This function checks whether music is currently playing, returning a boolean result. It interacts directly with AdLib hardware, reflecting the low-level nature of audio programming in the DOS era. Real-time checks like these were essential for synchronizing music with gameplay, ensuring smooth transitions between tracks and gameplay events. Although the implementation is incomplete, it demonstrates the challenges of managing music playback on limited hardware. Techniques like these influenced later engines, where real-time music state management became standard practice."

---

```cpp
//
//	ID Engine
//	ID_SD.c - Sound Manager for Wolfenstein 3D
//	v1.2
//	By Jason Blochowiak
//

//
//	This module handles dealing with generating sound on the appropriate
//		hardware
//
//	Depends on: User Mgr (for parm checking)
//
//	Globals:
//		For User Mgr:
//			SoundSourcePresent - Sound Source thingie present?
//			SoundBlasterPresent - SoundBlaster card present?
//			AdLibPresent - AdLib card present?
//			SoundMode - What device is used for sound effects
//				(Use SM_SetSoundMode() to set)
//			MusicMode - What device is used for music
//				(Use SM_SetMusicMode() to set)
//			DigiMode - What device is used for digitized sound effects
//				(Use SM_SetDigiDevice() to set)
//
//		For Cache Mgr:
//			NeedsDigitized - load digitized sounds?
//			NeedsMusic - load music?
//

#pragma hdrstop		// Wierdo thing with MUSE

#include <dos.h>

#ifdef	_MUSE_      // Will be defined in ID_Types.h
#include "ID_SD.h"
#else
#include "ID_HEADS.H"
#endif
#pragma	hdrstop
#pragma	warn	-pia

#ifdef	nil
#undef	nil
#endif
#define	nil	0

#define	SDL_SoundFinished()	{SoundNumber = SoundPriority = 0;}

// Macros for SoundBlaster stuff
#define	sbOut(n,b)	outportb((n) + sbLocation,b)
#define	sbIn(n)		inportb((n) + sbLocation)
#define	sbWriteDelay()	while (sbIn(sbWriteStat) & 0x80);
#define	sbReadDelay()	while (sbIn(sbDataAvail) & 0x80);

// Macros for AdLib stuff
#define	selreg(n)	outportb(alFMAddr,n)
#define	writereg(n)	outportb(alFMData,n)
#define	readstat()	inportb(alFMStatus)

//	Imports from ID_SD_A.ASM
extern	void			SDL_SetDS(void),
						SDL_IndicatePC(boolean on);
extern	void interrupt	SDL_t0ExtremeAsmService(void),
						SDL_t0FastAsmService(void),
						SDL_t0SlowAsmService(void);

//	Global variables
	boolean		SoundSourcePresent,
				AdLibPresent,
				SoundBlasterPresent,SBProPresent,
				NeedsDigitized,NeedsMusic,
				SoundPositioned;
	SDMode		SoundMode;
	SMMode		MusicMode;
	SDSMode		DigiMode;
	longword	TimeCount;
	word		HackCount;
	word		*SoundTable;	// Really * _seg *SoundTable, but that don't work
	boolean		ssIsTandy;
	word		ssPort = 2;
	int			DigiMap[LASTSOUND];

//	Internal variables
static	boolean			SD_Started;
		boolean			nextsoundpos;
		longword		TimerDivisor,TimerCount;
static	char			*ParmStrings[] =
						{
							"noal",
							"nosb",
							"nopro",
							"noss",
							"sst",
							"ss1",
							"ss2",
							"ss3",
							nil
						};
static	void			(*SoundUserHook)(void);
		soundnames		SoundNumber,DigiNumber;
		word			SoundPriority,DigiPriority;
		int				LeftPosition,RightPosition;
		void interrupt	(*t0OldService)(void);
		long			LocalTime;
		word			TimerRate;

		word			NumDigi,DigiLeft,DigiPage;
		word			_seg *DigiList;
		word			DigiLastStart,DigiLastEnd;
		boolean			DigiPlaying;
static	boolean			DigiMissed,DigiLastSegment;
static	memptr			DigiNextAddr;
static	word			DigiNextLen;

//	SoundBlaster variables
static	boolean					sbNoCheck,sbNoProCheck;
static	volatile boolean		sbSamplePlaying;
static	byte					sbOldIntMask = -1;
static	volatile byte			huge *sbNextSegPtr;
static	byte					sbDMA = 1,
								sbDMAa1 = 0x83,sbDMAa2 = 2,sbDMAa3 = 3,
								sba1Vals[] = {0x87,0x83,0,0x82},
								sba2Vals[] = {0,2,0,6},
								sba3Vals[] = {1,3,0,7};
static	int						sbLocation = -1,sbInterrupt = 7,sbIntVec = 0xf,
								sbIntVectors[] = {-1,-1,0xa,0xb,-1,0xd,-1,0xf,-1,-1,-1};
static	volatile longword		sbNextSegLen;
static	volatile SampledSound	huge *sbSamples;
static	void interrupt			(*sbOldIntHand)(void);
static	byte					sbpOldFMMix,sbpOldVOCMix;

//	SoundSource variables
		boolean				ssNoCheck;
		boolean				ssActive;
		word				ssControl,ssStatus,ssData;
		byte				ssOn,ssOff;
		volatile byte		far *ssSample;
		volatile longword	ssLengthLeft;

//	PC Sound variables
		volatile byte	pcLastSample,far *pcSound;
		longword		pcLengthLeft;
		word			pcSoundLookup[255];

//	AdLib variables
		boolean			alNoCheck;
		byte			far *alSound;
		word			alBlock;
		longword		alLengthLeft;
		longword		alTimeCount;
		Instrument		alZeroInst;

// This table maps channel numbers to carrier and modulator op cells
static	byte			carriers[9] =  { 3, 4, 5,11,12,13,19,20,21},
						modifiers[9] = { 0, 1, 2, 8, 9,10,16,17,18},
// This table maps percussive voice numbers to op cells
						pcarriers[5] = {19,0xff,0xff,0xff,0xff},
						pmodifiers[5] = {16,17,18,20,21};

//	Sequencer variables
		boolean			sqActive;
static	word			alFXReg;
static	ActiveTrack		*tracks[sqMaxTracks],
						mytracks[sqMaxTracks];
static	word			sqMode,sqFadeStep;
		word			far *sqHack,far *sqHackPtr,sqHackLen,sqHackSeqLen;
		long			sqHackTime;

//	Internal routines
		void			SDL_DigitizedDone(void);

///////////////////////////////////////////////////////////////////////////
//
//	SDL_SetTimer0() - Sets system timer 0 to the specified speed
//
///////////////////////////////////////////////////////////////////////////
#pragma	argsused
static void
SDL_SetTimer0(word speed)
{
#ifndef TPROF	// If using Borland's profiling, don't screw with the timer
asm	pushf
asm	cli

	outportb(0x43,0x36);				// Change timer 0
	outportb(0x40,speed);
	outportb(0x40,speed >> 8);
	// Kludge to handle special case for digitized PC sounds
	if (TimerDivisor == (1192030 / (TickBase * 100)))
		TimerDivisor = (1192030 / (TickBase * 10));
	else
		TimerDivisor = speed;

asm	popf
#else
	TimerDivisor = 0x10000;
#endif
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_SetIntsPerSec() - Uses SDL_SetTimer0() to set the number of
//		interrupts generated by system timer 0 per second
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_SetIntsPerSec(word ints)
{
	TimerRate = ints;
	SDL_SetTimer0(1192030 / ints);
}

static void
SDL_SetTimerSpeed(void)
{
	word	rate;
	void interrupt	(*isr)(void);

	if ((DigiMode == sds_PC) && DigiPlaying)
	{
		rate = TickBase * 100;
		isr = SDL_t0ExtremeAsmService;
	}
	else if
	(
		(MusicMode == smm_AdLib)
	||	((DigiMode == sds_SoundSource) && DigiPlaying)
	)
	{
		rate = TickBase * 10;
		isr = SDL_t0FastAsmService;
	}
	else
	{
		rate = TickBase * 2;
		isr = SDL_t0SlowAsmService;
	}

	if (rate != TimerRate)
	{
		setvect(8,isr);
		SDL_SetIntsPerSec(rate);
		TimerRate = rate;
	}
}

//
//	SoundBlaster code
//

///////////////////////////////////////////////////////////////////////////
//
//	SDL_SBStopSample() - Stops any active sampled sound and causes DMA
//		requests from the SoundBlaster to cease
//
///////////////////////////////////////////////////////////////////////////
#ifdef	_MUSE_
void
#else
static void
#endif
SDL_SBStopSample(void)
{
	byte	is;

asm	pushf
asm	cli

	if (sbSamplePlaying)
	{
		sbSamplePlaying = false;

		sbWriteDelay();
		sbOut(sbWriteCmd,0xd0);	// Turn off DSP DMA

		is = inportb(0x21);	// Restore interrupt mask bit
		if (sbOldIntMask & (1 << sbInterrupt))
			is |= (1 << sbInterrupt);
		else
			is &= ~(1 << sbInterrupt);
		outportb(0x21,is);
	}

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_SBPlaySeg() - Plays a chunk of sampled sound on the SoundBlaster
//	Insures that the chunk doesn't cross a bank boundary, programs the DMA
//	 controller, and tells the SB to start doing DMA requests for DAC
//
///////////////////////////////////////////////////////////////////////////
static longword
SDL_SBPlaySeg(volatile byte huge *data,longword length)
{
	unsigned		datapage;
	longword		dataofs,uselen;

	uselen = length;
	datapage = FP_SEG(data) >> 12;
	dataofs = ((FP_SEG(data) & 0xfff) << 4) + FP_OFF(data);
	if (dataofs >= 0x10000)
	{
		datapage++;
		dataofs -= 0x10000;
	}

	if (dataofs + uselen > 0x10000)
		uselen = 0x10000 - dataofs;

	uselen--;

	// Program the DMA controller
asm	pushf
asm	cli
	outportb(0x0a,sbDMA | 4);					// Mask off DMA on channel sbDMA
	outportb(0x0c,0);							// Clear byte ptr flip-flop to lower byte
	outportb(0x0b,0x49);						// Set transfer mode for D/A conv
	outportb(sbDMAa2,(byte)dataofs);			// Give LSB of address
	outportb(sbDMAa2,(byte)(dataofs >> 8));		// Give MSB of address
	outportb(sbDMAa1,(byte)datapage);			// Give page of address
	outportb(sbDMAa3,(byte)uselen);				// Give LSB of length
	outportb(sbDMAa3,(byte)(uselen >> 8));		// Give MSB of length
	outportb(0x0a,sbDMA);						// Re-enable DMA on channel sbDMA

	// Start playing the thing
	sbWriteDelay();
	sbOut(sbWriteCmd,0x14);
	sbWriteDelay();
	sbOut(sbWriteData,(byte)uselen);
	sbWriteDelay();
	sbOut(sbWriteData,(byte)(uselen >> 8));
asm	popf

	return(uselen + 1);
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_SBService() - Services the SoundBlaster DMA interrupt
//
///////////////////////////////////////////////////////////////////////////
static void interrupt
SDL_SBService(void)
{
	longword	used;

	sbIn(sbDataAvail);	// Ack interrupt to SB

	if (sbNextSegPtr)
	{
		used = SDL_SBPlaySeg(sbNextSegPtr,sbNextSegLen);
		if (sbNextSegLen <= used)
			sbNextSegPtr = nil;
		else
		{
			sbNextSegPtr += used;
			sbNextSegLen -= used;
		}
	}
	else
	{
		SDL_SBStopSample();
		SDL_DigitizedDone();
	}

	outportb(0x20,0x20);	// Ack interrupt
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_SBPlaySample() - Plays a sampled sound on the SoundBlaster. Sets up
//		DMA to play the sound
//
///////////////////////////////////////////////////////////////////////////
#ifdef	_MUSE_
void
#else
static void
#endif
SDL_SBPlaySample(byte huge *data,longword len)
{
	longword	used;

	SDL_SBStopSample();

asm	pushf
asm	cli

	used = SDL_SBPlaySeg(data,len);
	if (len <= used)
		sbNextSegPtr = nil;
	else
	{
		sbNextSegPtr = data + used;
		sbNextSegLen = len - used;
	}

	// Save old interrupt status and unmask ours
	sbOldIntMask = inportb(0x21);
	outportb(0x21,sbOldIntMask & ~(1 << sbInterrupt));

	sbWriteDelay();
	sbOut(sbWriteCmd,0xd4);						// Make sure DSP DMA is enabled

	sbSamplePlaying = true;

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_PositionSBP() - Sets the attenuation levels for the left and right
//		channels by using the mixer chip on the SB Pro. This hits a hole in
//		the address map for normal SBs.
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_PositionSBP(int leftpos,int rightpos)
{
	byte	v;

	if (!SBProPresent)
		return;

	leftpos = 15 - leftpos;
	rightpos = 15 - rightpos;
	v = ((leftpos & 0x0f) << 4) | (rightpos & 0x0f);

asm	pushf
asm	cli

	sbOut(sbpMixerAddr,sbpmVoiceVol);
	sbOut(sbpMixerData,v);

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_CheckSB() - Checks to see if a SoundBlaster resides at a
//		particular I/O location
//
///////////////////////////////////////////////////////////////////////////
static boolean
SDL_CheckSB(int port)
{
	int	i;

	sbLocation = port << 4;		// Initialize stuff for later use

	sbOut(sbReset,true);		// Reset the SoundBlaster DSP
asm	mov	dx,0x388				// Wait >4usec
asm	in	al, dx
asm	in	al, dx
asm	in	al, dx
asm	in	al, dx
asm	in	al, dx
asm	in	al, dx
asm	in	al, dx
asm	in	al, dx
asm	in	al, dx

	sbOut(sbReset,false);		// Turn off sb DSP reset
asm	mov	dx,0x388				// Wait >100usec
asm	mov	cx,100
usecloop:
asm	in	al,dx
asm	loop usecloop

	for (i = 0;i < 100;i++)
	{
		if (sbIn(sbDataAvail) & 0x80)		// If data is available...
		{
			if (sbIn(sbReadData) == 0xaa)	// If it matches correct value
				return(true);
			else
			{
				sbLocation = -1;			// Otherwise not a SoundBlaster
				return(false);
			}
		}
	}
	sbLocation = -1;						// Retry count exceeded - fail
	return(false);
}

///////////////////////////////////////////////////////////////////////////
//
//	Checks to see if a SoundBlaster is in the system. If the port passed is
//		-1, then it scans through all possible I/O locations. If the port
//		passed is 0, then it uses the default (2). If the port is >0, then
//		it just passes it directly to SDL_CheckSB()
//
///////////////////////////////////////////////////////////////////////////
static boolean
SDL_DetectSoundBlaster(int port)
{
	int	i;

	if (port == 0)					// If user specifies default, use 2
		port = 2;
	if (port == -1)
	{
		if (SDL_CheckSB(2))			// Check default before scanning
			return(true);

		if (SDL_CheckSB(4))			// Check other SB Pro location before scan
			return(true);

		for (i = 1;i <= 6;i++)		// Scan through possible SB locations
		{
			if ((i == 2) || (i == 4))
				continue;

			if (SDL_CheckSB(i))		// If found at this address,
				return(true);		//	return success
		}
		return(false);				// All addresses failed, return failure
	}
	else
		return(SDL_CheckSB(port));	// User specified address or default
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_SBSetDMA() - Sets the DMA channel to be used by the SoundBlaster
//		code. Sets up sbDMA, and sbDMAa1-sbDMAa3 (used by SDL_SBPlaySeg()).
//
///////////////////////////////////////////////////////////////////////////
void
SDL_SBSetDMA(byte channel)
{
	if (channel > 3)
		Quit("SDL_SBSetDMA() - invalid SoundBlaster DMA channel");

	sbDMA = channel;
	sbDMAa1 = sba1Vals[channel];
	sbDMAa2 = sba2Vals[channel];
	sbDMAa3 = sba3Vals[channel];
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_StartSB() - Turns on the SoundBlaster
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_StartSB(void)
{
	byte	timevalue,test;

	sbIntVec = sbIntVectors[sbInterrupt];
	if (sbIntVec < 0)
		Quit("SDL_StartSB: Illegal or unsupported interrupt number for SoundBlaster");

	sbOldIntHand = getvect(sbIntVec);	// Get old interrupt handler
	setvect(sbIntVec,SDL_SBService);	// Set mine

	sbWriteDelay();
	sbOut(sbWriteCmd,0xd1);				// Turn on DSP speaker

	// Set the SoundBlaster DAC time constant for 7KHz
	timevalue = 256 - (1000000 / 7000);
	sbWriteDelay();
	sbOut(sbWriteCmd,0x40);
	sbWriteDelay();
	sbOut(sbWriteData,timevalue);

	SBProPresent = false;
	if (sbNoProCheck)
		return;

	// Check to see if this is a SB Pro
	sbOut(sbpMixerAddr,sbpmFMVol);
	sbpOldFMMix = sbIn(sbpMixerData);
	sbOut(sbpMixerData,0xbb);
	test = sbIn(sbpMixerData);
	if (test == 0xbb)
	{
		// Boost FM output levels to be equivilent with digitized output
		sbOut(sbpMixerData,0xff);
		test = sbIn(sbpMixerData);
		if (test == 0xff)
		{
			SBProPresent = true;

			// Save old Voice output levels (SB Pro)
			sbOut(sbpMixerAddr,sbpmVoiceVol);
			sbpOldVOCMix = sbIn(sbpMixerData);

			// Turn SB Pro stereo DAC off
			sbOut(sbpMixerAddr,sbpmControl);
			sbOut(sbpMixerData,0);				// 0=off,2=on
		}
	}
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_ShutSB() - Turns off the SoundBlaster
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_ShutSB(void)
{
	SDL_SBStopSample();

	if (SBProPresent)
	{
		// Restore FM output levels (SB Pro)
		sbOut(sbpMixerAddr,sbpmFMVol);
		sbOut(sbpMixerData,sbpOldFMMix);

		// Restore Voice output levels (SB Pro)
		sbOut(sbpMixerAddr,sbpmVoiceVol);
		sbOut(sbpMixerData,sbpOldVOCMix);
	}

	setvect(sbIntVec,sbOldIntHand);		// Set vector back
}

//	Sound Source Code

///////////////////////////////////////////////////////////////////////////
//
//	SDL_SSStopSample() - Stops a sample playing on the Sound Source
//
///////////////////////////////////////////////////////////////////////////
#ifdef	_MUSE_
void
#else
static void
#endif
SDL_SSStopSample(void)
{
asm	pushf
asm	cli

	(long)ssSample = 0;

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_SSService() - Handles playing the next sample on the Sound Source
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_SSService(void)
{
	boolean	gotit;
	byte	v;

	while (ssSample)
	{
	asm	mov		dx,[ssStatus]	// Check to see if FIFO is currently empty
	asm	in		al,dx
	asm	test	al,0x40
	asm	jnz		done			// Nope - don't push any more data out

		v = *ssSample++;
		if (!(--ssLengthLeft))
		{
			(long)ssSample = 0;
			SDL_DigitizedDone();
		}

	asm	mov		dx,[ssData]		// Pump the value out
	asm	mov		al,[v]
	asm	out		dx,al

	asm	mov		dx,[ssControl]	// Pulse printer select
	asm	mov		al,[ssOff]
	asm	out		dx,al
	asm	push	ax
	asm	pop		ax
	asm	mov		al,[ssOn]
	asm	out		dx,al

	asm	push	ax				// Delay a short while
	asm	pop		ax
	asm	push	ax
	asm	pop		ax
	}
done:;
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_SSPlaySample() - Plays the specified sample on the Sound Source
//
///////////////////////////////////////////////////////////////////////////
#ifdef	_MUSE_
void
#else
static void
#endif
SDL_SSPlaySample(byte huge *data,longword len)
{
asm	pushf
asm	cli

	ssLengthLeft = len;
	ssSample = (volatile byte far *)data;

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_StartSS() - Sets up for and turns on the Sound Source
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_StartSS(void)
{
	if (ssPort == 3)
		ssControl = 0x27a;	// If using LPT3
	else if (ssPort == 2)
		ssControl = 0x37a;	// If using LPT2
	else
		ssControl = 0x3be;	// If using LPT1
	ssStatus = ssControl - 1;
	ssData = ssStatus - 1;

	ssOn = 0x04;
	if (ssIsTandy)
		ssOff = 0x0e;				// Tandy wierdness
	else
		ssOff = 0x0c;				// For normal machines

	outportb(ssControl,ssOn);		// Enable SS
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_ShutSS() - Turns off the Sound Source
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_ShutSS(void)
{
	outportb(ssControl,ssOff);
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_CheckSS() - Checks to see if a Sound Source is present at the
//		location specified by the sound source variables
//
///////////////////////////////////////////////////////////////////////////
static boolean
SDL_CheckSS(void)
{
	boolean		present = false;
	longword	lasttime;

	// Turn the Sound Source on and wait awhile (4 ticks)
	SDL_StartSS();

	lasttime = TimeCount;
	while (TimeCount < lasttime + 4)
		;

asm	mov		dx,[ssStatus]	// Check to see if FIFO is currently empty
asm	in		al,dx
asm	test	al,0x40
asm	jnz		checkdone		// Nope - Sound Source not here

asm	mov		cx,32			// Force FIFO overflow (FIFO is 16 bytes)
outloop:
asm	mov		dx,[ssData]		// Pump a neutral value out
asm	mov		al,0x80
asm	out		dx,al

asm	mov		dx,[ssControl]	// Pulse printer select
asm	mov		al,[ssOff]
asm	out		dx,al
asm	push	ax
asm	pop		ax
asm	mov		al,[ssOn]
asm	out		dx,al

asm	push	ax				// Delay a short while before we do this again
asm	pop		ax
asm	push	ax
asm	pop		ax

asm	loop	outloop

asm	mov		dx,[ssStatus]	// Is FIFO overflowed now?
asm	in		al,dx
asm	test	al,0x40
asm	jz		checkdone		// Nope, still not - Sound Source not here

	present = true;			// Yes - it's here!

checkdone:
	SDL_ShutSS();
	return(present);
}

static boolean
SDL_DetectSoundSource(void)
{
	for (ssPort = 1;ssPort <= 3;ssPort++)
		if (SDL_CheckSS())
			return(true);
	return(false);
}

//
//	PC Sound code
//

///////////////////////////////////////////////////////////////////////////
//
//	SDL_PCPlaySample() - Plays the specified sample on the PC speaker
//
///////////////////////////////////////////////////////////////////////////
#ifdef	_MUSE_
void
#else
static void
#endif
SDL_PCPlaySample(byte huge *data,longword len)
{
asm	pushf
asm	cli

	SDL_IndicatePC(true);

	pcLengthLeft = len;
	pcSound = (volatile byte far *)data;

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_PCStopSample() - Stops a sample playing on the PC speaker
//
///////////////////////////////////////////////////////////////////////////
#ifdef	_MUSE_
void
#else
static void
#endif
SDL_PCStopSample(void)
{
asm	pushf
asm	cli

	(long)pcSound = 0;

	SDL_IndicatePC(false);

asm	in	al,0x61		  	// Turn the speaker off
asm	and	al,0xfd			// ~2
asm	out	0x61,al

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_PCPlaySound() - Plays the specified sound on the PC speaker
//
///////////////////////////////////////////////////////////////////////////
#ifdef	_MUSE_
void
#else
static void
#endif
SDL_PCPlaySound(PCSound far *sound)
{
asm	pushf
asm	cli

	pcLastSample = -1;
	pcLengthLeft = sound->common.length;
	pcSound = sound->data;

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_PCStopSound() - Stops the current sound playing on the PC Speaker
//
///////////////////////////////////////////////////////////////////////////
#ifdef	_MUSE_
void
#else
static void
#endif
SDL_PCStopSound(void)
{
asm	pushf
asm	cli

	(long)pcSound = 0;

asm	in	al,0x61		  	// Turn the speaker off
asm	and	al,0xfd			// ~2
asm	out	0x61,al

asm	popf
}

#if 0
///////////////////////////////////////////////////////////////////////////
//
//	SDL_PCService() - Handles playing the next sample in a PC sound
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_PCService(void)
{
	byte	s;
	word	t;

	if (pcSound)
	{
		s = *pcSound++;
		if (s != pcLastSample)
		{
		asm	pushf
		asm	cli

			pcLastSample = s;
			if (s)					// We have a frequency!
			{
				t = pcSoundLookup[s];
			asm	mov	bx,[t]

			asm	mov	al,0xb6			// Write to channel 2 (speaker) timer
			asm	out	43h,al
			asm	mov	al,bl
			asm	out	42h,al			// Low byte
			asm	mov	al,bh
			asm	out	42h,al			// High byte

			asm	in	al,0x61			// Turn the speaker & gate on
			asm	or	al,3
			asm	out	0x61,al
			}
			else					// Time for some silence
			{
			asm	in	al,0x61		  	// Turn the speaker & gate off
			asm	and	al,0xfc			// ~3
			asm	out	0x61,al
			}

		asm	popf
		}

		if (!(--pcLengthLeft))
		{
			SDL_PCStopSound();
			SDL_SoundFinished();
		}
	}
}
#endif

///////////////////////////////////////////////////////////////////////////
//
//	SDL_ShutPC() - Turns off the pc speaker
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_ShutPC(void)
{
asm	pushf
asm	cli

	pcSound = 0;

asm	in	al,0x61		  	// Turn the speaker & gate off
asm	and	al,0xfc			// ~3
asm	out	0x61,al

asm	popf
}

//
//	Stuff for digitized sounds
//
memptr
SDL_LoadDigiSegment(word page)
{
	memptr	addr;

#if 0	// for debugging
asm	mov	dx,STATUS_REGISTER_1
asm	in	al,dx
asm	mov	dx,ATR_INDEX
asm	mov	al,ATR_OVERSCAN
asm	out	dx,al
asm	mov	al,10	// bright green
asm	out	dx,al
#endif

	addr = PM_GetSoundPage(page);
	PM_SetPageLock(PMSoundStart + page,pml_Locked);

#if 0	// for debugging
asm	mov	dx,STATUS_REGISTER_1
asm	in	al,dx
asm	mov	dx,ATR_INDEX
asm	mov	al,ATR_OVERSCAN
asm	out	dx,al
asm	mov	al,3	// blue
asm	out	dx,al
asm	mov	al,0x20	// normal
asm	out	dx,al
#endif

	return(addr);
}

void
SDL_PlayDigiSegment(memptr addr,word len)
{
	switch (DigiMode)
	{
	case sds_PC:
    	SDL_PCPlaySample(addr,len);
		break;
	case sds_SoundSource:
		SDL_SSPlaySample(addr,len);
		break;
	case sds_SoundBlaster:
		SDL_SBPlaySample(addr,len);
		break;
	}
}

void
SD_StopDigitized(void)
{
	int	i;

asm	pushf
asm	cli

	DigiLeft = 0;
	DigiNextAddr = nil;
	DigiNextLen = 0;
	DigiMissed = false;
	DigiPlaying = false;
	DigiNumber = DigiPriority = 0;
	SoundPositioned = false;
	if ((DigiMode == sds_PC) && (SoundMode == sdm_PC))
		SDL_SoundFinished();

	switch (DigiMode)
	{
	case sds_PC:
		SDL_PCStopSample();
		break;
	case sds_SoundSource:
		SDL_SSStopSample();
		break;
	case sds_SoundBlaster:
		SDL_SBStopSample();
		break;
	}

asm	popf

	for (i = DigiLastStart;i < DigiLastEnd;i++)
		PM_SetPageLock(i + PMSoundStart,pml_Unlocked);
	DigiLastStart = 1;
	DigiLastEnd = 0;
}

void
SD_Poll(void)
{
	if (DigiLeft && !DigiNextAddr)
	{
		DigiNextLen = (DigiLeft >= PMPageSize)? PMPageSize : (DigiLeft % PMPageSize);
		DigiLeft -= DigiNextLen;
		if (!DigiLeft)
			DigiLastSegment = true;
		DigiNextAddr = SDL_LoadDigiSegment(DigiPage++);
	}
	if (DigiMissed && DigiNextAddr)
	{
		SDL_PlayDigiSegment(DigiNextAddr,DigiNextLen);
		DigiNextAddr = nil;
		DigiMissed = false;
		if (DigiLastSegment)
		{
			DigiPlaying = false;
			DigiLastSegment = false;
		}
	}
	SDL_SetTimerSpeed();
}

void
SD_SetPosition(int leftpos,int rightpos)
{
	if
	(
		(leftpos < 0)
	||	(leftpos > 15)
	||	(rightpos < 0)
	||	(rightpos > 15)
	||	((leftpos == 15) && (rightpos == 15))
	)
		Quit("SD_SetPosition: Illegal position");

	switch (DigiMode)
	{
	case sds_SoundBlaster:
		SDL_PositionSBP(leftpos,rightpos);
		break;
	}
}

void
SD_PlayDigitized(word which,int leftpos,int rightpos)
{
	word	len;
	memptr	addr;

	if (!DigiMode)
		return;

	SD_StopDigitized();
	if (which >= NumDigi)
		Quit("SD_PlayDigitized: bad sound number");

	SD_SetPosition(leftpos,rightpos);

	DigiPage = DigiList[(which * 2) + 0];
	DigiLeft = DigiList[(which * 2) + 1];

	DigiLastStart = DigiPage;
	DigiLastEnd = DigiPage + ((DigiLeft + (PMPageSize - 1)) / PMPageSize);

	len = (DigiLeft >= PMPageSize)? PMPageSize : (DigiLeft % PMPageSize);
	addr = SDL_LoadDigiSegment(DigiPage++);

	DigiPlaying = true;
	DigiLastSegment = false;

	SDL_PlayDigiSegment(addr,len);
	DigiLeft -= len;
	if (!DigiLeft)
		DigiLastSegment = true;

	SD_Poll();
}

void
SDL_DigitizedDone(void)
{
	if (DigiNextAddr)
	{
		SDL_PlayDigiSegment(DigiNextAddr,DigiNextLen);
		DigiNextAddr = nil;
		DigiMissed = false;
	}
	else
	{
		if (DigiLastSegment)
		{
			DigiPlaying = false;
			DigiLastSegment = false;
			if ((DigiMode == sds_PC) && (SoundMode == sdm_PC))
			{
				SDL_SoundFinished();
			}
			else
				DigiNumber = DigiPriority = 0;
			SoundPositioned = false;
		}
		else
			DigiMissed = true;
	}
}

void
SD_SetDigiDevice(SDSMode mode)
{
	boolean	devicenotpresent;

	if (mode == DigiMode)
		return;

	SD_StopDigitized();

	devicenotpresent = false;
	switch (mode)
	{
	case sds_SoundBlaster:
		if (!SoundBlasterPresent)
		{
			if (SoundSourcePresent)
				mode = sds_SoundSource;
			else
				devicenotpresent = true;
		}
		break;
	case sds_SoundSource:
		if (!SoundSourcePresent)
			devicenotpresent = true;
		break;
	}

	if (!devicenotpresent)
	{
		if (DigiMode == sds_SoundSource)
			SDL_ShutSS();

		DigiMode = mode;

		if (mode == sds_SoundSource)
			SDL_StartSS();

		SDL_SetTimerSpeed();
	}
}

void
SDL_SetupDigi(void)
{
	memptr	list;
	word	far *p,
			pg;
	int		i;

	PM_UnlockMainMem();
	MM_GetPtr(&list,PMPageSize);
	PM_CheckMainMem();
	p = (word far *)MK_FP(PM_GetPage(ChunksInFile - 1),0);
	_fmemcpy((void far *)list,(void far *)p,PMPageSize);
	pg = PMSoundStart;
	for (i = 0;i < PMPageSize / (sizeof(word) * 2);i++,p += 2)
	{
		if (pg >= ChunksInFile - 1)
			break;
		pg += (p[1] + (PMPageSize - 1)) / PMPageSize;
	}
	PM_UnlockMainMem();
	MM_GetPtr((memptr *)&DigiList,i * sizeof(word) * 2);
	_fmemcpy((void far *)DigiList,(void far *)list,i * sizeof(word) * 2);
	MM_FreePtr(&list);
	NumDigi = i;

	for (i = 0;i < LASTSOUND;i++)
		DigiMap[i] = -1;
}

// 	AdLib Code

///////////////////////////////////////////////////////////////////////////
//
//	alOut(n,b) - Puts b in AdLib card register n
//
///////////////////////////////////////////////////////////////////////////
void
alOut(byte n,byte b)
{
asm	pushf
asm	cli

asm	mov	dx,0x388
asm	mov	al,[n]
asm	out	dx,al
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	inc	dx
asm	mov	al,[b]
asm	out	dx,al

asm	popf

asm	dec	dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx

asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx

asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx

asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
asm	in	al,dx
}

#if 0
///////////////////////////////////////////////////////////////////////////
//
//	SDL_SetInstrument() - Puts an instrument into a generator
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_SetInstrument(int track,int which,Instrument far *inst,boolean percussive)
{
	byte		c,m;

	if (percussive)
	{
		c = pcarriers[which];
		m = pmodifiers[which];
	}
	else
	{
		c = carriers[which];
		m = modifiers[which];
	}

	tracks[track - 1]->inst = *inst;
	tracks[track - 1]->percussive = percussive;

	alOut(m + alChar,inst->mChar);
	alOut(m + alScale,inst->mScale);
	alOut(m + alAttack,inst->mAttack);
	alOut(m + alSus,inst->mSus);
	alOut(m + alWave,inst->mWave);

	// Most percussive instruments only use one cell
	if (c != 0xff)
	{
		alOut(c + alChar,inst->cChar);
		alOut(c + alScale,inst->cScale);
		alOut(c + alAttack,inst->cAttack);
		alOut(c + alSus,inst->cSus);
		alOut(c + alWave,inst->cWave);
	}

	alOut(which + alFeedCon,inst->nConn);	// DEBUG - I think this is right
}
#endif

///////////////////////////////////////////////////////////////////////////
//
//	SDL_ALStopSound() - Turns off any sound effects playing through the
//		AdLib card
//
///////////////////////////////////////////////////////////////////////////
#ifdef	_MUSE_
void
#else
static void
#endif
SDL_ALStopSound(void)
{
asm	pushf
asm	cli

	(long)alSound = 0;
	alOut(alFreqH + 0,0);

asm	popf
}

static void
SDL_AlSetFXInst(Instrument far *inst)
{
	byte		c,m;

	m = modifiers[0];
	c = carriers[0];
	alOut(m + alChar,inst->mChar);
	alOut(m + alScale,inst->mScale);
	alOut(m + alAttack,inst->mAttack);
	alOut(m + alSus,inst->mSus);
	alOut(m + alWave,inst->mWave);
	alOut(c + alChar,inst->cChar);
	alOut(c + alScale,inst->cScale);
	alOut(c + alAttack,inst->cAttack);
	alOut(c + alSus,inst->cSus);
	alOut(c + alWave,inst->cWave);

	// Note: Switch commenting on these lines for old MUSE compatibility
//	alOut(alFeedCon,inst->nConn);
	alOut(alFeedCon,0);
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_ALPlaySound() - Plays the specified sound on the AdLib card
//
///////////////////////////////////////////////////////////////////////////
#ifdef	_MUSE_
void
#else
static void
#endif
SDL_ALPlaySound(AdLibSound far *sound)
{
	Instrument	far *inst;
	byte		huge *data;

	SDL_ALStopSound();

asm	pushf
asm	cli

	alLengthLeft = sound->common.length;
	data = sound->data;
	data++;
	data--;
	alSound = (byte far *)data;
	alBlock = ((sound->block & 7) << 2) | 0x20;
	inst = &sound->inst;

	if (!(inst->mSus | inst->cSus))
	{
	asm	popf
		Quit("SDL_ALPlaySound() - Bad instrument");
	}

	SDL_AlSetFXInst(&alZeroInst);	// DEBUG
	SDL_AlSetFXInst(inst);

asm	popf
}

#if 0
///////////////////////////////////////////////////////////////////////////
//
// 	SDL_ALSoundService() - Plays the next sample out through the AdLib card
//
///////////////////////////////////////////////////////////////////////////
//static void
void
SDL_ALSoundService(void)
{
	byte	s;

	if (alSound)
	{
		s = *alSound++;
		if (!s)
			alOut(alFreqH + 0,0);
		else
		{
			alOut(alFreqL + 0,s);
			alOut(alFreqH + 0,alBlock);
		}

		if (!(--alLengthLeft))
		{
			(long)alSound = 0;
			alOut(alFreqH + 0,0);
			SDL_SoundFinished();
		}
	}
}
#endif

#if 0
void
SDL_ALService(void)
{
	byte	a,v;
	word	w;

	if (!sqActive)
		return;

	while (sqHackLen && (sqHackTime <= alTimeCount))
	{
		w = *sqHackPtr++;
		sqHackTime = alTimeCount + *sqHackPtr++;
	asm	mov	dx,[w]
	asm	mov	[a],dl
	asm	mov	[v],dh
		alOut(a,v);
		sqHackLen -= 4;
	}
	alTimeCount++;
	if (!sqHackLen)
	{
		sqHackPtr = (word far *)sqHack;
		sqHackLen = sqHackSeqLen;
		alTimeCount = sqHackTime = 0;
	}
}
#endif

///////////////////////////////////////////////////////////////////////////
//
//	SDL_ShutAL() - Shuts down the AdLib card for sound effects
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_ShutAL(void)
{
asm	pushf
asm	cli

	alOut(alEffects,0);
	alOut(alFreqH + 0,0);
	SDL_AlSetFXInst(&alZeroInst);
	alSound = 0;

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_CleanAL() - Totally shuts down the AdLib card
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_CleanAL(void)
{
	int	i;

asm	pushf
asm	cli

	alOut(alEffects,0);
	for (i = 1;i < 0xf5;i++)
		alOut(i,0);

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_StartAL() - Starts up the AdLib card for sound effects
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_StartAL(void)
{
	alFXReg = 0;
	alOut(alEffects,alFXReg);
	SDL_AlSetFXInst(&alZeroInst);
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_DetectAdLib() - Determines if there's an AdLib (or SoundBlaster
//		emulating an AdLib) present
//
///////////////////////////////////////////////////////////////////////////
static boolean
SDL_DetectAdLib(void)
{
	byte	status1,status2;
	int		i;

	alOut(4,0x60);	// Reset T1 & T2
	alOut(4,0x80);	// Reset IRQ
	status1 = readstat();
	alOut(2,0xff);	// Set timer 1
	alOut(4,0x21);	// Start timer 1
#if 0
	SDL_Delay(TimerDelay100);
#else
asm	mov	dx,0x388
asm	mov	cx,100
usecloop:
asm	in	al,dx
asm	loop usecloop
#endif

	status2 = readstat();
	alOut(4,0x60);
	alOut(4,0x80);

	if (((status1 & 0xe0) == 0x00) && ((status2 & 0xe0) == 0xc0))
	{
		for (i = 1;i <= 0xf5;i++)	// Zero all the registers
			alOut(i,0);

		alOut(1,0x20);	// Set WSE=1
		alOut(8,0);		// Set CSM=0 & SEL=0

		return(true);
	}
	else
		return(false);
}

#if 0
///////////////////////////////////////////////////////////////////////////
//
//	SDL_t0Service() - My timer 0 ISR which handles the different timings and
//		dispatches to whatever other routines are appropriate
//
///////////////////////////////////////////////////////////////////////////
static void interrupt
SDL_t0Service(void)
{
static	word	count = 1;

#if 1	// for debugging
asm	mov	dx,STATUS_REGISTER_1
asm	in	al,dx
asm	mov	dx,ATR_INDEX
asm	mov	al,ATR_OVERSCAN
asm	out	dx,al
asm	mov	al,4	// red
asm	out	dx,al
#endif

	HackCount++;

	if ((MusicMode == smm_AdLib) || (DigiMode == sds_SoundSource))
	{
		SDL_ALService();
		SDL_SSService();
//		if (!(++count & 7))
		if (!(++count % 10))
		{
			LocalTime++;
			TimeCount++;
			if (SoundUserHook)
				SoundUserHook();
		}
//		if (!(count & 3))
		if (!(count % 5))
		{
			switch (SoundMode)
			{
			case sdm_PC:
				SDL_PCService();
				break;
			case sdm_AdLib:
				SDL_ALSoundService();
				break;
			}
		}
	}
	else
	{
		if (!(++count & 1))
		{
			LocalTime++;
			TimeCount++;
			if (SoundUserHook)
				SoundUserHook();
		}
		switch (SoundMode)
		{
		case sdm_PC:
			SDL_PCService();
			break;
		case sdm_AdLib:
			SDL_ALSoundService();
			break;
		}
	}

asm	mov	ax,[WORD PTR TimerCount]
asm	add	ax,[WORD PTR TimerDivisor]
asm	mov	[WORD PTR TimerCount],ax
asm	jnc	myack
	t0OldService();			// If we overflow a word, time to call old int handler
asm	jmp	olddone
myack:;
	outportb(0x20,0x20);	// Ack the interrupt
olddone:;

#if 1	// for debugging
asm	mov	dx,STATUS_REGISTER_1
asm	in	al,dx
asm	mov	dx,ATR_INDEX
asm	mov	al,ATR_OVERSCAN
asm	out	dx,al
asm	mov	al,3	// blue
asm	out	dx,al
asm	mov	al,0x20	// normal
asm	out	dx,al
#endif
}
#endif

////////////////////////////////////////////////////////////////////////////
//
//	SDL_ShutDevice() - turns off whatever device was being used for sound fx
//
////////////////////////////////////////////////////////////////////////////
static void
SDL_ShutDevice(void)
{
	switch (SoundMode)
	{
	case sdm_PC:
		SDL_ShutPC();
		break;
	case sdm_AdLib:
		SDL_ShutAL();
		break;
	}
	SoundMode = sdm_Off;
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_CleanDevice() - totally shuts down all sound devices
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_CleanDevice(void)
{
	if ((SoundMode == sdm_AdLib) || (MusicMode == smm_AdLib))
		SDL_CleanAL();
}

///////////////////////////////////////////////////////////////////////////
//
//	SDL_StartDevice() - turns on whatever device is to be used for sound fx
//
///////////////////////////////////////////////////////////////////////////
static void
SDL_StartDevice(void)
{
	switch (SoundMode)
	{
	case sdm_AdLib:
		SDL_StartAL();
		break;
	}
	SoundNumber = SoundPriority = 0;
}

//	Public routines

///////////////////////////////////////////////////////////////////////////
//
//	SD_SetSoundMode() - Sets which sound hardware to use for sound effects
//
///////////////////////////////////////////////////////////////////////////
boolean
SD_SetSoundMode(SDMode mode)
{
	boolean	result = false;
	word	tableoffset;

	SD_StopSound();

#ifndef	_MUSE_
	if ((mode == sdm_AdLib) && !AdLibPresent)
		mode = sdm_PC;

	switch (mode)
	{
	case sdm_Off:
		NeedsDigitized = false;
		result = true;
		break;
	case sdm_PC:
		tableoffset = STARTPCSOUNDS;
		NeedsDigitized = false;
		result = true;
		break;
	case sdm_AdLib:
		if (AdLibPresent)
		{
			tableoffset = STARTADLIBSOUNDS;
			NeedsDigitized = false;
			result = true;
		}
		break;
	}
#else
	result = true;
#endif

	if (result && (mode != SoundMode))
	{
		SDL_ShutDevice();
		SoundMode = mode;
#ifndef	_MUSE_
		SoundTable = (word *)(&audiosegs[tableoffset]);
#endif
		SDL_StartDevice();
	}

	SDL_SetTimerSpeed();

	return(result);
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_SetMusicMode() - sets the device to use for background music
//
///////////////////////////////////////////////////////////////////////////
boolean
SD_SetMusicMode(SMMode mode)
{
	boolean	result = false;

	SD_FadeOutMusic();
	while (SD_MusicPlaying())
		;

	switch (mode)
	{
	case smm_Off:
		NeedsMusic = false;
		result = true;
		break;
	case smm_AdLib:
		if (AdLibPresent)
		{
			NeedsMusic = true;
			result = true;
		}
		break;
	}

	if (result)
		MusicMode = mode;

	SDL_SetTimerSpeed();

	return(result);
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_Startup() - starts up the Sound Mgr
//		Detects all additional sound hardware and installs my ISR
//
///////////////////////////////////////////////////////////////////////////
void
SD_Startup(void)
{
	int	i;

	if (SD_Started)
		return;

	SDL_SetDS();

	ssIsTandy = false;
	ssNoCheck = false;
	alNoCheck = false;
	sbNoCheck = false;
	sbNoProCheck = false;
#ifndef	_MUSE_
	for (i = 1;i < _argc;i++)
	{
		switch (US_CheckParm(_argv[i],ParmStrings))
		{
		case 0:						// No AdLib detection
			alNoCheck = true;
			break;
		case 1:						// No SoundBlaster detection
			sbNoCheck = true;
			break;
		case 2:						// No SoundBlaster Pro detection
			sbNoProCheck = true;
			break;
		case 3:
			ssNoCheck = true;		// No Sound Source detection
			break;
		case 4:						// Tandy Sound Source handling
			ssIsTandy = true;
			break;
		case 5:						// Sound Source present at LPT1
			ssPort = 1;
			ssNoCheck = SoundSourcePresent = true;
			break;
		case 6:                     // Sound Source present at LPT2
			ssPort = 2;
			ssNoCheck = SoundSourcePresent = true;
			break;
		case 7:                     // Sound Source present at LPT3
			ssPort = 3;
			ssNoCheck = SoundSourcePresent = true;
			break;
		}
	}
#endif

	SoundUserHook = 0;

	t0OldService = getvect(8);	// Get old timer 0 ISR

	LocalTime = TimeCount = alTimeCount = 0;

	SD_SetSoundMode(sdm_Off);
	SD_SetMusicMode(smm_Off);

	if (!ssNoCheck)
		SoundSourcePresent = SDL_DetectSoundSource();

	if (!alNoCheck)
	{
		AdLibPresent = SDL_DetectAdLib();
		if (AdLibPresent && !sbNoCheck)
		{
			int port = -1;
			char *env = getenv("BLASTER");
			if (env)
			{
				long temp;
				while (*env)
				{
					while (isspace(*env))
						env++;

					switch (toupper(*env))
					{
					case 'A':
						temp = strtol(env + 1,&env,16);
						if
						(
							(temp >= 0x210)
						&&	(temp <= 0x260)
						&&	(!(temp & 0x00f))
						)
							port = (temp - 0x200) >> 4;
						else
							Quit("SD_Startup: Unsupported address value in BLASTER");
						break;
					case 'I':
						temp = strtol(env + 1,&env,10);
						if
						(
							(temp >= 0)
						&&	(temp <= 10)
						&&	(sbIntVectors[temp] != -1)
						)
						{
							sbInterrupt = temp;
							sbIntVec = sbIntVectors[sbInterrupt];
						}
						else
							Quit("SD_Startup: Unsupported interrupt value in BLASTER");
						break;
					case 'D':
						temp = strtol(env + 1,&env,10);
						if ((temp == 0) || (temp == 1) || (temp == 3))
							SDL_SBSetDMA(temp);
						else
							Quit("SD_Startup: Unsupported DMA value in BLASTER");
						break;
					default:
						while (isspace(*env))
							env++;
						while (*env && !isspace(*env))
							env++;
						break;
					}
				}
			}
			SoundBlasterPresent = SDL_DetectSoundBlaster(port);
		}
	}

	for (i = 0;i < 255;i++)
		pcSoundLookup[i] = i * 60;

	if (SoundBlasterPresent)
		SDL_StartSB();

	SDL_SetupDigi();

	SD_Started = true;
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_Default() - Sets up the default behaviour for the Sound Mgr whether
//		the config file was present or not.
//
///////////////////////////////////////////////////////////////////////////
void
SD_Default(boolean gotit,SDMode sd,SMMode sm)
{
	boolean	gotsd,gotsm;

	gotsd = gotsm = gotit;

	if (gotsd)	// Make sure requested sound hardware is available
	{
		switch (sd)
		{
		case sdm_AdLib:
			gotsd = AdLibPresent;
			break;
		}
	}
	if (!gotsd)
	{
		if (AdLibPresent)
			sd = sdm_AdLib;
		else
			sd = sdm_PC;
	}
	if (sd != SoundMode)
		SD_SetSoundMode(sd);


	if (gotsm)	// Make sure requested music hardware is available
	{
		switch (sm)
		{
		case sdm_AdLib:
			gotsm = AdLibPresent;
			break;
		}
	}
	if (!gotsm)
	{
		if (AdLibPresent)
			sm = smm_AdLib;
	}
	if (sm != MusicMode)
		SD_SetMusicMode(sm);
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_Shutdown() - shuts down the Sound Mgr
//		Removes sound ISR and turns off whatever sound hardware was active
//
///////////////////////////////////////////////////////////////////////////
void
SD_Shutdown(void)
{
	if (!SD_Started)
		return;

	SD_MusicOff();
	SD_StopSound();
	SDL_ShutDevice();
	SDL_CleanDevice();

	if (SoundBlasterPresent)
		SDL_ShutSB();

	if (SoundSourcePresent)
		SDL_ShutSS();

	asm	pushf
	asm	cli

	SDL_SetTimer0(0);

	setvect(8,t0OldService);

	asm	popf

	SD_Started = false;
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_SetUserHook() - sets the routine that the Sound Mgr calls every 1/70th
//		of a second from its timer 0 ISR
//
///////////////////////////////////////////////////////////////////////////
void
SD_SetUserHook(void (* hook)(void))
{
	SoundUserHook = hook;
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_PositionSound() - Sets up a stereo imaging location for the next
//		sound to be played. Each channel ranges from 0 to 15.
//
///////////////////////////////////////////////////////////////////////////
void
SD_PositionSound(int leftvol,int rightvol)
{
	LeftPosition = leftvol;
	RightPosition = rightvol;
	nextsoundpos = true;
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_PlaySound() - plays the specified sound on the appropriate hardware
//
///////////////////////////////////////////////////////////////////////////
boolean
SD_PlaySound(soundnames sound)
{
	boolean		ispos;
	SoundCommon	far *s;
	int	lp,rp;

	lp = LeftPosition;
	rp = RightPosition;
	LeftPosition = 0;
	RightPosition = 0;

	ispos = nextsoundpos;
	nextsoundpos = false;

	if (sound == -1)
		return(false);

	s = MK_FP(SoundTable[sound],0);
	if ((SoundMode != sdm_Off) && !s)
		Quit("SD_PlaySound() - Uncached sound");

	if ((DigiMode != sds_Off) && (DigiMap[sound] != -1))
	{
		if ((DigiMode == sds_PC) && (SoundMode == sdm_PC))
		{
			if (s->priority < SoundPriority)
				return(false);

			SDL_PCStopSound();

			SD_PlayDigitized(DigiMap[sound],lp,rp);
			SoundPositioned = ispos;
			SoundNumber = sound;
			SoundPriority = s->priority;
		}
		else
		{
		asm	pushf
		asm	cli
			if (DigiPriority && !DigiNumber)
			{
			asm	popf
				Quit("SD_PlaySound: Priority without a sound");
			}
		asm	popf

			if (s->priority < DigiPriority)
				return(false);

			SD_PlayDigitized(DigiMap[sound],lp,rp);
			SoundPositioned = ispos;
			DigiNumber = sound;
			DigiPriority = s->priority;
		}

		return(true);
	}

	if (SoundMode == sdm_Off)
		return(false);
	if (!s->length)
		Quit("SD_PlaySound() - Zero length sound");
	if (s->priority < SoundPriority)
		return(false);

	switch (SoundMode)
	{
	case sdm_PC:
		SDL_PCPlaySound((void far *)s);
		break;
	case sdm_AdLib:
		SDL_ALPlaySound((void far *)s);
		break;
	}

	SoundNumber = sound;
	SoundPriority = s->priority;

	return(false);
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_SoundPlaying() - returns the sound number that's playing, or 0 if
//		no sound is playing
//
///////////////////////////////////////////////////////////////////////////
word
SD_SoundPlaying(void)
{
	boolean	result = false;

	switch (SoundMode)
	{
	case sdm_PC:
		result = pcSound? true : false;
		break;
	case sdm_AdLib:
		result = alSound? true : false;
		break;
	}

	if (result)
		return(SoundNumber);
	else
		return(false);
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_StopSound() - if a sound is playing, stops it
//
///////////////////////////////////////////////////////////////////////////
void
SD_StopSound(void)
{
	if (DigiPlaying)
		SD_StopDigitized();

	switch (SoundMode)
	{
	case sdm_PC:
		SDL_PCStopSound();
		break;
	case sdm_AdLib:
		SDL_ALStopSound();
		break;
	}

	SoundPositioned = false;

	SDL_SoundFinished();
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_WaitSoundDone() - waits until the current sound is done playing
//
///////////////////////////////////////////////////////////////////////////
void
SD_WaitSoundDone(void)
{
	while (SD_SoundPlaying())
		;
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_MusicOn() - turns on the sequencer
//
///////////////////////////////////////////////////////////////////////////
void
SD_MusicOn(void)
{
	sqActive = true;
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_MusicOff() - turns off the sequencer and any playing notes
//
///////////////////////////////////////////////////////////////////////////
void
SD_MusicOff(void)
{
	word	i;


	switch (MusicMode)
	{
	case smm_AdLib:
		alFXReg = 0;
		alOut(alEffects,0);
		for (i = 0;i < sqMaxTracks;i++)
			alOut(alFreqH + i + 1,0);
		break;
	}
	sqActive = false;
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_StartMusic() - starts playing the music pointed to
//
///////////////////////////////////////////////////////////////////////////
void
SD_StartMusic(MusicGroup far *music)
{
	SD_MusicOff();
asm	pushf
asm	cli

	if (MusicMode == smm_AdLib)
	{
		sqHackPtr = sqHack = music->values;
		sqHackSeqLen = sqHackLen = music->length;
		sqHackTime = 0;
		alTimeCount = 0;
		SD_MusicOn();
	}

asm	popf
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_FadeOutMusic() - starts fading out the music. Call SD_MusicPlaying()
//		to see if the fadeout is complete
//
///////////////////////////////////////////////////////////////////////////
void
SD_FadeOutMusic(void)
{
	switch (MusicMode)
	{
	case smm_AdLib:
		// DEBUG - quick hack to turn the music off
		SD_MusicOff();
		break;
	}
}

///////////////////////////////////////////////////////////////////////////
//
//	SD_MusicPlaying() - returns true if music is currently playing, false if
//		not
//
///////////////////////////////////////////////////////////////////////////
boolean
SD_MusicPlaying(void)
{
	boolean	result;

	switch (MusicMode)
	{
	case smm_AdLib:
		result = false;
		// DEBUG - not written
		break;
	default:
		result = false;
	}

	return(result);
}
```