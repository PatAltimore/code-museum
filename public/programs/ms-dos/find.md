---
title: "FIND.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/FIND.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/FIND.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "find"
order: 33
description: "The FIND utility in MS-DOS v2.0, inspired by Unix, showcases early efforts to bring text processing tools to personal computing."

summary:
  - point: "Introduces Unix-inspired text processing to MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Supports options like line numbering and inverse matching"
    link: "https://en.wikipedia.org/wiki/Text_processing"
    link_label: "Text Processing"
  - point: "Handles Kanji characters, reflecting early internationalization efforts"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "Uses assembly-level optimizations for performance on 8086 CPUs"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Demonstrates early modular design with externalized messages"
    link: "https://en.wikipedia.org/wiki/Modular_programming"
    link_label: "Modular Programming"

enhancements:
  - id: "opt-tbl-option-flags"
    line_start: 265
    line_end: 293
    title: "Option Flags: A Table of Possibilities"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines the option flags used by the FIND utility. Each flag corresponds to a specific feature, such as inverse matching ('v'), line counting ('c'), or line numbering ('n'). The flags are initialized to zero, indicating that no options are selected by default. In 1983, MS-DOS was evolving to include features inspired by Unix, and FIND was a direct result of this influence. The modular design of the flag table reflects the growing complexity of software development, where maintaining consistency between data structures and code was crucial. The choice of assembly language allowed programmers to optimize for the limited memory and processing power of the IBM PC's 8086 CPU. These flags were central to the program's ability to parse user input and dynamically adjust its behavior. The design decision to use a table for flags ensured that future options could be added with minimal disruption—a forward-thinking approach in an era when software updates were rare and costly."
  - id: "start-main-routine"
    line_start: 295
    line_end: 325
    title: "Main Routine: Starting with Version Check"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The main routine begins with a critical version check to ensure compatibility with MS-DOS 2.0 or later. If the version is below 2.0, the program exits gracefully, displaying an error message. This reflects the transitional period in MS-DOS's history, where backward compatibility with earlier versions (like 1.x) was a concern, but newer features necessitated stricter requirements. The use of interrupt 21h to retrieve the DOS version highlights the reliance on system calls for interacting with the operating system. Tim Paterson and later Microsoft engineers designed MS-DOS with modularity and extensibility in mind, but the rapid pace of development meant that programs like FIND had to navigate the evolving landscape of system APIs. This version check ensures stability and avoids undefined behavior, a crucial consideration for software running on diverse hardware configurations licensed by Microsoft to OEMs."
  - id: "find-opt-option-parsing"
    line_start: 383
    line_end: 391
    title: "Parsing Options: Decoding User Intent"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The FIND utility parses command-line options to determine user intent. This section retrieves the DOS switch character (typically '/') and checks for valid options. If no options are found, the program proceeds to locate the search string. In the early 1980s, command-line interfaces were the primary means of interacting with software, and parsing user input was a critical task. The design of FIND reflects the influence of Unix utilities like grep, which inspired its functionality. However, adapting these concepts to MS-DOS required careful handling of input formats and error conditions. The use of assembly language allowed for precise control over memory and registers, ensuring efficient parsing even on the constrained hardware of the IBM PC. This approach laid the groundwork for more sophisticated text processing tools in later versions of MS-DOS and Windows."
  - id: "opt-v-c-n-option-handling"
    line_start: 463
    line_end: 489
    title: "Option Handling: v, c, and n Flags"
    wikipedia_url: "https://en.wikipedia.org/wiki/Text_processing"
    image_url: ""
    image_caption: ""
    content: "This section handles the 'v', 'c', and 'n' options, setting the corresponding flags in the option table. The 'v' option enables inverse matching, the 'c' option counts matching lines, and the 'n' option adds line numbers to the output. These features mirror the functionality of Unix text processing tools, adapted for MS-DOS users. The modular design of the option table ensures that each flag is set independently, allowing for flexible combinations of features. In 1983, the inclusion of these options demonstrated Microsoft's commitment to bringing advanced text processing capabilities to personal computers. The use of assembly language for flag manipulation highlights the low-level control required to optimize performance on the 8086 CPU. These options became a staple of text processing utilities, influencing the design of similar tools in later operating systems."
  - id: "find-str-string-parsing"
    line_start: 511
    line_end: 519
    title: "String Parsing: Handling Quotes and Errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The FIND utility parses the search string, ensuring it begins and ends with double quotes. If the string is improperly formatted, an error message is displayed. This strict parsing reflects the constraints of early command-line utilities, where user input had to conform to specific formats to avoid ambiguity. The decision to require quotes for the search string was likely inspired by Unix conventions, adapted for the MS-DOS environment. In the early 1980s, personal computing was still in its infancy, and user-friendly interfaces were rare. Programs like FIND relied on clear documentation to guide users in providing valid input. The use of assembly language allowed for efficient error handling and precise control over string parsing, ensuring robustness despite the limited resources of the IBM PC."
  - id: "move-fname-file-name-handling"
    line_start: 615
    line_end: 631
    title: "File Name Handling: Preparing for Input"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section processes file names provided in the command line, storing them in a null-terminated buffer. If no file name is given, the program defaults to standard input. Handling file names efficiently was crucial in the early days of MS-DOS, where programs often operated on single files due to hardware limitations. The decision to use a null-terminated buffer reflects the influence of C programming conventions, which were becoming standard at the time. In 1983, personal computers were transitioning from hobbyist tools to business machines, and software like FIND had to balance simplicity with functionality. The modular design of this routine allowed for easy adaptation to different input scenarios, ensuring compatibility with a wide range of user needs. This approach influenced the design of file handling routines in later operating systems."
  - id: "go-match-buffer-scanning"
    line_start: 783
    line_end: 809
    title: "Buffer Scanning: Searching for Matches"
    wikipedia_url: "https://en.wikipedia.org/wiki/Pattern_matching"
    image_url: ""
    image_caption: ""
    content: "The FIND utility scans the buffer for lines matching the search string, handling edge cases like incomplete lines and ensuring proper termination with carriage return and line feed characters. This routine reflects the influence of Unix text processing tools, adapted for MS-DOS's simpler environment. In the early 1980s, pattern matching was a powerful feature that enabled users to analyze text files efficiently. The use of assembly language allowed for precise control over memory and registers, ensuring optimal performance on the IBM PC's 8086 CPU. This routine demonstrates the ingenuity of early software developers, who had to work within the constraints of limited hardware while delivering robust functionality. The techniques used here influenced the design of text processing utilities in later operating systems, paving the way for more advanced tools."
  - id: "string-matching-routine"
    line_start: 1009
    line_end: 1075
    title: "String Matching: Searching for Patterns in Lines"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_searching_algorithm"
    image_url: ""
    image_caption: ""
    content: "The subroutine `a_matchk` and its continuation `a_match` implement a string matching algorithm to locate patterns within lines of text. This routine uses assembly instructions like `lodsb` and `repnz scasb` to efficiently scan through a buffer for a match. The programmer's goal here was to enable MS-DOS to search files for specific strings, a feature essential for utilities like FIND. In 1983, such operations had to be optimized for the limited processing power of the Intel 8086 CPU, which ran at a mere 5–10 MHz. Tim Paterson and Microsoft's engineers were working under constraints that demanded every byte and cycle count. The use of assembly allowed them to squeeze maximum performance out of the hardware. This approach laid the groundwork for text processing utilities that would become standard in operating systems. The techniques seen here, such as buffer scanning and conditional jumps, influenced later implementations in higher-level languages."
  - id: "file-buffer-management"
    line_start: 1163
    line_end: 1187
    title: "Buffer Refill: Optimizing File Processing"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The `more_stuff` and `no_seek` routines manage the buffer refill process during file scanning. When the buffer runs out of complete lines, these routines ensure that the remaining partial line is preserved and new lines are read into the buffer. The code performs a seek operation using DOS interrupts (`int dos_ent`) to reposition the file pointer, a technique that minimizes redundant reads and optimizes performance. In 1983, efficient file handling was crucial for MS-DOS's success, as PCs often had limited RAM and slow disk drives. This code reflects the careful balancing act required to maximize throughput while conserving resources. The buffer management strategy seen here influenced later file system designs, which continued to prioritize efficient data access and processing. These routines highlight the ingenuity of early software engineers working within tight constraints."
  - id: "error-handling-routines"
    line_start: 1189
    line_end: 1235
    title: "Error Handling: Graceful Recovery in File Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The routines `read_error`, `open_error`, and `r_error` demonstrate MS-DOS's approach to error handling during file operations. These sections handle scenarios where file reads or opens fail, providing meaningful error messages to the user. In the early 1980s, robust error handling was critical for user adoption, as personal computers were still unfamiliar to many. The code uses DOS interrupts (`int dos_ent`) to interact with the operating system's file system and gracefully close files or print error messages when operations fail. This design reflects the influence of Unix-like systems, which inspired MS-DOS v2.0's more sophisticated capabilities compared to its predecessor. By ensuring the system could recover from errors without crashing, Microsoft helped establish MS-DOS as a reliable platform for business and personal use. These routines also highlight the importance of user feedback in software design, a principle that remains relevant today."
  - id: "binary-to-ascii-conversion"
    line_start: 1491
    line_end: 1535
    title: "Binary to ASCII: Making Numbers Human-Readable"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "The `bin2asc` routine converts binary numbers into ASCII characters for display. This operation is essential for presenting numerical data in a format humans can understand, such as file sizes or line counts. The code uses division and modulus operations (`div` and `mod`) to extract digits, which are then converted to their ASCII equivalents. In the early PC era, such routines were vital for bridging the gap between machine-readable data and user-friendly interfaces. The Intel 8086's instruction set provided the tools for efficient implementation, but the programmer still had to carefully manage registers and memory. This routine exemplifies the ingenuity required to perform seemingly simple tasks on limited hardware. The binary-to-ASCII conversion technique seen here remains foundational in computing, though modern systems rely on higher-level abstractions to achieve the same result."
  - id: "kanji-character-handling"
    line_start: 1691
    line_end: 1771
    title: "Kanji Support: Early Steps Toward Globalization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "The routines `next_kchar` and `is_prefix` handle Kanji characters, showcasing MS-DOS's early efforts to support internationalization. Kanji, used in Japanese writing, requires special handling due to its multi-byte encoding. These routines advance pointers and identify Kanji prefixes, enabling proper processing of Kanji strings. In the early 1980s, personal computing was rapidly expanding beyond English-speaking markets, and Microsoft recognized the importance of accommodating diverse languages. This code reflects the challenges of implementing internationalization on hardware with limited memory and processing power. The inclusion of Kanji support in MS-DOS v2.0 helped the operating system gain traction in Japan, a key market for PCs. These routines mark an important step in the evolution of software globalization, paving the way for modern systems that seamlessly handle multilingual text."
  - id: "isk-simple-return"
    line_start: 1773
    line_end: 1777
    title: "A minimal subroutine: simplicity in design"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'isk' subroutine is strikingly minimal, consisting only of a 'stc' (set carry flag) instruction followed by a 'ret' (return). This brevity suggests it was designed as a placeholder or a simple utility to signal an error condition or a specific state. In the early 1980s, MS-DOS was evolving rapidly, and such minimal routines were often employed to meet tight deadlines or provide hooks for future expansion. Tim Paterson, the original author of 86-DOS, was known for his pragmatic approach to coding, focusing on functionality over elegance. This subroutine exemplifies that ethos, serving its purpose without unnecessary complexity. While such simplicity might seem trivial today, it reflects the constraints of early microcomputers, where every byte of memory and every CPU cycle mattered."
  - id: "patch-area-runtime-flexibility"
    line_start: 1787
    line_end: 1791
    title: "Patch area: runtime adaptability"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'patch_area' section reserves a block of memory for runtime modifications, defined as 256 words of uninitialized data. This design choice highlights the adaptability required in early operating systems like MS-DOS. In the 1980s, software often had to accommodate hardware variations and unforeseen bugs. By reserving a patch area, developers could apply fixes or tweaks without recompiling the entire system. This approach was particularly valuable for OEMs customizing MS-DOS for their hardware. Microsoft's decision to include such flexibility reflects their strategy to license MS-DOS widely, ensuring it could run on a diverse array of machines. This patch area is a testament to the pragmatic engineering that made MS-DOS a cornerstone of personal computing."
  - id: "buffer-area-string-file-handling"
    line_start: 1799
    line_end: 1819
    title: "Buffer definitions: managing strings and files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This section defines buffers for string arguments, file names, and file contents. Each buffer is allocated with a specific size, including extra space for null terminators or guard bytes. In the constrained environment of early PCs, efficient memory management was crucial. These buffers reflect the careful planning required to handle user input and file operations without exceeding the limited RAM available on machines like the IBM PC. The inclusion of guard bytes to prevent buffer overflows demonstrates an awareness of potential errors, a forward-thinking approach in an era when such safeguards were not yet standard. These definitions also illustrate the influence of Unix-like systems on MS-DOS v2.0, as the concept of structured buffers was central to Unix's design philosophy."
  - id: "error-messages-external-references"
    line_start: 1823
    line_end: 1837
    title: "Error messages: modular and reusable design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "The error message section declares external references to predefined strings and their lengths. This modular approach allows error messages to be managed separately from the main code, facilitating updates and localization. In the early 1980s, software localization was becoming increasingly important as personal computing expanded globally. By externalizing error messages, MS-DOS v2.0 could be adapted more easily for different languages and markets. This design also reflects the influence of Unix, which emphasized modularity and reusability. Microsoft's decision to adopt such practices in MS-DOS v2.0 helped establish it as a versatile and widely adopted operating system, laying the groundwork for its dominance in the PC market."
  - id: "stack-segment-runtime-operations"
    line_start: 1845
    line_end: 1857
    title: "Stack segment: the backbone of execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Call_stack"
    image_url: ""
    image_caption: ""
    content: "The stack segment defines a block of memory for runtime operations, including function calls and temporary storage. In assembly language, the stack is a critical component, enabling subroutine calls, parameter passing, and local variable management. The allocation of 64 words reflects the constrained memory environment of early PCs, where developers had to balance functionality with resource limitations. This stack segment is a direct descendant of techniques used in earlier operating systems and programming languages, such as CP/M and Unix. By adhering to these established practices, MS-DOS v2.0 ensured compatibility with existing software paradigms while providing a reliable foundation for new applications. The stack's role in managing execution flow underscores its importance in the architecture of MS-DOS and its successors."

