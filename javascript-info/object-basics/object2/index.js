"use strict";

// For multiword properties, the dot access doesn’t work. The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).

// There’s an alternative “square bracket notation” that works with any string:
let user = {};

// set
user["likes anime"] = true;
console.log(user); // { 'likes anime': true }

// get
console.log(user["likes anime"]); // true

// delete
delete user["likes anime"]; // delete
console.log(user); // {}

// Please note that the string inside the brackets is properly quoted (any type of quotes will do).

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:
let key = "likes videogames";
user[key] = true; // this is the same as user['likes videogames'] = true
console.log(user); // { 'likes videogames': true }
console.log(user["likes videogames"]); // true
// Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

let user2 = {
  name: "Juan",
  age: 24,
};

let key2 = prompt("What do you want to know about the user?", "name");

// access by variable
alert(user2[key2]); // Juan (if enter "name")
// The dot notation cannot be used in a similar way:
alert(user2.key2); // undefined
