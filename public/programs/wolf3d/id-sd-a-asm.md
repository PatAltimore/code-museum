---
title: "ID_SD_A.ASM"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/ID_SD_A.ASM"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/ID_SD_A.ASM"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "id-sd-a-asm"
order: 23
description: "This file implements the sound manager for Wolfenstein 3D, showcasing id Software's innovative use of assembly language to control PC speaker, AdLib, and Sound Source hardware."

summary:
  - point: "Defines data structures for sound effects and hardware interaction"
    link: "https://en.wikipedia.org/wiki/PC_speaker"
    link_label: "PC Speaker"
  - point: "Implements macros for sound effect control and timing"
    link: "https://en.wikipedia.org/wiki/AdLib"
    link_label: "AdLib"
  - point: "Includes interrupt service routines for handling sound playback"
    link: "https://en.wikipedia.org/wiki/Interrupt_handler"
    link_label: "Interrupt Handler"
  - point: "Optimizes sound playback for limited hardware capabilities"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates early techniques for real-time audio in games"
    link: "https://en.wikipedia.org/wiki/Real-time_computing"
    link_label: "Real-Time Computing"

enhancements:
  - id: "data-segment-definitions"
    line_start: 17
    line_end: 81
    title: "Data segment: sound and timing variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/PC_speaker"
    image_url: ""
    image_caption: ""
    content: "This section defines the data segment for the sound manager, including variables for PC speaker, AdLib, and Sound Source sound effects. The variables track sound playback state, such as active sound pointers, lengths, and control flags. At the time, managing audio hardware directly required intimate knowledge of the hardware registers and memory layout. The inclusion of lookup tables, such as 'pcdtab', demonstrates a technique for mapping sound data to hardware-specific formats. This approach reflects the constraints of early 1990s hardware, where developers had to work within the limited memory and processing power of MS-DOS systems. These definitions laid the groundwork for real-time sound playback in Wolfenstein 3D, influencing later games that adopted similar techniques for managing audio."
  - id: "code-segment-initialization"
    line_start: 83
    line_end: 156
    title: "Code segment: initialization routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The code segment begins with initialization routines, including 'SDL_SetDS', which sets the data segment register to ensure proper memory access. This routine is crucial for maintaining consistency across different parts of the program, especially when dealing with hardware interrupts. The use of macros like 'COMMONSTART' and 'DOFX' encapsulates repetitive tasks, such as setting up sound effects or handling hardware registers. These macros highlight the efficiency-focused mindset of assembly programming, where minimizing code duplication was essential due to memory constraints. The initialization routines ensure that the sound manager is ready to handle real-time audio playback, a key feature of Wolfenstein 3D's immersive gameplay."
  - id: "pc-speaker-control"
    line_start: 158
    line_end: 175
    title: "PC speaker: turning sound on and off"
    wikipedia_url: "https://en.wikipedia.org/wiki/PC_speaker"
    image_url: ""
    image_caption: ""
    content: "This section handles PC speaker sound effects, including turning the speaker on and off based on the current sound sample. The code uses hardware-specific instructions, such as 'out' to send data to the speaker's control register. The logic ensures that sounds are played efficiently, avoiding redundant operations when the same sample is repeated. At the time, the PC speaker was a common audio output device, but its capabilities were limited compared to modern sound cards. By directly manipulating the hardware, id Software achieved real-time sound playback that contributed to the game's fast-paced action. This approach influenced subsequent games that sought to optimize audio performance on similar hardware."
  - id: "adlib-sound-effects"
    line_start: 176
    line_end: 202
    title: "AdLib sound effects: frequency control"
    wikipedia_url: "https://en.wikipedia.org/wiki/AdLib"
    image_url: ""
    image_caption: ""
    content: "This section manages AdLib sound effects, including setting frequency values for playback. The code interacts with the AdLib hardware using the 'alOut' macro, which sends data to specific registers. The logic ensures that sound effects are played smoothly and stops playback when the sound length reaches zero. The AdLib card was a popular sound device in the early 1990s, offering improved audio capabilities compared to the PC speaker. By leveraging the AdLib's features, id Software enhanced the auditory experience of Wolfenstein 3D, setting a standard for immersive sound in games. This technique influenced later titles that utilized AdLib or similar sound cards for richer audio."
  - id: "timer-management"
    line_start: 203
    line_end: 217
    title: "Timer management for sound synchronization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Real-time_computing"
    image_url: ""
    image_caption: ""
    content: "This section includes macros for managing timers, ensuring sound effects are synchronized with gameplay. The 'TIME' macro updates local and global time counters, providing a mechanism for tracking elapsed time. This is crucial for coordinating sound playback with other game events. In the early 1990s, real-time synchronization was a significant challenge due to the limited processing power of MS-DOS systems. By implementing efficient timer management, id Software ensured that audio playback remained consistent, even during intense gameplay. This approach influenced later real-time systems, where precise timing is critical for maintaining performance and user experience."
  - id: "interrupt-service-routine-extreme"
    line_start: 276
    line_end: 337
    title: "Extreme interrupt service routine: 7000Hz"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "This interrupt service routine handles high-frequency (7000Hz) timer interrupts, enabling rapid updates for sound playback. The routine processes PC speaker sound effects, translating sound data into hardware-specific formats and sending it to the speaker. The high interrupt frequency ensures smooth audio playback, a critical feature for Wolfenstein 3D's immersive experience. At the time, achieving this level of performance required deep knowledge of hardware and assembly programming. This routine exemplifies id Software's commitment to pushing the limits of MS-DOS systems, influencing later games that sought to optimize audio and gameplay synchronization."
  - id: "sound-source-processing"
    line_start: 439
    line_end: 474
    title: "Sound Source: FIFO and sample playback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Sound_Source"
    image_url: ""
    image_caption: ""
    content: "This section processes Sound Source samples, checking FIFO status and sending data to the hardware. The logic ensures that samples are played sequentially and stops playback when the sample length reaches zero. The Sound Source was an early audio device that provided improved sound quality compared to the PC speaker. By directly interacting with the hardware, id Software achieved real-time audio playback that enhanced Wolfenstein 3D's gameplay. This technique influenced later games that utilized similar hardware for richer audio experiences."

