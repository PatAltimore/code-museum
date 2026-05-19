---
title: "MSCODE.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/MSCODE.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/MSCODE.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "mscode"
order: 4
description: "The MS-DOS 2.0 source code represents a pivotal moment in personal computing history, showcasing the evolution of operating systems inspired by Unix and tailored for the IBM PC."

summary:
  - point: "MS-DOS 2.0 introduced hierarchical directories and file handles, inspired by Unix."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Tim Paterson's original 86-DOS laid the foundation for MS-DOS, written in just six weeks."
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"
  - point: "Microsoft's licensing strategy for MS-DOS led to its dominance in the PC market."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS Licensing"
  - point: "The assembly code reflects the constraints of early 1980s hardware, such as limited memory and processing power."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "MS-DOS 2.0's design was heavily influenced by Unix/XENIX, marking a shift toward more advanced OS features."
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"

enhancements:
  - id: "include-directives-and-segment-setup"
    line_start: 6
    line_end: 8
    title: "Setting the Stage: Segment and Includes"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines define the essential setup for the MS-DOS code segment, including directives to include external assembly files like DOSSEG.ASM and STDSW.ASM. This modular approach reflects the structured nature of MS-DOS development, allowing reusable components to be integrated efficiently. In 1983, modularity was crucial for managing the complexity of operating systems on hardware with limited resources. The 'CODE SEGMENT BYTE PUBLIC' directive establishes the segment as publicly accessible, ensuring compatibility across different modules. This setup mirrors the Unix philosophy of modularity, which influenced MS-DOS 2.0's design."
  - id: "conditional-definitions-kanji-and-ibm"
    line_start: 17
    line_end: 27
    title: "Conditional Definitions: Kanji and IBM"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines define conditional flags for Kanji support and IBM compatibility. Kanji support was essential for the Japanese market, reflecting Microsoft's global ambitions. IBM compatibility ensured the code could run on the IBM PC, the dominant hardware platform of the era. These flags allowed MS-DOS to adapt to different environments without duplicating code, a critical feature given the constraints of early 1980s hardware. Microsoft's decision to include these conditional definitions highlights their strategy to make MS-DOS a universal operating system, capable of serving diverse markets and hardware configurations."
  - id: "copyright-header-generation"
    line_start: 57
    line_end: 87
    title: "Dynamic Copyright Header Generation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section dynamically generates the copyright header displayed during MS-DOS startup. It constructs the version string using assembly calculations, such as dividing and modding the minor version number. The inclusion of Kanji-specific encoding demonstrates Microsoft's effort to cater to international markets. In 1983, this kind of dynamic header generation was both a technical achievement and a branding tool, reinforcing Microsoft's identity and the software's versioning. The modularity and adaptability seen here reflect the broader design philosophy of MS-DOS 2.0, which aimed to balance simplicity with extensibility."
  - id: "system-call-dispatcher"
    line_start: 92
    line_end: 122
    title: "System Call Dispatcher: The Heart of MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/System_call"
    image_url: ""
    image_caption: ""
    content: "This section implements the system call dispatcher, the core mechanism for handling interrupts and system calls. It processes INT 20H and INT 21H, routing requests to the appropriate handlers. The dispatcher uses a combination of stack manipulation and conditional jumps to ensure efficient execution. In the early 1980s, system call dispatching was a critical feature for operating systems, enabling applications to interact with hardware and OS services. The design here reflects the influence of Unix, which popularized the concept of system calls as a structured interface between user programs and the kernel."
  - id: "save-and-restore-world"
    line_start: 232
    line_end: 248
    title: "Save and Restore World: Multitasking Foundations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multitasking"
    image_url: ""
    image_caption: ""
    content: "The 'save_world' and 'restore_world' routines preserve and restore CPU registers during context switches. These routines are foundational for multitasking, allowing MS-DOS to manage multiple processes efficiently. While MS-DOS 2.0 was not a fully multitasking OS, these routines hint at Microsoft's ambitions to incorporate advanced features inspired by Unix. In the constrained environment of the IBM PC, saving and restoring the 'world' was essential for maintaining system stability and ensuring smooth transitions between tasks. This design would influence future operating systems, including Windows, which built upon these principles."
  - id: "dispatch-table"
    line_start: 260
    line_end: 403
    title: "Dispatch Table: Mapping Functions to System Calls"
    wikipedia_url: "https://en.wikipedia.org/wiki/System_call"
    image_url: ""
    image_caption: ""
    content: "The dispatch table maps system call numbers to their corresponding functions, serving as a lookup mechanism for the system call dispatcher. Each entry represents a specific function, such as file operations or device I/O. This design simplifies the dispatcher logic, enabling quick and efficient routing of system calls. In 1983, this approach was innovative, as it balanced performance with extensibility. The dispatch table reflects the influence of Unix, which used similar mechanisms for system call handling. By organizing functions in a table, MS-DOS 2.0 achieved a level of modularity and scalability that was rare in early operating systems."
  - id: "oem-handler"
    line_start: 412
    line_end: 431
    title: "OEM Handler: Customizing System Behavior"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The OEM handler allows original equipment manufacturers (OEMs) to extend MS-DOS functionality by defining custom interrupt handlers. This feature was critical for adapting MS-DOS to diverse hardware configurations, ensuring compatibility across the rapidly expanding PC market. Microsoft's decision to include OEM extensibility reflects their strategy to dominate the market by making MS-DOS the default OS for a wide range of devices. This flexibility contributed to MS-DOS's success, as OEMs could tailor the OS to their needs without modifying the core code."
  - id: "null-device-driver"
    line_start: 466
    line_end: 481
    title: "Null Device Driver: A Quiet Workhorse"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The null device driver ('SNULDEV' and 'INULDEV') provides a placeholder for device operations that require no actual output or input. It is a simple yet essential component, ensuring compatibility with software expecting a device interface. The null device is a concept borrowed from Unix, where '/dev/null' serves a similar purpose. In the constrained environment of the IBM PC, this driver was a clever solution for handling edge cases without consuming resources. Its inclusion in MS-DOS highlights the influence of Unix and the importance of efficient resource management in early operating systems."
  - id: "disk-read-handler"
    line_start: 508
    line_end: 558
    title: "Disk Read Handler: Bridging BIOS and MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The 'ABSDRD' routine handles disk read operations, interfacing with the BIOS to retrieve data from storage devices. It includes error handling and stack manipulation to ensure reliable operation. In the early 1980s, disk I/O was a critical function, as storage devices were slow and prone to errors. This routine reflects the challenges of working with BIOS-level interfaces and the ingenuity required to build a stable operating system on top of them. The design here influenced future OS development, as efficient disk I/O remained a cornerstone of system performance."
  - id: "disk-write-handler"
    line_start: 561
    line_end: 584
    title: "Disk Write Handler: Ensuring Data Integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The 'ABSDWRT' routine manages disk write operations, interfacing with the BIOS to store data on storage devices. It includes safeguards to prevent data corruption, such as stack manipulation and error handling. In 1983, ensuring data integrity during disk writes was a significant challenge, as hardware was less reliable and prone to failures. This routine demonstrates the meticulous attention to detail required to build a robust operating system. The principles established here would influence file system design in later operating systems, including Windows."

