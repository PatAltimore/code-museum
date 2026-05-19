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
description: "CPARSE.ASM in MS-DOS v2.0 demonstrates the evolution of command parsing in early operating systems, bridging simplicity and Unix-inspired complexity."

summary:
  - point: "Command parsing routines reflect Unix-inspired design in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Efficient tokenization and delimiter handling for command-line inputs"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Inclusion of Kanji support hints at early internationalization efforts"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "Bitwise flags in BH register for token metadata showcase clever resource use"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Drive specification and path parsing reflect MS-DOS's filesystem evolution"
    link: "https://en.wikipedia.org/wiki/File_system"
    link_label: "File system"

enhancements:
  - id: "cparse-command-parsing-routine"
    line_start: 85
    line_end: 171
    title: "Command parsing: MS-DOS meets Unix inspiration"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The CPARSE routine is the heart of MS-DOS's command parsing mechanism, responsible for breaking down input strings into tokens and handling delimiters. At its core, CPARSE initializes key variables, processes input buffers, and sets flags in the BH register to indicate token properties such as the presence of special characters (*, ?), path separators, or delimiters. This routine reflects the shift in MS-DOS v2.0 toward a more Unix-like design, incorporating features such as hierarchical directories and file handles. In 1983, when this code was written, MS-DOS was transitioning from its simpler CP/M-inspired roots to a more robust operating system. The inclusion of features like token parsing and delimiter handling was essential for supporting complex command-line operations and batch scripting, which were becoming increasingly important for business users. Tim Paterson and Microsoft's engineers had to balance the constraints of limited memory and processing power on the IBM PC while introducing these advanced capabilities. The CPARSE routine's design influenced subsequent operating systems, including Windows and OS/2, by establishing conventions for command-line parsing and tokenization. Its efficient handling of input and metadata flags became a blueprint for later systems, ensuring compatibility and ease of use. Without this foundational work, the evolution of command-line interfaces and scripting in personal computing might have been significantly delayed."
  - id: "moredelim-delimiter-skipping"
    line_start: 173
    line_end: 195
    title: "Skipping delimiters: A pragmatic approach"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The moredelim section of CPARSE handles the skipping of delimiters like spaces and tabs in the input buffer. It ensures that the parser focuses on meaningful tokens by ignoring extraneous whitespace and other non-essential characters. This approach reflects the practical needs of command-line interfaces in the early 1980s, where users often input commands with varying amounts of spacing. By allowing one non-space/tab delimiter, the routine accommodates flexibility in user input while maintaining strict parsing rules. In 1983, command-line interfaces were the primary method of interacting with computers, and efficient parsing routines were critical for usability. The IBM PC's hardware constraints required developers to write highly optimized code, and routines like moredelim exemplify this ingenuity. The logic here influenced later systems, where robust delimiter handling became a standard feature of command-line parsers. Modern scripting languages, such as Python and Bash, continue to employ similar strategies for tokenization, ensuring that user input is processed accurately and efficiently."
  - id: "scancdone-special-delimiter-handling"
    line_start: 199
    line_end: 217
    title: "Special delimiters: Enhancing command flexibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Delimiter"
    image_url: ""
    image_caption: ""
    content: "The SCANCDONE section introduces logic for handling special delimiters, such as the character specified in the BL register. If the delimiter matches the input character, the routine sets a flag in the BH register and continues parsing. This feature allows MS-DOS to support commands with custom delimiters, enhancing flexibility for advanced users and scripts. In the early 1980s, this capability was innovative, as most personal computers offered limited support for complex command-line operations. Tim Paterson and Microsoft's engineers were influenced by Unix's philosophy of providing powerful tools for users who understood the system's intricacies. The ability to specify and handle special delimiters became a hallmark of MS-DOS's adaptability, paving the way for more sophisticated scripting and automation. This approach influenced later operating systems and programming languages, where delimiter handling remains a critical feature for parsing structured data and user input."
  - id: "nospec-cr-handling"
    line_start: 221
    line_end: 227
    title: "Carriage return: A subtle parsing decision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Carriage_return"
    image_url: ""
    image_caption: ""
    content: "The nospec section checks for the presence of a carriage return (CR) in the input buffer. If a CR is detected, the routine branches to cperror, signaling the end of input and ensuring that the token buffer remains unaltered. This decision reflects the importance of handling end-of-line characters in command-line parsing. In the early 1980s, CR was a standard line-ending character in many text formats, including those used by MS-DOS. Ensuring proper handling of CR was critical for compatibility with existing software and hardware. The nospec logic demonstrates the attention to detail required to build a reliable operating system. This approach influenced later systems, where robust handling of line-ending characters became essential for text processing and file I/O operations. Modern programming languages and tools continue to incorporate similar logic, ensuring seamless interaction with legacy formats and systems."
  - id: "na-switch-drive-specification"
    line_start: 237
    line_end: 263
    title: "Drive specification: Parsing paths with precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The na_switch section handles drive specification in input strings, ensuring that paths are parsed correctly. If a colon (':') follows the drive letter, the routine processes the drive specification, updates the token buffer, and sets relevant flags. This logic reflects MS-DOS's evolution toward supporting hierarchical filesystems and device paths. In 1983, the IBM PC's introduction of MS-DOS v2.0 marked a significant step forward in personal computing. The ability to specify drives and paths was essential for managing files and directories on increasingly complex storage systems. Tim Paterson and Microsoft's engineers drew inspiration from Unix, adapting its concepts to the constraints of the IBM PC. The na_switch logic influenced the design of later operating systems, including Windows, where drive specification and path parsing remain integral to filesystem operations. This approach also shaped the development of programming languages and tools that rely on accurate path handling for file I/O."
  - id: "move-char-token-buffer-update"
    line_start: 565
    line_end: 582
    title: "Token buffer: Building strings one character at a time"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The move_char routine updates the token buffer by storing the current character, incrementing the character count (CX), and updating the element count (ELCNT). This simple yet effective mechanism ensures that tokens are built accurately, character by character. In the early 1980s, memory constraints on the IBM PC required developers to write highly efficient code for string manipulation. The move_char routine exemplifies this efficiency, using minimal instructions to achieve its goal. Tim Paterson and Microsoft's engineers had to balance performance with functionality, ensuring that MS-DOS could handle complex command-line inputs without sacrificing speed. The move_char logic influenced the design of later systems and programming languages, where efficient string manipulation remains a cornerstone of software development. Modern tools and frameworks continue to build on these principles, ensuring that string operations are both fast and reliable."

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