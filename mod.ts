import * as ref from './Reflect.ts';

for (const key in ref) {
  // deno-lint-ignore no-explicit-any
  const value = (ref as any)[key];
  if (typeof value === 'function') {
    Object.defineProperty(Reflect, key, {
      configurable: true,
      writable: true,
      value,
    });
  }
}

/**
 * Reflect
 */
export { ref as Reflect };
