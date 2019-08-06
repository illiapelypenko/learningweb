let name = "tom";

let getName = () => {
  return name;
};

let foo = () => {
  let name = "jack";
  return () => {
    return name;
  };
};

let bar = foo();

console.log(getName());
console.log(bar());
