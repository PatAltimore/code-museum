---
title: "PRINT.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v2.0/source/PRINT.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v2.0/source/PRINT.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "print"
order: 23
description: "The MS-DOS PRINT program (v2.0) introduced background printing, enabling multitasking and laying groundwork for modern print spooling."

summary:
  - point: "Innovative use of INT 28H for multitasking"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Hardware timer interrupts for portability"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Dynamic error handling with custom interrupt vectors"
    link: "https://en.wikipedia.org/wiki/Interrupt_handler"
    link_label: "Interrupt handler"
  - point: "Efficient memory management for spooling"
    link: "https://en.wikipedia.org/wiki/Memory_management"
    link_label: "Memory management"

enhancements:
  - id: "start-jump-to-transient"
    line_start: 235
    line_end: 245
    title: "Jump to Transient: Modular Program Design"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `START` label begins the PRINT program by immediately jumping to the transient portion of the code (`TRANSIENT`). This modular design reflects the influence of Unix-like systems, where programs are often split into resident and transient components. In this case, the resident portion handles background tasks, while the transient portion manages setup and user interaction. In 1983, modularity was a key consideration for MS-DOS v2.0, which aimed to support multitasking and device independence. Tim Paterson and Microsoft's engineers were working to make MS-DOS adaptable to a wide range of hardware configurations, a necessity given the exploding PC market. This approach influenced later operating systems, including Windows, where modularity became a cornerstone of system architecture."
  - id: "istack-resident-data"
    line_start: 247
    line_end: 461
    title: "Resident Data: Persistent Spooling State"
    wikipedia_url: "https://en.wikipedia.org/wiki/Spooling"
    image_url: ""
    image_caption: ""
    content: "The `ISTACK` section defines the stack and resident data used by the PRINT program. This includes flags, counters, and pointers essential for managing the spooling process. For example, `TICKCNT` and `SLICECNT` control the timing of background printing tasks, ensuring that the program doesn't monopolize CPU resources. In 1983, efficient resource management was critical, as PCs like the IBM 5150 had limited processing power (4.77 MHz) and memory (64 KB to 640 KB). The design reflects the influence of Unix's process scheduling and interrupt-driven I/O. By maintaining persistent state in memory, PRINT could resume tasks seamlessly after interruptions, a feature that became standard in print spoolers and multitasking systems. This technique influenced later developments in operating systems and printer drivers, ensuring smooth operation even under heavy system load."
  - id: "srchmes-error-messages"
    line_start: 463
    line_end: 489
    title: "Error Messaging: User-Friendly Diagnostics"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "The `SRCHMES` section defines error messages displayed when the PRINT program encounters issues, such as 'File not found' or 'List output is not assigned to a device.' These messages were crucial for user interaction in the early days of personal computing, when users were often unfamiliar with system operations. Tim Paterson and Microsoft's engineers prioritized clear communication to make MS-DOS accessible to non-technical users. This focus on user-friendly diagnostics helped MS-DOS gain widespread adoption, as it reduced the learning curve for new users. The approach set a precedent for error handling in software design, influencing later systems like Windows and even modern applications, where clear and actionable error messages remain a hallmark of good design."
  - id: "hardware-interrupt-entry"
    line_start: 549
    line_end: 561
    title: "Hardware Interrupts: Real-Time Printing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `HDSPINT` subroutine handles hardware timer interrupts, incrementing counters (`TICKCNT`, `TICKSUB`) and managing the timing of print operations. This allows PRINT to operate independently of software interrupts like INT 28H, ensuring that printing continues even when the system is busy with other tasks. In 1983, this design was groundbreaking, as it enabled multitasking on hardware with limited capabilities. The use of hardware interrupts reflects the influence of real-time systems and the need for portability across different devices. By abstracting the printer interface, PRINT could work with any character device, a feature that made MS-DOS attractive to OEMs. This technique influenced the development of device drivers and multitasking systems, paving the way for modern operating systems like Windows and Linux."
  - id: "spint-int-28h-entry"
    line_start: 621
    line_end: 653
    title: "INT 28H: Software Interrupt for Multitasking"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `SPINT` subroutine is the entry point for INT 28H, a software interrupt used by MS-DOS to signal idle time in I/O wait loops. PRINT leverages this interrupt to perform background printing tasks without interfering with foreground operations. This clever use of idle time reflects the constraints of early PCs, where multitasking was limited by hardware capabilities. Tim Paterson and Microsoft's engineers adapted this technique from real-time systems, ensuring that PRINT could operate efficiently even on low-end machines. The approach influenced later multitasking systems, where idle time is used for background tasks like indexing or updates. INT 28H became a standard feature in MS-DOS, enabling other programs to implement similar multitasking strategies."
  - id: "doint-buffer-management"
    line_start: 661
    line_end: 677
    title: "Buffer Management: Efficient Data Flow"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `DOINT` subroutine manages the buffer used for spooling data to the printer. It checks if the buffer is empty and decides whether to refill it or proceed with printing. This design ensures efficient use of memory and CPU resources, critical for early PCs with limited hardware capabilities. In 1983, buffer management was a key challenge for developers, as it directly impacted system performance. Tim Paterson and Microsoft's engineers implemented this technique to optimize PRINT's operation, allowing it to handle large print jobs without overwhelming the system. The approach influenced later developments in I/O systems and device drivers, where efficient buffer management remains a cornerstone of performance optimization."
  - id: "fileof-form-feed"
    line_start: 1001
    line_end: 1005
    title: "Form Feed: End-of-File Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Form_feed"
    image_url: ""
    image_caption: ""
    content: "The `FILEOF` subroutine handles the end-of-file condition by sending a form feed character (`0CH`) to the printer. This ensures that the printed output is properly formatted, with each file starting on a new page. In 1983, this attention to detail was essential for professional document preparation, a key use case for early PCs. Tim Paterson and Microsoft's engineers designed PRINT to meet the needs of business users, who required reliable and consistent output. The form feed mechanism became a standard feature in print spoolers and influenced the development of document formatting systems like PostScript and PDF. Without this foundational work, modern printing and document management systems might lack the precision and reliability we take for granted today."
  - id: "disk-error-handling-dskerr"
    line_start: 1019
    line_end: 1071
    title: "Disk Error Handling: DSKERR Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DSKERR routine is a critical error-handling mechanism in MS-DOS v2.0. It begins by checking the abort flag and saving the processor state, ensuring that the system can recover gracefully. The routine then adjusts the drive letter and prints error messages using the LISTMES subroutine. In 1983, disk errors were a common occurrence due to the unreliability of floppy disks and early hard drives. Tim Paterson and the Microsoft team designed MS-DOS to handle these errors efficiently, allowing users to continue operations or diagnose issues. The approach taken here—saving the processor state and using descriptive error messages—set a precedent for robust error handling in operating systems. This routine influenced later systems, including Windows, where error handling became more sophisticated but retained the principle of clear user feedback."
  - id: "error-message-handling-havcod"
    line_start: 1073
    line_end: 1109
    title: "Error Message Handling: HAVCOD Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The HAVCOD routine retrieves and displays specific error messages based on error codes. By shifting and indexing into a table of error messages, it ensures that the user is informed about the nature of the problem. In the early 1980s, user-friendly error reporting was rare, especially in command-line systems. MS-DOS v2.0's approach to error messages reflected Microsoft's growing emphasis on usability, inspired by systems like Unix. This routine's design influenced later operating systems, where error codes and messages became standard practice for debugging and user feedback. Developers studying MS-DOS often noted its simplicity and efficiency, incorporating similar techniques into their own software."
  - id: "abort-handling-setabort"
    line_start: 1111
    line_end: 1129
    title: "Abort Handling: SETABORT Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "SETABORT increments the abort flag, signaling that an operation should be terminated. It then restores the processor state, ensuring that the system remains stable. This routine exemplifies MS-DOS's focus on reliability in an era when hardware failures were common. The ability to abort operations cleanly was crucial for maintaining system integrity and user trust. This technique influenced later operating systems, where abort handling became more sophisticated but retained the principle of preserving system stability during errors."
  - id: "character-case-conversion-upconv"
    line_start: 1555
    line_end: 1565
    title: "Character Case Conversion: UPCONV Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "UPCONV converts lowercase characters to uppercase by subtracting a fixed offset. This simple yet effective routine reflects the constraints of early computing, where memory and processing power were limited. In the 1980s, case conversion was critical for file systems that treated filenames as case-insensitive. The efficiency of this routine influenced later systems, where similar techniques were used in string manipulation libraries and file handling APIs. Developers studying MS-DOS often admired its minimalistic yet functional approach to common problems."
  - id: "bios-interface-int-13"
    line_start: 1887
    line_end: 1903
    title: "BIOS Interface: INT_13 Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The INT_13 routine interfaces with the BIOS to manage disk operations. By incrementing a busy flag and redirecting calls to the real BIOS interrupt, it ensures that disk operations are handled efficiently and without conflicts. In 1983, direct BIOS interaction was essential for operating systems like MS-DOS, which relied on hardware-level control for performance and compatibility. This routine reflects the tight coupling between software and hardware in early PCs. The techniques used here influenced later systems, where BIOS calls were abstracted but retained their importance in bootstrapping and hardware initialization."
  - id: "device-management-int-17"
    line_start: 1939
    line_end: 1969
    title: "Device Management: INT_17 Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The INT_17 routine manages printer operations by interfacing with the BIOS. It checks the printer's status and handles errors like paper jams. In the early 1980s, printers were a vital part of office computing, and MS-DOS needed to support diverse hardware reliably. This routine reflects Microsoft's commitment to hardware compatibility, ensuring that MS-DOS could run on a wide range of systems. The techniques used here influenced later device drivers, where error handling and hardware abstraction became standard practice."
  - id: "interrupt-vector-printer-screen"
    line_start: 2039
    line_end: 2061
    title: "Interrupt vector for printer and screen"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "This section begins with the INT_5 subroutine, which manipulates interrupt vectors to handle printer and screen operations. The programmer checks for pending tasks and redirects execution to DO_INT_5 or pretends the operation succeeded with an IRET instruction. In 1983, interrupt handling was a cornerstone of MS-DOS's ability to interact with hardware. Tim Paterson and the Microsoft team had to ensure compatibility with the IBM PC's hardware, which relied heavily on interrupt-driven I/O. This approach allowed MS-DOS to manage devices efficiently, laying the groundwork for future operating systems that would refine interrupt handling further. The techniques here influenced later DOS versions and even early Windows systems, where interrupt vectors remained critical for hardware communication."
  - id: "file-control-blocks-spool-management"
    line_start: 2065
    line_end: 2121
    title: "File Control Blocks for spool management"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The DO_INT_5 subroutine and associated data structures demonstrate the use of File Control Blocks (FCBs) to manage spool files. FCBs were a legacy structure from CP/M, which MS-DOS inherited. By organizing spool files in a circular buffer, the code ensures efficient access and management. In 1983, this was a practical solution given the limited memory and processing power of the IBM PC. Tim Paterson's decision to retain FCBs in MS-DOS v2.0 reflects the need for backward compatibility with earlier software while introducing new features like subdirectories. FCBs would eventually be replaced by more sophisticated file systems, but their influence persisted in early DOS applications and utilities."
  - id: "resident-program-setup-spool"
    line_start: 2145
    line_end: 2303
    title: "Resident program setup for spool management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident_program"
    image_url: ""
    image_caption: ""
    content: "The SETUP and DEFSPOOL subroutines initialize a Terminate and Stay Resident (TSR) program for managing print spooling. TSR programs were a hallmark of MS-DOS, allowing small utilities to remain active in memory while other applications ran. This section configures interrupt vectors and validates device names, ensuring compatibility with the IBM PC's hardware. In the early 1980s, TSRs were a clever workaround for the lack of multitasking in MS-DOS, enabling background printing and other tasks. The techniques here inspired countless utilities and were foundational for DOS's ecosystem. Developers like Borland and Norton would later build on TSR concepts to create popular tools like Sidekick and Norton Utilities."
  - id: "device-name-normalization"
    line_start: 2305
    line_end: 2317
    title: "Device name normalization to uppercase"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The CONLP subroutine ensures that device names are converted to uppercase, a necessary step for compatibility in MS-DOS. Early PCs often had inconsistent handling of case sensitivity, and this normalization prevented errors when interacting with devices. In 1983, this kind of detail was critical for ensuring a smooth user experience on systems with limited error-checking capabilities. The approach here reflects the meticulous attention to compatibility that defined MS-DOS and contributed to its widespread adoption. This normalization technique influenced later systems, including Windows, where case-insensitive file systems became standard."
  - id: "error-handling-console-feedback"
    line_start: 2889
    line_end: 3017
    title: "Error handling and user feedback"
    wikipedia_url: "https://en.wikipedia.org/wiki/Standard_streams"
    image_url: ""
    image_caption: ""
    content: "The SRCHBAD and NOFILES subroutines highlight MS-DOS's approach to error handling and user feedback. When an operation fails, the system outputs descriptive messages to the console, guiding users to resolve issues. This was a significant improvement over earlier systems, where cryptic error codes were the norm. In 1983, user-friendly error handling was a priority for Microsoft as it sought to make MS-DOS accessible to a broader audience. The techniques here influenced later operating systems, including Windows, where clear error messages became a standard feature. This focus on usability helped establish Microsoft as a leader in personal computing."
  - id: "stchr-token-buffer-management"
    line_start: 3051
    line_end: 3127
    title: "Token buffer management in constrained memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `STCHR` subroutine is responsible for managing the token buffer, a critical part of parsing input commands in MS-DOS. It uses efficient assembly instructions like `STOSB` and `MOVSW` to manipulate memory directly, reflecting the need for speed and minimal memory usage on early PCs. In 1983, the IBM PC was equipped with 16KB to 640KB of RAM, making every byte precious. Tim Paterson and the Microsoft team designed MS-DOS with these constraints in mind, borrowing ideas from Unix while adapting them to the simpler hardware of the Intel 8086. The token buffer concept allowed MS-DOS to process commands efficiently, paving the way for more sophisticated command-line interfaces in later operating systems like Windows and Linux. Without this foundational work, modern scripting languages and shell environments might look very different."
  - id: "cparse-command-parsing-logic"
    line_start: 3131
    line_end: 3147
    title: "Command parsing: handling carriage returns"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `CPARSE` subroutine introduces logic to handle carriage returns (`CR`) in input buffers, a vital feature for parsing user commands. By checking for `CR` and adjusting pointers accordingly, it ensures smooth processing of command-line input. In the early 1980s, command-line interfaces were the primary way users interacted with computers, and parsing input reliably was critical for usability. This routine reflects the influence of Unix, which had established conventions for handling text input. The modular design of `CPARSE`—saving flags, managing pointers, and returning condition codes—would influence future command-line interpreters, including those in Windows and Linux. It is a small but essential piece of the puzzle that made MS-DOS a practical operating system for millions of users."
  - id: "sj1-error-handling-carriage-return"
    line_start: 3149
    line_end: 3161
    title: "Error handling for carriage returns"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The `sj1` subroutine provides error handling for carriage returns (`CR`), setting condition codes and adjusting pointers to ensure the system can recover gracefully from unexpected input. In the early days of computing, error handling was often rudimentary, but MS-DOS 2.0 aimed to improve robustness by implementing clear condition codes and flags. This approach reflects the growing sophistication of software design in the early 1980s, as operating systems began to adopt structured programming principles. The techniques used here would later influence error handling in higher-level languages like C and scripting environments like Bash. By ensuring predictable behavior in edge cases, `sj1` contributed to the reliability of MS-DOS as a platform for both novice and professional users."
  - id: "sj2-switch-character-detection"
    line_start: 3165
    line_end: 3183
    title: "Detecting switch characters in commands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The `sj2` subroutine is designed to detect switch characters (e.g., `/`) in command-line input, a feature borrowed from Unix-style options. By comparing the current character to the predefined switch character (`SWITCHAR`), it determines whether to process the input as a command option. This functionality was crucial for enabling flexible command-line syntax, allowing users to specify options and parameters in a compact format. In 1983, this was a significant step forward for usability, as it mirrored the conventions of Unix while adapting them to the simpler MS-DOS environment. The concept of switch characters would become a standard in command-line interfaces, influencing tools like PowerShell and Linux utilities. Without routines like `sj2`, the evolution of command-line syntax might have taken a very different path."
  - id: "anum-char-alphanumeric-processing"
    line_start: 3187
    line_end: 3215
    title: "Processing alphanumeric strings"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `anum_char` subroutine processes alphanumeric strings, a fundamental task for parsing commands and arguments in MS-DOS. It checks each character against a set of delimiters (e.g., spaces, tabs, commas) to determine where the token ends. This routine embodies the meticulous attention to detail required to build a reliable command-line parser. In the early 1980s, parsing text efficiently was a challenge due to limited processing power and memory. The use of assembly instructions like `CMP` and `LODSB` reflects the need for speed and compactness. The logic in `anum_char` would influence later developments in text processing, including regular expressions and tokenization algorithms in modern programming languages. It is a testament to the ingenuity of early software engineers working within severe constraints."
  - id: "x-done-token-finalization"
    line_start: 3217
    line_end: 3221
    title: "Finalizing tokens for command processing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tokenization"
    image_url: ""
    image_caption: ""
    content: "The `x_done` subroutine finalizes tokens by adjusting pointers and setting condition codes, marking the end of a parsing cycle. This step ensures that the parsed token is ready for further processing by the operating system. In MS-DOS 2.0, tokenization was a key part of the command-line interface, enabling users to input complex commands efficiently. The design of `x_done` reflects the influence of Unix, which had established tokenization as a standard practice. By implementing these routines in assembly, the MS-DOS team demonstrated how low-level programming could achieve high-level functionality. The principles behind `x_done` would later be applied in scripting languages like Python and JavaScript, which rely heavily on tokenization for text processing."
  - id: "kill-bl-remove-delimiters"
    line_start: 3245
    line_end: 3265
    title: "Removing delimiters from input buffers"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lexical_analysis"
    image_url: ""
    image_caption: ""
    content: "The `kill_bl` subroutine removes delimiters (e.g., spaces, tabs, commas) from input buffers, preparing the data for tokenization. This routine is a simple yet effective example of lexical analysis, a process that underpins many modern programming languages. In 1983, MS-DOS had to perform these tasks efficiently to accommodate the limited hardware of early PCs. The repetitive use of `CMP` and `JE` instructions reflects the constraints of assembly programming, where every operation had to be carefully optimized. The concept of cleaning up input data before processing would become standard practice in software development, influencing tools like compilers and text parsers. `kill_bl` is a small but vital piece of the MS-DOS parsing system, showcasing the ingenuity of its designers."
  - id: "move-char-store-characters"
    line_start: 3273
    line_end: 3279
    title: "Storing characters in the token buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The `move_char` subroutine stores individual characters in the token buffer, incrementing the character count as it goes. This routine is a straightforward yet essential part of the parsing process, ensuring that tokens are built correctly. In the early 1980s, buffer management was a critical skill for software engineers, as memory was limited and errors could easily lead to crashes. The simplicity of `move_char` reflects the modular design philosophy of MS-DOS, where each routine performed a specific task efficiently. This approach would influence later developments in buffer management, including dynamic memory allocation in modern operating systems. `move_char` is a reminder of the foundational work done by the MS-DOS team, which laid the groundwork for decades of software innovation."

