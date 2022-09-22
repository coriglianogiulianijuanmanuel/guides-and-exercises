"use strict";

// Imprecise calculations

// Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.

// If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity:
console.log(1e500); // Infinity

// What may be a little less obvious, but happens quite often, is the loss of precision.

// Consider this (falsy!) equality test:
console.log(0.1 + 0.2 == 0.3); // false
// That’s right, if we check whether the sum of 0.1 and 0.2 is 0.3, we get false.
// Strange! What is it then if not 0.3?
console.log(0.1 + 0.2); // 0.30000000000000004
// Ouch! Imagine you’re making an e-shopping site and the visitor puts $0.10 and $0.20 goods into their cart. The order total will be $0.30000000000000004. That would surprise anyone.

//But why does this happen?

/* 
A number is stored in memory in its binary form, a sequence of bits – ones and zeroes. But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually unending fractions in their binary form.

What is 0.1? It is one divided by ten 1/10, one-tenth. In decimal numeral system such numbers are easily representable. Compare it to one-third: 1/3. It becomes an endless fraction 0.33333(3).

So, division by powers 10 is guaranteed to work well in the decimal system, but division by 3 is not. For the same reason, in the binary numeral system, the division by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.

There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal fraction.

The numeric format IEEE-754 solves this by rounding to the nearest possible number. These rounding rules normally don’t allow us to see that “tiny precision loss”, but it exists.
*/

// We can see this in action:
console.log((0.1).toFixed(20)); // "0.10000000000000000555"

// And when we sum two numbers, their “precision losses” add up. That’s why 0.1 + 0.2 is not exactly 0.3.

// The same issue exists in many other programming languages.

// PHP, Java, C, Perl, Ruby give exactly the same result, because they are based on the same numeric format.

// Can we work around the problem? Sure, the most reliable method is to round the result with the help of a method toFixed(n):
let sum = 0.1 + 0.2;

console.log(sum.toFixed(2)); // "0.30"
// Please note that toFixed always returns a string. It ensures that it has 2 digits after the decimal point. That’s actually convenient if we have an e-shopping and need to show $0.30. For other cases, we can use the unary plus to coerce it into a number:
console.log(+sum.toFixed(2)); // 0.3

// We also can temporarily multiply the numbers by 100 (or a bigger number) to turn them into integers, do the maths, and then divide back. Then, as we’re doing maths with integers, the error somewhat decreases, but we still get it on division:
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3
console.log((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

// So, multiply/divide approach reduces the error, but doesn’t remove it totally.

// Sometimes we could try to evade fractions at all. Like if we’re dealing with a shop, then we can store prices in cents instead of dollars. But what if we apply a discount of 30%? In practice, totally evading fractions is rarely possible. Just round them to cut “tails” when needed.

// The funny thing

// Hello! I'm a self-increasing number!
console.log(9999999999999999); // shows 10000000000000000
// This suffers from the same issue: a loss of precision. There are 64 bits for the number, 52 of them can be used to store digits, but that’s not enough. So the least significant digits disappear. JavaScript doesn’t trigger an error in such events. It does its best to fit the number into the desired format, but unfortunately, this format is not big enough.

// Two zeroes

/* 
Another funny consequence of the internal representation of numbers is the existence of two zeroes: 0 and -0.

That’s because a sign is represented by a single bit, so it can be set or not set for any number including a zero.

In most cases the distinction is unnoticeable, because operators are suited to treat them as the same.
*/
