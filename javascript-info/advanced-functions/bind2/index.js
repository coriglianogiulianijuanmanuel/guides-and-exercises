"use strict";

// Solution 1: a wrapper

// The simplest solution is to use a wrapping function:

let user1 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

setTimeout(function () {
  user1.sayHi(); // Hello, John!
}, 1000);
// Now it works, because it receives user from the outer lexical environment, and then calls the method normally.

// The same, but shorter:
setTimeout(() => user1.sayHi(), 1000); // Hello, John!

// Looks fine, but a slight vulnerability appears in our code structure.
// What if before setTimeout triggers (there’s one second delay!) user changes value? Then, suddenly, it will call the wrong object!

let user2 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

setTimeout(() => user2.sayHi(), 1000);

// ...the value of user changes within 1 second
user2 = {
  sayHi() {
    console.log("Another user in setTimeout!");
  },
};

// Another user in setTimeout!

// The next solution guarantees that such thing won’t happen.
