const myObject = {
  myArrowFunction: null,
  myMethod: function() {
    this.myArrowFunction = () => {
      console.log(this);
    };
  }
};

myObject.myMethod(); // this === myObject

myObject.myArrowFunction(); // this === myObject

const myArrowFunction = myObject.myArrowFunction;
myArrowFunction(); // this === myObject

// When we call myObject.myMethod(), we initialize myObject.myArrowFunction with an arrow function
// which is inside of the method myMethod, so it will inherit its scope.
