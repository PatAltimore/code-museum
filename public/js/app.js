'use strict';

// --- Instruction reference tables ---

const INSTRUCTIONS_6502 = {
  ADC: { full: 'Add with Carry', desc: 'Adds the operand and carry flag to the accumulator. Sets carry, overflow, zero, and negative flags.' },
  AND: { full: 'Logical AND', desc: 'Performs a bitwise AND between the accumulator and the operand. Result stored in accumulator.' },
  ASL: { full: 'Arithmetic Shift Left', desc: 'Shifts all bits left one position. Bit 7 moves into carry flag; bit 0 becomes 0.' },
  BCC: { full: 'Branch if Carry Clear', desc: 'Branches to a relative address if the carry flag is 0.' },
  BCS: { full: 'Branch if Carry Set', desc: 'Branches to a relative address if the carry flag is 1.' },
  BEQ: { full: 'Branch if Equal (ZF=1)', desc: 'Branches to a relative address if the zero flag is 1 (last result was zero).' },
  BIT: { full: 'Bit Test', desc: 'Tests bits in memory against the accumulator. Sets zero, overflow, and negative flags without changing memory or accumulator.' },
  BMI: { full: 'Branch if Minus (NF=1)', desc: 'Branches if the negative flag is 1 (last result was negative).' },
  BNE: { full: 'Branch if Not Equal (ZF=0)', desc: 'Branches to a relative address if the zero flag is 0.' },
  BPL: { full: 'Branch if Plus (NF=0)', desc: 'Branches if the negative flag is 0 (last result was positive or zero).' },
  BRK: { full: 'Force Interrupt', desc: 'Pushes the PC and status register onto the stack, then jumps through the IRQ/BRK vector at $FFFE–$FFFF.' },
  BVC: { full: 'Branch if Overflow Clear', desc: 'Branches if the overflow flag is 0.' },
  BVS: { full: 'Branch if Overflow Set', desc: 'Branches if the overflow flag is 1.' },
  CLC: { full: 'Clear Carry Flag', desc: 'Sets the carry flag to 0.' },
  CLD: { full: 'Clear Decimal Mode', desc: 'Clears the decimal mode flag, disabling BCD arithmetic.' },
  CLI: { full: 'Clear Interrupt Disable', desc: 'Enables maskable interrupts by clearing the interrupt disable flag.' },
  CLV: { full: 'Clear Overflow Flag', desc: 'Clears the overflow flag.' },
  CMP: { full: 'Compare Accumulator', desc: 'Subtracts the operand from the accumulator without storing the result. Sets carry, zero, and negative flags.' },
  CPX: { full: 'Compare X Register', desc: 'Subtracts the operand from the X register without storing the result. Sets carry, zero, and negative flags.' },
  CPY: { full: 'Compare Y Register', desc: 'Subtracts the operand from the Y register without storing the result. Sets carry, zero, and negative flags.' },
  DEC: { full: 'Decrement Memory', desc: 'Subtracts 1 from a memory location. Sets zero and negative flags.' },
  DEX: { full: 'Decrement X Register', desc: 'Subtracts 1 from the X register. Sets zero and negative flags.' },
  DEY: { full: 'Decrement Y Register', desc: 'Subtracts 1 from the Y register. Sets zero and negative flags.' },
  EOR: { full: 'Exclusive OR', desc: 'Performs a bitwise XOR between the accumulator and the operand. Result stored in accumulator.' },
  INC: { full: 'Increment Memory', desc: 'Adds 1 to a memory location. Sets zero and negative flags.' },
  INX: { full: 'Increment X Register', desc: 'Adds 1 to the X register. Sets zero and negative flags.' },
  INY: { full: 'Increment Y Register', desc: 'Adds 1 to the Y register. Sets zero and negative flags.' },
  JMP: { full: 'Jump', desc: 'Sets the program counter to the specified address. Supports absolute and indirect addressing.' },
  JSR: { full: 'Jump to Subroutine', desc: 'Pushes the return address (PC−1) onto the stack, then jumps to the target address.' },
  LDA: { full: 'Load Accumulator', desc: 'Loads a byte from memory or an immediate value into the accumulator. Sets zero and negative flags.' },
  LDX: { full: 'Load X Register', desc: 'Loads a byte into the X register. Sets zero and negative flags.' },
  LDY: { full: 'Load Y Register', desc: 'Loads a byte into the Y register. Sets zero and negative flags.' },
  LSR: { full: 'Logical Shift Right', desc: 'Shifts all bits right one position. Bit 0 moves into carry flag; bit 7 becomes 0.' },
  NOP: { full: 'No Operation', desc: 'Does nothing for one instruction cycle. Commonly used for timing delays or code alignment.' },
  ORA: { full: 'Logical Inclusive OR', desc: 'Performs a bitwise OR between the accumulator and the operand. Result stored in accumulator.' },
  PHA: { full: 'Push Accumulator', desc: 'Pushes the current value of the accumulator onto the stack.' },
  PHP: { full: 'Push Processor Status', desc: 'Pushes the processor status register (flags) onto the stack.' },
  PLA: { full: 'Pull Accumulator', desc: 'Pops a byte from the stack into the accumulator. Sets zero and negative flags.' },
  PLP: { full: 'Pull Processor Status', desc: 'Pops the processor status register from the stack, restoring all flags.' },
  ROL: { full: 'Rotate Left', desc: 'Shifts all bits left; carry flag moves into bit 0, bit 7 moves into carry.' },
  ROR: { full: 'Rotate Right', desc: 'Shifts all bits right; carry flag moves into bit 7, bit 0 moves into carry.' },
  RTI: { full: 'Return from Interrupt', desc: 'Pulls the processor status and program counter from the stack, returning from an interrupt handler.' },
  RTS: { full: 'Return from Subroutine', desc: 'Pulls the return address from the stack and jumps there, returning from a JSR call.' },
  SBC: { full: 'Subtract with Carry', desc: 'Subtracts the operand and the inverse of the carry flag from the accumulator.' },
  SEC: { full: 'Set Carry Flag', desc: 'Sets the carry flag to 1.' },
  SED: { full: 'Set Decimal Flag', desc: 'Sets the decimal mode flag, enabling BCD arithmetic.' },
  SEI: { full: 'Set Interrupt Disable', desc: 'Disables maskable interrupts by setting the interrupt disable flag.' },
  STA: { full: 'Store Accumulator', desc: 'Writes the value of the accumulator to a memory address.' },
  STX: { full: 'Store X Register', desc: 'Writes the value of the X register to a memory address.' },
  STY: { full: 'Store Y Register', desc: 'Writes the value of the Y register to a memory address.' },
  TAX: { full: 'Transfer Accumulator to X', desc: 'Copies the accumulator into the X register. Sets zero and negative flags.' },
  TAY: { full: 'Transfer Accumulator to Y', desc: 'Copies the accumulator into the Y register. Sets zero and negative flags.' },
  TSX: { full: 'Transfer Stack Pointer to X', desc: 'Copies the stack pointer into the X register. Sets zero and negative flags.' },
  TXA: { full: 'Transfer X to Accumulator', desc: 'Copies the X register into the accumulator. Sets zero and negative flags.' },
  TXS: { full: 'Transfer X to Stack Pointer', desc: 'Copies the X register into the stack pointer. Does not affect flags.' },
  TYA: { full: 'Transfer Y to Accumulator', desc: 'Copies the Y register into the accumulator. Sets zero and negative flags.' },
};

