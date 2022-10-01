"use strict";

// “var” has no block scope

// Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.
if (true) {
  var test = true; // use "var" instead of "let"
}

console.log(test); // true, the variable lives after if
// As var ignores code blocks, we’ve got a global variable test.

// If we used let test instead of var test, then the variable would only be visible inside if:
if (true) {
  let test2 = true; // use "let"
}

// console.log(test2); // ReferenceError: test2 is not defined

// The same thing for loops: var cannot be block- or loop-local:
for (var i = 0; i < 3; i++) {
  var one = 1;
}

console.log(i); // 3, "i" is visible after loop, it's a global variable
console.log(one); // 1, "one" is visible after loop, it's a global variable

// If a code block is inside a function, then var becomes a function-level variable:
function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  console.log(phrase); // Hello
}

sayHi();
// console.log(phrase); // ReferenceError: phrase is not defined

// As we can see, var pierces through if, for or other code blocks. That’s because a long time ago in JavaScript, blocks had no Lexical Environments, and var is a remnant of that.
