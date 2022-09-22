"use strict";

// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// No effect on numbers
let x = 1;
console.log(+x); // 1
let y = -1;
console.log(+y); // -1

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0
console.log(+null); // 0

// It actually does the same thing as Number(...), but is shorter.

// If we are getting values from HTML form fields, they are usually strings. What if we want to sum them?
let apples = "2";
let oranges = "3";
// Both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5
// Unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