const INSTRUCTIONS_8086 = {
  AAA:   { full: 'ASCII Adjust After Addition', desc: 'Adjusts AL after BCD addition. Adds 6 to AL and 1 to AH if the low nibble > 9 or AF is set.' },
  AAD:   { full: 'ASCII Adjust AX Before Division', desc: 'Multiplies AH by 10 and adds it to AL, clearing AH. Prepares unpacked BCD for division.' },
  AAM:   { full: 'ASCII Adjust AX After Multiply', desc: 'Divides AL by 10; quotient goes into AH, remainder into AL. Adjusts after BCD multiply.' },
  AAS:   { full: 'ASCII Adjust AL After Subtraction', desc: 'Adjusts AL for BCD subtraction. Subtracts 6 from AL if a borrow occurred.' },
  ADC:   { full: 'Add with Carry', desc: 'Adds source and carry flag to destination. Used to chain multi-word additions.' },
  ADD:   { full: 'Add', desc: 'Adds source to destination and stores the result. Updates all arithmetic flags.' },
  AND:   { full: 'Logical AND', desc: 'Bitwise AND between source and destination. Clears carry and overflow flags.' },
  CALL:  { full: 'Call Procedure', desc: 'Pushes the return address onto the stack and transfers control to the target.' },
  CBW:   { full: 'Convert Byte to Word', desc: 'Sign-extends AL into AX by copying bit 7 of AL into all bits of AH.' },
  CLC:   { full: 'Clear Carry Flag', desc: 'Sets the carry flag (CF) to 0.' },
  CLD:   { full: 'Clear Direction Flag', desc: 'Sets DF to 0 so string operations increment SI/DI (low to high).' },
  CLI:   { full: 'Clear Interrupt Flag', desc: 'Disables maskable hardware interrupts by clearing IF.' },
  CMC:   { full: 'Complement Carry Flag', desc: 'Inverts the carry flag.' },
  CMP:   { full: 'Compare', desc: 'Subtracts source from destination without storing the result. Sets flags for conditional jumps.' },
  CMPS:  { full: 'Compare String', desc: 'Compares bytes or words at DS:SI and ES:DI, adjusting SI and DI by ±1/±2.' },
  CWD:   { full: 'Convert Word to Doubleword', desc: 'Sign-extends AX into DX:AX by copying bit 15 of AX into all bits of DX.' },
  DAA:   { full: 'Decimal Adjust AL After Addition', desc: 'Adjusts AL for packed BCD addition.' },
  DAS:   { full: 'Decimal Adjust AL After Subtraction', desc: 'Adjusts AL for packed BCD subtraction.' },
  DEC:   { full: 'Decrement', desc: 'Subtracts 1 from the operand. Sets overflow, sign, zero, parity, and auxiliary flags, but not carry.' },
  DIV:   { full: 'Unsigned Divide', desc: 'Divides AX (or DX:AX) by source. Quotient in AL (or AX), remainder in AH (or DX).' },
  ESC:   { full: 'Escape to Coprocessor', desc: 'Passes an instruction to a coprocessor (e.g. the 8087 FPU). The CPU fetches the memory operand but ignores the operation.' },
  HLT:   { full: 'Halt', desc: 'Stops instruction execution until an interrupt or reset occurs.' },
  IDIV:  { full: 'Signed Divide', desc: 'Signed division of AX (or DX:AX) by source. Quotient in AL (or AX), remainder in AH (or DX).' },
  IMUL:  { full: 'Signed Multiply', desc: 'Signed multiply of AL (or AX) by source. Result stored in AX (or DX:AX).' },
  IN:    { full: 'Input from Port', desc: 'Reads a byte or word from a hardware I/O port into AL or AX.' },
  INC:   { full: 'Increment', desc: 'Adds 1 to the operand. Sets overflow, sign, zero, parity, and auxiliary flags, but not carry.' },
  INT:   { full: 'Call Interrupt Procedure', desc: 'Generates a software interrupt. Pushes flags, CS, and IP, then vectors through the interrupt table. INT 21h is the MS-DOS API.' },
  INTO:  { full: 'Interrupt on Overflow', desc: 'Generates interrupt 4 if the overflow flag is set.' },
  IRET:  { full: 'Interrupt Return', desc: 'Returns from an interrupt handler by popping IP, CS, and flags from the stack.' },
  JA:    { full: 'Jump if Above (CF=0 & ZF=0)', desc: 'Short jump for unsigned greater-than.' },
  JAE:   { full: 'Jump if Above or Equal (CF=0)', desc: 'Short jump for unsigned greater-than-or-equal. Same as JNB/JNC.' },
  JB:    { full: 'Jump if Below (CF=1)', desc: 'Short jump for unsigned less-than. Same as JC/JNAE.' },
  JBE:   { full: 'Jump if Below or Equal (CF=1 or ZF=1)', desc: 'Short jump for unsigned less-than-or-equal.' },
  JC:    { full: 'Jump if Carry (CF=1)', desc: 'Short jump if carry flag is set. Same as JB.' },
  JCXZ:  { full: 'Jump if CX is Zero', desc: 'Short jump if CX = 0 (without affecting flags).' },
  JE:    { full: 'Jump if Equal (ZF=1)', desc: 'Short jump if zero flag is set. Same as JZ.' },
  JG:    { full: 'Jump if Greater (ZF=0 & SF=OF)', desc: 'Short jump for signed greater-than.' },
  JGE:   { full: 'Jump if Greater or Equal (SF=OF)', desc: 'Short jump for signed greater-than-or-equal.' },
  JL:    { full: 'Jump if Less (SF≠OF)', desc: 'Short jump for signed less-than.' },
  JLE:   { full: 'Jump if Less or Equal (ZF=1 or SF≠OF)', desc: 'Short jump for signed less-than-or-equal.' },
  JMP:   { full: 'Unconditional Jump', desc: 'Transfers control to the target address. Supports short (±127 bytes), near, and far forms.' },
  JNA:   { full: 'Jump if Not Above (CF=1 or ZF=1)', desc: 'Short jump for unsigned ≤. Same as JBE.' },
  JNAE:  { full: 'Jump if Not Above or Equal (CF=1)', desc: 'Short jump for unsigned <. Same as JB/JC.' },
  JNB:   { full: 'Jump if Not Below (CF=0)', desc: 'Short jump for unsigned ≥. Same as JAE.' },
  JNBE:  { full: 'Jump if Not Below or Equal (CF=0 & ZF=0)', desc: 'Short jump for unsigned >. Same as JA.' },
  JNC:   { full: 'Jump if No Carry (CF=0)', desc: 'Short jump if carry flag is clear.' },
  JNE:   { full: 'Jump if Not Equal (ZF=0)', desc: 'Short jump if zero flag is clear. Same as JNZ.' },
  JNG:   { full: 'Jump if Not Greater', desc: 'Short jump for signed ≤. Same as JLE.' },
  JNGE:  { full: 'Jump if Not Greater or Equal', desc: 'Short jump for signed <. Same as JL.' },
  JNL:   { full: 'Jump if Not Less (SF=OF)', desc: 'Short jump for signed ≥. Same as JGE.' },
  JNLE:  { full: 'Jump if Not Less or Equal (ZF=0 & SF=OF)', desc: 'Short jump for signed >. Same as JG.' },
  JNO:   { full: 'Jump if No Overflow (OF=0)', desc: 'Short jump if overflow flag is clear.' },
  JNP:   { full: 'Jump if No Parity (PF=0)', desc: 'Short jump if parity is odd.' },
  JNS:   { full: 'Jump if No Sign (SF=0)', desc: 'Short jump if sign flag is clear (result was non-negative).' },
  JNZ:   { full: 'Jump if Not Zero (ZF=0)', desc: 'Short jump if zero flag is clear.' },
  JO:    { full: 'Jump if Overflow (OF=1)', desc: 'Short jump if overflow flag is set.' },
  JP:    { full: 'Jump if Parity (PF=1)', desc: 'Short jump if parity is even.' },
  JPE:   { full: 'Jump if Parity Even (PF=1)', desc: 'Short jump if parity flag is set.' },
  JPO:   { full: 'Jump if Parity Odd (PF=0)', desc: 'Short jump if parity flag is clear.' },
  JS:    { full: 'Jump if Sign (SF=1)', desc: 'Short jump if sign flag is set (result was negative).' },
  JZ:    { full: 'Jump if Zero (ZF=1)', desc: 'Short jump if zero flag is set.' },
  LAHF:  { full: 'Load AH from Flags', desc: 'Copies SF, ZF, AF, PF, and CF into AH.' },
  LDS:   { full: 'Load Far Pointer using DS', desc: 'Loads a 32-bit far pointer from memory: offset into register, segment into DS.' },
  LEA:   { full: 'Load Effective Address', desc: 'Computes and stores the address of the source operand — no memory read. A common trick for arithmetic.' },
  LES:   { full: 'Load Far Pointer using ES', desc: 'Loads a 32-bit far pointer from memory: offset into register, segment into ES.' },
  LOCK:  { full: 'Assert Bus Lock Prefix', desc: 'Prefix that asserts the LOCK# signal during the next instruction, for multi-processor synchronization.' },
  LODS:  { full: 'Load String', desc: 'Loads a byte or word from DS:SI into AL or AX, then increments or decrements SI.' },
  LOOP:  { full: 'Loop', desc: 'Decrements CX; jumps to target if CX ≠ 0. The standard 8086 counted loop.' },
  LOOPE: { full: 'Loop while Equal', desc: 'Decrements CX; jumps if CX ≠ 0 and ZF = 1.' },
  LOOPNE:{ full: 'Loop while Not Equal', desc: 'Decrements CX; jumps if CX ≠ 0 and ZF = 0.' },
  MOV:   { full: 'Move', desc: 'Copies source to destination. The most common x86 instruction; supports register, memory, and immediate operands.' },
  MOVS:  { full: 'Move String', desc: 'Copies a byte or word from DS:SI to ES:DI, then adjusts SI and DI. Used with REP for block moves.' },
  MUL:   { full: 'Unsigned Multiply', desc: 'Multiplies AL (or AX) by source. Result in AX (or DX:AX).' },
  NEG:   { full: 'Negate', desc: "Replaces the operand with its two's-complement negation. Sets carry if operand was nonzero." },
  NOP:   { full: 'No Operation', desc: 'Does nothing for two clock cycles. Encoded as XCHG AX,AX (opcode 90h).' },
  NOT:   { full: 'Bitwise NOT', desc: "Inverts all bits of the operand (one's complement). Does not affect flags." },
  OR:    { full: 'Logical Inclusive OR', desc: 'Bitwise OR between source and destination. Clears carry and overflow flags.' },
  OUT:   { full: 'Output to Port', desc: 'Writes AL or AX to a hardware I/O port.' },
  POP:   { full: 'Pop from Stack', desc: 'Reads the word at the top of the stack into the operand, then increments SP by 2.' },
  POPF:  { full: 'Pop Flags', desc: 'Pops a word from the stack into the flags register.' },
  PUSH:  { full: 'Push onto Stack', desc: 'Decrements SP by 2 and writes the operand word to the top of the stack.' },
  PUSHF: { full: 'Push Flags', desc: 'Decrements SP by 2 and writes the flags register onto the stack.' },
  RCL:   { full: 'Rotate Left through Carry', desc: 'Rotates bits left; the carry flag participates as an extra bit in the rotation.' },
  RCR:   { full: 'Rotate Right through Carry', desc: 'Rotates bits right; the carry flag participates as an extra bit in the rotation.' },
  REP:   { full: 'Repeat String Operation', desc: 'Repeats the next string instruction (MOVS, STOS, etc.) CX times, decrementing CX each iteration.' },
  REPE:  { full: 'Repeat while Equal', desc: 'Repeats string instruction while CX ≠ 0 and ZF = 1.' },
  REPNE: { full: 'Repeat while Not Equal', desc: 'Repeats string instruction while CX ≠ 0 and ZF = 0.' },
  RET:   { full: 'Return from Procedure', desc: 'Pops the return address and jumps there. Near form pops IP; far form pops IP and CS.' },
  RETN:  { full: 'Near Return', desc: 'Pops only IP from the stack and returns within the same code segment.' },
  RETF:  { full: 'Far Return', desc: 'Pops IP and CS from the stack, returning to a different code segment.' },
  ROL:   { full: 'Rotate Left', desc: 'Rotates bits left; bit 7 wraps to bit 0 and also copies to carry flag.' },
  ROR:   { full: 'Rotate Right', desc: 'Rotates bits right; bit 0 wraps to bit 7 and also copies to carry flag.' },
  SAHF:  { full: 'Store AH into Flags', desc: 'Copies AH into the low byte of the flags register (SF, ZF, AF, PF, CF).' },
  SAL:   { full: 'Shift Arithmetic Left', desc: 'Shifts operand left by count; zeros fill from right. Identical encoding to SHL.' },
  SAR:   { full: 'Shift Arithmetic Right', desc: 'Shifts operand right by count; sign bit fills from left (preserves sign).' },
  SBB:   { full: 'Subtract with Borrow', desc: 'Subtracts source and carry flag from destination. Used to chain multi-word subtractions.' },
  SCAS:  { full: 'Scan String', desc: 'Compares AL or AX with the byte or word at ES:DI, then adjusts DI. Used with REPNE to search for a value.' },
  SHL:   { full: 'Shift Logical Left', desc: 'Shifts operand left by count; zeros fill from right. Bit shifted out goes into carry.' },
  SHR:   { full: 'Shift Logical Right', desc: 'Shifts operand right by count; zeros fill from left. Bit shifted out goes into carry.' },
  STC:   { full: 'Set Carry Flag', desc: 'Sets CF to 1.' },
  STD:   { full: 'Set Direction Flag', desc: 'Sets DF to 1 so string instructions decrement SI/DI (high to low).' },
  STI:   { full: 'Set Interrupt Flag', desc: 'Enables maskable interrupts by setting IF to 1.' },
  STOS:  { full: 'Store String', desc: 'Writes AL or AX to ES:DI, then adjusts DI. Used with REP to fill a block of memory.' },
  SUB:   { full: 'Subtract', desc: 'Subtracts source from destination, stores result in destination. Updates all arithmetic flags.' },
  TEST:  { full: 'Test (AND without storing)', desc: 'Bitwise AND between operands; sets flags but discards the result. Used to test individual bits.' },
  WAIT:  { full: 'Wait for Coprocessor', desc: 'Halts the CPU until the 8087 FPU signals it is done via the TEST pin.' },
  XCHG:  { full: 'Exchange', desc: 'Swaps the values of two operands. Atomic when one operand is memory.' },
  XLAT:  { full: 'Table Look-Up Translation', desc: 'Replaces AL with the byte at DS:BX+AL. Useful for character translation tables.' },
  XOR:   { full: 'Exclusive OR', desc: 'Bitwise XOR. Commonly used to zero a register (XOR AX,AX) or toggle bits.' },
};

