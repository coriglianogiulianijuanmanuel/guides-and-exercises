"use strict";

// Overriding a method

// Now let’s move forward and override a method. By default, all methods that are not specified in class Rabbit are taken directly “as is” from class Animal. But if we specify our own method in Rabbit, such as stop() then it will be used instead:

/* 
class Rabbit extends Animal {
  stop() {
    // ...now this will be used for rabbit.stop()
    // instead of stop() from class Animal
  }
}
*/

// Usually, however, we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

// Classes provide "super" keyword for that.
// * super.method(...) to call a parent method.
// * super(...) to call a parent constructor (inside our constructor only).

// For instance, let our rabbit autohide when stopped:
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("Bugs Bunny");

rabbit.run(5); // Bugs Bunny runs with speed 5.
rabbit.stop(); // Bugs Bunny stands still. Bugs Bunny hides!
// Now Rabbit has the stop method that calls the parent super.stop() in the process.

// Arrow functions have no super

// As was mentioned in the chapter Arrow functions revisited, arrow functions do not have super. If accessed, it’s taken from the outer function. For instance:
class Dog extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
  }
}
// The super in the arrow function is the same as in stop(), so it works as intended. If we specified a “regular” function here, there would be an error:

// Unexpected super
setTimeout(function () {
  super.stop();
}, 1000);
