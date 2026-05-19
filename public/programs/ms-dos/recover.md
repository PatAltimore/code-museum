---
title: "RECOVER.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/RECOVER.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/RECOVER.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "recover"
order: 41
description: "This file contains the MS-DOS v2.0 RECOVER utility, designed to rebuild corrupted directories and file systems. It showcases early 1980s assembly programming techniques and reflects Microsoft's adaptation of Unix-inspired features into DOS."

summary:
  - point: "Introduces FAT manipulation routines for directory recovery"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Demonstrates early use of interrupt-driven I/O for disk operations"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Reflects Unix-inspired directory handling in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Chris Peters contributed to this utility, showcasing collaboration in early Microsoft development"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Highlights the challenges of working within constrained hardware environments"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "recover-entry-point"
    line_start: 107
    line_end: 149
    title: "Recover: Entry Point to Directory Repair"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'recover' label serves as the entry point for the RECOVER utility. It begins with a jump to 'rec_start', which initializes the program and checks the DOS version compatibility. This utility was written by Chris Peters in April 1982 during Microsoft's efforts to enhance MS-DOS for broader OEM adoption. At the time, directory corruption was a common issue due to hardware limitations and the lack of robust file systems. This utility reflects Microsoft's focus on reliability and usability in the early PC era. The RECOVER program's ability to rebuild directories influenced later utilities and tools for file system repair, including CHKDSK and SCANDISK."
  - id: "print-routine"
    line_start: 155
    line_end: 157
    title: "Print Routine: Console Output Simplified"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "This short routine uses the BIOS interrupt 21h to output strings to the console. It demonstrates how MS-DOS leveraged BIOS calls for basic I/O operations, simplifying development for early PC software. The reliance on BIOS interrupts was a hallmark of early DOS programs, ensuring compatibility across different hardware configurations. This approach laid the groundwork for standardized I/O handling in operating systems, influencing later DOS versions and even early Windows."
  - id: "convert-numeric-processing"
    line_start: 161
    line_end: 171
    title: "Convert: Numeric Processing for FAT Entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'convert' routine initializes registers and prepares for numeric processing related to FAT (File Allocation Table) entries. FAT was integral to MS-DOS's file system, enabling efficient storage and retrieval of files. This routine reflects the low-level manipulation required to interact with FAT structures directly. At the time, FAT was a groundbreaking file system for its simplicity and efficiency, influencing not only subsequent DOS versions but also other operating systems like Windows and embedded systems."
  - id: "convlp-loop"
    line_start: 173
    line_end: 211
    title: "Convlp: Iterative FAT Manipulation"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'convlp' loop processes FAT entries iteratively, using bitwise operations and arithmetic to manipulate directory data. This section showcases the precision required in assembly programming to handle file system structures. The loop's design reflects the constraints of early PCs, where memory and processing power were limited. FAT's design, including routines like this, became a cornerstone of file systems, influencing not only MS-DOS but also modern storage solutions like SD cards and USB drives."
  - id: "getfat-read-fat-entry"
    line_start: 281
    line_end: 307
    title: "Getfat: Reading FAT Entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'getfat' routine reads entries from the File Allocation Table, a critical part of MS-DOS's file system. It calculates the location of the desired FAT entry using bitwise arithmetic and retrieves the data. This routine highlights the complexity of managing file systems in assembly language, where every operation must be explicitly defined. The FAT system was revolutionary for its time, enabling efficient file storage and retrieval. Techniques like those in 'getfat' influenced later file systems, including FAT32 and NTFS."
  - id: "setfat-write-fat-entry"
    line_start: 317
    line_end: 363
    title: "Setfat: Writing to the FAT"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'setfat' routine writes data to the File Allocation Table, updating entries as needed. It uses bitwise operations to ensure the integrity of the FAT structure while accommodating the constraints of early PC hardware. This routine reflects the challenges of designing file systems for the limited memory and processing power of the IBM PC. The techniques used here influenced not only subsequent DOS versions but also the development of more advanced file systems like FAT32 and exFAT."
  - id: "rec-start-initialization"
    line_start: 461
    line_end: 489
    title: "Rec_start: Program Initialization and Version Check"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'rec_start' routine initializes the RECOVER utility, printing a header and checking the DOS version for compatibility. This reflects Microsoft's focus on ensuring their software worked across different OEM implementations of DOS. The version check ensures that the utility doesn't run on incompatible systems, preventing potential errors. This approach to compatibility influenced later software development practices, emphasizing the importance of version control and system requirements."
  - id: "gotparm-command-line-parsing"
    line_start: 541
    line_end: 567
    title: "Gotparm: Parsing Command-Line Input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The 'gotparm' routine parses command-line input to determine the user's desired operation. It resets the disk buffer queue and saves the current drive state. This reflects the importance of user input in early DOS utilities, where command-line interfaces were the primary means of interaction. Parsing routines like this laid the groundwork for more sophisticated input handling in later operating systems and applications."
  - id: "kill-bl-remove-blanks"
    line_start: 649
    line_end: 665
    title: "Kill_bl: Removing Blanks from Input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The 'kill_bl' routine removes blank spaces from the command-line input, ensuring clean and accurate parsing. This reflects the challenges of handling user input in early computing, where even minor errors could cause programs to fail. Techniques like this influenced the development of robust input validation methods in later software, improving reliability and user experience."
  - id: "drvok-disk-geometry-initialization"
    line_start: 1021
    line_end: 1107
    title: "Disk geometry initialization and FAT setup"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `drvok` subroutine initializes the disk geometry and sets up critical parameters for the File Allocation Table (FAT). It retrieves information such as the physical sector size, sectors per cluster, and the location of FAT and directory entries. These values are stored in memory for use by subsequent routines. At the time, MS-DOS relied heavily on the FAT file system, which was simple yet effective for managing files on floppy disks and early hard drives. This subroutine reflects the necessity of optimizing disk access and storage management in an era when storage capacities were measured in kilobytes or megabytes. The FAT system became a cornerstone of MS-DOS and influenced file systems in later operating systems, including Windows."
  - id: "recdsk-directory-construction"
    line_start: 1111
    line_end: 1115
    title: "Constructing a new directory structure"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `recdsk` routine begins the process of constructing a new directory structure for recovered files. It initializes pointers and counters that will be used to populate the directory with entries for files found during recovery. This approach demonstrates the importance of directory management in file recovery utilities, ensuring that recovered files are accessible to the user. The routine's simplicity underscores the constraints of early computing, where every byte of memory and disk space had to be carefully managed."
  - id: "step1-fat-entry-traversal"
    line_start: 1117
    line_end: 1123
    title: "Traversing FAT entries to locate clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `step1` routine traverses FAT entries to locate clusters associated with a file. By examining the FAT, the routine identifies the chain of clusters that make up a file's data. This technique is central to the FAT file system, which uses linked lists to represent file storage. The traversal highlights the efficiency of FAT in managing fragmented storage, a common issue on early disks. This approach influenced later file systems, which adopted similar mechanisms for handling fragmentation and file allocation."
  - id: "nam0-incrementing-file-names"
    line_start: 1173
    line_end: 1183
    title: "Incrementing file names for recovered files"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_naming"
    image_url: ""
    image_caption: ""
    content: "The `nam0` routine generates unique file names for recovered files by incrementing a numeric suffix. This ensures that each recovered file has a distinct name, avoiding conflicts in the directory. The naming convention, such as 'FILE0000REC,' reflects the limitations of the 8.3 filename format used in MS-DOS. This routine exemplifies the practical challenges of file recovery, where maintaining user accessibility and system integrity is paramount. The technique influenced later utilities and operating systems, which adopted similar strategies for handling recovered or temporary files."
  - id: "recfil-file-recovery-process"
    line_start: 1313
    line_end: 1327
    title: "Opening and recovering deleted files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_recovery"
    image_url: ""
    image_caption: ""
    content: "The `recfil` routine attempts to open deleted files and recover their data. It uses the FCB (File Control Block) interface to interact with the file system, a method inherited from CP/M and early DOS versions. If the file cannot be opened, an error message is displayed, and the recovery process halts. This routine highlights the challenges of data recovery, where corrupted or deleted files may not be fully accessible. The reliance on FCBs reflects the transitional phase of MS-DOS, which later moved to handle-based file I/O inspired by Unix."
  - id: "rest_dir-restore-directory-state"
    line_start: 1521
    line_end: 1553
    title: "Restoring directory and interrupt state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The `rest_dir` routine restores the directory and interrupt state after the recovery process. It ensures that the system returns to a consistent state, preserving the user's working directory and drive settings. This routine reflects the importance of system stability in utility programs, where unexpected changes could disrupt user workflows. The careful handling of interrupts and directory state demonstrates the attention to detail required in low-level programming, particularly in an operating system designed for diverse hardware configurations."
  - id: "testkanj-kanji-character-check"
    line_start: 1621
    line_end: 1637
    title: "Checking Kanji lead byte validity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The `TESTKANJ` routine checks whether a byte is a valid lead byte for Kanji characters. Kanji support was introduced in MS-DOS to accommodate Japanese-language systems, reflecting Microsoft's efforts to expand into international markets. This routine highlights the challenges of adapting software for non-English languages, particularly in handling multibyte character sets. The inclusion of Kanji support in MS-DOS influenced later operating systems, which integrated more robust internationalization features to support diverse languages and scripts."
  - id: "islead-kanji-lead-byte-detection"
    line_start: 1651
    line_end: 1661
    title: "Detecting Kanji lead bytes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The `ISLEAD` routine determines whether a byte is a Kanji lead byte, marking the start of a multibyte character. This functionality is crucial for processing Japanese text, where characters are represented by combinations of lead and trail bytes. The routine reflects the growing importance of internationalization in software development during the 1980s. Microsoft's support for Kanji in MS-DOS paved the way for broader language support in Windows and other operating systems, enabling global adoption of their software."

