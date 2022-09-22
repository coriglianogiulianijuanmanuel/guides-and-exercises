"use strict";

// The if statement may contain an optional “else” block. It executes when the condition is falsy.
let year = prompt(
  "In which year was the ECMAScript-2015 specification published?",
  ""
);

/*
if (year == 2015) {
  alert("You guessed it right!");
} else {
  alert("How can you be so wrong?"); // any value except 2015
}
*/

// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("Exactly!");
}
/* 
In the code above, JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last alert.

There can be more else if blocks. The final else is optional.
*/
