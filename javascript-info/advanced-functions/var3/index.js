"use strict";

// “var” tolerates redeclarations

// If we declare the same variable with let twice in the same scope, that’s an error:

/*
let user;
let user; // SyntaxError: Identifier 'user' has already been declared
*/

// With var, we can redeclare a variable any number of times. If we use var with an already-declared variable, it’s just ignored:
var user = "John";

var user = "Juan"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

console.log(user); // Juan