---

      title   MSDOS V2.0  FIND



;--------------------------------------------------------------------;

; Revision History:                                                  ;

;                                                                    ;

;       V1.1    8/23/82         M.A.Ulloa                            ;

;                                                                    ;

;       V1.2    9/22/82         M.A.Ulloa                            ;

;                 Added the -c and -n options                        ;

;                                                                    ;

;               9/23/82         M.A.Ulloa                            ;

;                 Added DOS version number control                   ;

;                                                                    ;

;               10/07/82  Rev.2         M.A.Ulloa                    ;

;                 Changed quote for double quotes, and added         ;

;               file name printing                                   ;

;                                                                    ;

;               10/20/82  Rev.3         M.A.Ulloa                    ;

;                 Modified IBM name to FIND, and changed the text    ;

;               of some messages.                                    ;

;                                                                    ;

;               10/25/82  Rev.4         M.A.Ulloa                    ;

;                 Changed name to FIND and all messages to the       ;

;               IBM form.                                            ;

;                                                                    ;

;               10/27/82  Rev.5         M.A.Ulloa                    ;

;                 Made the correct exit on version check in case     ;

;               of a 1.x DOS.                                        ;

;                                                                    ;

;               11/4/82 Rev. 5          A.R. Reynolds                ;

;                  Messages moved to external module                 ;

