function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2

// Invoking foo with explicit binding by foo.call(..) allows us to force its this to be obj.

// If you pass a simple primitive value (of type string, boolean, or number) as the this binding, the primitive value is wrapped in its object-form (new String(..), new Boolean(..), or new Number(..), respectively). This is often referred to as "boxing".

// The difference between call() and apply() is that call() passes all arguments after the first one on to the invoked function, while apply() takes an array as its second argument and passes the members of that array as arguments.

// bind(..) returns a new function that is hard-coded to call the original function with the this context set as you specified.

// As of ES6, the hard-bound function produced by bind(..) has a .name property that derives from the original target function. For example: bar = foo.bind(..) should have a bar.name value of "bound foo", which is the function call name that should show up in a stack trace.