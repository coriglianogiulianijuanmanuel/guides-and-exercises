"use strict";

// A function can return a value back into the calling code as the result.

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result); // 3
// The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

// There may be many occurrences of return in a single function:
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
  alert("Access granted!");
} else {
  alert("Access denied!");
}

// It is possible to use return without a value. That causes the function to exit immediately.
function showAdultsMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  alert("Playing the movie!");
}
// In the code above, if checkAge(age) returns false, then showAdultsMovie won’t proceed to the alert.

// If a function does not return a value or if it use return without a value, it is the same as if it returns undefined.
function doNothing() {
  /* empty */
}

function doNothing2() {
  return;
}
// A function with an empty return or without it returns undefined.
console.log(doNothing() === undefined); // true
console.log(doNothing2() === undefined); //true

// Never add a newline between return and the value, that doesn’t work, because JavaScript assumes a semicolon after return. So, it effectively becomes an empty return ( === undefined)

// If we want the returned expression to wrap across multiple lines, we should start it at the same line as return, or at least put the opening parentheses there.
function returnSomething() {
  return (
    "some" + "really" + "long" + "expression" + "or" + "whatever" * false * true
  );
}