;                                                                    ;

;               11/10/82  Rev. 6        M.A. Ulloa                   ;

;                 Corrected problem with line numbers, and a problem ;

;               with seeking for 0 chars.                            ;

;                                                                    ;

;               03/30/83  Rev. 7        M.A. Ulloa                   ;

;                 Added patch area for bug fixing.                   ;

;                                                                    ;

;               04/14/83  Rev. 8        M.A. Ulloa                   ;

;                 Made changes for Kanji characters. (uhg!)          ;

;                                                                    ;

;--------------------------------------------------------------------;



FALSE   equ     0

TRUE    equ     NOT FALSE



KANJI   equ     FALSE                   ;set to true is kanji vers.



;--------------------------------------------------------------------;

;       FIND program following the standart UNIX operation.          ;

;                                                                    ;

; FORMAT:                                                            ;

;       find {option} string {filename {filename} {...}}             ;

;                                                                    ;

; NOTES:                                                             ;

;       1) String arguments HAVE to be enclosed                      ;

;       in double quotes. (Two double quotes if a                    ;

;       doble quote is to be included). Only ONE                     ;

;       string argument is presently allowed.                        ;

;                                                                    ;

;       2) Options are available:                                    ;

;               v       All lines but those matching are considered  ;

;               c       Only print a count of matching lines         ;

