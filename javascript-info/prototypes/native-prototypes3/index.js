"use strict";

// Primitives

// The most intricate thing happens with strings, numbers and booleans.
// As we remember, they are not objects. But if we try to access their properties, temporary wrapper objects are created using built-in constructors String, Number and Boolean. They provide the methods and disappear.
// These objects are created invisibly to us and most engines optimize them out, but the specification describes it exactly this way. Methods of these objects also reside in prototypes, available as String.prototype, Number.prototype and Boolean.prototype.

// Values null and undefined have no object wrappers
// Special values null and undefined stand apart. They have no object wrappers, so methods and properties are not available for them. And there are no corresponding prototypes either.

// Changing native prototypes

// Native prototypes can be modified. For instance, if we add a method to String.prototype, it becomes available to all strings:
String.prototype.show = function () {
  console.log(this);
};

"BOOM!".show(); // BOOM!
// During the process of development, we may have ideas for new built-in methods we’d like to have, and we may be tempted to add them to native prototypes. But that is generally a bad idea.

// Important:
// Prototypes are global, so it’s easy to get a conflict. If two libraries add a method String.prototype.show, then one of them will be overwriting the method of the other.
// So, generally, modifying a native prototype is considered a bad idea.

// In modern programming, there is only one case where modifying native prototypes is approved. That’s polyfilling.
// Polyfilling is a term for making a substitute for a method that exists in the JavaScript specification, but is not yet supported by a particular JavaScript engine.
// We may then implement it manually and populate the built-in prototype with it.

if (!String.prototype.repeat) {
  // if there's no such method
  // add it to the prototype

  String.prototype.repeat = function (n) {
    // repeat the string n times

    // actually, the code should be a little bit more complex than that
    // (the full algorithm is in the specification)
    // but even an imperfect polyfill is often considered good enough
    return new Array(n + 1).join(this);
  };
}

console.log("La".repeat(3)); // LaLaLa

// Borrowing from prototypes

// In the chapter Decorators and forwarding, call/apply we talked about method borrowing.
// That’s when we take a method from one object and copy it into another.
// Some methods of native prototypes are often borrowed.

// For instance, if we’re making an array-like object, we may want to copy some Array methods to it.
let obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

console.log(obj.join(",")); // Hello,world!
// It works because the internal algorithm of the built-in join method only cares about the correct indexes and the length property. It doesn’t check if the object is indeed an array. Many built-in methods are like that.

// Another possibility is to inherit by setting obj.__proto__ to Array.prototype, so all Array methods are automatically available in obj.
// But that’s impossible if obj already inherits from another object. Remember, we only can inherit from one object at a time.
// Borrowing methods is flexible, it allows to mix functionalities from different objects if needed.
