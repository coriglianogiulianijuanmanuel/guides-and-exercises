"use strict";

let message = "Hello";
message = "Hello World"; // value changed

console.log(message);

// We can also declare two variables and copy data from one into the other.
let copyOfMessage = message;
console.log(copyOfMessage);

/*
There are two limitations on variable names in JavaScript:

1. The name must contain only letters, digits, or the symbols $ and _.
2. The first character must not be a digit.
*/

let _abc = 10;
let $abc = 12;
let userName = "Juan";
let test123 = 123;
let $ = "dollar";
let _ = "under";
let apple;
let APPLE; // Variables named apple and APPLE are two different variables (case matters).
// Non-Latin letters are allowed, but not recommended
let имя = "...";
let 我 = "...";
// There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
//let let = 5;
//let return = 5;

// Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

//thisIsARandomVariable = 5;
//console.log(thisIsARandomVariable);

// This is a bad practice and would cause an error in strict mode
