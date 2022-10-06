"use strict";

// 1
let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // true

delete rabbit.jumps;

console.log(rabbit.jumps); // null

delete animal.jumps;

console.log(rabbit.jumps); // undefined

// 2
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined

/* 
In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. They remember where the property was found and reuse it in the next request.

For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there. They are also smart enough to update internal caches if something changes, so that optimization is safe.
*/

// 3
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
    // another solution: assign to this.stomach instead of this.stomach.push
    // this.stomach = [food];
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// Speedy one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// Lazy one's stomach is empty
alert(lazy.stomach); // <nothing>

// As a common solution, all properties that describe the state of a particular object, like stomach above, should be written into that object. That prevents such problems.
