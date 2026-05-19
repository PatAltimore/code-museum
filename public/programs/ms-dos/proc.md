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
description: "This file contains process control system calls for MS-DOS 2.0, showcasing foundational techniques for multitasking and memory management in early personal computing."

summary:
  - point: "Introduces process control system calls like $WAIT, $Keep_process, and $EXIT for MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates memory management techniques for resident programs"
    link: "https://en.wikipedia.org/wiki/Terminate_and_stay_resident"
    link_label: "Terminate and Stay Resident"
  - point: "Highlights the influence of Unix-like design principles in MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Reflects Tim Paterson's adaptation of 86-DOS into a more sophisticated OS"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "wait-error-code-retrieval"
    line_start: 32
    line_end: 43
    title: "Retrieving the previous process error code"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $WAIT subroutine retrieves the error code from the last process that terminated and resets the stored error code to zero. This functionality is essential for debugging and process control in MS-DOS. At the time, error codes were a primary method for communicating the success or failure of operations between processes. Tim Paterson, adapting concepts from CP/M and Unix, implemented this mechanism to make MS-DOS more robust for developers. This approach influenced later operating systems, including Windows, which continued to use error codes extensively for process communication and debugging."
  - id: "keep-process-memory-management"
    line_start: 56
    line_end: 89
    title: "Memory management for resident programs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_stay_resident"
    image_url: ""
    image_caption: ""
    content: "The $Keep_process subroutine implements the 'Terminate and Stay Resident' (TSR) functionality, allowing a program to remain in memory after termination. This was a groundbreaking feature in MS-DOS, enabling utilities like keyboard enhancers and pop-up calendars to persist in the background. The subroutine adjusts the memory block size to ensure enough space for the resident program while maintaining system stability. TSR programs became a hallmark of MS-DOS, paving the way for multitasking-like behavior on single-tasking systems. Developers leveraged this feature to create innovative software, influencing the design of later multitasking operating systems."
  - id: "exit-subroutine-process-termination"
    line_start: 103
    line_end: 125
    title: "Graceful process termination and cleanup"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $EXIT subroutine handles process termination, ensuring proper cleanup and returning control to the parent process. It also checks for a Ctrl+C interrupt, allowing the user to terminate a process manually. This design reflects the influence of Unix-like systems, where process management and user control were prioritized. By implementing structured termination routines, MS-DOS improved reliability and user experience, laying the groundwork for similar mechanisms in Windows and other operating systems. The concept of structured process termination remains a cornerstone of modern computing."

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