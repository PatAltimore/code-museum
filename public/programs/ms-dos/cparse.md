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
description: "This file implements MS-DOS's command parsing logic, a critical component for interpreting user input and file paths in an era of constrained hardware."

summary:
  - point: "Command parsing logic for MS-DOS v2.0, inspired by Unix-like systems"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Introduced support for subdirectories and more complex file handling"
    link: "https://en.wikipedia.org/wiki/Filesystem"
    link_label: "Filesystem"
  - point: "Optimized for the IBM PC's 8086 processor and its memory constraints"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"

enhancements:
  - id: "command-parsing-entrypoint"
    line_start: 85
    line_end: 171
    title: "How MS-DOS Parsed Commands in 1983"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The CPARSE subroutine is the entry point for MS-DOS's command parsing logic. It takes input from the user or program, processes it to extract tokens (e.g., file paths, switches, and delimiters), and prepares the data for execution. At its core, CPARSE manages pointers to input and token buffers, handles special delimiters, and sets flags to indicate parsing conditions. The programmer, likely Tim Paterson or a Microsoft engineer, was solving the problem of translating user input into actionable instructions on a machine with limited memory and processing power. In 1983, the computing landscape was dominated by the IBM PC, powered by Intel's 8086 processor. MS-DOS v2.0 was a major upgrade that introduced Unix-inspired features like hierarchical directories and file handles. This subroutine reflects the influence of Unix's philosophy of flexible and efficient input handling, adapted to the constraints of the 8086 architecture. The reliance on assembly language highlights the need for performance optimization in an environment where every byte of memory and CPU cycle mattered. The parsing logic laid the groundwork for future command-line interfaces, influencing systems like Windows Command Prompt and Unix shells. Techniques like tokenization and flag-based condition handling became standard practices, appearing in programming textbooks and operating system designs. Developers working on later systems, including Linux and macOS, studied these early implementations to refine their own parsing mechanisms. CPARSE represents a pivotal moment in the evolution of user input handling, bridging the gap between early microcomputers and modern operating systems."
  - id: "skip-delimiter-logic"
    line_start: 173
    line_end: 195
    title: "The Trick That Skipped Extra Spaces"
    wikipedia_url: "https://en.wikipedia.org/wiki/Whitespace_character"
    image_url: ""
    image_caption: ""
    content: "The moredelim section of the code handles whitespace and delimiter skipping during command parsing. It ensures that extraneous spaces and tabs are ignored, simplifying the input for further processing. This logic is critical for maintaining user-friendly input handling, allowing commands to be typed with variable spacing without causing errors. In the early 1980s, user input was often inconsistent, especially when typed by non-technical users. By implementing robust whitespace handling, MS-DOS reduced the likelihood of user frustration and parsing errors. The decision to treat spaces and tabs as interchangeable reflects the practical constraints of the era, where user experience was a growing concern but still secondary to technical efficiency. This approach influenced later command-line systems, where whitespace handling became a standard feature. It also set a precedent for modern programming languages and tools, which often include similar logic for parsing input. The moredelim logic demonstrates how small design decisions can have lasting impacts, shaping the way software interprets human input across decades."
  - id: "kanji-character-handling"
    line_start: 199
    line_end: 217
    title: "Handling Kanji in MS-DOS Parsing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The SCANCDONE section includes conditional logic for handling Kanji characters, reflecting Microsoft's efforts to support internationalization in MS-DOS. Kanji, used in Japanese writing, requires special processing due to its complexity compared to ASCII characters. This section calls UPCONV to convert characters to uppercase, ensuring consistent parsing regardless of case. In the early 1980s, the global computing market was expanding, and Japan was a key player. Supporting Kanji was essential for MS-DOS to gain traction in Japanese markets. The inclusion of Kanji-specific logic demonstrates Microsoft's foresight in adapting their software for international users, a strategy that contributed to their dominance in the operating system market. This approach influenced later systems, including Windows, which expanded support for international character sets. It also highlighted the importance of designing software with global users in mind, a principle that became standard practice in the industry. SCANCDONE represents an early example of internationalization in software, paving the way for more inclusive computing."
  - id: "drive-specification-check"
    line_start: 237
    line_end: 263
    title: "How MS-DOS Verified Drive Letters"
    wikipedia_url: "https://en.wikipedia.org/wiki/Drive_letter_assignment"
    image_url: ""
    image_caption: ""
    content: "The na_switch section checks for drive specifications in user input, ensuring that commands reference valid drives. If a colon (':') follows a character, the code assumes it is a drive letter and processes it accordingly. This logic is crucial for handling file paths and device names in MS-DOS. In 1983, personal computers typically had one or two floppy drives, and hard drives were just beginning to appear. Drive letter assignment was a simple yet effective way to manage storage devices. This section reflects the constraints of the era, where storage was limited and device management needed to be straightforward. The drive specification logic influenced later operating systems, which retained the concept of drive letters for backward compatibility. It also inspired more advanced storage management techniques, such as mount points in Unix-like systems. By solving the problem of device referencing in a constrained environment, MS-DOS set a precedent for future storage management solutions."
  - id: "wildcard-handling-in-paths"
    line_start: 337
    line_end: 351
    title: "The Wildcards That Simplified File Searches"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wildcard_character"
    image_url: ""
    image_caption: ""
    content: "The testsplat section processes wildcard characters ('?' and '*') in file paths, enabling flexible file searches. Wildcards allow users to specify patterns instead of exact filenames, simplifying tasks like listing files or copying groups of files. This section sets flags to indicate the presence of wildcards and adjusts parsing logic accordingly. In the early 1980s, file management was a tedious process, often requiring exact filenames. By introducing wildcard support, MS-DOS made file handling more user-friendly and efficient. This feature was inspired by similar functionality in Unix, adapted to the constraints of the 8086 processor. Wildcard handling became a standard feature in operating systems and file management tools, influencing systems like Windows Explorer and Linux's shell utilities. It also inspired programming languages to include pattern matching capabilities. The testsplat logic represents a key innovation in making file management accessible to non-technical users, a principle that continues to shape software design today."
  - id: "switch-character-parsing"
    line_start: 495
    line_end: 561
    title: "Parsing Switches in MS-DOS Commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The a_switch section processes switch characters in commands, such as '/' or '-', which indicate options or flags. It sets flags to record the presence of switches and adjusts parsing logic to handle them correctly. This feature allows users to modify command behavior, adding flexibility to the command-line interface. Switch characters were a common feature in command-line systems, inspired by Unix's option syntax. In MS-DOS, they were adapted to the constraints of the 8086 processor and the need for simplicity. This section reflects the growing importance of user customization in software design during the early 1980s. Switch parsing influenced later command-line systems, including Windows Command Prompt and Unix shells. It also inspired graphical user interfaces to include similar functionality, such as checkboxes and dropdown menus for options. The a_switch logic represents an early example of user-centric design, emphasizing flexibility and customization in software."

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