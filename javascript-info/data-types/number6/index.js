"use strict";

// Tests: isFinite and isNaN

// Remember these two special numeric values?
// Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
// NaN represents an error.

// They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:

// isNaN(value)
// isNaN(value) converts its argument to a number and then tests it for being NaN:
console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
// But do we need this function? Can’t we just use the comparison === NaN? Unfortunately not. The value NaN is unique in that it does not equal anything, including itself:
console.log(NaN === NaN); // false

// isFinite(value)
// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:
console.log(isFinite("50")); // true
console.log(isFinite("str")); // false, because a special value: NaN
console.log(isFinite(Infinity)); // false, because a special value: Infinity

// Sometimes isFinite is used to validate whether a string value is a regular number:
let num = +prompt("Enter a number", "");

// will be true unless you enter Infinity, -Infinity or not a number
console.log(isFinite(num));
// Please note that an empty or a space-only string is treated as 0 in all numeric functions including isFinite.

// Number.isNaN and Number.isFinite

// Number.isNaN and Number.isFinite methods are the more “strict” versions of isNaN and isFinite functions. They do not autoconvert their argument into a number, but check if it belongs to the number type instead.

// Number.isNaN(value) returns true if the argument belongs to the number type and it is NaN. In any other case it returns false.
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("str" / 2)); // true
// Note the difference:
console.log(Number.isNaN("str")); // false, because "str" belongs to the string type, not the number type
console.log(isNaN("str")); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

// Number.isFinite(value) returns true if the argument belongs to the number type and it is not NaN/Infinity/-Infinity. In any other case it returns false.
console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(2 / 0)); // false, cause 2 / 0 == Infinity

// Note the difference
console.log(Number.isFinite("123")); // false, because "123" belongs to the string type, not the number type
console.log(isFinite("123")); // true, because isFinite converts string "123" into a number 123

// In a way, Number.isNaN and Number.isFinite are simpler and more straightforward than isNaN and isFinite functions. In practice though, isNaN and isFinite are mostly used, as they’re shorter to write.

// Comparison with Object.is
// There is a special built-in method Object.is that compares values like ===, but is more reliable for two edge cases:
// 1. It works with NaN:
console.log(Object.is(NaN, NaN)); // true, that’s a good thing.
// 2. Values 0 and -0 are different:
console.log(Object.is(0, -0)); // false, technically that’s true, because internally the number has a sign bit that may be different even if all other bits are zeroes.

// In all other cases, Object.is(a, b) is the same as a === b. We mention Object.is here, because it’s often used in JavaScript specification. When an internal algorithm needs to compare two values for being exactly the same, it uses Object.is (internally called SameValue).
