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
description: "This file is a cornerstone of Wolfenstein 3D's sound system, showcasing the assembly-level ingenuity required to deliver immersive audio on early 1990s hardware."

summary:
  - point: "Direct manipulation of PC speaker and AdLib sound card registers"
    link: "https://en.wikipedia.org/wiki/PC_speaker"
    link_label: "PC Speaker"
  - point: "Custom interrupt service routines for sound effects timing"
    link: "https://en.wikipedia.org/wiki/Interrupt_handler"
    link_label: "Interrupt Handler"
  - point: "Efficient use of macros for sound effect processing"
    link: "https://en.wikipedia.org/wiki/Macro_(computer_science)"
    link_label: "Macro"
  - point: "Lookup tables for sound frequency translation"
    link: "https://en.wikipedia.org/wiki/Lookup_table"
    link_label: "Lookup Table"
  - point: "Optimized assembly code for real-time audio playback"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "data-segment-external-references"
    line_start: 19
    line_end: 81
    title: "Mapping the Sound System's Data Landscape"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "This section defines the data segment, a critical area where external references to sound-related variables are declared. These variables include pointers to sound effects, control flags, and timing counters. In 1992, memory segmentation was a necessity due to the limitations of the x86 architecture, which operated within a 16-bit address space. Programmers like John Carmack had to carefully manage memory to fit both code and data into constrained environments. The external references here link the assembly routines to higher-level C code, enabling seamless integration of sound playback with the game's logic. This approach reflects the modular design philosophy of id Software, where assembly was used for performance-critical tasks while C handled broader game logic. The data segment's meticulous organization allowed Wolfenstein 3D to deliver real-time sound effects without compromising gameplay performance—a feat that set a precedent for future game engines."
  - id: "sound-effect-macros"
    line_start: 126
    line_end: 205
    title: "Macros: The Unsung Heroes of Sound Effects"
    wikipedia_url: "https://en.wikipedia.org/wiki/Macro_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The DOFX macro encapsulates the logic for processing sound effects, including PC speaker and AdLib sound card interactions. Macros like this were essential for reducing code duplication and simplifying complex assembly routines. In the early 1990s, game developers faced tight deadlines and hardware constraints, making reusable code structures invaluable. John Carmack's use of macros here demonstrates his mastery of assembly language, enabling efficient sound playback while maintaining readability. The macro handles tasks such as fetching sound data, translating frequencies using lookup tables, and controlling hardware registers. This level of control was necessary to achieve the immersive audio experience that Wolfenstein 3D is known for. The DOFX macro also highlights the interplay between assembly and hardware, showcasing the low-level programming skills that defined early PC gaming."
  - id: "timer-interrupt-service"
    line_start: 280
    line_end: 337
    title: "7000Hz Interrupts: Precision Timing for Audio"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The SDL_t0ExtremeAsmService routine is an interrupt service handler triggered at 7000Hz, ensuring precise timing for sound effects. Interrupts were a cornerstone of real-time systems, allowing the CPU to respond to events without polling. In Wolfenstein 3D, this mechanism was used to synchronize audio playback with gameplay. The routine processes sound data, updates pointers, and interacts with hardware registers—all within the constraints of an interrupt context. This required careful optimization to avoid delays that could impact performance. The use of interrupts reflects the challenges of early PC gaming, where developers had to balance responsiveness with computational overhead. Carmack's implementation demonstrates his ability to push hardware to its limits, delivering an audio system that felt seamless despite the era's technological limitations."
  - id: "sound-sequencer-loop"
    line_start: 390
    line_end: 415
    title: "Sequencing Sound Events in Real Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Real-time_computing"
    image_url: ""
    image_caption: ""
    content: "This loop processes sound sequences, updating timing and triggering events based on predefined schedules. Real-time sound sequencing was a novel approach in 1992, enabling dynamic audio that responded to gameplay. The code calculates the time to the next event, updates pointers, and sends data to the AdLib sound card. This level of detail was necessary to create the immersive soundscape of Wolfenstein 3D, where audio played a crucial role in building tension and atmosphere. The sequencer's design reflects the influence of Carmack's background in programming demos, where synchronization between visuals and audio was paramount. By adapting these techniques to gaming, id Software set a new standard for interactive sound design, influencing countless titles that followed."

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