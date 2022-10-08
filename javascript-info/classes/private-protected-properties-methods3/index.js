"use strict";

// Private “#waterLimit”

/* 
A recent addition

This is a recent addition to the language. Not supported in JavaScript engines, or supported partially yet, requires polyfilling.
*/

// There’s a finished JavaScript proposal, almost in the standard, that provides language-level support for private properties and methods.
// Privates should start with #. They are only accessible from inside the class.

// For instance, here’s a private #waterLimit property and the water-checking private method #fixWaterAmount:
class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }
}

let coffeeMachine = new CoffeeMachine();

// can't access privates from outside of the class
// coffeeMachine.#fixWaterAmount(123); // Error
// coffeeMachine.#waterLimit = 1000; // Error

// On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.
// Private fields do not conflict with public ones. We can have both private #waterAmount and public waterAmount fields at the same time.

// For instance, let’s make waterAmount an accessor for #waterAmount:
class CoffeeMachine2 {
  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine2();

machine.waterAmount = 100;
console.log(machine.waterAmount); // 100
// console.log(machine.#waterAmount); // Error

// Unlike protected ones, private fields are enforced by the language itself. That’s a good thing.

// But if we inherit from CoffeeMachine2, then we’ll have no direct access to #waterAmount. We’ll need to rely on waterAmount getter/setter:

/* class MegaCoffeeMachine extends CoffeeMachine2 {
  method() {
    console.log(this.#waterAmount); // Error: can only access from CoffeeMachine2
  }
} */

// In many scenarios such limitation is too severe. If we extend a CoffeeMachine2, we may have legitimate reasons to access its internals. That’s why protected fields are used more often, even though they are not supported by the language syntax.

// Private fields are not available as this[name]
// Private fields are special. As we know, usually we can access fields using this[name]:

/* 
class User {
  ...
  sayHi() {
    let fieldName = "name";
    alert(`Hello, ${this[fieldName]}`);
  }
}
*/

// With private fields that’s impossible: this['#name'] doesn’t work. That’s a syntax limitation to ensure privacy.
