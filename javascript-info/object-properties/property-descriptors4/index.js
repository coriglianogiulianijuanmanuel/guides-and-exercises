"use strict";

// Non-configurable

// The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.
// A non-configurable property can’t be deleted, its attributes can’t be modified.

// For instance, Math.PI is non-writable, non-enumerable and non-configurable:
let descriptor1 = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(JSON.stringify(descriptor1, null, 2));

/* 
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

// So, a programmer is unable to change the value of Math.PI or overwrite it.

// Math.PI = 3; // Error, because it has writable: false

// delete Math.PI won't work either

// We also can’t change Math.PI to be writable again:
// Object.defineProperty(Math, "PI", { writable: true }); // Error, because of configurable: false
// Object.defineProperty(Math, "PI", { configurable: true }); // Error: Cannot redefine property: PI

// There’s absolutely nothing we can do with Math.PI. Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.

// Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.
// Here user.name is non-configurable, but we can still change it (as it’s writable):
let user1 = {
  name: "John",
};

Object.defineProperty(user1, "name", {
  configurable: false,
});

user1.name = "Juan";

console.log(user1.name); // Juan

// delete user1.name; // Error: Cannot delete property 'name'

// And here we make user.name a “forever sealed” constant, just like the built-in Math.PI:
let user2 = {
  name: "Pepe",
};

Object.defineProperty(user2, "name", {
  writable: false,
  configurable: false,
});

// won't be able to change user.name or its flags
// all this won't work:

/* 
user.name = "Pete";
delete user.name;
Object.defineProperty(user, "name", { value: "Pete" });
*/

// The only attribute change possible: writable true → false
// There’s a minor exception about changing flags.
// We can change writable: true to false for a non-configurable property, thus preventing its value modification (to add another layer of protection). Not the other way around though.
let user3 = {
  name: "Pepe",
};

Object.defineProperty(user3, "name", {
  configurable: false,
});

user3.name = "Juan";

Object.defineProperty(user3, "name", {
  writable: false,
});

// user3.name = "John"; // Error: Cannot assign to read only property 'name'
