"use strict";

// 6
// For the second parentheses to work, the first ones must return a function.
function sum(a) {
  return function (b) {
    return a + b; // takes "a" from the outer lexical environment
  };
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4

// testing
function sumAll(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sumAll(1)(2)(3)); // 6

// 7
let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();

/* 
The result is: error.

In this example we can observe the peculiar difference between a “non-existing” and “uninitialized” variable.

As you may have read in the article Variable scope, closure, a variable starts in the “uninitialized” state from the moment when the execution enters a code block (or a function). And it stays uninitalized until the corresponding let statement.

In other words, a variable technically exists, but can’t be used before let.

The code above demonstrates it.

function func() {
  // the local variable x is known to the engine from the beginning of the function,
  // but "uninitialized" (unusable) until let ("dead zone")
  // hence the error

  console.log(x); // ReferenceError: Cannot access 'x' before initialization

  let x = 2;
}

This zone of temporary unusability of a variable (from the beginning of the code block till let) is sometimes called the “dead zone”.
*/
