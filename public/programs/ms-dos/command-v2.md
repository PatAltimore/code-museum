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
description: "MS-DOS COMMAND.ASM v2.0: A pivotal rewrite shaping modern computing"

summary:
  - point: "Transition from single-level directories to hierarchical subdirectories"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Incorporation of Unix-inspired features like pipes and file handles"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Memory management techniques for transient and resident portions"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Error handling and recovery mechanisms for low-memory conditions"
    link: "https://en.wikipedia.org/wiki/Computer_error_messages"
    link_label: "Error Messages"
  - point: "OEM licensing model that fueled MS-DOS's widespread adoption"
    link: "https://en.wikipedia.org/wiki/Microsoft"
    link_label: "Microsoft"

enhancements:
  - id: "userpath-default-path-initialization"
    line_start: 239
    line_end: 249
    title: "Default path: A null path for flexibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The USERPATH section initializes the default path for COMMAND.COM, setting it to a null value. This decision reflects the flexibility needed in early DOS systems, where users might configure paths dynamically based on their specific hardware setups or software needs. In 1983, personal computing was still in its infancy, and MS-DOS was rapidly evolving to meet the demands of a diverse array of OEMs and end-users. By allowing a null default path, the system avoided assumptions about directory structures, which varied widely across installations. This approach laid the groundwork for the PATH environment variable, a staple in modern operating systems, enabling users to specify directories for executable searches. The null path initialization also underscores the modularity of MS-DOS, a trait that contributed to its dominance in the PC market."
  - id: "enviend-environment-size-calculation"
    line_start: 253
    line_end: 307
    title: "Environment size: Calculating memory footprint"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The ENVIREND section calculates the size of the environment block, which includes variables like PATH and COMSPEC. This calculation is crucial for memory management, ensuring the resident portion of COMMAND.COM doesn't exceed its allocated space. In the early 1980s, memory was a scarce resource, with most PCs equipped with only 64KB to 256KB of RAM. Efficient memory usage was paramount, especially for an operating system designed to run on a wide range of hardware. Tim Paterson and Microsoft's engineers had to balance functionality with the constraints of the IBM PC's architecture. This section exemplifies the meticulous attention to detail required to optimize performance while maintaining compatibility. The concept of environment variables introduced here became a cornerstone of operating system design, influencing Unix, Linux, and Windows."
  - id: "progstart-resident-code-entry-point"
    line_start: 311
    line_end: 317
    title: "Resident code: Entry point for COMMAND.COM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Resident_program"
    image_url: ""
    image_caption: ""
    content: "The PROGSTART label marks the entry point for the resident portion of COMMAND.COM. This segment handles critical functions like interrupt processing and memory management, ensuring the operating system remains responsive even when transient code is overwritten. In 1983, the concept of resident and transient code was a novel solution to the problem of limited memory. By dividing COMMAND.COM into these segments, MS-DOS could maximize available memory for user programs while retaining essential system functionality. This design decision reflects the influence of Unix, which inspired many features in MS-DOS v2.0. The resident/transient model became a standard approach in operating system design, influencing later systems like Windows and embedded OSes."
  - id: "do-exec-process-creation-routine"
    line_start: 335
    line_end: 381
    title: "Process creation: EXEC routine for multitasking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_management_(computing)"
    image_url: ""
    image_caption: ""
    content: "The do_exec routine is responsible for creating new processes in MS-DOS. It saves the current stack state, switches to a dedicated stack, and prepares memory for the new process. In the early 1980s, multitasking was a complex challenge due to hardware limitations. MS-DOS v2.0 introduced Unix-inspired features like process creation to improve flexibility and functionality. This routine reflects the growing demand for more sophisticated operating systems capable of running multiple programs efficiently. While MS-DOS didn't support true multitasking, the EXEC routine laid the groundwork for process management techniques that would become standard in later systems. Developers studying this code would go on to implement similar routines in Windows, Linux, and other operating systems."
  - id: "get-mem-memory-allocation-for-exec"
    line_start: 385
    line_end: 485
    title: "Memory allocation: Preparing for EXEC"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The Get_mem routine allocates memory for the EXEC process, ensuring sufficient space for the new program. It calculates the required memory size, checks availability, and adjusts memory arenas as needed. Memory management was a critical aspect of MS-DOS, especially given the limited RAM available on early PCs. This routine demonstrates the ingenuity of MS-DOS's developers in optimizing memory usage while maintaining system stability. The techniques used here influenced later operating systems, which adopted similar strategies for dynamic memory allocation. The routine's careful handling of memory errors also highlights the importance of robust error recovery in system design."
  - id: "exec-err-error-handling-for-exec"
    line_start: 559
    line_end: 583
    title: "Error handling: EXEC failure recovery"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The EXEC_ERR routine handles errors that occur during the EXEC process, selecting appropriate error messages and recovering gracefully. Error handling was a crucial feature in MS-DOS, ensuring the system remained usable even when operations failed. This routine reflects the challenges of designing an operating system for a wide range of hardware configurations and user needs. By providing clear error messages and recovery mechanisms, MS-DOS set a standard for user-friendly system design. The approach taken here influenced later systems, which adopted similar strategies for error handling and user communication."
  - id: "lodcom-transient-code-loader"
    line_start: 837
    line_end: 879
    title: "Transient code: Reloading COMMAND.COM"
    wikipedia_url: "https://en.wikipedia.org/wiki/Transient_program"
    image_url: ""
    image_caption: ""
    content: "The LODCOM routine reloads the transient portion of COMMAND.COM when necessary, ensuring the system remains functional after user programs terminate. This routine checks memory availability, allocates space, and loads the transient code into memory. In the early 1980s, this approach was a practical solution to the problem of limited RAM, allowing MS-DOS to maximize memory for user programs while retaining essential system functionality. The transient/resident model became a hallmark of MS-DOS's design, influencing later operating systems and embedded systems. Developers studying this code would adopt similar techniques for memory management and program loading."
  - id: "chksame-transient-code-validation"
    line_start: 1001
    line_end: 1021
    title: "Validation: Ensuring transient code integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Checksum"
    image_url: ""
    image_caption: ""
    content: "The CHKSAME routine validates the integrity of the transient portion of COMMAND.COM, comparing checksums to ensure the code hasn't been corrupted. This routine reflects the importance of reliability in operating system design, especially in environments where memory could be overwritten by user programs. By implementing checksum validation, MS-DOS ensured system stability and reduced the risk of crashes. This technique became a standard practice in software development, influencing later systems and applications. The routine's emphasis on error detection and recovery highlights the challenges of designing robust software for early PCs."
  - id: "havcom-path-separator-detection"
    line_start: 1029
    line_end: 1041
    title: "Path separator detection and adjustment"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The HAVCOM section of the code is responsible for detecting and adjusting the path separator character used by the system. In the early 1980s, different operating systems used varying conventions for path separators—Unix used '/', while CP/M and MS-DOS favored '\\'. This code dynamically selects the appropriate separator based on user input or system configuration. Tim Paterson, the original author of MS-DOS's precursor, 86-DOS, had to design the system to be flexible enough to accommodate IBM's requirements for the PC. This adaptability became crucial as MS-DOS was licensed to over 70 OEMs within its first year, each potentially requiring slight adjustments to suit their hardware. The decision to support both '/' and '\\' as path separators influenced later systems, including Windows, which continues to support both characters for compatibility. Without this flexibility, MS-DOS might have struggled to achieve its widespread adoption."
  - id: "removable-media-detection"
    line_start: 1079
    line_end: 1129
    title: "Detecting removable media on IBM PCs"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "The REMCHECK and related routines implement logic to determine whether the media in a drive is removable or fixed. This was critical for MS-DOS's operation on IBM PCs, which featured floppy drives as their primary storage medium. The code uses BIOS interrupts to query the hardware and classify the media type. In 1981, IBM's decision to include floppy drives as standard hardware shaped the design of MS-DOS, which had to accommodate removable storage for booting and file management. Tim Paterson's original 86-DOS did not have to account for such hardware intricacies, but Microsoft's rewrite for MS-DOS v2.0 integrated these features to align with IBM's specifications. This media detection logic paved the way for later innovations in operating systems, such as hot-swappable drives and USB storage devices, which rely on similar principles to identify and manage removable media."
  - id: "transient-program-checksum"
    line_start: 1467
    line_end: 1495
    title: "Computing checksum for transient programs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Checksum"
    image_url: ""
    image_caption: ""
    content: "The CHKSUM routine calculates a checksum for transient programs loaded into memory. This ensures data integrity during program execution, a critical feature for systems operating in constrained environments like the IBM PC. In the early 1980s, memory corruption or hardware errors could easily disrupt program execution, so verifying the integrity of loaded programs was essential. The checksum algorithm iterates through the program's memory space, summing word values to produce a validation code. This technique, inspired by practices in earlier systems like CP/M, became a standard approach in software development for detecting errors. The concept of checksums later evolved into more sophisticated error-checking mechanisms, such as cyclic redundancy checks (CRC) and cryptographic hashes, which are now ubiquitous in networking, storage, and security applications."
  - id: "interrupt-vector-setup"
    line_start: 1501
    line_end: 1521
    title: "Setting interrupt vectors for error handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "The SETVECT routine configures interrupt vectors for handling critical events like program termination, Ctrl-C interrupts, and disk errors. Interrupt vectors are a fundamental concept in low-level programming, allowing the system to respond to hardware and software events efficiently. In MS-DOS v2.0, this setup was crucial for supporting multitasking-like behaviors and robust error handling. The IBM PC's hardware design included support for interrupts, which MS-DOS leveraged to provide a responsive user experience. This approach was heavily influenced by Unix and XENIX, which Microsoft had studied while developing MS-DOS v2.0. The use of interrupt vectors became a cornerstone of operating system design, influencing later systems like Windows and Linux, which expanded on these principles to support complex multitasking and real-time processing."
  - id: "execstart-transient-loading"
    line_start: 1559
    line_end: 1575
    title: "Defining transient program loading location"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The EXECSTART label marks the memory location where transient programs are loaded. This design reflects MS-DOS v2.0's shift toward a more modular architecture, inspired by Unix's concept of transient processes. By reserving specific memory segments for transient programs, MS-DOS could efficiently manage system resources and support more complex applications. In 1983, when MS-DOS v2.0 was released, the computing landscape was evolving rapidly, with users demanding more powerful and flexible systems. Microsoft's decision to adopt Unix-like features was driven by the need to stay competitive and address these demands. The transient program loading mechanism influenced later developments in operating systems, including dynamic linking and process isolation, which are now standard in modern systems like Windows and Linux. This innovation allowed MS-DOS to support a broader range of applications, contributing to its dominance in the PC market."

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