let name = "tom";
function foo() {
  return function goo() {
    console.log(name);
  };
}
function bar() {
  let name = "jack";
  return foo();
}

bar()();
