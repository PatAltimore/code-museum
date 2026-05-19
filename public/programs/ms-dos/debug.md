---
title: "DEBUG.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/DEBUG.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/DEBUG.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "debug"
order: 13
description: "DEBUG.ASM: The debugger for MS-DOS, showcasing early assembly programming techniques and hardware interactions that defined the PC era."

summary:
  - point: "Direct device I/O modifications introduced in 1982"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Line-by-line assembler added in version 2.0"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Split into modules for IBM PC compatibility in version 2.3"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Parity error handling integrated into debugger routines"
    link: "https://en.wikipedia.org/wiki/Parity_bit"
    link_label: "Parity Bit"
  - point: "Command parsing and execution via lookup tables"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command Line Interface"

enhancements:
  - id: "debug-entry-point"
    line_start: 217
    line_end: 223
    title: "DEBUG: The debugger's entry point"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DEBUG label marks the entry point for the MS-DOS debugger. This section begins with a jump to DSTRT, initializing the debugger's operations. Debugging tools like this were crucial in the early 1980s, as developers worked directly with hardware and assembly language. Tim Paterson, the original author of 86-DOS, likely envisioned DEBUG as a tool to help developers interact with the low-level workings of the IBM PC. By 1983, DEBUG had evolved to support MS-DOS 2.0, reflecting Microsoft's push to make the operating system more robust and feature-rich. This entry point laid the foundation for debugging tools that would become standard in software development, influencing later tools like Visual Studio."
  - id: "dos-version-check"
    line_start: 227
    line_end: 239
    title: "DSTRT: Checking DOS version compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DSTRT subroutine checks the version of DOS to ensure compatibility with the debugger. It compares the current DOS version against a predefined minimum (2.00 in hex). If the version is insufficient, execution jumps to GOTBADDOS, which displays an error message and terminates the program. This reflects the importance of version control in the rapidly evolving software landscape of the early 1980s. Developers had to account for differences in system calls and hardware capabilities across DOS versions. This routine highlights Microsoft's effort to maintain backward compatibility while pushing forward with new features in MS-DOS 2.0."
  - id: "parity-error-handling"
    line_start: 253
    line_end: 345
    title: "OKDOS: Handling parity errors and initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parity_bit"
    image_url: ""
    image_caption: ""
    content: "The OKDOS subroutine initializes the debugger after confirming DOS compatibility. It includes a call to TrapParity, which addresses parity errors—a common issue in early computing caused by hardware or transmission faults. This routine also sets up critical variables, such as the stack pointer and user process descriptor block. Parity error handling was a significant concern in the era of unreliable hardware and limited error detection mechanisms. By integrating this functionality directly into the debugger, Microsoft ensured that developers could diagnose and resolve hardware-level issues effectively. This approach reflects the hands-on nature of programming in the early PC era, where software often had to compensate for hardware limitations."
  - id: "command-parsing"
    line_start: 633
    line_end: 669
    title: "GoPrompt: Parsing and executing commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The GoPrompt routine is responsible for displaying the debugger prompt and parsing user commands. It reads the command line, removes leading blanks, and prepares the first character for lookup in a command table. This design reflects the simplicity and efficiency required in early command-line interfaces. By converting commands into table indices, the debugger could quickly execute the corresponding routine. This approach, while primitive by modern standards, was highly effective given the constraints of 8086 assembly and the limited processing power of early PCs. The command parsing logic here influenced the design of later command-line tools and scripting languages."
  - id: "terminate-vector-setup"
    line_start: 675
    line_end: 683
    title: "SET_TERMINATE_VECTOR: Preparing for graceful exits"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "The SET_TERMINATE_VECTOR routine sets up an interrupt vector for program termination. Interrupt vectors were a critical part of early PC architecture, allowing software to handle specific events or conditions. By establishing a termination vector, the debugger ensures that it can exit gracefully, cleaning up resources and restoring system stability. This routine highlights the meticulous attention to detail required in assembly programming, where every system call and memory operation had to be carefully managed. Microsoft's inclusion of this functionality reflects their commitment to creating reliable and professional-grade software, even in the early days of MS-DOS."
  - id: "case-conversion"
    line_start: 827
    line_end: 855
    title: "CASECHK: Converting input to uppercase"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "The CASECHK routine converts lowercase ASCII characters to uppercase, ensuring uniformity in command processing. This was necessary because early command-line interfaces often treated uppercase and lowercase characters differently, leading to potential errors. By standardizing input, the debugger simplifies command interpretation and reduces user frustration. This routine reflects the challenges of working with ASCII in assembly language, where even simple tasks like case conversion required explicit instructions. The approach taken here influenced the design of later text-processing utilities and programming languages, many of which adopted case-insensitivity as a standard feature."
  - id: "hex-addition"
    line_start: 981
    line_end: 1017
    title: "HEXADD: Performing hexadecimal arithmetic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hexadecimal"
    image_url: ""
    image_caption: ""
    content: "The HEXADD routine performs addition and subtraction on hexadecimal values, displaying the results in a human-readable format. Hexadecimal arithmetic was a common requirement in early computing, as it aligned closely with the binary representation used by hardware. This routine demonstrates the debugger's ability to handle low-level operations, providing developers with tools to manipulate and analyze memory directly. The inclusion of hexadecimal arithmetic reflects the technical expertise of Microsoft's developers, who understood the needs of their audience—programmers working on the cutting edge of PC technology. This functionality remains relevant today, as hexadecimal continues to be a fundamental part of computing."
  - id: "hexadecimal-address-output"
    line_start: 1021
    line_end: 1071
    title: "Hexadecimal Address Output for Debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hexadecimal"
    image_url: ""
    image_caption: ""
    content: "This section contains routines for outputting memory addresses in hexadecimal format, a cornerstone of debugging tools. The OUTSI and OUTDI routines print the segment and offset of memory locations, while OUT16 and HEX handle the conversion of 16-bit values into human-readable hex digits. These routines were essential for developers working directly with hardware or low-level code, where understanding memory layout was critical. In 1983, when MS-DOS v2.0 was released, the IBM PC had only 16-bit registers and a segmented memory model, making hexadecimal representation the most practical way to display addresses. Tim Paterson's efficient use of assembly instructions like SHR and DAA reflects the constraints of early PCs, where every byte of memory and every CPU cycle mattered. These routines laid the groundwork for debugging tools that persisted through the DOS era and influenced later systems."
  - id: "console-character-output"
    line_start: 1119
    line_end: 1129
    title: "Console Character Output Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Computer_terminal"
    image_url: ""
    image_caption: ""
    content: "The OUT routine handles the output of individual characters to the console, a fundamental operation in debugging tools. It includes checks for special characters like DELETE and TAB, ensuring proper handling of user input. In the early 1980s, the IBM PC's text-based interface relied heavily on such routines to interact with users. The decision to reset bit 7 before output reflects the ASCII standard, ensuring compatibility across different systems. This routine exemplifies the careful attention to detail required in low-level programming, where even a single bit could cause unexpected behavior. As debugging tools evolved, similar routines became standard in operating systems, highlighting the lasting influence of MS-DOS's design."
  - id: "tabulation-handling"
    line_start: 1191
    line_end: 1213
    title: "Handling Tab Characters in Debug Output"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tab_key"
    image_url: ""
    image_caption: ""
    content: "The TABDO and TABLP routines manage the output of tab characters, converting them into spaces to align text visually. This feature was crucial for debugging tools, where clear formatting of output could mean the difference between understanding a problem and missing it entirely. In the early 1980s, text alignment was a manual process, and programmers relied on tools like DEBUG to present information in a readable format. The use of assembly instructions like LOOP and NEG demonstrates the efficiency required in an era of limited computational resources. These routines highlight the importance of user-friendly design even in low-level utilities, a principle that continues to shape software development."
  - id: "device-io-interaction"
    line_start: 1309
    line_end: 1351
    title: "Direct Interaction with Device I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The DEVIOCALL routine facilitates direct interaction with device I/O, a critical feature for debugging hardware and system-level operations. By manipulating registers and memory locations, this routine enables communication with devices connected to the IBM PC. In the early 1980s, device drivers were rudimentary, and developers often had to write their own routines to interact with hardware. Tim Paterson's design reflects the need for flexibility and control in a rapidly evolving computing landscape. The use of INT 21H, a DOS interrupt for system services, underscores the integration of MS-DOS with hardware-level operations. This routine exemplifies the ingenuity required to bridge the gap between software and hardware in the early PC era."
  - id: "command-table-lookup"
    line_start: 1577
    line_end: 1643
    title: "Command Table for Debugging Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The COMTAB section defines a command table, mapping user inputs to corresponding debugging routines. Each command letter indexes into the table to retrieve the address of the associated routine, enabling efficient interpretation of user commands. In 1983, command-line interfaces were the primary means of interacting with computers, and tools like DEBUG relied on such tables to provide functionality. The inclusion of commands like ASSEM, DUMP, and TRACE reflects the needs of developers working with assembly language and low-level debugging. This design inspired similar mechanisms in later operating systems, demonstrating the lasting impact of MS-DOS's architecture. By organizing commands in a table, Tim Paterson ensured that DEBUG could be easily extended, a forward-thinking decision that contributed to its longevity."
  - id: "quit-command"
    line_start: 1647
    line_end: 1651
    title: "Graceful Exit with the QUIT Command"
    wikipedia_url: "https://en.wikipedia.org/wiki/Exit_(command)"
    image_url: ""
    image_caption: ""
    content: "The QUIT routine handles the graceful termination of the DEBUG utility, ensuring that system resources are released and the user returns to the DOS prompt. This routine increments a flag to indicate the program's exit state and interacts with system-level structures like the Process Data Block (PDB). In the early 1980s, proper resource management was vital, as system crashes or memory leaks could easily occur without it. Tim Paterson's attention to detail in designing this routine reflects the importance of reliability in software tools. The use of INT 21H to signal the operating system demonstrates the integration of DEBUG with MS-DOS's core functionality. This routine set a precedent for exit handling in later utilities, emphasizing the need for clean and predictable program termination."
  - id: "debugger-finalization"
    line_start: 1653
    line_end: 1675
    title: "Finalizing Debugger State and Exiting"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugger"
    image_url: ""
    image_caption: ""
    content: "The FIND_DEBUG routine finalizes the debugger's state before exiting, ensuring that system parity settings are restored and the exit code is properly set. This routine reflects the meticulous design required in low-level utilities, where even minor oversights could lead to system instability. In the early 1980s, debugging tools like DEBUG were indispensable for developers working with the IBM PC's hardware and software. Tim Paterson's decision to include parity restoration highlights his understanding of the system's needs and his commitment to reliability. By setting an exit code, this routine ensures that the operating system can accurately track the program's termination, a feature that influenced later debugging tools and system utilities."

