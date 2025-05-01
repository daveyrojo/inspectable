export function addInspectableBehavior<T extends object>(
  target: T,
  tag: string,
  toJSON: () => unknown
): T {
  Object.defineProperty(target, Symbol.toStringTag, {
    value: tag,
    configurable: true
  });

  Object.defineProperty(target, "toString", {
    value: () => `[${tag}]`,
    configurable: true
  });

  Object.defineProperty(target, Symbol.for("nodejs.util.inspect.custom"), {
    value: () => `[${tag}]`,
    configurable: true
  });

  Object.defineProperty(target, "toJSON", {
    value: toJSON,
    configurable: true
  });

  return target;
}
