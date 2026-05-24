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
description: "Implements the EXEC system call in MS-DOS v2.0, enabling program loading and execution, a critical feature for the operating system's functionality."

summary:
  - point: "Introduces support for both .COM and .EXE formats"
    link: "https://en.wikipedia.org/wiki/COM_file"
    link_label: ".COM file"
  - point: "Handles memory allocation and relocation for loaded programs"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"
  - point: "Incorporates Unix-inspired features like environment variables"
    link: "https://en.wikipedia.org/wiki/Environment_variable"
    link_label: "Environment variables"
  - point: "Optimized for IBM PC hardware constraints"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Executes programs with stack and register setup"
    link: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    link_label: "Stack setup"

enhancements:
  - id: "zexec-data-segment"
    line_start: 1
    line_end: 120
    title: "Why MS-DOS Segmented Its Data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "This section defines the ZEXEC_DATA segment, which houses variables and buffers used during the execution process. Segmentation was a necessity on the Intel 8086 processor, which had a 20-bit address space but could only access 64KB segments at a time. By splitting data into segments, the programmer could manage memory more effectively within these constraints. Tim Paterson, the original author of MS-DOS, adapted this approach from CP/M, which also used fixed memory layouts. The ZEXEC_DATA segment includes critical variables like `exec_blk` and `exec_environ`, which store program-specific information such as environment pointers and memory allocation details. This segmentation strategy influenced later operating systems, including Windows, which retained segmented memory models for backward compatibility."
  - id: "exec-check-function-validation"
    line_start: 1
    line_end: 120
    title: "How MS-DOS Validated System Calls"
    wikipedia_url: "https://en.wikipedia.org/wiki/System_call"
    image_url: ""
    image_caption: ""
    content: "This section validates the function code passed to the EXEC system call. The programmer checks if the function code (`AL`) is one of the allowed values (0, 1, or 3). Invalid codes result in an error (`exec_bad_fun`). This validation ensures that only supported operations are executed, preventing undefined behavior. At the time, system calls were the primary interface between user programs and the operating system, and their reliability was crucial. Tim Paterson's design reflects the simplicity and efficiency required for early personal computers, where every byte and instruction mattered. This approach to system call validation became a standard practice in operating systems, influencing designs like Unix and Linux."
  - id: "environment-variable-handling"
    line_start: 1
    line_end: 120
    title: "The Unix-Inspired Environment Variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "This section handles environment variables, a feature inspired by Unix. Environment variables provide a way to pass configuration data to programs, such as file paths or user preferences. MS-DOS v2.0 introduced this feature as part of its Unix-like enhancements, marking a significant evolution from the simpler CP/M system. The code retrieves the environment block and allocates memory for it, ensuring that the loaded program has access to its environment. This innovation allowed programs to be more flexible and portable, laying the groundwork for modern software development practices. Environment variables remain a fundamental concept in operating systems today, used extensively in scripting and application configuration."
  - id: "exec-read-header"
    line_start: 1
    line_end: 120
    title: "Reading Program Headers: .COM vs .EXE"
    wikipedia_url: "https://en.wikipedia.org/wiki/EXE_file"
    image_url: ""
    image_caption: ""
    content: "This section reads the program header to determine the format (.COM or .EXE) and memory requirements. .COM files are flat, single-segment binaries, while .EXE files are segmented and include relocation information. The header is read into a buffer, and its contents are analyzed to decide the next steps. This distinction was critical for MS-DOS, as it needed to support legacy CP/M-style programs while introducing more advanced features like segmented memory. The decision to support both formats ensured compatibility with existing software while enabling developers to create more complex applications. This dual-format approach influenced later operating systems, which often included backward compatibility layers for older software."
  - id: "memory-allocation-strategy"
    line_start: 1
    line_end: 120
    title: "Allocating Memory in a 64KB World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This section allocates memory for the program being loaded, considering both minimum and maximum requirements. The code calculates the size needed based on the program header and attempts to allocate it using the DOS memory management system. If the requested memory cannot be allocated, the program gracefully handles the error (`exec_no_mem`). Memory allocation was a challenging task on the 8086 processor due to its segmented architecture and limited address space. Tim Paterson's approach reflects the careful planning required to optimize memory usage in early personal computers. The techniques used here influenced later systems, including Windows, which built on DOS's memory management strategies."
  - id: "relocation-table-processing"
    line_start: 1
    line_end: 120
    title: "Relocating Code for Segmented Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Relocation_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section processes the relocation table for .EXE files, adjusting memory addresses to match the allocated segment. Relocation was necessary because .EXE files could be loaded into different memory locations, requiring their internal addresses to be updated. The code reads relocation entries from the file and applies them to the loaded image. This technique was borrowed from Unix and other operating systems that supported dynamic memory allocation. Relocation enabled more flexible program loading, allowing multiple programs to coexist in memory. This feature became standard in operating systems, influencing designs like Windows and Linux, which use similar techniques for dynamic linking and loading."
  - id: "exec-com-file-handling"
    line_start: 1
    line_end: 120
    title: "Loading .COM Files: Simplicity Wins"
    wikipedia_url: "https://en.wikipedia.org/wiki/COM_file"
    image_url: ""
    image_caption: ""
    content: "This section handles the loading of .COM files, which are simpler than .EXE files. .COM files are flat binaries with no headers or relocation information, making them easier to load and execute. The code allocates the maximum possible memory block and sets up the program's stack and registers. This simplicity was a key feature of early personal computers, where ease of use and compatibility were paramount. Tim Paterson's decision to support .COM files ensured that MS-DOS could run existing CP/M programs without modification. This compatibility helped MS-DOS gain widespread adoption, influencing the development of software ecosystems for decades."
  - id: "exec-build-header"
    line_start: 1
    line_end: 120
    title: "Assigning Ownership in Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_control_block"
    image_url: ""
    image_caption: ""
    content: "This section builds the program header, assigning ownership of the allocated memory block to the process. The header includes information like the environment pointer and memory size, which are essential for process management. This design reflects Unix's influence on MS-DOS v2.0, where process control blocks were used to manage resources. By assigning ownership, the operating system could track and manage memory usage more effectively. This approach laid the foundation for modern process management techniques, influencing operating systems like Windows and Linux, which use similar concepts to manage processes and their resources."
  - id: "exec-go-entry-point"
    line_start: 1
    line_end: 120
    title: "Jumping to the Program's Entry Point"
    wikipedia_url: "https://en.wikipedia.org/wiki/Entry_point"
    image_url: ""
    image_caption: ""
    content: "This section transfers control to the loaded program's entry point, setting up the stack and registers beforehand. The code ensures that the program starts with the correct segment and offset values, enabling seamless execution. This final step in the EXEC system call is critical for program loading, as it transitions from the operating system to the user program. Tim Paterson's implementation reflects the simplicity and efficiency required for early personal computers, where every instruction mattered. This technique influenced later operating systems, which built on MS-DOS's approach to program execution, incorporating features like dynamic linking and process isolation."
  - id: "finalizing-exec-code-segment"
    line_start: 1
    line_end: 120
    title: "Why This Code Block Ends So Precisely"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines finalize the EXEC system call implementation by marking the end of the code segment with assembly directives. `ZEXECCODEEND` is a label that serves as a reference point for the end of the EXEC code, while `PUBLIC ZEXECCODEEND` ensures that this label is accessible to other modules or routines that might need to reference it. The `ZEXEC_CODE ENDS` directive formally closes the segment, signaling to the assembler that no more instructions or data belong to this segment. In the early 1980s, assembly language was the dominant tool for low-level programming, particularly for operating systems like MS-DOS. Precise segment management was critical because the Intel 8086 architecture relied on segmented memory, with each segment limited to 64KB. Developers had to carefully delineate code, data, and stack segments to ensure proper execution and memory management. Tim Paterson and the Microsoft team adhered to these constraints while designing MS-DOS, borrowing concepts from CP/M and Unix to create a flexible yet efficient system. The EXEC system call itself was a cornerstone of MS-DOS, enabling the loading and execution of external programs. This functionality was pivotal for the IBM PC's success, as it allowed users to run third-party software seamlessly. The careful segmentation seen here reflects the meticulous engineering required to support this capability. This approach to segment management influenced later operating systems and programming practices. The concept of modular code organization and public labels persisted, evolving into modern linker and loader designs. MS-DOS's EXEC system call laid the groundwork for program execution models in Windows and other operating systems, shaping the way software interacts with hardware and system resources."

