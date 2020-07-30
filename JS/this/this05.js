var x = 3;
var foo = {
	x: 2,
	baz: {
		x: 1,
		bar: function () {
			return this.x;
		},
	},
};
var go = foo.baz.bar;
alert(go()); // 3
alert(foo.baz.bar()); // 1

// The point of this question is to test your knowledge of the this keyword. this gets its context from the object that invokes it.
