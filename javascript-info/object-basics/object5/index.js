"use strict";

// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc. But for an object property, there’s no such restriction:
let obj = {
  for: 1,
  let: 2,
  return: 3,
  // these properties are all right
};

console.log(obj.for + obj.let + obj.return); // 6
// In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers).

// Other types are automatically converted to strings.
let obj2 = {
  0: 0, // same as "0": 0, a number 0 becomes a string "0" when used as a property key
  true: 1,
  false: 2,
  1.5: "test",
};

console.log(obj2); // { '0': 0, true: 1, false: 2, '1.5': 'test' }

// both access the same property (the number 0 is converted to string "0")
console.log(obj2["0"]); // 0
console.log(obj2[0]); // 0, same property

// There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:
let obj3 = {};
obj3.__proto__ = 5; // assign a number
alert(obj3.__proto__); // [object Object] - the value is an object, didn't work as intended
// As we see from the code, the assignment to a primitive 5 is ignored.
