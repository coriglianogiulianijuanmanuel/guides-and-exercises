"use strict";

// Using “func.call” for the context

// The caching decorator is not suited to work with object methods.
// For instance, in the code below worker.slow() stops working after the decoration:

/* 
// we'll make worker.slow caching
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // scary CPU-heavy task here
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
}

console.log( worker.slow(1) ); // the original method works

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined
 
The error occurs in the line (*) that tries to access this.someMethod and fails. Can you see why?

The reason is that the wrapper calls the original function as func(x) in the line (**). And, when called like that, the function gets this = undefined.

We would observe a similar symptom if we tried to run:

let func = worker.slow;
func(2);

So, the wrapper passes the call to the original method, but without the context this. Hence the error.

Let’s fix it.
*/

// There’s a special built-in function method func.call(context, …args) that allows to call a function explicitly setting this. The syntax is: func.call(context, arg1, arg2, ...)
// It runs func providing the first argument as this, and the next as the arguments.
// To put it simply, these two calls do almost the same:

/* 
func(1, 2, 3);
func.call(obj, 1, 2, 3)
*/

// They both call func with arguments 1, 2 and 3. The only difference is that func.call also sets this to obj.

// As an example, in the code below we call sayHi in the context of different objects: sayHi.call(user) runs sayHi providing this=user, and the next line sets this=admin:
function sayHi() {
  console.log(this.name);
}

let user1 = { name: "Juan" };
let admin = { name: "Admin" };

// use call to pass different objects as "this"
sayHi.call(user1); // Juan
sayHi.call(admin); // Admin

// And here we use call to call say with the given context and phrase:
function say(phrase) {
  console.log(`${this.name}: ${phrase}`);
}

let user2 = { name: "Juan" };

// user becomes this, and "Hello" becomes the first argument
say.call(user2, "Hello"); // Juan: Hello

// In our case, we can use call in the wrapper to pass the context to the original function:
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  },
};

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log(worker.slow(2)); // works
console.log(worker.slow(2)); // works, doesn't call the original (cached)

/* 
Now everything is fine.

To make it all clear, let’s see more deeply how this is passed along:

1. After the decoration worker.slow is now the wrapper function (x) { ... }.
2. So when worker.slow(2) is executed, the wrapper gets 2 as an argument and this=worker (it’s the object before dot).
3. Inside the wrapper, assuming the result is not yet cached, func.call(this, x) passes the current this (=worker) and the current argument (=2) to the original method.
*/
