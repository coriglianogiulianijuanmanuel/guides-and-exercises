"use strict";

// The "switch" statement

// The switch has one or more case blocks and an optional default.

/* 
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
*/

// The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
// If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
// If no case is matched then the default code is executed (if it exists).

let a = 2 * 2;

switch (a) {
  case 3:
    console.log("too small!");
    break;
  case 4:
    console.log("correct!");
    break;
  case 5:
    console.log("too big!");
    break;
  default:
    console.log("I don't know such values...");
}
// Here the switch starts to compare a from the first case variant that is 3. The match fails. Then 4. That’s a match, so the execution starts from case 4 until the nearest break.

// If there is no break then the execution continues with the next case without any checks.
let b = 2 * 2;

switch (b) {
  case 3:
    console.log("too small!");
  case 4:
    console.log("correct!");
  case 5:
    console.log("too big!");
  default:
    console.log("I don't know such values...");
}
// In the example above we’ll see sequential execution of three console.log()
// console.log("correct!");
// console.log("too big!");
// console.log("I don't know such values...");

// Any expression can be a switch/case argument. Both switch and case allow arbitrary expressions.
let c = "1";
let d = 0;

switch (+c) {
  case d + 1:
    console.log("this runs, because +c is 1, exactly equals d + 1");
    break;

  default:
    console.log("this doesn't run");
}
// Here +a gives 1, that’s compared with b + 1 in case, and the corresponding code is executed.
