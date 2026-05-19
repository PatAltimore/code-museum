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
description: "This file contains assembly routines that demonstrate hardware detection and runtime patching techniques in Wolfenstein 3D, showcasing the ingenuity required to optimize performance on early x86 systems."

summary:
  - point: "Hardware detection routine identifies CPU type for optimized execution."
    link: "https://en.wikipedia.org/wiki/X86"
    link_label: "x86 Architecture"
  - point: "Runtime patching modifies code in memory for dynamic adjustments."
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-Modifying Code"
  - point: "Code reflects the constraints of early 1990s PC hardware."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "check-is-386-cpu-detection"
    line_start: 17
    line_end: 48
    title: "Detecting CPU Type: 386 or Earlier"
    wikipedia_url: "https://en.wikipedia.org/wiki/X86"
    image_url: ""
    image_caption: ""
    content: "This subroutine, `_CheckIs386`, is a clever piece of assembly code designed to determine whether the CPU running the program is an Intel 80386 or an earlier model. It uses a series of flag manipulations to test the behavior of specific bits in the processor's status flags, which differ between CPU generations. The routine first clears the flag bits and checks whether bits 12-15 can be set to zero, which would indicate an older processor like the 8086 or 80286. If those bits can be manipulated further to set bits 12-14 to ones, the code concludes that the CPU is a 386 or better. In 1992, the PC gaming world was rapidly transitioning from the 80286 to the 386, which introduced 32-bit processing and virtual memory capabilities. Developers like John Carmack were keenly aware of the performance differences and wrote code to adapt dynamically based on the hardware detected. This routine reflects the constraints of the era: games had to run on a wide range of hardware, from older systems to cutting-edge machines, and every cycle of CPU time mattered. The consequence of this detection routine was significant. By tailoring the game's behavior to the CPU, id Software ensured smoother gameplay and broader compatibility. This approach was common in the early 1990s but has largely disappeared in modern software, where hardware abstraction layers handle such concerns. However, the ingenuity of routines like `_CheckIs386` laid the groundwork for adaptive optimization techniques that persist in other forms today."
  - id: "runtime-code-patching-jabhack2"
    line_start: 51
    line_end: 65
    title: "Runtime Code Patching: A Bold Optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The `_jabhack2` subroutine is an example of runtime code patching, a technique where the program modifies its own instructions in memory during execution. This routine specifically patches over parts of the `LDIV@` function, replacing certain instructions with NOPs (no-operations) to alter its behavior dynamically. By writing directly to memory, the routine bypasses the need for recompilation or static configuration, enabling adjustments based on runtime conditions. In the early 1990s, self-modifying code was a daring but effective strategy for squeezing performance out of limited hardware. Wolfenstein 3D was developed for MS-DOS systems, where memory and CPU cycles were precious commodities. Techniques like this allowed developers to optimize critical paths in the code, ensuring smoother gameplay even on less powerful machines. However, self-modifying code came with risks: it could lead to instability or make debugging significantly harder. Only highly skilled programmers, like John Carmack, dared to employ such techniques. The legacy of runtime patching is mixed. While it is rarely used in modern software due to security concerns and the advent of more sophisticated optimization tools, it remains a fascinating example of the lengths developers went to in order to push the boundaries of what was possible. `_jabhack2` is a testament to the creativity and technical prowess of id Software during the development of Wolfenstein 3D, a game that would go on to define the first-person shooter genre."

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