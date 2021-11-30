import { DebugInfo } from '@interfaces/asm';

import { Code } from './code';

/**
 * Generic RISC-V instruction.
 */
export abstract class Instruction {
  /**
   * Debug information.
   */
  readonly debugInfo: DebugInfo;
  /**
   * Machine code.
   */
  readonly code: Code;
  /**
   * Intruction name.
   */
  readonly name: string;

  /**
   * Creates a generic RISC-V instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param name      - Instruction name.
   */
  constructor(debugInfo: DebugInfo, name: string) {
    this.debugInfo = debugInfo;
    this.code = new Code();
    this.name = name;
  }

  /**
   * Builds machine code.
   *
   * @param pc - Program counter value.
   */
  abstract build(pc: number): void;
}
