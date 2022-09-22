"use strict";

// Inside a function, we can check whether it was called with new or without it, using a special new.target property. It is undefined for regular calls and equals the function if called with new:

function User() {
  console.log(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // function User { ... }

// That can be used inside the function to know whether it was called with new, “in constructor mode”, or without it, “in regular mode”.

// We can also make both new and regular calls to do the same, like this:
function User2(name) {
  if (!new.target) {
    return new User2(name);
  }
  this.name = name;
}

let john = User2("John"); // redirects call to new User2
console.log(john.name); // John

/* 
This approach is sometimes used in libraries to make the syntax more flexible. So that people may call the function with or without new, and it still works.

Probably not a good thing to use everywhere though, because omitting new makes it a bit less obvious what’s going on. With new we all know that the new object is being created.
*/
