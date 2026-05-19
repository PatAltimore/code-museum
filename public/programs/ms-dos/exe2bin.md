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
description: "The EXE2BIN utility converts MS-DOS executable files (.EXE) into simpler binary files (.BIN), reflecting the constraints and design philosophy of early PC software development."

summary:
  - point: "Implements EXE to BIN conversion for MS-DOS 2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduces memory and file handling techniques for constrained hardware"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Reflects the transition from 86-DOS to MS-DOS with Unix-inspired features"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"

enhancements:
  - id: "runvar-memory-layout"
    line_start: 133
    line_end: 135
    title: "RUNVAR: Memory layout for EXE headers"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The RUNVAR section defines memory locations for storing the header of an EXE file during processing. It includes variables like RELPT (relocation pointer) and RELSEG (relocation segment). This layout is crucial for interpreting the structure of an EXE file and preparing it for conversion. In 1983, memory management was a critical concern due to the limited RAM available on IBM PCs (typically 64KB to 256KB). By organizing data into fixed memory locations, developers ensured predictable behavior and avoided runtime errors. This approach influenced later file conversion utilities and memory management techniques in DOS-based applications."
  - id: "locate-procedure-entry"
    line_start: 197
    line_end: 203
    title: "LOCATE: Entry point for EXE2BIN"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The LOCATE procedure serves as the entry point for the EXE2BIN utility. It begins by jumping to LOCSTRT, where the header is printed and the DOS version is checked. This reflects the importance of compatibility in early MS-DOS utilities, as version mismatches could lead to errors or crashes. The inclusion of a version check highlights the evolving nature of DOS, with new features introduced in version 2.0. This practice of validating system compatibility became standard in software development, ensuring that programs could adapt to different environments or fail gracefully."
  - id: "version-checking"
    line_start: 207
    line_end: 265
    title: "LOCSTRT: Checking DOS version compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The LOCSTRT section checks the version of MS-DOS using interrupt 21h, function Get_Version. If the version is less than 2.0, an error message is displayed, and the program exits. This reflects the transition from 86-DOS to MS-DOS, as version 2.0 introduced significant changes inspired by Unix, such as hierarchical directories and improved file handling. The ability to check and enforce version compatibility ensured that utilities like EXE2BIN could leverage new system calls and features without risking instability on older systems. This technique influenced later software design, where version checks became a standard practice for ensuring compatibility across diverse environments."
  - id: "file-name-parsing"
    line_start: 303
    line_end: 375
    title: "Parsing file names: Handling extensions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Filename_extension"
    image_url: ""
    image_caption: ""
    content: "This section parses the names of the input and output files, ensuring they are properly formatted and include extensions. If an extension is missing, a default is applied (.EXE for the input file and .BIN for the output file). Parsing file names was a common challenge in early software development, as users often provided incomplete or ambiguous input. By automating the addition of extensions, EXE2BIN reduced user error and improved usability. This approach influenced later utilities and operating systems, where default behaviors and error handling became integral to user-friendly design."
  - id: "exe-header-validation"
    line_start: 571
    line_end: 673
    title: "EXELOAD: Validating the EXE header"
    wikipedia_url: "https://en.wikipedia.org/wiki/Executable"
    image_url: ""
    image_caption: ""
    content: "The EXELOAD procedure reads and validates the header of the input EXE file. It checks the signature word (5A4Dh, indicating an EXE file) and calculates the size of the header in bytes. This validation ensures that the file is correctly formatted and compatible with the conversion process. Header validation was critical in early software development, as corrupted or malformed files could cause crashes or unpredictable behavior. By implementing robust checks, EXE2BIN set a precedent for reliability and error handling in file processing utilities. This technique influenced later tools and operating systems, where file validation became a standard feature."
  - id: "relocation-processing"
    line_start: 915
    line_end: 933
    title: "RELOC: Handling relocation pointers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Relocation_(computing)"
    image_url: ""
    image_caption: ""
    content: "The RELOC section processes relocation pointers in the EXE file, adjusting memory addresses to account for the program's actual load segment. Relocation was a key feature of the EXE format, allowing programs to be loaded at different memory locations without modification. This flexibility was essential for multitasking and memory management in constrained environments. The relocation logic in EXE2BIN reflects the careful attention to detail required in early software development, where efficient use of limited resources was paramount. This approach influenced later executable formats and loaders, such as ELF in Unix-based systems."
  - id: "binary-file-creation"
    line_start: 951
    line_end: 1003
    title: "STORE: Writing the BIN file"
    wikipedia_url: "https://en.wikipedia.org/wiki/Binary_file"
    image_url: ""
    image_caption: ""
    content: "The STORE procedure creates the output BIN file and writes the converted binary data to it. It uses interrupt 21h functions for file creation and writing, ensuring compatibility with MS-DOS system calls. By converting EXE files to BIN format, EXE2BIN enabled developers to create simpler, more portable programs that could run directly in memory without the overhead of the EXE format. This utility reflects the pragmatic approach of early software development, where tools were designed to address specific needs and constraints. The concept of file format conversion influenced later utilities and development environments, such as compilers and linkers."
  - id: "finalizing-exe2bin-utility"
    line_start: 1021
    line_end: 1025
    title: "Finalizing the EXE2BIN Utility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These closing lines mark the end of the LOCATE subroutine and the CODE segment in EXE2BIN.ASM. The LOCATE ENDP directive signals the completion of the LOCATE subroutine, while CODE ENDS formally ends the code segment. The END LOCATE directive specifies the program's entry point, ensuring that execution begins at the LOCATE subroutine when the utility runs. In the early 1980s, software distribution was constrained by hardware limitations, including storage media like floppy disks and the need for compact, efficient file formats. EXE2BIN was designed to convert executable files (.EXE) into simpler binary files (.BIN), which were easier to load directly into memory. This tool was crucial for developers working on embedded systems, boot loaders, and other low-level software that required raw binary formats. Tim Paterson's work on MS-DOS and its utilities like EXE2BIN reflects the pragmatic approach of early PC software development. Developers often had to create tools to bridge gaps in functionality, enabling broader adoption of the operating system. Microsoft’s decision to license MS-DOS widely ensured that utilities like EXE2BIN became part of the standard toolkit for OEMs and developers. The influence of EXE2BIN and similar utilities extended beyond MS-DOS. They shaped workflows for software development and distribution in the 1980s, laying the groundwork for modern build systems and file format converters. While EXE2BIN itself is largely obsolete today, its role in early PC history highlights the ingenuity required to adapt software to the constraints of the era."

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