---
title: "CPARSE.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/CPARSE.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/CPARSE.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "cparse"
order: 26
description: "Parsing and tokenizing input in MS-DOS v2.0, a foundational piece of software history."

summary:
  - point: "Introduces token parsing logic for command-line input"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Shows early use of assembly macros for modularity"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Highlights constraints of 8086 architecture in software design"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Incorporates Unix-inspired features like path parsing"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Demonstrates handling of Kanji character sets for internationalization"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"

enhancements:
  - id: "title-section-includes"
    line_start: 1
    line_end: 55
    title: "Setting the stage: modular assembly includes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The opening lines of CPARSE.ASM establish the modular structure of MS-DOS's assembly codebase. By including various external files like COMSW.ASM and DOSSYM.ASM, the programmer sets up shared symbols, macros, and constants that simplify the rest of the file. This approach reflects the growing complexity of software in the early 1980s, where modularity was becoming essential to manage larger codebases. Tim Paterson and the Microsoft team were working within the constraints of the Intel 8086 processor, which had limited memory and no built-in support for high-level abstractions. Assembly language was the only viable option for performance-critical software like MS-DOS. These includes also hint at the Unix-inspired design of MS-DOS v2.0, which introduced hierarchical directories and device drivers. The modularity seen here would influence future operating systems, laying the groundwork for more sophisticated development practices."
  - id: "assume-segment-registers"
    line_start: 59
    line_end: 81
    title: "Segment registers: navigating 8086 memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8086"
    image_url: ""
    image_caption: ""
    content: "The ASSUME directive assigns logical segments to the 8086's physical segment registers (CS, DS, ES). This was a critical step in assembly programming for the 8086, which used segmented memory to address up to 1 MB of RAM. Unlike modern flat memory models, the 8086 required programmers to explicitly manage segments, adding complexity to every program. In MS-DOS v2.0, these segments are grouped under TRANGROUP, reflecting the modular design of the operating system. This section also declares external functions and variables, such as DELIM and SWLIST, which are used throughout the file. These declarations reveal the interconnected nature of MS-DOS's codebase, where different modules work together to handle tasks like parsing, error handling, and device management. The reliance on segmented memory shaped the design of MS-DOS and other software of the era, influencing how programmers thought about data structures and memory allocation."
  - id: "cparse-main-subroutine"
    line_start: 85
    line_end: 171
    title: "CPARSE: Tokenizing the command-line input"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The CPARSE subroutine is the heart of this file, responsible for parsing and tokenizing command-line input. It begins by initializing registers and memory locations, such as STARTEL and SKPDEL, which track the start of path elements and skipped delimiters. The subroutine processes input one character at a time, calling helper routines like DELIM to identify special delimiters and UPCONV to convert characters to uppercase. The logic accounts for various edge cases, such as handling spaces, tabs, and carriage returns, as well as detecting special characters like '?' and '*'. This level of detail reflects the challenges of writing robust software for the IBM PC, where user input could vary widely. Tim Paterson and the Microsoft team were building on their experience with 86-DOS, adapting it to meet the needs of a broader audience. The tokenization logic seen here would become a standard feature of command-line interfaces, influencing how users interact with computers for decades."
  - id: "moredelim-loop"
    line_start: 173
    line_end: 195
    title: "Skipping delimiters: a tight assembly loop"
    wikipedia_url: "https://en.wikipedia.org/wiki/Control_flow"
    image_url: ""
    image_caption: ""
    content: "The moredelim label marks a loop that skips over delimiters in the input buffer. This loop uses instructions like LODSB to load the next character and CALL DELIM to check if it's a delimiter. If the character is a space or tab, the loop continues; otherwise, it processes the character or exits. This tight loop demonstrates the efficiency required in assembly programming, where every instruction counts. The logic ensures that the input buffer is cleanly parsed, even if the user enters irregular input. In the early 1980s, performance was a top priority for software developers, as hardware constraints were severe. The IBM PC's 4.77 MHz processor and limited RAM meant that even small inefficiencies could impact usability. This loop is a testament to the ingenuity of programmers like Tim Paterson, who optimized every detail to make MS-DOS fast and reliable."
  - id: "kanji-character-support"
    line_start: 203
    line_end: 249
    title: "Internationalization: Kanji character support"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "This section includes conditional logic for handling Kanji characters, a feature added to support Japanese users. The IF KANJI directive enables code that calls UPCONV and TESTKANJ, ensuring that Kanji characters are correctly processed during parsing. This reflects Microsoft's efforts to make MS-DOS a global product, accommodating non-English languages and character sets. In the early 1980s, internationalization was a relatively new concept in software development, driven by the growing popularity of personal computers worldwide. Japan was a key market for the IBM PC, and supporting Kanji was essential for its success there. This code highlights the challenges of adapting software to different languages, especially in assembly language, where every feature adds complexity. The inclusion of Kanji support in MS-DOS v2.0 paved the way for more sophisticated internationalization in later operating systems."
  - id: "path-parsing-logic"
    line_start: 267
    line_end: 397
    title: "Parsing paths: drive and directory handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Path_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section handles path parsing, including drive specifications and directory separators. It checks for characters like ':' and '/' to identify drives and directories, calling helper routines like move_char to store parsed elements in the token buffer. The logic also accounts for special cases, such as paths containing '?' or '*', which are used for wildcards. This reflects the influence of Unix on MS-DOS v2.0, as hierarchical paths and wildcards were key features of Unix file systems. In the early 1980s, most personal computers used flat file systems, where all files were stored in a single directory. MS-DOS v2.0's support for hierarchical paths was a major step forward, enabling more organized file management. This code demonstrates the complexity of implementing such features in assembly language, where every detail must be explicitly programmed."
  - id: "move-char-subroutine"
    line_start: 565
    line_end: 582
    title: "move_char: Storing parsed characters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "The move_char subroutine stores a character in the token buffer, incrementing counters like CX and ELCNT to track the number of characters and elements processed. This simple routine is a building block for the parsing logic, ensuring that parsed tokens are correctly stored for later use. In assembly language, such routines are essential for managing data, as there are no built-in abstractions like arrays or strings. The efficiency of move_char reflects the constraints of the 8086 processor, where every instruction had to be carefully chosen to minimize execution time and memory usage. This subroutine is a reminder of the craftsmanship required to write software in the early days of personal computing, where even basic operations demanded careful thought."

