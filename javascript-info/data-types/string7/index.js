"use strict";

// The bitwise NOT trick

// One of the old tricks used here is the bitwise NOT ~ operator. It converts the number to a 32-bit integer (removes the decimal part if exists) and then reverses all bits in its binary representation.
// In practice, that means a simple thing: for 32-bit integers ~n equals -(n+1).
console.log(~2); // -3, the same as -(2+1)
console.log(~1); // -2, the same as -(1+1)
console.log(~0); // -1, the same as -(0+1)
console.log(~-1); // 0, the same as -(-1+1)

// As we can see, ~n is zero only if n == -1 (that’s for any 32-bit signed integer n).
// So, the test if ( ~str.indexOf("...") ) is truthy only if the result of indexOf is not -1. In other words, when there is a match.
// People use it to shorten indexOf checks:
let str1 = "Widget";

if (~str1.indexOf("Widget")) {
  console.log("Found it!"); // works
}

/* 
It is usually not recommended to use language features in a non-obvious way, but this particular trick is widely used in old code, so we should understand it.

Just remember: if (~str.indexOf(...)) reads as “if found”.

To be precise though, as big numbers are truncated to 32 bits by ~ operator, there exist other numbers that give 0, the smallest is ~4294967295=0. That makes such check correct only if a string is not that long.

Right now we can see this trick only in the old code, as modern JavaScript provides .includes method.
*/