;               n       Each line is preceded by its relative        ;

;                         line number in the file.                   ;

;                                                                    ;

;       - Options can be Upper or lower case.                        ;

;       - Format: The switch character followed by an options        ;

;       character. I.e.: In the IBM PC: /v                           ;

;                                                                    ;

;       3) The program returns:                                      ;

;               0 - OK, and some matches                             ;

;               2 - Some Error                                       ;

;                                                                    ;

;       4) The maximum line size is determined by                    ;

;       buffer size. Bigger lines will bomb the program.             ;

;                                                                    ;

;       5) If no file name is given then it will asssume             ;

;       the input is comming from the Standart Input. NO             ;

;       errors are reported when reading from Standart Input.        ;

;--------------------------------------------------------------------;



code    segment public

assume  cs:code,ss:code,ds:nothing,es:nothing





CR      equ     0dh                     ;A Carriage Return

LF      equ     0ah                     ;A Line Feed

quote_char equ  22h                     ;A double quote character





buffer_size equ 4096                    ;file buffer size

st_buf_size equ 128                     ;string arg. buffer size

fname_buf_size equ 64                   ;file name buffer size





;----- DOS EQUATES --------------------------------------------------;

std_in  equ     0                       ;STD input handle

std_out equ     1                       ;STD output handle

std_err equ     2                       ;STD error handle

dos_ent equ     21h                     ;DOS entry point



std_con_string_output equ 9

get_version equ 48

char_oper equ   55                      ;get configuration parameters

open    equ     61                      ;DOS std open code

close   equ     62                      ;DOS std close code

read    equ     63                      ;DOS std read code

write   equ     64                      ;DOS std write code

lseek   equ     66                      ;DOS file seek

exit    equ     76                      ;DOS process exit code





;----- Misc  Data -----------------------------------------------;

make    db      "***MAUlloa/Microsoft/V12***"

rev     db      "8"





colon   db      ": "

n1_buf  db      "["

n2_buf  db      8 dup(0)                ;buffer for number conversion







;----- OPTION FLAGS -------------------------------------------------;

; If a flag is set (0ffh) then the option has been selected, if

;reset (0) then it has been not. All options are reset initially.

; NOTE: the order of this table has to remain consistent with the

;options dispatch code. If any changes are made they have to

;correspond with the code.



opt_tbl:



v_flg   db      0

c_flg   db      0

n_flg   db      0

x_flg   db      0               ;not used

l_flg   db      0               ;not used





;----- LINE COUNTERS ------------------------------------------------;

mtch_cntr dw    0                       ;matched lines counter

line_cntr dw    0                       ;line counter





;----- MAIN ROUTINE -------------------------------------------------;

start:



;----- CHECK VERSION NUMBER -----------------------------------------;



        mov     ah,get_version

        int     21h

        cmp     al,2

        jge     vers_ok

        push    cs

        pop     ds

        mov     dx,offset bad_vers

        mov     ah,std_con_string_output

        int     21h

        push    es              ;bad vers, exit a la 1.x

        xor     ax,ax

        push    ax



badfart proc    far             ;(what a hack!!)

        ret

badfart endp



vers_ok:



        push    cs                      ;load ES to the right area,

        pop     es                      ; for use with DI register



assume  es:code



;--------------------------------------------------------------------;



        mov     si,81h                  ;Start addrss. of commad line buf.



        call    kill_bl                 ;Get rid of blanks

        or      bx,bx                   ;A CR found?

        jz      find_opt                ;no, first find the options

args_missing:

        mov     dx,offset errmsg1       ;empty command line, no args: error.

        mov     cl,cs:errlen1

        call    prt_err

        mov     al,2                    ;error code for exit

        jmp     done





;----- FIND THE OPTION IF ANY ---------------------------------------;

find_opt:

        mov     ah,char_oper            ;get the dos switch char.

        mov     al,0

        int     dos_ent                 ;switch char in DL

        push    dx

another_opt:

        lodsb                           ;get the first char of command line

        cmp     al,' '                  ;a blank?

        je      cont_scan

        cmp     al,CR                   ;a Carriage Return

        je      args_missing

        pop     dx                      ;get switch character

        cmp     al,dl                   ;is it the switch char?

        jne     find_str                ;no, no options: get the string

        push    dx                      ;save for another round



        lodsb                           ;get the option character

        cmp     al,' '                  ;a blank?

        je      cont_scan               ;yes, ignore and continue

        cmp     al,CR                   ;a CR?

        je      args_missing            ;yes, error...

        call    make_caps               ;Capitalize the character

        mov     bx,offset opt_tbl       ;pointer to option flag table



        cmp     al,'V'                  ;the v option?

        je      opt_v

        cmp     al,'C'                  ;the c option?

        je      opt_c

        cmp     al,'N'                  ;the n option?

        je      opt_n



        mov     cs:errmsg5_opt,al       ;save the option

        mov     dx,offset errmsg5       ;unknown option: error

        mov     cl,cs:errlen5

        call    prt_err

        mov     dx,offset crlf          ;print a CRLF

        mov     cx,2

        call    prt_err

        jmp     another_opt             ;process next option



