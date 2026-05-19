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
description: "This file implements clock interrupt management for MS-DOS, showcasing early PC hardware interaction and low-level programming techniques."

summary:
  - point: "Direct manipulation of interrupt vectors for clock management"
    link: "https://en.wikipedia.org/wiki/Interrupt_vector"
    link_label: "Interrupt Vector"
  - point: "Use of assembly-level arithmetic for timing calculations"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Interaction with 8253/8254 timer chips via port I/O"
    link: "https://en.wikipedia.org/wiki/Intel_8253"
    link_label: "Intel 8253 Timer"
  - point: "Efficient handling of hardware interrupts in MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Legacy of hardware-level programming in early PC software"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "interrupt-vector-setup"
    line_start: 15
    line_end: 65
    title: "Interrupt Vector: The Heart of Timing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "The section begins with the declaration of the interrupt vector table, a critical mechanism for handling hardware interrupts in MS-DOS. By setting up the vector table at a fixed memory location, the program ensures that the clock interrupt can be reliably triggered and serviced. In 1981, this approach was standard practice for low-level programming, especially on the Intel 8086 architecture, where hardware interrupts were a primary method for interacting with peripherals. Tim Paterson, the original author of 86-DOS, likely drew inspiration from earlier operating systems like CP/M, which also relied on direct hardware manipulation. This code reflects the constraints of the era: limited memory, no multitasking, and the need for precise timing to manage hardware. The interrupt vector setup laid the groundwork for MS-DOS's ability to handle real-time tasks, a feature that would become increasingly important as PCs moved into business and industrial applications. Today, this technique is largely obsolete, replaced by higher-level abstractions in modern operating systems, but it remains a testament to the ingenuity required to make early PCs functional."
  - id: "clockon-enable-interrupts"
    line_start: 67
    line_end: 143
    title: "ClockON: Enabling Precise Timing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8253"
    image_url: ""
    image_caption: ""
    content: "The CLOCKON subroutine initializes and enables the clock interrupt by directly programming the timer chip (likely the Intel 8253 or 8254) through I/O ports. The code calculates the timer interval based on a value passed in the DX register, using assembly-level arithmetic to convert microseconds into hardware-compatible values. This reflects the hands-on nature of early PC programming, where developers had to understand the hardware intimately. In 1983, when MS-DOS 2.0 was released, the IBM PC was still a relatively new platform, and software developers were pushing its capabilities to meet user demands. Tim Paterson and Microsoft's engineers worked under tight constraints, balancing performance, compatibility, and simplicity. The CLOCKON routine exemplifies this balance: it provides a powerful feature (programmable timing) while remaining efficient and compact. This approach influenced later systems, where hardware abstraction layers began to hide such details from programmers, but the principles of efficient interrupt handling remain relevant in embedded systems today."
  - id: "clockoff-disable-interrupts"
    line_start: 153
    line_end: 161
    title: "ClockOFF: Turning Off the Timer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_request_(PC_architecture)"
    image_url: ""
    image_caption: ""
    content: "The CLOCKOFF subroutine disables the clock interrupt by modifying the interrupt mask register. This simple yet essential routine ensures that the timer does not continue to generate interrupts when they are no longer needed, preventing unnecessary CPU overhead. In the early 1980s, efficient interrupt management was critical for performance, as the IBM PC's 4.77 MHz processor had limited capacity to handle concurrent tasks. The CLOCKOFF routine reflects the minimalist design philosophy of MS-DOS, where every byte of code had to justify its existence. This approach was shaped by the hardware constraints of the time, including limited memory and processing power. While modern operating systems handle such tasks automatically, the explicit control offered by routines like CLOCKOFF gave early PC programmers a level of precision that was both empowering and challenging."
  - id: "leave-int-reset-interrupt"
    line_start: 175
    line_end: 203
    title: "LEAVE_INT: Resetting the Interrupt State"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The LEAVE_INT routine is responsible for resetting the interrupt state after the clock interrupt has been serviced. It clears the timer output, sends end-of-interrupt commands to both the slave and master interrupt controllers, and re-arms the timer for the next cycle. This meticulous attention to detail reflects the challenges of working with hardware interrupts on the 8086 architecture, where improper handling could lead to system instability. By 1983, MS-DOS had become the standard operating system for IBM PCs and compatibles, and routines like LEAVE_INT were crucial for maintaining reliability in a wide range of applications. Microsoft's engineers, including Tim Paterson, were building on a foundation of low-level programming techniques that had been honed in earlier systems like CP/M. The principles demonstrated in LEAVE_INT—efficient interrupt handling, careful state management, and direct hardware interaction—remain relevant in modern embedded systems, even as higher-level abstractions have made such code less visible to most programmers."

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