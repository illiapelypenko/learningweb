function foo(a, b) {
	arguments[1] = 2;
	alert(b);
}
foo(1); // undefined

// The function foo is defined as needing 2 arguments (a and b). If you don’t supply all the arguments when invoking the function, JS automatically sets the missing arguments to undefined. You can access the arguments passed to a function using the arguments property of a function. Since the argument at index 1 is undefined, you can’t set it to equal a number. If you provide a second argument when invoking the function, it will alert 2, as expected.
