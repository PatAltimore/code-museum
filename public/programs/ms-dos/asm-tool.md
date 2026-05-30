---
title: "ASM.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v1.25/source/ASM.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v1.25/source/ASM.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "asm-tool"
order: 11
description: "This file contains the source code for MS-DOS's assembler, a critical tool in the early PC software ecosystem."

summary:
  - point: "Defines constants and system call codes for assembler operations"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Implements a lexical scanner for parsing assembly language tokens"
    link: "https://en.wikipedia.org/wiki/Lexical_analysis"
    link_label: "Lexical Analysis"
  - point: "Includes routines for handling operands, expressions, and memory references"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly Language"
  - point: "Demonstrates early techniques for optimizing memory usage on limited hardware"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"
  - point: "Showcases Tim Paterson's contributions to early PC software development"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "revision-history-timeline"
    line_start: 1
    line_end: 33
    title: "Tracking the evolution of the assembler"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "These lines document the revision history of the assembler developed by Tim Paterson at Seattle Computer Products. The timeline spans from December 1980 to May 1983, showcasing iterative improvements such as increased buffer sizes, enhanced error reporting, and support for Intel's 8087 floating-point operations. This history provides a glimpse into the rapid development cycles of early PC software, driven by the constraints of limited hardware and the demands of emerging markets. The assembler evolved alongside MS-DOS, reflecting the growing complexity of software requirements as the IBM PC gained traction. These revisions highlight Paterson's ability to adapt and optimize under tight deadlines, a skill that would later influence Microsoft's dominance in the software industry."
  - id: "constant-definitions"
    line_start: 34
    line_end: 51
    title: "Constants that shaped the assembler's behavior"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This section defines key constants used throughout the assembler, such as buffer sizes, system call function codes, and token values for assembly language elements like registers and memory references. These constants reflect the constraints of early computing environments, where memory and processing power were limited. The inclusion of specific constants for 8087 floating-point operations and Intel string mnemonics highlights the assembler's role in supporting the evolving capabilities of the 8086 architecture. By abstracting these values, the code becomes more maintainable and adaptable, a practice that remains foundational in software development today."
  - id: "program-header"
    line_start: 68
    line_end: 70
    title: "The assembler's branding and copyright notice"
    wikipedia_url: "https://en.wikipedia.org/wiki/Tim_Paterson"
    image_url: ""
    image_caption: ""
    content: "These lines serve as the program's header, displaying the assembler's version, copyright information, and attribution to Seattle Computer Products. This branding reflects the era's emphasis on proprietary software and intellectual property, a trend that would later shape the software industry's business models. The inclusion of this header also underscores the assembler's role as a commercial product, designed to meet the needs of developers working on the 8086 architecture. Tim Paterson's name and Seattle Computer Products' branding highlight the origins of MS-DOS and its assembler, linking them to the rapid development of the IBM PC ecosystem."
  - id: "begin-initialization"
    line_start: 72
    line_end: 142
    title: "Setting up the assembler's runtime environment"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section initializes the assembler's runtime environment, setting up stack pointers, file buffers, and system calls. It includes logic for handling file extensions and drive letters, reflecting the constraints of early PC file systems. The code also prepares the assembler's internal data structures, such as the symbol table and relocation bytes. These initialization routines highlight the challenges of programming in assembly language, where every detail of memory management and hardware interaction must be explicitly defined. The techniques used here influenced later software development practices, including the design of higher-level languages and operating systems."
  - id: "loop-assemble-lines"
    line_start: 144
    line_end: 185
    title: "The loop that assembles each line of code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This loop processes each line of assembly code, calling subroutines to parse tokens, handle errors, and generate machine code. The logic reflects the assembler's role as a bridge between human-readable assembly language and the binary instructions understood by the 8086 CPU. By iterating through the source code line by line, the assembler ensures that each instruction is correctly translated and optimized for execution. This approach laid the groundwork for modern compilers, which automate the translation of high-level languages into machine code. The loop's structure also demonstrates the efficiency required in early software, where processing power and memory were scarce."
  - id: "operand-handling"
    line_start: 259
    line_end: 523
    title: "Decoding and validating operands"
    wikipedia_url: "https://en.wikipedia.org/wiki/Operand"
    image_url: ""
    image_caption: ""
    content: "This section includes routines for handling operands, checking their types, and validating their compatibility with the operation being performed. The code supports various operand types, including memory references, registers, and constants, reflecting the flexibility of the 8086 instruction set. By implementing detailed checks and validations, the assembler ensures that the generated machine code adheres to the CPU's requirements. These routines highlight the complexity of assembly language programming, where every operand must be precisely defined and matched to the operation. The techniques used here influenced the design of later assemblers and compilers, which automated many of these checks."
  - id: "expression-analyzer"
    line_start: 525
    line_end: 732
    title: "Analyzing expressions in assembly code"
    wikipedia_url: "https://en.wikipedia.org/wiki/Expression_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "This routine analyzes expressions in assembly code, handling arithmetic operations and computing addressing modes for memory references. The logic includes support for constants, undefined labels, and registers, reflecting the assembler's ability to parse complex operand fields. By breaking down expressions into their components and validating each part, the code ensures that the resulting machine instructions are correct and efficient. This approach influenced the development of expression parsers in modern programming languages, which automate the analysis and evaluation of code. The routine also demonstrates the challenges of programming in assembly, where every detail must be explicitly defined."
  - id: "lexical-scanner"
    line_start: 735
    line_end: 1019
    title: "Scanning tokens in assembly language"
    wikipedia_url: "https://en.wikipedia.org/wiki/Lexical_analysis"
    image_url: ""
    image_caption: ""
    content: "This routine implements a lexical scanner for parsing tokens in assembly language. It identifies constants, registers, and mode flags, returning detailed information about each token. The scanner's logic reflects the constraints of early computing, where parsing had to be efficient and memory usage minimized. By breaking down the source code into manageable tokens, the assembler simplifies the process of generating machine code. This technique influenced the design of later programming tools, including compilers and interpreters, which rely on lexical analysis to understand high-level languages. The scanner's efficiency and accuracy were critical to the assembler's performance, highlighting Tim Paterson's skill in optimizing software for limited hardware."
  - id: "identifier-tree-node-allocation"
    line_start: 1128
    line_end: 1181
    title: "How MS-DOS Managed Identifier Trees"
    wikipedia_url: "https://en.wikipedia.org/wiki/Heap_(data_structure)"
    image_url: ""
    image_caption: ""
    content: "This section implements the CREATE routine, which dynamically allocates nodes in an identifier tree. Each node contains metadata about an identifier, including its length, links to smaller and larger identifiers, and a data field for flags and values. The heap grows downward in memory, a common technique in early systems to maximize memory utilization. Tim Paterson designed this approach to manage identifiers efficiently within the constraints of the 8086 architecture, which lacked advanced memory management features. The identifier tree structure influenced later designs in compilers and interpreters, where similar techniques were used for symbol tables and syntax trees."
  - id: "opcode-parsing-8087-support"
    line_start: 1292
    line_end: 1346
    title: "Parsing Opcodes for the Intel 8087 Coprocessor"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8087"
    image_url: ""
    image_caption: ""
    content: "This section handles opcodes for the Intel 8087 Numeric Data Processor, a floating-point coprocessor introduced alongside the IBM PC. The code checks for 'FNWAIT' and other 8087-specific mnemonics, ensuring compatibility with both 'wait' and 'no-wait' forms. At the time, supporting the 8087 was critical for applications requiring high-performance mathematical operations, such as CAD software. This parsing logic reflects the growing importance of coprocessors in the early 1980s and laid the groundwork for integrating specialized instruction sets into general-purpose operating systems."
  - id: "dynamic-opcode-table"
    line_start: 1489
    line_end: 1503
    title: "The Lookup Table That Simplified Opcodes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Opcode"
    image_url: ""
    image_caption: ""
    content: "The FORMATTAB data table defines memory format combinations for opcodes, using a compact encoding scheme. Each entry specifies how operand types and addressing modes modify the opcode. This dynamic approach allowed MS-DOS to support a wide range of instructions without hardcoding every possibility. The use of lookup tables for opcode generation became a standard practice in assemblers and compilers, influencing tools like MASM and GCC. It reflects the ingenuity required to balance flexibility and efficiency in early software design."
  - id: "memory-addressing-modes"
    line_start: 1674
    line_end: 1698
    title: "Encoding Memory Addressing Modes in Assembly"
    wikipedia_url: "https://en.wikipedia.org/wiki/X86_instruction_listings"
    image_url: ""
    image_caption: ""
    content: "The PUTADD routine encodes memory addressing modes for instructions. It distinguishes between direct, indirect, and register-to-register operations, adding displacement bytes as needed. This level of detail was necessary to generate efficient machine code for the 8086 processor, which used segmented memory and had limited registers. The routine's careful handling of addressing modes highlights the challenges of assembly programming in an era when every byte mattered. Techniques like this influenced later assemblers and compilers, which automated such tasks for developers."
  - id: "inter-segment-indirect-jumps"
    line_start: 2001
    line_end: 2036
    title: "Handling Indirect Jumps Across Segments"
    wikipedia_url: "https://en.wikipedia.org/wiki/Segmented_memory"
    image_url: ""
    image_caption: ""
    content: "This section implements indirect jumps and calls, distinguishing between inter-segment and intra-segment operations. The segmented memory model of the 8086 required careful handling of segment registers and offsets. The code checks flags to determine whether a jump spans segments, adjusting the opcode accordingly. This logic reflects the complexities of programming in a segmented architecture, where memory management was a constant challenge. Techniques for handling segmented memory influenced later systems, including the transition to flat memory models in the 386 and beyond."
  - id: "output-line-formatting"
    line_start: 2511
    line_end: 2537
    title: "Formatting Output Lines for Debugging and Printing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "The OUTLIN routine formats and outputs assembler-generated lines to the console, printer, or file. It includes the line number and object code bytes, ensuring that developers can trace the program's execution. The routine sets a flag to prevent duplicate outputs and handles line breaks when necessary. In the early 1980s, developers relied on printed listings to debug and optimize their code. MS-DOS's assembler provided detailed output, making it easier to identify issues and understand program behavior. The inclusion of line numbers and formatted object code reflects the assembler's focus on usability. This feature influenced the design of debugging tools and IDEs, which often include similar output formatting for error logs and trace files. The concept of providing detailed, human-readable output remains a cornerstone of software development, helping developers navigate the complexities of programming."
  - id: "symbol-table-dump"
    line_start: 2683
    line_end: 2714
    title: "Dumping the Symbol Table: Recursive Tree Traversal"
    wikipedia_url: "https://en.wikipedia.org/wiki/Symbol_table"
    image_url: ""
    image_caption: ""
    content: "The SYMDMP routine outputs the assembler's symbol table, which maps variable names and labels to their memory addresses. It uses the NODE subroutine to traverse the symbol tree recursively, printing each symbol and its address. The routine ensures that the output fits within the line width, starting a new line when necessary. Symbol tables were essential for debugging and optimizing assembly code. They provided developers with a way to understand the program's structure and memory usage. The recursive traversal method used here is a classic algorithm, demonstrating the assembler's ability to handle complex data structures efficiently. This approach influenced the design of debugging tools and IDEs, which often include symbol table views for developers. Modern compilers generate symbol tables for use in debugging and profiling, continuing the legacy of MS-DOS's assembler. The recursive traversal algorithm remains a fundamental technique in computer science, used in applications ranging from database indexing to graphics rendering."
  - id: "error-reporting-routines"
    line_start: 2810
    line_end: 2839
    title: "The Error Messages That Saved Developers' Sanity"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section implements error reporting routines for the assembler. The REPERR subroutine checks for errors, increments the error count, and prints an appropriate error message. The ERRLOOK routine searches for a predefined error message in a table, using the error code as a key. If no message is found, the assembler prints the error number directly. In 1981, debugging assembly code was a challenging task. Developers often worked without sophisticated debugging tools, relying on error messages to identify and fix issues. Tim Paterson's inclusion of detailed error reporting in MS-DOS's assembler was a significant usability improvement, helping developers navigate the complexities of low-level programming. This error reporting mechanism influenced the design of debugging tools and compilers in subsequent decades. The concept of associating error codes with human-readable messages became standard practice, appearing in systems like Windows, Linux, and modern programming languages. The legacy of these routines can be seen in the structured error handling found in today's software development environments."
  - id: "hex-file-output"
    line_start: 2917
    line_end: 2937
    title: "Writing HEX Files: A Window into Early Software Distribution"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "The WRTHEX subroutine writes HEX file output, a format used to store machine code in a human-readable form. It calculates the length of the buffer, sets the DMA address, and writes the data to disk using the BLKWRT interrupt. The routine also checks for disk errors, ensuring the integrity of the output. HEX files were crucial for software distribution in the early 1980s. Developers used them to transfer programs to EPROMs or share software between systems. The Intel HEX format, introduced in the 1970s, became a standard for this purpose. MS-DOS's support for HEX file generation reflects its role as a foundational tool for software development. The use of HEX files persisted into the 1990s, particularly in embedded systems programming. While modern software distribution relies on binary formats and network-based delivery, HEX files remain relevant in specific domains, such as microcontroller programming. The routines in MS-DOS's assembler exemplify the adaptability of early software tools to diverse use cases."
  - id: "mnemonic-handling-tables"
    line_start: 2977
    line_end: 3718
    title: "How Mnemonics Were Mapped to Machine Code"
    wikipedia_url: "https://en.wikipedia.org/wiki/X86_instruction_listings"
    image_url: ""
    image_caption: ""
    content: "This section defines the mnemonic tables used by the assembler to translate human-readable assembly instructions into machine code. Each subtable corresponds to a group of mnemonics, such as 'A3' for three-letter mnemonics starting with 'A'. The tables include the mnemonic string, a reference to the corresponding handling routine (e.g., GRP7, PUT), and the opcode value. This design allowed the assembler to efficiently parse and process instructions while maintaining flexibility for future extensions. In 1981, the IBM PC launched with the Intel 8088 processor, which used the x86 instruction set. The assembler had to support this instruction set comprehensively while fitting into the limited memory available on early PCs. Tim Paterson's design reflects the constraints of the era, where compactness and speed were paramount. The mnemonic tables are tightly packed, with each entry optimized for minimal memory usage. This approach influenced later assemblers and compilers, which adopted similar table-driven designs for instruction parsing. The mnemonic-to-opcode mapping became a standard feature in assemblers for various architectures, including ARM and RISC-V. The compact and efficient design seen here laid the groundwork for the development of more sophisticated tools, such as the MASM assembler and modern integrated development environments (IDEs)."
  - id: "mnemonic-table-8086"
    line_start: 3721
    line_end: 3864
    title: "How Mnemonics Simplified Assembly Programming"
    wikipedia_url: "https://en.wikipedia.org/wiki/Assembly_language"
    image_url: ""
    image_caption: ""
    content: "This section defines the OPTAB, a mnemonic table for 8086 instructions, organized by starting letter and length. Mnemonics are human-readable representations of machine instructions, such as 'MOV' for moving data or 'ADD' for addition. The table maps these mnemonics to their corresponding opcode groups, enabling efficient parsing during assembly. In the early 1980s, assembly programming was the norm for system-level software, and mnemonic tables like this were essential for simplifying the process. Tim Paterson likely designed this table to streamline the assembler's operation, ensuring it could quickly interpret and compile source code into executable binaries. Mnemonic tables became a standard feature in assemblers, influencing later tools like MASM and Turbo Assembler. They also laid the groundwork for higher-level programming languages by abstracting machine instructions into more manageable forms."
  - id: "8087-mnemonic-table"
    line_start: 3866
    line_end: 3894
    title: "Floating-Point Instructions for the 8087 Coprocessor"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_8087"
    image_url: ""
    image_caption: ""
    content: "The NDPTAB section defines mnemonics for the 8087 floating-point coprocessor, mapping instructions like 'FADD' (floating-point addition) and 'FMUL' (floating-point multiplication) to their opcode groups. The 8087 was introduced alongside the 8086 to handle complex mathematical operations, which were computationally expensive on the main CPU. By integrating 8087 support into the assembler, Tim Paterson ensured MS-DOS could leverage the coprocessor's capabilities for tasks like scientific computing and graphics. This design decision reflects the growing importance of floating-point arithmetic in the early 1980s, a trend that influenced later processors like the Intel 486 and Pentium. The 8087 mnemonic table also set a precedent for supporting specialized hardware in software development, a practice that continues in modern compilers and operating systems."
  - id: "error-message-table"
    line_start: 3896
    line_end: 3931
    title: "The Error Messages That Saved Debugging Time"
    wikipedia_url: "https://en.wikipedia.org/wiki/Debugging"
    image_url: ""
    image_caption: ""
    content: "The ERRTAB section defines error messages for the assembler, providing clear diagnostics for common issues like 'Label defined twice' or 'Opcode not recognized.' These messages were crucial in the early days of programming, where debugging tools were minimal and developers relied heavily on assembler feedback. Tim Paterson's inclusion of detailed error messages reflects his understanding of the challenges faced by programmers working close to the hardware. By offering specific and actionable diagnostics, this table reduced debugging time and improved code reliability. Error handling in assemblers influenced later software development practices, including the design of integrated development environments (IDEs) with real-time error checking and debugging support."
  - id: "symbol-table-data-structures"
    line_start: 3933
    line_end: 4003
    title: "The Memory Layout That Powered MS-DOS"
    wikipedia_url: "https://en.wikipedia.org/wiki/Symbol_table"
    image_url: ""
    image_caption: ""
    content: "This section contains data structures for managing symbols, buffers, and memory in the assembler. Key variables like SYMFLG, SYMLIN, and SYMSIZE track the symbol table's state, while HEXBUF and LSTBUF handle hex and list file outputs. These structures reveal how MS-DOS managed its limited memory resources, a critical constraint in the early PC era. The IBM PC's 8086 processor supported only 1MB of addressable memory, forcing developers to optimize every byte. Tim Paterson's design demonstrates a mastery of efficient memory management, which became a hallmark of MS-DOS and influenced subsequent operating systems like Windows. The use of compact data structures and buffers also informed the development of modern memory management techniques in programming languages like C and C++."

