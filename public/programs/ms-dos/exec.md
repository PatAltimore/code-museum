---
title: "EXEC.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/EXEC.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/EXEC.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "exec"
order: 7
description: "The EXEC system call in MS-DOS v2.0, a pivotal mechanism for loading and running programs, defined how software interacted with the operating system during the early PC era."

summary:
  - point: "MS-DOS was the operating system for the IBM PC, launched in 1981."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Tim Paterson developed the precursor to MS-DOS, 86-DOS, in just six weeks."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "MS-DOS v2.0 introduced Unix-inspired features like subdirectories and file handles."
    link: "https://en.wikipedia.org/wiki/MS-DOS#MS-DOS_2.x"
    link_label: "MS-DOS 2.x"
  - point: "The IBM PC revolutionized personal computing, with MS-DOS at its core."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "exec-call-structure"
    line_start: 1
    line_end: 20
    title: "The Blueprint for Program Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These opening lines define the EXEC system call, a cornerstone of MS-DOS functionality. The programmer is laying out the structure for loading and executing programs, supporting both .COM and .EXE formats. In 1983, this was a critical step in making MS-DOS versatile and compatible with a wide range of software. Tim Paterson, the original author of 86-DOS, had designed the system to be simple yet powerful, and Microsoft expanded on this foundation. At the time, personal computers were transitioning from hobbyist tools to business machines, and the ability to run diverse programs efficiently was a key selling point. The EXEC call encapsulates this ambition, enabling programs to be loaded into memory, prepared for execution, or used as overlays. This mechanism became a standard for DOS-based systems, influencing how operating systems managed program execution for years."
  - id: "error-handling-and-return-values"
    line_start: 66
    line_end: 72
    title: "Error Codes: A Window into Constraints"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section lists the error codes returned by the EXEC call, such as 'exec_file_not_found' and 'exec_not_enough_memory.' These codes reflect the constraints of early computing: limited memory, fragile disk systems, and the need for precise error reporting. In 1983, programmers worked with hardware that was orders of magnitude less capable than today’s machines—IBM PCs typically had 64KB to 256KB of RAM. Every byte mattered, and error handling had to be efficient and informative. The design of these error codes also reveals the priorities of the era: ensuring the user or developer could diagnose issues quickly in a resource-constrained environment. This approach to error handling influenced later operating systems, embedding the idea that clear, standardized error codes are essential for debugging and system stability."
  - id: "ibm-specific-optimizations"
    line_start: 74
    line_end: 182
    title: "Tailoring MS-DOS for IBM PCs"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "This block of code includes conditional assembly directives for IBM-specific optimizations. By 1983, MS-DOS had become the operating system of choice for IBM PCs, and Microsoft had to ensure compatibility with IBM’s hardware quirks. The IBM PC was the first widely adopted personal computer, and its architecture dictated many design decisions in MS-DOS. For example, this section includes routines for handling the Ctrl-C interrupt and setting up stack information specific to IBM’s implementation. The collaboration between IBM and Microsoft was pivotal; IBM’s hardware dominance paired with Microsoft’s software flexibility created a platform that would define personal computing for decades. These optimizations highlight the close interplay between hardware and software in the early PC era, shaping the future of operating system design."
  - id: "program-validation-and-setup"
    line_start: 183
    line_end: 200
    title: "Ensuring Programs Are Ready to Run"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines validate the function code (AL register) and set up the program’s execution environment. The programmer is ensuring that only valid operations—loading, executing, or overlaying—are permitted. This validation step reflects the meticulous attention to reliability that was necessary in the early days of personal computing. With limited debugging tools and no internet to provide instant support, operating systems had to be robust out of the box. This code also prepares the program’s memory block and initializes key registers, laying the groundwork for execution. In 1983, this was cutting-edge: MS-DOS v2.0 introduced features inspired by Unix, such as hierarchical file systems and improved program management. These advancements made MS-DOS more powerful and flexible, paving the way for its dominance in the PC market."

---

; excerpt — first 200 lines of v2.0/source/EXEC.ASM

SUBTTL $exec - load/go a program
PAGE
;
; Assembler usage:
;           LDS     DX, name
;           LES     BX, blk
;           MOV     AH, Exec
;           MOV     AL, func
;           INT     int_command
;
;       AL  Function
;       --  --------
;        0  Load and execute the program.
;        1  Load, create  the  program  header  but  do  not
;           begin execution.
;        3  Load overlay. No header created.
;
;           AL = 0 -> load/execute program
;
;           +---------------------------+
;           | WORD segment address of   |
;           | environment.              |
;           +---------------------------+
;           | DWORD pointer to ASCIZ    |
;           | command line at 80h       |
;           +---------------------------+
;           | DWORD pointer to default  |
;           | FCB to be passed at 5Ch   |
;           +---------------------------+
;           | DWORD pointer to default  |
;           | FCB to be passed at 6Ch   |
;           +---------------------------+
;
;           AL = 1 -> load program
;
;           +---------------------------+
;           | WORD segment address of   |
;           | environment.              |
;           +---------------------------+
;           | DWORD pointer to ASCIZ    |
;           | command line at 80h       |
;           +---------------------------+
;           | DWORD pointer to default  |
;           | FCB to be passed at 5Ch   |
;           +---------------------------+
;           | DWORD pointer to default  |
;           | FCB to be passed at 6Ch   |
;           +---------------------------+
;           | DWORD returned value of   |
;           | CS:IP                     |
;           +---------------------------+
;           | DWORD returned value of   |
;           | SS:IP                     |
;           +---------------------------+
;
;           AL = 3 -> load overlay
;
;           +---------------------------+
;           | WORD segment address where|
;           | file will be loaded.      |
;           +---------------------------+
;           | WORD relocation factor to |
;           | be applied to the image.  |
;           +---------------------------+
;
; Returns:
;           AX = exec_invalid_function
;              = exec_bad_format
;              = exec_bad_environment
;              = exec_not_enough_memory
;              = exec_file_not_found
;

