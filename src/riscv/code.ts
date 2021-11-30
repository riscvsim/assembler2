import { Field } from '@interfaces/riscv';

/** RISC-V machine code. */
export class Code {
  /** Machine code bits. */
  bits = 0;

  /**
   * Sets the specified field of the machine code.
   *
   * @param field - Field to set.
   * @param value - Field value.
   */
  set(field: Field, value: number): void {
    this.bits =
      (this.bits & ~(field.mask << field.start)) |
      ((value & field.mask) << field.start);
  }
}
