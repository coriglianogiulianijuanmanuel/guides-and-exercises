"use strict";

// Nested functions

// A function is called “nested” when it is created inside another function. It is easily possible to do this with JavaScript.

// We can use it to organize our code, like this:
function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}

sayHiBye("Juan", "Corigliano"); // "Hello, Juan Corigliano", then "Bye, Juan Corigliano"
// Here the nested function getFullName() is made for convenience. It can access the outer variables and so can return the full name. Nested functions are quite common in JavaScript.

// What’s much more interesting, a nested function can be returned: either as a property of a new object or as a result by itself. It can then be used somewhere else. No matter where, it still has access to the same outer variables.

// Below, makeCounter creates the “counter” function that returns the next number on each invocation:
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
/* 
Despite being simple, slightly modified variants of that code have practical uses, for instance, as a random number generator to generate random values for automated tests.

How does this work? If we create multiple counters, will they be independent? What’s going on with the variables here?

Understanding such things is great for the overall knowledge of JavaScript and beneficial for more complex scenarios. So let’s go a bit in-depth.
*/
