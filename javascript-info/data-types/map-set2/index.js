"use strict";

// Iteration over Map

// For looping over a map, there are 3 methods:
// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
// the same as 'for (let entry of recipeMap.entries()) { console.log(entry); }'
for (let entry of recipeMap) {
  console.log(entry); // [ 'cucumber', 500 ], [ 'tomatoes', 350 ], [ 'onion', 50 ]
}

// The insertion order is used
// The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.

// Besides that, Map has a built-in forEach method, similar to Array:
// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500, tomatoes: 350, onion: 50
});

// Object.entries: Map from Object

// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
let map1 = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

console.log(map1); // Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }
console.log(map1.get("1")); // "str1"
console.log(map1.get(1)); // "num1"
console.log(map1.get(true)); // "bool1"

// If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
// So we can create a map from an object like this:
let obj = {
  name: "John",
  age: 30,
};

let map2 = new Map(Object.entries(obj));

console.log(map2.get("name")); // "John"
console.log(map2); // Map(2) { 'name' => 'John', 'age' => 30 }
// Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.
