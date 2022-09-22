"use strict";

// Add/remove items

/* 
We already know methods that add and remove items from the beginning or the end:

* arr.push(...items) – adds items to the end,
* arr.pop() – extracts an item from the end,
* arr.shift() – extracts an item from the beginning,
* arr.unshift(...items) – adds items to the beginning.

Here are a few others.
*/

// splice

// How to delete an element from the array? The arrays are objects, so we can try to use delete:
let array1 = ["I", "go", "home"];

delete array1[1]; // remove "go"

console.log(array1); // [ 'I', empty, 'home' ]
// The element was removed, but the array still has 3 elements.
// That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects. But for arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.

// So, special methods should be used.
// The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// The syntax is: arr.splice(start[, deleteCount, elem1, ..., elemN])
// It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

// Let’s start with the deletion:
let array2 = ["I", "study", "JavaScript"];

array2.splice(1, 1); // from index 1 remove 1 element

console.log(array2); // [ 'I', 'JavaScript' ]

// In the next example we remove 3 elements and replace them with the other two:
let array3 = ["I", "study", "JavaScript", "right", "now"];

array3.splice(0, 3, "Let's", "dance"); // remove 3 first elements and replace them with another

console.log(array3); // [ "Let's", 'dance', 'right', 'now' ]

// Here we can see that splice returns the array of removed elements:
let array4 = ["I", "study", "JavaScript", "right", "now"];

let removedElements = array4.splice(0, 2); // remove 2 first elements

console.log(removedElements); // [ 'I', 'study' ] <-- array of removed elements

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
let array5 = ["I", "study", "JavaScript"];

array5.splice(2, 0, "the", "language"); // from index 2, delete 0, then insert "the" and "language"

console.log(array5); // [ 'I', 'study', 'the', 'language', 'JavaScript' ]

// Negative indexes allowed
// Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:
let array6 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
array6.splice(-1, 0, 3, 4);

console.log(array6); // [ 1, 2, 3, 4, 5 ]

// slice

// The method arr.slice is much simpler than similar-looking arr.splice.

// The syntax is: arr.slice([start], [end])

// It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed. It’s similar to a string method str.slice, but instead of substrings it makes subarrays.
let array7 = ["t", "e", "s", "t", "i", "n", "g"];

console.log(array7.slice(0, 4)); // [ 't', 'e', 's', 't' ] (copy from 0 to 4)
console.log(array7.slice(-3)); // [ 'i', 'n', 'g' ] (copy from -3 till the end)

// We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.
let array8 = ["a", "b", "c"];

let array8Copy = array8.slice();

array8.splice(0, 1);

console.log(array8); // [ 'b', 'c' ]
console.log(array8Copy); // [ 'a', 'b', 'c' ]

// concat

// The method arr.concat creates a new array that includes values from other arrays and additional items.

// The syntax is: arr.concat(arg1, arg2...)

// It accepts any number of arguments – either arrays or values. The result is a new array containing items from arr, then arg1, arg2 etc. If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.
let array9 = [1, 2];

// create an array from: array9 and [3,4]
console.log(array9.concat([3, 4])); // [ 1, 2, 3, 4 ]

// create an array from: array9 and [3,4] and [5,6]
console.log(array9.concat([3, 4], [5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

// create an array from: array9 and [3,4], then add values 5 and 6
console.log(array9.concat([3, 4], 5, 6)); // [ 1, 2, 3, 4, 5, 6 ]

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:
let array10 = [1, 2];

let arrayLike = {
  0: "something",
  length: 1,
};

console.log(array10.concat(arrayLike)); // [ 1, 2, { '0': 'something', length: 1 } ]

// …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:
let array11 = [1, 2];

let arrayLike2 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

console.log(array11.concat(arrayLike2)); // [ 1, 2, 'something', 'else' ]