---

TITLE   DEBUGger for MS-DOS

; DEBUG-86 8086 debugger runs under 86-DOS       version 2.30

;

; Modified 5/4/82 by AaronR to do all I/O direct to devices

; Runs on MS-DOS 1.28 and above

; REV 1.20

;       Tab expansion

;       New device interface (1.29 and above)

; REV 2.0

;       line by line assembler added by C. Peters

; REV 2.1

;       Uses EXEC system call

; REV 2.2

;       Ztrace mode by zibo.

;       Fix dump display to indent properly

;       Parity nonsense by zibo

;

; REV 2.3

;       Split into seperate modules to allow for

;       assembly on an IBM PC

;







.xlist

.xcref

        INCLUDE DEBEQU.ASM

        INCLUDE DOSSYM.ASM

.cref

.list



        IF      SYSVER



; Structure for system call 72



SYSINITVAR  STRUC

DPBHEAD     DD      ?                   ; Pointer to head of DPB-FAT list

sft_addr    DD      ?                   ; Pointer to first FCB table

; The following address points to the CLOCK device

BCLOCK      DD      ?

; The following address is used by DISKSTATCHK it is always

; points to the console input device header

BCON        DD      ?                   ; Console device entry points

NUMIO       DB      0                   ; Number of disk tables

