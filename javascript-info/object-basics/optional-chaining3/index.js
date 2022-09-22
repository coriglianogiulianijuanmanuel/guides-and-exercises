"use strict";

// Short-circuiting
// As it was said before, the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist. So, if there are any further function calls or operations to the right of ?., they won’t be made.
let user = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

console.log(x); // 0, value not incremented

// The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

//For example, ?.() is used to call a function that may not exist.

// In the code below, some of our users have admin method, and some don’t:
let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)
// Here, in both lines we first use the dot (userAdmin.admin) to get admin property, because we assume that the user object exists, so it’s safe read from it. Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). Otherwise (for userGuest) the evaluation stops without errors.

// The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it allows to safely read a property from an object that may not exist.
let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

// Also we can use ?. with delete:
delete user?.name; // delete user.name if user exists

// The optional chaining ?. has no use on the left side of an assignment.
let user3 = null;

user3?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"

/* 
The optional chaining ?. syntax has three forms:

1. obj?.prop – returns obj.prop if obj exists, otherwise undefined.
2. obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
3. obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.

Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic, that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur.
*/