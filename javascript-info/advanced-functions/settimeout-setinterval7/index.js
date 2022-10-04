"use strict";

function printNumbers1(from, to) {
  let current = from;

  function go() {
    console.log(current);
    if (current === to) {
      clearInterval(timerID);
    }
    current++;
  }

  go();
  let timerID = setInterval(go, 1000);
}

function printNumbers2(from, to) {
  let current = from;

  function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }

  go();
}

printNumbers1(1, 5);
printNumbers2(1, 5);
