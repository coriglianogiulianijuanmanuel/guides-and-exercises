"use strict";
/* 
let message;
message = "Hello"; 
*/

// To be concise, we can combine the variable declaration and assignment into a single line:

// let message = "Hello";

// We can also declare multiple variables in one line:

// let message = "Hello", user = "John", age = 24;

// That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable. The multiline variant is a bit longer, but easier to read.

/* 
let message = "Hello";
let user = "John";
let age = 24; 
*/

//Some people also define multiple variables in this multiline style:

let message = "Hello",
  user = "John",
  age = 24;

alert(message);

// In older scripts, you may also find another keyword: var instead of let:
var example = "this is an example";
