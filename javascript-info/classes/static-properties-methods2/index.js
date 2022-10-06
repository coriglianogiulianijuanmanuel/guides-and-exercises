"use strict";

// Static properties

/* 
A recent addition

This is a recent addition to the language. Examples work in the recent Chrome.
*/

// Static properties are also possible, they look like regular class properties, but prepended by static:
class Article {
  static publisher = "Ilya Kantor";
}

console.log(Article.publisher); // Ilya Kantor

// That is the same as a direct assignment to Article:
class Article2 {}

Article2.publisher = "Ilya Kantor";

console.log(Article2.publisher); // Ilya Kantor

// Inheritance of static properties and methods

// Static properties and methods are inherited.

// For instance, Animal.compare and Animal.planet in the code below are inherited and accessible as Rabbit.compare and Rabbit.planet:
class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbits = [new Rabbit("White Rabbit", 10), new Rabbit("Black Rabbit", 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

console.log(Rabbit.planet); // Earth

// Now when we call Rabbit.compare, the inherited Animal.compare will be called.
// How does it work? Again, using prototypes. As you might have already guessed, extends gives Rabbit the [[Prototype]] reference to Animal.

// So, Rabbit extends Animal creates two [[Prototype]] references:

// 1. Rabbit function prototypally inherits from Animal function.
// 2. Rabbit.prototype prototypally inherits from Animal.prototype.

// As a result, inheritance works both for regular and static methods.
class Animal2 {}
class Rabbit2 extends Animal2 {}

// for statics
console.log(Rabbit2.__proto__ === Animal2); // true

// for regular methods
console.log(Rabbit2.prototype.__proto__ === Animal2.prototype); // true
