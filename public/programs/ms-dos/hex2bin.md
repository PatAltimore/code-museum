---
title: "HEX2BIN.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v1.25/source/HEX2BIN.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v1.25/source/HEX2BIN.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "hex2bin"
order: 12
description: "HEX2BIN.ASM: A utility to convert Intel HEX files to binary, showcasing early MS-DOS assembly programming techniques."

summary:
  - point: "Demonstrates direct hardware interaction via INT 21h for file operations"
    link: "https://en.wikipedia.org/wiki/INT_21H"
    link_label: "INT 21h"
  - point: "Implements hex-to-binary conversion using efficient bitwise operations"
    link: "https://en.wikipedia.org/wiki/Intel_HEX"
    link_label: "Intel HEX format"
  - point: "Highlights constraints of early MS-DOS systems, such as memory and file handling"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Uses assembly macros and equates for readability and modularity"
    link: "https://en.wikipedia.org/wiki/Assembly_language"
    link_label: "Assembly language"
  - point: "Reflects Tim Paterson's programming style and influence on early PC software"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "buffer-size-definition"
    line_start: 13
    line_end: 16
    title: "Defining buffer size for file operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computer_science)"
    image_url: ""
    image_caption: ""
    content: "The BUFSIZ equate defines the buffer size as 1024 bytes, a critical parameter for file operations in this program. In the early 1980s, memory constraints were a significant challenge, as PCs typically had only 16KB to 64KB of RAM. By allocating a fixed buffer size, the program ensures predictable behavior when reading and writing files. This approach reflects the necessity of manual memory management in assembly programming, where every byte counted. Tim Paterson, the author of MS-DOS, was known for his pragmatic coding style, balancing efficiency with simplicity. The choice of 1024 bytes aligns with the block sizes used in disk sectors of the time, optimizing file I/O operations. This decision influenced subsequent MS-DOS utilities, which often adopted similar buffer management techniques."
  - id: "hex-to-binary-conversion"
    line_start: 18
    line_end: 24
    title: "Starting hex-to-binary conversion"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "The HEX2BIN subroutine initializes the conversion process from Intel HEX format to binary. Intel HEX files were a common format for storing executable code in the early microcomputer era, consisting of ASCII-encoded hexadecimal data. This subroutine begins by checking for a file extension and preparing the necessary pointers for processing. In 1981, tools like HEX2BIN were essential for developers working with early PCs, as they bridged the gap between development environments and hardware constraints. Tim Paterson's work on MS-DOS often involved creating utilities like this to streamline software development for the IBM PC. The simplicity and directness of the code reflect the urgency and resourcefulness of the era, as developers raced to meet the demands of a rapidly growing personal computer market."
  - id: "handling-load-offsets"
    line_start: 25
    line_end: 38
    title: "Handling load offsets in HEX files"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_address"
    image_url: ""
    image_caption: ""
    content: "The HAVEXT and GETOFF sections handle load offsets specified in the HEX file. Load offsets determine where in memory the binary data should be placed, a crucial aspect of program execution on early PCs. The code accounts for signed offsets, allowing flexibility in memory placement. In the early 1980s, memory management was a manual process, and developers had to carefully plan memory layouts to avoid conflicts. Tim Paterson's approach here reflects his deep understanding of the 8086 architecture and its segmented memory model. By providing robust handling of offsets, HEX2BIN ensures compatibility with a wide range of HEX files, making it a versatile tool for developers. This functionality laid the groundwork for more sophisticated memory management techniques in later versions of MS-DOS."
  - id: "segment-initialization"
    line_start: 56
    line_end: 84
    title: "Initializing memory segment for binary data"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_segmentation"
    image_url: ""
    image_caption: ""
    content: "The HAVOFF section computes the load segment and initializes it with zeros, preparing it to receive binary data. Memory segmentation was a defining feature of the 8086 processor, allowing programs to address up to 1MB of memory despite the 16-bit architecture. This code uses direct hardware interaction via INT 33h to allocate memory, a common practice in MS-DOS programming. Filling the segment with zeros ensures a clean slate, preventing residual data from interfering with program execution. Tim Paterson's design philosophy emphasized reliability and efficiency, evident in this meticulous initialization routine. This approach influenced later MS-DOS utilities and contributed to the operating system's reputation for stability in the early PC era."
  - id: "reading-hex-records"
    line_start: 85
    line_end: 99
    title: "Reading and processing HEX file records"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "The READHEX subroutine reads records from the HEX file, extracting byte counts, addresses, and data. Intel HEX files consist of records that encode binary data in a human-readable format, making them ideal for debugging and manual editing. This subroutine ensures that each record is correctly interpreted and placed in memory, handling offsets and type bytes as needed. In the early 1980s, tools like HEX2BIN were indispensable for developers working with microcomputers, as they simplified the process of loading programs onto hardware. Tim Paterson's implementation reflects the practical needs of the time, balancing functionality with performance. The techniques used here influenced the design of similar utilities in the MS-DOS ecosystem, cementing their role in the software development workflow."
  - id: "error-handling"
    line_start: 119
    line_end: 121
    title: "Error handling for out-of-range addresses"
    wikipedia_url: "https://en.wikipedia.org/wiki/Error_handling"
    image_url: ""
    image_caption: ""
    content: "The ADERR subroutine handles errors related to out-of-range addresses, displaying an error message and aborting the conversion process. Error handling was a critical aspect of software development in the early PC era, as hardware limitations and manual processes often led to unexpected issues. By providing clear feedback to the user, HEX2BIN ensures that errors can be diagnosed and corrected efficiently. Tim Paterson's focus on usability is evident in this subroutine, which prioritizes clarity and reliability. This approach to error handling became a hallmark of MS-DOS utilities, contributing to their widespread adoption and success in the personal computer market."
  - id: "writing-binary-data"
    line_start: 168
    line_end: 193
    title: "Writing binary data to output file"
    wikipedia_url: "https://en.wikipedia.org/wiki/File_system"
    image_url: ""
    image_caption: ""
    content: "The DONE section writes the converted binary data to an output file, completing the conversion process. File operations are performed using INT 21h, the MS-DOS interrupt for system calls. This direct interaction with the operating system reflects the low-level nature of assembly programming, where developers had to manage every aspect of file handling manually. Tim Paterson's design ensures that the output file is correctly formatted and closed, preventing data corruption. This subroutine exemplifies the practical challenges of early PC software development, where tools like HEX2BIN played a crucial role in bridging the gap between development environments and hardware constraints. The techniques used here influenced the design of file handling routines in later MS-DOS versions, shaping the operating system's evolution."
  - id: "program-entry-point"
    line_start: 212
    line_end: 214
    title: "Program entry point and initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bootstrapping_(computing)"
    image_url: ""
    image_caption: ""
    content: "The START label marks the entry point of HEX2BIN, initializing the program and preparing it for execution. In assembly language, the entry point is where execution begins, and it often includes setup routines to configure the environment. This code calculates the starting segment for memory allocation, ensuring compatibility with the 8086's segmented memory model. Tim Paterson's approach reflects his deep understanding of the hardware and his ability to optimize software for the constraints of the time. The entry point is a critical aspect of any program, and its design influences the program's reliability and performance. HEX2BIN's initialization routine exemplifies the careful planning required in early PC software development, laying the foundation for the program's functionality."

