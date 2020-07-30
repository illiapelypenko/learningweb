// Boolean conversion

// Implicit conversion happens in logical context, or is triggered by logical operators ( || && !)

Boolean(2); // explicit
if (2) {
} // implicit due to logical context
!!2; // implicit due to logical operator
2 || 'hello'; // implicit due to logical operator

// Logical operators such as || and && do boolean conversions internally, but actually return the value of original operands, even if they are not boolean.

// returns number 123, instead of returning true
// 'hello' and 123 are still coerced to boolean internally to calculate the expression
let x = 'hello' && 123; // x === 123

Boolean(''); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(false); // false

// Any value that is not in the list is converted to true, including object, function, Array, Date, user - defined type, and so on.Symbols are truthy values.Empty object and arrays are truthy values as well:

Boolean({}); // true
Boolean([]); // true
Boolean(Symbol()); // true
!!Symbol(); // true
Boolean(function () {}); // true
