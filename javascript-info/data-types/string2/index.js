"use strict";

// Special characters

// It is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, written as \n, which denotes a line break:
let guestList = "Guests:\n* Juan\n* Maria\n* Jose";

console.log(guestList);
/* 
Guests:
* Juan
* Maria
* Jose
*/

// For example, these two lines are equal, just written differently:
let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 === str2); // true

// There are other, less common “special” characters.
console.log('single quotes \' & double quotes \"');
console.log("backslash \\");
console.log("\ttab");
console.log(
  "Unicode character with the given hexadecimal Unicode XX, in this case, the letter z: \x7A"
);
console.log(
  "A Unicode symbol with the hex code XXXX in UTF-16 encoding, in this case, the copyright symbol: \u00A9"
);
console.log("A Unicode symbol with the given UTF-32 encoding \u{20331}");
console.log("A Unicode symbol with the given UTF-32 encoding \u{1F60D}");

// All special characters start with a backslash character \. It is also called an “escape character”.

// We might also use it if we wanted to insert a quote into the string.
console.log('I\'m god!!!'); // I'm god!!!
// As you can see, we have to prepend the inner quote by the backslash \', because otherwise it would indicate the string end.

// Of course, only the quotes that are the same as the enclosing ones need to be escaped. So, as a more elegant solution, we could switch to double quotes or backticks instead:
console.log("I'm god!!!");
console.log(`I'm god!!!`);
// Note that the backslash \ serves for the correct reading of the string by JavaScript, then disappears. The in-memory string has no \.

// But what if we need to show an actual backslash \ within the string? That’s possible, but we need to double it like \\:
console.log(`The backslash: \\`); // The backslash: \
