"use strict";

// AND
// The AND operator is represented with two ampersands &&: result = a && b;

// In classical programming, AND returns true if both operands are truthy and false otherwise:
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

// An example with if:
let firstName = "Juan";
let secondName = "Manuel";
if (firstName == "Juan" && secondName == "Manuel") {
  console.log("His name is Juan Manuel");
}

// Just as with OR, any value is allowed as an operand of AND:
if (1 && 0) {
  console.log("not printed");
} else if (1 && 1) {
  console.log("printed");
}
