"use strict";

// The “for” loop
// The for loop is more complex, but it’s also the most commonly used loop.

/* 
for (begin; condition; step) {
  // ... loop body ...
}


begin	     Executes once upon entering the loop.
condition	 Checked before every loop iteration. If false, the loop stops.
body	     Runs again and again while the condition is truthy.
step	     Executes after the body on each iteration.

Begin executes once, and then it iterates: after each condition test, body and step are executed.
*/

// Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.
for (let i = 0; i < 3; i++) {
  // shows 0, then 1, then 2
  console.log(i);
}
// console.log(i) // error, no such variable

// Instead of defining a variable, we could use an existing one:
let a = 0;
for (a = 0; a < 3; a++) {
  // use an existing variable
  console.log(a); // 0, 1, 2
}
console.log(a); // 3, visible, because declared outside of the loop
