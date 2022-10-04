"use strict";

// Zero delay setTimeout

// There’s a special use case: setTimeout(func, 0), or just setTimeout(func).
// This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.
// So the function is scheduled to run “right after” the current script.

// This outputs “Hello”, then immediately “World”:
setTimeout(() => console.log("World"));

console.log("Hello");
// The first line “puts the call into calendar after 0ms”. But the scheduler will only “check the calendar” after the current script is complete, so "Hello" is first, and "World" – after it.

/* 
Zero delay is in fact not zero (in a browser)

In the browser, there’s a limitation of how often nested timers can run. The HTML Living Standard says: “after five nested timers, the interval is forced to be at least 4 milliseconds.”.

Let’s demonstrate what it means with the example below. The setTimeout call in it re-schedules itself with zero delay. Each call remembers the real time from the previous one in the times array. What do the real delays look like? Let’s see:
*/

let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // remember delay from the previous call

  if (start + 100 < Date.now()) alert(times); // show the delays after 100ms
  else setTimeout(run); // else re-schedule
});

// 1,1,1,1,6,10,14,18,23,27,32,37,42,46,50,54,58,63,67,73,78,83,88,93,98,102

/* 
First timers run immediately (just as written in the spec), and then we see 9, 15, 20, 24.... The 4+ ms obligatory delay between invocations comes into play.

The similar thing happens if we use setInterval instead of setTimeout: setInterval(f) runs f few times with zero-delay, and afterwards with 4+ ms delay.

That limitation comes from ancient times and many scripts rely on it, so it exists for historical reasons.

For server-side JavaScript, that limitation does not exist, and there exist other ways to schedule an immediate asynchronous job, like setImmediate for Node.js. So this note is browser-specific.
*/
