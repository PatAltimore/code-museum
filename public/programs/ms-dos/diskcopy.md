---
title: "DISKCOPY.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/DISKCOPY.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/DISKCOPY.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "diskcopy"
order: 30
description: "The DISKCOPY utility from MS-DOS v2.0, a program for copying entire floppy disks, showcases the evolution of early PC software and Microsoft's adaptation of Unix-like concepts in DOS."

summary:
  - point: "DISKCOPY was written by Chris Peters in 1982, as part of MS-DOS v2.0."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduced memory management techniques to handle limited RAM in early PCs."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Used BIOS interrupts for disk operations, reflecting hardware constraints of the era."
    link: "https://en.wikipedia.org/wiki/BIOS"
    link_label: "BIOS"
  - point: "Inspired by Unix/XENIX, MS-DOS v2.0 introduced subdirectories and file handles."
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"
  - point: "DISKCOPY's techniques influenced later disk utilities and backup software."
    link: "https://en.wikipedia.org/wiki/Backup_software"
    link_label: "Backup Software"

enhancements:
  - id: "diskcopy-entry-point"
    line_start: 93
    line_end: 95
    title: "Jumping to the Main Diskcopy Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `diskcopy` label serves as the entry point for the program, immediately jumping to the `disk_entry` routine. This structure reflects the segmented memory model of MS-DOS, where programs often began with a jump to the main logic. Chris Peters designed this utility in 1982 to copy entire floppy disks, a common task in the era of 5.25-inch diskettes. At the time, PCs had limited memory (often 64KB to 256KB), requiring careful management of resources. The jump simplifies program flow and ensures initialization routines are executed first. This approach influenced later DOS utilities and demonstrated the modularity of assembly programming, where small, reusable routines were key to managing hardware constraints efficiently."
  - id: "print-subroutine"
    line_start: 127
    line_end: 129
    title: "Printing Strings to the Console"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The `print` subroutine uses the BIOS interrupt `21h` to output strings to the console. This reflects the reliance on BIOS services for basic I/O operations in early PC software. By invoking `STD_CON_STRING_OUTPUT`, the program ensures compatibility across different hardware configurations, as the BIOS abstracts hardware-specific details. This design decision highlights the constraints of the IBM PC platform, where direct hardware access was often avoided to maintain portability. The use of BIOS interrupts became a standard practice in DOS programming, influencing utilities and applications that followed. It also underscores the importance of hardware abstraction in the development of operating systems and software tools."
  - id: "getkey-wait-for-keypress"
    line_start: 135
    line_end: 145
    title: "Waiting for User Input"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `getkey` subroutine waits for a key press from the user, using BIOS interrupt `21h` with function `12h`. This routine displays a message (`keymsg`) before pausing execution, ensuring the user is prompted for interaction. In the early 1980s, user interfaces were primarily text-based, and programs relied on such routines to guide users through operations. Chris Peters included this feature to make DISKCOPY more user-friendly, a necessity given the technical nature of early PCs. The approach influenced later DOS utilities, which adopted similar methods to improve usability. It also reflects the era's emphasis on simplicity and direct interaction, laying the groundwork for more sophisticated user interfaces in subsequent decades."
  - id: "getdpb-disk-parameter-block"
    line_start: 147
    line_end: 181
    title: "Retrieving Disk Parameters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `getdpb` subroutine retrieves the Disk Parameter Block (DPB) using BIOS interrupt `21h`. It calculates the number of sectors on the disk (`cx`) and the sector size (`ax`), essential for managing disk operations. This routine reflects the low-level nature of DOS programming, where developers interacted directly with hardware through BIOS calls. The DPB structure was critical for understanding disk geometry and ensuring compatibility with various storage devices. Chris Peters' implementation in DISKCOPY demonstrates the importance of hardware abstraction in early software development. Techniques like this influenced later disk utilities and file systems, contributing to the evolution of storage management in operating systems."
  - id: "disk-entry-initialization"
    line_start: 225
    line_end: 311
    title: "Setting Up the Diskcopy Environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `disk_entry` routine initializes the stack and prepares the environment for disk copying. It sets up local memory, retrieves source and destination drive information, and allocates buffer space for data transfer. This routine showcases the challenges of programming in a constrained environment, where memory management was critical. Chris Peters designed this initialization process to ensure efficient use of resources, reflecting the limitations of early PCs. The routine's modularity and focus on resource allocation influenced later DOS utilities and demonstrated best practices for assembly programming. It also highlights the transition from single-task systems to more complex, multitasking environments in computing history."
  - id: "copyagn-restart-copy-process"
    line_start: 321
    line_end: 331
    title: "Restarting the Copy Process"
    wikipedia_url: "https://en.wikipedia.org/wiki/Backup_software"
    image_url: ""
    image_caption: ""
    content: "The `copyagn` routine resets the starting sector and checks if the source and destination drives are the same. If they differ, it prompts the user for confirmation before proceeding. This routine reflects the iterative nature of disk copying, where each pass handles a portion of the disk. Chris Peters designed this feature to ensure reliability and user control, addressing common issues like mismatched drives or media. The approach influenced later backup and disk utilities, which adopted similar methods to handle errors and ensure data integrity. It also underscores the importance of user interaction in early software design, paving the way for more sophisticated error handling in modern applications."
  - id: "sizeok-buffer-calculation"
    line_start: 383
    line_end: 417
    title: "Calculating Buffer Size for Disk Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `sizeok` routine calculates the number of sectors that can fit in 64KB and determines the number of sectors per pass based on the buffer size. This calculation is crucial for optimizing disk operations, ensuring efficient use of memory. Chris Peters implemented this feature to address the limited RAM of early PCs, where careful planning was required to avoid memory overflows. The routine's focus on efficiency influenced later software tools, which adopted similar techniques for managing resources. It also highlights the ingenuity of early programmers, who developed creative solutions to overcome hardware constraints and improve performance."
  - id: "loop-disk-copying-iteration"
    line_start: 421
    line_end: 435
    title: "Iterating Over Disk Sectors"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_transfer"
    image_url: ""
    image_caption: ""
    content: "The `loop` routine handles the iterative process of copying sectors from the source disk to the destination disk. It reads a chunk of data into the buffer, writes it to the destination, and updates the starting sector for the next pass. This routine reflects the sequential nature of disk operations, where data is transferred in manageable chunks. Chris Peters designed this feature to ensure reliability and efficiency, addressing the limitations of early PCs. The iterative approach influenced later file transfer protocols and disk utilities, demonstrating best practices for handling large data sets in constrained environments. It also highlights the importance of modularity in software design, a principle that remains relevant today."

