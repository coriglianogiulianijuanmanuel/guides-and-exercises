"use strict";

// Default F.prototype, constructor property

// Every function has the "prototype" property even if we don’t supply it.
// The default "prototype" is an object with the only property constructor that points back to the function itself.

/* 
function Rabbit() {}

// default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

// We can check it:
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }
console.log(Rabbit.prototype.constructor); // [Function: Rabbit]
console.log(Rabbit.prototype.constructor == Rabbit); // true

// Naturally, if we do nothing, the constructor property is available to all rabbits through [[Prototype]]:
let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

console.log(rabbit.constructor == Rabbit); // true (from prototype)

// We can use constructor property to create a new object using the same constructor as the existing one.
function Dog(name) {
  this.name = name;
  console.log(name);
}

let dog1 = new Dog("Fatiga"); // Fatiga

let dog2 = new dog1.constructor("Rita"); // Rita

/* 
That’s handy when we have an object, don’t know which constructor was used for it (e.g. it comes from a 3rd party library), and we need to create another one of the same kind.

But probably the most important thing about "constructor" is that…

…JavaScript itself does not ensure the right "constructor" value.

Yes, it exists in the default "prototype" for functions, but that’s all. What happens with it later – is totally on us.

In particular, if we replace the default prototype as a whole, then there will be no "constructor" in it.
*/

// For instance:
function Fish() {}
Fish.prototype = {
  swims: true,
};

let fish = new Fish();
console.log(fish.constructor == Fish); // false

// So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:
function Cat() {}

// Not overwrite Cat.prototype totally
// just add to it
Cat.prototype.sleeps = true;
// the default Cat.prototype.constructor is preserved

// Or, alternatively, recreate the constructor property manually:
Fish.prototype = {
  swims: true,
  constructor: Fish,
};
// now constructor is also correct, because we added it
