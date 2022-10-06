"use strict";

// What is a class?

// So, what exactly is a class? That’s not an entirely new language-level entity, as one might think. Let’s unveil any magic and see what a class really is. That’ll help in understanding many complex aspects.

// In JavaScript, a class is a kind of function.
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

// proof: User is a function
alert(typeof User); // function

// What class User {...} construct really does is:
// 1. Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).
// 2. Stores class methods, such as sayHi, in User.prototype.

// After new User object is created, when we call its method, it’s taken from the prototype, just as described in the chapter F.prototype. So the object has access to class methods.

// Here’s the code to introspect it:
class User2 {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

// class is a function
alert(typeof User2); // function

// ...or, more precisely, the constructor method
alert(User2 === User2.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User2.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User2.prototype)); // constructor, sayHi
