"use strict";

// Object.fromEntries: Object from Map

// We’ve just seen how to create Map from a plain object with Object.entries(obj).
// There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:
let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

console.log(prices); // { banana: 1, orange: 2, meat: 4 }
console.log(prices.banana); // 1

// We can use Object.fromEntries to get a plain object from Map.
// E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.
let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

let obj1 = Object.fromEntries(map.entries());

console.log(obj1); // { banana: 1, orange: 2, meat: 4 }
console.log(obj1.banana); // 1
// A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.
// We could also make it shorter:
let obj2 = Object.fromEntries(map); // omit .entries()
console.log(obj2); // { banana: 1, orange: 2, meat: 4 }
console.log(obj2.banana); // 1
// That’s the same, because Object.fromEntries expects an iterable object as the argument. Not necessarily an array. And the standard iteration for map returns same key/value pairs as map.entries(). So we get a plain object with same key/values as the map.
