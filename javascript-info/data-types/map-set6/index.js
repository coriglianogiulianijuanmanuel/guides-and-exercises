"use strict";

function aclean1(arr) {
  let set = new Set();
  let result = [];

  for (let item of arr) {
    let itemSorted = item.toLowerCase().split("").sort().join("");

    if (!set.has(itemSorted)) {
      set.add(itemSorted);
      result.push(item);
    }
  }

  return result;
}

function aclean2(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

function aclean3(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean1(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

console.log(aclean2(arr));

console.log(aclean3(arr));
