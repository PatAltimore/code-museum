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
description: "The source code for MS-DOS 2.0 represents a pivotal moment in computing history, where Microsoft transitioned from a simple single-tasking OS to a more Unix-inspired system, enabling subdirectories, file handles, and device drivers."

summary:
  - point: "Conditional assembly directives reflect the need for OEM-specific customization."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Kanji support demonstrates early localization efforts for Japanese markets."
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "System call dispatcher reveals the multitasking aspirations of MS-DOS 2.0."
    link: "https://en.wikipedia.org/wiki/System_call"
    link_label: "System call"
  - point: "Stack manipulation showcases the constraints of 8086 architecture."
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "OEM handler customization highlights Microsoft's licensing strategy."
    link: "https://en.wikipedia.org/wiki/MS-DOS#OEM_versions"
    link_label: "OEM versions"

enhancements:
  - id: "conditional-assembly-directives"
    line_start: 17
    line_end: 27
    title: "Conditional assembly: OEMs and localization"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This section of code uses conditional assembly directives to define constants based on the target environment. For example, `KANJI` and `IBM` flags are set to `0` by default, but could be overridden to enable specific features for Japanese markets or IBM hardware. In 1983, MS-DOS 2.0 was designed to be highly adaptable for OEMs, reflecting Microsoft's strategy to license the operating system to multiple hardware manufacturers. This flexibility was crucial for Microsoft's dominance in the PC market, as it allowed MS-DOS to run on a variety of hardware configurations. The inclusion of Kanji support also highlights Microsoft's early efforts to localize software for non-English-speaking markets, particularly Japan, where the PC-98 series was gaining traction. These directives reveal the balancing act between customization and standardization that shaped MS-DOS's development."
  - id: "header-generation-kanji-support"
    line_start: 61
    line_end: 86
    title: "Header generation: ASCII vs Kanji"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kanji_furigana.svg/330px-Kanji_furigana.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Kanji with Furigana (CC BY-SA 3.0)"
    content: "This section generates the version header displayed when MS-DOS starts. The code dynamically constructs the version string using the major and minor version numbers, with special handling for high memory configurations (`HIGHMEM`). Notably, the code includes an alternate header for Kanji systems, using Japanese character encoding. In the early 1980s, localization was a significant challenge due to the limitations of hardware and software. Supporting Kanji required careful encoding and additional memory, as the 8086 architecture was not inherently designed for multi-byte character sets. Microsoft's decision to include Kanji support reflects the growing importance of the Japanese market, where NEC's PC-98 series was a dominant force. This header generation routine is a small but telling example of how MS-DOS 2.0 was tailored for global use, laying the groundwork for Microsoft's international expansion."
  - id: "system-call-dispatcher"
    line_start: 91
    line_end: 193
    title: "System call dispatcher: Multitasking ambitions"
    wikipedia_url: "https://en.wikipedia.org/wiki/System_call"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Linux_kernel_interfaces.svg/330px-Linux_kernel_interfaces.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "Illustration of Linux kernel interfaces (CC BY-SA 3.0)"
    content: "This section implements the system call dispatcher for MS-DOS, handling interrupts like `INT 20H` and `INT 21H`. It includes routines for saving the processor state, managing stacks, and dispatching system calls based on the value of the `AH` register. The code also introduces multitasking concepts, such as saving the user stack for later use, hinting at MS-DOS's aspirations to support more advanced features. In 1983, multitasking was still a rarity in personal computing, largely constrained by the limited memory and processing power of machines like the IBM PC. MS-DOS 2.0's dispatcher reflects the influence of Unix and XENIX, which inspired many of its design decisions. While true multitasking would not arrive until later versions of Windows, this code represents an early step toward more sophisticated operating system functionality. The dispatcher also highlights the challenges of working within the constraints of the 8086 architecture, where careful stack manipulation and interrupt handling were essential for system stability."
  - id: "stack-manipulation-and-error-handling"
    line_start: 143
    line_end: 193
    title: "Stack manipulation: Error handling and multitasking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8086"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Intel_C8086.jpg/330px-Intel_C8086.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
    image_caption: "A processor Intel C8086, 5 MHz. (CC BY-SA 4.0)"
    content: "This section demonstrates intricate stack manipulation to manage system calls and error handling. The code saves the user stack state, reorders the stack for interrupt handling, and switches between different stacks (`AUXSTACK`, `IOSTACK`, and `DSKSTACK`) depending on the operation. This approach reflects the constraints of the 8086 architecture, where the lack of hardware support for multitasking required software-based solutions. In 1983, the IBM PC was equipped with an Intel 8088 processor, a variant of the 8086, which had limited memory and processing capabilities. MS-DOS 2.0's stack management routines were a clever workaround to enable more advanced features, such as error handling and pseudo-multitasking. These techniques would influence later operating systems, including Windows, which built upon MS-DOS's foundations to implement true multitasking. The stack manipulation code also underscores the ingenuity required to maximize the capabilities of early PC hardware."
  - id: "oem-handler-customization"
    line_start: 50
    line_end: 52
    title: "OEM handler: Tailoring MS-DOS for hardware"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS#OEM_versions"
    image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/StartingMsdos.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
    image_caption: "MS-DOS 6.22 booting, from QEMU. Image created by Mike Swanson. MS-DOS © 1994 Microsoft. (Public domain)"
    content: "This brief section introduces the `OEM_HANDLER` directive, which allows for customization of MS-DOS to support specific hardware configurations. In the early 1980s, Microsoft's licensing strategy was to provide MS-DOS as a flexible platform that OEMs could adapt to their machines. This approach was a key factor in Microsoft's success, as it enabled MS-DOS to become the standard operating system for a wide range of IBM-compatible PCs. The ability to define OEM-specific handlers reflects the modularity of MS-DOS 2.0, which was designed to accommodate diverse hardware needs while maintaining a consistent user experience. This modularity would later influence the design of Windows, which continued to prioritize compatibility with a broad array of devices and manufacturers."

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