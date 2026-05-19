---
title: "WL_ASM.ASM"
program: "Wolfenstein 3D"
program_slug: "wolf3d"
file_path: "WOLFSRC/WL_ASM.ASM"
language: "C, x86 Assembly"
github_url: "https://github.com/id-Software/wolf3d/blob/master/WOLFSRC/WL_ASM.ASM"
year: 1992
author: "John Carmack, John Romero, Tom Hall"
slug: "wl-asm-asm"
order: 24
description: "This file contains assembly routines used in Wolfenstein 3D, showcasing clever hardware detection and runtime patching techniques."

summary:
  - point: "Detects CPU type to optimize for 386 processors"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Runtime patching of code for performance improvements"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Demonstrates low-level optimization techniques common in early 1990s programming"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "cpu-detection-checkis386"
    line_start: 17
    line_end: 48
    title: "Detecting the CPU: Is it a 386?"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `_CheckIs386`, determines whether the CPU is an Intel 80386 or a lower-tier processor like the 8086 or 80286. It uses the processor's flag register to test specific bits that behave differently across CPU generations. By pushing and popping values onto the stack and manipulating the flag register, the routine identifies whether the CPU supports certain advanced features introduced with the 386. In 1992, hardware detection was critical for software like Wolfenstein 3D, which aimed to push the limits of available technology. The Intel 80386, released in 1985, introduced 32-bit computing and virtual memory capabilities, making it vastly more powerful than its predecessors. Detecting the CPU allowed programmers to tailor their code for optimal performance, avoiding costly operations on less capable hardware. John Carmack's team adapted this technique from earlier assembly programming practices, likely borrowing ideas from hardware manuals and existing code libraries. The comment credits Juan Jimenez, suggesting this routine was modified from his original implementation. This approach to hardware detection influenced later game engines and software development practices, where runtime optimization became standard. The ability to detect and adapt to hardware capabilities laid the groundwork for dynamic configuration systems in modern software. Techniques like this were precursors to the hardware abstraction layers seen in operating systems like Windows and macOS. Today, CPU detection is often handled by high-level APIs, but the ingenuity of these early routines remains a testament to the challenges developers faced in the era of direct hardware programming."
  - id: "runtime-patching-jabhack2"
    line_start: 51
    line_end: 65
    title: "Runtime Code Patching: A Bold Optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The `_jabhack2` subroutine demonstrates a daring technique: runtime code patching. It modifies the machine code of the `LDIV@` routine in memory, replacing instructions with NOPs (no-operations). Specifically, it overwrites an XOR and a JMP instruction with two NOPs, effectively neutralizing them. Self-modifying code was a controversial yet ingenious approach to optimization in the early 1990s. By altering the program's behavior at runtime, developers could bypass unnecessary instructions or adapt the code for specific conditions. This technique was particularly useful in performance-critical applications like games, where every CPU cycle mattered. The use of runtime patching in Wolfenstein 3D reflects the team's commitment to squeezing every ounce of performance from the hardware. MS-DOS, the operating system for which the game was developed, offered limited tools for managing memory and CPU resources. Techniques like this were born out of necessity, as developers sought to overcome these constraints. While self-modifying code is rare in modern programming due to security concerns and the complexity of debugging, it influenced the development of dynamic code generation techniques used in just-in-time (JIT) compilers. JIT compilation, seen in languages like Java and Python, dynamically generates optimized machine code at runtime, echoing the principles of self-modifying code. The boldness of `_jabhack2` showcases the ingenuity of early game developers and their willingness to push boundaries to achieve groundbreaking results."

---

; JABHACK.ASM

.386C
IDEAL
MODEL	MEDIUM

EXTRN	LDIV@:far

;============================================================================

DATASEG

;============================================================================

CODESEG

;	Hacked up Juan Jimenez's code a bit to just return 386/not 386
PROC	_CheckIs386
PUBLIC	_CheckIs386

	pushf			; Save flag registers, we use them here
	xor	ax,ax		; Clear AX and...
	push ax			; ...push it onto the stack
	popf			; Pop 0 into flag registers (all bits to 0),
	pushf			; attempting to set bits 12-15 of flags to 0's
	pop	ax			; Recover the save flags
	and	ax,08000h	; If bits 12-15 of flags are set to
	cmp	ax,08000h	; zero then it's 8088/86 or 80188/186
	jz	not386

	mov	ax,07000h	; Try to set flag bits 12-14 to 1's
	push ax			; Push the test value onto the stack
	popf			; Pop it into the flag register
	pushf			; Push it back onto the stack
	pop	ax			; Pop it into AX for check
	and	ax,07000h	; if bits 12-14 are cleared then
	jz	not386		; the chip is an 80286

	mov	ax,1		; We now assume it's a 80386 or better
	popf
	retf

not386:
	xor	ax,ax
	popf
	retf

	ENDP


PROC	_jabhack2
PUBLIC	_jabhack2

	push	es

	mov	ax,seg LDIV@
	mov	es,ax
	mov	ax,9090h					;Two NOP's
	mov	[WORD FAR es:LDIV@],ax		;Patch over XOR AX,AX
	mov	[WORD FAR es:LDIV@+2],ax	;and over JMP SHORT COMMON

	pop	es
	retf

	ENDP

	END