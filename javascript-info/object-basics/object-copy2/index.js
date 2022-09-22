"use strict";

// Two objects are equal only if they are the same object.
// For instance, here a and b reference the same object, thus they are equal:
let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

// And here two independent objects are not equal, even though they look alike (both are empty):
let c = {};
let d = {};

console.log(c == d); // false
console.log(c === d); // false

// For comparisons like obj1 > obj2 or for a comparison against a primitive obj == 5, objects are converted to primitives. We’ll study how object conversions work very soon, but to tell the truth, such comparisons are needed very rarely – usually they appear as a result of a programming mistake.

// An important side effect of storing objects as references is that an object declared as const can be modified.
const user = {
  name: "John",
};

user.name = "Pepe"; // (*)

console.log(user.name); // "Pepe"
// It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.
// In other words, the const user gives an error only if we try to set user=... as a whole.
user = 1; // error!!!
// That said, if we really need to make constant object properties, it’s also possible, but using totally different methods.
