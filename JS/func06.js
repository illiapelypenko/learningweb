let foo = () => {
  console.log("first", this);
  return function bar() {
    console.log("second", this);
  };
};

const user = {
  foo
};

foo()(); // {} x2
user.foo()(); // {} global
