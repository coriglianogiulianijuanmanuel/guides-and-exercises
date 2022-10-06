"use strict";

// Class fields

/* 
Old browsers may need a polyfill
Class fields are a recent addition to the language.
*/

// Previously, our classes only had methods.
// “Class fields” is a syntax that allows to add any properties.

// For instance, let’s add name property to class User:
class User {
  name = "Juan";

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

let user = new User();
user.sayHi(); // Hello, Juan!

// So, we just write " = " in the declaration, and that’s it.
// The important difference of class fields is that they are set on individual objects, not User.prototype:
console.log(user.name); // Juan
console.log(User.prototype.name); // undefined

// We can also assign values using more complex expressions and function calls:
class User2 {
  name = prompt("Name, please?", "John");
}

let user2 = new User2();
alert(user2.name); // John
