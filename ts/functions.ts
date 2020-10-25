// Much like variable type annotations, you usually don’t need a return type annotation because TypeScript will infer the function’s return type based on its return statements.

// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
  console.log(s.toUppercase()); // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

// Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.