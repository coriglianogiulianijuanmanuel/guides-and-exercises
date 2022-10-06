"use strict";

// Not just a syntactic sugar

// Sometimes people say that class is a “syntactic sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new), because we could actually declare the same thing without using the class keyword at all:

// rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function () {
  alert(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();

// The result of this definition is about the same. So, there are indeed reasons why class can be considered a syntactic sugar to define a constructor together with its prototype methods.

// Still, there are important differences:

// 1. First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually.
// The language checks for that property in a variety of places. For example, unlike a regular function, it must be called with new:

/* 
class User {
  constructor() {}
}

alert(typeof User); // function
User(); // Error: Class constructor User cannot be invoked without 'new'
*/

// Also, a string representation of a class constructor in most JavaScript engines starts with the “class…”

/* 
class User {
  constructor() {}
}

alert(User); // class User { ... }
*/

// 2. Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype". That’s good, because if we for..in over an object, we usually don’t want its class methods.

// 3. Classes always use strict. All code inside the class construct is automatically in strict mode.
