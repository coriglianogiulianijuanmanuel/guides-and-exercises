"use strict";

// Going partial without context

// What if we’d like to fix some arguments, but not the context this? For example, for an object method. The native bind does not allow that. We can’t just omit the context and jump to arguments.

// Fortunately, a function partial for binding only arguments can be easily implemented:
function partial(func, ...argsBound) {
  return function (...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  };
}

// Usage:
let user = {
  firstName: "John",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};

// add a partial method with fixed time
user.sayNow = partial(
  user.say,
  new Date().getHours() + ":" + new Date().getMinutes()
);

user.sayNow("Hello");
// Something like:
// [10:00] John: Hello!

// The result of partial(func[, arg1, arg2...]) call is a wrapper (*) that calls func with:

// * Same this as it gets (for user.sayNow call it’s user)
// * Then gives it ...argsBound – arguments from the partial call ("10:00")
// * Then gives it ...args – arguments given to the wrapper ("Hello")

// So easy to do it with the spread syntax, right? Also there’s a ready _.partial implementation from lodash library.
