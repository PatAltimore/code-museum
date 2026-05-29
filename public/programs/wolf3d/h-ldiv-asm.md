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
description: "A deep dive into Wolfenstein 3D's long division routine, showcasing optimization for 386 processors and clever handling of signed and unsigned division."

summary:
  - point: "Optimized long division leveraging 386 instructions"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Handles signed and unsigned division with modular control"
    link: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    link_label: "Division in mathematics"
  - point: "Fallback mechanism for older processors without 386 instructions"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Efficient remainder and quotient extraction"
    link: "https://en.wikipedia.org/wiki/Integer_division"
    link_label: "Integer division"
  - point: "Influence on later game engines requiring fast math routines"
    link: "https://en.wikipedia.org/wiki/Doom_(1993_video_game)"
    link_label: "Doom"

enhancements:
  - id: "long-division-386-optimization"
    line_start: 28
    line_end: 64
    title: "Why Long Division Needed 386 Instructions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "This section implements a long division routine optimized for Intel 386 processors. The code begins by setting up the stack frame to handle the dividend and divisor, then uses the `idiv` instruction to perform signed division directly on 32-bit values. The `cdq` instruction ensures proper sign extension for the dividend, a crucial step for signed division. The routine concludes by restoring the stack and returning to the caller. In 1992, the Intel 386 processor was becoming standard in consumer PCs, offering significant performance improvements over its predecessors. By leveraging the 386's native instructions, id Software ensured Wolfenstein 3D could run efficiently on modern hardware while maintaining compatibility with older systems. This dual-path approach—using patched NOPs for older processors—allowed the game to reach a wider audience. The optimization here was critical for Wolfenstein 3D's fast-paced gameplay. Division operations are computationally expensive, and the ability to execute them quickly contributed to the game's smooth scrolling and responsive controls. Later game engines, including Doom, built on these techniques, further refining math routines for real-time applications. The use of processor-specific optimizations became a hallmark of id Software's programming style, influencing the development of high-performance engines like Quake and beyond."
  - id: "modular-control-for-division"
    line_start: 68
    line_end: 92
    title: "How Modular Control Simplifies Division"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "This section introduces modular control for handling signed and unsigned division, as well as remainders. The control bits stored in the `di` register dictate the operation: whether the division is signed or unsigned, and whether the remainder or quotient is returned. The modular approach allows the same code to handle multiple scenarios, reducing redundancy and simplifying maintenance. In the early 1990s, modular programming was gaining traction as developers sought ways to manage increasing code complexity. This technique reflects id Software's emphasis on efficiency and adaptability. By encoding operation details in control bits, the routine avoids branching into separate functions for each case, saving precious cycles and memory. This modular control mechanism influenced later game engines and libraries that required flexible math operations. For example, the Quake engine incorporated similar techniques to handle floating-point math efficiently. The concept of encoding operation details in compact formats persists in modern programming, seen in instruction set architectures and shader programming for GPUs."
  - id: "slow-path-for-legacy-processors"
    line_start: 123
    line_end: 212
    title: "The Slow Path for Legacy Processors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This section implements a fallback mechanism for processors lacking 386 instructions. When the high words of the dividend and divisor are non-zero, the routine enters a slower loop-based division algorithm. This approach manually shifts and subtracts bits to compute the quotient and remainder, mimicking the behavior of hardware division. In 1992, not all PCs had 386 processors. Many users still relied on older 286 or even 8086 machines, which lacked native support for 32-bit division. By including a slow path, id Software ensured Wolfenstein 3D could run on a broader range of hardware, maximizing its market reach. The loop-based algorithm reflects the constraints of the era, where developers often had to write software that could adapt to varying hardware capabilities. This fallback mechanism highlights the importance of backward compatibility in software design. It influenced later game engines, which adopted similar strategies to support diverse hardware configurations. Today, the principle of accommodating legacy systems persists in software development, from operating systems to web browsers, ensuring accessibility for users with older devices."
  - id: "quick-path-for-unsigned-division"
    line_start: 214
    line_end: 224
    title: "The Quick Path for Unsigned Division"
    wikipedia_url: "https://en.wikipedia.org/wiki/Integer_division"
    image_url: ""
    image_caption: ""
    content: "This section implements a fast path for unsigned division when the high words of the dividend and divisor are zero. The routine uses the `div` instruction to compute the quotient and remainder directly, bypassing the slower loop-based algorithm. It then checks the control bits to determine whether to return the remainder or quotient. Unsigned division is simpler than signed division, as it avoids the need for sign extension and negation. By optimizing for this case, id Software reduced the computational overhead for common scenarios, contributing to Wolfenstein 3D's performance. The quick path reflects the game's design philosophy: prioritize speed and responsiveness to enhance the player's experience. This optimization influenced later game engines and libraries, which adopted similar techniques to handle math operations efficiently. The concept of fast paths for specific cases persists in modern programming, seen in branch prediction and SIMD (Single Instruction, Multiple Data) operations. The legacy of these optimizations can be traced to the high-performance demands of real-time applications like games."

---

```asm
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
```