---

TITLE   RECOVER MS-DOS File/Disk Recovery Utility

;----------------------------------------------------------

;

;       Recover - Program to rebuild an ms.dos directory

;

;       Copyright 1982 by Microsoft Corporation

;       Written by Chris Peters, April 1982

;

;-----------------------------------------------------------

;

;REV 1.5 added header message ARR

;



FALSE   EQU     0

TRUE    EQU     NOT FALSE





IBMVER  EQU     true

KANJI   EQU     FALSE



bdos    equ     21h

boot    equ     20h

aread   equ     25h

awrite  equ     26h



        INCLUDE DOSSYM.ASM



;

cr      equ     0dh

lf      equ     0ah

;

fcb     equ     5ch



code    segment public

code    ends



const   segment public byte

const   ends



data    segment public byte

data    ends





dg      group   code,const,data



code    segment public

        assume  cs:dg,ds:dg,es:dg,ss:dg



        PUBLIC  PCRLF,PRINT,INT_23,convert

        EXTRN   dskwrt:NEAR,dskrd:NEAR,DSKERR:NEAR,report:NEAR



        org     100h



recover:jmp     rec_start



HEADER  DB      "Vers 1.50"



;-----------------------------------------------------------------------;

hardch  dd      ?



the_root db     0                       ;root directory flag