---

; HEX2BIN  version 1.02
; Converts Intel hex format files to straight binary

FCB:	EQU	5CH
READ:	EQU	20
SETDMA:	EQU	26
OPEN:	EQU	15
CLOSE:	EQU	16
CREATE:	EQU	22
DELETE:	EQU	19
BLKWRT:	EQU	40
GETSEG:	EQU	38
BUFSIZ:	EQU	1024

	ORG	100H
	PUT	100H

HEX2BIN:
	MOV	DI,FCB+9
	CMP	B,[DI]," "
	JNZ	HAVEXT
	MOV	SI,HEX
	MOVB
	MOVW
HAVEXT:
;Get load offset (default is -100H)
	MOV	CL,4		;Needed for shifts
	MOV	[OFFSET],-100H
	MOV	SI,FCB+11H	;Scan second FCB for offset
	LODB
	CMP	AL," "		;Check if offset present
	JZ	HAVOFF
	MOV	B,[SIGN],0	;Assume positive sign for now
	CMP	AL,"+"
	JZ	GETOFF		;Get a positive offset
	CMP	AL,"-"
	JNZ	GETOFF1		;If not + or -, then not signed
	MOV	B,[SIGN],1	;Flag as negative offset
GETOFF:
	LODB			;Eat sign
GETOFF1:
	CALL	HEXCHK		;Check for valid hex character
	JC	HAVOFF		;No offset if not valid
	XOR	BX,BX		;Intialize offset sum to 0
CONVOFF:
	SHL	BX,CL		;Multiply current sum by 16
	OR	BL,AL		;Add in current hex digit
	LODB			;Get next digit
	CALL	HEXCHK		;And convert it to binary
	JNC	CONVOFF		;Loop until all hex digits read
	TEST	B,[SIGN],-1	;Check if offset was to be negative
	JZ	SAVOFF
	NEG	BX
