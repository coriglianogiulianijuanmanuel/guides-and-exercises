"use strict";

// The "new Function" syntax

// There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.

// Syntax

// The syntax for creating a function: let func = new Function ([arg1, arg2, ...argN], functionBody);
// The function is created with the arguments arg1...argN and the given functionBody.

// Here’s a function with two arguments:
let sum = new Function("a", "b", "return a + b");

console.log(sum(1, 2)); // 3

// And here there’s a function without arguments, with only the function body:
let sayHi = new Function('console.log("Hi!")');

sayHi(); // Hi!
// The major difference from other ways we’ve seen is that the function is created literally from a string, that is passed at run time.
// All previous declarations required us, programmers, to write the function code in the script.
// But new Function allows to turn any string into a function.

// For example, we can receive a new function from a server and then execute it:
/* 
let str = ... receive the code from a server dynamically ...

let func = new Function(str);
func();
*/

// testing
let str = "console.log(Math.random())";

let func = new Function(str);

func();

// It is used in very specific cases, like when we receive code from a server, or to dynamically compile a function from a template, in complex web-applications.
