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
description: "This file represents the core assembly code for MS-DOS 2.0, a pivotal operating system that shaped personal computing in the 1980s."
is_excerpt: true
excerpt_lines: 200

summary:
  - point: "Conditional compilation for OEM-specific features"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Header string generation for different locales"
    link: "https://en.wikipedia.org/wiki/Code_page"
    link_label: "Code Page"
  - point: "System call dispatcher enabling multitasking-like behavior"
    link: "https://en.wikipedia.org/wiki/Interrupt_handler"
    link_label: "Interrupt Handler"
  - point: "Stack manipulation for system calls and error handling"
    link: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    link_label: "Stack"
  - point: "OEM handler integration for non-IBM systems"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"

enhancements:
  - id: "conditional-compilation-oem-kanji-highmem"
    line_start: 17
    line_end: 27
    title: "Conditional compilation for OEM-specific features"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines define conditional compilation flags for OEM-specific features, including support for Kanji characters and high memory configurations. In the early 1980s, MS-DOS was licensed to over 70 OEMs, each with unique hardware requirements. These flags allowed Microsoft to tailor the operating system to specific machines without duplicating effort. For example, Kanji support was critical for Japanese systems, reflecting the global ambitions of MS-DOS. High memory configurations addressed the limitations of the 640 KB barrier imposed by the IBM PC architecture. This modular approach was inspired by Unix's portability and proved essential as MS-DOS became the foundation for countless systems worldwide."
  - id: "oem-handler-integration"
    line_start: 50
    line_end: 52
    title: "OEM handler integration for non-IBM systems"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines define an OEM-specific handler for systems not manufactured by IBM. When MS-DOS was licensed to OEMs, each had unique hardware and software requirements. This handler allowed customization for non-IBM systems, ensuring compatibility while maintaining a unified codebase. Microsoft's decision to retain licensing rights for MS-DOS was revolutionary, enabling them to dominate the operating system market. By accommodating OEMs through modular design, MS-DOS became the backbone of personal computing, powering machines from Compaq to Zenith. This flexibility was inspired by Unix's portability and proved critical in establishing Microsoft's dominance during the 1980s."
  - id: "header-string-generation"
    line_start: 61
    line_end: 86
    title: "Header string generation for different locales"
    wikipedia_url: "https://en.wikipedia.org/wiki/Code_page"
    image_url: ""
    image_caption: ""
    content: "This section generates the header string displayed during MS-DOS startup, with variations for Kanji-enabled systems. The code dynamically constructs the version number and appends locale-specific strings. For Kanji systems, it uses extended ASCII codes to represent Japanese characters. In the early 1980s, localization was a novel challenge for software developers, as ASCII was primarily designed for English text. Microsoft's decision to support Kanji reflects their strategic entry into the Japanese market, a critical step in establishing MS-DOS as a global standard. This approach also highlights the constraints of early computing, where every byte mattered, and localization required intricate assembly-level manipulation."
  - id: "system-call-dispatcher"
    line_start: 91
    line_end: 193
    title: "System call dispatcher enabling multitasking-like behavior"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "This section implements the system call dispatcher, a cornerstone of MS-DOS's functionality. It handles interrupts (INT 20H and INT 21H) and routes them to the appropriate routines. The dispatcher saves the current state, manipulates the stack, and flags that the system is in DOS mode. Notably, it includes rudimentary multitasking-like behavior by saving and restoring user stack pointers, a nod to Unix's process management. In 1983, multitasking was rare in consumer operating systems due to hardware limitations, but MS-DOS 2.0's dispatcher laid the groundwork for future enhancements. This design was influenced by Unix's simplicity and modularity, showcasing Microsoft's ambition to evolve MS-DOS beyond its origins as a single-tasking system."

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