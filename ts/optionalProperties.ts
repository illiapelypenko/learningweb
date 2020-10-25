// In this example, both xPos and yPos are considered optional.
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

// We can also read from those properties - but when we do under strictNullChecks, TypeScript will tell us they’re potentially undefined.

function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos;
//                ^ = (property) PaintOptions.xPos?: number | undefined
  let yPos = opts.yPos;
//                ^ = (property) PaintOptions.yPos?: number | undefined
  // ...
}

// Note that this pattern of setting defaults for unspecified values is so common that JavaScript has syntax to support it.

function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);
//                               ^ = var xPos: number
  console.log("y coordinate at", yPos);
//                               ^ = var yPos: number
  // ...
}

// Here we used a destructuring pattern for paintShape’s parameter, and provided default values for xPos and yPos. Now xPos and yPos are both definitely present within the body of paintShape, but optional for any callers to paintShape.

// Note that there is currently no way to place type annotations within destructuring patterns. This is because the following syntax already means something different in JavaScript.
function foo({ shape: Shape, xPos: number = 100 /*...*/ }) {
  doSomething(shape);
  // Cannot find name 'shape'. Did you mean 'Shape'?
  doSomething(xPos);
  // Cannot find name 'xPos'.
}

// In an object destructuring pattern, shape: Shape means “grab the property shape and redefine it locally as a variable named Shape. Likewise xPos: number creates a variable named number whose value is based on the parameter’s xPos.