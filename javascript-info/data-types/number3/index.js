"use strict";

// Rounding

// One of the most used operations when working with numbers is rounding. There are several built-in functions for rounding:

// Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
console.log(Math.floor(3.1)); // 3
console.log(Math.floor(3.6)); // 3
console.log(Math.floor(-1.1)); // -2
console.log(Math.floor(-1.6)); // -2

// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(3.6)); // 4
console.log(Math.ceil(-1.1)); // -1
console.log(Math.ceil(-1.6)); // -1

// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
console.log(Math.round(3.1)); // 3
console.log(Math.round(3.6)); // 4
console.log(Math.round(3.5)); // 4
console.log(Math.round(-1.1)); // -1
console.log(Math.round(-1.6)); // -2

// Math.trunc
// Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.
console.log(Math.trunc(3.1)); // 3
console.log(Math.trunc(3.6)); // 3
console.log(Math.trunc(-1.1)); // -1
console.log(Math.trunc(-1.6)); // -1