---

        TITLE   DISKCOPY MSDOS Disk Copier

;----------------------------------------------------------

;

;       Diskcopy - Program to copy entire diskettes

;

;       Copyright 1982 by Microsoft Corporation

;       Written by Chris Peters, August 1982

;

;-----------------------------------------------------------

;

; Rev 1.00      Initial instance

; Rev 1.20

;               Read in > 64K hunks



FALSE   EQU     0

TRUE    EQU     NOT FALSE





bdos    equ     21h

boot    equ     20h

aread   equ     25h

awrite  equ     26h



        INCLUDE DOSSYM.ASM



fcb     equ     5ch



CODE    SEGMENT PUBLIC

CODE    ENDS



CONST   SEGMENT PUBLIC BYTE

CONST   ENDS



DATA    SEGMENT PUBLIC BYTE

DATA    ENDS



DG      GROUP   CODE,CONST,DATA



CODE  segment PUBLIC

        assume  cs:DG,ds:DG,es:DG,ss:DG



        EXTRN   dskrd:NEAR,dskwrt:NEAR,promptyn:NEAR

        PUBLIC  PRINT,PCRLF,ASKANOTHER,sec64k,secsiz



        org     100h



diskcopy:

        jmp     disk_entry



HEADER  DB      "Vers 1.20"



source  db      0

dest    db      0

count   dw      0

start   dw      0

secsiz  dw      0

passcnt dw      0

sec64k  dw      0

media   db      0

buffer  dw      0

bufsiz  dw      0



pcrlf:  mov     dx,OFFSET DG: crlf

print:  mov     ah,STD_CON_STRING_OUTPUT

        int     bdos

pret:   ret



getkey: mov     dx,OFFSET DG: keymsg

        call    print

        mov     ah,12                   ;wait for key press

        mov     al,1

        int     21h

        ret

;

; returns number of sectors on the disk in cx, sector size in ax

;

getdpb: push    ds

        inc     dl

        mov     ah,GET_DPB

        int     bdos

        mov     al,[bx+dpb_cluster_mask]

        cbw

        inc     ax

        mov     cx,[bx+dpb_max_cluster]

        dec     cx

        mul     cx

        add     ax,[bx+dpb_first_sector]

        mov     cx,[bx+dpb_sector_size]

        mov     bl,[bx+dpb_media]

        pop     ds

        ret



getdrv: mov     al,[bx]

        dec     al

        cmp     al,-1

        jnz     get1

        mov     ah,19h

        int     21h

get1:   ret

;

; set zero flag if drives the same

