"use strict";

// 2
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined

// The first call has this == rabbit, the other ones have this equal to Rabbit.prototype, because it’s actually the object before the dot.
// So only the first call shows Rabbit, other ones show undefined.
