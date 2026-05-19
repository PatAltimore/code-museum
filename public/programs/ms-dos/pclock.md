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
description: "This file implements clock interrupt handling routines for MS-DOS v2.0, showcasing early PC hardware programming techniques."

summary:
  - point: "Direct manipulation of interrupt vectors for clock functionality"
    link: "https://en.wikipedia.org/wiki/Interrupt_vector"
    link_label: "Interrupt Vector"
  - point: "Efficient use of assembly to configure hardware timers"
    link: "https://en.wikipedia.org/wiki/Programmable_interval_timer"
    link_label: "Programmable Interval Timer"
  - point: "Low-level control of slave and master interrupt controllers"
    link: "https://en.wikipedia.org/wiki/Interrupt_request_(PC_architecture)"
    link_label: "Interrupt Request"
  - point: "Optimized arithmetic operations for timer configuration"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Integration of hardware-specific routines into MS-DOS's modular design"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "interrupt-vector-setup"
    line_start: 15
    line_end: 65
    title: "Setting up the interrupt vector table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "This section begins by defining the interrupt vector table segment and setting up the base address for the clock interrupt handler. In the early 1980s, interrupt-driven programming was essential for real-time systems, and MS-DOS had to interface directly with the hardware to manage tasks like profiling and timing. Tim Paterson, the original author of 86-DOS, carried forward these techniques into MS-DOS, leveraging the Intel 8086's interrupt capabilities. At the time, programmers were working with minimal tools and documentation, often relying on hardware manuals and direct experimentation. This setup allowed MS-DOS to efficiently handle clock interrupts, a critical feature for profiling programs and managing system time. The direct manipulation of interrupt vectors was a hallmark of low-level programming in this era, and it laid the groundwork for more sophisticated interrupt handling in later operating systems."
  - id: "clock-enable-routine"
    line_start: 67
    line_end: 143
    title: "Enabling the clock interrupt"
    wikipedia_url: "https://en.wikipedia.org/wiki/Programmable_interval_timer"
    image_url: ""
    image_caption: ""
    content: "The CLOCKON procedure configures the hardware timer to generate clock interrupts. It begins by setting the mode register and loading the timer with a value derived from the desired interval in microseconds. This involves bitwise operations and arithmetic to convert the interval into a format the timer can understand. The procedure then updates the interrupt vector table to point to the clock interrupt handler and enables the interrupt in the slave interrupt controller. In 1983, hardware programming like this was common, as operating systems had to directly interface with devices like the programmable interval timer (PIT). The Intel 8253/8254 PIT was a ubiquitous component in early PCs, and its configuration required precise timing calculations. This routine exemplifies the ingenuity of early PC programmers, who had to balance performance and reliability while working within the constraints of the hardware. The CLOCKON routine's design reflects the modularity of MS-DOS, allowing it to adapt to different hardware configurations and use cases."
  - id: "clock-disable-routine"
    line_start: 153
    line_end: 161
    title: "Disabling the clock interrupt"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_request_(PC_architecture)"
    image_url: ""
    image_caption: ""
    content: "The CLOCKOFF procedure disables the clock interrupt by modifying the slave interrupt controller's mask register. This simple yet effective routine ensures that the timer stops generating interrupts, allowing the system to conserve resources when timing functionality is not needed. In the early days of PC development, efficient interrupt management was crucial for maintaining system stability and performance. By directly interacting with the interrupt controller, MS-DOS could provide fine-grained control over hardware resources, a feature that was highly valued by developers and users alike. This routine highlights the low-level nature of MS-DOS, which operated close to the hardware to maximize flexibility and compatibility across different PC configurations."
  - id: "leave-interrupt-handler"
    line_start: 175
    line_end: 203
    title: "Resetting and exiting the interrupt"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The LEAVE_INT routine is responsible for resetting the interrupt state and preparing the system for the next clock interrupt. It clears the timer's output, sends end-of-interrupt commands to both the slave and master interrupt controllers, and reloads the timer to ensure continuous operation. This routine is called by the clock interrupt handler, ensuring that the system remains responsive and accurate in its timing. In the context of 1983, interrupt handling was a critical aspect of operating system design, as it allowed the CPU to respond to events in real-time without wasting cycles on polling. The modular design of MS-DOS, with routines like LEAVE_INT, reflects the influence of Unix and XENIX on its development. These systems emphasized clean, reusable code and efficient resource management, principles that continue to shape operating system design today. The LEAVE_INT routine is a testament to the skill and foresight of the MS-DOS developers, who created a system that could adapt to the rapidly evolving PC landscape."

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