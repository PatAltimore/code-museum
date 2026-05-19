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
description: "This file contains the parsing logic for MS-DOS v2.0, a pivotal version that introduced Unix-inspired features like subdirectories and file handles."

summary:
  - point: "Parsing routines for command-line input and tokens"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Incorporates special delimiters and switch characters"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Reflects constraints of early 1980s hardware and assembly language programming"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Unix-inspired design decisions in MS-DOS v2.0"
    link: "https://en.wikipedia.org/wiki/Unix"
    link_label: "Unix"
  - point: "Influence on later operating systems and command-line parsing techniques"
    link: "https://en.wikipedia.org/wiki/Operating_system"
    link_label: "Operating system"

enhancements:
  - id: "cparse-token-parsing"
    line_start: 85
    line_end: 171
    title: "Token parsing with special delimiters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The CPARSE routine is responsible for parsing tokens from the command-line input buffer, handling delimiters, and preparing tokens for further processing. It uses registers DS:SI and ES:DI to point to the input and token buffers, respectively, and employs BL to handle special delimiters such as spaces or tabs. The routine initializes various flags and counters, such as [STARTEL] and [ELPOS], to track elements within a path or token. This section also includes logic for handling special cases like carriage returns (CR) and bad path errors. In 1983, MS-DOS v2.0 introduced Unix-inspired features like hierarchical directories and file handles. The parsing logic here reflects the need to handle these new complexities while maintaining backward compatibility with earlier versions of MS-DOS. Written in 8086 assembly, this code demonstrates the constraints of early PC hardware, where memory and processing power were limited. The CPARSE routine influenced later command-line parsing techniques in operating systems and programming languages. Its handling of delimiters and tokenization became foundational for tools like batch scripting in MS-DOS and later Windows command-line utilities. The approach also inspired similar parsing mechanisms in Unix shells and scripting languages like Bash and Python."
  - id: "moredelim-skip-delimiters"
    line_start: 173
    line_end: 195
    title: "Skipping delimiters in input buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The moredelim section is responsible for skipping over delimiters like spaces and tabs in the input buffer. It uses the LODSB instruction to load the next character and checks it against predefined delimiters using the DELIM subroutine. If the character is a space or tab, the routine loops back to skip it. Additionally, it allows for one non-space/tab delimiter to be skipped, ensuring proper tokenization. This approach reflects the challenges of parsing user input in the early 1980s, where command-line interfaces were the primary method of interaction with operating systems. The routine's design ensures robustness in handling varied input formats, a necessity for MS-DOS's widespread OEM licensing and compatibility with diverse hardware setups. The logic for skipping delimiters influenced later parsing routines in operating systems and programming languages. It laid the groundwork for handling whitespace and special characters in command-line input, a feature that remains essential in modern shells and scripting environments."
  - id: "scancdone-special-delimiter-handling"
    line_start: 199
    line_end: 217
    title: "Handling special delimiters in tokens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The SCANCDONE section checks if the current character in the input buffer matches the special delimiter provided in BL. If a match is found, it sets a flag in BH to indicate the presence of the special delimiter and loops back to process the next character. This ensures that tokens are correctly parsed even when special delimiters are involved. In the context of MS-DOS v2.0, this logic was crucial for supporting advanced command-line features like pipes and redirection, which rely on special characters. The ability to handle these delimiters efficiently was a key requirement for the operating system's enhanced functionality. The handling of special delimiters in SCANCDONE influenced the design of command-line parsers in later operating systems and programming languages. It demonstrated the importance of robust delimiter processing, a concept that became standard in Unix shells, Windows batch scripting, and modern programming languages like Python and Ruby."
  - id: "nospec-cr-handling"
    line_start: 221
    line_end: 227
    title: "Carriage return handling in input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Carriage_return"
    image_url: ""
    image_caption: ""
    content: "The nospec section checks if the current character in the input buffer is a carriage return (CR). If so, it jumps to the cperror routine to handle the error condition. This ensures that tokens are not altered when a CR is encountered, maintaining the integrity of the input buffer. Carriage return handling was a common requirement in early operating systems, where text-based input was the norm. MS-DOS's ability to process CR correctly was essential for its compatibility with various text editors and command-line utilities. The approach taken in nospec influenced error handling in command-line parsers across operating systems. It highlighted the importance of robust input validation, a principle that remains relevant in modern software development."
  - id: "ncperror-switch-character-processing"
    line_start: 229
    line_end: 235
    title: "Processing switch characters in tokens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The ncperror section checks if the current character in the input buffer matches the switch character defined in SWITCHAR. If a match is found, it jumps to the a_switch routine to process the switch character. This logic ensures that command-line switches are correctly identified and handled during token parsing. Switch characters were a key feature of MS-DOS, enabling users to specify options for commands. The ability to process these characters efficiently was crucial for the operating system's usability and versatility. The ncperror section influenced the design of switch handling in later command-line interfaces and scripting languages. Its approach to identifying and processing switches became a standard practice, shaping the development of tools like Unix shells and Windows PowerShell."
  - id: "na-switch-drive-specification"
    line_start: 237
    line_end: 263
    title: "Handling drive specification in tokens"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The na_switch section checks if the current character in the input buffer is a colon (':'), indicating a drive specification. If so, it processes the drive spec by calling the move_char routine to store the drive letter and colon in the token buffer. It then updates [STARTEL] and [ELCNT] to track the start of the path element. Drive specification was a distinctive feature of MS-DOS, reflecting its roots in CP/M and the need to support multiple storage devices. The ability to parse and handle drive specs efficiently was essential for the operating system's functionality. The logic in na_switch influenced the handling of drive specifications in later operating systems. It demonstrated the importance of accommodating diverse storage configurations, a principle that remains relevant in modern file systems and operating systems."
  - id: "anum-chard-drive-insertion"
    line_start: 267
    line_end: 293
    title: "Automatic insertion of drive specification"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The anum_chard section automatically inserts a drive specification into the token buffer if the input does not start with a path character. It uses the CURDRV variable to determine the current drive and appends the drive letter and colon to the token buffer. This ensures that tokens are correctly formatted even when the drive is not explicitly specified. Automatic drive insertion reflects the constraints of early PCs, where users often worked with multiple storage devices. MS-DOS's ability to infer the current drive streamlined command-line operations and improved usability. The logic in anum_chard influenced the design of default behaviors in command-line parsers and file systems. It highlighted the importance of user-friendly features, a principle that continues to shape software development today."
  - id: "testdot-extension-flagging"
    line_start: 315
    line_end: 327
    title: "Flagging extensions in tokens"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_extension"
    image_url: ""
    image_caption: ""
    content: "The TESTDOT section checks if the current character in the input buffer is a dot ('.'), indicating the start of a file extension. If so, it increments the [ELPOS] flag and resets [ELCNT] to prepare for extension parsing. This ensures that file extensions are correctly identified and processed during tokenization. File extensions were a key feature of MS-DOS, enabling users to associate files with specific applications. The ability to parse extensions efficiently was crucial for the operating system's functionality. The logic in TESTDOT influenced the handling of file extensions in later operating systems and programming languages. It demonstrated the importance of robust extension parsing, a concept that remains relevant in modern file systems and software development."
  - id: "testsplat-wildcard-handling"
    line_start: 337
    line_end: 351
    title: "Handling wildcards in tokens"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wildcard_character"
    image_url: ""
    image_caption: ""
    content: "The testsplat section checks if the current character in the input buffer is a wildcard ('*' or '?'). If a wildcard is found, it sets a flag in BH to indicate its presence and adjusts the token buffer accordingly. This ensures that wildcards are correctly identified and processed during tokenization. Wildcards were a key feature of MS-DOS, enabling users to specify patterns for file operations. The ability to handle these characters efficiently was crucial for the operating system's usability and versatility. The logic in testsplat influenced the handling of wildcards in later operating systems and programming languages. Its approach to identifying and processing wildcards became a standard practice, shaping the development of tools like Unix shells and Windows PowerShell."
  - id: "move-char-token-buffer-storage"
    line_start: 565
    line_end: 582
    title: "Storing characters in the token buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The move_char routine stores the current character in the token buffer using the STOSB instruction. It increments counters like CX and [ELCNT] to track the number of characters and elements in the token. This ensures that tokens are correctly constructed during parsing. Efficient token buffer storage was a critical requirement for MS-DOS, where memory constraints necessitated careful management of resources. The move_char routine reflects the challenges of programming in 8086 assembly, where every instruction counted. The logic in move_char influenced the design of token storage in later operating systems and programming languages. It highlighted the importance of efficient memory management, a principle that remains relevant in modern software development."

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