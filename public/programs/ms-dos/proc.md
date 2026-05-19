---
title: "PROC.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/PROC.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/PROC.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "proc"
order: 40
description: "This file defines process control system calls for MS-DOS 2.0, showcasing the evolution of operating system design in the early 1980s."

summary:
  - point: "Introduces process control routines for MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements Terminate and Stay Resident (TSR) functionality"
    link: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    link_label: "TSR"
  - point: "Reflects Unix-inspired design in MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Optimized for IBM PC hardware constraints"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Highlights Tim Paterson's influence on early PC operating systems"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "include-dosseg"
    line_start: 5
    line_end: 11
    title: "Setting the stage: INCLUDE directives"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines establish the foundational components of the MS-DOS process control system by including external assembly files like DOSSEG.ASM and DOSSYM.ASM. These files define key symbols, macros, and segment structures that the rest of the code relies on. In the early 1980s, modularity in assembly programming was crucial for managing complexity. Tim Paterson, who initially wrote 86-DOS, designed the system to be extensible and adaptable to various hardware configurations. By the time MS-DOS 2.0 was released, Microsoft had refined this approach, borrowing ideas from Unix to create a more structured and versatile operating system. These directives illustrate the careful groundwork laid to ensure compatibility and maintainability in an era when memory was scarce and hardware varied widely."
  - id: "wait-subroutine"
    line_start: 26
    line_end: 42
    title: "Returning error codes: $WAIT subroutine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $WAIT subroutine retrieves and clears the exit code of the previous process. This routine is a simple yet essential mechanism for inter-process communication in MS-DOS. In 1983, when MS-DOS 2.0 was released, the concept of error codes was a fundamental part of operating system design, allowing developers to diagnose issues in a resource-constrained environment. The use of assembly language here reflects the need for low-level control and efficiency. Tim Paterson's original design for 86-DOS prioritized speed and simplicity, and this philosophy carried over into MS-DOS. The $WAIT subroutine exemplifies how MS-DOS balanced functionality with the limitations of the IBM PC's 8086 processor and its 1 MB addressable memory space."
  - id: "exec-subroutine"
    line_start: 45
    line_end: 47
    title: "Conditional execution: $EXEC for IBM systems"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "The $EXEC subroutine is conditionally included based on whether the code is running on an IBM system. This reflects the tight coupling between MS-DOS and the IBM PC, which dominated the personal computing market in the early 1980s. IBM's hardware constraints and proprietary features required special handling in the operating system. Microsoft, under Bill Gates' leadership, ensured that MS-DOS could adapt to various OEM systems while maintaining compatibility with IBM's architecture. This conditional inclusion demonstrates the flexibility and foresight in MS-DOS's design, enabling it to become the de facto standard for PC operating systems."
  - id: "keep-process"
    line_start: 55
    line_end: 87
    title: "Terminate and Stay Resident: $Keep_process"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    image_url: ""
    image_caption: ""
    content: "The $Keep_process subroutine implements the Terminate and Stay Resident (TSR) functionality, allowing a program to remain in memory after it has terminated, ready to be reactivated later. TSR was a groundbreaking feature in MS-DOS, enabling utilities like pop-up calendars and memory-resident tools to coexist with other applications. In 1983, this was a clever workaround for the lack of multitasking in MS-DOS. The subroutine manipulates memory blocks and process control data to achieve this effect, showcasing the ingenuity required to maximize the capabilities of the IBM PC's limited hardware. TSR programs became a staple of the MS-DOS ecosystem, influencing the development of software utilities for years to come."
  - id: "exit-subroutine"
    line_start: 102
    line_end: 118
    title: "Graceful termination: $EXIT subroutine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $EXIT subroutine handles the termination of a process and its return to the parent process. It ensures that the system cleans up properly, resetting control structures and releasing resources. In the early 1980s, operating systems like MS-DOS had to manage processes efficiently to avoid crashes or resource leaks, especially given the limited memory and processing power of the IBM PC. This subroutine reflects the Unix-inspired design principles adopted in MS-DOS 2.0, emphasizing reliability and structured process control. Tim Paterson's original work laid the foundation, but Microsoft's enhancements in version 2.0 brought MS-DOS closer to the sophistication of Unix, paving the way for its widespread adoption."

