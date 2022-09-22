"use strict";

// In real code, we often use existing variables as values for property names.
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makeUser("Juan", 24);
console.log(user); // { name: 'Juan', age: 24 }
// In the example above, properties have the same names as variables.

// The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.
// Instead of name:name we can just write name, like this:
function makeUser2(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
  };
}

let user2 = makeUser2("Juan", 24);
console.log(user); // { name: 'Juan', age: 24 }

// We can use both normal properties and shorthands in the same object:
let user3 = {
  name, // same as name:name
  age: 24,
};
