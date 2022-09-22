"use strict";

// Array destructuring

// we have an array with the name and surname
let array1 = ["Juan", "Manuel"];

// destructuring assignment
// sets firstName = array1[0]
// and secondName = array1[1]
let [firstName1, secondName1] = array1;

console.log(firstName1); // Juan
console.log(secondName1); // Manuel

// Now we can work with variables instead of array members.

// It looks great when combined with split or other array-returning methods:
let [firstName2, secondName2] = "Juan Manuel".split(" ");
console.log(firstName2); // Juan
console.log(secondName2); // Manuel

// “Destructuring” does not mean “destructive”.
// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.
// It’s just a shorter way to write:

// let [firstName3, secondName3] = array1;
let firstName3 = array1[0];
let secondName3 = array1[1];

// Ignore elements using commas
// Unwanted elements of the array can also be thrown away via an extra comma:

// second element is not needed
let array2 = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

let [firstName4, , title] = array2;

console.log(title); // Consul
// In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items is also skipped (as there are no variables for them).

// Works with any iterable on the right-side
// …Actually, we can use it with any iterable, not only arrays:
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

console.log(a, b, c); // a b c
console.log(one, two, three); // 1 2 3
// That works, because internally a destructuring assignment works by iterating over the right value. It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values.

// Assign to anything at the left-side
// We can use any “assignables” on the left side. For instance, an object property:
let user1 = {};

[user1.firstName, user1.secondName] = "Juan Manuel".split(" ");

console.log(user1.firstName); // Juan
console.log(user1.secondName); // Manuel

// Looping with .entries()
// We can use Object.entries(obj) with destructuring to loop over keys-and-values of an object:
let user2 = {
  name: "John",
  age: 30,
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user2)) {
  console.log(`${key}:${value}`); // name:John, age:30
}

// The similar code for a Map is simpler, as it’s iterable:
let user3 = new Map();
user3.set("name", "John").set("age", 30);

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user3) {
  console.log(`${key}:${value}`); // name:John, age:30
}

// Swap variables trick
// There’s a well-known trick for swapping values of two variables using a destructuring assignment:
let guest = "Pepe";
let admin = "Juan";

[guest, admin] = [admin, guest];

console.log(guest); // Juan
console.log(admin); // Pepe
// Here we create a temporary array of two variables and immediately destructure it in swapped order. We can swap more than two variables this way.
let testUser1 = "Peepo";
let testUser2 = "Linda";
let testUser3 = "Kiko";
[testUser1, testUser2, testUser3] = [testUser3, testUser2, testUser1];
console.log(testUser1); // Kiko
console.log(testUser2); // Linda
console.log(testUser3); // Peepo

// The rest ‘…’

// Usually, if the array is longer than the list at the left, the “extra” items are omitted. If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
// rest is array of items, starting from the 3rd one

console.log(name1); // Julius
console.log(name2); // Caesar
console.log(rest); // [ 'Consul', 'of the Roman Republic' ]
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

// The value of rest is the array of the remaining array elements.
// We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment.
let [, number2, ...otherNumbers] = [1, 2, 3, 4, 5];

console.log(number2); // 2
console.log(otherNumbers); // [ 3, 4, 5 ]

// Default values

// If the array is shorter than the list of variables at the left, there’ll be no errors. Absent values are considered undefined:
let [thing1, thing2] = [];

console.log(thing1, thing2); // undefined undefined

// If we want a “default” value to replace the missing one, we can provide it using =:
let [thing3 = "Apple", thing4 = "Orange"] = ["Pear"];

console.log(thing3, thing4); // Pear (from array) Orange (default used)

// Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.
// For instance, here we use the prompt function for two defaults:

// runs only prompt for surname
let [name = prompt("name?"), surname = prompt("surname?")] = ["Julius"];

console.log(name); // Julius (from array)
console.log(surname); // whatever prompt gets
// Please note: the prompt will run only for the missing value (surname).
