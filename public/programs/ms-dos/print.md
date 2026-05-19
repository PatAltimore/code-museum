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
description: "This file implements the MS-DOS PRINT utility, enabling background printing of text files—a key feature for multitasking in early PC environments."

summary:
  - point: "Uses software interrupt INT 28H for background printing"
    link: "https://en.wikipedia.org/wiki/Interrupt"
    link_label: "Interrupts"
  - point: "Introduces hardware timer interrupts for portability across devices"
    link: "https://en.wikipedia.org/wiki/Interrupt_handler"
    link_label: "Interrupt handler"
  - point: "Defines error handling and recovery mechanisms for printing failures"
    link: "https://en.wikipedia.org/wiki/Error_handling"
    link_label: "Error handling"
  - point: "Optimizes CPU usage via time-slicing techniques"
    link: "https://en.wikipedia.org/wiki/Time_slice"
    link_label: "Time slice"
  - point: "Warns developers against relying on version-specific vectors"
    link: "https://en.wikipedia.org/wiki/Backward_compatibility"
    link_label: "Backward compatibility"

enhancements:
  - id: "start-transient-jump"
    line_start: 235
    line_end: 237
    title: "Jump to Transient: Initialization Shortcut"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "The START label initializes the PRINT program by immediately jumping to the TRANSIENT section. This design reflects the modular nature of MS-DOS utilities, where transient and resident components are separated. The transient part handles user interactions and setup, while the resident part stays in memory to manage background tasks. In the early 1980s, this approach was crucial for conserving memory on systems with limited resources, such as the IBM PC with its 64KB to 640KB RAM. By offloading non-essential components, developers ensured that PRINT could coexist with other programs. This modular design influenced later multitasking systems and utilities, laying groundwork for more sophisticated background processes in operating systems like Windows and Linux."
  - id: "istack-resident-data"
    line_start: 247
    line_end: 405
    title: "Resident Data: Persistent State Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Resident_program"
    image_url: ""
    image_caption: ""
    content: "The ISTACK section defines the stack and resident data structures for the PRINT program. These include flags, counters, and pointers that persist across interrupts, enabling PRINT to manage background printing efficiently. For example, the SLICECNT variable controls the time slice for CPU usage, while the BUSY flag prevents reentrant interrupts. This approach reflects the constraints of early PCs, where memory and processing power were scarce. By maintaining a minimal resident footprint, PRINT could perform background tasks without significantly impacting foreground applications. The concept of resident programs became a hallmark of MS-DOS, influencing the design of TSR (Terminate and Stay Resident) utilities and later operating systems' background services."
  - id: "srchmes-error-messages"
    line_start: 463
    line_end: 483
    title: "Error Messages: User Feedback Mechanism"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "The SRCHMES section defines error messages displayed when the PRINT program encounters issues, such as a missing file or an unassigned output device. These messages are stored as string literals and include formatting characters like carriage returns and line feeds. In the early 1980s, user-friendly error reporting was a novel concept, as many programs simply crashed or displayed cryptic codes. By providing clear, actionable feedback, PRINT improved usability and set a precedent for future software design. This emphasis on user experience influenced later operating systems and applications, where informative error messages became standard practice."
  - id: "hardware-interrupt-entry"
    line_start: 549
    line_end: 561
    title: "Hardware Interrupt Entry: Timer-Based Printing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt_handler"
    image_url: ""
    image_caption: ""
    content: "The HDSPINT section handles hardware timer interrupts, incrementing counters and determining when to process printing tasks. This mechanism ensures that PRINT continues to function even when software interrupts (INT 28H) are unavailable. By leveraging hardware interrupts, PRINT achieves greater portability across devices, as it can adapt to different timer rates and configurations. In the early PC era, this approach was innovative, enabling background tasks to run independently of the main program loop. The use of hardware interrupts influenced later systems, such as real-time operating systems and embedded applications, where precise timing is critical."
  - id: "soft-int-entry"
    line_start: 621
    line_end: 653
    title: "INT 28H Entry: Software Interrupt for Printing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "The SPINT section handles software interrupts (INT 28H), which are generated during DOS I/O wait loops. This entry point allows PRINT to perform background tasks while the system is idle, optimizing CPU usage. The BUSY and SOFINT flags prevent conflicts between hardware and software interrupts, ensuring smooth operation. In the early 1980s, this technique was a clever workaround for the lack of multitasking support in MS-DOS. By integrating with DOS's interrupt system, PRINT demonstrated how utilities could extend the operating system's capabilities. This approach influenced later multitasking designs, including cooperative and preemptive scheduling in modern operating systems."
  - id: "buffer-management"
    line_start: 909
    line_end: 997
    title: "Buffer Management: Efficient Data Handling"
    wikipedia_url: "https://en.wikipedia.org/wiki/Data_buffer"
    image_url: ""
    image_caption: ""
    content: "The READBUFF section manages the data buffer used for printing, including setting up DMA (Direct Memory Access) and handling file reads. By optimizing buffer usage, PRINT minimizes disk I/O and ensures smooth operation. The use of DMA reflects the hardware capabilities of early PCs, where direct memory access was essential for high-performance applications. This section also includes error handling, restoring interrupt vectors and DMA addresses after a read operation. The buffer management techniques demonstrated here influenced later software, including print spoolers and data processing utilities, where efficient handling of large data sets is critical."
  - id: "disk-error-handling-dskerr"
    line_start: 1019
    line_end: 1071
    title: "Disk Error Handling: DSKERR Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_detection_and_correction"
    image_url: ""
    image_caption: ""
    content: "The DSKERR routine is responsible for handling disk errors and user aborts. It begins by checking the PABORT flag to determine if an abort has been requested. If not, it saves the current state of various registers and switches the data segment (DS) and extra segment (ES) to the appropriate values for error handling. It then adjusts the drive letter and calls LISTMES to display error messages. The routine includes logic to handle specific error codes, such as FAT errors, and ensures proper cleanup by restoring registers before exiting. In 1983, disk errors were a common issue due to the unreliability of floppy disks and early hard drives. This routine reflects the need for robust error handling in operating systems of the era. The approach influenced later operating systems by emphasizing user feedback and system recovery during hardware failures. Modern systems continue to build on these principles, offering detailed error messages and recovery options."
  - id: "error-message-display-havcod"
    line_start: 1073
    line_end: 1109
    title: "Error Message Display: HAVCOD Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_message"
    image_url: ""
    image_caption: ""
    content: "The HAVCOD routine retrieves and displays error messages based on error codes. It calculates the pointer to the appropriate message in the MESBAS table and calls LISTMES to print the message. This routine also handles file-specific errors by appending file names to the error messages. In the early 1980s, providing meaningful error messages was critical for user experience, as most users were not technically proficient. Tim Paterson's design ensured that MS-DOS could communicate issues effectively, a feature that became standard in operating systems. The concept of error codes and message tables influenced later systems, including Windows, which expanded upon this idea with more detailed error reporting mechanisms."
  - id: "abort-handling-setabort"
    line_start: 1111
    line_end: 1129
    title: "Abort Handling: SETABORT Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Abort_(computing)"
    image_url: ""
    image_caption: ""
    content: "SETABORT increments the PABORT flag to indicate that an abort has been requested. It then restores the saved state of registers and exits. This routine is part of MS-DOS's approach to handling user-initiated interruptions, ensuring that the system can gracefully recover from unexpected events. In the constrained environment of the 8086 processor, efficient handling of aborts was essential to maintain system stability. The technique of using flags to manage state transitions influenced later operating systems, which adopted similar mechanisms for handling interrupts and aborts."
  - id: "communications-interrupt-spcomint"
    line_start: 1161
    line_end: 1199
    title: "Communications Interrupt: SPCOMINT Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "SPCOMINT handles communications interrupts by checking the CBUSY flag to determine if the system is busy. If not, it sets the flag and processes the interrupt, saving the state of registers and switching the data segment (DS). The routine includes logic to add files or cancel file operations based on the value of the AH register. In the early 1980s, interrupt-driven programming was a cornerstone of efficient system design, allowing MS-DOS to respond quickly to hardware events. This approach influenced later systems by demonstrating the importance of prioritizing hardware interactions and managing system state during interrupts."
  - id: "file-counting-setcount"
    line_start: 1201
    line_end: 1209
    title: "File Counting: SETCOUNT Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "SETCOUNT counts the number of valid file control blocks (FCBs) in memory by iterating through the NUMFCBS table. It increments the AH register for each valid entry and saves the AL register for return. This routine is an example of MS-DOS's file management capabilities, which were inspired by CP/M and Unix. Efficient file handling was critical for the success of MS-DOS, as it needed to support a wide range of applications and hardware configurations. The concept of FCBs influenced later file systems, which adopted more sophisticated data structures for managing files and directories."
  - id: "bios-interface-int13"
    line_start: 1887
    line_end: 1903
    title: "BIOS Interface: INT_13 Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/BIOS_interrupt_call"
    image_url: ""
    image_caption: ""
    content: "INT_13 is a BIOS interrupt routine that handles disk operations. It pushes the current state onto the stack, increments the BUSY flag, and redirects the interrupt to the real INT_13 handler. This routine reflects MS-DOS's reliance on BIOS for hardware interactions, a design choice that simplified development but limited portability. By abstracting hardware operations through BIOS interrupts, MS-DOS enabled compatibility across different hardware platforms. This approach influenced later operating systems, which adopted similar abstraction layers to manage hardware interactions."
  - id: "printer-interface-int17"
    line_start: 1939
    line_end: 1969
    title: "Printer Interface: INT_17 Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Printer_(computing)"
    image_url: ""
    image_caption: ""
    content: "INT_17 handles printer operations by checking the status of the current file and the INT_17_NUM flag. If the printer is busy or the file is not associated with the current unit, it sets the AH register to indicate a timeout or error. This routine demonstrates MS-DOS's ability to interface with peripheral devices, a critical feature for business applications. The design influenced later systems, which expanded support for printers and other peripherals, enabling more complex interactions and higher reliability."
  - id: "serial-interface-int14"
    line_start: 1985
    line_end: 2019
    title: "Serial Interface: INT_14 Routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Serial_port"
    image_url: ""
    image_caption: ""
    content: "INT_14 handles serial port operations, checking the status of the current file and the INT_14_NUM flag. If the serial port is busy or the file is not associated with the current unit, it sets the AH register to indicate a timeout or error. Serial communication was essential for early PCs, enabling connections to modems, printers, and other devices. MS-DOS's support for serial ports influenced later operating systems, which expanded serial communication capabilities to support networking and remote access."
  - id: "interrupt-handler-int-5"
    line_start: 2039
    line_end: 2061
    title: "Handling Print Screen Interrupt (INT 5)"
    wikipedia_url: "https://en.wikipedia.org/wiki/Interrupt"
    image_url: ""
    image_caption: ""
    content: "This section handles the Print Screen interrupt (INT 5), a function that allows users to capture the screen's contents and send them to the printer. The code checks whether there is a pending operation, verifies the unit number, and either proceeds to handle the interrupt or pretends it succeeded using an IRET instruction. In the early 1980s, printers were slow and often required careful coordination with the CPU. Tim Paterson's approach reflects the need to balance simplicity with functionality in MS-DOS's interrupt handling. This technique influenced later operating systems by demonstrating how to manage hardware interrupts efficiently, especially for devices like printers and screens."
  - id: "resident-program-setup"
    line_start: 2145
    line_end: 2183
    title: "Setting Up Resident Program for Device Management"
    wikipedia_url: "https://en.wikipedia.org/wiki/Terminate_and_Stay_Resident"
    image_url: ""
    image_caption: ""
    content: "The SETUP routine installs a resident program to manage devices. It initializes interrupt vectors, displays prompts, and processes user input for device names. The resident program uses Terminate and Stay Resident (TSR) techniques, which allow it to remain in memory after execution. TSR programs were a hallmark of MS-DOS, enabling background tasks like device management in an environment without multitasking. This section highlights the ingenuity required to work within the constraints of early PCs, where memory was scarce, and software had to be efficient. TSR techniques inspired similar functionality in later systems, such as background services in modern operating systems."
  - id: "device-name-uppercase"
    line_start: 2305
    line_end: 2317
    title: "Ensuring Device Names Are Uppercase"
    wikipedia_url: "https://en.wikipedia.org/wiki/ASCII"
    image_url: ""
    image_caption: ""
    content: "The CONLP routine ensures that device names are converted to uppercase, a requirement for consistency in MS-DOS's file and device naming conventions. This conversion uses ASCII values to check and adjust lowercase characters. In the early 1980s, case sensitivity was often avoided in operating systems to simplify user interactions and reduce errors. This approach influenced the design of file systems in many subsequent operating systems, where case-insensitive naming became a common feature, particularly in consumer-facing environments."
  - id: "argument-parsing"
    line_start: 2601
    line_end: 2621
    title: "Parsing User Arguments for Device Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The PARSE routine processes user-provided arguments, identifying switches and commands for device operations. It uses a combination of string manipulation and comparison to determine the user's intent. This functionality reflects the importance of command-line interfaces (CLIs) in early computing, where users interacted with the system primarily through textual commands. The ability to parse and act on user input efficiently was crucial for MS-DOS's success. Techniques like these laid the groundwork for more sophisticated argument parsing in later systems, including Unix shells and modern scripting languages."
  - id: "error-handling-messages"
    line_start: 2889
    line_end: 2915
    title: "Error Handling and Messaging for Device Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The SRCHBAD routine handles errors encountered during device operations, displaying messages to inform the user of the issue. It uses predefined strings and interrupt calls to output error messages. In the constrained environment of early PCs, clear error messaging was vital for user experience, as debugging tools were limited. This approach influenced later systems by emphasizing the importance of user-friendly error handling, a principle that remains central to software design today."
  - id: "file-list-processing"
    line_start: 2977
    line_end: 2999
    title: "Processing File Lists for Device Operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_Control_Block"
    image_url: ""
    image_caption: ""
    content: "The FILOOP routine iterates through a list of files associated with a device, processing each file and displaying relevant information. It uses File Control Blocks (FCBs), a data structure central to MS-DOS's file management. FCBs were a direct adaptation from CP/M, reflecting the influence of earlier systems on MS-DOS's design. This section demonstrates the importance of efficient file handling in an operating system, a concept that evolved into more sophisticated file systems like FAT and NTFS in later Microsoft products."
  - id: "file-name-message"
    line_start: 3017
    line_end: 3049
    title: "Creating Messages with File Names"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The MVFNAM routine generates messages that include file names, using string manipulation and ASCII adjustments. This functionality highlights the importance of integrating file system operations with user communication. By ensuring file names are correctly formatted and displayed, MS-DOS provided a more intuitive experience for users. Techniques like these influenced the development of user-friendly file management tools in later operating systems, bridging the gap between technical operations and user interaction."
  - id: "stchr-token-buffer-management"
    line_start: 3051
    line_end: 3081
    title: "Token buffer management with STCHR routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tokenization"
    image_url: ""
    image_caption: ""
    content: "The STCHR routine is responsible for managing the transfer of characters from an input buffer to a token buffer. It uses efficient memory operations like STOSB, INC, and REP MOVSW to move data quickly between buffers. This routine also adjusts segment registers (DS and ES) to ensure proper memory access, reflecting the segmented memory model of the Intel 8086 architecture. At the time, MS-DOS v2.0 was designed to handle command-line parsing efficiently, inspired by Unix-like systems. The use of REP MOVSW highlights the programmer's focus on optimizing performance for constrained hardware environments, such as the IBM PC with limited memory and processing power. This approach influenced later software systems by demonstrating how low-level memory operations could be leveraged for high-speed parsing tasks, laying groundwork for efficient command-line interpreters in subsequent operating systems."
  - id: "cparse-command-parsing"
    line_start: 3131
    line_end: 3147
    title: "Command parsing entry point: CPARSE"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The CPARSE routine serves as the entry point for parsing command-line input. It begins by saving flags and buffer addresses, then initializes the character count in the token buffer. The routine calls kill_bl to remove extraneous whitespace and checks for carriage return (CR) characters to determine if the input is complete. This reflects the necessity of handling diverse input formats in MS-DOS, where users interacted with the operating system primarily through the command line. CPARSE's design showcases the influence of Unix's text-processing philosophy, adapted to the constraints of the IBM PC's hardware. By modularizing parsing logic into distinct routines, MS-DOS v2.0 set a precedent for structured command-line processing, influencing later systems like Windows Command Prompt and Linux shells."
  - id: "sj1-cr-handling"
    line_start: 3149
    line_end: 3161
    title: "Handling carriage return with sj1"
    wikipedia_url: "https://en.wikipedia.org/wiki/Carriage_return"
    image_url: ""
    image_caption: ""
    content: "The sj1 subroutine is a specialized handler for carriage return (CR) characters encountered during parsing. It sets a condition code, adjusts the input pointer, and restores saved flags and buffer addresses. The carry flag is set to indicate the presence of a CR, signaling the end of input processing. This routine highlights the importance of robust input handling in MS-DOS, where CR characters were integral to marking the end of user commands. By addressing this specific case, sj1 ensures that command parsing remains accurate and efficient, a necessity for early personal computers with limited resources. This approach influenced later systems by demonstrating the value of dedicated routines for handling control characters, contributing to the reliability of command-line interfaces in modern operating systems."
  - id: "sj2-switch-character-handling"
    line_start: 3165
    line_end: 3183
    title: "Switch character handling in sj2"
    wikipedia_url: "https://en.wikipedia.org/wiki/Command-line_interface"
    image_url: ""
    image_caption: ""
    content: "The sj2 routine processes switch characters, which are used to modify command behavior in MS-DOS. It compares the current character with the system-defined switch character, calling kill_bl to remove extraneous whitespace and move_char to store the switch character in the token buffer. This routine assigns a condition code to indicate the presence of a switch character, ensuring that subsequent parsing logic can handle it appropriately. Switch characters were a key feature of MS-DOS's command-line interface, enabling users to specify options for commands. The modular design of sj2 reflects the influence of Unix-like systems, where similar mechanisms were used for command-line options. This approach contributed to the evolution of command-line interfaces, influencing systems like Windows PowerShell and Linux shells, which continue to use switch characters for command customization."
  - id: "anum-char-alphanumeric-parsing"
    line_start: 3187
    line_end: 3215
    title: "Parsing alphanumeric strings with anum_char"
    wikipedia_url: "https://en.wikipedia.org/wiki/String_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The anum_char routine handles the parsing of alphanumeric strings, storing characters in the token buffer and checking for delimiters like spaces, tabs, commas, and control characters. It uses a loop to process each character, ensuring that the input is tokenized correctly. This routine demonstrates the importance of flexible string handling in MS-DOS, where user commands often included complex input formats. By modularizing string parsing, MS-DOS v2.0 achieved a level of robustness and efficiency that was crucial for early personal computers. The techniques used in anum_char influenced later systems by showcasing how assembly language could be used to implement efficient string processing, contributing to the development of text-processing utilities in modern operating systems."
  - id: "kill-bl-whitespace-removal"
    line_start: 3245
    line_end: 3265
    title: "Whitespace removal with kill_bl"
    wikipedia_url: "https://en.wikipedia.org/wiki/Whitespace_character"
    image_url: ""
    image_caption: ""
    content: "The kill_bl routine removes extraneous whitespace characters, including spaces, tabs, commas, and equals signs, from the input buffer. It uses a loop to skip over these characters, ensuring that the token buffer contains only meaningful input. This routine reflects the necessity of preprocessing user input in MS-DOS, where commands often included unnecessary whitespace. By streamlining input processing, kill_bl contributed to the efficiency of command parsing in MS-DOS v2.0. The modular design of this routine influenced later systems by demonstrating the value of dedicated preprocessing functions, paving the way for text-processing utilities in modern operating systems like grep and sed."
  - id: "move-char-token-buffer-storage"
    line_start: 3273
    line_end: 3279
    title: "Storing characters in the token buffer: move_char"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The move_char routine stores individual characters in the token buffer and increments the character count. This simple yet essential function ensures that parsed input is stored correctly for further processing. The use of STOSB and INC highlights the efficiency of assembly language for low-level operations. In the context of MS-DOS v2.0, move_char played a crucial role in enabling accurate command parsing, a necessity for early personal computers with limited resources. The modular design of this routine influenced later systems by demonstrating how assembly language could be used to implement efficient buffer management, contributing to the development of robust text-processing utilities in modern operating systems."

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