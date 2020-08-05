// The first rule we will examine comes from the most common case of function calls: standalone function invocation. Think of this this rule as the default catch-all rule when none of the other rules apply.

function foo() {
	console.log( this.a );
}

var a = 2;

foo(); // 2

// the default binding for this applies to the function call, and so points this at the global object. 
// In our snippet, foo() is called with a plain, un-decorated function reference. None of the other rules we will demonstrate will apply here, so the default binding applies instead.

// If strict mode is in effect, the global object is not eligible for the default binding, so the this is instead set to undefined.

function foo() {
	"use strict";

	console.log( this.a );
}

var a = 2;

foo(); // TypeError: `this` is `undefined`

// A subtle but important detail is: even though the overall this binding rules are entirely based on the call-site, the global object is only eligible for the default binding if the contents of foo() are not running in strict mode; the strict mode state of the call-site of foo() is irrelevant.

