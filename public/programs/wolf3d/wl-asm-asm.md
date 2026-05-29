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
description: "This file contains assembly routines for detecting CPU type and patching runtime code, showcasing clever hardware-level programming techniques used in Wolfenstein 3D."

summary:
  - point: "CPU detection routine distinguishes between 386 and earlier processors"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Runtime code patching modifies program behavior dynamically"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Optimized for MS-DOS and x86 assembly, pushing hardware limits"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "detecting-386-cpus-with-flag-bits"
    line_start: 17
    line_end: 48
    title: "Detecting 386 CPUs with Flag Bits"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "This routine, `_CheckIs386`, determines whether the CPU is an Intel 386 or an earlier model by manipulating the processor's flag register. It uses a sequence of instructions to test specific flag bits that behave differently on 386 and earlier CPUs. The programmer, likely John Carmack or someone working closely with him, adapted code from Juan Jimenez to simplify the detection process. At the time, Wolfenstein 3D needed to optimize its performance for varying hardware configurations, as PCs in 1992 ranged from aging 8086 processors to cutting-edge 386 machines. The computing landscape in 1992 was transitioning from 16-bit to 32-bit architectures, with the 386 offering significant advancements like virtual memory and faster execution of instructions. However, software developers still had to account for older systems, as many users hadn't upgraded. This routine reflects the ingenuity required to write software that could adapt to hardware constraints while taking advantage of newer capabilities when available. The approach of detecting CPU features by probing flag bits influenced later software, especially in games and operating systems that needed to dynamically adjust their behavior based on hardware capabilities. Techniques like this were foundational for adaptive programming, which became standard in the industry. Modern game engines like Unity and Unreal still rely on hardware detection mechanisms, though they operate at a much higher level of abstraction. This routine is a direct ancestor of those techniques, showcasing the meticulous attention to hardware detail that defined early PC gaming."
  - id: "runtime-code-patching-for-performance"
    line_start: 51
    line_end: 63
    title: "Runtime Code Patching for Performance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The `_jabhack2` routine demonstrates a rare and controversial programming technique: runtime code patching. It modifies the program's behavior by directly overwriting instructions in memory. Specifically, it patches the `LDIV@` routine by replacing certain instructions with `NOP` (no operation) commands, effectively neutralizing them. This technique was likely used to optimize performance or bypass unnecessary computations during runtime. In the early 1990s, self-modifying code was a practical solution to hardware limitations. PCs running MS-DOS had limited memory and processing power, so developers often resorted to extreme measures to squeeze out every bit of performance. John Carmack, known for his technical brilliance, frequently employed unconventional methods to achieve smooth gameplay and fast rendering in Wolfenstein 3D. While self-modifying code is rarely used today due to security concerns and the complexity it introduces, it was a hallmark of early game development. This technique influenced later innovations in dynamic code generation and just-in-time (JIT) compilation, which are now standard in environments like Java's JVM and modern web browsers. The legacy of such hacks can be seen in the ongoing quest for performance optimization, where Carmack's work remains a touchstone for game developers striving to push hardware to its limits."

---

```asm
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
```