"use strict";

// Use case: additional data

// The main area of application for WeakMap is an additional data storage.

// If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

// We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.

/* 
weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically
*/

// For instance, we have code that keeps a visit count for users. The information is stored in a map: a user object is the key and the visit count is the value. When a user leaves (its object gets garbage collected), we don’t want to store their visit count anymore.

// visitsCount.js
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

// And here’s another part of the code, maybe another file using it:
// main.js
let john = { name: "John" };

countUser(john); // count his visits

// later john leaves us
john = null;

// Now we don’t have to clean visitsCountMap. After john object becomes unreachable, by all means except as a key of WeakMap, it gets removed from memory, along with the information by that key from WeakMap.
