"use strict";

function filterRange(arr, a, b) {
  return arr.filter((element) => element >= a && element <= b);
}

let arr1 = [5, 3, 8, 1];
let arr2 = [1, 2, 3, 4];

let filtered1 = filterRange(arr1, 1, 4);
let filtered2 = filterRange(arr2, 1, 4);

console.log(filtered1);
console.log(filtered2);

console.log(arr1);
console.log(arr2);
