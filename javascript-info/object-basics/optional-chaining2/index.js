"use strict";

// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

// Further in this article, for brevity, we’ll be saying that something “exists” if it’s not null and not undefined.

// In other words, value?.prop:
// works as value.prop, if value exists
// otherwise (when value is undefined/null) it returns undefined.

//Here’s the safe way to access user.address.street using ?.:
let user = {}; // user has no address

console.log(user?.address?.street); // undefined (no error)
// The code is short and clean, there’s no duplication at all.

// Here’s an example with document.querySelector:
let html = document.querySelector(".elem")?.innerHTML; // will be undefined, if there's no element

// Reading the address with user?.address works even if user object doesn’t exist:
let user2 = null;

console.log(user2?.address); // undefined
console.log(user2?.address.street); // undefined

// Please note: the ?. syntax makes optional the value before it, but not any further.
// E.g. in user?.address.street.name the ?. allows user to safely be null/undefined (and returns undefined in that case), but that’s only for user. Further properties are accessed in a regular way. If we want some of them to be optional, then we’ll need to replace more . with ?..

/* 
We should use ?. only where it’s ok that something doesn’t exist.

For example, if according to our code logic user object must exist, but address is optional, then we should write user.address?.street, but not user?.address?.street.

Then, if user happens to be undefined, we’ll see a programming error about it and fix it. Otherwise, if we overuse ?., coding errors can be silenced where not appropriate, and become more difficult to debug.
*/

// If there’s no variable user at all, then user?.anything triggers an error:

// ReferenceError: user is not defined
user3?.address;
//The variable must be declared (e.g. let/const/var user or as a function parameter). The optional chaining works only for declared variables.
