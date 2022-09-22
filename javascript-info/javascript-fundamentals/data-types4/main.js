"use strict";
/* 
In JavaScript, the “number” type cannot safely represent integer values larger than ((2 ** 53) - 1) (that’s 9007199254740991), or less than -((2 ** 53) - 1) for negatives.

To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * (10 ** 308)), but outside of the safe integer range ±((2 ** 53) - 1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

For example, these two numbers (right above the safe range) are the same:
*/
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
// So to say, all odd integers greater than (253-1) can’t be stored at all in the “number” type.

/* 
For most purposes ±((2 ** 53)-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.

BigInt type was recently added to the language to represent integers of arbitrary length.

A BigInt value is created by appending n to the end of an integer:
*/
const reallyBigNumber = 1234567890123456789012345678901234567890n;
