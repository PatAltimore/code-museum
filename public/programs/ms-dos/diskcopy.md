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
description: "This file contains the assembly source code for the DISKCOPY utility in MS-DOS 2.0, a program that copies entire floppy disks sector by sector."

summary:
  - point: "DISKCOPY was written by Chris Peters in 1982 for MS-DOS 2.0, reflecting the growing need for disk management tools as personal computing expanded."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "The program's design reflects the constraints of early PCs, including limited memory and reliance on BIOS interrupts for hardware interaction."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "DISKCOPY's sector-by-sector copying approach was critical for duplicating bootable disks, which required exact replication of disk structure."
    link: "https://en.wikipedia.org/wiki/Boot_sector"
    link_label: "Boot sector"
  - point: "The code demonstrates the use of memory allocation and management techniques in low-level assembly programming."
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "This file is a snapshot of the transition from single-tasking operating systems to more Unix-inspired designs in MS-DOS 2.0."
    link: "https://en.wikipedia.org/wiki/MS-DOS#Version_2.x"
    link_label: "MS-DOS 2.x"

enhancements:
  - id: "diskcopy-entry-point"
    line_start: 93
    line_end: 121
    title: "Jumping into the heart of DISKCOPY"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `diskcopy` entry point is deceptively simple: it immediately jumps to `disk_entry`, bypassing any initialization at this label. This reflects the modular design philosophy of MS-DOS, where entry points often serve as mere redirections to more complex routines. Chris Peters, the author of DISKCOPY, was tasked with creating a utility that could duplicate floppy disks—a critical need for early PC users who relied on floppies for both software distribution and backups. In 1982, floppy disks were the primary storage medium, and their small capacity (typically 160 KB to 360 KB) made exact duplication essential for bootable disks. The jump instruction here is a reminder of the simplicity and efficiency demanded by assembly programming, where every byte mattered. This entry point sets the stage for the intricate routines that follow, handling memory allocation, disk reading, and writing."
  - id: "print-subroutine"
    line_start: 127
    line_end: 129
    title: "Printing strings via BIOS interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The `print` subroutine uses the BIOS interrupt 21h to output strings to the console. This approach was standard in MS-DOS programming, leveraging the BIOS for hardware abstraction. By invoking function 09h of interrupt 21h, the program outputs a string terminated by a '$' character—a convention inherited from CP/M, the predecessor to MS-DOS. In the early 1980s, direct hardware manipulation was common, but using BIOS interrupts allowed developers to write code that was portable across different PC-compatible hardware. Chris Peters likely chose this method for its reliability and simplicity, ensuring that DISKCOPY could run on any IBM PC or compatible system. This subroutine is a small but critical piece of the program, enabling user interaction and error reporting."
  - id: "getkey-wait-for-keypress"
    line_start: 135
    line_end: 151
    title: "Waiting for user input: the `getkey` routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `getkey` routine pauses execution until the user presses a key. It uses BIOS interrupt 21h, function 12h, which waits for a key press and returns the ASCII code of the key in the AL register. This method of user input was typical in MS-DOS programs, providing a simple way to interact with users without requiring advanced GUI elements. In the early 1980s, personal computers were primarily text-based, and programs like DISKCOPY relied on clear prompts and pauses to guide users through operations. Chris Peters designed this routine to ensure that users could confirm actions, such as overwriting a disk, before proceeding. This subroutine exemplifies the user-centric design of early DOS utilities, balancing simplicity with functionality."
  - id: "getdpb-disk-parameters"
    line_start: 153
    line_end: 181
    title: "Fetching disk parameters: the `getdpb` routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `getdpb` routine retrieves critical disk parameters, including the number of sectors, sector size, and media type, by invoking BIOS interrupt 21h with function 32h (GET_DPB). This information is essential for DISKCOPY's operation, as it ensures that the source and destination disks are compatible and that the program can calculate the number of sectors to copy. In 1982, floppy disks varied in format, and utilities like DISKCOPY had to account for these differences. Chris Peters implemented this routine to abstract the complexity of disk geometry, allowing the program to work seamlessly across different disk types. The use of BIOS interrupts reflects the low-level nature of MS-DOS programming, where direct interaction with hardware was often necessary. This routine highlights the technical challenges of early PC software development, where every hardware detail had to be managed explicitly."
  - id: "disk-entry-initialization"
    line_start: 225
    line_end: 311
    title: "Setting up for disk copying: `disk_entry`"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `disk_entry` routine initializes the program's environment, setting up the stack, allocating memory, and preparing for disk operations. It begins by configuring the stack pointer and enabling interrupts, ensuring that the program can handle system events during execution. Memory allocation is performed using BIOS interrupt 21h, function 48h, which requests the largest available memory block. This is critical for DISKCOPY, as it needs a buffer large enough to hold multiple sectors for efficient copying. In 1982, memory management was a significant challenge, as PCs typically had only 64 KB to 640 KB of RAM. Chris Peters designed this routine to maximize the program's use of available memory, ensuring that DISKCOPY could handle disks of varying sizes. The careful setup in `disk_entry` reflects the constraints and ingenuity of early DOS programming, where every byte of memory was precious."
  - id: "copyagn-restart-copying"
    line_start: 321
    line_end: 331
    title: "Restarting the copy process: `copyagn`"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "The `copyagn` routine resets the starting sector and prepares for another pass of disk copying. It checks whether the source and destination drives are the same, displaying appropriate messages to the user. This routine is part of DISKCOPY's iterative design, which processes disks in chunks to accommodate memory limitations. In the early 1980s, floppy disks were the standard storage medium, and their small capacity made sector-by-sector copying feasible. Chris Peters implemented this routine to ensure that DISKCOPY could handle disks of varying formats and sizes, restarting the process as needed. The iterative approach reflects the constraints of early PCs, where limited memory and processing power required careful planning and optimization."
  - id: "loop-main-copying-routine"
    line_start: 421
    line_end: 435
    title: "The heart of DISKCOPY: `loop`"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_copying"
    image_url: ""
    image_caption: ""
    content: "The `loop` routine is the core of DISKCOPY, handling the actual copying of disk sectors. It reads a chunk of sectors from the source disk into memory, then writes them to the destination disk. The routine uses BIOS interrupts 21h, functions 25h (disk read) and 26h (disk write), to perform these operations. This sector-by-sector approach ensures that the entire disk, including boot sectors and hidden system files, is copied accurately. In 1982, floppy disks were the primary storage medium, and exact duplication was essential for creating bootable disks and backups. Chris Peters designed this routine to be efficient and reliable, balancing the constraints of memory and disk speed. The `loop` routine is a testament to the ingenuity of early DOS programming, where developers had to work within tight hardware limitations to deliver robust functionality."
  - id: "quitcopy-finalization"
    line_start: 503
    line_end: 515
    title: "Wrapping up: `quitcopy`"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `quitcopy` routine finalizes the disk copying process, resetting the disk system and displaying a success message to the user. It uses BIOS interrupt 21h, function 0Dh (DISK_RESET), to clear the buffer queue, ensuring that the system is ready for further operations. This routine reflects the user-friendly design of DISKCOPY, providing clear feedback and ensuring that the program exits cleanly. In the early 1980s, personal computers were still a novelty, and software developers like Chris Peters had to consider the needs of non-technical users. The `quitcopy` routine is a small but important part of DISKCOPY, ensuring that the program leaves the system in a stable state after completing its task."

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