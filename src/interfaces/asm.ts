/**
 * Assembler input.
 */
export interface Input {
  /**
   * Input id.
   */
  readonly id: string;
  /**
   * Input code.
   */
  readonly code: string;
}

/**
 * RV32G assembler options.
 */
export interface Options {
  /**
   * Global start label.
   */
  readonly startLabel?: string;
}

/**
 * Assembler debug information.
 */
export interface DebugInfo {
  /**
   * Assembler input.
   */
  readonly input: Input;
  /**
   * Source code line.
   */
  readonly line: number;
  /**
   * Source code column.
   */
  readonly column: number;
  /**
   * Source code start position.
   */
  readonly start: number;
  /**
   * Source code stop position.
   */
  readonly stop: number;
  /**
   * Source code line data.
   */
  readonly data: string;
}
