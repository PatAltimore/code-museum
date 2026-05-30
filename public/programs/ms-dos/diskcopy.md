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
description: "This file implements the MS-DOS Disk Copy utility, showcasing early assembly programming techniques for disk duplication on IBM-compatible PCs."

summary:
  - point: "Introduces memory management for copying large disk sectors"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates direct hardware interaction via BIOS interrupts"
    link: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    link_label: "BIOS Interrupts"
  - point: "Highlights constraints of 1980s PC hardware, such as limited memory and disk sizes"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Uses clever techniques to optimize disk copying performance"
    link: "https://en.wikipedia.org/wiki/Disk_copying"
    link_label: "Disk Copying"
  - point: "Early example of modular assembly code with reusable subroutines"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "diskcopy-entry-point"
    line_start: 93
    line_end: 125
    title: "Why the Diskcopy Entry Point Jumps"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `diskcopy` label serves as the entry point for the Disk Copy program. However, rather than executing code directly, it immediately jumps to `disk_entry`. This design reflects a common practice in early assembly programming: separating the entry point from initialization routines. By doing so, developers could ensure that setup tasks (like memory allocation and stack initialization) were handled before the main logic began. In the constrained environment of MS-DOS, where programs often shared memory with the operating system, careful initialization was critical to avoid conflicts. This approach also made debugging easier, as the entry point provided a clear separation between setup and operational code. The jump to `disk_entry` underscores the modularity of the program, a hallmark of MS-DOS development. This modular design philosophy influenced later operating systems and software development practices, emphasizing the importance of clear initialization steps."
  - id: "print-subroutine"
    line_start: 127
    line_end: 131
    title: "Printing Strings with BIOS Interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The `print` subroutine uses the BIOS interrupt `21h` to output strings to the console. This interrupt was a cornerstone of MS-DOS programming, providing a standardized way to interact with hardware. The `ah` register is set to `STD_CON_STRING_OUTPUT`, signaling the BIOS to print the string pointed to by the `dx` register. This method was efficient and portable, allowing developers to write programs that worked across different hardware configurations. In the early 1980s, when hardware compatibility was a major concern, BIOS interrupts were a reliable abstraction layer. The simplicity of this routine reflects the minimalistic design philosophy of MS-DOS, which prioritized direct hardware access and low overhead. Later operating systems, such as Windows, built on these principles, introducing higher-level APIs while maintaining backward compatibility with BIOS calls."
  - id: "getkey-wait-for-keypress"
    line_start: 135
    line_end: 145
    title: "How MS-DOS Waited for User Input"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `getkey` subroutine waits for a key press from the user, using BIOS interrupt `21h` with function `12h`. This interrupt pauses program execution until a key is pressed, then stores the key's ASCII code in the `al` register. The routine also calls the `print` subroutine to display a prompt message, ensuring the user knows input is expected. This approach reflects the interactive nature of early PC software, which often relied on direct user interaction due to limited automation capabilities. Waiting for user input was a common pattern in MS-DOS utilities, as it allowed programs to adapt to varying user needs and contexts. This technique influenced later command-line interfaces, where user prompts and input handling became standard features."
  - id: "getdpb-disk-parameter-block"
    line_start: 147
    line_end: 181
    title: "Reading Disk Geometry with DPB"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `getdpb` subroutine retrieves the Disk Parameter Block (DPB) for a specified drive using BIOS interrupt `21h`. The DPB contains critical information about the disk's geometry, including the number of sectors, sector size, and media type. This data is essential for the Disk Copy utility, as it ensures the source and destination disks are compatible. The routine calculates the total number of sectors and verifies the media type, storing the results in registers for later use. In the early 1980s, understanding disk geometry was a prerequisite for any program that interacted with storage devices. MS-DOS's reliance on BIOS interrupts for disk access simplified this process, providing a consistent interface across different hardware. The DPB concept influenced later operating systems, which adopted similar abstractions for managing storage devices."
  - id: "disk-entry-initialization"
    line_start: 225
    line_end: 311
    title: "Setting Up Memory for Disk Copy"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `disk_entry` subroutine initializes the program's environment, setting up the stack and allocating memory for the disk buffer. It uses BIOS interrupts to reset the disk system and request the largest available memory block. This memory management strategy reflects the constraints of early PCs, where programs had to operate within the limited RAM available. By dynamically allocating memory, the Disk Copy utility maximizes its buffer size, improving performance during disk copying. The routine also verifies the source and destination drives, ensuring they are ready for operation. This careful initialization process highlights the challenges of programming in a low-level environment, where developers had to manage every aspect of the system manually. The techniques used here influenced later software, particularly in the realm of memory management and resource allocation."
  - id: "copyagn-restart-copying"
    line_start: 321
    line_end: 331
    title: "Restarting the Copy Process"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_copying"
    image_url: ""
    image_caption: ""
    content: "The `copyagn` subroutine resets the starting sector and prepares for a new copy operation. It checks whether the source and destination drives are the same, branching to different routines based on the result. This logic ensures the program can handle both single-drive and dual-drive configurations, reflecting the versatility required of MS-DOS utilities. By resetting the starting sector, the routine allows the program to copy disks in multiple passes, accommodating the limited buffer size. This modular approach to disk copying was a practical solution to the constraints of early PC hardware, where memory and storage were often insufficient for large-scale operations. The ability to restart the copy process influenced later disk utilities, which adopted similar techniques to handle complex copying scenarios."
  - id: "twodrv1-verify-media"
    line_start: 365
    line_end: 377
    title: "Matching Media Types for Two Drives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_copying"
    image_url: ""
    image_caption: ""
    content: "The `twodrv1` subroutine verifies that the source and destination drives have matching media types and sizes. It compares the media type and sector count retrieved from the Disk Parameter Block (DPB), ensuring compatibility before proceeding. If the media types or sizes differ, the routine jumps to `errv`, which displays an error message and halts the program. This validation step reflects the importance of data integrity in disk copying, where mismatched media could lead to corrupted data or failed operations. By checking compatibility upfront, the Disk Copy utility minimizes the risk of errors during the copying process. This technique influenced later software, which adopted similar validation steps to ensure reliable data transfer between storage devices."
  - id: "loop-copy-data"
    line_start: 421
    line_end: 435
    title: "The Heart of Disk Copying"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_copying"
    image_url: ""
    image_caption: ""
    content: "The `loop` subroutine is the core of the Disk Copy utility, handling the actual data transfer between the source and destination disks. It reads a block of data from the source disk into the buffer, then writes it to the destination disk. The routine uses BIOS interrupts for disk access, ensuring compatibility with different hardware configurations. By processing data in chunks, the program accommodates the limited buffer size, copying disks in multiple passes if necessary. This iterative approach reflects the constraints of early PCs, where memory and storage were often insufficient for large-scale operations. The `loop` subroutine's efficiency and reliability made it a model for later disk utilities, influencing the design of data transfer algorithms in operating systems and software."

---

```asm
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


```