fudge   db      0                       ;directory changed flag

user_drive      db      0

drive   db      0





dirchar db      "/",0





userdir db      "/",0

        db      (dirstrlen) dup(0)



fname_buffer db 128 dup(0)

;-----------------------------------------------------------------------;



pcrlf:  mov     dx,offset dg: crlf

print:  mov     ah,STD_CON_STRING_OUTPUT

        int     bdos

pret:   ret

;

convert:push    bx

        xor     ax,ax

        mov     bx,ax

        mov     bp,ax

        mov     cx,32

convlp: shl     si,1

        rcl     di,1

        xchg    ax,bp

        call    convwrd

        xchg    ax,bp

        xchg    ax,bx

        call    convwrd

        xchg    ax,bx

        adc     al,0

        loop    convlp



        mov     cx,1810h

        xchg    dx,ax

        call    digit

        xchg    ax,bx

        call    outword

        mov     ax,bp

        call    outword

        pop     dx

        call    print

ret2:   ret

;

outword:push    ax

        mov     dl,ah

        call    outbyte

        pop     dx

outbyte:mov     dh,dl

        shr     dl,1

        shr     dl,1

        shr     dl,1

        shr     dl,1

        call    digit

        mov     dl,dh

digit:  and     dl,0fh

        jz      blankzer

        xor     cl,cl

