---
title: "PCLOCK.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/PCLOCK.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/PCLOCK.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "pclock"
order: 39
description: "This file implements clock interrupt handling for MS-DOS 2.0, showcasing early techniques for hardware interaction and time profiling on the IBM PC."

summary:
  - point: "Direct manipulation of hardware registers for clock control"
    link: "https://en.wikipedia.org/wiki/Programmable_Interval_Timer"
    link_label: "Programmable Interval Timer"
  - point: "Use of assembly-level interrupt vectors for precise timing"
    link: "https://en.wikipedia.org/wiki/Interrupt_vector"
    link_label: "Interrupt vector"
  - point: "Optimization techniques for 8086 assembly programming"
    link: "https://en.wikipedia.org/wiki/X86_assembly_language"
    link_label: "x86 Assembly Language"
  - point: "Integration of hardware interrupts into MS-DOS for profiling"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Early example of modular assembly code organization"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular programming"

enhancements:
  - id: "interrupt-vector-setup"
    line_start: 11
    line_end: 17
    title: "How MS-DOS Set Up Interrupt Vectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "This section defines the interrupt vector table for the clock interrupt. The INTSEG segment is placed at a fixed memory address (0x60 + 7 * 4) to align with the hardware's expectations for interrupt handling. The interrupt vector table is a critical part of the 8086 architecture, allowing the CPU to locate the appropriate handler for hardware and software interrupts. Tim Paterson, the original author of MS-DOS, designed this mechanism to work seamlessly with the IBM PC's hardware, which included the Intel 8253 Programmable Interval Timer (PIT). At the time, direct manipulation of hardware registers was common practice, as operating systems were tightly coupled with hardware. This approach influenced later DOS versions and other operating systems, where interrupt vector tables remained a fundamental concept for managing hardware interactions."
  - id: "enable-clock-interrupt"
    line_start: 61
    line_end: 145
    title: "The Routine That Started the Clock"
    wikipedia_url: "https://en.wikipedia.org/wiki/Programmable_Interval_Timer"
    image_url: ""
    image_caption: ""
    content: "The CLOCKON subroutine enables the clock interrupt by configuring the hardware timer and setting the interrupt vector. It begins by programming the mode and load registers of the Intel 8253 PIT, specifying the clock frequency and interval in microseconds. The routine uses bitwise operations and register manipulation to set the timer's mode and load values. It then updates the interrupt vector to point to the CLK_INTER routine, ensuring the CPU knows where to jump when the timer interrupt occurs. Finally, it enables the interrupt by clearing the appropriate mask bit in the slave interrupt controller. This routine reflects the low-level programming required in the early 1980s, where developers worked directly with hardware registers to achieve precise control. The ability to profile execution time using clock interrupts was a significant innovation, influencing performance monitoring tools in later operating systems and development environments."
  - id: "disable-clock-interrupt"
    line_start: 149
    line_end: 163
    title: "Turning Off the Clock: A Simple Hack"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_mask"
    image_url: ""
    image_caption: ""
    content: "The CLOCKOFF subroutine disables the clock interrupt by setting the mask bit for the timer in the slave interrupt controller. This is a straightforward operation, reflecting the simplicity of early interrupt management on the 8086 architecture. By using the OR instruction to set the high bit of the mask register, the routine ensures that the timer interrupt is no longer triggered. This approach highlights the direct control programmers had over hardware in the early PC era, a necessity given the limited abstraction layers available at the time. The ability to enable and disable hardware interrupts dynamically became a cornerstone of operating system design, influencing the development of multitasking and real-time systems in later decades."
  - id: "reset-interrupt-handler"
    line_start: 169
    line_end: 199
    title: "Resetting the Clock Interrupt: A Precise Dance"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The LEAVE_INT routine is responsible for resetting the clock interrupt after it has been triggered and handled. It begins by saving the state of the accumulator register (AX) to preserve its value. The routine then clears the timer's output and sends an end-of-interrupt command to both the slave and master interrupt controllers, signaling that the interrupt has been processed. Finally, it reloads and arms the timer to prepare for the next interrupt and restores the accumulator's state before returning control to the interrupted program. This precise sequence ensures that the system can handle subsequent clock interrupts without errors or delays. The design reflects the meticulous attention to detail required in early assembly programming, where even minor mistakes could lead to system instability. The techniques used here laid the groundwork for interrupt handling in later operating systems, influencing designs ranging from Windows to embedded systems."

