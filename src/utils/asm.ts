import { DebugInfo, Input } from '@interfaces/asm';

export function getDebugInfo(ctx: any, input: Input): DebugInfo {
  const line = ctx.start.line;
  const column = ctx.start.column + 1;
  const start = ctx.start.start;
  const stop = ctx.stop.stop + 1;
  const data = input.code.substring(start, stop);

  return {
    input,
    line,
    column,
    start,
    stop,
    data
  };
}
