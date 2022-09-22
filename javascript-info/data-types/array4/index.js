"use strict";

// Internals

/*
An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.

They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.

Remember, there are only eight basic data types in JavaScript. Array is an object and thus behaves like an object.
*/

// For instance, it is copied by reference:
let fruits1 = ["Banana"];

let arr = fruits1; // copy by reference (two variables reference the same array)

alert(arr === fruits1); // true

arr.push("Pear"); // modify the array by reference

alert(fruits1); // Banana,Pear - 2 items now

fruits1.shift();

alert(arr); // Pear - 1 item now

/*
…But what makes arrays really special is their internal representation. The engine tries to store its elements in the contiguous memory area, one after another, just as depicted on the illustrations in this chapter, and there are other optimizations as well, to make arrays work really fast.

But they all break if we quit working with an array as with an “ordered collection” and start working with it as if it were a regular object.
*/

// For instance, technically we can do this:
let fruits2 = []; // make an array

fruits2[99999] = 5; // assign a property with the index far greater than its length

fruits2.age = 24; // create a property with an arbitrary name

/* 
That’s possible, because arrays are objects at their base. We can add any properties to them.

But the engine will see that we’re working with the array as with a regular object. Array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.

The ways to misuse an array:

* Add a non-numeric property like arr.test = 5.
* Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
* Fill the array in the reverse order, like arr[1000], arr[999] and so on.

Please think of arrays as special structures to work with the ordered data. They provide special methods for that. Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way. And if you need arbitrary keys, chances are high that you actually require a regular object {}.
*/
