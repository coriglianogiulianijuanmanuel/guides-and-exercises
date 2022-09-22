"use strict";

// The “do…while” loop
// The condition check can be moved below the loop body using the do..while syntax:

/* 
do {
  // loop body
} while (condition);
*/

// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

let i = 0;
do {
  console.log(i); // shows 0, then 1, then 2
  i++;
} while (i < 3);
// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.
