---
title: "ALLOC.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/ALLOC.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/ALLOC.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "alloc"
order: 16
description: "Memory management routines in MS-DOS v2.0, showcasing early techniques for dynamic allocation under tight constraints."

summary:
  - point: "Introduces memory arena management for dynamic allocation"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Inspired by Unix/XENIX memory management concepts"
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"
  - point: "Efficient use of limited hardware resources on IBM PC"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "include-dosseg-and-dossym"
    line_start: 1
    line_end: 85
    title: "Why Include Files Were Crucial in Assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The INCLUDE directives at the start of this file bring in DOSSEG.ASM and DOSSYM.ASM, which define segment structures and symbolic constants used throughout the program. This modular approach allowed developers to reuse common definitions across multiple source files, reducing errors and ensuring consistency. In the early 1980s, this was a practical necessity for managing large assembly projects like MS-DOS, where every byte of memory mattered. Tim Paterson and the Microsoft team leveraged these include files to streamline development and maintain compatibility across different hardware configurations. This modularity influenced later programming practices, including the use of header files in C and other high-level languages."
  - id: "arena-free-process-loop"
    line_start: 89
    line_end: 189
    title: "How MS-DOS Freed Memory Blocks by Process"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This loop iterates through memory blocks in the arena and frees those owned by a specific process ID (PID). The logic checks each block's owner and sets it to a 'free' state if it matches the given PID. At the time, memory management was a critical challenge due to the limited RAM available in early PCs. The IBM PC launched with just 16KB to 64KB of RAM, making efficient memory reuse essential. This routine reflects the influence of Unix-like systems, where processes could allocate and release memory dynamically. The concept of freeing memory by PID laid the groundwork for modern garbage collection techniques and memory management systems in operating systems like Windows and Linux."
  - id: "check-signature"
    line_start: 193
    line_end: 199
    title: "The Signature Check That Prevented Memory Corruption"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This subroutine verifies the integrity of memory blocks by checking their signatures. Each block has a predefined signature that indicates its state (normal, end, or invalid). If the signature is incorrect, the carry flag is set, signaling an error. Memory corruption was a common issue in early systems due to hardware limitations and the lack of robust error-checking mechanisms. By implementing signature checks, MS-DOS reduced the risk of crashes caused by invalid memory access. This technique influenced later systems, where metadata and checksums became standard for ensuring data integrity in memory management."
  - id: "coalesce"
    line_start: 231
    line_end: 249
    title: "Combining Free Memory Blocks for Efficiency"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The Coalesce routine merges adjacent free memory blocks into a single larger block. This prevents fragmentation, which could lead to inefficient memory usage and allocation failures. Fragmentation was a significant problem in early PCs, where memory was scarce and allocation patterns were unpredictable. Inspired by Unix-like systems, this approach ensured that MS-DOS could make the most of the limited RAM available. The concept of coalescing free blocks became a standard practice in memory management, influencing algorithms in modern operating systems and programming languages like Java and Python."
  - id: "alloc-scan"
    line_start: 319
    line_end: 327
    title: "Scanning Memory for the Perfect Fit"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The alloc_scan routine searches through the memory arena for a free block that matches the requested size. It prioritizes blocks based on allocation methods (first, best, or last fit). This technique reflects the influence of Unix memory allocation strategies, adapted for the constraints of the IBM PC. By implementing multiple allocation strategies, MS-DOS provided flexibility for different use cases, balancing speed and efficiency. The concept of scanning for free memory blocks influenced later memory allocators, including malloc in C and dynamic memory management in modern operating systems."
  - id: "alloc-do-split-high"
    line_start: 441
    line_end: 467
    title: "Splitting Memory Blocks to Maximize Usability"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This routine splits a memory block into two parts: one for the requested size and another for the remaining free space. It ensures that memory is allocated efficiently, minimizing wasted space. Splitting blocks was a common technique in early memory management systems, where every byte counted. The logic here reflects the influence of Unix-like systems, which used similar strategies to optimize memory allocation. This approach became a foundational concept in memory management, influencing algorithms in modern operating systems and programming languages."
  - id: "setblock-grab"
    line_start: 605
    line_end: 623
    title: "Resizing Memory Blocks Without Breaking Everything"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The setblock_grab routine attempts to resize an allocated memory block to a new size specified by the caller. If the block cannot be resized, it returns an error. Resizing memory blocks was a challenging task in early systems due to fragmentation and limited resources. This routine reflects the influence of Unix-like systems, which introduced dynamic memory management concepts that MS-DOS adapted for the IBM PC. The ability to resize memory blocks dynamically became a standard feature in modern programming languages and operating systems, influencing functions like realloc in C."
  - id: "dealloc"
    line_start: 671
    line_end: 675
    title: "Freeing Memory: The Heart of Dynamic Allocation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The $DEALLOC routine frees a previously allocated memory block, marking it as available for future allocations. It verifies the block's integrity before releasing it, preventing memory corruption. Dynamic memory allocation and deallocation were critical for early PCs, where applications needed to manage memory efficiently. This routine reflects the influence of Unix-like systems, which popularized the concept of dynamic memory management. The ability to free memory dynamically became a cornerstone of modern programming, influencing garbage collection algorithms and memory management techniques in languages like Java, Python, and C++."

