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
description: "The MS-DOS COMMAND.ASM file defines the resident and transient portions of the command interpreter, showcasing early techniques for memory management, process control, and hardware interaction in the constrained environment of the IBM PC."

summary:
  - point: "Resident and transient portions split for memory efficiency"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Checksum validation ensures transient portion integrity"
    link: "https://en.wikipedia.org/wiki/Checksum"
    link_label: "Checksum"
  - point: "EXEC system call introduced for process creation"
    link: "https://en.wikipedia.org/wiki/System_call"
    link_label: "System Call"
  - point: "Error handling routines tailored for constrained hardware"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Memory allocation and deallocation optimized for 8086 architecture"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "userpath-default-path-null"
    line_start: 157
    line_end: 159
    title: "Why MS-DOS Defaulted to a Null Path"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines the default user path as null (NUL), a decision that reflects the simplicity of early MS-DOS environments. At the time, the concept of a 'path' was still evolving, and many programs were expected to reside in a single directory. By defaulting to null, MS-DOS avoided assumptions about directory structures, allowing OEMs and users to configure paths as needed. This approach was consistent with the minimalistic design philosophy of MS-DOS, which prioritized flexibility and compatibility over complexity. The null path also minimized memory usage, critical for systems with limited RAM. This design influenced later operating systems, which adopted more sophisticated path management while retaining backward compatibility with MS-DOS conventions."
  - id: "enviend-environment-end-marker"
    line_start: 253
    line_end: 253
    title: "The Marker That Defined Environment Size"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "The ENVIREND label marks the end of the environment block, a critical structure in MS-DOS for storing environment variables like PATH and COMSPEC. These variables allowed programs to access system-wide settings, a concept borrowed from Unix. The environment block's size was calculated using the ENVIRONSIZ and ENVIRONSIZ2 constants, ensuring efficient memory allocation. This design was a precursor to more advanced environment management systems in later operating systems, such as Windows and Linux. By defining a clear boundary for the environment, MS-DOS enabled predictable behavior and simplified debugging, a necessity in an era of limited development tools."
  - id: "progstart-jump-to-resident-code"
    line_start: 311
    line_end: 313
    title: "The Jump That Started It All"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The PROGSTART label contains a single instruction: a jump to the resident code segment's CONPROC routine. This jump is the entry point for the MS-DOS command interpreter, initializing the resident portion of COMMAND.COM. By separating the resident and transient portions, MS-DOS optimized memory usage, allowing the transient portion to be overwritten by user programs. This design was crucial for the IBM PC's limited memory environment, where every byte counted. The jump to resident code ensured that essential system functions remained accessible even when the transient portion was replaced. This technique influenced later operating systems, which adopted similar strategies for memory management and process isolation."
  - id: "do-exec-process-creation"
    line_start: 335
    line_end: 381
    title: "How MS-DOS Created New Processes"
    wikipedia_url: "https://en.wikipedia.org/wiki/System_call"
    image_url: ""
    image_caption: ""
    content: "The do_exec subroutine implements the EXEC system call, enabling the creation of new processes in MS-DOS. This routine saves the current state of the CPU registers and stack, allocates memory for the new process, and switches to the new stack if necessary. EXEC was inspired by Unix's fork and exec system calls but adapted for the simpler MS-DOS environment. Process creation was a novel feature for early personal computers, allowing users to run multiple programs sequentially. This routine laid the groundwork for multitasking in later operating systems and influenced the design of process management in Windows."
  - id: "get-mem-memory-allocation"
    line_start: 385
    line_end: 493
    title: "The Trick That Allocated All Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The Get_mem subroutine allocates all available memory for the transient portion of COMMAND.COM. By using the INT instruction with the ALLOC function, MS-DOS dynamically managed memory in the constrained environment of the IBM PC. This routine checks whether enough memory is available for the EXEC system call and adjusts memory allocation accordingly. Memory management was a critical challenge in the early 1980s, as the IBM PC's 8086 processor supported only 1MB of addressable memory, with most systems equipped with far less. This subroutine's efficient allocation strategy influenced later memory management techniques in DOS and Windows, including the use of memory arenas and dynamic allocation."
  - id: "exec-err-error-handling"
    line_start: 559
    line_end: 593
    title: "The Error Messages That Saved Users"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "The EXEC_ERR subroutine selects and displays error messages based on the error code returned by the EXEC system call. This routine handles common errors like file not found, access denied, insufficient memory, and bad format, providing users with clear feedback. Error handling was a critical feature in MS-DOS, as it operated in a low-trust environment where hardware and software compatibility issues were common. By categorizing errors and displaying specific messages, MS-DOS improved usability and debugging. This approach influenced error handling in later operating systems, which adopted more sophisticated methods for diagnosing and reporting issues."
  - id: "ext-exec-stack-management"
    line_start: 597
    line_end: 639
    title: "The Stack Trick That Prevented Crashes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The EXT_EXEC subroutine moves the stack to allocated memory before executing a new process. This prevents the stack from being overwritten during process execution, a common issue in early operating systems. By ensuring stack integrity, MS-DOS avoided crashes and unpredictable behavior, improving system stability. This technique reflects the careful attention to detail required in the constrained environment of the IBM PC, where memory was scarce and errors could easily propagate. Stack management became a standard practice in later operating systems, influencing the design of multitasking and process isolation mechanisms."
  - id: "lodcom-memory-recovery"
    line_start: 837
    line_end: 1027
    title: "Recovering Memory After a Crash"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The LODCOM subroutine handles memory allocation and recovery for the transient portion of COMMAND.COM. If the transient portion is corrupted or insufficient memory is available, this routine attempts to allocate new memory and reload the command interpreter. Memory recovery was a critical feature in MS-DOS, as crashes and memory corruption were common in the early days of personal computing. By implementing robust recovery mechanisms, MS-DOS improved reliability and user experience. This approach influenced memory management in later operating systems, which adopted more sophisticated techniques for detecting and recovering from errors."
  - id: "havcom-path-separator-selection"
    line_start: 1029
    line_end: 1067
    title: "Why MS-DOS Supports Two Path Separators"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section determines whether the default path separator should be '/' or '\\'. The code checks the value of the 'RSWITCHAR' variable and sets the alternative separator accordingly. This decision reflects compatibility concerns during the early 1980s, as MS-DOS aimed to accommodate both Unix-like conventions (using '/') and IBM PC conventions (using '\\'). At the time, Unix systems were gaining traction, and Microsoft wanted MS-DOS to appeal to a broad audience, including developers familiar with Unix. This dual-path separator approach became a hallmark of MS-DOS and influenced later systems like Windows, which inherited the '\\' convention. The choice also highlights the pragmatic design philosophy of MS-DOS: prioritize compatibility and ease of use over strict adherence to one standard."
  - id: "remcheck-media-type-detection"
    line_start: 1079
    line_end: 1159
    title: "How MS-DOS Identified Removable Media"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "The REMCHECK routine determines whether the media in a drive is removable or fixed. It uses an interrupt call to retrieve equipment information and performs bitwise operations to classify the media type. This functionality was crucial for MS-DOS, as removable floppy disks were the primary storage medium for early PCs. IBM PCs, launched in 1981, relied heavily on floppy drives, and software needed to differentiate between removable and fixed media to manage file systems effectively. The routine's reliance on hardware-specific interrupts underscores the tight coupling between software and hardware during this era. This approach influenced later operating systems, which continued to refine media detection mechanisms as storage technologies evolved."
  - id: "savhand-stdin-stdout-redirection"
    line_start: 1223
    line_end: 1259
    title: "Redirecting Input and Output for Transient Programs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Standard_streams"
    image_url: ""
    image_caption: ""
    content: "The SAVHAND routine temporarily redirects standard input (stdin) and standard output (stdout) to the standard error (stderr) stream. This is achieved by saving the current handles, duplicating stderr, and updating the process's header table. Such redirection was essential for transient programs like COMMAND.COM, which needed to manage user input and output streams dynamically. In the early 1980s, transient programs were a novel concept, allowing MS-DOS to load and execute small utilities without permanently occupying memory. This technique influenced later operating systems and programming practices, where stream redirection became a standard feature for managing subprocesses and logging."
  - id: "readcom-loading-command-com"
    line_start: 1391
    line_end: 1455
    title: "The Routine That Loaded COMMAND.COM"
    wikipedia_url: "https://en.wikipedia.org/wiki/COMMAND.COM"
    image_url: ""
    image_caption: ""
    content: "The READCOM routine loads the COMMAND.COM file into memory, ensuring the transient program is ready for execution. It performs file operations like opening, seeking, and reading, while handling errors such as 'too many open files.' COMMAND.COM was the default command-line interpreter for MS-DOS, and its efficient loading was critical for system performance. This routine reflects the constraints of early PCs, where memory and file handles were limited resources. By carefully managing these resources, MS-DOS ensured reliability and usability. The techniques used here laid the groundwork for modern operating systems, which continue to optimize program loading and error handling."
  - id: "chksum-transient-program-validation"
    line_start: 1467
    line_end: 1497
    title: "Checksum Validation for Transient Programs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Checksum"
    image_url: ""
    image_caption: ""
    content: "The CHKSUM routine computes a checksum for transient programs loaded into memory. It iterates through the program's data, summing 16-bit words to produce a validation value. Checksums were a common method for verifying data integrity in the 1980s, especially in systems like MS-DOS that operated close to hardware. This routine ensured that transient programs were correctly loaded and not corrupted, a critical feature for maintaining system stability. The use of checksums influenced later software development, where more sophisticated integrity checks, such as cryptographic hashes, became standard practice. This routine exemplifies the careful attention to reliability in early operating systems."
  - id: "setvect-interrupt-vector-setup"
    line_start: 1501
    line_end: 1521
    title: "Setting Interrupt Vectors for Error Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "The SETVECT routine configures interrupt vectors for critical system functions, including termination, Ctrl-C handling, and disk error management. Interrupt vectors are pointers to routines that the CPU executes in response to specific events. By setting these vectors, MS-DOS ensured that the system could respond gracefully to errors and user actions. This approach reflects the low-level nature of early PC operating systems, where developers had to manage hardware interrupts directly. The routine's design influenced later systems, which abstracted interrupt handling into higher-level APIs. However, the concept of interrupt vectors remains foundational in computing, underpinning modern hardware and software interactions."
  - id: "transtart-memory-alignment-for-transients"
    line_start: 1541
    line_end: 1541
    title: "Aligning Memory for Transient Program Loading"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The TRANSTART segment aligns memory for loading transient programs, ensuring proper placement and execution. Memory alignment was a critical consideration for early PCs, where misaligned data could lead to crashes or performance degradation. By defining a PARA-aligned label, MS-DOS optimized memory usage and ensured compatibility with the 8086 architecture. This technique reflects the meticulous memory management required in the constrained environments of the 1980s. It influenced later operating systems, which continued to refine memory alignment strategies to support more complex programs and architectures."
  - id: "execstart-executable-segment-alignment"
    line_start: 1559
    line_end: 1559
    title: "Preparing Memory for Executable Segments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Executable"
    image_url: ""
    image_caption: ""
    content: "The EXECSTART segment aligns memory for loading executable segments, ensuring they are placed correctly for execution. This PARA alignment was essential for transient programs and reflected the constraints of the 8086 architecture. By carefully managing memory layout, MS-DOS optimized performance and reliability. This approach influenced later systems, which adopted more sophisticated memory management techniques to support multitasking and larger programs. The EXECSTART segment highlights the foundational role of memory alignment in early operating systems and its lasting impact on software design."

---

```asm
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


```
