"use strict";

// JSON.stringify

// The JSON (JavaScript Object Notation) is a general format to represent values and objects. It is described as in RFC 4627 standard. Initially it was made for JavaScript, but many other languages have libraries to handle it as well. So it’s easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.

// JavaScript provides methods:

// * JSON.stringify to convert objects into JSON.
// * JSON.parse to convert JSON back into an object.

// For instance, here we JSON.stringify a student:
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);

console.log(typeof json); // string

console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}
// The method JSON.stringify(student) takes the object and converts it into a string.
// The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or put into a plain data store.

// Please note that a JSON-encoded object has several important differences from the object literal:
// * Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
// * Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.

// JSON.stringify can be applied to primitives as well.

/* 
JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.
*/

console.log(JSON.stringify([1, 2, 3, 4, 5])); // [1,2,3,4,5]

// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify("string")); // "string"

// a number in JSON is just a number
console.log(JSON.stringify(123)); // 123

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify(null)); // null

// JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
// Namely:

// * Function properties (methods).
// * Symbolic keys and values.
// * Properties that store undefined.

let user = {
  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
};

console.log(JSON.stringify(user)); // {} (empty object)
// Usually that’s fine. If that’s not what we want, then soon we’ll see how to customize the process.

// The great thing is that nested objects are supported and converted automatically.
let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"],
  },
};

console.log(JSON.stringify(meetup)); // {"title":"Conference","room":{"number":23,"participants":["john","ann"]}}

// The important limitation: there must be no circular references.
let room = {
  number: 23,
};

let meetup2 = {
  title: "Conference",
  participants: ["john", "ann"],
};

meetup2.place = room; // meetup references room
room.occupiedBy = meetup2; // room references meetup

JSON.stringify(meetup2); // Error: Converting circular structure to JSON
// Here, the conversion fails, because of circular reference: room.occupiedBy references meetup, and meetup.place references room.
