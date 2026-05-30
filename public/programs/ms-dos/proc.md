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
description: "This file implements process control system calls for MS-DOS v2.0, a pivotal version that introduced Unix-inspired features to the operating system."

summary:
  - point: "Introduces process control routines like $WAIT and $EXIT for managing process lifecycle"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Includes Terminate-and-Stay-Resident (TSR) functionality, enabling programs to remain in memory after execution"
    link: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    link_label: "TSR"
  - point: "Reflects the influence of Unix/XENIX on MS-DOS v2.0 design"
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"
  - point: "Demonstrates early memory management techniques for constrained hardware environments"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Highlights the modularity of MS-DOS source code via conditional assembly directives"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "wait-error-code-retrieval"
    line_start: 32
    line_end: 43
    title: "How MS-DOS Returned Process Error Codes"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $WAIT procedure retrieves the exit code from the previous process and resets it to zero. This is accomplished by moving the value of the `exit_code` variable into the AX register, clearing DX, and resetting `exit_code` to zero. The procedure then transfers control back to the system with `SYS_RET_OK`. At the time, MS-DOS was designed to operate on the Intel 8086 processor with limited resources, and managing process lifecycle efficiently was crucial. Tim Paterson's original 86-DOS laid the groundwork for these conventions, but MS-DOS v2.0 expanded on them by adopting Unix-like features. This routine reflects the modularity and simplicity that characterized MS-DOS, making it accessible for developers working on early PCs. The concept of returning error codes became a standard practice in operating systems and programming languages, influencing later systems like Windows and Linux."
  - id: "terminate-stay-resident"
    line_start: 56
    line_end: 98
    title: "The Trick That Kept Programs in Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    image_url: ""
    image_caption: ""
    content: "The $Keep_process and Stay_resident procedures implement the Terminate-and-Stay-Resident (TSR) functionality, allowing programs to remain in memory after execution. This was achieved by truncating the current memory block to a specified size and simulating an exit by resetting the CurrentPDB (Process Descriptor Block) and restoring system vectors. TSR programs were a clever workaround for the limited multitasking capabilities of MS-DOS, enabling utilities like pop-up calendars and keyboard enhancers to stay active in the background. TSR functionality became a hallmark of MS-DOS, influencing the design of later operating systems and inspiring the development of background processes and services in modern systems like Windows. Developers often used TSRs to extend the capabilities of early PCs, and their legacy can be seen in the way modern operating systems handle resident services."
  - id: "exit-to-parent-process"
    line_start: 103
    line_end: 125
    title: "Exiting Processes the MS-DOS Way"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The $EXIT procedure handles the termination of a process and returns control to the parent process. It sets the `Exit_type` variable to indicate the type of termination (normal or due to Ctrl+C), retrieves the user stack, and transfers control to the abort handler. This routine reflects MS-DOS's focus on simplicity and direct control over process management, which was essential for operating in constrained environments with limited memory and processing power. The design of $EXIT was influenced by Unix-like systems, which introduced structured process management to MS-DOS v2.0. This approach became foundational for subsequent operating systems, shaping how processes are terminated and error codes are propagated. The concept of structured process termination influenced not only DOS-based systems but also modern operating systems like Windows and Linux, where process lifecycle management remains a core feature."

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