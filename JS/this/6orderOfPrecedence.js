// It should be clear that the default binding is the lowest priority rule of the 4
// explicit binding takes precedence over implicit binding
// new binding is more precedent than implicit binding

// new and call/apply cannot be used together, so new foo.call(obj1) is not allowed

function foo(something) {
	this.a = something;
}

var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2

var baz = new bar( 3 );
console.log( obj1.a ); // 2
console.log( baz.a ); // 3

// Whoa! bar is hard-bound against obj1, but new bar(3) did not change obj1.a to be 3 as we would have expected. Instead, the hard bound (to obj1) call to bar(..) is able to be overridden with new. Since new was applied, we got the newly created object back, which we named baz, and we see in fact that baz.a has the value 3.

// the utility determines whether or not the hard-bound function has been called with new (resulting in a newly constructed object being its this), and if so, it uses that newly created this rather than the previously specified hard binding for this

// The primary reason for this behavior is to create a function (that can be used with new for constructing objects) that essentially ignores the this hard binding but which presets some or all of the function's arguments. One of the capabilities of bind(..) is that any arguments passed after the first this binding argument are defaulted as standard arguments to the underlying function (technically called "partial application", which is a subset of "currying").

// For example:

function foo(p1,p2) {
	this.val = p1 + p2;
}

// using `null` here because we don't care about
// the `this` hard-binding in this scenario, and
// it will be overridden by the `new` call anyway!
var bar = foo.bind( null, "p1" );

var baz = new bar( "p2" );

baz.val; // p1p2

/*
Now, we can summarize the rules for determining this from a function call's call-site, in their order of precedence. Ask these questions in this order, and stop when the first rule applies.

Is the function called with new (new binding)? If so, this is the newly constructed object.

var bar = new foo()

Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.

var bar = foo.call( obj2 )

Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.

var bar = obj1.foo()

Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.

var bar = foo()

*/