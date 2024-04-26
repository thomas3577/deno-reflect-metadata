// run with `deno run example.ts`

import { Reflect } from './mod.ts';

type Constructor<T = unknown> = new (...args: any[]) => T;

function decorator<T>(_: Constructor<T>): void {}

@decorator
class Example {
  // deno-lint-ignore no-unused-vars
  constructor(a: string, b: number, c: Example) {}
}

const metadata = Reflect.getMetadata('design:paramtypes', Example);
console.log(metadata);
// "[ [Function: String], [Function: Number], [Function: Example] ]"
