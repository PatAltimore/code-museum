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
description: "This file contains the source code for EXE2BIN, a utility in MS-DOS v2.0 that converts executable files (.EXE) into binary files (.BIN). It showcases early 1980s assembly programming techniques and the evolution of MS-DOS under Microsoft's stewardship."

summary:
  - point: "Introduces memory and file handling techniques specific to MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates the use of interrupt-driven system calls for file I/O"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Highlights constraints of early PC hardware, such as 64KB memory limits"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Reflects the influence of Unix-like systems on MS-DOS v2.0 design"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Shows Tim Paterson's and Microsoft's early contributions to PC software"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "runvar-memory-layout"
    line_start: 133
    line_end: 135
    title: "Defining memory layout for runtime variables"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines the memory layout for runtime variables, such as the relocation pointer (RELPT) and relocation segment (RELSEG). These variables are crucial for managing the relocation of executable code during the conversion process. In the early 1980s, memory management was a critical concern due to the limited resources of the IBM PC, which typically had 64KB to 640KB of RAM. The design reflects the constraints of the time, where every byte had to be carefully allocated and tracked. Tim Paterson, who originally developed 86-DOS, laid the groundwork for these memory handling techniques, which were later refined by Microsoft engineers. This approach to memory layout influenced subsequent DOS utilities and demonstrated the importance of efficient memory use in early PC software."
  - id: "locate-procedure-entry"
    line_start: 197
    line_end: 203
    title: "Entry point for the LOCATE procedure"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The LOCATE procedure serves as the main entry point for the EXE2BIN utility. It begins by jumping to the LOCSTRT label, which initializes the program's execution. The inclusion of a header string ('Vers 2.00') highlights the importance of versioning, a practice that became increasingly vital as software complexity grew. In the early 1980s, software developers often worked under tight deadlines and hardware constraints, making clear versioning essential for debugging and compatibility. The LOCATE procedure encapsulates the structured approach to program initialization that was characteristic of MS-DOS utilities, setting the stage for subsequent operations like file handling and memory checks."
  - id: "locstrt-version-check"
    line_start: 207
    line_end: 265
    title: "Checking DOS version compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The LOCSTRT section performs a critical check to ensure the running version of DOS is compatible with the utility. It uses interrupt 21h to retrieve the DOS version and compares it against the minimum required version (2.0). If the version is insufficient, an error message is displayed, and the program exits. This reflects the growing need for backward compatibility and error handling in software as DOS evolved. By 1983, MS-DOS had become the standard operating system for the IBM PC and its clones, making version checks essential for maintaining compatibility across diverse hardware configurations. The error handling mechanism here also underscores the importance of user feedback in early software design, ensuring that users understood why a program might fail."
  - id: "sj0-file-name-parsing"
    line_start: 303
    line_end: 319
    title: "Parsing the first file name"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section parses the first file name provided by the user, character by character, and stores it in a buffer. It checks for spaces, carriage returns, and the presence of a file extension separator ('.'). If an extension is found, a flag is set to indicate its presence. File name parsing was a common task in DOS utilities, as filenames were limited to the 8.3 format (eight characters for the name and three for the extension). The code reflects the meticulous attention to detail required to handle user input in assembly language, where even simple tasks like string parsing demanded careful management of memory and registers. This approach influenced the design of later utilities and demonstrated the challenges of working within the constraints of early PC operating systems."
  - id: "exe-header-validation"
    line_start: 571
    line_end: 673
    title: "Validating the EXE file header"
    wikipedia_url: "https://en.wikipedia.org/wiki/Executable"
    image_url: ""
    image_caption: ""
    content: "The EXELOAD section validates the header of the input EXE file to ensure it is properly formatted and compatible with the conversion process. It checks the signature word (5A4Dh) and calculates the size of the header in bytes, rounding up to the nearest paragraph (16 bytes). If the header size exceeds 64KB, an error is triggered. This validation step reflects the structured nature of the EXE file format, which was introduced with MS-DOS to support relocatable code and larger programs. The EXE format was a significant advancement over the simpler COM format, enabling more sophisticated software development. By enforcing strict validation, the EXE2BIN utility ensured reliability and compatibility, laying the groundwork for the widespread adoption of the EXE format in DOS applications."
  - id: "relocation-fixups"
    line_start: 915
    line_end: 933
    title: "Handling relocation fixups"
    wikipedia_url: "https://en.wikipedia.org/wiki/Relocation_(computing)"
    image_url: ""
    image_caption: ""
    content: "The RELOC section processes relocation fixups, adjusting memory addresses in the executable code to match the actual load segment. It reads relocation pointers from the input file and applies them to the loaded code, ensuring that all addresses are correctly mapped. Relocation was a key feature of the EXE file format, allowing programs to be loaded into different memory locations without modification. This capability was essential for multitasking and memory management in early PCs, where resources were limited. The meticulous handling of relocation fixups in EXE2BIN demonstrates the complexity of assembly programming and the importance of precise memory operations in early software development. These techniques influenced the design of later operating systems and file formats, highlighting the foundational role of MS-DOS in the evolution of PC computing."
  - id: "store-output-file"
    line_start: 951
    line_end: 1003
    title: "Writing the converted binary file"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_format"
    image_url: ""
    image_caption: ""
    content: "The STORE section creates the output binary file (.BIN) and writes the converted data to it. It uses interrupt 21h to handle file creation and writing, ensuring compatibility with MS-DOS system calls. The code carefully manages file handles and checks for errors during the write process, providing feedback to the user if issues arise. Writing binary files was a common task in DOS utilities, enabling users to create compact, memory-efficient programs for specific tasks. The STORE section reflects the practical focus of MS-DOS utilities, which were designed to empower users with tools for managing files and memory. This functionality contributed to the popularity of MS-DOS as a versatile and user-friendly operating system, setting the stage for its dominance in the PC market."

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