"use strict";

// A regular equality check == has a problem. It cannot differentiate 0 from false:
console.log(0 == false); // true
// The same thing happens with an empty string:
console.log("" == false); // true
// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

/* 
What to do if we’d like to differentiate 0 from false?

A strict equality operator === checks the equality without type conversion. In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.
*/

console.log(0 === false); // false, because the types are different
console.log("" === false); // false, because the types are different
console.log(0 === ""); // false, because the types are different

// There is also a “strict non-equality” operator !== analogous to !=.

console.log(0 !== false); // true, because the types are different
console.log("" !== false); // true, because the types are different
console.log(0 !== ""); // true, because the types are different
