"use strict";

// Correct comparisons

/* 
The “right” algorithm to do string comparisons is more complex than it may seem, because alphabets are different for different languages.

So, the browser needs to know the language to compare.

Luckily, all modern browsers (IE10- requires the additional library Intl.js) support the internationalization standard ECMA-402.

It provides a special method to compare strings in different languages, following their rules.

The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:

* Returns a negative number if str is less than str2.
* Returns a positive number if str is greater than str2.
* Returns 0 if they are equivalent.
*/

console.log("Österreich".localeCompare("Zealand")); // -1
// This method actually has two additional arguments specified in the documentation, which allows it to specify the language (by default taken from the environment, letter order depends on the language) and setup additional rules like case sensitivity or should "a" and "á" be treated as the same etc.
