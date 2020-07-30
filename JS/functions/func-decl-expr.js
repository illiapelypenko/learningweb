//This is called a function declaration because it appears as a statement by itself, not as an expression in another statement. The association between the identifier awesomeFunction and the function value happens during the compile phase of the code, before that code is executed.

function awesomeFunction(coolThings) {
	// ..
	return amazingStuff;
}

// This function is an expression that is assigned to the variable awesomeFunction. Different from the function declaration form, a function expression is not associated with its identifier until that statement during runtime.

// let awesomeFunction = ..
// const awesomeFunction = ..
var awesomeFunction = function (coolThings) {
	// ..
	return amazingStuff;
};