---

;
; process control system calls for MSDOS
;

INCLUDE DOSSEG.ASM

CODE    SEGMENT BYTE PUBLIC  'CODE'
        ASSUME  SS:DOSGROUP,CS:DOSGROUP

.xlist
.xcref
INCLUDE DOSSYM.ASM
INCLUDE DEVSYM.ASM
.cref
.list

    i_need  CurrentPDB,WORD
    i_need  CreatePDB,BYTE
    i_need  NUMIO,BYTE
    i_need  Exit_type,BYTE
    i_need  INDOS,BYTE
    i_need  DMAADD,DWORD
    i_need  DidCTRLC,BYTE

SUBTTL $WAIT - return previous process error code
PAGE
;
; process control data
;
        i_need  exit_code,WORD          ; code of exit

;
;   Assembler usage:
;           MOV     AH, Wait
;           INT     int_command
;         AX has the exit code
        procedure   $WAIT,NEAR
        ASSUME  DS:NOTHING,ES:NOTHING
        MOV     AX,[exit_code]
        XOR     DX,DX
        MOV     [exit_code],DX
        transfer    SYS_RET_OK
$WAIT   ENDP

IF IBM
        procedure   $EXEC,NEAR
        error   error_invalid_function
$EXEC   ENDP
ENDIF
IF NOT IBM
INCLUDE EXEC.ASM
ENDIF

SUBTTL Terminate and stay resident handler
PAGE
;
; Input:    DX is  an  offset  from  CurrentPDB  at which to
;           truncate the current block.
;
; output:   The current block is truncated (expanded) to be [DX+15]/16
;           paragraphs long.  An exit is simulated via resetting CurrentPDB
;           and restoring the vectors.
;
        procedure   $Keep_process,NEAR
        ASSUME DS:NOTHING,ES:NOTHING,SS:DOSGROUP

        PUSH    AX                      ; keep exit code around
        MOV     BYTE PTR [Exit_type],Exit_keep_process
        MOV     ES,[CurrentPDB]
        CMP     DX,6h                   ; keep enough space around for system
        JAE     Keep_shrink             ; info
        MOV     DX,6h
keep_shrink:
        MOV     BX,DX
        PUSH    BX
        PUSH    ES
        invoke  $SETBLOCK               ; ignore return codes.
        POP     DS
        POP     BX
        JC      keep_done               ; failed on modification
        MOV     AX,DS
        ADD     AX,BX
        MOV     DS:[PDB_block_len],AX

keep_done:
        POP     AX
        JMP     SHORT exit_inner        ; and let abort take care of the rest

$Keep_process   ENDP

        procedure   Stay_resident,NEAR
        ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING
        MOV     AX,(Keep_process SHL 8) + 0 ; Lower part is return code
        ADD     DX,15
        MOV     CL,4
        SHR     DX,CL

        transfer    COMMAND
Stay_resident   ENDP

SUBTTL $EXIT - return to parent process
PAGE
;
;   Assembler usage:
;           MOV     AL, code
;           MOV     AH, Exit
;           INT     int_command
;   Error return:
;           None.
;
        procedure   $EXIT,NEAR
        ASSUME  DS:NOTHING,ES:NOTHING,SS:DOSGROUP
        XOR     AH,AH
        XCHG    AH,BYTE PTR [DidCTRLC]
        OR      AH,AH
        MOV     BYTE PTR [Exit_type],exit_terminate
        JZ      exit_inner
        MOV     BYTE PTR [Exit_type],exit_ctrl_c

Exit_inner:
        invoke  get_user_stack
        PUSH    [CurrentPDB]
        POP     [SI.user_CS]
        transfer    abort_inner
$EXIT   ENDP

do_ext

CODE    ENDS
    END