const INSTRUCTIONS_MDL = {
  DEFINE:  { full: 'Define Global Function', desc: 'Creates a function object and binds it globally. The standard way to define named procedures in MDL/Muddle.' },
  DEFMAC:  { full: 'Define Macro', desc: 'Defines a compile-time macro that transforms code before evaluation.' },
  PROG:    { full: 'Sequential Program Block', desc: 'Evaluates its body forms in sequence. Supports RETURN to exit early with a value.' },
  REPEAT:  { full: 'Infinite Loop', desc: 'Evaluates body forms repeatedly until a RETURN exits the block. The standard MDL iteration construct.' },
  MAPF:    { full: 'Map with Final Function', desc: 'Applies a mapping function to successive elements of one or more sequences, collecting results.' },
  MAPR:    { full: 'Map over Rest Sequences', desc: 'Like MAPF but passes the remaining sequence (tail) rather than individual elements to the mapping function.' },
  COND:    { full: 'Conditional', desc: 'Evaluates condition–body pairs in sequence; executes and returns the first body whose condition is true.' },
  IF:      { full: 'If–Then–Else', desc: 'Evaluates condition; returns then-form if true, else-form if false.' },
  SET:     { full: 'Set Local Variable', desc: 'Binds an atom to a value in the current local environment.' },
  SETG:    { full: 'Set Global Variable', desc: 'Binds an atom to a value in the global environment, creating or replacing the binding.' },
  VALUE:   { full: 'Get Variable Value', desc: 'Returns the current value of an atom, checking local bindings first, then global.' },
  GVAL:    { full: 'Get Global Value', desc: 'Returns the global value of the named atom, ignoring local bindings.' },
  LVAL:    { full: 'Get Local Value', desc: 'Returns the local binding of the named atom in the current activation frame.' },
  GDECL:   { full: 'Global Declaration', desc: 'Declares the type of a global variable for the MDL type checker.' },
  MVTYPE:  { full: 'Make Valued Type', desc: 'Creates a new type name as a subtype of an existing primitive type.' },
  TYPE:    { full: 'Get Type', desc: 'Returns the MDL type name (an atom) of the argument.' },
  TYPEP:   { full: 'Type Predicate', desc: 'Returns true if the argument is of the specified type.' },
  PRIMTYPE: { full: 'Primitive Type', desc: 'Returns the underlying primitive type of an MDL object (LIST, VECTOR, ATOM, etc.).' },
  CHTYPE:  { full: 'Change Type', desc: 'Creates a new object with the same underlying value as the argument but with a different type tag.' },
  APPLY:   { full: 'Apply Function', desc: 'Calls a function with the specified arguments. Equivalent to calling the function directly.' },
  EVAL:    { full: 'Evaluate', desc: 'Evaluates its argument as an MDL expression in the current environment.' },
  CONS:    { full: 'Construct List Pair', desc: 'Prepends an element to a list, returning a new list.' },
  CAR:     { full: 'First Element', desc: 'Returns the first element of a list or structure. MDL equivalent of LISP CAR.' },
  CDR:     { full: 'Rest of List', desc: 'Returns all elements after the first. MDL equivalent of LISP CDR.' },
  CADR:    { full: 'Second Element (CAR of CDR)', desc: 'Returns the second element of a list.' },
  LIST:    { full: 'Create List', desc: 'Creates a new list from the given arguments.' },
  VECTOR:  { full: 'Create Vector', desc: 'Creates a new vector (fixed-length array) from the given arguments.' },
  STRING:  { full: 'Create String', desc: 'Creates a string from the given characters, or concatenates string arguments.' },
  FORM:    { full: 'Create Form Object', desc: 'Creates an unevaluated call form from a list of elements.' },
  FUNCTION:{ full: 'Create Anonymous Function', desc: 'Creates an anonymous function. Takes an argument list and body forms.' },
  PARSE:   { full: 'Parse String to MDL Object', desc: 'Reads and returns the first MDL object represented by the string.' },
  RETURN:  { full: 'Return from PROG or REPEAT', desc: 'Exits the current PROG or REPEAT block with the specified value.' },
  AGAIN:   { full: 'Restart PROG or REPEAT', desc: 'Jumps back to the beginning of the enclosing PROG or REPEAT without returning a value.' },
  EMPTY:   { full: 'Test for Empty Sequence', desc: 'Returns true if the argument is an empty list, vector, or string.' },
  REST:    { full: 'Rest of Sequence', desc: 'Returns a sequence starting from the second element, or the nth element if n is specified.' },
  NTH:     { full: 'Nth Element', desc: 'Returns the nth element (1-indexed) of a sequence.' },
  BACK:    { full: 'Move Sequence Pointer Back', desc: 'Returns a new sequence pointer moved back by n positions.' },
  PUTREST: { full: 'Replace Rest of List', desc: 'Destructively replaces the CDR (rest) of a list with a new sequence.' },
  PUT:     { full: 'Store into Structure', desc: 'Stores a value into a specific numbered slot of a structured object.' },
  LENGTH:  { full: 'Length of Sequence', desc: 'Returns the number of elements in a list, vector, or string.' },
  MEMQ:    { full: 'Find Member by Identity', desc: 'Searches a list for an element == (identical) to the key. Returns the tail or false.' },
  MEMBER:  { full: 'Find Matching Member', desc: 'Searches a list for an element structurally equal to the key. Returns the tail or false.' },
  FIRST:   { full: 'First Element', desc: 'Returns the first element of a sequence (equivalent to CAR).' },
  LAST:    { full: 'Last Element', desc: 'Returns the last element of a sequence.' },
  SORT:    { full: 'Sort Sequence', desc: 'Returns a sorted copy of a sequence using a comparison function.' },
  NOT:     { full: 'Logical NOT', desc: 'Returns false (<>) if the argument is true, or true (T) if the argument is false (<>).' },
  AND:     { full: 'Logical AND', desc: 'Evaluates arguments left to right; returns the last truthy value, or false if any is false.' },
  OR:      { full: 'Logical OR', desc: 'Evaluates arguments left to right; returns the first truthy value, or false if all are false.' },
  PRINC:   { full: 'Print without Escaping', desc: 'Prints its argument without surrounding quotes or escape characters.' },
  PRINI:   { full: 'Print in Internal Format', desc: 'Prints its argument in a form that can be read back by PARSE.' },
  TERPRI:  { full: 'Terminate Print Line', desc: 'Outputs a newline character.' },
  READCHR: { full: 'Read Character', desc: 'Reads and returns the next character from the current input channel.' },
  NEXTCHR: { full: 'Peek Next Character', desc: 'Returns the next character from input without consuming it.' },
  IN:      { full: 'Advance Sequence Pointer', desc: 'Advances a sequence pointer by n positions, returning the new pointer.' },
};