---

;MS-DOS PRINT program for background printing of text files to the list

;        device.  INT 28H is a software interrupt generated by the  DOS

;        in  its  I/O  wait  loops.   This spooler can be assembled for

;        operation using only this interrupt  which  is  portable  from

;        system to  system.  It may also be assembled to use a hardware

;        timer interrupt in addition to  the  software  INT  28H.   The

;        purpose  of  using hardware interrupts is to allow printing to

;        continue during programs which do not  enter  the  system  and

;        therefore causes the INT 28H to go away.  A timer interrupt is

;        chosen in preference to a  "printer  buffer  empty"  interrupt

;        because  PRINT  in the timer form is generic.  It can be given

;        the name of any currently installed character  device  as  the

;        "printer",  this  makes  it  portable  to  devices  which  are

;        installed by the user even in the hardware case.  It could  be

;        modified to use a buffer empty interrupt (no code is given for

;        this case), if this is done the PROMPT and BADMES messages and

;        their associated  code should be removed as PRINT will then be

;        device specific.

;

;  VERSION      1.00    07/03/82





FALSE   EQU     0

TRUE    EQU     NOT FALSE



IBM     EQU     FALSE

IBMVER  EQU     IBM

MSVER   EQU     TRUE



        IF      MSVER

HARDINT EQU     FALSE           ;No hardware ints

