"use strict";

// There is one more syntax to create an array:
let array1 = new Array("Apple", "Orange", "Pear");

console.log(array1); // [ 'Apple', 'Orange', 'Pear' ]

// It’s rarely used, because square brackets [] are shorter. Also, there’s a tricky feature with it.
// If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.
let array2 = new Array(2);

console.log(array2[0]); // undefined, so there should be no items, right?

console.log(array2.length); // 2, so there are 2 empty items
// To avoid such surprises, we usually use square brackets, unless we really know what we’re doing.

// Multidimensional arrays

// Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]); // 5, the central element

// toString

// Arrays have their own implementation of toString method that returns a comma-separated list of elements.

// For instance:
let array3 = [1, 2, 3];

console.log(array3); // [ 1, 2, 3 ]
console.log(String(array3)); // 1,2,3
console.log(array3.toString()); // 1,2,3

// Also, let’s try this:
console.log([] + 1); // "1"
console.log([1] + 1); // "11"
console.log([1, 2] + 1); // "1,21"
// Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".
// When the binary plus "+" operator adds something to a string, it converts it to a string as well, so it looks like this:
console.log("" + 1); // "1"
console.log("1" + 1); // "11"
console.log("1,2" + 1); // "1,21"
