"use strict";

// String length

// The length property has the string length:
console.log(`My\n`.length); // 3
// Note that \n is a single “special” character, so the length is indeed 3.

// Length is a property. People with a background in some other languages sometimes mistype by calling str.length() instead of just str.length. That doesn’t work.
// Please note that str.length is a numeric property, not a function. There is no need to add parenthesis after it.

let testString = "this is a test";

console.log(testString.length); // 14