MAXSEC      DW      0                   ; Maximum allowed sector size

BUFFHEAD    DD      ?

DEVHEAD     DD      ?

SYSINITVAR  ENDS



        ENDIF





CODE    SEGMENT PUBLIC 'CODE'

CODE    ENDS



CONST   SEGMENT PUBLIC BYTE



        EXTRN   USER_PROC_PDB:WORD,STACK:BYTE,CSSAVE:WORD,DSSAVE:WORD

        EXTRN   SPSAVE:WORD,IPSAVE:WORD,LINEBUF:BYTE,QFLAG:BYTE

        EXTRN   NEWEXEC:BYTE,HEADSAVE:WORD,LBUFSIZ:BYTE,BACMES:BYTE

        EXTRN   BADVER:BYTE,ENDMES:BYTE,CARRET:BYTE,ParityMes:BYTE



        IF  IBMVER

        EXTRN   DSIZ:BYTE,NOREGL:BYTE,DISPB:WORD

        ENDIF



        IF      SYSVER

        EXTRN   CONFCB:BYTE,POUT:DWORD,COUT:DWORD,CIN:DWORD,IOBUFF:BYTE

        EXTRN   IOADDR:DWORD,IOCALL:BYTE,IOCOM:BYTE,IOSTAT:WORD,IOCNT:WORD

        EXTRN   IOSEG:WORD,COLPOS:BYTE,BADDEV:BYTE,BADLSTMES:BYTE

        EXTRN   LBUFFCNT:BYTE,PFLAG:BYTE

        ENDIF



CONST   ENDS



DATA    SEGMENT PUBLIC BYTE



        EXTRN   PARSERR:BYTE,DATAEND:WORD,ParityFlag:BYTE,DISADD:BYTE

        EXTRN   ASMADD:BYTE,DEFDUMP:BYTE,BYTEBUF:BYTE



