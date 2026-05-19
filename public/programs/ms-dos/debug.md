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
description: "DEBUG.ASM: The debugging tool for MS-DOS v2.0, a pivotal utility in early PC software development."

summary:
  - point: "Introduces direct device I/O for debugging"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements parity error handling for robust debugging"
    link: "https://en.wikipedia.org/wiki/Parity_bit"
    link_label: "Parity Bit"
  - point: "Supports command line parsing and execution"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command Line Interface"
  - point: "Includes hex arithmetic for low-level debugging"
    link: "https://en.wikipedia.org/wiki/Hexadecimal"
    link_label: "Hexadecimal"
  - point: "Reflects the transition to modular assembly for IBM PCs"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "debug-entry-point"
    line_start: 217
    line_end: 223
    title: "DEBUG: The entry point to debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DEBUG label marks the entry point of the MS-DOS debugger, a tool designed to assist developers in diagnosing and fixing issues at the assembly level. At its core, this section initializes the debugger and jumps to the DSTRT routine, setting the stage for subsequent operations. In 1983, debugging tools were essential for developers working on constrained hardware like the IBM PC, which had limited memory (64KB–640KB) and processing power (4.77 MHz). Tim Paterson and later contributors like Aaron R. and C. Peters adapted DEBUG to meet the evolving needs of MS-DOS users, adding features like direct device I/O and line-by-line assembly. DEBUG became a staple for developers, influencing tools like Turbo Debugger and modern IDEs with integrated debugging capabilities. Without DEBUG, early PC software development would have been far more challenging, slowing the adoption of personal computing."
  - id: "dos-version-check"
    line_start: 227
    line_end: 239
    title: "DSTRT: Checking MS-DOS version compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DSTRT routine ensures that the debugger is running on a compatible version of MS-DOS, specifically version 2.00 or higher. This check, performed via interrupt 21h, reflects the fragmented landscape of early DOS systems, where compatibility was not guaranteed across versions. Developers had to account for differences in system calls and memory layouts. By rejecting incompatible versions, DEBUG avoided crashes and ensured reliable operation. This approach laid the groundwork for version checks in modern software, where backward compatibility remains a critical concern. The routine's simplicity and effectiveness influenced later practices in software development, including the widespread use of version checks in operating systems and applications."
  - id: "parity-error-handling"
    line_start: 253
    line_end: 345
    title: "OKDOS: Handling parity errors and initializing debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parity_bit"
    image_url: ""
    image_caption: ""
    content: "The OKDOS routine initializes the debugger and handles parity errors, a common issue in early computing caused by electrical noise or hardware faults. By calling the TrapParity subroutine, DEBUG ensures that parity errors are addressed before proceeding. This reflects the meticulous attention to reliability required in the early 1980s, when hardware was prone to errors and debugging tools had to compensate for these limitations. The routine also sets up key variables and data structures, preparing the debugger for operation. Parity error handling influenced later developments in error detection and correction, including ECC memory and CRC checks. DEBUG's robustness in handling hardware quirks contributed to its reputation as an indispensable tool for developers."
  - id: "command-line-parsing"
    line_start: 605
    line_end: 631
    title: "COMMAND: Parsing and executing user commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The COMMAND routine is the heart of DEBUG's user interaction, parsing and executing commands entered by the user. It scans the input for valid characters, prepares them for table lookup, and executes the corresponding subroutine. This design reflects the simplicity and efficiency required in early command-line interfaces, where every byte of memory and CPU cycle mattered. The routine's modular approach to command processing influenced later CLI tools, including Unix shells and scripting languages. By enabling direct interaction with the system at a low level, COMMAND empowered developers to diagnose and fix issues efficiently, paving the way for more sophisticated debugging environments."
  - id: "hex-arithmetic"
    line_start: 981
    line_end: 1017
    title: "HEXADD: Performing hex addition and subtraction"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hexadecimal"
    image_url: ""
    image_caption: ""
    content: "The HEXADD routine performs hexadecimal addition and subtraction, a critical feature for debugging at the assembly level. By allowing developers to manipulate memory addresses and values directly, HEXADD simplifies tasks like calculating offsets and verifying data integrity. In the early 1980s, hexadecimal arithmetic was a fundamental skill for programmers working close to the hardware. This routine exemplifies the low-level control offered by DEBUG, which was essential for developing and optimizing software on constrained systems. HEXADD's functionality influenced later debugging tools and programming environments, where hex manipulation remains a common task. Its inclusion in DEBUG highlights the tool's focus on empowering developers with precise control over their systems."
  - id: "hexadecimal-address-output"
    line_start: 1021
    line_end: 1071
    title: "Hexadecimal address output for debugging"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hexadecimal"
    image_url: ""
    image_caption: ""
    content: "These routines, OUTSI, OUTDI, and OUT16, are designed to output memory addresses in hexadecimal format. OUTSI and OUTDI handle segment:offset pairs, while OUT16 converts a 16-bit value in DX to hex. In 1983, debugging tools were critical for developers working directly with hardware and assembly language. Hexadecimal representation was preferred for its compactness and alignment with binary structure. Tim Paterson and the Microsoft team crafted these routines to aid developers in visualizing memory layouts and debugging programs. The use of subroutines like HEX and DIGIT demonstrates an efficient approach to breaking down tasks into reusable components. This technique influenced debugging tools in later systems, including the Windows Debugger and even modern IDEs that display memory in hex. Without such routines, early developers would have struggled to interpret raw binary data, slowing progress in software development."
  - id: "console-output-character-handling"
    line_start: 1119
    line_end: 1181
    title: "Handling console output with character logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The OUT and NOTDEL routines manage console output, ensuring characters are displayed correctly while handling special cases like DELETE and TAB. In the early 1980s, MS-DOS was designed for systems with limited hardware capabilities, such as the IBM PC's 80x25 text-mode display. Developers needed precise control over character output to maintain usability. These routines reflect the constraints of the time, where every byte of memory and CPU cycle mattered. The logic for handling DELETE as backspace and managing column positions shows attention to user experience in debugging scenarios. This approach laid the groundwork for text-based interfaces in subsequent operating systems and tools, influencing command-line utilities and terminal emulators used today."
  - id: "tab-handling-and-column-alignment"
    line_start: 1191
    line_end: 1213
    title: "Tab handling for column alignment"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tab_key"
    image_url: ""
    image_caption: ""
    content: "TABDO and TABLP implement tab handling by calculating the number of spaces needed to align text to the next tab stop. In the early days of computing, aligning text was essential for readability, especially in debugging outputs. This routine uses clever arithmetic and looping to achieve alignment efficiently, reflecting the resource constraints of the IBM PC. Developers relied on such routines to format output in a way that made debugging manageable. The influence of this approach extends to modern text editors and IDEs, where tab stops remain a fundamental feature for code formatting and readability."
  - id: "device-output-waiting"
    line_start: 1227
    line_end: 1263
    title: "Waiting for device output readiness"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "DOCONOUT and CONOWAIT ensure that the output device is ready before sending data. This interaction with hardware via INT 21H reflects the low-level nature of MS-DOS, where developers had to manage device states explicitly. In 1983, hardware was far less standardized than today, and routines like these were necessary to ensure compatibility across different systems. The use of BIOS calls for device I/O influenced later operating systems, which abstracted these interactions into higher-level APIs. This code represents a bridge between direct hardware manipulation and the abstraction layers that define modern computing."
  - id: "buffer-handling-and-overflow-management"
    line_start: 1383
    line_end: 1451
    title: "Buffer handling and overflow management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "RBUFIN, FILLBUF, BDONE, BFULL, and ECHR manage input buffers, ensuring data is stored correctly while handling overflow and special characters. Buffer management was a critical aspect of early computing, where memory was scarce and programs had to operate within tight constraints. These routines reflect the meticulous attention to detail required to handle user input reliably. The logic for detecting buffer overflow and handling backspaces demonstrates the challenges of working within the limitations of the IBM PC. This approach influenced later systems, where buffer management became a standard practice in handling I/O operations, from text editors to network protocols."
  - id: "command-table-for-debugger-functions"
    line_start: 1577
    line_end: 1643
    title: "Command table for debugger functions"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The COMTAB structure maps command letters to their corresponding routines, enabling the debugger to interpret user input and execute the appropriate function. This design reflects the modularity and extensibility of MS-DOS, where commands could be added or modified without altering the core logic. In 1983, this approach was inspired by Unix-like systems, which used similar tables for command interpretation. The modularity of this design influenced later systems, including Windows command-line utilities and scripting languages like PowerShell. By organizing commands in a table, developers ensured the debugger could handle a wide range of tasks efficiently, setting a precedent for future debugging tools."
  - id: "quit-command-and-debugger-exit"
    line_start: 1647
    line_end: 1675
    title: "Quit command and debugger exit"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The QUIT and FIND_DEBUG routines handle the debugger's exit process, ensuring system resources are released and the program terminates cleanly. In the early 1980s, proper resource management was crucial, as operating systems like MS-DOS had limited mechanisms for handling orphaned processes or memory leaks. This code reflects the careful planning required to maintain system stability in a resource-constrained environment. The logic for releasing parity and setting exit codes demonstrates the influence of Unix-like systems on MS-DOS's design. These routines laid the foundation for modern debugging tools, where clean exit processes are standard practice to prevent system instability."

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