"use strict";

// Class inheritance

// Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the existing.

// The “extends” keyword

// Let’s say we have class Animal:
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

// …And we would like to create another class Rabbit.
// As rabbits are animals, Rabbit class should be based on Animal, have access to animal methods, so that rabbits can do what “generic” animals can do.

// The syntax to extend another class is: class Child extends Parent.

// Let’s create class Rabbit that inherits from Animal:
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("Bugs Bunny");

rabbit.run(5); // Bugs Bunny runs with speed 5.
rabbit.hide(); // Bugs Bunny hides!

// Object of Rabbit class have access both to Rabbit methods, such as rabbit.hide(), and also to Animal methods, such as rabbit.run().
// Internally, extends keyword works using the good old prototype mechanics. It sets Rabbit.prototype.[[Prototype]] to Animal.prototype. So, if a method is not found in Rabbit.prototype, JavaScript takes it from Animal.prototype.

// For instance, to find rabbit.run method, the engine checks:

// 1. The rabbit object (has no run).
// 2. Its prototype, that is Rabbit.prototype (has hide, but not run).
// 3. Its prototype, that is (due to extends) Animal.prototype, that finally has the run method.

// As we can recall from the chapter Native prototypes, JavaScript itself uses prototypal inheritance for built-in objects. E.g. Date.prototype.[[Prototype]] is Object.prototype. That’s why dates have access to generic object methods.

// Any expression is allowed after extends

// Class syntax allows to specify not just a class, but any expression after extends.

// For instance, a function call that generates the parent class:
function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

class User extends f("Hello!") {}

new User().sayHi(); // Hello!

// Here class User inherits from the result of f("Hello").
// That may be useful for advanced programming patterns when we use functions to generate classes depending on many conditions and can inherit from them.
