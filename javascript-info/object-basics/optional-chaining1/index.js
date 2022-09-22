"use strict";

// The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

/* 
If you’ve just started to read the tutorial and learn JavaScript, maybe the problem hasn’t touched you yet, but it’s quite common.

As an example, let’s say we have user objects that hold the information about our users.

Most of our users have addresses in user.address property, with the street user.address.street, but some did not provide them.

In such case, when we attempt to get user.address.street, and the user happens to be without an address, we get an error:
*/
let user = {}; // a user without "address" property

console.log(user.address.street); // error!
// That’s the expected result. JavaScript works like this. As user.address is undefined, an attempt to get user.address.street fails with an error. In many practical cases we’d prefer to get undefined instead of an error here (meaning “no street”).

// …and another example. In Web development, we can get an object that corresponds to a web page element using a special method call, such as document.querySelector('.elem'), and it returns null when there’s no such element.
// document.querySelector('.elem') is null if there's no element
let html = document.querySelector(".elem").innerHTML; // error if it's null
// Once again, if the element doesn’t exist, we’ll get an error accessing .innerHTML property of null. And in some cases, when the absence of the element is normal, we’d like to avoid the error and just accept html = null as the result.

// How can we do this? The obvious solution would be to check the value using if or the conditional operator ?, before accessing its property, like this:
let user2 = {};

console.log(user2.address ? user2.address.street : undefined);
// It works, there’s no error… But it’s quite inelegant. As you can see, the "user.address" appears twice in the code.

// Here’s how the same would look for document.querySelector:
let html2 = document.querySelector(".elem")
  ? document.querySelector(".elem").innerHTML
  : null;
// We can see that the element search document.querySelector('.elem') is actually called twice here. Not good.
// For more deeply nested properties, it becomes even uglier, as more repetitions are required.

// E.g. let’s get user.address.street.name in a similar fashion.
let user3 = {};

console.log(
  user3.address
    ? user3.address.street
      ? user3.address.street.name
      : null
    : null
);
// That’s just awful, one may even have problems understanding such code.

// There’s a little better way to write it, using the && operator:
let user4 = {};

console.log(user4.address && user4.address.street && user4.address.street.name); // undefined (no error)
// AND’ing the whole path to the property ensures that all components exist (if not, the evaluation stops), but also isn’t ideal. As you can see, property names are still duplicated in the code. E.g. in the code above, user.address appears three times.

// That’s why the optional chaining ?. was added to the language. To solve this problem once and for all!
