"use strict";

// In modern JavaScript, there are two types of numbers:
// 1. Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”. These are numbers that we’re using most of the time.
// 2. BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed ((2 ** 53) - 1) or be less than -((2 ** 53) - 1).

// More ways to write a number

// Imagine we need to write 1 billion. The obvious way is:
let billion1 = 1000000000;
// We also can use underscore _ as the separator:
let billion2 = 1_000_000_000;
// Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.

// In real life though, we try to avoid writing long sequences of zeroes. We’re too lazy for that. We’ll try to write something like "1bn" for a billion or "7.3bn" for 7 billion 300 million. The same is true for most large numbers.
// In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:
console.log(1e9); // 1 billion, literally: 1 and 9 zeroes

console.log(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)

console.log(5e1); // 50

// In other words, e multiplies the number by 1 with the given zeroes count.
console.log(1e3 === 1 * 1000); // true, e3 means *1000
console.log(1.23e6 === 1.23 * 1000000); // true, e6 means *1000000

// Now let’s write something very small. Say, 1 microsecond (one millionth of a second):
let mcs1 = 0.000001;
// Just like before, using "e" can help. If we’d like to avoid writing the zeroes explicitly, we could write the same as:
console.log(1e-6); // five zeroes to the left from 1
// If we count the zeroes in 0.000001, there are 6 of them. So naturally it’s 1e-6.
// In other words, a negative number after "e" means a division by 1 with the given number of zeroes:
console.log(1e-3 === 1 / 1000); // true
console.log(1.23e-6 === 1.23 / 1000000); // true
console.log(1234e-2 === 1234 / 100); // true

// Hex, binary and octal numbers

// Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things. So naturally, there exists a shorter way to write them: 0x and then the number.
console.log(0xff); // 255
console.log(0xFF); // 255 (the same, case doesn't matter)

// Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:
let a = 0b11111111;
let b = 0o377;

console.log(a); // 255
console.log(b); // 255
console.log(a === b); // true
// There are only 3 numeral systems with such support. For other numeral systems, we should use the function parseInt (which we will see later in this chapter).