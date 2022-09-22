"use strict";

// The OR || operator can be used in the same way as ??

/*
let firstName = prompt("Please, enter your first name.", "");
let lastName = prompt("Please, enter your last name.", "");
let nickName = prompt("Please, enter your nickname.", "");

alert(`Welcome ${firstName || lastName || nickName || "Anonymous"}`);
*/

// The important difference between them is that:
// || returns the first truthy value.
// ?? returns the first defined value.

// In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

// In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
// The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed. So the result of || is the second argument, 100.
// The height ?? 100 checks height for being null/undefined, and it’s not. So the result is height “as is”, that is 0.

// In practice, the zero height is often a valid value, that shouldn’t be replaced with the default. So ?? does just the right thing.
