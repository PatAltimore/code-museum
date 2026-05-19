---
title: "TRANS.ASM"
program: "MS-DOS"
program_slug: "ms-dos"
file_path: "v1.25/source/TRANS.ASM"
language: "8086 Assembly"
github_url: "https://github.com/microsoft/MS-DOS/blob/main/v1.25/source/TRANS.ASM"
year: 1981
author: "Tim Paterson / Microsoft"
slug: "trans"
order: 9
description: "This file is part of MS-DOS v1.25, showcasing the Z80 to 8086 translator written by Tim Paterson, a pivotal piece of software that bridged early microprocessor architectures."

summary:
  - point: "Implements a Z80 to 8086 instruction translator"
    link: "https://en.wikipedia.org/wiki/Zilog_Z80"
    link_label: "Zilog Z80"
  - point: "Demonstrates early assembly-level file handling routines"
    link: "https://en.wikipedia.org/wiki/MS-DOS"
    link_label: "MS-DOS"
  - point: "Contains opcode tables for instruction mapping"
    link: "https://en.wikipedia.org/wiki/Opcode"
    link_label: "Opcode"
  - point: "Highlights optimization for constrained memory environments"
    link: "https://en.wikipedia.org/wiki/Intel_8086"
    link_label: "Intel 8086"
  - point: "Reflects Tim Paterson's influence on early PC software"
    link: "https://en.wikipedia.org/wiki/Tim_Paterson"
    link_label: "Tim Paterson"

