/**
 * RISC-V instruction field.
 */
export interface Field {
  /**
   * Field start position.
   */
  readonly start: number;
  /**
   * Field mask value.
   */
  readonly mask: number;
}
