"use strict";

// Code blocks

// If a variable is declared inside a code block {...}, it’s only visible inside that block.
{
  // do some job with local variables that should not be seen outside

  let message = "Hello"; // only visible in this block

  console.log(message); // Hello
}

// console.log(message); // Error: message is not defined

// We can use this to isolate a piece of code that does its own task, with variables that only belong to it:
{
  //show message
  let message = "Hello";
  console.log(message); // Hello
}
{
  // show another message
  let message = "Goodbye";
  console.log(message); // Goodbye
}

// There’d be an error without blocks. Please note, without separate blocks there would be an error, if we use let with the existing variable name.

// For if, for, while and so on, variables declared in {...} are also only visible inside:
if (true) {
  let phrase = "Hello!";

  console.log(phrase); // Hello!
}

// console.log(phrase); // Error: phrase is not defined

// Here, after if finishes, the console.log below won’t see the phrase, hence the error. That’s great, as it allows us to create block-local variables, specific to an if branch.

// The similar thing holds true for for and while loops:
for (let i = 0; i < 3; i++) {
  // the variable i is only visible inside this for
  console.log(i); // 0, then 1, then 2
}

console.log(i); // Error: i is not defined
// Visually, let i is outside of {...}. But the for construct is special here: the variable, declared inside it, is considered a part of the block.
