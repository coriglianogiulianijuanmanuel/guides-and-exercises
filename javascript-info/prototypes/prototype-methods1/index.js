"use strict";

// Prototype methods, objects without __proto__

//In the first chapter of this section, we mentioned that there are modern methods to setup a prototype.
// Setting or reading the prototype with obj.__proto__ is considered outdated and somewhat deprecated (moved to the so-called “Annex B” of the JavaScript standard, meant for browsers only).

// The modern methods to get/set a prototype are:
// * Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// * Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

// The only usage of __proto__, that’s not frowned upon, is as a property when creating a new object: { __proto__: ... }.
// Although, there’s a special method for this too:
// * Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.

// For instance:
let animal = {
  eats: true,
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal); // same as {__proto__: animal}

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

// The Object.create method is a bit more powerful, as it has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:
let dog = Object.create(animal, {
  barks: {
    value: true,
  },
  likesBones: {
    value: true,
  },
});

console.log(dog.barks); // true
console.log(dog.likesBones); // true

// The descriptors are in the same format as described in the chapter Property flags and descriptors. We can use Object.create to perform an object cloning more powerful than copying properties in for..in:
let dogClone = Object.create(
  Object.getPrototypeOf(dog),
  Object.getOwnPropertyDescriptors(dog)
);
// This call makes a truly exact copy of obj, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]].
