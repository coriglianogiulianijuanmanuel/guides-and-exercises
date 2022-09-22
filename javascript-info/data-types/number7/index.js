"use strict";

// Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:
console.log(+"100px"); // NaN
console.log(Number("100px")); // NaN
// The sole exception is spaces at the beginning or at the end of the string, as they are ignored.
console.log(+" 100 "); // 100
console.log(Number(" 100 ")); // 100

// But in real life we often have values in units, like "100px" or "12pt" in CSS. Also in many countries the currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that. That’s what parseInt and parseFloat are for.

// parseInt and parseFloat “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number:
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5rem")); // 12.5
console.log(parseInt("12.3")); // 12, only the integer part is returned
console.log(parseFloat("12.3.4")); // 12.3, the second point stops the reading
// There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:
console.log(parseInt("a123")); // NaN, the first symbol stops the process

// The second argument of parseInt(str, radix)
// The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:
console.log(parseInt("0xff", 16)); // 255
console.log(parseInt("0xff")); // 255, if radix is not provided, then it considers the string a hex value if it starts with 0x
console.log(parseInt("ff", 16)); // 255, without 0x also works
console.log(parseInt("2n9c", 36)); // 123456
