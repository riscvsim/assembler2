import { DebugInfo } from '@interfaces/asm';

/**
 * RISC-V error.
 */
export class RVError extends Error {
  /**
   * Debug information
   */
  readonly debugInfo: DebugInfo;

  /**
   * Creates a RISC-V error.
   *
   * @param message   - Error message.
   * @param debugInfo - Debug information.
   */
  constructor(message: string, debugInfo: DebugInfo) {
    super(message);
    Object.setPrototypeOf(this, RVError.prototype);
    this.debugInfo = debugInfo;
  }
}
