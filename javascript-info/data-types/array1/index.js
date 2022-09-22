"use strict";

// Arrays

/* 
Objects allow you to store keyed collections of values. That’s fine.

But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.

It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

There exists a special data structure named Array, to store ordered collections.
*/

// Declaration
// There are two syntaxes for creating an empty array:
let array1 = new Array();
let array2 = [];
// Almost all the time, the second syntax is used.

// We can supply initial elements in the brackets:
let fruits = ["Apple", "Orange", "Plum"];
// Array elements are numbered, starting with zero.
// We can get an element by its number in square brackets:
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum
// We can replace an element:
fruits[2] = "Pear";
console.log(fruits); // [ 'Apple', 'Orange', 'Pear' ]
// …Or add a new one to the array:
fruits[3] = "Banana";
console.log(fruits); // [ 'Apple', 'Orange', 'Pear', 'Banana' ]

// The total count of the elements in the array is its length:
console.log(fruits.length); // 4

// We can also use alert to show the whole array.
alert(fruits); // Apple,Orange,Pear,Banana

// An array can store elements of any type.
let array3 = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("Hello!");
  },
];

// get the object at index 1 and then show its name
alert(array3[1].name); // John
// get the function at index 3 and run it
array3[3](); // Hello!

// Trailing comma
// An array, just like an object, may end with a comma:
let fruits2 = [
  "Apple",
  "Orange",
  "Plum",
];
// The “trailing comma” style makes it easier to insert/remove items, because all lines become alike.
