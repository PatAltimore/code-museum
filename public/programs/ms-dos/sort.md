---
title: "SORT.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/SORT.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/SORT.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "sort"
order: 19
description: "This file implements the SORT command for MS-DOS 2.0, showcasing early techniques for text manipulation and memory management in constrained environments."

summary:
  - point: "Introduces a reverse sort option via a clever patching mechanism"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates linked list creation by replacing CR-LF pairs with line lengths"
    link: "https://en.wikipedia.org/wiki/Linked_list"
    link_label: "Linked List"
  - point: "Handles column-based sorting with dynamic parsing of command-line arguments"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command Line Interface"
  - point: "Allocates memory dynamically for sorting, showcasing 8086 assembly's approach to memory management"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Includes internationalization support for Kanji sorting, reflecting early globalization efforts in software"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"

enhancements:
  - id: "system-call-macro"
    line_start: 55
    line_end: 61
    title: "The Macro That Simplified System Calls"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_21h"
    image_url: ""
    image_caption: ""
    content: "This macro encapsulates the process of invoking MS-DOS system calls via interrupt 21h. By abstracting the mechanics of loading the function number into the AH register and triggering the interrupt, the macro reduces repetitive code and improves readability. In the early 1980s, assembly programming often required direct manipulation of hardware and operating system interfaces, making such macros invaluable for productivity. Tim Paterson's original 86-DOS laid the groundwork for this approach, and it became a staple in MS-DOS programming. This technique influenced later assembly-based operating systems and embedded systems programming, where macros are still used to simplify hardware interactions."
  - id: "reverse-sort-patch"
    line_start: 201
    line_end: 223
    title: "How a Reverse Sort Was 'Patched In'"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section modifies the sorting behavior by patching a JAE (Jump if Above or Equal) instruction into a JB (Jump if Below) when the reverse sort flag is detected. This clever hack avoids rewriting the entire sorting logic, instead flipping the comparison direction dynamically. In 1983, memory constraints and tight deadlines often led to such ingenious solutions. Chris Peters, credited with writing this file, likely employed this trick to save both development time and precious bytes of code. This approach exemplifies the resourcefulness required in early software development and influenced later practices in optimizing conditional logic in constrained environments."
  - id: "dynamic-memory-allocation"
    line_start: 297
    line_end: 307
    title: "Allocating Memory in 64KB Chunks"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8086"
    image_url: ""
    image_caption: ""
    content: "This section dynamically allocates memory for the sorting buffer, attempting to secure up to 64KB in paragraphs (16-byte blocks). If the requested amount isn't available, the program retries with smaller allocations until successful. Memory management was a critical challenge in the 8086 era, as programs had to operate within the constraints of segmented memory architecture. This approach demonstrates the programmer's ingenuity in handling unpredictable hardware environments. Techniques like this influenced later memory allocation strategies in operating systems and programming languages, such as malloc in C and dynamic memory management in modern virtual machines."
  - id: "linked-list-crlf-replacement"
    line_start: 453
    line_end: 491
    title: "Turning Text into Linked Lists with CR-LF"
    wikipedia_url: "https://en.wikipedia.org/wiki/Linked_list"
    image_url: ""
    image_caption: ""
    content: "This section transforms the input text buffer into a linked list by replacing CR-LF pairs (used for line endings) with the length of the following line. This ingenious use of text formatting as metadata allows the program to efficiently traverse and manipulate lines during sorting. In the early 1980s, memory was scarce, and techniques like this were critical for achieving functionality without exceeding hardware limits. The linked list structure here is a precursor to more sophisticated data structures used in modern text editors and database systems. This approach influenced future software that needed to process large text files efficiently, including Unix-based tools like 'sort' and 'awk'."
  - id: "kanji-sort-support"
    line_start: 583
    line_end: 623
    title: "Sorting Kanji in an ASCII World"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "This section introduces internationalization support for sorting Kanji characters, using a translation table to map Kanji to sortable values. In 1983, software globalization was in its infancy, and supporting non-ASCII character sets required significant effort. MS-DOS's Kanji support reflects Microsoft's early recognition of the importance of international markets, particularly Japan. This feature paved the way for future operating systems to include robust internationalization libraries, influencing tools like Unicode and modern localization frameworks. Developers working on global software today still face similar challenges, though with more advanced tools at their disposal."

