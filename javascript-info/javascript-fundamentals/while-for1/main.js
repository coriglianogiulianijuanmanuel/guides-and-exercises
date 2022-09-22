"use strict";

// The “while” loop

/*
while (condition) {
  // code
  // so-called "loop body"
}
*/

// While the condition is truthy, the code from the loop body is executed. The loop below outputs i while i < 3:
let i = 0;
while (i < 3) {
  console.log(i); // shows 0, then 1, then 2
  i++; // If i++ was missing, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.
}

// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

// Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

// For instance, a shorter way to write while (i != 0) is while (i):

let a = 3;
while (a) {
  // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log(a); // shows 3, then 2, then 1
  a--;
}

// If the loop body has a single statement, we can omit the curly braces {…}:

let b = 3;
while (b) console.log(b--); // shows 3, then 2, then 1
