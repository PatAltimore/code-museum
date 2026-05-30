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
description: "MS-DOS PRINT.ASM: A foundational spooler for background printing in early PCs, showcasing clever interrupt handling and device portability."

summary:
  - point: "Uses INT 28H for software interrupts to enable background printing"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Supports both software and hardware timer interrupts for portability"
    link: "https://en.wikipedia.org/wiki/Timer_interrupt"
    link_label: "Timer Interrupts"
  - point: "Introduces a generic spooler design adaptable to multiple devices"
    link: "https://en.wikipedia.org/wiki/Spooling"
    link_label: "Spooling"
  - point: "Warns developers against relying on version-specific vectors"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Optimizes CPU usage with configurable time slices for printing"
    link: "https://en.wikipedia.org/wiki/CPU_scheduling"
    link_label: "CPU Scheduling"

enhancements:
  - id: "start-jump-to-transient"
    line_start: 235
    line_end: 245
    title: "Why Start Jumps to Transient Code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bootstrapping_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `START` label begins the program by jumping to the transient portion of the code (`TRANSIENT`). This design reflects the modular structure of MS-DOS utilities, where transient code handles initialization and setup before passing control to resident routines. At the time, memory constraints on early PCs (like the IBM PC with 64KB to 640KB RAM) necessitated careful segmentation of code into transient and resident parts. Transient code could be discarded after execution to free memory for other tasks. This approach was influenced by the need for efficient memory usage in single-tasking operating systems. The modularity seen here would later influence the design of TSR (Terminate and Stay Resident) programs and even modern operating systems with dynamic loading of modules."
  - id: "istack-resident-data"
    line_start: 247
    line_end: 303
    title: "Resident Data: The Backbone of Spooling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Spooling"
    image_url: ""
    image_caption: ""
    content: "The `ISTACK` section defines the resident data used by the PRINT spooler, including flags, counters, and pointers essential for managing background printing. This data structure supports the spooler's ability to operate independently of the main application, leveraging interrupts to perform tasks asynchronously. The inclusion of variables like `TICKCNT` and `SLICECNT` reflects an early attempt at CPU scheduling, allowing PRINT to balance its workload with other processes. In the early 1980s, this was critical for PCs with limited processing power and no multitasking capabilities. The design principles here laid the groundwork for later advancements in background task management, influencing both DOS utilities and the development of multitasking operating systems like Windows."
  - id: "srchmes-error-messages"
    line_start: 463
    line_end: 487
    title: "Error Messages: Communicating with Users"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "The `SRCHMES` section defines error messages displayed to users when issues occur during printing, such as file not found or device errors. These messages are stored as strings and include formatting characters like carriage return (`CR`) and line feed (`LF`) for proper display. In the early days of computing, user interaction was often limited to cryptic error codes, making these more descriptive messages a step forward in usability. This approach reflects the growing awareness of user experience in software design during the 1980s. By providing clear and actionable feedback, MS-DOS utilities like PRINT helped users troubleshoot issues without requiring technical expertise. This focus on usability would later become a cornerstone of software development, influencing graphical user interfaces and error handling in modern systems."
  - id: "int-17-hitlist-device-names"
    line_start: 489
    line_end: 501
    title: "INT 17 Hitlist: Reserved Device Names"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_file"
    image_url: ""
    image_caption: ""
    content: "The `INT_17_HITLIST` defines reserved names for parallel port devices, such as `PRN`, `LPT1`, `LPT2`, and `LPT3`. These names are mapped to specific hardware ports, enabling the spooler to identify and interact with printers. This abstraction was crucial for portability, allowing PRINT to work with different hardware configurations without modification. In the early PC era, standardizing device names simplified programming and user configuration, as developers could rely on consistent identifiers across systems. This concept of device abstraction persists in modern operating systems, where virtual device files (e.g., `/dev/` in Unix-like systems) provide a unified interface for hardware interaction."
  - id: "hdspint-hardware-interrupt"
    line_start: 549
    line_end: 561
    title: "Hardware Interrupt: Keeping the Spooler Alive"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `HDSPINT` routine handles hardware timer interrupts, incrementing counters (`TICKCNT` and `TICKSUB`) and checking whether it's time to process printing tasks. If the slice counter (`SLICECNT`) reaches zero, control passes to the `TIMENOW` routine for further processing. This mechanism ensures that PRINT can continue operating even when the system is busy with other tasks. In the early 1980s, hardware interrupts were a critical tool for enabling background operations on single-tasking systems like MS-DOS. By leveraging timer interrupts, PRINT could maintain responsiveness and avoid stalling the main application. This technique influenced later developments in real-time systems and multitasking operating systems, where interrupt-driven scheduling remains a key component."
  - id: "timenow-dos-busy-check"
    line_start: 563
    line_end: 609
    title: "TIMENOW: Avoiding Interrupt Collisions"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The `TIMENOW` routine checks whether DOS is busy before proceeding with printing tasks. It uses the `INDOS` flag to determine if DOS calls are in progress, ensuring that the spooler does not interfere with critical system operations. If DOS is busy, control returns to the `CHAININT` routine to pass the interrupt to the next handler. This careful coordination reflects the challenges of writing system utilities in the early PC era, where direct hardware access and lack of multitasking required precise timing and resource management. The technique of checking system state before performing operations influenced the design of later operating systems, where task scheduling and resource locking became standard practices."
  - id: "spint-int-28h-entry"
    line_start: 621
    line_end: 653
    title: "SPINT: Leveraging INT 28H for Background Printing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `SPINT` routine serves as the entry point for the software interrupt `INT 28H`, which is triggered during DOS I/O wait loops. This interrupt allows PRINT to perform background tasks while the system is idle, ensuring efficient use of CPU time. The routine includes flags (`BUSY` and `SOFINT`) to manage interrupt state and prevent collisions with hardware interrupts. By using `INT 28H`, PRINT achieves portability across systems, as the interrupt is generated by DOS itself rather than relying on hardware-specific features. This design highlights the ingenuity required to implement background processing on single-tasking systems, paving the way for more sophisticated multitasking and scheduling techniques in later operating systems."
  - id: "doint-buffer-check"
    line_start: 661
    line_end: 677
    title: "DOINT: Checking for Work in the Buffer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `DOINT` routine checks whether there is data in the buffer to process. It uses the `CURRFIL` pointer to locate the current file and verifies whether the buffer contains valid characters. If the buffer is empty, control returns to the `SPRET` routine. This check ensures that the spooler only performs work when necessary, avoiding unnecessary CPU usage. Buffer management was a critical aspect of early PC programming, as memory and processing power were limited. The techniques used here influenced later developments in I/O buffering and memory management, which remain essential components of modern operating systems and programming languages."
  - id: "goahead-stack-switching"
    line_start: 679
    line_end: 715
    title: "GOAHEAD: Switching Stacks to Prevent Overflow"
    wikipedia_url: "https://en.wikipedia.org/wiki/Call_stack"
    image_url: ""
    image_caption: ""
    content: "The `GOAHEAD` routine switches to an internal stack to prevent system stack overflow during interrupt handling. It saves the current stack state (`SS` and `SP`) and uses a dedicated stack (`ISTACK`) for processing. This technique reflects the constraints of early PCs, where stack space was limited and interrupt routines could easily exceed available memory. By isolating interrupt handling from the main stack, PRINT avoids disrupting the system and ensures reliable operation. Stack switching would later become a standard practice in real-time systems and embedded programming, where resource constraints and interrupt-driven design remain common challenges."
  - id: "ploop-character-processing"
    line_start: 731
    line_end: 747
    title: "PLOOP: Iterating Through Characters for Output"
    wikipedia_url: "https://en.wikipedia.org/wiki/Character_encoding"
    image_url: ""
    image_caption: ""
    content: "The `PLOOP` routine iterates through characters in the buffer, checking their status and determining whether they can be sent to the printer. It includes conditions for handling software interrupts (`SOFINT`) and time slice limits (`TICKCNT`). This iterative approach ensures that PRINT processes data efficiently while respecting CPU scheduling constraints. The handling of individual characters reflects the low-level nature of programming in assembly, where every operation is explicitly managed. Techniques like this influenced later developments in text processing and I/O management, which abstracted these details into higher-level constructs for ease of use."
  - id: "disk-error-handling"
    line_start: 1019
    line_end: 1071
    title: "How MS-DOS Managed Disk Errors"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `DSKERR` routine is responsible for handling disk errors in MS-DOS. It begins by checking whether an abort flag (`PABORT`) is set, indicating whether the error should be ignored. If not, it saves the current register state and switches the segment registers to ensure proper memory access. The routine then updates the drive letter (`BADDRVM`) and calls `LISTMES` to display an error message. This is followed by additional checks to determine the type of error and whether it requires further handling, such as invoking `FATERR` for file allocation table issues. Tim Paterson's design here reflects the constraints of early personal computers, where robust error handling was critical due to unreliable hardware and limited user feedback mechanisms. The use of segment registers and direct memory manipulation highlights the low-level nature of MS-DOS programming, a necessity for compatibility with the IBM PC's BIOS. This approach influenced later operating systems by emphasizing the importance of clear error reporting and recovery mechanisms, which became standard practice in software development."
  - id: "error-message-retrieval"
    line_start: 1073
    line_end: 1109
    title: "Fetching Error Messages from Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `HAVCOD` routine retrieves and displays error messages based on a code stored in the `DI` register. It calculates the memory address of the error message by shifting the code and indexing into the `MESBAS` table. The message is then printed using `LISTMES`. This mechanism demonstrates the efficiency required in early operating systems, where memory and processing power were limited. By preloading error messages into a table and using simple arithmetic to locate them, MS-DOS minimized runtime overhead. This technique, common in assembly programming, was influenced by earlier systems like CP/M, which also relied on compact, efficient error handling. The concept of centralized error message storage persisted in later systems, evolving into more sophisticated logging frameworks in modern operating systems."
  - id: "abort-handling-routine"
    line_start: 1111
    line_end: 1135
    title: "Setting an Abort Flag for Recovery"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `SETABORT` routine sets an abort flag (`PABORT`) to indicate that an operation should be terminated. It restores the register state saved earlier and exits gracefully. This routine exemplifies the importance of state management in assembly programming, where the programmer must manually save and restore registers to prevent corruption during interrupts or subroutine calls. Tim Paterson's implementation reflects the meticulous attention to detail required in early operating systems, where a single error could crash the system. The abort flag concept influenced later systems by introducing structured error recovery mechanisms, paving the way for exception handling in high-level languages like C++ and Java."
  - id: "communications-interrupt-handler"
    line_start: 1161
    line_end: 1199
    title: "Handling Serial Communications Interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `SPCOMINT` routine handles interrupts for serial communications. It checks whether the communication channel is busy (`CBUSY`) and, if not, sets it to busy and processes the interrupt. The routine saves the current register state, switches the segment registers, and determines the appropriate action based on the value of the `AH` register. This low-level interrupt handling was crucial for MS-DOS's interaction with hardware, particularly in the IBM PC, where serial communication was a common method for connecting peripherals. The design reflects the influence of earlier systems like CP/M, which also relied on direct hardware interaction. This approach laid the groundwork for more advanced interrupt handling mechanisms in modern operating systems, such as the use of interrupt vectors and prioritization."
  - id: "file-counting-routine"
    line_start: 1211
    line_end: 1217
    title: "Counting Active File Control Blocks"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The `CNTFILS` routine counts the number of active File Control Blocks (FCBs) by iterating through the `SPLFCB` structure and checking for valid entries. FCBs were a legacy from CP/M, used to manage file metadata in MS-DOS. This routine highlights the transition from CP/M's flat file system to MS-DOS 2.0's hierarchical directory structure. By maintaining compatibility with FCBs, MS-DOS ensured a smooth transition for software developers migrating from CP/M. The concept of iterating through file metadata structures influenced later file system designs, including the inode-based systems used in Unix and Linux."
  - id: "wildcard-file-matching"
    line_start: 1371
    line_end: 1391
    title: "Matching Files with Wildcards"
    wikipedia_url: "https://en.wikipedia.org/wiki/Wildcard_character"
    image_url: ""
    image_caption: ""
    content: "The `NXTCHAR` routine matches file names against a pattern, supporting wildcard characters like `?`. It converts characters to uppercase using the `UPCONV` routine and compares them one by one. If a wildcard is encountered, the routine skips to the next character. This feature allowed MS-DOS users to perform flexible file searches, a capability inspired by Unix's pattern matching. The implementation reflects the constraints of early PCs, where efficient string processing was critical due to limited memory and processing power. Wildcard matching became a standard feature in file systems, influencing command-line interfaces and programming languages like Python and Perl."
  - id: "bios-interface-for-int-13"
    line_start: 1887
    line_end: 1905
    title: "Direct BIOS Calls for Disk Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "The `INT_13` routine interfaces directly with the BIOS to perform disk operations. It increments the `BUSY` flag to prevent concurrent access and sets up the stack for a far call to the real BIOS interrupt handler (`REAL_INT_13`). This routine exemplifies the low-level nature of MS-DOS, where direct BIOS interaction was necessary to perform hardware-specific tasks. The reliance on BIOS interrupts reflects the IBM PC's design philosophy, where the BIOS provided a standardized interface for hardware access. This approach influenced later operating systems by demonstrating the importance of abstraction layers, eventually leading to the development of device drivers and APIs."
  - id: "printer-error-handling"
    line_start: 1939
    line_end: 1969
    title: "Detecting Printer Errors via Interrupts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Printer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The `INT_17` routine handles printer-related interrupts, checking for errors such as being out of paper. It verifies the printer unit number (`INT_17_NUM`) and the `BUSY` flag before setting an error code (`AH`) and returning control to the system. This routine highlights the challenges of managing hardware peripherals in early PCs, where printers often required manual intervention. The error handling mechanism reflects the influence of CP/M, which also provided basic printer support. By integrating printer error detection into the operating system, MS-DOS set a precedent for peripheral management, influencing the design of later systems like Windows and Linux."
  - id: "int-5-interrupt-handling"
    line_start: 2039
    line_end: 2061
    title: "Why MS-DOS Needed a Fake INT 5"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines the INT_5 routine, which handles the Print Screen interrupt. The code checks whether there is any pending operation for the current file and pretends the operation succeeded if no work is required. The programmer was solving the problem of ensuring graceful handling of the Print Screen key, which could otherwise disrupt ongoing processes. In 1983, hardware constraints meant interrupts had to be carefully managed to avoid conflicts. Tim Paterson and the MS-DOS team adapted this approach from earlier CP/M systems, which also used software interrupts for device control. This technique influenced later operating systems, where interrupt-driven device handling became standard practice. By abstracting hardware operations into software routines, MS-DOS paved the way for more sophisticated device drivers in Windows and other systems."
  - id: "do-int-5-jump-to-real-handler"
    line_start: 2065
    line_end: 2069
    title: "Jumping to the Real INT 5 Handler"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "DO_INT_5 directly jumps to the real interrupt handler stored in the interrupt vector table. This section also includes a series of File Control Block (FCB) definitions, which are order-dependent. FCBs were an essential part of MS-DOS's file management system, inherited from CP/M. By organizing these blocks in memory, MS-DOS could efficiently track open files and devices. In the early 1980s, memory was scarce, and this compact data structure allowed MS-DOS to manage resources effectively. The reliance on FCBs gradually diminished as newer file systems like FAT (File Allocation Table) were introduced, but the concept of structured file metadata persisted in modern operating systems."
  - id: "setup-resident-program"
    line_start: 2145
    line_end: 2183
    title: "How MS-DOS Installed Resident Programs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    image_url: ""
    image_caption: ""
    content: "The SETUP routine initializes a resident program, a key feature of MS-DOS v2.0. It interacts with the user to specify a device name and sets up interrupt vectors for device communication. This routine demonstrates the Terminate and Stay Resident (TSR) technique, where a program remains in memory after execution to provide background services. TSR programs were a clever workaround for the lack of multitasking in MS-DOS, allowing utilities like print spoolers and memory-resident text editors to run alongside other applications. This approach influenced later systems, where background services evolved into daemons and system processes in Unix-like operating systems."
  - id: "device-name-uppercase-conversion"
    line_start: 2305
    line_end: 2317
    title: "Why MS-DOS Forced Uppercase Device Names"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The CONLP routine ensures that device names are converted to uppercase. This was necessary because MS-DOS, like many early operating systems, treated uppercase and lowercase characters differently. By standardizing device names to uppercase, the system avoided ambiguity and ensured compatibility with programs that expected uppercase identifiers. This design decision reflects the limitations of ASCII-based systems in the early 1980s, where lowercase support was often inconsistent. The practice of case normalization persists in modern systems, especially in environments like Windows, which inherited MS-DOS's case-insensitive file handling."
  - id: "terminate-stay-resident-finalization"
    line_start: 2579
    line_end: 2583
    title: "How MS-DOS Finalized TSR Programs"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    image_url: ""
    image_caption: ""
    content: "SETRES finalizes the Terminate and Stay Resident (TSR) process by calling interrupt 27H, which instructs MS-DOS to keep the program in memory. This technique allowed utilities to provide background functionality in a single-tasking environment. TSR programs were a hallmark of MS-DOS, enabling features like pop-up calendars, print spoolers, and memory-resident calculators. The concept of background services evolved significantly in later systems, leading to the development of multitasking operating systems where such functionality became integrated into the kernel."
  - id: "parse-command-line-arguments"
    line_start: 2601
    line_end: 2621
    title: "Parsing Arguments the MS-DOS Way"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The PARSE routine processes command-line arguments, identifying switches and parameters. It uses a combination of string comparisons and conditional jumps to interpret user input. In the early 1980s, command-line interfaces were the primary means of interacting with computers, and efficient parsing routines were critical for usability. MS-DOS's argument parsing influenced later systems, including Unix shells and scripting languages, where command-line flexibility became a hallmark of power-user tools. The simplicity of this routine highlights the constraints of assembly programming, where every byte of memory and CPU cycle mattered."
  - id: "error-handling-in-file-search"
    line_start: 2889
    line_end: 2915
    title: "The Error Message That Saved Searches"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_System"
    image_url: ""
    image_caption: ""
    content: "The SRCHBAD routine handles errors during file searches, displaying an appropriate message to the user. This routine ensures that the system provides feedback when a file cannot be found, improving usability in an era when cryptic error codes were common. By calling MVFNAM to format the file name into the error message, the routine demonstrates an early example of user-friendly error handling. This approach influenced later systems, where descriptive error messages became standard practice, reducing frustration and improving user experience."
  - id: "display-file-list-loop"
    line_start: 2977
    line_end: 2999
    title: "How MS-DOS Looped Through Files"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The FILOOP routine iterates through a list of files, displaying their names to the user. It uses a combination of pointer manipulation and loop instructions to traverse the list efficiently. This routine reflects the importance of file management in MS-DOS, where users often relied on command-line tools to navigate and manage files. The technique of iterating through file lists is still relevant today, forming the basis of directory traversal algorithms in modern file systems and programming languages."
  - id: "stchr-token-buffer-manipulation"
    line_start: 3051
    line_end: 3081
    title: "How MS-DOS Stored Tokens in Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The STCHR subroutine is responsible for transferring characters from an input buffer to a token buffer in memory. Using efficient assembly instructions like STOSB and MOVSW, it manipulates memory directly to store tokens while incrementing pointers and updating registers. At the time, memory was a precious resource, and routines like this were designed to minimize overhead while ensuring correctness. Tim Paterson and the Microsoft team aimed to create a flexible yet performant system for handling command-line input, inspired by Unix's approach to tokenization. This routine exemplifies the low-level control programmers had over hardware in the early 1980s, when every byte mattered. Techniques like these influenced later operating systems and programming environments, where efficient memory manipulation remained a cornerstone of performance optimization."
  - id: "cparse-command-parsing"
    line_start: 3131
    line_end: 3147
    title: "Parsing Commands: Handling Carriage Returns"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The CPARSE routine begins by saving flags and pointers, then checks for a carriage return (CR) in the input buffer. If a CR is found, it sets a condition code and adjusts pointers accordingly. This routine reflects the importance of handling control characters in command-line input, a critical feature for MS-DOS's usability. In the early 1980s, command-line interfaces were the primary way users interacted with computers, and parsing routines like CPARSE ensured smooth operation by interpreting user input correctly. The approach here laid the groundwork for robust command parsing in later systems, including Windows and Unix-like shells."
  - id: "sj2-switch-character-handling"
    line_start: 3165
    line_end: 3183
    title: "Switch Characters: A Unix-Inspired Feature"
    wikipedia_url: "https://en.wikipedia.org/wiki/Unix"
    image_url: ""
    image_caption: ""
    content: "The sj2 routine checks if the current character is a switch character, a concept borrowed from Unix command-line syntax. If it is, the routine processes the character and flags it as a switch. This feature allowed MS-DOS to support more complex command-line arguments, enhancing its flexibility compared to earlier versions. The inclusion of switch characters in MS-DOS v2.0 reflects Microsoft's effort to align the operating system with Unix-inspired design principles, making it more appealing to developers familiar with Unix-like environments. This feature influenced the development of command-line tools and scripting languages that rely on similar syntax."
  - id: "anum-char-alphanumeric-processing"
    line_start: 3187
    line_end: 3215
    title: "Processing Alphanumeric Input Efficiently"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tokenization"
    image_url: ""
    image_caption: ""
    content: "The anum_char routine processes alphanumeric strings by storing characters in the token buffer and checking for delimiters like spaces, tabs, and commas. This routine ensures that tokens are correctly identified and stored for further processing. In the constrained environment of MS-DOS v2.0, efficient parsing routines like this were vital for handling user input without wasting memory or CPU cycles. The design of this routine reflects the influence of Unix tokenization techniques, which Microsoft adapted for the IBM PC's hardware limitations. The principles demonstrated here were later applied to scripting languages and text processing tools, such as Perl and Python."
  - id: "kill-bl-strip-whitespace"
    line_start: 3245
    line_end: 3267
    title: "Stripping Whitespace: A Simple Yet Crucial Task"
    wikipedia_url: "https://en.wikipedia.org/wiki/Whitespace_character"
    image_url: ""
    image_caption: ""
    content: "The kill_bl routine removes whitespace characters like spaces, tabs, commas, and equals signs from the input buffer. By repeatedly loading and comparing characters, it ensures that only meaningful data remains for tokenization. This routine highlights the importance of preprocessing input in command-line environments, where extraneous characters can interfere with parsing. In the early 1980s, such routines were essential for maintaining the efficiency and reliability of text-based interfaces. The concept of stripping whitespace has since become a standard practice in programming, appearing in countless libraries and frameworks for text processing."
  - id: "move-char-store-token"
    line_start: 3273
    line_end: 3281
    title: "Storing Tokens: Incrementing with Precision"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tokenization"
    image_url: ""
    image_caption: ""
    content: "The move_char routine stores a character in the token buffer and increments the character count. Though simple, this routine is a critical part of the tokenization process, ensuring that each character is correctly placed and counted. In the context of MS-DOS v2.0, routines like move_char were designed to operate efficiently within the constraints of the IBM PC's hardware. This approach to token storage influenced later systems, where similar techniques were used in text editors, compilers, and data processing tools to handle user input and structured data."

---

```asm
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


```