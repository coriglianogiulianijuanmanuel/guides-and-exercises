"use strict";

// toString(base)

// The method num.toString(base) returns a string representation of num in the numeral system with the given base.
let num = 255;
// The base can vary from 2 to 36. By default it’s 10.
console.log(num.toString(10)); // 255
// Common use cases for this are:
// 1. base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.
console.log(num.toString(16)); // ff
// 2. base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.
console.log(num.toString(2)); // 11111111
// 3. base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. 
console.log(num.toString(36)); // 73
// A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36:
console.log(123456..toString(36)); // 2n9c
// Please note that two dots in 123456..toString(36) is not a typo. If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.
console.log(255..toString(10)); // 255
console.log(255..toString(16)); // ff
console.log(255..toString(2)); // 11111111
console.log(255..toString(36)); // 73
// If we placed a single dot: 123456.toString(36), then there would be an error, because JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method.

// Also could write (123456).toString(36).
console.log((123456).toString(36)); // 2n9c
console.log((255).toString(10)); // 255
console.log((255).toString(16)); // ff
console.log((255).toString(2)); // 11111111
console.log((255).toString(36)); // 73