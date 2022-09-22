"use strict";

/* 
There’s a non-intuitive behavior when null or undefined are compared to other values.

For a strict equality check === these values are different, because each of them is a different type.
*/
console.log(undefined === null); // false

// For a non-strict check == there’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

console.log(undefined == null); // true
console.log(undefined == undefined); // true
console.log(null == null); // true

// For maths and other comparisons < > <= >= null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

// Let’s compare null with a zero:
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* 
Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
*/

// The value undefined shouldn’t be compared to other values:
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined < 0); // false
/* 
We get these results because:

1. Comparisons (1) and (3) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.

2. The equality check (2) returns false because undefined only equals null, undefined, and no other value.
*/