---

```asm
; Seattle Computer Products 8086 Assembler  version 2.44
;   by Tim Paterson
; Runs on the 8086 under MS-DOS

;* * * * * * REVISION HISTORY * * * * * *
;
; 12/29/80  2.01  General release with 86-DOS version 0.34
; 02/22/81  2.10  Increased buffer size from 128 bytes to 1024 bytes
; 03/18/81  2.11  General cleanup and more documentation
; 03/24/81  2.20  Modify ESC handling for full 8087 operation
; 04/01/81  2.21  Fix date in HEX and PRN files; modify buffer handling
; 04/03/81  2.22  Fix 2.21 buffer handling
; 04/13/81  2.23  Re-open source file for listing to allow assembling CON:
; 04/28/81  2.24  Allow nested IFs
; 07/30/81  2.25  Add Intel string mnemonics; clean up a little
; 08/02/81  2.30  Re-write pass 2:
;			Always report errors to console
;			Exact byte lengths for HEX and PRN files
; 11/08/81  2.40  Add 8087 mnemonics; print full error messages;
;		  allow expressions with *, /, and ()
; 07/04/82  2.41  Fix Intel's 8087 "reverse-bit" bug; don't copy date
; 08/18/82  2.42  Increase stack from 80 to 256 (Damn! Overflowed again!)
; 01/05/83  2.43  Correct over-zealous optimization in 2.42
; 05/09/83  2.44  Add memory usage report
;
;* * * * * * * * * * * * * * * * * * * * *

SYMWID:	EQU	5	;5 symbols per line in dump
FCB:	EQU	5CH
BUFSIZ:	EQU	1024	;Source code buffer
LSTBUFSIZ:EQU	BUFSIZ	;List file buffer
HEXBUFSIZ:EQU	70	;Hex file buffer (26*2 + 5*2 + 3 + EXTRA)
EOL:	EQU	13	;ASCII carriage return
OBJECT:	EQU	100H	;DEFAULT "PUT" ADDRESS

;System call function codes
PRINTMES: EQU	9
OPEN:	EQU	15
CLOSE:	EQU	16
READ:	EQU	20
SETDMA:	EQU	26
MAKE:	EQU	22
BLKWRT:	EQU	40

;The following equates define some token values returned by GETSYM
UNDEFID:EQU	0	;Undefined identifier (including no nearby RET)
CONST:	EQU	1	;Constant (including $)
REG:	EQU	2	;8-bit register
XREG:	EQU	3	;16-bit register (except segment registers)
SREG:	EQU	4	;Segment register
FREG:	EQU	6	;8087 floating point register

;Bits to build 8087 opcode table entries
ONEREG:	EQU	40H	;Single ST register OK as operand
NEEDOP:	EQU	80H	;Must have an operand
INTEGER:EQU	20H	;For integer operations
REAL:	EQU	28H	;For real operations
EXTENDED EQU	10H	;For Long integers or Temporary real
MEMORY:	EQU	18H	;For general memory operations
STACKOP:EQU	10H	;Two register arithmetic with pop
ARITH:	EQU	8	;Non-pop arithmetic operations

	ORG	100H
	PUT	100H

	JMPS	BEGIN

HEADER:	DB	13,10,'Seattle Computer Products 8086 Assembler Version 2.44'
	DB	13,10,'Copyright 1979-1983 by Seattle Computer Products, Inc.'
	DB	13,10,13,10,'$'

BEGIN:
	MOV	SP,STACK
	MOV	DX,HEADER
	MOV	AH,PRINTMES
	INT	33
	MOV	AL,[FCB+17]
	MOV	[SYMFLG],AL	;Save symbol table request flag
	MOV	SI,FCB+9	;Point to file extension
	LODB			;Get source drive letter
	CALL	CHKDSK		;Valid drive?
	OR	AL,AL
	JZ	DEFAULT		;If no extension, use existing drive spec
	MOV	[FCB],AL
DEFAULT:
	LODB			;Get HEX file drive letter
	CMP	AL,'Z'		;Suppress HEX file?
	JZ	L0000
	CALL	CHKDSK
L0000:	
	MOV	[HEXFCB],AL
	LODB			;Get PRN file drive letter
	MOV	AH,0		;Signal no PRN file
	CMP	AL,'Z'		;Suppress PRN file?
	JZ	NOPRN
	CMP	AL,'Y'		;Print errors only on console?
	JZ	NOPRN
	MOV	AH,2
	CMP	AL,'X'		;PRN file to console?
	JZ	NOPRN
	MOV	AH,4
	CMP	AL,'P'		;PRN file to printer?
	JZ	NOPRN
	CALL	CHKDSK
	MOV	AH,80H
NOPRN:
	MOV	[LSTFCB],AL
	MOV	[LSTDEV],AH	;Flag device for list ouput
	MOV	SI,EXTEND
	MOV	DI,FCB+9
	MOVW
	MOVB			;Set extension to ASM
	MOVW			;Zero extent field
	MOV	DX,FCB
	MOV	AH,OPEN
	INT	33
	MOV	BX,NOFILE
	OR	AL,AL
	JZ	$+5
	JMP	PRERR
	MOV	DX,HEXFCB
	CALL	MAKFIL
	MOV	DX,LSTFCB
	CALL	MAKFIL
	XOR	AX,AX
	MOV	[FCB+12],AX	;Zero CURRENT BLOCK field
	MOV	[FCB+32],AL	;Zero Next Record field
	MOV	[FCB+14],BUFSIZ	;Set record size
	MOV	[BUFPT],SRCBUF	;Initialize buffer pointer
	MOV	[CODE],START+1	;POINTER TO NEXT BYTE OF INTERMEDIATE CODE
	MOV	[IY],START	;POINTER TO CURRENT RELOCATION BYTE
	XOR	AX,AX
	MOV	[PC],AX		;DEFAULT PROGRAM COUNTER
	MOV	[BASE],AX	;POINTER TO ROOT OF ID TREE=NIL
	MOV	[RETPT],AX	;Pointer to last RET record
	MOV	[IFFLG],AL	;NOT WITHIN IF/ENDIF
	MOV	[CHKLAB],AL	;LOOKUP ALL LABELS
	DEC	AX
	MOV	[LSTRET],AX	;Location of last RET
	MOV	AX,[6]		;HL=END OF MEMORY
	MOV	[HEAP],AX	;BACK END OF SYMBOL TABLE SPACE
	MOV	[BCOUNT],4	;CODE BYTES PER RELOCATION BYTE

;Assemble each line of code

LOOP:
	CALL	NEXTCHR		;Get first character on line
	CMP	AL,1AH
	JZ	ENDJ
	MOV	AL,-1		;Flag that no tokens have been read yet
	MOV	[SYM],AL
	CALL	ASMLIN		;Assemble the line
	MOV	AL,[SYM]
	CMP	AL,-1		;Any tokens found on line?
	JNZ	L0002
	CALL	GETSYM		;If no tokens read yet, read first one
L0002:	
	CMP	AL,';'
	JZ	ENDLN
	CMP	AL,EOL
	JZ	ENDLN
	MOV	AL,14H		;Garbage at end of line error
	JP	ENDLIN
ENDJ:	JMP	END

ENDLN:
	XOR	AL,AL		;Flag no errors on line
ENDLIN:
;AL = error code for line. Stack depth unknown
	MOV	SP,STACK
	CALL	NEXLIN
	JP	LOOP

NEXLIN:
	MOV	CH,0C0H		;Put end of line marker and error code (AL)
	CALL	PUTCD
	CALL	GEN1
	MOV	AL,[CHR]
GETEOL:
	CMP	AL,10
	JZ	RET
	CMP	AL,1AH
	JZ	ENDJ
	CALL	NEXTCHR		;Scan over comments for linefeed
	JP	GETEOL

ABORT:
	MOV	BX,NOMEM
PRERR:
	MOV	DX,BX
	MOV	AH,PRINTMES
	INT	33
	INT	32

MAKFIL:
	MOV	SI,DX
	LODB			;Get drive select byte
	CMP	AL,20H		;If not valid, don't make file
	JNC	RET
	MOV	CX,4
	MOV	DI,SI
	MOV	SI,FCB+1
	REP
	MOVW			;Copy source file name
	MOV	AH,MAKE
	INT	33
	MOV	[DI-9+14],1	;Set record length to 1 byte
	MOV	BX,NOSPAC
	OR	AL,AL		;Success?
	JNZ	PRERR
	RET

CHKDSK:
	SUB	AL,' '		;If not present, set zero flag
	JZ	RET
	SUB	AL,20H
	JZ	DSKERR		;Must be in range A-O
	CMP	AL,'P'-'@'
	JC	RET
DSKERR:
	MOV	BX,BADDSK
	JP	PRERR

ERROR:
	MOV	AL,CL
	JMP	ENDLIN

NEXTCHR:
	MOV	SI,[BUFPT]
	CMP	SI,SRCBUF
	JNZ	GETCH
;Buffer empty so refill it
	PUSH	DX
	PUSH	AX		;AH must be saved
	MOV	DX,SI
	MOV	AH,SETDMA
	INT	33
	MOV	DX,FCB
	MOV	AH,READ
	INT	33
	XCHG	AX,DX		;Put error code in DL
	POP	AX		;Restore AH
	MOV	AL,DL		;Error code back in AL
	POP	DX
	CMP	AL,1
	MOV	AL,1AH		;Possibly signal End of File
	JZ	NOMOD		;If nothing read
GETCH:
	LODB
	CMP	SI,SRCBUF+BUFSIZ
	JNZ	NOMOD
	MOV	SI,SRCBUF
NOMOD:
	MOV	[BUFPT],SI
	MOV	[CHR],AL
	RET


MROPS:

; Get two operands and check for certain types, according to flag byte
; in CL. OP code in CH. Returns only if immediate operation.

	PUSH	CX		;Save type flags
	CALL	GETOP
	PUSH	DX		;Save first operand
	CALL	GETOP2
	POP	BX		;First op in BX, second op in DX
	MOV	AL,SREG		;Check for a segment register
	CMP	AL,BH
	JZ	SEGCHK
	CMP	AL,DH
	JZ	SEGCHK
	MOV	AL,CONST	;Check if the first operand is immediate
	MOV	CL,26
	CMP	AL,BH
	JZ	ERROR		;Error if so
	POP	CX		;Restore type flags
	CMP	AL,DH		;If second operand is immediate, then done
	JZ	RET
	MOV	AL,UNDEFID	;Check for memory reference
	CMP	AL,BH
	JZ	STORE		;Is destination memory?
	CMP	AL,DH
	JZ	LOAD		;Is source memory?
	TEST	CL,1		;Check if register-to-register operation OK
	MOV	CL,27
	JZ	ERROR
	MOV	AL,DH
	CMP	AL,BH		;Registers must be of same length
RR:
	MOV	CL,22
	JNZ	ERROR
RR1:
	AND	AL,1		;Get register length (1=16 bits)
	OR	AL,CH		;Or in to OP code
	CALL	PUT		;And write it
	POP	CX		;Dump return address
	MOV	AL,BL
	ADD	AL,AL		;Rotate register number into middle position
	ADD	AL,AL
	ADD	AL,AL
	OR	AL,0C0H		;Set register-to-register mode
	OR	AL,DL		;Combine with other register number
	JMP	PUT

SEGCHK:
;Come here if at least one operand is a segment register
	POP	CX		;Restore flags
	TEST	CL,8		;Check if segment register OK
	MOV	CL,22
	JZ	ERR1
	MOV	CX,8E03H	;Segment register move OP code
	MOV	AL,UNDEFID
	CMP	AL,DH		;Check if source is memory
	JZ	LOAD
	CMP	AL,BH		;Check if destination is memory
	JZ	STORE
	MOV	AL,XREG
	SUB	AL,DH		;Check if source is 16-bit register
	JZ	RR		;If so, AL must be zero
	MOV	CH,8CH		;Change direction
	XCHG	DX,BX		;Flip which operand is first and second
	MOV	AL,XREG
	SUB	AL,DH		;Let RR perform finish the test
	JP	RR

STORE:
	TEST	CL,004H		;Check if storing is OK
	JNZ	STERR
	XCHG	DX,BX		;If so, flip operands
	AND	CH,0FDH		;   and zero direction bit
LOAD:
	MOV	DH,25
	CMP	AL,BH		;Check if memory-to-memory
	JZ	MRERR
	MOV	AL,BH
	CMP	AL,REG		;Check if 8-bit operation
	JNZ	XRG
	MOV	DH,22
	TEST	CL,1		;See if 8-bit operation is OK
	JZ	MRERR
XRG:
	MOV	AL,DL
	SUB	AL,6		;Check for R/M mode 6 and register 0
	OR	AL,BL		;   meaning direct load/store of accumulator
	JNZ	NOTAC
	TEST	CL,8		;See if direct load/store of accumulator
	JZ	NOTAC		;   means anything in this case
; Process direct load/store of accumulator
	MOV	AL,CH
	AND	AL,2		;Preserve direction bit only
	XOR	AL,2		;   but flip it
	OR	AL,0A0H		;Combine with OP code
	MOV	CH,AL
	MOV	AL,BH		;Check byte/word operation
	AND	AL,1
	OR	AL,CH
	POP	CX		;Dump return address
	JMP	PUTADD		;Write the address

NOTAC:
	MOV	AL,BH
	AND	AL,1		;Get byte/word bit
	AND	AL,CL		;But don't use it in word-only operations
	OR	AL,CH		;Combine with OP code
	CALL	PUT
	MOV	AL,BL
	ADD	AL,AL		;Rotate to middle position
	ADD	AL,AL
	ADD	AL,AL
	OR	AL,DL		;Combine register field
	POP	CX		;Dump return address
	JMP	PUTADD		;Write the address

STERR:
	MOV	DH,29
MRERR:
	MOV	CL,DH

ERR1:	JMP	ERROR

GETOP2:
;Get the second operand: look for a comma and drop into GETOP
	MOV	AL,[SYM]
	CMP	AL,','
	MOV	CL,21
	JNZ	ERR1


GETOP:

; Get one operand. Operand may be a memory reference in brackets, a register,
; or a constant. If a flag (such as "B" for byte operation) is encountered,
; it is noted and processing continues to find the operand.
;
; On exit, AL (=DH) has the type of operand. Other information depends
; on the actual operand:
;
; AL=DH=0  Memory Reference.  DL has the address mode properly prepared in
; the 8086 R/M format (middle bits zero). The constant part of the address
; is in ADDR. If an undefined label needs to be added to this, a pointer to
; its information fields is in ALABEL, otherwise ALABEL is zero.
;
; AL=DH=1  Value. The constant part is in DATA. If an undefined label needs
; to be added to this, a pointer to its information fields is in DLABEL,
; otherwise DLABEL is zero. "$" and "RET" are in this class.
;
; AL=DH=2  8-bit Register. DL has the register number.
;
; AL=DH=3  16-bit Register. DL has the register number.
;
; AL=DH=4  Segment Register. DL has the register number.

	CALL	GETSYM
GETOP1:
;Enter here if we don't need a GETSYM first
	CMP	AL,'['		;Memory reference?
	JZ	MEM
	CMP	AL,5		;Flag ("B", "W", etc.)?
	JZ	FLG
	CMP	AL,REG		;8-Bit register?
	JZ	NREG
	CMP	AL,XREG		;16-Bit register?
	JZ	NREG
	CMP	AL,SREG		;Segment register?
	JZ	NREG
VAL:				;Must be immediate
	XOR	AL,AL		;No addressing modes allowed
VAL1:
	CALL	GETVAL
	MOV	AX,[CON]	;Defined part
	MOV	[DATA],AX
	MOV	AX,[UNDEF]	;Undefined part
	MOV	[DLABEL],AX
	MOV	DL,CH
	MOV	DH,CONST
	MOV	AL,DH
	RET
NREG:
	PUSH	DX
	CALL	GETSYM
	POP	DX
	MOV	AL,DH
	RET
MEM:
	CALL	GETSYM
	MOV	AL,1
	CALL	GETVAL
	MOV	AL,[SYM]
	CMP	AL,']'
	MOV	CL,24
	JNZ	ERR1
	CALL	GETSYM
	MOV	BX,[CON]
	MOV	[ADDR],BX
	MOV	BX,[UNDEF]
	MOV	[ALABEL],BX
	MOV	DL,CH
	MOV	DH,UNDEFID
	MOV	AL,DH
	RET
FLG:
	CMP	DL,[MAXFLG]	;Invalid flag for this operation?
	MOV	CL,27H
	JG	ERR1
	CALL	GETSYM
	CMP	AL,','
	JZ	GETOP
	JP	GETOP1


GETVAL:

; Expression analyzer. On entry, if AL=0 then do not allow base or index
; registers. If AL=1, we are analyzing a memory reference, so allow base
; and index registers, and compute addressing mode when done. The constant
; part of the expression will be found in CON. If an undefined label is to
; be added to this, a pointer to its information fields will be found in
; UNDEF.

	MOV	AH,AL		;Flag is kept in AH
	MOV	[UNDEF],0
	MOV	AL,[SYM]
	CALL	EXPRESSION
	MOV	[CON],DX
	MOV	AL,AH
	MOV	CH,0		;Initial mode
	TEST	AL,10H		;Test INDEX bit
	RCL	AL		;BASE bit (zero flag not affected)
	JZ	NOIND		;Jump if not indexed, with BASE bit in carry
	CMC
	RCL	CH		;Rotate in BASE bit
	RCL	AL		;BP bit
	RCL	CH
	RCL	AL		;DI bit
	RCL	CH		;The low 3 bits now have indexing mode
MODE:
	OR	CH,080H		;If undefined label, force 16-bit displacement
	TEST	[UNDEF],-1
	JNZ	RET
	MOV	BX,[CON]
	MOV	AL,BL
	CBW			;Extend sign
	CMP	AX,BX		;Is it a signed 8-bit number?
	JNZ	RET		;If not, use 16-bit displacement
	AND	CH,07FH		;Reset 16-bit displacement
	OR	CH,040H		;Set 8-bit displacement
	OR	BX,BX
	JNZ	RET		;Use it if not zero displacement
	AND	CH,7		;Specify no displacement
	CMP	CH,6		;Check for BP+0 addressing mode
	JNZ	RET
	OR	CH,040H		;If BP+0, use 8-bit displacement
	RET

NOIND:
	MOV	CH,6		;Try direct address mode
	JNC	RET		;If no base register, that's right
	RCL	AL		;Check BP bit
	JC	MODE
	INC	CH		;If not, must be BX
	JP	MODE

EXPRESSION:
;Analyze arbitrary expression. Flag byte in AH.
;On exit, AL has type byte: 0=register or undefined label
	MOV	CH,-1		;Initial type
	MOV	DI,DX
	XOR	DX,DX		;Initial value
	CMP	AL,'+'
	JZ	PLSMNS
	CMP	AL,'-'
	JZ	PLSMNS
	MOV	CL,'+'
	PUSH	DX
	PUSH	CX
	MOV	DX,DI
	JP	OPERATE
PLSMNS:
	MOV	CL,AL
	PUSH	DX
	PUSH	CX
	OR	AH,4		;Flag that a sign was found
	CALL	GETSYM
OPERATE:
	CALL	TERM
	POP	CX		;Recover operator
	POP	BX		;Recover current value
	XCHG	DX,BX
	AND	CH,AL
	OR	AL,AL		;Is it register or undefined label?
	JZ	NOCON		;If so, then no constant part
	CMP	CL,"-"		;Subtract it?
	JNZ	ADD
	NEG	BX
ADD:
	ADD	DX,BX
NEXTERM:
	MOV	AL,[SYM]
	CMP	AL,'+'
	JZ	PLSMNS
	CMP	AL,'-'
	JZ	PLSMNS
	MOV	AL,CH
	RET
NOCON:
	CMP	CL,"-"
	JNZ	NEXTERM
BADOP:
	MOV	CL,5
	JMP	ERROR

TERM:
	CALL	FACTOR
MULOP:
	PUSH	DX		;Save value
	PUSH	AX		;Save type
	CALL	GETSYM
	POP	CX
	CMP	AL,"*"
	JZ	GETFACT
	CMP	AL,"/"
	JNZ	ENDTERM
GETFACT:
	OR	CL,CL		;Can we operate on this type?
	JZ	BADOP
	PUSH	AX		;Save operator
	CALL	GETSYM		;Get past operator
	CALL	FACTOR
	OR	AL,AL
	JZ	BADOP
	POP	CX		;Recover operator
	POP	BP		;And current value
	XCHG	AX,BP		;Save AH in BP
	CMP	CL,"/"		;Do we divide?
	JNZ	DOMUL
	OR	DX,DX		;Dividing by zero?
	MOV	CL,29H
	JZ	ERR2
	MOV	BX,DX
	XOR	DX,DX		;Make 32-bit dividend
	DIV	AX,BX
	JMPS	NEXFACT
DOMUL:
	MUL	AX,DX
NEXFACT:
	MOV	DX,AX		;Result in DX
	XCHG	AX,BP		;Restore flags to AH
	MOV	AL,-1		;Indicate a number
	JMPS	MULOP
ENDTERM:
	POP	DX
	MOV	AL,CL
	RET

FACTOR:
	MOV	AL,[SYM]
	CMP	AL,CONST
	JZ	RET
	CMP	AL,UNDEFID
	JZ	UVAL
	CMP	AL,"("
	JZ	PAREN
	CMP	AL,'"'
	JZ	STRING
	CMP	AL,"'"
	JZ	STRING
	CMP	AL,XREG		;Only 16-bit register may index
	MOV	CL,20
	JNZ	ERR2
	TEST	AH,1		;Check to see if indexing is OK
	MOV	CL,1
	JZ	ERR2
	MOV	AL,DL
	MOV	CL,3
	SUB	AL,3		;Check for BX
	JZ	BXJ
	SUB	AL,2		;Check for BP
	JZ	BPJ
	DEC	AL		;Check for SI
	MOV	CL,4
	JZ	SIJ
	DEC	AL		;Check for DI
	JZ	DIJ
	MOV	CL,2		;Invalid base/index register
ERR2:	JMP	ERROR

DIJ:
	OR	AH,20H		;Flag seeing index register DI
SIJ:
	TEST	AH,10H		;Check if already seen index register
	JNZ	ERR2
	OR	AH,10H		;Flag seeing index register
	RET

BPJ:
	OR	AH,40H		;Flag seeing base register BP
BXJ:
	TEST	AH,80H		;Check if already seen base register
	JNZ	ERR2
	OR	AH,80H		;Flag seeing base register
	RET

PAREN:
	CALL	GETSYM		;Eat the "("
	CALL	EXPRESSION
	CMP	B,[SYM],")"	;Better have closing paren
	MOV	CL,20
	JNZ	ERR30
	RET

UVAL:
	MOV	CL,6
	TEST	AH,8		;Check if undefined label has been seen
	JNZ	ERR30
	OR	AH,8		;Flag seeing undefined label
	MOV	[UNDEF],BX
	RET

ERR30:	JMP	ERROR

STRING:
	MOV	CH,AL
	MOV	AL,[CHR]
	CMP	AL,CH
	MOV	CL,35
	MOV	DL,AL
	MOV	DH,0
	JNZ	L0003
	CALL	ZERLEN
L0003:
	CALL	GETCHR
	MOV	CL,37
	TEST	AH,2
	JZ	ERR30
	TEST	AH,4
	MOV	CL,38
	JNZ	ERR30
STRGDAT:
	MOV	AL,DL
	CMP	AL,EOL
	MOV	CL,39
	JZ	ERR30
	CALL	PUT
	MOV	AL,[DATSIZ]
	OR	AL,AL
	JNZ	BYTSIZ
	MOV	AL,DH
	CALL	PUT
BYTSIZ:
	MOV	AL,[CHR]
	MOV	DL,AL
	CALL	GETCHR
	JP	STRGDAT

ZERLEN:
	CALL	NEXTCHR
	CMP	AL,CH
	JNZ	ERR30
	RET

GETCHR:
	CALL	NEXTCHR
	CMP	AL,CH
	JNZ	RET
	CALL	NEXTCHR
	CMP	AL,CH
	JZ	RET
	POP	BX		;Kill return address to STRGDAT loop
	MOV	AL,-1		;Flag type as constant
	RET


GETSYM:

; The lexical scanner. Used only in the operand field. Returns with the token
; in SYM and AL, sometimes with additional info in BX or DX.
;
; AL=SYM=0  Undefined label. BX has pointer to information fields.
;
; AL=SYM=1  Constant (or defined label). DX has value.
;
; AL=SYM=2,3,4  8-bit register, 16-bit register, or segment register,
; respectively. DL has register number.
;
; AL=SYM=5  A mode flag (such as "B" for byte operation). Type of flag in DL
; and also stored in FLAG: -1=no flags, 0=B, 1=W, 2=S, 3=L, 4=T.
;
; AL=SYM=6  8087 floating point register, ST(n) or ST. DL has register number.
;
; All other values are the ASCII code of the character. Note that this may
; never be a letter or number.

	PUSH	AX		;Save AH
	CALL	GETSY
	POP	AX
	MOV	AL,[SYM]
	RET

SCANB:
	MOV	AL,[CHR]
SCANT:
	CMP	AL,' '
	JZ	NEXB
	CMP	AL,9
	JNZ	RET
NEXB:
	CALL	NEXTCHR
	JP	SCANT

DOLLAR:
	MOV	DX,[OLDPC]
	MOV	AL,CONST
	MOV	[SYM],AL
NEXTCHJ:
	JMP	NEXTCHR

GETSY:
	CALL	SCANB
	CMP	AL,'$'
	JZ	DOLLAR
	MOV	[SYM],AL
	OR	AL,20H
	CMP	AL,'z'+1
	JNC	NEXTCHJ
	CMP	AL,'a'
	JC	$+5
	JMP	LETTER
	CMP	AL,'9'+1
	JNC	NEXTCHJ
	CMP	AL,'0'
	JC	NEXTCHJ
	MOV	BX,SYM
	MOV	B,[BX],CONST
	CALL	READID
	DEC	BX
	MOV	AL,[BX]
	MOV	CL,7
	MOV	BX,0
	CMP	AL,'h'
	JNZ	$+5
	JMP	HEX
	INC	CL
	MOV	[IX],ID
DEC:
	MOV	SI,[IX]
	MOV	AL,[SI]
	INC	[IX]
	CMP	AL,'9'+1
	JC	$+5
	JMP	ERROR
	SUB	AL,'0'
	MOV	DX,BX
	SHL	BX
	SHL	BX
	ADD	BX,DX
	SHL	BX
	MOV	DL,AL
	MOV	DH,0
	ADD	BX,DX
	DEC	CH
	JNZ	DEC
	XCHG	DX,BX
	RET

HEX:
	MOV	DX,ID
	DEC	CH
HEX1:
	MOV	SI,DX
	LODB
	INC	DX
	SUB	AL,'0'
	CMP	AL,10
	JC	GOTIT
	CMP	AL,'g'-'0'
	JNC	ERR4
	SUB	AL,'a'-10-'0'
GOTIT:
	SHL	BX
	SHL	BX
	SHL	BX
	SHL	BX
	ADD	BL,AL
	DEC	CH
	JNZ	HEX1
	XCHG	DX,BX
	RET

ERR4:	JMP	ERROR

GETLET:
	CALL	SCANB
	CMP	AL,EOL
	STC
	JZ	RET
	CMP	AL,';'
	STC
	JZ	RET
	MOV	CL,10
	OR	AL,20H
	CMP	AL,'a'
	JC	ERR4
	CMP	AL,'z'+1
	JNC	ERR4
READID:
	MOV	BX,ID
	MOV	CH,0
MOREID:
	MOV	[BX],AL
	INC	CH
	INC	BX
	CALL	NEXTCHR
	CMP	AL,'0'
	JC	NOMORE
	OR	AL,20H
	CMP	AL,'z'+1
	JNC	NOMORE
	CMP	AL,'9'+1
	JC	MOREID
	CMP	AL,'a'
	JNC	MOREID
NOMORE:
	MOV	CL,AL
	MOV	AL,CH
	MOV	[LENID],AL
	OR	AL,AL
	MOV	AL,CL
	RET

LETTER:
	CALL	READID
	MOV	AL,CH
	DEC	AL
	JNZ	NOFLG
	MOV	AL,[ID]
	MOV	CX,5
	MOV	DI,FLGTAB
	UP
	REPNE
	SCAB			;See if one of B,W,S,L,T
	JZ	SAVFLG		;Go save flag
	XOR	AL,AL
	MOV	CH,[LENID]
NOFLG:
	DEC	AL
	PUSH	BX
	JNZ	L0004
	CALL	REGCHK
L0004:	
	POP	BX
	MOV	AL,DH
	JZ	SYMSAV
	CALL	LOOKRET
SYMSAV:
	MOV	[SYM],AL
	RET

SAVFLG:
	MOV	DL,CL		;Need flag type in DL
	XCHG	[FLAG],CL
	CMP	CL,-1
	MOV	CL,32
	MOV	AL,5
	JZ	SYMSAV
ERRJ3:	JMP	ERROR

FLGTAB:	DB	"tlswb"

FPREG:
;Have detected "ST" for 8087 floating point stack register
	MOV	DL,0		;Default is ST(0)
	CALL	SCANB		;Get next character
	CMP	AL,"("		;Specifying register number?
	JNZ	HAVREG
;Get register number
	CALL	NEXTCHR		;Skip over the "("
	CALL	GETOP		;A little recursion never hurt anybody
	CMP	AL,CONST	;Better have found a constant
	MOV	CL,20		;Operand error if not
	JNZ	ERRJ3
	CMP	[DLABEL],0	;Constant must be defined
	MOV	CL,30
	JNZ	ERRJ3
	MOV	DX,[DATA]	;Get constant
	CMP	DX,7		;Constant must be in range 0-7
	MOV	CL,31
	JA	ERRJ3
	MOV	AL,[SYM]
	CMP	AL,")"
	MOV	CL,24
	JNZ	ERRJ3
HAVREG:
	MOV	DH,FREG
	XOR	AL,AL		;Zero set means register found
	RET

REGCHK:
	MOV	BX,ID
	CMP	[BX],"s"+7400H	;"st"
	JZ	FPREG
	MOV	CL,[BX]
	INC	BX
	MOV	AL,[BX]
	MOV	BX,REGTAB
	MOV	DH,XREG
	MOV	DL,0
	CMP	AL,'x'
	JZ	SCANREG
	MOV	DH,REG
	CMP	AL,'l'
	JZ	SCANREG
	MOV	DL,4
	CMP	AL,'h'
	JZ	SCANREG
	MOV	DH,SREG
	MOV	DL,0
	MOV	BX,SEGTAB
	CMP	AL,'s'
	JZ	SCANREG
	MOV	DH,XREG
	CMP	AL,'p'
	JZ	PREG
	CMP	AL,'i'
	JNZ	RET
	MOV	DL,6
	MOV	AL,CL
	CMP	AL,'s'
	JZ	RET
	INC	DL
	CMP	AL,'d'
	RET
PREG:
	MOV	DL,4
	MOV	AL,CL
	CMP	AL,'s'
	JZ	RET
	INC	DL
	CMP	AL,'b'
	RET
SCANREG:
	MOV	AL,CL
	MOV	CX,4
	UP
	MOV	DI,BX
	REPNZ
	SCAB
	MOV	BX,DI
	JNZ	RET
	MOV	AL,CL
	ADD	AL,DL
	MOV	DL,AL
	XOR	AL,AL
	RET

REGTAB:	DB	'bdca'

SEGTAB:	DB	'dsce'

LOOK:
	MOV	CH,[BX]
	INC	BX
	MOV	DX,ID
	CALL	CPSLP
	JZ	RET
	XOR	AL,80H
	ROL	AL		;Make end-of-symbol bit least significant
	MOV	CL,AL
	DEC	BX
	MOV	AL,[BX]
	XOR	AL,80H
	ROL	AL
	CMP	AL,CL
	JNC	SMALL
	INC	CH
	INC	CH
SMALL:
	MOV	DL,CH
	MOV	DH,0
	ADD	BX,DX
	MOV	DX,[BX]
	INC	BX
	MOV	AL,DL
	OR	AL,DH
	STC
	JZ	RET
	XCHG	DX,BX
	JP	LOOK

LOOKRET:
	MOV	AL,CH
	CMP	AL,3	;RET has 3 letters
	JNZ	LOOKUP
	DEC	BX
	OR	B,[BX],080H
	MOV	DX,RETSTR+2
CHKRET:
	MOV	SI,DX
	LODB
	CMP	AL,[BX]
	JNZ	LOOKIT
	DEC	BX
	DEC	DX
	DEC	CH
	JNZ	CHKRET
	MOV	DX,[LSTRET]
	MOV	AL,DL
	AND	AL,DH
	INC	AL
	JZ	ALLRET
	MOV	BX,[PC]
	SUB	BX,DX
	MOV	AL,BL
	CBW
	CMP	AX,BX		;Signed 8-bit number?
	MOV	AL,1
	JZ	RET
ALLRET:
	MOV	BX,[RETPT]
	MOV	AL,BH
	OR	AL,BL
	MOV	AL,0
	JNZ	RET
	MOV	BX,[HEAP]
	DEC	BX
	DEC	BX
	DEC	BX
	MOV	[HEAP],BX
	XOR	AL,AL
	MOV	[BX],AL
	MOV	[RETPT],BX
	RET

LOOKUP:
	DEC	BX
	OR	B,[BX],080H
LOOKIT:
	MOV	BX,[BASE]
	MOV	AL,BH
	OR	AL,BL
	JZ	EMPTY
	CALL	LOOK
	JC	ENTER
	MOV	DX,4
	ADD	BX,DX
	MOV	AL,[BX]
	OR	AL,AL
	JZ	RET
	INC	BX
	MOV	DX,[BX]
	INC	BX
	RET

ENTER:
	PUSH	BX		;Save pointer to link field
	CALL	CREATE		;Add the node
	POP	SI
	MOV	[SI-1],DX	;Link new node
	RET			;Zero was set by CREATE

EMPTY:
	CALL	CREATE
	MOV	[BASE],DX
	RET


CREATE:

; Add a new node to the identifier tree. The identifier is at ID with
; bit 7 of the last character set to one. The length of the identifier is
; in LENID, which is ID-1.
;
; Node format:
;	1. Length of identifier (1 byte)
;	2. Identifier (1-80 bytes)
;	3. Left link (2-byte pointer to alphabetically smaller identifiers)
;	4. Right link (0 if none larger)
;	5. Data field:
;	   a. Defined flag (0=undefined, 1=defined)
;	   b. Value (2 bytes)
;
; This routine returns with AL=zero and zero flag set (which indicates
; on return from LOOKUP that it has not yet been defined), DX points
; to start of new node, and BX points to data field of new node.

	MOV	AL,[LENID]
	ADD	AL,8		;Storage needed for the node
	MOV	BX,[HEAP]
	MOV	DL,AL
	MOV	DH,0
	SUB	BX,DX		;Heap grows downward
	MOV	[HEAP],BX
	XCHG	DX,BX
	MOV	BX,[CODE]	;Check to make sure there's enough
	CMP	BX,DX
	JB	$+5
	JMP	ABORT
	PUSH	DX
	MOV	BX,LENID
	MOV	CL,[BX]
	INC	CL
	MOV	CH,0
	UP
	MOV	SI,BX
	MOV	DI,DX
	REP
	MOVB			;Move identifier and length into node
	MOV	DX,DI
	MOV	BX,SI
	MOV	CH,4
	XCHG	DX,BX
NILIFY:
	MOV	[BX],CL		;Zero left and right links
	INC	BX
	DEC	CH
	JNZ	NILIFY
	XOR	AL,AL		;Set zero flag
	MOV	[BX],AL		;Zero defined flag
	POP	DX		;Restore pointer to node
	RET

CPSLP:
	MOV	SI,DX
	LODB
	CMP	AL,[BX]
	LAHF
	INC	DX
	INC	BX
	SAHF
	JNZ	RET
	DEC	CH
	JNZ	CPSLP
	RET

GETLAB:
	MOV	BX,0
	MOV	[LABPT],BX
	MOV	B,[FLAG],-1
	MOV	DH,0
	MOV	AL,[CHR]
	CMP	AL,' '+1
	JC	NOT1
	OR	DH,001H
NOT1:
	CALL	GETLET
	JC	RET
	CMP	AL,':'
	JNZ	LABCHK
	CALL	NEXTCHR
	JP	LABEL
LABCHK:
	OR	AL,AL
	TEST	DH,001H
	JZ	RET
LABEL:
	MOV	AL,[CHKLAB]
	OR	AL,AL
	JZ	$+5
	JMP	GETLET
	CALL	LOOKUP
	MOV	CL,11
	JNZ	ERR5
	MOV	DX,[PC]
	MOV	B,[BX],1
	INC	BX
	MOV	[BX],DX
	MOV	[LABPT],BX
	JMP	GETLET

ERR5:	JMP	ERROR

ASMLIN:
	MOV	B,[MAXFLG],1	;Allow only B and W flags normally
	MOV	BX,[PC]
	MOV	[OLDPC],BX
	CALL	GETLAB
	JNC	$+5
	JMP	ENDLN
	MOV	BX,LENID
	MOV	AL,[BX]
	MOV	CL,12
	SUB	AL,2
	MOV	CH,AL
	JC	ERR5
	INC	BX
	CMP	B,[BX],"f"	;See if an 8087 mnemonic
	JZ	NDPOP
	CMP	AL,5
	JNC	ERR5
	MOV	AL,[BX]
	SUB	AL,'a'
	MOV	CL,AL
	ADD	AL,AL
	ADD	AL,AL
	ADD	AL,CL
	ADD	AL,CH
	ADD	AL,AL
	MOV	BX,OPTAB
	MOV	DL,AL
	MOV	DH,0
	ADD	BX,DX
	MOV	BX,[BX]
	INC	CH
	MOV	CL,CH
	MOV	AH,[BX]
	INC	BX
	OR	AH,AH
	JZ	OPERR
FINDOP:
	MOV	CH,CL
	MOV	DX,ID+1
	XCHG	AX,BP		;Save count of opcodes in BP
	CALL	CPSLP
	JZ	HAVOP
	XCHG	AX,BP
	MOV	DH,0
	MOV	DL,CH
	INC	DX
	INC	DX
	ADD	BX,DX
	DEC	AH
	JNZ	FINDOP
OPERR:
	MOV	CL,12
	JMP	ERROR

HAVOP:
	MOV	AL,[BX+2]	;Get opcode
	JMP	[BX]

NDPOP:	;First letter is "F" so must be 8087 opcode ("Numeric Data Processor")
	MOV	B,[MAXFLG],4	;Allow all type flags
	INC	BX
	CMP	B,[BX],"n"	;"No-wait" form?
	MOV	AH,0
	JNZ	SAVNFLG
	MOV	AH,1
	DEC	AL
	INC	BX		;Skip over the "N"
SAVNFLG:
	MOV	[NOWAIT],AH	;0 for wait, 1 for no wait
	CMP	AL,1
	JB	OPERR		;Not enough char left for valid opcode?
	CMP	AL,5
	JA	OPERR		;Too many?
	CBW
	XCHG	AX,DX		;Save length in DX
	MOV	SI,DX
	OR	B,[SI+BX],80H	;Set high bit of last character
	MOV	AL,[BX]		;Get first char of opcode
	INC	BX
	SUB	AL,"a"
	JB	TRY2XM1		;Go see if opcode starts with "2"
	CMP	AL,"z"-"a"
	JA	OPERR
	CBW
	SHL	AX		;Double to index into address table
	XCHG	AX,SI		;Put in index register
	MOV	DI,[SI+NDPTAB]	;Get start of opcode table for this letter
LOOKNDP:
	MOV	AH,[DI]		;Number of opcodes starting with this letter
	OR	AH,AH
	JZ	OPERR		;Any start with this letter?
FNDNDP:
	INC	DI
	MOV	SI,BX		;Pointer to start of opcode
	MOV	CX,DX		;Get length of opcode
	REPE
	CMPB			;Compare opcode to table entry
	JZ	HAVNDP
	DEC	DI		;Back up in case that was last letter
	MOV	AL,80H		;Look for char with high bit set
ENDOP:
	SCASB
	JA	ENDOP
	INC	DI		;Skip over info about opcode
	DEC	AH
	JNZ	FNDNDP
OPERRJ:	JP	OPERR

TRY2XM1:
	CMP	AL,"2"-"a"
	JNZ	OPERR
	MOV	DI,XM1
	JP	LOOKNDP

SPECIALOP:
	AND	AL,7		;Mask to special op number
	JZ	FWAIT		;If zero, go handle FWAIT
;Handle FNOP
	CMP	B,[NOWAIT],0	;Was "N" present (If not opcode was "FOP")
	JZ	OPERR
	MOV	AL,9BH		;Need Wait opcode after all
	CALL	PUT
	MOV	AL,0D9H
	CALL	PUT
	MOV	AL,0D0H
	JMP	PUT

FWAIT:
	CMP	B,[NOWAIT],0	;"FNWAIT" not legal
	JNZ	OPERRJ
	RET			;Nothing to do - "WAIT" already sent

HAVNDP:
	MOV	SI,DI
	CMP	B,[NOWAIT],0
	JNZ	NWAIT
	MOV	AL,9BH		;Wait opcode
	CALL	PUT
NWAIT:
	LODW			;Get opcode info
	TEST	AL,0F8H		;Any operand bits set?
	JZ	NOOPS		;If no operands, output code
	TEST	AL,78H		;Special case?
	JZ	SPECIALOP
	PUSH	AX
	CALL	GETSYM		;See if any operands
	POP	CX
	CMP	AL,";"
	JZ	NOOPCHK
	CMP	AL,EOL
	JZ	NOOPCHK
	CMP	AL,FREG		;Is it 8087 register?
	JNZ	MEMOP
	XCHG	AX,CX
	TEST	AL,ONEREG	;One register OK as operand?
	JNZ	PUTREG		;Yes - save it
	TEST	AL,20H		;Memory-only operation?
	MOV	CL,20
	JNZ	ERRJ4
	TEST	AL,18H		;Two-register operation?
	JPE	ERRJ4		;Must be exactly one bit set
	PUSH	DX		;Save register number
	PUSH	AX		;Save opcode
	CALL	GETSYM
	CMP	AL,","
	MOV	CL,15H
	JNZ	ERRJ4
	CALL	GETSYM
	MOV	CL,20
	CMP	AL,FREG
	JNZ	ERRJ4
	POP	AX
	POP	BX
	XOR	AL,2		;Flip "POP" bit
	AND	AL,0FBH		;Reset direction bit to ST(0)
	OR	BL,BL		;Is first register ST(0)?
	JZ	ST0DEST
	XCHG	DX,BX
	OR	BL,BL		;One of these must be ST(0)
	JNZ	ERRJ4
	XOR	AL,4		;Flip direction
	JMPS	PUTREG
ST0DEST:
	TEST	AL,2		;Is POP bit set?
	JNZ	ERRJ4		;Don't allow destination ST(0) then pop
PUTREG:
	AND	AH,0F8H		;Zero out register field
	OR	AH,DL
	OR	AH,0C0H
	PUSH	AX
	CALL	GETSYM		;Get to next symbol
	POP	AX
	JMPS	NOOPS

NOOPCHK:
	XCHG	AX,CX
	TEST	AL,80H		;Is no operands OK?
	MOV	CL,20
	JNZ	ERRJ4
NOOPS:
;First test for FDIV or FSUB and reverse "R" bit if "D" bit is set
	PUSH	AX
	AND	AX,0E005H
	CMP	AX,0E004H
	POP	AX
	JNZ	NOREV
	XOR	AH,8		;Reverse "R" bit
NOREV:
	AND	AL,7
	OR	AL,0D8H		;ESC hook
	CALL	PUT
	MOV	AL,AH
	JMP	PUT

BADFLAG:
	MOV	CL,20H
ERRJ4:	JMP	ERROR

MEMOP:
	PUSH	CX		;Save opcode
	CALL	GETOP1		;Get memory operand
	CMP	AL,UNDEFID	;Is it?
	MOV	CL,20
	JNZ	ERRJ4
	POP	AX
	TEST	AL,20H		;Does it have memory format field?
	JNZ	GETFORMAT
	TEST	AL,8		;Check if any memory operand legal
	JZ	ERRJ4
	TEST	AL,10H		;Check for 2-op arithmetic
	JNZ	PUTMEM		;If not, just use as plain memory op
GETFORMAT:
	AND	AL,0F9H		;Zero memory format bits
	MOV	CL,[FLAG]
	DEC	CL		;Must now be in range 0-3
	JL	BADFLAG
	MOV	CH,AL		;Save opcode byte
	SHR	AL		;Put format bits in bits 2 & 3
	AND	AL,0CH
	OR	AL,CL		;Combine format bits with flag
	MOV	BX,FORMATTAB
	XLAT
	OR	AL,AL		;Valid combination?
	JS	BADFLAG
	OR	AH,AL		;Possibly set new bits in second byte
	OR	AL,CH		;Set memory format bits
PUTMEM:
	AND	AL,7
	OR	AL,0D8H
	CALL	PUT
	MOV	AL,AH
	AND	AL,38H
	OR	AL,DL		;Combine addressing mode
	JMP	PUTADD

FORMATTAB:
;There are 16 entries in this table. The 4-bit index is built like this:
;	Bit 3		0 for normal memory ops, 1 if extended is OK
;	Bit 2		0 for integer, 1 for real
;	Bit 0 & 1	Flag: 00=W, 01=S, 10=L, 11=T
;
;The entries in the table are used as two 3-bit fields. Bits 0-2 are ORed
;into the first byte of the opcode for the Memory Format field. Bits 3-6
;are ORed into the second byte to modify the opcode for extended operands.
;If bit 7 is set, then that combination is illegal.

	DB	6,2,80H,80H	;Normal integers
	DB	80H,0,4,80H	;Normal reals
	DB	6,2,2EH,80H	;Extended integers
	DB	80H,0,4,2BH	;Extended reals

GRP1:
	MOV	CX,8A09H
	CALL	MROPS
	MOV	CX,0C6H
	MOV	AL,BH
	CMP	AL,UNDEFID
	JNZ	L0006
	CALL	STIMM
L0006:	
	AND	AL,1
	JZ	BYTIMM
	MOV	AL,0B8H
	OR	AL,BL
	CALL	PUT
	JMP	PUTWOR

BYTIMM:
	MOV	AL,0B0H
	OR	AL,BL
	CALL	PUT
PUTBJ:	JMP	PUTBYT

IMMED:
	MOV	AL,BH
	CMP	AL,UNDEFID
	JZ	STIMM
	MOV	AL,BL
	OR	AL,AL
	JZ	RET
	MOV	AL,BH
	CALL	IMM
	OR	AL,0C0H
	CALL	PUT
FINIMM:
	MOV	AL,CL
	POP	CX
	TEST	AL,1
	JZ	PUTBJ
	CMP	AL,83H
	JZ	PUTBJ
	JMP	PUTWOR

STIMM:
	MOV	AL,[FLAG]
	CALL	IMM
	CALL	PUTADD
	JP	FINIMM

IMM:
	AND	AL,1
	OR	AL,CL
	MOV	CL,AL
	CALL	PUT
	MOV	AL,CH
	AND	AL,38H
	OR	AL,BL
	RET

PUT:
;Save byte in AL as pure code, with intermediate code bits 00. AL and
;DI destroyed, no other registers affected.
	PUSH	BX
	PUSH	CX
	MOV	CH,0		;Flag as pure code
	CALL	GEN
	POP	CX
	POP	BX
	RET

GEN:
;Save byte of code in AL, given intermediate code bits in bits 7&8 of CH.
	CALL	PUTINC		;Save it and bump code pointer
GEN1:
	MOV	AL,[RELOC]
	RCL	CH
	RCL	AL
	RCL	CH
	RCL	AL
	MOV	[RELOC],AL
	MOV	BX,BCOUNT
	DEC	B,[BX]
	JNZ	RET
	MOV	B,[BX],4
	MOV	BX,RELOC
	MOV	AL,[BX]
	MOV	B,[BX],0
	MOV	DI,[IY]
	MOV	[DI],AL
	MOV	BX,[CODE]
	MOV	[IY],BX
	INC	BX
	MOV	[CODE],BX
	RET

PUTINC:
	INC	[PC]
PUTCD:
	MOV	DI,[CODE]
	STOB
	MOV	[CODE],DI
	RET

PUTWOR:
;Save the word value described by [DLABEL] and [DATA] as code. If defined,
;two bytes of pure code will be produced. Otherwise, appropriate intermediate
;code will be generated.
	PUSH	CX
	MOV	CH,80H
	PUSH	DX
	PUSH	BX
	JP	PUTBW

PUTBYT:
;Same as PUTWOR, above, but for byte value.
	PUSH	CX
	MOV	CH,40H
	PUSH	DX
	PUSH	BX
	MOV	BX,[DLABEL]
	MOV	AL,BH
	OR	AL,BL
	JNZ	PUTBW
	MOV	BX,[DATA]
	OR	AL,BH
	JZ	PUTBW
	INC	BH
	JZ	PUTBW
	MOV	CL,31
	JMP	ERROR
PUTBW:
	MOV	DX,[DLABEL]
	MOV	BX,[DATA]
PUTCHK:
	OR	DX,DX
	JZ	NOUNDEF
	MOV	AL,DL
	CALL	PUTCD
	MOV	AL,DH
	CALL	PUTCD
	MOV	AL,BL
	CALL	PUTINC
	MOV	AL,BH
	TEST	CH,080H
	JZ	SMPUT
	CALL	GEN
	JP	PRET
SMPUT:
	CALL	PUTCD
	CALL	GEN1
PRET:
	POP	BX
	POP	DX
	POP	CX
	RET

NOUNDEF:
	MOV	AL,BL
	MOV	CL,BH
	PUSH	CX
	MOV	CH,0
	CALL	GEN
	POP	CX
	MOV	AL,CL
	TEST	CH,080H
	MOV	CH,0
	JZ	PRET
	CALL	GEN
	JP	PRET

PUTADD:
;Save complete addressing mode. Addressing mode is in AL; if this is a register
;operation (>=C0), then the one byte will be saved as pure code. Otherwise,
;the details of the addressing mode will be investigated and the optional one-
;or two-byte displacement will be added, as described by [ADDR] and [ALABEL].
	PUSH	CX
	PUSH	DX
	PUSH	BX
	MOV	CH,0
	MOV	CL,AL
	CALL	GEN		;Save the addressing mode as pure code
	MOV	AL,CL
	MOV	CH,80H
	AND	AL,0C7H
	CMP	AL,6
	JZ	TWOBT		;Direct address?
	AND	AL,0C0H
	JZ	PRET		;Indirect through reg, no displacement?
	CMP	AL,0C0H
	JZ	PRET		;Register to register operation?
	MOV	CH,AL		;Save whether one- or two-byte displacement
TWOBT:
	MOV	BX,[ADDR]
	MOV	DX,[ALABEL]
	JP	PUTCHK

GRP2:
	CALL	GETOP
	MOV	CX,0FF30H
	CMP	AL,UNDEFID
	JZ	PMEM
	MOV	CH,50H
	CMP	AL,XREG
	JZ	PXREG
	MOV	CH,6
	CMP	AL,SREG
	JNZ	$+5
	JMP	PACKREG
	MOV	CL,20
	JMP	ERROR

PMEM:
	MOV	AL,CH
	CALL	PUT
	MOV	AL,CL
	OR	AL,DL
	JMP	PUTADD

PXREG:
	MOV	AL,CH
	OR	AL,DL
	JMP	PUT

GRP3:
	CALL	GETOP
	PUSH	DX
	CALL	GETOP2
	POP	BX
	MOV	CX,8614H
	MOV	AL,SREG
	CMP	AL,BH
	JZ	ERR6
	CMP	AL,DH
	JZ	ERR6
	MOV	AL,CONST
	CMP	AL,BH
	JZ	ERR6
	CMP	AL,DH
	JZ	ERR6
	MOV	AL,UNDEFID
	CMP	AL,BH
	JZ	EXMEM
	CMP	AL,DH
	JZ	EXMEM1
	MOV	AL,BH
	CMP	AL,DH
	MOV	CL,22
	JNZ	ERR6
	CMP	AL,XREG
	JZ	L0008
	CALL	RR1
L0008:			;RR1 never returns
	MOV	AL,BL
	OR	AL,AL
	JZ	EXACC
	XCHG	DX,BX
	MOV	AL,BL
	OR	AL,AL
	MOV	AL,BH
	JZ	EXACC
	CALL	RR1
EXACC:
	MOV	AL,90H
	OR	AL,DL
	JMP	PUT

EXMEM:
	XCHG	DX,BX
EXMEM1:
	CMP	AL,BH
	JZ	ERR6
	MOV	CL,1	;Flag word as OK
	CALL	NOTAC	;NOTAC never returns
ERR6:	JMP	ERROR

GRP4:
	PUSH	AX
	CALL	GETOP
	POP	CX
	XCHG	CL,CH
	CMP	AL,CONST
	JZ	FIXED
	SUB	AL,XREG
	DEC	DL
	DEC	DL
	OR	AL,DL
	MOV	CL,20
	JNZ	ERR6
	MOV	AL,CH
	OR	AL,8
	JMP	PUT
FIXED:
	MOV	AL,CH
	CALL	PUT
	JMP	PUTBYT

GRP5:
	PUSH	AX
	CALL	GETOP
	MOV	CL,20
	CMP	AL,CONST
	JNZ	ERR6
	MOV	BX,[DLABEL]
	MOV	AL,BH
	OR	AL,BL
	MOV	CL,30
	JNZ	ERR6
	MOV	BX,[DATA]
	POP	AX
	OR	AL,AL
	JZ	ORG
	DEC	AL
	JZ	DSJ
	DEC	AL
	JZ	EQU
	DEC	AL
	JZ	$+5
	JMP	IF
PUTOP:
	MOV	AL,-3
	JP	NEWLOC
ALIGN:
	MOV	AL,[PC]
	AND	AL,1
	JZ	RET
	MOV	BX,1
DSJ:
	XCHG	DX,BX
	MOV	BX,[PC]
	ADD	BX,DX
	MOV	[PC],BX
	XCHG	DX,BX
	MOV	AL,-4
	JP	NEWLOC
EQU:
	XCHG	DX,BX
	MOV	BX,[LABPT]
	MOV	AL,BH
	OR	AL,BL
	MOV	CL,34
	JZ	ERR7
	MOV	[BX],DL
	INC	BX
	MOV	[BX],DH
	RET
ORG:
	MOV	[PC],BX
	MOV	AL,-2
NEWLOC:
	CALL	PUTCD
	MOV	AL,BL
	CALL	PUTCD
	MOV	AL,BH
	CALL	PUTCD
	MOV	CH,0C0H
	JMP	GEN1
GRP6:
	MOV	CH,AL
	MOV	CL,4
	CALL	MROPS
	MOV	CL,23
ERR7:	JMP	ERROR
GRP7:
	MOV	CH,AL
	MOV	CL,1
	CALL	MROPS
	MOV	CL,80H
	MOV	DX,[DLABEL]
	MOV	AL,DH
	OR	AL,DL
	JNZ	ACCJ
	XCHG	DX,BX
	MOV	BX,[DATA]
	MOV	AL,BL
	CBW
	CMP	AX,BX
	XCHG	DX,BX
	JNZ	ACCJ
	OR	CL,002H
ACCJ:	JMP	ACCIMM
GRP8:
	MOV	CL,AL
	MOV	CH,0FEH
	JP	ONEOP
GRP9:
	MOV	CL,AL
	MOV	CH,0F6H
ONEOP:
	PUSH	CX
	CALL	GETOP
ONE:
	MOV	CL,26
	CMP	AL,CONST
	JZ	ERR7
	CMP	AL,SREG
	MOV	CL,22
	JZ	ERR7
	POP	CX
	CMP	AL,UNDEFID
	JZ	MOP
	AND	AL,1
	JZ	ROP
	TEST	CL,001H
	JZ	ROP
	MOV	AL,CL
	AND	AL,0F8H
	OR	AL,DL
	JMP	PUT
MOP:
	MOV	AL,[FLAG]
	AND	AL,1
	OR	AL,CH
	CALL	PUT
	MOV	AL,CL
	AND	AL,38H
	OR	AL,DL
	JMP	PUTADD
ROP:
	OR	AL,CH
	CALL	PUT
	MOV	AL,CL
	AND	AL,38H
	OR	AL,0C0H
	OR	AL,DL
	JMP	PUT
GRP10:
	MOV	CL,AL
	MOV	CH,0F6H
	PUSH	CX
	CALL	GETOP
	MOV	CL,20
	MOV	AL,DL
	OR	AL,AL
	JNZ	ERRJ1
	MOV	AL,DH
	CMP	AL,XREG
	JZ	G10
	CMP	AL,REG
ERRJ1:	JNZ	ERR8
G10:
	PUSH	AX
	CALL	GETOP
	POP	AX
	AND	AL,1
	MOV	[FLAG],AL
	MOV	AL,DH
ONEJ:	JP	ONE
GRP11:
	CALL	PUT
	MOV	AL,0AH
	JMP	PUT
GRP12:
	MOV	CL,AL
	MOV	CH,0D0H
	PUSH	CX
	CALL	GETOP
	MOV	AL,[SYM]
	CMP	AL,','
	MOV	AL,DH
	JNZ	ONEJ
	PUSH	DX
	CALL	GETOP
	SUB	AL,REG
	MOV	CL,20
	DEC	DL
	OR	AL,DL
	JNZ	ERR8
	POP	DX
	MOV	AL,DH
	POP	CX
	OR	CH,002H
	PUSH	CX
	JMP	ONE
GRP13:
	MOV	CH,AL
	MOV	CL,1
	CALL	MROPS
	MOV	CL,80H
ACCIMM:
	CALL	IMMED
	OR	CH,004H
	AND	CH,0FDH
AIMM:
	MOV	AL,BH
	AND	AL,1
	LAHF
	PUSH	AX
	OR	AL,CH
	CALL	PUT
	POP	AX
	SAHF
	JNZ	$+5
	JMP	PUTBYT
	JMP	PUTWOR

ERR8:	JMP	ERROR

GRP14:
;JMP and CALL mnemonics
	LAHF
	XCHG	AH,AL
	PUSH	AX
	XCHG	AH,AL
	MOV	B,[MAXFLG],3	;Allow "L" flag
	CALL	GETOP
	CMP	AL,CONST
	JZ	DIRECT
	MOV	CL,20
	CMP	AL,REG
	JZ	ERR8
	CMP	AL,SREG
	JZ	ERR8
	CMP	AL,XREG
	JNZ	NOTRG
	OR	DL,0C0H
NOTRG:
;Indirect jump. DL has addressing mode.
	MOV	AL,0FFH
	CALL	PUT
	POP	AX
	XCHG	AH,AL
	SAHF
	AND	AL,38H
	OR	AL,DL
	MOV	CH,[FLAG]
	CMP	CH,3		;Flag "L" present?
	JZ	PUTADDJ		;If so, do inter-segment
	MOV	CL,27H
	CMP	CH,-1		;Better not be a flag
	JNZ	ERR8
	AND	AL,0F7H		;Convert to intra-segment
PUTADDJ:
	JMP	PUTADD
DIRECT:
	MOV	AL,[SYM]
	CMP	AL,','
	JZ	LONGJ
	POP	AX
	XCHG	AH,AL
	SAHF
	DEC	AL
	CMP	AL,0E9H
	JZ	GOTOP
	MOV	AL,0E8H
GOTOP:
	CALL	PUT
	MOV	DX,[PC]
	INC	DX
	INC	DX
	SUB	[DATA],DX
	JMP	PUTWOR
LONGJ:
	POP	AX
	XCHG	AH,AL
	SAHF
	CALL	PUT
	CALL	PUTWOR
	CALL	GETOP
	MOV	CL,20
	CMP	AL,CONST
	JNZ	ERR8
	JMP	PUTWOR

GRP16:
;RET mnemonic
	LAHF
	XCHG	AH,AL
	PUSH	AX
	XCHG	AH,AL
	CALL	GETSYM
	CMP	AL,5
	JZ	LONGR
	CMP	AL,EOL
	JZ	NODEC
	CMP	AL,';'
	JZ	NODEC
GETSP:
	CALL	GETOP1
	POP	CX
	CMP	AL,CONST
	MOV	CL,20
	JNZ	ERR9
	MOV	AL,CH
	AND	AL,0FEH
	CALL	PUT
	JMP	PUTWOR
LONGR:
	CMP	DL,3		;Is flag "L"?
	MOV	CL,27H
	JNZ	ERR10		;If not, bad flag
	POP	AX
	XCHG	AH,AL
	SAHF
	OR	AL,8
	LAHF
	XCHG	AH,AL
	PUSH	AX
	XCHG	AH,AL
NOTLON:
	CALL	GETSYM
	CMP	AL,EOL
	JZ	DORET
	CMP	AL,';'
	JZ	DORET
	CMP	AL,','
	JNZ	L0011
	CALL	GETSYM
L0011:	
	JP	GETSP
NODEC:
;Return is intra-segment (short) without add to SP. 
;Record position for RET symbol.
	MOV	BX,[PC]
	MOV	[LSTRET],BX
	XCHG	DX,BX
	MOV	BX,[RETPT]
	MOV	AL,BH
	OR	AL,BL
	JZ	DORET
	MOV	B,[BX],1
	INC	BX
	MOV	[BX],DX
	MOV	BX,0
	MOV	[RETPT],BX
DORET:
	POP	AX
	XCHG	AH,AL
	SAHF
	JMP	PUT

GRP17:
	CALL	PUT
	CALL	GETOP
	CMP	AL,CONST
	MOV	CL,20
ERR9:	JNZ	ERR10
	MOV	BX,[DATA]
	MOV	DX,[PC]
	INC	DX
	SUB	BX,DX
	MOV	[DATA],BX
	CALL	PUTBYT
	MOV	BX,[DLABEL]
	MOV	AL,BH
	OR	AL,BL
	JNZ	RET
	MOV	BX,[DATA]
	MOV	AL,BL
	CBW
	CMP	AX,BX		;Signed 8-bit number?
	JZ	RET
	MOV	CL,31
ERR10:	JMP	ERROR
	RET
GRP18:
	CALL	GETOP
	CMP	AL,CONST
	MOV	CL,20
	JNZ	ERR10
	MOV	BX,[DLABEL]
	MOV	AL,BH
	OR	AL,BL
	JNZ	GENINT
	MOV	BX,[DATA]
	MOV	DX,3
	SBB	BX,DX
	JNZ	GENINT
	MOV	AL,0CCH
	JMP	PUT
GENINT:
	MOV	AL,0CDH
	CALL	PUT
	JMP	PUTBYT

GRP19:	;ESC opcode
	CALL	GETOP
	MOV	CL,20
	CMP	AL,CONST
	JNZ	ERRJ		;First operand must be immediate
	MOV	CL,1EH
	TEST	[DLABEL],-1	;See if all labels have been defined
	JNZ	ERRJ
	MOV	AX,[DATA]
	CMP	AX,64		;Must only be 6 bits
	MOV	CL,1FH
	JNB	ERRJ
	MOV	BL,AL		;Save for second byte
	SHR	AL
	SHR	AL
	SHR	AL
	OR	AL,0D8H		;ESC opcode
	CALL	PUT
	PUSH	BX
	CALL	GETOP2
	POP	BX
	AND	BL,7		;Low 3 bits of first operand
	SHL	BL
	SHL	BL
	SHL	BL
	CMP	AL,UNDEFID	;Check for memory operand
	JZ	ESCMEM
	CMP	AL,CONST	;Check for another immediate
	JZ	ESCIMM
	MOV	CL,20
ERRJ:	JMP	ERROR

ESCMEM:
	OR	BL,DL		;Combine mode with first operand
	MOV	AL,BL
	JMP	PUTADD

ESCIMM:
	MOV	CL,1EH
	TEST	[DLABEL],-1	;See if second operand is fully defined
	JNZ	ERRJ
	MOV	AX,[DATA]
	MOV	CL,1FH
	CMP	AX,8		;Must only be 3 bit value
	JNB	ERRJ
	OR	AL,BL		;Combine first and second operands
	OR	AL,0C0H		;Force "register" mode
	JMP	PUT

GRP20:
	MOV	CH,AL
	MOV	CL,1
	CALL	MROPS
	MOV	CL,0F6H
	CALL	IMMED
	MOV	CH,0A8H
	JMP	AIMM
GRP21:
	CALL	GETOP
	CMP	AL,SREG
	MOV	CL,28
	JNZ	ERRJ
	MOV	CH,26H
PACKREG:
	MOV	AL,DL
	ADD	AL,AL
	ADD	AL,AL
	ADD	AL,AL
	OR	AL,CH
	JMP	PUT
GRP22:
	CALL	GETOP
	MOV	CX,8F00H
	CMP	AL,UNDEFID
	JNZ	$+5
	JMP	PMEM
	MOV	CH,58H
	CMP	AL,XREG
	JNZ	$+5
	JMP	PXREG
	MOV	CH,7
	CMP	AL,SREG
	JZ	PACKREG
	MOV	CL,20
ERR11:	JMP	ERROR
GRP23:
	MOV	[DATSIZ],AL
GETDAT:
	CALL	GETSYM
	MOV	AL,2
	CALL	VAL1
	MOV	AL,[SYM]
	CMP	AL,','
	MOV	AL,[DATSIZ]
	JNZ	ENDDAT
	CALL	SAVDAT
	JP	GETDAT
ENDDAT:
	CMP	AL,2
	JNZ	SAVDAT
	MOV	BX,[DATA]
	LAHF
	OR	BL,080H
	SAHF
	MOV	[DATA],BX
SAVDAT:
	OR	AL,AL
	JZ	$+5
	JMP	PUTBYT
	JMP	PUTWOR
IF:
	OR	BX,BX
	JZ	SKIPCD
	INC	B,[IFFLG]
	RET

SKIPCD:
	INC	B,[CHKLAB]
SKIPLP:
	XOR	AL,AL
	CALL	NEXLIN
	CALL	NEXTCHR
	CMP	AL,1AH
	JZ	END
	CALL	GETLAB
	JC	SKIPLP
	MOV	DI,LENID
	MOV	SI,IFEND
	MOV	CH,0
	MOV	CL,[DI]
	INC	CL
	REPE
	CMPB
	JZ	ENDCOND
	MOV	DI,LENID
	MOV	SI,IFNEST
	MOV	CL,[DI]
	INC	CL
	REPE
	CMPB
	JNZ	SKIPLP
	INC	B,[CHKLAB]
	JP	SKIPLP

ENDCOND:
	DEC	B,[CHKLAB]
	JNZ	SKIPLP
	RET

ENDIF:
	MOV	AL,[IFFLG]
	MOV	CL,36
	DEC	AL
	JS	ERRJMP
	MOV	[IFFLG],AL
	RET

ERRJMP:	JMP	ERROR

;*********************************************************************
;
;	PASS 2
;
;*********************************************************************

END:
	MOV	DL,4
WREND:
	MOV	CH,0FFH
	MOV	AL,CH
	CALL	GEN
	DEC	DL
	JNZ	WREND
	MOV	[BUFPT],SRCBUF
	MOV	B,[HEXCNT],-5	;FLAG HEX BUFFER AS EMPTY
	MOV	[LSTPNT],LSTBUF
	MOV	[HEXPNT],HEXBUF
	XOR	AX,AX
	MOV	[ERRCNT],AX
	MOV	[PC],AX
	MOV	[LINE],AX	;Current line number
	MOV	[HEXADD],OBJECT
	MOV	DX,FCB
	MOV	AH,OPEN
	INT	33		;Re-open source file
	XOR	AX,AX
	MOV	[FCB+12],AX	;Set CURRENT BLOCK to zero
	MOV	[FCB+20H],AL	;Set NEXT RECORD field to zero
	MOV	[FCB+14],BUFSIZ
	MOV	[COUNT],AL
	MOV	CH,1
	MOV	SI,START
FIXLINE:
	MOV	DI,START	;Store code over used up intermediate code
	XOR	AL,AL
	MOV	[SPC],AL	;No "special" yet (ORG, PUT, DS)
	MOV	[ERR],AL	;No second pass errors yet
NEXBT:
	SHL	CL		;Shift out last bit of previous code
	DEC	CH		;Still have codes left?
	JNZ	TESTTYP
	LODB			;Get next flag byte
	MOV	CL,AL
	MOV	CH,4
TESTTYP:
	SHL	CL		;Set flags based on two bits
	JO	FIXUP
	LODB
	JC	EMARK
OBJBT:
	STOB
	JP	NEXBT

FIXUP:
;Either a word or byte fixup is needed from a forward reference
	LODW			;Get pointer to symbol
	XCHG	AX,BX
	LODW			;Get constant part
	ADD	AX,[BX+1]	;Add symbol value to constant part
	CMP	B,[BX],0	;See if symbol got defined
	JNZ	HAVDEF
	MOV	B,[ERR],100	;Undefined - flag error
	XOR	AX,AX
HAVDEF:
	OR	CL,CL		;See if word or byte fixup
	JS	DEFBYT
	STOW
	JP	NEXBT

DEFBYT:
	MOV	DX,AX
	CBW			;Extend sign
	CMP	AX,DX		;See if in range +127 to -128
	JZ	OBJBT		;If so, it's always OK
	NOT	AH		;Check for range +255 to -256
	CMP	AH,DH
	JNZ	RNGERR		;Must always be in this range
;Check for short jump. If so, we're out of range; otherwise we're OK
	CMP	DI,START+1	;Only one other byte on line?
	JNZ	OBJBT		;Can't be short jump if not
	MOV	AL,[START]	;Get the first byte of this line
	CMP	AL,0EBH		;Direct short jump?
	JZ	RNGERR
	AND	AL,0FCH
	CMP	AL,0E0H		;LOOP or JCXZ instruction?
	JZ	RNGERR
	AND	AL,0F0H
	CMP	AL,70H		;Conditional jump?
	MOV	AL,DL		;Get code byte in AL
	JNZ	OBJBT		;If not, we're OK
RNGERR:
	MOV	B,[ERR],101	;Value out of range
	JP	OBJBT

FINIJ:	JMP	FINI

EMARK:
	CMP	AL,-1		;End of file?
	JZ	FINIJ
	CMP	AL,-10		;Special item?
	JA	SPEND
	PUSH	CX
	PUSH	SI
	PUSH	AX		;Save error code
	MOV	AH,[LSTDEV]
	AND	AH,0FEH		;Reset error indicator
	OR	AL,[ERR]	;See if any errors on this line
	JZ	NOERR
	OR	AH,1		;Send line to console if error occured
NOERR:
	MOV	[LSTDEV],AH
	MOV	CX,DI
	CALL	STRTLIN		;Print address of line
	MOV	SI,START
	SUB	CX,SI		;Get count of bytes of code
	JZ	SHOLIN
CODLP:
	LODB
	CALL	SAVCD		;Ouput code to HEX and PRN files
	LOOP	CODLP
SHOLIN:
	MOV	AL,0
	XCHG	AL,[COUNT]
	MOV	CX,7		;Allow 7 bytes of code per line
	SUB	CL,AL
	MOV	AL,' '
	JZ	NOFIL
BLNK:				;Put in 3 blanks for each byte not present
	CALL	LIST
	CALL	LIST
	CALL	LIST
	LOOP	BLNK
NOFIL:
	CALL	OUTLIN
	POP	AX		;Restore error code
	CALL	REPERR
	MOV	AL,[ERR]
	CALL	REPERR
	POP	SI
	POP	CX
	MOV	AL,[SPC]	;Any special funtion?
	OR	AL,AL
	JNZ	SPCFUN
	JMP	FIXLINE

SPEND:
	MOV	[SPC],AL	;Record special function
	LODW			;Get it's data
	MOV	[DATA],AX
	JMP	NEXBT

SPCFUN:
	MOV	DX,[DATA]
	CMP	AL,-2
	JZ	DORG
	CMP	AL,-3
	JZ	DPUT
DDS:
;Handle DS pseudo-op
	ADD	[PC],DX
	ADD	[HEXADD],DX
	JMP	FIXLINE

DORG:
;Handle ORG pseudo-op
	MOV	[PC],DX
	JMP	FIXLINE

DPUT:
;Handle PUT pseudo-op
	MOV	[HEXADD],DX
	JMP	FIXLINE

OUTLIN:
;Copy the source line to the ouput device. Line will be preceded by
;assembler-generated line number. This routine may be called several times
;on one line (once for each line of object code bytes), so it sets a flag
;so the line will only be output on the first call.
	MOV	AL,-1
	XCHG	AL,[LINFLG]
	OR	AL,AL
	JNZ	CRLF		;Output line only if first time
	MOV	AX,[LINE]
	INC	AX
	MOV	[LINE],AX
	MOV	BH,0		;No leading zero suppression
	CALL	OUT10
	MOV	AL," "
	CALL	LIST
	MOV	AL,[LSTFCB]
	CMP	AL,'Z'
	JZ	CRLF		;Don't call NEXTCHR if listing suppressed
	PUSH	SI		;Save the only register destroyed by NEXTCHR
OUTLN:
	CALL	NEXTCHR
	CALL	LIST
	CMP	AL,10		;Output until linefeed found
	JNZ	OUTLN
	POP	SI
	RET

PRTCNT:
	MOV	AX,[ERRCNT]
	MOV	BX,ERCNTM
PRNT10:
	PUSH	AX
	CALL	PRINT
	POP	AX
	MOV	BH,"0"-" "	;Enable leading zero suppression
	CALL	OUT10
CRLF:
	MOV	AL,13
	CALL	LIST
	MOV	AL,10
	JP	LIST

OUT10:
	XOR	DX,DX
	MOV	DI,10000
	DIV	AX,DI
	OR	AL,AL		;>10,000?
	JNZ	LEAD
	SUB	AL,"0"-" "	;Convert leading zero to blank
LEAD:
	ADD	AL,"0"
	CALL	LIST
	XCHG	AX,DX
	MOV	BL,100
	DIV	AL,BL
	MOV	BL,AH
	CALL	HIDIG		;Convert to decimal and print 1000s digit
	CALL	DIGIT		;Print 100s digit
	MOV	AL,BL
	CALL	HIDIG		;Convert to decimal and print 10s digit
	MOV	BH,0		;Ensure leading zero suppression is off
	JP	DIGIT

HIDIG:
	AAM			;Convert binary to unpacked BCD
	OR	AX,3030H	;Add "0" bias
DIGIT:
	XCHG	AL,AH
	CMP	AL,"0"
	JZ	SUPZ
	MOV	BH,0		;Turn off zero suppression if not zero
SUPZ:
	SUB	AL,BH		;Convert leading zeros to blanks
	JP	LIST

STRTLIN:
	MOV	B,[LINFLG],0
	MOV	BX,[PC]
	MOV	AL,BH
	CALL	PHEX
	MOV	AL,BL
PHEXB:
	CALL	PHEX
	MOV	AL,' '
LIST:
	PUSH	AX
	PUSH	DX
	AND	AL,7FH
	MOV	DL,AL
	TEST	B,[LSTDEV],3	;See if output goes to console
	JZ	PRNCHK
	MOV	AH,2
	INT	33		;Output to console
PRNCHK:
	TEST	B,[LSTDEV],4	;See if output goes to printer
	JZ	FILCHK
	MOV	AH,5
	INT	33		;Output to printer
FILCHK:
	MOV	AL,DL
	POP	DX
	TEST	B,[LSTDEV],80H	;See if output goes to a file
	JZ	LISTRET
	CALL	WRTBUF
LISTRET:
	POP	AX
	RET

WRTBUF:
	PUSH	DI
	MOV	DI,[LSTPNT]
	STOB
	CMP	DI,LSTBUF+LSTBUFSIZ
	JNZ	SAVPT
	PUSH	AX
	PUSH	CX
	PUSH	DX
	CALL	FLUSHBUF
	POP	DX
	POP	CX
	POP	AX
SAVPT:
	MOV	[LSTPNT],DI
	POP	DI
	RET

PHEX:
	PUSH	AX
	CALL	UHALF
	CALL	LIST
	POP	AX
	CALL	LHALF
	JP	LIST

FINI:
	OR	B,[LSTDEV],1
	CALL	PRTCNT
	MOV	BX,SYMSIZE
	MOV	AX,[6]
	SUB	AX,[HEAP]		;Size of symbol table
	CALL	PRNT10
	MOV	BX,FRESIZE
	MOV	AX,[HEAP]
	SUB	AX,[CODE]		;Free space remaining
	CALL	PRNT10
	AND	B,[LSTDEV],0FEH
	MOV	AL,[HEXFCB]
	CMP	AL,'Z'
	JZ	SYMDMP
	MOV	AL,[HEXCNT]
	CMP	AL,-5
	JZ	L0012
	CALL	ENHEXL
L0012:	
	MOV	AL,':'
	CALL	PUTCHR
	MOV	CH,10
HEXEND:
	PUSH	CX
	MOV	AL,'0'
	CALL	PUTCHR
	POP	CX
	DEC	CH
	JNZ	HEXEND
	MOV	AL,13
	CALL	PUTCHR
	MOV	AL,10
	CALL	PUTCHR
	MOV	AL,1AH
	CALL	PUTCHR
	CALL	WRTHEX		;Flush HEX file buffer
	MOV	DX,HEXFCB
	MOV	AH,CLOSE
	INT	33
SYMDMP:
	MOV	AL,[SYMFLG]
	CMP	AL,'S'
	JNZ	ENDSYM
	MOV	AL,[LSTDEV]
	OR	AL,AL		;Any output device for symbol table dump?
	JNZ	DOSYMTAB
	OR	AL,1		;If not, send it to console
	MOV	[LSTDEV],AL
DOSYMTAB:
	MOV	BX,SYMMES
	CALL	PRINT
	MOV	DX,[BASE]
	MOV	AL,DH
	OR	AL,DL
	JZ	ENDSYM
	MOV	B,[SYMLIN],SYMWID  ;No symbols on this line yet
	MOV	BX,[HEAP]
	MOV	SP,BX		;Need maximum stack for recursive tree walk
	CALL	NODE
ENDSYM:
	TEST	B,[LSTDEV],80H	;Print listing to file?
	JZ	EXIT
	MOV	AL,1AH
	CALL	WRTBUF		;Write end-of-file mark
	MOV	DI,[LSTPNT]
	CALL	FLUSHBUF
	MOV	AH,CLOSE
	INT	33
EXIT:	JMP	0

NODE:
	XCHG	DX,BX
	PUSH	BX
	MOV	DL,[BX]
	MOV	DH,0
	INC	BX
	ADD	BX,DX
	MOV	DX,[BX]
	OR	DX,DX
	JZ	L0014
	CALL	NODE
L0014:	
	POP	BX
	MOV	AL,[BX]
	INC	BX
	MOV	CH,AL
	ADD	AL,24
	SHR	AL
	SHR	AL
	SHR	AL
	MOV	CL,AL
	INC	CL		;Invert last bit
	AND	CL,1		;Number of extra tabs needed (0 or 1)
	SHR	AL		;Number of positions wide this symbol needs
	SUB	[SYMLIN],AL
	JNC	WRTSYM		;Will it fit?
	SUB	AL,SYMWID
	NEG	AL
	MOV	[SYMLIN],AL
	CALL	CRLF		;Start new line if not
WRTSYM:
	MOV	AL,[BX]
	INC	BX
	CALL	LIST
	DEC	CH
	JNZ	WRTSYM
	INC	CL
TABVAL:
	MOV	AL,9
	CALL	LIST
	LOOP	TABVAL
	INC	BX
	INC	BX
	PUSH	BX
	MOV	AL,[BX+4]
	CALL	PHEX
	MOV	AL,[BX+3]
	CALL	PHEX
	CMP	B,[SYMLIN],0	;Will any more fit on line?
	JZ	NEXSYMLIN
	MOV	AL,9
	CALL	LIST
	JP	RIGHTSON
NEXSYMLIN:
	CALL	CRLF
	MOV	B,[SYMLIN],SYMWID
RIGHTSON:
	POP	BX
	MOV	DX,[BX]
	OR	DX,DX
	JNZ	NODE
	RET

SAVCD:
	MOV	[PREV],AL
	PUSH	BX
	PUSH	CX
	PUSH	AX
	PUSH	DX
	CALL	CODBYT
	POP	DX
	MOV	BX,COUNT
	INC	B,[BX]
	MOV	AL,[BX]
	CMP	AL,8
	JNZ	NOEXT
	MOV	B,[BX],1
	CALL	OUTLIN
	MOV	AL,' '
	MOV	CH,5
TAB:
	CALL	LIST
	DEC	CH
	JNZ	TAB
NOEXT:
	POP	AX
	CALL	PHEXB
	POP	CX
	INC	[PC]
	INC	[HEXADD]
	POP	BX
	RET

REPERR:
	OR	AL,AL		;Did an error occur?
	JZ	RET
	INC	[ERRCNT]
	PUSH	AX
	MOV	BX,ERRMES	;Print "ERROR"
	CALL	PRINT
	POP	AX
;We have error number in AL. See if there's an error message for it
	MOV	DI,ERRTAB
	MOV	BL,80H
ERRLOOK:
	SCASB			;Do we have the error message
	JBE	HAVMES		;Quit looking if we have it or passed it
	XCHG	AX,BX		;Put 80H in AL to look for end of this message
NEXTMES:
	SCASB			;Look for high bit set in message
	JA	NEXTMES		;   which means we've reached the end
	XCHG	AX,BX		;Restore error number to AL
	JMPS	ERRLOOK		;Keep looking

HAVMES:
	MOV	BX,DI		;Put address of message in BX
	JZ	PRNERR		;Do we have a message for this error?
	CALL	PHEX		;If not, just print error number
	JMP	CRLF

PRNERR:
	CALL	PRINT
	JMP	CRLF

PRINT:
	MOV	AL,[BX]
	CALL	LIST
	OR	AL,AL
	JS	RET
	INC	BX
	JP	PRINT

OUTA:
	MOV	DL,AL
OUT:
	AND	DL,7FH
	MOV	CL,2
SYSTEM:
	CALL	5
	RET

CODBYT:
	CMP	B,[HEXFCB],"Z"
	JZ	RET
	PUSH	AX
	MOV	DX,[LASTAD]
	MOV	BX,[HEXADD]
	MOV	[LASTAD],BX
	INC	DX
	MOV	AL,[HEXCNT]
	CMP	AL,-5
	JZ	NEWLIN
	CMP	BX,DX
	JZ	AFHEX
	CALL	ENHEXL
NEWLIN:
	MOV	AL,':'
	CALL	PUTCHR
	MOV	AL,-4
	MOV	[HEXCNT],AL
	XOR	AL,AL
	MOV	[CHKSUM],AL
	MOV	BX,[HEXPNT]
	MOV	[HEXLEN],BX
	CALL	HEXBYT
	MOV	AL,[HEXADD+1]
	CALL	HEXBYT
	MOV	AL,[HEXADD]
	CALL	HEXBYT
	XOR	AL,AL
	CALL	HEXBYT
AFHEX:
	POP	AX
HEXBYT:
	MOV	CH,AL
	MOV	BX,CHKSUM
	ADD	AL,[BX]
	MOV	[BX],AL
	MOV	AL,CH
	CALL	UHALF
	CALL	PUTCHR
	MOV	AL,CH
	CALL	LHALF
	CALL	PUTCHR
	MOV	BX,HEXCNT
	INC	B,[BX]
	MOV	AL,[BX]
	CMP	AL,26
	JNZ	RET
ENHEXL:
	MOV	DI,[HEXLEN]
	MOV	CH,AL
	CALL	UHALF
	STOB
	MOV	AL,CH
	CALL	LHALF
	STOB
	MOV	AL,-6
	MOV	[HEXCNT],AL
	MOV	AL,[CHKSUM]
	ADD	AL,CH
	NEG	AL
	CALL	HEXBYT
	MOV	AL,13
	CALL	PUTCHR
	MOV	AL,10
	CALL	PUTCHR
WRTHEX:
;Write out the line
	MOV	DX,HEXBUF
	MOV	[HEXPNT],DX
	MOV	AH,SETDMA
	INT	33
	SUB	DI,DX		;Length of buffer
	MOV	CX,DI
	MOV	DX,HEXFCB
	MOV	AH,BLKWRT
	INT	33
	OR	AL,AL
	JNZ	DSKFUL
	RET

PUTCHR:
	MOV	DI,[HEXPNT]
	STOB
	MOV	[HEXPNT],DI
	RET

FLUSHBUF:
	MOV	CX,DI
	MOV	DX,LSTBUF
	MOV	DI,DX
	SUB	CX,DX
	JZ	RET		;Buffer empty?
	MOV	AH,SETDMA
	INT	33
	MOV	DX,LSTFCB
	MOV	AH,BLKWRT
	INT	33
	OR	AL,AL
	JZ	RET
DSKFUL:
	MOV	BX,WRTERR
	JMP	PRERR

UHALF:
	RCR	AL
	RCR	AL
	RCR	AL
	RCR	AL
LHALF:
	AND	AL,0FH
	OR	AL,30H
	CMP	AL,'9'+1
	JC	RET
	ADD	AL,7
	RET

NONE:	DB	0

; 8086 MNEMONIC TABLE

; This table is actually a sequence of subtables, each starting with a label.
; The label signifies which mnemonics the subtable applies to--A3, for example,
; means all 3-letter mnemonics beginning with A.

A3:
	DB	7
	DB	'dd'
	DW	GRP7
	DB	2
	DB	'nd'
	DW	GRP13
	DB	22H
	DB	'dc'
	DW	GRP7
	DB	12H
	DB	'aa'
	DW	PUT
	DB	37H
	DB	'as'
	DW	PUT
	DB	3FH
	DB	'am'
	DW	GRP11
	DB	0D4H
	DB	'ad'
	DW	GRP11
	DB	0D5H
A5:
	DB	1
	DB	'lign'
	DW	ALIGN
	DB	0
C3:
	DB	7
	DB	'mp'
	DW	GRP7
	DB	3AH
	DB	'lc'
	DW	PUT
	DB	0F8H
	DB	'ld'
	DW	PUT
	DB	0FCH
	DB	'li'
	DW	PUT
	DB	0FAH
	DB	'mc'
	DW	PUT
	DB	0F5H
	DB	'bw'
	DW	PUT
	DB	98H
	DB	'wd'
	DW	PUT
	DB	99H
C4:
	DB	3
	DB	'all'
	DW	GRP14
	DB	9AH
	DB	'mpb'
	DW	PUT
	DB	0A6H
	DB	'mpw'
	DW	PUT
	DB	0A7H
C5:
	DB	2
	DB	'mpsb'
	DW	PUT
	DB	0A6H
	DB	'mpsw'
	DW	PUT
	DB	0A7H
D2:
	DB	5
	DB	'b'
	DW	GRP23
	DB	1
	DB	'w'
	DW	GRP23
	DB	0
	DB	'm'
	DW	GRP23
	DB	2
	DB	's'
	DW	GRP5
	DB	1
	DB	'i'
	DW	PUT
	DB	0FAH
D3:
	DB	4
	DB	'ec'
	DW	GRP8
	DB	49H
	DB	'iv'
	DW	GRP10
	DB	30H
	DB	'aa'
	DW	PUT
	DB	27H
	DB	'as'
	DW	PUT
	DB	2FH
D4:
	DB	1
	DB	'own'
	DW	PUT
	DB	0FDH
E2:
	DB	1
	DB	'i'
	DW	PUT
	DB	0FBH
E3:
	DB	3
	DB	'qu'
	DW	GRP5
	DB	2
	DB	'sc'
	DW	GRP19
	DB	0D8H
	DB	'nd'
	DW	END
	DB	0
E5:
	DB	1
	DB	'ndif'
	DW	ENDIF
	DB	0
H3:
	DB	1
	DB	'lt'
	DW	PUT
	DB	0F4H
H4:
	DB	1
	DB	'alt'
	DW	PUT
	DB	0F4H
I2:
	DB	2
	DB	'n'
	DW	GRP4
	DB	0E4H
	DB	'f'
	DW	GRP5
	DB	4
I3:
	DB	4
	DB	'nc'
	DW	GRP8
	DB	41H
	DB	'nb'
	DW	GRP4
	DB	0E4H
	DB	'nw'
	DW	GRP4
	DB	0E5H
	DB	'nt'
	DW	GRP18
	DB	0CCH
I4:
	DB	4
	DB	'mul'
	DW	GRP10
	DB	28H
	DB	'div'
	DW	GRP10
	DB	38H
	DB	'ret'
	DW	PUT
	DB	0CFH
	DB	'nto'
	DW	PUT
	DB	0CEH
J2:
	DB	10
	DB	'p'
	DW	GRP17
	DB	0EBH
	DB	'z'
	DW	GRP17
	DB	74H
	DB	'e'
	DW	GRP17
	DB	74H
	DB	'l'
	DW	GRP17
	DB	7CH
	DB	'b'
	DW	GRP17
	DB	72H
	DB	'a'
	DW	GRP17
	DB	77H
	DB	'g'
	DW	GRP17
	DB	7FH
	DB	'o'
	DW	GRP17
	DB	70H
	DB	's'
	DW	GRP17
	DB	78H
	DB	'c'
	DW	GRP17
	DB	72H
J3:
	DB	17
	DB	'mp'
	DW	GRP14
	DB	0EAH
	DB	'nz'
	DW	GRP17
	DB	75H
	DB	'ne'
	DW	GRP17
	DB	75H
	DB	'nl'
	DW	GRP17
	DB	7DH
	DB	'ge'
	DW	GRP17
	DB	7DH
	DB	'nb'
	DW	GRP17
	DB	73H
	DB	'ae'
	DW	GRP17
	DB	73H
	DB	'nc'
	DW	GRP17
	DB	73H
	DB	'ng'
	DW	GRP17
	DB	7EH
	DB	'le'
	DW	GRP17
	DB	7EH
	DB	'na'
	DW	GRP17
	DB	76H
	DB	'be'
	DW	GRP17
	DB	76H
	DB	'pe'
	DW	GRP17
	DB	7AH
	DB	'np'
	DW	GRP17
	DB	7BH
	DB	'po'
	DW	GRP17
	DB	7BH
	DB	'no'
	DW	GRP17
	DB	71H
	DB	'ns'
	DW	GRP17
	DB	79H
J4:
	DB	6
	DB	'mps'
	DW	GRP17
	DB	0EBH
	DB	'cxz'
	DW	GRP17
	DB	0E3H
	DB	'nge'
	DW	GRP17
	DB	7CH
	DB	'nae'
	DW	GRP17
	DB	72H
	DB	'nbe'
	DW	GRP17
	DB	77H
	DB	'nle'
	DW	GRP17
	DB	7FH
L3:
	DB	3
	DB	'ea'
	DW	GRP6
	DB	8DH
	DB	'ds'
	DW	GRP6
	DB	0C5H
	DB	'es'
	DW	GRP6
	DB	0C4H
L4:
	DB	5
	DB	'oop'
	DW	GRP17
	DB	0E2H
	DB	'odb'
	DW	PUT
	DB	0ACH
	DB	'odw'
	DW	PUT
	DB	0ADH
	DB	'ahf'
	DW	PUT
	DB	9FH
	DB	'ock'
	DW	PUT
	DB	0F0H
L5:
	DB	4
	DB	'oope'
	DW	GRP17
	DB	0E1H
	DB	'oopz'
	DW	GRP17
	DB	0E1H
	DB	'odsb'
	DW	PUT
	DB	0ACH
	DB	'odsw'
	DW	PUT
	DB	0ADH
L6:
	DB	2
	DB	'oopne'
	DW	GRP17
	DB	0E0H
	DB	'oopnz'
	DW	GRP17
	DB	0E0H
M3:
	DB	2
	DB	'ov'
	DW	GRP1
	DB	88H
	DB	'ul'
	DW	GRP10
	DB	20H
M4:
	DB	2
	DB	'ovb'
	DW	PUT
	DB	0A4H
	DB	'ovw'
	DW	PUT
	DB	0A5H
M5:
	DB	2
	DB	'ovsb'
	DW	PUT
	DB	0A4H
	DB	'ovsw'
	DW	PUT
	DB	0A5H
N3:
	DB	3
	DB	'ot'
	DW	GRP9
	DB	10H
	DB	'eg'
	DW	GRP9
	DB	18H
	DB	'op'
	DW	PUT
	DB	90H
O2:
	DB	1
	DB	'r'
	DW	GRP13
	DB	0AH
O3:
	DB	2
	DB	'ut'
	DW	GRP4
	DB	0E6H
	DB	'rg'
	DW	GRP5
	DB	0
O4:
	DB	2
	DB	'utb'
	DW	GRP4
	DB	0E6H
	DB	'utw'
	DW	GRP4
	DB	0E7H
P3:
	DB	2
	DB	'op'
	DW	GRP22
	DB	8FH
	DB	'ut'
	DW	GRP5
	DB	3
P4:
	DB	2
	DB	'ush'
	DW	GRP2
	DB	0FFH
	DB	'opf'
	DW	PUT
	DB	9DH
P5:
	DB	1
	DB	'ushf'
	DW	PUT
	DB	9CH
R3:
	DB	6
	DB	'et'
	DW	GRP16
	DB	0C3H
	DB	'ep'
	DW	PUT
	DB	0F3H
	DB	'ol'
	DW	GRP12
	DB	0
	DB	'or'
	DW	GRP12
	DB	8
	DB	'cl'
	DW	GRP12
	DB	10H
	DB	'cr'
	DW	GRP12
	DB	18H
R4:
	DB	2
	DB	'epz'
	DW	PUT
	DB	0F3H
	DB	'epe'
	DW	PUT
	DB	0F3H
R5:
	DB	2
	DB	'epnz'
	DW	PUT
	DB	0F2H
	DB	'epne'
	DW	PUT
	DB	0F2H
S3:
	DB	11
	DB	'ub'
	DW	GRP7
	DB	2AH
	DB	'bb'
	DW	GRP7
	DB	1AH
	DB	'bc'
	DW	GRP7
	DB	1AH
	DB	'tc'
	DW	PUT
	DB	0F9H
	DB	'td'
	DW	PUT
	DB	0FDH
	DB	'ti'
	DW	PUT
	DB	0FBH
	DB	'hl'
	DW	GRP12
	DB	20H
	DB	'hr'
	DW	GRP12
	DB	28H
	DB	'al'
	DW	GRP12
	DB	20H
	DB	'ar'
	DW	GRP12
	DB	38H
	DB	'eg'
	DW	GRP21
	DB	26H
S4:
	DB	5
	DB	'cab'
	DW	PUT
	DB	0AEH
	DB	'caw'
	DW	PUT
	DB	0AFH
	DB	'tob'
	DW	PUT
	DB	0AAH
	DB	'tow'
	DW	PUT
	DB	0ABH
	DB	'ahf'
	DW	PUT
	DB	9EH
S5:
	DB	4
	DB	'casb'
	DW	PUT
	DB	0AEH
	DB	'casw'
	DW	PUT
	DB	0AFH
	DB	'tosb'
	DW	PUT
	DB	0AAH
	DB	'tosw'
	DW	PUT
	DB	0ABH
T4:
	DB	1
	DB	'est'
	DW	GRP20
	DB	84H
U2:
	DB	1
	DB	'p'
	DW	PUT
	DB	0FCH
W4:
	DB	1
	DB	'ait'
	DW	PUT
	DB	9BH
X3:
	DB	1
	DB	'or'
	DW	GRP13
	DB	32H
X4:
	DB	2
	DB	'chg'
	DW	GRP3
	DB	86H
	DB	'lat'
	DW	PUT
	DB	0D7H


; 8087 MNEMONIC TABLE
; Similar to 8086 table above, except NOT distinguished by opcode length

XM1:	;F2XM1
	DB	1		;One opcode
	DM	"xm1"
	DB	1,0F0H

NDPA:
	DB	3
	DM	"dd"
	DB	6+ARITH,0C1H
	DM	"ddp"
	DB	NEEDOP+STACKOP,0
	DM	"bs"
	DB	1,0E1H

NDPB:
	DB	2
	DM	"ld"
	DB	7+NEEDOP+MEMORY,20H
	DM	"stp"
	DB	7+NEEDOP+MEMORY,30H

NDPC:
	DB	5
	DM	"om"
	DB	0+ONEREG+REAL,0D1H
	DM	"omp"
	DB	0+ONEREG+REAL,0D9H
	DM	"hs"
	DB	1,0E0H
	DM	"ompp"
	DB	6,0D9H
	DM	"lex"
	DB	3,0E2H

NDPD:
	DB	6
	DM	"iv"
	DB	6+ARITH,0F1H
	DM	"ivp"
	DB	NEEDOP+STACKOP,30H
	DM	"ivr"
	DB	6+ARITH,0F9H
	DM	"ivrp"
	DB	NEEDOP+STACKOP,38H
	DM	"ecstp"
	DB	1,0F6H
	DM	"isi"
	DB	3,0E1H

NDPE:
	DB	1
	DM	"ni"
	DB	3,0E0H

NDPF:
	DB	1
	DM	"ree"
	DB	5+NEEDOP+ONEREG,0

NDPI:
	DB	13
	DM	"add"
	DB	2+NEEDOP+INTEGER,0
	DM	"ld"
	DB	3+NEEDOP+INTEGER+EXTENDED,0
	DM	"sub"
	DB	2+NEEDOP+INTEGER,20H
	DM	"stp"
	DB	3+NEEDOP+INTEGER+EXTENDED,18H
	DM	"st"
	DB	3+NEEDOP+INTEGER,10H
	DM	"mul"
	DB	2+NEEDOP+INTEGER,8
	DM	"div"
	DB	2+NEEDOP+INTEGER,30H
	DM	"subr"
	DB	2+NEEDOP+INTEGER,28H
	DM	"divr"
	DB	2+NEEDOP+INTEGER,38H
	DM	"com"
	DB	2+NEEDOP+INTEGER,10H
	DM	"comp"
	DB	2+NEEDOP+INTEGER,18H
	DM	"ncstp"
	DB	1,0F7H
	DM	"nit"
	DB	3,0E3H

NDPL:
	DB	10
	DM	"d"
	DB	1+NEEDOP+ONEREG+REAL+EXTENDED,0
	DM	"dz"
	DB	1,0EEH
	DM	"d1"
	DB	1,0E8H
	DM	"dpi"
	DB	1,0EBH
	DM	"dl2t"
	DB	1,0E9H
	DM	"dl2e"
	DB	1,0EAH
	DM	"dlg2"
	DB	1,0ECH
	DM	"dln2"
	DB	1,0EDH
	DM	"dcw"
	DB	1+NEEDOP+MEMORY,28H
	DM	"denv"
	DB	1+NEEDOP+MEMORY,20H

NDPM:
	DB	2
	DM	"ul"
	DB	6+ARITH,0C9H
	DM	"ulp"
	DB	NEEDOP+STACKOP,8

NDPO:
	DB	1
	DM	"p"
	DB	NEEDOP+1,0	;Flag special handling

NDPN:
	DB	1
	DM	"op"
	DB	1,0D0H

NDPP:
	DB	3
	DM	"rem"
	DB	1,0F8H
	DM	"tan"
	DB	1,0F2H
	DM	"atan"
	DB	1,0F3H

NDPR:
	DB	2
	DM	"ndint"
	DB	1,0FCH
	DM	"stor"
	DB	5+NEEDOP+MEMORY,20H

NDPS:
	DB	12
	DM	"t"
	DB	5+NEEDOP+ONEREG+REAL,0D0H
	DM	"tp"
	DB	7+NEEDOP+ONEREG+REAL+EXTENDED,0D8H
	DM	"ub"
	DB	6+ARITH,0E1H
	DM	"ubp"
	DB	NEEDOP+STACKOP,0E0H
	DM	"ubr"
	DB	6+ARITH,0E9H
	DM	"ubrp"
	DB	NEEDOP+STACKOP,0E8H
	DM	"qrt"
	DB	1,0FAH
	DM	"cale"
	DB	1,0FDH
	DM	"ave"
	DB	5+NEEDOP+MEMORY,30H
	DM	"tcw"
	DB	1+NEEDOP+MEMORY,38H
	DM	"tenv"
	DB	1+NEEDOP+MEMORY,30H
	DM	"tsw"
	DB	5+NEEDOP+MEMORY,38H

NDPT:
	DB	1
	DM	"st"
	DB	1,0E4H

NDPW:
	DB	1
	DM	"ait"
	DB	NEEDOP,0	;Flag special handling

NDPX:
	DB	3
	DM	"ch"
	DB	1+ONEREG,0C9H
	DM	"am"
	DB	1,0E5H
	DM	"tract"
	DB	1,0F4H

NDPY:
	DB	2
	DM	"l2x"
	DB	1,0F1H
	DM	"l2xp1"
	DB	1,0F9H


OPTAB:
; Table of pointers  to mnemonics. For each letter of the alphabet (the
; starting letter of the mnemonic), there are 5 entries. Each entry
; corresponds to a mnemonic whose length is 2, 3, 4, 5, and 6 characters
; long, respectively. If there are no mnemonics for a given combination
; of first letter and length (such as A-2), then the corresponding entry
; points to NONE. Otherwise, it points to a place in the mnemonic table
; for that type.

; This table only needs to be modified if a mnemonic is added to a group
; previously marked NONE. Change the NONE to a label made up of the first
; letter of the mnemonic and its length, then add a new subsection to
; the mnemonic table in alphabetical order.

	DW	NONE
	DW	A3
	DW	NONE
	DW	A5
	DW	NONE
	DW	NONE	;B
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE	;C
	DW	C3
	DW	C4
	DW	C5
	DW	NONE
	DW	D2	;D
	DW	D3
	DW	D4
	DW	NONE
	DW	NONE
	DW	E2	;E
	DW	E3
	DW	NONE
	DW	E5
	DW	NONE
	DW	NONE	;F
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE	;G
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE	;H
	DW	H3
	DW	H4
	DW	NONE
	DW	NONE
	DW	I2	;I
	DW	I3
	DW	I4
	DW	NONE
	DW	NONE
	DW	J2	;J
	DW	J3
	DW	J4
	DW	NONE
	DW	NONE
	DW	NONE	;K
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE	;L
	DW	L3
	DW	L4
	DW	L5
	DW	L6
	DW	NONE	;M
	DW	M3
	DW	M4
	DW	M5
	DW	NONE
	DW	NONE	;N
	DW	N3
	DW	NONE
	DW	NONE
	DW	NONE
	DW	O2	;O
	DW	O3
	DW	O4
	DW	NONE
	DW	NONE
	DW	NONE	;P
	DW	P3
	DW	P4
	DW	P5
	DW	NONE
	DW	NONE	;Q
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE	;R
	DW	R3
	DW	R4
	DW	R5
	DW	NONE
	DW	NONE	;S
	DW	S3
	DW	S4
	DW	S5
	DW	NONE
	DW	NONE	;T
	DW	NONE
	DW	T4
	DW	NONE
	DW	NONE
	DW	U2	;U
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE	;V
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE	;W
	DW	NONE
	DW	W4
	DW	NONE
	DW	NONE
	DW	NONE	;X
	DW	X3
	DW	X4
	DW	NONE
	DW	NONE
	DW	NONE	;Y
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE	;Z
	DW	NONE
	DW	NONE
	DW	NONE
	DW	NONE

NDPTAB:
;Lookup table for 8087 mnemonics. There is one entry for each letter of the
;alphabet
	DW	NDPA
	DW	NDPB
	DW	NDPC
	DW	NDPD
	DW	NDPE
	DW	NDPF
	DW	NONE	;G
	DW	NONE	;H
	DW	NDPI
	DW	NONE	;J
	DW	NONE	;K
	DW	NDPL
	DW	NDPM
	DW	NDPN
	DW	NDPO
	DW	NDPP
	DW	NONE	;Q
	DW	NDPR
	DW	NDPS
	DW	NDPT
	DW	NONE	;U
	DW	NONE	;V
	DW	NDPW
	DW	NDPX
	DW	NDPY
	DW	NONE	;Z

;Error message table

ERRTAB:
	DM	1,"Register not allowed in immediate value"
	DM	2,"Index or base register must be BP, BX, SI, or DI"
	DM	3,"Only one base register (BX, BP) allowed"
	DM	4,"Only one index register (SI or DI) allowed"
	DM	5,"Only addition allowed on register or undefined label"
	DM	6,"Only one undefined label per expression allowed"
	DM	7,"Illegal digit in hexadecimal number"
	DM	8,"Illegal digit in decimal number"
	DM	10,"Illegal character in label or opcode"
	DM	11,"Label defined twice"
	DM	12,"Opcode not recognized"
	DM	20,"Invalid operand"
	DM	21,'"," and second operand expected'
	DM	22,"Register mismatch"
	DM	23,"Immediate operand not allowed"
	DM	24,'"]" expected'
	DM	25,"Two memory operands not allowed"
	DM	26,"Destination must not be immediate value"
	DM	27,"Both operands must not be registers"
	DM	28,"Operand must be segment register"
	DM	29,"First operand must be register"
	DM	30,"Undefined label not allowed"
	DM	31,"Value out of range"
	DM	32,"Missing or illegal operand size flag"
	DM	33,"Must have label on same line"
	DM	35,"Zero-length string illegal"
	DM	36,"ENDIF without IF"
	DM	37,"One-character strings only"
	DM	38,"Illegal expression"
	DM	39,"End of string not found"
	DM	100,"Undefined label"
	DM	101,"Value out of range (forward)"
	DB	255

ERRMES:	DM	'***** ERROR:  '
NOSPAC:	DB	13,10,'File creation error',13,10,"$"
NOMEM:	DB	13,10,'Insufficient memory',13,10,'$'
NOFILE:	DB	13,10,'File not found',13,10,'$'
WRTERR:	DB	13,10,'Disk full',13,10,'$'
BADDSK:	DB	13,10,'Bad disk specifier',13,10,'$'
ERCNTM:	DM	13,10,13,10,'Error Count ='
SYMSIZE	DM	13,10,'Symbol Table size = '
FRESIZE	DM	      'Free space =        '
SYMMES:	DM	13,10,'Symbol Table',13,10,13,10
EXTEND:	DB	'ASM',0,0
IFEND:	DB	5,'endif'
IFNEST:	DB	2,'if'
RETSTR:	DM	'ret'
HEXFCB:	DB	0,'        HEX',0,0,0,0
	DS	16
	DB	0,0,0,0,0
LSTFCB:	DB	0,'        PRN',0,0,0,0
	DS	16
	DB	0,0,0,0,0
PC:	DS	2
OLDPC:	DS	2
LABPT:	DS	2
FLAG:	DS	1
MAXFLG:	DS	1
ADDR:	DS	2
ALABEL:	DS	2
DATA:	DS	2
DLABEL:	DS	2
CON:	DS	2
UNDEF:	DS	2
LENID:	DS	1
ID:	DS	80
CHR:	DS	1
SYM:	DS	1
BASE:	DS	2
HEAP:	DS	2
SYMFLG:	DS	1
SYMLIN:	DS	1
CODE:	DS	2
DATSIZ:	DS	1
RELOC:	DS	1
BCOUNT:	DS	1
COUNT:	DS	1
ERR:	DS	1
LINE:	DS	2
HEXLEN:	DS	2
HEXADD:	DS	2
LASTAD:	DS	2
HEXCNT:	DS	1
CHKSUM:	DS	1
LINFLG:	DS	1
PREV:	DS	1
IFFLG:	DS	1
CHKLAB:	DS	1
ERRCNT:	DS	2
LSTRET:	DS	2
RETPT:	DS	2
LSTDEV:	DS	2
SPC:	DS	1
NOWAIT:	DS	1
IX:	DS	2
IY:	DS	2
HEXPNT:	DS	2
LSTPNT:	DS	2
HEXBUF:	DS	HEXBUFSIZ
LSTBUF:	DS	LSTBUFSIZ
BUFPT:	DS	2
SRCBUF:	DS	BUFSIZ
	DS	100H
	ALIGN
STACK:	EQU	$
START:	EQU	$

```