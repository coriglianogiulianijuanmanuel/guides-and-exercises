"use strict";

// Function object, NFE

/* 
As we already know, a function in JavaScript is a value.

Every value in JavaScript has a type. What type is a function?

In JavaScript, functions are objects.

A good way to imagine functions is as callable “action objects”. We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.
*/

// The “name” property

// Function objects contain some useable properties.

// For instance, a function’s name is accessible as the “name” property:
function sayHi1() {
  console.log("Hi!");
}

console.log(sayHi1.name); // sayHi1

// What’s kind of funny, the name-assigning logic is smart. It also assigns the correct name to a function even if it’s created without one, and then immediately assigned:
let sayHi2 = function () {
  console.log("Hi!");
};

console.log(sayHi2.name); // sayHi2 (there's a name!)

// It also works if the assignment is done via a default value:
function f(sayHi3 = function () {}) {
  console.log(sayHi3.name); // sayHi3 (works!)
}

f();
// In the specification, this feature is called a “contextual name”. If the function does not provide one, then in an assignment it is figured out from the context.

// Object methods have names too:
let user = {
  sayHi() {
    // ...
  },

  sayBye: function () {
    // ...
  },
};

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

// There’s no magic though. There are cases when there’s no way to figure out the right name. In that case, the name property is empty, like here:

// function created inside array:
let array = [function () {}];

console.log(array[0].name); // <empty string>
// the engine has no way to set up the right name, so there is none

// In practice, however, most functions do have a name.
