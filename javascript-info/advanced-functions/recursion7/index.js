"use strict";

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function fib2(n) {
  return n > 1 ? fib2(n - 1) + fib2(n - 2) : n;
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

console.log(fib2(0)); // 0
console.log(fib2(1)); // 1
console.log(fib2(2)); // 1
console.log(fib2(3)); // 2
console.log(fib2(7)); // 13
// fib2(77) will be extremely slow!
