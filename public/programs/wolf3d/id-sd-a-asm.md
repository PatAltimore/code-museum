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
description: "This file implements the sound manager for Wolfenstein 3D, showcasing ingenious techniques to handle sound effects on limited hardware."

summary:
  - point: "Introduces efficient sound handling for PC speaker and AdLib hardware"
    link: "https://en.wikipedia.org/wiki/PC_speaker"
    link_label: "PC Speaker"
  - point: "Uses assembly macros to streamline sound effect processing"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Demonstrates interrupt-driven sound playback for real-time effects"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Optimizes sound playback by leveraging lookup tables and hardware registers"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Pushes the limits of 1992-era hardware for immersive audio experiences"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"

enhancements:
  - id: "data-segment-setup"
    line_start: 17
    line_end: 83
    title: "Why Sound Data Needs Its Own Segment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "This section defines the DATASEG, which houses external variables and constants required for sound management. The programmer sets aside a dedicated memory segment for sound-related data, ensuring efficient access and organization. At the time, memory segmentation was a fundamental part of x86 programming, as the Intel 286 processor required programmers to manage memory in discrete segments. By isolating sound-related variables, id Software could optimize performance and simplify debugging. This approach reflects the constraints of early DOS systems, where memory was scarce and every byte counted. The variables defined here, such as `pcSound` and `alSound`, represent pointers and counters for sound effects, while lookup tables like `pcdtab` translate raw sound data into frequencies. This segmentation strategy influenced later game engines, which adopted similar practices for organizing memory-intensive operations like audio and graphics."
  - id: "commonstart-macro"
    line_start: 99
    line_end: 121
    title: "The Macro That Simplified Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Macro_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `COMMONSTART` macro encapsulates boilerplate setup code for sound routines. It pushes registers onto the stack, sets the data segment, and increments a debug counter. Macros like this were essential in assembly programming, reducing repetitive code and minimizing errors. Debugging tools were rudimentary in 1992, so macros provided a way to standardize operations across multiple routines. The inclusion of debug-specific instructions, such as changing the overscan color, highlights the team's focus on testing under constrained conditions. This macro reflects the meticulous attention to detail required to develop complex software on early PCs. The practice of using macros for common setup tasks influenced later programming paradigms, including inline functions in C and preprocessor directives in modern languages."
  - id: "pc-speaker-sound-effect"
    line_start: 123
    line_end: 175
    title: "How Wolfenstein Made the PC Speaker Sing"
    wikipedia_url: "https://en.wikipedia.org/wiki/PC_speaker"
    image_url: ""
    image_caption: ""
    content: "This section handles sound effects for the PC speaker, a primitive audio device capable of producing simple tones. The code uses a lookup table (`pcSoundLookup`) to map sound data to frequencies, then manipulates hardware registers to play the sound. The speaker is toggled on and off using precise timing, creating the illusion of more complex audio. In the early 1990s, the PC speaker was the most common sound output device, but its limitations forced developers to innovate. John Carmack and the team at id Software used clever techniques like frequency modulation and rapid toggling to enhance the speaker's capabilities. These methods were groundbreaking at the time, inspiring other developers to push the boundaries of low-cost audio hardware. The PC speaker routines in Wolfenstein 3D laid the groundwork for more sophisticated sound engines in later games."
  - id: "adlib-sound-effect"
    line_start: 176
    line_end: 205
    title: "AdLib: The Sound Card That Changed Gaming"
    wikipedia_url: "https://en.wikipedia.org/wiki/AdLib"
    image_url: ""
    image_caption: ""
    content: "This section manages sound effects for the AdLib sound card, a popular audio device in the early 1990s. The code interacts with the AdLib's FM synthesis capabilities, sending frequency and block data to its registers via the `alOut` routine. The AdLib card was revolutionary, offering richer audio compared to the PC speaker. Its FM synthesis allowed developers to create dynamic soundscapes, enhancing immersion in games like Wolfenstein 3D. The routines here demonstrate id Software's mastery of hardware-level programming, using direct register manipulation to achieve precise control over audio playback. The AdLib's influence extended far beyond Wolfenstein, shaping the soundtracks of countless DOS games and establishing FM synthesis as a staple of early PC gaming."
  - id: "timer-driven-sound-service"
    line_start: 276
    line_end: 337
    title: "Interrupts: The Secret to Real-Time Sound"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `SDL_t0ExtremeAsmService` routine handles sound playback using a high-frequency timer interrupt. By executing sound routines during 7000Hz interrupts, the code achieves real-time audio effects. Interrupt-driven programming was a hallmark of performance-critical applications in the early 1990s. It allowed developers to synchronize audio with gameplay without sacrificing responsiveness. This routine showcases id Software's ability to exploit hardware features for maximum efficiency. The use of interrupts for sound playback became a standard technique in game development, influencing audio engines in later titles like Doom and Quake. The legacy of this approach is evident in modern real-time systems, where interrupt handling remains a cornerstone of performance optimization."

---

```asm
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
```