enhancements:
  - id: "z80-to-8086-instruction-translator"
    line_start: 1
    line_end: 5
    title: "Z80 to 8086 Translator Initialization"
    wikipedia_url: "https://en.wikipedia.org/wiki/Zilog_Z80"
    image_url: ""
    image_caption: ""
    content: "The opening lines of the file set the stage for the Z80 to 8086 translator, a utility designed to convert Z80 assembly code into 8086-compatible instructions. This translator was crucial during the early days of personal computing as developers transitioned from systems based on the Z80 processor to the Intel 8086 architecture. Tim Paterson, the author of MS-DOS, wrote this code to facilitate software migration, ensuring compatibility and preserving investments in existing software. The `ORG 100H` directive initializes the program's memory offset, a common practice in DOS programs to reserve space for the Program Segment Prefix (PSP). This section reflects the challenges of adapting software for new hardware platforms in the early 1980s, a time when IBM's PC was rapidly becoming the standard. The translator's design influenced later cross-compilation tools and emulators, laying the groundwork for software portability across architectures."
  - id: "file-handling-routines"
    line_start: 6
    line_end: 16
    title: "File Handling Equates for DOS System Calls"
    wikipedia_url: "https://en.wikipedia.org/wiki/MS-DOS"
    image_url: ""
    image_caption: ""
    content: "This section defines constants for various DOS system calls, such as `OPEN`, `CLOSE`, `READ`, and `WRITE`. These equates simplify interaction with the DOS interrupt system, allowing the program to perform file operations using concise mnemonics. In the constrained environment of the Intel 8086, where memory and processing power were limited, such abstractions were vital for maintaining code readability and efficiency. These routines showcase the foundational file handling mechanisms of MS-DOS, which influenced the design of file systems in later operating systems like Windows and Linux. Tim Paterson's work here demonstrates his deep understanding of the 8086 architecture and the importance of efficient system-level programming."
  - id: "buffer-management-and-data-transfer"
    line_start: 65
    line_end: 103
    title: "Buffer Management and Data Transfer"
    wikipedia_url: "https://en.wikipedia.org/wiki/Buffer_(computing)"
    image_url: ""
    image_caption: ""
    content: "This section implements buffer management routines for reading and writing data. The program initializes pointers to input and output buffers (`PUTBUF` and `GETBUF`) and uses them to facilitate efficient data transfer between the source and destination files. The use of buffers is a hallmark of early computing, optimizing disk I/O operations by reducing the frequency of direct hardware access. These routines highlight the importance of managing memory effectively in the limited environment of the Intel 8086, which had a maximum addressable memory of 1 MB. Buffer management techniques like these became standard practice in operating systems and influenced the design of modern file I/O libraries."
  - id: "opcode-parsing-and-translation"
    line_start: 205
    line_end: 232
    title: "Parsing and Translating Z80 Opcodes"
    wikipedia_url: "https://en.wikipedia.org/wiki/Opcode"
    image_url: ""
    image_caption: ""
    content: "This section contains routines for parsing and translating Z80 opcodes into equivalent 8086 instructions. The program reads Z80 instructions, identifies their operands, and maps them to corresponding 8086 operations. The `LOAD` and `TRANS` routines demonstrate the complexity of opcode translation, requiring careful handling of instruction formats and addressing modes. Tim Paterson's approach reflects the ingenuity required to bridge two distinct processor architectures, ensuring that software written for the Z80 could run on the 8086 without significant modification. This work influenced later developments in emulation and cross-compilation, enabling software to be ported across diverse hardware platforms."
  - id: "instruction-set-mapping"
    line_start: 919
    line_end: 1034
    title: "Instruction Set Mapping Tables"
    wikipedia_url: "https://en.wikipedia.org/wiki/Instruction_set"
    image_url: ""
    image_caption: ""
    content: "The opcode tables defined in this section map Z80 instructions to their 8086 equivalents. Each table entry specifies the Z80 mnemonic and the corresponding 8086 routine to execute. These tables are the heart of the translator, enabling it to process Z80 assembly code systematically. The design reflects the constraints of early computing, where memory limitations necessitated compact and efficient data structures. By organizing opcodes into tables, Tim Paterson created a scalable solution that could be extended to support additional instructions or architectures. This technique influenced the design of assemblers and compilers, which continue to use similar mapping strategies for instruction translation."
  - id: "rops-opcode-translation-table"
    line_start: 1035
    line_end: 1062
    title: "Opcode translation: bridging Z80 and 8086"
    wikipedia_url: "https://en.wikipedia.org/wiki/Opcode"
    image_url: ""
    image_caption: ""
    content: "This section defines the ROPS table, a translation mechanism for converting Z80 opcodes to their 8086 equivalents. Each entry pairs a Z80 mnemonic, such as 'ET' or 'LA', with corresponding 8086 operations and routines. The programmer's immediate goal was to facilitate seamless translation between the two architectures, enabling software written for Z80-based systems to run on 8086-based machines. In 1981, this was a critical task as the IBM PC, powered by the 8086, was rapidly gaining market dominance. Tim Paterson, the author, leveraged his deep understanding of both architectures to craft this table. At the time, microcomputers were constrained by limited memory and processing power, necessitating efficient, low-level solutions like this. The ROPS table exemplifies early efforts to achieve cross-platform compatibility, a concept that would later evolve into more sophisticated tools like emulators and virtual machines. This approach influenced subsequent software development practices, particularly in the realm of backward compatibility. Developers of later systems, such as the x86 emulators and compatibility layers in modern operating systems, studied these techniques to ensure legacy software could operate on newer hardware."
  - id: "sops-bitwise-and-arithmetic-operations"
    line_start: 1063
    line_end: 1078
    title: "Bitwise and arithmetic operations table"
    wikipedia_url: "https://en.wikipedia.org/wiki/Bitwise_operation"
    image_url: ""
    image_caption: ""
    content: "The SOPS table maps Z80 mnemonics for bitwise and arithmetic operations to their 8086 counterparts. Entries like 'UB' and 'BC' correspond to arithmetic operations, while others like 'LA' and 'RA' handle shifts. This table was part of the opcode translation mechanism, ensuring that Z80 assembly code could be interpreted and executed correctly on 8086 hardware. In the early 1980s, the computing landscape was transitioning from 8-bit to 16-bit architectures, driven by the release of the IBM PC. This shift created a demand for tools to port software between platforms. Paterson's work on MS-DOS addressed this need by providing a robust translation layer. The techniques used here laid the groundwork for future cross-platform development tools, such as compilers and assemblers that support multiple architectures. The SOPS table's focus on bitwise operations also reflects the importance of low-level manipulation in early computing, a practice that continues to be relevant in embedded systems and performance-critical applications."
  - id: "xops-single-entry-table"
    line_start: 1087
    line_end: 1090
    title: "A minimal table for logical operations"
    wikipedia_url: "https://en.wikipedia.org/wiki/Logical_operation"
    image_url: ""
    image_caption: ""
    content: "The XOPS table is a concise mapping for logical operations, containing only one entry: 'OR'. This brevity suggests that logical operations were either less frequently used in the context of opcode translation or already well-supported by other mechanisms in the code. The inclusion of this table highlights the modular design of the translation system, where each table serves a specific purpose. In the early 1980s, logical operations were fundamental to programming, enabling decision-making and control flow. By isolating these operations in a dedicated table, Paterson ensured clarity and maintainability in the codebase. While minimal, this approach influenced later software design practices, emphasizing modularity and separation of concerns. Modern programming paradigms, such as object-oriented design, echo these principles by organizing code into discrete, purpose-driven components."
  - id: "blmove-block-memory-transfer"
    line_start: 1104
    line_end: 1106
    title: "Efficient block memory transfer routine"
    wikipedia_url: "https://en.wikipedia.org/wiki/Memory_management"
    image_url: ""
    image_caption: ""
    content: "The BLMOVE section defines a routine for transferring blocks of memory between registers. It uses instructions like 'MOV' and 'REP' to efficiently copy data from source to destination. This routine was crucial for tasks like file handling and buffer management, where large amounts of data needed to be moved quickly. In 1981, memory management was a critical concern due to the limited resources of early microcomputers. Paterson's implementation reflects the emphasis on efficiency and precision required in assembly programming. The use of 'REP' for repeated operations showcases an early optimization technique, reducing the number of instructions needed for bulk transfers. This routine influenced later memory management practices, particularly in the development of DMA (Direct Memory Access) controllers and optimized library functions like memcpy in C. The principles demonstrated here continue to inform modern systems programming, where efficient data movement remains a priority."
  - id: "djnz-loop-control-warning"
    line_start: 1114
    line_end: 1116
    title: "Loop control with a cautionary note"
    wikipedia_url: "https://en.wikipedia.org/wiki/Loop_(computing)"
    image_url: ""
    image_caption: ""
    content: "The DJNZ section provides a loop control mechanism using the 'DEC' and 'JNZ' instructions. It includes a warning that 'DJNZ' does not affect flags, emphasizing the need for careful programming when using this construct. This cautionary note reflects the challenges of assembly programming, where subtle differences between instructions could lead to bugs. In the early 1980s, programmers had to be intimately familiar with CPU behavior to write reliable code. Paterson's inclusion of this warning demonstrates his attention to detail and commitment to educating future developers. The DJNZ instruction itself is a staple of assembly programming, enabling efficient loop control without the overhead of higher-level constructs. This approach influenced later programming practices, where understanding low-level details became essential for optimizing performance. Modern developers working on embedded systems or performance-critical applications continue to rely on similar techniques, underscoring the enduring relevance of Paterson's work."
  - id: "toktab-token-table"
    line_start: 1162
    line_end: 1166
    title: "Token table for operand parsing"
    wikipedia_url: "https://en.wikipedia.org/wiki/Token_(computing)"
    image_url: ""
    image_caption: ""
    content: "The TOKTAB section defines a token table used for parsing operands in assembly code. It includes entries like 'SIDI' and 'AXSPBXDXCX', which represent various operand combinations. This table was part of the opcode translation system, enabling the program to interpret and process assembly instructions accurately. In 1981, parsing was a critical task for assemblers and compilers, as it bridged the gap between human-readable code and machine instructions. Paterson's implementation reflects the constraints of early computing, where memory and processing power were limited. By organizing operands into a token table, he ensured efficient parsing and reduced the complexity of the translation process. This approach influenced later developments in programming languages and tools, particularly in the design of parsers and lexical analyzers. Techniques like tokenization remain fundamental to modern software development, demonstrating the lasting impact of Paterson's work on MS-DOS."

