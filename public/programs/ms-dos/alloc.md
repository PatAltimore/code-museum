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
description: "Memory management routines in MS-DOS 2.0, showcasing early design decisions for dynamic allocation and system stability."

summary:
  - point: "Introduces memory allocation inspired by XENIX/Unix systems"
    link: "https://en.wikipedia.org/wiki/Xenix"
    link_label: "XENIX"
  - point: "Uses signature-based validation for memory blocks"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements coalescing of free memory blocks to optimize usage"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory Management"
  - point: "Supports dynamic resizing of allocated memory blocks"
    link: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    link_label: "Dynamic Memory Allocation"
  - point: "Reflects constraints of early 8086 hardware with segmented memory"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "include-dosseg-and-dossym"
    line_start: 13
    line_end: 37
    title: "Setting the stage: DOSSEG and symbols"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines establish the foundational setup for the memory allocation routines by including DOSSEG.ASM and DOSSYM.ASM. DOSSEG defines the memory segmentation model, crucial for the 8086 architecture with its segmented memory. DOSSYM provides symbolic constants and macros used throughout the file. In the early 1980s, programmers had to manually manage memory segmentation due to hardware constraints. The 8086 processor, with its 16-bit address space, required careful handling of segments to access more than 64KB of memory. Tim Paterson, adapting ideas from CP/M and XENIX, designed MS-DOS to work within these limitations. These inclusions reflect the modularity and reuse that were becoming standard in software development. By defining these dependencies upfront, the code gains clarity and maintainability, a hallmark of Paterson's pragmatic approach."
  - id: "arena-free-process"
    line_start: 89
    line_end: 115
    title: "Freeing memory: Process cleanup"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `arena_free_process` routine is responsible for freeing all memory blocks allocated to a specific process ID (PID). It loops through the memory arena, checking each block's ownership, and marks blocks owned by the given PID as free. This routine highlights the importance of memory management in an era when multitasking was limited but still required efficient resource handling. In 1983, MS-DOS 2.0 introduced features inspired by Unix, including file handles and subdirectories, pushing the boundaries of what single-tasking systems could do. This routine reflects the careful balance between simplicity and functionality. By ensuring that memory is freed when a process ends, it prevents fragmentation and ensures stability, a critical concern for early PCs with limited RAM. The design also anticipates future needs, laying groundwork for more advanced memory management techniques."
  - id: "check-signature"
    line_start: 169
    line_end: 197
    title: "Signature validation: Memory integrity"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `check_signature` routine validates the integrity of memory blocks by checking their signature values. It ensures that each block has a valid header, either `arena_signature_normal` or `arena_signature_end`. This approach protects against memory corruption, a common issue in early systems where bugs or hardware glitches could overwrite critical data. In the early 1980s, software reliability was paramount, as users were just beginning to trust PCs for business and personal use. Tim Paterson's decision to include signature validation reflects his focus on robustness. This technique, borrowed from systems like XENIX, became a standard practice in memory management. It also highlights the constraints of the time: with no hardware memory protection, software had to enforce its own safeguards. This routine is a precursor to modern practices like checksums and metadata validation in memory management systems."
  - id: "coalesce-free-blocks"
    line_start: 205
    line_end: 247
    title: "Coalescing: Combining free memory blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `Coalesce` routine combines adjacent free memory blocks into a single larger block. This technique minimizes fragmentation and maximizes usable memory, critical for systems with limited RAM. In 1983, the IBM PC typically shipped with 64KB to 256KB of memory, making efficient allocation essential. Inspired by Unix's memory management, MS-DOS 2.0 introduced this feature to improve performance and reliability. Coalescing reflects the ingenuity required to work within the constraints of the 8086 architecture, where segmented memory added complexity to allocation. This routine also underscores the transition from static to dynamic memory management, a shift that enabled more flexible and powerful software. While modern systems automate coalescing, this manual implementation demonstrates the careful thought and precision required in early software development."
  - id: "alloc-memory"
    line_start: 547
    line_end: 595
    title: "Allocating memory: Finding the best fit"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    image_url: ""
    image_caption: ""
    content: "The `$ALLOC` routine allocates memory blocks based on the requested size and allocation method (first, best, or last fit). It scans the memory arena, evaluates free blocks, and selects the most suitable one. This routine reflects the influence of Unix-like systems on MS-DOS 2.0's design, introducing dynamic memory allocation to a single-tasking environment. In 1983, PCs were transitioning from static memory models to more flexible approaches, driven by the need to support diverse applications. Tim Paterson's implementation balances simplicity with functionality, ensuring efficient use of limited resources. The choice of allocation method allows customization, a nod to the growing complexity of software demands. This routine laid the groundwork for more sophisticated memory management techniques, influencing future operating systems and applications."
  - id: "setblock-resize"
    line_start: 623
    line_end: 667
    title: "Resizing memory: Adapting to change"
    wikipedia_url: "https://en.wikipedia.org/wiki/Dynamic_memory_allocation"
    image_url: ""
    image_caption: ""
    content: "The `$SETBLOCK` routine allows resizing of allocated memory blocks, either growing or shrinking them based on the requested size. It validates the block's integrity, checks available space, and adjusts the block size if possible. This feature reflects the growing sophistication of MS-DOS 2.0, inspired by Unix's dynamic memory capabilities. In the early 1980s, resizing memory was a novel concept for PC operating systems, enabling more flexible application behavior. Tim Paterson's design anticipates future needs, ensuring that MS-DOS could support increasingly complex software. The routine also highlights the constraints of the time: resizing requires careful validation and coalescing to prevent fragmentation. This approach influenced later systems, where dynamic memory resizing became a standard feature."
  - id: "dealloc-memory"
    line_start: 675
    line_end: 713
    title: "Deallocating memory: Releasing resources"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `$DEALLOC` routine frees previously allocated memory blocks, marking them as available for future use. It validates the block's integrity before releasing it, ensuring system stability. In 1983, memory management was a critical concern for PC operating systems, as limited RAM required careful allocation and deallocation. Tim Paterson's implementation reflects his focus on reliability and efficiency, inspired by Unix's approach to resource management. This routine prevents fragmentation and ensures that memory is reused effectively, a key consideration for early PCs. The design also anticipates future needs, laying the groundwork for more advanced memory management techniques. While modern systems automate deallocation, this manual implementation demonstrates the precision required in early software development."
  - id: "allocoper-method"
    line_start: 729
    line_end: 729
    title: "Allocation method: First, best, or last"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `$AllocOper` routine allows users to get or set the memory allocation method, choosing between first fit, best fit, or last fit. This customization reflects the growing complexity of software demands in the early 1980s, as PCs began supporting diverse applications. Tim Paterson's design balances simplicity with flexibility, ensuring efficient use of limited resources. Inspired by Unix-like systems, this feature highlights the influence of advanced operating systems on MS-DOS 2.0. The ability to choose an allocation method demonstrates the transition from static to dynamic memory management, a shift that enabled more flexible and powerful software. This routine laid the groundwork for more sophisticated memory management techniques, influencing future operating systems and applications."

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