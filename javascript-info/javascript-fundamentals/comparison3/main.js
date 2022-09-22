"use strict";

// When comparing values of different types, JavaScript converts the values to numbers.
console.log("2" > 1); // true, string '2' becomes a number 2
console.log("01" == 1); // true, string '01' becomes a number 1
console.log(1 != "1"); // false, string '1' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true > false); // true

// It is possible that at the same time:
// Two values are equal, and one of them is true as a boolean and the other one is false as a boolean.
let a = 0;
console.log(Boolean(a)); // false
let b = "0";
console.log(Boolean(b)); // true
console.log(a == b); // true
// From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.
