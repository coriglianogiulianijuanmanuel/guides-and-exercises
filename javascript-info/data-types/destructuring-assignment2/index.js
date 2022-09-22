"use strict";

// Object destructuring

// The destructuring assignment also works with objects. The basic syntax is: let {var1, var2} = {var1:…, var2:…}
// We should have an existing object on the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in {...}.
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { title, width, height } = options;

console.log(title); // "Menu"
console.log(width); // 100
console.log(height); // 200
// Properties options.title, options.width and options.height are assigned to the corresponding variables.

// The order does not matter. This works too:

// changed the order in let {...}
let { profession, age, name } = {
  name: "Juan",
  age: 24,
  profession: "Programmer",
};

console.log(name); // "Juan"
console.log(age); // 24
console.log(profession); // "Programmer"
