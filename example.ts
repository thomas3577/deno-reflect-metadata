// run with `deno run example.ts`

import { Reflect } from './mod.ts';

type ClassConstructor<T = unknown> = new (...args: any[]) => T;

function Decorator<T>() {
  return (_: ClassConstructor<T>): void => {};
}

// deno-lint-ignore no-unused-vars
class ClassA {}

@Decorator()
class ClassB {
  // deno-lint-ignore no-unused-vars
  constructor(a: string, b: number, c: ClassA) {}
}

const metadata = Reflect.getMetadata('design:paramtypes', ClassB);

console.log(metadata?.map((x: ClassConstructor) => x.name).join(', ')); // "String, Number, ClassA"
