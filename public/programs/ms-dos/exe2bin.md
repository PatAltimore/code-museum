---
title: "EXE2BIN.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/EXE2BIN.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/EXE2BIN.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "exe2bin"
order: 31
description: "This file is part of MS-DOS v2.0, showcasing the transformation of EXE files into BIN format, a critical utility in early PC software development."

summary:
  - point: "Introduces DOS version checks for compatibility"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements memory size calculations for program loading"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Handles file extensions dynamically for EXE and BIN files"
    link: "https://en.wikipedia.org/wiki/File_format"
    link_label: "File Formats"
  - point: "Demonstrates relocation of program segments during loading"
    link: "https://en.wikipedia.org/wiki/Relocation_(computing)"
    link_label: "Relocation"
  - point: "Uses direct hardware interrupts for file I/O operations"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"

enhancements:
  - id: "runvar-memory-variables"
    line_start: 133
    line_end: 135
    title: "Memory variables for program execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The RUNVAR section defines key memory variables used during program execution, such as RELPT and RELSEG. These variables store relocation information and segment data, essential for loading and executing programs in memory. In 1983, memory management was a critical concern for developers, as PCs typically had limited RAM, often just 64KB or 128KB. This section reflects the careful planning required to optimize memory usage and ensure programs could run efficiently. Tim Paterson and later contributors like M.A. Ulloa had to consider these constraints while designing MS-DOS utilities. The approach here laid the groundwork for memory handling techniques that persisted in DOS and influenced other operating systems."
  - id: "locate-check-version"
    line_start: 197
    line_end: 265
    title: "Checking DOS version for compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The LOCATE procedure begins with a check for the DOS version, ensuring compatibility before proceeding. This was crucial in the early 1980s, as MS-DOS evolved rapidly, and programs had to adapt to changes in system calls and functionality. The code uses interrupt 21h to retrieve the version number and compares it against the required minimum. If the version is insufficient, it displays an error message and exits gracefully. This reflects the growing need for backward compatibility as MS-DOS gained widespread adoption across diverse hardware platforms. Developers had to anticipate variations in system environments, balancing innovation with reliability. This compatibility check became a staple in software development, influencing practices in subsequent operating systems."
  - id: "file-name-handling"
    line_start: 303
    line_end: 375
    title: "Dynamic handling of file names"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_format"
    image_url: ""
    image_caption: ""
    content: "This section dynamically processes file names for the EXE and BIN files, extracting extensions and ensuring proper formatting. The code uses loops and conditional checks to parse input and append default extensions if none are provided. In the early days of computing, file naming conventions were less standardized, and utilities like EXE2BIN had to accommodate user input flexibly. The ability to handle file names dynamically was a practical solution to ensure usability across different scenarios. This approach highlights the ingenuity of developers in creating robust utilities for a rapidly expanding user base. The techniques here influenced later software tools, which continued to prioritize user-friendly file handling."
  - id: "exe-header-validation"
    line_start: 571
    line_end: 673
    title: "Validating and parsing EXE headers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Executable"
    image_url: ""
    image_caption: ""
    content: "The EXELOAD section reads and validates the header of an EXE file, ensuring it conforms to expected formats before proceeding. This includes checking the signature word (5A4Dh) and calculating the size of the header in bytes. In 1983, executable file formats were still evolving, and validation was critical to prevent errors or crashes during program execution. The header contains vital information about memory layout and program structure, which the loader uses to allocate resources and prepare for execution. This meticulous attention to detail reflects the challenges of early software development, where robustness and reliability were paramount. The techniques here influenced file format standards and loader designs in later systems."
  - id: "relocation-segment-fixups"
    line_start: 915
    line_end: 933
    title: "Relocating program segments dynamically"
    wikipedia_url: "https://en.wikipedia.org/wiki/Relocation_(computing)"
    image_url: ""
    image_caption: ""
    content: "The RELOC section handles dynamic relocation of program segments, adjusting memory addresses based on the actual load location. This involves reading relocation pointers from the EXE file and applying offsets to ensure the program runs correctly in its allocated memory space. Relocation was a crucial feature in early operating systems, enabling programs to execute in varying memory configurations. It required precise calculations and efficient algorithms to minimize overhead. The approach here demonstrates the sophistication of MS-DOS utilities in addressing hardware constraints and optimizing performance. Relocation techniques like these became foundational in software engineering, influencing practices in modern operating systems and compilers."
  - id: "closure-of-locate-subroutine"
    line_start: 1021
    line_end: 1025
    title: "Finalizing LOCATE: Assembly's structured elegance"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These final lines of EXE2BIN.ASM mark the formal closure of the LOCATE subroutine and the CODE segment. The LOCATE ENDP directive signals the end of the LOCATE subroutine, ensuring proper encapsulation of its functionality. The CODE ENDS directive then closes the segment containing executable instructions, adhering to the structured programming conventions of assembly language. Finally, the END directive specifies the program's entry point, tying the logical flow back to LOCATE. In the early 1980s, assembly language programming required meticulous attention to structure and detail. Each segment and subroutine had to be explicitly defined and closed, reflecting the constraints of the hardware and the tools available. MS-DOS v2.0, released in 1983, was a near-complete rewrite of the original 86-DOS, inspired by Unix and XENIX. This rewrite introduced advanced features like subdirectories and file handles, necessitating utilities like EXE2BIN to manage executable and binary formats. Tim Paterson, the original author of 86-DOS, played a pivotal role in shaping MS-DOS during his tenure at Microsoft. These lines encapsulate the disciplined approach required in assembly programming during the era. The structured closure of subroutines and segments ensured maintainability and compatibility across different systems. While modern programming languages abstract away such details, the practices seen here laid the groundwork for software development methodologies that persist today. The LOCATE subroutine's closure is a testament to the precision and care that defined early software engineering."