---

;
;	ID_SD_A.ASM
;	Id Sound Manager assembly stuff

	.286C
	IDEAL
	MODEL	MEDIUM,C
	JUMPS

	INCLUDE 'ID_SD.EQU'

DEBUG	=	0

	EXTRN	SDL_DigitizedDone:FAR
	EXTRN	alOut:FAR

;============================================================================

DATASEG

	EXTRN	sqActive:WORD
	EXTRN	ssSample:DWORD
	EXTRN	ssLengthLeft:WORD
	EXTRN	ssControl:WORD
	EXTRN	ssStatus:WORD
	EXTRN	ssData:WORD
	EXTRN	ssOn:BYTE
	EXTRN	ssOff:BYTE

	EXTRN	pcSound:DWORD
	EXTRN	pcLengthLeft:WORD
	EXTRN	pcLastSample:BYTE
	EXTRN	pcSoundLookup:WORD

	EXTRN	alSound:DWORD
	EXTRN	alBlock:WORD
	EXTRN	alLengthLeft:WORD
	EXTRN	alTimeCount:DWORD

	EXTRN	sqHack:DWORD
	EXTRN	sqHackPtr:DWORD
	EXTRN	sqHackLen:WORD
	EXTRN	sqHackSeqLen:WORD
	EXTRN	sqHackTime:DWORD

	EXTRN	HackCount:WORD
	EXTRN	TimeCount:WORD
	EXTRN	LocalTime:WORD

	EXTRN	TimerCount:WORD
	EXTRN	TimerDivisor:WORD
	EXTRN	t0OldService:DWORD

	EXTRN	SoundMode:WORD
	EXTRN	DigiMode:WORD

	EXTRN	SoundNumber:WORD
	EXTRN	SoundPriority:WORD

