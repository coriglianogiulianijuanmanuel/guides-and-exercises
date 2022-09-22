"use strict";

// Usually, the plus operator + sums numbers, but, if the binary + is applied to strings, it merges (concatenates) them:
let helloWorld = "hello" + "world";
console.log(helloWorld); // "helloworld"

// Note that if any of the operands is a string, then the other one is converted to a string too.
console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
// See, it doesn’t matter whether the first operand is a string or the second one.

// Here’s a more complex examples:

console.log(1 + 2 + "3"); // "33", not "123"
// Here, operators work one after another. The first + sums two numbers, so it returns 3, then the next + adds the string 3 to it, so it’s like 3 + "3" = "33".

console.log("1" + 2 + 3); // "123", not "15"
// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 3 = "123".

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.
console.log("1" - 2); // -1
console.log(1 - "2"); // -1
console.log("1" - "2"); // -1
console.log("1" * 2); // 2
console.log(1 * "2"); // 2
console.log("1" * "2"); // 2
console.log("1" / 2); // 0.5
console.log(1 / "2"); // 0.5
console.log("1" / "2"); // 0.5
