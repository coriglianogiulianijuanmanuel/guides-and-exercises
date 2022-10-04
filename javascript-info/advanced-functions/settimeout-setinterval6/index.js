"use strict";

function printNumbers1(from, to) {
  let current = from;

  let timerID = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timerID);
    }
    current++;
  }, 1000);
}

function printNumbers2(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// Note that in both solutions, there is an initial delay before the first output. The function is called after 1000ms the first time. If we also want the function to run immediately, then we can add an additional call on a separate line, like this:
function printNumbers3(from, to) {
  let current = from;

  function go() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers1(1, 5);
printNumbers2(1, 5);
printNumbers3(1, 5);
