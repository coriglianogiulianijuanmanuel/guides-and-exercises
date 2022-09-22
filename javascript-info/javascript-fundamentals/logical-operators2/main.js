"use strict";

// In JavaScript, the operator || is a little bit trickier and more powerful. The extended algorithm works as follows.

// Given multiple OR’ed values : result = value1 || value2 || value3;

// The OR || operator does the following:
// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.

// A value is returned in its original form, without the conversion.
// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

console.log(1 || 0); // 1 (the first truthy value)
console.log(0 || 1); // 1 (the first truthy value)
console.log(null || 1); // 1 (the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || NaN || 0); // 0 (all falsy, returns the last value)

// Getting the first truthy value from a list of variables or expressions:

// For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values). Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):
let firstName = "";
let lastName = "";
let nickName = "Juancito";

console.log(firstName || lastName || nickName || "Anonymous"); // Juancito
// If all variables were falsy, "Anonymous" would show up.

// Short-circuit evaluation:

/* 
Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed:
*/
true || console.log("not printed");
false || console.log("printed");
// In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the console.log isn’t run. Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.
