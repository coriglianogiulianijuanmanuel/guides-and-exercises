"use strict";

// Comparing strings

// As we know from the chapter Comparisons, strings are compared character-by-character in alphabetical order. Although, there are some oddities:

// 1. A lowercase letter is always greater than the uppercase:
console.log("a" > "A"); // true
console.log("A" > "a"); // false

// 2. Letters with diacritical marks are “out of order”:
console.log("Österreich" > "Zealand"); // true
// This may lead to strange results if we sort these country names. Usually people would expect Zealand to come after Österreich in the list.

// To understand what happens, let’s review the internal representation of strings in JavaScript.

// All strings are encoded using UTF-16. That is: each character has a corresponding numeric code. There are special methods that allow to get the character for the code and back:

// str.codePointAt(pos)
// Returns the code for the character at position pos:
// different case letters have different codes
console.log("a".codePointAt(0)); // 97
console.log("A".codePointAt(0)); // 65

// String.fromCodePoint(code)
// Creates a character by its numeric code
console.log(String.fromCodePoint(97)); // "a"
console.log(String.fromCodePoint(65)); // "A"

// We can also add Unicode characters by their codes using \u followed by the hex code:
console.log("\u005a"); // "Z"

//Now let’s see the characters with codes 65..220 (the latin alphabet and a little bit extra) by making a string of them:
let str = "";

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// See? Capital characters go first, then a few special ones, then lowercase characters, and Ö near the end of the output.

// Now it becomes obvious why a > Z.

// The characters are compared by their numeric code. The greater code means that the character is greater. The code for a (97) is greater than the code for Z (90).

// All lowercase letters go after uppercase letters because their codes are greater.
// Some letters like Ö stand apart from the main alphabet. Here, its code is greater than anything from a to z.