---

; Z80 to 8086 Translator  version 2.21
;  Runs on the 8086 under 86-DOS
; by Tim Paterson
;
	ORG	100H
EOF:	EQU	1AH	;End of file
EOL:	EQU	0DH
FCB:	EQU	5CH
SYSTEM:	EQU	5
OPEN:	EQU	15
CLOSE:	EQU	16
SETDMA:	EQU	26
CREATE:	EQU	22
DELETE:	EQU	19
READ:	EQU	20
WRITE:	EQU	21
PRNBUF:	EQU	9
	MOV	SP,STACK
	MOV	DX,HEADER
	MOV	CL,9
	CALL	SYSTEM
	MOV	BX,FCB+12
	XOR	AL,AL
	MOV	CH,4
CLRFCB:
	MOV	[BX],AL
	INC	BX
	DEC	CH
	JNZ	CLRFCB
	MOV	[FCB+32],AL
	MOV	BX,FCB
	MOV	DX,PUTFCB
	MOV	CX,16
	UP
	MOV	SI,BX
	MOV	DI,DX
	REP
	MOVB
	MOV	DX,DI
	MOV	BX,SI
	MOV	[PUTFCB+32],AL
	MOV	BX,"A"+5300H	;"AS"
	MOV	[PUTFCB+9],BX
	MOV	AL,'M'
	MOV	[PUTFCB+11],AL
	MOV	DX,FCB
	MOV	CL,OPEN
	CALL	SYSTEM
	INC	AL
	MOV	DX,NOFILE
	JZ	ABORTJ
	MOV	DX,PUTFCB
	MOV	CL,DELETE
	CALL	SYSTEM
	MOV	DX,PUTFCB
	MOV	CL,CREATE
	CALL	SYSTEM
	INC	AL
	MOV	DX,NOROOM
ABORTJ:
	JZ	ABORT
	MOV	DX,PUTFCB
	MOV	CL,OPEN
	CALL	SYSTEM
	MOV	BX,PUTBUF
	MOV	[PUTPT],BX
	MOV	BX,GETBUF+80H
	MOV	[GETPT],BX
TRANLN:
	XOR	AL,AL
	MOV	[OP1],AL
	MOV	[OP2],AL
	MOV	BX,OPCODE
	CALL	LOAD
	MOV	BX,OP1
	CALL	GETOP
	MOV	B,[BX],0
	MOV	BX,OP2
	CALL	GETOP
DOLIN:
	MOV	B,[BX],0
	CALL	FINDOP
ENLIN:
	MOV	SP,STACK
	MOV	AL,[CHAR]
	CMP	AL,';'
	JNZ	NOCOM
	MOV	AL,9
	CALL	PUTCH
	MOV	AL,';'
NOCOM:
	CALL	PUTCH
PUTLIN:
	CMP	AL,EOF
	JZ	END
	CALL	GETCH
	CALL	PUTCH
	CMP	AL,10
	JNZ	PUTLIN
	JP	TRANLN
END:
	MOV	CH,127
	MOV	AL,1AH
FILL:
	CALL	PUTCH
	DEC	CH
	JNZ	FILL
	MOV	DX,PUTFCB
	MOV	CL,CLOSE
	CALL	SYSTEM
	MOV	DX,ENDMES
ABORT:
	MOV	CL,PRNBUF
	CALL	SYSTEM
	JMP	0
DELIM:
	CALL	GETCH
DELCHK:
	CMP	AL,EOL
	JZ	DOLIN
	CMP	AL,EOF
	JZ	DOLIN
	CMP	AL,';'
	JZ	DOLIN
	CMP	AL,' '
	JZ	RET
	CMP	AL,':'
	JZ	RET
	CMP	AL,','
	JZ	RET
	CMP	AL,9
	RET
HEX:
	AND	AL,0FH
	ADD	AL,90H
	DAA
	ADC	AL,40H
	DAA
PUTCH:
	PUSH	BX
	PUSH	DX
	PUSH	CX
	LAHF
	XCHG	AH,AL
	PUSH	AX
	XCHG	AH,AL
	AND	AL,7FH
	MOV	BX,[PUTPT]
	MOV	[BX],AL
	INC	BX
	MOV	[PUTPT],BX
	CMP	BX,PUTBUF+80H
	JNZ	POPRET
	MOV	DX,PUTBUF
	MOV	[PUTPT],DX
	MOV	CL,SETDMA
	CALL	SYSTEM
	MOV	DX,PUTFCB
	MOV	CL,WRITE
	CALL	SYSTEM
	OR	AL,AL
	MOV	DX,WRTERR
	JNZ	ABORT
POPRET:
	POP	AX
	XCHG	AH,AL
	SAHF
NOTAF:
	POP	CX
	POP	DX
	POP	BX
	RET
