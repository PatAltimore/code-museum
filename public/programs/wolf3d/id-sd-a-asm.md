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
description: "This file implements sound management routines for Wolfenstein 3D, showcasing the ingenuity required to deliver immersive audio on constrained hardware."

summary:
  - point: "Direct manipulation of PC speaker and AdLib sound card hardware"
    link: "https://en.wikipedia.org/wiki/PC_speaker"
    link_label: "PC Speaker"
  - point: "Macros for modular sound effect handling"
    link: "https://en.wikipedia.org/wiki/Macro_(computer_science)"
    link_label: "Macro"
  - point: "Efficient use of interrupt service routines for sound playback"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Lookup tables for sound frequency translation"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Timer-based sequencing for sound effects"
    link: "https://en.wikipedia.org/wiki/Programmable_interval_timer"
    link_label: "Programmable Interval Timer"

enhancements:
  - id: "data-segment-setup"
    line_start: 17
    line_end: 83
    title: "Why Sound Data Needs Its Own Segment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "This section defines the data segment for sound-related variables and external references. In the segmented memory model of x86 architecture, separating sound data into its own segment allows for efficient access and management. The variables include pointers to sound samples, lengths, and control flags for both PC speaker and AdLib sound card effects. At the time, memory segmentation was a necessity due to the 16-bit addressing limitations of the 80286 processor. By organizing sound data in this way, id Software ensured that sound routines could operate independently of other game logic, reducing complexity and improving performance. This approach influenced later sound libraries and engines, which often adopted similar modular designs for handling audio."
  - id: "sdl-setds"
    line_start: 90
    line_end: 97
    title: "Setting the Data Segment: A Simple Yet Vital Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Segmented_memory"
    image_url: ""
    image_caption: ""
    content: "The `SDL_SetDS` procedure sets the data segment register (`ds`) to point to the sound data segment. This operation is critical in the segmented memory model, where different segments are used for code, data, and stack. By explicitly setting the segment, the routine ensures that subsequent sound operations access the correct memory. This kind of manual memory management was a hallmark of programming in the DOS era, requiring developers to carefully orchestrate segment registers to avoid crashes or data corruption. While modern systems abstract away such details, understanding this routine provides insight into the challenges of low-level programming in the early 1990s."
  - id: "macro-dofx"
    line_start: 123
    line_end: 205
    title: "The Macro That Handles Sound Effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Macro_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `DOFX` macro encapsulates the logic for playing sound effects on both the PC speaker and AdLib sound card. It checks for active sound pointers, retrieves sound data, and manipulates hardware registers to produce audio. This modular approach simplifies the codebase by abstracting repetitive tasks into a reusable macro. At the time, macros were a powerful tool for assembly programming, enabling developers to write cleaner and more maintainable code. The `DOFX` macro exemplifies id Software's commitment to efficient and organized programming, a philosophy that influenced the design of later game engines like Quake and Unreal Engine."
  - id: "timer-extreme-service"
    line_start: 276
    line_end: 341
    title: "7000Hz Interrupts: Extreme Sound Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `SDL_t0ExtremeAsmService` routine handles 7000Hz timer interrupts, enabling high-frequency sound playback. This level of precision was rare in games of the era, as it required careful timing and efficient code to avoid performance degradation. The routine manipulates the PC speaker directly, using bitwise operations to control the output. By leveraging the timer interrupt, id Software achieved smoother and more dynamic audio effects, enhancing the immersion of Wolfenstein 3D. This technique demonstrates the team's mastery of hardware-level programming, laying the groundwork for more advanced sound systems in later games."
  - id: "timer-fast-service"
    line_start: 343
    line_end: 479
    title: "700Hz Interrupts: Balancing Speed and Complexity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Programmable_interval_timer"
    image_url: ""
    image_caption: ""
    content: "The `SDL_t0FastAsmService` routine handles 700Hz timer interrupts, striking a balance between precision and performance. It uses the `DOFX` macro to play sound effects and manages sequencing for both PC speaker and AdLib sound card. This routine also incorporates timekeeping logic, ensuring synchronized playback. The choice of 700Hz reflects the constraints of the era, where developers had to optimize interrupt frequency to avoid overwhelming the CPU. This routine showcases id Software's ability to balance technical limitations with gameplay requirements, a skill that contributed to the success of Wolfenstein 3D and later titles like Doom."
  - id: "timer-slow-service"
    line_start: 481
    line_end: 524
    title: "140Hz Interrupts: Slower, But Still Effective"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `SDL_t0SlowAsmService` routine handles 140Hz timer interrupts, providing a lower-frequency option for sound playback. This routine is similar to the fast service but operates at a reduced rate, which could be useful for less time-sensitive audio effects or conserving CPU resources. By offering multiple interrupt frequencies, id Software demonstrated their adaptability to varying hardware capabilities and performance needs. This flexibility was crucial in an era when PC configurations varied widely, ensuring that Wolfenstein 3D could run smoothly on a broad range of systems."

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