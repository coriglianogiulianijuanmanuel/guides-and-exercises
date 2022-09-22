"use strict";

// The boolean NOT operator is represented with an exclamation sign !.
// The syntax is pretty simple: result = !value;

// The operator accepts a single argument, converts the operand to boolean type (true/false) and returns the inverse value.

console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!"0"); // false

// A double NOT !! is sometimes used for converting a value to boolean type:
console.log(!!"this is not an empty string"); // true
console.log(!!1); // true
console.log(!!0); // false
console.log(!!null); // false
// That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

// There’s a little more verbose way to do the same thing – a built-in Boolean function:
console.log(Boolean("this is not an empty string")); // true
console.log(Boolean(!!1)); // true
console.log(Boolean(!!0)); // false
console.log(Boolean(!!null)); // false

// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.
