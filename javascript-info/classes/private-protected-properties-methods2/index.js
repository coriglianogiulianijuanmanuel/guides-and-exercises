"use strict";

// Read-only “power”

// For power property, let’s make it read-only. It sometimes happens that a property must be set at creation time only, and then never modified.
// That’s exactly the case for a coffee machine: power never changes.
// To do so, we only need to make getter, but not the setter:

class CoffeeMachine {
  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

// coffeeMachine.power = 25; // TypeError: Cannot set property power of #<CoffeeMachine> which has only a getter at Object.<anonymous>

// Getter/setter functions
// Here we used getter/setter syntax, but most of the time get.../set... functions are preferred, like this:
class CoffeeMachine2 {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

let coffeeMachine2 = new CoffeeMachine2(100);
coffeeMachine2.setWaterAmount(200);
console.log(coffeeMachine2.getWaterAmount()); // 200

// That looks a bit longer, but functions are more flexible. They can accept multiple arguments (even if we don’t need them right now). On the other hand, get/set syntax is shorter, so ultimately there’s no strict rule, it’s up to you to decide.

// Protected fields are inherited
// If we inherit class MegaMachine extends CoffeeMachine, then nothing prevents us from accessing this._waterAmount or this._power from the methods of the new class.
// So protected fields are naturally inheritable. Unlike private ones that we’ll see below.

class MegaMachine extends CoffeeMachine2 {}

let coffeeMachine3 = new MegaMachine(250);
coffeeMachine3.setWaterAmount(200);
console.log(coffeeMachine3._power); // 250
console.log(coffeeMachine3._waterAmount); // 200
