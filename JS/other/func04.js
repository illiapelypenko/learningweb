let a = 11;
function foo() {
  let a = 10;
  return function bar() {
    return function baz() {
      console.log(a);
    };
  };
}

foo()()();