blankzer:

        dec     ch

        and     cl,ch

        or      dl,30h

        sub     dl,cl

        cmp     dl,30h

        jl      ret2

        mov     ah,STD_CON_OUTPUT

        int     bdos

        ret

;

convwrd:adc     al,al

        daa

        xchg    al,ah

        adc     al,al

        daa

        xchg    al,ah

        ret

;

;       bx = fat[ax]

;

getfat: mov     bx,offset dg: fattbl

        push    ax

        mov     si,ax

        sar     ax,1

        pushf

        add     si,ax

        mov     bx,word ptr [bx][si]

        popf

        jnc     getfat1

        mov     cl,4

        shr     bx,cl

getfat1:and     bh,00001111b

        pop     ax

        mov     cx,secsiz

        ret

;

;       fat[ax] = dx

;

setfat: mov     bx,offset dg: fattbl

        push    ax

        push    dx

        mov     si,ax

        sar     ax,1

        pushf

        add     si,ax

        mov     ax,word ptr [bx][si]

        popf

        jnc     setfat2

        and     ax,000fh

        mov     cl,4

        shl     dx,cl

setfat1:or      ax,dx

        mov     word ptr [bx][si],ax

        pop     dx

        pop     ax

        ret



setfat2:and     ax,0f000h

        jmp     setfat1



load:   mov     dx,firfat

        mov     al,byte ptr fatnum

        mov     byte ptr fatcnt,al

        mov     al,byte ptr drive

        mov     cx,fatsiz

        mov     bx,offset dg: fattbl

ret66:  ret



readft: call    load

readit: call    dskrd

        cmp     [fndfat],0      ;save location of readable fat sector

        jnz     fdfat

        mov     [fndfat],dx

fdfat:  cmp     word ptr [bx+1],-1

        jz      ret66



        add     dx,cx           ;try to read the other fats

        dec     byte ptr fatcnt

        jnz     readit



        mov     dx,[fndfat]     ;see if any readable at all

        or      dx,dx

        jz      readft          ;if not disk is blown, keep trying

        call    dskrd

        ret



wrtfat: call    load

wrtit:  push    ax

        push    bx

        push    cx

        push    dx

        call    dskwrt

        pop     dx

        pop     cx

        pop     bx

        pop     ax



wrtok:  add     dx,cx

        dec     byte ptr fatcnt

        jnz     wrtit

        ret



printerr:

        call    print

        jmp     rabort





rec_start:



;Code to print header

;       PUSH    AX

;       MOV     DX,OFFSET DG:HEADER

;       CALL    print

;       POP     AX



DOSVER_HIGH     EQU  0200H   ;2.00 in hex

        PUSH    AX              ;Save DRIVE validity info

        MOV     AH,GET_VERSION

        INT     21H

        XCHG    AH,AL           ;Turn it around to AH.AL

        CMP     AX,DOSVER_HIGH

        JAE     OKDOS

GOTBADDOS:

        MOV     DX,OFFSET DG:BADVER

        CALL    PRINT

        INT     20H



OKDOS:  POP     AX



        cmp     al,0ffH

        JZ      BADDRVSPECJ

        mov     si,80h

        lodsb

        or      al,al

        jz      noparm

look:   lodsb

        cmp     al," "

        jz      look

        cmp     al,9

        jz      look

        cmp     al,13

        jnz     gotparm

noparm:

        jmp     noname



BADDRVSPECJ: JMP BADDRVSPEC



gotparm:

        mov     ah,DISK_RESET

        int     bdos                    ;empty buffer queue



        mov     ah,get_default_drive    ;save current drive

        int     21h

        mov     [user_drive],al



        mov     bx,fcb                  ;determine input command

        mov     al,[bx]

        dec     al

        cmp     al,-1

        jnz     drvok1

        mov     al,[user_drive]

drvok1:

        mov     [drive],al

        add     [drvlet],al

        add     [drvlet1],al

        mov     dx,offset dg: askmsg

        call    print

        mov     ah,STD_CON_INPUT_FLUSH

        mov     al,1                    ;wait for a key

        int     bdos



        cmp     al,17h

        jnz     drvok2

        mov     dx,offset dg: egomes

        jmp     printerr

