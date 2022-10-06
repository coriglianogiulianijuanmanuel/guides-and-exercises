"use strict";

// Overriding constructor

// With constructors it gets a little bit tricky.
// Until now, Rabbit did not have its own constructor.
// According to the specification, if a class extends another class and has no constructor, then the following “empty” constructor is generated:

/* 
class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}
*/

// As we can see, it basically calls the parent constructor passing it all the arguments. That happens if we don’t write a constructor of our own.

// Now let’s add a custom constructor to Rabbit. It will specify the earLength in addition to name:
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

/* class Rabbit extends Animal {
  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }
} */

// Doesn't work!
// let rabbit = new Rabbit("Bugs Bunny", 10); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

/*
Whoops! We’ve got an error. Now we can’t create rabbits. What went wrong?

The short answer is: Constructors in inheriting classes must call super(...), and (!) do it before using this.

…But why? What’s going on here? Indeed, the requirement seems strange.

Of course, there’s an explanation. Let’s get into details, so you’ll really understand what’s going on.

In JavaScript, there’s a distinction between a constructor function of an inheriting class (so-called “derived constructor”) and other functions. A derived constructor has a special internal property [[ConstructorKind]]:"derived". That’s a special internal label.

That label affects its behavior with new:
* When a regular function is executed with new, it creates an empty object and assigns it to this.
* But when a derived constructor runs, it doesn’t do this. It expects the parent constructor to do this job.

So a derived constructor must call super in order to execute its parent (base) constructor, otherwise the object for this won’t be created. And we’ll get an error.
*/

// For the Rabbit constructor to work, it needs to call super() before using this, like here:
class Rabbit2 extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}

// now fine
let rabbit2 = new Rabbit2("Bugs Bunny", 10);
console.log(rabbit2.name); // Bugs Bunny
console.log(rabbit2.earLength); // 10