---

TITLE   CPARSE



        INCLUDE COMSW.ASM



.xlist

.xcref

        INCLUDE DOSSYM.ASM

        INCLUDE DEVSYM.ASM

        INCLUDE COMSEG.ASM

.list

.cref



        INCLUDE COMEQU.ASM



DATARES SEGMENT PUBLIC

DATARES ENDS



TRANDATA        SEGMENT PUBLIC

        EXTRN   BADCPMES:BYTE

TRANDATA        ENDS



TRANSPACE       SEGMENT PUBLIC

        EXTRN   CURDRV:BYTE,ELPOS:BYTE,STARTEL:WORD

        EXTRN   SKPDEL:BYTE,SWITCHAR:BYTE,ELCNT:BYTE



TRANSPACE       ENDS



TRANCODE        SEGMENT PUBLIC BYTE



ASSUME  CS:TRANGROUP,DS:TRANGROUP,ES:TRANGROUP



        EXTRN   DELIM:NEAR,UPCONV:NEAR,PATHCHRCMP:NEAR

        EXTRN   SWLIST:BYTE,BADCDERR:NEAR,SCANOFF:NEAR,CERROR:NEAR



        if  KANJI

        EXTRN   TESTKANJ:NEAR

        endif



SWCOUNT EQU 5



        PUBLIC  CPARSE



CPARSE:



;-----------------------------------------------------------------------;

; ENTRY:                                                                ;

;       DS:SI   Points input buffer                                     ;

;       ES:DI   Points to the token buffer                              ;

;       BL      Special delimiter for this call                         ;

;                   Always checked last                                 ;

;                   set it to space if there is no special delimiter    ;

; EXIT:                                                                 ;

;       DS:SI   Points to next char in the input buffer                 ;

;       ES:DI   Points to the token buffer                              ;

;       [STARTEL] Points to start of last element of path in token      ;

;               points to a NUL for no element strings 'd:' 'd:/'       ;

;       CX      Character count                                         ;

;       BH      Condition Code                                          ;

;                       Bit 1H of BH set if switch character            ;

;                               Token buffer contains char after        ;

;                               switch character                        ;

;                               BP has switch bits set (ORing only)     ;

;                       Bit 2H of BH set if ? or * in token             ;

;                               if * found element ? filled             ;

;                       Bit 4H of BH set if path sep in token           ;

;                       Bit 80H of BH set if the special delimiter      ;

;                          was skipped at the start of this token       ;

;               Token buffer always starts d: for non switch tokens     ;

;       CARRY SET                                                       ;

;           if CR on input                                              ;

;               token buffer not altered                                ;

;                                                                       ;

;       DOES NOT RETURN ON BAD PATH ERROR                               ;

; MODIFIES:                                                             ;

;       CX, SI, AX, BH, DX and the Carry Flag                           ;       ;

;                                                                       ;

; -----------------------------------------------------------------------;



        xor     ax,ax

        mov     [STARTEL],DI            ; No path element (Is DI correct?)

        mov     [ELPOS],al              ; Start in 8 char prefix

        mov     [SKPDEL],al             ; No skip delimiter yet

        mov     bh,al                   ; Init nothing

        pushf                           ; save flags

        push    di                      ; save the token buffer addrss

        xor     cx,cx                   ; no chars in token buffer

moredelim:

        LODSB

        CALL    DELIM

        JNZ     SCANCDONE

        CMP     AL,' '

        JZ      moredelim

        CMP     AL,9

        JZ      moredelim

        xchg    al,[SKPDEL]

        or      al,al

        jz      moredelim               ; One non space/tab delimiter allowed

        JMP     x_done                  ; Nul argument



