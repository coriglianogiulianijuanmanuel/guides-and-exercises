"use strict";

// Quotes

// Strings can be enclosed within either single quotes, double quotes or backticks:
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

// Single and double quotes are essentially the same. Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}:
function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// Another advantage of using backticks is that they allow a string to span multiple lines:
let guestList = `Guests:
* Juan
* Maria
* Jose
`;

console.log(guestList);
/* 
Guests:
* Juan
* Maria
* Jose
*/

// Looks natural, right? But single or double quotes do not work this way. If we use them and try to use multiple lines, there’ll be an error:
/*
let guestList2 = "Guests: // Error: Unexpected token ILLEGAL
* Juan
* Maria
* Jose
";
*/

// Single and double quotes come from ancient times of language creation, when the need for multiline strings was not taken into account. Backticks appeared much later and thus are more versatile.

// Backticks also allow us to specify a “template function” before the first backtick. The syntax is: func`string`. The function func is called automatically, receives the string and embedded expressions and can process them. This is called “tagged templates”. This feature makes it easier to implement custom templating, but is rarely used in practice.
