"use strict";

// Class basic syntax

/* 
In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).

In practice, we often need to create many objects of the same kind, like users, or goods or whatever.

As we already know from the chapter Constructor, operator "new", new function can help with that.

But in the modern JavaScript, there’s a more advanced “class” construct, that introduces great new features which are useful for object-oriented programming.
*/

// The “class” syntax

/*
// The basic syntax is:

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
*/

// Then use new MyClass() to create a new object with all the listed methods.
// The constructor() method is called automatically by new, so we can initialize the object there.

class User {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

// Usage:
let user = new User("Juan");
user.sayName(); // Juan

// When new User("Juan") is called:
// 1. A new object is created.
// 2. The constructor runs with the given argument and assigns it to this.name.

// …Then we can call object methods, such as user.sayName().

// No comma between class methods:
// A common pitfall for novice developers is to put a comma between class methods, which would result in a syntax error.
// The notation here is not to be confused with object literals. Within the class, no commas are required.
