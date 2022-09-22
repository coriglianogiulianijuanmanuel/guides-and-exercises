"use strict";

// Numeric conversion happens in mathematical functions and expressions automatically.

// For example, when division / is applied to non-numbers:
alert("6" / "2"); // 3, strings are converted to numbers
console.log("6" / "2"); // 3, strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:
let myString = "123456";
alert(myString); // "123456"
alert(typeof myString); // string

let myNumber = Number(myString); // becomes a number 123456
alert(myNumber); // 123456
alert(typeof myNumber); // number

// Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

// If the string is not a valid number, the result of such a conversion is NaN. For instance:

let myString2 = Number("hello world");
alert(myString2); // NaN, conversion failed

//Numeric conversion rules:

// undefined becomes NaN
let myString3;
alert(Number(myString3));

// null becomes 0
alert(Number(null));

// true becomes 1 and false becomes 0
alert(Number(true));
alert(Number(false));

// Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

alert(Number("   123   "));
alert(Number("123z"));
