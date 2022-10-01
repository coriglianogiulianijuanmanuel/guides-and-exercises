"use strict";

// “var” variables can be declared below their use

// var declarations are processed when the function starts (or script starts for globals).
// In other words, var variables are defined from the beginning of the function, no matter where the definition is (assuming that the definition is not in the nested function).

// So this code:
function sayHi1() {
  phrase1 = "Hello 1";

  console.log(phrase1);

  var phrase1;
}

sayHi1(); // Hello 1

// …Is technically the same as this (moved var phrase above):
function sayHi2() {
  var phrase2;

  phrase2 = "Hello 2";

  console.log(phrase2);
}

sayHi2(); // Hello 2

// …Or even as this (remember, code blocks are ignored):
function sayHi3() {
  phrase3 = "Hello 3"; // (*)

  console.log(phrase3);

  if (false) {
    var phrase3;
  }
}

sayHi3(); // Hello 3
// People also call such behavior “hoisting” (raising), because all var are “hoisted” (raised) to the top of the function.
// So in the example above, if (false) branch never executes, but that doesn’t matter. The var inside it is processed in the beginning of the function, so at the moment of (*) the variable exists.

// Declarations are hoisted, but assignments are not.
function sayHi4() {
  console.log(phrase4);

  var phrase4 = "Hello 4";
}

sayHi4(); // undefined
// The line ' var phrase = "Hello" ' has two actions in it:
// 1. Variable declaration var
// 2. Variable assignment =

// The declaration is processed at the start of function execution (“hoisted”), but the assignment always works at the place where it appears. So the code works essentially like this:
function sayHi5() {
  var phrase5; // declaration works at the start...

  console.log(phrase5); // undefined

  phrase5 = "Hello 5"; // ...assignment - when the execution reaches it.
}

sayHi5(); // undefined
// Because all var declarations are processed at the function start, we can reference them at any place. But variables are undefined until the assignments.
// In both examples above, console.log runs without an error, because the variable phrase exists. But its value is not yet assigned, so it shows undefined.