---

;
; MSCODE.ASM -- MSDOS code
;

INCLUDE DOSSEG.ASM
INCLUDE STDSW.ASM

CODE    SEGMENT BYTE PUBLIC  'CODE'
ASSUME  CS:DOSGROUP,DS:NOTHING,ES:NOTHING,SS:NOTHING

.xcref
INCLUDE DOSSYM.ASM
INCLUDE DEVSYM.ASM
.cref
.list

IFNDEF  KANJI
KANJI   EQU     0       ; FALSE
ENDIF

IFNDEF  IBM
IBM     EQU     0
ENDIF

IFNDEF  HIGHMEM
HIGHMEM  EQU     0
ENDIF


        i_need  USER_SP,WORD
        i_need  USER_SS,WORD
        i_need  SAVEDS,WORD
        i_need  SAVEBX,WORD
        i_need  INDOS,BYTE
        i_need  NSP,WORD
        i_need  NSS,WORD
        i_need  CURRENTPDB,WORD
        i_need  AUXSTACK,BYTE
        i_need  CONSWAP,BYTE
        i_need  IDLEINT,BYTE
        i_need  NOSETDIR,BYTE
        i_need  ERRORMODE,BYTE
        i_need  IOSTACK,BYTE
        i_need  WPERR,BYTE
        i_need  DSKSTACK,BYTE
        i_need  CNTCFLAG,BYTE
        i_need  LEAVEADDR,WORD
        i_need  NULLDEVPT,DWORD

        IF NOT IBM
        i_need  OEM_HANDLER,DWORD
        ENDIF

        EXTRN   DSKSTATCHK:NEAR,GETBP:NEAR,DSKREAD:NEAR,DSKWRITE:NEAR


