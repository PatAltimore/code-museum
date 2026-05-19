---
title: "H_LDIV.ASM"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/H_LDIV.ASM"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/H_LDIV.ASM"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "h-ldiv-asm"
order: 25
description: "This file contains assembly routines for performing long division operations, showcasing optimization techniques for 386 processors in the early 1990s."

summary:
  - point: "Optimized long division for 386 processors"
    link: "https://en.wikipedia.org/wiki/Intel_386"
    link_label: "Intel 386"
  - point: "Handling signed and unsigned division with bitwise control"
    link: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    link_label: "Division"
  - point: "Fallback routines for older hardware compatibility"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"

enhancements:
  - id: "long-division-entry-point"
    line_start: 28
    line_end: 35
    title: "Entry points for long division routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "These lines define entry points for various long division routines, including signed and unsigned division. The programmer sets up the stack and prepares for the division operation by initializing registers. In 1992, efficient division was critical for performance, especially in games like Wolfenstein 3D, which relied on rapid calculations for rendering and gameplay logic. The use of assembly allowed id Software to squeeze every ounce of performance from the Intel 386 processor, which was state-of-the-art at the time. These entry points reflect the careful attention to detail required to manage hardware constraints while delivering smooth gameplay."
  - id: "386-optimization-patch"
    line_start: 37
    line_end: 41
    title: "Optimizing for Intel 386 processors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_386"
    image_url: ""
    image_caption: ""
    content: "Here, the programmer notes that certain instructions are patched to NOPs (no-operations) on 386 processors, enabling the use of the processor's built-in long division instruction. This optimization reflects the transition from older looping division algorithms to hardware-accelerated operations. In 1992, the Intel 386 was a powerful processor, and leveraging its capabilities was essential for achieving the fast-paced gameplay of Wolfenstein 3D. This section highlights the ingenuity of id Software's developers, who were constantly finding ways to push hardware to its limits."
  - id: "stack-frame-setup"
    line_start: 54
    line_end: 64
    title: "Setting up the stack frame for division"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "This section sets up the stack frame for the division routine, saving the base pointer and loading dividend and divisor values into registers. The stack layout is meticulously documented, reflecting the programmer's need to manage memory and register states explicitly in assembly language. In the early 1990s, games like Wolfenstein 3D had to run on machines with limited memory and processing power, making efficient stack management crucial. This setup ensures that the division routine can execute reliably, even under the constraints of MS-DOS and the Intel 386 architecture."
  - id: "signed-division-handling"
    line_start: 128
    line_end: 150
    title: "Handling signed division in assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Signed_number_representation"
    image_url: ""
    image_caption: ""
    content: "This section handles signed division by converting negative values to positive before performing an unsigned division. The sign is stored in control bits, allowing the routine to adjust the result's sign after the division. Signed arithmetic was a complex problem in assembly programming, requiring careful manipulation of bits and registers. In the context of Wolfenstein 3D, such routines were vital for calculations involving player movement, collision detection, and other game mechanics. The approach reflects the programmer's deep understanding of both mathematics and hardware limitations."
  - id: "slow-division-algorithm"
    line_start: 155
    line_end: 189
    title: "Slow division algorithm for compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_algorithm"
    image_url: ""
    image_caption: ""
    content: "This section implements a slow division algorithm using bitwise shifts and subtraction, ensuring compatibility with older processors that lack hardware division instructions. The algorithm builds the quotient bit by bit, a method that was common in assembly programming before hardware acceleration became widespread. In 1992, id Software had to ensure their game could run on a wide range of hardware, from cutting-edge Intel 386 machines to older systems. This fallback routine demonstrates the team's commitment to accessibility and performance, ensuring that Wolfenstein 3D could reach as many players as possible."
  - id: "quick-division-path"
    line_start: 214
    line_end: 224
    title: "Quick division path for modern processors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_386"
    image_url: ""
    image_caption: ""
    content: "This section uses the Intel 386's hardware division instruction for quick division, bypassing the slower algorithm. The routine checks control bits to determine whether the remainder or quotient is needed, optimizing for the specific operation. By leveraging the capabilities of modern processors, id Software was able to achieve the fast calculations required for Wolfenstein 3D's real-time gameplay. This optimization reflects the team's forward-thinking approach, ensuring their code could take full advantage of the latest hardware advancements while maintaining compatibility with older systems."

---

;[]-----------------------------------------------------------------[]
;|      H_LDIV.ASM -- long division routine                          |
;|                                                                   |
;|      C/C++ Run Time Library        Version 4.0                    |
;|                                                                   |
;|      Copyright (c) 1987, 1991 by Borland International Inc.       |
;|      All Rights Reserved.                                         |
;[]-----------------------------------------------------------------[]
.model medium
	INCLUDE RULES.ASI
.386C   ;JAB - we use 386 instructions

_TEXT   segment public byte 'CODE'
	assume  cs:_TEXT
	public  LDIV@
	public  F_LDIV@
	public  N_LDIV@
	public  LUDIV@
	public  F_LUDIV@
		public  N_LUDIV@
	public  LMOD@
	public  F_LMOD@
		public  N_LMOD@
	public  LUMOD@
	public  F_LUMOD@
		public  N_LUMOD@

