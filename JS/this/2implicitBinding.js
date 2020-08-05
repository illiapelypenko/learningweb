// Another rule to consider is: does the call-site have a context object, also referred to as an owning or containing object

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2

// However, the call-site uses the obj context to reference the function, so you could say that the obj object "owns" or "contains" the function reference at the time the function is called.

// When there is a context object for a function reference, the implicit binding rule says that it's that object which should be used for the function call's this binding.

// Only the top/last level of an object property reference chain matters to the call-site. For instance:

function foo() {
	console.log( this.a );
}

var obj2 = {
	a: 42,
	foo: foo
};

var obj1 = {
	a: 2,
	obj2: obj2
};

obj1.obj2.foo(); // 42