"use strict";

// Local variables
// A variable declared inside a function is only visible inside that function.
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log(message);
}

showMessage(); // Hello, I'm JavaScript!

console.log(message); // <-- Error! The variable is local to the function

// Outer variables
// A function can access an outer variable as well.
let userName = "John";

function showMessage1() {
  let message = "Hello, " + userName;
  console.log(message);
}

showMessage1(); // Hello, John

// The function has full access to the outer variable. It can modify it as well.
let userName2 = "John";

function showMessage2() {
  userName2 = "Bob"; // (1) changed the outer variable

  let message = "Hello, " + userName2;
  console.log(message);
}

console.log(userName2); // John before the function call

showMessage2();

console.log(userName2); // Bob, the value was modified by the function

// The outer variable is only used if there’s no local one. If a same-named variable is declared inside the function then it shadows the outer one.
let userName3 = "John";

function showMessage3() {
  let userName3 = "Bob"; // declare a local variable

  let message = "Hello, " + userName3; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage3(); // Hello, Bob

console.log(userName3); // John, unchanged, the function did not access the outer variable

/* 
Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.
*/
