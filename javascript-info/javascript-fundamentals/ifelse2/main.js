"use strict";

/*
The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

* A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.

* Other values become true, so they are called “truthy”.
*/

//So, the code under this condition would never execute:

if (0) {
  // 0 is falsy
  console.log(0);
}
//…and inside this condition – it always will:

if (1) {
  // 1 is truthy
  console.log(1); // 1
}
//We can also pass a pre-evaluated boolean value to if, like this:

let cond = 5 > 2;

if (cond) {
  console.log(cond); // true
}