N_LDIV@:
		pop     cx                      ;fix up far return
		push    cs
		push    cx
LDIV@:
F_LDIV@:
	xor     cx,cx                   ; signed divide
	jmp     short common

;       JAB
;
;       If we're using a 386 or better, the two instructions above get patched
;               to be NOP's (4 of them). So, instead of using the looping code,
;               we use the 386's long divide instruction.
;
;       The stack after setting up the stack frame:
;               12[bp]: divisor (high word)
;               10[bp]: divisor (low word)
;                8[bp]: dividend (high word)
;                6[bp]: dividend (low word)
;                4[bp]: return CS
;                2[bp]: return IP
;                0[bp]: previous BP
;
	IDEAL

	push bp
	mov     bp,sp   ;Save BP, and set it equal to stack

	mov     eax,[DWORD PTR bp+6]
	cdq
	idiv [DWORD PTR bp+10]
	mov     edx,eax
	shr     edx,16

	pop     bp              ;Restore BP
	retf    8       ;Return to original caller

	MASM

N_LUDIV@:
		pop     cx                      ;fix up far return
		push    cs
		push    cx
LUDIV@:
F_LUDIV@:
	mov     cx,1                    ; unsigned divide
	jmp     short common

N_LMOD@:
		pop     cx                      ;fix up far return
		push    cs
		push    cx
LMOD@:
F_LMOD@:
	mov     cx,2                    ; signed remainder
	jmp     short   common

N_LUMOD@:
		pop     cx                      ;fix up far return
		push    cs
		push    cx
LUMOD@:
F_LUMOD@:
	mov     cx,3                    ; unsigned remainder

;
;       di now contains a two bit control value.  The low order
;       bit (test mask of 1) is on if the operation is unsigned,
;       signed otherwise.  The next bit (test mask of 2) is on if
;       the operation returns the remainder, quotient otherwise.
;
common:
	push    bp
	push    si
	push    di
	mov     bp,sp                   ; set up frame
	mov     di,cx
;
;       dividend is pushed last, therefore the first in the args
;       divisor next.
;
	mov     ax,10[bp]               ; get the first low word
	mov     dx,12[bp]               ; get the first high word
	mov     bx,14[bp]               ; get the second low word
	mov     cx,16[bp]               ; get the second high word

	or      cx,cx
	jnz     slow@ldiv               ; both high words are zero

	or      dx,dx
	jz      quick@ldiv

	or      bx,bx
	jz      quick@ldiv              ; if cx:bx == 0 force a zero divide
					; we don't expect this to actually
					; work

slow@ldiv:

	test    di,1                    ; signed divide?
	jnz     positive                ; no: skip
;
;               Signed division should be done.  Convert negative
;               values to positive and do an unsigned division.
;               Store the sign value in the next higher bit of
;               di (test mask of 4).  Thus when we are done, testing
;               that bit will determine the sign of the result.
;
	or      dx,dx                   ; test sign of dividend
	jns     onepos
	neg     dx
	neg     ax
	sbb     dx,0                    ; negate dividend
	or      di,0Ch
onepos:
	or      cx,cx                   ; test sign of divisor
	jns     positive
	neg     cx
	neg     bx
	sbb     cx,0                    ; negate divisor
	xor     di,4
positive:
	mov     bp,cx
	mov     cx,32                   ; shift counter
	push    di                      ; save the flags
;
;       Now the stack looks something like this:
;
;               16[bp]: divisor (high word)
;               14[bp]: divisor (low word)
;               12[bp]: dividend (high word)
;               10[bp]: dividend (low word)
;                8[bp]: return CS
;                6[bp]: return IP
;                4[bp]: previous BP
;                2[bp]: previous SI
;                 [bp]: previous DI
;               -2[bp]: control bits
;                       01 - Unsigned divide
;                       02 - Remainder wanted
;                       04 - Negative quotient
;                       08 - Negative remainder
;
	xor     di,di                   ; fake a 64 bit dividend
	xor     si,si                   ;
xloop:
	shl     ax,1                    ; shift dividend left one bit
	rcl     dx,1
	rcl     si,1
	rcl     di,1
	cmp     di,bp                   ; dividend larger?
	jb      nosub
	ja      subtract
	cmp     si,bx                   ; maybe
	jb      nosub
subtract:
	sub     si,bx
	sbb     di,bp                   ; subtract the divisor
	inc     ax                      ; build quotient
nosub:
	loop    xloop
;
;       When done with the loop the four register value look like:
;
;       |     di     |     si     |     dx     |     ax     |
;       |        remainder        |         quotient        |
;
	pop     bx                      ; get control bits
	test    bx,2                    ; remainder?
	jz      usequo
	mov     ax,si
	mov     dx,di                   ; use remainder
	shr     bx,1                    ; shift in the remainder sign bit
usequo:
	test    bx,4                    ; needs negative
	jz      finish
	neg     dx
	neg     ax
	sbb     dx,0                    ; negate
finish:
	pop     di
	pop     si
	pop     bp
	retf    8

quick@ldiv:
	div     bx                      ; unsigned divide
					; DX = remainder AX = quotient
	test    di,2                    ; want remainder?
	jz      quick@quo
		xchg    ax,dx

quick@quo:

	xor     dx,dx
		jmp     short finish

_TEXT   ends
	end