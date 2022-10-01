"use strict";

// Named Function Expression

// Named Function Expression, or NFE, is a term for Function Expressions that have a name.

// For instance, let’s take an ordinary Function Expression:
let sayHi1 = function (who) {
  console.log(`Hello, ${who}`);
};

// And add a name to it:
let sayHi2 = function func(who) {
  console.log(`Hello, ${who}`);
};
// Did we achieve anything here? What’s the purpose of that additional "func" name?

// First let’s note, that we still have a Function Expression. Adding the name "func" after function did not make it a Function Declaration, because it is still created as a part of an assignment expression.

// Adding such a name also did not break anything.

// The function is still available as sayHi():
sayHi2("Juan"); // Hello, Juan

// There are two special things about the name func, that are the reasons for it:
// 1. It allows the function to reference itself internally.
// 2. It is not visible outside of the function.

// For instance, the function sayHi below calls itself again with "Guest" if no who is provided:
let sayHi3 = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};

sayHi3(); // Hello, Guest

// But this won't work:
// func(); // ReferenceError: func is not defined (not visible outside of the function)

// Why do we use func? Maybe just use sayHi for the nested call?
// Actually, in most cases we can:
let sayHi4 = function (who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    sayHi4("Guest");
  }
};

sayHi4(); // Hello, Guest

// The problem with that code is that sayHi may change in the outer code. If the function gets assigned to another variable instead, the code will start to give errors:
let sayHi5 = function (who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    sayHi5("Guest"); // Error: sayHi is not a function
  }
};

let welcome1 = sayHi5;
sayHi5 = null;

// welcome1(); // Error, the nested sayHi call doesn't work any more!
console.log(welcome1); // [Function: sayHi5]
// That happens because the function takes sayHi from its outer lexical environment. There’s no local sayHi, so the outer variable is used. And at the moment of the call that outer sayHi is null.

// The optional name which we can put into the Function Expression is meant to solve exactly these kinds of problems. Let’s use it to fix our code:
let sayHi6 = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // Now all fine
  }
};

let welcome2 = sayHi6;
sayHi6 = null;

welcome2(); // Hello, Guest (nested call works)
console.log(welcome2); // [Function: func]
// Now it works, because the name "func" is function-local. It is not taken from outside (and not visible there). The specification guarantees that it will always reference the current function.
// The outer code still has its variable sayHi or welcome. And func is an “internal function name”, the way for the function to can call itself reliably.

// There’s no such thing for Function Declaration
// The “internal name” feature described here is only available for Function Expressions, not for Function Declarations. For Function Declarations, there is no syntax for adding an “internal” name.
// Sometimes, when we need a reliable internal name, it’s the reason to rewrite a Function Declaration to Named Function Expression form.
