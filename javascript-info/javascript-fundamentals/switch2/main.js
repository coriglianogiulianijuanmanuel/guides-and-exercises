"use strict";

// Several variants of case which share the same code can be grouped.
let a = 3;

switch (a) {
  case 4:
    console.log("1");
    break;
  case 3: // (*) grouped two cases
  case 5:
    console.log("2");
    break;
  default:
    console.log("3");
}
// Now both 3 and 5 show the same message.
// The ability to “group” cases is a side effect of how switch/case works without break. Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break.

// Let’s emphasize that the equality check is always strict. The values must be of the same type to match.
let arg = prompt("Please, enter 1, 2 or 3.");

switch (arg) {
  case "0":
  case "1":
    alert("0 or 1");
    break;
  case "2":
    alert("2");
    break;
  case 3:
    alert("this never runs! cause it's not a string...");
    break;
  default:
    alert("unknown value...");
}
// For 0, 1, the first alert runs.
// For 2 the second alert runs.
// But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.