---

        title   LOCATE (EXE2BIN)



;Loader for EXE files under 86-DOS



;The following switch allows use with the "old linker", which put a version

;number where the new linker puts the number of bytes used in the last page.

;If enabled, this will cause a test for 0004 at this location (the old linker

;version number), and if equal, change it to 200H so all of the last page

;will be used.



;VER. 1.5

;    05/21/82   Added rev number

;

;VER. 1.6

;    07/01/82   A little less choosy about size matches

;

;VER. 2.0  Rev. 1       M.A.Ulloa

;    10/08/82   Modified to use new 2.0 system calls for file i/o

;

;          Rev. 2       M.A.Ulloa

;    10/27/82   Added the DOS version check



FALSE   EQU     0

TRUE    EQU     NOT FALSE



OLDLINK EQU     0                  ;1 to enable, 0 to disable



        .xlist

        INCLUDE DOSSYM.ASM

        .list





        subttl  Main Code Area

        page





code    segment byte

code    ends



DATA    SEGMENT PUBLIC BYTE





        EXTRN   bad_vers_err:BYTE,NOTFND:BYTE,NOROOM:BYTE,DIRFULL:BYTE

        EXTRN   CANTFIX:BYTE,RDBAD:BYTE,FULL:BYTE,PROMPT:BYTE,CRLF:BYTE



make    db      "MAUlloa/Microsoft/V20"

rev     db      "2"



file1_ext db    ".EXE",00h

file2_ext db    ".BIN",00h



per1    db      0

per2    db      0



file1   db      64 dup(?)

handle1 dw      1 dup(?)



file2   db      64 dup(?)

handle2 dw      1 dup(?)





INBUF   DB      5,0

        DB      5 DUP(?)



;The following locations must be defined for storing the header:



RUNVAR  LABEL   BYTE            ;Start of RUN variables

RELPT   DW      ?

LASTP   LABEL   WORD

RELSEG  DW      ?

SIZ     LABEL   WORD            ;Share these locations

PAGES   DW      ?

RELCNT  DW      ?

HEADSIZ DW      ?

        DW      ?

