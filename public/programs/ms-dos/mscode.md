---
title: "MSCODE.ASM (v2.0)"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/MSCODE.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/MSCODE.ASM"
year: 1983
author: "Microsoft"
slug: "mscode"
order: 4
description: "The kernel entry point — the INT 21h dispatcher, the INDOS flag, and a comment that says 'Here comes multitasking!!!'"

summary:
  - point: "MSCODE.ASM is the main kernel module for MS-DOS 2.0 — the INT 21h entry point and system call dispatcher"
    link: "https://en.wikipedia.org/wiki/INT_21H"
    link_label: "INT 21H"
  - point: "The INDOS flag prevented re-entrant DOS calls — the mechanism that all TSR programs checked before calling DOS"
    link: "https://en.wikipedia.org/wiki/Terminate_and_stay_resident_program"
    link_label: "TSR programs"
  - point: "'Here comes multitasking!!!' — the comment in the code; real DOS multitasking would not arrive for nearly a decade"
    link: "https://en.wikipedia.org/wiki/Windows_3.1x"
    link_label: "Windows 3.1"

enhancements:
  - id: "copyright"
    line_start: 56
    line_end: 80
    title: "Microsoft Stamps Its Name on Paterson's Code"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Microsoft_logo_%281987%29.svg/440px-Microsoft_logo_%281987%29.svg.png"
    image_caption: "The Microsoft logo as it appeared in 1983. The copyright string in MSCODE.ASM reads 'Copyright 1981,82,83 Microsoft Corp.' Public domain."
    content: "The HEADER string beginning at line 62 is the version banner that appears when MS-DOS boots: 'Microsoft MS-DOS version X.XX' followed by 'Copyright 1981,82,83 Microsoft Corp.' The year 1981 in the copyright refers to PC DOS 1.0 — the year Microsoft shipped Tim Paterson's code to IBM. Paterson had written 86-DOS for Seattle Computer Products in 1980; Microsoft bought the full rights for $25,000 in July 1981. The copyright string in v2.0 spans three years, 1981 through 1983, marking the period in which a small language company became the dominant force in personal computer software. The KANJI conditional block (lines 67-73) shows a parallel Japanese version of the same header in double-byte Shift-JIS encoding — Microsoft was simultaneously building for the Japanese PC market, where NEC's PC-98 was becoming the dominant platform. The conditional IBM flag suppresses the header entirely on IBM-branded builds, where IBM's own copyright message appeared instead."

  - id: "int21-dispatcher"
    line_start: 82
    line_end: 130
    title: "The INT 21h Dispatcher"
    wikipedia_url: "https://en.wikipedia.org/wiki/INT_21H"
    image_url: ""
    image_caption: ""
    content: "The SYSTEM_CALL procedure is the entry point for every operating system service that any DOS program ever called. Entry QUIT handles INT 20H (terminate program) by setting AH to 0 and falling through. Entry COMMAND handles INT 21H — the main dispatch interrupt. The non-IBM build first checks for SET_OEM_HANDLER, which allowed OEM manufacturers to hook the DOS kernel. Then CMP AH,MAXCOM / JBE SAVREGS validates the function number: if the requested function exceeds the maximum, it jumps to BADCALL, which returns AL=0. Entry CALL_ENTRY is the CP/M compatibility path — it reconstructs a stack frame from the CALL 5 convention (pop IP, pop segment, pop the CP/M-style CL function number) and falls through to SAVREGS. SAVREGS calls save_world to preserve all registers. This single procedure, called trillions of times across hundreds of millions of machines over two decades, is the INT 21h contract made executable."

  - id: "indos"
    line_start: 131
    line_end: 155
    title: "The INDOS Flag: How TSRs Knew When to Call DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_stay_resident_program"
    image_url: ""
    image_caption: ""
    content: "INC [INDOS] on line 141 is the increment of the most important flag in the DOS ecosystem. INDOS is a byte counter that tracks whether execution is currently inside a DOS system call. Every entry into SYSTEM_CALL increments it; every exit decrements it. Terminate-and-stay-resident programs (TSRs) — the memory-resident utilities like SideKick, print spoolers, and antivirus programs that popped up over any running application — needed to call DOS themselves. But DOS was not re-entrant: calling INT 21H while already inside a DOS call corrupted the kernel's internal state. The solution was for TSRs to check INDOS before calling DOS: if it was nonzero, DOS was busy and the TSR had to wait. Finding INDOS required knowing its address, which meant either a documented interface (which DOS didn't officially provide) or a published hack. The address was eventually documented in technical references, and INDOS checking became universal TSR practice. This single byte variable defined the rules of engagement for a decade of memory-resident programming."

  - id: "multitasking"
    line_start: 155
    line_end: 168
    title: "Here Comes Multitasking!!!"
    wikipedia_url: "https://en.wikipedia.org/wiki/Multitasking"
    image_url: ""
    image_caption: ""
    content: "Lines 158-162 contain what may be the most prophetic comment in the history of operating systems. After saving the user's stack pointer into the current Process Descriptor Block (PDB_User_stack), a comment reads: 'save user stack in his area for later returns (possibly from EXEC) / Here comes multitasking!!!' The code is saving the per-process stack pointer — a prerequisite for context switching between processes. The programmers could see where this was going. The data structure was in place. The concept was understood. But MS-DOS 2.0 was still single-tasking: there was no scheduler, no preemption, no way to run two programs simultaneously. Real multitasking for PC DOS users arrived with Windows 3.0 in 1990 — seven years later. The three exclamation points are the sound of engineers who knew exactly what they were building toward, working within constraints that would prevent them from finishing for nearly a decade."

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