egomes: db      "Chris Peters helped with the new dos!",cr,lf

        db      "Microsoft rules ok$"



drvok2:

        IF      IBMVER

        MOV     AL,DRIVE                ;This is for ibm's single drive sys

        PUSH    DS

        MOV     BX,50H

        MOV     DS,BX

        MOV     DS:(BYTE PTR 4),AL              ;Indicate drive changed

        POP     DS

        ENDIF



;----- Process Pathnames -----------------------------------------------;

        mov     ax,(char_oper shl 8)    ;get switch character

        int     21h

        cmp     dl,"/"

        jnz     slashok                 ;if not / , then not PC

        mov     [dirchar],"\"           ;in PC, dir separator = \

        mov     [userdir],"\"



slashok:

        mov     si,81h                  ;point to cammand line

        mov     di,offset dg: fname_buffer

        xor     cx,cx                   ;zero pathname length



kill_bl:

        lodsb                           ;get rid of blanks

        cmp     al,9

        je      kill_bl

        cmp     al,' '

        je      kill_bl

        cmp     al,13                   ;A carriage return?

        jne     next_char

        jmp     noname                  ;yes, file name missing



next_char:

        stosb                           ;put patname in buffer

        inc     cx

        lodsb

        cmp     al,' '

        je      name_copied

        cmp     al,9

        je      name_copied

        cmp     al,13                   ; a CR ?

        jne     next_char



name_copied:

        mov     byte ptr [di],0         ;nul terminate the pathname

        dec     di                      ;adjust to the end of the pathname



;----- Scan for directory ----------------------------------------------;



        IF      KANJI

        mov     dx,offset dg: [fname_buffer]

        PUSH    DX

        PUSH    DI

        MOV     BX,DI

        MOV     DI,DX

DELLOOP:

        CMP     DI,BX

        JZ      GOTDELE

        MOV     AL,[DI]

        INC     DI

        CALL    TESTKANJ

        JZ      NOTKANJ11

        INC     DI

        JMP     DELLOOP



NOTKANJ11:

        cmp     al,[dirchar]

        JNZ     DELLOOP

        MOV     DX,DI           ;Point to char after '/'

        DEC     DX

        DEC     DX              ;Point to char before '/'

        JMP     DELLOOP



GOTDELE:

        MOV     DI,DX

        POP     AX              ;Initial DI

        POP     DX

        SUB     AX,DI           ;Distance moved

        SUB     CX,AX           ;Set correct CX

        CMP     DX,DI

        JB      sja             ;Found a pathsep

        JA      sjb             ;Started with a pathsep, root

        MOV     AX,[DI]

        CALL    TESTKANJ

        JNZ     same_dirj

        XCHG    AH,AL

        cmp     al,[dirchar]

        jz      sja             ;One character directory

same_dirj:

        ELSE

        mov     al,[dirchar]            ;get directory separator character

        std                             ;scan backwards

        repnz   scasb                   ;(cx has the pathname length)

        cld                             ;reset direction, just in case

        jz      sja

        ENDIF



        jmp     same_dir                ;no dir separator char. found, the

                                        ; file is in the current directory

                                        ; of the corresponding drive. Ergo,

                                        ; the FCB contains the data already.



sja:

        jcxz    sjb                     ;no more chars left, it refers to root

        cmp     byte ptr [di],':'       ;is the prvious character a disk def?

        jne     not_root

sjb:

        mov     [the_root],01h          ;file is in the root

not_root:

        inc     di                      ;point to dir separator char.

        mov     al,0

        stosb                           ;nul terminate directory name

        pop     ax

        push    di                      ;save pointer to file name

        mov     [fudge],01h             ;remember that the current directory

                                        ; has been changed.



;----- Save current directory for exit ---------------------------------;

        mov     dl,byte ptr ds:[fcb]    ;get specified drive if any

        or      dl,dl                   ;default disk?

        jz      same_drive

        dec     dl                      ;adjust to real drive (a=0,b=1,...)

        mov     ah,set_default_drive    ;change disks

        int     21h

        cmp     al,-1                   ;error?

        jne     same_drive

