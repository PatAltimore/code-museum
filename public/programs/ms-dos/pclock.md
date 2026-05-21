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
description: "This file implements clock interrupt handling for profiling in MS-DOS 2.0, showcasing early techniques for hardware-level timing control."

summary:
  - point: "Introduces clock interrupt handling for profiling purposes"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Demonstrates low-level interaction with the 8086 hardware"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Uses clever arithmetic for timing calculations"
    link: "https://en.wikipedia.org/wiki/Integer_arithmetic"
    link_label: "Integer Arithmetic"
  - point: "Reflects MS-DOS's evolution toward Unix-inspired features"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Highlights Tim Paterson's contributions to early PC software"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "interrupt-vector-setup"
    line_start: 11
    line_end: 17
    title: "How MS-DOS Set Up Interrupt Vectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "This section defines the interrupt vector table segment and sets up the vector for the clock interrupt. The programmer uses the `ORG` directive to position the interrupt vector at a specific memory location (60H + 7 * 4). This is a critical step in enabling hardware interrupts, as the CPU needs to know where to jump when an interrupt occurs. In 1983, this approach reflected the low-level nature of programming for the IBM PC, where developers had to manage hardware directly. Tim Paterson, the author of MS-DOS, adapted techniques from his earlier work on 86-DOS, which itself borrowed from CP/M. This method of interrupt handling influenced later operating systems, including Windows, which retained the concept of interrupt vectors in its kernel design."
  - id: "clock-enable-routine"
    line_start: 63
    line_end: 145
    title: "The Arithmetic Behind Clock Interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Timer_interrupt"
    image_url: ""
    image_caption: ""
    content: "The `CLOCKON` routine enables the clock interrupt and configures the timer hardware. It begins by setting the mode register and loading the counter with a calculated value based on the desired interval in microseconds (passed in DX). The arithmetic here is notable: the code performs bit shifts and division to convert the interval into a value suitable for the timer hardware. This reflects the constraints of the 8086 CPU, which lacked floating-point arithmetic and required clever use of integer math. By directly interacting with hardware ports (`OUT` instructions), the routine demonstrates the hands-on nature of early PC programming. This approach laid the groundwork for profiling tools and performance monitoring software, influencing later systems like Windows Performance Monitor and third-party tools like Intel VTune."
  - id: "clock-disable-routine"
    line_start: 151
    line_end: 163
    title: "Turning Off the Clock Interrupt"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The `CLOCKOFF` routine disables the clock interrupt by modifying the interrupt mask register. This simple operation ensures that the timer no longer triggers interrupts, allowing the system to conserve resources when profiling is not needed. The routine's brevity highlights the efficiency required in assembly programming, where every instruction counts. Disabling interrupts was a common practice in early operating systems to manage hardware resources effectively. This technique influenced later systems, where interrupt masking became a standard feature in device drivers and kernel-level programming."
  - id: "leave-interrupt-routine"
    line_start: 171
    line_end: 195
    title: "Resetting the Clock After an Interrupt"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The `LEAVE_INT` routine handles the end-of-interrupt process for the clock. It clears the timer output, sends an end-of-interrupt command to the slave and master interrupt controllers, and reloads the timer to prepare for the next interrupt. This sequence ensures that the system remains responsive and the timer continues to function correctly. The use of `IRET` at the end of the routine is significant, as it restores the CPU state and resumes normal execution. This meticulous handling of interrupts reflects the challenges of programming the 8086, where developers had to manage hardware intricacies directly. The techniques used here influenced later interrupt handling mechanisms in operating systems like Windows and Linux, where similar concepts are implemented at a higher abstraction level."

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
