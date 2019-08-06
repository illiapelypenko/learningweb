function foo(a) {
  this.a = a;
}

var bar = new foo(2);
console.log(bar.a); // 2

/*So this when the function has been called with new refers to the new instance created.
When a function is called with new, it does not care about implicit, explicit, or hard binding, 
it just creates the new context—which is the new instance */

// --------------------------------------------------

myObject = {
  myMethod: function() {
    helperObject.doSomethingCool("superCool", this.onSomethingCoolDone); // callback
  },

  onSomethingCoolDone: function() {
    /// Only god knows what is "this" here
  }
};

// This problem applies also to event listeners, timeouts, forEach, etc.

// --------------------------------------------------

myObject = {
  myMethod: function() {
    helperObject.doSomethingAsync("superCool", () => {
      console.log(this); // this === myObject
    });
  }
};
