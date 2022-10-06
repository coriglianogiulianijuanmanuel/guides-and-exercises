"use strict";

// Other built-in prototypes

// Other built-in objects such as Array, Date, Function and others also keep methods in prototypes.
// For instance, when we create an array [1, 2, 3], the default new Array() constructor is used internally. So Array.prototype becomes its prototype and provides methods. That’s very memory-efficient.
// By specification, all of the built-in prototypes have Object.prototype on the top. That’s why some people say that “everything inherits from objects”.

// Let’s check the prototypes manually:
let array1 = [1, 2, 3];

// it inherits from Array.prototype?
console.log(array1.__proto__ === Array.prototype); // true

// then from Object.prototype?
console.log(array1.__proto__.__proto__ === Object.prototype); // true

// and null on the top.
console.log(array1.__proto__.__proto__.__proto__); // null

// Some methods in prototypes may overlap, for instance, Array.prototype has its own toString that lists comma-delimited elements:
let array2 = [1, 2, 3];
alert(array2); // 1,2,3 <-- the result of Array.prototype.toString

// As we’ve seen before, Object.prototype has toString as well, but Array.prototype is closer in the chain, so the array variant is used.

// In-browser tools like Chrome developer console also show inheritance (console.dir may need to be used for built-in objects).

// Other built-in objects also work the same way. Even functions – they are objects of a built-in Function constructor, and their methods (call/apply and others) are taken from Function.prototype. Functions have their own toString too.
function f() {}

console.log(f.__proto__ === Function.prototype); // true
console.log(f.__proto__.__proto__ === Object.prototype); // true, inherit from objects
