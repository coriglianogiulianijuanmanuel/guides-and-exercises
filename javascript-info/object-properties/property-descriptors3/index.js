"use strict";

// Non-enumerable

// Now let’s add a custom toString to user.
// Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in. But if we add a toString of our own, then by default it shows up in for..in, like this:
let user1 = {
  name: "Juan",
  toString() {
    return this.name;
  },
};

// By default, both our properties are listed:
for (let key in user1) console.log(key); // name, toString

// If we don’t like it, then we can set enumerable:false. Then it won’t appear in a for..in loop, just like the built-in one:
Object.defineProperty(user1, "toString", {
  enumerable: false,
});

// Now our toString disappears:
for (let key in user1) console.log(key); // name

// Non-enumerable properties are also excluded from Object.keys:
console.log(Object.keys(user1)); // [ 'name' ]
