"use strict";

// Let’s formulate the key differences between Function Declarations and Expressions:

//1. First, the syntax: how to differentiate between them in the code.

// Function Declaration: a function, declared as a separate statement, in the main code flow:
function sum(a, b) {
  return a + b;
}

// Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:
let sum = function (a, b) {
  return a + b;
};

//2. The more subtle difference is when a function is created by the JavaScript engine.

// A Function Expression is created when the execution reaches it and is usable only from that moment.
// Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

// A Function Declaration can be called earlier than it is defined.
// For example, a global Function Declaration is visible in the whole script, no matter where it is.
// That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”. And after all Function Declarations are processed, the code is executed. So it has access to these functions.

// For example, this works:
sayHi("Juan"); // Hello, Juan

function sayHi(name) {
  alert(`Hello, ${name}`);
}
// The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

// …If it were a Function Expression, then it wouldn’t work:
sayHi("Juan"); // error, sayHi is not defined

let sayHi = function (name) /* (*) */ {
  alert(`Hello, ${name}`);
};
// Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.
