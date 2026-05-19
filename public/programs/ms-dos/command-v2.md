---
title: "COMMAND.ASM (v2.0)"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/COMMAND.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/COMMAND.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "command-v2"
order: 25
description: "This file is the assembly source for COMMAND.COM, the MS-DOS command interpreter, rewritten for version 2.0 in 1983. It reflects the transition from a simple single-tasking environment to a more Unix-inspired design with subdirectories, pipes, and device drivers."

summary:
  - point: "COMMAND.COM's transient portion overlays itself to maximize memory for user programs"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Version 2.0 introduces Unix-like features such as subdirectories and pipes"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Memory management routines allocate and deallocate memory dynamically for transient code"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Error handling routines provide user-friendly messages for common execution errors"
    link: "https://en.wikipedia.org/wiki/Error_handling"
    link_label: "Error Handling"
  - point: "The EXEC system call enables process creation, a foundational feature for multitasking systems"
    link: "https://en.wikipedia.org/wiki/System_call"
    link_label: "System Call"

enhancements:
  - id: "userpath-default-path-null"
    line_start: 239
    line_end: 249
    title: "Default PATH set to null: a design choice"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "This section defines the default PATH environment variable as null (\"NUL\") rather than pointing to a specific directory like \"BIN.\" This choice aligns with IBM's conventions and reflects the growing need for flexibility in MS-DOS 2.0. In earlier versions, hardcoded paths were common, but as DOS expanded to support multiple drives and subdirectories, a null path allowed the user or OEMs to define their own search paths dynamically. This design decision influenced later operating systems, where environment variables became a standard mechanism for configuration."
  - id: "envirend-environment-size-calculation"
    line_start: 253
    line_end: 307
    title: "Calculating environment size for memory management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The ENVIREND label marks the end of the environment segment, and the size of the environment is calculated using EQU directives. This calculation ensures that the environment block, which stores variables like PATH and COMSPEC, fits within the allocated memory. Memory management was a critical aspect of MS-DOS, as it operated on machines with limited RAM (often 64 KB to 640 KB). By dynamically calculating sizes, MS-DOS avoided wasting precious memory and laid the groundwork for efficient memory handling in later systems."
  - id: "progstart-jump-to-resident-code"
    line_start: 311
    line_end: 317
    title: "Jumping to resident code: initialization begins"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The PROGSTART label marks the entry point for the resident portion of COMMAND.COM. It immediately jumps to CONPROC, the main command processing routine. This structure reflects the modular design of MS-DOS 2.0, where the resident portion handles essential tasks like interrupt processing and memory checks. By separating initialization code from transient command processing, MS-DOS optimized memory usage and allowed the transient portion to be overwritten by user programs, maximizing available memory for applications."
  - id: "do-exec-process-creation"
    line_start: 335
    line_end: 381
    title: "EXEC: Creating new processes in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/System_call"
    image_url: ""
    image_caption: ""
    content: "The do_exec routine implements the EXEC system call, which creates a new process by loading and executing a program. It saves the current stack state, checks memory availability, and switches to a new stack if necessary. This routine reflects MS-DOS 2.0's move toward supporting multitasking-like features, inspired by Unix. While MS-DOS remained single-tasking, EXEC laid the groundwork for process management in later systems like Windows. Developers studying this code adapted similar techniques for early multitasking environments."
  - id: "get-mem-memory-allocation"
    line_start: 385
    line_end: 485
    title: "Allocating memory dynamically for transient code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The Get_mem routine dynamically allocates memory for the transient portion of COMMAND.COM. It uses the ALLOC and DEALLOC system calls to request and release memory, ensuring that the transient code fits within the available space. This approach was crucial for MS-DOS, which operated on machines with limited RAM. By dynamically managing memory, MS-DOS allowed larger programs to run by overlaying the transient portion. This technique influenced later operating systems and compilers, which adopted similar memory management strategies."
  - id: "exechk-checksum-validation"
    line_start: 541
    line_end: 555
    title: "Checksum validation: ensuring code integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Checksum"
    image_url: ""
    image_caption: ""
    content: "The EXECHK routine validates the integrity of the transient portion of COMMAND.COM by calculating and comparing checksums. This ensures that the transient code has not been corrupted or overwritten. Checksum validation was a common technique in early computing to detect errors in memory or disk storage. By implementing this routine, MS-DOS improved reliability and reduced the risk of crashes. Similar techniques are still used today in software updates and network communication to verify data integrity."
  - id: "exec-err-error-message-selection"
    line_start: 559
    line_end: 583
    title: "Error message selection: user-friendly feedback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The EXEC_ERR routine selects and displays appropriate error messages for common execution errors, such as file not found or insufficient memory. This user-friendly approach reflects the growing importance of usability in MS-DOS 2.0. By providing clear feedback, MS-DOS helped users diagnose and resolve issues more easily. Error handling routines like this influenced later operating systems, which expanded on the concept with graphical error dialogs and detailed logs."
  - id: "ext-exec-stack-relocation"
    line_start: 597
    line_end: 627
    title: "Relocating stack for EXEC: avoiding corruption"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The EXT_EXEC routine relocates the stack to allocated memory before executing a new process. This prevents stack corruption, as the transient portion may overwrite free space during execution. Stack relocation demonstrates MS-DOS's careful memory management, ensuring stability even in constrained environments. This technique influenced later systems, where stack management became a critical aspect of process isolation and multitasking."
  - id: "contc-interrupt-handler"
    line_start: 643
    line_end: 661
    title: "Handling interrupts: resetting disks and batch termination"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The CONTC routine handles interrupts, resetting disks and checking for batch termination. It ensures that open files are closed and resources are released, maintaining system stability. Interrupt handling was a key feature of MS-DOS, enabling responsive and reliable operation. This routine influenced later operating systems, which expanded interrupt handling to support advanced features like preemptive multitasking and real-time processing."
  - id: "fatalc-system-crash-handler"
    line_start: 701
    line_end: 719
    title: "System crash handler: graceful failure"
    wikipedia_url: "https://en.wikipedia.org/wiki/Crash_(computing)"
    image_url: ""
    image_caption: ""
    content: "The FATALC routine handles fatal errors, displaying messages and gracefully crashing the system if necessary. It ensures that users are informed of the issue and prevents further damage by halting operations. This approach reflects the importance of reliability in MS-DOS, which aimed to provide a stable platform for business and personal use. Similar crash handling routines became standard in later operating systems, evolving into features like the Windows Blue Screen of Death and Linux kernel panic messages."
  - id: "havcom-path-separator-selection"
    line_start: 1029
    line_end: 1041
    title: "Path separator selection for compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This routine determines the path separator character ('/' or '\\') based on user input or system defaults. The programmer's goal here was to ensure compatibility with different conventions, as MS-DOS v2.0 introduced subdirectories, a feature inspired by Unix. At the time, the computing world was fragmented, with various operating systems using different conventions for file paths. By allowing flexibility in path separators, MS-DOS could cater to a broader audience, including developers transitioning from Unix-like systems. This decision influenced later systems, including Windows, which continued to support both separators for backward compatibility."
  - id: "useslash-transient-info-transfer"
    line_start: 1043
    line_end: 1067
    title: "Transient information transfer to memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section transfers transient program information into a designated memory area. The transient program area was a key innovation in MS-DOS v2.0, allowing external commands (like COMMAND.COM) to be loaded and executed dynamically. This approach was inspired by Unix's ability to execute programs from disk rather than keeping everything in memory. The transient area concept became foundational for DOS-based systems, enabling modularity and extensibility. It also influenced the design of later operating systems like Windows, where dynamic loading of executables became standard."
  - id: "remcheck-removable-media-detection"
    line_start: 1079
    line_end: 1097
    title: "Detecting removable media for floppy drives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "This routine checks whether the media in a drive is removable, a critical feature for floppy disk support. At the time, floppy drives were the primary storage medium for personal computers, and detecting whether a disk was removable or fixed was essential for proper file handling. The routine uses BIOS interrupt calls to query the hardware, reflecting the low-level nature of MS-DOS's interaction with the IBM PC architecture. This functionality laid the groundwork for handling removable storage in later systems, including USB drives and SD cards."
  - id: "savhand-stdin-stdout-redirection"
    line_start: 1223
    line_end: 1259
    title: "Redirecting standard input and output handles"
    wikipedia_url: "https://en.wikipedia.org/wiki/Standard_streams"
    image_url: ""
    image_caption: ""
    content: "This routine saves and redirects the standard input and output handles to the error stream. Such redirection was a feature borrowed from Unix, enabling more flexible command-line operations. By manipulating file handles at this level, MS-DOS allowed programs to interact with different streams, paving the way for advanced scripting and batch processing. This capability influenced later command-line interfaces, including the Windows Command Prompt and PowerShell, which expanded on these concepts."
  - id: "readcom-transient-program-loading"
    line_start: 1391
    line_end: 1435
    title: "Loading transient programs into memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/COMMAND.COM"
    image_url: ""
    image_caption: ""
    content: "This routine loads the COMMAND.COM program into the transient memory area. COMMAND.COM was the default command interpreter for MS-DOS, responsible for executing user commands and batch files. The loading process involves opening the file, seeking to the appropriate location, and reading its contents into memory. This mechanism reflects the modular nature of MS-DOS, where the operating system itself was kept minimal, relying on external programs for extended functionality. The transient program loading concept influenced later systems, including the dynamic linking of libraries in Windows."
  - id: "chksum-transient-program-validation"
    line_start: 1467
    line_end: 1495
    title: "Checksum validation for transient programs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Checksum"
    image_url: ""
    image_caption: ""
    content: "This routine computes a checksum for the transient program area to verify its integrity. Checksums were a common method for error detection in the early days of computing, ensuring that data was not corrupted during transfer or storage. By validating the transient program's checksum, MS-DOS could detect issues before execution, improving reliability. This technique was widely adopted in software development, influencing practices like CRC validation in network protocols and file systems."
  - id: "setvect-interrupt-vector-setup"
    line_start: 1501
    line_end: 1539
    title: "Setting interrupt vectors for error handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "This routine sets interrupt vectors for handling termination, Ctrl-C events, and disk errors. Interrupt vectors are pointers to routines that handle specific events, allowing the operating system to respond dynamically to user actions or system errors. MS-DOS's use of interrupt vectors reflects its close integration with the IBM PC hardware, where such mechanisms were essential for real-time system control. This approach influenced later operating systems, including Windows, which expanded on interrupt handling with structured exception handling and event-driven programming."
  - id: "transtart-memory-alignment-for-transient"
    line_start: 1541
    line_end: 1557
    title: "Memory alignment for transient program loading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This segment aligns memory for loading transient programs, ensuring proper execution. Memory alignment was crucial in the 1980s due to hardware constraints and performance considerations. By aligning memory segments, MS-DOS optimized access times and reduced errors, a practice that became standard in operating system design. This technique influenced memory management strategies in later systems, including virtual memory and paging in modern operating systems."
  - id: "execstart-memory-alignment-for-execution"
    line_start: 1559
    line_end: 1575
    title: "Memory alignment for executable program loading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Executable"
    image_url: ""
    image_caption: ""
    content: "This segment aligns memory for loading executable programs, ensuring they are positioned correctly for execution. Proper memory alignment was a critical consideration in the design of MS-DOS, as it directly impacted the system's ability to execute programs efficiently. This approach reflects the low-level optimization required in the early days of personal computing, where every byte of memory mattered. The principles established here influenced the design of executable file formats like PE (Portable Executable) in Windows."

