"use strict";

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

// Infinity

// Represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
// We can get it as a result of division by zero:
console.log(1 / 0); // Infinity
// Or just reference it directly:
console.log(Infinity); // Infinity

// NaN

// Represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
console.log("not a number" / 2); // NaN
// NaN is sticky. Any further mathematical operation on NaN returns NaN:
console.log(NaN + 3); // NaN
console.log(NaN * 3); // NaN
console.log("not a number" / 2 - 1); // NaN
// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result -- there’s only ONE exception to that:
console.log(NaN ** 0);
