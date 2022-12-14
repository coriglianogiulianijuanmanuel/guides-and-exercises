"use strict";

// F.prototype

// Remember, new objects can be created with a constructor function, like new F().
// If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.

/* 
Please note:

JavaScript had prototypal inheritance from the beginning. It was one of the core features of the language.

But in the old times, there was no direct access to it. The only thing that worked reliably was a "prototype" property of the constructor function, described in this chapter. So there are many scripts that still use it.
*/

// Please note that F.prototype here means a regular property named "prototype" on F. It sounds something similar to the term “prototype”, but here we really mean a regular property with this name.
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("Bugs Bunny"); // rabbit.__proto__ == animal

console.log(rabbit.eats); // true
// Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [[Prototype]] to animal".

// "prototype" --> regular property
// [[Prototype]] --> inheritance of rabbit from animal

// F.prototype only used at new F time

// F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object.
// If, after the creation, F.prototype property changes (F.prototype = <another object>), then new objects created by new F will have another object as [[Prototype]], but already existing objects keep the old one.
