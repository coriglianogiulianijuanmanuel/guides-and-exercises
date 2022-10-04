"use strict";

// Solution 2: bind

// Functions provide a built-in method bind that allows to fix this.

// The basic syntax is: let boundFunc = func.bind(context);

// The result of func.bind(context) is a special function-like “exotic object”, that is callable as function and transparently passes the call to func setting this=context. In other words, calling boundFunc is like func with fixed this.

// For instance, here funcUser passes a call to func with this=user:
let user1 = {
  firstName: "Juan",
};

function func1() {
  console.log(this.firstName);
}

let funcUser1 = func1.bind(user1);
funcUser1(); // Juan
// Here func.bind(user) as a “bound variant” of func, with fixed this=user.

// All arguments are passed to the original func “as is”, for instance:
let user2 = {
  firstName: "John",
};

function func2(phrase) {
  console.log(`${phrase}, ${this.firstName}`);
}

// bind this to user
let funcUser2 = func2.bind(user2);
funcUser2("Hello"); // Hello, John (argument "Hello" is passed, and this=user)

// Now let’s try with an object method:
let user3 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

let sayHi = user3.sayHi.bind(user3); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user3 = {
  sayHi() {
    console.log("Another user in setTimeout!");
  },
};
// In the line (*) we take the method user.sayHi and bind it to user. The sayHi is a “bound” function, that can be called alone or passed to setTimeout – doesn’t matter, the context will be right.

// Here we can see that arguments are passed “as is”, only this is fixed by bind:
let user4 = {
  firstName: "John",
  say(phrase) {
    console.log(`${phrase}, ${this.firstName}!`);
  },
};

let say = user4.say.bind(user4);

say("Hello"); // Hello, John! ("Hello" argument is passed to say)
say("Bye"); // Bye, John! ("Bye" is passed to say)

// Convenience method: bindAll
// If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:
for (let key of user) {
  if (typeof user[key] == "function") {
    user[key] = user[key].bind(user);
  }
}
// JavaScript libraries also provide functions for convenient mass binding , e.g. _.bindAll(object, methodNames) in lodash.
