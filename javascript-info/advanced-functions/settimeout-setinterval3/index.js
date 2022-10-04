"use strict";

let message;

let timerID = setInterval(() => {
  if (message === "tick") message = "tack";
  else message = "tick";
  console.log(message);
}, 1000);

setTimeout(() => {
  clearInterval(timerID);
  console.log("10 seconds!");
}, 10000);
