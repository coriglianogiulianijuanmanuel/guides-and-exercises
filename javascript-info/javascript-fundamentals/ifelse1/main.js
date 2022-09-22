"use strict";
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

// if (year == 2015) alert("You are right!");

// In the example above, the condition is a simple equality check (year == 2015), but it can be much more complex.
// If we want to execute more than one statement, we have to wrap our code block inside curly braces:
if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}
// We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.
