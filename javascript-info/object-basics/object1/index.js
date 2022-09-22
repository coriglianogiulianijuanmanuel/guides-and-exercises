"use strict";

//An empty object can be created using one of two syntaxes:

// "object constructor" syntax
// let user = new Object();

// "object literal" syntax
// let user = {};

// Usually, the figure brackets {...} are used. That declaration is called an object literal.

// We can immediately put some properties into {...} as “key: value” pairs:
let user = {
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
// A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

// In the user object, there are two properties:
// 1. The first property has the name "name" and the value "John".
// 2. The second one has the name "age" and the value 30.
// The resulting user object can be imagined as a cabinet with two signed files labeled “name” and “age”.

console.log(user); // { name: 'John', age: 30 }

// We can add, remove and read files from it at any time.
// Property values are accessible using the dot notation:
console.log(user.name); // John
console.log(user.age); // 30

// The value can be of any type. Let’s add a boolean one:
user.isAdmin = true;

console.log(user); // { name: 'John', age: 30, isAdmin: true }
console.log(user.isAdmin); // true

// To remove a property, we can use the delete operator:
delete user.age;
console.log(user); // { name: 'John', isAdmin: true }

// We can also use multiword property names, but then they must be quoted:
let user2 = {
  name: "Juan",
  age: 24,
  "likes anime": true, // multiword property name must be quoted
};
// The last property in the list may end with a comma
// That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.
