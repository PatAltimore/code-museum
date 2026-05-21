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
description: "This file implements a long division routine used in Wolfenstein 3D, showcasing how assembly language was leveraged to optimize mathematical operations on constrained hardware."

summary:
  - point: "Uses 386-specific instructions for optimized division"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Handles signed and unsigned division with clever flag manipulation"
    link: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    link_label: "Division"
  - point: "Includes fallback logic for older CPUs without 386 features"
    link: "https://en.wikipedia.org/wiki/Backward_compatibility"
    link_label: "Backward Compatibility"
  - point: "Optimizes division and remainder calculations with bitwise operations"
    link: "https://en.wikipedia.org/wiki/Bitwise_operation"
    link_label: "Bitwise Operations"
  - point: "Demonstrates stack manipulation for parameter passing and control flow"
    link: "https://en.wikipedia.org/wiki/Call_stack"
    link_label: "Call Stack"

enhancements:
  - id: "long-division-on-386-cpus"
    line_start: 30
    line_end: 64
    title: "Long Division on 386 CPUs: Faster Math"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "This section implements a long division routine optimized for Intel 386 processors. The programmer uses the `idiv` instruction, which performs signed division directly on 32-bit registers (`eax` and `edx`). The code sets up the stack frame to retrieve the dividend and divisor, performs the division, and then adjusts the result to fit the expected format. The use of `cdq` ensures the sign extension of the dividend, a critical step for signed division. At the time, the 386 processor was a major leap forward, introducing 32-bit registers and instructions that allowed faster and more efficient mathematical operations compared to earlier 16-bit CPUs. This optimization reflects the programmer's deep understanding of the hardware and the need for speed in a game like Wolfenstein 3D, where every CPU cycle mattered. The reliance on 386-specific instructions also highlights the transition in the early 1990s toward more powerful processors, enabling developers to push the boundaries of real-time graphics and gameplay. This approach influenced later game engines, where hardware-specific optimizations became standard practice to achieve high performance."
  - id: "signed-vs-unsigned-division"
    line_start: 68
    line_end: 84
    title: "Signed vs. Unsigned Division: A Flag-Based Solution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "This section introduces a flag-based mechanism to handle signed and unsigned division. The `cx` register is set to different values depending on whether the operation is signed (`xor cx, cx`) or unsigned (`mov cx, 1`). The code later uses these flags to determine how to process the division and remainder calculations. This approach reflects the constraints of assembly programming, where explicit control over data types and operations is necessary. In the early 1990s, high-level languages like C were gaining popularity, but assembly was still essential for performance-critical tasks. The use of flags to distinguish signed and unsigned operations demonstrates the programmer's ingenuity in managing low-level details efficiently. This technique influenced later game engines and software libraries, where similar mechanisms were used to optimize mathematical operations in performance-sensitive contexts."
  - id: "slow-division-algorithm"
    line_start: 123
    line_end: 212
    title: "Slow Division Algorithm: When Hardware Falls Short"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "This section implements a slow division algorithm using bitwise operations for environments where the hardware does not support efficient division. The algorithm shifts the dividend left one bit at a time (`shl ax, 1`) and compares it to the divisor, subtracting when necessary to build the quotient. This approach is a fallback for CPUs that lack the `idiv` instruction or when high words in the divisor and dividend are non-zero. In the early 1990s, developers often had to account for hardware limitations, especially when targeting a broad range of machines. This algorithm reflects the ingenuity required to perform complex mathematical operations without relying on advanced hardware features. While slower than the 386-specific implementation, it ensures correctness and compatibility across different CPUs. Techniques like this influenced later software development, where fallback algorithms became a standard way to handle diverse hardware capabilities, ensuring broader accessibility and reliability."
  - id: "quick-division-path"
    line_start: 214
    line_end: 224
    title: "Quick Division Path: Optimizing for Zero Cases"
    wikipedia_url: "https://en.wikipedia.org/wiki/Division_(mathematics)"
    image_url: ""
    image_caption: ""
    content: "This section handles quick division cases where the high words of the dividend and divisor are zero. The `div` instruction is used directly on the low words (`div bx`), bypassing the slower bitwise algorithm. This optimization reflects the programmer's attention to common cases where division can be simplified. In performance-critical applications like Wolfenstein 3D, identifying and optimizing for frequent scenarios is crucial to maintaining smooth gameplay. By implementing a quick path for zero cases, the routine minimizes unnecessary computations, saving valuable CPU cycles. This approach influenced later game engines and software libraries, where optimizing for common cases became a standard practice to improve performance."

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
