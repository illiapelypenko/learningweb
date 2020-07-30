// The simplest case is boolean conversion: any non-primitive value is always coerced to true, no matter if an object or an array is empty or not.

// Objects are converted to primitives via the internal [[ToPrimitive]] method, which is responsible for both numeric and string conversion.

/* 
Here is a pseudo implementation of [[ToPrimitive]] method:

[[ToPrimitive]] is passed with an input value and preferred type of conversion: Number or String. preferredType is optional.

Both numeric and string conversion make use of two methods of the input object: valueOf and toString . Both methods are declared on Object.prototype and thus available for any derived types, such as Date, Array, etc.

In general the algorithm is as follows:

If input is already a primitive, do nothing and return it.
2. Call input.toString(), if the result is primitive, return it.

3. Call input.valueOf(), if the result is primitive, return it.

4. If neither input.toString() nor input.valueOf() yields primitive, throw TypeError.
*/

// Numeric conversion first calls valueOf (3) with a fallback to toString (2). String conversion does the opposite: toString (2) followed by valueOf (3).

// Most built -in types do not have valueOf, or have valueOf returning this object itself, so it’s ignored because it’s not a primitive.That’s why numeric and string conversion might work the same — both end up calling toString().
