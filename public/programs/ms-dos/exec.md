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
description: "Implements the EXEC system call in MS-DOS v2.0, enabling program loading and execution in both .COM and .EXE formats."

summary:
  - point: "Supports both .COM and .EXE formats for program execution"
    link: "https://en.wikipedia.org/wiki/COM_file"
    link_label: ".COM file"
  - point: "Introduces segmented memory handling for .EXE files"
    link: "https://en.wikipedia.org/wiki/EXE_(file_format)"
    link_label: ".EXE file format"
  - point: "Includes error handling for memory constraints and file issues"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Reflects Unix-inspired design in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"
  - point: "Demonstrates early IBM PC compatibility considerations"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "exec-system-call-overview"
    line_start: 1
    line_end: 17
    title: "EXEC: The Heart of Program Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This section introduces the EXEC system call, a cornerstone of MS-DOS's ability to load and execute programs. The call is invoked via INT 21h, function 4Bh, and supports three primary functions: loading and executing a program (AL=0), loading a program without execution (AL=1), and loading overlays (AL=3). The programmer's goal here was to provide a flexible mechanism for running software in the constrained environment of early PCs. At the time, the IBM PC had just launched, equipped with an Intel 8088 processor and limited memory. MS-DOS needed to handle both flat .COM files and segmented .EXE files, reflecting the growing complexity of software development. Tim Paterson, who originally wrote 86-DOS, laid the groundwork for this functionality, while Microsoft's adaptation for v2.0 added features inspired by Unix, such as subdirectories and file handles. The EXEC call's design influenced generations of operating systems, establishing conventions for program execution and error handling that persisted long after MS-DOS's dominance."
  - id: "exec-error-handling"
    line_start: 66
    line_end: 71
    title: "Error Codes: Coping with Constraints"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "The EXEC system call includes robust error handling, returning specific codes for invalid functions, bad file formats, insufficient memory, and missing files. These codes reflect the challenges of programming for early PCs, where hardware limitations were a constant concern. Memory was scarce, and disk drives were slow and unreliable. By providing clear error codes, MS-DOS empowered developers to diagnose and address issues in their software, fostering a more resilient ecosystem of applications. This approach was influenced by Unix, which emphasized clear communication between the operating system and user programs. The error codes also highlight the meticulous attention to detail in MS-DOS's design, ensuring it could operate reliably in a wide range of environments."
  - id: "ibm-specific-code"
    line_start: 74
    line_end: 126
    title: "IBM-Specific Adjustments in EXEC"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This section includes code tailored for IBM PCs, reflecting Microsoft's commitment to supporting the new platform. It handles tasks like saving and disabling Ctrl-C trapping, managing the program's default drive, and setting up the user return stack. These adjustments were necessary to ensure compatibility with IBM's hardware and BIOS, which differed from other systems of the era. Microsoft's decision to prioritize IBM compatibility was strategic, as the IBM PC quickly became the standard for personal computing. This code showcases the collaborative effort between Microsoft and IBM, which helped establish MS-DOS as the dominant operating system for PCs and cemented Microsoft's role as a key player in the industry."
  - id: "exec-function-validation"
    line_start: 132
    line_end: 200
    title: "Validating EXEC Function Calls"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section validates the function specified in the EXEC system call, ensuring it is one of the supported options (0, 1, or 3). Invalid functions trigger an error, preventing unintended behavior. The validation logic reflects the careful design of MS-DOS, which aimed to balance flexibility with reliability. By enforcing strict rules for function calls, the system reduced the risk of crashes and corruption, which were common issues in early computing. This approach was influenced by Unix, which emphasized robust error handling and predictable behavior. The validation code highlights the evolution of MS-DOS from a simple CP/M clone to a more sophisticated operating system, capable of meeting the demands of a rapidly growing software ecosystem."

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