AINT    EQU     FALSE           ;No need to do interrupt acknowledge

        ENDIF



        IF      IBM

HARDINT EQU     TRUE

INTLOC  EQU     1CH             ;Hardware interrupt location (Timer)

AINT    EQU     TRUE            ;Acknowledge interrupts

EOI     EQU     20H             ;End Of Interrupt "instruction"

AKPORT  EQU     20H             ;Interrupt Acknowledge port

        ENDIF



;The following values have to do with the ERRCNT variable and the

;  CNTMES message. The values define levels at wich it is assumed

;  an off-line error exists. ERRCNT1 defines the value of ERRCNT above

;  which the CNTMES message is printed by the transient. ERRCNT2

;  defines the value of ERRCNT above which the resident will give up

;  trying to print messages on the printer, it is much greater than

;  ERRCNT1 because a much tighter loop is involved. The bounding event

;  which determines the correct value is the time required to do a

;  form feed.



        IF      IBM

ERRCNT1 EQU     1000

ERRCNT2 EQU     20000

        ELSE

ERRCNT1 EQU     1000

ERRCNT2 EQU     20000

        ENDIF



        IF      HARDINT

TIMESLICE EQU   8               ;The PRINT scheduling time slice. PRINT

                                ; lets this many "ticks" go by before

                                ; using a time slice to pump out characters.

                                ; Setting this to 3 for instance means PRINT

                                ; Will skip 3 slices, then take the fourth.

                                ; Thus using up 1/4 of the CPU. Setting it

                                ; to one gives PRINT 1/2 of the CPU.

                                ; The above examples assume MAXTICK is

                                ; 1. The actual PRINT CPU percentage is

                                ; (MAXTICK/(1+TIMESLICE))*100



MAXTICK EQU     2               ;The PRINT in timeslice. PRINT will pump

                                ; out characters for this many clock ticks

                                ; and then exit. The selection of a value

                                ; for this is dependent on the timer rate.



BUSYTICK EQU    1               ;If PRINT sits in a wait loop waiting for

                                ; output device to come ready for this

                                ; many ticks, it gives up its time slice.

                                ; Setting it greater than or equal to

                                ; MAXTICK causes it to be ignored.



;User gets TIMESLICE ticks and then PRINT takes MAXTICK ticks unless BUSYTICK

;       ticks go by without getting a character out.

        ENDIF





;WARNING DANGER WARNING:

;   PRINT is a systems utility. It is clearly understood that it may have

;   to be entirely re-written for future versions of MS-DOS. The following

;   TWO vectors are version specific, they may not exist at all in future

;   versions. If they do exist, they may function differently.

; ANY PROGRAM WHICH IMITATES PRINTS USE OF THESE VECTORS IS ALSO A SYSTEMS

; UTILITY AND IS THEREFORE NOT VERSION PORTABLE IN ANY WAY SHAPE OR FORM.

; YOU HAVE BEEN WARNED, "I DID IT THE SAME WAY PRINT DID" IS NOT AN REASON

; TO EXPECT A PROGRAM TO WORK ON FUTURE VERSIONS OF MS-DOS.

SOFTINT EQU     28H             ;Software interrupt generated by DOS

COMINT  EQU     2FH             ;Communications interrupt used by PRINT

                                ;  This vector number is DOS reserved. It

                                ;  is not generally available to programs

                                ;  other than PRINT.



BLKSIZ  EQU     512             ;Size of the PRINT I/O block in bytes

FCBSIZ  EQU     40              ;Size of an FCB



        INCLUDE DOST:DOSSYM.ASM



FCB     EQU     5CH

PARMS   EQU     80H



DG      GROUP   CODE,DATA



CODE    SEGMENT

ASSUME  CS:DG



        ORG     100H

START:

        JMP     TRANSIENT



HEADER  DB      "Vers 1.00"



        DB      128 DUP (?)

ISTACK  LABEL   WORD            ;Stack starts here and grows down



;Resident data



        IF      HARDINT

INDOS   DD      ?               ;DOS buisy flag

NEXTINT DD      ?               ;Chain for int

BUSY    DB      0               ;Internal ME flag

SOFINT  DB      0               ;Internal ME flag

TICKCNT DB      0               ;Tick counter

TICKSUB DB      0               ;Tick miss counter

SLICECNT DB     TIMESLICE       ;Time slice counter

        ENDIF



CBUSY   DB      0               ;ME on com interrupt

SPNEXT  DD      ?               ;Chain location for INT 28

PCANMES DB      0               ;Cancel message flag

SSsave  DW      ?               ;Stack save area for INT 24

SPsave  DW      ?

DMAADDR DD      ?               ;Place to save DMA address

HERRINT DD      ?               ;Place to save Hard error interrupt

LISTDEV DD      ?               ;Pointer to Device

COLPOS  DB      0               ;Column position for TAB processing

NXTCHR  DW      OFFSET DG:BUFFER + BLKSIZ     ;Buffer pointer

CURRFIL DW      OFFSET DG:SPLFCB    ;Current file being printed



LASTFCB DW      ?               ;Back pointer

LASTFCB2 DW     ?               ;Another back pointer

PABORT  DB      0               ;Abort flag



;Resident messages



ERRMES  DB      13,10,13,10,"**********",13,10,"$"

ERRMEST DB      " error reading file",13,10

EMFILNAM DB     " :        .   "

BELMES  DB     13,0CH,7,"$"



CANMES  DB      13,10,13,10

CANFILNAM DB    " :        .   "

        DB      " Canceled by operator$"



ALLCAN  DB      13,10,13,10,"All files canceled by operator$"



MESBAS  DW      OFFSET DG:ERR0

        DW      OFFSET DG:ERR1

        DW      OFFSET DG:ERR2

        DW      OFFSET DG:ERR3

        DW      OFFSET DG:ERR4

        DW      OFFSET DG:ERR5

        DW      OFFSET DG:ERR6

        DW      OFFSET DG:ERR7

        DW      OFFSET DG:ERR8

        DW      OFFSET DG:ERR9

        DW      OFFSET DG:ERR10

        DW      OFFSET DG:ERR11

        DW      OFFSET DG:ERR12



;INT 24 messages A La COMMAND



ERR0    DB      "Write protect$"

ERR1    DB      "Bad unit$"

ERR2    DB      "Not ready$"

