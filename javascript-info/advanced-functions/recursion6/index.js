"use strict";

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
  // or 'return (n != 1) ? n * factorial(n - 1) : 1;'
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// The basis of recursion is the value 1. We can also make 0 the basis here, doesn’t matter much, but gives one more recursive step:

function factorial2(n) {
  return n ? n * factorial(n - 1) : 1;
}

console.log(factorial2(0)); // 1
