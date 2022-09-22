"use strict";

// Objects are usually created to represent entities of the real world, like users, orders and so on:

/* 
let user = {
  name: "John",
  age: 30
};
*/

// And, in the real world, a user can act: select something from the shopping cart, login, logout etc. Actions are represented in JavaScript by functions in properties.

// For a start, let’s teach the user to say hello:
let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  console.log("Hello!");
};

user.sayHi(); // Hello!
// Here we’ve just used a Function Expression to create a function and assign it to the property user.sayHi of the object. Then we can call it as user.sayHi(). The user can now speak!

// A function that is a property of an object is called its method. So, here we’ve got a method sayHi of the object user.

// Of course, we could use a pre-declared function as a method, like this:
let user2 = {
  name: "John",
  age: 30,
};

// first, declare
function sayHi2() {
  console.log("Hello!");
}

// then add as a method
user2.sayHi2 = sayHi2;

user2.sayHi2(); // Hello!
