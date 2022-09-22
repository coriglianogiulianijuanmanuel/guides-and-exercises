"use strict";

// The syntax that we used before is called a Function Declaration:

/* 
function sayHi() {
  alert( "Hello" );
}
*/

// There is another syntax for creating a function that is called a Function Expression. It allows us to create a new function in the middle of any expression.

let sayHi = function () {
  alert("Hello");
};
// Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.
// As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.
// Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.
// Here we immediately assign it to the variable, so the meaning of these code samples is the same: "create a function and put it into the variable sayHi".

// Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.
// We can even print out that value using alert:
function sayHi() {
  alert("Hello");
}

alert(sayHi); // shows the function code
// Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

// In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code. Surely, a function is a special value, in the sense that we can call it like sayHi(). But it’s still a value. So we can work with it like with other kinds of values.

// We can copy a function to another variable:
function sayAra() {
  // (1)
  console.log("ara ara");
}

let copyOfSayAra = sayAra; // (2)

sayAra(); // (3) ara ara
copyOfSayAra(); // (3) ara ara
// Here’s what happens above in detail:
// The Function Declaration (1) creates the function and puts it into the variable named sayAra.
// Line (2) copies it into the variable copyOfSayAra. Please note again: there are no parentheses after sayAra. If there were, then copyOfSayAra = sayAra() would write the result of the call sayAra() ("ara ara") into copyOfSayAra, not the function sayAra itself.
// Now the function can be called as both sayAra() and copyOfSayAra().

// We could also have used a Function Expression to declare sayAra, in the first line:
let sayAra = function () {
  console.log("ara ara");
};
// Everything would work the same.
