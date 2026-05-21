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
description: "The MS-DOS DEBUG utility, a foundational tool for assembly-level debugging, showcases clever techniques and hardware interactions that defined early PC software development."

summary:
  - point: "DEBUG.ASM demonstrates direct device I/O for debugging tasks"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduces parity error handling and system call usage"
    link: "https://en.wikipedia.org/wiki/Parity_bit"
    link_label: "Parity Bit"
  - point: "Highlights the transition from 86-DOS to MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/86-DOS"
    link_label: "86-DOS"
  - point: "Uses modular assembly techniques for IBM PC compatibility"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Debugging commands and utilities influenced later software tools"
    link: "https://en.wikipedia.org/wiki/Debugger"
    link_label: "Debugger"

enhancements:
  - id: "debug-entry-point"
    line_start: 217
    line_end: 219
    title: "The Jump That Starts It All"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DEBUG entry point begins with a simple jump to the DSTRT routine, setting the stage for the debugger's initialization. This section includes a version header ('Vers 2.30') that reflects the evolution of DEBUG over time. At this moment, the programmer is ensuring that the debugger starts cleanly and identifies itself. In the early 1980s, debugging tools were essential for developers working close to hardware, and DEBUG provided a way to inspect memory, registers, and execute assembly instructions interactively. Tim Paterson's original 86-DOS debugger laid the groundwork for this tool, which was later refined by Microsoft engineers. DEBUG became a staple utility for PC developers, influencing the design of debugging tools in operating systems like Windows and Linux. Its modular design and direct device I/O were particularly innovative for the time, enabling compatibility across different hardware setups."
  - id: "dos-version-check"
    line_start: 227
    line_end: 249
    title: "Checking DOS Version for Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DSTRT routine checks the DOS version using interrupt 21h, function GET_VERSION. By comparing the returned version number against a predefined constant (2.00 in hex), the code ensures that the debugger is running on a compatible version of MS-DOS. If the version is too low, the program jumps to GOTBADDOS, which displays an error message and terminates. This check reflects the challenges of software compatibility in the early PC era, where multiple DOS versions existed, and developers had to account for differences in system calls and features. The inclusion of this routine highlights Microsoft's focus on robustness and user experience, ensuring that DEBUG would not attempt to run on unsupported systems. This approach to version checking became a standard practice in software development, influencing how applications handle compatibility across different operating system versions."
  - id: "parity-error-handling"
    line_start: 253
    line_end: 269
    title: "Trapping Parity Errors in Real Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Parity_bit"
    image_url: ""
    image_caption: ""
    content: "The OKDOS routine introduces a call to TrapParity, a mechanism for handling parity errors. Parity errors occur when data integrity is compromised during transmission or storage, and trapping them was critical for debugging hardware and software issues. This section also initializes various system variables, sets up the stack, and prepares the debugger's environment. In the early 1980s, parity error handling was a novel feature that demonstrated Microsoft's commitment to reliability and precision in their tools. Debugging hardware-level issues required intimate knowledge of the PC architecture, and routines like TrapParity provided developers with the means to diagnose and resolve problems effectively. This technique influenced later debugging utilities and contributed to the development of more sophisticated error detection and correction mechanisms in computing."
  - id: "command-processing-loop"
    line_start: 605
    line_end: 669
    title: "The Heart of Command Processing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugger"
    image_url: ""
    image_caption: ""
    content: "The COMMAND routine is the central loop for processing user commands in DEBUG. It sets up the segment registers, initializes the stack, and checks for parity errors before prompting the user for input. The routine scans the command line for valid commands, converts them to uppercase for consistency, and executes them via a lookup table (COMTAB). This design reflects the constraints of early PCs, where memory and processing power were limited, and efficiency was paramount. By using a lookup table and compact assembly code, DEBUG achieves fast and reliable command execution. This approach influenced the design of command-line interfaces and debugging tools in later operating systems, emphasizing the importance of user interaction and streamlined processing."
  - id: "terminate-vector-setup"
    line_start: 675
    line_end: 683
    title: "Setting Up Termination Behavior"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "The SET_TERMINATE_VECTOR routine sets interrupt vector 22h to point to the TERMINATE routine, ensuring that the debugger can gracefully exit when required. This setup reflects the importance of managing interrupt vectors in early PC software, where direct hardware interaction was common. By explicitly defining termination behavior, DEBUG provides a reliable way to clean up resources and return control to the operating system. This technique highlights the low-level nature of MS-DOS programming, where developers had to manage hardware and system resources manually. The concept of interrupt vector management influenced the design of modern operating systems, where similar mechanisms are used to handle system events and exceptions."
  - id: "input-line-conversion"
    line_start: 819
    line_end: 925
    title: "Converting Input to Uppercase"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "The INBUF routine reads the input line and converts all characters outside of quotes to uppercase. This ensures consistency in command processing, as MS-DOS commands were case-insensitive. The routine uses ASCII value comparisons to identify lowercase letters and convert them to their uppercase equivalents. This design reflects the simplicity and efficiency required in early PC software, where memory and processing constraints shaped every decision. By handling input conversion at the assembly level, DEBUG minimizes overhead and ensures reliable command interpretation. This approach influenced the design of text processing routines in later software, emphasizing the importance of normalization in user input handling."
  - id: "hex-addition-subtraction"
    line_start: 981
    line_end: 1013
    title: "Adding and Subtracting Hexadecimals"
    wikipedia_url: "https://en.wikipedia.org/wiki/Hexadecimal"
    image_url: ""
    image_caption: ""
    content: "The HEXADD routine performs addition and subtraction on hexadecimal values, showcasing the utility of DEBUG for low-level arithmetic operations. It reads two hex values, adds and subtracts them, and outputs the results in hexadecimal format. This routine reflects the needs of early PC developers, who often worked directly with memory addresses and binary data. By providing built-in support for hex arithmetic, DEBUG simplifies tasks like memory inspection and manipulation. This feature influenced the design of debugging tools in later operating systems, where similar capabilities are integrated into development environments to support low-level programming and diagnostics."
  - id: "hex-address-output-routine"
    line_start: 1021
    line_end: 1033
    title: "Hexadecimal Address Output: A Debugger's Backbone"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugger"
    image_url: ""
    image_caption: ""
    content: "This section outputs a hexadecimal address in the format segment:offset, a staple of debugging tools. The OUTSI routine first displays the segment (DS) and then jumps to OUT16 to print the offset (SI). This design reflects the segmented memory model of the Intel 8086, where memory was addressed as segment:offset pairs. In 1981, debugging tools like DEBUG were essential for developers working directly with assembly language and hardware, as higher-level abstractions were rare. The segmented memory model was both a constraint and an opportunity, forcing programmers to think in terms of physical memory layout. This routine's simplicity and efficiency influenced the design of later debuggers, including those integrated into IDEs like Turbo Debugger and Visual Studio."
  - id: "hex-digit-output"
    line_start: 1075
    line_end: 1187
    title: "Hex Digit Conversion: A Clever 8086 Trick"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The HEX subroutine converts a byte in AL into two hexadecimal digits. It uses a clever sequence of bit shifts and additions to isolate and convert each nibble (4 bits) into its ASCII representation. The use of DAA (Decimal Adjust after Addition) is particularly notable, as it exploits the 8086's BCD arithmetic capabilities to simplify conversion. This technique showcases the ingenuity required to work within the constraints of early CPUs, where every instruction and register mattered. The approach was widely studied and adapted in other low-level programming contexts, influencing routines in embedded systems and BIOS development."
  - id: "command-table-design"
    line_start: 1577
    line_end: 1579
    title: "Command Table: The Heart of DEBUG's Flexibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The COMTAB data structure maps command letters to their corresponding subroutine addresses, enabling efficient command dispatch. Each entry in the table corresponds to a specific DEBUG command, such as 'A' for assembly or 'D' for memory dump. This design reflects the influence of early command-line interfaces, where simplicity and directness were paramount. By using a lookup table, DEBUG achieves both speed and modularity, allowing new commands to be added with minimal disruption. This approach became a standard in many command-line tools and influenced the design of scripting languages like Bash and Python."
  - id: "quit-command"
    line_start: 1647
    line_end: 1651
    title: "QUIT Command: Exiting the Debugger Gracefully"
    wikipedia_url: "https://en.wikipedia.org/wiki/Exit_(command)"
    image_url: ""
    image_caption: ""
    content: "The QUIT routine sets a flag (QFLAG) and prepares the system for a clean exit. It interacts with the USER_PROC_PDB to ensure that the debugger's state is properly released. This routine highlights the importance of graceful termination in software design, especially in tools that interact directly with hardware and system resources. In the early 1980s, debugging tools had to account for the limited stability of operating systems and hardware, making clean exits essential to avoid corruption or crashes. The principles demonstrated here influenced the design of later debugging and profiling tools, ensuring reliability in critical system utilities."
  - id: "find-debug-routine"
    line_start: 1653
    line_end: 1659
    title: "FIND_DEBUG: Locating Debug Resources in Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The FIND_DEBUG routine interacts with system memory to locate resources needed by the debugger. It uses interrupts and parity release calls to ensure the system is in a stable state before exiting. This routine reflects the low-level nature of early PC programming, where developers had to manage memory and hardware directly. The use of interrupts (INT 21H) for system calls is a hallmark of MS-DOS programming, showcasing the tight integration between software and hardware. Techniques like these laid the groundwork for modern memory management practices and influenced the development of operating systems like Windows and Linux."

---

```asm
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


```
