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
description: "This file handles clock interrupt management in MS-DOS 2.0, showcasing early techniques for hardware interaction and profiling on the IBM PC."

summary:
  - point: "Defines interrupt vector manipulation for clock profiling"
    link: "https://en.wikipedia.org/wiki/Interrupt_vector"
    link_label: "Interrupt vector"
  - point: "Implements clock enable/disable routines for profiling"
    link: "https://en.wikipedia.org/wiki/Profiling_(computer_programming)"
    link_label: "Profiling"
  - point: "Demonstrates direct hardware interaction via I/O ports"
    link: "https://en.wikipedia.org/wiki/Input/output"
    link_label: "I/O ports"
  - point: "Uses assembly-level optimizations for timing calculations"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Reflects constraints of early 8086-based systems"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "interrupt-vector-manipulation"
    line_start: 15
    line_end: 17
    title: "Interrupt vector: mapping the clock handler"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "This section sets up the interrupt vector for the clock profiling routine. The interrupt vector table is a critical part of early PC architecture, allowing software to handle hardware interrupts by pointing to specific routines. Here, the code defines the segment and offset for the clock interrupt handler (`CLK_INTER`). The programmer, Tim Paterson, was working within the constraints of the 8086 processor and the IBM PC's hardware design. At the time, interrupt vectors were a common mechanism for handling asynchronous events, and their manipulation required precise assembly-level coding. This approach influenced later operating systems, which continued to use interrupt vector tables for hardware interaction. The technique is foundational to real-time systems and embedded programming, where interrupt handling remains a core concept."
  - id: "enable-clock-interrupts"
    line_start: 61
    line_end: 145
    title: "Enabling clock interrupts for profiling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Profiling_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The `CLOCKON` procedure enables the clock interrupt and configures the timer to generate periodic interrupts. This involves writing specific values to I/O ports to set the timer mode and load the counter. The code calculates the interval based on microseconds passed in the DX register, using bitwise operations and division to achieve the desired timing. This routine reflects the low-level nature of programming on early PCs, where direct hardware manipulation was necessary to achieve functionality. Tim Paterson's work on MS-DOS was heavily influenced by the hardware constraints of the IBM PC, including its 8253 Programmable Interval Timer. The ability to enable and configure interrupts was crucial for profiling and performance analysis, laying the groundwork for tools like profilers and debuggers in modern software development."
  - id: "disable-clock-interrupts"
    line_start: 149
    line_end: 163
    title: "Disabling clock interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `CLOCKOFF` procedure disables the clock interrupt by modifying the interrupt mask register. This simple routine ensures that the timer no longer generates interrupts, effectively stopping the profiling process. In the early 1980s, managing hardware interrupts directly was a common task for system-level programmers. Tim Paterson's approach here is straightforward but effective, highlighting the minimalistic design philosophy of MS-DOS. Disabling interrupts is a fundamental concept in operating systems, influencing later developments in interrupt-driven programming and event handling. This routine demonstrates the balance between simplicity and functionality that characterized MS-DOS and made it suitable for a wide range of hardware configurations."
  - id: "resetting-interrupt-state"
    line_start: 169
    line_end: 195
    title: "Resetting the interrupt state: LEAVE_INT"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The `LEAVE_INT` routine resets the interrupt state after handling a clock interrupt. It clears the output, sends end-of-interrupt commands to both the slave and master interrupt controllers, and reloads the timer. This ensures that the system is ready for the next interrupt. The use of nested interrupt controllers reflects the complexity of the IBM PC's hardware design, which required careful coordination to manage multiple devices. Tim Paterson's implementation here is a testament to the skill required to write efficient and reliable assembly code for early PCs. This routine is part of the broader interrupt handling mechanism that influenced later operating systems, including Windows, which inherited many concepts from MS-DOS. The ability to manage interrupts efficiently remains a cornerstone of system programming, particularly in real-time and embedded systems."

---

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

                                                                                         