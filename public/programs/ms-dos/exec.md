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
description: "Implements the EXEC system call in MS-DOS v2.0, enabling program loading and execution, a cornerstone of early PC operating systems."

summary:
  - point: "Supports both .COM and .EXE formats, reflecting the duality of flat and segmented memory models in early PCs."
    link: "https://en.wikipedia.org/wiki/COM_file"
    link_label: ".COM file"
  - point: "Introduces function-specific handling (e.g., load-only, execute, overlay), showcasing flexibility in program management."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Handles memory constraints and environment setup, critical in the limited hardware of the IBM PC era."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Incorporates error handling for invalid functions, bad formats, and insufficient memory, ensuring robustness."
    link: "https://en.wikipedia.org/wiki/Interrupt_21h"
    link_label: "INT 21h"
  - point: "Reflects Unix-inspired design choices in MS-DOS v2.0, such as overlays and environment segmentation."
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "exec-function-overview"
    line_start: 1
    line_end: 17
    title: "Loading Programs: A Flexible Approach"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These opening lines define the EXEC system call, a pivotal feature of MS-DOS that allows programs to be loaded and executed. The programmer, likely Tim Paterson or a Microsoft engineer, is laying out the different modes of operation: load and execute, load only, and load overlay. This flexibility was essential for the IBM PC, which had to manage limited memory and support a variety of software formats (.COM and .EXE). In 1983, the computing world was transitioning from simple home computers to more capable business machines, and MS-DOS v2.0 reflected this shift by adopting ideas from Unix, such as overlays and segmented memory. The EXEC call became a foundation for multitasking and modular program design, influencing later operating systems."
  - id: "memory-layout-and-environment"
    line_start: 18
    line_end: 65
    title: "Memory Layout: A Balancing Act"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "This section meticulously outlines the memory layout and environment setup for programs loaded via EXEC. The programmer is addressing the constraints of the IBM PC's 8086 processor, which had a segmented memory model and only 640KB of usable RAM. Each program needed its environment, command line arguments, and file control blocks (FCBs) carefully positioned in memory. The design reflects the era's hardware limitations and the need for efficiency. By defining these structures, MS-DOS v2.0 ensured compatibility with a wide range of software, paving the way for the PC's dominance. These memory management techniques influenced future operating systems, including Windows, which inherited MS-DOS's legacy."
  - id: "error-handling-and-return-values"
    line_start: 66
    line_end: 72
    title: "Error Handling: Anticipating Failures"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_21h"
    image_url: ""
    image_caption: ""
    content: "The EXEC call includes robust error handling, returning specific codes for issues like invalid functions, bad formats, and insufficient memory. This reflects the programmer's foresight in designing an operating system that could gracefully handle the unpredictable nature of early PC software. In 1983, software compatibility was a major concern, as developers were still learning to work within the constraints of the IBM PC architecture. By providing detailed error codes, MS-DOS empowered developers to debug their programs and ensured smoother user experiences. This approach to error handling became a standard in operating system design, influencing both DOS-based and modern systems."
  - id: "exec-data-segment"
    line_start: 74
    line_end: 120
    title: "Data Structures for Program Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This segment defines the data structures used by the EXEC call, including fields for program headers, relocation factors, and stack pointers. These structures are crucial for managing the transition from one program to another, ensuring that the loaded program has the resources it needs to run. The programmer is addressing the technical challenge of supporting both .COM and .EXE formats, which required different handling due to their flat and segmented memory models. In the early 1980s, this level of detail was groundbreaking, as it allowed MS-DOS to support a wide range of software. These data structures laid the groundwork for more advanced features in later versions of DOS and Windows."
  - id: "ibm-specific-setup"
    line_start: 135
    line_end: 182
    title: "IBM-Specific Customizations"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "This section includes customizations for IBM PCs, such as handling the Ctrl-C flag and setting up the user return stack. These details highlight the close relationship between MS-DOS and IBM hardware, as Microsoft tailored the operating system to meet IBM's specifications. In 1983, the IBM PC was the dominant personal computer, and MS-DOS's success was tied to its ability to leverage IBM's hardware features. The programmer is addressing practical concerns, such as ensuring smooth program termination and preventing memory overwrite issues. These customizations reflect the collaborative effort between Microsoft and IBM, which shaped the early PC industry and influenced the design of future operating systems."

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