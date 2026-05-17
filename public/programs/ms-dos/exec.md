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
description: "Implements the EXEC system call in MS-DOS v2.0, enabling program execution and overlay loading in a segmented memory model."
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Supports .COM and .EXE program formats for execution"
    link: "https://en.wikipedia.org/wiki/COM_file"
    link_label: ".COM File Format"
  - point: "Introduces overlay loading for memory-constrained systems"
    link: "https://en.wikipedia.org/wiki/Overlay_(programming)"
    link_label: "Overlay Programming"
  - point: "Handles environment setup and command-line arguments"
    link: "https://en.wikipedia.org/wiki/Environment_variable"
    link_label: "Environment Variables"
  - point: "Reflects MS-DOS's adaptation to IBM PC hardware constraints"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Demonstrates early multitasking and memory management techniques"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "exec-system-call-overview"
    line_start: 1
    line_end: 17
    title: "EXEC: The Gateway to Program Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Elf-layout--en.svg/330px-Elf-layout--en.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Layout of an ELF file (CC BY-SA 3.0)"
    content: "These opening lines define the EXEC system call, a cornerstone of MS-DOS's ability to load and execute programs. The programmer's immediate goal was to provide a unified interface for running both .COM files (simple, flat memory layout) and .EXE files (segmented, with headers). This section outlines the three main functions of EXEC: load and execute, load without execution, and load overlays. In 1983, MS-DOS v2.0 was heavily influenced by Unix concepts, and this design reflects that influence by introducing structured program loading and overlays, which allowed developers to manage memory more efficiently in constrained environments. At the time, the IBM PC's 8086 processor and its 1MB address space imposed strict limits on program size and complexity. The EXEC call was a direct response to these constraints, enabling multitasking-like behavior by carefully managing memory and execution contexts. This foundational mechanism paved the way for MS-DOS's widespread adoption and compatibility with diverse software ecosystems."
  - id: "exec-data-structure-definitions"
    line_start: 74
    line_end: 120
    title: "Data Structures for Program Loading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Executable_and_Linkable_Format"
    image_url: ""
    image_caption: ""
    content: "This section defines the data structures used by the EXEC system call to manage program loading. From environment segment addresses to file control blocks (FCBs), these variables encapsulate the state required to load and execute programs. The inclusion of fields like `exec_signature` (which must contain 'MZ', the magic number for .EXE files) highlights the transition from simple .COM files to more sophisticated .EXE files with headers and relocation tables. In the early 1980s, these structures represented cutting-edge techniques for handling segmented memory and program metadata. Tim Paterson, who originally developed 86-DOS, likely drew inspiration from CP/M and Unix while designing these mechanisms. The careful organization of these fields ensured compatibility with the IBM PC's hardware and allowed MS-DOS to become a versatile operating system. These structures influenced later executable formats, including the Portable Executable (PE) format used in Windows."
  - id: "validate-function-and-user-context"
    line_start: 132
    line_end: 182
    title: "Validating Functionality and User Context"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control-C"
    image_url: ""
    image_caption: ""
    content: "This segment validates the EXEC function and sets up the user context for program execution. It begins by saving and disabling the Ctrl-C trapping mechanism, a critical feature for handling user interrupts. The code then retrieves the current Program Segment Prefix (PDB), which contains metadata about the running program, and sets up the user return stack. These steps ensure a seamless transition between the calling program and the loaded program. In 1983, these techniques were essential for managing the limited resources of the IBM PC while providing a robust user experience. The decision to disable Ctrl-C during execution reflects the need to prevent interruptions that could corrupt memory or destabilize the system. This section also demonstrates MS-DOS's ability to adapt to hardware quirks, such as segment alignment issues. By carefully managing the stack and segment addresses, the code ensures compatibility across different configurations. These practices laid the groundwork for modern operating systems' handling of program execution and user interrupts."
  - id: "exec-function-dispatch"
    line_start: 184
    line_end: 200
    title: "Dispatching EXEC Functions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "This final section dispatches the EXEC functions based on the value of the AL register. It checks for valid function codes (0, 1, or 3) and prepares the necessary arguments for program loading. Invalid function codes result in an error being raised, showcasing early error-handling mechanisms in MS-DOS. The careful validation and dispatching reflect the operating system's emphasis on reliability and compatibility. In the early 1980s, these checks were crucial for preventing crashes and ensuring predictable behavior in a rapidly growing software ecosystem. The use of interrupts (INT 21h) to invoke system calls was a hallmark of MS-DOS, providing a simple yet powerful interface for developers. This design influenced later operating systems, including Windows, which retained the interrupt-driven model for backward compatibility. The EXEC function's ability to handle overlays also foreshadows modern techniques for dynamic linking and modular software design."

---

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