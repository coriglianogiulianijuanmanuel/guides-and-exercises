"use strict";

// reverse
// The method arr.reverse reverses the order of elements in arr.
let arr1 = [1, 2, 3, 4, 5];

arr1.reverse();

console.log(arr1); // [ 5, 4, 3, 2, 1 ]
// It also returns the array arr1 after the reversal.

// split

// Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much more comfortable than a single string. How to get it?
// The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

// In the example below, we split by a comma followed by space:
let names1 = "Bilbo, Gandalf, Nazgul";

let arr2 = names1.split(", ");

console.log(arr2); // [ 'Bilbo', 'Gandalf', 'Nazgul' ]

// The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:
let names2 = "Bilbo, Gandalf, Nazgul";

let arr3 = names2.split(", ", 2);

console.log(arr3); // [ 'Bilbo', 'Gandalf' ]

// Split into letters
// The call to split(s) with an empty s would split the string into an array of letters:
let str1 = "test";

console.log(str1.split("")); // [ 't', 'e', 's', 't' ]

// join

// The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.
let arr4 = ["Bilbo", "Gandalf", "Nazgul"];

let str2 = arr4.join(", ");

console.log(str2); // "Bilbo, Gandalf, Nazgul"
