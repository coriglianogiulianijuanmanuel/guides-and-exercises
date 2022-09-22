"use strict";

// Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?
// The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order.

// As an example, let’s consider an object with the phone codes:
let codes = {
  49: "Germany", //here, the property names should be strings, but prettier make them numbers
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}
// The phone codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49.

// Integer properties
// The “integer property” term here means a string that can be converted to-and-from an integer without a change.
// So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:
// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
console.log(String(Math.trunc(Number("49")))); // "49", same, integer property
console.log(String(Math.trunc(Number("+49")))); // "49", not same "+49" ⇒ not integer property
console.log(String(Math.trunc(Number("1.2")))); // "1", not same "1.2" ⇒ not integer property

// …On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:
let user = {
  name: "John",
  surname: "Smith",
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  console.log(prop); // name, surname, age
}

// So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.
let codesFixed = {
  "+49": "Germany", //here, the property names should be strings, but prettier make them numbers
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codesFixed) {
  console.log(+code); // 49, 41, 44, 1
  // here we add a + to make them numbers
}