DATA    ENDS



DG      GROUP   CODE,CONST,DATA





CODE    SEGMENT PUBLIC 'CODE'

ASSUME  CS:DG,DS:DG,ES:DG,SS:DG



        PUBLIC  RESTART,SET_TERMINATE_VECTOR,DABORT,TERMINATE,COMMAND

        PUBLIC  FIND_DEBUG,CRLF,BLANK,TAB,OUT,INBUF,SCANB,SCANP

        PUBLIC  PRINTMES,RPRBUF,HEX,OUTSI,OUTDI,OUT16,DIGIT,BACKUP,RBUFIN



        IF  SYSVER

        PUBLIC  SETUDEV,DEVIOCALL

        EXTRN   DISPREG:NEAR,IN:NEAR

        ENDIF



        EXTRN   PERR:NEAR,COMPARE:NEAR,DUMP:NEAR,ENTER:NEAR,FILL:NEAR

        EXTRN   GO:NEAR,INPUT:NEAR,LOAD:NEAR,MOVE:NEAR,NAME:NEAR

        EXTRN   REG:NEAR,SEARCH:NEAR,DWRITE:NEAR,UNASSEM:NEAR,ASSEM:NEAR

        EXTRN   OUTPUT:NEAR,ZTRACE:NEAR,TRACE:NEAR,GETHEX:NEAR,GETEOL:NEAR



        EXTRN   PREPNAME:NEAR,DEFIO:NEAR,SKIP_FILE:NEAR,DEBUG_FOUND:NEAR

        EXTRN   TrapParity:NEAR,ReleaseParity:NEAR



        ORG     100H



START:

DEBUG:

        JMP     SHORT DSTRT



HEADER DB       "Vers 2.30"



DSTRT:

DOSVER_HIGH     EQU  0200H              ; 2.00 in hex

        MOV     AH,GET_VERSION

        INT     21H

        XCHG    AH,AL                   ; Turn it around to AH.AL

        CMP     AX,DOSVER_HIGH

        JAE     OKDOS

GOTBADDOS:

        MOV     DX,OFFSET DG:BADVER

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        INT     20H



OKDOS:

        CALL    TrapParity              ; scarf up those parity guys

        MOV     AH,GET_CURRENT_PDB

        INT     21H

        MOV     [USER_PROC_PDB],BX      ; Initially set to DEBUG



        IF      SYSVER

        MOV     [IOSEG],CS

        ENDIF



        MOV     SP,OFFSET DG:STACK

        MOV     [PARSERR],AL

        MOV     AH,GET_IN_VARS

        INT     21H





        IF      SYSVER

        LDS     SI,ES:[BX.BCON]

        MOV     WORD PTR CS:[CIN+2],DS

        MOV     WORD PTR CS:[CIN],SI

        MOV     WORD PTR CS:[COUT+2],DS

        MOV     WORD PTR CS:[COUT],SI

        PUSH    CS

        POP     DS

        MOV     DX,OFFSET DG:CONFCB

        MOV     AH,FCB_OPEN

        INT     21H

        OR      AL,AL

        JZ      GOTLIST

        MOV     DX,OFFSET DG:BADLSTMES

        CALL    RPRBUF

        CALL    RBUFIN

        CALL    CRLF

        MOV     CL,[LBUFFCNT]

        OR      CL,CL

        JZ      NOLIST1                 ; User didn't specify one

        XOR     CH,CH

        MOV     DI,OFFSET DG:(CONFCB + 1)

        MOV     SI,OFFSET DG:LINEBUF

        REP     MOVSB

        MOV     DX,OFFSET DG:CONFCB

        MOV     AH,FCB_OPEN

        INT     21H

        OR      AL,AL

        JZ      GOTLIST                 ; GOOD

        MOV     DX,OFFSET DG:BADDEV

        CALL    RPRBUF

NOLIST1:

        MOV     WORD PTR [POUT+2],CS

        MOV     WORD PTR [POUT],OFFSET DG:LONGRET

        JMP     NOLIST



XXX     PROC FAR

LONGRET:RET

XXX     ENDP

        ENDIF



GOTLIST:

        IF      SYSVER

        MOV     SI,DX

        LDS     SI,DWORD PTR DS:[SI.fcb_FIRCLUS]

        MOV     WORD PTR CS:[POUT+2],DS

        MOV     WORD PTR CS:[POUT],SI

        ENDIF

NOLIST:

        MOV     AX,CS

        MOV     DS,AX

        MOV     ES,AX



; Code to print header

;       MOV     DX,OFFSET DG:HEADER

