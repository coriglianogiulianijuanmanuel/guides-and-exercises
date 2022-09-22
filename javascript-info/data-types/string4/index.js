"use strict";

// Accessing characters

// To get a character at position pos, use square brackets [pos] or call the method str.charAt(pos). The first character starts from the zero position:
let str1 = `Hello`;

// the first character
console.log(str1[0]); // H
console.log(str1.charAt(0)); // H

// the last character
console.log(str1[str1.length - 1]); // o
console.log(str1.charAt(str1.length - 1)); // o

// The square brackets are a modern way of getting a character, while charAt exists mostly for historical reasons.
// The only difference between them is that if no character is found, [] returns undefined, and charAt returns an empty string:
console.log(str1[1000]); // undefined
console.log(str1.charAt(1000)); // ''

// You can also use at(pos) to get a character at position pos:

console.log(str1.at(0));
console.log(str1.at(1));
console.log(str1.at(2));
console.log(str1.at(3));
console.log(str1.at(4));
console.log(str1.at(-1));
console.log(str1.at(-2));
console.log(str1.at(-3));
console.log(str1.at(-4));
console.log(str1.at(-5));

// We can also iterate over characters using for..of:
for (let character of "Hello") {
  console.log(character); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
