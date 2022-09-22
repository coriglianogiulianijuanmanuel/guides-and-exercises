"use strict";

// reduce/reduceRight

// When we need to iterate over an array – we can use forEach, for or for..of.

// When we need to iterate and return the data for each element – we can use map.

// The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

/* 
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
*/

// The function is applied to all array elements one after another and “carries on” its result to the next call.

// Arguments:

// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// * item – is the current array item.
// * index – is its position.
// * array – is the array.

// As function is applied, the result of the previous function call is passed to the next one as the first argument.

// So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of reduce.

// Sounds complicated? The easiest way to grasp that is by example.

// Here we get a sum of an array in one line:
let arr1 = [1, 2, 3, 4, 5];

let result1 = arr1.reduce((sum, current) => sum + current, 0);

console.log(result1); // 15
// The function passed to reduce uses only 2 arguments, that’s typically enough.

// 1. On the first run, sum is the initial value (the last argument of reduce), equals 0, and current is the first array element, equals 1. So the function result is 1.
// 2. On the second run, sum = 1, we add the second array element (2) to it and return.
// 3. On the 3rd run, sum = 3 and we add one more element to it, and so on…

// We also can omit the initial value:
let arr2 = [1, 2, 3, 4, 5];

let result2 = arr2.reduce((sum, current) => sum + current); // removed initial value from reduce (no 0)

console.log(result2); // 15
// The result is the same. That’s because if there’s no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element.

// But such use requires an extreme care. If the array is empty, then reduce call without initial value gives an error.
let arr3 = [];

// arr3.reduce((sum, current) => sum + current);
// Error: Reduce of empty array with no initial value
// if the initial value existed, reduce would return it for the empty arr.
// so...
console.log(arr3.reduce((sum, current) => sum + current, 0)); // 0
// So it’s advised to always specify the initial value.

// The method arr.reduceRight does the same, but goes from right to left.
let arr4 = [1, 2, 3, 4, 5];

let result3 = arr4.reduceRight((sum, current) => sum + current);

console.log(result3); // 15
