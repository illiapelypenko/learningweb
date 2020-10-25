// In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

// By themselves, literal types aren’t very valuable:

let x: "hello" = "hello";
// OK
x = "hello";
// OK
x = "hello";
// ...
x = "howdy";
// Type '"howdy"' is not assignable to type '"hello"'.

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

// Numeric literal types work the same way:

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// Of course, you can combine these with non-literal types:

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");

// Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

// There’s one more kind of literal type: boolean literals. There are only two boolean literal types, and as you might guess, they are the types true and false. The type boolean itself is actually just an alias for the union true | false.

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

// Because it’d be legal to assign a string like "GUESS" TO req.method, TypeScript considers this code to have an error. You can change this inference by adding a type assertion in either location:

const req = { url: "https://example.com", method: "GET" as "GET" };
/* or */
handleRequest(req.url, req.method as "GET");