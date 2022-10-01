"use strict";

// Global object

// The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.
// In a browser it is named window, for Node.js it is global, for other environments it may have another name.
// Recently, globalThis was added to the language, as a standardized name for a global object, that should be supported across all environments. It’s supported in all major browsers.
// We’ll use window here, assuming that our environment is a browser. If your script may run in other environments, it’s better to use globalThis instead.

// All properties of the global object can be accessed directly:
alert("Hello"); // Hello
// is the same as
window.alert("Hello"); // Hello

// In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:
var gVar = 5;

alert(window.gVar); // 5 (became a property of the global object)

// Function declarations have the same effect (statements with function keyword in the main code flow, not function expressions).

// Please don’t rely on that! This behavior exists for compatibility reasons. Modern scripts use JavaScript modules where such a thing doesn’t happen.

// If we used let instead, such thing wouldn’t happen:
let gLet = 5;

alert(window.gLet); // undefined (doesn't become a property of the global object)

// If a value is so important that you’d like to make it available globally, write it directly as a property:

// make current user information global, to let all scripts access it
window.currentUser = {
  name: "Juan",
};

// somewhere else in code
alert(currentUser.name); // Juan

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // Juan

// That said, using global variables is generally discouraged. There should be as few global variables as possible. The code design where a function gets “input” variables and produces certain “outcome” is clearer, less prone to errors and easier to test than if it uses outer or global variables.
