"use strict";

// Smart function parameters

// There are times when a function has many parameters, most of which are optional. That’s especially true for user interfaces. Imagine a function that creates a menu. It may have a width, a height, a title, items list and so on.

// Here’s a bad way to write such function:

/* 
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}
*/

// In real-life, the problem is how to remember the order of arguments. Usually IDEs try to help us, especially if the code is well-documented, but still… Another problem is how to call a function when most parameters are ok by default.

// Like this?

/* 
// undefined where default values are fine
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
*/

// That’s ugly. And becomes unreadable when we deal with more parameters.

// Destructuring comes to the rescue! We can pass parameters as an object, and the function immediately destructurizes them into variables:

// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

// ...and it immediately expands it to variables
function showMenu1({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log(`${title} ${width} ${height}`); // My Menu 200 100
  console.log(items); // Item1, Item2
}

showMenu1(options);

// testing
let testObject = {
  name: "Juan",
  age: 24,
  characteristics: {
    height: 1.7,
    weight: "60kg",
  },
  games: ["nekopara1", "nekopara2"],
};

function showMyInfo({
  name = "John",
  age = 30,
  characteristics: { height = 1.5, weight = "70kg" },
  games: [game1 = "teaching-feeling", game2 = "aki-no-sora"],
}) {
  console.log(name, age, height, weight, game1, game2);
}

showMyInfo(testObject); // Juan 24 1.7 60kg nekopara1 nekopara2

// We can also use more complex destructuring with nested objects and colon mappings:
let options2 = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

function showMenu2({
  title = "Untitled",
  width: w = 100, // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2], // items first element goes to item1, second to item2
}) {
  console.log(`${title} ${w} ${h}`); // My Menu 100 200
  console.log(item1); // Item1
  console.log(item2); // Item2
}

showMenu2(options2);

// The full syntax is the same as for a destructuring assignment:

/* 
function({
  incomingProperty: varName = defaultValue
  ...
})
*/

// Then, for an object of parameters, there will be a variable varName for property incomingProperty, with defaultValue by default.

// Please note that such destructuring assumes that showMenu() does have an argument. If we want all values by default, then we should specify an empty object:
showMenu2({}); // ok, all values are default

//showMenu(); // this would give an error

// We can fix this by making {} the default value for the whole object of parameters:
function showMenu3({ title = "Menu", width = 100, height = 200 } = {}) {
  console.log(`${title} ${width} ${height}`);
}

showMenu3(); // Menu 100 200
// In the code above, the whole arguments object is {} by default, so there’s always something to destructurize.