// ---------------------------------------------------------------------------
// C language — keywords, stdlib, and Borland DOS extensions
// ---------------------------------------------------------------------------

const INSTRUCTIONS_C = {
  // ── Control flow ────────────────────────────────────────────────────────
  if:        { full: 'Conditional Branch',          desc: 'Executes the following block only if the condition is non-zero (true). In game code, conditions testing bit-flags with & are especially common: if (actor->flags & FL_ATTACKMODE).' },
  else:      { full: 'Alternative Branch',           desc: 'Executes when the preceding if condition was false. Can chain: else if (…) for multi-way logic without a switch.' },
  for:       { full: 'Count-Controlled Loop',        desc: 'Three-part header: initializer; condition; increment. Standard for iterating arrays, tile maps, and actor lists. The body runs as long as condition is non-zero.' },
  while:     { full: 'Pre-Test Loop',                desc: 'Checks condition before each iteration. If condition is false initially, the body never runs. Used for polling loops and event queues.' },
  do:        { full: 'Post-Test Loop',               desc: 'Runs the body at least once before checking the condition. Less common than while; useful for "execute once, retry if needed" patterns like input waiting.' },
  switch:    { full: 'Multi-Way Branch',             desc: 'Jumps to a matching case label. Without break, execution falls through to subsequent cases — sometimes intentional for shared code paths. Faster than a chain of if/else for dense integer ranges.' },
  case:      { full: 'Switch Case Label',            desc: 'A jump target within switch. Execution continues until break, return, goto, or the end of the switch block. Fall-through to the next case is legal and sometimes deliberate.' },
  default:   { full: 'Default Switch Case',          desc: 'Catches any switch value not matched by an explicit case. Good practice to always include one, even if only for an error handler.' },
  break:     { full: 'Exit Loop or Switch',          desc: 'Immediately exits the nearest enclosing for/while/do/switch. Does not exit multiple levels — use goto or a flag for that.' },
  continue:  { full: 'Next Iteration',               desc: 'Skips the rest of the current loop body and jumps to the iteration check (for: increment then condition; while/do: condition). Does not exit the loop.' },
  return:    { full: 'Return from Function',         desc: 'Exits the current function. With an expression: passes the value to the caller. Without: exits a void function. Execution resumes at the call site.' },
  goto:      { full: 'Unconditional Jump',           desc: 'Transfers control to a named label in the same function. Avoided in structured code but useful for breaking out of nested loops or centralizing error-handling cleanup.' },
  // ── Type keywords ────────────────────────────────────────────────────────
  int:       { full: 'Signed Integer',               desc: 'On 16-bit DOS (Wolfenstein\'s target: Borland C++ 3.1), int was 16 bits — range −32,768 to 32,767. Overflow in screen coordinate or distance arithmetic was a real bug risk; many values used long instead.' },
  long:      { full: 'Long Integer (32-bit)',         desc: 'Guaranteed at least 32 bits. On DOS, long = 32 bits — used for distances, scores, and anything that could exceed 16-bit range. Borland C++ generated 32-bit arithmetic via emulated instructions on 286 CPUs.' },
  short:     { full: 'Short Integer (16-bit)',        desc: 'Exactly 16 bits. On 16-bit DOS, short and int were the same size. Explicit short signals the programmer intended a half-word value.' },
  unsigned:  { full: 'Unsigned Modifier',            desc: 'Removes the sign bit, doubling the positive range. unsigned int on DOS: 0 to 65,535. Used for byte offsets, bitfields, and anything that\'s never negative — map indices, tile numbers, pixel offsets.' },
  char:      { full: 'Character / Byte',             desc: 'One byte. Used both for text strings (null-terminated char arrays) and as a compact 0–255 integer. Wolf3D uses it for map tile data, sprite palette indices, and flag bytes.' },
  void:      { full: 'No Type',                      desc: 'Marks a function as returning nothing, or a pointer as typeless (void*). A void* can be assigned to any pointer type without a cast — used in memory manager interfaces.' },
  float:     { full: 'Single-Precision Float (32-bit)', desc: 'Wolf3D avoided floats entirely. On 286/386 without an FPU, floating-point operations were software-emulated and roughly 10× slower than integer math. All angles and distances used fixed-point integers or precomputed tables.' },
  double:    { full: 'Double-Precision Float (64-bit)', desc: 'Even slower than float on CPUs without an 8087/387 FPU. Absent from Wolf3D\'s hot paths — used only where precision mattered more than speed (startup calculations, etc.).' },
  struct:    { full: 'Structured Type',              desc: 'Groups named fields into one contiguous memory block. The core data structuring tool in C. Key Wolf3D structs: objtype (all actor state), statobj_t (static props), gametype (save-game state), mminfotype (memory manager bookkeeping).' },
  union:     { full: 'Overlapping Fields',           desc: 'Members share the same memory — size equals the largest. Used to reinterpret bytes as different types, or store variant data compactly. Common in low-level DOS code for accessing high/low bytes of a 16-bit register.' },
  enum:      { full: 'Named Integer Constants',      desc: 'Defines a set of named integers starting from 0 (unless overridden). Wolf3D uses enums for: game states (GS_PLAYING, GS_DIED), actor classes (en_dog, en_guard, en_officer…), weapon types (wp_knife, wp_pistol, wp_machinegun…).' },
  typedef:   { full: 'Type Alias',                   desc: 'Declares a new name for a type. Wolf3D\'s id_types.h defines the canonical aliases: byte = unsigned char, word = unsigned, longword = unsigned long, boolean = int. These names appear throughout the engine.' },
  // ── Storage / qualifiers ─────────────────────────────────────────────────
  static:    { full: 'Static Storage / File-Private', desc: 'On a local variable: persists its value between calls (stored in BSS/data, not on the stack). On a file-scope symbol: internal linkage — hidden from other .c files. Wolf3D uses static heavily to keep subsystem internals private.' },
  extern:    { full: 'External Symbol Declaration',  desc: 'Declares that a variable or function is defined in another translation unit. The linker resolves the address. Wolf3D\'s global state (gamestate, player, tilemap, etc.) is declared extern in header files shared across modules.' },
  volatile:  { full: 'No-Cache / No-Reorder Guarantee', desc: 'Forces every read/write to go to actual memory, preventing the compiler from caching the value in a register or reordering accesses. Used for hardware-mapped I/O ports and variables shared with interrupt service routines (like the keyboard state table).' },
  const:     { full: 'Read-Only',                    desc: 'Marks a variable as non-modifiable after initialisation. Used for string literals, lookup tables, and sin/cos tables. The compiler can place const data in ROM or a read-only data segment.' },
  register:  { full: 'Register Hint',                desc: 'Requests the compiler store this variable in a CPU register. Borland C++ 3.1 honored this hint for loop counters and inner-loop variables — meaningfully faster on 286/386 where memory accesses were slow relative to register ops. Ignored by modern compilers.' },
  // ── Borland DOS extensions ────────────────────────────────────────────────
  far:       { full: 'Far Pointer — DOS Memory Model', desc: 'A 32-bit segment:offset pointer, allowing access to any byte in the 1MB real-mode address space. Essential for Wolf3D\'s graphics data — each texture/sprite chunk lives in a separate 64KB segment managed by the memory manager. Without far pointers, you\'re limited to 64KB.' },
  near:      { full: 'Near Pointer — Current Segment', desc: 'A 16-bit offset within the default data segment. Faster than far (one word, not two) but limited to 64KB. Used for stack variables, small structs, and anything guaranteed to stay within one segment.' },
  huge:      { full: 'Huge Pointer — Normalised Far', desc: 'A far pointer that is automatically normalised when incremented, so it can safely cross 64KB boundaries. Used when a single array or buffer exceeds 64KB — e.g., a full-screen bitmap or a large sound sample.' },
  interrupt: { full: 'ISR Attribute — Borland',       desc: 'Marks a function as an interrupt service routine. The compiler generates an IRET (interrupt return) instead of RET, saves/restores all registers on entry/exit, and disables interrupts at entry. Wolf3D\'s keyboard handler (INL_KeyService) and timer handler are declared interrupt.' },
  // ── Preprocessor directives ───────────────────────────────────────────────
  define:    { full: '#define — Macro',               desc: 'Textual substitution before compilation. Every occurrence of the name is replaced by its expansion. Wolf3D defines screen dimensions, tile IDs, sprite constants, and game limits as macros — changing one #define ripples through the whole build.' },
  include:   { full: '#include — Insert Header',      desc: 'Pastes the contents of another file at this point. <angle brackets> search the compiler\'s include path (standard headers); "quotes" search the project directory first. Wolf3D headers declare shared types, extern globals, and function prototypes.' },
  ifdef:     { full: '#ifdef — Conditional Compile',  desc: 'Includes the following block only if the named macro has been defined. Wolf3D uses this for debug builds (DEBUGKEYS, SPEAR), platform variants, and EGA vs VGA code paths.' },
  ifndef:    { full: '#ifndef — Include Guard',       desc: 'Includes the block only if the macro is NOT defined. The classic header-guard pattern uses #ifndef HEADER_H / #define HEADER_H / … / #endif to prevent double-inclusion.' },
  endif:     { full: '#endif — Close Conditional',    desc: 'Closes a #if, #ifdef, or #ifndef block. In a large file with many conditional sections, #endifs can be hard to match — Borland C++ had no diagnostic for mismatched conditionals.' },
  pragma:    { full: '#pragma — Compiler Directive',  desc: 'Non-standard hint to the compiler. Borland C++ used #pragma for memory model selection, warning suppression, and inline-assembly alignment. Silently ignored by compilers that don\'t understand it.' },
  // ── Standard library — memory ─────────────────────────────────────────────
  malloc:    { full: 'Allocate Heap Memory',          desc: 'Requests a contiguous uninitialised block from the heap. Returns NULL on failure — always check. Wolf3D bypassed raw malloc with its MM_ memory manager, which handled far memory, cache tiers, and EMS. Direct malloc calls in Wolf3D are rare.' },
  free:      { full: 'Release Heap Memory',           desc: 'Returns a malloc\'d block to the heap. Double-free or use-after-free were common DOS crash sources — no memory-safety tooling existed. Wolf3D\'s MM_FreePtr wrapper zeroed the pointer after freeing to catch some misuse.' },
  memcpy:    { full: 'Copy Memory Block',             desc: 'Copies n bytes from src to dst. Source and destination must not overlap (use memmove if they might). The workhorse of every blit, buffer-copy, asset-load, and save-game operation.' },
  memmove:   { full: 'Copy Memory (overlap-safe)',    desc: 'Like memcpy but handles overlapping regions correctly by choosing the copy direction. Slower than memcpy because it must check for overlap or always use the safe direction.' },
  memset:    { full: 'Fill Memory',                   desc: 'Sets n consecutive bytes to a given value. memset(buf, 0, size) is the standard way to zero a struct or buffer. Used in Wolf3D to clear the screen, reset game state, and zero newly allocated memory.' },
  memcmp:    { full: 'Compare Memory Blocks',         desc: 'Byte-by-byte comparison of two regions. Returns 0 if identical, negative if first < second, positive otherwise. Used for save-slot comparison and data validation.' },
  // ── Standard library — strings ────────────────────────────────────────────
  sprintf:   { full: 'Format String into Buffer',     desc: 'Writes printf-style output into a char array. Wolf3D uses sprintf to render score digits, ammo counts, and status messages as strings that the screen renderer then blits as character tiles.' },
  strcpy:    { full: 'Copy String',                   desc: 'Copies src into dst including the null terminator. Writes past the end of dst if src is too long — the original buffer overflow. Wolf3D uses fixed-size buffers and known-length strings, making this safe in context.' },
  strncpy:   { full: 'Bounded String Copy',           desc: 'Copies at most n characters. Does not guarantee null termination if src is longer than n — the destination may need an explicit nul written afterwards.' },
  strcmp:    { full: 'Compare Strings',               desc: 'Lexicographic comparison. Returns 0 if equal, <0 if s1 < s2, >0 if s1 > s2. Used for command-line argument matching and save-game name comparison.' },
  strlen:    { full: 'String Length',                 desc: 'Counts bytes up to (not including) the null terminator. O(n) — rescanning every access. Wolf3D caches lengths where string copying is performance-sensitive.' },
  strcat:    { full: 'Append String',                 desc: 'Appends src to dst. dst must have room for both strings plus the null terminator. Another classic overflow; safe only when buffer sizes are tightly controlled.' },
  // ── Standard library — I/O ────────────────────────────────────────────────
  printf:    { full: 'Formatted Print to stdout',     desc: 'Writes formatted text to the console. Rare in game hot paths; used for startup diagnostics, version banners, and error messages before the graphics mode is set.' },
  fopen:     { full: 'Open File',                     desc: 'Opens a file by path, returning a FILE* on success or NULL on failure. Mode: "r" text read, "w" text write, "rb"/"wb" binary. Wolf3D opens all asset files in binary mode — text translation would corrupt level data.' },
  fclose:    { full: 'Close File',                    desc: 'Flushes pending writes and closes the stream. Forgetting fclose leaks a DOS file handle; DOS limited processes to 20 open files by default.' },
  fread:     { full: 'Read from File',                desc: 'Reads count items of size bytes each into buffer. Returns the number of items successfully read — less than count signals EOF or error. Wolf3D uses fread to load compressed asset chunks from VGAGRAPH and VSWAP.' },
  fwrite:    { full: 'Write to File',                 desc: 'Writes count items from buffer to the stream. Returns items written. Wolf3D uses fwrite for save-game data and high-score persistence.' },
  fseek:     { full: 'Set File Position',             desc: 'Moves the stream position to offset from origin: SEEK_SET (start of file), SEEK_CUR (current position), SEEK_END (end). Used to jump directly to a chunk\'s offset in the VGAHEAD/VGAGRAPH file pair.' },
  ftell:     { full: 'Get File Position',             desc: 'Returns the current byte offset from the start of the file. Used with fseek to save and restore a position, or to measure file size (fseek to end, ftell).' },
  // ── Standard library — misc ───────────────────────────────────────────────
  exit:      { full: 'Terminate Program',             desc: 'Flushes stdio buffers, runs atexit() handlers, and exits. Status 0 = success. Wolf3D calls this at the end of its shutdown sequence after restoring video mode and freeing resources.' },
  abort:     { full: 'Abnormal Termination',          desc: 'Terminates immediately without cleanup. Generates SIGABRT. Used for truly unrecoverable states — typically an assertion failure or corrupted memory manager.' },
  atoi:      { full: 'String to Integer',             desc: 'Converts a decimal string to int. No error reporting — invalid input silently returns 0. Wolf3D uses it for command-line parameters like episode and skill level.' },
  sizeof:    { full: 'Size of Type or Object',        desc: 'Compile-time operator yielding the byte size of a type or variable expression. sizeof(objtype) used with malloc; sizeof(array)/sizeof(array[0]) for array length. Fully resolved at compile time — zero runtime cost.' },
  NULL:      { full: 'Null Pointer Constant',         desc: 'Conventionally 0 or (void*)0. Comparing a pointer to NULL tests whether malloc, fopen, or a lookup succeeded. Dereferencing NULL on DOS would typically crash to a garbled screen rather than a clean error.' },
};

