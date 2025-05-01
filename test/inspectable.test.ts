import { describe, it, expect } from "vitest";
import { InspectableBase, addInspectableBehavior } from "../src";

class CustomClass extends InspectableBase {
  constructor(private value = 42) {
    super();
  }

  toJSON() {
    return { value: this.value };
  }

  protected get tag() {
    return `CustomClass(${this.value})`;
  }
}

describe("InspectableBase", () => {
  it("toString and toJSON should work", () => {
    const obj = new CustomClass();
    expect(obj.toString()).toBe("[CustomClass(42)]");
    expect(JSON.stringify(obj)).toBe('{"value":42}');
  });
});

describe("addInspectableBehavior", () => {
  it("adds toString and toJSON to plain object", () => {
    const obj = { val: [1, 2, 3] };
    const enhanced = addInspectableBehavior(obj, "TestObj", () => obj.val);
    expect(enhanced.toString()).toBe("[TestObj]");
    expect(JSON.stringify(enhanced)).toBe("[1,2,3]");
  });
});
