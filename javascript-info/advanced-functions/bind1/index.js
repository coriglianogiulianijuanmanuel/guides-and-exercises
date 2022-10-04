"use strict";

// Function binding

// When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this". In this chapter we’ll see the ways to fix it.

// Losing “this”

// We’ve already seen examples of losing this. Once a method is passed somewhere separately from the object – this is lost. Here’s how it may happen with setTimeout:
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
// As we can see, the output shows not “John” as this.firstName, but undefined!
// That’s because setTimeout got the function user.sayHi, separately from the object.

// The last line can be rewritten as:
let f = user.sayHi;
setTimeout(f, 1000); // Hello, undefined!
// The method setTimeout in-browser is a little special: it sets this=window for the function call (for Node.js, this becomes the timer object, but doesn’t really matter here). So for this.firstName it tries to get window.firstName, which does not exist. In other similar cases, usually this just becomes undefined.

// The task is quite typical – we want to pass an object method somewhere else (here – to the scheduler) where it will be called. How to make sure that it will be called in the right context?
