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
description: "Assembly routines from Wolfenstein 3D showcasing hardware detection and patching techniques."

summary:
  - point: "Detects CPU type to optimize for 386 or higher"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Directly patches executable code in memory"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"
  - point: "Reflects constraints of early 1990s PC hardware"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "cpu-detection-386-check"
    line_start: 17
    line_end: 48
    title: "How Wolfenstein 3D Identified Your CPU"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "This routine, `_CheckIs386`, determines whether the system's CPU is an Intel 80386 or higher. It achieves this by manipulating the processor's flag register—a low-level technique that exploits differences in how CPUs handle specific flag bits. The code first attempts to clear and then set certain bits in the flags register. If the CPU responds predictably, it is identified as a 386 or better; otherwise, it is classified as an earlier model like the 80286. In 1992, CPU detection was critical for optimizing software performance. The 386 introduced protected mode and other features that earlier processors lacked, allowing developers to write faster and more advanced programs. However, games like Wolfenstein 3D had to remain compatible with older hardware, as many players were still using 286-based systems. This routine reflects the careful balancing act id Software faced: pushing the limits of modern hardware while ensuring the game could run on less capable machines. John Carmack, the technical lead, was known for his deep understanding of hardware and his ability to write highly efficient code. This CPU detection method showcases his ingenuity in squeezing performance out of constrained systems. Techniques like this were common in the era but have since become obsolete as modern operating systems abstract hardware details away from applications. The approach influenced later games and engines, as developers continued to optimize for specific hardware capabilities. Today, CPU detection is largely handled by operating systems or middleware, but the spirit of tailoring software to hardware remains alive in fields like embedded systems and game console development."
  - id: "self-modifying-code-jabhack2"
    line_start: 51
    line_end: 65
    title: "The Patch That Changed Code Mid-Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The `_jabhack2` routine directly modifies executable code in memory—a striking example of self-modifying code. It patches over instructions in the `LDIV@` routine, replacing them with NOP (no operation) instructions. This technique was likely used to bypass or alter specific behavior in the division routine, possibly for debugging or performance reasons. Self-modifying code was more common in the early 1990s, especially in assembly-heavy programs like Wolfenstein 3D. At the time, developers often worked close to the hardware, and modifying code dynamically allowed them to adapt to runtime conditions or optimize performance. However, this approach came with risks: it could lead to hard-to-debug errors and was incompatible with modern security practices like code signing and memory protection. Juan Jimenez, whose code is referenced in the comments, was likely a contributor or source of inspiration for this routine. The decision to modify code in memory reflects the experimental and pragmatic mindset of id Software's developers, who were willing to use unconventional methods to achieve their goals. While self-modifying code has largely fallen out of favor, its legacy persists in areas like just-in-time (JIT) compilation, where code is generated or modified at runtime for optimization. The technique also influenced the development of dynamic patching systems and debugging tools. Wolfenstein 3D's use of self-modifying code underscores the lengths developers went to in pushing the limits of early PC hardware."

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
