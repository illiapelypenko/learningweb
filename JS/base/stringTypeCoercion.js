// String conversion
// Implicit coercion is triggered by the binary + operator, when any operand is a string:

String(123); // '123'
String(-12.3); // '-12.3'
String(null); // 'null'
String(undefined); // 'undefined'
String(true); // 'true'
String(false); // 'false'

// Symbol conversion is a bit tricky, because it can only be converted explicitly, but not implicitly.