;       CALL    RPRBUF



        CALL    SET_TERMINATE_VECTOR



        IF      SETCNTC

        MOV     AL,23H                  ; Set vector 23H

        MOV     DX,OFFSET DG:DABORT

        INT     21H

        ENDIF



        MOV     DX,CS                   ; Get DEBUG's segment

        MOV     AX,OFFSET DG:DATAEND + 15   ; End of debug

        SHR     AX,1                    ; Convert to segments

        SHR     AX,1

        SHR     AX,1

        SHR     AX,1

        ADD     DX,AX                   ; Add siz of debug in paragraphs

        MOV     AH,CREATE_PROCESS_DATA_BLOCK    ; create program segment just after DEBUG

        INT     21H

        MOV     AX,DX

        MOV     DI,OFFSET DG:DSSAVE

        CLD

        STOSW

        STOSW

        STOSW

        STOSW

        MOV     WORD PTR [DISADD+2],AX

        MOV     WORD PTR [ASMADD+2],AX

        MOV     WORD PTR [DEFDUMP+2],AX

        MOV     AX,100H

        MOV     WORD PTR[DISADD],AX

        MOV     WORD PTR[ASMADD],AX

        MOV     WORD PTR [DEFDUMP],AX

        MOV     DS,DX

        MOV     ES,DX

        MOV     DX,80H

        MOV     AH,SET_DMA

        INT     21H                     ; Set default DMA address to 80H

        MOV     AX,WORD PTR DS:[6]

        MOV     BX,AX

        CMP     AX,0FFF0H

        PUSH    CS

        POP     DS

        JAE     SAVSTK

        MOV     AX,WORD PTR DS:[6]

        PUSH    BX

        MOV     BX,OFFSET DG:DATAEND + 15

        AND     BX,0FFF0H               ; Size of DEBUG in bytes (rounded up to PARA)

        SUB     AX,BX

        POP     BX

SAVSTK:

        PUSH    BX

        DEC     AX

        DEC     AX

        MOV     BX,AX

        MOV     WORD PTR [BX],0

        POP     BX

        MOV     SPSAVE,AX

        DEC     AH

        MOV     ES:WORD PTR [6],AX

        SUB     BX,AX

        MOV     CL,4

        SHR     BX,CL

        ADD     ES:WORD PTR [8],BX



        IF IBMVER

        ; Get screen size and initialize display related variables

        MOV     AH,15

        INT     10H

        CMP     AH,40

        JNZ     PARSCHK

        MOV     BYTE PTR DSIZ,7

        MOV     BYTE PTR NOREGL,4

        MOV     DISPB,64

        ENDIF



PARSCHK:

; Copy rest of command line to test program's parameter area

        MOV     DI,FCB

        MOV     SI,81H

        MOV     AX,(PARSE_FILE_DESCRIPTOR SHL 8) OR 01H

        INT     21H

        CALL    SKIP_FILE               ; Make sure si points to delimiter

        CALL    PREPNAME

        PUSH    CS

        POP     ES

FILECHK:

        MOV     DI,80H

        CMP     BYTE PTR ES:[DI],0      ; ANY STUFF FOUND?

        JZ      COMMAND                 ; NOPE

FILOOP: INC     DI

        CMP     BYTE PTR ES:[DI],13     ; COMMAND LINE JUST SPACES?

        JZ      COMMAND

        CMP     BYTE PTR ES:[DI]," "

        JZ      FILOOP

        CMP     BYTE PTR ES:[DI],9

        JZ      FILOOP



        CALL    DEFIO                   ; WELL READ IT IN

        MOV     AX,CSSAVE

        MOV     WORD PTR DISADD+2,AX

        MOV     WORD PTR ASMADD+2,AX

        MOV     AX,IPSAVE

        MOV     WORD PTR DISADD,AX

        MOV     WORD PTR ASMADD,AX

COMMAND:

        CLD

        MOV     AX,CS

        MOV     DS,AX

        MOV     ES,AX

        MOV     SS,AX

        MOV     SP,OFFSET DG:STACK

        STI

        CMP     [ParityFlag],0          ; did we detect a parity error?

        JZ      GoPrompt                ; nope, go prompt

        MOV     [ParityFlag],0          ; reset flag

        MOV     DX,OFFSET DG:ParityMes  ; message to print

        MOV     AH,STD_CON_STRING_OUTPUT; easy way out

        INT     21h                     ; blam

GoPrompt:

        MOV     AL,PROMPT

        CALL    OUT

        CALL    INBUF                   ; Get command line

; From now and throughout command line processing, DI points

; to next character in command line to be processed.

        CALL    SCANB                   ; Scan off leading blanks

        JZ      COMMAND                 ; Null command?

        LODSB                           ; AL=first non-blank character