// Wolf3D / id Software engine subsystem prefixes.
// When a C function isn't in the table above, these patterns identify the
// subsystem it belongs to, giving the reader useful context.
const C_ENGINE_PREFIXES = [
  // [prefix (uppercase), system name, description]
  ['VW_',  'Video — framebuffer',   'Part of Wolf3D\'s VGA rendering module. VW_ functions write directly to the off-screen buffer: blitting masked sprites, clearing regions, scaling walls, and flipping the double buffer to visible memory.'],
  ['VL_',  'Video — hardware',      'Low-level VGA hardware access. VL_ functions set palette entries, trigger screen fades, switch video modes, and write directly to VGA registers — the layer below the VW_ blitter.'],
  ['US_',  'User Shell',            'Text and window rendering for menus, dialogs, and in-game messages. US_ functions draw bordered windows, center text strings, and handle the font engine that blits character tiles to the screen.'],
  ['IN_',  'Input Manager',         'Polls keyboard, mouse, and joystick state. Abstracts all input devices behind a unified ControlInfo struct. Also handles demo record/playback: every IN_ event can be serialised to a byte stream and replayed exactly.'],
  ['INL_', 'Input — internal',      'Internal helpers for the input manager: low-level ISR-based keyboard scanning, raw joystick A/D reads, and mouse delta accumulation. Not part of the public IN_ API.'],
  ['SD_',  'Sound Manager',         'Abstraction layer over PC speaker, OPL2 AdLib FM synthesis, and Sound Blaster digitised audio. A single SD_PlaySound() call routes to whatever hardware is available and has been configured by the user.'],
  ['SDL_', 'Sound — internal',      'Internal sound driver helpers: hardware detection, interrupt service routines for the PC speaker and SoundBlaster DMA, and OPL2 register writes. The SDL_ prefix (unrelated to the modern SDL library) means Sound Driver Layer.'],
  ['CA_',  'Cache Manager',         'Loads and decompresses asset chunks from the VGAGRAPH, VSWAP, and AUDIOT files. Manages the chunk directory (VGAHEAD), decompresses Huffman-encoded data, and places results in MM_-managed far memory segments.'],
  ['MM_',  'Memory Manager',        'Wolf3D\'s custom heap. Manages near, far, and EMS/XMS memory in tiers: locked (never moved), cached (purgeable under pressure), and free. MM_GetPtr allocates; MM_SetPurge marks a block purgeable; MM_SortMem compacts the heap.'],
  ['PM_',  'Page Manager',          'Maps the VSWAP page file (wall textures, sprites, sound pages) into memory. Maintains a page table; caches frequently accessed pages; tracks a main-memory pool and optionally an EMS pool for overflow.'],
  ['BJ_',  'BJ Blazkowicz',         'Player-character routines specific to the intro and ending sequences — not in-game player movement. Named for the protagonist of Wolfenstein 3D.'],
  ['WL_',  'Game Module',           'Core game logic: actor AI state machines, collision detection, level loading, player movement, weapon firing, and game-state transitions. WL_ groups the game-specific layer above the engine subsystems.'],
  ['RF_',  'Refresh',               'Screen refresh scheduling and dirty-region tracking — decides which parts of the screen need redrawing each frame.'],
  ['MS_',  'Misc / System',         'Miscellaneous system utilities: command-line parsing, file path helpers, error dialogs, and the quit/restart sequence.'],
  ['CP_',  'Control Panel',         'The in-game menu and options screens. CP_ functions render menu items, handle navigation input, and persist settings to the config file.'],
  ['STR_', 'String Resource',       'Named string constants for user-visible text. Centralising them in macros made it easier to produce localised versions of the game.'],
  ['SPR_', 'Sprite Constant',       'Named indices into the sprite sheet. SPR_KNIFEREADY, SPR_DEMO, SPR_DEATHCAM, etc. identify specific animation frames by purpose rather than raw number.'],
  ['FL_',  'Actor Flag Bit',        'Bit-flag constants for the objtype.flags field. Tested with bitwise AND: (ob->flags & FL_ATTACKMODE). Common flags: FL_ATTACKMODE, FL_VISABLE, FL_NEVERMARK, FL_BONUS.'],
  ['GC_',  'Graphics Controller',   'VGA Graphics Controller register constants — port 0x3CE/0x3CF. GC_INDEX selects the register; GC_MODE, GC_BITMASK etc. are the register indices for controlling write modes and plane masks.'],
  ['SC_',  'Sequencer',             'VGA Sequencer register constants — port 0x3C4/0x3C5. SC_INDEX selects the register; SC_MAPMASK controls which bitplanes receive writes during planar VGA rendering.'],
];

