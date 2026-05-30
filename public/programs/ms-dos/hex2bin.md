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
description: "HEX2BIN.ASM converts Intel HEX files to binary format, showcasing early MS-DOS file handling and memory management techniques."

summary:
  - point: "Demonstrates MS-DOS's early file I/O via interrupts"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Uses Intel HEX format, popular for microcontroller programming"
    link: "https://en.wikipedia.org/wiki/Intel_HEX"
    link_label: "Intel HEX"
  - point: "Exemplifies memory constraints of early PCs"
    link: "https://en.wikipedia.org/wiki/IBM_PC"
    link_label: "IBM PC"

enhancements:
  - id: "hex-file-to-binary-conversion"
    line_start: 18
    line_end: 24
    title: "How MS-DOS Converts HEX Files to Binary"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "This section begins the HEX file conversion process by parsing the file extension and calculating a memory offset. The code checks whether the file has an extension, assigns a default offset of -100H, and scans for a user-specified offset. If present, it processes the offset, accounting for positive or negative signs and validating its format as hexadecimal. The programmer, Tim Paterson, wrote this routine to handle Intel HEX files, a format widely used for microcontroller programming and firmware updates. At the time, the IBM PC had limited memory (typically 64KB to 256KB), and MS-DOS had to manage resources efficiently. This routine exemplifies the low-level, assembly-driven approach required to work within such constraints. The use of direct memory manipulation and bitwise operations reflects the need for speed and compactness in early PC software. The technique of converting hexadecimal offsets into binary values became a standard approach in many subsequent tools for embedded systems and firmware development. It influenced the design of similar utilities and demonstrated how MS-DOS could be adapted for a variety of hardware and software environments."
  - id: "segment-zeroing-for-memory-management"
    line_start: 56
    line_end: 84
    title: "The Segment-Zeroing Trick for Clean Memory"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section initializes a memory segment by filling it with zeros. The code calculates the load segment address, retrieves its size, and uses a loop to clear all bytes within the segment. This ensures no residual data interferes with the binary file being written. In 1981, memory management was a critical concern due to the limited RAM available on IBM PCs. Clearing memory before use was a common practice to avoid unpredictable behavior caused by leftover data. Tim Paterson's approach here is efficient, using the `REP` instruction to repeat the `STOW` operation across the segment. This technique highlights the low-level control programmers had over hardware in the early PC era. The concept of memory initialization remains relevant today, though modern systems abstract it away through higher-level languages and runtime environments. This routine influenced later practices in embedded systems and operating systems, where predictable memory states are crucial for stability."
  - id: "intel-hex-file-parsing"
    line_start: 85
    line_end: 107
    title: "Parsing Intel HEX Files: A Line-by-Line Approach"
    wikipedia_url: "https://en.wikipedia.org/wiki/Intel_HEX"
    image_url: ""
    image_caption: ""
    content: "This section reads and parses Intel HEX files line by line. It begins by searching for the colon (`:`) that marks the start of a HEX line, then retrieves the byte count, load address, and type byte. The data bytes are processed sequentially, with the load address adjusted by the offset calculated earlier. The code checks for out-of-range addresses and updates the largest address encountered. Intel HEX files were a standard format for firmware and microcontroller programming, encoding binary data in a human-readable hexadecimal format. Tim Paterson's implementation reflects the constraints of the IBM PC, where efficient parsing and memory handling were essential. The use of direct memory writes (`STOB`) and offset adjustments showcases the low-level control required in early MS-DOS utilities. This parsing approach influenced later tools for HEX file handling, many of which adopted similar techniques for simplicity and efficiency. The routine's robustness in handling offsets and validating addresses set a precedent for reliable file conversion utilities."
  - id: "error-handling-in-hex2bin"
    line_start: 159
    line_end: 164
    title: "Early Error Messages: Abort on HEX File Issues"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section handles errors encountered during HEX file parsing. If an invalid character or format is detected, the program displays an error message and aborts the conversion process. The error message is stored as a string (`ERRMES`) and displayed using the MS-DOS interrupt `INT 21H`. In the early 1980s, error handling in software was often minimal, as programs were expected to run on constrained hardware with little room for complex diagnostics. Tim Paterson's inclusion of clear error messages reflects a user-centric approach, ensuring that users could identify and address issues with their input files. This routine exemplifies the simplicity and directness of MS-DOS utilities, which relied on interrupts for user interaction. The concept of displaying meaningful error messages became a standard practice in software development, influencing the design of later operating systems and tools. Modern programming environments continue to prioritize clear error reporting, though the mechanisms have evolved significantly."
  - id: "output-file-creation-and-writing"
    line_start: 165
    line_end: 193
    title: "Creating and Writing the Binary Output File"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section creates the binary output file and writes the converted data to it. The program uses MS-DOS interrupts (`INT 21H`) to create the file, set its record size, and write data blocks. It ensures the file is properly closed after writing. The use of file control blocks (FCBs) reflects the early MS-DOS file system, which relied on this structure for managing files. Tim Paterson's implementation demonstrates the low-level file handling required in the early PC era, where programmers interacted directly with the operating system's APIs. The routine's efficiency in handling large data blocks (up to 1024 bytes) highlights the importance of optimizing file I/O operations on constrained hardware. This approach influenced later file handling techniques in MS-DOS and other operating systems, paving the way for more sophisticated APIs and abstractions. The concept of sequential file writing remains relevant, though modern systems have largely replaced FCBs with higher-level constructs like file streams."

---

```asm
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

```