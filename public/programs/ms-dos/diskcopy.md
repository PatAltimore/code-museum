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
description: "The DISKCOPY utility from MS-DOS v2.0, a program that allowed users to duplicate floppy disks, represents a critical piece of early personal computing history, showcasing the evolution of software design under strict hardware constraints."

summary:
  - point: "DISKCOPY was written by Chris Peters in 1982, reflecting Microsoft's shift to more robust utilities in MS-DOS v2.0."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "The program demonstrates direct hardware interaction via BIOS interrupts, a hallmark of early DOS utilities."
    link: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    link_label: "BIOS Interrupts"
  - point: "DISKCOPY's memory management reflects the challenges of working within the 640KB conventional memory limit of the IBM PC."
    link: "https://en.wikipedia.org/wiki/Conventional_memory"
    link_label: "Conventional Memory"
  - point: "The utility's design prioritizes simplicity and efficiency, critical for users operating in a command-line environment."
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-Line Interface"
  - point: "DISKCOPY's reliance on assembly language highlights the performance-driven programming practices of the era."
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "diskcopy-entry-point"
    line_start: 93
    line_end: 121
    title: "A single jump defines the program's flow"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `diskcopy` entry point, defined at line 93, immediately redirects program execution to `disk_entry`. This design reflects the modularity and simplicity of early DOS utilities, where the main entry point often served as a placeholder for initialization routines. Written in 1982 by Chris Peters, DISKCOPY was part of Microsoft's effort to enhance MS-DOS with practical utilities for the IBM PC. At the time, floppy disks were the primary medium for software distribution and data storage, and duplicating them was a common task. The jump instruction here encapsulates the program's purpose: to streamline disk copying while minimizing complexity. This approach ensured the utility could be easily invoked from the command line, adhering to the constraints of the era's hardware and user expectations. The modularity seen here influenced later DOS programs and utilities, embedding the principle of clear program flow into the DNA of personal computing."
  - id: "print-subroutine"
    line_start: 127
    line_end: 129
    title: "Printing messages via BIOS interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The `print` subroutine, beginning at line 127, uses BIOS interrupt 21h to output a string to the console. This routine is a cornerstone of user interaction in early DOS programs, where direct hardware access via interrupts was the norm. In 1982, the IBM PC's text-based interface required programmers to leverage BIOS calls for tasks like displaying messages. By invoking interrupt 21h with the `STD_CON_STRING_OUTPUT` function, the program ensures compatibility across different hardware configurations. Chris Peters, the author of DISKCOPY, likely designed this subroutine to simplify message handling in the utility, allowing users to receive clear prompts and error messages during disk copying. This method of direct interaction with the BIOS reflects the low-level programming practices of the time, where efficiency and hardware control were paramount. The reliance on BIOS interrupts persisted in DOS programming for years, shaping the development of utilities and applications in the early PC era."
  - id: "getkey-subroutine"
    line_start: 135
    line_end: 151
    title: "Waiting for user input with BIOS calls"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The `getkey` subroutine, starting at line 135, waits for a key press from the user using BIOS interrupt 21h. This routine is essential for interactive utilities like DISKCOPY, where user confirmation is required at various stages. By displaying a prompt message and invoking the `WAIT_FOR_KEY_PRESS` function, the program ensures that users are actively engaged in the disk copying process. In the early 1980s, interactive programs like this were a significant step forward from batch processing systems, giving users more control over their computing tasks. Chris Peters designed this subroutine to be simple yet effective, leveraging the IBM PC's BIOS to handle input without needing complex routines. This approach highlights the efficiency-driven mindset of early DOS programmers, who worked within the constraints of limited memory and processing power. The `getkey` routine exemplifies the user-centric design philosophy that became a hallmark of DOS utilities."
  - id: "getdpb-subroutine"
    line_start: 153
    line_end: 181
    title: "Retrieving disk parameters via BIOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The `getdpb` subroutine, beginning at line 153, retrieves disk parameters using BIOS interrupt 21h. This routine is critical for determining the number of sectors, sector size, and media type of the disk being copied. By accessing the Disk Parameter Block (DPB), the program ensures compatibility with various disk formats, a necessity in the early 1980s when floppy disk standards were still evolving. Chris Peters implemented this subroutine to handle the technical details of disk copying transparently, allowing users to focus on the task rather than the underlying mechanics. The use of BIOS interrupts reflects the low-level programming practices of the era, where direct hardware interaction was essential for performance and reliability. This routine showcases the ingenuity of early DOS programmers, who maximized the capabilities of the IBM PC's hardware to deliver practical utilities. The principles demonstrated here influenced the design of disk utilities for years to come, laying the groundwork for more advanced file systems and storage solutions."
  - id: "disk-entry-subroutine"
    line_start: 225
    line_end: 311
    title: "Setting up memory and initializing disk copying"
    wikipedia_url: "https://en.wikipedia.org/wiki/Conventional_memory"
    image_url: ""
    image_caption: ""
    content: "The `disk_entry` subroutine, starting at line 225, initializes the disk copying process by setting up the stack, memory, and disk parameters. This routine reflects the challenges of working within the IBM PC's 640KB conventional memory limit, a constraint that shaped software design in the early 1980s. By adjusting the stack pointer and releasing extra memory blocks, the program optimizes memory usage for the task at hand. Chris Peters designed this subroutine to handle the technical complexities of disk copying transparently, ensuring the utility could operate efficiently on a wide range of hardware configurations. The memory management techniques seen here highlight the ingenuity of early DOS programmers, who had to balance performance, compatibility, and simplicity in their designs. This routine also demonstrates the modularity of DISKCOPY, where initialization is separated from the main copying logic, a design principle that influenced later software development practices. The memory setup here is a testament to the resourcefulness of programmers working under tight constraints, paving the way for more sophisticated utilities in the years to come."
  - id: "copyagn-subroutine"
    line_start: 321
    line_end: 331
    title: "Reinitializing for another copy attempt"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `copyagn` subroutine, beginning at line 321, reinitializes variables and prepares the program for another copy attempt. This routine reflects the iterative nature of command-line utilities, where users often need to repeat tasks with slight variations. By resetting the start sector and checking if the source and destination drives are the same, the program ensures that each copy attempt begins with a clean slate. Chris Peters designed this subroutine to simplify the user experience, allowing for seamless retries without restarting the program. In the early 1980s, this level of user-centric design was a significant advancement, making utilities like DISKCOPY more accessible to non-technical users. The modularity and simplicity of this routine highlight the efficiency-driven mindset of DOS programmers, who prioritized functionality and ease of use in their designs. The iterative approach seen here influenced the development of command-line utilities for years, embedding the principle of repeatable tasks into the DNA of personal computing."

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