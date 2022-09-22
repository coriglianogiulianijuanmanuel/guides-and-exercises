"use strict";

// Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.

// For instance, if we’re working with user objects, that belong to a third-party code. We’d like to add identifiers to them. Let’s use a symbol key for it:
let user = {
  // belongs to another code
  name: "John",
};

let id = Symbol("id");

user[id] = 1;

console.log(user[id]); // 1, we can access the data using the symbol as the key

console.log(user); // { name: 'John', [Symbol(id)]: 1 }

// What’s the benefit of using Symbol("id") over a string "id"?
// As user objects belong to another codebase, it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally. The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.

// Also, imagine that another script wants to have its own identifier inside user, for its own purposes. Then that script can create its own Symbol("id"), like this:

/*
let id = Symbol("id");

user[id] = "Their id value";
*/

// There will be no conflict between our and their identifiers, because symbols are always different, even if they have the same name.

// …But if we used a string "id" instead of a symbol for the same purpose, then there would be a conflict:

/* 
let user = { name: "John" };

// Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id = "Their id value"
// Boom! overwritten by another script!
*/