function extractInstruction(lineText, language) {
  const lang = language.toLowerCase();
  const trimmed = lineText.trim();
  if (!trimmed) return null;

  if (lang.includes('mdl') || lang.includes('muddle')) {
    const m = trimmed.match(/<([A-Z][A-Z0-9?!-]*)/i);
    if (m) return m[1].toUpperCase();
    return null;
  }

  if (lang === 'c' || lang.startsWith('c ') || lang.startsWith('c,') || lang.includes('c++')) {
    // Strip line comments and leading whitespace
    const stripped = trimmed.replace(/\/\/.*/, '').replace(/\/\*.*?\*\//g, '').trim();
    if (!stripped) return null;
    // Preprocessor directives: extract the directive name
    const pp = stripped.match(/^#\s*([a-z]+)/);
    if (pp) return pp[1];
    // Prefer a function/macro call: identifier immediately followed by (
    const call = stripped.match(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/);
    if (call) return call[1];
    // Fall back to first identifier (handles return, break, assignments…)
    const first = stripped.match(/\b([A-Za-z_][A-Za-z0-9_]+)\b/);
    if (first) return first[1];
    return null;
  }

  // Assembly (6502 or 8086): skip pure comment/directive-only lines
  if (trimmed.startsWith(';') || trimmed.startsWith('*')) return null;

  let rest = lineText;
  if (!/^ /.test(lineText)) {
    rest = lineText.replace(/^[A-Za-z_?.][A-Za-z0-9_?.]*[:\s]+/, '').trim();
  } else {
    rest = trimmed;
  }

  const token = rest.match(/^([A-Za-z]{2,})/);
  if (!token) return null;
  return token[1].toUpperCase();
}

function lookupInstruction(opcode, language) {
  const lang = language.toLowerCase();
  let table;
  if (lang.includes('6502')) table = INSTRUCTIONS_6502;
  else if (lang.includes('8086') || lang.includes('x86') || lang.includes('dos')) table = INSTRUCTIONS_8086;
  else if (lang.includes('mdl') || lang.includes('muddle')) table = INSTRUCTIONS_MDL;
  else if (lang === 'c' || lang.startsWith('c ') || lang.startsWith('c,') || lang.includes('c++')) table = INSTRUCTIONS_C;
  else return null;

  const hit = table[opcode] || table[opcode.toLowerCase()];
  if (hit) return hit;

  // For C: try engine-subsystem prefix matching when the function isn't in the table.
  // Covers Wolf3D engine APIs (VW_, SD_, CA_, MM_, IN_, US_…) and similar patterns.
  if (table === INSTRUCTIONS_C) {
    for (const [pfx, system, desc] of C_ENGINE_PREFIXES) {
      if (opcode.toUpperCase().startsWith(pfx)) {
        return { full: `${opcode}  ·  ${system}`, desc };
      }
    }
  }

  return null;
}

function showInstructionPopup(opcode, info, lineEl) {
  removeLookup();
  const rect = lineEl.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'lookup-popup instruction-popup';
  el.style.left = Math.min(rect.left + 48, window.innerWidth - 360) + 'px';
  el.style.top = Math.min(rect.bottom + 6, window.innerHeight - 160) + 'px';
  el.innerHTML = `
    <button class="lookup-close" onclick="this.closest('.lookup-popup').remove()">×</button>
    <div class="lookup-word">${escapeHtml(opcode)}</div>
    <div class="instruction-full">${escapeHtml(info.full)}</div>
    <div class="lookup-def">${escapeHtml(info.desc)}</div>`;
  document.body.appendChild(el);
  lookupPopup = el;
}

function effectiveLanguage(language, filePath) {
  // For mixed-language programs (e.g. "C, x86 Assembly") derive the actual
  // file type from the source file extension so each file gets the right table.
  if (!filePath) return language;
  const ext = filePath.split('.').pop().toLowerCase();
  if (ext === 'c' || ext === 'h' || ext === 'cpp' || ext === 'cc') return 'C';
  if (ext === 'asm' || ext === 's' || ext === 'a') {
    // Strip 'C' from mixed language strings like "C, x86 Assembly"
    const asmOnly = language.replace(/\bC\b\s*,?\s*/i, '').trim();
    return asmOnly || language;
  }
  return language;
}

function setupInstructionLookup(container, language, filePath) {
  if (!language) return;
  const lang = effectiveLanguage(language, filePath);
  container.addEventListener('click', e => {
    const line = e.target.closest('.code-line');
    if (!line) return;
    const codeSpan = line.querySelector('.line-code');
    if (!codeSpan) return;
    const opcode = extractInstruction(codeSpan.textContent, lang);
    if (!opcode) return;
    const info = lookupInstruction(opcode, lang);
    if (!info) return;
    e.stopPropagation();
    showInstructionPopup(opcode, info, line);
  });
}

function parseYamlFrontmatter(raw) {
  const delimiter = '---';
  const start = raw.indexOf(delimiter);
  if (start === -1) return { meta: {}, body: raw };
  const end = raw.indexOf(delimiter, start + 3);
  if (end === -1) return { meta: {}, body: raw };
  const yamlText = raw.slice(start + 3, end).trim();
  const body = raw.slice(end + 3);
  const meta = parseYaml(yamlText);
  return { meta, body };
}

function parseYaml(text) {
  const result = {};
  const lines = text.split('\n');
  let i = 0;

  function peek() { return lines[i] || ''; }
  function next() { return lines[i++] || ''; }

  function getIndent(line) {
    let n = 0;
    while (n < line.length && line[n] === ' ') n++;
    return n;
  }

  function parseValue(raw) {
    raw = raw.trim();
    if (raw.startsWith('"') && raw.endsWith('"')) return raw.slice(1, -1);
    if (raw.startsWith("'") && raw.endsWith("'")) return raw.slice(1, -1);
    if (raw === 'true') return true;
    if (raw === 'false') return false;
    if (raw === 'null' || raw === '~') return null;
    const n = Number(raw);
    if (!isNaN(n) && raw !== '') return n;
    return raw;
  }

  function parseBlock(baseIndent) {
    const obj = {};
    while (i < lines.length) {
      const line = peek();
      if (line.trim() === '' || line.trim().startsWith('#')) { next(); continue; }
      const indent = getIndent(line);
      if (indent < baseIndent) break;
      next();
      const trimmed = line.trim();

      if (trimmed.startsWith('- ')) {
        i--;
        return parseArray(baseIndent);
      }

      const colonIdx = trimmed.indexOf(': ');
      const endsWithColon = trimmed.endsWith(':');

      if (colonIdx !== -1 || endsWithColon) {
        const key = endsWithColon ? trimmed.slice(0, -1) : trimmed.slice(0, colonIdx);
        const valRaw = endsWithColon ? '' : trimmed.slice(colonIdx + 2);

        if (valRaw === '' || valRaw.trim() === '') {
          const nextLine = peek();
          const nextIndent = getIndent(nextLine || '');
          if (nextLine && nextLine.trim().startsWith('- ')) {
            obj[key] = parseArray(nextIndent);
          } else if (nextLine && nextIndent > indent) {
            obj[key] = parseBlock(nextIndent);
          } else {
            obj[key] = null;
          }
        } else {
          obj[key] = parseValue(valRaw);
        }
      }
    }
    return obj;
  }

  function parseArray(baseIndent) {
    const arr = [];
    while (i < lines.length) {
      const line = peek();
      if (line.trim() === '') { next(); continue; }
      const indent = getIndent(line);
      if (indent < baseIndent) break;
      if (!line.trim().startsWith('- ')) break;
      next();
      const rest = line.trim().slice(2).trim();
      if (rest === '') {
        const nextLine = peek();
        const nextIndent = getIndent(nextLine || '');
        if (nextLine && nextIndent > indent) {
          arr.push(parseBlock(nextIndent));
        } else {
          arr.push(null);
        }
      } else {
        const colonIdx = rest.indexOf(': ');
        const endsWithColon = rest.endsWith(':');
        if (colonIdx !== -1 || endsWithColon) {
          const key = endsWithColon ? rest.slice(0, -1) : rest.slice(0, colonIdx);
          const valRaw = endsWithColon ? '' : rest.slice(colonIdx + 2);
          const obj = {};
          if (valRaw !== '') {
            obj[key] = parseValue(valRaw);
          } else {
            const nextLine = peek();
            const nextIndent = getIndent(nextLine || '');
            if (nextLine && nextIndent > indent) {
              obj[key] = parseBlock(nextIndent);
            }
          }
          const restBlock = parseBlock(indent + 2);
          arr.push(Object.assign(obj, restBlock));
        } else {
          arr.push(parseValue(rest));
        }
      }
    }
    return arr;
  }

  return parseBlock(0);
}

function syntaxClass(line) {
  const trimmed = line.trimStart();
  if (trimmed === '') return 'asm-empty';
  if (trimmed.startsWith('*') || trimmed.startsWith(';')) return 'asm-comment';
  if (/^\w+:/.test(trimmed) && !/^(org|equ|db|dw|ds|hex|asc|put|use|lst|tr|dum|dend)\b/i.test(trimmed)) return 'asm-label';
  if (/^\s*[.:]\w/.test(line)) return 'asm-label';
  if (/^\s+(\.|\b)(org|equ|db|dw|ds|hex|asc|put|use|lst|tr|dum|dend|sav|usr|lstdo)\b/i.test(line)) return 'asm-directive';
  if (/^\s*\w+\s*=\s*/.test(line)) return 'asm-directive';
  return '';
}

function renderCodeWithEnhancements(body, enhancements) {
  const lines = body.replace(/\r/g, '').split('\n');
  if (lines[lines.length - 1] === '') lines.pop();
  // The formatter always writes exactly one blank separator line after the
  // closing '---', producing '\n\n' before the code. Strip exactly those 2
  // leading empty elements so that lines[0] is source line 1. Using splice
  // (not a while-loop) preserves any genuine blank lines at the top of the
  // source file, keeping line_start/line_end indices exact.
  lines.splice(0, 2);

  const sorted = [...(enhancements || [])].sort((a, b) => a.line_start - b.line_start);

  const sections = [];
  let cursor = 0;

  for (const enh of sorted) {
    const s = enh.line_start - 1;
    const e = enh.line_end;
    if (s > cursor) {
      sections.push({ lines: lines.slice(cursor, s), startLine: cursor + 1, enhancement: null });
    }
    sections.push({ lines: lines.slice(s, e), startLine: s + 1, enhancement: enh, highlighted: true });
    cursor = e;
  }

  if (cursor < lines.length) {
    sections.push({ lines: lines.slice(cursor), startLine: cursor + 1, enhancement: null });
  }

  return sections.map(sec => renderSection(sec)).join('');
}

function renderSection({ lines, startLine, enhancement, highlighted }) {
  if (lines.length === 0 && !enhancement) return '';

  const codeHtml = lines.map((line, idx) => {
    const lineNum = startLine + idx;
    const cls = syntaxClass(line);
    const hl = highlighted ? ' highlighted' : '';
    const escaped = escapeHtml(line);
    return `<div class="code-line${hl}"><span class="line-num">${lineNum}</span><span class="line-code${cls ? ' ' + cls : ''}">${escaped}</span></div>`;
  }).join('');

  let html = '';
  if (lines.length > 0) {
    html += `<div class="code-section"><div class="code-block">${codeHtml}</div></div>`;
  }

  if (enhancement) {
    html += renderEnhancement(enhancement);
  }

  return html;
}

function renderEnhancement(enh) {
  const hasImage = enh.image_url;
  const gridClass = hasImage ? '' : ' no-image';

  const imageHtml = hasImage ? `
    <div class="enhancement-image-wrap">
      <img src="${escapeAttr(enh.image_url)}" alt="${escapeAttr(enh.title)}" loading="lazy">
      ${enh.image_caption ? `<p class="enhancement-caption">${escapeHtml(enh.image_caption)}${commonsUrl(enh.image_url) ? ` <a class="commons-link" href="${escapeAttr(commonsUrl(enh.image_url))}" target="_blank" rel="noopener">Wikimedia Commons</a>` : ''}</p>` : ''}
    </div>` : '';

  const wikiHtml = enh.wikipedia_url
    ? `<a href="${escapeAttr(enh.wikipedia_url)}" target="_blank" rel="noopener">Wikipedia ↗</a>`
    : '';

  return `
<details class="enhancement-panel" id="enh-${escapeAttr(enh.id)}">
  <summary>
    <span class="enhancement-toggle">▶</span>
    <span class="enhancement-title-text">${escapeHtml(enh.title)}</span>
  </summary>
  <div class="enhancement-body">
    <div class="enhancement-content-grid${gridClass}">
      <p class="enhancement-text">${escapeHtml(enh.content)}</p>
      ${imageHtml}
    </div>
    ${wikiHtml ? `<div class="enhancement-footer">${wikiHtml}</div>` : ''}
  </div>
</details>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return String(str || '').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function commonsUrl(url) {
  if (!url) return null;
  const m = url.match(/\/thumb\/[0-9a-f]\/[0-9a-f]{2}\/(.+?)\/\d+px-/);
  if (m) return 'https://commons.wikimedia.org/wiki/File:' + m[1];
  const m2 = url.match(/\/wikipedia\/commons\/[0-9a-f]\/[0-9a-f]{2}\/(.+)$/);
  if (m2) return 'https://commons.wikimedia.org/wiki/File:' + m2[1];
  return null;
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.text();
}

async function loadCatalog() {
  return JSON.parse(await fetchText('/catalog.json'));
}

async function loadFile(programSlug, fileSlug) {
  const text = await fetchText(`/programs/${programSlug}/${fileSlug}.md`);
  return parseYamlFrontmatter(text);
}

function renderShelf(catalog) {
  const programs = (catalog.programs || []).slice().sort((a, b) => (a.year || 0) - (b.year || 0));
  document.title = 'Code Museum';

  const cards = programs.map(p => `
    <a class="program-card" href="#/${p.slug}">
      <div class="program-card-top">
        <div class="program-title">${escapeHtml(p.title)}</div>
        <span class="lang-badge">${escapeHtml(p.language)}</span>
      </div>
      <p class="program-desc">${escapeHtml(p.description)}</p>
      <div class="program-meta">
        <span>${escapeHtml(p.author)}</span>
        <span>·</span>
        <span>${p.year}</span>
        <span>·</span>
        <span>${(p.files || []).length} files</span>
      </div>
    </a>`).join('');

  return `
<div class="page">
  <div class="shelf-header">
    <h1>Code Museum</h1>
    <p>Annotated source code from historically significant open-source programs.</p>
    <p>Read the code that changed computing.</p>
  </div>
  <div class="how-to">
    <div class="how-to-item">
      <div class="how-to-icon">▍</div>
      <div>
        <div class="how-to-title">Enhanced sections</div>
        <div class="how-to-desc">Sections of source code with an annotation are highlighted. A panel below the highlighted lines shows the title — click it to expand the full story: what the code does, who wrote it, and what it led to.</div>
      </div>
    </div>
    <div class="how-to-item">
      <div class="how-to-icon">?</div>
      <div>
        <div class="how-to-title">Instruction lookup</div>
        <div class="how-to-desc">Click any line of code to see what the instruction does. Covers 6502, 8086, MDL, and C — including Wolf3D and DOOM engine subsystems.</div>
      </div>
    </div>
    <div class="how-to-item">
      <div class="how-to-icon">✦</div>
      <div>
        <div class="how-to-title">Word lookup</div>
        <div class="how-to-desc">Right-click any word inside an annotation panel to look it up in the dictionary.</div>
      </div>
    </div>
  </div>
  <div class="program-grid">${cards}</div>
</div>`;
}

// ---------------------------------------------------------------------------
// Source tree builder — mirrors the repo directory structure
// ---------------------------------------------------------------------------

function buildFileTree(files) {
  const sorted = [...files].sort((a, b) => (a.order || 0) - (b.order || 0));
  const root = { dirs: {}, files: [] };
  for (const file of sorted) {
    const path = file.path || '';
    // Split on / — if no path, treat file as root-level
    const parts = path ? path.split('/').filter(Boolean) : [];
    if (parts.length === 0) {
      root.files.push(file);
      continue;
    }
    const dirParts = parts.slice(0, -1);
    let node = root;
    for (const dir of dirParts) {
      if (!node.dirs[dir]) node.dirs[dir] = { dirs: {}, files: [] };
      node = node.dirs[dir];
    }
    node.files.push(file);
  }
  return root;
}

function renderFileTree(node, programSlug, depth) {
  if (depth === undefined) depth = 0;
  let html = '';
  const pad  = (depth * 1.25 + 0.5).toFixed(2);  // rem — directory row indent
  const fpad = (depth * 1.25 + 1.75).toFixed(2); // rem — file row (icon column + dir indent)

  for (const dirName of Object.keys(node.dirs)) {
    const dirNode = node.dirs[dirName];
    const isRoot = depth === 0;
    html += `<div class="tree-group${isRoot ? ' tree-group-root' : ''}">`;
    html += `<div class="tree-dir" style="padding-left:${pad}rem">`;
    html += `<span class="tree-dir-icon">▾</span>`;
    html += `<span class="tree-dir-name">${escapeHtml(dirName)}/</span>`;
    html += `</div>`;
    html += renderFileTree(dirNode, programSlug, depth + 1);
    html += `</div>`;
  }

  for (const file of node.files) {
    // Backward-compat: files without a `generated` field are from old catalog — treat as linked
    const linked = file.generated !== false;
    if (linked) {
      html += `<a class="tree-file tree-file-link" href="#/${escapeAttr(programSlug)}/${escapeAttr(file.slug)}" style="padding-left:${fpad}rem">`;
      html += `<span class="tree-file-icon">▶</span>`;
      html += `<div class="tree-file-body">`;
      html += `<div class="tree-file-name">${escapeHtml(file.title)}</div>`;
      if (file.description) {
        html += `<div class="tree-file-desc">${escapeHtml(file.description)}</div>`;
      }
      html += `</div>`;
      html += `</a>`;
    } else {
      html += `<div class="tree-file tree-file-plain" style="padding-left:${fpad}rem">`;
      html += `<span class="tree-file-icon">·</span>`;
      html += `<div class="tree-file-body">`;
      html += `<div class="tree-file-name">${escapeHtml(file.title)}</div>`;
      if (file.description) {
        html += `<div class="tree-file-desc">${escapeHtml(file.description)}</div>`;
      }
      html += `</div>`;
      html += `</div>`;
    }
  }

  return html;
}

// ---------------------------------------------------------------------------

function renderProgramPage(program) {
  document.title = `${program.title} — Code Museum`;

  const files = program.files || [];
  const treeHtml = files.length > 0
    ? renderFileTree(buildFileTree(files), program.slug)
    : '';

  let introHtml;
  if (program.introduction && program.introduction.trim()) {
    introHtml = program.introduction.split('\n\n')
      .map(p => {
        let s = escapeHtml(p.trim());
        s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
        s = s.replace(/_(.+?)_/g, '<em>$1</em>');
        return `<p class="intro-paragraph">${s}</p>`;
      })
      .join('');
  } else {
    introHtml = `<p class="description">${escapeHtml(program.description)}</p>`;
  }

  const introImageHtml = program.image_url ? `
  <figure class="intro-image">
    <img src="${escapeAttr(program.image_url)}" alt="${escapeAttr(program.title)}" loading="lazy">
    ${program.image_caption ? `<figcaption>${escapeHtml(program.image_caption)}${commonsUrl(program.image_url) ? ` <a class="commons-link" href="${escapeAttr(commonsUrl(program.image_url))}" target="_blank" rel="noopener">Wikimedia Commons</a>` : ''}</figcaption>` : ''}
  </figure>` : '';

  return `
<div class="program-page">
  <div class="program-page-header">
    <h1>${escapeHtml(program.title)}</h1>
    <div class="byline">${escapeHtml(program.author)} · ${program.year} · ${escapeHtml(program.language)}</div>
    ${introImageHtml}
    ${introHtml}
  </div>
  <div class="file-tree">${treeHtml}</div>
  ${program.github_url ? `<a class="github-badge" href="${escapeAttr(program.github_url)}" target="_blank" rel="noopener">View source on GitHub ↗</a>` : ''}
</div>`;
}

function renderHeader(opts = {}) {
  const { programSlug, programTitle, fileTitle, githubUrl } = opts;

  let left = `<a class="header-logo" href="#/">Code Museum</a>`;

  if (programSlug && programTitle) {
    left += `<span class="header-sep">/</span>`;
    if (fileTitle) {
      left += `<a class="back-link" href="#/${programSlug}">← ${escapeHtml(programTitle)}</a>`;
      left += `<span class="header-sep">/</span>`;
      left += `<span class="header-title">${escapeHtml(fileTitle)}</span>`;
    } else {
      left += `<a class="back-link" href="#/">← Programs</a>`;
      left += `<span class="header-sep">/</span>`;
      left += `<span class="header-title">${escapeHtml(programTitle)}</span>`;
    }
  }

  let right = '';
  if (fileTitle) {
    right += `<div class="font-size-controls">
      <button onclick="adjustFontSize(-1)" title="Smaller">A−</button>
      <button onclick="adjustFontSize(1)" title="Larger">A+</button>
    </div>`;
  }
  if (githubUrl) {
    right += `<a class="btn-icon" href="${escapeAttr(githubUrl)}" target="_blank" rel="noopener">GitHub ↗</a>`;
  }

  return `
<header class="header">
  <div class="header-left">${left}</div>
  <div class="header-right">${right}</div>
</header>`;
}

function renderReader(meta, body, program) {
  document.title = `${meta.title} — ${meta.program} — Code Museum`;

  const allFiles = program ? program.files || [] : [];
  // Only navigate to generated files (skip stubs with no annotated page)
  const files = allFiles
    .filter(f => f.generated !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
  const currentIdx = files.findIndex(f => f.slug === meta.slug);
  const prevFile = currentIdx > 0 ? files[currentIdx - 1] : null;
  const nextFile = currentIdx >= 0 && currentIdx < files.length - 1 ? files[currentIdx + 1] : null;

  const summaryHtml = (meta.summary || []).map(s =>
    `<li>${escapeHtml(s.point)}${s.link ? ` <a href="${escapeAttr(s.link)}" target="_blank" rel="noopener">${escapeHtml(s.link_label || 'Wikipedia')}</a>` : ''}</li>`
  ).join('');

  const codeHtml = renderCodeWithEnhancements(body, meta.enhancements || []);

  const prevNav = prevFile
    ? `<a class="file-nav-link" href="#/${meta.program_slug}/${prevFile.slug}">← <span><span class="nav-label">Previous</span><span class="nav-name">${escapeHtml(prevFile.title)}</span></span></a>`
    : `<span></span>`;

  const nextNav = nextFile
    ? `<a class="file-nav-link" href="#/${meta.program_slug}/${nextFile.slug}"><span><span class="nav-label">Next</span><span class="nav-name">${escapeHtml(nextFile.title)}</span></span> →</a>`
    : `<span></span>`;

  return `
<div class="reader-wrap">
  <div class="reader-header-meta">
    <h1>${escapeHtml(meta.title)}</h1>
    <div class="file-byline">${escapeHtml(meta.program)} · ${escapeHtml(meta.language)} · ${meta.year}</div>
    <p class="file-description">${escapeHtml(meta.description)}</p>
    ${summaryHtml ? `<ul class="summary-list">${summaryHtml}</ul>` : ''}
  </div>
  <div class="reader-content">${codeHtml}</div>
  <nav class="file-nav">${prevNav}<div class="file-nav-spacer"></div>${nextNav}</nav>
</div>`;
}

let _catalog = null;

async function getCatalog() {
  if (!_catalog) _catalog = await loadCatalog();
  return _catalog;
}

function getProgramFromCatalog(catalog, slug) {
  return (catalog.programs || []).find(p => p.slug === slug);
}

let currentFontSize = 13;
let currentProseSize = 16;

window.adjustFontSize = function(delta) {
  currentFontSize = Math.max(10, Math.min(20, currentFontSize + delta));
  currentProseSize = Math.max(13, Math.min(23, currentProseSize + delta));
  document.documentElement.style.setProperty('--code-size', currentFontSize + 'px');
  document.documentElement.style.setProperty('--prose-size', currentProseSize + 'px');
};

let lookupPopup = null;

function removeLookup() {
  if (lookupPopup) {
    lookupPopup.remove();
    lookupPopup = null;
  }
}

function showLookupPopup(word, x, y) {
  removeLookup();
  const el = document.createElement('div');
  el.className = 'lookup-popup';
  el.style.left = Math.min(x, window.innerWidth - 340) + 'px';
  el.style.top = (y + 12) + 'px';
  el.innerHTML = `<button class="lookup-close" onclick="this.closest('.lookup-popup').remove()">×</button>
    <div class="lookup-word">${escapeHtml(word)}</div>
    <div class="lookup-def">Looking up…</div>`;
  document.body.appendChild(el);
  lookupPopup = el;

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`)
    .then(r => r.json())
    .then(data => {
      if (!el.isConnected) return;
      const def = data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition;
      el.querySelector('.lookup-def').textContent = def || 'No definition found.';
    })
    .catch(() => {
      if (el.isConnected) el.querySelector('.lookup-def').textContent = 'Could not fetch definition.';
    });
}

function setupWordLookup(container) {
  let pressTimer = null;

  container.addEventListener('contextmenu', e => {
    if (e.target.closest('.code-block')) return;
    const sel = window.getSelection().toString().trim();
    if (sel && sel.length < 40) {
      e.preventDefault();
      showLookupPopup(sel, e.clientX, e.clientY);
    }
  });

  container.addEventListener('touchstart', e => {
    if (e.target.closest('.code-block')) return;
    const touch = e.touches[0];
    pressTimer = setTimeout(() => {
      const sel = window.getSelection().toString().trim();
      if (sel && sel.length < 40) {
        showLookupPopup(sel, touch.clientX, touch.clientY);
      }
    }, 600);
  });

  container.addEventListener('touchend', () => clearTimeout(pressTimer));
  container.addEventListener('touchmove', () => clearTimeout(pressTimer));
}

document.addEventListener('click', e => {
  if (lookupPopup && !lookupPopup.contains(e.target)) removeLookup();
});

const app = document.getElementById('app');

function setLoading() {
  app.innerHTML = '<div class="loading"></div>';
}

function setError(msg) {
  app.innerHTML = `<div class="error-msg">${escapeHtml(msg)}</div>`;
}

async function route() {
  const hash = location.hash.replace(/^#\/?/, '');
  const parts = hash ? hash.split('/') : [];

  window.scrollTo(0, 0);
  setLoading();

  try {
    if (parts.length === 0 || (parts.length === 1 && parts[0] === '')) {
      const catalog = await getCatalog();
      app.innerHTML = renderHeader() + renderShelf(catalog);

    } else if (parts.length === 1) {
      const slug = parts[0];
      const catalog = await getCatalog();
      const program = getProgramFromCatalog(catalog, slug);
      if (!program) { setError('Program not found.'); return; }
      app.innerHTML = renderHeader({ programSlug: slug, programTitle: program.title }) + renderProgramPage(program);

    } else if (parts.length >= 2) {
      const [programSlug, fileSlug] = parts;
      const catalog = await getCatalog();
      const program = getProgramFromCatalog(catalog, programSlug);
      const { meta, body } = await loadFile(programSlug, fileSlug);
      app.innerHTML = renderHeader({
        programSlug,
        programTitle: program ? program.title : programSlug,
        fileTitle: meta.title,
      }) + renderReader(meta, body, program);
      setupWordLookup(app);
      setupInstructionLookup(app, meta.language, meta.file_path);
    }
  } catch (err) {
    setError('Failed to load: ' + err.message);
  }
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);