ERR3    DB      "Bad command$"

ERR4    DB      "Data$"

ERR5    DB      "Bad call format$"

ERR6    DB      "Seek$"

ERR7    DB      "Non-DOS disk$"

ERR8    DB      "Sector not found$"

ERR9    DB      "No paper$"

ERR10   DB      "Write fault$"

ERR11   DB      "Read fault$"

ERR12   DB      "Disk$"



FATMES  DB     "File allocation table bad drive "

BADDRVM DB     "A.",13,10,"$"



;The DATA buffer

BUFFER  DB      BLKSIZ DUP(0)

        DB      ?

CODE    ENDS



;Transient data



DATA    SEGMENT BYTE

        ORG     0

SWITCHAR DB     ?               ;User switch character

FULLFLAG DB     0               ;Flag for printing queue full message

MAKERES DB      0               ;Flag to indicate presence of resident

ARGSETUP DB     0               ;Flag to indicate a formatted FCB exists at 5C

DEFDRV  DB      0               ;Default drive

CANFLG  DB      0               ;Flag to indicate cancel

FILCNT  DB      0               ;Number of files

SPLIST  DD      ?               ;Pointer to FCBs in resident

CURFILE DD      ?               ;Pointer to current FCB

SRCHFCB DB      38 DUP (0)      ;SEARCH-FIRST/NEXT FCB

ENDRES  DW      OFFSET DG:DEF_ENDRES    ;Term-Res location



;Messages



NOFILS  DB      "PRINT queue is empty",13,10,"$"

CURMES  DB      13,10,"        "

CURFNAM DB      " :        .    is currently being printed",13,10,"$"

FILMES  DB      "        "

FILFNAM DB      " :        .    is in queue"

CRLF    DB      13,10,"$"

OPMES    DB     "Cannot open "

OPFILNAM DB     " :        .    ",13,10,"$"

FULLMES DB      "PRINT queue is full",13,10,"$"

SRCHMES LABEL   BYTE

SRCHFNAM DB     " :        .    "," File not found",13,10,"$"

BADMES  DB      "List output is not assigned to a device",13,10,"$"

GOODMES DB      "Resident part of PRINT installed",13,10,"$"

PROMPT  DB      "Name of list device [PRN]: $"

CNTMES  DB      "Errors on list device indicate that it",13,10

        DB      "may be off-line. Please check it.",13,10,13,10,"$"

BADSWT  DB      "Invalid parameter",13,10,"$"





BADVER  DB      "Incorrect DOS version",13,10,"$"



        IF      IBM

;Reserved names for parallel card

INT_17_HITLIST LABEL BYTE

        DB      8,"PRN     ",0

        DB      8,"LPT1    ",0

        DB      8,"LPT2    ",1

        DB      8,"LPT3    ",2

        DB      0

;Reserved names for Async adaptor

INT_14_HITLIST  LABEL BYTE

        DB      8,"AUX     ",0

        DB      8,"COM1    ",0

        DB      8,"COM2    ",1

        DB      0

        ENDIF



COMBUF  DB      14,0            ;Device name buffer

        DB      14 DUP (?)

LISTFCB DB      0,"PRN        " ;Device name FCB

        DB      25 DUP (0)

PARSEBUF DB     80 DUP (?)      ;Parsing space



DATA    ENDS



CODE    SEGMENT

ASSUME  CS:DG,DS:DG,ES:DG,SS:DG





;Interrupt routines

ASSUME  CS:DG,DS:NOTHING,ES:NOTHING,SS:NOTHING

        IF      HARDINT

HDSPINT:                        ;Hardware interrupt entry point

        INC     [TICKCNT]       ;Tick

        INC     [TICKSUB]       ;Tick

        CMP     [SLICECNT],0

        JZ      TIMENOW

        DEC     [SLICECNT]      ;Count down

        JMP     SHORT CHAININT  ;Not time yet

TIMENOW:

        CMP     [BUSY],0        ;See if interrupting ourself

        JNZ     CHAININT

        PUSH    DS

        PUSH    SI

        LDS     SI,[INDOS]      ;Check for making DOS calls

        CMP     BYTE PTR [SI],0

        POP     SI

        POP     DS

        JNZ     CHAININT        ;DOS is Buisy

        INC     [BUSY]          ;Exclude furthur interrupts

        MOV     [TICKCNT],0     ;Reset tick counter

        MOV     [TICKSUB],0     ;Reset tick counter

        STI                     ;Keep things rolling



        IF      AINT

        MOV     AL,EOI          ;Acknowledge interrupt

        OUT     AKPORT,AL

        ENDIF



        CALL    DOINT

        CLI

        MOV     [SLICECNT],TIMESLICE    ;Either soft or hard int resets time slice

        MOV     [BUSY],0        ;Done, let others in

CHAININT:

        JMP     [NEXTINT]       ;Chain to next clock routine

        ENDIF





SPINT:                          ;INT 28H entry point

        IF      HARDINT

        CMP     [BUSY],0

        JNZ     NXTSP

        INC     [BUSY]          ;Exclude hardware interrupt

        INC     [SOFINT]        ;Indicate a software int in progress

        ENDIF



        STI                     ;Hardware interrupts ok on INT 28H entry

        CALL    DOINT



        IF      HARDINT

        CLI

        MOV     [SOFINT],0      ;Indicate INT done

        MOV     [SLICECNT],TIMESLICE    ;Either soft or hard int resets time slice

        MOV     [BUSY],0

        ENDIF



NXTSP:  JMP     [SPNEXT]        ;Chain to next INT 28



DOINT:

        PUSH    SI

        MOV     SI,[CURRFIL]

        INC     SI

        INC     SI

        CMP     BYTE PTR CS:[SI],-1

        POP     SI

        JNZ     GOAHEAD

        JMP     SPRET           ;Nothing to do

GOAHEAD:

        PUSH    AX              ;Need a working register

        MOV     [SSsave],SS

        MOV     [SPsave],SP

        MOV     AX,CS

        CLI

;Go to internal stack to prevent INT 24 overflowing system stack

        MOV     SS,AX

        MOV     SP,OFFSET DG:ISTACK

        STI

        PUSH    ES

        PUSH    DS

        PUSH    BX

        PUSH    CX

        PUSH    DX

        PUSH    SI

        PUSH    DI

        PUSH    CS

        POP     DS

ASSUME  DS:DG



        MOV     BX,[NXTCHR]

        CMP     BX,OFFSET DG:BUFFER + BLKSIZ

        JNZ     PLOOP

        JMP     READBUFF                ;Buffer empty



PLOOP:

        IF      HARDINT

        MOV     BX,[NXTCHR]

        CMP     BX,OFFSET DG:BUFFER + BLKSIZ

        JZ      DONEJMP                 ;Buffer has become empty

        CMP     [SOFINT],0

        JNZ     STATCHK

        CMP     [TICKCNT],MAXTICK       ;Check our time slice

        JAE     DONEJMP

STATCHK:

        ENDIF



        CALL    PSTAT



        IF      HARDINT

        JZ      DOCHAR                  ;Printer ready

        CMP     [SOFINT],0

        ENDIF



        JNZ     DONEJMP                 ;If soft int give up



        IF      HARDINT

        CMP     [TICKSUB],BUSYTICK      ;Check our busy timeout

        JAE     DONEJMP

        JMP     PLOOP

        ENDIF



DOCHAR:

        MOV     AL,BYTE PTR [BX]

        CMP     AL,1AH                  ;^Z?

        JZ      FILEOFJ                 ;CPM EOF

        CMP     AL,0DH                  ;CR?

        JNZ     NOTCR

        MOV     [COLPOS],0

NOTCR:

        CMP     AL,9                    ;TAB?

        JNZ     NOTABDO

        MOV     CL,[COLPOS]

        OR      CL,0F8H

        NEG     CL

        XOR     CH,CH

        JCXZ    TABDONE

TABLP:

        MOV     AL," "

        INC     [COLPOS]

        PUSH    CX

        CALL    POUT

        POP     CX

        LOOP    TABLP

        JMP     TABDONE



NOTABDO:

        CMP     AL,8                    ;Back space?

        JNZ     NOTBACK

        DEC     [COLPOS]

NOTBACK:

        CMP     AL,20H                  ;Non Printing char?

        JB      NOCHAR

        INC     [COLPOS]                ;Printing char

NOCHAR:

        CALL    POUT                    ;Print it

TABDONE:

        INC     [NXTCHR]                ;Next char



        IF      HARDINT

        MOV     [TICKSUB],0             ;Got a character out, Reset counter

        CMP     [SOFINT],0              ;Soft int does one char at a time

        JZ      PLOOP

        ENDIF



DONEJMP:

        POP     DI

        POP     SI

        POP     DX

        POP     CX

        POP     BX

        POP     DS

        POP     ES

ASSUME  DS:NOTHING,ES:NOTHING

        CLI

        MOV     SS,[SSsave]             ;Restore Entry Stack

        MOV     SP,[SPsave]

        STI

        POP     AX

SPRET:

        RET



FILEOFJ: JMP    FILEOF



