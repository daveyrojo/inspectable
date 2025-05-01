export abstract class InspectableBase {
  abstract toJSON(): unknown;

  protected get tag(): string {
    return this.constructor.name;
  }

  toString(): string {
    return `[${this.tag}]`;
  }

  [Symbol.for("nodejs.util.inspect.custom")](): string {
    return this.toString();
  }

  get [Symbol.toStringTag](): string {
    return this.tag;
  }
}
