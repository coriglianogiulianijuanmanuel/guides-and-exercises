"use strict";

// Class Expression

// Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.
let User = class {
  sayHi() {
    alert("Hello!");
  }
};

// Similar to Named Function Expressions, class expressions may have a name. If a class expression has a name, it’s visible inside the class only:

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User2 = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass name is visible only inside the class
  }
};

new User2().sayHi(); // works, shows MyClass definition

alert(MyClass); // error, MyClass name isn't visible outside of the class

// We can even make classes dynamically “on-demand”, like this:
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

// Create a new class
let User3 = makeClass("Hello");

new User3().sayHi(); // Hello
