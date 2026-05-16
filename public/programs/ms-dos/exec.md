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
description: "Implements the EXEC system call in MS-DOS v2.0, a critical mechanism for loading and executing programs in the operating system."

summary:
  - point: "Supports both .COM and .EXE formats for program execution"
    link: "https://en.wikipedia.org/wiki/COM_file"
    link_label: ".COM file format"
  - point: "Introduces segmented memory management for .EXE files"
    link: "https://en.wikipedia.org/wiki/EXE_file"
    link_label: ".EXE file format"
  - point: "Handles overlays, a technique for managing large programs in limited memory"
    link: "https://en.wikipedia.org/wiki/Overlay_(programming)"
    link_label: "Overlay programming"
  - point: "Includes error handling for invalid functions, bad formats, and insufficient memory"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS overview"
  - point: "Reflects the influence of Unix/XENIX on MS-DOS v2.0's design"
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"

enhancements:
  - id: "exec-system-call-overview"
    line_start: 1
    line_end: 17
    title: "Loading programs: A universal mechanism"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "These opening lines define the EXEC system call, a cornerstone of MS-DOS functionality. The programmer's goal here is clear: provide a unified mechanism to load and execute programs, whether they are simple .COM files or more complex .EXE files with segmented memory. This was a pivotal feature for an operating system designed to run on IBM PCs with limited resources. In 1983, the computing world was transitioning from hobbyist systems to professional-grade personal computers. IBM's PC had set the standard, and MS-DOS was its operating system. Tim Paterson, originally the author of 86-DOS, had created a simple, fast OS for Intel's 8086 processor. By the time MS-DOS 2.0 was released, Microsoft had rewritten much of the code to incorporate features inspired by Unix, such as hierarchical file systems and system calls like EXEC. EXEC's ability to handle both flat and segmented program formats reflects the constraints and ingenuity of the era. Memory was scarce, and programmers had to optimize every byte. The decision to support overlays—a technique for swapping parts of a program in and out of memory—was a direct response to these limitations. This system call became a standard interface for program execution, influencing generations of software. Its design choices, such as segmented memory management, persisted in later operating systems and shaped the development of software for decades. Without this mechanism, MS-DOS might have struggled to support the diverse range of applications that fueled the PC revolution."
  - id: "program-argument-structures"
    line_start: 18
    line_end: 65
    title: "Structuring program arguments for execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This section meticulously defines the data structures passed to the EXEC system call, detailing how arguments like environment segments, command lines, and file control blocks (FCBs) are organized. These structures are crucial for ensuring that programs receive the correct context when executed. In 1983, personal computers were limited by their hardware: the IBM PC had a maximum of 640 KB of RAM, and storage was often handled by floppy disks. Programmers had to design systems that could operate efficiently within these constraints. The EXEC call reflects this reality, with its careful allocation of memory and its use of pointers to pass data between programs. The inclusion of overlays in this section is particularly noteworthy. Overlays allowed large programs to run in limited memory by loading only the necessary parts of the code at any given time. This technique was borrowed from earlier systems and adapted for MS-DOS, showcasing the influence of prior computing innovations. These argument structures laid the foundation for program execution in MS-DOS. They were simple yet flexible, enabling a wide range of applications to run on the platform. This approach influenced later operating systems, which built upon the idea of passing structured arguments to programs. The careful design of these structures ensured that MS-DOS could support the growing complexity of software in the early 1980s."
  - id: "error-handling-and-return-values"
    line_start: 66
    line_end: 72
    title: "Error handling in a constrained environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This brief section outlines the error codes returned by the EXEC system call, providing a mechanism for programs to diagnose issues like invalid functions, bad formats, or insufficient memory. Error handling was a critical feature in MS-DOS, ensuring that programs could respond gracefully to failures. In the early 1980s, software development was often a solitary endeavor, with programmers working under tight deadlines and limited resources. Tim Paterson and the Microsoft team had to design an operating system that was robust enough to handle errors without crashing. The error codes defined here reflect their pragmatic approach: they are simple, consistent, and easy for programmers to interpret. These error codes became a standard part of MS-DOS's interface, influencing how software was written for the platform. They encouraged developers to write programs that could handle failures gracefully, improving the overall reliability of the system. This focus on error handling was a key factor in MS-DOS's success, helping it become the dominant operating system for personal computers."
  - id: "exec-data-segment"
    line_start: 74
    line_end: 120
    title: "Data segment: Preparing for program execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This section defines the data segment used by the EXEC system call, including variables for program headers, memory allocation, and execution parameters. It represents the groundwork for loading and running programs in MS-DOS. When MS-DOS 2.0 was developed, the IBM PC's hardware imposed strict limitations on memory usage. The 8086 processor used a segmented memory model, which required careful management of data and code segments. The data structures defined here reflect the challenges of working within these constraints, with variables for stack pointers, segment addresses, and relocation factors. The inclusion of a signature check (\"4D5A\") for .EXE files is particularly interesting. This signature, which corresponds to the ASCII characters \"MZ,\" became a hallmark of the .EXE format. It was a simple yet effective way to verify that a file was correctly formatted for execution. These data structures were essential for the operation of MS-DOS, enabling the system to load and execute programs efficiently. They influenced the design of later operating systems, which built upon the ideas of segmented memory and structured program headers. The careful planning evident in this section highlights the ingenuity of the programmers who created MS-DOS."
  - id: "ibm-specific-code"
    line_start: 112
    line_end: 182
    title: "IBM-specific enhancements for EXEC"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This section contains code specific to IBM PCs, including handling for Ctrl+C trapping, default drive settings, and user return stack information. These enhancements reflect the close relationship between MS-DOS and IBM hardware. When Microsoft licensed MS-DOS to IBM, they had to ensure that the operating system was tailored to the IBM PC's architecture. This meant adding features like Ctrl+C trapping, which allowed users to interrupt programs, and managing default drive settings to align with the PC's disk system. These features were designed to make MS-DOS more user-friendly and reliable. The code also includes calculations for the lowest segment address, a workaround for memory overwrite problems. This reflects the challenges of working with the 8086 processor's segmented memory model, which required careful planning to avoid conflicts. These IBM-specific enhancements helped MS-DOS become the standard operating system for personal computers. They ensured compatibility with IBM hardware, which was critical for the platform's success. This section highlights the collaborative effort between Microsoft and IBM to create a system that met the needs of both users and hardware manufacturers."
  - id: "function-validation"
    line_start: 184
    line_end: 200
    title: "Validating functions: Ensuring integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This final section validates the function codes passed to the EXEC system call, ensuring that only valid operations are executed. It represents a safeguard against errors and misuse. In the early days of personal computing, software was often written by amateur programmers who might not fully understand the operating system's requirements. MS-DOS had to be robust enough to handle invalid inputs without crashing. This validation code reflects Microsoft's commitment to creating a reliable system. The decision to restrict function codes to 0, 1, and 3 demonstrates the simplicity of MS-DOS's design. By limiting the range of valid operations, the system reduces the likelihood of errors and ensures consistent behavior. This validation mechanism became a standard feature of MS-DOS, influencing the design of later operating systems. It highlights the importance of error prevention in software development, a principle that remains relevant today."

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