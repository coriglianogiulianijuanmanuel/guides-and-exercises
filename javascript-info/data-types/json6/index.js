"use strict";

// JSON.parse

// To decode a JSON-string, we need another method named JSON.parse.
// The syntax: let value = JSON.parse(str, [reviver]);

// str
// JSON-string to parse.

// reviver
// Optional function(key,value) that will be called for each (key, value) pair and can transform the value.

// For stringified array:
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers); // [ 0, 1, 2, 3 ]
console.log(numbers[2]); // 2

// Or for nested objects:
let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log(user); // { name: 'John', age: 35, isAdmin: false, friends: [ 0, 1, 2, 3 ] }
console.log(user.friends[2]); // 2

// The JSON may be as complex as necessary, objects and arrays can include other objects and arrays. But they must obey the same JSON format.
// Here are typical mistakes in hand-written JSON (sometimes we have to write it for debugging purposes):
/* 
let json = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;
*/

// Besides, JSON does not support comments. Adding a comment to JSON makes it invalid.
// There’s another format named JSON5, which allows unquoted keys, comments etc. But this is a standalone library, not in the specification of the language.
// The regular JSON is that strict not because its developers are lazy, but to allow easy, reliable and very fast implementations of the parsing algorithm.
