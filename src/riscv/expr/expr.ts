import { DebugInfo } from '@interfaces/asm';

/**
 * Generic assembler expression.
 */
export abstract class Expression {
  /** Debug information. */
  readonly debugInfo: DebugInfo;

  /**
   * Initializes expression debug information.
   *
   * @param debugInfo - Debug information.
   */
  constructor(debugInfo: DebugInfo) {
    this.debugInfo = debugInfo;
  }

  /**
   * Builds the expression.
   *
   * @param pc      - Program counter value.
   * @param visited - Array of visited ids.
   * @returns Generated number from expression.
   * @throws AssemblerError if an expression has an error.
   */
  abstract build(pc: number, visted: string[]): number;

  /**
   * Verifies if the expression has identifiers.
   *
   * @returns true if the expression has any identifier.
   */
  abstract hasIds(): boolean;
}