---

;

; This version of COMMAND is divided into three distinct parts.  First is the

; resident portion, which includes handlers for interrupts 22H (terminate),

; 23H (Cntrl-C), 24H (fatal error), and 27H (stay resident); it also has code

; to test and, if necessary, reload the transient portion.  Following the

; resident is the init code, which is overwritten after use.  Then comes the

; transient portion, which includes all command processing (whether internal

; or external).  The transient portion loads at the end of physical memory,

; and it may be overlayed by programs that need as much memory as possible.

; When the resident portion of command regains control from a user program, a

; checksum is performed on the transient portion to see if it must be

; reloaded.  Thus programs which do not need maximum memory will save the time

; required to reload COMMAND when they terminate.



;

; REV 1.17

;    05/19/82   Fixed bug in BADEXE error (relocation error must return to

;               resident since the EXELOAD may have overwritten the transient.

; REV 1.18

;    05/21/82   IBM version always looks on drive A

;               MSVER always looks on default drive

;

; REV 1.19

;    06/03/82   Drive spec now entered in command line

;    06/07/82   Added VER command (print DOS version number) and VOL command

;               (print volume label)

; REV 1.20

;    06/09/82   Prints "directory" after directories

;    06/13/82   MKDIR, CHDIR, PWD, RMDIR added

; REV 1.50

;               Some code for new 2.0 DOS, sort of HACKey.  Not enough time to

;               do it right.

; REV 1.70

;               EXEC used to fork off new processes

; REV 1.80

;               C switch for single command execution

; REV 1.90

;               Batch uses XENIX

; Rev 2.00

;               Lots of neato stuff

;               IBM 2.00 level

; Rev 2.01

;               'D' switch for date time suppression

; Rev 2.02

;               Default userpath is NUL rather than BIN

;                       same as IBM

;               COMMAND split into pieces

; Rev 2.10

;               INTERNATIONAL SUPPORT

; Rev 2.11      COMMAND split into more pieces



        INCLUDE DOSSYM.ASM

        INCLUDE DEVSYM.ASM

        INCLUDE COMSW.ASM

        INCLUDE COMEQU.ASM



CODERES SEGMENT PUBLIC

CODERES ENDS



DATARES SEGMENT PUBLIC BYTE

        EXTRN   COMBAD:BYTE,NEEDCOM:BYTE,DRVMSG:BYTE

        EXTRN   DEFMSG:BYTE,PROMPT:BYTE,EXECEMES:BYTE,EXEBAD:BYTE

        EXTRN   TOOBIG:BYTE,NOCOM:BYTE,RBADNAM:BYTE,INT_2E_RET:DWORD

        EXTRN   NOHANDMES:BYTE,BMEMMES:BYTE,HALTMES:BYTE,FRETMES:BYTE

        EXTRN   PARENT:WORD,HANDLE01:WORD,LOADING:BYTE,BATCH:WORD

        EXTRN   TRNSEG:WORD,COMDRV:BYTE,MEMSIZ:WORD,SUM:WORD,EXTCOM:BYTE

        EXTRN   IO_SAVE:WORD,PERMCOM:BYTE,SINGLECOM:WORD,VERVAL:WORD

        EXTRN   PIPEFLAG:BYTE,SAVE_PDB:WORD,COMSPEC:BYTE,TRANS:WORD

        EXTRN   TRANVARS:BYTE,LTPA:WORD,RSWITCHAR:BYTE,RDIRCHAR:BYTE

        EXTRN   RETCODE:WORD,FORFLAG:BYTE



        IF      IBMVER

        EXTRN   SYS_CALL:DWORD,ZEXEC:WORD,EXESEG:WORD,EXESUM:WORD

        EXTRN   USER_SS:WORD,USER_SP:WORD

        ENDIF



DATARES ENDS



ENVIRONMENT SEGMENT PUBLIC PARA        ; Default COMMAND environment

ENVIRONMENT ENDS



INIT    SEGMENT PUBLIC PARA

        EXTRN   CONPROC:NEAR

INIT    ENDS



TAIL    SEGMENT PUBLIC PARA

TAIL    ENDS



TRANCODE        SEGMENT PUBLIC PARA

TRANCODE        ENDS



TRANDATA        SEGMENT PUBLIC BYTE

        EXTRN   TRANDATAEND:BYTE

TRANDATA        ENDS



TRANSPACE       SEGMENT PUBLIC BYTE

        EXTRN   TRANSPACEEND:BYTE,HEADCALL:DWORD

TRANSPACE       ENDS



TRANTAIL        SEGMENT PUBLIC PARA

TRANTAIL        ENDS



ZEXEC_CODE      SEGMENT PUBLIC PARA

ZEXEC_CODE      ENDS



ZEXEC_DATA      SEGMENT PUBLIC BYTE

ZEXEC_DATA      ENDS



RESGROUP        GROUP   CODERES,DATARES,ENVIRONMENT,INIT,TAIL

TRANGROUP       GROUP   TRANCODE,TRANDATA,TRANSPACE,TRANTAIL

EGROUP          GROUP   ZEXEC_CODE,ZEXEC_DATA



ENVIRONMENT SEGMENT PUBLIC PARA        ; Default COMMAND environment



        PUBLIC  ECOMSPEC,ENVIREND,PATHSTRING



        ORG     0

ENVARENA DB     10H DUP (?)     ; Pad for mem arena

PATHSTRING DB   "PATH="

USERPATH LABEL  BYTE



        DB      0               ; Null path

        DB      "COMSPEC="

ECOMSPEC DB     "/COMMAND.COM"

        DB      134 DUP (0)



ENVIREND        LABEL   BYTE



ENVIRONSIZ EQU  $-PATHSTRING

ENVIRONSIZ2 EQU $-ECOMSPEC

ENVIRONMENT ENDS





; START OF RESIDENT PORTION



CODERES SEGMENT PUBLIC



        PUBLIC  GETCOMDSK2,LODCOM,THEADFIX,CONTCTERM,LOADCOM,INT_2E,LODCOM1

        PUBLIC  CHKSUM,SETVECT,EXT_EXEC,TREMCHECK,RESTHAND,CONTC,RSTACK

        PUBLIC  SAVHAND



        IF      IBMVER

        PUBLIC  EXECHK,SYSCALL,EXEC_WAIT

        ENDIF



ASSUME  CS:RESGROUP,DS:NOTHING,ES:NOTHING,SS:NOTHING



        EXTRN   RPRINT:NEAR,ASKEND:NEAR,DSKERR:NEAR





        ORG     0

ZERO    =       $



        ORG     100H



PROGSTART:

        JMP     RESGROUP:CONPROC



        DB      (80H - 3) DUP (?)

RSTACK  LABEL   WORD



IF IBMVER

SYSCALL:

        CMP     AH,EXEC

        JZ      do_exec

        JMP     DWORD PTR [SYS_CALL]



do_exec:

        PUSH    ES

        PUSH    DS

        PUSH    BP

        PUSH    DI

        PUSH    SI

        PUSH    DX

        PUSH    CX

        PUSH    BX

        PUSH    AX

        MOV     [user_ss],SS

        MOV     [user_sp],SP

;

; are we running on RSTACK already?

;

        PUSH    CS

        POP     BX              ; BX <- CS

        PUSH    SS

        POP     AX              ; AX <- SS

        CMP     AX,BX           ; IF AX == BX then no stack switch!

        JZ      Get_mem

        MOV     SS,BX

ASSUME  SS:RESGROUP

        MOV     SP,OFFSET RESGROUP:RSTACK



Get_mem:

        MOV     BX,0FFFFH       ; allocate all of memory

        MOV     AH,ALLOC

        INT     int_command

        MOV     AX,OFFSET EGROUP:ZEXECDATAEND + 15

        MOV     CL,4

        SHR     AX,CL

        MOV     CX,AX          ; Save in CX

        CMP     BX,AX          ; enough for EXEC?

        JB      EXECMER        ; nope... cry

        MOV     AH,ALLOC

        INT     int_command

        JC      EXECMER         ; Memory arenas probably trashed

        ADD     BX,AX

        MOV     [MEMSIZ],BX

        SUB     BX,CX

        MOV     [EXESEG],BX     ; exec

        MOV     ES,AX

        MOV     AH,DEALLOC

        INT     int_command

        PUSH    CS

        POP     DS

ASSUME  DS:RESGROUP

        CALL    EXECHK

        CMP     DX,[EXESUM]

        JZ      HAVEXEC         ; EXEC OK

        MOV     DX,OFFSET RESGROUP:COMSPEC

        MOV     AX,OPEN SHL 8

        INT     int_command             ; Open COMMAND.COM

        JC      EXECMER

        MOV     BX,AX           ; Handle

        MOV     DX,OFFSET RESGROUP:TRANSTART

        ADD     DX,OFFSET TRANGROUP:EXECSTART - 100H

        XOR     CX,CX           ; Seek loc

        MOV     AX,LSEEK SHL 8

        INT     int_command

        MOV     CX,OFFSET EGROUP:ZEXECCODEEND

        MOV     DS,[EXESEG]

ASSUME  DS:NOTHING

        MOV     AH,READ

        INT     int_command

        PUSH    AX

        MOV     AH,CLOSE

        INT     int_command             ; Close COMMAND.COM

        POP     CX

        CMP     CX,OFFSET EGROUP:ZEXECCODEEND

        JNZ     EXECMER         ; Size matched



        CALL    EXECHK

        CMP     DX,[EXESUM]

        JNZ     EXECMER

HAVEXEC:

        MOV     [LOADING],0             ; Flag to DSKERR

        CALL    DWORD PTR [ZEXEC]

        JMP     SHORT EXECRET

execmer:

        LDS     SI,DWORD PTR [user_Sp]

        MOV     [SI.user_AX],exec_not_enough_memory

        PUSH    [SI.user_F]

        POPF

        STC

        PUSHF

        POP     [SI.user_F]

execret:

        MOV     SS,[user_SS]

ASSUME  SS:NOTHING

        MOV     SP,[user_SP]

        POP     AX              ; PUSH    ES

        POP     BX              ; PUSH    DS

        POP     CX              ; PUSH    BP

        POP     DX              ; PUSH    DI

        POP     SI              ; PUSH    SI

        POP     DI              ; PUSH    DX

        POP     BP              ; PUSH    CX

        POP     DS              ; PUSH    BX

        POP     ES              ; PUSH    AX

        IRET



EXECHK:

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        PUSH    DS

        MOV     DS,[EXESEG]

        MOV     CX,OFFSET EGROUP:ZEXECCODEEND

        XOR     SI,SI

        JMP     CHECK_SUM

ENDIF



EXEC_ERR:                       ; Select the correct error message

        MOV     DX,OFFSET RESGROUP:RBADNAM

        CMP     AX,exec_file_not_found

        JZ      GOTEXECEMES

        CMP     AX,error_access_denied

        JZ      GOTEXECEMES

        MOV     DX,OFFSET RESGROUP:TOOBIG

        CMP     AX,exec_not_enough_memory

        JZ      GOTEXECEMES

        MOV     DX,OFFSET RESGROUP:EXEBAD

        CMP     AX,exec_bad_format

        JZ      GOTEXECEMES

        MOV     DX,OFFSET RESGROUP:EXECEMES

GOTEXECEMES:

        PUSH    CS

        POP     DS

        CALL    RPRINT

        JMP     SHORT NOEXEC



EXT_EXEC:

;

; we are now running in free space.  anything we do from here

; on may get trashed.  Move the stack (also in free space) to

; allocated space because since EXEC restores the stack,

; somebody may trash what is on the stack.

;

        MOV     CX,CS

        MOV     SS,CX

        MOV     SP,OFFSET RESGROUP:RSTACK

;

; Oops!! We have to make sure that the EXEC code doesn't blop a newstack!

;

;

        INT     int_command     ; Do the EXEC

        JC      EXEC_ERR        ; EXEC failed

EXEC_WAIT:

        MOV     AH,WAIT

        INT     int_command     ; Get the return code

        MOV     [RETCODE],AX

NOEXEC:

        JMP     LODCOM



CONTC:

        STI

        MOV     AX,CS

        MOV     DS,AX

ASSUME  DS:RESGROUP

        MOV     AH,DISK_RESET

        INT     int_command     ; Reset disks in case files were open

        TEST    [BATCH],-1

        JZ      CONTCTERM

        JMP     ASKEND          ; See if user wants to terminate batch

CONTCTERM:

        XOR     BP,BP           ; Indicate no read

        MOV     [FORFLAG],0     ; Turn off for processing

        MOV     [PIPEFLAG],0    ; Turn off any pipe

        CMP     [SINGLECOM],0   ; See if we need to set SINGLECOM

        JZ      NOSETSING

        MOV     [SINGLECOM],-1  ; Cause termination on pipe, batch, for

NOSETSING:

        CMP     [EXTCOM],0

        JNZ     DODAB           ; Internal ^C

        JMP     LODCOM1

DODAB:

        STC                     ; Tell DOS to abort

ZZY     PROC    FAR

        RET                     ; Leave flags on stack

ZZY     ENDP



BADMEMERR:                              ; Allocation error loading transient

        MOV     DX,OFFSET RESGROUP:BMEMMES

FATALC:

        PUSH    CS

        POP     DS

        CALL    RPRINT

        CMP     [PERMCOM],0

        JZ      FATALRET

        CMP     [SINGLECOM],0                   ; If PERMCOM and SINGLECOM

        JNZ     FATALRET                        ; Must take INT_2E exit

        MOV     DX,OFFSET RESGROUP:HALTMES

        CALL    RPRINT

STALL:

        JMP     STALL                           ; Crash the system nicely



FATALRET:

        MOV     DX,OFFSET RESGROUP:FRETMES

        CALL    RPRINT

FATALRET2:

        CMP     [PERMCOM],0                     ; If we get here and PERMCOM,

        JNZ     RET_2E                          ; must be INT_2E

IF IBM

        LDS     DX,DWORD PTR [SYS_CALL]

ASSUME  DS:NOTHING

        MOV     AX,(SET_INTERRUPT_VECTOR SHL 8) + INT_COMMAND

        INT     int_command

ENDIF

        MOV     AX,[PARENT]

        MOV     WORD PTR CS:[PDB_Parent_PID],AX

        MOV     AX,(EXIT SHL 8)                 ; Return to lower level

        INT     int_command



RET_2E:

        PUSH    CS

        POP     DS

ASSUME  DS:RESGROUP,ES:NOTHING,SS:NOTHING

        MOV     [SINGLECOM],0   ; Turn off singlecom

        MOV     ES,[LTPA]

        MOV     AH,DEALLOC

        INT     int_command             ; Free up space used by transient

        MOV     BX,[SAVE_PDB]

        MOV     AH,SET_CURRENT_PDB

        INT     int_command             ; Current process is user

        MOV     AX,[RETCODE]

        CMP     [EXTCOM],0

        JNZ     GOTECODE

        XOR     AX,AX           ; Internals always return 0

GOTECODE:

        MOV     [EXTCOM],1      ; Force external

        JMP     [INT_2E_RET]    ;"IRET"



INT_2E:                         ; Magic command executer

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        POP     WORD PTR [INT_2E_RET]

        POP     WORD PTR [INT_2E_RET+2]    ;Get return address

        POP     AX              ;Chuck flags

        PUSH    CS

        POP     ES

        MOV     DI,80H

        MOV     CX,64

        REP     MOVSW

        MOV     AH,GET_CURRENT_PDB

        INT     int_command             ; Get user's header

        MOV     [SAVE_PDB],BX

        MOV     AH,SET_CURRENT_PDB

        MOV     BX,CS

        INT     int_command             ; Current process is me

        MOV     [SINGLECOM],81H

        MOV     [EXTCOM],1      ; Make sure this case forced



LODCOM:                         ; Termination handler

        CMP     [EXTCOM],0

        JZ      LODCOM1         ; If internal, memory already allocated

        MOV     BX,0FFFFH

        MOV     AH,ALLOC

        INT     int_command

        MOV     AX,OFFSET TRANGROUP:TRANSPACEEND + 15

        MOV     CL,4

        SHR     AX,CL



        IF      IBM

        PUSH    AX

        MOV     AX,OFFSET EGROUP:ZEXECDATAEND + 15

        MOV     CL,4

        SHR     AX,CL

        POP     CX

        ADD     AX,CX

        ENDIF



        ADD     AX,20H

        CMP     BX,AX           ; Is less than 512 byte buffer worth it?

        JNC     MEMOK

BADMEMERRJ:

        JMP BADMEMERR           ; Not enough memory

MEMOK:

        MOV     AH,ALLOC

        INT     int_command

        JC      BADMEMERRJ      ; Memory arenas probably trashed

        MOV     [EXTCOM],0      ; Flag not to ALLOC again

        MOV     [LTPA],AX       ; New TPA is base just allocated

        ADD     BX,AX

        MOV     [MEMSIZ],BX



        MOV     AX,OFFSET TRANGROUP:TRANSPACEEND + 15

        MOV     CL,4

        SHR     AX,CL



        IF      IBM

        PUSH    AX

        MOV     AX,OFFSET EGROUP:ZEXECDATAEND + 15

        MOV     CL,4

        SHR     AX,CL

        POP     CX

        ADD     AX,CX

        ENDIF



        SUB     BX,AX

        MOV     [TRNSEG],BX     ; Transient starts here

LODCOM1:

        MOV     AX,CS

        MOV     SS,AX

ASSUME  SS:RESGROUP

        MOV     SP,OFFSET RESGROUP:RSTACK

        MOV     DS,AX

ASSUME  DS:RESGROUP

        CALL    HEADFIX     ; Make sure files closed stdin and stdout restored

        XOR     BP,BP           ; Flag command ok

        MOV     AX,-1

        XCHG    AX,[VERVAL]

        CMP     AX,-1

        JZ      NOSETVER

        MOV     AH,SET_VERIFY_ON_WRITE  ; AL has correct value

        INT     int_command

NOSETVER:

        CMP     [SINGLECOM],-1

        JNZ     NOSNG

        JMP     FATALRET2       ; We have finished the single command

NOSNG:

        CALL    SETVECT



IF IBMVER

        CALL    EXECHK          ; Check exe loader

        CMP     DX,[EXESUM]

        JNZ     BOGUS_COM

ENDIF



        CALL    CHKSUM          ; Check the transient

        CMP     DX,[SUM]

        JZ      HAVCOM          ; Transient OK

BOGUS_COM:

        MOV     [LOADING],1     ; Flag DSKERR routine

        CALL    LOADCOM

CHKSAME:



IF IBMVER

        CALL    EXECHK

        CMP     DX,[EXESUM]

        JNZ     ALSO_BOGUS

ENDIF



        CALL    CHKSUM

        CMP     DX,[SUM]

        JZ      HAVCOM          ; Same COMMAND

ALSO_BOGUS:

        CALL    WRONGCOM

        JMP     SHORT CHKSAME

HAVCOM:

        MOV     AX,CHAR_OPER SHL 8

        INT     int_command

        MOV     [RSWITCHAR],DL

        CMP     DL,'/'

        JNZ     USESLASH

        MOV     [RDIRCHAR],'\'          ; Select alt path separator

USESLASH:

        MOV     [LOADING],0             ; Flag to DSKERR

        MOV     SI,OFFSET RESGROUP:TRANVARS

        MOV     DI,OFFSET TRANGROUP:HEADCALL

        MOV     ES,[TRNSEG]

        CLD

        MOV     CX,8

        REP     MOVSW                   ; Transfer INFO to transient

        MOV     AX,[MEMSIZ]

        MOV     WORD PTR DS:[PDB_block_len],AX  ; Adjust my own header

        JMP     DWORD PTR [TRANS]



; Far call to REMCHECK for TRANSIENT

TREMCHECK PROC   FAR

        CALL    REMCHECK

        RET

TREMCHECK ENDP



REMCHECK:

;All registers preserved. Returns zero if media removable, NZ if fixed

; AL is drive (0=DEF, 1=A,...)

        IF      IBM

        PUSH    AX

        OR      AL,AL

        JNZ     GOTDRV2

        MOV     AH,GET_DEFAULT_DRIVE

        INT     int_command

        INC     AL              ;A=1

GOTDRV2:

        PUSH    BX

        MOV     BL,AL

        INT     11H             ;IBM EQUIP CALL

        ROL     AL,1

        ROL     AL,1

        AND     AL,3

        JNZ     NOT_SINGLE

        INC     AL

NOT_SINGLE:

        INC     AL              ; AL is now MAX floppy #

        CMP     BL,AL

        POP     BX

        JBE     SETREM          ; Is an IBM floppy and so is removable

        OR      AL,AL           ; Know AL is non-zero

        JMP     SHORT SETNREM

SETREM:

        ELSE

        PUSH    AX

        ENDIF



        XOR     AX,AX           ;Zero



        IF      IBM

SETNREM:

        ENDIF



        POP     AX

        RET



; Far call to HEADFIX for TRANSIENT

THEADFIX PROC   FAR

        CALL    HEADFIX

        RET

THEADFIX ENDP



HEADFIX:

        XOR     BX,BX           ; Clean up header

        MOV     CX,[IO_SAVE]

        MOV     DX,WORD PTR DS:[PDB_JFN_Table]

        CMP     CL,DL

        JZ      CHK1            ; Stdin matches

        MOV     AH,CLOSE

        INT     int_command

        MOV     DS:[PDB_JFN_Table],CL   ; Restore stdin

CHK1:

        INC     BX

        CMP     CH,DH           ; Stdout matches

        JZ      CHKOTHERHAND

        MOV     AH,CLOSE

        INT     int_command

        MOV     DS:[PDB_JFN_Table+1],CH ; Restore stdout

CHKOTHERHAND:

        ADD     BX,4                    ; Skip 2,3,4

        MOV     CX,FilPerProc - 5       ; Already done 0,1,2,3,4

CLOSELOOP:

        MOV     AH,CLOSE

        INT     int_command

        INC     BX

        LOOP    CLOSELOOP

        RET



SAVHAND:

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        PUSH    DS

        PUSH    BX              ; Set stdin to sterr, stdout to stderr

        PUSH    AX

        MOV     AH,GET_CURRENT_PDB

        INT     int_command             ; Get user's header

        MOV     DS,BX

        MOV     AX,WORD PTR DS:[PDB_JFN_Table]

        MOV     [HANDLE01],AX           ; Save user's stdin, stdout

        MOV     AL,DS:[PDB_JFN_Table+2]

        MOV     AH,AL

        MOV     WORD PTR DS:[PDB_JFN_Table],AX   ; Dup stderr

        POP     AX

        POP     BX

        POP     DS

        RET



ASSUME  DS:RESGROUP

GETCOMDSK2:

        CALL    GETCOMDSK

        JMP     LODCOM1         ; Memory already allocated



RESTHAND:

        PUSH    DS

        PUSH    BX              ; Restore stdin, stdout to user

        PUSH    AX

        MOV     AH,GET_CURRENT_PDB

        INT     int_command             ; Point to user's header

        MOV     AX,[HANDLE01]

        MOV     DS,BX

ASSUME DS:NOTHING

        MOV     WORD PTR DS:[PDB_JFN_Table],AX   ; Stuff his old 0 and 1

        POP     AX

        POP     BX

        POP     DS

        RET

ASSUME DS:RESGROUP,SS:RESGROUP



HOPELESS:

        MOV     DX,OFFSET RESGROUP:NOCOM

        JMP     FATALC



GETCOMDSK:

        MOV     DX,OFFSET RESGROUP:NEEDCOM

GETCOMDSK3:

        MOV     AL,[COMDRV]

        CALL    REMCHECK

        JNZ     HOPELESS                ;Non-removable media

        CALL    RPRINT

        MOV     DX,OFFSET RESGROUP:DRVMSG

        CMP     [COMDRV],0

        JNZ     GETCOM1

        MOV     DX,OFFSET RESGROUP:DEFMSG

GETCOM1:

        CALL    RPRINT

        MOV     DX,OFFSET RESGROUP:PROMPT

        CALL    RPRINT

        CALL    GetRawFlushedByte

        RET



; flush world and get raw input

GetRawFlushedByte:

        MOV     AX,(STD_CON_INPUT_FLUSH SHL 8) OR RAW_CON_INPUT

        INT     int_command             ; Get char without testing or echo

        MOV     AX,(STD_CON_INPUT_FLUSH SHL 8) + 0

        INT     int_command

        return



LOADCOM:                        ; Load in transient

        INC     BP              ; Flag command read

        MOV     DX,OFFSET RESGROUP:COMSPEC

        MOV     AX,OPEN SHL 8

        INT     int_command             ; Open COMMAND.COM

        JNC     READCOM

        CMP     AX,open_too_many_open_files

        JNZ     TRYDOOPEN

        MOV     DX,OFFSET RESGROUP:NOHANDMES

        JMP     FATALC          ; Fatal, will never find a handle



TRYDOOPEN:

        CALL    GETCOMDSK

        JMP     SHORT LOADCOM



READCOM:

        MOV     BX,AX           ; Handle

        MOV     DX,OFFSET RESGROUP:TRANSTART

        XOR     CX,CX           ; Seek loc

        MOV     AX,LSEEK SHL 8

        INT     int_command

        JC      WRONGCOM1

        MOV     CX,OFFSET TRANGROUP:TRANSPACEEND - 100H



        IF      IBM

        ADD     CX,15

        AND     CX,0FFF0H

        ADD     CX,OFFSET EGROUP:ZEXECCODEEND

        ENDIF



        PUSH    DS

        MOV     DS,[TRNSEG]

ASSUME  DS:NOTHING

        MOV     DX,100H

        MOV     AH,READ

        INT     int_command

        POP     DS

ASSUME  DS:RESGROUP

WRONGCOM1:

        PUSHF

        PUSH    AX

        MOV     AH,CLOSE

        INT     int_command             ; Close COMMAND.COM

        POP     AX

        POPF

        JC      WRONGCOM        ; If error on READ

        CMP     AX,CX

        JZ      RET10           ; Size matched

WRONGCOM:

        MOV     DX,OFFSET RESGROUP:COMBAD

        CALL    GETCOMDSK3

        JMP     SHORT LOADCOM   ; Try again



CHKSUM:                         ; Compute transient checksum

        PUSH    DS

        MOV     DS,[TRNSEG]

        MOV     SI,100H

        MOV     CX,OFFSET TRANGROUP:TRANDATAEND - 100H



CHECK_SUM:

        CLD

        SHR     CX,1

        XOR     DX,DX

CHK:

        LODSW

        ADD     DX,AX

        LOOP    CHK

        POP     DS

RET10:  RET



SETVECT:                        ; Set useful vectors

        MOV     DX,OFFSET RESGROUP:LODCOM

        MOV     AX,(SET_INTERRUPT_VECTOR SHL 8) OR 22H        ; Set Terminate address

        INT     int_command

        MOV     DX,OFFSET RESGROUP:CONTC

        MOV     AX,(SET_INTERRUPT_VECTOR SHL 8) OR 23H        ; Set Ctrl-C address

        INT     int_command

        MOV     DX,OFFSET RESGROUP:DSKERR

        MOV     AX,(SET_INTERRUPT_VECTOR SHL 8) OR 24H        ; Set Hard Disk Error address

        INT     int_command

        RET



CODERES ENDS



; This TAIL segment is used to produce a PARA aligned label in the resident

; group which is the location where the transient segments will be loaded

; initial.



TAIL    SEGMENT PUBLIC PARA

        ORG     0

TRANSTART       LABEL   WORD

TAIL    ENDS



; This TAIL segment is used to produce a PARA aligned label in the transient

; group which is the location where the exec segments will be loaded

; initial.



TRANTAIL    SEGMENT PUBLIC PARA

        ORG     0

EXECSTART   LABEL   WORD

TRANTAIL    ENDS



IF IBMVER

        INCLUDE EXEC.ASM

ENDIF



        END     PROGSTART

                                                                                     