count_time	dw	?
count_fx	dw	?

pcdtab	db	00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b
		db	00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b
		db	00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b
		db	00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b
		db	00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b
		db	00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b
		db	00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b
		db	00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b,00b
		db	10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b
		db	10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b
		db	10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b
		db	10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b
		db	10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b
		db	10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b
		db	10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b
		db	10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b,10b


;============================================================================

CODESEG

MyDS	dw	?

pcindicate	dw	?
extreme		dw	?

	PROC	SDL_SetDS
	PUBLIC	SDL_SetDS

	mov	ax,ds
	mov	[cs:MyDS],ds
	ret

	ENDP

;
;	COMMONSTART
;	Macro used for common prefix code
;
	MACRO	COMMONSTART
	IF DEBUG
	push dx
	push ax
	mov	dx,STATUS_REGISTER_1
	in	al,dx
	mov	dx,ATR_INDEX
	mov	al,ATR_OVERSCAN
	out	dx,al
	mov	al,4	; red
	out	dx,al
	ENDIF

	push ds
	push ax

	mov	ds,[cs:MyDS]
	inc	[HackCount]
	ENDM

;
;	DOFX
;	Macro used to do the sound effects code
;
	MACRO	DOFX
	les	di,[pcSound]				; PC sound effects
	mov	ax,es
	or	ax,di
	jz	@@nopc						; nil pointer - no PC sound effect going

	mov	bl,[es:di]					; Get the byte
	inc	[WORD PTR pcSound]			; Increment pointer
	cmp	[pcLastSample],bl			; Is this sample the same as last?
	jz	@@pcsame					; Yep - don't do anything
	mov	[pcLastSample],bl			; No, save it for next time

	or	bl,bl
	jz	@@pcoff						; If 0, turn sounds off
	xor	bh,bh
	shl	bx,1
	mov	bx,[pcSoundLookup+bx]		; Use byte as index into frequency table

	mov	al,0b6h						; Write to channel 2 (speaker) timer
	out	pcTAccess,al
	mov	al,bl
	out	pcTimer,al					; Low byte
	mov	al,bh
	out	pcTimer,al					; High byte

	in	al,pcSpeaker				; Turn the speaker & gate on
	or	al,3
	out	pcSpeaker,al

	jmp @@pcsame

@@pcoff:
	in	al,pcSpeaker  				; Turn the speaker & gate off
	and	al,0fch						; ~3
	out	pcSpeaker,al

@@pcsame:
	dec	[pcLengthLeft]				; Decrement length
	jnz	@@nopc						; If not 0, we're not done with the sound

	mov	ax,0
	mov	[WORD PTR pcSound],ax		; Zero the pointer
	mov	[WORD PTR pcSound + 2],ax
	mov	[SoundNumber],ax    		; Indicate no sound
	mov	[SoundPriority],ax			;  with no priority

	in	al,pcSpeaker  				; Turn the speaker off
	and	al,0fdh						; ~2
	out	pcSpeaker,al
@@nopc:

	les	di,[alSound]				; AdLib sound effects
	mov	ax,es
	or	ax,di
	jz	@@noal						; nil pointer - no AdLib effect going

	xor	ah,ah
	mov	al,[es:di]
	or	al,al
	jz	@@aldone

	CALL alOut C,alFreqL,ax
	mov	ax,[alBlock]

@@aldone:
	CALL alOut C,alFreqH,ax
	inc	[WORD PTR alSound]
	dec	[alLengthLeft]
	jnz	@@noal

	mov	ax,0
	mov	[WORD PTR alSound],ax		; Zero the pointer
	mov	[WORD PTR alSound + 2],ax
	mov	[SoundNumber],ax    		; Indicate no sound
	mov	[SoundPriority],ax			;  with no priority
	CALL alOut C,alFreqH,ax			; Turn off the sound
@@noal:

	ENDM