; Prepare command letter for table lookup

        SUB     AL,"A"                  ; Low end range check

        JB      ERR1

        CMP     AL,"Z"-"A"              ; Upper end range check

        JA      ERR1

        SHL     AL,1                    ; Times two

        CBW                             ; Now a 16-bit quantity

        XCHG    BX,AX                   ; In BX we can address with it

        CALL    CS:[BX+COMTAB]          ; Execute command

        JMP     SHORT COMMAND           ; Get next command

ERR1:   JMP     PERR



SET_TERMINATE_VECTOR:

        MOV     AX,(SET_INTERRUPT_VECTOR SHL 8) OR 22H  ; Set vector 22H

        MOV     DX,OFFSET DG:TERMINATE

        INT     21H

        RET



TERMINATE:

        CMP     BYTE PTR CS:[QFLAG],0

        JNZ     QUITING

        MOV     CS:[USER_PROC_PDB],CS

        CMP     BYTE PTR CS:[NEWEXEC],0

        JZ      NORMTERM

        MOV     AX,CS

        MOV     DS,AX

        MOV     SS,AX

        MOV     SP,OFFSET DG:STACK

        MOV     AX,[HEADSAVE]

        JMP     DEBUG_FOUND



NORMTERM:

        MOV     DX,OFFSET DG:ENDMES

        JMP     SHORT RESTART



QUITING:

        MOV     AX,(EXIT SHL 8)

        INT     21H



DABORT:

        MOV     DX,OFFSET DG:CARRET

RESTART:

        MOV     AX,CS

        MOV     DS,AX

        MOV     SS,AX

        MOV     SP,OFFSET DG:STACK

        CALL    RPRBUF

        JMP     COMMAND



        IF      SYSVER

SETUDEV:

        MOV     DI,OFFSET DG:CONFCB

        MOV     AX,(PARSE_FILE_DESCRIPTOR SHL 8) OR 01H

        INT     21H

        CALL    USERDEV

        JMP     DISPREG



USERDEV:

        MOV     DX,OFFSET DG:CONFCB

        MOV     AH,FCB_OPEN

        INT     21H

        OR      AL,AL

        JNZ     OPENERR

        MOV     SI,DX

        TEST    BYTE PTR [SI.fcb_DEVID],080H    ; Device?

        JZ      OPENERR                 ; NO

        LDS     SI,DWORD PTR [CONFCB.fcb_FIRCLUS]

        MOV     WORD PTR CS:[CIN],SI

        MOV     WORD PTR CS:[CIN+2],DS

        MOV     WORD PTR CS:[COUT],SI

        MOV     WORD PTR CS:[COUT+2],DS

        PUSH    CS

        POP     DS

        RET





OPENERR:

        MOV     DX,OFFSET DG:BADDEV

        CALL    RPRBUF

        RET

        ENDIF



; Get input line. Convert all characters NOT in quotes to upper case.



INBUF:

        CALL    RBUFIN

        MOV     SI,OFFSET DG:LINEBUF

        MOV     DI,OFFSET DG:BYTEBUF

CASECHK:

        LODSB

        CMP     AL,'a'

        JB      NOCONV

        CMP     AL,'z'

        JA      NOCONV

        ADD     AL,"A"-"a"              ; Convert to upper case

NOCONV:

        STOSB

        CMP     AL,13

        JZ      INDONE

        CMP     AL,'"'

        JZ      QUOTSCAN

        CMP     AL,"'"

        JNZ     CASECHK

QUOTSCAN:

        MOV     AH,AL

KILLSTR:

        LODSB

        STOSB

        CMP     AL,13

        JZ      INDONE

        CMP     AL,AH

        JNZ     KILLSTR

        JMP     SHORT CASECHK



INDONE:

        MOV     SI,OFFSET DG:BYTEBUF



; Output CR/LF sequence



CRLF:

        MOV     AL,13

        CALL    OUT

        MOV     AL,10

        JMP     OUT



; Physical backspace - blank, backspace, blank



BACKUP:

        MOV     SI,OFFSET DG:BACMES



; Print ASCII message. Last char has bit 7 set



PRINTMES:

        LODS    CS:BYTE PTR [SI]        ; Get char to print

        CALL    OUT

        SHL     AL,1                    ; High bit set?

        JNC     PRINTMES

        RET



; Scan for parameters of a command



SCANP:

        CALL    SCANB                   ; Get first non-blank

        CMP     BYTE PTR [SI],","       ; One comma between params OK

        JNE     EOLCHK                  ; If not comma, we found param

        INC     SI                      ; Skip over comma



; Scan command line for next non-blank character



SCANB:

        PUSH    AX

