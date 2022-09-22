"use strict";

// Searching in array
// Now let’s cover methods that search in an array.

// indexOf/lastIndexOf and includes

// The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:
// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.

// Usually these methods are used with only one argument: the item to search. By default, the search is from the beginning.
let array1 = [1, 0, false];

console.log(array1.indexOf(0)); // 1
console.log(array1.indexOf(false)); // 2
console.log(array1.indexOf(null)); // -1

console.log(array1.includes(1)); // true
// Please note that indexOf uses the strict equality === for comparison. So, if we look for false, it finds exactly false and not the zero.

// If we want to check if item exists in the array, and don’t need the exact index, then arr.includes is preferred.

// The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.
let fruits = ["Apple", "Orange", "Apple"];

console.log(fruits.indexOf("Apple")); // 0 (first Apple)
console.log(fruits.indexOf("Apple", 1)); // 2 (last Apple)
console.log(fruits.lastIndexOf("Apple")); // 2 (last Apple)

// The includes method handles NaN correctly
// A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:
let nanArray = [NaN];

console.log(nanArray.indexOf(NaN)); // -1 (wrong, should be 0)
console.log(nanArray.includes(NaN)); // true
// That’s because includes was added to JavaScript much later and uses the more up to date comparison algorithm internally.
