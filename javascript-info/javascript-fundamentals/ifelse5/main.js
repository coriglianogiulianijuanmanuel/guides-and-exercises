"use strict";

// A sequence of question mark operators ? can return a value that depends on more than one condition.
let age = 16;

let message =
  age < 3
    ? "Hi baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "WTF?";

console.log(message);

// Here’s how this looks using if..else:
if (age < 3) {
  message = "Hi baby!";
} else if (age < 18) {
  message = "Hello!";
} else if (age < 100) {
  message = "Greetings!";
} else {
  message = "WTF?";
}