SCANNEXT:

        LODSB

        CMP     AL," "

        JZ      SCANNEXT

        CMP     AL,9

        JZ      SCANNEXT

        DEC     SI                      ; Back to first non-blank

        POP     AX

EOLCHK:

        CMP     BYTE PTR [SI],13

        RET



; Hex addition and subtraction



HEXADD:

        MOV     CX,4

        CALL    GETHEX

        MOV     DI,DX

        MOV     CX,4

        CALL    GETHEX

        CALL    GETEOL

        PUSH    DX

        ADD     DX,DI

        CALL    OUT16

        CALL    BLANK

        CALL    BLANK

        POP     DX

        SUB     DI,DX

        MOV     DX,DI

        CALL    OUT16

        JMP     SHORT CRLF



; Print the hex address of DS:SI



OUTSI:

        MOV     DX,DS                   ; Put DS where we can work with it

        CALL    OUT16                   ; Display segment

        MOV     AL,":"

        CALL    OUT

        MOV     DX,SI

        JMP     SHORT OUT16             ; Output displacement



; Print hex address of ES:DI

; Same as OUTSI above



OUTDI:

        MOV     DX,ES

        CALL    OUT16

        MOV     AL,":"

        CALL    OUT

        MOV     DX,DI



; Print out 16-bit value in DX in hex



OUT16:

        MOV     AL,DH                   ; High-order byte first

        CALL    HEX

        MOV     AL,DL                   ; Then low-order byte



; Output byte in AL as two hex digits



HEX:

        MOV     AH,AL                   ; Save for second digit

; Shift high digit into low 4 bits

        PUSH    CX

        MOV     CL,4

        SHR     AL,CL

        POP     CX



        CALL    DIGIT                   ; Output first digit

        MOV     AL,AH                   ; Now do digit saved in AH

DIGIT:

        AND     AL,0FH                  ; Mask to 4 bits

; Trick 6-byte hex conversion works on 8086 too.

        ADD     AL,90H

        DAA

        ADC     AL,40H

        DAA



; Console output of character in AL. No registers affected but bit 7

; is reset before output.



        IF      SYSVER

OUT:

        PUSH    AX

        AND     AL,7FH

        CMP     AL,7FH

        JNZ     NOTDEL

        MOV     AL,8                    ; DELETE same as backspace

NOTDEL:

        CMP     AL,9

        JZ      TABDO

        CALL    DOCONOUT

        CMP     AL,0DH

        JZ      ZEROPOS

        CMP     AL,0AH

        JZ      ZEROPOS

        CMP     AL,8

        JNZ     OOKRET

        MOV     AL," "

        CALL    DOCONOUT

        MOV     AL,8

        CALL    DOCONOUT

        CMP     BYTE PTR CS:[COLPOS],0

        JZ      NOTINC

        DEC     BYTE PTR CS:[COLPOS]

        JMP     NOTINC

ZEROPOS:

        MOV     BYTE PTR CS:[COLPOS],0FFH

OOKRET:

        INC     BYTE PTR CS:[COLPOS]

NOTINC:

        TEST    BYTE PTR CS:[PFLAG],1

        JZ      POPRET

        CALL    LISTOUT

POPRET:

        POP     AX

        RET



TABDO:

        MOV     AL,CS:[COLPOS]

        OR      AL,0F8H

        NEG     AL

        PUSH    CX

        MOV     CL,AL

        XOR     CH,CH

        JCXZ    POPTAB

TABLP:

        MOV     AL," "

        CALL    OUT

        LOOP    TABLP

POPTAB:

        POP     CX

        POP     AX

        RET





DOCONOUT:

        PUSH    DS

        PUSH    SI

        PUSH    AX

CONOWAIT:

        LDS     SI,CS:[COUT]

        MOV     AH,10

        CALL    DEVIOCALL

        MOV     AX,CS:[IOSTAT]

        AND     AX,200H

        JNZ     CONOWAIT

        POP     AX

        PUSH    AX

        MOV     AH,8

        CALL    DEVIOCALL

        POP     AX

        POP     SI

        POP     DS

        RET





LISTOUT:

        PUSH    DS

        PUSH    SI

        PUSH    AX

LISTWAIT:

        LDS     SI,CS:[POUT]

        MOV     AH,10

        CALL    DEVIOCALL

        MOV     AX,CS:[IOSTAT]

        AND     AX,200H

        JNZ     LISTWAIT

        POP     AX

        PUSH    AX

        MOV     AH,8

        CALL    DEVIOCALL

        POP     AX

        POP     SI

        POP     DS

        RET



