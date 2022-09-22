"use strict";

// One of the oldest ways to cycle array items is the for loop over indexes:
let fruits1 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i]);
}

// But for arrays there is another form of loop, for..of:
for (let fruit of fruits1) {
  console.log(fruit);
}
// iterates over array elements
// The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

// Technically, because arrays are objects, it is also possible to use for..in:
for (let key in fruits1) {
  console.log(fruits1[key]); // Apple, Orange, Pear
}
// But that’s actually a bad idea. There are potential problems with it:
// 1. The loop for..in iterates over all properties, not only the numeric ones.

// There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

// 2. The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

// Generally, we shouldn’t use for..in for arrays.

// A word about “length”

// The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

// For instance, a single element with a large index gives a big length:
let fruits2 = [];

fruits2[123] = "Apple";

console.log(fruits2.length); // 124
// Note that we usually don’t use arrays like that.

// Another interesting thing about the length property is that it’s writable
// If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:
let arr = [1, 2, 3, 4, 5];

arr.length = 6;
console.log(arr.length);
console.log(arr); // [ 1, 2, 3, 4, 5, empty ]

arr.length = 3; // truncate to 3 elements
console.log(arr); // [ 1, 2, 3 ]

arr.length = 5; // return length back
console.log(arr[3]); // undefined, the values do not return

// So, the simplest way to clear the array is: arr.length = 0;.
arr.length = 0;
console.log(arr); // []
