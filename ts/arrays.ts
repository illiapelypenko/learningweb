// number[] or string[], that’s really just a shorthand for Array<number> and Array<string>

// The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.

function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push("hello!");
  // Property 'push' does not exist on type 'readonly string[]'.
}

// When we see a function that returns ReadonlyArrays, it tells us we’re not meant to change the contents at all, and when we see a function that consumes ReadonlyArrays, it tells us that we can pass any array into that function without worrying that it will change its contents.

// Unlike Array, there isn’t a ReadonlyArray constructor that we can use.

new ReadonlyArray("red", "green", "blue");
// 'ReadonlyArray' only refers to a type, but is being used as a value here.

// Instead, we can assign regular Arrays to ReadonlyArrays.

let roArray: ReadonlyArray<string> = ["red", "green", "blue"];Try
// Just as TypeScript provides a shorthand syntax for Array<Foo> with Foo[], it also provides a shorthand syntax for ReadonlyArray<Foo> with readonly Foo[].

let x: readonly string[] = [];
let y: string[] = [];

x = y;
y = x;
// The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.