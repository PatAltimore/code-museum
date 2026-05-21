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
description: "EXE2BIN.ASM is a utility from MS-DOS 2.0 that converts executable files (.EXE) into binary files (.BIN), showcasing early assembly programming techniques for file manipulation and memory management."

summary:
  - point: "Introduces file handling via DOS interrupts"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates relocation table processing for executable files"
    link: "https://en.wikipedia.org/wiki/Relocation_(computer_programming)"
    link_label: "Relocation"
  - point: "Uses memory constraints to optimize file conversion"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Highlights compatibility with older linkers"
    link: "https://en.wikipedia.org/wiki/Linker_(computing)"
    link_label: "Linker"
  - point: "Reflects the transition from 86-DOS to MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/86-DOS"
    link_label: "86-DOS"

enhancements:
  - id: "runvar-memory-variables"
    line_start: 133
    line_end: 165
    title: "Memory Variables for Relocation Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Relocation_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The RUNVAR section defines memory locations used for relocation operations during the conversion of .EXE files to .BIN files. These variables, such as RELPT and RELSEG, store critical information about the executable's relocation table and memory layout. In 1983, memory management was a significant challenge due to the limited resources of early PCs, such as the IBM PC with its 640KB memory limit. This section reflects the programmer's need to handle relocation efficiently to ensure the converted binary files function correctly. The relocation process, which adjusts memory addresses in an executable to match its load location, was crucial for compatibility across different systems. This technique influenced later software development tools and operating systems, which adopted similar approaches for handling relocatable code."
  - id: "locate-version-check"
    line_start: 197
    line_end: 267
    title: "Version Check for DOS Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The LOCATE procedure begins by checking the version of DOS using interrupt 21h, function AH=30h. If the DOS version is less than 2.0, the program displays an error message and exits. This reflects the transition from 86-DOS to MS-DOS 2.0, which introduced significant improvements, including better file handling and system calls. The version check ensured compatibility with the newer features of MS-DOS 2.0, such as subdirectories and file handles. At the time, backward compatibility was a critical concern, as many users were still running older versions of DOS. This approach influenced future software development, where version checks became standard practice to ensure compatibility and prevent runtime errors."
  - id: "file-name-parsing"
    line_start: 301
    line_end: 485
    title: "Parsing File Names with Assembly Loops"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This section parses file names provided by the user, storing them in memory while handling spaces and extensions. It uses assembly loops and conditional jumps to process each character, checking for spaces, carriage returns, and periods to identify extensions. In the early 1980s, user input was typically raw and unstructured, requiring programs to handle edge cases like missing extensions or invalid characters. The parsing logic here ensures that file names are properly formatted before proceeding with the conversion process. This technique, though basic by today's standards, was foundational for file handling in early operating systems. It influenced later developments in command-line utilities and scripting languages, where robust input parsing became a critical feature."
  - id: "exe-header-validation"
    line_start: 571
    line_end: 699
    title: "Validating and Adjusting EXE Headers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Executable"
    image_url: ""
    image_caption: ""
    content: "The EXELOAD procedure reads the header of the .EXE file and validates its signature (5A4Dh, the 'MZ' magic number). It calculates the header size and adjusts it to ensure it fits within memory constraints. This validation step was crucial for ensuring the integrity of the executable file before converting it to a binary format. The 'MZ' signature, introduced by Mark Zbikowski, became a standard for DOS executables. This section reflects the meticulous attention to detail required in early software development, where even minor errors in file headers could lead to system crashes. The techniques used here influenced later file format standards and tools for analyzing and manipulating executables, such as PE (Portable Executable) format in Windows."
  - id: "relocation-table-processing"
    line_start: 915
    line_end: 949
    title: "Processing Relocation Tables for Binary Conversion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Relocation_(computer_programming)"
    image_url: ""
    image_caption: ""
    content: "The RELOC procedure processes the relocation table of the .EXE file, adjusting memory addresses to match the load location of the binary file. It reads relocation pointers from the file and applies the necessary adjustments to ensure the binary file functions correctly. Relocation was a critical operation in early computing, as programs needed to run in different memory locations depending on system configuration. This section showcases the programmer's deep understanding of memory management and file structures. The relocation logic here influenced later developments in dynamic linking and loading, where similar techniques are used to adjust memory addresses at runtime. It also laid the groundwork for modern executable formats that support relocatable code."
  - id: "binary-file-creation"
    line_start: 951
    line_end: 1013
    title: "Creating and Writing Binary Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_file"
    image_url: ""
    image_caption: ""
    content: "The STORE procedure creates a new .BIN file and writes the converted binary data to it. It uses DOS interrupts for file creation (AH=3Ch) and writing (AH=40h), ensuring compatibility with the operating system's file handling mechanisms. This section reflects the constraints of early PCs, where disk operations were slow and error-prone. The careful handling of file creation and writing here ensured the reliability of the conversion process. The techniques used in this section influenced later file manipulation utilities and programming libraries, where robust error handling and compatibility with operating system APIs became standard practice."
  - id: "final-directives-and-program-entry"
    line_start: 1021
    line_end: 1025
    title: "Why These Final Lines Matter"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These closing lines of EXE2BIN.ASM serve as administrative markers in the assembly file. The `LOCATE ENDP` directive signals the end of the LOCATE subroutine, while `CODE ENDS` marks the conclusion of the code segment. Finally, the `END LOCATE` directive specifies the program's entry point, ensuring that execution begins at the LOCATE routine when the binary is loaded. In the context of MS-DOS development, these directives were essential for organizing and structuring assembly code. The EXE2BIN utility itself was a critical tool for developers working on early IBM PCs and compatible systems. It converted .EXE files (which included relocation information and could be loaded anywhere in memory) into .COM files (which were simpler, single-segment binaries loaded at a fixed memory address). This conversion was vital for creating compact, efficient programs that could run on systems with limited resources. By 1983, when MS-DOS 2.0 was released, the computing landscape had evolved significantly. Developers were transitioning from the constrained environments of CP/M and early DOS to more sophisticated systems inspired by Unix. Yet tools like EXE2BIN remained indispensable for bridging the gap between high-level programming and the raw binary execution required by the hardware. The influence of this utility extended beyond its immediate use. The principles of binary conversion and memory management it embodied became foundational for later software tools and operating systems. Developers working on compilers, linkers, and loaders for modern systems continue to grapple with similar challenges, albeit on a vastly larger scale. EXE2BIN's role in shaping the early PC software ecosystem underscores the ingenuity required to make computing accessible and practical in its formative years."

---

```asm
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


```