---

```asm
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
IF IBM
        MOV     AX,(OPEN SHL 8) + 0
        INT     int_command
ENDIF
IF NOT IBM
        XOR     AL,AL                   ; open for reading
        invoke  $OPEN                   ; is the file there?
ENDIF
        JC      exec_ret_err
        MOV     [exec_fh],AX
        MOV     BX,AX
IF IBM
        MOV     AX,(ioctl SHL 8)        ; get device information
        INT     int_command
ENDIF
IF NOT IBM
        XOR     AL,AL
        invoke  $IOCTL
ENDIF
        TEST    DL,devid_ISDEV
        JZ      exec_check_environ
        MOV     AL,exec_file_not_found
        transfer    SYS_RET_ERR

exec_check_environ:
        MOV     [exec_load_block],0

        TEST    BYTE PTR [exec_func],exec_func_overlay   ; overlays... no environment
        JNZ     exec_read_header
        LDS     SI,DWORD PTR [exec_blk] ; get block
        MOV     AX,[SI].Exec1_environ   ; address of environ
        OR      AX,AX
        JNZ     exec_scan_env
        MOV     DS,[CurrentPDB]
        MOV     AX,DS:[PDB_environ]
        MOV     [exec_environ],AX
        OR      AX,AX
        JZ      exec_read_header

exec_scan_env:
        CLD
        MOV     ES,AX
        XOR     DI,DI
        MOV     CX,07FFFh               ; at most 32k of environment
        XOR     AL,AL

exec_get_environ_len:
        REPNZ   SCASB                   ; find that nul byte
        JZ      exec_check              ; CX is out... bad environment
        MOV     AL,exec_bad_environment
        JMP     exec_bomb

exec_check:
        SCASB                           ; is there another nul byte?
        JNZ     exec_get_environ_len    ; no, scan some more
        PUSH    DI
        MOV     BX,DI                   ; AX <- length of environment
        ADD     BX,0Fh
        MOV     CL,4
        SHR     BX,CL                   ; number of paragraphs needed
        PUSH    ES
IF IBM
        MOV     AH,ALLOC
        INT     int_command
ENDIF
IF NOT IBM
        invoke  $ALLOC                  ; can we get the space?
ENDIF
        POP     DS
        POP     CX
        JNC     exec_save_environ
        JMP     exec_no_mem             ; nope... cry and sob

exec_save_environ:
        MOV     ES,AX
        MOV     [exec_environ],AX       ; save him for a rainy day
IF IBM
        PUSH    CX
        MOV     CX,ES
        ADD     CX,BX
        CMP     BX,[exec_low_seg]
        POP     CX
        JA      exec_no_mem
ENDIF
        XOR     SI,SI
        XOR     DI,DI
        REP     MOVSB                   ; copy the environment

exec_read_header:
;
; We read in the program header into the above data area and determine
; where in this memory the image will be located.
;
IF IBM
        PUSH    CS
        POP     DS                      ; and put it in DS:DX
        ASSUME  DS:EGROUP
ENDIF
IF NOT IBM
        PUSH    SS
        POP     DS                      ; and put it in DS:DX
        ASSUME  DS:DOSGROUP
ENDIF
        MOV     CX,exec_internal_buffer_size; header size
        MOV     BX,[exec_fh]            ; from the handle
IF IBM
        MOV     DX,OFFSET EGROUP:exec_signature
ENDIF
IF NOT IBM
        MOV     DX,OFFSET DOSGROUP:exec_signature
ENDIF
        PUSH    ES
        PUSH    DS
        CALL    exec_dealloc
IF IBM
        MOV     AH,READ
        INT     int_command
ENDIF
IF NOT IBM
        invoke  $READ
ENDIF
        CALL    exec_alloc
        POP     DS
        POP     ES
        JC      exec_bad_file
        CMP     AX,exec_internal_buffer_size; did we read the right number?
        JNZ     exec_com_filej          ; yep... continue
        CMP     [exec_max_BSS],0
        JNZ     exec_check_sig
        MOV     [exec_load_high],-1
exec_check_sig:
        MOV     AX,[exec_signature]
        CMP     AX,exe_valid_signature  ; zibo arises!
        JZ      exec_save_start         ; assume com file if no signature
        CMP     AX,exe_valid_old_signature  ; zibo arises!
        JZ      exec_save_start         ; assume com file if no signature

exec_com_filej:
        JMP     exec_com_file

;
; We have the program header... determine memory requirements
;
exec_save_start:
        MOV     AX,[exec_pages]         ; get 512-byte pages
        MOV     CL,5                    ; convert to paragraphs
        SHL     AX,CL
        SUB     AX,[exec_par_dir]       ; AX = size in paragraphs
        MOV     [exec_res_len_para],AX

;
; Do we need to allocate memory?  Yes if function is not load-overlay
;
        TEST    BYTE PTR [exec_func],exec_func_overlay
        JZ      exec_allocate           ; allocation of space
;
; get load address from block
;
        LES     DI,DWORD PTR [exec_blk]
        MOV     AX,ES:[DI].exec3_load_addr
        MOV     [exec_dma],AX
        MOV     AX,ES:[DI].exec3_reloc_fac
        MOV     [exec_rel_fac],AX
IF IBM
        JMP     exec_find_res
ENDIF
IF NOT IBM
        JMP     SHORT exec_find_res
ENDIF

exec_no_mem:
        MOV     AL,exec_not_enough_memory
        JMP     SHORT exec_bomb             ; AX should be set by $ALLOC

exec_bad_file:
        MOV     AL,exec_bad_format

exec_bomb:
        ASSUME  DS:NOTHING,ES:NOTHING
        PUSH    AX
        MOV     BX,[exec_fh]
        CALL    exec_dealloc
IF IBM
        MOV     AH,CLOSE
        INT     int_command
ENDIF
IF NOT IBM
        invoke  $CLOSE
ENDIF
        POP     AX
        transfer    SYS_RET_ERR

exec_allocate:
IF IBM
        ASSUME  DS:EGROUP
ENDIF
IF NOT IBM
        ASSUME  DS:DOSGROUP
ENDIF
        PUSH    AX
        MOV     BX,0FFFFh               ; see how much room in arena
        PUSH    DS
IF IBM
        MOV     AH,ALLOC
        INT     int_command
ENDIF
IF NOT IBM
        invoke  $ALLOC                  ; should have carry set and BX has max
ENDIF
        POP     DS
        POP     AX
        ADD     AX,10h                  ; room for header
        CMP     BX,11h                  ; enough room for a header
        JB      exec_no_mem
        CMP     AX,BX                   ; is there enough for bare image?
        JA      exec_no_mem
        CMP     [exec_load_high],0      ; if load high, use max
        JNZ     exec_BX_max             ; use max
        ADD     AX,[exec_min_BSS]       ; go for min allocation
        JC      exec_no_mem             ; oops! carry
        CMP     AX,BX                   ; enough space?
        JA      exec_no_mem             ; nope...
        SUB     AX,[exec_min_BSS]
        ADD     AX,[exec_max_BSS]       ; go for the MAX
        JC      exec_BX_max
        CMP     AX,BX
        JBE     exec_got_block

exec_BX_max:
        MOV     AX,BX

exec_got_block:
        PUSH    DS
        MOV     BX,AX
        MOV     [exec_size],BX
IF IBM
        MOV     AH,ALLOC
        INT     int_command
ENDIF
IF NOT IBM
        invoke  $ALLOC                  ; get the space
ENDIF
        POP     DS
        JC      exec_no_mem
        MOV     [exec_load_block],AX
        ADD     AX,10h
        CMP     [exec_load_high],0
        JZ      exec_use_ax             ; use ax for load info
        ADD     AX,[exec_size]          ; go to end
        SUB     AX,[exec_res_len_para]  ; drop off header
        SUB     AX,10h                  ; drop off pdb
exec_use_ax:
        MOV     [exec_rel_fac],AX       ; new segment
        MOV     [exec_dma],AX           ; beginning of dma
IF IBM
        CMP     AX,[exec_low_seg]       ; below loader
        JA      exec_no_mem_try
        ADD     AX,[exec_res_len_para]  ; go to end
        CMP     Ax,[exec_low_seg]       ; above loader
        JBE     exec_find_res
exec_try_high:
        CMP     [exec_load_high],0
        JZ      exec_no_memj1
exec_try_just_below:
        MOV     DX,AX
        SUB     DX,[exec_size]          ; get beginning
        ADD     DX,[exec_res_len_para]  ; no space
        CMP     DX,[exec_low_seg]       ; room there?
        JA      exec_no_memj1
        MOV     AX,[exec_low_seg]
        SUB     AX,[exec_res_len_para]
        JMP     exec_use_ax
exec_no_mem_try:
        MOV     DX,CS
        ADD     DX,(zexecdatasiz+zexeccodesize+15)/16
        CMP     AX,DX
        JAE     exec_try_high
        JMP     exec_try_just_below
exec_no_memj1:
        JMP     exec_no_mem
ENDIF

;
; Determine the location in the file of the beginning of the resident
;
exec_find_res:
        MOV     DX,[exec_par_dir]
        PUSH    DX
        MOV     CL,4
        SHL     DX,CL                   ; low word of location
        POP     AX
        MOV     CL,12
        SHR     AX,CL                   ; high word of location
        MOV     CX,AX                   ; CX <- high

;
; Read in the resident image (first, seek to it)
;
        MOV     BX,[exec_fh]
        PUSH    DS
IF IBM
        MOV     AX,(LSEEK SHL 8) + 0
        INT     int_command
ENDIF
IF NOT IBM
        XOR     AL,AL
        invoke  $LSEEK                  ; seek to resident
ENDIF
        POP     DS

exec_big_read:                          ; Read resident into memory
        MOV     BX,[exec_res_len_para]
        CMP     BX,1000h                ; too many bytes to read?
        JB      exec_read_ok
        MOV     BX,0FE0h                ; max in one chunk FE00 bytes

exec_read_ok:
        SUB     [exec_res_len_para],BX  ; we read (soon) this many
        PUSH    BX
        MOV     CL,4
        SHL     BX,CL                   ; get count in bytes from paras
        MOV     CX,BX                   ; count in correct register
        MOV     BX,[exec_fh]            ; handle in correct register
        PUSH    DS
        MOV     DS,[exec_dma]           ; Set up read buffer
        ASSUME  DS:NOTHING
        XOR     DX,DX
        PUSH    CX                      ; save our count
        CALL    exec_dealloc
IF IBM
        MOV     AH,READ
        INT     int_command
ENDIF
IF NOT IBM
        invoke  $READ                   ; WOMP!
ENDIF
        CALL    exec_alloc
        POP     CX                      ; get old count to verify
        POP     DS
IF IBM
        ASSUME  DS:EGROUP
ENDIF
IF NOT IBM
        ASSUME  DS:DOSGROUP
ENDIF
        CMP     CX,AX                   ; did we read enough?
        POP     BX                      ; get paragraph count back
        JNZ     exec_do_reloc           ; and do reloc if no more to read
;
; We've read in CX bytes... bump DTA location
;

        ADD     [exec_dma],BX           ; bump dma address
        CMP     [exec_res_len_para],0
        JNZ     exec_big_read

;
; The image has now been read in.  We must perform relocation to
; the current location.
;

exec_do_reloc:
        MOV     CX,[exec_rel_fac]
        MOV     AX,[exec_SS]            ; get initial SS
        ADD     AX,CX                   ; and relocate him
        MOV     [exec_init_SS],AX

        MOV     AX,[exec_SP]            ; initial SP
        MOV     [exec_init_SP],AX

        LES     AX,DWORD PTR [exec_IP]
        MOV     [exec_init_IP],AX
        MOV     AX,ES
        ADD     AX,CX                   ; relocated...
        MOV     [exec_init_CS],AX

        XOR     CX,CX
        MOV     DX,[exec_rle_table]
        MOV     BX,[exec_fh]
        PUSH    DS
IF IBM
        MOV     AX,(LSEEK SHL 8) + 0
        INT     int_command
ENDIF
IF NOT IBM
        XOR     AX,AX
        invoke  $LSEEK
ENDIF
        POP     DS

        JNC     exec_get_entries
exec_bad_filej:
        JMP     exec_bad_file

exec_get_entries:
        MOV     DX,[exec_rle_count]     ; Number of entries left

exec_read_reloc:
        ASSUME  DS:NOTHING
        PUSH    DX
IF IBM
        MOV     DX,OFFSET EGROUP:exec_signature
ENDIF
IF NOT IBM
        MOV     DX,OFFSET DOSGROUP:exec_signature
ENDIF
        MOV     CX,((exec_internal_buffer_size)/4)*4
        MOV     BX,[exec_fh]
        PUSH    DS
        CALL    exec_dealloc
IF IBM
        MOV     AH,READ
        INT     int_command
ENDIF
IF NOT IBM
        invoke  $READ
ENDIF
        CALL    exec_alloc
        POP     ES
        POP     DX
        JC      exec_bad_filej
        MOV     CX,(exec_internal_buffer_size)/4
IF IBM
        MOV     DI,OFFSET EGROUP:exec_signature   ; Pointer to byte location in header
ENDIF
IF NOT IBM
        MOV     DI,OFFSET DOSGROUP:exec_signature   ; Pointer to byte location in header
ENDIF
;
; Relocate a single address
;
        MOV     SI,[exec_rel_fac]

exec_reloc_one:
        CMP     DX,0                    ; Any more entries?
        JNE     exec_get_addr
        JMP     Exec_set_PDB

exec_get_addr:
        LDS     BX,DWORD PTR ES:[DI]    ; Get ra/sa of entry
        MOV     AX,DS                   ; Relocate address of item
        ADD     AX,SI
        MOV     DS,AX
        MOV     AX,WORD PTR DS:[BX]     ; Relocate item
        ADD     AX,SI
        MOV     WORD PTR DS:[BX],AX
        ADD     DI,4
        DEC     DX
        LOOP    exec_reloc_one              ; End of internal buffer?

;
; We've exhausted a single buffer's worth.  Read in the next piece
; of the relocation table.
;

        PUSH    ES
        POP     DS
        JMP     exec_read_reloc

exec_no_memj:
        JMP     exec_no_mem

;
; we have a .COM file.  First, determine if we are merely loading an overlay.
;
exec_com_file:
        TEST    BYTE PTR [exec_func],exec_func_overlay
        JZ      exec_alloc_com_file
        LDS     SI,DWORD PTR [exec_blk]           ; get arg block
        LODSW                           ; get load address
        MOV     [exec_dma],AX
        JMP     SHORT exec_64k          ; read it all!

; We must allocate the max possible size block (ick!)  and set up
; CS=DS=ES=SS=PDB pointer, IP=100, SP=max size of block.
;
exec_alloc_com_file:
        MOV     BX,0FFFFh
IF IBM
        MOV     AH,ALLOC
        INT     int_command
ENDIF
IF NOT IBM
        invoke  $ALLOC                  ; largest piece available as error
ENDIF
        OR      BX,BX
        JZ      exec_no_memj
        MOV     [exec_size],BX          ; save size of allocation block
IF IBM
        MOV     AH,ALLOC
        INT     int_command
ENDIF
IF NOT IBM
        PUSH    BX
        invoke  $ALLOC                  ; largest piece available as error
        POP     BX                      ; get size of block...
ENDIF
        MOV     [exec_load_block],AX
        ADD     AX,10h                  ; increment for header
        MOV     [exec_dma],AX
        SUB     BX,10h                  ; remember header
IF IBM
;
; need to read up to exec_low_seg (at most)
;
        MOV     CX,[exec_low_seg]
        CMP     AX,CX                   ; is base of allocation above spot
        JA      exec_check_64k
        SUB     CX,AX
        CMP     CX,BX
        JA      exec_check_64k
        MOV     BX,CX

exec_check_64k:
ENDIF
        CMP     BX,1000h                ; 64k or more?
        JAE     exec_64k                ; yes, read only 64k
        MOV     AX,BX                   ; convert size to bytes
        MOV     CL,4
        SHL     AX,CL
        JMP     SHORT exec_read_com

exec_64k:
        MOV     AX,0FFFFh               ; 64k-1 bytes

exec_read_com:
        PUSH    AX                      ; save number to read
        MOV     BX,[exec_fh]            ; of com file
        XOR     CX,CX                   ; but seek to 0:0
        MOV     DX,CX
IF IBM
        MOV     AX,(LSEEK SHL 8) + 0
        INT     int_command
ENDIF
IF NOT IBM
        XOR     AX,AX                   ; seek relative to beginning
        invoke  $LSEEK                  ; back to beginning of file
ENDIF
        MOV     BX,[exec_fh]
        POP     CX                      ; number to read
        MOV     DS,[exec_dma]
        XOR     DX,DX
        PUSH    CX
        CALL    exec_dealloc
IF IBM
        MOV     AH,READ
        INT     int_command
ENDIF
IF NOT IBM
        invoke  $READ                   ; read in com file
ENDIF
        CALL    exec_alloc
        POP     SI                      ; get number of bytes to read
        CMP     AX,SI                   ; did we read them all?
IF IBM
        JNZ     exec_skip               ; exactly the wrong number... no memory
        JMP     exec_no_mem
exec_skip:
ENDIF
IF NOT IBM
        JZ      exec_no_memj            ; exactly the wrong number... no memory
ENDIF
        TEST    BYTE PTR [exec_func],exec_func_overlay
        JNZ     exec_set_PDB            ; no starto, chumo!
        MOV     AX,[exec_DMA]
        SUB     AX,10h
        MOV     [exec_init_CS],AX
        MOV     [exec_init_IP],100h     ; initial IP is 100
        ; SI is at most FFFFh
        DEC     SI                      ; make room for stack
        ; SI is at most FFFEh, room for a 0!
        MOV     [exec_init_SP],SI       ; max value for read is also SP!
        MOV     [exec_init_SS],AX
        MOV     DS,AX
        MOV     WORD PTR DS:[SI],0      ; 0 for return

exec_set_PDB:
        MOV     BX,[exec_fh]            ; we are finished with the file.
        CALL    exec_dealloc
IF IBM
        MOV     AH,CLOSE
        INT     int_command
ENDIF
IF NOT IBM
        invoke  $CLOSE                  ; release the jfn
ENDIF
        CALL    exec_alloc
        TEST    BYTE PTR [exec_func],exec_func_overlay
        JZ      exec_build_header
        transfer    SYS_RET_OK          ; overlay load -> done

exec_build_header:
        MOV     DX,[exec_load_block]
;
; assign the space to the process
;

        MOV     SI,arena_owner          ; pointer to owner field

        MOV     AX,[exec_environ]       ; get environ pointer
        OR      AX,AX
        JZ      NO_OWNER                ; no environment
        DEC     AX                      ; point to header
        MOV     DS,AX
        MOV     DS:[SI],DX              ; assign ownership
NO_OWNER:
        MOV     AX,[exec_load_block]    ; get load block pointer
        DEC     AX
        MOV     DS,AX                   ; point to header
        MOV     DS:[SI],DX              ; assign ownership

        PUSH    DX
IF IBM
        MOV     AH,DUP_PDB
        INT     int_command
        MOV     ES,DX
        MOV     [CurrentPDB],DX
ENDIF
IF NOT IBM
        MOV     BYTE PTR [CreatePDB], 0FFH  ; indicate a new process
        invoke  $Dup_PDB                    ; ES is now PDB
ENDIF
        POP     DX
        PUSH    [exec_environ]
        POP     ES:[PDB_environ]
        MOV     SI,[exec_size]
        ADD     SI,DX
        MOV     ES:[PDB_block_len],SI
;
; set up proper command line stuff
;
        LDS     SI,DWORD PTR [exec_blk]           ; get the block
        PUSH    DS                      ; save its location
        PUSH    SI
        LDS     SI,DS:[SI.exec0_5C_FCB] ; get the 5c fcb
        MOV     CX,12                   ; copy drive, name and ext
        PUSH    CX
        MOV     DI,5Ch
        MOV     BL,DS:[SI]
        REP     MOVSB
        XOR     AX,AX                   ; zero extent, etc for CPM
        STOSW
        STOSW
        POP     CX
        POP     SI                      ; get block
        POP     DS
        PUSH    DS                      ; save (again)
        PUSH    SI
        LDS     SI,DS:[SI.exec0_6C_FCB] ; get 6C FCB
        MOV     DI,6Ch                  ; do same as above
        MOV     BH,DS:[SI]
        REP     MOVSB
        STOSW
        STOSW
        POP     SI                      ; get block (last time)
        POP     DS
        LDS     SI,DS:[SI.exec0_com_line]   ; command line
        MOV     CX,80h
        MOV     DI,CX
        REP     MOVSB                   ; Wham!

;
; Process BX into default AX (validity of drive specs on args)
;
        DEC     CL                      ; get 0FFh in CX
        CMP     BH,[NUMIO]
        JBE     exec_BH_good
        MOV     BH,CL
        JMP     SHORT exec_BL
exec_BH_good:
        XOR     BH,BH
exec_BL:
        CMP     BL,[NUMIO]
        JBE     exec_BL_good
        MOV     BL,CL
        JMP     SHORT exec_set_return
exec_BL_good:
        XOR     BL,BL
exec_set_return:
        invoke  get_user_stack          ; get his return address
        PUSH    [SI.user_CS]            ; suck out the CS and IP
        PUSH    [SI.user_IP]
        PUSH    [SI.user_CS]            ; suck out the CS and IP
        PUSH    [SI.user_IP]
        POP     WORD PTR ES:[PDB_Exit]
        POP     WORD PTR ES:[PDB_Exit+2]
        XOR     AX,AX
        MOV     DS,AX
        POP     DS:[addr_int_terminate] ; save them where we can get them later
        POP     DS:[addr_int_terminate+2]   ; when the child exits.
IF NOT IBM
        MOV     WORD PTR [DMAADD],80h
        MOV     DS,[CurrentPDB]
        MOV     WORD PTR [DMAADD+2],DS
ENDIF
IF IBM
        PUSH    DX
        PUSH    DS
        MOV     DS,[CurrentPDB]
        MOV     DX,80h
        MOV     AH,SET_DMA
        INT     int_command
        POP     DS
        POP     DX
ENDIF
        TEST    BYTE PTR [exec_func],exec_func_no_execute
        JZ      exec_go

        LDS     SI,DWORD PTR [exec_init_SP] ; get stack
        LES     DI,DWORD PTR [exec_blk]           ; and block for return
        MOV     ES:[DI].exec1_SS,DS     ; return SS

        DEC     SI                      ; 'push' default AX
        DEC     SI
        MOV     DS:[SI],BX              ; save default AX reg
        MOV     ES:[DI].exec1_SP,SI     ; return 'SP'

        LDS     AX,DWORD PTR [exec_init_IP]
        MOV     ES:[DI].exec1_CS,DS     ; initial entry stuff

        MOV     ES:[DI].exec1_IP,AX
        transfer    SYS_RET_OK

exec_go:
IF IBM
        CALL    restore_ctrlc               ; restore value of ctrl-c checker
ENDIF
        LDS     SI,DWORD PTR [exec_init_IP] ; get entry point
        CLI
IF NOT IBM
        MOV     BYTE PTR INDOS,0
ENDIF
        MOV     SS,[exec_init_SS]       ; set up user's stack
        ASSUME  SS:NOTHING
        MOV     SP,[exec_init_SP]       ; and SP
        STI
        PUSH    DS                      ; fake long call to entry
        PUSH    SI
        MOV     ES,DX                   ; set up proper seg registers
        MOV     DS,DX
        MOV     AX,BX                   ; set up proper AX
        procedure   exec_long_ret,FAR
        RET
exec_long_ret   ENDP

$Exec   ENDP

        procedure   exec_dealloc,near
        ASSUME      DS:NOTHING,ES:NOTHING
        PUSH        BX
        MOV         BX,arena_owner_system
        CALL        exec_do_change_owner
        POP         BX
        return
exec_dealloc  ENDP

        procedure   exec_alloc,near
        PUSH        BX
        MOV         BX,[CurrentPDB]
        CALL        exec_do_change_owner
        POP         BX
        return
exec_alloc  ENDP

        procedure   exec_do_change_owner,NEAR
        PUSH    DS
        PUSH    AX
        MOV     AX,[exec_environ]
        OR      AX,AX
        JZ      exec_alloc_try_load
        DEC     AX
        MOV     DS,AX
        MOV     DS:[arena_owner],BX
exec_alloc_try_load:
        MOV     AX,[exec_load_block]
        OR      AX,AX
        JZ      exec_alloc_done
        DEC     AX
        MOV     DS,AX
        MOV     DS:[arena_owner],BX
exec_alloc_done:
        POP     AX
        POP     DS
        RET
exec_do_change_owner    ENDP

IF IBM
SYS_RET_ERR:
        CALL    get_user_stack
        PUSH    [SI.user_f]
        XOR     AH,AH
        MOV     [SI.user_AX],AX
        POPF
        STC
        JMP SYS_RET
SYS_RET_OK:
        CALL    get_user_stack
        PUSH    [SI.user_f]
        POPF
        CLC
SYS_RET:
        PUSHF
        CALL    restore_ctrlc
        POP     [SI.user_f]
        JMP     exec_long_ret

;
; get_user_stack returns the user's stack (and hence registers) in DS:SI
;
        procedure   get_user_stack,NEAR
        PUSH    SS
        POP     DS
        ASSUME  DS:RESGROUP
        LDS     SI,DWORD PTR [user_SP]
        RET
get_user_stack  ENDP
;
; restore value of the ctrl-c checker
;
        procedure    restore_ctrlc
        PUSH    AX
        PUSH    DX
        MOV     DL,CS:[exec_ctrlc]
        MOV     AX,(Set_Ctrl_C_Trapping SHL 8) + 1      ; Put it back
        INT     int_command
        POP     DX
        POP     AX
        RET
restore_ctrlc   ENDP

ZEXECCODESIZE   EQU     $-ZERO
ZEXECCODEEND    LABEL BYTE
        PUBLIC  ZEXECCODEEND
ZEXEC_CODE      ENDS
ENDIF
```
