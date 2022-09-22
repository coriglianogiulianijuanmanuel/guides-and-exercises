"use strict";

// Given multiple AND’ed values: result = value1 && value2 && value3;

// The AND && operator does the following:
// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.

// In other words, AND returns the first falsy value or the last value if none were found. The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

console.log(1 && 0); // 0, if the first operand is truthy, AND returns the second operand
console.log(1 && 5); // 5, if the first operand is truthy, AND returns the second operand
console.log(null && 5); // null, if the first operand is falsy, AND returns it. The second operand is ignored
console.log(0 && "0"); // 0, if the first operand is falsy, AND returns it. The second operand is ignored
console.log("0" && 0); // 0, if the first operand is truthy, AND returns the second operand
console.log(1 && 2 && 3 && 4 && null && 5); // null, the first falsy one is returned
console.log(1 && 2 && 3 && 4 && 5); // 5, when all values are truthy, the last value is returned

// The precedence of AND && operator is higher than OR ||.
// a && b || c && d is essentially the same as (a && b) || (c && d)
