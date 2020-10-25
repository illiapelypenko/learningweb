// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

type StringNumberPair = [string, number];

// StringNumberPair describes arrays whose 0 index contains a string and whose 1 index contains a number.

// Another thing you may be interested in is that tuples can have optional properties by writing out a question mark (? after an element’s type). Optional tuple elements can only come at the end, and also affect the type of length.

type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;
//             ^ = const z: number | undefined

  console.log(`Provided coordinates had ${coord.length} dimensions`);

// Tuples can also have rest elements, which have to be an array/tuple type.

type StringNumberBooleans = [string, number, ...boolean[]];

// One final note about tuple types - tuples types have readonly variants, and can be specified by sticking a readonly modifier in front of them - just like with array shorthands.

function doSomething(pair: readonly [string, number]) {
  // ...
}