// Besides var / let / const, there are other syntactic forms that declare identifiers (variables) in various scopes. For example:

function hello(myName) {
	console.log(`Hello, ${myName}.`);
}

hello('Kyle');
// Hello, Kyle.

// The identifier hello is created in the outer scope, and it's also automatically associated so that it references the
// function. But the named parameter myName is created only inside the function, and thus is only accessible inside
// that function's scope.hello and myName generally behave as var - declared.
// In this snippet, myName is called a parameter, which acts as a local variable inside the function.
