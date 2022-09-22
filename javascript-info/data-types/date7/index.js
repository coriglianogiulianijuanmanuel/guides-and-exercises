"use strict";

// Benchmarking

/*
If we want a reliable benchmark of CPU-hungry function, we should be careful.
For instance, let’s measure two functions that calculate the difference between two dates: which one is faster?
Such performance measurements are often called “benchmarks”.

// we have date1 and date2, which function faster returns their difference in ms?

function diffSubtract(date1, date2) {
  return date2 - date1;
}

// or
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}


These two do exactly the same thing, but one of them uses an explicit date.getTime() to get the date in ms, and the other one relies on a date-to-number transform. Their result is always the same.

So, which one is faster?

The first idea may be to run them many times in a row and measure the time difference. For our case, functions are very simple, so we have to do it at least 100000 times.
*/
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

console.log("Time of diffSubtract: " + bench(diffSubtract) + "ms");
console.log("Time of diffGetTime: " + bench(diffGetTime) + "ms");
// Wow! Using getTime() is so much faster! That’s because there’s no type conversion, it is much easier for engines to optimize.
// Okay, we have something. But that’s not a good benchmark yet.
// Imagine that at the time of running bench(diffSubtract) CPU was doing something in parallel, and it was taking resources. And by the time of running bench(diffGetTime) that work has finished.
// A pretty real scenario for a modern multi-process OS.
// As a result, the first benchmark will have less CPU resources than the second. That may lead to wrong results.

// For more reliable benchmarking, the whole pack of benchmarks should be rerun multiple times.
let time1 = 0;
let time2 = 0;

// run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

console.log("Total time for diffSubtract: " + time1);
console.log("Total time for diffGetTime: " + time2);

// Modern JavaScript engines start applying advanced optimizations only to “hot code” that executes many times (no need to optimize rarely executed things). So, in the example above, first executions are not well-optimized. We may want to add a heat-up run:
time1 = 0;
time2 = 0;

// added for "heating up" prior to the main loop
bench(diffSubtract);
bench(diffGetTime);

// now benchmark
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

console.log("Total time for diffSubtract: " + time1);
console.log("Total time for diffGetTime: " + time2);

// Be careful doing microbenchmarking
// Modern JavaScript engines perform many optimizations. They may tweak results of “artificial tests” compared to “normal usage”, especially when we benchmark something very small, such as how an operator works, or a built-in function. So if you seriously want to understand performance, then please study how the JavaScript engine works. And then you probably won’t need microbenchmarks at all.
