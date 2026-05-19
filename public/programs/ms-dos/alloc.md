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
description: "This file implements memory allocation routines for MS-DOS 2.0, a foundational operating system that shaped personal computing."

summary:
  - point: "Introduces memory arenas for efficient allocation and deallocation"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Incorporates Unix-inspired memory management concepts"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Optimized for 8086 assembly and early IBM PC hardware constraints"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Uses coalescing to reduce memory fragmentation"
    link: "https://en.wikipedia.org/wiki/Fragmentation_(computing)"
    link_label: "Fragmentation"
  - point: "Supports multiple allocation strategies: first-fit, best-fit, last-fit"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"

enhancements:
  - id: "include-directives-for-symbols"
    line_start: 13
    line_end: 33
    title: "Symbol tables: the glue of assembly programs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The file begins with `INCLUDE` directives to import symbol tables (`DOSSEG.ASM`, `DOSSYM.ASM`, and `DEVSYM.ASM`). These tables define constants, macros, and memory locations that make the assembly code readable and maintainable. In the early 1980s, assembly programmers relied heavily on such symbol tables to avoid hardcoding addresses and values, which would make debugging and porting nearly impossible. Tim Paterson, who wrote the original 86-DOS, likely used similar techniques to keep his code modular during the six-week rush to complete the project. By 1983, MS-DOS 2.0 had evolved into a more sophisticated system, borrowing ideas from Unix, and these symbol tables reflect the growing complexity of the operating system. Without these inclusions, the code would be far harder to understand and modify, a critical consideration for an OS that would be licensed to dozens of OEMs."
  - id: "arena-free-process-loop"
    line_start: 89
    line_end: 101
    title: "Freeing memory: reclaiming resources for the system"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This loop iterates through memory blocks to free all blocks owned by a specific process. The programmer checks each block's ownership (`CMP DS:[arena_owner],BX`) and resets it to the system's ownership (`MOV DS:[arena_owner],DI`) if it matches. In 1983, memory management was a critical challenge for operating systems running on machines with limited RAM, often just 64KB or 128KB. MS-DOS had to ensure efficient reuse of memory to avoid crashes or slowdowns. The design here reflects the constraints of the IBM PC's hardware, including its segmented memory model. Tim Paterson and the Microsoft team were likely inspired by Unix's approach to process management but adapted it to fit the simpler architecture of the 8086 processor. This routine embodies the careful balance between simplicity and functionality that defined MS-DOS."
  - id: "check-signature-validation"
    line_start: 169
    line_end: 197
    title: "Signature checks: guarding against memory corruption"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_corruption"
    image_url: ""
    image_caption: ""
    content: "The `check_signature` routine validates the integrity of memory blocks by comparing their signatures (`CMP BYTE PTR ES:[DI],arena_signature_normal`). This ensures that blocks are correctly formatted and not corrupted. Memory corruption was a common problem in early computing, especially in systems with direct memory access and no hardware protection. By embedding signatures into block headers, MS-DOS could detect and prevent errors that might crash the system or corrupt data. This approach reflects the influence of Unix, which used similar techniques for managing process and file metadata. The routine's simplicity belies its importance: without such checks, MS-DOS would have been far less reliable, undermining its appeal to OEMs and users. Tim Paterson and the Microsoft team likely understood that robust memory management was essential for the success of their operating system in a competitive market."
  - id: "coalesce-memory-blocks"
    line_start: 215
    line_end: 247
    title: "Coalescing: fighting memory fragmentation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Fragmentation_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `Coalesce` routine combines adjacent free memory blocks into a single larger block, reducing fragmentation. Fragmentation occurs when memory is allocated and freed in a way that leaves small unusable gaps between blocks. On early IBM PCs with limited RAM, fragmentation could quickly degrade system performance. This routine iterates through free blocks (`CALL arena_next`) and merges them if they are contiguous (`ADD DS:[arena_size],CX`). The technique reflects the influence of Unix, which also implemented coalescing in its memory management. However, MS-DOS had to adapt these ideas to the simpler hardware of the 8086 processor. By including coalescing, Microsoft ensured that MS-DOS could make the most of the limited memory available, a key selling point for OEMs and end-users alike."
  - id: "alloc-strategy-first-best-last"
    line_start: 255
    line_end: 315
    title: "First-fit, best-fit, last-fit: choosing wisely"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "This section introduces three allocation strategies: first-fit, best-fit, and last-fit. The choice of strategy determines how memory blocks are selected during allocation. First-fit finds the first suitable block, best-fit finds the smallest block that meets the requirements, and last-fit finds the largest block. These strategies balance speed and efficiency, with first-fit being faster but potentially leading to fragmentation, while best-fit minimizes fragmentation but requires more computation. Tim Paterson and the Microsoft team likely borrowed these strategies from Unix, adapting them to the constraints of the IBM PC and 8086 processor. By supporting multiple strategies, MS-DOS could cater to different application needs, making it more versatile and appealing to OEMs. This flexibility contributed to MS-DOS's dominance in the early PC market."
  - id: "setblock-change-block-size"
    line_start: 553
    line_end: 623
    title: "Resizing memory blocks: a delicate operation"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `$SETBLOCK` routine allows the size of an allocated memory block to be changed, if possible. This involves validating the block (`CALL check_signature`), coalescing adjacent free blocks (`CALL coalesce`), and checking if the new size can be accommodated (`CMP BX,CX`). Resizing memory blocks was a challenging task in early operating systems due to the risk of fragmentation and corruption. MS-DOS's implementation reflects the influence of Unix, which supported dynamic memory allocation. However, the simpler architecture of the 8086 processor required careful optimization to ensure reliability and performance. By including this feature, MS-DOS provided developers with greater flexibility, enabling more sophisticated applications to run on limited hardware. This routine exemplifies the ingenuity required to adapt advanced concepts to the constraints of early PCs."
  - id: "dealloc-free-memory-block"
    line_start: 629
    line_end: 675
    title: "Deallocating memory: returning resources to the system"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `$DEALLOC` routine frees a previously allocated memory block, returning it to the pool of available resources. This involves validating the block (`CALL check_signature`) and resetting its ownership (`MOV ES:[arena_owner],DI`). Memory deallocation is a fundamental operation in any operating system, ensuring that resources are reused efficiently. In the early 1980s, systems like the IBM PC had limited RAM, making effective memory management critical. Tim Paterson and the Microsoft team designed MS-DOS to handle these constraints while maintaining simplicity and reliability. The deallocation process reflects the influence of Unix but is tailored to the simpler architecture of the 8086 processor. By implementing robust deallocation, MS-DOS ensured that applications could run smoothly without exhausting system resources, a key factor in its widespread adoption."
  - id: "allocoper-set-allocation-method"
    line_start: 681
    line_end: 729
    title: "Customizing allocation: user-defined strategies"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The `$AllocOper` routine allows the user to get or set the memory allocation method (first-fit, best-fit, or last-fit). This involves checking the requested function (`CMP AL,1`) and either retrieving the current method (`MOV AL,BYTE PTR [AllocMethod]`) or updating it (`MOV [AllocMethod],BL`). Customizable allocation strategies were uncommon in early operating systems, but MS-DOS's implementation reflects its Unix-inspired design. By allowing users to choose the strategy that best suits their needs, MS-DOS provided greater flexibility and control, making it more appealing to developers. This feature highlights the operating system's adaptability, a key factor in its success. Tim Paterson and the Microsoft team likely recognized the importance of catering to diverse application requirements, ensuring that MS-DOS could support a wide range of use cases."

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