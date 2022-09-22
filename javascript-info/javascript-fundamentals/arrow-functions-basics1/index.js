"use strict";

// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions. It’s called “arrow functions”, because it looks like this:

// let func = (arg1, arg2, ..., argN) => expression;

// This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result. In other words, it’s the shorter version of:

/* 
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
*/

// Let’s see a concrete example:
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log(sum(1, 2)); // 3
// As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
let double = (n) => n * 2; // here, prettier adds the parentheses...
console.log(double(5)); // 10

// If there are no arguments, parentheses are empty, but they must be present:
let sayHi = () => console.log("Hello!");
sayHi();

// Arrow functions can be used in the same way as Function Expressions. For instance, to dynamically create a function:
let age = prompt("What is your age?", 18);

let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greetings!");

welcome();
