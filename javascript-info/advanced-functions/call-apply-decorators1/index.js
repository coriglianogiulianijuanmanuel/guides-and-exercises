"use strict";

// Decorators and forwarding, call/apply

// JavaScript gives exceptional flexibility when dealing with functions. They can be passed around, used as objects, and now we’ll see how to forward calls between them and decorate them.

// Transparent caching

// Let’s say we have a function slow(x) which is CPU-heavy, but its results are stable. In other words, for the same x it always returns the same result.
// If the function is called often, we may want to cache (remember) the results to avoid spending extra-time on recalculations.
// But instead of adding that functionality into slow() we’ll create a wrapper function, that adds caching. As we’ll see, there are many benefits of doing so.
function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x); // otherwise call func

    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) is cached and the result returned
console.log("Again: " + slow(1)); // slow(1) result returned from cache

console.log(slow(2)); // slow(2) is cached and the result returned
console.log("Again: " + slow(2)); // slow(2) result returned from cache

/* 
In the code above cachingDecorator is a decorator: a special function that takes another function and alters its behavior.

The idea is that we can call cachingDecorator for any function, and it will return the caching wrapper. That’s great, because we can have many functions that could use such a feature, and all we need to do is to apply cachingDecorator to them.

By separating caching from the main function code we also keep the main code simpler.

The result of cachingDecorator(func) is a “wrapper”: function(x) that “wraps” the call of func(x) into caching logic.

From an outside code, the wrapped slow function still does the same. It just got a caching aspect added to its behavior.

To summarize, there are several benefits of using a separate cachingDecorator instead of altering the code of slow itself:

* The cachingDecorator is reusable. We can apply it to another function.
* The caching logic is separate, it did not increase the complexity of slow itself (if there was any).
* We can combine multiple decorators if needed.
*/
