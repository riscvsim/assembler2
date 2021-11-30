import { Input } from '@interfaces/asm';
import { Assembler } from '@rv/asm';

/**
 * Assemble RISC-V code.
 *
 * @param input
 * @param opts
 */
export function assemble(inputs: Input[]) {
  new Assembler(inputs).assemble();
}
