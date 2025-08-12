export abstract class InspectableBase {
  abstract toJSON(): unknown;

  protected get tag(): string {
    return this.constructor.name;
  }

  toString(): string {
    return `[${this.tag}]`;
  }

  [Symbol.toPrimitive](hint: string) {
    if (hint === "string") return this.toString();
    if (hint === "number") return NaN;
    return this.toString();
  }

  [Symbol.for("nodejs.util.inspect.custom")](): string {
    return this.toString();
  }

  get [Symbol.toStringTag](): string {
    return this.tag;
  }
}
