// function hello(myName) {
//   console.log(`Hello, ${myName}.`);
// }

// hello("Kyle");

// /*
// The identifier hello is created in the outer scope, and it's also automatically associated
// so that it references the function. But the named parameter myName is created only inside
// the function, and thus is only accessible inside that function's scope.
// hello and myName generally behave as var-declared.*/

// try {
//   someError();
// } catch (err) {
//   console.log(err);
// }

// // The err is a block-scoped variable that exists only inside the catch clause,
// // as if it had been declared with let.

console.log(/abc/ + /def/);