LOADLOW DW      ?

INITSS  DW      ?

INITSP  DW      ?

        DW      ?

INITIP  DW      ?

INITCS  DW      ?

RELTAB  DW      ?

RUNVARSIZ       EQU     $-RUNVAR



DATA    ENDS



STACK   SEGMENT WORD STACK

        DB      80H DUP (?)

STACK   ENDS



ZLOAD   SEGMENT

ZLOAD   ENDS

LOAD    EQU     ZLOAD



CODE    SEGMENT BYTE



        ASSUME  CS:CODE



LOCATE  PROC    FAR

        JMP     SHORT LOCSTRT



HEADER  DB      "Vers 2.00"



LOCSTRT:

        MOV     SI,81H

        PUSH    DS

        XOR     AX,AX

        PUSH    AX                      ;Push return address to DS:0



;Code to print header

;       PUSH    DS

;       MOV     DX,DATA

;       MOV     DS,DX

;       MOV     DX,OFFSET HEADER

;       MOV     AH,STD_CON_STRING_OUTPUT

;       INT     21H

;       POP     DS



;----- Check Version Number --------------------------------------------;

        mov     ah,Get_Version

        int     21h

        cmp     al,2

        jge     vers_ok                         ; version >= 2, enter locate

        push    ds

        mov     dx,data

        mov     ds,dx

        mov     dx,offset bad_vers_err

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        pop     ds

        ret                                     ;long return to DOS



;-----------------------------------------------------------------------;

vers_ok:





        MOV     BX,WORD PTR DS:2        ;Get size of memory

        MOV     DX,DATA

        MOV     ES,DX



        assume  es:data



;-----------------------------------------------------------------------;



;----- Get the first file name

        call    kill_bl

        jnc     sj01

        mov     ds,dx

        jmp     bad_file

sj01:

        mov     di,offset file1

sj0:

        lodsb                           ;get character of file name

        cmp     al,' '

        je      sj2

        cmp     al,0dh

        je      sj2

        cmp     al,'.'                  ;an extension separator found?

        jne     sj1

        mov     es:[per1],-1

sj1:

        stosb

        jmp     short sj0

sj2:

        dec     si

        mov     byte ptr es:[di],00h    ;nul terminate the filename

        call    kill_bl

        jc      no_second



;----- Get the second file name

        mov     di,offset file2

sj3:

        lodsb                           ;get character of file name

        cmp     al,' '

        je      sj5

        cmp     al,0dh

        je      sj5

        cmp     al,'.'                  ;an extension separator found?

        jne     sj4

        mov     es:[per2],-1

sj4:

        stosb

        jmp     short sj3

sj5:

        mov     byte ptr es:[di],00h     ;nul terminate

        jmp     short check_ext



;----- Copy file1 to file2

no_second:

        mov     ds,dx



        assume  ds:data



        mov     si,offset file1

        mov     di,offset file2

sj6:

        lodsb

        cmp     al,'.'

        je      sj7

        cmp     al,00h

        je      sj7

        stosb

        jmp     short sj6

sj7:

        mov     byte ptr [di],00h



;----- Check that files have an extension, otherwise set default

check_ext:

        mov     ds,dx



        assume  ds:data



        cmp     [per1],-1

        je      file1_ok

        mov     si,offset file1

sj8:

        lodsb

        cmp     al,00h

        jne     sj8

        mov     di,si

        mov     si,offset file1_ext

        call    put_ext



file1_ok:

        cmp     [per2],-1

        je      file2_ok

        mov     si,offset file2

sj9:

        lodsb

        cmp     al,00h

        jne     sj9

        mov     di,si

        mov     si,offset file2_ext

        call    put_ext

        jmp     short file2_ok



;----- Fill in the default extent

put_ext proc    near

        dec     di

        mov     cx,5                    ;move extent: period,extent,null

        rep     movsb

        ret

put_ext endp



;----- Find the first non-blank

kill_bl proc    near

        cld

