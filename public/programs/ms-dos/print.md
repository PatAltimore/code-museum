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
description: "This file is part of MS-DOS v2.0's PRINT utility, enabling background printing of text files — a significant step in multitasking for early PCs."

summary:
  - point: "Introduces background printing via software and hardware interrupts"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Demonstrates interrupt-driven design for multitasking"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Highlights portability across devices with generic design"
    link: "https://en.wikipedia.org/wiki/Device_driver"
    link_label: "Device Drivers"
  - point: "Uses assembly-level optimizations for performance on constrained hardware"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Reflects early PC software's reliance on direct hardware manipulation"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "start-transient-jump"
    line_start: 235
    line_end: 245
    title: "A jump to transient code: initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The `START` label initializes the PRINT program by jumping to the transient code section. This jump sets the stage for the program's execution, ensuring that the transient portion of the PRINT utility begins immediately. In the early 1980s, programs like PRINT had to fit within the constraints of limited memory and CPU power. The transient-resident model allowed PRINT to load its transient portion into memory only when needed, freeing up resources for other tasks. This approach reflects the ingenuity required to manage multitasking on systems like the IBM PC, which launched with just 16 KB of RAM and a 4.77 MHz processor. The transient-resident architecture became a hallmark of MS-DOS utilities, balancing functionality with efficiency. This initialization sequence is a reminder of the careful planning required to make early PCs practical for business and personal use."
  - id: "istack-resident-data"
    line_start: 247
    line_end: 461
    title: "Resident data for interrupt-driven printing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `ISTACK` section defines the stack and resident data structures used by the PRINT utility. This data includes flags, counters, and pointers that enable the program to manage interrupts and track its state during background printing. In the early days of MS-DOS, interrupt-driven programming was a key technique for achieving multitasking. The PRINT utility uses both software interrupts (INT 28H) and hardware timer interrupts to ensure that printing continues even when other programs are running. By carefully managing these interrupts, the program avoids interfering with the user's workflow while maintaining efficient operation. The resident data structures also highlight the program's portability, as they are designed to work with generic devices rather than being tied to specific hardware. This flexibility was essential for MS-DOS, which was licensed to dozens of OEMs and had to support a wide range of configurations. The design choices made here laid the groundwork for future multitasking systems and influenced the development of device drivers and operating system architecture."
  - id: "srchmes-error-messages"
    line_start: 463
    line_end: 489
    title: "Error messages: communicating with the user"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "The `SRCHMES` section defines error messages displayed when the PRINT utility encounters issues, such as a file not found or an unassigned output device. These messages are crucial for user interaction, providing clear feedback on what went wrong and how to address it. In the early 1980s, user-friendly error handling was a relatively new concept in software design. Programs like PRINT had to balance technical accuracy with accessibility, ensuring that even non-technical users could understand and resolve problems. The inclusion of detailed error messages reflects the growing importance of usability in software development, a trend that would continue to shape the industry. By providing meaningful feedback, the PRINT utility helped users navigate the complexities of early PC computing, making the technology more approachable and practical for everyday use."
  - id: "int-17-hitlist-device-names"
    line_start: 491
    line_end: 503
    title: "Reserved device names for printing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Device_driver"
    image_url: ""
    image_caption: ""
    content: "The `INT_17_HITLIST` section lists reserved device names for parallel printers, such as 'PRN', 'LPT1', 'LPT2', and 'LPT3'. These names are used by the PRINT utility to identify and interact with connected printers. In the early days of personal computing, standardizing device names was essential for ensuring compatibility across different systems and peripherals. The IBM PC and MS-DOS established conventions like 'PRN' for printers and 'AUX' for auxiliary devices, which became industry standards. These conventions simplified software development and user configuration, reducing the complexity of setting up and using peripherals. The reserved names in this section highlight the importance of standardization in the evolution of computing, laying the foundation for the plug-and-play experience we take for granted today."
  - id: "hdspint-hardware-interrupt"
    line_start: 549
    line_end: 561
    title: "Hardware interrupt: keeping the printer active"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `HDSPINT` subroutine handles hardware timer interrupts, incrementing counters and checking whether it's time to process a printing task. This ensures that printing continues even during programs that do not generate software interrupts (INT 28H). In the early 1980s, hardware interrupts were a powerful tool for enabling multitasking on systems with limited resources. By using the timer interrupt, the PRINT utility can operate independently of the main program, maintaining background printing without disrupting the user's workflow. This approach reflects the ingenuity required to make early PCs capable of multitasking, a feature that was critical for their adoption in business environments. The use of hardware interrupts in PRINT demonstrates the evolution of operating system design, paving the way for more sophisticated multitasking and real-time systems."
  - id: "timenow-interrupt-synchronization"
    line_start: 563
    line_end: 609
    title: "Interrupt synchronization: avoiding conflicts"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The `TIMENOW` subroutine checks whether the system is busy with DOS calls before processing a printing task. If DOS is busy, the interrupt is chained to the next routine without interfering. This synchronization prevents conflicts between the PRINT utility and other system operations. In the constrained environment of early PCs, managing interrupts was a delicate balance. Programs like PRINT had to ensure that their background tasks did not disrupt the user's primary activities or cause system instability. The careful handling of interrupts in this subroutine reflects the challenges of designing reliable software for early operating systems. These techniques influenced the development of modern interrupt handling, which remains a critical aspect of system design."
  - id: "spint-software-interrupt"
    line_start: 621
    line_end: 653
    title: "Software interrupt: INT 28H entry point"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The `SPINT` subroutine handles the software interrupt INT 28H, which is generated by DOS during I/O wait loops. This interrupt allows the PRINT utility to process background printing tasks while the system is idle. INT 28H was a key feature of MS-DOS, enabling multitasking in an environment that was not inherently designed for it. By leveraging this interrupt, the PRINT utility could operate efficiently without requiring dedicated system resources. This design reflects the resource constraints of early PCs, where every byte of memory and CPU cycle had to be carefully allocated. The use of INT 28H in PRINT demonstrates the creative solutions employed by software developers to extend the capabilities of early operating systems, laying the groundwork for more advanced multitasking features in later versions of MS-DOS and other systems."
  - id: "disk-error-handling-dskerr"
    line_start: 1019
    line_end: 1071
    title: "Disk Error Handling: DSKERR Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The DSKERR routine is responsible for handling disk errors and providing user feedback. It begins by checking the abort flag (`PABORT`) to determine whether the system should ignore the error or proceed with handling it. The routine saves the current state of registers, switches the data segment to the error message segment, and prints the appropriate error message using `LISTMES`. In 1983, when MS-DOS v2.0 was released, disk errors were a common occurrence due to the fragility of floppy disks and the limited reliability of early hard drives. Tim Paterson and the Microsoft team designed these routines to ensure users were informed of issues without crashing the system. The decision to provide detailed error messages reflects the influence of Unix-like systems, which inspired MS-DOS v2.0's design. These routines laid the groundwork for error handling in subsequent operating systems, ensuring robust user interaction during critical failures."
  - id: "communication-interrupt-spcomint"
    line_start: 1163
    line_end: 1199
    title: "Managing Communication Interrupts: SPCOMINT"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The SPCOMINT routine handles interrupts for communication devices, ensuring system stability during data transmission. It checks whether the communication channel is busy (`CBUSY`) and either processes the interrupt or defers it. The routine saves the state of registers, switches the data segment, and prepares for further processing. In the early 1980s, communication devices like serial ports were critical for connecting peripherals such as printers and modems. MS-DOS needed efficient interrupt handling to manage these devices without overwhelming the system's limited resources. The SPCOMINT routine exemplifies the low-level control required to manage hardware directly, a necessity in an era when operating systems had to function within the constraints of machines like the IBM PC, which often had only 64KB to 256KB of RAM. This approach influenced future operating systems, which continued to rely on interrupt-driven designs for device management."
  - id: "error-message-printing-listmes"
    line_start: 1697
    line_end: 1709
    title: "Printing Error Messages: LISTMES Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/IBM_PC"
    image_url: ""
    image_caption: ""
    content: "The LISTMES routine is responsible for printing error messages to the screen. It iterates through a string of characters, checking for a termination character (`$`) and calling the `LOUT` routine to output each character. This routine exemplifies the simplicity and efficiency required in MS-DOS's design, as it operates directly on memory to display messages. In the early 1980s, user feedback was crucial for diagnosing issues, especially on systems with no graphical interface. The LISTMES routine ensured users were informed of errors in a clear and concise manner, a necessity for the IBM PC's target audience of business professionals and hobbyists. This approach to error reporting influenced the development of user-friendly interfaces in later operating systems, which continued to prioritize clear communication during system failures."
  - id: "bios-interface-int13"
    line_start: 1887
    line_end: 1903
    title: "BIOS Interface: INT_13 Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS"
    image_url: ""
    image_caption: ""
    content: "The INT_13 routine interacts directly with the BIOS to manage disk operations. It prepares the system for a BIOS call by saving the current state, incrementing the busy flag (`BUSY`), and setting up the stack for the BIOS interrupt. This routine highlights the close relationship between MS-DOS and the underlying hardware, as the operating system relied on BIOS routines to perform low-level tasks like reading and writing to disks. In 1983, this level of control was essential for compatibility across the diverse hardware ecosystem of IBM PCs and clones. The INT_13 routine reflects the modularity of MS-DOS, which allowed it to adapt to different hardware configurations—a key factor in its widespread adoption. This design philosophy influenced later operating systems, which continued to abstract hardware interactions while maintaining compatibility with legacy systems."
  - id: "timeout-and-error-handling-int14"
    line_start: 1985
    line_end: 2019
    title: "Timeout and Error Handling: INT_14 Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The INT_14 routine manages timeouts and errors for communication devices. It checks whether the device is busy or has pending operations and sets appropriate flags to indicate errors or timeouts. This routine demonstrates MS-DOS's ability to handle hardware-level issues gracefully, ensuring the system remains stable during communication failures. In the early 1980s, reliable communication was critical for tasks like printing and data transfer, and MS-DOS needed robust routines to manage these operations. The INT_14 routine reflects the operating system's focus on efficiency and reliability, traits that contributed to its success in the competitive PC market. This design philosophy influenced later systems, which continued to prioritize stability and error handling in communication protocols."
  - id: "int-5-interrupt-handler"
    line_start: 2039
    line_end: 2061
    title: "Interrupt 5: Handling Print Screen Requests"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The INT_5 subroutine is responsible for handling the Print Screen interrupt in MS-DOS. When triggered, it checks if there are pending tasks or if the interrupt is relevant to the current unit. If not, it pretends the operation succeeded and exits gracefully with an IRET instruction. In the early 1980s, interrupt-driven programming was essential for efficient device management on limited hardware. Tim Paterson and Microsoft engineers designed routines like this to handle specific hardware events without consuming excessive CPU cycles. This approach allowed MS-DOS to remain responsive while managing multiple devices. The INT_5 routine reflects the careful balance between simplicity and functionality that defined MS-DOS's design philosophy. Though interrupt-driven programming remains foundational, modern systems have evolved to use more sophisticated event-driven models."
  - id: "setup-resident-spooler"
    line_start: 2145
    line_end: 2183
    title: "SETUP: Installing the Resident Spooler"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident_program"
    image_url: ""
    image_caption: ""
    content: "The SETUP routine initializes the spooler as a Terminate and Stay Resident (TSR) program. It configures device vectors, prompts the user for a device name, and sets up interrupt handlers for communication and printing. TSR programs were a hallmark of MS-DOS, allowing small utilities to remain active in memory after execution. In 1983, this was a clever workaround for the lack of multitasking in MS-DOS. The spooler setup reflects the ingenuity required to provide background services on single-tasking systems. By installing interrupt vectors, SETUP ensures the spooler can respond to device events seamlessly. This technique influenced later DOS utilities and even early Windows services, showcasing the lasting impact of TSR programming."
  - id: "device-hitlist-check"
    line_start: 2325
    line_end: 2409
    title: "CHKHIT and CHKHIT2: Device Hitlist Logic"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_vector"
    image_url: ""
    image_caption: ""
    content: "CHKHIT and CHKHIT2 implement logic for checking device names against predefined hitlists. These routines determine which devices should be assigned specific interrupt vectors, such as printers or RS232 ports. In the early 1980s, device management was a critical challenge due to the diversity of hardware peripherals. MS-DOS's approach involved maintaining lists of supported devices and dynamically assigning interrupts based on user configuration. This flexibility allowed MS-DOS to adapt to various OEM hardware setups, contributing to its widespread adoption. The hitlist logic demonstrates how MS-DOS balanced simplicity with extensibility, enabling it to support a broad range of devices while remaining lightweight."
  - id: "parse-arguments-spooler"
    line_start: 2601
    line_end: 2661
    title: "PARSE: Configuring the Spooler via Arguments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The PARSE routine processes command-line arguments to configure the spooler. It supports switches for enabling or disabling specific features, such as canceling operations or setting termination behavior. Command-line interfaces were ubiquitous in the early 1980s, as graphical interfaces were still in their infancy. MS-DOS relied heavily on command-line tools for configuration and operation, reflecting the era's focus on efficiency and direct control. PARSE's design showcases the importance of user input validation and flexibility in software configuration. This routine laid the groundwork for more sophisticated argument parsing in later operating systems, influencing the evolution of command-line utilities."
  - id: "mvfnam-file-name-messages"
    line_start: 3019
    line_end: 3049
    title: "MVFNAM: Building File Name Messages"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "MVFNAM constructs messages containing file names for spooler feedback. It swaps segment registers to access file name data, processes the name, and appends it to a message buffer. File name handling was a critical aspect of MS-DOS's design, as it had to support various file systems and naming conventions. This routine reflects the low-level manipulation required to manage file data in assembly language. By providing clear feedback to users, MVFNAM enhances the spooler's usability, a key consideration in an era when user interfaces were minimal. The techniques used here influenced file handling in later DOS versions and other operating systems, showcasing the enduring importance of robust file system design."
  - id: "stchr-token-buffer-transfer"
    line_start: 3051
    line_end: 3127
    title: "Token buffer transfer: parsing essentials"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The STCHR routine is a foundational piece of MS-DOS's text processing capabilities. It transfers data between the input buffer and the token buffer, ensuring that characters are correctly parsed and stored for further processing. This section uses efficient 8086 assembly instructions like MOVSW and REP MOVSW to move blocks of data, reflecting the constraints of early PCs with limited memory and processing power. In 1983, when MS-DOS v2.0 was released, the IBM PC was equipped with an Intel 8088 processor and typically had 64KB to 256KB of RAM. Every byte mattered, and routines like STCHR were crafted to maximize efficiency while adhering to strict hardware limitations. The use of registers like DI and SI to manage pointers highlights the low-level nature of assembly programming, where developers had to manually manage memory and data flow. This routine's design echoes the Unix philosophy of small, modular components, as MS-DOS v2.0 incorporated ideas from Unix and XENIX. The legacy of such routines can be seen in modern programming, where efficient data transfer remains a critical aspect of software development."
  - id: "cparse-command-line-parsing"
    line_start: 3131
    line_end: 3147
    title: "Command-line parsing: handling carriage returns"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The CPARSE routine is responsible for parsing command-line input, identifying carriage returns (CR) and preparing tokens for further processing. This section begins with saving flags and token buffer pointers, ensuring that the parsing process does not disrupt the system state. The routine checks for CR characters, which signify the end of a command, and adjusts pointers accordingly. In the early 1980s, command-line interfaces were the primary method of interacting with computers, and parsing routines like CPARSE were vital for interpreting user input. Tim Paterson, the original author of 86-DOS, designed the system to be simple and efficient, and Microsoft expanded upon this foundation in MS-DOS v2.0. The use of assembly instructions like CMP and JNE reflects the low-level control programmers had over hardware, enabling precise and predictable behavior. This routine's focus on handling CR characters and managing token buffers demonstrates the importance of robust input parsing in operating systems, a concept that persists in modern software development."
  - id: "sj1-error-handling-cr-found"
    line_start: 3149
    line_end: 3161
    title: "Error handling: CR found in input"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The sj1 subroutine handles a specific error case: when a carriage return (CR) is found in the input buffer. It sets the condition code to 1, adjusts the input pointer, restores the token buffer address, and sets the carry flag to indicate the error. This meticulous handling of edge cases reflects the importance of reliability in early operating systems, where unexpected input could lead to crashes or undefined behavior. In the context of MS-DOS v2.0, robust error handling was crucial for maintaining system stability on hardware with limited resources. The subroutine's design highlights the programmer's attention to detail, ensuring that the system gracefully handles errors without compromising functionality. This approach to error handling laid the groundwork for more sophisticated techniques in later operating systems."
  - id: "sj2-switch-character-detection"
    line_start: 3165
    line_end: 3183
    title: "Switch character detection: Unix-inspired design"
    wikipedia_url: "https://en.wikipedia.org/wiki/Unix"
    image_url: ""
    image_caption: ""
    content: "The sj2 subroutine checks for the presence of a switch character, a concept borrowed from Unix command-line conventions. If the input character matches the switch character, it is processed and stored in the token buffer, and the condition code is set to indicate a switch. This design reflects the influence of Unix on MS-DOS v2.0, as Microsoft sought to incorporate features that would appeal to developers familiar with Unix-like systems. The use of assembly instructions like CMP and CALL demonstrates the programmer's ability to implement complex logic in a constrained environment. Switch characters remain a staple of command-line interfaces, enabling users to specify options and parameters for commands. This subroutine's implementation showcases the adaptability of MS-DOS to evolving user needs and its role in shaping modern computing paradigms."
  - id: "anum-char-alphanumeric-token-processing"
    line_start: 3187
    line_end: 3215
    title: "Alphanumeric token processing: parsing essentials"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tokenization"
    image_url: ""
    image_caption: ""
    content: "The anum_char subroutine processes alphanumeric strings, identifying tokens and storing them in the token buffer. It checks for delimiters like spaces, tabs, commas, and the switch character, ensuring that tokens are correctly parsed and terminated. This routine reflects the fundamental role of tokenization in command-line interfaces, where user input must be broken down into manageable components for execution. In the early 1980s, efficient parsing was critical for operating systems like MS-DOS, which had to operate within the constraints of limited memory and processing power. The use of assembly instructions like CMP and LODSB highlights the programmer's ability to implement complex logic in a low-level language. Tokenization remains a key concept in modern computing, influencing everything from programming languages to data processing frameworks."
  - id: "x-done-token-finalization"
    line_start: 3217
    line_end: 3221
    title: "Token finalization: marking the end"
    wikipedia_url: "https://en.wikipedia.org/wiki/Null-terminated_string"
    image_url: ""
    image_caption: ""
    content: "The x_done subroutine finalizes tokens by adjusting the input pointer and setting the condition code to indicate a normal token. This routine ensures that tokens are correctly terminated and ready for further processing. The use of null-terminated strings, a convention popularized by the C programming language, reflects the influence of Unix and C on MS-DOS v2.0. Null-terminated strings simplify string manipulation and remain a standard in modern programming. This subroutine's design highlights the programmer's attention to detail, ensuring that tokens are correctly processed and stored in the token buffer. The legacy of such routines can be seen in modern software development, where efficient string handling remains a critical aspect of system design."
  - id: "kill-bl-whitespace-removal"
    line_start: 3245
    line_end: 3265
    title: "Whitespace removal: optimizing input parsing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Whitespace_character"
    image_url: ""
    image_caption: ""
    content: "The kill_bl subroutine removes whitespace and delimiters from the input buffer, ensuring that tokens are cleanly parsed. It checks for spaces, tabs, commas, and equals signs, skipping over these characters until a valid token is found. This routine reflects the importance of efficient input parsing in early operating systems, where memory and processing power were limited. The use of assembly instructions like CMP and JE demonstrates the programmer's ability to implement complex logic in a constrained environment. Whitespace removal remains a fundamental aspect of text processing, influencing everything from command-line interfaces to web development. This subroutine's design showcases the programmer's ingenuity in optimizing input parsing for MS-DOS v2.0."
  - id: "move-char-token-buffer-storage"
    line_start: 3273
    line_end: 3279
    title: "Token buffer storage: efficient character handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "The move_char subroutine stores characters in the token buffer, incrementing the character count to keep track of the number of tokens. This routine reflects the importance of efficient buffer management in early operating systems, where memory was a scarce resource. The use of assembly instructions like STOSB and INC highlights the programmer's ability to implement precise and efficient logic in a low-level language. Buffer management remains a critical aspect of modern computing, influencing everything from network protocols to database systems. This subroutine's design showcases the programmer's attention to detail, ensuring that tokens are correctly stored and counted in the token buffer."

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