BADDRVSPEC:

        mov     dx,offset dg: baddrv

        jmp     printerr



same_drive:

        mov     ah,get_default_dpb

        int     21h



assume  ds:nothing



        cmp     al,-1                   ;bad drive? (should always be ok)

        jne     drvisok

        mov     dx,offset dg: baddrv

        jmp     printerr



drvisok:

        cmp     [bx.dpb_current_dir],0

        je      curr_is_root

        mov     si,bx

        add     si,dpb_dir_text

        mov     di,offset dg: userdir + 1



dir_save_loop:

        lodsb

        stosb

        or      al,al

        jnz     dir_save_loop



curr_is_root:

        push    cs

        pop     ds



assume  ds:dg





;----- Change directories ----------------------------------------------;

        cmp     [the_root],01h

        mov     dx,offset dg: [dirchar]            ;assume the root

        je      sj1

        mov     dx,offset dg: [fname_buffer]

sj1:

        mov     ah,chdir                        ;change directory

        int     21h

        mov     dx,offset dg: baddrv

        jnc     no_errors

        jmp     printerr

no_errors:



;----- Set Up int 24 intercept -----------------------------------------;



        mov     ax,(get_interrupt_vector shl 8) or 24h

        int     21h

        mov     word ptr [hardch],bx

        mov     word ptr [hardch+2],es

        mov     ax,(set_interrupt_vector shl 8) or 23h

        mov     dx,offset dg: int_23

        int     21h

        mov     ax,(set_interrupt_vector shl 8) or 24h

        mov     dx,offset dg: int_24

        int     21h

        push    cs

        pop     es



;----- Parse filename to FCB -------------------------------------------;

        pop     si

        mov     di,fcb

        mov     ax,(parse_file_descriptor shl 8) or 1

        int     21h

        push    ax

;-----------------------------------------------------------------------;

same_dir:

        pop     ax



        mov     bx,fcb

        cmp     byte ptr [bx+1],' '     ;must specify file name

        jnz     drvok

        cmp     byte ptr [bx],0         ;or drive specifier

        jnz     drvok

noname: mov     dx,offset dg: drverr

        call    print

        jmp     int_23



drvok:  push    ds

        mov     dl,drive

        inc     dl

        mov     ah,GET_DPB

        int     bdos

        mov     ax,word ptr [bx+2]      ;get physical sector size

        mov     cl,byte ptr [bx+4]      ;get sectors/cluster - 1

        xor     ch,ch

        inc     cx

        mov     cs:secall,cx            ;save sectors per cluster

        mul     cx                      ;ax = bytes per cluster

        mov     bp,word ptr [bx+11]     ;get record of first sector

        mov     dx,word ptr [bx+16]     ;get record of first directory entry

        mov     si,word ptr [bx+6]      ;get record of first fat

        mov     cl,byte ptr [bx+15]     ;get size of fat

        mov     di,word ptr [bx+13]     ;get number of clusters

        mov     ch,byte ptr [bx+8]      ;get number of fats on drive

        mov     bx,word ptr [bx+9]      ;get max number of dir entries

        pop     ds



        mov     maxent,bx

        mov     firfat,si

        mov     firrec,bp

        mov     firdir,dx

        mov     byte ptr fatsiz,cl

        mov     lastfat,di              ;number of fat entries

        mov     byte ptr fatnum,ch      ;save number of fats on disk



        mov     secsiz,ax



        mov     di,table                ;di points into constructed directory

        mov     ax,0e5e5h               ;deleted file magic number

        shl     bx,1                    ;16 words in a dir entry

        shl     bx,1

        shl     bx,1

        shl     bx,1

        mov     cx,bx

        rep     stosw



        call    readft

        mov     bx,fcb

        cmp     byte ptr [bx+1],' '

        jz      recdsk

        jmp     recfil



recdsk: mov     di,table

        mov     fatptr,2

        mov     ax,fatptr

step1:  call    getfat

        cmp     bx,0fffh

        jz      step1a

        jmp     step6

