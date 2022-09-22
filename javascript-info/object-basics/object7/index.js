"use strict";

// To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

/* 
for (key in object) {
  // executes the body for each key among object properties
}
*/

// For instance, let’s output all properties of user:
let user = {
  name: "Juan",
  age: 24,
  isAdmin: true,
};

for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user[key]); // Juan, 24, true
}
// Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here. Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.

let numbers = {
  num1: 1,
  num2: 2,
  num3: 3,
};

for (let prop in numbers) {
  console.log(`The double of the ${prop} value is ${numbers[prop] * 2}`);
}