sj10:

        lodsb

        cmp     al,' '

        je      sj10

        dec     si

        cmp     al,0dh

        clc

        jne     sj11

        stc

sj11:

        ret

kill_bl endp



file2_ok:



;-----------------------------------------------------------------------;



        mov     dx,offset file1

        mov     ah,open

        mov     al,0                    ;ror reading only

        INT     21H                     ;Open input file

        jc      bad_file

        mov     [handle1],ax

        jmp     exeload



bad_file:

        MOV     DX,OFFSET NOTFND

xERROR:

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        RET                             ;FAR return to MS-DOS

TOOBIG:

        MOV     DX,OFFSET NOROOM

        JMP     xERROR

BADEXE:

        MOV     DX,OFFSET CANTFIX

ERRORJ: JMP     xERROR



EXELOAD:

        MOV     DX,OFFSET RUNVAR        ;Read header in here

        MOV     CX,RUNVARSIZ            ;Amount of header info we need

        push    bx

        mov     bx,[handle1]

        MOV     AH,read

        INT     21H                      ;Read in header

        pop     bx

        CMP     [RELPT],5A4DH           ;Check signature word

        JNZ     BADEXE

        MOV     AX,[HEADSIZ]            ;size of header in paragraphs

        ADD     AX,31                   ;Round up first

        CMP     AX,1000H                ;Must not be >=64K

        JAE     TOOBIG

        AND     AX,NOT 31

        MOV     CL,4

        SHL     AX,CL                   ;Header size in bytes



        push    dx

        push    cx

        push    ax

        push    bx

        mov     dx,ax

        xor     cx,cx

        mov     al,0

        mov     bx,[handle1]

        mov     ah,lseek

        int     21h

        pop     bx

        pop     ax

        pop     cx

        pop     dx



        XCHG    AL,AH

        SHR     AX,1                    ;Convert to pages

        MOV     DX,[PAGES]              ;Total size of file in 512-byte pages

        SUB     DX,AX                   ;Size of program in pages

        CMP     DX,80H                  ;Fit in 64K?

        JAE     TOOBIG

        XCHG    DH,DL

        SHL     DX,1                    ;Convert pages to bytes

        MOV     AX,[LASTP]              ;Get count of bytes in last page

        OR      AX,AX                   ;If zero, use all of last page

        JZ      WHOLEP



        IF      OLDLINK

        CMP     AX,4                    ;Produced by old linker?

        JZ      WHOLEP                  ;If so, use all of last page too

        ENDIF



        SUB     DX,200H                 ;Subtract last page

        ADD     DX,AX                   ;Add in byte count for last page

WHOLEP:

        MOV     [SIZ],DX

        ADD     DX,15

        SHR     DX,CL                   ;Convert bytes to paragraphs

        MOV     BP,LOAD

        ADD     DX,BP                   ;Size + start = minimum memory (paragr.)

        CMP     DX,BX                   ;Enough memory?

        JA      TOOBIG

        MOV     DX,OFFSET CANTFIX

        MOV     AX,[INITSS]

        OR      AX,[INITSP]

        OR      AX,[INITCS]

ERRORNZ:

        jz      xj

        JMP     ERRORJ                  ;Must not have SS, SP, or CS to init.

xj:     MOV     AX,[INITIP]

        OR      AX,AX                   ;If IP=0, do binary fix

        JZ      BINFIX

        CMP     AX,100H                 ;COM file must be set up for CS:100

        JNZ     ERRORNZ



        push    dx

        push    cx

        push    ax

        push    bx

        mov     dx,100h                 ;chop off first 100h

        xor     cx,cx

        mov     al,1                    ;seek from current position

        mov     bx,[handle1]

        mov     ah,lseek

        int     21h

        pop     bx

        pop     ax

        pop     cx

        pop     dx



        SUB     [SIZ],AX                ;And count decreased size

        CMP     [RELCNT],0              ;Must have no fixups

        JNZ     ERRORNZ

