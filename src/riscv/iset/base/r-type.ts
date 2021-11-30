import { DebugInfo } from '@interfaces/asm';
import { Instruction } from '@rv/instruction';
import { Fields } from '@rv/fields';

/**
 * Generic R-Type instruction.
 */
export class RType extends Instruction {
  /**
   * Instruction opcode.
   */
  readonly opcode: number;
  /**
   * Instruction destination register.
   */
  readonly rd: number;
  /**
   * Instruction function 3 value.
   */
  readonly funct3: number;
  /**
   * Instruction source register 1.
   */
  readonly rs1: number;
  /**
   * Instruction source register 2.
   */
  readonly rs2: number;
  /**
   * Instruction function 7 value.
   */
  readonly funct7: number;

  /**
   * Creates a new generic R-Type instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param name      - Instruction name.
   * @param opcode    - Instruction opcode.
   * @param rd        - Instruction destination register.
   * @param funct3    - Instruction function 3 value.
   * @param rs1       - Instruction source register 1.
   * @param rs2       - Instruction source register 2.
   * @param funct7    - Instruction function 7 value.
   */
  constructor(
    debugInfo: DebugInfo,
    name: string,
    opcode: number,
    rd: number,
    funct3: number,
    rs1: number,
    rs2: number,
    funct7: number
  ) {
    super(debugInfo, name);
    this.opcode = opcode;
    this.rd = rd;
    this.funct3 = funct3;
    this.rs1 = rs1;
    this.rs2 = rs2;
    this.funct7 = funct7;
  }

  /**
   * {@inheritdoc}
   */
  build(): void {
    this.code.set(Fields.OPCODE, this.opcode);
    this.code.set(Fields.RD, this.rd);
    this.code.set(Fields.FUNCT3, this.funct3);
    this.code.set(Fields.RS1, this.rs1);
    this.code.set(Fields.RS2, this.rs2);
    this.code.set(Fields.FUNCT7, this.funct7);
  }
}
