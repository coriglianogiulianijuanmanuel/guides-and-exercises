"use strict";

// Sometimes, we need to assign a variable depending on a condition.

/* 
let accessAllowed;
let age = prompt("How old are you?", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
*/

// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.
// The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.
// The syntax is:

// let result = condition ? value1 : value2;

// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
let age = prompt("How old are you?", "");
let accessAllowed = age > 18 ? true : false;
alert(accessAllowed);
// Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >. But parentheses make the code more readable, so we recommend using them.

// In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:
// let accessAllowed = age > 18;
