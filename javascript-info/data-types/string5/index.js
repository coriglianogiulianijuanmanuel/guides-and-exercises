"use strict";

// Strings are immutable

// Strings can’t be changed in JavaScript. It is impossible to change a character.
// Let’s try it to show that it doesn’t work:
let str1 = "Hi";

//str1[0] = "h"; // error
//console.log(str1); // doesn't work

// The usual workaround is to create a whole new string and assign it to str1 instead of the old one.

str1 = "h" + str1[1]; // replace the string

console.log(str1); // hi