SCANCDONE:



        IF      NOT KANJI

        call    UPCONV

        ENDIF



        cmp     al,bl                   ; Special delimiter?

        jnz     nospec

        or      bh,80H

        jmp     short moredelim



nospec:

        cmp     al,0DH                  ; a CR?

        jne     ncperror

        jmp     cperror

ncperror:

        cmp     al,[SWITCHAR]           ; is the char the switch char?

        jne     na_switch               ; yes, process...

        jmp     a_switch

na_switch:

        cmp     byte ptr [si],':'

        jne     anum_chard              ; Drive not specified



        IF      KANJI

        call    UPCONV

        ENDIF



        call    move_char

        lodsb                           ; Get the ':'

        call    move_char

        mov     [STARTEL],di

        mov     [ELCNT],0

        jmp     anum_test



anum_chard:

        mov     [STARTEL],di

        mov     [ELCNT],0               ; Store of this char sets it to one

        call    PATHCHRCMP              ; Starts with a pathchar?

        jnz     anum_char               ; no

        push    ax

        mov     al,[CURDRV]             ; Insert drive spec

        add     al,'A'

        call    move_char

        mov     al,':'

        call    move_char

        pop     ax

        mov     [STARTEL],di

        mov     [ELCNT],0



anum_char:



        IF      KANJI

        call    TESTKANJ

        jz      TESTDOT

        call    move_char

        lodsb

        jmp     short notspecial



TESTDOT:

        ENDIF



        cmp     al,'.'

        jnz     testquest

        inc     [ELPOS]                 ; flag in extension

        mov     [ELCNT],0FFH            ; Store of the '.' resets it to 0

testquest:

        cmp     al,'?'

        jnz     testsplat

        or      bh,2

testsplat:

        cmp     al,'*'

        jnz     testpath

        or      bh,2

        mov     ah,7

        cmp     [ELPOS],0

        jz      gotelcnt

        mov     ah,2

gotelcnt:

        mov     al,'?'

        sub     ah,[ELCNT]

        jc      badperr2

        xchg    ah,cl

        jcxz    testpathx

qmove:

        xchg    ah,cl

        call    move_char

        xchg    ah,cl

        loop    qmove

testpathx:

        xchg    ah,cl

testpath:

        call    PATHCHRCMP

        jnz     notspecial

        or      bh,4

        test    bh,2                    ; If just hit a '/', cannot have ? or * yet

        jnz     badperr

        mov     [STARTEL],di            ; New element

        INC     [STARTEL]               ; Point to char after /

        mov     [ELCNT],0FFH            ; Store of '/' sets it to 0

        mov     [ELPOS],0

notspecial:

        call    move_char               ; just an alphanum string

anum_test:

        lodsb



        IF      NOT KANJI

        call    UPCONV

        ENDIF



        call    DELIM

        je      x_done

        cmp     al,0DH

        je      x_done

        cmp     al,[SWITCHAR]

        je      x_done

        cmp     al,bl

        je      x_done

        cmp     al,':'                  ; ':' allowed as trailer because

                                        ; of devices

        IF      KANJI

        je      FOO15

        jmp     anum_char

FOO15:

        ELSE

        jne     anum_char

        ENDIF



        mov     byte ptr [si-1],' '     ; Change the trailing ':' to a space

        jmp     short x_done



badperr2:

        mov     dx,offset trangroup:BADCPMES

        jmp     CERROR



badperr:

        jmp     BADCDERR



cperror:

        dec     si                      ; adjust the pointer

        pop     di                      ; retrive token buffer address

        popf                            ; restore flags

        stc                             ; set the carry bit

        return



x_done:

        dec     si                      ; adjust for next round

        jmp     short out_token



a_switch:

        OR      BH,1                    ; Indicate switch

        OR      BP,GOTSWITCH

        CALL    SCANOFF

        INC     SI

        cmp     al,0DH

        je      cperror

        call    move_char               ; store the character

        CALL    UPCONV

        PUSH    ES

        PUSH    DI

        PUSH    CX

        PUSH    CS

        POP     ES

ASSUME  ES:TRANGROUP

        MOV     DI,OFFSET TRANGROUP:SWLIST

        MOV     CX,SWCOUNT

        REPNE   SCASB

        JNZ     out_tokenp

        MOV     AX,1

        SHL     AX,CL

        OR      BP,AX

out_tokenp:

        POP     CX

        POP     DI

        POP     ES

ASSUME  ES:NOTHING

out_token:

        mov     al,0

        stosb                           ; null at the end

        pop     di                      ; restore token buffer pointer

        popf

        clc                             ; clear carry flag

        return



move_char:

        stosb                           ; store char in token buffer

        inc     cx                      ; increment char count

        inc     [ELCNT]                 ; increment element count for * substi

        return



TRANCODE        ENDS

        END

            
                                                                                                                 