BINFIX:

        XOR     BX,BX                   ;Initialize fixup segment

;See if segment fixups needed

        CMP     [RELCNT],0

        JZ      LOADEXE

GETSEG:

        MOV     DX,OFFSET PROMPT

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        MOV     AH,STD_CON_STRING_INPUT

        MOV     DX,OFFSET INBUF

        INT     21H                      ;Get user response

        MOV     DX,OFFSET CRLF

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        MOV     SI,OFFSET INBUF+2

        MOV     BYTE PTR [SI-1],0       ;Any digits?

        JZ      GETSEG

DIGLP:

        LODSB

        SUB     AL,"0"

        JC      DIGERR

        CMP     AL,10

        JB      HAVDIG

        AND     AL,5FH                  ;Convert to upper case

        SUB     AL,7

        CMP     AL,10

        JB      DIGERR

        CMP     AL,10H

        JAE     DIGERR

HAVDIG:

        SHL     BX,1

        SHL     BX,1

        SHL     BX,1

        SHL     BX,1

        OR      BL,AL

        JMP     DIGLP



DIGERR:

        CMP     BYTE PTR [SI-1],0DH     ;Is last char. a CR?

        JNZ     GETSEG

LOADEXE:

        XCHG    BX,BP                   ;BX has LOAD, BP has fixup



        MOV     CX,[SIZ]

        MOV     AH,read

        push    di

        mov     di,[handle1]

        PUSH    DS

        MOV     DS,BX

        XOR     DX,DX

        push    bx

        mov     bx,di

        INT     21H                     ;Read in up to 64K

        pop     bx

        POP     DS

        pop     di

        Jnc     HAVEXE                  ;Did we get it all?

        MOV     DX,OFFSET RDBAD

        jmp     xERROR                   ;Non fatal, print warning

HAVEXE:

        CMP     [RELCNT],0              ;Any fixups to do?

        JZ      STORE

        MOV     AX,[RELTAB]             ;Get position of table



        push    dx

        push    cx

        push    ax

        push    bx

        mov     dx,ax

        xor     cx,cx

        mov     al,0

        mov     bx,[handle1]

        mov     ah,lseek

        int     21h

        pop     bx

        pop     ax

        pop     cx

        pop     dx



        MOV     DX,OFFSET RELPT         ;4-byte buffer for relocation address

RELOC:

        MOV     DX,OFFSET RELPT         ;4-byte buffer for relocation address

        MOV     CX,4

        MOV     AH,read

        push    bx

        mov     bx,[handle1]

        INT     21H                      ;Read in one relocation pointer

        pop     bx

        Jnc     RDCMP

        JMP     BADEXE

RDCMP:

        MOV     DI,[RELPT]              ;Get offset of relocation pointer

        MOV     AX,[RELSEG]             ;Get segment

        ADD     AX,BX                   ;Bias segment with actual load segment

        MOV     ES,AX

        ADD     ES:[DI],BP              ;Relocate

        DEC     [RELCNT]                ;Count off

        JNZ     RELOC

STORE:

        MOV     AH,CREAT

        MOV     DX,OFFSET file2

        xor     cx,cx

        INT     21H

        Jc      MKERR

        mov     [handle2],ax

        MOV     CX,[SIZ]

        MOV     AH,write

        push    di

        mov     di,[handle2]

        PUSH    DS

        MOV     DS,BX

        XOR     DX,DX                   ;Address 0 in segment

        push    bx

        mov     bx,di

        INT     21H

        pop     bx

        POP     DS

        pop     di

        Jc      WRTERR                  ;Must be zero if more to come

        MOV     AH,CLOSE

        push    bx

        mov     bx,[handle2]

        INT     21H

        pop     bx

        RET



WRTERR:

        MOV     DX,OFFSET FULL

        JMP     xERROR

MKERR:

        MOV     DX,OFFSET DIRFULL

        JMP     xERROR



LOCATE  ENDP

CODE    ENDS

        END     LOCATE

                                                                                    