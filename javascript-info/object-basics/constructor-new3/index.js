"use strict";

// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:
// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.

// In other words, return with an object returns that object, in all other cases this is returned.

// For instance, here return overrides this by returning an object:
function BigUser(name) {
  this.name = name;
  return { name: "Juan" }; // <-- returns this object
}

console.log(new BigUser("John").name); // Juan

// And here’s an example with an empty return (or we could place a primitive after it, doesn’t matter):
function SmallUser(name) {
  this.name = name;
  return; // <-- returns this
}

console.log(new SmallUser("John").name); // John

// Usually constructors don’t have a return statement. Here we mention the special behavior with returning objects mainly for the sake of completeness.

// By the way, we can omit parentheses after new, if it has no arguments:
function User() {
  this.name = "Juan";
}

let user = new User;
console.log(user.name); // Juan
// Omitting parentheses here is not considered a “good style”, but the syntax is permitted by specification.