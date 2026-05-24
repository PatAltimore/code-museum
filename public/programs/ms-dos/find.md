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
description: "This file implements the FIND command for MS-DOS 2.0, a text-search utility inspired by Unix conventions, showcasing early efforts to bring Unix-like functionality to DOS."

summary:
  - point: "Introduced Unix-inspired text search functionality to MS-DOS"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Added support for options like line numbering and inverse matches"
    link: "https://en.wikipedia.org/wiki/Command-line_interface"
    link_label: "Command-line interface"
  - point: "Demonstrates early handling of Kanji characters for Japanese localization"
    link: "https://en.wikipedia.org/wiki/Kanji"
    link_label: "Kanji"
  - point: "Uses direct hardware interrupts for file I/O and system calls"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Highlights the constraints of early PC hardware and software design"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "option-table-initialization"
    line_start: 265
    line_end: 265
    title: "The Table That Tracks User Options"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "This section defines the option flags table (`opt_tbl`), which tracks user-selected options for the FIND command. Each flag is initialized to `0`, indicating the option is not selected. The flags correspond to features like inverse matches (`v_flg`), line counting (`c_flg`), and line numbering (`n_flg`). This design reflects the simplicity of early command-line utilities, where options were toggled using single-character flags. In 1983, the idea of parsing command-line arguments was still evolving, and this table-based approach was a straightforward way to manage options. The order of the flags in the table is critical, as it must align with the dispatch code later in the program. This technique influenced how command-line tools in DOS and later Windows handled options, laying the groundwork for more sophisticated argument parsing libraries in modern programming languages like Python and Java."
  - id: "dos-version-check"
    line_start: 293
    line_end: 325
    title: "What Happens When DOS Is Too Old?"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This routine checks the version of DOS running on the system. If the version is less than 2.0, the program exits gracefully with an error message. The check is performed using interrupt `21h` with function `48h` to retrieve the DOS version number. This was necessary because FIND relies on features introduced in DOS 2.0, such as subdirectories and enhanced file handling. The inclusion of this check highlights the rapid evolution of DOS in its early years, as Microsoft added features to meet the demands of IBM and other OEMs. The error handling here is rudimentary but effective, ensuring compatibility without crashing older systems. This approach influenced later software development practices, where version checks became standard for ensuring backward compatibility."
  - id: "find-options-parsing"
    line_start: 381
    line_end: 391
    title: "Parsing Options Like It's 1983"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "This routine begins parsing the command-line options provided by the user. It retrieves the DOS switch character (default `/` on IBM PCs) using interrupt `21h` and scans the command line for valid options. The parsing logic is case-insensitive and supports multiple options, reflecting the influence of Unix-like utilities. The simplicity of this approach underscores the constraints of early assembly programming, where every byte of memory and CPU cycle was precious. The design also demonstrates the growing importance of user-friendly command-line tools in the early 1980s, as personal computers became more accessible. This technique inspired similar option-parsing mechanisms in later DOS utilities and even modern command-line tools."
  - id: "string-argument-validation"
    line_start: 509
    line_end: 519
    title: "Why Strings Must Start with Quotes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Quotation_mark"
    image_url: ""
    image_caption: ""
    content: "This routine validates the string argument provided by the user, ensuring it begins with a double quote (`\"`). If the string does not start with a quote, the program exits with an error message. This strict validation reflects the influence of Unix conventions, where quoted strings were used to handle spaces and special characters in arguments. The decision to enforce quotes was likely driven by the need to simplify parsing in assembly language, where handling complex input formats was challenging. This approach influenced the design of later command-line tools, where quoting became a standard practice for handling arguments with spaces or special characters."
  - id: "kanji-character-handling"
    line_start: 95
    line_end: 261
    title: "The Kanji Challenge: Localizing FIND"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "This section introduces special handling for Kanji characters, reflecting Microsoft's early efforts to localize software for Japanese markets. Kanji characters are multi-byte, requiring a different comparison algorithm than single-byte ASCII characters. The code adjusts the string and line pointers to accommodate Kanji's complexity, ensuring accurate matching. This localization effort was groundbreaking in 1983, as most software at the time was designed for English-speaking users. The challenges of handling multi-byte characters in assembly language highlight the ingenuity required to adapt software for international markets. This work laid the foundation for Microsoft's later success in globalizing its products, influencing the development of Unicode and other character encoding standards."
  - id: "string-matching-with-repz-scasb"
    line_start: 1015
    line_end: 1049
    title: "String Matching with REPZ and SCASB"
    wikipedia_url: "https://en.wikipedia.org/wiki/X86_instruction_listings"
    image_url: ""
    image_caption: ""
    content: "This section implements a string matching routine using x86 assembly instructions REPZ and SCASB. The programmer's goal was to efficiently locate a substring within a line of text, comparing characters one by one until a match was found. REPZ (repeat while zero flag is set) and SCASB (scan string byte) are used to iterate over the line, searching for the first occurrence of the substring. These instructions were highly optimized for the 8086 processor, allowing for rapid text processing. At the time, memory and CPU cycles were precious resources, and assembly programmers often relied on such specialized instructions to achieve performance goals. This approach influenced later text-processing utilities in DOS and other operating systems, demonstrating the power of hardware-specific optimizations."
  - id: "error-handling-in-file-operations"
    line_start: 1189
    line_end: 1227
    title: "Error Handling in File Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section handles errors encountered during file operations, such as reading or opening files. The code checks for standard input (STD_IN) and gracefully exits if an error occurs. If the error is related to a file, it prints an error message and the filename using routines like `prt_file_name`. Error handling was critical in MS-DOS, as the operating system had to manage diverse hardware configurations and ensure reliability for end-users. Tim Paterson's design reflects the early emphasis on user feedback and robustness in software. These routines set a precedent for error reporting in later operating systems, influencing practices in file I/O libraries and APIs across the industry."
  - id: "binary-to-ascii-conversion"
    line_start: 1459
    line_end: 1495
    title: "Binary-to-ASCII Conversion Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "This routine converts binary numbers in the AX register to their ASCII representation, storing the result in a buffer. The conversion is performed using division by 10 (decimal base) and extracting digits one by one, which are then converted to ASCII by adding '0'. This technique was a common way to handle numeric output in assembly, as processors lacked higher-level libraries for such tasks. The routine modifies several registers (AX, BX, CX, DX, DI) and demonstrates the careful management of resources typical of assembly programming. Binary-to-ASCII conversion remains a fundamental operation in computing, and this implementation influenced similar routines in early programming libraries and embedded systems."
  - id: "ascii-capitalization-optimization"
    line_start: 1617
    line_end: 1651
    title: "ASCII Capitalization Optimization"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "This routine capitalizes a character in the AL register by checking if it falls within the lowercase ASCII range ('a' to 'z') and applying a bitwise AND operation with 0xDF. This clever use of bitwise arithmetic avoids conditional branching and ensures fast execution. At the time, assembly programmers often sought such optimizations to minimize CPU cycles. The routine reflects the constraints of early computing, where performance was paramount, and every instruction mattered. This approach influenced later text-processing libraries and demonstrated the utility of bitwise operations for character manipulation."
  - id: "kanji-character-handling-2"
    line_start: 915
    line_end: 1011
    title: "Kanji Character Handling for Japanese Text"
    wikipedia_url: "https://en.wikipedia.org/wiki/Kanji"
    image_url: ""
    image_caption: ""
    content: "This section implements routines for processing Kanji characters, which are part of the Japanese writing system. The `next_kchar` routine advances a pointer to the next Kanji character, while `is_prefix` determines if a byte is a Kanji prefix. These routines were essential for supporting Japanese text in MS-DOS, reflecting the growing internationalization of software in the early 1980s. Handling multibyte character encodings like Kanji required careful programming, as ASCII-based systems were not inherently designed for such tasks. These routines influenced later efforts in Unicode and internationalization, paving the way for global software compatibility."
  - id: "isk-stc-ret"
    line_start: 1773
    line_end: 1787
    title: "A Two-Line Subroutine That Does... Nothing?"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The 'isk' subroutine is a puzzlingly minimal piece of code: it sets the carry flag (STC) and immediately returns (RET). This brevity suggests it may have been a placeholder, a debugging aid, or a stub for functionality that was never implemented. In the context of MS-DOS, where every byte mattered, such minimalist routines were not uncommon. Developers often left hooks for future expansion or used tiny routines to signal specific conditions. The carry flag, for instance, could be used to indicate an error or special state to the calling code. In 1983, MS-DOS v2.0 was a major rewrite inspired by Unix, but it still carried vestiges of its simpler origins in 86-DOS. Tim Paterson's original design emphasized speed and simplicity, which sometimes led to cryptic or seemingly redundant code. The 'isk' subroutine may reflect this ethos or simply be an artifact of iterative development. While this specific routine likely had no direct influence, the practice of using minimal subroutines for signaling or placeholders persisted in assembly programming. Later operating systems, such as Windows 3.x, continued to use similar techniques for backward compatibility and modular design. Today, such stubs might appear in modern software as empty methods or functions marked for future implementation."
  - id: "patch-area-memory-block"
    line_start: 1791
    line_end: 1791
    title: "The Patch Area: Fixes Without Recompiling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Software_patch"
    image_url: ""
    image_caption: ""
    content: "The 'patch_area' defines a block of memory reserved for post-release fixes or updates. By allocating 256 bytes (100h in hexadecimal), the developers ensured space for small adjustments without requiring a complete rebuild of the program. This was a common practice in early software development, where distributing updated binaries was costly and time-consuming. In the early 1980s, software patches were often applied manually, with users typing in hex codes or using specialized utilities to modify executable files. MS-DOS v2.0, released in 1983, was designed for the IBM PC and compatible systems, which were rapidly proliferating. Ensuring adaptability and ease of maintenance was crucial for Microsoft's licensing strategy, which depended on supporting dozens of OEMs. This approach to patching influenced later practices in software maintenance. While modern systems use automated updates and version control, the concept of reserving space for fixes persists in embedded systems and firmware design. Microsoft's foresight in accommodating patches helped establish its reputation for reliability and adaptability, key factors in its dominance of the PC market."
  - id: "buffer-area-runtime-memory"
    line_start: 1799
    line_end: 1803
    title: "Buffers: The Lifeblood of Early File I/O"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section defines multiple buffers for runtime operations, including string arguments, file names, and file contents. Each buffer is allocated with specific sizes, reflecting the constrained memory environment of early PCs. For example, 'buffer_size+1' ensures an extra byte for a guard, preventing overflow during forced insertion of a CRLF pair. In 1983, the IBM PC typically had 64KB to 256KB of RAM, making efficient memory management critical. MS-DOS v2.0 introduced advanced features like subdirectories and file handles, which required careful handling of strings and file data. These buffers were essential for operations like parsing filenames, managing file contents, and interfacing with the disk. The use of fixed-size buffers influenced later programming practices, including the development of safer dynamic memory allocation techniques. However, it also highlighted risks like buffer overflows, which became a notorious source of security vulnerabilities. The lessons learned from early buffer management shaped the evolution of programming languages and frameworks, including C's standard library and modern memory-safe languages like Rust."
  - id: "error-messages-runtime-external"
    line_start: 1815
    line_end: 1839
    title: "Error Messages: Externalized for Flexibility"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "This section declares external references to error messages, including strings like 'bad_vers' and 'errmsg1'. By externalizing these messages, the developers ensured flexibility in localization and updates. Instead of hardcoding error text, MS-DOS v2.0 could load messages dynamically, simplifying maintenance and adaptation for different markets. In the early 1980s, internationalization was not yet a widespread concern, but Microsoft's licensing model required compatibility across diverse OEMs. Externalizing error messages allowed for easier customization, a feature that became increasingly important as MS-DOS spread globally. This technique influenced later software design, particularly in operating systems and applications that needed to support multiple languages. The separation of code and text became standard practice, leading to innovations like resource files and localization frameworks. Microsoft's early attention to modular design helped pave the way for its success in international markets, including the dominance of Windows in the 1990s."
  - id: "stack-segment-setup"
    line_start: 1845
    line_end: 1851
    title: "The Stack: A Foundation for Program Execution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Call_stack"
    image_url: ""
    image_caption: ""
    content: "The 'stack' segment defines a 128-byte stack area (64 words), a crucial structure for managing function calls, local variables, and interrupts. The 'stack_top' equate marks the end of the stack, simplifying references during runtime. In 8086 assembly, the stack was a vital resource, but its size had to be carefully balanced against other memory needs. Early PCs had limited RAM, and MS-DOS v2.0 had to operate efficiently within these constraints while supporting increasingly complex applications. This stack setup reflects the meticulous planning required in low-level programming. The concept of a stack persists in modern computing, influencing everything from high-level languages to CPU architecture. Techniques developed for managing stacks in MS-DOS informed later operating systems, including Windows and Linux, where stack management remains a cornerstone of program execution."

---

```asm
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


```
