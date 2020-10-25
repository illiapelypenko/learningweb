interface Box<T> {
  contents: T;
}

// You might read this as “A Box of T is something whose contents have type T. Later on, when we refer to Box, we have to give some type arguments in place of T.

let box: Box<string>;

// ----

interface Box<T> {
  contents: T;
}

interface Apple {
  // ....
}

// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;

// This also means that we can avoid overloads entirely

function setContents<T>(box: Box<T>, newContents: T) {
  box.contents = newContents;
}

// In fact, given that type aliases can describe more than just object types, we can occasionally write some generic helper types as well.

type OrNull<T> = T | null;

type OneOrMany<T> = T | T[];

type OneOrManyOrNull<T> = OrNull<OneOrMany<T>>;
//   ^ = type OneOrManyOrNull = T | T[] | null

type Foo = OneOrManyOrNull<string>;
//   ^ = type Foo = string | string[] | null