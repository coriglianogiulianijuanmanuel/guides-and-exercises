/* anonymous function

(function () {
  alert("Hello!");
});

*/

function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);

//Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener():

textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});

//If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>:

textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});

//If the function only has one line in the curly brackets, you omit the curly brackets:

textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);

//If the function only takes one parameter, you can also omit the brackets around the parameter (here, prettier adds them again, so I can't show it...)

//Finally, if your function needs to return a value, and contains only one line, you can also omit the return statement.