READBUFF:

ASSUME  DS:DG,ES:NOTHING



        MOV     AL,24H

        MOV     AH,GET_INTERRUPT_VECTOR

        INT     21H

        MOV     WORD PTR [HERRINT+2],ES         ;Save current vector

        MOV     WORD PTR [HERRINT],BX

        MOV     DX,OFFSET DG:DSKERR

        MOV     AL,24H

        MOV     AH,SET_INTERRUPT_VECTOR         ;Install our own

        INT     21H             ;Spooler must catch its errors

        MOV     AH,GET_DMA

        INT     21H

        MOV     WORD PTR [DMAADDR+2],ES         ;Save DMA address

        MOV     WORD PTR [DMAADDR],BX

        MOV     DX,OFFSET DG:BUFFER

        MOV     AH,SET_DMA

        INT     21H             ;New DMA address

        MOV     [PABORT],0      ;No abort

        MOV     DX,[CURRFIL]    ;Read

        INC     DX

        INC     DX              ;Skip over pointer

        MOV     AH,FCB_SEQ_READ

        INT     21H

        PUSH    AX

        LDS     DX,[DMAADDR]

ASSUME  DS:NOTHING

        MOV     AH,SET_DMA

        INT     21H             ;Restore DMA

        LDS     DX,[HERRINT]

        MOV     AL,24H

        MOV     AH,SET_INTERRUPT_VECTOR

        INT     21H             ;Restore Error INT

        POP     AX

        PUSH    CS

        POP     DS

ASSUME  DS:DG

        CMP     [PABORT],0

        JNZ     TONEXTFIL       ;Barf on this file, got INT 24

        CMP     AL,01

        JZ      FILEOF          ;Read EOF?

        MOV     BX,OFFSET DG:BUFFER     ;Buffer full

        MOV     [NXTCHR],BX

        JMP     DONEJMP



FILEOF:

        MOV     AL,0CH          ;Form feed

        CALL    LOUT

TONEXTFIL:

        CALL    NEXTFIL

        JMP     DONEJMP



;INT 24 handler



DSKERR:

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        STI

        CMP     [PABORT],0

        JNZ     IGNRET

        PUSH    BX

        PUSH    CX

        PUSH    DX

        PUSH    DI

        PUSH    SI

        PUSH    BP

        PUSH    ES

        PUSH    DS

        PUSH    CS

        POP     DS

        PUSH    CS

        POP     ES

ASSUME  DS:DG,ES:DG

        ADD     [BADDRVM],AL    ;Set correct drive letter

        MOV     SI,OFFSET DG:ERRMES

        CALL    LISTMES

        TEST    AH,080H

        JNZ     FATERR

        AND     DI,0FFH

        CMP     DI,12

        JBE     HAVCOD

        MOV     DI,12

HAVCOD:

        SHL     DI,1

        MOV     DI,WORD PTR [DI+MESBAS] ; Get pointer to error message

        MOV     SI,DI

        CALL    LISTMES          ; Print error type

        MOV     DI,OFFSET DG:EMFILNAM

        MOV     SI,[CURRFIL]

        ADD     SI,2             ;Get to file name

        LODSB

        ADD     AL,'@'

        STOSB

        INC     DI

        MOV     CX,4

        REP     MOVSW

        INC     DI

        MOVSW

        MOVSB

        MOV     SI,OFFSET DG:ERRMEST

        CALL    LISTMES

SETABORT:

        INC     [PABORT]                ;Indicate abort

        POP     DS

        POP     ES

        POP     BP

        POP     SI

        POP     DI

        POP     DX

        POP     CX

        POP     BX

IGNRET:

        XOR     AL,AL                   ;Ignore

        IRET



FATERR:

        MOV     SI,OFFSET DG:FATMES

        CALL    LISTMES

        JMP     SHORT SETABORT



ADDFILJ: JMP    ADDFIL



COMBUSY:

        MOV     AX,-1

        IRET



;Communications interrupt

SPCOMINT:

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        CMP     [CBUSY],0

        JNZ     COMBUSY

        INC     [CBUSY]                 ;Exclude

        STI                             ;Turn ints back on

        PUSH    SI

        PUSH    DI

        PUSH    CX

        PUSH    DS

        PUSH    CS

        POP     DS

ASSUME  DS:DG

        MOV     [PCANMES],0             ;Havn't printed cancel message

        OR      AH,AH

        JZ      ADDFILJ                 ;Add file

        CMP     AH,1

        JZ      CANFIL                  ;Cancel File(s)

        XOR     AL,AL

SETCOUNT:

        PUSH    AX              ;Save AL return code

        XOR     AH,AH

        MOV     SI,OFFSET DG:SPLFCB

        MOV     CX,[NUMFCBS]

CNTFILS:

        CMP     BYTE PTR [SI+2],-1        ;Valid?

        JZ      LNEXT

        INC     AH

LNEXT:

        ADD     SI,FCBSIZ

        LOOP    CNTFILS

COMRET:

        MOV     BX,OFFSET DG:SPLFCB

        MOV     DX,[CURRFIL]

        PUSH    DS

        POP     ES

ASSUME  ES:NOTHING

        MOV     CH,AH

        POP     AX                      ;Get AL return

        MOV     AH,CH



        IF      HARDINT

BWAIT3:

        CMP     [BUSY],0

        JNZ     BWAIT3

        INC     [BUSY]

        ENDIF



        CALL    PSTAT                   ; Tweek error counter



        IF      HARDINT

        MOV     [BUSY],0

        ENDIF



        POP     DS

ASSUME  DS:NOTHING

        POP     CX

        POP     DI

        POP     SI

        MOV     [CBUSY],0

        IRET



DELALLJ: JMP    DELALL



CANFIL:

ASSUME  DS:DG,ES:NOTHING

        MOV     CX,[NUMFCBS]



        IF      HARDINT

BWAIT:

        CMP     [BUSY],0

        JNZ     BWAIT

        INC     [BUSY]

        ENDIF



        MOV     SI,[CURRFIL]

        CMP     DX,-1

        JZ      DELALLJ

        MOV     BX,[SI]

        PUSH    BX

LOOKEND:                        ;Set initial pointer values

        CMP     BX,SI

        JZ      GOTLAST

        POP     AX

        PUSH    BX

        MOV     BX,[BX]

        JMP     SHORT LOOKEND



GOTLAST:

        POP     BX

        MOV     [LASTFCB],BX

        MOV     [LASTFCB2],BX

        POP     ES

        PUSH    ES

        MOV     BX,SI

LOOKMATCH:

        MOV     DI,DX

        ADD     SI,2                    ;Skip pointer

        CMP     BYTE PTR [SI],-1

        JZ      CANTERMJ                ;No more

        CMPSB

        JNZ     SKIPFIL                 ;DRIVE

        PUSH    CX

        MOV     CX,11

NXTCHAR:

        MOV     AL,ES:[DI]

        INC     DI

        CALL    UPCONV

        MOV     AH,AL

        LODSB

        CALL    UPCONV

        CMP     AH,"?"                  ;Wild card?

        JZ      NXTCHRLP                ;Yes

        CMP     AH,AL

        JNZ     SKIPFILC

NXTCHRLP:

        LOOP    NXTCHAR

MATCH:

        POP     CX

        MOV     AH,-1

        XCHG    AH,[BX+2]               ;Zap it

        CMP     BX,[CURRFIL]            ;Is current file?

        JNZ     REQUEUE                 ;No

        MOV     AL,1

        XCHG    AL,[PCANMES]

        OR      AL,AL

        JNZ     DIDCMES                 ;Only print cancel message once

        PUSH    ES

        PUSH    CS

        POP     ES

        MOV     DI,OFFSET DG:CANFILNAM

        MOV     SI,BX

        ADD     SI,3             ;Get to file name

        MOV     AL,AH

        ADD     AL,'@'

        STOSB

        INC     DI

        MOV     CX,4

        REP     MOVSW

        INC     DI

        MOVSW

        MOVSB

        POP     ES

        MOV     SI,OFFSET DG:CANMES

        CALL    LISTMES

        MOV     SI,OFFSET DG:BELMES

        CALL    LISTMES

DIDCMES:

        PUSH    CX

        CALL    NEXTFIL

SKIPFILC:

        POP     CX

SKIPFIL:

        MOV     [LASTFCB2],BX

        MOV     BX,[BX]

NEXTFC:

        MOV     SI,BX

        LOOP    LOOKMATCH

CANTERMJ: JMP   SHORT CANTERM



REQUEUE:

        MOV     AX,[BX]

        CMP     AX,[CURRFIL]            ;Is last FCB?

        JZ      SKIPFIL                 ;Yes, is in right place

        MOV     SI,[LASTFCB2]

        MOV     [SI],AX                 ;Unlink FCB

        MOV     SI,[CURRFIL]

        MOV     [BX],SI

        MOV     SI,[LASTFCB]

        MOV     [SI],BX                 ;Link FCB at end

        MOV     [LASTFCB],BX            ;New end

        MOV     BX,AX                   ;Process what it pointed to

        JMP     SHORT NEXTFC



