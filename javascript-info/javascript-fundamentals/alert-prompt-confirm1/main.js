"use strict";

// alert

// It shows a message and waits for the user to press “OK”.
alert("hello");
// The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

// prompt

// It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

// The function prompt accepts two arguments:
// result = prompt(title, [default]);
// title: The text to show the visitor.
// default: An optional second parameter, the initial value for the input field.
// The square brackets in syntax [...]
// The square brackets around default in the syntax above denote that the parameter is optional, not required.

// The visitor can type something in the prompt input field and press OK. Then we get that text in the result. Or they can cancel the input by pressing Cancel or hitting the Esc key, then we get null as the result.

// The call to prompt returns the text from the input field or null if the input was canceled.
let myName = prompt("what's your name?", "John");
alert(`Hi ${myName}! Nice to meet you!`);

// confirm

// result = confirm(question);

// The function confirm shows a modal window with a question and two buttons: OK and Cancel.

// The result is true if OK is pressed and false otherwise.
let doYouLikeNekopara = confirm("Do you like Nekopara?");
alert(`It's ${doYouLikeNekopara} that you like Nekopara`);
