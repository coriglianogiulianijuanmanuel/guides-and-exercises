"use strict";

// There exists a shorter syntax for methods in an object literal:

let user1 = {
  sayHi: function () {
    console.log("Hello!");
  },
};

let user2 = {
  sayHi() {
    console.log("Hello!");
  },
};
// method shorthand in user2 looks better, right?
// As demonstrated, we can omit "function" and just write sayHi().

// To tell the truth, the notations are not fully identical. There are subtle differences related to object inheritance (to be covered later), but for now they do not matter. In almost all cases, the shorter syntax is preferred.