BREAK   <Copyright notice and version>

CODSTRT EQU     $

        IF      NOT IBM
        IF      NOT KANJI
        PUBLIC  HEADER
HEADER  DB      13,10,"Microsoft MS-DOS version "
        DB      DOS_MAJOR_VERSION + "0"
        DB      "."
        DB      (DOS_MINOR_VERSION / 10) + "0"
        DB      (DOS_MINOR_VERSION MOD 10) + "0"
        IF      HIGHMEM
        DB      "H"
        ENDIF
        ENDIF
        IF      KANJI
        PUBLIC  HEADER
HEADER  DB      13,10,82h,"M"+1fh,82h,"i"+20h,82h,"c"+20h,82h,"r"+20h,82h,"o"+20h
        DB      82h,"s"+20h,82h,"o"+20h,82h,"f"+20h,82h,"t"+20h
        DB      81h,40h,82h,"M"+1fh,82h,"S"+1fh,81h,5dh+1fh
        DB      82h,"D"+1fh,82h,"O"+1fh,82h,"S"+1fh,81h,40h
        DB      82h,DOS_MAJOR_VERSION+"0"+1fh
        DB      81h,25h+1fh
        DB      82h,(DOS_MINOR_VERSION / 10)+"0"+1fh
        DB      82h,(DOS_MINOR_VERSION MOD 10)+"0"+1fh
        DB      94h,0c5h
        ENDIF
        DB      13,10
        DB      "Copyright 1981,82,83 Microsoft Corp.",13,10,"$"
        ENDIF
BREAK   <System call entry points and dispatcher>
ASSUME  CS:DOSGROUP,DS:NOTHING,ES:NOTHING,SS:NOTHING

        procedure   SYSTEM_CALL,NEAR
entry   QUIT                                   ; INT 20H entry point
        MOV     AH,0
        JMP     SHORT SAVREGS

entry   COMMAND                         ; Interrupt call entry point (INT 21H)

        IF      NOT IBM
        CMP     AH,SET_OEM_HANDLER
        JB      NOTOEM
        JMP     $SET_OEM_HANDLER
NOTOEM:
        ENDIF

        CMP     AH,MAXCOM
        JBE     SAVREGS
BADCALL:
        MOV     AL,0
entry   IRET
        IRET

entry   CALL_ENTRY                      ; System call entry point and dispatcher
        POP     AX                      ; IP from the long call at 5
        POP     AX                      ; Segment from the long call at 5
        POP     [User_SP]               ; IP from the CALL 5
        PUSHF                           ; Start re-ordering the stack
        CLI
        PUSH    AX                      ; Save segment
        PUSH    [User_SP]               ; Stack now ordered as if INT had been used
        CMP     CL,MAXCALL              ; This entry point doesn't get as many calls
        JA      BADCALL
        MOV     AH,CL
SAVREGS:
        CALL    save_world
        MOV     [SaveDS],DS
        MOV     [SaveBX],BX
        MOV     BX,CS
        MOV     DS,BX
ASSUME  DS:DOSGROUP
        INC     [INDOS]                 ; Flag that we're in the DOS
        MOV     AX,[user_SP]
        MOV     [NSP],AX
        MOV     AX,[user_SS]
        MOV     [NSS],AX
        POP     AX
        PUSH    AX
        MOV     [user_SP],SP
        MOV     [user_SS],SS
;
; save user stack in his area for later returns (possibly from EXEC)
; Here comes multitasking!!!
;
        MOV     DS,[CurrentPDB]
        MOV     WORD PTR DS:[PDB_User_stack],SP
        MOV     WORD PTR DS:[PDB_User_stack+2],SS

        MOV     BX,CS                   ; no holes here.
        MOV     SS,BX
