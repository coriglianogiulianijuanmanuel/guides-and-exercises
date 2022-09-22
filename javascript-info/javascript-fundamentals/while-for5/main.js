"use strict";

//break

// Normally, a loop exits when its condition becomes falsy. But we can force the exit at any time using the special break directive.

// The loop below asks the user for a series of numbers, “breaking” when no number is entered:
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");

  if (!value) break;

  sum += value;
}
alert("Sum: " + sum);
// The break directive is activated if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.
// The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.
