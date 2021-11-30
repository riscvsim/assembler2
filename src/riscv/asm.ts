import antlr4 from 'antlr4';

import { Input } from '@interfaces/asm';
import RV32GLexer from '@syntax/RV32GLexer';
import RV32GListener from '@syntax/RV32GListener';
import RV32GParser from '@syntax/RV32GParser';

/**
 * 32-bit RISC-V Assembler (RV32G).
 */
export class Assembler extends RV32GListener {
  private input: Input;

  constructor(private readonly inputs: Input[]) {
    super();
  }

  assemble() {
    this.inputs.forEach((input) => {
      this.input = input;
      const chars = new antlr4.InputStream(input);
      const lexer = new RV32GLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new RV32GParser(tokens);
      const tree = parser.prog();
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, tree);
    });
  }
}
