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
description: "This file contains the parsing routines for MS-DOS 2.0, a foundational operating system that shaped the PC era."

summary:
  - point: "Introduces token parsing for command-line input"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Handles special delimiters and path parsing"
    link: "https://en.wikipedia.org/wiki/Path_(computing)"
    link_label: "Path parsing"
  - point: "Incorporates Unix-inspired features like subdirectories"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Optimized for the 8086 processor's constraints"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Pioneered techniques still relevant in modern command-line interfaces"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "CLI"

enhancements:
  - id: "cparse-main-parsing-routine"
    line_start: 85
    line_end: 171
    title: "Parsing Tokens: The Heart of MS-DOS Input"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The CPARSE routine is the main entry point for parsing command-line tokens in MS-DOS 2.0. It processes input buffers, identifies delimiters, and handles special cases like path separators and wildcard characters. The routine uses registers to track the input buffer (DS:SI), token buffer (ES:DI), and special delimiters (BL). It also sets flags in the BH register to indicate conditions like the presence of wildcard characters ('*' or '?') or path separators ('/'). This routine was critical for enabling MS-DOS to interpret user commands and file paths effectively. In 1983, the computing landscape was dominated by the IBM PC, and MS-DOS 2.0 was designed to support its hardware while introducing features inspired by Unix, such as hierarchical file systems. Tim Paterson and the Microsoft team had to optimize this routine for the Intel 8086 processor, which had limited registers and memory. The decision to borrow Unix-like concepts was strategic, as it allowed MS-DOS to appeal to developers familiar with Unix while maintaining simplicity for end users. CPARSE's influence extended far beyond MS-DOS. Its approach to token parsing and handling special characters became a standard in command-line interfaces, influencing later systems like Windows Command Prompt and Unix shells. Developers studying MS-DOS source code often cite CPARSE as a model for efficient parsing routines in resource-constrained environments. The techniques pioneered here are still relevant in modern CLI design, where parsing user input remains a fundamental task."
  - id: "moredelim-skip-delimiters"
    line_start: 173
    line_end: 195
    title: "Skipping Delimiters: A Simple Yet Vital Step"
    wikipedia_url: "https://en.wikipedia.org/wiki/Delimiter"
    image_url: ""
    image_caption: ""
    content: "The moredelim section of the code handles the skipping of delimiters like spaces and tabs in the input buffer. It calls the DELIM subroutine to check if the current character is a delimiter and continues looping until a non-delimiter character is found. This ensures that the parser starts processing meaningful input rather than whitespace or irrelevant characters. In the early 1980s, command-line interfaces were the primary way users interacted with computers, and parsing input efficiently was crucial. Delimiters were a common feature in text-based input, separating commands, arguments, and paths. The moredelim routine reflects the constraints of the era, where every byte of memory and CPU cycle mattered. By handling delimiters early in the parsing process, MS-DOS minimized unnecessary computations and ensured faster command processing. This technique influenced later systems by establishing a clear separation between input preprocessing and token parsing. Modern programming languages and frameworks often include built-in functions for trimming whitespace and handling delimiters, a direct evolution of the approach seen here. The simplicity and effectiveness of moredelim serve as a reminder of how small optimizations can have a lasting impact on software design."
  - id: "scancdone-uppercase-conversion"
    line_start: 199
    line_end: 217
    title: "Uppercase Conversion: A Case for Compatibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Case_sensitivity"
    image_url: ""
    image_caption: ""
    content: "The SCANCDONE section includes a call to the UPCONV subroutine, which converts characters to uppercase. This ensures that MS-DOS treats file names and commands as case-insensitive, a design choice that simplified user interaction and avoided confusion. The routine also checks for special delimiters and sets flags accordingly. Case insensitivity was a deliberate decision in MS-DOS, influenced by the need to make the operating system accessible to non-technical users. At the time, Unix systems were case-sensitive, which could lead to errors if users were unfamiliar with the conventions. By converting input to uppercase, MS-DOS eliminated this potential source of frustration. The Intel 8086 processor's instruction set made such conversions relatively straightforward, allowing the routine to be implemented efficiently. This approach became a defining feature of MS-DOS and influenced other operating systems like Windows, which inherited case insensitivity for file names. While modern systems like Linux and macOS have embraced case sensitivity, the legacy of MS-DOS's design can still be seen in the default behavior of Windows file systems and command-line tools. The SCANCDONE section highlights the trade-offs between user-friendly design and technical precision, a balance that continues to shape software development today."
  - id: "testdot-extension-handling"
    line_start: 315
    line_end: 441
    title: "Handling File Extensions: The Dot Matters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Filename_extension"
    image_url: ""
    image_caption: ""
    content: "The TESTDOT section checks for the presence of a dot ('.') in the input, signaling the start of a file extension. If a dot is found, the routine sets flags to indicate that the parser is now processing the extension part of the file name. It also resets the element count, ensuring that subsequent characters are treated as part of the extension. File extensions were a critical feature in MS-DOS, used to identify file types and associate them with specific programs. This convention originated in earlier operating systems like CP/M and was carried forward into MS-DOS. The TESTDOT routine reflects the importance of maintaining compatibility with existing software while introducing new features. At the time, the IBM PC's hardware constraints required efficient parsing routines, and this section demonstrates how MS-DOS balanced functionality with performance. The concept of file extensions became ubiquitous, influencing not only operating systems but also application software and file formats. Modern systems like Windows and macOS still rely on extensions to manage file associations, a testament to the enduring impact of MS-DOS's design. The TESTDOT routine is a small but significant part of this legacy, showcasing how careful attention to detail can shape the user experience for decades."
  - id: "move-char-token-buffer"
    line_start: 565
    line_end: 577
    title: "Storing Characters: Building the Token Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The move_char routine stores a character in the token buffer, increments the character count (CX), and updates the element count (ELCNT). This routine is called repeatedly during parsing to construct tokens from the input buffer. By isolating this functionality, MS-DOS ensures that token construction is efficient and modular. Buffer management was a critical aspect of software development in the early 1980s, especially for systems like MS-DOS that operated under severe memory constraints. The move_char routine reflects the need to optimize every operation, as even small inefficiencies could impact performance on the Intel 8086 processor. Tim Paterson and the Microsoft team designed MS-DOS to handle diverse input scenarios, from simple commands to complex file paths, and this routine played a key role in achieving that goal. The principles demonstrated in move_char—modularity, efficiency, and clarity—continue to influence software development. Modern programming languages and frameworks often include libraries for buffer management, building on the techniques pioneered here. The move_char routine is a reminder of how foundational concepts in computing can evolve while remaining relevant across generations."

---

```asm
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



```