ASSUME  SS:DOSGROUP

    entry   REDISP
        MOV     SP,OFFSET DOSGROUP:AUXSTACK     ; Enough stack for interrupts
        STI                             ; Stack OK now
        PUSH    CS
        POP     DS
        XOR     BH,BH
        MOV     [CONSWAP],BH
        MOV     [IDLEINT],1
        MOV     BYTE PTR [NoSetDir],0   ; set directories on search
        MOV     BL,AH
        SHL     BX,1
        CLD
        OR      AH,AH
        JZ      DSKROUT                 ; ABORT
        CMP     AH,12
        JBE     IOROUT                  ; Character I/O
        CMP     AH,GET_CURRENT_PDB      ; INT 24 needs GET,SET PDB
        JZ      IOROUT
        CMP     AH,SET_CURRENT_PDB
        JNZ     DSKROUT
IOROUT:
        CMP     [ERRORMODE],0
        JNZ     DISPCALL                ; Stay on AUXSTACK if INT 24
        MOV     SP,OFFSET DOSGROUP:IOSTACK
        JMP     SHORT DISPCALL

DSKROUT:
        MOV     [ERRORMODE],0           ; Cannot make non 1-12 calls in
        MOV     [WPERR],-1              ; error mode, so good place to
                                        ; make sure flags are reset
        MOV     SP,OFFSET DOSGROUP:DSKSTACK
        TEST    [CNTCFLAG],-1
        JZ      DISPCALL
        PUSH    AX
        invoke  DSKSTATCHK
        POP     AX
DISPCALL:
        PUSH    [LEAVEADDR]
        PUSH    CS:[BX+DISPATCH]
        MOV     BX,[SaveBX]
        MOV     DS,[SaveDS]
ASSUME  DS:NOTHING
        return

        entry LEAVE
ASSUME  SS:NOTHING                      ; User routines may misbehave
        CLI
        DEC     [INDOS]
        MOV     SP,[user_SP]
        MOV     SS,[user_SS]
        MOV     BP,SP
        MOV     BYTE PTR [BP.user_AX],AL
        MOV     AX,[NSP]
        MOV     [user_SP],AX
        MOV     AX,[NSS]
        MOV     [user_SS],AX
        CALL    restore_world

        IRET
SYSTEM_CALL ENDP

