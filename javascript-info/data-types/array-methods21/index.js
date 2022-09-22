"use strict";

function unique1(arr) {
  let arrCopy = arr.slice();

  for (let i = 0; i < arrCopy.length; i++) {
    for (let s = i + 1; s < arrCopy.length; s++) {
      if (arrCopy[i] === arrCopy[s]) {
        arrCopy.splice(s, 1);
        s--;
      }
    }
  }

  return arrCopy;
}

function unique2(arr) {
  let result = [];

  for (let item of arr) {
    if (!result.includes(item)) result.push(item);
  }

  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique1(strings)); // Hare, Krishna, :-O
console.log(unique2(strings)); // Hare, Krishna, :-O
