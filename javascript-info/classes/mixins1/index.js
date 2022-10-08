"use strict";

// Mixins

// In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an object. And a class may extend only one other class.
// But sometimes that feels limiting. For instance, we have a class StreetSweeper and a class Bicycle, and want to make their mix: a StreetSweepingBicycle.
// Or we have a class User and a class EventEmitter that implements event generation, and we’d like to add the functionality of EventEmitter to User, so that our users can emit events.

// There’s a concept that can help here, called “mixins”. As defined in Wikipedia, a mixin is a class containing methods that can be used by other classes without a need to inherit from it.
// In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.

// A mixin example

// The simplest way to implement a mixin in JavaScript is to make an object with useful methods, so that we can easily merge them into a prototype of any class.

// For instance here the mixin sayHiMixin is used to add some “speech” for User:

// mixin
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },

  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Juan").sayHi(); // Hello Juan

// There’s no inheritance, but a simple method copying. So User may inherit from another class and also include the mixin to “mix-in” the additional methods, like this:

/* 
class User extends Person {
  // ...
}

Object.assign(User.prototype, sayHiMixin);
*/

// Mixins can make use of inheritance inside themselves.
// For instance, here sayHiMixin2 inherits from sayMixin:
let sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};

let sayHiMixin2 = {
  __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)

  sayHi() {
    // call parent method
    super.say(`Hello ${this.name}`); // (*)
  },

  sayBye() {
    super.say(`Bye ${this.name}`); // (*)
  },
};

class User2 {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User2.prototype, sayHiMixin2);

// now User2 can say hi
new User2("Juan").sayHi(); // Hello Juan
// Please note that the call to the parent method super.say() from sayHiMixin2 (at lines labelled with (*)) looks for the method in the prototype of that mixin, not the class.

// That’s because methods sayHi and sayBye were initially created in sayHiMixin. So even though they got copied, their [[HomeObject]] internal property references sayHiMixin, as shown in the picture above.
// As super looks for parent methods in [[HomeObject]].[[Prototype]], that means it searches sayHiMixin.[[Prototype]].