step1a: mov     filsiz,0

        mov     word ptr filsiz+2,0

        mov     dx,lastfat

        mov     target,ax

step2:  mov     ax,2

        add     filsiz,cx

        adc     word ptr filsiz+2,0

step3:  call    getfat

        cmp     bx,target

        jne     step4

        mov     target,ax

        jmp     step2

step4:  inc     ax

        cmp     ax,dx

        jle     step3

;

;       at this point target = head of list, filsiz = file size

;

        inc     filcnt                  ;increment file count

        mov     ax,maxent

        cmp     filcnt,ax               ;compare with max number of entries

        ja      direrr



        mov     si,(offset dg: dirent)+7

nam0:   inc     byte ptr [si]           ;increment file name

        cmp     byte ptr [si],'9'

        jle     nam1

        mov     byte ptr [si],'0'

        dec     si

        jmp     nam0



nam1:   mov     ah,GET_DATE

        int     bdos                    ;set the date

        sub     cx,1980

        add     dh,dh

        add     dh,dh

        add     dh,dh

        add     dh,dh

        add     dh,dh

        rcl     cl,1

        or      dh,dl

        mov     byte ptr dirent+24,dh

        mov     byte ptr dirent+25,cl

        mov     ah,GET_TIME

        int     bdos                    ;set the time

        shr     dh,1

        add     cl,cl

        add     cl,cl

        add     cl,cl

        rcl     ch,1

        add     cl,cl

        rcl     ch,1

        add     cl,cl

        rcl     ch,1

        or      dh,cl

        mov     byte ptr dirent+22,dh

        mov     byte ptr dirent+23,ch



        mov     ax,filsiz                       ;set file size

        mov     word ptr dirent+28,ax

        mov     ax,word ptr filsiz+2

        mov     word ptr dirent+30,ax

        mov     ax,target                       ;set first cluster location

        mov     word ptr dirent+26,ax



        mov     si,offset dg: dirent                ;copy in new dir entry

        mov     cx,32

        rep     movsb



step6:  inc     fatptr                          ;keep looking for eof's

        mov     ax,fatptr

        cmp     ax,lastfat

        jg      step7

        jmp     step1



direrr: dec     filcnt

        mov     dx,offset dg: dirmsg

        call    print



step7:

        mov     al,drive

        mov     dx,firdir               ;write out constructed directory

        mov     cx,firrec

        sub     cx,dx

        mov     bx,table

        call    dskwrt

        call    pcrlf

        mov     dx,offset dg: recmsg_pre

        call    print

        mov     bx,offset dg: recmsg_post

        mov     si,filcnt

        xor     di,di                   ;output number of files created

        call    convert

        jmp     rexit

recfil: mov     dx,fcb

        mov     ah,FCB_OPEN

        int     bdos

        inc     al

        jnz     recfil0

        mov     dx,offset dg: opnerr

        call    print

        jmp     rexit



recfil0:mov     lastfat,1               ;indicate location of list head

        mov     di,fcb

        mov     ax,[di+16]              ;get file size

        mov     filsiz,ax

        mov     siztmp,ax

        mov     ax,[di+18]

        mov     filsiz+2,ax

        mov     siztmp+2,ax

        mov     ax,[di+25]              ;get list head

        or      ax,ax

        mov     fatptr,ax

        jnz     recfil1

recvec: jmp     recfil6



recfil1:cmp     fatptr,0fffh

        jz      recvec                  ;terminate loop at e-o-f



        mov     cx,secall

        mov     ax,fatptr

        dec     ax

        dec     ax

        mul     cx

        add     ax,firrec

        mov     dx,ax

        mov     bx,table

        mov     al,drive

        int     aread

        pop     di                      ;restore stack pointer

        mov     di,fcb                  ;restore pointer to fcb

        jnc     recfil4                 ;if no error continue reading



        mov     ax,fatptr

        call    getfat

        cmp     lastfat,1

        jnz     recfil2



        cmp     bx,0fffh

        jnz     noteof

        xor     bx,bx

noteof: mov     word ptr [di+25],bx

        jmp     recfil3



recfil2:mov     dx,bx                   ;jump around bad sector

        mov     ax,lastfat

        call    setfat



