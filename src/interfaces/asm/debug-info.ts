import { Input } from './input';

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
   * Source code line data from source code.
   */
  readonly data: string;
}
