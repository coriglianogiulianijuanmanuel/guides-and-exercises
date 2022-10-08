"use strict";

// Bonus: Object.prototype.toString for the type

// We already know that plain objects are converted to string as [object Object]:
let obj = {};

alert(obj); // [object Object]
alert(obj.toString()); // the same

// That’s their implementation of toString. But there’s a hidden feature that makes toString actually much more powerful than that. We can use it as an extended typeof and an alternative for instanceof.
// Sounds strange? Indeed. Let’s demystify.

/* 
By specification, the built-in toString can be extracted from the object and executed in the context of any other value. And its result depends on that value.

* For a number, it will be [object Number]
* For a boolean, it will be [object Boolean]
* For null: [object Null]
* For undefined: [object Undefined]
* For arrays: [object Array]
* …etc (customizable).

*/

// copy toString method into a variable for convenience
let objectToString = Object.prototype.toString;

// what type is this?
let arr = [];

alert(objectToString.call(arr)); // [object Array]

// Here we used call to execute the function objectToString in the context this=arr.

// Internally, the toString algorithm examines this and returns the corresponding result. More examples:
let s = Object.prototype.toString;

alert(s.call(123)); // [object Number]
alert(s.call(null)); // [object Null]
alert(s.call(alert)); // [object Function]

// Symbol.toStringTag

// The behavior of Object toString can be customized using a special object property Symbol.toStringTag.
let user = {
  [Symbol.toStringTag]: "User",
};

alert({}.toString.call(user)); // [object User]

// For most environment-specific objects, there is such a property. Here are some browser specific examples:
// toStringTag for the environment-specific object and class:
alert(window[Symbol.toStringTag]); // Window
alert(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest

alert({}.toString.call(window)); // [object Window]
alert({}.toString.call(new XMLHttpRequest())); // [object XMLHttpRequest]

/* 
As you can see, the result is exactly Symbol.toStringTag (if exists), wrapped into [object ...].

At the end we have “typeof on steroids” that not only works for primitive data types, but also for built-in objects and even can be customized.

We can use {}.toString.call instead of instanceof for built-in objects when we want to get the type as a string rather than just to check.
*/
