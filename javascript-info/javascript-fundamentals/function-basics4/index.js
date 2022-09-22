"use strict";

// If a function is called, but an argument is not provided, then the corresponding value becomes undefined. For instance, the aforementioned function showMessage(from, text) can be called with a single argument: showMessage("Ann");That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.

// We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:
function showMessage(from, text = "-- No message provided --") {
  console.log(from + ": " + text);
}

showMessage("Juan"); // Juan: -- No message provided --
// Now if the text parameter is not passed, it will get the value "-- No message provided --"

// The default value also jumps in if the parameter exists, but strictly equals undefined:
showMessage("Juan", undefined); // Juan: -- No message provided --

// Here "-- No message provided --" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:

/* 
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
*/

// In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter. In the example above, anotherFunction() isn’t called at all, if the text parameter is provided. On the other hand, it’s independently called every time when text is missing.

function identifierNumber(
  userName,
  maxIdNumber,
  idNumber = Math.floor(Math.random() * maxIdNumber)
) {
  console.log(userName + " id: " + idNumber);
}

identifierNumber("Juan", 200);
