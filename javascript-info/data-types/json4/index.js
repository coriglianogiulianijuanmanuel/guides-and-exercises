"use strict";

// Formatting: space

// The third argument of JSON.stringify(value, replacer, space) is the number of spaces to use for pretty formatting.
// Previously, all stringified objects had no indents and extra spaces. That’s fine if we want to send an object over a network. The space argument is used exclusively for a nice output.

// Here space = 2 tells JavaScript to show nested objects on multiple lines, with indentation of 2 spaces inside an object:
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user, null, 2));
/* 
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

// The third argument can also be a string. In this case, the string is used for indentation instead of a number of spaces.

// The space parameter is used solely for logging and nice-output purposes.
