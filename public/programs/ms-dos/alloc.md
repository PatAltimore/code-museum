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
description: "Memory management routines in MS-DOS v2.0, showcasing early techniques for handling dynamic memory allocation in constrained environments."

summary:
  - point: "Introduced memory arenas for dynamic allocation"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Adopted Unix-inspired memory management concepts"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Optimized for 8086 hardware constraints"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Set groundwork for memory management in later DOS versions"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Used by hundreds of OEMs in the early PC era"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "include-dosseg-and-dossym"
    line_start: 1
    line_end: 33
    title: "The Headers That Defined MS-DOS Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines include critical assembly headers (`DOSSEG.ASM`, `DOSSYM.ASM`, and `DEVSYM.ASM`) that define the memory management structures and symbols used throughout the file. At the time, MS-DOS was transitioning from a simple single-tasking OS to a more Unix-inspired system with features like subdirectories and device drivers. These headers provided the foundational definitions for memory arenas, process data blocks, and allocation methods. Tim Paterson and Microsoft engineers used these headers to ensure consistency and modularity across the codebase. By abstracting hardware-specific details into headers, they made the code easier to adapt for different OEMs, a key factor in MS-DOS's widespread adoption. This modular approach influenced later operating systems, including Windows and Linux, where header files and modularity became standard practice."
  - id: "arena-free-process-loop"
    line_start: 89
    line_end: 101
    title: "Freeing Memory Blocks by Process ID"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This subroutine loops through memory blocks in the arena and frees all blocks allocated to a specific process ID (PID). The programmer's immediate goal was to ensure that memory allocated to terminated processes could be reclaimed efficiently. The use of `arena_signature` and `arena_owner` fields reflects the structured memory management approach inspired by Unix. In 1983, memory management was constrained by the 8086 processor's segmented architecture, which limited addressable memory to 1MB. Efficient reclamation of memory was critical to keep the system running smoothly. This technique influenced future memory management strategies, including garbage collection in higher-level languages like Java and Python. The concept of associating memory blocks with process IDs laid the groundwork for modern operating systems' process isolation and memory protection mechanisms."
  - id: "check-signature"
    line_start: 193
    line_end: 197
    title: "Validating Memory Block Integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This subroutine checks the integrity of a memory block by validating its signature. The `arena_signature` field ensures that the block is either normal or marked as the end of the arena. If the signature is invalid, the carry flag is set to indicate an error. Memory corruption was a common issue in early computing due to hardware glitches or software bugs. By implementing signature checks, MS-DOS introduced a rudimentary form of memory protection. This approach was inspired by similar techniques in Unix and other operating systems of the era. The concept of using signatures to validate memory blocks influenced later systems, including modern file systems and databases, which use checksums and other integrity checks to prevent corruption."
  - id: "coalesce"
    line_start: 231
    line_end: 247
    title: "Combining Adjacent Free Memory Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `Coalesce` subroutine combines adjacent free memory blocks into a single larger block. This technique minimizes fragmentation and maximizes usable memory, a critical concern in the constrained environment of the 8086 processor. The subroutine iterates through the arena, checking ownership and size fields to determine whether blocks can be merged. Fragmentation was a major challenge in early operating systems, as memory allocation and deallocation patterns could quickly lead to unusable gaps. Coalescing free blocks was a direct response to this problem, inspired by similar strategies in Unix. This technique became a standard feature in memory allocators, influencing designs like the buddy system and slab allocation used in modern kernels."
  - id: "alloc-scan"
    line_start: 319
    line_end: 327
    title: "Scanning for Free Memory Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `alloc_scan` subroutine iterates through the memory arena to find free blocks that match the requested size. It uses the `arena_owner` field to identify free blocks and checks their size against the requested size (`BX`). This subroutine is part of the `$ALLOC` routine, which handles dynamic memory allocation. At the time, dynamic memory allocation was a relatively new concept, and MS-DOS's implementation was heavily influenced by Unix's malloc function. The ability to scan and allocate memory dynamically was a key feature that enabled more complex applications to run on MS-DOS. This approach influenced later memory allocation strategies, including the heap management systems used in modern programming languages like C++ and Java."
  - id: "alloc-do-split-high"
    line_start: 441
    line_end: 467
    title: "Splitting Memory Blocks for Allocation"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `alloc_do_split_high` subroutine splits a memory block into two parts: one for the requested allocation and one for the remaining free space. This technique ensures efficient use of memory by avoiding over-allocation. The subroutine adjusts the size and signature fields of the split blocks to maintain arena integrity. Splitting blocks was a common technique in early memory management systems, inspired by Unix's malloc function. It allowed MS-DOS to handle dynamic memory allocation efficiently despite the limited resources of the 8086 processor. This approach influenced later memory management systems, including the buddy system and slab allocation used in modern operating systems."
  - id: "setblock-grab"
    line_start: 605
    line_end: 623
    title: "Resizing Allocated Memory Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `setblock_grab` subroutine attempts to resize an allocated memory block to match a new requested size (`BX`). It uses the `coalesce` subroutine to merge adjacent free blocks if possible, ensuring that the resized block fits within the available memory. Resizing memory blocks was a challenging problem in early operating systems due to fragmentation and limited resources. MS-DOS's implementation was inspired by Unix's realloc function, which allowed dynamic resizing of memory allocations. This feature enabled more flexible memory management, paving the way for applications that required variable-sized data structures. The concept of resizing memory blocks influenced later systems, including dynamic memory allocators in modern programming languages like C++ and Python."
  - id: "dealloc"
    line_start: 671
    line_end: 675
    title: "Freeing Allocated Memory Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `$DEALLOC` subroutine frees a previously allocated memory block by resetting its `arena_owner` field to the `arena_signature` value. This marks the block as free and available for future allocations. The subroutine also validates the block's signature to ensure integrity before deallocating it. Memory deallocation was a critical feature in early operating systems, as it allowed efficient reuse of limited resources. MS-DOS's approach was inspired by Unix's free function, which provided similar functionality. The ability to deallocate memory dynamically influenced later systems, including garbage collection mechanisms in higher-level languages like Java and C#. This subroutine exemplifies the structured memory management techniques that became standard practice in operating system design."

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