DELALL:

        CMP     BYTE PTR CS:[SI+2],-1   ;Examine current file

DELALL2:

        MOV     BYTE PTR [SI+2],-1      ;Zap it

        MOV     SI,[SI]

        LOOP    DELALL2

        JZ      CANTERM1                ;No message if nothing was in progress

        MOV     SI,OFFSET DG:ALLCAN

        CALL    LISTMES

        MOV     SI,OFFSET DG:BELMES

        CALL    LISTMES

CANTERM1:

        MOV     [NXTCHR],OFFSET DG:BUFFER + BLKSIZ  ;Buffer empty

CANTERM:



        IF      HARDINT

        MOV     [BUSY],0

        ENDIF



        XOR     AX,AX

        JMP     SETCOUNT



UPCONV:

        CMP     AL,'a'

        JB      NOCONV

        CMP     AL,'z'

        JA      NOCONV

        SUB     AL,20H

NOCONV:

        RET



ADDFIL:

ASSUME  DS:DG,ES:NOTHING

        MOV     SI,[CURRFIL]

        MOV     CX,[NUMFCBS]



        IF      HARDINT

BWAIT2:

        CMP     [BUSY],0

        JNZ     BWAIT2

        INC     [BUSY]

        ENDIF



LOOKSPOT:

        CMP     BYTE PTR [SI+2],-1

        JZ      GOTSPOT

        MOV     SI,[SI]

        LOOP    LOOKSPOT



        IF      HARDINT

        MOV     [BUSY],0

        ENDIF



        MOV     AL,1

        JMP     SETCOUNT



GOTSPOT:

        PUSH    DS

        POP     ES

        POP     DS

        PUSH    DS

ASSUME  DS:NOTHING

        PUSH    SI

        MOV     DI,SI

        ADD     DI,2

        MOV     SI,DX

        MOV     CX,19

        REP     MOVSW           ;Copy in and set FCB

        POP     SI

        PUSH    ES

        POP     DS

ASSUME  DS:DG

        MOV     WORD PTR [SI+2+fcb_EXTENT],0

        MOV     BYTE PTR [SI+2+fcb_NR],0

        MOV     WORD PTR [SI+2+fcb_RECSIZ],BLKSIZ



        IF      HARDINT

        MOV     [BUSY],0

        ENDIF



        XOR     AL,AL

        JMP     SETCOUNT



NEXTFIL:

ASSUME  DS:DG,ES:NOTHING

        MOV     SI,[CURRFIL]

        MOV     BYTE PTR [SI+2],-1      ;Done with current file

        MOV     SI,[SI]

        MOV     [CURRFIL],SI

        MOV     [NXTCHR],OFFSET DG:BUFFER + BLKSIZ  ;Buffer empty

        MOV     [COLPOS],0                          ;Start of line

        RET



LISTMES:

ASSUME  DS:DG,ES:NOTHING

        LODSB

        CMP     AL,"$"

        JZ      LMESDONE

        CALL    LOUT

        JMP     LISTMES



LMESDONE:

        RET



LOUT:

        PUSH    BX

LWAIT:

        CALL    PSTAT

        JZ      PREADY

        CMP     [ERRCNT],ERRCNT2

        JA      POPRET                  ;Don't get stuck

        JMP     SHORT LWAIT

PREADY:

        CALL    POUT

POPRET:

        POP     BX

        RET



;Stuff for BIOS interface

IOBUSY  EQU     0200H

IOERROR EQU     8000H



BYTEBUF DB      ?



CALLAD  DD      ?



IOCALL  DB      22

        DB      0

IOREQ   DB      ?

IOSTAT  DW      0

        DB      8 DUP(?)

        DB      0

        DW      OFFSET DG:BYTEBUF

INTSEG  DW      ?

IOCNT   DW      1

        DW      0



PSTAT:

ASSUME  DS:DG

        PUSH    BX

        INC     [ERRCNT]

        MOV     BL,10

        CALL    DOCALL

        TEST    [IOSTAT],IOERROR

        JZ      NOSTATERR

        OR      [IOSTAT],IOBUSY         ;If error, show buisy

NOSTATERR:

        TEST    [IOSTAT],IOBUSY

        JNZ     RET13P                  ;Shows buisy

        MOV     [ERRCNT],0

RET13P:

        POP     BX

        RET



POUT:

ASSUME  DS:DG

        MOV     [BYTEBUF],AL

        MOV     BL,8

DOCALL:

        PUSH    ES

        MOV     [IOREQ],BL

        MOV     BX,CS

        MOV     ES,BX

        MOV     BX,OFFSET DG:IOCALL

        MOV     [IOSTAT],0

        MOV     [IOCNT],1

        PUSH    DS

        PUSH    SI

        PUSH    AX

        LDS     SI,[LISTDEV]

ASSUME  DS:NOTHING

        MOV     AX,[SI+6]

        MOV     WORD PTR [CALLAD],AX

        CALL    [CALLAD]

        MOV     AX,[SI+8]

        MOV     WORD PTR [CALLAD],AX

        CALL    [CALLAD]

        POP     AX

        POP     SI

        POP     DS

ASSUME  DS:DG

        POP     ES

        RET



        IF      IBM

REAL_INT_13 DD  ?

INT_13_RETADDR DW OFFSET DG:INT_13_BACK



INT_13  PROC    FAR

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        PUSHF

        INC     [BUSY]                  ;Exclude if dumb program call ROM

        PUSH    CS

        PUSH    [INT_13_RETADDR]

        PUSH    WORD PTR [REAL_INT_13+2]

        PUSH    WORD PTR [REAL_INT_13]

        RET

INT_13  ENDP



INT_13_BACK     PROC    FAR

        PUSHF

        DEC     [BUSY]

        POPF

        RET     2               ;Chuck saved flags

INT_13_BACK     ENDP

        ENDIF





        IF      IBM



REAL_INT_5  DD  ?

REAL_INT_17 DD  ?

INT_17_NUM  DW  0



INT_17:

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        PUSH    SI

        MOV     SI,[CURRFIL]

        INC     SI

        INC     SI

        CMP     BYTE PTR CS:[SI],-1

        POP     SI

        JZ      DO_INT_17               ;Nothing pending, so OK

        CMP     DX,[INT_17_NUM]

        JNZ     DO_INT_17               ;Not my unit

        CMP     [BUSY],0

        JNZ     DO_INT_17               ;You are me

        STI

        MOV     AH,0A1H                 ;You are bad, get out of paper

        IRET



DO_INT_17:

        JMP     [REAL_INT_17]           ;Do a 17



REAL_INT_14 DD  ?

INT_14_NUM  DW  0



INT_14:

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        PUSH    SI

        MOV     SI,[CURRFIL]

        INC     SI

        INC     SI

        CMP     BYTE PTR CS:[SI],-1

        POP     SI

        JZ      DO_INT_14               ;Nothing pending, so OK

        CMP     DX,[INT_14_NUM]

        JNZ     DO_INT_14               ;Not my unit

        CMP     [BUSY],0

        JNZ     DO_INT_14               ;You are me

        STI

        OR      AH,AH

        JZ      SET14_AX

        CMP     AH,2

        JBE     SET14_AH

SET14_AX:

        MOV     AL,0

SET14_AH:

        MOV     AH,80H                  ;Time out

        IRET



DO_INT_14:

        JMP     [REAL_INT_14]           ;Do a 14



INT_5:

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        PUSH    SI

        MOV     SI,[CURRFIL]

        INC     SI

        INC     SI

        CMP     BYTE PTR CS:[SI],-1

        POP     SI

        JZ      DO_INT_5                ;Nothing pending, so OK

        CMP     [INT_17_NUM],0

        JNZ     DO_INT_5                ;Only care about unit 0

        IRET                            ;Pretend it worked



DO_INT_5:

        JMP     [REAL_INT_5]            ;Do a 5

        ENDIF





;The following data is order and position dependant

NUMFCBS DW      10

ERRCNT  DW      0



SPLFCB  DW      OFFSET DG:FC1

        DB      (FCBSIZ - 2) DUP (-1)

FC1     DW      OFFSET DG:FC2

        DB      (FCBSIZ - 2) DUP (-1)

FC2     DW      OFFSET DG:FC3

        DB      (FCBSIZ - 2) DUP (-1)

FC3     DW      OFFSET DG:FC4

        DB      (FCBSIZ - 2) DUP (-1)

FC4     DW      OFFSET DG:FC5

        DB      (FCBSIZ - 2) DUP (-1)

FC5     DW      OFFSET DG:FC6

        DB      (FCBSIZ - 2) DUP (-1)

FC6     DW      OFFSET DG:FC7

        DB      (FCBSIZ - 2) DUP (-1)

FC7     DW      OFFSET DG:FC8

        DB      (FCBSIZ - 2) DUP (-1)

FC8     DW      OFFSET DG:FC9

        DB      (FCBSIZ - 2) DUP (-1)

FC9     DW      OFFSET DG:SPLFCB

        DB      (FCBSIZ - 2) DUP (-1)



