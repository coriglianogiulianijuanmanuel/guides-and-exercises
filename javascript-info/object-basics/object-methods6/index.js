"use strict";

// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
// For instance, here arrow() uses this from the outer user.sayHi() method:
let user = {
  firstName: "Juan",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

user.sayHi(); // Juan
// That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context.

let user2 = {
  firstName: "Pepe",
  arrow: () => {
    console.log(this.firstName);
  },
};

user2.arrow(); // undefined