opt_v:

        mov     di,0

        jmp     short opt_dispatch



opt_c:

        mov     di,1

        jmp     short opt_dispatch



opt_n:

        mov     di,2



opt_dispatch:

        mov     es:byte ptr[bx+di],0ffh ;set the corresponding flag

        jmp     another_opt             ;process the rest of the options



cont_scan:

        dec     si                      ;adjust SI

        call    kill_bl                 ;get rid of blanks

        or      bx,bx                   ;A CR found?

        jz      another_opt             ;no, test for other options

        jmp     args_missing            ;yes, error...





;----- FIND STRING ARGUMENT -----------------------------------------;

find_str:

        cmp     al,quote_char           ;string should start with a

        jnz     bad_str_err             ; quote character, if not: error.

        mov     di,offset st_buffer     ;String argument buffer addrss.

        xor     cx,cx                   ;Clear to keep string length.



move_str:

        lodsb

        cmp     al,CR                   ;if a CR is found in the string

        jnz     str_ok                  ; then it's a bad string

bad_str_err:

        mov     dx,offset errmsg2       ;bad string error message

        mov     cl,cs:errlen2

        call    prt_err                 ;print the error.

        mov     al,2

        jmp     done



str_ok:

        cmp     al,quote_char           ;look for a quote character

        jnz     move_char               ;not an apost., move to buffer

        lodsb                           ;an apost., check next char.

        cmp     al,quote_char           ;another quote character?

        je      move_char               ;yes, move it to the buffer

        dec     si                      ;no, adjust the pointer

        mov     es:st_length,cx         ;store the string length

        or      cx,cx                   ;Is the string empty?

        jnz     other_args              ;no: get the rest of the args.

        mov     al,1                    ;empty: no matches(!?)

        jmp     done

move_char:

        stosb                           ;put in buffer

        inc     cx                      ;increment string length

        jmp     move_str





;----- FIND THE FILE ARGUMENTS --------------------------------------;

other_args:                             ;Process the rest of the command

                                        ; line arguments.

        call    kill_bl                 ;get rid of leading blanks

        or      bx,bx                   ;At least one argument necessary,

        jz      further_args            ; if a CR not found: ok.



;----- USE STD IN FOR INPUT -----------------------------------------;

        push    cs

        pop     ds

        mov     ax,std_in               ;handle

        jmp     fill



further_args:

        call    clr_cntrs               ;set all counters to zero

        mov     di,offset file_name_buf ;Set pointer to the name buffer

        xor     cx,cx                   ;zero file name length

move_fname:

        lodsb

        cmp     al,' '                  ;A blank: end of file name,

        je      done_move

        cmp     al,CR                   ;A CR: idem.

        je      done_move

        stosb                           ;store in name buffer

        inc     cx                      ;increment file name length

        jmp     move_fname

done_move:

        dec     si                      ;Adjust pointer for next round.

        mov     es:byte ptr[di],00h     ;File names are null terminated

        push    si                      ;Save SI to continue com. line scan.

        push    ds                      ;Save DS register contents for

                                        ; later because it points to the

                                        ; rest of the arguments.

        mov     es:file_name_len,cx     ;save the name length



;----- OPEN FILE FOR READING ----------------------------------------;

        push    cs                      ;Load new DS with CS

        pop     ds

        mov     dx,offset file_name_buf ;addrss. of the file name

        mov     ah,open

        mov     al,0                    ;file open for reading

        int     dos_ent                 ;call the DOS

        jnc     say_name                ;if no carry then no errors

        jmp     open_error



;----- PRINT FILE NAME ----------------------------------------------;

say_name:

        push    ax                      ;save file handle

        mov     dx,offset heading

        mov     cl,cs:heading_len

        xor     ch,ch

        call    prout



        mov     dx,offset file_name_buf

        mov     cx,ds:file_name_len

        call    prout



        cmp     ds:c_flg,0ffh           ;count only flag set?

        je      xx1



        mov     dx,offset crlf

        mov     cx,2

        call    prout



xx1:

        pop     ax



;----- Fill Buffer for Matching -------------------------------------;

fill:

        mov     bx,ax                   ;retrieve handle

refill:

        mov     dx,offset buffer        ;data buffer addrss.

        mov     cx,buffer_size

        mov     ah,read

        int     dos_ent

        jnc     no_read_error           ;if carry then read error

        jmp     read_error

no_read_error:

        or      ax,ax                   ;if ax=0 then all done

        jnz     go_match

        cmp     ds:c_flg,0ffh           ;count only flag set?

        jne     sj2

        call    print_count

sj2:

        cmp     bx,std_in               ;Using STD IN?

        jnz     regular

        jmp     foo                     ;if so: all done, exit

regular:

        mov     ah,close                ;otherwise close the file

        int     dos_ent

        jmp     scan_rest               ;get another file



;----- MATCH ROUTINE ------------------------------------------------;

;Note: If input is being taken from a file the stack contains

; (from top to bottom):

;       - Pointer to the next command in the command line

