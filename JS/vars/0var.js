function foo() {
	console.log( this.a );
}
var a = 2;
foo(); // 2

// The first thing to note, if you were not already aware, is that variables declared in the global scope, as var a = 2 is, are synonymous with global-object properties of the same name. They're not copies of each other, they are each other