recfil3:mov     ax,fatptr               ;mark sector bad

        mov     dx,0ff7h

        call    setfat

        mov     ax,secsiz               ;prepare to dec filsiz by secsiz

        cmp     siztmp+2,0

        jnz     recfilx

        cmp     siztmp,ax

        ja      recfilx

        mov     ax,siztmp



recfilx:sub     word ptr [di+16],ax

        sbb     word ptr [di+18],0

        sub     siztmp,ax

        sbb     siztmp,0



        and     byte ptr [di+24],10111111b      ;mark file dirty



        mov     ax,lastfat                      ;point to next sector to check

        jmp     recfil5



recfil4:

        mov     ax,secsiz               ;set bytes remaining to be read

        sub     siztmp,ax

        sbb     siztmp+2,0

        jnc     recok

        xor     ax,ax                   ;if < 0, then set to zero

        mov     siztmp,ax

        mov     siztmp+2,ax



recok:  mov     ax,fatptr               ;get next sector to test

        mov     lastfat,ax

recfil5:call    getfat

        mov     fatptr,bx

        jmp     recfil1



recfil6:                                ;all done

        mov     dx,fcb

        mov     ah,FCB_CLOSE

        int     bdos            ;close the file

        call    pcrlf

        call    report



;

rexit:  mov     ah,DISK_RESET

        int     bdos

        call    wrtfat          ;save the fat

int_23: call    rest_dir

rabort: int     boot            ;home, james...



;----- Restore INT 24 vector and old current directory -----------------;

rest_dir:

        cmp     [fudge],0

        je      no_fudge



        mov     ax,(set_interrupt_vector shl 8) or 24h

        lds     dx,[hardch]

        int     21h

        push    cs

        pop     ds



        mov     dx,offset dg: userdir               ;restore directory

        mov     ah,chdir

        int     21h

        mov     dl,[user_drive]                 ;restore old current drive

        mov     ah,set_default_drive

        int     21h



no_fudge:

        ret



;----- INT 24 Processing -----------------------------------------------;



int_24_retaddr dw       int_24_back



int_24  proc    far

assume  ds:nothing,es:nothing,ss:nothing



        pushf

        push    cs

        push    [int_24_retaddr]

        push    word ptr [hardch+2]

        push    word ptr [hardch]

        ret

int_24  endp



int_24_back:

        cmp     al,2            ;abort?

        jnz     ireti

        push    cs

        pop     ds



assume  ds:dg



        call    rest_dir

        int     20h

ireti:

        iret



        IF      KANJI

TESTKANJ:

        CMP     AL,81H

        JB      NOTLEAD

        CMP     AL,9FH

        JBE     ISLEAD

        CMP     AL,0E0H

        JB      NOTLEAD

        CMP     AL,0FCH

        JBE     ISLEAD

NOTLEAD:

        PUSH    AX

        XOR     AX,AX           ;Set zero

        POP     AX

        RET



ISLEAD:

        PUSH    AX

        XOR     AX,AX           ;Set zero

        INC     AX              ;Reset zero

        POP     AX

        RET

        ENDIF



code  ends



const   segment public byte



        EXTRN   BADVER:BYTE,askmsg:BYTE,drvlet:BYTE,dirmsg:BYTE

        EXTRN   recmsg_pre:BYTE,DRVLET1:BYTE,recmsg_post:BYTE

        EXTRN   crlf:BYTE,drverr:BYTE,baddrv:BYTE,opnerr:BYTE



const   ends



data    segment byte



        PUBLIC  filsiz



dirent  db      'FILE0000REC'

        db      21 dup (00)



fndfat  dw      0000                    ;sector of first good fat

filcnt  dw      0000

fatcnt  db      00

fatnum  db      00

fatsiz  dw      0000

firfat  dw      0000

fatptr  dw      0000

secall  dw      0000                    ;sectors per cluster

target  dw      0000

maxent  dw      0000

firrec  dw      0000

firdir  dw      0000

secsiz  dw      0000

siztmp  dw      0000

        dw      0000

filsiz  dw      0000

        dw      0000

lastfat dw      0000

;

table   dw      offset dg:fattbl + 6 * 1024

fattbl  db      0



data    ends



        end     recover

             