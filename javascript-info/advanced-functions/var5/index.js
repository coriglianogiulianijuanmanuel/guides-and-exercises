"use strict";

// IIFE

// In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).
// That’s not something we should use nowadays, but you can find them in old scripts.

// An IIFE looks like this:
(function () {
  var message = "Hello";

  console.log(message); // Hello
})();
// Here, a Function Expression is created and immediately called. So the code executes right away and has its own private variables.

// The Function Expression is wrapped with parenthesis (function {...}), because when JavaScript engine encounters "function" in the main code, it understands it as the start of a Function Declaration. But a Function Declaration must have a name, so this kind of code will give an error.

/* 
// Tries to declare and immediately call a function
function() { // <-- SyntaxError: Function statements require a function name

  var message = "Hello";

  console.log(message); // Hello

}();
*/

// Even if we say: “okay, let’s add a name”, that won’t work, as JavaScript does not allow Function Declarations to be called immediately:

/* 
// syntax error because of parentheses below
function go() {

}(); // <-- can't call Function Declaration immediately
*/

// So, the parentheses around the function is a trick to show JavaScript that the function is created in the context of another expression, and hence it’s a Function Expression: it needs no name and can be called immediately.

// There exist other ways besides parentheses to tell JavaScript that we mean a Function Expression:

// Ways to create IIFE
(function () {
  alert("Parentheses around the function");
})();

(function () {
  alert("Parentheses around the whole thing");
}());

!function () {
  alert("Bitwise NOT operator starts the expression");
}();

+function () {
  alert("Unary plus starts the expression");
}();

// In all the above cases we declare a Function Expression and run it immediately. Let’s note again: nowadays there’s no reason to write such code.
