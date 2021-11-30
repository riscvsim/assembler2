/**
 * Assembler relocation.
 */
export enum Relocation {
  /**
   * Absolute relocation.
   */
  ABSOLUTE,
  /**
   * Absolute hi relocation.
   */
  HI,
  /**
   * Absolute lo relocation.
   */
  LO,
  /**
   * PC-relative relocation.
   */
  PCREL,
  /**
   * PC-relative hi relocation.
   */
  PCRELHI,
  /**
   * PC-relative lo relocation.
   */
  PCRELLO
}
