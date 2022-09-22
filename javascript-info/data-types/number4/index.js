"use strict";

// What if we’d like to round the number to n-th digit after the decimal?

// For instance, we have 1.2345 and want to round it to 2 digits, getting only 1.23.
// There are two ways to do so:

// 1. Multiply-and-divide.
// For example, to round the number to the 2nd digit after the decimal, we can multiply the number by 100, call the rounding function and then divide it back.
let num1 = 1.2345;

console.log(Math.round(num1 * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// 2. The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.
let num2 = 1.2345;

console.log(num2.toFixed(2)); // "1.23"

let num3 = 12.34;
console.log(num3.toFixed(1)); // "12.3"

// This rounds up or down to the nearest value, similar to Math.round:
let num4 = 12.36;
console.log(num4.toFixed(1)); // "12.4"
let num5 = 12.35;
console.log(num5.toFixed(1)); // "12.3"
let num6 = 12.5;
console.log(num6.toFixed(0)); // "13"

// Please note that the result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:
let num7 = 12.34;
console.log(num7.toFixed(5)); // "12.34000", added zeroes to make exactly 5 digits
let num8 = 1234;
console.log(num8.toFixed(5)); // "1234.00000", added zeroes to make exactly 5 digits

// We can convert it to a number using the unary plus or a Number() call, e.g write +num.toFixed(5).
let num9 = 12.34;
console.log(+num9.toFixed(1)); // 12.3, a number!
