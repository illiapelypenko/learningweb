// Implicit conversion is tricky, because it’s triggered in more cases:

/*
comparison operators(>, <, <=,>=)
bitwise operators( | & ^ ~)
arithmetic operators(- + * / % ). Note, that binary+ does not trigger numeric conversion, when any operand is a string.
unary + operator
loose equality operator == (incl. !=).
Note that == does not trigger numeric conversion when both operands are strings. 
*/

Number('123'); // explicit
+'123'; // implicit
123 != '456'; // implicit
4 > '5'; // implicit
5 / null; // implicit
true | 0; // implicit

Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
Number(' 12 '); // 12
Number('-12.34'); // -12.34
Number('\n'); // 0
Number(' 12s '); // NaN
Number(123); // 123

// When converting a string to a number, the engine first trims leading and trailing whitespace, \n, \t characters, returning NaN if the trimmed string does not represent a valid number. If string is empty, it returns 0.

// null and undefined are handled differently: null becomes 0, whereas undefined becomes NaN.

// Symbols cannot be converted to a number neither explicitly nor implicitly.Moreover, TypeError is thrown, instead of silently converting to NaN, like it happens for undefined.
