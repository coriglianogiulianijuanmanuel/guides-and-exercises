"use strict";

// In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.

// There’s no syntax error in the following example:
function sayHi() {
  console.log(this.name);
}

// The value of this is evaluated during the run-time, depending on the context.

// For instance, here the same function is assigned to two different objects and has different “this” in the calls:
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi2() {
  console.log(this.name);
}

// use the same function in two objects
user.f = sayHi2;
admin.f = sayHi2;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John (this == user)
admin.f(); // Admin (this == admin)

// dot or square brackets access the method – doesn't matter
user["f"](); // John
admin["f"](); // Admin

// The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above.
