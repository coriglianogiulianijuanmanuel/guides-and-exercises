"use strict";

// Nested destructuring

// If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

// In the code below options has another object in the property size and an array in the property items. The pattern on the left side of the assignment has the same structure to extract values from them:
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { width, height }, // put size here
  items: [item1, item2], // assign items here
  title = "Menu", // not present in the object (default value is used)
} = options;

console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut
console.log(title); // Menu
// All properties of options object except extra that is absent in the left part, are assigned to corresponding variables. Finally, we have width, height, item1, item2 and title from the default value.
//Note that there are no variables for size and items, as we take their content instead.

let testObject = {
  name: "Juan",
  age: 24,
  characteristics: {
    height: 1.7,
    weight: "60kg",
  },
  games: ["nekopara1", "nekopara2"],
};

let {
  name,
  age,
  characteristics: { height: h, weight },
  games: [game1, game2],
} = testObject;

console.log(name, age, h, weight, game1, game2); // Juan 24 1.7 60kg nekopara1 nekopara2