DEVIOCALL:

        PUSH    ES

        PUSH    BX

        PUSH    CS

        POP     ES

        MOV     BX,OFFSET DG:IOCALL

        MOV     CS:[IOCOM],AH

        MOV     WORD PTR CS:[IOSTAT],0

        MOV     WORD PTR CS:[IOCNT],1

        MOV     CS:[IOBUFF],AL

        MOV     WORD PTR CS:[IOADDR+2],DS

        MOV     AX,[SI+6]

        MOV     WORD PTR CS:[IOADDR],AX

        CALL    DWORD PTR CS:[IOADDR]

        MOV     AX,[SI+8]

        MOV     WORD PTR CS:[IOADDR],AX

        CALL    DWORD PTR CS:[IOADDR]

        MOV     AL,CS:[IOBUFF]

        POP     BX

        POP     ES

        RET

        ELSE



OUT:

        PUSH    DX

        PUSH    AX

        AND     AL,7FH

        MOV     DL,AL

        MOV     AH,2

        INT     21H

        POP     AX

        POP     DX

        RET

        ENDIF





        IF      SYSVER

RBUFIN:

        PUSH    AX

        PUSH    ES

        PUSH    DI

        PUSH    CS

        POP     ES

        MOV     BYTE PTR [LBUFFCNT],0

        MOV     DI,OFFSET DG:LINEBUF

FILLBUF:

        CALL    IN

        CMP     AL,0DH

        JZ      BDONE

        CMP     AL,8

        JZ      ECHR

        CMP     AL,7FH

        JZ      ECHR

        CMP     BYTE PTR [LBUFFCNT],BUFLEN

        JAE     BFULL

        STOSB

        INC     BYTE PTR [LBUFFCNT]

        JMP     SHORT FILLBUF



BDONE:

        STOSB

        POP     DI

        POP     ES

        POP     AX

        RET



BFULL:

        MOV     AL,8

        CALL    OUT

        MOV     AL,7

        CALL    OUT

        JMP     SHORT FILLBUF



ECHR:

        CMP     DI,OFFSET DG:LINEBUF

        JZ      FILLBUF

        DEC     DI

        DEC     BYTE PTR [LBUFFCNT]

        JMP     SHORT FILLBUF

        ELSE



RBUFIN:

        PUSH    AX

        PUSH    DX

        MOV     AH,10

        MOV     DX,OFFSET DG:LBUFSIZ

        INT     21H

        POP     DX

        POP     AX

        RET

        ENDIF





        IF      SYSVER

RPRBUF:

        PUSHF

        PUSH    AX

        PUSH    SI

        MOV     SI,DX

PLOOP:

        LODSB

        CMP     AL,"$"

        JZ      PRTDONE

        CALL    OUT

        JMP     SHORT PLOOP

PRTDONE:

        POP     SI

        POP     AX

        POPF

        RET

        ELSE



RPRBUF:

        MOV     AH,9

        INT     21H

        RET

        ENDIF



; Output one space



BLANK:

        MOV     AL," "

        JMP     OUT



; Output the number of blanks in CX



TAB:

        CALL    BLANK

        LOOP    TAB

        RET



; Command Table. Command letter indexes into table to get

; address of command. PERR prints error for no such command.



COMTAB  DW      ASSEM                   ; A

        DW      PERR                    ; B

        DW      COMPARE                 ; C

        DW      DUMP                    ; D

        DW      ENTER                   ; E

        DW      FILL                    ; F

        DW      GO                      ; G

        DW      HEXADD                  ; H

        DW      INPUT                   ; I

        DW      PERR                    ; J

        DW      PERR                    ; K

        DW      LOAD                    ; L

        DW      MOVE                    ; M

        DW      NAME                    ; N

        DW      OUTPUT                  ; O

        IF      ZIBO

        DW      ZTRACE

        ELSE

        DW      PERR                    ; P

        ENDIF

        DW      QUIT                    ; Q (QUIT)

        DW      REG                     ; R

        DW      SEARCH                  ; S

        DW      TRACE                   ; T

        DW      UNASSEM                 ; U

        DW      PERR                    ; V

        DW      DWRITE                  ; W

        IF      SYSVER

        DW      SETUDEV                 ; X

        ELSE

        DW      PERR

        ENDIF

        DW      PERR                    ; Y

        DW      PERR                    ; Z



QUIT:

        INC     BYTE PTR [QFLAG]

        MOV     BX,[USER_PROC_PDB]

FIND_DEBUG:

IF  NOT SYSVER

        MOV     AH,SET_CURRENT_PDB

        INT     21H

ENDIF

        CALL    ReleaseParity           ; let system do normal parity stuff

        MOV     AX,(EXIT SHL 8)

        INT     21H



CODE    ENDS

        END START

                                   