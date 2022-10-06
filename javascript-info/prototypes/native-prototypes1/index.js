"use strict";

// Native prototypes

// The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor functions use it. First we’ll look at the details, and then how to use it for adding new capabilities to built-in objects.

// Object.prototype

// Let’s say we output an empty object:
let obj1 = {};
alert(obj1); // "[object Object]" ?
// Where’s the code that generates the string "[object Object]"? That’s a built-in toString method, but where is it? The obj is empty!

// …But the short notation obj = {} is the same as obj = new Object(), where Object is a built-in object constructor function, with its own prototype referencing a huge object with toString and other methods.
// When new Object() is called (or a literal object {...} is created), the [[Prototype]] of it is set to Object.prototype.
// So then when obj.toString() is called the method is taken from Object.prototype.

// We can check it like this:
let obj2 = {};

alert(obj2.__proto__ === Object.prototype); // true

alert(obj2.toString === obj2.__proto__.toString); // true
alert(obj2.toString === Object.prototype.toString); // true

// Please note that there is no more [[Prototype]] in the chain above Object.prototype:
alert(Object.prototype.__proto__); // null
