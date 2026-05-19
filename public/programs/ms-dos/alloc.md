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
description: "ALLOC.ASM defines the memory allocation routines for MS-DOS v2.0, showcasing the transition from simple flat memory management to a more sophisticated arena-based system inspired by Unix."

summary:
  - point: "Introduced arena-based memory management in MS-DOS v2.0, inspired by Unix/XENIX."
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implemented coalescing of free memory blocks to reduce fragmentation."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Defined system calls for allocation, resizing, and deallocation of memory blocks."
    link: "https://en.wikipedia.org/wiki/Interrupt_21h"
    link_label: "INT 21h"
  - point: "Optimized allocation strategies (first-fit, best-fit, last-fit) for memory efficiency."
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Demonstrated early modular assembly programming practices for portability and maintainability."
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"

enhancements:
  - id: "include-dosseg-dossym"
    line_start: 13
    line_end: 37
    title: "Modular assembly: INCLUDE directives"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The file begins with INCLUDE directives, pulling in external definitions from DOSSEG.ASM, DOSSYM.ASM, and DEVSYM.ASM. These modular inclusions were a hallmark of assembly programming in the early 1980s, enabling developers to reuse code and maintain consistency across large projects. By centralizing definitions for segments, symbols, and device interactions, MS-DOS could adapt to different hardware environments more easily. In the context of MS-DOS v2.0, this modularity was crucial as Microsoft licensed the OS to dozens of OEMs, each with unique hardware configurations. The approach foreshadows modern practices in software development, such as header files in C and modules in Python. Without these modular inclusions, maintaining compatibility across the rapidly expanding PC ecosystem would have been nearly impossible."
  - id: "arena-free-process-loop"
    line_start: 89
    line_end: 101
    title: "Freeing memory blocks by process ID"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `arena_free_process_loop` subroutine iterates through memory blocks, freeing all blocks owned by a specific process ID (PID). This routine reflects the multitasking aspirations of MS-DOS v2.0, even though true multitasking wasn't implemented until later versions. In 1983, memory management was constrained by the limitations of the IBM PC's 8086 processor, which had a segmented memory model and only 1 MB of addressable space. By associating memory blocks with PIDs, MS-DOS laid the groundwork for more advanced process management seen in later operating systems. This technique influenced successors like Windows 3.x and even modern OS kernels, where memory isolation and cleanup are critical for stability and security."
  - id: "arena-next"
    line_start: 155
    line_end: 189
    title: "Navigating memory blocks: arena_next"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `arena_next` subroutine calculates the address of the next memory block by adding the size of the current block to its starting address. This simple yet effective mechanism ensures sequential traversal of memory blocks in the arena. In the early 1980s, memory fragmentation was a significant challenge due to the lack of sophisticated memory management hardware. The design of `arena_next` reflects the constraints of the era, where every byte of memory had to be manually tracked and optimized. This approach influenced later memory management systems, including dynamic memory allocation libraries in C (e.g., malloc/free) and garbage collection algorithms in modern languages like Java and Python."
  - id: "check-signature"
    line_start: 199
    line_end: 227
    title: "Validating memory block integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `Check_signature` subroutine verifies the integrity of a memory block by checking its signature. This safeguard prevents accidental or malicious corruption of the memory arena, a critical concern in the early days of computing when software bugs could easily crash the entire system. The use of signatures to validate memory blocks was inspired by techniques from Unix and XENIX, which influenced MS-DOS v2.0's design. This concept persists in modern computing, where checksums, hashes, and metadata are used to ensure data integrity. Without such validation, memory corruption could lead to unpredictable behavior, jeopardizing the stability of the operating system and applications."
  - id: "coalesce"
    line_start: 249
    line_end: 315
    title: "Reducing fragmentation: Coalesce free blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `Coalesce` subroutine combines adjacent free memory blocks into a single larger block, reducing fragmentation and improving allocation efficiency. Memory fragmentation was a pervasive problem in the early 1980s, especially on systems with limited RAM and no virtual memory. The coalescing technique was inspired by Unix's memory management strategies, which sought to maximize usable space in constrained environments. This approach became a standard practice in memory allocators, influencing designs like the buddy system and slab allocation in modern operating systems. By implementing coalescing in MS-DOS v2.0, Microsoft ensured that the OS could better handle the diverse and growing demands of software running on IBM PCs and clones."
  - id: "alloc"
    line_start: 547
    line_end: 595
    title: "Dynamic memory allocation: $ALLOC"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `$ALLOC` subroutine is the centerpiece of ALLOC.ASM, providing dynamic memory allocation for MS-DOS programs. It scans the memory arena for free blocks that match the requested size, using strategies like first-fit, best-fit, and last-fit to optimize allocation. In 1983, dynamic memory allocation was a relatively novel concept for personal computers, as earlier systems often relied on static memory allocation. The introduction of `$ALLOC` in MS-DOS v2.0 enabled more sophisticated applications, such as word processors and spreadsheets, to manage memory dynamically. This subroutine influenced the development of memory management libraries in higher-level languages like C and C++, shaping the way modern software interacts with system memory."
  - id: "setblock"
    line_start: 623
    line_end: 667
    title: "Resizing memory blocks: $SETBLOCK"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `$SETBLOCK` subroutine allows programs to resize previously allocated memory blocks, a feature that enhances flexibility and reduces waste. If the requested size is smaller, the block is truncated; if larger, the subroutine attempts to grow the block by coalescing adjacent free blocks. In the constrained memory environment of the IBM PC, resizing blocks dynamically was a significant advancement, inspired by Unix's realloc function. This capability paved the way for more complex applications that required variable memory sizes, such as database systems and graphic design software. The concept of resizing memory blocks persists in modern programming, influencing dynamic memory management APIs in languages like C and Java."
  - id: "dealloc"
    line_start: 675
    line_end: 713
    title: "Freeing memory: $DEALLOC"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `$DEALLOC` subroutine releases previously allocated memory blocks back to the arena, marking them as free. This operation is essential for preventing memory leaks, which can degrade system performance over time. In the early 1980s, memory management was a manual and error-prone process, and `$DEALLOC` represents an effort to automate and standardize it within MS-DOS. By ensuring that freed blocks are properly marked and available for reuse, this subroutine contributed to the stability and efficiency of the operating system. Its principles influenced later memory management systems, including garbage collection algorithms in modern programming languages like Java and Python."

---

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

         