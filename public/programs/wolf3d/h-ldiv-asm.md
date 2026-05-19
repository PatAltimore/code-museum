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
description: "This file contains the assembly implementation of long division routines used in Wolfenstein 3D, showcasing optimization techniques for integer arithmetic on x86 processors."

summary:
  - point: "Implements signed and unsigned long division routines in x86 assembly"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Optimized for 386 processors using specific instructions like IDIV"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Includes fallback logic for older processors lacking advanced instructions"
    link: "https://en.wikipedia.org/wiki/Instruction_set"
    link_label: "Instruction Set"
  - point: "Handles edge cases like negative values and remainders explicitly"
    link: "https://en.wikipedia.org/wiki/Integer_division"
    link_label: "Integer Division"
  - point: "Demonstrates the importance of low-level optimization in early game engines"
    link: "https://en.wikipedia.org/wiki/Wolfenstein_3D"
    link_label: "Wolfenstein 3D"

enhancements:
  - id: "long-division-entry-points"
    line_start: 28
    line_end: 35
    title: "Entry points for long division routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Function_prologue_and_epilogue"
    image_url: ""
    image_caption: ""
    content: "This section defines the entry points for various long division routines, including signed and unsigned division. Each entry point adjusts the stack for far returns and prepares the processor for execution. At the time, handling signed and unsigned division separately was critical due to the lack of high-level abstractions in assembly. These routines were part of Borland's runtime library, repurposed for Wolfenstein 3D. By leveraging existing libraries, id Software could focus on game-specific optimizations rather than reinventing basic arithmetic operations. This modular approach influenced later game engines, which often reused or adapted existing libraries for efficiency."
  - id: "386-optimized-long-division"
    line_start: 54
    line_end: 64
    title: "Optimized division for 386 processors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "This section uses the Intel 80386's `IDIV` instruction to perform signed long division directly. The code sets up the stack frame, loads the dividend and divisor into registers, and executes the division using `IDIV`. The result is stored in `EDX` and `EAX`, with the remainder shifted for further use. In 1992, optimizing for specific processors like the 386 was essential for performance, as many players were still using older hardware. John Carmack's focus on squeezing every ounce of speed from available processors helped Wolfenstein 3D achieve its groundbreaking performance. This technique of tailoring code to specific hardware became a hallmark of id Software's development philosophy, influencing later titles like Doom and Quake."
  - id: "unsigned-division-entry-points"
    line_start: 68
    line_end: 75
    title: "Entry points for unsigned division routines"
    wikipedia_url: "https://en.wikipedia.org/wiki/Integer_division"
    image_url: ""
    image_caption: ""
    content: "This section introduces the entry points for unsigned division routines, setting up the stack and marking the operation as unsigned. Unsigned division is crucial for scenarios where negative values are not expected, such as certain physics calculations or memory addressing. By explicitly separating signed and unsigned operations, the code avoids unnecessary checks and ensures correctness. This separation reflects the low-level control required in assembly programming, where every instruction matters. The approach influenced later game engines, which often included similar modular arithmetic routines for handling diverse mathematical operations efficiently."
  - id: "handling-remainders-and-negatives"
    line_start: 77
    line_end: 150
    title: "Handling remainders and negative values"
    wikipedia_url: "https://en.wikipedia.org/wiki/Integer_division"
    image_url: ""
    image_caption: ""
    content: "This section handles edge cases for division, including remainders and negative values. The code tests the sign of the dividend and divisor, converts negative values to positive, and stores flags indicating the sign of the result. It also includes logic for calculating remainders when requested. At the time, handling these edge cases explicitly was necessary due to the lack of built-in abstractions in assembly. This meticulous attention to detail ensured that the division routines worked correctly in all scenarios, a critical requirement for a game engine where precision impacts gameplay. The techniques demonstrated here influenced later systems, which often included robust error handling and edge case management in their arithmetic libraries."
  - id: "slow-and-quick-division-paths"
    line_start: 151
    line_end: 224
    title: "Slow and quick division paths"
    wikipedia_url: "https://en.wikipedia.org/wiki/Instruction_set"
    image_url: ""
    image_caption: ""
    content: "This section implements two paths for division: a slow path for older processors and a quick path for newer ones. The slow path uses bitwise operations to simulate division, while the quick path leverages the `DIV` instruction for faster execution. This dual-path approach reflects the constraints of the early 1990s, when game developers had to account for a wide range of hardware capabilities. By including both paths, id Software ensured that Wolfenstein 3D could run on older machines while still taking advantage of newer processors. This adaptability influenced later game engines, which often included similar fallback mechanisms to maximize compatibility across diverse hardware."

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