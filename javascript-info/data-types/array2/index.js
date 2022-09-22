"use strict";

// Get last elements with “at”

/* 
Let’s say we want the last element of the array.

Some programming languages allow to use negative indexes for the same purpose, like fruits[-1].

Although, in JavaScript it won’t work. The result will be undefined, because the index in square brackets is treated literally.
*/

// We can explicitly calculate the last element index and then access it: fruits[fruits.length - 1].
let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[fruits.length - 1]); // Plum
// A bit cumbersome, isn’t it? We need to write the variable name twice.

// Luckily, there’s a shorter syntax: fruits.at(-1):
console.log(fruits.at(-1)); // Plum
// same as fruits[fruits.length-1]

// In other words, arr.at(i):
// is exactly the same as arr[i], if i >= 0.
// for negative values of i, it steps back from the end of the array.