---

```asm
TITLE   SORT FILTER FOR MS-DOS

;

; Sort  /R /+n

; /R -> reverse sort

; /+n -> sort on column n

;

; Written by:   Chris Peters

;

; Modification History:

;           3-18-83 MZ  Fix CR-LF at end of buffer

;                       Fix small file sorting

;                       Fix CR-LF line termination bug

;                       Comment the Damn source

;

FALSE   EQU     0

TRUE    EQU     NOT FALSE



;NOTE:	"internat" must be false if KANJI version

internat	equ	true

;NOTE:	see above



.xlist

.xcref

        INCLUDE DOSSYM.ASM

.cref

.list



sys     MACRO   name                    ; system call macro

        MOV     AH,name

        INT     21h

        ENDM

save    MACRO   reglist                 ; push those registers

IRP reg,<reglist>

        PUSH    reg

ENDM

ENDM

restore MACRO   reglist                 ; pop those registers

IRP reg,<reglist>

        POP     reg

ENDM

ENDM



MAXREC  EQU     256                     ; MAXIMUM NUL RECORD SIZE



SPACE   EQU     0                       ; Offset zero in the allocated block

BUFFER  EQU     MAXREC                  ; Offset MAXREC in the allocated block



SUBTTL  Segments used in load order





CODE    SEGMENT

CODE    ENDS



CONST   SEGMENT PUBLIC BYTE

CONST   ENDS



CSTACK  SEGMENT STACK

        DB 128 DUP (0)                  ; initial stack to be clear

CSTACK  ENDS



DG      GROUP   CODE,CONST,CSTACK



CODE    SEGMENT

ASSUME  CS:DG,DS:NOTHING,ES:NOTHING,SS:CSTACK



COLUMN  DW      0                       ; COLUMN TO USE FOR KEY + 1

SWITCH  DB      '/'



SORT:

;

; check for proper version number of system

;

        sys     GET_VERSION

        XCHG    AH,AL                   ; Turn it around to AH.AL

        CMP     AX,200H                 ; Version 2.00 only

        JAE     OKDOS                   ; Success

        MOV     DX,OFFSET DG:BADVER     ; Get error message

        PUSH    CS                      ; Get DS addressability

        POP     DS

        sys     STD_CON_STRING_OUTPUT   ; Send to STDOUT

        PUSH    ES                      ; long segment

        PUSH    COLUMN                  ; offset zero

LONG_RET    PROC    FAR

        RET                             ; long return to OS

LONG_RET    ENDP

;

; get proper switch character

;

OKDOS:

        MOV     AL,0                    ; Get current switch character

        sys     CHAR_OPER

        MOV     SWITCH,DL

;

; parse command line

;

        MOV     SI,80H                  ; pointer to command line

        CLD                             ; go left to right

        XOR     CX,CX

        LODSB

        MOV     CL,AL                   ; CX = length of command line

SWITCH_LOOP:

        CALL    GET_CHAR                ; get a character

        CMP     AL,SWITCH               ; beginning of switch?

        JNZ     SWITCH_LOOP             ; No, get next character

        CALL    GET_CHAR                ; get 1st char of switch

        CMP     AL,'+'                  ; Column to sort?

        JZ      SWITCH_NUMBER           ; Yes, parse a number

        OR      AL,20h                  ; convert to lower case

        CMP     AL,'r'                  ; Reverse sort?

        JNZ     SWITCH_LOOP             ; No, get next switch

        MOV     CS:CODE_PATCH,72h       ; sleaze JAE into JB

        JMP     SWITCH_LOOP             ; get next switch

SWITCH_NUMBER:

        MOV     COLUMN,0                ; start off at 0

SWITCH_NEXT_NUMBER:

        CALL    GET_CHAR                ; get supposed digit

        SUB     AL,'0'                  ; convert to number

        JB      SWITCH_LOOP             ; less than '0'

        CMP     AL,9                    ; is it a valid digit?

        JA      SWITCH_LOOP             ; nope, get next switch

        CBW                             ; make it a full word

        MOV     BX,AX                   ; save byte away

        MOV     AX,10                   ; decimal number system

        MUL     COLUMN                  ; take previous result

        ADD     AX,BX                   ; add in low order digit

        MOV     COLUMN,AX               ; save away value

        JMP     SWITCH_NEXT_NUMBER      ; get next character

GET_CHAR:

        JCXZ    END_GET                 ; End of line

        DEC     CX                      ; dec char count

        LODSB                           ; get the character

        RET                             ; return

END_GET:

        POP     AX                      ; nuke return on stack

;

; set up column for proper sort offset

;

END_SWITCH:

        ADD     COLUMN,2

        CMP     COLUMN,2

        JZ      GOT_COL

        DEC     COLUMN



;

; Get sorting area, no more than 64K

;

GOT_COL:

        MOV     BX,1000H                ; 64K worth of paragraphs

GET_MEM:

        sys     ALLOC                   ; allocate them from somewhere

        JNC     GOT_MEM                 ; if error, BX has amount free, try to get it

        OR      BX,BX                   ; but, is BX = 0?

        JNZ     GET_MEM                 ; nope, try to allocate it

        JMP     SIZERR                  ; complain



GOT_MEM:

        MOV     DS,AX                   ; Point DS to buffer

        MOV     ES,AX                   ; and point ES to buffer

        MOV     CL,4                    ; 2^4 bytes per paragraph

        SHL     BX,CL                   ; Find out how many bytes we have



;

; clear out temporary record area

;

        MOV     CX,MAXREC/2             ; Size of temporary buffer (words)

        MOV     AX,'  '                 ; Character to fill with

        MOV     DI,SPACE                ; Beginning of temp buffer

        REP     STOSW                   ; Blam.

;

; read in file from standard input

;

        MOV     DX,BUFFER + 2           ; DX = place to begin reading

        MOV     CX,BX                   ; CX is the max number to read

        SUB     CX,MAXREC + 2           ; remember offset of temp buffer

SORTL:

        XOR     BX,BX                   ; Standard input

        sys     READ                    ; Read it in

        ADD     DX,AX                   ; Bump pointer by count read

        SUB     CX,AX                   ; subtract from remaining the count read

        JZ      SIZERR                  ; if buffer is full then error

        OR      AX,AX                   ; no chars read -> end of file

        JNZ     SORTL                   ; there were chars read. go read again

        JMP     SHORT SIZOK             ; trim last ^Z terminated record

SIZERR:

        MOV     SI,OFFSET DG:ERRMSG     ; not enough memory error

ERROR_EXIT:

        PUSH    CS                      ; DS addressability

        POP     DS

        LODSW                           ; get length

        MOV     CX,AX                   ; put into appropriate register

        MOV     DX,SI                   ; get output destination

        MOV     BX,2                    ; output to standard error

        sys     WRITE                   ; and write it out

        MOV     AL,1                    ; return an error code

        sys     EXIT



;

; Look for a ^Z. Terminate buffer at 1st ^Z.

;

SIZOK:

        MOV     BX,DX                   ; save end pointer

        MOV     CX,DX                   ; get pointer to end of text

        SUB     CX,BUFFER+2             ; dif in pointers is count

        MOV     AL,1AH                  ; char is ^Z

        MOV     DI,BUFFER+2             ; point to beginning of text

        REPNZ   SCASB                   ; find one

        JNZ     NoBack                  ; nope, try to find CRLF

        DEC     BX                      ; pretend that we didn't see ^Z

NoBack:

        SUB     BX,CX                   ; sub from endpointer the number left

        SUB     BX,2                    ; Hope for a CR LF at end

        CMP     WORD PTR [BX],0A0Dh     ; Was there one there?

        JZ      GOTEND                  ; yep, here is the end

        ADD     BX,2                    ; nope, bump back to SCASB spot

        CMP     BYTE PTR [BX],AL        ; Was there ^Z there?

        JZ      GOTEND                  ; yep, chop it

        INC     BX                      ; Nope, skip last char

GOTEND:

        MOV     BP,BX                   ; BP = filesize-2(CRLF)+temp buffer+2

        MOV     WORD PTR DS:[BP],0      ; 0 at end of the file

;

;  We now turn the entire buffer into a linked list of chains by

;  replacing CRLFs with the length of the following line (with 2 for CRLF)

;

        MOV     BX,BUFFER               ; pointer to line head (length)

        MOV     DI,BUFFER+2             ; pointer to line text

REPLACE_LOOP:

        MOV     AL,13                   ; char to look for is CR

        MOV     CX,BP                   ; count = end pointer

        SUB     CX,DI                   ; chop off start point to get length

        INC     CX                      ; add 1???

REPLACE_SCAN:

        REPNZ   SCASB                   ; look for CR

        JNZ     REPLACE_SKIP            ; count exhausted

        CMP     BYTE PTR [DI],10        ; LF there?

        JNZ     REPLACE_SCAN            ; nope, continue scanning

REPLACE_SKIP:

        MOV     AX,DI                   ; AX to point after CR

        DEC     AX                      ; AX to point to CR

        save    <AX>                    ; save pointer

        SUB     AX,BX                   ; AX is length of line found

        MOV     [BX],AX                 ; stuff it in previous link

        restore <BX>                    ; get pointer to next

        INC     DI                      ; skip LF???

        JCXZ    END_REPLACE_LOOP        ; no more to scan -> go sort

        JMP     REPLACE_LOOP            ; look for next



END_REPLACE_LOOP:

        MOV     WORD PTR [BX],0         ; terminate file with nul

        LEA     BP,[BX+2]               ; remember the null line at end

        MOV     DI,BUFFER               ; DI is start of unsorted section



;

; begin sort. Outer loop steps over all unsorted lines

;

OUTER_SORT_LOOP:

        MOV     BX,DI                   ; BX is start of unsorted section

        MOV     SI,BX                   ; SI is scanning place link

        CMP     WORD PTR [BX],0         ; are we at the end of the buffer?

        JNZ     INNER_SORT_LOOP         ; No, do inner process

        JMP     END_OUTER_SORT_LOOP     ; yes, go dump out



;

; BX points to best guy found so far. We scan through the sorted section

; to find an appropriate insertion point

;

INNER_SORT_LOOP:

        ADD     SI,[SI]                 ; link to next fellow

        MOV     AX,[SI]                 ; get length of comparison guy

        OR      AX,AX                   ; test for end of buffer

        JZ      END_INNER_SORT_LOOP     ; if zero then figure out insertion

        save    <SI,DI>                 ; save SI,DI

        MOV     DI,BX                   ; DI = pointer to tester link

        SUB     AX,COLUMN               ; adjust length for column

        JA      AXOK                    ; more chars in tester than column?

        MOV     SI,SPACE                ; point SI to blank area

        MOV     AX,MAXREC               ; make AX be max length

AXOK:

        MOV     DX,[DI]                 ; get length of best guy

        SUB     DX,COLUMN               ; adjust length for column

        JA      DXOK                    ; there are more chars after column

        MOV     DI,SPACE                ; point air to a space

        MOV     DX,MAXREC               ; really big record

DXOK:

        MOV     CX,AX                   ; AX is shortest record

        CMP     AX,DX                   ; perhaps DX is shorter

        JB      SMALL                   ; nope, leace CX alone

        MOV     CX,DX                   ; DX is shorter, put length in CX

SMALL:

        ADD     DI,COLUMN               ; offset into record

        ADD     SI,COLUMN               ; offset into other record

if	not	internat

        REPZ    CMPSB                   ; compare every one

	endif

if	internat

	push	bx

	push	ax

	mov	bx,offset dg:table

tloop:	lodsb

	xlat	byte ptr cs:[bx]

	mov	ah,al

	mov	al,es:[di]

	inc	di

	xlat	byte ptr cs:[bx]

	cmp	ah,al

	loopz	tloop

	pop	ax

	pop	bx

	endif

        restore <DI,SI>                 ; get head pointers back

        JNZ     TESTED_NOT_EQUAL        ; didn't exhaust counter, conditions set

        CMP     AX,DX                   ; check string lengths

TESTED_NOT_EQUAL:

;

; note! jae is patched to a jbe if file is to be sorted in reverse!

;

CODE_PATCH LABEL BYTE

        JAE     INNER_SORT_LOOP         ; if this one wasn't better then go again

        MOV     BX,SI                   ; it was better, save header

        JMP     INNER_SORT_LOOP         ; and scan again



END_INNER_SORT_LOOP:

        MOV     SI,BX                   ; SI is now the best person

        CMP     SI,DI                   ; check best for current

        JZ      END_INSERT              ; best equals current, all done



;

; SI points to best line found so far

; DI points to a place to insert this line

; DI is guaranteed to be < SI

; make room for line at destination

;

        MOV     DX,[SI]                 ; get length of line

        save    <SI,DI>                 ; save positions of people

        STD                             ; go right to left

        MOV     CX,BP                   ; get end of file pointer

        SUB     CX,DI                   ; get length from destination to end

        MOV     SI,BP                   ; start from end

        DEC     SI                      ; SI points to end of file

        MOV     DI,SI                   ; destination is end of file

        ADD     DI,DX                   ; DI points to new end of file

        REP     MOVSB                   ; blam. Move every one up

        CLD                             ; back left to right

        restore <DI,SI>                 ; get old source and destination

;

;  MOVE NEW LINE INTO PLACE

;

        save    <DI>                    ; save destination

        ADD     SI,DX                   ; adjust for previous movement

        save    <SI>                    ; save this value

        MOV     CX,DX                   ; get number to move

        REP     MOVSB                   ; blam. move the new line in

        restore <SI,DI>                 ; get back destination and new source

;

;  DELETE LINE FROM OLD PLACE

;

        save    <DI>                    ; save destination

        MOV     CX,BP                   ; pointer to end

        ADD     CX,DX                   ; remember bump

        SUB     CX,SI                   ; get count of bytes to move

        INC     CX                      ; turn it into a word

        SHR     CX,1                    ; or a count of words

        MOV     DI,SI                   ; new destination of move

        ADD     SI,DX                   ; offset of block

        REP     MOVSW                   ; blam, squeeze out the space

        restore <DI>                    ; get back original destination

        MOV     WORD PTR DS:[BP-2],0    ; remake the end of file mark



END_INSERT:

        ADD     DI,[DI]                 ; link to next guy

        JMP     OUTER_SORT_LOOP         ; and continue

;

;       PUT BACK IN THE CR-LF

;

END_OUTER_SORT_LOOP:

        MOV     DI,BUFFER               ; start at beginning (where else)

        MOV     CX,[DI]                 ; count of butes



INSERT_LOOP:

        ADD     DI,CX                   ; point to next length

        MOV     CX,[DI]                 ; get length

        MOV     WORD PTR [DI],0A0DH     ; replace length with CRLF

        CMP     CX,0                    ; check for end of file

        JNZ     INSERT_LOOP             ; nope, try again



WRITE_FILE:

        MOV     DX,BUFFER+2             ; get starting point

        MOV     CX,BP                   ; pointer to end of buffer

        SUB     CX,DX                   ; dif in pointers is number of bytes

        MOV     BX,1                    ; to standard output

        sys     WRITE                   ; write 'em out

        JC      BADWRT                  ; some bizarre error -> flag it

        CMP     AX,CX                   ; did we write what was expected?

        JZ      WRTOK                   ; yes, say bye bye

BADWRT:

        MOV     SI,OFFSET dg:ERRMSG2    ; strange write error

        JMP     ERROR_EXIT              ; bye bye

WRTOK:

        XOR     AL,AL                   ; perfect return (by convention)

        sys     EXIT                    ; bye!



CODE    ENDS



CONST   SEGMENT PUBLIC BYTE

        EXTRN   BADVER:BYTE,ERRMSG:BYTE,ERRMSG2:BYTE

if	internat

	extrn	table:byte

	endif

CONST   ENDS



SUBTTL  Initialized Data

PAGE

CSTACK   SEGMENT STACK

         DB      96 dup (0)

CSTACK   ENDS



        END     SORT






```