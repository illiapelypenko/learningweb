// this is a binding made for each function invocation, based entirely on its call-site (how the function is called)
// The call-site we care about is in the invocation before the currently executing function.
// Generally, the call-site of a function is ‘the place from where the particular function is called in a given piece of code’

function baz() {
  // call-stack is: `baz`
  // so, our call-site is in the global scope

  console.log( "baz" );
  bar(); // <-- call-site for `bar`
}

function bar() {
  // call-stack is: `baz` -> `bar`
  // so, our call-site is in `baz`

  console.log( "bar" );
  foo(); // <-- call-site for `foo`
}

function foo() {
  // call-stack is: `baz` -> `bar` -> `foo`
  // so, our call-site is in `bar`

  console.log( "foo" );
}

baz(); // <-- call-site for `baz`

// So, if you're trying to diagnose this binding, use the developer tools to get the call-stack, then find the second item from the top, and that will show you the real call-site.