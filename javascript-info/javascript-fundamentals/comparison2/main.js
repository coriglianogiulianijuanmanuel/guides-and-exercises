"use strict";

/* 
To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

In other words, strings are compared letter-by-letter.
*/
console.log("Z" > "A"); // true
console.log("Glow" > "Glee"); // true
console.log("Bee" > "Be"); // true
console.log("Test" > "Test"); // false
console.log("air" < "Air"); // false
/* 
The algorithm to compare two strings is simple:

1. Compare the first character of both strings.

2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.

3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.

4. Repeat until the end of either string.

5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
*/

/* 
The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same.

For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode).
*/
