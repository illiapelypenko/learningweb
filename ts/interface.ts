interface Point1 {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// TypeScript is only concerned with the structure of the value we passed to printCoord - it only cares that it has the expected properties. Being concerned only with the structure and capabilities of types is why we call TypeScript a structurally typed type system.

// Type aliases may not participate in declaration merging, but interfaces can.
// Interfaces may only be used to declare object types, not primitives.
// Interface names will always appear in their original form in error messages, but only when they are used by name.
// Type alias names may appear in error messages, sometimes in place of the equivalent anonymous type (which may or may not be desirable)