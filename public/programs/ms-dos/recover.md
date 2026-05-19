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
description: "This file contains the MS-DOS v2.0 RECOVER utility, a program designed to rebuild corrupted directories and recover lost files, showcasing early efforts in data recovery on personal computers."

summary:
  - point: "Introduces directory recovery in MS-DOS v2.0, a Unix-inspired rewrite"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates FAT manipulation routines for file system repair"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Highlights Chris Peters' contributions to MS-DOS utilities"
    link: "https://en.wikipedia.org/wiki/Chris_Peters_(programmer)"
    link_label: "Chris Peters"
  - point: "Uses assembly-level hardware interrupts for disk I/O"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Reflects constraints of 1980s PCs: limited memory, single-tasking"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "recover-entry-point"
    line_start: 107
    line_end: 149
    title: "Jumping into the RECOVER utility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The RECOVER utility begins with a jump instruction (`jmp rec_start`) that redirects execution to the main recovery logic. This entry point reflects the modular design of MS-DOS utilities, where each program starts with a clear initialization routine. Written by Chris Peters in 1982, RECOVER was part of Microsoft's push to make MS-DOS more robust and competitive with Unix-like systems. At the time, data recovery was a critical feature for businesses relying on the fragile storage media of early PCs, such as floppy disks and early hard drives. The inclusion of RECOVER in MS-DOS v2.0 demonstrates Microsoft's awareness of user needs and their effort to provide tools for maintaining data integrity. This entry point sets the stage for a series of routines that manipulate the File Allocation Table (FAT) and handle directory structures, showcasing the low-level control programmers had over hardware and file systems in the 1980s."
  - id: "print-subroutine"
    line_start: 155
    line_end: 157
    title: "Printing strings via BIOS interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `print` subroutine uses the BIOS interrupt `int 21h` to output strings to the console. This approach leverages the Basic Input/Output System (BIOS) to interact with hardware, a common practice in early PC programming. By calling `int 21h` with the appropriate function code, the program can display messages to the user without directly interfacing with the video hardware. This abstraction was crucial for portability across different PC models, as it allowed software to work uniformly regardless of hardware variations. In the early 1980s, programmers like Chris Peters had to balance direct hardware control with the need for compatibility, especially as MS-DOS was licensed to multiple OEMs. The `print` routine exemplifies this compromise, providing a simple yet effective way to communicate with users during the recovery process."
  - id: "convert-and-convlp-loop"
    line_start: 163
    line_end: 211
    title: "Binary conversion and looping logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `convert` subroutine, along with its looping logic in `convlp`, handles binary conversions essential for interpreting and manipulating FAT entries. The FAT file system was the backbone of MS-DOS storage, and understanding its structure was key to recovering lost or corrupted data. The loop processes data in chunks, using bitwise operations (`shl`, `rcl`) and auxiliary routines like `convwrd` to ensure accurate handling of FAT entries. This code reflects the challenges of working within the constraints of 16-bit assembly, where every operation had to be carefully optimized for speed and memory usage. In 1983, the FAT system was a relatively new innovation, and programmers like Peters were pioneering techniques to manage it effectively. The logic here laid the groundwork for future file system utilities, influencing how data recovery tools evolved in the decades to come."
  - id: "getfat-and-setfat"
    line_start: 287
    line_end: 357
    title: "Direct manipulation of FAT entries"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `getfat` and `setfat` routines are pivotal in the RECOVER utility, directly reading and modifying entries in the File Allocation Table (FAT). These routines use bitwise operations and memory addressing to navigate the FAT structure, which stores information about file clusters on disk. By isolating these operations into dedicated subroutines, Peters ensured that the recovery process could efficiently handle corrupted or missing entries. The FAT system, introduced with MS-DOS, was a revolutionary approach to file storage but was prone to fragmentation and errors. These routines highlight the ingenuity required to work within its limitations, providing a glimpse into the low-level programming that defined early PC software development. The techniques used here influenced later file systems and recovery tools, cementing the FAT's legacy in computing history."
  - id: "rec-start-header-check"
    line_start: 461
    line_end: 489
    title: "Validating MS-DOS version compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `rec_start` section begins by checking the MS-DOS version to ensure compatibility with the RECOVER utility. Using the `int 21h` BIOS interrupt, the program retrieves the version number and compares it against a predefined threshold (`DOSVER_HIGH`). This validation step reflects the fragmented nature of early PC software, where different DOS versions might lack critical features or behave inconsistently. By enforcing a minimum version requirement, Peters ensured that RECOVER would function reliably, avoiding potential errors on older systems. This approach underscores the challenges of developing software for a rapidly evolving platform, where compatibility and stability were constant concerns. The version check also highlights Microsoft's commitment to maintaining a cohesive ecosystem, as MS-DOS became the standard operating system for IBM PCs and their clones."
  - id: "kill-bl-and-next-char"
    line_start: 649
    line_end: 687
    title: "Parsing and cleaning command-line input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `kill_bl` and `next_char` routines handle the parsing and cleaning of command-line input, removing unnecessary whitespace and storing the file pathname in a buffer. This preprocessing step ensures that the RECOVER utility can accurately interpret user commands, a critical feature for a program designed to rebuild directories. Command-line interfaces were the primary mode of interaction for MS-DOS users, and robust input handling was essential to prevent errors and misunderstandings. Peters' attention to detail in these routines reflects the importance of usability in early PC software, where users often lacked technical expertise. By automating the cleanup of input, RECOVER minimized the risk of user mistakes, making it a more reliable tool for data recovery."
  - id: "same-drive-and-dir-save-loop"
    line_start: 865
    line_end: 909
    title: "Saving current directory state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `same_drive` and `dir_save_loop` routines save the current directory state, ensuring that RECOVER can restore it after completing its operations. This feature reflects the utility's focus on preserving user data and system integrity, even while performing complex recovery tasks. By storing the directory path in a buffer, Peters enabled the program to navigate and manipulate the file system without losing track of the user's original context. This capability was particularly valuable in the early 1980s, when PCs lacked multitasking and users relied on single-threaded programs to manage their data. The design here demonstrates a forward-thinking approach to software development, prioritizing user experience and system stability in an era of limited computing resources."
  - id: "no-errors-and-same-dir"
    line_start: 949
    line_end: 1011
    title: "Handling errors and defaulting to current directory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The `no_errors` and `same_dir` routines manage error handling and default to the current directory if no file path is specified. These routines ensure that RECOVER can gracefully handle unexpected situations, such as missing input or invalid commands. Error handling was a critical aspect of early PC software, where system crashes and data loss were common. By providing clear fallback mechanisms, Peters made RECOVER more robust and user-friendly, reducing the likelihood of catastrophic failures. The decision to default to the current directory reflects the simplicity of MS-DOS's single-tasking environment, where users often worked within a single directory at a time. These routines exemplify the pragmatic design choices that defined early PC software, balancing functionality with the constraints of the hardware and operating system."
  - id: "drvok-disk-geometry-analysis"
    line_start: 1021
    line_end: 1107
    title: "Understanding disk geometry in real-time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "The 'drvok' subroutine begins by querying the BIOS Disk Parameter Block (DPB) to retrieve critical information about the disk's geometry, including sector size, cluster size, and FAT structure. This was essential for MS-DOS to interact with disks of varying formats and configurations. In 1983, personal computers were still a patchwork of hardware standards, and software had to adapt dynamically to different drives. Tim Paterson, the original author of MS-DOS, designed the system to be hardware-agnostic, a necessity for Microsoft's licensing strategy. This subroutine exemplifies that philosophy, extracting parameters directly from the hardware rather than relying on predefined assumptions. The technique of querying the DPB would remain a cornerstone of disk utilities for years, influencing tools like CHKDSK and FORMAT."
  - id: "recdsk-initial-disk-recovery"
    line_start: 1111
    line_end: 1115
    title: "Starting the disk recovery process"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_recovery"
    image_url: ""
    image_caption: ""
    content: "The 'recdsk' subroutine initializes the recovery process by setting up pointers to the FAT and directory table. At this point, the program begins scanning for damaged sectors and reconstructs data based on the FAT structure. In the early 1980s, disk recovery was a critical task, as hardware failures were common and backups were rare. MS-DOS's ability to recover files from corrupted disks gave it a competitive edge in the personal computing market. This subroutine reflects the era's emphasis on resilience and the need to maximize the utility of limited storage devices."
  - id: "step1-fat-traversal"
    line_start: 1117
    line_end: 1123
    title: "Traversing the FAT for damaged sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The 'step1' subroutine begins the process of traversing the File Allocation Table (FAT) to identify damaged sectors. FAT was a revolutionary file system at the time, enabling efficient management of disk storage. This traversal is a low-level operation, directly interacting with the FAT to locate clusters marked as 'bad' or 'end-of-file.' The approach reflects the MS-DOS philosophy of working as close to the hardware as possible, a necessity given the limited processing power and memory of early PCs. This subroutine's logic would later influence more advanced file systems, including FAT32 and NTFS."
  - id: "nam1-setting-file-date-and-time"
    line_start: 1187
    line_end: 1259
    title: "Assigning timestamps to recovered files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Timestamp"
    image_url: ""
    image_caption: ""
    content: "The 'nam1' subroutine assigns a date and time to recovered files using BIOS interrupts to query the system clock. This was a critical feature for maintaining file metadata, ensuring that recovered files could be organized and tracked. In the early 1980s, the concept of file timestamps was borrowed from Unix-like systems, reflecting Microsoft's growing interest in adapting features from XENIX into MS-DOS. The ability to set timestamps was a step toward more sophisticated file management, paving the way for features like version control and auditing in later operating systems."
  - id: "recfil-file-reconstruction"
    line_start: 1313
    line_end: 1327
    title: "Reconstructing files from damaged clusters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_recovery"
    image_url: ""
    image_caption: ""
    content: "The 'recfil' subroutine is the heart of the RECOVER utility, focusing on reconstructing files from damaged clusters. It opens the file using the FCB (File Control Block) structure and begins piecing together data based on the FAT entries. This low-level approach to file recovery highlights the ingenuity required to work within the constraints of early PCs, where disk errors were common and storage was precious. The subroutine's reliance on the FCB reflects the legacy of CP/M, an earlier operating system that heavily influenced MS-DOS's design."
  - id: "rest_dir-restoring-directory-state"
    line_start: 1523
    line_end: 1553
    title: "Restoring the original directory state"
    wikipedia_url: "https://en.wikipedia.org/wiki/Directory_(computing)"
    image_url: ""
    image_caption: ""
    content: "The 'rest_dir' subroutine restores the original directory state after the recovery process is complete. It ensures that the user's working environment remains unchanged, a small but important usability feature. This reflects the growing emphasis on user experience in software design during the early 1980s, as personal computers moved from hobbyist tools to mainstream consumer products. By preserving the directory state, MS-DOS demonstrated a commitment to reliability and ease of use, qualities that helped it dominate the PC market."
  - id: "testkanj-kanji-character-support"
    line_start: 1621
    line_end: 1637
    title: "Supporting Kanji character encoding"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The 'TESTKANJ' subroutine checks whether a given byte represents the lead byte of a Kanji character, a feature added to support Japanese-language systems. In the early 1980s, Microsoft was expanding globally, and Japan was a key market. Supporting Kanji encoding required significant modifications to MS-DOS, as the ASCII-based file system had to accommodate multi-byte characters. This subroutine reflects Microsoft's ambition to make MS-DOS a universal operating system, capable of serving diverse linguistic and cultural needs. The inclusion of Kanji support was a precursor to the internationalization features that would become standard in later operating systems."
  - id: "islead-kanji-lead-byte-detection"
    line_start: 1651
    line_end: 1751
    title: "Detecting lead bytes in Kanji encoding"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The 'ISLEAD' subroutine determines whether a byte is a lead byte in Kanji encoding, enabling MS-DOS to correctly interpret Japanese text. This was a technically challenging feature to implement, as Kanji encoding used a mix of single-byte and multi-byte characters. Microsoft's decision to support Kanji reflects the company's strategic focus on international markets, particularly Japan, where the PC-98 platform was dominant. The subroutine's logic would influence later efforts to support Unicode, a universal character encoding standard that emerged in the 1990s."

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