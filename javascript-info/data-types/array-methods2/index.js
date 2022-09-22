"use strict";

// Iterate: forEach

// The arr.forEach method allows to run a function for every element of the array.

/* 
arr.forEach(function(item, index, array) {
  // ... do something with item
});
*/

// For instance, this shows each element of the array:
["Bilbo", "Gandalf", "Nazgul"].forEach((element) => {
  console.log(element);
});

// And this code is more elaborate about their positions in the target array:
["Bilbo", "Gandalf", "Nazgul"].forEach((element, index, array) => {
  console.log(`${element} is at index ${index} in ${array}`);
});

[1, 2, 3, 4, 5].forEach((element, index) => {
  console.log(`The double of ${element} (index ${index}), is ${element * 2}`);
});

// The result of the function (if it returns any) is thrown away and ignored.
