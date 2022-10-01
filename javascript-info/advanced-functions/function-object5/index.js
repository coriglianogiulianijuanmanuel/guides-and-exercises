"use strict";

function makeCounter() {
  let count = 0;

  function counter() {
    return ++count;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => --count;

  return counter;
}
// The solution uses count in the local variable, but addition methods are written right into the counter. They share the same outer lexical environment and also can access the current count.

let counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter.set(10)); // 10
console.log(counter.decrease()); // 9
