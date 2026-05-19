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
description: "This file is part of MS-DOS 2.0, a pivotal rewrite that introduced Unix-inspired features like subdirectories and file handles, shaping the evolution of personal computing."

summary:
  - point: "Introduces Unix-like system calls and file handling"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements interrupt-driven system call dispatching"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupt"
  - point: "Contains OEM extensibility mechanisms for customization"
    link: "https://en.wikipedia.org/wiki/Original_equipment_manufacturer"
    link_label: "OEM"
  - point: "Handles disk I/O with error translation for compatibility"
    link: "https://en.wikipedia.org/wiki/Disk_operating_system"
    link_label: "Disk Operating System"
  - point: "Introduces process management concepts like PDB (Process Data Block)"
    link: "https://en.wikipedia.org/wiki/Process_control_block"
    link_label: "Process Control Block"

enhancements:
  - id: "include-directives-and-segment-assumptions"
    line_start: 5
    line_end: 54
    title: "Include directives and segment assumptions"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section sets up the assembly environment by including external files like DOSSEG.ASM and STDSW.ASM, which define standard segment structures and switches. It also establishes assumptions for code, data, and stack segments, ensuring proper memory management in the segmented architecture of the Intel 8086 processor. In 1983, segmented memory was a necessity due to the 1 MB address space limit imposed by the 20-bit address bus. These directives reflect the meticulous planning required to manage memory efficiently in early PCs. This foundational setup influenced later operating systems, which continued to use segmented memory models until flat memory models became standard with the advent of 32-bit processors."
  - id: "header-generation-and-versioning"
    line_start: 57
    line_end: 87
    title: "Header generation and versioning"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section dynamically generates the MS-DOS version header, including support for Kanji characters for Japanese systems. It uses conditional assembly to adapt the header format based on the target system's capabilities, such as IBM compatibility or high memory support. This flexibility was crucial for Microsoft's OEM licensing strategy, allowing MS-DOS to be customized for different hardware vendors. The inclusion of Kanji support highlights the global ambitions of MS-DOS, as Japan was a significant market for personal computers in the early 1980s. This approach to localization and versioning set a precedent for software adaptability, influencing practices in modern operating systems and applications."
  - id: "system-call-dispatcher"
    line_start: 88
    line_end: 122
    title: "System call dispatcher"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "This section implements the dispatcher for system calls, handling interrupts like INT 20H and INT 21H, which were central to MS-DOS's operation. It checks the validity of the system call and routes it to the appropriate handler. The use of interrupts reflects the design philosophy of early operating systems, where hardware-driven events dictated program flow. By centralizing system call handling, MS-DOS simplified application development, enabling programs to interact with hardware and system resources through a consistent interface. This dispatcher design influenced later operating systems, including Windows and Unix-like systems, which adopted similar mechanisms for system call management."
  - id: "save-and-restore-registers"
    line_start: 123
    line_end: 248
    title: "Save and restore registers for multitasking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multitasking"
    image_url: ""
    image_caption: ""
    content: "The SAVREGS, save_world, and restore_world routines manage the saving and restoring of CPU registers during system calls. This enables MS-DOS to maintain the state of the user program while executing system-level operations. Although MS-DOS was not a multitasking operating system, these routines laid the groundwork for process management by preserving execution context. The concept of saving and restoring registers is a cornerstone of modern multitasking operating systems, where context switching between processes is routine. These routines demonstrate the forward-thinking design of MS-DOS 2.0, which borrowed ideas from Unix to improve system robustness and flexibility."
  - id: "oem-handler-extensions"
    line_start: 412
    line_end: 448
    title: "OEM handler extensions for customization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Original_equipment_manufacturer"
    image_url: ""
    image_caption: ""
    content: "The $SET_OEM_HANDLER and related routines allow OEMs to extend MS-DOS functionality by setting custom interrupt handlers. This feature was crucial for Microsoft's licensing strategy, enabling hardware vendors to tailor MS-DOS to their specific needs. By providing a mechanism for customization, Microsoft ensured that MS-DOS could adapt to a wide range of hardware configurations, from IBM PCs to non-IBM compatibles. This extensibility contributed to the widespread adoption of MS-DOS, as OEMs could differentiate their products while maintaining compatibility with the growing ecosystem of MS-DOS applications. The concept of extensible system calls influenced later operating systems, including Windows, which supports driver and API extensions."
  - id: "null-device-driver"
    line_start: 466
    line_end: 481
    title: "Null device driver implementation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The SNULDEV and INULDEV routines implement a driver for the null device, a special device that discards all data written to it. This feature is a staple of operating systems, providing a way to test output or suppress unwanted data. The null device concept originated in Unix and was adopted by MS-DOS to provide similar functionality. By including a null device driver, MS-DOS enhanced its utility for developers and system administrators, who could use it for debugging and scripting. The null device remains a standard feature in modern operating systems, demonstrating the enduring influence of this design choice."
  - id: "disk-io-handlers"
    line_start: 486
    line_end: 584
    title: "Disk I/O handlers with error translation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_operating_system"
    image_url: ""
    image_caption: ""
    content: "The ABSDRD and ABSDWRT routines handle low-level disk read and write operations, translating BIOS error codes into MS-DOS-specific error codes for compatibility. These routines interact directly with the disk hardware, reflecting the close coupling between software and hardware in early PCs. The error translation mechanism ensured that applications could rely on consistent error reporting across different hardware configurations. This approach influenced later operating systems, which adopted similar strategies to abstract hardware differences and provide a uniform API for developers. The focus on error handling and compatibility highlights the challenges of developing software for diverse hardware environments in the 1980s."

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