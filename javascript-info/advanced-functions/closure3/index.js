"use strict";

// 1
let name1 = "John";

function sayHi() {
  console.log("Hi, " + name1);
}

name1 = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

/* 
The answer is: Pete.

A function gets outer variables as they are now, it uses the most recent values.

Old variable values are not saved anywhere. When a function wants a variable, it takes the current value from its own Lexical Environment or the outer one.
*/

// 2
function makeWorker() {
  let name2 = "Pete";

  return function () {
    console.log(name2);
  };
}

let name2 = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

/* 
The answer is: Pete.

The work() function in the code below gets name from the place of its origin through the outer lexical environment reference

So, the result is "Pete" here.

But if there were no let name in makeWorker(), then the search would go outside and take the global variable. In that case the result would be "John".
*/

// 3
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1

console.log(counter2()); // ?
console.log(counter2()); // ?

/* 
The answer: 0,1.

Functions counter and counter2 are created by different invocations of makeCounter.

So they have independent outer Lexical Environments, each one has its own count.
*/

// 4
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter3 = new Counter();

console.log(counter3.up()); // ?
console.log(counter3.up()); // ?
console.log(counter3.down()); // ?

/* 
Surely it will work just fine.

Both nested functions are created within the same outer Lexical Environment, so they share access to the same count variable.
*/

// 5
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // ?

/* 
The result is an error.

The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside.
*/
