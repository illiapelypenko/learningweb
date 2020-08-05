// One of the most common frustrations that this binding creates is when an implicitly bound function loses that binding, which usually means it falls back to the default binding, of either the global object or undefined, depending on strict mode.

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"

// Even though bar appears to be a reference to obj.foo, in fact, it's really just another reference to foo itself. Moreover, the call-site is what matters, and the call-site is bar(), which is a plain, un-decorated call and thus the default binding applies.

function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"

// Parameter passing is just an implicit assignment, and since we're passing a function, it's an implicit reference assignment