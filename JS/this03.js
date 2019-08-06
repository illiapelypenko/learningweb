var myObject = {
  myMethod: function() {
    console.log(this);
  }
};

// What would be the this context here?...

// Well, the answer is We do not know.

// The this keyword’s value has nothing to do with the function itself,
// how the function is called determines the this value

// --------------------------------------------------

var myMethod = function() {
  console.log(this);
};

var myObject = {
  myMethod: myMethod
};

myObject.myMethod(); // this === myObject
myMethod(); // this === window
