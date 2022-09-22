"use strict";

// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let videoGame = prompt("What game do you want to buy?", "doom");

let videoGamesList = {
  [videoGame]: 5, // the name of the property is taken from the variable videoGame
};

alert(videoGamesList.doom); // 5 if videoGame = "doom"
// The meaning of a computed property is simple: [videoGame] means that the property name should be taken from videoGame.
// So, if a visitor enters "doom", videoGamesList will become {doom: 5}.

// Essentially, that works the same as:
let videoGame2 = prompt("What game do you want to buy?", "doom");
let videoGamesList2 = {};

// take property name from the videoGame2 variable
videoGamesList2[videoGame2] = 5;

// We can use more complex expressions inside square brackets:
let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};
alert(bag.appleComputers); // 5

// Square brackets are much more powerful than dot notation. They allow any property names and variables. But they are also more cumbersome to write. So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.
