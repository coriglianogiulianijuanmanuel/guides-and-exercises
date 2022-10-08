"use strict";

// Throwing our own errors

// What if json is syntactically correct, but doesn’t have a required name property?
let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors
  console.log(user.name); // this shows "undefined", cause there is no "name", so catch does not run
} catch (err) {
  console.log("doesn't execute");
}

// Here JSON.parse runs normally, but the absence of name is actually an error for us.

// To unify error handling, we’ll use the throw operator.

// “Throw” operator

// The throw operator generates an error. The syntax is: throw <error object>

// Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).

// JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well.

/* 
Their syntax is:

let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
*/

// For built-in errors (not for any objects, just for errors), the name property is exactly the name of the constructor. And message is taken from the argument.
let error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O

// Let’s see what kind of error JSON.parse generates:
try {
  JSON.parse("{ bad json o_O }");
} catch (err2) {
  alert(err2.name); // SyntaxError
  alert(err2.message); // Unexpected token b in JSON at position 2
}
// As we can see, that’s a SyntaxError.

// And in our case, the absence of name is an error, as users must have a name. So let’s throw it:
let json2 = '{ "age": 30 }'; // incomplete data

try {
  let user2 = JSON.parse(json); // <-- no errors
  if (!user2.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }
  alert(user2.name);
} catch (err3) {
  alert("JSON Error: " + err3.message); // JSON Error: Incomplete data: no name
}

// In the line (*), the throw operator generates a SyntaxError with the given message, the same way as JavaScript would generate it itself. The execution of try immediately stops and the control flow jumps into catch.
// Now catch became a single place for all error handling: both for JSON.parse and other cases.

// testing

let obj = { age: 24 };

try {
  if (!obj.name) {
    throw new SyntaxError("There is no 'name' in 'obj'");
  }
  console.log(obj.name);
} catch (errorObject) {
  console.log(`obj Error: ${errorObject.message}`);
}