;

compare:push    ax

        mov     al,[dest]

        cmp     al,[source]

        pop     ax

        ret



printerr:

        call    print

        int     boot



disk_entry:

        cli                     ;set up local stack

        mov     sp,100h

        sti





;Code to print header

;       PUSH    AX

;       MOV     DX,OFFSET DG: HEADER

;       CALL    print

;       POP     AX



        mov     dx,OFFSET DG: drverr1

        inc     al

        jz      printerr

        inc     ah

        jz      printerr



        mov     bx,fcb

        call    getdrv

        mov     [source],al

        add     [srclet],al

        mov     bx,fcb+16

        call    getdrv

        mov     [dest],al

        add     [dstlet],al

        add     [fdstlet],al

        mov     ah,DISK_RESET

        int     bdos                    ;empty buffer queue



        mov     bx,OFFSET DG:progsiz + 15

        shr     bx,1

        shr     bx,1

        shr     bx,1

        shr     bx,1

        mov     ah,setblock

        int     21h                     ;give back extra memory



        mov     bx,0FFFFh               ;ask for Biggest hunk

        mov     ah,alloc

        int     21h

        jnc     gotmem

        mov     ah,alloc

        int     21h

gotmem:

        mov     [buffer],ax

        mov     [bufsiz],bx



copyagn:

        mov     [start],0               ;Initialize start sector

        call    compare

        jz      onedrv1

        mov     dx,OFFSET DG: srcmsg

        call    print

onedrv1:mov     dx,OFFSET DG: fdstmsg

        call    print

        call    getkey



        mov     dl,[dest]

        call    getdpb

        mov     [count],ax

        mov     [secsiz],cx

        mov     [media],bl



        call    compare

        jnz     twodrv1

        mov     dx,OFFSET DG: srcmsg

        call    print

        call    getkey



twodrv1:mov     dl,[source]

        call    getdpb

        mov     dx,OFFSET DG: drverr3

        cmp     [media],bl              ;make sure media and sizes match

        jnz     errv

        cmp     [count],ax

        jz      sizeok

errv:   jmp     printerr



sizeok:

        mov     bx,[secsiz]

        add     bx,15

        mov     cl,4

        shr     bx,cl

        xor     dx,dx

        mov     ax,1000H

        div     bx

        mov     [sec64k],ax     ;set number of sectors in 64K bytes

        xor     dx,dx

        mov     ax,[bufsiz]

        div     bx

        mov     [passcnt],ax    ;set number of sectors per pass



        call    compare         ;print copying....

        jz      loop

        mov     dx,OFFSET DG: cpymsg

        call    print



loop:   push    ds



        mov     al,[source]

        xor     bx,bx

        mov     cx,[passcnt]

        cmp     cx,[count]

        jbe     countok

        mov     cx,[count]

countok:mov     dx,[start]

        mov     ds,[buffer]

        call    dskrd

        pop     ds



        push    ds

        push    cx



        call    compare

        jnz     twodrv2

        mov     dx,OFFSET DG: dstmsg

        call    print

        call    getkey



twodrv2:mov     al,[dest]

        xor     bx,bx

        mov     dx,[start]

        mov     ds,[buffer]

        call    dskwrt

        pop     cx

        pop     ds



        add     [start],cx

        sub     [count],cx

        jbe     quitcopy



        call    compare

        jnz     loop

        mov     dx,OFFSET DG: srcmsg

        call    print

        call    getkey

        jmp     loop



quitcopy:

        mov     ah,DISK_RESET

        int     bdos                    ;empty buffer queue

        mov     dx,OFFSET DG: goodmsg

        call    compare

        jnz     twodrv3

        mov     dx,OFFSET DG: good1



ASKANOTHER:

twodrv3:call    print

        mov     dx,OFFSET DG:anoprompt

        call    promptyn

        jnz     alldone

        jmp     copyagn

alldone:

        int     boot            ;home, james...



CODE    ENDS



CONST   SEGMENT PUBLIC BYTE



        EXTRN   fdstmsg:BYTE,dstmsg:BYTE,fdstlet:BYTE,dstlet:BYTE

        EXTRN   cpymsg:BYTE,good1:BYTE,goodmsg:BYTE,srcmsg:BYTE,srclet:BYTE

        EXTRN   keymsg:BYTE,drverr1:BYTE,drverr3:BYTE,crlf:BYTE

        EXTRN   anoprompt:BYTE



        db      ' MICROSOFT - PETERS '

CONST   ENDS



DATA    SEGMENT BYTE



progsiz LABEL   BYTE



DATA    ends

        end     diskcopy

                            