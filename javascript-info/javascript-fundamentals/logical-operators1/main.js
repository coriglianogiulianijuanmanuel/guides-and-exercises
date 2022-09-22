"use strict";

// OR
// The “OR” operator is represented with two vertical line symbols ||

// result = a || b;

// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false. In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

// There are four possible logical combinations:
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
// As we can see, the result is always true except for the case when both operands are false.

// If an operand is not a boolean, it’s converted to a boolean for the evaluation.
// For instance, the number 1 is treated as true, the number 0 as false.
if (1 || 0) {
  console.log(true);
}

// Most of the time, OR || is used in an if statement to test if any of the given conditions is true.
let hour = 9;

if (hour < 10 || hour > 18) {
  console.log("The office is closed.");
}

// We can pass more conditions:
hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("The office is closed.");
}
