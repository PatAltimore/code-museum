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
description: "MS-DOS v2.0's RECOVER utility, written in 1982, showcases early techniques for file and disk recovery on IBM PCs."

summary:
  - point: "Introduces FAT manipulation routines for disk recovery"
    link: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    link_label: "File Allocation Table"
  - point: "Demonstrates early use of interrupt handling for error recovery"
    link: "https://en.wikipedia.org/wiki/Interrupt_handler"
    link_label: "Interrupt Handling"
  - point: "Highlights the adaptation of Unix-inspired directory structures"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Chris Peters contributed to MS-DOS's evolution in 1982"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Shows the constraints of programming for the 8086 architecture"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "recover-entry-point"
    line_start: 107
    line_end: 115
    title: "The Jump That Starts Recovery"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `recover` label marks the entry point of the RECOVER utility, immediately jumping to `rec_start`. This jump simplifies debugging by isolating initialization routines from the main logic. The header message (`HEADER`) and global flags (`the_root`, `fudge`) are defined here, setting up the program's state. Chris Peters, who joined Microsoft in 1982, wrote this utility to address the growing need for reliable file recovery on MS-DOS systems. At the time, IBM PCs were becoming ubiquitous, and disk corruption was a common issue due to hardware limitations and user errors. This entry point reflects the modular design philosophy of MS-DOS v2.0, which was heavily influenced by Unix. The RECOVER utility's ability to rebuild directories and handle corrupted file systems laid the groundwork for future disk repair tools, including Norton Utilities and modern file recovery software."
  - id: "print-subroutine"
    line_start: 155
    line_end: 159
    title: "Printing Strings via BIOS Interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The `print` subroutine uses the BIOS interrupt `int 21h` to output strings to the console. This approach leverages the standard MS-DOS interface for interacting with hardware, ensuring compatibility across different PC configurations. In 1982, direct hardware access was common, but MS-DOS provided abstractions like this to simplify programming. The reliance on interrupts reflects the efficiency required for low-level system utilities running on the Intel 8086 processor, which had limited processing power and memory. This technique became a staple in MS-DOS programming, influencing countless utilities and applications that followed. It also highlights the trade-offs of early PC software development: balancing direct hardware access with portability and maintainability."
  - id: "convert-and-convlp-loop"
    line_start: 161
    line_end: 213
    title: "Converting Data with Clever Bit Manipulation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The `convert` subroutine and its loop (`convlp`) perform bitwise operations to manipulate data efficiently. This section showcases the programmer's deep understanding of the Intel 8086 architecture, using instructions like `shl`, `rcl`, and `adc` to process data without relying on higher-level abstractions. In the early 1980s, such techniques were essential for optimizing performance on hardware with limited resources. Chris Peters likely drew inspiration from assembly programming practices developed for earlier microprocessors, adapting them for MS-DOS's needs. These operations are foundational to many algorithms in system software, influencing later developments in file systems and data processing routines. The use of bitwise manipulation here underscores the ingenuity required to maximize the capabilities of early PCs."
  - id: "fat-manipulation-getfat-setfat"
    line_start: 281
    line_end: 363
    title: "How MS-DOS Repaired Its File Allocation Table"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `getfat` and `setfat` subroutines handle reading and writing to the File Allocation Table (FAT), the core structure of MS-DOS's file system. These routines use bitwise operations and memory offsets to access and modify FAT entries, ensuring efficient disk recovery. The FAT system was revolutionary in its simplicity, allowing MS-DOS to manage files on floppy disks and hard drives with minimal overhead. In 1982, this approach was critical for supporting the limited storage capacities and slow access speeds of early PC hardware. The techniques demonstrated here influenced not only later versions of MS-DOS but also other operating systems like Windows and embedded systems that adopted FAT as a standard. The modularity of these routines made them reusable, a hallmark of good system software design."
  - id: "readit-and-wrtit-disk-io"
    line_start: 385
    line_end: 447
    title: "Reading and Writing Disk Sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_sector"
    image_url: ""
    image_caption: ""
    content: "The `readit` and `wrtit` subroutines implement low-level disk I/O operations, interacting directly with the hardware via BIOS interrupts. These routines are responsible for reading and writing sectors on the disk, a fundamental task for file recovery. In the early 1980s, disk drives were prone to errors, and utilities like RECOVER were essential for maintaining data integrity. The use of interrupts (`int 21h`) reflects the reliance on BIOS services to abstract hardware differences, ensuring compatibility across various PC configurations. These routines laid the groundwork for more sophisticated disk utilities, influencing tools like CHKDSK and third-party software such as Norton Disk Doctor. They also highlight the challenges of programming for hardware with limited error handling capabilities, requiring careful management of state and retries."
  - id: "rec-start-initialization"
    line_start: 461
    line_end: 473
    title: "Starting Recovery: DOS Version Checks"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `rec_start` section initializes the RECOVER utility, checking the MS-DOS version to ensure compatibility. This routine uses the `int 21h` interrupt to retrieve the version number and compares it against a predefined threshold (`DOSVER_HIGH`). If the version is insufficient, the program exits gracefully with an error message. This check reflects the evolving nature of MS-DOS in the early 1980s, as new features and APIs were introduced with each version. Chris Peters designed this utility to work seamlessly with MS-DOS v2.0, which introduced significant enhancements inspired by Unix. The version check ensures that RECOVER doesn't attempt operations on incompatible systems, preventing potential crashes or data corruption. This approach influenced later software development practices, where version checks became standard for ensuring compatibility and stability."
  - id: "path-handling-slashok-kill-bl"
    line_start: 639
    line_end: 691
    title: "Handling Path Separators and Whitespace"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `slashok` and `kill_bl` routines process pathnames, handling differences in directory separators (`/` vs `\\`) and removing extraneous whitespace. These routines reflect the challenges of adapting software for different environments, as MS-DOS was licensed to numerous OEMs with varying conventions. The use of `lodsb` and `cmp` instructions demonstrates the low-level string manipulation typical of assembly programming. In 1982, pathname parsing was a critical task for utilities like RECOVER, which needed to navigate directories reliably. This section highlights the influence of Unix on MS-DOS, as the slash (`/`) was originally a Unix convention. The techniques used here influenced later file system utilities and programming languages, where robust pathname handling became a standard feature."
  - id: "directory-save-loop"
    line_start: 901
    line_end: 909
    title: "Saving the Current Directory State"
    wikipedia_url: "https://en.wikipedia.org/wiki/Working_directory"
    image_url: ""
    image_caption: ""
    content: "The `dir_save_loop` routine saves the current directory state, ensuring that the RECOVER utility can restore it after performing its operations. This loop uses `lodsb` and `stosb` instructions to copy the directory path into a buffer, terminating it with a null character. In the early 1980s, preserving the working directory was essential for utilities that modified the file system, as users expected their environment to remain consistent. This routine reflects the careful attention to user experience that characterized MS-DOS development. The concept of saving and restoring state influenced later operating systems and programming paradigms, where maintaining context became a key principle. Tools like RECOVER set a precedent for utilities that prioritize stability and predictability in file system operations."
  - id: "drvok-disk-geometry-initialization"
    line_start: 1021
    line_end: 1057
    title: "How MS-DOS Reads Disk Geometry at Boot"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `drvok` subroutine initializes disk geometry by querying the BIOS Disk Parameter Block (DPB) using interrupt calls. It retrieves key details such as sector size, cluster size, FAT size, and directory entry limits. This information is critical for MS-DOS's ability to interact with the disk efficiently. In 1983, disk drives were still relatively primitive, and understanding their geometry was essential for operations like file recovery. Tim Paterson's original 86-DOS laid the groundwork for this approach, but MS-DOS 2.0 expanded it to accommodate more complex disk layouts. This method of querying hardware directly became a standard for low-level disk utilities and influenced later operating systems like Windows and Linux, which abstracted these details further."
  - id: "recdsk-fat-traversal"
    line_start: 1111
    line_end: 1115
    title: "Traversing the FAT to Find Free Space"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `recdsk` subroutine begins the process of traversing the File Allocation Table (FAT) to locate free clusters for file recovery. FAT, introduced in 1977 by Microsoft, was a revolutionary file system for its simplicity and adaptability to small storage devices. By iterating through FAT entries, MS-DOS identifies unused clusters marked with a specific value (0xFFF). This traversal technique was critical in environments with limited memory and processing power, as it avoided the overhead of more complex file systems. The approach influenced later recovery tools and file systems, including FAT32 and NTFS, which retained backward compatibility with FAT's structure."
  - id: "nam0-file-name-incrementation"
    line_start: 1173
    line_end: 1183
    title: "Incrementing File Names for Recovery"
    wikipedia_url: "https://en.wikipedia.org/wiki/Filename"
    image_url: ""
    image_caption: ""
    content: "The `nam0` subroutine generates unique filenames for recovered files by incrementing a numeric suffix. This ensures that recovered files do not overwrite existing ones. The naming convention (e.g., FILE0000REC) reflects the constraints of the 8.3 filename format used in MS-DOS. This technique was inspired by Unix's approach to file naming but adapted to the limitations of FAT. The ability to generate unique names programmatically became a staple of recovery utilities and influenced later tools like Recuva and Windows' file recovery features."
  - id: "int-24-error-handling"
    line_start: 1571
    line_end: 1589
    title: "Interrupt 24: Handling Disk Errors Gracefully"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The `int_24` subroutine sets up a custom interrupt handler for disk errors, allowing MS-DOS to recover gracefully from issues like bad sectors. By pushing the current state onto the stack and redirecting execution, the system avoids crashes and provides the user with options to retry or abort operations. This level of error handling was advanced for its time, reflecting Microsoft's focus on reliability in a business environment. The concept of custom interrupt handling influenced later operating systems, including Windows, which expanded on this idea with structured exception handling."
  - id: "testkanj-kanji-character-support"
    line_start: 1621
    line_end: 1663
    title: "Supporting Kanji Characters in MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The `TESTKANJ` subroutine checks whether a given byte represents a lead byte in a Kanji character sequence. Kanji support was crucial for MS-DOS's adoption in Japan, where the PC market was rapidly growing. By incorporating logic for double-byte character sets (DBCS), Microsoft ensured compatibility with Japanese text encoding standards. This feature was a direct response to the success of NEC's PC-98 series, which dominated the Japanese market. The handling of DBCS influenced later internationalization efforts in software development, including Unicode's adoption as a universal character set."
  - id: "data-segment-fat-structure"
    line_start: 1687
    line_end: 1745
    title: "Defining FAT Structures in Assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Allocation_Table"
    image_url: ""
    image_caption: ""
    content: "The `data` segment defines key variables and structures used for FAT traversal and file recovery, including the FAT table, directory entries, and file size counters. These definitions reflect the low-level nature of MS-DOS, where every byte of memory was accounted for. The simplicity of these structures made FAT an ideal file system for early PCs, influencing its adoption in embedded systems and portable devices like USB drives. The design principles seen here—compactness and efficiency—continue to inform file system development today."

---

```asm
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


```
