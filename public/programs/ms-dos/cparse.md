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
description: "This file contains the parsing routines for MS-DOS 2.0, a foundational rewrite that introduced Unix-inspired features to the operating system."

summary:
  - point: "Introduces token parsing for command-line input"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Handles special delimiters and path elements"
    link: "https://en.wikipedia.org/wiki/Path_(computing)"
    link_label: "Path"
  - point: "Incorporates Kanji support for Japanese computing"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "Implements error handling for invalid paths"
    link: "https://en.wikipedia.org/wiki/Error_handling"
    link_label: "Error Handling"
  - point: "Optimized for the constraints of early 1980s hardware"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "cparse-token-parsing"
    line_start: 85
    line_end: 171
    title: "Parsing tokens: the heart of MS-DOS commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The CPARSE routine is the entry point for parsing tokens from command-line input. It processes strings into discrete tokens, handling delimiters, path elements, and special characters. In the early 1980s, command-line interfaces were the primary way users interacted with computers, and parsing routines like this were essential for interpreting user commands. Tim Paterson, the original author of MS-DOS, designed this code to work efficiently within the constraints of the Intel 8086 processor and limited memory. The routine's ability to handle special delimiters and path separators reflects the influence of Unix, which inspired many of MS-DOS 2.0's features. This code laid the groundwork for decades of command-line parsing techniques, influencing everything from batch scripts to modern shell environments."
  - id: "moredelim-skip-delimiters"
    line_start: 173
    line_end: 195
    title: "Skipping delimiters: cleaning up input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Delimiter"
    image_url: ""
    image_caption: ""
    content: "The moredelim routine ensures that unnecessary delimiters like spaces and tabs are skipped during token parsing. This step is crucial for cleaning up user input and preparing it for further processing. In 1983, when MS-DOS 2.0 was released, personal computers were still a novelty, and user input was often inconsistent or error-prone. By implementing this routine, the developers improved the robustness of the operating system, making it more forgiving and user-friendly. This approach to handling delimiters became a standard practice in parsing algorithms, influencing software design for years to come."
  - id: "scancdone-special-delimiters"
    line_start: 199
    line_end: 217
    title: "Detecting special delimiters in input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Delimiter"
    image_url: ""
    image_caption: ""
    content: "The SCANCDONE routine checks for special delimiters specified by the caller, such as a space or tab, and processes them accordingly. This flexibility allowed MS-DOS to adapt to various command-line conventions and user preferences. In the early 1980s, the ability to customize parsing behavior was a significant advancement, as it enabled software developers to create more versatile applications. The routine's design reflects the modularity and adaptability that were hallmarks of MS-DOS 2.0, a version that aimed to accommodate a broader range of use cases and hardware configurations."
  - id: "nospec-cr-handling"
    line_start: 221
    line_end: 227
    title: "Handling carriage returns in input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Carriage_return"
    image_url: ""
    image_caption: ""
    content: "The nospec routine checks for carriage returns (CR) in the input buffer, a vital step in determining the end of a command. Carriage returns were a common way to signal the end of a line in text-based systems, and handling them correctly was essential for parsing user input. In the context of MS-DOS 2.0, this routine ensured that commands were processed accurately, even if the input contained unexpected or extraneous characters. This attention to detail reflects the challenges of designing software for early personal computers, where every byte of memory and processor cycle mattered."
  - id: "na-switch-switch-character"
    line_start: 229
    line_end: 235
    title: "Switch characters: enabling command options"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The na_switch routine identifies and processes switch characters, which are used to specify options in command-line commands (e.g., '/a' or '-b'). This feature was inspired by Unix and added significant flexibility to MS-DOS, allowing users to customize the behavior of commands. In 1983, when MS-DOS 2.0 was released, this capability was a major step forward in making personal computers more powerful and user-friendly. The routine's design reflects the influence of Unix and the growing demand for more sophisticated command-line interfaces."
  - id: "anum-chard-drive-specification"
    line_start: 267
    line_end: 293
    title: "Drive specification: parsing 'C:' and beyond"
    wikipedia_url: "https://en.wikipedia.org/wiki/Drive_letter_assignment"
    image_url: ""
    image_caption: ""
    content: "The anum_chard routine handles drive specifications, such as 'C:', in the input buffer. This feature was essential for MS-DOS, which introduced the concept of drive letters to personal computing. In the early 1980s, this approach simplified file management and made it easier for users to navigate their systems. The routine's ability to insert a default drive specification if none is provided reflects the operating system's focus on usability and error prevention. This innovation became a defining characteristic of MS-DOS and influenced the design of later operating systems."
  - id: "testdot-file-extension"
    line_start: 315
    line_end: 327
    title: "File extensions: recognizing the dot"
    wikipedia_url: "https://en.wikipedia.org/wiki/Filename_extension"
    image_url: ""
    image_caption: ""
    content: "The TESTDOT routine checks for the presence of a dot ('.') in the input buffer, which indicates the start of a file extension. File extensions were a new concept in personal computing, introduced to help users and programs identify file types. In MS-DOS 2.0, this routine ensured that file extensions were parsed correctly, enabling features like file association and type-specific operations. The design reflects the influence of Unix and the growing need for more sophisticated file management in personal computers."
  - id: "move-char-token-buffer"
    line_start: 565
    line_end: 582
    title: "Storing characters in the token buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The move_char routine stores individual characters in the token buffer, incrementing counters for character and element counts. This seemingly simple operation is a cornerstone of the parsing process, as it builds the tokens that represent user commands. In the constrained environment of early personal computers, efficient buffer management was critical for performance and reliability. This routine exemplifies the low-level programming techniques that defined MS-DOS, where every instruction was carefully crafted to maximize the capabilities of the hardware."

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