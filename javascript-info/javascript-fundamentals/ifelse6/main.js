"use strict";

// Sometimes the question mark ? is used as a replacement for if:
let company = prompt("Which company created JavaScript?", "");

company == "Netscape" ? alert("Right!") : alert("Wrong.");

/* 
Depending on the condition company == 'Netscape', either the first or the second expression after the ? gets executed and shows an alert.

We don’t assign a result to a variable here. Instead, we execute different code depending on the condition.

It’s not recommended to use the question mark operator in this way.

The notation is shorter than the equivalent if statement, which appeals to some programmers. But it is less readable.

Here is the same code using if for comparison:
*/

if (company == "Netscape") {
  alert("Right!");
} else {
  alert("Wrong.");
}

/* 
Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.

The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.
*/
