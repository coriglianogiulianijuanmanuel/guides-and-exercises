"use strict";

// We can pass arbitrary data to functions using parameters.
function showMessage(from, text) {
  // parameters: from, text
  console.log(from + ": " + text);
}

showMessage("Juan", "Me gusta la sopa!"); // (*)
showMessage("Fati", "Guaffff Guaffff"); // (**)
// When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them.

// We have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:
function showMessage2(from, text) {
  from = "*" + from + "*";
  console.log(from + ": " + text);
}

let from = "Juan";

showMessage2(from, "Me gusta la sopa!"); // *Juan*: Me gusta la sopa!

// the value of "from" is the same, the function modified a local copy
console.log(from); // Juan, not *Juan*

/* 
When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).

An argument is the value that is passed to the function when it is called (it’s a call time term).

We declare functions listing their parameters, then call them passing arguments.

In the example above, one might say: "the function showMessage is declared with two parameters, then called with two arguments: from and "Me gusta la sopa!"".
*/
