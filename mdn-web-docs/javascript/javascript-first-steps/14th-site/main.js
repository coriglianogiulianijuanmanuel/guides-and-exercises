let x = 1;
let y = 2;

console.log(x === y);
console.log(x !== y);
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);

/*
== and != are not the same as === and !== .
The former versions test whether the values are the same but not whether the values' datatypes are the same. The latter, strict versions test the equality of both the values and their datatypes.
*/

let z = 1;
let w = "1";

console.log(z == w);
console.log(z != w);