DEF_ENDRES      LABEL   BYTE



ASSUME  CS:DG,DS:DG,ES:DG,SS:DG



BADSPOOL:

        MOV     DX,OFFSET DG:BADMES

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        INT     20H



SETUP:

;Called once to install resident

        CLD

        MOV     [INTSEG],CS

        MOV     DX,OFFSET DG:PROMPT

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        MOV     DX,OFFSET DG:COMBUF

        MOV     AH,STD_CON_STRING_INPUT

        INT     21H                     ;Get device name

        MOV     DX,OFFSET DG:CRLF

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        MOV     CL,[COMBUF+1]

        OR      CL,CL

        JZ      DEFSPOOL                ;User didn't specify one

        XOR     CH,CH

        MOV     DI,OFFSET DG:LISTFCB + 1

        MOV     SI,OFFSET DG:COMBUF + 2

        REP     MOVSB

DEFSPOOL:

        MOV     DX,OFFSET DG:LISTFCB

        MOV     AH,FCB_OPEN

        INT     21H

        OR      AL,AL

        JNZ     BADSPOOL                ;Bad

        TEST    BYTE PTR [LISTFCB.fcb_DEVID],080H

        JZ      BADSPOOL                ;Must be a device

        LDS     SI,DWORD PTR [LISTFCB.fcb_FIRCLUS]

ASSUME  DS:NOTHING

        MOV     WORD PTR [CALLAD+2],DS     ;Get I/O routines

        MOV     WORD PTR [LISTDEV+2],DS    ;Get I/O routines

        MOV     WORD PTR [LISTDEV],SI

        PUSH    CS

        POP     DS

ASSUME  DS:DG

        MOV     DX,OFFSET DG:SPINT

        MOV     AL,SOFTINT

        MOV     AH,GET_INTERRUPT_VECTOR

        INT     21H                     ;Get soft vector

        MOV     WORD PTR [SPNEXT+2],ES

        MOV     WORD PTR [SPNEXT],BX

        MOV     AL,SOFTINT

        MOV     AH,SET_INTERRUPT_VECTOR

        INT     21H                     ;Set soft vector

        MOV     DX,OFFSET DG:SPCOMINT

        MOV     AL,COMINT

        MOV     AH,SET_INTERRUPT_VECTOR              ;Set communication vector

        INT     21H



        IF      IBM

        MOV     AL,13H

        MOV     AH,GET_INTERRUPT_VECTOR

        INT     21H

        MOV     WORD PTR [REAL_INT_13+2],ES

        MOV     WORD PTR [REAL_INT_13],BX

        MOV     DX,OFFSET DG:INT_13

        MOV     AL,13H

        MOV     AH,SET_INTERRUPT_VECTOR

        INT     21H             ;Set diskI/O interrupt

        MOV     AL,17H

        MOV     AH,GET_INTERRUPT_VECTOR

        INT     21H

        MOV     WORD PTR [REAL_INT_17+2],ES

        MOV     WORD PTR [REAL_INT_17],BX

        MOV     AL,14H

        MOV     AH,GET_INTERRUPT_VECTOR

        INT     21H

        MOV     WORD PTR [REAL_INT_14+2],ES

        MOV     WORD PTR [REAL_INT_14],BX

        MOV     AL,5H

        MOV     AH,GET_INTERRUPT_VECTOR

        INT     21H

        MOV     WORD PTR [REAL_INT_5+2],ES

        MOV     WORD PTR [REAL_INT_5],BX

        PUSH    CS

        POP     ES

        MOV     BP,OFFSET DG:LISTFCB + 1

        MOV     SI,BP

        MOV     CX,8

CONLP:                  ;Make sure device name in upper case

        LODSB

        CMP     AL,'a'

        JB      DOCONLP

        CMP     AL,'z'

        JA      DOCONLP

        SUB     BYTE PTR [SI-1],20H

DOCONLP:

        LOOP    CONLP

        MOV     DI,OFFSET DG:INT_17_HITLIST

CHKHIT:

        MOV     SI,BP

        MOV     CL,[DI]

        INC     DI

        JCXZ    NOTONHITLIST

        REPE    CMPSB

        LAHF

        ADD     DI,CX           ;Bump to next position without affecting flags

        MOV     BL,[DI]         ;Get device number

        INC     DI

        SAHF

        JNZ     CHKHIT

        XOR     BH,BH

        MOV     [INT_17_NUM],BX

        MOV     DX,OFFSET DG:INT_17

        MOV     AL,17H

        MOV     AH,SET_INTERRUPT_VECTOR

        INT     21H             ;Set printer interrupt

        MOV     DX,OFFSET DG:INT_5

        MOV     AL,5H

        MOV     AH,SET_INTERRUPT_VECTOR

        INT     21H             ;Set print screen interrupt

        JMP     SHORT ALLSET

NOTONHITLIST:

        MOV     DI,OFFSET DG:INT_14_HITLIST

CHKHIT2:

        MOV     SI,BP

        MOV     CL,[DI]

        INC     DI

        JCXZ    ALLSET

        REPE    CMPSB

        LAHF

        ADD     DI,CX           ;Bump to next position without affecting flags

        MOV     BL,[DI]         ;Get device number

        INC     DI

        SAHF

        JNZ     CHKHIT2

        XOR     BH,BH

        MOV     [INT_14_NUM],BX

        MOV     DX,OFFSET DG:INT_14

        MOV     AL,14H

        MOV     AH,SET_INTERRUPT_VECTOR

        INT     21H             ;Set RS232 port interrupt

ALLSET:

        ENDIF



        IF      HARDINT

        MOV     AH,GET_INDOS_FLAG

        INT     21H

        MOV     WORD PTR [INDOS+2],ES   ;Get indos flag location

        MOV     WORD PTR [INDOS],BX

        MOV     AL,INTLOC

        MOV     AH,GET_INTERRUPT_VECTOR

        INT     21H

        MOV     WORD PTR [NEXTINT+2],ES

        MOV     WORD PTR [NEXTINT],BX

        MOV     DX,OFFSET DG:HDSPINT

        MOV     AL,INTLOC

        MOV     AH,SET_INTERRUPT_VECTOR

        INT     21H             ;Set hardware interrupt

        ENDIF



        MOV     [MAKERES],1     ;Indicate to do a terminate stay resident

        MOV     DX,OFFSET DG:GOODMES

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        RET



ASSUME  CS:DG,DS:DG,ES:DG,SS:DG



TRANSIENT:

;User interface

        CLD



;Code to print header

;       MOV     DX,OFFSET DG:HEADER

;       MOV     AH,STD_CON_STRING_OUTPUT

;       INT     21H



DOSVER_LOW      EQU  0136H   ;1.54 in hex

DOSVER_HIGH     EQU  0200H   ;2.00 in hex

        MOV     AH,GET_VERSION

        INT     21H

        XCHG    AH,AL           ;Turn it around to AH.AL

        CMP     AX,DOSVER_LOW

        JB      GOTBADDOS

        CMP     AX,DOSVER_HIGH

        JBE     OKDOS

GOTBADDOS:

        PUSH    CS

        POP     DS

        MOV     DX,OFFSET DG:BADVER

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        INT     20H

OKDOS:

        MOV     AX,CHAR_OPER SHL 8

        INT     21H

        MOV     [SWITCHAR],DL           ;Get user switch character

        MOV     AH,GET_INTERRUPT_VECTOR

        MOV     AL,COMINT

        INT     21H

ASSUME  ES:NOTHING

        MOV     DI,BX

        MOV     SI,OFFSET DG:SPCOMINT

        MOV     CX,13

        REPE    CMPSB

        JZ      GOTRES          ;Signature matched

        PUSH    CS

        POP     ES

        CALL    SETUP

GOTRES:

        PUSH    CS

        POP     ES

        MOV     AH,GET_DEFAULT_DRIVE

        INT     21H

        MOV     [DEFDRV],AL

        MOV     SI,PARMS

        LODSB

        OR      AL,AL

        JNZ     GOTPARMS

TRANEXIT:

        CALL    GETSPLIST

        CMP     [MAKERES],0

        JNZ     SETRES

        INT     20H



SETRES:

        MOV     DX,[ENDRES]

        INT     27H



ARGSDONE:

        CMP     [ARGSETUP],0

        JZ      TRANEXIT

        CALL    PROCESS

        JMP     SHORT TRANEXIT



GOTPARMS:

PARSE:

        MOV     DI,OFFSET DG:PARSEBUF

        CALL    CPARSE

        JC      ARGSDONE

        CMP     AX,4            ;Switch?

        JNZ     GOTNORMARG

        MOV     AL,[DI]         ;Get the switch character

        CMP     AL,'C'

        JZ      SETCAN

        CMP     AL,'c'

        JNZ     CHKSPL

SETCAN:

        MOV     [CANFLG],1

        JMP     SHORT PARSE

CHKSPL:

        CMP     AL,'P'

        JZ      RESETCAN

        CMP     AL,'p'

        JNZ     CHKTERM

RESETCAN:

        MOV     [CANFLG],0

        JMP     SHORT PARSE

