"use strict";

// Smarter getters/setters

// Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.
// For instance, if we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name:
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // Name is too short...

// So, the name is stored in _name property, and the access is done via getter and setter.
// Technically, external code is able to access the name directly by using user._name. But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.

// Using for compatibility

// One of the great uses of accessors is that they allow to take control over a “regular” data property at any moment by replacing it with a getter and a setter and tweak its behavior.

// Imagine we started implementing user objects using data properties name and age:

/*
function User(name, age) {
  this.name = name;
  this.age = age;
}

let juan = new User("Juan", 24);

console.log(juan); // User { name: 'Juan', age: 24 }
*/

// …But sooner or later, things may change. Instead of age we may decide to store birthday, because it’s more precise and convenient:

/*
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let juan = new User("Juan", new Date(1998, 2, 2));
*/

// Now what to do with the old code that still uses age property?
// We can try to find all such places and fix them, but that takes time and can be hard to do if that code is used by many other people. And besides, age is a nice thing to have in user, right?

// Let’s keep it. Adding a getter for age solves the problem:
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let juan = new User("Juan", new Date(1998, 2, 2));

console.log(juan.birthday); // birthday is available
console.log(juan.age);      // ...as well as the age

// Now the old code works too and we’ve got a nice additional property.
