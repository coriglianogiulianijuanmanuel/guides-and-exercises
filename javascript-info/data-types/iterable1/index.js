"use strict";

// Iterables and array-likes
// * Iterables are objects that implement the Symbol.iterator method.
// * Array-likes are objects that have indexes and length, so they look like arrays.

// When we use JavaScript for practical tasks in a browser or any other environment, we may meet objects that are iterables or array-likes, or both.
// For instance, strings are both iterable (for..of works on them) and array-like (they have numeric indexes and length).
// But an iterable may be not array-like. And vice versa an array-like may be not iterable.
// Both iterables and array-likes are usually not arrays, they don’t have push, pop etc. That’s rather inconvenient if we have such an object and want to work with it as with an array.

// Array.from

// There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it. Then we can call array methods on it.
let arrayLike = {
  // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2,
};

let array1 = Array.from(arrayLike); // (*)
console.log(array1); // [ 'Hello', 'World' ]
console.log(array1.pop()); // World
// Array.from at the line (*) takes the object, examines it for being an iterable or array-like, then makes a new array and copies all items to it.

// The same happens for an iterable:
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

let array2 = Array.from(range);
console.log(array2); // [ 1, 2, 3, 4, 5 ]

// The full syntax for Array.from also allows us to provide an optional “mapping” function:
// Array.from(obj[, mapFn, thisArg])
// The optional second argument mapFn can be a function that will be applied to each element before adding it to the array, and thisArg allows us to set this for it.

// square each number
let array3 = Array.from(range, (num) => num * num);

console.log(array3); // [ 1, 4, 9, 16, 25 ]

// reverse the strings
let array4 = Array.from(arrayLike, (item) => {
  let reversedItem = "";

  for (let i = item.length - 1; i >= 0; i--) {
    reversedItem += item[i];
  }

  return reversedItem;
});

console.log(array4); // [ 'olleH', 'dlroW' ]

// Here we use Array.from to turn a string into an array of characters:
let str = "𝒳😂";

// splits str into array of characters
let chars = Array.from(str);

console.log(chars); // [ '𝒳', '😂' ]
console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
// Unlike str.split, it relies on the iterable nature of the string and so, just like for..of, correctly works with surrogate pairs.

/* 
let str = '𝒳😂';

let chars = []; // Array.from internally does the same loop
for (let char of str) {
  chars.push(char);
}

console.log(chars);
*/
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join("");
}

let str1 = "𝒳😂𩷶";

console.log(slice(str1, 1, 3)); // 😂𩷶

// the native method does not support surrogate pairs
console.log(str1.slice(1, 3)); // garbage (two pieces from different surrogate pairs)
