"use strict";

// Scheduling: setTimeout and setInterval

// We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.
// There are two methods for it:
// * setTimeout allows us to run a function once after the interval of time.
// * setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

// These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js.

// setTimeout

// The syntax: let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

// Parameters:

// func|code
// Function or a string of code to execute. Usually, that’s a function. For historical reasons, a string of code can be passed, but that’s not recommended.

// delay
// The delay before run, in milliseconds (1000 ms = 1 second), by default 0.

// arg1, arg2…
// Arguments for the function (not supported in IE9-)

// For instance, this code calls sayHi() after five second:
function sayHi1() {
  console.log("Hi!");
}

setTimeout(sayHi1, 5000);

// With arguments:
function sayHi2(phrase, who) {
  console.log(`${phrase}, ${who}`);
}

setTimeout(sayHi2, 5000, "Hello", "Juan"); // Hello, Juan

// If the first argument is a string, then JavaScript creates a function from it.
// setTimeout("alert('Hello')", 5000);

// But using strings is not recommended, use arrow functions instead of them, like this:
setTimeout(() => console.log("Hello"), 5000);

setTimeout(
  (phrase, who) => console.log(`${phrase}, ${who}`),
  5000,
  "Hello",
  "Juan"
);

// Pass a function, but don’t run it
// Novice developers sometimes make a mistake by adding brackets () after the function:
// setTimeout(sayHi1(), 5000); // TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined
// That doesn’t work, because setTimeout expects a reference to a function. And here sayHi() runs the function, and the result of its execution is passed to setTimeout. In our case the result of sayHi() is undefined (the function returns nothing), so nothing is scheduled.

// Canceling with clearTimeout

// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

/*
let timerId = setTimeout(...);
clearTimeout(timerId);
*/

// In the code below, we schedule the function and then cancel it (changed our mind). As a result, nothing happens:
let timerId = setTimeout(() => console.log("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

// As we can see from alert output, in a browser the timer identifier is a number. In other environments, this can be something else. For instance, Node.js returns a timer object with additional methods.
// Again, there is no universal specification for these methods, so that’s fine.

// For browsers, timers are described in the timers section of HTML Living Standard.
