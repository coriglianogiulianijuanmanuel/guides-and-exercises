"use strict";

// Private and protected properties and methods

/* 
One of the most important principles of object oriented programming – delimiting internal interface from the external one.

That is “a must” practice in developing anything more complex than a “hello world” app.

To understand this, let’s break away from development and turn our eyes into the real world.

Usually, devices that we’re using are quite complex. But delimiting the internal interface from the external one allows to use them without problems.
*/

// A real-life example

/*
For instance, a coffee machine. Simple from outside: a button, a display, a few holes…And, surely, the result – great coffee! :)

But inside… (a picture from the repair manual)

A lot of details. But we can use it without knowing anything.

Coffee machines are quite reliable, aren’t they? We can use one for years, and only if something goes wrong – bring it for repairs.

The secret of reliability and simplicity of a coffee machine – all details are well-tuned and hidden inside.

If we remove the protective cover from the coffee machine, then using it will be much more complex (where to press?), and dangerous (it can electrocute).

As we’ll see, in programming objects are like coffee machines.

But in order to hide inner details, we’ll use not a protective cover, but rather special syntax of the language and conventions.
*/

// Internal and external interface

// In object-oriented programming, properties and methods are split into two groups:
// * Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
// * External interface – methods and properties, accessible also from outside the class.

/* 
If we continue the analogy with the coffee machine – what’s hidden inside: a boiler tube, heating element, and so on – is its internal interface.

An internal interface is used for the object to work, its details use each other. For instance, a boiler tube is attached to the heating element.

But from the outside a coffee machine is closed by the protective cover, so that no one can reach those. Details are hidden and inaccessible. We can use its features via the external interface.

So, all we need to use an object is to know its external interface. We may be completely unaware how it works inside, and that’s great.

That was a general introduction.
*/

// In JavaScript, there are two types of object fields (properties and methods):
// * Public: accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.
// * Private: accessible only from inside the class. These are for the internal interface.

/* 
In many other languages there also exist “protected” fields: accessible only from inside the class and those extending it (like private, but plus access from inheriting classes). They are also useful for the internal interface. They are in a sense more widespread than private ones, because we usually want inheriting classes to gain access to them.

Protected fields are not implemented in JavaScript on the language level, but in practice they are very convenient, so they are emulated.

Now we’ll make a coffee machine in JavaScript with all these types of properties. A coffee machine has a lot of details, we won’t model them to stay simple (though we could).
*/

// Protecting “waterAmount”

// Let’s make a simple coffee machine class first:
class CoffeeMachine {
  waterAmount = 0; // the amount of water inside

  constructor(power) {
    this.power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;

// Right now the properties waterAmount and power are public. We can easily get/set them from the outside to any value.

// Let’s change waterAmount property to protected to have more control over it. For instance, we don’t want anyone to set it below zero.

// Protected properties are usually prefixed with an underscore _.
// That is not enforced on the language level, but there’s a well-known convention between programmers that such properties and methods should not be accessed from the outside.

// So our property will be called _waterAmount:
class CoffeeMachine2 {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

// create the coffee machine
let coffeeMachine2 = new CoffeeMachine2(100);

// add water
coffeeMachine2.waterAmount = -10; // _waterAmount will become 0, not -10
console.log(coffeeMachine2.waterAmount); // 0

// Now the access is under control, so setting the water amount below zero becomes impossible.
