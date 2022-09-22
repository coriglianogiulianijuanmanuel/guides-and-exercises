"use strict";

// find and findIndex/findLastIndex

// Imagine we have an array of objects. How do we find an object with the specific condition? Here the arr.find(fn) method comes in handy.

/* 
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
*/

// The function is called for elements of the array, one after another:
// * item is the element.
// * index is its index.
// * array is the array itself.
// If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

// For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:
let users1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users1.find((element) => element.id == 1);

console.log(user); // { id: 1, name: 'John' }
// In real life arrays of objects is a common thing, so the find method is very useful.
// Note that in the example we provide to find the function item => item.id == 1 with one argument. That’s typical, other arguments of this function are rarely used.

// The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.
// The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.
let users2 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

// Find the index of the first John
console.log(users2.findIndex((element) => element.name == "John")); // 0
// Find the index of the last John
console.log(users2.findLastIndex((element) => element.name == "John")); // 3

// filter

// The find method looks for a single (first) element that makes the function return true.
// If there may be many, we can use arr.filter(fn).
// The syntax is similar to find, but filter returns an array of all matching elements:

/* 
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
*/

let users3 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// returns array of the first two users
let someUsers = users3.filter((item) => item.id < 3);

console.log(someUsers); // [ { id: 1, name: 'John' }, { id: 2, name: 'Pete' } ]
