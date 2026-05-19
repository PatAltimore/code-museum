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
description: "Assembly routines for long division in Wolfenstein 3D, showcasing optimization for 386 processors and runtime library integration."

summary:
  - point: "Optimized division routines leveraging 386 instructions"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Borland runtime library integration for mathematical operations"
    link: "https://en.wikipedia.org/wiki/Borland"
    link_label: "Borland"
  - point: "Custom handling of signed and unsigned division and remainders"
    link: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    link_label: "Division in mathematics"

enhancements:
  - id: "n-ldiv-entry-point"
    line_start: 28
    line_end: 31
    title: "Entry point for signed long division"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "The `N_LDIV@` label marks the entry point for signed long division. This routine begins by adjusting the stack for a far return, ensuring compatibility with the calling conventions of the Borland runtime library. In 1992, id Software was working within the constraints of MS-DOS and the Intel 80386 processor, which introduced advanced instructions for division. The setup here reflects a deliberate effort to align with Borland's runtime library, a common choice for developers seeking robust mathematical operations. By integrating Borland's library, id Software could focus on game-specific logic rather than reinventing basic arithmetic routines. This entry point sets the stage for efficient division operations, a critical component in the game's performance."
  - id: "f-ldiv-optimized-routine"
    line_start: 33
    line_end: 66
    title: "Optimized signed division for 386 processors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "The `F_LDIV@` routine implements signed division using the Intel 80386's `idiv` instruction, which performs division directly on 32-bit integers. This section includes a fascinating optimization: if the processor is detected as a 386 or better, the initial setup instructions are patched to NOPs, bypassing slower looping code. In 1992, the 386 was a cutting-edge processor, and id Software's decision to optimize for it reflects their commitment to pushing hardware limits. This routine processes the dividend and divisor from the stack, performs the division, and returns the quotient and remainder. The use of `cdq` to extend the sign of the dividend into the `edx` register highlights the precision required for signed arithmetic. This optimization was crucial for Wolfenstein 3D's smooth gameplay, as mathematical operations like division were integral to rendering and physics calculations."
  - id: "n-ludiv-entry-point"
    line_start: 68
    line_end: 71
    title: "Entry point for unsigned long division"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "The `N_LUDIV@` label serves as the entry point for unsigned long division. Similar to `N_LDIV@`, it adjusts the stack for a far return. The distinction between signed and unsigned division is critical in programming, as it determines how negative numbers are handled. In the early 1990s, game developers like id Software had to carefully manage these operations to ensure accurate calculations for gameplay elements like collision detection and movement. This entry point reflects the modular design of the division routines, allowing the runtime library to handle both signed and unsigned cases efficiently."
  - id: "f-ludiv-unsigned-division"
    line_start: 73
    line_end: 75
    title: "Unsigned division routine for precision calculations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "The `F_LUDIV@` routine implements unsigned division, setting up the control register (`cx`) to indicate an unsigned operation before jumping to the common handling code. Unsigned division avoids complications with negative numbers, making it ideal for scenarios where all values are guaranteed to be positive, such as certain graphics calculations. This routine highlights id Software's attention to detail in segregating signed and unsigned operations, ensuring the game's mathematical foundation was robust and error-free."
  - id: "common-handler"
    line_start: 100
    line_end: 124
    title: "Common handler for division operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "The `common` section consolidates shared logic for signed and unsigned division routines. It sets up the stack frame, retrieves the dividend and divisor, and determines whether to use the slow or quick division paths based on the values provided. This modular approach reflects a design philosophy aimed at minimizing code duplication while maximizing efficiency. By centralizing shared logic, id Software ensured consistency across different division operations, reducing the risk of bugs and simplifying maintenance. The decision to branch into slow or quick paths based on high-word values demonstrates an understanding of hardware constraints and the need for adaptive algorithms in performance-critical applications."
  - id: "slow-ldiv-algorithm"
    line_start: 126
    line_end: 142
    title: "Slow division algorithm for edge cases"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "The `slow@ldiv` section handles division when high-word values are non-zero, requiring a more complex algorithm. It includes logic for converting negative values to positive for signed division, storing sign information in control bits for later use. This approach ensures accurate results regardless of input values. In the early 1990s, such edge-case handling was essential for robust software, as hardware limitations often necessitated manual intervention in arithmetic operations. The algorithm's careful handling of signs and its modular design reflect id Software's commitment to precision and reliability in their mathematical routines."
  - id: "quick-ldiv-path"
    line_start: 214
    line_end: 219
    title: "Quick division path for zero high words"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "The `quick@ldiv` section provides a fast division path for cases where high-word values are zero, allowing the use of the processor's native `div` instruction. This optimization bypasses the slower looping algorithm, leveraging hardware capabilities to perform division directly. In 1992, such optimizations were crucial for achieving the smooth gameplay and responsiveness that defined Wolfenstein 3D. By identifying and exploiting scenarios where simpler arithmetic sufficed, id Software demonstrated their expertise in balancing performance and correctness."

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