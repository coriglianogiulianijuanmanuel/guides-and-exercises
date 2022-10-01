"use strict";

// Spread syntax

// We’ve just seen how to get an array from the list of parameters. But sometimes we need to do exactly the reverse.

// For instance, there’s a built-in function Math.max that returns the greatest number from a list:
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// Now let’s say we have an array [1, 2, 3, 4, 5]. How do we call Math.max with it?

// Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:
let arr = [1, 2, 3, 4, 5];

console.log(Math.max(arr)); // NaN
// And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be unsure how many there are. As our script executes, there could be a lot, or there could be none. And that would get ugly.

// Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.
// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
console.log(Math.max(...arr)); // 5 (spread turns array into a list of arguments)

// We also can pass multiple iterables this way:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2)); // 8

// We can even combine the spread syntax with normal values:
console.log(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

// Also, the spread syntax can be used to merge arrays:
let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4];

console.log(merged);
/* 
[
  0, 3, 5,  1,
  2, 8, 9, 15
]

(0, then arr, then 2, then arr2)
*/

// In the examples above we used an array to demonstrate the spread syntax, but any iterable will do.
// For instance, here we use the spread syntax to turn the string into array of characters:

let str = "Hello";

console.log([...str]); // [ 'H', 'e', 'l', 'l', 'o' ]
// The spread syntax internally uses iterators to gather elements, the same way as for..of does.
// So, for a string, for..of returns characters and ...str becomes "H","e","l","l","o". The list of characters is passed to array initializer [...str].

// For this particular task we could also use Array.from, because it converts an iterable (like a string) into an array:
console.log(Array.from(str)); // [ 'H', 'e', 'l', 'l', 'o' ]
/* 
The result is the same as [...str].

But there’s a subtle difference between Array.from(obj) and [...obj]:

* Array.from operates on both array-likes and iterables.
* The spread syntax works only with iterables.

So, for the task of turning something into an array, Array.from tends to be more universal.
*/
