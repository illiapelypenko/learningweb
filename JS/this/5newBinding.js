// In traditional class-oriented languages, "constructors" are special methods attached to classes, that when the class is instantiated with a new operator, the constructor of that class is called. This usually looks something like:

something = new MyClass();

// JavaScript has a new operator, and the code pattern to use it looks basically identical to what we see in those class-oriented languages; most developers assume that JavaScript's mechanism is doing something similar. However, there really is no connection to class-oriented functionality implied by new usage in JS.

// In JS, constructors are just functions that happen to be called with the new operator in front of them. They are not attached to classes, nor are they instantiating a class. They are not even special types of functions. They're just regular functions that are, in essence, hijacked by the use of new in their invocation.

// So, pretty much any ol' function, including the built-in object functions like Number(..) (see Chapter 3) can be called with new in front of it, and that makes that function call a constructor call. This is an important but subtle distinction: there's really no such thing as "constructor functions", but rather construction calls of functions.

/*
 When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:
- a brand new object is created (aka, constructed) out of thin air
- the newly constructed object is [[Prototype]]-linked
- the newly constructed object is set as the this binding for that function call
- unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.
*/