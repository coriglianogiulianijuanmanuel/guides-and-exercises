"use strict";

// Another special feature of Function Declarations is their block scope.

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.
let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {
  function welcome() {
    alert("Greetings!");
  }
}

// ...use it later
welcome(); // Error: welcome is not defined
// If we use Function Declaration, it won’t work as intended. That’s because a Function Declaration is only visible inside the code block in which it resides.

// Here’s another example:
let age2 = 16; // take 16 as an example

if (age2 < 18) {
  welcome(); // (runs)

  function welcome() {
    alert("Hello!");
  }

  welcome(); // (runs)
} else {
  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

// What can we do to make welcome visible outside of if?
// The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.
let age3 = prompt("What is your age?", 18);

let welcome;

if (age3 < 18) {
  welcome = function () {
    alert("Hello!");
  };
} else {
  welcome = function () {
    alert("Greetings!");
  };
}

welcome(); // ok now

// Or we could simplify it even further using a question mark operator ?:
let age4 = prompt("What is your age?", 18);

let welcome2 =
  age4 < 18
    ? function () {
        alert("Hello!");
      }
    : function () {
        alert("Greetings!");
      };

welcome2();

/* 
When to choose Function Declaration versus Function Expression?
As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.
*/
