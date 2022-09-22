"use strict";

// Transform an array

// Let’s move on to methods that transform and reorder an array.

// map
// The arr.map method is one of the most useful and often used. It calls the function for each element of the array and returns the array of results.

/* 
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
*/

// For instance, here we transform each element into its length:
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths); // [ 5, 7, 6 ]

// Here we reverse each element
let reversed = ["Bilbo", "Gandalf", "Nazgul"].map((item) => {
  let reversedItem = "";

  for (let i = item.length - 1; i >= 0; i--) {
    reversedItem += item[i];
  }

  return reversedItem;
});

console.log(reversed); // [ 'obliB', 'fladnaG', 'lugzaN' ]

// sort(fn)

// The call to arr.sort() sorts the array in place, changing its element order. It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

let arr1 = [1, 2, 15];

// the method reorders the content of arr
arr1.sort();

console.log(arr1); // [ 1, 15, 2 ]
/* 
Did you notice anything strange in the outcome?

The order became 1, 15, 2. Incorrect. But why?

The items are sorted as strings by default.

Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".
*/

// To use our own sorting order, we need to supply a function as the argument of arr.sort().
// The function should compare two arbitrary values and return:
function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

// For instance, to sort as numbers:
let arr2 = [1, 2, 15];

arr2.sort((a, b) => {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
});

console.log(arr2); // [ 1, 2, 15 ]
/* 
Now it works as intended.

Let’s step aside and think what’s happening. The arr can be array of anything, right? It may contain numbers or strings or objects or whatever. We have a set of some items. To sort it, we need an ordering function that knows how to compare its elements. The default is a string order.

The arr.sort(fn) method implements a generic sorting algorithm. We don’t need to care how it internally works (an optimized quicksort or Timsort most of the time). It will walk the array, compare its elements using the provided function and reorder them, all we need is to provide the fn which does the comparison.

The algorithm may compare an element with multiple others in the process, but it tries to make as few comparisons as possible.
*/

// A comparison function may return any number
// Actually, a comparison function is only required to return a positive number to say “greater” and a negative number to say “less”.
// That allows to write shorter functions:
let arr3 = [1, 2, 15];

arr3.sort((a, b) => a - b);

console.log(arr3); // [ 1, 2, 15 ]

// Use localeCompare for strings
// Remember strings comparison algorithm? It compares letters by their codes by default.
// For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.
// For example, let’s sort a few countries in German:
let countries = ["Österreich", "Andorra", "Vietnam"];
console.log(countries.sort((a, b) => (a > b ? 1 : -1))); // [ 'Andorra', 'Vietnam', 'Österreich' ]
console.log(countries.sort((a, b) => a.localeCompare(b))); // [ 'Andorra', 'Österreich', 'Vietnam' ]
