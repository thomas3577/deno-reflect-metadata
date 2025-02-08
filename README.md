# [Deprecated] Metadata Reflection API for Deno

**Please use the original Package `deno add npm:reflect-metadata` (https://www.npmjs.com/package/reflect-metadata).**

[![JSR Version](https://jsr.io/badges/@dx/reflect)](https://jsr.io/@dx/reflect)
[![JSR Score](https://jsr.io/badges/@dx/reflect/score)](https://jsr.io/@dx/reflect/score)
[![ci](https://github.com/thomas3577/deno-reflect-metadata/actions/workflows/deno.yml/badge.svg)](https://github.com/thomas3577/deno-reflect-metadata/actions/workflows/deno.yml)

**This is a fork of** [jiawei397/deno-reflect-metadata](https://github.com/jiawei397/deno-reflect-metadata)

This includes a copy of the
[Metadata Reflection API by Microsoft](https://github.com/rbuckton/reflect-metadata)
with
[slight changes](https://github.com/cmd-johnson/deno-reflect-metadata/commit/a39666813eb7e8b38fe563f275085b60f044af7e)
to make it usable in Deno.

Check out the [Source Repository](https://github.com/rbuckton/reflect-metadata)
for more details.

## Example usage

```ts
type ClassConstructor<T = unknown> = new (...args: any[]) => T;

function Decorator<T>() {
  return (_: ClassConstructor<T>): void => {};
}

class ClassA {}

@Decorator()
class ClassB {
  constructor(a: string, b: number, c: ClassA) {}
}

const metadata = Reflect.getMetadata('design:paramtypes', ClassB);

console.log(metadata?.map((x: ClassConstructor) => x.name).join(', '));
// "String, Number, ClassA"
```

The decorator is required for the TypeScript compiler to generate metadata for
the Example class. If you don't put a decorator on the Example class, the call
to `getMetadata` will return `undefined`.

> Remember to always add a `tsconfig.json` file with the following content and
> running your code using `deno run -c tsconfig.json your_code.ts` or decorators
> and reflection will not work!

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```