---

```asm
        TITLE   CLOCK - Enable/disable clock interrupts



; "CLOCK" module for MS-DOS profile program. This implements the

;       PROFIL program on the Seattle Computer Products 8086 system



INTSEG  SEGMENT AT 0

        ORG     60H+7*4

INTVECTOR LABEL WORD

INTSEG  ENDS



CODE    SEGMENT BYTE PUBLIC



        PUBLIC  CLOCKON,CLOCKOFF,LEAVE_INT



        EXTRN   CLK_INTER:NEAR



        ASSUME  CS:CODE, DS:CODE, ES:CODE



BASE=           0F0H

STCSTAT=        BASE+5

STCDATA=        BASE+4

STCCOMND=       BASE+5

SLAVECOM=       BASE+2

MASTCOM=        BASE+0

SLAVEMASK=      BASE+3



;The following mode selects F2 as counter source (400 KHz), reload from

;load, count up once in binary with TC toggle.

MODE=           0C02H



;************************************************

;Enable clock and start generating clock interrupt.

;       Clock interval in micro seconds passed in DX

CLOCKON PROC    NEAR

        MOV     AL,4                    ;Set pointer to mode register 4

        OUT     STCCOMND,AL

        MOV     AL,MODE AND 0FFH        ;Low byte of mode

        OUT     STCDATA,AL

        MOV     AL,MODE/100H            ;High byte of mode

        OUT     STCDATA,AL

        MOV     AL,0CH                  ;Counter 4 load register

        OUT     STCCOMND,AL

        XCHG    AX,DX                   ;Count in microseconds

        XOR     DX,DX

        SHL     AX,1

        RCL     DX,1                    ;Count in DX:AX times 2

        MOV     BX,5

        DIV     BX                      ;AX=Count/2.5

        OUT     STCDATA,AL

        MOV     AL,AH

        OUT     STCDATA,AL              ;Set the load register

        MOV     AL,0E4H                 ;Clear output 4

        OUT     STCCOMND,AL



        ASSUME  DS:INTSEG



        PUSH    DS

        XOR     AX,AX

        MOV     DS,AX

;Set the clock interrupt

        MOV     INTVECTOR,OFFSET CLK_INTER

        MOV     INTVECTOR+2,CS

        POP     DS



        ASSUME  DS:CODE



        IN      AL,SLAVEMASK

        AND     AL,7FH                  ;Enable counter 4 interrupt

        OUT     SLAVEMASK,AL

        MOV     AL,68H                  ;Load and arm counter 4

        OUT     STCCOMND,AL             ;Let her rip!

        RET

CLOCKON ENDP



;************************************************

;Disable clock and clock interrupt

CLOCKOFF PROC   NEAR

        IN      AL,SLAVEMASK

        OR      AL,80H                  ;Turn off counter 4 interrupt

        OUT     SLAVEMASK,AL

        RET

CLOCKOFF ENDP





;************************************************

;This routine is jumped to from the CLK_INTER

;       routine to perform and steps to reset the interrupt

LEAVE_INT:

        PUSH    AX

        MOV     AL,0E4H                 ;Clear output 4

        OUT     STCCOMND,AL

        MOV     AL,20H                  ;End-of-interrupt command

        OUT     SLAVECOM,AL

        OUT     MASTCOM,AL

        MOV     AL,68H                  ;Load and arm counter 4

        OUT     STCCOMND,AL

        POP     AX

        IRET



CODE    ENDS

        END


```