"use strict";

// Nested setTimeout

// There are two ways of running something regularly. One is setInterval. The other one is a nested setTimeout, like this:

/** instead of:
let timerId = setInterval(() => console.log('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  console.log("tick");
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
// The setTimeout above schedules the next call right at the end of the current one (*).
//The nested setTimeout is a more flexible method than setInterval. This way the next call may be scheduled differently, depending on the results of the current one.

// For instance, we need to write a service that sends a request to the server every 5 seconds asking for data, but in case the server is overloaded, it should increase the interval to 10, 20, 40 seconds…

/*
let delay = 5000;

let timerId = setTimeout(function request() {
  ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);
*/

// And if the functions that we’re scheduling are CPU-hungry, then we can measure the time taken by the execution and plan the next call sooner or later.

// Nested setTimeout allows to set the delay between the executions more precisely than setInterval.

// Let’s compare two code fragments. The first one uses setInterval:

/*
let i = 1;
setInterval(function() {
  func(i++);
}, 100);
*/

//The second one uses nested setTimeout:

/*
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
*/

// For setInterval the internal scheduler will run func(i++) every 100ms. But.. the real delay between func calls for setInterval is less than in the code!
// That’s normal, because the time taken by func's execution “consumes” a part of the interval.
// It is possible that func's execution turns out to be longer than we expected and takes more than 100ms.
// In this case the engine waits for func to complete, then checks the scheduler and if the time is up, runs it again immediately.
// In the edge case, if the function always executes longer than delay ms, then the calls will happen without a pause at all.

// The nested setTimeout guarantees the fixed delay (here 100ms).
// That’s because a new call is planned at the end of the previous one.

/* 
Garbage collection and setInterval/setTimeout callback

When a function is passed in setInterval/setTimeout, an internal reference is created to it and saved in the scheduler. It prevents the function from being garbage collected, even if there are no other references to it.

// the function stays in memory until the scheduler calls it
setTimeout(function() {...}, 100);

For setInterval the function stays in memory until clearInterval is called.

There’s a side effect. A function references the outer lexical environment, so, while it lives, outer variables live too. They may take much more memory than the function itself. So when we don’t need the scheduled function anymore, it’s better to cancel it, even if it’s very small.
*/