;
;
;
	MACRO	TIME
	cmp	[count_time],2
	jb	@@notime
	add	[LocalTime],1
	adc	[LocalTime+2],0
	add	[TimeCount],1
	adc	[TimeCount+2],0
	mov	[count_time],0
@@notime:
	ENDM

;
;	COMMONEND
;	Macro used for common suffix code
;
	MACRO	COMMONEND
@@fullexit:
	pop	es
	popa

@@nosave:
	mov	ax,[TimerDivisor]
	add	[TimerCount],ax
	jnc	@@myack

	pushf
	call [t0OldService]
	jmp	@@out

@@myack:
	mov	al,20h
	out	20h,al

@@out:
	pop	ax
	pop	ds

	IF DEBUG
	mov	dx,STATUS_REGISTER_1
	in	al,dx
	mov	dx,ATR_INDEX
	mov	al,ATR_OVERSCAN
	out	dx,al
	mov	al,3	; blue
	out	dx,al
	mov	al,20h	; normal
	out	dx,al
	pop	ax
	pop	dx
	ENDIF

	iret
	ENDM

;
;	SDL_IndicatePC
;
	PROC	SDL_IndicatePC on:WORD
	PUBLIC	SDL_IndicatePC

	mov	ax,[on]
	mov	[cs:pcindicate],ax
	ret

	ENDP

;
;	SDL_t0ExtremeAsmService
;	Timer 0 ISR 7000Hz interrupts
;
	PROC	SDL_t0ExtremeAsmService
	PUBLIC	SDL_t0ExtremeAsmService

	push ax
	mov	al,[BYTE PTR cs:pcindicate]
	or	al,al
	jz	@@done

	push ds
	push es
	pusha

	mov	ds,[cs:MyDS]

	les	di,[pcSound]
	mov	ax,es
	or	ax,di
	jz	@@donereg					; nil pointer

	mov	bl,[es:di]					; Get the byte
	inc	[WORD PTR pcSound]			; Increment pointer

	and	bl,11100000b				; Nuke some of the precision (DEBUG - do this in the table)

	xor	bh,bh
	mov	ah,[pcdtab+bx]				; Translate the byte

	in	al,pcSpeaker
	and	al,11111100b
	or	al,ah
	out	pcSpeaker,al

	dec	[pcLengthLeft]
	jnz	@@donereg

	mov	[WORD PTR pcSound],0		; We're done with this sample
	mov	[WORD PTR pcSound+2],0

	in	al,pcSpeaker
	and	al,11111100b
	out	pcSpeaker,al

	call SDL_DigitizedDone

@@donereg:
	popa
	pop	es
	pop	ds

@@done:
	inc	[cs:extreme]
	cmp	[cs:extreme],10
	jae	@@tofast

	mov	al,20h
	out	20h,al
	pop	ax
	iret

@@tofast:
	mov	[cs:extreme],0
	pop	ax

;	jmp	SDL_t0FastAsmService			; Drops through to SDL_t0FastAsmService

	ENDP

;
;	SDL_t0FastAsmService
;	Timer 0 ISR for 700Hz interrupts
;
	PROC	SDL_t0FastAsmService
	PUBLIC	SDL_t0FastAsmService

	COMMONSTART

	inc	[count_fx]						; Time to do PC/AdLib effects & time?
	cmp	[count_fx],5
	jae	@@dofull

	mov	ax,[sqActive]					; Is the sequencer active?
	or	ax,ax
	jnz	@@dofull

	mov	ax,[WORD PTR ssSample]			; Is there a sample for the Sound Src?
	or	ax,[WORD PTR ssSample+2]
	jz	@@nosave

@@dofull:
	pusha
	push es

	cmp	[count_fx],5
	jb	@@nofx
	mov	[count_fx],0
	DOFX

	inc	[count_time]
	TIME
@@nofx:

	mov	ax,[sqActive]
	or	ax,ax
	jz	@@nosq

	mov	ax,[sqHackLen]
	or	ax,ax
	jz	@@sqdone

	les	di,[sqHackPtr]
