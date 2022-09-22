"use strict";

// If we want to use a symbol in an object literal {...}, we need square brackets around it.
let id1 = Symbol("id");

let user1 = {
  name: "Juan",
  age: 24,
  [id1]: 123, // not "id1": 123
};
// That’s because we need the value from the variable id1 as the key, not the string “id1”.

// Symbolic properties do not participate in for..in loop.
let id2 = Symbol("id");
let user2 = {
  name: "Juan",
  age: 24,
  [id2]: 123,
};

for (let key in user2) console.log(key); // name, age (no symbols)

// the direct access by the symbol works
console.log(`Direct: ${user2[id2]}`); // Direct: 123
// Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle. If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.

// In contrast, Object.assign copies both string and symbol properties:
let id3 = Symbol("id");
let user3 = {
  [id3]: 123,
};

let clone = Object.assign({}, user3);

console.log(clone[id3]); // 123
// There’s no paradox here. That’s by design. The idea is that when we clone an object or merge objects, we usually want all properties to be copied (including symbols like id).