CHKTERM:

        CMP     AL,'T'

        JZ      SETTERM

        CMP     AL,'t'

        JZ      SETTERM

        MOV     DX,OFFSET DG:BADSWT

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        JMP     SHORT PARSE



SETTERM:

        CALL    TERMPROCESS

        JMP     TRANEXIT        ; Ignore everything after T switch



GOTNORMARG:

        XOR     AL,AL

        XCHG    AL,[ARGSETUP]

        OR      AL,AL

        JZ      PARSEARG

        CALL    NORMPROC        ;Don't test ARGSETUP, it just got zeroed

PARSEARG:

        PUSH    SI

        MOV     SI,DI

        MOV     DI,FCB

        MOV     AX,(PARSE_FILE_DESCRIPTOR SHL 8) OR 1

        INT     21H             ;Parse the arg

        CMP     BYTE PTR [DI],0

        JNZ     DRVOK

        MOV     DL,[DEFDRV]

        INC     DL

        MOV     BYTE PTR [DI],DL        ;Set the default drive

DRVOK:

        POP     SI

        INC     [ARGSETUP]

        JMP     SHORT PARSE



TERMPROCESS:

        MOV     DX,-1

PROCRET:

        MOV     AH,1

        CALL    DOSET

PROCRETNFUNC:

        MOV     [ARGSETUP],0

        PUSH    CS

        POP     ES

RET14:  RET



PROCESS:

        CMP     [ARGSETUP],0

        JZ      RET14                   ;Nothing to process

NORMPROC:

        MOV     AL,BYTE PTR DS:[FCB+1]

        CMP     AL," "

        JZ      SRCHBADJ

        MOV     DX,FCB

        MOV     AH,[CANFLG]

        CMP     AH,0

        JNZ     PROCRET

        MOV     DX,OFFSET DG:SRCHFCB

        MOV     AH,SET_DMA

        INT     21H

        MOV     DX,FCB

        MOV     AH,DIR_SEARCH_FIRST

        INT     21H

        OR      AL,AL

        JNZ     SRCHBADJ

SRCHLOOP:

        MOV     DX,OFFSET DG:SRCHFCB

        MOV     AH,FCB_OPEN

        INT     21H

        OR      AL,AL

        JZ      OPENOK

        CALL    OPENERR

        JMP     SHORT NEXTSEARCH

SRCHBADJ: JMP   SRCHBAD

OPENOK:

        MOV     DX,OFFSET DG:SRCHFCB

        MOV     AH,0

        CALL    DOSET

        OR      AL,AL

        JZ      NEXTSEARCH

        XCHG    AL,[FULLFLAG]           ;Know AL non-zero

        OR      AL,AL

        JNZ     NEXTSEARCH              ;Only print message once

        MOV     DX,OFFSET DG:FULLMES    ;Queue full

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

NEXTSEARCH:

        MOV     DX,OFFSET DG:SRCHFCB

        MOV     AH,SET_DMA

        INT     21H

        MOV     DX,FCB

        MOV     AH,DIR_SEARCH_NEXT

        INT     21H

        OR      AL,AL

        JNZ     PROCRETNFUNC

        JMP     SRCHLOOP



DOSET:

        INT     COMINT

        MOV     [FILCNT],AH             ;Suck up return info

        MOV     WORD PTR [SPLIST+2],ES

        MOV     WORD PTR [CURFILE+2],ES

        MOV     WORD PTR [SPLIST],BX

        MOV     WORD PTR [CURFILE],DX

        RET



OPENERR:

        PUSH    SI

        PUSH    DI

        MOV     SI,OFFSET DG:OPFILNAM

        PUSH    DS

        POP     ES

        MOV     DI,OFFSET DG:SRCHFCB

        CALL    MVFNAM

        MOV     DX,OFFSET DG:OPMES

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        POP     DI

        POP     SI

        RET



SRCHBAD:

        PUSH    SI

        PUSH    DI

        MOV     SI,OFFSET DG:SRCHFNAM

        PUSH    DS

        POP     ES

        MOV     DI,FCB

        CALL    MVFNAM

        MOV     DX,OFFSET DG:SRCHMES

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        POP     DI

        POP     SI

        JMP     PROCRETNFUNC



GETSPLIST:

        MOV     AH,0FFH

        CALL    DOSET

        PUSH    DS

        LDS     DI,[SPLIST]

        MOV     DI,[DI-2]               ;Get the error count

        POP     DS

        CMP     DI,ERRCNT1

        JB      CNTOK

        MOV     DX,OFFSET DG:CNTMES

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

CNTOK:

        MOV     CL,[FILCNT]

        OR      CL,CL

        JZ      NOFILES

        XOR     CH,CH

        LES     DI,[CURFILE]

        PUSH    DI

        INC     DI

        INC     DI

        MOV     SI,OFFSET DG:CURFNAM

        CALL    MVFNAM

        POP     DI

        MOV     DX,OFFSET DG:CURMES

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        DEC     CX

        JCXZ    RET12

FILOOP:

        MOV     DI,ES:[DI]

        PUSH    DI

        INC     DI

        INC     DI

        MOV     SI,OFFSET DG:FILFNAM

        CALL    MVFNAM

        POP     DI

        MOV     DX,OFFSET DG:FILMES

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        LOOP    FILOOP

RET12:  RET



NOFILES:

        MOV     DX,OFFSET DG:NOFILS

        MOV     AH,STD_CON_STRING_OUTPUT

        INT     21H

        RET



;Make a message with the file name

MVFNAM:

ASSUME  DS:NOTHING,ES:NOTHING

        PUSH    SI

        PUSH    DI

        PUSH    CX

        MOV     AX,ES

        PUSH    DS

        POP     ES

        MOV     DS,AX

        XCHG    SI,DI

        LODSB

        ADD     AL,"@"

        CMP     AL,"@"

        JNZ     STCHR

        MOV     AL,[DEFDRV]

        ADD     AL,"A"

STCHR:

        STOSB

        INC     DI

        MOV     CX,4

        REP     MOVSW

        INC     DI

        MOVSW

        MOVSB

        MOV     AX,ES

        PUSH    DS

        POP     ES

        MOV     DS,AX

        POP     CX

        POP     DI

        POP     SI

        RET



;-----------------------------------------------------------------------;

; ENTRY:                                                                ;

;       DS:SI   Points input buffer                                     ;

;       ES:DI   Points to the token buffer                              ;

;                                                                       ;

; EXIT:                                                                 ;

;       DS:SI   Points to next char in the input buffer                 ;

;       ES:DI   Points to the token buffer                              ;

;       CX      Character count                                         ;

;       AX      Condition Code                                          ;

;               =1 same as carry set                                    ;

;               =2 normal token                                         ;

;               =4 switch character, char in token buffer               ;

;       Carry Flag      Set if a CR was found, Reset otherwise          ;

;                                                                       ;

; MODIFIES:                                                             ;

;       CX, SI, AX and the Carry Flag                                   ;

;                                                                       ;

;-----------------------------------------------------------------------;



TAB     equ     09h

CR      equ     0dh



CPARSE:

ASSUME  DS:NOTHING,ES:NOTHING,SS:NOTHING

        pushf                           ;save flags

        push    di                      ;save the token buffer addrss

        xor     cx,cx                   ;no chars in token buffer

        call    kill_bl



        cmp     al,CR                   ;a CR?

        jne     sj2                     ;no, skip

sj1:

        mov     ax,1                    ;condition code

        dec     si                      ;adjust the pointer

        pop     di                      ;retrive token buffer address

        popf                            ;restore flags

        stc                             ;set the carry bit

        ret



sj2:

        mov     dl,[SWITCHAR]

        cmp     al,dl                   ;is the char the switch char?

        jne     anum_char               ;no, process...

        call    kill_bl

        cmp     al,CR                   ;a CR?

        je      sj1                     ;yes, error exit

        call    move_char               ;Put the switch char in the token buffer

        mov     ax,4                    ;Flag switch

        jmp     short x_done2



anum_char:

        call    move_char               ;just an alphanum string

        lodsb

        cmp     al,' '

        je      x_done

        cmp     al,tab

        je      x_done

        cmp     al,CR

        je      x_done

        cmp     al,','

        je      x_done

        cmp     al,'='

        je      x_done

        cmp     al,dl                   ;Switch character

        jne     anum_char

x_done:

        dec     si                      ;adjust for next round

        mov     ax,2                    ;normal token

x_done2:

        push    ax                      ;save condition code

        mov     al,0

        stosb                           ;null at the end

        pop     ax

        pop     di                      ;restore token buffer pointer

        popf

        clc                             ;clear carry flag

        ret





kill_bl proc    near

        lodsb

        cmp     al,' '

        je      kill_bl

        cmp     al,tab

        je      kill_bl

        cmp     al,','                  ;a comma?

        je      kill_bl

        cmp     al,'='

        je      kill_bl

        ret

kill_bl endp





move_char proc  near

        stosb                           ;store char in token buffer

        inc     cx                      ;increment char count

        ret

move_char endp



CODE    ENDS

        END     START

                                                                                                  