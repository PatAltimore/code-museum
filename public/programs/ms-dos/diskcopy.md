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
description: "This file contains the source code for the DISKCOPY utility in MS-DOS v2.0, a program that allowed users to copy entire floppy disks sector by sector. It represents an era when disk utilities were critical for personal computing."

summary:
  - point: "DISKCOPY was written by Chris Peters in 1982 to copy floppy disks."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduced techniques for handling memory constraints in early PCs."
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Used BIOS interrupts to interact directly with hardware."
    link: "https://en.wikipedia.org/wiki/BIOS"
    link_label: "BIOS"
  - point: "Optimized for the limited resources of 8086-based systems."
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Influenced later disk utilities and file management tools."
    link: "https://en.wikipedia.org/wiki/File_manager"
    link_label: "File Manager"

enhancements:
  - id: "diskcopy-entry-point"
    line_start: 93
    line_end: 95
    title: "Why DISKCOPY Starts with a JMP"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `diskcopy` label serves as the entry point for the program, immediately jumping to `disk_entry`. This design reflects the convention of separating initialization from execution logic, a common practice in assembly programming to keep code modular and readable. At the time, programmers were working within the constraints of the 8086 processor and limited memory, requiring careful organization of code. Chris Peters, the author, likely adopted this approach to ensure the program could initialize its stack and memory allocations efficiently before diving into the main logic. This separation allowed for better debugging and maintenance, critical in an era when software updates were rare and had to be distributed physically. The modularity here influenced later practices in utility programming, where initialization routines became standard in tools like Norton Utilities and other disk management software."
  - id: "print-subroutine"
    line_start: 127
    line_end: 131
    title: "The Subroutine That Prints Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The `print` subroutine uses the BIOS interrupt `21h` with function `STD_CON_STRING_OUTPUT` to display strings to the console. This was a standard way to interact with the screen on early PCs, leveraging the BIOS for hardware abstraction. In 1982, direct hardware access was common, but using BIOS calls provided portability across different PC-compatible systems. Chris Peters designed this subroutine to centralize output operations, simplifying the code and ensuring consistent behavior. This approach influenced later development practices, where reusable subroutines became a hallmark of efficient programming. The reliance on BIOS interrupts also highlights the dependency on IBM's hardware design, which shaped the software ecosystem for years."
  - id: "getkey-wait-for-keypress"
    line_start: 135
    line_end: 145
    title: "How MS-DOS Waited for a Keypress"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `getkey` subroutine waits for a keypress using BIOS interrupt `21h` with function `12h`. It displays a message (`keymsg`) before pausing execution until a key is pressed. This was a common way to handle user input in early command-line programs, ensuring the user acknowledged prompts or errors before proceeding. In the early 1980s, user interfaces were minimal, relying on text-based interactions. Chris Peters likely included this feature to make the program more user-friendly, providing clear feedback during the disk copying process. This technique influenced later command-line utilities, where pausing for user input became standard practice. It also underscores the simplicity of early software design, where user interaction was tightly coupled with program flow."
  - id: "getdpb-disk-parameters"
    line_start: 153
    line_end: 181
    title: "The Routine That Reads Disk Geometry"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_partitioning"
    image_url: ""
    image_caption: ""
    content: "The `getdpb` subroutine retrieves disk parameters using BIOS interrupt `21h` with function `GET_DPB`. It calculates the number of sectors on the disk and the sector size, storing these values in registers for later use. This routine was essential for copying disks accurately, as it ensured the program understood the physical layout of the source and destination media. In 1982, floppy disks were the primary storage medium, and their geometry varied between formats. Chris Peters designed this routine to handle these variations dynamically, making DISKCOPY adaptable to different disk types. This approach influenced later disk utilities and operating systems, where dynamic detection of disk geometry became standard. It also highlights the low-level nature of early software, where programmers had to interact directly with hardware details."
  - id: "disk-entry-initialization"
    line_start: 225
    line_end: 311
    title: "Setting Up the Stack and Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"
    image_url: ""
    image_caption: ""
    content: "The `disk_entry` routine initializes the program's stack and memory, setting up local variables and allocating memory for the buffer. It uses BIOS interrupts to reset the disk system and request the largest available memory block. This setup was crucial for handling the large data transfers required during disk copying. In the early 1980s, memory was a scarce resource, and programs had to manage it carefully. Chris Peters designed this routine to maximize available memory, ensuring the program could handle disks larger than 64KB. This technique influenced later software, where dynamic memory allocation became a standard practice. It also reflects the challenges of programming for early PCs, where hardware limitations dictated software design."
  - id: "copyagn-restart-copying"
    line_start: 321
    line_end: 331
    title: "Restarting the Copy Process"
    wikipedia_url: "https://en.wikipedia.org/wiki/Floppy_disk"
    image_url: ""
    image_caption: ""
    content: "The `copyagn` routine resets the starting sector and prepares for another pass through the disk copying process. It checks whether the source and destination drives are the same, displaying appropriate messages to the user. This routine reflects the iterative nature of disk copying, where data is transferred in chunks until the entire disk is copied. In 1982, floppy disks were slow, and programs had to manage these operations efficiently to minimize user wait times. Chris Peters designed this routine to handle errors and user prompts gracefully, ensuring the program could recover from interruptions. This approach influenced later utilities, where iterative processing and user feedback became standard features."
  - id: "twodrv1-verify-disk-compatibility"
    line_start: 365
    line_end: 377
    title: "Checking Media and Size Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Disk_format"
    image_url: ""
    image_caption: ""
    content: "The `twodrv1` routine verifies that the source and destination disks have compatible media types and sizes. It compares the media descriptor byte and the total number of sectors, ensuring the disks match before proceeding. This check was critical in 1982, as floppy disks came in various formats, and mismatched disks could cause errors or data loss. Chris Peters included this routine to prevent such issues, making DISKCOPY more robust and reliable. This technique influenced later disk utilities, where compatibility checks became standard practice. It also highlights the challenges of working with diverse hardware in the early PC era."
  - id: "loop-main-copying-routine"
    line_start: 421
    line_end: 435
    title: "The Heart of Disk Copying"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_transfer"
    image_url: ""
    image_caption: ""
    content: "The `loop` routine performs the main disk copying operation, reading sectors from the source disk into memory and writing them to the destination disk. It uses BIOS interrupts to interact with the disk controller, ensuring data is transferred accurately. This routine reflects the low-level nature of early software, where programmers had to manage hardware interactions directly. In 1982, floppy disks were slow and prone to errors, requiring careful handling to avoid data corruption. Chris Peters designed this routine to handle these challenges, making DISKCOPY reliable and efficient. This approach influenced later file transfer utilities, where error handling and hardware abstraction became standard features."
  - id: "quitcopy-cleanup"
    line_start: 503
    line_end: 515
    title: "Cleaning Up After Copying"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `quitcopy` routine resets the disk system and displays a success message to the user. It releases allocated memory and prepares the program to exit gracefully. This cleanup was essential in 1982, as memory management was a manual process, and failing to release resources could cause system instability. Chris Peters designed this routine to ensure DISKCOPY left the system in a clean state, reflecting the meticulous attention to detail required in early software development. This approach influenced later programs, where cleanup routines became standard practice. It also underscores the challenges of programming for resource-constrained systems, where every byte of memory mattered."

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

                            
```