;       - Pointer to the program segment prefix (to be loaded into

;         DS to access the command line.

; if the imput is from the standart input then NONE of it will be

; in the stack.



go_match:

        push    bx                      ;save the file handle

        mov     bp,offset buffer        ;ptr to first line of file

        mov     di,ax                   ;dispalcement from beg of buffer



        cmp     ax,buffer_size-1        ;last line of the file?

        jg      no_last_line            ;if yes, add a CRLF just in case

        mov     bx,bp

        cmp     byte ptr[bx+di-1],LF    ;finished with a LF?

        je      no_last_line            ;yes, it's an OK line.

        mov     byte ptr[bx+di],CR      ;put a CR at the end of the data

        inc     di

        mov     byte ptr[bx+di],LF      ;put a LF ...

        inc     di



no_last_line:

        push    di                      ;save the # of chars. in the buffer

        push    bp

        mov     dx,ds:st_length         ;length of the string arg.

        dec     dx                      ;adjust for later use

        jmp     short try_again





more_stuff_o:

        jmp     more_stuff







;----- SCAN LINES IN THE BUFFER FOR A MATCH -------------------------;

;Note: at this point the stack contains (from top to bottom):

;       - Stuff mentioned before

;       - File Handle

;       - Number of chars. left in the buffer from the next line.

;       - Addrs. of the next line in the buffer.

;

; plus, DX has the adjusted length of the string argument.



try_again:

        inc     ds:line_cntr            ;increment line counter

        pop     bp                      ;addrs. of next line in the buffer

        mov     di,bp                   ;points to beg. of a line

        pop     cx                      ;get # of chars left in the buffer

        mov     bx,cx                   ;save in case a non-complete line

        mov     al,LF                   ;search for a Line Feed

        jcxz    more_stuff_o            ;no chars left in buffer

        repnz   scasb

        jnz     more_stuff_o            ;no full line left in buffer



        push    cx                      ;save chars left in buffer

        push    di                      ;points to beg. of next line

        mov     cx,di

        sub     cx,bp                   ;length of the current line

        mov     bx,cx                   ;save in case it has a match

        dec     cx

        dec     cx                      ;CRLF characters discounted

        jcxz    try_again_opt           ;if line empty go to next line

        mov     di,bp                   ;pointer to the beg. of current line

another_char:

;

; On entry:

;       BX      line length

;       CX      adjusted line length

;       DX      adjusted string argument length

;       DI      points to beg. of line

;



IF      KANJI



        push    dx                      ;save for next line

lop:

        pop     dx

        push    dx

        inc     dx                      ;different algorithm!

        mov     si,offset st_buffer     ;pointer to beg. of string argument



comp_next_char:

        push    di

        mov     di,si

        call    is_prefix               ;check for a prefix char

        pop     di

        jnc     nopre

        lodsw

        cmp     cx,1                    ; Can not compare a two byte char

        jz      try_again_opt1          ; if there is only one available

        cmp     ax,word ptr [di]

        jz      kmatch1

        call    next_kchar              ;no match, advance di to next kanji

        jc      try_again_opt1          ;not enough chars left in line

        jmp     short lop               ;try another char in line



nopre:

        lodsb

        cmp     al,byte ptr [di]

        jz      kmatch

        call    next_kchar              ;no match, advance di to next kanji

        jc      try_again_opt1          ;not enough chars left in line

        jmp     short lop               ;try another char in line



try_again_opt1:

        pop     dx

        jmp     try_again_opt





kmatch1:

        dec     dx                      ;last char had prefix so it was

                                        ; long.

kmatch:

        dec     dx

        jz      a_matchk                ; no chars left: a match!

        call    next_kchar

        jc      try_again_opt1

        jmp     comp_next_char          ; loop if chars left in arg.



a_matchk:

        pop     dx



ELSE



        mov     si,offset st_buffer     ;pointer to beg. of string argument

        lodsb                           ;get first character of the str. arg.

        repnz   scasb                   ;search for a match in current line

        jnz     try_again_opt           ;no match, try the next line

        cmp     cx,dx                   ;compare lengths, a full match is not

        jb      try_again_opt           ; possible if CX < DX.

        push    di                      ;save addrs. of next char. in the line

        push    cx                      ;save the # of chars. left in the line

        mov     cx,dx                   ;get the adjusted string arg. length

        jcxz    a_match                 ;if a single char string, then match!

        repz    cmpsb                   ;compare string with line

        jz      a_match                 ;a match found, hurrah!

        pop     cx                      ;no match, get # of chars remaining

                                        ; in the line.

        pop     di                      ;position of the next char. in the line

        jmp     another_char





;----- A MATCH: CHECK FOR THE v OPTION ------------------------------;

a_match:

        pop     ax                      ;adjust stack

        pop     ax

ENDIF



        cmp     ds:v_flg,0ffh           ;is flag set?

        jne     prt_line                ;no, print the line

        jmp     try_again



;----- NO MATCH: CHECK FOR THE v OPTION -----------------------------;

try_again_opt:

        cmp     ds:v_flg,0ffh           ;is flag set?

        jne     try_again               ;no goto next line



;----- PRINT THE LINE WITH THE MATCH --------------------------------;

;Note: at this point the stack contains (top to bottom)

;       - Stuff mentioned before

;

; plus, BP points to begginig of the current line, BX has the length

;of the current line including the CRLF, and DX the adjusted length of

;the string argument.



prt_line:

        cmp     ds:c_flg,0ffh           ;is count only flag set?

        jne     no_c_flg

        inc     ds:mtch_cntr            ;yes, increment counter

        jmp     try_again



no_c_flg:

        push    dx                      ;save the adjusted string arg. length

        cmp     ds:n_flg,0ffh           ;is line number flag set?

        jne     no_n_flg

        call    prt_lcntr

no_n_flg:

        mov     dx,bp

        mov     cx,bx

        call    prout

        pop     dx                      ;restore

        jmp     try_again



;----- READ MORE TEXT LINES INTO THE BUFFER -------------------------;

; The scanning routines have detected that the buffer does not

;contain a full line any more. More lines have to be read into the

;buffer. But first perform a seek on the file in order to re-read

;the non-complete line into the begining of the buffer.

; Uppon entry BP contains points to the begining of the non-complete

;line, and BX has the number of characters left in the buffer.

; The Stack contains (top to bottom):

;       - Pointer to the next command in the command line

;       - Pointer to the program segment prefix (to be loaded into

;         DS to access the command line).

;       - File handle.



more_stuff:

        mov     dx,bx                   ;get chars left in buffer

        pop     bx                      ;get the handle

        or      dx,dx                   ;are there 0 left?

        jz      no_seek                 ;yes, do not seek

        neg     dx                      ;form two's complement

        mov     cx,-1

        mov     al,1                    ;seek from the current position

        mov     ah,lseek                ;seek on file

        int     dos_ent

        jc      read_error

no_seek:

        jmp     refill                  ;no errors: refill the buffer

read_error:

        cmp     bx,std_in               ;Using STD IN?

        je      foo                     ;if so: all done, exit

        mov     ah,close                ;close the file

        int     dos_ent

        mov     dx,offset errmsg4_pre   ;read error

        mov     cl,cs:errlen4_pre

        call    prt_file_name           ;print the file name in error

        mov     dx,offset errmsg4_post  ;read error

        mov     cl,cs:errlen4_post

        jmp     r_error



;----- PRINT ERRORS -------------------------------------------------;

open_error:

        mov     dx,offset errmsg3_pre    ;error in open operation

        mov     cl,cs:errlen3_pre

        call    prt_err_2               ;print error message

        call    prt_file_name           ;print the file name in error

        mov     dx,offset errmsg3_post  ;error in open operation

        mov     cl,cs:errlen3_post

r_error:

        call    prt_err_2               ;print error message



;----- SCAN THE REST OF THE COMMAND LINE ----------------------------;

scan_rest:

        pop     ds                      ;restore pointer to comm. line

        pop     si                      ;restore pointer to next comm.

        call    kill_bl                 ;look for further args.

        or      bx,bx                   ;test for a CR

        jnz     foo

        jmp     further_args

foo:

        mov     al,0                    ;Proper code

done:

        mov     ah,exit                 ;All done, exit with proper code.

        int     dos_ent





;--------------------------------------------------------------------;

;            Get rid of blanks in command line.                      ;

;    Advances the SI reg till the next non-blank character, if the   ;

; character is a CR (0dh) then returns with BX non-zero, otherwise   ;

; BX is zero.                                                        ;

;                                                                    ;

; entry:                                                             ;

;       SI      points to the first character on the line to scan.   ;

;                                                                    ;

; exit:                                                              ;

;       SI      points to the first non-blank character found.       ;

;       BX      contains 0D hex if the first non-blank found is      ;

;                a Carriage Return, otherwise it is 0.               ;

;                                                                    ;

; modifies:                                                          ;

;       BX, SI, and AX                                               ;

;                                                                    ;

;--------------------------------------------------------------------;

kill_bl:

        cld                             ;increment

        xor     bx,bx                   ;zero bx to start: no CR found

no_bl:

        lodsb                           ;get rid of blanks

        cmp     al,' '

        je      no_bl

        cmp     al,CR

        jnz     no_cr

        mov     bx,ax                   ;make bx non-zero (actually 0dh)

no_cr:

        dec     si                      ;adjust pointer

        ret





;--------------------------------------------------------------------;

;               Clear Counters                                       ;

;--------------------------------------------------------------------;

clr_cntrs:

        mov     byte ptr es:mtch_cntr,0

        mov     byte ptr es:line_cntr,0

        ret



;--------------------------------------------------------------------;

;               Print Count of Matched lines                         ;

;                                                                    ;

;               Modifies: AX,CX,DX and DI                            ;

;--------------------------------------------------------------------;

print_count:

        push    bx                      ;save handle

        cmp     bx,std_in               ;using std_in?

        jz      sj3                     ;if so do not print file name



        mov     dx,offset colon

        mov     cx,2

        call    prout                   ;print colon

sj3:

        mov     ax,ds:mtch_cntr

        mov     di,offset n2_buf        ;buffer for characters

        call    bin2asc                 ;convert to ascii

        mov     dx,offset n2_buf

        call    prout                   ;print the number

        mov     dx,offset crlf

        mov     cx,2

        call    prout                   ;print an end of line

        pop     bx

        ret





;--------------------------------------------------------------------;

;               Print relative line number                           ;

;                                                                    ;

;               Modifies: AX,CX and DI                               ;

;--------------------------------------------------------------------;

prt_lcntr:

        push    bx

        push    dx

        mov     ax,ds:line_cntr

        mov     di,offset n2_buf

        call    bin2asc

        mov     byte ptr[di],"]"

        inc     cx

        inc     cx

        mov     dx,offset n1_buf

        call    prout

        pop     dx

        pop     bx

        ret



;--------------------------------------------------------------------;

;               Print string to STD_OUT                              ;

;--------------------------------------------------------------------;

prout:

        mov     bx,std_out

        mov     ah,write

        int     dos_ent

        ret





;--------------------------------------------------------------------;

;       Binary to Ascii conversion routine                           ;

;                                                                    ;

; Entry:                                                             ;

;       AX      Binary number                                        ;

;       DI      Points to one past the last char in the              ;

;             result buffer.                                         ;

;                                                                    ;

; Exit:                                                              ;

;       Result in the buffer MSD first                               ;

;       CX      Digit count                                          ;

;                                                                    ;

; Modifies:                                                          ;

;       AX,BX,CX,DX and DI                                           ;

;                                                                    ;

;--------------------------------------------------------------------;

bin2asc:

        mov     bx,0ah

        xor     cx,cx

go_div:

        inc     cx

        cmp     ax,bx

        jb      div_done

        xor     dx,dx

        div     bx

        add     dl,'0'          ;convert to ASCII

        push    dx

        jmp     short go_div



div_done:

        add     al,'0'

        push    ax

        mov     bx,cx

deposit:

        pop     ax

        stosb

        loop    deposit

        mov     cx,bx

        ret





;--------------------------------------------------------------------;

;       Print the current file name                                  ;

;                                                                    ;

; modifies:                                                          ;

;       DX, CX, BX and AX                                            ;

;--------------------------------------------------------------------;

prt_file_name:

        mov     dx,offset file_name_buf ;print the file name

        mov     cx,ds:file_name_len     ;retrive file name length

        jmp     short prt_err_2





;--------------------------------------------------------------------;

;       Print an error message to the Standart error                 ;

;                                                                    ;

; entry:                                                             ;

;       DX      has the pointer to the message                       ;

;       CX      has the length of the message                        ;

;                                                                    ;

; modifies:                                                          ;

;        BX and AX                                                   ;

;--------------------------------------------------------------------;

prt_err:

        push    ds                      ;Save the current DS

        push    cs                      ;Make DS point to the right

        pop     ds                      ; place, for DOS use.

        call    prt_err_2

        pop     ds

        ret



prt_err_2:

        xor     ch,ch

        mov     bx,std_err

        mov     ah,write

        int     dos_ent                 ;write error message

        ret





;--------------------------------------------------------------------;

;       CAPIALIZES THE CHARACTER IN AL                               ;

;                                                                    ;

;       entry:                                                       ;

;               AL      has the character to Capitalize              ;

;                                                                    ;

;       exit:                                                        ;

;               AL      has the capitalized character                ;

;                                                                    ;

;       modifies:                                                    ;

;               AL                                                   ;

;--------------------------------------------------------------------;

make_caps:

        cmp     al,'a'

        jb      no_cap

        cmp     al,'z'

        jg      no_cap

        and     al,0dfh

no_cap:

        ret







IF      KANJI



;--------------------------------------------------------------------;

;       ADVANCE POINTER TO NEXT KANJI CHARACTER                      ;

;                                                                    ;

; entry:        DI  points to a Kanji string                         ;

;               CX  length in bytes of the string                    ;

;                                                                    ;

; exit:         DI  points to next Kanji char                        ;

;               CX  has number of bytes left                         ;

;                                                                    ;

; modifies:     AX                                                   ;

;                                                                    ;

;--------------------------------------------------------------------;

next_kchar:

        jcxz    no_kleft

        call    is_prefix

        jnc     no_p

        inc     di

        dec     cx

        jcxz    no_kleft                ; for insurance

no_p:

        inc     di

        dec     cx

        clc

        ret



no_kleft:

        stc

        ret





;--------------------------------------------------------------------;

;       FIND OUT IS THE BYTE IS A KANJI PREFIX                       ;

;                                                                    ;

; entry:  DI    points to a kanji string                             ;

;                                                                    ;

; exit:   Carry set if it is a kanji prefix                          ;

;                                                                    ;

; modifies:     AX                                                   ;

;                                                                    ;

;--------------------------------------------------------------------;

is_prefix:

        mov     al,byte ptr [di]

        cmp     al,81h

        jb      nok

        cmp     al,0a0h

        jb      isk

        cmp     al,0e0h

        jb      nok

        cmp     al,0fdh

        jb      isk

nok:

        clc

        ret

isk:

        stc

        ret



ENDIF





;----- PATCH AREA ---------------------------------------------------;



patch_area      dw      100h dup(?)







;----- BUFFER AREA --------------------------------------------------;

st_length dw    0                       ;String argumnet length

st_buffer db    st_buf_size dup(?)      ;String argument buffer



file_name_len dw 0                      ;File name length

file_name_buf db fname_buf_size+1 dup(?)  ;File name buffer,(allow for

                                        ; null at the end).



buffer  db      buffer_size+1 dup(?)    ;file buffer, the last byte is

                                        ;a guard in case of forced insertion

                                        ;of a CRLF pair.



;----- ERROR MESSAGES -----------------------------------------------;

        EXTRN   bad_vers:byte,crlf:byte,errmsg1:byte,errlen1:byte,errmsg2:byte

        EXTRN   errmsg3_pre:byte,errlen3_pre:byte

        EXTRN   errmsg3_post:byte,errlen3_post:byte

        EXTRN   errmsg4_pre:byte,errlen4_pre:byte

        EXTRN   errmsg4_post:byte,errlen4_post:byte

        EXTRN   heading:byte,heading_len:byte,errlen2:byte

        EXTRN   errmsg5:byte,errmsg5_opt:byte,errlen5:byte

code    ends





;----- STACK AREA ---------------------------------------------------;

stack   segment stack



        dw      64 dup(?,?)

stack_top equ   $



stack   ends



        end     start

                                                                         