IF IBM
ZEXEC_DATA  SEGMENT PUBLIC BYTE
ZERO =   $
ENDIF

exec_blk            DD  ?
exec_func           DB  ?
exec_fh             DW  ?
exec_rel_fac        DW  ?
exec_res_len_para   DW  ?
exec_init_IP        DW  ?
exec_init_CS        DW  ?
exec_init_SP        DW  ?
exec_init_SS        DW  ?
exec_environ        DW  ?
exec_size           DW  ?
exec_load_block     DW  ?

exec_load_high      DB  ?

exec_internal_buffer    EQU $
exec_signature      DW  ?               ; must contain 4D5A  (yay zibo!)
exec_len_mod_512    DW  ?               ; low 9 bits of length
exec_pages          DW  ?               ; number of 512b pages in file
exec_rle_count      DW  ?               ; count of reloc entries
exec_par_dir        DW  ?               ; number of paragraphs before image
exec_min_BSS        DW  ?               ; minimum number of para of BSS
exec_max_BSS        DW  ?               ; max number of para of BSS
exec_SS             DW  ?               ; stack of image
exec_SP             DW  ?               ; SP of image
exec_chksum         DW  ?               ; checksum  of file (ignored)
exec_IP             DW  ?               ; IP of entry
exec_CS             DW  ?               ; CS of entry
exec_rle_table      DW  ?               ; byte offset of reloc table
exec_iov            DW  ?               ; overlay number (0 for root)
exec_dma            DW  ?
exec_internal_buffer_size   EQU $-exec_internal_buffer

IF IBM
exec_ctrlc          DB  ?               ; state of users ctrlc flag
Exec_low_seg        DW  ?
CurrentPDB          DW  ?
NUMIO               DB  ?
ZEXECDATASIZ    =       $-ZERO
ZEXECDATAEND    LABEL   BYTE
        PUBLIC  ZEXECDATAEND
ZEXEC_DATA  ENDS
ZEXEC_CODE  SEGMENT PUBLIC PARA
        PUBLIC  $EXEC
ZERO =   $
        procedure   $EXEC,FAR
        ASSUME  CS:EGROUP,SS:RESGROUP,ES:NOTHING,DS:NOTHING
ENDIF
IF NOT IBM
        procedure   $Exec,NEAR
        ASSUME  DS:NOTHING, ES:NOTHING
ENDIF
;
; validate function
;

IF IBM
        PUSH    CS
        POP     DS
        ASSUME  DS:EGROUP

        MOV     AX,(Set_Ctrl_C_Trapping SHL 8) + 0      ; Save current ctrl-c
        INT     int_command
        MOV     exec_ctrlc,DL
        XOR     DX,DX
        MOV     AX,(Set_Ctrl_C_Trapping SHL 8) + 1      ; Turn it off!
        INT     int_command

        MOV     AH,Get_current_PDB
        INT     int_command
        MOV     [CurrentPDB],BX
;
; set up user return stack info
;
        MOV     ES,BX
        LES     BX,DWORD PTR [user_sp]
        MOV     WORD PTR ES:[PDB_user_stack+2],ES
        MOV     WORD PTR ES:[PDB_user_stack],BX

        MOV     AH,Get_Default_Drive
        INT     int_command
        MOV     DL,AL
        MOV     AH,Set_default_drive
        INT     int_command
        MOV     [NUMIO],AL
;
; determine lowest seg address for overwrite problem (round DOWN)
;
        MOV     CL,4
        MOV     AX,OFFSET ZEXEC_CODE:exec_check
        SHR     AX,CL
        PUSH    CS
        POP     BX
        ADD     AX,BX
        MOV     [exec_low_seg],AX

        CALL    get_user_stack
        ASSUME  DS:NOTHING
        MOV     AX,[SI.user_AX]
        MOV     BX,[SI.user_BX]
        MOV     DX,[SI.user_DX]
        MOV     ES,[SI.user_ES]
        MOV     DS,[SI.user_DS]
ENDIF

        CMP     AL,3                    ; only 0, 1 or 3 are allowed
        JNA     exec_check_2

exec_bad_fun:
        error   error_invalid_function

exec_ret_err:
        transfer    SYS_RET_ERR

exec_check_2:
        CMP     AL,2
        JZ      exec_bad_fun

        MOV     WORD PTR [exec_blk],BX  ; stash args
        MOV     WORD PTR [exec_blk+2],ES
        MOV     BYTE PTR [exec_func],AL
        MOV     BYTE PTR [exec_load_high],0