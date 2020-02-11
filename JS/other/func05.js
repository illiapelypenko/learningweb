function foo() {
  console.log("first", this);
  return function bar() {
    console.log("second", this);
  };
}

const user = {
  foo
};

foo()(); // global x2
user.foo()(); // user global
