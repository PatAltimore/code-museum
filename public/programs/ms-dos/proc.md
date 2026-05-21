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
description: "This file contains process control routines for MS-DOS v2.0, showcasing the evolution of operating system design in the early 1980s."

summary:
  - point: "Introduced process management inspired by Unix-like systems"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implemented Terminate and Stay Resident (TSR) functionality"
    link: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    link_label: "TSR"
  - point: "Optimized for IBM PC hardware constraints"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Used modular assembly structure for extensibility"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Highlighted early multitasking and memory management techniques"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"

enhancements:
  - id: "return-previous-process-error-code"
    line_start: 32
    line_end: 43
    title: "The Routine That Passed Errors Forward"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `$WAIT` procedure retrieves the exit code of the previous process and resets it to zero. This routine is a simple yet critical piece of inter-process communication, ensuring that error codes are propagated correctly to parent processes. At the time, MS-DOS was evolving from a single-tasking environment to one that could mimic multitasking behaviors, inspired by Unix-like systems. Tim Paterson and Microsoft's team were working under constraints imposed by the 8086 processor and IBM PC hardware, which lacked advanced memory management or multitasking support. This routine reflects the pragmatic approach taken to implement basic process control in a constrained environment. Later operating systems, including Windows, built on these foundational ideas, introducing more sophisticated error handling and inter-process communication mechanisms."
  - id: "terminate-stay-resident-handler"
    line_start: 54
    line_end: 99
    title: "How MS-DOS Made Programs Stay Forever"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    image_url: ""
    image_caption: ""
    content: "The `$Keep_process` and `Stay_resident` procedures implement Terminate and Stay Resident (TSR) functionality, allowing programs to remain in memory after termination. TSR was a groundbreaking feature in MS-DOS, enabling rudimentary multitasking by allowing background programs like keyboard enhancers or memory-resident utilities to persist. This was a clever workaround for the lack of hardware or OS-level multitasking support in the IBM PC. TSRs were inspired by similar techniques in earlier operating systems but adapted to fit the constraints of MS-DOS's single-tasking model. Developers quickly embraced TSRs to extend the capabilities of MS-DOS, leading to a proliferation of utilities that defined the PC experience in the 1980s. TSR functionality influenced later operating systems, including Windows, which incorporated background services and multitasking natively."
  - id: "return-to-parent-process"
    line_start: 101
    line_end: 125
    title: "The Exit Routine That Closed the Loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `$EXIT` procedure handles the termination of a process and returns control to the parent process. It ensures proper cleanup by resetting the process environment and handling special cases like Ctrl+C interrupts. This routine reflects the influence of Unix-like systems on MS-DOS v2.0, which introduced structured process management and error handling. At the time, MS-DOS was transitioning from a simple disk operating system to one capable of supporting more complex applications and workflows. The `$EXIT` procedure exemplifies the careful balance between simplicity and functionality that defined MS-DOS's design. Its approach to process termination laid the groundwork for more advanced operating systems, influencing the design of Windows and other successors that built on MS-DOS's process management."

---

```asm
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
```
