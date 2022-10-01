"use strict";

// Copy an array/object

// Remember when we talked about Object.assign() in the past? It is possible to do the same thing with the spread syntax.

let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters, then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arr) == JSON.stringify(arrCopy)); // true

// are the arrays equal?
console.log(arr == arrCopy); //false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arrCopy); // [ 1, 2, 3 ]

// Note that it is possible to do the same thing to make a copy of an object:
let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters, then return the result in a new object

// do the objects have the same contents?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

// This way of copying an object is much shorter than let objCopy = Object.assign({}, obj) or for an array let arrCopy = Object.assign([], arr) so we prefer to use it whenever we can.
