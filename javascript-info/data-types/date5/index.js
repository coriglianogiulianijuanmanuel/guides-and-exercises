"use strict";

// Date to number, date diff

// When a Date object is converted to number, it becomes the timestamp same as date.getTime():
let date = new Date();
console.log(+date);

// The important side effect: dates can be subtracted, the result is their difference in ms.
// That can be used for time measurements:
let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

console.log(`The loop took ${end - start} ms`);
