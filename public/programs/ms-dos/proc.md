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
description: "This file contains process control routines for MS-DOS 2.0, showcasing the evolution of operating system design in the early 1980s."

summary:
  - point: "Introduces process control system calls, a key feature of MS-DOS 2.0."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements Terminate and Stay Resident (TSR) functionality, enabling background processes."
    link: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    link_label: "TSR"
  - point: "Reflects Unix-inspired enhancements in MS-DOS 2.0, such as process management."
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Highlights assembly-level optimizations for IBM PC hardware constraints."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Demonstrates Tim Paterson and Microsoft's adaptation of 86-DOS into MS-DOS."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "wait-error-code-retrieval"
    line_start: 37
    line_end: 43
    title: "Retrieving the previous process error code"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `$WAIT` routine retrieves the error code from the previous process and resets it to zero. This simple mechanism reflects the early MS-DOS design philosophy: minimalistic yet functional. In 1983, MS-DOS 2.0 was a major leap forward from its predecessor, incorporating features inspired by Unix. Error handling was crucial for debugging and process management, especially as MS-DOS expanded to support multitasking-like features. Tim Paterson, originally the author of 86-DOS, laid the groundwork for these routines, which were later refined by Microsoft's engineers. `$WAIT` embodies the pragmatic approach of the era, where every byte of memory mattered and simplicity was key to compatibility across diverse hardware. The routine's influence persists in modern operating systems, where error codes remain a fundamental concept."
  - id: "terminate-stay-resident-handler"
    line_start: 64
    line_end: 99
    title: "Terminate and Stay Resident (TSR) functionality"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    image_url: ""
    image_caption: ""
    content: "The `$Keep_process` and `Stay_resident` routines implement the Terminate and Stay Resident (TSR) functionality, allowing programs to remain in memory and provide services even after termination. TSR was a groundbreaking feature for MS-DOS, enabling background processes like pop-up utilities and device drivers. In the early 1980s, personal computers like the IBM PC had limited memory and lacked multitasking capabilities. TSR was a clever workaround, letting users run small utilities alongside their main applications. This code reflects the constraints and ingenuity of the era, where programmers had to squeeze functionality into tight memory spaces. TSR programs became a hallmark of MS-DOS, influencing software design for years. However, they also introduced challenges, such as memory conflicts, which later operating systems like Windows sought to address."
  - id: "exit-to-parent-process"
    line_start: 111
    line_end: 125
    title: "Gracefully returning to the parent process"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `$EXIT` routine handles the termination of a process and returns control to the parent process. It ensures that the system cleans up properly, resetting flags and invoking necessary subroutines. In the context of MS-DOS 2.0, this routine reflects the operating system's growing sophistication, inspired by Unix's process management. By 1983, MS-DOS was transitioning from a simple single-tasking system to one capable of handling more complex workflows, including nested processes and error handling. This routine highlights the careful balance between simplicity and functionality that defined MS-DOS. While modern operating systems have evolved far beyond these constraints, the principles of process termination and resource cleanup remain foundational."

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