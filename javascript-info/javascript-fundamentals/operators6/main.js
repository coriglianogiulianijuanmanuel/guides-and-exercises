// We often need to apply an operator to a variable and store the new result in that same variable.

/*
let n = 2;
n = n + 5;
n = n * 2;
*/

// This notation can be shortened using the operators += and *=:
let n = 2;
n += 5; // same as n = n + 5
n *= 2; // same as n = n * 2
console.log(n); // 14

// Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.
// Such operators have the same precedence as a normal assignment, so they run after most other calculations:
let m = 2;
m *= 5 + 2; // right part evaluated first, same as m *= 7
console.log(m); // 14
