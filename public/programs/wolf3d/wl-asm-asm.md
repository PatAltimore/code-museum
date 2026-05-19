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
description: "This file showcases assembly-level optimizations and hardware compatibility checks in Wolfenstein 3D, a groundbreaking first-person shooter from 1992."

summary:
  - point: "Hardware detection for 386 processors"
    link: "https://en.wikipedia.org/wiki/Intel_80386"
    link_label: "Intel 80386"
  - point: "Direct manipulation of flag registers for processor identification"
    link: "https://en.wikipedia.org/wiki/FLAGS_register"
    link_label: "FLAGS register"
  - point: "Dynamic patching of runtime code in memory"
    link: "https://en.wikipedia.org/wiki/Self-modifying_code"
    link_label: "Self-modifying code"

enhancements:
  - id: "external-library-linkage"
    line_start: 7
    line_end: 9
    title: "Linking external libraries for division"
    wikipedia_url: "https://en.wikipedia.org/wiki/Library_(computing)"
    image_url: ""
    image_caption: ""
    content: "The file begins with an `EXTRN` directive, linking to an external far procedure `LDIV@`. This indicates that the assembly code relies on external libraries or routines for performing long division operations. In the early 1990s, modular programming practices were becoming increasingly common, especially in performance-critical applications like games. By delegating complex arithmetic operations to external libraries, developers could focus on optimizing other parts of the code. This decision reflects the constraints of the era: limited memory and processing power meant every byte and cycle mattered. The reliance on external libraries also highlights the collaborative nature of software development at the time, where teams often shared or licensed code to accelerate development. This modular approach would later influence modern programming paradigms, where external dependencies are commonplace."
  - id: "data-segment-declaration"
    line_start: 11
    line_end: 13
    title: "Setting up the data segment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Segment_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `DATASEG` directive establishes the data segment for the program. In x86 assembly, memory segmentation was a fundamental concept, allowing programs to organize data, code, and stack into separate areas. This segmentation was critical for managing the limited memory available on MS-DOS systems, which often operated within a 640KB conventional memory limit. By explicitly defining segments, developers could optimize memory usage and ensure compatibility across different hardware configurations. The decision to segment memory reflects the careful planning required to create high-performance software in an era where hardware constraints were a constant challenge."
  - id: "code-segment-declaration"
    line_start: 15
    line_end: 17
    title: "Defining the code segment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Code_segment"
    image_url: ""
    image_caption: ""
    content: "The `CODESEG` directive marks the beginning of the code segment, where executable instructions are stored. This separation of code and data was a hallmark of assembly programming on x86 architectures, ensuring that instructions and data were accessed efficiently. The comment suggests that the code was adapted from Juan Jimenez's original work, showcasing the iterative and collaborative nature of software development. By repurposing existing code, the developers of Wolfenstein 3D could focus their efforts on innovating in other areas, such as graphics rendering and gameplay mechanics. This reuse of code underscores the pragmatic approach taken by id Software during the game's development."
  - id: "processor-detection-routine"
    line_start: 19
    line_end: 41
    title: "Detecting 386 processors with flag manipulation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80386"
    image_url: ""
    image_caption: ""
    content: "The `_CheckIs386` procedure is a clever routine for detecting whether the CPU is an Intel 386 or better. It manipulates the FLAGS register to test specific bits that behave differently on older processors. This was critical for optimizing performance, as Wolfenstein 3D relied on features available only on newer CPUs, such as faster arithmetic and enhanced memory addressing. In 1992, the gaming industry was transitioning from 286 to 386 processors, and developers often included fallback mechanisms for older hardware. The comment reveals that this code was adapted from Juan Jimenez's work, reflecting the collaborative and iterative nature of programming at the time. The routine's reliance on low-level hardware behavior exemplifies the ingenuity required to push the limits of MS-DOS systems. This approach would later influence compatibility checks in modern software, ensuring programs could adapt to diverse hardware environments."
  - id: "fallback-for-older-processors"
    line_start: 43
    line_end: 48
    title: "Handling non-386 processors gracefully"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_80286"
    image_url: ""
    image_caption: ""
    content: "The `not386` label provides a fallback for systems running on older processors, such as the 286 or 8086. If the `_CheckIs386` routine determines that the CPU lacks the necessary features, execution jumps here, setting `AX` to zero and returning control. This ensures that the program can gracefully handle incompatible hardware without crashing. In the early 1990s, developers had to account for a wide range of systems, as many users still operated older machines. By including compatibility checks, id Software could reach a broader audience while maintaining performance on newer hardware. This dual approach reflects the careful balance between innovation and accessibility that defined the era."
  - id: "runtime-code-patching"
    line_start: 52
    line_end: 67
    title: "Self-modifying code for runtime optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Self-modifying_code"
    image_url: ""
    image_caption: ""
    content: "The `_jabhack2` procedure demonstrates a bold technique: self-modifying code. It dynamically patches the `LDIV@` routine in memory, replacing instructions with NOPs (no-operations). This approach was used to optimize runtime performance by bypassing unnecessary operations. While self-modifying code was a powerful tool for squeezing every ounce of performance from limited hardware, it came with risks, such as increased debugging complexity and potential compatibility issues. In the context of Wolfenstein 3D, this technique reflects the developers' willingness to experiment and push boundaries to achieve smooth gameplay. Self-modifying code has largely fallen out of favor in modern programming due to security concerns, but its use here highlights the ingenuity and resourcefulness of early game developers."

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