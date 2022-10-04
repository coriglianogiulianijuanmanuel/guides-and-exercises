"use strict";

// Arrows have no “arguments”

// Arrow functions also have no arguments variable. That’s great for decorators, when we need to forward a call with the current this and arguments.

// For instance, defer(f, ms) gets a function and returns a wrapper around it that delays the call by ms milliseconds:
function defer1(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  console.log("Hello, " + who);
}

let sayHiDeferred = defer1(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds

// The same without an arrow function would look like:

function defer2(f, ms) {
  return function (...args) {
    let ctx = this;
    setTimeout(function () {
      return f.apply(ctx, args);
    }, ms);
  };
}
// Here we had to create additional variables args and ctx so that the function inside setTimeout could take them.