;
; restore_world restores all registers ('cept SS:SP, CS:IP, flags) from
; the stack prior to giving the user control
;
        ASSUME  DS:NOTHING,ES:NOTHING
restore_tmp DW  ?
        procedure   restore_world,NEAR
        POP     restore_tmp     ; POP     restore_tmp
        POP     AX              ; PUSH    ES
        POP     BX              ; PUSH    DS
        POP     CX              ; PUSH    BP
        POP     DX              ; PUSH    DI
        POP     SI              ; PUSH    SI
        POP     DI              ; PUSH    DX
        POP     BP              ; PUSH    CX
        POP     DS              ; PUSH    BX
        POP     ES              ; PUSH    AX
world_ret:
        PUSH    restore_tmp     ; PUSH    restore_tmp
        return
restore_world   ENDP

;
; save_world saves complete registers on the stack
;
        procedure   save_world,NEAR
        POP     restore_tmp
        PUSH    ES
        PUSH    DS
        PUSH    BP
        PUSH    DI
        PUSH    SI
        PUSH    DX
        PUSH    CX
        PUSH    BX
        PUSH    AX
        JMP     SHORT world_ret
save_world      ENDP

;
; get_user_stack returns the user's stack (and hence registers) in DS:SI
;
        procedure   get_user_stack,NEAR
        LDS     SI,DWORD PTR [user_SP]
        return
get_user_stack  ENDP

; Standard Functions
DISPATCH    LABEL WORD
.lall
        short_addr  $ABORT                          ;  0      0
.xall
        short_addr  $STD_CON_INPUT                  ;  1      1
        short_addr  $STD_CON_OUTPUT                 ;  2      2
        short_addr  $STD_AUX_INPUT                  ;  3      3
        short_addr  $STD_AUX_OUTPUT                 ;  4      4
        short_addr  $STD_PRINTER_OUTPUT             ;  5      5
        short_addr  $RAW_CON_IO                     ;  6      6
        short_addr  $RAW_CON_INPUT                  ;  7      7
        short_addr  $STD_CON_INPUT_NO_ECHO          ;  8      8
        short_addr  $STD_CON_STRING_OUTPUT          ;  9      9
        short_addr  $STD_CON_STRING_INPUT           ; 10      A
        short_addr  $STD_CON_INPUT_STATUS           ; 11      B
        short_addr  $STD_CON_INPUT_FLUSH            ; 12      C
        short_addr  $DISK_RESET                     ; 13      D
        short_addr  $SET_DEFAULT_DRIVE              ; 14      E
        short_addr  $FCB_OPEN                       ; 15      F
        short_addr  $FCB_CLOSE                      ; 16     10
        short_addr  $DIR_SEARCH_FIRST               ; 17     11
        short_addr  $DIR_SEARCH_NEXT                ; 18     12
        short_addr  $FCB_DELETE                     ; 19     13
        short_addr  $FCB_SEQ_READ                   ; 20     14
        short_addr  $FCB_SEQ_WRITE                  ; 21     15
        short_addr  $FCB_CREATE                     ; 22     16
        short_addr  $FCB_RENAME                     ; 23     17
        short_addr  CPMFUNC                         ; 24     18
        short_addr  $GET_DEFAULT_DRIVE              ; 25     19
        short_addr  $SET_DMA                        ; 26     1A

;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;                                                                          ;
        short_addr  $SLEAZEFUNC                     ; 27     1B
        short_addr  $SLEAZEFUNCDL                   ; 28     1C
;                                                                          ;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;

        short_addr  CPMFUNC                         ; 29     1D
        short_addr  CPMFUNC                         ; 30     1E
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;                                                                          ;
        short_addr  $GET_DEFAULT_DPB                ; 31     1F
;                                                                          ;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
        short_addr  CPMFUNC                         ; 32     20
        short_addr  $FCB_RANDOM_READ                ; 33     21
        short_addr  $FCB_RANDOM_WRITE               ; 34     22
        short_addr  $GET_FCB_FILE_LENGTH            ; 35     23
        short_addr  $GET_FCB_POSITION               ; 36     24
MAXCALL =       ($-DISPATCH)/2 - 1

; Extended Functions
        short_addr  $SET_INTERRUPT_VECTOR           ; 37     25
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;                                                                          ;
        short_addr  $CREATE_PROCESS_DATA_BLOCK      ; 38     26
;                                                                          ;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
        short_addr  $FCB_RANDOM_READ_BLOCK          ; 39     27
        short_addr  $FCB_RANDOM_WRITE_BLOCK         ; 40     28
        short_addr  $PARSE_FILE_DESCRIPTOR          ; 41     29
        short_addr  $GET_DATE                       ; 42     2A
        short_addr  $SET_DATE                       ; 43     2B
        short_addr  $GET_TIME                       ; 44     2C
        short_addr  $SET_TIME                       ; 45     2D
        short_addr  $SET_VERIFY_ON_WRITE            ; 46     2E

; Extended functionality group
        short_addr  $GET_DMA                        ; 47     2F
        short_addr  $GET_VERSION                    ; 48     30
        short_addr  $Keep_Process                   ; 49     31
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;                                                                          ;
        short_addr  $GET_DPB                        ; 50     32
;                                                                          ;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
        short_addr  $SET_CTRL_C_TRAPPING            ; 51     33
        short_addr  $GET_INDOS_FLAG                 ; 52     34
        short_addr  $GET_INTERRUPT_VECTOR           ; 53     35
        short_addr  $GET_DRIVE_FREESPACE            ; 54     36
        short_addr  $CHAR_OPER                      ; 55     37
        short_addr  $INTERNATIONAL                  ; 56     38
; XENIX CALLS
;   Directory Group
        short_addr  $MKDIR                          ; 57     39
        short_addr  $RMDIR                          ; 58     3A
        short_addr  $CHDIR                          ; 59     3B
;   File Group
        short_addr  $CREAT                          ; 60     3C
        short_addr  $OPEN                           ; 61     3D
        short_addr  $CLOSE                          ; 62     3E
        short_addr  $READ                           ; 63     3F
        short_addr  $WRITE                          ; 64     40
        short_addr  $UNLINK                         ; 65     41
        short_addr  $LSEEK                          ; 66     42
        short_addr  $CHMOD                          ; 67     43
        short_addr  $IOCTL                          ; 68     44
        short_addr  $DUP                            ; 69     45
        short_addr  $DUP2                           ; 70     46
        short_addr  $CURRENT_DIR                    ; 71     47
;    Memory Group
        short_addr  $ALLOC                          ; 72     48
        short_addr  $DEALLOC                        ; 73     49
        short_addr  $SETBLOCK                       ; 74     4A
;    Process Group
        short_addr  $EXEC                           ; 75     4B
        short_addr  $EXIT                           ; 76     4C
        short_addr  $WAIT                           ; 77     4D
        short_addr  $FIND_FIRST                     ; 78     4E
;   Special Group
        short_addr  $FIND_NEXT                      ; 79     4F
; SPECIAL SYSTEM GROUP
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;                                                                          ;
        short_addr  $SET_CURRENT_PDB                ; 80     50
        short_addr  $GET_CURRENT_PDB                ; 81     51
        short_addr  $GET_IN_VARS                    ; 82     52
        short_addr  $SETDPB                         ; 83     53
;                                                                          ;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
        short_addr  $GET_VERIFY_ON_WRITE            ; 84     54
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;                                                                          ;
        short_addr  $DUP_PDB                        ; 85     55
;                                                                          ;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;
        short_addr  $RENAME                         ; 86     56
        short_addr  $FILE_TIMES                     ; 87     57
        short_addr  $AllocOper                      ; 88     58

MAXCOM  =       ($-DISPATCH)/2 - 1

CPMFUNC:
        XOR     AL,AL
        return

        IF      NOT IBM
BREAK <Set_OEM_Handler -- Set OEM sys call address and handle OEM Calls>

$SET_OEM_HANDLER:
ASSUME  DS:NOTHING,ES:NOTHING

; Inputs:
;       User registers, User Stack, INTS disabled
;       If CALL F8, DS:DX is new handler address
; Function:
;       Process OEM INT 21 extensions
; Outputs:
;       Jumps to OEM_HANDLER if appropriate

        JNE     DO_OEM_FUNC             ; If above F8 try to jump to handler
        MOV     WORD PTR [OEM_HANDLER],DX       ; Set Handler
        MOV     WORD PTR [OEM_HANDLER+2],DS
        IRET                            ; Quick return, Have altered no registers

DO_OEM_FUNC:
        CMP     WORD PTR [OEM_HANDLER],-1
        JNZ     OEM_JMP
        JMP     BADCALL                 ; Handler not initialized

OEM_JMP:
        JMP     [OEM_HANDLER]

        ENDIF


ASSUME  SS:DOSGROUP

;
; $Set_current_PDB takes BX and sets it to be the current process
;   *** THIS FUNCTION CALL IS SUBJECT TO CHANGE!!! ***
;
        procedure   $SET_CURRENT_PDB,NEAR
        ASSUME  DS:NOTHING,SS:NOTHING
        MOV     [CurrentPDB],BX
        return
$SET_CURRENT_PDB    ENDP

;
; $get_current_PDB returns in BX the current process
;   *** THIS FUNCTION CALL IS SUBJECT TO CHANGE!!! ***
;
        procedure   $GET_CURRENT_PDB,NEAR
        ASSUME  DS:NOTHING,SS:NOTHING
        invoke  get_user_stack
        PUSH    [CurrentPDB]
        POP     [SI.user_BX]
        return
$GET_CURRENT_PDB    ENDP
;                                                                          ;
;            C  A  V  E  A  T     P  R  O  G  R  A  M  M  E  R             ;
;----+----+----+----+----+----+----+----+----+----+----+----+----+----+----;

BREAK <NullDev -- Driver for null device>
        procedure   SNULDEV,FAR
ASSUME DS:NOTHING,ES:NOTHING,SS:NOTHING
        MOV     WORD PTR [NULLDEVPT],BX
        MOV     WORD PTR [NULLDEVPT+2],ES
        return
SNULDEV ENDP

        procedure   INULDEV,FAR
        PUSH    ES
        PUSH    BX
        LES     BX,[NULLDEVPT]
        OR      ES:[BX.REQSTAT],STDON           ; Set done bit
        POP     BX
        POP     ES
        return

INULDEV ENDP


BREAK <AbsDRD, AbsDWRT -- INT int_disk_read, int_disk_write handlers>>


        IF      IBM
ERRIN:                                  ; Codes returned by BIOS
        DB      2                       ; NO RESPONSE
        DB      6                       ; SEEK FAILURE
        DB      12                      ; GENERAL ERROR
        DB      4                       ; BAD CRC
        DB      8                       ; SECTOR NOT FOUND
        DB      0                       ; WRITE ATTEMPT ON WRITE-PROTECT DISK
ERROUT:                                 ; DISK ERRORS RETURNED FROM INT 25 and 26
        DB      80H                     ; NO RESPONSE
        DB      40H                     ; Seek failure
        DB      2                       ; Address Mark not found
        DB      8                       ; DMA OVERRUN
        DB      4                       ; SECTOR NOT FOUND
        DB      3                       ; WRITE ATTEMPT TO WRITE-PROTECT DISK

NUMERR  EQU     $-ERROUT
        ENDIF

        procedure   ABSDRD,FAR
ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        CLI
        MOV     [user_SS],SS
        MOV     [user_SP],SP
        PUSH    CS
        POP     SS
ASSUME  SS:DOSGROUP
        MOV     SP,OFFSET DOSGROUP:DSKSTACK
        INC     BYTE PTR [INDOS]
        STI
        CLD
        PUSH    ES
        PUSH    DS
        PUSH    SS
        POP     DS
ASSUME  DS:DOSGROUP
        invoke  GETBP
        POP     DS
ASSUME  DS:NOTHING
        JC      ILEAVE
        invoke  DSKREAD
TLEAVE:
        JZ      ILEAVE

        IF      IBM
; Translate the error code to ancient 1.1 codes
        PUSH    ES
        PUSH    CS
        POP     ES
        XOR     AH,AH                   ; Nul error code
        MOV     CX,NUMERR               ; Number of possible error conditions
        MOV     DI,OFFSET DOSGROUP:ERRIN   ; Point to error conditions
        REPNE   SCASB
        JNZ     LEAVECODE               ; Not found
        MOV     AH,ES:[DI+NUMERR-1]     ; Get translation
LEAVECODE:
        POP     ES
        ENDIF

        STC
ILEAVE:
        POP     ES
        CLI
        DEC     BYTE PTR [INDOS]
        MOV     SP,[user_SP]
        MOV     SS,[user_SS]
ASSUME  SS:NOTHING
        STI
        return
ABSDRD  ENDP

        procedure   ABSDWRT,FAR
ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        CLI
        MOV     [user_SS],SS
        MOV     [user_SP],SP
        PUSH    CS
        POP     SS
ASSUME  SS:DOSGROUP
        MOV     SP,OFFSET DOSGROUP:DSKSTACK
        INC     BYTE PTR [INDOS]
        STI
        CLD
        PUSH    ES
        PUSH    DS
        PUSH    SS
        POP     DS
ASSUME  DS:DOSGROUP
        invoke  GETBP
        POP     DS
ASSUME  DS:NOTHING
        JC      ILEAVE
        invoke  DSKWRITE
        JMP     TLEAVE
ABSDWRT ENDP



        procedure   SYS_RETURN,NEAR
        ASSUME  DS:NOTHING,ES:NOTHING
        entry   SYS_RET_OK
        call    get_user_stack
        PUSH    [SI.user_F]
        POPF
        CLC
        JMP     SHORT DO_RET

        entry   SYS_RET_ERR
        XOR     AH,AH                   ; hack to allow for smaller error rets
        call    get_user_stack
        PUSH    [SI.user_F]
        POPF
        STC
DO_RET:
        MOV     [SI.user_AX],AX         ; Really only sets AH
        PUSHF
        POP     [SI.user_F]             ; dump on his flags
        return
SYS_RETURN  ENDP

do_ext

CODE    ENDS
        END
