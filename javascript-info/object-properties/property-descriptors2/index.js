"use strict";

// Non-writable

// Let’s make user.name non-writable (can’t be reassigned) by changing writable flag:
let user1 = {
  name: "Juan",
};

Object.defineProperty(user1, "name", {
  writable: false,
});

// user1.name = "Pepe"; // Error: Cannot assign to read only property 'name'

// Now no one can change the name of our user, unless they apply their own defineProperty to override ours.

// Errors appear only in strict mode
// In the non-strict mode, no errors occur when writing to non-writable properties and such. But the operation still won’t succeed. Flag-violating actions are just silently ignored in non-strict.

// Here’s the same example, but the property is created from scratch:
let user2 = {};

Object.defineProperty(user2, "name", {
  value: "Juan",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true,
});

let descriptor = Object.getOwnPropertyDescriptor(user2, "name");
console.log(JSON.stringify(descriptor, null, 2));

/* 
{
  "value": "Juan",
  "writable": false,
  "enumerable": true,
  "configurable": true
}
*/

// user2.name = "Pepe"; // Error: Cannot assign to read only property 'name'
