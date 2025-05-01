# Inspectable

Utilities and base class to make your custom classes behave like native JavaScript types in the console, during JSON serialization, and in devtools.

## Features
- Add `toString()` and `toJSON()` support
- Custom `[object Tag]` and Node.js inspection support
- Works via inheritance or lightweight utility function

## Usage

### Option 1: Inherit from `InspectableBase`
```ts
class MyClass extends InspectableBase {
  toJSON() {
    return { hello: 'world' };
  }

  protected get tag() {
    return 'MyClass';
  }
}
```

### Option 2: Use `addInspectableBehavior`
```ts
const obj = { data: [1, 2, 3] };
addInspectableBehavior(obj, 'MyObject', () => obj.data);
```

## Development
```bash
npm install
npm run build
npm test
```