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
description: "The COMMAND.ASM file for MS-DOS v2.0 represents a pivotal rewrite of the operating system, introducing Unix-inspired features like subdirectories and file handles, while maintaining compatibility with IBM's PC architecture."

summary:
  - point: "Introduces transient and resident portions to optimize memory usage"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Incorporates Unix-like features such as pipes and subdirectories"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Demonstrates clever memory allocation techniques for constrained hardware"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Uses interrupt handlers for system-level operations like termination and errors"
    link: "https://en.wikipedia.org/wiki/Interrupt_handler"
    link_label: "Interrupt Handler"
  - point: "Reflects the rapid evolution of MS-DOS under Microsoft's stewardship"
    link: "https://en.wikipedia.org/wiki/Microsoft"
    link_label: "Microsoft"

enhancements:
  - id: "userpath-default-path-definition"
    line_start: 239
    line_end: 249
    title: "Default Path: A Null Placeholder"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The USERPATH section defines the default path as 'null,' a deliberate choice to ensure flexibility in environments where the user or system could define paths dynamically. In the early 1980s, disk space and memory were precious commodities, and MS-DOS was designed to operate efficiently on machines with limited resources. By defaulting to 'null,' the operating system avoided unnecessary overhead while leaving room for customization. This decision reflects the minimalist ethos of MS-DOS, which prioritized performance and adaptability over complexity. The null path also underscores the modularity of the system, allowing OEMs and users to tailor configurations to their specific needs. This approach contributed to MS-DOS's widespread adoption and longevity, as it could adapt to a variety of hardware setups and user requirements."
  - id: "envirend-environment-size-calculation"
    line_start: 253
    line_end: 287
    title: "Calculating Environment Block Size"
    wikipedia_url: "https://en.wikipedia.org/wiki/Environment_variable"
    image_url: ""
    image_caption: ""
    content: "The ENVIREND section calculates the size of the environment block, a critical structure for passing configuration data to programs. Environment variables, such as PATH and COMSPEC, were essential for defining the operating context of MS-DOS programs. In 1983, this was a novel feature for personal computers, inspired by Unix's environment variable model. Tim Paterson and Microsoft's engineers adapted this concept to fit the constrained memory architecture of the IBM PC, ensuring that even with limited resources, programs could access necessary configuration data efficiently. This innovation laid the groundwork for more sophisticated operating systems and remains a fundamental concept in computing today."
  - id: "progstart-jump-to-resident-code"
    line_start: 311
    line_end: 317
    title: "Jumping to Resident Code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Booting"
    image_url: ""
    image_caption: ""
    content: "The PROGSTART section initializes the resident portion of COMMAND.COM by jumping to the CONPROC routine. This jump is the first step in setting up the operating system's core functionality, including interrupt handling and memory management. In the early 1980s, bootstrapping an operating system was a meticulous process, as every byte of memory and every CPU cycle mattered. The resident portion was designed to remain in memory, providing essential services while the transient portion could be overwritten by user programs. This architecture was a clever solution to the problem of limited memory, allowing MS-DOS to support larger applications without sacrificing system stability."
  - id: "do-exec-process-execution"
    line_start: 335
    line_end: 377
    title: "Executing Processes with Stack Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Process_(computing)"
    image_url: ""
    image_caption: ""
    content: "The do_exec routine handles process execution, including saving the current stack state and switching to a new stack if necessary. This meticulous stack management was crucial for ensuring system stability during process transitions. In 1983, multitasking on personal computers was still in its infancy, and MS-DOS's approach to process execution reflected the constraints of the IBM PC's hardware. By carefully managing the stack and memory, MS-DOS could execute programs reliably, even in a single-tasking environment. This routine showcases the ingenuity of Microsoft's engineers in adapting concepts from larger systems, like Unix, to the limited resources of personal computers."
  - id: "get-mem-memory-allocation"
    line_start: 385
    line_end: 427
    title: "Allocating Memory for Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The Get_mem routine allocates memory for process execution, ensuring that there is enough space for the transient portion of COMMAND.COM. Memory allocation was a critical task in the early days of personal computing, as systems like the IBM PC had limited RAM. This routine uses interrupts to request memory from the operating system, a technique that reflects the low-level nature of MS-DOS. By dynamically allocating memory, MS-DOS could adapt to different hardware configurations and support larger programs. This flexibility was one of the reasons for its widespread adoption, as it could run on a variety of machines with varying capabilities."
  - id: "exec-err-error-message-selection"
    line_start: 559
    line_end: 583
    title: "Selecting Error Messages for Execution Failures"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "The EXEC_ERR routine selects the appropriate error message when a process execution fails. Error handling was a crucial aspect of MS-DOS, as it needed to provide clear feedback to users in a text-based environment. This routine checks the error code and maps it to a predefined message, such as 'File not found' or 'Access denied.' In the early 1980s, user-friendliness was a key factor in the success of personal computers, and MS-DOS's straightforward error messages contributed to its usability. This approach to error handling influenced later operating systems, which continued to prioritize clear communication with users."
  - id: "loadcom-loading-transient-code"
    line_start: 1361
    line_end: 1379
    title: "Loading the Transient Portion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The LOADCOM routine loads the transient portion of COMMAND.COM into memory, preparing it for execution. This routine is a key part of MS-DOS's architecture, which divides the operating system into resident and transient portions to optimize memory usage. By loading the transient portion only when needed, MS-DOS could free up memory for user programs, a critical feature for the IBM PC's limited hardware. This design decision reflects the careful balance between functionality and resource constraints that defined early personal computing. The transient portion's ability to be overwritten and reloaded was a clever solution to the problem of limited memory, allowing MS-DOS to support larger applications without compromising system stability."
  - id: "chksum-transient-checksum"
    line_start: 1467
    line_end: 1495
    title: "Computing the Transient Checksum"
    wikipedia_url: "https://en.wikipedia.org/wiki/Checksum"
    image_url: ""
    image_caption: ""
    content: "The CHKSUM routine calculates a checksum for the transient portion of COMMAND.COM, ensuring its integrity before execution. Checksums were a common technique in the early days of computing for detecting errors in data. In the context of MS-DOS, this routine verifies that the transient portion has not been corrupted or overwritten, a critical step in maintaining system stability. This approach reflects the meticulous attention to detail required to build reliable software for constrained hardware. The use of checksums in MS-DOS influenced later systems, which continued to use similar techniques for error detection and data integrity."

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