SAVOFF:
	MOV	[OFFSET],BX
HAVOFF:
	MOV	DX,STARTSEG
	MOV	AX,DS
	ADD	DX,AX		;Compute load segment
	MOV	AH,GETSEG
	INT	33
	MOV	ES,DX
	SEG	ES
	MOV	CX,[6]		;Get size of segment
	MOV	[SEGSIZ],CX
	XOR	AX,AX
	MOV	DI,AX
	MOV	BP,AX
	SHR	CX
	REP
	STOW			;Fill entire segment with zeros
	MOV	AH,OPEN
	MOV	DX,FCB
	INT	21H
	OR	AL,AL
	JNZ	NOFIL
	MOV	B,[FCB+32],0
	MOV	[FCB+14],BUFSIZ	;Set record size to buffer size
	MOV	DX,BUFFER
	MOV	AH,SETDMA
	INT	33
	MOV	AH,READ
	MOV	DX,FCB		;All set up for sequential reads
	MOV	SI,BUFFER+BUFSIZ ;Flag input buffer as empty
READHEX:
	CALL	GETCH
	CMP	AL,":"		;Search for : to start line
	JNZ	READHEX
	CALL	GETBYT		;Get byte count
	MOV	CL,AL
	MOV	CH,0
	JCXZ	DONE
	CALL	GETBYT		;Get high byte of load address
	MOV	BH,AL
	CALL	GETBYT		;Get low byte of load address
	MOV	BL,AL
	ADD	BX,[OFFSET]	;Add in offset
	MOV	DI,BX
	CALL	GETBYT		;Throw away type byte
READLN:
	CMP	DI,[SEGSIZ]
	JAE	ADERR
	CALL	GETBYT		;Get data byte
	STOB
	CMP	DI,BP		;Check if this is the largest address so far
	JBE	HAVBIG
	MOV	BP,DI		;Save new largest
HAVBIG:
	LOOP	READLN
	JP	READHEX

NOFIL:
	MOV	DX,NOFILE
QUIT:
	MOV	AH,9
	INT	21H
	INT	20H

ADERR:
	MOV	DX,ADDR
	JMP	SHOWERR

GETCH:
	CMP	SI,BUFFER+BUFSIZ
	JNZ	NOREAD
	INT	21H
	CMP	AL,1
	JZ	ERROR
	MOV	SI,BUFFER
NOREAD:
	LODB
	CMP	AL,1AH
	JZ	DONE
	RET

GETBYT:
	CALL	HEXDIG
	MOV	BL,AL
	CALL	HEXDIG
	SHL	BL
	SHL	BL
	SHL	BL
	SHL	BL
	OR	AL,BL
	RET

HEXCHK:
	SUB	AL,"0"
	JC	RET
	CMP	AL,10
	JC	CMCRET
	SUB	AL,"A"-"0"-10
	JC	RET
	CMP	AL,16
CMCRET:
	CMC
	RET

HEXDIG:
	CALL	GETCH
	CALL	HEXCHK
	JNC	RET
ERROR:
	MOV	DX,ERRMES
SHOWERR:
	MOV	AH,9
	INT	21H
DONE:
	MOV	[FCB+9],4F00H+"C"	;"CO"
	MOV	B,[FCB+11],"M"
	MOV	DX,FCB
	MOV	AH,CREATE
	INT	21H
	OR	AL,AL
	JNZ	NOROOM
	XOR	AX,AX
	MOV	[FCB+33],AX
	MOV	[FCB+35],AX	;Set RR field
	INC	AX
	MOV	[FCB+14],AX	;Set record size
	XOR	DX,DX
	PUSH	DS
	PUSH	ES
	POP	DS		;Get load segment
	MOV	AH,SETDMA
	INT	21H
	POP	DS
	MOV	CX,BP
	MOV	AH,BLKWRT
	MOV	DX,FCB
	INT	21H
	MOV	AH,CLOSE
	INT	21H
EXIT:
	INT	20H

NOROOM:
	MOV	DX,DIRFUL
	JMP	QUIT

HEX:	DB	"HEX"
ERRMES:	DB	"Error in HEX file--conversion aborted$"
NOFILE:	DB	"File not found$"
ADDR:	DB	"Address out of range--conversion aborted$"
DIRFUL:	DB	"Disk directory full$"

OFFSET:	DS	2
SEGSIZ:	DS	2
SIGN:	DS	1
BUFFER:	DS	BUFSIZ

START:
STARTSEG EQU	(START+15)/16
