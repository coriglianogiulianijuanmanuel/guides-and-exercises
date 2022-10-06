"use strict";

// for…in loop

// The for..in loop iterates over inherited properties too.
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys only returns own keys
console.log(Object.keys(rabbit)); // [ 'jumps' ]

// for..in loops over both own and inherited keys
for (let prop in rabbit) console.log(prop); // jumps, then eats

// If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.
// So we can filter out inherited properties (or do something else with them):

for (let prop in rabbit) {
  if (rabbit.hasOwnProperty(prop)) console.log(`${prop} (Own)`);
  else console.log(`${prop} (Inherited)`);
}

/*
Here we have the following inheritance chain: rabbit inherits from animal, that inherits from Object.prototype (because animal is a literal object {...}, so it’s by default), and then null above it.

Note, there’s one funny thing. Where is the method rabbit.hasOwnProperty coming from? We did not define it. Looking at the chain we can see that the method is provided by Object.prototype.hasOwnProperty. In other words, it’s inherited.

…But why does hasOwnProperty not appear in the for..in loop like eats and jumps do, if for..in lists inherited properties?

The answer is simple: it’s not enumerable. Just like all other properties of Object.prototype, it has enumerable:false flag. And for..in only lists enumerable properties. That’s why it and the rest of the Object.prototype properties are not listed.
*/

/* 
Almost all other key/value-getting methods ignore inherited properties

Almost all other key/value-getting methods, such as Object.keys, Object.values and so on ignore inherited properties.

They only operate on the object itself. Properties from the prototype are not taken into account.
*/
