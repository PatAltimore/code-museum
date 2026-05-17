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
description: "The foundational assembly code for MS-DOS 2.0, a pivotal operating system that shaped personal computing in the 1980s."

summary:
  - point: "Conditional assembly directives for OEM-specific features"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Version header generation with support for Kanji characters"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "System call dispatcher enabling multitasking and device handling"
    link: "https://en.wikipedia.org/wiki/System_call"
    link_label: "System Call"
  - point: "Stack manipulation for interrupt handling and task switching"
    link: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    link_label: "Stack"
  - point: "Error mode management and device-specific routines"
    link: "https://en.wikipedia.org/wiki/Error_handling"
    link_label: "Error Handling"

enhancements:
  - id: "conditional-assembly-directives"
    line_start: 17
    line_end: 27
    title: "Conditional assembly for OEM-specific features"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "These lines define conditional assembly directives for features like Kanji support, IBM compatibility, and high memory usage. In the early 1980s, MS-DOS was designed to be adaptable for different hardware manufacturers, a critical decision that allowed Microsoft to license the operating system to over 70 OEMs within a year. Each OEM could tailor MS-DOS to their hardware, ensuring compatibility and differentiation. Tim Paterson, the original author of 86-DOS, laid the groundwork for this modularity, and Microsoft expanded it in MS-DOS 2.0. This adaptability was inspired by Unix's portability, but constrained by the limited memory and processing power of early PCs. These directives reflect the foresight of building a system flexible enough to dominate the fragmented PC market."
  - id: "version-header-generation"
    line_start: 61
    line_end: 86
    title: "Dynamic version header with Kanji support"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kanji_furigana.svg/330px-Kanji_furigana.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Kanji with Furigana (CC BY-SA 3.0)"
    content: "This section generates a dynamic version header, displaying the MS-DOS version number and copyright information. Notably, it includes support for Kanji characters, addressing the needs of Japanese users. By 1983, Japan was a burgeoning market for personal computers, and Microsoft recognized the importance of localization. The Kanji encoding here demonstrates the challenges of adapting software for non-Latin scripts, requiring careful manipulation of byte values to represent complex characters. This approach was a precursor to the broader internationalization efforts that would become standard in software development. The inclusion of Kanji support in MS-DOS 2.0 highlights Microsoft's ambition to make its operating system globally relevant, a strategy that contributed to its widespread adoption."
  - id: "system-call-dispatcher"
    line_start: 91
    line_end: 193
    title: "System call dispatcher and multitasking"
    wikipedia_url: "https://en.wikipedia.org/wiki/System_call"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Linux_kernel_interfaces.svg/330px-Linux_kernel_interfaces.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Illustration of Linux kernel interfaces (CC BY-SA 3.0)"
    content: "This extensive section implements the system call dispatcher, which handles various interrupt-driven operations in MS-DOS. It includes entry points for quitting programs, executing commands, and managing system calls. The code also introduces multitasking capabilities, a significant step forward for MS-DOS. By saving and restoring user stack states, the operating system could manage multiple tasks more effectively, a feature inspired by Unix but adapted for the constrained environment of the IBM PC. In 1983, multitasking was a novel concept for personal computers, which were primarily single-task systems. This innovation laid the groundwork for more advanced operating systems and demonstrated Microsoft's commitment to evolving MS-DOS into a robust platform. While true multitasking wouldn't arrive until later, these early efforts were crucial in setting the stage for future developments."

---

; excerpt — first 200 lines of v2.0/source/MSCODE.ASM

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