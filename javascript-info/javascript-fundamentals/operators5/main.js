"use strict";

// Another interesting feature is the ability to chain assignments:
let a, b, c;
a = b = c = 2 + 3;
console.log(a); // 5
console.log(b); // 5
console.log(c); // 5
// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

// Once again, for the purposes of readability it’s better to split such code into few lines:
/*
c = 2 + 3;
b = c;
a = c;
*/