---

```asm
;

; xenix memory calls for MSDOS

;

; CAUTION: The following routines rely on the fact that arena_signature and

; arena_owner_system are all equal to zero and are contained in DI.

;

INCLUDE DOSSEG.ASM



CODE    SEGMENT BYTE PUBLIC  'CODE'

        ASSUME  SS:DOSGROUP,CS:DOSGROUP



.xlist

.xcref

INCLUDE DOSSYM.ASM

INCLUDE DEVSYM.ASM

.cref

.list



TITLE ALLOC.ASM - memory arena manager

NAME Alloc



SUBTTL memory allocation utility routines

PAGE

;

; arena data

;

        i_need  arena_head,WORD         ; seg address of start of arena

        i_need  CurrentPDB,WORD         ; current process data block addr

        i_need  FirstArena,WORD         ; first free block found

        i_need  BestArena,WORD          ; best free block found

        i_need  LastArena,WORD          ; last free block found

        i_need  AllocMethod,BYTE        ; how to alloc first(best)last



;

; arena_free_process

; input:    BX - PID of process

; output:   free all blocks allocated to that PID

;

        procedure   arena_free_process,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        MOV     DI,arena_signature

        MOV     AX,[arena_head]

        CALL    Check_Signature         ; ES <- AX, check for valid block



arena_free_process_loop:

        retc

        PUSH    ES

        POP     DS

        CMP     DS:[arena_owner],BX     ; is block owned by pid?

        JNZ     arena_free_next         ; no, skip to next

        MOV     DS:[arena_owner],DI     ; yes... free him



arena_free_next:

        CMP     BYTE PTR DS:[DI],arena_signature_end

                                        ; end of road, Jack?

        retz                            ; never come back no more

        CALL    arena_next              ; next item in ES/AX carry set if trash

        JMP     arena_free_process_loop



arena_free_process  ENDP



;

; arena_next

; input:    DS - pointer to block head

; output:   AX,ES - pointers to next head

;           carry set if trashed arena

;

        procedure   arena_next,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        MOV     AX,DS                   ; AX <- current block

        ADD     AX,DS:[arena_size]      ; AX <- AX + current block length

        INC     AX                      ; remember that header!

;

;       fall into check_signature and return

;

;       CALL    check_signature         ; ES <- AX, carry set if error

;       RET

arena_next  ENDP



;

; check_signature

; input:    AX - address of block header

; output:   ES=AX, carry set if signature is bad

;

        procedure   check_signature,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        MOV     ES,AX                   ; ES <- AX

        CMP     BYTE PTR ES:[DI],arena_signature_normal

                                        ; IF next signature = not_end THEN

        JZ      check_signature_ok      ;   GOTO ok

        CMP     BYTE PTR ES:[DI],arena_signature_end

                                        ; IF next signature = end then

        JZ      check_signature_ok      ;   GOTO ok

        STC                             ; set error

        return



check_signature_ok:

        CLC

        return

Check_signature ENDP



;

; Coalesce - combine free blocks ahead with current block

; input:    DS - pointer to head of free block

; output:   updated head of block, AX is next block

;           carry set -> trashed arena

;

        procedure   Coalesce,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        CMP     BYTE PTR DS:[DI],arena_signature_end

                                        ; IF current signature = END THEN

        retz                            ;   GOTO ok

        CALL    arena_next              ; ES, AX <- next block, Carry set if error

        retc                            ; IF no error THEN GOTO check



coalesce_check:

        CMP     ES:[arena_owner],DI

        retnz                           ; IF next block isnt free THEN return

        MOV     CX,ES:[arena_size]      ; CX <- next block size

        INC     CX                      ; CX <- CX + 1 (for header size)

        ADD     DS:[arena_size],CX      ; current size <- current size + CX

        MOV     CL,ES:[DI]              ; move up signature

        MOV     DS:[DI],CL

        JMP     coalesce                ; try again

Coalesce    ENDP



SUBTTL $Alloc - allocate space in memory

PAGE

;

;   Assembler usage:

;           MOV     BX,size

;           MOV     AH,Alloc

;           INT     21h

;         AX:0 is pointer to allocated memory

;         BX is max size if not enough memory

;

;   Description:

;           Alloc returns  a  pointer  to  a  free  block of

;       memory that has the requested  size  in  paragraphs.

;

;   Error return:

;           AX = error_not_enough_memory

;              = error_arena_trashed

;

        procedure   $ALLOC,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING



        XOR     AX,AX

        MOV     DI,AX



        MOV     [FirstArena],AX         ; init the options

        MOV     [BestArena],AX

        MOV     [LastArena],AX



        PUSH    AX                      ; alloc_max <- 0

        MOV     AX,[arena_head]         ; AX <- beginning of arena

        CALL    Check_signature         ; ES <- AX, carry set if error

        JC      alloc_err               ; IF error THEN GOTO err



alloc_scan:

        PUSH    ES

        POP     DS                      ; DS <- ES

        CMP     DS:[arena_owner],DI

        JZ      alloc_free              ; IF current block is free THEN examine



alloc_next:

        CMP     BYTE PTR DS:[DI],arena_signature_end

                                        ; IF current block is last THEN

        JZ      alloc_end               ;   GOTO end

        CALL    arena_next              ; AX, ES <- next block, Carry set if error

        JNC     alloc_scan              ; IF no error THEN GOTO scan



alloc_err:

        POP     AX



alloc_trashed:

        error   error_arena_trashed



alloc_end:

        CMP     [FirstArena],0

        JNZ     alloc_do_split



alloc_fail:

        invoke  get_user_stack

        POP     BX

        MOV     [SI].user_BX,BX

        error   error_not_enough_memory



alloc_free:

        CALL    coalesce                ; add following free block to current

        JC      alloc_err               ; IF error THEN GOTO err

        MOV     CX,DS:[arena_size]



        POP     DX                      ; check for max found size

        CMP     CX,DX

        JNA     alloc_test

        MOV     DX,CX



alloc_test:

        PUSH    DX

        CMP     BX,CX                   ; IF BX > size of current block THEN

        JA      alloc_next              ;   GOTO next



        CMP     [FirstArena],0

        JNZ     alloc_best

        MOV     [FirstArena],DS         ; save first one found

alloc_best:

        CMP     [BestArena],0

        JZ      alloc_make_best         ; initial best

        PUSH    ES

        MOV     ES,[BestArena]

        CMP     ES:[arena_size],CX      ; is size of best larger than found?

        POP     ES

        JBE     alloc_last

alloc_make_best:

        MOV     [BestArena],DS          ; assign best

alloc_last:

        MOV     [LastArena],DS          ; assign last

        JMP     alloc_next



;

; split the block high

;

alloc_do_split_high:

        MOV     DS,[LastArena]

        MOV     CX,DS:[arena_size]

        SUB     CX,BX

        MOV     DX,DS

        JE      alloc_set_owner         ; sizes are equal, no split

        ADD     DX,CX                   ; point to next block

        MOV     ES,DX                   ; no decrement!

        DEC     CX

        XCHG    BX,CX                   ; bx has size of lower block

        JMP     alloc_set_sizes         ; cx has upper (requested) size



;

; we have scanned memory and have found all appropriate blocks

; check for the type of allocation desired; first and best are identical

; last must be split high

;

alloc_do_split:

        CMP     BYTE PTR [AllocMethod], 1

        JA      alloc_do_split_high

        MOV     DS,[FirstArena]

        JB      alloc_get_size

        MOV     DS,[BestArena]

alloc_get_size:

        MOV     CX,DS:[arena_size]

        SUB     CX,BX                   ; get room left over

        MOV     AX,DS

        MOV     DX,AX                   ; save for owner setting

        JE      alloc_set_owner         ; IF BX = size THEN (don't split)

        ADD     AX,BX

        INC     AX                      ; remember the header

        MOV     ES,AX                   ; ES <- DS + BX (new header location)

        DEC     CX                      ; CX <- size of split block

alloc_set_sizes:

        MOV     DS:[arena_size],BX      ; current size <- BX

        MOV     ES:[arena_size],CX      ; split size <- CX

        MOV     BL,arena_signature_normal

        XCHG    BL,DS:[DI]              ; current signature <- 4D

        MOV     ES:[DI],BL              ; new block sig <- old block sig

        MOV     ES:[arena_owner],DI



alloc_set_owner:

        MOV     DS,DX

        MOV     AX,[CurrentPDB]

        MOV     DS:[arena_owner],AX

        MOV     AX,DS

        INC     AX

        POP     BX

        transfer    SYS_RET_OK



$alloc  ENDP



SUBTTL $SETBLOCK - change size of an allocated block (if possible)

PAGE

;

;   Assembler usage:

;           MOV     ES,block

;           MOV     BX,newsize

;           MOV     AH,setblock

;           INT     21h

;         if setblock fails for growing, BX will have the maximum

;         size possible

;   Error return:

;           AX = error_invalid_block

;              = error_arena_trashed

;              = error_not_enough_memory

;              = error_invalid_function

;

        procedure   $SETBLOCK,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        MOV     DI,arena_signature

        MOV     AX,ES

        DEC     AX

        CALL    check_signature

        JNC     setblock_grab



setblock_bad:

        JMP     alloc_trashed



setblock_grab:

        MOV     DS,AX

        CALL    coalesce

        JC      setblock_bad

        MOV     CX,DS:[arena_size]

        PUSH    CX

        CMP     BX,CX

        JBE     alloc_get_size

        JMP     alloc_fail

$setblock   ENDP



SUBTTL $DEALLOC - free previously allocated piece of memory

PAGE

;

;   Assembler usage:

;           MOV     ES,block

;           MOV     AH,dealloc

;           INT     21h

;

;   Error return:

;           AX = error_invalid_block

;              = error_arena_trashed

;

        procedure   $DEALLOC,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        MOV     DI,arena_signature

        MOV     AX,ES

        DEC     AX

        CALL    check_signature

        JC      dealloc_err

        MOV     ES:[arena_owner],DI

        transfer    SYS_RET_OK



dealloc_err:

        error   error_invalid_block

$DEALLOC    ENDP



SUBTTL $AllocOper - get/set allocation mechanism

PAGE

;

;   Assembler usage:

;           MOV     AH,AllocOper

;           MOV     BX,method

;           MOV     AL,func

;           INT     21h

;

;   Error return:

;           AX = error_invalid_function

;

        procedure   $AllocOper,NEAR

        ASSUME  DS:NOTHING,ES:NOTHING

        CMP     AL,1

        JB      AllocOperGet

        JZ      AllocOperSet

        error   error_invalid_function

AllocOperGet:

        MOV     AL,BYTE PTR [AllocMethod]

        XOR     AH,AH

        transfer    SYS_RET_OK

AllocOperSet:

        MOV     [AllocMethod],BL

        transfer    SYS_RET_OK

$AllocOper  ENDP



do_ext



CODE    ENDS

    END


```