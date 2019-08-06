const myFunction = () => {
  console.log(this);
};

myFunction(); // global object

// --------------------------------------------------

const myObject = {
  myMethod: () => {
    console.log(this);
  }
};

myObject.myMethod(); // this === global object

const myMethod = myObject.myMethod;
myMethod(); // this === global object

// Weird right? Well, remember, arrow functions don't bind their own scope,
// but inherit it from the parent one, which in this case is window or the global object.
