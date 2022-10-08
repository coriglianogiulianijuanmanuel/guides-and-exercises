"use strict";

// Class checking: "instanceof"

// The instanceof operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.
// Such a check may be necessary in many cases. For example, it can be used for building a polymorphic function, the one that treats arguments differently depending on their type.

// The instanceof operator

// The syntax is: obj instanceof Class
// It returns true if obj belongs to the Class or a class inheriting from it.

class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log(rabbit instanceof Rabbit); // true

// It also works with constructor functions:

// instead of class
function Rabbit2() {}

console.log(new Rabbit2() instanceof Rabbit2); // true

// …And with built-in classes like Array:
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
// Please note that arr also belongs to the Object class. That’s because Array prototypically inherits from Object.

// Normally, instanceof examines the prototype chain for the check. We can also set a custom logic in the static method Symbol.hasInstance.

// The algorithm of obj instanceof Class works roughly as follows:

// 1. If there’s a static method Symbol.hasInstance, then just call it: Class[Symbol.hasInstance](obj). It should return either true or false, and we’re done. That’s how we can customize the behavior of instanceof.

// setup instanceOf check that assumes that
// anything with canEat property is an animal
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

console.log(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called

// 2. Most classes do not have Symbol.hasInstance. In that case, the standard logic is used: obj instanceOf Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain.
// In other words, compare one after another:

/* 
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?
...
// if any answer is true, return true
// otherwise, if we reached the end of the chain, return false
*/

// In the example above rabbit.__proto__ === Rabbit.prototype, so that gives the answer immediately.

// In the case of an inheritance, the match will be at the second step:
class Animal2 {}
class Rabbit3 extends Animal2 {}

let rabbit2 = new Rabbit3();
console.log(rabbit2 instanceof Animal2); // true

// rabbit2.__proto__ === Animal.prototype (no match)
// rabbit2.__proto__.__proto__ === Animal.prototype (match!)

// By the way, there’s also a method objA.isPrototypeOf(objB), that returns true if objA is somewhere in the chain of prototypes for objB. So the test of obj instanceof Class can be rephrased as Class.prototype.isPrototypeOf(obj).
console.log(Animal2.prototype.isPrototypeOf(rabbit2)); // true

// It’s funny, but the Class constructor itself does not participate in the check! Only the chain of prototypes and Class.prototype matters.
// That can lead to interesting consequences when a prototype property is changed after the object is created.
function Rabbit4() {}
let rabbit3 = new Rabbit4();

// changed the prototype
Rabbit4.prototype = {};

// ...not a rabbit any more!
console.log(rabbit3 instanceof Rabbit4); // false
