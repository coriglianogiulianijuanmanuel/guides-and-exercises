"use strict";

class Rabbit extends Object {
  constructor(name) {
    super(name); // need to call the parent constructor when inheriting
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

console.log(rabbit.hasOwnProperty("name")); // true
