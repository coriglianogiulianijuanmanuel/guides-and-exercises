"use strict";

// Use case: caching

// Another common example is caching. We can store (“cache”) results from a function, so that future calls on the same object can reuse it.
// For multiple calls of process(obj) with the same object, it only calculates the result the first time, and then just takes it from cache.

// 📁 cache.js
let cache = new WeakMap();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculate the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {
  /* some object */
};

let result1 = process(obj);
let result2 = process(obj);

// ...later, when the object is not needed any more:
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well