;
; Get character from source file.
;
GETCH:
	PUSH	BX
	PUSH	DX
	PUSH	CX
	MOV	BX,[GETPT]	; Get buffer pointer.
	CMP	BX,GETBUF+80H	; Past end-of-buffer?
	JNZ	GETIT		; Jump if not.
	MOV	DX,GETBUF	; Set `DMA address'.
	MOV	CL,SETDMA
	CALL	SYSTEM
	MOV	DX,FCB		; Read the next record from source file.
	MOV	CL,READ
	CALL	SYSTEM
	CMP	AL,0		; Entire record read OK?
	JE	OKRECORD
	CMP	AL,3		; Partial record read?
	JE	OKRECORD
	MOV	AL,EOF		; Force end-of-file character in case
	JP	TESEND		;  there is nothing in the record.
OKRECORD:
	MOV	BX,GETBUF	; Reset buffer pointer.
GETIT:
	MOV	AL,[BX]		; Get next character from buffer.
	INC	BX		; Point to next character.
	MOV	[GETPT],BX	; Save new pointer.
TESEND:
	MOV	[CHAR],AL
	JP	NOTAF		; Pop registers and return.
LOAD:
	CALL	DELIM
	JZ	LOADOP
EATLAB:
	CALL	PUTCH
	CALL	DELIM
	JNZ	EATLAB
ENLAB:
	MOV	AL,':'
	CALL	PUTCH
LOADOP:
	MOV	BX,OPCODE
EATEM:
	CALL	DELIM
	JZ	EATEM
LOADLP:
	CALL	IDCHK
	JNC	$+5
	JMP	OPERR
	MOV	[BX],AL
	INC	BX
	CALL	DELIM
	JNZ	LOADLP
	MOV	B,[BX],0
	CMP	AL,':'
	JNZ	RET
	MOV	BX,OPCODE
	CALL	TRANS
	JP	ENLAB
GETOP:
	XOR	AL,AL
	LAHF
	XCHG	AX,BP
	SAHF
GETLP:
	CALL	DELIM
	JZ	GETLP
OPCHAR:
	CMP	AL,'('
	JNZ	NOTLEF
	LAHF
	XCHG	AX,BP
	SAHF
	INC	AL
	LAHF
	XCHG	AX,BP
	SAHF
	MOV	B,[BX],'['
	JP	NEXCH
NOTLEF:
	CMP	AL,')'
	JNZ	NOTRIT
	LAHF
	XCHG	AX,BP
	SAHF
	DEC	AL
	LAHF
	XCHG	AX,BP
	SAHF
	MOV	B,[BX],']'
	JP	NEXCH
NOTRIT:
	MOV	[BX],AL
	CMP	AL,''''
	JZ	EATQUO
	CALL	IDCHK
	JNC	GETID
NEXCH:
	INC	BX
	CALL	GETCH
IDRET:
	CALL	DELCHK
	JNZ	OPCHAR
	CMP	AL,' '
	JZ	OPCHAR
	RET
EATQUO:
	INC	BX
	CALL	GETCH
	MOV	[BX],AL
	CMP	AL,';'
	JZ	L0000
	CALL	DELCHK
L0000:	
	CMP	AL,''''
	JNZ	EATQUO
	JP	NEXCH
IDCHK:
	CMP	AL,'0'
	JC	RET
	CMP	AL,'9'+1
	CMC
	JNC	RET
	CMP	AL,40H
	JC	RET
	AND	AL,5FH
	CMP	AL,'A'
	JC	RET
	CMP	AL,'Z'+1
	CMC
	RET
GETID:
	MOV	[BX],AL
	MOV	CH,1
LODID:
	INC	BX
	CALL	GETCH
	CALL	IDCHK
	JC	RWCHK
	MOV	[BX],AL
	INC	CH
	JP	LODID
RWCHK:
	LAHF
	XCHG	AH,AL
	PUSH	AX
	XCHG	AH,AL
	PUSH	BX
	DEC	BX
	DEC	CH
	MOV	DL,CH
	JZ	LOOKRW
	MOV	DL,[BX]
	DEC	BX
	DEC	CH
	JNZ	NORW
LOOKRW:
	MOV	AL,[BX]
	MOV	DH,AL
	PUSH	BX
	MOV	BX,RWTAB
	MOV	CX,LENRW
RWLK:
	UP
	MOV	DI,BX
	REPNZ
	SCAB
	MOV	BX,DI
	JNZ	NOTRW
	PUSH	BX
	PUSH	CX
	MOV	CX,LENRW-1
	LAHF
	ADD	BX,CX
	RCR	SI
	SAHF
	RCL	SI
	MOV	AL,[BX]
	POP	CX
	POP	BX
	CMP	AL,DL
	JZ	HAVRW
	MOV	AL,CL
	OR	AL,AL
	MOV	AL,DH
	JNZ	RWLK
NOTRW:
	POP	BX
NORW:
	POP	BX
ENDRW:
	POP	AX
	XCHG	AH,AL
	SAHF
	JMP	IDRET
HAVRW:
	POP	BX
	INC	CL
	MOV	[BX],CL
	INC	BX
	POP	DX
	PUSH	BX
	MOV	AL,CL
	MOV	BX,IXSI
	CMP	AL,RSI
	JZ	IXIY
	MOV	BX,IYDI
	CMP	AL,RDI
	JNZ	NORW
IXIY:
	LAHF
	XCHG	AX,BP
	SAHF
	JZ	NOTENC
	LAHF
	XCHG	AX,BP
	SAHF
	CALL	OUTSTR
	JP	NORW
NOTENC:
	LAHF
	XCHG	AX,BP
	SAHF
	POP	BX
	DEC	BX
	MOV	B,[BX],'['
	INC	BX
	ADD	AL,RIX-1
	MOV	[BX],AL
	INC	BX
	MOV	B,[BX],']'
	INC	BX
	JP	ENDRW
	RET
FINDOP:
	MOV	BX,OPCODE
	MOV	CX,5
	XOR	AL,AL
	UP
	MOV	DI,BX
	REPNZ
	SCAB
	MOV	BX,DI
	JNZ	OPERR
	MOV	AL,4
	SUB	AL,CL
	JZ	RET
	DEC	AL
	JZ	OPERR
	MOV	CL,AL
	DEC	BX
	DEC	BX
	OR	B,[BX],080H
	MOV	AL,[OPCODE]
	SUB	AL,'A'
	JC	OPERR
	ADD	AL,AL
	MOV	DL,AL
	MOV	DH,0
	MOV	BX,OPTAB
	LAHF
	ADD	BX,DX
	RCR	SI
	SAHF
	RCL	SI
	MOV	DL,[BX]
	INC	BX
	MOV	DH,[BX]
	XCHG	DX,BX
	MOV	AL,9
	CALL	PUTCH
LOOKOP:
	MOV	AL,[BX]
	OR	AL,AL
	JZ	OPERR
	MOV	DX,OPCODE+1
	MOV	CH,CL
LOOKLP:
	MOV	SI,DX
	LODB
	CMP	AL,[BX]
	JNZ	NEXOP
	INC	DX
	INC	BX
	DEC	CH
	JNZ	LOOKLP
	MOV	DX,[BX]
	MOV	BX,[BX+2]
	JMP	DX
NEXOP:
	RCR	SI
	TEST	B,[BX],080H
	RCL	SI
	LAHF
	INC	BX
	SAHF
	JZ	NEXOP
	MOV	DX,4
	LAHF
	ADD	BX,DX
	RCR	SI
	SAHF
	RCL	SI
	JP	LOOKOP
OPERR:
	MOV	BX,OPCODE
	CALL	OUTSTR
	CALL	TWOOPS
	MOV	BX,OPCDER
	CALL	OUTSTR
	JMP	ENLIN
LD:
	CALL	OUTSTR
	MOV	BX,OP1
	MOV	DX,OP2+1
	CALL	LCHECK
	JNZ	$+5
	JMP	LDAX
	XCHG	DX,BX
	DEC	BX
	INC	DX
	CALL	LCHECK
	JNZ	$+5
	JMP	STAX
;If immediate move, check for byte memory reference
	MOV	AL,[OP2]
	CMP	AL,20H		;Could be immediate?
	MOV	AL,9
	JC	L0001
	CALL	BYTCHK		;Add "B," if memory reference
L0001:	
	CALL	TRAN1
	JP	TRNOP2
TWOOPS:
	CALL	TRNOP1
TRNOP2:
	MOV	AL,','
TRAN2:
	MOV	BX,OP2
PTRANS:
	CALL	PUTCH
TRANS:
	MOV	AL,[BX]
	LAHF
	INC	BX
	SAHF
	OR	AL,AL
	JZ	RET
	CALL	TRNTOK
	JP	TRANS
LCHECK:
	MOV	AL,[BX]
	CMP	AL,RAL
	JNZ	RET
	MOV	SI,DX
	LODB
	CMP	AL,RCX
	JZ	RET
	CMP	AL,RDX
	RET

ONEOP:
	CALL	OUTSTR
	MOV	AL,9
	CALL	BYTCHK		;If memory reference, add "B," flag
	JMPS	TRAN1

TRNOP1:
	MOV	AL,9
TRAN1:
	MOV	BX,OP1
	JP	PTRANS
IN:
	MOV	AL,[OP1]
	CMP	AL,RAL
	XCHG	DX,BX
	MOV	BX,OP2
	JZ	GETPORT
	MOV	BX,SAVEAX
	CALL	OUTSTR
	CALL	OUTSTR
	MOV	BX,OP2
	CALL	GETPORT
	MOV	BX,MOV0
	CALL	ONEOP
	MOV	AL,','
	CALL	PUTCH
	MOV	AL,RAL
	CALL	TRNTOK
IODONE:
	MOV	BX,RESTAX
	JMP	OUTSTR
OUT:
	MOV	AL,[OP2]
	XCHG	DX,BX
	MOV	BX,OP1
	CMP	AL,RAL
	JZ	GETOUT
	MOV	BX,SAVEAX
	CALL	OUTSTR
	MOV	BX,MOVAL
	CALL	OUTSTR
	CALL	TRNOP2
	MOV	BX,CRLFTB
	CALL	OUTSTR
	MOV	BX,OP1
	CALL	GETOUT
	JP	IODONE
GETPORT:
	MOV	AL,[BX]
	CMP	AL,'['
	JNZ	NOBRAK
	LAHF
	INC	BX
	SAHF
	PUSH	BX
	MOV	CX,80
	MOV	AL,']'
	UP
	MOV	DI,BX
	REPNZ
	SCAB
	MOV	BX,DI
	LAHF
	DEC	BX
	SAHF
	MOV	B,[BX],0
	POP	BX
NOBRAK:
	MOV	AL,[BX]
	CMP	AL,RGCL
	JNZ	FIXPOR
	MOV	BX,IO1
	CALL	OUTSTR
	XCHG	DX,BX
	CALL	OUTSTR
	MOV	AL,RDX
	CALL	TRNTOK
	MOV	BX,IO2
	JMP	OUTSTR
GETOUT:
	CALL	GETPORT
	JNC	RET
	MOV	BX,BADIO
	JMP	OUTSTR
FIXPOR:
	XCHG	DX,BX
	CALL	OUTSTR
	XCHG	DX,BX
	JMP	TRANS
LDAX:
	MOV	BX,LDAX1
LSAX:
	CALL	OUTSTR
	MOV	SI,DX
	LODB
	CALL	TRNTOK
	JP	OUTSTR
STAX:
	MOV	BX,STAX1
	JP	LSAX
TRNTOK:
	CMP	AL,' '
	JC	$+5
	JMP	PUTCH
	PUSH	BX
	PUSH	CX
	MOV	CL,AL
	MOV	CH,0
	MOV	BX,TOKTAB-2
	LAHF
	ADD	BX,CX
	RCR	SI
	SAHF
	RCL	SI
	LAHF
	ADD	BX,CX
	RCR	SI
	SAHF
	RCL	SI
	MOV	AL,[BX]
	CALL	PUTCH
	INC	BX
	MOV	AL,[BX]
	POP	CX
	POP	BX
	OR	AL,AL
	JZ	RET
	JMP	PUTCH
PUSH:
	MOV	DX,PUSHAF
	JP	AFCHK
POP:
	MOV	DX,POPAF
AFCHK:
	MOV	AL,[OP1]
	CMP	AL,RAX
	JNZ	ONEOPJ
	XCHG	DX,BX
OUTSTR:
	MOV	AL,[BX]
	OR	AL,AL
	JNZ	L0002
	CALL	NEWOP
L0002:	
	CALL	PUTCH
	INC	BX
	ADD	AL,AL
	JNC	OUTSTR
	RET
NEWOP:
	MOV	AL,13
	CALL	PUTCH
	MOV	AL,10
	CALL	PUTCH
	MOV	AL,9
	RET
LDDR:
	CALL	OUTSTR
	MOV	BX,BLMOVE
	JP	OUTSTR
CPDR:
	CALL	OUTSTR
	MOV	BX,CMPREP
	JP	OUTSTR
ADD:
	MOV	AL,[OP1]
	CMP	AL,RBX
	JZ	DAD
ARITH:
	CALL	OUTSTR
	MOV	AL,[OP2]
	OR	AL,AL
	JZ	$+5
	JMP	TWOOPS
	MOV	AL,9
	CALL	PUTCH
	MOV	AL,RAL
	CALL	TRNTOK
	MOV	AL,','
	JMP	TRAN1
ACCUM:
	CALL	OUTSTR
	MOV	AL,9
	CALL	PUTCH
	MOV	AL,RAL
	JMP	TRNTOK
ONEOPJ:	JMP	ONEOP
DAD:
	MOV	BX,DAD1
	CALL	OUTSTR
	CALL	TWOOPS
	MOV	BX,DAD2
	JP	OUTSTR

INCDEC:
	MOV	AL,[OP1]
	CMP	AL,RCX+1	;16-bit?
	JNC	ONEOPJ
	MOV	BX,LAHF
	CALL	OUTSTR
	XCHG	DX,BX
	MOV	BX,OPCODE-1
	CALL	ONEOP
	XCHG	DX,BX
OUTSTRJ:
	JMP	OUTSTR
JUMP:
	MOV	AL,[OP1]
	CMP	AL,'['
	JNZ	DIRECT
	MOV	AL,[OP1+1]
	MOV	[OP1],AL
	XOR	AL,AL
	MOV	[OP1+1],AL
DIRECT:
	MOV	AL,[OP2]
	OR	AL,AL
	JZ	ONEOPJ
	CALL	FIXCON
	MOV	BX,OP2
OUTCON:
	MOV	CH,AL
	MOV	AL,'J'
	CALL	PUTCH
	MOV	AL,CH
	CALL	TRNTOK
	MOV	AL,9
	CALL	PTRANS
	MOV	AL,CH
	CMP	AL,ODDPAR
	MOV	BX,WARNPA
	JZ	OUTSTRJ
	CMP	AL,EVEPAR
	JZ	OUTSTRJ
	RET
FIXCON:
	MOV	AL,[OP1]
	CMP	AL,RGCL
	JNZ	RET
	MOV	AL,CY
	RET
RETURN:
	MOV	AL,[OP1]
	OR	AL,AL
	JZ	OUTSTRJ
	MOV	BX,'R'+4500H	;"RE"
	MOV	[OP2],BX
	MOV	BX,'T'
	MOV	[OP2+2],BX
	JP	DIRECT
ONEOPJ1:
	JMP	ONEOP
DOCALL:
	MOV	AL,[OP2]
	OR	AL,AL
	JZ	ONEOPJ1
	CALL	FIXCON
	DEC	AL
	XOR	AL,1
	INC	AL
	MOV	BX,LABEL
	CALL	OUTCON
	MOV	BX,OPCODE-1
	CALL	OUTSTR
	MOV	AL,[OP2]
	OR	AL,AL
	MOV	AL,9
	MOV	BX,OP2
	JZ	L0003
	CALL	PTRANS
L0003:	
	MOV	BX,CRLF
	CALL	OUTSTR
	CALL	TRANS
	CALL	OUTSTR
	MOV	BX,LABEL+4
NEXLAB:
	INC	[BX]
	MOV	AL,[BX]
	CMP	AL,'9'+1
	JNZ	RET
	MOV	B,[BX],'0'
	LAHF
	DEC	BX
	SAHF
	JP	NEXLAB
EX:
	MOV	AL,[OP1]
	CMP	AL,RAX
	JZ	OUTSTRJ1
	MOV	AL,[OP1+1]
	CMP	AL,STP
	JZ	XTHL
	MOV	BX,XCHG
	CALL	OUTSTR
	JMP	TWOOPS
XTHL:
	MOV	BX,XTHL1
	CALL	OUTSTR
	CALL	TRNOP2
	MOV	BX,XTHL2
OUTSTRJ1:
	JMP	OUTSTR
PSEUDO:
	CALL	ONEOP
	MOV	AL,[OP2]
	OR	AL,AL
	JZ	RET
	JMP	TRNOP2
	RET
BITSET:
	MOV	CL,0
	JP	SETRES
RES:
	MOV	CL,-1
SETRES:
	CALL	OUTSTR
	PUSH	BX
	MOV	AL,[OP2]
	CMP	AL,'['
	MOV	AL,9
	JNZ	L0004
	CALL	BFLAG
L0004:	
	CALL	TRAN2
	MOV	AL,','
	CALL	PUTCH
	CALL	GETBIT
	MOV	BX,BITERR
	JNC	L0005
	CALL	OUTSTR
L0005:	
	POP	BX
	JMP	OUTSTR

BYTCHK:
;Check if memory reference and add "B," for byte mode
	CMP	B,[OP1],"["	;Memory reference?
	JNZ	RET
	CMP	B,[OP1+1],RIX	;Referencing IX as a word?
	JZ	RET
	CMP	B,[OP1+1],RIY
	JZ	RET
BFLAG:
	CALL	PUTCH
	MOV	AL,'B'
	CALL	PUTCH
	MOV	AL,','
	RET

GETBIT:
	MOV	AL,[OP1+1]
	OR	AL,AL
	STC
	JNZ	RET
	MOV	AL,[OP1]
	SUB	AL,'0'
	JC	RET
	CMP	AL,8
	CMC
	JC	RET
	MOV	CH,AL
	INC	CH
	XOR	AL,AL
	STC
SHFT:
	RCL	AL
	DEC	CH
	JNZ	SHFT
	XOR	AL,CL
	MOV	CH,AL
	MOV	AL,'0'
	CALL	PUTCH
	MOV	AL,CH
	RCR	AL
	RCR	AL
	RCR	AL
	RCR	AL
	CALL	HEX
	MOV	AL,CH
	CALL	HEX
	MOV	AL,'H'
	JMP	PUTCH
OPTAB:
	DW	AOPS,BOPS,COPS,DOPS,EOPS
	DW	FOPS,GOPS,HOPS,IOPS,JOPS
	DW	KOPS,LOPS,MOPS,NOPS,OOPS
	DW	POPS,QOPS,ROPS,SOPS,TOPS
	DW	UOPS,VOPS,WOPS,XOPS,YOPS
	DW	ZOPS
AOPS:
	DM	'DD'
	DW	ADD,OPCODE
	DM	'DC'
	DW	ARITH,OPCODE
	DM	'ND'
	DW	ARITH,OPCODE
	DB	0
BOPS:
	DM	'IT'
	DW	BITSET,TESBIT
	DB	0
COPS:
	DM	'ALL'
	DW	DOCALL,OPCODE
	DM	'P'
	DW	ARITH,CMP
	DM	'PL'
	DW	ACCUM,NOT
	DM	'PIR'
	DW	OUTSTR,CPIR
	DM	'PDR'
	DW	CPDR,DOWN
	DM	'CF'
	DW	OUTSTR,CMC
	DB	0
DOPS:
	DM	'EC'
	DW	INCDEC,OPCODE
	DM	'JNZ'
	DW	ONEOP,DJNZ
	DM	'AA'
	DW	OUTSTR,OPCODE
	DM	'I'
	DW	OUTSTR,OPCODE
	DM	'W'
	DW	PSEUDO,OPCODE
	DM	'B'
	DW	PSEUDO,OPCODE
	DM	'M'
	DW	PSEUDO,OPCODE
	DM	'S'
	DW	ONEOP,OPCODE
	DB	0
EOPS:
	DM	'X'
	DW	EX,EXAF
	DM	'I'
	DW	OUTSTR,OPCODE
	DM	'XX'
	DW	OUTSTR,EXX
	DM	'QU'
	DW	ONEOP,OPCODE
	DM	'NDIF'
	DW	OUTSTR,OPCODE
	DB	0
FOPS:
	DB	0
GOPS:
	DB	0
HOPS:
	DM	'ALT'
	DW	OUTSTR,HLT
	DB	0
IOPS:
	DM	'NC'
	DW	INCDEC,OPCODE
	DM	'N'
	DW	IN,INB
	DM	'F'
	DW	ONEOP,OPCODE
	DB	0
JOPS:
	DM	'R'
	DW	JUMP,JR
	DM	'P'
	DW	JUMP,JMP
	DB	0
KOPS:
	DB	0
LOPS:
	DM	'D'
	DW	LD,MOV
	DM	'DIR'
	DW	OUTSTR,UP
	DM	'DDR'
	DW	LDDR,DOWN
	DB	0
MOPS:
	DB	0
NOPS:
	DM	'EG'
	DW	ACCUM,OPCODE
	DB	0
OOPS:
	DM	'R'
	DW	ARITH,OPCODE
	DM	'UT'
	DW	OUT,OUTB
	DM	'RG'
	DW	ONEOP,OPCODE
	DB	0
POPS:
	DM	'OP'
	DW	POP,OPCODE
	DM	'USH'
	DW	PUSH,OPCODE
	DB	0
QOPS:
	DB	0
ROPS:
	DM	'ET'
	DW	RETURN,OPCODE
	DM	'LA'
	DW	ACCUM,RCL
	DM	'RA'
	DW	ACCUM,RCR
	DM	'LCA'
	DW	ACCUM,ROL
	DM	'RCA'
	DW	ACCUM,ROR
	DM	'L'
	DW	ONEOP,RCL
	DM	'R'
	DW	ONEOP,RCR
	DM	'LC'
	DW	ONEOP,ROL
	DM	'RC'
	DW	ONEOP,ROR
	DM	'ES'
	DW	RES,RESBIT
	DM	'ETI'
	DW	OUTSTR,IRET
	DM	'ETN'
	DW	OUTSTR,IRET
	DM	'ST'
	DW	ONEOP,CALL
	DB	0
SOPS:
	DM	'UB'
	DW	ARITH,OPCODE
	DM	'BC'
	DW	ARITH,SBB
	DM	'LA'
	DW	ONEOP,SAL
	DM	'RA'
	DW	ONEOP,SAR
	DM	'RL'
	DW	ONEOP,SHR
	DM	'CF'
	DW	OUTSTR,STC
	DM	'ET'
	DW	BITSET,SETBIT
	DB	0
TOPS:
	DB	0
UOPS:
	DB	0
VOPS:
	DB	0
WOPS:
	DB	0
XOPS:
	DM	'OR'
	DW	ARITH,OPCODE
	DB	0
YOPS:
	DB	0
ZOPS:
	DB	0
LDAX1:	DM	9,'SI,'
	DM	0,'LODB'
STAX1:	DM	9,'DI,'
	DM	0,'STOB'
PUSHAF:	DB	'LAHF',0,'XCHG',9,'AH,AL',0,'PUSH',9,'AX',0
	DM	'XCHG',9,'AH,AL'
POPAF:	DM	'POP',9,'AX',0,'XCHG',9,'AH,AL',0,'SAHF'
DOWN:	DM	'DOWN'
UP:	DB	'UP'
BLMOVE:	DB	0,'MOV',9,'SI,BX',0,'MOV',9,'DI,DX'
	DB	0,'REP',0,'MOVB',0,'MOV',9,'DX,DI'
	DM	0,'MOV',9,'BX,SI'
CPIR:	DB	'UP'
CMPREP:	DB	0,'MOV',9,'DI,BX',0,'REPNZ',0,'SCAB'
	DM	0,'MOV',9,'BX,DI'
DAD1:	DM	'LAHF',0,'ADD'
DAD2:	DM	0,'RCR',9,'SI',0,'SAHF',0,'RCL',9,'SI'
LAHF:	DM	'LAHF'
	DM	0,'SAHF'
DJNZ:	DB	'DEC',9,'CH',13,10
	DB	'; *** WARNING: DJNZ does not affect flags - DEC does.',0
	DM	'JNZ'
WARNPA:	DM	13,10,'; *** WARNING: Parity flag not always same as Z80.'
IO1:	DB	'MOV',9,'DI,DX',0,'MOV',9,'DL,CL',0
	DM	'XOR',9,'DH,DH',13,10,9
IO2:	DM	0,'MOV',9,'DX,DI'
BADIO:	DM	13,10,'; *** WARNING: Flags not same as Z80.'
BITERR:	DM	13,10,' *** ERROR: Cannot determine bit number.'
SETBIT:	DM	'LAHF',0,'OR'
	DM	0,'SAHF'
RESBIT:	DM	'LAHF',0,'AND'
	DM	0,'SAHF'
TESBIT:	DM	'RCR',9,'AH',0,'TEST'
	DM	0,'RCL',9,'AH'
XTHL1:	DM	'POP',9,'SI',0,'XCHG',9,'SI'
XTHL2:	DM	0,'PUSH',9,'SI'
EXX:	DB	'XCHG',9,'BX,[HL]',0,'XCHG',9,'DX,[DE]',0
	DM	'XCHG',9,'CX,[BC]'
EXAF:	DM	'LAHF',0,'XCHG',9,'AX,BP',0,'SAHF'
MOVAL:	DM	0,'MOV',9,'AL'
IXSI:	DM	9,'MOV',9,'SI,[IX]',13,10
IYDI:	DM	9,'MOV',9,'DI,[IY]',13,10
RESTAX:	DB	0
SAVEAX:	DM	'XCHG',9,'AX,SI'
CRLFTB:	DM	13,10,9
INB:	DM	'INB',9
OUTB:	DM	'OUTB',9
XCHG:	DM	'XCHG'
JMP:	DM	'JMP'
JR:	DM	'JMPS'
RCL:	DM	'RCL'
RCR:	DM	'RCR'
ROL:	DM	'ROL'
ROR:	DM	'ROR'
SAL:	DM	'SAL'
SAR:	DM	'SAR'
SHR:	DM	'SHR'
STC:	DM	'STC'
IRET:	DM	'IRET'
HLT:	DM	'HLT'
CMC:	DM	'CMC'
NOT:	DM	'NOT'
MOV0:	DB	0
MOV:	DM	'MOV'
CMP:	DM	'CMP'
SBB:	DM	'SBB'
CALL:	DM	'CALL'
TOKTAB:
	DB	'SIDI'
	DB	'PEPOS',0,'NSNZZ',0,'NCC',0
	DB	'AXSPBXDXCX'
	DB	'BLBHDLDHCLCHALIXIY'
RWTAB:
	DB	'ABCDEHLBDHSACNZNPMPPII'
LENRW:	EQU	$-RWTAB
	DB	0,0,0,0,0,0,0,'CELPF',0,'C',0,'Z',0,0,'OEYX'
HEADER:	DB	13,10,'Z80 to 8086 Translator  version 2.21',13,10,'$'
NOROOM:	DB	13,10,'File creation error',13,10,'$'
NOFILE:	DB	13,10,'File not found',13,10,'$'
ENDMES:	DB	13,10,'Translation complete',13,10,'$'
WRTERR:	DB	13,10,'Out of disk space',13,10,'$'
OPCDER:	DM	13,10,'*** Opcode Error '
CRLF:	DM	13,10
LABEL:	DB	'L0000',0
	DM	':',9
PUTPT:	DS	2
GETPT:	DS	2
CHAR:	DS	1
	DB	0
OPCODE:	DS	80
OP1:	DS	80
OP2:	DS	80
PUTBUF:	DS	128
GETBUF:	DS	128
PUTFCB:	DS	33
	DS	50
STACK:	EQU	$
	ORG	1	;This is really just for equates without EQU
RSI:	DS	1
RDI:	DS	1
ODDPAR:	DS	1
EVEPAR:	DS	1
	DS	5	;MINUS,PLUS,NOT ZERO,ZERO,NOT CARRY
CY:	DS	1
RAX:	DS	1
STP:	DS	1
RBX:	DS	1
RDX:	DS	1
RCX:	DS	1
RBL:	DS	1
RBH:	DS	1
RDL:	DS	1
RDH:	DS	1
RGCL:	DS	1
RCH:	DS	1
RAL:	DS	1
RIX:	DS	1
RIY:	DS	1