@@sqloop:
	mov	ax,[WORD PTR sqHackTime+2]
	cmp	ax,[WORD PTR alTimeCount+2]
	ja	@@sqdone
	mov	ax,[WORD PTR sqHackTime]
	cmp	ax,[WORD PTR alTimeCount]
	ja	@@sqdone

	mov	ax,[es:di+2]					; Get time to next event
	add	ax,[WORD PTR alTimeCount]
	mov	[WORD PTR sqHackTime],ax
	mov	ax,[WORD PTR alTimeCount+2]
	adc	ax,0
	mov	[WORD PTR sqHackTime+2],ax

	mov	ax,[es:di]						; Get register/value pair
	xor	bh,bh
	mov	bl,ah
	xor	ah,ah
	CALL alOut C,ax,bx

	add	di,4
	mov	[WORD PTR sqHackPtr],di

	sub	[sqHackLen],4
	jnz	@@sqloop

@@sqdone:
	add	[WORD PTR alTimeCount],1
	adc	[WORD PTR alTimeCount+2],0
	mov	ax,[sqHackLen]
	or	ax,ax
	jnz	@@nosq

	mov	ax,[WORD PTR sqHack]		; Copy pointer
	mov	[WORD PTR sqHackPtr],ax
	mov	ax,[WORD PTR sqHack+2]
	mov	[WORD PTR sqHackPtr+2],ax

	mov	ax,[sqHackSeqLen]			; Copy length
	mov	[sqHackLen],ax

	mov	ax,0
	mov	[WORD PTR alTimeCount],ax	; Reset time counts
	mov	[WORD PTR alTimeCount+2],ax
	mov	[WORD PTR sqHackTime],ax
	mov	[WORD PTR sqHackTime+2],ax
@@nosq:

	les	di,[ssSample]			; Get pointer to Sound Source sample
	mov	ax,es
	or	ax,di
	jz	@@ssdone				; If nil, skip this

@@ssloop:
	mov	dx,[ssStatus]			; Check to see if FIFO has any empty slots
	in	al,dx
	test al,40h
	jnz	@@ssdone				; Nope - don't push any more data out

	mov	dx,[ssData]
	mov	al,[es:di]				; al = *ssSample
	out	dx,al					; Pump the value out

	mov	dx,[ssControl]			; Pulse printer select
	mov	al,[ssOff]
	out	dx,al
	push ax
	pop	ax
	mov	al,[ssOn]
	out	dx,al

	push ax						; Delay a short while
	pop	ax

	inc	di
	mov	[WORD PTR ssSample],di	; ssSample++

	dec	[ssLengthLeft]
	jnz @@ssloop

	mov	[WORD PTR ssSample],0	; We're done with this sample
	mov	[WORD PTR ssSample+2],0

	call SDL_DigitizedDone
@@ssdone:

	COMMONEND

	ENDP

;
;	SDL_t0SlowAsmService
;	Timer 0 ISR for 140Hz interrupts
;
	PROC	SDL_t0SlowAsmService
	PUBLIC	SDL_t0SlowAsmService

	IF DEBUG
	push dx
	push ax
	mov	dx,STATUS_REGISTER_1
	in	al,dx
	mov	dx,ATR_INDEX
	mov	al,ATR_OVERSCAN
	out	dx,al
	mov	al,4	; red
	out	dx,al
	ENDIF

	push ds
	push ax

	mov	ds,[cs:MyDS]

	inc	[count_time]
	TIME

	mov	ax,[WORD PTR pcSound]		; Is there a PC sound effect going?
	or	ax,[WORD PTR pcSound+2]
	jnz	@@dofull

	mov	ax,[WORD PTR alSound]		; Is there an AdLib sound effect going?
	or	ax,[WORD PTR alSound+2]
	jz	@@nosave

@@dofull:
	pusha
	push es

	DOFX

	COMMONEND

	ENDP

	END